import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { facetBitlyQrCodesApiSchema, type FacetBitlyQrCodesApi } from "./facet-bitly-qr-codes-api.js";
import { scanMetricSchema, type ScanMetric } from "./scan-metric.js";

export type ScanMetrics = {
  unit?: string;
  units?: number;
  facet?: FacetBitlyQrCodesApi;
  unitReference?: string;
  metrics?: ScanMetric[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const scanMetricsSchema: Schema<ScanMetrics> = s.object<ScanMetrics>(
  {
    unit: s.optional(s.string()),
    units: s.optional(s.int()),
    facet: s.optional(s.lazy(() => facetBitlyQrCodesApiSchema)),
    unitReference: s.optional(s.string()),
    metrics: s.optional(s.array(s.lazy(() => scanMetricSchema))),
    _keysMap: {
      unitReference: "unit_reference",
    },
  },
  { additionalProperties: s.json() },
);
