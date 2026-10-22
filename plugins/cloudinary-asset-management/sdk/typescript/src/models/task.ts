import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { generatedAssetsSchema, type GeneratedAssets } from "./generated-assets.js";
import { limitsSchema, type Limits } from "./limits.js";
import { taskStatusSchema, type TaskStatus } from "./task-status.js";

/**
 * An async generation task. Returned when a generation is accepted (202) and from GET
 * /tasks/{task_id} as it progresses. The `result` is filled in once `status` is `completed`.
 */
export type Task = {
  /**
   * Identifier for the async generation task. Use it to poll `GET
   * /generate/{cloud_name}/tasks/{task_id}`.
   */
  taskId: string;
  /**
   * The status of an async generation task.
   * * `pending`: accepted and queued, not yet started.
   * * `processing`: generation is in progress.
   * * `completed`: generation finished; `result` is populated.
   * * `failed`: generation did not complete successfully.
   */
  status: TaskStatus;
  /** The generated assets. Populated once `status` is `completed`. */
  result?: GeneratedAssets | null;
  /** Rate limit information for the account's add-on quotas. */
  limits?: Limits;
};

export const taskSchema: Schema<Task> = s.object<Task>({
  taskId: s.string(),
  status: taskStatusSchema,
  result: s.optionalNullable(s.lazy(() => generatedAssetsSchema)),
  limits: s.optional(s.lazy(() => limitsSchema)),
  _keysMap: {
    taskId: "task_id",
  },
});
