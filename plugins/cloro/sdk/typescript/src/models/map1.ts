import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Map1 = {
  /** Business ID (Yelp ID or Google Place ID) */
  id?: string;
  /** Data provider: "yelp", "b1"/"b3" (Google), or "yelp-feed" */
  provider?: string;
  /** Business name */
  name?: string;
  /** Position/ranking in results (added by parser) */
  position?: number;
  /** Full street address */
  address?: string;
  /** GPS latitude coordinate */
  latitude?: number;
  /** GPS longitude coordinate */
  longitude?: number;
  /** Business categories */
  categories?: string[];
  /** Business rating (0-5 scale) */
  rating?: number;
  /** Number of reviews */
  reviewCount?: number;
  /** Business description */
  description?: string;
  /** Contact phone number */
  phone?: string;
  /** Business website URL */
  websiteUrl?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const map1Properties: s.Shape<Map1> = {
  id: s.optional(s.string()),
  provider: s.optional(s.string()),
  name: s.optional(s.string()),
  position: s.optional(s.int()),
  address: s.optional(s.string()),
  latitude: s.optional(s.float64()),
  longitude: s.optional(s.float64()),
  categories: s.optional(s.array(s.string())),
  rating: s.optional(s.float64()),
  reviewCount: s.optional(s.int()),
  description: s.optional(s.string()),
  phone: s.optional(s.string()),
  websiteUrl: s.optional(s.string()),
};

export const map1InternalSchema: Schema<Map1> = s.object<Map1>(map1Properties, {
  additionalProperties: s.json(),
});

export const map1Schema: Schema<Map1> = s.lazySchema(() =>
  s.object<Map1>(
    {
      ...map1Properties,
      websiteUrl: s.optional(s.string().check(s.url())),
    },
    { additionalProperties: s.json() },
  ),
);
