import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { noneAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { errorResponseSchema, type ErrorResponse } from "../models/error-response.js";
import { optInConfigResponseSchema, type OptInConfigResponse } from "../models/opt-in-config-response.js";
import { v1OptInsResponseSchema, type V1OptInsResponse } from "../models/v1-opt-ins-response.js";
import type { Servers } from "../servers.js";

export class FeatureOptIn {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;

  constructor(rawClient: RawClient, servers: Servers) {
    this.#rawClient = rawClient;
    this.#servers = servers;
  }

  /**
   * Fetch opt-in config
   *
   * @remarks
   * Fetch a project config to display features available for Opt-in
   *
   * @returns Opt-in Config Response
   *
   * @throws {@link FeatureOptIn.GetV1OptInConfigError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link DevCycleError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getV1OptInConfig(
    request: FeatureOptIn.GetV1OptInConfigRequest,
    options?: RequestOptions,
  ): ApiPromise<OptInConfigResponse, FeatureOptIn.GetV1OptInConfigError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.defaultDevCycleBucketingBucketingApi("/v1/optInConfig"),
        auth: noneAuth,
        pathParams: [],
        query: [
          { name: "user_id", value: request.userId, schema: s.string() },
          { name: "sdkKey", value: request.sdkKey, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: optInConfigResponseSchema },
        errorFactory: FeatureOptIn.GetV1OptInConfigError,
      },
      options,
    );
  }

  /**
   * Update opt-in preferences for a user
   *
   * @returns Opt-in update success response
   *
   * @throws {@link FeatureOptIn.PutV1OptInsByUserIdError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link DevCycleError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  putV1OptInsByUserId(
    request: FeatureOptIn.PutV1OptInsByUserIdRequest,
    options?: RequestOptions,
  ): ApiPromise<V1OptInsResponse, FeatureOptIn.PutV1OptInsByUserIdError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.defaultDevCycleBucketingBucketingApi("/v1/optIns/{user_id}"),
        auth: noneAuth,
        pathParams: [{ name: "user_id", value: request.userId, schema: s.string() }],
        query: [{ name: "sdkKey", value: request.sdkKey, schema: s.optional(s.string()) }],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: s.record(s.string(), s.boolean()) },
      },
      {
        success: { kind: "json", schema: v1OptInsResponseSchema },
        errorFactory: FeatureOptIn.PutV1OptInsByUserIdError,
      },
      options,
    );
  }
}

export namespace FeatureOptIn {
  export type GetV1OptInConfigRequest = {
    /** Unique id to identify the user */
    userId: string;
    /**
     * SDK Key as defined in the dashboard for your DevCycle environment. One of the Authorization
     * header or "sdkKey" query parameter is required to be set.
     */
    sdkKey?: string;
  };

  export class GetV1OptInConfigError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetV1OptInConfigError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type PutV1OptInsByUserIdRequest = {
    /** Unique user_id to identify the user */
    userId: string;
    /**
     * SDK Key as defined in the dashboard for your DevCycle environment. One of the Authorization
     * header or "sdkKey" query parameter is required to be set.
     */
    sdkKey?: string;
    /**
     * A map of feature IDs to boolean values. The value should be true if the user has opted in,
     * false otherwise
     */
    body: Record<string, boolean>;
  };

  export class PutV1OptInsByUserIdError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<PutV1OptInsByUserIdError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }
}
