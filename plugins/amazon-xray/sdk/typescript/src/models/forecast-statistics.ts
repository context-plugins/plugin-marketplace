import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ForecastStatistics = {
  /** The upper limit of fault counts for a service. */
  faultCountHigh?: number;
  /** The lower limit of fault counts for a service. */
  faultCountLow?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const forecastStatisticsSchema: Schema<ForecastStatistics> = s.object<ForecastStatistics>(
  {
    faultCountHigh: s.optional(s.int()),
    faultCountLow: s.optional(s.int()),
    _keysMap: {
      faultCountHigh: "FaultCountHigh",
      faultCountLow: "FaultCountLow",
    },
  },
  { additionalProperties: s.json() },
);
