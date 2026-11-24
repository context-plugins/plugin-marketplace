import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorSchema, type Error } from "../models/error.js";
import {
  paymentsRefundRequestInternalSchema,
  type PaymentsRefundRequest,
} from "../models/payments-refund-request.js";
import {
  paymentsRefundsResponseInternalSchema,
  type PaymentsRefundsResponse,
} from "../models/payments-refunds-response.js";
import {
  refundRazorpayRefundsApiInternalSchema,
  type RefundRazorpayRefundsApi,
} from "../models/refund-razorpay-refunds-api.js";
import { refundsRequestInternalSchema, type RefundsRequest } from "../models/refunds-request.js";
import { refundsResponseInternalSchema, type RefundsResponse } from "../models/refunds-response.js";
import type { Servers } from "../servers.js";

/**
 * Refunds return captured payment amounts to customers. Normal refunds take 5-7 business days.
 * Instant (optimum) refunds settle immediately but may fall back to normal. Use
 * X-Refund-Idempotency header to safely retry without duplicates.
 */
export class Refunds {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Create a refund
   *
   * @remarks
   * Initiate a full or partial refund for a captured payment. Use speed=normal (default, 5-7
   * business days) or speed=optimum for instant refund (falls back to normal if unavailable). Use
   * the X-Refund-Idempotency header with a unique key (>=10 chars) to safely retry without
   * duplicate refunds.
   *
   * @returns Refund initiated.
   *
   * @throws {@link Refunds.CreateRefundError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link CurlecError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createRefund(
    request: Refunds.CreateRefundRequest,
    options?: RequestOptions,
  ): ApiPromise<RefundRazorpayRefundsApi, Refunds.CreateRefundError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/payments/{id}/refund"),
        auth: anyAuth(
          this.#auth.basicAuth,
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials.forScopes("read_only"),
        ),
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => paymentsRefundRequestInternalSchema)),
        },
      },
      {
        success: { kind: "json", schema: refundRazorpayRefundsApiInternalSchema },
        errorFactory: Refunds.CreateRefundError,
      },
      options,
    );
  }

  /**
   * Fetch all refunds
   *
   * @remarks
   * Retrieve a paginated list of all refunds across payments. Maximum 100 per call.
   *
   * @returns Collection of refunds.
   *
   * @throws {@link Refunds.FetchAllRefundsError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link CurlecError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  fetchAllRefunds(
    request: Refunds.FetchAllRefundsRequest = {},
    options?: RequestOptions,
  ): ApiPromise<RefundsResponse, Refunds.FetchAllRefundsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/refunds"),
        auth: anyAuth(
          this.#auth.basicAuth,
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials.forScopes("read_only"),
        ),
        pathParams: [],
        query: [
          { name: "from", value: request.from, schema: s.optional(s.int()) },
          { name: "to", value: request.to, schema: s.optional(s.int()) },
          { name: "count", value: request.count, schema: s.defaulted(s.int(), 10) },
          { name: "skip", value: request.skip, schema: s.defaulted(s.int(), 0) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: refundsResponseInternalSchema },
        errorFactory: Refunds.FetchAllRefundsError,
      },
      options,
    );
  }

  /**
   * Fetch a specific refund for a payment
   *
   * @remarks
   * Retrieve a specific refund by its ID scoped to a particular payment.
   *
   * @returns Refund details.
   *
   * @throws {@link Refunds.FetchPaymentRefundError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link CurlecError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  fetchPaymentRefund(
    request: Refunds.FetchPaymentRefundRequest,
    options?: RequestOptions,
  ): ApiPromise<RefundRazorpayRefundsApi, Refunds.FetchPaymentRefundError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/payments/{payment_id}/refunds/{refund_id}"),
        auth: anyAuth(
          this.#auth.basicAuth,
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials.forScopes("read_only"),
        ),
        pathParams: [
          { name: "payment_id", value: request.paymentId, schema: s.string() },
          { name: "refund_id", value: request.refundId, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: refundRazorpayRefundsApiInternalSchema },
        errorFactory: Refunds.FetchPaymentRefundError,
      },
      options,
    );
  }

  /**
   * Fetch refunds for a payment
   *
   * @remarks
   * Retrieve all refunds issued against a specific payment.
   *
   * @returns Collection of refunds for the payment.
   *
   * @throws {@link Refunds.FetchPaymentRefundsError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link CurlecError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  fetchPaymentRefunds(
    request: Refunds.FetchPaymentRefundsRequest,
    options?: RequestOptions,
  ): ApiPromise<PaymentsRefundsResponse, Refunds.FetchPaymentRefundsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/payments/{payment_id}/refunds"),
        auth: anyAuth(
          this.#auth.basicAuth,
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials.forScopes("read_only"),
        ),
        pathParams: [{ name: "payment_id", value: request.paymentId, schema: s.string() }],
        query: [
          { name: "from", value: request.from, schema: s.optional(s.int()) },
          { name: "to", value: request.to, schema: s.optional(s.int()) },
          { name: "count", value: request.count, schema: s.defaulted(s.int(), 10) },
          { name: "skip", value: request.skip, schema: s.defaulted(s.int(), 0) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: paymentsRefundsResponseInternalSchema },
        errorFactory: Refunds.FetchPaymentRefundsError,
      },
      options,
    );
  }

  /**
   * Fetch refund by ID
   *
   * @remarks
   * Retrieve full details and current status of a specific refund.
   *
   * @returns Refund details.
   *
   * @throws {@link Refunds.FetchRefundError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link CurlecError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  fetchRefund(
    request: Refunds.FetchRefundRequest,
    options?: RequestOptions,
  ): ApiPromise<RefundRazorpayRefundsApi, Refunds.FetchRefundError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/refunds/{id}"),
        auth: anyAuth(
          this.#auth.basicAuth,
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials.forScopes("read_only"),
        ),
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: refundRazorpayRefundsApiInternalSchema },
        errorFactory: Refunds.FetchRefundError,
      },
      options,
    );
  }

  /**
   * Update a refund
   *
   * @remarks
   * Update the notes field of a refund. Only notes can be modified.
   *
   * @returns Updated refund.
   *
   * @throws {@link Refunds.UpdateRefundError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link CurlecError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateRefund(
    request: Refunds.UpdateRefundRequest,
    options?: RequestOptions,
  ): ApiPromise<RefundRazorpayRefundsApi, Refunds.UpdateRefundError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default("/refunds/{id}"),
        auth: anyAuth(
          this.#auth.basicAuth,
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials.forScopes("read_only"),
        ),
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: refundsRequestInternalSchema },
      },
      {
        success: { kind: "json", schema: refundRazorpayRefundsApiInternalSchema },
        errorFactory: Refunds.UpdateRefundError,
      },
      options,
    );
  }
}

export namespace Refunds {
  export type CreateRefundRequest = {
    /** Payment ID to refund (pay_*). Payment must be captured. */
    id: string;
    body?: PaymentsRefundRequest;
  };

  export class CreateRefundError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateRefundError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "error4", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type FetchAllRefundsRequest = {
    /** Unix timestamp (seconds). Fetch records created on or after this time. */
    from?: number;
    /** Unix timestamp (seconds). Fetch records created on or before this time. */
    to?: number;
    /** Number of records to return per call. Maximum 100. Default 10. @default 10 */
    count?: number;
    /** Number of records to skip. Use with count for pagination. Default 0. @default 0 */
    skip?: number;
  };

  export const fetchAllRefundsRequestSchema: Schema<FetchAllRefundsRequest> = s.lazySchema(() =>
    s.object<FetchAllRefundsRequest>({
      from: s.optional(s.int()),
      to: s.optional(s.int()),
      count: s.defaulted(s.int().check(s.gte(1), s.lte(100)), 10),
      skip: s.defaulted(s.int().check(s.gte(0)), 0),
    }),
  );

  export class FetchAllRefundsError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<FetchAllRefundsError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "error3", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type FetchPaymentRefundRequest = {
    /** Payment ID (pay_*). */
    paymentId: string;
    /** Refund ID (rfnd_*). */
    refundId: string;
  };

  export class FetchPaymentRefundError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<FetchPaymentRefundError> = [
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "error3", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type FetchPaymentRefundsRequest = {
    /** Payment ID (pay_*). */
    paymentId: string;
    /** Unix timestamp (seconds). Fetch records created on or after this time. */
    from?: number;
    /** Unix timestamp (seconds). Fetch records created on or before this time. */
    to?: number;
    /** Number of records to return per call. Maximum 100. Default 10. @default 10 */
    count?: number;
    /** Number of records to skip. Use with count for pagination. Default 0. @default 0 */
    skip?: number;
  };

  export const fetchPaymentRefundsRequestSchema: Schema<FetchPaymentRefundsRequest> = s.lazySchema(() =>
    s.object<FetchPaymentRefundsRequest>({
      paymentId: s.string(),
      from: s.optional(s.int()),
      to: s.optional(s.int()),
      count: s.defaulted(s.int().check(s.gte(1), s.lte(100)), 10),
      skip: s.defaulted(s.int().check(s.gte(0)), 0),
    }),
  );

  export class FetchPaymentRefundsError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<FetchPaymentRefundsError> = [
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "error3", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type FetchRefundRequest = {
    /** Refund ID (rfnd_*). */
    id: string;
  };

  export class FetchRefundError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<FetchRefundError> = [
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "error3", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type UpdateRefundRequest = {
    /** Refund ID (rfnd_*). */
    id: string;
    body: RefundsRequest;
  };

  export class UpdateRefundError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<UpdateRefundError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "error4", decode: { kind: "json", schema: errorSchema } },
    ];
  }
}
