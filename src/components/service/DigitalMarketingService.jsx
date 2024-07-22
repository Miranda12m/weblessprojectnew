import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "@/plugins";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

const DigitalMarketingService = () => {
  const serviceList = useRef(null);

  useEffect(() => {
    if (typeof window !== "undefined" && serviceList.current) {
      const serviceItems = Array.from(serviceList.current.children);

      const imageAnimation = (elements) => {
        const followImageCursor = (event, serviceImgItem) => {
          const contentBox = serviceImgItem.getBoundingClientRect();
          const dx = event.clientX - contentBox.x;
          const dy = event.clientY - contentBox.y;
          serviceImgItem.querySelector(".service__hover-3").style.transform = `translate(${dx}px, ${dy}px)`;
        };

        elements.forEach(element => {
          element.addEventListener("mousemove", (event) => {
            followImageCursor(event, element);
          });
        });
      };

      imageAnimation(serviceItems);

      const serviceItems3 = gsap.utils.toArray(".service_animation");
      const serviceItemsHeading = gsap.utils.toArray(".service_animation h3");
      const serviceItemsContent = gsap.utils.toArray(".service_animation .service__content-3");

      serviceItems3.forEach((serviceItem, i) => {
        gsap.set([serviceItemsHeading[i], serviceItemsContent[i]], {
          x: -30,
          opacity: 0,
        });

        const service3Timeline = gsap.timeline({
          scrollTrigger: {
            trigger: serviceItem,
            start: "top center+=200",
            markers: false,
          },
        });

        service3Timeline.to(serviceItemsHeading[i], {
          x: 0,
          opacity: 1,
          ease: "power2.out",
          duration: 1.5,
          stagger: {
            each: 0.2,
          },
        }).to(serviceItemsContent[i], {
          x: 0,
          opacity: 1,
          ease: "power2.out",
          duration: 1.5,
          stagger: {
            each: 0.2,
          },
        }, "-=1");
      });

      return () => {
        ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      };
    }
  }, []);

  return (
    <section className="service__area-3 pb-150">
      <div className="container">
        <div className="row">
          <div className="col-xxl-12">
            <div className="sec-title-wrapper pt-130 text-anim">
              <h2 className="sec-sub-title title-anim">Services</h2>
              <h3 className="sec-title title-anim">
                Our marketing <br /> Services
              </h3>
              <p>
                Consumers today rely heavily on digital means to research
                products. We research a brand of blend engaging with it,
                according to the meanwhile, 51% of consumers say they use
                Google to research products before buying.
              </p>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-xxl-12">
            <div className="service__list-3" ref={serviceList}>
              {serviceData.map((service, index) => (
                <div key={index} className="service__item-3 service_animation">
                  <h3>
                    <Link href={{
                      pathname: "service-details",
                      query: { service: service.category },
                    }} className="service__title-3">
                      {service.title}
                    </Link>
                  </h3>
                  <div className="service__content-3">
                    <p>{service.description}</p>
                    <ul>
                      {service.features.map((feature, i) => (
                        <li key={i}>+ {feature}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="service__btn-3">
                    <div className="btn_wrapper">
                      <Link href={{
                        pathname: "service-details",
                        query: { service: service.category },
                      }} className="wc-btn-black btn-hover btn-item">
                        <span></span> Details
                        <i className="fa-solid fa-arrow-right"></i>
                      </Link>
                    </div>
                  </div>
                  <div
                    className="service__hover-3"
                    style={{ backgroundImage: `url(${service.imageUrl})` }}
                  ></div>
                </div>
              ))}
              <div className="service3__img-wrap">
                <div className="service3__img"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const serviceData = [
  {
    title: 'Web Development',
    category: 'web-development',
    description: "We help brands stand out through awe-inspiring, elegant visual design. Our design philosophy.",
    features: ["Logo Design", "Advertisement", "Promotion"],
    imageUrl: "assets/imgs/service/3/1.jpg",
  },
  {
    title: 'Mobile Development',
    category: 'mobile-development',
    description: "We help brands stand out through awe-inspiring, elegant visual design. Our design philosophy.",
    features: ["Logo Design", "Advertisement", "Promotion"],
    imageUrl: "assets/imgs/service/3/1.jpg",
  },
  {
    title: 'Corporate Infrastructure',
    category: 'corporate-infrastructure',
    description: "We help brands stand out through awe-inspiring, elegant visual design. Our design philosophy.",
    features: ["Logo Design", "Advertisement", "Promotion"],
    imageUrl: "assets/imgs/service/3/1.jpg",
  },
  {
    title: 'Data Analysis',
    category: 'data-analysis',
    description: "We help brands stand out through awe-inspiring, elegant visual design. Our design philosophy.",
    features: ["Logo Design", "Advertisement", "Promotion"],
    imageUrl: "assets/imgs/service/3/1.jpg",
  },
  {
    title: "Search Engine Optimization",
    category: 'search-engine-optimization',
    description: "We help brands stand out through awe-inspiring, elegant visual design. Our design philosophy.",
    features: ["Logo Design", "Advertisement", "Promotion"],
    imageUrl: "assets/imgs/service/3/1.jpg",
  },
  {
    title: "Social Media Management",
    category: 'social-media-management',
    description: "We help brands stand out through awe-inspiring, elegant visual design. Our design philosophy.",
    features: ["Logo Design", "Advertisement", "Promotion"],
    imageUrl: "assets/imgs/service/3/1.jpg",
  },
  {
    title: "Video Marketing",
    category: 'video-marketing',
    description: "We help brands stand out through awe-inspiring, elegant visual design. Our design philosophy.",
    features: ["Logo Design", "Advertisement", "Promotion"],
    imageUrl: "assets/imgs/service/3/2.png",
  },
  {
    title: "Brand Management",
    category: 'brand-management',
    description: "We help brands stand out through awe-inspiring, elegant visual design. Our design philosophy.",
    features: ["Logo Design", "Advertisement", "Promotion"],
    imageUrl: "assets/imgs/service/3/3.png",
  },
  {
    title: "Software Development",
    category: 'software-development',
    description: "We help brands stand out through awe-inspiring, elegant visual design. Our design philosophy.",
    features: ["Logo Design", "Advertisement", "Promotion"],
    imageUrl: "assets/imgs/service/3/4.png",
  },
  {
    title: "IT Solutions",
    category: 'it-solutions',
    description: "We help brands stand out through awe-inspiring, elegant visual design. Our design philosophy.",
    features: ["Logo Design", "Advertisement", "Promotion"],
    imageUrl: "assets/imgs/service/3/4.png",
  },
  {
    title: "Cloud Services",
    category: 'cloud-services',
    description: "We help brands stand out through awe-inspiring, elegant visual design. Our design philosophy.",
    features: ["Logo Design", "Advertisement", "Promotion"],
    imageUrl: "assets/imgs/service/3/4.png",
  },
  {
    title: "IT Project Management",
    category: 'it-project-management',
    description: "We help brands stand out through awe-inspiring, elegant visual design. Our design philosophy.",
    features: ["Logo Design", "Advertisement", "Promotion"],
    imageUrl: "assets/imgs/service/3/4.png",
  },
  {
    title: "Big Data",
    category: 'big-data',
    description: "We help brands stand out through awe-inspiring, elegant visual design. Our design philosophy.",
    features: ["Logo Design", "Advertisement", "Promotion"],
    imageUrl: "assets/imgs/service/3/4.png",
  },
  {
    title: "IT Recruitment",
    category: 'it-recruitment',
    description: "We help brands stand out through awe-inspiring, elegant visual design. Our design philosophy.",
    features: ["Logo Design", "Advertisement", "Promotion"],
    imageUrl: "assets/imgs/service/3/4.png",
  },
  {
    title: "Telesourcing (VoIP)",
    category: 'telesourcing',
    description: "We help brands stand out through awe-inspiring, elegant visual design. Our design philosophy.",
    features: ["Logo Design", "Advertisement", "Promotion"],
    imageUrl: "assets/imgs/service/3/4.png",
  },
];

export default DigitalMarketingService;