import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * Optional upper bound on the total number of characters to include per url. Excerpts may contain
 * fewer characters than this limit to maximize relevance and token efficiency.
 */
export type MaxCharsPerResult = number;

export const maxCharsPerResultSchema: Schema<MaxCharsPerResult> = s.of<MaxCharsPerResult>(s.union([s.int()]));
