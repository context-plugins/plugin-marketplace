import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { jobsResultSchema, type JobsResult } from "./jobs-result.js";
import { statusConnectJobsApiSchema, type StatusConnectJobsApi } from "./status-connect-jobs-api.js";
import { titleSchema, type Title } from "./title.js";

/** List of steps that need to be completed. */
export type JobsStep = {
  /** Name of the step the job needs to complete. */
  title?: Title;
  /** Status of the job step */
  status: StatusConnectJobsApi;
  /**
   * Result object containing a list of URLs or null. Otherwise if a step failed contains an error
   * response.
   */
  result: JobsResult;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const jobsStepSchema: Schema<JobsStep> = s.object<JobsStep>(
  {
    title: s.optional(s.lazy(() => titleSchema)),
    status: statusConnectJobsApiSchema,
    result: jobsResultSchema,
  },
  { additionalProperties: s.json() },
);
