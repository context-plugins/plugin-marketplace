import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { noneAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { audienceUsageInternalSchema, type AudienceUsage } from "../models/audience-usage.js";
import { audienceInternalSchema, type Audience } from "../models/audience.js";
import {
  badRequestErrorResponseSchema,
  type BadRequestErrorResponse,
} from "../models/bad-request-error-response.js";
import {
  conflictErrorResponseSchema,
  type ConflictErrorResponse,
} from "../models/conflict-error-response.js";
import { createAudienceDtoInternalSchema, type CreateAudienceDto } from "../models/create-audience-dto.js";
import {
  notFoundErrorResponseSchema,
  type NotFoundErrorResponse,
} from "../models/not-found-error-response.js";
import { SortBy, sortBySchema } from "../models/sort-by.js";
import { SortOrder, sortOrderSchema } from "../models/sort-order.js";
import { updateAudienceDtoInternalSchema, type UpdateAudienceDto } from "../models/update-audience-dto.js";
import type { Servers } from "../servers.js";

export class Audiences {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;

  constructor(rawClient: RawClient, servers: Servers) {
    this.#rawClient = rawClient;
    this.#servers = servers;
  }

  /**
   * Create Audience
   *
   * @remarks
   * Create a new Audience
   *
   * @throws {@link Audiences.AudiencesControllerCreateError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link DevCycleError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  audiencesControllerCreate(
    request: Audiences.AudiencesControllerCreateRequest,
    options?: RequestOptions,
  ): ApiPromise<Audience, Audiences.AudiencesControllerCreateError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v1/projects/{project}/audiences"),
        auth: noneAuth,
        pathParams: [{ name: "project", value: request.project, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: createAudienceDtoInternalSchema },
      },
      {
        success: { kind: "json", schema: audienceInternalSchema },
        errorFactory: Audiences.AudiencesControllerCreateError,
      },
      options,
    );
  }

  /**
   * List Audiences
   *
   * @throws {@link Audiences.AudiencesControllerFindAllError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link DevCycleError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  audiencesControllerFindAll(
    request: Audiences.AudiencesControllerFindAllRequest,
    options?: RequestOptions,
  ): ApiPromise<Audience[], Audiences.AudiencesControllerFindAllError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/projects/{project}/audiences"),
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
          { name: "includeUsage", value: request.includeUsage, schema: s.optional(s.boolean()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => audienceInternalSchema)) },
        errorFactory: Audiences.AudiencesControllerFindAllError,
      },
      options,
    );
  }

  /**
   * Get an Audience
   *
   * @remarks
   * Get an Audience by ID or key
   *
   * @throws {@link Audiences.AudiencesControllerFindOneError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link DevCycleError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  audiencesControllerFindOne(
    request: Audiences.AudiencesControllerFindOneRequest,
    options?: RequestOptions,
  ): ApiPromise<Audience, Audiences.AudiencesControllerFindOneError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/projects/{project}/audiences/{key}"),
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
        success: { kind: "json", schema: audienceInternalSchema },
        errorFactory: Audiences.AudiencesControllerFindOneError,
      },
      options,
    );
  }

  /**
   * Get all direct usages of an Audience
   *
   * @remarks
   * Get the direct usages of an Audiences Usage by Features OR other Audiences by ID or key
   *
   * @throws {@link Audiences.AudiencesControllerFindUsagesError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link DevCycleError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  audiencesControllerFindUsages(
    request: Audiences.AudiencesControllerFindUsagesRequest,
    options?: RequestOptions,
  ): ApiPromise<AudienceUsage, Audiences.AudiencesControllerFindUsagesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/projects/{project}/audiences/{key}/usage"),
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
        success: { kind: "json", schema: audienceUsageInternalSchema },
        errorFactory: Audiences.AudiencesControllerFindUsagesError,
      },
      options,
    );
  }

  /**
   * Delete an Audience
   *
   * @remarks
   * Delete an Audience by ID or key
   *
   * @throws {@link Audiences.AudiencesControllerRemoveError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link DevCycleError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  audiencesControllerRemove(
    request: Audiences.AudiencesControllerRemoveRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, Audiences.AudiencesControllerRemoveError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/v1/projects/{project}/audiences/{key}"),
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
        errorFactory: Audiences.AudiencesControllerRemoveError,
      },
      options,
    );
  }

  /**
   * Update an Audience
   *
   * @remarks
   * Update an Audience by ID or key
   *
   * @throws {@link Audiences.AudiencesControllerUpdateError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link DevCycleError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  audiencesControllerUpdate(
    request: Audiences.AudiencesControllerUpdateRequest,
    options?: RequestOptions,
  ): ApiPromise<Audience, Audiences.AudiencesControllerUpdateError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default("/v1/projects/{project}/audiences/{key}"),
        auth: noneAuth,
        pathParams: [
          { name: "key", value: request.key, schema: s.string() },
          { name: "project", value: request.project, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: updateAudienceDtoInternalSchema },
      },
      {
        success: { kind: "json", schema: audienceInternalSchema },
        errorFactory: Audiences.AudiencesControllerUpdateError,
      },
      options,
    );
  }
}

export namespace Audiences {
  export type AudiencesControllerCreateRequest = {
    /** A Project key or ID */
    project: string;
    body: CreateAudienceDto;
  };

  export class AudiencesControllerCreateError extends ApiError {
    declare readonly payload:
      | Declared<"badRequestErrorResponse", BadRequestErrorResponse>
      | Declared<"error401", undefined>
      | Declared<"error403", undefined>
      | Declared<"error404", undefined>
      | Declared<"conflictErrorResponse", ConflictErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<AudiencesControllerCreateError> = [
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

  export type AudiencesControllerFindAllRequest = {
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
    includeUsage?: boolean;
  };

  export const audiencesControllerFindAllRequestSchema: Schema<AudiencesControllerFindAllRequest> =
    s.lazySchema(() =>
      s.object<AudiencesControllerFindAllRequest>({
        project: s.string(),
        page: s.defaulted(s.float64().check(s.gte(1)), 1),
        perPage: s.defaulted(s.float64().check(s.gte(1), s.lte(1000)), 100),
        sortBy: s.defaulted(sortBySchema, SortBy.CreatedAt),
        sortOrder: s.defaulted(sortOrderSchema, SortOrder.Desc),
        search: s.optional(s.string().check(s.minLength(3))),
        createdBy: s.optional(s.string()),
        includeUsage: s.optional(s.boolean()),
      }),
    );

  export class AudiencesControllerFindAllError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error403", undefined>
      | Declared<"error404", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<AudiencesControllerFindAllError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 403, kind: "error403", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
    ];
  }

  export type AudiencesControllerFindOneRequest = {
    /** A Audience key or ID */
    key: string;
    /** A Project key or ID */
    project: string;
  };

  export class AudiencesControllerFindOneError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error403", undefined>
      | Declared<"notFoundErrorResponse", NotFoundErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<AudiencesControllerFindOneError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 403, kind: "error403", decode: { kind: "empty" } },
      {
        on: 404,
        kind: "notFoundErrorResponse",
        decode: { kind: "json", schema: notFoundErrorResponseSchema },
      },
    ];
  }

  export type AudiencesControllerFindUsagesRequest = {
    /** A Audience key or ID */
    key: string;
    /** A Project key or ID */
    project: string;
  };

  export class AudiencesControllerFindUsagesError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error403", undefined>
      | Declared<"notFoundErrorResponse", NotFoundErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<AudiencesControllerFindUsagesError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 403, kind: "error403", decode: { kind: "empty" } },
      {
        on: 404,
        kind: "notFoundErrorResponse",
        decode: { kind: "json", schema: notFoundErrorResponseSchema },
      },
    ];
  }

  export type AudiencesControllerRemoveRequest = {
    /** A Audience key or ID */
    key: string;
    /** A Project key or ID */
    project: string;
  };

  export class AudiencesControllerRemoveError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"notFoundErrorResponse", NotFoundErrorResponse>
      | Declared<"error412", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<AudiencesControllerRemoveError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      {
        on: 404,
        kind: "notFoundErrorResponse",
        decode: { kind: "json", schema: notFoundErrorResponseSchema },
      },
      { on: 412, kind: "error412", decode: { kind: "empty" } },
    ];
  }

  export type AudiencesControllerUpdateRequest = {
    /** A Audience key or ID */
    key: string;
    /** A Project key or ID */
    project: string;
    body: UpdateAudienceDto;
  };

  export class AudiencesControllerUpdateError extends ApiError {
    declare readonly payload:
      | Declared<"badRequestErrorResponse", BadRequestErrorResponse>
      | Declared<"error401", undefined>
      | Declared<"notFoundErrorResponse", NotFoundErrorResponse>
      | Declared<"conflictErrorResponse", ConflictErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<AudiencesControllerUpdateError> = [
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
}
