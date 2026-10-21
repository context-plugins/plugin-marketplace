import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * An upper bound for the number of tokens that can be generated for a response, including visible
 * output tokens and reasoning tokens.
 */
export type MaxOutputTokens = number;

export const maxOutputTokensSchema: Schema<MaxOutputTokens> = s.of<MaxOutputTokens>(s.union([s.int()]));
