import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  googleCloudApigeeV1EndpointChainingRuleSchema,
  type GoogleCloudApigeeV1EndpointChainingRule,
} from "./google-cloud-apigee-v1-endpoint-chaining-rule.js";
import {
  googleCloudApigeeV1RoutingRuleSchema,
  type GoogleCloudApigeeV1RoutingRule,
} from "./google-cloud-apigee-v1-routing-rule.js";

/**
 * EnvironmentGroupConfig is a revisioned snapshot of an EnvironmentGroup and its associated routing
 * rules.
 */
export type GoogleCloudApigeeV1EnvironmentGroupConfig = {
  /** A list of proxies in each deployment group for proxy chaining calls. */
  endpointChainingRules?: GoogleCloudApigeeV1EndpointChainingRule[];
  /** Host names for the environment group. */
  hostnames?: string[];
  /**
   * Revision id that defines the ordering of the EnvironmentGroupConfig resource. The higher the
   * revision, the more recently the configuration was deployed.
   */
  revisionId?: string;
  /**
   * Ordered list of routing rules defining how traffic to this environment group's hostnames should
   * be routed to different environments.
   */
  routingRules?: GoogleCloudApigeeV1RoutingRule[];
  /**
   * When this message appears in the top-level IngressConfig, this field will be populated in lieu
   * of the inlined routing_rules and hostnames fields. Some URL for downloading the full
   * EnvironmentGroupConfig for this group.
   */
  location?: string;
  /**
   * A unique id for the environment group config that will only change if the environment group is
   * deleted and recreated.
   */
  uid?: string;
  /**
   * Name of the environment group in the following format:
   * `organizations/{org}/envgroups/{envgroup}`.
   */
  name?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApigeeV1EnvironmentGroupConfigSchema: Schema<GoogleCloudApigeeV1EnvironmentGroupConfig> =
  s.object<GoogleCloudApigeeV1EnvironmentGroupConfig>(
    {
      endpointChainingRules: s.optional(s.array(s.lazy(() => googleCloudApigeeV1EndpointChainingRuleSchema))),
      hostnames: s.optional(s.array(s.string())),
      revisionId: s.optional(s.string()),
      routingRules: s.optional(s.array(s.lazy(() => googleCloudApigeeV1RoutingRuleSchema))),
      location: s.optional(s.string()),
      uid: s.optional(s.string()),
      name: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
