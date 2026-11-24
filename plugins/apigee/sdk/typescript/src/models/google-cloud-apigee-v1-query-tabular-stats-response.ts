import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/**
 * Encapsulates two kinds of stats that are results of the dimensions and aggregations requested. -
 * Tabular rows. - Time series data. Example of tabular rows, Represents security stats results as a
 * row of flat values.
 */
export type GoogleCloudApigeeV1QueryTabularStatsResponse = {
  /** Next page token. */
  nextPageToken?: string;
  /** Resultant rows from the executed query. */
  values?: Record<string, unknown>[][];
  /** Column names corresponding to the same order as the inner values in the stats field. */
  columns?: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApigeeV1QueryTabularStatsResponseSchema: Schema<GoogleCloudApigeeV1QueryTabularStatsResponse> =
  s.object<GoogleCloudApigeeV1QueryTabularStatsResponse>(
    {
      nextPageToken: s.optional(s.string()),
      values: s.optional(s.array(s.array(s.record(s.string(), s.unknown())))),
      columns: s.optional(s.array(s.string())),
    },
    { additionalProperties: s.json() },
  );
