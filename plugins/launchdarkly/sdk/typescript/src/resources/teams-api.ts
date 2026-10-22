import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { FileInput } from "../core/binary.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { forbiddenErrorRepSchema, type ForbiddenErrorRep } from "../models/forbidden-error-rep.js";
import {
  invalidRequestErrorRepSchema,
  type InvalidRequestErrorRep,
} from "../models/invalid-request-error-rep.js";
import {
  methodNotAllowedErrorRepSchema,
  type MethodNotAllowedErrorRep,
} from "../models/method-not-allowed-error-rep.js";
import { notFoundErrorRepSchema, type NotFoundErrorRep } from "../models/not-found-error-rep.js";
import { rateLimitedErrorRepSchema, type RateLimitedErrorRep } from "../models/rate-limited-error-rep.js";
import {
  statusConflictErrorRepSchema,
  type StatusConflictErrorRep,
} from "../models/status-conflict-error-rep.js";
import { teamCustomRolesSchema, type TeamCustomRoles } from "../models/team-custom-roles.js";
import { teamImportsRepSchema, type TeamImportsRep } from "../models/team-imports-rep.js";
import { teamMaintainersSchema, type TeamMaintainers } from "../models/team-maintainers.js";
import { teamPatchInputSchema, type TeamPatchInput } from "../models/team-patch-input.js";
import { teamPostInputSchema, type TeamPostInput } from "../models/team-post-input.js";
import { teamSchema, type Team } from "../models/team.js";
import { teamsSchema, type Teams } from "../models/teams.js";
import { unauthorizedErrorRepSchema, type UnauthorizedErrorRep } from "../models/unauthorized-error-rep.js";
import type { Servers } from "../servers.js";

/**
 * > ### Teams is an Enterprise feature > > Teams is available to customers on an Enterprise plan.
 * To learn more, [read about our pricing](https://launchdarkly.com/pricing/). To upgrade your plan,
 * [contact Sales](https://launchdarkly.com/contact-sales/).
 *
 * A team is a group of members in your LaunchDarkly account. Members of the team have access to
 * various resources in LaunchDarkly, such as projects or flags, based on the role or roles you
 * assign to the team. To learn more, read
 * [Teams](https://launchdarkly.com/docs/home/account/teams).
 *
 * The Teams API allows you to create, read, update, and delete a team.
 *
 * Several of the endpoints in the Teams API require one or more member IDs. The member ID is
 * returned as part of the [List account
 * members](https://launchdarkly.com/docs/api/account-members/get-members) response. It is the `_id`
 * field of each element in the `items` array.
 */
