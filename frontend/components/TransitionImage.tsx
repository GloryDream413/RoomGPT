
import React, { useState, useEffect } from "react";
import Image from "next/image";
import cn from "classnames";
 /*const images = [
  { id: 1, src: "https://mdbcdn.b-cdn.net/img/new/slides/041.webp" },
  { id: 2, src: "https://mdbcdn.b-cdn.net/img/new/slides/042.webp" },
  { id: 3, src: "https://mdbcdn.b-cdn.net/img/new/slides/043.webp" },
];*/

const images = [
    { id: 1, src: "/1.jpg" },
    { id: 2, src: "/1-new.jpg" },
    { id: 3, src: "/1-new.jpg" },
  ];
 const GalleryItem = (props) => {
  const [activeImage, setActiveImage] = useState(1);
  const [fadeIn, setFadeIn] = useState(true);
   useEffect(() => {
    const timeout = setInterval(() => {
      setFadeIn(false);
      setTimeout(() => {
        setActiveImage((prevImage) =>
          prevImage === images.length ? 1 : prevImage + 1
        );
        setFadeIn(true);
      }, 200);
    }, 3000);
     return () => clearInterval(timeout);
  }, []);
   return (
    <div className="relative h-96 w-full">
      <div
        className={cn(
          "absolute inset-0 z-20 flex items-center justify-center transition-opacity",
          {
            "opacity-100": fadeIn,
            "opacity-0": !fadeIn,
          }
        )}
      >
        <Image
          src={images[activeImage - 1].src}
          alt=""
          className="h-auto w-96"
          width={400}
          height={400}
        />
      </div>

    </div>
  );
};
 export default GalleryItem;