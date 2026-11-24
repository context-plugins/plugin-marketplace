import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  attributeResourceTypeDtoSchema,
  type AttributeResourceTypeDto,
} from "../models/attribute-resource-type-dto.js";
import { errorResponseSchema, type ErrorResponse } from "../models/error-response.js";
import {
  publicApiCreateAttributeRequestDtoSchema,
  type PublicApiCreateAttributeRequestDto,
} from "../models/public-api-create-attribute-request-dto.js";
import {
  publicApiCreateAttributeResponseSchema,
  type PublicApiCreateAttributeResponse,
} from "../models/public-api-create-attribute-response.js";
import {
  publicApiDeleteAttributeResponseSchema,
  type PublicApiDeleteAttributeResponse,
} from "../models/public-api-delete-attribute-response.js";
import {
  publicApiListAttributesResponseSchema,
  type PublicApiListAttributesResponse,
} from "../models/public-api-list-attributes-response.js";
import {
  publicApiUpdateAttributeRequestDtoSchema,
  type PublicApiUpdateAttributeRequestDto,
} from "../models/public-api-update-attribute-request-dto.js";
import {
  publicApiUpdateAttributeResponseSchema,
  type PublicApiUpdateAttributeResponse,
} from "../models/public-api-update-attribute-response.js";
import type { Servers } from "../servers.js";

