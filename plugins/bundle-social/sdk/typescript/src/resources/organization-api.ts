import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  apiV1OrganizationResponseInternalSchema,
  type ApiV1OrganizationResponse,
} from "../models/api-v1-organization-response.js";
import {
  apiV1OrganizationUsageCommentsResponseSchema,
  type ApiV1OrganizationUsageCommentsResponse,
} from "../models/api-v1-organization-usage-comments-response.js";
import {
  apiV1OrganizationUsageComments400Error1Schema,
  type ApiV1OrganizationUsageComments400Error1,
} from "../models/api-v1-organization-usage-comments400-error1.js";
import {
  apiV1OrganizationUsageComments401Error1Schema,
  type ApiV1OrganizationUsageComments401Error1,
} from "../models/api-v1-organization-usage-comments401-error1.js";
import {
  apiV1OrganizationUsageComments403Error1Schema,
  type ApiV1OrganizationUsageComments403Error1,
} from "../models/api-v1-organization-usage-comments403-error1.js";
import {
  apiV1OrganizationUsageComments404Error1Schema,
  type ApiV1OrganizationUsageComments404Error1,
} from "../models/api-v1-organization-usage-comments404-error1.js";
import {
  apiV1OrganizationUsageComments429Error1Schema,
  type ApiV1OrganizationUsageComments429Error1,
} from "../models/api-v1-organization-usage-comments429-error1.js";
import {
  apiV1OrganizationUsageComments500Error1Schema,
  type ApiV1OrganizationUsageComments500Error1,
} from "../models/api-v1-organization-usage-comments500-error1.js";
import {
  apiV1OrganizationUsageComments502Error1Schema,
  type ApiV1OrganizationUsageComments502Error1,
} from "../models/api-v1-organization-usage-comments502-error1.js";
import {
  apiV1OrganizationUsageComments503Error1Schema,
  type ApiV1OrganizationUsageComments503Error1,
} from "../models/api-v1-organization-usage-comments503-error1.js";
import {
  apiV1OrganizationUsageComments504Error1Schema,
  type ApiV1OrganizationUsageComments504Error1,
} from "../models/api-v1-organization-usage-comments504-error1.js";
import {
  apiV1OrganizationUsageDailyLimitsResponseSchema,
  type ApiV1OrganizationUsageDailyLimitsResponse,
} from "../models/api-v1-organization-usage-daily-limits-response.js";
import {
  apiV1OrganizationUsageDailyLimits400Error1Schema,
  type ApiV1OrganizationUsageDailyLimits400Error1,
} from "../models/api-v1-organization-usage-daily-limits400-error1.js";
import {
  apiV1OrganizationUsageDailyLimits401Error1Schema,
  type ApiV1OrganizationUsageDailyLimits401Error1,
} from "../models/api-v1-organization-usage-daily-limits401-error1.js";
import {
  apiV1OrganizationUsageDailyLimits403Error1Schema,
  type ApiV1OrganizationUsageDailyLimits403Error1,
} from "../models/api-v1-organization-usage-daily-limits403-error1.js";
import {
  apiV1OrganizationUsageDailyLimits404Error1Schema,
  type ApiV1OrganizationUsageDailyLimits404Error1,
} from "../models/api-v1-organization-usage-daily-limits404-error1.js";
import {
  apiV1OrganizationUsageDailyLimits429Error1Schema,
  type ApiV1OrganizationUsageDailyLimits429Error1,
} from "../models/api-v1-organization-usage-daily-limits429-error1.js";
import {
  apiV1OrganizationUsageDailyLimits500Error1Schema,
  type ApiV1OrganizationUsageDailyLimits500Error1,
} from "../models/api-v1-organization-usage-daily-limits500-error1.js";
import {
  apiV1OrganizationUsageDailyLimits502Error1Schema,
  type ApiV1OrganizationUsageDailyLimits502Error1,
} from "../models/api-v1-organization-usage-daily-limits502-error1.js";
import {
  apiV1OrganizationUsageDailyLimits503Error1Schema,
  type ApiV1OrganizationUsageDailyLimits503Error1,
} from "../models/api-v1-organization-usage-daily-limits503-error1.js";
import {
  apiV1OrganizationUsageDailyLimits504Error1Schema,
  type ApiV1OrganizationUsageDailyLimits504Error1,
} from "../models/api-v1-organization-usage-daily-limits504-error1.js";
import {
  apiV1OrganizationUsageImportsResponseSchema,
  type ApiV1OrganizationUsageImportsResponse,
} from "../models/api-v1-organization-usage-imports-response.js";
import {
  apiV1OrganizationUsageImports400Error1Schema,
  type ApiV1OrganizationUsageImports400Error1,
} from "../models/api-v1-organization-usage-imports400-error1.js";
import {
  apiV1OrganizationUsageImports401Error1Schema,
  type ApiV1OrganizationUsageImports401Error1,
} from "../models/api-v1-organization-usage-imports401-error1.js";
import {
  apiV1OrganizationUsageImports403Error1Schema,
  type ApiV1OrganizationUsageImports403Error1,
} from "../models/api-v1-organization-usage-imports403-error1.js";
import {
  apiV1OrganizationUsageImports404Error1Schema,
  type ApiV1OrganizationUsageImports404Error1,
} from "../models/api-v1-organization-usage-imports404-error1.js";
import {
  apiV1OrganizationUsageImports429Error1Schema,
  type ApiV1OrganizationUsageImports429Error1,
} from "../models/api-v1-organization-usage-imports429-error1.js";
import {
  apiV1OrganizationUsageImports500Error1Schema,
  type ApiV1OrganizationUsageImports500Error1,
} from "../models/api-v1-organization-usage-imports500-error1.js";
import {
  apiV1OrganizationUsageImports502Error1Schema,
  type ApiV1OrganizationUsageImports502Error1,
} from "../models/api-v1-organization-usage-imports502-error1.js";
import {
  apiV1OrganizationUsageImports503Error1Schema,
  type ApiV1OrganizationUsageImports503Error1,
} from "../models/api-v1-organization-usage-imports503-error1.js";
import {
  apiV1OrganizationUsageImports504Error1Schema,
  type ApiV1OrganizationUsageImports504Error1,
} from "../models/api-v1-organization-usage-imports504-error1.js";
import {
  apiV1OrganizationUsageMessagesResponseSchema,
  type ApiV1OrganizationUsageMessagesResponse,
} from "../models/api-v1-organization-usage-messages-response.js";
import {
  apiV1OrganizationUsageMessages400Error1Schema,
  type ApiV1OrganizationUsageMessages400Error1,
} from "../models/api-v1-organization-usage-messages400-error1.js";
import {
  apiV1OrganizationUsageMessages401Error1Schema,
  type ApiV1OrganizationUsageMessages401Error1,
} from "../models/api-v1-organization-usage-messages401-error1.js";
import {
  apiV1OrganizationUsageMessages403Error1Schema,
  type ApiV1OrganizationUsageMessages403Error1,
} from "../models/api-v1-organization-usage-messages403-error1.js";
import {
  apiV1OrganizationUsageMessages404Error1Schema,
  type ApiV1OrganizationUsageMessages404Error1,
} from "../models/api-v1-organization-usage-messages404-error1.js";
import {
  apiV1OrganizationUsageMessages429Error1Schema,
  type ApiV1OrganizationUsageMessages429Error1,
} from "../models/api-v1-organization-usage-messages429-error1.js";
import {
  apiV1OrganizationUsageMessages500Error1Schema,
  type ApiV1OrganizationUsageMessages500Error1,
} from "../models/api-v1-organization-usage-messages500-error1.js";
import {
  apiV1OrganizationUsageMessages502Error1Schema,
  type ApiV1OrganizationUsageMessages502Error1,
} from "../models/api-v1-organization-usage-messages502-error1.js";
import {
  apiV1OrganizationUsageMessages503Error1Schema,
  type ApiV1OrganizationUsageMessages503Error1,
} from "../models/api-v1-organization-usage-messages503-error1.js";
import {
  apiV1OrganizationUsageMessages504Error1Schema,
  type ApiV1OrganizationUsageMessages504Error1,
} from "../models/api-v1-organization-usage-messages504-error1.js";
import {
  apiV1OrganizationUsagePostsResponseSchema,
  type ApiV1OrganizationUsagePostsResponse,
} from "../models/api-v1-organization-usage-posts-response.js";
import {
  apiV1OrganizationUsagePosts400Error1Schema,
  type ApiV1OrganizationUsagePosts400Error1,
} from "../models/api-v1-organization-usage-posts400-error1.js";
import {
  apiV1OrganizationUsagePosts401Error1Schema,
  type ApiV1OrganizationUsagePosts401Error1,
} from "../models/api-v1-organization-usage-posts401-error1.js";
import {
  apiV1OrganizationUsagePosts403Error1Schema,
  type ApiV1OrganizationUsagePosts403Error1,
} from "../models/api-v1-organization-usage-posts403-error1.js";
import {
  apiV1OrganizationUsagePosts404Error1Schema,
  type ApiV1OrganizationUsagePosts404Error1,
} from "../models/api-v1-organization-usage-posts404-error1.js";
import {
  apiV1OrganizationUsagePosts429Error1Schema,
  type ApiV1OrganizationUsagePosts429Error1,
} from "../models/api-v1-organization-usage-posts429-error1.js";
import {
  apiV1OrganizationUsagePosts500Error1Schema,
  type ApiV1OrganizationUsagePosts500Error1,
} from "../models/api-v1-organization-usage-posts500-error1.js";
import {
  apiV1OrganizationUsagePosts502Error1Schema,
  type ApiV1OrganizationUsagePosts502Error1,
} from "../models/api-v1-organization-usage-posts502-error1.js";
import {
  apiV1OrganizationUsagePosts503Error1Schema,
  type ApiV1OrganizationUsagePosts503Error1,
} from "../models/api-v1-organization-usage-posts503-error1.js";
import {
  apiV1OrganizationUsagePosts504Error1Schema,
  type ApiV1OrganizationUsagePosts504Error1,
} from "../models/api-v1-organization-usage-posts504-error1.js";
import {
  apiV1OrganizationUsageUploadsResponseSchema,
  type ApiV1OrganizationUsageUploadsResponse,
} from "../models/api-v1-organization-usage-uploads-response.js";
import {
  apiV1OrganizationUsageUploads400Error1Schema,
  type ApiV1OrganizationUsageUploads400Error1,
} from "../models/api-v1-organization-usage-uploads400-error1.js";
import {
  apiV1OrganizationUsageUploads401Error1Schema,
  type ApiV1OrganizationUsageUploads401Error1,
} from "../models/api-v1-organization-usage-uploads401-error1.js";
import {
  apiV1OrganizationUsageUploads403Error1Schema,
  type ApiV1OrganizationUsageUploads403Error1,
} from "../models/api-v1-organization-usage-uploads403-error1.js";
import {
  apiV1OrganizationUsageUploads404Error1Schema,
  type ApiV1OrganizationUsageUploads404Error1,
} from "../models/api-v1-organization-usage-uploads404-error1.js";
import {
  apiV1OrganizationUsageUploads429Error1Schema,
  type ApiV1OrganizationUsageUploads429Error1,
} from "../models/api-v1-organization-usage-uploads429-error1.js";
import {
  apiV1OrganizationUsageUploads500Error1Schema,
  type ApiV1OrganizationUsageUploads500Error1,
} from "../models/api-v1-organization-usage-uploads500-error1.js";
import {
  apiV1OrganizationUsageUploads502Error1Schema,
  type ApiV1OrganizationUsageUploads502Error1,
} from "../models/api-v1-organization-usage-uploads502-error1.js";
import {
  apiV1OrganizationUsageUploads503Error1Schema,
  type ApiV1OrganizationUsageUploads503Error1,
} from "../models/api-v1-organization-usage-uploads503-error1.js";
import {
  apiV1OrganizationUsageUploads504Error1Schema,
  type ApiV1OrganizationUsageUploads504Error1,
} from "../models/api-v1-organization-usage-uploads504-error1.js";
import {
  apiV1Organization400Error1Schema,
  type ApiV1Organization400Error1,
} from "../models/api-v1-organization400-error1.js";
import {
  apiV1Organization401Error1Schema,
  type ApiV1Organization401Error1,
} from "../models/api-v1-organization401-error1.js";
import {
  apiV1Organization403Error1Schema,
  type ApiV1Organization403Error1,
} from "../models/api-v1-organization403-error1.js";
import {
  apiV1Organization404Error1Schema,
  type ApiV1Organization404Error1,
} from "../models/api-v1-organization404-error1.js";
import {
  apiV1Organization429Error1Schema,
  type ApiV1Organization429Error1,
} from "../models/api-v1-organization429-error1.js";
import {
  apiV1Organization500Error1Schema,
  type ApiV1Organization500Error1,
} from "../models/api-v1-organization500-error1.js";
import {
  apiV1Organization502Error1Schema,
  type ApiV1Organization502Error1,
} from "../models/api-v1-organization502-error1.js";
import {
  apiV1Organization503Error1Schema,
  type ApiV1Organization503Error1,
} from "../models/api-v1-organization503-error1.js";
import {
  apiV1Organization504Error1Schema,
  type ApiV1Organization504Error1,
} from "../models/api-v1-organization504-error1.js";
import {
  socialAccountTypeBundleSocialOrganizationApiSchema,
  type SocialAccountTypeBundleSocialOrganizationApi,
} from "../models/social-account-type-bundle-social-organization-api.js";
import {
  socialAccountType1BundleSocialOrganizationApiSchema,
  type SocialAccountType1BundleSocialOrganizationApi,
} from "../models/social-account-type1-bundle-social-organization-api.js";
import type { Servers } from "../servers.js";

