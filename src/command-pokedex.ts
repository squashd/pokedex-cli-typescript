import type { State } from './state.js'

export const commandPokedex = async (state: State) => {
  const pokemon = Object.values(state.pokedex)
  if (!pokemon.length) {
    console.log(`You have not caught any pokemon`)
    return
  }
  console.log('Your pokedex:')
  for (const poke of pokemon) {
    console.log(`- ${poke.name}`)
  }
}
