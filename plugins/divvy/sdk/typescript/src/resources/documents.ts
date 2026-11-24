import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { noneAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { bdcErrorInternalSchema, type BdcError } from "../models/bdc-error.js";
import {
  documentCreateResponseDtoSchema,
  type DocumentCreateResponseDto,
} from "../models/document-create-response-dto.js";
import { documentResponseDtoSchema, type DocumentResponseDto } from "../models/document-response-dto.js";
import {
  documentUploadStatusResponseDtoSchema,
  type DocumentUploadStatusResponseDto,
} from "../models/document-upload-status-response-dto.js";
import {
  listResponseDtoDocumentResponseDtoSchema,
  type ListResponseDtoDocumentResponseDto,
} from "../models/list-response-dto-document-response-dto.js";
import type { Servers } from "../servers.js";

export class Documents {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;

  constructor(rawClient: RawClient, servers: Servers) {
    this.#rawClient = rawClient;
    this.#servers = servers;
  }

  /**
   * Upload bill document
   *
   * @remarks
   * Upload a document for an existing bill. The file size limit is 6 MB. When you upload a bill
   * document, the uploaded document is available on the bill details page in the BILL web app.
   *
   * In the response, the `name`, `createdTime`, and `downloadLink` is available when the upload is
   * complete.
   *
   * When you upload a document, it takes a few minutes for BILL to complete the upload process.
   * * **Upload in-progress**: A temporary BILL-generated ID is available for the document when the
   *   upload is in progress. The value begins with `0du`. You can get the document upload status
   *   with `GET /v3/documents/upload-status`.
   * * **Upload complete**: A BILL-generated ID is available for the document when the upload is
   *   complete. The value begins with `00h`. You can get details about the uploaded document with
   *   `GET /v3/documents/bills/{billId}`.
   *
   * See Documents and attachments in the Guides section for more information, sample requests, and
   * responses.
   *
   * @returns Upload bill document response
   *
   * @throws {@link Documents.CreateBillDocumentError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link DivvyError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createBillDocument(
    request: Documents.CreateBillDocumentRequest,
    options?: RequestOptions,
  ): ApiPromise<DocumentCreateResponseDto, Documents.CreateBillDocumentError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v3/documents/bills/{billId}"),
        auth: noneAuth,
        pathParams: [{ name: "billId", value: request.billId, schema: s.string() }],
        query: [{ name: "name", value: request.name, schema: s.string() }],
        headers: [
          { name: "sessionId", value: request.sessionId, schema: s.optionalNullable(s.string()) },
          { name: "devKey", value: request.devKey, schema: s.optionalNullable(s.string()) },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "json", value: request.body, schema: s.array(s.string()) },
      },
      {
        success: { kind: "json", schema: documentCreateResponseDtoSchema },
        errorFactory: Documents.CreateBillDocumentError,
      },
      options,
    );
  }

  /**
   * Get document details
   *
   * @remarks
   * Get details about a document associated with a bill.
   *
   * From the response, use `downloadLink` in a GET request to download the document.
   *
   * ```
   * curl '{downloadLink}' --header 'sessionId: {session_id}' --output {document_name}
   * ```
   *
   * @returns Get document details response
   *
   * @throws {@link Documents.GetDocumentError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link DivvyError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getDocument(
    request: Documents.GetDocumentRequest,
    options?: RequestOptions,
  ): ApiPromise<DocumentResponseDto, Documents.GetDocumentError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/documents/{documentId}"),
        auth: noneAuth,
        pathParams: [{ name: "documentId", value: request.documentId, schema: s.string() }],
        query: [],
        headers: [
          { name: "sessionId", value: request.sessionId, schema: s.optionalNullable(s.string()) },
          { name: "devKey", value: request.devKey, schema: s.optionalNullable(s.string()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: documentResponseDtoSchema },
        errorFactory: Documents.GetDocumentError,
      },
      options,
    );
  }

  /**
   * Get list of documents
   *
   * @remarks
   * Get a list of documents associated with a bill.
   *
   * From the response, use `downloadLink` in a GET request to download the document.
   *
   * ```
   * curl '{downloadLink}' --header 'sessionId: {session_id}' --output {document_name}
   * ```
   *
   * @returns Get list of documents response
   *
   * @throws {@link Documents.ListDocumentsError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link DivvyError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listDocuments(
    request: Documents.ListDocumentsRequest,
    options?: RequestOptions,
  ): ApiPromise<ListResponseDtoDocumentResponseDto, Documents.ListDocumentsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/documents/bills/{billId}"),
        auth: noneAuth,
        pathParams: [{ name: "billId", value: request.billId, schema: s.string() }],
        query: [
          { name: "max", value: request.max, schema: s.optionalNullable(s.int()) },
          { name: "page", value: request.page, schema: s.optionalNullable(s.string()) },
        ],
        headers: [
          { name: "sessionId", value: request.sessionId, schema: s.optionalNullable(s.string()) },
          { name: "devKey", value: request.devKey, schema: s.optionalNullable(s.string()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listResponseDtoDocumentResponseDtoSchema },
        errorFactory: Documents.ListDocumentsError,
      },
      options,
    );
  }

  /**
   * Get document upload status
   *
   * @remarks
   * Get status of a document upload. Use this endpoint to identify when a document upload is
   * complete.
   * * BILL generates an `uploadId` for the document when the upload is in progress (`IN_PROGRESS`).
   *   The value begins with `0du`.
   * * BILL generates a `documentId` for the document when the upload is complete (`UPLOADED`). The
   *   value begins with `00h`.
   *
   * @returns Get document upload status response
   *
   * @throws {@link Documents.UploadStatusError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link DivvyError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  uploadStatus(
    request: Documents.UploadStatusRequest,
    options?: RequestOptions,
  ): ApiPromise<DocumentUploadStatusResponseDto[], Documents.UploadStatusError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/documents/upload-status"),
        auth: noneAuth,
        pathParams: [],
        query: [{ name: "ids", value: request.ids, schema: s.string() }],
        headers: [
          { name: "sessionId", value: request.sessionId, schema: s.optionalNullable(s.string()) },
          { name: "devKey", value: request.devKey, schema: s.optionalNullable(s.string()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => documentUploadStatusResponseDtoSchema)) },
        errorFactory: Documents.UploadStatusError,
      },
      options,
    );
  }
}

export namespace Documents {
  export type CreateBillDocumentRequest = {
    billId: string;
    name: string;
    sessionId?: string | null;
    devKey?: string | null;
    body: string[];
  };

  export const createBillDocumentRequestSchema: Schema<CreateBillDocumentRequest> = s.lazySchema(() =>
    s.object<CreateBillDocumentRequest>({
      billId: s.string().check(s.minLength(1)),
      name: s.string().check(s.minLength(1)),
      sessionId: s.optionalNullable(s.string()),
      devKey: s.optionalNullable(s.string()),
      body: s.array(s.string()),
    }),
  );

  export class CreateBillDocumentError extends ApiError {
    declare readonly payload:
      | Declared<"error4XX", BdcError[]>
      | Declared<"error5XX", BdcError[]>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateBillDocumentError> = [
      {
        on: [400, 499],
        kind: "error4XX",
        decode: { kind: "json", schema: s.array(s.lazy(() => bdcErrorInternalSchema)) },
      },
      {
        on: [500, 599],
        kind: "error5XX",
        decode: { kind: "json", schema: s.array(s.lazy(() => bdcErrorInternalSchema)) },
      },
    ];
  }

  export type GetDocumentRequest = {
    documentId: string;
    sessionId?: string | null;
    devKey?: string | null;
  };

  export const getDocumentRequestSchema: Schema<GetDocumentRequest> = s.lazySchema(() =>
    s.object<GetDocumentRequest>({
      documentId: s.string().check(s.minLength(1)),
      sessionId: s.optionalNullable(s.string()),
      devKey: s.optionalNullable(s.string()),
    }),
  );

  export class GetDocumentError extends ApiError {
    declare readonly payload:
      | Declared<"error4XX", BdcError[]>
      | Declared<"error5XX", BdcError[]>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetDocumentError> = [
      {
        on: [400, 499],
        kind: "error4XX",
        decode: { kind: "json", schema: s.array(s.lazy(() => bdcErrorInternalSchema)) },
      },
      {
        on: [500, 599],
        kind: "error5XX",
        decode: { kind: "json", schema: s.array(s.lazy(() => bdcErrorInternalSchema)) },
      },
    ];
  }

  export type ListDocumentsRequest = {
    billId: string;
    max?: number | null;
    page?: string | null;
    sessionId?: string | null;
    devKey?: string | null;
  };

  export const listDocumentsRequestSchema: Schema<ListDocumentsRequest> = s.lazySchema(() =>
    s.object<ListDocumentsRequest>({
      billId: s.string().check(s.minLength(1)),
      max: s.optionalNullable(s.int().check(s.gte(1), s.lte(100))),
      page: s.optionalNullable(s.string()),
      sessionId: s.optionalNullable(s.string()),
      devKey: s.optionalNullable(s.string()),
    }),
  );

  export class ListDocumentsError extends ApiError {
    declare readonly payload:
      | Declared<"error4XX", BdcError[]>
      | Declared<"error5XX", BdcError[]>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListDocumentsError> = [
      {
        on: [400, 499],
        kind: "error4XX",
        decode: { kind: "json", schema: s.array(s.lazy(() => bdcErrorInternalSchema)) },
      },
      {
        on: [500, 599],
        kind: "error5XX",
        decode: { kind: "json", schema: s.array(s.lazy(() => bdcErrorInternalSchema)) },
      },
    ];
  }

  export type UploadStatusRequest = {
    ids: string;
    sessionId?: string | null;
    devKey?: string | null;
  };

  export class UploadStatusError extends ApiError {
    declare readonly payload:
      | Declared<"error4XX", BdcError[]>
      | Declared<"error5XX", BdcError[]>
      | Undeclared;

    static readonly errors: ErrorDecoders<UploadStatusError> = [
      {
        on: [400, 499],
        kind: "error4XX",
        decode: { kind: "json", schema: s.array(s.lazy(() => bdcErrorInternalSchema)) },
      },
      {
        on: [500, 599],
        kind: "error5XX",
        decode: { kind: "json", schema: s.array(s.lazy(() => bdcErrorInternalSchema)) },
      },
    ];
  }
}
