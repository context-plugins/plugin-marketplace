import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import * as s from "../core/validation/index.js";
import {
  knowledgeBaseKnowledgeHubNodes400Error1Schema,
  type KnowledgeBaseKnowledgeHubNodes400Error1,
} from "../models/knowledge-base-knowledge-hub-nodes400-error1.js";
import {
  knowledgeBaseKnowledgeHubNodes401Error1Schema,
  type KnowledgeBaseKnowledgeHubNodes401Error1,
} from "../models/knowledge-base-knowledge-hub-nodes401-error1.js";
import {
  knowledgeBaseKnowledgeHubNodes403Error1Schema,
  type KnowledgeBaseKnowledgeHubNodes403Error1,
} from "../models/knowledge-base-knowledge-hub-nodes403-error1.js";
import {
  knowledgeBaseKnowledgeHubNodes404Error1Schema,
  type KnowledgeBaseKnowledgeHubNodes404Error1,
} from "../models/knowledge-base-knowledge-hub-nodes404-error1.js";
import {
  knowledgeBaseKnowledgeHubNodes500Error1Schema,
  type KnowledgeBaseKnowledgeHubNodes500Error1,
} from "../models/knowledge-base-knowledge-hub-nodes500-error1.js";
import {
  knowledgeHubNodesResponseSchema,
  type KnowledgeHubNodesResponse,
} from "../models/knowledge-hub-nodes-response.js";
import { parentTypeSchema, type ParentType } from "../models/parent-type.js";
import { SortBy2, sortBy2Schema } from "../models/sort-by2.js";
import { SortOrder, sortOrderSchema } from "../models/sort-order.js";
import type { Servers } from "../servers.js";

/**
 * Unified browse API for root and child nodes (apps, record groups, folders, records) with
 * filtering and search
 */
