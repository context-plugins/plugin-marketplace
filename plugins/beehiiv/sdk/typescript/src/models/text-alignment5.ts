import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The text alignment of the button. */
export const TextAlignment5 = {
  Left: "left",
  Center: "center",
  Right: "right",
} as const;
export type TextAlignment5 = (typeof TextAlignment5)[keyof typeof TextAlignment5] | (string & {});

export const textAlignment5Schema: EnumSchema<TextAlignment5> = s.enumOf<TextAlignment5>(TextAlignment5);
