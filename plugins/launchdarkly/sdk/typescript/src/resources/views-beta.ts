import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { errorSchema, type Error } from "../models/error.js";
import { expandSchema, type Expand } from "../models/expand.js";
import { expand1Schema, type Expand1 } from "../models/expand1.js";
import { expand2Schema, type Expand2 } from "../models/expand2.js";
import { ldApiVersionSchema, type LdApiVersion } from "../models/ld-api-version.js";
import {
  linkResourceSuccessResponseSchema,
  type LinkResourceSuccessResponse,
} from "../models/link-resource-success-response.js";
import { resourceType2Schema, type ResourceType2 } from "../models/resource-type2.js";
import { sortSchema, type Sort } from "../models/sort.js";
import { Sort2, sort2Schema } from "../models/sort2.js";
import { viewLinkRequestSchema, type ViewLinkRequest } from "../models/unions/view-link-request.js";
import {
  unlinkResourceSuccessResponseSchema,
  type UnlinkResourceSuccessResponse,
} from "../models/unlink-resource-success-response.js";
import { viewLinkedResourcesSchema, type ViewLinkedResources } from "../models/view-linked-resources.js";
import { viewPatchSchema, type ViewPatch } from "../models/view-patch.js";
import { viewPostSchema, type ViewPost } from "../models/view-post.js";
import { viewSchema, type View } from "../models/view.js";
import { viewsSchema, type Views } from "../models/views.js";
import type { Servers } from "../servers.js";

/**
 * > ### This feature is in beta > > To use this feature, pass in a header including the
 * `LD-API-Version` key with value set to `beta`. Use this header with each call. To learn more,
 * read [Beta resources](https://launchdarkly.com/docs/api#beta-resources). > > Resources that are
 * in beta are still undergoing testing and development. They may change without notice, including
 * becoming backwards incompatible. The views API allows you to create, retrieve, and edit views,
 * and link other resources to views.
 *
 * A view is a resource in LaunchDarkly that you can use to logically group other resources within a
 * project, such as flags or segments. For example, views let you restrict access to sets of flags,
 * so that members of your organization can focus on just the flags they work with.
 *
 * To learn more, read [Views](https://launchdarkly.com/docs/home/account/views).
 */
