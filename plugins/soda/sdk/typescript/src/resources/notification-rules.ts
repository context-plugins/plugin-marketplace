import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { errorResponseSchema, type ErrorResponse } from "../models/error-response.js";
import {
  publicApiDeleteNotificationRuleResponseSchema,
  type PublicApiDeleteNotificationRuleResponse,
} from "../models/public-api-delete-notification-rule-response.js";
import {
  publicApiListNotificationRulesResponseSchema,
  type PublicApiListNotificationRulesResponse,
} from "../models/public-api-list-notification-rules-response.js";
import {
  publicApiNotificationRuleDtoSchema,
  type PublicApiNotificationRuleDto,
} from "../models/public-api-notification-rule-dto.js";
import {
  publicApiNotificationRuleRequestDtoSchema,
  type PublicApiNotificationRuleRequestDto,
} from "../models/public-api-notification-rule-request-dto.js";
import type { Servers } from "../servers.js";

/**
 * Soda Cloud API Notification Rule Endpoints
 */
export class NotificationRules {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Delete a notification rule
   *
   * @remarks
   * Schedules a notification rule for deletion. Deletion is processed asynchronously.
   *
   * ## Authentication
   *
   * User authentication required: `true`
   *
   * This endpoint accepts authentication via API keys in the `Basic` authentication header, or a
   * pre-authenticated token in HTTP cookie `token`. Cookie sessions extend automatically on each
   * request.
   *
   * ## Authorization
   *
   * Users must have global role permission MANAGE_NOTIFICATION_RULES to execute this call.
   *
   * ## Tags
   *
   * `Notification Rules`
   *
   * ## Rate limiting
   *
   * 10 requests/60 seconds
   *
   * @returns Successful response
   *
   * @throws {@link NotificationRules.DeleteApiV1NotificationRulesNotificationRuleIdError} when the
   * API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link SodaError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteApiV1NotificationRulesNotificationRuleId(
    request: NotificationRules.DeleteApiV1NotificationRulesNotificationRuleIdRequest,
    options?: RequestOptions,
  ): ApiPromise<
    PublicApiDeleteNotificationRuleResponse,
    NotificationRules.DeleteApiV1NotificationRulesNotificationRuleIdError
  > {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/api/v1/notificationRules/{notificationRuleId}"),
        auth: anyAuth(this.#auth.basicAuthApiKey, this.#auth.cookieToken),
        pathParams: [{ name: "notificationRuleId", value: request.notificationRuleId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: publicApiDeleteNotificationRuleResponseSchema },
        errorFactory: NotificationRules.DeleteApiV1NotificationRulesNotificationRuleIdError,
      },
      options,
    );
  }

