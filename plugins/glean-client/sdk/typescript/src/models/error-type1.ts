import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ErrorType1 = {
  ExistingItem: "EXISTING_ITEM",
  CorruptItem: "CORRUPT_ITEM",
} as const;
export type ErrorType1 = (typeof ErrorType1)[keyof typeof ErrorType1] | (string & {});

export const errorType1Schema: EnumSchema<ErrorType1> = s.enumOf<ErrorType1>(ErrorType1);
