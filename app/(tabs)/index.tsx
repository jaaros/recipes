import React, { useState, useEffect } from "react";
import { View, FlatList, StyleSheet } from "react-native";
import { getRecipes } from "../utils/recipeStorage";
import RecipeItem from "../components/RecipeItem";

export default function RecipeList() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    loadRecipes();
  }, []);

  const loadRecipes = async () => {
    const storedRecipes = await getRecipes();
    setRecipes(storedRecipes);
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={recipes}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => <RecipeItem recipe={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
});
