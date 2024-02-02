import readline from 'readline';

export default function askQuestion(questions, responses) {  

    
    const rl = readline.createInterface({  
        input: process.stdin,  
        output: process.stdout  
      }); 
    
      return new Promise(resolve => rl.question(`${question} `, ans => {
        responses.push(ans);
        rl.close();
        resolve(ans);
    }))
    }  

