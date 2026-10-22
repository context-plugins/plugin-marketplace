import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { Accept, acceptSchema } from "../models/accept.js";
import { customersRequest1Schema, type CustomersRequest1 } from "../models/unions/customers-request1.js";
import type { Servers } from "../servers.js";

/**
 * Operations related to Customers
 */
export class CustomersApi {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Create a customer
   *
   * @remarks
   * Creates a new customer with different verification levels and capabilities. Supports personal
   * verified customers (individuals), business verified customers (businesses), unverified
   * customers, and receive-only users. Customer type determines transaction limits, verification
   * requirements, and available features.
   *
   * @returns successful operation
   *
   * @throws {@link CustomersApi.CreateCustomerError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link DwollaApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createCustomer(
    request: CustomersApi.CreateCustomerRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, CustomersApi.CreateCustomerError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/customers"),
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
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: CustomersApi.CreateCustomerError,
      },
      options,
    );
  }

  /**
   * Retrieve a customer
   *
   * @remarks
   * Retrieve identifying information for a specific customer. The returned data varies by customer
   * type - verified customers include contact details, address information, and verification
   * status, while unverified customers and receive-only users contain basic contact information
   * only.
   *
   * @returns successful operation
   *
   * @throws {@link CustomersApi.GetCustomerError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link DwollaApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getCustomer(
    request: CustomersApi.GetCustomerRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, CustomersApi.GetCustomerError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/customers/{id}"),
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
        errorFactory: CustomersApi.GetCustomerError,
      },
      options,
    );
  }

  /**
   * List and search customers
   *
   * @remarks
   * Returns a paginated list of customers sorted by creation date. Supports fuzzy search across
   * customer names, business names, and email addresses, plus exact filtering by email and
   * verification status. Default limit is 25 customers per page, maximum 200.
   *
   * @returns successful operation
   *
   * @throws {@link CustomersApi.ListAndSearchCustomersError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link DwollaApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listAndSearchCustomers(
    request: CustomersApi.ListAndSearchCustomersRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, CustomersApi.ListAndSearchCustomersError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/customers"),
        auth: this.#auth.clientCredentials,
        pathParams: [],
        query: [
          { name: "limit", value: request.limit, schema: s.optional(s.int()) },
          { name: "offset", value: request.offset, schema: s.optional(s.int()) },
          { name: "search", value: request.search, schema: s.optional(s.string()) },
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
        errorFactory: CustomersApi.ListAndSearchCustomersError,
      },
      options,
    );
  }

  /**
   * List business classifications
   *
   * @remarks
   * Returns a directory of business and industry classifications required for creating business
   * verified customers. Each business classification contains multiple industry classifications.
   * The industry classification ID must be provided in the businessClassification parameter during
   * business customer creation for verification.
   *
   * @returns successful operation
   *
   * @throws {@link CustomersApi.ListBusinessClassificationsError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link DwollaApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listBusinessClassifications(
    request: CustomersApi.ListBusinessClassificationsRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, CustomersApi.ListBusinessClassificationsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/business-classifications"),
        auth: this.#auth.clientCredentials,
        pathParams: [],
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
        errorFactory: CustomersApi.ListBusinessClassificationsError,
      },
      options,
    );
  }

  /**
   * Retrieve a business classification
   *
   * @remarks
   * Returns a specific business classification with its embedded industry classifications. Use this
   * endpoint to browse available industry options within a business category and obtain the
   * industry classification ID required for the businessClassification parameter when creating
   * business verified customers.
   *
   * @returns successful operation
   *
   * @throws {@link CustomersApi.RetrieveBusinessClassificationError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link DwollaApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  retrieveBusinessClassification(
    request: CustomersApi.RetrieveBusinessClassificationRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, CustomersApi.RetrieveBusinessClassificationError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/business-classifications/{id}"),
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
        errorFactory: CustomersApi.RetrieveBusinessClassificationError,
      },
      options,
    );
  }

  /**
   * Update a customer
   *
   * @remarks
   * Update Customer information, upgrade an unverified Customer to a verified Customer, suspend a
   * Customer, deactivate a Customer, reactivate a Customer, and update a verified Customer's
   * information to retry verification.
   *
   * @returns successful operation
   *
   * @throws {@link CustomersApi.UpdateError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link DwollaApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  update(
    request: CustomersApi.UpdateRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, CustomersApi.UpdateError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/customers/{id}"),
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
        body: { kind: "json", value: request.body, schema: customersRequest1Schema },
      },
      {
        success: { kind: "empty" },
        errorFactory: CustomersApi.UpdateError,
      },
      options,
    );
  }
}

export namespace CustomersApi {
  export type CreateCustomerRequest = {
    /**
     * The media type of the response. Must be application/vnd.dwolla.v1.hal+json
     *
     * @default Accept.ApplicationVndDwollaV1HalJson
     */
    accept?: Accept;
  };

  export class CreateCustomerError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error403", undefined>
      | Declared<"error404", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateCustomerError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 403, kind: "error403", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
    ];
  }

  export type GetCustomerRequest = {
    /** Customer unique identifier */
    id: string;
    /**
     * The media type of the response. Must be application/vnd.dwolla.v1.hal+json
     *
     * @default Accept.ApplicationVndDwollaV1HalJson
     */
    accept?: Accept;
  };

  export class GetCustomerError extends ApiError {
    declare readonly payload: Declared<"error403", undefined> | Declared<"error404", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<GetCustomerError> = [
      { on: 403, kind: "error403", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
    ];
  }

  export type ListAndSearchCustomersRequest = {
    /** How many results to return */
    limit?: number;
    /** How many results to skip */
    offset?: number;
    /** Searches on certain fields */
    search?: string;
    /** Filter by customer status */
    status?: string;
    /**
     * The media type of the response. Must be application/vnd.dwolla.v1.hal+json
     *
     * @default Accept.ApplicationVndDwollaV1HalJson
     */
    accept?: Accept;
  };

  export class ListAndSearchCustomersError extends ApiError {
    declare readonly payload: Declared<"error403", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<ListAndSearchCustomersError> = [
      { on: 403, kind: "error403", decode: { kind: "empty" } },
    ];
  }

  export type ListBusinessClassificationsRequest = {
    /**
     * The media type of the response. Must be application/vnd.dwolla.v1.hal+json
     *
     * @default Accept.ApplicationVndDwollaV1HalJson
     */
    accept?: Accept;
  };

  export class ListBusinessClassificationsError extends ApiError {
    declare readonly payload: Declared<"error403", undefined> | Declared<"error404", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<ListBusinessClassificationsError> = [
      { on: 403, kind: "error403", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
    ];
  }

  export type RetrieveBusinessClassificationRequest = {
    /** business classification unique identifier */
    id: string;
    /**
     * The media type of the response. Must be application/vnd.dwolla.v1.hal+json
     *
     * @default Accept.ApplicationVndDwollaV1HalJson
     */
    accept?: Accept;
  };

  export class RetrieveBusinessClassificationError extends ApiError {
    declare readonly payload: Declared<"error404", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<RetrieveBusinessClassificationError> = [
      { on: 404, kind: "error404", decode: { kind: "empty" } },
    ];
  }

  export type UpdateRequest = {
    /** Customer unique identifier */
    id: string;
    /**
     * The media type of the response. Must be application/vnd.dwolla.v1.hal+json
     *
     * @default Accept.ApplicationVndDwollaV1HalJson
     */
    accept?: Accept;
    /** Parameters for updating a Customer */
    body: CustomersRequest1;
  };

  export class UpdateError extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Declared<"error403", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<UpdateError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 403, kind: "error403", decode: { kind: "empty" } },
    ];
  }
}
