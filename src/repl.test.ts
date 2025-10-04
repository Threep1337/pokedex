import { cleanInput } from "./repl";
import { describe, expect, test } from "vitest";


describe.each([
  {
    input: "  hello  world  ",
    expected: ["hello", "world"],
  },
  {
    input: "  HELLO  WORLD  ",
    expected: ["hello", "world"],
  },
  {
    input: "  hello  world HOw Are you?  ",
    expected: ["hello", "world","how","are","you?"],
  },
  {
    input: "This is a test      ",
    expected: ["this","is","a","test"],
  }

])("cleanInput($input)", ({ input, expected }) => {
  test(`Expected: ${expected}`, () => {
    let actual = cleanInput(input);
    // The `expect` and `toHaveLength` functions are from vitest
    // they will fail the test if the condition is not met
    expect(actual).toHaveLength(expected.length);
    for (const i in expected) {
      // likewise, the `toBe` function will fail the test if the values are not equal
      expect(actual[i]).toBe(expected[i]);
    }
  });
});