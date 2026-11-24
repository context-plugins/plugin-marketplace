import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { jobStatus17Schema, type JobStatus17 } from "./job-status17.js";

export type TopicsDetectionJobFilter = {
  jobName?: string;
  /**
   * Filters the list of topic detection jobs based on job status. Returns only jobs with the
   * specified status.
   */
  jobStatus?: JobStatus17;
  /**
   * Filters the list of jobs based on the time that the job was submitted for processing. Only
   * returns jobs submitted before the specified time. Jobs are returned in descending order, newest
   * to oldest.
   */
  submitTimeBefore?: Date;
  /**
   * Filters the list of jobs based on the time that the job was submitted for processing. Only
   * returns jobs submitted after the specified time. Jobs are returned in ascending order, oldest
   * to newest.
   */
  submitTimeAfter?: Date;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const topicsDetectionJobFilterSchema: Schema<TopicsDetectionJobFilter> =
  s.object<TopicsDetectionJobFilter>(
    {
      jobName: s.optional(s.string()),
      jobStatus: s.optional(s.lazy(() => jobStatus17Schema)),
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