export class KnowledgeHub {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Get knowledge hub child nodes
   *
   * @remarks
   * Returns the children of a specific node in the knowledge hub tree. Use this endpoint to drill
   * down into Collections, connector app hierarchies, folders, and record groups.
   *
   * **Navigation hierarchy**
   *
   * The typical drill-down path is:
   * 1. Root apps (`GET /knowledgeBase/knowledge-hub/nodes`)
   * 2. Record groups / folders within an app (`parentType=app`)
   * 3. Records within a record group (`parentType=recordGroup`)
   * 4. Sub-records or attachments within a record (`parentType=record`)
   *
   * **Parent identification**
   *
   * - `parentType` must be one of: `app`, `recordGroup`, `folder`, `record`
   * - `parentId` must be a standard UUID
   *
   * **Filtering and searching**
   *
   * All query-param filters from the root endpoint are available here and operate within the scope
   * of the parent node's subtree. When `q` is provided, the search spans all descendants of the
   * parent node.
   *
   * **Response extras**
   *
   * When `include=breadcrumbs` is set, the response contains a `breadcrumbs` array tracing the path
   * from the root to the current node. The `currentNode` and `parentNode` objects are always
   * populated for non-root requests.
   *
   * **Access control**
   *
   * Requires a valid bearer token. For OAuth tokens the `kb:read` scope must be present; regular
   * JWT bearer tokens pass through without scope enforcement.
   *
   * @returns Paginated children of `{parentType}/{parentId}`. HTTP 200 returns `success: true` and
   * `error: null`; see `KnowledgeHubNodesResponse` for the full shape. `id` and `currentNode`
   * reflect the parent being browsed; `parentNode` is set when a grandparent exists. Optional
   * sections (`availableFilters`, `counts`, `permissions`, `breadcrumbs`) are JSON `null` unless
   * listed in `include` and populated by the server.
   *
   * @throws {@link KnowledgeHub.GetKnowledgeHubChildNodesError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link PipesHubApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   *
   * @deprecated
   */
  getKnowledgeHubChildNodes(
    request: KnowledgeHub.GetKnowledgeHubChildNodesRequest,
    options?: RequestOptions,
  ): ApiPromise<KnowledgeHubNodesResponse, KnowledgeHub.GetKnowledgeHubChildNodesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/knowledgeBase/knowledge-hub/nodes/{parentType}/{parentId}"),
        auth: anyAuth(
          this.#auth.bearerAuth,
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
        ),
        pathParams: [
          { name: "parentType", value: request.parentType, schema: parentTypeSchema },
          { name: "parentId", value: request.parentId, schema: s.string() },
        ],
        query: [
          { name: "onlyContainers", value: request.onlyContainers, schema: s.defaulted(s.boolean(), false) },
          { name: "page", value: request.page, schema: s.defaulted(s.int(), 1) },
          { name: "cursor", value: request.cursor, schema: s.optional(s.string()) },
          { name: "limit", value: request.limit, schema: s.defaulted(s.int(), 50) },
          { name: "sortBy", value: request.sortBy, schema: s.defaulted(sortBy2Schema, SortBy2.UpdatedAt) },
          {
            name: "sortOrder",
            value: request.sortOrder,
            schema: s.defaulted(sortOrderSchema, SortOrder.Desc),
          },
          { name: "q", value: request.q, schema: s.optional(s.string()) },
          { name: "nodeTypes", value: request.nodeTypes, schema: s.optional(s.string()) },
          { name: "recordTypes", value: request.recordTypes, schema: s.optional(s.string()) },
          { name: "origins", value: request.origins, schema: s.optional(s.string()) },
          { name: "connectorIds", value: request.connectorIds, schema: s.optional(s.string()) },
          { name: "indexingStatus", value: request.indexingStatus, schema: s.optional(s.string()) },
          { name: "createdAt", value: request.createdAt, schema: s.optional(s.string()) },
          { name: "updatedAt", value: request.updatedAt, schema: s.optional(s.string()) },
          { name: "size", value: request.size, schema: s.optional(s.string()) },
          { name: "flattened", value: request.flattened, schema: s.optional(s.boolean()) },
          { name: "include", value: request.include, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: knowledgeHubNodesResponseSchema },
        errorFactory: KnowledgeHub.GetKnowledgeHubChildNodesError,
      },
      options,
    );
  }

  /**
   * Get knowledge hub root nodes
   *
   * @remarks
   * Returns root-level nodes (connector apps and Collection apps) or, when filters or search are
   * applied, a flat list of matching nodes across the entire knowledge hub tree.
   *
   * **Overview**
   *
   * The Knowledge Hub provides a unified view across all knowledge sources:
   * - **Collection** — locally uploaded knowledge bases (`origin: COLLECTION`)
   * - **Connector app** — external connector instances such as Google Drive, Slack, Confluence,
   *   Jira (`origin: CONNECTOR`)
   *
   * Use this endpoint to build file-browser UIs and sidebar navigation trees.
   *
   * **Browsing vs. searching**
   *
   * When no filters or search query are provided, only top-level app nodes are returned. Adding
   * `nodeTypes`, `q`, or other filter params triggers a search across the full tree, returning
   * matching nodes regardless of depth.
   *
   * For children of a specific node, use `GET
   * /knowledgeBase/knowledge-hub/nodes/{parentType}/{parentId}`.
   *
   * **Pagination and sorting**
   *
   * Results are always paginated. Default sort is `updatedAt` descending. The `pagination` object
   * in the response contains `hasNext` / `hasPrev` flags suitable for infinite-scroll or page-based
   * navigation.
   *
   * **Expanding the response**
   *
   * Use the `include` parameter to request additional sections:
   * - `availableFilters` — adds `filters.available` with all filter options
   * - `counts` — adds a `counts` summary broken down by node type
   * - `breadcrumbs` — adds the breadcrumb trail (empty at root level)
   * - `permissions` — adds the caller's permission flags
   *
   * **Access control**
   *
   * Requires a valid bearer token. For OAuth tokens the `kb:read` scope must be present; regular
   * JWT bearer tokens pass through without scope enforcement.
   *
   * @returns Paginated list of root hub nodes (connector apps and Collections). HTTP 200 returns
   * `success: true` and `error: null`. Field-level detail and required keys are defined on
   * `KnowledgeHubNodesResponse`. Use `include` for optional sections: `availableFilters`, `counts`,
   * `permissions` — each stays JSON `null` when not asked for. `breadcrumbs` stays `null` at this
   * route (no parent in the path), even if `include` lists `breadcrumbs`; use the child route for
   * trails. `id`, `currentNode`, and `parentNode` are `null` here.
   *
   * @throws {@link KnowledgeHub.GetKnowledgeHubRootNodesError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link PipesHubApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   *
   * @deprecated
   */
  getKnowledgeHubRootNodes(
    request: KnowledgeHub.GetKnowledgeHubRootNodesRequest,
    options?: RequestOptions,
  ): ApiPromise<KnowledgeHubNodesResponse, KnowledgeHub.GetKnowledgeHubRootNodesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/knowledgeBase/knowledge-hub/nodes"),
        auth: anyAuth(
          this.#auth.bearerAuth,
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
        ),
        pathParams: [],
        query: [
          { name: "onlyContainers", value: request.onlyContainers, schema: s.defaulted(s.boolean(), false) },
          { name: "page", value: request.page, schema: s.defaulted(s.int(), 1) },
          { name: "cursor", value: request.cursor, schema: s.optional(s.string()) },
          { name: "limit", value: request.limit, schema: s.defaulted(s.int(), 50) },
          { name: "sortBy", value: request.sortBy, schema: s.defaulted(sortBy2Schema, SortBy2.UpdatedAt) },
          {
            name: "sortOrder",
            value: request.sortOrder,
            schema: s.defaulted(sortOrderSchema, SortOrder.Desc),
          },
          { name: "q", value: request.q, schema: s.optional(s.string()) },
          { name: "nodeTypes", value: request.nodeTypes, schema: s.optional(s.string()) },
          { name: "recordTypes", value: request.recordTypes, schema: s.optional(s.string()) },
          { name: "origins", value: request.origins, schema: s.optional(s.string()) },
          { name: "connectorIds", value: request.connectorIds, schema: s.optional(s.string()) },
          { name: "indexingStatus", value: request.indexingStatus, schema: s.optional(s.string()) },
          { name: "createdAt", value: request.createdAt, schema: s.optional(s.string()) },
          { name: "updatedAt", value: request.updatedAt, schema: s.optional(s.string()) },
          { name: "size", value: request.size, schema: s.optional(s.string()) },
          { name: "flattened", value: request.flattened, schema: s.optional(s.boolean()) },
          { name: "include", value: request.include, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: knowledgeHubNodesResponseSchema },
        errorFactory: KnowledgeHub.GetKnowledgeHubRootNodesError,
      },
      options,
    );
  }
}

