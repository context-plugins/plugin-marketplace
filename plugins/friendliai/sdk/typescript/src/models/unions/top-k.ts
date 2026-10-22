import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * Limits sampling to the top k tokens with the highest probabilities. Values range from 0 (no
 * filtering) to the model's vocabulary size (inclusive). The default value of 0 applies no
 * filtering, allowing all tokens.
 */
export type TopK = number;

export const topKSchema: Schema<TopK> = s.of<TopK>(s.union([s.int()]));
