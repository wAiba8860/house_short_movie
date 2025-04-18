import React, { useState, useRef, Fragment } from "react";
import styled from "styled-components";
import { ButtonMainStyle, DownArrow, H2Style } from "./App";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { animateFadeInTopRef, animateFadeIn, animateButton } from "./animation";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(useGSAP);

export function ServicePlan() {
    const H2Ref1 = useRef(null);
    const H2Ref2 = useRef(null);
    const fadeInRefs = useRef<(HTMLDivElement | null)[]>([]);
    const buttonRef = useRef<HTMLButtonElement | null>(null);

    useGSAP(() => {
        animateFadeInTopRef(H2Ref1.current);
        animateFadeInTopRef(H2Ref2.current);
        animateFadeIn(fadeInRefs);
        animateButton(buttonRef.current);
    });

    return (
        <Fragment>
            <SContainer>
                <div>
                    <H2Style ref={H2Ref1}>プラン・料金表</H2Style>
                    <FlexBox>
                        <PlanWrapper
                            ref={(ref) => {
                                fadeInRefs.current[0] = ref;
                            }}
                        >
                            <GridTwoColumns>
                                <PlanH3Style>ショート動画制作 </PlanH3Style>

                                <ImageTag
                                    src="./images/videoCamera.jpg"
                                    alt="videoCamera"
                                />
                                <PlanTextWrapper>
                                    <p>60秒の住宅PR動画 (撮影・編集込み)</p>
                                    <Price>50,000円（税抜）</Price>
                                </PlanTextWrapper>
                            </GridTwoColumns>
                        </PlanWrapper>
                        <PlanWrapper
                            ref={(ref) => {
                                fadeInRefs.current[1] = ref;
                            }}
                        >
                            <GridTwoColumns>
                                <PlanH3Style>住宅撮影（静止画）</PlanH3Style>
                                <ImageTag
                                    src="./images/maleCamera.jpg"
                                    alt=""
                                />

                                <PlanTextWrapper>
                                    <p>住宅のプロ撮影（10〜20枚）</p>
                                    <Price>30,000円（税抜）</Price>
                                </PlanTextWrapper>
                            </GridTwoColumns>
                        </PlanWrapper>
                    </FlexBox>
                    <FlexBox>
                        <PlanWrapper
                            ref={(ref) => {
                                fadeInRefs.current[2] = ref;
                            }}
                        >
                            <GridTwoColumns>
                                <PlanH3Style>動画 + 静止画セット</PlanH3Style>
                                <ImageTag src="./images/setCamera.jpg" alt="" />
                                <PlanTextWrapper>
                                    <p>お得なセットプラン</p>
                                    <Price>70,000円（税抜）</Price>
                                </PlanTextWrapper>
                            </GridTwoColumns>
                        </PlanWrapper>
                        <PlanWrapper
                            ref={(ref) => {
                                fadeInRefs.current[3] = ref;
                            }}
                        >
                            <GridTwoColumns>
                                <PlanH3Style>SNS運用もお任せ！</PlanH3Style>
                                <ImageTag src="./images/SNSicon.gif" alt="" />
                                <PlanTextWrapper>
                                    <p>Instagram、TikTok、Youtube</p>
                                    <p>1アカウント</p>
                                    <Price>50,000円（税抜）</Price>
                                </PlanTextWrapper>
                            </GridTwoColumns>
                        </PlanWrapper>
                    </FlexBox>
                </div>
                <div>
                    <ButtonMainStyle ref={buttonRef}>
                        料金プランページはこちら
                    </ButtonMainStyle>
                </div>
                <QAContainer>
                    <H2Style ref={H2Ref2}>
                        よくあるご質問はこちら( Q & A )
                    </H2Style>
                    <div
                        ref={(ref) => {
                            fadeInRefs.current[4] = ref;
                        }}
                    >
                        <H3Style>Q. 納期はどれくらい？</H3Style>
                        <p>
                            A. 撮影後、約 7 日で 1 回目（構成確認）の動画を
                            ご提出いたします。その後、調整指示があれば
                            ご連絡いただき約 3 日後にご提出し、
                            問題なければ納品となります。
                        </p>
                    </div>
                    <div
                        ref={(ref) => {
                            fadeInRefs.current[5] = ref;
                        }}
                    >
                        <H3Style>Q. 修正回数はどれくらい？</H3Style>
                        <p>
                            A. ２回までとなります。
                            もし、２回の修正でもご納得いただけない場合は
                            弊社担当までご連絡ください
                        </p>
                    </div>
                    <div
                        ref={(ref) => {
                            fadeInRefs.current[6] = ref;
                        }}
                    >
                        <H3Style>Q. どんな住宅でも撮影できる？</H3Style>
                        <p>
                            A. はい、新築・リフォーム・リノベーション物件
                            など幅広い物件に対応可能です！
                            もし疑問などございましたら一度ご連絡ください
                        </p>
                    </div>
                </QAContainer>
            </SContainer>
        </Fragment>
    );
}

const SContainer = styled.div`
    font-size: 1.2rem;
`;
const QAContainer = styled.div`
    max-width: 700px;
    margin: auto;
`;
const H3Style = styled.h3`
    font-size: 1.5rem;
    margin: 2rem 0 0.2rem;
`;
const GridTwoColumns = styled.div`
    display: block;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    margin: 2rem 0;
`;
const ImageTag = styled.img`
    width: 100%;
`;
const PlanTextWrapper = styled.div`
    padding: 1rem;
    text-align: left;
    font-weight: bold;
`;
const Price = styled.p`
    color: rgb(145, 184, 6);
`;
const PlanWrapper = styled.div`
    width: 350px;
    margin: auto;
    background-color: #fff;
    border-radius: 2rem;
    box-shadow: 3px 3px 5px rgb(16, 158, 209, 0.4),
        -3px -3px 5px rgb(16, 158, 209, 0.4);

    @media (min-width: 768px) {
        margin: 0;
    }
`;
const PlanH3Style = styled.h3`
    display: inline-block;
    font-size: 1.7rem;
    border-bottom: 3px solid rgb(214, 225, 230, 0.7);
    padding: 1rem 1rem 0;
    margin-bottom: 1rem;
`;
const FlexBox = styled.div`
    @media (min-width: 768px) {
        display: flex;
        justify-content: center;
        gap: 4rem;
        margin: 2rem 0;
    }
`;
