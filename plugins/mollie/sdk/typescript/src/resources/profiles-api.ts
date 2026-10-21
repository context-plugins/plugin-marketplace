import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import * as s from "../core/validation/index.js";
import { profileRequestSchema, type ProfileRequest } from "../models/profile-request.js";
import { v2ProfilesRequestSchema, type V2ProfilesRequest } from "../models/v2-profiles-request.js";
import type { Servers } from "../servers.js";

/**
 * Operations related to the Profiles API
 */
export class ProfilesApi {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Create profile
   *
   * @remarks
   * Create a profile to process payments on.
   *
   * Profiles are required for payment processing. Normally they are created via the Mollie
   * dashboard. Alternatively, you can use this endpoint to automate profile creation.
   *
   * @returns The newly created profile object.
   *
   * @throws {@link ProfilesApi.CreateProfileError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link MollieApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createProfile(
    request: ProfilesApi.CreateProfileRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ProfilesApi.CreateProfileError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v2/profiles"),
        auth: anyAuth(this.#auth.advancedAccessToken, this.#auth.oAuth),
        pathParams: [],
        query: [],
        headers: [{ name: "idempotency-key", value: request.idempotencyKey, schema: s.optional(s.string()) }],
        body: { kind: "json", value: request.body, schema: profileRequestSchema },
      },
      {
        success: { kind: "empty" },
        errorFactory: ProfilesApi.CreateProfileError,
      },
      options,
    );
  }

