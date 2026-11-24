import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { deeplinkSchema, type Deeplink } from "./deeplink.js";
import { dynamicRoutingRuleSchema, type DynamicRoutingRule } from "./dynamic-routing-rule.js";

/**
 * Either long_url (for new bitlinks) or bitlink_id (for adding keywords to existing bitlinks) must
 * be provided, but not both.
 */
export type FullShorten = {
  /** URL to be shortened. Required when creating new bitlinks. Cannot be used with bitlink_id. */
  longUrl?: string;
  /** @default "bit.ly" */
  domain?: string;
  /** Always include a specific group and custom domain in your shorten calls. */
  groupGuid?: string;
  title?: string;
  tags?: string[];
  deeplinks?: Deeplink[];
  forceNewLink?: boolean;
  /**
   * Custom keyword for creating keyword overrides. If provided, creates an override at
   * domain/keyword
   */
  keyword?: string;
  /**
   * Existing bitlink ID to add a keyword override to. Format: domain/hash. Cannot be used with
   * long_url
   */
  bitlinkId?: string;
  /**
   * Optional expiration timestamp for the bitlink (e.g., 2025-01-28T14:30:00+0000). Minimum
   * expiration time is 5 minutes from now and maximum is 1 year.
   */
  expirationAt?: string;
  /** dynamic routing rules for this bitlink. */
  dynamicRouting?: DynamicRoutingRule[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const fullShortenSchema: Schema<FullShorten> = s.object<FullShorten>(
  {
    longUrl: s.optional(s.string()),
    domain: s.defaulted(s.string(), "bit.ly"),
    groupGuid: s.optional(s.string()),
    title: s.optional(s.string()),
    tags: s.optional(s.array(s.string())),
    deeplinks: s.optional(s.array(s.lazy(() => deeplinkSchema))),
    forceNewLink: s.optional(s.boolean()),
    keyword: s.optional(s.string()),
    bitlinkId: s.optional(s.string()),
    expirationAt: s.optional(s.string()),
    dynamicRouting: s.optional(s.array(s.lazy(() => dynamicRoutingRuleSchema))),
    _keysMap: {
      longUrl: "long_url",
      groupGuid: "group_guid",
      forceNewLink: "force_new_link",
      bitlinkId: "bitlink_id",
      expirationAt: "expiration_at",
      dynamicRouting: "dynamic_routing",
    },
  },
  { additionalProperties: s.json() },
);
