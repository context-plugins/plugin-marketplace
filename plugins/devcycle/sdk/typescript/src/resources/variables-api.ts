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
  createVariableDtoDevCycleManagementVariablesApiInternalSchema,
  type CreateVariableDtoDevCycleManagementVariablesApi,
} from "../models/create-variable-dto-dev-cycle-management-variables-api.js";
import {
  notFoundErrorResponseSchema,
  type NotFoundErrorResponse,
} from "../models/not-found-error-response.js";
import {
  preconditionFailedErrorResponseSchema,
  type PreconditionFailedErrorResponse,
} from "../models/precondition-failed-error-response.js";
import { SortBy, sortBySchema } from "../models/sort-by.js";
import { SortOrder, sortOrderSchema } from "../models/sort-order.js";
import {
  status2DevCycleManagementVariablesApiSchema,
  type Status2DevCycleManagementVariablesApi,
} from "../models/status2-dev-cycle-management-variables-api.js";
import {
  type3DevCycleManagementVariablesApiSchema,
  type Type3DevCycleManagementVariablesApi,
} from "../models/type3-dev-cycle-management-variables-api.js";
import { updateVariableDtoInternalSchema, type UpdateVariableDto } from "../models/update-variable-dto.js";
import {
  updateVariableStatusDtoSchema,
  type UpdateVariableStatusDto,
} from "../models/update-variable-status-dto.js";
import {
  variableDevCycleManagementVariablesApiInternalSchema,
  type VariableDevCycleManagementVariablesApi,
} from "../models/variable-dev-cycle-management-variables-api.js";
import type { Servers } from "../servers.js";

export class VariablesApi {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;

  constructor(rawClient: RawClient, servers: Servers) {
    this.#rawClient = rawClient;
    this.#servers = servers;
  }

