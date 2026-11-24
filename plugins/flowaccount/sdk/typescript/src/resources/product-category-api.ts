import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { BinaryContent } from "../core/binary.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { productCategorySchema, type ProductCategory } from "../models/product-category.js";
import type { Servers } from "../servers.js";

export class ProductCategoryApi {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Product category create product category
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link FlowAccountError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  productCategoryCreateProductCategory(
    request: ProductCategoryApi.ProductCategoryCreateProductCategoryRequest,
    options?: RequestOptions,
  ): ApiPromise<BinaryContent, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/{culture}/products/categories"),
        auth: this.#auth.bearer,
        pathParams: [{ name: "culture", value: request.culture, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: productCategorySchema },
      },
      {
        success: { kind: "binary", contentType: "application/octet-stream" },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Product category delete product category
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link FlowAccountError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  productCategoryDeleteProductCategory(
    request: ProductCategoryApi.ProductCategoryDeleteProductCategoryRequest,
    options?: RequestOptions,
  ): ApiPromise<BinaryContent, ApiError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/{culture}/products/categories/{id}"),
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
        success: { kind: "binary", contentType: "application/octet-stream" },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Product category get product category
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link FlowAccountError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  productCategoryGetProductCategory(
    request: ProductCategoryApi.ProductCategoryGetProductCategoryRequest,
    options?: RequestOptions,
  ): ApiPromise<ProductCategory[], ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/{culture}/products/categories"),
        auth: this.#auth.bearer,
        pathParams: [{ name: "culture", value: request.culture, schema: s.string() }],
        query: [
          { name: "currentPage", value: request.currentPage, schema: s.defaulted(s.int(), 0) },
          { name: "pageSize", value: request.pageSize, schema: s.defaulted(s.int(), 20) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => productCategorySchema)) },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Product category update product category
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link FlowAccountError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  productCategoryUpdateProductCategory(
    request: ProductCategoryApi.ProductCategoryUpdateProductCategoryRequest,
    options?: RequestOptions,
  ): ApiPromise<BinaryContent, ApiError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default("/{culture}/products/categories/{id}"),
        auth: this.#auth.bearer,
        pathParams: [
          { name: "id", value: request.id, schema: s.int() },
          { name: "culture", value: request.culture, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: productCategorySchema },
      },
      {
        success: { kind: "binary", contentType: "application/octet-stream" },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace ProductCategoryApi {
  export type ProductCategoryCreateProductCategoryRequest = {
    culture: string;
    body: ProductCategory;
  };

  export type ProductCategoryDeleteProductCategoryRequest = {
    id: number;
    culture: string;
  };

  export type ProductCategoryGetProductCategoryRequest = {
    culture: string;
    /** @default 0 */
    currentPage?: number;
    /** @default 20 */
    pageSize?: number;
  };

  export type ProductCategoryUpdateProductCategoryRequest = {
    id: number;
    culture: string;
    body: ProductCategory;
  };
}
