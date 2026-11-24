import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { noneAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  badRequestErrorResponseSchema,
  type BadRequestErrorResponse,
} from "../models/bad-request-error-response.js";
import {
  conflictErrorResponseSchema,
  type ConflictErrorResponse,
} from "../models/conflict-error-response.js";
import {
  createCustomPropertyDtoInternalSchema,
  type CreateCustomPropertyDto,
} from "../models/create-custom-property-dto.js";
import { customPropertyInternalSchema, type CustomProperty } from "../models/custom-property.js";
import { SortBy, sortBySchema } from "../models/sort-by.js";
import { SortOrder, sortOrderSchema } from "../models/sort-order.js";
import { type3Schema, type Type3 } from "../models/type3.js";
import {
  updateCustomPropertyDtoInternalSchema,
  type UpdateCustomPropertyDto,
} from "../models/update-custom-property-dto.js";
import type { Servers } from "../servers.js";

export class CustomProperties {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;

  constructor(rawClient: RawClient, servers: Servers) {
    this.#rawClient = rawClient;
    this.#servers = servers;
  }

  /**
   * Create Custom Property
   *
   * @remarks
   * Create a new Custom Property
   *
   * @throws {@link CustomProperties.CustomPropertiesControllerCreateError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link DevCycleError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  customPropertiesControllerCreate(
    request: CustomProperties.CustomPropertiesControllerCreateRequest,
    options?: RequestOptions,
  ): ApiPromise<CustomProperty, CustomProperties.CustomPropertiesControllerCreateError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v1/projects/{project}/customProperties"),
        auth: noneAuth,
        pathParams: [{ name: "project", value: request.project, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: createCustomPropertyDtoInternalSchema },
      },
      {
        success: { kind: "json", schema: customPropertyInternalSchema },
        errorFactory: CustomProperties.CustomPropertiesControllerCreateError,
      },
      options,
    );
  }

  /**
   * List Custom Properties
   *
   * @throws {@link CustomProperties.CustomPropertiesControllerFindAllError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link DevCycleError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  customPropertiesControllerFindAll(
    request: CustomProperties.CustomPropertiesControllerFindAllRequest,
    options?: RequestOptions,
  ): ApiPromise<CustomProperty[], CustomProperties.CustomPropertiesControllerFindAllError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/projects/{project}/customProperties"),
        auth: noneAuth,
        pathParams: [{ name: "project", value: request.project, schema: s.string() }],
        query: [
          { name: "page", value: request.page, schema: s.defaulted(s.float64(), 1) },
          { name: "perPage", value: request.perPage, schema: s.defaulted(s.float64(), 100) },
          { name: "sortBy", value: request.sortBy, schema: s.defaulted(sortBySchema, SortBy.CreatedAt) },
          {
            name: "sortOrder",
            value: request.sortOrder,
            schema: s.defaulted(sortOrderSchema, SortOrder.Desc),
          },
          { name: "search", value: request.search, schema: s.optional(s.string()) },
          { name: "type", value: request.type, schema: s.optional(s.lazy(() => type3Schema)) },
          { name: "includeUsage", value: request.includeUsage, schema: s.optional(s.boolean()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => customPropertyInternalSchema)) },
        errorFactory: CustomProperties.CustomPropertiesControllerFindAllError,
      },
      options,
    );
  }

  /**
   * Get a Custom Property
   *
   * @remarks
   * Get a Custom Property by ID or key
   *
   * @throws {@link CustomProperties.CustomPropertiesControllerFindOneError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link DevCycleError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  customPropertiesControllerFindOne(
    request: CustomProperties.CustomPropertiesControllerFindOneRequest,
    options?: RequestOptions,
  ): ApiPromise<CustomProperty, CustomProperties.CustomPropertiesControllerFindOneError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/projects/{project}/customProperties/{key}"),
        auth: noneAuth,
        pathParams: [
          { name: "key", value: request.key, schema: s.string() },
          { name: "project", value: request.project, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: customPropertyInternalSchema },
        errorFactory: CustomProperties.CustomPropertiesControllerFindOneError,
      },
      options,
    );
  }

  /**
   * Delete a Custom Property
   *
   * @remarks
   * Delete an Custom Property by ID or key
   *
   * @throws {@link CustomProperties.CustomPropertiesControllerRemoveError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link DevCycleError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  customPropertiesControllerRemove(
    request: CustomProperties.CustomPropertiesControllerRemoveRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, CustomProperties.CustomPropertiesControllerRemoveError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/v1/projects/{project}/customProperties/{key}"),
        auth: noneAuth,
        pathParams: [
          { name: "key", value: request.key, schema: s.string() },
          { name: "project", value: request.project, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: CustomProperties.CustomPropertiesControllerRemoveError,
      },
      options,
    );
  }

  /**
   * Update a Custom Property
   *
   * @remarks
   * Update an Custom Property by ID or key
   *
   * @throws {@link CustomProperties.CustomPropertiesControllerUpdateError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link DevCycleError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  customPropertiesControllerUpdate(
    request: CustomProperties.CustomPropertiesControllerUpdateRequest,
    options?: RequestOptions,
  ): ApiPromise<CustomProperty, CustomProperties.CustomPropertiesControllerUpdateError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default("/v1/projects/{project}/customProperties/{key}"),
        auth: noneAuth,
        pathParams: [
          { name: "key", value: request.key, schema: s.string() },
          { name: "project", value: request.project, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: updateCustomPropertyDtoInternalSchema },
      },
      {
        success: { kind: "json", schema: customPropertyInternalSchema },
        errorFactory: CustomProperties.CustomPropertiesControllerUpdateError,
      },
      options,
    );
  }
}

export namespace CustomProperties {
  export type CustomPropertiesControllerCreateRequest = {
    /** A Project key or ID */
    project: string;
    body: CreateCustomPropertyDto;
  };

  export class CustomPropertiesControllerCreateError extends ApiError {
    declare readonly payload:
      | Declared<"badRequestErrorResponse", BadRequestErrorResponse>
      | Declared<"error401", undefined>
      | Declared<"error403", undefined>
      | Declared<"error404", undefined>
      | Declared<"conflictErrorResponse", ConflictErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<CustomPropertiesControllerCreateError> = [
      {
        on: 400,
        kind: "badRequestErrorResponse",
        decode: { kind: "json", schema: badRequestErrorResponseSchema },
      },
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 403, kind: "error403", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      {
        on: 409,
        kind: "conflictErrorResponse",
        decode: { kind: "json", schema: conflictErrorResponseSchema },
      },
    ];
  }

  export type CustomPropertiesControllerFindAllRequest = {
    /** A Project key or ID */
    project: string;
    /** @default 1 */
    page?: number;
    /** @default 100 */
    perPage?: number;
    /** @default SortBy.CreatedAt */
    sortBy?: SortBy;
    /** @default SortOrder.Desc */
    sortOrder?: SortOrder;
    search?: string;
    type?: Type3;
    includeUsage?: boolean;
  };

  export const customPropertiesControllerFindAllRequestSchema: Schema<CustomPropertiesControllerFindAllRequest> =
    s.lazySchema(() =>
      s.object<CustomPropertiesControllerFindAllRequest>({
        project: s.string(),
        page: s.defaulted(s.float64().check(s.gte(1)), 1),
        perPage: s.defaulted(s.float64().check(s.gte(1), s.lte(1000)), 100),
        sortBy: s.defaulted(sortBySchema, SortBy.CreatedAt),
        sortOrder: s.defaulted(sortOrderSchema, SortOrder.Desc),
        search: s.optional(s.string().check(s.minLength(3))),
        type: s.optional(s.lazy(() => type3Schema)),
        includeUsage: s.optional(s.boolean()),
      }),
    );

  export class CustomPropertiesControllerFindAllError extends ApiError {
    declare readonly payload:
      | Declared<"badRequestErrorResponse", BadRequestErrorResponse>
      | Declared<"error401", undefined>
      | Declared<"error403", undefined>
      | Declared<"error404", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<CustomPropertiesControllerFindAllError> = [
      {
        on: 400,
        kind: "badRequestErrorResponse",
        decode: { kind: "json", schema: badRequestErrorResponseSchema },
      },
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 403, kind: "error403", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
    ];
  }

  export type CustomPropertiesControllerFindOneRequest = {
    /** A Custom Property key or ID */
    key: string;
    /** A Project key or ID */
    project: string;
  };

  export class CustomPropertiesControllerFindOneError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error403", undefined>
      | Declared<"error404", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<CustomPropertiesControllerFindOneError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 403, kind: "error403", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
    ];
  }

  export type CustomPropertiesControllerRemoveRequest = {
    /** A Custom Property key or ID */
    key: string;
    /** A Project key or ID */
    project: string;
  };

  export class CustomPropertiesControllerRemoveError extends ApiError {
    declare readonly payload: Declared<"error401", undefined> | Declared<"error404", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<CustomPropertiesControllerRemoveError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
    ];
  }

  export type CustomPropertiesControllerUpdateRequest = {
    /** A Custom Property key or ID */
    key: string;
    /** A Project key or ID */
    project: string;
    body: UpdateCustomPropertyDto;
  };

  export class CustomPropertiesControllerUpdateError extends ApiError {
    declare readonly payload:
      | Declared<"badRequestErrorResponse", BadRequestErrorResponse>
      | Declared<"error401", undefined>
      | Declared<"error404", undefined>
      | Declared<"conflictErrorResponse", ConflictErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<CustomPropertiesControllerUpdateError> = [
      {
        on: 400,
        kind: "badRequestErrorResponse",
        decode: { kind: "json", schema: badRequestErrorResponseSchema },
      },
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      {
        on: 409,
        kind: "conflictErrorResponse",
        decode: { kind: "json", schema: conflictErrorResponseSchema },
      },
    ];
  }
}
