import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { bulkEditTeamsRepSchema, type BulkEditTeamsRep } from "../models/bulk-edit-teams-rep.js";
import { forbiddenErrorRepSchema, type ForbiddenErrorRep } from "../models/forbidden-error-rep.js";
import {
  invalidRequestErrorRepSchema,
  type InvalidRequestErrorRep,
} from "../models/invalid-request-error-rep.js";
import { rateLimitedErrorRepSchema, type RateLimitedErrorRep } from "../models/rate-limited-error-rep.js";
import {
  statusConflictErrorRepSchema,
  type StatusConflictErrorRep,
} from "../models/status-conflict-error-rep.js";
import { teamsPatchInputSchema, type TeamsPatchInput } from "../models/teams-patch-input.js";
import { unauthorizedErrorRepSchema, type UnauthorizedErrorRep } from "../models/unauthorized-error-rep.js";
import type { Servers } from "../servers.js";

/**
 * > ### This feature is in beta > > To use this feature, pass in a header including the
 * `LD-API-Version` key with value set to `beta`. Use this header with each call. To learn more,
 * read [Beta resources](https://launchdarkly.com/docs/api#beta-resources). > > Resources that are
 * in beta are still undergoing testing and development. They may change without notice, including
 * becoming backwards incompatible.
 *
 * > ### Teams is an Enterprise feature > > Teams is available to customers on an Enterprise plan.
 * To learn more, [read about our pricing](https://launchdarkly.com/pricing/). To upgrade your plan,
 * [contact Sales](https://launchdarkly.com/contact-sales/).
 *
 * A team is a group of members in your LaunchDarkly account. A team can have maintainers who are
 * able to add and remove team members. It also can have custom roles assigned to it that allows
 * shared access to those roles for all team members. To learn more, read
 * [Teams](https://launchdarkly.com/docs/home/account/teams).
 */
export class TeamsBeta {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Update teams
   *
   * @remarks
   * Perform a partial update to multiple teams. Updating teams uses the semantic patch format.
   *
   * To make a semantic patch request, you must append `domain-model=launchdarkly.semanticpatch` to
   * your `Content-Type` header. To learn more, read [Updates using semantic
   * patch](https://launchdarkly.com/docs/api#updates-using-semantic-patch).
   *
   * ### Instructions
   *
   * Semantic patch requests support the following `kind` instructions for updating teams.
   *
   * <details> <summary>Click to expand instructions for <strong>updating teams</strong></summary>
   *
   * #### addMembersToTeams
   *
   * Add the members to teams.
   *
   * ##### Parameters
   *
   * - `memberIDs`: List of member IDs to add.
   * - `teamKeys`: List of teams to update.
   *
   * Here's an example:
   *
   * ```json
   * {
   *   "instructions": [{
   *     "kind": "addMembersToTeams",
   *     "memberIDs": [
   *       "1234a56b7c89d012345e678f"
   *     ],
   *     "teamKeys": [
   *       "example-team-1",
   *       "example-team-2"
   *     ]
   *   }]
   * }
   * ```
   *
   * #### addAllMembersToTeams
   *
   * Add all members to the team. Members that match any of the filters are **excluded** from the
   * update.
   *
   * ##### Parameters
   *
   * - `teamKeys`: List of teams to update.
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
   *     "kind": "addAllMembersToTeams",
   *     "teamKeys": [
   *       "example-team-1",
   *       "example-team-2"
   *     ],
   *     "filterLastSeen": { "never": true }
   *   }]
   * }
   * ```
   *
   * </details>
   *
   * @returns Teams response
   *
   * @throws {@link TeamsBeta.PatchTeamsError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link LaunchDarklyRestApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  patchTeams(
    request: TeamsBeta.PatchTeamsRequest,
    options?: RequestOptions,
  ): ApiPromise<BulkEditTeamsRep, TeamsBeta.PatchTeamsError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default("/api/v2/teams"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: teamsPatchInputSchema },
      },
      {
        success: { kind: "json", schema: bulkEditTeamsRepSchema },
        errorFactory: TeamsBeta.PatchTeamsError,
      },
      options,
    );
  }
}

export namespace TeamsBeta {
  export type PatchTeamsRequest = {
    body: TeamsPatchInput;
  };

  export class PatchTeamsError extends ApiError {
    declare readonly payload:
      | Declared<"invalidRequestErrorRep", InvalidRequestErrorRep>
      | Declared<"unauthorizedErrorRep", UnauthorizedErrorRep>
      | Declared<"forbiddenErrorRep", ForbiddenErrorRep>
      | Declared<"statusConflictErrorRep", StatusConflictErrorRep>
      | Declared<"rateLimitedErrorRep", RateLimitedErrorRep>
      | Undeclared;

    static readonly errors: ErrorDecoders<PatchTeamsError> = [
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
