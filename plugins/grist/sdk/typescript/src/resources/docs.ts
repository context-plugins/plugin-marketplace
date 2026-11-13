import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { FileInput } from "../core/binary.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { docAccessReadSchema, type DocAccessRead } from "../models/doc-access-read.js";
import { docComparisonSchema, type DocComparison } from "../models/doc-comparison.js";
import { docParametersSchema, type DocParameters } from "../models/doc-parameters.js";
import { docWithWorkspaceSchema, type DocWithWorkspace } from "../models/doc-with-workspace.js";
import { docsAccessRequestSchema, type DocsAccessRequest } from "../models/docs-access-request.js";
import { docsApplyResponseSchema, type DocsApplyResponse } from "../models/docs-apply-response.js";
import { docsCopyRequestSchema, type DocsCopyRequest } from "../models/docs-copy-request.js";
import { docsForkResponseSchema, type DocsForkResponse } from "../models/docs-fork-response.js";
import { docsMoveRequestSchema, type DocsMoveRequest } from "../models/docs-move-request.js";
import {
  docsProposalsApplyResponseSchema,
  type DocsProposalsApplyResponse,
} from "../models/docs-proposals-apply-response.js";
import {
  docsProposalsResponseSchema,
  type DocsProposalsResponse,
} from "../models/docs-proposals-response.js";
import { docsProposeRequestSchema, type DocsProposeRequest } from "../models/docs-propose-request.js";
import { docsProposeResponseSchema, type DocsProposeResponse } from "../models/docs-propose-response.js";
import { docsRecoverRequestSchema, type DocsRecoverRequest } from "../models/docs-recover-request.js";
import { docsRecoverResponseSchema, type DocsRecoverResponse } from "../models/docs-recover-response.js";
import { docsReplaceRequestSchema, type DocsReplaceRequest } from "../models/docs-replace-request.js";
import {
  docsSnapshotsRemoveRequestSchema,
  type DocsSnapshotsRemoveRequest,
} from "../models/docs-snapshots-remove-request.js";
import {
  docsSnapshotsRemoveResponseSchema,
  type DocsSnapshotsRemoveResponse,
} from "../models/docs-snapshots-remove-response.js";
import {
  docsSnapshotsResponseSchema,
  type DocsSnapshotsResponse,
} from "../models/docs-snapshots-response.js";
import {
  docsStatesRemoveRequestSchema,
  type DocsStatesRemoveRequest,
} from "../models/docs-states-remove-request.js";
import { docsStatesResponseSchema, type DocsStatesResponse } from "../models/docs-states-response.js";
import { docsTimingResponseSchema, type DocsTimingResponse } from "../models/docs-timing-response.js";
import {
  docsUsersForViewAsResponseSchema,
  type DocsUsersForViewAsResponse,
} from "../models/docs-users-for-view-as-response.js";
import { gristErrorSchema, type GristError } from "../models/grist-error.js";
import { headerSchema, type Header } from "../models/header.js";
import { docsAccessResponseSchema, type DocsAccessResponse } from "../models/unions/docs-access-response.js";
import {
  docsDisableResponseSchema,
  type DocsDisableResponse,
} from "../models/unions/docs-disable-response.js";
import { docsEnableResponseSchema, type DocsEnableResponse } from "../models/unions/docs-enable-response.js";
import {
  docsForceReloadResponseSchema,
  type DocsForceReloadResponse,
} from "../models/unions/docs-force-reload-response.js";
import { docsMoveResponseSchema, type DocsMoveResponse } from "../models/unions/docs-move-response.js";
import { docsPinResponseSchema, type DocsPinResponse } from "../models/unions/docs-pin-response.js";
import { docsRemoveResponseSchema, type DocsRemoveResponse } from "../models/unions/docs-remove-response.js";
import {
  docsReplaceResponseSchema,
  type DocsReplaceResponse,
} from "../models/unions/docs-replace-response.js";
import { docsResponseSchema, type DocsResponse } from "../models/unions/docs-response.js";
import {
  docsStatesRemoveResponseSchema,
  type DocsStatesRemoveResponse,
} from "../models/unions/docs-states-remove-response.js";
import {
  docsTimingStartResponseSchema,
  type DocsTimingStartResponse,
} from "../models/unions/docs-timing-start-response.js";
import { docsUnpinResponseSchema, type DocsUnpinResponse } from "../models/unions/docs-unpin-response.js";
import {
  docsUnremoveResponseSchema,
  type DocsUnremoveResponse,
} from "../models/unions/docs-unremove-response.js";
import {
  workspacesImportResponseSchema,
  type WorkspacesImportResponse,
} from "../models/workspaces-import-response.js";
import type { Servers } from "../servers.js";

/**
 * Workspaces contain collections of Grist documents.
 */
