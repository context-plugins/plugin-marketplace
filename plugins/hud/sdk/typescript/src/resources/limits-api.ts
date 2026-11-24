import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { noneAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { errorResponseSchema, type ErrorResponse } from "../models/error-response.js";
import { httpValidationErrorSchema, type HttpValidationError } from "../models/http-validation-error.js";
import {
  spendLimitCreateRequestInternalSchema,
  type SpendLimitCreateRequest,
} from "../models/spend-limit-create-request.js";
import { spendLimitItemSchema, type SpendLimitItem } from "../models/spend-limit-item.js";
import {
  spendLimitListResponseSchema,
  type SpendLimitListResponse,
} from "../models/spend-limit-list-response.js";
import {
  spendLimitUpdateRequestInternalSchema,
  type SpendLimitUpdateRequest,
} from "../models/spend-limit-update-request.js";
import type { Servers } from "../servers.js";

export class LimitsApi {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;

  constructor(rawClient: RawClient, servers: Servers) {
    this.#rawClient = rawClient;
    this.#servers = servers;
  }

  /**
   * Create Spend Limit
   *
   * @remarks
   * Create a team, member, or API-key limit, or a team percentage alert.
   *
   * @returns Successful Response
   *
   * @throws {@link LimitsApi.CreateSpendLimitV2LimitsPostError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link HudError} when no usable response was produced: a connection failure, a timeout,
   * a body that would not decode, a value that would not encode, or a credential that could not be
   * obtained
   */
  createSpendLimitV2LimitsPost(
    request: LimitsApi.CreateSpendLimitV2LimitsPostRequest,
    options?: RequestOptions,
  ): ApiPromise<SpendLimitItem, LimitsApi.CreateSpendLimitV2LimitsPostError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v2/limits"),
        auth: noneAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: spendLimitCreateRequestInternalSchema },
      },
      {
        success: { kind: "json", schema: spendLimitItemSchema },
        errorFactory: LimitsApi.CreateSpendLimitV2LimitsPostError,
      },
      options,
    );
  }

  /**
   * Delete Spend Limit
   *
   * @remarks
   * Delete a spend limit.
   *
   * @returns Successful Response
   *
   * @throws {@link LimitsApi.DeleteSpendLimitV2LimitsLimitIdDeleteError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link HudError} when no usable response was produced: a connection failure, a timeout,
   * a body that would not decode, a value that would not encode, or a credential that could not be
   * obtained
   */
  deleteSpendLimitV2LimitsLimitIdDelete(
    request: LimitsApi.DeleteSpendLimitV2LimitsLimitIdDeleteRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, LimitsApi.DeleteSpendLimitV2LimitsLimitIdDeleteError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/v2/limits/{limit_id}"),
        auth: noneAuth,
        pathParams: [{ name: "limit_id", value: request.limitId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: LimitsApi.DeleteSpendLimitV2LimitsLimitIdDeleteError,
      },
      options,
    );
  }

  /**
   * List Spend Limits
   *
   * @remarks
   * List the spend limits visible to the caller with current-period spend.
   *
   * @returns Successful Response
   *
   * @throws {@link LimitsApi.ListSpendLimitsV2LimitsGetError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link HudError} when no usable response was produced: a connection failure, a timeout,
   * a body that would not decode, a value that would not encode, or a credential that could not be
   * obtained
   */
  listSpendLimitsV2LimitsGet(
    options?: RequestOptions,
  ): ApiPromise<SpendLimitListResponse, LimitsApi.ListSpendLimitsV2LimitsGetError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v2/limits"),
        auth: noneAuth,
        pathParams: [],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: spendLimitListResponseSchema },
        errorFactory: LimitsApi.ListSpendLimitsV2LimitsGetError,
      },
      options,
    );
  }

  /**
   * Reset Spend Limit
   *
   * @remarks
   * Start a new spend window on a blocking limit. Ledger rows are unchanged.
   *
   * @returns Successful Response
   *
   * @throws {@link LimitsApi.ResetSpendLimitV2LimitsLimitIdResetPostError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link HudError} when no usable response was produced: a connection failure, a timeout,
   * a body that would not decode, a value that would not encode, or a credential that could not be
   * obtained
   */
  resetSpendLimitV2LimitsLimitIdResetPost(
    request: LimitsApi.ResetSpendLimitV2LimitsLimitIdResetPostRequest,
    options?: RequestOptions,
  ): ApiPromise<SpendLimitItem, LimitsApi.ResetSpendLimitV2LimitsLimitIdResetPostError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v2/limits/{limit_id}/reset"),
        auth: noneAuth,
        pathParams: [{ name: "limit_id", value: request.limitId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: spendLimitItemSchema },
        errorFactory: LimitsApi.ResetSpendLimitV2LimitsLimitIdResetPostError,
      },
      options,
    );
  }

  /**
   * Update Spend Limit
   *
   * @remarks
   * Update an absolute amount, percentage threshold, or enabled state.
   *
   * @returns Successful Response
   *
   * @throws {@link LimitsApi.UpdateSpendLimitV2LimitsLimitIdPatchError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link HudError} when no usable response was produced: a connection failure, a timeout,
   * a body that would not decode, a value that would not encode, or a credential that could not be
   * obtained
   */
  updateSpendLimitV2LimitsLimitIdPatch(
    request: LimitsApi.UpdateSpendLimitV2LimitsLimitIdPatchRequest,
    options?: RequestOptions,
  ): ApiPromise<SpendLimitItem, LimitsApi.UpdateSpendLimitV2LimitsLimitIdPatchError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default("/v2/limits/{limit_id}"),
        auth: noneAuth,
        pathParams: [{ name: "limit_id", value: request.limitId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: spendLimitUpdateRequestInternalSchema },
      },
      {
        success: { kind: "json", schema: spendLimitItemSchema },
        errorFactory: LimitsApi.UpdateSpendLimitV2LimitsLimitIdPatchError,
      },
      options,
    );
  }
}

