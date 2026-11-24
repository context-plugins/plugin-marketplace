import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { topLogprobs1Schema, type TopLogprobs1 } from "./unions/top-logprobs1.js";

/**
 * A logprob is the logarithmic probability that the model assigns to producing a particular token
 * at a given position in the sequence. Less-negative (higher) logprob values indicate greater model
 * confidence in that token choice.
 */
export type Logprob2 = {
  token: string;
  logprob: number;
  topLogprobs?: TopLogprobs1;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const logprob2Schema: Schema<Logprob2> = s.object<Logprob2>(
  {
    token: s.string(),
    logprob: s.float64(),
    topLogprobs: s.optional(s.lazy(() => topLogprobs1Schema)),
    _keysMap: {
      topLogprobs: "top_logprobs",
    },
  },
  { additionalProperties: s.json() },
);
