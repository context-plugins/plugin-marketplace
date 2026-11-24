import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth, orAnonymous } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  apiV1AccountStatusRequestSchema,
  type ApiV1AccountStatusRequest,
} from "../models/api-v1-account-status-request.js";
import {
  apiV1AccountStatusResponseSchema,
  type ApiV1AccountStatusResponse,
} from "../models/api-v1-account-status-response.js";
import {
  apiV1ReportingApiEndpointUsageRequestInternalSchema,
  type ApiV1ReportingApiEndpointUsageRequest,
} from "../models/api-v1-reporting-api-endpoint-usage-request.js";
import {
  apiV1ReportingApiEndpointUsageResponseSchema,
  type ApiV1ReportingApiEndpointUsageResponse,
} from "../models/api-v1-reporting-api-endpoint-usage-response.js";
import {
  apiV1ReportingApiQuotaUsageRequestInternalSchema,
  type ApiV1ReportingApiQuotaUsageRequest,
} from "../models/api-v1-reporting-api-quota-usage-request.js";
import {
  apiV1ReportingApiQuotaUsageResponseSchema,
  type ApiV1ReportingApiQuotaUsageResponse,
} from "../models/api-v1-reporting-api-quota-usage-response.js";
import {
  apiV1ReportingApiUsageRequestInternalSchema,
  type ApiV1ReportingApiUsageRequest,
} from "../models/api-v1-reporting-api-usage-request.js";
import {
  apiV1ReportingApiUsageResponseSchema,
  type ApiV1ReportingApiUsageResponse,
} from "../models/api-v1-reporting-api-usage-response.js";
import {
  apiV1ReportingApiUserActivityRequestInternalSchema,
  type ApiV1ReportingApiUserActivityRequest,
} from "../models/api-v1-reporting-api-user-activity-request.js";
import {
  apiV1ReportingApiUserActivityResponseSchema,
  type ApiV1ReportingApiUserActivityResponse,
} from "../models/api-v1-reporting-api-user-activity-response.js";
import { errorSchema, type Error } from "../models/error.js";
import { payloadTooLarge1Schema, type PayloadTooLarge1 } from "../models/payload-too-large1.js";
import { paymentRequired1Schema, type PaymentRequired1 } from "../models/payment-required1.js";
import { rateLimited1Schema, type RateLimited1 } from "../models/rate-limited1.js";
import type { Servers } from "../servers.js";

/**
 * API key status, usage and quota reporting.
 */
export class Account {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Check whether this API key can make billable calls
   *
   * @remarks
   * One-call self-diagnosis for the presented key: whether billable endpoints will serve it, and if
   * not why (`blocked_reason`) and for how long (`retry_after`). Works even when the key is
   * blocked. The same handler is exposed on POST (sapling_account_status_post). Team-scoped keys
   * receive only the verdict and their own quota.
   *
   * @returns Access verdict plus credit, subscription, usage and trial details.
   *
   * @throws {@link Account.SaplingAccountStatusError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link SaplingError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  saplingAccountStatus(
    request: Account.SaplingAccountStatusRequest = {},
    options?: RequestOptions,
  ): ApiPromise<ApiV1AccountStatusResponse, Account.SaplingAccountStatusError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/account/status"),
        auth: anyAuth(this.#auth.bearerAuth, this.#auth.apiKeyQuery),
        pathParams: [],
        query: [
          { name: "return_usage", value: request.returnUsage, schema: s.defaulted(s.boolean(), false) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: apiV1AccountStatusResponseSchema },
        errorFactory: Account.SaplingAccountStatusError,
      },
      options,
    );
  }

