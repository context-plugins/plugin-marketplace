import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { FileInput } from "../core/binary.js";
import type { EventStream } from "../core/event-stream.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  deleteKnowledgeBaseByIdSchema,
  type DeleteKnowledgeBaseById,
} from "../models/delete-knowledge-base-by-id.js";
import {
  deleteRecordResponseSchemaSchema,
  type DeleteRecordResponseSchema,
} from "../models/delete-record-response-schema.js";
import { errorResponseSchema, type ErrorResponse } from "../models/error-response.js";
import {
  folderCreateResponseSchemaSchema,
  type FolderCreateResponseSchema,
} from "../models/folder-create-response-schema.js";
import {
  folderDeleteResponseSchemaSchema,
  type FolderDeleteResponseSchema,
} from "../models/folder-delete-response-schema.js";
import {
  folderUpdateResponseSchemaSchema,
  type FolderUpdateResponseSchema,
} from "../models/folder-update-response-schema.js";
import {
  getAllKnowledgeBaseResponseSchemaSchema,
  type GetAllKnowledgeBaseResponseSchema,
} from "../models/get-all-knowledge-base-response-schema.js";
import { getKnowledgeBaseByIdSchema, type GetKnowledgeBaseById } from "../models/get-knowledge-base-by-id.js";
import {
  getRecordByIdResponseSchemaSchema,
  type GetRecordByIdResponseSchema,
} from "../models/get-record-by-id-response-schema.js";
import {
  knowledgeBaseCreateResponseSchema,
  type KnowledgeBaseCreateResponse,
} from "../models/knowledge-base-create-response.js";
import {
  knowledgeBaseFolderRequestSchema,
  type KnowledgeBaseFolderRequest,
} from "../models/knowledge-base-folder-request.js";
import {
  knowledgeBaseFolderRequest1Schema,
  type KnowledgeBaseFolderRequest1,
} from "../models/knowledge-base-folder-request1.js";
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
  knowledgeBaseMoveRecordRequestBodySchema,
  type KnowledgeBaseMoveRecordRequestBody,
} from "../models/knowledge-base-move-record-request-body.js";
import {
  knowledgeBaseMoveRecordResponseSchema,
  type KnowledgeBaseMoveRecordResponse,
} from "../models/knowledge-base-move-record-response.js";
import {
  knowledgeBaseRecordResponseSchema,
  type KnowledgeBaseRecordResponse,
} from "../models/knowledge-base-record-response.js";
import { knowledgeBaseRequestSchema, type KnowledgeBaseRequest } from "../models/knowledge-base-request.js";
import {
  knowledgeBaseRequest1Schema,
  type KnowledgeBaseRequest1,
} from "../models/knowledge-base-request1.js";
import {
  knowledgeHubNodesResponseSchema,
  type KnowledgeHubNodesResponse,
} from "../models/knowledge-hub-nodes-response.js";
import {
  listTrashResponseSchemaSchema,
  type ListTrashResponseSchema,
} from "../models/list-trash-response-schema.js";
import { parentTypeSchema, type ParentType } from "../models/parent-type.js";
import {
  reIndexRecordGroupResponseSchemaSchema,
  type ReIndexRecordGroupResponseSchema,
} from "../models/re-index-record-group-response-schema.js";
import {
  reIndexRecordResponseSchemaSchema,
  type ReIndexRecordResponseSchema,
} from "../models/re-index-record-response-schema.js";
import {
  reindexRecordGroupRequestBodySchema,
  type ReindexRecordGroupRequestBody,
} from "../models/reindex-record-group-request-body.js";
import {
  reindexRecordRequestBodySchema,
  type ReindexRecordRequestBody,
} from "../models/reindex-record-request-body.js";
import {
  restoreRecordResponseSchemaSchema,
  type RestoreRecordResponseSchema,
} from "../models/restore-record-response-schema.js";
import {
  restoreRecordsRequestBodySchema,
  type RestoreRecordsRequestBody,
} from "../models/restore-records-request-body.js";
import {
  restoreRecordsResponseSchemaSchema,
  type RestoreRecordsResponseSchema,
} from "../models/restore-records-response-schema.js";
import { SortBy, sortBySchema } from "../models/sort-by.js";
import { SortBy2, sortBy2Schema } from "../models/sort-by2.js";
import { SortOrder, sortOrderSchema } from "../models/sort-order.js";
import {
  streamRecordErrorResponseSchema,
  type StreamRecordErrorResponse,
} from "../models/stream-record-error-response.js";
import {
  knowledgeBaseStreamRecordResponseSchema,
  type KnowledgeBaseStreamRecordResponse,
} from "../models/unions/knowledge-base-stream-record-response.js";
import {
  updateKnowledgeBaseByIdSchema,
  type UpdateKnowledgeBaseById,
} from "../models/update-knowledge-base-by-id.js";
import {
  uploadLimitsResponseSchemaSchema,
  type UploadLimitsResponseSchema,
} from "../models/upload-limits-response-schema.js";
import { uploadStreamSseEventSchema, type UploadStreamSseEvent } from "../models/upload-stream-sse-event.js";
import type { Servers } from "../servers.js";

/**
 * Knowledge base management operations
 */
