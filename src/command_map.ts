import { ShallowLocations } from "./pokeapi.js";
import { State } from "./state.js"

export async function commandMap(state: State) {
    let locations:ShallowLocations
    if (state.nextLocationsURL)
    {
        //console.log ("NextLocations URL isnt empty")
        locations = await state.PokeAPI.fetchLocations(state.nextLocationsURL);
    }else{
        locations = await state.PokeAPI.fetchLocations();
    }
    

    state.nextLocationsURL = locations.next
    state.prevLocationsURL = locations.previous

    for (let location of locations.results){
        console.log(location.name);
    }

}