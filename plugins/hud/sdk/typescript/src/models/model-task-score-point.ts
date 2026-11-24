import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ModelTaskScorePoint = {
  taskId: string;
  avgReward: number;
  traceCount: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const modelTaskScorePointSchema: Schema<ModelTaskScorePoint> = s.object<ModelTaskScorePoint>(
  {
    taskId: s.string(),
    avgReward: s.float64(),
    traceCount: s.int(),
    _keysMap: {
      taskId: "task_id",
      avgReward: "avg_reward",
      traceCount: "trace_count",
    },
  },
  { additionalProperties: s.json() },
);
