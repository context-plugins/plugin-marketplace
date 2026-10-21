import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { acceptedCountriesSchema, type AcceptedCountries } from "./unions/accepted-countries.js";
import { acceptedCurrenciesSchema, type AcceptedCurrencies } from "./unions/accepted-currencies.js";
import { active1Schema, type Active1 } from "./unions/active1.js";
import { displayName8Schema, type DisplayName8 } from "./unions/display-name8.js";
import { fields2Schema, type Fields2 } from "./unions/fields2.js";
import { merchantProfile2Schema, type MerchantProfile2 } from "./unions/merchant-profile2.js";
import { networkTokensEnabledSchema, type NetworkTokensEnabled } from "./unions/network-tokens-enabled.js";
import { openLoopSchema, type OpenLoop } from "./unions/open-loop.js";
import {
  paymentMethodTokenizationEnabledSchema,
  type PaymentMethodTokenizationEnabled,
} from "./unions/payment-method-tokenization-enabled.js";
import { positionSchema, type Position } from "./unions/position.js";
import { reportingFields2Schema, type ReportingFields2 } from "./unions/reporting-fields2.js";
import { threeDSecureEnabledSchema, type ThreeDSecureEnabled } from "./unions/three-dsecure-enabled.js";

/** Request body for updating a Payment Service */
export type PaymentServiceUpdate = {
  /** The display name for the payment service. */
  displayName?: DisplayName8;
  /**
   * The non-secret credential fields that have been configured for this payment service. Any secret
   * fields are omitted.
   */
  fields?: Fields2;
  /**
   * The non-secret reporting fields that have been configured for this payment service. Any secret
   * fields are omitted.
   */
  reportingFields?: ReportingFields2;
  /** Deprecated field used to define the order in which to process payment services */
  position?: Position;
  /**
   * A list of currencies for which this service is enabled, in ISO 4217 three-letter code format.
   */
  acceptedCurrencies?: AcceptedCurrencies;
  /** A list of countries for which this service is enabled, in ISO two-letter code format. */
  acceptedCountries?: AcceptedCountries;
  /** Defines if this payment service is currently active. */
  active?: Active1;
  /** Defines if this payment service has 3DS enabled. */
  threeDSecureEnabled?: ThreeDSecureEnabled;
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

export const paymentServiceUpdateSchema: Schema<PaymentServiceUpdate> = s.object<PaymentServiceUpdate>({
  displayName: s.optional(s.lazy(() => displayName8Schema)),
  fields: s.optional(s.lazy(() => fields2Schema)),
  reportingFields: s.optional(s.lazy(() => reportingFields2Schema)),
  position: s.optional(s.lazy(() => positionSchema)),
  acceptedCurrencies: s.optional(s.lazy(() => acceptedCurrenciesSchema)),
  acceptedCountries: s.optional(s.lazy(() => acceptedCountriesSchema)),
  active: s.optional(s.lazy(() => active1Schema)),
  threeDSecureEnabled: s.optional(s.lazy(() => threeDSecureEnabledSchema)),
  merchantProfile: s.optional(s.lazy(() => merchantProfile2Schema)),
  paymentMethodTokenizationEnabled: s.optional(s.lazy(() => paymentMethodTokenizationEnabledSchema)),
  networkTokensEnabled: s.optional(s.lazy(() => networkTokensEnabledSchema)),
  openLoop: s.optional(s.lazy(() => openLoopSchema)),
  settlementReportingEnabled: s.defaulted(s.boolean(), false),
  refundIngestionEnabled: s.defaulted(s.boolean(), false),
  _keysMap: {
    displayName: "display_name",
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
