import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { BinaryContent } from "../core/binary.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  documentContentResponseSchema,
  type DocumentContentResponse,
} from "../models/document-content-response.js";
import { documentResponseSchema, type DocumentResponse } from "../models/document-response.js";
import { problemInternalSchema, type Problem } from "../models/problem.js";
import {
  uploadDocumentRequestInternalSchema,
  type UploadDocumentRequest,
} from "../models/upload-document-request.js";
import type { Servers } from "../servers.js";

/**
 * Endpoints for uploading and managing documents.
 */
export class DocumentApi {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Delete a Document
   *
   * @remarks
   * Deletes a `Document` by its ID. Deletion behaves similarly to deleting a `SignatureRequest` and
   * does not necessarily remove the object from the system immediately.
   *
   * If more than one participant is involved, the DELETE request only removes the current user from
   * the `Document`.
   *
   * The system permanently removes the `Document` once the last user deletes it via the Skribble
   * web application.
   *
   * **Async cascade note:** If the `Document`'s parent `SignatureRequest` was recently deleted, the
   * server-side cascade that removes associated documents runs asynchronously. During this window
   * the document is still listed by `GET /documents` but returns `403 Forbidden` on delete
   * attempts. Retry after a few seconds — the document will either have been removed by the cascade
   * or the delete will succeed.
   *
   * @returns OK
   *
   * @throws {@link DocumentApi.DeleteDocumentError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link SkribbleError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteDocument(
    request: DocumentApi.DeleteDocumentRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, DocumentApi.DeleteDocumentError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.defaultSkribbleDocumentApi("/documents/{DOC_ID}"),
        auth: this.#auth.bearer,
        pathParams: [{ name: "DOC_ID", value: request.docId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: DocumentApi.DeleteDocumentError,
      },
      options,
    );
  }

  /**
   * Get Document Content
   *
   * @remarks
   * Downloads the content of the document identified by its ID. Returns either a PDF binary or a
   * JSON object containing a Base64-encoded PDF.
   *
   * @returns PDF or JSON with Base64-encoded PDF
   *
   * @throws {@link DocumentApi.GetDocumentContentError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link SkribbleError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getDocumentContent(
    request: DocumentApi.GetDocumentContentRequest,
    options?: RequestOptions,
  ): ApiPromise<DocumentContentResponse, DocumentApi.GetDocumentContentError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.defaultSkribbleDocumentApi("/documents/{DOC_ID}/content"),
        auth: this.#auth.bearer,
        pathParams: [{ name: "DOC_ID", value: request.docId, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: documentContentResponseSchema },
        errorFactory: DocumentApi.GetDocumentContentError,
      },
      options,
    );
  }

  /**
   * Get Document Metadata
   *
   * @remarks
   * Fetches the metadata for the `Document` identified by its ID.
   *
   * @returns OK
   *
   * @throws {@link DocumentApi.GetDocumentMetadataError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link SkribbleError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getDocumentMetadata(
    request: DocumentApi.GetDocumentMetadataRequest,
    options?: RequestOptions,
  ): ApiPromise<DocumentResponse, DocumentApi.GetDocumentMetadataError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.defaultSkribbleDocumentApi("/documents/{DOC_ID}"),
        auth: this.#auth.bearer,
        pathParams: [{ name: "DOC_ID", value: request.docId, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: documentResponseSchema },
        errorFactory: DocumentApi.GetDocumentMetadataError,
      },
      options,
    );
  }

  /**
   * Get Document Page Preview
   *
   * @remarks
   * Returns a preview image for a specific page of the uploaded PDF document. Page numbering starts
   * at **0** for the first page.
   *
   * > Use the optional `scale` parameter to control the preview size: > `scale=100` returns a
   * full-size preview, while `scale=20` returns a > thumbnail.
   *
   * @returns Preview image
   *
   * @throws {@link DocumentApi.GetDocumentPreviewError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link SkribbleError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getDocumentPreview(
    request: DocumentApi.GetDocumentPreviewRequest,
    options?: RequestOptions,
  ): ApiPromise<BinaryContent, DocumentApi.GetDocumentPreviewError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.defaultSkribbleDocumentApi("/documents/{DOC_ID}/pages/{PAGE_ID}"),
        auth: this.#auth.bearer,
        pathParams: [
          { name: "DOC_ID", value: request.docId, schema: s.string() },
          { name: "PAGE_ID", value: request.pageId, schema: s.int() },
        ],
        query: [{ name: "scale", value: request.scale, schema: s.defaulted(s.float64(), 100) }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "binary", contentType: "application/octet-stream" },
        errorFactory: DocumentApi.GetDocumentPreviewError,
      },
      options,
    );
  }

  /**
   * List All Accessible Documents
   *
   * @remarks
   * Returns an array of all accessible `Document` objects.
   *
   * @returns OK
   *
   * @throws {@link DocumentApi.GetDocumentsError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link SkribbleError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getDocuments(options?: RequestOptions): ApiPromise<DocumentResponse[], DocumentApi.GetDocumentsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.defaultSkribbleDocumentApi("/documents"),
        auth: this.#auth.bearer,
        pathParams: [],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => documentResponseSchema)) },
        errorFactory: DocumentApi.GetDocumentsError,
      },
      options,
    );
  }

  /**
   * Upload a Document
   *
   * @remarks
   * Upload using a **Base64 encoded** file as `content`.
   *
   * **Content size limits**: Very large uploads are rejected by the gateway in front of the API
   * before the request reaches it, returning a `403 Forbidden` response. This currently returns a
   * plain body instead of the standard Problem+JSON error envelope used elsewhere in this API; a
   * fix to align it is planned.
   *
   * @returns Created
   *
   * @throws {@link DocumentApi.UploadDocumentError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link SkribbleError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  uploadDocument(
    request: DocumentApi.UploadDocumentRequestParams,
    options?: RequestOptions,
  ): ApiPromise<DocumentResponse, DocumentApi.UploadDocumentError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.defaultSkribbleDocumentApi("/documents"),
        auth: this.#auth.bearer,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: uploadDocumentRequestInternalSchema },
      },
      {
        success: { kind: "json", schema: documentResponseSchema },
        errorFactory: DocumentApi.UploadDocumentError,
      },
      options,
    );
  }
}

export namespace DocumentApi {
  export type DeleteDocumentRequest = {
    /** Unique ID received when creating the Document Request object */
    docId: string;
  };

