import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Type of GTT order. It can be one of the following: SINGLE refers to a single-leg GTT order
 * MULTIPLE refers to a multi-leg GTT order
 */
export const Type = {
  Single: "SINGLE",
  Multiple: "MULTIPLE",
} as const;
export type Type = (typeof Type)[keyof typeof Type] | (string & {});

export const typeSchema: EnumSchema<Type> = s.enumOf<Type>(Type);
