import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type OtherMetrics = {
  otherCityClicks?: number;
  noCityClicks?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const otherMetricsSchema: Schema<OtherMetrics> = s.object<OtherMetrics>(
  {
    otherCityClicks: s.optional(s.int()),
    noCityClicks: s.optional(s.int()),
    _keysMap: {
      otherCityClicks: "other_city_clicks",
      noCityClicks: "no_city_clicks",
    },
  },
  { additionalProperties: s.json() },
);