export class Docs {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Apply a change proposal
   *
   * @remarks
   * Apply a proposal's changes to the document. This merges the fork's changes into the trunk
   * document.
   *
   * @returns Proposal applied successfully
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link GristApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  applyProposal(
    request: Docs.ApplyProposalRequest,
    options?: RequestOptions,
  ): ApiPromise<DocsProposalsApplyResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/docs/{docId}/proposals/{proposalId}/apply"),
        auth: this.#auth.apiKey,
        pathParams: [
          { name: "docId", value: request.docId, schema: s.string() },
          { name: "proposalId", value: request.proposalId, schema: s.int() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: docsProposalsApplyResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Apply a list of user actions
   *
   * @remarks
   * Apply a sequence of user actions to a document. This is a low-level endpoint for making batch
   * changes using Grist's internal action format.
   *
   * Each action is an array where the first element is the action type. Common action types:
   * - `["AddRecord", tableId, rowId, {column: value}]` - Add a row (use null for auto-assigned
   *   rowId)
   * - `["UpdateRecord", tableId, rowId, {column: value}]` - Update a row
   * - `["RemoveRecord", tableId, rowId]` - Delete a row
   * - `["BulkAddRecord", tableId, [rowIds], {column: [values]}]` - Add multiple rows
   * - `["BulkUpdateRecord", tableId, [rowIds], {column: [values]}]` - Update multiple rows
   * - `["BulkRemoveRecord", tableId, [rowIds]]` - Delete multiple rows
   * - `["AddColumn", tableId, colId, {type, ...}]` - Add a column
   * - `["RemoveColumn", tableId, colId]` - Remove a column
   * - `["RenameColumn", tableId, oldColId, newColId]` - Rename a column
   * - `["AddTable", tableId, [{id, type, ...}]]` - Add a table
   * - `["RemoveTable", tableId]` - Remove a table
   *
   * @returns Actions applied successfully
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link GristApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  applyUserActions(
    request: Docs.ApplyUserActionsRequest,
    options?: RequestOptions,
  ): ApiPromise<DocsApplyResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/docs/{docId}/apply"),
        auth: this.#auth.apiKey,
        pathParams: [{ name: "docId", value: request.docId, schema: s.string() }],
        query: [{ name: "noparse", value: request.noparse, schema: s.optional(s.boolean()) }],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.array(s.array(s.record(s.string(), s.unknown()))),
        },
      },
      {
        success: { kind: "json", schema: docsApplyResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Reassign document to appropriate worker
   *
   * @remarks
   * Administrative endpoint that checks if a document is assigned to the expected worker group and
   * frees it for reassignment if not. Used for load balancing and maintenance operations.
   *
   * @returns Assignment result
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link GristApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  assignDoc(request: Docs.AssignDocRequest, options?: RequestOptions): ApiPromise<boolean, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/docs/{docId}/assign"),
        auth: this.#auth.apiKey,
        pathParams: [{ name: "docId", value: request.docId, schema: s.string() }],
        query: [{ name: "group", value: request.group, schema: s.optional(s.string()) }],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.boolean() },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Compare two documents
   *
   * @remarks
   * Compare this document with another document. Useful for comparing a fork with its trunk
   * document.
   *
   * @returns Comparison result
   *
   * @throws {@link Docs.CompareDocumentsError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link GristApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  compareDocuments(
    request: Docs.CompareDocumentsRequest,
    options?: RequestOptions,
  ): ApiPromise<DocComparison, Docs.CompareDocumentsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/docs/{docId}/compare/{docId2}"),
        auth: this.#auth.apiKey,
        pathParams: [
          { name: "docId", value: request.docId, schema: s.string() },
          { name: "docId2", value: request.docId2, schema: s.string() },
        ],
        query: [
          { name: "detail", value: request.detail, schema: s.optional(s.boolean()) },
          { name: "maxRows", value: request.maxRows, schema: s.optional(s.int()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: docComparisonSchema },
        errorFactory: Docs.CompareDocumentsError,
      },
      options,
    );
  }

  /**
   * Compare document versions
   *
   * @remarks
   * Compare two versions of the same document by their state hashes. Returns details about what
   * changed between the versions.
   *
   * @returns Comparison result
   *
   * @throws {@link Docs.CompareVersionsError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link GristApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  compareVersions(
    request: Docs.CompareVersionsRequest,
    options?: RequestOptions,
  ): ApiPromise<DocComparison, Docs.CompareVersionsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/docs/{docId}/compare"),
        auth: this.#auth.apiKey,
        pathParams: [{ name: "docId", value: request.docId, schema: s.string() }],
        query: [
          { name: "left", value: request.left, schema: s.optional(s.string()) },
          { name: "right", value: request.right, schema: s.optional(s.string()) },
          { name: "maxRows", value: request.maxRows, schema: s.optional(s.int()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: docComparisonSchema },
        errorFactory: Docs.CompareVersionsError,
      },
      options,
    );
  }

  /**
   * Copies a document to a workspace.
   *
   * @returns The document id
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link GristApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  copyDoc(request: Docs.CopyDocRequest, options?: RequestOptions): ApiPromise<string, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/docs/{docId}/copy"),
        auth: this.#auth.apiKey,
        pathParams: [{ name: "docId", value: request.docId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: s.optional(s.lazy(() => docsCopyRequestSchema)) },
      },
      {
        success: { kind: "json", schema: s.string() },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Create an empty document
   *
   * @returns The document id
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link GristApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createDoc(request: Docs.CreateDocRequest, options?: RequestOptions): ApiPromise<string, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/workspaces/{workspaceId}/docs"),
        auth: this.#auth.apiKey,
        pathParams: [{ name: "workspaceId", value: request.workspaceId, schema: s.int() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: docParametersSchema },
      },
      {
        success: { kind: "json", schema: s.string() },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Create a document
   *
   * @remarks
   * A unified endpoint for creating documents. Can create an empty document, copy an existing
   * document, or import a file.
   *
   * - To create an empty unsaved document: provide no parameters
   * - To create an empty saved document: provide `workspaceId`
   * - To copy an existing document: provide `sourceDocumentId`, `workspaceId`, and `documentName`
   * - To import a file: use multipart/form-data with a file upload and optional `workspaceId`
   *
   * @returns The document id
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link GristApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createDocUnified(
    request: Docs.CreateDocUnifiedRequest = {},
    options?: RequestOptions,
  ): ApiPromise<string, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/docs"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "multipart",
          value: [
            { kind: "file", name: "upload", value: request.upload },
            { kind: "text", name: "workspaceId", value: request.workspaceId, schema: s.optional(s.int()) },
            {
              kind: "text",
              name: "documentName",
              value: request.documentName,
              schema: s.optional(s.string()),
            },
          ],
        },
      },
      {
        success: { kind: "json", schema: s.string() },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Create a change proposal
   *
   * @remarks
   * Create a proposal from a fork to its trunk document. The proposal contains the comparison of
   * changes between the fork and trunk. This endpoint can only be called on a fork document.
   *
   * @returns Proposal created
   *
   * @throws {@link Docs.CreateProposalError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link GristApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createProposal(
    request: Docs.CreateProposalRequest,
    options?: RequestOptions,
  ): ApiPromise<DocsProposeResponse, Docs.CreateProposalError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/docs/{docId}/propose"),
        auth: this.#auth.apiKey,
        pathParams: [{ name: "docId", value: request.docId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => docsProposeRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: docsProposeResponseSchema },
        errorFactory: Docs.CreateProposalError,
      },
      options,
    );
  }

  /**
   * Truncate the document's action history
   *
   * @returns Success
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link GristApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteActions(
    request: Docs.DeleteActionsRequest,
    options?: RequestOptions,
  ): ApiPromise<DocsStatesRemoveResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/docs/{docId}/states/remove"),
        auth: this.#auth.apiKey,
        pathParams: [{ name: "docId", value: request.docId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => docsStatesRemoveRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: docsStatesRemoveResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Delete a document
   *
   * @returns Success
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link GristApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteDoc(request: Docs.DeleteDocRequest, options?: RequestOptions): ApiPromise<DocsResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/docs/{docId}"),
        auth: this.#auth.apiKey,
        pathParams: [{ name: "docId", value: request.docId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: docsResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Describe a document
   *
   * @returns A document's metadata
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link GristApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  describeDoc(
    request: Docs.DescribeDocRequest,
    options?: RequestOptions,
  ): ApiPromise<DocWithWorkspace, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/docs/{docId}"),
        auth: this.#auth.apiKey,
        pathParams: [{ name: "docId", value: request.docId, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: docWithWorkspaceSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Disable a document.
   *
   * @remarks
   * Disabled documents cannot be accessed or modified. Moving and renaming a disabled doc is also
   * forbidden, as well as accessing or submitting published forms associated to a disabled
   * document.
   *
   * Disabled documents, however, can be moved to and restored from the trash.
   *
   * The operation is non-destructive. Disabled documents can be re-enabled.
   *
   * Only admin accounts can disable a document.
   *
   * @returns Document disabled successfully. Returns empty body.
   *
   * @throws {@link Docs.DisableDocError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link GristApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  disableDoc(
    request: Docs.DisableDocRequest,
    options?: RequestOptions,
  ): ApiPromise<DocsDisableResponse, Docs.DisableDocError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/docs/{docId}/disable"),
        auth: this.#auth.apiKey,
        pathParams: [{ name: "docId", value: request.docId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: docsDisableResponseSchema },
        errorFactory: Docs.DisableDocError,
      },
      options,
    );
  }

  /**
   * Content of document, as an Sqlite file
   *
   * @returns A document's content in Sqlite form
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link GristApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  downloadDoc(request: Docs.DownloadDocRequest, options?: RequestOptions): ApiPromise<undefined, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/docs/{docId}/download"),
        auth: anyAuth(this.#auth.apiKey, this.#auth.oAuth2),
        pathParams: [{ name: "docId", value: request.docId, schema: s.string() }],
        query: [
          { name: "nohistory", value: request.nohistory, schema: s.optional(s.boolean()) },
          { name: "template", value: request.template, schema: s.optional(s.boolean()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Content of table, as a CSV file
   *
   * @returns A table's content in CSV form
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link GristApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  downloadDocCsv(
    request: Docs.DownloadDocCsvRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/docs/{docId}/download/csv"),
        auth: anyAuth(this.#auth.apiKey, this.#auth.oAuth2),
        pathParams: [{ name: "docId", value: request.docId, schema: s.string() }],
        query: [
          { name: "tableId", value: request.tableId, schema: s.string() },
          { name: "header", value: request.header, schema: s.optional(s.lazy(() => headerSchema)) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Content of table, as a DSV file
   *
   * @remarks
   * Download table data using a custom delimiter (💩).
   *
   * @returns A table's content in DSV form
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link GristApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  downloadDocDsv(
    request: Docs.DownloadDocDsvRequest,
    options?: RequestOptions,
  ): ApiPromise<string, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/docs/{docId}/download/dsv"),
        auth: anyAuth(this.#auth.apiKey, this.#auth.oAuth2),
        pathParams: [{ name: "docId", value: request.docId, schema: s.string() }],
        query: [
          { name: "tableId", value: request.tableId, schema: s.string() },
          { name: "header", value: request.header, schema: s.optional(s.lazy(() => headerSchema)) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "text", schema: s.string() },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Content of table, as a TSV file
   *
   * @remarks
   * Download table data as tab-separated values.
   *
   * @returns A table's content in TSV form
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link GristApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  downloadDocTsv(
    request: Docs.DownloadDocTsvRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/docs/{docId}/download/tsv"),
        auth: anyAuth(this.#auth.apiKey, this.#auth.oAuth2),
        pathParams: [{ name: "docId", value: request.docId, schema: s.string() }],
        query: [
          { name: "tableId", value: request.tableId, schema: s.string() },
          { name: "header", value: request.header, schema: s.optional(s.lazy(() => headerSchema)) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Content of document, as an Excel file
   *
   * @returns A document's content in Excel form
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link GristApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  downloadDocXlsx(
    request: Docs.DownloadDocXlsxRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/docs/{docId}/download/xlsx"),
        auth: anyAuth(this.#auth.apiKey, this.#auth.oAuth2),
        pathParams: [{ name: "docId", value: request.docId, schema: s.string() }],
        query: [
          { name: "header", value: request.header, schema: s.optional(s.lazy(() => headerSchema)) },
          { name: "tableId", value: request.tableId, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * The schema of a table
   *
   * @remarks
   * The schema follows [frictionlessdata's table-schema
   * standard](https://specs.frictionlessdata.io/table-schema/).
   *
   * @returns A table's table-schema in JSON format.
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link GristApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  downloadTableSchema(
    request: Docs.DownloadTableSchemaRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/docs/{docId}/download/table-schema"),
        auth: anyAuth(this.#auth.apiKey, this.#auth.oAuth2),
        pathParams: [{ name: "docId", value: request.docId, schema: s.string() }],
        query: [
          { name: "tableId", value: request.tableId, schema: s.string() },
          { name: "header", value: request.header, schema: s.optional(s.lazy(() => headerSchema)) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Enable a document.
   *
   * @remarks
   * If a document has been previously disabled, this will restore all former access to a document,
   * including access to its associated published forms.
   *
   * Only admin accounts can enable a document.
   *
   * @returns Document enabled successfully. Returns empty body.
   *
   * @throws {@link Docs.EnableDocError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link GristApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  enableDoc(
    request: Docs.EnableDocRequest,
    options?: RequestOptions,
  ): ApiPromise<DocsEnableResponse, Docs.EnableDocError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/docs/{docId}/enable"),
        auth: this.#auth.apiKey,
        pathParams: [{ name: "docId", value: request.docId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: docsEnableResponseSchema },
        errorFactory: Docs.EnableDocError,
      },
      options,
    );
  }

  /**
   * Flush document to storage
   *
   * @remarks
   * Ensure all pending changes to the document are written to persistent storage. Returns true if
   * the document was flushed, false if the document was not open.
   *
   * @returns Flush result
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link GristApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  flushDoc(request: Docs.FlushDocRequest, options?: RequestOptions): ApiPromise<boolean, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/docs/{docId}/flush"),
        auth: this.#auth.apiKey,
        pathParams: [{ name: "docId", value: request.docId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.boolean() },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Reload a document
   *
   * @remarks
   * Closes and reopens the document, forcing the python engine to restart.
   *
   * @returns Document reloaded successfully
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link GristApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  forceReload(
    request: Docs.ForceReloadRequest,
    options?: RequestOptions,
  ): ApiPromise<DocsForceReloadResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/docs/{docId}/force-reload"),
        auth: this.#auth.apiKey,
        pathParams: [{ name: "docId", value: request.docId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: docsForceReloadResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Fork a document
   *
   * @remarks
   * Create a fork of a document. A fork is a personal copy that tracks its relationship to the
   * original document. Forks can be used to experiment with changes before applying them to the
   * original.
   *
   * The fork will have a new docId and urlId that encode the relationship to the trunk (original)
   * document.
   *
   * @returns Fork created successfully
   *
   * @throws {@link Docs.ForkDocError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link GristApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  forkDoc(
    request: Docs.ForkDocRequest,
    options?: RequestOptions,
  ): ApiPromise<DocsForkResponse, Docs.ForkDocError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/docs/{docId}/fork"),
        auth: this.#auth.apiKey,
        pathParams: [{ name: "docId", value: request.docId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: docsForkResponseSchema },
        errorFactory: Docs.ForkDocError,
      },
      options,
    );
  }

  /**
   * Get document action history states
   *
   * @remarks
   * Returns a list of document states representing the action history. Each state has a sequential
   * number (n) and a hash (h) that uniquely identifies that point in history. Most recent state is
   * first.
   *
   * @returns List of document states
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link GristApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getStates(
    request: Docs.GetStatesRequest,
    options?: RequestOptions,
  ): ApiPromise<DocsStatesResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/docs/{docId}/states"),
        auth: this.#auth.apiKey,
        pathParams: [{ name: "docId", value: request.docId, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: docsStatesResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Get formula timing status
   *
   * @remarks
   * Check if formula timing is enabled for a document and retrieve timing data if available. Only
   * document owners can access timing information.
   *
   * @returns Timing status
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link GristApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getTimingStatus(
    request: Docs.GetTimingStatusRequest,
    options?: RequestOptions,
  ): ApiPromise<DocsTimingResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/docs/{docId}/timing"),
        auth: this.#auth.apiKey,
        pathParams: [{ name: "docId", value: request.docId, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: docsTimingResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Get users for 'View As' feature
   *
   * @remarks
   * Get users that can be used with the "View As" feature for testing access rules. Only document
   * owners can call this endpoint.
   *
   * Users are drawn from:
   * - Users the document is shared with
   * - Users mentioned in user attribute tables
   * - Predefined example users
   *
   * @returns Users available for View As
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link GristApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getUsersForViewAs(
    request: Docs.GetUsersForViewAsRequest,
    options?: RequestOptions,
  ): ApiPromise<DocsUsersForViewAsResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/docs/{docId}/usersForViewAs"),
        auth: this.#auth.apiKey,
        pathParams: [{ name: "docId", value: request.docId, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: docsUsersForViewAsResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Import an existing document
   *
   * @returns The document id
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link GristApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  importDoc(
    request: Docs.ImportDocRequest,
    options?: RequestOptions,
  ): ApiPromise<WorkspacesImportResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/workspaces/{workspaceId}/import"),
        auth: this.#auth.apiKey,
        pathParams: [{ name: "workspaceId", value: request.workspaceId, schema: s.int() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "multipart",
          value: [
            { kind: "file", name: "upload", value: request.upload },
            {
              kind: "text",
              name: "documentName",
              value: request.documentName,
              schema: s.optional(s.string()),
            },
          ],
        },
      },
      {
        success: { kind: "json", schema: workspacesImportResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * List users with access to document
   *
   * @returns Users with access to document
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link GristApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listDocAccess(
    request: Docs.ListDocAccessRequest,
    options?: RequestOptions,
  ): ApiPromise<DocAccessRead, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/docs/{docId}/access"),
        auth: this.#auth.apiKey,
        pathParams: [{ name: "docId", value: request.docId, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: docAccessReadSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * List change proposals
   *
   * @remarks
   * List proposals associated with a document. Proposals are suggested changes from forks that can
   * be reviewed and applied to the trunk document.
   *
   * @returns List of proposals
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link GristApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listProposals(
    request: Docs.ListProposalsRequest,
    options?: RequestOptions,
  ): ApiPromise<DocsProposalsResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/docs/{docId}/proposals"),
        auth: this.#auth.apiKey,
        pathParams: [{ name: "docId", value: request.docId, schema: s.string() }],
        query: [{ name: "outgoing", value: request.outgoing, schema: s.optional(s.boolean()) }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: docsProposalsResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * List document snapshots
   *
   * @remarks
   * Returns a list of snapshots (backups) of the document. Snapshots are created automatically as
   * the document is edited. Most recent snapshots are listed first.
   *
   * @returns List of snapshots
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link GristApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listSnapshots(
    request: Docs.ListSnapshotsRequest,
    options?: RequestOptions,
  ): ApiPromise<DocsSnapshotsResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/docs/{docId}/snapshots"),
        auth: this.#auth.apiKey,
        pathParams: [{ name: "docId", value: request.docId, schema: s.string() }],
        query: [{ name: "raw", value: request.raw, schema: s.optional(s.boolean()) }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: docsSnapshotsResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Modify document metadata (but not its contents)
   *
   * @returns Success
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link GristApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  modifyDoc(request: Docs.ModifyDocRequest, options?: RequestOptions): ApiPromise<DocsResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default("/docs/{docId}"),
        auth: this.#auth.apiKey,
        pathParams: [{ name: "docId", value: request.docId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: docParametersSchema },
      },
      {
        success: { kind: "json", schema: docsResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Change who has access to document
   *
   * @returns Success
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link GristApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  modifyDocAccess(
    request: Docs.ModifyDocAccessRequest,
    options?: RequestOptions,
  ): ApiPromise<DocsAccessResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default("/docs/{docId}/access"),
        auth: this.#auth.apiKey,
        pathParams: [{ name: "docId", value: request.docId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: docsAccessRequestSchema },
      },
      {
        success: { kind: "json", schema: docsAccessResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Move document to another workspace.
   *
   * @returns Document moved successfully. Returns empty body.
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link GristApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  moveDoc(request: Docs.MoveDocRequest, options?: RequestOptions): ApiPromise<DocsMoveResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default("/docs/{docId}/move"),
        auth: this.#auth.apiKey,
        pathParams: [{ name: "docId", value: request.docId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: s.optional(s.lazy(() => docsMoveRequestSchema)) },
      },
      {
        success: { kind: "json", schema: docsMoveResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Pin a document
   *
   * @remarks
   * Pin the document so it appears in a prominent location. Pinned documents are displayed at the
   * top of workspace listings for easy access.
   *
   * @returns Document pinned successfully
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link GristApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  pinDoc(request: Docs.PinDocRequest, options?: RequestOptions): ApiPromise<DocsPinResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default("/docs/{docId}/pin"),
        auth: this.#auth.apiKey,
        pathParams: [{ name: "docId", value: request.docId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: docsPinResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Set recovery mode for a document
   *
   * @remarks
   * Controls the recovery mode of a document. Recovery mode helps in recovering from errors or
   * corrupted states. Only document owners can control recovery mode.
   *
   * @returns Recovery mode set successfully
   *
   * @throws {@link Docs.RecoverDocError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link GristApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  recoverDoc(
    request: Docs.RecoverDocRequest,
    options?: RequestOptions,
  ): ApiPromise<DocsRecoverResponse, Docs.RecoverDocError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/docs/{docId}/recover"),
        auth: this.#auth.apiKey,
        pathParams: [{ name: "docId", value: request.docId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => docsRecoverRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: docsRecoverResponseSchema },
        errorFactory: Docs.RecoverDocError,
      },
      options,
    );
  }

  /**
   * Move document to trash
   *
   * @remarks
   * Soft-delete the document by moving it to trash. The document can be restored using the unremove
   * endpoint. If the `permanent` query parameter is set to true, the document is permanently
   * deleted instead.
   *
   * @returns Document moved to trash (or permanently deleted)
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link GristApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  removeDoc(
    request: Docs.RemoveDocRequest,
    options?: RequestOptions,
  ): ApiPromise<DocsRemoveResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/docs/{docId}/remove"),
        auth: this.#auth.apiKey,
        pathParams: [{ name: "docId", value: request.docId, schema: s.string() }],
        query: [{ name: "permanent", value: request.permanent, schema: s.optional(s.boolean()) }],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: docsRemoveResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Remove document snapshots
   *
   * @remarks
   * Remove specific snapshots from a document's backup history. Only document owners can remove
   * snapshots.
   *
   * @returns Snapshots removed
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link GristApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  removeSnapshots(
    request: Docs.RemoveSnapshotsRequest,
    options?: RequestOptions,
  ): ApiPromise<DocsSnapshotsRemoveResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/docs/{docId}/snapshots/remove"),
        auth: this.#auth.apiKey,
        pathParams: [{ name: "docId", value: request.docId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => docsSnapshotsRemoveRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: docsSnapshotsRemoveResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Replace document content
   *
   * @remarks
   * Replace the current document content with content from another source. Can restore from a
   * snapshot or copy from another document.
   *
   * @returns Document content replaced successfully
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link GristApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  replaceDoc(
    request: Docs.ReplaceDocRequest,
    options?: RequestOptions,
  ): ApiPromise<DocsReplaceResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/docs/{docId}/replace"),
        auth: this.#auth.apiKey,
        pathParams: [{ name: "docId", value: request.docId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => docsReplaceRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: docsReplaceResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Start formula timing
   *
   * @remarks
   * Start collecting timing information for formula calculations. Only document owners can start
   * timing.
   *
   * @returns Timing started successfully
   *
   * @throws {@link Docs.StartTimingError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link GristApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  startTiming(
    request: Docs.StartTimingRequest,
    options?: RequestOptions,
  ): ApiPromise<DocsTimingStartResponse, Docs.StartTimingError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/docs/{docId}/timing/start"),
        auth: this.#auth.apiKey,
        pathParams: [{ name: "docId", value: request.docId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: docsTimingStartResponseSchema },
        errorFactory: Docs.StartTimingError,
      },
      options,
    );
  }

  /**
   * Stop formula timing
   *
   * @remarks
   * Stop collecting timing information and return the collected data. Only document owners can stop
   * timing.
   *
   * @returns Timing stopped and data returned
   *
   * @throws {@link Docs.StopTimingError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link GristApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  stopTiming(
    request: Docs.StopTimingRequest,
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, Docs.StopTimingError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/docs/{docId}/timing/stop"),
        auth: this.#auth.apiKey,
        pathParams: [{ name: "docId", value: request.docId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: Docs.StopTimingError,
      },
      options,
    );
  }

  /**
   * Unpin a document
   *
   * @remarks
   * Remove the pinned status from a document.
   *
   * @returns Document unpinned successfully
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link GristApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  unpinDoc(request: Docs.UnpinDocRequest, options?: RequestOptions): ApiPromise<DocsUnpinResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default("/docs/{docId}/unpin"),
        auth: this.#auth.apiKey,
        pathParams: [{ name: "docId", value: request.docId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: docsUnpinResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Restore document from trash
   *
   * @remarks
   * Recover a document that was previously soft-deleted. Only works if the document is still in the
   * trash.
   *
   * @returns Document restored successfully
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link GristApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  unremoveDoc(
    request: Docs.UnremoveDocRequest,
    options?: RequestOptions,
  ): ApiPromise<DocsUnremoveResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/docs/{docId}/unremove"),
        auth: this.#auth.apiKey,
        pathParams: [{ name: "docId", value: request.docId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: docsUnremoveResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace Docs {
  export type ApplyProposalRequest = {
    /** A string id (UUID) */
    docId: string;
    /** ID of the proposal to apply */
    proposalId: number;
  };

