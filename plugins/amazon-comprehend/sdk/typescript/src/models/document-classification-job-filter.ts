import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { jobStatus9Schema, type JobStatus9 } from "./job-status9.js";

export type DocumentClassificationJobFilter = {
  /** Filters on the name of the job. */
  jobName?: string;
  /** Filters the list based on job status. Returns only jobs with the specified status. */
  jobStatus?: JobStatus9;
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

export const documentClassificationJobFilterSchema: Schema<DocumentClassificationJobFilter> =
  s.object<DocumentClassificationJobFilter>(
    {
      jobName: s.optional(s.string()),
      jobStatus: s.optional(s.lazy(() => jobStatus9Schema)),
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
