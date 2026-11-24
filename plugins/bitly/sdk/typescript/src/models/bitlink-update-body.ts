import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { deeplinkRuleSchema, type DeeplinkRule } from "./deeplink-rule.js";
import { dynamicRoutingRuleSchema, type DynamicRoutingRule } from "./dynamic-routing-rule.js";

export type BitlinkUpdateBody = {
  title?: string;
  archived?: boolean;
  tags?: string[];
  deeplinks?: DeeplinkRule[];
  longUrl?: string;
  /**
   * Optional expiration timestamp for the bitlink (e.g., 2025-01-28T14:30:00+0000). Minimum
   * expiration time is 5 minutes from now and maximum is 1 year.
   */
  expirationAt?: string;
  /**
   * Dynamic routing rules for this bitlink. Providing this field replaces all existing rules. Send
   * an empty array to clear all rules.
   */
  dynamicRouting?: DynamicRoutingRule[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const bitlinkUpdateBodySchema: Schema<BitlinkUpdateBody> = s.object<BitlinkUpdateBody>(
  {
    title: s.optional(s.string()),
    archived: s.optional(s.boolean()),
    tags: s.optional(s.array(s.string())),
    deeplinks: s.optional(s.array(s.lazy(() => deeplinkRuleSchema))),
    longUrl: s.optional(s.string()),
    expirationAt: s.optional(s.string()),
    dynamicRouting: s.optional(s.array(s.lazy(() => dynamicRoutingRuleSchema))),
    _keysMap: {
      longUrl: "long_url",
      expirationAt: "expiration_at",
      dynamicRouting: "dynamic_routing",
    },
  },
  { additionalProperties: s.json() },
);
