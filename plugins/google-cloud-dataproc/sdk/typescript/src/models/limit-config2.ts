import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Optional. The LimitConfig of the service. */
export type LimitConfig2 = {
  /** Optional. The highest scaling factor that the service should be autoscaled to. */
  maxScalingFactor?: number;
  /** Optional. The lowest scaling factor that the service should be autoscaled to. */
  minScalingFactor?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const limitConfig2Schema: Schema<LimitConfig2> = s.object<LimitConfig2>(
  {
    maxScalingFactor: s.optional(s.float64()),
    minScalingFactor: s.optional(s.float64()),
  },
  { additionalProperties: s.json() },
);
