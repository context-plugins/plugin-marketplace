import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { authenticationOutcomeSchema, type AuthenticationOutcome } from "./unions/authentication-outcome.js";
import { authorizedSchema, type Authorized } from "./unions/authorized.js";
import { country4Schema, type Country4 } from "./unions/country4.js";
import { currency7Schema, type Currency7 } from "./unions/currency7.js";
import { errorCode1Schema, type ErrorCode1 } from "./unions/error-code1.js";
import { instrumentType1Schema, type InstrumentType1 } from "./unions/instrument-type1.js";
import { isSubsequentPayment1Schema, type IsSubsequentPayment1 } from "./unions/is-subsequent-payment1.js";
import { liabilityShiftedSchema, type LiabilityShifted } from "./unions/liability-shifted.js";
import { merchantInitiated1Schema, type MerchantInitiated1 } from "./unions/merchant-initiated1.js";
import { metadata3Schema, type Metadata3 } from "./unions/metadata3.js";
import { method121Schema, type Method121 } from "./unions/method121.js";
import { paymentMethodBinSchema, type PaymentMethodBin } from "./unions/payment-method-bin.js";
import {
  paymentMethodCardIssuerNameSchema,
  type PaymentMethodCardIssuerName,
} from "./unions/payment-method-card-issuer-name.js";
import {
  paymentMethodCardTypeSchema,
  type PaymentMethodCardType,
} from "./unions/payment-method-card-type.js";
import { paymentMethodCountrySchema, type PaymentMethodCountry } from "./unions/payment-method-country.js";
import { paymentMethodSchemeSchema, type PaymentMethodScheme } from "./unions/payment-method-scheme.js";
import { paymentServiceId2Schema, type PaymentServiceId2 } from "./unions/payment-service-id2.js";
import { paymentSourceSchema, type PaymentSource } from "./unions/payment-source.js";
import { rawResponseCode1Schema, type RawResponseCode1 } from "./unions/raw-response-code1.js";
import {
  ruleIdRouteTransactionSchema,
  type RuleIdRouteTransaction,
} from "./unions/rule-id-route-transaction.js";
import { ruleIdSkip3DsSchema, type RuleIdSkip3Ds } from "./unions/rule-id-skip3-ds.js";
import { ruleVariantIdSchema, type RuleVariantId } from "./unions/rule-variant-id.js";
import { threeDSecureAuthRespSchema, type ThreeDSecureAuthResp } from "./unions/three-dsecure-auth-resp.js";
import { threeDSecureEciSchema, type ThreeDSecureEci } from "./unions/three-dsecure-eci.js";
import { threeDSecureMethodSchema, type ThreeDSecureMethod } from "./unions/three-dsecure-method.js";

