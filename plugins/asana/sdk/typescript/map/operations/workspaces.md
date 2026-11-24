<!-- Generated file — do not edit; regenerated with the SDK. -->

# Workspaces — operations

Accessor: `client.workspaces` · Source: `src/resources/workspaces.ts` · 5 operations · Request and error types: namespace `Workspaces`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `asana`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### addUserForWorkspace

- **Signature**: `addUserForWorkspace(request: Workspaces.AddUserForWorkspaceRequest, options?: RequestOptions): ApiPromise<WorkspacesAddUserResponse, Workspaces.AddUserForWorkspaceError>`
- **Wire**: `POST /workspaces/{workspace_gid}/addUser`
- **Auth**: any of `personalAccessToken`, `oauth2` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `WorkspacesAddUserResponse`
- **Error**: `AsanaError` with `kind: "api"`, an instance of `Workspaces.AddUserForWorkspaceError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"errorResponse5"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Workspaces.AddUserForWorkspaceRequest` (4):

| Field | Channel | Wire | Type | Req | Style |
| --- | --- | --- | --- | --- | --- |
| `workspaceGid` | `path` | `workspace_gid` | `string` | yes | — |
| `optPretty` | `query` | `opt_pretty` | `boolean` | no | — |
| `optFields` | `query` | `opt_fields` | `string[]` | no | `csv` |
| `body` | `body` | — | `WorkspacesAddUserRequest` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `WorkspacesAddUserRequest` | `workspacesAddUserRequestSchema` | `src/models/workspaces-add-user-request.ts` |
| `WorkspacesAddUserResponse` | `workspacesAddUserResponseSchema` | `src/models/workspaces-add-user-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### getWorkspace

- **Signature**: `getWorkspace(request: Workspaces.GetWorkspaceRequest, options?: RequestOptions): ApiPromise<WorkspacesResponse1, Workspaces.GetWorkspaceError>`
- **Wire**: `GET /workspaces/{workspace_gid}`
- **Auth**: any of `personalAccessToken`, `oauth2` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `WorkspacesResponse1`
- **Error**: `AsanaError` with `kind: "api"`, an instance of `Workspaces.GetWorkspaceError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"errorResponse5"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Workspaces.GetWorkspaceRequest` (3):

| Field | Channel | Wire | Type | Req | Style |
| --- | --- | --- | --- | --- | --- |
| `workspaceGid` | `path` | `workspace_gid` | `string` | yes | — |
| `optPretty` | `query` | `opt_pretty` | `boolean` | no | — |
| `optFields` | `query` | `opt_fields` | `string[]` | no | `csv` |

| Type | Schema value | Source |
| --- | --- | --- |
| `WorkspacesResponse1` | `workspacesResponse1Schema` | `src/models/workspaces-response1.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### getWorkspaces

- **Signature**: `getWorkspaces(request?: Workspaces.GetWorkspacesRequest, options?: RequestOptions): ApiPromise<WorkspacesResponse, Workspaces.GetWorkspacesError>`
- **Wire**: `GET /workspaces`
- **Auth**: any of `personalAccessToken`, `oauth2` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `WorkspacesResponse`
- **Error**: `AsanaError` with `kind: "api"`, an instance of `Workspaces.GetWorkspacesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"errorResponse5"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Workspaces.GetWorkspacesRequest` (4):

| Field | Channel | Wire | Type | Req | Style |
| --- | --- | --- | --- | --- | --- |
| `optPretty` | `query` | `opt_pretty` | `boolean` | no | — |
| `optFields` | `query` | `opt_fields` | `string[]` | no | `csv` |
| `limit` | `query` | — | `number` | no | — |
| `offset` | `query` | — | `string` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `WorkspacesResponse` | `workspacesResponseSchema` | `src/models/workspaces-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### removeUserForWorkspace

- **Signature**: `removeUserForWorkspace(request: Workspaces.RemoveUserForWorkspaceRequest, options?: RequestOptions): ApiPromise<WorkspacesRemoveUserResponse, Workspaces.RemoveUserForWorkspaceError>`
- **Wire**: `POST /workspaces/{workspace_gid}/removeUser`
- **Auth**: any of `personalAccessToken`, `oauth2` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `WorkspacesRemoveUserResponse`
- **Error**: `AsanaError` with `kind: "api"`, an instance of `Workspaces.RemoveUserForWorkspaceError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"errorResponse5"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Workspaces.RemoveUserForWorkspaceRequest` (4):

| Field | Channel | Wire | Type | Req | Style |
| --- | --- | --- | --- | --- | --- |
| `workspaceGid` | `path` | `workspace_gid` | `string` | yes | — |
| `optPretty` | `query` | `opt_pretty` | `boolean` | no | — |
| `optFields` | `query` | `opt_fields` | `string[]` | no | `csv` |
| `body` | `body` | — | `WorkspacesRemoveUserRequest` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `WorkspacesRemoveUserRequest` | `workspacesRemoveUserRequestSchema` | `src/models/workspaces-remove-user-request.ts` |
| `WorkspacesRemoveUserResponse` | `workspacesRemoveUserResponseSchema` | `src/models/workspaces-remove-user-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### updateWorkspace

- **Signature**: `updateWorkspace(request: Workspaces.UpdateWorkspaceRequest, options?: RequestOptions): ApiPromise<WorkspacesResponse1, Workspaces.UpdateWorkspaceError>`
- **Wire**: `PUT /workspaces/{workspace_gid}`
- **Auth**: any of `personalAccessToken`, `oauth2` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `WorkspacesResponse1`
- **Error**: `AsanaError` with `kind: "api"`, an instance of `Workspaces.UpdateWorkspaceError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"errorResponse5"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Workspaces.UpdateWorkspaceRequest` (4):

| Field | Channel | Wire | Type | Req | Style |
| --- | --- | --- | --- | --- | --- |
| `workspaceGid` | `path` | `workspace_gid` | `string` | yes | — |
| `optPretty` | `query` | `opt_pretty` | `boolean` | no | — |
| `optFields` | `query` | `opt_fields` | `string[]` | no | `csv` |
| `body` | `body` | — | `WorkspacesRequest` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `WorkspacesRequest` | `workspacesRequestSchema` | `src/models/workspaces-request.ts` |
| `WorkspacesResponse1` | `workspacesResponse1Schema` | `src/models/workspaces-response1.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

