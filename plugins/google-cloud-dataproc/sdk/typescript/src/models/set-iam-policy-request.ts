import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { policy3Schema, type Policy3 } from "./policy3.js";

/** Request message for SetIamPolicy method. */
export type SetIamPolicyRequest = {
  /**
   * REQUIRED: The complete policy to be applied to the resource. The size of the policy is limited
   * to a few 10s of KB. An empty policy is a valid policy but certain Google Cloud services (such
   * as Projects) might reject them.
   */
  policy?: Policy3;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const setIamPolicyRequestSchema: Schema<SetIamPolicyRequest> = s.object<SetIamPolicyRequest>(
  {
    policy: s.optional(s.lazy(() => policy3Schema)),
  },
  { additionalProperties: s.json() },
);
