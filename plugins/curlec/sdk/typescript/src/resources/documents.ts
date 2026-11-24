import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { BinaryContent, FileInput } from "../core/binary.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { documentSchema, type Document } from "../models/document.js";
import { errorSchema, type Error } from "../models/error.js";
import type { Servers } from "../servers.js";

/**
 * Document uploads for dispute evidence. Upload JPEG, PNG, or PDF files and receive a document ID
 * to reference in dispute contest submissions.
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
   * Fetch document info
   *
   * @remarks
   * Retrieve metadata for an uploaded document (name, MIME type, size, purpose). Document IDs are
   * exactly 14 alphanumeric characters.
   *
   * @returns Document metadata.
   *
   * @throws {@link Documents.FetchDocumentError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link CurlecError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  fetchDocument(
    request: Documents.FetchDocumentRequest,
    options?: RequestOptions,
  ): ApiPromise<Document, Documents.FetchDocumentError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/documents/{id}"),
        auth: anyAuth(
          this.#auth.basicAuth,
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials.forScopes("read_only"),
        ),
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: documentSchema },
        errorFactory: Documents.FetchDocumentError,
      },
      options,
    );
  }

  /**
   * Fetch document content
   *
   * @remarks
   * Retrieve the binary content of a previously uploaded document. Returns the raw file bytes.
   *
   * @returns Document binary content.
   *
   * @throws {@link Documents.FetchDocumentContentError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link CurlecError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  fetchDocumentContent(
    request: Documents.FetchDocumentContentRequest,
    options?: RequestOptions,
  ): ApiPromise<BinaryContent, Documents.FetchDocumentContentError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/documents/{id}/content"),
        auth: anyAuth(
          this.#auth.basicAuth,
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials.forScopes("read_only"),
        ),
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "binary", contentType: "application/octet-stream" },
        errorFactory: Documents.FetchDocumentContentError,
      },
      options,
    );
  }

  /**
   * Upload a document
   *
   * @remarks
   * Upload a file to Razorpay. Returns a document ID that can be used in dispute evidence
   * submissions. Supports JPEG, PNG, and PDF formats.
   *
   * @returns Document uploaded.
   *
   * @throws {@link Documents.UploadDocumentError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link CurlecError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  uploadDocument(
    request: Documents.UploadDocumentRequest,
    options?: RequestOptions,
  ): ApiPromise<Document, Documents.UploadDocumentError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/documents"),
        auth: anyAuth(
          this.#auth.basicAuth,
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials.forScopes("read_only"),
        ),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "multipart",
          value: [
            { kind: "file", name: "file", value: request.file },
            { kind: "text", name: "purpose", value: request.purpose, schema: s.string() },
          ],
        },
      },
      {
        success: { kind: "json", schema: documentSchema },
        errorFactory: Documents.UploadDocumentError,
      },
      options,
    );
  }
}

export namespace Documents {
  export type FetchDocumentRequest = {
    /** Document ID (doc_*). Exactly 14 alphanumeric characters. */
    id: string;
  };

  export class FetchDocumentError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<FetchDocumentError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "error4", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type FetchDocumentContentRequest = {
    /** Document ID. Exactly 14 alphanumeric characters. */
    id: string;
  };

  export class FetchDocumentContentError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<FetchDocumentContentError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "error4", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type UploadDocumentRequest = {
    /** File to upload. Supported: JPEG, PNG, PDF. */
    file: FileInput;
    /** Reason for upload. Example: dispute_evidence. */
    purpose: string;
  };

  export class UploadDocumentError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<UploadDocumentError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "error3", decode: { kind: "json", schema: errorSchema } },
    ];
  }
}
