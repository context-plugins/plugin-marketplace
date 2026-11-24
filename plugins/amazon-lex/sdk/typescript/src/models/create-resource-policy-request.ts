import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type CreateResourcePolicyRequest = {
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
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const createResourcePolicyRequestSchema: Schema<CreateResourcePolicyRequest> =
  s.object<CreateResourcePolicyRequest>(
    {
      resourceArn: s.string(),
      policy: s.string(),
    },
    { additionalProperties: s.json() },
  );