  /**
   * Delete profile
   *
   * @remarks
   * Delete a profile. A deleted profile and its related credentials can no longer be used for
   * accepting payments.
   *
   * @returns An empty response.
   *
   * @throws {@link ProfilesApi.DeleteProfileError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link MollieApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteProfile(
    request: ProfilesApi.DeleteProfileRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ProfilesApi.DeleteProfileError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/v2/profiles/{profileId}"),
        auth: anyAuth(this.#auth.advancedAccessToken, this.#auth.oAuth),
        pathParams: [{ name: "profileId", value: request.profileId, schema: s.string() }],
        query: [],
        headers: [{ name: "idempotency-key", value: request.idempotencyKey, schema: s.optional(s.string()) }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: ProfilesApi.DeleteProfileError,
      },
      options,
    );
  }

  /**
   * Get current profile
   *
   * @remarks
   * Retrieve the currently authenticated profile. A convenient alias of the [Get
   * profile](get-profile) endpoint.
   *
   * For a complete reference of the profile object, refer to the [Get profile](get-profile)
   * endpoint documentation.
   *
   * @returns The current profile object. For a complete reference of the profile object, refer to
   * the [Get profile](get-profile) endpoint documentation.
   *
   * @throws {@link ProfilesApi.GetCurrentProfileError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link MollieApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getCurrentProfile(
    request: ProfilesApi.GetCurrentProfileRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ProfilesApi.GetCurrentProfileError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v2/profiles/me"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [],
        headers: [{ name: "idempotency-key", value: request.idempotencyKey, schema: s.optional(s.string()) }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: ProfilesApi.GetCurrentProfileError,
      },
      options,
    );
  }

  /**
   * Get profile
   *
   * @remarks
   * Retrieve a single profile by its ID.
   *
   * @returns The profile object.
   *
   * @throws {@link ProfilesApi.GetProfileError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link MollieApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getProfile(
    request: ProfilesApi.GetProfileRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ProfilesApi.GetProfileError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v2/profiles/{profileId}"),
        auth: anyAuth(this.#auth.advancedAccessToken, this.#auth.oAuth),
        pathParams: [{ name: "profileId", value: request.profileId, schema: s.string() }],
        query: [{ name: "testmode", value: request.testmode, schema: s.optional(s.boolean()) }],
        headers: [{ name: "idempotency-key", value: request.idempotencyKey, schema: s.optional(s.string()) }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: ProfilesApi.GetProfileError,
      },
      options,
    );
  }

  /**
   * List profiles
   *
   * @remarks
   * Retrieve a list of all of your profiles.
   *
   * The results are paginated.
   *
   * @returns A list of profile objects.
   *
   * @throws {@link ProfilesApi.ListProfilesError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link MollieApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listProfiles(
    request: ProfilesApi.ListProfilesRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ProfilesApi.ListProfilesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v2/profiles"),
        auth: anyAuth(this.#auth.advancedAccessToken, this.#auth.oAuth),
        pathParams: [],
        query: [
          { name: "from", value: request.from, schema: s.optionalNullable(s.string()) },
          { name: "limit", value: request.limit, schema: s.optionalNullable(s.int()) },
        ],
        headers: [{ name: "idempotency-key", value: request.idempotencyKey, schema: s.optional(s.string()) }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: ProfilesApi.ListProfilesError,
      },
      options,
    );
  }

  /**
   * Update profile
   *
   * @remarks
   * Update an existing profile.
   *
   * Profiles are required for payment processing. Normally they are created and updated via the
   * Mollie dashboard. Alternatively, you can use this endpoint to automate profile management.
   *
   * @returns The updated profile object.
   *
   * @throws {@link ProfilesApi.UpdateProfileError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link MollieApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateProfile(
    request: ProfilesApi.UpdateProfileRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ProfilesApi.UpdateProfileError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default("/v2/profiles/{profileId}"),
        auth: anyAuth(this.#auth.advancedAccessToken, this.#auth.oAuth),
        pathParams: [{ name: "profileId", value: request.profileId, schema: s.string() }],
        query: [],
        headers: [{ name: "idempotency-key", value: request.idempotencyKey, schema: s.optional(s.string()) }],
        body: { kind: "json", value: request.body, schema: v2ProfilesRequestSchema },
      },
      {
        success: { kind: "empty" },
        errorFactory: ProfilesApi.UpdateProfileError,
      },
      options,
    );
  }
}

export namespace ProfilesApi {
  export type CreateProfileRequest = {
    /** A unique key to ensure idempotent requests. This key should be a UUID v4 string. */
    idempotencyKey?: string;
    body: ProfileRequest;
  };

  export class CreateProfileError extends ApiError {
    declare readonly payload:
      | Declared<"error403", undefined>
      | Declared<"error422", undefined>
      | Declared<"error429", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateProfileError> = [
      { on: 403, kind: "error403", decode: { kind: "empty" } },
      { on: 422, kind: "error422", decode: { kind: "empty" } },
      { on: 429, kind: "error429", decode: { kind: "empty" } },
    ];
  }

  export type DeleteProfileRequest = {
    /** Provide the ID of the related profile. */
    profileId: string;
    /** A unique key to ensure idempotent requests. This key should be a UUID v4 string. */
    idempotencyKey?: string;
  };

  export class DeleteProfileError extends ApiError {
    declare readonly payload:
      | Declared<"error404", undefined>
      | Declared<"error410", undefined>
      | Declared<"error429", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<DeleteProfileError> = [
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 410, kind: "error410", decode: { kind: "empty" } },
      { on: 429, kind: "error429", decode: { kind: "empty" } },
    ];
  }

  export type GetCurrentProfileRequest = {
    /** A unique key to ensure idempotent requests. This key should be a UUID v4 string. */
    idempotencyKey?: string;
  };

  export class GetCurrentProfileError extends ApiError {
    declare readonly payload: Declared<"error429", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<GetCurrentProfileError> = [
      { on: 429, kind: "error429", decode: { kind: "empty" } },
    ];
  }

  export type GetProfileRequest = {
    /** Provide the ID of the related profile. */
    profileId: string;
    /**
     * You can enable test mode by setting the `testmode` query parameter to `true`.
     *
     * Test entities cannot be retrieved when the endpoint is set to live mode, and vice versa.
     */
    testmode?: boolean;
    /** A unique key to ensure idempotent requests. This key should be a UUID v4 string. */
    idempotencyKey?: string;
  };

  export class GetProfileError extends ApiError {
    declare readonly payload:
      | Declared<"error404", undefined>
      | Declared<"error410", undefined>
      | Declared<"error429", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetProfileError> = [
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 410, kind: "error410", decode: { kind: "empty" } },
      { on: 429, kind: "error429", decode: { kind: "empty" } },
    ];
  }

  export type ListProfilesRequest = {
    /**
     * Provide an ID to start the result set from the item with the given ID and onwards. This
     * allows you to paginate the result set.
     */
    from?: string | null;
    /** The maximum number of items to return. Defaults to 50 items. */
    limit?: number | null;
    /** A unique key to ensure idempotent requests. This key should be a UUID v4 string. */
    idempotencyKey?: string;
  };

  export class ListProfilesError extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Declared<"error429", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<ListProfilesError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 429, kind: "error429", decode: { kind: "empty" } },
    ];
  }

  export type UpdateProfileRequest = {
    /** Provide the ID of the related profile. */
    profileId: string;
    /** A unique key to ensure idempotent requests. This key should be a UUID v4 string. */
    idempotencyKey?: string;
    body: V2ProfilesRequest;
  };

  export class UpdateProfileError extends ApiError {
    declare readonly payload:
      | Declared<"error403", undefined>
      | Declared<"error404", undefined>
      | Declared<"error410", undefined>
      | Declared<"error422", undefined>
      | Declared<"error429", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<UpdateProfileError> = [
      { on: 403, kind: "error403", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 410, kind: "error410", decode: { kind: "empty" } },
      { on: 422, kind: "error422", decode: { kind: "empty" } },
      { on: 429, kind: "error429", decode: { kind: "empty" } },
    ];
  }
}
