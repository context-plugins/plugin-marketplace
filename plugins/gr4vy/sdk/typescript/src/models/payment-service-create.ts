import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { fieldSchema, type Field } from "./field.js";
import { active1Schema, type Active1 } from "./unions/active1.js";
import { merchantProfile2Schema, type MerchantProfile2 } from "./unions/merchant-profile2.js";
import { networkTokensEnabledSchema, type NetworkTokensEnabled } from "./unions/network-tokens-enabled.js";
import { openLoopSchema, type OpenLoop } from "./unions/open-loop.js";
import {
  paymentMethodTokenizationEnabledSchema,
  type PaymentMethodTokenizationEnabled,
} from "./unions/payment-method-tokenization-enabled.js";
import { positionSchema, type Position } from "./unions/position.js";
import { reportingFieldsSchema, type ReportingFields } from "./unions/reporting-fields.js";

/** Request body for activating a payment service */
export type PaymentServiceCreate = {
  /** The display name for the payment service. */
  displayName: string;
  /** The definition ID of the service to configure. */
  paymentServiceDefinitionId: string;
  /**
   * The non-secret credential fields that have been configured for this payment service. Any secret
   * fields are omitted.
   */
  fields: Field[];
  /**
   * The non-secret reporting fields that have been configured for this payment service. Any secret
   * fields are omitted.
   */
  reportingFields?: ReportingFields;
  /** Deprecated field used to define the order in which to process payment services */
  position?: Position;
  /**
   * A list of currencies for which this service is enabled, in ISO 4217 three-letter code format.
   */
  acceptedCurrencies: string[];
  /** A list of countries for which this service is enabled, in ISO two-letter code format. */
  acceptedCountries: string[];
  /** Defines if this payment service is currently active. */
  active?: Active1;
  /** Defines if this payment service has 3DS enabled. @default false */
  threeDSecureEnabled?: boolean;
  /**
   * An object containing a key for each supported card schemes, and for each key an object with the
   * 3DS profile for this service for that scheme.
   */
  merchantProfile?: MerchantProfile2;
  /** Defines if this payment service support payment method tokenization. */
  paymentMethodTokenizationEnabled?: PaymentMethodTokenizationEnabled;
  /** Defines if this payment service supports network tokens. */
  networkTokensEnabled?: NetworkTokensEnabled;
  /** Defines if this payment service is open loop. */
  openLoop?: OpenLoop;
  /** Defines if this payment service has settlement reporting enabled. @default false */
  settlementReportingEnabled?: boolean;
  /** Defines if this payment service has refund ingestion enabled. @default false */
  refundIngestionEnabled?: boolean;
};

export const paymentServiceCreateSchema: Schema<PaymentServiceCreate> = s.object<PaymentServiceCreate>({
  displayName: s.string(),
  paymentServiceDefinitionId: s.string(),
  fields: s.array(s.lazy(() => fieldSchema)),
  reportingFields: s.optional(s.lazy(() => reportingFieldsSchema)),
  position: s.optional(s.lazy(() => positionSchema)),
  acceptedCurrencies: s.array(s.string()),
  acceptedCountries: s.array(s.string()),
  active: s.optional(s.lazy(() => active1Schema)),
  threeDSecureEnabled: s.defaulted(s.boolean(), false),
  merchantProfile: s.optional(s.lazy(() => merchantProfile2Schema)),
  paymentMethodTokenizationEnabled: s.optional(s.lazy(() => paymentMethodTokenizationEnabledSchema)),
  networkTokensEnabled: s.optional(s.lazy(() => networkTokensEnabledSchema)),
  openLoop: s.optional(s.lazy(() => openLoopSchema)),
  settlementReportingEnabled: s.defaulted(s.boolean(), false),
  refundIngestionEnabled: s.defaulted(s.boolean(), false),
  _keysMap: {
    displayName: "display_name",
    paymentServiceDefinitionId: "payment_service_definition_id",
    reportingFields: "reporting_fields",
    acceptedCurrencies: "accepted_currencies",
    acceptedCountries: "accepted_countries",
    threeDSecureEnabled: "three_d_secure_enabled",
    merchantProfile: "merchant_profile",
    paymentMethodTokenizationEnabled: "payment_method_tokenization_enabled",
    networkTokensEnabled: "network_tokens_enabled",
    openLoop: "open_loop",
    settlementReportingEnabled: "settlement_reporting_enabled",
    refundIngestionEnabled: "refund_ingestion_enabled",
  },
});