/**
 * Soda Cloud API Attribute Endpoints
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
   * Delete an attribute
   *
   * @remarks
   * This endpoint enables you to delete an existing attribute from your organization's Soda Cloud
   * account.
   *
   * The attribute will be removed from any resources where it is set.
   *
   * ## Authentication
   *
   * User authentication required: `true`
   *
   * This endpoint accepts authentication via API keys in the `Basic` authentication header, or a
   * pre-authenticated token in HTTP cookie `token`. Cookie sessions extend automatically on each
   * request.
   *
   * ## Authorization
   *
   * Users must have global role permission MANAGE_ATTRIBUTES to execute this call.
   *
   * ## Tags
   *
   * `Attributes`
   *
   * ## Rate limiting
   *
   * 100 requests/60 seconds
   *
   * @returns Successful response
   *
   * @throws {@link Attributes.DeleteApiV1AttributesAttributeIdError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link SodaError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteApiV1AttributesAttributeId(
    request: Attributes.DeleteApiV1AttributesAttributeIdRequest,
    options?: RequestOptions,
  ): ApiPromise<PublicApiDeleteAttributeResponse, Attributes.DeleteApiV1AttributesAttributeIdError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/api/v1/attributes/{attributeId}"),
        auth: anyAuth(this.#auth.basicAuthApiKey, this.#auth.cookieToken),
        pathParams: [{ name: "attributeId", value: request.attributeId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: publicApiDeleteAttributeResponseSchema },
        errorFactory: Attributes.DeleteApiV1AttributesAttributeIdError,
      },
      options,
    );
  }

  /**
   * List attributes
   *
   * @remarks
   * This endpoint enables you to list the attributes available in your organization's Soda Cloud
   * account.
   *
   * Optionally filter by resource type using the `resourceType` query parameter.
   *
   * This GET is a paginated API that uses the following parameters to request specific details:
   *
   * - `size`: Supply an integer value between 10 and 1000, inclusive. The default value is 1000.
   *
   * - `page`: Supply an integer value. The default value is 0.
   *
   * - `resourceType`: Optional. Filter by resource type (`dataset`, `check`, or `column`).
   *
   * ## Authentication
   *
   * User authentication required: `true`
   *
   * This endpoint accepts authentication via API keys in the `Basic` authentication header, or a
   * pre-authenticated token in HTTP cookie `token`. Cookie sessions extend automatically on each
   * request.
   *
   * ## Authorization
   *
   * Any Soda Cloud user in your organization may execute this query.
   *
   * ## Tags
   *
   * `Attributes`
   *
   * ## Rate limiting
   *
   * 60 requests/60 seconds
   *
   * @returns Successful response
   *
   * @throws {@link Attributes.GetApiV1AttributesError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link SodaError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getApiV1Attributes(
    request: Attributes.GetApiV1AttributesRequest = {},
    options?: RequestOptions,
  ): ApiPromise<PublicApiListAttributesResponse, Attributes.GetApiV1AttributesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/attributes"),
        auth: anyAuth(this.#auth.basicAuthApiKey, this.#auth.cookieToken),
        pathParams: [],
        query: [
          { name: "page", value: request.page, schema: s.optional(s.int()) },
          {
            name: "resourceType",
            value: request.resourceType,
            schema: s.optional(s.lazy(() => attributeResourceTypeDtoSchema)),
          },
          { name: "size", value: request.size, schema: s.optional(s.int()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: publicApiListAttributesResponseSchema },
        errorFactory: Attributes.GetApiV1AttributesError,
      },
      options,
    );
  }

  /**
   * Create an attribute
   *
   * @remarks
   * This endpoint enables you to create a new attribute in your organization's Soda Cloud account.
   *
   * Attributes are scoped to a resource type (dataset, check, or column). Once an attribute is
   * created, it can be set on the associated resource type. Attributes can be used to configure
   * notification rules, dashboards, filters, etc. For example sending email alerts when checks
   * marked as critical fail.
   *
   * ## Authentication
   *
   * User authentication required: `true`
   *
   * This endpoint accepts authentication via API keys in the `Basic` authentication header, or a
   * pre-authenticated token in HTTP cookie `token`. Cookie sessions extend automatically on each
   * request.
   *
   * ## Authorization
   *
   * Users must have global role permission MANAGE_ATTRIBUTES to execute this call.
   *
   * ## Tags
   *
   * `Attributes`
   *
   * ## Rate limiting
   *
   * 100 requests/60 seconds
   *
   * @returns Successful response
   *
   * @throws {@link Attributes.PostApiV1AttributesError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link SodaError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  postApiV1Attributes(
    request: Attributes.PostApiV1AttributesRequest,
    options?: RequestOptions,
  ): ApiPromise<PublicApiCreateAttributeResponse, Attributes.PostApiV1AttributesError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v1/attributes"),
        auth: anyAuth(this.#auth.basicAuthApiKey, this.#auth.cookieToken),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: publicApiCreateAttributeRequestDtoSchema },
      },
      {
        success: { kind: "json", schema: publicApiCreateAttributeResponseSchema },
        errorFactory: Attributes.PostApiV1AttributesError,
      },
      options,
    );
  }

  /**
   * Update an attribute
   *
   * @remarks
   * This endpoint enables you to update an existing attribute in your organization's Soda Cloud
   * account.
   *
   * Only label, description, and allowedValues (for select types) can be updated.
   *
   * When updating allowedValues, existing attribute values on resources are left in place, even if
   * they are no longer in the allowed set.
   *
   * ## Authentication
   *
   * User authentication required: `true`
   *
   * This endpoint accepts authentication via API keys in the `Basic` authentication header, or a
   * pre-authenticated token in HTTP cookie `token`. Cookie sessions extend automatically on each
   * request.
   *
   * ## Authorization
   *
   * Users must have global role permission MANAGE_ATTRIBUTES to execute this call.
   *
   * ## Tags
   *
   * `Attributes`
   *
   * ## Rate limiting
   *
   * 100 requests/60 seconds
   *
   * @returns Successful response
   *
   * @throws {@link Attributes.PostApiV1AttributesAttributeIdError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link SodaError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  postApiV1AttributesAttributeId(
    request: Attributes.PostApiV1AttributesAttributeIdRequest,
    options?: RequestOptions,
  ): ApiPromise<PublicApiUpdateAttributeResponse, Attributes.PostApiV1AttributesAttributeIdError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v1/attributes/{attributeId}"),
        auth: anyAuth(this.#auth.basicAuthApiKey, this.#auth.cookieToken),
        pathParams: [{ name: "attributeId", value: request.attributeId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: publicApiUpdateAttributeRequestDtoSchema },
      },
      {
        success: { kind: "json", schema: publicApiUpdateAttributeResponseSchema },
        errorFactory: Attributes.PostApiV1AttributesAttributeIdError,
      },
      options,
    );
  }
}

export namespace Attributes {
  export type DeleteApiV1AttributesAttributeIdRequest = {
    attributeId: string;
  };

  export class DeleteApiV1AttributesAttributeIdError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Declared<"errorResponse5", ErrorResponse>
      | Declared<"errorResponse6", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<DeleteApiV1AttributesAttributeIdError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 429, kind: "errorResponse5", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse6", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type GetApiV1AttributesRequest = {
    page?: number;
    resourceType?: AttributeResourceTypeDto;
    size?: number;
  };

  export class GetApiV1AttributesError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Declared<"errorResponse5", ErrorResponse>
      | Declared<"errorResponse6", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetApiV1AttributesError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 429, kind: "errorResponse5", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse6", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type PostApiV1AttributesRequest = {
    body: PublicApiCreateAttributeRequestDto;
  };

  export class PostApiV1AttributesError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Declared<"errorResponse5", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<PostApiV1AttributesError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 429, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse5", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type PostApiV1AttributesAttributeIdRequest = {
    attributeId: string;
    body: PublicApiUpdateAttributeRequestDto;
  };

  export class PostApiV1AttributesAttributeIdError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Declared<"errorResponse5", ErrorResponse>
      | Declared<"errorResponse6", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<PostApiV1AttributesAttributeIdError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 429, kind: "errorResponse5", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse6", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }
}
