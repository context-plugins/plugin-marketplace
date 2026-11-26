import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { accountInternalSchema, type Account } from "../models/account.js";
import {
  companiesApiAccountsResponseInternalSchema,
  type CompaniesApiAccountsResponse,
} from "../models/companies-api-accounts-response.js";
import {
  companiesApiGeneralLedgerEntriesResponseInternalSchema,
  type CompaniesApiGeneralLedgerEntriesResponse,
} from "../models/companies-api-general-ledger-entries-response.js";
import { errorResponseSchema, type ErrorResponse } from "../models/error-response.js";
import type { Servers } from "../servers.js";

/**
 * Manage general ledger accounts
 */
export class Accounts {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Get an Account
   *
   * @remarks
   * Retrieves a specific account by ID.
   *
   * @returns Successfully retrieved account
   *
   * @throws {@link Accounts.GetAccountError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link Dynamics365BusinessCentralError} when no usable response was produced: a
   * connection failure, a timeout, a body that would not decode, a value that would not encode, or
   * a credential that could not be obtained
   */
  getAccount(
    request: Accounts.GetAccountRequest,
    options?: RequestOptions,
  ): ApiPromise<Account, Accounts.GetAccountError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/companies({company_id})/accounts({account_id})"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearerAuth,
        ),
        pathParams: [
          { name: "company_id", value: request.companyId, schema: s.string() },
          { name: "account_id", value: request.accountId, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: accountInternalSchema },
        errorFactory: Accounts.GetAccountError,
      },
      options,
    );
  }

  /**
   * List Accounts
   *
   * @remarks
   * Returns a list of general ledger account objects.
   *
   * @returns Successfully retrieved accounts
   *
   * @throws {@link Accounts.ListAccountsError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link Dynamics365BusinessCentralError} when no usable response was produced: a
   * connection failure, a timeout, a body that would not decode, a value that would not encode, or
   * a credential that could not be obtained
   */
  listAccounts(
    request: Accounts.ListAccountsRequest,
    options?: RequestOptions,
  ): ApiPromise<CompaniesApiAccountsResponse, Accounts.ListAccountsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/companies({company_id})/accounts"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearerAuth,
        ),
        pathParams: [{ name: "company_id", value: request.companyId, schema: s.string() }],
        query: [
          { name: "$top", value: request.top, schema: s.optional(s.int()) },
          { name: "$skip", value: request.skip, schema: s.optional(s.int()) },
          { name: "$filter", value: request.filter, schema: s.optional(s.string()) },
          { name: "$orderby", value: request.orderby, schema: s.optional(s.string()) },
          { name: "$select", value: request.select, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: companiesApiAccountsResponseInternalSchema },
        errorFactory: Accounts.ListAccountsError,
      },
      options,
    );
  }

  /**
   * List General Ledger Entries
   *
   * @remarks
   * Returns a list of general ledger entries.
   *
   * @returns Successfully retrieved general ledger entries
   *
   * @throws {@link Accounts.ListGeneralLedgerEntriesError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link Dynamics365BusinessCentralError} when no usable response was produced: a
   * connection failure, a timeout, a body that would not decode, a value that would not encode, or
   * a credential that could not be obtained
   */
  listGeneralLedgerEntries(
    request: Accounts.ListGeneralLedgerEntriesRequest,
    options?: RequestOptions,
  ): ApiPromise<CompaniesApiGeneralLedgerEntriesResponse, Accounts.ListGeneralLedgerEntriesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/companies({company_id})/generalLedgerEntries"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearerAuth,
        ),
        pathParams: [{ name: "company_id", value: request.companyId, schema: s.string() }],
        query: [
          { name: "$top", value: request.top, schema: s.optional(s.int()) },
          { name: "$skip", value: request.skip, schema: s.optional(s.int()) },
          { name: "$filter", value: request.filter, schema: s.optional(s.string()) },
          { name: "$orderby", value: request.orderby, schema: s.optional(s.string()) },
          { name: "$select", value: request.select, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: companiesApiGeneralLedgerEntriesResponseInternalSchema },
        errorFactory: Accounts.ListGeneralLedgerEntriesError,
      },
      options,
    );
  }
}

export namespace Accounts {
  export type GetAccountRequest = {
    /** The unique identifier of the company */
    companyId: string;
    accountId: string;
  };

  export class GetAccountError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetAccountError> = [
      { on: 401, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type ListAccountsRequest = {
    /** The unique identifier of the company */
    companyId: string;
    /** Maximum number of items to return */
    top?: number;
    /** Number of items to skip */
    skip?: number;
    /** OData filter expression */
    filter?: string;
    /** OData order by expression */
    orderby?: string;
    /** Comma-separated list of properties to include in the response */
    select?: string;
  };

  export const listAccountsRequestSchema: Schema<ListAccountsRequest> = s.lazySchema(() =>
    s.object<ListAccountsRequest>({
      companyId: s.string(),
      top: s.optional(s.int().check(s.gte(0))),
      skip: s.optional(s.int().check(s.gte(0))),
      filter: s.optional(s.string()),
      orderby: s.optional(s.string()),
      select: s.optional(s.string()),
    }),
  );

  export class ListAccountsError extends ApiError {
    declare readonly payload: Declared<"errorResponse", ErrorResponse> | Undeclared;

    static readonly errors: ErrorDecoders<ListAccountsError> = [
      { on: 401, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type ListGeneralLedgerEntriesRequest = {
    /** The unique identifier of the company */
    companyId: string;
    /** Maximum number of items to return */
    top?: number;
    /** Number of items to skip */
    skip?: number;
    /** OData filter expression */
    filter?: string;
    /** OData order by expression */
    orderby?: string;
    /** Comma-separated list of properties to include in the response */
    select?: string;
  };

  export const listGeneralLedgerEntriesRequestSchema: Schema<ListGeneralLedgerEntriesRequest> = s.lazySchema(
    () =>
      s.object<ListGeneralLedgerEntriesRequest>({
        companyId: s.string(),
        top: s.optional(s.int().check(s.gte(0))),
        skip: s.optional(s.int().check(s.gte(0))),
        filter: s.optional(s.string()),
        orderby: s.optional(s.string()),
        select: s.optional(s.string()),
      }),
  );

  export class ListGeneralLedgerEntriesError extends ApiError {
    declare readonly payload: Declared<"errorResponse", ErrorResponse> | Undeclared;

    static readonly errors: ErrorDecoders<ListGeneralLedgerEntriesError> = [
      { on: 401, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }
}
