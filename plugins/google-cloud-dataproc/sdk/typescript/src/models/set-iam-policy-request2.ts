import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { policy22Schema, type Policy22 } from "./policy22.js";

/** Request message for SetIamPolicy method. */
export type SetIamPolicyRequest2 = {
  /**
   * OPTIONAL: A FieldMask specifying which fields of the policy to modify. Only the fields in the
   * mask will be modified. If no mask is provided, the following default mask is used:paths:
   * "bindings, etag"
   */
  updateMask?: string;
  /**
   * REQUIRED: The complete policy to be applied to the resource. The size of the policy is limited
   * to a few 10s of KB. An empty policy is a valid policy but certain Google Cloud services (such
   * as Projects) might reject them.
   */
  policy?: Policy22;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const setIamPolicyRequest2Schema: Schema<SetIamPolicyRequest2> = s.object<SetIamPolicyRequest2>(
  {
    updateMask: s.optional(s.string()),
    policy: s.optional(s.lazy(() => policy22Schema)),
  },
  { additionalProperties: s.json() },
);
