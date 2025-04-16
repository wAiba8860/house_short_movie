import React, { useState, useRef, useEffect } from "react";
import { InstagramEmbed } from "react-social-media-embed";
import { flushSync } from "react-dom";
import styled from "styled-components";
import { ButtonMainStyle, H2Style } from "./App";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { animateButton, animateFadeInTopRef } from "./animation";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(useGSAP);
export function CompanyAchievement() {
    const [imageList, setImageList] =
        useState<{ id: number; src: string; url: string }[]>(achievements);
    const [isPlaying, setIsPlaying] = useState<boolean>(true);
    const [isImageShow, setIsImageShow] = useState<boolean>(false);
    const [popUpIndex, setPopUpIndex] = useState<number>(0);
    const imageRef1 = useRef<(HTMLImageElement | null)[]>([]);
    const imageRef2 = useRef<(HTMLImageElement | null)[]>([]);
    const gsapRef1 = useRef<GSAPAnimation | null>(null);
    const gsapRef2 = useRef<GSAPAnimation | null>(null);
    const H2ref = useRef<HTMLHeadingElement | null>(null);
    const buttonRef = useRef<HTMLButtonElement | null>(null);
    const PoPUpRef = useRef<HTMLDivElement | null>(null);

    useGSAP(() => {
        animateFadeInTopRef(H2ref.current);
        startScrollAnimation();
        animateButton(buttonRef.current);
    });

    const startScrollAnimation = () => {
        gsapRef1.current = gsap
            .timeline()
            .fromTo(
                imageRef1.current.filter((ref) => {
                    return ref !== null;
                }),
                {
                    x: "-250px",
                },
                {
                    x: "-2250px",
                    duration: 30,
                    ease: "linear",
                }
            )
            .fromTo(
                imageRef1.current.filter((ref) => {
                    return ref !== null;
                }),
                {
                    x: "2005px",
                },
                {
                    x: "-1995px",
                    repeat: -1,
                    duration: 60,
                    ease: "linear",
                },
                ">"
            );
        gsapRef2.current = gsap.fromTo(
            imageRef2.current.filter((ref) => {
                return ref !== null;
            }),
            {
                x: "-250px",
            },
            {
                x: "-4250px",
                repeat: -1,
                duration: 60,
                ease: "linear",
            }
        );
    };

    useGSAP(() => {
        if (isPlaying) {
            gsapRef1.current?.resume();
            gsapRef2.current?.resume();
        } else {
            gsapRef1.current?.pause();
            gsapRef2.current?.pause();
        }
    }, [isPlaying]);

    function handleImage(index: number): void {
        flushSync(() => {
            isPlaying && setIsPlaying(!isPlaying);
            setIsImageShow(!isImageShow);
            setPopUpIndex(index);
        });

        gsap.fromTo(
            PoPUpRef.current,
            {
                y: "5rem",
                opacity: 0,
            },
            {
                y: 0,
                opacity: 1,
                duration: 0.5,
                ease: "power4.out",
            }
        );
    }

    return (
        <SContainer>
            <H2Style ref={H2ref}>当社の実績</H2Style>
            <H3Style>気になるサムネイルを触ってみよう！</H3Style>
            <OverFlow>
                <UlStyle>
                    {imageList.map((image, index) => {
                        return (
                            <ListStyle key={image.id}>
                                <ImageTag
                                    ref={(rf) => {
                                        imageRef1.current[index] = rf;
                                    }}
                                    src={image.src}
                                    onClick={() => {
                                        handleImage(index);
                                    }}
                                    alt={"image" + index}
                                />
                            </ListStyle>
                        );
                    })}
                    {imageList.map((image, index) => {
                        return (
                            <ListStyle key={image.id}>
                                <ImageTag
                                    ref={(rf) => {
                                        imageRef2.current[index] = rf;
                                    }}
                                    src={image.src}
                                    onClick={() => {
                                        handleImage(index);
                                    }}
                                    alt={"image" + index}
                                />
                            </ListStyle>
                        );
                    })}
                </UlStyle>
            </OverFlow>
            {isImageShow && (
                <HandleImagePopUp
                    ref={PoPUpRef}
                    onClick={() => {
                        setIsImageShow(!isImageShow);
                    }}
                >
                    <InstagramPopUp>
                        <InstagramEmbed
                            width={320}
                            url={imageList[popUpIndex].url}
                        />
                    </InstagramPopUp>
                    <H3StylePoP>
                        画面をクリックして再生
                        <br />
                        画面外をクリックして閉じる
                    </H3StylePoP>
                </HandleImagePopUp>
            )}
            <PlayingButton
                onClick={() => {
                    setIsPlaying(!isPlaying);
                }}
            >
                {!isPlaying ? Play : Pause}
            </PlayingButton>
            <div>クリックで再生＆停止</div>
            <ButtonMainStyle ref={buttonRef}>
                その他の実績はこちら
            </ButtonMainStyle>
        </SContainer>
    );
}

