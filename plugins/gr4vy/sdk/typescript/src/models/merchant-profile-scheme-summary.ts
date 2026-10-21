import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type MerchantProfileSchemeSummary = {
  /** Acquirer BIN to use when calling 3DS through this scheme. */
  merchantAcquirerBin: string;
  /** Merchant ID to use when calling 3DS through this scheme. */
  merchantAcquirerId: string;
  merchantName: string;
  /** The merchant's ISO 3166-1 numeric country code. */
  merchantCountryCode: string;
  /** Merchant category code to use when calling 3DS through this scheme. */
  merchantCategoryCode: string;
  /** URL to send when calling 3DS through this scheme. */
  merchantUrl: string;
  /** The date and time when this profile was first created in our system. */
  createdAt: Date;
};

export const merchantProfileSchemeSummarySchema: Schema<MerchantProfileSchemeSummary> =
  s.object<MerchantProfileSchemeSummary>({
    merchantAcquirerBin: s.string(),
    merchantAcquirerId: s.string(),
    merchantName: s.string(),
    merchantCountryCode: s.string(),
    merchantCategoryCode: s.string(),
    merchantUrl: s.string(),
    createdAt: s.dateTime(),
    _keysMap: {
      merchantAcquirerBin: "merchant_acquirer_bin",
      merchantAcquirerId: "merchant_acquirer_id",
      merchantName: "merchant_name",
      merchantCountryCode: "merchant_country_code",
      merchantCategoryCode: "merchant_category_code",
      merchantUrl: "merchant_url",
      createdAt: "created_at",
    },
  });
