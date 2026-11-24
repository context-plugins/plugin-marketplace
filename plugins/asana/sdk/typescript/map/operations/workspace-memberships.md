<!-- Generated file — do not edit; regenerated with the SDK. -->

# WorkspaceMemberships — operations

Accessor: `client.workspaceMemberships` · Source: `src/resources/workspace-memberships.ts` · 3 operations · Request and error types: namespace `WorkspaceMemberships`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `asana`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getWorkspaceMembership

- **Signature**: `getWorkspaceMembership(request: WorkspaceMemberships.GetWorkspaceMembershipRequest, options?: RequestOptions): ApiPromise<WorkspaceMembershipsResponse, WorkspaceMemberships.GetWorkspaceMembershipError>`
- **Wire**: `GET /workspace_memberships/{workspace_membership_gid}`
- **Auth**: any of `personalAccessToken`, `oauth2` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `WorkspaceMembershipsResponse`
- **Error**: `AsanaError` with `kind: "api"`, an instance of `WorkspaceMemberships.GetWorkspaceMembershipError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"errorResponse5"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `WorkspaceMemberships.GetWorkspaceMembershipRequest` (3):

| Field | Channel | Wire | Type | Req | Style |
| --- | --- | --- | --- | --- | --- |
| `workspaceMembershipGid` | `path` | `workspace_membership_gid` | `string` | yes | — |
| `optPretty` | `query` | `opt_pretty` | `boolean` | no | — |
| `optFields` | `query` | `opt_fields` | `string[]` | no | `csv` |

| Type | Schema value | Source |
| --- | --- | --- |
| `WorkspaceMembershipsResponse` | `workspaceMembershipsResponseSchema` | `src/models/workspace-memberships-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### getWorkspaceMembershipsForUser

- **Signature**: `getWorkspaceMembershipsForUser(request: WorkspaceMemberships.GetWorkspaceMembershipsForUserRequest, options?: RequestOptions): ApiPromise<UsersWorkspaceMembershipsResponse, WorkspaceMemberships.GetWorkspaceMembershipsForUserError>`
- **Wire**: `GET /users/{user_gid}/workspace_memberships`
- **Auth**: any of `personalAccessToken`, `oauth2` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `UsersWorkspaceMembershipsResponse`
- **Error**: `AsanaError` with `kind: "api"`, an instance of `WorkspaceMemberships.GetWorkspaceMembershipsForUserError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"errorResponse5"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `WorkspaceMemberships.GetWorkspaceMembershipsForUserRequest` (5):

| Field | Channel | Wire | Type | Req | Style |
| --- | --- | --- | --- | --- | --- |
| `userGid` | `path` | `user_gid` | `string` | yes | — |
| `optPretty` | `query` | `opt_pretty` | `boolean` | no | — |
| `optFields` | `query` | `opt_fields` | `string[]` | no | `csv` |
| `limit` | `query` | — | `number` | no | — |
| `offset` | `query` | — | `string` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `UsersWorkspaceMembershipsResponse` | `usersWorkspaceMembershipsResponseSchema` | `src/models/users-workspace-memberships-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### getWorkspaceMembershipsForWorkspace

- **Signature**: `getWorkspaceMembershipsForWorkspace(request: WorkspaceMemberships.GetWorkspaceMembershipsForWorkspaceRequest, options?: RequestOptions): ApiPromise<WorkspacesWorkspaceMembershipsResponse, ApiError>`
- **Wire**: `GET /workspaces/{workspace_gid}/workspace_memberships`
- **Auth**: any of `personalAccessToken`, `oauth2` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `WorkspacesWorkspaceMembershipsResponse`
- **Error**: `AsanaError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `WorkspaceMemberships.GetWorkspaceMembershipsForWorkspaceRequest` (6):

| Field | Channel | Wire | Type | Req | Style |
| --- | --- | --- | --- | --- | --- |
| `workspaceGid` | `path` | `workspace_gid` | `string` | yes | — |
| `user` | `query` | — | `string` | no | — |
| `optPretty` | `query` | `opt_pretty` | `boolean` | no | — |
| `optFields` | `query` | `opt_fields` | `string[]` | no | `csv` |
| `limit` | `query` | — | `number` | no | — |
| `offset` | `query` | — | `string` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `WorkspacesWorkspaceMembershipsResponse` | `workspacesWorkspaceMembershipsResponseSchema` | `src/models/workspaces-workspace-memberships-response.ts` |