  export type ApplyUserActionsRequest = {
    /** A string id (UUID) */
    docId: string;
    /**
     * If true, string values are stored as-is without parsing (e.g. dates won't be auto-converted)
     */
    noparse?: boolean;
    /** An array of user actions to apply */
    body: Record<string, unknown>[][];
  };

  export type AssignDocRequest = {
    /** A string id (UUID) */
    docId: string;
    /** Update the document's worker group (requires special permit) */
    group?: string;
  };

  export type CompareDocumentsRequest = {
    /** A string id (UUID) */
    docId: string;
    /** ID of the document to compare with */
    docId2: string;
    /** If true, include detailed change information */
    detail?: boolean;
    /** Maximum number of row changes to include */
    maxRows?: number;
  };

  export class CompareDocumentsError extends ApiError {
    declare readonly payload: Declared<"gristError", GristError> | Undeclared;

    static readonly errors: ErrorDecoders<CompareDocumentsError> = [
      { on: 403, kind: "gristError", decode: { kind: "json", schema: gristErrorSchema } },
    ];
  }

  export type CompareVersionsRequest = {
    /** A string id (UUID) */
    docId: string;
    /** Hash of the left version to compare (defaults to HEAD) */
    left?: string;
    /** Hash of the right version to compare (defaults to HEAD) */
    right?: string;
    /** Maximum number of row changes to include in details */
    maxRows?: number;
  };

