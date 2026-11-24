import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { status1Schema, type Status1 } from "./status1.js";

/** Data corresponding to a spark job. */
export type JobData = {
  numActiveStages?: number;
  numFailedStages?: number;
  submissionTime?: string;
  numFailedTasks?: number;
  status?: Status1;
  jobId?: string;
  numKilledTasks?: number;
  numTasks?: number;
  name?: string;
  completionTime?: string;
  numActiveTasks?: number;
  numSkippedTasks?: number;
  jobGroup?: string;
  sqlExecutionId?: string;
  stageIds?: string[];
  skippedStages?: number[];
  numCompletedStages?: number;
  numCompletedIndices?: number;
  numSkippedStages?: number;
  killTasksSummary?: Record<string, number>;
  description?: string;
  numCompletedTasks?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const jobDataSchema: Schema<JobData> = s.object<JobData>(
  {
    numActiveStages: s.optional(s.int()),
    numFailedStages: s.optional(s.int()),
    submissionTime: s.optional(s.string()),
    numFailedTasks: s.optional(s.int()),
    status: s.optional(s.lazy(() => status1Schema)),
    jobId: s.optional(s.string()),
    numKilledTasks: s.optional(s.int()),
    numTasks: s.optional(s.int()),
    name: s.optional(s.string()),
    completionTime: s.optional(s.string()),
    numActiveTasks: s.optional(s.int()),
    numSkippedTasks: s.optional(s.int()),
    jobGroup: s.optional(s.string()),
    sqlExecutionId: s.optional(s.string()),
    stageIds: s.optional(s.array(s.string())),
    skippedStages: s.optional(s.array(s.int())),
    numCompletedStages: s.optional(s.int()),
    numCompletedIndices: s.optional(s.int()),
    numSkippedStages: s.optional(s.int()),
    killTasksSummary: s.optional(s.record(s.string(), s.int())),
    description: s.optional(s.string()),
    numCompletedTasks: s.optional(s.int()),
  },
  { additionalProperties: s.json() },
);
