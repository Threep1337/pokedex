import { CLICommand } from "./command";

export function commandHelp(commands: Record<string, CLICommand>):void{
    let helpMessage:string = "Welcome to the Pokedex!\nUsage:\n";

    for (const command in commands){
        helpMessage+= `\n${commands[command].name}: ${commands[command].description}`

    }
    console.log(helpMessage);
}