import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { formatSchema, type Format } from "../models/format.js";
import { m4001Schema, type M4001 } from "../models/m4001.js";
import { qrCodeInternalSchema, type QrCode } from "../models/qr-code.js";
import { qrcodesBulkRequestInternalSchema, type QrcodesBulkRequest } from "../models/qrcodes-bulk-request.js";
import { qrcodesBulkResponseSchema, type QrcodesBulkResponse } from "../models/qrcodes-bulk-response.js";
import { qrcodesRequestInternalSchema, type QrcodesRequest } from "../models/qrcodes-request.js";
import { qrcodesRequest1InternalSchema, type QrcodesRequest1 } from "../models/qrcodes-request1.js";
import { qrcodesResponseSchema, type QrcodesResponse } from "../models/qrcodes-response.js";
import {
  SortCodeqrIoQrCodesApi,
  sortCodeqrIoQrCodesApiSchema,
} from "../models/sort-codeqr-io-qr-codes-api.js";
import { type2Schema, type Type2 } from "../models/type2.js";
import {
  groupBy4CodeqrIoQrCodesApiSchema,
  type GroupBy4CodeqrIoQrCodesApi,
} from "../models/unions/group-by4-codeqr-io-qr-codes-api.js";
import {
  qrcodesBulkResponse1InternalSchema,
  type QrcodesBulkResponse1,
} from "../models/unions/qrcodes-bulk-response1.js";
import { tagIdsModelSchema, type TagIdsModel } from "../models/unions/tag-ids-model.js";
import { tagNamesSchema, type TagNames } from "../models/unions/tag-names.js";
import type { Servers } from "../servers.js";