export class KnowledgeBaseApi {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Create folder
   *
   * @remarks
   * Create a folder in a knowledge base. Omit `folderId` to create at the KB root; pass `folderId`
   * as a query parameter to create a nested subfolder inside an existing parent folder.
   *
   * **Required permission:** WRITER or higher
   *
   * **Folder features:**
   *
   * - Organize records hierarchically
   * - Support nested subfolders (unlimited depth)
   * - Inherit parent KB permissions
   *
   * **Naming rules:**
   *
   * - 1–255 characters
   * - XSS protection applied
   * - Spaces and special characters allowed
   * - Duplicate names rejected within the same parent (`409`)
   *
   * **Response:** Returns `id` and `name` for the created folder.
   *
   * @returns Folder created successfully
   *
   * @throws {@link KnowledgeBaseApi.CreateFolderError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link PipesHubApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createFolder(
    request: KnowledgeBaseApi.CreateFolderRequest,
    options?: RequestOptions,
  ): ApiPromise<FolderCreateResponseSchema, KnowledgeBaseApi.CreateFolderError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/knowledgeBase/{kbId}/folder"),
        auth: anyAuth(
          this.#auth.bearerAuth,
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
        ),
        pathParams: [{ name: "kbId", value: request.kbId, schema: s.string() }],
        query: [{ name: "folderId", value: request.folderId, schema: s.optional(s.string()) }],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: knowledgeBaseFolderRequestSchema },
      },
      {
        success: { kind: "json", schema: folderCreateResponseSchemaSchema },
        errorFactory: KnowledgeBaseApi.CreateFolderError,
      },
      options,
    );
  }

  /**
   * Create a new knowledge base
   *
   * @remarks
   * Create a new knowledge base for organizing and managing documents within your organization.
   *
   * **Overview:**
   *
   * A knowledge base is a container for organizing related documents, files, and content. It
   * provides a central location for teams to collaborate on shared information.
   *
   * **Features:**
   *
   * - Hierarchical folder structure support
   * - Role-based access control (OWNER, WRITER, READER)
   * - Full-text search across all records
   * - Integration with external connectors (Google Drive, OneDrive, etc.)
   * - Automatic content indexing for AI-powered search
   *
   * **Naming Rules:**
   *
   * - Name must be 1-255 characters
   * - Special characters and HTML tags are sanitized
   * - Names don't need to be unique within organization
   *
   * **Creator Permissions:**
   *
   * The user creating the KB automatically becomes the OWNER with full administrative rights.
   *
   * @returns Knowledge base created successfully
   *
   * @throws {@link KnowledgeBaseApi.CreateKnowledgeBaseError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link PipesHubApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createKnowledgeBase(
    request: KnowledgeBaseApi.CreateKnowledgeBaseRequest,
    options?: RequestOptions,
  ): ApiPromise<KnowledgeBaseCreateResponse, KnowledgeBaseApi.CreateKnowledgeBaseError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/knowledgeBase"),
        auth: anyAuth(
          this.#auth.bearerAuth,
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
        ),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: knowledgeBaseRequestSchema },
      },
      {
        success: { kind: "json", schema: knowledgeBaseCreateResponseSchema },
        errorFactory: KnowledgeBaseApi.CreateKnowledgeBaseError,
      },
      options,
    );
  }

  /**
   * Delete folder
   *
   * @remarks
   * Delete a folder and all its contents.
   *
   * **Required permission:** WRITER or higher
   *
   * **Cascade delete:**
   *
   * All subfolders and records within will be permanently deleted.
   *
   * **Warning:** This action is irreversible.
   *
   * @returns Folder deleted successfully
   *
   * @throws {@link KnowledgeBaseApi.DeleteFolderError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link PipesHubApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteFolder(
    request: KnowledgeBaseApi.DeleteFolderRequest,
    options?: RequestOptions,
  ): ApiPromise<FolderDeleteResponseSchema, KnowledgeBaseApi.DeleteFolderError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/knowledgeBase/{kbId}/folder/{folderId}"),
        auth: anyAuth(
          this.#auth.bearerAuth,
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
        ),
        pathParams: [
          { name: "kbId", value: request.kbId, schema: s.string() },
          { name: "folderId", value: request.folderId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: folderDeleteResponseSchemaSchema },
        errorFactory: KnowledgeBaseApi.DeleteFolderError,
      },
      options,
    );
  }

  /**
   * Delete knowledge base
   *
   * @remarks
   * Permanently delete a knowledge base and all its contents.
   *
   * **Required permission:**
   *
   * User must have `OWNER` role on the knowledge base.
   *
   * **What gets deleted:**
   *
   * - All folders within the KB
   * - All records and their indexed content
   * - All permission grants
   * - Associated storage files
   *
   * **Warning:** This action is irreversible. Consider exporting data before deletion.
   *
   * @returns Knowledge base deleted successfully
   *
   * @throws {@link KnowledgeBaseApi.DeleteKnowledgeBaseError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link PipesHubApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteKnowledgeBase(
    request: KnowledgeBaseApi.DeleteKnowledgeBaseRequest,
    options?: RequestOptions,
  ): ApiPromise<DeleteKnowledgeBaseById, KnowledgeBaseApi.DeleteKnowledgeBaseError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/knowledgeBase/{kbId}"),
        auth: anyAuth(
          this.#auth.bearerAuth,
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
        ),
        pathParams: [{ name: "kbId", value: request.kbId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: deleteKnowledgeBaseByIdSchema },
        errorFactory: KnowledgeBaseApi.DeleteKnowledgeBaseError,
      },
      options,
    );
  }

  /**
   * Delete record
   *
   * @remarks
   * Delete a record from the knowledge base.
   *
   * **Required permission:**
   *
   * WRITER or higher
   *
   * **What gets deleted:**
   *
   * - Record metadata
   * - Associated storage file
   * - Indexed content and embeddings
   *
   * **Trash:** With "Move Deleted Records to the Trash" on in Labs, the record goes to the trash
   * instead: it disappears from search, chat and lists at once, its embeddings are removed, and the
   * record and its file stay until the scheduled purge. The response then carries `softDeleted:
   * true` and the `batchId`, and the record can be brought back with `POST
   * /knowledgeBase/record/{recordId}/restore`. With the setting off, the delete is immediate and
   * cannot be undone.
   *
   * @returns Record deleted successfully
   *
   * @throws {@link KnowledgeBaseApi.DeleteRecordError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link PipesHubApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteRecord(
    request: KnowledgeBaseApi.DeleteRecordRequest,
    options?: RequestOptions,
  ): ApiPromise<DeleteRecordResponseSchema, KnowledgeBaseApi.DeleteRecordError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/knowledgeBase/record/{recordId}"),
        auth: anyAuth(
          this.#auth.bearerAuth,
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
        ),
        pathParams: [{ name: "recordId", value: request.recordId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: deleteRecordResponseSchemaSchema },
        errorFactory: KnowledgeBaseApi.DeleteRecordError,
      },
      options,
    );
  }

  /**
   * Get knowledge base by ID
   *
   * @remarks
   * Retrieve detailed information about a specific knowledge base.
   *
   * **Overview:**
   *
   * Returns complete KB metadata including name, timestamps, root-level folders, and the requesting
   * user's role.
   *
   * **Access Control:**
   *
   * User must have at least READER permission to view KB details.
   *
   * @returns Knowledge base retrieved successfully
   *
   * @throws {@link KnowledgeBaseApi.GetKnowledgeBaseError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link PipesHubApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getKnowledgeBase(
    request: KnowledgeBaseApi.GetKnowledgeBaseRequest,
    options?: RequestOptions,
  ): ApiPromise<GetKnowledgeBaseById, KnowledgeBaseApi.GetKnowledgeBaseError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/knowledgeBase/{kbId}"),
        auth: anyAuth(
          this.#auth.bearerAuth,
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
        ),
        pathParams: [{ name: "kbId", value: request.kbId, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: getKnowledgeBaseByIdSchema },
        errorFactory: KnowledgeBaseApi.GetKnowledgeBaseError,
      },
      options,
    );
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
   * @throws {@link KnowledgeBaseApi.GetKnowledgeHubChildNodesError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link PipesHubApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   *
   * @deprecated
   */
  getKnowledgeHubChildNodes(
    request: KnowledgeBaseApi.GetKnowledgeHubChildNodesRequest,
    options?: RequestOptions,
  ): ApiPromise<KnowledgeHubNodesResponse, KnowledgeBaseApi.GetKnowledgeHubChildNodesError> {
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
        errorFactory: KnowledgeBaseApi.GetKnowledgeHubChildNodesError,
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
   * @throws {@link KnowledgeBaseApi.GetKnowledgeHubRootNodesError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link PipesHubApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   *
   * @deprecated
   */
  getKnowledgeHubRootNodes(
    request: KnowledgeBaseApi.GetKnowledgeHubRootNodesRequest,
    options?: RequestOptions,
  ): ApiPromise<KnowledgeHubNodesResponse, KnowledgeBaseApi.GetKnowledgeHubRootNodesError> {
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
        errorFactory: KnowledgeBaseApi.GetKnowledgeHubRootNodesError,
      },
      options,
    );
  }

  /**
   * Get record by ID
   *
   * @remarks
   * Retrieve detailed information about a specific record.
   *
   * **Overview:**
   *
   * Returns complete record metadata including name, type, indexing status, storage information,
   * and version history.
   *
   * **File conversion:**
   *
   * Use the optional `convertTo` parameter to request file format conversion (e.g., PDF to text).
   * Supported conversions include PPT to PDF and PPTX to PDF.
   *
   * @returns Successful operation
   *
   * @throws {@link KnowledgeBaseApi.GetRecordByIdError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link PipesHubApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getRecordById(
    request: KnowledgeBaseApi.GetRecordByIdRequest,
    options?: RequestOptions,
  ): ApiPromise<GetRecordByIdResponseSchema, KnowledgeBaseApi.GetRecordByIdError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/knowledgeBase/record/{recordId}"),
        auth: anyAuth(
          this.#auth.bearerAuth,
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
        ),
        pathParams: [{ name: "recordId", value: request.recordId, schema: s.string() }],
        query: [{ name: "convertTo", value: request.convertTo, schema: s.optional(s.string()) }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: getRecordByIdResponseSchemaSchema },
        errorFactory: KnowledgeBaseApi.GetRecordByIdError,
      },
      options,
    );
  }

  /**
   * Get knowledge base upload limits
   *
   * @remarks
   * Retrieve current upload constraints for the organization.
   *
   * **Use case:** Call this before uploads to validate file sizes on the client side and display
   * appropriate limits to users.
   *
   * @returns Upload limits retrieved
   *
   * @throws {@link KnowledgeBaseApi.GetUploadLimitsError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link PipesHubApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getUploadLimits(
    options?: RequestOptions,
  ): ApiPromise<UploadLimitsResponseSchema, KnowledgeBaseApi.GetUploadLimitsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/knowledgeBase/limits"),
        auth: anyAuth(
          this.#auth.bearerAuth,
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
        ),
        pathParams: [],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: uploadLimitsResponseSchemaSchema },
        errorFactory: KnowledgeBaseApi.GetUploadLimitsError,
      },
      options,
    );
  }

  /**
   * List all knowledge bases
   *
   * @remarks
   * Retrieve a paginated list of all knowledge bases accessible to the authenticated user.
   *
   * **Overview:**
   *
   * Returns knowledge bases where the user has at least READER permission. Results include the
   * user's role for each KB.
   *
   * **Filtering:**
   *
   * - **search:** Full-text search on KB names (max 1000 chars)
   * - **permissions:** Filter by user's role (comma-separated: OWNER, WRITER, READER)
   *
   * **Sorting Options:**
   *
   * - `name` — Alphabetical by KB name
   * - `createdAtTimestamp` — By creation date
   * - `updatedAtTimestamp` — By last modification
   * - `userRole` — By permission level
   *
   * **Performance:**
   *
   * Uses efficient pagination with limit/offset. For large result sets, use smaller page sizes.
   *
   * **Query parameters:**
   *
   * Only `page`, `limit`, `search`, `permissions`, `sortBy`, and `sortOrder` are allowed; unknown
   * query keys are rejected.
   *
   * @returns Successful operation
   *
   * @throws {@link KnowledgeBaseApi.ListKnowledgeBasesError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link PipesHubApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listKnowledgeBases(
    request: KnowledgeBaseApi.ListKnowledgeBasesRequest,
    options?: RequestOptions,
  ): ApiPromise<GetAllKnowledgeBaseResponseSchema, KnowledgeBaseApi.ListKnowledgeBasesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/knowledgeBase"),
        auth: anyAuth(
          this.#auth.bearerAuth,
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
        ),
        pathParams: [],
        query: [
          { name: "page", value: request.page, schema: s.defaulted(s.int(), 1) },
          { name: "limit", value: request.limit, schema: s.defaulted(s.int(), 20) },
          { name: "search", value: request.search, schema: s.optional(s.string()) },
          { name: "permissions", value: request.permissions, schema: s.optional(s.string()) },
          { name: "sortBy", value: request.sortBy, schema: s.defaulted(sortBySchema, SortBy.Name) },
          {
            name: "sortOrder",
            value: request.sortOrder,
            schema: s.defaulted(sortOrderSchema, SortOrder.Asc),
          },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: getAllKnowledgeBaseResponseSchemaSchema },
        errorFactory: KnowledgeBaseApi.ListKnowledgeBasesError,
      },
      options,
    );
  }

  /**
   * List a collection's recently deleted items
   *
   * @remarks
   * One page of what was deleted from a collection and can still be restored, newest first. Each
   * item is what one delete removed, as a restore brings it back whole: a folder deleted with its
   * contents is one item, and so is a multi-select delete (`rootCount` items selected, some named
   * in `otherRootNames`). `itemCount` says how many records it holds. Restore an item with `POST
   * /knowledgeBase/record/{recordId}/restore`, using its `id`.
   *
   * Needs "Move Deleted Records to the Trash" on in Labs.
   *
   * **Who sees what:** the list holds what the caller may restore. OWNER and WRITER see every item;
   * FILEORGANIZER sees single files only; other roles are refused. The workspace and user always
   * come from the sign-in.
   *
   * **Removed for good:** the scheduled cleanup may remove an item from `removableAfterTimestamp`
   * on (at least 14 days after it was deleted by default; it runs every 14 days, so an item stays
   * 14 to 28 days). It is absent when the retention settings can't be read.
   *
   * An item whose folder is also in the trash (`parentInTrash`) can only be restored after that
   * folder.
   *
   * @returns One page of recently deleted items
   *
   * @throws {@link KnowledgeBaseApi.ListTrashError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link PipesHubApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listTrash(
    request: KnowledgeBaseApi.ListTrashRequest,
    options?: RequestOptions,
  ): ApiPromise<ListTrashResponseSchema, KnowledgeBaseApi.ListTrashError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/knowledgeBase/{kbId}/trash"),
        auth: anyAuth(
          this.#auth.bearerAuth,
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
        ),
        pathParams: [{ name: "kbId", value: request.kbId, schema: s.string() }],
        query: [
          { name: "page", value: request.page, schema: s.defaulted(s.int(), 1) },
          { name: "limit", value: request.limit, schema: s.defaulted(s.int(), 25) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listTrashResponseSchemaSchema },
        errorFactory: KnowledgeBaseApi.ListTrashError,
      },
      options,
    );
  }

  /**
   * Move record to another location
   *
   * @remarks
   * Move a file or folder record to a different location within the same knowledge base.
   *
   * Set `newParentId` to a folder ID to move the record into that folder, or `null` to move it to
   * the knowledge base root.
   *
   * **Required Permission:** OWNER or WRITER
   *
   * @returns Record moved successfully
   *
   * @throws {@link KnowledgeBaseApi.MoveRecordError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link PipesHubApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  moveRecord(
    request: KnowledgeBaseApi.MoveRecordRequest,
    options?: RequestOptions,
  ): ApiPromise<KnowledgeBaseMoveRecordResponse, KnowledgeBaseApi.MoveRecordError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default("/knowledgeBase/{kbId}/record/{recordId}/move"),
        auth: anyAuth(
          this.#auth.bearerAuth,
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
        ),
        pathParams: [
          { name: "kbId", value: request.kbId, schema: s.string() },
          { name: "recordId", value: request.recordId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: knowledgeBaseMoveRecordRequestBodySchema },
      },
      {
        success: { kind: "json", schema: knowledgeBaseMoveRecordResponseSchema },
        errorFactory: KnowledgeBaseApi.MoveRecordError,
      },
      options,
    );
  }

  /**
   * Reindex single record
   *
   * @remarks
   * Trigger reindexing for a specific record.
   *
   * **Overview:**
   *
   * Reprocesses the record's content to update search indexes and AI embeddings. Useful after
   * content changes or to fix indexing failures.
   *
   * **Depth parameter:**
   *
   * Controls processing depth for complex documents (`-1` for full depth, `0`–`100` for limited).
   *
   * **Status filters:**
   *
   * Optional `statusFilters` array limits reindex to records in matching indexing states (e.g.
   * `FAILED`, `AUTO_INDEX_OFF`).
   *
   * @returns Reindexing triggered successfully
   *
   * @throws {@link KnowledgeBaseApi.ReindexRecordError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link PipesHubApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  reindexRecord(
    request: KnowledgeBaseApi.ReindexRecordRequest,
    options?: RequestOptions,
  ): ApiPromise<ReIndexRecordResponseSchema, KnowledgeBaseApi.ReindexRecordError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/knowledgeBase/reindex/record/{recordId}"),
        auth: anyAuth(
          this.#auth.bearerAuth,
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
        ),
        pathParams: [{ name: "recordId", value: request.recordId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => reindexRecordRequestBodySchema)),
        },
      },
      {
        success: { kind: "json", schema: reIndexRecordResponseSchemaSchema },
        errorFactory: KnowledgeBaseApi.ReindexRecordError,
      },
      options,
    );
  }

  /**
   * Reindex record group
   *
   * @remarks
   * Trigger reindexing for all records in a folder or knowledge base.
   *
   * **Overview:**
   *
   * Batch reindex operation for entire containers. The `recordGroupId` can be a folder ID or KB ID.
   *
   * **Status filters:**
   *
   * Optional `statusFilters` limit which child records are queued (e.g. failed-only or
   * manual-indexing).
   *
   * @returns Reindexing triggered for all records in group
   *
   * @throws {@link KnowledgeBaseApi.ReindexRecordGroupError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link PipesHubApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  reindexRecordGroup(
    request: KnowledgeBaseApi.ReindexRecordGroupRequest,
    options?: RequestOptions,
  ): ApiPromise<ReIndexRecordGroupResponseSchema, KnowledgeBaseApi.ReindexRecordGroupError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/knowledgeBase/reindex/record-group/{recordGroupId}"),
        auth: anyAuth(
          this.#auth.bearerAuth,
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
        ),
        pathParams: [{ name: "recordGroupId", value: request.recordGroupId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => reindexRecordGroupRequestBodySchema)),
        },
      },
      {
        success: { kind: "json", schema: reIndexRecordGroupResponseSchemaSchema },
        errorFactory: KnowledgeBaseApi.ReindexRecordGroupError,
      },
      options,
    );
  }

  /**
   * Restore a deleted record
   *
   * @remarks
   * Bring a record back from the trash, together with everything deleted in the same action: a
   * folder comes back with its contents, a file with its attachments, a multi-select delete with
   * every item it removed.
   *
   * Needs "Move Deleted Records to the Trash" on in Labs.
   *
   * **Required permission:** the role the delete needed. A single file needs OWNER, WRITER or
   * FILEORGANIZER on its collection; a folder or several items need OWNER or WRITER.
   *
   * **Names:** an item whose name another item next to it now uses comes back as "name (restored)"
   * (a file keeps its extension: "report (restored).pdf").
   *
   * **Search:** restored files are indexed again, so they return to search and chat once indexing
   * finishes. `reindexPending` lists any that could not be queued; reindex those by hand. A file
   * that is back but whose indexing never started is queued again when it is restored again, and
   * the indexing service queues it on its own after about an hour.
   *
   * A record that is not in the trash answers 200 with nothing restored.
   *
   * @returns Record restored, with everything deleted along with it
   *
   * @throws {@link KnowledgeBaseApi.RestoreRecordError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link PipesHubApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  restoreRecord(
    request: KnowledgeBaseApi.RestoreRecordRequest,
    options?: RequestOptions,
  ): ApiPromise<RestoreRecordResponseSchema, KnowledgeBaseApi.RestoreRecordError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/knowledgeBase/record/{recordId}/restore"),
        auth: anyAuth(
          this.#auth.bearerAuth,
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
        ),
        pathParams: [{ name: "recordId", value: request.recordId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: restoreRecordResponseSchemaSchema },
        errorFactory: KnowledgeBaseApi.RestoreRecordError,
      },
      options,
    );
  }

  /**
   * Restore several deleted records
   *
   * @remarks
   * Restore up to 100 records from the trash. Each id is restored as `POST
   * /knowledgeBase/record/{recordId}/restore` restores it, with everything deleted along with it;
   * ids from one delete are restored once. Every id gets its own outcome in `results`, so one
   * refusal does not hold the others back, and the answer is 200 whatever the outcomes.
   *
   * @returns Outcome for each requested record
   *
   * @throws {@link KnowledgeBaseApi.RestoreRecordsError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link PipesHubApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  restoreRecords(
    request: KnowledgeBaseApi.RestoreRecordsRequest,
    options?: RequestOptions,
  ): ApiPromise<RestoreRecordsResponseSchema, KnowledgeBaseApi.RestoreRecordsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/knowledgeBase/records/restore"),
        auth: anyAuth(
          this.#auth.bearerAuth,
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
        ),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: restoreRecordsRequestBodySchema },
      },
      {
        success: { kind: "json", schema: restoreRecordsResponseSchemaSchema },
        errorFactory: KnowledgeBaseApi.RestoreRecordsError,
      },
      options,
    );
  }

  /**
   * Stream record content
   *
   * @remarks
   * Stream the binary content of a record's file.
   *
   * **Overview:**
   *
   * Returns the raw file content with appropriate `Content-Type` and `Content-Disposition` headers
   * for download or inline viewing.
   *
   * **Use cases:**
   *
   * - File downloads
   * - Inline document preview
   * - Content extraction pipelines
   *
   * **Format conversion:**
   *
   * Use the `convertTo` parameter to convert between formats (e.g. DOCX to PDF).
   *
   * @returns File content stream
   *
   * @throws {@link KnowledgeBaseApi.StreamRecordBufferError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link PipesHubApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  streamRecordBuffer(
    request: KnowledgeBaseApi.StreamRecordBufferRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, KnowledgeBaseApi.StreamRecordBufferError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/knowledgeBase/stream/record/{recordId}"),
        auth: anyAuth(
          this.#auth.bearerAuth,
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
        ),
        pathParams: [{ name: "recordId", value: request.recordId, schema: s.string() }],
        query: [
          { name: "convertTo", value: request.convertTo, schema: s.optional(s.string()) },
          { name: "version", value: request.version, schema: s.optional(s.int()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: KnowledgeBaseApi.StreamRecordBufferError,
      },
      options,
    );
  }

  /**
   * Update folder
   *
   * @remarks
   * Rename a folder.
   *
   * **Required permission:** WRITER or higher
   *
   * @returns Folder updated successfully
   *
   * @throws {@link KnowledgeBaseApi.UpdateFolderError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link PipesHubApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateFolder(
    request: KnowledgeBaseApi.UpdateFolderRequest,
    options?: RequestOptions,
  ): ApiPromise<FolderUpdateResponseSchema, KnowledgeBaseApi.UpdateFolderError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default("/knowledgeBase/{kbId}/folder/{folderId}"),
        auth: anyAuth(
          this.#auth.bearerAuth,
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
        ),
        pathParams: [
          { name: "kbId", value: request.kbId, schema: s.string() },
          { name: "folderId", value: request.folderId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: knowledgeBaseFolderRequest1Schema },
      },
      {
        success: { kind: "json", schema: folderUpdateResponseSchemaSchema },
        errorFactory: KnowledgeBaseApi.UpdateFolderError,
      },
      options,
    );
  }

  /**
   * Update knowledge base
   *
   * @remarks
   * Update a knowledge base's name.
   *
   * **Required permission:**
   *
   * User must have one of `OWNER` or `WRITER` on the knowledge base.
   *
   * **Validation:**
   *
   * - `kbId` path parameter must be a valid UUID (`updateKBSchema`)
   * - When provided, `kbName` must be 1–255 characters
   * - XSS and format-specifier checks are applied to `kbName` in the gateway controller
   *
   * @returns Knowledge base updated successfully
   *
   * @throws {@link KnowledgeBaseApi.UpdateKnowledgeBaseError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link PipesHubApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateKnowledgeBase(
    request: KnowledgeBaseApi.UpdateKnowledgeBaseRequest,
    options?: RequestOptions,
  ): ApiPromise<UpdateKnowledgeBaseById, KnowledgeBaseApi.UpdateKnowledgeBaseError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default("/knowledgeBase/{kbId}"),
        auth: anyAuth(
          this.#auth.bearerAuth,
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
        ),
        pathParams: [{ name: "kbId", value: request.kbId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: knowledgeBaseRequest1Schema },
      },
      {
        success: { kind: "json", schema: updateKnowledgeBaseByIdSchema },
        errorFactory: KnowledgeBaseApi.UpdateKnowledgeBaseError,
      },
      options,
    );
  }

  /**
   * Update record
   *
   * @remarks
   * Update a record's name and/or file content.
   *
   * **Overview:**
   *
   * Allows updating the display name and optionally replacing the file content. Triggers
   * re-indexing when content changes.
   *
   * **Required permission:**
   *
   * WRITER or higher
   *
   * **Updating file content:**
   *
   * Include a new file in the request to replace the existing content. The file extension must
   * match the original.
   *
   * **Side effects:**
   *
   * - Updates `updatedAtTimestamp`
   * - Increments version if file content changed
   * - Triggers re-indexing for content changes
   *
   * **OAuth scopes:** `kb:write`, plus `kb:read`: replacing the file first reads the record and its
   * knowledge base with the caller's token.
   *
   * @returns Record updated successfully
   *
   * @throws {@link KnowledgeBaseApi.UpdateRecordError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link PipesHubApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateRecord(
    request: KnowledgeBaseApi.UpdateRecordRequest,
    options?: RequestOptions,
  ): ApiPromise<KnowledgeBaseRecordResponse, KnowledgeBaseApi.UpdateRecordError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default("/knowledgeBase/record/{recordId}"),
        auth: anyAuth(
          this.#auth.bearerAuth,
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
        ),
        pathParams: [{ name: "recordId", value: request.recordId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "multipart",
          value: [
            { kind: "text", name: "recordName", value: request.recordName, schema: s.optional(s.string()) },
            { kind: "file", name: "file", value: request.file },
          ],
        },
      },
      {
        success: { kind: "json", schema: knowledgeBaseRecordResponseSchema },
        errorFactory: KnowledgeBaseApi.UpdateRecordError,
      },
      options,
    );
  }

  /**
   * Upload files to knowledge base or folder
   *
   * @remarks
   * Upload one or more files to a knowledge base root or to a specific folder.
   *
   * **Overview**
   *
   * Batch upload multiple files in a single request. Each file becomes a new record with automatic
   * content indexing. Omit the `folderId` query parameter to upload to the KB root; include it to
   * upload into that folder.
   *
   * **Upload Limits**
   *
   * - **Max files per request:** 1000
   * - **Default max file size:** 30MB (configurable via platform settings)
   * - Use `GET /knowledgeBase/limits` to check current limits
   *
   * **Supported File Types**
   *
   * Documents (PDF, DOCX, DOC, XLS, XLSX, PPT, PPTX, TXT, CSV, MD), Images (PNG, JPG, JPEG, SVG,
   * WebP), Web (HTML, HTM), and Google Workspace formats.
   *
   * **File Metadata**
   *
   * Use `files_metadata` to provide additional info like file paths and last modified timestamps.
   *
   * **Versioning**
   *
   * Set `isVersioned: true` to enable version tracking for uploaded files.
   *
   * **Streaming response**
   *
   * This endpoint responds with `Content-Type: text/event-stream`. The upload and its per-file
   * progress are a single request: the body streams a `file:succeeded` or `file:failed` event per
   * file (including files rejected up front for size/type), followed by a final `done` summary,
   * then closes. See the `UploadStreamSSEEvent` schema for the event/payload contract.
   *
   * @returns SSE stream (`text/event-stream`) of per-file upload outcomes. The stream emits
   * `file:succeeded` / `file:failed` per file and a final `done` summary, then closes. See
   * `UploadStreamSSEEvent`.
   *
   * @throws {@link KnowledgeBaseApi.UploadRecordsError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link PipesHubApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  uploadRecords(
    request: KnowledgeBaseApi.UploadRecordsRequest,
    options?: RequestOptions,
  ): ApiPromise<EventStream<UploadStreamSseEvent>, KnowledgeBaseApi.UploadRecordsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/knowledgeBase/{kbId}/upload"),
        auth: anyAuth(
          this.#auth.bearerAuth,
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
        ),
        pathParams: [{ name: "kbId", value: request.kbId, schema: s.string() }],
        query: [{ name: "folderId", value: request.folderId, schema: s.optional(s.string()) }],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "multipart",
          value: [
            { kind: "file", name: "files", value: request.files },
            {
              kind: "text",
              name: "files_metadata",
              value: request.filesMetadata,
              schema: s.optional(s.string()),
            },
            {
              kind: "text",
              name: "isVersioned",
              value: request.isVersioned,
              schema: s.defaulted(s.boolean(), true),
            },
            {
              kind: "text",
              name: "recordType",
              value: request.recordType,
              schema: s.defaulted(s.string(), "FILE"),
            },
          ],
        },
      },
      {
        success: { kind: "eventStreamJson", dataSchema: uploadStreamSseEventSchema },
        errorFactory: KnowledgeBaseApi.UploadRecordsError,
      },
      options,
    );
  }
}

export namespace KnowledgeBaseApi {
  export type CreateFolderRequest = {
    /** Knowledge base ID */
    kbId: string;
    /** Parent folder ID. Omit to create at the knowledge base root. */
    folderId?: string;
    /** Request payload */
    body: KnowledgeBaseFolderRequest;
  };

  export class CreateFolderError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Declared<"errorResponse5", ErrorResponse>
      | Declared<"errorResponse6", ErrorResponse>
      | Declared<"errorResponse7", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateFolderError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 409, kind: "errorResponse5", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse6", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 503, kind: "errorResponse7", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type CreateKnowledgeBaseRequest = {
    /** Request payload */
    body: KnowledgeBaseRequest;
  };

  export class CreateKnowledgeBaseError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Declared<"errorResponse5", ErrorResponse>
      | Declared<"errorResponse6", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateKnowledgeBaseError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse5", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 503, kind: "errorResponse6", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type DeleteFolderRequest = {
    kbId: string;
    folderId: string;
  };

  export class DeleteFolderError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<DeleteFolderError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type DeleteKnowledgeBaseRequest = {
    /** Knowledge base ID (non-empty string) */
    kbId: string;
  };

  export class DeleteKnowledgeBaseError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Declared<"errorResponse5", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<DeleteKnowledgeBaseError> = [
      { on: 401, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 503, kind: "errorResponse5", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type DeleteRecordRequest = {
    /** Record ID */
    recordId: string;
  };

  export class DeleteRecordError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Declared<"errorResponse5", ErrorResponse>
      | Declared<"errorResponse6", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<DeleteRecordError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse5", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 503, kind: "errorResponse6", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type GetKnowledgeBaseRequest = {
    /** Knowledge base ID (non-empty string) */
    kbId: string;
  };

  export class GetKnowledgeBaseError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Declared<"errorResponse5", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetKnowledgeBaseError> = [
      { on: 401, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 503, kind: "errorResponse5", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

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

  export type GetRecordByIdRequest = {
    /** Record ID */
    recordId: string;
    /**
     * Optional format to convert the file to (e.g., PDF to text). Supported conversions include PPT
     * to PDF and PPTX to PDF.
     */
    convertTo?: string;
  };

  export class GetRecordByIdError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Declared<"errorResponse5", ErrorResponse>
      | Declared<"errorResponse6", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetRecordByIdError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse5", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 503, kind: "errorResponse6", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export class GetUploadLimitsError extends ApiError {
    declare readonly payload: Declared<"errorResponse", ErrorResponse> | Undeclared;

    static readonly errors: ErrorDecoders<GetUploadLimitsError> = [
      { on: 401, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type ListKnowledgeBasesRequest = {
    /** Page number (1-indexed). Omitted values default to 1. @default 1 */
    page?: number;
    /** Results per page (max 100). Omitted values default to 20. @default 20 */
    limit?: number;
    /**
     * Search KB names (max 1000 chars). Rejected if it contains HTML/script tags, event handlers,
     * `javascript:`, or format specifiers (validated in Zod + controller).
     */
    search?: string;
    /**
     * Comma-separated permission roles to filter by. Each token must be one of: OWNER, WRITER,
     * READER.
     */
    permissions?: string;
    /** Field to sort by. @default SortBy.Name */
    sortBy?: SortBy;
    /** Sort direction. @default SortOrder.Asc */
    sortOrder?: SortOrder;
  };

  export class ListKnowledgeBasesError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Declared<"errorResponse5", ErrorResponse>
      | Declared<"errorResponse6", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListKnowledgeBasesError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse5", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 503, kind: "errorResponse6", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type ListTrashRequest = {
    /** Collection (knowledge base) ID */
    kbId: string;
    /** @default 1 */
    page?: number;
    /** @default 25 */
    limit?: number;
  };

  export class ListTrashError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Declared<"errorResponse5", ErrorResponse>
      | Declared<"errorResponse6", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListTrashError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse5", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 503, kind: "errorResponse6", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type MoveRecordRequest = {
    /** Knowledge base UUID */
    kbId: string;
    /** Record identifier (file or folder) */
    recordId: string;
    /** Target location for the record */
    body: KnowledgeBaseMoveRecordRequestBody;
  };

  export class MoveRecordError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Declared<"errorResponse5", ErrorResponse>
      | Declared<"errorResponse6", ErrorResponse>
      | Declared<"errorResponse7", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<MoveRecordError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 409, kind: "errorResponse5", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse6", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 503, kind: "errorResponse7", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type ReindexRecordRequest = {
    recordId: string;
    /** Request payload */
    body?: ReindexRecordRequestBody;
  };

  export class ReindexRecordError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Declared<"errorResponse5", ErrorResponse>
      | Declared<"errorResponse6", ErrorResponse>
      | Declared<"errorResponse7", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<ReindexRecordError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 409, kind: "errorResponse5", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse6", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 503, kind: "errorResponse7", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type ReindexRecordGroupRequest = {
    /** Folder ID or KB ID */
    recordGroupId: string;
    /** Request payload */
    body?: ReindexRecordGroupRequestBody;
  };

  export class ReindexRecordGroupError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Declared<"errorResponse5", ErrorResponse>
      | Declared<"errorResponse6", ErrorResponse>
      | Declared<"errorResponse7", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<ReindexRecordGroupError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 409, kind: "errorResponse5", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse6", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 503, kind: "errorResponse7", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type RestoreRecordRequest = {
    /** Record ID of any item in the delete batch */
    recordId: string;
  };

  export class RestoreRecordError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Declared<"errorResponse5", ErrorResponse>
      | Declared<"errorResponse6", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<RestoreRecordError> = [
      { on: 401, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 409, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse5", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 503, kind: "errorResponse6", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type RestoreRecordsRequest = {
    body: RestoreRecordsRequestBody;
  };

  export class RestoreRecordsError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Declared<"errorResponse5", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<RestoreRecordsError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 503, kind: "errorResponse5", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type StreamRecordBufferRequest = {
    /** Record ID */
    recordId: string;
    /** Target format for conversion */
    convertTo?: string;
    /**
     * Registry version to pin ARTIFACT record content to. Omit to stream the latest version.
     * Ignored for non-artifact records.
     */
    version?: number;
  };

  export class StreamRecordBufferError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"knowledgeBaseStreamRecordResponse", KnowledgeBaseStreamRecordResponse>
      | Declared<"streamRecordErrorResponse", StreamRecordErrorResponse>
      | Declared<"streamRecordErrorResponse2", StreamRecordErrorResponse>
      | Declared<"streamRecordErrorResponse3", StreamRecordErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<StreamRecordBufferError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      {
        on: 403,
        kind: "knowledgeBaseStreamRecordResponse",
        decode: { kind: "json", schema: knowledgeBaseStreamRecordResponseSchema },
      },
      {
        on: 404,
        kind: "streamRecordErrorResponse",
        decode: { kind: "json", schema: streamRecordErrorResponseSchema },
      },
      {
        on: 409,
        kind: "streamRecordErrorResponse2",
        decode: { kind: "json", schema: streamRecordErrorResponseSchema },
      },
      {
        on: 500,
        kind: "streamRecordErrorResponse3",
        decode: { kind: "json", schema: streamRecordErrorResponseSchema },
      },
    ];
  }

  export type UpdateFolderRequest = {
    kbId: string;
    folderId: string;
    /** Request payload */
    body: KnowledgeBaseFolderRequest1;
  };

  export class UpdateFolderError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Declared<"errorResponse5", ErrorResponse>
      | Declared<"errorResponse6", ErrorResponse>
      | Declared<"errorResponse7", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<UpdateFolderError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 409, kind: "errorResponse5", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse6", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 503, kind: "errorResponse7", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type UpdateKnowledgeBaseRequest = {
    /** Knowledge base ID (UUID) */
    kbId: string;
    /** Fields to update. `kbName` is optional; an empty object is valid. */
    body: KnowledgeBaseRequest1;
  };

  export class UpdateKnowledgeBaseError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Declared<"errorResponse5", ErrorResponse>
      | Declared<"errorResponse6", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<UpdateKnowledgeBaseError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse5", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 503, kind: "errorResponse6", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type UpdateRecordRequest = {
    /** Record ID */
    recordId: string;
    /** New name for the record */
    recordName?: string;
    /** Replacement file content */
    file?: FileInput;
  };

  export class UpdateRecordError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Declared<"errorResponse5", ErrorResponse>
      | Declared<"errorResponse6", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<UpdateRecordError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse5", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 503, kind: "errorResponse6", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type UploadRecordsRequest = {
    /** Knowledge base ID */
    kbId: string;
    /** Target folder ID. Omit to upload to the KB root. */
    folderId?: string;
    /** File to upload (call once per file) */
    files: FileInput;
    /** JSON array with file_path and last_modified for each file */
    filesMetadata?: string;
    /** Enable version tracking @default true */
    isVersioned?: boolean;
    /** Type of records to create @default "FILE" */
    recordType?: string;
  };

  export class UploadRecordsError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Declared<"errorResponse5", ErrorResponse>
      | Declared<"errorResponse6", ErrorResponse>
      | Declared<"errorResponse7", ErrorResponse>
      | Declared<"errorResponse8", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<UploadRecordsError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 409, kind: "errorResponse5", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 413, kind: "errorResponse6", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 429, kind: "errorResponse7", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse8", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }
}
