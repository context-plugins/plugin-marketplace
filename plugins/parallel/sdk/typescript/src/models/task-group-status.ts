import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { modifiedAtSchema, type ModifiedAt } from "./unions/modified-at.js";
import { statusMessageSchema, type StatusMessage } from "./unions/status-message.js";

/** Status of a task group. */
export type TaskGroupStatus = {
  /** Number of task runs in the group. */
  numTaskRuns: number;
  /** Number of task runs with each status. */
  taskRunStatusCounts: Record<string, number>;
  /**
   * True if at least one run in the group is currently active, i.e. status is one of {'cancelling',
   * 'queued', 'running'}.
   */
  isActive: boolean;
  /** Human-readable status message for the group. */
  statusMessage: StatusMessage;
  /** Timestamp of the last status update to the group, as an RFC 3339 string. */
  modifiedAt: ModifiedAt;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const taskGroupStatusSchema: Schema<TaskGroupStatus> = s.object<TaskGroupStatus>(
  {
    numTaskRuns: s.int(),
    taskRunStatusCounts: s.record(s.string(), s.int()),
    isActive: s.boolean(),
    statusMessage: statusMessageSchema,
    modifiedAt: modifiedAtSchema,
    _keysMap: {
      numTaskRuns: "num_task_runs",
      taskRunStatusCounts: "task_run_status_counts",
      isActive: "is_active",
      statusMessage: "status_message",
      modifiedAt: "modified_at",
    },
  },
  { additionalProperties: s.json() },
);
