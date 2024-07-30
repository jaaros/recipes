import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  ActivityIndicator,
} from "react-native";
import Anthropic from "@anthropic-ai/sdk";

// Initialize the Anthropic client
const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

export default function ExploreRecipes() {
  const [preferences, setPreferences] = useState("");
  const [suggestedRecipe, setSuggestedRecipe] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const exploreRecipes = async () => {
    setIsLoading(true);
    try {
      const response = await anthropic.completions.create({
        model: "claude-3-5-sonnet-20240620", // or whichever model you prefer
        prompt: `Generate a recipe based on these preferences: ${preferences}.
                 Please format the recipe with a title, ingredients list, and step-by-step instructions.`,
        max_tokens_to_sample: 300,
      });

      setSuggestedRecipe(response.completion);
    } catch (error) {
      console.error("Error fetching recipe:", error);
      setSuggestedRecipe(
        "Sorry, there was an error generating the recipe. Please try again.",
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter your preferences (e.g., cuisine type, ingredients)"
        value={preferences}
        onChangeText={setPreferences}
      />
      <Button
        title="Explore New Recipes"
        onPress={exploreRecipes}
        disabled={isLoading}
      />
      {isLoading ? (
        <ActivityIndicator size="large" color="#0000ff" style={styles.loader} />
      ) : suggestedRecipe ? (
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
  loader: {
    marginTop: 20,
  },
});
