import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { links2ConnectJobsApiSchema, type Links2ConnectJobsApi } from "./links2-connect-jobs-api.js";
import { step2Schema, type Step2 } from "./step2.js";

export type JobsResponse2 = {
  type?: string;
  id?: string;
  partnerId?: string;
  applicationId?: string;
  created?: string;
  updated?: string;
  status?: string;
  jobType?: string;
  steps?: Step2[];
  links?: Links2ConnectJobsApi;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const jobsResponse2Schema: Schema<JobsResponse2> = s.object<JobsResponse2>(
  {
    type: s.optional(s.string()),
    id: s.optional(s.string()),
    partnerId: s.optional(s.string()),
    applicationId: s.optional(s.string()),
    created: s.optional(s.string()),
    updated: s.optional(s.string()),
    status: s.optional(s.string()),
    jobType: s.optional(s.string()),
    steps: s.optional(s.array(s.lazy(() => step2Schema))),
    links: s.optional(s.lazy(() => links2ConnectJobsApiSchema)),
  },
  { additionalProperties: s.json() },
);
