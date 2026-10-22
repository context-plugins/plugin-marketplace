import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { cardScheme2Schema, type CardScheme2 } from "./card-scheme2.js";
import { currency5Schema, type Currency5 } from "./unions/currency5.js";

export type MerchantAccountThreeDsConfigurationCreate = {
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
  /** The card scheme for this 3DS configuration */
  scheme: CardScheme2;
  /**
   * ISO 4217 currency code (3 characters). If left null, the configuration will apply to all
   * currencies.
   */
  currency?: Currency5;
  /**
   * Any additional information about the 3DS configuration that you would like to store as
   * key-value pairs.
   */
  metadata: Record<string, string>;
};

export const merchantAccountThreeDsConfigurationCreateSchema: Schema<MerchantAccountThreeDsConfigurationCreate> =
  s.object<MerchantAccountThreeDsConfigurationCreate>({
    merchantAcquirerBin: s.string(),
    merchantAcquirerId: s.string(),
    merchantName: s.string(),
    merchantCountryCode: s.string(),
    merchantCategoryCode: s.string(),
    merchantUrl: s.string(),
    scheme: cardScheme2Schema,
    currency: s.optional(s.lazy(() => currency5Schema)),
    metadata: s.record(s.string(), s.string()),
    _keysMap: {
      merchantAcquirerBin: "merchant_acquirer_bin",
      merchantAcquirerId: "merchant_acquirer_id",
      merchantName: "merchant_name",
      merchantCountryCode: "merchant_country_code",
      merchantCategoryCode: "merchant_category_code",
      merchantUrl: "merchant_url",
    },
  });
