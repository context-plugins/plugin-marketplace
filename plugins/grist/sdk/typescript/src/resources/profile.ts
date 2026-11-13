import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { profileApikeyRequestSchema, type ProfileApikeyRequest } from "../models/profile-apikey-request.js";
import {
  profileUserLocaleRequestSchema,
  type ProfileUserLocaleRequest,
} from "../models/profile-user-locale-request.js";
import {
  profileUserNameRequestSchema,
  type ProfileUserNameRequest,
} from "../models/profile-user-name-request.js";
import {
  profileApikeyResponseSchema,
  type ProfileApikeyResponse,
} from "../models/unions/profile-apikey-response.js";
import {
  profileUserLocaleResponseSchema,
  type ProfileUserLocaleResponse,
} from "../models/unions/profile-user-locale-response.js";
import {
  profileUserNameResponseSchema,
  type ProfileUserNameResponse,
} from "../models/unions/profile-user-name-response.js";
import { userSchema, type User } from "../models/user.js";
import type { Servers } from "../servers.js";

export class Profile {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Create or regenerate API key
   *
   * @remarks
   * Create a new API key or regenerate an existing one.
   *
   * @returns New API key
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link GristApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createApiKey(
    request: Profile.CreateApiKeyRequest = {},
    options?: RequestOptions,
  ): ApiPromise<string, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/profile/apikey"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => profileApikeyRequestSchema)),
        },
      },
      {
        success: { kind: "text", schema: s.string() },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Delete user's API key
   *
   * @remarks
   * Delete the current user's API key.
   *
   * @returns API key deleted successfully
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link GristApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteApiKey(options?: RequestOptions): ApiPromise<ProfileApikeyResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/profile/apikey"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: profileApikeyResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Get user's API key
   *
   * @remarks
   * Returns the current user's API key if one exists.
   *
   * @returns API key
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link GristApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getApiKey(options?: RequestOptions): ApiPromise<string, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/profile/apikey"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "text", schema: s.string() },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Get current user's profile
   *
   * @remarks
   * Returns the profile information of the currently authenticated user.
   *
   * @returns User profile
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link GristApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getProfile(options?: RequestOptions): ApiPromise<User, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/profile/user"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: userSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Update user's locale
   *
   * @remarks
   * Update the locale preference for the current user.
   *
   * @returns Locale updated successfully
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link GristApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateUserLocale(
    request: Profile.UpdateUserLocaleRequest = {},
    options?: RequestOptions,
  ): ApiPromise<ProfileUserLocaleResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/profile/user/locale"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => profileUserLocaleRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: profileUserLocaleResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Update user's name
   *
   * @remarks
   * Update the display name for the current user.
   *
   * @returns Name updated successfully
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link GristApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateUserName(
    request: Profile.UpdateUserNameRequest = {},
    options?: RequestOptions,
  ): ApiPromise<ProfileUserNameResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/profile/user/name"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => profileUserNameRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: profileUserNameResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace Profile {
  export type CreateApiKeyRequest = {
    body?: ProfileApikeyRequest;
  };

  export type UpdateUserLocaleRequest = {
    body?: ProfileUserLocaleRequest;
  };

  export type UpdateUserNameRequest = {
    body?: ProfileUserNameRequest;
  };
}
