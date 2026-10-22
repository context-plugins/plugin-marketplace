import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import * as s from "../core/validation/index.js";
import { error400Schema, type Error400 } from "../models/error400.js";
import { error401Schema, type Error401 } from "../models/error401.js";
import { error403Schema, type Error403 } from "../models/error403.js";
import { error404Schema, type Error404 } from "../models/error404.js";
import { error405Schema, type Error405 } from "../models/error405.js";
import { error409Schema, type Error409 } from "../models/error409.js";
import { error425Schema, type Error425 } from "../models/error425.js";
import { error429Schema, type Error429 } from "../models/error429.js";
import { error500Schema, type Error500 } from "../models/error500.js";
import { error502Schema, type Error502 } from "../models/error502.js";
import { error504Schema, type Error504 } from "../models/error504.js";
import { httpValidationErrorSchema, type HttpValidationError } from "../models/http-validation-error.js";
import {
  metricsExplorerMetric3Schema,
  type MetricsExplorerMetric3,
} from "../models/metrics-explorer-metric3.js";
import {
  metricsExplorerModule1Schema,
  type MetricsExplorerModule1,
} from "../models/metrics-explorer-module1.js";
import {
  metricsExplorerSource1Schema,
  type MetricsExplorerSource1,
} from "../models/metrics-explorer-source1.js";
import {
  metricsExplorerTotalResponseSchema,
  type MetricsExplorerTotalResponse,
} from "../models/metrics-explorer-total-response.js";
import { moduleResponseSchema, type ModuleResponse } from "../models/module-response.js";
import {
  authenticationOutcomeSchema,
  type AuthenticationOutcome,
} from "../models/unions/authentication-outcome.js";
import { authorizedSchema, type Authorized } from "../models/unions/authorized.js";
import { country4Schema, type Country4 } from "../models/unions/country4.js";
import { currency7Schema, type Currency7 } from "../models/unions/currency7.js";
import { errorCode1Schema, type ErrorCode1 } from "../models/unions/error-code1.js";
import { instrumentType1Schema, type InstrumentType1 } from "../models/unions/instrument-type1.js";
import {
  isSubsequentPayment1Schema,
  type IsSubsequentPayment1,
} from "../models/unions/is-subsequent-payment1.js";
import { liabilityShiftedSchema, type LiabilityShifted } from "../models/unions/liability-shifted.js";
import { merchantInitiated1Schema, type MerchantInitiated1 } from "../models/unions/merchant-initiated1.js";
import { metadata3Schema, type Metadata3 } from "../models/unions/metadata3.js";
import { method121Schema, type Method121 } from "../models/unions/method121.js";
import { paymentMethodBinSchema, type PaymentMethodBin } from "../models/unions/payment-method-bin.js";
import {
  paymentMethodCardIssuerNameSchema,
  type PaymentMethodCardIssuerName,
} from "../models/unions/payment-method-card-issuer-name.js";
import {
  paymentMethodCardTypeSchema,
  type PaymentMethodCardType,
} from "../models/unions/payment-method-card-type.js";
import {
  paymentMethodCountrySchema,
  type PaymentMethodCountry,
} from "../models/unions/payment-method-country.js";
import {
  paymentMethodSchemeSchema,
  type PaymentMethodScheme,
} from "../models/unions/payment-method-scheme.js";
import { paymentServiceId2Schema, type PaymentServiceId2 } from "../models/unions/payment-service-id2.js";
import { paymentSourceSchema, type PaymentSource } from "../models/unions/payment-source.js";
import { rawResponseCode1Schema, type RawResponseCode1 } from "../models/unions/raw-response-code1.js";
import {
  ruleIdRouteTransactionSchema,
  type RuleIdRouteTransaction,
} from "../models/unions/rule-id-route-transaction.js";
import { ruleIdSkip3DsSchema, type RuleIdSkip3Ds } from "../models/unions/rule-id-skip3-ds.js";
import { ruleVariantIdSchema, type RuleVariantId } from "../models/unions/rule-variant-id.js";
import {
  threeDSecureAuthRespSchema,
  type ThreeDSecureAuthResp,
} from "../models/unions/three-dsecure-auth-resp.js";
import { threeDSecureEciSchema, type ThreeDSecureEci } from "../models/unions/three-dsecure-eci.js";
import { threeDSecureMethodSchema, type ThreeDSecureMethod } from "../models/unions/three-dsecure-method.js";
import {
  xGr4VyMerchantAccountIdSchema,
  type XGr4VyMerchantAccountId,
} from "../models/unions/xgr4-vy-merchant-account-id.js";
import type { Servers } from "../servers.js";