export namespace KnowledgeHub {
  export type GetKnowledgeHubChildNodesRequest = {
    /**
     * Type of the parent node whose children to retrieve.
     *
     * Must be one of: `app`, `recordGroup`, `folder`, `record`. Any other value returns a 400
     * error.
     */
    parentType: ParentType;
    /**
     * Identifier of the parent node. Must be a valid UUID (e.g.
     * `f3a4b5b6-5b6c-4e85-9097-3202cfe696fc`).
     *
     * Any value that does not match this format returns a 400 error.
     */
    parentId: string;
    /**
     * When `true`, only nodes that have children are returned (useful for building sidebar / tree
     * navigation). Leaf nodes are excluded.
     *
     * @default false
     */
    onlyContainers?: boolean;
    /**
     * Page number (1-indexed, at most 50). Combined with `limit` to paginate results. Prefer
     * `cursor`: a page number is reached by reading the pages before it.
     *
     * @default 1
     */
    page?: number;
    /**
     * Opaque cursor from `pagination.nextCursor` or `pagination.prevCursor` of a previous response.
     * Send it with the same path, filters and sort as the request that returned it; a cursor issued
     * for another place, user or listing mode is refused with 400.
     */
    cursor?: string;
    /** Maximum number of items to return per page. @default 50 */
    limit?: number;
    /**
     * Field to sort results by. Omitted → default `updatedAt`. Unknown value → silently falls back
     * to `name`.
     *
     * @default SortBy2.UpdatedAt
     */
    sortBy?: SortBy2;
    /**
     * Sort direction. Omitted → default `desc`. Unknown value → silently falls back to `asc`.
     *
     * @default SortOrder.Desc
     */
    sortOrder?: SortOrder;
    /**
     * Full-text search query. Must be between 2 and 500 characters (inclusive). When provided, the
     * endpoint searches across all descendants of the parent node.
     */
    q?: string;
    /**
     * Comma-separated list of node types to include. Invalid values are silently ignored. Maximum
     * 100 items.
     *
     * Valid values: `folder`, `app`, `recordGroup`, `record`
     */
    nodeTypes?: string;
    /**
     * Comma-separated list of record types to include. Invalid values are silently ignored. Maximum
     * 100 items.
     *
     * Valid values: `FILE`, `DRIVE`, `WEBPAGE`, `DATABASE`, `DATASOURCE`, `MESSAGE`, `MAIL`,
     * `GROUP_MAIL`, `TICKET`, `COMMENT`, `INLINE_COMMENT`, `CONFLUENCE_PAGE`,
     * `CONFLUENCE_BLOGPOST`, `SHAREPOINT_PAGE`, `SHAREPOINT_LIST`, `SHAREPOINT_LIST_ITEM`,
     * `SHAREPOINT_DOCUMENT_LIBRARY`, `LINK`, `PROJECT`, `PULL_REQUEST`, `MEETING`, `PRODUCT`,
     * `DEAL`, `CASE`, `TASK`, `ARTIFACT`, `CODE_FILE`, `SQL_TABLE`, `SQL_VIEW`, `OTHERS`
     */
    recordTypes?: string;
    /**
     * Comma-separated list of origin types to include. Invalid values are silently ignored. Maximum
     * 100 items.
     *
     * Valid values: `COLLECTION`, `CONNECTOR`
     */
    origins?: string;
    /**
     * Comma-separated list of connector instance IDs (UUIDs) to filter by. Maximum 100 items. No
     * enum validation — any string is accepted, but non-existent IDs simply yield zero results.
     */
    connectorIds?: string;
    /**
     * Comma-separated list of indexing statuses to include. Invalid values are silently ignored.
     * Maximum 100 items.
     *
     * Valid values: `NOT_STARTED`, `PAUSED`, `IN_PROGRESS`, `COMPLETED`, `FAILED`,
     * `FILE_TYPE_NOT_SUPPORTED`, `AUTO_INDEX_OFF`, `EMPTY`, `ENABLE_MULTIMODAL_MODELS`, `QUEUED`
     */
    indexingStatus?: string;
    /**
     * Created-date range filter. Format: `gte:<epochMs>,lte:<epochMs>`. Both bounds are optional
     * (you may send just `gte:...` or just `lte:...`). Timestamps must be in the range 0 to
     * 9999999999999 and `gte` must be less than or equal to `lte` when both are present.
     */
    createdAt?: string;
    /** Updated-date range filter. Same format and constraints as `createdAt`. */
    updatedAt?: string;
    /**
     * File-size range filter in bytes. Format: `gte:<bytes>,lte:<bytes>`. Both bounds are optional.
     * Values must be non-negative and at most 1099511627776 (1 TB). `gte` must be less than or
     * equal to `lte` when both are present.
     */
    size?: string;
    /**
     * Force flattened/recursive search (`true`) or direct top-level listing (`false`). When
     * omitted, it's computed from whether any of `q`, `nodeTypes`, `recordTypes`, `origins`,
     * `connectorIds`, `indexingStatus`, `createdAt`, `updatedAt`, or `size` are present — if any
     * are, results are flattened automatically; otherwise only top-level nodes are returned.
     */
    flattened?: boolean;
    /**
     * Comma-separated list of additional response sections to include. Invalid values are silently
     * ignored. Maximum 100 items.
     *
     * Valid values: `breadcrumbs`, `counts`, `availableFilters`, `permissions`
     */
    include?: string;
  };

