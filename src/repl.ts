import { createInterface } from 'node:readline';
import { stdin, stdout } from 'node:process';

export function cleanInput(input: string): string[]
{
    return input.trim().toLowerCase().replace(/\s+/g," ").split(" ");
}

export function startREPL(): void{

    const rl = createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: "Pokedex >"
    });


    rl.prompt();
    rl.on('line', (line) => {
        let cleanedInput = cleanInput(line);
        if (cleanedInput.length > 0)
        {
            console.log(`Your command was: ${cleanedInput[0]}`);
        }
        rl.prompt();
    }); 
    

}