import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { errorSchema, type Error } from "../models/error.js";
import {
  fundAccountRazorpayXFundAccountsApiInternalSchema,
  type FundAccountRazorpayXFundAccountsApi,
} from "../models/fund-account-razorpay-xfund-accounts-api.js";
import {
  fundAccountsRequestInternalSchema,
  type FundAccountsRequest,
} from "../models/fund-accounts-request.js";
import { fundAccountsRequest1Schema, type FundAccountsRequest1 } from "../models/fund-accounts-request1.js";
import {
  fundAccountsResponseInternalSchema,
  type FundAccountsResponse,
} from "../models/fund-accounts-response.js";
import type { Servers } from "../servers.js";

/**
 * Payout destination accounts (bank, VPA, card) linked to contacts
 */
export class XFundAccounts {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Activate or deactivate a fund account
   *
   * @remarks
   * Activate or deactivate a fund account. Fund account details are immutable — only the `active`
   * status can be changed.
   *
   * @returns Updated fund account
   *
   * @throws {@link XFundAccounts.ActivateDeactivateFundAccountError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link CurlecError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  activateDeactivateFundAccount(
    request: XFundAccounts.ActivateDeactivateFundAccountRequest,
    options?: RequestOptions,
  ): ApiPromise<FundAccountRazorpayXFundAccountsApi, XFundAccounts.ActivateDeactivateFundAccountError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default("/fund_accounts/{fund_account_id}"),
        auth: anyAuth(
          this.#auth.basicAuth,
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials.forScopes("read_only"),
        ),
        pathParams: [{ name: "fund_account_id", value: request.fundAccountId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: fundAccountsRequest1Schema },
      },
      {
        success: { kind: "json", schema: fundAccountRazorpayXFundAccountsApiInternalSchema },
        errorFactory: XFundAccounts.ActivateDeactivateFundAccountError,
      },
      options,
    );
  }

  /**
   * Create a fund account
   *
   * @remarks
   * Create a bank account, VPA, card, or wallet (Amazon Pay) fund account linked to a contact. Fund
   * accounts are immutable after creation. Returns existing record if contact_id + account details
   * all match.
   *
   * @returns Fund account created
   *
   * @throws {@link XFundAccounts.CreateFundAccountError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link CurlecError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createFundAccount(
    request: XFundAccounts.CreateFundAccountRequest,
    options?: RequestOptions,
  ): ApiPromise<FundAccountRazorpayXFundAccountsApi, XFundAccounts.CreateFundAccountError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/fund_accounts"),
        auth: anyAuth(
          this.#auth.basicAuth,
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials.forScopes("read_only"),
        ),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: fundAccountsRequestInternalSchema },
      },
      {
        success: { kind: "json", schema: fundAccountRazorpayXFundAccountsApiInternalSchema },
        errorFactory: XFundAccounts.CreateFundAccountError,
      },
      options,
    );
  }

  /**
   * Fetch a fund account
   *
   * @remarks
   * Fetch details of a specific fund account by its ID.
   *
   * @returns Fund account details
   *
   * @throws {@link XFundAccounts.FetchFundAccountError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link CurlecError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  fetchFundAccount(
    request: XFundAccounts.FetchFundAccountRequest,
    options?: RequestOptions,
  ): ApiPromise<FundAccountRazorpayXFundAccountsApi, XFundAccounts.FetchFundAccountError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/fund_accounts/{fund_account_id}"),
        auth: anyAuth(
          this.#auth.basicAuth,
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials.forScopes("read_only"),
        ),
        pathParams: [{ name: "fund_account_id", value: request.fundAccountId, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: fundAccountRazorpayXFundAccountsApiInternalSchema },
        errorFactory: XFundAccounts.FetchFundAccountError,
      },
      options,
    );
  }

  /**
   * List fund accounts
   *
   * @remarks
   * List fund accounts linked to contacts. Filter by contact ID and/or account type.
   *
   * @returns List of fund accounts
   *
   * @throws {@link XFundAccounts.ListFundAccountsError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link CurlecError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listFundAccounts(
    request: XFundAccounts.ListFundAccountsRequest = {},
    options?: RequestOptions,
  ): ApiPromise<FundAccountsResponse, XFundAccounts.ListFundAccountsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/fund_accounts"),
        auth: anyAuth(
          this.#auth.basicAuth,
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials.forScopes("read_only"),
        ),
        pathParams: [],
        query: [
          { name: "contact_id", value: request.contactId, schema: s.optional(s.string()) },
          { name: "account_type", value: request.accountType, schema: s.optional(s.string()) },
          { name: "count", value: request.count, schema: s.defaulted(s.int(), 10) },
          { name: "skip", value: request.skip, schema: s.defaulted(s.int(), 0) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: fundAccountsResponseInternalSchema },
        errorFactory: XFundAccounts.ListFundAccountsError,
      },
      options,
    );
  }
}

export namespace XFundAccounts {
  export type ActivateDeactivateFundAccountRequest = {
    /** Unique identifier of the fund account (e.g. `fa_00000000000001`). */
    fundAccountId: string;
    body: FundAccountsRequest1;
  };

  export class ActivateDeactivateFundAccountError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<ActivateDeactivateFundAccountError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error4", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type CreateFundAccountRequest = {
    body: FundAccountsRequest;
  };

  export class CreateFundAccountError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateFundAccountError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error4", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type FetchFundAccountRequest = {
    /** Unique identifier of the fund account (e.g. `fa_00000000000001`). */
    fundAccountId: string;
  };

  export class FetchFundAccountError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<FetchFundAccountError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error4", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error5", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type ListFundAccountsRequest = {
    /** Filter by contact ID to list fund accounts linked to that contact. */
    contactId?: string;
    /** Filter by fund account type: `bank_account`, `vpa`, `card`, or `wallet`. */
    accountType?: string;
    /** Number of fund accounts to return. Default: 10. Maximum: 100. @default 10 */
    count?: number;
    /** Number of fund accounts to skip. Use for pagination. Default: 0. @default 0 */
    skip?: number;
  };

  export class ListFundAccountsError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListFundAccountsError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error4", decode: { kind: "json", schema: errorSchema } },
    ];
  }
}
