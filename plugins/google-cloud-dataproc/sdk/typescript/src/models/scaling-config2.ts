import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { autoscalingConfig22Schema, type AutoscalingConfig22 } from "./autoscaling-config22.js";
import { instanceSizeSchema, type InstanceSize } from "./instance-size.js";

/** Optional. Scaling configuration of the metastore service. */
export type ScalingConfig2 = {
  /**
   * An enum of readable instance sizes, with each instance size mapping to a float value (e.g.
   * InstanceSize.EXTRA_SMALL = scaling_factor(0.1))
   */
  instanceSize?: InstanceSize;
  /** Optional. The autoscaling configuration. */
  autoscalingConfig?: AutoscalingConfig22;
  /**
   * Scaling factor, increments of 0.1 for values less than 1.0, and increments of 1.0 for values
   * greater than 1.0.
   */
  scalingFactor?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const scalingConfig2Schema: Schema<ScalingConfig2> = s.object<ScalingConfig2>(
  {
    instanceSize: s.optional(s.lazy(() => instanceSizeSchema)),
    autoscalingConfig: s.optional(s.lazy(() => autoscalingConfig22Schema)),
    scalingFactor: s.optional(s.float64()),
  },
  { additionalProperties: s.json() },
);
