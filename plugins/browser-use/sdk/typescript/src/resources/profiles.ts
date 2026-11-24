import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { httpValidationErrorSchema, type HttpValidationError } from "../models/http-validation-error.js";
import {
  insufficientCreditsErrorSchema,
  type InsufficientCreditsError,
} from "../models/insufficient-credits-error.js";
import { profileCreateRequestSchema, type ProfileCreateRequest } from "../models/profile-create-request.js";
import { profileListResponseSchema, type ProfileListResponse } from "../models/profile-list-response.js";
import { profileNotFoundErrorSchema, type ProfileNotFoundError } from "../models/profile-not-found-error.js";
import { profileUpdateRequestSchema, type ProfileUpdateRequest } from "../models/profile-update-request.js";
import { profileViewSchema, type ProfileView } from "../models/profile-view.js";
import { queryInternalSchema, querySchema, type Query } from "../models/unions/query.js";
import { validationErrorSchema, type ValidationError } from "../models/validation-error.js";
import type { Servers } from "../servers.js";

export class Profiles {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Create Profile
   *
   * @remarks
   * Profiles allow you to preserve the state of the browser between tasks.
   *
   * They are most commonly used to allow users to preserve the log-in state in the agent between
   * tasks. You'd normally create one profile per user and then use it for all their tasks.
   *
   * You can set a `user_id` when creating a profile to associate it with a user in your system.
   * This allows you to later search for the profile using the GET /profiles endpoint with a query
   * parameter.
   *
   * @returns Successful Response
   *
   * @throws {@link Profiles.CreateProfileProfilesPostError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link BrowserUseError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createProfileProfilesPost(
    request: Profiles.CreateProfileProfilesPostRequest = {},
    options?: RequestOptions,
  ): ApiPromise<ProfileView, Profiles.CreateProfileProfilesPostError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/profiles"),
        auth: this.#auth.apiKeyHeader,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => profileCreateRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: profileViewSchema },
        errorFactory: Profiles.CreateProfileProfilesPostError,
      },
      options,
    );
  }

  /**
   * Delete Browser Profile
   *
   * @remarks
   * Permanently delete a browser profile and its configuration.
   *
   * @returns Successful Response
   *
   * @throws {@link Profiles.DeleteBrowserProfileProfilesProfileIdDeleteError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link BrowserUseError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteBrowserProfileProfilesProfileIdDelete(
    request: Profiles.DeleteBrowserProfileProfilesProfileIdDeleteRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, Profiles.DeleteBrowserProfileProfilesProfileIdDeleteError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/profiles/{profile_id}"),
        auth: this.#auth.apiKeyHeader,
        pathParams: [{ name: "profile_id", value: request.profileId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: Profiles.DeleteBrowserProfileProfilesProfileIdDeleteError,
      },
      options,
    );
  }

  /**
   * Get Profile
   *
   * @remarks
   * Get profile details.
   *
   * @returns Successful Response
   *
   * @throws {@link Profiles.GetProfileProfilesProfileIdGetError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link BrowserUseError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getProfileProfilesProfileIdGet(
    request: Profiles.GetProfileProfilesProfileIdGetRequest,
    options?: RequestOptions,
  ): ApiPromise<ProfileView, Profiles.GetProfileProfilesProfileIdGetError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/profiles/{profile_id}"),
        auth: this.#auth.apiKeyHeader,
        pathParams: [{ name: "profile_id", value: request.profileId, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: profileViewSchema },
        errorFactory: Profiles.GetProfileProfilesProfileIdGetError,
      },
      options,
    );
  }

  /**
   * List Profiles
   *
   * @remarks
   * Get paginated list of profiles.
   *
   * Use the `query` parameter to search profiles by name or user_id. This is useful when you have
   * many profiles and need to find a specific user.
   *
   * Example: If you set `user_id` to your internal user identifier when creating profiles, you can
   * later search for that user by passing their identifier as the `query` parameter.
   *
   * @returns Successful Response
   *
   * @throws {@link Profiles.ListProfilesProfilesGetError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link BrowserUseError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listProfilesProfilesGet(
    request: Profiles.ListProfilesProfilesGetRequest = {},
    options?: RequestOptions,
  ): ApiPromise<ProfileListResponse, Profiles.ListProfilesProfilesGetError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/profiles"),
        auth: this.#auth.apiKeyHeader,
        pathParams: [],
        query: [
          { name: "pageSize", value: request.pageSize, schema: s.defaulted(s.int(), 10) },
          { name: "pageNumber", value: request.pageNumber, schema: s.defaulted(s.int(), 1) },
          { name: "query", value: request.query, schema: s.optional(s.lazy(() => queryInternalSchema)) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: profileListResponseSchema },
        errorFactory: Profiles.ListProfilesProfilesGetError,
      },
      options,
    );
  }

  /**
   * Update Profile
   *
   * @remarks
   * Update a browser profile's information.
   *
   * @returns Successful Response
   *
   * @throws {@link Profiles.UpdateProfileProfilesProfileIdPatchError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link BrowserUseError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateProfileProfilesProfileIdPatch(
    request: Profiles.UpdateProfileProfilesProfileIdPatchRequest,
    options?: RequestOptions,
  ): ApiPromise<ProfileView, Profiles.UpdateProfileProfilesProfileIdPatchError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default("/profiles/{profile_id}"),
        auth: this.#auth.apiKeyHeader,
        pathParams: [{ name: "profile_id", value: request.profileId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: profileUpdateRequestSchema },
      },
      {
        success: { kind: "json", schema: profileViewSchema },
        errorFactory: Profiles.UpdateProfileProfilesProfileIdPatchError,
      },
      options,
    );
  }
}

export namespace Profiles {
  export type CreateProfileProfilesPostRequest = {
    body?: ProfileCreateRequest;
  };

  export class CreateProfileProfilesPostError extends ApiError {
    declare readonly payload:
      | Declared<"insufficientCreditsError", InsufficientCreditsError>
      | Declared<"validationError", ValidationError>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateProfileProfilesPostError> = [
      {
        on: 402,
        kind: "insufficientCreditsError",
        decode: { kind: "json", schema: insufficientCreditsErrorSchema },
      },
      { on: 422, kind: "validationError", decode: { kind: "json", schema: validationErrorSchema } },
    ];
  }

  export type DeleteBrowserProfileProfilesProfileIdDeleteRequest = {
    profileId: string;
  };

  export class DeleteBrowserProfileProfilesProfileIdDeleteError extends ApiError {
    declare readonly payload: Declared<"httpValidationError", HttpValidationError> | Undeclared;

    static readonly errors: ErrorDecoders<DeleteBrowserProfileProfilesProfileIdDeleteError> = [
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }

  export type GetProfileProfilesProfileIdGetRequest = {
    profileId: string;
  };

  export class GetProfileProfilesProfileIdGetError extends ApiError {
    declare readonly payload:
      | Declared<"profileNotFoundError", ProfileNotFoundError>
      | Declared<"httpValidationError", HttpValidationError>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetProfileProfilesProfileIdGetError> = [
      { on: 404, kind: "profileNotFoundError", decode: { kind: "json", schema: profileNotFoundErrorSchema } },
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }

  export type ListProfilesProfilesGetRequest = {
    /** @default 10 */
    pageSize?: number;
    /** @default 1 */
    pageNumber?: number;
    query?: Query;
  };

  export const listProfilesProfilesGetRequestSchema: Schema<ListProfilesProfilesGetRequest> = s.lazySchema(
    () =>
      s.object<ListProfilesProfilesGetRequest>({
        pageSize: s.defaulted(s.int().check(s.gte(1), s.lte(100)), 10),
        pageNumber: s.defaulted(s.int().check(s.gte(1)), 1),
        query: s.optional(s.lazy(() => querySchema)),
      }),
  );

  export class ListProfilesProfilesGetError extends ApiError {
    declare readonly payload: Declared<"httpValidationError", HttpValidationError> | Undeclared;

    static readonly errors: ErrorDecoders<ListProfilesProfilesGetError> = [
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }

  export type UpdateProfileProfilesProfileIdPatchRequest = {
    profileId: string;
    body: ProfileUpdateRequest;
  };

  export class UpdateProfileProfilesProfileIdPatchError extends ApiError {
    declare readonly payload:
      | Declared<"profileNotFoundError", ProfileNotFoundError>
      | Declared<"httpValidationError", HttpValidationError>
      | Undeclared;

    static readonly errors: ErrorDecoders<UpdateProfileProfilesProfileIdPatchError> = [
      { on: 404, kind: "profileNotFoundError", decode: { kind: "json", schema: profileNotFoundErrorSchema } },
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }
}
