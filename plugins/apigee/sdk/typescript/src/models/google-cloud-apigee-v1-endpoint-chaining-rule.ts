import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/**
 * EndpointChainingRule specifies the proxies contained in a particular deployment group, so that
 * other deployment groups can find them in chaining calls.
 */
export type GoogleCloudApigeeV1EndpointChainingRule = {
  /** The deployment group to target for cross-shard chaining calls to these proxies. */
  deploymentGroup?: string;
  /** List of proxy ids which may be found in the given deployment group. */
  proxyIds?: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApigeeV1EndpointChainingRuleSchema: Schema<GoogleCloudApigeeV1EndpointChainingRule> =
  s.object<GoogleCloudApigeeV1EndpointChainingRule>(
    {
      deploymentGroup: s.optional(s.string()),
      proxyIds: s.optional(s.array(s.string())),
    },
    { additionalProperties: s.json() },
  );