export class ViewsBeta {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Create view
   *
   * @remarks
   * Create a new view in the given project.
   *
   * @returns Successful response
   *
   * @throws {@link ViewsBeta.CreateViewError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link LaunchDarklyRestApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  createView(
    request: ViewsBeta.CreateViewRequest,
    options?: RequestOptions,
  ): ApiPromise<View, ViewsBeta.CreateViewError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v2/projects/{projectKey}/views"),
        auth: this.#auth.apiKey,
        pathParams: [{ name: "projectKey", value: request.projectKey, schema: s.string() }],
        query: [],
        headers: [
          { name: "LD-API-Version", value: request.ldApiVersion, schema: ldApiVersionSchema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "json", value: request.body, schema: viewPostSchema },
      },
      {
        success: { kind: "json", schema: viewSchema },
        errorFactory: ViewsBeta.CreateViewError,
      },
      options,
    );
  }

  /**
   * Delete view
   *
   * @remarks
   * Delete a specific view by its key.
   *
   * @returns No content
   *
   * @throws {@link ViewsBeta.DeleteViewError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link LaunchDarklyRestApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  deleteView(
    request: ViewsBeta.DeleteViewRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ViewsBeta.DeleteViewError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/api/v2/projects/{projectKey}/views/{viewKey}"),
        auth: this.#auth.apiKey,
        pathParams: [
          { name: "projectKey", value: request.projectKey, schema: s.string() },
          { name: "viewKey", value: request.viewKey, schema: s.string() },
        ],
        query: [],
        headers: [
          { name: "LD-API-Version", value: request.ldApiVersion, schema: ldApiVersionSchema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: ViewsBeta.DeleteViewError,
      },
      options,
    );
  }

  /**
   * Get linked resources
   *
   * @remarks
   * Get a list of all linked resources for a given view.
   *
   * @returns Successful response
   *
   * @throws {@link ViewsBeta.GetLinkedResourcesError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link LaunchDarklyRestApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  getLinkedResources(
    request: ViewsBeta.GetLinkedResourcesRequest,
    options?: RequestOptions,
  ): ApiPromise<ViewLinkedResources, ViewsBeta.GetLinkedResourcesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/api/v2/projects/{projectKey}/views/{viewKey}/linked/{resourceType}",
        ),
        auth: this.#auth.apiKey,
        pathParams: [
          { name: "projectKey", value: request.projectKey, schema: s.string() },
          { name: "viewKey", value: request.viewKey, schema: s.string() },
          { name: "resourceType", value: request.resourceType, schema: resourceType2Schema },
        ],
        query: [
          { name: "limit", value: request.limit, schema: s.optional(s.int()) },
          { name: "offset", value: request.offset, schema: s.optional(s.int()) },
          { name: "sort", value: request.sort, schema: s.defaulted(sort2Schema, Sort2.LinkedAt) },
          { name: "query", value: request.query, schema: s.optional(s.string()) },
          { name: "filter", value: request.filter, schema: s.optional(s.string()) },
          { name: "environmentId", value: request.environmentId, schema: s.optional(s.string()) },
          { name: "expand", value: request.expand, schema: s.optional(s.array(s.lazy(() => expand2Schema))) },
        ],
        headers: [{ name: "LD-API-Version", value: request.ldApiVersion, schema: ldApiVersionSchema }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: viewLinkedResourcesSchema },
        errorFactory: ViewsBeta.GetLinkedResourcesError,
      },
      options,
    );
  }

  /**
   * Get linked views for a given resource
   *
   * @remarks
   * Get a list of all linked views for a resource. Flags, AI configs and metrics are identified by
   * key. Segments are identified by segment ID.
   *
   * @returns Successful response
   *
   * @throws {@link ViewsBeta.GetLinkedViewsError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link LaunchDarklyRestApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  getLinkedViews(
    request: ViewsBeta.GetLinkedViewsRequest,
    options?: RequestOptions,
  ): ApiPromise<Views, ViewsBeta.GetLinkedViewsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/api/v2/projects/{projectKey}/view-associations/{resourceType}/{resourceKey}",
        ),
        auth: this.#auth.apiKey,
        pathParams: [
          { name: "projectKey", value: request.projectKey, schema: s.string() },
          { name: "resourceType", value: request.resourceType, schema: resourceType2Schema },
          { name: "resourceKey", value: request.resourceKey, schema: s.string() },
        ],
        query: [
          { name: "environmentId", value: request.environmentId, schema: s.optional(s.string()) },
          { name: "limit", value: request.limit, schema: s.optional(s.int()) },
          { name: "offset", value: request.offset, schema: s.optional(s.int()) },
        ],
        headers: [{ name: "LD-API-Version", value: request.ldApiVersion, schema: ldApiVersionSchema }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: viewsSchema },
        errorFactory: ViewsBeta.GetLinkedViewsError,
      },
      options,
    );
  }

  /**
   * Get view
   *
   * @remarks
   * Retrieve a specific view by its key.
   *
   * @returns Successful response
   *
   * @throws {@link ViewsBeta.GetViewError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link LaunchDarklyRestApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  getView(
    request: ViewsBeta.GetViewRequest,
    options?: RequestOptions,
  ): ApiPromise<View, ViewsBeta.GetViewError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v2/projects/{projectKey}/views/{viewKey}"),
        auth: this.#auth.apiKey,
        pathParams: [
          { name: "projectKey", value: request.projectKey, schema: s.string() },
          { name: "viewKey", value: request.viewKey, schema: s.string() },
        ],
        query: [
          { name: "sort", value: request.sort, schema: s.optional(s.lazy(() => sortSchema)) },
          { name: "limit", value: request.limit, schema: s.optional(s.int()) },
          { name: "offset", value: request.offset, schema: s.optional(s.int()) },
          { name: "filter", value: request.filter, schema: s.optional(s.string()) },
          { name: "expand", value: request.expand, schema: s.optional(s.array(s.lazy(() => expand1Schema))) },
        ],
        headers: [{ name: "LD-API-Version", value: request.ldApiVersion, schema: ldApiVersionSchema }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: viewSchema },
        errorFactory: ViewsBeta.GetViewError,
      },
      options,
    );
  }

  /**
   * List views
   *
   * @remarks
   * Get a list of all views in the given project.
   *
   * @returns Successful response
   *
   * @throws {@link ViewsBeta.GetViewsError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link LaunchDarklyRestApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  getViews(
    request: ViewsBeta.GetViewsRequest,
    options?: RequestOptions,
  ): ApiPromise<Views, ViewsBeta.GetViewsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v2/projects/{projectKey}/views"),
        auth: this.#auth.apiKey,
        pathParams: [{ name: "projectKey", value: request.projectKey, schema: s.string() }],
        query: [
          { name: "sort", value: request.sort, schema: s.optional(s.lazy(() => sortSchema)) },
          { name: "limit", value: request.limit, schema: s.optional(s.int()) },
          { name: "offset", value: request.offset, schema: s.optional(s.int()) },
          { name: "filter", value: request.filter, schema: s.optional(s.string()) },
          { name: "expand", value: request.expand, schema: s.optional(s.array(s.lazy(() => expandSchema))) },
        ],
        headers: [{ name: "LD-API-Version", value: request.ldApiVersion, schema: ldApiVersionSchema }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: viewsSchema },
        errorFactory: ViewsBeta.GetViewsError,
      },
      options,
    );
  }

  /**
   * Link resource
   *
   * @remarks
   * Link one or multiple resources to a view by keys, filters, or both:
   * - Link flags using flag keys or filters (maintainerId, maintainerTeamKey, tags, state, query)
   * - Link AI Configs using AI Config keys
   * - Link metrics using metric keys
   * - Link segments using segment IDs or filters (tags, query, unbounded)
   *
   * When both keys and filters are provided, resources matching either condition are linked
   * (union).
   *
   * @returns Successful response
   *
   * @throws {@link ViewsBeta.LinkResourceError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link LaunchDarklyRestApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  linkResource(
    request: ViewsBeta.LinkResourceRequest,
    options?: RequestOptions,
  ): ApiPromise<LinkResourceSuccessResponse, ViewsBeta.LinkResourceError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default(
          "/api/v2/projects/{projectKey}/views/{viewKey}/link/{resourceType}",
        ),
        auth: this.#auth.apiKey,
        pathParams: [
          { name: "projectKey", value: request.projectKey, schema: s.string() },
          { name: "viewKey", value: request.viewKey, schema: s.string() },
          { name: "resourceType", value: request.resourceType, schema: resourceType2Schema },
        ],
        query: [],
        headers: [
          { name: "LD-API-Version", value: request.ldApiVersion, schema: ldApiVersionSchema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "json", value: request.body, schema: viewLinkRequestSchema },
      },
      {
        success: { kind: "json", schema: linkResourceSuccessResponseSchema },
        errorFactory: ViewsBeta.LinkResourceError,
      },
      options,
    );
  }

  /**
   * Unlink resource
   *
   * @remarks
   * Unlink one or multiple resources from a view:
   * - Unlink flags using flag keys
   * - Unlink segments using segment IDs
   * - Unlink AI Configs using AI Config keys
   * - Unlink metrics using metric keys
   *
   * @returns Successful response with unlink details
   *
   * @throws {@link ViewsBeta.UnlinkResourceError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link LaunchDarklyRestApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  unlinkResource(
    request: ViewsBeta.UnlinkResourceRequest,
    options?: RequestOptions,
  ): ApiPromise<UnlinkResourceSuccessResponse, ViewsBeta.UnlinkResourceError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default(
          "/api/v2/projects/{projectKey}/views/{viewKey}/link/{resourceType}",
        ),
        auth: this.#auth.apiKey,
        pathParams: [
          { name: "projectKey", value: request.projectKey, schema: s.string() },
          { name: "viewKey", value: request.viewKey, schema: s.string() },
          { name: "resourceType", value: request.resourceType, schema: resourceType2Schema },
        ],
        query: [],
        headers: [
          { name: "LD-API-Version", value: request.ldApiVersion, schema: ldApiVersionSchema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "json", value: request.body, schema: viewLinkRequestSchema },
      },
      {
        success: { kind: "json", schema: unlinkResourceSuccessResponseSchema },
        errorFactory: ViewsBeta.UnlinkResourceError,
      },
      options,
    );
  }

  /**
   * Update view
   *
   * @remarks
   * Edit an existing view.
   *
   * The request body must be a JSON object of the fields to update. The values you include replace
   * the existing values for the fields.
   *
   * Here's an example:
   *   ```
   *     {
   *       "description": "Example updated description",
   *       "tags": ["new-tag"]
   *     }
   *   ```
   *
   * @returns Successful response
   *
   * @throws {@link ViewsBeta.UpdateViewError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link LaunchDarklyRestApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  updateView(
    request: ViewsBeta.UpdateViewRequest,
    options?: RequestOptions,
  ): ApiPromise<View, ViewsBeta.UpdateViewError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default("/api/v2/projects/{projectKey}/views/{viewKey}"),
        auth: this.#auth.apiKey,
        pathParams: [
          { name: "projectKey", value: request.projectKey, schema: s.string() },
          { name: "viewKey", value: request.viewKey, schema: s.string() },
        ],
        query: [],
        headers: [
          { name: "LD-API-Version", value: request.ldApiVersion, schema: ldApiVersionSchema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "json", value: request.body, schema: viewPatchSchema },
      },
      {
        success: { kind: "json", schema: viewSchema },
        errorFactory: ViewsBeta.UpdateViewError,
      },
      options,
    );
  }
}

export namespace ViewsBeta {
  export type CreateViewRequest = {
    projectKey: string;
    /** Version of the endpoint. */
    ldApiVersion: LdApiVersion;
    /** View object to create */
    body: ViewPost;
  };

  export class CreateViewError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateViewError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error4", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type DeleteViewRequest = {
    projectKey: string;
    viewKey: string;
    /** Version of the endpoint. */
    ldApiVersion: LdApiVersion;
  };

  export class DeleteViewError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<DeleteViewError> = [
      { on: 403, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error3", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetLinkedResourcesRequest = {
    projectKey: string;
    viewKey: string;
    resourceType: ResourceType2;
    /** The number of views to return. */
    limit?: number;
    /**
     * Where to start in the list. Use this with pagination. For example, an offset of 10 skips the
     * first ten items and then returns the next items in the list, up to the query `limit`.
     */
    offset?: number;
    /**
     * Field to sort by. Default field is `linkedAt`, default order is ascending.
     *
     * @default Sort2.LinkedAt
     */
    sort?: Sort2;
    /**
     * Case-insensitive search query for linked resources. Matches resource key and, when expanded,
     * resource name.
     */
    query?: string;
    /**
     * Optional resource filter expression for linked resources.
     * - Supported for `flags` and `segments` resource types.
     * - Uses the same syntax as link/unlink and list endpoints.
     * - For `segments`, `environmentId` is required when `filter` is provided.
     * - Rejected for `aiConfigs` and `metrics`.
     */
    filter?: string;
    /**
     * Environment ID used for segment filter resolution. Required when `resourceType=segments` and
     * `filter` is provided.
     */
    environmentId?: string;
    /** A comma-separated list of fields to expand. */
    expand?: Expand2[];
    /** Version of the endpoint. */
    ldApiVersion: LdApiVersion;
  };

  export class GetLinkedResourcesError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetLinkedResourcesError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error4", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetLinkedViewsRequest = {
    projectKey: string;
    resourceType: ResourceType2;
    resourceKey: string;
    /** Environment ID. Required when resourceType is 'segments' */
    environmentId?: string;
    /** The number of views to return. */
    limit?: number;
    /**
     * Where to start in the list. Use this with pagination. For example, an offset of 10 skips the
     * first ten items and then returns the next items in the list, up to the query `limit`.
     */
    offset?: number;
    /** Version of the endpoint. */
    ldApiVersion: LdApiVersion;
  };

  export class GetLinkedViewsError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetLinkedViewsError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error4", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetViewRequest = {
    projectKey: string;
    viewKey: string;
    /** A sort to apply to the list of views. */
    sort?: Sort;
    /** The number of views to return. */
    limit?: number;
    /**
     * Where to start in the list. Use this with pagination. For example, an offset of 10 skips the
     * first ten items and then returns the next items in the list, up to the query `limit`.
     */
    offset?: number;
    /**
     * A filter to apply to the list of views. Supports the following fields and operators: `name`
     * (equals, notEquals, startsWith, contains, anyOf), `key` (equals, notEquals, startsWith,
     * contains, anyOf), `tag` (equals, anyOf), `maintainerId` (equals, anyOf), `isPayloadView`
     * (equals).
     */
    filter?: string;
    /** A comma-separated list of fields to expand. */
    expand?: Expand1[];
    /** Version of the endpoint. */
    ldApiVersion: LdApiVersion;
  };

  export class GetViewError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetViewError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error4", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetViewsRequest = {
    projectKey: string;
    /** A sort to apply to the list of views. */
    sort?: Sort;
    /** The number of views to return. */
    limit?: number;
    /**
     * Where to start in the list. Use this with pagination. For example, an offset of 10 skips the
     * first ten items and then returns the next items in the list, up to the query `limit`.
     */
    offset?: number;
    /**
     * A filter to apply to the list of views. Supports the following fields and operators: `name`
     * (equals, notEquals, startsWith, contains, anyOf), `key` (equals, notEquals, startsWith,
     * contains, anyOf), `tag` (equals, anyOf), `maintainerId` (equals, anyOf), `isPayloadView`
     * (equals).
     */
    filter?: string;
    /** A comma-separated list of fields to expand. */
    expand?: Expand[];
    /** Version of the endpoint. */
    ldApiVersion: LdApiVersion;
  };

  export class GetViewsError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetViewsError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error4", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type LinkResourceRequest = {
    projectKey: string;
    viewKey: string;
    resourceType: ResourceType2;
    /** Version of the endpoint. */
    ldApiVersion: LdApiVersion;
    /**
     * Resources to link to the view. You can provide explicit keys/IDs, filters, or both.
     * - Flags: identified by key or filtered by maintainerId, maintainerTeamKey, tags, state, query
     * - Segments: identified by segment ID or filtered by tags, query, unbounded
     * - AI configs and metrics: identified by key
     */
    body: ViewLinkRequest;
  };

  export class LinkResourceError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<LinkResourceError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error4", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type UnlinkResourceRequest = {
    projectKey: string;
    viewKey: string;
    resourceType: ResourceType2;
    /** Version of the endpoint. */
    ldApiVersion: LdApiVersion;
    /**
     * The resource to link to the view. Flags are identified by key. Segments are identified by
     * segment ID.
     */
    body: ViewLinkRequest;
  };

  export class UnlinkResourceError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<UnlinkResourceError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error4", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type UpdateViewRequest = {
    projectKey: string;
    viewKey: string;
    /** Version of the endpoint. */
    ldApiVersion: LdApiVersion;
    /** A JSON representation of the view including only the fields to update. */
    body: ViewPatch;
  };

  export class UpdateViewError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<UpdateViewError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error4", decode: { kind: "json", schema: errorSchema } },
    ];
  }
}
