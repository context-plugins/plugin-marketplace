import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type DeleteResourcePolicyStatementRequest = {
  /**
   * The Amazon Resource Name (ARN) of the bot or bot alias that the resource policy is attached to.
   */
  resourceArn: string;
  /** The name of the statement (SID) to delete from the policy. */
  statementId: string;
  /**
   * The identifier of the revision of the policy to delete the statement from. If this revision ID
   * doesn't match the current revision ID, Amazon Lex throws an exception. If you don't specify a
   * revision, Amazon Lex removes the current contents of the statement.
   */
  expectedRevisionId?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const deleteResourcePolicyStatementRequestSchema: Schema<DeleteResourcePolicyStatementRequest> =
  s.object<DeleteResourcePolicyStatementRequest>(
    {
      resourceArn: s.string(),
      statementId: s.string(),
      expectedRevisionId: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
