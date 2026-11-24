import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type UpdateResourcePolicyRequest = {
  /**
   * The Amazon Resource Name (ARN) of the bot or bot alias that the resource policy is attached to.
   */
  resourceArn: string;
  /**
   * A resource policy to add to the resource. The policy is a JSON structure that contains one or
   * more statements that define the policy. The policy must follow the IAM syntax. For more
   * information about the contents of a JSON policy document, see IAM JSON policy reference . If
   * the policy isn't valid, Amazon Lex returns a validation exception.
   */
  policy: string;
  /**
   * The identifier of the revision of the policy to update. If this revision ID doesn't match the
   * current revision ID, Amazon Lex throws an exception. If you don't specify a revision, Amazon
   * Lex overwrites the contents of the policy with the new values.
   */
  expectedRevisionId?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const updateResourcePolicyRequestSchema: Schema<UpdateResourcePolicyRequest> =
  s.object<UpdateResourcePolicyRequest>(
    {
      resourceArn: s.string(),
      policy: s.string(),
      expectedRevisionId: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
