import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import * as s from "../core/validation/index.js";
import { cardDetailSchema, type CardDetail } from "../models/card-detail.js";
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
import { amount12Schema, type Amount12 } from "../models/unions/amount12.js";
import { bin2Schema, type Bin2 } from "../models/unions/bin2.js";
import { country15Schema, type Country15 } from "../models/unions/country15.js";
import { intent11Schema, type Intent11 } from "../models/unions/intent11.js";
import {
  isSubsequentPayment3Schema,
  type IsSubsequentPayment3,
} from "../models/unions/is-subsequent-payment3.js";
import { merchantInitiated3Schema, type MerchantInitiated3 } from "../models/unions/merchant-initiated3.js";
import { metadata13Schema, type Metadata13 } from "../models/unions/metadata13.js";
import { paymentMethodId1Schema, type PaymentMethodId1 } from "../models/unions/payment-method-id1.js";
import { paymentSource2Schema, type PaymentSource2 } from "../models/unions/payment-source2.js";
import {
  xGr4VyMerchantAccountIdSchema,
  type XGr4VyMerchantAccountId,
} from "../models/unions/xgr4-vy-merchant-account-id.js";
import type { Servers } from "../servers.js";

/**
 * Returns information about a card.
 */
export class CardDetails {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Get card details
   *
   * @remarks
   * Gets details about a particular card based on the BIN. Use the currency, amount, and other
   * fields to apply any Flow rules that may put requirements on the card.
   *
   * @returns Successful Response
   *
   * @throws {@link CardDetails.GetCardDetailsError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link Gr4VyError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getCardDetails(
    request: CardDetails.GetCardDetailsRequest,
    options?: RequestOptions,
  ): ApiPromise<CardDetail, CardDetails.GetCardDetailsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/card-details"),
        auth: this.#auth.oAuth2PasswordBearer,
        pathParams: [],
        query: [
          { name: "currency", value: request.currency, schema: s.string() },
          { name: "bin", value: request.bin, schema: s.optional(s.lazy(() => bin2Schema)) },
          {
            name: "payment_method_id",
            value: request.paymentMethodId,
            schema: s.optional(s.lazy(() => paymentMethodId1Schema)),
          },
          { name: "country", value: request.country, schema: s.optional(s.lazy(() => country15Schema)) },
          { name: "amount", value: request.amount, schema: s.optional(s.lazy(() => amount12Schema)) },
          { name: "intent", value: request.intent, schema: s.optional(s.lazy(() => intent11Schema)) },
          {
            name: "is_subsequent_payment",
            value: request.isSubsequentPayment,
            schema: s.optional(s.lazy(() => isSubsequentPayment3Schema)),
          },
          {
            name: "merchant_initiated",
            value: request.merchantInitiated,
            schema: s.optional(s.lazy(() => merchantInitiated3Schema)),
          },
          { name: "metadata", value: request.metadata, schema: s.optional(s.lazy(() => metadata13Schema)) },
          {
            name: "payment_source",
            value: request.paymentSource,
            schema: s.optional(s.lazy(() => paymentSource2Schema)),
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
        success: { kind: "json", schema: cardDetailSchema },
        errorFactory: CardDetails.GetCardDetailsError,
      },
      options,
    );
  }
}

export namespace CardDetails {
  export type GetCardDetailsRequest = {
    /** The three-letter ISO currency code. */
    currency: string;
    /** The bank identification number (BIN) of the card. */
    bin?: Bin2;
    /** The ID of the payment method to check, instead of the `bin`. */
    paymentMethodId?: PaymentMethodId1;
    /** The two-letter ISO country code. */
    country?: Country15;
    /** The payment amount in the smallest currency unit. */
    amount?: Amount12;
    /** The transaction intent. */
    intent?: Intent11;
    /** Whether this is a subsequent payment. */
    isSubsequentPayment?: IsSubsequentPayment3;
    /** Whether the transaction is merchant-initiated */
    merchantInitiated?: MerchantInitiated3;
    /** Additional metadata for the transaction in JSON format */
    metadata?: Metadata13;
    /** The source of the transaction payment */
    paymentSource?: PaymentSource2;
    /** The ID of the merchant account to use for this request. */
    xGr4VyMerchantAccountId?: XGr4VyMerchantAccountId;
  };

  export class GetCardDetailsError extends ApiError {
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

    static readonly errors: ErrorDecoders<GetCardDetailsError> = [
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