  export class CompareVersionsError extends ApiError {
    declare readonly payload: Declared<"gristError", GristError> | Undeclared;

    static readonly errors: ErrorDecoders<CompareVersionsError> = [
      { on: 403, kind: "gristError", decode: { kind: "json", schema: gristErrorSchema } },
    ];
  }

  export type CopyDocRequest = {
    /** A string id (UUID) */
    docId: string;
    /** the target workspace */
    body?: DocsCopyRequest;
  };

  export type CreateDocRequest = {
    /** An integer id */
    workspaceId: number;
    /** settings for the document */
    body: DocParameters;
  };

  export type CreateDocUnifiedRequest = {
    /** File to import (.grist, .xlsx, .csv, etc.) */
    upload?: FileInput;
    /** The workspace to save the document in */
    workspaceId?: number;
    /** Name for the imported document */
    documentName?: string;
  };

  export type CreateProposalRequest = {
    /** A string id (UUID) */
    docId: string;
    body?: DocsProposeRequest;
  };

  export class CreateProposalError extends ApiError {
    declare readonly payload: Declared<"gristError", GristError> | Undeclared;

    static readonly errors: ErrorDecoders<CreateProposalError> = [
      { on: 400, kind: "gristError", decode: { kind: "json", schema: gristErrorSchema } },
    ];
  }

