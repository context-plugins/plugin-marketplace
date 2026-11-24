import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { deeplinkRuleSchema, type DeeplinkRule } from "./deeplink-rule.js";
import { dynamicRoutingRuleSchema, type DynamicRoutingRule } from "./dynamic-routing-rule.js";

export type BitlinkUpdate = {
  link?: string;
  id?: string;
  longUrl?: string;
  title?: string;
  archived?: boolean;
  createdAt?: string;
  createdBy?: string;
  clientId?: string;
  /**
   * list of previously edited backhalfs for the bitlink - these are in reverse chronological order,
   * with the most recently edited backhalf first
   */
  customBitlinks?: string[];
  tags?: string[];
  launchpadIds?: string[];
  /** a list of qr code ids that are associated with this bitlink */
  qrCodeIds?: string[];
  deeplinks?: DeeplinkRule[];
  isDeleted?: boolean;
  campaignIds?: string[];
  /** Optional expiration timestamp for the bitlink (e.g., 2025-01-28T14:30:00+0000) */
  expirationAt?: string;
  /** Dynamic routing rules for this bitlink. Only present when at least one rule is configured. */
  dynamicRouting?: DynamicRoutingRule[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const bitlinkUpdateSchema: Schema<BitlinkUpdate> = s.object<BitlinkUpdate>(
  {
    link: s.optional(s.string()),
    id: s.optional(s.string()),
    longUrl: s.optional(s.string()),
    title: s.optional(s.string()),
    archived: s.optional(s.boolean()),
    createdAt: s.optional(s.string()),
    createdBy: s.optional(s.string()),
    clientId: s.optional(s.string()),
    customBitlinks: s.optional(s.array(s.string())),
    tags: s.optional(s.array(s.string())),
    launchpadIds: s.optional(s.array(s.string())),
    qrCodeIds: s.optional(s.array(s.string())),
    deeplinks: s.optional(s.array(s.lazy(() => deeplinkRuleSchema))),
    isDeleted: s.optional(s.boolean()),
    campaignIds: s.optional(s.array(s.string())),
    expirationAt: s.optional(s.string()),
    dynamicRouting: s.optional(s.array(s.lazy(() => dynamicRoutingRuleSchema))),
    _keysMap: {
      longUrl: "long_url",
      createdAt: "created_at",
      createdBy: "created_by",
      clientId: "client_id",
      customBitlinks: "custom_bitlinks",
      launchpadIds: "launchpad_ids",
      qrCodeIds: "qr_code_ids",
      isDeleted: "is_deleted",
      campaignIds: "campaign_ids",
      expirationAt: "expiration_at",
      dynamicRouting: "dynamic_routing",
    },
  },
  { additionalProperties: s.json() },
);
