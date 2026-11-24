import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  apiV1ReviewsCancelResponseSchema,
  type ApiV1ReviewsCancelResponse,
} from "../models/api-v1-reviews-cancel-response.js";
import {
  apiV1ReviewsRequestInternalSchema,
  type ApiV1ReviewsRequest,
} from "../models/api-v1-reviews-request.js";
import { apiV1ReviewsResponseSchema, type ApiV1ReviewsResponse } from "../models/api-v1-reviews-response.js";
import {
  apiV1ReviewsResponse1Schema,
  type ApiV1ReviewsResponse1,
} from "../models/api-v1-reviews-response1.js";
import {
  statusDeliverdDevReviewsApiSchema,
  type StatusDeliverdDevReviewsApi,
} from "../models/status-deliverd-dev-reviews-api.js";
import type { Servers } from "../servers.js";

export class Reviews {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * List reviews
   *
   * @returns Newest first
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link DeliverdError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getApiV1Reviews(
    request: Reviews.GetApiV1ReviewsRequest = {},
    options?: RequestOptions,
  ): ApiPromise<ApiV1ReviewsResponse1, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/reviews"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [
          { name: "limit", value: request.limit, schema: s.optional(s.int()) },
          { name: "cursor", value: request.cursor, schema: s.optional(s.string()) },
          {
            name: "status",
            value: request.status,
            schema: s.optional(s.lazy(() => statusDeliverdDevReviewsApiSchema)),
          },
          { name: "externalId", value: request.externalId, schema: s.optional(s.string()) },
          { name: "reportId", value: request.reportId, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: apiV1ReviewsResponse1Schema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * The review, with every verdict returned so far
   *
   * @returns The review
   *
   * @throws {@link Reviews.GetApiV1ReviewsByIdError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link DeliverdError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getApiV1ReviewsById(
    request: Reviews.GetApiV1ReviewsByIdRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV1ReviewsResponse, Reviews.GetApiV1ReviewsByIdError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/reviews/{id}"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: apiV1ReviewsResponseSchema },
        errorFactory: Reviews.GetApiV1ReviewsByIdError,
      },
      options,
    );
  }

  /**
   * Ask people to read something and say whether it is right
   *
   * @remarks
   * Creates a review and returns its page. The verdict is a person's: read it by polling GET
   * /api/v1/reviews/{id}, by the organisation's webhooks (review.approved,
   * review.changes_requested), or by the MCP tool get_review. There is no endpoint that records a
   * verdict — a key is not a person. Reviewers are named by email or id and must be active members
   * or guests who can already open the report; anyone else is refused. The requester cannot review
   * their own request.
   *
   * @returns The review, pending
   *
   * @throws {@link Reviews.PostApiV1ReviewsError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link DeliverdError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  postApiV1Reviews(
    request: Reviews.PostApiV1ReviewsRequest = {},
    options?: RequestOptions,
  ): ApiPromise<ApiV1ReviewsResponse, Reviews.PostApiV1ReviewsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v1/reviews"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => apiV1ReviewsRequestInternalSchema)),
        },
      },
      {
        success: { kind: "json", schema: apiV1ReviewsResponseSchema },
        errorFactory: Reviews.PostApiV1ReviewsError,
      },
      options,
    );
  }

  /**
   * Withdraw a pending review
   *
   * @returns The review, cancelled
   *
   * @throws {@link Reviews.PostApiV1ReviewsByIdCancelError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link DeliverdError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  postApiV1ReviewsByIdCancel(
    request: Reviews.PostApiV1ReviewsByIdCancelRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV1ReviewsCancelResponse, Reviews.PostApiV1ReviewsByIdCancelError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v1/reviews/{id}/cancel"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: apiV1ReviewsCancelResponseSchema },
        errorFactory: Reviews.PostApiV1ReviewsByIdCancelError,
      },
      options,
    );
  }
}

export namespace Reviews {
  export type GetApiV1ReviewsRequest = {
    limit?: number;
    /** nextCursor from a previous response. One we did not issue is refused. */
    cursor?: string;
    status?: StatusDeliverdDevReviewsApi;
    externalId?: string;
    reportId?: string;
  };

  export type GetApiV1ReviewsByIdRequest = {
    id: string;
  };

  export class GetApiV1ReviewsByIdError extends ApiError {
    declare readonly payload: Declared<"error404", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<GetApiV1ReviewsByIdError> = [
      { on: 404, kind: "error404", decode: { kind: "empty" } },
    ];
  }

  export type PostApiV1ReviewsRequest = {
    body?: ApiV1ReviewsRequest;
  };

  export class PostApiV1ReviewsError extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<PostApiV1ReviewsError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
    ];
  }

  export type PostApiV1ReviewsByIdCancelRequest = {
    id: string;
  };

  export class PostApiV1ReviewsByIdCancelError extends ApiError {
    declare readonly payload: Declared<"error403", undefined> | Declared<"error409", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<PostApiV1ReviewsByIdCancelError> = [
      { on: 403, kind: "error403", decode: { kind: "empty" } },
      { on: 409, kind: "error409", decode: { kind: "empty" } },
    ];
  }
}
