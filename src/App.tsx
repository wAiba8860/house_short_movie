import React, { useState, useRef, Fragment, RefObject } from "react";
import { flushSync } from "react-dom";
import { CompanyServiceIntroduction } from "./CompanyServiceIntroduction";
import { CompanyAchievement } from "./CompanyAchievement";
import styled from "styled-components";
import { Voc } from "./VOC";
import { ServicePlan } from "./ServicePlan";
import { Contact } from "./Contact";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { KeyView } from "./KeyView";
import { Header, Footer } from "./HeaderFooter";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(useGSAP);

export default function App(): React.ReactElement {
    const topButtonLocationRef = useRef<HTMLDivElement | null>(null);
    const topButtonRef = useRef<HTMLButtonElement | null>(null);
    const keyViewRef = useRef(null);
    const mainRef = useRef(null);
    const contactRef = useRef<HTMLDivElement | null>(null);
    const planRef = useRef<HTMLDivElement | null>(null);

    function handleLinkTop() {
        if (topButtonLocationRef.current) {
            topButtonLocationRef.current.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }
    }

    function handleLinkContact() {
        if (contactRef.current) {
            contactRef.current.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }
    }

    function handleLinkPlan() {
        if (planRef.current) {
            planRef.current.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }
    }

    useGSAP(() => {
        gsap.to(topButtonRef.current, {
            x: "-110px",
            ease: "power3.out",
            scrollTrigger: {
                trigger: mainRef.current,
                start: "top",
                end: "top -200px",
                scrub: true,
            },
        });
    });

    useGSAP(() => {
        ScrollTrigger.create({
            trigger: keyViewRef.current,
            start: "top",
            end: "bottom top-=100%",
            pin: true,
            scrub: true,
            pinSpacing: false,
        });
    });

    return (
        <Wrapper>
            <LoadingAnimate />

            <FixedBanner
                handleLinkContact={handleLinkContact}
                handleLinkPlan={handleLinkPlan}
            />
            <div ref={topButtonLocationRef}></div>
            <FixedButtonTop ref={topButtonRef} onClick={handleLinkTop}>
                <UpArrow></UpArrow>
            </FixedButtonTop>
            <div ref={keyViewRef}>
                <KeyView />
            </div>
            <Header />
            <MainContainer ref={mainRef}>
                <Main ref1={planRef} ref2={contactRef} />
            </MainContainer>

            <Footer />
        </Wrapper>
    );
}

function LoadingAnimate() {
    const loadingRef1 = useRef(null);
    const loadingRef2 = useRef(null);
    const LoadingTextSplit = "CompanyName".split("");
    const textRef = useRef<(HTMLSpanElement | null)[]>([]);

    useGSAP(() => {
        gsap.timeline()
            .fromTo(
                textRef.current.filter((text, index) => {
                    return text !== null;
                }),
                {
                    opacity: 0,
                },
                {
                    opacity: 1.0,
                    duration: 0.8,
                    ease: "power3.out",
                    stagger: 0.1,
                }
            )
            .to(textRef.current, {
                autoAlpha: 0,
                duration: 1.0,
                ease: "power2.in",
                onComplete: () => {
                    gsap.set(textRef.current, { display: "none" });
                },
            })
            .to(
                loadingRef1.current,
                {
                    x: 0,
                    y: "-100vh",
                    duration: 1.0,
                    ease: "power4.in",
                    autoAlpha: 0,
                },
                "<"
            )
            .to(
                loadingRef2.current,
                {
                    y: "100vh",
                    x: 0,
                    duration: 1.0,
                    ease: "power4.in",
                    autoAlpha: 0,
                },
                "<"
            );
    });

    return (
        <>
            <LoadingAnimateStyle1 ref={loadingRef1}></LoadingAnimateStyle1>
            <LoadingAnimateStyle2 ref={loadingRef2}></LoadingAnimateStyle2>
            <LoadingText>
                {LoadingTextSplit.map((text, index) => {
                    return (
                        <span
                            ref={(rf) => {
                                textRef.current[index] = rf;
                            }}
                        >
                            {text}
                        </span>
                    );
                })}
            </LoadingText>
        </>
    );
}

interface FixedBannerProps {
    handleLinkContact: React.MouseEventHandler<HTMLButtonElement>;
    handleLinkPlan: React.MouseEventHandler<HTMLButtonElement>;
}

