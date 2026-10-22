import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Text alignment. */
export const TextAlign = {
  Left: "left",
  Center: "center",
  Right: "right",
  Justify: "justify",
} as const;
export type TextAlign = (typeof TextAlign)[keyof typeof TextAlign] | (string & {});

export const textAlignSchema: EnumSchema<TextAlign> = s.enumOf<TextAlign>(TextAlign);
