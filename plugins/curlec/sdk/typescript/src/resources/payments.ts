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
  paymentRazorpayPaymentsApiInternalSchema,
  type PaymentRazorpayPaymentsApi,
} from "../models/payment-razorpay-payments-api.js";
import {
  paymentsCaptureRequestSchema,
  type PaymentsCaptureRequest,
} from "../models/payments-capture-request.js";
import { paymentsRequestInternalSchema, type PaymentsRequest } from "../models/payments-request.js";
import { paymentsResponseInternalSchema, type PaymentsResponse } from "../models/payments-response.js";
import type { Servers } from "../servers.js";

/**
 * A payment is created when a customer completes checkout. Payments can be auto-captured or
 * manually captured. Fetch payment details to reconcile and diagnose failures.
 */
export class Payments {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Capture a payment
   *
   * @remarks
   * Capture an authorized payment to collect funds. Must be called within the capture window
   * (default 5 days). Amount must exactly equal authorized amount unless partial capture is
   * enabled.
   *
   * @returns Payment captured. Status changes to 'captured'.
   *
   * @throws {@link Payments.CapturePaymentError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link CurlecError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  capturePayment(
    request: Payments.CapturePaymentRequest,
    options?: RequestOptions,
  ): ApiPromise<PaymentRazorpayPaymentsApi, Payments.CapturePaymentError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/payments/{id}/capture"),
        auth: anyAuth(
          this.#auth.basicAuth,
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials.forScopes("read_only"),
        ),
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: paymentsCaptureRequestSchema },
      },
      {
        success: { kind: "json", schema: paymentRazorpayPaymentsApiInternalSchema },
        errorFactory: Payments.CapturePaymentError,
      },
      options,
    );
  }

  /**
   * Fetch all payments
   *
   * @remarks
   * Retrieve a paginated list of payments. Maximum 100 per call.
   *
   * @returns Collection of payments.
   *
   * @throws {@link Payments.FetchAllPaymentsError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link CurlecError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  fetchAllPayments(
    request: Payments.FetchAllPaymentsRequest = {},
    options?: RequestOptions,
  ): ApiPromise<PaymentsResponse, Payments.FetchAllPaymentsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/payments"),
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
        success: { kind: "json", schema: paymentsResponseInternalSchema },
        errorFactory: Payments.FetchAllPaymentsError,
      },
      options,
    );
  }

  /**
   * Fetch payment by ID
   *
   * @remarks
   * Retrieve full details and current status of a specific payment. Always re-fetch before acting —
   * status can change.
   *
   * @returns Payment details.
   *
   * @throws {@link Payments.FetchPaymentError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link CurlecError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  fetchPayment(
    request: Payments.FetchPaymentRequest,
    options?: RequestOptions,
  ): ApiPromise<PaymentRazorpayPaymentsApi, Payments.FetchPaymentError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/payments/{id}"),
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
        success: { kind: "json", schema: paymentRazorpayPaymentsApiInternalSchema },
        errorFactory: Payments.FetchPaymentError,
      },
      options,
    );
  }

  /**
   * Update a payment
   *
   * @remarks
   * Update the notes field of a payment. Only notes can be modified.
   *
   * @returns Updated payment.
   *
   * @throws {@link Payments.UpdatePaymentError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link CurlecError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updatePayment(
    request: Payments.UpdatePaymentRequest,
    options?: RequestOptions,
  ): ApiPromise<PaymentRazorpayPaymentsApi, Payments.UpdatePaymentError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default("/payments/{id}"),
        auth: anyAuth(
          this.#auth.basicAuth,
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials.forScopes("read_only"),
        ),
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: paymentsRequestInternalSchema },
      },
      {
        success: { kind: "json", schema: paymentRazorpayPaymentsApiInternalSchema },
        errorFactory: Payments.UpdatePaymentError,
      },
      options,
    );
  }
}

export namespace Payments {
  export type CapturePaymentRequest = {
    /** Payment ID (pay_*). Must be in 'authorized' status. */
    id: string;
    body: PaymentsCaptureRequest;
  };

  export class CapturePaymentError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<CapturePaymentError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "error4", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type FetchAllPaymentsRequest = {
    /** Unix timestamp (seconds). Fetch records created on or after this time. */
    from?: number;
    /** Unix timestamp (seconds). Fetch records created on or before this time. */
    to?: number;
    /** Number of records to return per call. Maximum 100. Default 10. @default 10 */
    count?: number;
    /** Number of records to skip. Use with count for pagination. Default 0. @default 0 */
    skip?: number;
  };

  export const fetchAllPaymentsRequestSchema: Schema<FetchAllPaymentsRequest> = s.lazySchema(() =>
    s.object<FetchAllPaymentsRequest>({
      from: s.optional(s.int()),
      to: s.optional(s.int()),
      count: s.defaulted(s.int().check(s.gte(1), s.lte(100)), 10),
      skip: s.defaulted(s.int().check(s.gte(0)), 0),
    }),
  );

  export class FetchAllPaymentsError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<FetchAllPaymentsError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "error3", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type FetchPaymentRequest = {
    /** Payment ID (pay_*). */
    id: string;
  };

  export class FetchPaymentError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<FetchPaymentError> = [
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "error3", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type UpdatePaymentRequest = {
    /** Payment ID (pay_*). */
    id: string;
    body: PaymentsRequest;
  };

  export class UpdatePaymentError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<UpdatePaymentError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "error4", decode: { kind: "json", schema: errorSchema } },
    ];
  }
}