export function FixedBanner({
    handleLinkContact,
    handleLinkPlan,
}: FixedBannerProps) {
    const [isMouseEnterContact, setMouseEnterContact] = useState(false);
    const [isMouseEnterPlan, setMouseEnterPlan] = useState(false);
    const fixedRefs = useRef<{ [key: string]: HTMLButtonElement | null }>({});

    function handleEnter(e: string) {
        flushSync(() => {
            e === "contact"
                ? setMouseEnterContact(!isMouseEnterContact)
                : setMouseEnterPlan(!isMouseEnterPlan);
        });
        if (fixedRefs.current[e]) {
            gsap.to(fixedRefs.current[e], {
                right: 0,
                duration: 0.5,
                ease: "power4.out",
            });
        }
    }

    function handleLeave(e: string) {
        flushSync(() => {
            e === "contact"
                ? setMouseEnterContact(!isMouseEnterContact)
                : setMouseEnterPlan(!isMouseEnterPlan);
        });
        if (fixedRefs.current[e]) {
            gsap.to(fixedRefs.current[e], {
                right: "-90px",
                duration: 0.5,
                ease: "power4.out",
            });
        }
    }

    return (
        <>
            <FixedButtonContact
                onClick={handleLinkContact}
                onMouseEnter={() => {
                    handleEnter("contact");
                }}
                onMouseLeave={() => {
                    handleLeave("contact");
                }}
                ref={(e) => {
                    fixedRefs.current["contact"] = e;
                }}
            >
                {!isMouseEnterContact ? "<" : "お問い合わせはこちら"}
            </FixedButtonContact>
            <FixedButtonPlan
                onClick={handleLinkPlan}
                onMouseEnter={() => {
                    handleEnter("plan");
                }}
                onMouseLeave={() => {
                    handleLeave("plan");
                }}
                ref={(e) => {
                    fixedRefs.current["plan"] = e;
                }}
            >
                {!isMouseEnterPlan ? "<" : "お申込みページはこちら"}
            </FixedButtonPlan>
        </>
    );
}

interface MainProps {
    ref1: RefObject<HTMLDivElement | null>;
    ref2: RefObject<HTMLDivElement | null>;
}

export function Main({ ref1, ref2 }: MainProps): React.ReactElement {
    return (
        <Fragment>
            <CompanyServiceIntroduction />
            <CompanyAchievement />
            <Voc />
            <div ref={ref1}></div>
            <ServicePlan />
            <div ref={ref2}></div>
            <Contact />
        </Fragment>
    );
}

const LoadingText = styled.h1`
    position: fixed;
    z-index: 30;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(-16deg);
    transform-origin: center center;
    letter-spacing: 0.3rem;
    color: #fff;
    font-family: "Zen Maru Gothic", serif;
    font-weight: bold;
    font-size: 3rem;
`;
const LoadingAnimateStyle1 = styled.div`
    position: fixed;
    z-index: 20;
    clip-path: polygon(0 0, 100% 0, 100% 30%, 0 70%);
    background-color: #109ed1;
    inset: 0;
    width: 101vw;
    height: 101vh;
`;
const LoadingAnimateStyle2 = styled.div`
    position: fixed;
    z-index: 10;
    clip-path: polygon(0 100%, 100% 100%, 100% 30%, 0 70%);
    background-color: #109ed1;
    inset: 0;
    width: 100vw;
    height: 100vh;
`;

export const ButtonMainStyle = styled.button`
    margin: 4rem 0 3rem;
    background-color: #aede06;
    color: #fff;
    font-size: 1.5rem;
    border: solid 3px #aede06;
    border-radius: 0.5rem;
    padding: 0.2rem 0.5rem;
    &:hover {
        transition: 0.5s all;
        color: #aede06;
        background-color: #eef9fd;
    }
`;

export const DownArrow = styled.div`
    position: relative;
    width: 30px;
    height: 30px;
    background-color: #000;
    margin: auto;
    transform: rotate(-45deg);
    &::before {
        width: 30px;
        height: 30px;
        content: "";
        position: absolute;
        top: -5px;
        left: 5px;
        background-color: #eef9fd;
    }
`;

export const UpArrow = styled.div`
    position: relative;
    top: 3px;
    left: 0;
    width: 20px;
    height: 20px;
    background-color: #fff;
    margin: auto;
    transform: rotate(-45deg);
    &::before {
        width: 20px;
        height: 20px;
        content: "";
        position: absolute;
        top: 7px;
        left: -7px;
        background-color: #aaa;
    }
`;

export const H2Style = styled.h2`
    display: inline-block;
    font-weight: bold;
    font-size: 2.5rem;
    margin: 4rem 0 3rem;
    color: #109ed1;
    border-bottom: 3px solid #109ed1;
`;

const FixedButtonTop = styled.button`
    position: fixed;
    z-index: 3;
    bottom: 10px;
    right: -100px;
    width: 60px;
    height: 60px;
    background-color: #aaa;
    border-radius: 50%;
`;

const FixedButtonContact = styled.button`
    position: fixed;
    z-index: 3;
    bottom: 200px;
    right: -90px;
    width: 120px;
    height: 70px;
    background-color: rgb(16, 158, 209);
    color: #fff;
    border-radius: 0.2rem;
    padding: 0.5rem;
    text-align: left;
    font-weight: bold;
`;

const FixedButtonPlan = styled.button`
    position: fixed;
    z-index: 3;
    bottom: 100px;
    right: -90px;
    width: 120px;
    height: 70px;
    background-color: #aede06;
    color: #fff;
    border-radius: 0.2rem;
    padding: 0.5rem;
    text-align: left;
    font-weight: bold;
`;
const MainContainer = styled.div`
    position: relative;
    background: rgb(238, 249, 253);
    text-align: center;
    font-family: "Zen Maru Gothic", serif;
    font-weight: 400;
    overflow-wrap: break-word;
    line-height: 1.7;
    padding: 1rem;
    margin: 0 auto;
    max-width: 1200px;
`;
const Wrapper = styled.div`
    background: rgb(238, 249, 253);
`;
