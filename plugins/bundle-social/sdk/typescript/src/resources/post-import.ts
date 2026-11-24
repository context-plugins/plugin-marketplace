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
  apiV1PostHistoryImportPostsRequestInternalSchema,
  type ApiV1PostHistoryImportPostsRequest,
} from "../models/api-v1-post-history-import-posts-request.js";
import {
  apiV1PostHistoryImportPostsResponseSchema,
  type ApiV1PostHistoryImportPostsResponse,
} from "../models/api-v1-post-history-import-posts-response.js";
import {
  apiV1PostHistoryImportPostsResponse1Schema,
  type ApiV1PostHistoryImportPostsResponse1,
} from "../models/api-v1-post-history-import-posts-response1.js";
import {
  apiV1PostHistoryImportPosts400Error1Schema,
  type ApiV1PostHistoryImportPosts400Error1,
} from "../models/api-v1-post-history-import-posts400-error1.js";
import {
  apiV1PostHistoryImportPosts401Error1Schema,
  type ApiV1PostHistoryImportPosts401Error1,
} from "../models/api-v1-post-history-import-posts401-error1.js";
import {
  apiV1PostHistoryImportPosts403Error1Schema,
  type ApiV1PostHistoryImportPosts403Error1,
} from "../models/api-v1-post-history-import-posts403-error1.js";
import {
  apiV1PostHistoryImportPosts404Error1Schema,
  type ApiV1PostHistoryImportPosts404Error1,
} from "../models/api-v1-post-history-import-posts404-error1.js";
import {
  apiV1PostHistoryImportPosts429Error1Schema,
  type ApiV1PostHistoryImportPosts429Error1,
} from "../models/api-v1-post-history-import-posts429-error1.js";
import {
  apiV1PostHistoryImportPosts500Error1Schema,
  type ApiV1PostHistoryImportPosts500Error1,
} from "../models/api-v1-post-history-import-posts500-error1.js";
import {
  apiV1PostHistoryImportPosts502Error1Schema,
  type ApiV1PostHistoryImportPosts502Error1,
} from "../models/api-v1-post-history-import-posts502-error1.js";
import {
  apiV1PostHistoryImportPosts503Error1Schema,
  type ApiV1PostHistoryImportPosts503Error1,
} from "../models/api-v1-post-history-import-posts503-error1.js";
import {
  apiV1PostHistoryImportPosts504Error1Schema,
  type ApiV1PostHistoryImportPosts504Error1,
} from "../models/api-v1-post-history-import-posts504-error1.js";
import {
  apiV1PostHistoryImportRequestInternalSchema,
  type ApiV1PostHistoryImportRequest,
} from "../models/api-v1-post-history-import-request.js";
import {
  apiV1PostHistoryImportResponseSchema,
  type ApiV1PostHistoryImportResponse,
} from "../models/api-v1-post-history-import-response.js";
import {
  apiV1PostHistoryImportResponse1Schema,
  type ApiV1PostHistoryImportResponse1,
} from "../models/api-v1-post-history-import-response1.js";
import {
  apiV1PostHistoryImportRetryRequestSchema,
  type ApiV1PostHistoryImportRetryRequest,
} from "../models/api-v1-post-history-import-retry-request.js";
import {
  apiV1PostHistoryImportRetryResponseSchema,
  type ApiV1PostHistoryImportRetryResponse,
} from "../models/api-v1-post-history-import-retry-response.js";
import {
  apiV1PostHistoryImportRetry400Error1Schema,
  type ApiV1PostHistoryImportRetry400Error1,
} from "../models/api-v1-post-history-import-retry400-error1.js";
import {
  apiV1PostHistoryImportRetry401Error1Schema,
  type ApiV1PostHistoryImportRetry401Error1,
} from "../models/api-v1-post-history-import-retry401-error1.js";
import {
  apiV1PostHistoryImportRetry403Error1Schema,
  type ApiV1PostHistoryImportRetry403Error1,
} from "../models/api-v1-post-history-import-retry403-error1.js";
import {
  apiV1PostHistoryImportRetry404Error1Schema,
  type ApiV1PostHistoryImportRetry404Error1,
} from "../models/api-v1-post-history-import-retry404-error1.js";
import {
  apiV1PostHistoryImportRetry429Error1Schema,
  type ApiV1PostHistoryImportRetry429Error1,
} from "../models/api-v1-post-history-import-retry429-error1.js";
import {
  apiV1PostHistoryImportRetry500Error1Schema,
  type ApiV1PostHistoryImportRetry500Error1,
} from "../models/api-v1-post-history-import-retry500-error1.js";
import {
  apiV1PostHistoryImportRetry502Error1Schema,
  type ApiV1PostHistoryImportRetry502Error1,
} from "../models/api-v1-post-history-import-retry502-error1.js";
import {
  apiV1PostHistoryImportRetry503Error1Schema,
  type ApiV1PostHistoryImportRetry503Error1,
} from "../models/api-v1-post-history-import-retry503-error1.js";
import {
  apiV1PostHistoryImportRetry504Error1Schema,
  type ApiV1PostHistoryImportRetry504Error1,
} from "../models/api-v1-post-history-import-retry504-error1.js";
import {
  apiV1PostHistoryImport400Error1Schema,
  type ApiV1PostHistoryImport400Error1,
} from "../models/api-v1-post-history-import400-error1.js";
import {
  apiV1PostHistoryImport401Error1Schema,
  type ApiV1PostHistoryImport401Error1,
} from "../models/api-v1-post-history-import401-error1.js";
import {
  apiV1PostHistoryImport403Error1Schema,
  type ApiV1PostHistoryImport403Error1,
} from "../models/api-v1-post-history-import403-error1.js";
import {
  apiV1PostHistoryImport404Error1Schema,
  type ApiV1PostHistoryImport404Error1,
} from "../models/api-v1-post-history-import404-error1.js";
import {
  apiV1PostHistoryImport409Error1Schema,
  type ApiV1PostHistoryImport409Error1,
} from "../models/api-v1-post-history-import409-error1.js";
import {
  apiV1PostHistoryImport429Error1Schema,
  type ApiV1PostHistoryImport429Error1,
} from "../models/api-v1-post-history-import429-error1.js";
import {
  apiV1PostHistoryImport500Error1Schema,
  type ApiV1PostHistoryImport500Error1,
} from "../models/api-v1-post-history-import500-error1.js";
import {
  apiV1PostHistoryImport502Error1Schema,
  type ApiV1PostHistoryImport502Error1,
} from "../models/api-v1-post-history-import502-error1.js";
import {
  apiV1PostHistoryImport503Error1Schema,
  type ApiV1PostHistoryImport503Error1,
} from "../models/api-v1-post-history-import503-error1.js";
import {
  apiV1PostHistoryImport504Error1Schema,
  type ApiV1PostHistoryImport504Error1,
} from "../models/api-v1-post-history-import504-error1.js";
import {
  socialAccountTypeBundleSocialPostImportApiSchema,
  type SocialAccountTypeBundleSocialPostImportApi,
} from "../models/social-account-type-bundle-social-post-import-api.js";
import type { Servers } from "../servers.js";

