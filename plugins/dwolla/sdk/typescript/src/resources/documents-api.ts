import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { FileInput } from "../core/binary.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { Accept, acceptSchema } from "../models/accept.js";
import { documentTypeSchema, type DocumentType } from "../models/document-type.js";
import type { Servers } from "../servers.js";

/**
 * Operations related to Documents
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
   * Create a document for beneficial owner
   *
   * @remarks
   * Uploads an identity verification document for a beneficial owner using multipart form-data.
   * Required when a beneficial owner has "document" status during the business verification
   * process.
   *
   * @returns document created
   *
   * @throws {@link DocumentsApi.CreateBeneficialOwnerDocumentError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link DwollaApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createBeneficialOwnerDocument(
    request: DocumentsApi.CreateBeneficialOwnerDocumentRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, DocumentsApi.CreateBeneficialOwnerDocumentError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/beneficial-owners/{id}/documents"),
        auth: this.#auth.clientCredentials,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [
          {
            name: "Accept",
            value: request.accept,
            schema: s.defaulted(acceptSchema, Accept.ApplicationVndDwollaV1HalJson),
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: {
          kind: "multipart",
          value: [
            { kind: "text", name: "documentType", value: request.documentType, schema: documentTypeSchema },
            { kind: "file", name: "file", value: request.file },
          ],
        },
      },
      {
        success: { kind: "empty" },
        errorFactory: DocumentsApi.CreateBeneficialOwnerDocumentError,
      },
      options,
    );
  }

  /**
   * Create a document for customer
   *
   * @remarks
   * Uploads an identity verification document for a customer using multipart form-data. Required
   * when a customer has "document" status during the verification process.
   *
   * @returns successful operation
   *
   * @throws {@link DocumentsApi.CreateCustomerDocumentError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link DwollaApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createCustomerDocument(
    request: DocumentsApi.CreateCustomerDocumentRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, DocumentsApi.CreateCustomerDocumentError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/customers/{id}/documents"),
        auth: this.#auth.clientCredentials,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [
          {
            name: "Accept",
            value: request.accept,
            schema: s.defaulted(acceptSchema, Accept.ApplicationVndDwollaV1HalJson),
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: {
          kind: "multipart",
          value: [
            { kind: "text", name: "documentType", value: request.documentType, schema: documentTypeSchema },
            { kind: "file", name: "file", value: request.file },
          ],
        },
      },
      {
        success: { kind: "empty" },
        errorFactory: DocumentsApi.CreateCustomerDocumentError,
      },
      options,
    );
  }

  /**
   * List documents for beneficial owner
   *
   * @remarks
   * Returns all identity verification documents submitted for a beneficial owner. Includes document
   * status, verification results, document type (passport, driver's license, etc.), and failure
   * reasons if verification was rejected. Used to track document submission and verification
   * progress during the business verification process.
   *
   * @returns successful operation
   *
   * @throws {@link DocumentsApi.ListBeneficialOwnerDocumentsError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link DwollaApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listBeneficialOwnerDocuments(
    request: DocumentsApi.ListBeneficialOwnerDocumentsRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, DocumentsApi.ListBeneficialOwnerDocumentsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/beneficial-owners/{id}/documents"),
        auth: this.#auth.clientCredentials,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [
          {
            name: "Accept",
            value: request.accept,
            schema: s.defaulted(acceptSchema, Accept.ApplicationVndDwollaV1HalJson),
          },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: DocumentsApi.ListBeneficialOwnerDocumentsError,
      },
      options,
    );
  }

  /**
   * List documents for customer
   *
   * @remarks
   * Returns all identity verification documents submitted for a customer. Includes document status,
   * verification results, document type (passport, driver's license, etc.), and failure reasons if
   * verification was rejected. Used to track document submission and verification progress during
   * the business verification process.
   *
   * @returns successful operation
   *
   * @throws {@link DocumentsApi.ListCustomerDocumentsError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link DwollaApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listCustomerDocuments(
    request: DocumentsApi.ListCustomerDocumentsRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, DocumentsApi.ListCustomerDocumentsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/customers/{id}/documents"),
        auth: this.#auth.clientCredentials,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [
          {
            name: "Accept",
            value: request.accept,
            schema: s.defaulted(acceptSchema, Accept.ApplicationVndDwollaV1HalJson),
          },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: DocumentsApi.ListCustomerDocumentsError,
      },
      options,
    );
  }

  /**
   * Retrieve a document
   *
   * @remarks
   * Returns detailed information about a specific identity verification document, including its
   * status, type, and verification results. Used to track document submission and verification
   * progress during the business verification process.
   *
   * @returns successful operation
   *
   * @throws {@link DocumentsApi.RetrieveDocumentError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link DwollaApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  retrieveDocument(
    request: DocumentsApi.RetrieveDocumentRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, DocumentsApi.RetrieveDocumentError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/documents/{id}"),
        auth: this.#auth.clientCredentials,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [
          {
            name: "Accept",
            value: request.accept,
            schema: s.defaulted(acceptSchema, Accept.ApplicationVndDwollaV1HalJson),
          },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: DocumentsApi.RetrieveDocumentError,
      },
      options,
    );
  }
}

export namespace DocumentsApi {
  export type CreateBeneficialOwnerDocumentRequest = {
    /** beneficial owner unique identifier */
    id: string;
    /**
     * The media type of the response. Must be application/vnd.dwolla.v1.hal+json
     *
     * @default Accept.ApplicationVndDwollaV1HalJson
     */
    accept?: Accept;
    documentType: DocumentType;
    file: FileInput;
  };

  export class CreateBeneficialOwnerDocumentError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error403", undefined>
      | Declared<"error404", undefined>
      | Declared<"error413", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateBeneficialOwnerDocumentError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 403, kind: "error403", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 413, kind: "error413", decode: { kind: "empty" } },
    ];
  }

  export type CreateCustomerDocumentRequest = {
    /** customer unique identifier */
    id: string;
    /**
     * The media type of the response. Must be application/vnd.dwolla.v1.hal+json
     *
     * @default Accept.ApplicationVndDwollaV1HalJson
     */
    accept?: Accept;
    documentType: DocumentType;
    file: FileInput;
  };

  export class CreateCustomerDocumentError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error403", undefined>
      | Declared<"error404", undefined>
      | Declared<"error413", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateCustomerDocumentError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 403, kind: "error403", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 413, kind: "error413", decode: { kind: "empty" } },
    ];
  }

  export type ListBeneficialOwnerDocumentsRequest = {
    /** beneficial owner unique identifier */
    id: string;
    /**
     * The media type of the response. Must be application/vnd.dwolla.v1.hal+json
     *
     * @default Accept.ApplicationVndDwollaV1HalJson
     */
    accept?: Accept;
  };

  export class ListBeneficialOwnerDocumentsError extends ApiError {
    declare readonly payload: Declared<"error403", undefined> | Declared<"error404", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<ListBeneficialOwnerDocumentsError> = [
      { on: 403, kind: "error403", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
    ];
  }

  export type ListCustomerDocumentsRequest = {
    /** customer unique identifier */
    id: string;
    /**
     * The media type of the response. Must be application/vnd.dwolla.v1.hal+json
     *
     * @default Accept.ApplicationVndDwollaV1HalJson
     */
    accept?: Accept;
  };

  export class ListCustomerDocumentsError extends ApiError {
    declare readonly payload: Declared<"error403", undefined> | Declared<"error404", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<ListCustomerDocumentsError> = [
      { on: 403, kind: "error403", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
    ];
  }

  export type RetrieveDocumentRequest = {
    /** Document unique identifier */
    id: string;
    /**
     * The media type of the response. Must be application/vnd.dwolla.v1.hal+json
     *
     * @default Accept.ApplicationVndDwollaV1HalJson
     */
    accept?: Accept;
  };

  export class RetrieveDocumentError extends ApiError {
    declare readonly payload: Declared<"error403", undefined> | Declared<"error404", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<RetrieveDocumentError> = [
      { on: 403, kind: "error403", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
    ];
  }
}