  export class GetKnowledgeHubChildNodesError extends ApiError {
    declare readonly payload:
      | Declared<"knowledgeBaseKnowledgeHubNodes400Error1", KnowledgeBaseKnowledgeHubNodes400Error1>
      | Declared<"knowledgeBaseKnowledgeHubNodes401Error1", KnowledgeBaseKnowledgeHubNodes401Error1>
      | Declared<"knowledgeBaseKnowledgeHubNodes403Error1", KnowledgeBaseKnowledgeHubNodes403Error1>
      | Declared<"knowledgeBaseKnowledgeHubNodes404Error1", KnowledgeBaseKnowledgeHubNodes404Error1>
      | Declared<"knowledgeBaseKnowledgeHubNodes500Error1", KnowledgeBaseKnowledgeHubNodes500Error1>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetKnowledgeHubChildNodesError> = [
      {
        on: 400,
        kind: "knowledgeBaseKnowledgeHubNodes400Error1",
        decode: { kind: "json", schema: knowledgeBaseKnowledgeHubNodes400Error1Schema },
      },
      {
        on: 401,
        kind: "knowledgeBaseKnowledgeHubNodes401Error1",
        decode: { kind: "json", schema: knowledgeBaseKnowledgeHubNodes401Error1Schema },
      },
      {
        on: 403,
        kind: "knowledgeBaseKnowledgeHubNodes403Error1",
        decode: { kind: "json", schema: knowledgeBaseKnowledgeHubNodes403Error1Schema },
      },
      {
        on: 404,
        kind: "knowledgeBaseKnowledgeHubNodes404Error1",
        decode: { kind: "json", schema: knowledgeBaseKnowledgeHubNodes404Error1Schema },
      },
      {
        on: 500,
        kind: "knowledgeBaseKnowledgeHubNodes500Error1",
        decode: { kind: "json", schema: knowledgeBaseKnowledgeHubNodes500Error1Schema },
      },
    ];
  }

