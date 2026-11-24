import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { cityMetricSchema, type CityMetric } from "./city-metric.js";
import { facet1Schema, type Facet1 } from "./facet1.js";
import { otherMetricsSchema, type OtherMetrics } from "./other-metrics.js";

export type CityMetrics = {
  unit?: string;
  units?: number;
  facet?: Facet1;
  unitReference?: string;
  metrics?: CityMetric[];
  otherMetrics?: OtherMetrics;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const cityMetricsSchema: Schema<CityMetrics> = s.object<CityMetrics>(
  {
    unit: s.optional(s.string()),
    units: s.optional(s.int()),
    facet: s.optional(s.lazy(() => facet1Schema)),
    unitReference: s.optional(s.string()),
    metrics: s.optional(s.array(s.lazy(() => cityMetricSchema))),
    otherMetrics: s.optional(s.lazy(() => otherMetricsSchema)),
    _keysMap: {
      unitReference: "unit_reference",
      otherMetrics: "other_metrics",
    },
  },
  { additionalProperties: s.json() },
);
