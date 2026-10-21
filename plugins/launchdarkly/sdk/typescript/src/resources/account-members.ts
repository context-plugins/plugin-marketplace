import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { bulkEditMembersRepSchema, type BulkEditMembersRep } from "../models/bulk-edit-members-rep.js";
import { forbiddenErrorRepSchema, type ForbiddenErrorRep } from "../models/forbidden-error-rep.js";
import {
  invalidRequestErrorRepSchema,
  type InvalidRequestErrorRep,
} from "../models/invalid-request-error-rep.js";
import { memberTeamsPostInputSchema, type MemberTeamsPostInput } from "../models/member-teams-post-input.js";
import { memberSchema, type Member } from "../models/member.js";
import { membersPatchInputSchema, type MembersPatchInput } from "../models/members-patch-input.js";
import { membersSchema, type Members } from "../models/members.js";
import { newMemberFormSchema, type NewMemberForm } from "../models/new-member-form.js";
import { notFoundErrorRepSchema, type NotFoundErrorRep } from "../models/not-found-error-rep.js";
import { patchOperationSchema, type PatchOperation } from "../models/patch-operation.js";
import { rateLimitedErrorRepSchema, type RateLimitedErrorRep } from "../models/rate-limited-error-rep.js";
import {
  statusConflictErrorRepSchema,
  type StatusConflictErrorRep,
} from "../models/status-conflict-error-rep.js";
import { unauthorizedErrorRepSchema, type UnauthorizedErrorRep } from "../models/unauthorized-error-rep.js";
import type { Servers } from "../servers.js";

/**
 * The account members API allows you to invite new members to an account by making a `POST` request
 * to `/api/v2/members`. When you invite a new member to an account, an invitation is sent to the
 * email you provided. Members with Admin or Owner roles may create new members, as well as anyone
 * with a `createMember` permission for "member/\*". To learn more, read [LaunchDarkly account
 * members](https://launchdarkly.com/docs/home/account/members).
 *
 * Any member may request the complete list of account members with a `GET` to `/api/v2/members`.
 *
 * Several of the endpoints in the account members API require a member ID. The member ID is
 * returned as part of the [Invite new
 * members](https://launchdarkly.com/docs/api/account-members/post-members) and [List account
 * members](https://launchdarkly.com/docs/api/account-members/get-members) responses. It is the
 * `_id` field of each element in the `items` array.
 */
