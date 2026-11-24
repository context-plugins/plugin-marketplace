import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { limitConfig2Schema, type LimitConfig2 } from "./limit-config2.js";

/** Represents the autoscaling configuration of a metastore service. */
export type AutoscalingConfig2 = {
  /** Output only. The scaling factor of a service with autoscaling enabled. */
  autoscalingFactor?: number;
  /** Optional. Whether or not autoscaling is enabled for this service. */
  autoscalingEnabled?: boolean;
  /** Optional. The LimitConfig of the service. */
  limitConfig?: LimitConfig2;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const autoscalingConfig2Schema: Schema<AutoscalingConfig2> = s.object<AutoscalingConfig2>(
  {
    autoscalingFactor: s.optional(s.float64()),
    autoscalingEnabled: s.optional(s.boolean()),
    limitConfig: s.optional(s.lazy(() => limitConfig2Schema)),
  },
  { additionalProperties: s.json() },
);
