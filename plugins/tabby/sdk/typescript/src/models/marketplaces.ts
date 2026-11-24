import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Sellers' details within marketplaces. */
export type Marketplaces = {
  /** Unique ID of the seller within your marketplace. */
  sellerId: string;
  /** Name of the seller within your marketplace. */
  sellerName: string;
  /** Category of the seller within your marketplace. */
  sellerCategory: string;
  /** Website of the seller within your marketplace. */
  sellerWebsite: string;
  /** Seller's phone number. */
  sellerPhone: string;
  /** Seller's registration date, in UTC, and displayed in ISO 8601 datetime format. */
  sellerRegistrationDate: Date;
  /** Seller's commercial registration number. */
  sellerCommercialRegistrationNumber: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const marketplacesSchema: Schema<Marketplaces> = s.object<Marketplaces>(
  {
    sellerId: s.string(),
    sellerName: s.string(),
    sellerCategory: s.string(),
    sellerWebsite: s.string(),
    sellerPhone: s.string(),
    sellerRegistrationDate: s.dateTime(),
    sellerCommercialRegistrationNumber: s.string(),
    _keysMap: {
      sellerId: "seller_id",
      sellerName: "seller_name",
      sellerCategory: "seller_category",
      sellerWebsite: "seller_website",
      sellerPhone: "seller_phone",
      sellerRegistrationDate: "seller_registration_date",
      sellerCommercialRegistrationNumber: "seller_commercial_registration_number",
    },
  },
  { additionalProperties: s.json() },
);
