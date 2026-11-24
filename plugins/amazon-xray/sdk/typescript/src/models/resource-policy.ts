import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ResourcePolicy = {
  /**
   * The name of the resource policy. Must be unique within a specific Amazon Web Services account.
   */
  policyName?: string;
  /** The resource policy document, which can be up to 5kb in size. */
  policyDocument?: string;
  /** Returns the current policy revision id for this policy name. */
  policyRevisionId?: string;
  /** When the policy was last updated, in Unix time seconds. */
  lastUpdatedTime?: Date;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const resourcePolicySchema: Schema<ResourcePolicy> = s.object<ResourcePolicy>(
  {
    policyName: s.optional(s.string()),
    policyDocument: s.optional(s.string()),
    policyRevisionId: s.optional(s.string()),
    lastUpdatedTime: s.optional(s.dateTime()),
    _keysMap: {
      policyName: "PolicyName",
      policyDocument: "PolicyDocument",
      policyRevisionId: "PolicyRevisionId",
      lastUpdatedTime: "LastUpdatedTime",
    },
  },
  { additionalProperties: s.json() },
);
