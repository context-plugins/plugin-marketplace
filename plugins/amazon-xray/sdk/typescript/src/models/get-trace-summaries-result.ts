import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { traceSummarySchema, type TraceSummary } from "./trace-summary.js";

export type GetTraceSummariesResult = {
  /** Trace IDs and annotations for traces that were found in the specified time frame. */
  traceSummaries?: TraceSummary[];
  /** The start time of this page of results. */
  approximateTime?: Date;
  /**
   * The total number of traces processed, including traces that did not match the specified filter
   * expression.
   */
  tracesProcessedCount?: number;
  /**
   * If the requested time frame contained more than one page of results, you can use this token to
   * retrieve the next page. The first page contains the most recent results, closest to the end of
   * the time frame.
   */
  nextToken?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const getTraceSummariesResultSchema: Schema<GetTraceSummariesResult> =
  s.object<GetTraceSummariesResult>(
    {
      traceSummaries: s.optional(s.array(s.lazy(() => traceSummarySchema))),
      approximateTime: s.optional(s.dateTime()),
      tracesProcessedCount: s.optional(s.int()),
      nextToken: s.optional(s.string()),
      _keysMap: {
        traceSummaries: "TraceSummaries",
        approximateTime: "ApproximateTime",
        tracesProcessedCount: "TracesProcessedCount",
        nextToken: "NextToken",
      },
    },
    { additionalProperties: s.json() },
  );
