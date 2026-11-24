import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type MetricDiffDiagnosticsV4 = {
  metricDiff?: number;
  metricDiffPercent?: number;
  sourceCheckRowsTested?: number;
  sourceDatasetRowsTested?: number;
  sourceMetric?: number;
  targetCheckRowsTested?: number;
  targetDatasetRowsTested?: number;
  targetMetric?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const metricDiffDiagnosticsV4Schema: Schema<MetricDiffDiagnosticsV4> =
  s.object<MetricDiffDiagnosticsV4>(
    {
      metricDiff: s.optional(s.float64()),
      metricDiffPercent: s.optional(s.float64()),
      sourceCheckRowsTested: s.optional(s.int()),
      sourceDatasetRowsTested: s.optional(s.int()),
      sourceMetric: s.optional(s.float64()),
      targetCheckRowsTested: s.optional(s.int()),
      targetDatasetRowsTested: s.optional(s.int()),
      targetMetric: s.optional(s.float64()),
    },
    { additionalProperties: s.json() },
  );
