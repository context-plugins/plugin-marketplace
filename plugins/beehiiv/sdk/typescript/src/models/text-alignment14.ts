import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The text alignment of the quote. Defaults depend on the variant. */
export const TextAlignment14 = {
  Left: "left",
  Center: "center",
  Right: "right",
} as const;
export type TextAlignment14 = (typeof TextAlignment14)[keyof typeof TextAlignment14] | (string & {});

export const textAlignment14Schema: EnumSchema<TextAlignment14> = s.enumOf<TextAlignment14>(TextAlignment14);
