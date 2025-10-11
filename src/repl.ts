import { createInterface } from 'node:readline';
import { stdin, stdout } from 'node:process';
import { getCommands } from './command.js';
import { commandExit } from './command_exit.js';
import { State } from './state.js';


export function cleanInput(input: string): string[] {
    return input.trim().toLowerCase().replace(/\s+/g, " ").split(" ");
}

export function startREPL(state: State) {

    state.interface.prompt()
    state.interface.on('line', async (line) => {
        let cleanedInput = cleanInput(line);
        if (cleanedInput.length > 0) {
            let inputCommand = cleanedInput[0];
            if (inputCommand in state.validCommands) {
                try {
                    await state.validCommands[inputCommand].callback(state);
                } catch (err) {
                    if (err instanceof Error) {
                        console.log(`An error was thrown: ${err.message}`);
                    } else {
                        console.log("An unknown error occurred:", err);
                    }
                }

            } else {
                console.log("Unknown command");
            }
        }
        state.interface.prompt();
    });


}