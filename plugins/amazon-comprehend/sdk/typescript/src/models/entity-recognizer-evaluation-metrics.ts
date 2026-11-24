import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type EntityRecognizerEvaluationMetrics = {
  /**
   * A measure of the usefulness of the recognizer results in the test data. High precision means
   * that the recognizer returned substantially more relevant results than irrelevant ones.
   */
  precision?: number;
  /**
   * A measure of how complete the recognizer results are for the test data. High recall means that
   * the recognizer returned most of the relevant results.
   */
  recall?: number;
  /**
   * A measure of how accurate the recognizer results are for the test data. It is derived from the
   * Precision and Recall values. The F1Score is the harmonic average of the two scores. For plain
   * text entity recognizer models, the range is 0 to 100, where 100 is the best score. For PDF/Word
   * entity recognizer models, the range is 0 to 1, where 1 is the best score.
   */
  f1Score?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const entityRecognizerEvaluationMetricsSchema: Schema<EntityRecognizerEvaluationMetrics> =
  s.object<EntityRecognizerEvaluationMetrics>(
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