function achievements(): { id: number; src: string; url: string }[] {
    const achievementsImages = [
        {
            id: 0,
            src: `./images/achievementsImage0.png`,
            url: "https://www.instagram.com/reel/C52Awv-tUOh/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
        },
        {
            id: 1,
            src: `./images/achievementsImage1.png`,
            url: "https://www.instagram.com/reel/DFHccAxPN9z/?utm_source=ig_embed&amp;utm_campaign=loading",
        },
        {
            id: 2,
            src: `./images/achievementsImage2.png`,
            url: "https://www.instagram.com/reel/DBXtGy8uJis/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
        },
        {
            id: 3,
            src: `./images/achievementsImage3.png`,
            url: "https://www.instagram.com/reel/DAHn1H_PDa4/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
        },
        {
            id: 4,
            src: `./images/achievementsImage4.png`,
            url: "https://www.instagram.com/reel/C_wrUa6tyII/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
        },
        {
            id: 5,
            src: `./images/achievementsImage5.png`,
            url: "https://www.instagram.com/reel/C_Hy9p-u0LG/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
        },
        {
            id: 6,
            src: `./images/achievementsImage6.png`,
            url: "https://www.instagram.com/reel/C8tImlRPB3D/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
        },
        {
            id: 7,
            src: `./images/achievementsImage7.png`,
            url: "https://www.instagram.com/reel/C6xNOqbP6TC/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
        },
    ];
    return achievementsImages;
}

const SContainer = styled.div`
    font-size: 1.2rem;
`;

const H3Style = styled.h3`
    font-size: 1.5rem;
    margin: 1rem 0;
`;
const ImageTag = styled.img`
    width: 250px;
    cursor: pointer;
`;
const UlStyle = styled.ul`
    width: 2000px;
    display: flex;
    gap: 1rem;
`;
const OverFlow = styled.div`
    overflow: hidden;
`;
const ListStyle = styled.li`
    list-style-type: none;
`;
const PlayingButton = styled.button`
    width: 70px;
    height: 70px;
    border: 3px solid #109ed1;
    padding: 0.5rem;
    color: #109ed1;
    border-radius: 50%;
    margin: 1rem 0;
    &:hover {
        transition: 0.5s;
        transform: scale(1.2);
    }
`;
const HandleImagePopUp = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #ddd;
    width: 90vw;
    height: 100vh;
    max-width: 500px;
    border-radius: 3rem;
    z-index: 12;
`;
const InstagramPopUp = styled.div`
    position: absolute;
    top: 0;
    left: 50%;
    transform: translate(-50%, 0) scale(1);
    height: 10%;
`;
const H3StylePoP = styled.h3`
    position: absolute;
    width: 100%;
    bottom: 0;
    left: 50%;
    transform: translate(-50%, 0);
`;
const GridTwoColumns = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    align-items: center;
    margin-top: 2rem;
`;
const Play = (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="50"
        height="50"
        viewBox="0 0 50 50"
    >
        <polygon points="15,10 40,25 15,40" fill="#109ed1" />
    </svg>
);

const Pause = (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="50"
        height="50"
        viewBox="0 0 50 50"
    >
        <rect x="10" y="10" width="8" height="30" fill="#109ed1" />
        <rect x="30" y="10" width="8" height="30" fill="#109ed1" />
    </svg>
);
