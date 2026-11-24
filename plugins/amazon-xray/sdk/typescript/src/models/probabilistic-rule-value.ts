import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ProbabilisticRuleValue = {
  /**
   * Configured sampling percentage of traceIds. Note that sampling can be subject to limits to
   * ensure completeness of data.
   */
  desiredSamplingPercentage: number;
  /** Applied sampling percentage of traceIds. */
  actualSamplingPercentage?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const probabilisticRuleValueSchema: Schema<ProbabilisticRuleValue> = s.object<ProbabilisticRuleValue>(
  {
    desiredSamplingPercentage: s.float64(),
    actualSamplingPercentage: s.optional(s.float64()),
    _keysMap: {
      desiredSamplingPercentage: "DesiredSamplingPercentage",
      actualSamplingPercentage: "ActualSamplingPercentage",
    },
  },
  { additionalProperties: s.json() },
);
