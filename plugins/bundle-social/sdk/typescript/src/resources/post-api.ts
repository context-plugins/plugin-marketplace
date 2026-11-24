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
  apiV1PostReconnectSocialAccountCandidatesResponseSchema,
  type ApiV1PostReconnectSocialAccountCandidatesResponse,
} from "../models/api-v1-post-reconnect-social-account-candidates-response.js";
import {
  apiV1PostReconnectSocialAccountCandidates400Error1Schema,
  type ApiV1PostReconnectSocialAccountCandidates400Error1,
} from "../models/api-v1-post-reconnect-social-account-candidates400-error1.js";
import {
  apiV1PostReconnectSocialAccountCandidates401Error1Schema,
  type ApiV1PostReconnectSocialAccountCandidates401Error1,
} from "../models/api-v1-post-reconnect-social-account-candidates401-error1.js";
import {
  apiV1PostReconnectSocialAccountCandidates403Error1Schema,
  type ApiV1PostReconnectSocialAccountCandidates403Error1,
} from "../models/api-v1-post-reconnect-social-account-candidates403-error1.js";
import {
  apiV1PostReconnectSocialAccountCandidates404Error1Schema,
  type ApiV1PostReconnectSocialAccountCandidates404Error1,
} from "../models/api-v1-post-reconnect-social-account-candidates404-error1.js";
import {
  apiV1PostReconnectSocialAccountCandidates429Error1Schema,
  type ApiV1PostReconnectSocialAccountCandidates429Error1,
} from "../models/api-v1-post-reconnect-social-account-candidates429-error1.js";
import {
  apiV1PostReconnectSocialAccountCandidates500Error1Schema,
  type ApiV1PostReconnectSocialAccountCandidates500Error1,
} from "../models/api-v1-post-reconnect-social-account-candidates500-error1.js";
import {
  apiV1PostReconnectSocialAccountCandidates502Error1Schema,
  type ApiV1PostReconnectSocialAccountCandidates502Error1,
} from "../models/api-v1-post-reconnect-social-account-candidates502-error1.js";
import {
  apiV1PostReconnectSocialAccountCandidates503Error1Schema,
  type ApiV1PostReconnectSocialAccountCandidates503Error1,
} from "../models/api-v1-post-reconnect-social-account-candidates503-error1.js";
import {
  apiV1PostReconnectSocialAccountCandidates504Error1Schema,
  type ApiV1PostReconnectSocialAccountCandidates504Error1,
} from "../models/api-v1-post-reconnect-social-account-candidates504-error1.js";
import {
  apiV1PostReconnectSocialAccountRequestSchema,
  type ApiV1PostReconnectSocialAccountRequest,
} from "../models/api-v1-post-reconnect-social-account-request.js";
import {
  apiV1PostReconnectSocialAccountResponseSchema,
  type ApiV1PostReconnectSocialAccountResponse,
} from "../models/api-v1-post-reconnect-social-account-response.js";
import {
  apiV1PostReconnectSocialAccount400Error1Schema,
  type ApiV1PostReconnectSocialAccount400Error1,
} from "../models/api-v1-post-reconnect-social-account400-error1.js";
import {
  apiV1PostReconnectSocialAccount401Error1Schema,
  type ApiV1PostReconnectSocialAccount401Error1,
} from "../models/api-v1-post-reconnect-social-account401-error1.js";
import {
  apiV1PostReconnectSocialAccount403Error1Schema,
  type ApiV1PostReconnectSocialAccount403Error1,
} from "../models/api-v1-post-reconnect-social-account403-error1.js";
import {
  apiV1PostReconnectSocialAccount404Error1Schema,
  type ApiV1PostReconnectSocialAccount404Error1,
} from "../models/api-v1-post-reconnect-social-account404-error1.js";
import {
  apiV1PostReconnectSocialAccount429Error1Schema,
  type ApiV1PostReconnectSocialAccount429Error1,
} from "../models/api-v1-post-reconnect-social-account429-error1.js";
import {
  apiV1PostReconnectSocialAccount500Error1Schema,
  type ApiV1PostReconnectSocialAccount500Error1,
} from "../models/api-v1-post-reconnect-social-account500-error1.js";
import {
  apiV1PostReconnectSocialAccount502Error1Schema,
  type ApiV1PostReconnectSocialAccount502Error1,
} from "../models/api-v1-post-reconnect-social-account502-error1.js";
import {
  apiV1PostReconnectSocialAccount503Error1Schema,
  type ApiV1PostReconnectSocialAccount503Error1,
} from "../models/api-v1-post-reconnect-social-account503-error1.js";
import {
  apiV1PostReconnectSocialAccount504Error1Schema,
  type ApiV1PostReconnectSocialAccount504Error1,
} from "../models/api-v1-post-reconnect-social-account504-error1.js";
import {
  apiV1PostReferenceKeyResponseInternalSchema,
  type ApiV1PostReferenceKeyResponse,
} from "../models/api-v1-post-reference-key-response.js";
import {
  apiV1PostReferenceKey400Error1Schema,
  type ApiV1PostReferenceKey400Error1,
} from "../models/api-v1-post-reference-key400-error1.js";
import {
  apiV1PostReferenceKey401Error1Schema,
  type ApiV1PostReferenceKey401Error1,
} from "../models/api-v1-post-reference-key401-error1.js";
import {
  apiV1PostReferenceKey403Error1Schema,
  type ApiV1PostReferenceKey403Error1,
} from "../models/api-v1-post-reference-key403-error1.js";
import {
  apiV1PostReferenceKey404Error1Schema,
  type ApiV1PostReferenceKey404Error1,
} from "../models/api-v1-post-reference-key404-error1.js";
import {
  apiV1PostReferenceKey429Error1Schema,
  type ApiV1PostReferenceKey429Error1,
} from "../models/api-v1-post-reference-key429-error1.js";
import {
  apiV1PostReferenceKey500Error1Schema,
  type ApiV1PostReferenceKey500Error1,
} from "../models/api-v1-post-reference-key500-error1.js";
import {
  apiV1PostReferenceKey502Error1Schema,
  type ApiV1PostReferenceKey502Error1,
} from "../models/api-v1-post-reference-key502-error1.js";
import {
  apiV1PostReferenceKey503Error1Schema,
  type ApiV1PostReferenceKey503Error1,
} from "../models/api-v1-post-reference-key503-error1.js";
import {
  apiV1PostReferenceKey504Error1Schema,
  type ApiV1PostReferenceKey504Error1,
} from "../models/api-v1-post-reference-key504-error1.js";
import { apiV1PostRequestInternalSchema, type ApiV1PostRequest } from "../models/api-v1-post-request.js";
import { apiV1PostRequest1InternalSchema, type ApiV1PostRequest1 } from "../models/api-v1-post-request1.js";
import { apiV1PostResponseInternalSchema, type ApiV1PostResponse } from "../models/api-v1-post-response.js";
import {
  apiV1PostResponse1InternalSchema,
  type ApiV1PostResponse1,
} from "../models/api-v1-post-response1.js";
import {
  apiV1PostResponse2InternalSchema,
  type ApiV1PostResponse2,
} from "../models/api-v1-post-response2.js";
import {
  apiV1PostResponse3InternalSchema,
  type ApiV1PostResponse3,
} from "../models/api-v1-post-response3.js";
import {
  apiV1PostRetryResponseInternalSchema,
  type ApiV1PostRetryResponse,
} from "../models/api-v1-post-retry-response.js";
import {
  apiV1PostRetry400Error1Schema,
  type ApiV1PostRetry400Error1,
} from "../models/api-v1-post-retry400-error1.js";
import {
  apiV1PostRetry401Error1Schema,
  type ApiV1PostRetry401Error1,
} from "../models/api-v1-post-retry401-error1.js";
import {
  apiV1PostRetry403Error1Schema,
  type ApiV1PostRetry403Error1,
} from "../models/api-v1-post-retry403-error1.js";
import {
  apiV1PostRetry404Error1Schema,
  type ApiV1PostRetry404Error1,
} from "../models/api-v1-post-retry404-error1.js";
import {
  apiV1PostRetry429Error1Schema,
  type ApiV1PostRetry429Error1,
} from "../models/api-v1-post-retry429-error1.js";
import {
  apiV1PostRetry500Error1Schema,
  type ApiV1PostRetry500Error1,
} from "../models/api-v1-post-retry500-error1.js";
import {
  apiV1PostRetry502Error1Schema,
  type ApiV1PostRetry502Error1,
} from "../models/api-v1-post-retry502-error1.js";
import {
  apiV1PostRetry503Error1Schema,
  type ApiV1PostRetry503Error1,
} from "../models/api-v1-post-retry503-error1.js";
import {
  apiV1PostRetry504Error1Schema,
  type ApiV1PostRetry504Error1,
} from "../models/api-v1-post-retry504-error1.js";
import { apiV1Post400Error1Schema, type ApiV1Post400Error1 } from "../models/api-v1-post400-error1.js";
import { apiV1Post401Error1Schema, type ApiV1Post401Error1 } from "../models/api-v1-post401-error1.js";
import { apiV1Post403Error1Schema, type ApiV1Post403Error1 } from "../models/api-v1-post403-error1.js";
import { apiV1Post404Error1Schema, type ApiV1Post404Error1 } from "../models/api-v1-post404-error1.js";
import { apiV1Post409Error1Schema, type ApiV1Post409Error1 } from "../models/api-v1-post409-error1.js";
import { apiV1Post429Error1Schema, type ApiV1Post429Error1 } from "../models/api-v1-post429-error1.js";
import { apiV1Post500Error1Schema, type ApiV1Post500Error1 } from "../models/api-v1-post500-error1.js";
import { apiV1Post502Error1Schema, type ApiV1Post502Error1 } from "../models/api-v1-post502-error1.js";
import { apiV1Post503Error1Schema, type ApiV1Post503Error1 } from "../models/api-v1-post503-error1.js";
import { apiV1Post504Error1Schema, type ApiV1Post504Error1 } from "../models/api-v1-post504-error1.js";
import {
  orderByBundleSocialPostApiSchema,
  type OrderByBundleSocialPostApi,
} from "../models/order-by-bundle-social-post-api.js";
import { orderSchema, type Order } from "../models/order.js";
import {
  platformBundleSocialPostApiSchema,
  type PlatformBundleSocialPostApi,
} from "../models/platform-bundle-social-post-api.js";
import { statusSchema, type Status } from "../models/status.js";
import { typeSchema, type Type } from "../models/type.js";
import type { Servers } from "../servers.js";

