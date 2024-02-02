import askQuestion from "./functions/generateQuest.js";

import { preguntas } from "./variables/questions.js";   

const result = []

preguntas.map(async (pregunta, i) => {
    const responses = [];
    console.log(pregunta.categoria)
    console.log("\n")
    for (let i = 0; i < pregunta.preguntas.length; i++) {
        const ans = await askQuestion(pregunta.preguntas[i], responses);
    }
    result.push(
        {
            categoria: pregunta.categoria,
            respuestas: responses
        }
    )
})

console.log(result)


