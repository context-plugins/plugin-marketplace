import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  entitiesDetectionJobFilterSchema,
  type EntitiesDetectionJobFilter,
} from "./entities-detection-job-filter.js";

export type ListEntitiesDetectionJobsRequest = {
  filter?: EntitiesDetectionJobFilter;
  /** Identifies the next page of results to return. */
  nextToken?: string;
  /** The maximum number of results to return in each page. The default is 100. */
  maxResults?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const listEntitiesDetectionJobsRequestSchema: Schema<ListEntitiesDetectionJobsRequest> =
  s.object<ListEntitiesDetectionJobsRequest>(
    {
      filter: s.optional(s.lazy(() => entitiesDetectionJobFilterSchema)),
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