export type MetricsExplorerFiltersQueryParams = {
  /**
   * Filters the results to the set of data aggregated over the duration of the specified period.
   * The period is truncated at the end to align with bucket sizes. This parameter should be in the
   * format of [ISO 8601 interval](https://en.wikipedia.org/wiki/ISO_8601#Time_intervals) while the
   * duration only format is not accepted. Start and end are either a datetime in ISO 8601 format or
   * a placeholder which is one of the following: `now`, `hour_start` and `hour_end`.
   */
  datetimeRange: string;
  /**
   * Filters the results to only include transactions whose authentication process ended with the
   * specified outcome. This parameter also accepts [the null
   * character](https://en.wikipedia.org/wiki/Null_character) to include transactions that didn't
   * undergo an authentication process.
   */
  authenticationOutcome?: AuthenticationOutcome;
  /** Filters the results to only include transactions that were authorized (1) or declined (0). */
  authorized?: Authorized;
  /**
   * Filters the results to only include transactions that were processed in the specified country.
   * The country code should be in the ISO 3166-1 two letter format. This parameter also accepts
   * [the null character](https://en.wikipedia.org/wiki/Null_character) to include transactions that
   * have a null for this field.
   */
  country?: Country4;
  /**
   * Filters the results to only include transactions that were processed in the specified currency.
   * The currency code should be in the ISO 4217 format.<br/>**Important:** This query parameter is
   * **required** when the `metric` is set to `volume`.
   */
  currency?: Currency7;
  /**
   * Filters the results to only include transactions that failed with the specified error code. The
   * error code is a string that describes the reason for the failure. This parameter also accepts
   * [the null character](https://en.wikipedia.org/wiki/Null_character) to include transactions that
   * have a null for this field.
   */
  errorCode?: ErrorCode1;
  /**
   * Filters the results to only include transactions that used the specified instrument type. This
   * parameter also accepts [the null character](https://en.wikipedia.org/wiki/Null_character) to
   * include transactions that have a null for this field.
   */
  instrumentType?: InstrumentType1;
  /**
   * Filters the results to only include transactions that are subsequent payments. A subsequent
   * payment is a payment that is made after an initial payment, typically in a subscription or
   * recurring payment scenario. The value should be either "0" (false) or "1" (true).
   */
  isSubsequentPayment?: IsSubsequentPayment1;
  /**
   * Filters the results to only include transactions where liability was shifted (1) or was not
   * shifted (0).
   */
  liabilityShifted?: LiabilityShifted;
  /**
   * Filters the results to only include transactions that were initiated by the merchant. The value
   * should be either "0" (false) or "1" (true).
   */
  merchantInitiated?: MerchantInitiated1;
  /**
   * Filters the results to only include transactions that have the specified metadata. The metadata
   * should be in JSON format and contain a single key-value pair.
   */
  metadata?: Metadata3;
  /**
   * Filters the results to only include transactions that were processed using the specified
   * payment method. This parameter also accepts [the null
   * character](https://en.wikipedia.org/wiki/Null_character) to include transactions that have a
   * null for this field.
   */
  method?: Method121;
  /**
   * Filters the results to only include transactions that used the specified payment method bin.
   * The payment method bin is the first 6 digits of the card number. This parameter also accepts
   * [the null character](https://en.wikipedia.org/wiki/Null_character) to include transactions that
   * have a null for this field.
   */
  paymentMethodBin?: PaymentMethodBin;
  /**
   * Filters the results to only include transactions that were processed with the specified card
   * issuer name. The card issuer name is the name of the bank or financial institution that issued
   * the card used for the transaction. This parameter also accepts [the null
   * character](https://en.wikipedia.org/wiki/Null_character) to include transactions that have a
   * null for this field.
   */
  paymentMethodCardIssuerName?: PaymentMethodCardIssuerName;
  /**
   * Filters the results to only include transactions that used the specified card type. This
   * parameter also accepts [the null character](https://en.wikipedia.org/wiki/Null_character) to
   * include transactions that have a null for this field.
   */
  paymentMethodCardType?: PaymentMethodCardType;
  /**
   * Filters the results to only include transactions that were processed with a card issued in the
   * specified country. The country code should be in the ISO 3166-1 two letter format. This
   * parameter also accepts [the null character](https://en.wikipedia.org/wiki/Null_character) to
   * include transactions that have a null for this field.
   */
  paymentMethodCountry?: PaymentMethodCountry;
  /**
   * Filters the results to only include transactions that were processed with the specified payment
   * method scheme. This parameter also accepts [the null
   * character](https://en.wikipedia.org/wiki/Null_character) to include transactions that have a
   * null for this field.
   */
  paymentMethodScheme?: PaymentMethodScheme;
  /**
   * Filters the results to only include transactions that were processed with the specified payment
   * service ID. This parameter also accepts [the null
   * character](https://en.wikipedia.org/wiki/Null_character) to include transactions that have a
   * null for this field.
   */
  paymentServiceId?: PaymentServiceId2;
  /**
   * Filters the results to only include transactions that were processed with the specified payment
   * source.
   */
  paymentSource?: PaymentSource;
  /**
   * Filters the results to only include transactions that received the specified raw response code
   * from the payment service. This parameter also accepts [the null
   * character](https://en.wikipedia.org/wiki/Null_character) to include transactions that have a
   * null for this field.
   */
  rawResponseCode?: RawResponseCode1;
  /**
   * Filters the results to only include transactions that were processed with the specified routing
   * rule. The rule ID should be in UUID format. This parameter also accepts [the null
   * character](https://en.wikipedia.org/wiki/Null_character) to include transactions that were not
   * processed by any routing rule.
   */
  ruleIdRouteTransaction?: RuleIdRouteTransaction;
  /**
   * Filters the results to only include transactions that were processed with the specified 3DS
   * rule. The rule ID should be in UUID format. This parameter also accepts [the null
   * character](https://en.wikipedia.org/wiki/Null_character) to include transactions that were not
   * processed by any 3DS rule.
   */
  ruleIdSkip3Ds?: RuleIdSkip3Ds;
  /**
   * Filters the results to only include transactions that were processed with the specified split
   * routing rule outcome variant. The variant ID should be in UUID format.
   */
  ruleVariantId?: RuleVariantId;
  /**
   * Filters the results to only include transactions that received the specified response during
   * 3DS authentication. This parameter also accepts [the null
   * character](https://en.wikipedia.org/wiki/Null_character) to include transactions that have a
   * null for this field.
   */
  threeDSecureAuthResp?: ThreeDSecureAuthResp;
  /**
   * Filters the results to only include transactions that received the specified ECI during 3DS
   * authentication. This parameter also accepts [the null
   * character](https://en.wikipedia.org/wiki/Null_character) to include transactions that have a
   * null for this field.
   */
  threeDSecureEci?: ThreeDSecureEci;
  /**
   * Filters the results to only include transactions that underwent 3DS authentication with the
   * specified method. This parameter also accepts [the null
   * character](https://en.wikipedia.org/wiki/Null_character) to include transactions that didn't
   * undergo 3DS authentication.
   */
  threeDSecureMethod?: ThreeDSecureMethod;
};

