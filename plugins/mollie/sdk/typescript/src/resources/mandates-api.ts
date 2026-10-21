import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import * as s from "../core/validation/index.js";
import {
  deleteValuesSalesInvoiceSchema,
  type DeleteValuesSalesInvoice,
} from "../models/delete-values-sales-invoice.js";
import { mandateRequestSchema, type MandateRequest } from "../models/mandate-request.js";
import { mandateScopesSchema, type MandateScopes } from "../models/mandate-scopes.js";
import { sortingSchema, type Sorting } from "../models/sorting.js";
import type { Servers } from "../servers.js";

/**
 * Operations related to the Mandates API
 */
export class MandatesApi {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Create mandate
   *
   * @remarks
   * Create a mandate for a specific customer. Mandates allow you to charge a customer's card,
   * PayPal account or bank account recurrently.
   *
   * It is only possible to create mandates for IBANs and PayPal billing agreements with this
   * endpoint. To create mandates for cards, your customers need to perform a 'first payment' with
   * their card.
   *
   * @returns The newly created mandate object.
   *
   * @throws {@link MandatesApi.CreateMandateError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link MollieApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createMandate(
    request: MandatesApi.CreateMandateRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, MandatesApi.CreateMandateError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v2/customers/{customerId}/mandates"),
        auth: anyAuth(this.#auth.apiKey, this.#auth.advancedAccessToken, this.#auth.oAuth),
        pathParams: [{ name: "customerId", value: request.customerId, schema: s.string() }],
        query: [],
        headers: [{ name: "idempotency-key", value: request.idempotencyKey, schema: s.optional(s.string()) }],
        body: { kind: "json", value: request.body, schema: s.optional(s.lazy(() => mandateRequestSchema)) },
      },
      {
        success: { kind: "empty" },
        errorFactory: MandatesApi.CreateMandateError,
      },
      options,
    );
  }

