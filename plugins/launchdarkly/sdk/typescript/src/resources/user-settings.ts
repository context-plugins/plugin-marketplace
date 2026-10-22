import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  expiringUserTargetGetResponseSchema,
  type ExpiringUserTargetGetResponse,
} from "../models/expiring-user-target-get-response.js";
import {
  expiringUserTargetPatchResponseSchema,
  type ExpiringUserTargetPatchResponse,
} from "../models/expiring-user-target-patch-response.js";
import { forbiddenErrorRepSchema, type ForbiddenErrorRep } from "../models/forbidden-error-rep.js";
import {
  invalidRequestErrorRepSchema,
  type InvalidRequestErrorRep,
} from "../models/invalid-request-error-rep.js";
import { notFoundErrorRepSchema, type NotFoundErrorRep } from "../models/not-found-error-rep.js";
import { patchUsersRequestSchema, type PatchUsersRequest } from "../models/patch-users-request.js";
import { rateLimitedErrorRepSchema, type RateLimitedErrorRep } from "../models/rate-limited-error-rep.js";
import { unauthorizedErrorRepSchema, type UnauthorizedErrorRep } from "../models/unauthorized-error-rep.js";
import { userFlagSettingSchema, type UserFlagSetting } from "../models/user-flag-setting.js";
import { userFlagSettingsSchema, type UserFlagSettings } from "../models/user-flag-settings.js";
import { valuePutSchema, type ValuePut } from "../models/value-put.js";
import type { Servers } from "../servers.js";

/**
 * > ### Contexts are now available > > After you have upgraded your LaunchDarkly SDK to use
 * contexts instead of users, you should use [Contexts](https://launchdarkly.com/docs/api/contexts)
 * instead of the user settings API. To learn more, read
 * [Contexts](https://launchdarkly.com/docs/home/observability/contexts).
 *
 * LaunchDarkly's user settings API provides a picture of all feature flags and their current values
 * for a specific user. This gives you instant visibility into how a particular user experiences
 * your site or application. To learn more, read [View and manage
 * contexts](https://launchdarkly.com/docs/home/observability/context-attributes#view-and-manage-contexts).
 *
 * You can also use the user settings API to assign a user to a specific variation for any feature
 * flag.
 */
