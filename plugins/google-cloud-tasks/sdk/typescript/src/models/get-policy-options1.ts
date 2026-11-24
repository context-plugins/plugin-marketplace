import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** OPTIONAL: A `GetPolicyOptions` object for specifying options to `GetIamPolicy`. */
export type GetPolicyOptions1 = {
  /**
   * Optional. The maximum policy version that will be used to format the policy. Valid values are
   * 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with
   * any conditional role bindings must specify version 3. Policies with no conditional role
   * bindings may specify any valid value or leave the field unset. The policy in the response might
   * use the policy version that you specified, or it might use a lower policy version. For example,
   * if you specify version 3, but the policy has no conditional role bindings, the response uses
   * version 1. To learn which resources support conditions in their IAM policies, see the [IAM
   * documentation](https://cloud.google.com/iam/help/conditions/resource-policies).
   */
  requestedPolicyVersion?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const getPolicyOptions1Schema: Schema<GetPolicyOptions1> = s.object<GetPolicyOptions1>(
  {
    requestedPolicyVersion: s.optional(s.int()),
  },
  { additionalProperties: s.json() },
);
