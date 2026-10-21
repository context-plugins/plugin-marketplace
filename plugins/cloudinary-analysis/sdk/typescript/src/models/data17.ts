import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { taskStatusSchema, type TaskStatus } from "./task-status.js";

export type Data17 = {
  taskId?: string;
  /** The status of an async task */
  status?: TaskStatus;
};

export const data17Schema: Schema<Data17> = s.object<Data17>({
  taskId: s.optional(s.string()),
  status: s.optional(s.lazy(() => taskStatusSchema)),
  _keysMap: {
    taskId: "task_id",
  },
});