export class TeamsApi {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Delete team
   *
   * @remarks
   * Delete a team by key. To learn more, read [Deleting
   * teams](https://launchdarkly.com/docs/home/account/delete-teams).
   *
   * @returns Action succeeded
   *
   * @throws {@link TeamsApi.DeleteTeamError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link LaunchDarklyRestApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  deleteTeam(
    request: TeamsApi.DeleteTeamRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, TeamsApi.DeleteTeamError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/api/v2/teams/{teamKey}"),
        auth: this.#auth.apiKey,
        pathParams: [{ name: "teamKey", value: request.teamKey, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: TeamsApi.DeleteTeamError,
      },
      options,
    );
  }

  /**
   * Get team
   *
   * @remarks
   * Fetch a team by key.
   *
   * ### Expanding the teams response
   * LaunchDarkly supports several fields for expanding the "Get team" response. By default, these
   * fields are **not** included in the response.
   *
   * To expand the response, append the `expand` query parameter and add a comma-separated list with
   * any of the following fields:
   *
   * * `members` includes the total count of members that belong to the team.
   * * `roles` includes a paginated list of the custom roles that you have assigned to the team.
   * * `roleAttributes` includes a list of the role attributes that you have assigned to the team.
   * * `projects` includes a paginated list of the projects that the team has any write access to.
   * * `maintainers` includes a paginated list of the maintainers that you have assigned to the
   *   team.
   *
   * For example, `expand=members,roles` includes the `members` and `roles` fields in the response.
   *
   * @returns Teams response
   *
   * @throws {@link TeamsApi.GetTeamError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link LaunchDarklyRestApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  getTeam(
    request: TeamsApi.GetTeamRequest,
    options?: RequestOptions,
  ): ApiPromise<Team, TeamsApi.GetTeamError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v2/teams/{teamKey}"),
        auth: this.#auth.apiKey,
        pathParams: [{ name: "teamKey", value: request.teamKey, schema: s.string() }],
        query: [{ name: "expand", value: request.expand, schema: s.optional(s.string()) }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: teamSchema },
        errorFactory: TeamsApi.GetTeamError,
      },
      options,
    );
  }

  /**
   * Get team maintainers
   *
   * @remarks
   * Fetch the maintainers that have been assigned to the team. To learn more, read [Managing team
   * maintainers](https://launchdarkly.com/docs/home/account/team-maintainers).
   *
   * @returns Team maintainers response
   *
   * @throws {@link TeamsApi.GetTeamMaintainersError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link LaunchDarklyRestApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  getTeamMaintainers(
    request: TeamsApi.GetTeamMaintainersRequest,
    options?: RequestOptions,
  ): ApiPromise<TeamMaintainers, TeamsApi.GetTeamMaintainersError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v2/teams/{teamKey}/maintainers"),
        auth: this.#auth.apiKey,
        pathParams: [{ name: "teamKey", value: request.teamKey, schema: s.string() }],
        query: [
          { name: "limit", value: request.limit, schema: s.optional(s.int()) },
          { name: "offset", value: request.offset, schema: s.optional(s.int()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: teamMaintainersSchema },
        errorFactory: TeamsApi.GetTeamMaintainersError,
      },
      options,
    );
  }

  /**
   * Get team custom roles
   *
   * @remarks
   * Fetch the custom roles that have been assigned to the team. To learn more, read [Managing team
   * permissions](https://launchdarkly.com/docs/home/account/team-permissions).
   *
   * @returns Team roles response
   *
   * @throws {@link TeamsApi.GetTeamRolesError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link LaunchDarklyRestApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  getTeamRoles(
    request: TeamsApi.GetTeamRolesRequest,
    options?: RequestOptions,
  ): ApiPromise<TeamCustomRoles, TeamsApi.GetTeamRolesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v2/teams/{teamKey}/roles"),
        auth: this.#auth.apiKey,
        pathParams: [{ name: "teamKey", value: request.teamKey, schema: s.string() }],
        query: [
          { name: "limit", value: request.limit, schema: s.optional(s.int()) },
          { name: "offset", value: request.offset, schema: s.optional(s.int()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: teamCustomRolesSchema },
        errorFactory: TeamsApi.GetTeamRolesError,
      },
      options,
    );
  }

  /**
   * List teams
   *
   * @remarks
   * Return a list of teams.
   *
   * By default, this returns the first 20 teams. Page through this list with the `limit` parameter
   * and by following the `first`, `prev`, `next`, and `last` links in the `_links` field that
   * returns. If those links do not appear, the pages they refer to don't exist. For example, the
   * `first` and `prev` links will be missing from the response on the first page, because there is
   * no previous page and you cannot return to the first page when you are already on the first
   * page.
   *
   * ### Filtering teams
   *
   * LaunchDarkly supports the following fields for filters:
   *
   * - `query` is a string that matches against the teams' names and keys. It is not case-sensitive.
   *   - A request with `query:abc` returns teams with the string `abc` in their name or key.
   * - `nomembers` is a boolean that filters the list of teams who have 0 members
   *   - A request with `nomembers:true` returns teams that have 0 members
   *   - A request with `nomembers:false` returns teams that have 1 or more members
   *
   * ### Expanding the teams response
   * LaunchDarkly supports expanding several fields in the "List teams" response. By default, these
   * fields are **not** included in the response.
   *
   * To expand the response, append the `expand` query parameter and add a comma-separated list with
   * any of the following fields:
   *
   * * `members` includes the total count of members that belong to the team.
   * * `roles` includes a paginated list of the custom roles that you have assigned to the team.
   * * `roleAttributes` includes a list of the role attributes that you have assigned to the team.
   * * `projects` includes a paginated list of the projects that the team has any write access to.
   * * `maintainers` includes a paginated list of the maintainers that you have assigned to the
   *   team.
   *
   * For example, `expand=members,maintainers` includes the `members` and `maintainers` fields in
   * the response.
   *
   * @returns Teams collection response
   *
   * @throws {@link TeamsApi.GetTeamsError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link LaunchDarklyRestApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  getTeams(
    request: TeamsApi.GetTeamsRequest,
    options?: RequestOptions,
  ): ApiPromise<Teams, TeamsApi.GetTeamsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v2/teams"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [
          { name: "limit", value: request.limit, schema: s.optional(s.int()) },
          { name: "offset", value: request.offset, schema: s.optional(s.int()) },
          { name: "filter", value: request.filter, schema: s.optional(s.string()) },
          { name: "expand", value: request.expand, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: teamsSchema },
        errorFactory: TeamsApi.GetTeamsError,
      },
      options,
    );
  }

  /**
   * Update team
   *
   * @remarks
   * Perform a partial update to a team. Updating a team uses the semantic patch format.
   *
   * To make a semantic patch request, you must append `domain-model=launchdarkly.semanticpatch` to
   * your `Content-Type` header. To learn more, read [Updates using semantic
   * patch](https://launchdarkly.com/docs/api#updates-using-semantic-patch).
   *
   * ### Instructions
   *
   * Semantic patch requests support the following `kind` instructions for updating teams. Several
   * of the instructions require one or more member IDs as parameters. The member ID is returned as
   * part of the [List account
   * members](https://launchdarkly.com/docs/api/account-members/get-members) response. It is the
   * `_id` field of each element in the `items` array.
   *
   *
   * <details> <summary>Click to expand instructions for <strong>updating teams</strong></summary>
   *
   * #### addCustomRoles
   *
   * Adds custom roles to the team. Team members will have these custom roles granted to them.
   *
   * ##### Parameters
   *
   * - `values`: List of custom role keys.
   *
   * Here's an example:
   *
   * ```json
   * {
   *   "instructions": [{
   *     "kind": "addCustomRoles",
   *     "values": [ "example-custom-role" ]
   *   }]
   * }
   * ```
   *
   * #### addMembers
   *
   * Adds members to the team.
   *
   * ##### Parameters
   *
   * - `values`: List of member IDs to add.
   *
   * Here's an example:
   *
   * ```json
   * {
   *   "instructions": [{
   *     "kind": "addMembers",
   *     "values": [ "1234a56b7c89d012345e678f", "507f1f77bcf86cd799439011" ]
   *   }]
   * }
   * ```
   *
   * #### addPermissionGrants
   *
   * Adds permission grants to members for the team. For example, a permission grant could allow a
   * member to act as a team maintainer. A permission grant may have either an `actionSet` or a list
   * of `actions` but not both at the same time. The members do not have to be team members to have
   * a permission grant for the team.
   *
   * ##### Parameters
   *
   * - `actionSet`: Name of the action set.
   * - `actions`: List of actions.
   * - `memberIDs`: List of member IDs.
   *
   * Here's an example:
   *
   * ```json
   * {
   *   "instructions": [{
   *     "kind": "addPermissionGrants",
   *     "actions": [ "updateTeamName", "updateTeamDescription" ],
   *     "memberIDs": [ "1234a56b7c89d012345e678f", "507f1f77bcf86cd799439011" ]
   *   }]
   * }
   * ```
   *
   * #### addRoleAttribute
   *
   * Adds a role attribute to a team. Team members will have these role attribute values scoped for
   * all custom roles granted to them.
   *
   * ##### Parameters
   *
   * - `key`: The role attribute key to add.
   * - `values`: List of role attribute values for that key.
   *
   * Here's an example:
   *
   * ```json
   * {
   *   "instructions": [
   *     {
   *       "kind": "addRoleAttribute",
   *       "key": "testAttribute",
   *       "values": ["someNewValue", "someOtherNewValue"]
   *     }
   *   ]
   * }
   * ```
   *
   * #### removeCustomRoles
   *
   * Removes custom roles from the team. The app will no longer grant these custom roles to the team
   * members.
   *
   * ##### Parameters
   *
   * - `values`: List of custom role keys.
   *
   * Here's an example:
   *
   * ```json
   * {
   *   "instructions": [{
   *     "kind": "removeCustomRoles",
   *     "values": [ "example-custom-role" ]
   *   }]
   * }
   * ```
   *
   * #### removeMembers
   *
   * Removes members from the team.
   *
   * ##### Parameters
   *
   * - `values`: List of member IDs to remove.
   *
   * Here's an example:
   *
   * ```json
   * {
   *   "instructions": [{
   *     "kind": "removeMembers",
   *     "values": [ "1234a56b7c89d012345e678f", "507f1f77bcf86cd799439011" ]
   *   }]
   * }
   * ```
   *
   * #### removePermissionGrants
   *
   * Removes permission grants from members for the team. A permission grant may have either an
   * `actionSet` or a list of `actions` but not both at the same time. The `actionSet` and `actions`
   * must match an existing permission grant.
   *
   * ##### Parameters
   *
   * - `actionSet`: Name of the action set.
   * - `actions`: List of actions.
   * - `memberIDs`: List of member IDs.
   *
   * Here's an example:
   *
   * ```json
   * {
   *   "instructions": [{
   *     "kind": "removePermissionGrants",
   *     "actions": [ "updateTeamName", "updateTeamDescription" ],
   *     "memberIDs": [ "1234a56b7c89d012345e678f", "507f1f77bcf86cd799439011" ]
   *   }]
   * }
   * ```
   *
   * #### removeRoleAttribute
   *
   * Removes a role attribute from the team.
   *
   * ##### Parameters
   *
   * - `key`: The role attribute key to remove.
   *
   * Here's an example:
   * ```json
   * {
   *   "instructions": [
   *     {
   *       "kind": "removeRoleAttribute",
   *       "key": "testAttribute"
   *     }
   *   ]
   * }
   * ```
   *
   * #### replaceMembers
   *
   * Replaces the existing members of the team with the new members.
   *
   * ##### Parameters
   *
   * - `values`: List of member IDs of the new members.
   *
   * Here's an example:
   *
   * ```json
   * {
   *   "instructions": [{
   *     "kind": "replaceMembers",
   *     "values": [ "1234a56b7c89d012345e678f", "507f1f77bcf86cd799439011" ]
   *   }]
   * }
   * ```
   *
   * #### replaceRoleAttributes
   *
   * Replaces the existing role attributes for the team with new role attributes.
   *
   * ##### Parameters
   *
   * - `value`: A map of role attribute keys to lists of role attribute values
   *
   * Here's an example:
   *
   * ```json
   * {
   *   "instructions": [{
   *     "kind": "replaceRoleAttributes",
   *     "value": {
   *       "testAttribute": [ "someNewValue", "someOtherNewValue" ],
   *       "projectRoleAttribute": [ "project1", "project2"]
   *     }
   *   }]
   * }
   * ```
   *
   * #### updateDescription
   *
   * Updates the description of the team.
   *
   * ##### Parameters
   *
   * - `value`: The new description.
   *
   * Here's an example:
   *
   * ```json
   * {
   *   "instructions": [{
   *     "kind": "updateDescription",
   *     "value": "Updated team description"
   *   }]
   * }
   * ```
   *
   * #### updateName
   *
   * Updates the name of the team.
   *
   * ##### Parameters
   *
   * - `value`: The new name.
   *
   * Here's an example:
   *
   * ```json
   * {
   *   "instructions": [{
   *     "kind": "updateName",
   *     "value": "Updated team name"
   *   }]
   * }
   * ```
   *
   * #### updateRoleAttribute
   *
   * Updates a role attribute on the team. Any existing values for the given key will be replaced
   * with the new values. Team members will have these role attribute values scoped for all custom
   * roles granted to them.
   *
   * ##### Parameters
   *
   * - `key`: The role attribute key to update.
   * - `values`: List of role attribute values for that key.
   *
   * Here's an example:
   * ```json
   * {
   *   "instructions": [
   *     {
   *       "kind": "updateRoleAttribute",
   *       "key": "testAttribute",
   *       "values": ["someNewValue", "someOtherNewValue"]
   *     }
   *   ]
   * }
   * ```
   *
   * </details>
   *
   * ### Expanding the teams response
   * LaunchDarkly supports four fields for expanding the "Update team" response. By default, these
   * fields are **not** included in the response.
   *
   * To expand the response, append the `expand` query parameter and add a comma-separated list with
   * any of the following fields:
   *
   * * `members` includes the total count of members that belong to the team.
   * * `roles` includes a paginated list of the custom roles that you have assigned to the team.
   * * `projects` includes a paginated list of the projects that the team has any write access to.
   * * `maintainers` includes a paginated list of the maintainers that you have assigned to the
   *   team.
   *
   * For example, `expand=members,roles` includes the `members` and `roles` fields in the response.
   *
   * @returns Teams response
   *
   * @throws {@link TeamsApi.PatchTeamError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link LaunchDarklyRestApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  patchTeam(
    request: TeamsApi.PatchTeamRequest,
    options?: RequestOptions,
  ): ApiPromise<Team, TeamsApi.PatchTeamError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default("/api/v2/teams/{teamKey}"),
        auth: this.#auth.apiKey,
        pathParams: [{ name: "teamKey", value: request.teamKey, schema: s.string() }],
        query: [{ name: "expand", value: request.expand, schema: s.optional(s.string()) }],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: teamPatchInputSchema },
      },
      {
        success: { kind: "json", schema: teamSchema },
        errorFactory: TeamsApi.PatchTeamError,
      },
      options,
    );
  }

  /**
   * Create team
   *
   * @remarks
   * Create a team. To learn more, read [Creating a
   * team](https://launchdarkly.com/docs/home/account/create-teams).
   *
   * ### Expanding the teams response
   * LaunchDarkly supports four fields for expanding the "Create team" response. By default, these
   * fields are **not** included in the response.
   *
   * To expand the response, append the `expand` query parameter and add a comma-separated list with
   * any of the following fields:
   *
   * * `members` includes the total count of members that belong to the team.
   * * `roles` includes a paginated list of the custom roles that you have assigned to the team.
   * * `projects` includes a paginated list of the projects that the team has any write access to.
   * * `maintainers` includes a paginated list of the maintainers that you have assigned to the
   *   team.
   *
   * For example, `expand=members,roles` includes the `members` and `roles` fields in the response.
   *
   * @returns Teams response
   *
   * @throws {@link TeamsApi.PostTeamError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link LaunchDarklyRestApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  postTeam(
    request: TeamsApi.PostTeamRequest,
    options?: RequestOptions,
  ): ApiPromise<Team, TeamsApi.PostTeamError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v2/teams"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [{ name: "expand", value: request.expand, schema: s.optional(s.string()) }],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: teamPostInputSchema },
      },
      {
        success: { kind: "json", schema: teamSchema },
        errorFactory: TeamsApi.PostTeamError,
      },
      options,
    );
  }

  /**
   * Add multiple members to team
   *
   * @remarks
   * Add multiple members to an existing team by uploading a CSV file of member email addresses.
   * Your CSV file must include email addresses in the first column. You can include data in
   * additional columns, but LaunchDarkly ignores all data outside the first column. Headers are
   * optional. To learn more, read [Manage team
   * members](https://launchdarkly.com/docs/home/account/manage-teams#manage-team-members).
   *
   * **Members are only added on a `201` response.** A `207` indicates the CSV file contains a
   * combination of valid and invalid entries. A `207` results in no members being added to the
   * team.
   *
   * On a `207` response, if an entry contains bad input, the `message` field contains the row
   * number as well as the reason for the error. The `message` field is omitted if the entry is
   * valid.
   *
   * Example `207` response:
   * ```json
   * {
   *   "items": [
   *     {
   *       "status": "success",
   *       "value": "new-team-member@acme.com"
   *     },
   *     {
   *       "message": "Line 2: empty row",
   *       "status": "error",
   *       "value": ""
   *     },
   *     {
   *       "message": "Line 3: email already exists in the specified team",
   *       "status": "error",
   *       "value": "existing-team-member@acme.com"
   *     },
   *     {
   *       "message": "Line 4: invalid email formatting",
   *       "status": "error",
   *       "value": "invalid email format"
   *     }
   *   ]
   * }
   * ```
   *
   * Message | Resolution --- | --- Empty row | This line is blank. Add an email address and try
   * again. Duplicate entry | This email address appears in the file twice. Remove the email from
   * the file and try again. Email already exists in the specified team | This member is already on
   * your team. Remove the email from the file and try again. Invalid formatting | This email
   * address is not formatted correctly. Fix the formatting and try again. Email does not belong to
   * a LaunchDarkly member | The email address doesn't belong to a LaunchDarkly account member.
   * Invite them to LaunchDarkly, then re-add them to the team.
   *
   * On a `400` response, the `message` field may contain errors specific to this endpoint.
   *
   * Example `400` response:
   * ```json
   * {
   *   "code": "invalid_request",
   *   "message": "Unable to process file"
   * }
   * ```
   *
   * Message | Resolution --- | --- Unable to process file | LaunchDarkly could not process the file
   * for an unspecified reason. Review your file for errors and try again. File exceeds 25mb | Break
   * up your file into multiple files of less than 25mbs each. All emails have invalid formatting |
   * None of the email addresses in the file are in the correct format. Fix the formatting and try
   * again. All emails belong to existing team members | All listed members are already on this
   * team. Populate the file with member emails that do not belong to the team and try again. File
   * is empty | The CSV file does not contain any email addresses. Populate the file and try again.
   * No emails belong to members of your LaunchDarkly organization | None of the email addresses
   * belong to members of your LaunchDarkly account. Invite these members to LaunchDarkly, then
   * re-add them to the team.
   *
   * @returns Team member imports response
   *
   * @throws {@link TeamsApi.PostTeamMembersError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link LaunchDarklyRestApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  postTeamMembers(
    request: TeamsApi.PostTeamMembersRequest,
    options?: RequestOptions,
  ): ApiPromise<TeamImportsRep, TeamsApi.PostTeamMembersError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v2/teams/{teamKey}/members"),
        auth: this.#auth.apiKey,
        pathParams: [{ name: "teamKey", value: request.teamKey, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "multipart", value: [{ kind: "file", name: "file", value: request.file }] },
      },
      {
        success: { kind: "json", schema: teamImportsRepSchema },
        errorFactory: TeamsApi.PostTeamMembersError,
      },
      options,
    );
  }
}

export namespace TeamsApi {
  export type DeleteTeamRequest = {
    /** The team key */
    teamKey: string;
  };

  export class DeleteTeamError extends ApiError {
    declare readonly payload:
      | Declared<"unauthorizedErrorRep", UnauthorizedErrorRep>
      | Declared<"notFoundErrorRep", NotFoundErrorRep>
      | Declared<"rateLimitedErrorRep", RateLimitedErrorRep>
      | Undeclared;

    static readonly errors: ErrorDecoders<DeleteTeamError> = [
      { on: 401, kind: "unauthorizedErrorRep", decode: { kind: "json", schema: unauthorizedErrorRepSchema } },
      { on: 404, kind: "notFoundErrorRep", decode: { kind: "json", schema: notFoundErrorRepSchema } },
      { on: 429, kind: "rateLimitedErrorRep", decode: { kind: "json", schema: rateLimitedErrorRepSchema } },
    ];
  }

  export type GetTeamRequest = {
    /** The team key. */
    teamKey: string;
    /**
     * A comma-separated list of properties that can reveal additional information in the response.
     */
    expand?: string;
  };

  export class GetTeamError extends ApiError {
    declare readonly payload:
      | Declared<"invalidRequestErrorRep", InvalidRequestErrorRep>
      | Declared<"unauthorizedErrorRep", UnauthorizedErrorRep>
      | Declared<"forbiddenErrorRep", ForbiddenErrorRep>
      | Declared<"notFoundErrorRep", NotFoundErrorRep>
      | Declared<"methodNotAllowedErrorRep", MethodNotAllowedErrorRep>
      | Declared<"rateLimitedErrorRep", RateLimitedErrorRep>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetTeamError> = [
      {
        on: 400,
        kind: "invalidRequestErrorRep",
        decode: { kind: "json", schema: invalidRequestErrorRepSchema },
      },
      { on: 401, kind: "unauthorizedErrorRep", decode: { kind: "json", schema: unauthorizedErrorRepSchema } },
      { on: 403, kind: "forbiddenErrorRep", decode: { kind: "json", schema: forbiddenErrorRepSchema } },
      { on: 404, kind: "notFoundErrorRep", decode: { kind: "json", schema: notFoundErrorRepSchema } },
      {
        on: 405,
        kind: "methodNotAllowedErrorRep",
        decode: { kind: "json", schema: methodNotAllowedErrorRepSchema },
      },
      { on: 429, kind: "rateLimitedErrorRep", decode: { kind: "json", schema: rateLimitedErrorRepSchema } },
    ];
  }

  export type GetTeamMaintainersRequest = {
    /** The team key */
    teamKey: string;
    /** The number of maintainers to return in the response. Defaults to 20. */
    limit?: number;
    /**
     * Where to start in the list. This is for use with pagination. For example, an offset of 10
     * skips the first ten items and then returns the next items in the list, up to the query
     * `limit`.
     */
    offset?: number;
  };

  export class GetTeamMaintainersError extends ApiError {
    declare readonly payload:
      | Declared<"invalidRequestErrorRep", InvalidRequestErrorRep>
      | Declared<"unauthorizedErrorRep", UnauthorizedErrorRep>
      | Declared<"forbiddenErrorRep", ForbiddenErrorRep>
      | Declared<"notFoundErrorRep", NotFoundErrorRep>
      | Declared<"methodNotAllowedErrorRep", MethodNotAllowedErrorRep>
      | Declared<"rateLimitedErrorRep", RateLimitedErrorRep>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetTeamMaintainersError> = [
      {
        on: 400,
        kind: "invalidRequestErrorRep",
        decode: { kind: "json", schema: invalidRequestErrorRepSchema },
      },
      { on: 401, kind: "unauthorizedErrorRep", decode: { kind: "json", schema: unauthorizedErrorRepSchema } },
      { on: 403, kind: "forbiddenErrorRep", decode: { kind: "json", schema: forbiddenErrorRepSchema } },
      { on: 404, kind: "notFoundErrorRep", decode: { kind: "json", schema: notFoundErrorRepSchema } },
      {
        on: 405,
        kind: "methodNotAllowedErrorRep",
        decode: { kind: "json", schema: methodNotAllowedErrorRepSchema },
      },
      { on: 429, kind: "rateLimitedErrorRep", decode: { kind: "json", schema: rateLimitedErrorRepSchema } },
    ];
  }

  export type GetTeamRolesRequest = {
    /** The team key */
    teamKey: string;
    /** The number of roles to return in the response. Defaults to 20. */
    limit?: number;
    /**
     * Where to start in the list. This is for use with pagination. For example, an offset of 10
     * skips the first ten items and then returns the next items in the list, up to the query
     * `limit`.
     */
    offset?: number;
  };

  export class GetTeamRolesError extends ApiError {
    declare readonly payload:
      | Declared<"invalidRequestErrorRep", InvalidRequestErrorRep>
      | Declared<"unauthorizedErrorRep", UnauthorizedErrorRep>
      | Declared<"forbiddenErrorRep", ForbiddenErrorRep>
      | Declared<"notFoundErrorRep", NotFoundErrorRep>
      | Declared<"methodNotAllowedErrorRep", MethodNotAllowedErrorRep>
      | Declared<"rateLimitedErrorRep", RateLimitedErrorRep>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetTeamRolesError> = [
      {
        on: 400,
        kind: "invalidRequestErrorRep",
        decode: { kind: "json", schema: invalidRequestErrorRepSchema },
      },
      { on: 401, kind: "unauthorizedErrorRep", decode: { kind: "json", schema: unauthorizedErrorRepSchema } },
      { on: 403, kind: "forbiddenErrorRep", decode: { kind: "json", schema: forbiddenErrorRepSchema } },
      { on: 404, kind: "notFoundErrorRep", decode: { kind: "json", schema: notFoundErrorRepSchema } },
      {
        on: 405,
        kind: "methodNotAllowedErrorRep",
        decode: { kind: "json", schema: methodNotAllowedErrorRepSchema },
      },
      { on: 429, kind: "rateLimitedErrorRep", decode: { kind: "json", schema: rateLimitedErrorRepSchema } },
    ];
  }

  export type GetTeamsRequest = {
    /** The number of teams to return in the response. Defaults to 20. */
    limit?: number;
    /**
     * Where to start in the list. Use this with pagination. For example, an offset of 10 skips the
     * first ten items and returns the next `limit` items.
     */
    offset?: number;
    /** A comma-separated list of filters. Each filter is constructed as `field:value`. */
    filter?: string;
    /**
     * A comma-separated list of properties that can reveal additional information in the response.
     */
    expand?: string;
  };

  export class GetTeamsError extends ApiError {
    declare readonly payload:
      | Declared<"unauthorizedErrorRep", UnauthorizedErrorRep>
      | Declared<"methodNotAllowedErrorRep", MethodNotAllowedErrorRep>
      | Declared<"rateLimitedErrorRep", RateLimitedErrorRep>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetTeamsError> = [
      { on: 401, kind: "unauthorizedErrorRep", decode: { kind: "json", schema: unauthorizedErrorRepSchema } },
      {
        on: 405,
        kind: "methodNotAllowedErrorRep",
        decode: { kind: "json", schema: methodNotAllowedErrorRepSchema },
      },
      { on: 429, kind: "rateLimitedErrorRep", decode: { kind: "json", schema: rateLimitedErrorRepSchema } },
    ];
  }

  export type PatchTeamRequest = {
    /** The team key */
    teamKey: string;
    /**
     * A comma-separated list of properties that can reveal additional information in the response.
     * Supported fields are explained above.
     */
    expand?: string;
    body: TeamPatchInput;
  };

  export class PatchTeamError extends ApiError {
    declare readonly payload:
      | Declared<"invalidRequestErrorRep", InvalidRequestErrorRep>
      | Declared<"unauthorizedErrorRep", UnauthorizedErrorRep>
      | Declared<"notFoundErrorRep", NotFoundErrorRep>
      | Declared<"methodNotAllowedErrorRep", MethodNotAllowedErrorRep>
      | Declared<"statusConflictErrorRep", StatusConflictErrorRep>
      | Declared<"rateLimitedErrorRep", RateLimitedErrorRep>
      | Undeclared;

    static readonly errors: ErrorDecoders<PatchTeamError> = [
      {
        on: 400,
        kind: "invalidRequestErrorRep",
        decode: { kind: "json", schema: invalidRequestErrorRepSchema },
      },
      { on: 401, kind: "unauthorizedErrorRep", decode: { kind: "json", schema: unauthorizedErrorRepSchema } },
      { on: 404, kind: "notFoundErrorRep", decode: { kind: "json", schema: notFoundErrorRepSchema } },
      {
        on: 405,
        kind: "methodNotAllowedErrorRep",
        decode: { kind: "json", schema: methodNotAllowedErrorRepSchema },
      },
      {
        on: 409,
        kind: "statusConflictErrorRep",
        decode: { kind: "json", schema: statusConflictErrorRepSchema },
      },
      { on: 429, kind: "rateLimitedErrorRep", decode: { kind: "json", schema: rateLimitedErrorRepSchema } },
    ];
  }

  export type PostTeamRequest = {
    /**
     * A comma-separated list of properties that can reveal additional information in the response.
     * Supported fields are explained above.
     */
    expand?: string;
    body: TeamPostInput;
  };

  export class PostTeamError extends ApiError {
    declare readonly payload:
      | Declared<"invalidRequestErrorRep", InvalidRequestErrorRep>
      | Declared<"unauthorizedErrorRep", UnauthorizedErrorRep>
      | Declared<"methodNotAllowedErrorRep", MethodNotAllowedErrorRep>
      | Declared<"rateLimitedErrorRep", RateLimitedErrorRep>
      | Undeclared;

    static readonly errors: ErrorDecoders<PostTeamError> = [
      {
        on: 400,
        kind: "invalidRequestErrorRep",
        decode: { kind: "json", schema: invalidRequestErrorRepSchema },
      },
      { on: 401, kind: "unauthorizedErrorRep", decode: { kind: "json", schema: unauthorizedErrorRepSchema } },
      {
        on: 405,
        kind: "methodNotAllowedErrorRep",
        decode: { kind: "json", schema: methodNotAllowedErrorRepSchema },
      },
      { on: 429, kind: "rateLimitedErrorRep", decode: { kind: "json", schema: rateLimitedErrorRepSchema } },
    ];
  }

  export type PostTeamMembersRequest = {
    /** The team key */
    teamKey: string;
    /** CSV file containing email addresses */
    file?: FileInput;
  };

  export class PostTeamMembersError extends ApiError {
    declare readonly payload:
      | Declared<"invalidRequestErrorRep", InvalidRequestErrorRep>
      | Declared<"unauthorizedErrorRep", UnauthorizedErrorRep>
      | Declared<"methodNotAllowedErrorRep", MethodNotAllowedErrorRep>
      | Declared<"rateLimitedErrorRep", RateLimitedErrorRep>
      | Undeclared;

    static readonly errors: ErrorDecoders<PostTeamMembersError> = [
      {
        on: 400,
        kind: "invalidRequestErrorRep",
        decode: { kind: "json", schema: invalidRequestErrorRepSchema },
      },
      { on: 401, kind: "unauthorizedErrorRep", decode: { kind: "json", schema: unauthorizedErrorRepSchema } },
      {
        on: 405,
        kind: "methodNotAllowedErrorRep",
        decode: { kind: "json", schema: methodNotAllowedErrorRepSchema },
      },
      { on: 429, kind: "rateLimitedErrorRep", decode: { kind: "json", schema: rateLimitedErrorRepSchema } },
    ];
  }
}