export class AccountMembers {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Delete account member
   *
   * @remarks
   * Delete a single account member by ID. Requests to delete account members will not work if SCIM
   * is enabled for the account.
   *
   * @returns Action succeeded
   *
   * @throws {@link AccountMembers.DeleteMemberError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link LaunchDarklyRestApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  deleteMember(
    request: AccountMembers.DeleteMemberRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, AccountMembers.DeleteMemberError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/api/v2/members/{id}"),
        auth: this.#auth.apiKey,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: AccountMembers.DeleteMemberError,
      },
      options,
    );
  }

  /**
   * Get account member
   *
   * @remarks
   * Get a single account member by member ID.
   *
   * `me` is a reserved value for the `id` parameter that returns the caller's member information.
   *
   * ### Expanding the member response
   * LaunchDarkly supports one field for expanding the "Get member" response. By default, this field
   * is **not** included in the response.
   *
   * To expand the response, append the `expand` query parameter and add a comma-separated list with
   * any of the following fields:
   *
   * * `roleAttributes` includes a list of the role attributes that you have assigned to the member.
   *
   * For example, `expand=roleAttributes` includes `roleAttributes` field in the response.
   *
   * @returns Member response
   *
   * @throws {@link AccountMembers.GetMemberError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link LaunchDarklyRestApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  getMember(
    request: AccountMembers.GetMemberRequest,
    options?: RequestOptions,
  ): ApiPromise<Member, AccountMembers.GetMemberError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v2/members/{id}"),
        auth: this.#auth.apiKey,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [{ name: "expand", value: request.expand, schema: s.optional(s.string()) }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: memberSchema },
        errorFactory: AccountMembers.GetMemberError,
      },
      options,
    );
  }

  /**
   * List account members
   *
   * @remarks
   * Return a list of account members.
   *
   * By default, this returns the first 20 members. Page through this list with the `limit`
   * parameter and by following the `first`, `prev`, `next`, and `last` links in the returned
   * `_links` field. These links are not present if the pages they refer to don't exist. For
   * example, the `first` and `prev` links will be missing from the response on the first page.
   *
   * ### Filtering members
   *
   * LaunchDarkly supports the following fields for filters:
   *
   * - `query` is a string that matches against the members' emails and names. It is not case
   *   sensitive.
   * - `role` is a `|` separated list of roles and custom roles. It filters the list to members who
   *   have any of the roles in the list. For the purposes of this filtering, `Owner` counts as
   *   `Admin`.
   * - `id` is a `|` separated list of member IDs. It filters the list to members who match any of
   *   the IDs in the list.
   * - `email` is a `|` separated list of member emails. It filters the list to members who match
   *   any of the emails in the list.
   * - `team` is a string that matches against the key of the teams the members belong to. It is not
   *   case sensitive.
   * - `noteam` is a boolean that filters the list of members who are not on a team if true and
   *   members on a team if false.
   * - `lastSeen` is a JSON object in one of the following formats:
   *   - `{"never": true}` - Members that have never been active, such as those who have not
   *     accepted their invitation to LaunchDarkly, or have not logged in after being provisioned
   *     via SCIM.
   *   - `{"noData": true}` - Members that have not been active since LaunchDarkly began recording
   *     last seen timestamps.
   *   - `{"before": 1608672063611}` - Members that have not been active since the provided value,
   *     which should be a timestamp in Unix epoch milliseconds.
   * - `accessCheck` is a string that represents a specific action on a specific resource and is in
   *   the format `<ActionSpecifier>:<ResourceSpecifier>`. It filters the list to members who have
   *   the ability to perform that action on that resource. Note: `accessCheck` is only supported in
   *   API version `20220603` and earlier. To learn more, read
   *   [Versioning](https://launchdarkly.com/docs/api#versioning).
   *   - For example, the filter
   *     `accessCheck:createApprovalRequest:proj/default:env/test:flag/alternate-page` matches
   *     members with the ability to create an approval request for the `alternate-page` flag in the
   *     `test` environment of the `default` project.
   *   - Wildcard and tag filters are not supported when filtering for access.
   *
   * For example, the filter `query:abc,role:admin|customrole` matches members with the string `abc`
   * in their email or name, ignoring case, who also are either an `Owner` or `Admin` or have the
   * custom role `customrole`.
   *
   * ### Sorting members
   *
   * LaunchDarkly supports two fields for sorting: `displayName` and `lastSeen`:
   *
   * - `displayName` sorts by first + last name, using the member's email if no name is set.
   * - `lastSeen` sorts by the `_lastSeen` property. LaunchDarkly considers members that have never
   *   been seen or have no data the oldest.
   *
   * ### Expanding the members response
   * LaunchDarkly supports two fields for expanding the "List members" response. By default, these
   * fields are **not** included in the response.
   *
   * To expand the response, append the `expand` query parameter and add a comma-separated list with
   * any of the following fields:
   *
   * * `customRoles` includes a list of the roles that you have assigned to the member.
   * * `roleAttributes` includes a list of the role attributes that you have assigned to the member.
   *
   * For example, `expand=roleAttributes` includes `roleAttributes` field in the response.
   *
   * @returns Members collection response
   *
   * @throws {@link AccountMembers.GetMembersError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link LaunchDarklyRestApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  getMembers(
    request: AccountMembers.GetMembersRequest,
    options?: RequestOptions,
  ): ApiPromise<Members, AccountMembers.GetMembersError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v2/members"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [
          { name: "limit", value: request.limit, schema: s.optional(s.int()) },
          { name: "offset", value: request.offset, schema: s.optional(s.int()) },
          { name: "filter", value: request.filter, schema: s.optional(s.string()) },
          { name: "expand", value: request.expand, schema: s.optional(s.string()) },
          { name: "sort", value: request.sort, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: membersSchema },
        errorFactory: AccountMembers.GetMembersError,
      },
      options,
    );
  }

  /**
   * Modify an account member
   *
   * @remarks
   *
   * Update a single account member. Updating a member uses a [JSON
   * patch](https://datatracker.ietf.org/doc/html/rfc6902) representation of the desired changes. To
   * learn more, read [Updates](https://launchdarkly.com/docs/api#updates).
   *
   * To update fields in the account member object that are arrays, set the `path` to the name of
   * the field and then append `/<array index>`. Use `/0` to add to the beginning of the array. Use
   * `/-` to add to the end of the array. For example, to add a new custom role to a member, use the
   * following request body:
   *
   * ```
   *   [
   *     {
   *       "op": "add",
   *       "path": "/customRoles/0",
   *       "value": "some-role-id"
   *     }
   *   ]
   * ```
   *
   * You can update only an account member's role or custom role using a JSON patch. Members can
   * update their own names and email addresses though the LaunchDarkly UI.
   *
   * When SAML SSO or SCIM is enabled for the account, account members are managed in the Identity
   * Provider (IdP). Requests to update account members will succeed, but the IdP will override the
   * update shortly afterwards.
   *
   * @returns Member response
   *
   * @throws {@link AccountMembers.PatchMemberError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link LaunchDarklyRestApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  patchMember(
    request: AccountMembers.PatchMemberRequest,
    options?: RequestOptions,
  ): ApiPromise<Member, AccountMembers.PatchMemberError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default("/api/v2/members/{id}"),
        auth: this.#auth.apiKey,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: s.array(s.lazy(() => patchOperationSchema)) },
      },
      {
        success: { kind: "json", schema: memberSchema },
        errorFactory: AccountMembers.PatchMemberError,
      },
      options,
    );
  }

  /**
   * Modify account members
   *
   * @remarks
   * > ### Full use of this API resource is an Enterprise feature > > The ability to perform a
   * partial update to multiple members is available to customers on an Enterprise plan. If you are
   * on another plan, you can update members individually. To learn more, [read about our
   * pricing](https://launchdarkly.com/pricing/). To upgrade your plan, [contact
   * Sales](https://launchdarkly.com/contact-sales/).
   *
   * Perform a partial update to multiple members. Updating members uses the semantic patch format.
   *
   * To make a semantic patch request, you must append `domain-model=launchdarkly.semanticpatch` to
   * your `Content-Type` header. To learn more, read [Updates using semantic
   * patch](https://launchdarkly.com/docs/api#updates-using-semantic-patch).
   *
   * ### Instructions
   *
   * Semantic patch requests support the following `kind` instructions for updating members.
   *
   * <details> <summary>Click to expand instructions for <strong>updating members</strong></summary>
   *
   * #### replaceMembersRoles
   *
   * Replaces the roles of the specified members. This also removes all custom roles assigned to the
   * specified members.
   *
   * ##### Parameters
   *
   * - `value`: The new role. Must be a valid [base
   *   role](https://launchdarkly.com/docs/home/getting-started/vocabulary#base-role). To learn
   *   more, read [Roles](https://launchdarkly.com/docs/home/account/roles).
   * - `memberIDs`: List of member IDs.
   *
   * Here's an example:
   *
   * ```json
   * {
   *   "instructions": [{
   *     "kind": "replaceMembersRoles",
   *     "value": "reader",
   *     "memberIDs": [
   *       "1234a56b7c89d012345e678f",
   *       "507f1f77bcf86cd799439011"
   *     ]
   *   }]
   * }
   * ```
   *
   * #### replaceAllMembersRoles
   *
   * Replaces the roles of all members. This also removes all custom roles assigned to the specified
   * members.
   *
   * Members that match any of the filters are **excluded** from the update.
   *
   * ##### Parameters
   *
   * - `value`: The new role. Must be a valid [base
   *   role](https://launchdarkly.com/docs/home/getting-started/vocabulary#base-role). To learn
   *   more, read [Roles](https://launchdarkly.com/docs/home/account/roles).
   * - `filterLastSeen`: (Optional) A JSON object with one of the following formats:
   *   - `{"never": true}` - Members that have never been active, such as those who have not
   *     accepted their invitation to LaunchDarkly, or have not logged in after being provisioned
   *     via SCIM.
   *   - `{"noData": true}` - Members that have not been active since LaunchDarkly began recording
   *     last seen timestamps.
   *   - `{"before": 1608672063611}` - Members that have not been active since the provided value,
   *     which should be a timestamp in Unix epoch milliseconds.
   * - `filterQuery`: (Optional) A string that matches against the members' emails and names. It is
   *   not case sensitive.
   * - `filterRoles`: (Optional) A `|` separated list of roles and custom roles. For the purposes of
   *   this filtering, `Owner` counts as `Admin`.
   * - `filterTeamKey`: (Optional) A string that matches against the key of the team the members
   *   belong to. It is not case sensitive.
   * - `ignoredMemberIDs`: (Optional) A list of member IDs.
   *
   * Here's an example:
   *
   * ```json
   * {
   *   "instructions": [{
   *     "kind": "replaceAllMembersRoles",
   *     "value": "reader",
   *     "filterLastSeen": { "never": true }
   *   }]
   * }
   * ```
   *
   * #### replaceMembersCustomRoles
   *
   * Replaces the custom roles of the specified members.
   *
   * ##### Parameters
   *
   * - `values`: List of new custom roles. Must be a valid custom role key or ID.
   * - `memberIDs`: List of member IDs.
   *
   * Here's an example:
   *
   * ```json
   * {
   *   "instructions": [{
   *     "kind": "replaceMembersCustomRoles",
   *     "values": [ "example-custom-role" ],
   *     "memberIDs": [
   *       "1234a56b7c89d012345e678f",
   *       "507f1f77bcf86cd799439011"
   *     ]
   *   }]
   * }
   * ```
   *
   * #### replaceAllMembersCustomRoles
   *
   * Replaces the custom roles of all members. Members that match any of the filters are
   * **excluded** from the update.
   *
   * ##### Parameters
   *
   * - `values`: List of new roles. Must be a valid custom role key or ID.
   * - `filterLastSeen`: (Optional) A JSON object with one of the following formats:
   *   - `{"never": true}` - Members that have never been active, such as those who have not
   *     accepted their invitation to LaunchDarkly, or have not logged in after being provisioned
   *     via SCIM.
   *   - `{"noData": true}` - Members that have not been active since LaunchDarkly began recording
   *     last seen timestamps.
   *   - `{"before": 1608672063611}` - Members that have not been active since the provided value,
   *     which should be a timestamp in Unix epoch milliseconds.
   * - `filterQuery`: (Optional) A string that matches against the members' emails and names. It is
   *   not case sensitive.
   * - `filterRoles`: (Optional) A `|` separated list of roles and custom roles. For the purposes of
   *   this filtering, `Owner` counts as `Admin`.
   * - `filterTeamKey`: (Optional) A string that matches against the key of the team the members
   *   belong to. It is not case sensitive.
   * - `ignoredMemberIDs`: (Optional) A list of member IDs.
   *
   * Here's an example:
   *
   * ```json
   * {
   *   "instructions": [{
   *     "kind": "replaceAllMembersCustomRoles",
   *     "values": [ "example-custom-role" ],
   *     "filterLastSeen": { "never": true }
   *   }]
   * }
   * ```
   *
   * #### replaceMembersRoleAttributes
   *
   * Replaces the role attributes of the specified members.
   *
   * ##### Parameters
   *
   * - `value`: Map of role attribute keys to lists of values.
   * - `memberIDs`: List of member IDs.
   *
   * Here's an example:
   *
   * ```json
   * {
   *   "instructions": [{
   *     "kind": "replaceMembersRoleAttributes",
   *     "value": {
   *       "myRoleProjectKey": ["mobile", "web"],
   *       "myRoleEnvironmentKey": ["production"]
   *     },
   *     "memberIDs": [
   *       "1234a56b7c89d012345e678f",
   *       "507f1f77bcf86cd799439011"
   *     ]
   *   }]
   * }
   * ```
   *
   * </details>
   *
   * @returns Members response
   *
   * @throws {@link AccountMembers.PatchMembersError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link LaunchDarklyRestApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  patchMembers(
    request: AccountMembers.PatchMembersRequest,
    options?: RequestOptions,
  ): ApiPromise<BulkEditMembersRep, AccountMembers.PatchMembersError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default("/api/v2/members"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: membersPatchInputSchema },
      },
      {
        success: { kind: "json", schema: bulkEditMembersRepSchema },
        errorFactory: AccountMembers.PatchMembersError,
      },
      options,
    );
  }

  /**
   * Add a member to teams
   *
   * @remarks
   * Add one member to one or more teams.
   *
   * @returns Member response
   *
   * @throws {@link AccountMembers.PostMemberTeamsError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link LaunchDarklyRestApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  postMemberTeams(
    request: AccountMembers.PostMemberTeamsRequest,
    options?: RequestOptions,
  ): ApiPromise<Member, AccountMembers.PostMemberTeamsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v2/members/{id}/teams"),
        auth: this.#auth.apiKey,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: memberTeamsPostInputSchema },
      },
      {
        success: { kind: "json", schema: memberSchema },
        errorFactory: AccountMembers.PostMemberTeamsError,
      },
      options,
    );
  }

  /**
   * Invite new members
   *
   * @remarks
   * Invite one or more new members to join an account. Each member is sent an invitation. Members
   * with Admin or Owner roles may create new members, as well as anyone with a `createMember`
   * permission for "member/\*". If a member cannot be invited, the entire request is rejected and
   * no members are invited from that request.
   *
   * Each member _must_ have an `email` field and either a `role` or a `customRoles` field. If any
   * of the fields are not populated correctly, the request is rejected with the reason specified in
   * the "message" field of the response.
   *
   * Valid base role names that you can provide for the `role` field include `reader`, `writer`,
   * `admin`, `owner/admin`, and `no_access`. To learn more about base roles, read [Organization
   * roles](https://launchdarkly.com/docs/home/account/roles/organization-roles).
   *
   * If you are using the `customRoles` field instead, you can provide the key for any role that you
   * have created, or for any preset [organization
   * role](https://launchdarkly.com/docs/home/account/roles/organization-roles) or [project
   * role](https://launchdarkly.com/docs/home/account/roles/project-roles) provided by LaunchDarkly.
   * Some preset roles additionally require that you specify `roleAttributes`. To learn more, read
   * [Using role scope](https://launchdarkly.com/docs/home/account/roles/role-scope).
   *
   * Requests to create account members will not work if SCIM is enabled for the account.
   *
   * _No more than 50 members may be created per request._
   *
   * A request may also fail because of conflicts with existing members. These conflicts are
   * reported using the additional `code` and `invalid_emails` response fields with the following
   * possible values for `code`:
   *
   * - **email_already_exists_in_account**: A member with this email address already exists in this
   *   account.
   * - **email_taken_in_different_account**: A member with this email address exists in another
   *   account.
   * - **duplicate_email**s: This request contains two or more members with the same email address.
   *
   * A request that fails for one of the above reasons returns an HTTP response code of 400 (Bad
   * Request).
   *
   * @returns Member collection response
   *
   * @throws {@link AccountMembers.PostMembersError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link LaunchDarklyRestApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  postMembers(
    request: AccountMembers.PostMembersRequest,
    options?: RequestOptions,
  ): ApiPromise<Members, AccountMembers.PostMembersError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v2/members"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: s.array(s.lazy(() => newMemberFormSchema)) },
      },
      {
        success: { kind: "json", schema: membersSchema },
        errorFactory: AccountMembers.PostMembersError,
      },
      options,
    );
  }
}

export namespace AccountMembers {
  export type DeleteMemberRequest = {
    /** The member ID */
    id: string;
  };

  export class DeleteMemberError extends ApiError {
    declare readonly payload:
      | Declared<"unauthorizedErrorRep", UnauthorizedErrorRep>
      | Declared<"forbiddenErrorRep", ForbiddenErrorRep>
      | Declared<"notFoundErrorRep", NotFoundErrorRep>
      | Declared<"statusConflictErrorRep", StatusConflictErrorRep>
      | Declared<"rateLimitedErrorRep", RateLimitedErrorRep>
      | Undeclared;

    static readonly errors: ErrorDecoders<DeleteMemberError> = [
      { on: 401, kind: "unauthorizedErrorRep", decode: { kind: "json", schema: unauthorizedErrorRepSchema } },
      { on: 403, kind: "forbiddenErrorRep", decode: { kind: "json", schema: forbiddenErrorRepSchema } },
      { on: 404, kind: "notFoundErrorRep", decode: { kind: "json", schema: notFoundErrorRepSchema } },
      {
        on: 409,
        kind: "statusConflictErrorRep",
        decode: { kind: "json", schema: statusConflictErrorRepSchema },
      },
      { on: 429, kind: "rateLimitedErrorRep", decode: { kind: "json", schema: rateLimitedErrorRepSchema } },
    ];
  }

  export type GetMemberRequest = {
    /** The member ID */
    id: string;
    /**
     * A comma-separated list of properties that can reveal additional information in the response.
     */
    expand?: string;
  };

  export class GetMemberError extends ApiError {
    declare readonly payload:
      | Declared<"unauthorizedErrorRep", UnauthorizedErrorRep>
      | Declared<"forbiddenErrorRep", ForbiddenErrorRep>
      | Declared<"notFoundErrorRep", NotFoundErrorRep>
      | Declared<"rateLimitedErrorRep", RateLimitedErrorRep>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetMemberError> = [
      { on: 401, kind: "unauthorizedErrorRep", decode: { kind: "json", schema: unauthorizedErrorRepSchema } },
      { on: 403, kind: "forbiddenErrorRep", decode: { kind: "json", schema: forbiddenErrorRepSchema } },
      { on: 404, kind: "notFoundErrorRep", decode: { kind: "json", schema: notFoundErrorRepSchema } },
      { on: 429, kind: "rateLimitedErrorRep", decode: { kind: "json", schema: rateLimitedErrorRepSchema } },
    ];
  }

  export type GetMembersRequest = {
    /** The number of members to return in the response. Defaults to 20. */
    limit?: number;
    /**
     * Where to start in the list. This is for use with pagination. For example, an offset of 10
     * skips the first ten items and then returns the next items in the list, up to the query
     * `limit`.
     */
    offset?: number;
    /**
     * A comma-separated list of filters. Each filter is of the form `field:value`. Supported fields
     * are explained above.
     */
    filter?: string;
    /**
     * A comma-separated list of properties that can reveal additional information in the response.
     */
    expand?: string;
    /**
     * A comma-separated list of fields to sort by. Fields prefixed by a dash ( - ) sort in
     * descending order.
     */
    sort?: string;
  };

  export class GetMembersError extends ApiError {
    declare readonly payload:
      | Declared<"unauthorizedErrorRep", UnauthorizedErrorRep>
      | Declared<"forbiddenErrorRep", ForbiddenErrorRep>
      | Declared<"notFoundErrorRep", NotFoundErrorRep>
      | Declared<"rateLimitedErrorRep", RateLimitedErrorRep>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetMembersError> = [
      { on: 401, kind: "unauthorizedErrorRep", decode: { kind: "json", schema: unauthorizedErrorRepSchema } },
      { on: 403, kind: "forbiddenErrorRep", decode: { kind: "json", schema: forbiddenErrorRepSchema } },
      { on: 404, kind: "notFoundErrorRep", decode: { kind: "json", schema: notFoundErrorRepSchema } },
      { on: 429, kind: "rateLimitedErrorRep", decode: { kind: "json", schema: rateLimitedErrorRepSchema } },
    ];
  }

  export type PatchMemberRequest = {
    /** The member ID */
    id: string;
    body: PatchOperation[];
  };

  export class PatchMemberError extends ApiError {
    declare readonly payload:
      | Declared<"invalidRequestErrorRep", InvalidRequestErrorRep>
      | Declared<"unauthorizedErrorRep", UnauthorizedErrorRep>
      | Declared<"forbiddenErrorRep", ForbiddenErrorRep>
      | Declared<"notFoundErrorRep", NotFoundErrorRep>
      | Declared<"statusConflictErrorRep", StatusConflictErrorRep>
      | Declared<"rateLimitedErrorRep", RateLimitedErrorRep>
      | Undeclared;

    static readonly errors: ErrorDecoders<PatchMemberError> = [
      {
        on: 400,
        kind: "invalidRequestErrorRep",
        decode: { kind: "json", schema: invalidRequestErrorRepSchema },
      },
      { on: 401, kind: "unauthorizedErrorRep", decode: { kind: "json", schema: unauthorizedErrorRepSchema } },
      { on: 403, kind: "forbiddenErrorRep", decode: { kind: "json", schema: forbiddenErrorRepSchema } },
      { on: 404, kind: "notFoundErrorRep", decode: { kind: "json", schema: notFoundErrorRepSchema } },
      {
        on: 409,
        kind: "statusConflictErrorRep",
        decode: { kind: "json", schema: statusConflictErrorRepSchema },
      },
      { on: 429, kind: "rateLimitedErrorRep", decode: { kind: "json", schema: rateLimitedErrorRepSchema } },
    ];
  }

  export type PatchMembersRequest = {
    body: MembersPatchInput;
  };

  export class PatchMembersError extends ApiError {
    declare readonly payload:
      | Declared<"invalidRequestErrorRep", InvalidRequestErrorRep>
      | Declared<"unauthorizedErrorRep", UnauthorizedErrorRep>
      | Declared<"forbiddenErrorRep", ForbiddenErrorRep>
      | Declared<"statusConflictErrorRep", StatusConflictErrorRep>
      | Declared<"rateLimitedErrorRep", RateLimitedErrorRep>
      | Undeclared;

    static readonly errors: ErrorDecoders<PatchMembersError> = [
      {
        on: 400,
        kind: "invalidRequestErrorRep",
        decode: { kind: "json", schema: invalidRequestErrorRepSchema },
      },
      { on: 401, kind: "unauthorizedErrorRep", decode: { kind: "json", schema: unauthorizedErrorRepSchema } },
      { on: 403, kind: "forbiddenErrorRep", decode: { kind: "json", schema: forbiddenErrorRepSchema } },
      {
        on: 409,
        kind: "statusConflictErrorRep",
        decode: { kind: "json", schema: statusConflictErrorRepSchema },
      },
      { on: 429, kind: "rateLimitedErrorRep", decode: { kind: "json", schema: rateLimitedErrorRepSchema } },
    ];
  }

  export type PostMemberTeamsRequest = {
    /** The member ID */
    id: string;
    body: MemberTeamsPostInput;
  };

  export class PostMemberTeamsError extends ApiError {
    declare readonly payload:
      | Declared<"invalidRequestErrorRep", InvalidRequestErrorRep>
      | Declared<"unauthorizedErrorRep", UnauthorizedErrorRep>
      | Declared<"forbiddenErrorRep", ForbiddenErrorRep>
      | Declared<"notFoundErrorRep", NotFoundErrorRep>
      | Declared<"statusConflictErrorRep", StatusConflictErrorRep>
      | Declared<"rateLimitedErrorRep", RateLimitedErrorRep>
      | Undeclared;

    static readonly errors: ErrorDecoders<PostMemberTeamsError> = [
      {
        on: 400,
        kind: "invalidRequestErrorRep",
        decode: { kind: "json", schema: invalidRequestErrorRepSchema },
      },
      { on: 401, kind: "unauthorizedErrorRep", decode: { kind: "json", schema: unauthorizedErrorRepSchema } },
      { on: 403, kind: "forbiddenErrorRep", decode: { kind: "json", schema: forbiddenErrorRepSchema } },
      { on: 404, kind: "notFoundErrorRep", decode: { kind: "json", schema: notFoundErrorRepSchema } },
      {
        on: 409,
        kind: "statusConflictErrorRep",
        decode: { kind: "json", schema: statusConflictErrorRepSchema },
      },
      { on: 429, kind: "rateLimitedErrorRep", decode: { kind: "json", schema: rateLimitedErrorRepSchema } },
    ];
  }

  export type PostMembersRequest = {
    body: NewMemberForm[];
  };

  export class PostMembersError extends ApiError {
    declare readonly payload:
      | Declared<"invalidRequestErrorRep", InvalidRequestErrorRep>
      | Declared<"unauthorizedErrorRep", UnauthorizedErrorRep>
      | Declared<"forbiddenErrorRep", ForbiddenErrorRep>
      | Declared<"statusConflictErrorRep", StatusConflictErrorRep>
      | Declared<"rateLimitedErrorRep", RateLimitedErrorRep>
      | Undeclared;

    static readonly errors: ErrorDecoders<PostMembersError> = [
      {
        on: 400,
        kind: "invalidRequestErrorRep",
        decode: { kind: "json", schema: invalidRequestErrorRepSchema },
      },
      { on: 401, kind: "unauthorizedErrorRep", decode: { kind: "json", schema: unauthorizedErrorRepSchema } },
      { on: 403, kind: "forbiddenErrorRep", decode: { kind: "json", schema: forbiddenErrorRepSchema } },
      {
        on: 409,
        kind: "statusConflictErrorRep",
        decode: { kind: "json", schema: statusConflictErrorRepSchema },
      },
      { on: 429, kind: "rateLimitedErrorRep", decode: { kind: "json", schema: rateLimitedErrorRepSchema } },
    ];
  }
}
