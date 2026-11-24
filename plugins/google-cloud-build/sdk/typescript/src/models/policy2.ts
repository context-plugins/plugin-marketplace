import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { auditConfigSchema, type AuditConfig } from "./audit-config.js";
import { bindingSchema, type Binding } from "./binding.js";

/**
 * REQUIRED: The complete policy to be applied to the `resource`. The size of the policy is limited
 * to a few 10s of KB. An empty policy is a valid policy but certain Google Cloud services (such as
 * Projects) might reject them.
 */
export type Policy2 = {
  /**
   * `etag` is used for optimistic concurrency control as a way to help prevent simultaneous updates
   * of a policy from overwriting each other. It is strongly suggested that systems make use of the
   * `etag` in the read-modify-write cycle to perform policy updates in order to avoid race
   * conditions: An `etag` is returned in the response to `getIamPolicy`, and systems are expected
   * to put that etag in the request to `setIamPolicy` to ensure that their change will be applied
   * to the same version of the policy. **Important:** If you use IAM Conditions, you must include
   * the `etag` field whenever you call `setIamPolicy`. If you omit this field, then IAM allows you
   * to overwrite a version `3` policy with a version `1` policy, and all of the conditions in the
   * version `3` policy are lost.
   */
  etag?: string;
  /**
   * Associates a list of `members`, or principals, with a `role`. Optionally, may specify a
   * `condition` that determines how and when the `bindings` are applied. Each of the `bindings`
   * must contain at least one principal. The `bindings` in a `Policy` can refer to up to 1,500
   * principals; up to 250 of these principals can be Google groups. Each occurrence of a principal
   * counts towards these limits. For example, if the `bindings` grant 50 different roles to
   * `user:alice@example.com`, and not to any other principal, then you can add another 1,450
   * principals to the `bindings` in the `Policy`.
   */
  bindings?: Binding[];
  /**
   * Specifies the format of the policy. Valid values are `0`, `1`, and `3`. Requests that specify
   * an invalid value are rejected. Any operation that affects conditional role bindings must
   * specify version `3`. This requirement applies to the following operations: * Getting a policy
   * that includes a conditional role binding * Adding a conditional role binding to a policy *
   * Changing a conditional role binding in a policy * Removing any role binding, with or without a
   * condition, from a policy that includes conditions **Important:** If you use IAM Conditions, you
   * must include the `etag` field whenever you call `setIamPolicy`. If you omit this field, then
   * IAM allows you to overwrite a version `3` policy with a version `1` policy, and all of the
   * conditions in the version `3` policy are lost. If a policy does not include any conditions,
   * operations on that policy may specify any valid version or leave the field unset. To learn
   * which resources support conditions in their IAM policies, see the [IAM
   * documentation](https://cloud.google.com/iam/help/conditions/resource-policies).
   */
  version?: number;
  /** Specifies cloud audit logging configuration for this policy. */
  auditConfigs?: AuditConfig[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const policy2Schema: Schema<Policy2> = s.object<Policy2>(
  {
    etag: s.optional(s.string()),
    bindings: s.optional(s.array(s.lazy(() => bindingSchema))),
    version: s.optional(s.int()),
    auditConfigs: s.optional(s.array(s.lazy(() => auditConfigSchema))),
  },
  { additionalProperties: s.json() },
);
