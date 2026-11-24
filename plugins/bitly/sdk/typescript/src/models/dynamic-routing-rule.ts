import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  dynamicRoutingDeviceEnumSchema,
  type DynamicRoutingDeviceEnum,
} from "./dynamic-routing-device-enum.js";
import {
  dynamicRoutingPlatformEnumSchema,
  type DynamicRoutingPlatformEnum,
} from "./dynamic-routing-platform-enum.js";

/**
 * A dynamic routing rule that redirects traffic to a different destination based on user
 * attributes.
 */
export type DynamicRoutingRule = {
  /** The destination URL for requests matching this rule. */
  longUrl?: string;
  /** ISO 3166-1 alpha-2 country codes that trigger this rule (e.g., ["US", "CA"]). */
  countryMatch?: string[];
  /** ISO 3166-1 alpha-2 country codes that must NOT match for this rule to apply. */
  countryExclude?: string[];
  /** ISO 3166-2 region codes that trigger this rule (e.g., ["US-CA", "CA-ON"]). */
  regionMatch?: string[];
  /**
   * ISO 3166-2 region codes that must NOT match for this rule to apply (e.g., ["US-CA", "CA-ON"]).
   */
  regionExclude?: string[];
  /** Device types that trigger this rule (e.g., ["mobile", "tablet"]). */
  deviceMatch?: DynamicRoutingDeviceEnum[];
  /** Device types that must NOT match for this rule to apply. */
  deviceExclude?: DynamicRoutingDeviceEnum[];
  /** Operating systems that trigger this rule (e.g., ["ios", "android"]). */
  osMatch?: DynamicRoutingPlatformEnum[];
  /** Operating systems that must NOT match for this rule to apply. */
  osExclude?: DynamicRoutingPlatformEnum[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const dynamicRoutingRuleSchema: Schema<DynamicRoutingRule> = s.object<DynamicRoutingRule>(
  {
    longUrl: s.optional(s.string()),
    countryMatch: s.optional(s.array(s.string())),
    countryExclude: s.optional(s.array(s.string())),
    regionMatch: s.optional(s.array(s.string())),
    regionExclude: s.optional(s.array(s.string())),
    deviceMatch: s.optional(s.array(s.lazy(() => dynamicRoutingDeviceEnumSchema))),
    deviceExclude: s.optional(s.array(s.lazy(() => dynamicRoutingDeviceEnumSchema))),
    osMatch: s.optional(s.array(s.lazy(() => dynamicRoutingPlatformEnumSchema))),
    osExclude: s.optional(s.array(s.lazy(() => dynamicRoutingPlatformEnumSchema))),
    _keysMap: {
      longUrl: "long_url",
      countryMatch: "country_match",
      countryExclude: "country_exclude",
      regionMatch: "region_match",
      regionExclude: "region_exclude",
      deviceMatch: "device_match",
      deviceExclude: "device_exclude",
      osMatch: "os_match",
      osExclude: "os_exclude",
    },
  },
  { additionalProperties: s.json() },
);
