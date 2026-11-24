import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { deeplinkRuleSchema, type DeeplinkRule } from "./deeplink-rule.js";

export type ShortenBitlinkBody = {
  references?: Record<string, string>;
  link?: string;
  id?: string;
  longUrl?: string;
  archived?: boolean;
  createdAt?: string;
  /**
   * list of previously edited backhalfs for the bitlink - these are in reverse chronological order,
   * with the most recently edited backhalf first
   */
  customBitlinks?: string[];
  tags?: string[];
  deeplinks?: DeeplinkRule[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const shortenBitlinkBodySchema: Schema<ShortenBitlinkBody> = s.object<ShortenBitlinkBody>(
  {
    references: s.optional(s.record(s.string(), s.string())),
    link: s.optional(s.string()),
    id: s.optional(s.string()),
    longUrl: s.optional(s.string()),
    archived: s.optional(s.boolean()),
    createdAt: s.optional(s.string()),
    customBitlinks: s.optional(s.array(s.string())),
    tags: s.optional(s.array(s.string())),
    deeplinks: s.optional(s.array(s.lazy(() => deeplinkRuleSchema))),
    _keysMap: {
      longUrl: "long_url",
      createdAt: "created_at",
      customBitlinks: "custom_bitlinks",
    },
  },
  { additionalProperties: s.json() },
);
