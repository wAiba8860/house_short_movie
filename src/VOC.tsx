import React, { useState, useRef, Fragment } from "react";
import styled from "styled-components";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { H2Style } from "./App";
import {
    animateFadeInOpacity,
    animateFadeInTopRef,
    animateFiveStar,
} from "./animation";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(useGSAP);

export function Voc() {
    const H2Ref = useRef<HTMLHeadingElement>(null);
    const fadeInRef = useRef<HTMLParagraphElement>(null);
    const fadeInOpacity1 = useRef<HTMLDivElement>(null);
    const fadeInOpacity2 = useRef<HTMLDivElement>(null);
    const fadeInOpacity3 = useRef<HTMLDivElement>(null);
    const fiveStarRef1 = useRef<(HTMLImageElement | null)[]>([]);
    const fiveStarRef2 = useRef<(HTMLImageElement | null)[]>([]);
    const fiveStarRef3 = useRef<(HTMLImageElement | null)[]>([]);

    useGSAP(() => {
        animateFadeInTopRef(H2Ref.current);
        animateFadeInTopRef(fadeInRef.current);
    });

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: fiveStarRef1.current[0],
                start: "top 90%",
            },
        });
        tl.add(animateFiveStar(fiveStarRef1)).add(
            animateFadeInOpacity(fadeInOpacity1.current),
            ">"
        );
    });

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: fiveStarRef2.current[0],
                start: "top 90%",
            },
        });

        tl.add(animateFiveStar(fiveStarRef2)).add(
            animateFadeInOpacity(fadeInOpacity2.current),
            ">"
        );
    });

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: fiveStarRef3.current[0],
                start: "top 90%",
            },
        });

        tl.add(animateFiveStar(fiveStarRef3)).add(
            animateFadeInOpacity(fadeInOpacity3.current),
            ">"
        );
    });

    return (
        <Fragment>
            <SContainer>
                <H2Style ref={H2Ref}>お客様の声</H2Style>
                <p
                    ref={fadeInRef}
                    style={{
                        fontWeight: "bold",
                        marginBottom: "2rem",
                        fontSize: "1.4rem",
                    }}
                >
                    多くのお客様からうれしいお声を
                    <br />
                    いただいております！
                </p>
                <VOCWrapper>
                    <GridFiveColumns>
                        {Array(5)
                            .fill(null)
                            .map((_, index) => {
                                return (
                                    <img
                                        ref={(el) => {
                                            fiveStarRef1.current[index] = el;
                                        }}
                                        style={{
                                            width: "100%",
                                            maxWidth: "50px",
                                        }}
                                        key={index}
                                        src="./images/star.gif"
                                        alt="★5"
                                    />
                                );
                            })}
                    </GridFiveColumns>
                    <div ref={fadeInOpacity1}>
                        <CompanyName>大手工務店A様</CompanyName>
                        <H3Style>短い動画でお客様の反応が増えました！</H3Style>
                        <VOCPStyle>
                            Youtube等の動画サービスは 利用していますが
                            再生時間が短いものの方が
                            再生数とコメントが増えました！
                        </VOCPStyle>
                    </div>
                </VOCWrapper>
                <VOCWrapper>
                    <GridFiveColumns>
                        {Array(5)
                            .fill(null)
                            .map((_, index) => {
                                return (
                                    <img
                                        ref={(el) => {
                                            fiveStarRef2.current[index] = el;
                                        }}
                                        style={{
                                            width: "100%",
                                            maxWidth: "50px",
                                        }}
                                        key={index}
                                        src="./images/star.gif"
                                        alt="★5"
                                    />
                                );
                            })}
                    </GridFiveColumns>
                    <div ref={fadeInOpacity2}>
                        <CompanyName>大手建設会社B様</CompanyName>
                        <H3Style>住宅完成後の訴求が簡単になりました！</H3Style>
                        <VOCPStyle>
                            今までは自社で完成後の住宅の
                            訴求ポイントを考えていましたが
                            動画サービスを利用することにより
                            その手間がなくなりました！
                        </VOCPStyle>
                    </div>
                </VOCWrapper>
                <VOCWrapper>
                    <GridFiveColumns>
                        {Array(5)
                            .fill(null)
                            .map((_, index) => {
                                return (
                                    <img
                                        ref={(el) => {
                                            fiveStarRef3.current[index] = el;
                                        }}
                                        style={{
                                            width: "100%",
                                            maxWidth: "50px",
                                        }}
                                        key={index}
                                        src="./images/star.gif"
                                        alt="★5"
                                    />
                                );
                            })}
                    </GridFiveColumns>
                    <div ref={fadeInOpacity3}>
                        <CompanyName>地元有名工務店C様</CompanyName>
                        <H3Style>
                            SNS運用の負担が減り、集客に集中できました！
                        </H3Style>
                        <VOCPStyle>
                            SNS運用担当が繁忙期によって 増減していましたが
                            運用を任せることによって人員が
                            省けるようになりました！
                        </VOCPStyle>
                    </div>
                </VOCWrapper>
            </SContainer>
        </Fragment>
    );
}

const SContainer = styled.div`
    font-size: 1.2rem;
`;
const H3Style = styled.h3`
    font-size: 1.5rem;
    margin: 1rem 0;
`;
const CompanyName = styled.p`
    font-size: 1.5rem;
`;

const GridFiveColumns = styled.div`
    display: flex;
    justify-content: center;
    gap: 0;
    margin: 0 auto 1rem;
`;
const VOCWrapper = styled.div`
    width: 100%;
    max-width: 500px;
    margin: 0 auto 2rem;
    padding: 1rem 1rem 2rem;
    border: 8px solid #109ed1;
    border-radius: 1rem;
`;
const VOCPStyle = styled.p`
    text-align: left;
    padding: 1rem;
`;