  export type DeleteActionsRequest = {
    /** A string id (UUID) */
    docId: string;
    body?: DocsStatesRemoveRequest;
  };

  export type DeleteDocRequest = {
    /** A string id (UUID) */
    docId: string;
  };

  export type DescribeDocRequest = {
    /** A string id (UUID) */
    docId: string;
  };

  export type DisableDocRequest = {
    /** A string id (UUID) */
    docId: string;
  };

  export class DisableDocError extends ApiError {
    declare readonly payload:
      | Declared<"gristError", GristError>
      | Declared<"gristError2", GristError>
      | Undeclared;

    static readonly errors: ErrorDecoders<DisableDocError> = [
      { on: 403, kind: "gristError", decode: { kind: "json", schema: gristErrorSchema } },
      { on: 404, kind: "gristError2", decode: { kind: "json", schema: gristErrorSchema } },
    ];
  }

  export type DownloadDocRequest = {
    /** A string id (UUID) */
    docId: string;
    nohistory?: boolean;
    template?: boolean;
  };

  export type DownloadDocCsvRequest = {
    /** A string id (UUID) */
    docId: string;
    tableId: string;
    /**
     * Format for headers. Labels tend to be more human-friendly while colIds are more normalized.
     */
    header?: Header;
  };

  export type DownloadDocDsvRequest = {
    /** A string id (UUID) */
    docId: string;
    tableId: string;
    /**
     * Format for headers. Labels tend to be more human-friendly while colIds are more normalized.
     */
    header?: Header;
  };

