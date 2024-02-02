import { generateQuest } from "./functions/generateQuest.js";

import { preguntas } from "./variables/questions.js";

const result = []

preguntas.map(async (pregunta, i) => {
    console.log(pregunta.categoria)

    const response = await generateQuest(pregunta.preguntas);

    // Calculate the average of the response
    const average = response.reduce((a, b) => a + b, 0) / response.length;

    // Add to result the response as an object with the category
    result.push({
        category: pregunta.categoria,
        average
    })

})

// Finish all the promnises
Promise.all(result).then(() => {
    console.log(result)
})



