import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type TimeSeriesServiceStatisticsRequest = {
  /** The start of the time frame for which to aggregate statistics. */
  startTime: Date;
  /** The end of the time frame for which to aggregate statistics. */
  endTime: Date;
  /** The case-sensitive name of the group for which to pull statistics from. */
  groupName?: string;
  /** The Amazon Resource Name (ARN) of the group for which to pull statistics from. */
  groupArn?: string;
  /**
   * A filter expression defining entities that will be aggregated for statistics. Supports ID,
   * service, and edge functions. If no selector expression is specified, edge statistics are
   * returned.
   */
  entitySelectorExpression?: string;
  /** Aggregation period in seconds. */
  period?: number;
  /**
   * The forecasted high and low fault count values. Forecast enabled requests require the
   * EntitySelectorExpression ID be provided.
   */
  forecastStatistics?: boolean;
  /** Pagination token. */
  nextToken?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const timeSeriesServiceStatisticsRequestSchema: Schema<TimeSeriesServiceStatisticsRequest> =
  s.object<TimeSeriesServiceStatisticsRequest>(
    {
      startTime: s.dateTime(),
      endTime: s.dateTime(),
      groupName: s.optional(s.string()),
      groupArn: s.optional(s.string()),
      entitySelectorExpression: s.optional(s.string()),
      period: s.optional(s.int()),
      forecastStatistics: s.optional(s.boolean()),
      nextToken: s.optional(s.string()),
      _keysMap: {
        startTime: "StartTime",
        endTime: "EndTime",
        groupName: "GroupName",
        groupArn: "GroupARN",
        entitySelectorExpression: "EntitySelectorExpression",
        period: "Period",
        forecastStatistics: "ForecastStatistics",
        nextToken: "NextToken",
      },
    },
    { additionalProperties: s.json() },
  );
