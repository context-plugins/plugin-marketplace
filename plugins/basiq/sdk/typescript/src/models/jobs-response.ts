import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { linksConnectJobsApiSchema, type LinksConnectJobsApi } from "./links-connect-jobs-api.js";
import { stepSchema, type Step } from "./step.js";

export type JobsResponse = {
  type?: string;
  id?: string;
  partnerId?: string;
  status?: string;
  jobType?: string;
  applicationId?: string;
  /** date and time in ISO format of when the job request was created */
  created?: Date;
  /** date and time in ISO format of when the job request was updated */
  updated?: Date;
  steps?: Step[];
  links?: LinksConnectJobsApi;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const jobsResponseSchema: Schema<JobsResponse> = s.object<JobsResponse>(
  {
    type: s.optional(s.string()),
    id: s.optional(s.string()),
    partnerId: s.optional(s.string()),
    status: s.optional(s.string()),
    jobType: s.optional(s.string()),
    applicationId: s.optional(s.string()),
    created: s.optional(s.dateTime()),
    updated: s.optional(s.dateTime()),
    steps: s.optional(s.array(s.lazy(() => stepSchema))),
    links: s.optional(s.lazy(() => linksConnectJobsApiSchema)),
  },
  { additionalProperties: s.json() },
);
