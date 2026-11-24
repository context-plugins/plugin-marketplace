import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { deviceMetricSchema, type DeviceMetric } from "./device-metric.js";
import { facet1Schema, type Facet1 } from "./facet1.js";

export type DeviceMetrics = {
  unit?: string;
  units?: number;
  facet?: Facet1;
  unitReference?: string;
  metrics?: DeviceMetric[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const deviceMetricsSchema: Schema<DeviceMetrics> = s.object<DeviceMetrics>(
  {
    unit: s.optional(s.string()),
    units: s.optional(s.int()),
    facet: s.optional(s.lazy(() => facet1Schema)),
    unitReference: s.optional(s.string()),
    metrics: s.optional(s.array(s.lazy(() => deviceMetricSchema))),
    _keysMap: {
      unitReference: "unit_reference",
    },
  },
  { additionalProperties: s.json() },
);
