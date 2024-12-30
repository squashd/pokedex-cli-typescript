import { commandCatch } from './command-catch.js'
import { commandExit } from './command-exit.js'
import { commandExplore } from './command-explore.js'
import { commandHelp } from './command-help.js'
import { commandInspect } from './command-inspect.js'
import { commandMap, commandMapb } from './command-map.js'
import { commandPokedex } from './command-pokedex.js'
import type { CLICommand } from './state.js'

export function getCommands(): Record<string, CLICommand> {
  return {
    exit: {
      name: 'exit',
      description: 'Exits the pokedex',
      callback: commandExit,
    },
    help: {
      name: 'help',
      description: 'Displays a help message',
      callback: commandHelp,
    },
    map: {
      name: 'map',
      description: 'Moves forward on the map',
      callback: commandMap,
    },
    mapb: {
      name: 'mapb',
      description: 'Moves backward on the map',
      callback: commandMapb,
    },
    explore: {
      name: 'explore <location>',
      description: 'Explore a location',
      callback: commandExplore,
    },
    catch: {
      name: 'catch <pokemon>',
      description: 'Catch a pokemon',
      callback: commandCatch,
    },
    inspect: {
      name: 'inspect <pokemon>',
      description: 'Inspect a pokemon',
      callback: commandInspect,
    },
    pokedex: {
      name: 'pokedex',
      description: 'Display pokedex',
      callback: commandPokedex,
    },
  }
}
