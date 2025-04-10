import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

gsap.registerPlugin(useGSAP);

export function KeyView() {
    const titleRef1 = useRef<(HTMLSpanElement | null)[]>([]);
    const titleRef2 = useRef<(HTMLSpanElement | null)[]>([]);
    const titleTextSplit1 = "心に残る".split("");
    const titleTextSplit2 = "ハウスムービー".split("");

    useGSAP(() => {
        gsap.timeline()
            .fromTo(
                titleRef1.current.filter((title) => {
                    return title !== null;
                }),
                {
                    opacity: 0,
                },
                {
                    opacity: 1,
                    duration: 0.5,
                    stagger: 0.1,
                    ease: "power1.out",
                    delay: 2.8,
                }
            )
            .fromTo(
                titleRef2.current.filter((title) => {
                    return title !== null;
                }),
                {
                    opacity: 0,
                },
                {
                    opacity: 1,
                    duration: 0.5,
                    stagger: 0.1,
                    ease: "power1.out",
                },
                "-=0.3"
            );
    }, []);

    return (
        <>
            <KeyViewContainer>
                <BackgroundOpacity>
                    <Canvas>
                        <ambientLight intensity={2.0} />
                        <spotLight
                            position={[10, 10, 10]}
                            angle={0.15}
                            penumbra={1}
                        />
                        <CircularImages />
                    </Canvas>
                    <div style={{ textAlign: "left" }}>
                        <SiteTitle>
                            {titleTextSplit1.map((titleText, index) => {
                                return (
                                    <span
                                        key={index}
                                        ref={(rf) => {
                                            titleRef1.current[index] = rf;
                                        }}
                                    >
                                        {titleText}
                                    </span>
                                );
                            })}
                            &emsp;&emsp;
                            <br />
                            &emsp;
                            {titleTextSplit2.map((titleText, index) => {
                                return (
                                    <span
                                        key={index}
                                        ref={(rf) => {
                                            titleRef2.current[index] = rf;
                                        }}
                                    >
                                        {titleText}
                                    </span>
                                );
                            })}
                        </SiteTitle>
                    </div>
                </BackgroundOpacity>
            </KeyViewContainer>
        </>
    );
}

interface CircularImageProp {
    src: string;
    position: [number, number, number];
}

function CircularImage({ src, position }: CircularImageProp) {
    const texture = new THREE.TextureLoader().load(src);
    const meshRef = useRef<THREE.Mesh>(null);

    useFrame(({ camera }) => {
        if (meshRef.current) {
            meshRef.current.lookAt(camera.position); // 常にカメラを向く
        }
    });

    return (
        <mesh position={position} ref={meshRef}>
            <planeGeometry args={[1.3, 2.8]} />
            <meshStandardMaterial map={texture} />
        </mesh>
    );
}

function CircularImages() {
    const groupRef = useRef<THREE.Group>(null); // グループを回転させるための参照
    const images = Array(8)
        .fill(null)
        .map((_, i) => `./images/achievementsImage${i}.png`);
    const radius = 2.1; // 輪の半径

    useFrame(({ clock }) => {
        if (groupRef.current) {
            const elapsed = clock.getElapsedTime(); // 経過時間を取得
            groupRef.current.rotation.y = (elapsed / 30) * Math.PI * 2; // 10秒で一周（2π）
        }
    });

    return (
        <group ref={groupRef}>
            {images.map((src, index) => {
                const angle = (index / images.length) * Math.PI * 2;
                const x = radius * Math.cos(angle);
                const z = radius * Math.sin(angle);
                return (
                    <CircularImage key={index} src={src} position={[x, 0, z]} />
                );
            })}
        </group>
    );
}

const KeyViewContainer = styled.div`
    background-image: url("./images/houseBack.jpg");
    background-position: center;
    background-size: cover;
    max-width: 1200px;
    margin: 0 auto;
    height: 100vh;
`;

const BackgroundOpacity = styled.div`
    height: 100vh;
    display: grid;
    grid-template-columns: 3fr 1fr;
    gap: 1rem;
    align-items: center;
    font-family: "Zen Maru Gothic", serif;
    font-weight: 400;
    background: rgb(238, 249, 253, 0.7);
`;
const SiteTitle = styled.h1`
    writing-mode: vertical-rl;
    font-size: 2.5rem;
    text-shadow: 0px 2px rgb(26, 158, 206), 0px 4px rgb(17, 134, 177),
        0px 6px rgb(13, 121, 156), 3px 7px 7px #109ed1, -3px -1px 7px #109ed1,
        -3px 7px 7px rgb(16, 158, 209), 3px -1px 7px #109ed1;
    color: #fff;
    letter-spacing: 0.3rem;
`;