  export class DeleteDocumentError extends ApiError {
    declare readonly payload:
      | Declared<"problem", Problem>
      | Declared<"problem2", Problem>
      | Declared<"problem3", Problem>
      | Declared<"problem4", Problem>
      | Declared<"problem5", Problem>
      | Declared<"problem6", Problem>
      | Declared<"problem7", Problem>
      | Undeclared;

    static readonly errors: ErrorDecoders<DeleteDocumentError> = [
      { on: 400, kind: "problem", decode: { kind: "json", schema: problemInternalSchema } },
      { on: 401, kind: "problem2", decode: { kind: "json", schema: problemInternalSchema } },
      { on: 403, kind: "problem3", decode: { kind: "json", schema: problemInternalSchema } },
      { on: 404, kind: "problem4", decode: { kind: "json", schema: problemInternalSchema } },
      { on: 429, kind: "problem5", decode: { kind: "json", schema: problemInternalSchema } },
      { on: 500, kind: "problem6", decode: { kind: "json", schema: problemInternalSchema } },
      { on: 503, kind: "problem7", decode: { kind: "json", schema: problemInternalSchema } },
    ];
  }

  export type GetDocumentContentRequest = {
    /** Unique ID received when creating the Document Request object */
    docId: string;
  };

  export class GetDocumentContentError extends ApiError {
    declare readonly payload:
      | Declared<"problem", Problem>
      | Declared<"problem2", Problem>
      | Declared<"problem3", Problem>
      | Declared<"problem4", Problem>
      | Declared<"problem5", Problem>
      | Declared<"problem6", Problem>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetDocumentContentError> = [
      { on: 400, kind: "problem", decode: { kind: "json", schema: problemInternalSchema } },
      { on: 401, kind: "problem2", decode: { kind: "json", schema: problemInternalSchema } },
      { on: 404, kind: "problem3", decode: { kind: "json", schema: problemInternalSchema } },
      { on: 429, kind: "problem4", decode: { kind: "json", schema: problemInternalSchema } },
      { on: 500, kind: "problem5", decode: { kind: "json", schema: problemInternalSchema } },
      { on: 503, kind: "problem6", decode: { kind: "json", schema: problemInternalSchema } },
    ];
  }

  export type GetDocumentMetadataRequest = {
    /** Unique ID received when creating the Document Request object */
    docId: string;
  };

