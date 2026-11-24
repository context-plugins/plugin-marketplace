import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type MetricDiagnosticsV4 = {
  datasetRowsTested?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const metricDiagnosticsV4Schema: Schema<MetricDiagnosticsV4> = s.object<MetricDiagnosticsV4>(
  {
    datasetRowsTested: s.optional(s.int()),
  },
  { additionalProperties: s.json() },
);