export class QrCodes {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Bulk create QR Codes
   *
   * @remarks
   * Bulk create up to 100 QR Codes for the authenticated workspace.
   *
   * @returns The created QR Codes
   *
   * @throws {@link QrCodes.BulkCreateQrCodesError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link CodeQrError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  bulkCreateQrCodes(
    request: QrCodes.BulkCreateQrCodesRequest = {},
    options?: RequestOptions,
  ): ApiPromise<QrcodesBulkResponse1[], QrCodes.BulkCreateQrCodesError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/qrcodes/bulk"),
        auth: this.#auth.token,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.array(s.lazy(() => qrcodesBulkRequestInternalSchema))),
        },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => qrcodesBulkResponse1InternalSchema)) },
        errorFactory: QrCodes.BulkCreateQrCodesError,
      },
      options,
    );
  }

  /**
   * Bulk delete QR Codes
   *
   * @remarks
   * Bulk delete up to 100 QR Codes for the authenticated workspace.
   *
   * @returns The deleted QR Codes count.
   *
   * @throws {@link QrCodes.BulkDeleteQrCodesError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link CodeQrError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  bulkDeleteQrCodes(
    request: QrCodes.BulkDeleteQrCodesRequest,
    options?: RequestOptions,
  ): ApiPromise<QrcodesBulkResponse, QrCodes.BulkDeleteQrCodesError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/qrcodes/bulk"),
        auth: this.#auth.token,
        pathParams: [],
        query: [{ name: "qrcodeIds", value: request.qrcodeIds, schema: s.array(s.string()), style: "csv" }],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: qrcodesBulkResponseSchema },
        errorFactory: QrCodes.BulkDeleteQrCodesError,
      },
      options,
    );
  }

  /**
   * Create a new QR Code
   *
   * @remarks
   * Create a new QR Code for the authenticated workspace.
   *
   * @returns The created QR Code
   *
   * @throws {@link QrCodes.CreateQrCodeError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link CodeQrError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createQrCode(
    request: QrCodes.CreateQrCodeRequest = {},
    options?: RequestOptions,
  ): ApiPromise<QrCode, QrCodes.CreateQrCodeError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/qrcodes"),
        auth: this.#auth.token,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => qrcodesRequestInternalSchema)),
        },
      },
      {
        success: { kind: "json", schema: qrCodeInternalSchema },
        errorFactory: QrCodes.CreateQrCodeError,
      },
      options,
    );
  }

  /**
   * Delete a QR Code
   *
   * @remarks
   * Delete a QR Code for the authenticated workspace.
   *
   * @returns The deleted QR Code ID.
   *
   * @throws {@link QrCodes.DeleteQrCodeError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link CodeQrError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteQrCode(
    request: QrCodes.DeleteQrCodeRequest,
    options?: RequestOptions,
  ): ApiPromise<QrcodesResponse, QrCodes.DeleteQrCodeError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/qrcodes/{qrcodeId}"),
        auth: this.#auth.token,
        pathParams: [{ name: "qrcodeId", value: request.qrcodeId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: qrcodesResponseSchema },
        errorFactory: QrCodes.DeleteQrCodeError,
      },
      options,
    );
  }

  /**
   * Retrieve a QR Code
   *
   * @remarks
   * Retrieve the info for a QR Code.
   *
   * @returns The retrieved QR Code
   *
   * @throws {@link QrCodes.GetQrCodeInfoError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link CodeQrError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getQrCodeInfo(
    request: QrCodes.GetQrCodeInfoRequest,
    options?: RequestOptions,
  ): ApiPromise<QrCode, QrCodes.GetQrCodeInfoError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/qrcodes/info"),
        auth: this.#auth.token,
        pathParams: [],
        query: [
          { name: "projectSlug", value: request.projectSlug, schema: s.string() },
          { name: "domain", value: request.domain, schema: s.string() },
          { name: "key", value: request.key, schema: s.string() },
          { name: "qrCodeId", value: request.qrCodeId, schema: s.optional(s.string()) },
          { name: "externalId", value: request.externalId, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: qrCodeInternalSchema },
        errorFactory: QrCodes.GetQrCodeInfoError,
      },
      options,
    );
  }

  /**
   * Retrieve a list of QR Codes
   *
   * @remarks
   * Retrieve a paginated list of QR Codes for the authenticated workspace.
   *
   * @returns A list of QR Codes
   *
   * @throws {@link QrCodes.GetQrCodesError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link CodeQrError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getQrCodes(
    request: QrCodes.GetQrCodesRequest = {},
    options?: RequestOptions,
  ): ApiPromise<QrCode[], QrCodes.GetQrCodesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/qrcodes"),
        auth: this.#auth.token,
        pathParams: [],
        query: [
          { name: "projectSlug", value: request.projectSlug, schema: s.optional(s.string()) },
          { name: "domain", value: request.domain, schema: s.optional(s.string()) },
          { name: "tagId", value: request.tagId, schema: s.optional(s.string()) },
          { name: "tagIds", value: request.tagIds, schema: s.optional(s.lazy(() => tagIdsModelSchema)) },
          { name: "tagNames", value: request.tagNames, schema: s.optional(s.lazy(() => tagNamesSchema)) },
          { name: "folderId", value: request.folderId, schema: s.optional(s.string()) },
          { name: "search", value: request.search, schema: s.optional(s.string()) },
          { name: "userId", value: request.userId, schema: s.optional(s.string()) },
          { name: "showArchived", value: request.showArchived, schema: s.defaulted(s.boolean(), false) },
          { name: "comments", value: request.comments, schema: s.optional(s.string()) },
          { name: "password", value: request.password, schema: s.optional(s.string()) },
          { name: "expiresAt", value: request.expiresAt, schema: s.optionalNullable(s.dateTime()) },
          {
            name: "trackConversion",
            value: request.trackConversion,
            schema: s.defaulted(s.boolean(), false),
          },
          { name: "withTags", value: request.withTags, schema: s.defaulted(s.boolean(), false) },
          { name: "useAsTemplate", value: request.useAsTemplate, schema: s.optional(s.boolean()) },
          { name: "format", value: request.format, schema: s.optional(s.lazy(() => formatSchema)) },
          { name: "type", value: request.type, schema: s.optional(s.lazy(() => type2Schema)) },
          { name: "hasPassword", value: request.hasPassword, schema: s.optional(s.boolean()) },
          { name: "hasExpiration", value: request.hasExpiration, schema: s.optional(s.boolean()) },
          { name: "hasUTM", value: request.hasUtm, schema: s.optional(s.boolean()) },
          { name: "hasCustomSocial", value: request.hasCustomSocial, schema: s.optional(s.boolean()) },
          { name: "hasGeo", value: request.hasGeo, schema: s.optional(s.boolean()) },
          { name: "hasDevice", value: request.hasDevice, schema: s.optional(s.boolean()) },
          { name: "hasComments", value: request.hasComments, schema: s.optional(s.boolean()) },
          { name: "hasTags", value: request.hasTags, schema: s.optional(s.boolean()) },
          { name: "createdAfter", value: request.createdAfter, schema: s.optional(s.dateTime()) },
          { name: "createdBefore", value: request.createdBefore, schema: s.optional(s.dateTime()) },
          { name: "expiresAfter", value: request.expiresAfter, schema: s.optional(s.dateTime()) },
          { name: "expiresBefore", value: request.expiresBefore, schema: s.optional(s.dateTime()) },
          { name: "scansMin", value: request.scansMin, schema: s.optional(s.int()) },
          { name: "scansMax", value: request.scansMax, schema: s.optional(s.int()) },
          { name: "utm_source", value: request.utmSource, schema: s.optional(s.string()) },
          { name: "utm_medium", value: request.utmMedium, schema: s.optional(s.string()) },
          { name: "utm_campaign", value: request.utmCampaign, schema: s.optional(s.string()) },
          { name: "utm_content", value: request.utmContent, schema: s.optional(s.string()) },
          { name: "utm_term", value: request.utmTerm, schema: s.optional(s.string()) },
          {
            name: "sort",
            value: request.sort,
            schema: s.defaulted(sortCodeqrIoQrCodesApiSchema, SortCodeqrIoQrCodesApi.CreatedAt),
          },
          { name: "page", value: request.page, schema: s.defaulted(s.float64(), 1) },
          { name: "pageSize", value: request.pageSize, schema: s.defaulted(s.float64(), 100) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => qrCodeInternalSchema)) },
        errorFactory: QrCodes.GetQrCodesError,
      },
      options,
    );
  }

  /**
   * Retrieve QR Codes count
   *
   * @remarks
   * Retrieve the number of QR Codes for the authenticated workspace.
   *
   * @returns The count of QR Codes
   *
   * @throws {@link QrCodes.GetQrCodesCountError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link CodeQrError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getQrCodesCount(
    request: QrCodes.GetQrCodesCountRequest = {},
    options?: RequestOptions,
  ): ApiPromise<number, QrCodes.GetQrCodesCountError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/qrcodes/count"),
        auth: this.#auth.token,
        pathParams: [],
        query: [
          { name: "projectSlug", value: request.projectSlug, schema: s.optional(s.string()) },
          { name: "domain", value: request.domain, schema: s.optional(s.string()) },
          { name: "tagId", value: request.tagId, schema: s.optional(s.string()) },
          { name: "tagIds", value: request.tagIds, schema: s.optional(s.lazy(() => tagIdsModelSchema)) },
          { name: "tagNames", value: request.tagNames, schema: s.optional(s.lazy(() => tagNamesSchema)) },
          { name: "folderId", value: request.folderId, schema: s.optional(s.string()) },
          { name: "search", value: request.search, schema: s.optional(s.string()) },
          { name: "userId", value: request.userId, schema: s.optional(s.string()) },
          { name: "showArchived", value: request.showArchived, schema: s.defaulted(s.boolean(), false) },
          { name: "comments", value: request.comments, schema: s.optional(s.string()) },
          { name: "password", value: request.password, schema: s.optional(s.string()) },
          { name: "expiresAt", value: request.expiresAt, schema: s.optionalNullable(s.dateTime()) },
          {
            name: "trackConversion",
            value: request.trackConversion,
            schema: s.defaulted(s.boolean(), false),
          },
          { name: "withTags", value: request.withTags, schema: s.defaulted(s.boolean(), false) },
          { name: "useAsTemplate", value: request.useAsTemplate, schema: s.optional(s.boolean()) },
          { name: "format", value: request.format, schema: s.optional(s.lazy(() => formatSchema)) },
          { name: "type", value: request.type, schema: s.optional(s.lazy(() => type2Schema)) },
          { name: "hasPassword", value: request.hasPassword, schema: s.optional(s.boolean()) },
          { name: "hasExpiration", value: request.hasExpiration, schema: s.optional(s.boolean()) },
          { name: "hasUTM", value: request.hasUtm, schema: s.optional(s.boolean()) },
          { name: "hasCustomSocial", value: request.hasCustomSocial, schema: s.optional(s.boolean()) },
          { name: "hasGeo", value: request.hasGeo, schema: s.optional(s.boolean()) },
          { name: "hasDevice", value: request.hasDevice, schema: s.optional(s.boolean()) },
          { name: "hasComments", value: request.hasComments, schema: s.optional(s.boolean()) },
          { name: "hasTags", value: request.hasTags, schema: s.optional(s.boolean()) },
          { name: "createdAfter", value: request.createdAfter, schema: s.optional(s.dateTime()) },
          { name: "createdBefore", value: request.createdBefore, schema: s.optional(s.dateTime()) },
          { name: "expiresAfter", value: request.expiresAfter, schema: s.optional(s.dateTime()) },
          { name: "expiresBefore", value: request.expiresBefore, schema: s.optional(s.dateTime()) },
          { name: "scansMin", value: request.scansMin, schema: s.optional(s.int()) },
          { name: "scansMax", value: request.scansMax, schema: s.optional(s.int()) },
          { name: "utm_source", value: request.utmSource, schema: s.optional(s.string()) },
          { name: "utm_medium", value: request.utmMedium, schema: s.optional(s.string()) },
          { name: "utm_campaign", value: request.utmCampaign, schema: s.optional(s.string()) },
          { name: "utm_content", value: request.utmContent, schema: s.optional(s.string()) },
          { name: "utm_term", value: request.utmTerm, schema: s.optional(s.string()) },
          {
            name: "groupBy",
            value: request.groupBy,
            schema: s.optional(s.lazy(() => groupBy4CodeqrIoQrCodesApiSchema)),
          },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.float64() },
        errorFactory: QrCodes.GetQrCodesCountError,
      },
      options,
    );
  }

  /**
   * Update a QR Code
   *
   * @remarks
   * Update a QR Code for the authenticated workspace. If there's no change, returns it as it is.
   *
   * @returns The updated QR Code
   *
   * @throws {@link QrCodes.UpdateQrCodeError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link CodeQrError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateQrCode(
    request: QrCodes.UpdateQrCodeRequest,
    options?: RequestOptions,
  ): ApiPromise<QrCode, QrCodes.UpdateQrCodeError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default("/qrcodes/{qrcodeId}"),
        auth: this.#auth.token,
        pathParams: [{ name: "qrcodeId", value: request.qrcodeId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => qrcodesRequest1InternalSchema)),
        },
      },
      {
        success: { kind: "json", schema: qrCodeInternalSchema },
        errorFactory: QrCodes.UpdateQrCodeError,
      },
      options,
    );
  }
}

export namespace QrCodes {
  export type BulkCreateQrCodesRequest = {
    body?: QrcodesBulkRequest[];
  };

  export class BulkCreateQrCodesError extends ApiError {
    declare readonly payload:
      | Declared<"m4001", M4001>
      | Declared<"m40012", M4001>
      | Declared<"m40013", M4001>
      | Declared<"m40014", M4001>
      | Declared<"m40015", M4001>
      | Declared<"m40016", M4001>
      | Declared<"m40017", M4001>
      | Declared<"m40018", M4001>
      | Declared<"m40019", M4001>
      | Undeclared;

    static readonly errors: ErrorDecoders<BulkCreateQrCodesError> = [
      { on: 400, kind: "m4001", decode: { kind: "json", schema: m4001Schema } },
      { on: 401, kind: "m40012", decode: { kind: "json", schema: m4001Schema } },
      { on: 403, kind: "m40013", decode: { kind: "json", schema: m4001Schema } },
      { on: 404, kind: "m40014", decode: { kind: "json", schema: m4001Schema } },
      { on: 409, kind: "m40015", decode: { kind: "json", schema: m4001Schema } },
      { on: 410, kind: "m40016", decode: { kind: "json", schema: m4001Schema } },
      { on: 422, kind: "m40017", decode: { kind: "json", schema: m4001Schema } },
      { on: 429, kind: "m40018", decode: { kind: "json", schema: m4001Schema } },
      { on: 500, kind: "m40019", decode: { kind: "json", schema: m4001Schema } },
    ];
  }

  export type BulkDeleteQrCodesRequest = {
    /**
     * Comma-separated list of QR Code IDs to delete. Maximum of 100 IDs. Non-existing IDs will be
     * ignored.
     */
    qrcodeIds: string[];
  };

  export class BulkDeleteQrCodesError extends ApiError {
    declare readonly payload:
      | Declared<"m4001", M4001>
      | Declared<"m40012", M4001>
      | Declared<"m40013", M4001>
      | Declared<"m40014", M4001>
      | Declared<"m40015", M4001>
      | Declared<"m40016", M4001>
      | Declared<"m40017", M4001>
      | Declared<"m40018", M4001>
      | Declared<"m40019", M4001>
      | Undeclared;

    static readonly errors: ErrorDecoders<BulkDeleteQrCodesError> = [
      { on: 400, kind: "m4001", decode: { kind: "json", schema: m4001Schema } },
      { on: 401, kind: "m40012", decode: { kind: "json", schema: m4001Schema } },
      { on: 403, kind: "m40013", decode: { kind: "json", schema: m4001Schema } },
      { on: 404, kind: "m40014", decode: { kind: "json", schema: m4001Schema } },
      { on: 409, kind: "m40015", decode: { kind: "json", schema: m4001Schema } },
      { on: 410, kind: "m40016", decode: { kind: "json", schema: m4001Schema } },
      { on: 422, kind: "m40017", decode: { kind: "json", schema: m4001Schema } },
      { on: 429, kind: "m40018", decode: { kind: "json", schema: m4001Schema } },
      { on: 500, kind: "m40019", decode: { kind: "json", schema: m4001Schema } },
    ];
  }

  export type CreateQrCodeRequest = {
    body?: QrcodesRequest;
  };

  export class CreateQrCodeError extends ApiError {
    declare readonly payload:
      | Declared<"m4001", M4001>
      | Declared<"m40012", M4001>
      | Declared<"m40013", M4001>
      | Declared<"m40014", M4001>
      | Declared<"m40015", M4001>
      | Declared<"m40016", M4001>
      | Declared<"m40017", M4001>
      | Declared<"m40018", M4001>
      | Declared<"m40019", M4001>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateQrCodeError> = [
      { on: 400, kind: "m4001", decode: { kind: "json", schema: m4001Schema } },
      { on: 401, kind: "m40012", decode: { kind: "json", schema: m4001Schema } },
      { on: 403, kind: "m40013", decode: { kind: "json", schema: m4001Schema } },
      { on: 404, kind: "m40014", decode: { kind: "json", schema: m4001Schema } },
      { on: 409, kind: "m40015", decode: { kind: "json", schema: m4001Schema } },
      { on: 410, kind: "m40016", decode: { kind: "json", schema: m4001Schema } },
      { on: 422, kind: "m40017", decode: { kind: "json", schema: m4001Schema } },
      { on: 429, kind: "m40018", decode: { kind: "json", schema: m4001Schema } },
      { on: 500, kind: "m40019", decode: { kind: "json", schema: m4001Schema } },
    ];
  }

  export type DeleteQrCodeRequest = {
    /**
     * The id of the QR Code to delete. You may use either `qrcodeId` (obtained via `/qrcodes/info`
     * endpoint) or `externalId` prefixed with `ext_`.
     */
    qrcodeId: string;
  };

  export class DeleteQrCodeError extends ApiError {
    declare readonly payload:
      | Declared<"m4001", M4001>
      | Declared<"m40012", M4001>
      | Declared<"m40013", M4001>
      | Declared<"m40014", M4001>
      | Declared<"m40015", M4001>
      | Declared<"m40016", M4001>
      | Declared<"m40017", M4001>
      | Declared<"m40018", M4001>
      | Declared<"m40019", M4001>
      | Undeclared;

    static readonly errors: ErrorDecoders<DeleteQrCodeError> = [
      { on: 400, kind: "m4001", decode: { kind: "json", schema: m4001Schema } },
      { on: 401, kind: "m40012", decode: { kind: "json", schema: m4001Schema } },
      { on: 403, kind: "m40013", decode: { kind: "json", schema: m4001Schema } },
      { on: 404, kind: "m40014", decode: { kind: "json", schema: m4001Schema } },
      { on: 409, kind: "m40015", decode: { kind: "json", schema: m4001Schema } },
      { on: 410, kind: "m40016", decode: { kind: "json", schema: m4001Schema } },
      { on: 422, kind: "m40017", decode: { kind: "json", schema: m4001Schema } },
      { on: 429, kind: "m40018", decode: { kind: "json", schema: m4001Schema } },
      { on: 500, kind: "m40019", decode: { kind: "json", schema: m4001Schema } },
    ];
  }

  export type GetQrCodeInfoRequest = {
    /**
     * The slug of the project to which the QR code belongs. For example, for `app.codeqr.io/acme`,
     * the projectSlug is `acme`.
     */
    projectSlug: string;
    domain: string;
    /**
     * The key of the QR code to be retrieved. For example, for `codeqr.link/github`, the key is
     * `github`.
     */
    key: string;
    /** The unique ID of the QR code. */
    qrCodeId?: string;
    /**
     * This is the ID of the QR code in your database. It must be prefixed with `ext_` when passed
     * as a query parameter.
     */
    externalId?: string;
  };

  export const getQrCodeInfoRequestSchema: Schema<GetQrCodeInfoRequest> = s.lazySchema(() =>
    s.object<GetQrCodeInfoRequest>({
      projectSlug: s.string().check(s.minLength(1)),
      domain: s.string().check(s.minLength(1)),
      key: s.string().check(s.minLength(1)),
      qrCodeId: s.optional(s.string()),
      externalId: s.optional(s.string()),
    }),
  );

  export class GetQrCodeInfoError extends ApiError {
    declare readonly payload:
      | Declared<"m4001", M4001>
      | Declared<"m40012", M4001>
      | Declared<"m40013", M4001>
      | Declared<"m40014", M4001>
      | Declared<"m40015", M4001>
      | Declared<"m40016", M4001>
      | Declared<"m40017", M4001>
      | Declared<"m40018", M4001>
      | Declared<"m40019", M4001>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetQrCodeInfoError> = [
      { on: 400, kind: "m4001", decode: { kind: "json", schema: m4001Schema } },
      { on: 401, kind: "m40012", decode: { kind: "json", schema: m4001Schema } },
      { on: 403, kind: "m40013", decode: { kind: "json", schema: m4001Schema } },
      { on: 404, kind: "m40014", decode: { kind: "json", schema: m4001Schema } },
      { on: 409, kind: "m40015", decode: { kind: "json", schema: m4001Schema } },
      { on: 410, kind: "m40016", decode: { kind: "json", schema: m4001Schema } },
      { on: 422, kind: "m40017", decode: { kind: "json", schema: m4001Schema } },
      { on: 429, kind: "m40018", decode: { kind: "json", schema: m4001Schema } },
      { on: 500, kind: "m40019", decode: { kind: "json", schema: m4001Schema } },
    ];
  }

  export type GetQrCodesRequest = {
    /**
     * The slug of the project to which the QR code belongs. For example, for `app.codeqr.io/acme`,
     * the projectSlug is `acme`.
     */
    projectSlug?: string;
    /**
     * The domain to filter the QR codes. For example, `ac.me`. If not provided, all QR codes of the
     * project will be returned.
     */
    domain?: string;
    /** [DEPRECATED (use tagIds instead)]: The unique ID of the tag assigned to the QR code. */
    tagId?: string;
    /** The IDs of the tags to filter the QR codes. */
    tagIds?: TagIdsModel;
    /** The unique name of the tags assigned to the QR code (case insensitive). */
    tagNames?: TagNames;
    /** The folder ID to filter the QR codes by. */
    folderId?: string;
    /**
     * The search term to filter the QR codes. The search term will be matched against the QR code
     * slug, title, and the destination URL.
     */
    search?: string;
    /** The ID of the user to filter by. */
    userId?: string;
    /**
     * If should include archived QR codes in the response. The default is `false` if not provided.
     *
     * @default false
     */
    showArchived?: boolean;
    /** The comments to filter by. */
    comments?: string;
    /** The password to filter by. */
    password?: string;
    expiresAt?: Date | null;
    /**
     * If should include QR codes with conversion tracking enabled. The default is `false` if not
     * provided.
     *
     * @default false
     */
    trackConversion?: boolean;
    /**
     * If should include tags in the response. The default is `false` if not provided.
     *
     * @default false
     */
    withTags?: boolean;
    /** Filter QR codes marked as templates. */
    useAsTemplate?: boolean;
    /** Filter by QR code format - static or dynamic */
    format?: Format;
    /** Filter by QR code type */
    type?: Type2;
    /** Filter QR codes with/without password protection */
    hasPassword?: boolean;
    /** Filter QR codes with/without expiration date */
    hasExpiration?: boolean;
    /** Filter QR codes with/without UTM parameters */
    hasUtm?: boolean;
    /** Filter QR codes with/without custom social media cards */
    hasCustomSocial?: boolean;
    /** Filter QR codes with/without geo-targeting */
    hasGeo?: boolean;
    /** Filter QR codes with/without device targeting */
    hasDevice?: boolean;
    /** Filter QR codes with/without comments */
    hasComments?: boolean;
    /** Filter QR codes with/without tags */
    hasTags?: boolean;
    /** Filter QR codes created after this date */
    createdAfter?: Date;
    /** Filter QR codes created before this date */
    createdBefore?: Date;
    /** Filter QR codes expiring after this date */
    expiresAfter?: Date;
    /** Filter QR codes expiring before this date */
    expiresBefore?: Date;
    /** Minimum number of scans */
    scansMin?: number;
    /** Maximum number of scans */
    scansMax?: number;
    /** Filter by UTM source value */
    utmSource?: string;
    /** Filter by UTM medium value */
    utmMedium?: string;
    /** Filter by UTM campaign value */
    utmCampaign?: string;
    /** Filter by UTM content value */
    utmContent?: string;
    /** Filter by UTM term value */
    utmTerm?: string;
    /**
     * The field to order the QR codes. The default is `createdAt`, and the order of sorting is
     * always descending.
     *
     * @default SortCodeqrIoQrCodesApi.CreatedAt
     */
    sort?: SortCodeqrIoQrCodesApi;
    /** The page number for pagination. @default 1 */
    page?: number;
    /** The number of items per page. @default 100 */
    pageSize?: number;
  };

  export const getQrCodesRequestSchema: Schema<GetQrCodesRequest> = s.lazySchema(() =>
    s.object<GetQrCodesRequest>({
      projectSlug: s.optional(s.string()),
      domain: s.optional(s.string()),
      tagId: s.optional(s.string()),
      tagIds: s.optional(s.lazy(() => tagIdsModelSchema)),
      tagNames: s.optional(s.lazy(() => tagNamesSchema)),
      folderId: s.optional(s.string()),
      search: s.optional(s.string()),
      userId: s.optional(s.string()),
      showArchived: s.defaulted(s.boolean(), false),
      comments: s.optional(s.string()),
      password: s.optional(s.string()),
      expiresAt: s.optionalNullable(s.dateTime()),
      trackConversion: s.defaulted(s.boolean(), false),
      withTags: s.defaulted(s.boolean(), false),
      useAsTemplate: s.optional(s.boolean()),
      format: s.optional(s.lazy(() => formatSchema)),
      type: s.optional(s.lazy(() => type2Schema)),
      hasPassword: s.optional(s.boolean()),
      hasExpiration: s.optional(s.boolean()),
      hasUtm: s.optional(s.boolean()),
      hasCustomSocial: s.optional(s.boolean()),
      hasGeo: s.optional(s.boolean()),
      hasDevice: s.optional(s.boolean()),
      hasComments: s.optional(s.boolean()),
      hasTags: s.optional(s.boolean()),
      createdAfter: s.optional(s.dateTime()),
      createdBefore: s.optional(s.dateTime()),
      expiresAfter: s.optional(s.dateTime()),
      expiresBefore: s.optional(s.dateTime()),
      scansMin: s.optional(s.int().check(s.gte(0))),
      scansMax: s.optional(s.int().check(s.gte(0))),
      utmSource: s.optional(s.string()),
      utmMedium: s.optional(s.string()),
      utmCampaign: s.optional(s.string()),
      utmContent: s.optional(s.string()),
      utmTerm: s.optional(s.string()),
      sort: s.defaulted(sortCodeqrIoQrCodesApiSchema, SortCodeqrIoQrCodesApi.CreatedAt),
      page: s.defaulted(s.float64().check(s.gt(0)), 1),
      pageSize: s.defaulted(s.float64().check(s.gt(0), s.lte(100)), 100),
    }),
  );

  export class GetQrCodesError extends ApiError {
    declare readonly payload:
      | Declared<"m4001", M4001>
      | Declared<"m40012", M4001>
      | Declared<"m40013", M4001>
      | Declared<"m40014", M4001>
      | Declared<"m40015", M4001>
      | Declared<"m40016", M4001>
      | Declared<"m40017", M4001>
      | Declared<"m40018", M4001>
      | Declared<"m40019", M4001>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetQrCodesError> = [
      { on: 400, kind: "m4001", decode: { kind: "json", schema: m4001Schema } },
      { on: 401, kind: "m40012", decode: { kind: "json", schema: m4001Schema } },
      { on: 403, kind: "m40013", decode: { kind: "json", schema: m4001Schema } },
      { on: 404, kind: "m40014", decode: { kind: "json", schema: m4001Schema } },
      { on: 409, kind: "m40015", decode: { kind: "json", schema: m4001Schema } },
      { on: 410, kind: "m40016", decode: { kind: "json", schema: m4001Schema } },
      { on: 422, kind: "m40017", decode: { kind: "json", schema: m4001Schema } },
      { on: 429, kind: "m40018", decode: { kind: "json", schema: m4001Schema } },
      { on: 500, kind: "m40019", decode: { kind: "json", schema: m4001Schema } },
    ];
  }

  export type GetQrCodesCountRequest = {
    /**
     * The slug of the project to which the QR code belongs. For example, for `app.codeqr.io/acme`,
     * the projectSlug is `acme`.
     */
    projectSlug?: string;
    /**
     * The domain to filter the QR codes. For example, `ac.me`. If not provided, all QR codes of the
     * project will be returned.
     */
    domain?: string;
    /** [DEPRECATED (use tagIds instead)]: The unique ID of the tag assigned to the QR code. */
    tagId?: string;
    /** The IDs of the tags to filter the QR codes. */
    tagIds?: TagIdsModel;
    /** The unique name of the tags assigned to the QR code (case insensitive). */
    tagNames?: TagNames;
    /** The folder ID to filter the QR codes by. */
    folderId?: string;
    /**
     * The search term to filter the QR codes. The search term will be matched against the QR code
     * slug, title, and the destination URL.
     */
    search?: string;
    /** The ID of the user to filter by. */
    userId?: string;
    /**
     * If should include archived QR codes in the response. The default is `false` if not provided.
     *
     * @default false
     */
    showArchived?: boolean;
    /** The comments to filter by. */
    comments?: string;
    /** The password to filter by. */
    password?: string;
    expiresAt?: Date | null;
    /**
     * If should include QR codes with conversion tracking enabled. The default is `false` if not
     * provided.
     *
     * @default false
     */
    trackConversion?: boolean;
    /**
     * If should include tags in the response. The default is `false` if not provided.
     *
     * @default false
     */
    withTags?: boolean;
    /** Filter QR codes marked as templates. */
    useAsTemplate?: boolean;
    /** Filter by QR code format - static or dynamic */
    format?: Format;
    /** Filter by QR code type */
    type?: Type2;
    /** Filter QR codes with/without password protection */
    hasPassword?: boolean;
    /** Filter QR codes with/without expiration date */
    hasExpiration?: boolean;
    /** Filter QR codes with/without UTM parameters */
    hasUtm?: boolean;
    /** Filter QR codes with/without custom social media cards */
    hasCustomSocial?: boolean;
    /** Filter QR codes with/without geo-targeting */
    hasGeo?: boolean;
    /** Filter QR codes with/without device targeting */
    hasDevice?: boolean;
    /** Filter QR codes with/without comments */
    hasComments?: boolean;
    /** Filter QR codes with/without tags */
    hasTags?: boolean;
    /** Filter QR codes created after this date */
    createdAfter?: Date;
    /** Filter QR codes created before this date */
    createdBefore?: Date;
    /** Filter QR codes expiring after this date */
    expiresAfter?: Date;
    /** Filter QR codes expiring before this date */
    expiresBefore?: Date;
    /** Minimum number of scans */
    scansMin?: number;
    /** Maximum number of scans */
    scansMax?: number;
    /** Filter by UTM source value */
    utmSource?: string;
    /** Filter by UTM medium value */
    utmMedium?: string;
    /** Filter by UTM campaign value */
    utmCampaign?: string;
    /** Filter by UTM content value */
    utmContent?: string;
    /** Filter by UTM term value */
    utmTerm?: string;
    /** The field to group the QR codes. */
    groupBy?: GroupBy4CodeqrIoQrCodesApi;
  };

  export const getQrCodesCountRequestSchema: Schema<GetQrCodesCountRequest> = s.lazySchema(() =>
    s.object<GetQrCodesCountRequest>({
      projectSlug: s.optional(s.string()),
      domain: s.optional(s.string()),
      tagId: s.optional(s.string()),
      tagIds: s.optional(s.lazy(() => tagIdsModelSchema)),
      tagNames: s.optional(s.lazy(() => tagNamesSchema)),
      folderId: s.optional(s.string()),
      search: s.optional(s.string()),
      userId: s.optional(s.string()),
      showArchived: s.defaulted(s.boolean(), false),
      comments: s.optional(s.string()),
      password: s.optional(s.string()),
      expiresAt: s.optionalNullable(s.dateTime()),
      trackConversion: s.defaulted(s.boolean(), false),
      withTags: s.defaulted(s.boolean(), false),
      useAsTemplate: s.optional(s.boolean()),
      format: s.optional(s.lazy(() => formatSchema)),
      type: s.optional(s.lazy(() => type2Schema)),
      hasPassword: s.optional(s.boolean()),
      hasExpiration: s.optional(s.boolean()),
      hasUtm: s.optional(s.boolean()),
      hasCustomSocial: s.optional(s.boolean()),
      hasGeo: s.optional(s.boolean()),
      hasDevice: s.optional(s.boolean()),
      hasComments: s.optional(s.boolean()),
      hasTags: s.optional(s.boolean()),
      createdAfter: s.optional(s.dateTime()),
      createdBefore: s.optional(s.dateTime()),
      expiresAfter: s.optional(s.dateTime()),
      expiresBefore: s.optional(s.dateTime()),
      scansMin: s.optional(s.int().check(s.gte(0))),
      scansMax: s.optional(s.int().check(s.gte(0))),
      utmSource: s.optional(s.string()),
      utmMedium: s.optional(s.string()),
      utmCampaign: s.optional(s.string()),
      utmContent: s.optional(s.string()),
      utmTerm: s.optional(s.string()),
      groupBy: s.optional(s.lazy(() => groupBy4CodeqrIoQrCodesApiSchema)),
    }),
  );

  export class GetQrCodesCountError extends ApiError {
    declare readonly payload:
      | Declared<"m4001", M4001>
      | Declared<"m40012", M4001>
      | Declared<"m40013", M4001>
      | Declared<"m40014", M4001>
      | Declared<"m40015", M4001>
      | Declared<"m40016", M4001>
      | Declared<"m40017", M4001>
      | Declared<"m40018", M4001>
      | Declared<"m40019", M4001>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetQrCodesCountError> = [
      { on: 400, kind: "m4001", decode: { kind: "json", schema: m4001Schema } },
      { on: 401, kind: "m40012", decode: { kind: "json", schema: m4001Schema } },
      { on: 403, kind: "m40013", decode: { kind: "json", schema: m4001Schema } },
      { on: 404, kind: "m40014", decode: { kind: "json", schema: m4001Schema } },
      { on: 409, kind: "m40015", decode: { kind: "json", schema: m4001Schema } },
      { on: 410, kind: "m40016", decode: { kind: "json", schema: m4001Schema } },
      { on: 422, kind: "m40017", decode: { kind: "json", schema: m4001Schema } },
      { on: 429, kind: "m40018", decode: { kind: "json", schema: m4001Schema } },
      { on: 500, kind: "m40019", decode: { kind: "json", schema: m4001Schema } },
    ];
  }

  export type UpdateQrCodeRequest = {
    /**
     * The id of the QR Code to update. You may use either `qrcodeId` (obtained via `/qrcodes/info`
     * endpoint) or `externalId` prefixed with `ext_`.
     */
    qrcodeId: string;
    body?: QrcodesRequest1;
  };

  export class UpdateQrCodeError extends ApiError {
    declare readonly payload:
      | Declared<"m4001", M4001>
      | Declared<"m40012", M4001>
      | Declared<"m40013", M4001>
      | Declared<"m40014", M4001>
      | Declared<"m40015", M4001>
      | Declared<"m40016", M4001>
      | Declared<"m40017", M4001>
      | Declared<"m40018", M4001>
      | Declared<"m40019", M4001>
      | Undeclared;

    static readonly errors: ErrorDecoders<UpdateQrCodeError> = [
      { on: 400, kind: "m4001", decode: { kind: "json", schema: m4001Schema } },
      { on: 401, kind: "m40012", decode: { kind: "json", schema: m4001Schema } },
      { on: 403, kind: "m40013", decode: { kind: "json", schema: m4001Schema } },
      { on: 404, kind: "m40014", decode: { kind: "json", schema: m4001Schema } },
      { on: 409, kind: "m40015", decode: { kind: "json", schema: m4001Schema } },
      { on: 410, kind: "m40016", decode: { kind: "json", schema: m4001Schema } },
      { on: 422, kind: "m40017", decode: { kind: "json", schema: m4001Schema } },
      { on: 429, kind: "m40018", decode: { kind: "json", schema: m4001Schema } },
      { on: 500, kind: "m40019", decode: { kind: "json", schema: m4001Schema } },
    ];
  }
}
