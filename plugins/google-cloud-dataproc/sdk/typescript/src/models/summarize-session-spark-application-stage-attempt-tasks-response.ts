import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  stageAttemptTasksSummary2Schema,
  type StageAttemptTasksSummary2,
} from "./stage-attempt-tasks-summary2.js";

/** Summary of tasks for a Spark Application stage attempt. */
export type SummarizeSessionSparkApplicationStageAttemptTasksResponse = {
  /** Summary of tasks for a Spark Application Stage Attempt */
  stageAttemptTasksSummary?: StageAttemptTasksSummary2;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const summarizeSessionSparkApplicationStageAttemptTasksResponseSchema: Schema<SummarizeSessionSparkApplicationStageAttemptTasksResponse> =
  s.object<SummarizeSessionSparkApplicationStageAttemptTasksResponse>(
    {
      stageAttemptTasksSummary: s.optional(s.lazy(() => stageAttemptTasksSummary2Schema)),
    },
    { additionalProperties: s.json() },
  );
