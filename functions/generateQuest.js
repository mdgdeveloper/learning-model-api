import { resolve } from 'path';
// import { prompt } from "prompt-sync";

import promptSync from 'prompt-sync';

const prompt = promptSync();


function askQuestion(question) {
  return prompt(`${question} `);
}

export async function generateQuest(questions) {
  const responses = [];

  for (const question of questions) {
    const response = askQuestion(question);
    responses.push(response);
  }

  return responses;
}