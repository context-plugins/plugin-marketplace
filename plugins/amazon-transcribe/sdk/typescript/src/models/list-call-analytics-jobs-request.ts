import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { statusSchema, type Status } from "./status.js";

export type ListCallAnalyticsJobsRequest = {
  /**
   * Returns only Call Analytics jobs with the specified status. Jobs are ordered by creation date,
   * with the newest job first. If you do not include Status, all Call Analytics jobs are returned.
   */
  status?: Status;
  /**
   * Returns only the Call Analytics jobs that contain the specified string. The search is not case
   * sensitive.
   */
  jobNameContains?: string;
  /**
   * If your ListCallAnalyticsJobs request returns more results than can be displayed, NextToken is
   * displayed in the response with an associated string. To get the next page of results, copy this
   * string and repeat your request, including NextToken with the value of the copied string. Repeat
   * as needed to view all your results.
   */
  nextToken?: string;
  /**
   * The maximum number of Call Analytics jobs to return in each page of results. If there are fewer
   * results than the value that you specify, only the actual results are returned. If you do not
   * specify a value, a default of 5 is used.
   */
  maxResults?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const listCallAnalyticsJobsRequestSchema: Schema<ListCallAnalyticsJobsRequest> =
  s.object<ListCallAnalyticsJobsRequest>(
    {
      status: s.optional(s.lazy(() => statusSchema)),
      jobNameContains: s.optional(s.string()),
      nextToken: s.optional(s.string()),
      maxResults: s.optional(s.int()),
      _keysMap: {
        status: "Status",
        jobNameContains: "JobNameContains",
        nextToken: "NextToken",
        maxResults: "MaxResults",
      },
    },
    { additionalProperties: s.json() },
  );
