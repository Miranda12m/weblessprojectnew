const ServiceDetailsWorkflow = ({ selectedCategory }) => {
  const section = {
    "web-development": {
      h1: 'Planning and sketching',
      p1: 'Detailed planning and sketching description for web development.',
      h2: 'Design and Prototyping',
      p2: 'Description for design and prototyping.',
      h3: 'Development',
      p3: 'Description for development.',
      h4: 'Testing and Launch',
      p4: 'Description for testing and launch.',
    },
    "mobile-development": {
      h1: 'Planning and sketching 2',
      p1: 'Detailed planning and sketching description for mobile development.',
      h2: 'Design and Prototyping',
      p2: 'Description for design and prototyping for mobile.',
      h3: 'Development',
      p3: 'Description for mobile development.',
      h4: 'Testing and Launch',
      p4: 'Description for testing and launch for mobile.',
    },
    "corporate-infrastructure": {
      h1: 'Infrastructure Planning 3',
      p1: 'Detailed planning and sketching description for corporate infrastructure.',
      h2: 'Design and Prototyping',
      p2: 'Description for design and prototyping for infrastructure.',
      h3: 'Development',
      p3: 'Description for infrastructure development.',
      h4: 'Testing and Launch',
      p4: 'Description for testing and launch for infrastructure.',
    },
    "search-engine-optimization": {},
    "social-media-management": {},
    "video-marketing": {},
    "brand-management": {},
    "software-development": {},
    "it-solutions": {},
    "cloud-services": {},
    "it-project-management": {},
    "big-data": {},
    "it-recruitment": {},
    "telesourcing": {},
  };

  const currentSection = section[selectedCategory] || section["web-development"];

  return (
    <>
    <section className="workflow__area-6">
      <div className="container g-0 line pb-130">
        <div className="line-3"></div>
        <div className="workflow__wrapper-6">
          <div className="row">
            <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-3">
              <div className="workflow__slide-6">
                <h6 className="workflow__title-6">{currentSection.h1}</h6>
                <p>{currentSection.p1}</p>
              </div>
            </div>

            <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-3">
              <div className="workflow__slide-6">
                <h6 className="workflow__title-6">{currentSection.h2}</h6>
                <p>{currentSection.p2}</p>
              </div>
            </div>

            <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-3">
              <div className="workflow__slide-6">
                <h6 className="workflow__title-6">{currentSection.h3}</h6>
                <p>{currentSection.p3}</p>
              </div>
            </div>

            <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-3">
              <div className="workflow__slide-6">
                <h6 className="workflow__title-6">{currentSection.h4}</h6>
                <p>{currentSection.p4}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default ServiceDetailsWorkflow;
