import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
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
import { paymentLinkCreate1Schema, type PaymentLinkCreate1 } from "../models/payment-link-create1.js";
import { paymentLinkSchema, type PaymentLink } from "../models/payment-link.js";
import { paymentLinksSchema, type PaymentLinks } from "../models/payment-links.js";
import { amountEq1Schema, type AmountEq1 } from "../models/unions/amount-eq1.js";
import { amountGte1Schema, type AmountGte1 } from "../models/unions/amount-gte1.js";
import { amountLte1Schema, type AmountLte1 } from "../models/unions/amount-lte1.js";
import { buyerSearchSchema, type BuyerSearch } from "../models/unions/buyer-search.js";
import { createdAtGte3Schema, type CreatedAtGte3 } from "../models/unions/created-at-gte3.js";
import { createdAtLte3Schema, type CreatedAtLte3 } from "../models/unions/created-at-lte3.js";
import { currency17Schema, type Currency17 } from "../models/unions/currency17.js";
import { cursorSchema, type Cursor } from "../models/unions/cursor.js";
import { status6Schema, type Status6 } from "../models/unions/status6.js";
import { updatedAtGte2Schema, type UpdatedAtGte2 } from "../models/unions/updated-at-gte2.js";
import { updatedAtLte2Schema, type UpdatedAtLte2 } from "../models/unions/updated-at-lte2.js";
import {
  xGr4VyMerchantAccountIdSchema,
  type XGr4VyMerchantAccountId,
} from "../models/unions/xgr4-vy-merchant-account-id.js";
import type { Servers } from "../servers.js";

/**
 * Manage payment links.
 */
