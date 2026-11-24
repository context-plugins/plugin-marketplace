import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Item1 = {
  listingId?: string;
  url?: string;
  title?: string;
  currency?: string;
  designers?: string[];
  size?: string | null;
  condition?: string | null;
  category?: string | null;
  department?: string | null;
  location?: string | null;
  imageUrl?: string | null;
  price?: number | null;
  shippingPrice?: number | null;
  acceptsOffers?: boolean;
  listedAt?: string | null;
  bumpedAt?: string | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const item1Schema: Schema<Item1> = s.object<Item1>(
  {
    listingId: s.optional(s.string()),
    url: s.optional(s.string()),
    title: s.optional(s.string()),
    currency: s.optional(s.string()),
    designers: s.optional(s.array(s.string())),
    size: s.optionalNullable(s.string()),
    condition: s.optionalNullable(s.string()),
    category: s.optionalNullable(s.string()),
    department: s.optionalNullable(s.string()),
    location: s.optionalNullable(s.string()),
    imageUrl: s.optionalNullable(s.string()),
    price: s.optionalNullable(s.float64()),
    shippingPrice: s.optionalNullable(s.float64()),
    acceptsOffers: s.optional(s.boolean()),
    listedAt: s.optionalNullable(s.string()),
    bumpedAt: s.optionalNullable(s.string()),
  },
  { additionalProperties: s.json() },
);
