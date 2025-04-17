import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ActivityIndicator, Button, FlatList } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';

interface Flashcard {
  front: string;
  back: string;
}

interface FlashcardSet {
  id: string;
  title: string;
  description?: string;
  cards: Flashcard[];
}

export default function SetDetailsScreen() {
  const [set, setSet] = useState<FlashcardSet | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const { id } = useLocalSearchParams(); // ✅ Correct way in expo-router
  const router = useRouter();

  useEffect(() => {

    if (!id || typeof id !== 'string') return;

    const fetchSetDetails = async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await fetch(`http://localhost:3000/api/flashcards/${id}`);

        if (!res.ok) {
          throw new Error(`API returned status ${res.status}: ${res.statusText}`);

        }

        const data = await res.json();
        console.log(data);
        setSet(data);
      } catch (error: any) {
        setError(error.message);
        setSet(null);
      } finally {
        setLoading(false);
      }
    };

    fetchSetDetails();
  }, [id]);

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#fff" />
      </View>
    );
  }

  if (error || !set) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>{error || 'Flashcard set not found.'}</Text>
        <Button title="Go Back" onPress={() => router.back()} />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{set.title}</Text>
      {set.description && <Text style={styles.description}>{set.description}</Text>}

      <FlatList
        data={set.cards}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.cardContainer}>
            <Text style={styles.cardFront}>Front: {item.front}</Text>
            <Text style={styles.cardBack}>Back: {item.back}</Text>
          </View>
        )}
        contentContainerStyle={styles.cardList}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    padding: 20,
  },
  title: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    color: '#aaa',
    fontSize: 16,
    marginBottom: 20,
  },
  errorText: {
    color: 'red',
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
  },
  cardContainer: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 8,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  cardFront: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  cardBack: {
    fontSize: 14,
    color: '#555',
  },
  cardList: {
    paddingVertical: 10,
  },
});
