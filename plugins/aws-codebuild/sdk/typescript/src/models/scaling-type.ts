import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The scaling type for a compute fleet. */
export const ScalingType = {
  TargetTrackingScaling: "TARGET_TRACKING_SCALING",
} as const;
export type ScalingType = (typeof ScalingType)[keyof typeof ScalingType] | (string & {});

export const scalingTypeSchema: EnumSchema<ScalingType> = s.enumOf<ScalingType>(ScalingType);
