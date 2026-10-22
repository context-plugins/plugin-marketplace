import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { Accept, acceptSchema } from "../models/accept.js";
import {
  createAccountFundingSourceSchema,
  type CreateAccountFundingSource,
} from "../models/create-account-funding-source.js";
import type { Servers } from "../servers.js";

/**
 * Operations related to Accounts
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
   * Create a funding source for an account
   *
   * @remarks
   * Create a funding source by adding a bank account to a Main Dwolla Account. This endpoint allows
   * you to connect a checking or savings account using either manual bank account details or an
   * exchange resource.
   *
   * For more information about funding sources, see the [Funding Sources API
   * Reference](https://developers.dwolla.com/docs/api-reference/funding-sources).
   *
   * @returns successful operation
   *
   * @throws {@link Accounts.CreateFundingSourceError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link DwollaApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createFundingSource(
    request: Accounts.CreateFundingSourceRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, Accounts.CreateFundingSourceError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/funding-sources"),
        auth: this.#auth.clientCredentials,
        pathParams: [],
        query: [],
        headers: [
          {
            name: "Accept",
            value: request.accept,
            schema: s.defaulted(acceptSchema, Accept.ApplicationVndDwollaV1HalJson),
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "json", value: request.body, schema: createAccountFundingSourceSchema },
      },
      {
        success: { kind: "empty" },
        errorFactory: Accounts.CreateFundingSourceError,
      },
      options,
    );
  }

  /**
   * Retrieve account details
   *
   * @remarks
   * Returns basic account information for your authorized Main Dwolla Account, including account
   * ID, name, and links to related resources such as funding sources, transfers, and customers.
   *
   * @returns successful operation
   *
   * @throws {@link Accounts.GetAccountError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link DwollaApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getAccount(
    request: Accounts.GetAccountRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, Accounts.GetAccountError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/accounts/{id}"),
        auth: this.#auth.clientCredentials,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [
          {
            name: "Accept",
            value: request.accept,
            schema: s.defaulted(acceptSchema, Accept.ApplicationVndDwollaV1HalJson),
          },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: Accounts.GetAccountError,
      },
      options,
    );
  }

  /**
   * List and search account transfers
   *
   * @remarks
   * Returns a paginated, searchable list of transfers associated with the specified Main Dwolla
   * account. Supports advanced filtering by amount range, date range, transfer status, and
   * correlation ID. Results are limited to 10,000 transfers per query; use date range filters for
   * historical data beyond this limit.
   *
   * @returns successful operation
   *
   * @throws {@link Accounts.ListAndSearchTransfersError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link DwollaApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listAndSearchTransfers(
    request: Accounts.ListAndSearchTransfersRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, Accounts.ListAndSearchTransfersError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/accounts/{id}/transfers"),
        auth: this.#auth.clientCredentials,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [
          { name: "search", value: request.search, schema: s.optional(s.string()) },
          { name: "startAmount", value: request.startAmount, schema: s.optional(s.string()) },
          { name: "endAmount", value: request.endAmount, schema: s.optional(s.string()) },
          { name: "startDate", value: request.startDate, schema: s.optional(s.string()) },
          { name: "endDate", value: request.endDate, schema: s.optional(s.string()) },
          { name: "status", value: request.status, schema: s.optional(s.string()) },
          { name: "correlationId", value: request.correlationId, schema: s.optional(s.string()) },
          { name: "limit", value: request.limit, schema: s.optional(s.string()) },
          { name: "offset", value: request.offset, schema: s.optional(s.string()) },
        ],
        headers: [
          {
            name: "Accept",
            value: request.accept,
            schema: s.defaulted(acceptSchema, Accept.ApplicationVndDwollaV1HalJson),
          },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: Accounts.ListAndSearchTransfersError,
      },
      options,
    );
  }

  /**
   * List funding sources for an account
   *
   * @remarks
   * Get a list of all funding sources associated with a specific Main Dwolla Account. This endpoint
   * returns both bank accounts and balance funding sources, with detailed information about each
   * funding source's status, type, and available processing channels.
   *
   * @returns successful operation
   *
   * @throws {@link Accounts.ListFundingSourcesError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link DwollaApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listFundingSources(
    request: Accounts.ListFundingSourcesRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, Accounts.ListFundingSourcesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/accounts/{id}/funding-sources"),
        auth: this.#auth.clientCredentials,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [{ name: "removed", value: request.removed, schema: s.optional(s.string()) }],
        headers: [
          {
            name: "Accept",
            value: request.accept,
            schema: s.defaulted(acceptSchema, Accept.ApplicationVndDwollaV1HalJson),
          },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: Accounts.ListFundingSourcesError,
      },
      options,
    );
  }

  /**
   * List account mass payments
   *
   * @remarks
   * Returns a paginated list of mass payments created by your Main Dwolla account. Results are
   * sorted by creation date in descending order (newest first) and can be filtered by correlation
   * ID.
   *
   * @returns successful operation
   *
   * @throws {@link Accounts.ListMassPaymentsError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link DwollaApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listMassPayments(
    request: Accounts.ListMassPaymentsRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, Accounts.ListMassPaymentsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/accounts/{id}/mass-payments"),
        auth: this.#auth.clientCredentials,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [
          { name: "limit", value: request.limit, schema: s.defaulted(s.int(), 25) },
          { name: "offset", value: request.offset, schema: s.defaulted(s.int(), 0) },
          { name: "correlationId", value: request.correlationId, schema: s.optional(s.string()) },
        ],
        headers: [
          {
            name: "Accept",
            value: request.accept,
            schema: s.defaulted(acceptSchema, Accept.ApplicationVndDwollaV1HalJson),
          },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: Accounts.ListMassPaymentsError,
      },
      options,
    );
  }
}

export namespace Accounts {
  export type CreateFundingSourceRequest = {
    /**
     * The media type of the response. Must be application/vnd.dwolla.v1.hal+json
     *
     * @default Accept.ApplicationVndDwollaV1HalJson
     */
    accept?: Accept;
    /** Parameters for the funding source to be created */
    body: CreateAccountFundingSource;
  };

  export class CreateFundingSourceError extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Declared<"error403", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<CreateFundingSourceError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 403, kind: "error403", decode: { kind: "empty" } },
    ];
  }

  export type GetAccountRequest = {
    /** Account's unique identifier */
    id: string;
    /**
     * The media type of the response. Must be application/vnd.dwolla.v1.hal+json
     *
     * @default Accept.ApplicationVndDwollaV1HalJson
     */
    accept?: Accept;
  };

  export class GetAccountError extends ApiError {
    declare readonly payload: Declared<"error403", undefined> | Declared<"error404", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<GetAccountError> = [
      { on: 403, kind: "error403", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
    ];
  }

  export type ListAndSearchTransfersRequest = {
    /** Account's unique identifier */
    id: string;
    /**
     * A string to search on fields `firstName`, `lastName`, `email`, `businessName`, Customer ID,
     * and Account ID
     */
    search?: string;
    /** Only include transactions with an amount equal to or greater than `startAmount` */
    startAmount?: string;
    /** Only include transactions with an amount equal to or less than `endAmount` */
    endAmount?: string;
    /** Only include transactions created after this date. ISO-8601 format `YYYY-MM-DD` */
    startDate?: string;
    /** Only include transactions created before this date. ISO-8601 format `YYYY-MM-DD` */
    endDate?: string;
    /**
     * Filter on transaction status. Possible values are `pending`, `processed`, `failed`, or
     * `cancelled`
     */
    status?: string;
    /** A string value to search on if `correlationId` was specified for a transaction */
    correlationId?: string;
    /** Number of search results to return. Defaults to 25 */
    limit?: string;
    /** Number of search results to skip. Use for pagination */
    offset?: string;
    /**
     * The media type of the response. Must be application/vnd.dwolla.v1.hal+json
     *
     * @default Accept.ApplicationVndDwollaV1HalJson
     */
    accept?: Accept;
  };

  export class ListAndSearchTransfersError extends ApiError {
    declare readonly payload: Declared<"error404", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<ListAndSearchTransfersError> = [
      { on: 404, kind: "error404", decode: { kind: "empty" } },
    ];
  }

  export type ListFundingSourcesRequest = {
    /** Account's unique identifier */
    id: string;
    /** Filter removed funding sources. Boolean value. Defaults to `true` */
    removed?: string;
    /**
     * The media type of the response. Must be application/vnd.dwolla.v1.hal+json
     *
     * @default Accept.ApplicationVndDwollaV1HalJson
     */
    accept?: Accept;
  };

  export class ListFundingSourcesError extends ApiError {
    declare readonly payload: Declared<"error403", undefined> | Declared<"error404", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<ListFundingSourcesError> = [
      { on: 403, kind: "error403", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
    ];
  }

  export type ListMassPaymentsRequest = {
    /** Account's unique identifier */
    id: string;
    /** Maximum number of results to return @default 25 */
    limit?: number;
    /** How many results to skip. @default 0 */
    offset?: number;
    /** Correlation ID to search by. */
    correlationId?: string;
    /**
     * The media type of the response. Must be application/vnd.dwolla.v1.hal+json
     *
     * @default Accept.ApplicationVndDwollaV1HalJson
     */
    accept?: Accept;
  };

  export class ListMassPaymentsError extends ApiError {
    declare readonly payload: Declared<"error403", undefined> | Declared<"error404", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<ListMassPaymentsError> = [
      { on: 403, kind: "error403", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
    ];
  }
}
