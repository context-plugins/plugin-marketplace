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
import { bankTransferInternalSchema, type BankTransfer } from "../models/bank-transfer.js";
import { errorSchema, type Error } from "../models/error.js";
import { virtualAccountInternalSchema, type VirtualAccount } from "../models/virtual-account.js";
import {
  virtualAccountsAllowedPayersRequestSchema,
  type VirtualAccountsAllowedPayersRequest,
} from "../models/virtual-accounts-allowed-payers-request.js";
import {
  virtualAccountsCloseRequestSchema,
  type VirtualAccountsCloseRequest,
} from "../models/virtual-accounts-close-request.js";
import {
  virtualAccountsPaymentsResponseInternalSchema,
  type VirtualAccountsPaymentsResponse,
} from "../models/virtual-accounts-payments-response.js";
import {
  virtualAccountsReceiversRequestSchema,
  type VirtualAccountsReceiversRequest,
} from "../models/virtual-accounts-receivers-request.js";
import {
  virtualAccountsRequestInternalSchema,
  type VirtualAccountsRequest,
} from "../models/virtual-accounts-request.js";
import {
  virtualAccountsRequest1Schema,
  type VirtualAccountsRequest1,
} from "../models/virtual-accounts-request1.js";
import {
  virtualAccountsResponseInternalSchema,
  type VirtualAccountsResponse,
} from "../models/virtual-accounts-response.js";
import type { Servers } from "../servers.js";

/**
 * Virtual bank accounts and UPI VPAs that accept NEFT/RTGS/IMPS/UPI payments (Smart Collect). Each
 * incoming payment creates a BankTransfer entity. Supports Third Party Validation (TPV) to restrict
 * payers, and VPA receivers (Smart Collect 2.0). Auto-closes after 90 days of inactivity.
 */
