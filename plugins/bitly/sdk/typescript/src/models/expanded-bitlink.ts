import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ExpandedBitlink = {
  link?: string;
  id?: string;
  longUrl?: string;
  /**
   * The list of destination URLs for this bitlink, including the default long URL and any
   * dynamically routed destination URLs.
   */
  longUrls?: string[];
  createdAt?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const expandedBitlinkSchema: Schema<ExpandedBitlink> = s.object<ExpandedBitlink>(
  {
    link: s.optional(s.string()),
    id: s.optional(s.string()),
    longUrl: s.optional(s.string()),
    longUrls: s.optional(s.array(s.string())),
    createdAt: s.optional(s.string()),
    _keysMap: {
      longUrl: "long_url",
      longUrls: "long_urls",
      createdAt: "created_at",
    },
  },
  { additionalProperties: s.json() },
);
