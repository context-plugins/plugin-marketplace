import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  basicAutoscalingAlgorithmSchema,
  type BasicAutoscalingAlgorithm,
} from "./basic-autoscaling-algorithm.js";
import { clusterType1Schema, type ClusterType1 } from "./cluster-type1.js";
import {
  instanceGroupAutoscalingPolicyConfig1Schema,
  type InstanceGroupAutoscalingPolicyConfig1,
} from "./instance-group-autoscaling-policy-config1.js";
import {
  instanceGroupAutoscalingPolicyConfig2Schema,
  type InstanceGroupAutoscalingPolicyConfig2,
} from "./instance-group-autoscaling-policy-config2.js";

/** Describes an autoscaling policy for Dataproc cluster autoscaler. */
export type AutoscalingPolicy = {
  /**
   * Required. The policy id.The id must contain only letters (a-z, A-Z), numbers (0-9), underscores
   * (_), and hyphens (-). Cannot begin or end with underscore or hyphen. Must consist of between 3
   * and 50 characters.
   */
  id?: string;
  /** Optional. Describes how the autoscaler will operate for secondary workers. */
  secondaryWorkerConfig?: InstanceGroupAutoscalingPolicyConfig1;
  /**
   * Optional. The labels to associate with this autoscaling policy. Label keys must contain 1 to 63
   * characters, and must conform to RFC 1035 (https://www.ietf.org/rfc/rfc1035.txt). Label values
   * may be empty, but, if present, must contain 1 to 63 characters, and must conform to RFC 1035
   * (https://www.ietf.org/rfc/rfc1035.txt). No more than 32 labels can be associated with an
   * autoscaling policy.
   */
  labels?: Record<string, string>;
  /** Required. Describes how the autoscaler will operate for primary workers. */
  workerConfig?: InstanceGroupAutoscalingPolicyConfig2;
  /** Basic algorithm for autoscaling. */
  basicAlgorithm?: BasicAutoscalingAlgorithm;
  /**
   * Output only. The "resource name" of the autoscaling policy, as described in
   * https://cloud.google.com/apis/design/resource_names. For projects.regions.autoscalingPolicies,
   * the resource name of the policy has the following format:
   * projects/{project_id}/regions/{region}/autoscalingPolicies/{policy_id} For
   * projects.locations.autoscalingPolicies, the resource name of the policy has the following
   * format: projects/{project_id}/locations/{location}/autoscalingPolicies/{policy_id}
   */
  name?: string;
  /** Optional. The type of the clusters for which this autoscaling policy is to be configured. */
  clusterType?: ClusterType1;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const autoscalingPolicySchema: Schema<AutoscalingPolicy> = s.object<AutoscalingPolicy>(
  {
    id: s.optional(s.string()),
    secondaryWorkerConfig: s.optional(s.lazy(() => instanceGroupAutoscalingPolicyConfig1Schema)),
    labels: s.optional(s.record(s.string(), s.string())),
    workerConfig: s.optional(s.lazy(() => instanceGroupAutoscalingPolicyConfig2Schema)),
    basicAlgorithm: s.optional(s.lazy(() => basicAutoscalingAlgorithmSchema)),
    name: s.optional(s.string()),
    clusterType: s.optional(s.lazy(() => clusterType1Schema)),
  },
  { additionalProperties: s.json() },
);
