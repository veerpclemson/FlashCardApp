import React, { useEffect, useState, useCallback } from 'react';
import { Text, View, StyleSheet, ActivityIndicator, FlatList, RefreshControl, Button } from 'react-native';
import { Link, useFocusEffect } from 'expo-router';

// Define the interface for a flashcard
interface Flashcard {
  front: string;
  back: string;
}

// Define the interface for a flashcard set
interface FlashcardSet {
  _id?: string;
  id?: string;
  title: string;
  description?: string;
  cards?: Flashcard[];
}

export default function SetsScreen() {
  const [sets, setSets] = useState<FlashcardSet[]>([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchSets = async () => {
    setError(null);
    try {
      console.log("Fetching flashcard sets...");
      const res = await fetch("http://localhost:3000/api/flashcards");

      if (!res.ok) {
        throw new Error(`API returned status ${res.status}: ${res.statusText}`);
      }

      const data = await res.json();
      console.log("Fetched data:", JSON.stringify(data).substring(0, 200) + "...");

      if (Array.isArray(data)) {
        setSets(data as FlashcardSet[]);  // This part ensures the correct type
      } else {
        console.error("API did not return an array:", data);
        setError("API response format is incorrect. Expected an array.");
        setSets([]);
      }
    } catch (error) {
      console.error('Failed to fetch sets:', error);
      setError(`Error fetching data: ${error instanceof Error ? error.message : String(error)}`);
      setSets([]);
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  // Use useFocusEffect from expo-router instead of useIsFocused
  useFocusEffect(
    useCallback(() => {
      fetchSets();
    }, [])
  );

  const onRefresh = () => {
    setRefreshing(true);
    fetchSets();
  };

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#fff" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Flashcard Sets</Text>

      {error && (
        <View style={styles.errorContainer}>
          <Text style={styles.errorText}>{error}</Text>
          <Button title="Try Again" onPress={fetchSets} />
        </View>
      )}

      {sets.length === 0 && !error ? (
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyText}>No flashcard sets found.</Text>
          <Text style={styles.emptySubtext}>Create a new set to get started!</Text>
        </View>
      ) : (
        <FlatList
          data={sets}
          keyExtractor={(item) => item.id || item._id || Math.random().toString()}
          renderItem={({ item }) => (
            <View style={styles.setCard}>
              <Link href={`/sets/${item._id || item.id}`} style={styles.link}>
                <Text style={styles.setTitle}>{item.title}</Text>
                <Text style={styles.setDescription}>
                  {item.description || `${item.cards?.length || 0} cards`}
                </Text>
              </Link>
            </View>
          )}
          contentContainerStyle={{ paddingVertical: 20 }}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} tintColor="#fff" />
          }
        />
      )}
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
    marginBottom: 20,
    textAlign: 'center',
  },
  setCard: {
    backgroundColor: '#fff',
    borderRadius: 8,
    marginBottom: 16,
    borderWidth: 2,
    borderColor: '#000',
    overflow: 'hidden',
  },
  link: {
    padding: 20,
    width: '100%',
  },
  setTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 8,
  },
  setDescription: {
    fontSize: 14,
    color: '#555',
  },
  errorContainer: {
    padding: 20,
    backgroundColor: 'rgba(255,0,0,0.1)',
    borderRadius: 8,
    marginBottom: 20,
    alignItems: 'center',
  },
  errorText: {
    color: '#fff',
    marginBottom: 10,
    textAlign: 'center',
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyText: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 10,
  },
  emptySubtext: {
    color: '#aaa',
    fontSize: 14,
    textAlign: 'center',
  }
});