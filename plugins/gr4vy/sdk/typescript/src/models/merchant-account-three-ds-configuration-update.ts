import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { currency5Schema, type Currency5 } from "./unions/currency5.js";
import { merchantAcquirerBinSchema, type MerchantAcquirerBin } from "./unions/merchant-acquirer-bin.js";
import { merchantAcquirerIdSchema, type MerchantAcquirerId } from "./unions/merchant-acquirer-id.js";
import { merchantCategoryCode3Schema, type MerchantCategoryCode3 } from "./unions/merchant-category-code3.js";
import { merchantCountryCode3Schema, type MerchantCountryCode3 } from "./unions/merchant-country-code3.js";
import { merchantName1Schema, type MerchantName1 } from "./unions/merchant-name1.js";
import { merchantUrl3Schema, type MerchantUrl3 } from "./unions/merchant-url3.js";
import { metadata2Schema, type Metadata2 } from "./unions/metadata2.js";
import { scheme23Schema, type Scheme23 } from "./unions/scheme23.js";

export type MerchantAccountThreeDsConfigurationUpdate = {
  /** Acquirer BIN to use when calling 3DS through this scheme. */
  merchantAcquirerBin?: MerchantAcquirerBin;
  /** Merchant ID to use when calling 3DS through this scheme. */
  merchantAcquirerId?: MerchantAcquirerId;
  merchantName?: MerchantName1;
  /** The merchant's ISO 3166-1 numeric country code. */
  merchantCountryCode?: MerchantCountryCode3;
  /** Merchant category code to use when calling 3DS through this scheme. */
  merchantCategoryCode?: MerchantCategoryCode3;
  /** URL to send when calling 3DS through this scheme. */
  merchantUrl?: MerchantUrl3;
  /** The card scheme for this 3DS configuration */
  scheme?: Scheme23;
  /**
   * ISO 4217 currency code (3 characters). If left null, the configuration will apply to all
   * currencies.
   */
  currency?: Currency5;
  /**
   * Any additional information about the 3DS configuration that you would like to store as
   * key-value pairs.
   */
  metadata?: Metadata2;
};

export const merchantAccountThreeDsConfigurationUpdateSchema: Schema<MerchantAccountThreeDsConfigurationUpdate> =
  s.object<MerchantAccountThreeDsConfigurationUpdate>({
    merchantAcquirerBin: s.optional(s.lazy(() => merchantAcquirerBinSchema)),
    merchantAcquirerId: s.optional(s.lazy(() => merchantAcquirerIdSchema)),
    merchantName: s.optional(s.lazy(() => merchantName1Schema)),
    merchantCountryCode: s.optional(s.lazy(() => merchantCountryCode3Schema)),
    merchantCategoryCode: s.optional(s.lazy(() => merchantCategoryCode3Schema)),
    merchantUrl: s.optional(s.lazy(() => merchantUrl3Schema)),
    scheme: s.optional(s.lazy(() => scheme23Schema)),
    currency: s.optional(s.lazy(() => currency5Schema)),
    metadata: s.optional(s.lazy(() => metadata2Schema)),
    _keysMap: {
      merchantAcquirerBin: "merchant_acquirer_bin",
      merchantAcquirerId: "merchant_acquirer_id",
      merchantName: "merchant_name",
      merchantCountryCode: "merchant_country_code",
      merchantCategoryCode: "merchant_category_code",
      merchantUrl: "merchant_url",
    },
  });
