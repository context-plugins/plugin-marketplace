import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * The number of most likely tokens to return at each token position, each with an associated log
 * probability. `logprobs` must be set to true if this parameter is used.
 */
export type TopLogprobs = number;

export const topLogprobsSchema: Schema<TopLogprobs> = s.of<TopLogprobs>(s.union([s.int()]));
