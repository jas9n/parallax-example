import "./style.css";
import gsap from "gsap";
import scrollTo from "gsap/ScrollToPlugin";
import scrollTrigger from "gsap/ScrollTrigger";

window.onbeforeunload = () => {
  window.scrollTo(0, 0);
};

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
  .timeline({ defaults: { duration: 1 } })
  .from(".explore", { y: -50, opacity: 0, ease: "power2.out" }, 0)
  .from(
    ".arrow-down",
    {
      y: -25,
      opacity: 0,
      ease: "power1.out",
    },
    "-=.4"
  );

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
  .fromTo(".cloud3", { y: -50 }, { y: -575 }, 0)
  .to(".explore", { opacity: 0.3 }, 0)
  .to(".arrow-down", { opacity: 0 }, 0)
  .from(".iceland", { opacity: 0.3 }, 0)
  .from(".go", { y: -20, opacity: 0 }, "-=.3");

document.querySelector("#arrowBtn").addEventListener("mouseenter", () => {
  gsap.to(".arrow-down", {
    y: 10,
    duration: 0.7,
    ease: "back.inOut(2)",
    overwrite: "auto",
  });
});
document.querySelector("#arrowBtn").addEventListener("mouseleave", () => {
  gsap.to(".arrow-down", {
    y: 0,
    duration: 0.6,
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

document.querySelector(".go").addEventListener("mouseenter", () => {
  gsap.to(".go", {
    y: -5,
    duration: 0.5,
    ease: "power3.out",
    overwrite: "auto",
  });
});
document.querySelector(".go").addEventListener("mouseleave", () => {
  gsap.to(".go", {
    y: 0,
    duration: 0.25,
    ease: "power2.out",
    overwrite: "auto",
  });
});