  export type GetKnowledgeHubRootNodesRequest = {
    /**
     * When `true`, only nodes that have children are returned (useful for building sidebar / tree
     * navigation). Leaf nodes are excluded.
     *
     * @default false
     */
    onlyContainers?: boolean;
    /**
     * Page number (1-indexed, at most 50). Combined with `limit` to paginate results. Prefer
     * `cursor`: a page number is reached by reading the pages before it.
     *
     * @default 1
     */
    page?: number;
    /**
     * Opaque cursor from `pagination.nextCursor` or `pagination.prevCursor` of a previous response.
     * Send it with the same path, filters and sort as the request that returned it; a cursor issued
     * for another place, user or listing mode is refused with 400.
     */
    cursor?: string;
    /** Maximum number of items to return per page. @default 50 */
    limit?: number;
    /**
     * Field to sort results by. Omitted → default `updatedAt`. Unknown value → silently falls back
     * to `name`.
     *
     * @default SortBy2.UpdatedAt
     */
    sortBy?: SortBy2;
    /**
     * Sort direction. Omitted → default `desc`. Unknown value → silently falls back to `asc`.
     *
     * @default SortOrder.Desc
     */
    sortOrder?: SortOrder;
    /**
     * Full-text search query. Must be between 2 and 500 characters (inclusive). When provided, the
     * endpoint searches across the entire node tree regardless of the current browse level.
     */
    q?: string;
    /**
     * Comma-separated list of node types to include. Invalid values are silently ignored. Maximum
     * 100 items.
     *
     * Valid values: `folder`, `app`, `recordGroup`, `record`
     */
    nodeTypes?: string;
    /**
     * Comma-separated list of record types to include. Invalid values are silently ignored. Maximum
     * 100 items.
     *
     * Valid values: `FILE`, `DRIVE`, `WEBPAGE`, `DATABASE`, `DATASOURCE`, `MESSAGE`, `MAIL`,
     * `GROUP_MAIL`, `TICKET`, `COMMENT`, `INLINE_COMMENT`, `CONFLUENCE_PAGE`,
     * `CONFLUENCE_BLOGPOST`, `SHAREPOINT_PAGE`, `SHAREPOINT_LIST`, `SHAREPOINT_LIST_ITEM`,
     * `SHAREPOINT_DOCUMENT_LIBRARY`, `LINK`, `PROJECT`, `PULL_REQUEST`, `MEETING`, `PRODUCT`,
     * `DEAL`, `CASE`, `TASK`, `ARTIFACT`, `CODE_FILE`, `SQL_TABLE`, `SQL_VIEW`, `OTHERS`
     */
    recordTypes?: string;
    /**
     * Comma-separated list of origin types to include. Invalid values are silently ignored. Maximum
     * 100 items.
     *
     * Valid values: `COLLECTION`, `CONNECTOR`
     */
    origins?: string;
    /**
     * Comma-separated list of connector instance IDs (UUIDs) to filter by. Maximum 100 items. No
     * enum validation — any string is accepted, but non-existent IDs simply yield zero results.
     */
    connectorIds?: string;
    /**
     * Comma-separated list of indexing statuses to include. Invalid values are silently ignored.
     * Maximum 100 items.
     *
     * Valid values: `NOT_STARTED`, `PAUSED`, `IN_PROGRESS`, `COMPLETED`, `FAILED`,
     * `FILE_TYPE_NOT_SUPPORTED`, `AUTO_INDEX_OFF`, `EMPTY`, `ENABLE_MULTIMODAL_MODELS`, `QUEUED`
     */
    indexingStatus?: string;
    /**
     * Created-date range filter. Format: `gte:<epochMs>,lte:<epochMs>`. Both bounds are optional
     * (you may send just `gte:...` or just `lte:...`). Timestamps must be in the range 0 to
     * 9999999999999 and `gte` must be less than or equal to `lte` when both are present.
     */
    createdAt?: string;
    /** Updated-date range filter. Same format and constraints as `createdAt`. */
    updatedAt?: string;
    /**
     * File-size range filter in bytes. Format: `gte:<bytes>,lte:<bytes>`. Both bounds are optional.
     * Values must be non-negative and at most 1099511627776 (1 TB). `gte` must be less than or
     * equal to `lte` when both are present.
     */
    size?: string;
    /**
     * Force flattened/recursive search (`true`) or direct top-level listing (`false`). When
     * omitted, it's computed from whether any of `q`, `nodeTypes`, `recordTypes`, `origins`,
     * `connectorIds`, `indexingStatus`, `createdAt`, `updatedAt`, or `size` are present — if any
     * are, results are flattened automatically; otherwise only top-level nodes are returned.
     */
    flattened?: boolean;
    /**
     * Comma-separated list of additional response sections to include. Invalid values are silently
     * ignored. Maximum 100 items.
     *
     * Valid values: `breadcrumbs`, `counts`, `availableFilters`, `permissions`
     */
    include?: string;
  };