  /**
   * List notification rules
   *
   * @remarks
   * This endpoint allows you to list the notification rules in your organization.
   *
   * This GET is a paginated API that uses the following parameters to request specific details:
   *
   * - `size`: Supply an integer value between 10 and 1000, inclusive. The default value is 10.
   *
   * - `page`: Supply an integer value. The default value is 0.
   *
   * ## Authentication
   *
   * User authentication required: `true`
   *
   * This endpoint accepts authentication via API keys in the `Basic` authentication header, or a
   * pre-authenticated token in HTTP cookie `token`. Cookie sessions extend automatically on each
   * request.
   *
   * ## Tags
   *
   * `Notification Rules`
   *
   * ## Rate limiting
   *
   * 60 requests/60 seconds
   *
   * @returns Successful response
   *
   * @throws {@link NotificationRules.GetApiV1NotificationRulesError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link SodaError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getApiV1NotificationRules(
    request: NotificationRules.GetApiV1NotificationRulesRequest = {},
    options?: RequestOptions,
  ): ApiPromise<PublicApiListNotificationRulesResponse, NotificationRules.GetApiV1NotificationRulesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/notificationRules"),
        auth: anyAuth(this.#auth.basicAuthApiKey, this.#auth.cookieToken),
        pathParams: [],
        query: [
          { name: "page", value: request.page, schema: s.optional(s.int()) },
          { name: "size", value: request.size, schema: s.optional(s.int()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: publicApiListNotificationRulesResponseSchema },
        errorFactory: NotificationRules.GetApiV1NotificationRulesError,
      },
      options,
    );
  }

  /**
   * Create a notification rule
   *
   * @remarks
   * Creates a notification rule with the provided filter and recipients.
   *
   * The filter is a simplified expression tree (and/or/not/equals/contains/in) over check and
   * monitor attributes; recipients can be users, user groups, emails, integrations, or roles.
   *
   * ## Authentication
   *
   * User authentication required: `true`
   *
   * This endpoint accepts authentication via API keys in the `Basic` authentication header, or a
   * pre-authenticated token in HTTP cookie `token`. Cookie sessions extend automatically on each
   * request.
   *
   * ## Authorization
   *
   * Users must have global role permission MANAGE_NOTIFICATION_RULES to execute this call.
   *
   * ## Tags
   *
   * `Notification Rules`
   *
   * ## Rate limiting
   *
   * 10 requests/60 seconds
   *
   * @returns Successful response
   *
   * @throws {@link NotificationRules.PostApiV1NotificationRulesError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link SodaError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  postApiV1NotificationRules(
    request: NotificationRules.PostApiV1NotificationRulesRequest,
    options?: RequestOptions,
  ): ApiPromise<PublicApiNotificationRuleDto, NotificationRules.PostApiV1NotificationRulesError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v1/notificationRules"),
        auth: anyAuth(this.#auth.basicAuthApiKey, this.#auth.cookieToken),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: publicApiNotificationRuleRequestDtoSchema },
      },
      {
        success: { kind: "json", schema: publicApiNotificationRuleDtoSchema },
        errorFactory: NotificationRules.PostApiV1NotificationRulesError,
      },
      options,
    );
  }

  /**
   * Update a notification rule
   *
   * @remarks
   * Updates a notification rule. This is a full replacement: the rule's name, type, filter,
   * recipients, status, and customization are all set from the request body.
   *
   * ## Authentication
   *
   * User authentication required: `true`
   *
   * This endpoint accepts authentication via API keys in the `Basic` authentication header, or a
   * pre-authenticated token in HTTP cookie `token`. Cookie sessions extend automatically on each
   * request.
   *
   * ## Authorization
   *
   * Users must have global role permission MANAGE_NOTIFICATION_RULES to execute this call.
   *
   * ## Tags
   *
   * `Notification Rules`
   *
   * ## Rate limiting
   *
   * 10 requests/60 seconds
   *
   * @returns Successful response
   *
   * @throws {@link NotificationRules.PostApiV1NotificationRulesNotificationRuleIdError} when the
   * API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link SodaError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  postApiV1NotificationRulesNotificationRuleId(
    request: NotificationRules.PostApiV1NotificationRulesNotificationRuleIdRequest,
    options?: RequestOptions,
  ): ApiPromise<
    PublicApiNotificationRuleDto,
    NotificationRules.PostApiV1NotificationRulesNotificationRuleIdError
  > {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v1/notificationRules/{notificationRuleId}"),
        auth: anyAuth(this.#auth.basicAuthApiKey, this.#auth.cookieToken),
        pathParams: [{ name: "notificationRuleId", value: request.notificationRuleId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: publicApiNotificationRuleRequestDtoSchema },
      },
      {
        success: { kind: "json", schema: publicApiNotificationRuleDtoSchema },
        errorFactory: NotificationRules.PostApiV1NotificationRulesNotificationRuleIdError,
      },
      options,
    );
  }
}

export namespace NotificationRules {
  export type DeleteApiV1NotificationRulesNotificationRuleIdRequest = {
    notificationRuleId: string;
  };

  export class DeleteApiV1NotificationRulesNotificationRuleIdError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Declared<"errorResponse5", ErrorResponse>
      | Declared<"errorResponse6", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<DeleteApiV1NotificationRulesNotificationRuleIdError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 429, kind: "errorResponse5", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse6", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type GetApiV1NotificationRulesRequest = {
    page?: number;
    size?: number;
  };

  export class GetApiV1NotificationRulesError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Declared<"errorResponse5", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetApiV1NotificationRulesError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 429, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse5", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type PostApiV1NotificationRulesRequest = {
    body: PublicApiNotificationRuleRequestDto;
  };

  export class PostApiV1NotificationRulesError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Declared<"errorResponse5", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<PostApiV1NotificationRulesError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 429, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse5", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type PostApiV1NotificationRulesNotificationRuleIdRequest = {
    notificationRuleId: string;
    body: PublicApiNotificationRuleRequestDto;
  };

  export class PostApiV1NotificationRulesNotificationRuleIdError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Declared<"errorResponse5", ErrorResponse>
      | Declared<"errorResponse6", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<PostApiV1NotificationRulesNotificationRuleIdError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 429, kind: "errorResponse5", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse6", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }
}
