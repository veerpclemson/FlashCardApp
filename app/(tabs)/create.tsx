import { useRouter } from "expo-router";
import { useState } from "react";
import {
  Alert,
  Button,
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function AboutScreen() {
  const [front, setFront] = useState("");
  const [back, setBack] = useState("");
  const [setTitle, setSetTitle] = useState("");
  const [cards, setCards] = useState<{ front: string; back: string }[]>([]);
  const [editIndex, setEditIndex] = useState<number | null>(null);
  const router = useRouter();

  const handleAddCard = () => {
    if (!front || !back) {
      Alert.alert("Missing Info", "Please fill both sides");
      return;
    }

    if (editIndex !== null) {
      const updated = [...cards];
      updated[editIndex] = { front, back };
      setCards(updated);
      setEditIndex(null);
    } else {
      setCards([...cards, { front, back }]);
    }

    setFront("");
    setBack("");
  };

  const handleEdit = (index: number) => {
    const card = cards[index];
    setFront(card.front);
    setBack(card.back);
    setEditIndex(index);
  };

  const handleDelete = (index: number) => {
    const updated = cards.filter((_, i) => i !== index);
    setCards(updated);
    if (editIndex === index) {
      setFront("");
      setBack("");
      setEditIndex(null);
    }
  };

  const handleCreateSet = async () => {
    if (!setTitle.trim()) {
      Alert.alert("Missing Title", "Please enter a name for your set.");
      return;
    }

    const allCards = [...cards];
    if (front && back && editIndex === null) {
      allCards.push({ front, back });
    }

    if (allCards.length === 0) {
      Alert.alert("Nothing to Save", "Add at least one card before saving.");
      return;
    }

    try {
      console.log("saving card");
      const response = await fetch(
        "http://localhost:8081/api/flashcards/route",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            title: setTitle,
            description: "Created in app",
            cards: allCards,
          }),
        }
      );

      if (!response.ok) throw new Error("Failed to create flashcard set");

      const result = await response.json();

      console.log(result);

      Alert.alert("Success", result.message);
      router.back(); // navigates back to the previous screen
    } catch (error) {
      console.error("Error creating flashcard set:", error);
      Alert.alert("Error", "Something went wrong while creating the set.");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create Flashcard Set</Text>

      <TextInput
        style={styles.input}
        placeholder="Set name"
        placeholderTextColor="#aaa"
        value={setTitle}
        onChangeText={setSetTitle}
      />

      <TextInput
        style={styles.input}
        placeholder="Front of card"
        placeholderTextColor="#aaa"
        value={front}
        onChangeText={setFront}
      />

      <TextInput
        style={styles.input}
        placeholder="Back of card"
        placeholderTextColor="#aaa"
        value={back}
        onChangeText={setBack}
      />

      <View style={styles.button}>
        <Button
          title={editIndex !== null ? "Update Card" : "Add Card"}
          onPress={handleAddCard}
        />
      </View>

      <FlatList
        data={cards}
        keyExtractor={(_, index) => index.toString()}
        style={{ marginTop: 20, width: "100%" }}
        renderItem={({ item, index }) => (
          <View style={styles.cardPreview}>
            <View style={{ flex: 1 }}>
              <Text style={styles.cardText}>Front: {item.front}</Text>
              <Text style={styles.cardText}>Back: {item.back}</Text>
            </View>
            <View style={styles.cardButtons}>
              <TouchableOpacity
                onPress={() => handleEdit(index)}
                style={styles.cardAction}
              >
                <Text style={{ color: "#2196F3" }}>Edit</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => handleDelete(index)}
                style={styles.cardAction}
              >
                <Text style={{ color: "red" }}>Delete</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />

      <View style={styles.button}>
        <Button
          title="Create Flashcard Set"
          onPress={handleCreateSet}
          color="#4CAF50"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#25292e",
    justifyContent: "flex-start",
    alignItems: "center",
    padding: 20,
  },
  title: {
    color: "#fff",
    fontSize: 22,
    marginVertical: 20,
  },
  input: {
    backgroundColor: "#fff",
    color: "#000",
    width: "80%",
    height: 50,
    padding: 10,
    marginVertical: 8,
    borderRadius: 8,
  },
  button: {
    marginTop: 10,
    width: "80%",
  },
  cardPreview: {
    backgroundColor: "#fff",
    padding: 10,
    marginVertical: 5,
    borderRadius: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 10,
  },
  cardText: {
    color: "#000",
    fontSize: 14,
  },
  cardButtons: {
    flexDirection: "row",
  },
  cardAction: {
    marginLeft: 10,
  },
});
