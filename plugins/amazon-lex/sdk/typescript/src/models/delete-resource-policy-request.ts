import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type DeleteResourcePolicyRequest = {
  /**
   * The Amazon Resource Name (ARN) of the bot or bot alias that has the resource policy attached.
   */
  resourceArn: string;
  /**
   * The identifier of the revision to edit. If this ID doesn't match the current revision number,
   * Amazon Lex returns an exception If you don't specify a revision ID, Amazon Lex will delete the
   * current policy.
   */
  expectedRevisionId?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const deleteResourcePolicyRequestSchema: Schema<DeleteResourcePolicyRequest> =
  s.object<DeleteResourcePolicyRequest>(
    {
      resourceArn: s.string(),
      expectedRevisionId: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
