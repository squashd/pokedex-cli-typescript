import { describe, test, expect } from "vitest";
import { cleanInput } from "./repl";

describe.each([
  {
    input: "  hello  world  ",
    expected: ["hello", "world"],
  },
  {
    input: " hello  world  ",
    expected: ["hello", "world"],
  },
  {
    input: " mapb coronet",
    expected: ["mapb", "coronet"],
  },
  {
    input: " MAPb mt-fuji",
    expected: ["mapb", "mt-fuji"],
  },
])("cleanInput($input)", ({ input, expected }) => {
  test(`Expected: ${expected}`, () => {
    const actual = cleanInput(input);

    expect(actual).toHaveLength(expected.length);
    for (const i in expected) {
      expect(actual[i]).toBe(expected[i]);
    }
  });
});
