import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { callAnalyticsJobSummarySchema, type CallAnalyticsJobSummary } from "./call-analytics-job-summary.js";
import { status1Schema, type Status1 } from "./status1.js";

export type ListCallAnalyticsJobsResponse = {
  /**
   * Lists all Call Analytics jobs that have the status specified in your request. Jobs are ordered
   * by creation date, with the newest job first.
   */
  status?: Status1;
  /**
   * If NextToken is present in your response, it indicates that not all results are displayed. To
   * view the next set of results, copy the string associated with the NextToken parameter in your
   * results output, then run your request again including NextToken with the value of the copied
   * string. Repeat as needed to view all your results.
   */
  nextToken?: string;
  /** Provides a summary of information about each result. */
  callAnalyticsJobSummaries?: CallAnalyticsJobSummary[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const listCallAnalyticsJobsResponseSchema: Schema<ListCallAnalyticsJobsResponse> =
  s.object<ListCallAnalyticsJobsResponse>(
    {
      status: s.optional(s.lazy(() => status1Schema)),
      nextToken: s.optional(s.string()),
      callAnalyticsJobSummaries: s.optional(s.array(s.lazy(() => callAnalyticsJobSummarySchema))),
      _keysMap: {
        status: "Status",
        nextToken: "NextToken",
        callAnalyticsJobSummaries: "CallAnalyticsJobSummaries",
      },
    },
    { additionalProperties: s.json() },
  );
