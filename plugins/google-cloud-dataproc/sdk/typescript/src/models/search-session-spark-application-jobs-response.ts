import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { jobDataSchema, type JobData } from "./job-data.js";

/** A list of Jobs associated with a Spark Application. */
export type SearchSessionSparkApplicationJobsResponse = {
  /**
   * This token is included in the response if there are more results to fetch. To fetch additional
   * results, provide this value as the page_token in a subsequent
   * SearchSessionSparkApplicationJobsRequest.
   */
  nextPageToken?: string;
  /** Output only. Data corresponding to a spark job. */
  sparkApplicationJobs?: JobData[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const searchSessionSparkApplicationJobsResponseSchema: Schema<SearchSessionSparkApplicationJobsResponse> =
  s.object<SearchSessionSparkApplicationJobsResponse>(
    {
      nextPageToken: s.optional(s.string()),
      sparkApplicationJobs: s.optional(s.array(s.lazy(() => jobDataSchema))),
    },
    { additionalProperties: s.json() },
  );