export class PostImport {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Start a new post history import
   *
   * @remarks
   * Kick off an asynchronous import that backfills posts a social account published before it was
   * connected to bundle.social, together with their analytics. Use it to get historical reporting
   * from day one.
   *
   * @returns 201
   *
   * @throws {@link PostImport.PostImportCreateError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link BundleSocialError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  postImportCreate(
    request: PostImport.PostImportCreateRequest = {},
    options?: RequestOptions,
  ): ApiPromise<ApiV1PostHistoryImportResponse, PostImport.PostImportCreateError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v1/post-history-import/"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => apiV1PostHistoryImportRequestInternalSchema)),
        },
      },
      {
        success: { kind: "json", schema: apiV1PostHistoryImportResponseSchema },
        errorFactory: PostImport.PostImportCreateError,
      },
      options,
    );
  }

  /**
   * Bulk delete imported posts and their analytics
   *
   * @remarks
   * Permanently delete up to 100 imported historical posts and their analytics in one request,
   * freeing import capacity.
   *
   * @returns 200
   *
   * @throws {@link PostImport.PostImportDeleteImportedPostsError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link BundleSocialError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  postImportDeleteImportedPosts(
    request: PostImport.PostImportDeleteImportedPostsRequest = {},
    options?: RequestOptions,
  ): ApiPromise<ApiV1PostHistoryImportPostsResponse1, PostImport.PostImportDeleteImportedPostsError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/api/v1/post-history-import/posts"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => apiV1PostHistoryImportPostsRequestInternalSchema)),
        },
      },
      {
        success: { kind: "json", schema: apiV1PostHistoryImportPostsResponse1Schema },
        errorFactory: PostImport.PostImportDeleteImportedPostsError,
      },
      options,
    );
  }

  /**
   * Get import by ID
   *
   * @remarks
   * Check the status, progress, and result of a single post history import job.
   *
   * @returns 200
   *
   * @throws {@link PostImport.PostImportGetByIdError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link BundleSocialError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  postImportGetById(
    request: PostImport.PostImportGetByIdRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV1PostHistoryImportResponse, PostImport.PostImportGetByIdError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/post-history-import/{importId}"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [{ name: "importId", value: request.importId, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: apiV1PostHistoryImportResponseSchema },
        errorFactory: PostImport.PostImportGetByIdError,
      },
      options,
    );
  }

  /**
   * Get imported posts with analytics for a social account
   *
   * @remarks
   * List the historical posts pulled in by an import, with their analytics and your remaining
   * import capacity. Use it to report on performance from before the account was connected.
   *
   * @returns 200
   *
   * @throws {@link PostImport.PostImportGetImportedPostsError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link BundleSocialError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  postImportGetImportedPosts(
    request: PostImport.PostImportGetImportedPostsRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV1PostHistoryImportPostsResponse, PostImport.PostImportGetImportedPostsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/post-history-import/posts"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [
          { name: "teamId", value: request.teamId, schema: s.string() },
          {
            name: "socialAccountType",
            value: request.socialAccountType,
            schema: socialAccountTypeBundleSocialPostImportApiSchema,
          },
          { name: "limit", value: request.limit, schema: s.defaulted(s.float64(), 50) },
          { name: "offset", value: request.offset, schema: s.defaulted(s.nullable(s.float64()), 0) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: apiV1PostHistoryImportPostsResponseSchema },
        errorFactory: PostImport.PostImportGetImportedPostsError,
      },
      options,
    );
  }

  /**
   * Get import status list
   *
   * @remarks
   * List post history import jobs for a team so you can monitor which backfills are queued,
   * running, finished, or failed.
   *
   * @returns 200
   *
   * @throws {@link PostImport.PostImportGetStatusError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link BundleSocialError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  postImportGetStatus(
    request: PostImport.PostImportGetStatusRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV1PostHistoryImportResponse1, PostImport.PostImportGetStatusError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/post-history-import/"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [
          { name: "teamId", value: request.teamId, schema: s.string() },
          {
            name: "socialAccountType",
            value: request.socialAccountType,
            schema: s.optional(s.lazy(() => socialAccountTypeBundleSocialPostImportApiSchema)),
          },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: apiV1PostHistoryImportResponse1Schema },
        errorFactory: PostImport.PostImportGetStatusError,
      },
      options,
    );
  }

  /**
   * Retry a failed import
   *
   * @remarks
   * Re-run a post history import that failed, for example after a token expired or the platform
   * rate-limited the request.
   *
   * @returns 200
   *
   * @throws {@link PostImport.PostImportRetryImportError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link BundleSocialError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  postImportRetryImport(
    request: PostImport.PostImportRetryImportRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV1PostHistoryImportRetryResponse, PostImport.PostImportRetryImportError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v1/post-history-import/{importId}/retry"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [{ name: "importId", value: request.importId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => apiV1PostHistoryImportRetryRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: apiV1PostHistoryImportRetryResponseSchema },
        errorFactory: PostImport.PostImportRetryImportError,
      },
      options,
    );
  }
}

export namespace PostImport {
  export type PostImportCreateRequest = {
    /** Body */
    body?: ApiV1PostHistoryImportRequest;
  };

  export class PostImportCreateError extends ApiError {
    declare readonly payload:
      | Declared<"apiV1PostHistoryImport400Error1", ApiV1PostHistoryImport400Error1>
      | Declared<"apiV1PostHistoryImport401Error1", ApiV1PostHistoryImport401Error1>
      | Declared<"apiV1PostHistoryImport403Error1", ApiV1PostHistoryImport403Error1>
      | Declared<"apiV1PostHistoryImport404Error1", ApiV1PostHistoryImport404Error1>
      | Declared<"apiV1PostHistoryImport409Error1", ApiV1PostHistoryImport409Error1>
      | Declared<"apiV1PostHistoryImport429Error1", ApiV1PostHistoryImport429Error1>
      | Declared<"apiV1PostHistoryImport500Error1", ApiV1PostHistoryImport500Error1>
      | Declared<"apiV1PostHistoryImport502Error1", ApiV1PostHistoryImport502Error1>
      | Declared<"apiV1PostHistoryImport503Error1", ApiV1PostHistoryImport503Error1>
      | Declared<"apiV1PostHistoryImport504Error1", ApiV1PostHistoryImport504Error1>
      | Undeclared;

    static readonly errors: ErrorDecoders<PostImportCreateError> = [
      {
        on: 400,
        kind: "apiV1PostHistoryImport400Error1",
        decode: { kind: "json", schema: apiV1PostHistoryImport400Error1Schema },
      },
      {
        on: 401,
        kind: "apiV1PostHistoryImport401Error1",
        decode: { kind: "json", schema: apiV1PostHistoryImport401Error1Schema },
      },
      {
        on: 403,
        kind: "apiV1PostHistoryImport403Error1",
        decode: { kind: "json", schema: apiV1PostHistoryImport403Error1Schema },
      },
      {
        on: 404,
        kind: "apiV1PostHistoryImport404Error1",
        decode: { kind: "json", schema: apiV1PostHistoryImport404Error1Schema },
      },
      {
        on: 409,
        kind: "apiV1PostHistoryImport409Error1",
        decode: { kind: "json", schema: apiV1PostHistoryImport409Error1Schema },
      },
      {
        on: 429,
        kind: "apiV1PostHistoryImport429Error1",
        decode: { kind: "json", schema: apiV1PostHistoryImport429Error1Schema },
      },
      {
        on: 500,
        kind: "apiV1PostHistoryImport500Error1",
        decode: { kind: "json", schema: apiV1PostHistoryImport500Error1Schema },
      },
      {
        on: 502,
        kind: "apiV1PostHistoryImport502Error1",
        decode: { kind: "json", schema: apiV1PostHistoryImport502Error1Schema },
      },
      {
        on: 503,
        kind: "apiV1PostHistoryImport503Error1",
        decode: { kind: "json", schema: apiV1PostHistoryImport503Error1Schema },
      },
      {
        on: 504,
        kind: "apiV1PostHistoryImport504Error1",
        decode: { kind: "json", schema: apiV1PostHistoryImport504Error1Schema },
      },
    ];
  }

  export type PostImportDeleteImportedPostsRequest = {
    /** Body */
    body?: ApiV1PostHistoryImportPostsRequest;
  };

  export class PostImportDeleteImportedPostsError extends ApiError {
    declare readonly payload:
      | Declared<"apiV1PostHistoryImportPosts400Error1", ApiV1PostHistoryImportPosts400Error1>
      | Declared<"apiV1PostHistoryImportPosts401Error1", ApiV1PostHistoryImportPosts401Error1>
      | Declared<"apiV1PostHistoryImportPosts403Error1", ApiV1PostHistoryImportPosts403Error1>
      | Declared<"apiV1PostHistoryImportPosts404Error1", ApiV1PostHistoryImportPosts404Error1>
      | Declared<"apiV1PostHistoryImportPosts429Error1", ApiV1PostHistoryImportPosts429Error1>
      | Declared<"apiV1PostHistoryImportPosts500Error1", ApiV1PostHistoryImportPosts500Error1>
      | Declared<"apiV1PostHistoryImportPosts502Error1", ApiV1PostHistoryImportPosts502Error1>
      | Declared<"apiV1PostHistoryImportPosts503Error1", ApiV1PostHistoryImportPosts503Error1>
      | Declared<"apiV1PostHistoryImportPosts504Error1", ApiV1PostHistoryImportPosts504Error1>
      | Undeclared;

    static readonly errors: ErrorDecoders<PostImportDeleteImportedPostsError> = [
      {
        on: 400,
        kind: "apiV1PostHistoryImportPosts400Error1",
        decode: { kind: "json", schema: apiV1PostHistoryImportPosts400Error1Schema },
      },
      {
        on: 401,
        kind: "apiV1PostHistoryImportPosts401Error1",
        decode: { kind: "json", schema: apiV1PostHistoryImportPosts401Error1Schema },
      },
      {
        on: 403,
        kind: "apiV1PostHistoryImportPosts403Error1",
        decode: { kind: "json", schema: apiV1PostHistoryImportPosts403Error1Schema },
      },
      {
        on: 404,
        kind: "apiV1PostHistoryImportPosts404Error1",
        decode: { kind: "json", schema: apiV1PostHistoryImportPosts404Error1Schema },
      },
      {
        on: 429,
        kind: "apiV1PostHistoryImportPosts429Error1",
        decode: { kind: "json", schema: apiV1PostHistoryImportPosts429Error1Schema },
      },
      {
        on: 500,
        kind: "apiV1PostHistoryImportPosts500Error1",
        decode: { kind: "json", schema: apiV1PostHistoryImportPosts500Error1Schema },
      },
      {
        on: 502,
        kind: "apiV1PostHistoryImportPosts502Error1",
        decode: { kind: "json", schema: apiV1PostHistoryImportPosts502Error1Schema },
      },
      {
        on: 503,
        kind: "apiV1PostHistoryImportPosts503Error1",
        decode: { kind: "json", schema: apiV1PostHistoryImportPosts503Error1Schema },
      },
      {
        on: 504,
        kind: "apiV1PostHistoryImportPosts504Error1",
        decode: { kind: "json", schema: apiV1PostHistoryImportPosts504Error1Schema },
      },
    ];
  }

  export type PostImportGetByIdRequest = {
    importId: string;
  };

  export class PostImportGetByIdError extends ApiError {
    declare readonly payload:
      | Declared<"apiV1PostHistoryImport400Error1", ApiV1PostHistoryImport400Error1>
      | Declared<"apiV1PostHistoryImport401Error1", ApiV1PostHistoryImport401Error1>
      | Declared<"apiV1PostHistoryImport403Error1", ApiV1PostHistoryImport403Error1>
      | Declared<"apiV1PostHistoryImport404Error1", ApiV1PostHistoryImport404Error1>
      | Declared<"apiV1PostHistoryImport429Error1", ApiV1PostHistoryImport429Error1>
      | Declared<"apiV1PostHistoryImport500Error1", ApiV1PostHistoryImport500Error1>
      | Declared<"apiV1PostHistoryImport502Error1", ApiV1PostHistoryImport502Error1>
      | Declared<"apiV1PostHistoryImport503Error1", ApiV1PostHistoryImport503Error1>
      | Declared<"apiV1PostHistoryImport504Error1", ApiV1PostHistoryImport504Error1>
      | Undeclared;

    static readonly errors: ErrorDecoders<PostImportGetByIdError> = [
      {
        on: 400,
        kind: "apiV1PostHistoryImport400Error1",
        decode: { kind: "json", schema: apiV1PostHistoryImport400Error1Schema },
      },
      {
        on: 401,
        kind: "apiV1PostHistoryImport401Error1",
        decode: { kind: "json", schema: apiV1PostHistoryImport401Error1Schema },
      },
      {
        on: 403,
        kind: "apiV1PostHistoryImport403Error1",
        decode: { kind: "json", schema: apiV1PostHistoryImport403Error1Schema },
      },
      {
        on: 404,
        kind: "apiV1PostHistoryImport404Error1",
        decode: { kind: "json", schema: apiV1PostHistoryImport404Error1Schema },
      },
      {
        on: 429,
        kind: "apiV1PostHistoryImport429Error1",
        decode: { kind: "json", schema: apiV1PostHistoryImport429Error1Schema },
      },
      {
        on: 500,
        kind: "apiV1PostHistoryImport500Error1",
        decode: { kind: "json", schema: apiV1PostHistoryImport500Error1Schema },
      },
      {
        on: 502,
        kind: "apiV1PostHistoryImport502Error1",
        decode: { kind: "json", schema: apiV1PostHistoryImport502Error1Schema },
      },
      {
        on: 503,
        kind: "apiV1PostHistoryImport503Error1",
        decode: { kind: "json", schema: apiV1PostHistoryImport503Error1Schema },
      },
      {
        on: 504,
        kind: "apiV1PostHistoryImport504Error1",
        decode: { kind: "json", schema: apiV1PostHistoryImport504Error1Schema },
      },
    ];
  }

  export type PostImportGetImportedPostsRequest = {
    teamId: string;
    socialAccountType: SocialAccountTypeBundleSocialPostImportApi;
    /** @default 50 */
    limit?: number;
    /** @default 0 */
    offset?: number | null;
  };

  export const postImportGetImportedPostsRequestSchema: Schema<PostImportGetImportedPostsRequest> =
    s.lazySchema(() =>
      s.object<PostImportGetImportedPostsRequest>({
        teamId: s.string(),
        socialAccountType: socialAccountTypeBundleSocialPostImportApiSchema,
        limit: s.defaulted(s.float64().check(s.gte(1), s.lte(100)), 50),
        offset: s.defaulted(s.nullable(s.float64().check(s.gte(0))), 0),
      }),
    );

  export class PostImportGetImportedPostsError extends ApiError {
    declare readonly payload:
      | Declared<"apiV1PostHistoryImportPosts400Error1", ApiV1PostHistoryImportPosts400Error1>
      | Declared<"apiV1PostHistoryImportPosts401Error1", ApiV1PostHistoryImportPosts401Error1>
      | Declared<"apiV1PostHistoryImportPosts403Error1", ApiV1PostHistoryImportPosts403Error1>
      | Declared<"apiV1PostHistoryImportPosts404Error1", ApiV1PostHistoryImportPosts404Error1>
      | Declared<"apiV1PostHistoryImportPosts429Error1", ApiV1PostHistoryImportPosts429Error1>
      | Declared<"apiV1PostHistoryImportPosts500Error1", ApiV1PostHistoryImportPosts500Error1>
      | Declared<"apiV1PostHistoryImportPosts502Error1", ApiV1PostHistoryImportPosts502Error1>
      | Declared<"apiV1PostHistoryImportPosts503Error1", ApiV1PostHistoryImportPosts503Error1>
      | Declared<"apiV1PostHistoryImportPosts504Error1", ApiV1PostHistoryImportPosts504Error1>
      | Undeclared;

    static readonly errors: ErrorDecoders<PostImportGetImportedPostsError> = [
      {
        on: 400,
        kind: "apiV1PostHistoryImportPosts400Error1",
        decode: { kind: "json", schema: apiV1PostHistoryImportPosts400Error1Schema },
      },
      {
        on: 401,
        kind: "apiV1PostHistoryImportPosts401Error1",
        decode: { kind: "json", schema: apiV1PostHistoryImportPosts401Error1Schema },
      },
      {
        on: 403,
        kind: "apiV1PostHistoryImportPosts403Error1",
        decode: { kind: "json", schema: apiV1PostHistoryImportPosts403Error1Schema },
      },
      {
        on: 404,
        kind: "apiV1PostHistoryImportPosts404Error1",
        decode: { kind: "json", schema: apiV1PostHistoryImportPosts404Error1Schema },
      },
      {
        on: 429,
        kind: "apiV1PostHistoryImportPosts429Error1",
        decode: { kind: "json", schema: apiV1PostHistoryImportPosts429Error1Schema },
      },
      {
        on: 500,
        kind: "apiV1PostHistoryImportPosts500Error1",
        decode: { kind: "json", schema: apiV1PostHistoryImportPosts500Error1Schema },
      },
      {
        on: 502,
        kind: "apiV1PostHistoryImportPosts502Error1",
        decode: { kind: "json", schema: apiV1PostHistoryImportPosts502Error1Schema },
      },
      {
        on: 503,
        kind: "apiV1PostHistoryImportPosts503Error1",
        decode: { kind: "json", schema: apiV1PostHistoryImportPosts503Error1Schema },
      },
      {
        on: 504,
        kind: "apiV1PostHistoryImportPosts504Error1",
        decode: { kind: "json", schema: apiV1PostHistoryImportPosts504Error1Schema },
      },
    ];
  }

  export type PostImportGetStatusRequest = {
    teamId: string;
    socialAccountType?: SocialAccountTypeBundleSocialPostImportApi;
  };

  export class PostImportGetStatusError extends ApiError {
    declare readonly payload:
      | Declared<"apiV1PostHistoryImport400Error1", ApiV1PostHistoryImport400Error1>
      | Declared<"apiV1PostHistoryImport401Error1", ApiV1PostHistoryImport401Error1>
      | Declared<"apiV1PostHistoryImport403Error1", ApiV1PostHistoryImport403Error1>
      | Declared<"apiV1PostHistoryImport404Error1", ApiV1PostHistoryImport404Error1>
      | Declared<"apiV1PostHistoryImport429Error1", ApiV1PostHistoryImport429Error1>
      | Declared<"apiV1PostHistoryImport500Error1", ApiV1PostHistoryImport500Error1>
      | Declared<"apiV1PostHistoryImport502Error1", ApiV1PostHistoryImport502Error1>
      | Declared<"apiV1PostHistoryImport503Error1", ApiV1PostHistoryImport503Error1>
      | Declared<"apiV1PostHistoryImport504Error1", ApiV1PostHistoryImport504Error1>
      | Undeclared;

    static readonly errors: ErrorDecoders<PostImportGetStatusError> = [
      {
        on: 400,
        kind: "apiV1PostHistoryImport400Error1",
        decode: { kind: "json", schema: apiV1PostHistoryImport400Error1Schema },
      },
      {
        on: 401,
        kind: "apiV1PostHistoryImport401Error1",
        decode: { kind: "json", schema: apiV1PostHistoryImport401Error1Schema },
      },
      {
        on: 403,
        kind: "apiV1PostHistoryImport403Error1",
        decode: { kind: "json", schema: apiV1PostHistoryImport403Error1Schema },
      },
      {
        on: 404,
        kind: "apiV1PostHistoryImport404Error1",
        decode: { kind: "json", schema: apiV1PostHistoryImport404Error1Schema },
      },
      {
        on: 429,
        kind: "apiV1PostHistoryImport429Error1",
        decode: { kind: "json", schema: apiV1PostHistoryImport429Error1Schema },
      },
      {
        on: 500,
        kind: "apiV1PostHistoryImport500Error1",
        decode: { kind: "json", schema: apiV1PostHistoryImport500Error1Schema },
      },
      {
        on: 502,
        kind: "apiV1PostHistoryImport502Error1",
        decode: { kind: "json", schema: apiV1PostHistoryImport502Error1Schema },
      },
      {
        on: 503,
        kind: "apiV1PostHistoryImport503Error1",
        decode: { kind: "json", schema: apiV1PostHistoryImport503Error1Schema },
      },
      {
        on: 504,
        kind: "apiV1PostHistoryImport504Error1",
        decode: { kind: "json", schema: apiV1PostHistoryImport504Error1Schema },
      },
    ];
  }

  export type PostImportRetryImportRequest = {
    importId: string;
    /** Body */
    body?: ApiV1PostHistoryImportRetryRequest;
  };

  export class PostImportRetryImportError extends ApiError {
    declare readonly payload:
      | Declared<"apiV1PostHistoryImportRetry400Error1", ApiV1PostHistoryImportRetry400Error1>
      | Declared<"apiV1PostHistoryImportRetry401Error1", ApiV1PostHistoryImportRetry401Error1>
      | Declared<"apiV1PostHistoryImportRetry403Error1", ApiV1PostHistoryImportRetry403Error1>
      | Declared<"apiV1PostHistoryImportRetry404Error1", ApiV1PostHistoryImportRetry404Error1>
      | Declared<"apiV1PostHistoryImportRetry429Error1", ApiV1PostHistoryImportRetry429Error1>
      | Declared<"apiV1PostHistoryImportRetry500Error1", ApiV1PostHistoryImportRetry500Error1>
      | Declared<"apiV1PostHistoryImportRetry502Error1", ApiV1PostHistoryImportRetry502Error1>
      | Declared<"apiV1PostHistoryImportRetry503Error1", ApiV1PostHistoryImportRetry503Error1>
      | Declared<"apiV1PostHistoryImportRetry504Error1", ApiV1PostHistoryImportRetry504Error1>
      | Undeclared;

    static readonly errors: ErrorDecoders<PostImportRetryImportError> = [
      {
        on: 400,
        kind: "apiV1PostHistoryImportRetry400Error1",
        decode: { kind: "json", schema: apiV1PostHistoryImportRetry400Error1Schema },
      },
      {
        on: 401,
        kind: "apiV1PostHistoryImportRetry401Error1",
        decode: { kind: "json", schema: apiV1PostHistoryImportRetry401Error1Schema },
      },
      {
        on: 403,
        kind: "apiV1PostHistoryImportRetry403Error1",
        decode: { kind: "json", schema: apiV1PostHistoryImportRetry403Error1Schema },
      },
      {
        on: 404,
        kind: "apiV1PostHistoryImportRetry404Error1",
        decode: { kind: "json", schema: apiV1PostHistoryImportRetry404Error1Schema },
      },
      {
        on: 429,
        kind: "apiV1PostHistoryImportRetry429Error1",
        decode: { kind: "json", schema: apiV1PostHistoryImportRetry429Error1Schema },
      },
      {
        on: 500,
        kind: "apiV1PostHistoryImportRetry500Error1",
        decode: { kind: "json", schema: apiV1PostHistoryImportRetry500Error1Schema },
      },
      {
        on: 502,
        kind: "apiV1PostHistoryImportRetry502Error1",
        decode: { kind: "json", schema: apiV1PostHistoryImportRetry502Error1Schema },
      },
      {
        on: 503,
        kind: "apiV1PostHistoryImportRetry503Error1",
        decode: { kind: "json", schema: apiV1PostHistoryImportRetry503Error1Schema },
      },
      {
        on: 504,
        kind: "apiV1PostHistoryImportRetry504Error1",
        decode: { kind: "json", schema: apiV1PostHistoryImportRetry504Error1Schema },
      },
    ];
  }
}
