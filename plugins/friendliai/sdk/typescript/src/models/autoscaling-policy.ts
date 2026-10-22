import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Autoscaling policy. */
export type AutoscalingPolicy = {
  /**
   * Setting `minReplica` to 0 allows the endpoint to sleep when idle, reducing costs. The minimum
   * value is 0.
   *
   * @default 0
   */
  minReplica?: number;
  /** The maximum replicas that the endpoint can scale up to. The maximum value is 10. @default 1 */
  maxReplica?: number;
  /**
   * Determines how long the endpoint waits before scaling down after the last request.
   *
   * @default 300
   */
  cooldownPeriod?: number;
};

export const autoscalingPolicySchema: Schema<AutoscalingPolicy> = s.object<AutoscalingPolicy>({
  minReplica: s.defaulted(s.int(), 0),
  maxReplica: s.defaulted(s.int(), 1),
  cooldownPeriod: s.defaulted(s.int(), 300),
});
