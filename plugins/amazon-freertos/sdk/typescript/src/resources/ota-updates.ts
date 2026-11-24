import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  createOtaUpdateRequestSchema,
  type CreateOtaUpdateRequest,
} from "../models/create-ota-update-request.js";
import { errorResponseSchema, type ErrorResponse } from "../models/error-response.js";
import { otaUpdateInfoSchema, type OtaUpdateInfo } from "../models/ota-update-info.js";
import { otaUpdateSchema, type OtaUpdate } from "../models/ota-update.js";
import { otaUpdatesResponseSchema, type OtaUpdatesResponse } from "../models/ota-updates-response.js";
import type { Servers } from "../servers.js";

/**
 * Over-the-air firmware update management
 */
export class OtaUpdates {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Create OTA Update
   *
   * @remarks
   * Creates an AWS IoT OTA update on a target group of devices.
   *
   * @returns Success
   *
   * @throws {@link OtaUpdates.CreateOtaUpdateError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link AmazonFreeRtosError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createOtaUpdate(
    request: OtaUpdates.CreateOtaUpdateRequestParams,
    options?: RequestOptions,
  ): ApiPromise<OtaUpdate, OtaUpdates.CreateOtaUpdateError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/otaUpdates"),
        auth: this.#auth.awsSigV4,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: createOtaUpdateRequestSchema },
      },
      {
        success: { kind: "json", schema: otaUpdateSchema },
        errorFactory: OtaUpdates.CreateOtaUpdateError,
      },
      options,
    );
  }

  /**
   * Delete OTA Update
   *
   * @remarks
   * Deletes an OTA update.
   *
   * @returns Success
   *
   * @throws {@link OtaUpdates.DeleteOtaUpdateError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link AmazonFreeRtosError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteOtaUpdate(
    request: OtaUpdates.DeleteOtaUpdateRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, OtaUpdates.DeleteOtaUpdateError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/otaUpdates/{otaUpdateId}"),
        auth: this.#auth.awsSigV4,
        pathParams: [{ name: "otaUpdateId", value: request.otaUpdateId, schema: s.string() }],
        query: [
          { name: "deleteStream", value: request.deleteStream, schema: s.optional(s.boolean()) },
          { name: "forceDeleteAWSJob", value: request.forceDeleteAwsJob, schema: s.optional(s.boolean()) },
        ],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: OtaUpdates.DeleteOtaUpdateError,
      },
      options,
    );
  }

  /**
   * Get OTA Update
   *
   * @remarks
   * Gets an OTA update.
   *
   * @returns Success
   *
   * @throws {@link OtaUpdates.GetOtaUpdateError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link AmazonFreeRtosError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getOtaUpdate(
    request: OtaUpdates.GetOtaUpdateRequest,
    options?: RequestOptions,
  ): ApiPromise<OtaUpdateInfo, OtaUpdates.GetOtaUpdateError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/otaUpdates/{otaUpdateId}"),
        auth: this.#auth.awsSigV4,
        pathParams: [{ name: "otaUpdateId", value: request.otaUpdateId, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: otaUpdateInfoSchema },
        errorFactory: OtaUpdates.GetOtaUpdateError,
      },
      options,
    );
  }

  /**
   * List OTA Updates
   *
   * @remarks
   * Lists OTA updates.
   *
   * @returns Success
   *
   * @throws {@link OtaUpdates.ListOtaUpdatesError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link AmazonFreeRtosError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listOtaUpdates(
    request: OtaUpdates.ListOtaUpdatesRequest = {},
    options?: RequestOptions,
  ): ApiPromise<OtaUpdatesResponse, OtaUpdates.ListOtaUpdatesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/otaUpdates"),
        auth: this.#auth.awsSigV4,
        pathParams: [],
        query: [
          { name: "maxResults", value: request.maxResults, schema: s.optional(s.int()) },
          { name: "nextToken", value: request.nextToken, schema: s.optional(s.string()) },
          { name: "otaUpdateStatus", value: request.otaUpdateStatus, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: otaUpdatesResponseSchema },
        errorFactory: OtaUpdates.ListOtaUpdatesError,
      },
      options,
    );
  }
}

export namespace OtaUpdates {
  export type CreateOtaUpdateRequestParams = {
    body: CreateOtaUpdateRequest;
  };

  export class CreateOtaUpdateError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateOtaUpdateError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type DeleteOtaUpdateRequest = {
    /** The OTA update ID to delete. */
    otaUpdateId: string;
    /** Whether to delete the stream associated with the update. */
    deleteStream?: boolean;
    /** Whether to force delete the associated AWS IoT job. */
    forceDeleteAwsJob?: boolean;
  };

  export class DeleteOtaUpdateError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<DeleteOtaUpdateError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type GetOtaUpdateRequest = {
    /** The OTA update ID. */
    otaUpdateId: string;
  };

  export class GetOtaUpdateError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetOtaUpdateError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type ListOtaUpdatesRequest = {
    /** Maximum results. */
    maxResults?: number;
    /** Pagination token. */
    nextToken?: string;
    /** Filter by OTA update status. */
    otaUpdateStatus?: string;
  };

  export class ListOtaUpdatesError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListOtaUpdatesError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }
}
