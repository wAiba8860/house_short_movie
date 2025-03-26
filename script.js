//ローディングアニメーション
gsap.registerPlugin(ScrollTrigger);
document.addEventListener("DOMContentLoaded", (event) => {
    gsap.registerPlugin(ScrollTrigger);
});
const loadingEls = document.querySelector(".loading");
const loadingImageLight = document.querySelector(".loadingImageLight");
const loadingImageCamera = document.querySelector(".loadingCamera");
const loadingHouseImage = document.querySelector(".loadingHouse");
const loadingText = document.querySelector(".loadingText");
async function loadingAnimationFunction() {
    await Promise.all([
        gsap
            .timeline()
            .to(loadingImageLight, {
                duration: 1.0,
                rotation: 360,
                scale: 0.2,
                ease: Power4.easeOut,
            })
            .to(loadingImageLight, { x: "-10%" }, 0.9)
            .to(loadingImageCamera, { opacity: 1.0, x: "40%" }, "<")
            .to(loadingText, { opacity: 1.0, y: "150%" }, "<")
            .to(loadingHouseImage, { opacity: 1.0 }, "<"),
    ]);
    await gsap.to(loadingEls, { opacity: 0, delay: 0.5 });
    if (loadingEls) {
        loadingEls.style.display = "none";
    }
}
loadingAnimationFunction();
//キービジュアル
const keyImageEls1 = document.querySelectorAll(".keyViewImage1");
gsap.set(keyImageEls1, { width: "1200px" });
gsap.to(keyImageEls1, {
    duration: 20,
    x: "-80vw",
    repeat: -1,
    yoyo: true,
    ease: "power1.inOut",
    yoyoEase: "power1.inOut",
});
