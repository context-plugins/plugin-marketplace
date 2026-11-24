import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { BinaryContent, FileInput } from "../core/binary.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { documentsResponseSchema, type DocumentsResponse } from "../models/documents-response.js";
import { documentsResponse1Schema, type DocumentsResponse1 } from "../models/documents-response1.js";
import { messageResponseSchema, type MessageResponse } from "../models/message-response.js";
import {
  statusJuriSignDocumentsApiSchema,
  type StatusJuriSignDocumentsApi,
} from "../models/status-juri-sign-documents-api.js";
import { validationError1Schema, type ValidationError1 } from "../models/validation-error1.js";
import type { Servers } from "../servers.js";

/**
 * Upload and manage PDF documents
 */
export class Documents {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Delete Document
   *
   * @remarks
   * Delete a document. Only documents in `draft` status can be deleted.
   *
   * @returns Document deleted
   *
   * @throws {@link Documents.DeleteDocumentError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link JuriSignError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteDocument(
    request: Documents.DeleteDocumentRequest,
    options?: RequestOptions,
  ): ApiPromise<MessageResponse, Documents.DeleteDocumentError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/documents/{id}"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: messageResponseSchema },
        errorFactory: Documents.DeleteDocumentError,
      },
      options,
    );
  }

  /**
   * Download Document
   *
   * @remarks
   * Download the original PDF file.
   *
   * @returns PDF file download
   *
   * @throws {@link Documents.DownloadDocumentError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link JuriSignError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  downloadDocument(
    request: Documents.DownloadDocumentRequest,
    options?: RequestOptions,
  ): ApiPromise<BinaryContent, Documents.DownloadDocumentError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/documents/{id}/download"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "binary", contentType: "application/octet-stream" },
        errorFactory: Documents.DownloadDocumentError,
      },
      options,
    );
  }

  /**
   * Get Document
   *
   * @remarks
   * Retrieve details of a specific document.
   *
   * @returns Document details
   *
   * @throws {@link Documents.GetDocumentError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link JuriSignError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getDocument(
    request: Documents.GetDocumentRequest,
    options?: RequestOptions,
  ): ApiPromise<DocumentsResponse1, Documents.GetDocumentError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/documents/{id}"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: documentsResponse1Schema },
        errorFactory: Documents.GetDocumentError,
      },
      options,
    );
  }

  /**
   * List Documents
   *
   * @remarks
   * Retrieve a paginated list of documents belonging to your organization.
   *
   * @returns Documents list
   *
   * @throws {@link Documents.ListDocumentsError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link JuriSignError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listDocuments(
    request: Documents.ListDocumentsRequest = {},
    options?: RequestOptions,
  ): ApiPromise<DocumentsResponse, Documents.ListDocumentsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/documents"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [
          {
            name: "status",
            value: request.status,
            schema: s.optional(s.lazy(() => statusJuriSignDocumentsApiSchema)),
          },
          { name: "search", value: request.search, schema: s.optional(s.string()) },
          { name: "per_page", value: request.perPage, schema: s.defaulted(s.int(), 20) },
          { name: "page", value: request.page, schema: s.defaulted(s.int(), 1) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: documentsResponseSchema },
        errorFactory: Documents.ListDocumentsError,
      },
      options,
    );
  }

  /**
   * Upload Document
   *
   * @remarks
   * Upload a PDF document. Maximum file size is 20 MB.
   *
   * @returns Document uploaded
   *
   * @throws {@link Documents.UploadDocumentError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link JuriSignError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  uploadDocument(
    request: Documents.UploadDocumentRequest,
    options?: RequestOptions,
  ): ApiPromise<DocumentsResponse1, Documents.UploadDocumentError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/documents"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "multipart",
          value: [
            { kind: "file", name: "file", value: request.file },
            { kind: "text", name: "title", value: request.title, schema: s.optional(s.string()) },
          ],
        },
      },
      {
        success: { kind: "json", schema: documentsResponse1Schema },
        errorFactory: Documents.UploadDocumentError,
      },
      options,
    );
  }
}

export namespace Documents {
  export type DeleteDocumentRequest = {
    /** Resource UUID */
    id: string;
  };

  export class DeleteDocumentError extends ApiError {
    declare readonly payload:
      | Declared<"messageResponse", MessageResponse>
      | Declared<"messageResponse2", MessageResponse>
      | Declared<"messageResponse3", MessageResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<DeleteDocumentError> = [
      { on: 401, kind: "messageResponse", decode: { kind: "json", schema: messageResponseSchema } },
      { on: 404, kind: "messageResponse2", decode: { kind: "json", schema: messageResponseSchema } },
      { on: 422, kind: "messageResponse3", decode: { kind: "json", schema: messageResponseSchema } },
    ];
  }

  export type DownloadDocumentRequest = {
    /** Resource UUID */
    id: string;
  };

  export class DownloadDocumentError extends ApiError {
    declare readonly payload:
      | Declared<"messageResponse", MessageResponse>
      | Declared<"messageResponse2", MessageResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<DownloadDocumentError> = [
      { on: 401, kind: "messageResponse", decode: { kind: "json", schema: messageResponseSchema } },
      { on: 404, kind: "messageResponse2", decode: { kind: "json", schema: messageResponseSchema } },
    ];
  }

  export type GetDocumentRequest = {
    /** Resource UUID */
    id: string;
  };

  export class GetDocumentError extends ApiError {
    declare readonly payload:
      | Declared<"messageResponse", MessageResponse>
      | Declared<"messageResponse2", MessageResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetDocumentError> = [
      { on: 401, kind: "messageResponse", decode: { kind: "json", schema: messageResponseSchema } },
      { on: 404, kind: "messageResponse2", decode: { kind: "json", schema: messageResponseSchema } },
    ];
  }

  export type ListDocumentsRequest = {
    /** Filter by document status */
    status?: StatusJuriSignDocumentsApi;
    /** Search by document title */
    search?: string;
    /** Results per page (default: 20, max: 100) @default 20 */
    perPage?: number;
    /** Page number @default 1 */
    page?: number;
  };

  export class ListDocumentsError extends ApiError {
    declare readonly payload: Declared<"messageResponse", MessageResponse> | Undeclared;

    static readonly errors: ErrorDecoders<ListDocumentsError> = [
      { on: 401, kind: "messageResponse", decode: { kind: "json", schema: messageResponseSchema } },
    ];
  }

  export type UploadDocumentRequest = {
    /** PDF file to upload (max 20 MB) */
    file: FileInput;
    /** Document title (defaults to filename if omitted) */
    title?: string;
  };

  export class UploadDocumentError extends ApiError {
    declare readonly payload:
      | Declared<"messageResponse", MessageResponse>
      | Declared<"validationError1", ValidationError1>
      | Undeclared;

    static readonly errors: ErrorDecoders<UploadDocumentError> = [
      { on: 401, kind: "messageResponse", decode: { kind: "json", schema: messageResponseSchema } },
      { on: 422, kind: "validationError1", decode: { kind: "json", schema: validationError1Schema } },
    ];
  }
}
