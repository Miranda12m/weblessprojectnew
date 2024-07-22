import RootLayout from "@/components/common/layout/RootLayout";
import ServiceDetailsDevelopment from "@/components/development/ServiceDetailsDevelopment";
import ServiceDetailsWorkflow from "@/components/workflow/ServiceDetailsWorkflow";
import ServiceDetailsService from "@/components/service/ServiceDetailsService";
import ServiceDetailsFaq from "@/components/faq/ServiceDetailsFaq";
import DigitalAgencyCTA from "@/components/cta/DigitalAgencyCTA";
import PageHead from "@/components/PageHead";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

export default function ServiceDetails() {
  const section = {
    'web-development': { title: 'Web Development', description: '...', keywords: '...', image: '...', url: '...', subject: '...' },
    'mobile-development': { title: 'Mobile Development', description: '...', keywords: '...', image: '...', url: '...', subject: '...' },
    'corporate-infrastructure': { title: 'Corporate Infrastructure', description: '...', keywords: '...', image: '...', url: '...', subject: '...' },
    'data-analysis': { title: 'Data Analysis', description: '...', keywords: '...', image: '...', url: '...', subject: '...' },
    'search-engine-optimization': { title: 'SEO', description: '...', keywords: '...', image: '...', url: '...', subject: '...' },
    'social-media-management': { title: 'Social Media Management', description: '...', keywords: '...', image: '...', url: '...', subject: '...' },
    'video-marketing': { title: 'Video Marketing', description: '...', keywords: '...', image: '...', url: '...', subject: '...' },
    'brand-management': { title: 'Brand Management', description: '...', keywords: '...', image: '...', url: '...', subject: '...' },
    'software-development': { title: 'Software Development', description: '...', keywords: '...', image: '...', url: '...', subject: '...' },
    'it-solutions': { title: 'IT Solutions', description: '...', keywords: '...', image: '...', url: '...', subject: '...' },
    'cloud-services': { title: 'Cloud Services', description: '...', keywords: '...', image: '...', url: '...', subject: '...' },
    'it-project-management': { title: 'IT Project Management', description: '...', keywords: '...', image: '...', url: '...', subject: '...' },
    'big-data': { title: 'Big Data', description: '...', keywords: '...', image: '...', url: '...', subject: '...' },
    'it-recruitment': { title: 'IT Recruitment', description: '...', keywords: '...', image: '...', url: '...', subject: '...' },
    'telesourcing': { title: 'Telesourcing', description: '...', keywords: '...', image: '...', url: '...', subject: '...' },
  };

  const router = useRouter();
  const { service } = router.query;
  const [selectedCategory, setSelectedCategory] = useState('web-development');

  useEffect(() => {
    if (service) {
      setSelectedCategory(service);
    }
  }, [service]);

  const meta = section[selectedCategory] || {
    title: "Services - WL",
    description: "",
    keywords: "",
    image: "",
    url: "",
    subject: "",
  };

  return (
    <>
      <PageHead
        title={meta.title}
        description={meta.description}
        keywords={meta.keywords}
        image={meta.image}
        url={meta.url}
        subject={meta.subject}
      />
      <main>
        <RootLayout header="header1" footer="footer5">
          <ServiceDetailsDevelopment selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
          <ServiceDetailsWorkflow selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
          <ServiceDetailsService selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
          <ServiceDetailsFaq selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
          <DigitalAgencyCTA />
        </RootLayout>
      </main>
    </>
  );
}
