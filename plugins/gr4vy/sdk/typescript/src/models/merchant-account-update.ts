import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  accountUpdaterRequestEncryptionKeyIdSchema,
  type AccountUpdaterRequestEncryptionKeyId,
} from "./unions/account-updater-request-encryption-key-id.js";
import {
  accountUpdaterRequestEncryptionKeySchema,
  type AccountUpdaterRequestEncryptionKey,
} from "./unions/account-updater-request-encryption-key.js";
import {
  accountUpdaterResponseDecryptionKeyIdSchema,
  type AccountUpdaterResponseDecryptionKeyId,
} from "./unions/account-updater-response-decryption-key-id.js";
import {
  accountUpdaterResponseDecryptionKeySchema,
  type AccountUpdaterResponseDecryptionKey,
} from "./unions/account-updater-response-decryption-key.js";
import {
  amexNetworkTokensAppIdSchema,
  type AmexNetworkTokensAppId,
} from "./unions/amex-network-tokens-app-id.js";
import {
  amexNetworkTokensRequestorIdSchema,
  type AmexNetworkTokensRequestorId,
} from "./unions/amex-network-tokens-requestor-id.js";
import {
  discoverNetworkTokensAppIdSchema,
  type DiscoverNetworkTokensAppId,
} from "./unions/discover-network-tokens-app-id.js";
import {
  discoverNetworkTokensRequestorIdSchema,
  type DiscoverNetworkTokensRequestorId,
} from "./unions/discover-network-tokens-requestor-id.js";
import { displayName5Schema, type DisplayName5 } from "./unions/display-name5.js";
import { loonAcceptedSchemesSchema, type LoonAcceptedSchemes } from "./unions/loon-accepted-schemes.js";
import { loonClientKeySchema, type LoonClientKey } from "./unions/loon-client-key.js";
import {
  loonMerchantAccountIdSchema,
  type LoonMerchantAccountId,
} from "./unions/loon-merchant-account-id.js";
import { loonSecretKeySchema, type LoonSecretKey } from "./unions/loon-secret-key.js";
import {
  mastercardNetworkTokensAppIdSchema,
  type MastercardNetworkTokensAppId,
} from "./unions/mastercard-network-tokens-app-id.js";
import {
  mastercardNetworkTokensRequestorIdSchema,
  type MastercardNetworkTokensRequestorId,
} from "./unions/mastercard-network-tokens-requestor-id.js";
import { overCaptureAmount1Schema, type OverCaptureAmount1 } from "./unions/over-capture-amount1.js";
import {
  overCapturePercentage1Schema,
  type OverCapturePercentage1,
} from "./unions/over-capture-percentage1.js";
import {
  visaNetworkTokensAppIdSchema,
  type VisaNetworkTokensAppId,
} from "./unions/visa-network-tokens-app-id.js";
import {
  visaNetworkTokensRequestorIdSchema,
  type VisaNetworkTokensRequestorId,
} from "./unions/visa-network-tokens-requestor-id.js";

