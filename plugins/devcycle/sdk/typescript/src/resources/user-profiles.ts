import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { noneAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { projectUserProfileInternalSchema, type ProjectUserProfile } from "../models/project-user-profile.js";
import {
  updateUserProfileDtoInternalSchema,
  type UpdateUserProfileDto,
} from "../models/update-user-profile-dto.js";
import type { Servers } from "../servers.js";

export class UserProfiles {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;

  constructor(rawClient: RawClient, servers: Servers) {
    this.#rawClient = rawClient;
    this.#servers = servers;
  }

  /**
   * Create or Update User Profile for the Current User in the specified Project
   *
   * @remarks
   * Create or Update a User Profile for Overrides
   *
   * @throws {@link UserProfiles.UserProfilesControllerCreateOrUpdateError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link DevCycleError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  userProfilesControllerCreateOrUpdate(
    request: UserProfiles.UserProfilesControllerCreateOrUpdateRequest,
    options?: RequestOptions,
  ): ApiPromise<ProjectUserProfile, UserProfiles.UserProfilesControllerCreateOrUpdateError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default("/v1/projects/{project}/userProfile/current"),
        auth: noneAuth,
        pathParams: [{ name: "project", value: request.project, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: updateUserProfileDtoInternalSchema },
      },
      {
        success: { kind: "json", schema: projectUserProfileInternalSchema },
        errorFactory: UserProfiles.UserProfilesControllerCreateOrUpdateError,
      },
      options,
    );
  }

  /**
   * Get User Profile for the Current User in the specified Project
   *
   * @remarks
   * Get User Profile for the authenticated User in the specified Project
   *
   * @throws {@link UserProfiles.UserProfilesControllerFindAllError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link DevCycleError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  userProfilesControllerFindAll(
    request: UserProfiles.UserProfilesControllerFindAllRequest,
    options?: RequestOptions,
  ): ApiPromise<ProjectUserProfile, UserProfiles.UserProfilesControllerFindAllError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/projects/{project}/userProfile/current"),
        auth: noneAuth,
        pathParams: [{ name: "project", value: request.project, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: projectUserProfileInternalSchema },
        errorFactory: UserProfiles.UserProfilesControllerFindAllError,
      },
      options,
    );
  }
}

export namespace UserProfiles {
  export type UserProfilesControllerCreateOrUpdateRequest = {
    /** A Project key or ID */
    project: string;
    body: UpdateUserProfileDto;
  };

  export class UserProfilesControllerCreateOrUpdateError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error401", undefined>
      | Declared<"error403", undefined>
      | Declared<"error404", undefined>
      | Declared<"error409", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<UserProfilesControllerCreateOrUpdateError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 403, kind: "error403", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 409, kind: "error409", decode: { kind: "empty" } },
    ];
  }

  export type UserProfilesControllerFindAllRequest = {
    /** A Project key or ID */
    project: string;
  };

  export class UserProfilesControllerFindAllError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error403", undefined>
      | Declared<"error404", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<UserProfilesControllerFindAllError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 403, kind: "error403", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
    ];
  }
}
