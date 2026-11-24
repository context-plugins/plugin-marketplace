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
  expandRazorpayTransfersApiSchema,
  type ExpandRazorpayTransfersApi,
} from "../models/expand-razorpay-transfers-api.js";
import {
  paymentsTransfersRequestInternalSchema,
  type PaymentsTransfersRequest,
} from "../models/payments-transfers-request.js";
import {
  paymentsTransfersResponseInternalSchema,
  type PaymentsTransfersResponse,
} from "../models/payments-transfers-response.js";
import { reversalInternalSchema, type Reversal } from "../models/reversal.js";
import {
  transferRazorpayTransfersApiInternalSchema,
  type TransferRazorpayTransfersApi,
} from "../models/transfer-razorpay-transfers-api.js";
import { transfersRequestInternalSchema, type TransfersRequest } from "../models/transfers-request.js";
import { transfersRequest1Schema, type TransfersRequest1 } from "../models/transfers-request1.js";
import { transfersResponseInternalSchema, type TransfersResponse } from "../models/transfers-response.js";
import {
  transfersReversalsRequestInternalSchema,
  type TransfersReversalsRequest,
} from "../models/transfers-reversals-request.js";
import {
  transfersReversalsResponseInternalSchema,
  type TransfersReversalsResponse,
} from "../models/transfers-reversals-response.js";
import type { Servers } from "../servers.js";

/**
 * Fund transfers from a merchant, payment, or order to a Linked Account (Route). Supports
 * payment-based splits, direct on-demand transfers, settlement hold controls, and full/partial
 * reversals. INR only, minimum ₹100. Direct transfers support idempotency via
 * X-Transfer-Idempotency header.
 */
