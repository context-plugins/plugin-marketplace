import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { createdAtSchema, type CreatedAt } from "./unions/created-at.js";
import { endTimeSchema, type EndTime } from "./unions/end-time.js";
import { rewardSchema, type Reward } from "./unions/reward.js";
import { taskVersionIdSchema, type TaskVersionId } from "./unions/task-version-id.js";

export type JobChartDataPoint = {
  id: string;
  reward?: Reward;
  status: string;
  /** @default true */
  isValid?: boolean;
  createdAt?: CreatedAt;
  endTime?: EndTime;
  taskVersionId?: TaskVersionId;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const jobChartDataPointSchema: Schema<JobChartDataPoint> = s.object<JobChartDataPoint>(
  {
    id: s.string(),
    reward: s.optional(s.lazy(() => rewardSchema)),
    status: s.string(),
    isValid: s.defaulted(s.boolean(), true),
    createdAt: s.optional(s.lazy(() => createdAtSchema)),
    endTime: s.optional(s.lazy(() => endTimeSchema)),
    taskVersionId: s.optional(s.lazy(() => taskVersionIdSchema)),
    _keysMap: {
      isValid: "is_valid",
      createdAt: "created_at",
      endTime: "end_time",
      taskVersionId: "task_version_id",
    },
  },
  { additionalProperties: s.json() },
);
