import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const TaskStatus = {
  TaskStatusUnspecified: "TASK_STATUS_UNSPECIFIED",
  TaskStatusRunning: "TASK_STATUS_RUNNING",
  TaskStatusSuccess: "TASK_STATUS_SUCCESS",
  TaskStatusFailed: "TASK_STATUS_FAILED",
  TaskStatusKilled: "TASK_STATUS_KILLED",
  TaskStatusPending: "TASK_STATUS_PENDING",
} as const;
export type TaskStatus = (typeof TaskStatus)[keyof typeof TaskStatus] | (string & {});

export const taskStatusSchema: EnumSchema<TaskStatus> = s.enumOf<TaskStatus>(TaskStatus);
