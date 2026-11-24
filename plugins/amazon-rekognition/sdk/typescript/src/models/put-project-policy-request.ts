import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type PutProjectPolicyRequest = {
  /** The Amazon Resource Name (ARN) of the project that the project policy is attached to. */
  projectArn: string;
  /** A name for the policy. */
  policyName: string;
  /**
   * The revision ID for the Project Policy. Each time you modify a policy, Amazon Rekognition
   * Custom Labels generates and assigns a new PolicyRevisionId and then deletes the previous
   * version of the policy.
   */
  policyRevisionId?: string;
  /**
   * A resource policy to add to the model. The policy is a JSON structure that contains one or more
   * statements that define the policy. The policy must follow the IAM syntax. For more information
   * about the contents of a JSON policy document, see IAM JSON policy reference.
   */
  policyDocument: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const putProjectPolicyRequestSchema: Schema<PutProjectPolicyRequest> =
  s.object<PutProjectPolicyRequest>(
    {
      projectArn: s.string(),
      policyName: s.string(),
      policyRevisionId: s.optional(s.string()),
      policyDocument: s.string(),
      _keysMap: {
        projectArn: "ProjectArn",
        policyName: "PolicyName",
        policyRevisionId: "PolicyRevisionId",
        policyDocument: "PolicyDocument",
      },
    },
    { additionalProperties: s.json() },
  );
