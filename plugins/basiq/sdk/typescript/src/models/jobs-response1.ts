import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { linksConnectJobsApiSchema, type LinksConnectJobsApi } from "./links-connect-jobs-api.js";
import { step1Schema, type Step1 } from "./step1.js";

export type JobsResponse1 = {
  type?: string;
  id?: string;
  /** date and time in ISO format of when the job request was created */
  createdDate?: Date;
  /** date and time in ISO format of when the job request was updated */
  updatedDate?: Date;
  jobType?: string;
  sourceId?: string;
  steps?: Step1[];
  links?: LinksConnectJobsApi;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const jobsResponse1Schema: Schema<JobsResponse1> = s.object<JobsResponse1>(
  {
    type: s.optional(s.string()),
    id: s.optional(s.string()),
    createdDate: s.optional(s.dateTime()),
    updatedDate: s.optional(s.dateTime()),
    jobType: s.optional(s.string()),
    sourceId: s.optional(s.string()),
    steps: s.optional(s.array(s.lazy(() => step1Schema))),
    links: s.optional(s.lazy(() => linksConnectJobsApiSchema)),
  },
  { additionalProperties: s.json() },
);
