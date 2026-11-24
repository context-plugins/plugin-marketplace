import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { getPolicyOptions1Schema, type GetPolicyOptions1 } from "./get-policy-options1.js";

/** Request message for `GetIamPolicy` method. */
export type GetIamPolicyRequest = {
  /** OPTIONAL: A `GetPolicyOptions` object for specifying options to `GetIamPolicy`. */
  options?: GetPolicyOptions1;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const getIamPolicyRequestSchema: Schema<GetIamPolicyRequest> = s.object<GetIamPolicyRequest>(
  {
    options: s.optional(s.lazy(() => getPolicyOptions1Schema)),
  },
  { additionalProperties: s.json() },
);