export class Transfers {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Create a direct transfer
   *
   * @remarks
   * Create an on-demand direct transfer from the merchant account to a Linked Account. Requires the
   * Direct Transfer feature to be enabled on the account. Supports idempotency via the
   * X-Transfer-Idempotency header (unique to direct transfers).
   *
   * @returns Transfer created.
   *
   * @throws {@link Transfers.CreateDirectTransferError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link CurlecError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createDirectTransfer(
    request: Transfers.CreateDirectTransferRequest,
    options?: RequestOptions,
  ): ApiPromise<TransferRazorpayTransfersApi, Transfers.CreateDirectTransferError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/transfers"),
        auth: anyAuth(
          this.#auth.basicAuth,
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials.forScopes("read_only"),
        ),
        pathParams: [],
        query: [],
        headers: [
          {
            name: "X-Transfer-Idempotency",
            value: request.xTransferIdempotency,
            schema: s.optional(s.string()),
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "json", value: request.body, schema: transfersRequestInternalSchema },
      },
      {
        success: { kind: "json", schema: transferRazorpayTransfersApiInternalSchema },
        errorFactory: Transfers.CreateDirectTransferError,
      },
      options,
    );
  }

  /**
   * Create transfers from a payment
   *
   * @remarks
   * Split a captured payment to one or more Linked Accounts. Amount is deducted from the payment
   * and transferred to the recipient. INR only, minimum ₹100 per transfer.
   *
   * @returns Transfers created.
   *
   * @throws {@link Transfers.CreateTransfersFromPaymentError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link CurlecError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createTransfersFromPayment(
    request: Transfers.CreateTransfersFromPaymentRequest,
    options?: RequestOptions,
  ): ApiPromise<PaymentsTransfersResponse, Transfers.CreateTransfersFromPaymentError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/payments/{id}/transfers"),
        auth: anyAuth(
          this.#auth.basicAuth,
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials.forScopes("read_only"),
        ),
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: paymentsTransfersRequestInternalSchema },
      },
      {
        success: { kind: "json", schema: paymentsTransfersResponseInternalSchema },
        errorFactory: Transfers.CreateTransfersFromPaymentError,
      },
      options,
    );
  }

  /**
   * Fetch a transfer
   *
   * @remarks
   * Retrieve details of a specific transfer by ID.
   *
   * @returns Transfer details.
   *
   * @throws {@link Transfers.FetchTransferError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link CurlecError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  fetchTransfer(
    request: Transfers.FetchTransferRequest,
    options?: RequestOptions,
  ): ApiPromise<TransferRazorpayTransfersApi, Transfers.FetchTransferError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/transfers/{id}"),
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
        success: { kind: "json", schema: transferRazorpayTransfersApiInternalSchema },
        errorFactory: Transfers.FetchTransferError,
      },
      options,
    );
  }

  /**
   * Fetch transfers for a payment
   *
   * @remarks
   * Retrieve all transfers created from a specific payment.
   *
   * @returns List of transfers for the payment.
   *
   * @throws {@link Transfers.FetchTransfersForPaymentError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link CurlecError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  fetchTransfersForPayment(
    request: Transfers.FetchTransfersForPaymentRequest,
    options?: RequestOptions,
  ): ApiPromise<PaymentsTransfersResponse, Transfers.FetchTransfersForPaymentError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/payments/{id}/transfers"),
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
        success: { kind: "json", schema: paymentsTransfersResponseInternalSchema },
        errorFactory: Transfers.FetchTransfersForPaymentError,
      },
      options,
    );
  }

  /**
   * List reversals for a transfer
   *
   * @remarks
   * Retrieve all reversals for a specific transfer.
   *
   * @returns List of reversals.
   *
   * @throws {@link Transfers.ListReversalsError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link CurlecError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listReversals(
    request: Transfers.ListReversalsRequest,
    options?: RequestOptions,
  ): ApiPromise<TransfersReversalsResponse, Transfers.ListReversalsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/transfers/{id}/reversals"),
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
        success: { kind: "json", schema: transfersReversalsResponseInternalSchema },
        errorFactory: Transfers.ListReversalsError,
      },
      options,
    );
  }

  /**
   * List transfers
   *
   * @remarks
   * Retrieve a paginated list of transfers. Filter by recipient_settlement_id to fetch transfers
   * included in a specific settlement. Use expand[]=recipient_settlement to include settlement
   * details.
   *
   * @returns List of transfers.
   *
   * @throws {@link Transfers.ListTransfersError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link CurlecError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listTransfers(
    request: Transfers.ListTransfersRequest = {},
    options?: RequestOptions,
  ): ApiPromise<TransfersResponse, Transfers.ListTransfersError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/transfers"),
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
          {
            name: "recipient_settlement_id",
            value: request.recipientSettlementId,
            schema: s.optional(s.string()),
          },
          {
            name: "expand[]",
            value: request.expand,
            schema: s.optional(s.lazy(() => expandRazorpayTransfersApiSchema)),
          },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: transfersResponseInternalSchema },
        errorFactory: Transfers.ListTransfersError,
      },
      options,
    );
  }

  /**
   * Modify settlement hold on a transfer
   *
   * @remarks
   * Put a transfer's settlement on hold or release an existing hold. Use on_hold=true to hold
   * settlement, on_hold=false to release. on_hold_until sets a future timestamp for automatic hold
   * release.
   *
   * @returns Transfer settlement hold updated.
   *
   * @throws {@link Transfers.ModifyTransferSettlementHoldError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link CurlecError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  modifyTransferSettlementHold(
    request: Transfers.ModifyTransferSettlementHoldRequest,
    options?: RequestOptions,
  ): ApiPromise<TransferRazorpayTransfersApi, Transfers.ModifyTransferSettlementHoldError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default("/transfers/{id}"),
        auth: anyAuth(
          this.#auth.basicAuth,
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials.forScopes("read_only"),
        ),
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: transfersRequest1Schema },
      },
      {
        success: { kind: "json", schema: transferRazorpayTransfersApiInternalSchema },
        errorFactory: Transfers.ModifyTransferSettlementHoldError,
      },
      options,
    );
  }

  /**
   * Reverse a transfer
   *
   * @remarks
   * Move funds from a Linked Account back to the merchant. Partial reversals are supported.
   * Multiple reversals per transfer are allowed as long as the total reversed amount does not
   * exceed the transfer amount.
   *
   * @returns Reversal created.
   *
   * @throws {@link Transfers.ReverseTransferError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link CurlecError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  reverseTransfer(
    request: Transfers.ReverseTransferRequest,
    options?: RequestOptions,
  ): ApiPromise<Reversal, Transfers.ReverseTransferError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/transfers/{id}/reversals"),
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
          schema: s.optional(s.lazy(() => transfersReversalsRequestInternalSchema)),
        },
      },
      {
        success: { kind: "json", schema: reversalInternalSchema },
        errorFactory: Transfers.ReverseTransferError,
      },
      options,
    );
  }
}

export namespace Transfers {
  export type CreateDirectTransferRequest = {
    /**
     * Idempotency key for direct transfers. If provided, retrying with the same key within 24 hours
     * returns the original transfer instead of creating a duplicate.
     */
    xTransferIdempotency?: string;
    body: TransfersRequest;
  };

  export class CreateDirectTransferError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateDirectTransferError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "error3", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type CreateTransfersFromPaymentRequest = {
    /** Payment ID (pay_*). */
    id: string;
    body: PaymentsTransfersRequest;
  };

  export class CreateTransfersFromPaymentError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateTransfersFromPaymentError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "error4", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type FetchTransferRequest = {
    /** Transfer ID (trf_*). */
    id: string;
  };

  export class FetchTransferError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<FetchTransferError> = [
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "error3", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type FetchTransfersForPaymentRequest = {
    /** Payment ID (pay_*). */
    id: string;
  };

  export class FetchTransfersForPaymentError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<FetchTransfersForPaymentError> = [
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "error3", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type ListReversalsRequest = {
    /** Transfer ID (trf_*). */
    id: string;
  };

  export class ListReversalsError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListReversalsError> = [
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "error3", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type ListTransfersRequest = {
    /** Unix timestamp filter (start). */
    from?: number;
    /** Unix timestamp filter (end). */
    to?: number;
    /** Number of records to return. Default: 10. Maximum: 100. @default 10 */
    count?: number;
    /** Number of records to skip. Use for pagination. Default: 0. @default 0 */
    skip?: number;
    /** Filter transfers by settlement ID in the Linked Account. */
    recipientSettlementId?: string;
    /** Expand recipient_settlement to include full settlement object. */
    expand?: ExpandRazorpayTransfersApi;
  };

  export const listTransfersRequestSchema: Schema<ListTransfersRequest> = s.lazySchema(() =>
    s.object<ListTransfersRequest>({
      from: s.optional(s.int()),
      to: s.optional(s.int()),
      count: s.defaulted(s.int().check(s.lte(100)), 10),
      skip: s.defaulted(s.int(), 0),
      recipientSettlementId: s.optional(s.string()),
      expand: s.optional(s.lazy(() => expandRazorpayTransfersApiSchema)),
    }),
  );

  export class ListTransfersError extends ApiError {
    declare readonly payload: Declared<"error", Error> | Declared<"error2", Error> | Undeclared;

    static readonly errors: ErrorDecoders<ListTransfersError> = [
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type ModifyTransferSettlementHoldRequest = {
    /** Transfer ID (trf_*). */
    id: string;
    body: TransfersRequest1;
  };

  export class ModifyTransferSettlementHoldError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<ModifyTransferSettlementHoldError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "error4", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type ReverseTransferRequest = {
    /** Transfer ID (trf_*). */
    id: string;
    body?: TransfersReversalsRequest;
  };

  export class ReverseTransferError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<ReverseTransferError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "error4", decode: { kind: "json", schema: errorSchema } },
    ];
  }
}
