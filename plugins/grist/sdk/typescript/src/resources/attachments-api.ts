import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { FileInput } from "../core/binary.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  attachmentMetadataListSchema,
  type AttachmentMetadataList,
} from "../models/attachment-metadata-list.js";
import { attachmentMetadataSchema, type AttachmentMetadata } from "../models/attachment-metadata.js";
import {
  attachmentsTransferStatusSchema,
  type AttachmentsTransferStatus,
} from "../models/attachments-transfer-status.js";
import {
  docsAttachmentsArchiveResponseSchema,
  type DocsAttachmentsArchiveResponse,
} from "../models/docs-attachments-archive-response.js";
import {
  docsAttachmentsStoreResponseSchema,
  type DocsAttachmentsStoreResponse,
} from "../models/docs-attachments-store-response.js";
import { documentStoreSettingSchema, type DocumentStoreSetting } from "../models/document-store-setting.js";
import { format12Schema, type Format12 } from "../models/format12.js";
import {
  docsAttachmentsArchiveResponse1Schema,
  type DocsAttachmentsArchiveResponse1,
} from "../models/unions/docs-attachments-archive-response1.js";
import {
  docsAttachmentsDownloadResponseSchema,
  type DocsAttachmentsDownloadResponse,
} from "../models/unions/docs-attachments-download-response.js";
import {
  docsAttachmentsRemoveUnusedResponseSchema,
  type DocsAttachmentsRemoveUnusedResponse,
} from "../models/unions/docs-attachments-remove-unused-response.js";
import {
  docsAttachmentsUpdateUsedResponseSchema,
  type DocsAttachmentsUpdateUsedResponse,
} from "../models/unions/docs-attachments-update-used-response.js";
import {
  docsAttachmentsVerifyFilesResponseSchema,
  type DocsAttachmentsVerifyFilesResponse,
} from "../models/unions/docs-attachments-verify-files-response.js";
import type { Servers } from "../servers.js";

/**
 * Documents may include attached files. Data records can refer to these using a column of type
 * `Attachments`.
 */