export class OrganizationApi {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Get organization comments usage
   *
   * @remarks
   * See how many comments your organization has consumed against its plan limit for the current
   * billing period.
   *
   * @returns 200
   *
   * @throws {@link OrganizationApi.OrganizationGetCommentsUsageError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link BundleSocialError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  organizationGetCommentsUsage(
    options?: RequestOptions,
  ): ApiPromise<ApiV1OrganizationUsageCommentsResponse, OrganizationApi.OrganizationGetCommentsUsageError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/organization/usage/comments"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: apiV1OrganizationUsageCommentsResponseSchema },
        errorFactory: OrganizationApi.OrganizationGetCommentsUsageError,
      },
      options,
    );
  }

  /**
   * Get daily limits usage for one social account on a given day
   *
   * @remarks
   * Check how many posts a single social account has already published on a specific day versus the
   * platform's own daily cap. Use this to avoid hitting platform-side publishing limits.
   *
   * @returns 200
   *
   * @throws {@link OrganizationApi.OrganizationGetDailyLimitsUsageError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link BundleSocialError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  organizationGetDailyLimitsUsage(
    request: OrganizationApi.OrganizationGetDailyLimitsUsageRequest,
    options?: RequestOptions,
  ): ApiPromise<
    ApiV1OrganizationUsageDailyLimitsResponse,
    OrganizationApi.OrganizationGetDailyLimitsUsageError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/organization/usage/daily-limits"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [
          { name: "socialAccountId", value: request.socialAccountId, schema: s.string() },
          { name: "date", value: request.date, schema: s.optionalNullable(s.dateTime()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: apiV1OrganizationUsageDailyLimitsResponseSchema },
        errorFactory: OrganizationApi.OrganizationGetDailyLimitsUsageError,
      },
      options,
    );
  }

  /**
   * Get organization imports usage per social account (paginated)
   *
   * @remarks
   * See how much import capacity each social account has consumed, paginated and filterable by team
   * or platform. Use it to track post history and review import quota.
   *
   * @returns 200
   *
   * @throws {@link OrganizationApi.OrganizationGetImportsUsageError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link BundleSocialError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  organizationGetImportsUsage(
    request: OrganizationApi.OrganizationGetImportsUsageRequest = {},
    options?: RequestOptions,
  ): ApiPromise<ApiV1OrganizationUsageImportsResponse, OrganizationApi.OrganizationGetImportsUsageError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/organization/usage/imports"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [
          { name: "page", value: request.page, schema: s.defaulted(s.float64(), 1) },
          { name: "pageSize", value: request.pageSize, schema: s.defaulted(s.float64(), 20) },
          { name: "teamId", value: request.teamId, schema: s.optional(s.string()) },
          {
            name: "socialAccountType",
            value: request.socialAccountType,
            schema: s.optional(s.lazy(() => socialAccountTypeBundleSocialOrganizationApiSchema)),
          },
          { name: "socialAccountId", value: request.socialAccountId, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: apiV1OrganizationUsageImportsResponseSchema },
        errorFactory: OrganizationApi.OrganizationGetImportsUsageError,
      },
      options,
    );
  }

  /**
   * Get DM and automation run usage per social account (paginated)
   *
   * @remarks
   * See how many direct messages and automation runs each Facebook, Instagram and TikTok account
   * has used this UTC calendar month against its monthly limits, paginated with `offset`/`limit`
   * and filterable by team, platform or account. Messages counted: every message you sent,
   * including private replies to comments. Not counted: reactions, marking a conversation as read,
   * and inbound messages. Automation runs counted: every run that was allowed to start, including
   * manual test runs; skipped and canceled runs are not counted. Limits reflect per-account and
   * organization overrides on top of the plan default.
   *
   * @returns 200
   *
   * @throws {@link OrganizationApi.OrganizationGetMessagesUsageError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link BundleSocialError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  organizationGetMessagesUsage(
    request: OrganizationApi.OrganizationGetMessagesUsageRequest = {},
    options?: RequestOptions,
  ): ApiPromise<ApiV1OrganizationUsageMessagesResponse, OrganizationApi.OrganizationGetMessagesUsageError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/organization/usage/messages"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [
          { name: "offset", value: request.offset, schema: s.defaulted(s.nullable(s.int()), 0) },
          { name: "limit", value: request.limit, schema: s.defaulted(s.nullable(s.int()), 10) },
          { name: "teamId", value: request.teamId, schema: s.optional(s.string()) },
          {
            name: "socialAccountType",
            value: request.socialAccountType,
            schema: s.optional(s.lazy(() => socialAccountType1BundleSocialOrganizationApiSchema)),
          },
          { name: "socialAccountId", value: request.socialAccountId, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: apiV1OrganizationUsageMessagesResponseSchema },
        errorFactory: OrganizationApi.OrganizationGetMessagesUsageError,
      },
      options,
    );
  }

  /**
   * Get organization
   *
   * @remarks
   * Retrieve your organization's details and plan. The `teams` field is deprecated and will be
   * removed on 2026-11-15: to discover team IDs, use the paginated GET /api/v1/team.
   *
   * @returns 200
   *
   * @throws {@link OrganizationApi.OrganizationGetOrganizationError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link BundleSocialError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  organizationGetOrganization(
    options?: RequestOptions,
  ): ApiPromise<ApiV1OrganizationResponse, OrganizationApi.OrganizationGetOrganizationError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/organization/"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: apiV1OrganizationResponseInternalSchema },
        errorFactory: OrganizationApi.OrganizationGetOrganizationError,
      },
      options,
    );
  }

  /**
   * Get organization posts usage
   *
   * @remarks
   * See how many posts your organization has consumed against its plan limit for the current
   * billing period. Use it to monitor quota before scheduling large batches.
   *
   * @returns 200
   *
   * @throws {@link OrganizationApi.OrganizationGetPostsUsageError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link BundleSocialError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  organizationGetPostsUsage(
    options?: RequestOptions,
  ): ApiPromise<ApiV1OrganizationUsagePostsResponse, OrganizationApi.OrganizationGetPostsUsageError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/organization/usage/posts"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: apiV1OrganizationUsagePostsResponseSchema },
        errorFactory: OrganizationApi.OrganizationGetPostsUsageError,
      },
      options,
    );
  }

  /**
   * Get organization uploads usage
   *
   * @remarks
   * See how much upload capacity your organization has consumed against its plan limit for the
   * current billing period.
   *
   * @returns 200
   *
   * @throws {@link OrganizationApi.OrganizationGetUploadsUsageError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link BundleSocialError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  organizationGetUploadsUsage(
    options?: RequestOptions,
  ): ApiPromise<ApiV1OrganizationUsageUploadsResponse, OrganizationApi.OrganizationGetUploadsUsageError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/organization/usage/uploads"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: apiV1OrganizationUsageUploadsResponseSchema },
        errorFactory: OrganizationApi.OrganizationGetUploadsUsageError,
      },
      options,
    );
  }
}

export namespace OrganizationApi {
  export class OrganizationGetCommentsUsageError extends ApiError {
    declare readonly payload:
      | Declared<"apiV1OrganizationUsageComments400Error1", ApiV1OrganizationUsageComments400Error1>
      | Declared<"apiV1OrganizationUsageComments401Error1", ApiV1OrganizationUsageComments401Error1>
      | Declared<"apiV1OrganizationUsageComments403Error1", ApiV1OrganizationUsageComments403Error1>
      | Declared<"apiV1OrganizationUsageComments404Error1", ApiV1OrganizationUsageComments404Error1>
      | Declared<"apiV1OrganizationUsageComments429Error1", ApiV1OrganizationUsageComments429Error1>
      | Declared<"apiV1OrganizationUsageComments500Error1", ApiV1OrganizationUsageComments500Error1>
      | Declared<"apiV1OrganizationUsageComments502Error1", ApiV1OrganizationUsageComments502Error1>
      | Declared<"apiV1OrganizationUsageComments503Error1", ApiV1OrganizationUsageComments503Error1>
      | Declared<"apiV1OrganizationUsageComments504Error1", ApiV1OrganizationUsageComments504Error1>
      | Undeclared;

    static readonly errors: ErrorDecoders<OrganizationGetCommentsUsageError> = [
      {
        on: 400,
        kind: "apiV1OrganizationUsageComments400Error1",
        decode: { kind: "json", schema: apiV1OrganizationUsageComments400Error1Schema },
      },
      {
        on: 401,
        kind: "apiV1OrganizationUsageComments401Error1",
        decode: { kind: "json", schema: apiV1OrganizationUsageComments401Error1Schema },
      },
      {
        on: 403,
        kind: "apiV1OrganizationUsageComments403Error1",
        decode: { kind: "json", schema: apiV1OrganizationUsageComments403Error1Schema },
      },
      {
        on: 404,
        kind: "apiV1OrganizationUsageComments404Error1",
        decode: { kind: "json", schema: apiV1OrganizationUsageComments404Error1Schema },
      },
      {
        on: 429,
        kind: "apiV1OrganizationUsageComments429Error1",
        decode: { kind: "json", schema: apiV1OrganizationUsageComments429Error1Schema },
      },
      {
        on: 500,
        kind: "apiV1OrganizationUsageComments500Error1",
        decode: { kind: "json", schema: apiV1OrganizationUsageComments500Error1Schema },
      },
      {
        on: 502,
        kind: "apiV1OrganizationUsageComments502Error1",
        decode: { kind: "json", schema: apiV1OrganizationUsageComments502Error1Schema },
      },
      {
        on: 503,
        kind: "apiV1OrganizationUsageComments503Error1",
        decode: { kind: "json", schema: apiV1OrganizationUsageComments503Error1Schema },
      },
      {
        on: 504,
        kind: "apiV1OrganizationUsageComments504Error1",
        decode: { kind: "json", schema: apiV1OrganizationUsageComments504Error1Schema },
      },
    ];
  }

  export type OrganizationGetDailyLimitsUsageRequest = {
    socialAccountId: string;
    date?: Date | null;
  };

  export class OrganizationGetDailyLimitsUsageError extends ApiError {
    declare readonly payload:
      | Declared<"apiV1OrganizationUsageDailyLimits400Error1", ApiV1OrganizationUsageDailyLimits400Error1>
      | Declared<"apiV1OrganizationUsageDailyLimits401Error1", ApiV1OrganizationUsageDailyLimits401Error1>
      | Declared<"apiV1OrganizationUsageDailyLimits403Error1", ApiV1OrganizationUsageDailyLimits403Error1>
      | Declared<"apiV1OrganizationUsageDailyLimits404Error1", ApiV1OrganizationUsageDailyLimits404Error1>
      | Declared<"apiV1OrganizationUsageDailyLimits429Error1", ApiV1OrganizationUsageDailyLimits429Error1>
      | Declared<"apiV1OrganizationUsageDailyLimits500Error1", ApiV1OrganizationUsageDailyLimits500Error1>
      | Declared<"apiV1OrganizationUsageDailyLimits502Error1", ApiV1OrganizationUsageDailyLimits502Error1>
      | Declared<"apiV1OrganizationUsageDailyLimits503Error1", ApiV1OrganizationUsageDailyLimits503Error1>
      | Declared<"apiV1OrganizationUsageDailyLimits504Error1", ApiV1OrganizationUsageDailyLimits504Error1>
      | Undeclared;

    static readonly errors: ErrorDecoders<OrganizationGetDailyLimitsUsageError> = [
      {
        on: 400,
        kind: "apiV1OrganizationUsageDailyLimits400Error1",
        decode: { kind: "json", schema: apiV1OrganizationUsageDailyLimits400Error1Schema },
      },
      {
        on: 401,
        kind: "apiV1OrganizationUsageDailyLimits401Error1",
        decode: { kind: "json", schema: apiV1OrganizationUsageDailyLimits401Error1Schema },
      },
      {
        on: 403,
        kind: "apiV1OrganizationUsageDailyLimits403Error1",
        decode: { kind: "json", schema: apiV1OrganizationUsageDailyLimits403Error1Schema },
      },
      {
        on: 404,
        kind: "apiV1OrganizationUsageDailyLimits404Error1",
        decode: { kind: "json", schema: apiV1OrganizationUsageDailyLimits404Error1Schema },
      },
      {
        on: 429,
        kind: "apiV1OrganizationUsageDailyLimits429Error1",
        decode: { kind: "json", schema: apiV1OrganizationUsageDailyLimits429Error1Schema },
      },
      {
        on: 500,
        kind: "apiV1OrganizationUsageDailyLimits500Error1",
        decode: { kind: "json", schema: apiV1OrganizationUsageDailyLimits500Error1Schema },
      },
      {
        on: 502,
        kind: "apiV1OrganizationUsageDailyLimits502Error1",
        decode: { kind: "json", schema: apiV1OrganizationUsageDailyLimits502Error1Schema },
      },
      {
        on: 503,
        kind: "apiV1OrganizationUsageDailyLimits503Error1",
        decode: { kind: "json", schema: apiV1OrganizationUsageDailyLimits503Error1Schema },
      },
      {
        on: 504,
        kind: "apiV1OrganizationUsageDailyLimits504Error1",
        decode: { kind: "json", schema: apiV1OrganizationUsageDailyLimits504Error1Schema },
      },
    ];
  }

  export type OrganizationGetImportsUsageRequest = {
    /** @default 1 */
    page?: number;
    /** @default 20 */
    pageSize?: number;
    teamId?: string;
    socialAccountType?: SocialAccountTypeBundleSocialOrganizationApi;
    socialAccountId?: string;
  };

  export const organizationGetImportsUsageRequestSchema: Schema<OrganizationGetImportsUsageRequest> =
    s.lazySchema(() =>
      s.object<OrganizationGetImportsUsageRequest>({
        page: s.defaulted(s.float64().check(s.gte(1)), 1),
        pageSize: s.defaulted(s.float64().check(s.gte(1), s.lte(100)), 20),
        teamId: s.optional(s.string()),
        socialAccountType: s.optional(s.lazy(() => socialAccountTypeBundleSocialOrganizationApiSchema)),
        socialAccountId: s.optional(s.string()),
      }),
    );

  export class OrganizationGetImportsUsageError extends ApiError {
    declare readonly payload:
      | Declared<"apiV1OrganizationUsageImports400Error1", ApiV1OrganizationUsageImports400Error1>
      | Declared<"apiV1OrganizationUsageImports401Error1", ApiV1OrganizationUsageImports401Error1>
      | Declared<"apiV1OrganizationUsageImports403Error1", ApiV1OrganizationUsageImports403Error1>
      | Declared<"apiV1OrganizationUsageImports404Error1", ApiV1OrganizationUsageImports404Error1>
      | Declared<"apiV1OrganizationUsageImports429Error1", ApiV1OrganizationUsageImports429Error1>
      | Declared<"apiV1OrganizationUsageImports500Error1", ApiV1OrganizationUsageImports500Error1>
      | Declared<"apiV1OrganizationUsageImports502Error1", ApiV1OrganizationUsageImports502Error1>
      | Declared<"apiV1OrganizationUsageImports503Error1", ApiV1OrganizationUsageImports503Error1>
      | Declared<"apiV1OrganizationUsageImports504Error1", ApiV1OrganizationUsageImports504Error1>
      | Undeclared;

    static readonly errors: ErrorDecoders<OrganizationGetImportsUsageError> = [
      {
        on: 400,
        kind: "apiV1OrganizationUsageImports400Error1",
        decode: { kind: "json", schema: apiV1OrganizationUsageImports400Error1Schema },
      },
      {
        on: 401,
        kind: "apiV1OrganizationUsageImports401Error1",
        decode: { kind: "json", schema: apiV1OrganizationUsageImports401Error1Schema },
      },
      {
        on: 403,
        kind: "apiV1OrganizationUsageImports403Error1",
        decode: { kind: "json", schema: apiV1OrganizationUsageImports403Error1Schema },
      },
      {
        on: 404,
        kind: "apiV1OrganizationUsageImports404Error1",
        decode: { kind: "json", schema: apiV1OrganizationUsageImports404Error1Schema },
      },
      {
        on: 429,
        kind: "apiV1OrganizationUsageImports429Error1",
        decode: { kind: "json", schema: apiV1OrganizationUsageImports429Error1Schema },
      },
      {
        on: 500,
        kind: "apiV1OrganizationUsageImports500Error1",
        decode: { kind: "json", schema: apiV1OrganizationUsageImports500Error1Schema },
      },
      {
        on: 502,
        kind: "apiV1OrganizationUsageImports502Error1",
        decode: { kind: "json", schema: apiV1OrganizationUsageImports502Error1Schema },
      },
      {
        on: 503,
        kind: "apiV1OrganizationUsageImports503Error1",
        decode: { kind: "json", schema: apiV1OrganizationUsageImports503Error1Schema },
      },
      {
        on: 504,
        kind: "apiV1OrganizationUsageImports504Error1",
        decode: { kind: "json", schema: apiV1OrganizationUsageImports504Error1Schema },
      },
    ];
  }

  export type OrganizationGetMessagesUsageRequest = {
    /** @default 0 */
    offset?: number | null;
    /** @default 10 */
    limit?: number | null;
    teamId?: string;
    socialAccountType?: SocialAccountType1BundleSocialOrganizationApi;
    socialAccountId?: string;
  };

  export const organizationGetMessagesUsageRequestSchema: Schema<OrganizationGetMessagesUsageRequest> =
    s.lazySchema(() =>
      s.object<OrganizationGetMessagesUsageRequest>({
        offset: s.defaulted(s.nullable(s.int().check(s.gte(0))), 0),
        limit: s.defaulted(s.nullable(s.int().check(s.gte(1), s.lte(100))), 10),
        teamId: s.optional(s.string()),
        socialAccountType: s.optional(s.lazy(() => socialAccountType1BundleSocialOrganizationApiSchema)),
        socialAccountId: s.optional(s.string()),
      }),
    );

  export class OrganizationGetMessagesUsageError extends ApiError {
    declare readonly payload:
      | Declared<"apiV1OrganizationUsageMessages400Error1", ApiV1OrganizationUsageMessages400Error1>
      | Declared<"apiV1OrganizationUsageMessages401Error1", ApiV1OrganizationUsageMessages401Error1>
      | Declared<"apiV1OrganizationUsageMessages403Error1", ApiV1OrganizationUsageMessages403Error1>
      | Declared<"apiV1OrganizationUsageMessages404Error1", ApiV1OrganizationUsageMessages404Error1>
      | Declared<"apiV1OrganizationUsageMessages429Error1", ApiV1OrganizationUsageMessages429Error1>
      | Declared<"apiV1OrganizationUsageMessages500Error1", ApiV1OrganizationUsageMessages500Error1>
      | Declared<"apiV1OrganizationUsageMessages502Error1", ApiV1OrganizationUsageMessages502Error1>
      | Declared<"apiV1OrganizationUsageMessages503Error1", ApiV1OrganizationUsageMessages503Error1>
      | Declared<"apiV1OrganizationUsageMessages504Error1", ApiV1OrganizationUsageMessages504Error1>
      | Undeclared;

    static readonly errors: ErrorDecoders<OrganizationGetMessagesUsageError> = [
      {
        on: 400,
        kind: "apiV1OrganizationUsageMessages400Error1",
        decode: { kind: "json", schema: apiV1OrganizationUsageMessages400Error1Schema },
      },
      {
        on: 401,
        kind: "apiV1OrganizationUsageMessages401Error1",
        decode: { kind: "json", schema: apiV1OrganizationUsageMessages401Error1Schema },
      },
      {
        on: 403,
        kind: "apiV1OrganizationUsageMessages403Error1",
        decode: { kind: "json", schema: apiV1OrganizationUsageMessages403Error1Schema },
      },
      {
        on: 404,
        kind: "apiV1OrganizationUsageMessages404Error1",
        decode: { kind: "json", schema: apiV1OrganizationUsageMessages404Error1Schema },
      },
      {
        on: 429,
        kind: "apiV1OrganizationUsageMessages429Error1",
        decode: { kind: "json", schema: apiV1OrganizationUsageMessages429Error1Schema },
      },
      {
        on: 500,
        kind: "apiV1OrganizationUsageMessages500Error1",
        decode: { kind: "json", schema: apiV1OrganizationUsageMessages500Error1Schema },
      },
      {
        on: 502,
        kind: "apiV1OrganizationUsageMessages502Error1",
        decode: { kind: "json", schema: apiV1OrganizationUsageMessages502Error1Schema },
      },
      {
        on: 503,
        kind: "apiV1OrganizationUsageMessages503Error1",
        decode: { kind: "json", schema: apiV1OrganizationUsageMessages503Error1Schema },
      },
      {
        on: 504,
        kind: "apiV1OrganizationUsageMessages504Error1",
        decode: { kind: "json", schema: apiV1OrganizationUsageMessages504Error1Schema },
      },
    ];
  }

  export class OrganizationGetOrganizationError extends ApiError {
    declare readonly payload:
      | Declared<"apiV1Organization400Error1", ApiV1Organization400Error1>
      | Declared<"apiV1Organization401Error1", ApiV1Organization401Error1>
      | Declared<"apiV1Organization403Error1", ApiV1Organization403Error1>
      | Declared<"apiV1Organization404Error1", ApiV1Organization404Error1>
      | Declared<"apiV1Organization429Error1", ApiV1Organization429Error1>
      | Declared<"apiV1Organization500Error1", ApiV1Organization500Error1>
      | Declared<"apiV1Organization502Error1", ApiV1Organization502Error1>
      | Declared<"apiV1Organization503Error1", ApiV1Organization503Error1>
      | Declared<"apiV1Organization504Error1", ApiV1Organization504Error1>
      | Undeclared;

    static readonly errors: ErrorDecoders<OrganizationGetOrganizationError> = [
      {
        on: 400,
        kind: "apiV1Organization400Error1",
        decode: { kind: "json", schema: apiV1Organization400Error1Schema },
      },
      {
        on: 401,
        kind: "apiV1Organization401Error1",
        decode: { kind: "json", schema: apiV1Organization401Error1Schema },
      },
      {
        on: 403,
        kind: "apiV1Organization403Error1",
        decode: { kind: "json", schema: apiV1Organization403Error1Schema },
      },
      {
        on: 404,
        kind: "apiV1Organization404Error1",
        decode: { kind: "json", schema: apiV1Organization404Error1Schema },
      },
      {
        on: 429,
        kind: "apiV1Organization429Error1",
        decode: { kind: "json", schema: apiV1Organization429Error1Schema },
      },
      {
        on: 500,
        kind: "apiV1Organization500Error1",
        decode: { kind: "json", schema: apiV1Organization500Error1Schema },
      },
      {
        on: 502,
        kind: "apiV1Organization502Error1",
        decode: { kind: "json", schema: apiV1Organization502Error1Schema },
      },
      {
        on: 503,
        kind: "apiV1Organization503Error1",
        decode: { kind: "json", schema: apiV1Organization503Error1Schema },
      },
      {
        on: 504,
        kind: "apiV1Organization504Error1",
        decode: { kind: "json", schema: apiV1Organization504Error1Schema },
      },
    ];
  }

  export class OrganizationGetPostsUsageError extends ApiError {
    declare readonly payload:
      | Declared<"apiV1OrganizationUsagePosts400Error1", ApiV1OrganizationUsagePosts400Error1>
      | Declared<"apiV1OrganizationUsagePosts401Error1", ApiV1OrganizationUsagePosts401Error1>
      | Declared<"apiV1OrganizationUsagePosts403Error1", ApiV1OrganizationUsagePosts403Error1>
      | Declared<"apiV1OrganizationUsagePosts404Error1", ApiV1OrganizationUsagePosts404Error1>
      | Declared<"apiV1OrganizationUsagePosts429Error1", ApiV1OrganizationUsagePosts429Error1>
      | Declared<"apiV1OrganizationUsagePosts500Error1", ApiV1OrganizationUsagePosts500Error1>
      | Declared<"apiV1OrganizationUsagePosts502Error1", ApiV1OrganizationUsagePosts502Error1>
      | Declared<"apiV1OrganizationUsagePosts503Error1", ApiV1OrganizationUsagePosts503Error1>
      | Declared<"apiV1OrganizationUsagePosts504Error1", ApiV1OrganizationUsagePosts504Error1>
      | Undeclared;

    static readonly errors: ErrorDecoders<OrganizationGetPostsUsageError> = [
      {
        on: 400,
        kind: "apiV1OrganizationUsagePosts400Error1",
        decode: { kind: "json", schema: apiV1OrganizationUsagePosts400Error1Schema },
      },
      {
        on: 401,
        kind: "apiV1OrganizationUsagePosts401Error1",
        decode: { kind: "json", schema: apiV1OrganizationUsagePosts401Error1Schema },
      },
      {
        on: 403,
        kind: "apiV1OrganizationUsagePosts403Error1",
        decode: { kind: "json", schema: apiV1OrganizationUsagePosts403Error1Schema },
      },
      {
        on: 404,
        kind: "apiV1OrganizationUsagePosts404Error1",
        decode: { kind: "json", schema: apiV1OrganizationUsagePosts404Error1Schema },
      },
      {
        on: 429,
        kind: "apiV1OrganizationUsagePosts429Error1",
        decode: { kind: "json", schema: apiV1OrganizationUsagePosts429Error1Schema },
      },
      {
        on: 500,
        kind: "apiV1OrganizationUsagePosts500Error1",
        decode: { kind: "json", schema: apiV1OrganizationUsagePosts500Error1Schema },
      },
      {
        on: 502,
        kind: "apiV1OrganizationUsagePosts502Error1",
        decode: { kind: "json", schema: apiV1OrganizationUsagePosts502Error1Schema },
      },
      {
        on: 503,
        kind: "apiV1OrganizationUsagePosts503Error1",
        decode: { kind: "json", schema: apiV1OrganizationUsagePosts503Error1Schema },
      },
      {
        on: 504,
        kind: "apiV1OrganizationUsagePosts504Error1",
        decode: { kind: "json", schema: apiV1OrganizationUsagePosts504Error1Schema },
      },
    ];
  }

  export class OrganizationGetUploadsUsageError extends ApiError {
    declare readonly payload:
      | Declared<"apiV1OrganizationUsageUploads400Error1", ApiV1OrganizationUsageUploads400Error1>
      | Declared<"apiV1OrganizationUsageUploads401Error1", ApiV1OrganizationUsageUploads401Error1>
      | Declared<"apiV1OrganizationUsageUploads403Error1", ApiV1OrganizationUsageUploads403Error1>
      | Declared<"apiV1OrganizationUsageUploads404Error1", ApiV1OrganizationUsageUploads404Error1>
      | Declared<"apiV1OrganizationUsageUploads429Error1", ApiV1OrganizationUsageUploads429Error1>
      | Declared<"apiV1OrganizationUsageUploads500Error1", ApiV1OrganizationUsageUploads500Error1>
      | Declared<"apiV1OrganizationUsageUploads502Error1", ApiV1OrganizationUsageUploads502Error1>
      | Declared<"apiV1OrganizationUsageUploads503Error1", ApiV1OrganizationUsageUploads503Error1>
      | Declared<"apiV1OrganizationUsageUploads504Error1", ApiV1OrganizationUsageUploads504Error1>
      | Undeclared;

    static readonly errors: ErrorDecoders<OrganizationGetUploadsUsageError> = [
      {
        on: 400,
        kind: "apiV1OrganizationUsageUploads400Error1",
        decode: { kind: "json", schema: apiV1OrganizationUsageUploads400Error1Schema },
      },
      {
        on: 401,
        kind: "apiV1OrganizationUsageUploads401Error1",
        decode: { kind: "json", schema: apiV1OrganizationUsageUploads401Error1Schema },
      },
      {
        on: 403,
        kind: "apiV1OrganizationUsageUploads403Error1",
        decode: { kind: "json", schema: apiV1OrganizationUsageUploads403Error1Schema },
      },
      {
        on: 404,
        kind: "apiV1OrganizationUsageUploads404Error1",
        decode: { kind: "json", schema: apiV1OrganizationUsageUploads404Error1Schema },
      },
      {
        on: 429,
        kind: "apiV1OrganizationUsageUploads429Error1",
        decode: { kind: "json", schema: apiV1OrganizationUsageUploads429Error1Schema },
      },
      {
        on: 500,
        kind: "apiV1OrganizationUsageUploads500Error1",
        decode: { kind: "json", schema: apiV1OrganizationUsageUploads500Error1Schema },
      },
      {
        on: 502,
        kind: "apiV1OrganizationUsageUploads502Error1",
        decode: { kind: "json", schema: apiV1OrganizationUsageUploads502Error1Schema },
      },
      {
        on: 503,
        kind: "apiV1OrganizationUsageUploads503Error1",
        decode: { kind: "json", schema: apiV1OrganizationUsageUploads503Error1Schema },
      },
      {
        on: 504,
        kind: "apiV1OrganizationUsageUploads504Error1",
        decode: { kind: "json", schema: apiV1OrganizationUsageUploads504Error1Schema },
      },
    ];
  }
}
