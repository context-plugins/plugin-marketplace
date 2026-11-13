import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The color key to be displayed with the Group. */
export const ColorKey1 = {
  Blue: "blue",
  Purple: "purple",
  MidnightBlue: "midnight-blue",
  Orange: "orange",
  YellowGreen: "yellow-green",
  Brass: "brass",
  Gray: "gray",
  Fuchsia: "fuchsia",
  Yellow: "yellow",
  Pink: "pink",
  SkyBlue: "sky-blue",
  Green: "green",
  Red: "red",
  Black: "black",
  Slate: "slate",
  Turquoise: "turquoise",
} as const;
export type ColorKey1 = (typeof ColorKey1)[keyof typeof ColorKey1] | (string & {});

export const colorKey1Schema: EnumSchema<ColorKey1> = s.enumOf<ColorKey1>(ColorKey1);
