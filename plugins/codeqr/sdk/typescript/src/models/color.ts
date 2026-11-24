import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The color of the tag. */
export const Color = {
  Red: "red",
  Yellow: "yellow",
  Green: "green",
  Blue: "blue",
  Purple: "purple",
  Pink: "pink",
  Brown: "brown",
} as const;
export type Color = (typeof Color)[keyof typeof Color] | (string & {});

export const colorSchema: EnumSchema<Color> = s.enumOf<Color>(Color);
