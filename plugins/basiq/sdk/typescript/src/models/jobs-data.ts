import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  institutionConnectJobsApiSchema,
  type InstitutionConnectJobsApi,
} from "./institution-connect-jobs-api.js";
import { jobsLinksSchema, type JobsLinks } from "./jobs-links.js";
import { jobsStepSchema, type JobsStep } from "./jobs-step.js";

/** Container object, containing job details. */
export type JobsData = {
  /** Value is "job". */
  type?: string;
  /** A string that uniquely identifies the job. */
  id: string;
  /** The date time when the job was created. */
  created: string;
  /** The date time when the job was last updated. */
  updated: string;
  /** Institution details. */
  institution: InstitutionConnectJobsApi;
  /** List of steps that need to be completed. */
  steps: JobsStep[];
  /** Links to the resources. */
  links?: JobsLinks;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const jobsDataSchema: Schema<JobsData> = s.object<JobsData>(
  {
    type: s.optional(s.string()),
    id: s.string(),
    created: s.string(),
    updated: s.string(),
    institution: institutionConnectJobsApiSchema,
    steps: s.array(s.lazy(() => jobsStepSchema)),
    links: s.optional(s.lazy(() => jobsLinksSchema)),
  },
  { additionalProperties: s.json() },
);
