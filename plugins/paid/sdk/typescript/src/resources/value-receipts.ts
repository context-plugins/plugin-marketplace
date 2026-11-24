import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { noneAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { errorResponseSchema, type ErrorResponse } from "../models/error-response.js";
import {
  publishValueReceiptBodySchema,
  type PublishValueReceiptBody,
} from "../models/publish-value-receipt-body.js";
import { successResponseSchema, type SuccessResponse } from "../models/success-response.js";
import {
  syncValueReceiptRequestSchema,
  type SyncValueReceiptRequest,
} from "../models/sync-value-receipt-request.js";
import { valueReceiptDetailInternalSchema, type ValueReceiptDetail } from "../models/value-receipt-detail.js";
import {
  valueReceiptListResponseInternalSchema,
  type ValueReceiptListResponse,
} from "../models/value-receipt-list-response.js";
import {
  valueReceiptSyncResponseInternalSchema,
  type ValueReceiptSyncResponse,
} from "../models/value-receipt-sync-response.js";
import {
  ValueReceiptsGetParametersArchived,
  valueReceiptsGetParametersArchivedSchema,
} from "../models/value-receipts-get-parameters-archived.js";
import type { Servers } from "../servers.js";

export class ValueReceipts {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;

  constructor(rawClient: RawClient, servers: Servers) {
    this.#rawClient = rawClient;
    this.#servers = servers;
  }

  /**
   * Archive a value receipt
   *
   * @remarks
   * Soft-archive a value receipt. Archived VRs are hidden from list by default.
   *
   * @returns 200
   *
   * @throws {@link ValueReceipts.ArchiveValueReceiptError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link PaidError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  archiveValueReceipt(
    request: ValueReceipts.ArchiveValueReceiptRequest,
    options?: RequestOptions,
  ): ApiPromise<SuccessResponse, ValueReceipts.ArchiveValueReceiptError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.defaultReferenceAnalyticsExperimentalApi("/value-receipts/{id}/archive"),
        auth: noneAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [
          { name: "Authorization", value: request.authorization, schema: s.string() },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "json", value: request.body, schema: s.optional(s.record(s.string(), s.unknown())) },
      },
      {
        success: { kind: "json", schema: successResponseSchema },
        errorFactory: ValueReceipts.ArchiveValueReceiptError,
      },
      options,
    );
  }

  /**
   * Get value receipt
   *
   * @remarks
   * Get a value receipt by ID, including its publish/share state.
   *
   * @returns 200
   *
   * @throws {@link ValueReceipts.GetValueReceiptByIdError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link PaidError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getValueReceiptById(
    request: ValueReceipts.GetValueReceiptByIdRequest,
    options?: RequestOptions,
  ): ApiPromise<ValueReceiptDetail, ValueReceipts.GetValueReceiptByIdError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.defaultReferenceAnalyticsExperimentalApi("/value-receipts/{id}"),
        auth: noneAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [{ name: "Authorization", value: request.authorization, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: valueReceiptDetailInternalSchema },
        errorFactory: ValueReceipts.GetValueReceiptByIdError,
      },
      options,
    );
  }

  /**
   * List value receipts
   *
   * @remarks
   * List value receipts for the organization
   *
   * @returns 200
   *
   * @throws {@link ValueReceipts.ListValueReceiptsError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link PaidError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listValueReceipts(
    request: ValueReceipts.ListValueReceiptsRequest,
    options?: RequestOptions,
  ): ApiPromise<ValueReceiptListResponse, ValueReceipts.ListValueReceiptsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.defaultReferenceAnalyticsExperimentalApi("/value-receipts/"),
        auth: noneAuth,
        pathParams: [],
        query: [
          { name: "limit", value: request.limit, schema: s.defaulted(s.int(), 50) },
          { name: "offset", value: request.offset, schema: s.defaulted(s.int(), 0) },
          { name: "customerId", value: request.customerId, schema: s.optional(s.string()) },
          { name: "externalCustomerId", value: request.externalCustomerId, schema: s.optional(s.string()) },
          { name: "orderId", value: request.orderId, schema: s.optional(s.string()) },
          { name: "productId", value: request.productId, schema: s.optional(s.string()) },
          {
            name: "archived",
            value: request.archived,
            schema: s.defaulted(
              valueReceiptsGetParametersArchivedSchema,
              ValueReceiptsGetParametersArchived.False,
            ),
          },
        ],
        headers: [{ name: "Authorization", value: request.authorization, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: valueReceiptListResponseInternalSchema },
        errorFactory: ValueReceipts.ListValueReceiptsError,
      },
      options,
    );
  }

  /**
   * Publish a value receipt
   *
   * @remarks
   * Make a value receipt publicly accessible via URL.
   *
   * @returns 200
   *
   * @throws {@link ValueReceipts.PublishValueReceiptError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link PaidError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  publishValueReceipt(
    request: ValueReceipts.PublishValueReceiptRequest,
    options?: RequestOptions,
  ): ApiPromise<ValueReceiptDetail, ValueReceipts.PublishValueReceiptError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.defaultReferenceAnalyticsExperimentalApi("/value-receipts/{id}/publish"),
        auth: noneAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [
          { name: "Authorization", value: request.authorization, schema: s.string() },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => publishValueReceiptBodySchema)),
        },
      },
      {
        success: { kind: "json", schema: valueReceiptDetailInternalSchema },
        errorFactory: ValueReceipts.PublishValueReceiptError,
      },
      options,
    );
  }

  /**
   * Refresh a value receipt
   *
   * @remarks
   * Re-populate an existing draft value receipt with current data inline. Returns the slim sync
   * response. Sealed VRs cannot be refreshed.
   *
   * @returns 200
   *
   * @throws {@link ValueReceipts.RefreshValueReceiptError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link PaidError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  refreshValueReceipt(
    request: ValueReceipts.RefreshValueReceiptRequest,
    options?: RequestOptions,
  ): ApiPromise<ValueReceiptSyncResponse, ValueReceipts.RefreshValueReceiptError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.defaultReferenceAnalyticsExperimentalApi("/value-receipts/{id}/refresh"),
        auth: noneAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [
          { name: "Authorization", value: request.authorization, schema: s.string() },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "json", value: request.body, schema: s.optional(s.record(s.string(), s.unknown())) },
      },
      {
        success: { kind: "json", schema: valueReceiptSyncResponseInternalSchema },
        errorFactory: ValueReceipts.RefreshValueReceiptError,
      },
      options,
    );
  }

  /**
   * Seal a value receipt
   *
   * @remarks
   * Transition a draft value receipt to sealed (posted) status. Sealed VRs are immutable — they
   * cannot be updated or re-populated.
   *
   * @returns 200
   *
   * @throws {@link ValueReceipts.SealValueReceiptError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link PaidError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  sealValueReceipt(
    request: ValueReceipts.SealValueReceiptRequest,
    options?: RequestOptions,
  ): ApiPromise<SuccessResponse, ValueReceipts.SealValueReceiptError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.defaultReferenceAnalyticsExperimentalApi("/value-receipts/{id}/seal"),
        auth: noneAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [
          { name: "Authorization", value: request.authorization, schema: s.string() },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "json", value: request.body, schema: s.optional(s.record(s.string(), s.unknown())) },
      },
      {
        success: { kind: "json", schema: successResponseSchema },
        errorFactory: ValueReceipts.SealValueReceiptError,
      },
      options,
    );
  }

  /**
   * Sync a value receipt
   *
   * @remarks
   * Find or create a value receipt by natural key (customer + product/order + dates), then populate
   * it with current data inline. Returns the ID, status, and public URL. Posted (sealed) VRs are
   * returned as-is without re-populating.
   *
   * @returns 200
   *
   * @throws {@link ValueReceipts.SyncValueReceiptError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link PaidError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  syncValueReceipt(
    request: ValueReceipts.SyncValueReceiptRequestParams,
    options?: RequestOptions,
  ): ApiPromise<ValueReceiptSyncResponse, ValueReceipts.SyncValueReceiptError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.defaultReferenceAnalyticsExperimentalApi("/value-receipts/sync"),
        auth: noneAuth,
        pathParams: [],
        query: [],
        headers: [
          { name: "Authorization", value: request.authorization, schema: s.string() },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => syncValueReceiptRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: valueReceiptSyncResponseInternalSchema },
        errorFactory: ValueReceipts.SyncValueReceiptError,
      },
      options,
    );
  }

  /**
   * Unarchive a value receipt
   *
   * @remarks
   * Restore an archived value receipt.
   *
   * @returns 200
   *
   * @throws {@link ValueReceipts.UnarchiveValueReceiptError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link PaidError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  unarchiveValueReceipt(
    request: ValueReceipts.UnarchiveValueReceiptRequest,
    options?: RequestOptions,
  ): ApiPromise<SuccessResponse, ValueReceipts.UnarchiveValueReceiptError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.defaultReferenceAnalyticsExperimentalApi("/value-receipts/{id}/unarchive"),
        auth: noneAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [
          { name: "Authorization", value: request.authorization, schema: s.string() },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "json", value: request.body, schema: s.optional(s.record(s.string(), s.unknown())) },
      },
      {
        success: { kind: "json", schema: successResponseSchema },
        errorFactory: ValueReceipts.UnarchiveValueReceiptError,
      },
      options,
    );
  }

  /**
   * Unpublish a value receipt
   *
   * @remarks
   * Revoke public access to a value receipt.
   *
   * @returns 200
   *
   * @throws {@link ValueReceipts.UnpublishValueReceiptError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link PaidError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  unpublishValueReceipt(
    request: ValueReceipts.UnpublishValueReceiptRequest,
    options?: RequestOptions,
  ): ApiPromise<ValueReceiptDetail, ValueReceipts.UnpublishValueReceiptError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.defaultReferenceAnalyticsExperimentalApi("/value-receipts/{id}/unpublish"),
        auth: noneAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [
          { name: "Authorization", value: request.authorization, schema: s.string() },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "json", value: request.body, schema: s.optional(s.record(s.string(), s.unknown())) },
      },
      {
        success: { kind: "json", schema: valueReceiptDetailInternalSchema },
        errorFactory: ValueReceipts.UnpublishValueReceiptError,
      },
      options,
    );
  }
}

export namespace ValueReceipts {
  export type ArchiveValueReceiptRequest = {
    id: string;
    /** API Key authentication using Bearer token */
    authorization: string;
    /** Body */
    body?: Record<string, unknown>;
  };

  export class ArchiveValueReceiptError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<ArchiveValueReceiptError> = [
      { on: 404, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type GetValueReceiptByIdRequest = {
    id: string;
    /** API Key authentication using Bearer token */
    authorization: string;
  };

  export class GetValueReceiptByIdError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetValueReceiptByIdError> = [
      { on: 404, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type ListValueReceiptsRequest = {
    /** @default 50 */
    limit?: number;
    /** @default 0 */
    offset?: number;
    /** Filter by customer display ID. */
    customerId?: string;
    /** Filter by customer external ID. */
    externalCustomerId?: string;
    orderId?: string;
    productId?: string;
    /**
     * Include archived value receipts. Defaults to false.
     *
     * @default ValueReceiptsGetParametersArchived.False
     */
    archived?: ValueReceiptsGetParametersArchived;
    /** API Key authentication using Bearer token */
    authorization: string;
  };

  export class ListValueReceiptsError extends ApiError {
    declare readonly payload: Declared<"errorResponse", ErrorResponse> | Undeclared;

    static readonly errors: ErrorDecoders<ListValueReceiptsError> = [
      { on: 500, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type PublishValueReceiptRequest = {
    id: string;
    /** API Key authentication using Bearer token */
    authorization: string;
    /** Body */
    body?: PublishValueReceiptBody;
  };

  export class PublishValueReceiptError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<PublishValueReceiptError> = [
      { on: 404, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type RefreshValueReceiptRequest = {
    id: string;
    /** API Key authentication using Bearer token */
    authorization: string;
    /** Body */
    body?: Record<string, unknown>;
  };

  export class RefreshValueReceiptError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<RefreshValueReceiptError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 409, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type SealValueReceiptRequest = {
    id: string;
    /** API Key authentication using Bearer token */
    authorization: string;
    /** Body */
    body?: Record<string, unknown>;
  };

  export class SealValueReceiptError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<SealValueReceiptError> = [
      { on: 404, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 409, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type SyncValueReceiptRequestParams = {
    /** API Key authentication using Bearer token */
    authorization: string;
    /** Body */
    body?: SyncValueReceiptRequest;
  };

  export class SyncValueReceiptError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<SyncValueReceiptError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type UnarchiveValueReceiptRequest = {
    id: string;
    /** API Key authentication using Bearer token */
    authorization: string;
    /** Body */
    body?: Record<string, unknown>;
  };

  export class UnarchiveValueReceiptError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<UnarchiveValueReceiptError> = [
      { on: 404, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type UnpublishValueReceiptRequest = {
    id: string;
    /** API Key authentication using Bearer token */
    authorization: string;
    /** Body */
    body?: Record<string, unknown>;
  };

  export class UnpublishValueReceiptError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<UnpublishValueReceiptError> = [
      { on: 404, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }
}
