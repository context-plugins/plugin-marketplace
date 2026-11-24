import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type Logprobs = number[];

export const logprobsInternalSchema: Schema<Logprobs> = s.of<Logprobs>(s.union([s.array(s.float64())]));

export const logprobsSchema: Schema<Logprobs> = s.lazySchema(() =>
  s.of<Logprobs>(s.union([s.array(s.float64()).check(s.maxLength(250000))])),
);
