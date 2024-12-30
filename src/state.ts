import { createInterface, type Interface } from 'readline'
import { getCommands } from './commands.js'
import { PokeAPI, type Pokemon } from './pokeapi.js'

export type CLICommand = {
  name: string
  description: string
  callback: (state: State, ...args: string[]) => Promise<void>
}

export type State = {
  readline: Interface
  commands: Record<string, CLICommand>
  pokeAPI: PokeAPI
  prevLocationURL: string
  nextLocationURL: string
  pokedex: Record<string, Pokemon>
}

export function initState(interval: number) {
  const rl = createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: 'pokedex > ',
  })

  const pokeAPI = new PokeAPI(interval)
  const pokedex = {}

  return {
    readline: rl,
    commands: getCommands(),
    pokeAPI,
    prevLocationURL: '',
    nextLocationURL: '',
    pokedex,
  }
}
