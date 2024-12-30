import type { State } from './state.js'

export const commandCatch = async (state: State, ...args: string[]) => {
  if (args.length !== 1) {
    console.log('Usage: catch <pokemon>')
    return
  }
  const pokemonName = args[0]
  const catchStr = `Throwing a Pokeball at ${pokemonName}...`
  console.log(catchStr)
  const res = await state.pokeAPI.fetchPokemon(pokemonName)

  const roll = Math.random()
  const chanceOfCatch = 0.75
  const caught = roll > 1 - chanceOfCatch
  if (!caught) {
    const noCatchStr = `${pokemonName} broke free!`
    const ranAwayStr = `${pokemonName} ran away!`
    console.log(noCatchStr)
    console.log(ranAwayStr)
    return
  }

  state.pokedex[pokemonName] = res
  const caughtstr = `${pokemonName} was caught!`
  const inspectStr = 'You may now inspect it with the inspect command.'
  console.log(caughtstr)
  console.log(inspectStr)
}
