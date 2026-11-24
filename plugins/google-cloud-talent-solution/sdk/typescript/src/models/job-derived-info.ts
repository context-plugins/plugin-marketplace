import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { jobCategorySchema, type JobCategory } from "./job-category.js";
import { locationSchema, type Location } from "./location.js";

/** Derived details about the job posting. */
export type JobDerivedInfo = {
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

export const jobDerivedInfoSchema: Schema<JobDerivedInfo> = s.object<JobDerivedInfo>(
  {
    jobCategories: s.optional(s.array(s.lazy(() => jobCategorySchema))),
    locations: s.optional(s.array(s.lazy(() => locationSchema))),
  },
  { additionalProperties: s.json() },
);