export namespace LimitsApi {
  export type CreateSpendLimitV2LimitsPostRequest = {
    body: SpendLimitCreateRequest;
  };

  export class CreateSpendLimitV2LimitsPostError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Declared<"errorResponse5", ErrorResponse>
      | Declared<"httpValidationError", HttpValidationError>
      | Declared<"errorResponse6", ErrorResponse>
      | Declared<"errorResponse7", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateSpendLimitV2LimitsPostError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 409, kind: "errorResponse5", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
      { on: 429, kind: "errorResponse6", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 503, kind: "errorResponse7", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type DeleteSpendLimitV2LimitsLimitIdDeleteRequest = {
    limitId: string;
  };

  export class DeleteSpendLimitV2LimitsLimitIdDeleteError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Declared<"errorResponse5", ErrorResponse>
      | Declared<"httpValidationError", HttpValidationError>
      | Declared<"errorResponse6", ErrorResponse>
      | Declared<"errorResponse7", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<DeleteSpendLimitV2LimitsLimitIdDeleteError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 409, kind: "errorResponse5", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
      { on: 429, kind: "errorResponse6", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 503, kind: "errorResponse7", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export class ListSpendLimitsV2LimitsGetError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Declared<"errorResponse5", ErrorResponse>
      | Declared<"errorResponse6", ErrorResponse>
      | Declared<"errorResponse7", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListSpendLimitsV2LimitsGetError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 409, kind: "errorResponse5", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 429, kind: "errorResponse6", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 503, kind: "errorResponse7", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type ResetSpendLimitV2LimitsLimitIdResetPostRequest = {
    limitId: string;
  };

  export class ResetSpendLimitV2LimitsLimitIdResetPostError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Declared<"errorResponse5", ErrorResponse>
      | Declared<"httpValidationError", HttpValidationError>
      | Declared<"errorResponse6", ErrorResponse>
      | Declared<"errorResponse7", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<ResetSpendLimitV2LimitsLimitIdResetPostError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 409, kind: "errorResponse5", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
      { on: 429, kind: "errorResponse6", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 503, kind: "errorResponse7", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type UpdateSpendLimitV2LimitsLimitIdPatchRequest = {
    limitId: string;
    body: SpendLimitUpdateRequest;
  };

  export class UpdateSpendLimitV2LimitsLimitIdPatchError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Declared<"errorResponse5", ErrorResponse>
      | Declared<"httpValidationError", HttpValidationError>
      | Declared<"errorResponse6", ErrorResponse>
      | Declared<"errorResponse7", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<UpdateSpendLimitV2LimitsLimitIdPatchError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 409, kind: "errorResponse5", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
      { on: 429, kind: "errorResponse6", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 503, kind: "errorResponse7", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }
}
