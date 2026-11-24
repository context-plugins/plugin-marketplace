import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { rewardSchema, type Reward } from "./unions/reward.js";

/** A trace that contributed gradients to a checkpoint (training step). */
export type CheckpointTraceRow = {
  traceId: string;
  reward?: Reward;
  status: string;
  createdAt: Date;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const checkpointTraceRowSchema: Schema<CheckpointTraceRow> = s.object<CheckpointTraceRow>(
  {
    traceId: s.string(),
    reward: s.optional(s.lazy(() => rewardSchema)),
    status: s.string(),
    createdAt: s.dateTime(),
    _keysMap: {
      traceId: "trace_id",
      createdAt: "created_at",
    },
  },
  { additionalProperties: s.json() },
);
