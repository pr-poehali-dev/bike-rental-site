
import Layout from "@/components/ui/Layout";
import Hero from "@/components/home/Hero";
import BikeCategories from "@/components/home/BikeCategories";
import HowItWorks from "@/components/home/HowItWorks";

const Index = () => {
  return (
    <Layout>
      <Hero />
      <BikeCategories />
      <HowItWorks />
    </Layout>
  );
};

export default Index;
