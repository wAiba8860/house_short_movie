import React, { useState, useRef, ChangeEvent } from "react";
import { flushSync } from "react-dom";
import styled from "styled-components";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ButtonMainStyle, DownArrow, H2Style } from "./App";
import { animateFadeInTopRef } from "./animation";

gsap.registerPlugin(useGSAP);

export function Contact(): React.ReactElement {
    const [isChecked, setIsChecked] = useState<boolean>(false);
    const [isHovered, setIsHovered] = useState<boolean>(false);
    const [isClicked, setIsClicked] = useState<boolean>(false);
    const [userName, setUserName] = useState<string>("");
    const [userFurigana, setUserFurigana] = useState<string>("");
    const [userPhoneNumber, setUserPhoneNumber] = useState<number>(0);
    const [userEmail, setUserEmail] = useState<string>("");
    const [userInquiry, setUserInquiry] = useState<string>("");

    const fadeInRef = useRef<HTMLDivElement>(null);
    const confirmationRef = useRef<HTMLDivElement>(null);
    const H2Ref = useRef<HTMLHeadingElement | null>(null);

    useGSAP(() => {
        animateFadeInTopRef(H2Ref.current);
        animateFadeInTopRef(fadeInRef.current);
    });

    function nameValue(e: ChangeEvent<HTMLInputElement>) {
        setUserName(e.target.value);
    }

    function nameFuriganaValue(e: ChangeEvent<HTMLInputElement>) {
        setUserFurigana(e.target.value);
    }

    function nameNumber(e: ChangeEvent<HTMLInputElement>) {
        setUserPhoneNumber(Number(e.target.value));
    }

    function nameEmail(e: ChangeEvent<HTMLInputElement>) {
        setUserEmail(e.target.value);
    }

    function nameInquiry(e: ChangeEvent<HTMLTextAreaElement>) {
        setUserInquiry(e.target.value);
    }

    function handleChange() {
        setIsChecked(!isChecked);
    }

    function handleMouseEnter() {
        if (isChecked) {
            setIsHovered(!isHovered);
        }
    }

    function handleClick() {
        flushSync(() => {
            setIsClicked(!isClicked);
        });

        if (confirmationRef.current) {
            gsap.to(confirmationRef.current, {
                top: "0rem",
                duration: 1,
                ease: "power4.out",
                autoAlpha: 1,
            });
        }
    }

    return (
        <SContainer>
            <H2Style ref={H2Ref}>お問い合わせ</H2Style>
            <div ref={fadeInRef}>
                <p>お電話はお気軽に！</p>
                <p>
                    運営会社：<TelSpan>0120-XX-XXXX</TelSpan>
                </p>
                <GridTwoColumnsQR>
                    <p style={{ textAlign: "right" }}>
                        弊社LINEもございます
                        <br />
                        QRからアカウント登録
                        <br />
                        お願いします
                    </p>
                    <div style={{ textAlign: "left", marginLeft: "2rem" }}>
                        <img
                            style={{ width: "100px" }}
                            src="./QRsample.jpg"
                            alt="QRcode"
                        />
                    </div>
                </GridTwoColumnsQR>
            </div>
            <div>
                <p>メールでのお問い合わせはこちら</p>
            </div>
            <DownArrow></DownArrow>
            <div>
                <FormStyle action="#" method="POST">
                    <PStyle>お名前:</PStyle>
                    <InputAreaStyle
                        type="text"
                        name="name"
                        id="name"
                        onChange={nameValue}
                    />
                    <PStyle>フリガナ:</PStyle>
                    <InputAreaStyle
                        type="text"
                        name="kanaName"
                        id="kanaName"
                        onChange={nameFuriganaValue}
                    />
                    <PStyle>電話番号:</PStyle>
                    <InputAreaStyle
                        type="number"
                        name="number"
                        id="number"
                        onChange={nameNumber}
                    />
                    <PStyle>メールアドレス:</PStyle>
                    <InputAreaStyle
                        type="email"
                        name="email"
                        id="email"
                        onChange={nameEmail}
                    />
                    <PStyle>お問い合わせ詳細:</PStyle>
                    <TextareaStyle
                        name="textarea"
                        id="textarea"
                        onChange={nameInquiry}
                    ></TextareaStyle>
                    <div style={{ fontSize: "1rem", marginTop: "1rem" }}>
                        <input
                            style={{
                                transform: "scale(1.4)",
                                marginRight: "0.4rem",
                            }}
                            onChange={handleChange}
                            type="checkbox"
                        />
                        個人情報の取り扱いに同意する
                    </div>
                    <SubmitButtonStyle
                        type="button"
                        disabled={!isChecked}
                        style={{
                            backgroundColor: !isChecked ? "#bbb" : "#aede06",
                            border: !isChecked
                                ? "solid 2px #bbb"
                                : "solid 2px #aede06",
                            opacity: !isHovered ? 1.0 : 0.5,
                        }}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseEnter}
                        onClick={handleClick}
                    >
                        ご入力内容のご確認
                    </SubmitButtonStyle>
                    {isClicked && (
                        <SubmitConfirmation ref={confirmationRef}>
                            <H3Style>ご入力内容のご確認</H3Style>
                            <GridTwoColumns>
                                <div>
                                    <p
                                        style={{
                                            textAlign: "left",
                                            fontWeight: "bold",
                                        }}
                                    >
                                        お名前:
                                    </p>
                                    <p
                                        style={{
                                            textAlign: "left",
                                            margin: "0.5rem 0",
                                        }}
                                    >
                                        {userName} 様
                                    </p>
                                </div>
                                <div>
                                    <p
                                        style={{
                                            textAlign: "left",
                                            fontWeight: "bold",
                                        }}
                                    >
                                        フリガナ:
                                    </p>
                                    <p
                                        style={{
                                            textAlign: "left",
                                            margin: "0.5rem 0",
                                        }}
                                    >
                                        {userFurigana} 様
                                    </p>
                                </div>
                            </GridTwoColumns>
                            <GridTwoColumns>
                                <div>
                                    <p
                                        style={{
                                            textAlign: "left",
                                            fontWeight: "bold",
                                        }}
                                    >
                                        電話番号:
                                    </p>
                                    <p
                                        style={{
                                            textAlign: "left",
                                            margin: "0.5rem 0",
                                        }}
                                    >
                                        {userPhoneNumber}{" "}
                                    </p>
                                </div>
                                <div>
                                    <p
                                        style={{
                                            textAlign: "left",
                                            fontWeight: "bold",
                                        }}
                                    >
                                        メールアドレス:
                                    </p>
                                    <p
                                        style={{
                                            textAlign: "left",
                                            margin: "0.5rem 0",
                                        }}
                                    >
                                        {userEmail}{" "}
                                    </p>
                                </div>
                            </GridTwoColumns>
                            <p
                                style={{
                                    textAlign: "left",
                                    fontWeight: "bold",
                                }}
                            >
                                お問い合わせ詳細:{" "}
                            </p>
                            <p
                                style={{
                                    textAlign: "left",
                                    margin: "0.5rem 0",
                                }}
                            >
                                {userInquiry}{" "}
                            </p>
                            <ButtonContainer>
                                <ButtonMainStyle
                                    style={{ marginRight: "1rem" }}
                                    onClick={handleClick}
                                >
                                    修正する
                                </ButtonMainStyle>
                                <ButtonMainStyle
                                    onClick={() => {
                                        alert("送信！");
                                    }}
                                >
                                    送信する
                                </ButtonMainStyle>
                            </ButtonContainer>
                        </SubmitConfirmation>
                    )}
                </FormStyle>
            </div>
        </SContainer>
    );
}

