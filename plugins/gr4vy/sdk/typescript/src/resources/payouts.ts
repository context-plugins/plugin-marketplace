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
import { payoutCreateSchema, type PayoutCreate } from "../models/payout-create.js";
import { payoutSummariesSchema, type PayoutSummaries } from "../models/payout-summaries.js";
import { payoutSummarySchema, type PayoutSummary } from "../models/payout-summary.js";
import { createdAtGte2Schema, type CreatedAtGte2 } from "../models/unions/created-at-gte2.js";
import { createdAtLte2Schema, type CreatedAtLte2 } from "../models/unions/created-at-lte2.js";
import { cursorSchema, type Cursor } from "../models/unions/cursor.js";
import {
  externalIdentifier43Schema,
  type ExternalIdentifier43,
} from "../models/unions/external-identifier43.js";
import {
  paymentServicePayoutId1Schema,
  type PaymentServicePayoutId1,
} from "../models/unions/payment-service-payout-id1.js";
import { status5Schema, type Status5 } from "../models/unions/status5.js";
import { updatedAtGte1Schema, type UpdatedAtGte1 } from "../models/unions/updated-at-gte1.js";
import { updatedAtLte1Schema, type UpdatedAtLte1 } from "../models/unions/updated-at-lte1.js";
import {
  xGr4VyMerchantAccountIdSchema,
  type XGr4VyMerchantAccountId,
} from "../models/unions/xgr4-vy-merchant-account-id.js";
import type { Servers } from "../servers.js";

/**
 * Payout API.
 */
