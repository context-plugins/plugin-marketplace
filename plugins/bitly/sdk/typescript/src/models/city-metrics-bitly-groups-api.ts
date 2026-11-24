import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { cityMetricSchema, type CityMetric } from "./city-metric.js";
import {
  facetBitlyCustomBitlinksApiSchema,
  type FacetBitlyCustomBitlinksApi,
} from "./facet-bitly-custom-bitlinks-api.js";
import { otherMetricsSchema, type OtherMetrics } from "./other-metrics.js";

export type CityMetricsBitlyGroupsApi = {
  unit?: string;
  units?: number;
  facet?: FacetBitlyCustomBitlinksApi;
  unitReference?: string;
  metrics?: CityMetric[];
  otherMetrics?: OtherMetrics;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const cityMetricsBitlyGroupsApiSchema: Schema<CityMetricsBitlyGroupsApi> =
  s.object<CityMetricsBitlyGroupsApi>(
    {
      unit: s.optional(s.string()),
      units: s.optional(s.int()),
      facet: s.optional(s.lazy(() => facetBitlyCustomBitlinksApiSchema)),
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
