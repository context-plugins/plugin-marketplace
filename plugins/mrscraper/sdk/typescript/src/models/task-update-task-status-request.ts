import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { taskTaskStatusSchema, type TaskTaskStatus } from "./task-task-status.js";

export type TaskUpdateTaskStatusRequest = {
  result?: string;
  solution?: string;
  status?: TaskTaskStatus;
  taskDetails?: Record<string, unknown>;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const taskUpdateTaskStatusRequestSchema: Schema<TaskUpdateTaskStatusRequest> =
  s.object<TaskUpdateTaskStatusRequest>(
    {
      result: s.optional(s.string()),
      solution: s.optional(s.string()),
      status: s.optional(s.lazy(() => taskTaskStatusSchema)),
      taskDetails: s.optional(s.record(s.string(), s.unknown())),
    },
    { additionalProperties: s.json() },
  );
