import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type DeleteProjectPolicyRequest = {
  /**
   * The Amazon Resource Name (ARN) of the project that the project policy you want to delete is
   * attached to.
   */
  projectArn: string;
  /** The name of the policy that you want to delete. */
  policyName: string;
  /** The ID of the project policy revision that you want to delete. */
  policyRevisionId?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const deleteProjectPolicyRequestSchema: Schema<DeleteProjectPolicyRequest> =
  s.object<DeleteProjectPolicyRequest>(
    {
      projectArn: s.string(),
      policyName: s.string(),
      policyRevisionId: s.optional(s.string()),
      _keysMap: {
        projectArn: "ProjectArn",
        policyName: "PolicyName",
        policyRevisionId: "PolicyRevisionId",
      },
    },
    { additionalProperties: s.json() },
  );
