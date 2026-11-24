import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { noneAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  createCreditCurrencyRequestSchema,
  type CreateCreditCurrencyRequest,
} from "../models/create-credit-currency-request.js";
import {
  creditCurrencyListResponseSchema,
  type CreditCurrencyListResponse,
} from "../models/credit-currency-list-response.js";
import { creditCurrencySchema, type CreditCurrency } from "../models/credit-currency.js";
import {
  CreditsCurrenciesGetParametersStatus,
  creditsCurrenciesGetParametersStatusSchema,
} from "../models/credits-currencies-get-parameters-status.js";
import { errorResponseSchema, type ErrorResponse } from "../models/error-response.js";
import {
  updateCreditCurrencyRequestSchema,
  type UpdateCreditCurrencyRequest,
} from "../models/update-credit-currency-request.js";
import type { Servers } from "../servers.js";

export class Credits {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;

  constructor(rawClient: RawClient, servers: Servers) {
    this.#rawClient = rawClient;
    this.#servers = servers;
  }

  /**
   * Create credit currency
   *
   * @remarks
   * Creates a credit currency for the organization.
   *
   * @returns 201
   *
   * @throws {@link Credits.CreateCreditCurrencyError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link PaidError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createCreditCurrency(
    request: Credits.CreateCreditCurrencyRequestParams,
    options?: RequestOptions,
  ): ApiPromise<CreditCurrency, Credits.CreateCreditCurrencyError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.defaultReferenceAnalyticsExperimentalApi("/credits/currencies"),
        auth: noneAuth,
        pathParams: [],
        query: [],
        headers: [
          { name: "Authorization", value: request.authorization, schema: s.string() },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => createCreditCurrencyRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: creditCurrencySchema },
        errorFactory: Credits.CreateCreditCurrencyError,
      },
      options,
    );
  }

  /**
   * List credit currencies
   *
   * @remarks
   * List credit currencies for the organization. Includes active and archived currencies by
   * default; use the status query parameter to filter.
   *
   * @returns 200
   *
   * @throws {@link Credits.ListCreditCurrenciesError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link PaidError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listCreditCurrencies(
    request: Credits.ListCreditCurrenciesRequest,
    options?: RequestOptions,
  ): ApiPromise<CreditCurrencyListResponse, Credits.ListCreditCurrenciesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.defaultReferenceAnalyticsExperimentalApi("/credits/currencies"),
        auth: noneAuth,
        pathParams: [],
        query: [
          {
            name: "status",
            value: request.status,
            schema: s.defaulted(
              creditsCurrenciesGetParametersStatusSchema,
              CreditsCurrenciesGetParametersStatus.All,
            ),
          },
        ],
        headers: [{ name: "Authorization", value: request.authorization, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: creditCurrencyListResponseSchema },
        errorFactory: Credits.ListCreditCurrenciesError,
      },
      options,
    );
  }

  /**
   * Update credit currency
   *
   * @remarks
   * Update a credit currency description or set its active/archive status.
   *
   * @returns 200
   *
   * @throws {@link Credits.UpdateCreditCurrencyByIdError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link PaidError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateCreditCurrencyById(
    request: Credits.UpdateCreditCurrencyByIdRequest,
    options?: RequestOptions,
  ): ApiPromise<CreditCurrency, Credits.UpdateCreditCurrencyByIdError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.defaultReferenceAnalyticsExperimentalApi("/credits/currencies/{id}"),
        auth: noneAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [
          { name: "Authorization", value: request.authorization, schema: s.string() },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => updateCreditCurrencyRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: creditCurrencySchema },
        errorFactory: Credits.UpdateCreditCurrencyByIdError,
      },
      options,
    );
  }
}

export namespace Credits {
  export type CreateCreditCurrencyRequestParams = {
    /** API Key authentication using Bearer token */
    authorization: string;
    /** Body */
    body?: CreateCreditCurrencyRequest;
  };

  export class CreateCreditCurrencyError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateCreditCurrencyError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type ListCreditCurrenciesRequest = {
    /**
     * Filter credit currencies by status. Defaults to `all` so archived currencies remain readable
     * after they are archived.
     *
     * @default CreditsCurrenciesGetParametersStatus.All
     */
    status?: CreditsCurrenciesGetParametersStatus;
    /** API Key authentication using Bearer token */
    authorization: string;
  };

  export class ListCreditCurrenciesError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListCreditCurrenciesError> = [
      { on: 403, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type UpdateCreditCurrencyByIdRequest = {
    /** Credit currency ID. */
    id: string;
    /** API Key authentication using Bearer token */
    authorization: string;
    /** Body */
    body?: UpdateCreditCurrencyRequest;
  };

  export class UpdateCreditCurrencyByIdError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<UpdateCreditCurrencyByIdError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }
}
