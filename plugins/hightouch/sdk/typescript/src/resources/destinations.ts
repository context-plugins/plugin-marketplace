import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { destinationCreateSchema, type DestinationCreate } from "../models/destination-create.js";
import { destinationUpdateSchema, type DestinationUpdate } from "../models/destination-update.js";
import { destinationSchema, type Destination } from "../models/destination.js";
import { destinationsResponseSchema, type DestinationsResponse } from "../models/destinations-response.js";
import { internalServerErrorSchema, type InternalServerError } from "../models/internal-server-error.js";
import {
  OrderByHightouchDestinationsApi,
  orderByHightouchDestinationsApiSchema,
} from "../models/order-by-hightouch-destinations-api.js";
import {
  destinationsResponse1Schema,
  type DestinationsResponse1,
} from "../models/unions/destinations-response1.js";
import { validateErrorJsonSchema, type ValidateErrorJson } from "../models/validate-error-json.js";
import type { Servers } from "../servers.js";

export class Destinations {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Create Destination
   *
   * @remarks
   * Create a new destination
   *
   * @returns Ok
   *
   * @throws {@link Destinations.CreateDestinationError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link HightouchError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createDestination(
    request: Destinations.CreateDestinationRequest,
    options?: RequestOptions,
  ): ApiPromise<DestinationsResponse1, Destinations.CreateDestinationError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/destinations"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: destinationCreateSchema },
      },
      {
        success: { kind: "json", schema: destinationsResponse1Schema },
        errorFactory: Destinations.CreateDestinationError,
      },
      options,
    );
  }

  /**
   * Get Destination
   *
   * @remarks
   * Retrieve a destination based on its Hightouch ID
   *
   * @returns Ok
   *
   * @throws {@link Destinations.GetDestinationError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link HightouchError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getDestination(
    request: Destinations.GetDestinationRequest,
    options?: RequestOptions,
  ): ApiPromise<Destination, Destinations.GetDestinationError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/destinations/{destinationId}"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "destinationId", value: request.destinationId, schema: s.float64() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: destinationSchema },
        errorFactory: Destinations.GetDestinationError,
      },
      options,
    );
  }

  /**
   * List Destinations
   *
   * @remarks
   * List the destinations in the user's workspace
   *
   * @returns Ok
   *
   * @throws {@link Destinations.ListDestinationError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link HightouchError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listDestination(
    request: Destinations.ListDestinationRequest = {},
    options?: RequestOptions,
  ): ApiPromise<DestinationsResponse, Destinations.ListDestinationError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/destinations"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [
          { name: "name", value: request.name, schema: s.optional(s.string()) },
          { name: "slug", value: request.slug, schema: s.optional(s.string()) },
          { name: "offset", value: request.offset, schema: s.defaulted(s.float64(), 0) },
          { name: "limit", value: request.limit, schema: s.defaulted(s.float64(), 100) },
          {
            name: "orderBy",
            value: request.orderBy,
            schema: s.defaulted(orderByHightouchDestinationsApiSchema, OrderByHightouchDestinationsApi.Id),
          },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: destinationsResponseSchema },
        errorFactory: Destinations.ListDestinationError,
      },
      options,
    );
  }

  /**
   * Update Destination
   *
   * @remarks
   * Update an existing destination
   *
   * Patch a destination based on its Hightouch ID
   *
   * @returns Ok
   *
   * @throws {@link Destinations.UpdateDestinationError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link HightouchError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateDestination(
    request: Destinations.UpdateDestinationRequest,
    options?: RequestOptions,
  ): ApiPromise<DestinationsResponse1, Destinations.UpdateDestinationError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default("/destinations/{destinationId}"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "destinationId", value: request.destinationId, schema: s.float64() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: destinationUpdateSchema },
      },
      {
        success: { kind: "json", schema: destinationsResponse1Schema },
        errorFactory: Destinations.UpdateDestinationError,
      },
      options,
    );
  }
}

export namespace Destinations {
  export type CreateDestinationRequest = {
    body: DestinationCreate;
  };

  export class CreateDestinationError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"validateErrorJson", ValidateErrorJson>
      | Declared<"validateErrorJson2", ValidateErrorJson>
      | Declared<"internalServerError", InternalServerError>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateDestinationError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 409, kind: "validateErrorJson", decode: { kind: "json", schema: validateErrorJsonSchema } },
      { on: 422, kind: "validateErrorJson2", decode: { kind: "json", schema: validateErrorJsonSchema } },
      { on: 500, kind: "internalServerError", decode: { kind: "json", schema: internalServerErrorSchema } },
    ];
  }

  export type GetDestinationRequest = {
    /** The destination's ID */
    destinationId: number;
  };

  export class GetDestinationError extends ApiError {
    declare readonly payload: Declared<"error401", undefined> | Declared<"error404", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<GetDestinationError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
    ];
  }

  export type ListDestinationRequest = {
    /** Filter based on the destination's name */
    name?: string;
    /** Filter based on destination's slug */
    slug?: string;
    /** set the offset on results (for pagination) @default 0 */
    offset?: number;
    /** limit the number of objects returned (default is 100) @default 100 */
    limit?: number;
    /** Order the returned destinations @default OrderByHightouchDestinationsApi.Id */
    orderBy?: OrderByHightouchDestinationsApi;
  };

  export class ListDestinationError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error401", undefined>
      | Declared<"validateErrorJson", ValidateErrorJson>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListDestinationError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 422, kind: "validateErrorJson", decode: { kind: "json", schema: validateErrorJsonSchema } },
    ];
  }

  export type UpdateDestinationRequest = {
    /** The destination's ID */
    destinationId: number;
    body: DestinationUpdate;
  };

  export class UpdateDestinationError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error404", undefined>
      | Declared<"validateErrorJson", ValidateErrorJson>
      | Declared<"internalServerError", InternalServerError>
      | Undeclared;

    static readonly errors: ErrorDecoders<UpdateDestinationError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 422, kind: "validateErrorJson", decode: { kind: "json", schema: validateErrorJsonSchema } },
      { on: 500, kind: "internalServerError", decode: { kind: "json", schema: internalServerErrorSchema } },
    ];
  }
}
