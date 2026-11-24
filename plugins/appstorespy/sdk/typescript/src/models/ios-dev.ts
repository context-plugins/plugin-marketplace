import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type IosDev = {
  id?: string;
  name?: string;
  /**
   * Distinct seller legal names from the App Store seller field, aggregated across the account's
   * apps. Usually a single value; multiple values occur for transferred or renamed accounts.
   * Populated for company accounts; null/absent for individual accounts.
   */
  sellerName?: string[];
  category?: string;
  type?: string;
  totalApps?: number;
  publishedApps?: number;
  lastUpdated?: string;
  firstReleased?: string;
  ratingCount?: number;
  downloads?: number;
  revenue?: number;
  topApps?: string[];
  /**
   * Country of the developer's registered address as disclosed on the store listing (ISO 3166-1
   * alpha-2). May differ from where the company actually operates.
   */
  hqCountry?: string;
  /**
   * Unified cross-store publisher id; the same value appears on the iOS and Play developer accounts
   * of one company. Null when no mapping is known.
   */
  amPublisherId?: string;
  /**
   * Store-specific publisher id from the download-estimates provider. Null when no mapping is
   * known.
   */
  stPublisherId?: string;
  email?: string[];
  url?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const iosDevSchema: Schema<IosDev> = s.object<IosDev>(
  {
    id: s.optional(s.string()),
    name: s.optional(s.string()),
    sellerName: s.optional(s.array(s.string())),
    category: s.optional(s.string()),
    type: s.optional(s.string()),
    totalApps: s.optional(s.int()),
    publishedApps: s.optional(s.int()),
    lastUpdated: s.optional(s.string()),
    firstReleased: s.optional(s.string()),
    ratingCount: s.optional(s.int()),
    downloads: s.optional(s.int()),
    revenue: s.optional(s.int()),
    topApps: s.optional(s.array(s.string())),
    hqCountry: s.optional(s.string()),
    amPublisherId: s.optional(s.string()),
    stPublisherId: s.optional(s.string()),
    email: s.optional(s.array(s.string())),
    url: s.optional(s.string()),
    _keysMap: {
      sellerName: "seller_name",
      totalApps: "total_apps",
      publishedApps: "published_apps",
      lastUpdated: "last_updated",
      firstReleased: "first_released",
      ratingCount: "rating_count",
      topApps: "top_apps",
      hqCountry: "hq_country",
      amPublisherId: "am_publisher_id",
      stPublisherId: "st_publisher_id",
    },
  },
  { additionalProperties: s.json() },
);
