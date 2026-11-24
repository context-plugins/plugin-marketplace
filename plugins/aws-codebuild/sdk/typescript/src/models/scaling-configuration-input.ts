import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { scalingTypeSchema, type ScalingType } from "./scaling-type.js";
import {
  targetTrackingScalingConfigurationSchema,
  type TargetTrackingScalingConfiguration,
} from "./target-tracking-scaling-configuration.js";

export type ScalingConfigurationInput = {
  /** The scaling type for a compute fleet. */
  scalingType?: ScalingType;
  /** A list of TargetTrackingScalingConfiguration objects. */
  targetTrackingScalingConfigs?: TargetTrackingScalingConfiguration[];
  /** The maximum number of instances in the ﬂeet when auto-scaling. */
  maxCapacity?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const scalingConfigurationInputSchema: Schema<ScalingConfigurationInput> =
  s.object<ScalingConfigurationInput>(
    {
      scalingType: s.optional(s.lazy(() => scalingTypeSchema)),
      targetTrackingScalingConfigs: s.optional(
        s.array(s.lazy(() => targetTrackingScalingConfigurationSchema)),
      ),
      maxCapacity: s.optional(s.int()),
    },
    { additionalProperties: s.json() },
  );
