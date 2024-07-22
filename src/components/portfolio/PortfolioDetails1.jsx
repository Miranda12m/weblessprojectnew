import Link from "next/link";
import Image from "next/image";
import { useLayoutEffect, useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "@/plugins";
import animationCharCome from "@/lib/utils/animationCharCome";
import Detail1 from "../../../public/assets/imgs/portfolio/detail/1.jpg";
import Detail2 from "../../../public/assets/imgs/portfolio/detail/2.jpg";
import Detail3 from "../../../public/assets/imgs/portfolio/detail/3.jpg";
import Detail4 from "../../../public/assets/imgs/portfolio/detail/4.jpg";
import Detail5 from "../../../public/assets/imgs/portfolio/detail/5.jpg";
import Detail6 from "../../../public/assets/imgs/portfolio/detail/6.jpg";
import Detail7 from "../../../public/assets/imgs/portfolio/detail/7.jpg";
import DetailShape from "../../../public/assets/imgs/portfolio/detail/shape.png";

gsap.registerPlugin(ScrollTrigger);

const portfolioDetails = {
  'fuerza-generacion-monterrey': {
    title: "Fuerza Generacion Monterrey",
    date: "02 May 2021",
    description: "Descripción del proyecto Fuerza Generacion Monterrey...",
    mainImage: Detail1,
  },
  'resguardo-inteligente': {
    title: "Resguardo Inteligente",
    date: "02 May 2021",
    description: "Descripción del proyecto Resguardo Inteligente...",
    mainImage: Detail2,
  },
  'casa-kin': {
    title: "Casa K'in",
    date: "02 May 2021",
    description: "Descripción del proyecto Casa K'in...",
    mainImage: Detail3,
  },
  'arteck-lyon-conseil': {
    title: "Arteck Lyon Conseil",
    date: "02 May 2021",
    description: "Descripción del proyecto Arteck Lyon Conseil...",
    mainImage: Detail4,
  },
};

const PortfolioDetails1 = ({ project }) => {
  if (!project || !portfolioDetails[project]) {
    return <p>Project not found</p>;
  }

  const currentSection = portfolioDetails[project];
  const portfolioSectionRef = useRef();

  useLayoutEffect(() => {
    if (typeof window !== "undefined") {
      animationCharCome(charAnim.current);

      let device_width = window.innerWidth;

      if (device_width > 767) {
        let portfolioline = gsap.timeline({
          scrollTrigger: {
            trigger: portfolioSectionRef.current,
            start: "top center-=200",
            pin: ".portfolio__text",
            end: "bottom bottom+=80",
            markers: false,
            pinSpacing: false,
            scrub: 1,
          },
        });

        portfolioline.to(".portfolio__text", {
          scale: 3,
          duration: 1,
        });
        portfolioline.to(".portfolio__text", {
          scale: 3,
          duration: 1,
        });
        portfolioline.to(
          ".portfolio__text",
          {
            scale: 1,
            duration: 1,
          },
          "+=2"
        );
      }

      let portfolio_lists = gsap.utils.toArray(".portfolio__item");
      portfolio_lists.forEach((portfolio, i) => {
        gsap.set(portfolio, { opacity: 0.7 });
        let t1 = gsap.timeline();

        t1.set(portfolio, {
          position: "relative",
        });
        t1.to(portfolio, {
          scrollTrigger: {
            trigger: portfolio,
            scrub: 2,
            duration: 1.5,
            start: "top bottom+=100",
            end: "bottom center",
            markers: false,
          },
          scale: 1,
          opacity: 1,
          rotateX: 0,
        });
      });
    }
  }, [project]);
  const charAnim = useRef();
  useEffect(() => {
    animationCharCome(charAnim.current);
  }, []);

  return (
    <>
      <section className="portfolio__detail" ref={portfolioSectionRef}>
        <div className="portfolio__detail-top">
          <div className="container g-0 line pt-110 pb-130">
            <span className="line-3"></span>
            <div className="row">
              <div className="col-xxl-8 col-xl-8 col-lg-7 col-md-7">
                <div className="sec-title-wrapper">
                  <h2 className="sec-title animation__char_come" ref={charAnim}>
                    {currentSection.title}
                  </h2>
                </div>
              </div>
              <div className="col-xxl-4 col-xl-4 col-lg-5 col-md-5">
                <div className="portfolio__detail-info">
                  <ul>
                    <li>
                      Category <Link href="/category">Development</Link>
                    </li>
                    <li>
                      Client <span>Webflow</span>
                    </li>
                    <li>
                      Start Date <span>23 January 2021</span>
                    </li>
                    <li>
                      Handover <span>05 March 2021</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="portfolio__detail-thumb">
          <Image
            priority
            style={{ width: "auto", height: "auto" }}
            src={currentSection.mainImage}
            alt="Portfolio Thumbnail"
            data-speed="auto"
          />
        </div>
        <div className="portfolio__detail-content">
          <div className="container g-0 line pt-140">
            <span className="line-3"></span>
            <div className="block-content">
              <div className="row">
                <div className="col-xxl-5 col-xl-5 col-lg-5 col-md-5">
                  <h2 className="portfolio__detail-title title-anim">
                    Build, streamline and evolve together with solution
                  </h2>
                </div>
                <div className="col-xxl-7 col-xl-7 col-lg-7 col-md-7">
                  <div className="portfolio__detail-text">
                    <p>{currentSection.description}</p>
                    <ul>
                      <li>+ Brand Development</li>
                      <li>+ UX/UI Design</li>
                      <li>+ Front-end Development</li>
                      <li>+ Copywriting</li>
                      <li>+ Shopify Development</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="block-thumb">
              <Image
                priority
                style={{ width: "auto", height: "auto" }}
                src={Detail2}
                alt="Portfolio Image"
                data-speed="0.5"
              />
            </div>
            <div className="block-content pt-140">
              <div className="row">
                <div className="col-xxl-5 col-xl-5 col-lg-5 col-md-5">
                  <h2 className="portfolio__detail-title title-anim">
                    Visual and typography hierarchy
                  </h2>
                </div>
                <div className="col-xxl-7 col-xl-7 col-lg-7 col-md-7">
                  <div className="portfolio__detail-text">
                    <p>
                      Visual hierarchy is the principle of arranging elements to
                      show their order of importance. Designers structure visual
                      characteristics—e.g., menu icons—so users can understand
                      information easily. By laying out elements logically and
                      strategically, designers influence users’ perceptions and
                      guide them to desired actions. Users notice larger
                      elements more easily and can convert.
                    </p>
                    <div className="fonts">
                      <Image
                        priority
                        style={{ width: "253px", height: "auto" }}
                        src={DetailShape}
                        alt="Font Style"
                      />
                      <ul>
                        <li className="regular">
                          <span>regular</span> This is text message
                        </li>
                        <li className="medium">
                          <span>Medium</span> Medium typography
                        </li>
                        <li className="semibold">
                          <span>SemiBold</span> Just Amazing
                        </li>
                        <li className="bold">
                          <span>Bold</span> Awesome
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="block-gallery">
              <Image
                priority
                style={{ width: "50%", height: "auto" }}
                src={Detail3}
                alt="Portfolio Image"
              />
              <Image
                priority
                style={{ width: "50%", height: "auto" }}
                src={Detail4}
                alt="Portfolio Image"
              />
            </div>
            <div className="block-thumb">
              <Image
                priority
                style={{ width: "auto", height: "auto" }}
                src={Detail5}
                alt="Portfolio Image"
                data-speed="0.5"
              />
            </div>
            <div className="block-img-text">
              <Image
                priority
                width={375}
                style={{ height: "auto" }}
                src={Detail6}
                alt="Portfolio Image"
              />
              <Image
                priority
                width={375}
                style={{ height: "auto" }}
                src={Detail7}
                alt="Portfolio Image"
              />
              <p>
                For those of us who are blessed with good sight. So we seldom
                consider it. That’s why going off to investigate the whys and
                hows involved is a little like trying to get behind the wind.
              </p>
            </div>
            <div className="row">
              <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12">
                <div className="portfolio__detail-btns pt-150 pb-150">
                  <Link
                    href="/portfolio-details"
                    className="wc-btn-primary btn-hover"
                  >
                    <span></span> Prev Work
                  </Link>
                  <Link
                    href="/portfolio-details"
                    className="wc-btn-primary btn-hover"
                  >
                    <span></span> Next Work
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PortfolioDetails1;
