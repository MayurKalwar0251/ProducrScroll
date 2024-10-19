import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import styles from "./page.module.css";

export default function MovingText() {
  const slider = useRef(null);
  const firstText = useRef(null);
  const secondText = useRef(null);

  let xPer = 0;
  let dir = -1;

  useEffect(() => {
    // Initialize Lenis
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
      smoothTouch: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Register GSAP ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);

    // Animation for the slider
    gsap.to(slider.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        start: 0,
        end: window.innerHeight,
        scrub: 0.2,
        onUpdate: (e) => (dir = e.direction * -1),
      },
      x: "-500px",
    });

    // Start the custom animation loop
    requestAnimationFrame(animation);

    return () => {
      lenis.destroy();
    };
  }, []);

  function animation() {
    if (xPer > 0) {
      xPer = -100;
    }
    if (xPer < -100) {
      xPer = 0;
    }
    gsap.set(firstText.current, { xPercent: xPer });
    gsap.set(secondText.current, { xPercent: xPer });
    xPer += 0.2 * dir;
    requestAnimationFrame(animation);
  }

  return (
    <div className={styles.main}>
      <div className={styles.sliderContainer}>
        <div ref={slider} className={styles.slider}>
          <p ref={firstText}>Manav Chutiya Hai -</p>
          <p ref={secondText}>Manav Chutiya Hai -</p>
        </div>
      </div>
    </div>
  );
}
