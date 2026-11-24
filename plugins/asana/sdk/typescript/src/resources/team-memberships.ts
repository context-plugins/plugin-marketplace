import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import * as s from "../core/validation/index.js";
import { errorResponseSchema, type ErrorResponse } from "../models/error-response.js";
import {
  teamMembershipsResponseSchema,
  type TeamMembershipsResponse,
} from "../models/team-memberships-response.js";
import {
  teamMembershipsResponse1Schema,
  type TeamMembershipsResponse1,
} from "../models/team-memberships-response1.js";
import {
  teamsTeamMembershipsResponseSchema,
  type TeamsTeamMembershipsResponse,
} from "../models/teams-team-memberships-response.js";
import {
  usersTeamMembershipsResponseSchema,
  type UsersTeamMembershipsResponse,
} from "../models/users-team-memberships-response.js";
import type { Servers } from "../servers.js";

/**
 * This object determines if a user is a member of a team.
 */
export class TeamMemberships {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Get a team membership
   *
   * @remarks
   * Returns the complete team membership record for a single team membership.
   *
   * @returns Successfully retrieved the requested team membership.
   *
   * @throws {@link TeamMemberships.GetTeamMembershipError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link AsanaError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getTeamMembership(
    request: TeamMemberships.GetTeamMembershipRequest,
    options?: RequestOptions,
  ): ApiPromise<TeamMembershipsResponse, TeamMemberships.GetTeamMembershipError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/team_memberships/{team_membership_gid}"),
        auth: anyAuth(this.#auth.personalAccessToken, this.#auth.oauth2),
        pathParams: [{ name: "team_membership_gid", value: request.teamMembershipGid, schema: s.string() }],
        query: [
          { name: "opt_pretty", value: request.optPretty, schema: s.optionalNullable(s.boolean()) },
          {
            name: "opt_fields",
            value: request.optFields,
            schema: s.optional(s.array(s.string())),
            style: "csv",
          },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: teamMembershipsResponseSchema },
        errorFactory: TeamMemberships.GetTeamMembershipError,
      },
      options,
    );
  }

  /**
   * Get team memberships
   *
   * @remarks
   * Returns compact team membership records.
   *
   * @returns Successfully retrieved the requested team memberships.
   *
   * @throws {@link TeamMemberships.GetTeamMembershipsError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link AsanaError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getTeamMemberships(
    request: TeamMemberships.GetTeamMembershipsRequest = {},
    options?: RequestOptions,
  ): ApiPromise<TeamMembershipsResponse1, TeamMemberships.GetTeamMembershipsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/team_memberships"),
        auth: anyAuth(this.#auth.personalAccessToken, this.#auth.oauth2),
        pathParams: [],
        query: [
          { name: "opt_pretty", value: request.optPretty, schema: s.optionalNullable(s.boolean()) },
          {
            name: "opt_fields",
            value: request.optFields,
            schema: s.optional(s.array(s.string())),
            style: "csv",
          },
          { name: "limit", value: request.limit, schema: s.optional(s.int()) },
          { name: "offset", value: request.offset, schema: s.optional(s.string()) },
          { name: "team", value: request.team, schema: s.optional(s.string()) },
          { name: "user", value: request.user, schema: s.optional(s.string()) },
          { name: "workspace", value: request.workspace, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: teamMembershipsResponse1Schema },
        errorFactory: TeamMemberships.GetTeamMembershipsError,
      },
      options,
    );
  }

  /**
   * Get memberships from a team
   *
   * @remarks
   * Returns the compact team memberships for the team.
   *
   * @returns Successfully retrieved the requested team's memberships.
   *
   * @throws {@link TeamMemberships.GetTeamMembershipsForTeamError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link AsanaError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getTeamMembershipsForTeam(
    request: TeamMemberships.GetTeamMembershipsForTeamRequest,
    options?: RequestOptions,
  ): ApiPromise<TeamsTeamMembershipsResponse, TeamMemberships.GetTeamMembershipsForTeamError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/teams/{team_gid}/team_memberships"),
        auth: anyAuth(this.#auth.personalAccessToken, this.#auth.oauth2),
        pathParams: [{ name: "team_gid", value: request.teamGid, schema: s.string() }],
        query: [
          { name: "opt_pretty", value: request.optPretty, schema: s.optionalNullable(s.boolean()) },
          {
            name: "opt_fields",
            value: request.optFields,
            schema: s.optional(s.array(s.string())),
            style: "csv",
          },
          { name: "limit", value: request.limit, schema: s.optional(s.int()) },
          { name: "offset", value: request.offset, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: teamsTeamMembershipsResponseSchema },
        errorFactory: TeamMemberships.GetTeamMembershipsForTeamError,
      },
      options,
    );
  }

  /**
   * Get memberships from a user
   *
   * @remarks
   * Returns the compact team membership records for the user.
   *
   * @returns Successfully retrieved the requested users's memberships.
   *
   * @throws {@link TeamMemberships.GetTeamMembershipsForUserError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link AsanaError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getTeamMembershipsForUser(
    request: TeamMemberships.GetTeamMembershipsForUserRequest,
    options?: RequestOptions,
  ): ApiPromise<UsersTeamMembershipsResponse, TeamMemberships.GetTeamMembershipsForUserError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/users/{user_gid}/team_memberships"),
        auth: anyAuth(this.#auth.personalAccessToken, this.#auth.oauth2),
        pathParams: [{ name: "user_gid", value: request.userGid, schema: s.string() }],
        query: [
          { name: "workspace", value: request.workspace, schema: s.string() },
          { name: "opt_pretty", value: request.optPretty, schema: s.optionalNullable(s.boolean()) },
          {
            name: "opt_fields",
            value: request.optFields,
            schema: s.optional(s.array(s.string())),
            style: "csv",
          },
          { name: "limit", value: request.limit, schema: s.optional(s.int()) },
          { name: "offset", value: request.offset, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: usersTeamMembershipsResponseSchema },
        errorFactory: TeamMemberships.GetTeamMembershipsForUserError,
      },
      options,
    );
  }
}

export namespace TeamMemberships {
  export type GetTeamMembershipRequest = {
    teamMembershipGid: string;
    /**
     * Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON
     * this means doing proper line breaking and indentation to make it readable. This will take
     * extra time and increase the response size so it is advisable only to use this during
     * debugging.
     */
    optPretty?: boolean | null;
    /**
     * Defines fields to return. Some requests return *compact* representations of objects in order
     * to conserve resources and complete the request more efficiently. Other times requests return
     * more information than you may need. This option allows you to list the exact set of fields
     * that the API should be sure to return for the objects. The field names should be provided as
     * paths, described below. The id of included objects will always be returned, regardless of the
     * field options.
     */
    optFields?: string[];
  };

  export class GetTeamMembershipError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Declared<"errorResponse5", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetTeamMembershipError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse5", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type GetTeamMembershipsRequest = {
    /**
     * Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON
     * this means doing proper line breaking and indentation to make it readable. This will take
     * extra time and increase the response size so it is advisable only to use this during
     * debugging.
     */
    optPretty?: boolean | null;
    /**
     * Defines fields to return. Some requests return *compact* representations of objects in order
     * to conserve resources and complete the request more efficiently. Other times requests return
     * more information than you may need. This option allows you to list the exact set of fields
     * that the API should be sure to return for the objects. The field names should be provided as
     * paths, described below. The id of included objects will always be returned, regardless of the
     * field options.
     */
    optFields?: string[];
    /**
     * Results per page. The number of objects to return per page. The value must be between 1 and
     * 100.
     */
    limit?: number;
    /**
     * Offset token. An offset to the next page returned by the API. A pagination request will
     * return an offset token, which can be used as an input parameter to the next request. If an
     * offset is not passed in, the API will return the first page of results. 'Note: You can only
     * pass in an offset that was returned to you via a previously paginated request.'
     */
    offset?: string;
    /** Globally unique identifier for the team. */
    team?: string;
    /**
     * A string identifying a user. This can either be the string "me", an email, or the gid of a
     * user. This parameter must be used with the workspace parameter.
     */
    user?: string;
    /**
     * Globally unique identifier for the workspace. This parameter must be used with the user
     * parameter.
     */
    workspace?: string;
  };

  export class GetTeamMembershipsError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Declared<"errorResponse5", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetTeamMembershipsError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse5", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type GetTeamMembershipsForTeamRequest = {
    /** Globally unique identifier for the team. */
    teamGid: string;
    /**
     * Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON
     * this means doing proper line breaking and indentation to make it readable. This will take
     * extra time and increase the response size so it is advisable only to use this during
     * debugging.
     */
    optPretty?: boolean | null;
    /**
     * Defines fields to return. Some requests return *compact* representations of objects in order
     * to conserve resources and complete the request more efficiently. Other times requests return
     * more information than you may need. This option allows you to list the exact set of fields
     * that the API should be sure to return for the objects. The field names should be provided as
     * paths, described below. The id of included objects will always be returned, regardless of the
     * field options.
     */
    optFields?: string[];
    /**
     * Results per page. The number of objects to return per page. The value must be between 1 and
     * 100.
     */
    limit?: number;
    /**
     * Offset token. An offset to the next page returned by the API. A pagination request will
     * return an offset token, which can be used as an input parameter to the next request. If an
     * offset is not passed in, the API will return the first page of results. 'Note: You can only
     * pass in an offset that was returned to you via a previously paginated request.'
     */
    offset?: string;
  };

  export class GetTeamMembershipsForTeamError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Declared<"errorResponse5", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetTeamMembershipsForTeamError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse5", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type GetTeamMembershipsForUserRequest = {
    /**
     * A string identifying a user. This can either be the string "me", an email, or the gid of a
     * user.
     */
    userGid: string;
    /** Globally unique identifier for the workspace. */
    workspace: string;
    /**
     * Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON
     * this means doing proper line breaking and indentation to make it readable. This will take
     * extra time and increase the response size so it is advisable only to use this during
     * debugging.
     */
    optPretty?: boolean | null;
    /**
     * Defines fields to return. Some requests return *compact* representations of objects in order
     * to conserve resources and complete the request more efficiently. Other times requests return
     * more information than you may need. This option allows you to list the exact set of fields
     * that the API should be sure to return for the objects. The field names should be provided as
     * paths, described below. The id of included objects will always be returned, regardless of the
     * field options.
     */
    optFields?: string[];
    /**
     * Results per page. The number of objects to return per page. The value must be between 1 and
     * 100.
     */
    limit?: number;
    /**
     * Offset token. An offset to the next page returned by the API. A pagination request will
     * return an offset token, which can be used as an input parameter to the next request. If an
     * offset is not passed in, the API will return the first page of results. 'Note: You can only
     * pass in an offset that was returned to you via a previously paginated request.'
     */
    offset?: string;
  };

  export class GetTeamMembershipsForUserError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Declared<"errorResponse5", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetTeamMembershipsForUserError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse5", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }
}
