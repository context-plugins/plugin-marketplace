<!-- Generated file — do not edit; regenerated with the SDK. -->

# TeamMemberships — operations

Accessor: `client.teamMemberships` · Source: `src/resources/team-memberships.ts` · 4 operations · Request and error types: namespace `TeamMemberships`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `asana`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getTeamMembership

- **Signature**: `getTeamMembership(request: TeamMemberships.GetTeamMembershipRequest, options?: RequestOptions): ApiPromise<TeamMembershipsResponse, TeamMemberships.GetTeamMembershipError>`
- **Wire**: `GET /team_memberships/{team_membership_gid}`
- **Auth**: any of `personalAccessToken`, `oauth2` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `TeamMembershipsResponse`
- **Error**: `AsanaError` with `kind: "api"`, an instance of `TeamMemberships.GetTeamMembershipError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"errorResponse5"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `TeamMemberships.GetTeamMembershipRequest` (3):

| Field | Channel | Wire | Type | Req | Style |
| --- | --- | --- | --- | --- | --- |
| `teamMembershipGid` | `path` | `team_membership_gid` | `string` | yes | — |
| `optPretty` | `query` | `opt_pretty` | `boolean` | no | — |
| `optFields` | `query` | `opt_fields` | `string[]` | no | `csv` |

| Type | Schema value | Source |
| --- | --- | --- |
| `TeamMembershipsResponse` | `teamMembershipsResponseSchema` | `src/models/team-memberships-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### getTeamMemberships

- **Signature**: `getTeamMemberships(request?: TeamMemberships.GetTeamMembershipsRequest, options?: RequestOptions): ApiPromise<TeamMembershipsResponse1, TeamMemberships.GetTeamMembershipsError>`
- **Wire**: `GET /team_memberships`
- **Auth**: any of `personalAccessToken`, `oauth2` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `TeamMembershipsResponse1`
- **Error**: `AsanaError` with `kind: "api"`, an instance of `TeamMemberships.GetTeamMembershipsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"errorResponse5"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `TeamMemberships.GetTeamMembershipsRequest` (7):

| Field | Channel | Wire | Type | Req | Style |
| --- | --- | --- | --- | --- | --- |
| `optPretty` | `query` | `opt_pretty` | `boolean` | no | — |
| `optFields` | `query` | `opt_fields` | `string[]` | no | `csv` |
| `limit` | `query` | — | `number` | no | — |
| `offset` | `query` | — | `string` | no | — |
| `team` | `query` | — | `string` | no | — |
| `user` | `query` | — | `string` | no | — |
| `workspace` | `query` | — | `string` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `TeamMembershipsResponse1` | `teamMembershipsResponse1Schema` | `src/models/team-memberships-response1.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### getTeamMembershipsForTeam

- **Signature**: `getTeamMembershipsForTeam(request: TeamMemberships.GetTeamMembershipsForTeamRequest, options?: RequestOptions): ApiPromise<TeamsTeamMembershipsResponse, TeamMemberships.GetTeamMembershipsForTeamError>`
- **Wire**: `GET /teams/{team_gid}/team_memberships`
- **Auth**: any of `personalAccessToken`, `oauth2` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `TeamsTeamMembershipsResponse`
- **Error**: `AsanaError` with `kind: "api"`, an instance of `TeamMemberships.GetTeamMembershipsForTeamError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"errorResponse5"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `TeamMemberships.GetTeamMembershipsForTeamRequest` (5):

| Field | Channel | Wire | Type | Req | Style |
| --- | --- | --- | --- | --- | --- |
| `teamGid` | `path` | `team_gid` | `string` | yes | — |
| `optPretty` | `query` | `opt_pretty` | `boolean` | no | — |
| `optFields` | `query` | `opt_fields` | `string[]` | no | `csv` |
| `limit` | `query` | — | `number` | no | — |
| `offset` | `query` | — | `string` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `TeamsTeamMembershipsResponse` | `teamsTeamMembershipsResponseSchema` | `src/models/teams-team-memberships-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### getTeamMembershipsForUser

- **Signature**: `getTeamMembershipsForUser(request: TeamMemberships.GetTeamMembershipsForUserRequest, options?: RequestOptions): ApiPromise<UsersTeamMembershipsResponse, TeamMemberships.GetTeamMembershipsForUserError>`
- **Wire**: `GET /users/{user_gid}/team_memberships`
- **Auth**: any of `personalAccessToken`, `oauth2` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `UsersTeamMembershipsResponse`
- **Error**: `AsanaError` with `kind: "api"`, an instance of `TeamMemberships.GetTeamMembershipsForUserError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"errorResponse5"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `TeamMemberships.GetTeamMembershipsForUserRequest` (6):

| Field | Channel | Wire | Type | Req | Style |
| --- | --- | --- | --- | --- | --- |
| `userGid` | `path` | `user_gid` | `string` | yes | — |
| `workspace` | `query` | — | `string` | yes | — |
| `optPretty` | `query` | `opt_pretty` | `boolean` | no | — |
| `optFields` | `query` | `opt_fields` | `string[]` | no | `csv` |
| `limit` | `query` | — | `number` | no | — |
| `offset` | `query` | — | `string` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `UsersTeamMembershipsResponse` | `usersTeamMembershipsResponseSchema` | `src/models/users-team-memberships-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

