import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "@/plugins";
import Link from "next/link";
import Image from "next/image";
import Portfilio11 from "../../../public/assets/imgs/portfolio/1/1.jpg";
import Portfilio12 from "../../../public/assets/imgs/portfolio/1/2.jpg";
import Portfilio13 from "../../../public/assets/imgs/portfolio/1/3.jpg";
import Portfilio14 from "../../../public/assets/imgs/portfolio/1/4.jpg";

// Registrar el plugin ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

const PortfolioElementV2 = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      let device_width = window.innerWidth;
      let tHero = gsap.context(() => {
        if (device_width > 767) {
          let portfolioline = gsap.timeline({
            scrollTrigger: {
              trigger: ".portfolio__area",
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
      });
      return () => tHero.revert();
    }
  }, []);

  const portfolioItems = [
    {
      id: 1,
      src: Portfilio11,
      title: "Fuerza Generacion Monterrey",
      date: "02 May 2021",
      url: 'fuerza-generacion-monterrey'
    },
    {
      id: 2,
      src: Portfilio12,
      title: "Resguardo Inteligente",
      date: "02 May 2021",
      url: 'resguardo-inteligente'
    },
    {
      id: 3,
      src: Portfilio13,
      title: "Casa K'in",
      date: "02 May 2021",
      url:'casa-kin'
    },
    {
      id: 4,
      src: Portfilio14,
      title: "Arteck Lyon Conseil",
      date: "02 May 2021",
      url: 'arteck-lyon-conseil'
    },
    {
      id: 5,
      src: Portfilio11,
      title: "Arteck Lyon Conseil",
      date: "02 May 2021",
      url: 'arteck-lyon-conseil'
    },
    {
      id: 6,
      src: Portfilio12,
      title: "Arteck Lyon Conseil",
      date: "02 May 2021",
      url: 'arteck-lyon-conseil'
    },
  ];

  return (
    <>
      <section className="portfolio__area pb-140">
        <div className="container">
          <div className="row top_row">
            <h2 className="portfolio__text">work</h2>
            <div className="portfolio__list-1">
              {portfolioItems.map((item) => (
                <div key={item.id} className="portfolio__item">
                  <Link href={{
                    pathname: "/portfolio-details",
                    query: { project: item.url },
                  }}>
                    <Image
                      priority
                      style={{ width: "100%", height: "auto" }}
                      className="mover"
                      src={item.src}
                      alt="Portfolio Image"
                    />
                  </Link>
                  <div className="portfolio__info">
                    <h3 className="portfolio__title">{item.title}</h3>
                    <p>{item.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="row row_bottom">
            <div className="col-xxl-12">
              <div
                className="portfolio__btn btn_wrapper"
                data-speed="1"
                data-lag="0.2"
              >
                <Link
                  className="wc-btn-secondary btn-hover btn-item"
                  href="/portfolio"
                >
                  <span></span>Load More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PortfolioElementV2;
