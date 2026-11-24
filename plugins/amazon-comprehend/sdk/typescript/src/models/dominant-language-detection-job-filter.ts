import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { jobStatus10Schema, type JobStatus10 } from "./job-status10.js";

export type DominantLanguageDetectionJobFilter = {
  /** Filters on the name of the job. */
  jobName?: string;
  /** Filters the list of jobs based on job status. Returns only jobs with the specified status. */
  jobStatus?: JobStatus10;
  /**
   * Filters the list of jobs based on the time that the job was submitted for processing. Returns
   * only jobs submitted before the specified time. Jobs are returned in ascending order, oldest to
   * newest.
   */
  submitTimeBefore?: Date;
  /**
   * Filters the list of jobs based on the time that the job was submitted for processing. Returns
   * only jobs submitted after the specified time. Jobs are returned in descending order, newest to
   * oldest.
   */
  submitTimeAfter?: Date;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const dominantLanguageDetectionJobFilterSchema: Schema<DominantLanguageDetectionJobFilter> =
  s.object<DominantLanguageDetectionJobFilter>(
    {
      jobName: s.optional(s.string()),
      jobStatus: s.optional(s.lazy(() => jobStatus10Schema)),
      submitTimeBefore: s.optional(s.dateTime()),
      submitTimeAfter: s.optional(s.dateTime()),
      _keysMap: {
        jobName: "JobName",
        jobStatus: "JobStatus",
        submitTimeBefore: "SubmitTimeBefore",
        submitTimeAfter: "SubmitTimeAfter",
      },
    },
    { additionalProperties: s.json() },
  );
