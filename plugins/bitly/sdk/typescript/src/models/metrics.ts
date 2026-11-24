import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  facetBitlyCustomBitlinksApiSchema,
  type FacetBitlyCustomBitlinksApi,
} from "./facet-bitly-custom-bitlinks-api.js";
import { metricSchema, type Metric } from "./metric.js";

export type Metrics = {
  unit?: string;
  units?: number;
  facet?: FacetBitlyCustomBitlinksApi;
  unitReference?: string;
  metrics?: Metric[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const metricsSchema: Schema<Metrics> = s.object<Metrics>(
  {
    unit: s.optional(s.string()),
    units: s.optional(s.int()),
    facet: s.optional(s.lazy(() => facetBitlyCustomBitlinksApiSchema)),
    unitReference: s.optional(s.string()),
    metrics: s.optional(s.array(s.lazy(() => metricSchema))),
    _keysMap: {
      unitReference: "unit_reference",
    },
  },
  { additionalProperties: s.json() },
);
