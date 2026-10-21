import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { cardScheme2Schema, type CardScheme2 } from "./card-scheme2.js";
import { Type38, type38Schema } from "./type38.js";
import { currency4Schema, type Currency4 } from "./unions/currency4.js";

export type MerchantAccountThreeDsConfiguration = {
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
  /**
   * Always `merchant-account.three-ds-configuration`.
   *
   * @default Type38.MerchantAccountThreeDsConfiguration
   */
  type?: Type38;
  /** Unique identifier for the 3DS configuration */
  id: string;
  /** ID of the associated merchant account */
  merchantAccountId: string;
  /** The date and time when this 3DS configuration was first created in our system. */
  createdAt: Date;
  /** The date and time when this 3DS configuration was last updated in our system. */
  updatedAt: Date;
  /** The card scheme for this 3DS configuration */
  scheme: CardScheme2;
  /**
   * ISO 4217 currency code (3 characters). If null, the configuration applies to all currencies.
   */
  currency: Currency4;
  /** Additional information about the 3DS configuration, stored as key-value pairs. */
  metadata: Record<string, string>;
};

export const merchantAccountThreeDsConfigurationSchema: Schema<MerchantAccountThreeDsConfiguration> =
  s.object<MerchantAccountThreeDsConfiguration>({
    merchantAcquirerBin: s.string(),
    merchantAcquirerId: s.string(),
    merchantName: s.string(),
    merchantCountryCode: s.string(),
    merchantCategoryCode: s.string(),
    merchantUrl: s.string(),
    type: s.defaulted(type38Schema, Type38.MerchantAccountThreeDsConfiguration),
    id: s.string(),
    merchantAccountId: s.string(),
    createdAt: s.dateTime(),
    updatedAt: s.dateTime(),
    scheme: cardScheme2Schema,
    currency: currency4Schema,
    metadata: s.record(s.string(), s.string()),
    _keysMap: {
      merchantAcquirerBin: "merchant_acquirer_bin",
      merchantAcquirerId: "merchant_acquirer_id",
      merchantName: "merchant_name",
      merchantCountryCode: "merchant_country_code",
      merchantCategoryCode: "merchant_category_code",
      merchantUrl: "merchant_url",
      merchantAccountId: "merchant_account_id",
      createdAt: "created_at",
      updatedAt: "updated_at",
    },
  });
