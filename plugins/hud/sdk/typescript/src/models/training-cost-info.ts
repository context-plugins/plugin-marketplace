import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type TrainingCostInfo = {
  totalCost: number;
  hourlyRate: number;
  runtimeSeconds: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const trainingCostInfoSchema: Schema<TrainingCostInfo> = s.object<TrainingCostInfo>(
  {
    totalCost: s.float64(),
    hourlyRate: s.float64(),
    runtimeSeconds: s.float64(),
    _keysMap: {
      totalCost: "total_cost",
      hourlyRate: "hourly_rate",
      runtimeSeconds: "runtime_seconds",
    },
  },
  { additionalProperties: s.json() },
);
