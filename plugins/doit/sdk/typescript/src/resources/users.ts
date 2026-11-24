import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { allAuth, anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { cancelInviteResponseSchema, type CancelInviteResponse } from "../models/cancel-invite-response.js";
import { deleteUserResponseSchema, type DeleteUserResponse } from "../models/delete-user-response.js";
import { errorSchema, type Error } from "../models/error.js";
import { inviteResponseSchema, type InviteResponse } from "../models/invite-response.js";
import { inviteUserRequestInternalSchema, type InviteUserRequest } from "../models/invite-user-request.js";
import {
  listUsersResponseBodyInternalSchema,
  type ListUsersResponseBody,
} from "../models/list-users-response-body.js";
import { resendInviteResponseSchema, type ResendInviteResponse } from "../models/resend-invite-response.js";
import { updateUserRequestInternalSchema, type UpdateUserRequest } from "../models/update-user-request.js";
import { updateUserResponseInternalSchema, type UpdateUserResponse } from "../models/update-user-response.js";
import type { Servers } from "../servers.js";

/**
 * Manage users who have access to the DoiT platform.
 */
export class Users {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Cancel invite
   *
   * @remarks
   * Marks the invite as `Cancelled` and invalidates the invite token so any outstanding email links
   * stop working. The invite document is retained (soft cancel) — the user row remains visible in
   * `GET /iam/v1/users` with `inviteStatus: Cancelled`. Use `DELETE /iam/v1/users/{id}` to fully
   * remove the record.
   *
   * Returns `404` if no invite exists for the given ID, and `409` if the invite is already
   * cancelled.
   *
   * Requires `usersManager` permission.
   *
   * @returns OK - Invite cancelled.
   *
   * @throws {@link Users.CancelInviteError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link DoiTError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  cancelInvite(
    request: Users.CancelInviteRequest,
    options?: RequestOptions,
  ): ApiPromise<CancelInviteResponse, Users.CancelInviteError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/iam/v1/users/{id}/actions/cancel"),
        auth: anyAuth(this.#auth.apiKey, allAuth(this.#auth.tenantId, this.#auth.apiKey)),
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [{ name: "dryRun", value: request.dryRun, schema: s.defaulted(s.boolean(), false) }],
        headers: [{ name: "Idempotency-Key", value: request.idempotencyKey, schema: s.string() }],
        body: { kind: "json", value: request.body, schema: s.optional(s.record(s.string(), s.unknown())) },
      },
      {
        success: { kind: "json", schema: cancelInviteResponseSchema },
        errorFactory: Users.CancelInviteError,
      },
      options,
    );
  }

  /**
   * Delete user
   *
   * @remarks
   * Deletes a user.
   *
   * @returns OK - User deleted successfully.
   *
   * @throws {@link Users.DeleteUserError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link DoiTError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteUser(
    request: Users.DeleteUserRequest,
    options?: RequestOptions,
  ): ApiPromise<DeleteUserResponse, Users.DeleteUserError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/iam/v1/users/{id}"),
        auth: anyAuth(this.#auth.apiKey, allAuth(this.#auth.tenantId, this.#auth.apiKey)),
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: deleteUserResponseSchema },
        errorFactory: Users.DeleteUserError,
      },
      options,
    );
  }

  /**
   * Invite user
   *
   * @remarks
   * Invites a new user to the organization with specified role and organization.
   *
   * @returns Created - User invitation created successfully.
   *
   * @throws {@link Users.InviteUserError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link DoiTError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  inviteUser(
    request: Users.InviteUserRequestParams,
    options?: RequestOptions,
  ): ApiPromise<InviteResponse, Users.InviteUserError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/iam/v1/users/invite"),
        auth: anyAuth(this.#auth.apiKey, allAuth(this.#auth.tenantId, this.#auth.apiKey)),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: inviteUserRequestInternalSchema },
      },
      {
        success: { kind: "json", schema: inviteResponseSchema },
        errorFactory: Users.InviteUserError,
      },
      options,
    );
  }

  /**
   * List users
   *
   * @remarks
   * Returns a list of users in the organization, including both active users and invited users.
   * When the `email` query parameter is provided, returns only the user matching that email
   * address. If no user is found for the given email, an empty list is returned.
   *
   * @returns OK - List of users returned.
   *
   * @throws {@link Users.ListUsersError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link DoiTError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listUsers(
    request: Users.ListUsersRequest = {},
    options?: RequestOptions,
  ): ApiPromise<ListUsersResponseBody, Users.ListUsersError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/iam/v1/users"),
        auth: anyAuth(this.#auth.apiKey, allAuth(this.#auth.tenantId, this.#auth.apiKey)),
        pathParams: [],
        query: [{ name: "email", value: request.email, schema: s.optional(s.string()) }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listUsersResponseBodyInternalSchema },
        errorFactory: Users.ListUsersError,
      },
      options,
    );
  }

  /**
   * Resend invite
   *
   * @remarks
   * Resets the invite expiry to 48 hours from now, invalidates the previous invite token (so old
   * email links stop working), and triggers a fresh invitation email. Works on invites in any state
   * including `Cancelled` — resending a cancelled invite reactivates it to `Pending`.
   *
   * Returns `404` if no invite exists for the given ID (never created, or already accepted and
   * removed).
   *
   * Requires `usersManager` permission.
   *
   * @returns OK - Invite resent and expiry reset.
   *
   * @throws {@link Users.ResendInviteError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link DoiTError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  resendInvite(
    request: Users.ResendInviteRequest,
    options?: RequestOptions,
  ): ApiPromise<ResendInviteResponse, Users.ResendInviteError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/iam/v1/users/{id}/actions/resend"),
        auth: anyAuth(this.#auth.apiKey, allAuth(this.#auth.tenantId, this.#auth.apiKey)),
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [{ name: "dryRun", value: request.dryRun, schema: s.defaulted(s.boolean(), false) }],
        headers: [{ name: "Idempotency-Key", value: request.idempotencyKey, schema: s.string() }],
        body: { kind: "json", value: request.body, schema: s.optional(s.record(s.string(), s.unknown())) },
      },
      {
        success: { kind: "json", schema: resendInviteResponseSchema },
        errorFactory: Users.ResendInviteError,
      },
      options,
    );
  }

  /**
   * Update user
   *
   * @remarks
   * Updates user information, including name, job function, phone, language, and role.
   *
   * @returns OK - User updated successfully.
   *
   * @throws {@link Users.UpdateUserError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link DoiTError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateUser(
    request: Users.UpdateUserRequestParams,
    options?: RequestOptions,
  ): ApiPromise<UpdateUserResponse, Users.UpdateUserError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default("/iam/v1/users/{id}"),
        auth: anyAuth(this.#auth.apiKey, allAuth(this.#auth.tenantId, this.#auth.apiKey)),
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: updateUserRequestInternalSchema },
      },
      {
        success: { kind: "json", schema: updateUserResponseInternalSchema },
        errorFactory: Users.UpdateUserError,
      },
      options,
    );
  }
}

export namespace Users {
  export type CancelInviteRequest = {
    /** The unique ID of the invited user. */
    id: string;
    /**
     * If `true`, validates and simulates the operation without committing changes. The response
     * shape is identical to a real execution.
     *
     * @default false
     */
    dryRun?: boolean;
    /**
     * Client-generated idempotency key (UUID v4 or ULID recommended, max 255 characters).
     * Re-submitting the same key with the same request returns the cached response without
     * re-executing side effects. The server retains the key for at least 24 hours.
     */
    idempotencyKey: string;
    body?: Record<string, unknown>;
  };

  export const cancelInviteRequestSchema: Schema<CancelInviteRequest> = s.lazySchema(() =>
    s.object<CancelInviteRequest>({
      id: s.string(),
      dryRun: s.defaulted(s.boolean(), false),
      idempotencyKey: s.string().check(s.maxLength(255)),
      body: s.optional(s.record(s.string(), s.unknown())),
    }),
  );

  export class CancelInviteError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Declared<"error6", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<CancelInviteError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error4", decode: { kind: "json", schema: errorSchema } },
      { on: 409, kind: "error5", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error6", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type DeleteUserRequest = {
    /** The unique ID of the user to delete */
    id: string;
  };

  export class DeleteUserError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<DeleteUserError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error4", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type InviteUserRequestParams = {
    body: InviteUserRequest;
  };

  export class InviteUserError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<InviteUserError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error4", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type ListUsersRequest = {
    /**
     * Filter by exact email address. When provided, returns at most one user matching this email.
     * The email is matched case-insensitively.
     */
    email?: string;
  };

  export const listUsersRequestSchema: Schema<ListUsersRequest> = s.lazySchema(() =>
    s.object<ListUsersRequest>({
      email: s.optional(s.string().check(s.email())),
    }),
  );

  export class ListUsersError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListUsersError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error4", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type ResendInviteRequest = {
    /** The unique ID of the invited user. */
    id: string;
    /**
     * If `true`, validates and simulates the operation without committing changes. The response
     * shape is identical to a real execution.
     *
     * @default false
     */
    dryRun?: boolean;
    /**
     * Client-generated idempotency key (UUID v4 or ULID recommended, max 255 characters).
     * Re-submitting the same key with the same request returns the cached response without
     * re-executing side effects. The server retains the key for at least 24 hours.
     */
    idempotencyKey: string;
    body?: Record<string, unknown>;
  };

  export const resendInviteRequestSchema: Schema<ResendInviteRequest> = s.lazySchema(() =>
    s.object<ResendInviteRequest>({
      id: s.string(),
      dryRun: s.defaulted(s.boolean(), false),
      idempotencyKey: s.string().check(s.maxLength(255)),
      body: s.optional(s.record(s.string(), s.unknown())),
    }),
  );

  export class ResendInviteError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<ResendInviteError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error4", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error5", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type UpdateUserRequestParams = {
    /** The unique ID of the user to update. */
    id: string;
    body: UpdateUserRequest;
  };

  export class UpdateUserError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<UpdateUserError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error4", decode: { kind: "json", schema: errorSchema } },
    ];
  }
}
