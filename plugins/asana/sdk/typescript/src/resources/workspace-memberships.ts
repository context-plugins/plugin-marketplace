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
  usersWorkspaceMembershipsResponseSchema,
  type UsersWorkspaceMembershipsResponse,
} from "../models/users-workspace-memberships-response.js";
import {
  workspaceMembershipsResponseSchema,
  type WorkspaceMembershipsResponse,
} from "../models/workspace-memberships-response.js";
import {
  workspacesWorkspaceMembershipsResponseSchema,
  type WorkspacesWorkspaceMembershipsResponse,
} from "../models/workspaces-workspace-memberships-response.js";
import type { Servers } from "../servers.js";

/**
 * This object determines if a user is a member of a workspace.
 */
export class WorkspaceMemberships {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Get a workspace membership
   *
   * @remarks
   * Returns the complete workspace record for a single workspace membership.
   *
   * @returns Successfully retrieved the requested workspace membership.
   *
   * @throws {@link WorkspaceMemberships.GetWorkspaceMembershipError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link AsanaError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getWorkspaceMembership(
    request: WorkspaceMemberships.GetWorkspaceMembershipRequest,
    options?: RequestOptions,
  ): ApiPromise<WorkspaceMembershipsResponse, WorkspaceMemberships.GetWorkspaceMembershipError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/workspace_memberships/{workspace_membership_gid}"),
        auth: anyAuth(this.#auth.personalAccessToken, this.#auth.oauth2),
        pathParams: [
          { name: "workspace_membership_gid", value: request.workspaceMembershipGid, schema: s.string() },
        ],
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
        success: { kind: "json", schema: workspaceMembershipsResponseSchema },
        errorFactory: WorkspaceMemberships.GetWorkspaceMembershipError,
      },
      options,
    );
  }

  /**
   * Get workspace memberships for a user
   *
   * @remarks
   * Returns the compact workspace membership records for the user.
   *
   * @returns Successfully retrieved the requested user's workspace memberships.
   *
   * @throws {@link WorkspaceMemberships.GetWorkspaceMembershipsForUserError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AsanaError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getWorkspaceMembershipsForUser(
    request: WorkspaceMemberships.GetWorkspaceMembershipsForUserRequest,
    options?: RequestOptions,
  ): ApiPromise<UsersWorkspaceMembershipsResponse, WorkspaceMemberships.GetWorkspaceMembershipsForUserError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/users/{user_gid}/workspace_memberships"),
        auth: anyAuth(this.#auth.personalAccessToken, this.#auth.oauth2),
        pathParams: [{ name: "user_gid", value: request.userGid, schema: s.string() }],
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
        success: { kind: "json", schema: usersWorkspaceMembershipsResponseSchema },
        errorFactory: WorkspaceMemberships.GetWorkspaceMembershipsForUserError,
      },
      options,
    );
  }

  /**
   * Get the workspace memberships for a workspace
   *
   * @remarks
   * Returns the compact workspace membership records for the workspace.
   *
   * @returns Successfully retrieved the requested workspace's memberships.
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link AsanaError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getWorkspaceMembershipsForWorkspace(
    request: WorkspaceMemberships.GetWorkspaceMembershipsForWorkspaceRequest,
    options?: RequestOptions,
  ): ApiPromise<WorkspacesWorkspaceMembershipsResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/workspaces/{workspace_gid}/workspace_memberships"),
        auth: anyAuth(this.#auth.personalAccessToken, this.#auth.oauth2),
        pathParams: [{ name: "workspace_gid", value: request.workspaceGid, schema: s.string() }],
        query: [
          { name: "user", value: request.user, schema: s.optional(s.string()) },
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
        success: { kind: "json", schema: workspacesWorkspaceMembershipsResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace WorkspaceMemberships {
  export type GetWorkspaceMembershipRequest = {
    workspaceMembershipGid: string;
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

  export class GetWorkspaceMembershipError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Declared<"errorResponse5", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetWorkspaceMembershipError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse5", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type GetWorkspaceMembershipsForUserRequest = {
    /**
     * A string identifying a user. This can either be the string "me", an email, or the gid of a
     * user.
     */
    userGid: string;
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

  export class GetWorkspaceMembershipsForUserError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Declared<"errorResponse5", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetWorkspaceMembershipsForUserError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse5", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type GetWorkspaceMembershipsForWorkspaceRequest = {
    /** Globally unique identifier for the workspace or organization. */
    workspaceGid: string;
    /**
     * A string identifying a user. This can either be the string "me", an email, or the gid of a
     * user.
     */
    user?: string;
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
}
