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
import { payoutInternalSchema, type Payout } from "../models/payout.js";
import {
  payoutsApproveRequestSchema,
  type PayoutsApproveRequest,
} from "../models/payouts-approve-request.js";
import { payoutsRejectRequestSchema, type PayoutsRejectRequest } from "../models/payouts-reject-request.js";
import {
  payoutsRequestInternalSchema,
  payoutsRequestSchema,
  type PayoutsRequest,
} from "../models/payouts-request.js";
import { payoutsResponseInternalSchema, type PayoutsResponse } from "../models/payouts-response.js";
import type { Servers } from "../servers.js";

/**
 * Disbursements via NEFT, RTGS, IMPS, UPI, card — includes composite and approval flows
 */
export class XPayouts {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Approve a payout (workflow enabled)
   *
   * @remarks
   * Requires Payouts Approval workflow enabled and Technology Partner status with OAuth.
   *
   * @returns Payout approved
   *
   * @throws {@link XPayouts.ApprovePayoutError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link CurlecError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  approvePayout(
    request: XPayouts.ApprovePayoutRequest,
    options?: RequestOptions,
  ): ApiPromise<Payout, XPayouts.ApprovePayoutError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/payouts/{payout_id}/approve"),
        auth: anyAuth(
          this.#auth.basicAuth,
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials.forScopes("read_only"),
        ),
        pathParams: [{ name: "payout_id", value: request.payoutId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => payoutsApproveRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: payoutInternalSchema },
        errorFactory: XPayouts.ApprovePayoutError,
      },
      options,
    );
  }

  /**
   * Cancel a queued payout
   *
   * @remarks
   * Only payouts in 'queued' status can be cancelled.
   *
   * @returns Payout cancelled
   *
   * @throws {@link XPayouts.CancelPayoutError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link CurlecError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  cancelPayout(
    request: XPayouts.CancelPayoutRequest,
    options?: RequestOptions,
  ): ApiPromise<Payout, XPayouts.CancelPayoutError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/payouts/{payout_id}/cancel"),
        auth: anyAuth(
          this.#auth.basicAuth,
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials.forScopes("read_only"),
        ),
        pathParams: [{ name: "payout_id", value: request.payoutId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: payoutInternalSchema },
        errorFactory: XPayouts.CancelPayoutError,
      },
      options,
    );
  }

  /**
   * Create a payout
   *
   * @remarks
   * Disburse funds via NEFT, RTGS, IMPS, UPI, or card. Supports standard payouts (fund_account_id),
   * composite payouts (contact + fund account inline), card payouts (PCI DSS required), and mobile
   * number payouts (resolved via NPCI mapper). Idempotency header X-Payout-Idempotency (UUID v4,
   * 4–36 chars) is mandatory since March 15, 2025. Never generate a new idempotency key while a
   * payout is in 'processing' state.
   *
   * @returns Payout created
   *
   * @throws {@link XPayouts.CreatePayoutError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link CurlecError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createPayout(
    request: XPayouts.CreatePayoutRequest,
    options?: RequestOptions,
  ): ApiPromise<Payout, XPayouts.CreatePayoutError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/payouts"),
        auth: anyAuth(
          this.#auth.basicAuth,
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials.forScopes("read_only"),
        ),
        pathParams: [],
        query: [],
        headers: [
          { name: "X-Payout-Idempotency", value: request.xPayoutIdempotency, schema: s.string() },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "json", value: request.body, schema: payoutsRequestInternalSchema },
      },
      {
        success: { kind: "json", schema: payoutInternalSchema },
        errorFactory: XPayouts.CreatePayoutError,
      },
      options,
    );
  }

  /**
   * Fetch a payout
   *
   * @remarks
   * Fetch details of a specific payout by its ID.
   *
   * @returns Payout details
   *
   * @throws {@link XPayouts.FetchPayoutError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link CurlecError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  fetchPayout(
    request: XPayouts.FetchPayoutRequest,
    options?: RequestOptions,
  ): ApiPromise<Payout, XPayouts.FetchPayoutError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/payouts/{payout_id}"),
        auth: anyAuth(
          this.#auth.basicAuth,
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials.forScopes("read_only"),
        ),
        pathParams: [{ name: "payout_id", value: request.payoutId, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: payoutInternalSchema },
        errorFactory: XPayouts.FetchPayoutError,
      },
      options,
    );
  }

  /**
   * List payouts
   *
   * @remarks
   * List payouts for a given RazorpayX account. Filter by contact, fund account, date range, or
   * status.
   *
   * @returns List of payouts
   *
   * @throws {@link XPayouts.ListPayoutsError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link CurlecError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listPayouts(
    request: XPayouts.ListPayoutsRequest,
    options?: RequestOptions,
  ): ApiPromise<PayoutsResponse, XPayouts.ListPayoutsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/payouts"),
        auth: anyAuth(
          this.#auth.basicAuth,
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials.forScopes("read_only"),
        ),
        pathParams: [],
        query: [
          { name: "account_number", value: request.accountNumber, schema: s.string() },
          { name: "contact_id", value: request.contactId, schema: s.optional(s.string()) },
          { name: "fund_account_id", value: request.fundAccountId, schema: s.optional(s.string()) },
          { name: "from", value: request.from, schema: s.optional(s.int()) },
          { name: "to", value: request.to, schema: s.optional(s.int()) },
          { name: "count", value: request.count, schema: s.defaulted(s.int(), 25) },
          { name: "skip", value: request.skip, schema: s.defaulted(s.int(), 0) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: payoutsResponseInternalSchema },
        errorFactory: XPayouts.ListPayoutsError,
      },
      options,
    );
  }

  /**
   * Reject a payout (workflow enabled)
   *
   * @remarks
   * Requires Payouts Approval workflow enabled and Technology Partner status with OAuth.
   *
   * @returns Payout rejected
   *
   * @throws {@link XPayouts.RejectPayoutError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link CurlecError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  rejectPayout(
    request: XPayouts.RejectPayoutRequest,
    options?: RequestOptions,
  ): ApiPromise<Payout, XPayouts.RejectPayoutError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/payouts/{payout_id}/reject"),
        auth: anyAuth(
          this.#auth.basicAuth,
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials.forScopes("read_only"),
        ),
        pathParams: [{ name: "payout_id", value: request.payoutId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => payoutsRejectRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: payoutInternalSchema },
        errorFactory: XPayouts.RejectPayoutError,
      },
      options,
    );
  }
}

export namespace XPayouts {
  export type ApprovePayoutRequest = {
    /** Unique identifier of the payout to approve. */
    payoutId: string;
    body?: PayoutsApproveRequest;
  };

  export class ApprovePayoutError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<ApprovePayoutError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error4", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type CancelPayoutRequest = {
    /** Unique identifier of the payout to cancel. */
    payoutId: string;
  };

  export class CancelPayoutError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<CancelPayoutError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error4", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type CreatePayoutRequest = {
    /** UUID v4 idempotency key. Mandatory since March 15, 2025. */
    xPayoutIdempotency: string;
    body: PayoutsRequest;
  };

  export const createPayoutRequestSchema: Schema<CreatePayoutRequest> = s.lazySchema(() =>
    s.object<CreatePayoutRequest>({
      xPayoutIdempotency: s.string().check(s.minLength(4), s.maxLength(36)),
      body: payoutsRequestSchema,
    }),
  );

  export class CreatePayoutError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreatePayoutError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error4", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type FetchPayoutRequest = {
    /** Unique identifier of the payout (e.g. `pout_00000000000001`). */
    payoutId: string;
  };

  export class FetchPayoutError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<FetchPayoutError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error4", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error5", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type ListPayoutsRequest = {
    /**
     * The RazorpayX account number (Customer Identifier from Dashboard → My Account & Settings →
     * Banking). Required to scope results to a specific account.
     */
    accountNumber: string;
    /** Filter payouts by the contact ID of the recipient. */
    contactId?: string;
    /** Filter payouts by fund account ID. */
    fundAccountId?: string;
    /** Unix timestamp. Only payouts created from this timestamp onwards are returned. */
    from?: number;
    /** Unix timestamp. Only payouts created before this timestamp are returned. */
    to?: number;
    /** Number of payouts to return. Default: 10. Maximum: 100. @default 25 */
    count?: number;
    /** Number of payouts to skip. Use for pagination. Default: 0. @default 0 */
    skip?: number;
  };

  export class ListPayoutsError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListPayoutsError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error4", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type RejectPayoutRequest = {
    /** Unique identifier of the payout to reject. */
    payoutId: string;
    body?: PayoutsRejectRequest;
  };

  export class RejectPayoutError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<RejectPayoutError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error4", decode: { kind: "json", schema: errorSchema } },
    ];
  }
}
