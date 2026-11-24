import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { jobSchema, type Job } from "./job.js";
import { responseMetadata1Schema, type ResponseMetadata1 } from "./response-metadata1.js";

/** List jobs response. */
export type ListJobsResponse = {
  /** Additional information for the API invocation, such as the request tracking id. */
  metadata?: ResponseMetadata1;
  /**
   * The Jobs for a given company. The maximum number of items returned is based on the limit field
   * provided in the request.
   */
  jobs?: Job[];
  /** A token to retrieve the next page of results. */
  nextPageToken?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const listJobsResponseSchema: Schema<ListJobsResponse> = s.object<ListJobsResponse>(
  {
    metadata: s.optional(s.lazy(() => responseMetadata1Schema)),
    jobs: s.optional(s.array(s.lazy(() => jobSchema))),
    nextPageToken: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
