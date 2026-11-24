import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { effectSchema, type Effect } from "./effect.js";
import { principalSchema, type Principal } from "./principal.js";

export type CreateResourcePolicyStatementRequest = {
  /**
   * The Amazon Resource Name (ARN) of the bot or bot alias that the resource policy is attached to.
   */
  resourceArn: string;
  /**
   * The name of the statement. The ID is the same as the Sid IAM property. The statement name must
   * be unique within the policy. For more information, see IAM JSON policy elements: Sid.
   */
  statementId: string;
  /** Determines whether the statement allows or denies access to the resource. */
  effect: Effect;
  /**
   * An IAM principal, such as an IAM user, IAM role, or Amazon Web Services services that is
   * allowed or denied access to a resource. For more information, see Amazon Web Services JSON
   * policy elements: Principal.
   */
  principal: Principal[];
  /**
   * The Amazon Lex action that this policy either allows or denies. The action must apply to the
   * resource type of the specified ARN. For more information, see Actions, resources, and condition
   * keys for Amazon Lex V2.
   */
  action: string[];
  /**
   * Specifies a condition when the policy is in effect. If the principal of the policy is a service
   * principal, you must provide two condition blocks, one with a SourceAccount global condition key
   * and one with a SourceArn global condition key. For more information, see IAM JSON policy
   * elements: Condition .
   */
  condition?: Record<string, string>;
  /**
   * The identifier of the revision of the policy to edit. If this revision ID doesn't match the
   * current revision ID, Amazon Lex throws an exception. If you don't specify a revision, Amazon
   * Lex overwrites the contents of the policy with the new values.
   */
  expectedRevisionId?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const createResourcePolicyStatementRequestSchema: Schema<CreateResourcePolicyStatementRequest> =
  s.object<CreateResourcePolicyStatementRequest>(
    {
      resourceArn: s.string(),
      statementId: s.string(),
      effect: effectSchema,
      principal: s.array(s.lazy(() => principalSchema)),
      action: s.array(s.string()),
      condition: s.optional(s.record(s.string(), s.string())),
      expectedRevisionId: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
