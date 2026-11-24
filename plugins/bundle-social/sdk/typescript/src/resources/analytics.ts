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
  apiV1AnalyticsPostBulkResponseSchema,
  type ApiV1AnalyticsPostBulkResponse,
} from "../models/api-v1-analytics-post-bulk-response.js";
import {
  apiV1AnalyticsPostBulk400Error1Schema,
  type ApiV1AnalyticsPostBulk400Error1,
} from "../models/api-v1-analytics-post-bulk400-error1.js";
import {
  apiV1AnalyticsPostBulk401Error1Schema,
  type ApiV1AnalyticsPostBulk401Error1,
} from "../models/api-v1-analytics-post-bulk401-error1.js";
import {
  apiV1AnalyticsPostBulk403Error1Schema,
  type ApiV1AnalyticsPostBulk403Error1,
} from "../models/api-v1-analytics-post-bulk403-error1.js";
import {
  apiV1AnalyticsPostBulk404Error1Schema,
  type ApiV1AnalyticsPostBulk404Error1,
} from "../models/api-v1-analytics-post-bulk404-error1.js";
import {
  apiV1AnalyticsPostBulk429Error1Schema,
  type ApiV1AnalyticsPostBulk429Error1,
} from "../models/api-v1-analytics-post-bulk429-error1.js";
import {
  apiV1AnalyticsPostBulk500Error1Schema,
  type ApiV1AnalyticsPostBulk500Error1,
} from "../models/api-v1-analytics-post-bulk500-error1.js";
import {
  apiV1AnalyticsPostBulk502Error1Schema,
  type ApiV1AnalyticsPostBulk502Error1,
} from "../models/api-v1-analytics-post-bulk502-error1.js";
import {
  apiV1AnalyticsPostBulk503Error1Schema,
  type ApiV1AnalyticsPostBulk503Error1,
} from "../models/api-v1-analytics-post-bulk503-error1.js";
import {
  apiV1AnalyticsPostBulk504Error1Schema,
  type ApiV1AnalyticsPostBulk504Error1,
} from "../models/api-v1-analytics-post-bulk504-error1.js";
import {
  apiV1AnalyticsPostForceRequestSchema,
  type ApiV1AnalyticsPostForceRequest,
} from "../models/api-v1-analytics-post-force-request.js";
import {
  apiV1AnalyticsPostForceResponseSchema,
  type ApiV1AnalyticsPostForceResponse,
} from "../models/api-v1-analytics-post-force-response.js";
import {
  apiV1AnalyticsPostForce400Error1Schema,
  type ApiV1AnalyticsPostForce400Error1,
} from "../models/api-v1-analytics-post-force400-error1.js";
import {
  apiV1AnalyticsPostForce401Error1Schema,
  type ApiV1AnalyticsPostForce401Error1,
} from "../models/api-v1-analytics-post-force401-error1.js";
import {
  apiV1AnalyticsPostForce403Error1Schema,
  type ApiV1AnalyticsPostForce403Error1,
} from "../models/api-v1-analytics-post-force403-error1.js";
import {
  apiV1AnalyticsPostForce404Error1Schema,
  type ApiV1AnalyticsPostForce404Error1,
} from "../models/api-v1-analytics-post-force404-error1.js";
import {
  apiV1AnalyticsPostForce429Error1Schema,
  type ApiV1AnalyticsPostForce429Error1,
} from "../models/api-v1-analytics-post-force429-error1.js";
import {
  apiV1AnalyticsPostForce500Error1Schema,
  type ApiV1AnalyticsPostForce500Error1,
} from "../models/api-v1-analytics-post-force500-error1.js";
import {
  apiV1AnalyticsPostForce502Error1Schema,
  type ApiV1AnalyticsPostForce502Error1,
} from "../models/api-v1-analytics-post-force502-error1.js";
import {
  apiV1AnalyticsPostForce503Error1Schema,
  type ApiV1AnalyticsPostForce503Error1,
} from "../models/api-v1-analytics-post-force503-error1.js";
import {
  apiV1AnalyticsPostForce504Error1Schema,
  type ApiV1AnalyticsPostForce504Error1,
} from "../models/api-v1-analytics-post-force504-error1.js";
import {
  apiV1AnalyticsPostRawResponseInternalSchema,
  type ApiV1AnalyticsPostRawResponse,
} from "../models/api-v1-analytics-post-raw-response.js";
import {
  apiV1AnalyticsPostRaw400Error1Schema,
  type ApiV1AnalyticsPostRaw400Error1,
} from "../models/api-v1-analytics-post-raw400-error1.js";
import {
  apiV1AnalyticsPostRaw401Error1Schema,
  type ApiV1AnalyticsPostRaw401Error1,
} from "../models/api-v1-analytics-post-raw401-error1.js";
import {
  apiV1AnalyticsPostRaw403Error1Schema,
  type ApiV1AnalyticsPostRaw403Error1,
} from "../models/api-v1-analytics-post-raw403-error1.js";
import {
  apiV1AnalyticsPostRaw404Error1Schema,
  type ApiV1AnalyticsPostRaw404Error1,
} from "../models/api-v1-analytics-post-raw404-error1.js";
import {
  apiV1AnalyticsPostRaw429Error1Schema,
  type ApiV1AnalyticsPostRaw429Error1,
} from "../models/api-v1-analytics-post-raw429-error1.js";
import {
  apiV1AnalyticsPostRaw500Error1Schema,
  type ApiV1AnalyticsPostRaw500Error1,
} from "../models/api-v1-analytics-post-raw500-error1.js";
import {
  apiV1AnalyticsPostRaw502Error1Schema,
  type ApiV1AnalyticsPostRaw502Error1,
} from "../models/api-v1-analytics-post-raw502-error1.js";
import {
  apiV1AnalyticsPostRaw503Error1Schema,
  type ApiV1AnalyticsPostRaw503Error1,
} from "../models/api-v1-analytics-post-raw503-error1.js";
import {
  apiV1AnalyticsPostRaw504Error1Schema,
  type ApiV1AnalyticsPostRaw504Error1,
} from "../models/api-v1-analytics-post-raw504-error1.js";
import {
  apiV1AnalyticsPostResponseInternalSchema,
  type ApiV1AnalyticsPostResponse,
} from "../models/api-v1-analytics-post-response.js";
import {
  apiV1AnalyticsPost400Error1Schema,
  type ApiV1AnalyticsPost400Error1,
} from "../models/api-v1-analytics-post400-error1.js";
import {
  apiV1AnalyticsPost401Error1Schema,
  type ApiV1AnalyticsPost401Error1,
} from "../models/api-v1-analytics-post401-error1.js";
import {
  apiV1AnalyticsPost403Error1Schema,
  type ApiV1AnalyticsPost403Error1,
} from "../models/api-v1-analytics-post403-error1.js";
import {
  apiV1AnalyticsPost404Error1Schema,
  type ApiV1AnalyticsPost404Error1,
} from "../models/api-v1-analytics-post404-error1.js";
import {
  apiV1AnalyticsPost429Error1Schema,
  type ApiV1AnalyticsPost429Error1,
} from "../models/api-v1-analytics-post429-error1.js";
import {
  apiV1AnalyticsPost500Error1Schema,
  type ApiV1AnalyticsPost500Error1,
} from "../models/api-v1-analytics-post500-error1.js";
import {
  apiV1AnalyticsPost502Error1Schema,
  type ApiV1AnalyticsPost502Error1,
} from "../models/api-v1-analytics-post502-error1.js";
import {
  apiV1AnalyticsPost503Error1Schema,
  type ApiV1AnalyticsPost503Error1,
} from "../models/api-v1-analytics-post503-error1.js";
import {
  apiV1AnalyticsPost504Error1Schema,
  type ApiV1AnalyticsPost504Error1,
} from "../models/api-v1-analytics-post504-error1.js";
import {
  apiV1AnalyticsSocialAccountForceRequestSchema,
  type ApiV1AnalyticsSocialAccountForceRequest,
} from "../models/api-v1-analytics-social-account-force-request.js";
import {
  apiV1AnalyticsSocialAccountForceResponseSchema,
  type ApiV1AnalyticsSocialAccountForceResponse,
} from "../models/api-v1-analytics-social-account-force-response.js";
import {
  apiV1AnalyticsSocialAccountForce400Error1Schema,
  type ApiV1AnalyticsSocialAccountForce400Error1,
} from "../models/api-v1-analytics-social-account-force400-error1.js";
import {
  apiV1AnalyticsSocialAccountForce401Error1Schema,
  type ApiV1AnalyticsSocialAccountForce401Error1,
} from "../models/api-v1-analytics-social-account-force401-error1.js";
import {
  apiV1AnalyticsSocialAccountForce403Error1Schema,
  type ApiV1AnalyticsSocialAccountForce403Error1,
} from "../models/api-v1-analytics-social-account-force403-error1.js";
import {
  apiV1AnalyticsSocialAccountForce404Error1Schema,
  type ApiV1AnalyticsSocialAccountForce404Error1,
} from "../models/api-v1-analytics-social-account-force404-error1.js";
import {
  apiV1AnalyticsSocialAccountForce429Error1Schema,
  type ApiV1AnalyticsSocialAccountForce429Error1,
} from "../models/api-v1-analytics-social-account-force429-error1.js";
import {
  apiV1AnalyticsSocialAccountForce500Error1Schema,
  type ApiV1AnalyticsSocialAccountForce500Error1,
} from "../models/api-v1-analytics-social-account-force500-error1.js";
import {
  apiV1AnalyticsSocialAccountForce502Error1Schema,
  type ApiV1AnalyticsSocialAccountForce502Error1,
} from "../models/api-v1-analytics-social-account-force502-error1.js";
import {
  apiV1AnalyticsSocialAccountForce503Error1Schema,
  type ApiV1AnalyticsSocialAccountForce503Error1,
} from "../models/api-v1-analytics-social-account-force503-error1.js";
import {
  apiV1AnalyticsSocialAccountForce504Error1Schema,
  type ApiV1AnalyticsSocialAccountForce504Error1,
} from "../models/api-v1-analytics-social-account-force504-error1.js";
import {
  apiV1AnalyticsSocialAccountRawResponseSchema,
  type ApiV1AnalyticsSocialAccountRawResponse,
} from "../models/api-v1-analytics-social-account-raw-response.js";
import {
  apiV1AnalyticsSocialAccountRaw400Error1Schema,
  type ApiV1AnalyticsSocialAccountRaw400Error1,
} from "../models/api-v1-analytics-social-account-raw400-error1.js";
import {
  apiV1AnalyticsSocialAccountRaw401Error1Schema,
  type ApiV1AnalyticsSocialAccountRaw401Error1,
} from "../models/api-v1-analytics-social-account-raw401-error1.js";
import {
  apiV1AnalyticsSocialAccountRaw403Error1Schema,
  type ApiV1AnalyticsSocialAccountRaw403Error1,
} from "../models/api-v1-analytics-social-account-raw403-error1.js";
import {
  apiV1AnalyticsSocialAccountRaw404Error1Schema,
  type ApiV1AnalyticsSocialAccountRaw404Error1,
} from "../models/api-v1-analytics-social-account-raw404-error1.js";
import {
  apiV1AnalyticsSocialAccountRaw429Error1Schema,
  type ApiV1AnalyticsSocialAccountRaw429Error1,
} from "../models/api-v1-analytics-social-account-raw429-error1.js";
import {
  apiV1AnalyticsSocialAccountRaw500Error1Schema,
  type ApiV1AnalyticsSocialAccountRaw500Error1,
} from "../models/api-v1-analytics-social-account-raw500-error1.js";
import {
  apiV1AnalyticsSocialAccountRaw502Error1Schema,
  type ApiV1AnalyticsSocialAccountRaw502Error1,
} from "../models/api-v1-analytics-social-account-raw502-error1.js";
import {
  apiV1AnalyticsSocialAccountRaw503Error1Schema,
  type ApiV1AnalyticsSocialAccountRaw503Error1,
} from "../models/api-v1-analytics-social-account-raw503-error1.js";
import {
  apiV1AnalyticsSocialAccountRaw504Error1Schema,
  type ApiV1AnalyticsSocialAccountRaw504Error1,
} from "../models/api-v1-analytics-social-account-raw504-error1.js";
import {
  apiV1AnalyticsSocialAccountResponseSchema,
  type ApiV1AnalyticsSocialAccountResponse,
} from "../models/api-v1-analytics-social-account-response.js";
import {
  apiV1AnalyticsSocialAccount400Error1Schema,
  type ApiV1AnalyticsSocialAccount400Error1,
} from "../models/api-v1-analytics-social-account400-error1.js";
import {
  apiV1AnalyticsSocialAccount401Error1Schema,
  type ApiV1AnalyticsSocialAccount401Error1,
} from "../models/api-v1-analytics-social-account401-error1.js";
import {
  apiV1AnalyticsSocialAccount403Error1Schema,
  type ApiV1AnalyticsSocialAccount403Error1,
} from "../models/api-v1-analytics-social-account403-error1.js";
import {
  apiV1AnalyticsSocialAccount404Error1Schema,
  type ApiV1AnalyticsSocialAccount404Error1,
} from "../models/api-v1-analytics-social-account404-error1.js";
import {
  apiV1AnalyticsSocialAccount429Error1Schema,
  type ApiV1AnalyticsSocialAccount429Error1,
} from "../models/api-v1-analytics-social-account429-error1.js";
import {
  apiV1AnalyticsSocialAccount500Error1Schema,
  type ApiV1AnalyticsSocialAccount500Error1,
} from "../models/api-v1-analytics-social-account500-error1.js";
import {
  apiV1AnalyticsSocialAccount502Error1Schema,
  type ApiV1AnalyticsSocialAccount502Error1,
} from "../models/api-v1-analytics-social-account502-error1.js";
import {
  apiV1AnalyticsSocialAccount503Error1Schema,
  type ApiV1AnalyticsSocialAccount503Error1,
} from "../models/api-v1-analytics-social-account503-error1.js";
import {
  apiV1AnalyticsSocialAccount504Error1Schema,
  type ApiV1AnalyticsSocialAccount504Error1,
} from "../models/api-v1-analytics-social-account504-error1.js";
import { platformTypeSchema, type PlatformType } from "../models/platform-type.js";
import type { Servers } from "../servers.js";

