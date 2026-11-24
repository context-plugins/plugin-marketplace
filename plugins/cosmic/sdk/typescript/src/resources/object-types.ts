import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { errorInternalSchema, type Error } from "../models/error.js";
import { messageResponseSchema, type MessageResponse } from "../models/message-response.js";
import { objectTypeCreateSchema, type ObjectTypeCreate } from "../models/object-type-create.js";
import {
  objectTypeListResponseSchema,
  type ObjectTypeListResponse,
} from "../models/object-type-list-response.js";
import { objectTypeResponseSchema, type ObjectTypeResponse } from "../models/object-type-response.js";
import { objectTypeUpdateSchema, type ObjectTypeUpdate } from "../models/object-type-update.js";
import type { Servers } from "../servers.js";

/**
 * Object types define the content model: the Metafields, localization settings, and display options
 * shared by every Object in the type.
 */
export class ObjectTypes {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Create an Object type
   *
   * @remarks
   * Create a new Object type, defining the content model that its Objects will follow. Only `title`
   * is required; the `slug` is derived from the title when omitted. Define `metafields` here so
   * that Objects created in this type can carry the corresponding `metadata` values.
   *
   * @returns The created Object type.
   *
   * @throws {@link ObjectTypes.CreateObjectTypeError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link CosmicError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createObjectType(
    request: ObjectTypes.CreateObjectTypeRequest,
    options?: RequestOptions,
  ): ApiPromise<ObjectTypeResponse, ObjectTypes.CreateObjectTypeError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/buckets/{slug}/object-types"),
        auth: this.#auth.writeKey,
        pathParams: [{ name: "slug", value: request.slug, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: objectTypeCreateSchema },
      },
      {
        success: { kind: "json", schema: objectTypeResponseSchema },
        errorFactory: ObjectTypes.CreateObjectTypeError,
      },
      options,
    );
  }

  /**
   * Delete an Object type
   *
   * @remarks
   * Delete an Object type and every Object in it. This is destructive and not reversible through
   * the API: confirm with the user before calling it.
   *
   * @returns The Object type was deleted.
   *
   * @throws {@link ObjectTypes.DeleteObjectTypeError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link CosmicError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteObjectType(
    request: ObjectTypes.DeleteObjectTypeRequest,
    options?: RequestOptions,
  ): ApiPromise<MessageResponse, ObjectTypes.DeleteObjectTypeError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/buckets/{slug}/object-types/{type_slug}"),
        auth: this.#auth.writeKey,
        pathParams: [
          { name: "slug", value: request.slug, schema: s.string() },
          { name: "type_slug", value: request.typeSlug, schema: s.string() },
        ],
        query: [
          { name: "trigger_webhook", value: request.triggerWebhook, schema: s.defaulted(s.boolean(), false) },
        ],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: messageResponseSchema },
        errorFactory: ObjectTypes.DeleteObjectTypeError,
      },
      options,
    );
  }

  /**
   * Get an Object type
   *
   * @remarks
   * Retrieve a single Object type by its slug, including the full Metafield model. Use this when
   * you already know the type and want its field definitions without listing every type in the
   * Bucket.
   *
   * @returns The requested Object type.
   *
   * @throws {@link ObjectTypes.GetObjectTypeError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link CosmicError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getObjectType(
    request: ObjectTypes.GetObjectTypeRequest,
    options?: RequestOptions,
  ): ApiPromise<ObjectTypeResponse, ObjectTypes.GetObjectTypeError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/buckets/{slug}/object-types/{type_slug}"),
        auth: this.#auth.readKey,
        pathParams: [
          { name: "slug", value: request.slug, schema: s.string() },
          { name: "type_slug", value: request.typeSlug, schema: s.string() },
        ],
        query: [
          { name: "read_key", value: request.readKey, schema: s.optional(s.string()) },
          { name: "pretty", value: request.pretty, schema: s.defaulted(s.boolean(), false) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: objectTypeResponseSchema },
        errorFactory: ObjectTypes.GetObjectTypeError,
      },
      options,
    );
  }

  /**
   * List Object types
   *
   * @remarks
   * Retrieve every Object type in the Bucket, each with its full Metafield model. Use this to
   * discover the content model before creating or querying Objects: the `slug` of each type is what
   * you pass as `type` in Object queries, and the `metafields` array tells you which `metadata`
   * keys an Object of that type accepts.
   *
   * @returns The Object types in the Bucket.
   *
   * @throws {@link ObjectTypes.ListObjectTypesError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link CosmicError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listObjectTypes(
    request: ObjectTypes.ListObjectTypesRequest,
    options?: RequestOptions,
  ): ApiPromise<ObjectTypeListResponse, ObjectTypes.ListObjectTypesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/buckets/{slug}/object-types"),
        auth: this.#auth.readKey,
        pathParams: [{ name: "slug", value: request.slug, schema: s.string() }],
        query: [
          { name: "read_key", value: request.readKey, schema: s.optional(s.string()) },
          { name: "pretty", value: request.pretty, schema: s.defaulted(s.boolean(), false) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: objectTypeListResponseSchema },
        errorFactory: ObjectTypes.ListObjectTypesError,
      },
      options,
    );
  }

  /**
   * Update an Object type
   *
   * @remarks
   * Update an Object type in place. Only the properties you send are changed. Sending `metafields`
   * replaces the whole array, so read the type first and send the complete list rather than only
   * the field you want to alter.
   *
   * @returns The updated Object type.
   *
   * @throws {@link ObjectTypes.UpdateObjectTypeError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link CosmicError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateObjectType(
    request: ObjectTypes.UpdateObjectTypeRequest,
    options?: RequestOptions,
  ): ApiPromise<ObjectTypeResponse, ObjectTypes.UpdateObjectTypeError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default("/buckets/{slug}/object-types/{type_slug}"),
        auth: this.#auth.writeKey,
        pathParams: [
          { name: "slug", value: request.slug, schema: s.string() },
          { name: "type_slug", value: request.typeSlug, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: objectTypeUpdateSchema },
      },
      {
        success: { kind: "json", schema: objectTypeResponseSchema },
        errorFactory: ObjectTypes.UpdateObjectTypeError,
      },
      options,
    );
  }
}

export namespace ObjectTypes {
  export type CreateObjectTypeRequest = {
    /** The Bucket slug. Found under Bucket > Settings in the dashboard. */
    slug: string;
    body: ObjectTypeCreate;
  };

  export class CreateObjectTypeError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Declared<"error6", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateObjectTypeError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 402, kind: "error3", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 404, kind: "error4", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 429, kind: "error5", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 500, kind: "error6", decode: { kind: "json", schema: errorInternalSchema } },
    ];
  }

  export type DeleteObjectTypeRequest = {
    /** The Bucket slug. Found under Bucket > Settings in the dashboard. */
    slug: string;
    /** The Object type slug, unique within the Bucket. */
    typeSlug: string;
    /** Set to `true` to fire the corresponding webhook for this action. @default false */
    triggerWebhook?: boolean;
  };

  export class DeleteObjectTypeError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<DeleteObjectTypeError> = [
      { on: 401, kind: "error", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 402, kind: "error2", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 404, kind: "error3", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 429, kind: "error4", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 500, kind: "error5", decode: { kind: "json", schema: errorInternalSchema } },
    ];
  }

  export type GetObjectTypeRequest = {
    /** The Bucket slug. Found under Bucket > Settings in the dashboard. */
    slug: string;
    /** The Object type slug, unique within the Bucket. */
    typeSlug: string;
    /** The Bucket read key. Required unless the Bucket has no read key configured. */
    readKey?: string;
    /**
     * Set to `true` to indent the JSON response for human reading. Increases response size.
     *
     * @default false
     */
    pretty?: boolean;
  };

  export class GetObjectTypeError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetObjectTypeError> = [
      { on: 401, kind: "error", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 402, kind: "error2", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 404, kind: "error3", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 429, kind: "error4", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 500, kind: "error5", decode: { kind: "json", schema: errorInternalSchema } },
    ];
  }

  export type ListObjectTypesRequest = {
    /** The Bucket slug. Found under Bucket > Settings in the dashboard. */
    slug: string;
    /** The Bucket read key. Required unless the Bucket has no read key configured. */
    readKey?: string;
    /**
     * Set to `true` to indent the JSON response for human reading. Increases response size.
     *
     * @default false
     */
    pretty?: boolean;
  };

  export class ListObjectTypesError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListObjectTypesError> = [
      { on: 401, kind: "error", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 402, kind: "error2", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 404, kind: "error3", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 429, kind: "error4", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 500, kind: "error5", decode: { kind: "json", schema: errorInternalSchema } },
    ];
  }

  export type UpdateObjectTypeRequest = {
    /** The Bucket slug. Found under Bucket > Settings in the dashboard. */
    slug: string;
    /** The Object type slug, unique within the Bucket. */
    typeSlug: string;
    body: ObjectTypeUpdate;
  };

  export class UpdateObjectTypeError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Declared<"error6", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<UpdateObjectTypeError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 402, kind: "error3", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 404, kind: "error4", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 429, kind: "error5", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 500, kind: "error6", decode: { kind: "json", schema: errorInternalSchema } },
    ];
  }
}
