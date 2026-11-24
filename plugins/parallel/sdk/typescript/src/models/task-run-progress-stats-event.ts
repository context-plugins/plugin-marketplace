import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { taskRunSourceStats2Schema, type TaskRunSourceStats2 } from "./task-run-source-stats2.js";

/** A progress update for a task run. */
export type TaskRunProgressStatsEvent = {
  /** Event type; always 'task_run.progress_stats'. @default "task_run.progress_stats" */
  type?: "task_run.progress_stats";
  /** Source stats describing progress so far. */
  sourceStats: TaskRunSourceStats2;
  /**
   * Completion percentage of the task run. Ranges from 0 to 100 where 0 indicates no progress and
   * 100 indicates completion.
   */
  progressMeter: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const taskRunProgressStatsEventSchema: Schema<TaskRunProgressStatsEvent> =
  s.object<TaskRunProgressStatsEvent>(
    {
      type: s.defaulted(s.literal("task_run.progress_stats"), "task_run.progress_stats"),
      sourceStats: taskRunSourceStats2Schema,
      progressMeter: s.float64(),
      _keysMap: {
        sourceStats: "source_stats",
        progressMeter: "progress_meter",
      },
    },
    { additionalProperties: s.json() },
  );