  export type DownloadDocTsvRequest = {
    /** A string id (UUID) */
    docId: string;
    tableId: string;
    /**
     * Format for headers. Labels tend to be more human-friendly while colIds are more normalized.
     */
    header?: Header;
  };

  export type DownloadDocXlsxRequest = {
    /** A string id (UUID) */
    docId: string;
    /**
     * Format for headers. Labels tend to be more human-friendly while colIds are more normalized.
     */
    header?: Header;
    tableId?: string;
  };

  export type DownloadTableSchemaRequest = {
    /** A string id (UUID) */
    docId: string;
    tableId: string;
    /**
     * Format for headers. Labels tend to be more human-friendly while colIds are more normalized.
     */
    header?: Header;
  };

  export type EnableDocRequest = {
    /** A string id (UUID) */
    docId: string;
  };

  export class EnableDocError extends ApiError {
    declare readonly payload:
      | Declared<"gristError", GristError>
      | Declared<"gristError2", GristError>
      | Undeclared;

    static readonly errors: ErrorDecoders<EnableDocError> = [
      { on: 403, kind: "gristError", decode: { kind: "json", schema: gristErrorSchema } },
      { on: 404, kind: "gristError2", decode: { kind: "json", schema: gristErrorSchema } },
    ];
  }

  export type FlushDocRequest = {
    /** A string id (UUID) */
    docId: string;
  };

