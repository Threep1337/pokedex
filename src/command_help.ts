import { State, CLICommand } from "./state.js"

export async function commandHelp(state: State) {
    let helpMessage: string = "Welcome to the Pokedex!\nUsage:\n";

    for (const command in state.validCommands) {
        helpMessage += `\n${state.validCommands[command].name}: ${state.validCommands[command].description}`

    }
    console.log(helpMessage);
}