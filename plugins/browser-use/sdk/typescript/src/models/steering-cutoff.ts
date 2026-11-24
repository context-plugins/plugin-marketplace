import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/**
 * Earliest accepted steer for one interrupted source run.
 *
 * The queue endpoint returns these compact boundaries separately from message rows so a remount can
 * keep every interrupted transcript frozen without re-sending the full historical steering-message
 * payload.
 */
export type SteeringCutoff = {
  sourceRunId: string;
  createdAt: Date;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const steeringCutoffSchema: Schema<SteeringCutoff> = s.object<SteeringCutoff>(
  {
    sourceRunId: s.string(),
    createdAt: s.dateTime(),
  },
  { additionalProperties: s.json() },
);
