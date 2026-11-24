import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { noneAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { createProductRequestSchema, type CreateProductRequest } from "../models/create-product-request.js";
import { errorResponseSchema, type ErrorResponse } from "../models/error-response.js";
import { productCreateSchema, type ProductCreate } from "../models/product-create.js";
import { productDetailSchema, type ProductDetail } from "../models/product-detail.js";
import { productListResponseSchema, type ProductListResponse } from "../models/product-list-response.js";
import { productUpdateSchema, type ProductUpdate } from "../models/product-update.js";
import { productSchema, type Product } from "../models/product.js";
import { product1Schema, type Product1 } from "../models/product1.js";
import { updateProductRequestSchema, type UpdateProductRequest } from "../models/update-product-request.js";
import type { Servers } from "../servers.js";

export class Products {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;

  constructor(rawClient: RawClient, servers: Servers) {
    this.#rawClient = rawClient;
    this.#servers = servers;
  }

  /**
   * Create a new product
   *
   * @remarks
   * Creates a new product for the organization
   *
   * @returns 201
   *
   * @throws {@link Products.CreateProductError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link PaidError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createProduct(
    request: Products.CreateProductRequestParams,
    options?: RequestOptions,
  ): ApiPromise<Product1, Products.CreateProductError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/products/"),
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
          schema: s.optional(s.lazy(() => createProductRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: product1Schema },
        errorFactory: Products.CreateProductError,
      },
      options,
    );
  }

  /**
   * Create product
   *
   * @returns Success response
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link PaidError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  create5(request: Products.Create5Request, options?: RequestOptions): ApiPromise<Product, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/products"),
        auth: noneAuth,
        pathParams: [],
        query: [],
        headers: [
          { name: "Authorization", value: request.authorization, schema: s.string() },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "json", value: request.body, schema: s.optional(s.lazy(() => productCreateSchema)) },
      },
      {
        success: { kind: "json", schema: productSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Delete product by external ID
   *
   * @returns Success response
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link PaidError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteByExternalId4(
    request: Products.DeleteByExternalId4Request,
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, ApiError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/products/external/{externalId}"),
        auth: noneAuth,
        pathParams: [{ name: "externalId", value: request.externalId, schema: s.string() }],
        query: [],
        headers: [
          { name: "Authorization", value: request.authorization, schema: s.string() },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Delete product
   *
   * @returns Success response
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link PaidError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  delete5(
    request: Products.Delete5Request,
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, ApiError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/products/{productId}"),
        auth: noneAuth,
        pathParams: [{ name: "productId", value: request.productId, schema: s.string() }],
        query: [],
        headers: [
          { name: "Authorization", value: request.authorization, schema: s.string() },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Get product by external ID
   *
   * @returns Success response
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link PaidError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getByExternalId4(
    request: Products.GetByExternalId4Request,
    options?: RequestOptions,
  ): ApiPromise<Product, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/products/external/{externalId}"),
        auth: noneAuth,
        pathParams: [{ name: "externalId", value: request.externalId, schema: s.string() }],
        query: [],
        headers: [{ name: "Authorization", value: request.authorization, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: productSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Get product
   *
   * @remarks
   * Get a product by ID, including its product attributes with pricing details
   *
   * @returns 200
   *
   * @throws {@link Products.GetProductByIdError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link PaidError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getProductById(
    request: Products.GetProductByIdRequest,
    options?: RequestOptions,
  ): ApiPromise<ProductDetail, Products.GetProductByIdError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/products/{id}"),
        auth: noneAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [{ name: "Authorization", value: request.authorization, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: productDetailSchema },
        errorFactory: Products.GetProductByIdError,
      },
      options,
    );
  }

  /**
   * Get product by ID
   *
   * @returns Success response
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link PaidError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  get5(request: Products.Get5Request, options?: RequestOptions): ApiPromise<Product, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/products/{productId}"),
        auth: noneAuth,
        pathParams: [{ name: "productId", value: request.productId, schema: s.string() }],
        query: [],
        headers: [{ name: "Authorization", value: request.authorization, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: productSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * List products
   *
   * @remarks
   * Get a list of products for the organization
   *
   * @returns 200
   *
   * @throws {@link Products.ListProductsError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link PaidError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listProducts(
    request: Products.ListProductsRequest,
    options?: RequestOptions,
  ): ApiPromise<ProductListResponse, Products.ListProductsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/products/"),
        auth: noneAuth,
        pathParams: [],
        query: [
          { name: "limit", value: request.limit, schema: s.defaulted(s.int(), 10) },
          { name: "offset", value: request.offset, schema: s.optional(s.int()) },
          { name: "name", value: request.name, schema: s.optional(s.string()) },
          { name: "active", value: request.active, schema: s.optional(s.boolean()) },
          { name: "archived", value: request.archived, schema: s.optional(s.boolean()) },
        ],
        headers: [{ name: "Authorization", value: request.authorization, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: productListResponseSchema },
        errorFactory: Products.ListProductsError,
      },
      options,
    );
  }

  /**
   * List products
   *
   * @returns Success response
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link PaidError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  list5(request: Products.List5Request, options?: RequestOptions): ApiPromise<Product[], ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/products"),
        auth: noneAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Authorization", value: request.authorization, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => productSchema)) },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Update product by external ID
   *
   * @returns Success response
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link PaidError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateByExternalId3(
    request: Products.UpdateByExternalId3Request,
    options?: RequestOptions,
  ): ApiPromise<Product, ApiError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default("/products/external/{externalId}"),
        auth: noneAuth,
        pathParams: [{ name: "externalId", value: request.externalId, schema: s.string() }],
        query: [],
        headers: [
          { name: "Authorization", value: request.authorization, schema: s.string() },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "json", value: request.body, schema: s.optional(s.lazy(() => productUpdateSchema)) },
      },
      {
        success: { kind: "json", schema: productSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Update product
   *
   * @remarks
   * Update a product by ID. Optionally upsert product attributes with pricing.
   *
   * @returns 200
   *
   * @throws {@link Products.UpdateProductByIdError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link PaidError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateProductById(
    request: Products.UpdateProductByIdRequest,
    options?: RequestOptions,
  ): ApiPromise<ProductDetail, Products.UpdateProductByIdError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default("/products/{id}"),
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
          schema: s.optional(s.lazy(() => updateProductRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: productDetailSchema },
        errorFactory: Products.UpdateProductByIdError,
      },
      options,
    );
  }

  /**
   * Update product
   *
   * @returns Success response
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link PaidError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  update4(request: Products.Update4Request, options?: RequestOptions): ApiPromise<Product, ApiError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default("/products/{productId}"),
        auth: noneAuth,
        pathParams: [{ name: "productId", value: request.productId, schema: s.string() }],
        query: [],
        headers: [
          { name: "Authorization", value: request.authorization, schema: s.string() },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "json", value: request.body, schema: s.optional(s.lazy(() => productUpdateSchema)) },
      },
      {
        success: { kind: "json", schema: productSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace Products {
  export type CreateProductRequestParams = {
    /** API Key authentication using Bearer token */
    authorization: string;
    /** Body */
    body?: CreateProductRequest;
  };

  export class CreateProductError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateProductError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type Create5Request = {
    /** Bearer authentication */
    authorization: string;
    body?: ProductCreate;
  };

  export type DeleteByExternalId4Request = {
    externalId: string;
    /** Bearer authentication */
    authorization: string;
  };

  export type Delete5Request = {
    productId: string;
    /** Bearer authentication */
    authorization: string;
  };

  export type GetByExternalId4Request = {
    externalId: string;
    /** Bearer authentication */
    authorization: string;
  };

  export type GetProductByIdRequest = {
    id: string;
    /** API Key authentication using Bearer token */
    authorization: string;
  };

  export class GetProductByIdError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetProductByIdError> = [
      { on: 403, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type Get5Request = {
    productId: string;
    /** Bearer authentication */
    authorization: string;
  };

  export type ListProductsRequest = {
    /** @default 10 */
    limit?: number;
    offset?: number;
    /** Search by product name (case-insensitive, matches anywhere in the name). */
    name?: string;
    /** Filter by the product's active flag: true or false. */
    active?: boolean;
    /**
     * Filter by archived state: true returns only archived products, false only non-archived. Omit
     * to include both.
     */
    archived?: boolean;
    /** API Key authentication using Bearer token */
    authorization: string;
  };

  export class ListProductsError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListProductsError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type List5Request = {
    /** Bearer authentication */
    authorization: string;
  };

  export type UpdateByExternalId3Request = {
    externalId: string;
    /** Bearer authentication */
    authorization: string;
    body?: ProductUpdate;
  };

  export type UpdateProductByIdRequest = {
    id: string;
    /** API Key authentication using Bearer token */
    authorization: string;
    /** Body */
    body?: UpdateProductRequest;
  };

  export class UpdateProductByIdError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<UpdateProductByIdError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type Update4Request = {
    productId: string;
    /** Bearer authentication */
    authorization: string;
    body?: ProductUpdate;
  };
}
