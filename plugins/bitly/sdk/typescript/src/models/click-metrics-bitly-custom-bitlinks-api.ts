import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { clickMetricSchema, type ClickMetric } from "./click-metric.js";
import {
  facetBitlyCustomBitlinksApiSchema,
  type FacetBitlyCustomBitlinksApi,
} from "./facet-bitly-custom-bitlinks-api.js";

export type ClickMetricsBitlyCustomBitlinksApi = {
  unit?: string;
  units?: number;
  facet?: FacetBitlyCustomBitlinksApi;
  unitReference?: string;
  metrics?: ClickMetric[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const clickMetricsBitlyCustomBitlinksApiSchema: Schema<ClickMetricsBitlyCustomBitlinksApi> =
  s.object<ClickMetricsBitlyCustomBitlinksApi>(
    {
      unit: s.optional(s.string()),
      units: s.optional(s.int()),
      facet: s.optional(s.lazy(() => facetBitlyCustomBitlinksApiSchema)),
      unitReference: s.optional(s.string()),
      metrics: s.optional(s.array(s.lazy(() => clickMetricSchema))),
      _keysMap: {
        unitReference: "unit_reference",
      },
    },
    { additionalProperties: s.json() },
  );
