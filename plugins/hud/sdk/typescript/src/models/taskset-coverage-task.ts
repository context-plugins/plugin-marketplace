import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { avgRewardSchema, type AvgReward } from "./unions/avg-reward.js";
import { taskVersionIdSchema, type TaskVersionId } from "./unions/task-version-id.js";

export type TasksetCoverageTask = {
  taskId: string;
  taskName: string;
  taskVersionId?: TaskVersionId;
  /** @default 0 */
  traceCount?: number;
  avgReward?: AvgReward;
  statuses?: string[];
  /** @default 0 */
  invalidatedCount?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const tasksetCoverageTaskSchema: Schema<TasksetCoverageTask> = s.object<TasksetCoverageTask>(
  {
    taskId: s.string(),
    taskName: s.string(),
    taskVersionId: s.optional(s.lazy(() => taskVersionIdSchema)),
    traceCount: s.defaulted(s.int(), 0),
    avgReward: s.optional(s.lazy(() => avgRewardSchema)),
    statuses: s.optional(s.array(s.string())),
    invalidatedCount: s.defaulted(s.int(), 0),
    _keysMap: {
      taskId: "task_id",
      taskName: "task_name",
      taskVersionId: "task_version_id",
      traceCount: "trace_count",
      avgReward: "avg_reward",
      invalidatedCount: "invalidated_count",
    },
  },
  { additionalProperties: s.json() },
);
