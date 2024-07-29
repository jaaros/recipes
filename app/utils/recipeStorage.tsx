import AsyncStorage from "@react-native-async-storage/async-storage";

const RECIPES_KEY = "recipes";

export const getRecipes = async () => {
  try {
    const storedRecipes = await AsyncStorage.getItem(RECIPES_KEY);
    return storedRecipes ? JSON.parse(storedRecipes) : [];
  } catch (error) {
    console.error("Error loading recipes:", error);
    return [];
  }
};

export const addRecipe = async (recipe) => {
  try {
    const recipes = await getRecipes();
    recipes.push(recipe);
    await AsyncStorage.setItem(RECIPES_KEY, JSON.stringify(recipes));
  } catch (error) {
    console.error("Error adding recipe:", error);
  }
};

export const getRandomRecipe = async () => {
  const recipes = await getRecipes();
  if (recipes.length === 0) return null;
  return recipes[Math.floor(Math.random() * recipes.length)];
};