  /**
   * Create a Variable
   *
   * @throws {@link VariablesApi.VariablesControllerCreateError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link DevCycleError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  variablesControllerCreate(
    request: VariablesApi.VariablesControllerCreateRequest,
    options?: RequestOptions,
  ): ApiPromise<VariableDevCycleManagementVariablesApi, VariablesApi.VariablesControllerCreateError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v1/projects/{project}/variables"),
        auth: noneAuth,
        pathParams: [{ name: "project", value: request.project, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: createVariableDtoDevCycleManagementVariablesApiInternalSchema,
        },
      },
      {
        success: { kind: "json", schema: variableDevCycleManagementVariablesApiInternalSchema },
        errorFactory: VariablesApi.VariablesControllerCreateError,
      },
      options,
    );
  }

  /**
   * List Variables
   *
   * @throws {@link VariablesApi.VariablesControllerFindAllError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link DevCycleError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  variablesControllerFindAll(
    request: VariablesApi.VariablesControllerFindAllRequest,
    options?: RequestOptions,
  ): ApiPromise<VariableDevCycleManagementVariablesApi[], VariablesApi.VariablesControllerFindAllError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/projects/{project}/variables"),
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
          { name: "feature", value: request.feature, schema: s.optional(s.string()) },
          {
            name: "type",
            value: request.type,
            schema: s.optional(s.lazy(() => type3DevCycleManagementVariablesApiSchema)),
          },
          {
            name: "status",
            value: request.status,
            schema: s.optional(s.lazy(() => status2DevCycleManagementVariablesApiSchema)),
          },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: {
          kind: "json",
          schema: s.array(s.lazy(() => variableDevCycleManagementVariablesApiInternalSchema)),
        },
        errorFactory: VariablesApi.VariablesControllerFindAllError,
      },
      options,
    );
  }

  /**
   * Get a Variable
   *
   * @throws {@link VariablesApi.VariablesControllerFindOneError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link DevCycleError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  variablesControllerFindOne(
    request: VariablesApi.VariablesControllerFindOneRequest,
    options?: RequestOptions,
  ): ApiPromise<VariableDevCycleManagementVariablesApi, VariablesApi.VariablesControllerFindOneError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/projects/{project}/variables/{key}"),
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
        success: { kind: "json", schema: variableDevCycleManagementVariablesApiInternalSchema },
        errorFactory: VariablesApi.VariablesControllerFindOneError,
      },
      options,
    );
  }

  /**
   * Delete a Variable
   *
   * @throws {@link VariablesApi.VariablesControllerRemoveError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link DevCycleError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  variablesControllerRemove(
    request: VariablesApi.VariablesControllerRemoveRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, VariablesApi.VariablesControllerRemoveError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/v1/projects/{project}/variables/{key}"),
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
        errorFactory: VariablesApi.VariablesControllerRemoveError,
      },
      options,
    );
  }

  /**
   * Update a Variable
   *
   * @throws {@link VariablesApi.VariablesControllerUpdateError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link DevCycleError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  variablesControllerUpdate(
    request: VariablesApi.VariablesControllerUpdateRequest,
    options?: RequestOptions,
  ): ApiPromise<VariableDevCycleManagementVariablesApi, VariablesApi.VariablesControllerUpdateError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default("/v1/projects/{project}/variables/{key}"),
        auth: noneAuth,
        pathParams: [
          { name: "key", value: request.key, schema: s.string() },
          { name: "project", value: request.project, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: updateVariableDtoInternalSchema },
      },
      {
        success: { kind: "json", schema: variableDevCycleManagementVariablesApiInternalSchema },
        errorFactory: VariablesApi.VariablesControllerUpdateError,
      },
      options,
    );
  }

  /**
   * Update a Variable status to archived or active
   *
   * @throws {@link VariablesApi.VariablesControllerUpdateStatusError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link DevCycleError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  variablesControllerUpdateStatus(
    request: VariablesApi.VariablesControllerUpdateStatusRequest,
    options?: RequestOptions,
  ): ApiPromise<VariableDevCycleManagementVariablesApi, VariablesApi.VariablesControllerUpdateStatusError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default("/v1/projects/{project}/variables/{key}/status"),
        auth: noneAuth,
        pathParams: [
          { name: "key", value: request.key, schema: s.string() },
          { name: "project", value: request.project, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: updateVariableStatusDtoSchema },
      },
      {
        success: { kind: "json", schema: variableDevCycleManagementVariablesApiInternalSchema },
        errorFactory: VariablesApi.VariablesControllerUpdateStatusError,
      },
      options,
    );
  }
}

export namespace VariablesApi {
  export type VariablesControllerCreateRequest = {
    /** A Project key or ID */
    project: string;
    body: CreateVariableDtoDevCycleManagementVariablesApi;
  };

  export class VariablesControllerCreateError extends ApiError {
    declare readonly payload:
      | Declared<"badRequestErrorResponse", BadRequestErrorResponse>
      | Declared<"error401", undefined>
      | Declared<"error403", undefined>
      | Declared<"error404", undefined>
      | Declared<"conflictErrorResponse", ConflictErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<VariablesControllerCreateError> = [
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

  export type VariablesControllerFindAllRequest = {
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
    feature?: string;
    type?: Type3DevCycleManagementVariablesApi;
    status?: Status2DevCycleManagementVariablesApi;
  };

  export const variablesControllerFindAllRequestSchema: Schema<VariablesControllerFindAllRequest> =
    s.lazySchema(() =>
      s.object<VariablesControllerFindAllRequest>({
        project: s.string(),
        page: s.defaulted(s.float64().check(s.gte(1)), 1),
        perPage: s.defaulted(s.float64().check(s.gte(1), s.lte(1000)), 100),
        sortBy: s.defaulted(sortBySchema, SortBy.CreatedAt),
        sortOrder: s.defaulted(sortOrderSchema, SortOrder.Desc),
        search: s.optional(s.string().check(s.minLength(3))),
        feature: s.optional(s.string()),
        type: s.optional(s.lazy(() => type3DevCycleManagementVariablesApiSchema)),
        status: s.optional(s.lazy(() => status2DevCycleManagementVariablesApiSchema)),
      }),
    );

  export class VariablesControllerFindAllError extends ApiError {
    declare readonly payload:
      | Declared<"badRequestErrorResponse", BadRequestErrorResponse>
      | Declared<"error401", undefined>
      | Declared<"error403", undefined>
      | Declared<"error404", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<VariablesControllerFindAllError> = [
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

  export type VariablesControllerFindOneRequest = {
    /** A Variable key or ID */
    key: string;
    /** A Project key or ID */
    project: string;
  };

  export class VariablesControllerFindOneError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error403", undefined>
      | Declared<"notFoundErrorResponse", NotFoundErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<VariablesControllerFindOneError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 403, kind: "error403", decode: { kind: "empty" } },
      {
        on: 404,
        kind: "notFoundErrorResponse",
        decode: { kind: "json", schema: notFoundErrorResponseSchema },
      },
    ];
  }

  export type VariablesControllerRemoveRequest = {
    /** A Variable key or ID */
    key: string;
    /** A Project key or ID */
    project: string;
  };

  export class VariablesControllerRemoveError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error403", undefined>
      | Declared<"notFoundErrorResponse", NotFoundErrorResponse>
      | Declared<"preconditionFailedErrorResponse", PreconditionFailedErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<VariablesControllerRemoveError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 403, kind: "error403", decode: { kind: "empty" } },
      {
        on: 404,
        kind: "notFoundErrorResponse",
        decode: { kind: "json", schema: notFoundErrorResponseSchema },
      },
      {
        on: 412,
        kind: "preconditionFailedErrorResponse",
        decode: { kind: "json", schema: preconditionFailedErrorResponseSchema },
      },
    ];
  }

  export type VariablesControllerUpdateRequest = {
    /** A Variable key or ID */
    key: string;
    /** A Project key or ID */
    project: string;
    body: UpdateVariableDto;
  };

  export class VariablesControllerUpdateError extends ApiError {
    declare readonly payload:
      | Declared<"badRequestErrorResponse", BadRequestErrorResponse>
      | Declared<"error401", undefined>
      | Declared<"notFoundErrorResponse", NotFoundErrorResponse>
      | Declared<"conflictErrorResponse", ConflictErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<VariablesControllerUpdateError> = [
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

  export type VariablesControllerUpdateStatusRequest = {
    /** A Variable key or ID */
    key: string;
    /** A Project key or ID */
    project: string;
    body: UpdateVariableStatusDto;
  };

  export class VariablesControllerUpdateStatusError extends ApiError {
    declare readonly payload:
      | Declared<"badRequestErrorResponse", BadRequestErrorResponse>
      | Declared<"error401", undefined>
      | Declared<"notFoundErrorResponse", NotFoundErrorResponse>
      | Declared<"preconditionFailedErrorResponse", PreconditionFailedErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<VariablesControllerUpdateStatusError> = [
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
        on: 412,
        kind: "preconditionFailedErrorResponse",
        decode: { kind: "json", schema: preconditionFailedErrorResponseSchema },
      },
    ];
  }
}
