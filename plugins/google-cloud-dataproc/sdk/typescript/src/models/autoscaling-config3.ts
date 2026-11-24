import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/**
 * Optional. Autoscaling config for the policy associated with the cluster. Cluster does not
 * autoscale if this field is unset.
 */
export type AutoscalingConfig3 = {
  /**
   * Optional. The autoscaling policy used by the cluster.Only resource names including projectid
   * and location (region) are valid. Examples:
   * https://www.googleapis.com/compute/v1/projects/[project_id]/locations/[dataproc_region]/autoscalingPolicies/[policy_id]
   * projects/[project_id]/locations/[dataproc_region]/autoscalingPolicies/[policy_id]Note that the
   * policy must be in the same project and region.
   */
  policyUri?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const autoscalingConfig3Schema: Schema<AutoscalingConfig3> = s.object<AutoscalingConfig3>(
  {
    policyUri: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
