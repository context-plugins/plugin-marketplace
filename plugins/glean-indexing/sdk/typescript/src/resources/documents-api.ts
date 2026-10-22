import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  bulkIndexDocumentsRequestSchema,
  type BulkIndexDocumentsRequest,
} from "../models/bulk-index-documents-request.js";
import {
  deleteDocumentRequestSchema,
  type DeleteDocumentRequest,
} from "../models/delete-document-request.js";
import { indexDocumentRequestSchema, type IndexDocumentRequest } from "../models/index-document-request.js";
import {
  indexDocumentsRequestSchema,
  type IndexDocumentsRequest,
} from "../models/index-documents-request.js";
import {
  processAllDocumentsRequestSchema,
  type ProcessAllDocumentsRequest,
} from "../models/process-all-documents-request.js";
import {
  updatePermissionsRequestSchema,
  type UpdatePermissionsRequest,
} from "../models/update-permissions-request.js";
import type { Servers } from "../servers.js";

/**
 * Index documents from a datasource.
 */
export class DocumentsApi {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Bulk index documents
   *
   * @remarks
   * Replaces the documents in a datasource using paginated batch API calls. Please refer to the
   * [bulk indexing](https://developers.glean.com/indexing/documents/bulk-upload-model)
   * documentation for an explanation of how to use bulk endpoints.
   *
   * @returns OK
   *
   * @throws {@link DocumentsApi.BulkIndexDocumentsError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link GleanIndexingApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  bulkIndexDocuments(
    request: DocumentsApi.BulkIndexDocumentsRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, DocumentsApi.BulkIndexDocumentsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/index/v1/bulkindexdocuments"),
        auth: this.#auth.apiToken,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: bulkIndexDocumentsRequestSchema },
      },
      {
        success: { kind: "empty" },
        errorFactory: DocumentsApi.BulkIndexDocumentsError,
      },
      options,
    );
  }

