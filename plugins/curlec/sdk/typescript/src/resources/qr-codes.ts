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
  paymentsQrCodesPaymentsResponseInternalSchema,
  type PaymentsQrCodesPaymentsResponse,
} from "../models/payments-qr-codes-payments-response.js";
import {
  paymentsQrCodesRequestInternalSchema,
  type PaymentsQrCodesRequest,
} from "../models/payments-qr-codes-request.js";
import {
  paymentsQrCodesRequest1InternalSchema,
  type PaymentsQrCodesRequest1,
} from "../models/payments-qr-codes-request1.js";
import {
  paymentsQrCodesResponseInternalSchema,
  type PaymentsQrCodesResponse,
} from "../models/payments-qr-codes-response.js";
import { qrCodeInternalSchema, type QrCode } from "../models/qr-code.js";
import type { Servers } from "../servers.js";

/**
 * QR Codes enable offline and digital payment collection. Customers scan with any UPI or card app.
 * Supports fixed-amount and variable-amount codes, single-use and multiple-use modes.
 */
export class QrCodes {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Close a QR code
   *
   * @remarks
   * Deactivate a QR code to stop accepting new payments. Once closed, the QR code cannot be
   * reopened.
   *
   * @returns QR code closed. Status changes to 'closed'.
   *
   * @throws {@link QrCodes.CloseQrCodeError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link CurlecError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  closeQrCode(
    request: QrCodes.CloseQrCodeRequest,
    options?: RequestOptions,
  ): ApiPromise<QrCode, QrCodes.CloseQrCodeError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/payments/qr_codes/{id}/close"),
        auth: anyAuth(
          this.#auth.basicAuth,
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials.forScopes("read_only"),
        ),
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: qrCodeInternalSchema },
        errorFactory: QrCodes.CloseQrCodeError,
      },
      options,
    );
  }

  /**
   * Create a QR code
   *
   * @remarks
   * Create a UPI QR code for accepting digital payments. Only upi_qr type is supported (on-demand
   * feature; requires merchant activation). single_use QR codes require fixed_amount=true and
   * close_by maximum is 45 days. multiple_use QR codes have no expiry restriction.
   *
   * @returns QR code created.
   *
   * @throws {@link QrCodes.CreateQrCodeError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link CurlecError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createQrCode(
    request: QrCodes.CreateQrCodeRequest,
    options?: RequestOptions,
  ): ApiPromise<QrCode, QrCodes.CreateQrCodeError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/payments/qr_codes"),
        auth: anyAuth(
          this.#auth.basicAuth,
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials.forScopes("read_only"),
        ),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: paymentsQrCodesRequestInternalSchema },
      },
      {
        success: { kind: "json", schema: qrCodeInternalSchema },
        errorFactory: QrCodes.CreateQrCodeError,
      },
      options,
    );
  }

  /**
   * Fetch all QR codes
   *
   * @remarks
   * Retrieve all QR codes. Filter by customer_id or payment_id.
   *
   * @returns Collection of QR codes.
   *
   * @throws {@link QrCodes.FetchAllQrCodesError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link CurlecError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  fetchAllQrCodes(
    request: QrCodes.FetchAllQrCodesRequest = {},
    options?: RequestOptions,
  ): ApiPromise<PaymentsQrCodesResponse, QrCodes.FetchAllQrCodesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/payments/qr_codes"),
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
          { name: "customer_id", value: request.customerId, schema: s.optional(s.string()) },
          { name: "payment_id", value: request.paymentId, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: paymentsQrCodesResponseInternalSchema },
        errorFactory: QrCodes.FetchAllQrCodesError,
      },
      options,
    );
  }

  /**
   * Fetch QR code by ID
   *
   * @remarks
   * Retrieve details of a specific QR code including payment counts and status.
   *
   * @returns QR code details.
   *
   * @throws {@link QrCodes.FetchQrCodeError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link CurlecError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  fetchQrCode(
    request: QrCodes.FetchQrCodeRequest,
    options?: RequestOptions,
  ): ApiPromise<QrCode, QrCodes.FetchQrCodeError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/payments/qr_codes/{id}"),
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
        success: { kind: "json", schema: qrCodeInternalSchema },
        errorFactory: QrCodes.FetchQrCodeError,
      },
      options,
    );
  }

  /**
   * Fetch payments for a QR code
   *
   * @remarks
   * Retrieve all payments made against a specific QR code.
   *
   * @returns Collection of payments for the QR code.
   *
   * @throws {@link QrCodes.FetchQrCodePaymentsError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link CurlecError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  fetchQrCodePayments(
    request: QrCodes.FetchQrCodePaymentsRequest,
    options?: RequestOptions,
  ): ApiPromise<PaymentsQrCodesPaymentsResponse, QrCodes.FetchQrCodePaymentsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/payments/qr_codes/{id}/payments"),
        auth: anyAuth(
          this.#auth.basicAuth,
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials.forScopes("read_only"),
        ),
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
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
        success: { kind: "json", schema: paymentsQrCodesPaymentsResponseInternalSchema },
        errorFactory: QrCodes.FetchQrCodePaymentsError,
      },
      options,
    );
  }

  /**
   * Update a QR code
   *
   * @remarks
   * Update the notes field of a QR code. Only notes can be modified after creation.
   *
   * @returns Updated QR code.
   *
   * @throws {@link QrCodes.UpdateQrCodeError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link CurlecError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateQrCode(
    request: QrCodes.UpdateQrCodeRequest,
    options?: RequestOptions,
  ): ApiPromise<QrCode, QrCodes.UpdateQrCodeError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default("/payments/qr_codes/{id}"),
        auth: anyAuth(
          this.#auth.basicAuth,
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials.forScopes("read_only"),
        ),
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: paymentsQrCodesRequest1InternalSchema },
      },
      {
        success: { kind: "json", schema: qrCodeInternalSchema },
        errorFactory: QrCodes.UpdateQrCodeError,
      },
      options,
    );
  }
}

export namespace QrCodes {
  export type CloseQrCodeRequest = {
    /** QR code ID (qr_*). */
    id: string;
  };

  export class CloseQrCodeError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<CloseQrCodeError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "error4", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type CreateQrCodeRequest = {
    body: PaymentsQrCodesRequest;
  };

  export class CreateQrCodeError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateQrCodeError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "error3", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type FetchAllQrCodesRequest = {
    /** Unix timestamp (seconds). Fetch records created on or after this time. */
    from?: number;
    /** Unix timestamp (seconds). Fetch records created on or before this time. */
    to?: number;
    /** Number of records to return per call. Maximum 100. Default 10. @default 10 */
    count?: number;
    /** Number of records to skip. Use with count for pagination. Default 0. @default 0 */
    skip?: number;
    /** Filter by customer ID (cust_*). */
    customerId?: string;
    /** Filter QR codes associated with a specific payment. */
    paymentId?: string;
  };

  export const fetchAllQrCodesRequestSchema: Schema<FetchAllQrCodesRequest> = s.lazySchema(() =>
    s.object<FetchAllQrCodesRequest>({
      from: s.optional(s.int()),
      to: s.optional(s.int()),
      count: s.defaulted(s.int().check(s.gte(1), s.lte(100)), 10),
      skip: s.defaulted(s.int().check(s.gte(0)), 0),
      customerId: s.optional(s.string()),
      paymentId: s.optional(s.string()),
    }),
  );

  export class FetchAllQrCodesError extends ApiError {
    declare readonly payload: Declared<"error", Error> | Declared<"error2", Error> | Undeclared;

    static readonly errors: ErrorDecoders<FetchAllQrCodesError> = [
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type FetchQrCodeRequest = {
    /** QR code ID (qr_*). */
    id: string;
  };

  export class FetchQrCodeError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<FetchQrCodeError> = [
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "error3", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type FetchQrCodePaymentsRequest = {
    /** QR code ID (qr_*). */
    id: string;
    /** Unix timestamp (seconds). Fetch records created on or after this time. */
    from?: number;
    /** Unix timestamp (seconds). Fetch records created on or before this time. */
    to?: number;
    /** Number of records to return per call. Maximum 100. Default 10. @default 10 */
    count?: number;
    /** Number of records to skip. Use with count for pagination. Default 0. @default 0 */
    skip?: number;
  };

  export const fetchQrCodePaymentsRequestSchema: Schema<FetchQrCodePaymentsRequest> = s.lazySchema(() =>
    s.object<FetchQrCodePaymentsRequest>({
      id: s.string(),
      from: s.optional(s.int()),
      to: s.optional(s.int()),
      count: s.defaulted(s.int().check(s.gte(1), s.lte(100)), 10),
      skip: s.defaulted(s.int().check(s.gte(0)), 0),
    }),
  );

  export class FetchQrCodePaymentsError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<FetchQrCodePaymentsError> = [
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "error3", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type UpdateQrCodeRequest = {
    /** QR code ID (qr_*). */
    id: string;
    body: PaymentsQrCodesRequest1;
  };

  export class UpdateQrCodeError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<UpdateQrCodeError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "error4", decode: { kind: "json", schema: errorSchema } },
    ];
  }
}
