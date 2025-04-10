import React, { useState, useRef, Fragment, RefObject } from "react";
import { flushSync } from "react-dom";
import styled from "styled-components";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function Header() {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [isHover, setIsHover] = useState<boolean>(false);
    const menuRef = useRef<HTMLDivElement>(null);
    const buttonsRef = useRef<(HTMLLIElement | null)[]>([]);
    const spanRef = useRef<(HTMLSpanElement | null)[]>([]);
    const menuLists = [
        { id: 0, listName: "動画撮影" },
        { id: 1, listName: "静止画撮影" },
        { id: 2, listName: "撮影プラン" },
        { id: 3, listName: "実績" },
        { id: 4, listName: "会社紹介" },
        { id: 5, listName: "採用情報" },
        { id: 6, listName: "お問い合わせ" },
    ];

    function toggleMenu() {
        flushSync(() => {
            setIsOpen(!isOpen);
        });
        if (!isOpen) {
            gsap.to(menuRef.current, {
                y: "600px",
                duration: 1.0,
                ease: "power4.out",
            });
            gsap.fromTo(
                spanRef.current,
                {
                    y: "-2rem",
                    opacity: 0,
                },
                {
                    y: 0,
                    opacity: 1,
                    delay: 0.6,
                    duration: 1.0,
                    ease: "power4.out",
                }
            );
        } else {
            gsap.to(menuRef.current, {
                y: 0,
                duration: 1.0,
                ease: "power4.out",
            });
        }
    }

    function handleMenu(index: number) {
        flushSync(() => {
            setIsHover(!isHover);
        });
        if (!isHover) {
            gsap.to(buttonsRef.current[index], {
                width: "90%",
                ease: "power4.out",
                duration: 0.5,
            });
        } else {
            gsap.to(buttonsRef.current[index], {
                width: "50%",
                ease: "power4.out",
                duration: 0.5,
            });
        }
    }

    return (
        <>
            <HeaderStyle onClick={toggleMenu}>
                <SpanBorder
                    className={`menu ${isOpen ? "open" : ""}`}
                ></SpanBorder>
            </HeaderStyle>
            <HeaderMenu ref={menuRef}>
                <MenuUlStyle>
                    {menuLists.map((menuList, index) => {
                        return (
                            <MenuLiStyle
                                key={menuList.id}
                                ref={(ref) => {
                                    buttonsRef.current[index] = ref;
                                }}
                            >
                                <MenuButton
                                    onMouseEnter={() => {
                                        handleMenu(index);
                                    }}
                                    onMouseLeave={() => {
                                        handleMenu(index);
                                    }}
                                >
                                    <span
                                        style={{ display: "inline-block" }}
                                        ref={(ref) => {
                                            spanRef.current[index] = ref;
                                        }}
                                    >
                                        {menuList.listName}
                                    </span>
                                </MenuButton>
                            </MenuLiStyle>
                        );
                    })}
                </MenuUlStyle>
                <ImageTag src="./images/logoText.gif" alt="" />
            </HeaderMenu>
        </>
    );
}

export function Footer(): React.ReactElement {
    const FooterLists = [
        { id: 0, listName: "採用情報" },
        { id: 1, listName: "会社情報" },
        { id: 2, listName: "お問い合わせ" },
        { id: 3, listName: "プライバシーポリシー" },
        { id: 4, listName: "特定商取引法に基づく表記" },
    ];

    return (
        <FooterStyle>
            <GridTwoColumns>
                <div>
                    <FooterImage src="./images/logoText.gif" alt="logo" />
                    <p>本社:〒000-0000　新潟県〇〇市〇区00-0000</p>
                    <p>TEL:0120-00-0000　MAIL:XXXXX@XXXX.XXX</p>
                </div>
                <NavWrapper>
                    <FooterNav>
                        {FooterLists.filter((list) => {
                            return list.id < 3;
                        }).map((list) => {
                            return (
                                <>
                                    <FooterList key={list.id}>
                                        <div>
                                            <FooterButton>
                                                {list.listName}
                                            </FooterButton>
                                        </div>
                                    </FooterList>
                                </>
                            );
                        })}
                    </FooterNav>
                    <FooterNav>
                        {FooterLists.filter((list) => {
                            return list.id >= 3;
                        }).map((list) => {
                            return (
                                <>
                                    <FooterList key={list.id}>
                                        <div>
                                            <FooterButton>
                                                {list.listName}
                                            </FooterButton>
                                        </div>
                                    </FooterList>
                                </>
                            );
                        })}
                    </FooterNav>
                </NavWrapper>
            </GridTwoColumns>
            <CopyRight>&copy;</CopyRight>
        </FooterStyle>
    );
}

