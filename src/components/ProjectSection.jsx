import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Lenis from "@studio-freight/lenis";

gsap.registerPlugin(ScrollTrigger);

const ProjectSection = () => {
  const leftFirstImagesRef = useRef([]);
  const rightFirstImagesRef = useRef([]);
  const leftSecondImagesRef = useRef([]);
  const rightSecondImagesRef = useRef([]);

  const leftFirstImages = [
    {
      img: "https://cdn.prod.website-files.com/66c74b953957211a234767e2/66eafb65b2b3b16b4e6c526b_66df1a9ec884cbd473175f37_cesarmillan-p-500.webp",
    },
    {
      img: "https://cdn.prod.website-files.com/66c74b953957211a234767e2/66fac6c5628e46f9b254ac5b_360-p-500.avif",
    },
    {
      img: "https://cdn.prod.website-files.com/66c74b953957211a234767e2/66eafb07fed1443f16b5ac2f_66df1aa02e3dd83ce7bef1b4_gripdivision-p-500.webp",
    },
  ];
  const rightFirstImages = [
    {
      img: "https://cdn.prod.website-files.com/66c74b953957211a234767e2/66fac677f1fd2347d39f8d56_flowstate-p-500.avif",
    },
    {
      img: "https://cdn.prod.website-files.com/66c74b953957211a234767e2/66eafb309c044f6cc84c5167_66df1a9e5d2970869b72ebeb_radiant-p-500.webp",
    },
    {
      img: "https://cdn.prod.website-files.com/66c74b953957211a234767e2/66eafb92a47d37eca12e1b96_66df1a9e21f9eaa9c6b2d8f9_renewit-p-500.webp",
    },
  ];
  const leftSecondImages = [
    {
      img: "https://cdn.prod.website-files.com/66c74b953957211a234767e2/66fabeaaaee59700154f0fe9_letitdough-p-500.avif",
    },
    {
      img: "https://cdn.prod.website-files.com/66c74b953957211a234767e2/66eafbb2b2e8e41b5fc281a9_66df1a9e41da0c8d02eaca52_wetheknot-p-500.webp",
    },
  ];
  const rightSecondImages = [
    {
      img: "https://cdn.prod.website-files.com/66c74b953957211a234767e2/66eafb48e015afb72f7cf06c_66df1a9ec884cbd473175f3e_slapfunk-p-500.webp",
    },
    {
      img: "https://cdn.prod.website-files.com/66c74b953957211a234767e2/66fac525fdd082c8568a051b_lumenhearz-p-500.avif",
    },
  ];
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time * 0.5);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Cleanup when component unmounts
    return () => {
      lenis.destroy();
    };
  }, []);

  useEffect(() => {
    // Scroll animations for leftFirstImages
    gsap.fromTo(
      leftFirstImagesRef.current,
      {}, // Starting position
      {
        y: -400, // Final position
        scrollTrigger: {
          trigger: "body",
          start: "top top",
          scrub: 2,
        },
        stagger: 0.2,
      }
    );

    // Scroll animations for rightFirstImages
    gsap.fromTo(
      rightFirstImagesRef.current,
      {},
      {
        y: -450,
        scrollTrigger: {
          trigger: "body",
          start: "top top",
          end: "bottom top",
          scrub: 2,
        },
        stagger: 0.2,
      }
    );

    // Less movement for leftSecondImages
    gsap.fromTo(
      leftSecondImagesRef.current,
      {},
      {
        y: -150,
        scrollTrigger: {
          trigger: "body",
          start: "top top",
          end: "bottom top",
          scrub: 2,
        },
        stagger: 0.2,
      }
    );

    // Less movement for rightSecondImages
    gsap.fromTo(
      rightSecondImagesRef.current,
      {},
      {
        y: -150,
        scrollTrigger: {
          trigger: "body",
          start: "top top",
          end: "bottom top",
          scrub: 2,
        },
        stagger: 0.2,
      }
    );
  }, []);

  return (
    <div className="flex flex-col w-full relative h-[300vh]">
      <div className="w-full h-[100vh] top-0 sticky z-[1000] flex justify-center items-center">
        <h1 className="text-white text-center text-8xl font-extrabold leading-tight">
          Manav Sona <br />
          Mat Kal
        </h1>
      </div>

      {/* Left First Images */}
      <div className="absolute top-[300px] mx-[100px]">
        {leftFirstImages.map((img, index) => (
          <div
            key={index}
            className=" p-2 rounded-xl bg-white w-max"
            style={{ marginLeft: `${index * 30}px` }}
            ref={(el) => (leftFirstImagesRef.current[index] = el)} // Reference for GSAP
          >
            <img src={img.img} className="w-[300px] h-[400px] object-cover" />
          </div>
        ))}
      </div>

      {/* Right First Images */}
      <div className="absolute top-[250px] right-0 mx-[100px]">
        {rightFirstImages.map((img, index) => (
          <div
            key={index}
            className=" p-2 rounded-xl bg-white w-max"
            style={{ marginLeft: `-${index * 30}px` }}
            ref={(el) => (rightFirstImagesRef.current[index] = el)}
          >
            <img src={img.img} className="w-[300px] h-[400px] object-cover" />
          </div>
        ))}
      </div>

      {/* Left Second Images */}
      <div className="absolute top-[400px] opacity-50 z-[-1] left-28 mx-[100px]">
        {leftSecondImages.map((img, index) => (
          <div
            key={index}
            className="my-[300px] p-2 rounded-xl bg-white w-max"
            ref={(el) => (leftSecondImagesRef.current[index] = el)}
          >
            <img src={img.img} className="w-[300px] h-[400px] object-cover" />
          </div>
        ))}
      </div>

      {/* Right Second Images */}
      <div className="absolute top-[500px] right-28 z-[-1] opacity-50 mx-[100px]">
        {rightSecondImages.map((img, index) => (
          <div
            key={index}
            className="my-[300px] p-2 rounded-xl bg-white w-max"
            ref={(el) => (rightSecondImagesRef.current[index] = el)}
          >
            <img src={img.img} className="w-[300px] h-[400px] object-cover" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectSection;
