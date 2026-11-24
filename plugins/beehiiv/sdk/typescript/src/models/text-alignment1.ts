import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The text alignment of the paragraph (e.g., left, center, right). */
export const TextAlignment1 = {
  Left: "left",
  Center: "center",
  Right: "right",
} as const;
export type TextAlignment1 = (typeof TextAlignment1)[keyof typeof TextAlignment1] | (string & {});

export const textAlignment1Schema: EnumSchema<TextAlignment1> = s.enumOf<TextAlignment1>(TextAlignment1);
