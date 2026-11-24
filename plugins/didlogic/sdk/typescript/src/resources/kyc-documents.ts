import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { BinaryContent, FileInput } from "../core/binary.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  apiV2DocumentsCountriesResponseSchema,
  type ApiV2DocumentsCountriesResponse,
} from "../models/api-v2-documents-countries-response.js";
import {
  apiV2DocumentsCountries401Error1Schema,
  type ApiV2DocumentsCountries401Error1,
} from "../models/api-v2-documents-countries401-error1.js";
import {
  apiV2DocumentsFiles401Error1Schema,
  type ApiV2DocumentsFiles401Error1,
} from "../models/api-v2-documents-files401-error1.js";
import {
  apiV2DocumentsRequestSchema,
  type ApiV2DocumentsRequest,
} from "../models/api-v2-documents-request.js";
import {
  apiV2DocumentsResponseSchema,
  type ApiV2DocumentsResponse,
} from "../models/api-v2-documents-response.js";
import {
  apiV2DocumentsResponse1Schema,
  type ApiV2DocumentsResponse1,
} from "../models/api-v2-documents-response1.js";
import {
  apiV2DocumentsResponse2Schema,
  type ApiV2DocumentsResponse2,
} from "../models/api-v2-documents-response2.js";
import {
  apiV2DocumentsResponse3Schema,
  type ApiV2DocumentsResponse3,
} from "../models/api-v2-documents-response3.js";
import {
  apiV2Documents401Error1Schema,
  type ApiV2Documents401Error1,
} from "../models/api-v2-documents401-error1.js";
import {
  apiV2Documents404Error1Schema,
  type ApiV2Documents404Error1,
} from "../models/api-v2-documents404-error1.js";
import { approvementStatusSchema, type ApprovementStatus } from "../models/approvement-status.js";
import { documentDocTypeSchema, type DocumentDocType } from "../models/document-doc-type.js";
import { errorSchema, type Error } from "../models/error.js";
import { Order, orderSchema } from "../models/order.js";
import { roleSchema, type Role } from "../models/role.js";
import type { Servers } from "../servers.js";

