import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Whether to use a normal or bold font. */
export const FontWeight = {
  Normal: "normal",
  Bold: "bold",
} as const;
export type FontWeight = (typeof FontWeight)[keyof typeof FontWeight] | (string & {});

export const fontWeightSchema: EnumSchema<FontWeight> = s.enumOf<FontWeight>(FontWeight);
