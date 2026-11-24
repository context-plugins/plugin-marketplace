import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type DeleteResourcePolicyRequest = {
  /** The Amazon Resource Name (ARN) of the custom model version that has the policy to delete. */
  resourceArn: string;
  /** The revision ID of the policy to delete. */
  policyRevisionId?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const deleteResourcePolicyRequestSchema: Schema<DeleteResourcePolicyRequest> =
  s.object<DeleteResourcePolicyRequest>(
    {
      resourceArn: s.string(),
      policyRevisionId: s.optional(s.string()),
      _keysMap: {
        resourceArn: "ResourceArn",
        policyRevisionId: "PolicyRevisionId",
      },
    },
    { additionalProperties: s.json() },
  );
