import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { Accept, acceptSchema } from "../models/accept.js";
import { transfersRequestSchema, type TransfersRequest } from "../models/transfers-request.js";
import { transfersRequest1Schema, type TransfersRequest1 } from "../models/transfers-request1.js";
import type { Servers } from "../servers.js";

/**
 * Operations related to Transfers
 */
export class TransfersApi {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Cancel a transfer
   *
   * @remarks
   * Cancel a pending transfer by setting its status to cancelled. Only transfers in pending status
   * can be cancelled before processing begins. Returns the updated transfer resource with cancelled
   * status. Use this endpoint to stop a bank transfer from further processing.
   *
   * @returns successful operation
   *
   * @throws {@link TransfersApi.CancelTransferError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link DwollaApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  cancelTransfer(
    request: TransfersApi.CancelTransferRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, TransfersApi.CancelTransferError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/transfers/{id}"),
        auth: this.#auth.clientCredentials,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [
          {
            name: "Accept",
            value: request.accept,
            schema: s.defaulted(acceptSchema, Accept.ApplicationVndDwollaV1HalJson),
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "json", value: request.body, schema: transfersRequest1Schema },
      },
      {
        success: { kind: "empty" },
        errorFactory: TransfersApi.CancelTransferError,
      },
      options,
    );
  }

  /**
   * Retrieve a transfer
   *
   * @remarks
   * Retrieve detailed information for a specific transfer by its unique identifier belonging to an
   * Account or Customer. Returns transfer status, amount, creation date, clearing details, and
   * links to source and destination funding sources for complete transaction tracking. Includes
   * cancellation links when applicable and references to related funding transfers. Essential for
   * monitoring transfer lifecycle and transaction reconciliation.
   *
   * @returns successful operation
   *
   * @throws {@link TransfersApi.GetTransferError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link DwollaApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getTransfer(
    request: TransfersApi.GetTransferRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, TransfersApi.GetTransferError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/transfers/{id}"),
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
        errorFactory: TransfersApi.GetTransferError,
      },
      options,
    );
  }

  /**
   * Retrieve a transfer failure reason
   *
   * @remarks
   * Retrieve detailed failure information for a failed bank or VAN transfer including the ACH
   * return code, description, and explanation. Returns failure details with links to the failed
   * funding source and associated Customer for comprehensive error analysis. Available only for
   * transfers with failure status and accessed through the failure link from transfer retrieval.
   * Critical for troubleshooting payment failures and understanding ACH return reasons.
   *
   * @returns successful operation
   *
   * @throws {@link TransfersApi.GetTransferFailureReasonError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link DwollaApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getTransferFailureReason(
    request: TransfersApi.GetTransferFailureReasonRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, TransfersApi.GetTransferFailureReasonError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/transfers/{id}/failure"),
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
        errorFactory: TransfersApi.GetTransferFailureReasonError,
      },
      options,
    );
  }

  /**
   * Initiate a transfer
   *
   * @remarks
   * Initiate a transfer between funding sources from a Dwolla Account or API Customer resource.
   * Supports ACH, Instant Payments (RTP/FedNow), Push-to-Debit Card, and wire transfers with
   * optional expedited clearing, facilitator fees, metadata, and correlation IDs for enhanced
   * traceability. Includes idempotency key support to prevent duplicate transfers and extensive
   * customization options for addenda records and processing channels. Returns the location of the
   * created transfer resource for tracking and management.
   *
   * @returns created
   *
   * @throws {@link TransfersApi.InitiateTransferError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link DwollaApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  initiateTransfer(
    request: TransfersApi.InitiateTransferRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, TransfersApi.InitiateTransferError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/transfers"),
        auth: this.#auth.clientCredentials,
        pathParams: [],
        query: [],
        headers: [
          {
            name: "Accept",
            value: request.accept,
            schema: s.defaulted(acceptSchema, Accept.ApplicationVndDwollaV1HalJson),
          },
          { name: "Idempotency-Key", value: request.idempotencyKey, schema: s.optional(s.string()) },
        ],
        body: { kind: "json", value: request.body, schema: transfersRequestSchema },
      },
      {
        success: { kind: "empty" },
        errorFactory: TransfersApi.InitiateTransferError,
      },
      options,
    );
  }

  /**
   * List and search transfers for a customer
   *
   * @remarks
   * Retrieve and search transfers for a specific Customer with comprehensive filtering and
   * pagination support. Supports searching by customer details (name, email, business name), amount
   * ranges, date ranges, transfer status, and correlation IDs for enhanced transaction discovery.
   * Returns paginated transfer results including status, amounts, metadata, and links to source and
   * destination funding sources. Use this endpoint for transaction history analysis and
   * reconciliation purposes.
   *
   * @returns successful operation
   *
   * @throws {@link TransfersApi.ListCustomerTransfersError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link DwollaApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listCustomerTransfers(
    request: TransfersApi.ListCustomerTransfersRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, TransfersApi.ListCustomerTransfersError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/customers/{id}/transfers"),
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
        errorFactory: TransfersApi.ListCustomerTransfersError,
      },
      options,
    );
  }

  /**
   * List fees for a transfer
   *
   * @remarks
   * Retrieve detailed fee information for a specific transfer by its unique identifier. Returns the
   * total number of fees and individual fee transaction details including amounts, status, and
   * links to source and destination accounts.
   *
   * @returns successful operation
   *
   * @throws {@link TransfersApi.ListTransferFeesError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link DwollaApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listTransferFees(
    request: TransfersApi.ListTransferFeesRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, TransfersApi.ListTransferFeesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/transfers/{id}/fees"),
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
        errorFactory: TransfersApi.ListTransferFeesError,
      },
      options,
    );
  }
}

export namespace TransfersApi {
  export type CancelTransferRequest = {
    /** ID of transfer */
    id: string;
    /**
     * The media type of the response. Must be application/vnd.dwolla.v1.hal+json
     *
     * @default Accept.ApplicationVndDwollaV1HalJson
     */
    accept?: Accept;
    /** Parameters to cancel a transfer */
    body: TransfersRequest1;
  };

  export class CancelTransferError extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Declared<"error404", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<CancelTransferError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
    ];
  }

  export type GetTransferRequest = {
    /** ID of transfer to be retrieved */
    id: string;
    /**
     * The media type of the response. Must be application/vnd.dwolla.v1.hal+json
     *
     * @default Accept.ApplicationVndDwollaV1HalJson
     */
    accept?: Accept;
  };

  export class GetTransferError extends ApiError {
    declare readonly payload: Declared<"error404", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<GetTransferError> = [
      { on: 404, kind: "error404", decode: { kind: "empty" } },
    ];
  }

  export type GetTransferFailureReasonRequest = {
    /** Transfer unique identifier */
    id: string;
    /**
     * The media type of the response. Must be application/vnd.dwolla.v1.hal+json
     *
     * @default Accept.ApplicationVndDwollaV1HalJson
     */
    accept?: Accept;
  };

  export class GetTransferFailureReasonError extends ApiError {
    declare readonly payload: Declared<"error403", undefined> | Declared<"error404", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<GetTransferFailureReasonError> = [
      { on: 403, kind: "error403", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
    ];
  }

  export type InitiateTransferRequest = {
    /**
     * The media type of the response. Must be application/vnd.dwolla.v1.hal+json
     *
     * @default Accept.ApplicationVndDwollaV1HalJson
     */
    accept?: Accept;
    idempotencyKey?: string;
    /** Parameters to initiate a transfer */
    body: TransfersRequest;
  };

  export class InitiateTransferError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error403", undefined>
      | Declared<"error429", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<InitiateTransferError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 403, kind: "error403", decode: { kind: "empty" } },
      { on: 429, kind: "error429", decode: { kind: "empty" } },
    ];
  }

  export type ListCustomerTransfersRequest = {
    /** Customer's unique identifier */
    id: string;
    /** A string to search on fields `firstName`, `lastName`, `email`, `businessName` */
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

  export class ListCustomerTransfersError extends ApiError {
    declare readonly payload: Declared<"error404", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<ListCustomerTransfersError> = [
      { on: 404, kind: "error404", decode: { kind: "empty" } },
    ];
  }

  export type ListTransferFeesRequest = {
    /** ID of transfer to retrieve fees for */
    id: string;
    /**
     * The media type of the response. Must be application/vnd.dwolla.v1.hal+json
     *
     * @default Accept.ApplicationVndDwollaV1HalJson
     */
    accept?: Accept;
  };

  export class ListTransferFeesError extends ApiError {
    declare readonly payload: Declared<"error404", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<ListTransferFeesError> = [
      { on: 404, kind: "error404", decode: { kind: "empty" } },
    ];
  }
}