export const metricsExplorerFiltersQueryParamsSchema: Schema<MetricsExplorerFiltersQueryParams> =
  s.object<MetricsExplorerFiltersQueryParams>({
    datetimeRange: s.string(),
    authenticationOutcome: s.optional(s.lazy(() => authenticationOutcomeSchema)),
    authorized: s.optional(s.lazy(() => authorizedSchema)),
    country: s.optional(s.lazy(() => country4Schema)),
    currency: s.optional(s.lazy(() => currency7Schema)),
    errorCode: s.optional(s.lazy(() => errorCode1Schema)),
    instrumentType: s.optional(s.lazy(() => instrumentType1Schema)),
    isSubsequentPayment: s.optional(s.lazy(() => isSubsequentPayment1Schema)),
    liabilityShifted: s.optional(s.lazy(() => liabilityShiftedSchema)),
    merchantInitiated: s.optional(s.lazy(() => merchantInitiated1Schema)),
    metadata: s.optional(s.lazy(() => metadata3Schema)),
    method: s.optional(s.lazy(() => method121Schema)),
    paymentMethodBin: s.optional(s.lazy(() => paymentMethodBinSchema)),
    paymentMethodCardIssuerName: s.optional(s.lazy(() => paymentMethodCardIssuerNameSchema)),
    paymentMethodCardType: s.optional(s.lazy(() => paymentMethodCardTypeSchema)),
    paymentMethodCountry: s.optional(s.lazy(() => paymentMethodCountrySchema)),
    paymentMethodScheme: s.optional(s.lazy(() => paymentMethodSchemeSchema)),
    paymentServiceId: s.optional(s.lazy(() => paymentServiceId2Schema)),
    paymentSource: s.optional(s.lazy(() => paymentSourceSchema)),
    rawResponseCode: s.optional(s.lazy(() => rawResponseCode1Schema)),
    ruleIdRouteTransaction: s.optional(s.lazy(() => ruleIdRouteTransactionSchema)),
    ruleIdSkip3Ds: s.optional(s.lazy(() => ruleIdSkip3DsSchema)),
    ruleVariantId: s.optional(s.lazy(() => ruleVariantIdSchema)),
    threeDSecureAuthResp: s.optional(s.lazy(() => threeDSecureAuthRespSchema)),
    threeDSecureEci: s.optional(s.lazy(() => threeDSecureEciSchema)),
    threeDSecureMethod: s.optional(s.lazy(() => threeDSecureMethodSchema)),
    _keysMap: {
      datetimeRange: "datetime_range",
      authenticationOutcome: "authentication_outcome",
      errorCode: "error_code",
      instrumentType: "instrument_type",
      isSubsequentPayment: "is_subsequent_payment",
      liabilityShifted: "liability_shifted",
      merchantInitiated: "merchant_initiated",
      paymentMethodBin: "payment_method_bin",
      paymentMethodCardIssuerName: "payment_method_card_issuer_name",
      paymentMethodCardType: "payment_method_card_type",
      paymentMethodCountry: "payment_method_country",
      paymentMethodScheme: "payment_method_scheme",
      paymentServiceId: "payment_service_id",
      paymentSource: "payment_source",
      rawResponseCode: "raw_response_code",
      ruleIdRouteTransaction: "rule_id_route_transaction",
      ruleIdSkip3Ds: "rule_id_skip_3ds",
      ruleVariantId: "rule_variant_id",
      threeDSecureAuthResp: "three_d_secure_auth_resp",
      threeDSecureEci: "three_d_secure_eci",
      threeDSecureMethod: "three_d_secure_method",
    },
  });
