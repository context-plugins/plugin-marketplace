import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import * as s from "../core/validation/index.js";
import {
  countedFunctionResponseSchema,
  type CountedFunctionResponse,
} from "../models/counted-function-response.js";
import { errorSchema, type Error } from "../models/error.js";
import {
  paginatedFunctionResponseSchema,
  type PaginatedFunctionResponse,
} from "../models/paginated-function-response.js";
import type { Servers } from "../servers.js";

/**
 * Actions related to functions
 */
export class Functions {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * List all Functions
   *
   * @remarks
   * Get a list of all Functions.
   *
   * @returns List of Function objects.
   *
   * @throws {@link Functions.GetFunctionsError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link CriblApiReferenceError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  getFunctions(
    request: Functions.GetFunctionsRequest,
    options?: RequestOptions,
  ): ApiPromise<PaginatedFunctionResponse, Functions.GetFunctionsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/functions"),
        auth: anyAuth(this.#auth.bearerAuth, this.#auth.clientOauth),
        pathParams: [],
        query: [
          { name: "showHidden", value: request.showHidden, schema: s.optional(s.boolean()) },
          { name: "offset", value: request.offset, schema: s.optional(s.int()) },
          { name: "limit", value: request.limit, schema: s.optional(s.int()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: paginatedFunctionResponseSchema },
        errorFactory: Functions.GetFunctionsError,
      },
      options,
    );
  }

  /**
   * Get a Function
   *
   * @remarks
   * Get the specified Function.
   *
   * @returns The requested Function object in a single-item list.
   *
   * @throws {@link Functions.GetFunctionsByIdError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link CriblApiReferenceError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  getFunctionsById(
    request: Functions.GetFunctionsByIdRequest,
    options?: RequestOptions,
  ): ApiPromise<CountedFunctionResponse, Functions.GetFunctionsByIdError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/functions/{id}"),
        auth: anyAuth(this.#auth.bearerAuth, this.#auth.clientOauth),
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: countedFunctionResponseSchema },
        errorFactory: Functions.GetFunctionsByIdError,
      },
      options,
    );
  }
}

export namespace Functions {
  export type GetFunctionsRequest = {
    /**
     * If <code>true</code>, include hidden Functions in the response. Otherwise, hidden Functions
     * are excluded.
     */
    showHidden?: boolean;
    /** Pagination offset */
    offset?: number;
    /** Maximum number of items to return */
    limit?: number;
  };

  export class GetFunctionsError extends ApiError {
    declare readonly payload: Declared<"error", Error> | Declared<"error2", Error> | Undeclared;

    static readonly errors: ErrorDecoders<GetFunctionsError> = [
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetFunctionsByIdRequest = {
    /** The <code>id</code> of the Function to get. */
    id: string;
  };

  export class GetFunctionsByIdError extends ApiError {
    declare readonly payload: Declared<"error", Error> | Declared<"error2", Error> | Undeclared;

    static readonly errors: ErrorDecoders<GetFunctionsByIdError> = [
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }
}
