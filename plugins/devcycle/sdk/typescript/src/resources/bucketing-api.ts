import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorResponseSchema, type ErrorResponse } from "../models/error-response.js";
import { featureInternalSchema, type Feature } from "../models/feature.js";
import {
  userDataAndEventsBodyInternalSchema,
  type UserDataAndEventsBody,
} from "../models/user-data-and-events-body.js";
import { userDataInternalSchema, userDataSchema, type UserData } from "../models/user-data.js";
import { v1TrackResponseSchema, type V1TrackResponse } from "../models/v1-track-response.js";
import { variableInternalSchema, type Variable } from "../models/variable.js";
import type { Servers } from "../servers.js";

export class BucketingApi {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Get all features by key for user data
   *
   * @returns Features response (map of Feature keys to Feature objects)
   *
   * @throws {@link BucketingApi.GetFeaturesError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link DevCycleError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getFeatures(
    request: BucketingApi.GetFeaturesRequest,
    options?: RequestOptions,
  ): ApiPromise<Record<string, Feature>, BucketingApi.GetFeaturesError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.defaultDevCycleBucketingBucketingApi("/v1/features"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: userDataInternalSchema },
      },
      {
        success: {
          kind: "json",
          schema: s.record(
            s.string(),
            s.lazy(() => featureInternalSchema),
          ),
        },
        errorFactory: BucketingApi.GetFeaturesError,
      },
      options,
    );
  }

  /**
   * Get variable by key for user data
   *
   * @returns Variable response
   *
   * @throws {@link BucketingApi.GetVariableByKeyError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link DevCycleError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getVariableByKey(
    request: BucketingApi.GetVariableByKeyRequest,
    options?: RequestOptions,
  ): ApiPromise<Variable, BucketingApi.GetVariableByKeyError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.defaultDevCycleBucketingBucketingApi("/v1/variables/{key}"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "key", value: request.key, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: userDataInternalSchema },
      },
      {
        success: { kind: "json", schema: variableInternalSchema },
        errorFactory: BucketingApi.GetVariableByKeyError,
      },
      options,
    );
  }

  /**
   * Get all variables by key for user data
   *
   * @returns Variables response (map of variable keys to Variable objects)
   *
   * @throws {@link BucketingApi.GetVariablesError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link DevCycleError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getVariables(
    request: BucketingApi.GetVariablesRequest,
    options?: RequestOptions,
  ): ApiPromise<Record<string, Variable>, BucketingApi.GetVariablesError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.defaultDevCycleBucketingBucketingApi("/v1/variables"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: userDataInternalSchema },
      },
      {
        success: {
          kind: "json",
          schema: s.record(
            s.string(),
            s.lazy(() => variableInternalSchema),
          ),
        },
        errorFactory: BucketingApi.GetVariablesError,
      },
      options,
    );
  }

  /**
   * Post events to DevCycle for user
   *
   * @returns Events received successfully
   *
   * @throws {@link BucketingApi.PostEventsError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link DevCycleError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  postEvents(
    request: BucketingApi.PostEventsRequest,
    options?: RequestOptions,
  ): ApiPromise<V1TrackResponse, BucketingApi.PostEventsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.defaultDevCycleBucketingBucketingApi("/v1/track"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: userDataAndEventsBodyInternalSchema },
      },
      {
        success: { kind: "json", schema: v1TrackResponseSchema },
        errorFactory: BucketingApi.PostEventsError,
      },
      options,
    );
  }
}

export namespace BucketingApi {
  export type GetFeaturesRequest = {
    body: UserData;
  };

  export class GetFeaturesError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetFeaturesError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type GetVariableByKeyRequest = {
    /** Variable key */
    key: string;
    body: UserData;
  };

  export const getVariableByKeyRequestSchema: Schema<GetVariableByKeyRequest> = s.lazySchema(() =>
    s.object<GetVariableByKeyRequest>({
      key: s.string().check(s.pattern("^[a-z0-9-_.]+$")),
      body: userDataSchema,
    }),
  );

  export class GetVariableByKeyError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetVariableByKeyError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type GetVariablesRequest = {
    body: UserData;
  };

  export class GetVariablesError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetVariablesError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type PostEventsRequest = {
    body: UserDataAndEventsBody;
  };

  export class PostEventsError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<PostEventsError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }
}
