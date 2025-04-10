import React, { useState, useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(useGSAP);

export const animateFadeInTopRef = <T extends HTMLElement>(ref: T | null) => {
    if (ref) {
        gsap.fromTo(
            ref,
            {
                y: "5rem",
                opacity: 0,
            },
            {
                y: 0,
                opacity: 1,
                duration: 0.5,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: ref,
                    start: "top 80%",
                },
            }
        );
    }
};

export const animateFadeInOpacity = (element: HTMLElement | null) => {
    if (!element) return gsap.timeline();
    return gsap.fromTo(
        element,
        { opacity: 0 },
        { opacity: 1, ease: "power4.out", duration: 1.0 }
    );
};

export const animateFadeIn = <T extends HTMLElement>(refs: {
    current: (T | null)[];
}) => {
    const elements = refs.current.filter((ref) => ref !== null);
    if (elements.length === 0) return;
    return elements.map((element) =>
        gsap.fromTo(
            element,
            { y: "5rem", opacity: 0 },
            {
                y: 0,
                opacity: 1.0,
                ease: "power4.out",
                duration: 1.0,
                scrollTrigger: {
                    trigger: element,
                    start: "top 80%",
                },
            }
        )
    );
};

export const animateFiveStar = <T extends HTMLElement>(refs: {
    current: (T | null)[];
}) => {
    return gsap.fromTo(
        refs.current.filter((ref) => {
            return ref !== null;
        }),
        {
            y: "5rem",
            opacity: 0,
        },
        {
            y: 0,
            opacity: 1,
            duration: 0.5,
            ease: "power4.out",
            stagger: 0.05,
        }
    );
};

export const animateButton = (ref: HTMLButtonElement | null) => {
    if (!ref) {
        return;
    }
    return gsap.fromTo(
        ref,
        {
            x: "-5rem",
            opacity: 0,
        },
        {
            x: 0,
            opacity: 1,
            duration: 1.0,
            ease: "power4.out",
            scrollTrigger: {
                trigger: ref,
                start: "top 90%",
            },
        }
    );
};
