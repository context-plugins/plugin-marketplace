import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The text alignment of the image. */
export const TextAlignment3 = {
  Left: "left",
  Center: "center",
  Right: "right",
} as const;
export type TextAlignment3 = (typeof TextAlignment3)[keyof typeof TextAlignment3] | (string & {});

export const textAlignment3Schema: EnumSchema<TextAlignment3> = s.enumOf<TextAlignment3>(TextAlignment3);
