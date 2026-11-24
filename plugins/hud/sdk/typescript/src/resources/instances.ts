import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { noneAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  activeInstancesResponseSchema,
  type ActiveInstancesResponse,
} from "../models/active-instances-response.js";
import { errorResponseSchema, type ErrorResponse } from "../models/error-response.js";
import { httpValidationErrorSchema, type HttpValidationError } from "../models/http-validation-error.js";
import {
  stopInstancesRequestInternalSchema,
  type StopInstancesRequest,
} from "../models/stop-instances-request.js";
import {
  stopInstancesResponseSchema,
  type StopInstancesResponse,
} from "../models/stop-instances-response.js";
import type { Servers } from "../servers.js";

export class Instances {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;

  constructor(rawClient: RawClient, servers: Servers) {
    this.#rawClient = rawClient;
    this.#servers = servers;
  }

  /**
   * List Instances
   *
   * @remarks
   * List a registry's instances, optionally including recently terminated ones.
   *
   * @returns Successful Response
   *
   * @throws {@link Instances.ListInstancesV2InstanceGetError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link HudError} when no usable response was produced: a connection failure, a timeout,
   * a body that would not decode, a value that would not encode, or a credential that could not be
   * obtained
   */
  listInstancesV2InstanceGet(
    request: Instances.ListInstancesV2InstanceGetRequest,
    options?: RequestOptions,
  ): ApiPromise<ActiveInstancesResponse, Instances.ListInstancesV2InstanceGetError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v2/instance"),
        auth: noneAuth,
        pathParams: [],
        query: [
          { name: "registry_id", value: request.registryId, schema: s.string() },
          {
            name: "include_terminated",
            value: request.includeTerminated,
            schema: s.defaulted(s.boolean(), false),
          },
          { name: "limit", value: request.limit, schema: s.defaulted(s.int(), 50) },
          { name: "offset", value: request.offset, schema: s.defaulted(s.int(), 0) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: activeInstancesResponseSchema },
        errorFactory: Instances.ListInstancesV2InstanceGetError,
      },
      options,
    );
  }

  /**
   * Stop Instances
   *
   * @remarks
   * Stop the given instances of a registry, reporting per-instance results.
   *
   * @returns Successful Response
   *
   * @throws {@link Instances.StopInstancesV2InstanceStopPostError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link HudError} when no usable response was produced: a connection failure, a timeout,
   * a body that would not decode, a value that would not encode, or a credential that could not be
   * obtained
   */
  stopInstancesV2InstanceStopPost(
    request: Instances.StopInstancesV2InstanceStopPostRequest,
    options?: RequestOptions,
  ): ApiPromise<StopInstancesResponse, Instances.StopInstancesV2InstanceStopPostError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v2/instance/stop"),
        auth: noneAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: stopInstancesRequestInternalSchema },
      },
      {
        success: { kind: "json", schema: stopInstancesResponseSchema },
        errorFactory: Instances.StopInstancesV2InstanceStopPostError,
      },
      options,
    );
  }
}

export namespace Instances {
  export type ListInstancesV2InstanceGetRequest = {
    /** Filter instances to this registry */
    registryId: string;
    /** Include recently terminated instances @default false */
    includeTerminated?: boolean;
    /** @default 50 */
    limit?: number;
    /** @default 0 */
    offset?: number;
  };

  export const listInstancesV2InstanceGetRequestSchema: Schema<ListInstancesV2InstanceGetRequest> =
    s.lazySchema(() =>
      s.object<ListInstancesV2InstanceGetRequest>({
        registryId: s.string(),
        includeTerminated: s.defaulted(s.boolean(), false),
        limit: s.defaulted(s.int().check(s.gte(1), s.lte(200)), 50),
        offset: s.defaulted(s.int().check(s.gte(0), s.lte(2147483647)), 0),
      }),
    );

  export class ListInstancesV2InstanceGetError extends ApiError {
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

    static readonly errors: ErrorDecoders<ListInstancesV2InstanceGetError> = [
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

  export type StopInstancesV2InstanceStopPostRequest = {
    body: StopInstancesRequest;
  };

  export class StopInstancesV2InstanceStopPostError extends ApiError {
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

    static readonly errors: ErrorDecoders<StopInstancesV2InstanceStopPostError> = [
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
