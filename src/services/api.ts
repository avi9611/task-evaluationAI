import { EvaluationResponse } from '../types';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001/api';

export async function evaluateTask(formData: FormData): Promise<EvaluationResponse> {
  try {
    const response = await fetch(`${API_URL}/evaluations`, {
      method: 'POST',
      body: formData,
      
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Failed to evaluate task');
    }

    return await response.json();
  } catch (error) {
    console.error('API Error:', error);
    throw error;
  }
}

export async function fetchEvaluationHistory(): Promise<EvaluationResponse[]> {
  try {
    const response = await fetch(`${API_URL}/evaluations`);

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Failed to fetch evaluation history');
    }

    return await response.json();
  } catch (error) {
    console.error('API Error:', error);
    throw error;
  }
}

export async function fetchEvaluationById(id: string): Promise<EvaluationResponse> {
  try {
    const response = await fetch(`${API_URL}/evaluations/${id}`);

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Failed to fetch evaluation');
    }

    return await response.json();
  } catch (error) {
    console.error('API Error:', error);
    throw error;
  }
}