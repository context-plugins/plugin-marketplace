import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { m4001Schema, type M4001 } from "../models/m4001.js";
import { SortByCodeqrIoTagsApi, sortByCodeqrIoTagsApiSchema } from "../models/sort-by-codeqr-io-tags-api.js";
import { SortOrder, sortOrderSchema } from "../models/sort-order.js";
import { tagSchema, type Tag } from "../models/tag.js";
import { tagsRequestSchema, type TagsRequest } from "../models/tags-request.js";
import { tagsRequest1InternalSchema, type TagsRequest1 } from "../models/tags-request1.js";
import { tagsResponseSchema, type TagsResponse } from "../models/tags-response.js";
import { idsSchema, type Ids } from "../models/unions/ids.js";
import type { Servers } from "../servers.js";

export class Tags {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Create a new tag
   *
   * @remarks
   * Create a new tag for the authenticated project.
   *
   * @returns The created tag
   *
   * @throws {@link Tags.CreateTagError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link CodeQrError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createTag(
    request: Tags.CreateTagRequest = {},
    options?: RequestOptions,
  ): ApiPromise<Tag, Tags.CreateTagError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/tags"),
        auth: this.#auth.token,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: s.optional(s.lazy(() => tagsRequestSchema)) },
      },
      {
        success: { kind: "json", schema: tagSchema },
        errorFactory: Tags.CreateTagError,
      },
      options,
    );
  }

  /**
   * Delete a tag
   *
   * @remarks
   * Delete a tag from the workspace. All existing links will still work, but they will no longer be
   * associated with this tag.
   *
   * @returns The deleted tag ID.
   *
   * @throws {@link Tags.DeleteTagError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link CodeQrError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteTag(
    request: Tags.DeleteTagRequest,
    options?: RequestOptions,
  ): ApiPromise<TagsResponse, Tags.DeleteTagError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/tags/{id}"),
        auth: this.#auth.token,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: tagsResponseSchema },
        errorFactory: Tags.DeleteTagError,
      },
      options,
    );
  }

  /**
   * Retrieve a list of tags
   *
   * @remarks
   * Retrieve a list of tags for the authenticated workspace.
   *
   * @returns A list of tags
   *
   * @throws {@link Tags.GetTagsError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link CodeQrError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getTags(request: Tags.GetTagsRequest = {}, options?: RequestOptions): ApiPromise<Tag[], Tags.GetTagsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/tags"),
        auth: this.#auth.token,
        pathParams: [],
        query: [
          {
            name: "sortBy",
            value: request.sortBy,
            schema: s.defaulted(sortByCodeqrIoTagsApiSchema, SortByCodeqrIoTagsApi.Name),
          },
          {
            name: "sortOrder",
            value: request.sortOrder,
            schema: s.defaulted(sortOrderSchema, SortOrder.Asc),
          },
          { name: "search", value: request.search, schema: s.optional(s.string()) },
          { name: "ids", value: request.ids, schema: s.optional(s.lazy(() => idsSchema)) },
          { name: "page", value: request.page, schema: s.defaulted(s.float64(), 1) },
          { name: "pageSize", value: request.pageSize, schema: s.defaulted(s.float64(), 100) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => tagSchema)) },
        errorFactory: Tags.GetTagsError,
      },
      options,
    );
  }

  /**
   * Update a tag
   *
   * @remarks
   * Update a tag in the workspace.
   *
   * @returns The updated tag.
   *
   * @throws {@link Tags.UpdateTagError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link CodeQrError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateTag(request: Tags.UpdateTagRequest, options?: RequestOptions): ApiPromise<Tag, Tags.UpdateTagError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default("/tags/{id}"),
        auth: this.#auth.token,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => tagsRequest1InternalSchema)),
        },
      },
      {
        success: { kind: "json", schema: tagSchema },
        errorFactory: Tags.UpdateTagError,
      },
      options,
    );
  }
}

export namespace Tags {
  export type CreateTagRequest = {
    body?: TagsRequest;
  };

  export class CreateTagError extends ApiError {
    declare readonly payload:
      | Declared<"m4001", M4001>
      | Declared<"m40012", M4001>
      | Declared<"m40013", M4001>
      | Declared<"m40014", M4001>
      | Declared<"m40015", M4001>
      | Declared<"m40016", M4001>
      | Declared<"m40017", M4001>
      | Declared<"m40018", M4001>
      | Declared<"m40019", M4001>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateTagError> = [
      { on: 400, kind: "m4001", decode: { kind: "json", schema: m4001Schema } },
      { on: 401, kind: "m40012", decode: { kind: "json", schema: m4001Schema } },
      { on: 403, kind: "m40013", decode: { kind: "json", schema: m4001Schema } },
      { on: 404, kind: "m40014", decode: { kind: "json", schema: m4001Schema } },
      { on: 409, kind: "m40015", decode: { kind: "json", schema: m4001Schema } },
      { on: 410, kind: "m40016", decode: { kind: "json", schema: m4001Schema } },
      { on: 422, kind: "m40017", decode: { kind: "json", schema: m4001Schema } },
      { on: 429, kind: "m40018", decode: { kind: "json", schema: m4001Schema } },
      { on: 500, kind: "m40019", decode: { kind: "json", schema: m4001Schema } },
    ];
  }

  export type DeleteTagRequest = {
    /** The ID of the tag to delete. */
    id: string;
  };

  export class DeleteTagError extends ApiError {
    declare readonly payload:
      | Declared<"m4001", M4001>
      | Declared<"m40012", M4001>
      | Declared<"m40013", M4001>
      | Declared<"m40014", M4001>
      | Declared<"m40015", M4001>
      | Declared<"m40016", M4001>
      | Declared<"m40017", M4001>
      | Declared<"m40018", M4001>
      | Declared<"m40019", M4001>
      | Undeclared;

    static readonly errors: ErrorDecoders<DeleteTagError> = [
      { on: 400, kind: "m4001", decode: { kind: "json", schema: m4001Schema } },
      { on: 401, kind: "m40012", decode: { kind: "json", schema: m4001Schema } },
      { on: 403, kind: "m40013", decode: { kind: "json", schema: m4001Schema } },
      { on: 404, kind: "m40014", decode: { kind: "json", schema: m4001Schema } },
      { on: 409, kind: "m40015", decode: { kind: "json", schema: m4001Schema } },
      { on: 410, kind: "m40016", decode: { kind: "json", schema: m4001Schema } },
      { on: 422, kind: "m40017", decode: { kind: "json", schema: m4001Schema } },
      { on: 429, kind: "m40018", decode: { kind: "json", schema: m4001Schema } },
      { on: 500, kind: "m40019", decode: { kind: "json", schema: m4001Schema } },
    ];
  }

  export type GetTagsRequest = {
    /** The field to sort the tags by. @default SortByCodeqrIoTagsApi.Name */
    sortBy?: SortByCodeqrIoTagsApi;
    /** The order to sort the tags by. @default SortOrder.Asc */
    sortOrder?: SortOrder;
    /** The search term to filter the tags by. */
    search?: string;
    /** IDs of tags to filter by. */
    ids?: Ids;
    /** The page number for pagination. @default 1 */
    page?: number;
    /** The number of items per page. @default 100 */
    pageSize?: number;
  };

  export const getTagsRequestSchema: Schema<GetTagsRequest> = s.lazySchema(() =>
    s.object<GetTagsRequest>({
      sortBy: s.defaulted(sortByCodeqrIoTagsApiSchema, SortByCodeqrIoTagsApi.Name),
      sortOrder: s.defaulted(sortOrderSchema, SortOrder.Asc),
      search: s.optional(s.string()),
      ids: s.optional(s.lazy(() => idsSchema)),
      page: s.defaulted(s.float64().check(s.gt(0)), 1),
      pageSize: s.defaulted(s.float64().check(s.gt(0), s.lte(100)), 100),
    }),
  );

  export class GetTagsError extends ApiError {
    declare readonly payload:
      | Declared<"m4001", M4001>
      | Declared<"m40012", M4001>
      | Declared<"m40013", M4001>
      | Declared<"m40014", M4001>
      | Declared<"m40015", M4001>
      | Declared<"m40016", M4001>
      | Declared<"m40017", M4001>
      | Declared<"m40018", M4001>
      | Declared<"m40019", M4001>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetTagsError> = [
      { on: 400, kind: "m4001", decode: { kind: "json", schema: m4001Schema } },
      { on: 401, kind: "m40012", decode: { kind: "json", schema: m4001Schema } },
      { on: 403, kind: "m40013", decode: { kind: "json", schema: m4001Schema } },
      { on: 404, kind: "m40014", decode: { kind: "json", schema: m4001Schema } },
      { on: 409, kind: "m40015", decode: { kind: "json", schema: m4001Schema } },
      { on: 410, kind: "m40016", decode: { kind: "json", schema: m4001Schema } },
      { on: 422, kind: "m40017", decode: { kind: "json", schema: m4001Schema } },
      { on: 429, kind: "m40018", decode: { kind: "json", schema: m4001Schema } },
      { on: 500, kind: "m40019", decode: { kind: "json", schema: m4001Schema } },
    ];
  }

  export type UpdateTagRequest = {
    /** The ID of the tag to update. */
    id: string;
    body?: TagsRequest1;
  };

  export class UpdateTagError extends ApiError {
    declare readonly payload:
      | Declared<"m4001", M4001>
      | Declared<"m40012", M4001>
      | Declared<"m40013", M4001>
      | Declared<"m40014", M4001>
      | Declared<"m40015", M4001>
      | Declared<"m40016", M4001>
      | Declared<"m40017", M4001>
      | Declared<"m40018", M4001>
      | Declared<"m40019", M4001>
      | Undeclared;

    static readonly errors: ErrorDecoders<UpdateTagError> = [
      { on: 400, kind: "m4001", decode: { kind: "json", schema: m4001Schema } },
      { on: 401, kind: "m40012", decode: { kind: "json", schema: m4001Schema } },
      { on: 403, kind: "m40013", decode: { kind: "json", schema: m4001Schema } },
      { on: 404, kind: "m40014", decode: { kind: "json", schema: m4001Schema } },
      { on: 409, kind: "m40015", decode: { kind: "json", schema: m4001Schema } },
      { on: 410, kind: "m40016", decode: { kind: "json", schema: m4001Schema } },
      { on: 422, kind: "m40017", decode: { kind: "json", schema: m4001Schema } },
      { on: 429, kind: "m40018", decode: { kind: "json", schema: m4001Schema } },
      { on: 500, kind: "m40019", decode: { kind: "json", schema: m4001Schema } },
    ];
  }
}
