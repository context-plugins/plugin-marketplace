import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { BinaryContent } from "../core/binary.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { batchHistorySchema, type BatchHistory } from "../models/batch-history.js";
import { batchImportMetadataSchema, type BatchImportMetadata } from "../models/batch-import-metadata.js";
import { batchImportPayloadSchema, type BatchImportPayload } from "../models/batch-import-payload.js";
import { batchImportRetrySchema, type BatchImportRetry } from "../models/batch-import-retry.js";
import { batchImportStatusSchema, type BatchImportStatus } from "../models/batch-import-status.js";
import { batchStatusSchema, type BatchStatus } from "../models/batch-status.js";
import { customTemplateSchema, type CustomTemplate } from "../models/custom-template.js";
import type { Servers } from "../servers.js";

export class BatchImport {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Delete custom template
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link FlowAccountError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  batchImportDeleteCustomTemplate(
    request: BatchImport.BatchImportDeleteCustomTemplateRequest,
    options?: RequestOptions,
  ): ApiPromise<BinaryContent, ApiError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/{culture}/cash-invoices/custom-template/{templateId}"),
        auth: this.#auth.bearer,
        pathParams: [
          { name: "templateId", value: request.templateId, schema: s.nullable(s.string()) },
          { name: "culture", value: request.culture, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "binary", contentType: "application/octet-stream" },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * To get details of a document
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link FlowAccountError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  batchImportGenerateBacthIdMetadata(
    request: BatchImport.BatchImportGenerateBacthIdMetadataRequest,
    options?: RequestOptions,
  ): ApiPromise<BatchImportMetadata, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/{culture}/cash-invoices/batch-metadata"),
        auth: this.#auth.bearer,
        pathParams: [{ name: "culture", value: request.culture, schema: s.string() }],
        query: [{ name: "fileName", value: request.fileName, schema: s.optionalNullable(s.string()) }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: batchImportMetadataSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Get data from Storage
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link FlowAccountError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  batchImportGetBatchS3Data(
    request: BatchImport.BatchImportGetBatchS3DataRequest,
    options?: RequestOptions,
  ): ApiPromise<BinaryContent, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/{culture}/cash-invoices/get-batch-s3-data/{batchId}"),
        auth: this.#auth.bearer,
        pathParams: [
          { name: "batchId", value: request.batchId, schema: s.nullable(s.string()) },
          { name: "culture", value: request.culture, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "binary", contentType: "application/octet-stream" },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Get custom template
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link FlowAccountError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  batchImportGetCustomTemplate(
    request: BatchImport.BatchImportGetCustomTemplateRequest,
    options?: RequestOptions,
  ): ApiPromise<BinaryContent, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/{culture}/cash-invoices/custom-template/{templateId}"),
        auth: this.#auth.bearer,
        pathParams: [
          { name: "templateId", value: request.templateId, schema: s.nullable(s.string()) },
          { name: "culture", value: request.culture, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "binary", contentType: "application/octet-stream" },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Get Original File
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link FlowAccountError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  batchImportGetOrgingalFile(
    request: BatchImport.BatchImportGetOrgingalFileRequest,
    options?: RequestOptions,
  ): ApiPromise<BinaryContent, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/{culture}/cash-invoices/get-batch-import-org-file/{batchId}"),
        auth: this.#auth.bearer,
        pathParams: [
          { name: "batchId", value: request.batchId, schema: s.nullable(s.string()) },
          { name: "culture", value: request.culture, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "binary", contentType: "application/octet-stream" },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Get presign url to upload the file with payloads
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link FlowAccountError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  batchImportGetPresign(
    request: BatchImport.BatchImportGetPresignRequest,
    options?: RequestOptions,
  ): ApiPromise<BinaryContent, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/{culture}/cash-invoices/get-presign-for-upload-simpledoc"),
        auth: this.#auth.bearer,
        pathParams: [{ name: "culture", value: request.culture, schema: s.string() }],
        query: [{ name: "id", value: request.id, schema: s.optional(s.int()) }],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: batchImportPayloadSchema },
      },
      {
        success: { kind: "binary", contentType: "application/octet-stream" },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Mark the batch as viewed in notification
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link FlowAccountError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  batchImportMarkViewed(
    request: BatchImport.BatchImportMarkViewedRequest,
    options?: RequestOptions,
  ): ApiPromise<boolean, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/{culture}/cash-invoices/mark-viewed"),
        auth: this.#auth.bearer,
        pathParams: [{ name: "culture", value: request.culture, schema: s.string() }],
        query: [
          { name: "userId", value: request.userId, schema: s.optional(s.int()) },
          { name: "batchId", value: request.batchId, schema: s.optionalNullable(s.string()) },
        ],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: s.int() },
      },
      {
        success: { kind: "json", schema: s.boolean() },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Query the batch by id and status
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link FlowAccountError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  batchImportQueryBatch(
    request: BatchImport.BatchImportQueryBatchRequest,
    options?: RequestOptions,
  ): ApiPromise<BatchStatus, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/{culture}/cash-invoices/query-batch"),
        auth: this.#auth.bearer,
        pathParams: [{ name: "culture", value: request.culture, schema: s.string() }],
        query: [
          {
            name: "status",
            value: request.status,
            schema: s.optional(s.lazy(() => batchImportStatusSchema)),
          },
        ],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: s.string() },
      },
      {
        success: { kind: "json", schema: batchStatusSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Batch import query batch history
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link FlowAccountError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  batchImportQueryBatchHistory(
    request: BatchImport.BatchImportQueryBatchHistoryRequest,
    options?: RequestOptions,
  ): ApiPromise<BatchHistory, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/{culture}/cash-invoices/batch-import-history"),
        auth: this.#auth.bearer,
        pathParams: [{ name: "culture", value: request.culture, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: batchHistorySchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Batch import retry simple documents
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link FlowAccountError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  batchImportRetrySimpleDocuments(
    request: BatchImport.BatchImportRetrySimpleDocumentsRequest,
    options?: RequestOptions,
  ): ApiPromise<boolean, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/{culture}/cash-invoices/retry-simple-documents"),
        auth: this.#auth.bearer,
        pathParams: [{ name: "culture", value: request.culture, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: batchImportRetrySchema },
      },
      {
        success: { kind: "json", schema: s.boolean() },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Create or Update (Upsert) custom template
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link FlowAccountError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  batchImportUpsertCustomTemplate(
    request: BatchImport.BatchImportUpsertCustomTemplateRequest,
    options?: RequestOptions,
  ): ApiPromise<BinaryContent, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/{culture}/cash-invoices/custom-template"),
        auth: this.#auth.bearer,
        pathParams: [{ name: "culture", value: request.culture, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: customTemplateSchema },
      },
      {
        success: { kind: "binary", contentType: "application/octet-stream" },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace BatchImport {
  export type BatchImportDeleteCustomTemplateRequest = {
    templateId: string | null;
    culture: string;
  };

  export type BatchImportGenerateBacthIdMetadataRequest = {
    culture: string;
    fileName?: string | null;
  };

  export type BatchImportGetBatchS3DataRequest = {
    batchId: string | null;
    culture: string;
  };

  export type BatchImportGetCustomTemplateRequest = {
    templateId: string | null;
    culture: string;
  };

  export type BatchImportGetOrgingalFileRequest = {
    batchId: string | null;
    culture: string;
  };

  export type BatchImportGetPresignRequest = {
    culture: string;
    id?: number;
    body: BatchImportPayload;
  };

  export type BatchImportMarkViewedRequest = {
    culture: string;
    userId?: number;
    batchId?: string | null;
    body: number;
  };

  export type BatchImportQueryBatchRequest = {
    culture: string;
    status?: BatchImportStatus;
    body: string;
  };

  export type BatchImportQueryBatchHistoryRequest = {
    culture: string;
  };

  export type BatchImportRetrySimpleDocumentsRequest = {
    culture: string;
    body: BatchImportRetry;
  };

  export type BatchImportUpsertCustomTemplateRequest = {
    culture: string;
    body: CustomTemplate;
  };
}
