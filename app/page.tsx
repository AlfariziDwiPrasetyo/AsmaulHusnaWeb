import HeroSection from "@/components/HeroComponent/HeroSection";
import MainSection from "@/components/MainComponent/MainSection";
import SearchSection from "@/components/SearchComponent/SearchSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <SearchSection />
      <MainSection />
    </main>
  );
}