const SpanBorder = styled.span`
    position: fixed;
    top: 2rem;
    right: 1rem;
    z-index: 10;
    width: 50px;
    height: 6px;
    background-color: #fff;
    transition: transform 0.3s ease;
    &::before {
        content: "";
        position: absolute;
        width: 50px;
        height: 6px;
        background-color: #fff;
        top: 1rem;
        right: 0;
        transform: rotate(0) translateY(0);
        transition: transform 0.3s ease;
    }
    &::after {
        content: "";
        position: absolute;
        width: 50px;
        height: 6px;
        background-color: #fff;
        top: -1rem;
        right: 0;
        transform: rotate(0) translateY(0);
        transition: transform 0.3s ease;
    }
    &.open {
        width: 0;
    }

    &.open::before {
        transform: translateY(-1rem) rotate(-45deg);
    }

    &.open::after {
        transform: translateY(1rem) rotate(45deg);
    }
`;
const HeaderStyle = styled.div`
    position: fixed;
    z-index: 10;
    top: -0.3rem;
    right: 0.05rem;
    width: 5rem;
    height: 5rem;
    background-color: rgb(113, 204, 236, 0.8);
    border-radius: 50%;
    cursor: pointer;
`;
const HeaderMenu = styled.div`
    position: fixed;
    z-index: 8;
    top: -600px;
    left: 0;
    width: 100vw;
    height: 600px;
    background-color: rgb(232, 241, 245);
`;
const MenuUlStyle = styled.ul`
    padding: 1rem 2rem;
`;
const MenuLiStyle = styled.li`
    font-size: 1.2rem;
    padding: 1rem 0rem;
    border-bottom: 2px solid #bbb;
    list-style: none;
    width: 50%;
    font-weight: bold;
`;
const MenuButton = styled.button`
    color: rgb(5, 54, 71);
    &:hover {
        transition: 0.5s color;
        color: rgb(152, 179, 185);
    }
`;
const ImageTag = styled.img`
    margin: 2rem 2rem;
    width: 300px;
`;
const FooterStyle = styled.div`
    position: relative;
    height: 300px;
    background-color: rgb(15, 191, 255, 0.3);
`;
const FooterImage = styled.img`
    margin-top: 2rem;
    width: 350px;
`;
const CopyRight = styled.div`
    position: absolute;
    font-size: 2rem;
    bottom: 0.3rem;
    left: 50%;
    transform: translate(-50%, 0);
`;
const GridTwoColumns = styled.div`
    height: 200px;
    display: block;
    grid-template-columns: 2fr 1fr;
    text-align: center;
    align-items: center;
    gap: 1rem;
`;
const FooterNav = styled.ul`
    display: flex;
    justify-content: center;
    gap: 1rem;
`;
const NavWrapper = styled.div`
    position: absolute;
    width: 100%;
    left: 50%;
    transform: translate(-50%, 0);
    bottom: 4rem;
`;
const FooterList = styled.li`
    list-style: none;
`;
const FooterButton = styled.button`
    margin: 0.1rem 0rem;
`;
