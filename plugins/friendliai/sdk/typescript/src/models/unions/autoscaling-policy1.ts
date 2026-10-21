import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { autoscalingPolicySchema, type AutoscalingPolicy } from "../autoscaling-policy.js";

/** Defines autoscaling settings for the endpoint. */
export type AutoscalingPolicy1 = AutoscalingPolicy;

export const autoscalingPolicy1Schema: Schema<AutoscalingPolicy1> = s.of<AutoscalingPolicy1>(
  s.union([s.lazy(() => autoscalingPolicySchema)]),
);