  /**
   * Check whether this API key can make billable calls
   *
   * @remarks
   * POST form of GET /api/v1/account/status (sapling_account_status), for clients that credential
   * via a JSON `key` body. Identical behavior and response.
   *
   * @returns Access verdict plus credit, subscription, usage and trial details.
   *
   * @throws {@link Account.SaplingAccountStatusPostError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link SaplingError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  saplingAccountStatusPost(
    request: Account.SaplingAccountStatusPostRequest = {},
    options?: RequestOptions,
  ): ApiPromise<ApiV1AccountStatusResponse, Account.SaplingAccountStatusPostError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v1/account/status"),
        auth: orAnonymous(this.#auth.bearerAuth),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => apiV1AccountStatusRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: apiV1AccountStatusResponseSchema },
        errorFactory: Account.SaplingAccountStatusPostError,
      },
      options,
    );
  }

  /**
   * API usage by endpoint over time
   *
   * @remarks
   * Characters per endpoint, bucketed by day, week or month. The body must be a non-empty JSON
   * object.
   *
   * @returns {"data": {endpoint: {bucket: characters}}, "last_updated"}.
   *
   * @throws {@link Account.SaplingApiEndpointUsageError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link SaplingError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  saplingApiEndpointUsage(
    request: Account.SaplingApiEndpointUsageRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV1ReportingApiEndpointUsageResponse, Account.SaplingApiEndpointUsageError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v1/reporting/api_endpoint_usage"),
        auth: orAnonymous(this.#auth.bearerAuth),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: apiV1ReportingApiEndpointUsageRequestInternalSchema,
        },
      },
      {
        success: { kind: "json", schema: apiV1ReportingApiEndpointUsageResponseSchema },
        errorFactory: Account.SaplingApiEndpointUsageError,
      },
      options,
    );
  }

  /**
   * Quota and usage summary
   *
   * @remarks
   * Quota, characters used, and suggestion accept/ignore counts over a window of days. Send a JSON
   * body (it may be `{}`).
   *
   * @returns Quota summary.
   *
   * @throws {@link Account.SaplingApiQuotaUsageError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link SaplingError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  saplingApiQuotaUsage(
    request: Account.SaplingApiQuotaUsageRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV1ReportingApiQuotaUsageResponse, Account.SaplingApiQuotaUsageError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v1/reporting/api_quota_usage"),
        auth: orAnonymous(this.#auth.bearerAuth),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: apiV1ReportingApiQuotaUsageRequestInternalSchema },
      },
      {
        success: { kind: "json", schema: apiV1ReportingApiQuotaUsageResponseSchema },
        errorFactory: Account.SaplingApiQuotaUsageError,
      },
      options,
    );
  }

  /**
   * API usage and cost report
   *
   * @remarks
   * Characters and cost over a window of days, broken down by API key, endpoint, day and month. The
   * body is optional.
   *
   * @returns Usage report.
   *
   * @throws {@link Account.SaplingApiUsageError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link SaplingError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  saplingApiUsage(
    request: Account.SaplingApiUsageRequest = {},
    options?: RequestOptions,
  ): ApiPromise<ApiV1ReportingApiUsageResponse, Account.SaplingApiUsageError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v1/reporting/api_usage"),
        auth: orAnonymous(this.#auth.bearerAuth),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => apiV1ReportingApiUsageRequestInternalSchema)),
        },
      },
      {
        success: { kind: "json", schema: apiV1ReportingApiUsageResponseSchema },
        errorFactory: Account.SaplingApiUsageError,
      },
      options,
    );
  }

  /**
   * Suggestion activity and active-user report
   *
   * @remarks
   * Edits shown, accepted and ignored, plus active-user counts (logged-in and anonymous), over a
   * window of days. Send a non-empty JSON body (unlike /api/v1/reporting/api_usage this handler
   * rejects an absent or empty `{}` body with 400); the window defaults to the last 6 days when a
   * field is omitted.
   *
   * @returns Activity summary.
   *
   * @throws {@link Account.SaplingApiUserActivityError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link SaplingError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  saplingApiUserActivity(
    request: Account.SaplingApiUserActivityRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV1ReportingApiUserActivityResponse, Account.SaplingApiUserActivityError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v1/reporting/api_user_activity"),
        auth: orAnonymous(this.#auth.bearerAuth),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: apiV1ReportingApiUserActivityRequestInternalSchema,
        },
      },
      {
        success: { kind: "json", schema: apiV1ReportingApiUserActivityResponseSchema },
        errorFactory: Account.SaplingApiUserActivityError,
      },
      options,
    );
  }
}

export namespace Account {
  export type SaplingAccountStatusRequest = {
    /** @default false */
    returnUsage?: boolean;
  };

  export class SaplingAccountStatusError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"rateLimited1", RateLimited1>
      | Declared<"error3", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<SaplingAccountStatusError> = [
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "rateLimited1", decode: { kind: "json", schema: rateLimited1Schema } },
      { on: 500, kind: "error3", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type SaplingAccountStatusPostRequest = {
    body?: ApiV1AccountStatusRequest;
  };

  export class SaplingAccountStatusPostError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"rateLimited1", RateLimited1>
      | Declared<"error3", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<SaplingAccountStatusPostError> = [
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "rateLimited1", decode: { kind: "json", schema: rateLimited1Schema } },
      { on: 500, kind: "error3", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type SaplingApiEndpointUsageRequest = {
    body: ApiV1ReportingApiEndpointUsageRequest;
  };

  export class SaplingApiEndpointUsageError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"paymentRequired1", PaymentRequired1>
      | Declared<"error3", Error>
      | Declared<"payloadTooLarge1", PayloadTooLarge1>
      | Declared<"error4", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<SaplingApiEndpointUsageError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 402, kind: "paymentRequired1", decode: { kind: "json", schema: paymentRequired1Schema } },
      { on: 403, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 413, kind: "payloadTooLarge1", decode: { kind: "json", schema: payloadTooLarge1Schema } },
      { on: 500, kind: "error4", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type SaplingApiQuotaUsageRequest = {
    body: ApiV1ReportingApiQuotaUsageRequest;
  };

  export class SaplingApiQuotaUsageError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"paymentRequired1", PaymentRequired1>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<SaplingApiQuotaUsageError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 402, kind: "paymentRequired1", decode: { kind: "json", schema: paymentRequired1Schema } },
      { on: 403, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error4", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type SaplingApiUsageRequest = {
    body?: ApiV1ReportingApiUsageRequest;
  };

  export class SaplingApiUsageError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"paymentRequired1", PaymentRequired1>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<SaplingApiUsageError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 402, kind: "paymentRequired1", decode: { kind: "json", schema: paymentRequired1Schema } },
      { on: 403, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error4", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type SaplingApiUserActivityRequest = {
    body: ApiV1ReportingApiUserActivityRequest;
  };

  export class SaplingApiUserActivityError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"paymentRequired1", PaymentRequired1>
      | Declared<"error3", Error>
      | Declared<"payloadTooLarge1", PayloadTooLarge1>
      | Declared<"error4", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<SaplingApiUserActivityError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 402, kind: "paymentRequired1", decode: { kind: "json", schema: paymentRequired1Schema } },
      { on: 403, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 413, kind: "payloadTooLarge1", decode: { kind: "json", schema: payloadTooLarge1Schema } },
      { on: 500, kind: "error4", decode: { kind: "json", schema: errorSchema } },
    ];
  }
}
