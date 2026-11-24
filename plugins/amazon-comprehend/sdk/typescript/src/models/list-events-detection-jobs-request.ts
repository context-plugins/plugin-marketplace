import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  eventsDetectionJobFilterSchema,
  type EventsDetectionJobFilter,
} from "./events-detection-job-filter.js";

export type ListEventsDetectionJobsRequest = {
  filter?: EventsDetectionJobFilter;
  /** Identifies the next page of results to return. */
  nextToken?: string;
  /** The maximum number of results to return in each page. */
  maxResults?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const listEventsDetectionJobsRequestSchema: Schema<ListEventsDetectionJobsRequest> =
  s.object<ListEventsDetectionJobsRequest>(
    {
      filter: s.optional(s.lazy(() => eventsDetectionJobFilterSchema)),
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