  /**
   * Get mandate
   *
   * @remarks
   * Retrieve a single mandate by its ID. Depending on the type of mandate, the object will contain
   * the customer's bank account details, card details, or PayPal account details.
   *
   * @returns The mandate object.
   *
   * @throws {@link MandatesApi.GetMandateError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link MollieApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getMandate(
    request: MandatesApi.GetMandateRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, MandatesApi.GetMandateError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v2/customers/{customerId}/mandates/{mandateId}"),
        auth: anyAuth(this.#auth.apiKey, this.#auth.advancedAccessToken, this.#auth.oAuth),
        pathParams: [
          { name: "customerId", value: request.customerId, schema: s.string() },
          { name: "mandateId", value: request.mandateId, schema: s.string() },
        ],
        query: [{ name: "testmode", value: request.testmode, schema: s.optional(s.boolean()) }],
        headers: [{ name: "idempotency-key", value: request.idempotencyKey, schema: s.optional(s.string()) }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: MandatesApi.GetMandateError,
      },
      options,
    );
  }

  /**
   * List mandates
   *
   * @remarks
   * Retrieve a list of all mandates.
   *
   * The results are paginated.
   *
   * @returns A list of mandate objects.
   *
   * @throws {@link MandatesApi.ListMandatesError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link MollieApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listMandates(
    request: MandatesApi.ListMandatesRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, MandatesApi.ListMandatesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v2/customers/{customerId}/mandates"),
        auth: anyAuth(this.#auth.apiKey, this.#auth.advancedAccessToken, this.#auth.oAuth),
        pathParams: [{ name: "customerId", value: request.customerId, schema: s.string() }],
        query: [
          { name: "from", value: request.from, schema: s.optional(s.string()) },
          { name: "limit", value: request.limit, schema: s.optionalNullable(s.int()) },
          { name: "sort", value: request.sort, schema: s.optional(s.lazy(() => sortingSchema)) },
          {
            name: "scopes",
            value: request.scopes,
            schema: s.optional(s.array(s.lazy(() => mandateScopesSchema))),
          },
          { name: "testmode", value: request.testmode, schema: s.optional(s.boolean()) },
        ],
        headers: [{ name: "idempotency-key", value: request.idempotencyKey, schema: s.optional(s.string()) }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: MandatesApi.ListMandatesError,
      },
      options,
    );
  }

  /**
   * Revoke mandate
   *
   * @remarks
   * Revoke a customer's mandate. You will no longer be able to charge the customer's bank account
   * or card with this mandate, and all connected subscriptions will be canceled.
   *
   * @returns An empty response.
   *
   * @throws {@link MandatesApi.RevokeMandateError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link MollieApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  revokeMandate(
    request: MandatesApi.RevokeMandateRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, MandatesApi.RevokeMandateError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/v2/customers/{customerId}/mandates/{mandateId}"),
        auth: anyAuth(this.#auth.apiKey, this.#auth.advancedAccessToken, this.#auth.oAuth),
        pathParams: [
          { name: "customerId", value: request.customerId, schema: s.string() },
          { name: "mandateId", value: request.mandateId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "idempotency-key", value: request.idempotencyKey, schema: s.optional(s.string()) }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => deleteValuesSalesInvoiceSchema)),
        },
      },
      {
        success: { kind: "empty" },
        errorFactory: MandatesApi.RevokeMandateError,
      },
      options,
    );
  }
}

export namespace MandatesApi {
  export type CreateMandateRequest = {
    /** Provide the ID of the related customer. */
    customerId: string;
    /** A unique key to ensure idempotent requests. This key should be a UUID v4 string. */
    idempotencyKey?: string;
    body?: MandateRequest;
  };

  export class CreateMandateError extends ApiError {
    declare readonly payload: Declared<"error404", undefined> | Declared<"error429", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<CreateMandateError> = [
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 429, kind: "error429", decode: { kind: "empty" } },
    ];
  }

  export type GetMandateRequest = {
    /** Provide the ID of the related customer. */
    customerId: string;
    /** Provide the ID of the related mandate. */
    mandateId: string;
    /**
     * Most API credentials are specifically created for either live mode or test mode. In those
     * cases the `testmode` query parameter must not be sent. For organization-level credentials
     * such as OAuth access tokens, you can enable test mode by setting the `testmode` query
     * parameter to `true`.
     *
     * Test entities cannot be retrieved when the endpoint is set to live mode, and vice versa.
     */
    testmode?: boolean;
    /** A unique key to ensure idempotent requests. This key should be a UUID v4 string. */
    idempotencyKey?: string;
  };

  export class GetMandateError extends ApiError {
    declare readonly payload: Declared<"error404", undefined> | Declared<"error429", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<GetMandateError> = [
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 429, kind: "error429", decode: { kind: "empty" } },
    ];
  }

  export type ListMandatesRequest = {
    /** Provide the ID of the related customer. */
    customerId: string;
    /**
     * Provide an ID to start the result set from the item with the given ID and onwards. This
     * allows you to paginate the result set.
     */
    from?: string;
    /** The maximum number of items to return. Defaults to 50 items. */
    limit?: number | null;
    /**
     * Used for setting the direction of the result set. Defaults to descending order, meaning the
     * results are ordered from newest to oldest.
     */
    sort?: Sorting;
    /** Returns only mandates that include the specified scopes. */
    scopes?: MandateScopes[];
    /**
     * Most API credentials are specifically created for either live mode or test mode. In those
     * cases the `testmode` query parameter must not be sent. For organization-level credentials
     * such as OAuth access tokens, you can enable test mode by setting the `testmode` query
     * parameter to `true`.
     *
     * Test entities cannot be retrieved when the endpoint is set to live mode, and vice versa.
     */
    testmode?: boolean;
    /** A unique key to ensure idempotent requests. This key should be a UUID v4 string. */
    idempotencyKey?: string;
  };

  export class ListMandatesError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error404", undefined>
      | Declared<"error429", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListMandatesError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 429, kind: "error429", decode: { kind: "empty" } },
    ];
  }

  export type RevokeMandateRequest = {
    /** Provide the ID of the related customer. */
    customerId: string;
    /** Provide the ID of the related mandate. */
    mandateId: string;
    /** A unique key to ensure idempotent requests. This key should be a UUID v4 string. */
    idempotencyKey?: string;
    body?: DeleteValuesSalesInvoice;
  };

  export class RevokeMandateError extends ApiError {
    declare readonly payload: Declared<"error404", undefined> | Declared<"error429", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<RevokeMandateError> = [
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 429, kind: "error429", decode: { kind: "empty" } },
    ];
  }
}
