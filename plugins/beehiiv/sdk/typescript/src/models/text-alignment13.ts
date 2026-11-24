import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The text alignment of the cell. */
export const TextAlignment13 = {
  Left: "left",
  Center: "center",
  Right: "right",
} as const;
export type TextAlignment13 = (typeof TextAlignment13)[keyof typeof TextAlignment13] | (string & {});

export const textAlignment13Schema: EnumSchema<TextAlignment13> = s.enumOf<TextAlignment13>(TextAlignment13);
