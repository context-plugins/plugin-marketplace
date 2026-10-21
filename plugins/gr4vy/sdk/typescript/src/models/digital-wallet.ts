import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { digitalWalletProvider2Schema, type DigitalWalletProvider2 } from "./digital-wallet-provider2.js";
import { Type19, type19Schema } from "./type19.js";
import { address12Schema, type Address12 } from "./unions/address12.js";
import { extraConfigurationSchema, type ExtraConfiguration } from "./unions/extra-configuration.js";
import { fieldsSchema, type Fields } from "./unions/fields.js";
import { merchantCategoryCodeSchema, type MerchantCategoryCode } from "./unions/merchant-category-code.js";
import { merchantCountryCodeSchema, type MerchantCountryCode } from "./unions/merchant-country-code.js";
import { merchantDisplayNameSchema, type MerchantDisplayName } from "./unions/merchant-display-name.js";
import { merchantUrlSchema, type MerchantUrl } from "./unions/merchant-url.js";

export type DigitalWallet = {
  /** Always `digital-wallet`. @default Type19.DigitalWallet */
  type?: Type19;
  /** The ID for the digital wallet. */
  id: string;
  /** The ID of the merchant account this digital wallet belongs to. */
  merchantAccountId: string;
  /** The name of the digital wallet provider. */
  provider: DigitalWalletProvider2;
  /** The name of the merchant the digital wallet is registered to. */
  merchantName: string;
  /** The consumer facing name of the merchant. */
  merchantDisplayName?: MerchantDisplayName;
  /** The main URL of the merchant. */
  merchantUrl?: MerchantUrl;
  /** The country code where the merchant is registered. */
  merchantCountryCode?: MerchantCountryCode;
  /** Merchant classification for the type of goods or services it provides. */
  merchantCategoryCode?: MerchantCategoryCode;
  /** The merchant address associated with the digital wallet. */
  address?: Address12;
  /** Provider-specific configuration. Currently only used by Paze. */
  extraConfiguration?: ExtraConfiguration;
  /** The list of domain names that a digital wallet can be used on (deprecated). */
  domainNames: string[];
  /**
   * The number of active custom certificates registered for this digital wallet (Apple Pay only).
   *
   * @default 0
   */
  activeCertificateCount?: number;
  /**
   * The number of pending custom certificates registered for this digital wallet (Apple Pay only).
   *
   * @default 0
   */
  pendingCertificateCount?: number;
  /**
   * The number of expired custom certificates registered for this digital wallet (Apple Pay only).
   *
   * @default 0
   */
  expiredCertificateCount?: number;
  /** Custom attributes for some digital wallets. Currently only used by Click to Pay. */
  fields?: Fields;
  /** The date this buyer was created at. */
  createdAt: Date;
  /** The date this buyer was last updated at. */
  updatedAt: Date;
};

export const digitalWalletSchema: Schema<DigitalWallet> = s.object<DigitalWallet>({
  type: s.defaulted(type19Schema, Type19.DigitalWallet),
  id: s.string(),
  merchantAccountId: s.string(),
  provider: digitalWalletProvider2Schema,
  merchantName: s.string(),
  merchantDisplayName: s.optional(s.lazy(() => merchantDisplayNameSchema)),
  merchantUrl: s.optional(s.lazy(() => merchantUrlSchema)),
  merchantCountryCode: s.optional(s.lazy(() => merchantCountryCodeSchema)),
  merchantCategoryCode: s.optional(s.lazy(() => merchantCategoryCodeSchema)),
  address: s.optional(s.lazy(() => address12Schema)),
  extraConfiguration: s.optional(s.lazy(() => extraConfigurationSchema)),
  domainNames: s.array(s.string()),
  activeCertificateCount: s.defaulted(s.int(), 0),
  pendingCertificateCount: s.defaulted(s.int(), 0),
  expiredCertificateCount: s.defaulted(s.int(), 0),
  fields: s.optional(s.lazy(() => fieldsSchema)),
  createdAt: s.dateTime(),
  updatedAt: s.dateTime(),
  _keysMap: {
    merchantAccountId: "merchant_account_id",
    merchantName: "merchant_name",
    merchantDisplayName: "merchant_display_name",
    merchantUrl: "merchant_url",
    merchantCountryCode: "merchant_country_code",
    merchantCategoryCode: "merchant_category_code",
    extraConfiguration: "extra_configuration",
    domainNames: "domain_names",
    activeCertificateCount: "active_certificate_count",
    pendingCertificateCount: "pending_certificate_count",
    expiredCertificateCount: "expired_certificate_count",
    createdAt: "created_at",
    updatedAt: "updated_at",
  },
});
