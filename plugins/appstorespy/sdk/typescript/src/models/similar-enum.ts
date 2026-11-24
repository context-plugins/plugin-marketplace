import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** An enumeration. */
export const SimilarEnum = {
  To: "to",
  From: "from",
} as const;
export type SimilarEnum = (typeof SimilarEnum)[keyof typeof SimilarEnum] | (string & {});

export const similarEnumSchema: EnumSchema<SimilarEnum> = s.enumOf<SimilarEnum>(SimilarEnum);
