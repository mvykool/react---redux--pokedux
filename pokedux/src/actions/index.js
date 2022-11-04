import { SET_LOADING, SET_POKEMONS } from "./types";

export const setPokemons = (payload) => ({
    type: SET_POKEMONS, payload
});

export const setLoading =(payload) => ({
    type: SET_LOADING, payload
})