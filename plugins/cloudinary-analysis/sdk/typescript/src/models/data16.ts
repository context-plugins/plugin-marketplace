import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { taskStatusSchema, type TaskStatus } from "./task-status.js";

export type Data16 = {
  taskId: string;
  /** The status of an async task */
  status: TaskStatus;
};

export const data16Schema: Schema<Data16> = s.object<Data16>({
  taskId: s.string(),
  status: taskStatusSchema,
  _keysMap: {
    taskId: "task_id",
  },
});
