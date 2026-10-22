import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * Filters the results to only include transactions that failed with the specified error code. The
 * error code is a string that describes the reason for the failure. This parameter also accepts
 * [the null character](https://en.wikipedia.org/wiki/Null_character) to include transactions that
 * have a null for this field.
 */
export type ErrorCode1 = string[];

export const errorCode1Schema: Schema<ErrorCode1> = s.of<ErrorCode1>(s.union([s.array(s.string())]));
