import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { allAuth, anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import * as s from "../core/validation/index.js";
import {
  dimensionsExternalApiGetResponseSchema,
  type DimensionsExternalApiGetResponse,
} from "../models/dimensions-external-api-get-response.js";
import {
  dimensionsExternalApiListResponseSchema,
  type DimensionsExternalApiListResponse,
} from "../models/dimensions-external-api-list-response.js";
import { dimensionsTypesSchema, type DimensionsTypes } from "../models/dimensions-types.js";
import { errorSchema, type Error } from "../models/error.js";
import {
  SortByDoiTDimensionsApi,
  sortByDoiTDimensionsApiSchema,
} from "../models/sort-by-doi-tdimensions-api.js";
import { sortOrderSchema, type SortOrder } from "../models/sort-order.js";
import type { Servers } from "../servers.js";

/**
 * View available dimensions for analysis.
 */
export class Dimensions {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Retrieve a dimension
   *
   * @remarks
   * Returns a dimension by type and key.
   *
   * @returns OK - The dimension returned.
   *
   * @throws {@link Dimensions.GetDimensionsError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link DoiTError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getDimensions(
    request: Dimensions.GetDimensionsRequest,
    options?: RequestOptions,
  ): ApiPromise<DimensionsExternalApiGetResponse, Dimensions.GetDimensionsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/analytics/v1/dimension"),
        auth: anyAuth(this.#auth.apiKey, allAuth(this.#auth.tenantId, this.#auth.apiKey)),
        pathParams: [],
        query: [
          { name: "type", value: request.type, schema: dimensionsTypesSchema },
          { name: "id", value: request.id, schema: s.string() },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: dimensionsExternalApiGetResponseSchema },
        errorFactory: Dimensions.GetDimensionsError,
      },
      options,
    );
  }

  /**
   * List dimensions
   *
   * @remarks
   * Returns a list of the dimensions that your account has access to.
   *
   * @returns OK - The request succeeded.
   *
   * @throws {@link Dimensions.ListDimensionsError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link DoiTError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listDimensions(
    request: Dimensions.ListDimensionsRequest = {},
    options?: RequestOptions,
  ): ApiPromise<DimensionsExternalApiListResponse, Dimensions.ListDimensionsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/analytics/v1/dimensions"),
        auth: anyAuth(this.#auth.apiKey, allAuth(this.#auth.tenantId, this.#auth.apiKey)),
        pathParams: [],
        query: [
          { name: "maxResults", value: request.maxResults, schema: s.defaulted(s.int(), 50) },
          { name: "pageToken", value: request.pageToken, schema: s.optional(s.string()) },
          { name: "filter", value: request.filter, schema: s.optional(s.string()) },
          {
            name: "sortBy",
            value: request.sortBy,
            schema: s.defaulted(sortByDoiTDimensionsApiSchema, SortByDoiTDimensionsApi.Id),
          },
          { name: "sortOrder", value: request.sortOrder, schema: s.optional(s.lazy(() => sortOrderSchema)) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: dimensionsExternalApiListResponseSchema },
        errorFactory: Dimensions.ListDimensionsError,
      },
      options,
    );
  }
}

export namespace Dimensions {
  export type GetDimensionsRequest = {
    /** Dimension type */
    type: DimensionsTypes;
    /** Dimension id */
    id: string;
  };

  export class GetDimensionsError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetDimensionsError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error4", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error5", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type ListDimensionsRequest = {
    /**
     * The maximum number of results to return in a single page. Use the page tokens to iterate
     * through the entire collection.
     *
     * @default 50
     */
    maxResults?: number;
    /** Page token, returned by a previous call, to request the next page of results */
    pageToken?: string;
    /**
     * An expression for filtering the results. The fields eligible for filtering are: type, label,
     * key.
     */
    filter?: string;
    /**
     * A field by which the results will be sorted. `key` is an alias for the dimension `id`.
     * Defaults to `id` in descending order.
     *
     * @default SortByDoiTDimensionsApi.Id
     */
    sortBy?: SortByDoiTDimensionsApi;
    /**
     * Specifies the sort direction; accepts asc for ascending (lowest to highest) or desc for
     * descending (highest to lowest).
     */
    sortOrder?: SortOrder;
  };

  export class ListDimensionsError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListDimensionsError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error4", decode: { kind: "json", schema: errorSchema } },
    ];
  }
}