export class UserSettings {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Get expiring dates on flags for user
   *
   * @remarks
   * Get a list of flags for which the given user is scheduled for removal.
   *
   * @returns Expiring user target response
   *
   * @throws {@link UserSettings.GetExpiringFlagsForUserError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link LaunchDarklyRestApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   *
   * @deprecated
   */
  getExpiringFlagsForUser(
    request: UserSettings.GetExpiringFlagsForUserRequest,
    options?: RequestOptions,
  ): ApiPromise<ExpiringUserTargetGetResponse, UserSettings.GetExpiringFlagsForUserError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/api/v2/users/{projectKey}/{userKey}/expiring-user-targets/{environmentKey}",
        ),
        auth: this.#auth.apiKey,
        pathParams: [
          { name: "projectKey", value: request.projectKey, schema: s.string() },
          { name: "userKey", value: request.userKey, schema: s.string() },
          { name: "environmentKey", value: request.environmentKey, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: expiringUserTargetGetResponseSchema },
        errorFactory: UserSettings.GetExpiringFlagsForUserError,
      },
      options,
    );
  }

  /**
   * Get flag setting for user
   *
   * @remarks
   * Get a single flag setting for a user by flag key. <br /><br />The `_value` is the flag
   * variation that the user receives. The `setting` indicates whether you've explicitly targeted a
   * user to receive a particular variation. For example, if you have turned off a feature flag for
   * a user, this setting will be `false`. The example response indicates that the user
   * `Abbie_Braun` has the `sort.order` flag enabled.
   *
   * @returns User flag settings response
   *
   * @throws {@link UserSettings.GetUserFlagSettingError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link LaunchDarklyRestApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   *
   * @deprecated
   */
  getUserFlagSetting(
    request: UserSettings.GetUserFlagSettingRequest,
    options?: RequestOptions,
  ): ApiPromise<UserFlagSetting, UserSettings.GetUserFlagSettingError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/api/v2/users/{projectKey}/{environmentKey}/{userKey}/flags/{featureFlagKey}",
        ),
        auth: this.#auth.apiKey,
        pathParams: [
          { name: "projectKey", value: request.projectKey, schema: s.string() },
          { name: "environmentKey", value: request.environmentKey, schema: s.string() },
          { name: "userKey", value: request.userKey, schema: s.string() },
          { name: "featureFlagKey", value: request.featureFlagKey, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: userFlagSettingSchema },
        errorFactory: UserSettings.GetUserFlagSettingError,
      },
      options,
    );
  }

  /**
   * List flag settings for user
   *
   * @remarks
   * Get the current flag settings for a given user. <br /><br />The `_value` is the flag variation
   * that the user receives. The `setting` indicates whether you've explicitly targeted a user to
   * receive a particular variation. For example, if you have turned off a feature flag for a user,
   * this setting will be `false`. The example response indicates that the user `Abbie_Braun` has
   * the `sort.order` flag enabled and the `alternate.page` flag disabled, and that the user has not
   * been explicitly targeted to receive a particular variation.
   *
   * @returns User flag settings collection response
   *
   * @throws {@link UserSettings.GetUserFlagSettingsError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link LaunchDarklyRestApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   *
   * @deprecated
   */
  getUserFlagSettings(
    request: UserSettings.GetUserFlagSettingsRequest,
    options?: RequestOptions,
  ): ApiPromise<UserFlagSettings, UserSettings.GetUserFlagSettingsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v2/users/{projectKey}/{environmentKey}/{userKey}/flags"),
        auth: this.#auth.apiKey,
        pathParams: [
          { name: "projectKey", value: request.projectKey, schema: s.string() },
          { name: "environmentKey", value: request.environmentKey, schema: s.string() },
          { name: "userKey", value: request.userKey, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: userFlagSettingsSchema },
        errorFactory: UserSettings.GetUserFlagSettingsError,
      },
      options,
    );
  }

  /**
   * Update expiring user target for flags
   *
   * @remarks
   * Schedule the specified user for removal from individual targeting on one or more flags. The
   * user must already be individually targeted for each flag.
   *
   * You can add, update, or remove a scheduled removal date. You can only schedule a user for
   * removal on a single variation per flag.
   *
   * Updating an expiring target uses the semantic patch format. To make a semantic patch request,
   * you must append `domain-model=launchdarkly.semanticpatch` to your `Content-Type` header. To
   * learn more, read [Updates using semantic
   * patch](https://launchdarkly.com/docs/api#updates-using-semantic-patch).
   *
   * ### Instructions
   *
   * Semantic patch requests support the following `kind` instructions for updating expiring user
   * targets.
   *
   * <details> <summary>Click to expand instructions for <strong>updating expiring user
   * targets</strong></summary>
   *
   * #### addExpireUserTargetDate
   *
   * Adds a date and time that LaunchDarkly will remove the user from the flag's individual
   * targeting.
   *
   * ##### Parameters
   *
   * * `flagKey`: The flag key
   * * `variationId`: ID of a variation on the flag
   * * `value`: The time, in Unix milliseconds, when LaunchDarkly should remove the user from
   *   individual targeting for this flag.
   *
   * #### updateExpireUserTargetDate
   *
   * Updates the date and time that LaunchDarkly will remove the user from the flag's individual
   * targeting.
   *
   * ##### Parameters
   *
   * * `flagKey`: The flag key
   * * `variationId`: ID of a variation on the flag
   * * `value`: The time, in Unix milliseconds, when LaunchDarkly should remove the user from
   *   individual targeting for this flag.
   * * `version`: The version of the expiring user target to update. If included, update will fail
   *   if version doesn't match current version of the expiring user target.
   *
   * #### removeExpireUserTargetDate
   *
   * Removes the scheduled removal of the user from the flag's individual targeting. The user will
   * remain part of the flag's individual targeting until explicitly removed, or until another
   * removal is scheduled.
   *
   * ##### Parameters
   *
   * * `flagKey`: The flag key
   * * `variationId`: ID of a variation on the flag
   *
   * </details>
   *
   * @returns Expiring user target response
   *
   * @throws {@link UserSettings.PatchExpiringFlagsForUserError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link LaunchDarklyRestApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   *
   * @deprecated
   */
  patchExpiringFlagsForUser(
    request: UserSettings.PatchExpiringFlagsForUserRequest,
    options?: RequestOptions,
  ): ApiPromise<ExpiringUserTargetPatchResponse, UserSettings.PatchExpiringFlagsForUserError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default(
          "/api/v2/users/{projectKey}/{userKey}/expiring-user-targets/{environmentKey}",
        ),
        auth: this.#auth.apiKey,
        pathParams: [
          { name: "projectKey", value: request.projectKey, schema: s.string() },
          { name: "userKey", value: request.userKey, schema: s.string() },
          { name: "environmentKey", value: request.environmentKey, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: patchUsersRequestSchema },
      },
      {
        success: { kind: "json", schema: expiringUserTargetPatchResponseSchema },
        errorFactory: UserSettings.PatchExpiringFlagsForUserError,
      },
      options,
    );
  }

  /**
   * Update flag settings for user
   *
   * @remarks
   * Enable or disable a feature flag for a user based on their key.
   *
   * Omitting the `setting` attribute from the request body, or including a `setting` of `null`,
   * erases the current setting for a user.
   *
   * If you previously patched the flag, and the patch included the user's data, LaunchDarkly
   * continues to use that data. If LaunchDarkly has never encountered the user's key before, it
   * calculates the flag values based on the user key alone.
   *
   * @returns Action succeeded
   *
   * @throws {@link UserSettings.PutFlagSettingError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link LaunchDarklyRestApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   *
   * @deprecated
   */
  putFlagSetting(
    request: UserSettings.PutFlagSettingRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, UserSettings.PutFlagSettingError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default(
          "/api/v2/users/{projectKey}/{environmentKey}/{userKey}/flags/{featureFlagKey}",
        ),
        auth: this.#auth.apiKey,
        pathParams: [
          { name: "projectKey", value: request.projectKey, schema: s.string() },
          { name: "environmentKey", value: request.environmentKey, schema: s.string() },
          { name: "userKey", value: request.userKey, schema: s.string() },
          { name: "featureFlagKey", value: request.featureFlagKey, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: valuePutSchema },
      },
      {
        success: { kind: "empty" },
        errorFactory: UserSettings.PutFlagSettingError,
      },
      options,
    );
  }
}

