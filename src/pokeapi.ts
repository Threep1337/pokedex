import { basename } from "path";

export class PokeAPI {
    private static readonly baseURL = "https://pokeapi.co/api/v2";

    constructor() { }

    async fetchLocations(pageURL?: string): Promise<ShallowLocations> {
        // I think this is the URL we want to call https://pokeapi.co/api/v2/location-area/
        let url;
        if (pageURL)
        {
            url = pageURL
        }
        else
        {
            url = PokeAPI.baseURL + "/location-area/"
        }

        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`Response status: ${response.status}`);
            }
            const result = await response.json();
            return result;

        } catch (error) {
            console.log(error);
            throw error
        }
    }

    //async fetchLocation(locationName: string): Promise<Location> {
        // implement this
    //}
}

export type ShallowLocations = {
    // add properties here
    count: number;
    next: string | null;
    previous: string | null;
    results: {
        name: string;
        url: string;
    }[];
};

export type Location = {
    // add properties here
};
