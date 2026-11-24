import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { applicationAttemptInfoSchema, type ApplicationAttemptInfo } from "./application-attempt-info.js";

/** Data related to Jobs page summary */
export type JobsSummary = {
  /** Number of failed jobs */
  failedJobs?: number;
  /** Spark Scheduling mode */
  schedulingMode?: string;
  /** Number of active jobs */
  activeJobs?: number;
  /** Number of completed jobs */
  completedJobs?: number;
  /** Attempts info */
  attempts?: ApplicationAttemptInfo[];
  /** Spark Application Id */
  applicationId?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const jobsSummarySchema: Schema<JobsSummary> = s.object<JobsSummary>(
  {
    failedJobs: s.optional(s.int()),
    schedulingMode: s.optional(s.string()),
    activeJobs: s.optional(s.int()),
    completedJobs: s.optional(s.int()),
    attempts: s.optional(s.array(s.lazy(() => applicationAttemptInfoSchema))),
    applicationId: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
