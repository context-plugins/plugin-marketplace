import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { resourcePolicySchema, type ResourcePolicy } from "./resource-policy.js";

export type ListResourcePoliciesResult = {
  /** The list of resource policies in the target Amazon Web Services account. */
  resourcePolicies?: ResourcePolicy[];
  /** Pagination token. Not currently supported. */
  nextToken?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const listResourcePoliciesResultSchema: Schema<ListResourcePoliciesResult> =
  s.object<ListResourcePoliciesResult>(
    {
      resourcePolicies: s.optional(s.array(s.lazy(() => resourcePolicySchema))),
      nextToken: s.optional(s.string()),
      _keysMap: {
        resourcePolicies: "ResourcePolicies",
        nextToken: "NextToken",
      },
    },
    { additionalProperties: s.json() },
  );
