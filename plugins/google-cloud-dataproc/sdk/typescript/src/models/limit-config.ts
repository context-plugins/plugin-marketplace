import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Represents the autoscaling limit configuration of a metastore service. */
export type LimitConfig = {
  /** Optional. The highest scaling factor that the service should be autoscaled to. */
  maxScalingFactor?: number;
  /** Optional. The lowest scaling factor that the service should be autoscaled to. */
  minScalingFactor?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const limitConfigSchema: Schema<LimitConfig> = s.object<LimitConfig>(
  {
    maxScalingFactor: s.optional(s.float64()),
    minScalingFactor: s.optional(s.float64()),
  },
  { additionalProperties: s.json() },
);