export class PaymentLinksApi {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Add a payment link
   *
   * @remarks
   * Create a new payment link.
   *
   * @returns Successful Response
   *
   * @throws {@link PaymentLinksApi.AddPaymentLinkError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link Gr4VyError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  addPaymentLink(
    request: PaymentLinksApi.AddPaymentLinkRequest,
    options?: RequestOptions,
  ): ApiPromise<PaymentLink, PaymentLinksApi.AddPaymentLinkError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/payment-links"),
        auth: this.#auth.oAuth2PasswordBearer,
        pathParams: [],
        query: [],
        headers: [
          {
            name: "x-gr4vy-merchant-account-id",
            value: request.xGr4VyMerchantAccountId,
            schema: s.optional(s.lazy(() => xGr4VyMerchantAccountIdSchema)),
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "json", value: request.body, schema: paymentLinkCreate1Schema },
      },
      {
        success: { kind: "json", schema: paymentLinkSchema },
        errorFactory: PaymentLinksApi.AddPaymentLinkError,
      },
      options,
    );
  }

  /**
   * Expire a payment link
   *
   * @remarks
   * Expire an existing payment link.
   *
   * @returns Successful Response
   *
   * @throws {@link PaymentLinksApi.ExpirePaymentLinkError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link Gr4VyError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  expirePaymentLink(
    request: PaymentLinksApi.ExpirePaymentLinkRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, PaymentLinksApi.ExpirePaymentLinkError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/payment-links/{payment_link_id}/expire"),
        auth: this.#auth.oAuth2PasswordBearer,
        pathParams: [{ name: "payment_link_id", value: request.paymentLinkId, schema: s.string() }],
        query: [],
        headers: [
          {
            name: "x-gr4vy-merchant-account-id",
            value: request.xGr4VyMerchantAccountId,
            schema: s.optional(s.lazy(() => xGr4VyMerchantAccountIdSchema)),
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: PaymentLinksApi.ExpirePaymentLinkError,
      },
      options,
    );
  }

  /**
   * Get payment link
   *
   * @remarks
   * Fetch the details for a payment link.
   *
   * @returns Successful Response
   *
   * @throws {@link PaymentLinksApi.GetPaymentLinkError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link Gr4VyError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getPaymentLink(
    request: PaymentLinksApi.GetPaymentLinkRequest,
    options?: RequestOptions,
  ): ApiPromise<PaymentLink, PaymentLinksApi.GetPaymentLinkError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/payment-links/{payment_link_id}"),
        auth: this.#auth.oAuth2PasswordBearer,
        pathParams: [{ name: "payment_link_id", value: request.paymentLinkId, schema: s.string() }],
        query: [],
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
        success: { kind: "json", schema: paymentLinkSchema },
        errorFactory: PaymentLinksApi.GetPaymentLinkError,
      },
      options,
    );
  }

  /**
   * List all payment links
   *
   * @remarks
   * List all created payment links.
   *
   * @returns Successful Response
   *
   * @throws {@link PaymentLinksApi.ListPaymentLinksError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link Gr4VyError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listPaymentLinks(
    request: PaymentLinksApi.ListPaymentLinksRequest,
    options?: RequestOptions,
  ): ApiPromise<PaymentLinks, PaymentLinksApi.ListPaymentLinksError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/payment-links"),
        auth: this.#auth.oAuth2PasswordBearer,
        pathParams: [],
        query: [
          { name: "cursor", value: request.cursor, schema: s.optional(s.lazy(() => cursorSchema)) },
          { name: "limit", value: request.limit, schema: s.defaulted(s.int(), 20) },
          {
            name: "created_at_lte",
            value: request.createdAtLte,
            schema: s.optional(s.lazy(() => createdAtLte3Schema)),
          },
          {
            name: "created_at_gte",
            value: request.createdAtGte,
            schema: s.optional(s.lazy(() => createdAtGte3Schema)),
          },
          {
            name: "updated_at_lte",
            value: request.updatedAtLte,
            schema: s.optional(s.lazy(() => updatedAtLte2Schema)),
          },
          {
            name: "updated_at_gte",
            value: request.updatedAtGte,
            schema: s.optional(s.lazy(() => updatedAtGte2Schema)),
          },
          { name: "currency", value: request.currency, schema: s.optional(s.lazy(() => currency17Schema)) },
          { name: "amount_eq", value: request.amountEq, schema: s.optional(s.lazy(() => amountEq1Schema)) },
          {
            name: "amount_gte",
            value: request.amountGte,
            schema: s.optional(s.lazy(() => amountGte1Schema)),
          },
          {
            name: "amount_lte",
            value: request.amountLte,
            schema: s.optional(s.lazy(() => amountLte1Schema)),
          },
          { name: "status", value: request.status, schema: s.optional(s.lazy(() => status6Schema)) },
          {
            name: "buyer_search",
            value: request.buyerSearch,
            schema: s.optional(s.lazy(() => buyerSearchSchema)),
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
        success: { kind: "json", schema: paymentLinksSchema },
        errorFactory: PaymentLinksApi.ListPaymentLinksError,
      },
      options,
    );
  }
}

export namespace PaymentLinksApi {
  export type AddPaymentLinkRequest = {
    /** The ID of the merchant account to use for this request. */
    xGr4VyMerchantAccountId?: XGr4VyMerchantAccountId;
    body: PaymentLinkCreate1;
  };

  export class AddPaymentLinkError extends ApiError {
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

    static readonly errors: ErrorDecoders<AddPaymentLinkError> = [
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

  export type ExpirePaymentLinkRequest = {
    /** The unique identifier for the payment link. */
    paymentLinkId: string;
    /** The ID of the merchant account to use for this request. */
    xGr4VyMerchantAccountId?: XGr4VyMerchantAccountId;
  };

  export class ExpirePaymentLinkError extends ApiError {
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

    static readonly errors: ErrorDecoders<ExpirePaymentLinkError> = [
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

  export type GetPaymentLinkRequest = {
    /** The unique identifier for the payment link. */
    paymentLinkId: string;
    /** The ID of the merchant account to use for this request. */
    xGr4VyMerchantAccountId?: XGr4VyMerchantAccountId;
  };

  export class GetPaymentLinkError extends ApiError {
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

    static readonly errors: ErrorDecoders<GetPaymentLinkError> = [
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

  export type ListPaymentLinksRequest = {
    /** A pointer to the page of results to return. */
    cursor?: Cursor;
    /** The maximum number of items that are returned. @default 20 */
    limit?: number;
    /**
     * Filters the results to only payment links created before this ISO date-time string. The time
     * zone must be included. Ensure that the date-time string is URL encoded, e.g.
     * `2022-01-01T12:00:00+08:00` must be encoded as `2022-01-01T12%3A00%3A00%2B08%3A00`.
     */
    createdAtLte?: CreatedAtLte3;
    /**
     * Filters the results to only payment links created after this ISO date-time string. The time
     * zone must be included. Ensure that the date-time string is URL encoded, e.g.
     * `2022-01-01T12:00:00+08:00` must be encoded as `2022-01-01T12%3A00%3A00%2B08%3A00`.
     */
    createdAtGte?: CreatedAtGte3;
    /**
     * Filters the results to only payment links updated before this ISO date-time string. The time
     * zone must be included. Ensure that the date-time string is URL encoded, e.g.
     * `2022-01-01T12:00:00+08:00` must be encoded as `2022-01-01T12%3A00%3A00%2B08%3A00`.
     */
    updatedAtLte?: UpdatedAtLte2;
    /**
     * Filters the results to only payment links updated after this ISO date-time string. The time
     * zone must be included. Ensure that the date-time string is URL encoded, e.g.
     * `2022-01-01T12:00:00+08:00` must be encoded as `2022-01-01T12%3A00%3A00%2B08%3A00`.
     */
    updatedAtGte?: UpdatedAtGte2;
    /**
     * Filters for payment links that have matching `currency` values. The `currency` values
     * provided must be formatted as 3-letter ISO currency codes.
     */
    currency?: Currency17;
    /** Filters for payment links that have an `amount` equal to this value. */
    amountEq?: AmountEq1;
    /** Filters for payment links that have an `amount` greater than or equal to this value. */
    amountGte?: AmountGte1;
    /** Filters for payment links that have an `amount` less than or equal to this value. */
    amountLte?: AmountLte1;
    /**
     * Filters the results to only the payment links that have a `status` that matches with any of
     * the provided status values.
     */
    status?: Status6;
    /**
     * Filters the results to only get the items for which some of the buyer data contains exactly
     * the provided `buyer_search` values.
     */
    buyerSearch?: BuyerSearch;
    /** The ID of the merchant account to use for this request. */
    xGr4VyMerchantAccountId?: XGr4VyMerchantAccountId;
  };

  export class ListPaymentLinksError extends ApiError {
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

    static readonly errors: ErrorDecoders<ListPaymentLinksError> = [
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