  export type ForceReloadRequest = {
    /** A string id (UUID) */
    docId: string;
  };

  export type ForkDocRequest = {
    /** A string id (UUID) */
    docId: string;
  };

  export class ForkDocError extends ApiError {
    declare readonly payload:
      | Declared<"gristError", GristError>
      | Declared<"gristError2", GristError>
      | Undeclared;

    static readonly errors: ErrorDecoders<ForkDocError> = [
      { on: 400, kind: "gristError", decode: { kind: "json", schema: gristErrorSchema } },
      { on: 403, kind: "gristError2", decode: { kind: "json", schema: gristErrorSchema } },
    ];
  }

  export type GetStatesRequest = {
    /** A string id (UUID) */
    docId: string;
  };

  export type GetTimingStatusRequest = {
    /** A string id (UUID) */
    docId: string;
  };

  export type GetUsersForViewAsRequest = {
    /** A string id (UUID) */
    docId: string;
  };

  export type ImportDocRequest = {
    /** An integer id */
    workspaceId: number;
    /** Contents of a .grist file, as a standard multipart/form-data file entry */
    upload?: FileInput;
    documentName?: string;
  };

  export type ListDocAccessRequest = {
    /** A string id (UUID) */
    docId: string;
  };

  export type ListProposalsRequest = {
    /** A string id (UUID) */
    docId: string;
    /**
     * If true, list proposals where this document is the source. Otherwise list proposals where
     * this document is the destination.
     */
    outgoing?: boolean;
  };

