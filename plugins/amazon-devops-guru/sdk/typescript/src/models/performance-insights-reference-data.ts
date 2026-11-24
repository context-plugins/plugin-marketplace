import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  performanceInsightsReferenceComparisonValuesSchema,
  type PerformanceInsightsReferenceComparisonValues,
} from "./performance-insights-reference-comparison-values.js";

export type PerformanceInsightsReferenceData = {
  /** The name of the reference data. */
  name?: string;
  comparisonValues?: PerformanceInsightsReferenceComparisonValues;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const performanceInsightsReferenceDataSchema: Schema<PerformanceInsightsReferenceData> =
  s.object<PerformanceInsightsReferenceData>(
    {
      name: s.optional(s.string()),
      comparisonValues: s.optional(s.lazy(() => performanceInsightsReferenceComparisonValuesSchema)),
      _keysMap: {
        name: "Name",
        comparisonValues: "ComparisonValues",
      },
    },
    { additionalProperties: s.json() },
  );
