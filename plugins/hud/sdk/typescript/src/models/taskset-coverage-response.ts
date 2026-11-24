import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { tasksetCoverageTaskSchema, type TasksetCoverageTask } from "./taskset-coverage-task.js";
import { tasksetIdSchema, type TasksetId } from "./unions/taskset-id.js";
import { tasksetNameSchema, type TasksetName } from "./unions/taskset-name.js";

export type TasksetCoverageResponse = {
  tasksetId?: TasksetId;
  tasksetName?: TasksetName;
  tasks?: TasksetCoverageTask[];
  /** @default 0 */
  totalTasks?: number;
  /** @default 0 */
  tasksWithTraces?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const tasksetCoverageResponseSchema: Schema<TasksetCoverageResponse> =
  s.object<TasksetCoverageResponse>(
    {
      tasksetId: s.optional(s.lazy(() => tasksetIdSchema)),
      tasksetName: s.optional(s.lazy(() => tasksetNameSchema)),
      tasks: s.optional(s.array(s.lazy(() => tasksetCoverageTaskSchema))),
      totalTasks: s.defaulted(s.int(), 0),
      tasksWithTraces: s.defaulted(s.int(), 0),
      _keysMap: {
        tasksetId: "taskset_id",
        tasksetName: "taskset_name",
        totalTasks: "total_tasks",
        tasksWithTraces: "tasks_with_traces",
      },
    },
    { additionalProperties: s.json() },
  );
