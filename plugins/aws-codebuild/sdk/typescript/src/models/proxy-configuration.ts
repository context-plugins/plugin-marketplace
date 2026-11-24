import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { defaultBehaviorSchema, type DefaultBehavior } from "./default-behavior.js";
import { fleetProxyRuleSchema, type FleetProxyRule } from "./fleet-proxy-rule.js";

export type ProxyConfiguration = {
  /** The default behavior of outgoing traffic. */
  defaultBehavior?: DefaultBehavior;
  /**
   * An array of FleetProxyRule objects that represent the specified destination domains or IPs to
   * allow or deny network access control to.
   */
  orderedProxyRules?: FleetProxyRule[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const proxyConfigurationSchema: Schema<ProxyConfiguration> = s.object<ProxyConfiguration>(
  {
    defaultBehavior: s.optional(s.lazy(() => defaultBehaviorSchema)),
    orderedProxyRules: s.optional(s.array(s.lazy(() => fleetProxyRuleSchema))),
  },
  { additionalProperties: s.json() },
);
