import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ListMediaAnalysisJobsRequest = {
  /** Pagination token, if the previous response was incomplete. */
  nextToken?: string;
  /**
   * The maximum number of results to return per paginated call. The largest value user can specify
   * is 100. If user specifies a value greater than 100, an InvalidParameterException error occurs.
   * The default value is 100.
   */
  maxResults?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const listMediaAnalysisJobsRequestSchema: Schema<ListMediaAnalysisJobsRequest> =
  s.object<ListMediaAnalysisJobsRequest>(
    {
      nextToken: s.optional(s.string()),
      maxResults: s.optional(s.int()),
      _keysMap: {
        nextToken: "NextToken",
        maxResults: "MaxResults",
      },
    },
    { additionalProperties: s.json() },
  );
