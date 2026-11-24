import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Autoscaling Policy config associated with the cluster. */
export type AutoscalingConfig = {
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

export const autoscalingConfigSchema: Schema<AutoscalingConfig> = s.object<AutoscalingConfig>(
  {
    policyUri: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
