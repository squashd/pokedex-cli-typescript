import type { State } from './state.js'

export const commandExit = async (state: State) => {
  console.log()
  console.log('Closing the Pokedex... Goodbye!')
  state.readline.close()
  process.exit(0)
}