export class VirtualAccounts {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Add an allowed payer (TPV)
   *
   * @remarks
   * Whitelist a specific payer bank account or VPA for a virtual account (Smart Collect with Third
   * Party Validation). Only whitelisted payers can successfully pay into this virtual account.
   *
   * @returns Allowed payer added.
   *
   * @throws {@link VirtualAccounts.AddAllowedPayerError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link CurlecError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  addAllowedPayer(
    request: VirtualAccounts.AddAllowedPayerRequest,
    options?: RequestOptions,
  ): ApiPromise<VirtualAccount, VirtualAccounts.AddAllowedPayerError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/virtual_accounts/{va_id}/allowed_payers"),
        auth: anyAuth(
          this.#auth.basicAuth,
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials.forScopes("read_only"),
        ),
        pathParams: [{ name: "va_id", value: request.vaId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: virtualAccountsAllowedPayersRequestSchema },
      },
      {
        success: { kind: "json", schema: virtualAccountInternalSchema },
        errorFactory: VirtualAccounts.AddAllowedPayerError,
      },
      options,
    );
  }

  /**
   * Add a VPA receiver to a Virtual Account
   *
   * @remarks
   * Add a UPI VPA receiver to an existing virtual account (Smart Collect 2.0). Requires the VPA
   * receiver feature to be enabled on the merchant account.
   *
   * @returns VPA receiver added. Returns the updated VirtualAccount.
   *
   * @throws {@link VirtualAccounts.AddVpaReceiverError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link CurlecError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  addVpaReceiver(
    request: VirtualAccounts.AddVpaReceiverRequest,
    options?: RequestOptions,
  ): ApiPromise<VirtualAccount, VirtualAccounts.AddVpaReceiverError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/virtual_accounts/{id}/receivers"),
        auth: anyAuth(
          this.#auth.basicAuth,
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials.forScopes("read_only"),
        ),
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: virtualAccountsReceiversRequestSchema },
      },
      {
        success: { kind: "json", schema: virtualAccountInternalSchema },
        errorFactory: VirtualAccounts.AddVpaReceiverError,
      },
      options,
    );
  }

  /**
   * Close a Virtual Account
   *
   * @remarks
   * Manually close an active virtual account so it no longer accepts payments.
   *
   * @returns Virtual Account closed.
   *
   * @throws {@link VirtualAccounts.CloseVirtualAccountError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link CurlecError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  closeVirtualAccount(
    request: VirtualAccounts.CloseVirtualAccountRequest,
    options?: RequestOptions,
  ): ApiPromise<VirtualAccount, VirtualAccounts.CloseVirtualAccountError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/virtual_accounts/{id}/close"),
        auth: anyAuth(
          this.#auth.basicAuth,
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials.forScopes("read_only"),
        ),
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: virtualAccountsCloseRequestSchema },
      },
      {
        success: { kind: "json", schema: virtualAccountInternalSchema },
        errorFactory: VirtualAccounts.CloseVirtualAccountError,
      },
      options,
    );
  }

  /**
   * Create a Virtual Account
   *
   * @remarks
   * Create a virtual bank account (and optionally a VPA) for accepting NEFT/RTGS/IMPS/UPI payments.
   * Set amount_expected=0 to accept any amount. Auto-closes after 90 days of inactivity. Maximum
   * close_by timestamp: 2147483647.
   *
   * @returns Virtual Account created.
   *
   * @throws {@link VirtualAccounts.CreateVirtualAccountError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link CurlecError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createVirtualAccount(
    request: VirtualAccounts.CreateVirtualAccountRequest,
    options?: RequestOptions,
  ): ApiPromise<VirtualAccount, VirtualAccounts.CreateVirtualAccountError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/virtual_accounts"),
        auth: anyAuth(
          this.#auth.basicAuth,
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials.forScopes("read_only"),
        ),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: virtualAccountsRequestInternalSchema },
      },
      {
        success: { kind: "json", schema: virtualAccountInternalSchema },
        errorFactory: VirtualAccounts.CreateVirtualAccountError,
      },
      options,
    );
  }

  /**
   * Delete an allowed payer (TPV)
   *
   * @remarks
   * Remove a payer from the whitelist of a virtual account (Smart Collect TPV). The payer will no
   * longer be able to make payments to this virtual account.
   *
   * @returns Allowed payer removed.
   *
   * @throws {@link VirtualAccounts.DeleteAllowedPayerError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link CurlecError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteAllowedPayer(
    request: VirtualAccounts.DeleteAllowedPayerRequest,
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, VirtualAccounts.DeleteAllowedPayerError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/virtual_accounts/{va_id}/allowed_payers/{id}"),
        auth: anyAuth(
          this.#auth.basicAuth,
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials.forScopes("read_only"),
        ),
        pathParams: [
          { name: "va_id", value: request.vaId, schema: s.string() },
          { name: "id", value: request.id, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: VirtualAccounts.DeleteAllowedPayerError,
      },
      options,
    );
  }

  /**
   * Fetch bank transfer details for a payment
   *
   * @remarks
   * Retrieve the BankTransfer entity associated with a payment received via a Virtual Account.
   * Contains the UTR number, payer bank account details, and transfer mode.
   *
   * @returns Bank transfer details.
   *
   * @throws {@link VirtualAccounts.FetchBankTransferError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link CurlecError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  fetchBankTransfer(
    request: VirtualAccounts.FetchBankTransferRequest,
    options?: RequestOptions,
  ): ApiPromise<BankTransfer, VirtualAccounts.FetchBankTransferError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/payments/{id}/bank_transfer"),
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
        success: { kind: "json", schema: bankTransferInternalSchema },
        errorFactory: VirtualAccounts.FetchBankTransferError,
      },
      options,
    );
  }

  /**
   * Fetch a Virtual Account
   *
   * @remarks
   * Retrieve details of a specific virtual account.
   *
   * @returns Virtual Account details.
   *
   * @throws {@link VirtualAccounts.FetchVirtualAccountError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link CurlecError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  fetchVirtualAccount(
    request: VirtualAccounts.FetchVirtualAccountRequest,
    options?: RequestOptions,
  ): ApiPromise<VirtualAccount, VirtualAccounts.FetchVirtualAccountError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/virtual_accounts/{id}"),
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
        success: { kind: "json", schema: virtualAccountInternalSchema },
        errorFactory: VirtualAccounts.FetchVirtualAccountError,
      },
      options,
    );
  }

  /**
   * Fetch payments for a Virtual Account
   *
   * @remarks
   * Retrieve all payments received by a virtual account. Returns Payment objects.
   *
   * @returns List of payments for the virtual account.
   *
   * @throws {@link VirtualAccounts.FetchVirtualAccountPaymentsError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link CurlecError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  fetchVirtualAccountPayments(
    request: VirtualAccounts.FetchVirtualAccountPaymentsRequest,
    options?: RequestOptions,
  ): ApiPromise<VirtualAccountsPaymentsResponse, VirtualAccounts.FetchVirtualAccountPaymentsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/virtual_accounts/{id}/payments"),
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
        success: { kind: "json", schema: virtualAccountsPaymentsResponseInternalSchema },
        errorFactory: VirtualAccounts.FetchVirtualAccountPaymentsError,
      },
      options,
    );
  }

  /**
   * List Virtual Accounts
   *
   * @remarks
   * Retrieve a paginated list of virtual accounts with optional filters.
   *
   * @returns List of Virtual Accounts.
   *
   * @throws {@link VirtualAccounts.ListVirtualAccountsError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link CurlecError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listVirtualAccounts(
    request: VirtualAccounts.ListVirtualAccountsRequest = {},
    options?: RequestOptions,
  ): ApiPromise<VirtualAccountsResponse, VirtualAccounts.ListVirtualAccountsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/virtual_accounts"),
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
        success: { kind: "json", schema: virtualAccountsResponseInternalSchema },
        errorFactory: VirtualAccounts.ListVirtualAccountsError,
      },
      options,
    );
  }

  /**
   * Update a Virtual Account
   *
   * @remarks
   * Update the amount_expected or close_by timestamp on an active virtual account.
   *
   * @returns Virtual Account updated.
   *
   * @throws {@link VirtualAccounts.UpdateVirtualAccountError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link CurlecError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateVirtualAccount(
    request: VirtualAccounts.UpdateVirtualAccountRequest,
    options?: RequestOptions,
  ): ApiPromise<VirtualAccount, VirtualAccounts.UpdateVirtualAccountError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default("/virtual_accounts/{id}"),
        auth: anyAuth(
          this.#auth.basicAuth,
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials.forScopes("read_only"),
        ),
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: virtualAccountsRequest1Schema },
      },
      {
        success: { kind: "json", schema: virtualAccountInternalSchema },
        errorFactory: VirtualAccounts.UpdateVirtualAccountError,
      },
      options,
    );
  }
}

export namespace VirtualAccounts {
  export type AddAllowedPayerRequest = {
    /** Virtual Account ID (va_*). */
    vaId: string;
    body: VirtualAccountsAllowedPayersRequest;
  };

  export class AddAllowedPayerError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<AddAllowedPayerError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "error4", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type AddVpaReceiverRequest = {
    /** Virtual Account ID (va_*). */
    id: string;
    body: VirtualAccountsReceiversRequest;
  };

  export class AddVpaReceiverError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<AddVpaReceiverError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "error4", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type CloseVirtualAccountRequest = {
    /** Virtual Account ID (va_*). */
    id: string;
    body: VirtualAccountsCloseRequest;
  };

  export class CloseVirtualAccountError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<CloseVirtualAccountError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "error4", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type CreateVirtualAccountRequest = {
    body: VirtualAccountsRequest;
  };

  export class CreateVirtualAccountError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateVirtualAccountError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "error3", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type DeleteAllowedPayerRequest = {
    /** Virtual Account ID (va_*). */
    vaId: string;
    /** Allowed payer ID to remove. */
    id: string;
  };

  export class DeleteAllowedPayerError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<DeleteAllowedPayerError> = [
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "error3", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type FetchBankTransferRequest = {
    /** Payment ID (pay_*). */
    id: string;
  };

  export class FetchBankTransferError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<FetchBankTransferError> = [
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "error3", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type FetchVirtualAccountRequest = {
    /** Virtual Account ID (va_*). */
    id: string;
  };

  export class FetchVirtualAccountError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<FetchVirtualAccountError> = [
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "error3", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type FetchVirtualAccountPaymentsRequest = {
    /** Virtual Account ID (va_*). */
    id: string;
  };

  export class FetchVirtualAccountPaymentsError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<FetchVirtualAccountPaymentsError> = [
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "error3", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type ListVirtualAccountsRequest = {
    /** Unix timestamp filter (start). */
    from?: number;
    /** Unix timestamp filter (end). */
    to?: number;
    /** Number of records to return. Default: 10. Maximum: 100. @default 10 */
    count?: number;
    /** Number of records to skip. Use for pagination. Default: 0. @default 0 */
    skip?: number;
  };

  export const listVirtualAccountsRequestSchema: Schema<ListVirtualAccountsRequest> = s.lazySchema(() =>
    s.object<ListVirtualAccountsRequest>({
      from: s.optional(s.int()),
      to: s.optional(s.int()),
      count: s.defaulted(s.int().check(s.lte(100)), 10),
      skip: s.defaulted(s.int(), 0),
    }),
  );

  export class ListVirtualAccountsError extends ApiError {
    declare readonly payload: Declared<"error", Error> | Declared<"error2", Error> | Undeclared;

    static readonly errors: ErrorDecoders<ListVirtualAccountsError> = [
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type UpdateVirtualAccountRequest = {
    /** Virtual Account ID (va_*). */
    id: string;
    body: VirtualAccountsRequest1;
  };

  export class UpdateVirtualAccountError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<UpdateVirtualAccountError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "error4", decode: { kind: "json", schema: errorSchema } },
    ];
  }
}