  /**
   * Delete document
   *
   * @remarks
   * Deletes the specified document from the index. Succeeds if document is not present.
   *
   * @returns OK
   *
   * @throws {@link DocumentsApi.DeleteDocumentError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link GleanIndexingApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  deleteDocument(
    request: DocumentsApi.DeleteDocumentRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, DocumentsApi.DeleteDocumentError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/index/v1/deletedocument"),
        auth: this.#auth.apiToken,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: deleteDocumentRequestSchema },
      },
      {
        success: { kind: "empty" },
        errorFactory: DocumentsApi.DeleteDocumentError,
      },
      options,
    );
  }

  /**
   * Index document
   *
   * @remarks
   * Adds a document to the index or updates an existing document.
   *
   * @returns OK
   *
   * @throws {@link DocumentsApi.IndexDocumentError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link GleanIndexingApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  indexDocument(
    request: DocumentsApi.IndexDocumentRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, DocumentsApi.IndexDocumentError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/index/v1/indexdocument"),
        auth: this.#auth.apiToken,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: indexDocumentRequestSchema },
      },
      {
        success: { kind: "empty" },
        errorFactory: DocumentsApi.IndexDocumentError,
      },
      options,
    );
  }

  /**
   * Index documents
   *
   * @remarks
   * Adds or updates multiple documents in the index. Please refer to the [bulk
   * indexing](https://developers.glean.com/indexing/documents/bulk-indexing/choosing-indexdocuments-vs-bulkindexdocuments)
   * documentation for an explanation of when to use this endpoint.
   *
   * @returns OK
   *
   * @throws {@link DocumentsApi.IndexDocumentsError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link GleanIndexingApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  indexDocuments(
    request: DocumentsApi.IndexDocumentsRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, DocumentsApi.IndexDocumentsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/index/v1/indexdocuments"),
        auth: this.#auth.apiToken,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: indexDocumentsRequestSchema },
      },
      {
        success: { kind: "empty" },
        errorFactory: DocumentsApi.IndexDocumentsError,
      },
      options,
    );
  }

  /**
   * Schedules the processing of uploaded documents
   *
   * @remarks
   * Schedules the immediate processing of documents uploaded through the indexing API. By default
   * the uploaded documents will be processed asynchronously but this API can be used to schedule
   * processing of all documents on demand.
   *
   * If a `datasource` parameter is specified, processing is limited to that custom datasource.
   * Without it, processing applies to all documents across all custom datasources.
   * #### Rate Limits
   * This endpoint is rate-limited to one usage every 3 hours. Exceeding this limit results in a 429
   * response code. Here's how the rate limit works:
   * 1. Calling `/processalldocuments` for datasource `foo` prevents another call for `foo` for 3
   *    hours.
   * 2. Calling `/processalldocuments` for datasource `foo` doesn't affect immediate calls for
   *    `bar`.
   * 3. Calling `/processalldocuments` for all datasources prevents any datasource calls for 3
   *    hours.
   * 4. Calling `/processalldocuments` for datasource `foo` doesn't affect immediate calls for all
   *    datasources.
   *
   * For more frequent document processing, contact Glean support.
   *
   * @returns OK
   *
   * @throws {@link DocumentsApi.SchedulesTheProcessingOfUploadedDocumentsError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GleanIndexingApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  schedulesTheProcessingOfUploadedDocuments(
    request: DocumentsApi.SchedulesTheProcessingOfUploadedDocumentsRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, DocumentsApi.SchedulesTheProcessingOfUploadedDocumentsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/index/v1/processalldocuments"),
        auth: this.#auth.apiToken,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => processAllDocumentsRequestSchema)),
        },
      },
      {
        success: { kind: "empty" },
        errorFactory: DocumentsApi.SchedulesTheProcessingOfUploadedDocumentsError,
      },
      options,
    );
  }

  /**
   * Update document permissions
   *
   * @remarks
   * Updates the permissions for a given document without modifying document content.
   *
   * @returns OK
   *
   * @throws {@link DocumentsApi.UpdateDocumentPermissionsError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link GleanIndexingApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  updateDocumentPermissions(
    request: DocumentsApi.UpdateDocumentPermissionsRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, DocumentsApi.UpdateDocumentPermissionsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/index/v1/updatepermissions"),
        auth: this.#auth.apiToken,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: updatePermissionsRequestSchema },
      },
      {
        success: { kind: "empty" },
        errorFactory: DocumentsApi.UpdateDocumentPermissionsError,
      },
      options,
    );
  }
}

export namespace DocumentsApi {
  export type BulkIndexDocumentsRequestParams = {
    body: BulkIndexDocumentsRequest;
  };

  export class BulkIndexDocumentsError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error401", undefined>
      | Declared<"error409", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<BulkIndexDocumentsError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 409, kind: "error409", decode: { kind: "empty" } },
    ];
  }

  export type DeleteDocumentRequestParams = {
    body: DeleteDocumentRequest;
  };

  export class DeleteDocumentError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error401", undefined>
      | Declared<"error409", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<DeleteDocumentError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 409, kind: "error409", decode: { kind: "empty" } },
    ];
  }

  export type IndexDocumentRequestParams = {
    body: IndexDocumentRequest;
  };

  export class IndexDocumentError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error401", undefined>
      | Declared<"error409", undefined>
      | Declared<"error429", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<IndexDocumentError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 409, kind: "error409", decode: { kind: "empty" } },
      { on: 429, kind: "error429", decode: { kind: "empty" } },
    ];
  }

  export type IndexDocumentsRequestParams = {
    body: IndexDocumentsRequest;
  };

  export class IndexDocumentsError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error401", undefined>
      | Declared<"error409", undefined>
      | Declared<"error429", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<IndexDocumentsError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 409, kind: "error409", decode: { kind: "empty" } },
      { on: 429, kind: "error429", decode: { kind: "empty" } },
    ];
  }

  export type SchedulesTheProcessingOfUploadedDocumentsRequest = {
    body?: ProcessAllDocumentsRequest;
  };

  export class SchedulesTheProcessingOfUploadedDocumentsError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error401", undefined>
      | Declared<"error429", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<SchedulesTheProcessingOfUploadedDocumentsError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 429, kind: "error429", decode: { kind: "empty" } },
    ];
  }

  export type UpdateDocumentPermissionsRequest = {
    body: UpdatePermissionsRequest;
  };

  export class UpdateDocumentPermissionsError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error401", undefined>
      | Declared<"error409", undefined>
      | Declared<"error429", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<UpdateDocumentPermissionsError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 409, kind: "error409", decode: { kind: "empty" } },
      { on: 429, kind: "error429", decode: { kind: "empty" } },
    ];
  }
}
