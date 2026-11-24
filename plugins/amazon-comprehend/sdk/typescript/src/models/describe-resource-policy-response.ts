import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type DescribeResourcePolicyResponse = {
  /** The JSON body of the resource-based policy. */
  resourcePolicy?: string;
  /** The time at which the policy was created. */
  creationTime?: Date;
  /** The time at which the policy was last modified. */
  lastModifiedTime?: Date;
  /**
   * The revision ID of the policy. Each time you modify a policy, Amazon Comprehend assigns a new
   * revision ID, and it deletes the prior version of the policy.
   */
  policyRevisionId?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const describeResourcePolicyResponseSchema: Schema<DescribeResourcePolicyResponse> =
  s.object<DescribeResourcePolicyResponse>(
    {
      resourcePolicy: s.optional(s.string()),
      creationTime: s.optional(s.dateTime()),
      lastModifiedTime: s.optional(s.dateTime()),
      policyRevisionId: s.optional(s.string()),
      _keysMap: {
        resourcePolicy: "ResourcePolicy",
        creationTime: "CreationTime",
        lastModifiedTime: "LastModifiedTime",
        policyRevisionId: "PolicyRevisionId",
      },
    },
    { additionalProperties: s.json() },
  );
