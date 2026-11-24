import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Summary of tasks for a Spark Application Stage Attempt */
export type StageAttemptTasksSummary2 = {
  numRunningTasks?: number;
  numPendingTasks?: number;
  numFailedTasks?: number;
  numKilledTasks?: number;
  numTasks?: number;
  applicationId?: string;
  stageId?: string;
  stageAttemptId?: number;
  numSuccessTasks?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const stageAttemptTasksSummary2Schema: Schema<StageAttemptTasksSummary2> =
  s.object<StageAttemptTasksSummary2>(
    {
      numRunningTasks: s.optional(s.int()),
      numPendingTasks: s.optional(s.int()),
      numFailedTasks: s.optional(s.int()),
      numKilledTasks: s.optional(s.int()),
      numTasks: s.optional(s.int()),
      applicationId: s.optional(s.string()),
      stageId: s.optional(s.string()),
      stageAttemptId: s.optional(s.int()),
      numSuccessTasks: s.optional(s.int()),
    },
    { additionalProperties: s.json() },
  );