export namespace UserSettings {
  export type GetExpiringFlagsForUserRequest = {
    /** The project key */
    projectKey: string;
    /** The user key */
    userKey: string;
    /** The environment key */
    environmentKey: string;
  };

  export class GetExpiringFlagsForUserError extends ApiError {
    declare readonly payload:
      | Declared<"unauthorizedErrorRep", UnauthorizedErrorRep>
      | Declared<"forbiddenErrorRep", ForbiddenErrorRep>
      | Declared<"notFoundErrorRep", NotFoundErrorRep>
      | Declared<"rateLimitedErrorRep", RateLimitedErrorRep>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetExpiringFlagsForUserError> = [
      { on: 401, kind: "unauthorizedErrorRep", decode: { kind: "json", schema: unauthorizedErrorRepSchema } },
      { on: 403, kind: "forbiddenErrorRep", decode: { kind: "json", schema: forbiddenErrorRepSchema } },
      { on: 404, kind: "notFoundErrorRep", decode: { kind: "json", schema: notFoundErrorRepSchema } },
      { on: 429, kind: "rateLimitedErrorRep", decode: { kind: "json", schema: rateLimitedErrorRepSchema } },
    ];
  }

  export type GetUserFlagSettingRequest = {
    /** The project key */
    projectKey: string;
    /** The environment key */
    environmentKey: string;
    /** The user key */
    userKey: string;
    /** The feature flag key */
    featureFlagKey: string;
  };

  export class GetUserFlagSettingError extends ApiError {
    declare readonly payload:
      | Declared<"invalidRequestErrorRep", InvalidRequestErrorRep>
      | Declared<"unauthorizedErrorRep", UnauthorizedErrorRep>
      | Declared<"forbiddenErrorRep", ForbiddenErrorRep>
      | Declared<"notFoundErrorRep", NotFoundErrorRep>
      | Declared<"rateLimitedErrorRep", RateLimitedErrorRep>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetUserFlagSettingError> = [
      {
        on: 400,
        kind: "invalidRequestErrorRep",
        decode: { kind: "json", schema: invalidRequestErrorRepSchema },
      },
      { on: 401, kind: "unauthorizedErrorRep", decode: { kind: "json", schema: unauthorizedErrorRepSchema } },
      { on: 403, kind: "forbiddenErrorRep", decode: { kind: "json", schema: forbiddenErrorRepSchema } },
      { on: 404, kind: "notFoundErrorRep", decode: { kind: "json", schema: notFoundErrorRepSchema } },
      { on: 429, kind: "rateLimitedErrorRep", decode: { kind: "json", schema: rateLimitedErrorRepSchema } },
    ];
  }

