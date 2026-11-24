<!-- Generated file — do not edit; regenerated with the SDK. -->

# Users — operations

Accessor: `client.users` · Source: `src/resources/users.ts` · 5 operations · Request and error types: namespace `Users`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `asana`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getFavoritesForUser

- **Signature**: `getFavoritesForUser(request: Users.GetFavoritesForUserRequest, options?: RequestOptions): ApiPromise<UsersFavoritesResponse, Users.GetFavoritesForUserError>`
- **Wire**: `GET /users/{user_gid}/favorites`
- **Auth**: any of `personalAccessToken`, `oauth2` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `UsersFavoritesResponse`
- **Error**: `AsanaError` with `kind: "api"`, an instance of `Users.GetFavoritesForUserError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"errorResponse5"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Users.GetFavoritesForUserRequest` (5):

| Field | Channel | Wire | Type | Req | Default | Style |
| --- | --- | --- | --- | --- | --- | --- |
| `userGid` | `path` | `user_gid` | `string` | yes | — | — |
| `resourceType` | `query` | `resource_type` | `ResourceTypeAsanaUsersApi` | no | `ResourceTypeAsanaUsersApi.Project` | — |
| `workspace` | `query` | — | `string` | yes | — | — |
| `optPretty` | `query` | `opt_pretty` | `boolean` | no | — | — |
| `optFields` | `query` | `opt_fields` | `string[]` | no | — | `csv` |

| Type | Schema value | Source |
| --- | --- | --- |
| `ResourceTypeAsanaUsersApi` | `resourceTypeAsanaUsersApiSchema` | `src/models/resource-type-asana-users-api.ts` |
| `UsersFavoritesResponse` | `usersFavoritesResponseSchema` | `src/models/users-favorites-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### getUser

- **Signature**: `getUser(request: Users.GetUserRequest, options?: RequestOptions): ApiPromise<UsersResponse1, Users.GetUserError>`
- **Wire**: `GET /users/{user_gid}`
- **Auth**: any of `personalAccessToken`, `oauth2` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `UsersResponse1`
- **Error**: `AsanaError` with `kind: "api"`, an instance of `Users.GetUserError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"errorResponse5"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Users.GetUserRequest` (3):

| Field | Channel | Wire | Type | Req | Style |
| --- | --- | --- | --- | --- | --- |
| `userGid` | `path` | `user_gid` | `string` | yes | — |
| `optPretty` | `query` | `opt_pretty` | `boolean` | no | — |
| `optFields` | `query` | `opt_fields` | `string[]` | no | `csv` |

| Type | Schema value | Source |
| --- | --- | --- |
| `UsersResponse1` | `usersResponse1Schema` | `src/models/users-response1.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### getUsers

- **Signature**: `getUsers(request?: Users.GetUsersRequest, options?: RequestOptions): ApiPromise<UsersResponse, Users.GetUsersError>`
- **Wire**: `GET /users`
- **Auth**: any of `personalAccessToken`, `oauth2` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `UsersResponse`
- **Error**: `AsanaError` with `kind: "api"`, an instance of `Users.GetUsersError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"errorResponse5"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Users.GetUsersRequest` (6):

| Field | Channel | Wire | Type | Req | Style |
| --- | --- | --- | --- | --- | --- |
| `workspace` | `query` | — | `string` | no | — |
| `team` | `query` | — | `string` | no | — |
| `optPretty` | `query` | `opt_pretty` | `boolean` | no | — |
| `optFields` | `query` | `opt_fields` | `string[]` | no | `csv` |
| `limit` | `query` | — | `number` | no | — |
| `offset` | `query` | — | `string` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `UsersResponse` | `usersResponseSchema` | `src/models/users-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### getUsersForTeam

- **Signature**: `getUsersForTeam(request: Users.GetUsersForTeamRequest, options?: RequestOptions): ApiPromise<TeamsUsersResponse, Users.GetUsersForTeamError>`
- **Wire**: `GET /teams/{team_gid}/users`
- **Auth**: any of `personalAccessToken`, `oauth2` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `TeamsUsersResponse`
- **Error**: `AsanaError` with `kind: "api"`, an instance of `Users.GetUsersForTeamError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"errorResponse5"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Users.GetUsersForTeamRequest` (4):

| Field | Channel | Wire | Type | Req | Style |
| --- | --- | --- | --- | --- | --- |
| `teamGid` | `path` | `team_gid` | `string` | yes | — |
| `optPretty` | `query` | `opt_pretty` | `boolean` | no | — |
| `optFields` | `query` | `opt_fields` | `string[]` | no | `csv` |
| `offset` | `query` | — | `string` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `TeamsUsersResponse` | `teamsUsersResponseSchema` | `src/models/teams-users-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### getUsersForWorkspace

- **Signature**: `getUsersForWorkspace(request: Users.GetUsersForWorkspaceRequest, options?: RequestOptions): ApiPromise<WorkspacesUsersResponse, Users.GetUsersForWorkspaceError>`
- **Wire**: `GET /workspaces/{workspace_gid}/users`
- **Auth**: any of `personalAccessToken`, `oauth2` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `WorkspacesUsersResponse`
- **Error**: `AsanaError` with `kind: "api"`, an instance of `Users.GetUsersForWorkspaceError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"errorResponse5"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Users.GetUsersForWorkspaceRequest` (4):

| Field | Channel | Wire | Type | Req | Style |
| --- | --- | --- | --- | --- | --- |
| `workspaceGid` | `path` | `workspace_gid` | `string` | yes | — |
| `optPretty` | `query` | `opt_pretty` | `boolean` | no | — |
| `optFields` | `query` | `opt_fields` | `string[]` | no | `csv` |
| `offset` | `query` | — | `string` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `WorkspacesUsersResponse` | `workspacesUsersResponseSchema` | `src/models/workspaces-users-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

