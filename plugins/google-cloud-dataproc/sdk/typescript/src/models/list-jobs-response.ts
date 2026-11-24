import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { jobSchema, type Job } from "./job.js";

/** A list of jobs in a project. */
export type ListJobsResponse = {
  /**
   * Optional. This token is included in the response if there are more results to fetch. To fetch
   * additional results, provide this value as the page_token in a subsequent ListJobsRequest.
   */
  nextPageToken?: string;
  /**
   * Output only. List of jobs with kms_key-encrypted parameters that could not be decrypted. A
   * response to a jobs.get request may indicate the reason for the decryption failure for a
   * specific job.
   */
  unreachable?: string[];
  /** Output only. Jobs list. */
  jobs?: Job[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const listJobsResponseSchema: Schema<ListJobsResponse> = s.object<ListJobsResponse>(
  {
    nextPageToken: s.optional(s.string()),
    unreachable: s.optional(s.array(s.string())),
    jobs: s.optional(s.array(s.lazy(() => jobSchema))),
  },
  { additionalProperties: s.json() },
);
