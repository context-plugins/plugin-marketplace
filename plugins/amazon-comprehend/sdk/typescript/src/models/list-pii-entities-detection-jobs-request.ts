import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  piiEntitiesDetectionJobFilterSchema,
  type PiiEntitiesDetectionJobFilter,
} from "./pii-entities-detection-job-filter.js";

export type ListPiiEntitiesDetectionJobsRequest = {
  filter?: PiiEntitiesDetectionJobFilter;
  /** Identifies the next page of results to return. */
  nextToken?: string;
  /** The maximum number of results to return in each page. */
  maxResults?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const listPiiEntitiesDetectionJobsRequestSchema: Schema<ListPiiEntitiesDetectionJobsRequest> =
  s.object<ListPiiEntitiesDetectionJobsRequest>(
    {
      filter: s.optional(s.lazy(() => piiEntitiesDetectionJobFilterSchema)),
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
