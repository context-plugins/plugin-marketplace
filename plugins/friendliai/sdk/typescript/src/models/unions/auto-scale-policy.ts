import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { autoscalingPolicySchema, type AutoscalingPolicy } from "../autoscaling-policy.js";

/** The auto scaling configuration of the endpoint. */
export type AutoScalePolicy = AutoscalingPolicy;

export const autoScalePolicySchema: Schema<AutoScalePolicy> = s.of<AutoScalePolicy>(
  s.union([s.lazy(() => autoscalingPolicySchema)]),
);
