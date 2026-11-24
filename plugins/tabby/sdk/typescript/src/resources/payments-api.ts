import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { apiV2PaymentsRequestSchema, type ApiV2PaymentsRequest } from "../models/api-v2-payments-request.js";
import { captureRequestInternalSchema, type CaptureRequest } from "../models/capture-request.js";
import { error400FailedSchema, type Error400Failed } from "../models/error400-failed.js";
import {
  error400PaymentsCaptureSchema,
  type Error400PaymentsCapture,
} from "../models/error400-payments-capture.js";
import {
  error400PaymentsCloseSchema,
  type Error400PaymentsClose,
} from "../models/error400-payments-close.js";
import { error400PaymentsGetSchema, type Error400PaymentsGet } from "../models/error400-payments-get.js";
import {
  error400PaymentsRefundSchema,
  type Error400PaymentsRefund,
} from "../models/error400-payments-refund.js";
import { error400Schema, type Error400 } from "../models/error400.js";
import {
  error401MissingBearerSchema,
  type Error401MissingBearer,
} from "../models/error401-missing-bearer.js";
import { error403Schema, type Error403 } from "../models/error403.js";
import {
  error404NoSuchPaymentSchema,
  type Error404NoSuchPayment,
} from "../models/error404-no-such-payment.js";
import {
  paymentCaptureResponseInternalSchema,
  type PaymentCaptureResponse,
} from "../models/payment-capture-response.js";
import { paymentCloseInternalSchema, type PaymentClose } from "../models/payment-close.js";
import {
  paymentRefundResponseInternalSchema,
  type PaymentRefundResponse,
} from "../models/payment-refund-response.js";
import { paymentResponseInternalSchema, type PaymentResponse } from "../models/payment-response.js";
import { paymentUpdateInternalSchema, type PaymentUpdate } from "../models/payment-update.js";
import { paymentsInternalSchema, type Payments } from "../models/payments.js";
import { refundRequestInternalSchema, type RefundRequest } from "../models/refund-request.js";
import {
  status1TabbyApiReferencePaymentsApiSchema,
  type Status1TabbyApiReferencePaymentsApi,
} from "../models/status1-tabby-api-reference-payments-api.js";
import type { Servers } from "../servers.js";

/**
 * The core of tabby is a payments flow enabling you to handle payments at your webstore.
 */
