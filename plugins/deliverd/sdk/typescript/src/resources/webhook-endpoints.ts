import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  apiV1WebhookEndpointsRequestInternalSchema,
  type ApiV1WebhookEndpointsRequest,
} from "../models/api-v1-webhook-endpoints-request.js";
import {
  apiV1WebhookEndpointsRequest1InternalSchema,
  type ApiV1WebhookEndpointsRequest1,
} from "../models/api-v1-webhook-endpoints-request1.js";
import {
  apiV1WebhookEndpointsResponseSchema,
  type ApiV1WebhookEndpointsResponse,
} from "../models/api-v1-webhook-endpoints-response.js";
import {
  apiV1WebhookEndpointsResponse1Schema,
  type ApiV1WebhookEndpointsResponse1,
} from "../models/api-v1-webhook-endpoints-response1.js";
import {
  apiV1WebhookEndpointsResponse2Schema,
  type ApiV1WebhookEndpointsResponse2,
} from "../models/api-v1-webhook-endpoints-response2.js";
import {
  apiV1WebhookEndpointsTestRequestSchema,
  type ApiV1WebhookEndpointsTestRequest,
} from "../models/api-v1-webhook-endpoints-test-request.js";
import {
  apiV1WebhookEndpointsTestResponseSchema,
  type ApiV1WebhookEndpointsTestResponse,
} from "../models/api-v1-webhook-endpoints-test-response.js";
import {
  apiV1WebhookEndpointsTest400Error1Schema,
  type ApiV1WebhookEndpointsTest400Error1,
} from "../models/api-v1-webhook-endpoints-test400-error1.js";
import {
  apiV1WebhookEndpointsTest403Error1Schema,
  type ApiV1WebhookEndpointsTest403Error1,
} from "../models/api-v1-webhook-endpoints-test403-error1.js";
import {
  apiV1WebhookEndpointsTest404Error1Schema,
  type ApiV1WebhookEndpointsTest404Error1,
} from "../models/api-v1-webhook-endpoints-test404-error1.js";
import {
  apiV1WebhookEndpoints400Error1Schema,
  type ApiV1WebhookEndpoints400Error1,
} from "../models/api-v1-webhook-endpoints400-error1.js";
import {
  apiV1WebhookEndpoints403Error1Schema,
  type ApiV1WebhookEndpoints403Error1,
} from "../models/api-v1-webhook-endpoints403-error1.js";
import {
  apiV1WebhookEndpoints404Error1Schema,
  type ApiV1WebhookEndpoints404Error1,
} from "../models/api-v1-webhook-endpoints404-error1.js";
import type { Servers } from "../servers.js";

