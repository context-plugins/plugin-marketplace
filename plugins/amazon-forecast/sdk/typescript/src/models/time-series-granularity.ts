import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * To create an Explainability for all time series in your datasets, use ALL. To create an
 * Explainability for specific time series in your datasets, use SPECIFIC. Specify time series by
 * uploading a CSV or Parquet file to an Amazon S3 bucket and set the location within the
 * DataDestination data type.
 */
export const TimeSeriesGranularity = {
  All: "ALL",
  Specific: "SPECIFIC",
} as const;
export type TimeSeriesGranularity =
  | (typeof TimeSeriesGranularity)[keyof typeof TimeSeriesGranularity]
  | (string & {});

export const timeSeriesGranularitySchema: EnumSchema<TimeSeriesGranularity> =
  s.enumOf<TimeSeriesGranularity>(TimeSeriesGranularity);
