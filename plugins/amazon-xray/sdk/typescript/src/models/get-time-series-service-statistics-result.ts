import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  timeSeriesServiceStatisticsSchema,
  type TimeSeriesServiceStatistics,
} from "./time-series-service-statistics.js";

export type GetTimeSeriesServiceStatisticsResult = {
  /** The collection of statistics. */
  timeSeriesServiceStatistics?: TimeSeriesServiceStatistics[];
  /**
   * A flag indicating whether or not a group's filter expression has been consistent, or if a
   * returned aggregation might show statistics from an older version of the group's filter
   * expression.
   */
  containsOldGroupVersions?: boolean;
  /** Pagination token. */
  nextToken?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const getTimeSeriesServiceStatisticsResultSchema: Schema<GetTimeSeriesServiceStatisticsResult> =
  s.object<GetTimeSeriesServiceStatisticsResult>(
    {
      timeSeriesServiceStatistics: s.optional(s.array(s.lazy(() => timeSeriesServiceStatisticsSchema))),
      containsOldGroupVersions: s.optional(s.boolean()),
      nextToken: s.optional(s.string()),
      _keysMap: {
        timeSeriesServiceStatistics: "TimeSeriesServiceStatistics",
        containsOldGroupVersions: "ContainsOldGroupVersions",
        nextToken: "NextToken",
      },
    },
    { additionalProperties: s.json() },
  );
