import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { policy2Schema, type Policy2 } from "./policy2.js";

/** Request message for `SetIamPolicy` method. */
export type SetIamPolicyRequest = {
  /**
   * OPTIONAL: A FieldMask specifying which fields of the policy to modify. Only the fields in the
   * mask will be modified. If no mask is provided, the following default mask is used: `paths:
   * "bindings, etag"`
   */
  updateMask?: string;
  /**
   * REQUIRED: The complete policy to be applied to the `resource`. The size of the policy is
   * limited to a few 10s of KB. An empty policy is a valid policy but certain Google Cloud services
   * (such as Projects) might reject them.
   */
  policy?: Policy2;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const setIamPolicyRequestSchema: Schema<SetIamPolicyRequest> = s.object<SetIamPolicyRequest>(
  {
    updateMask: s.optional(s.string()),
    policy: s.optional(s.lazy(() => policy2Schema)),
  },
  { additionalProperties: s.json() },
);
