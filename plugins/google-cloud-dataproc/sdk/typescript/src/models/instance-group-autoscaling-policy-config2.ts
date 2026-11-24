import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Required. Describes how the autoscaler will operate for primary workers. */
export type InstanceGroupAutoscalingPolicyConfig2 = {
  /**
   * Required. Maximum number of instances for this group. Required for primary workers. Note that
   * by default, clusters will not use secondary workers. Required for secondary workers if the
   * minimum secondary instances is set.Primary workers - Bounds: [min_instances, ). Secondary
   * workers - Bounds: [min_instances, ). Default: 0.
   */
  maxInstances?: number;
  /**
   * Optional. Weight for the instance group, which is used to determine the fraction of total
   * workers in the cluster from this instance group. For example, if primary workers have weight 2,
   * and secondary workers have weight 1, the cluster will have approximately 2 primary workers for
   * each secondary worker.The cluster may not reach the specified balance if constrained by min/max
   * bounds or other autoscaling settings. For example, if max_instances for secondary workers is 0,
   * then only primary workers will be added. The cluster can also be out of balance when created.If
   * weight is not set on any instance group, the cluster will default to equal weight for all
   * groups: the cluster will attempt to maintain an equal number of workers in each group within
   * the configured size bounds for each group. If weight is set for one group only, the cluster
   * will default to zero weight on the unset group. For example if weight is set only on primary
   * workers, the cluster will use primary workers only and no secondary workers.
   */
  weight?: number;
  /**
   * Optional. Minimum number of instances for this group.Primary workers - Bounds: 2,
   * max_instances. Default: 2. Secondary workers - Bounds: 0, max_instances. Default: 0.
   */
  minInstances?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const instanceGroupAutoscalingPolicyConfig2Schema: Schema<InstanceGroupAutoscalingPolicyConfig2> =
  s.object<InstanceGroupAutoscalingPolicyConfig2>(
    {
      maxInstances: s.optional(s.int()),
      weight: s.optional(s.int()),
      minInstances: s.optional(s.int()),
    },
    { additionalProperties: s.json() },
  );
