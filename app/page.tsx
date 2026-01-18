import MainSlider from "@/components/home/main-slider";
import Issues from "@/components/home/issues";
import SubmitArticle from "@/components/home/submit-article";
import LatestArticles from "@/components/home/latest-articles";
import Purpose from "@/components/home/purpose";

export default function Home() {
  return (
    <div>
      <MainSlider />
      <Purpose />
      <Issues />
      <SubmitArticle />
      <LatestArticles />
    </div>
  );
}
