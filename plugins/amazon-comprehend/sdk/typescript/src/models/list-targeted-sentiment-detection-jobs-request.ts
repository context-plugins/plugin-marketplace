import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  targetedSentimentDetectionJobFilterSchema,
  type TargetedSentimentDetectionJobFilter,
} from "./targeted-sentiment-detection-job-filter.js";

export type ListTargetedSentimentDetectionJobsRequest = {
  filter?: TargetedSentimentDetectionJobFilter;
  /** Identifies the next page of results to return. */
  nextToken?: string;
  /** The maximum number of results to return in each page. The default is 100. */
  maxResults?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const listTargetedSentimentDetectionJobsRequestSchema: Schema<ListTargetedSentimentDetectionJobsRequest> =
  s.object<ListTargetedSentimentDetectionJobsRequest>(
    {
      filter: s.optional(s.lazy(() => targetedSentimentDetectionJobFilterSchema)),
      nextToken: s.optional(s.string()),
      maxResults: s.optional(s.int()),
      _keysMap: {
        filter: "Filter",
        nextToken: "NextToken",
        maxResults: "MaxResults",
      },
    },
    { additionalProperties: s.json() },
  );
