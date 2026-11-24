import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type FlywheelModelEvaluationMetrics = {
  /** The average F1 score from the evaluation metrics. */
  averageF1Score?: number;
  /** Average precision metric for the model. */
  averagePrecision?: number;
  /** Average recall metric for the model. */
  averageRecall?: number;
  /** Average accuracy metric for the model. */
  averageAccuracy?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const flywheelModelEvaluationMetricsSchema: Schema<FlywheelModelEvaluationMetrics> =
  s.object<FlywheelModelEvaluationMetrics>(
    {
      averageF1Score: s.optional(s.float64()),
      averagePrecision: s.optional(s.float64()),
      averageRecall: s.optional(s.float64()),
      averageAccuracy: s.optional(s.float64()),
      _keysMap: {
        averageF1Score: "AverageF1Score",
        averagePrecision: "AveragePrecision",
        averageRecall: "AverageRecall",
        averageAccuracy: "AverageAccuracy",
      },
    },
    { additionalProperties: s.json() },
  );
