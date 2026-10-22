import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import * as s from "../core/validation/index.js";
import { errorSchema, type Error } from "../models/error.js";
import {
  paginatedDistributedSummarySchema,
  type PaginatedDistributedSummary,
} from "../models/paginated-distributed-summary.js";
import { productsBaseSchema, type ProductsBase } from "../models/products-base.js";
import type { Servers } from "../servers.js";

/**
 * Actions related to Distributed
 */
export class Distributed {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Get a summary of the deployment for a Cribl product
   *
   * @remarks
   * Get a summary of the deployment for the specified Cribl product (Stream or Edge).<br/><br/>The
   * summary includes a count of Worker Groups or Edge Fleets and resources such as Pipelines,
   * Routes, Sources, and Destinations. For Distributed deployments, the summary also includes a
   * count and statistics for Worker or Edge Nodes.
   *
   * @returns List of DistributedSummary objects.
   *
   * @throws {@link Distributed.GetProductsSummaryByProductError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link CriblApiReferenceError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  getProductsSummaryByProduct(
    request: Distributed.GetProductsSummaryByProductRequest,
    options?: RequestOptions,
  ): ApiPromise<PaginatedDistributedSummary, Distributed.GetProductsSummaryByProductError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/products/{product}/summary"),
        auth: anyAuth(this.#auth.bearerAuth, this.#auth.clientOauth),
        pathParams: [{ name: "product", value: request.product, schema: productsBaseSchema }],
        query: [
          { name: "offset", value: request.offset, schema: s.optional(s.int()) },
          { name: "limit", value: request.limit, schema: s.optional(s.int()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: paginatedDistributedSummarySchema },
        errorFactory: Distributed.GetProductsSummaryByProductError,
      },
      options,
    );
  }
}

export namespace Distributed {
  export type GetProductsSummaryByProductRequest = {
    /** Name of the Cribl product to get the summary for. */
    product: ProductsBase;
    /** Pagination offset */
    offset?: number;
    /** Maximum number of items to return */
    limit?: number;
  };

  export class GetProductsSummaryByProductError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error", Error>
      | Declared<"error403", undefined>
      | Declared<"error2", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetProductsSummaryByProductError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error403", decode: { kind: "empty" } },
      { on: 500, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }
}
