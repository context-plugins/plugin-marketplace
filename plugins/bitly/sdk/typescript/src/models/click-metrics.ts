import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { clickMetricSchema, type ClickMetric } from "./click-metric.js";
import { facet1Schema, type Facet1 } from "./facet1.js";

export type ClickMetrics = {
  unit?: string;
  units?: number;
  facet?: Facet1;
  unitReference?: string;
  metrics?: ClickMetric[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const clickMetricsSchema: Schema<ClickMetrics> = s.object<ClickMetrics>(
  {
    unit: s.optional(s.string()),
    units: s.optional(s.int()),
    facet: s.optional(s.lazy(() => facet1Schema)),
    unitReference: s.optional(s.string()),
    metrics: s.optional(s.array(s.lazy(() => clickMetricSchema))),
    _keysMap: {
      unitReference: "unit_reference",
    },
  },
  { additionalProperties: s.json() },
);
