import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  countedMasterWorkerEntrySchema,
  type CountedMasterWorkerEntry,
} from "../models/counted-master-worker-entry.js";
import { countedNumberSchema, type CountedNumber } from "../models/counted-number.js";
import {
  countedRestartResponseSchema,
  type CountedRestartResponse,
} from "../models/counted-restart-response.js";
import { errorSchema, type Error } from "../models/error.js";
import {
  paginatedMasterWorkerEntrySchema,
  type PaginatedMasterWorkerEntry,
} from "../models/paginated-master-worker-entry.js";
import { productsCoreSchema, type ProductsCore } from "../models/products-core.js";
import { restartRequestSchema, type RestartRequest } from "../models/restart-request.js";
import type { Servers } from "../servers.js";

/**
 * Actions related to Workers
 */
export class WorkersApi {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Get a count of Worker, Edge, or Outpost Nodes
   *
   * @remarks
   * Get a count of all Worker, Edge, or Outpost Nodes for the specified Cribl product.
   *
   * @returns The requested number object in a single-item list.
   *
   * @throws {@link WorkersApi.GetProductsSummaryWorkersByProductError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link CriblApiReferenceError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  getProductsSummaryWorkersByProduct(
    request: WorkersApi.GetProductsSummaryWorkersByProductRequest,
    options?: RequestOptions,
  ): ApiPromise<CountedNumber, WorkersApi.GetProductsSummaryWorkersByProductError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/products/{product}/summary/workers"),
        auth: anyAuth(this.#auth.bearerAuth, this.#auth.clientOauth),
        pathParams: [{ name: "product", value: request.product, schema: productsCoreSchema }],
        query: [{ name: "filterExp", value: request.filterExp, schema: s.optional(s.string()) }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: countedNumberSchema },
        errorFactory: WorkersApi.GetProductsSummaryWorkersByProductError,
      },
      options,
    );
  }

  /**
   * Get detailed metadata for Worker, Edge, or Outpost Nodes
   *
   * @remarks
   * Get detailed metadata for Worker, Edge, or Outpost Nodes for the specified Cribl product.
   *
   * @returns List of MasterWorkerEntry objects.
   *
   * @throws {@link WorkersApi.GetProductsWorkersByProductError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link CriblApiReferenceError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  getProductsWorkersByProduct(
    request: WorkersApi.GetProductsWorkersByProductRequest,
    options?: RequestOptions,
  ): ApiPromise<PaginatedMasterWorkerEntry, WorkersApi.GetProductsWorkersByProductError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/products/{product}/workers"),
        auth: anyAuth(this.#auth.bearerAuth, this.#auth.clientOauth),
        pathParams: [{ name: "product", value: request.product, schema: productsCoreSchema }],
        query: [
          { name: "filterExp", value: request.filterExp, schema: s.optional(s.string()) },
          { name: "sortExp", value: request.sortExp, schema: s.optional(s.string()) },
          { name: "filter", value: request.filter, schema: s.optional(s.string()) },
          { name: "sort", value: request.sort, schema: s.optional(s.string()) },
          { name: "limit", value: request.limit, schema: s.optional(s.int()) },
          { name: "offset", value: request.offset, schema: s.optional(s.int()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: paginatedMasterWorkerEntrySchema },
        errorFactory: WorkersApi.GetProductsWorkersByProductError,
      },
      options,
    );
  }

  /**
   * Get detailed metadata for a Worker, Edge, or Outpost Node
   *
   * @remarks
   * Get detailed metadata for the specified Worker, Edge, or Outpost Node for the specified Cribl
   * product.
   *
   * @returns The requested MasterWorkerEntry object in a single-item list.
   *
   * @throws {@link WorkersApi.GetProductsWorkersByProductAndIdError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link CriblApiReferenceError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  getProductsWorkersByProductAndId(
    request: WorkersApi.GetProductsWorkersByProductAndIdRequest,
    options?: RequestOptions,
  ): ApiPromise<CountedMasterWorkerEntry, WorkersApi.GetProductsWorkersByProductAndIdError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/products/{product}/workers/{id}"),
        auth: anyAuth(this.#auth.bearerAuth, this.#auth.clientOauth),
        pathParams: [
          { name: "product", value: request.product, schema: productsCoreSchema },
          { name: "id", value: request.id, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: countedMasterWorkerEntrySchema },
        errorFactory: WorkersApi.GetProductsWorkersByProductAndIdError,
      },
      options,
    );
  }

  /**
   * Restart Worker, Edge, or Outpost Nodes
   *
   * @remarks
   * Restart all Worker, Edge, or Outpost Nodes for the specified Cribl product.
   *
   * @returns The updated RestartResponse object in a single-item list.
   *
   * @throws {@link WorkersApi.UpdateProductsWorkersRestartByProductError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link CriblApiReferenceError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  updateProductsWorkersRestartByProduct(
    request: WorkersApi.UpdateProductsWorkersRestartByProductRequest,
    options?: RequestOptions,
  ): ApiPromise<CountedRestartResponse, WorkersApi.UpdateProductsWorkersRestartByProductError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default("/products/{product}/workers/restart"),
        auth: anyAuth(this.#auth.bearerAuth, this.#auth.clientOauth),
        pathParams: [{ name: "product", value: request.product, schema: productsCoreSchema }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: restartRequestSchema },
      },
      {
        success: { kind: "json", schema: countedRestartResponseSchema },
        errorFactory: WorkersApi.UpdateProductsWorkersRestartByProductError,
      },
      options,
    );
  }
}

export namespace WorkersApi {
  export type GetProductsSummaryWorkersByProductRequest = {
    /** Name of the Cribl product to get the count of Worker, Edge, or Outpost Nodes for. */
    product: ProductsCore;
    /**
     * Filter expression to evaluate against Nodes for inclusion in the response (for example,
     * <code>status=='healthy'</code>).
     */
    filterExp?: string;
  };

  export class GetProductsSummaryWorkersByProductError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error", Error>
      | Declared<"error403", undefined>
      | Declared<"error2", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetProductsSummaryWorkersByProductError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error403", decode: { kind: "empty" } },
      { on: 500, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetProductsWorkersByProductRequest = {
    /** Name of the Cribl product to get Worker, Edge, or Outpost Nodes for. */
    product: ProductsCore;
    /**
     * Filter expression to evaluate against Nodes for inclusion in the response (for example,
     * <code>status=='healthy'</code>).
     */
    filterExp?: string;
    /** Sorting expression to evaluate against Nodes to specify the sort order for the response. */
    sortExp?: string;
    /**
     * JSON-stringified filter object to evaluate against Nodes for inclusion in the response (for
     * example, <code>{"field":"status","op":"eq","value":"healthy"}</code>).
     */
    filter?: string;
    /**
     * JSON-stringified sorting object to evaluate against Nodes to specify the sort order for the
     * response.
     */
    sort?: string;
    /**
     * Maximum number of Nodes to return in the response for this request. Use with
     * <code>offset</code> to paginate the response into manageable batches.
     */
    limit?: number;
    /**
     * Starting point from which to retrieve results for this request. Use with <code>limit</code>
     * to paginate the response into manageable batches.
     */
    offset?: number;
  };

  export class GetProductsWorkersByProductError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error", Error>
      | Declared<"error403", undefined>
      | Declared<"error2", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetProductsWorkersByProductError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error403", decode: { kind: "empty" } },
      { on: 500, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetProductsWorkersByProductAndIdRequest = {
    /** Name of the Cribl product that contains the Node. */
    product: ProductsCore;
    /** The <code>id</code> of the Node to get the metadata for. */
    id: string;
  };

  export class GetProductsWorkersByProductAndIdError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error403", undefined>
      | Declared<"error2", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetProductsWorkersByProductAndIdError> = [
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error403", decode: { kind: "empty" } },
      { on: 500, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type UpdateProductsWorkersRestartByProductRequest = {
    /** Name of the Cribl product whose Worker, Edge, or Outpost Nodes you want to restart. */
    product: ProductsCore;
    /** RestartRequest object. */
    body: RestartRequest;
  };

  export class UpdateProductsWorkersRestartByProductError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error", Error>
      | Declared<"error403", undefined>
      | Declared<"error2", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<UpdateProductsWorkersRestartByProductError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error403", decode: { kind: "empty" } },
      { on: 500, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }
}
