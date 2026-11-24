<!-- Generated file — do not edit; regenerated with the SDK. -->

# Teams — operations

Accessor: `client.teams` · Source: `src/resources/teams.ts` · 7 operations · Request and error types: namespace `Teams`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `asana`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### addUserForTeam

- **Signature**: `addUserForTeam(request: Teams.AddUserForTeamRequest, options?: RequestOptions): ApiPromise<TeamsAddUserResponse, Teams.AddUserForTeamError>`
- **Wire**: `POST /teams/{team_gid}/addUser`
- **Auth**: any of `personalAccessToken`, `oauth2` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `TeamsAddUserResponse`
- **Error**: `AsanaError` with `kind: "api"`, an instance of `Teams.AddUserForTeamError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"errorResponse5"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Teams.AddUserForTeamRequest` (4):

| Field | Channel | Wire | Type | Req | Style |
| --- | --- | --- | --- | --- | --- |
| `teamGid` | `path` | `team_gid` | `string` | yes | — |
| `optPretty` | `query` | `opt_pretty` | `boolean` | no | — |
| `optFields` | `query` | `opt_fields` | `string[]` | no | `csv` |
| `body` | `body` | — | `TeamsAddUserRequest` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `TeamsAddUserRequest` | `teamsAddUserRequestSchema` | `src/models/teams-add-user-request.ts` |
| `TeamsAddUserResponse` | `teamsAddUserResponseSchema` | `src/models/teams-add-user-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### createTeam

- **Signature**: `createTeam(request: Teams.CreateTeamRequest, options?: RequestOptions): ApiPromise<TeamsResponse, Teams.CreateTeamError>`
- **Wire**: `POST /teams`
- **Auth**: any of `personalAccessToken`, `oauth2` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `TeamsResponse`
- **Error**: `AsanaError` with `kind: "api"`, an instance of `Teams.CreateTeamError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"errorResponse5"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Teams.CreateTeamRequest` (5):

| Field | Channel | Wire | Type | Req | Style |
| --- | --- | --- | --- | --- | --- |
| `optPretty` | `query` | `opt_pretty` | `boolean` | no | — |
| `optFields` | `query` | `opt_fields` | `string[]` | no | `csv` |
| `limit` | `query` | — | `number` | no | — |
| `offset` | `query` | — | `string` | no | — |
| `body` | `body` | — | `TeamsRequest` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `TeamsRequest` | `teamsRequestSchema` | `src/models/teams-request.ts` |
| `TeamsResponse` | `teamsResponseSchema` | `src/models/teams-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### getTeam

- **Signature**: `getTeam(request: Teams.GetTeamRequest, options?: RequestOptions): ApiPromise<TeamsResponse, Teams.GetTeamError>`
- **Wire**: `GET /teams/{team_gid}`
- **Auth**: any of `personalAccessToken`, `oauth2` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `TeamsResponse`
- **Error**: `AsanaError` with `kind: "api"`, an instance of `Teams.GetTeamError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"errorResponse5"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Teams.GetTeamRequest` (5):

| Field | Channel | Wire | Type | Req | Style |
| --- | --- | --- | --- | --- | --- |
| `teamGid` | `path` | `team_gid` | `string` | yes | — |
| `optPretty` | `query` | `opt_pretty` | `boolean` | no | — |
| `optFields` | `query` | `opt_fields` | `string[]` | no | `csv` |
| `limit` | `query` | — | `number` | no | — |
| `offset` | `query` | — | `string` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `TeamsResponse` | `teamsResponseSchema` | `src/models/teams-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### getTeamsForUser

- **Signature**: `getTeamsForUser(request: Teams.GetTeamsForUserRequest, options?: RequestOptions): ApiPromise<UsersTeamsResponse, Teams.GetTeamsForUserError>`
- **Wire**: `GET /users/{user_gid}/teams`
- **Auth**: any of `personalAccessToken`, `oauth2` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `UsersTeamsResponse`
- **Error**: `AsanaError` with `kind: "api"`, an instance of `Teams.GetTeamsForUserError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"errorResponse5"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Teams.GetTeamsForUserRequest` (6):

| Field | Channel | Wire | Type | Req | Style |
| --- | --- | --- | --- | --- | --- |
| `userGid` | `path` | `user_gid` | `string` | yes | — |
| `organization` | `query` | — | `string` | yes | — |
| `optPretty` | `query` | `opt_pretty` | `boolean` | no | — |
| `optFields` | `query` | `opt_fields` | `string[]` | no | `csv` |
| `limit` | `query` | — | `number` | no | — |
| `offset` | `query` | — | `string` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `UsersTeamsResponse` | `usersTeamsResponseSchema` | `src/models/users-teams-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### getTeamsForWorkspace

