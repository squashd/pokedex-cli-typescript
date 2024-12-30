import type { State } from './state.js'

export const commandInspect = async (state: State, ...args: string[]) => {
  if (args.length !== 1) {
    console.log('Usage: inspect <pokemon>')
    return
  }
  const pokemonName = args[0]
  const pokemon = state.pokedex[pokemonName]
  if (!pokemon) {
    console.log(`You have not caught ${pokemonName}`)
    return
  }
  console.log(`Name: ${pokemon.name}`)
  console.log(`Height: ${pokemon.height}`)
  console.log('Stats')
  for (const stat of pokemon.stats) {
    console.log(`   - ${stat.stat.name}: ${stat.base_stat}`)
  }
  console.log('Types')
  for (const type of pokemon.types) {
    console.log(`   - ${type.type.name}`)
  }
}