/**
 * Retrieve Insights data.
 */
export class Insights {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Get module's data
   *
   * @remarks
   * Retrieves the data for a module. The data to be used depends on `source`.<br/>**Important:**
   * The currency filter query parameter is **required** when the `metric` is set to `volume`.
   *
   * @returns Successful Response
   *
   * @throws {@link Insights.GetMetricsExplorerModuleError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link Gr4VyError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getMetricsExplorerModule(
    request: Insights.GetMetricsExplorerModuleRequest,
    options?: RequestOptions,
  ): ApiPromise<ModuleResponse[], Insights.GetMetricsExplorerModuleError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/metrics-explorer/{source}/metrics/{metric}/modules/{module}"),
        auth: this.#auth.oAuth2PasswordBearer,
        pathParams: [
          { name: "source", value: request.source, schema: metricsExplorerSource1Schema },
          { name: "metric", value: request.metric, schema: metricsExplorerMetric3Schema },
          { name: "module", value: request.module, schema: metricsExplorerModule1Schema },
        ],
        query: [
          { name: "datetime_range", value: request.datetimeRange, schema: s.string() },
          {
            name: "authentication_outcome",
            value: request.authenticationOutcome,
            schema: s.optional(s.lazy(() => authenticationOutcomeSchema)),
          },
          {
            name: "authorized",
            value: request.authorized,
            schema: s.optional(s.lazy(() => authorizedSchema)),
          },
          { name: "country", value: request.country, schema: s.optional(s.lazy(() => country4Schema)) },
          { name: "currency", value: request.currency, schema: s.optional(s.lazy(() => currency7Schema)) },
          {
            name: "error_code",
            value: request.errorCode,
            schema: s.optional(s.lazy(() => errorCode1Schema)),
          },
          {
            name: "instrument_type",
            value: request.instrumentType,
            schema: s.optional(s.lazy(() => instrumentType1Schema)),
          },
          {
            name: "is_subsequent_payment",
            value: request.isSubsequentPayment,
            schema: s.optional(s.lazy(() => isSubsequentPayment1Schema)),
          },
          {
            name: "liability_shifted",
            value: request.liabilityShifted,
            schema: s.optional(s.lazy(() => liabilityShiftedSchema)),
          },
          {
            name: "merchant_initiated",
            value: request.merchantInitiated,
            schema: s.optional(s.lazy(() => merchantInitiated1Schema)),
          },
          { name: "metadata", value: request.metadata, schema: s.optional(s.lazy(() => metadata3Schema)) },
          { name: "method", value: request.method, schema: s.optional(s.lazy(() => method121Schema)) },
          {
            name: "payment_method_bin",
            value: request.paymentMethodBin,
            schema: s.optional(s.lazy(() => paymentMethodBinSchema)),
          },
          {
            name: "payment_method_card_issuer_name",
            value: request.paymentMethodCardIssuerName,
            schema: s.optional(s.lazy(() => paymentMethodCardIssuerNameSchema)),
          },
          {
            name: "payment_method_card_type",
            value: request.paymentMethodCardType,
            schema: s.optional(s.lazy(() => paymentMethodCardTypeSchema)),
          },
          {
            name: "payment_method_country",
            value: request.paymentMethodCountry,
            schema: s.optional(s.lazy(() => paymentMethodCountrySchema)),
          },
          {
            name: "payment_method_scheme",
            value: request.paymentMethodScheme,
            schema: s.optional(s.lazy(() => paymentMethodSchemeSchema)),
          },
          {
            name: "payment_service_id",
            value: request.paymentServiceId,
            schema: s.optional(s.lazy(() => paymentServiceId2Schema)),
          },
          {
            name: "payment_source",
            value: request.paymentSource,
            schema: s.optional(s.lazy(() => paymentSourceSchema)),
          },
          {
            name: "raw_response_code",
            value: request.rawResponseCode,
            schema: s.optional(s.lazy(() => rawResponseCode1Schema)),
          },
          {
            name: "rule_id_route_transaction",
            value: request.ruleIdRouteTransaction,
            schema: s.optional(s.lazy(() => ruleIdRouteTransactionSchema)),
          },
          {
            name: "rule_id_skip_3ds",
            value: request.ruleIdSkip3Ds,
            schema: s.optional(s.lazy(() => ruleIdSkip3DsSchema)),
          },
          {
            name: "rule_variant_id",
            value: request.ruleVariantId,
            schema: s.optional(s.lazy(() => ruleVariantIdSchema)),
          },
          {
            name: "three_d_secure_auth_resp",
            value: request.threeDSecureAuthResp,
            schema: s.optional(s.lazy(() => threeDSecureAuthRespSchema)),
          },
          {
            name: "three_d_secure_eci",
            value: request.threeDSecureEci,
            schema: s.optional(s.lazy(() => threeDSecureEciSchema)),
          },
          {
            name: "three_d_secure_method",
            value: request.threeDSecureMethod,
            schema: s.optional(s.lazy(() => threeDSecureMethodSchema)),
          },
        ],
        headers: [
          {
            name: "x-gr4vy-merchant-account-id",
            value: request.xGr4VyMerchantAccountId,
            schema: s.optional(s.lazy(() => xGr4VyMerchantAccountIdSchema)),
          },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => moduleResponseSchema)) },
        errorFactory: Insights.GetMetricsExplorerModuleError,
      },
      options,
    );
  }

  /**
   * Get totals data
   *
   * @remarks
   * Retrieves the data for the line chart and summary. The data to be used depends on
   * `source`.<br/>**Important:** The currency filter query parameter is **required** when the
   * `metric` is set to `volume`.
   *
   * @returns Successful Response
   *
   * @throws {@link Insights.GetMetricsExplorerTotalsError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link Gr4VyError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getMetricsExplorerTotals(
    request: Insights.GetMetricsExplorerTotalsRequest,
    options?: RequestOptions,
  ): ApiPromise<MetricsExplorerTotalResponse, Insights.GetMetricsExplorerTotalsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/metrics-explorer/{source}/metrics/{metric}/totals"),
        auth: this.#auth.oAuth2PasswordBearer,
        pathParams: [
          { name: "source", value: request.source, schema: metricsExplorerSource1Schema },
          { name: "metric", value: request.metric, schema: metricsExplorerMetric3Schema },
        ],
        query: [
          { name: "datetime_range", value: request.datetimeRange, schema: s.string() },
          {
            name: "authentication_outcome",
            value: request.authenticationOutcome,
            schema: s.optional(s.lazy(() => authenticationOutcomeSchema)),
          },
          {
            name: "authorized",
            value: request.authorized,
            schema: s.optional(s.lazy(() => authorizedSchema)),
          },
          { name: "country", value: request.country, schema: s.optional(s.lazy(() => country4Schema)) },
          { name: "currency", value: request.currency, schema: s.optional(s.lazy(() => currency7Schema)) },
          {
            name: "error_code",
            value: request.errorCode,
            schema: s.optional(s.lazy(() => errorCode1Schema)),
          },
          {
            name: "instrument_type",
            value: request.instrumentType,
            schema: s.optional(s.lazy(() => instrumentType1Schema)),
          },
          {
            name: "is_subsequent_payment",
            value: request.isSubsequentPayment,
            schema: s.optional(s.lazy(() => isSubsequentPayment1Schema)),
          },
          {
            name: "liability_shifted",
            value: request.liabilityShifted,
            schema: s.optional(s.lazy(() => liabilityShiftedSchema)),
          },
          {
            name: "merchant_initiated",
            value: request.merchantInitiated,
            schema: s.optional(s.lazy(() => merchantInitiated1Schema)),
          },
          { name: "metadata", value: request.metadata, schema: s.optional(s.lazy(() => metadata3Schema)) },
          { name: "method", value: request.method, schema: s.optional(s.lazy(() => method121Schema)) },
          {
            name: "payment_method_bin",
            value: request.paymentMethodBin,
            schema: s.optional(s.lazy(() => paymentMethodBinSchema)),
          },
          {
            name: "payment_method_card_issuer_name",
            value: request.paymentMethodCardIssuerName,
            schema: s.optional(s.lazy(() => paymentMethodCardIssuerNameSchema)),
          },
          {
            name: "payment_method_card_type",
            value: request.paymentMethodCardType,
            schema: s.optional(s.lazy(() => paymentMethodCardTypeSchema)),
          },
          {
            name: "payment_method_country",
            value: request.paymentMethodCountry,
            schema: s.optional(s.lazy(() => paymentMethodCountrySchema)),
          },
          {
            name: "payment_method_scheme",
            value: request.paymentMethodScheme,
            schema: s.optional(s.lazy(() => paymentMethodSchemeSchema)),
          },
          {
            name: "payment_service_id",
            value: request.paymentServiceId,
            schema: s.optional(s.lazy(() => paymentServiceId2Schema)),
          },
          {
            name: "payment_source",
            value: request.paymentSource,
            schema: s.optional(s.lazy(() => paymentSourceSchema)),
          },
          {
            name: "raw_response_code",
            value: request.rawResponseCode,
            schema: s.optional(s.lazy(() => rawResponseCode1Schema)),
          },
          {
            name: "rule_id_route_transaction",
            value: request.ruleIdRouteTransaction,
            schema: s.optional(s.lazy(() => ruleIdRouteTransactionSchema)),
          },
          {
            name: "rule_id_skip_3ds",
            value: request.ruleIdSkip3Ds,
            schema: s.optional(s.lazy(() => ruleIdSkip3DsSchema)),
          },
          {
            name: "rule_variant_id",
            value: request.ruleVariantId,
            schema: s.optional(s.lazy(() => ruleVariantIdSchema)),
          },
          {
            name: "three_d_secure_auth_resp",
            value: request.threeDSecureAuthResp,
            schema: s.optional(s.lazy(() => threeDSecureAuthRespSchema)),
          },
          {
            name: "three_d_secure_eci",
            value: request.threeDSecureEci,
            schema: s.optional(s.lazy(() => threeDSecureEciSchema)),
          },
          {
            name: "three_d_secure_method",
            value: request.threeDSecureMethod,
            schema: s.optional(s.lazy(() => threeDSecureMethodSchema)),
          },
          {
            name: "exclude_previous",
            value: request.excludePrevious,
            schema: s.defaulted(s.boolean(), false),
          },
        ],
        headers: [
          {
            name: "x-gr4vy-merchant-account-id",
            value: request.xGr4VyMerchantAccountId,
            schema: s.optional(s.lazy(() => xGr4VyMerchantAccountIdSchema)),
          },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: metricsExplorerTotalResponseSchema },
        errorFactory: Insights.GetMetricsExplorerTotalsError,
      },
      options,
    );
  }
}

export namespace Insights {
  export type GetMetricsExplorerModuleRequest = {
    /** Source of the data */
    source: MetricsExplorerSource1;
    /** The metric to be calculated */
    metric: MetricsExplorerMetric3;
    /** Module for which to retrieve data */
    module: MetricsExplorerModule1;
    /**
     * Filters the results to the set of data aggregated over the duration of the specified period.
     * The period is truncated at the end to align with bucket sizes. This parameter should be in
     * the format of [ISO 8601 interval](https://en.wikipedia.org/wiki/ISO_8601#Time_intervals)
     * while the duration only format is not accepted. Start and end are either a datetime in ISO
     * 8601 format or a placeholder which is one of the following: `now`, `hour_start` and
     * `hour_end`.
     */
    datetimeRange: string;
    /**
     * Filters the results to only include transactions whose authentication process ended with the
     * specified outcome. This parameter also accepts [the null
     * character](https://en.wikipedia.org/wiki/Null_character) to include transactions that didn't
     * undergo an authentication process.
     */
    authenticationOutcome?: AuthenticationOutcome;
    /**
     * Filters the results to only include transactions that were authorized (1) or declined (0).
     */
    authorized?: Authorized;
    /**
     * Filters the results to only include transactions that were processed in the specified
     * country. The country code should be in the ISO 3166-1 two letter format. This parameter also
     * accepts [the null character](https://en.wikipedia.org/wiki/Null_character) to include
     * transactions that have a null for this field.
     */
    country?: Country4;
    /**
     * Filters the results to only include transactions that were processed in the specified
     * currency. The currency code should be in the ISO 4217 format.<br/>**Important:** This query
     * parameter is **required** when the `metric` is set to `volume`.
     */
    currency?: Currency7;
    /**
     * Filters the results to only include transactions that failed with the specified error code.
     * The error code is a string that describes the reason for the failure. This parameter also
     * accepts [the null character](https://en.wikipedia.org/wiki/Null_character) to include
     * transactions that have a null for this field.
     */
    errorCode?: ErrorCode1;
    /**
     * Filters the results to only include transactions that used the specified instrument type.
     * This parameter also accepts [the null
     * character](https://en.wikipedia.org/wiki/Null_character) to include transactions that have a
     * null for this field.
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
     * Filters the results to only include transactions that were initiated by the merchant. The
     * value should be either "0" (false) or "1" (true).
     */
    merchantInitiated?: MerchantInitiated1;
    /**
     * Filters the results to only include transactions that have the specified metadata. The
     * metadata should be in JSON format and contain a single key-value pair.
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
     * [the null character](https://en.wikipedia.org/wiki/Null_character) to include transactions
     * that have a null for this field.
     */
    paymentMethodBin?: PaymentMethodBin;
    /**
     * Filters the results to only include transactions that were processed with the specified card
     * issuer name. The card issuer name is the name of the bank or financial institution that
     * issued the card used for the transaction. This parameter also accepts [the null
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
     * Filters the results to only include transactions that were processed with a card issued in
     * the specified country. The country code should be in the ISO 3166-1 two letter format. This
     * parameter also accepts [the null character](https://en.wikipedia.org/wiki/Null_character) to
     * include transactions that have a null for this field.
     */
    paymentMethodCountry?: PaymentMethodCountry;
    /**
     * Filters the results to only include transactions that were processed with the specified
     * payment method scheme. This parameter also accepts [the null
     * character](https://en.wikipedia.org/wiki/Null_character) to include transactions that have a
     * null for this field.
     */
    paymentMethodScheme?: PaymentMethodScheme;
    /**
     * Filters the results to only include transactions that were processed with the specified
     * payment service ID. This parameter also accepts [the null
     * character](https://en.wikipedia.org/wiki/Null_character) to include transactions that have a
     * null for this field.
     */
    paymentServiceId?: PaymentServiceId2;
    /**
     * Filters the results to only include transactions that were processed with the specified
     * payment source.
     */
    paymentSource?: PaymentSource;
    /**
     * Filters the results to only include transactions that received the specified raw response
     * code from the payment service. This parameter also accepts [the null
     * character](https://en.wikipedia.org/wiki/Null_character) to include transactions that have a
     * null for this field.
     */
    rawResponseCode?: RawResponseCode1;
    /**
     * Filters the results to only include transactions that were processed with the specified
     * routing rule. The rule ID should be in UUID format. This parameter also accepts [the null
     * character](https://en.wikipedia.org/wiki/Null_character) to include transactions that were
     * not processed by any routing rule.
     */
    ruleIdRouteTransaction?: RuleIdRouteTransaction;
    /**
     * Filters the results to only include transactions that were processed with the specified 3DS
     * rule. The rule ID should be in UUID format. This parameter also accepts [the null
     * character](https://en.wikipedia.org/wiki/Null_character) to include transactions that were
     * not processed by any 3DS rule.
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
    /** The ID of the merchant account to use for this request. */
    xGr4VyMerchantAccountId?: XGr4VyMerchantAccountId;
  };

  export class GetMetricsExplorerModuleError extends ApiError {
    declare readonly payload:
      | Declared<"error400", Error400>
      | Declared<"error401", Error401>
      | Declared<"error403", Error403>
      | Declared<"error404", Error404>
      | Declared<"error405", Error405>
      | Declared<"error409", Error409>
      | Declared<"error425", Error425>
      | Declared<"error429", Error429>
      | Declared<"error500", Error500>
      | Declared<"error502", Error502>
      | Declared<"error504", Error504>
      | Declared<"httpValidationError", HttpValidationError>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetMetricsExplorerModuleError> = [
      { on: 400, kind: "error400", decode: { kind: "json", schema: error400Schema } },
      { on: 401, kind: "error401", decode: { kind: "json", schema: error401Schema } },
      { on: 403, kind: "error403", decode: { kind: "json", schema: error403Schema } },
      { on: 404, kind: "error404", decode: { kind: "json", schema: error404Schema } },
      { on: 405, kind: "error405", decode: { kind: "json", schema: error405Schema } },
      { on: 409, kind: "error409", decode: { kind: "json", schema: error409Schema } },
      { on: 425, kind: "error425", decode: { kind: "json", schema: error425Schema } },
      { on: 429, kind: "error429", decode: { kind: "json", schema: error429Schema } },
      { on: 500, kind: "error500", decode: { kind: "json", schema: error500Schema } },
      { on: 502, kind: "error502", decode: { kind: "json", schema: error502Schema } },
      { on: 504, kind: "error504", decode: { kind: "json", schema: error504Schema } },
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }

  export type GetMetricsExplorerTotalsRequest = {
    /** Source of the data */
    source: MetricsExplorerSource1;
    /** The metric to be calculated */
    metric: MetricsExplorerMetric3;
    /**
     * Filters the results to the set of data aggregated over the duration of the specified period.
     * The period is truncated at the end to align with bucket sizes. This parameter should be in
     * the format of [ISO 8601 interval](https://en.wikipedia.org/wiki/ISO_8601#Time_intervals)
     * while the duration only format is not accepted. Start and end are either a datetime in ISO
     * 8601 format or a placeholder which is one of the following: `now`, `hour_start` and
     * `hour_end`.
     */
    datetimeRange: string;
    /**
     * Filters the results to only include transactions whose authentication process ended with the
     * specified outcome. This parameter also accepts [the null
     * character](https://en.wikipedia.org/wiki/Null_character) to include transactions that didn't
     * undergo an authentication process.
     */
    authenticationOutcome?: AuthenticationOutcome;
    /**
     * Filters the results to only include transactions that were authorized (1) or declined (0).
     */
    authorized?: Authorized;
    /**
     * Filters the results to only include transactions that were processed in the specified
     * country. The country code should be in the ISO 3166-1 two letter format. This parameter also
     * accepts [the null character](https://en.wikipedia.org/wiki/Null_character) to include
     * transactions that have a null for this field.
     */
    country?: Country4;
    /**
     * Filters the results to only include transactions that were processed in the specified
     * currency. The currency code should be in the ISO 4217 format.<br/>**Important:** This query
     * parameter is **required** when the `metric` is set to `volume`.
     */
    currency?: Currency7;
    /**
     * Filters the results to only include transactions that failed with the specified error code.
     * The error code is a string that describes the reason for the failure. This parameter also
     * accepts [the null character](https://en.wikipedia.org/wiki/Null_character) to include
     * transactions that have a null for this field.
     */
    errorCode?: ErrorCode1;
    /**
     * Filters the results to only include transactions that used the specified instrument type.
     * This parameter also accepts [the null
     * character](https://en.wikipedia.org/wiki/Null_character) to include transactions that have a
     * null for this field.
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
     * Filters the results to only include transactions that were initiated by the merchant. The
     * value should be either "0" (false) or "1" (true).
     */
    merchantInitiated?: MerchantInitiated1;
    /**
     * Filters the results to only include transactions that have the specified metadata. The
     * metadata should be in JSON format and contain a single key-value pair.
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
     * [the null character](https://en.wikipedia.org/wiki/Null_character) to include transactions
     * that have a null for this field.
     */
    paymentMethodBin?: PaymentMethodBin;
    /**
     * Filters the results to only include transactions that were processed with the specified card
     * issuer name. The card issuer name is the name of the bank or financial institution that
     * issued the card used for the transaction. This parameter also accepts [the null
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
     * Filters the results to only include transactions that were processed with a card issued in
     * the specified country. The country code should be in the ISO 3166-1 two letter format. This
     * parameter also accepts [the null character](https://en.wikipedia.org/wiki/Null_character) to
     * include transactions that have a null for this field.
     */
    paymentMethodCountry?: PaymentMethodCountry;
    /**
     * Filters the results to only include transactions that were processed with the specified
     * payment method scheme. This parameter also accepts [the null
     * character](https://en.wikipedia.org/wiki/Null_character) to include transactions that have a
     * null for this field.
     */
    paymentMethodScheme?: PaymentMethodScheme;
    /**
     * Filters the results to only include transactions that were processed with the specified
     * payment service ID. This parameter also accepts [the null
     * character](https://en.wikipedia.org/wiki/Null_character) to include transactions that have a
     * null for this field.
     */
    paymentServiceId?: PaymentServiceId2;
    /**
     * Filters the results to only include transactions that were processed with the specified
     * payment source.
     */
    paymentSource?: PaymentSource;
    /**
     * Filters the results to only include transactions that received the specified raw response
     * code from the payment service. This parameter also accepts [the null
     * character](https://en.wikipedia.org/wiki/Null_character) to include transactions that have a
     * null for this field.
     */
    rawResponseCode?: RawResponseCode1;
    /**
     * Filters the results to only include transactions that were processed with the specified
     * routing rule. The rule ID should be in UUID format. This parameter also accepts [the null
     * character](https://en.wikipedia.org/wiki/Null_character) to include transactions that were
     * not processed by any routing rule.
     */
    ruleIdRouteTransaction?: RuleIdRouteTransaction;
    /**
     * Filters the results to only include transactions that were processed with the specified 3DS
     * rule. The rule ID should be in UUID format. This parameter also accepts [the null
     * character](https://en.wikipedia.org/wiki/Null_character) to include transactions that were
     * not processed by any 3DS rule.
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
    /**
     * If set to `true`, aggregations and data from the previous period will not be calculated nor
     * returned.
     *
     * @default false
     */
    excludePrevious?: boolean;
    /** The ID of the merchant account to use for this request. */
    xGr4VyMerchantAccountId?: XGr4VyMerchantAccountId;
  };

  export class GetMetricsExplorerTotalsError extends ApiError {
    declare readonly payload:
      | Declared<"error400", Error400>
      | Declared<"error401", Error401>
      | Declared<"error403", Error403>
      | Declared<"error404", Error404>
      | Declared<"error405", Error405>
      | Declared<"error409", Error409>
      | Declared<"error425", Error425>
      | Declared<"error429", Error429>
      | Declared<"error500", Error500>
      | Declared<"error502", Error502>
      | Declared<"error504", Error504>
      | Declared<"httpValidationError", HttpValidationError>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetMetricsExplorerTotalsError> = [
      { on: 400, kind: "error400", decode: { kind: "json", schema: error400Schema } },
      { on: 401, kind: "error401", decode: { kind: "json", schema: error401Schema } },
      { on: 403, kind: "error403", decode: { kind: "json", schema: error403Schema } },
      { on: 404, kind: "error404", decode: { kind: "json", schema: error404Schema } },
      { on: 405, kind: "error405", decode: { kind: "json", schema: error405Schema } },
      { on: 409, kind: "error409", decode: { kind: "json", schema: error409Schema } },
      { on: 425, kind: "error425", decode: { kind: "json", schema: error425Schema } },
      { on: 429, kind: "error429", decode: { kind: "json", schema: error429Schema } },
      { on: 500, kind: "error500", decode: { kind: "json", schema: error500Schema } },
      { on: 502, kind: "error502", decode: { kind: "json", schema: error502Schema } },
      { on: 504, kind: "error504", decode: { kind: "json", schema: error504Schema } },
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }
}