  export type ListSnapshotsRequest = {
    /** A string id (UUID) */
    docId: string;
    /** If true, returns all snapshots including those not in the snapshot inventory */
    raw?: boolean;
  };

  export type ModifyDocRequest = {
    /** A string id (UUID) */
    docId: string;
    /** the changes to make */
    body: DocParameters;
  };

  export type ModifyDocAccessRequest = {
    /** A string id (UUID) */
    docId: string;
    /** the changes to make */
    body: DocsAccessRequest;
  };

  export type MoveDocRequest = {
    /** A string id (UUID) */
    docId: string;
    /** the target workspace */
    body?: DocsMoveRequest;
  };

  export type PinDocRequest = {
    /** A string id (UUID) */
    docId: string;
  };

  export type RecoverDocRequest = {
    /** A string id (UUID) */
    docId: string;
    /** Recovery mode settings */
    body?: DocsRecoverRequest;
  };

  export class RecoverDocError extends ApiError {
    declare readonly payload:
      | Declared<"gristError", GristError>
      | Declared<"gristError2", GristError>
      | Undeclared;

    static readonly errors: ErrorDecoders<RecoverDocError> = [
      { on: 403, kind: "gristError", decode: { kind: "json", schema: gristErrorSchema } },
      { on: 404, kind: "gristError2", decode: { kind: "json", schema: gristErrorSchema } },
    ];
  }

  export type RemoveDocRequest = {
    /** A string id (UUID) */
    docId: string;
    /** If true, permanently delete instead of moving to trash */
    permanent?: boolean;
  };

  export type RemoveSnapshotsRequest = {
    /** A string id (UUID) */
    docId: string;
    body?: DocsSnapshotsRemoveRequest;
  };

  export type ReplaceDocRequest = {
    /** A string id (UUID) */
    docId: string;
    body?: DocsReplaceRequest;
  };

  export type StartTimingRequest = {
    /** A string id (UUID) */
    docId: string;
  };

  export class StartTimingError extends ApiError {
    declare readonly payload: Declared<"gristError", GristError> | Undeclared;

    static readonly errors: ErrorDecoders<StartTimingError> = [
      { on: 400, kind: "gristError", decode: { kind: "json", schema: gristErrorSchema } },
    ];
  }

  export type StopTimingRequest = {
    /** A string id (UUID) */
    docId: string;
  };

  export class StopTimingError extends ApiError {
    declare readonly payload: Declared<"gristError", GristError> | Undeclared;

    static readonly errors: ErrorDecoders<StopTimingError> = [
      { on: 400, kind: "gristError", decode: { kind: "json", schema: gristErrorSchema } },
    ];
  }

  export type UnpinDocRequest = {
    /** A string id (UUID) */
    docId: string;
  };

  export type UnremoveDocRequest = {
    /** A string id (UUID) */
    docId: string;
  };
}