const SContainer = styled.div`
    font-size: 1.2rem;
`;
const H3Style = styled.h3`
    font-size: 1.5rem;
    margin: 1rem 0;
`;
const TelSpan = styled.span`
    font-size: 2rem;
    font-style: italic;
    font-weight: bold;
`;
const FormStyle = styled.form`
    width: 90%;
    max-width: 700px;
    margin: 0 auto;
`;
const PStyle = styled.p`
    text-align: left;
    font-size: 1.2rem;
    margin: 2rem 0 0.2rem;
`;
const InputAreaStyle = styled.input`
    background-color: #fff;
    width: 100%;
    border: 1px solid #ccc;
    border-radius: 0.2rem;
    padding: 0.2rem;
    font-size: 1rem;
`;
const TextareaStyle = styled.textarea`
    background-color: #fff;
    border: 1px solid #ccc;
    border-radius: 0.2rem;
    width: 100%;
    height: 200px;
`;
const SubmitButtonStyle = styled.button`
    margin: 2rem 0;
    background-color: #aede06;
    color: #fff;
    font-size: 1.5rem;
    border: solid 3px #aede06;
    border-radius: 0.5rem;
    padding: 0.2rem 0.5rem;
    &:hover {
        transition: 0.5s all;
    }
`;
const ButtonContainer = styled.div`
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-50%, 0);
    width: 100%;
`;
const SubmitConfirmation = styled.div`
    position: fixed;
    background-color: #eee;
    z-index: 5;
    width: 80%;
    height: 80%;
    inset: 0;
    border-radius: 1rem;
    margin: auto;
    padding: 1rem;
    top: 5rem;
    opacity: 0;
`;
const GridTwoColumns = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    gap: 0.5rem;
    margin: 0.5rem 0;
`;
const GridTwoColumnsQR = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    margin: 2rem 0;
`;
