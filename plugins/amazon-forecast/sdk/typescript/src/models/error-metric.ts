import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ErrorMetric = {
  /** The Forecast type used to compute WAPE, MAPE, MASE, and RMSE. */
  forecastType?: string;
  /** The weighted absolute percentage error (WAPE). */
  wape?: number;
  /** The root-mean-square error (RMSE). */
  rmse?: number;
  /** The Mean Absolute Scaled Error (MASE) */
  mase?: number;
  /** The Mean Absolute Percentage Error (MAPE) */
  mape?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const errorMetricSchema: Schema<ErrorMetric> = s.object<ErrorMetric>(
  {
    forecastType: s.optional(s.string()),
    wape: s.optional(s.float64()),
    rmse: s.optional(s.float64()),
    mase: s.optional(s.float64()),
    mape: s.optional(s.float64()),
    _keysMap: {
      forecastType: "ForecastType",
      wape: "WAPE",
      rmse: "RMSE",
      mase: "MASE",
      mape: "MAPE",
    },
  },
  { additionalProperties: s.json() },
);
