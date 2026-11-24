import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { codeConnectJobsApiSchema, type CodeConnectJobsApi } from "./code-connect-jobs-api.js";

/**
 * Result object containing a list of URLs or null. Otherwise if a step failed contains an error
 * response.
 */
export type JobsResult = {
  /** In case of failed job, displays error code. */
  code?: CodeConnectJobsApi;
  /** In case of failed job, displays details of the error. */
  details?: string;
  /** In case of failed job, displays error title. */
  title?: string;
  /** In case of success, Always "link". */
  type?: string;
  /** In case of success, URL of the updated (or created) resources. */
  url?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const jobsResultSchema: Schema<JobsResult> = s.object<JobsResult>(
  {
    code: s.optional(s.lazy(() => codeConnectJobsApiSchema)),
    details: s.optional(s.string()),
    title: s.optional(s.string()),
    type: s.optional(s.string()),
    url: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
