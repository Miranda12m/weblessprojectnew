import RootLayout from "@/components/common/layout/RootLayout";
import PortfolioDetails1 from "@/components/portfolio/PortfolioDetails1";
import { useRouter } from "next/router";
import PageHead from "@/components/PageHead";

const PortfolioDetails = () => {
  const metaproject = {
    'fuerza-generacion-monterrey': { title: 'Fuerza Generacion Monterrey', description: 'Descripción del proyecto Fuerza Generacion Monterrey...', keywords: 'web development, monterrey', image: 'path_to_image', url: '...', subject: '...' },
    'resguardo-inteligente': { title: 'Resguardo Inteligente', description: 'Descripción del proyecto Resguardo Inteligente...', keywords: 'mobile development, resguardo', image: 'path_to_image', url: '...', subject: '...' },
    'casa-kin': { title: 'Casa K\'in', description: 'Descripción del proyecto Casa K\'in...', keywords: 'corporate infrastructure, kin', image: 'path_to_image', url: '...', subject: '...' },
    // Agrega más proyectos según sea necesario
  };

  const router = useRouter();
  const { project } = router.query;
  const meta = metaproject[project] || {
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
          <PortfolioDetails1 project={project} />
        </RootLayout>
      </main>
    </>
  );
};

export default PortfolioDetails;
