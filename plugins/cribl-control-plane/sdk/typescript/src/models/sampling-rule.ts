import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type SamplingRule = {
  /** JavaScript filter expression matching events to be sampled. Use true to match all. */
  filter: string;
  /** Sampling rate; picks one out of N matching events */
  rate: number;
};

export const samplingRuleSchema: Schema<SamplingRule> = s.object<SamplingRule>({
  filter: s.string(),
  rate: s.int(),
});