export class AttachmentsApi {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Download the contents of an attachment
   *
   * @returns Attachment contents, with suitable Content-Type.
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link GristApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  downloadAttachment(
    request: AttachmentsApi.DownloadAttachmentRequest,
    options?: RequestOptions,
  ): ApiPromise<DocsAttachmentsDownloadResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/docs/{docId}/attachments/{attachmentId}/download"),
        auth: anyAuth(this.#auth.apiKey, this.#auth.oAuth2),
        pathParams: [
          { name: "docId", value: request.docId, schema: s.string() },
          { name: "attachmentId", value: request.attachmentId, schema: s.float64() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: docsAttachmentsDownloadResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Download all attachments
   *
   * @returns Archive of all attachments, in either .zip or .tar format.
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link GristApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  downloadAttachments(
    request: AttachmentsApi.DownloadAttachmentsRequest,
    options?: RequestOptions,
  ): ApiPromise<DocsAttachmentsArchiveResponse1, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/docs/{docId}/attachments/archive"),
        auth: this.#auth.apiKey,
        pathParams: [{ name: "docId", value: request.docId, schema: s.string() }],
        query: [{ name: "format", value: request.format, schema: s.optional(s.lazy(() => format12Schema)) }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: docsAttachmentsArchiveResponse1Schema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Get the metadata for an attachment
   *
   * @returns Attachment metadata
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link GristApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getAttachmentMetadata(
    request: AttachmentsApi.GetAttachmentMetadataRequest,
    options?: RequestOptions,
  ): ApiPromise<AttachmentMetadata, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/docs/{docId}/attachments/{attachmentId}"),
        auth: anyAuth(this.#auth.apiKey, this.#auth.oAuth2),
        pathParams: [
          { name: "docId", value: request.docId, schema: s.string() },
          { name: "attachmentId", value: request.attachmentId, schema: s.float64() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: attachmentMetadataSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Get attachment transfer status
   *
   * @returns Transfer status
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link GristApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getAttachmentTransferStatus(
    request: AttachmentsApi.GetAttachmentTransferStatusRequest,
    options?: RequestOptions,
  ): ApiPromise<AttachmentsTransferStatus, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/docs/{docId}/attachments/transferStatus"),
        auth: this.#auth.apiKey,
        pathParams: [{ name: "docId", value: request.docId, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: attachmentsTransferStatusSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Get external store
   *
   * @returns Document's current external storage setting
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link GristApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getDocumentAttachmentStore(
    request: AttachmentsApi.GetDocumentAttachmentStoreRequest,
    options?: RequestOptions,
  ): ApiPromise<DocumentStoreSetting, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/docs/{docId}/attachments/store"),
        auth: this.#auth.apiKey,
        pathParams: [{ name: "docId", value: request.docId, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: documentStoreSettingSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * List external attachment stores
   *
   * @returns Document's current external storage setting
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link GristApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listAttachmentStores(
    request: AttachmentsApi.ListAttachmentStoresRequest,
    options?: RequestOptions,
  ): ApiPromise<DocumentStoreSetting, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/docs/{docId}/attachments/stores"),
        auth: this.#auth.apiKey,
        pathParams: [{ name: "docId", value: request.docId, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: documentStoreSettingSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * List metadata of all attachments in a doc
   *
   * @returns List of attachment metadata records. Note that the list may temporarily include
   * records for attachments that are stored in the document but not referenced by any Attachments
   * type cell.
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link GristApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listAttachments(
    request: AttachmentsApi.ListAttachmentsRequest,
    options?: RequestOptions,
  ): ApiPromise<AttachmentMetadataList, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/docs/{docId}/attachments"),
        auth: anyAuth(this.#auth.apiKey, this.#auth.oAuth2),
        pathParams: [{ name: "docId", value: request.docId, schema: s.string() }],
        query: [
          { name: "filter", value: request.filter, schema: s.optional(s.string()) },
          { name: "sort", value: request.sort, schema: s.optional(s.string()) },
          { name: "limit", value: request.limit, schema: s.optional(s.float64()) },
        ],
        headers: [
          { name: "X-Sort", value: request.xSort, schema: s.optional(s.string()) },
          { name: "X-Limit", value: request.xLimit, schema: s.optional(s.float64()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: attachmentMetadataListSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Delete unused attachments from the document
   *
   * @remarks
   * When an uploaded attachment is no longer used in a Grist document, it's retained for a period
   * of time in case it's needed again (e.g. to facilitate an "undo"). This removes all of these
   * retained attachments, reducing the amount of storage used. This is particularly useful if a
   * document has hit its attachment storage limit.
   *
   * @returns Success
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link GristApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  removeUnusedAttachments(
    request: AttachmentsApi.RemoveUnusedAttachmentsRequest,
    options?: RequestOptions,
  ): ApiPromise<DocsAttachmentsRemoveUnusedResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/docs/{docId}/attachments/removeUnused"),
        auth: this.#auth.apiKey,
        pathParams: [{ name: "docId", value: request.docId, schema: s.string() }],
        query: [{ name: "expiredOnly", value: request.expiredOnly, schema: s.optional(s.boolean()) }],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: docsAttachmentsRemoveUnusedResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Set external store
   *
   * @returns The ID of the store the document's store
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link GristApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  setDocumentAttachmentStore(
    request: AttachmentsApi.SetDocumentAttachmentStoreRequest,
    options?: RequestOptions,
  ): ApiPromise<DocsAttachmentsStoreResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/docs/{docId}/attachments/store"),
        auth: this.#auth.apiKey,
        pathParams: [{ name: "docId", value: request.docId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => documentStoreSettingSchema)),
        },
      },
      {
        success: { kind: "json", schema: docsAttachmentsStoreResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Start transferring attachments
   *
   * @returns Transfer status
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link GristApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  startAttachmentTransfer(
    request: AttachmentsApi.StartAttachmentTransferRequest,
    options?: RequestOptions,
  ): ApiPromise<AttachmentsTransferStatus, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/docs/{docId}/attachments/transferAll"),
        auth: this.#auth.apiKey,
        pathParams: [{ name: "docId", value: request.docId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: attachmentsTransferStatusSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Update attachment usage tracking
   *
   * @remarks
   * Recalculate which attachments are in use by scanning the document. This is mostly used for
   * testing and maintenance.
   *
   * @returns Success
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link GristApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateUsedAttachments(
    request: AttachmentsApi.UpdateUsedAttachmentsRequest,
    options?: RequestOptions,
  ): ApiPromise<DocsAttachmentsUpdateUsedResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/docs/{docId}/attachments/updateUsed"),
        auth: this.#auth.apiKey,
        pathParams: [{ name: "docId", value: request.docId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: docsAttachmentsUpdateUsedResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Upload attachments to a doc
   *
   * @returns IDs of attachments added, one per file.
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link GristApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  uploadAttachments(
    request: AttachmentsApi.UploadAttachmentsRequest,
    options?: RequestOptions,
  ): ApiPromise<number[], ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/docs/{docId}/attachments"),
        auth: anyAuth(this.#auth.apiKey, this.#auth.oAuth2),
        pathParams: [{ name: "docId", value: request.docId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "multipart", value: [{ kind: "file", name: "upload", value: request.upload }] },
      },
      {
        success: { kind: "json", schema: s.array(s.int()) },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Upload missing attachments
   *
   * @remarks
   * Restores attachments which are missing from external storage.
   *
   * @returns Summary of attachments used
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link GristApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  uploadMissingAttachments(
    request: AttachmentsApi.UploadMissingAttachmentsRequest,
    options?: RequestOptions,
  ): ApiPromise<DocsAttachmentsArchiveResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/docs/{docId}/attachments/archive"),
        auth: this.#auth.apiKey,
        pathParams: [{ name: "docId", value: request.docId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "multipart", value: [{ kind: "file", name: "file", value: request.file }] },
      },
      {
        success: { kind: "json", schema: docsAttachmentsArchiveResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Verify attachment file integrity
   *
   * @remarks
   * Verify that attachment records match the actual stored files. This is a maintenance endpoint to
   * check for data consistency. Only document owners can call this endpoint.
   *
   * @returns Verification passed
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link GristApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  verifyAttachmentFiles(
    request: AttachmentsApi.VerifyAttachmentFilesRequest,
    options?: RequestOptions,
  ): ApiPromise<DocsAttachmentsVerifyFilesResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/docs/{docId}/attachments/verifyFiles"),
        auth: this.#auth.apiKey,
        pathParams: [{ name: "docId", value: request.docId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: docsAttachmentsVerifyFilesResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace AttachmentsApi {
  export type DownloadAttachmentRequest = {
    /** A string id (UUID) */
    docId: string;
    attachmentId: number;
  };

  export type DownloadAttachmentsRequest = {
    /** A string id (UUID) */
    docId: string;
    format?: Format12;
  };

  export type GetAttachmentMetadataRequest = {
    /** A string id (UUID) */
    docId: string;
    attachmentId: number;
  };

  export type GetAttachmentTransferStatusRequest = {
    /** A string id (UUID) */
    docId: string;
  };

  export type GetDocumentAttachmentStoreRequest = {
    /** A string id (UUID) */
    docId: string;
  };

  export type ListAttachmentStoresRequest = {
    /** A string id (UUID) */
    docId: string;
  };

  export type ListAttachmentsRequest = {
    /** A string id (UUID) */
    docId: string;
    /**
     * This is a JSON object mapping column names to arrays of allowed values. For example, to
     * filter column `pet` for values `cat` and `dog`, the filter would be `{"pet": ["cat",
     * "dog"]}`. JSON contains characters that are not safe to place in a URL, so it is important to
     * url-encode them. For this example, the url-encoding is
     * `%7B%22pet%22%3A%20%5B%22cat%22%2C%20%22dog%22%5D%7D`. See
     * https://rosettacode.org/wiki/URL_encoding for how to url-encode a string, or
     * https://www.urlencoder.org/ to try some examples. Multiple columns can be filtered. For
     * example the filter for `pet` being either `cat` or `dog`, AND `size` being either `tiny` or
     * `outrageously small`, would be `{"pet": ["cat", "dog"], "size": ["tiny", "outrageously
     * small"]}`.
     */
    filter?: string;
    /**
     * Order in which to return results. If a single column name is given (e.g. `pet`), results are
     * placed in ascending order of values in that column. To get results in an order that was
     * previously prepared manually in Grist, use the special `manualSort` column name. Multiple
     * columns can be specified, separated by commas (e.g. `pet,age`). For descending order, prefix
     * a column name with a `-` character (e.g. `pet,-age`). To include additional sorting options
     * append them after a colon (e.g. `pet,-age:naturalSort;emptyLast,owner`). Available options
     * are: `orderByChoice`, `naturalSort`, `emptyLast`. Without the `sort` parameter, the order of
     * results is unspecified.
     */
    sort?: string;
    /** Return at most this number of rows. A value of 0 is equivalent to having no limit. */
    limit?: number;
    /** Same as `sort` query parameter. */
    xSort?: string;
    /** Same as `limit` query parameter. */
    xLimit?: number;
  };

  export type RemoveUnusedAttachmentsRequest = {
    /** A string id (UUID) */
    docId: string;
    expiredOnly?: boolean;
  };

  export type SetDocumentAttachmentStoreRequest = {
    /** A string id (UUID) */
    docId: string;
    body?: DocumentStoreSetting;
  };

  export type StartAttachmentTransferRequest = {
    /** A string id (UUID) */
    docId: string;
  };

  export type UpdateUsedAttachmentsRequest = {
    /** A string id (UUID) */
    docId: string;
  };

  export type UploadAttachmentsRequest = {
    /** A string id (UUID) */
    docId: string;
    /**
     * File to add. Grist accepts several "upload" parts per request; APIMatic codegen does not
     * support an array of files, so this is one file per call.
     */
    upload?: FileInput;
  };

  export type UploadMissingAttachmentsRequest = {
    /** A string id (UUID) */
    docId: string;
    /** The .tar file. Must have `Content-Type=application/x-tar` set. */
    file?: FileInput;
  };

  export type VerifyAttachmentFilesRequest = {
    /** A string id (UUID) */
    docId: string;
  };
}
