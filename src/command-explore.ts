import type { State } from './state.js'

export const commandExplore = async (state: State, ...args: string[]) => {
  if (args.length !== 1) {
    console.log('Usage: explore <location>')
    return
  }
  const locationName = args[0]
  const res = await state.pokeAPI.fetchLocation(locationName)

  for (const encounter of res.pokemon_encounters) {
    const pokemon = encounter.pokemon
    console.log(pokemon.name)
  }
}
