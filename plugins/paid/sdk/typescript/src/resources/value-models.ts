import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { noneAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { backfillResponseSchema, type BackfillResponse } from "../models/backfill-response.js";
import { errorResponseSchema, type ErrorResponse } from "../models/error-response.js";
import { valueModelDetailSchema, type ValueModelDetail } from "../models/value-model-detail.js";
import {
  valueModelUploadRequestSchema,
  type ValueModelUploadRequest,
} from "../models/value-model-upload-request.js";
import {
  valueModelVersionListResponseSchema,
  type ValueModelVersionListResponse,
} from "../models/value-model-version-list-response.js";
import type { Servers } from "../servers.js";

export class ValueModels {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;

  constructor(rawClient: RawClient, servers: Servers) {
    this.#rawClient = rawClient;
    this.#servers = servers;
  }

  /**
   * Get current value model
   *
   * @remarks
   * Returns the current (latest active) value model for the organization.
   *
   * @returns 200
   *
   * @throws {@link ValueModels.GetCurrentValueModelError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link PaidError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getCurrentValueModel(
    request: ValueModels.GetCurrentValueModelRequest,
    options?: RequestOptions,
  ): ApiPromise<ValueModelDetail, ValueModels.GetCurrentValueModelError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.defaultReferenceAnalyticsExperimentalApi("/value-models/"),
        auth: noneAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Authorization", value: request.authorization, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: valueModelDetailSchema },
        errorFactory: ValueModels.GetCurrentValueModelError,
      },
      options,
    );
  }

  /**
   * Get specific version
   *
   * @remarks
   * Returns a specific historical value model version by version number, including full content.
   *
   * @returns 200
   *
   * @throws {@link ValueModels.GetValueModelVersionError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link PaidError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getValueModelVersion(
    request: ValueModels.GetValueModelVersionRequest,
    options?: RequestOptions,
  ): ApiPromise<ValueModelDetail, ValueModels.GetValueModelVersionError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.defaultReferenceAnalyticsExperimentalApi(
          "/value-models/versions/{version}",
        ),
        auth: noneAuth,
        pathParams: [{ name: "version", value: request.version, schema: s.int() }],
        query: [],
        headers: [{ name: "Authorization", value: request.authorization, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: valueModelDetailSchema },
        errorFactory: ValueModels.GetValueModelVersionError,
      },
      options,
    );
  }

  /**
   * List version history
   *
   * @remarks
   * Returns all value model versions sorted by version descending. Does not include the full
   * content.
   *
   * @returns 200
   *
   * @throws {@link ValueModels.ListValueModelVersionsError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link PaidError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listValueModelVersions(
    request: ValueModels.ListValueModelVersionsRequest,
    options?: RequestOptions,
  ): ApiPromise<ValueModelVersionListResponse, ValueModels.ListValueModelVersionsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.defaultReferenceAnalyticsExperimentalApi("/value-models/versions"),
        auth: noneAuth,
        pathParams: [],
        query: [
          { name: "limit", value: request.limit, schema: s.defaulted(s.int(), 10) },
          { name: "offset", value: request.offset, schema: s.optional(s.int()) },
        ],
        headers: [{ name: "Authorization", value: request.authorization, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: valueModelVersionListResponseSchema },
        errorFactory: ValueModels.ListValueModelVersionsError,
      },
      options,
    );
  }

  /**
   * Trigger backfill
   *
   * @remarks
   * Manually triggers a recalculation of all ClickHouse rows against the current value model.
   *
   * @returns 200
   *
   * @throws {@link ValueModels.RefreshValueModelBackfillError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link PaidError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  refreshValueModelBackfill(
    request: ValueModels.RefreshValueModelBackfillRequest,
    options?: RequestOptions,
  ): ApiPromise<BackfillResponse, ValueModels.RefreshValueModelBackfillError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.defaultReferenceAnalyticsExperimentalApi("/value-models/backfill"),
        auth: noneAuth,
        pathParams: [],
        query: [],
        headers: [
          { name: "Authorization", value: request.authorization, schema: s.string() },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "json", value: request.body, schema: s.optional(s.record(s.string(), s.unknown())) },
      },
      {
        success: { kind: "json", schema: backfillResponseSchema },
        errorFactory: ValueModels.RefreshValueModelBackfillError,
      },
      options,
    );
  }

  /**
   * Upload value model
   *
   * @remarks
   * Uploads a new value model version. Validates the content, creates a new version, archives the
   * previous active version, syncs to ClickHouse, and triggers a backfill of all historical
   * signals.
   *
   * @returns 200
   *
   * @throws {@link ValueModels.UpdateValueModelError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link PaidError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateValueModel(
    request: ValueModels.UpdateValueModelRequest,
    options?: RequestOptions,
  ): ApiPromise<ValueModelDetail, ValueModels.UpdateValueModelError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.defaultReferenceAnalyticsExperimentalApi("/value-models/"),
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
          schema: s.optional(s.lazy(() => valueModelUploadRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: valueModelDetailSchema },
        errorFactory: ValueModels.UpdateValueModelError,
      },
      options,
    );
  }
}

export namespace ValueModels {
  export type GetCurrentValueModelRequest = {
    /** API Key authentication using Bearer token */
    authorization: string;
  };

  export class GetCurrentValueModelError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetCurrentValueModelError> = [
      { on: 404, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type GetValueModelVersionRequest = {
    version: number;
    /** API Key authentication using Bearer token */
    authorization: string;
  };

  export class GetValueModelVersionError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetValueModelVersionError> = [
      { on: 404, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type ListValueModelVersionsRequest = {
    /** @default 10 */
    limit?: number;
    offset?: number;
    /** API Key authentication using Bearer token */
    authorization: string;
  };

  export class ListValueModelVersionsError extends ApiError {
    declare readonly payload: Declared<"errorResponse", ErrorResponse> | Undeclared;

    static readonly errors: ErrorDecoders<ListValueModelVersionsError> = [
      { on: 500, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type RefreshValueModelBackfillRequest = {
    /** API Key authentication using Bearer token */
    authorization: string;
    /** Body */
    body?: Record<string, unknown>;
  };

  export class RefreshValueModelBackfillError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<RefreshValueModelBackfillError> = [
      { on: 404, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type UpdateValueModelRequest = {
    /** API Key authentication using Bearer token */
    authorization: string;
    /** Body */
    body?: ValueModelUploadRequest;
  };

  export class UpdateValueModelError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<UpdateValueModelError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }
}
