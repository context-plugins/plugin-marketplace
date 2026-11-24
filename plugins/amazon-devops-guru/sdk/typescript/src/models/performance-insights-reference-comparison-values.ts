import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  performanceInsightsReferenceMetricSchema,
  type PerformanceInsightsReferenceMetric,
} from "./performance-insights-reference-metric.js";
import {
  performanceInsightsReferenceScalarSchema,
  type PerformanceInsightsReferenceScalar,
} from "./performance-insights-reference-scalar.js";

export type PerformanceInsightsReferenceComparisonValues = {
  referenceScalar?: PerformanceInsightsReferenceScalar;
  referenceMetric?: PerformanceInsightsReferenceMetric;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const performanceInsightsReferenceComparisonValuesSchema: Schema<PerformanceInsightsReferenceComparisonValues> =
  s.object<PerformanceInsightsReferenceComparisonValues>(
    {
      referenceScalar: s.optional(s.lazy(() => performanceInsightsReferenceScalarSchema)),
      referenceMetric: s.optional(s.lazy(() => performanceInsightsReferenceMetricSchema)),
      _keysMap: {
        referenceScalar: "ReferenceScalar",
        referenceMetric: "ReferenceMetric",
      },
    },
    { additionalProperties: s.json() },
  );
