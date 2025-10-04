import { createInterface } from 'node:readline';
import { stdin, stdout } from 'node:process';
import { getCommands } from './command.js';
import { commandExit } from './command_exit.js';

export function cleanInput(input: string): string[] {
    return input.trim().toLowerCase().replace(/\s+/g, " ").split(" ");
}

export function startREPL(): void {

    const rl = createInterface({
        input: process.stdin,
        output: process.stdout,
        prompt: "Pokedex >"
    });

    const validCommands = getCommands();

    rl.prompt();
    rl.on('line', async (line) => {
        let cleanedInput = cleanInput(line);
        if (cleanedInput.length > 0) {
            let inputCommand = cleanedInput[0];
            if (inputCommand in validCommands){
                validCommands[inputCommand].callback(validCommands);
            }else
            {
                console.log("Unknown command");
            }
        }
        rl.prompt();
    });


}