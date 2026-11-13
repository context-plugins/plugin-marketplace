import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { FileInput } from "../core/binary.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { body17Schema, type Body17 } from "../models/body17.js";
import { body18Schema, type Body18 } from "../models/body18.js";
import { body34InternalSchema, body34Schema, type Body34 } from "../models/body34.js";
import { body38InternalSchema, type Body38 } from "../models/body38.js";
import { body40Schema, type Body40 } from "../models/body40.js";
import { body5InternalSchema, body5Schema, type Body5 } from "../models/body5.js";
import {
  inviteWorkspaceUsersResponseSchema,
  type InviteWorkspaceUsersResponse,
} from "../models/invite-workspace-users-response.js";
import { planDetailsResponseSchema, type PlanDetailsResponse } from "../models/plan-details-response.js";
import { projectsResponseSchema, type ProjectsResponse } from "../models/projects-response.js";
import {
  removeWorkspaceUserResponseSchema,
  type RemoveWorkspaceUserResponse,
} from "../models/remove-workspace-user-response.js";
import { Sort, sortSchema } from "../models/sort.js";
import { todoistErrorSchema, type TodoistError } from "../models/todoist-error.js";
import { usersResponseSchema, type UsersResponse } from "../models/users-response.js";
import {
  workspaceInvitationViewSchema,
  type WorkspaceInvitationView,
} from "../models/workspace-invitation-view.js";
import { workspaceSyncViewSchema, type WorkspaceSyncView } from "../models/workspace-sync-view.js";
import { workspaceUserViewSchema, type WorkspaceUserView } from "../models/workspace-user-view.js";
import type { Servers } from "../servers.js";

