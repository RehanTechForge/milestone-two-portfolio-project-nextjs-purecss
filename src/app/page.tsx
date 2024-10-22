import AboutSection from "@/components/AboutMeSection/AboutSection";
import Main from "@/components/MainSection/Main";
import PortfolioShowCase from "@/components/PortfolioShowCaseSection/PortfolioShowCase";

export default function Home() {
  return (
    <>
      <Main mainHeading="Muhammad Rehan" supportHeading="Web - Designer" />
      <AboutSection />
      <PortfolioShowCase />
    </>
  );
}
