import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type DeleteResourcePolicyRequest = {
  /** The name of the resource policy to delete. */
  policyName: string;
  /**
   * Specifies a specific policy revision to delete. Provide a PolicyRevisionId to ensure an atomic
   * delete operation. If the provided revision id does not match the latest policy revision id, an
   * InvalidPolicyRevisionIdException exception is returned.
   */
  policyRevisionId?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const deleteResourcePolicyRequestSchema: Schema<DeleteResourcePolicyRequest> =
  s.object<DeleteResourcePolicyRequest>(
    {
      policyName: s.string(),
      policyRevisionId: s.optional(s.string()),
      _keysMap: {
        policyName: "PolicyName",
        policyRevisionId: "PolicyRevisionId",
      },
    },
    { additionalProperties: s.json() },
  );
