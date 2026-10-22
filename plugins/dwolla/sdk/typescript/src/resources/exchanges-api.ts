import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { Accept, acceptSchema } from "../models/accept.js";
import { exchangesRequestSchema, type ExchangesRequest } from "../models/unions/exchanges-request.js";
import type { Servers } from "../servers.js";

/**
 * Operations related to Exchanges
 */
export class ExchangesApi {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Create an exchange for an account
   *
   * @remarks
   * Create an exchange for an account. The request body will vary based on the exchange partner.
   * For Finicity, the request body will include finicity-specific fields. For MX Secure Exchange,
   * the request body will include a token. For Flinks Secure Exchange, the request body will
   * include a token. For Plaid Secure Exchange, the request body will include a token.
   *
   * @returns Created
   *
   * @throws {@link ExchangesApi.CreateAccountExchangeError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link DwollaApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createAccountExchange(
    request: ExchangesApi.CreateAccountExchangeRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ExchangesApi.CreateAccountExchangeError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/exchanges"),
        auth: this.#auth.clientCredentials,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: exchangesRequestSchema },
      },
      {
        success: { kind: "empty" },
        errorFactory: ExchangesApi.CreateAccountExchangeError,
      },
      options,
    );
  }

  /**
   * Create an exchange for a customer
   *
   * @remarks
   * Creates an exchange connection between a customer and Dwolla. Request body varies by partner
   * (Plaid, MX, Flinks, Finicity, Checkout.com). For bank accounts, use Plaid, MX, Flinks, or
   * Finicity to establish secure access to the customer's bank account data. For debit cards (Push
   * to Card), use Checkout.com and pass the payment ID from Checkout.com Flow.
   *
   * @returns created
   *
   * @throws {@link ExchangesApi.CreateCustomerExchangeError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link DwollaApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createCustomerExchange(
    request: ExchangesApi.CreateCustomerExchangeRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ExchangesApi.CreateCustomerExchangeError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/customers/{id}/exchanges"),
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
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: ExchangesApi.CreateCustomerExchangeError,
      },
      options,
    );
  }

  /**
   * Retrieve exchange resource
   *
   * @remarks
   * Returns details for a specific exchange connection between Dwolla and an open banking partner
   * for a customer's bank account. Includes exchange status, creation date, and links to the
   * associated customer and exchange partner.
   *
   * For card exchanges created from an exchange session that requested an Account Name Inquiry
   * (ANI), the response also includes `cardDetails.accountNameInquiry` with the name-match result.
   * Read this value before creating a card funding source to get an early signal of fraudulent card
   * usage.
   *
   * @returns successful operation
   *
   * @throws {@link ExchangesApi.GetExchangeError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link DwollaApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getExchange(
    request: ExchangesApi.GetExchangeRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ExchangesApi.GetExchangeError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/exchanges/{id}"),
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
        errorFactory: ExchangesApi.GetExchangeError,
      },
      options,
    );
  }

  /**
   * Retrieve exchange partner
   *
   * @remarks
   * Returns details for a specific open banking provider that integrates with Dwolla. Includes
   * partner name, status, and creation date. Use this to verify partner availability before
   * creating exchanges and funding sources.
   *
   * @returns successful operation
   *
   * @throws {@link ExchangesApi.GetExchangePartnerError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link DwollaApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getExchangePartner(
    request: ExchangesApi.GetExchangePartnerRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ExchangesApi.GetExchangePartnerError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/exchange-partners/{id}"),
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
        errorFactory: ExchangesApi.GetExchangePartnerError,
      },
      options,
    );
  }

  /**
   * List exchanges for an account
   *
   * @remarks
   * Returns all exchanges for your Dwolla account. Exchanges represent connections between external
   * bank accounts and your account through open banking partners. Includes exchange status,
   * creation date, and associated partner information.
   *
   * @returns successful operation
   *
   * @throws {@link ExchangesApi.ListAccountExchangesError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link DwollaApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listAccountExchanges(
    request: ExchangesApi.ListAccountExchangesRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ExchangesApi.ListAccountExchangesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/exchanges"),
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
        errorFactory: ExchangesApi.ListAccountExchangesError,
      },
      options,
    );
  }

  /**
   * List exchanges for a customer
   *
   * @remarks
   * Returns all exchanges for a specific customer. Exchanges represent connections between the
   * customer's external bank accounts and open banking partners. Includes exchange status, creation
   * date, and links to associated funding sources and partners.
   *
   * @returns successful operation
   *
   * @throws {@link ExchangesApi.ListCustomerExchangesError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link DwollaApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listCustomerExchanges(
    request: ExchangesApi.ListCustomerExchangesRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ExchangesApi.ListCustomerExchangesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/customers/{id}/exchanges"),
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
        errorFactory: ExchangesApi.ListCustomerExchangesError,
      },
      options,
    );
  }

  /**
   * List exchange partners
   *
   * @remarks
   * Returns a list of all supported exchange partners. Each partner includes a unique ID, name, and
   * status indicating whether they are active or inactive.
   *
   * @returns successful operation
   *
   * @throws {@link ExchangesApi.ListExchangePartnersError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link DwollaApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listExchangePartners(
    request: ExchangesApi.ListExchangePartnersRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ExchangesApi.ListExchangePartnersError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/exchange-partners"),
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
        errorFactory: ExchangesApi.ListExchangePartnersError,
      },
      options,
    );
  }
}

export namespace ExchangesApi {
  export type CreateAccountExchangeRequest = {
    /** Parameters for creating an exchange */
    body: ExchangesRequest;
  };

  export class CreateAccountExchangeError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error401", undefined>
      | Declared<"error403", undefined>
      | Declared<"error404", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateAccountExchangeError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 403, kind: "error403", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
    ];
  }

  export type CreateCustomerExchangeRequest = {
    /** The ID of the customer to create an exchange for */
    id: string;
    /**
     * The media type of the response. Must be application/vnd.dwolla.v1.hal+json
     *
     * @default Accept.ApplicationVndDwollaV1HalJson
     */
    accept?: Accept;
  };

  export class CreateCustomerExchangeError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error401", undefined>
      | Declared<"error404", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateCustomerExchangeError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
    ];
  }

  export type GetExchangeRequest = {
    /** Exchange resource unique identifier. */
    id: string;
    /**
     * The media type of the response. Must be application/vnd.dwolla.v1.hal+json
     *
     * @default Accept.ApplicationVndDwollaV1HalJson
     */
    accept?: Accept;
  };

  export class GetExchangeError extends ApiError {
    declare readonly payload: Declared<"error401", undefined> | Declared<"error404", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<GetExchangeError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
    ];
  }

  export type GetExchangePartnerRequest = {
    /** Exchange Partner resource unique identifier. */
    id: string;
    /**
     * The media type of the response. Must be application/vnd.dwolla.v1.hal+json
     *
     * @default Accept.ApplicationVndDwollaV1HalJson
     */
    accept?: Accept;
  };

  export class GetExchangePartnerError extends ApiError {
    declare readonly payload: Declared<"error404", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<GetExchangePartnerError> = [
      { on: 404, kind: "error404", decode: { kind: "empty" } },
    ];
  }

  export type ListAccountExchangesRequest = {
    /**
     * The media type of the response. Must be application/vnd.dwolla.v1.hal+json
     *
     * @default Accept.ApplicationVndDwollaV1HalJson
     */
    accept?: Accept;
  };

  export class ListAccountExchangesError extends ApiError {
    declare readonly payload: Declared<"error403", undefined> | Declared<"error404", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<ListAccountExchangesError> = [
      { on: 403, kind: "error403", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
    ];
  }

  export type ListCustomerExchangesRequest = {
    /** The ID of the Customer to list exchanges for */
    id: string;
    /**
     * The media type of the response. Must be application/vnd.dwolla.v1.hal+json
     *
     * @default Accept.ApplicationVndDwollaV1HalJson
     */
    accept?: Accept;
  };

  export class ListCustomerExchangesError extends ApiError {
    declare readonly payload: Declared<"error404", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<ListCustomerExchangesError> = [
      { on: 404, kind: "error404", decode: { kind: "empty" } },
    ];
  }

  export type ListExchangePartnersRequest = {
    /**
     * The media type of the response. Must be application/vnd.dwolla.v1.hal+json
     *
     * @default Accept.ApplicationVndDwollaV1HalJson
     */
    accept?: Accept;
  };

  export class ListExchangePartnersError extends ApiError {
    declare readonly payload: Declared<"error403", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<ListExchangePartnersError> = [
      { on: 403, kind: "error403", decode: { kind: "empty" } },
    ];
  }
}
