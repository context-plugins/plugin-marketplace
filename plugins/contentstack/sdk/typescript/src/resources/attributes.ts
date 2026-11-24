import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { attributeListSchema, type AttributeList } from "../models/attribute-list.js";
import { attributeSchema, type Attribute } from "../models/attribute.js";
import {
  createAttributeRequestSchema,
  type CreateAttributeRequest,
} from "../models/create-attribute-request.js";
import {
  errorContentstackPersonalizeManagementAttributesApiSchema,
  type ErrorContentstackPersonalizeManagementAttributesApi,
} from "../models/error-contentstack-personalize-management-attributes-api.js";
import type { Servers } from "../servers.js";

/**
 * Attributes represent individual user data characteristics such as age, location, or browsing
 * history used to define audience segments.
 */
export class Attributes {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Create an attribute
   *
   * @remarks
   * Creates a new user attribute definition in the Personalize project. Attributes can be of
   * various types including string, number, boolean, and date, and are used to build audience
   * segment rules.
   *
   * @returns The newly created attribute.
   *
   * @throws {@link Attributes.CreateAttributeError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link ContentstackError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createAttribute(
    request: Attributes.CreateAttributeRequestParams,
    options?: RequestOptions,
  ): ApiPromise<Attribute, Attributes.CreateAttributeError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.defaultContentstackPersonalizeManagementAttributesApi("/attributes"),
        auth: anyAuth(this.#auth.bearerAuth, this.#auth.authtokenAuth),
        pathParams: [],
        query: [],
        headers: [
          { name: "x-project-uid", value: request.xProjectUid, schema: s.string() },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "json", value: request.body, schema: createAttributeRequestSchema },
      },
      {
        success: { kind: "json", schema: attributeSchema },
        errorFactory: Attributes.CreateAttributeError,
      },
      options,
    );
  }

  /**
   * Delete an attribute
   *
   * @remarks
   * Permanently deletes an attribute from the Personalize project. Attributes referenced in
   * audience rules cannot be deleted until those references are removed.
   *
   * @returns Attribute deleted successfully.
   *
   * @throws {@link Attributes.DeleteAttributeError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link ContentstackError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteAttribute(
    request: Attributes.DeleteAttributeRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, Attributes.DeleteAttributeError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.defaultContentstackPersonalizeManagementAttributesApi("/attributes/{id}"),
        auth: anyAuth(this.#auth.bearerAuth, this.#auth.authtokenAuth),
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [
          { name: "x-project-uid", value: request.xProjectUid, schema: s.string() },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: Attributes.DeleteAttributeError,
      },
      options,
    );
  }

  /**
   * Get all attributes
   *
   * @remarks
   * Retrieves all user attribute definitions configured in the Personalize project. Attributes are
   * used to build audience segment rules.
   *
   * @returns A list of all attributes in the project.
   *
   * @throws {@link Attributes.GetAllAttributesError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link ContentstackError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getAllAttributes(
    request: Attributes.GetAllAttributesRequest,
    options?: RequestOptions,
  ): ApiPromise<AttributeList, Attributes.GetAllAttributesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.defaultContentstackPersonalizeManagementAttributesApi("/attributes"),
        auth: anyAuth(this.#auth.bearerAuth, this.#auth.authtokenAuth),
        pathParams: [],
        query: [],
        headers: [{ name: "x-project-uid", value: request.xProjectUid, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: attributeListSchema },
        errorFactory: Attributes.GetAllAttributesError,
      },
      options,
    );
  }

  /**
   * Update an attribute
   *
   * @remarks
   * Updates the configuration of an existing attribute in the Personalize project including its
   * name, key, and data type.
   *
   * @returns The updated attribute.
   *
   * @throws {@link Attributes.UpdateAttributeError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link ContentstackError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateAttribute(
    request: Attributes.UpdateAttributeRequest,
    options?: RequestOptions,
  ): ApiPromise<Attribute, Attributes.UpdateAttributeError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.defaultContentstackPersonalizeManagementAttributesApi("/attributes/{id}"),
        auth: anyAuth(this.#auth.bearerAuth, this.#auth.authtokenAuth),
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [
          { name: "x-project-uid", value: request.xProjectUid, schema: s.string() },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "json", value: request.body, schema: createAttributeRequestSchema },
      },
      {
        success: { kind: "json", schema: attributeSchema },
        errorFactory: Attributes.UpdateAttributeError,
      },
      options,
    );
  }
}

export namespace Attributes {
  export type CreateAttributeRequestParams = {
    /** The UID of the Contentstack Personalize project. */
    xProjectUid: string;
    body: CreateAttributeRequest;
  };

  export class CreateAttributeError extends ApiError {
    declare readonly payload:
      | Declared<
          "errorContentstackPersonalizeManagementAttributesApi",
          ErrorContentstackPersonalizeManagementAttributesApi
        >
      | Declared<
          "errorContentstackPersonalizeManagementAttributesApi2",
          ErrorContentstackPersonalizeManagementAttributesApi
        >
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateAttributeError> = [
      {
        on: 400,
        kind: "errorContentstackPersonalizeManagementAttributesApi",
        decode: { kind: "json", schema: errorContentstackPersonalizeManagementAttributesApiSchema },
      },
      {
        on: 401,
        kind: "errorContentstackPersonalizeManagementAttributesApi2",
        decode: { kind: "json", schema: errorContentstackPersonalizeManagementAttributesApiSchema },
      },
    ];
  }

  export type DeleteAttributeRequest = {
    /** The unique identifier of the attribute. */
    id: string;
    /** The UID of the Contentstack Personalize project. */
    xProjectUid: string;
  };

  export class DeleteAttributeError extends ApiError {
    declare readonly payload:
      | Declared<
          "errorContentstackPersonalizeManagementAttributesApi",
          ErrorContentstackPersonalizeManagementAttributesApi
        >
      | Declared<
          "errorContentstackPersonalizeManagementAttributesApi2",
          ErrorContentstackPersonalizeManagementAttributesApi
        >
      | Undeclared;

    static readonly errors: ErrorDecoders<DeleteAttributeError> = [
      {
        on: 401,
        kind: "errorContentstackPersonalizeManagementAttributesApi",
        decode: { kind: "json", schema: errorContentstackPersonalizeManagementAttributesApiSchema },
      },
      {
        on: 404,
        kind: "errorContentstackPersonalizeManagementAttributesApi2",
        decode: { kind: "json", schema: errorContentstackPersonalizeManagementAttributesApiSchema },
      },
    ];
  }

  export type GetAllAttributesRequest = {
    /** The UID of the Contentstack Personalize project. */
    xProjectUid: string;
  };

  export class GetAllAttributesError extends ApiError {
    declare readonly payload:
      | Declared<
          "errorContentstackPersonalizeManagementAttributesApi",
          ErrorContentstackPersonalizeManagementAttributesApi
        >
      | Undeclared;

    static readonly errors: ErrorDecoders<GetAllAttributesError> = [
      {
        on: 401,
        kind: "errorContentstackPersonalizeManagementAttributesApi",
        decode: { kind: "json", schema: errorContentstackPersonalizeManagementAttributesApiSchema },
      },
    ];
  }

  export type UpdateAttributeRequest = {
    /** The unique identifier of the attribute. */
    id: string;
    /** The UID of the Contentstack Personalize project. */
    xProjectUid: string;
    body: CreateAttributeRequest;
  };

  export class UpdateAttributeError extends ApiError {
    declare readonly payload:
      | Declared<
          "errorContentstackPersonalizeManagementAttributesApi",
          ErrorContentstackPersonalizeManagementAttributesApi
        >
      | Declared<
          "errorContentstackPersonalizeManagementAttributesApi2",
          ErrorContentstackPersonalizeManagementAttributesApi
        >
      | Declared<
          "errorContentstackPersonalizeManagementAttributesApi3",
          ErrorContentstackPersonalizeManagementAttributesApi
        >
      | Undeclared;

    static readonly errors: ErrorDecoders<UpdateAttributeError> = [
      {
        on: 400,
        kind: "errorContentstackPersonalizeManagementAttributesApi",
        decode: { kind: "json", schema: errorContentstackPersonalizeManagementAttributesApiSchema },
      },
      {
        on: 401,
        kind: "errorContentstackPersonalizeManagementAttributesApi2",
        decode: { kind: "json", schema: errorContentstackPersonalizeManagementAttributesApiSchema },
      },
      {
        on: 404,
        kind: "errorContentstackPersonalizeManagementAttributesApi3",
        decode: { kind: "json", schema: errorContentstackPersonalizeManagementAttributesApiSchema },
      },
    ];
  }
}
