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
  createSourceGroupParamsInternalSchema,
  type CreateSourceGroupParams,
} from "../models/create-source-group-params.js";
import { errorResponseSchema, type ErrorResponse } from "../models/error-response.js";
import { nullsSchema, type Nulls } from "../models/nulls.js";
import {
  patchSourceGroupParamsInternalSchema,
  type PatchSourceGroupParams,
} from "../models/patch-source-group-params.js";
import { sortOrderSchema, type SortOrder } from "../models/sort-order.js";
import {
  sourceGroupListResultSchema,
  type SourceGroupListResult,
} from "../models/source-group-list-result.js";
import {
  sourceGroupResolveResultSchema,
  type SourceGroupResolveResult,
} from "../models/source-group-resolve-result.js";
import { sourceGroupResultSchema, type SourceGroupResult } from "../models/source-group-result.js";
import { sourceGroupSortBySchema, type SourceGroupSortBy } from "../models/source-group-sort-by.js";
import type { Servers } from "../servers.js";

/**
 * Manage custom source groups for organizing and filtering news sources. Source groups allow
 * grouping domains together for use in search queries and monitors.
 */
export class SourceGroups {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Create source group
   *
   * @remarks
   * Create a new source group under the organization associated with the API key.
   *
   * @returns 200 - Success
   *
   * @throws {@link SourceGroups.CreateSourceGroupError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link PerigonError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createSourceGroup(
    request: SourceGroups.CreateSourceGroupRequest,
    options?: RequestOptions,
  ): ApiPromise<SourceGroupResult, SourceGroups.CreateSourceGroupError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v1/api/sourceGroups"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: createSourceGroupParamsInternalSchema },
      },
      {
        success: { kind: "json", schema: sourceGroupResultSchema },
        errorFactory: SourceGroups.CreateSourceGroupError,
      },
      options,
    );
  }

  /**
   * Delete source group
   *
   * @remarks
   * Delete a source group owned by the organization associated with the API key.
   *
   * @returns 200 - Success
   *
   * @throws {@link SourceGroups.DeleteSourceGroupError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link PerigonError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteSourceGroup(
    request: SourceGroups.DeleteSourceGroupRequest,
    options?: RequestOptions,
  ): ApiPromise<SourceGroupResult, SourceGroups.DeleteSourceGroupError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/v1/api/sourceGroups/{id}"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.int() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sourceGroupResultSchema },
        errorFactory: SourceGroups.DeleteSourceGroupError,
      },
      options,
    );
  }

  /**
   * Get source group
   *
   * @remarks
   * Retrieve a source group by ID. Only returns source groups owned by the organization associated
   * with the API key.
   *
   * @returns 200 - Success
   *
   * @throws {@link SourceGroups.GetSourceGroupError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link PerigonError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getSourceGroup(
    request: SourceGroups.GetSourceGroupRequest,
    options?: RequestOptions,
  ): ApiPromise<SourceGroupResult, SourceGroups.GetSourceGroupError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/api/sourceGroups/{id}"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.int() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sourceGroupResultSchema },
        errorFactory: SourceGroups.GetSourceGroupError,
      },
      options,
    );
  }

  /**
   * List source groups
   *
   * @remarks
   * List source groups owned by the organization associated with the API key, as well as publicly
   * visible source groups. Supports filtering by name and domain.
   *
   * @returns 200 - Success
   *
   * @throws {@link SourceGroups.ListSourceGroupsError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link PerigonError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listSourceGroups(
    request: SourceGroups.ListSourceGroupsRequest,
    options?: RequestOptions,
  ): ApiPromise<SourceGroupListResult, SourceGroups.ListSourceGroupsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/api/sourceGroups"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [
          { name: "sortBy", value: request.sortBy, schema: sourceGroupSortBySchema },
          { name: "sortOrder", value: request.sortOrder, schema: sortOrderSchema },
          { name: "name", value: request.name, schema: s.optional(s.string()) },
          { name: "domain", value: request.domain, schema: s.optional(s.string()) },
          { name: "page", value: request.page, schema: s.defaulted(s.int(), 0) },
          { name: "size", value: request.size, schema: s.defaulted(s.int(), 10) },
          { name: "nulls", value: request.nulls, schema: s.optional(s.lazy(() => nullsSchema)) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sourceGroupListResultSchema },
        errorFactory: SourceGroups.ListSourceGroupsError,
      },
      options,
    );
  }

  /**
   * Resolve source groups
   *
   * @remarks
   * Resolve source groups by name. For each name, returns the organization's private source group
   * if one exists, otherwise falls back to the matching public source group.
   *
   * @returns 200 - Success
   *
   * @throws {@link SourceGroups.ResolveSourceGroupsError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link PerigonError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  resolveSourceGroups(
    request: SourceGroups.ResolveSourceGroupsRequest = {},
    options?: RequestOptions,
  ): ApiPromise<SourceGroupResolveResult, SourceGroups.ResolveSourceGroupsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/api/sourceGroups/resolve"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [{ name: "name", value: request.name, schema: s.optional(s.array(s.string())) }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sourceGroupResolveResultSchema },
        errorFactory: SourceGroups.ResolveSourceGroupsError,
      },
      options,
    );
  }

  /**
   * Update source group
   *
   * @remarks
   * Partially update a source group owned by the organization associated with the API key. Only
   * provided fields will be updated.
   *
   * @returns 200 - Success
   *
   * @throws {@link SourceGroups.UpdateSourceGroupError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link PerigonError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateSourceGroup(
    request: SourceGroups.UpdateSourceGroupRequest,
    options?: RequestOptions,
  ): ApiPromise<SourceGroupResult, SourceGroups.UpdateSourceGroupError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default("/v1/api/sourceGroups/{id}"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.int() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: patchSourceGroupParamsInternalSchema },
      },
      {
        success: { kind: "json", schema: sourceGroupResultSchema },
        errorFactory: SourceGroups.UpdateSourceGroupError,
      },
      options,
    );
  }
}

export namespace SourceGroups {
  export type CreateSourceGroupRequest = {
    body: CreateSourceGroupParams;
  };

  export class CreateSourceGroupError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Declared<"errorResponse5", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateSourceGroupError> = [
      { on: 401, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 400, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 429, kind: "errorResponse5", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type DeleteSourceGroupRequest = {
    id: number;
  };

  export class DeleteSourceGroupError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Declared<"errorResponse5", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<DeleteSourceGroupError> = [
      { on: 401, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 400, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 429, kind: "errorResponse5", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type GetSourceGroupRequest = {
    id: number;
  };

  export class GetSourceGroupError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Declared<"errorResponse5", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetSourceGroupError> = [
      { on: 401, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 400, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 429, kind: "errorResponse5", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type ListSourceGroupsRequest = {
    sortBy: SourceGroupSortBy;
    /** Required direction used to sort results. Accepts asc or desc. */
    sortOrder: SortOrder;
    name?: string;
    domain?: string;
    /** Zero-based page number to retrieve. Defaults to 0. @default 0 */
    page?: number;
    /** Number of results per page. Must be between 1 and 100; defaults to 10. @default 10 */
    size?: number;
    /** Placement of null values in sorted results. Accepts first or last. */
    nulls?: Nulls;
  };

  export const listSourceGroupsRequestSchema: Schema<ListSourceGroupsRequest> = s.lazySchema(() =>
    s.object<ListSourceGroupsRequest>({
      sortBy: sourceGroupSortBySchema,
      sortOrder: sortOrderSchema,
      name: s.optional(s.string()),
      domain: s.optional(s.string()),
      page: s.defaulted(s.int().check(s.gte(0)), 0),
      size: s.defaulted(s.int().check(s.gte(1), s.lte(100)), 10),
      nulls: s.optional(s.lazy(() => nullsSchema)),
    }),
  );

  export class ListSourceGroupsError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Declared<"errorResponse5", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListSourceGroupsError> = [
      { on: 401, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 400, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 429, kind: "errorResponse5", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type ResolveSourceGroupsRequest = {
    /** Source group names to resolve (max 100) */
    name?: string[];
  };

  export const resolveSourceGroupsRequestSchema: Schema<ResolveSourceGroupsRequest> = s.lazySchema(() =>
    s.object<ResolveSourceGroupsRequest>({
      name: s.optional(s.array(s.string()).check(s.minLength(0), s.maxLength(100))),
    }),
  );

  export class ResolveSourceGroupsError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Declared<"errorResponse5", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<ResolveSourceGroupsError> = [
      { on: 401, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 400, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 429, kind: "errorResponse5", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type UpdateSourceGroupRequest = {
    id: number;
    body: PatchSourceGroupParams;
  };

  export class UpdateSourceGroupError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Declared<"errorResponse5", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<UpdateSourceGroupError> = [
      { on: 401, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 400, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 429, kind: "errorResponse5", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }
}
