import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { method16Schema, type Method16 } from "./method16.js";
import { paymentServiceStatusSchema, type PaymentServiceStatus } from "./payment-service-status.js";
import { Type55, type55Schema } from "./type55.js";
import { fields1Schema, type Fields1 } from "./unions/fields1.js";
import { merchantProfileSchema, type MerchantProfile } from "./unions/merchant-profile.js";
import { reportingFieldsSchema, type ReportingFields } from "./unions/reporting-fields.js";
import { threeDSecureEnabledSchema, type ThreeDSecureEnabled } from "./unions/three-dsecure-enabled.js";
import { webhookUrlSchema, type WebhookUrl } from "./unions/webhook-url.js";

export type PaymentService = {
  /** Always `payment-service` @default Type55.PaymentService */
  type?: Type55;
  id?: string;
  /** The ID of the merchant account this job belongs to. */
  merchantAccountId: string;
  /** The definition ID of the service that has been configured. */
  paymentServiceDefinitionId: string;
  /** Defines if this payment service is currently active. @default true */
  active?: boolean;
  /** The payment method that this service supports. */
  method: Method16;
  /** The display name for the payment service. */
  displayName: string;
  /** Deprecated field used to define the order in which to process payment services */
  position: number;
  status?: PaymentServiceStatus;
  /**
   * A list of currencies for which this service is enabled, in ISO 4217 three-letter code format.
   */
  acceptedCurrencies: string[];
  /** A list of countries for which this service is enabled, in ISO two-letter code format. */
  acceptedCountries: string[];
  /** Defines if this payment service support payment method tokenization. */
  paymentMethodTokenizationEnabled: boolean;
  /** Defines if this payment service supports network tokens. */
  networkTokensEnabled: boolean;
  /** Defines if this payment service is open loop. */
  openLoop: boolean;
  /** Defines if this payment service has settlement reporting enabled. */
  settlementReportingEnabled: boolean;
  /** Defines if this payment service has refund ingestion enabled. */
  refundIngestionEnabled: boolean;
  /** Defines if this payment service has 3DS enabled. */
  threeDSecureEnabled?: ThreeDSecureEnabled;
  /**
   * An object containing a key for each supported card schemes, and for each key an object with the
   * 3DS profile for this service for that scheme.
   */
  merchantProfile?: MerchantProfile;
  /**
   * The URL that needs to be configured with this payment service as the receiving endpoint for
   * webhooks from the service to our system. Currently, we dp not yet automatically register
   * webhooks on setup, and therefore webhooks need to be registered manually by the merchant.
   */
  webhookUrl?: WebhookUrl;
  /**
   * The non-secret credential fields that have been configured for this payment service. Any secret
   * fields are omitted.
   */
  fields?: Fields1;
  /**
   * The non-secret reporting fields that have been configured for this payment service. Any secret
   * fields are omitted.
   */
  reportingFields?: ReportingFields;
  /** Defines if this payment service has been deleted @default false */
  isDeleted?: boolean;
  /** The date and time when this payment service was first created in our system. */
  createdAt: Date;
  /** The date and time when this payment service was last updated in our system. */
  updatedAt: Date;
};

export const paymentServiceSchema: Schema<PaymentService> = s.object<PaymentService>({
  type: s.defaulted(type55Schema, Type55.PaymentService),
  id: s.optional(s.string()),
  merchantAccountId: s.string(),
  paymentServiceDefinitionId: s.string(),
  active: s.defaulted(s.boolean(), true),
  method: method16Schema,
  displayName: s.string(),
  position: s.int(),
  status: s.optional(s.lazy(() => paymentServiceStatusSchema)),
  acceptedCurrencies: s.array(s.string()),
  acceptedCountries: s.array(s.string()),
  paymentMethodTokenizationEnabled: s.boolean(),
  networkTokensEnabled: s.boolean(),
  openLoop: s.boolean(),
  settlementReportingEnabled: s.boolean(),
  refundIngestionEnabled: s.boolean(),
  threeDSecureEnabled: s.optional(s.lazy(() => threeDSecureEnabledSchema)),
  merchantProfile: s.optional(s.lazy(() => merchantProfileSchema)),
  webhookUrl: s.optional(s.lazy(() => webhookUrlSchema)),
  fields: s.optional(s.lazy(() => fields1Schema)),
  reportingFields: s.optional(s.lazy(() => reportingFieldsSchema)),
  isDeleted: s.defaulted(s.boolean(), false),
  createdAt: s.dateTime(),
  updatedAt: s.dateTime(),
  _keysMap: {
    merchantAccountId: "merchant_account_id",
    paymentServiceDefinitionId: "payment_service_definition_id",
    displayName: "display_name",
    acceptedCurrencies: "accepted_currencies",
    acceptedCountries: "accepted_countries",
    paymentMethodTokenizationEnabled: "payment_method_tokenization_enabled",
    networkTokensEnabled: "network_tokens_enabled",
    openLoop: "open_loop",
    settlementReportingEnabled: "settlement_reporting_enabled",
    refundIngestionEnabled: "refund_ingestion_enabled",
    threeDSecureEnabled: "three_d_secure_enabled",
    merchantProfile: "merchant_profile",
    webhookUrl: "webhook_url",
    reportingFields: "reporting_fields",
    isDeleted: "is_deleted",
    createdAt: "created_at",
    updatedAt: "updated_at",
  },
});
