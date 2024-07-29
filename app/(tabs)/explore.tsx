import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";

export default function ExploreRecipes() {
  const [preferences, setPreferences] = useState("");
  const [suggestedRecipe, setSuggestedRecipe] = useState("");

  const exploreRecipes = async () => {
    // In a real app, you would make an API call to an AI service here
    // For this example, we'll just simulate a response
    setSuggestedRecipe(
      `Here's a recipe based on your preferences: ${preferences}\n\nSimulated AI-generated recipe...`,
    );
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter your preferences (e.g., cuisine type, ingredients)"
        value={preferences}
        onChangeText={setPreferences}
      />
      <Button title="Explore New Recipes" onPress={exploreRecipes} />
      {suggestedRecipe ? (
        <Text style={styles.suggestedRecipe}>{suggestedRecipe}</Text>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  suggestedRecipe: {
    marginTop: 20,
  },
});
