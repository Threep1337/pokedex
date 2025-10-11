import { createInterface, type Interface } from "readline";
import { getCommands } from './command.js';
import { PokeAPI } from './pokeapi.js'
import { Url } from "url";

export type CLICommand = {
    name: string;
    description: string;
    callback: (state: State) => Promise<void>;
};

export type State = {
    interface: Interface;
    validCommands: Record<string, CLICommand>;
    PokeAPI : PokeAPI;
    nextLocationsURL: string | null;
    prevLocationsURL: string | null;
};

export function initState(): State {
    const rl: Interface = createInterface({
        input: process.stdin,
        output: process.stdout,
        prompt: "Pokedex >"
    });

    const validCommands = getCommands();
    const pokeAPI: PokeAPI = new PokeAPI();

    const initState: State = {
        interface: rl,
        validCommands: validCommands,
        PokeAPI: pokeAPI,
        nextLocationsURL: null,
        prevLocationsURL: null

    };
    return initState;
}