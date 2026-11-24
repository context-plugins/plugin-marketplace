import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { noneAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { errorResponseSchema, type ErrorResponse } from "../models/error-response.js";
import { httpValidationErrorSchema, type HttpValidationError } from "../models/http-validation-error.js";
import {
  teamInvitationRevokeRequestInternalSchema,
  type TeamInvitationRevokeRequest,
} from "../models/team-invitation-revoke-request.js";
import {
  teamInvitationRevokeResponseSchema,
  type TeamInvitationRevokeResponse,
} from "../models/team-invitation-revoke-response.js";
import {
  teamInvitationsResponseSchema,
  type TeamInvitationsResponse,
} from "../models/team-invitations-response.js";
import { teamInviteRequestInternalSchema, type TeamInviteRequest } from "../models/team-invite-request.js";
import { teamInviteResponseSchema, type TeamInviteResponse } from "../models/team-invite-response.js";
import {
  teamMemberBatchResponseSchema,
  type TeamMemberBatchResponse,
} from "../models/team-member-batch-response.js";
import {
  teamMemberRemoveRequestInternalSchema,
  type TeamMemberRemoveRequest,
} from "../models/team-member-remove-request.js";
import {
  teamMemberRoleUpdateRequestInternalSchema,
  type TeamMemberRoleUpdateRequest,
} from "../models/team-member-role-update-request.js";
import { teamMembersResponseSchema, type TeamMembersResponse } from "../models/team-members-response.js";
import type { Servers } from "../servers.js";

export class Teams {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;

  constructor(rawClient: RawClient, servers: Servers) {
    this.#rawClient = rawClient;
    this.#servers = servers;
  }

  /**
   * Invite Team Members
   *
   * @remarks
   * Invite email addresses to the caller's team; admin only.
   *
   * @returns Successful Response
   *
   * @throws {@link Teams.InviteTeamMembersV2TeamInvitationsPostError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link HudError} when no usable response was produced: a connection failure, a timeout,
   * a body that would not decode, a value that would not encode, or a credential that could not be
   * obtained
   */
  inviteTeamMembersV2TeamInvitationsPost(
    request: Teams.InviteTeamMembersV2TeamInvitationsPostRequest,
    options?: RequestOptions,
  ): ApiPromise<TeamInviteResponse, Teams.InviteTeamMembersV2TeamInvitationsPostError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v2/team/invitations"),
        auth: noneAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: teamInviteRequestInternalSchema },
      },
      {
        success: { kind: "json", schema: teamInviteResponseSchema },
        errorFactory: Teams.InviteTeamMembersV2TeamInvitationsPostError,
      },
      options,
    );
  }

  /**
   * List Team Invitations
   *
   * @remarks
   * List the caller team's pending invitations; admin only.
   *
   * @returns Successful Response
   *
   * @throws {@link Teams.ListTeamInvitationsV2TeamInvitationsGetError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link HudError} when no usable response was produced: a connection failure, a timeout,
   * a body that would not decode, a value that would not encode, or a credential that could not be
   * obtained
   */
  listTeamInvitationsV2TeamInvitationsGet(
    options?: RequestOptions,
  ): ApiPromise<TeamInvitationsResponse, Teams.ListTeamInvitationsV2TeamInvitationsGetError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v2/team/invitations"),
        auth: noneAuth,
        pathParams: [],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: teamInvitationsResponseSchema },
        errorFactory: Teams.ListTeamInvitationsV2TeamInvitationsGetError,
      },
      options,
    );
  }

  /**
   * List Team Members
   *
   * @remarks
   * List the members of the caller's team.
   *
   * @returns Successful Response
   *
   * @throws {@link Teams.ListTeamMembersV2TeamMembersGetError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link HudError} when no usable response was produced: a connection failure, a timeout,
   * a body that would not decode, a value that would not encode, or a credential that could not be
   * obtained
   */
  listTeamMembersV2TeamMembersGet(
    options?: RequestOptions,
  ): ApiPromise<TeamMembersResponse, Teams.ListTeamMembersV2TeamMembersGetError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v2/team/members"),
        auth: noneAuth,
        pathParams: [],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: teamMembersResponseSchema },
        errorFactory: Teams.ListTeamMembersV2TeamMembersGetError,
      },
      options,
    );
  }

  /**
   * Remove Team Members
   *
   * @remarks
   * Remove other members from the caller's team and revoke their API keys; admin only.
   *
   * @returns Successful Response
   *
   * @throws {@link Teams.RemoveTeamMembersV2TeamMembersBatchRemovePostError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link HudError} when no usable response was produced: a connection failure, a timeout,
   * a body that would not decode, a value that would not encode, or a credential that could not be
   * obtained
   */
  removeTeamMembersV2TeamMembersBatchRemovePost(
    request: Teams.RemoveTeamMembersV2TeamMembersBatchRemovePostRequest,
    options?: RequestOptions,
  ): ApiPromise<TeamMemberBatchResponse, Teams.RemoveTeamMembersV2TeamMembersBatchRemovePostError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v2/team/members/batch-remove"),
        auth: noneAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: teamMemberRemoveRequestInternalSchema },
      },
      {
        success: { kind: "json", schema: teamMemberBatchResponseSchema },
        errorFactory: Teams.RemoveTeamMembersV2TeamMembersBatchRemovePostError,
      },
      options,
    );
  }

  /**
   * Revoke Team Invitations
   *
   * @remarks
   * Revoke pending invitations to the caller's team; admin only.
   *
   * @returns Successful Response
   *
   * @throws {@link Teams.RevokeTeamInvitationsV2TeamInvitationsBatchRevokePostError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link HudError} when no usable response was produced: a connection failure, a timeout,
   * a body that would not decode, a value that would not encode, or a credential that could not be
   * obtained
   */
  revokeTeamInvitationsV2TeamInvitationsBatchRevokePost(
    request: Teams.RevokeTeamInvitationsV2TeamInvitationsBatchRevokePostRequest,
    options?: RequestOptions,
  ): ApiPromise<
    TeamInvitationRevokeResponse,
    Teams.RevokeTeamInvitationsV2TeamInvitationsBatchRevokePostError
  > {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v2/team/invitations/batch-revoke"),
        auth: noneAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: teamInvitationRevokeRequestInternalSchema },
      },
      {
        success: { kind: "json", schema: teamInvitationRevokeResponseSchema },
        errorFactory: Teams.RevokeTeamInvitationsV2TeamInvitationsBatchRevokePostError,
      },
      options,
    );
  }

  /**
   * Update Team Member Roles
   *
   * @remarks
   * Set the role of other members of the caller's team; admin only.
   *
   * @returns Successful Response
   *
   * @throws {@link Teams.UpdateTeamMemberRolesV2TeamMembersBatchRolePostError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link HudError} when no usable response was produced: a connection failure, a timeout,
   * a body that would not decode, a value that would not encode, or a credential that could not be
   * obtained
   */
  updateTeamMemberRolesV2TeamMembersBatchRolePost(
    request: Teams.UpdateTeamMemberRolesV2TeamMembersBatchRolePostRequest,
    options?: RequestOptions,
  ): ApiPromise<TeamMemberBatchResponse, Teams.UpdateTeamMemberRolesV2TeamMembersBatchRolePostError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v2/team/members/batch-role"),
        auth: noneAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: teamMemberRoleUpdateRequestInternalSchema },
      },
      {
        success: { kind: "json", schema: teamMemberBatchResponseSchema },
        errorFactory: Teams.UpdateTeamMemberRolesV2TeamMembersBatchRolePostError,
      },
      options,
    );
  }
}

