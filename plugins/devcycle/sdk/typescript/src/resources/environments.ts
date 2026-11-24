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
  cannotDeleteLastItemErrorResponseSchema,
  type CannotDeleteLastItemErrorResponse,
} from "../models/cannot-delete-last-item-error-response.js";
import {
  conflictErrorResponseSchema,
  type ConflictErrorResponse,
} from "../models/conflict-error-response.js";
import {
  createEnvironmentDtoInternalSchema,
  type CreateEnvironmentDto,
} from "../models/create-environment-dto.js";
import { environmentInternalSchema, type Environment } from "../models/environment.js";
import { generateSdkTokensDtoSchema, type GenerateSdkTokensDto } from "../models/generate-sdk-tokens-dto.js";
import {
  notFoundErrorResponseSchema,
  type NotFoundErrorResponse,
} from "../models/not-found-error-response.js";
import { SortBy, sortBySchema } from "../models/sort-by.js";
import { SortOrder, sortOrderSchema } from "../models/sort-order.js";
import {
  updateEnvironmentDtoInternalSchema,
  type UpdateEnvironmentDto,
} from "../models/update-environment-dto.js";
import type { Servers } from "../servers.js";

export class Environments {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;

  constructor(rawClient: RawClient, servers: Servers) {
    this.#rawClient = rawClient;
    this.#servers = servers;
  }

