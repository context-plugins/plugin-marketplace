import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  tasksetExportTaskInternalSchema,
  tasksetExportTaskSchema,
  type TasksetExportTask,
} from "./taskset-export-task.js";

/** A taskset with its tasks in the task wire format (mirrors the upload shape). */
export type TasksetExportResponse = {
  tasksetId: string;
  name: string;
  tasks: TasksetExportTask[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const tasksetExportResponseProperties: s.Shape<TasksetExportResponse> = {
  tasksetId: s.string(),
  name: s.string(),
  tasks: s.array(s.lazy(() => tasksetExportTaskInternalSchema)),
  _keysMap: {
    tasksetId: "taskset_id",
  },
};

export const tasksetExportResponseInternalSchema: Schema<TasksetExportResponse> =
  s.object<TasksetExportResponse>(tasksetExportResponseProperties, { additionalProperties: s.json() });

export const tasksetExportResponseSchema: Schema<TasksetExportResponse> = s.lazySchema(() =>
  s.object<TasksetExportResponse>(
    {
      ...tasksetExportResponseProperties,
      tasks: s.array(s.lazy(() => tasksetExportTaskSchema)),
    },
    { additionalProperties: s.json() },
  ),
);
