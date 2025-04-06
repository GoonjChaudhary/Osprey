// src/utils/rephrase.js
export const rephraseMessage = async (message) => {
    const res = await fetch('/api/rephrase', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message }),
    });
  
    const data = await res.json();
    return data.rephrased || message;
  };
  