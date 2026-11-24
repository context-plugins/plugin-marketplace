import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { errorSchema, type Error } from "../models/error.js";
import { error2Schema, type Error2 } from "../models/error2.js";
import {
  productSubmissionRequestInternalSchema,
  type ProductSubmissionRequest,
} from "../models/product-submission-request.js";
import {
  productsLinkResponseInternalSchema,
  type ProductsLinkResponse,
} from "../models/products-link-response.js";
import { recipeRequestInternalSchema, type RecipeRequest } from "../models/recipe-request.js";
import {
  shoppingListRequestInternalSchema,
  type ShoppingListRequest,
} from "../models/shopping-list-request.js";
import { submissionResponseSchema, type SubmissionResponse } from "../models/submission-response.js";
import type { Servers } from "../servers.js";

/**
 * Endpoints for creating and updating products in the retailer's catalog on Instacart. Products are
 * the same across all of a retailer's stores.
 */
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
   * Create a recipe page
   *
   * @remarks
   * Creates a recipe page on Instacart Marketplace and returns a unique URL. The page displays
   * recipe details including title, image, ingredients, and cooking instructions. Users can add
   * recipe ingredients to their Instacart cart directly from the page.
   *
   * @returns Recipe page created successfully
   *
   * @throws {@link Products.CreateRecipePageError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link InstacartError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createRecipePage(
    request: Products.CreateRecipePageRequest,
    options?: RequestOptions,
  ): ApiPromise<ProductsLinkResponse, Products.CreateRecipePageError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/idp/v1/products/recipe"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: recipeRequestInternalSchema },
      },
      {
        success: { kind: "json", schema: productsLinkResponseInternalSchema },
        errorFactory: Products.CreateRecipePageError,
      },
      options,
    );
  }

  /**
   * Create a shopping list page
   *
   * @remarks
   * Creates a shopping list page on Instacart Marketplace and returns a unique URL. The page
   * displays a list of products that users can add to their Instacart cart. Each call generates a
   * new page with a unique URL.
   *
   * @returns Shopping list page created successfully
   *
   * @throws {@link Products.CreateShoppingListPageError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link InstacartError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createShoppingListPage(
    request: Products.CreateShoppingListPageRequest,
    options?: RequestOptions,
  ): ApiPromise<ProductsLinkResponse, Products.CreateShoppingListPageError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/idp/v1/products/products_link"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: shoppingListRequestInternalSchema },
      },
      {
        success: { kind: "json", schema: productsLinkResponseInternalSchema },
        errorFactory: Products.CreateShoppingListPageError,
      },
      options,
    );
  }

  /**
   * Create or update products
   *
   * @remarks
   * Creates new products or updates existing products in the retailer's catalog on Instacart. When
   * creating a new product, it takes 1-3 business days for the product to be displayed on the
   * storefront. When updating a product, only the attributes included in the request body are
   * modified and changes are displayed within a few hours.
   *
   * @returns Products submitted successfully
   *
   * @throws {@link Products.SubmitProductsError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link InstacartError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  submitProducts(
    request: Products.SubmitProductsRequest,
    options?: RequestOptions,
  ): ApiPromise<SubmissionResponse, Products.SubmitProductsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v2/data_ingestion/catalog/product/submission"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: productSubmissionRequestInternalSchema },
      },
      {
        success: { kind: "json", schema: submissionResponseSchema },
        errorFactory: Products.SubmitProductsError,
      },
      options,
    );
  }
}

export namespace Products {
  export type CreateRecipePageRequest = {
    body: RecipeRequest;
  };

  export class CreateRecipePageError extends ApiError {
    declare readonly payload:
      | Declared<"error2", Error2>
      | Declared<"error22", Error2>
      | Declared<"error23", Error2>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateRecipePageError> = [
      { on: 400, kind: "error2", decode: { kind: "json", schema: error2Schema } },
      { on: 401, kind: "error22", decode: { kind: "json", schema: error2Schema } },
      { on: 429, kind: "error23", decode: { kind: "json", schema: error2Schema } },
    ];
  }

  export type CreateShoppingListPageRequest = {
    body: ShoppingListRequest;
  };

  export class CreateShoppingListPageError extends ApiError {
    declare readonly payload:
      | Declared<"error2", Error2>
      | Declared<"error22", Error2>
      | Declared<"error23", Error2>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateShoppingListPageError> = [
      { on: 400, kind: "error2", decode: { kind: "json", schema: error2Schema } },
      { on: 401, kind: "error22", decode: { kind: "json", schema: error2Schema } },
      { on: 429, kind: "error23", decode: { kind: "json", schema: error2Schema } },
    ];
  }

  export type SubmitProductsRequest = {
    body: ProductSubmissionRequest;
  };

  export class SubmitProductsError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<SubmitProductsError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "error3", decode: { kind: "json", schema: errorSchema } },
    ];
  }
}
