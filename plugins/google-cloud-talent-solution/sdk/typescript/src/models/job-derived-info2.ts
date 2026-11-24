import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { jobCategorySchema, type JobCategory } from "./job-category.js";
import { locationSchema, type Location } from "./location.js";

/** Output only. Derived details about the job posting. */
export type JobDerivedInfo2 = {
  /** Job categories derived from Job.title and Job.description. */
  jobCategories?: JobCategory[];
  /**
   * Structured locations of the job, resolved from Job.addresses. locations are exactly matched to
   * Job.addresses in the same order.
   */
  locations?: Location[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const jobDerivedInfo2Schema: Schema<JobDerivedInfo2> = s.object<JobDerivedInfo2>(
  {
    jobCategories: s.optional(s.array(s.lazy(() => jobCategorySchema))),
    locations: s.optional(s.array(s.lazy(() => locationSchema))),
  },
  { additionalProperties: s.json() },
);