export class Workspace {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Accept Invitation
   *
   * @remarks
   * Accept a workspace invitation. Usable by authenticated users only.
   *
   * @returns Successful Response
   *
   * @throws {@link Workspace.AcceptInvitationApiV1WorkspacesInvitationsInviteCodeAcceptPutError}
   * when the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link TodoistApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  acceptInvitationApiV1WorkspacesInvitationsInviteCodeAcceptPut(
    request: Workspace.AcceptInvitationApiV1WorkspacesInvitationsInviteCodeAcceptPutRequest,
    options?: RequestOptions,
  ): ApiPromise<
    WorkspaceInvitationView,
    Workspace.AcceptInvitationApiV1WorkspacesInvitationsInviteCodeAcceptPutError
  > {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default("/api/v1/workspaces/invitations/{invite_code}/accept"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "invite_code", value: request.inviteCode, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: workspaceInvitationViewSchema },
        errorFactory: Workspace.AcceptInvitationApiV1WorkspacesInvitationsInviteCodeAcceptPutError,
      },
      options,
    );
  }

  /**
   * Active Projects
   *
   * @remarks
   * Returns all active workspace projects, including those visible but not joined by the user.
   *
   * _For guests, returns all joined workspace projects only._
   *
   * @returns Successful Response
   *
   * @throws {@link Workspace.ActiveProjectsApiV1WorkspacesWorkspaceIdProjectsActiveGetError} when
   * the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link TodoistApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  activeProjectsApiV1WorkspacesWorkspaceIdProjectsActiveGet(
    request: Workspace.ActiveProjectsApiV1WorkspacesWorkspaceIdProjectsActiveGetRequest,
    options?: RequestOptions,
  ): ApiPromise<ProjectsResponse, Workspace.ActiveProjectsApiV1WorkspacesWorkspaceIdProjectsActiveGetError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/workspaces/{workspace_id}/projects/active"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "workspace_id", value: request.workspaceId, schema: s.int() }],
        query: [
          { name: "cursor", value: request.cursor, schema: s.optionalNullable(s.string()) },
          { name: "limit", value: request.limit, schema: s.defaulted(s.int(), 100) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: projectsResponseSchema },
        errorFactory: Workspace.ActiveProjectsApiV1WorkspacesWorkspaceIdProjectsActiveGetError,
      },
      options,
    );
  }

  /**
   * All Invitations
   *
   * @remarks
   * Return a list containing details of all pending invitation to a workspace.
   *
   * This list is not paginated. All workspace members can access this list.
   *
   * @returns Successful Response
   *
   * @throws {@link Workspace.AllInvitationsApiV1WorkspacesInvitationsAllGetError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link TodoistApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  allInvitationsApiV1WorkspacesInvitationsAllGet(
    request: Workspace.AllInvitationsApiV1WorkspacesInvitationsAllGetRequest,
    options?: RequestOptions,
  ): ApiPromise<WorkspaceInvitationView[], Workspace.AllInvitationsApiV1WorkspacesInvitationsAllGetError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/workspaces/invitations/all"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [{ name: "workspace_id", value: request.workspaceId, schema: s.int() }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => workspaceInvitationViewSchema)) },
        errorFactory: Workspace.AllInvitationsApiV1WorkspacesInvitationsAllGetError,
      },
      options,
    );
  }

  /**
   * Archived Projects
   *
   * @remarks
   * Return archived projects in a workspace.
   *
   * Workspace guests cannot list archived projects and receive a `FORBIDDEN` error. Results are
   * paginated by `cursor` and `limit`.
   *
   * @returns Successful Response
   *
   * @throws {@link Workspace.ArchivedProjectsApiV1WorkspacesWorkspaceIdProjectsArchivedGetError}
   * when the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link TodoistApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  archivedProjectsApiV1WorkspacesWorkspaceIdProjectsArchivedGet(
    request: Workspace.ArchivedProjectsApiV1WorkspacesWorkspaceIdProjectsArchivedGetRequest,
    options?: RequestOptions,
  ): ApiPromise<
    ProjectsResponse,
    Workspace.ArchivedProjectsApiV1WorkspacesWorkspaceIdProjectsArchivedGetError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/workspaces/{workspace_id}/projects/archived"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "workspace_id", value: request.workspaceId, schema: s.int() }],
        query: [
          { name: "cursor", value: request.cursor, schema: s.optionalNullable(s.string()) },
          { name: "limit", value: request.limit, schema: s.defaulted(s.int(), 100) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: projectsResponseSchema },
        errorFactory: Workspace.ArchivedProjectsApiV1WorkspacesWorkspaceIdProjectsArchivedGetError,
      },
      options,
    );
  }

  /**
   * Create Workspace
   *
   * @remarks
   * Creates a new workspace and returns it.
   *
   * @returns Successful Response
   *
   * @throws {@link Workspace.CreateWorkspaceApiV1WorkspacesPostError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link TodoistApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createWorkspaceApiV1WorkspacesPost(
    request: Workspace.CreateWorkspaceApiV1WorkspacesPostRequest,
    options?: RequestOptions,
  ): ApiPromise<WorkspaceSyncView, Workspace.CreateWorkspaceApiV1WorkspacesPostError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v1/workspaces"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: body38InternalSchema },
      },
      {
        success: { kind: "json", schema: workspaceSyncViewSchema },
        errorFactory: Workspace.CreateWorkspaceApiV1WorkspacesPostError,
      },
      options,
    );
  }

  /**
   * Delete Invitation
   *
   * @remarks
   * Deletes a workspace invitation. Only admins can delete invitations.
   *
   * @returns Successful Response
   *
   * @throws {@link Workspace.DeleteInvitationApiV1WorkspacesInvitationsDeletePostError} when the
   * API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link TodoistApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteInvitationApiV1WorkspacesInvitationsDeletePost(
    request: Workspace.DeleteInvitationApiV1WorkspacesInvitationsDeletePostRequest,
    options?: RequestOptions,
  ): ApiPromise<
    WorkspaceInvitationView,
    Workspace.DeleteInvitationApiV1WorkspacesInvitationsDeletePostError
  > {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v1/workspaces/invitations/delete"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: body18Schema },
      },
      {
        success: { kind: "json", schema: workspaceInvitationViewSchema },
        errorFactory: Workspace.DeleteInvitationApiV1WorkspacesInvitationsDeletePostError,
      },
      options,
    );
  }

  /**
   * Delete Workspace
   *
   * @remarks
   * Deletes a workspace for all of its members.
   *
   * Only workspace admins may delete it; other members get `403`. Answers `204` on success, and
   * also when the workspace does not exist or was already deleted, so retrying is safe. Requires
   * the `data:read_write` scope.
   *
   * @returns No Content (what the live API returns)
   *
   * @throws {@link Workspace.DeleteWorkspaceApiV1WorkspacesWorkspaceIdDeleteError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link TodoistApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteWorkspaceApiV1WorkspacesWorkspaceIdDelete(
    request: Workspace.DeleteWorkspaceApiV1WorkspacesWorkspaceIdDeleteRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, Workspace.DeleteWorkspaceApiV1WorkspacesWorkspaceIdDeleteError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/api/v1/workspaces/{workspace_id}"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "workspace_id", value: request.workspaceId, schema: s.int() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: Workspace.DeleteWorkspaceApiV1WorkspacesWorkspaceIdDeleteError,
      },
      options,
    );
  }

  /**
   * Get Workspace
   *
   * @remarks
   * Returns a workspace by ID.
   *
   * The caller must be a member of the workspace. A workspace whose trial is still being set up is
   * returned too. Accepts tokens with the `workspaces:read` scope (implied by `data:read`) from any
   * Doist product.
   *
   * Errors: `403` when the caller is not a member, `404` when the workspace does not exist.
   *
   * @returns Successful Response
   *
   * @throws {@link Workspace.GetWorkspaceApiV1WorkspacesWorkspaceIdGetError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link TodoistApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getWorkspaceApiV1WorkspacesWorkspaceIdGet(
    request: Workspace.GetWorkspaceApiV1WorkspacesWorkspaceIdGetRequest,
    options?: RequestOptions,
  ): ApiPromise<WorkspaceSyncView, Workspace.GetWorkspaceApiV1WorkspacesWorkspaceIdGetError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/workspaces/{workspace_id}"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "workspace_id", value: request.workspaceId, schema: s.int() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: workspaceSyncViewSchema },
        errorFactory: Workspace.GetWorkspaceApiV1WorkspacesWorkspaceIdGetError,
      },
      options,
    );
  }

  /**
   * Get Workspaces
   *
   * @remarks
   * Returns all workspaces where the user is a member.
   *
   * @returns Successful Response
   *
   * @throws {@link Workspace.GetWorkspacesApiV1WorkspacesGetError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link TodoistApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getWorkspacesApiV1WorkspacesGet(
    options?: RequestOptions,
  ): ApiPromise<WorkspaceSyncView[], Workspace.GetWorkspacesApiV1WorkspacesGetError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/workspaces"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => workspaceSyncViewSchema)) },
        errorFactory: Workspace.GetWorkspacesApiV1WorkspacesGetError,
      },
      options,
    );
  }

  /**
   * Get Workspaces Users
   *
   * @remarks
   * Returns all workspace_users for a given workspace if workspace_id is provided. Otherwise,
   * returns all workspace_users for all workspaces that the requesting user is part of.
   *
   * _Not accessible by guests._
   *
   * @returns Successful Response
   *
   * @throws {@link Workspace.GetWorkspacesUsersApiV1WorkspacesUsersGetError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link TodoistApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getWorkspacesUsersApiV1WorkspacesUsersGet(
    request: Workspace.GetWorkspacesUsersApiV1WorkspacesUsersGetRequest = {},
    options?: RequestOptions,
  ): ApiPromise<UsersResponse, Workspace.GetWorkspacesUsersApiV1WorkspacesUsersGetError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/workspaces/users"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [
          { name: "workspace_id", value: request.workspaceId, schema: s.optionalNullable(s.int()) },
          { name: "cursor", value: request.cursor, schema: s.optionalNullable(s.string()) },
          { name: "limit", value: request.limit, schema: s.defaulted(s.int(), 100) },
          { name: "sort", value: request.sort, schema: s.defaulted(sortSchema, Sort.Id) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: usersResponseSchema },
        errorFactory: Workspace.GetWorkspacesUsersApiV1WorkspacesUsersGetError,
      },
      options,
    );
  }

  /**
   * Invitations
   *
   * @remarks
   * Return a list of user emails who have a pending invitation to a workspace.
   *
   * The list is not paginated. All workspace members can access this list.
   *
   * @returns Successful Response
   *
   * @throws {@link Workspace.InvitationsApiV1WorkspacesInvitationsGetError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link TodoistApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  invitationsApiV1WorkspacesInvitationsGet(
    request: Workspace.InvitationsApiV1WorkspacesInvitationsGetRequest,
    options?: RequestOptions,
  ): ApiPromise<string[], Workspace.InvitationsApiV1WorkspacesInvitationsGetError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/workspaces/invitations"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [{ name: "workspace_id", value: request.workspaceId, schema: s.int() }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.string()) },
        errorFactory: Workspace.InvitationsApiV1WorkspacesInvitationsGetError,
      },
      options,
    );
  }

  /**
   * Invite Workspace Users
   *
   * @remarks
   * Invites users to a workspace by email.
   *
   * @returns Successful Response
   *
   * @throws {@link Workspace.InviteWorkspaceUsersApiV1WorkspacesWorkspaceIdUsersInvitePostError}
   * when the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link TodoistApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  inviteWorkspaceUsersApiV1WorkspacesWorkspaceIdUsersInvitePost(
    request: Workspace.InviteWorkspaceUsersApiV1WorkspacesWorkspaceIdUsersInvitePostRequest,
    options?: RequestOptions,
  ): ApiPromise<
    InviteWorkspaceUsersResponse,
    Workspace.InviteWorkspaceUsersApiV1WorkspacesWorkspaceIdUsersInvitePostError
  > {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v1/workspaces/{workspace_id}/users/invite"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "workspace_id", value: request.workspaceId, schema: s.int() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: body5InternalSchema },
      },
      {
        success: { kind: "json", schema: inviteWorkspaceUsersResponseSchema },
        errorFactory: Workspace.InviteWorkspaceUsersApiV1WorkspacesWorkspaceIdUsersInvitePostError,
      },
      options,
    );
  }

  /**
   * Join
   *
   * @remarks
   * Join a workspace via link or via workspace ID, if the user can auto-join the workspace by
   * domain.
   *
   * ## Joining by Domain
   * This is possible if:
   * - The user is verified
   * - The user has a user e-mail belonging to a domain that is set as a domain name for a workspace
   * - That workspace has the auto-join by domain feature enabled
   *
   * @returns Successful Response
   *
   * @throws {@link Workspace.JoinApiV1WorkspacesJoinPostError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link TodoistApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  joinApiV1WorkspacesJoinPost(
    request: Workspace.JoinApiV1WorkspacesJoinPostRequest,
    options?: RequestOptions,
  ): ApiPromise<WorkspaceUserView, Workspace.JoinApiV1WorkspacesJoinPostError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v1/workspaces/join"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: body40Schema },
      },
      {
        success: { kind: "json", schema: workspaceUserViewSchema },
        errorFactory: Workspace.JoinApiV1WorkspacesJoinPostError,
      },
      options,
    );
  }

  /**
   * Plan Details
   *
   * @remarks
   * Lists details of the workspace's current plan and usage
   *
   * @returns Successful Response
   *
   * @throws {@link Workspace.PlanDetailsApiV1WorkspacesPlanDetailsGetError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link TodoistApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  planDetailsApiV1WorkspacesPlanDetailsGet(
    request: Workspace.PlanDetailsApiV1WorkspacesPlanDetailsGetRequest,
    options?: RequestOptions,
  ): ApiPromise<PlanDetailsResponse, Workspace.PlanDetailsApiV1WorkspacesPlanDetailsGetError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/workspaces/plan_details"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [{ name: "workspace_id", value: request.workspaceId, schema: s.int() }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: planDetailsResponseSchema },
        errorFactory: Workspace.PlanDetailsApiV1WorkspacesPlanDetailsGetError,
      },
      options,
    );
  }

  /**
   * Reject Invitation
   *
   * @remarks
   * Reject a workspace invitation. Usable by authenticated users only.
   *
   * @returns Successful Response
   *
   * @throws {@link Workspace.RejectInvitationApiV1WorkspacesInvitationsInviteCodeRejectPutError}
   * when the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link TodoistApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  rejectInvitationApiV1WorkspacesInvitationsInviteCodeRejectPut(
    request: Workspace.RejectInvitationApiV1WorkspacesInvitationsInviteCodeRejectPutRequest,
    options?: RequestOptions,
  ): ApiPromise<
    WorkspaceInvitationView,
    Workspace.RejectInvitationApiV1WorkspacesInvitationsInviteCodeRejectPutError
  > {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default("/api/v1/workspaces/invitations/{invite_code}/reject"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "invite_code", value: request.inviteCode, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: workspaceInvitationViewSchema },
        errorFactory: Workspace.RejectInvitationApiV1WorkspacesInvitationsInviteCodeRejectPutError,
      },
      options,
    );
  }

  /**
   * Remove Workspace User
   *
   * @remarks
   * Removes a user from a workspace.
   *
   * @returns Successful Response
   *
   * @throws {@link Workspace.RemoveWorkspaceUserApiV1WorkspacesWorkspaceIdUsersUserIdDeleteError}
   * when the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link TodoistApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  removeWorkspaceUserApiV1WorkspacesWorkspaceIdUsersUserIdDelete(
    request: Workspace.RemoveWorkspaceUserApiV1WorkspacesWorkspaceIdUsersUserIdDeleteRequest,
    options?: RequestOptions,
  ): ApiPromise<
    RemoveWorkspaceUserResponse,
    Workspace.RemoveWorkspaceUserApiV1WorkspacesWorkspaceIdUsersUserIdDeleteError
  > {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/api/v1/workspaces/{workspace_id}/users/{user_id}"),
        auth: this.#auth.bearerAuth,
        pathParams: [
          { name: "workspace_id", value: request.workspaceId, schema: s.int() },
          { name: "user_id", value: request.userId, schema: s.int() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: removeWorkspaceUserResponseSchema },
        errorFactory: Workspace.RemoveWorkspaceUserApiV1WorkspacesWorkspaceIdUsersUserIdDeleteError,
      },
      options,
    );
  }

  /**
   * Update Logo
   *
   * @remarks
   * Upload an image to be used as the workspace logo. Similar to a user’s avatar. If `delete` is
   * set to true, it removes the logo completely and does not return any `logo_*` attribute.
   *
   * @returns Successful Response
   *
   * @throws {@link Workspace.UpdateLogoApiV1WorkspacesLogoPostError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link TodoistApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateLogoApiV1WorkspacesLogoPost(
    request: Workspace.UpdateLogoApiV1WorkspacesLogoPostRequest,
    options?: RequestOptions,
  ): ApiPromise<WorkspaceSyncView | null, Workspace.UpdateLogoApiV1WorkspacesLogoPostError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v1/workspaces/logo"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "multipart",
          value: [
            { kind: "text", name: "workspace_id", value: request.workspaceId, schema: s.int() },
            { kind: "file", name: "file", value: request.file },
            { kind: "text", name: "delete", value: request.delete, schema: s.defaulted(s.boolean(), false) },
          ],
        },
      },
      {
        success: { kind: "json", schema: s.nullable(s.lazy(() => workspaceSyncViewSchema)) },
        errorFactory: Workspace.UpdateLogoApiV1WorkspacesLogoPostError,
      },
      options,
    );
  }

  /**
   * Update Workspace
   *
   * @remarks
   * Updates an existing workspace and returns it.
   *
   * @returns Successful Response
   *
   * @throws {@link Workspace.UpdateWorkspaceApiV1WorkspacesWorkspaceIdPostError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link TodoistApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateWorkspaceApiV1WorkspacesWorkspaceIdPost(
    request: Workspace.UpdateWorkspaceApiV1WorkspacesWorkspaceIdPostRequest,
    options?: RequestOptions,
  ): ApiPromise<WorkspaceSyncView, Workspace.UpdateWorkspaceApiV1WorkspacesWorkspaceIdPostError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v1/workspaces/{workspace_id}"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "workspace_id", value: request.workspaceId, schema: s.int() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: body34InternalSchema },
      },
      {
        success: { kind: "json", schema: workspaceSyncViewSchema },
        errorFactory: Workspace.UpdateWorkspaceApiV1WorkspacesWorkspaceIdPostError,
      },
      options,
    );
  }

  /**
   * Update Workspace User
   *
   * @remarks
   * Updates a workspace user's role.
   *
   * @returns Successful Response
   *
   * @throws {@link Workspace.UpdateWorkspaceUserApiV1WorkspacesWorkspaceIdUsersUserIdPostError}
   * when the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link TodoistApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateWorkspaceUserApiV1WorkspacesWorkspaceIdUsersUserIdPost(
    request: Workspace.UpdateWorkspaceUserApiV1WorkspacesWorkspaceIdUsersUserIdPostRequest,
    options?: RequestOptions,
  ): ApiPromise<
    WorkspaceUserView,
    Workspace.UpdateWorkspaceUserApiV1WorkspacesWorkspaceIdUsersUserIdPostError
  > {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v1/workspaces/{workspace_id}/users/{user_id}"),
        auth: this.#auth.bearerAuth,
        pathParams: [
          { name: "workspace_id", value: request.workspaceId, schema: s.int() },
          { name: "user_id", value: request.userId, schema: s.int() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: body17Schema },
      },
      {
        success: { kind: "json", schema: workspaceUserViewSchema },
        errorFactory: Workspace.UpdateWorkspaceUserApiV1WorkspacesWorkspaceIdUsersUserIdPostError,
      },
      options,
    );
  }
}

export namespace Workspace {
  export type AcceptInvitationApiV1WorkspacesInvitationsInviteCodeAcceptPutRequest = {
    inviteCode: string;
  };

  export class AcceptInvitationApiV1WorkspacesInvitationsInviteCodeAcceptPutError extends ApiError {
    declare readonly payload:
      | Declared<"todoistError", TodoistError>
      | Declared<"todoistError2", TodoistError>
      | Declared<"todoistError3", TodoistError>
      | Declared<"todoistError4", TodoistError>
      | Undeclared;

    static readonly errors: ErrorDecoders<AcceptInvitationApiV1WorkspacesInvitationsInviteCodeAcceptPutError> =
      [
        { on: 400, kind: "todoistError", decode: { kind: "json", schema: todoistErrorSchema } },
        { on: 401, kind: "todoistError2", decode: { kind: "json", schema: todoistErrorSchema } },
        { on: 403, kind: "todoistError3", decode: { kind: "json", schema: todoistErrorSchema } },
        { on: 404, kind: "todoistError4", decode: { kind: "json", schema: todoistErrorSchema } },
      ];
  }

  export type ActiveProjectsApiV1WorkspacesWorkspaceIdProjectsActiveGetRequest = {
    workspaceId: number;
    cursor?: string | null;
    /** @default 100 */
    limit?: number;
  };

  export const activeProjectsApiV1WorkspacesWorkspaceIdProjectsActiveGetRequestSchema: Schema<ActiveProjectsApiV1WorkspacesWorkspaceIdProjectsActiveGetRequest> =
    s.lazySchema(() =>
      s.object<ActiveProjectsApiV1WorkspacesWorkspaceIdProjectsActiveGetRequest>({
        workspaceId: s.int().check(s.gte(0)),
        cursor: s.optionalNullable(
          s.string().check(s.minLength(1), s.pattern("^[0-9a-zA-Z_-]+\\.[0-9a-zA-Z_-]+$")),
        ),
        limit: s.defaulted(s.int().check(s.gte(1), s.lte(500)), 100),
      }),
    );

  export class ActiveProjectsApiV1WorkspacesWorkspaceIdProjectsActiveGetError extends ApiError {
    declare readonly payload:
      | Declared<"todoistError", TodoistError>
      | Declared<"todoistError2", TodoistError>
      | Declared<"todoistError3", TodoistError>
      | Declared<"todoistError4", TodoistError>
      | Undeclared;

    static readonly errors: ErrorDecoders<ActiveProjectsApiV1WorkspacesWorkspaceIdProjectsActiveGetError> = [
      { on: 400, kind: "todoistError", decode: { kind: "json", schema: todoistErrorSchema } },
      { on: 401, kind: "todoistError2", decode: { kind: "json", schema: todoistErrorSchema } },
      { on: 403, kind: "todoistError3", decode: { kind: "json", schema: todoistErrorSchema } },
      { on: 404, kind: "todoistError4", decode: { kind: "json", schema: todoistErrorSchema } },
    ];
  }

  export type AllInvitationsApiV1WorkspacesInvitationsAllGetRequest = {
    workspaceId: number;
  };

  export class AllInvitationsApiV1WorkspacesInvitationsAllGetError extends ApiError {
    declare readonly payload:
      | Declared<"todoistError", TodoistError>
      | Declared<"todoistError2", TodoistError>
      | Declared<"todoistError3", TodoistError>
      | Declared<"todoistError4", TodoistError>
      | Undeclared;

    static readonly errors: ErrorDecoders<AllInvitationsApiV1WorkspacesInvitationsAllGetError> = [
      { on: 400, kind: "todoistError", decode: { kind: "json", schema: todoistErrorSchema } },
      { on: 401, kind: "todoistError2", decode: { kind: "json", schema: todoistErrorSchema } },
      { on: 403, kind: "todoistError3", decode: { kind: "json", schema: todoistErrorSchema } },
      { on: 404, kind: "todoistError4", decode: { kind: "json", schema: todoistErrorSchema } },
    ];
  }

  export type ArchivedProjectsApiV1WorkspacesWorkspaceIdProjectsArchivedGetRequest = {
    workspaceId: number;
    cursor?: string | null;
    /** @default 100 */
    limit?: number;
  };

  export const archivedProjectsApiV1WorkspacesWorkspaceIdProjectsArchivedGetRequestSchema: Schema<ArchivedProjectsApiV1WorkspacesWorkspaceIdProjectsArchivedGetRequest> =
    s.lazySchema(() =>
      s.object<ArchivedProjectsApiV1WorkspacesWorkspaceIdProjectsArchivedGetRequest>({
        workspaceId: s.int().check(s.gte(0)),
        cursor: s.optionalNullable(
          s.string().check(s.minLength(1), s.pattern("^[0-9a-zA-Z_-]+\\.[0-9a-zA-Z_-]+$")),
        ),
        limit: s.defaulted(s.int().check(s.gte(1), s.lte(500)), 100),
      }),
    );

  export class ArchivedProjectsApiV1WorkspacesWorkspaceIdProjectsArchivedGetError extends ApiError {
    declare readonly payload:
      | Declared<"todoistError", TodoistError>
      | Declared<"todoistError2", TodoistError>
      | Declared<"todoistError3", TodoistError>
      | Declared<"todoistError4", TodoistError>
      | Undeclared;

    static readonly errors: ErrorDecoders<ArchivedProjectsApiV1WorkspacesWorkspaceIdProjectsArchivedGetError> =
      [
        { on: 400, kind: "todoistError", decode: { kind: "json", schema: todoistErrorSchema } },
        { on: 401, kind: "todoistError2", decode: { kind: "json", schema: todoistErrorSchema } },
        { on: 403, kind: "todoistError3", decode: { kind: "json", schema: todoistErrorSchema } },
        { on: 404, kind: "todoistError4", decode: { kind: "json", schema: todoistErrorSchema } },
      ];
  }

  export type CreateWorkspaceApiV1WorkspacesPostRequest = {
    body: Body38;
  };

  export class CreateWorkspaceApiV1WorkspacesPostError extends ApiError {
    declare readonly payload:
      | Declared<"todoistError", TodoistError>
      | Declared<"todoistError2", TodoistError>
      | Declared<"todoistError3", TodoistError>
      | Declared<"todoistError4", TodoistError>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateWorkspaceApiV1WorkspacesPostError> = [
      { on: 400, kind: "todoistError", decode: { kind: "json", schema: todoistErrorSchema } },
      { on: 401, kind: "todoistError2", decode: { kind: "json", schema: todoistErrorSchema } },
      { on: 403, kind: "todoistError3", decode: { kind: "json", schema: todoistErrorSchema } },
      { on: 404, kind: "todoistError4", decode: { kind: "json", schema: todoistErrorSchema } },
    ];
  }

  export type DeleteInvitationApiV1WorkspacesInvitationsDeletePostRequest = {
    body: Body18;
  };

  export class DeleteInvitationApiV1WorkspacesInvitationsDeletePostError extends ApiError {
    declare readonly payload:
      | Declared<"todoistError", TodoistError>
      | Declared<"todoistError2", TodoistError>
      | Declared<"todoistError3", TodoistError>
      | Declared<"todoistError4", TodoistError>
      | Undeclared;

    static readonly errors: ErrorDecoders<DeleteInvitationApiV1WorkspacesInvitationsDeletePostError> = [
      { on: 400, kind: "todoistError", decode: { kind: "json", schema: todoistErrorSchema } },
      { on: 401, kind: "todoistError2", decode: { kind: "json", schema: todoistErrorSchema } },
      { on: 403, kind: "todoistError3", decode: { kind: "json", schema: todoistErrorSchema } },
      { on: 404, kind: "todoistError4", decode: { kind: "json", schema: todoistErrorSchema } },
    ];
  }

  export type DeleteWorkspaceApiV1WorkspacesWorkspaceIdDeleteRequest = {
    workspaceId: number;
  };

  export const deleteWorkspaceApiV1WorkspacesWorkspaceIdDeleteRequestSchema: Schema<DeleteWorkspaceApiV1WorkspacesWorkspaceIdDeleteRequest> =
    s.lazySchema(() =>
      s.object<DeleteWorkspaceApiV1WorkspacesWorkspaceIdDeleteRequest>({
        workspaceId: s.int().check(s.gt(0)),
      }),
    );

  export class DeleteWorkspaceApiV1WorkspacesWorkspaceIdDeleteError extends ApiError {
    declare readonly payload:
      | Declared<"todoistError", TodoistError>
      | Declared<"todoistError2", TodoistError>
      | Declared<"todoistError3", TodoistError>
      | Declared<"todoistError4", TodoistError>
      | Undeclared;

    static readonly errors: ErrorDecoders<DeleteWorkspaceApiV1WorkspacesWorkspaceIdDeleteError> = [
      { on: 400, kind: "todoistError", decode: { kind: "json", schema: todoistErrorSchema } },
      { on: 401, kind: "todoistError2", decode: { kind: "json", schema: todoistErrorSchema } },
      { on: 403, kind: "todoistError3", decode: { kind: "json", schema: todoistErrorSchema } },
      { on: 404, kind: "todoistError4", decode: { kind: "json", schema: todoistErrorSchema } },
    ];
  }

  export type GetWorkspaceApiV1WorkspacesWorkspaceIdGetRequest = {
    workspaceId: number;
  };

  export const getWorkspaceApiV1WorkspacesWorkspaceIdGetRequestSchema: Schema<GetWorkspaceApiV1WorkspacesWorkspaceIdGetRequest> =
    s.lazySchema(() =>
      s.object<GetWorkspaceApiV1WorkspacesWorkspaceIdGetRequest>({
        workspaceId: s.int().check(s.gt(0)),
      }),
    );

  export class GetWorkspaceApiV1WorkspacesWorkspaceIdGetError extends ApiError {
    declare readonly payload:
      | Declared<"todoistError", TodoistError>
      | Declared<"todoistError2", TodoistError>
      | Declared<"todoistError3", TodoistError>
      | Declared<"todoistError4", TodoistError>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetWorkspaceApiV1WorkspacesWorkspaceIdGetError> = [
      { on: 400, kind: "todoistError", decode: { kind: "json", schema: todoistErrorSchema } },
      { on: 401, kind: "todoistError2", decode: { kind: "json", schema: todoistErrorSchema } },
      { on: 403, kind: "todoistError3", decode: { kind: "json", schema: todoistErrorSchema } },
      { on: 404, kind: "todoistError4", decode: { kind: "json", schema: todoistErrorSchema } },
    ];
  }

  export class GetWorkspacesApiV1WorkspacesGetError extends ApiError {
    declare readonly payload:
      | Declared<"todoistError", TodoistError>
      | Declared<"todoistError2", TodoistError>
      | Declared<"todoistError3", TodoistError>
      | Declared<"todoistError4", TodoistError>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetWorkspacesApiV1WorkspacesGetError> = [
      { on: 400, kind: "todoistError", decode: { kind: "json", schema: todoistErrorSchema } },
      { on: 401, kind: "todoistError2", decode: { kind: "json", schema: todoistErrorSchema } },
      { on: 403, kind: "todoistError3", decode: { kind: "json", schema: todoistErrorSchema } },
      { on: 404, kind: "todoistError4", decode: { kind: "json", schema: todoistErrorSchema } },
    ];
  }

  export type GetWorkspacesUsersApiV1WorkspacesUsersGetRequest = {
    workspaceId?: number | null;
    cursor?: string | null;
    /** @default 100 */
    limit?: number;
    /** @default Sort.Id */
    sort?: Sort;
  };

  export const getWorkspacesUsersApiV1WorkspacesUsersGetRequestSchema: Schema<GetWorkspacesUsersApiV1WorkspacesUsersGetRequest> =
    s.lazySchema(() =>
      s.object<GetWorkspacesUsersApiV1WorkspacesUsersGetRequest>({
        workspaceId: s.optionalNullable(s.int()),
        cursor: s.optionalNullable(
          s.string().check(s.minLength(1), s.pattern("^[0-9a-zA-Z_-]+\\.[0-9a-zA-Z_-]+$")),
        ),
        limit: s.defaulted(s.int(), 100),
        sort: s.defaulted(sortSchema, Sort.Id),
      }),
    );

  export class GetWorkspacesUsersApiV1WorkspacesUsersGetError extends ApiError {
    declare readonly payload:
      | Declared<"todoistError", TodoistError>
      | Declared<"todoistError2", TodoistError>
      | Declared<"todoistError3", TodoistError>
      | Declared<"todoistError4", TodoistError>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetWorkspacesUsersApiV1WorkspacesUsersGetError> = [
      { on: 400, kind: "todoistError", decode: { kind: "json", schema: todoistErrorSchema } },
      { on: 401, kind: "todoistError2", decode: { kind: "json", schema: todoistErrorSchema } },
      { on: 403, kind: "todoistError3", decode: { kind: "json", schema: todoistErrorSchema } },
      { on: 404, kind: "todoistError4", decode: { kind: "json", schema: todoistErrorSchema } },
    ];
  }

  export type InvitationsApiV1WorkspacesInvitationsGetRequest = {
    workspaceId: number;
  };

  export class InvitationsApiV1WorkspacesInvitationsGetError extends ApiError {
    declare readonly payload:
      | Declared<"todoistError", TodoistError>
      | Declared<"todoistError2", TodoistError>
      | Declared<"todoistError3", TodoistError>
      | Declared<"todoistError4", TodoistError>
      | Undeclared;

    static readonly errors: ErrorDecoders<InvitationsApiV1WorkspacesInvitationsGetError> = [
      { on: 400, kind: "todoistError", decode: { kind: "json", schema: todoistErrorSchema } },
      { on: 401, kind: "todoistError2", decode: { kind: "json", schema: todoistErrorSchema } },
      { on: 403, kind: "todoistError3", decode: { kind: "json", schema: todoistErrorSchema } },
      { on: 404, kind: "todoistError4", decode: { kind: "json", schema: todoistErrorSchema } },
    ];
  }

  export type InviteWorkspaceUsersApiV1WorkspacesWorkspaceIdUsersInvitePostRequest = {
    workspaceId: number;
    body: Body5;
  };

  export const inviteWorkspaceUsersApiV1WorkspacesWorkspaceIdUsersInvitePostRequestSchema: Schema<InviteWorkspaceUsersApiV1WorkspacesWorkspaceIdUsersInvitePostRequest> =
    s.lazySchema(() =>
      s.object<InviteWorkspaceUsersApiV1WorkspacesWorkspaceIdUsersInvitePostRequest>({
        workspaceId: s.int().check(s.gt(0)),
        body: body5Schema,
      }),
    );

  export class InviteWorkspaceUsersApiV1WorkspacesWorkspaceIdUsersInvitePostError extends ApiError {
    declare readonly payload:
      | Declared<"todoistError", TodoistError>
      | Declared<"todoistError2", TodoistError>
      | Declared<"todoistError3", TodoistError>
      | Declared<"todoistError4", TodoistError>
      | Undeclared;

    static readonly errors: ErrorDecoders<InviteWorkspaceUsersApiV1WorkspacesWorkspaceIdUsersInvitePostError> =
      [
        { on: 400, kind: "todoistError", decode: { kind: "json", schema: todoistErrorSchema } },
        { on: 401, kind: "todoistError2", decode: { kind: "json", schema: todoistErrorSchema } },
        { on: 403, kind: "todoistError3", decode: { kind: "json", schema: todoistErrorSchema } },
        { on: 404, kind: "todoistError4", decode: { kind: "json", schema: todoistErrorSchema } },
      ];
  }

  export type JoinApiV1WorkspacesJoinPostRequest = {
    body: Body40;
  };

  export class JoinApiV1WorkspacesJoinPostError extends ApiError {
    declare readonly payload:
      | Declared<"todoistError", TodoistError>
      | Declared<"todoistError2", TodoistError>
      | Declared<"todoistError3", TodoistError>
      | Declared<"todoistError4", TodoistError>
      | Undeclared;

    static readonly errors: ErrorDecoders<JoinApiV1WorkspacesJoinPostError> = [
      { on: 400, kind: "todoistError", decode: { kind: "json", schema: todoistErrorSchema } },
      { on: 401, kind: "todoistError2", decode: { kind: "json", schema: todoistErrorSchema } },
      { on: 403, kind: "todoistError3", decode: { kind: "json", schema: todoistErrorSchema } },
      { on: 404, kind: "todoistError4", decode: { kind: "json", schema: todoistErrorSchema } },
    ];
  }

  export type PlanDetailsApiV1WorkspacesPlanDetailsGetRequest = {
    workspaceId: number;
  };

  export class PlanDetailsApiV1WorkspacesPlanDetailsGetError extends ApiError {
    declare readonly payload:
      | Declared<"todoistError", TodoistError>
      | Declared<"todoistError2", TodoistError>
      | Declared<"todoistError3", TodoistError>
      | Declared<"todoistError4", TodoistError>
      | Undeclared;

    static readonly errors: ErrorDecoders<PlanDetailsApiV1WorkspacesPlanDetailsGetError> = [
      { on: 400, kind: "todoistError", decode: { kind: "json", schema: todoistErrorSchema } },
      { on: 401, kind: "todoistError2", decode: { kind: "json", schema: todoistErrorSchema } },
      { on: 403, kind: "todoistError3", decode: { kind: "json", schema: todoistErrorSchema } },
      { on: 404, kind: "todoistError4", decode: { kind: "json", schema: todoistErrorSchema } },
    ];
  }

  export type RejectInvitationApiV1WorkspacesInvitationsInviteCodeRejectPutRequest = {
    inviteCode: string;
  };

  export class RejectInvitationApiV1WorkspacesInvitationsInviteCodeRejectPutError extends ApiError {
    declare readonly payload:
      | Declared<"todoistError", TodoistError>
      | Declared<"todoistError2", TodoistError>
      | Declared<"todoistError3", TodoistError>
      | Declared<"todoistError4", TodoistError>
      | Undeclared;

    static readonly errors: ErrorDecoders<RejectInvitationApiV1WorkspacesInvitationsInviteCodeRejectPutError> =
      [
        { on: 400, kind: "todoistError", decode: { kind: "json", schema: todoistErrorSchema } },
        { on: 401, kind: "todoistError2", decode: { kind: "json", schema: todoistErrorSchema } },
        { on: 403, kind: "todoistError3", decode: { kind: "json", schema: todoistErrorSchema } },
        { on: 404, kind: "todoistError4", decode: { kind: "json", schema: todoistErrorSchema } },
      ];
  }

  export type RemoveWorkspaceUserApiV1WorkspacesWorkspaceIdUsersUserIdDeleteRequest = {
    workspaceId: number;
    userId: number;
  };

  export const removeWorkspaceUserApiV1WorkspacesWorkspaceIdUsersUserIdDeleteRequestSchema: Schema<RemoveWorkspaceUserApiV1WorkspacesWorkspaceIdUsersUserIdDeleteRequest> =
    s.lazySchema(() =>
      s.object<RemoveWorkspaceUserApiV1WorkspacesWorkspaceIdUsersUserIdDeleteRequest>({
        workspaceId: s.int().check(s.gt(0)),
        userId: s.int().check(s.gt(0), s.lt(1.8446744073709552e19)),
      }),
    );

  export class RemoveWorkspaceUserApiV1WorkspacesWorkspaceIdUsersUserIdDeleteError extends ApiError {
    declare readonly payload:
      | Declared<"todoistError", TodoistError>
      | Declared<"todoistError2", TodoistError>
      | Declared<"todoistError3", TodoistError>
      | Declared<"todoistError4", TodoistError>
      | Undeclared;

    static readonly errors: ErrorDecoders<RemoveWorkspaceUserApiV1WorkspacesWorkspaceIdUsersUserIdDeleteError> =
      [
        { on: 400, kind: "todoistError", decode: { kind: "json", schema: todoistErrorSchema } },
        { on: 401, kind: "todoistError2", decode: { kind: "json", schema: todoistErrorSchema } },
        { on: 403, kind: "todoistError3", decode: { kind: "json", schema: todoistErrorSchema } },
        { on: 404, kind: "todoistError4", decode: { kind: "json", schema: todoistErrorSchema } },
      ];
  }

  export type UpdateLogoApiV1WorkspacesLogoPostRequest = {
    /** ID of the workspace. */
    workspaceId: number;
    file: FileInput;
    /** Remove the current logo instead of uploading one. @default false */
    delete?: boolean;
  };

  export class UpdateLogoApiV1WorkspacesLogoPostError extends ApiError {
    declare readonly payload:
      | Declared<"todoistError", TodoistError>
      | Declared<"todoistError2", TodoistError>
      | Declared<"todoistError3", TodoistError>
      | Declared<"todoistError4", TodoistError>
      | Undeclared;

    static readonly errors: ErrorDecoders<UpdateLogoApiV1WorkspacesLogoPostError> = [
      { on: 400, kind: "todoistError", decode: { kind: "json", schema: todoistErrorSchema } },
      { on: 401, kind: "todoistError2", decode: { kind: "json", schema: todoistErrorSchema } },
      { on: 403, kind: "todoistError3", decode: { kind: "json", schema: todoistErrorSchema } },
      { on: 404, kind: "todoistError4", decode: { kind: "json", schema: todoistErrorSchema } },
    ];
  }

  export type UpdateWorkspaceApiV1WorkspacesWorkspaceIdPostRequest = {
    workspaceId: number;
    body: Body34;
  };

  export const updateWorkspaceApiV1WorkspacesWorkspaceIdPostRequestSchema: Schema<UpdateWorkspaceApiV1WorkspacesWorkspaceIdPostRequest> =
    s.lazySchema(() =>
      s.object<UpdateWorkspaceApiV1WorkspacesWorkspaceIdPostRequest>({
        workspaceId: s.int().check(s.gt(0)),
        body: body34Schema,
      }),
    );

  export class UpdateWorkspaceApiV1WorkspacesWorkspaceIdPostError extends ApiError {
    declare readonly payload:
      | Declared<"todoistError", TodoistError>
      | Declared<"todoistError2", TodoistError>
      | Declared<"todoistError3", TodoistError>
      | Declared<"todoistError4", TodoistError>
      | Undeclared;

    static readonly errors: ErrorDecoders<UpdateWorkspaceApiV1WorkspacesWorkspaceIdPostError> = [
      { on: 400, kind: "todoistError", decode: { kind: "json", schema: todoistErrorSchema } },
      { on: 401, kind: "todoistError2", decode: { kind: "json", schema: todoistErrorSchema } },
      { on: 403, kind: "todoistError3", decode: { kind: "json", schema: todoistErrorSchema } },
      { on: 404, kind: "todoistError4", decode: { kind: "json", schema: todoistErrorSchema } },
    ];
  }

  export type UpdateWorkspaceUserApiV1WorkspacesWorkspaceIdUsersUserIdPostRequest = {
    workspaceId: number;
    userId: number;
    body: Body17;
  };

  export const updateWorkspaceUserApiV1WorkspacesWorkspaceIdUsersUserIdPostRequestSchema: Schema<UpdateWorkspaceUserApiV1WorkspacesWorkspaceIdUsersUserIdPostRequest> =
    s.lazySchema(() =>
      s.object<UpdateWorkspaceUserApiV1WorkspacesWorkspaceIdUsersUserIdPostRequest>({
        workspaceId: s.int().check(s.gt(0)),
        userId: s.int().check(s.gt(0), s.lt(1.8446744073709552e19)),
        body: body17Schema,
      }),
    );

  export class UpdateWorkspaceUserApiV1WorkspacesWorkspaceIdUsersUserIdPostError extends ApiError {
    declare readonly payload:
      | Declared<"todoistError", TodoistError>
      | Declared<"todoistError2", TodoistError>
      | Declared<"todoistError3", TodoistError>
      | Declared<"todoistError4", TodoistError>
      | Undeclared;

    static readonly errors: ErrorDecoders<UpdateWorkspaceUserApiV1WorkspacesWorkspaceIdUsersUserIdPostError> =
      [
        { on: 400, kind: "todoistError", decode: { kind: "json", schema: todoistErrorSchema } },
        { on: 401, kind: "todoistError2", decode: { kind: "json", schema: todoistErrorSchema } },
        { on: 403, kind: "todoistError3", decode: { kind: "json", schema: todoistErrorSchema } },
        { on: 404, kind: "todoistError4", decode: { kind: "json", schema: todoistErrorSchema } },
      ];
  }
}
