import { useEffect } from "react";
import { gsap } from "gsap";

const CursorAnimation = ({ cursor1 }) => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      let tHero = gsap.context(() => {
        function mousemoveHandler(e) {
          try {
            let tl = gsap.timeline({
              defaults: {
                x: e.clientX,
                y: e.clientY,
              },
            });

            // Main Cursor Moving
            tl.to(".cursor1", {
              ease: "power2.out",
            });
          } catch (error) {
            console.log(error);
          }
        }
        document.addEventListener("mousemove", mousemoveHandler);
      });
      return () => tHero.revert();
    }
  }, []);
  return (
    <>
      <div className="cursor1" ref={cursor1}></div>
    </>
  );
};

export default CursorAnimation;
