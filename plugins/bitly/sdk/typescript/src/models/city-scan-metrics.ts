import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { cityScanMetricSchema, type CityScanMetric } from "./city-scan-metric.js";
import { facetBitlyQrCodesApiSchema, type FacetBitlyQrCodesApi } from "./facet-bitly-qr-codes-api.js";
import { otherScanMetricsSchema, type OtherScanMetrics } from "./other-scan-metrics.js";

export type CityScanMetrics = {
  unit?: string;
  units?: number;
  facet?: FacetBitlyQrCodesApi;
  unitReference?: string;
  metrics?: CityScanMetric[];
  otherMetrics?: OtherScanMetrics;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const cityScanMetricsSchema: Schema<CityScanMetrics> = s.object<CityScanMetrics>(
  {
    unit: s.optional(s.string()),
    units: s.optional(s.int()),
    facet: s.optional(s.lazy(() => facetBitlyQrCodesApiSchema)),
    unitReference: s.optional(s.string()),
    metrics: s.optional(s.array(s.lazy(() => cityScanMetricSchema))),
    otherMetrics: s.optional(s.lazy(() => otherScanMetricsSchema)),
    _keysMap: {
      unitReference: "unit_reference",
      otherMetrics: "other_metrics",
    },
  },
  { additionalProperties: s.json() },
);
