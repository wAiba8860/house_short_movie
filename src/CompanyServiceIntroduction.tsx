import React, { useState, useRef, Fragment } from "react";
import styled from "styled-components";
import { ButtonMainStyle, DownArrow, H2Style } from "./App";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { animateFadeInTopRef, animateFadeIn, animateButton } from "./animation";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(useGSAP);

export function CompanyServiceIntroduction(): React.ReactElement {
    const H2ref1 = useRef<HTMLHeadingElement>(null);
    const H2ref2 = useRef<HTMLHeadingElement>(null);
    const H2ref3 = useRef<HTMLHeadingElement>(null);
    const fadeInRef = useRef<(HTMLDivElement | null)[]>([]);
    const buttonRef = useRef<HTMLButtonElement | null>(null);

    useGSAP(() => {
        animateFadeInTopRef(H2ref1.current);
        animateFadeInTopRef(H2ref2.current);
        animateFadeInTopRef(H2ref3.current);
        animateFadeIn(fadeInRef);
        animateButton(buttonRef.current);
    });

    return (
        <Fragment>
            <SContainer>
                <div>
                    <H2Style ref={H2ref1}>当社について</H2Style>
                    <div
                        ref={(rf) => {
                            fadeInRef.current[0] = rf;
                        }}
                    >
                        <p>
                            当サービスでは、住宅業界向けにSNS用のショート動画や
                            プロ品質の静止画を撮影・制作いたします。
                        </p>
                        <IntroductionTextBold>
                            「住宅の魅力を伝えたい！」
                        </IntroductionTextBold>
                        <IntroductionTextBold>
                            「SNS での反応を増やしたい！」
                        </IntroductionTextBold>
                        <p>
                            とお考えの工務店・建築会社様に
                            最適なサービスです。SNS運用代行も行っておりますので、大SNS時代と呼ばれる昨今にぴったりのプロモーションをご提案いたします！
                        </p>
                    </div>
                </div>
                <div>
                    <H2Style ref={H2ref2}>サービス紹介</H2Style>
                </div>
                <div>
                    <FlexBox>
                        <div
                            ref={(rf) => {
                                fadeInRef.current[1] = rf;
                            }}
                        >
                            <ServiceWrapper style={{ marginBottom: "2rem" }}>
                                <div>
                                    <ServiceText>
                                        動画撮影基本プラン
                                    </ServiceText>
                                    <PriceText>50,000円～</PriceText>
                                </div>
                                <GridTwoColumns>
                                    <div>
                                        <ImageFemale
                                            src="./images/female1.gif"
                                            alt="female1"
                                        />
                                    </div>
                                    <div>
                                        <ImageText
                                            src="./images/femaleText1.gif"
                                            alt="text1"
                                        />
                                    </div>
                                </GridTwoColumns>
                            </ServiceWrapper>
                        </div>
                        <div
                            ref={(rf) => {
                                fadeInRef.current[2] = rf;
                            }}
                        >
                            <ServiceWrapper style={{}}>
                                <div>
                                    <ServiceText>
                                        静止画撮影基本プラン
                                    </ServiceText>
                                    <PriceText>30,000円～</PriceText>
                                </div>
                                <GridTwoColumns>
                                    <div>
                                        <ImageFemale
                                            src="./images/female1.gif"
                                            alt="female1"
                                        />
                                    </div>
                                    <div>
                                        <ImageText
                                            src="./images/femaleText2.gif"
                                            alt="text2"
                                        />
                                    </div>
                                </GridTwoColumns>
                            </ServiceWrapper>
                        </div>
                    </FlexBox>
                    <H3Style>更に動画静止画同時お申込みで！</H3Style>
                    <DownArrow></DownArrow>

                    <div
                        ref={(rf) => {
                            fadeInRef.current[3] = rf;
                        }}
                    >
                        <ServiceWrapper style={{ marginTop: "3rem" }}>
                            <div>
                                <ServiceText>
                                    動画撮影＆静止画撮影セットプラン
                                </ServiceText>
                                <PriceText>70,000円～</PriceText>
                            </div>
                            <GridTwoColumns>
                                <div>
                                    <ImageFemale
                                        src="./images/female1.gif"
                                        alt="female1"
                                    />
                                </div>
                                <div>
                                    <ImageText
                                        src="./images/femaleText3.gif"
                                        alt="text3"
                                    />
                                </div>
                            </GridTwoColumns>
                        </ServiceWrapper>
                    </div>
                </div>
                <div>
                    <ButtonMainStyle ref={buttonRef}>
                        プランの詳細を見る
                    </ButtonMainStyle>
                </div>
                <div>
                    <H2Style ref={H2ref3}>当社サービスご利用のメリット</H2Style>

                    <FlexBox>
                        <AdvantagesWrapper
                            ref={(rf) => {
                                fadeInRef.current[4] = rf;
                            }}
                        >
                            <AdvantagesH3Style>
                                SNSで拡散されやすい！
                            </AdvantagesH3Style>
                            <AdvantagesPStyle>
                                動画がバズりやすい Instagram・TikTok・YouTube
                                ショート向けに最適化！
                            </AdvantagesPStyle>
                            <AdvantageImage
                                src="./images/SNSicon.gif"
                                alt="sns"
                            />
                        </AdvantagesWrapper>
                        <AdvantagesWrapper
                            ref={(rf) => {
                                fadeInRef.current[5] = rf;
                            }}
                        >
                            <AdvantagesH3Style>
                                住宅の魅力を一分で伝達！
                            </AdvantagesH3Style>
                            <AdvantagesPStyle>
                                ショート動画は 今や動画市場のトレンド！ 3
                                秒で引きつけ、 60
                                秒で伝える動画を制作いたします！
                            </AdvantagesPStyle>
                            <AdvantageImage
                                style={{ width: "200px" }}
                                src="./images/thumbnail.gif"
                                alt="thumbnail"
                            />
                        </AdvantagesWrapper>
                    </FlexBox>
                    <FlexBox>
                        <AdvantagesWrapper
                            ref={(rf) => {
                                fadeInRef.current[6] = rf;
                            }}
                        >
                            <AdvantagesH3Style>
                                プロカメラマンの撮影！
                            </AdvantagesH3Style>
                            <AdvantagesPStyle>
                                撮影のプロだからこそ出来る 住宅の魅力を
                                最大限に引き出す映像制作
                            </AdvantagesPStyle>
                            <AdvantageImage
                                style={{ width: "200px" }}
                                src="./images/camera_male.gif"
                                alt="cameraMan"
                            />
                        </AdvantagesWrapper>
                        <AdvantagesWrapper
                            ref={(rf) => {
                                fadeInRef.current[7] = rf;
                            }}
                        >
                            <AdvantagesH3Style>
                                施工事例の発信で集客力UP！
                            </AdvantagesH3Style>
                            <AdvantagesPStyle>
                                住宅動画で ブランド力を高め、 問い合わせ増加
                            </AdvantagesPStyle>
                            <AdvantageImage
                                style={{ width: "300px" }}
                                src="./images/mailPhone.gif"
                                alt="cameraMan"
                            />
                        </AdvantagesWrapper>
                    </FlexBox>
                </div>
            </SContainer>
        </Fragment>
    );
}

