import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { noneAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { checkoutDetailsSchema, type CheckoutDetails } from "../models/checkout-details.js";
import { checkoutListResponseSchema, type CheckoutListResponse } from "../models/checkout-list-response.js";
import { checkoutSchema, type Checkout } from "../models/checkout.js";
import {
  checkoutsGetParametersStatusSchema,
  type CheckoutsGetParametersStatus,
} from "../models/checkouts-get-parameters-status.js";
import {
  createCheckoutRequestInternalSchema,
  type CreateCheckoutRequest,
} from "../models/create-checkout-request.js";
import { errorResponseSchema, type ErrorResponse } from "../models/error-response.js";
import type { Servers } from "../servers.js";

export class Checkouts {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;

  constructor(rawClient: RawClient, servers: Servers) {
    this.#rawClient = rawClient;
    this.#servers = servers;
  }

  /**
   * Archive checkout
   *
   * @remarks
   * Archive a checkout by ID
   *
   * @returns 200
   *
   * @throws {@link Checkouts.ArchiveCheckoutError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link PaidError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  archiveCheckout(
    request: Checkouts.ArchiveCheckoutRequest,
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, Checkouts.ArchiveCheckoutError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.defaultReferenceAnalyticsExperimentalApi("/checkouts/{id}"),
        auth: noneAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [
          { name: "Authorization", value: request.authorization, schema: s.string() },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: Checkouts.ArchiveCheckoutError,
      },
      options,
    );
  }

  /**
   * Create a checkout
   *
   * @remarks
   * Creates a checkout link that generates a URL for a customer to complete a purchase
   *
   * @returns 201
   *
   * @throws {@link Checkouts.CreateCheckoutError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link PaidError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createCheckout(
    request: Checkouts.CreateCheckoutRequestParams,
    options?: RequestOptions,
  ): ApiPromise<Checkout, Checkouts.CreateCheckoutError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.defaultReferenceAnalyticsExperimentalApi("/checkouts/"),
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
          schema: s.optional(s.lazy(() => createCheckoutRequestInternalSchema)),
        },
      },
      {
        success: { kind: "json", schema: checkoutSchema },
        errorFactory: Checkouts.CreateCheckoutError,
      },
      options,
    );
  }

  /**
   * Get checkout
   *
   * @remarks
   * Get a checkout by ID
   *
   * @returns 200
   *
   * @throws {@link Checkouts.GetCheckoutError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link PaidError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getCheckout(
    request: Checkouts.GetCheckoutRequest,
    options?: RequestOptions,
  ): ApiPromise<CheckoutDetails, Checkouts.GetCheckoutError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.defaultReferenceAnalyticsExperimentalApi("/checkouts/{id}"),
        auth: noneAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [{ name: "Authorization", value: request.authorization, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: checkoutDetailsSchema },
        errorFactory: Checkouts.GetCheckoutError,
      },
      options,
    );
  }

  /**
   * List checkouts
   *
   * @remarks
   * Get a list of checkouts for the organization
   *
   * @returns 200
   *
   * @throws {@link Checkouts.ListCheckoutsError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link PaidError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listCheckouts(
    request: Checkouts.ListCheckoutsRequest,
    options?: RequestOptions,
  ): ApiPromise<CheckoutListResponse, Checkouts.ListCheckoutsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.defaultReferenceAnalyticsExperimentalApi("/checkouts/"),
        auth: noneAuth,
        pathParams: [],
        query: [
          { name: "limit", value: request.limit, schema: s.defaulted(s.int(), 10) },
          { name: "offset", value: request.offset, schema: s.optional(s.int()) },
          {
            name: "status",
            value: request.status,
            schema: s.optional(s.lazy(() => checkoutsGetParametersStatusSchema)),
          },
        ],
        headers: [{ name: "Authorization", value: request.authorization, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: checkoutListResponseSchema },
        errorFactory: Checkouts.ListCheckoutsError,
      },
      options,
    );
  }
}

export namespace Checkouts {
  export type ArchiveCheckoutRequest = {
    id: string;
    /** API Key authentication using Bearer token */
    authorization: string;
  };

  export class ArchiveCheckoutError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<ArchiveCheckoutError> = [
      { on: 403, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type CreateCheckoutRequestParams = {
    /** API Key authentication using Bearer token */
    authorization: string;
    /** Body */
    body?: CreateCheckoutRequest;
  };

  export class CreateCheckoutError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateCheckoutError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type GetCheckoutRequest = {
    id: string;
    /** API Key authentication using Bearer token */
    authorization: string;
  };

  export class GetCheckoutError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetCheckoutError> = [
      { on: 403, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type ListCheckoutsRequest = {
    /** @default 10 */
    limit?: number;
    offset?: number;
    status?: CheckoutsGetParametersStatus;
    /** API Key authentication using Bearer token */
    authorization: string;
  };

  export class ListCheckoutsError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListCheckoutsError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }
}
