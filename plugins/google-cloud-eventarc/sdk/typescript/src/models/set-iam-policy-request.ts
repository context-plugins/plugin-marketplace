import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { policy1Schema, type Policy1 } from "./policy1.js";

/** Request message for `SetIamPolicy` method. */
export type SetIamPolicyRequest = {
  /**
   * REQUIRED: The complete policy to be applied to the `resource`. The size of the policy is
   * limited to a few 10s of KB. An empty policy is a valid policy but certain Google Cloud services
   * (such as Projects) might reject them.
   */
  policy?: Policy1;
  /**
   * OPTIONAL: A FieldMask specifying which fields of the policy to modify. Only the fields in the
   * mask will be modified. If no mask is provided, the following default mask is used: `paths:
   * "bindings, etag"`
   */
  updateMask?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const setIamPolicyRequestSchema: Schema<SetIamPolicyRequest> = s.object<SetIamPolicyRequest>(
  {
    policy: s.optional(s.lazy(() => policy1Schema)),
    updateMask: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
