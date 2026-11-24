import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type OtherScanMetrics = {
  otherCityScans?: number;
  noCityScans?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const otherScanMetricsSchema: Schema<OtherScanMetrics> = s.object<OtherScanMetrics>(
  {
    otherCityScans: s.optional(s.int()),
    noCityScans: s.optional(s.int()),
    _keysMap: {
      otherCityScans: "other_city_scans",
      noCityScans: "no_city_scans",
    },
  },
  { additionalProperties: s.json() },
);
