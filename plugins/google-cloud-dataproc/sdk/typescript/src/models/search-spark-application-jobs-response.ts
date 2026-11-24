import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { jobDataSchema, type JobData } from "./job-data.js";

/** A list of Jobs associated with a Spark Application. */
export type SearchSparkApplicationJobsResponse = {
  /** Output only. Data corresponding to a spark job. */
  sparkApplicationJobs?: JobData[];
  /**
   * This token is included in the response if there are more results to fetch. To fetch additional
   * results, provide this value as the page_token in a subsequent
   * SearchSparkApplicationJobsRequest.
   */
  nextPageToken?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const searchSparkApplicationJobsResponseSchema: Schema<SearchSparkApplicationJobsResponse> =
  s.object<SearchSparkApplicationJobsResponse>(
    {
      sparkApplicationJobs: s.optional(s.array(s.lazy(() => jobDataSchema))),
      nextPageToken: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
