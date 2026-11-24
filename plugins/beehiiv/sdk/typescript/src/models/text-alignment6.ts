import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The text alignment of the header (e.g., left, center, right). */
export const TextAlignment6 = {
  Left: "left",
  Center: "center",
  Right: "right",
} as const;
export type TextAlignment6 = (typeof TextAlignment6)[keyof typeof TextAlignment6] | (string & {});

export const textAlignment6Schema: EnumSchema<TextAlignment6> = s.enumOf<TextAlignment6>(TextAlignment6);
