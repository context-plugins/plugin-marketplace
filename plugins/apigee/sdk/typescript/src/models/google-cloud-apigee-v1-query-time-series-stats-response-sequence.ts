import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** A sequence of time series. */
export type GoogleCloudApigeeV1QueryTimeSeriesStatsResponseSequence = {
  /** Map of dimensions and their values that uniquely identifies a time series sequence. */
  dimensions?: Record<string, string>;
  /** List of points. First value of each inner list is a timestamp. */
  points?: Record<string, unknown>[][];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApigeeV1QueryTimeSeriesStatsResponseSequenceSchema: Schema<GoogleCloudApigeeV1QueryTimeSeriesStatsResponseSequence> =
  s.object<GoogleCloudApigeeV1QueryTimeSeriesStatsResponseSequence>(
    {
      dimensions: s.optional(s.record(s.string(), s.string())),
      points: s.optional(s.array(s.array(s.record(s.string(), s.unknown())))),
    },
    { additionalProperties: s.json() },
  );
