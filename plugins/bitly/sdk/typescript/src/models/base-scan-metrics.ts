import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { facetBitlyQrCodesApiSchema, type FacetBitlyQrCodesApi } from "./facet-bitly-qr-codes-api.js";

export type BaseScanMetrics = {
  unit?: string;
  units?: number;
  facet?: FacetBitlyQrCodesApi;
  unitReference?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const baseScanMetricsSchema: Schema<BaseScanMetrics> = s.object<BaseScanMetrics>(
  {
    unit: s.optional(s.string()),
    units: s.optional(s.int()),
    facet: s.optional(s.lazy(() => facetBitlyQrCodesApiSchema)),
    unitReference: s.optional(s.string()),
    _keysMap: {
      unitReference: "unit_reference",
    },
  },
  { additionalProperties: s.json() },
);
