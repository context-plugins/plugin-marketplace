import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The color of the tag. If not provided, a random color will be used from the list: red, yellow,
 * green, blue, purple, pink, brown.
 */
export const Color1 = {
  Red: "red",
  Yellow: "yellow",
  Green: "green",
  Blue: "blue",
  Purple: "purple",
  Pink: "pink",
  Brown: "brown",
} as const;
export type Color1 = (typeof Color1)[keyof typeof Color1] | (string & {});

export const color1Schema: EnumSchema<Color1> = s.enumOf<Color1>(Color1);