  export class GetDocumentMetadataError extends ApiError {
    declare readonly payload:
      | Declared<"problem", Problem>
      | Declared<"problem2", Problem>
      | Declared<"problem3", Problem>
      | Declared<"problem4", Problem>
      | Declared<"problem5", Problem>
      | Declared<"problem6", Problem>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetDocumentMetadataError> = [
      { on: 400, kind: "problem", decode: { kind: "json", schema: problemInternalSchema } },
      { on: 401, kind: "problem2", decode: { kind: "json", schema: problemInternalSchema } },
      { on: 404, kind: "problem3", decode: { kind: "json", schema: problemInternalSchema } },
      { on: 429, kind: "problem4", decode: { kind: "json", schema: problemInternalSchema } },
      { on: 500, kind: "problem5", decode: { kind: "json", schema: problemInternalSchema } },
      { on: 503, kind: "problem6", decode: { kind: "json", schema: problemInternalSchema } },
    ];
  }

  export type GetDocumentPreviewRequest = {
    /** Unique ID received when creating the Document Request object */
    docId: string;
    /** Page ID of the document */
    pageId: number;
    /** The scaling factor for the image. @default 100 */
    scale?: number;
  };

  export const getDocumentPreviewRequestSchema: Schema<GetDocumentPreviewRequest> = s.lazySchema(() =>
    s.object<GetDocumentPreviewRequest>({
      docId: s.string(),
      pageId: s.int(),
      scale: s.defaulted(s.float64().check(s.gte(0)), 100),
    }),
  );

  export class GetDocumentPreviewError extends ApiError {
    declare readonly payload:
      | Declared<"problem", Problem>
      | Declared<"problem2", Problem>
      | Declared<"problem3", Problem>
      | Declared<"problem4", Problem>
      | Declared<"problem5", Problem>
      | Declared<"problem6", Problem>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetDocumentPreviewError> = [
      { on: 400, kind: "problem", decode: { kind: "json", schema: problemInternalSchema } },
      { on: 401, kind: "problem2", decode: { kind: "json", schema: problemInternalSchema } },
      { on: 404, kind: "problem3", decode: { kind: "json", schema: problemInternalSchema } },
      { on: 429, kind: "problem4", decode: { kind: "json", schema: problemInternalSchema } },
      { on: 500, kind: "problem5", decode: { kind: "json", schema: problemInternalSchema } },
      { on: 503, kind: "problem6", decode: { kind: "json", schema: problemInternalSchema } },
    ];
  }

  export class GetDocumentsError extends ApiError {
    declare readonly payload:
      | Declared<"problem", Problem>
      | Declared<"problem2", Problem>
      | Declared<"problem3", Problem>
      | Declared<"problem4", Problem>
      | Declared<"problem5", Problem>
      | Declared<"problem6", Problem>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetDocumentsError> = [
      { on: 400, kind: "problem", decode: { kind: "json", schema: problemInternalSchema } },
      { on: 401, kind: "problem2", decode: { kind: "json", schema: problemInternalSchema } },
      { on: 406, kind: "problem3", decode: { kind: "json", schema: problemInternalSchema } },
      { on: 429, kind: "problem4", decode: { kind: "json", schema: problemInternalSchema } },
      { on: 500, kind: "problem5", decode: { kind: "json", schema: problemInternalSchema } },
      { on: 503, kind: "problem6", decode: { kind: "json", schema: problemInternalSchema } },
    ];
  }

  export type UploadDocumentRequestParams = {
    /** Request body to create a Document object */
    body: UploadDocumentRequest;
  };

  export class UploadDocumentError extends ApiError {
    declare readonly payload:
      | Declared<"problem", Problem>
      | Declared<"problem2", Problem>
      | Declared<"problem3", Problem>
      | Declared<"problem4", Problem>
      | Declared<"problem5", Problem>
      | Declared<"problem6", Problem>
      | Declared<"problem7", Problem>
      | Undeclared;

    static readonly errors: ErrorDecoders<UploadDocumentError> = [
      { on: 400, kind: "problem", decode: { kind: "json", schema: problemInternalSchema } },
      { on: 401, kind: "problem2", decode: { kind: "json", schema: problemInternalSchema } },
      { on: 403, kind: "problem3", decode: { kind: "json", schema: problemInternalSchema } },
      { on: 406, kind: "problem4", decode: { kind: "json", schema: problemInternalSchema } },
      { on: 429, kind: "problem5", decode: { kind: "json", schema: problemInternalSchema } },
      { on: 500, kind: "problem6", decode: { kind: "json", schema: problemInternalSchema } },
      { on: 503, kind: "problem7", decode: { kind: "json", schema: problemInternalSchema } },
    ];
  }
}
