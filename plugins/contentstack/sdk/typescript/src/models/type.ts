import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Type of experience — SEGMENTED for rule-based or AB_TEST for split testing. */
export const Type = {
  Segmented: "SEGMENTED",
  AbTest: "AB_TEST",
} as const;
export type Type = (typeof Type)[keyof typeof Type] | (string & {});

export const typeSchema: EnumSchema<Type> = s.enumOf<Type>(Type);