export class PostApi {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Create post
   *
   * @remarks
   * Schedule or immediately publish a post to one or more connected social accounts in a single
   * request. Supply shared content plus optional per-platform overrides for captions, media, and
   * platform-specific options.
   *
   * @returns 200
   *
   * @throws {@link PostApi.PostCreateError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link BundleSocialError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  postCreate(
    request: PostApi.PostCreateRequest = {},
    options?: RequestOptions,
  ): ApiPromise<ApiV1PostResponse1, PostApi.PostCreateError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v1/post/"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => apiV1PostRequest1InternalSchema)),
        },
      },
      {
        success: { kind: "json", schema: apiV1PostResponse1InternalSchema },
        errorFactory: PostApi.PostCreateError,
      },
      options,
    );
  }

  /**
   * Delete post
   *
   * @remarks
   * Permanently delete a post from bundle.social. Deleting a scheduled post cancels it; deleting an
   * already-published post does not remove it from the social platform.
   *
   * @returns 200
   *
   * @throws {@link PostApi.PostDeleteError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link BundleSocialError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  postDelete(
    request: PostApi.PostDeleteRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV1PostResponse2, PostApi.PostDeleteError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/api/v1/post/{id}"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: apiV1PostResponse2InternalSchema },
        errorFactory: PostApi.PostDeleteError,
      },
      options,
    );
  }

  /**
   * Get post
   *
   * @remarks
   * Retrieve a single post by ID, including its per-platform status, scheduled time, media, and any
   * publishing errors.
   *
   * @returns 200
   *
   * @throws {@link PostApi.PostGetError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link BundleSocialError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  postGet(
    request: PostApi.PostGetRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV1PostResponse, PostApi.PostGetError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/post/{id}"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: apiV1PostResponseInternalSchema },
        errorFactory: PostApi.PostGetError,
      },
      options,
    );
  }

  /**
   * Get post by reference key
   *
   * @remarks
   * Retrieve a single post using your own reference key instead of the bundle.social post ID.
   * Useful when you store your own identifier on create and want to look the post up later without
   * keeping a mapping table.
   *
   * @returns 200
   *
   * @throws {@link PostApi.PostGetByReferenceKeyError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link BundleSocialError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  postGetByReferenceKey(
    request: PostApi.PostGetByReferenceKeyRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV1PostReferenceKeyResponse, PostApi.PostGetByReferenceKeyError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/post/reference-key/{referenceKey}"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [{ name: "referenceKey", value: request.referenceKey, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: apiV1PostReferenceKeyResponseInternalSchema },
        errorFactory: PostApi.PostGetByReferenceKeyError,
      },
      options,
    );
  }

  /**
   * Get post list
   *
   * @remarks
   * List and filter posts across a team by status, platform, or date range with pagination. Use
   * this to build a content calendar or reconcile your own database with bundle.social.
   *
   * @returns 200
   *
   * @throws {@link PostApi.PostGetListError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link BundleSocialError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  postGetList(
    request: PostApi.PostGetListRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV1PostResponse3, PostApi.PostGetListError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/post/"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [
          { name: "teamId", value: request.teamId, schema: s.string() },
          { name: "status", value: request.status, schema: s.optionalNullable(s.lazy(() => statusSchema)) },
          {
            name: "orderBy",
            value: request.orderBy,
            schema: s.optionalNullable(s.lazy(() => orderByBundleSocialPostApiSchema)),
          },
          { name: "order", value: request.order, schema: s.optionalNullable(s.lazy(() => orderSchema)) },
          { name: "q", value: request.q, schema: s.optionalNullable(s.string()) },
          {
            name: "platforms",
            value: request.platforms,
            schema: s.optionalNullable(s.array(s.lazy(() => platformBundleSocialPostApiSchema))),
          },
          { name: "postDateFrom", value: request.postDateFrom, schema: s.optionalNullable(s.dateTime()) },
          { name: "postDateTo", value: request.postDateTo, schema: s.optionalNullable(s.dateTime()) },
          { name: "offset", value: request.offset, schema: s.defaulted(s.nullable(s.float64()), 0) },
          { name: "limit", value: request.limit, schema: s.defaulted(s.nullable(s.float64()), 10) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: apiV1PostResponse3InternalSchema },
        errorFactory: PostApi.PostGetListError,
      },
      options,
    );
  }

  /**
   * Get posts that can be reconnected to a social account
   *
   * @remarks
   * List posts that lost their link to a social account after a disconnect, and that can be
   * reattached to a newly connected account of the same platform.
   *
   * @returns 200
   *
   * @throws {@link PostApi.PostGetReconnectSocialAccountCandidatesError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link BundleSocialError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  postGetReconnectSocialAccountCandidates(
    request: PostApi.PostGetReconnectSocialAccountCandidatesRequest,
    options?: RequestOptions,
  ): ApiPromise<
    ApiV1PostReconnectSocialAccountCandidatesResponse,
    PostApi.PostGetReconnectSocialAccountCandidatesError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/post/reconnect-social-account/candidates"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [
          { name: "teamId", value: request.teamId, schema: s.string() },
          { name: "type", value: request.type, schema: typeSchema },
          { name: "offset", value: request.offset, schema: s.defaulted(s.nullable(s.float64()), 0) },
          { name: "limit", value: request.limit, schema: s.defaulted(s.nullable(s.float64()), 10) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: apiV1PostReconnectSocialAccountCandidatesResponseSchema },
        errorFactory: PostApi.PostGetReconnectSocialAccountCandidatesError,
      },
      options,
    );
  }

  /**
   * Reconnect social account to matching posts
   *
   * @remarks
   * Reattach a newly connected social account to posts that were orphaned when the previous account
   * was disconnected, so scheduled posts publish instead of failing.
   *
   * @returns 200
   *
   * @throws {@link PostApi.PostReconnectSocialAccountError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link BundleSocialError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  postReconnectSocialAccount(
    request: PostApi.PostReconnectSocialAccountRequest = {},
    options?: RequestOptions,
  ): ApiPromise<ApiV1PostReconnectSocialAccountResponse, PostApi.PostReconnectSocialAccountError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v1/post/reconnect-social-account"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => apiV1PostReconnectSocialAccountRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: apiV1PostReconnectSocialAccountResponseSchema },
        errorFactory: PostApi.PostReconnectSocialAccountError,
      },
      options,
    );
  }

  /**
   * Retry post
   *
   * @remarks
   * Re-attempt publishing a post that failed, for example after a token expired or a platform
   * outage. Fix the underlying cause first, then retry.
   *
   * @returns 200
   *
   * @throws {@link PostApi.PostRetryError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link BundleSocialError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  postRetry(
    request: PostApi.PostRetryRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV1PostRetryResponse, PostApi.PostRetryError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v1/post/{id}/retry"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: apiV1PostRetryResponseInternalSchema },
        errorFactory: PostApi.PostRetryError,
      },
      options,
    );
  }

  /**
   * Update post
   *
   * @remarks
   * Change the content, media, scheduled time, or target platforms of a post that has not published
   * yet. Only the fields you send are modified.
   *
   * @returns 200
   *
   * @throws {@link PostApi.PostUpdateError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link BundleSocialError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  postUpdate(
    request: PostApi.PostUpdateRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV1PostResponse1, PostApi.PostUpdateError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default("/api/v1/post/{id}"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => apiV1PostRequestInternalSchema)),
        },
      },
      {
        success: { kind: "json", schema: apiV1PostResponse1InternalSchema },
        errorFactory: PostApi.PostUpdateError,
      },
      options,
    );
  }
}

export namespace PostApi {
  export type PostCreateRequest = {
    /** Body */
    body?: ApiV1PostRequest1;
  };

  export class PostCreateError extends ApiError {
    declare readonly payload:
      | Declared<"apiV1Post400Error1", ApiV1Post400Error1>
      | Declared<"apiV1Post401Error1", ApiV1Post401Error1>
      | Declared<"apiV1Post403Error1", ApiV1Post403Error1>
      | Declared<"apiV1Post404Error1", ApiV1Post404Error1>
      | Declared<"apiV1Post409Error1", ApiV1Post409Error1>
      | Declared<"apiV1Post429Error1", ApiV1Post429Error1>
      | Declared<"apiV1Post500Error1", ApiV1Post500Error1>
      | Declared<"apiV1Post502Error1", ApiV1Post502Error1>
      | Declared<"apiV1Post503Error1", ApiV1Post503Error1>
      | Declared<"apiV1Post504Error1", ApiV1Post504Error1>
      | Undeclared;

    static readonly errors: ErrorDecoders<PostCreateError> = [
      { on: 400, kind: "apiV1Post400Error1", decode: { kind: "json", schema: apiV1Post400Error1Schema } },
      { on: 401, kind: "apiV1Post401Error1", decode: { kind: "json", schema: apiV1Post401Error1Schema } },
      { on: 403, kind: "apiV1Post403Error1", decode: { kind: "json", schema: apiV1Post403Error1Schema } },
      { on: 404, kind: "apiV1Post404Error1", decode: { kind: "json", schema: apiV1Post404Error1Schema } },
      { on: 409, kind: "apiV1Post409Error1", decode: { kind: "json", schema: apiV1Post409Error1Schema } },
      { on: 429, kind: "apiV1Post429Error1", decode: { kind: "json", schema: apiV1Post429Error1Schema } },
      { on: 500, kind: "apiV1Post500Error1", decode: { kind: "json", schema: apiV1Post500Error1Schema } },
      { on: 502, kind: "apiV1Post502Error1", decode: { kind: "json", schema: apiV1Post502Error1Schema } },
      { on: 503, kind: "apiV1Post503Error1", decode: { kind: "json", schema: apiV1Post503Error1Schema } },
      { on: 504, kind: "apiV1Post504Error1", decode: { kind: "json", schema: apiV1Post504Error1Schema } },
    ];
  }

  export type PostDeleteRequest = {
    id: string;
  };

  export class PostDeleteError extends ApiError {
    declare readonly payload:
      | Declared<"apiV1Post400Error1", ApiV1Post400Error1>
      | Declared<"apiV1Post401Error1", ApiV1Post401Error1>
      | Declared<"apiV1Post403Error1", ApiV1Post403Error1>
      | Declared<"apiV1Post404Error1", ApiV1Post404Error1>
      | Declared<"apiV1Post429Error1", ApiV1Post429Error1>
      | Declared<"apiV1Post500Error1", ApiV1Post500Error1>
      | Declared<"apiV1Post502Error1", ApiV1Post502Error1>
      | Declared<"apiV1Post503Error1", ApiV1Post503Error1>
      | Declared<"apiV1Post504Error1", ApiV1Post504Error1>
      | Undeclared;

    static readonly errors: ErrorDecoders<PostDeleteError> = [
      { on: 400, kind: "apiV1Post400Error1", decode: { kind: "json", schema: apiV1Post400Error1Schema } },
      { on: 401, kind: "apiV1Post401Error1", decode: { kind: "json", schema: apiV1Post401Error1Schema } },
      { on: 403, kind: "apiV1Post403Error1", decode: { kind: "json", schema: apiV1Post403Error1Schema } },
      { on: 404, kind: "apiV1Post404Error1", decode: { kind: "json", schema: apiV1Post404Error1Schema } },
      { on: 429, kind: "apiV1Post429Error1", decode: { kind: "json", schema: apiV1Post429Error1Schema } },
      { on: 500, kind: "apiV1Post500Error1", decode: { kind: "json", schema: apiV1Post500Error1Schema } },
      { on: 502, kind: "apiV1Post502Error1", decode: { kind: "json", schema: apiV1Post502Error1Schema } },
      { on: 503, kind: "apiV1Post503Error1", decode: { kind: "json", schema: apiV1Post503Error1Schema } },
      { on: 504, kind: "apiV1Post504Error1", decode: { kind: "json", schema: apiV1Post504Error1Schema } },
    ];
  }

  export type PostGetRequest = {
    id: string;
  };

  export class PostGetError extends ApiError {
    declare readonly payload:
      | Declared<"apiV1Post400Error1", ApiV1Post400Error1>
      | Declared<"apiV1Post401Error1", ApiV1Post401Error1>
      | Declared<"apiV1Post403Error1", ApiV1Post403Error1>
      | Declared<"apiV1Post404Error1", ApiV1Post404Error1>
      | Declared<"apiV1Post429Error1", ApiV1Post429Error1>
      | Declared<"apiV1Post500Error1", ApiV1Post500Error1>
      | Declared<"apiV1Post502Error1", ApiV1Post502Error1>
      | Declared<"apiV1Post503Error1", ApiV1Post503Error1>
      | Declared<"apiV1Post504Error1", ApiV1Post504Error1>
      | Undeclared;

    static readonly errors: ErrorDecoders<PostGetError> = [
      { on: 400, kind: "apiV1Post400Error1", decode: { kind: "json", schema: apiV1Post400Error1Schema } },
      { on: 401, kind: "apiV1Post401Error1", decode: { kind: "json", schema: apiV1Post401Error1Schema } },
      { on: 403, kind: "apiV1Post403Error1", decode: { kind: "json", schema: apiV1Post403Error1Schema } },
      { on: 404, kind: "apiV1Post404Error1", decode: { kind: "json", schema: apiV1Post404Error1Schema } },
      { on: 429, kind: "apiV1Post429Error1", decode: { kind: "json", schema: apiV1Post429Error1Schema } },
      { on: 500, kind: "apiV1Post500Error1", decode: { kind: "json", schema: apiV1Post500Error1Schema } },
      { on: 502, kind: "apiV1Post502Error1", decode: { kind: "json", schema: apiV1Post502Error1Schema } },
      { on: 503, kind: "apiV1Post503Error1", decode: { kind: "json", schema: apiV1Post503Error1Schema } },
      { on: 504, kind: "apiV1Post504Error1", decode: { kind: "json", schema: apiV1Post504Error1Schema } },
    ];
  }

  export type PostGetByReferenceKeyRequest = {
    referenceKey: string;
  };

  export const postGetByReferenceKeyRequestSchema: Schema<PostGetByReferenceKeyRequest> = s.lazySchema(() =>
    s.object<PostGetByReferenceKeyRequest>({
      referenceKey: s.string().check(s.minLength(1), s.maxLength(128)),
    }),
  );

  export class PostGetByReferenceKeyError extends ApiError {
    declare readonly payload:
      | Declared<"apiV1PostReferenceKey400Error1", ApiV1PostReferenceKey400Error1>
      | Declared<"apiV1PostReferenceKey401Error1", ApiV1PostReferenceKey401Error1>
      | Declared<"apiV1PostReferenceKey403Error1", ApiV1PostReferenceKey403Error1>
      | Declared<"apiV1PostReferenceKey404Error1", ApiV1PostReferenceKey404Error1>
      | Declared<"apiV1PostReferenceKey429Error1", ApiV1PostReferenceKey429Error1>
      | Declared<"apiV1PostReferenceKey500Error1", ApiV1PostReferenceKey500Error1>
      | Declared<"apiV1PostReferenceKey502Error1", ApiV1PostReferenceKey502Error1>
      | Declared<"apiV1PostReferenceKey503Error1", ApiV1PostReferenceKey503Error1>
      | Declared<"apiV1PostReferenceKey504Error1", ApiV1PostReferenceKey504Error1>
      | Undeclared;

    static readonly errors: ErrorDecoders<PostGetByReferenceKeyError> = [
      {
        on: 400,
        kind: "apiV1PostReferenceKey400Error1",
        decode: { kind: "json", schema: apiV1PostReferenceKey400Error1Schema },
      },
      {
        on: 401,
        kind: "apiV1PostReferenceKey401Error1",
        decode: { kind: "json", schema: apiV1PostReferenceKey401Error1Schema },
      },
      {
        on: 403,
        kind: "apiV1PostReferenceKey403Error1",
        decode: { kind: "json", schema: apiV1PostReferenceKey403Error1Schema },
      },
      {
        on: 404,
        kind: "apiV1PostReferenceKey404Error1",
        decode: { kind: "json", schema: apiV1PostReferenceKey404Error1Schema },
      },
      {
        on: 429,
        kind: "apiV1PostReferenceKey429Error1",
        decode: { kind: "json", schema: apiV1PostReferenceKey429Error1Schema },
      },
      {
        on: 500,
        kind: "apiV1PostReferenceKey500Error1",
        decode: { kind: "json", schema: apiV1PostReferenceKey500Error1Schema },
      },
      {
        on: 502,
        kind: "apiV1PostReferenceKey502Error1",
        decode: { kind: "json", schema: apiV1PostReferenceKey502Error1Schema },
      },
      {
        on: 503,
        kind: "apiV1PostReferenceKey503Error1",
        decode: { kind: "json", schema: apiV1PostReferenceKey503Error1Schema },
      },
      {
        on: 504,
        kind: "apiV1PostReferenceKey504Error1",
        decode: { kind: "json", schema: apiV1PostReferenceKey504Error1Schema },
      },
    ];
  }

  export type PostGetListRequest = {
    teamId: string;
    status?: Status | null;
    orderBy?: OrderByBundleSocialPostApi | null;
    order?: Order | null;
    q?: string | null;
    platforms?: PlatformBundleSocialPostApi[] | null;
    postDateFrom?: Date | null;
    postDateTo?: Date | null;
    /** @default 0 */
    offset?: number | null;
    /** @default 10 */
    limit?: number | null;
  };

  export class PostGetListError extends ApiError {
    declare readonly payload:
      | Declared<"apiV1Post400Error1", ApiV1Post400Error1>
      | Declared<"apiV1Post401Error1", ApiV1Post401Error1>
      | Declared<"apiV1Post403Error1", ApiV1Post403Error1>
      | Declared<"apiV1Post404Error1", ApiV1Post404Error1>
      | Declared<"apiV1Post429Error1", ApiV1Post429Error1>
      | Declared<"apiV1Post500Error1", ApiV1Post500Error1>
      | Declared<"apiV1Post502Error1", ApiV1Post502Error1>
      | Declared<"apiV1Post503Error1", ApiV1Post503Error1>
      | Declared<"apiV1Post504Error1", ApiV1Post504Error1>
      | Undeclared;

    static readonly errors: ErrorDecoders<PostGetListError> = [
      { on: 400, kind: "apiV1Post400Error1", decode: { kind: "json", schema: apiV1Post400Error1Schema } },
      { on: 401, kind: "apiV1Post401Error1", decode: { kind: "json", schema: apiV1Post401Error1Schema } },
      { on: 403, kind: "apiV1Post403Error1", decode: { kind: "json", schema: apiV1Post403Error1Schema } },
      { on: 404, kind: "apiV1Post404Error1", decode: { kind: "json", schema: apiV1Post404Error1Schema } },
      { on: 429, kind: "apiV1Post429Error1", decode: { kind: "json", schema: apiV1Post429Error1Schema } },
      { on: 500, kind: "apiV1Post500Error1", decode: { kind: "json", schema: apiV1Post500Error1Schema } },
      { on: 502, kind: "apiV1Post502Error1", decode: { kind: "json", schema: apiV1Post502Error1Schema } },
      { on: 503, kind: "apiV1Post503Error1", decode: { kind: "json", schema: apiV1Post503Error1Schema } },
      { on: 504, kind: "apiV1Post504Error1", decode: { kind: "json", schema: apiV1Post504Error1Schema } },
    ];
  }

  export type PostGetReconnectSocialAccountCandidatesRequest = {
    teamId: string;
    type: Type;
    /** @default 0 */
    offset?: number | null;
    /** @default 10 */
    limit?: number | null;
  };

  export class PostGetReconnectSocialAccountCandidatesError extends ApiError {
    declare readonly payload:
      | Declared<
          "apiV1PostReconnectSocialAccountCandidates400Error1",
          ApiV1PostReconnectSocialAccountCandidates400Error1
        >
      | Declared<
          "apiV1PostReconnectSocialAccountCandidates401Error1",
          ApiV1PostReconnectSocialAccountCandidates401Error1
        >
      | Declared<
          "apiV1PostReconnectSocialAccountCandidates403Error1",
          ApiV1PostReconnectSocialAccountCandidates403Error1
        >
      | Declared<
          "apiV1PostReconnectSocialAccountCandidates404Error1",
          ApiV1PostReconnectSocialAccountCandidates404Error1
        >
      | Declared<
          "apiV1PostReconnectSocialAccountCandidates429Error1",
          ApiV1PostReconnectSocialAccountCandidates429Error1
        >
      | Declared<
          "apiV1PostReconnectSocialAccountCandidates500Error1",
          ApiV1PostReconnectSocialAccountCandidates500Error1
        >
      | Declared<
          "apiV1PostReconnectSocialAccountCandidates502Error1",
          ApiV1PostReconnectSocialAccountCandidates502Error1
        >
      | Declared<
          "apiV1PostReconnectSocialAccountCandidates503Error1",
          ApiV1PostReconnectSocialAccountCandidates503Error1
        >
      | Declared<
          "apiV1PostReconnectSocialAccountCandidates504Error1",
          ApiV1PostReconnectSocialAccountCandidates504Error1
        >
      | Undeclared;

    static readonly errors: ErrorDecoders<PostGetReconnectSocialAccountCandidatesError> = [
      {
        on: 400,
        kind: "apiV1PostReconnectSocialAccountCandidates400Error1",
        decode: { kind: "json", schema: apiV1PostReconnectSocialAccountCandidates400Error1Schema },
      },
      {
        on: 401,
        kind: "apiV1PostReconnectSocialAccountCandidates401Error1",
        decode: { kind: "json", schema: apiV1PostReconnectSocialAccountCandidates401Error1Schema },
      },
      {
        on: 403,
        kind: "apiV1PostReconnectSocialAccountCandidates403Error1",
        decode: { kind: "json", schema: apiV1PostReconnectSocialAccountCandidates403Error1Schema },
      },
      {
        on: 404,
        kind: "apiV1PostReconnectSocialAccountCandidates404Error1",
        decode: { kind: "json", schema: apiV1PostReconnectSocialAccountCandidates404Error1Schema },
      },
      {
        on: 429,
        kind: "apiV1PostReconnectSocialAccountCandidates429Error1",
        decode: { kind: "json", schema: apiV1PostReconnectSocialAccountCandidates429Error1Schema },
      },
      {
        on: 500,
        kind: "apiV1PostReconnectSocialAccountCandidates500Error1",
        decode: { kind: "json", schema: apiV1PostReconnectSocialAccountCandidates500Error1Schema },
      },
      {
        on: 502,
        kind: "apiV1PostReconnectSocialAccountCandidates502Error1",
        decode: { kind: "json", schema: apiV1PostReconnectSocialAccountCandidates502Error1Schema },
      },
      {
        on: 503,
        kind: "apiV1PostReconnectSocialAccountCandidates503Error1",
        decode: { kind: "json", schema: apiV1PostReconnectSocialAccountCandidates503Error1Schema },
      },
      {
        on: 504,
        kind: "apiV1PostReconnectSocialAccountCandidates504Error1",
        decode: { kind: "json", schema: apiV1PostReconnectSocialAccountCandidates504Error1Schema },
      },
    ];
  }

  export type PostReconnectSocialAccountRequest = {
    /** Body */
    body?: ApiV1PostReconnectSocialAccountRequest;
  };

  export class PostReconnectSocialAccountError extends ApiError {
    declare readonly payload:
      | Declared<"apiV1PostReconnectSocialAccount400Error1", ApiV1PostReconnectSocialAccount400Error1>
      | Declared<"apiV1PostReconnectSocialAccount401Error1", ApiV1PostReconnectSocialAccount401Error1>
      | Declared<"apiV1PostReconnectSocialAccount403Error1", ApiV1PostReconnectSocialAccount403Error1>
      | Declared<"apiV1PostReconnectSocialAccount404Error1", ApiV1PostReconnectSocialAccount404Error1>
      | Declared<"apiV1PostReconnectSocialAccount429Error1", ApiV1PostReconnectSocialAccount429Error1>
      | Declared<"apiV1PostReconnectSocialAccount500Error1", ApiV1PostReconnectSocialAccount500Error1>
      | Declared<"apiV1PostReconnectSocialAccount502Error1", ApiV1PostReconnectSocialAccount502Error1>
      | Declared<"apiV1PostReconnectSocialAccount503Error1", ApiV1PostReconnectSocialAccount503Error1>
      | Declared<"apiV1PostReconnectSocialAccount504Error1", ApiV1PostReconnectSocialAccount504Error1>
      | Undeclared;

    static readonly errors: ErrorDecoders<PostReconnectSocialAccountError> = [
      {
        on: 400,
        kind: "apiV1PostReconnectSocialAccount400Error1",
        decode: { kind: "json", schema: apiV1PostReconnectSocialAccount400Error1Schema },
      },
      {
        on: 401,
        kind: "apiV1PostReconnectSocialAccount401Error1",
        decode: { kind: "json", schema: apiV1PostReconnectSocialAccount401Error1Schema },
      },
      {
        on: 403,
        kind: "apiV1PostReconnectSocialAccount403Error1",
        decode: { kind: "json", schema: apiV1PostReconnectSocialAccount403Error1Schema },
      },
      {
        on: 404,
        kind: "apiV1PostReconnectSocialAccount404Error1",
        decode: { kind: "json", schema: apiV1PostReconnectSocialAccount404Error1Schema },
      },
      {
        on: 429,
        kind: "apiV1PostReconnectSocialAccount429Error1",
        decode: { kind: "json", schema: apiV1PostReconnectSocialAccount429Error1Schema },
      },
      {
        on: 500,
        kind: "apiV1PostReconnectSocialAccount500Error1",
        decode: { kind: "json", schema: apiV1PostReconnectSocialAccount500Error1Schema },
      },
      {
        on: 502,
        kind: "apiV1PostReconnectSocialAccount502Error1",
        decode: { kind: "json", schema: apiV1PostReconnectSocialAccount502Error1Schema },
      },
      {
        on: 503,
        kind: "apiV1PostReconnectSocialAccount503Error1",
        decode: { kind: "json", schema: apiV1PostReconnectSocialAccount503Error1Schema },
      },
      {
        on: 504,
        kind: "apiV1PostReconnectSocialAccount504Error1",
        decode: { kind: "json", schema: apiV1PostReconnectSocialAccount504Error1Schema },
      },
    ];
  }

  export type PostRetryRequest = {
    id: string;
  };

  export class PostRetryError extends ApiError {
    declare readonly payload:
      | Declared<"apiV1PostRetry400Error1", ApiV1PostRetry400Error1>
      | Declared<"apiV1PostRetry401Error1", ApiV1PostRetry401Error1>
      | Declared<"apiV1PostRetry403Error1", ApiV1PostRetry403Error1>
      | Declared<"apiV1PostRetry404Error1", ApiV1PostRetry404Error1>
      | Declared<"apiV1PostRetry429Error1", ApiV1PostRetry429Error1>
      | Declared<"apiV1PostRetry500Error1", ApiV1PostRetry500Error1>
      | Declared<"apiV1PostRetry502Error1", ApiV1PostRetry502Error1>
      | Declared<"apiV1PostRetry503Error1", ApiV1PostRetry503Error1>
      | Declared<"apiV1PostRetry504Error1", ApiV1PostRetry504Error1>
      | Undeclared;

    static readonly errors: ErrorDecoders<PostRetryError> = [
      {
        on: 400,
        kind: "apiV1PostRetry400Error1",
        decode: { kind: "json", schema: apiV1PostRetry400Error1Schema },
      },
      {
        on: 401,
        kind: "apiV1PostRetry401Error1",
        decode: { kind: "json", schema: apiV1PostRetry401Error1Schema },
      },
      {
        on: 403,
        kind: "apiV1PostRetry403Error1",
        decode: { kind: "json", schema: apiV1PostRetry403Error1Schema },
      },
      {
        on: 404,
        kind: "apiV1PostRetry404Error1",
        decode: { kind: "json", schema: apiV1PostRetry404Error1Schema },
      },
      {
        on: 429,
        kind: "apiV1PostRetry429Error1",
        decode: { kind: "json", schema: apiV1PostRetry429Error1Schema },
      },
      {
        on: 500,
        kind: "apiV1PostRetry500Error1",
        decode: { kind: "json", schema: apiV1PostRetry500Error1Schema },
      },
      {
        on: 502,
        kind: "apiV1PostRetry502Error1",
        decode: { kind: "json", schema: apiV1PostRetry502Error1Schema },
      },
      {
        on: 503,
        kind: "apiV1PostRetry503Error1",
        decode: { kind: "json", schema: apiV1PostRetry503Error1Schema },
      },
      {
        on: 504,
        kind: "apiV1PostRetry504Error1",
        decode: { kind: "json", schema: apiV1PostRetry504Error1Schema },
      },
    ];
  }

  export type PostUpdateRequest = {
    id: string;
    /** Body */
    body?: ApiV1PostRequest;
  };

  export class PostUpdateError extends ApiError {
    declare readonly payload:
      | Declared<"apiV1Post400Error1", ApiV1Post400Error1>
      | Declared<"apiV1Post401Error1", ApiV1Post401Error1>
      | Declared<"apiV1Post403Error1", ApiV1Post403Error1>
      | Declared<"apiV1Post404Error1", ApiV1Post404Error1>
      | Declared<"apiV1Post409Error1", ApiV1Post409Error1>
      | Declared<"apiV1Post429Error1", ApiV1Post429Error1>
      | Declared<"apiV1Post500Error1", ApiV1Post500Error1>
      | Declared<"apiV1Post502Error1", ApiV1Post502Error1>
      | Declared<"apiV1Post503Error1", ApiV1Post503Error1>
      | Declared<"apiV1Post504Error1", ApiV1Post504Error1>
      | Undeclared;

    static readonly errors: ErrorDecoders<PostUpdateError> = [
      { on: 400, kind: "apiV1Post400Error1", decode: { kind: "json", schema: apiV1Post400Error1Schema } },
      { on: 401, kind: "apiV1Post401Error1", decode: { kind: "json", schema: apiV1Post401Error1Schema } },
      { on: 403, kind: "apiV1Post403Error1", decode: { kind: "json", schema: apiV1Post403Error1Schema } },
      { on: 404, kind: "apiV1Post404Error1", decode: { kind: "json", schema: apiV1Post404Error1Schema } },
      { on: 409, kind: "apiV1Post409Error1", decode: { kind: "json", schema: apiV1Post409Error1Schema } },
      { on: 429, kind: "apiV1Post429Error1", decode: { kind: "json", schema: apiV1Post429Error1Schema } },
      { on: 500, kind: "apiV1Post500Error1", decode: { kind: "json", schema: apiV1Post500Error1Schema } },
      { on: 502, kind: "apiV1Post502Error1", decode: { kind: "json", schema: apiV1Post502Error1Schema } },
      { on: 503, kind: "apiV1Post503Error1", decode: { kind: "json", schema: apiV1Post503Error1Schema } },
      { on: 504, kind: "apiV1Post504Error1", decode: { kind: "json", schema: apiV1Post504Error1Schema } },
    ];
  }
}
