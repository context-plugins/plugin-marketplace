import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { timePointGranularitySchema, type TimePointGranularity } from "./time-point-granularity.js";
import { timeSeriesGranularitySchema, type TimeSeriesGranularity } from "./time-series-granularity.js";

export type ExplainabilityConfig = {
  /**
   * To create an Explainability for all time series in your datasets, use ALL. To create an
   * Explainability for specific time series in your datasets, use SPECIFIC. Specify time series by
   * uploading a CSV or Parquet file to an Amazon S3 bucket and set the location within the
   * DataDestination data type.
   */
  timeSeriesGranularity: TimeSeriesGranularity;
  /**
   * To create an Explainability for all time points in your forecast horizon, use ALL. To create an
   * Explainability for specific time points in your forecast horizon, use SPECIFIC. Specify time
   * points with the StartDateTime and EndDateTime parameters within the CreateExplainability
   * operation.
   */
  timePointGranularity: TimePointGranularity;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const explainabilityConfigSchema: Schema<ExplainabilityConfig> = s.object<ExplainabilityConfig>(
  {
    timeSeriesGranularity: timeSeriesGranularitySchema,
    timePointGranularity: timePointGranularitySchema,
    _keysMap: {
      timeSeriesGranularity: "TimeSeriesGranularity",
      timePointGranularity: "TimePointGranularity",
    },
  },
  { additionalProperties: s.json() },
);
