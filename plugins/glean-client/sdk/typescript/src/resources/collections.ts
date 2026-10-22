import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  addCollectionItemsRequestSchema,
  type AddCollectionItemsRequest,
} from "../models/add-collection-items-request.js";
import {
  addCollectionItemsResponseSchema,
  type AddCollectionItemsResponse,
} from "../models/add-collection-items-response.js";
import { collectionErrorSchema, type CollectionError } from "../models/collection-error.js";
import {
  createCollectionRequestSchema,
  type CreateCollectionRequest,
} from "../models/create-collection-request.js";
import {
  deleteCollectionItemRequestSchema,
  type DeleteCollectionItemRequest,
} from "../models/delete-collection-item-request.js";
import {
  deleteCollectionItemResponseSchema,
  type DeleteCollectionItemResponse,
} from "../models/delete-collection-item-response.js";
import {
  deleteCollectionRequestSchema,
  type DeleteCollectionRequest,
} from "../models/delete-collection-request.js";
import {
  editCollectionItemRequestSchema,
  type EditCollectionItemRequest,
} from "../models/edit-collection-item-request.js";
import {
  editCollectionItemResponseSchema,
  type EditCollectionItemResponse,
} from "../models/edit-collection-item-response.js";
import {
  editCollectionRequestSchema,
  type EditCollectionRequest,
} from "../models/edit-collection-request.js";
import {
  editCollectionResponseSchema,
  type EditCollectionResponse,
} from "../models/edit-collection-response.js";
import { getCollectionRequestSchema, type GetCollectionRequest } from "../models/get-collection-request.js";
import {
  getCollectionResponseSchema,
  type GetCollectionResponse,
} from "../models/get-collection-response.js";
import {
  listCollectionsRequestSchema,
  type ListCollectionsRequest,
} from "../models/list-collections-request.js";
import {
  listCollectionsResponseSchema,
  type ListCollectionsResponse,
} from "../models/list-collections-response.js";
import {
  createCollectionResponse2Schema,
  type CreateCollectionResponse2,
} from "../models/unions/create-collection-response2.js";
import type { Servers } from "../servers.js";

