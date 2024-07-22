
import Head from "next/head";
import RootLayout from "@/components/common/layout/RootLayout";
import DigitalMarketingWorkflow from "@/components/workflow/DigitalMarketingWorkflow";
import CreativeAgencyHero from "@/components/hero/CreativeAgencyHero";
import DigitalMarketingAbout from "@/components/about/DigitalMarketingAbout"; // About Section
import DigitalAgencyService from "@/components/service/DigitalAgencyService";
import StartupAgencyPortfolio from "@/components/portfolio/StartupAgencyPortfolio";
import DigitalAgencyBrand from "@/components/brand/DigitalAgencyBrand";
import DesignStudioBlog from "@/components/blog/DesignStudioBlog";
import DigitalMarketingHero from "@/components/hero/DigitalMarketingHero"; // Banner Webless & Video
import CreativeAgencyBrand from "@/components/brand/CreativeAgencyBrand";

export default function Index() {
  return (
    <div>
      <Head>
        <title>Webless Project</title>
        <meta name="description" content="Digital Marketing Description" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <RootLayout header="header1" footer="footer5" >
          <DigitalMarketingHero />
          <DigitalMarketingAbout />
          <DigitalAgencyService />
          <DigitalMarketingWorkflow />
          <StartupAgencyPortfolio />
          <CreativeAgencyBrand />
        </RootLayout>
      </main>
    </div>
  );
};