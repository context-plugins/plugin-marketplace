import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  customCategoriesResponseSchema,
  type CustomCategoriesResponse,
} from "../models/custom-categories-response.js";
import {
  customCategoriesUrlsRequestSchema,
  type CustomCategoriesUrlsRequest,
} from "../models/custom-categories-urls-request.js";
import {
  customCategoriesUrlsResponseSchema,
  type CustomCategoriesUrlsResponse,
} from "../models/custom-categories-urls-response.js";
import { errorsInternalSchema, type Errors } from "../models/errors.js";
import { successMessageSchema, type SuccessMessage } from "../models/success-message.js";
import type { Servers } from "../servers.js";

/**
 * Everything about your Custom Categories
 */
export class CustomCategoriesApi {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Add URLs to a Custom Category
   *
   * @remarks
   * Use this API to add URLs to an existing custom category.
   *
   * Specify the name of the custom category in the path parameter (`custom_category_name`) and
   * provide a JSON array of URLs in the request body.
   *
   * Ensure that URLs are properly formatted and included in the array.
   *
   * Please check the docs at https://inflight.dope.security for guidelines on URL formatting.
   *
   * If any URL in the list is invalid, the entire request will be rejected. The 400 error response
   * will include the list of invalid URLs in the error details.
   *
   * @returns OK
   *
   * @throws {@link CustomCategoriesApi.AddCustomCategoryUrlsError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link DopeSecurityError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  addCustomCategoryUrls(
    request: CustomCategoriesApi.AddCustomCategoryUrlsRequest,
    options?: RequestOptions,
  ): ApiPromise<SuccessMessage, CustomCategoriesApi.AddCustomCategoryUrlsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/custom_categories/{custom_category_name}/urls"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "custom_category_name", value: request.customCategoryName, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: customCategoriesUrlsRequestSchema },
      },
      {
        success: { kind: "json", schema: successMessageSchema },
        errorFactory: CustomCategoriesApi.AddCustomCategoryUrlsError,
      },
      options,
    );
  }

  /**
   * Create a Custom Category
   *
   * @remarks
   * Use this API to create a new custom category.
   *
   * Specify the name of the custom category in the path parameter (`custom_category_name`).
   *
   * If the custom category already exists, a `400` error is returned.
   *
   * Validation rules for `custom_category_name`:
   * - Must not be empty or whitespace-only
   * - Must not contain leading or trailing whitespace
   * - Maximum length of 32 characters
   * - Must not contain any of the following characters: `# ! \@ $ % ^ * ? . / \`
   *
   * @returns OK
   *
   * @throws {@link CustomCategoriesApi.CreateCustomCategoryError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link DopeSecurityError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createCustomCategory(
    request: CustomCategoriesApi.CreateCustomCategoryRequest,
    options?: RequestOptions,
  ): ApiPromise<SuccessMessage, CustomCategoriesApi.CreateCustomCategoryError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/custom_categories/{custom_category_name}"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "custom_category_name", value: request.customCategoryName, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: successMessageSchema },
        errorFactory: CustomCategoriesApi.CreateCustomCategoryError,
      },
      options,
    );
  }

  /**
   * Delete All URLs from a Custom Category
   *
   * @remarks
   * Use this API to delete all URLs from an existing custom category.
   *
   * Specify the name of the custom category in the path parameter (`custom_category_name`).
   *
   * This action will remove all URLs associated with the specified custom category.
   *
   * @returns OK
   *
   * @throws {@link CustomCategoriesApi.DeleteAllCustomCategoryUrlsError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link DopeSecurityError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteAllCustomCategoryUrls(
    request: CustomCategoriesApi.DeleteAllCustomCategoryUrlsRequest,
    options?: RequestOptions,
  ): ApiPromise<SuccessMessage, CustomCategoriesApi.DeleteAllCustomCategoryUrlsError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/custom_categories/{custom_category_name}/urls"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "custom_category_name", value: request.customCategoryName, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: successMessageSchema },
        errorFactory: CustomCategoriesApi.DeleteAllCustomCategoryUrlsError,
      },
      options,
    );
  }

  /**
   * Delete a Custom Category
   *
   * @remarks
   * Use this API to delete a single custom category by name. This action will remove the custom
   * category and all of its associated data.
   *
   * @returns OK
   *
   * @throws {@link CustomCategoriesApi.DeleteCustomCategoryError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link DopeSecurityError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteCustomCategory(
    request: CustomCategoriesApi.DeleteCustomCategoryRequest,
    options?: RequestOptions,
  ): ApiPromise<SuccessMessage, CustomCategoriesApi.DeleteCustomCategoryError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/custom_categories/{custom_category_name}"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "custom_category_name", value: request.customCategoryName, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: successMessageSchema },
        errorFactory: CustomCategoriesApi.DeleteCustomCategoryError,
      },
      options,
    );
  }

  /**
   * Delete a specific URL from a Custom Category
   *
   * @remarks
   * Use this API to delete a specific URL from an existing custom category.
   *
   * Specify the name of the custom category in the path parameter (`custom_category_name`).
   *
   * Ensure that a given URL is encoded using URL encoding.
   *
   * @returns OK
   *
   * @throws {@link CustomCategoriesApi.DeleteCustomCategoryUrlError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link DopeSecurityError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteCustomCategoryUrl(
    request: CustomCategoriesApi.DeleteCustomCategoryUrlRequest,
    options?: RequestOptions,
  ): ApiPromise<SuccessMessage, CustomCategoriesApi.DeleteCustomCategoryUrlError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/custom_categories/{custom_category_name}/url/{encoded_url}"),
        auth: this.#auth.bearerAuth,
        pathParams: [
          { name: "custom_category_name", value: request.customCategoryName, schema: s.string() },
          { name: "encoded_url", value: request.encodedUrl, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: successMessageSchema },
        errorFactory: CustomCategoriesApi.DeleteCustomCategoryUrlError,
      },
      options,
    );
  }

  /**
   * List Custom Categories
   *
   * @remarks
   * Use this API to get a paginated list of all custom categories.
   *
   * Results are returned in pages using cursor based pagination.
   *
   * @returns OK
   *
   * @throws {@link CustomCategoriesApi.ListCustomCategoriesError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link DopeSecurityError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listCustomCategories(
    request: CustomCategoriesApi.ListCustomCategoriesRequest = {},
    options?: RequestOptions,
  ): ApiPromise<CustomCategoriesResponse, CustomCategoriesApi.ListCustomCategoriesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/custom_categories"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [
          { name: "first", value: request.first, schema: s.defaulted(s.int(), 50) },
          { name: "after", value: request.after, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: customCategoriesResponseSchema },
        errorFactory: CustomCategoriesApi.ListCustomCategoriesError,
      },
      options,
    );
  }

  /**
   * List all URLs of a Custom Category
   *
   * @remarks
   * Use this API to get all URLs of an existing custom category.
   *
   * @returns OK
   *
   * @throws {@link CustomCategoriesApi.ListCustomCategoryUrlsError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link DopeSecurityError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listCustomCategoryUrls(
    request: CustomCategoriesApi.ListCustomCategoryUrlsRequest,
    options?: RequestOptions,
  ): ApiPromise<CustomCategoriesUrlsResponse, CustomCategoriesApi.ListCustomCategoryUrlsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/custom_categories/{custom_category_name}/urls"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "custom_category_name", value: request.customCategoryName, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: customCategoriesUrlsResponseSchema },
        errorFactory: CustomCategoriesApi.ListCustomCategoryUrlsError,
      },
      options,
    );
  }

  /**
   * Overwrite all URLs of a Custom Category
   *
   * @remarks
   * Use this API to replace all existing URLs of a custom category with a new list of URLs.
   *
   * Specify the name of the custom category in the path parameter (`custom_category_name`) and
   * provide a JSON array of URLs in the request body. All existing URLs will be removed and
   * replaced with the provided list.
   *
   * Please check the docs at https://inflight.dope.security for guidelines on URL formatting.
   *
   * If any URL in the list is invalid, the entire request will be rejected. The 400 error response
   * will include the list of invalid URLs in the error details.
   *
   * @returns OK
   *
   * @throws {@link CustomCategoriesApi.OverwriteCustomCategoryUrlsError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link DopeSecurityError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  overwriteCustomCategoryUrls(
    request: CustomCategoriesApi.OverwriteCustomCategoryUrlsRequest,
    options?: RequestOptions,
  ): ApiPromise<SuccessMessage, CustomCategoriesApi.OverwriteCustomCategoryUrlsError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default("/custom_categories/{custom_category_name}/urls"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "custom_category_name", value: request.customCategoryName, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: customCategoriesUrlsRequestSchema },
      },
      {
        success: { kind: "json", schema: successMessageSchema },
        errorFactory: CustomCategoriesApi.OverwriteCustomCategoryUrlsError,
      },
      options,
    );
  }
}

export namespace CustomCategoriesApi {
  export type AddCustomCategoryUrlsRequest = {
    /** The name of the custom category to add URLs to */
    customCategoryName: string;
    body: CustomCategoriesUrlsRequest;
  };

  export class AddCustomCategoryUrlsError extends ApiError {
    declare readonly payload:
      | Declared<"errors", Errors>
      | Declared<"errors2", Errors>
      | Declared<"errors3", Errors>
      | Undeclared;

    static readonly errors: ErrorDecoders<AddCustomCategoryUrlsError> = [
      { on: 400, kind: "errors", decode: { kind: "json", schema: errorsInternalSchema } },
      { on: 403, kind: "errors2", decode: { kind: "json", schema: errorsInternalSchema } },
      { on: 500, kind: "errors3", decode: { kind: "json", schema: errorsInternalSchema } },
    ];
  }

  export type CreateCustomCategoryRequest = {
    /** The name of the custom category to create */
    customCategoryName: string;
  };

  export const createCustomCategoryRequestSchema: Schema<CreateCustomCategoryRequest> = s.lazySchema(() =>
    s.object<CreateCustomCategoryRequest>({
      customCategoryName: s
        .string()
        .check(s.minLength(1), s.maxLength(32), s.pattern("^[^#!@$%^*?./\\\\]+$")),
    }),
  );

  export class CreateCustomCategoryError extends ApiError {
    declare readonly payload:
      | Declared<"errors", Errors>
      | Declared<"errors2", Errors>
      | Declared<"errors3", Errors>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateCustomCategoryError> = [
      { on: 400, kind: "errors", decode: { kind: "json", schema: errorsInternalSchema } },
      { on: 403, kind: "errors2", decode: { kind: "json", schema: errorsInternalSchema } },
      { on: 500, kind: "errors3", decode: { kind: "json", schema: errorsInternalSchema } },
    ];
  }

  export type DeleteAllCustomCategoryUrlsRequest = {
    /** The name of the custom category to delete all URLs from */
    customCategoryName: string;
  };

  export class DeleteAllCustomCategoryUrlsError extends ApiError {
    declare readonly payload:
      | Declared<"errors", Errors>
      | Declared<"errors2", Errors>
      | Declared<"errors3", Errors>
      | Undeclared;

    static readonly errors: ErrorDecoders<DeleteAllCustomCategoryUrlsError> = [
      { on: 400, kind: "errors", decode: { kind: "json", schema: errorsInternalSchema } },
      { on: 403, kind: "errors2", decode: { kind: "json", schema: errorsInternalSchema } },
      { on: 500, kind: "errors3", decode: { kind: "json", schema: errorsInternalSchema } },
    ];
  }

  export type DeleteCustomCategoryRequest = {
    /** The name of the custom category to delete */
    customCategoryName: string;
  };

  export class DeleteCustomCategoryError extends ApiError {
    declare readonly payload:
      | Declared<"errors", Errors>
      | Declared<"errors2", Errors>
      | Declared<"errors3", Errors>
      | Undeclared;

    static readonly errors: ErrorDecoders<DeleteCustomCategoryError> = [
      { on: 400, kind: "errors", decode: { kind: "json", schema: errorsInternalSchema } },
      { on: 403, kind: "errors2", decode: { kind: "json", schema: errorsInternalSchema } },
      { on: 500, kind: "errors3", decode: { kind: "json", schema: errorsInternalSchema } },
    ];
  }

  export type DeleteCustomCategoryUrlRequest = {
    /** The name of the custom category to delete given URL from */
    customCategoryName: string;
    /**
     * The URL to be deleted (Ensure that URLs are properly URL-encoded using the UTF8 encoding
     * method)
     */
    encodedUrl: string;
  };

  export class DeleteCustomCategoryUrlError extends ApiError {
    declare readonly payload:
      | Declared<"errors", Errors>
      | Declared<"errors2", Errors>
      | Declared<"errors3", Errors>
      | Undeclared;

    static readonly errors: ErrorDecoders<DeleteCustomCategoryUrlError> = [
      { on: 400, kind: "errors", decode: { kind: "json", schema: errorsInternalSchema } },
      { on: 403, kind: "errors2", decode: { kind: "json", schema: errorsInternalSchema } },
      { on: 500, kind: "errors3", decode: { kind: "json", schema: errorsInternalSchema } },
    ];
  }

  export type ListCustomCategoriesRequest = {
    /**
     * An optional pagination param that states the number of records requested from the **start**
     * of the `cursor`. The default value is **50**.
     *
     * @default 50
     */
    first?: number;
    /**
     * An optional pagination cursor. Pass the `endCursor` from the previous response's `pageInfo`
     * to fetch the next page. Check `hasNextPage` in the previous response's `pageInfo` to
     * determine whether more records are available.
     */
    after?: string;
  };

  export class ListCustomCategoriesError extends ApiError {
    declare readonly payload: Declared<"errors", Errors> | Declared<"errors2", Errors> | Undeclared;

    static readonly errors: ErrorDecoders<ListCustomCategoriesError> = [
      { on: 403, kind: "errors", decode: { kind: "json", schema: errorsInternalSchema } },
      { on: 500, kind: "errors2", decode: { kind: "json", schema: errorsInternalSchema } },
    ];
  }

  export type ListCustomCategoryUrlsRequest = {
    /** The name of the custom category to get URLs from */
    customCategoryName: string;
  };

  export class ListCustomCategoryUrlsError extends ApiError {
    declare readonly payload:
      | Declared<"errors", Errors>
      | Declared<"errors2", Errors>
      | Declared<"errors3", Errors>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListCustomCategoryUrlsError> = [
      { on: 400, kind: "errors", decode: { kind: "json", schema: errorsInternalSchema } },
      { on: 403, kind: "errors2", decode: { kind: "json", schema: errorsInternalSchema } },
      { on: 500, kind: "errors3", decode: { kind: "json", schema: errorsInternalSchema } },
    ];
  }

  export type OverwriteCustomCategoryUrlsRequest = {
    /** The name of the custom category to overwrite URLs for */
    customCategoryName: string;
    body: CustomCategoriesUrlsRequest;
  };

  export class OverwriteCustomCategoryUrlsError extends ApiError {
    declare readonly payload:
      | Declared<"errors", Errors>
      | Declared<"errors2", Errors>
      | Declared<"errors3", Errors>
      | Undeclared;

    static readonly errors: ErrorDecoders<OverwriteCustomCategoryUrlsError> = [
      { on: 400, kind: "errors", decode: { kind: "json", schema: errorsInternalSchema } },
      { on: 403, kind: "errors2", decode: { kind: "json", schema: errorsInternalSchema } },
      { on: 500, kind: "errors3", decode: { kind: "json", schema: errorsInternalSchema } },
    ];
  }
}
