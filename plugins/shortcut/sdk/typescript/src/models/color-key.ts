import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The color key you wish to use for the Group in the system. */
export const ColorKey = {
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
export type ColorKey = (typeof ColorKey)[keyof typeof ColorKey] | (string & {});

export const colorKeySchema: EnumSchema<ColorKey> = s.enumOf<ColorKey>(ColorKey);
