import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { FileInput } from "../core/binary.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { accountDocumentSchema, type AccountDocument } from "../models/account-document.js";
import { documentTypeSchema, type DocumentType } from "../models/document-type.js";
import { documentType1Schema, type DocumentType1 } from "../models/document-type1.js";
import { errorSchema, type Error } from "../models/error.js";
import { stakeholderDocumentSchema, type StakeholderDocument } from "../models/stakeholder-document.js";
import type { Servers } from "../servers.js";

/**
 * Upload and fetch KYC documents for sub-merchant accounts and their stakeholders.
 */
export class PartnerDocuments {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Fetch KYC documents for a sub-merchant account
   *
   * @remarks
   * Retrieve all KYC documents uploaded for a sub-merchant account. Authentication: OAuth
   * access_token.
   *
   * @returns Account documents
   *
   * @throws {@link PartnerDocuments.FetchAccountDocumentsError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link CurlecError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  fetchAccountDocuments(
    request: PartnerDocuments.FetchAccountDocumentsRequest,
    options?: RequestOptions,
  ): ApiPromise<AccountDocument, PartnerDocuments.FetchAccountDocumentsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v2/accounts/{account_id}/documents"),
        auth: this.#auth.basicAuth,
        pathParams: [{ name: "account_id", value: request.accountId, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: accountDocumentSchema },
        errorFactory: PartnerDocuments.FetchAccountDocumentsError,
      },
      options,
    );
  }

  /**
   * Fetch KYC documents for a stakeholder
   *
   * @remarks
   * Retrieve all KYC documents uploaded for a specific stakeholder. Authentication: OAuth
   * access_token.
   *
   * @returns Stakeholder documents
   *
   * @throws {@link PartnerDocuments.FetchStakeholderDocumentsError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link CurlecError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  fetchStakeholderDocuments(
    request: PartnerDocuments.FetchStakeholderDocumentsRequest,
    options?: RequestOptions,
  ): ApiPromise<StakeholderDocument, PartnerDocuments.FetchStakeholderDocumentsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/v2/accounts/{account_id}/stakeholders/{stakeholder_id}/documents",
        ),
        auth: this.#auth.basicAuth,
        pathParams: [
          { name: "account_id", value: request.accountId, schema: s.string() },
          { name: "stakeholder_id", value: request.stakeholderId, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: stakeholderDocumentSchema },
        errorFactory: PartnerDocuments.FetchStakeholderDocumentsError,
      },
      options,
    );
  }

  /**
   * Upload KYC documents for a sub-merchant account
   *
   * @remarks
   * Upload KYC documents for business identity and address verification. Multipart form upload.
   * JPG/PNG max 4MB, PDF max 2MB. Authentication: OAuth access_token.
   *
   * @returns Document uploaded
   *
   * @throws {@link PartnerDocuments.UploadAccountDocumentsError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link CurlecError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  uploadAccountDocuments(
    request: PartnerDocuments.UploadAccountDocumentsRequest,
    options?: RequestOptions,
  ): ApiPromise<AccountDocument, PartnerDocuments.UploadAccountDocumentsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v2/accounts/{account_id}/documents"),
        auth: this.#auth.basicAuth,
        pathParams: [{ name: "account_id", value: request.accountId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "multipart",
          value: [
            {
              kind: "text",
              name: "document_type",
              value: request.documentType,
              schema: s.optional(s.lazy(() => documentTypeSchema)),
            },
            { kind: "file", name: "file", value: request.file },
          ],
        },
      },
      {
        success: { kind: "json", schema: accountDocumentSchema },
        errorFactory: PartnerDocuments.UploadAccountDocumentsError,
      },
      options,
    );
  }

  /**
   * Upload KYC documents for a stakeholder
   *
   * @remarks
   * Upload identity and address verification documents for a stakeholder. Supports PAN, Aadhaar
   * (front/back), passport (front/back), voter ID (front/back). Multipart form upload. JPG/PNG max
   * 4MB, PDF max 2MB. Authentication: OAuth access_token.
   *
   * @returns Document uploaded
   *
   * @throws {@link PartnerDocuments.UploadStakeholderDocumentsError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link CurlecError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  uploadStakeholderDocuments(
    request: PartnerDocuments.UploadStakeholderDocumentsRequest,
    options?: RequestOptions,
  ): ApiPromise<StakeholderDocument, PartnerDocuments.UploadStakeholderDocumentsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default(
          "/v2/accounts/{account_id}/stakeholders/{stakeholder_id}/documents",
        ),
        auth: this.#auth.basicAuth,
        pathParams: [
          { name: "account_id", value: request.accountId, schema: s.string() },
          { name: "stakeholder_id", value: request.stakeholderId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "multipart",
          value: [
            {
              kind: "text",
              name: "document_type",
              value: request.documentType,
              schema: s.optional(s.lazy(() => documentType1Schema)),
            },
            { kind: "file", name: "file", value: request.file },
          ],
        },
      },
      {
        success: { kind: "json", schema: stakeholderDocumentSchema },
        errorFactory: PartnerDocuments.UploadStakeholderDocumentsError,
      },
      options,
    );
  }
}

export namespace PartnerDocuments {
  export type FetchAccountDocumentsRequest = {
    /** Unique identifier of the linked merchant account (e.g. `acc_00000000000001`). */
    accountId: string;
  };

  export class FetchAccountDocumentsError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<FetchAccountDocumentsError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error4", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error5", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type FetchStakeholderDocumentsRequest = {
    /** Unique identifier of the linked merchant account (e.g. `acc_00000000000001`). */
    accountId: string;
    /** Unique identifier of the stakeholder (e.g. `sth_00000000000001`). */
    stakeholderId: string;
  };

  export class FetchStakeholderDocumentsError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<FetchStakeholderDocumentsError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error4", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error5", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type UploadAccountDocumentsRequest = {
    /** Unique identifier of the linked merchant account (e.g. `acc_00000000000001`). */
    accountId: string;
    documentType?: DocumentType;
    file?: FileInput;
  };

  export class UploadAccountDocumentsError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<UploadAccountDocumentsError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error4", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type UploadStakeholderDocumentsRequest = {
    /** Unique identifier of the linked merchant account (e.g. `acc_00000000000001`). */
    accountId: string;
    /** Unique identifier of the stakeholder (e.g. `sth_00000000000001`). */
    stakeholderId: string;
    documentType?: DocumentType1;
    file?: FileInput;
  };

  export class UploadStakeholderDocumentsError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<UploadStakeholderDocumentsError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error4", decode: { kind: "json", schema: errorSchema } },
    ];
  }
}
