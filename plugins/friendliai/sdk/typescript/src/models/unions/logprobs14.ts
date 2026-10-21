import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Whether to return log probabilities of the output tokens or not. */
export type Logprobs14 = boolean;

export const logprobs14Schema: Schema<Logprobs14> = s.of<Logprobs14>(s.union([s.boolean()]));