export class PaymentsApi {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Close a payment
   *
   * @remarks
   * Closed is the final status of the payment. Your payment is going to be closed automatically if
   * you capture the full amount of the payment. If an order is fully cancelled, please close the
   * payment without capturing it - the customer will be refunded for all paid amount. If only a
   * part of the order is delivered, please capture this part and close the payment – it will mean
   * that another part of the order is not going to be delivered to the customer.
   *
   * @returns Success. Payment object is returned.
   *
   * @throws {@link PaymentsApi.ClosePaymentError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link TabbyError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  closePayment(
    request: PaymentsApi.ClosePaymentRequest,
    options?: RequestOptions,
  ): ApiPromise<PaymentClose, PaymentsApi.ClosePaymentError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v2/payments/{id}/close"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: paymentCloseInternalSchema },
        errorFactory: PaymentsApi.ClosePaymentError,
      },
      options,
    );
  }

  /**
   * Retrieve a payment
   *
   * @remarks
   * Retrieves the specified payment. Returns the entire payment object, including the payment
   * Status, Captures and Refunds objects.
   *
   * @returns Success. Payment object is returned.
   *
   * @throws {@link PaymentsApi.GetPaymentError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link TabbyError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getPayment(
    request: PaymentsApi.GetPaymentRequest,
    options?: RequestOptions,
  ): ApiPromise<PaymentResponse, PaymentsApi.GetPaymentError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v2/payments/{id}"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: paymentResponseInternalSchema },
        errorFactory: PaymentsApi.GetPaymentError,
      },
      options,
    );
  }

  /**
   * List of all payments
   *
   * @remarks
   * Returns a list of success payments (`AUTHORIZED` or `CLOSED`) you’ve previously created. The
   * payments are returned in sorted order, with the most recent payments appearing first. Each
   * entry in the array is a separate payments object, including the status, any captures and any
   * refunds. If no more payments are available, the resulting array will be empty. Payments might
   * be filtered by creation date.
   *
   * @returns Success. Returns a list of payments.
   *
   * @throws {@link PaymentsApi.GetPaymentsError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link TabbyError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getPayments(
    request: PaymentsApi.GetPaymentsRequest = {},
    options?: RequestOptions,
  ): ApiPromise<Payments, PaymentsApi.GetPaymentsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v2/payments"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [
          { name: "created_at__gte", value: request.createdAtGte, schema: s.optional(s.dateOnly()) },
          { name: "created_at__lte", value: request.createdAtLte, schema: s.optional(s.dateTime()) },
          { name: "limit", value: request.limit, schema: s.optional(s.int()) },
          {
            name: "status",
            value: request.status,
            schema: s.optional(s.lazy(() => status1TabbyApiReferencePaymentsApiSchema)),
          },
          { name: "offset", value: request.offset, schema: s.optional(s.int()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: paymentsInternalSchema },
        errorFactory: PaymentsApi.GetPaymentsError,
      },
      options,
    );
  }

  /**
   * Capture a payment
   *
   * @remarks
   * Send a Capture requests for Authorized payments only. If you capture the full payment amount,
   * the payment will be automatically closed with full capture. If you capture partial amount, the
   * payment will remain Authorized until the rest of the amount is captured or Close request sent.
   *
   * @returns Success. Payment object is returned.
   *
   * @throws {@link PaymentsApi.PostPaymentCaptureError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link TabbyError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  postPaymentCapture(
    request: PaymentsApi.PostPaymentCaptureRequest,
    options?: RequestOptions,
  ): ApiPromise<PaymentCaptureResponse, PaymentsApi.PostPaymentCaptureError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v2/payments/{id}/captures"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: captureRequestInternalSchema },
      },
      {
        success: { kind: "json", schema: paymentCaptureResponseInternalSchema },
        errorFactory: PaymentsApi.PostPaymentCaptureError,
      },
      options,
    );
  }

  /**
   * Refund a payment
   *
   * @remarks
   * Send a full or partial refund amount request. You can only refund the payment that has Closed
   * status. By default refunds reflect instantly, which means Tabby initiates a refund through
   * payment gateway.
   *
   * @returns Success. Payment object is returned.
   *
   * @throws {@link PaymentsApi.PostPaymentRefundError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link TabbyError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  postPaymentRefund(
    request: PaymentsApi.PostPaymentRefundRequest,
    options?: RequestOptions,
  ): ApiPromise<PaymentRefundResponse, PaymentsApi.PostPaymentRefundError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v2/payments/{id}/refunds"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: refundRequestInternalSchema },
      },
      {
        success: { kind: "json", schema: paymentRefundResponseInternalSchema },
        errorFactory: PaymentsApi.PostPaymentRefundError,
      },
      options,
    );
  }

  /**
   * Update a payment
   *
   * @remarks
   * Updates the reference_id. You can only use this endpoint to update this 1 field. If you send
   * other fields in the request, they will simply be ignored by tabby. The payment to be updated
   * can have a status of AUTHORIZED or CLOSED.
   *
   * @returns Success. Payment object is returned.
   *
   * @throws {@link PaymentsApi.PutPaymentError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link TabbyError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  putPayment(
    request: PaymentsApi.PutPaymentRequest,
    options?: RequestOptions,
  ): ApiPromise<PaymentUpdate, PaymentsApi.PutPaymentError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default("/api/v2/payments/{id}"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: apiV2PaymentsRequestSchema },
      },
      {
        success: { kind: "json", schema: paymentUpdateInternalSchema },
        errorFactory: PaymentsApi.PutPaymentError,
      },
      options,
    );
  }
}

export namespace PaymentsApi {
  export type ClosePaymentRequest = {
    /** ID of the payment. */
    id: string;
  };

  export class ClosePaymentError extends ApiError {
    declare readonly payload:
      | Declared<"error400PaymentsClose", Error400PaymentsClose>
      | Declared<"error403", Error403>
      | Declared<"error4032", Error403>
      | Declared<"error404NoSuchPayment", Error404NoSuchPayment>
      | Declared<"error500", string>
      | Undeclared;

    static readonly errors: ErrorDecoders<ClosePaymentError> = [
      {
        on: 400,
        kind: "error400PaymentsClose",
        decode: { kind: "json", schema: error400PaymentsCloseSchema },
      },
      { on: 401, kind: "error403", decode: { kind: "json", schema: error403Schema } },
      { on: 403, kind: "error4032", decode: { kind: "json", schema: error403Schema } },
      {
        on: 404,
        kind: "error404NoSuchPayment",
        decode: { kind: "json", schema: error404NoSuchPaymentSchema },
      },
      { on: 500, kind: "error500", decode: { kind: "json", schema: s.string() } },
    ];
  }

  export type GetPaymentRequest = {
    /** ID of the payment. */
    id: string;
  };

  export class GetPaymentError extends ApiError {
    declare readonly payload:
      | Declared<"error400PaymentsGet", Error400PaymentsGet>
      | Declared<"error401MissingBearer", Error401MissingBearer>
      | Declared<"error404NoSuchPayment", Error404NoSuchPayment>
      | Declared<"error500", string>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetPaymentError> = [
      { on: 400, kind: "error400PaymentsGet", decode: { kind: "json", schema: error400PaymentsGetSchema } },
      {
        on: 401,
        kind: "error401MissingBearer",
        decode: { kind: "json", schema: error401MissingBearerSchema },
      },
      {
        on: 404,
        kind: "error404NoSuchPayment",
        decode: { kind: "json", schema: error404NoSuchPaymentSchema },
      },
      { on: 500, kind: "error500", decode: { kind: "json", schema: s.string() } },
    ];
  }

  export type GetPaymentsRequest = {
    /**
     * This is a filter for the payment creation date, use it to get the list of payments where
     * creation date >= created_at__gte. ISO 8601 date time format (greater than or equal to). No
     * time should be provided, it starts at 00:00:00 be default. For example 2020-01-23 ->
     * 2020-01-23T00:00:00Z.
     */
    createdAtGte?: string;
    /**
     * This is a filter for the payment creation date, use it to get the list of payments where
     * creation date <= created_at__lte. ISO 8601 date time format (less than or equal to). No time
     * should be provided, it starts at 00:00:00 be default. For example 2020-01-23 ->
     * 2020-01-23T00:00:00Z.
     */
    createdAtLte?: Date;
    /** Limits the number of returned results. */
    limit?: number;
    /**
     * Filter the orders by specific statuses:
     *   - `authorized`, `closed` and `rejected` belong to the API payment statuses;
     *   - `new`, `captured`, `refunded` and `cancelled`` refer to the statuses on Tabby Merchant
     *     Dashboard;
     *   - If absent, all `AUTHORIZED` and `CLOSED` payments are returned.
     */
    status?: Status1TabbyApiReferencePaymentsApi;
    /** The number of records into a dataset that you want to start, indexed at 0. */
    offset?: number;
  };

  export const getPaymentsRequestSchema: Schema<GetPaymentsRequest> = s.lazySchema(() =>
    s.object<GetPaymentsRequest>({
      createdAtGte: s.optional(s.dateOnly()),
      createdAtLte: s.optional(s.dateTime()),
      limit: s.optional(s.int().check(s.lte(20))),
      status: s.optional(s.lazy(() => status1TabbyApiReferencePaymentsApiSchema)),
      offset: s.optional(s.int()),
    }),
  );

  export class GetPaymentsError extends ApiError {
    declare readonly payload:
      | Declared<"error400Failed", Error400Failed>
      | Declared<"error403", Error403>
      | Declared<"error500", string>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetPaymentsError> = [
      { on: 400, kind: "error400Failed", decode: { kind: "json", schema: error400FailedSchema } },
      { on: 401, kind: "error403", decode: { kind: "json", schema: error403Schema } },
      { on: 500, kind: "error500", decode: { kind: "json", schema: s.string() } },
    ];
  }

  export type PostPaymentCaptureRequest = {
    /** ID of the payment. */
    id: string;
    body: CaptureRequest;
  };

  export class PostPaymentCaptureError extends ApiError {
    declare readonly payload:
      | Declared<"error400PaymentsCapture", Error400PaymentsCapture>
      | Declared<"error403", Error403>
      | Declared<"error4032", Error403>
      | Declared<"error404NoSuchPayment", Error404NoSuchPayment>
      | Declared<"error500", string>
      | Undeclared;

    static readonly errors: ErrorDecoders<PostPaymentCaptureError> = [
      {
        on: 400,
        kind: "error400PaymentsCapture",
        decode: { kind: "json", schema: error400PaymentsCaptureSchema },
      },
      { on: 401, kind: "error403", decode: { kind: "json", schema: error403Schema } },
      { on: 403, kind: "error4032", decode: { kind: "json", schema: error403Schema } },
      {
        on: 404,
        kind: "error404NoSuchPayment",
        decode: { kind: "json", schema: error404NoSuchPaymentSchema },
      },
      { on: 500, kind: "error500", decode: { kind: "json", schema: s.string() } },
    ];
  }

  export type PostPaymentRefundRequest = {
    /** ID of the payment. */
    id: string;
    body: RefundRequest;
  };

  export class PostPaymentRefundError extends ApiError {
    declare readonly payload:
      | Declared<"error400PaymentsRefund", Error400PaymentsRefund>
      | Declared<"error403", Error403>
      | Declared<"error4032", Error403>
      | Declared<"error404NoSuchPayment", Error404NoSuchPayment>
      | Declared<"error400", Error400>
      | Declared<"error500", string>
      | Undeclared;

    static readonly errors: ErrorDecoders<PostPaymentRefundError> = [
      {
        on: 400,
        kind: "error400PaymentsRefund",
        decode: { kind: "json", schema: error400PaymentsRefundSchema },
      },
      { on: 401, kind: "error403", decode: { kind: "json", schema: error403Schema } },
      { on: 403, kind: "error4032", decode: { kind: "json", schema: error403Schema } },
      {
        on: 404,
        kind: "error404NoSuchPayment",
        decode: { kind: "json", schema: error404NoSuchPaymentSchema },
      },
      { on: 409, kind: "error400", decode: { kind: "json", schema: error400Schema } },
      { on: 500, kind: "error500", decode: { kind: "json", schema: s.string() } },
    ];
  }

  export type PutPaymentRequest = {
    /** ID of the payment. */
    id: string;
    body: ApiV2PaymentsRequest;
  };

  export class PutPaymentError extends ApiError {
    declare readonly payload:
      | Declared<"error400PaymentsGet", Error400PaymentsGet>
      | Declared<"error403", Error403>
      | Declared<"error4032", Error403>
      | Declared<"error404NoSuchPayment", Error404NoSuchPayment>
      | Declared<"error500", string>
      | Undeclared;

    static readonly errors: ErrorDecoders<PutPaymentError> = [
      { on: 400, kind: "error400PaymentsGet", decode: { kind: "json", schema: error400PaymentsGetSchema } },
      { on: 401, kind: "error403", decode: { kind: "json", schema: error403Schema } },
      { on: 403, kind: "error4032", decode: { kind: "json", schema: error403Schema } },
      {
        on: 404,
        kind: "error404NoSuchPayment",
        decode: { kind: "json", schema: error404NoSuchPaymentSchema },
      },
      { on: 500, kind: "error500", decode: { kind: "json", schema: s.string() } },
    ];
  }
}
