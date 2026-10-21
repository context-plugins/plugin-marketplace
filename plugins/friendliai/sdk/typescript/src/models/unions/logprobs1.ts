import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * Include the log probabilities on the logprobs most likely output tokens, as well the chosen
 * tokens.
 */
export type Logprobs1 = number;

export const logprobs1Schema: Schema<Logprobs1> = s.of<Logprobs1>(s.union([s.int()]));