export class WebhookEndpoints {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Remove a webhook endpoint
   *
   * @remarks
   * Its delivery log goes with it. `PATCH` with `{"enabled": false}` stops deliveries and keeps
   * both.
   *
   * @returns Removed
   *
   * @throws {@link WebhookEndpoints.DeleteApiV1WebhookEndpointsByIdError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link DeliverdError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteApiV1WebhookEndpointsById(
    request: WebhookEndpoints.DeleteApiV1WebhookEndpointsByIdRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, WebhookEndpoints.DeleteApiV1WebhookEndpointsByIdError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/api/v1/webhook-endpoints/{id}"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: WebhookEndpoints.DeleteApiV1WebhookEndpointsByIdError,
      },
      options,
    );
  }

  /**
   * List webhook endpoints
   *
   * @remarks
   * The organisation's endpoints, newest first, with their delivery health. Never their signing
   * secrets — those are returned once, when an endpoint is created. Owners and administrators only;
   * an agent key is refused.
   *
   * @returns Endpoints, newest first
   *
   * @throws {@link WebhookEndpoints.GetApiV1WebhookEndpointsError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link DeliverdError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getApiV1WebhookEndpoints(
    request: WebhookEndpoints.GetApiV1WebhookEndpointsRequest = {},
    options?: RequestOptions,
  ): ApiPromise<ApiV1WebhookEndpointsResponse, WebhookEndpoints.GetApiV1WebhookEndpointsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/webhook-endpoints"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [
          { name: "limit", value: request.limit, schema: s.optional(s.int()) },
          { name: "cursor", value: request.cursor, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: apiV1WebhookEndpointsResponseSchema },
        errorFactory: WebhookEndpoints.GetApiV1WebhookEndpointsError,
      },
      options,
    );
  }

  /**
   * One webhook endpoint
   *
   * @remarks
   * With its delivery health. Never its signing secret.
   *
   * @returns The endpoint
   *
   * @throws {@link WebhookEndpoints.GetApiV1WebhookEndpointsByIdError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link DeliverdError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getApiV1WebhookEndpointsById(
    request: WebhookEndpoints.GetApiV1WebhookEndpointsByIdRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV1WebhookEndpointsResponse2, WebhookEndpoints.GetApiV1WebhookEndpointsByIdError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/webhook-endpoints/{id}"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: apiV1WebhookEndpointsResponse2Schema },
        errorFactory: WebhookEndpoints.GetApiV1WebhookEndpointsByIdError,
      },
      options,
    );
  }

  /**
   * Change a webhook endpoint, or turn it off and on
   *
   * @remarks
   * Only the fields sent change; at least one is required. Turning an endpoint back on clears its
   * run of failures, as the console's switch does. The signing secret cannot be changed: delete the
   * endpoint and add it again for a new one.
   *
   * @returns Changed
   *
   * @throws {@link WebhookEndpoints.PatchApiV1WebhookEndpointsByIdError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link DeliverdError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  patchApiV1WebhookEndpointsById(
    request: WebhookEndpoints.PatchApiV1WebhookEndpointsByIdRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV1WebhookEndpointsResponse2, WebhookEndpoints.PatchApiV1WebhookEndpointsByIdError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default("/api/v1/webhook-endpoints/{id}"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => apiV1WebhookEndpointsRequest1InternalSchema)),
        },
      },
      {
        success: { kind: "json", schema: apiV1WebhookEndpointsResponse2Schema },
        errorFactory: WebhookEndpoints.PatchApiV1WebhookEndpointsByIdError,
      },
      options,
    );
  }

  /**
   * Add a webhook endpoint
   *
   * @remarks
   * Every event the endpoint subscribes to then arrives as a signed POST. `events` empty or absent
   * means every event, including ones added later, except the opt-in ones (the gate.* lifecycle,
   * task.blocked, side_task.completed, context.changed, audit.event), which arrive only when named.
   *
   * The response carries **`secret`, on this response only**. No other call returns it and it
   * cannot be retrieved afterwards; delete the endpoint and add it again if it is lost. A retry
   * carrying the same `Idempotency-Key` gets this same response back.
   *
   * @returns Added. Keep `secret`: it is not shown again.
   *
   * @throws {@link WebhookEndpoints.PostApiV1WebhookEndpointsError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link DeliverdError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  postApiV1WebhookEndpoints(
    request: WebhookEndpoints.PostApiV1WebhookEndpointsRequest = {},
    options?: RequestOptions,
  ): ApiPromise<ApiV1WebhookEndpointsResponse1, WebhookEndpoints.PostApiV1WebhookEndpointsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v1/webhook-endpoints"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => apiV1WebhookEndpointsRequestInternalSchema)),
        },
      },
      {
        success: { kind: "json", schema: apiV1WebhookEndpointsResponse1Schema },
        errorFactory: WebhookEndpoints.PostApiV1WebhookEndpointsError,
      },
      options,
    );
  }

  /**
   * Send a webhook endpoint one test event
   *
   * @remarks
   * Posts the event now, with the same signature and headers as a real delivery, `"test": true`
   * beside `event` and obviously fake ids in `data`. One shot: never retried, and never counted
   * toward the failures that switch an endpoint off. `delivered: false` is an answer about the
   * endpoint, not a failure of this call. The body is optional.
   *
   * @returns What the endpoint answered
   *
   * @throws {@link WebhookEndpoints.PostApiV1WebhookEndpointsByIdTestError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link DeliverdError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  postApiV1WebhookEndpointsByIdTest(
    request: WebhookEndpoints.PostApiV1WebhookEndpointsByIdTestRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV1WebhookEndpointsTestResponse, WebhookEndpoints.PostApiV1WebhookEndpointsByIdTestError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v1/webhook-endpoints/{id}/test"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => apiV1WebhookEndpointsTestRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: apiV1WebhookEndpointsTestResponseSchema },
        errorFactory: WebhookEndpoints.PostApiV1WebhookEndpointsByIdTestError,
      },
      options,
    );
  }
}

export namespace WebhookEndpoints {
  export type DeleteApiV1WebhookEndpointsByIdRequest = {
    /** The endpoint */
    id: string;
  };

  export class DeleteApiV1WebhookEndpointsByIdError extends ApiError {
    declare readonly payload:
      | Declared<"apiV1WebhookEndpoints403Error1", ApiV1WebhookEndpoints403Error1>
      | Declared<"apiV1WebhookEndpoints404Error1", ApiV1WebhookEndpoints404Error1>
      | Undeclared;

    static readonly errors: ErrorDecoders<DeleteApiV1WebhookEndpointsByIdError> = [
      {
        on: 403,
        kind: "apiV1WebhookEndpoints403Error1",
        decode: { kind: "json", schema: apiV1WebhookEndpoints403Error1Schema },
      },
      {
        on: 404,
        kind: "apiV1WebhookEndpoints404Error1",
        decode: { kind: "json", schema: apiV1WebhookEndpoints404Error1Schema },
      },
    ];
  }

  export type GetApiV1WebhookEndpointsRequest = {
    /** Rows per page. Above the maximum you get the maximum, not an error. */
    limit?: number;
    /** nextCursor from a previous response. One we did not issue is refused. */
    cursor?: string;
  };

  export const getApiV1WebhookEndpointsRequestSchema: Schema<GetApiV1WebhookEndpointsRequest> = s.lazySchema(
    () =>
      s.object<GetApiV1WebhookEndpointsRequest>({
        limit: s.optional(s.int().check(s.gte(1), s.lte(200))),
        cursor: s.optional(s.string()),
      }),
  );

  export class GetApiV1WebhookEndpointsError extends ApiError {
    declare readonly payload:
      | Declared<"apiV1WebhookEndpoints403Error1", ApiV1WebhookEndpoints403Error1>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetApiV1WebhookEndpointsError> = [
      {
        on: 403,
        kind: "apiV1WebhookEndpoints403Error1",
        decode: { kind: "json", schema: apiV1WebhookEndpoints403Error1Schema },
      },
    ];
  }

  export type GetApiV1WebhookEndpointsByIdRequest = {
    /** The endpoint */
    id: string;
  };

  export class GetApiV1WebhookEndpointsByIdError extends ApiError {
    declare readonly payload:
      | Declared<"apiV1WebhookEndpoints403Error1", ApiV1WebhookEndpoints403Error1>
      | Declared<"apiV1WebhookEndpoints404Error1", ApiV1WebhookEndpoints404Error1>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetApiV1WebhookEndpointsByIdError> = [
      {
        on: 403,
        kind: "apiV1WebhookEndpoints403Error1",
        decode: { kind: "json", schema: apiV1WebhookEndpoints403Error1Schema },
      },
      {
        on: 404,
        kind: "apiV1WebhookEndpoints404Error1",
        decode: { kind: "json", schema: apiV1WebhookEndpoints404Error1Schema },
      },
    ];
  }

  export type PatchApiV1WebhookEndpointsByIdRequest = {
    /** The endpoint */
    id: string;
    body?: ApiV1WebhookEndpointsRequest1;
  };

  export class PatchApiV1WebhookEndpointsByIdError extends ApiError {
    declare readonly payload:
      | Declared<"apiV1WebhookEndpoints400Error1", ApiV1WebhookEndpoints400Error1>
      | Declared<"apiV1WebhookEndpoints403Error1", ApiV1WebhookEndpoints403Error1>
      | Declared<"apiV1WebhookEndpoints404Error1", ApiV1WebhookEndpoints404Error1>
      | Undeclared;

    static readonly errors: ErrorDecoders<PatchApiV1WebhookEndpointsByIdError> = [
      {
        on: 400,
        kind: "apiV1WebhookEndpoints400Error1",
        decode: { kind: "json", schema: apiV1WebhookEndpoints400Error1Schema },
      },
      {
        on: 403,
        kind: "apiV1WebhookEndpoints403Error1",
        decode: { kind: "json", schema: apiV1WebhookEndpoints403Error1Schema },
      },
      {
        on: 404,
        kind: "apiV1WebhookEndpoints404Error1",
        decode: { kind: "json", schema: apiV1WebhookEndpoints404Error1Schema },
      },
    ];
  }

  export type PostApiV1WebhookEndpointsRequest = {
    body?: ApiV1WebhookEndpointsRequest;
  };

  export class PostApiV1WebhookEndpointsError extends ApiError {
    declare readonly payload:
      | Declared<"apiV1WebhookEndpoints400Error1", ApiV1WebhookEndpoints400Error1>
      | Declared<"apiV1WebhookEndpoints403Error1", ApiV1WebhookEndpoints403Error1>
      | Undeclared;

    static readonly errors: ErrorDecoders<PostApiV1WebhookEndpointsError> = [
      {
        on: 400,
        kind: "apiV1WebhookEndpoints400Error1",
        decode: { kind: "json", schema: apiV1WebhookEndpoints400Error1Schema },
      },
      {
        on: 403,
        kind: "apiV1WebhookEndpoints403Error1",
        decode: { kind: "json", schema: apiV1WebhookEndpoints403Error1Schema },
      },
    ];
  }

  export type PostApiV1WebhookEndpointsByIdTestRequest = {
    /** The endpoint */
    id: string;
    body?: ApiV1WebhookEndpointsTestRequest;
  };

  export class PostApiV1WebhookEndpointsByIdTestError extends ApiError {
    declare readonly payload:
      | Declared<"apiV1WebhookEndpointsTest400Error1", ApiV1WebhookEndpointsTest400Error1>
      | Declared<"apiV1WebhookEndpointsTest403Error1", ApiV1WebhookEndpointsTest403Error1>
      | Declared<"apiV1WebhookEndpointsTest404Error1", ApiV1WebhookEndpointsTest404Error1>
      | Undeclared;

    static readonly errors: ErrorDecoders<PostApiV1WebhookEndpointsByIdTestError> = [
      {
        on: 400,
        kind: "apiV1WebhookEndpointsTest400Error1",
        decode: { kind: "json", schema: apiV1WebhookEndpointsTest400Error1Schema },
      },
      {
        on: 403,
        kind: "apiV1WebhookEndpointsTest403Error1",
        decode: { kind: "json", schema: apiV1WebhookEndpointsTest403Error1Schema },
      },
      {
        on: 404,
        kind: "apiV1WebhookEndpointsTest404Error1",
        decode: { kind: "json", schema: apiV1WebhookEndpointsTest404Error1Schema },
      },
    ];
  }
}
