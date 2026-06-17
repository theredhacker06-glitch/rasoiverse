import Hero from '@/components/Hero';
import FeaturedRecipes from '@/components/FeaturedRecipes';
import RecipeCategories from '@/components/RecipeCategories';
import Community from '@/components/Community';

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedRecipes />
      <RecipeCategories />
      <Community />
    </>
  );
}
