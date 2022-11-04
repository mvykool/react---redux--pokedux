import { SET_FAVORITES, SET_LOADING, SET_POKEMONS } from "../actions/types";

const initialState = {
    pokemons: [],
    loading: false,
};

export const pokemonsReducer = (state = initialState, action) => {
    switch(action.type){
        case SET_POKEMONS:
            return {...state, pokemons: action.payload};
        case SET_FAVORITES:
            const newPokemonList = [...state.pokemons];
            const currentPokemonId = newPokemonList.findIndex((pokemon) => {
                return pokemon.id === action.payload.pokemonId;
            });

            if(currentPokemonId < 0){
                return state;
            }

            newPokemonList[currentPokemonId].favorite =
            !newPokemonList[currentPokemonId].favorite;

            return {...state, pokemons: newPokemonList}
            
        case SET_LOADING:
            return {...state, loading: action.payload};    
        default:
            return state;    
    }
};