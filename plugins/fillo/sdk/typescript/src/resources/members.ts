import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  apiV1ManageMembersInvitesRequestInternalSchema,
  type ApiV1ManageMembersInvitesRequest,
} from "../models/api-v1-manage-members-invites-request.js";
import {
  apiV1ManageMembersInvitesResponseSchema,
  type ApiV1ManageMembersInvitesResponse,
} from "../models/api-v1-manage-members-invites-response.js";
import {
  apiV1ManageMembersInvitesResponse1Schema,
  type ApiV1ManageMembersInvitesResponse1,
} from "../models/api-v1-manage-members-invites-response1.js";
import {
  apiV1ManageMembersRequestSchema,
  type ApiV1ManageMembersRequest,
} from "../models/api-v1-manage-members-request.js";
import {
  apiV1ManageMembersResponseSchema,
  type ApiV1ManageMembersResponse,
} from "../models/api-v1-manage-members-response.js";
import {
  apiV1ManageMembersResponse1Schema,
  type ApiV1ManageMembersResponse1,
} from "../models/api-v1-manage-members-response1.js";
import { confirmTargetSchema, type ConfirmTarget } from "../models/confirm-target.js";
import { errorSchema, type Error } from "../models/error.js";
import { workspaceMembersSchema, type WorkspaceMembers } from "../models/workspace-members.js";
import type { Servers } from "../servers.js";

