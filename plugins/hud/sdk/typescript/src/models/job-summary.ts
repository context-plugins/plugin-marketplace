import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { avgRewardSchema, type AvgReward } from "./unions/avg-reward.js";

export type JobSummary = {
  jobId: string;
  /** @default 0 */
  totalTraces?: number;
  /** @default 0 */
  totalTasks?: number;
  /** @default 0 */
  completed?: number;
  /** @default 0 */
  running?: number;
  /** @default 0 */
  pending?: number;
  /** @default 0 */
  initializing?: number;
  /** @default 0 */
  cancelling?: number;
  /** @default 0 */
  error?: number;
  /** @default 0 */
  cancelled?: number;
  avgReward?: AvgReward;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const jobSummarySchema: Schema<JobSummary> = s.object<JobSummary>(
  {
    jobId: s.string(),
    totalTraces: s.defaulted(s.int(), 0),
    totalTasks: s.defaulted(s.int(), 0),
    completed: s.defaulted(s.int(), 0),
    running: s.defaulted(s.int(), 0),
    pending: s.defaulted(s.int(), 0),
    initializing: s.defaulted(s.int(), 0),
    cancelling: s.defaulted(s.int(), 0),
    error: s.defaulted(s.int(), 0),
    cancelled: s.defaulted(s.int(), 0),
    avgReward: s.optional(s.lazy(() => avgRewardSchema)),
    _keysMap: {
      jobId: "job_id",
      totalTraces: "total_traces",
      totalTasks: "total_tasks",
      avgReward: "avg_reward",
    },
  },
  { additionalProperties: s.json() },
);
