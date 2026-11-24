import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { noneAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorResponseSchema, type ErrorResponse } from "../models/error-response.js";
import { httpValidationErrorSchema, type HttpValidationError } from "../models/http-validation-error.js";
import {
  inferenceUsageResponseSchema,
  type InferenceUsageResponse,
} from "../models/inference-usage-response.js";
import { apiKeyIdSchema, type ApiKeyId } from "../models/unions/api-key-id.js";
import { byokCredentialIdSchema, type ByokCredentialId } from "../models/unions/byok-credential-id.js";
import { modelIdSchema, type ModelId } from "../models/unions/model-id.js";
import { requestTypeSchema, type RequestType } from "../models/unions/request-type.js";
import { userIdSchema, type UserId } from "../models/unions/user-id.js";
import type { Servers } from "../servers.js";

export class Inference {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;

  constructor(rawClient: RawClient, servers: Servers) {
    this.#rawClient = rawClient;
    this.#servers = servers;
  }

  /**
   * Get Inference Usage
   *
   * @remarks
   * Get the team's inference usage over a window, with summary and paged requests.
   *
   * @returns Successful Response
   *
   * @throws {@link Inference.GetInferenceUsageV2InferenceUsageGetError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link HudError} when no usable response was produced: a connection failure, a timeout,
   * a body that would not decode, a value that would not encode, or a credential that could not be
   * obtained
   */
  getInferenceUsageV2InferenceUsageGet(
    request: Inference.GetInferenceUsageV2InferenceUsageGetRequest = {},
    options?: RequestOptions,
  ): ApiPromise<InferenceUsageResponse, Inference.GetInferenceUsageV2InferenceUsageGetError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v2/inference/usage"),
        auth: noneAuth,
        pathParams: [],
        query: [
          { name: "days", value: request.days, schema: s.defaulted(s.int(), 7) },
          { name: "user_id", value: request.userId, schema: s.optional(s.lazy(() => userIdSchema)) },
          { name: "api_key_id", value: request.apiKeyId, schema: s.optional(s.lazy(() => apiKeyIdSchema)) },
          {
            name: "byok_credential_id",
            value: request.byokCredentialId,
            schema: s.optional(s.lazy(() => byokCredentialIdSchema)),
          },
          { name: "model_id", value: request.modelId, schema: s.optional(s.lazy(() => modelIdSchema)) },
          {
            name: "request_type",
            value: request.requestType,
            schema: s.optional(s.lazy(() => requestTypeSchema)),
          },
          { name: "limit", value: request.limit, schema: s.defaulted(s.int(), 50) },
          { name: "offset", value: request.offset, schema: s.defaulted(s.int(), 0) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: inferenceUsageResponseSchema },
        errorFactory: Inference.GetInferenceUsageV2InferenceUsageGetError,
      },
      options,
    );
  }
}

export namespace Inference {
  export type GetInferenceUsageV2InferenceUsageGetRequest = {
    /** @default 7 */
    days?: number;
    userId?: UserId;
    apiKeyId?: ApiKeyId;
    byokCredentialId?: ByokCredentialId;
    modelId?: ModelId;
    requestType?: RequestType;
    /** @default 50 */
    limit?: number;
    /** @default 0 */
    offset?: number;
  };

  export const getInferenceUsageV2InferenceUsageGetRequestSchema: Schema<GetInferenceUsageV2InferenceUsageGetRequest> =
    s.lazySchema(() =>
      s.object<GetInferenceUsageV2InferenceUsageGetRequest>({
        days: s.defaulted(s.int().check(s.gte(1), s.lte(365)), 7),
        userId: s.optional(s.lazy(() => userIdSchema)),
        apiKeyId: s.optional(s.lazy(() => apiKeyIdSchema)),
        byokCredentialId: s.optional(s.lazy(() => byokCredentialIdSchema)),
        modelId: s.optional(s.lazy(() => modelIdSchema)),
        requestType: s.optional(s.lazy(() => requestTypeSchema)),
        limit: s.defaulted(s.int().check(s.gte(1), s.lte(200)), 50),
        offset: s.defaulted(s.int().check(s.gte(0), s.lte(2147483647)), 0),
      }),
    );

  export class GetInferenceUsageV2InferenceUsageGetError extends ApiError {
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

    static readonly errors: ErrorDecoders<GetInferenceUsageV2InferenceUsageGetError> = [
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
