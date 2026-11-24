import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ProbabilisticRuleValueUpdate = {
  /**
   * Configured sampling percentage of traceIds. Note that sampling can be subject to limits to
   * ensure completeness of data.
   */
  desiredSamplingPercentage: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const probabilisticRuleValueUpdateSchema: Schema<ProbabilisticRuleValueUpdate> =
  s.object<ProbabilisticRuleValueUpdate>(
    {
      desiredSamplingPercentage: s.float64(),
      _keysMap: {
        desiredSamplingPercentage: "DesiredSamplingPercentage",
      },
    },
    { additionalProperties: s.json() },
  );