export class Collections {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Add Collection item
   *
   * @remarks
   * Add items to a Collection.
   *
   * @returns OK
   *
   * @throws {@link Collections.AddcollectionitemsError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link GleanClientApiError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  addcollectionitems(
    request: Collections.AddcollectionitemsRequest,
    options?: RequestOptions,
  ): ApiPromise<AddCollectionItemsResponse, Collections.AddcollectionitemsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/rest/api/v1/addcollectionitems"),
        auth: this.#auth.apiToken,
        pathParams: [],
        query: [{ name: "locale", value: request.locale, schema: s.optional(s.string()) }],
        headers: [
          { name: "X-Glean-ActAs", value: request.xGleanActAs, schema: s.optional(s.string()) },
          { name: "X-Glean-Auth-Type", value: request.xGleanAuthType, schema: s.optional(s.string()) },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "json", value: request.body, schema: addCollectionItemsRequestSchema },
      },
      {
        success: { kind: "json", schema: addCollectionItemsResponseSchema },
        errorFactory: Collections.AddcollectionitemsError,
      },
      options,
    );
  }

  /**
   * Create Collection
   *
   * @remarks
   * Create a publicly visible (empty) Collection of documents.
   *
   * @returns OK
   *
   * @throws {@link Collections.CreatecollectionError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link GleanClientApiError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createcollection(
    request: Collections.CreatecollectionRequest,
    options?: RequestOptions,
  ): ApiPromise<CreateCollectionResponse2, Collections.CreatecollectionError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/rest/api/v1/createcollection"),
        auth: this.#auth.apiToken,
        pathParams: [],
        query: [{ name: "locale", value: request.locale, schema: s.optional(s.string()) }],
        headers: [
          { name: "X-Glean-ActAs", value: request.xGleanActAs, schema: s.optional(s.string()) },
          { name: "X-Glean-Auth-Type", value: request.xGleanAuthType, schema: s.optional(s.string()) },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "json", value: request.body, schema: createCollectionRequestSchema },
      },
      {
        success: { kind: "json", schema: createCollectionResponse2Schema },
        errorFactory: Collections.CreatecollectionError,
      },
      options,
    );
  }

  /**
   * Delete Collection
   *
   * @remarks
   * Delete a Collection given the Collection's ID.
   *
   * @returns OK
   *
   * @throws {@link Collections.DeletecollectionError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link GleanClientApiError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deletecollection(
    request: Collections.DeletecollectionRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, Collections.DeletecollectionError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/rest/api/v1/deletecollection"),
        auth: this.#auth.apiToken,
        pathParams: [],
        query: [{ name: "locale", value: request.locale, schema: s.optional(s.string()) }],
        headers: [
          { name: "X-Glean-ActAs", value: request.xGleanActAs, schema: s.optional(s.string()) },
          { name: "X-Glean-Auth-Type", value: request.xGleanAuthType, schema: s.optional(s.string()) },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "json", value: request.body, schema: deleteCollectionRequestSchema },
      },
      {
        success: { kind: "empty" },
        errorFactory: Collections.DeletecollectionError,
      },
      options,
    );
  }

  /**
   * Delete Collection item
   *
   * @remarks
   * Delete a single item from a Collection.
   *
   * @returns OK
   *
   * @throws {@link Collections.DeletecollectionitemError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link GleanClientApiError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deletecollectionitem(
    request: Collections.DeletecollectionitemRequest,
    options?: RequestOptions,
  ): ApiPromise<DeleteCollectionItemResponse, Collections.DeletecollectionitemError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/rest/api/v1/deletecollectionitem"),
        auth: this.#auth.apiToken,
        pathParams: [],
        query: [{ name: "locale", value: request.locale, schema: s.optional(s.string()) }],
        headers: [
          { name: "X-Glean-ActAs", value: request.xGleanActAs, schema: s.optional(s.string()) },
          { name: "X-Glean-Auth-Type", value: request.xGleanAuthType, schema: s.optional(s.string()) },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "json", value: request.body, schema: deleteCollectionItemRequestSchema },
      },
      {
        success: { kind: "json", schema: deleteCollectionItemResponseSchema },
        errorFactory: Collections.DeletecollectionitemError,
      },
      options,
    );
  }

  /**
   * Update Collection
   *
   * @remarks
   * Update the properties of an existing Collection.
   *
   * @returns OK
   *
   * @throws {@link Collections.EditcollectionError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link GleanClientApiError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  editcollection(
    request: Collections.EditcollectionRequest,
    options?: RequestOptions,
  ): ApiPromise<EditCollectionResponse, Collections.EditcollectionError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/rest/api/v1/editcollection"),
        auth: this.#auth.apiToken,
        pathParams: [],
        query: [{ name: "locale", value: request.locale, schema: s.optional(s.string()) }],
        headers: [
          { name: "X-Glean-ActAs", value: request.xGleanActAs, schema: s.optional(s.string()) },
          { name: "X-Glean-Auth-Type", value: request.xGleanAuthType, schema: s.optional(s.string()) },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "json", value: request.body, schema: editCollectionRequestSchema },
      },
      {
        success: { kind: "json", schema: editCollectionResponseSchema },
        errorFactory: Collections.EditcollectionError,
      },
      options,
    );
  }

  /**
   * Update Collection item
   *
   * @remarks
   * Update the URL, Glean Document ID, description of an item within a Collection given its ID.
   *
   * @returns OK
   *
   * @throws {@link Collections.EditcollectionitemError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link GleanClientApiError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  editcollectionitem(
    request: Collections.EditcollectionitemRequest,
    options?: RequestOptions,
  ): ApiPromise<EditCollectionItemResponse, Collections.EditcollectionitemError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/rest/api/v1/editcollectionitem"),
        auth: this.#auth.apiToken,
        pathParams: [],
        query: [{ name: "locale", value: request.locale, schema: s.optional(s.string()) }],
        headers: [
          { name: "X-Glean-ActAs", value: request.xGleanActAs, schema: s.optional(s.string()) },
          { name: "X-Glean-Auth-Type", value: request.xGleanAuthType, schema: s.optional(s.string()) },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "json", value: request.body, schema: editCollectionItemRequestSchema },
      },
      {
        success: { kind: "json", schema: editCollectionItemResponseSchema },
        errorFactory: Collections.EditcollectionitemError,
      },
      options,
    );
  }

  /**
   * Read Collection
   *
   * @remarks
   * Read the details of a Collection given its ID. Does not fetch items in this Collection.
   *
   * @returns OK
   *
   * @throws {@link Collections.GetcollectionError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link GleanClientApiError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getcollection(
    request: Collections.GetcollectionRequest,
    options?: RequestOptions,
  ): ApiPromise<GetCollectionResponse, Collections.GetcollectionError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/rest/api/v1/getcollection"),
        auth: this.#auth.apiToken,
        pathParams: [],
        query: [{ name: "locale", value: request.locale, schema: s.optional(s.string()) }],
        headers: [
          { name: "X-Glean-ActAs", value: request.xGleanActAs, schema: s.optional(s.string()) },
          { name: "X-Glean-Auth-Type", value: request.xGleanAuthType, schema: s.optional(s.string()) },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "json", value: request.body, schema: getCollectionRequestSchema },
      },
      {
        success: { kind: "json", schema: getCollectionResponseSchema },
        errorFactory: Collections.GetcollectionError,
      },
      options,
    );
  }

  /**
   * List Collections
   *
   * @remarks
   * List all existing Collections.
   *
   * @returns OK
   *
   * @throws {@link Collections.ListcollectionsError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link GleanClientApiError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listcollections(
    request: Collections.ListcollectionsRequest,
    options?: RequestOptions,
  ): ApiPromise<ListCollectionsResponse, Collections.ListcollectionsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/rest/api/v1/listcollections"),
        auth: this.#auth.apiToken,
        pathParams: [],
        query: [{ name: "locale", value: request.locale, schema: s.optional(s.string()) }],
        headers: [
          { name: "X-Glean-ActAs", value: request.xGleanActAs, schema: s.optional(s.string()) },
          { name: "X-Glean-Auth-Type", value: request.xGleanAuthType, schema: s.optional(s.string()) },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "json", value: request.body, schema: listCollectionsRequestSchema },
      },
      {
        success: { kind: "json", schema: listCollectionsResponseSchema },
        errorFactory: Collections.ListcollectionsError,
      },
      options,
    );
  }
}

export namespace Collections {
  export type AddcollectionitemsRequest = {
    /**
     * The client's preferred locale in rfc5646 format (e.g. `en`, `ja`, `pt-BR`). If omitted, the
     * `Accept-Language` will be used. If not present or not supported, defaults to the closest
     * match or `en`.
     */
    locale?: string;
    /**
     * Email address of a user on whose behalf the request is intended to be made (should be
     * non-empty only for global tokens).
     */
    xGleanActAs?: string;
    /** Auth type being used to access the endpoint (should be non-empty only for global tokens). */
    xGleanAuthType?: string;
    /** Data describing the add operation. */
    body: AddCollectionItemsRequest;
  };

  export class AddcollectionitemsError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error401", undefined>
      | Declared<"error429", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<AddcollectionitemsError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 429, kind: "error429", decode: { kind: "empty" } },
    ];
  }

  export type CreatecollectionRequest = {
    /**
     * The client's preferred locale in rfc5646 format (e.g. `en`, `ja`, `pt-BR`). If omitted, the
     * `Accept-Language` will be used. If not present or not supported, defaults to the closest
     * match or `en`.
     */
    locale?: string;
    /**
     * Email address of a user on whose behalf the request is intended to be made (should be
     * non-empty only for global tokens).
     */
    xGleanActAs?: string;
    /** Auth type being used to access the endpoint (should be non-empty only for global tokens). */
    xGleanAuthType?: string;
    /** Collection content plus any additional metadata for the request. */
    body: CreateCollectionRequest;
  };

  export class CreatecollectionError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error401", undefined>
      | Declared<"collectionError", CollectionError>
      | Declared<"error429", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreatecollectionError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 422, kind: "collectionError", decode: { kind: "json", schema: collectionErrorSchema } },
      { on: 429, kind: "error429", decode: { kind: "empty" } },
    ];
  }

  export type DeletecollectionRequest = {
    /**
     * The client's preferred locale in rfc5646 format (e.g. `en`, `ja`, `pt-BR`). If omitted, the
     * `Accept-Language` will be used. If not present or not supported, defaults to the closest
     * match or `en`.
     */
    locale?: string;
    /**
     * Email address of a user on whose behalf the request is intended to be made (should be
     * non-empty only for global tokens).
     */
    xGleanActAs?: string;
    /** Auth type being used to access the endpoint (should be non-empty only for global tokens). */
    xGleanAuthType?: string;
    /** DeleteCollection request */
    body: DeleteCollectionRequest;
  };

  export class DeletecollectionError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error401", undefined>
      | Declared<"collectionError", CollectionError>
      | Declared<"error429", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<DeletecollectionError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 422, kind: "collectionError", decode: { kind: "json", schema: collectionErrorSchema } },
      { on: 429, kind: "error429", decode: { kind: "empty" } },
    ];
  }

  export type DeletecollectionitemRequest = {
    /**
     * The client's preferred locale in rfc5646 format (e.g. `en`, `ja`, `pt-BR`). If omitted, the
     * `Accept-Language` will be used. If not present or not supported, defaults to the closest
     * match or `en`.
     */
    locale?: string;
    /**
     * Email address of a user on whose behalf the request is intended to be made (should be
     * non-empty only for global tokens).
     */
    xGleanActAs?: string;
    /** Auth type being used to access the endpoint (should be non-empty only for global tokens). */
    xGleanAuthType?: string;
    /** Data describing the delete operation. */
    body: DeleteCollectionItemRequest;
  };

  export class DeletecollectionitemError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error401", undefined>
      | Declared<"error422", undefined>
      | Declared<"error429", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<DeletecollectionitemError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 422, kind: "error422", decode: { kind: "empty" } },
      { on: 429, kind: "error429", decode: { kind: "empty" } },
    ];
  }

  export type EditcollectionRequest = {
    /**
     * The client's preferred locale in rfc5646 format (e.g. `en`, `ja`, `pt-BR`). If omitted, the
     * `Accept-Language` will be used. If not present or not supported, defaults to the closest
     * match or `en`.
     */
    locale?: string;
    /**
     * Email address of a user on whose behalf the request is intended to be made (should be
     * non-empty only for global tokens).
     */
    xGleanActAs?: string;
    /** Auth type being used to access the endpoint (should be non-empty only for global tokens). */
    xGleanAuthType?: string;
    /** Collection content plus any additional metadata for the request. */
    body: EditCollectionRequest;
  };

  export class EditcollectionError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error401", undefined>
      | Declared<"collectionError", CollectionError>
      | Declared<"error429", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<EditcollectionError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 422, kind: "collectionError", decode: { kind: "json", schema: collectionErrorSchema } },
      { on: 429, kind: "error429", decode: { kind: "empty" } },
    ];
  }

  export type EditcollectionitemRequest = {
    /**
     * The client's preferred locale in rfc5646 format (e.g. `en`, `ja`, `pt-BR`). If omitted, the
     * `Accept-Language` will be used. If not present or not supported, defaults to the closest
     * match or `en`.
     */
    locale?: string;
    /**
     * Email address of a user on whose behalf the request is intended to be made (should be
     * non-empty only for global tokens).
     */
    xGleanActAs?: string;
    /** Auth type being used to access the endpoint (should be non-empty only for global tokens). */
    xGleanAuthType?: string;
    /** Edit Collection Items request */
    body: EditCollectionItemRequest;
  };

  export class EditcollectionitemError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error401", undefined>
      | Declared<"error429", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<EditcollectionitemError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 429, kind: "error429", decode: { kind: "empty" } },
    ];
  }

  export type GetcollectionRequest = {
    /**
     * The client's preferred locale in rfc5646 format (e.g. `en`, `ja`, `pt-BR`). If omitted, the
     * `Accept-Language` will be used. If not present or not supported, defaults to the closest
     * match or `en`.
     */
    locale?: string;
    /**
     * Email address of a user on whose behalf the request is intended to be made (should be
     * non-empty only for global tokens).
     */
    xGleanActAs?: string;
    /** Auth type being used to access the endpoint (should be non-empty only for global tokens). */
    xGleanAuthType?: string;
    /** GetCollection request */
    body: GetCollectionRequest;
  };

  export class GetcollectionError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error401", undefined>
      | Declared<"error429", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetcollectionError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 429, kind: "error429", decode: { kind: "empty" } },
    ];
  }

  export type ListcollectionsRequest = {
    /**
     * The client's preferred locale in rfc5646 format (e.g. `en`, `ja`, `pt-BR`). If omitted, the
     * `Accept-Language` will be used. If not present or not supported, defaults to the closest
     * match or `en`.
     */
    locale?: string;
    /**
     * Email address of a user on whose behalf the request is intended to be made (should be
     * non-empty only for global tokens).
     */
    xGleanActAs?: string;
    /** Auth type being used to access the endpoint (should be non-empty only for global tokens). */
    xGleanAuthType?: string;
    /** ListCollections request */
    body: ListCollectionsRequest;
  };

  export class ListcollectionsError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error401", undefined>
      | Declared<"error429", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListcollectionsError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 429, kind: "error429", decode: { kind: "empty" } },
    ];
  }
}
