import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type PerServiceSamplingRule = {
  /** Datadog service name */
  service: string;
  /** Datadog environment name (example: prod, staging) */
  environment: string;
  /** Sampling rate for this service/environment combination (0.0–1.0) */
  rate: number;
};

export const perServiceSamplingRuleSchema: Schema<PerServiceSamplingRule> = s.object<PerServiceSamplingRule>({
  service: s.string(),
  environment: s.string(),
  rate: s.float64(),
});
