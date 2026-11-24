import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The color associated with the status update. */
export const Color1 = {
  Green: "green",
  Yellow: "yellow",
  Red: "red",
  Blue: "blue",
} as const;
export type Color1 = (typeof Color1)[keyof typeof Color1] | (string & {});

export const color1Schema: EnumSchema<Color1> = s.enumOf<Color1>(Color1);