export class KycDocuments {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * List document countries
   *
   * @remarks
   * List the country names a document can be uploaded for.
   *
   * The name is the exact value documents_create takes in `document[country]`; a code such as `UK`
   * or `GB` is refused. Narrow the list by part of the name with `name_contains`.
   *
   * `countries[].name` feeds documents_create.
   *
   * @returns returns list of countries
   *
   * @throws {@link KycDocuments.DocumentsCountriesError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link DidLogicError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  documentsCountries(
    request: KycDocuments.DocumentsCountriesRequest = {},
    options?: RequestOptions,
  ): ApiPromise<ApiV2DocumentsCountriesResponse, KycDocuments.DocumentsCountriesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v2/documents/countries"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [{ name: "name_contains", value: request.nameContains, schema: s.optional(s.string()) }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: apiV2DocumentsCountriesResponseSchema },
        errorFactory: KycDocuments.DocumentsCountriesError,
      },
      options,
    );
  }

  /**
   * Upload document
   *
   * @remarks
   * Upload a new document for identity verification.
   *
   * **Document Types:**
   * - `personal_id` - Personal ID
   * - `address_proof` - Proof of address
   * - `business_registration` - Business Registration
   * - `letter_of_intent` - Letter of Intent
   *
   * **File Requirements:**
   * - Allowed extensions: jpg, jpeg, png, pdf
   * - Accepted MIME types: ["image/jpeg", "image/png", "application/pdf"]
   *
   * `document_id` feeds documents_show, documents_update, documents_destroy and
   * documents_files_download_file; `document.files[].role` feeds documents_files_download_file.
   *
   * @returns creates a new document
   *
   * @throws {@link KycDocuments.DocumentsCreateError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link DidLogicError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  documentsCreate(
    request: KycDocuments.DocumentsCreateRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV2DocumentsResponse1, KycDocuments.DocumentsCreateError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v2/documents"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "multipart",
          value: [
            { kind: "text", name: "document[name]", value: request.documentName, schema: s.string() },
            {
              kind: "text",
              name: "document[doc_type]",
              value: request.documentDocType,
              schema: documentDocTypeSchema,
            },
            { kind: "file", name: "document[files][frontside]", value: request.documentFilesFrontside },
            {
              kind: "text",
              name: "document[identity_id]",
              value: request.documentIdentityId,
              schema: s.int(),
            },
            { kind: "text", name: "document[country]", value: request.documentCountry, schema: s.string() },
            { kind: "file", name: "document[files][backside]", value: request.documentFilesBackside },
          ],
        },
      },
      {
        success: { kind: "json", schema: apiV2DocumentsResponse1Schema },
        errorFactory: KycDocuments.DocumentsCreateError,
      },
      options,
    );
  }

  /**
   * Delete document
   *
   * @remarks
   * Delete a document by ID.
   *
   * **Important notes:**
   * - Document is permanently removed
   * - Cannot be undone
   *
   * @returns deletes the document
   *
   * @throws {@link KycDocuments.DocumentsDestroyError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link DidLogicError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  documentsDestroy(
    request: KycDocuments.DocumentsDestroyRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, KycDocuments.DocumentsDestroyError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/api/v2/documents/{id}"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.int() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: KycDocuments.DocumentsDestroyError,
      },
      options,
    );
  }

  /**
   * Download document file by role
   *
   * @remarks
   * Download a specific document file by role (frontside/backside).
   *
   * @returns returns file with proper headers and content
   *
   * @throws {@link KycDocuments.DocumentsFilesDownloadFileError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link DidLogicError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  documentsFilesDownloadFile(
    request: KycDocuments.DocumentsFilesDownloadFileRequest,
    options?: RequestOptions,
  ): ApiPromise<BinaryContent, KycDocuments.DocumentsFilesDownloadFileError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v2/documents/{id}/files/{role}"),
        auth: this.#auth.bearerAuth,
        pathParams: [
          { name: "id", value: request.id, schema: s.int() },
          { name: "role", value: request.role, schema: roleSchema },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "binary", contentType: "application/octet-stream" },
        errorFactory: KycDocuments.DocumentsFilesDownloadFileError,
      },
      options,
    );
  }

  /**
   * List documents
   *
   * @remarks
   * Retrieve a list of documents with filtering and pagination.
   *
   * **Important notes:**
   * - Supports filtering by approval status, identity ID, and date range
   * - Results can be sorted and paginated
   *
   * `documents[].id` feeds documents_show, documents_update, documents_destroy and
   * documents_files_download_file; `documents[].files[].role` feeds documents_files_download_file;
   * `documents[].identity_id` feeds identities_index. Full record: documents_show.
   *
   * @returns returns documents from specified identity
   *
   * @throws {@link KycDocuments.DocumentsIndexError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link DidLogicError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  documentsIndex(
    request: KycDocuments.DocumentsIndexRequest = {},
    options?: RequestOptions,
  ): ApiPromise<ApiV2DocumentsResponse, KycDocuments.DocumentsIndexError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v2/documents"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [
          { name: "ids", value: request.ids, schema: s.optional(s.string()) },
          { name: "identity_id", value: request.identityId, schema: s.optional(s.int()) },
          {
            name: "approvement_status",
            value: request.approvementStatus,
            schema: s.optional(s.lazy(() => approvementStatusSchema)),
          },
          { name: "upload_date_from", value: request.uploadDateFrom, schema: s.optional(s.dateOnly()) },
          { name: "upload_date_to", value: request.uploadDateTo, schema: s.optional(s.dateOnly()) },
          { name: "order_by", value: request.orderBy, schema: s.optional(s.string()) },
          { name: "order", value: request.order, schema: s.defaulted(orderSchema, Order.Desc) },
          { name: "page", value: request.page, schema: s.defaulted(s.int(), 1) },
          { name: "per_page", value: request.perPage, schema: s.defaulted(s.int(), 20) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: apiV2DocumentsResponseSchema },
        errorFactory: KycDocuments.DocumentsIndexError,
      },
      options,
    );
  }

  /**
   * Get document
   *
   * @remarks
   * Get a document by ID.
   *
   * `document.files[].role` feeds documents_files_download_file; `document.identity_id` feeds
   * identities_index. Rows: documents_index.
   *
   * @returns returns the document details
   *
   * @throws {@link KycDocuments.DocumentsShowError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link DidLogicError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  documentsShow(
    request: KycDocuments.DocumentsShowRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV2DocumentsResponse2, KycDocuments.DocumentsShowError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v2/documents/{id}"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.int() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: apiV2DocumentsResponse2Schema },
        errorFactory: KycDocuments.DocumentsShowError,
      },
      options,
    );
  }

  /**
   * Update document
   *
   * @remarks
   * Update an existing document's name or identity.
   *
   * `document_id` feeds documents_show.
   *
   * @returns updates the document
   *
   * @throws {@link KycDocuments.DocumentsUpdateError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link DidLogicError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  documentsUpdate(
    request: KycDocuments.DocumentsUpdateRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV2DocumentsResponse3, KycDocuments.DocumentsUpdateError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default("/api/v2/documents/{id}"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.int() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: apiV2DocumentsRequestSchema },
      },
      {
        success: { kind: "json", schema: apiV2DocumentsResponse3Schema },
        errorFactory: KycDocuments.DocumentsUpdateError,
      },
      options,
    );
  }
}

export namespace KycDocuments {
  export type DocumentsCountriesRequest = {
    /** Filter countries by name pattern (case-insensitive substring match) */
    nameContains?: string;
  };

  export class DocumentsCountriesError extends ApiError {
    declare readonly payload:
      | Declared<"apiV2DocumentsCountries401Error1", ApiV2DocumentsCountries401Error1>
      | Undeclared;

    static readonly errors: ErrorDecoders<DocumentsCountriesError> = [
      {
        on: 401,
        kind: "apiV2DocumentsCountries401Error1",
        decode: { kind: "json", schema: apiV2DocumentsCountries401Error1Schema },
      },
    ];
  }

  export type DocumentsCreateRequest = {
    /** Document name */
    documentName: string;
    /** Document type */
    documentDocType: DocumentDocType;
    /** Frontside file upload (binary) */
    documentFilesFrontside: FileInput;
    /** Identity ID to associate the document with, from identities_index, identities_create */
    documentIdentityId: number;
    /**
     * Country name from documents_countries, e.g. `United Kingdom`; a code such as `UK` or `GB` is
     * refused. For `letter_of_intent` the country of the purchased number is stored instead
     */
    documentCountry: string;
    /** Backside file upload (binary, Personal ID only) */
    documentFilesBackside?: FileInput;
  };

  export class DocumentsCreateError extends ApiError {
    declare readonly payload:
      | Declared<"apiV2Documents401Error1", ApiV2Documents401Error1>
      | Declared<"error", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<DocumentsCreateError> = [
      {
        on: 401,
        kind: "apiV2Documents401Error1",
        decode: { kind: "json", schema: apiV2Documents401Error1Schema },
      },
      { on: 422, kind: "error", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type DocumentsDestroyRequest = {
    /** Document ID from documents_index, documents_create */
    id: number;
  };

  export class DocumentsDestroyError extends ApiError {
    declare readonly payload:
      | Declared<"apiV2Documents401Error1", ApiV2Documents401Error1>
      | Declared<"apiV2Documents404Error1", ApiV2Documents404Error1>
      | Undeclared;

    static readonly errors: ErrorDecoders<DocumentsDestroyError> = [
      {
        on: 401,
        kind: "apiV2Documents401Error1",
        decode: { kind: "json", schema: apiV2Documents401Error1Schema },
      },
      {
        on: 404,
        kind: "apiV2Documents404Error1",
        decode: { kind: "json", schema: apiV2Documents404Error1Schema },
      },
    ];
  }

  export type DocumentsFilesDownloadFileRequest = {
    /** Document ID from documents_index, documents_show, documents_create */
    id: number;
    /** File role, `files[].role` from documents_index, documents_show, documents_create */
    role: Role;
  };

  export class DocumentsFilesDownloadFileError extends ApiError {
    declare readonly payload:
      | Declared<"apiV2DocumentsFiles401Error1", ApiV2DocumentsFiles401Error1>
      | Declared<"error", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<DocumentsFilesDownloadFileError> = [
      {
        on: 401,
        kind: "apiV2DocumentsFiles401Error1",
        decode: { kind: "json", schema: apiV2DocumentsFiles401Error1Schema },
      },
      { on: 404, kind: "error", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type DocumentsIndexRequest = {
    /** Filter documents by IDs (comma-separated) */
    ids?: string;
    /** Filter documents by identity ID from identities_index, identities_create */
    identityId?: number;
    /** Filter documents by approval status */
    approvementStatus?: ApprovementStatus;
    /** Filter documents created from this date */
    uploadDateFrom?: string;
    /** Filter documents created until this date */
    uploadDateTo?: string;
    /** Field to sort by */
    orderBy?: string;
    /** Sort order @default Order.Desc */
    order?: Order;
    /** Page number for pagination (starts from 1) @default 1 */
    page?: number;
    /** Number of items per page @default 20 */
    perPage?: number;
  };

  export const documentsIndexRequestSchema: Schema<DocumentsIndexRequest> = s.lazySchema(() =>
    s.object<DocumentsIndexRequest>({
      ids: s.optional(s.string()),
      identityId: s.optional(s.int()),
      approvementStatus: s.optional(s.lazy(() => approvementStatusSchema)),
      uploadDateFrom: s.optional(s.dateOnly()),
      uploadDateTo: s.optional(s.dateOnly()),
      orderBy: s.optional(s.string()),
      order: s.defaulted(orderSchema, Order.Desc),
      page: s.defaulted(s.int().check(s.gte(1)), 1),
      perPage: s.defaulted(s.int().check(s.gte(1), s.lte(100)), 20),
    }),
  );

  export class DocumentsIndexError extends ApiError {
    declare readonly payload: Declared<"apiV2Documents401Error1", ApiV2Documents401Error1> | Undeclared;

    static readonly errors: ErrorDecoders<DocumentsIndexError> = [
      {
        on: 401,
        kind: "apiV2Documents401Error1",
        decode: { kind: "json", schema: apiV2Documents401Error1Schema },
      },
    ];
  }

  export type DocumentsShowRequest = {
    /** Document ID from documents_index, documents_create */
    id: number;
  };

  export class DocumentsShowError extends ApiError {
    declare readonly payload:
      | Declared<"apiV2Documents401Error1", ApiV2Documents401Error1>
      | Declared<"apiV2Documents404Error1", ApiV2Documents404Error1>
      | Undeclared;

    static readonly errors: ErrorDecoders<DocumentsShowError> = [
      {
        on: 401,
        kind: "apiV2Documents401Error1",
        decode: { kind: "json", schema: apiV2Documents401Error1Schema },
      },
      {
        on: 404,
        kind: "apiV2Documents404Error1",
        decode: { kind: "json", schema: apiV2Documents404Error1Schema },
      },
    ];
  }

  export type DocumentsUpdateRequest = {
    /** Document ID from documents_index, documents_create */
    id: number;
    body: ApiV2DocumentsRequest;
  };

  export class DocumentsUpdateError extends ApiError {
    declare readonly payload:
      | Declared<"apiV2Documents401Error1", ApiV2Documents401Error1>
      | Declared<"apiV2Documents404Error1", ApiV2Documents404Error1>
      | Declared<"error", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<DocumentsUpdateError> = [
      {
        on: 401,
        kind: "apiV2Documents401Error1",
        decode: { kind: "json", schema: apiV2Documents401Error1Schema },
      },
      {
        on: 404,
        kind: "apiV2Documents404Error1",
        decode: { kind: "json", schema: apiV2Documents404Error1Schema },
      },
      { on: 422, kind: "error", decode: { kind: "json", schema: errorSchema } },
    ];
  }
}
