// src/utils/env.js
export const getEnvVariable = (key) => {
    return import.meta.env[key] || process.env[key]; // Utilise l'un ou l'autre selon l'environnement
  };