import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function RecipeItem({ recipe }) {
  return (
    <View style={styles.recipeItem}>
      <Text style={styles.recipeName}>{recipe.name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  recipeItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  recipeName: {
    fontSize: 18,
  },
});
