import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type EntityTypesEvaluationMetrics = {
  /**
   * A measure of the usefulness of the recognizer results for a specific entity type in the test
   * data. High precision means that the recognizer returned substantially more relevant results
   * than irrelevant ones.
   */
  precision?: number;
  /**
   * A measure of how complete the recognizer results are for a specific entity type in the test
   * data. High recall means that the recognizer returned most of the relevant results.
   */
  recall?: number;
  /**
   * A measure of how accurate the recognizer results are for a specific entity type in the test
   * data. It is derived from the Precision and Recall values. The F1Score is the harmonic average
   * of the two scores. The highest score is 1, and the worst score is 0.
   */
  f1Score?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const entityTypesEvaluationMetricsSchema: Schema<EntityTypesEvaluationMetrics> =
  s.object<EntityTypesEvaluationMetrics>(
    {
      precision: s.optional(s.float64()),
      recall: s.optional(s.float64()),
      f1Score: s.optional(s.float64()),
      _keysMap: {
        precision: "Precision",
        recall: "Recall",
        f1Score: "F1Score",
      },
    },
    { additionalProperties: s.json() },
  );
