import type { State } from './state.js'

export const commandMap = async (state: State) => {
  const res = await state.pokeAPI.fetchLocations(state.nextLocationURL)

  state.prevLocationURL = res.previous
  state.nextLocationURL = res.next

  for (const loc of res.results) {
    console.log(loc.name)
  }
}

export const commandMapb = async (state: State) => {
  if (!state.prevLocationURL) {
    console.log('You are at the beginning of the map.')
    return
  }
  const res = await state.pokeAPI.fetchLocations(state.prevLocationURL)

  state.prevLocationURL = res.previous
  state.nextLocationURL = res.next

  for (const loc of res.results) {
    console.log(loc.name)
  }
}
