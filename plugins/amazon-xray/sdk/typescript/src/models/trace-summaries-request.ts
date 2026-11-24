import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { samplingStrategySchema, type SamplingStrategy } from "./sampling-strategy.js";
import { timeRangeTypeSchema, type TimeRangeType } from "./time-range-type.js";

export type TraceSummariesRequest = {
  /** The start of the time frame for which to retrieve traces. */
  startTime: Date;
  /** The end of the time frame for which to retrieve traces. */
  endTime: Date;
  /**
   * Query trace summaries by TraceId (trace start time), Event (trace update time), or Service
   * (trace segment end time).
   */
  timeRangeType?: TimeRangeType;
  /** Set to true to get summaries for only a subset of available traces. */
  sampling?: boolean;
  samplingStrategy?: SamplingStrategy;
  /**
   * Specify a filter expression to retrieve trace summaries for services or requests that meet
   * certain requirements.
   */
  filterExpression?: string;
  /**
   * Specify the pagination token returned by a previous request to retrieve the next page of
   * results.
   */
  nextToken?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const traceSummariesRequestSchema: Schema<TraceSummariesRequest> = s.object<TraceSummariesRequest>(
  {
    startTime: s.dateTime(),
    endTime: s.dateTime(),
    timeRangeType: s.optional(s.lazy(() => timeRangeTypeSchema)),
    sampling: s.optional(s.boolean()),
    samplingStrategy: s.optional(s.lazy(() => samplingStrategySchema)),
    filterExpression: s.optional(s.string()),
    nextToken: s.optional(s.string()),
    _keysMap: {
      startTime: "StartTime",
      endTime: "EndTime",
      timeRangeType: "TimeRangeType",
      sampling: "Sampling",
      samplingStrategy: "SamplingStrategy",
      filterExpression: "FilterExpression",
      nextToken: "NextToken",
    },
  },
  { additionalProperties: s.json() },
);