- **Signature**: `getTeamsForWorkspace(request: Teams.GetTeamsForWorkspaceRequest, options?: RequestOptions): ApiPromise<WorkspacesTeamsResponse, Teams.GetTeamsForWorkspaceError>`
- **Wire**: `GET /workspaces/{workspace_gid}/teams`
- **Auth**: any of `personalAccessToken`, `oauth2` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `WorkspacesTeamsResponse`
- **Error**: `AsanaError` with `kind: "api"`, an instance of `Teams.GetTeamsForWorkspaceError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"errorResponse5"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Teams.GetTeamsForWorkspaceRequest` (5):

| Field | Channel | Wire | Type | Req | Style |
| --- | --- | --- | --- | --- | --- |
| `workspaceGid` | `path` | `workspace_gid` | `string` | yes | — |
| `optPretty` | `query` | `opt_pretty` | `boolean` | no | — |
| `optFields` | `query` | `opt_fields` | `string[]` | no | `csv` |
| `limit` | `query` | — | `number` | no | — |
| `offset` | `query` | — | `string` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `WorkspacesTeamsResponse` | `workspacesTeamsResponseSchema` | `src/models/workspaces-teams-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### removeUserForTeam

- **Signature**: `removeUserForTeam(request: Teams.RemoveUserForTeamRequest, options?: RequestOptions): ApiPromise<TeamsRemoveUserResponse, Teams.RemoveUserForTeamError>`
- **Wire**: `POST /teams/{team_gid}/removeUser`
- **Auth**: any of `personalAccessToken`, `oauth2` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `TeamsRemoveUserResponse`
- **Error**: `AsanaError` with `kind: "api"`, an instance of `Teams.RemoveUserForTeamError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"errorResponse5"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Teams.RemoveUserForTeamRequest` (4):

| Field | Channel | Wire | Type | Req | Style |
| --- | --- | --- | --- | --- | --- |
| `teamGid` | `path` | `team_gid` | `string` | yes | — |
| `optPretty` | `query` | `opt_pretty` | `boolean` | no | — |
| `optFields` | `query` | `opt_fields` | `string[]` | no | `csv` |
| `body` | `body` | — | `TeamsRemoveUserRequest` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `TeamsRemoveUserRequest` | `teamsRemoveUserRequestSchema` | `src/models/teams-remove-user-request.ts` |
| `TeamsRemoveUserResponse` | `teamsRemoveUserResponseSchema` | `src/models/teams-remove-user-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### updateTeam

- **Signature**: `updateTeam(request: Teams.UpdateTeamRequest, options?: RequestOptions): ApiPromise<TeamsResponse, Teams.UpdateTeamError>`
- **Wire**: `PUT /teams`
- **Auth**: any of `personalAccessToken`, `oauth2` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `TeamsResponse`
- **Error**: `AsanaError` with `kind: "api"`, an instance of `Teams.UpdateTeamError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"errorResponse5"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Teams.UpdateTeamRequest` (5):

| Field | Channel | Wire | Type | Req | Style |
| --- | --- | --- | --- | --- | --- |
| `optPretty` | `query` | `opt_pretty` | `boolean` | no | — |
| `optFields` | `query` | `opt_fields` | `string[]` | no | `csv` |
| `limit` | `query` | — | `number` | no | — |
| `offset` | `query` | — | `string` | no | — |
| `body` | `body` | — | `TeamsRequest` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `TeamsRequest` | `teamsRequestSchema` | `src/models/teams-request.ts` |
| `TeamsResponse` | `teamsResponseSchema` | `src/models/teams-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