  /**
   * Create Environment
   *
   * @remarks
   * Create a new environment for a project. The environment key must be unique within the project.
   * Multiple environments can share a type. Creating an environment will auto-generate a set of SDK
   * Keys for the various types of SDKs. When permissions are enabled for the organization, the
   * token must have Publisher permissions for the environment to be created.
   *
   * @throws {@link Environments.EnvironmentsControllerCreateError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link DevCycleError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  environmentsControllerCreate(
    request: Environments.EnvironmentsControllerCreateRequest,
    options?: RequestOptions,
  ): ApiPromise<Environment, Environments.EnvironmentsControllerCreateError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v1/projects/{project}/environments"),
        auth: noneAuth,
        pathParams: [{ name: "project", value: request.project, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: createEnvironmentDtoInternalSchema },
      },
      {
        success: { kind: "json", schema: environmentInternalSchema },
        errorFactory: Environments.EnvironmentsControllerCreateError,
      },
      options,
    );
  }

  /**
   * List Environments
   *
   * @remarks
   * List all environments for a project. If a token does not have permission to view protected
   * environments the environments will be filtered to only show non-protected environments SDK Keys
   * for security.
   *
   * @throws {@link Environments.EnvironmentsControllerFindAllError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link DevCycleError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  environmentsControllerFindAll(
    request: Environments.EnvironmentsControllerFindAllRequest,
    options?: RequestOptions,
  ): ApiPromise<Environment[], Environments.EnvironmentsControllerFindAllError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/projects/{project}/environments"),
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
          { name: "createdBy", value: request.createdBy, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => environmentInternalSchema)) },
        errorFactory: Environments.EnvironmentsControllerFindAllError,
      },
      options,
    );
  }

  /**
   * Get an Environment
   *
   * @remarks
   * Returns the environment; if the token does not have permission to view protected environments,
   * the environment will be filtered to only show non-protected SDK Keys for security.
   *
   * @throws {@link Environments.EnvironmentsControllerFindOneError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link DevCycleError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  environmentsControllerFindOne(
    request: Environments.EnvironmentsControllerFindOneRequest,
    options?: RequestOptions,
  ): ApiPromise<Environment, Environments.EnvironmentsControllerFindOneError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/projects/{project}/environments/{key}"),
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
        success: { kind: "json", schema: environmentInternalSchema },
        errorFactory: Environments.EnvironmentsControllerFindOneError,
      },
      options,
    );
  }

  /**
   * Delete an Environment
   *
   * @remarks
   * Delete an Environment by ID or key
   *
   * @throws {@link Environments.EnvironmentsControllerRemoveError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link DevCycleError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  environmentsControllerRemove(
    request: Environments.EnvironmentsControllerRemoveRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, Environments.EnvironmentsControllerRemoveError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/v1/projects/{project}/environments/{key}"),
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
        errorFactory: Environments.EnvironmentsControllerRemoveError,
      },
      options,
    );
  }

  /**
   * Update an Environment
   *
   * @remarks
   * Update an environment by ID or key. The environment key (if edited) must be unique within the
   * project. If permissions are enabled, changing a protected environment type requires Publisher
   * permissions
   *
   * @throws {@link Environments.EnvironmentsControllerUpdateError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link DevCycleError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  environmentsControllerUpdate(
    request: Environments.EnvironmentsControllerUpdateRequest,
    options?: RequestOptions,
  ): ApiPromise<Environment, Environments.EnvironmentsControllerUpdateError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default("/v1/projects/{project}/environments/{key}"),
        auth: noneAuth,
        pathParams: [
          { name: "key", value: request.key, schema: s.string() },
          { name: "project", value: request.project, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: updateEnvironmentDtoInternalSchema },
      },
      {
        success: { kind: "json", schema: environmentInternalSchema },
        errorFactory: Environments.EnvironmentsControllerUpdateError,
      },
      options,
    );
  }

  /**
   * Generate SDK Keys
   *
   * @remarks
   * Generate new SDK keys for an environment, for any or all of the SDK types. This is the expected
   * and recommended way to rotate SDK keys. Adding a new SDK key will not invalidate existing SDK
   * keys. Generating new keys is restricted for protected environments to those with Publisher
   * permissions
   *
   * @throws {@link Environments.SdkKeysControllerGenerateError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link DevCycleError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  sdkKeysControllerGenerate(
    request: Environments.SdkKeysControllerGenerateRequest,
    options?: RequestOptions,
  ): ApiPromise<Environment, Environments.SdkKeysControllerGenerateError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v1/projects/{project}/environments/{environment}/sdk-keys"),
        auth: noneAuth,
        pathParams: [
          { name: "environment", value: request.environment, schema: s.string() },
          { name: "project", value: request.project, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: generateSdkTokensDtoSchema },
      },
      {
        success: { kind: "json", schema: environmentInternalSchema },
        errorFactory: Environments.SdkKeysControllerGenerateError,
      },
      options,
    );
  }

  /**
   * Invalidate an SDK key
   *
   * @remarks
   * This will invalidate all configs associated with a given key. This is an instantaneous change
   * and all SDKs using this key will stop working immediately. This is the expected and recommended
   * way to rotate SDK keys.
   *
   * @throws {@link Environments.SdkKeysControllerInvalidateError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link DevCycleError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  sdkKeysControllerInvalidate(
    request: Environments.SdkKeysControllerInvalidateRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, Environments.SdkKeysControllerInvalidateError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default(
          "/v1/projects/{project}/environments/{environment}/sdk-keys/{key}",
        ),
        auth: noneAuth,
        pathParams: [
          { name: "key", value: request.key, schema: s.string() },
          { name: "environment", value: request.environment, schema: s.string() },
          { name: "project", value: request.project, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: Environments.SdkKeysControllerInvalidateError,
      },
      options,
    );
  }
}

export namespace Environments {
  export type EnvironmentsControllerCreateRequest = {
    /** A Project key or ID */
    project: string;
    body: CreateEnvironmentDto;
  };

  export class EnvironmentsControllerCreateError extends ApiError {
    declare readonly payload:
      | Declared<"badRequestErrorResponse", BadRequestErrorResponse>
      | Declared<"error401", undefined>
      | Declared<"error404", undefined>
      | Declared<"conflictErrorResponse", ConflictErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<EnvironmentsControllerCreateError> = [
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

  export type EnvironmentsControllerFindAllRequest = {
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
    createdBy?: string;
  };

  export const environmentsControllerFindAllRequestSchema: Schema<EnvironmentsControllerFindAllRequest> =
    s.lazySchema(() =>
      s.object<EnvironmentsControllerFindAllRequest>({
        project: s.string(),
        page: s.defaulted(s.float64().check(s.gte(1)), 1),
        perPage: s.defaulted(s.float64().check(s.gte(1), s.lte(1000)), 100),
        sortBy: s.defaulted(sortBySchema, SortBy.CreatedAt),
        sortOrder: s.defaulted(sortOrderSchema, SortOrder.Desc),
        search: s.optional(s.string().check(s.minLength(3))),
        createdBy: s.optional(s.string()),
      }),
    );

  export class EnvironmentsControllerFindAllError extends ApiError {
    declare readonly payload:
      | Declared<"badRequestErrorResponse", BadRequestErrorResponse>
      | Declared<"error401", undefined>
      | Declared<"error403", undefined>
      | Declared<"error404", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<EnvironmentsControllerFindAllError> = [
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

  export type EnvironmentsControllerFindOneRequest = {
    /** A Environment key or ID */
    key: string;
    /** A Project key or ID */
    project: string;
  };

  export class EnvironmentsControllerFindOneError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error403", undefined>
      | Declared<"notFoundErrorResponse", NotFoundErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<EnvironmentsControllerFindOneError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 403, kind: "error403", decode: { kind: "empty" } },
      {
        on: 404,
        kind: "notFoundErrorResponse",
        decode: { kind: "json", schema: notFoundErrorResponseSchema },
      },
    ];
  }

  export type EnvironmentsControllerRemoveRequest = {
    /** A Environment key or ID */
    key: string;
    /** A Project key or ID */
    project: string;
  };

  export class EnvironmentsControllerRemoveError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error403", undefined>
      | Declared<"notFoundErrorResponse", NotFoundErrorResponse>
      | Declared<"cannotDeleteLastItemErrorResponse", CannotDeleteLastItemErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<EnvironmentsControllerRemoveError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 403, kind: "error403", decode: { kind: "empty" } },
      {
        on: 404,
        kind: "notFoundErrorResponse",
        decode: { kind: "json", schema: notFoundErrorResponseSchema },
      },
      {
        on: 405,
        kind: "cannotDeleteLastItemErrorResponse",
        decode: { kind: "json", schema: cannotDeleteLastItemErrorResponseSchema },
      },
    ];
  }

  export type EnvironmentsControllerUpdateRequest = {
    /** A Environment key or ID */
    key: string;
    /** A Project key or ID */
    project: string;
    body: UpdateEnvironmentDto;
  };

  export class EnvironmentsControllerUpdateError extends ApiError {
    declare readonly payload:
      | Declared<"badRequestErrorResponse", BadRequestErrorResponse>
      | Declared<"error401", undefined>
      | Declared<"notFoundErrorResponse", NotFoundErrorResponse>
      | Declared<"conflictErrorResponse", ConflictErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<EnvironmentsControllerUpdateError> = [
      {
        on: 400,
        kind: "badRequestErrorResponse",
        decode: { kind: "json", schema: badRequestErrorResponseSchema },
      },
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      {
        on: 404,
        kind: "notFoundErrorResponse",
        decode: { kind: "json", schema: notFoundErrorResponseSchema },
      },
      {
        on: 409,
        kind: "conflictErrorResponse",
        decode: { kind: "json", schema: conflictErrorResponseSchema },
      },
    ];
  }

  export type SdkKeysControllerGenerateRequest = {
    /** An Environment key or ID */
    environment: string;
    /** A Project key or ID */
    project: string;
    body: GenerateSdkTokensDto;
  };

  export class SdkKeysControllerGenerateError extends ApiError {
    declare readonly payload:
      | Declared<"badRequestErrorResponse", BadRequestErrorResponse>
      | Declared<"error401", undefined>
      | Declared<"error403", undefined>
      | Declared<"notFoundErrorResponse", NotFoundErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<SdkKeysControllerGenerateError> = [
      {
        on: 400,
        kind: "badRequestErrorResponse",
        decode: { kind: "json", schema: badRequestErrorResponseSchema },
      },
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 403, kind: "error403", decode: { kind: "empty" } },
      {
        on: 404,
        kind: "notFoundErrorResponse",
        decode: { kind: "json", schema: notFoundErrorResponseSchema },
      },
    ];
  }

  export type SdkKeysControllerInvalidateRequest = {
    /** An SDK key */
    key: string;
    /** An Environment key or ID */
    environment: string;
    /** A Project key or ID */
    project: string;
  };

  export class SdkKeysControllerInvalidateError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error403", undefined>
      | Declared<"notFoundErrorResponse", NotFoundErrorResponse>
      | Declared<"cannotDeleteLastItemErrorResponse", CannotDeleteLastItemErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<SdkKeysControllerInvalidateError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 403, kind: "error403", decode: { kind: "empty" } },
      {
        on: 404,
        kind: "notFoundErrorResponse",
        decode: { kind: "json", schema: notFoundErrorResponseSchema },
      },
      {
        on: 405,
        kind: "cannotDeleteLastItemErrorResponse",
        decode: { kind: "json", schema: cannotDeleteLastItemErrorResponseSchema },
      },
    ];
  }
}
