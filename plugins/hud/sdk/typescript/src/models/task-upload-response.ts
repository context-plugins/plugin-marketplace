import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { taskUploadResultSchema, type TaskUploadResult } from "./task-upload-result.js";

export type TaskUploadResponse = {
  tasksetId: string;
  tasksetName: string;
  taskCount: number;
  /** One result per uploaded item, in order */
  tasks: TaskUploadResult[];
  tasksCreated: number;
  tasksUpdated: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const taskUploadResponseSchema: Schema<TaskUploadResponse> = s.object<TaskUploadResponse>(
  {
    tasksetId: s.string(),
    tasksetName: s.string(),
    taskCount: s.int(),
    tasks: s.array(s.lazy(() => taskUploadResultSchema)),
    tasksCreated: s.int(),
    tasksUpdated: s.int(),
    _keysMap: {
      tasksetId: "taskset_id",
      tasksetName: "taskset_name",
      taskCount: "task_count",
      tasksCreated: "tasks_created",
      tasksUpdated: "tasks_updated",
    },
  },
  { additionalProperties: s.json() },
);
