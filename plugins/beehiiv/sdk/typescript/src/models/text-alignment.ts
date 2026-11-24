import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The text alignment of the content. */
export const TextAlignment = {
  Left: "left",
  Center: "center",
  Right: "right",
} as const;
export type TextAlignment = (typeof TextAlignment)[keyof typeof TextAlignment] | (string & {});

export const textAlignmentSchema: EnumSchema<TextAlignment> = s.enumOf<TextAlignment>(TextAlignment);