export namespace Teams {
  export type InviteTeamMembersV2TeamInvitationsPostRequest = {
    body: TeamInviteRequest;
  };

  export class InviteTeamMembersV2TeamInvitationsPostError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Declared<"errorResponse5", ErrorResponse>
      | Declared<"errorResponse6", ErrorResponse>
      | Declared<"httpValidationError", HttpValidationError>
      | Declared<"errorResponse7", ErrorResponse>
      | Declared<"errorResponse8", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<InviteTeamMembersV2TeamInvitationsPostError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 409, kind: "errorResponse5", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 502, kind: "errorResponse6", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
      { on: 429, kind: "errorResponse7", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 503, kind: "errorResponse8", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export class ListTeamInvitationsV2TeamInvitationsGetError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Declared<"errorResponse5", ErrorResponse>
      | Declared<"errorResponse6", ErrorResponse>
      | Declared<"errorResponse7", ErrorResponse>
      | Declared<"errorResponse8", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListTeamInvitationsV2TeamInvitationsGetError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 409, kind: "errorResponse5", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 502, kind: "errorResponse6", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 429, kind: "errorResponse7", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 503, kind: "errorResponse8", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export class ListTeamMembersV2TeamMembersGetError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Declared<"errorResponse5", ErrorResponse>
      | Declared<"errorResponse6", ErrorResponse>
      | Declared<"errorResponse7", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListTeamMembersV2TeamMembersGetError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 409, kind: "errorResponse5", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 429, kind: "errorResponse6", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 503, kind: "errorResponse7", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type RemoveTeamMembersV2TeamMembersBatchRemovePostRequest = {
    body: TeamMemberRemoveRequest;
  };

  export class RemoveTeamMembersV2TeamMembersBatchRemovePostError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Declared<"errorResponse5", ErrorResponse>
      | Declared<"errorResponse6", ErrorResponse>
      | Declared<"httpValidationError", HttpValidationError>
      | Declared<"errorResponse7", ErrorResponse>
      | Declared<"errorResponse8", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<RemoveTeamMembersV2TeamMembersBatchRemovePostError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 409, kind: "errorResponse5", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 502, kind: "errorResponse6", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
      { on: 429, kind: "errorResponse7", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 503, kind: "errorResponse8", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type RevokeTeamInvitationsV2TeamInvitationsBatchRevokePostRequest = {
    body: TeamInvitationRevokeRequest;
  };

  export class RevokeTeamInvitationsV2TeamInvitationsBatchRevokePostError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Declared<"errorResponse5", ErrorResponse>
      | Declared<"errorResponse6", ErrorResponse>
      | Declared<"httpValidationError", HttpValidationError>
      | Declared<"errorResponse7", ErrorResponse>
      | Declared<"errorResponse8", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<RevokeTeamInvitationsV2TeamInvitationsBatchRevokePostError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 409, kind: "errorResponse5", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 502, kind: "errorResponse6", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
      { on: 429, kind: "errorResponse7", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 503, kind: "errorResponse8", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type UpdateTeamMemberRolesV2TeamMembersBatchRolePostRequest = {
    body: TeamMemberRoleUpdateRequest;
  };

  export class UpdateTeamMemberRolesV2TeamMembersBatchRolePostError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Declared<"errorResponse5", ErrorResponse>
      | Declared<"errorResponse6", ErrorResponse>
      | Declared<"httpValidationError", HttpValidationError>
      | Declared<"errorResponse7", ErrorResponse>
      | Declared<"errorResponse8", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<UpdateTeamMemberRolesV2TeamMembersBatchRolePostError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 409, kind: "errorResponse5", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 502, kind: "errorResponse6", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
      { on: 429, kind: "errorResponse7", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 503, kind: "errorResponse8", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }
}