export class Payouts {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Create a payout
   *
   * @remarks
   * Creates a new payout.
   *
   * @returns Successful Response
   *
   * @throws {@link Payouts.CreatePayoutError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link Gr4VyError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createPayout(
    request: Payouts.CreatePayoutRequest,
    options?: RequestOptions,
  ): ApiPromise<PayoutSummary, Payouts.CreatePayoutError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/payouts"),
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
        body: { kind: "json", value: request.body, schema: payoutCreateSchema },
      },
      {
        success: { kind: "json", schema: payoutSummarySchema },
        errorFactory: Payouts.CreatePayoutError,
      },
      options,
    );
  }

  /**
   * Get a payout
   *
   * @remarks
   * Retrieves a payout.
   *
   * @returns Successful Response
   *
   * @throws {@link Payouts.GetPayoutError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link Gr4VyError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getPayout(
    request: Payouts.GetPayoutRequest,
    options?: RequestOptions,
  ): ApiPromise<PayoutSummary, Payouts.GetPayoutError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/payouts/{payout_id}"),
        auth: this.#auth.oAuth2PasswordBearer,
        pathParams: [{ name: "payout_id", value: request.payoutId, schema: s.string() }],
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
        success: { kind: "json", schema: payoutSummarySchema },
        errorFactory: Payouts.GetPayoutError,
      },
      options,
    );
  }

  /**
   * List payouts created
   *
   * @remarks
   * Returns a list of payouts made.
   *
   * @returns Successful Response
   *
   * @throws {@link Payouts.ListPayoutsError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link Gr4VyError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listPayouts(
    request: Payouts.ListPayoutsRequest,
    options?: RequestOptions,
  ): ApiPromise<PayoutSummaries, Payouts.ListPayoutsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/payouts"),
        auth: this.#auth.oAuth2PasswordBearer,
        pathParams: [],
        query: [
          { name: "cursor", value: request.cursor, schema: s.optional(s.lazy(() => cursorSchema)) },
          { name: "limit", value: request.limit, schema: s.defaulted(s.int(), 20) },
          {
            name: "created_at_lte",
            value: request.createdAtLte,
            schema: s.optional(s.lazy(() => createdAtLte2Schema)),
          },
          {
            name: "created_at_gte",
            value: request.createdAtGte,
            schema: s.optional(s.lazy(() => createdAtGte2Schema)),
          },
          {
            name: "updated_at_lte",
            value: request.updatedAtLte,
            schema: s.optional(s.lazy(() => updatedAtLte1Schema)),
          },
          {
            name: "updated_at_gte",
            value: request.updatedAtGte,
            schema: s.optional(s.lazy(() => updatedAtGte1Schema)),
          },
          {
            name: "external_identifier",
            value: request.externalIdentifier,
            schema: s.optional(s.lazy(() => externalIdentifier43Schema)),
          },
          {
            name: "payment_service_payout_id",
            value: request.paymentServicePayoutId,
            schema: s.optional(s.lazy(() => paymentServicePayoutId1Schema)),
          },
          { name: "status", value: request.status, schema: s.optional(s.lazy(() => status5Schema)) },
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
        success: { kind: "json", schema: payoutSummariesSchema },
        errorFactory: Payouts.ListPayoutsError,
      },
      options,
    );
  }
}

export namespace Payouts {
  export type CreatePayoutRequest = {
    /** The ID of the merchant account to use for this request. */
    xGr4VyMerchantAccountId?: XGr4VyMerchantAccountId;
    body: PayoutCreate;
  };

  export class CreatePayoutError extends ApiError {
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

    static readonly errors: ErrorDecoders<CreatePayoutError> = [
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

  export type GetPayoutRequest = {
    payoutId: string;
    /** The ID of the merchant account to use for this request. */
    xGr4VyMerchantAccountId?: XGr4VyMerchantAccountId;
  };

  export class GetPayoutError extends ApiError {
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

    static readonly errors: ErrorDecoders<GetPayoutError> = [
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

  export type ListPayoutsRequest = {
    /** A pointer to the page of results to return. */
    cursor?: Cursor;
    /** The maximum number of items that are at returned. @default 20 */
    limit?: number;
    /**
     * Filters the results to only payouts created before this ISO date-time string. The time zone
     * must be included. Ensure that the date-time string is URL encoded, e.g.
     * `2022-01-01T12:00:00+08:00` must be encoded as `2022-01-01T12%3A00%3A00%2B08%3A00`.
     */
    createdAtLte?: CreatedAtLte2;
    /**
     * Filters the results to only payouts created after this ISO date-time string. The time zone
     * must be included. Ensure that the date-time string is URL encoded, e.g.
     * `2022-01-01T12:00:00+08:00` must be encoded as `2022-01-01T12%3A00%3A00%2B08%3A00`.
     */
    createdAtGte?: CreatedAtGte2;
    /**
     * Filters the results to only payouts updated before this ISO date-time string. The time zone
     * must be included. Ensure that the date-time string is URL encoded, e.g.
     * `2022-01-01T12:00:00+08:00` must be encoded as `2022-01-01T12%3A00%3A00%2B08%3A00`.
     */
    updatedAtLte?: UpdatedAtLte1;
    /**
     * Filters the results to only payouts updated after this ISO date-time string. The time zone
     * must be included. Ensure that the date-time string is URL encoded, e.g.
     * `2022-01-01T12:00:00+08:00` must be encoded as `2022-01-01T12%3A00%3A00%2B08%3A00`.
     */
    updatedAtGte?: UpdatedAtGte1;
    /**
     * Filters the results to only the payouts that have an `external_identifier` that exactly
     * matches this value.
     */
    externalIdentifier?: ExternalIdentifier43;
    /**
     * Filters the results to only the payouts that have a `payment_service_payout_id` that exactly
     * matches this value.
     */
    paymentServicePayoutId?: PaymentServicePayoutId1;
    /**
     * Filters the results to only the payouts that have a `status` that matches with any of the
     * provided status values.
     */
    status?: Status5;
    /** The ID of the merchant account to use for this request. */
    xGr4VyMerchantAccountId?: XGr4VyMerchantAccountId;
  };

  export class ListPayoutsError extends ApiError {
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

    static readonly errors: ErrorDecoders<ListPayoutsError> = [
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
