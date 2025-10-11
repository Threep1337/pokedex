import { ShallowLocations } from "./pokeapi.js";
import { State } from "./state.js"

export async function commandMapb(state: State) {
    let locations:ShallowLocations
    if (state.prevLocationsURL)
    {
        locations = await state.PokeAPI.fetchLocations(state.prevLocationsURL);
    }else{
        locations = await state.PokeAPI.fetchLocations();
    }
    

    state.nextLocationsURL = locations.next
    state.prevLocationsURL = locations.previous

    for (let location of locations.results){
        console.log(location.name);
    }

}