export type MerchantAccountUpdate = {
  /**
   * Whether the Real-Time Account Updater service is enabled for this merchant account. The Account
   * Updater service is used to update card details when cards are lost, stolen or expired. If the
   * field is not set or if it's set to `false`, the Account Updater service doesn't get called if a
   * payment fails with expired or invalid card details. If the field is set to `true`, the service
   * is called. Please note that for this to work the other `account_updater_* fields` must be set
   * as well.
   *
   * @default false
   */
  accountUpdaterEnabled?: boolean;
  /**
   * The public key used to encrypt the request to the Real-Time Account Updater service. The
   * Account Updater service is used to update card details when cards are lost, stolen or expired.
   * If the field is not set or if it's set to `null`, the Account Updater service doesn't get
   * called. If the field is set, the other `account_updater_*` fields must be set as well.
   *
   * @deprecated
   */
  accountUpdaterRequestEncryptionKey?: AccountUpdaterRequestEncryptionKey;
  /**
   * The ID of the key used to encrypt the request to the Real-Time Account Updater service. The
   * Account Updater service is used to update card details when cards are lost, stolen or expired.
   * If the field is not set or if it's set to `null`, the Account Updater service doesn't get
   * called. If the field is set, the other `account_updater_*` fields must be set as well.
   *
   * @deprecated
   */
  accountUpdaterRequestEncryptionKeyId?: AccountUpdaterRequestEncryptionKeyId;
  /**
   * The key used to decrypt the response from the Real-Time Account Updater service. The Account
   * Updater service is used to update card details when cards are lost, stolen or expired. If the
   * field is not set or if it's set to `null`, the Account Updater service doesn't get called. If
   * the field is set, the other `account_updater_*` fields must be set as well.
   *
   * @deprecated
   */
  accountUpdaterResponseDecryptionKey?: AccountUpdaterResponseDecryptionKey;
  /**
   * The ID of the key used to decrypt the request from the Real-Time Account Updater service. The
   * Account Updater service is used to update card details when cards are lost, stolen or expired.
   * If the field is not set or if it's set to `null`, the Account Updater service doesn't get
   * called. If the field is set, the other `account_updater_*` fields must be set as well.
   *
   * @deprecated
   */
  accountUpdaterResponseDecryptionKeyId?: AccountUpdaterResponseDecryptionKeyId;
  /**
   * The maximum monetary amount allowed for over-capture, in the smallest currency unit, for
   * example `1299` cents to allow for an over-capture of `$12.99`.
   */
  overCaptureAmount?: OverCaptureAmount1;
  /**
   * The maximum percentage allowed for over-capture, for example `25` to allow for an over-capture
   * of `25%` of the original transaction amount.
   */
  overCapturePercentage?: OverCapturePercentage1;
  /**
   * Client key provided by Pagos to authenticate to the Loon API. Loon is the Account Updater
   * service we use and if the field is not set or if it's set to null, the Account Updater service
   * doesn't get configured. If the field is set to `null`, the other `loon_*` fields must be set to
   * null as well.
   *
   * @deprecated
   */
  loonClientKey?: LoonClientKey;
  /**
   * Secret key provided by Pagos to authenticate to the Loon API. Loon is the Account Updater
   * service we use and if the field is not set or if it's set to null, the Account Updater service
   * doesn't get configured. If the field is set to `null`, the other `loon_*` fields must be set to
   * null as well.
   *
   * @deprecated
   */
  loonSecretKey?: LoonSecretKey;
  /**
   * Card schemes accepted when creating jobs using this set of Loon API keys. Loon is the Account
   * Updater service we use and if the field is not set or if it's set to null, the Account Updater
   * service doesn't get configured. If the field is set to `null`, the other `loon_*` fields must
   * be set to null as well.
   */
  loonAcceptedSchemes?: LoonAcceptedSchemes;
  /**
   * Merchant account ID provided by Pagos to identify this merchant account on the Loon API. Loon
   * is the Account Updater service we use and if the field is not set or if it's set to null, the
   * Account Updater service doesn't get configured. If the field is set to `null`, the other
   * `loon_*` fields must be set to null as well.
   */
  loonMerchantAccountId?: LoonMerchantAccountId;
  /** Requestor ID provided for Visa after onboarding to use Network Tokens. */
  visaNetworkTokensRequestorId?: VisaNetworkTokensRequestorId;
  /** Application ID provided for Visa after onboarding to use Network Tokens. */
  visaNetworkTokensAppId?: VisaNetworkTokensAppId;
  /** Requestor ID provided for American Express after onboarding to use Network Tokens. */
  amexNetworkTokensRequestorId?: AmexNetworkTokensRequestorId;
  /** Application ID provided for American Express after onboarding to use Network Tokens. */
  amexNetworkTokensAppId?: AmexNetworkTokensAppId;
  /** Requestor ID provided for Mastercard after onboarding to use Network Tokens. */
  mastercardNetworkTokensRequestorId?: MastercardNetworkTokensRequestorId;
  /** Application ID provided for Mastercard after onboarding to use Network Tokens. */
  mastercardNetworkTokensAppId?: MastercardNetworkTokensAppId;
  /** Requestor ID provided for Discover after onboarding to use Network Tokens. */
  discoverNetworkTokensRequestorId?: DiscoverNetworkTokensRequestorId;
  /** Application ID provided for Discover after onboarding to use Network Tokens. */
  discoverNetworkTokensAppId?: DiscoverNetworkTokensAppId;
  /**
   * When enabled network tokens will be generated asynchronously and only used on subsequent
   * transactions to speed up transaction processing.
   *
   * @default false
   */
  asyncNetworkTokensEnabled?: boolean;
  /** The display name for the merchant account. */
  displayName?: DisplayName5;
};