const SContainer = styled.div`
    position: relative;
    font-size: 1.2rem;
    z-index: 1;
    @media (min-width: 768px) {
        font-size: 1.4rem;
    }
`;
const ServiceWrapper = styled.div`
    background-color: #fff;
    width: 350px;
    margin: 0 auto;
    border-radius: 1rem;
    padding-top: 0.5rem;
    box-shadow: 3px 3px 5px rgb(16, 158, 209, 0.6),
        -3px -3px 5px rgb(16, 158, 209, 0.6);
`;
const H3Style = styled.h3`
    font-size: 1.7rem;
    margin: 2rem 0 0.3rem;
`;
const ServiceText = styled.h3`
    font-size: 1.3rem;
`;
const PriceText = styled.p`
    font-size: 1.8rem;
    font-weight: bold;
    color: #aede06;
`;
const IntroductionTextBold = styled.p`
    font-weight: bold;
    font-size: 1.1em;
    margin: 1rem 0;
`;
const ImageFemale = styled.img`
    width: 100px;
    margin: auto;
`;
const ImageText = styled.img`
    width: 230px;
`;
const GridTwoColumns = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    margin: 1rem auto;
`;
const AdvantagesWrapper = styled.div`
    position: relative;
    width: 350px;
    height: 400px;
    border: 5px solid #aede06;
    border-radius: 1rem;
    box-shadow: 3px 3px 5px rgb(121, 153, 6, 0.5),
        -3px -3px 5px rgb(121, 153, 6, 0.5);
    margin: 0 auto 2rem;
    padding: 0.5rem;
    @media (min-width: 768px) {
        margin: 0 0 2rem;
    }
`;
const AdvantagesH3Style = styled.h3`
    font-size: 1.5rem;
    margin: 1rem 0;
    padding-bottom: 1rem;
    border-bottom: 3px solid rgb(169, 211, 20, 0.2);
`;
const AdvantagesPStyle = styled.p`
    text-align: left;
    padding: 1rem;
`;
const AdvantageImage = styled.img`
    position: absolute;
    bottom: 0.5rem;
    left: 50%;
    transform: translate(-50%, 0);
    width: 200px;
`;

const FlexBox = styled.div`
    @media (min-width: 768px) {
        display: flex;
        margin-top: 1rem;
        justify-content: center;
        gap: 5rem;
    }
`;
