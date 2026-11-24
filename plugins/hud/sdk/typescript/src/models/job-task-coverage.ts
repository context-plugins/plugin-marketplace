import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { avgRewardSchema, type AvgReward } from "./unions/avg-reward.js";

export type JobTaskCoverage = {
  taskId: string;
  taskName: string;
  traceCount: number;
  avgReward?: AvgReward;
  statuses?: string[];
  /** @default 0 */
  invalidatedCount?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const jobTaskCoverageSchema: Schema<JobTaskCoverage> = s.object<JobTaskCoverage>(
  {
    taskId: s.string(),
    taskName: s.string(),
    traceCount: s.int(),
    avgReward: s.optional(s.lazy(() => avgRewardSchema)),
    statuses: s.optional(s.array(s.string())),
    invalidatedCount: s.defaulted(s.int(), 0),
    _keysMap: {
      taskId: "task_id",
      taskName: "task_name",
      traceCount: "trace_count",
      avgReward: "avg_reward",
      invalidatedCount: "invalidated_count",
    },
  },
  { additionalProperties: s.json() },
);
