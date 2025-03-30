//view created sets
import React, { useState } from 'react';
import { Text, View, TouchableOpacity, StyleSheet, Button } from 'react-native';
import { Link } from 'expo-router';

export default function AboutScreen() {
  const [buttonCount, setButtonCount] = useState(4); // Default to 2 buttons
  const [buttonTopPositions, setButtonTopPositions] = useState([20]); 
  const padding = 20; // Padding between buttons

  
  const handleLayout = (event: any, index: number) => {
    const { height } = event.nativeEvent.layout;
    setButtonTopPositions((prevPositions) => {
      const newPositions = [...prevPositions];
      const nextTop = newPositions[index] + height + padding;
      newPositions.push(nextTop);
      return newPositions;
    });
  };

  return (
    <View style={styles.container}>
      {Array.from({ length: buttonCount }).map((_, index) => (
        <Link
          key={index}
          href={`../sets/testset${index + 1}`}
          style={[styles.button, { top: buttonTopPositions[index] }]}
          onLayout={(event) => handleLayout(event, index)}
        >
          <Text style={styles.buttonText}>{`Test Set ${index + 1}`}</Text>
        </Link>
      ))}

      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    paddingTop: 20,
    justifyContent: 'flex-start', // Align items at the top
    paddingHorizontal: 20, // Horizontal padding for better alignment
  },
  button: {
    position: 'absolute',
    width: 400,
    height: 240,
    left: 20,
    backgroundColor: '#fff',
    borderWidth: 5,
    borderColor: '#000',
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#000',
    fontSize: 18,
  },
});
