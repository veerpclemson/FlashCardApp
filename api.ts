import axios from 'axios';

// Define interfaces for your data types
export interface Card {
  id: number;
  front: string;
  back: string;
  created_at: string;
  updated_at?: string;
}

export interface FlashcardSet {
  id: number;
  title: string;
  description?: string;
  created_at: string;
  updated_at?: string;
  cards: Card[];
}

export interface CardData {
  front: string;
  back: string;
}

export interface SetData {
  title: string;
  description?: string;
}

// Replace with your actual server URL
const API_URL = 'http://192.168.1.100:5000/api';

export const fetchSets = async (): Promise<FlashcardSet[]> => {
  try {
    const response = await axios.get(`${API_URL}/sets`);
    return response.data;
  } catch (error) {
    console.error('Error fetching sets:', error);
    throw error;
  }
};

export const fetchSetById = async (id: string | number): Promise<FlashcardSet> => {
  try {
    const response = await axios.get(`${API_URL}/sets/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching set ${id}:`, error);
    throw error;
  }
};

export const createSet = async (setData: SetData): Promise<FlashcardSet> => {
  try {
    const response = await axios.post(`${API_URL}/sets`, setData);
    return response.data;
  } catch (error) {
    console.error('Error creating set:', error);
    throw error;
  }
};

export const updateSet = async (id: string | number, setData: SetData): Promise<FlashcardSet> => {
  try {
    const response = await axios.put(`${API_URL}/sets/${id}`, setData);
    return response.data;
  } catch (error) {
    console.error(`Error updating set ${id}:`, error);
    throw error;
  }
};

export const deleteSet = async (id: string | number): Promise<any> => {
  try {
    const response = await axios.delete(`${API_URL}/sets/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error deleting set ${id}:`, error);
    throw error;
  }
};

export const createCard = async (setId: string | number, cardData: CardData): Promise<Card> => {
  try {
    const response = await axios.post(`${API_URL}/sets/${setId}/cards`, cardData);
    return response.data;
  } catch (error) {
    console.error('Error creating card:', error);
    throw error;
  }
};

export const updateCard = async (id: string | number, cardData: CardData): Promise<Card> => {
  try {
    const response = await axios.put(`${API_URL}/cards/${id}`, cardData);
    return response.data;
  } catch (error) {
    console.error(`Error updating card ${id}:`, error);
    throw error;
  }
};

export const deleteCard = async (id: string | number): Promise<any> => {
  try {
    const response = await axios.delete(`${API_URL}/cards/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error deleting card ${id}:`, error);
    throw error;
  }
};