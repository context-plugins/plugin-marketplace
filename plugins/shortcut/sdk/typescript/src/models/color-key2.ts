import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** A color key associated with this EnumValue within the CustomField's domain. */
export const ColorKey2 = {
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
export type ColorKey2 = (typeof ColorKey2)[keyof typeof ColorKey2] | (string & {});

export const colorKey2Schema: EnumSchema<ColorKey2> = s.enumOf<ColorKey2>(ColorKey2);
