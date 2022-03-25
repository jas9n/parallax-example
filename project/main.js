import "./style.css";
import gsap from "gsap";
import scrollTo from "gsap/ScrollToPlugin";
import scrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(scrollTo, scrollTrigger);

gsap.set(".splash", {
  position: "fixed",
  background: "#fff",
  width: "100%",
  height: "100%",
  top: 0,
  left: "50%",
  x: "-50%",
});
gsap.set(".scrollDist", { width: "100%", height: "200%" });
gsap
  .timeline({
    scrollTrigger: {
      trigger: ".scrollDist",
      start: "top top",
      end: "bottom bottom",
      scrub: 1,
    },
  })
  .fromTo(".bg", { y: 0 }, { y: -250 }, 0)
  .fromTo(".cloud1", { y: 100 }, { y: -800 }, 0)
  .fromTo(".cloud2", { y: -150 }, { y: -500 }, 0)
  .fromTo(".cloud3", { y: -50 }, { y: -575 }, 0);

// document.querySelector("#arrowBtn").addEventListener("scroll", () => {
//   document.querySelector("#arrowBtn").style.display = "none";
// });

document.querySelector("#arrowBtn").addEventListener("mouseenter", () => {
  gsap.to(".arrow-down", {
    y: 10,
    duration: 0.8,
    ease: "back.inOut(3)",
    overwrite: "auto",
  });
});
document.querySelector("#arrowBtn").addEventListener("mouseleave", () => {
  gsap.to(".arrow-down", {
    y: 0,
    duration: 0.5,
    ease: "power3.out",
    overwrite: "auto",
  });
});
document.querySelector("#arrowBtn").addEventListener("click", () => {
  gsap.to(window, {
    scrollTo: innerHeight,
    duration: 1.2,
    ease: "power1.inOut",
  });
});
