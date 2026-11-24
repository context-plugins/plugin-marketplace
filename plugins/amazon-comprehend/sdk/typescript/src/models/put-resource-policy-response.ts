import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type PutResourcePolicyResponse = {
  /**
   * The revision ID of the policy. Each time you modify a policy, Amazon Comprehend assigns a new
   * revision ID, and it deletes the prior version of the policy.
   */
  policyRevisionId?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const putResourcePolicyResponseSchema: Schema<PutResourcePolicyResponse> =
  s.object<PutResourcePolicyResponse>(
    {
      policyRevisionId: s.optional(s.string()),
      _keysMap: {
        policyRevisionId: "PolicyRevisionId",
      },
    },
    { additionalProperties: s.json() },
  );
