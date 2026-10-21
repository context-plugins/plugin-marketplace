import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * Filters the results to only include transactions that received the specified ECI during 3DS
 * authentication. This parameter also accepts [the null
 * character](https://en.wikipedia.org/wiki/Null_character) to include transactions that have a null
 * for this field.
 */
export type ThreeDSecureEci = string[];

export const threeDSecureEciSchema: Schema<ThreeDSecureEci> = s.of<ThreeDSecureEci>(
  s.union([s.array(s.string())]),
);
