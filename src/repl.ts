import { State } from './state.js'

export function startREPL(state: State) {
  state.readline.prompt()

  state.readline.on('line', async (input) => {
    const words = cleanInput(input)
    if (words.length === 0) {
      state.readline.prompt()
      return
    }

    const commandName = words[0]
    const args = words.slice(1)

    const cmd = state.commands[commandName]
    if (!cmd) {
      console.log(
        `Unknown command: "${commandName}". Type "help" for a list of commands.`,
      )
      state.readline.prompt()
      return
    }

    try {
      await cmd.callback(state, ...args)
    } catch (e) {
      if (e instanceof Error) {
        console.error(e.message)
      } else {
        console.error('An unknown error occurred.')
      }
    }

    state.readline.prompt()
  })
}

export const cleanInput = (input: string): string[] => {
  const split = input.split(' ')
  const filtered = split.filter(Boolean)
  const cleaned = filtered.map((word) => word.trim().toLowerCase())
  return cleaned
}
