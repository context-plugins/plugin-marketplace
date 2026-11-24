import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { contentFormat3Schema, type ContentFormat3 } from "../models/content-format3.js";
import { createDocInternalSchema, type CreateDoc } from "../models/create-doc.js";
import { disabledFeatureErrorSchema, type DisabledFeatureError } from "../models/disabled-feature-error.js";
import { docSlimSchema, type DocSlim } from "../models/doc-slim.js";
import { docSchema, type Doc } from "../models/doc.js";
import { epicSlimInternalSchema, type EpicSlim } from "../models/epic-slim.js";
import { getDocSchema, type GetDoc } from "../models/get-doc.js";
import { unprocessableErrorSchema, type UnprocessableError } from "../models/unprocessable-error.js";
import { updateDocInternalSchema, type UpdateDoc } from "../models/update-doc.js";
import type { Servers } from "../servers.js";

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
   * Create Doc
   *
   * @remarks
   * Creates a new Doc. Supports markdown or HTML input via content_format parameter.
   *
   * @returns Resource
   *
   * @throws {@link Documents.CreateDocError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link ShortcutError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createDoc(
    request: Documents.CreateDocRequest,
    options?: RequestOptions,
  ): ApiPromise<DocSlim, Documents.CreateDocError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v3/documents"),
        auth: this.#auth.apiToken,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: createDocInternalSchema },
      },
      {
        success: { kind: "json", schema: docSlimSchema },
        errorFactory: Documents.CreateDocError,
      },
      options,
    );
  }

  /**
   * Delete Doc
   *
   * @remarks
   * Permanently deletes a Doc and its associated data. Requires admin access to the doc. When a
   * document is deleted, connected clients will be notified via SSE events.
   *
   * @returns No Content
   *
   * @throws {@link Documents.DeleteDocError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link ShortcutError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteDoc(
    request: Documents.DeleteDocRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, Documents.DeleteDocError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/api/v3/documents/{doc-public-id}"),
        auth: this.#auth.apiToken,
        pathParams: [{ name: "doc-public-id", value: request.docPublicId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: getDocSchema },
      },
      {
        success: { kind: "empty" },
        errorFactory: Documents.DeleteDocError,
      },
      options,
    );
  }

  /**
   * Get Doc
   *
   * @remarks
   * Get a Doc by its public ID with content. Use content_format=html query parameter to include
   * HTML content.
   *
   * @returns Resource
   *
   * @throws {@link Documents.GetDocError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link ShortcutError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getDoc(request: Documents.GetDocRequest, options?: RequestOptions): ApiPromise<Doc, Documents.GetDocError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v3/documents/{doc-public-id}"),
        auth: this.#auth.apiToken,
        pathParams: [{ name: "doc-public-id", value: request.docPublicId, schema: s.string() }],
        query: [
          {
            name: "content_format",
            value: request.contentFormat,
            schema: s.optional(s.lazy(() => contentFormat3Schema)),
          },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: docSchema },
        errorFactory: Documents.GetDocError,
      },
      options,
    );
  }

  /**
   * Link Document to Epic
   *
   * @remarks
   * Create a relationship between a Document and an Epic.
   *
   * @returns No Content
   *
   * @throws {@link Documents.LinkDocumentToEpicError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link ShortcutError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  linkDocumentToEpic(
    request: Documents.LinkDocumentToEpicRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, Documents.LinkDocumentToEpicError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default("/api/v3/documents/{doc-public-id}/epics/{epic-public-id}"),
        auth: this.#auth.apiToken,
        pathParams: [
          { name: "doc-public-id", value: request.docPublicId, schema: s.string() },
          { name: "epic-public-id", value: request.epicPublicId, schema: s.int() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: Documents.LinkDocumentToEpicError,
      },
      options,
    );
  }

  /**
   * List Docs
   *
   * @remarks
   * List Docs returns a list of Doc that the current user can read.
   *
   * @returns Resource
   *
   * @throws {@link Documents.ListDocsError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link ShortcutError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listDocs(options?: RequestOptions): ApiPromise<DocSlim[], Documents.ListDocsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v3/documents"),
        auth: this.#auth.apiToken,
        pathParams: [],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => docSlimSchema)) },
        errorFactory: Documents.ListDocsError,
      },
      options,
    );
  }

  /**
   * List Document Epics
   *
   * @remarks
   * Get a list of all Epics related to this Document.
   *
   * @returns Resource
   *
   * @throws {@link Documents.ListDocumentEpicsError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link ShortcutError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listDocumentEpics(
    request: Documents.ListDocumentEpicsRequest,
    options?: RequestOptions,
  ): ApiPromise<EpicSlim[], Documents.ListDocumentEpicsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v3/documents/{doc-public-id}/epics"),
        auth: this.#auth.apiToken,
        pathParams: [{ name: "doc-public-id", value: request.docPublicId, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => epicSlimInternalSchema)) },
        errorFactory: Documents.ListDocumentEpicsError,
      },
      options,
    );
  }

  /**
   * Unlink Document from Epic
   *
   * @remarks
   * Remove a relationship between a Document and an Epic.
   *
   * @returns No Content
   *
   * @throws {@link Documents.UnlinkDocumentFromEpicError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link ShortcutError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  unlinkDocumentFromEpic(
    request: Documents.UnlinkDocumentFromEpicRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, Documents.UnlinkDocumentFromEpicError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/api/v3/documents/{doc-public-id}/epics/{epic-public-id}"),
        auth: this.#auth.apiToken,
        pathParams: [
          { name: "doc-public-id", value: request.docPublicId, schema: s.string() },
          { name: "epic-public-id", value: request.epicPublicId, schema: s.int() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: Documents.UnlinkDocumentFromEpicError,
      },
      options,
    );
  }

  /**
   * Update Doc
   *
   * @remarks
   * Updates an existing Doc's title and/or content. Supports markdown or HTML input via
   * content_format parameter. When a document is updated: (1) For Tiptap-migrated docs, SSE events
   * notify connected Tiptap clients to refresh. (2) For non-migrated docs, CKEditor cache is
   * flushed and SSE events notify connected CKEditor users.
   *
   * @returns Resource
   *
   * @throws {@link Documents.UpdateDocError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link ShortcutError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateDoc(
    request: Documents.UpdateDocRequest,
    options?: RequestOptions,
  ): ApiPromise<Doc, Documents.UpdateDocError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default("/api/v3/documents/{doc-public-id}"),
        auth: this.#auth.apiToken,
        pathParams: [{ name: "doc-public-id", value: request.docPublicId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: updateDocInternalSchema },
      },
      {
        success: { kind: "json", schema: docSchema },
        errorFactory: Documents.UpdateDocError,
      },
      options,
    );
  }
}

export namespace Documents {
  export type CreateDocRequest = {
    body: CreateDoc;
  };

  export class CreateDocError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"disabledFeatureError", DisabledFeatureError>
      | Declared<"error404", undefined>
      | Declared<"error422", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateDocError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 403, kind: "disabledFeatureError", decode: { kind: "json", schema: disabledFeatureErrorSchema } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 422, kind: "error422", decode: { kind: "empty" } },
    ];
  }

  export type DeleteDocRequest = {
    /** The Doc's public ID */
    docPublicId: string;
    body: GetDoc;
  };

  export class DeleteDocError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"disabledFeatureError", DisabledFeatureError>
      | Declared<"error404", undefined>
      | Declared<"error422", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<DeleteDocError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 403, kind: "disabledFeatureError", decode: { kind: "json", schema: disabledFeatureErrorSchema } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 422, kind: "error422", decode: { kind: "empty" } },
    ];
  }

  export type GetDocRequest = {
    /** The Doc's public ID */
    docPublicId: string;
    /**
     * Format of the content to return. Defaults to 'markdown'. If 'html', includes HTML content in
     * response.
     */
    contentFormat?: ContentFormat3;
  };

  export class GetDocError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"disabledFeatureError", DisabledFeatureError>
      | Declared<"error404", undefined>
      | Declared<"error422", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetDocError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 403, kind: "disabledFeatureError", decode: { kind: "json", schema: disabledFeatureErrorSchema } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 422, kind: "error422", decode: { kind: "empty" } },
    ];
  }

  export type LinkDocumentToEpicRequest = {
    /** The public ID of the Document. */
    docPublicId: string;
    /** The public ID of the Epic. */
    epicPublicId: number;
  };

  export class LinkDocumentToEpicError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"disabledFeatureError", DisabledFeatureError>
      | Declared<"error404", undefined>
      | Declared<"unprocessableError", UnprocessableError>
      | Undeclared;

    static readonly errors: ErrorDecoders<LinkDocumentToEpicError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 403, kind: "disabledFeatureError", decode: { kind: "json", schema: disabledFeatureErrorSchema } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 422, kind: "unprocessableError", decode: { kind: "json", schema: unprocessableErrorSchema } },
    ];
  }

  export class ListDocsError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"disabledFeatureError", DisabledFeatureError>
      | Declared<"error404", undefined>
      | Declared<"error422", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListDocsError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 403, kind: "disabledFeatureError", decode: { kind: "json", schema: disabledFeatureErrorSchema } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 422, kind: "error422", decode: { kind: "empty" } },
    ];
  }

  export type ListDocumentEpicsRequest = {
    /** The public ID of the Document. */
    docPublicId: string;
  };

  export class ListDocumentEpicsError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"disabledFeatureError", DisabledFeatureError>
      | Declared<"error404", undefined>
      | Declared<"error422", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListDocumentEpicsError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 403, kind: "disabledFeatureError", decode: { kind: "json", schema: disabledFeatureErrorSchema } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 422, kind: "error422", decode: { kind: "empty" } },
    ];
  }

  export type UnlinkDocumentFromEpicRequest = {
    /** The public ID of the Document. */
    docPublicId: string;
    /** The public ID of the Epic. */
    epicPublicId: number;
  };

  export class UnlinkDocumentFromEpicError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"disabledFeatureError", DisabledFeatureError>
      | Declared<"error404", undefined>
      | Declared<"error422", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<UnlinkDocumentFromEpicError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 403, kind: "disabledFeatureError", decode: { kind: "json", schema: disabledFeatureErrorSchema } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 422, kind: "error422", decode: { kind: "empty" } },
    ];
  }

  export type UpdateDocRequest = {
    /** The Doc's public ID */
    docPublicId: string;
    body: UpdateDoc;
  };

  export class UpdateDocError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"disabledFeatureError", DisabledFeatureError>
      | Declared<"error404", undefined>
      | Declared<"error422", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<UpdateDocError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 403, kind: "disabledFeatureError", decode: { kind: "json", schema: disabledFeatureErrorSchema } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 422, kind: "error422", decode: { kind: "empty" } },
    ];
  }
}
