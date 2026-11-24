import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ClassifierEvaluationMetrics = {
  /**
   * The fraction of the labels that were correct recognized. It is computed by dividing the number
   * of labels in the test documents that were correctly recognized by the total number of labels in
   * the test documents.
   */
  accuracy?: number;
  /**
   * A measure of the usefulness of the classifier results in the test data. High precision means
   * that the classifier returned substantially more relevant results than irrelevant ones.
   */
  precision?: number;
  /**
   * A measure of how complete the classifier results are for the test data. High recall means that
   * the classifier returned most of the relevant results.
   */
  recall?: number;
  /**
   * A measure of how accurate the classifier results are for the test data. It is derived from the
   * Precision and Recall values. The F1Score is the harmonic average of the two scores. The highest
   * score is 1, and the worst score is 0.
   */
  f1Score?: number;
  /**
   * A measure of the usefulness of the recognizer results in the test data. High precision means
   * that the recognizer returned substantially more relevant results than irrelevant ones. Unlike
   * the Precision metric which comes from averaging the precision of all available labels, this is
   * based on the overall score of all precision scores added together.
   */
  microPrecision?: number;
  /**
   * A measure of how complete the classifier results are for the test data. High recall means that
   * the classifier returned most of the relevant results. Specifically, this indicates how many of
   * the correct categories in the text that the model can predict. It is a percentage of correct
   * categories in the text that can found. Instead of averaging the recall scores of all labels (as
   * with Recall), micro Recall is based on the overall score of all recall scores added together.
   */
  microRecall?: number;
  /**
   * A measure of how accurate the classifier results are for the test data. It is a combination of
   * the Micro Precision and Micro Recall values. The Micro F1Score is the harmonic mean of the two
   * scores. The highest score is 1, and the worst score is 0.
   */
  microF1Score?: number;
  /**
   * Indicates the fraction of labels that are incorrectly predicted. Also seen as the fraction of
   * wrong labels compared to the total number of labels. Scores closer to zero are better.
   */
  hammingLoss?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const classifierEvaluationMetricsSchema: Schema<ClassifierEvaluationMetrics> =
  s.object<ClassifierEvaluationMetrics>(
    {
      accuracy: s.optional(s.float64()),
      precision: s.optional(s.float64()),
      recall: s.optional(s.float64()),
      f1Score: s.optional(s.float64()),
      microPrecision: s.optional(s.float64()),
      microRecall: s.optional(s.float64()),
      microF1Score: s.optional(s.float64()),
      hammingLoss: s.optional(s.float64()),
      _keysMap: {
        accuracy: "Accuracy",
        precision: "Precision",
        recall: "Recall",
        f1Score: "F1Score",
        microPrecision: "MicroPrecision",
        microRecall: "MicroRecall",
        microF1Score: "MicroF1Score",
        hammingLoss: "HammingLoss",
      },
    },
    { additionalProperties: s.json() },
  );