  export type GetUserFlagSettingsRequest = {
    /** The project key */
    projectKey: string;
    /** The environment key */
    environmentKey: string;
    /** The user key */
    userKey: string;
  };

  export class GetUserFlagSettingsError extends ApiError {
    declare readonly payload:
      | Declared<"invalidRequestErrorRep", InvalidRequestErrorRep>
      | Declared<"unauthorizedErrorRep", UnauthorizedErrorRep>
      | Declared<"forbiddenErrorRep", ForbiddenErrorRep>
      | Declared<"notFoundErrorRep", NotFoundErrorRep>
      | Declared<"rateLimitedErrorRep", RateLimitedErrorRep>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetUserFlagSettingsError> = [
      {
        on: 400,
        kind: "invalidRequestErrorRep",
        decode: { kind: "json", schema: invalidRequestErrorRepSchema },
      },
      { on: 401, kind: "unauthorizedErrorRep", decode: { kind: "json", schema: unauthorizedErrorRepSchema } },
      { on: 403, kind: "forbiddenErrorRep", decode: { kind: "json", schema: forbiddenErrorRepSchema } },
      { on: 404, kind: "notFoundErrorRep", decode: { kind: "json", schema: notFoundErrorRepSchema } },
      { on: 429, kind: "rateLimitedErrorRep", decode: { kind: "json", schema: rateLimitedErrorRepSchema } },
    ];
  }

  export type PatchExpiringFlagsForUserRequest = {
    /** The project key */
    projectKey: string;
    /** The user key */
    userKey: string;
    /** The environment key */
    environmentKey: string;
    body: PatchUsersRequest;
  };

  export class PatchExpiringFlagsForUserError extends ApiError {
    declare readonly payload:
      | Declared<"invalidRequestErrorRep", InvalidRequestErrorRep>
      | Declared<"unauthorizedErrorRep", UnauthorizedErrorRep>
      | Declared<"forbiddenErrorRep", ForbiddenErrorRep>
      | Declared<"notFoundErrorRep", NotFoundErrorRep>
      | Declared<"rateLimitedErrorRep", RateLimitedErrorRep>
      | Undeclared;

    static readonly errors: ErrorDecoders<PatchExpiringFlagsForUserError> = [
      {
        on: 400,
        kind: "invalidRequestErrorRep",
        decode: { kind: "json", schema: invalidRequestErrorRepSchema },
      },
      { on: 401, kind: "unauthorizedErrorRep", decode: { kind: "json", schema: unauthorizedErrorRepSchema } },
      { on: 403, kind: "forbiddenErrorRep", decode: { kind: "json", schema: forbiddenErrorRepSchema } },
      { on: 404, kind: "notFoundErrorRep", decode: { kind: "json", schema: notFoundErrorRepSchema } },
      { on: 429, kind: "rateLimitedErrorRep", decode: { kind: "json", schema: rateLimitedErrorRepSchema } },
    ];
  }

  export type PutFlagSettingRequest = {
    /** The project key */
    projectKey: string;
    /** The environment key */
    environmentKey: string;
    /** The user key */
    userKey: string;
    /** The feature flag key */
    featureFlagKey: string;
    body: ValuePut;
  };

  export class PutFlagSettingError extends ApiError {
    declare readonly payload:
      | Declared<"invalidRequestErrorRep", InvalidRequestErrorRep>
      | Declared<"unauthorizedErrorRep", UnauthorizedErrorRep>
      | Declared<"forbiddenErrorRep", ForbiddenErrorRep>
      | Declared<"notFoundErrorRep", NotFoundErrorRep>
      | Declared<"rateLimitedErrorRep", RateLimitedErrorRep>
      | Undeclared;

    static readonly errors: ErrorDecoders<PutFlagSettingError> = [
      {
        on: 400,
        kind: "invalidRequestErrorRep",
        decode: { kind: "json", schema: invalidRequestErrorRepSchema },
      },
      { on: 401, kind: "unauthorizedErrorRep", decode: { kind: "json", schema: unauthorizedErrorRepSchema } },
      { on: 403, kind: "forbiddenErrorRep", decode: { kind: "json", schema: forbiddenErrorRepSchema } },
      { on: 404, kind: "notFoundErrorRep", decode: { kind: "json", schema: notFoundErrorRepSchema } },
      { on: 429, kind: "rateLimitedErrorRep", decode: { kind: "json", schema: rateLimitedErrorRepSchema } },
    ];
  }
}
