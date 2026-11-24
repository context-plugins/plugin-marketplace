import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { autoMlOverrideStrategySchema, type AutoMlOverrideStrategy } from "./auto-ml-override-strategy.js";
import { evaluationResultSchema, type EvaluationResult } from "./evaluation-result.js";
import { optimizationMetricSchema, type OptimizationMetric } from "./optimization-metric.js";

export type GetAccuracyMetricsResponse = {
  /** An array of results from evaluating the predictor. */
  predictorEvaluationResults?: EvaluationResult[];
  /** Whether the predictor was created with CreateAutoPredictor. */
  isAutoPredictor?: boolean;
  /**
   * The LatencyOptimized AutoML override strategy is only available in private beta. Contact Amazon
   * Web Services Support or your account manager to learn more about access privileges. The AutoML
   * strategy used to train the predictor. Unless LatencyOptimized is specified, the AutoML strategy
   * optimizes predictor accuracy. This parameter is only valid for predictors trained using AutoML.
   */
  autoMlOverrideStrategy?: AutoMlOverrideStrategy;
  /** The accuracy metric used to optimize the predictor. */
  optimizationMetric?: OptimizationMetric;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const getAccuracyMetricsResponseSchema: Schema<GetAccuracyMetricsResponse> =
  s.object<GetAccuracyMetricsResponse>(
    {
      predictorEvaluationResults: s.optional(s.array(s.lazy(() => evaluationResultSchema))),
      isAutoPredictor: s.optional(s.boolean()),
      autoMlOverrideStrategy: s.optional(s.lazy(() => autoMlOverrideStrategySchema)),
      optimizationMetric: s.optional(s.lazy(() => optimizationMetricSchema)),
      _keysMap: {
        predictorEvaluationResults: "PredictorEvaluationResults",
        isAutoPredictor: "IsAutoPredictor",
        autoMlOverrideStrategy: "AutoMLOverrideStrategy",
        optimizationMetric: "OptimizationMetric",
      },
    },
    { additionalProperties: s.json() },
  );
