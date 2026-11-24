import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { noneAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { BucketWidth, bucketWidthSchema } from "../models/bucket-width.js";
import {
  environmentUsageResponseSchema,
  type EnvironmentUsageResponse,
} from "../models/environment-usage-response.js";
import { errorResponseSchema, type ErrorResponse } from "../models/error-response.js";
import { httpValidationErrorSchema, type HttpValidationError } from "../models/http-validation-error.js";
import {
  inferenceUsageAggregateResponseSchema,
  type InferenceUsageAggregateResponse,
} from "../models/inference-usage-aggregate-response.js";
import { apiKeyIdSchema, type ApiKeyId } from "../models/unions/api-key-id.js";
import { byokCredentialIdSchema, type ByokCredentialId } from "../models/unions/byok-credential-id.js";
import { endSchema, type End } from "../models/unions/end.js";
import { groupBy1Schema, type GroupBy1 } from "../models/unions/group-by1.js";
import { startSchema, type Start } from "../models/unions/start.js";
import {
  statusHudPlatformInstancesApiSchema,
  type StatusHudPlatformInstancesApi,
} from "../models/unions/status-hud-platform-instances-api.js";
import { userIdSchema, type UserId } from "../models/unions/user-id.js";
import type { Servers } from "../servers.js";

export class Usage {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;

  constructor(rawClient: RawClient, servers: Servers) {
    this.#rawClient = rawClient;
    this.#servers = servers;
  }

  /**
   * Get Environment Usage
   *
   * @remarks
   * Get the team's environment session usage over a window, with summary and paged sessions.
   *
   * @returns Successful Response
   *
   * @throws {@link Usage.GetEnvironmentUsageV2EnvironmentsUsageGetError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link HudError} when no usable response was produced: a connection failure, a timeout,
   * a body that would not decode, a value that would not encode, or a credential that could not be
   * obtained
   */
  getEnvironmentUsageV2EnvironmentsUsageGet(
    request: Usage.GetEnvironmentUsageV2EnvironmentsUsageGetRequest = {},
    options?: RequestOptions,
  ): ApiPromise<EnvironmentUsageResponse, Usage.GetEnvironmentUsageV2EnvironmentsUsageGetError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v2/environments/usage"),
        auth: noneAuth,
        pathParams: [],
        query: [
          { name: "days", value: request.days, schema: s.defaulted(s.int(), 7) },
          { name: "user_id", value: request.userId, schema: s.optional(s.lazy(() => userIdSchema)) },
          { name: "api_key_id", value: request.apiKeyId, schema: s.optional(s.lazy(() => apiKeyIdSchema)) },
          {
            name: "status",
            value: request.status,
            schema: s.optional(s.lazy(() => statusHudPlatformInstancesApiSchema)),
          },
          { name: "limit", value: request.limit, schema: s.defaulted(s.int(), 50) },
          { name: "offset", value: request.offset, schema: s.defaulted(s.int(), 0) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: environmentUsageResponseSchema },
        errorFactory: Usage.GetEnvironmentUsageV2EnvironmentsUsageGetError,
      },
      options,
    );
  }

  /**
   * Get Inference Usage Aggregate
   *
   * @remarks
   * Aggregate the team's inference usage into time buckets, optionally grouped.
   *
   * @returns Successful Response
   *
   * @throws {@link Usage.GetInferenceUsageAggregateV2UsageInferenceGetError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link HudError} when no usable response was produced: a connection failure, a timeout,
   * a body that would not decode, a value that would not encode, or a credential that could not be
   * obtained
   */
  getInferenceUsageAggregateV2UsageInferenceGet(
    request: Usage.GetInferenceUsageAggregateV2UsageInferenceGetRequest = {},
    options?: RequestOptions,
  ): ApiPromise<InferenceUsageAggregateResponse, Usage.GetInferenceUsageAggregateV2UsageInferenceGetError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v2/usage/inference"),
        auth: noneAuth,
        pathParams: [],
        query: [
          { name: "start", value: request.start, schema: s.optional(s.lazy(() => startSchema)) },
          { name: "end", value: request.end, schema: s.optional(s.lazy(() => endSchema)) },
          {
            name: "bucket_width",
            value: request.bucketWidth,
            schema: s.defaulted(bucketWidthSchema, BucketWidth._1D),
          },
          { name: "group_by", value: request.groupBy, schema: s.optional(s.lazy(() => groupBy1Schema)) },
          { name: "user_id", value: request.userId, schema: s.optional(s.lazy(() => userIdSchema)) },
          { name: "api_key_id", value: request.apiKeyId, schema: s.optional(s.lazy(() => apiKeyIdSchema)) },
          {
            name: "byok_credential_id",
            value: request.byokCredentialId,
            schema: s.optional(s.lazy(() => byokCredentialIdSchema)),
          },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: inferenceUsageAggregateResponseSchema },
        errorFactory: Usage.GetInferenceUsageAggregateV2UsageInferenceGetError,
      },
      options,
    );
  }
}

export namespace Usage {
  export type GetEnvironmentUsageV2EnvironmentsUsageGetRequest = {
    /** @default 7 */
    days?: number;
    userId?: UserId;
    apiKeyId?: ApiKeyId;
    status?: StatusHudPlatformInstancesApi;
    /** @default 50 */
    limit?: number;
    /** @default 0 */
    offset?: number;
  };

  export const getEnvironmentUsageV2EnvironmentsUsageGetRequestSchema: Schema<GetEnvironmentUsageV2EnvironmentsUsageGetRequest> =
    s.lazySchema(() =>
      s.object<GetEnvironmentUsageV2EnvironmentsUsageGetRequest>({
        days: s.defaulted(s.int().check(s.gte(1), s.lte(365)), 7),
        userId: s.optional(s.lazy(() => userIdSchema)),
        apiKeyId: s.optional(s.lazy(() => apiKeyIdSchema)),
        status: s.optional(s.lazy(() => statusHudPlatformInstancesApiSchema)),
        limit: s.defaulted(s.int().check(s.gte(1), s.lte(200)), 50),
        offset: s.defaulted(s.int().check(s.gte(0), s.lte(2147483647)), 0),
      }),
    );

  export class GetEnvironmentUsageV2EnvironmentsUsageGetError extends ApiError {
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

    static readonly errors: ErrorDecoders<GetEnvironmentUsageV2EnvironmentsUsageGetError> = [
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

  export type GetInferenceUsageAggregateV2UsageInferenceGetRequest = {
    /** Window start; defaults to end-7d */
    start?: Start;
    /** Window end; defaults to now */
    end?: End;
    /** @default BucketWidth._1D */
    bucketWidth?: BucketWidth;
    /** Grouping dimensions; repeat the parameter to group by several at once */
    groupBy?: GroupBy1;
    userId?: UserId;
    apiKeyId?: ApiKeyId;
    byokCredentialId?: ByokCredentialId;
  };

  export class GetInferenceUsageAggregateV2UsageInferenceGetError extends ApiError {
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

    static readonly errors: ErrorDecoders<GetInferenceUsageAggregateV2UsageInferenceGetError> = [
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
