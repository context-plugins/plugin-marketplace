import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { logprobTopLogprob1Schema, type LogprobTopLogprob1 } from "../logprob-top-logprob1.js";

export type TopLogprobs1 = LogprobTopLogprob1[];

export const topLogprobs1Schema: Schema<TopLogprobs1> = s.of<TopLogprobs1>(
  s.union([s.array(s.lazy(() => logprobTopLogprob1Schema))]),
);
