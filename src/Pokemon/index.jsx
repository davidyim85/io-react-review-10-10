import axios from 'axios'
import { useState, useEffect } from 'react'

const Pokemon = () => {
    const [pokemon, setPokemon] = useState({
        name: '',
        image: ''
    })

    //if we want to do something when the component loads
    useEffect(() => {
        axios
            .get(`https://pokeapi.co/api/v2/pokemon/pikachu`)
            .then(v => {
                console.log(v.data.name, v.data.sprites.front_default)
                setPokemon({
                    name: v.data.name,
                    image: v.data.sprites.front_default
                })
            })
            .catch(error => {
                setPokemon({
                    name: 'error finding pokemon',
                    image: '#'
                })
            })
    }, [])

    const handleSubmit = e => {
        e.preventDefault()
        const pokeSearchForm = new FormData(e.target)
        const thingWeJustTyped = pokeSearchForm.get('pokemon').toLowerCase()
        // expected log is to have the pokemon that was written in the input
        console.log(thingWeJustTyped)
        axios
            .get(`https://pokeapi.co/api/v2/pokemon/${thingWeJustTyped}`)
            .then(v => {
                console.log(v.data.name, v.data.sprites.front_default)
                setPokemon({
                    name: v.data.name,
                    image: v.data.sprites.front_default
                })
            })
            .catch(error => {
                setPokemon({
                    name: 'error finding pokemon',
                    image: '#'
                })
            })
        //reset the form
        e.target.reset()
    }

    return (
        <>
            <h1>Pokemon Seach</h1>
            <form onSubmit={handleSubmit}>
                Pokemon: <input name='pokemon' />
                <button type='submit'>Search</button>
            </form>
            <h2>{pokemon.name}</h2>
            {pokemon.name === 'error finding pokemon' ? null : <img src={pokemon.image} alt={pokemon.name} />}
        </>
    )
}

export default Pokemon;