  export class GetKnowledgeHubRootNodesError extends ApiError {
    declare readonly payload:
      | Declared<"knowledgeBaseKnowledgeHubNodes400Error1", KnowledgeBaseKnowledgeHubNodes400Error1>
      | Declared<"knowledgeBaseKnowledgeHubNodes401Error1", KnowledgeBaseKnowledgeHubNodes401Error1>
      | Declared<"knowledgeBaseKnowledgeHubNodes403Error1", KnowledgeBaseKnowledgeHubNodes403Error1>
      | Declared<"knowledgeBaseKnowledgeHubNodes500Error1", KnowledgeBaseKnowledgeHubNodes500Error1>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetKnowledgeHubRootNodesError> = [
      {
        on: 400,
        kind: "knowledgeBaseKnowledgeHubNodes400Error1",
        decode: { kind: "json", schema: knowledgeBaseKnowledgeHubNodes400Error1Schema },
      },
      {
        on: 401,
        kind: "knowledgeBaseKnowledgeHubNodes401Error1",
        decode: { kind: "json", schema: knowledgeBaseKnowledgeHubNodes401Error1Schema },
      },
      {
        on: 403,
        kind: "knowledgeBaseKnowledgeHubNodes403Error1",
        decode: { kind: "json", schema: knowledgeBaseKnowledgeHubNodes403Error1Schema },
      },
      {
        on: 500,
        kind: "knowledgeBaseKnowledgeHubNodes500Error1",
        decode: { kind: "json", schema: knowledgeBaseKnowledgeHubNodes500Error1Schema },
      },
    ];
  }
}
