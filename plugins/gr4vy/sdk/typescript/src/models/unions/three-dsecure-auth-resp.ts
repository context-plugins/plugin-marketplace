import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * Filters the results to only include transactions that received the specified response during 3DS
 * authentication. This parameter also accepts [the null
 * character](https://en.wikipedia.org/wiki/Null_character) to include transactions that have a null
 * for this field.
 */
export type ThreeDSecureAuthResp = string[];

export const threeDSecureAuthRespSchema: Schema<ThreeDSecureAuthResp> = s.of<ThreeDSecureAuthResp>(
  s.union([s.array(s.string())]),
);
