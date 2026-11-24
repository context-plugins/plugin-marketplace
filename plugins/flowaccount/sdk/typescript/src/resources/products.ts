import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { apiResponseOfBooleanSchema, type ApiResponseOfBoolean } from "../models/api-response-of-boolean.js";
import {
  apiResponseOfISimpleListResultOfIProductResultSchema,
  type ApiResponseOfISimpleListResultOfIProductResult,
} from "../models/api-response-of-isimple-list-result-of-iproduct-result.js";
import { productResultSchema, type ProductResult } from "../models/product-result.js";
import type { Servers } from "../servers.js";

export class Products {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Products create
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link FlowAccountError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  productsCreate(
    request: Products.ProductsCreateRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiResponseOfISimpleListResultOfIProductResult, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/{culture}/Products"),
        auth: this.#auth.bearer,
        pathParams: [{ name: "culture", value: request.culture, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: productResultSchema },
      },
      {
        success: { kind: "json", schema: apiResponseOfISimpleListResultOfIProductResultSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Products get by id
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link FlowAccountError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  productsGetById(
    request: Products.ProductsGetByIdRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiResponseOfISimpleListResultOfIProductResult, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/{culture}/Products/{id}"),
        auth: this.#auth.bearer,
        pathParams: [
          { name: "id", value: request.id, schema: s.int() },
          { name: "culture", value: request.culture, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: apiResponseOfISimpleListResultOfIProductResultSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Products get list
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link FlowAccountError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  productsGetList(
    request: Products.ProductsGetListRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiResponseOfISimpleListResultOfIProductResult, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/{culture}/Products"),
        auth: this.#auth.bearer,
        pathParams: [{ name: "culture", value: request.culture, schema: s.string() }],
        query: [
          { name: "SortBy", value: request.sortBy, schema: s.optionalNullable(s.string()) },
          { name: "CurrentPage", value: request.currentPage, schema: s.optionalNullable(s.string()) },
          { name: "PageSize", value: request.pageSize, schema: s.optionalNullable(s.string()) },
          { name: "Filter", value: request.filter, schema: s.optionalNullable(s.string()) },
          { name: "SearchString", value: request.searchString, schema: s.optionalNullable(s.string()) },
          {
            name: "CustomDocumentModels",
            value: request.customDocumentModels,
            schema: s.optionalNullable(s.string()),
          },
          { name: "Range", value: request.range, schema: s.optionalNullable(s.string()) },
          { name: "Month", value: request.month, schema: s.optionalNullable(s.string()) },
          { name: "Year", value: request.year, schema: s.optionalNullable(s.string()) },
          { name: "StartDate", value: request.startDate, schema: s.optionalNullable(s.string()) },
          { name: "EndDate", value: request.endDate, schema: s.optionalNullable(s.string()) },
          { name: "id", value: request.id, schema: s.defaulted(s.int(), 0) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: apiResponseOfISimpleListResultOfIProductResultSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Products remove
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link FlowAccountError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  productsRemove(
    request: Products.ProductsRemoveRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiResponseOfBoolean, ApiError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/{culture}/Products/{id}"),
        auth: this.#auth.bearer,
        pathParams: [
          { name: "id", value: request.id, schema: s.int() },
          { name: "culture", value: request.culture, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: apiResponseOfBooleanSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Products search
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link FlowAccountError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  productsSearch(
    request: Products.ProductsSearchRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiResponseOfISimpleListResultOfIProductResult, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/{culture}/Products/search"),
        auth: this.#auth.bearer,
        pathParams: [{ name: "culture", value: request.culture, schema: s.string() }],
        query: [
          { name: "SortBy", value: request.sortBy, schema: s.optionalNullable(s.string()) },
          { name: "CurrentPage", value: request.currentPage, schema: s.optionalNullable(s.string()) },
          { name: "PageSize", value: request.pageSize, schema: s.optionalNullable(s.string()) },
          { name: "Filter", value: request.filter, schema: s.optionalNullable(s.string()) },
          { name: "SearchString", value: request.searchString, schema: s.optionalNullable(s.string()) },
          {
            name: "CustomDocumentModels",
            value: request.customDocumentModels,
            schema: s.optionalNullable(s.string()),
          },
          { name: "Range", value: request.range, schema: s.optionalNullable(s.string()) },
          { name: "Month", value: request.month, schema: s.optionalNullable(s.string()) },
          { name: "Year", value: request.year, schema: s.optionalNullable(s.string()) },
          { name: "StartDate", value: request.startDate, schema: s.optionalNullable(s.string()) },
          { name: "EndDate", value: request.endDate, schema: s.optionalNullable(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: apiResponseOfISimpleListResultOfIProductResultSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Products update
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link FlowAccountError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  productsUpdate(
    request: Products.ProductsUpdateRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiResponseOfISimpleListResultOfIProductResult, ApiError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default("/{culture}/Products/{id}"),
        auth: this.#auth.bearer,
        pathParams: [
          { name: "id", value: request.id, schema: s.int() },
          { name: "culture", value: request.culture, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: productResultSchema },
      },
      {
        success: { kind: "json", schema: apiResponseOfISimpleListResultOfIProductResultSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace Products {
  export type ProductsCreateRequest = {
    culture: string;
    body: ProductResult;
  };

  export type ProductsGetByIdRequest = {
    id: number;
    culture: string;
  };

  export type ProductsGetListRequest = {
    culture: string;
    sortBy?: string | null;
    currentPage?: string | null;
    pageSize?: string | null;
    filter?: string | null;
    searchString?: string | null;
    customDocumentModels?: string | null;
    range?: string | null;
    month?: string | null;
    year?: string | null;
    startDate?: string | null;
    endDate?: string | null;
    /** @default 0 */
    id?: number;
  };

  export type ProductsRemoveRequest = {
    id: number;
    culture: string;
  };

  export type ProductsSearchRequest = {
    culture: string;
    sortBy?: string | null;
    currentPage?: string | null;
    pageSize?: string | null;
    filter?: string | null;
    searchString?: string | null;
    customDocumentModels?: string | null;
    range?: string | null;
    month?: string | null;
    year?: string | null;
    startDate?: string | null;
    endDate?: string | null;
  };

  export type ProductsUpdateRequest = {
    id: number;
    culture: string;
    body: ProductResult;
  };
}
