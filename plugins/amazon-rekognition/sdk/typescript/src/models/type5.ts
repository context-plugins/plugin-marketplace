import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The type of the segment. Valid values are TECHNICAL_CUE and SHOT. */
export const Type5 = {
  TechnicalCue: "TECHNICAL_CUE",
  Shot: "SHOT",
} as const;
export type Type5 = (typeof Type5)[keyof typeof Type5] | (string & {});

export const type5Schema: EnumSchema<Type5> = s.enumOf<Type5>(Type5);
