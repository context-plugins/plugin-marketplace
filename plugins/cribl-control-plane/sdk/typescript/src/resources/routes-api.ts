import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { countedRoutesSchema, type CountedRoutes } from "../models/counted-routes.js";
import { errorSchema, type Error } from "../models/error.js";
import { paginatedRoutesSchema, type PaginatedRoutes } from "../models/paginated-routes.js";
import { routeConfInputSchema, type RouteConfInput } from "../models/route-conf-input.js";
import { routesInputSchema, type RoutesInput } from "../models/routes-input.js";
import type { Servers } from "../servers.js";

/**
 * Actions related to Routes
 */
export class RoutesApi {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Add a Route to the end of the Routing table
   *
   * @remarks
   * Add a Route to the end of the specified Routing table.
   *
   * @returns The updated Routing table object in a single-item list.
   *
   * @throws {@link RoutesApi.CreateRoutesAppendByIdError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link CriblApiReferenceError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  createRoutesAppendById(
    request: RoutesApi.CreateRoutesAppendByIdRequest,
    options?: RequestOptions,
  ): ApiPromise<CountedRoutes, RoutesApi.CreateRoutesAppendByIdError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/routes/{id}/append"),
        auth: anyAuth(this.#auth.bearerAuth, this.#auth.clientOauth),
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: s.array(s.lazy(() => routeConfInputSchema)) },
      },
      {
        success: { kind: "json", schema: countedRoutesSchema },
        errorFactory: RoutesApi.CreateRoutesAppendByIdError,
      },
      options,
    );
  }

  /**
   * Add a Route to the end of the Routing table within a Pack
   *
   * @remarks
   * Add a Route to the end of the specified Routing table within the specified Pack.
   *
   * @returns The updated Routing table object in a single-item list.
   *
   * @throws {@link RoutesApi.CreateRoutesAppendByPackAndIdError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link CriblApiReferenceError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  createRoutesAppendByPackAndId(
    request: RoutesApi.CreateRoutesAppendByPackAndIdRequest,
    options?: RequestOptions,
  ): ApiPromise<CountedRoutes, RoutesApi.CreateRoutesAppendByPackAndIdError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/p/{pack}/routes/{id}/append"),
        auth: anyAuth(this.#auth.bearerAuth, this.#auth.clientOauth),
        pathParams: [
          { name: "id", value: request.id, schema: s.string() },
          { name: "pack", value: request.pack, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: s.array(s.lazy(() => routeConfInputSchema)) },
      },
      {
        success: { kind: "json", schema: countedRoutesSchema },
        errorFactory: RoutesApi.CreateRoutesAppendByPackAndIdError,
      },
      options,
    );
  }

  /**
   * List all Routes
   *
   * @remarks
   * Get a list of all Routes.
   *
   * @returns List of Routing table objects.
   *
   * @throws {@link RoutesApi.GetRoutesError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link CriblApiReferenceError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  getRoutes(
    request: RoutesApi.GetRoutesRequest,
    options?: RequestOptions,
  ): ApiPromise<PaginatedRoutes, RoutesApi.GetRoutesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/routes"),
        auth: anyAuth(this.#auth.bearerAuth, this.#auth.clientOauth),
        pathParams: [],
        query: [
          { name: "offset", value: request.offset, schema: s.optional(s.int()) },
          { name: "limit", value: request.limit, schema: s.optional(s.int()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: paginatedRoutesSchema },
        errorFactory: RoutesApi.GetRoutesError,
      },
      options,
    );
  }

  /**
   * Get a Routing table
   *
   * @remarks
   * Get the specified Routing table.
   *
   * @returns The requested Routing table object in a single-item list.
   *
   * @throws {@link RoutesApi.GetRoutesByIdError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link CriblApiReferenceError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  getRoutesById(
    request: RoutesApi.GetRoutesByIdRequest,
    options?: RequestOptions,
  ): ApiPromise<CountedRoutes, RoutesApi.GetRoutesByIdError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/routes/{id}"),
        auth: anyAuth(this.#auth.bearerAuth, this.#auth.clientOauth),
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: countedRoutesSchema },
        errorFactory: RoutesApi.GetRoutesByIdError,
      },
      options,
    );
  }

  /**
   * List all Routes within a Pack
   *
   * @remarks
   * Get a list of all Routes within the specified Pack.
   *
   * @returns List of Routing table objects.
   *
   * @throws {@link RoutesApi.GetRoutesByPackError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link CriblApiReferenceError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  getRoutesByPack(
    request: RoutesApi.GetRoutesByPackRequest,
    options?: RequestOptions,
  ): ApiPromise<PaginatedRoutes, RoutesApi.GetRoutesByPackError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/p/{pack}/routes"),
        auth: anyAuth(this.#auth.bearerAuth, this.#auth.clientOauth),
        pathParams: [{ name: "pack", value: request.pack, schema: s.string() }],
        query: [
          { name: "offset", value: request.offset, schema: s.optional(s.int()) },
          { name: "limit", value: request.limit, schema: s.optional(s.int()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: paginatedRoutesSchema },
        errorFactory: RoutesApi.GetRoutesByPackError,
      },
      options,
    );
  }

  /**
   * Get a Routing table within a Pack
   *
   * @remarks
   * Get the specified Routing table within the specified Pack.
   *
   * @returns The requested Routing table object in a single-item list.
   *
   * @throws {@link RoutesApi.GetRoutesByPackAndIdError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link CriblApiReferenceError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  getRoutesByPackAndId(
    request: RoutesApi.GetRoutesByPackAndIdRequest,
    options?: RequestOptions,
  ): ApiPromise<CountedRoutes, RoutesApi.GetRoutesByPackAndIdError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/p/{pack}/routes/{id}"),
        auth: anyAuth(this.#auth.bearerAuth, this.#auth.clientOauth),
        pathParams: [
          { name: "id", value: request.id, schema: s.string() },
          { name: "pack", value: request.pack, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: countedRoutesSchema },
        errorFactory: RoutesApi.GetRoutesByPackAndIdError,
      },
      options,
    );
  }

  /**
   * Update a Routing table
   *
   * @remarks
   * Update the specified Routing table.<br/><br/>Provide a complete representation of the Routing
   * table that you want to update in the request body.<br/><br/>This endpoint does not support
   * partial updates. Cribl removes any omitted fields when updating the Routing
   * table.<br/><br/>Confirm that the configuration in your request body is correct before sending
   * the request. If the configuration is incorrect, the updated Routing table might not function as
   * expected.<br/><br/>Cribl also removes any omitted Routes when updating the Routing table.
   *
   * @returns The updated Routing table object in a single-item list.
   *
   * @throws {@link RoutesApi.UpdateRoutesByIdError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link CriblApiReferenceError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  updateRoutesById(
    request: RoutesApi.UpdateRoutesByIdRequest,
    options?: RequestOptions,
  ): ApiPromise<CountedRoutes, RoutesApi.UpdateRoutesByIdError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default("/routes/{id}"),
        auth: anyAuth(this.#auth.bearerAuth, this.#auth.clientOauth),
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: routesInputSchema },
      },
      {
        success: { kind: "json", schema: countedRoutesSchema },
        errorFactory: RoutesApi.UpdateRoutesByIdError,
      },
      options,
    );
  }

  /**
   * Update a Routing table within a Pack
   *
   * @remarks
   * Update the specified Routing table within the specified Pack.<br/><br/>Provide a complete
   * representation of the Routing table that you want to update in the request body.<br/><br/>This
   * endpoint does not support partial updates. Cribl removes any omitted fields when updating the
   * Routing table.<br/><br/>Confirm that the configuration in your request body is correct before
   * sending the request. If the configuration is incorrect, the updated Routing table might not
   * function as expected.<br/><br/>Cribl also removes any omitted Routes when updating the Routing
   * table.
   *
   * @returns The updated Routing table object in a single-item list.
   *
   * @throws {@link RoutesApi.UpdateRoutesByPackAndIdError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link CriblApiReferenceError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  updateRoutesByPackAndId(
    request: RoutesApi.UpdateRoutesByPackAndIdRequest,
    options?: RequestOptions,
  ): ApiPromise<CountedRoutes, RoutesApi.UpdateRoutesByPackAndIdError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default("/p/{pack}/routes/{id}"),
        auth: anyAuth(this.#auth.bearerAuth, this.#auth.clientOauth),
        pathParams: [
          { name: "id", value: request.id, schema: s.string() },
          { name: "pack", value: request.pack, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: routesInputSchema },
      },
      {
        success: { kind: "json", schema: countedRoutesSchema },
        errorFactory: RoutesApi.UpdateRoutesByPackAndIdError,
      },
      options,
    );
  }
}

export namespace RoutesApi {
  export type CreateRoutesAppendByIdRequest = {
    /**
     * The <code>id</code> of the Routing table to add the Route to. The supported value is
     * <code>default</code>.
     */
    id: string;
    /** RouteDefinitions object. */
    body: RouteConfInput[];
  };

  export class CreateRoutesAppendByIdError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error", Error>
      | Declared<"error404", undefined>
      | Declared<"error2", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateRoutesAppendByIdError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 500, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type CreateRoutesAppendByPackAndIdRequest = {
    /**
     * The <code>id</code> of the Routing table to add the Route to. The supported value is
     * <code>default</code>.
     */
    id: string;
    /** The <code>id</code> of the Pack. */
    pack: string;
    /** RouteDefinitions object. */
    body: RouteConfInput[];
  };

  export class CreateRoutesAppendByPackAndIdError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error", Error>
      | Declared<"error404", undefined>
      | Declared<"error2", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateRoutesAppendByPackAndIdError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 500, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetRoutesRequest = {
    /** Pagination offset */
    offset?: number;
    /** Maximum number of items to return */
    limit?: number;
  };

  export class GetRoutesError extends ApiError {
    declare readonly payload: Declared<"error", Error> | Declared<"error2", Error> | Undeclared;

    static readonly errors: ErrorDecoders<GetRoutesError> = [
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetRoutesByIdRequest = {
    /**
     * The <code>id</code> of the Routing table to get. The supported value is <code>default</code>.
     */
    id: string;
  };

  export class GetRoutesByIdError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error404", undefined>
      | Declared<"error2", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetRoutesByIdError> = [
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 500, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetRoutesByPackRequest = {
    /** The <code>id</code> of the Pack. */
    pack: string;
    /** Pagination offset */
    offset?: number;
    /** Maximum number of items to return */
    limit?: number;
  };

  export class GetRoutesByPackError extends ApiError {
    declare readonly payload: Declared<"error", Error> | Declared<"error2", Error> | Undeclared;

    static readonly errors: ErrorDecoders<GetRoutesByPackError> = [
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetRoutesByPackAndIdRequest = {
    /**
     * The <code>id</code> of the Routing table to get. The supported value is <code>default</code>.
     */
    id: string;
    /** The <code>id</code> of the Pack. */
    pack: string;
  };

  export class GetRoutesByPackAndIdError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error404", undefined>
      | Declared<"error2", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetRoutesByPackAndIdError> = [
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 500, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type UpdateRoutesByIdRequest = {
    /**
     * The <code>id</code> of the Routing table to update. The supported value is
     * <code>default</code>.
     */
    id: string;
    /** RoutesInput object. */
    body: RoutesInput;
  };

  export class UpdateRoutesByIdError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error", Error>
      | Declared<"error404", undefined>
      | Declared<"error2", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<UpdateRoutesByIdError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 500, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type UpdateRoutesByPackAndIdRequest = {
    /**
     * The <code>id</code> of the Routing table to update. The supported value is
     * <code>default</code>.
     */
    id: string;
    /** The <code>id</code> of the Pack. */
    pack: string;
    /** RoutesInput object. */
    body: RoutesInput;
  };

  export class UpdateRoutesByPackAndIdError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error", Error>
      | Declared<"error404", undefined>
      | Declared<"error2", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<UpdateRoutesByPackAndIdError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 500, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }
}
