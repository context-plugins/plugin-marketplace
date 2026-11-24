import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The text alignment of the caption. */
export const TextAlignment4 = {
  Left: "left",
  Center: "center",
  Right: "right",
} as const;
export type TextAlignment4 = (typeof TextAlignment4)[keyof typeof TextAlignment4] | (string & {});

export const textAlignment4Schema: EnumSchema<TextAlignment4> = s.enumOf<TextAlignment4>(TextAlignment4);