export class Members {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Cancel an invitation
   *
   * @remarks
   * Cancel a pending invitation. The invite link stops working immediately, and inviting the
   * address again starts fresh, which keeps this routine (Tier A). The key acts as the human who
   * minted it, exactly as the other member routes do, and the id is scoped to the key's workspace
   * first, so an invitation belonging to another workspace 404s indistinguishably from an unknown
   * one. Scope: members:manage.
   *
   * @returns The invitation was cancelled.
   *
   * @throws {@link Members.CancelWorkspaceInvitationError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link FilloError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  cancelWorkspaceInvitation(
    request: Members.CancelWorkspaceInvitationRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV1ManageMembersInvitesResponse1, Members.CancelWorkspaceInvitationError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/api/v1/manage/members/invites/{id}"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: apiV1ManageMembersInvitesResponse1Schema },
        errorFactory: Members.CancelWorkspaceInvitationError,
      },
      options,
    );
  }

  /**
   * Invite a member
   *
   * @remarks
   * Invite someone to the workspace by email, with an optional role (defaults to member). They
   * receive an email and can join with that role, which makes this outward-facing (Tier B). An
   * `fsk_` key has no session, so it acts as the human who minted it: their live role is the
   * anti-escalation ceiling — a key can never invite above what its creator could grant today — and
   * a key whose creator was removed or demoted is refused with 403. Scope: members:manage.
   *
   * @returns The created invitation.
   *
   * @throws {@link Members.InviteWorkspaceMemberError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link FilloError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  inviteWorkspaceMember(
    request: Members.InviteWorkspaceMemberRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV1ManageMembersInvitesResponse, Members.InviteWorkspaceMemberError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v1/manage/members/invites"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: apiV1ManageMembersInvitesRequestInternalSchema },
      },
      {
        success: { kind: "json", schema: apiV1ManageMembersInvitesResponseSchema },
        errorFactory: Members.InviteWorkspaceMemberError,
      },
      options,
    );
  }

  /**
   * List workspace members
   *
   * @remarks
   * The workspace's members and its pending, unexpired invitations, so an agent can resolve the id
   * or email the member endpoints need. Never returns credentials. Tier A. Scope: members:manage.
   *
   * @returns Members and pending invitations.
   *
   * @throws {@link Members.ListWorkspaceMembersError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link FilloError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listWorkspaceMembers(
    options?: RequestOptions,
  ): ApiPromise<WorkspaceMembers, Members.ListWorkspaceMembersError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/manage/members"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: workspaceMembersSchema },
        errorFactory: Members.ListWorkspaceMembersError,
      },
      options,
    );
  }

  /**
   * Remove a member
   *
   * @remarks
   * Remove someone from the workspace. They lose access to every project immediately and
   * re-inviting them starts over, so this is destructive (Tier C): `confirm` must equal the
   * member's email address — the one human-readable id a manager can verify. The key acts as the
   * human who minted it, and the workspace's last owner can never be removed. Scope:
   * members:manage.
   *
   * @returns The member was removed.
   *
   * @throws {@link Members.RemoveWorkspaceMemberError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link FilloError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  removeWorkspaceMember(
    request: Members.RemoveWorkspaceMemberRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV1ManageMembersResponse1, Members.RemoveWorkspaceMemberError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/api/v1/manage/members/{id}"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: confirmTargetSchema },
      },
      {
        success: { kind: "json", schema: apiV1ManageMembersResponse1Schema },
        errorFactory: Members.RemoveWorkspaceMemberError,
      },
      options,
    );
  }

  /**
   * Change a member's role
   *
   * @remarks
   * Change a member's workspace role. Their access changes immediately across every project, which
   * makes this outward-facing (Tier B). An `fsk_` key has no session, so it acts as the human who
   * minted it: their live role is the anti-escalation ceiling, a key whose creator was removed or
   * demoted is refused with 403, and the workspace's last owner can never be demoted. Scope:
   * members:manage.
   *
   * @returns The member's new role.
   *
   * @throws {@link Members.SetMemberRoleError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link FilloError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  setMemberRole(
    request: Members.SetMemberRoleRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV1ManageMembersResponse, Members.SetMemberRoleError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default("/api/v1/manage/members/{id}"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: apiV1ManageMembersRequestSchema },
      },
      {
        success: { kind: "json", schema: apiV1ManageMembersResponseSchema },
        errorFactory: Members.SetMemberRoleError,
      },
      options,
    );
  }
}

export namespace Members {
  export type CancelWorkspaceInvitationRequest = {
    /** A pending invitation id from the members listing. */
    id: string;
  };

  export class CancelWorkspaceInvitationError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Declared<"error6", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<CancelWorkspaceInvitationError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error4", decode: { kind: "json", schema: errorSchema } },
      { on: 409, kind: "error5", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "error6", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type InviteWorkspaceMemberRequest = {
    body: ApiV1ManageMembersInvitesRequest;
  };

  export class InviteWorkspaceMemberError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Declared<"error6", Error>
      | Declared<"error7", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<InviteWorkspaceMemberError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error4", decode: { kind: "json", schema: errorSchema } },
      { on: 409, kind: "error5", decode: { kind: "json", schema: errorSchema } },
      { on: 413, kind: "error6", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "error7", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export class ListWorkspaceMembersError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListWorkspaceMembersError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error4", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "error5", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type RemoveWorkspaceMemberRequest = {
    /** A member id or email address inside the key's workspace. */
    id: string;
    body: ConfirmTarget;
  };

  export class RemoveWorkspaceMemberError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Declared<"error6", Error>
      | Declared<"error7", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<RemoveWorkspaceMemberError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error4", decode: { kind: "json", schema: errorSchema } },
      { on: 409, kind: "error5", decode: { kind: "json", schema: errorSchema } },
      { on: 413, kind: "error6", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "error7", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type SetMemberRoleRequest = {
    /** A member id or email address inside the key's workspace. */
    id: string;
    body: ApiV1ManageMembersRequest;
  };

  export class SetMemberRoleError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Declared<"error6", Error>
      | Declared<"error7", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<SetMemberRoleError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error4", decode: { kind: "json", schema: errorSchema } },
      { on: 409, kind: "error5", decode: { kind: "json", schema: errorSchema } },
      { on: 413, kind: "error6", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "error7", decode: { kind: "json", schema: errorSchema } },
    ];
  }
}