export const merchantAccountUpdateSchema: Schema<MerchantAccountUpdate> = s.object<MerchantAccountUpdate>({
  accountUpdaterEnabled: s.defaulted(s.boolean(), false),
  accountUpdaterRequestEncryptionKey: s.optional(s.lazy(() => accountUpdaterRequestEncryptionKeySchema)),
  accountUpdaterRequestEncryptionKeyId: s.optional(s.lazy(() => accountUpdaterRequestEncryptionKeyIdSchema)),
  accountUpdaterResponseDecryptionKey: s.optional(s.lazy(() => accountUpdaterResponseDecryptionKeySchema)),
  accountUpdaterResponseDecryptionKeyId: s.optional(
    s.lazy(() => accountUpdaterResponseDecryptionKeyIdSchema),
  ),
  overCaptureAmount: s.optional(s.lazy(() => overCaptureAmount1Schema)),
  overCapturePercentage: s.optional(s.lazy(() => overCapturePercentage1Schema)),
  loonClientKey: s.optional(s.lazy(() => loonClientKeySchema)),
  loonSecretKey: s.optional(s.lazy(() => loonSecretKeySchema)),
  loonAcceptedSchemes: s.optional(s.lazy(() => loonAcceptedSchemesSchema)),
  loonMerchantAccountId: s.optional(s.lazy(() => loonMerchantAccountIdSchema)),
  visaNetworkTokensRequestorId: s.optional(s.lazy(() => visaNetworkTokensRequestorIdSchema)),
  visaNetworkTokensAppId: s.optional(s.lazy(() => visaNetworkTokensAppIdSchema)),
  amexNetworkTokensRequestorId: s.optional(s.lazy(() => amexNetworkTokensRequestorIdSchema)),
  amexNetworkTokensAppId: s.optional(s.lazy(() => amexNetworkTokensAppIdSchema)),
  mastercardNetworkTokensRequestorId: s.optional(s.lazy(() => mastercardNetworkTokensRequestorIdSchema)),
  mastercardNetworkTokensAppId: s.optional(s.lazy(() => mastercardNetworkTokensAppIdSchema)),
  discoverNetworkTokensRequestorId: s.optional(s.lazy(() => discoverNetworkTokensRequestorIdSchema)),
  discoverNetworkTokensAppId: s.optional(s.lazy(() => discoverNetworkTokensAppIdSchema)),
  asyncNetworkTokensEnabled: s.defaulted(s.boolean(), false),
  displayName: s.optional(s.lazy(() => displayName5Schema)),
  _keysMap: {
    accountUpdaterEnabled: "account_updater_enabled",
    accountUpdaterRequestEncryptionKey: "account_updater_request_encryption_key",
    accountUpdaterRequestEncryptionKeyId: "account_updater_request_encryption_key_id",
    accountUpdaterResponseDecryptionKey: "account_updater_response_decryption_key",
    accountUpdaterResponseDecryptionKeyId: "account_updater_response_decryption_key_id",
    overCaptureAmount: "over_capture_amount",
    overCapturePercentage: "over_capture_percentage",
    loonClientKey: "loon_client_key",
    loonSecretKey: "loon_secret_key",
    loonAcceptedSchemes: "loon_accepted_schemes",
    loonMerchantAccountId: "loon_merchant_account_id",
    visaNetworkTokensRequestorId: "visa_network_tokens_requestor_id",
    visaNetworkTokensAppId: "visa_network_tokens_app_id",
    amexNetworkTokensRequestorId: "amex_network_tokens_requestor_id",
    amexNetworkTokensAppId: "amex_network_tokens_app_id",
    mastercardNetworkTokensRequestorId: "mastercard_network_tokens_requestor_id",
    mastercardNetworkTokensAppId: "mastercard_network_tokens_app_id",
    discoverNetworkTokensRequestorId: "discover_network_tokens_requestor_id",
    discoverNetworkTokensAppId: "discover_network_tokens_app_id",
    asyncNetworkTokensEnabled: "async_network_tokens_enabled",
    displayName: "display_name",
  },
});
