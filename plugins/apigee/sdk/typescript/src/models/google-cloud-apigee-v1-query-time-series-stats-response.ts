import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  googleCloudApigeeV1QueryTimeSeriesStatsResponseSequenceSchema,
  type GoogleCloudApigeeV1QueryTimeSeriesStatsResponseSequence,
} from "./google-cloud-apigee-v1-query-time-series-stats-response-sequence.js";

/** Represents security stats result as a collection of time series sequences. */
export type GoogleCloudApigeeV1QueryTimeSeriesStatsResponse = {
  /** Column names corresponding to the same order as the inner values in the stats field. */
  columns?: string[];
  /** Results of the query returned as a JSON array. */
  values?: GoogleCloudApigeeV1QueryTimeSeriesStatsResponseSequence[];
  /** Next page token. */
  nextPageToken?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApigeeV1QueryTimeSeriesStatsResponseSchema: Schema<GoogleCloudApigeeV1QueryTimeSeriesStatsResponse> =
  s.object<GoogleCloudApigeeV1QueryTimeSeriesStatsResponse>(
    {
      columns: s.optional(s.array(s.string())),
      values: s.optional(
        s.array(s.lazy(() => googleCloudApigeeV1QueryTimeSeriesStatsResponseSequenceSchema)),
      ),
      nextPageToken: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
