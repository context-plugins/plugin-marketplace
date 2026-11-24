import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  apiV1CollectionsCancelResponseSchema,
  type ApiV1CollectionsCancelResponse,
} from "../models/api-v1-collections-cancel-response.js";
import {
  apiV1CollectionsRequestInternalSchema,
  type ApiV1CollectionsRequest,
} from "../models/api-v1-collections-request.js";
import {
  apiV1CollectionsResponseSchema,
  type ApiV1CollectionsResponse,
} from "../models/api-v1-collections-response.js";
import {
  apiV1CollectionsResponse1Schema,
  type ApiV1CollectionsResponse1,
} from "../models/api-v1-collections-response1.js";
import {
  statusDeliverdDevCollectionsApiSchema,
  type StatusDeliverdDevCollectionsApi,
} from "../models/status-deliverd-dev-collections-api.js";
import type { Servers } from "../servers.js";

export class Collections {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * List requests for information
   *
   * @returns Newest first
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link DeliverdError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getApiV1Collections(
    request: Collections.GetApiV1CollectionsRequest = {},
    options?: RequestOptions,
  ): ApiPromise<ApiV1CollectionsResponse1, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/collections"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [
          { name: "limit", value: request.limit, schema: s.optional(s.int()) },
          { name: "cursor", value: request.cursor, schema: s.optional(s.string()) },
          {
            name: "status",
            value: request.status,
            schema: s.optional(s.lazy(() => statusDeliverdDevCollectionsApiSchema)),
          },
          { name: "externalId", value: request.externalId, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: apiV1CollectionsResponse1Schema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * The request, with every submitted reply
   *
   * @returns The request
   *
   * @throws {@link Collections.GetApiV1CollectionsByIdError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link DeliverdError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getApiV1CollectionsById(
    request: Collections.GetApiV1CollectionsByIdRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV1CollectionsResponse, Collections.GetApiV1CollectionsByIdError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/collections/{id}"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: apiV1CollectionsResponseSchema },
        errorFactory: Collections.GetApiV1CollectionsByIdError,
      },
      options,
    );
  }

  /**
   * Ask named people for answers you do not have
   *
   * @remarks
   * Creates a request and returns the page people fill in. The answers are theirs: read them by
   * polling GET /api/v1/collections/{id}, by the organisation's webhooks (collection.completed), or
   * by the MCP tool get_collection. There is no endpoint that submits an answer — a key is not a
   * person. Respondents are named by email or id and must be active members or guests the
   * organisation already knows; anyone else is refused. Answers are checked against the kind of
   * question that asked for them, and a required question blocks submission.
   *
   * @returns The request, pending
   *
   * @throws {@link Collections.PostApiV1CollectionsError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link DeliverdError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  postApiV1Collections(
    request: Collections.PostApiV1CollectionsRequest = {},
    options?: RequestOptions,
  ): ApiPromise<ApiV1CollectionsResponse, Collections.PostApiV1CollectionsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v1/collections"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => apiV1CollectionsRequestInternalSchema)),
        },
      },
      {
        success: { kind: "json", schema: apiV1CollectionsResponseSchema },
        errorFactory: Collections.PostApiV1CollectionsError,
      },
      options,
    );
  }

  /**
   * Withdraw a pending request
   *
   * @returns The request, cancelled
   *
   * @throws {@link Collections.PostApiV1CollectionsByIdCancelError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link DeliverdError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  postApiV1CollectionsByIdCancel(
    request: Collections.PostApiV1CollectionsByIdCancelRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV1CollectionsCancelResponse, Collections.PostApiV1CollectionsByIdCancelError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v1/collections/{id}/cancel"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: apiV1CollectionsCancelResponseSchema },
        errorFactory: Collections.PostApiV1CollectionsByIdCancelError,
      },
      options,
    );
  }
}

export namespace Collections {
  export type GetApiV1CollectionsRequest = {
    limit?: number;
    /** nextCursor from a previous response. One we did not issue is refused. */
    cursor?: string;
    status?: StatusDeliverdDevCollectionsApi;
    externalId?: string;
  };

  export type GetApiV1CollectionsByIdRequest = {
    id: string;
  };

  export class GetApiV1CollectionsByIdError extends ApiError {
    declare readonly payload: Declared<"error404", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<GetApiV1CollectionsByIdError> = [
      { on: 404, kind: "error404", decode: { kind: "empty" } },
    ];
  }

  export type PostApiV1CollectionsRequest = {
    body?: ApiV1CollectionsRequest;
  };

  export class PostApiV1CollectionsError extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<PostApiV1CollectionsError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
    ];
  }

  export type PostApiV1CollectionsByIdCancelRequest = {
    id: string;
  };

  export class PostApiV1CollectionsByIdCancelError extends ApiError {
    declare readonly payload: Declared<"error403", undefined> | Declared<"error409", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<PostApiV1CollectionsByIdCancelError> = [
      { on: 403, kind: "error403", decode: { kind: "empty" } },
      { on: 409, kind: "error409", decode: { kind: "empty" } },
    ];
  }
}
