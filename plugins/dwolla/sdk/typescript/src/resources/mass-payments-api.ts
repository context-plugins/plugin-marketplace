import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { Accept, acceptSchema } from "../models/accept.js";
import { massPaymentsRequestSchema, type MassPaymentsRequest } from "../models/mass-payments-request.js";
import { massPaymentsRequest1Schema, type MassPaymentsRequest1 } from "../models/mass-payments-request1.js";
import type { Servers } from "../servers.js";

/**
 * Operations related to Mass Payments
 */
export class MassPaymentsApi {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Retrieve a mass payment
   *
   * @remarks
   * Retrieve detailed information for a mass payment by its unique identifier. Returns the current
   * processing status (pending, processing, or complete), creation date, metadata, and links to the
   * source funding source and payment items. Use this endpoint to monitor mass payment processing
   * progress and determine when to check individual item results.
   *
   * @returns successful operation
   *
   * @throws {@link MassPaymentsApi.GetMassPaymentError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link DwollaApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getMassPayment(
    request: MassPaymentsApi.GetMassPaymentRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, MassPaymentsApi.GetMassPaymentError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/mass-payments/{id}"),
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
        errorFactory: MassPaymentsApi.GetMassPaymentError,
      },
      options,
    );
  }

  /**
   * Retrieve mass payment item
   *
   * @remarks
   * Retrieve detailed information for a specific mass payment item by its unique identifier.
   * Returns item status, amount, metadata, and links to the parent mass payment, associated
   * transfer, and destination funding source. Use this endpoint to check the processing status and
   * details of an individual item within a mass payment batch.
   *
   * @returns success operation
   *
   * @throws {@link MassPaymentsApi.GetMassPaymentItemError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link DwollaApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getMassPaymentItem(
    request: MassPaymentsApi.GetMassPaymentItemRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, MassPaymentsApi.GetMassPaymentItemError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/mass-payment-items/{itemId}"),
        auth: this.#auth.clientCredentials,
        pathParams: [{ name: "itemId", value: request.itemId, schema: s.string() }],
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
        errorFactory: MassPaymentsApi.GetMassPaymentItemError,
      },
      options,
    );
  }

  /**
   * Initiate a mass payment
   *
   * @remarks
   * Create a mass payment containing up to 5,000 individual payment items from a Dwolla Main
   * Account or Verified Customer funding source. Supports optional metadata, correlation IDs for
   * traceability, deferred processing, and expedited transfer options including same-day ACH
   * clearing. Returns the location of the created mass payment resource with a unique identifier
   * for tracking and management.
   *
   * @returns created
   *
   * @throws {@link MassPaymentsApi.InitiateMassPaymentError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link DwollaApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  initiateMassPayment(
    request: MassPaymentsApi.InitiateMassPaymentRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, MassPaymentsApi.InitiateMassPaymentError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/mass-payments"),
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
        body: { kind: "json", value: request.body, schema: massPaymentsRequestSchema },
      },
      {
        success: { kind: "empty" },
        errorFactory: MassPaymentsApi.InitiateMassPaymentError,
      },
      options,
    );
  }

  /**
   * List mass payments for customer
   *
   * @remarks
   * Retrieve all previously created mass payments for a Verified Customer account with optional
   * correlation ID filtering and pagination support. Mass payments are returned ordered by date
   * created with most recent appearing first. Returns paginated results including mass payment
   * status, metadata, source funding information, and item links. Supports standard pagination
   * parameters and correlation ID search for enhanced traceability.
   *
   * @returns successful operation
   *
   * @throws {@link MassPaymentsApi.ListCustomerMassPaymentsError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link DwollaApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listCustomerMassPayments(
    request: MassPaymentsApi.ListCustomerMassPaymentsRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, MassPaymentsApi.ListCustomerMassPaymentsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/customers/{id}/mass-payments"),
        auth: this.#auth.clientCredentials,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [
          { name: "correlationId", value: request.correlationId, schema: s.optional(s.string()) },
          { name: "limit", value: request.limit, schema: s.optional(s.int()) },
          { name: "offset", value: request.offset, schema: s.optional(s.int()) },
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
        errorFactory: MassPaymentsApi.ListCustomerMassPaymentsError,
      },
      options,
    );
  }

  /**
   * List items for a mass payment
   *
   * @remarks
   * Retrieve individual payment items within a mass payment with optional status filtering and
   * pagination support. Each item represents a distinct payment with status indicators (failed,
   * pending, success) showing whether a transfer was successfully created. Returns paginated item
   * details including amount, destination, metadata, and error information for failed items.
   * Supports filtering by status and standard pagination.
   *
   * @returns successful operation
   *
   * @throws {@link MassPaymentsApi.ListMassPaymentItemsError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link DwollaApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listMassPaymentItems(
    request: MassPaymentsApi.ListMassPaymentItemsRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, MassPaymentsApi.ListMassPaymentItemsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/mass-payments/{id}/items"),
        auth: this.#auth.clientCredentials,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [
          { name: "limit", value: request.limit, schema: s.optional(s.string()) },
          { name: "offset", value: request.offset, schema: s.optional(s.string()) },
          { name: "status", value: request.status, schema: s.optional(s.string()) },
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
        errorFactory: MassPaymentsApi.ListMassPaymentItemsError,
      },
      options,
    );
  }

  /**
   * Update a mass payment
   *
   * @remarks
   * Update the status of a deferred mass payment to control its processing lifecycle. Set status to
   * `pending` to trigger processing and begin fund transfers, or `cancelled` to permanently cancel
   * the mass payment before processing begins. Only applies to mass payments created with deferred
   * status. Returns the updated mass payment resource with the new status.
   *
   * @returns successful operation
   *
   * @throws {@link MassPaymentsApi.UpdateMassPaymentError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link DwollaApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateMassPayment(
    request: MassPaymentsApi.UpdateMassPaymentRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, MassPaymentsApi.UpdateMassPaymentError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/mass-payments/{id}"),
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
        body: { kind: "json", value: request.body, schema: massPaymentsRequest1Schema },
      },
      {
        success: { kind: "empty" },
        errorFactory: MassPaymentsApi.UpdateMassPaymentError,
      },
      options,
    );
  }
}

export namespace MassPaymentsApi {
  export type GetMassPaymentRequest = {
    /** Mass payment unique identifier */
    id: string;
    /**
     * The media type of the response. Must be application/vnd.dwolla.v1.hal+json
     *
     * @default Accept.ApplicationVndDwollaV1HalJson
     */
    accept?: Accept;
  };

  export class GetMassPaymentError extends ApiError {
    declare readonly payload: Declared<"error403", undefined> | Declared<"error404", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<GetMassPaymentError> = [
      { on: 403, kind: "error403", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
    ];
  }

  export type GetMassPaymentItemRequest = {
    /** ID of item to be retrieved in mass payment */
    itemId: string;
    /**
     * The media type of the response. Must be application/vnd.dwolla.v1.hal+json
     *
     * @default Accept.ApplicationVndDwollaV1HalJson
     */
    accept?: Accept;
  };

  export class GetMassPaymentItemError extends ApiError {
    declare readonly payload: Declared<"error403", undefined> | Declared<"error404", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<GetMassPaymentItemError> = [
      { on: 403, kind: "error403", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
    ];
  }

  export type InitiateMassPaymentRequest = {
    /**
     * The media type of the response. Must be application/vnd.dwolla.v1.hal+json
     *
     * @default Accept.ApplicationVndDwollaV1HalJson
     */
    accept?: Accept;
    idempotencyKey?: string;
    /** Parameters for initiating a mass payment */
    body: MassPaymentsRequest;
  };

  export class InitiateMassPaymentError extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Declared<"error403", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<InitiateMassPaymentError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 403, kind: "error403", decode: { kind: "empty" } },
    ];
  }

  export type ListCustomerMassPaymentsRequest = {
    /** Customer ID to get mass payments for */
    id: string;
    /** A string value to search on if `correlationId` was specified for a transaction */
    correlationId?: string;
    /** Number of search results to return. Defaults to 25 */
    limit?: number;
    /** Number of search results to skip. Use for pagination */
    offset?: number;
    /**
     * The media type of the response. Must be application/vnd.dwolla.v1.hal+json
     *
     * @default Accept.ApplicationVndDwollaV1HalJson
     */
    accept?: Accept;
  };

  export class ListCustomerMassPaymentsError extends ApiError {
    declare readonly payload: Declared<"error403", undefined> | Declared<"error404", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<ListCustomerMassPaymentsError> = [
      { on: 403, kind: "error403", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
    ];
  }

  export type ListMassPaymentItemsRequest = {
    /** Mass payment unique identifier */
    id: string;
    /** How many results to return */
    limit?: string;
    /** How many results to skip */
    offset?: string;
    /** Filter by item status */
    status?: string;
    /**
     * The media type of the response. Must be application/vnd.dwolla.v1.hal+json
     *
     * @default Accept.ApplicationVndDwollaV1HalJson
     */
    accept?: Accept;
  };

  export class ListMassPaymentItemsError extends ApiError {
    declare readonly payload: Declared<"error403", undefined> | Declared<"error404", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<ListMassPaymentItemsError> = [
      { on: 403, kind: "error403", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
    ];
  }

  export type UpdateMassPaymentRequest = {
    /** ID of mass payment to update */
    id: string;
    /**
     * The media type of the response. Must be application/vnd.dwolla.v1.hal+json
     *
     * @default Accept.ApplicationVndDwollaV1HalJson
     */
    accept?: Accept;
    /** Parameters for updating a mass payment */
    body: MassPaymentsRequest1;
  };

  export class UpdateMassPaymentError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error403", undefined>
      | Declared<"error404", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<UpdateMassPaymentError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 403, kind: "error403", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
    ];
  }
}