export class Analytics {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Force refresh post analytics
   *
   * @remarks
   * Trigger an immediate fetch of fresh analytics for a single post instead of waiting for the
   * scheduled refresh. Use sparingly, as it consumes platform rate limits.
   *
   * @returns 200
   *
   * @throws {@link Analytics.AnalyticsForcePostAnalyticsError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link BundleSocialError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  analyticsForcePostAnalytics(
    request: Analytics.AnalyticsForcePostAnalyticsRequest = {},
    options?: RequestOptions,
  ): ApiPromise<ApiV1AnalyticsPostForceResponse, Analytics.AnalyticsForcePostAnalyticsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v1/analytics/post/force"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => apiV1AnalyticsPostForceRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: apiV1AnalyticsPostForceResponseSchema },
        errorFactory: Analytics.AnalyticsForcePostAnalyticsError,
      },
      options,
    );
  }

  /**
   * Force refresh social account analytics
   *
   * @remarks
   * Trigger an immediate fetch of fresh social account analytics from the platform instead of
   * waiting for the scheduled refresh. Use sparingly, as it consumes platform rate limits.
   *
   * @returns 200
   *
   * @throws {@link Analytics.AnalyticsForceSocialAccountAnalyticsError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link BundleSocialError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  analyticsForceSocialAccountAnalytics(
    request: Analytics.AnalyticsForceSocialAccountAnalyticsRequest = {},
    options?: RequestOptions,
  ): ApiPromise<
    ApiV1AnalyticsSocialAccountForceResponse,
    Analytics.AnalyticsForceSocialAccountAnalyticsError
  > {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v1/analytics/social-account/force"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => apiV1AnalyticsSocialAccountForceRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: apiV1AnalyticsSocialAccountForceResponseSchema },
        errorFactory: Analytics.AnalyticsForceSocialAccountAnalyticsError,
      },
      options,
    );
  }

  /**
   * Get Bulk Post Analytics
   *
   * @remarks
   * Retrieve analytics for multiple posts in a single request. Maximum 60 posts per request,
   * paginated with 20 per page.
   *
   * @returns 200
   *
   * @throws {@link Analytics.AnalyticsGetBulkPostAnalyticsError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link BundleSocialError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  analyticsGetBulkPostAnalytics(
    request: Analytics.AnalyticsGetBulkPostAnalyticsRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV1AnalyticsPostBulkResponse, Analytics.AnalyticsGetBulkPostAnalyticsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/analytics/post/bulk"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [
          { name: "postIds", value: request.postIds, schema: s.array(s.string()) },
          { name: "platformType", value: request.platformType, schema: platformTypeSchema },
          { name: "page", value: request.page, schema: s.defaulted(s.float64(), 1) },
          { name: "limit", value: request.limit, schema: s.defaulted(s.float64(), 20) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: apiV1AnalyticsPostBulkResponseSchema },
        errorFactory: Analytics.AnalyticsGetBulkPostAnalyticsError,
      },
      options,
    );
  }

  /**
   * Get Post Analytics
   *
   * @remarks
   * Retrieve normalized engagement metrics such as likes, comments, shares, and views for a single
   * published post. Metric names are unified across platforms for easier reporting.
   *
   * @returns 200
   *
   * @throws {@link Analytics.AnalyticsGetPostAnalyticsError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link BundleSocialError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  analyticsGetPostAnalytics(
    request: Analytics.AnalyticsGetPostAnalyticsRequest = {},
    options?: RequestOptions,
  ): ApiPromise<ApiV1AnalyticsPostResponse, Analytics.AnalyticsGetPostAnalyticsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/analytics/post"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [
          { name: "postId", value: request.postId, schema: s.optionalNullable(s.string()) },
          {
            name: "platformType",
            value: request.platformType,
            schema: s.optionalNullable(s.lazy(() => platformTypeSchema)),
          },
          { name: "importedPostId", value: request.importedPostId, schema: s.optionalNullable(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: apiV1AnalyticsPostResponseInternalSchema },
        errorFactory: Analytics.AnalyticsGetPostAnalyticsError,
      },
      options,
    );
  }

  /**
   * Get Post Analytics Raw
   *
   * @remarks
   * Retrieve post analytics exactly as returned by the social platform, without bundle.social's
   * normalization. Use this when you need a platform-specific metric that the normalized response
   * does not expose.
   *
   * @returns 200
   *
   * @throws {@link Analytics.AnalyticsGetPostAnalyticsRawError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link BundleSocialError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  analyticsGetPostAnalyticsRaw(
    request: Analytics.AnalyticsGetPostAnalyticsRawRequest = {},
    options?: RequestOptions,
  ): ApiPromise<ApiV1AnalyticsPostRawResponse, Analytics.AnalyticsGetPostAnalyticsRawError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/analytics/post/raw"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [
          { name: "postId", value: request.postId, schema: s.optionalNullable(s.string()) },
          {
            name: "platformType",
            value: request.platformType,
            schema: s.optionalNullable(s.lazy(() => platformTypeSchema)),
          },
          { name: "importedPostId", value: request.importedPostId, schema: s.optionalNullable(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: apiV1AnalyticsPostRawResponseInternalSchema },
        errorFactory: Analytics.AnalyticsGetPostAnalyticsRawError,
      },
      options,
    );
  }

  /**
   * Get Social Account Analytics
   *
   * @remarks
   * Retrieve normalized profile-level metrics such as followers, reach, and impressions for a
   * connected social account over a date range. Metric names are unified across platforms so you
   * can chart accounts side by side.
   *
   * @returns 200
   *
   * @throws {@link Analytics.AnalyticsGetSocialAccountAnalyticsError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link BundleSocialError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  analyticsGetSocialAccountAnalytics(
    request: Analytics.AnalyticsGetSocialAccountAnalyticsRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV1AnalyticsSocialAccountResponse, Analytics.AnalyticsGetSocialAccountAnalyticsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/analytics/social-account"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [
          { name: "teamId", value: request.teamId, schema: s.string() },
          { name: "platformType", value: request.platformType, schema: platformTypeSchema },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: apiV1AnalyticsSocialAccountResponseSchema },
        errorFactory: Analytics.AnalyticsGetSocialAccountAnalyticsError,
      },
      options,
    );
  }

  /**
   * Get Social Account Analytics Raw
   *
   * @remarks
   * Retrieve social account analytics exactly as returned by the social platform, without
   * bundle.social's normalization. Use this when you need a platform-specific metric that the
   * normalized response does not expose.
   *
   * @returns 200
   *
   * @throws {@link Analytics.AnalyticsGetSocialAccountAnalyticsRawError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link BundleSocialError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  analyticsGetSocialAccountAnalyticsRaw(
    request: Analytics.AnalyticsGetSocialAccountAnalyticsRawRequest,
    options?: RequestOptions,
  ): ApiPromise<
    ApiV1AnalyticsSocialAccountRawResponse,
    Analytics.AnalyticsGetSocialAccountAnalyticsRawError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/analytics/social-account/raw"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [
          { name: "teamId", value: request.teamId, schema: s.string() },
          { name: "platformType", value: request.platformType, schema: platformTypeSchema },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: apiV1AnalyticsSocialAccountRawResponseSchema },
        errorFactory: Analytics.AnalyticsGetSocialAccountAnalyticsRawError,
      },
      options,
    );
  }
}

export namespace Analytics {
  export type AnalyticsForcePostAnalyticsRequest = {
    /** Body */
    body?: ApiV1AnalyticsPostForceRequest;
  };

  export class AnalyticsForcePostAnalyticsError extends ApiError {
    declare readonly payload:
      | Declared<"apiV1AnalyticsPostForce400Error1", ApiV1AnalyticsPostForce400Error1>
      | Declared<"apiV1AnalyticsPostForce401Error1", ApiV1AnalyticsPostForce401Error1>
      | Declared<"apiV1AnalyticsPostForce403Error1", ApiV1AnalyticsPostForce403Error1>
      | Declared<"apiV1AnalyticsPostForce404Error1", ApiV1AnalyticsPostForce404Error1>
      | Declared<"apiV1AnalyticsPostForce429Error1", ApiV1AnalyticsPostForce429Error1>
      | Declared<"apiV1AnalyticsPostForce500Error1", ApiV1AnalyticsPostForce500Error1>
      | Declared<"apiV1AnalyticsPostForce502Error1", ApiV1AnalyticsPostForce502Error1>
      | Declared<"apiV1AnalyticsPostForce503Error1", ApiV1AnalyticsPostForce503Error1>
      | Declared<"apiV1AnalyticsPostForce504Error1", ApiV1AnalyticsPostForce504Error1>
      | Undeclared;

    static readonly errors: ErrorDecoders<AnalyticsForcePostAnalyticsError> = [
      {
        on: 400,
        kind: "apiV1AnalyticsPostForce400Error1",
        decode: { kind: "json", schema: apiV1AnalyticsPostForce400Error1Schema },
      },
      {
        on: 401,
        kind: "apiV1AnalyticsPostForce401Error1",
        decode: { kind: "json", schema: apiV1AnalyticsPostForce401Error1Schema },
      },
      {
        on: 403,
        kind: "apiV1AnalyticsPostForce403Error1",
        decode: { kind: "json", schema: apiV1AnalyticsPostForce403Error1Schema },
      },
      {
        on: 404,
        kind: "apiV1AnalyticsPostForce404Error1",
        decode: { kind: "json", schema: apiV1AnalyticsPostForce404Error1Schema },
      },
      {
        on: 429,
        kind: "apiV1AnalyticsPostForce429Error1",
        decode: { kind: "json", schema: apiV1AnalyticsPostForce429Error1Schema },
      },
      {
        on: 500,
        kind: "apiV1AnalyticsPostForce500Error1",
        decode: { kind: "json", schema: apiV1AnalyticsPostForce500Error1Schema },
      },
      {
        on: 502,
        kind: "apiV1AnalyticsPostForce502Error1",
        decode: { kind: "json", schema: apiV1AnalyticsPostForce502Error1Schema },
      },
      {
        on: 503,
        kind: "apiV1AnalyticsPostForce503Error1",
        decode: { kind: "json", schema: apiV1AnalyticsPostForce503Error1Schema },
      },
      {
        on: 504,
        kind: "apiV1AnalyticsPostForce504Error1",
        decode: { kind: "json", schema: apiV1AnalyticsPostForce504Error1Schema },
      },
    ];
  }

  export type AnalyticsForceSocialAccountAnalyticsRequest = {
    /** Body */
    body?: ApiV1AnalyticsSocialAccountForceRequest;
  };

  export class AnalyticsForceSocialAccountAnalyticsError extends ApiError {
    declare readonly payload:
      | Declared<"apiV1AnalyticsSocialAccountForce400Error1", ApiV1AnalyticsSocialAccountForce400Error1>
      | Declared<"apiV1AnalyticsSocialAccountForce401Error1", ApiV1AnalyticsSocialAccountForce401Error1>
      | Declared<"apiV1AnalyticsSocialAccountForce403Error1", ApiV1AnalyticsSocialAccountForce403Error1>
      | Declared<"apiV1AnalyticsSocialAccountForce404Error1", ApiV1AnalyticsSocialAccountForce404Error1>
      | Declared<"apiV1AnalyticsSocialAccountForce429Error1", ApiV1AnalyticsSocialAccountForce429Error1>
      | Declared<"apiV1AnalyticsSocialAccountForce500Error1", ApiV1AnalyticsSocialAccountForce500Error1>
      | Declared<"apiV1AnalyticsSocialAccountForce502Error1", ApiV1AnalyticsSocialAccountForce502Error1>
      | Declared<"apiV1AnalyticsSocialAccountForce503Error1", ApiV1AnalyticsSocialAccountForce503Error1>
      | Declared<"apiV1AnalyticsSocialAccountForce504Error1", ApiV1AnalyticsSocialAccountForce504Error1>
      | Undeclared;

    static readonly errors: ErrorDecoders<AnalyticsForceSocialAccountAnalyticsError> = [
      {
        on: 400,
        kind: "apiV1AnalyticsSocialAccountForce400Error1",
        decode: { kind: "json", schema: apiV1AnalyticsSocialAccountForce400Error1Schema },
      },
      {
        on: 401,
        kind: "apiV1AnalyticsSocialAccountForce401Error1",
        decode: { kind: "json", schema: apiV1AnalyticsSocialAccountForce401Error1Schema },
      },
      {
        on: 403,
        kind: "apiV1AnalyticsSocialAccountForce403Error1",
        decode: { kind: "json", schema: apiV1AnalyticsSocialAccountForce403Error1Schema },
      },
      {
        on: 404,
        kind: "apiV1AnalyticsSocialAccountForce404Error1",
        decode: { kind: "json", schema: apiV1AnalyticsSocialAccountForce404Error1Schema },
      },
      {
        on: 429,
        kind: "apiV1AnalyticsSocialAccountForce429Error1",
        decode: { kind: "json", schema: apiV1AnalyticsSocialAccountForce429Error1Schema },
      },
      {
        on: 500,
        kind: "apiV1AnalyticsSocialAccountForce500Error1",
        decode: { kind: "json", schema: apiV1AnalyticsSocialAccountForce500Error1Schema },
      },
      {
        on: 502,
        kind: "apiV1AnalyticsSocialAccountForce502Error1",
        decode: { kind: "json", schema: apiV1AnalyticsSocialAccountForce502Error1Schema },
      },
      {
        on: 503,
        kind: "apiV1AnalyticsSocialAccountForce503Error1",
        decode: { kind: "json", schema: apiV1AnalyticsSocialAccountForce503Error1Schema },
      },
      {
        on: 504,
        kind: "apiV1AnalyticsSocialAccountForce504Error1",
        decode: { kind: "json", schema: apiV1AnalyticsSocialAccountForce504Error1Schema },
      },
    ];
  }

  export type AnalyticsGetBulkPostAnalyticsRequest = {
    postIds: string[];
    platformType: PlatformType;
    /** @default 1 */
    page?: number;
    /** @default 20 */
    limit?: number;
  };

  export const analyticsGetBulkPostAnalyticsRequestSchema: Schema<AnalyticsGetBulkPostAnalyticsRequest> =
    s.lazySchema(() =>
      s.object<AnalyticsGetBulkPostAnalyticsRequest>({
        postIds: s.array(s.string()).check(s.minLength(1), s.maxLength(60)),
        platformType: platformTypeSchema,
        page: s.defaulted(s.float64().check(s.gte(1)), 1),
        limit: s.defaulted(s.float64().check(s.gte(1), s.lte(20)), 20),
      }),
    );

  export class AnalyticsGetBulkPostAnalyticsError extends ApiError {
    declare readonly payload:
      | Declared<"apiV1AnalyticsPostBulk400Error1", ApiV1AnalyticsPostBulk400Error1>
      | Declared<"apiV1AnalyticsPostBulk401Error1", ApiV1AnalyticsPostBulk401Error1>
      | Declared<"apiV1AnalyticsPostBulk403Error1", ApiV1AnalyticsPostBulk403Error1>
      | Declared<"apiV1AnalyticsPostBulk404Error1", ApiV1AnalyticsPostBulk404Error1>
      | Declared<"apiV1AnalyticsPostBulk429Error1", ApiV1AnalyticsPostBulk429Error1>
      | Declared<"apiV1AnalyticsPostBulk500Error1", ApiV1AnalyticsPostBulk500Error1>
      | Declared<"apiV1AnalyticsPostBulk502Error1", ApiV1AnalyticsPostBulk502Error1>
      | Declared<"apiV1AnalyticsPostBulk503Error1", ApiV1AnalyticsPostBulk503Error1>
      | Declared<"apiV1AnalyticsPostBulk504Error1", ApiV1AnalyticsPostBulk504Error1>
      | Undeclared;

    static readonly errors: ErrorDecoders<AnalyticsGetBulkPostAnalyticsError> = [
      {
        on: 400,
        kind: "apiV1AnalyticsPostBulk400Error1",
        decode: { kind: "json", schema: apiV1AnalyticsPostBulk400Error1Schema },
      },
      {
        on: 401,
        kind: "apiV1AnalyticsPostBulk401Error1",
        decode: { kind: "json", schema: apiV1AnalyticsPostBulk401Error1Schema },
      },
      {
        on: 403,
        kind: "apiV1AnalyticsPostBulk403Error1",
        decode: { kind: "json", schema: apiV1AnalyticsPostBulk403Error1Schema },
      },
      {
        on: 404,
        kind: "apiV1AnalyticsPostBulk404Error1",
        decode: { kind: "json", schema: apiV1AnalyticsPostBulk404Error1Schema },
      },
      {
        on: 429,
        kind: "apiV1AnalyticsPostBulk429Error1",
        decode: { kind: "json", schema: apiV1AnalyticsPostBulk429Error1Schema },
      },
      {
        on: 500,
        kind: "apiV1AnalyticsPostBulk500Error1",
        decode: { kind: "json", schema: apiV1AnalyticsPostBulk500Error1Schema },
      },
      {
        on: 502,
        kind: "apiV1AnalyticsPostBulk502Error1",
        decode: { kind: "json", schema: apiV1AnalyticsPostBulk502Error1Schema },
      },
      {
        on: 503,
        kind: "apiV1AnalyticsPostBulk503Error1",
        decode: { kind: "json", schema: apiV1AnalyticsPostBulk503Error1Schema },
      },
      {
        on: 504,
        kind: "apiV1AnalyticsPostBulk504Error1",
        decode: { kind: "json", schema: apiV1AnalyticsPostBulk504Error1Schema },
      },
    ];
  }

  export type AnalyticsGetPostAnalyticsRequest = {
    postId?: string | null;
    platformType?: PlatformType | null;
    importedPostId?: string | null;
  };

  export class AnalyticsGetPostAnalyticsError extends ApiError {
    declare readonly payload:
      | Declared<"apiV1AnalyticsPost400Error1", ApiV1AnalyticsPost400Error1>
      | Declared<"apiV1AnalyticsPost401Error1", ApiV1AnalyticsPost401Error1>
      | Declared<"apiV1AnalyticsPost403Error1", ApiV1AnalyticsPost403Error1>
      | Declared<"apiV1AnalyticsPost404Error1", ApiV1AnalyticsPost404Error1>
      | Declared<"apiV1AnalyticsPost429Error1", ApiV1AnalyticsPost429Error1>
      | Declared<"apiV1AnalyticsPost500Error1", ApiV1AnalyticsPost500Error1>
      | Declared<"apiV1AnalyticsPost502Error1", ApiV1AnalyticsPost502Error1>
      | Declared<"apiV1AnalyticsPost503Error1", ApiV1AnalyticsPost503Error1>
      | Declared<"apiV1AnalyticsPost504Error1", ApiV1AnalyticsPost504Error1>
      | Undeclared;

    static readonly errors: ErrorDecoders<AnalyticsGetPostAnalyticsError> = [
      {
        on: 400,
        kind: "apiV1AnalyticsPost400Error1",
        decode: { kind: "json", schema: apiV1AnalyticsPost400Error1Schema },
      },
      {
        on: 401,
        kind: "apiV1AnalyticsPost401Error1",
        decode: { kind: "json", schema: apiV1AnalyticsPost401Error1Schema },
      },
      {
        on: 403,
        kind: "apiV1AnalyticsPost403Error1",
        decode: { kind: "json", schema: apiV1AnalyticsPost403Error1Schema },
      },
      {
        on: 404,
        kind: "apiV1AnalyticsPost404Error1",
        decode: { kind: "json", schema: apiV1AnalyticsPost404Error1Schema },
      },
      {
        on: 429,
        kind: "apiV1AnalyticsPost429Error1",
        decode: { kind: "json", schema: apiV1AnalyticsPost429Error1Schema },
      },
      {
        on: 500,
        kind: "apiV1AnalyticsPost500Error1",
        decode: { kind: "json", schema: apiV1AnalyticsPost500Error1Schema },
      },
      {
        on: 502,
        kind: "apiV1AnalyticsPost502Error1",
        decode: { kind: "json", schema: apiV1AnalyticsPost502Error1Schema },
      },
      {
        on: 503,
        kind: "apiV1AnalyticsPost503Error1",
        decode: { kind: "json", schema: apiV1AnalyticsPost503Error1Schema },
      },
      {
        on: 504,
        kind: "apiV1AnalyticsPost504Error1",
        decode: { kind: "json", schema: apiV1AnalyticsPost504Error1Schema },
      },
    ];
  }

  export type AnalyticsGetPostAnalyticsRawRequest = {
    postId?: string | null;
    platformType?: PlatformType | null;
    importedPostId?: string | null;
  };

  export class AnalyticsGetPostAnalyticsRawError extends ApiError {
    declare readonly payload:
      | Declared<"apiV1AnalyticsPostRaw400Error1", ApiV1AnalyticsPostRaw400Error1>
      | Declared<"apiV1AnalyticsPostRaw401Error1", ApiV1AnalyticsPostRaw401Error1>
      | Declared<"apiV1AnalyticsPostRaw403Error1", ApiV1AnalyticsPostRaw403Error1>
      | Declared<"apiV1AnalyticsPostRaw404Error1", ApiV1AnalyticsPostRaw404Error1>
      | Declared<"apiV1AnalyticsPostRaw429Error1", ApiV1AnalyticsPostRaw429Error1>
      | Declared<"apiV1AnalyticsPostRaw500Error1", ApiV1AnalyticsPostRaw500Error1>
      | Declared<"apiV1AnalyticsPostRaw502Error1", ApiV1AnalyticsPostRaw502Error1>
      | Declared<"apiV1AnalyticsPostRaw503Error1", ApiV1AnalyticsPostRaw503Error1>
      | Declared<"apiV1AnalyticsPostRaw504Error1", ApiV1AnalyticsPostRaw504Error1>
      | Undeclared;

    static readonly errors: ErrorDecoders<AnalyticsGetPostAnalyticsRawError> = [
      {
        on: 400,
        kind: "apiV1AnalyticsPostRaw400Error1",
        decode: { kind: "json", schema: apiV1AnalyticsPostRaw400Error1Schema },
      },
      {
        on: 401,
        kind: "apiV1AnalyticsPostRaw401Error1",
        decode: { kind: "json", schema: apiV1AnalyticsPostRaw401Error1Schema },
      },
      {
        on: 403,
        kind: "apiV1AnalyticsPostRaw403Error1",
        decode: { kind: "json", schema: apiV1AnalyticsPostRaw403Error1Schema },
      },
      {
        on: 404,
        kind: "apiV1AnalyticsPostRaw404Error1",
        decode: { kind: "json", schema: apiV1AnalyticsPostRaw404Error1Schema },
      },
      {
        on: 429,
        kind: "apiV1AnalyticsPostRaw429Error1",
        decode: { kind: "json", schema: apiV1AnalyticsPostRaw429Error1Schema },
      },
      {
        on: 500,
        kind: "apiV1AnalyticsPostRaw500Error1",
        decode: { kind: "json", schema: apiV1AnalyticsPostRaw500Error1Schema },
      },
      {
        on: 502,
        kind: "apiV1AnalyticsPostRaw502Error1",
        decode: { kind: "json", schema: apiV1AnalyticsPostRaw502Error1Schema },
      },
      {
        on: 503,
        kind: "apiV1AnalyticsPostRaw503Error1",
        decode: { kind: "json", schema: apiV1AnalyticsPostRaw503Error1Schema },
      },
      {
        on: 504,
        kind: "apiV1AnalyticsPostRaw504Error1",
        decode: { kind: "json", schema: apiV1AnalyticsPostRaw504Error1Schema },
      },
    ];
  }

  export type AnalyticsGetSocialAccountAnalyticsRequest = {
    teamId: string;
    platformType: PlatformType;
  };

  export class AnalyticsGetSocialAccountAnalyticsError extends ApiError {
    declare readonly payload:
      | Declared<"apiV1AnalyticsSocialAccount400Error1", ApiV1AnalyticsSocialAccount400Error1>
      | Declared<"apiV1AnalyticsSocialAccount401Error1", ApiV1AnalyticsSocialAccount401Error1>
      | Declared<"apiV1AnalyticsSocialAccount403Error1", ApiV1AnalyticsSocialAccount403Error1>
      | Declared<"apiV1AnalyticsSocialAccount404Error1", ApiV1AnalyticsSocialAccount404Error1>
      | Declared<"apiV1AnalyticsSocialAccount429Error1", ApiV1AnalyticsSocialAccount429Error1>
      | Declared<"apiV1AnalyticsSocialAccount500Error1", ApiV1AnalyticsSocialAccount500Error1>
      | Declared<"apiV1AnalyticsSocialAccount502Error1", ApiV1AnalyticsSocialAccount502Error1>
      | Declared<"apiV1AnalyticsSocialAccount503Error1", ApiV1AnalyticsSocialAccount503Error1>
      | Declared<"apiV1AnalyticsSocialAccount504Error1", ApiV1AnalyticsSocialAccount504Error1>
      | Undeclared;

    static readonly errors: ErrorDecoders<AnalyticsGetSocialAccountAnalyticsError> = [
      {
        on: 400,
        kind: "apiV1AnalyticsSocialAccount400Error1",
        decode: { kind: "json", schema: apiV1AnalyticsSocialAccount400Error1Schema },
      },
      {
        on: 401,
        kind: "apiV1AnalyticsSocialAccount401Error1",
        decode: { kind: "json", schema: apiV1AnalyticsSocialAccount401Error1Schema },
      },
      {
        on: 403,
        kind: "apiV1AnalyticsSocialAccount403Error1",
        decode: { kind: "json", schema: apiV1AnalyticsSocialAccount403Error1Schema },
      },
      {
        on: 404,
        kind: "apiV1AnalyticsSocialAccount404Error1",
        decode: { kind: "json", schema: apiV1AnalyticsSocialAccount404Error1Schema },
      },
      {
        on: 429,
        kind: "apiV1AnalyticsSocialAccount429Error1",
        decode: { kind: "json", schema: apiV1AnalyticsSocialAccount429Error1Schema },
      },
      {
        on: 500,
        kind: "apiV1AnalyticsSocialAccount500Error1",
        decode: { kind: "json", schema: apiV1AnalyticsSocialAccount500Error1Schema },
      },
      {
        on: 502,
        kind: "apiV1AnalyticsSocialAccount502Error1",
        decode: { kind: "json", schema: apiV1AnalyticsSocialAccount502Error1Schema },
      },
      {
        on: 503,
        kind: "apiV1AnalyticsSocialAccount503Error1",
        decode: { kind: "json", schema: apiV1AnalyticsSocialAccount503Error1Schema },
      },
      {
        on: 504,
        kind: "apiV1AnalyticsSocialAccount504Error1",
        decode: { kind: "json", schema: apiV1AnalyticsSocialAccount504Error1Schema },
      },
    ];
  }

  export type AnalyticsGetSocialAccountAnalyticsRawRequest = {
    teamId: string;
    platformType: PlatformType;
  };

  export class AnalyticsGetSocialAccountAnalyticsRawError extends ApiError {
    declare readonly payload:
      | Declared<"apiV1AnalyticsSocialAccountRaw400Error1", ApiV1AnalyticsSocialAccountRaw400Error1>
      | Declared<"apiV1AnalyticsSocialAccountRaw401Error1", ApiV1AnalyticsSocialAccountRaw401Error1>
      | Declared<"apiV1AnalyticsSocialAccountRaw403Error1", ApiV1AnalyticsSocialAccountRaw403Error1>
      | Declared<"apiV1AnalyticsSocialAccountRaw404Error1", ApiV1AnalyticsSocialAccountRaw404Error1>
      | Declared<"apiV1AnalyticsSocialAccountRaw429Error1", ApiV1AnalyticsSocialAccountRaw429Error1>
      | Declared<"apiV1AnalyticsSocialAccountRaw500Error1", ApiV1AnalyticsSocialAccountRaw500Error1>
      | Declared<"apiV1AnalyticsSocialAccountRaw502Error1", ApiV1AnalyticsSocialAccountRaw502Error1>
      | Declared<"apiV1AnalyticsSocialAccountRaw503Error1", ApiV1AnalyticsSocialAccountRaw503Error1>
      | Declared<"apiV1AnalyticsSocialAccountRaw504Error1", ApiV1AnalyticsSocialAccountRaw504Error1>
      | Undeclared;

    static readonly errors: ErrorDecoders<AnalyticsGetSocialAccountAnalyticsRawError> = [
      {
        on: 400,
        kind: "apiV1AnalyticsSocialAccountRaw400Error1",
        decode: { kind: "json", schema: apiV1AnalyticsSocialAccountRaw400Error1Schema },
      },
      {
        on: 401,
        kind: "apiV1AnalyticsSocialAccountRaw401Error1",
        decode: { kind: "json", schema: apiV1AnalyticsSocialAccountRaw401Error1Schema },
      },
      {
        on: 403,
        kind: "apiV1AnalyticsSocialAccountRaw403Error1",
        decode: { kind: "json", schema: apiV1AnalyticsSocialAccountRaw403Error1Schema },
      },
      {
        on: 404,
        kind: "apiV1AnalyticsSocialAccountRaw404Error1",
        decode: { kind: "json", schema: apiV1AnalyticsSocialAccountRaw404Error1Schema },
      },
      {
        on: 429,
        kind: "apiV1AnalyticsSocialAccountRaw429Error1",
        decode: { kind: "json", schema: apiV1AnalyticsSocialAccountRaw429Error1Schema },
      },
      {
        on: 500,
        kind: "apiV1AnalyticsSocialAccountRaw500Error1",
        decode: { kind: "json", schema: apiV1AnalyticsSocialAccountRaw500Error1Schema },
      },
      {
        on: 502,
        kind: "apiV1AnalyticsSocialAccountRaw502Error1",
        decode: { kind: "json", schema: apiV1AnalyticsSocialAccountRaw502Error1Schema },
      },
      {
        on: 503,
        kind: "apiV1AnalyticsSocialAccountRaw503Error1",
        decode: { kind: "json", schema: apiV1AnalyticsSocialAccountRaw503Error1Schema },
      },
      {
        on: 504,
        kind: "apiV1AnalyticsSocialAccountRaw504Error1",
        decode: { kind: "json", schema: apiV1AnalyticsSocialAccountRaw504Error1Schema },
      },
    ];
  }
}
