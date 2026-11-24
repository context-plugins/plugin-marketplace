import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type DescribeResourcePolicyResponse = {
  /**
   * The Amazon Resource Name (ARN) of the bot or bot alias that the resource policy is attached to.
   */
  resourceArn?: string;
  /**
   * The JSON structure that contains the resource policy. For more information about the contents
   * of a JSON policy document, see IAM JSON policy reference .
   */
  policy?: string;
  /**
   * The current revision of the resource policy. Use the revision ID to make sure that you are
   * updating the most current version of a resource policy when you add a policy statement to a
   * resource, delete a resource, or update a resource.
   */
  revisionId?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const describeResourcePolicyResponseSchema: Schema<DescribeResourcePolicyResponse> =
  s.object<DescribeResourcePolicyResponse>(
    {
      resourceArn: s.optional(s.string()),
      policy: s.optional(s.string()),
      revisionId: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
