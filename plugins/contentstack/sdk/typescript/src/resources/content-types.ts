import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { allAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { contentTypeListSchema, type ContentTypeList } from "../models/content-type-list.js";
import { contentTypeSchema, type ContentType } from "../models/content-type.js";
import { contentType2Schema, type ContentType2 } from "../models/content-type2.js";
import {
  createContentTypeRequestSchema,
  type CreateContentTypeRequest,
} from "../models/create-content-type-request.js";
import {
  errorContentstackAssetsApiSchema,
  type ErrorContentstackAssetsApi,
} from "../models/error-contentstack-assets-api.js";
import { error2Schema, type Error2 } from "../models/error2.js";
import type { Servers } from "../servers.js";

/**
 * Content types define the structure of content entries in a Contentstack stack. They specify the
 * fields and their data types that entries must conform to.
 */
export class ContentTypes {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Create a content type
   *
   * @remarks
   * Creates a new content type in the stack with a defined schema of fields. The schema determines
   * the structure of all entries created from this content type.
   *
   * @returns The newly created content type.
   *
   * @throws {@link ContentTypes.CreateContentTypeError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link ContentstackError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createContentType(
    request: ContentTypes.CreateContentTypeRequestParams,
    options?: RequestOptions,
  ): ApiPromise<ContentType2, ContentTypes.CreateContentTypeError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.defaultContentstackAssetsApi("/content_types"),
        auth: allAuth(this.#auth.apiKey, this.#auth.deliveryToken),
        pathParams: [],
        query: [],
        headers: [
          { name: "api_key", value: request.apiKey, schema: s.string() },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "json", value: request.body, schema: createContentTypeRequestSchema },
      },
      {
        success: { kind: "json", schema: contentType2Schema },
        errorFactory: ContentTypes.CreateContentTypeError,
      },
      options,
    );
  }

  /**
   * Delete a content type
   *
   * @remarks
   * Permanently deletes a content type from the stack. All entries of this content type must be
   * deleted before the content type can be removed.
   *
   * @returns Content type deleted successfully.
   *
   * @throws {@link ContentTypes.DeleteContentTypeError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link ContentstackError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteContentType(
    request: ContentTypes.DeleteContentTypeRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ContentTypes.DeleteContentTypeError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.defaultContentstackAssetsApi("/content_types/{content_type_uid}"),
        auth: allAuth(this.#auth.apiKey, this.#auth.deliveryToken),
        pathParams: [{ name: "content_type_uid", value: request.contentTypeUid, schema: s.string() }],
        query: [],
        headers: [
          { name: "api_key", value: request.apiKey, schema: s.string() },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: ContentTypes.DeleteContentTypeError,
      },
      options,
    );
  }

  /**
   * Get all content types
   *
   * @remarks
   * Retrieves comprehensive information of all content types available in a stack. Supports
   * include_count parameter to return the total count of content types.
   *
   * @returns A list of content types in the stack.
   *
   * @throws {@link ContentTypes.GetAllContentTypesError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link ContentstackError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getAllContentTypes(
    request: ContentTypes.GetAllContentTypesRequest,
    options?: RequestOptions,
  ): ApiPromise<ContentTypeList, ContentTypes.GetAllContentTypesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.defaultContentstackAssetsApi("/content_types"),
        auth: allAuth(this.#auth.apiKey, this.#auth.deliveryToken),
        pathParams: [],
        query: [{ name: "include_count", value: request.includeCount, schema: s.optional(s.boolean()) }],
        headers: [
          { name: "api_key", value: request.apiKey, schema: s.string() },
          { name: "access_token", value: request.accessToken, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: contentTypeListSchema },
        errorFactory: ContentTypes.GetAllContentTypesError,
      },
      options,
    );
  }

  /**
   * Get a single content type
   *
   * @remarks
   * Returns detailed information for a specific content type identified by its UID, including all
   * field definitions and schema metadata.
   *
   * @returns Details of the specified content type.
   *
   * @throws {@link ContentTypes.GetSingleContentTypeError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link ContentstackError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getSingleContentType(
    request: ContentTypes.GetSingleContentTypeRequest,
    options?: RequestOptions,
  ): ApiPromise<ContentType, ContentTypes.GetSingleContentTypeError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.defaultContentstackAssetsApi("/content_types/{content_type_uid}"),
        auth: allAuth(this.#auth.apiKey, this.#auth.deliveryToken),
        pathParams: [{ name: "content_type_uid", value: request.contentTypeUid, schema: s.string() }],
        query: [{ name: "version", value: request.version, schema: s.optional(s.int()) }],
        headers: [
          { name: "api_key", value: request.apiKey, schema: s.string() },
          { name: "access_token", value: request.accessToken, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: contentTypeSchema },
        errorFactory: ContentTypes.GetSingleContentTypeError,
      },
      options,
    );
  }

  /**
   * Update a content type
   *
   * @remarks
   * Updates the schema and options of an existing content type. Changes to the schema may affect
   * existing entries that use this content type.
   *
   * @returns The updated content type.
   *
   * @throws {@link ContentTypes.UpdateContentTypeError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link ContentstackError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateContentType(
    request: ContentTypes.UpdateContentTypeRequest,
    options?: RequestOptions,
  ): ApiPromise<ContentType2, ContentTypes.UpdateContentTypeError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.defaultContentstackAssetsApi("/content_types/{content_type_uid}"),
        auth: allAuth(this.#auth.apiKey, this.#auth.deliveryToken),
        pathParams: [{ name: "content_type_uid", value: request.contentTypeUid, schema: s.string() }],
        query: [],
        headers: [
          { name: "api_key", value: request.apiKey, schema: s.string() },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "json", value: request.body, schema: createContentTypeRequestSchema },
      },
      {
        success: { kind: "json", schema: contentType2Schema },
        errorFactory: ContentTypes.UpdateContentTypeError,
      },
      options,
    );
  }
}

export namespace ContentTypes {
  export type CreateContentTypeRequestParams = {
    /** The API key identifying the Contentstack stack. */
    apiKey: string;
    body: CreateContentTypeRequest;
  };

  export class CreateContentTypeError extends ApiError {
    declare readonly payload:
      | Declared<"error2", Error2>
      | Declared<"errorContentstackAssetsApi", ErrorContentstackAssetsApi>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateContentTypeError> = [
      { on: 400, kind: "error2", decode: { kind: "json", schema: error2Schema } },
      {
        on: 401,
        kind: "errorContentstackAssetsApi",
        decode: { kind: "json", schema: errorContentstackAssetsApiSchema },
      },
    ];
  }

  export type DeleteContentTypeRequest = {
    /** The unique identifier (UID) of the content type. */
    contentTypeUid: string;
    /** The API key identifying the Contentstack stack. */
    apiKey: string;
  };

  export class DeleteContentTypeError extends ApiError {
    declare readonly payload:
      | Declared<"errorContentstackAssetsApi", ErrorContentstackAssetsApi>
      | Declared<"errorContentstackAssetsApi2", ErrorContentstackAssetsApi>
      | Undeclared;

    static readonly errors: ErrorDecoders<DeleteContentTypeError> = [
      {
        on: 401,
        kind: "errorContentstackAssetsApi",
        decode: { kind: "json", schema: errorContentstackAssetsApiSchema },
      },
      {
        on: 404,
        kind: "errorContentstackAssetsApi2",
        decode: { kind: "json", schema: errorContentstackAssetsApiSchema },
      },
    ];
  }

  export type GetAllContentTypesRequest = {
    /** Set to true to include the total count of content types in the response. */
    includeCount?: boolean;
    /** The API key for the Contentstack stack. */
    apiKey: string;
    /** The delivery token for the stack environment. */
    accessToken: string;
  };

  export class GetAllContentTypesError extends ApiError {
    declare readonly payload: Declared<"errorContentstackAssetsApi", ErrorContentstackAssetsApi> | Undeclared;

    static readonly errors: ErrorDecoders<GetAllContentTypesError> = [
      {
        on: 401,
        kind: "errorContentstackAssetsApi",
        decode: { kind: "json", schema: errorContentstackAssetsApiSchema },
      },
    ];
  }

  export type GetSingleContentTypeRequest = {
    /** The unique identifier (UID) of the content type. */
    contentTypeUid: string;
    /** Retrieve a specific version of the content type schema. */
    version?: number;
    /** The API key for the Contentstack stack. */
    apiKey: string;
    /** The delivery token for the stack environment. */
    accessToken: string;
  };

  export class GetSingleContentTypeError extends ApiError {
    declare readonly payload:
      | Declared<"errorContentstackAssetsApi", ErrorContentstackAssetsApi>
      | Declared<"errorContentstackAssetsApi2", ErrorContentstackAssetsApi>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetSingleContentTypeError> = [
      {
        on: 401,
        kind: "errorContentstackAssetsApi",
        decode: { kind: "json", schema: errorContentstackAssetsApiSchema },
      },
      {
        on: 404,
        kind: "errorContentstackAssetsApi2",
        decode: { kind: "json", schema: errorContentstackAssetsApiSchema },
      },
    ];
  }

  export type UpdateContentTypeRequest = {
    /** The unique identifier (UID) of the content type. */
    contentTypeUid: string;
    /** The API key identifying the Contentstack stack. */
    apiKey: string;
    body: CreateContentTypeRequest;
  };

  export class UpdateContentTypeError extends ApiError {
    declare readonly payload:
      | Declared<"error2", Error2>
      | Declared<"errorContentstackAssetsApi", ErrorContentstackAssetsApi>
      | Undeclared;

    static readonly errors: ErrorDecoders<UpdateContentTypeError> = [
      { on: 400, kind: "error2", decode: { kind: "json", schema: error2Schema } },
      {
        on: 401,
        kind: "errorContentstackAssetsApi",
        decode: { kind: "json", schema: errorContentstackAssetsApiSchema },
      },
    ];
  }
}
