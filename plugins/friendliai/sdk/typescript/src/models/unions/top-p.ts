import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * Keeps only the smallest set of tokens whose cumulative probabilities reach `top_p` or higher.
 * Values range from 0.0 to 1.0 (inclusive). The default value of 1.0 includes all tokens, allowing
 * maximum diversity.
 */
export type TopP = number;

export const topPSchema: Schema<TopP> = s.of<TopP>(s.union([s.float64()]));
