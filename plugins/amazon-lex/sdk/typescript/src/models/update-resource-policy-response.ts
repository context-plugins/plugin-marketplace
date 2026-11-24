import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type UpdateResourcePolicyResponse = {
  /**
   * The Amazon Resource Name (ARN) of the bot or bot alias that the resource policy is attached to.
   */
  resourceArn?: string;
  /**
   * The current revision of the resource policy. Use the revision ID to make sure that you are
   * updating the most current version of a resource policy when you add a policy statement to a
   * resource, delete a resource, or update a resource.
   */
  revisionId?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const updateResourcePolicyResponseSchema: Schema<UpdateResourcePolicyResponse> =
  s.object<UpdateResourcePolicyResponse>(
    {
      resourceArn: s.optional(s.string()),
      revisionId: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
