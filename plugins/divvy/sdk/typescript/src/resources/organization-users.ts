import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { noneAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { bdcErrorInternalSchema, type BdcError } from "../models/bdc-error.js";
import {
  listResponseDtoOrganizationUserResponseDtoSchema,
  type ListResponseDtoOrganizationUserResponseDto,
} from "../models/list-response-dto-organization-user-response-dto.js";
import {
  organizationUserCreateRequestDtoInternalSchema,
  type OrganizationUserCreateRequestDto,
} from "../models/organization-user-create-request-dto.js";
import {
  organizationUserResponseDtoSchema,
  type OrganizationUserResponseDto,
} from "../models/organization-user-response-dto.js";
import {
  organizationUserUpdateRequestDtoInternalSchema,
  organizationUserUpdateRequestDtoSchema,
  type OrganizationUserUpdateRequestDto,
} from "../models/organization-user-update-request-dto.js";
import type { Servers } from "../servers.js";

export class OrganizationUsers {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;

  constructor(rawClient: RawClient, servers: Servers) {
    this.#rawClient = rawClient;
    this.#servers = servers;
  }

  /**
   * Archive a user
   *
   * @remarks
   * Archive an existing user. In the response, the `archived` field is set as `true`."
   *
   * You can restore an archived user with `POST /v3/users/{userId}/restore`. There is no change
   * when you archive an archived user.
   *
   * @returns Archive a user response
   *
   * @throws {@link OrganizationUsers.ArchiveOrganizationUserError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link DivvyError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  archiveOrganizationUser(
    request: OrganizationUsers.ArchiveOrganizationUserRequest,
    options?: RequestOptions,
  ): ApiPromise<OrganizationUserResponseDto, OrganizationUsers.ArchiveOrganizationUserError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v3/users/{userId}/archive"),
        auth: noneAuth,
        pathParams: [{ name: "userId", value: request.userId, schema: s.string() }],
        query: [],
        headers: [
          { name: "sessionId", value: request.sessionId, schema: s.optionalNullable(s.string()) },
          { name: "devKey", value: request.devKey, schema: s.optionalNullable(s.string()) },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: organizationUserResponseDtoSchema },
        errorFactory: OrganizationUsers.ArchiveOrganizationUserError,
      },
      options,
    );
  }

  /**
   * Create a user
   *
   * @remarks
   * Create a new user. The currently signed-in user must have the `ADMINISTRATOR` user role in the
   * BILL organization to perform this operation.
   *
   * When you create a user, BILL sends an email to the user for them to complete their sign-up.
   * After user sign-up is complete, the user can access features in your BILL organization
   * depending on the user role.
   *
   * See Organizations and Users in the Guides section for more information, sample requests, and
   * responses.
   *
   * @returns Create a user response
   *
   * @throws {@link OrganizationUsers.CreateOrganizationUserError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link DivvyError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createOrganizationUser(
    request: OrganizationUsers.CreateOrganizationUserRequest,
    options?: RequestOptions,
  ): ApiPromise<OrganizationUserResponseDto, OrganizationUsers.CreateOrganizationUserError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v3/users"),
        auth: noneAuth,
        pathParams: [],
        query: [],
        headers: [
          { name: "sessionId", value: request.sessionId, schema: s.optionalNullable(s.string()) },
          { name: "devKey", value: request.devKey, schema: s.optionalNullable(s.string()) },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "json", value: request.body, schema: organizationUserCreateRequestDtoInternalSchema },
      },
      {
        success: { kind: "json", schema: organizationUserResponseDtoSchema },
        errorFactory: OrganizationUsers.CreateOrganizationUserError,
      },
      options,
    );
  }

  /**
   * Get user details
   *
   * @remarks
   * Get details about an existing user.
   *
   * @returns Get user details response
   *
   * @throws {@link OrganizationUsers.GetOrganizationUserError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link DivvyError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getOrganizationUser(
    request: OrganizationUsers.GetOrganizationUserRequest,
    options?: RequestOptions,
  ): ApiPromise<OrganizationUserResponseDto, OrganizationUsers.GetOrganizationUserError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/users/{userId}"),
        auth: noneAuth,
        pathParams: [{ name: "userId", value: request.userId, schema: s.string() }],
        query: [],
        headers: [
          { name: "sessionId", value: request.sessionId, schema: s.optionalNullable(s.string()) },
          { name: "devKey", value: request.devKey, schema: s.optionalNullable(s.string()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: organizationUserResponseDtoSchema },
        errorFactory: OrganizationUsers.GetOrganizationUserError,
      },
      options,
    );
  }

  /**
   * Get list of users
   *
   * @remarks
   * Get a list of user objects. By default, you get 20 results on one page of results. Set `max` in
   * your request to get up to 100 results on one page.
   *
   * See Search operations with lists in the Guides section for filtering, sorting, and pagination
   * examples.
   *
   * @returns Get list of users response
   *
   * @throws {@link OrganizationUsers.ListOrganizationUsersError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link DivvyError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listOrganizationUsers(
    request: OrganizationUsers.ListOrganizationUsersRequest = {},
    options?: RequestOptions,
  ): ApiPromise<ListResponseDtoOrganizationUserResponseDto, OrganizationUsers.ListOrganizationUsersError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/users"),
        auth: noneAuth,
        pathParams: [],
        query: [
          { name: "max", value: request.max, schema: s.optionalNullable(s.int()) },
          { name: "sort", value: request.sort, schema: s.optionalNullable(s.string()) },
          { name: "filters", value: request.filters, schema: s.optionalNullable(s.string()) },
          { name: "page", value: request.page, schema: s.optionalNullable(s.string()) },
        ],
        headers: [
          { name: "sessionId", value: request.sessionId, schema: s.optionalNullable(s.string()) },
          { name: "devKey", value: request.devKey, schema: s.optionalNullable(s.string()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listResponseDtoOrganizationUserResponseDtoSchema },
        errorFactory: OrganizationUsers.ListOrganizationUsersError,
      },
      options,
    );
  }

  /**
   * Restore an archived user
   *
   * @remarks
   * Restore an archived user. In the response, the `archived` field is set as `false`.
   *
   * You can perform any valid BILL operation on restored users. There is no change when you restore
   * a restored user.
   *
   * @returns Restore an archived user response
   *
   * @throws {@link OrganizationUsers.RestoreOrganizationUserError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link DivvyError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  restoreOrganizationUser(
    request: OrganizationUsers.RestoreOrganizationUserRequest,
    options?: RequestOptions,
  ): ApiPromise<OrganizationUserResponseDto, OrganizationUsers.RestoreOrganizationUserError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v3/users/{userId}/restore"),
        auth: noneAuth,
        pathParams: [{ name: "userId", value: request.userId, schema: s.string() }],
        query: [],
        headers: [
          { name: "sessionId", value: request.sessionId, schema: s.optionalNullable(s.string()) },
          { name: "devKey", value: request.devKey, schema: s.optionalNullable(s.string()) },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: organizationUserResponseDtoSchema },
        errorFactory: OrganizationUsers.RestoreOrganizationUserError,
      },
      options,
    );
  }

  /**
   * Update a user
   *
   * @remarks
   * Update details about an existing user.
   *
   * @returns Update a user response
   *
   * @throws {@link OrganizationUsers.UpdateOrganizationUserError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link DivvyError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateOrganizationUser(
    request: OrganizationUsers.UpdateOrganizationUserRequest,
    options?: RequestOptions,
  ): ApiPromise<OrganizationUserResponseDto, OrganizationUsers.UpdateOrganizationUserError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default("/v3/users/{userId}"),
        auth: noneAuth,
        pathParams: [{ name: "userId", value: request.userId, schema: s.string() }],
        query: [],
        headers: [
          { name: "sessionId", value: request.sessionId, schema: s.optionalNullable(s.string()) },
          { name: "devKey", value: request.devKey, schema: s.optionalNullable(s.string()) },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "json", value: request.body, schema: organizationUserUpdateRequestDtoInternalSchema },
      },
      {
        success: { kind: "json", schema: organizationUserResponseDtoSchema },
        errorFactory: OrganizationUsers.UpdateOrganizationUserError,
      },
      options,
    );
  }
}

export namespace OrganizationUsers {
  export type ArchiveOrganizationUserRequest = {
    userId: string;
    sessionId?: string | null;
    devKey?: string | null;
  };

  export const archiveOrganizationUserRequestSchema: Schema<ArchiveOrganizationUserRequest> = s.lazySchema(
    () =>
      s.object<ArchiveOrganizationUserRequest>({
        userId: s.string().check(s.minLength(1)),
        sessionId: s.optionalNullable(s.string()),
        devKey: s.optionalNullable(s.string()),
      }),
  );

  export class ArchiveOrganizationUserError extends ApiError {
    declare readonly payload:
      | Declared<"error4XX", BdcError[]>
      | Declared<"error5XX", BdcError[]>
      | Undeclared;

    static readonly errors: ErrorDecoders<ArchiveOrganizationUserError> = [
      {
        on: [400, 499],
        kind: "error4XX",
        decode: { kind: "json", schema: s.array(s.lazy(() => bdcErrorInternalSchema)) },
      },
      {
        on: [500, 599],
        kind: "error5XX",
        decode: { kind: "json", schema: s.array(s.lazy(() => bdcErrorInternalSchema)) },
      },
    ];
  }

  export type CreateOrganizationUserRequest = {
    sessionId?: string | null;
    devKey?: string | null;
    body: OrganizationUserCreateRequestDto;
  };

  export class CreateOrganizationUserError extends ApiError {
    declare readonly payload:
      | Declared<"error4XX", BdcError[]>
      | Declared<"error5XX", BdcError[]>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateOrganizationUserError> = [
      {
        on: [400, 499],
        kind: "error4XX",
        decode: { kind: "json", schema: s.array(s.lazy(() => bdcErrorInternalSchema)) },
      },
      {
        on: [500, 599],
        kind: "error5XX",
        decode: { kind: "json", schema: s.array(s.lazy(() => bdcErrorInternalSchema)) },
      },
    ];
  }

  export type GetOrganizationUserRequest = {
    userId: string;
    sessionId?: string | null;
    devKey?: string | null;
  };

  export const getOrganizationUserRequestSchema: Schema<GetOrganizationUserRequest> = s.lazySchema(() =>
    s.object<GetOrganizationUserRequest>({
      userId: s.string().check(s.minLength(1)),
      sessionId: s.optionalNullable(s.string()),
      devKey: s.optionalNullable(s.string()),
    }),
  );

  export class GetOrganizationUserError extends ApiError {
    declare readonly payload:
      | Declared<"error4XX", BdcError[]>
      | Declared<"error5XX", BdcError[]>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetOrganizationUserError> = [
      {
        on: [400, 499],
        kind: "error4XX",
        decode: { kind: "json", schema: s.array(s.lazy(() => bdcErrorInternalSchema)) },
      },
      {
        on: [500, 599],
        kind: "error5XX",
        decode: { kind: "json", schema: s.array(s.lazy(() => bdcErrorInternalSchema)) },
      },
    ];
  }

  export type ListOrganizationUsersRequest = {
    max?: number | null;
    sort?: string | null;
    filters?: string | null;
    page?: string | null;
    sessionId?: string | null;
    devKey?: string | null;
  };

  export const listOrganizationUsersRequestSchema: Schema<ListOrganizationUsersRequest> = s.lazySchema(() =>
    s.object<ListOrganizationUsersRequest>({
      max: s.optionalNullable(s.int().check(s.gte(1), s.lte(100))),
      sort: s.optionalNullable(s.string()),
      filters: s.optionalNullable(s.string()),
      page: s.optionalNullable(s.string()),
      sessionId: s.optionalNullable(s.string()),
      devKey: s.optionalNullable(s.string()),
    }),
  );

  export class ListOrganizationUsersError extends ApiError {
    declare readonly payload:
      | Declared<"error4XX", BdcError[]>
      | Declared<"error5XX", BdcError[]>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListOrganizationUsersError> = [
      {
        on: [400, 499],
        kind: "error4XX",
        decode: { kind: "json", schema: s.array(s.lazy(() => bdcErrorInternalSchema)) },
      },
      {
        on: [500, 599],
        kind: "error5XX",
        decode: { kind: "json", schema: s.array(s.lazy(() => bdcErrorInternalSchema)) },
      },
    ];
  }

  export type RestoreOrganizationUserRequest = {
    userId: string;
    sessionId?: string | null;
    devKey?: string | null;
  };

  export const restoreOrganizationUserRequestSchema: Schema<RestoreOrganizationUserRequest> = s.lazySchema(
    () =>
      s.object<RestoreOrganizationUserRequest>({
        userId: s.string().check(s.minLength(1)),
        sessionId: s.optionalNullable(s.string()),
        devKey: s.optionalNullable(s.string()),
      }),
  );

  export class RestoreOrganizationUserError extends ApiError {
    declare readonly payload:
      | Declared<"error4XX", BdcError[]>
      | Declared<"error5XX", BdcError[]>
      | Undeclared;

    static readonly errors: ErrorDecoders<RestoreOrganizationUserError> = [
      {
        on: [400, 499],
        kind: "error4XX",
        decode: { kind: "json", schema: s.array(s.lazy(() => bdcErrorInternalSchema)) },
      },
      {
        on: [500, 599],
        kind: "error5XX",
        decode: { kind: "json", schema: s.array(s.lazy(() => bdcErrorInternalSchema)) },
      },
    ];
  }

  export type UpdateOrganizationUserRequest = {
    userId: string;
    sessionId?: string | null;
    devKey?: string | null;
    body: OrganizationUserUpdateRequestDto;
  };

  export const updateOrganizationUserRequestSchema: Schema<UpdateOrganizationUserRequest> = s.lazySchema(() =>
    s.object<UpdateOrganizationUserRequest>({
      userId: s.string().check(s.minLength(1)),
      sessionId: s.optionalNullable(s.string()),
      devKey: s.optionalNullable(s.string()),
      body: organizationUserUpdateRequestDtoSchema,
    }),
  );

  export class UpdateOrganizationUserError extends ApiError {
    declare readonly payload:
      | Declared<"error4XX", BdcError[]>
      | Declared<"error5XX", BdcError[]>
      | Undeclared;

    static readonly errors: ErrorDecoders<UpdateOrganizationUserError> = [
      {
        on: [400, 499],
        kind: "error4XX",
        decode: { kind: "json", schema: s.array(s.lazy(() => bdcErrorInternalSchema)) },
      },
      {
        on: [500, 599],
        kind: "error5XX",
        decode: { kind: "json", schema: s.array(s.lazy(() => bdcErrorInternalSchema)) },
      },
    ];
  }
}
