import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The color of the tag */
export const Color2 = {
  Red: "red",
  Yellow: "yellow",
  Green: "green",
  Blue: "blue",
  Purple: "purple",
  Pink: "pink",
  Brown: "brown",
} as const;
export type Color2 = (typeof Color2)[keyof typeof Color2] | (string & {});

export const color2Schema: EnumSchema<Color2> = s.enumOf<Color2>(Color2);
