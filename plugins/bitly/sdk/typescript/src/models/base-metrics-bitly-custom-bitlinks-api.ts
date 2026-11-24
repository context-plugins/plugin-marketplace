import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  facetBitlyCustomBitlinksApiSchema,
  type FacetBitlyCustomBitlinksApi,
} from "./facet-bitly-custom-bitlinks-api.js";

export type BaseMetricsBitlyCustomBitlinksApi = {
  unit?: string;
  units?: number;
  facet?: FacetBitlyCustomBitlinksApi;
  unitReference?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const baseMetricsBitlyCustomBitlinksApiSchema: Schema<BaseMetricsBitlyCustomBitlinksApi> =
  s.object<BaseMetricsBitlyCustomBitlinksApi>(
    {
      unit: s.optional(s.string()),
      units: s.optional(s.int()),
      facet: s.optional(s.lazy(() => facetBitlyCustomBitlinksApiSchema)),
      unitReference: s.optional(s.string()),
      _keysMap: {
        unitReference: "unit_reference",
      },
    },
    { additionalProperties: s.json() },
  );
