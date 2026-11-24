import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { FileInput } from "../core/binary.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { docRequestSchema, type DocRequest } from "../models/doc-request.js";
import { docRequest1Schema, type DocRequest1 } from "../models/doc-request1.js";
import { docResponseSchema, type DocResponse } from "../models/doc-response.js";
import { docResponse1Schema, type DocResponse1 } from "../models/doc-response1.js";
import { docResponse2Schema, type DocResponse2 } from "../models/doc-response2.js";
import { doc400Error1Schema, type Doc400Error1 } from "../models/doc400-error1.js";
import { docsSearchRequestSchema, type DocsSearchRequest } from "../models/docs-search-request.js";
import { docsSearchResponseSchema, type DocsSearchResponse } from "../models/docs-search-response.js";
import { docsSearch400Error1Schema, type DocsSearch400Error1 } from "../models/docs-search400-error1.js";
import {
  importContentResponseSchema,
  type ImportContentResponse,
} from "../models/import-content-response.js";
import {
  importContent400Error1Schema,
  type ImportContent400Error1,
} from "../models/import-content400-error1.js";
import { Type1, type1Schema } from "../models/type1.js";
import type { Servers } from "../servers.js";

/**
 * Create, read, update, delete and search documents
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
   * Delete document
   *
   * @remarks
   * Delete document by docId
   *
   * @returns Delete status
   *
   * @throws {@link Documents.DeleteDocumentError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link ArchbeeError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteDocument(
    request: Documents.DeleteDocumentRequest,
    options?: RequestOptions,
  ): ApiPromise<DocResponse, Documents.DeleteDocumentError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/doc"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: docRequestSchema },
      },
      {
        success: { kind: "json", schema: docResponseSchema },
        errorFactory: Documents.DeleteDocumentError,
      },
      options,
    );
  }

  /**
   * Get document
   *
   * @remarks
   * Retrieve a document in markdown, html, json, or source format.
   *
   * @returns Successful response containing the document content.
   *
   * @throws {@link Documents.GetDocumentError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link ArchbeeError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getDocument(options?: RequestOptions): ApiPromise<DocResponse1, Documents.GetDocumentError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/doc"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: docResponse1Schema },
        errorFactory: Documents.GetDocumentError,
      },
      options,
    );
  }

  /**
   * Import Content
   *
   * @remarks
   * Create new Doc from imported markdown file. In case of zip file, create a new docTree and keeps
   * archived tree structure.
   *
   * @returns Import OK status
   *
   * @throws {@link Documents.ImportContentError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link ArchbeeError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  importContent(
    request: Documents.ImportContentRequest,
    options?: RequestOptions,
  ): ApiPromise<ImportContentResponse, Documents.ImportContentError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/import-content"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "multipart",
          value: [
            { kind: "file", name: "file", value: request.file },
            {
              kind: "text",
              name: "type",
              value: request.type,
              schema: s.defaulted(type1Schema, Type1.Markdown),
            },
          ],
        },
      },
      {
        success: { kind: "json", schema: importContentResponseSchema },
        errorFactory: Documents.ImportContentError,
      },
      options,
    );
  }

  /**
   * Search document
   *
   * @remarks
   * Search Archbee documents in docSpace. Can perform one of the 3 types of search:
   *
   * ai-chat to return ai generative answer accompanied by source docs; ai-retrieval to return just
   * similar docs with the query; words to perform normal search aka. "word-based"; use empty query
   * to return all docs single-doc to return document info by id
   *
   * @returns Process status
   *
   * @throws {@link Documents.SearchDocumentError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link ArchbeeError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  searchDocument(
    request: Documents.SearchDocumentRequest,
    options?: RequestOptions,
  ): ApiPromise<DocsSearchResponse, Documents.SearchDocumentError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/docs/search"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: docsSearchRequestSchema },
      },
      {
        success: { kind: "json", schema: docsSearchResponseSchema },
        errorFactory: Documents.SearchDocumentError,
      },
      options,
    );
  }

  /**
   * Update / Create document
   *
   * @remarks
   * Create / Update Doc by docId
   *
   * @returns Process status
   *
   * @throws {@link Documents.UpdateCreateDocumentError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link ArchbeeError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateCreateDocument(
    request: Documents.UpdateCreateDocumentRequest,
    options?: RequestOptions,
  ): ApiPromise<DocResponse2, Documents.UpdateCreateDocumentError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/doc"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: docRequest1Schema },
      },
      {
        success: { kind: "json", schema: docResponse2Schema },
        errorFactory: Documents.UpdateCreateDocumentError,
      },
      options,
    );
  }
}

export namespace Documents {
  export type DeleteDocumentRequest = {
    body: DocRequest;
  };

  export class DeleteDocumentError extends ApiError {
    declare readonly payload: Declared<"doc400Error1", Doc400Error1> | Undeclared;

    static readonly errors: ErrorDecoders<DeleteDocumentError> = [
      { on: 400, kind: "doc400Error1", decode: { kind: "json", schema: doc400Error1Schema } },
    ];
  }

  export class GetDocumentError extends ApiError {
    declare readonly payload: Declared<"doc400Error1", Doc400Error1> | Undeclared;

    static readonly errors: ErrorDecoders<GetDocumentError> = [
      { on: 400, kind: "doc400Error1", decode: { kind: "json", schema: doc400Error1Schema } },
    ];
  }

  export type ImportContentRequest = {
    /** Markdown file (.md) or archive (.zip) containing multiple markdown files. */
    file: FileInput;
    /**
     * Type of import file. Only markdown supported for now on this route.
     *
     * @default Type1.Markdown
     */
    type?: Type1;
  };

  export class ImportContentError extends ApiError {
    declare readonly payload: Declared<"importContent400Error1", ImportContent400Error1> | Undeclared;

    static readonly errors: ErrorDecoders<ImportContentError> = [
      {
        on: 400,
        kind: "importContent400Error1",
        decode: { kind: "json", schema: importContent400Error1Schema },
      },
    ];
  }

  export type SearchDocumentRequest = {
    body: DocsSearchRequest;
  };

  export class SearchDocumentError extends ApiError {
    declare readonly payload: Declared<"docsSearch400Error1", DocsSearch400Error1> | Undeclared;

    static readonly errors: ErrorDecoders<SearchDocumentError> = [
      { on: 400, kind: "docsSearch400Error1", decode: { kind: "json", schema: docsSearch400Error1Schema } },
    ];
  }

  export type UpdateCreateDocumentRequest = {
    body: DocRequest1;
  };

  export class UpdateCreateDocumentError extends ApiError {
    declare readonly payload: Declared<"doc400Error1", Doc400Error1> | Undeclared;

    static readonly errors: ErrorDecoders<UpdateCreateDocumentError> = [
      { on: 400, kind: "doc400Error1", decode: { kind: "json", schema: doc400Error1Schema } },
    ];
  }
}
