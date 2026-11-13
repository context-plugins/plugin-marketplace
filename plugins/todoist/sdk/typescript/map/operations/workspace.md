<!-- Generated file — do not edit; regenerated with the SDK. -->

# Workspace — operations

Accessor: `client.workspace` · Source: `src/resources/workspace.ts` · 19 operations · Request and error types: namespace `Workspace`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `todoist-sdk`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### acceptInvitationApiV1WorkspacesInvitationsInviteCodeAcceptPut

- **Signature**: `acceptInvitationApiV1WorkspacesInvitationsInviteCodeAcceptPut(request: Workspace.AcceptInvitationApiV1WorkspacesInvitationsInviteCodeAcceptPutRequest, options?: RequestOptions): ApiPromise<WorkspaceInvitationView, Workspace.AcceptInvitationApiV1WorkspacesInvitationsInviteCodeAcceptPutError>`
- **Wire**: `PUT /api/v1/workspaces/invitations/{invite_code}/accept`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `WorkspaceInvitationView`
- **Error**: `TodoistApiError` with `kind: "api"`, an instance of `Workspace.AcceptInvitationApiV1WorkspacesInvitationsInviteCodeAcceptPutError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"todoistError"` [400] `TodoistError` · `"todoistError2"` [401] `TodoistError` · `"todoistError3"` [403] `TodoistError` · `"todoistError4"` [404] `TodoistError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Workspace.AcceptInvitationApiV1WorkspacesInvitationsInviteCodeAcceptPutRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `inviteCode` | `path` | `invite_code` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `WorkspaceInvitationView` | `workspaceInvitationViewSchema` | `src/models/workspace-invitation-view.ts` |
| `TodoistError` | `todoistErrorSchema` | `src/models/todoist-error.ts` |

### activeProjectsApiV1WorkspacesWorkspaceIdProjectsActiveGet

- **Signature**: `activeProjectsApiV1WorkspacesWorkspaceIdProjectsActiveGet(request: Workspace.ActiveProjectsApiV1WorkspacesWorkspaceIdProjectsActiveGetRequest, options?: RequestOptions): ApiPromise<ProjectsResponse, Workspace.ActiveProjectsApiV1WorkspacesWorkspaceIdProjectsActiveGetError>`
- **Wire**: `GET /api/v1/workspaces/{workspace_id}/projects/active`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ProjectsResponse`
- **Error**: `TodoistApiError` with `kind: "api"`, an instance of `Workspace.ActiveProjectsApiV1WorkspacesWorkspaceIdProjectsActiveGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"todoistError"` [400] `TodoistError` · `"todoistError2"` [401] `TodoistError` · `"todoistError3"` [403] `TodoistError` · `"todoistError4"` [404] `TodoistError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Workspace.ActiveProjectsApiV1WorkspacesWorkspaceIdProjectsActiveGetRequest` (3):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `workspaceId` | `path` | `workspace_id` | `number` | yes | — |
| `cursor` | `query` | — | `string` | no | — |
| `limit` | `query` | — | `number` | no | `100` |

| Type | Schema value | Source |
| --- | --- | --- |
| `ProjectsResponse` | `projectsResponseSchema` | `src/models/projects-response.ts` |
| `TodoistError` | `todoistErrorSchema` | `src/models/todoist-error.ts` |

### allInvitationsApiV1WorkspacesInvitationsAllGet

- **Signature**: `allInvitationsApiV1WorkspacesInvitationsAllGet(request: Workspace.AllInvitationsApiV1WorkspacesInvitationsAllGetRequest, options?: RequestOptions): ApiPromise<WorkspaceInvitationView[], Workspace.AllInvitationsApiV1WorkspacesInvitationsAllGetError>`
- **Wire**: `GET /api/v1/workspaces/invitations/all`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `WorkspaceInvitationView[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `TodoistApiError` with `kind: "api"`, an instance of `Workspace.AllInvitationsApiV1WorkspacesInvitationsAllGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"todoistError"` [400] `TodoistError` · `"todoistError2"` [401] `TodoistError` · `"todoistError3"` [403] `TodoistError` · `"todoistError4"` [404] `TodoistError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Workspace.AllInvitationsApiV1WorkspacesInvitationsAllGetRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `workspaceId` | `query` | `workspace_id` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `WorkspaceInvitationView` | `workspaceInvitationViewSchema` | `src/models/workspace-invitation-view.ts` |
| `TodoistError` | `todoistErrorSchema` | `src/models/todoist-error.ts` |

### archivedProjectsApiV1WorkspacesWorkspaceIdProjectsArchivedGet

- **Signature**: `archivedProjectsApiV1WorkspacesWorkspaceIdProjectsArchivedGet(request: Workspace.ArchivedProjectsApiV1WorkspacesWorkspaceIdProjectsArchivedGetRequest, options?: RequestOptions): ApiPromise<ProjectsResponse, Workspace.ArchivedProjectsApiV1WorkspacesWorkspaceIdProjectsArchivedGetError>`
- **Wire**: `GET /api/v1/workspaces/{workspace_id}/projects/archived`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ProjectsResponse`
- **Error**: `TodoistApiError` with `kind: "api"`, an instance of `Workspace.ArchivedProjectsApiV1WorkspacesWorkspaceIdProjectsArchivedGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"todoistError"` [400] `TodoistError` · `"todoistError2"` [401] `TodoistError` · `"todoistError3"` [403] `TodoistError` · `"todoistError4"` [404] `TodoistError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Workspace.ArchivedProjectsApiV1WorkspacesWorkspaceIdProjectsArchivedGetRequest` (3):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `workspaceId` | `path` | `workspace_id` | `number` | yes | — |
| `cursor` | `query` | — | `string` | no | — |
| `limit` | `query` | — | `number` | no | `100` |

| Type | Schema value | Source |
| --- | --- | --- |
| `ProjectsResponse` | `projectsResponseSchema` | `src/models/projects-response.ts` |
| `TodoistError` | `todoistErrorSchema` | `src/models/todoist-error.ts` |

### createWorkspaceApiV1WorkspacesPost

- **Signature**: `createWorkspaceApiV1WorkspacesPost(request: Workspace.CreateWorkspaceApiV1WorkspacesPostRequest, options?: RequestOptions): ApiPromise<WorkspaceSyncView, Workspace.CreateWorkspaceApiV1WorkspacesPostError>`
- **Wire**: `POST /api/v1/workspaces`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `WorkspaceSyncView`
- **Error**: `TodoistApiError` with `kind: "api"`, an instance of `Workspace.CreateWorkspaceApiV1WorkspacesPostError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"todoistError"` [400] `TodoistError` · `"todoistError2"` [401] `TodoistError` · `"todoistError3"` [403] `TodoistError` · `"todoistError4"` [404] `TodoistError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Workspace.CreateWorkspaceApiV1WorkspacesPostRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `Body38` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Body38` | `body38Schema` | `src/models/body38.ts` |
| `WorkspaceSyncView` | `workspaceSyncViewSchema` | `src/models/workspace-sync-view.ts` |
| `TodoistError` | `todoistErrorSchema` | `src/models/todoist-error.ts` |

### deleteInvitationApiV1WorkspacesInvitationsDeletePost

- **Signature**: `deleteInvitationApiV1WorkspacesInvitationsDeletePost(request: Workspace.DeleteInvitationApiV1WorkspacesInvitationsDeletePostRequest, options?: RequestOptions): ApiPromise<WorkspaceInvitationView, Workspace.DeleteInvitationApiV1WorkspacesInvitationsDeletePostError>`
- **Wire**: `POST /api/v1/workspaces/invitations/delete`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `WorkspaceInvitationView`
- **Error**: `TodoistApiError` with `kind: "api"`, an instance of `Workspace.DeleteInvitationApiV1WorkspacesInvitationsDeletePostError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"todoistError"` [400] `TodoistError` · `"todoistError2"` [401] `TodoistError` · `"todoistError3"` [403] `TodoistError` · `"todoistError4"` [404] `TodoistError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Workspace.DeleteInvitationApiV1WorkspacesInvitationsDeletePostRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `Body18` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Body18` | `body18Schema` | `src/models/body18.ts` |
| `WorkspaceInvitationView` | `workspaceInvitationViewSchema` | `src/models/workspace-invitation-view.ts` |
| `TodoistError` | `todoistErrorSchema` | `src/models/todoist-error.ts` |

### deleteWorkspaceApiV1WorkspacesWorkspaceIdDelete

- **Signature**: `deleteWorkspaceApiV1WorkspacesWorkspaceIdDelete(request: Workspace.DeleteWorkspaceApiV1WorkspacesWorkspaceIdDeleteRequest, options?: RequestOptions): ApiPromise<undefined, Workspace.DeleteWorkspaceApiV1WorkspacesWorkspaceIdDeleteError>`
- **Wire**: `DELETE /api/v1/workspaces/{workspace_id}`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `TodoistApiError` with `kind: "api"`, an instance of `Workspace.DeleteWorkspaceApiV1WorkspacesWorkspaceIdDeleteError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"todoistError"` [400] `TodoistError` · `"todoistError2"` [401] `TodoistError` · `"todoistError3"` [403] `TodoistError` · `"todoistError4"` [404] `TodoistError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Workspace.DeleteWorkspaceApiV1WorkspacesWorkspaceIdDeleteRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `workspaceId` | `path` | `workspace_id` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `TodoistError` | `todoistErrorSchema` | `src/models/todoist-error.ts` |

### getWorkspaceApiV1WorkspacesWorkspaceIdGet

- **Signature**: `getWorkspaceApiV1WorkspacesWorkspaceIdGet(request: Workspace.GetWorkspaceApiV1WorkspacesWorkspaceIdGetRequest, options?: RequestOptions): ApiPromise<WorkspaceSyncView, Workspace.GetWorkspaceApiV1WorkspacesWorkspaceIdGetError>`
- **Wire**: `GET /api/v1/workspaces/{workspace_id}`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `WorkspaceSyncView`
- **Error**: `TodoistApiError` with `kind: "api"`, an instance of `Workspace.GetWorkspaceApiV1WorkspacesWorkspaceIdGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"todoistError"` [400] `TodoistError` · `"todoistError2"` [401] `TodoistError` · `"todoistError3"` [403] `TodoistError` · `"todoistError4"` [404] `TodoistError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Workspace.GetWorkspaceApiV1WorkspacesWorkspaceIdGetRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `workspaceId` | `path` | `workspace_id` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `WorkspaceSyncView` | `workspaceSyncViewSchema` | `src/models/workspace-sync-view.ts` |
| `TodoistError` | `todoistErrorSchema` | `src/models/todoist-error.ts` |

### getWorkspacesApiV1WorkspacesGet

- **Signature**: `getWorkspacesApiV1WorkspacesGet(options?: RequestOptions): ApiPromise<WorkspaceSyncView[], Workspace.GetWorkspacesApiV1WorkspacesGetError>`
- **Wire**: `GET /api/v1/workspaces`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `WorkspaceSyncView[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `TodoistApiError` with `kind: "api"`, an instance of `Workspace.GetWorkspacesApiV1WorkspacesGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"todoistError"` [400] `TodoistError` · `"todoistError2"` [401] `TodoistError` · `"todoistError3"` [403] `TodoistError` · `"todoistError4"` [404] `TodoistError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

| Type | Schema value | Source |
| --- | --- | --- |
| `WorkspaceSyncView` | `workspaceSyncViewSchema` | `src/models/workspace-sync-view.ts` |
| `TodoistError` | `todoistErrorSchema` | `src/models/todoist-error.ts` |

### getWorkspacesUsersApiV1WorkspacesUsersGet

- **Signature**: `getWorkspacesUsersApiV1WorkspacesUsersGet(request?: Workspace.GetWorkspacesUsersApiV1WorkspacesUsersGetRequest, options?: RequestOptions): ApiPromise<UsersResponse, Workspace.GetWorkspacesUsersApiV1WorkspacesUsersGetError>`
- **Wire**: `GET /api/v1/workspaces/users`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `UsersResponse`
- **Error**: `TodoistApiError` with `kind: "api"`, an instance of `Workspace.GetWorkspacesUsersApiV1WorkspacesUsersGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"todoistError"` [400] `TodoistError` · `"todoistError2"` [401] `TodoistError` · `"todoistError3"` [403] `TodoistError` · `"todoistError4"` [404] `TodoistError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Workspace.GetWorkspacesUsersApiV1WorkspacesUsersGetRequest` (4):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `workspaceId` | `query` | `workspace_id` | `number` | no | — |
| `cursor` | `query` | — | `string` | no | — |
| `limit` | `query` | — | `number` | no | `100` |
| `sort` | `query` | — | `Sort` | no | `Sort.Id` |

| Type | Schema value | Source |
| --- | --- | --- |
| `Sort` | `sortSchema` | `src/models/sort.ts` |
| `UsersResponse` | `usersResponseSchema` | `src/models/users-response.ts` |
| `TodoistError` | `todoistErrorSchema` | `src/models/todoist-error.ts` |

### invitationsApiV1WorkspacesInvitationsGet

- **Signature**: `invitationsApiV1WorkspacesInvitationsGet(request: Workspace.InvitationsApiV1WorkspacesInvitationsGetRequest, options?: RequestOptions): ApiPromise<string[], Workspace.InvitationsApiV1WorkspacesInvitationsGetError>`
- **Wire**: `GET /api/v1/workspaces/invitations`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `string[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `TodoistApiError` with `kind: "api"`, an instance of `Workspace.InvitationsApiV1WorkspacesInvitationsGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"todoistError"` [400] `TodoistError` · `"todoistError2"` [401] `TodoistError` · `"todoistError3"` [403] `TodoistError` · `"todoistError4"` [404] `TodoistError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Workspace.InvitationsApiV1WorkspacesInvitationsGetRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `workspaceId` | `query` | `workspace_id` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `TodoistError` | `todoistErrorSchema` | `src/models/todoist-error.ts` |

### inviteWorkspaceUsersApiV1WorkspacesWorkspaceIdUsersInvitePost

- **Signature**: `inviteWorkspaceUsersApiV1WorkspacesWorkspaceIdUsersInvitePost(request: Workspace.InviteWorkspaceUsersApiV1WorkspacesWorkspaceIdUsersInvitePostRequest, options?: RequestOptions): ApiPromise<InviteWorkspaceUsersResponse, Workspace.InviteWorkspaceUsersApiV1WorkspacesWorkspaceIdUsersInvitePostError>`
- **Wire**: `POST /api/v1/workspaces/{workspace_id}/users/invite`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `InviteWorkspaceUsersResponse`
- **Error**: `TodoistApiError` with `kind: "api"`, an instance of `Workspace.InviteWorkspaceUsersApiV1WorkspacesWorkspaceIdUsersInvitePostError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"todoistError"` [400] `TodoistError` · `"todoistError2"` [401] `TodoistError` · `"todoistError3"` [403] `TodoistError` · `"todoistError4"` [404] `TodoistError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Workspace.InviteWorkspaceUsersApiV1WorkspacesWorkspaceIdUsersInvitePostRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `workspaceId` | `path` | `workspace_id` | `number` | yes |
| `body` | `body` | — | `Body5` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Body5` | `body5Schema` | `src/models/body5.ts` |
| `InviteWorkspaceUsersResponse` | `inviteWorkspaceUsersResponseSchema` | `src/models/invite-workspace-users-response.ts` |
| `TodoistError` | `todoistErrorSchema` | `src/models/todoist-error.ts` |

### joinApiV1WorkspacesJoinPost

- **Signature**: `joinApiV1WorkspacesJoinPost(request: Workspace.JoinApiV1WorkspacesJoinPostRequest, options?: RequestOptions): ApiPromise<WorkspaceUserView, Workspace.JoinApiV1WorkspacesJoinPostError>`
- **Wire**: `POST /api/v1/workspaces/join`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `WorkspaceUserView`
- **Error**: `TodoistApiError` with `kind: "api"`, an instance of `Workspace.JoinApiV1WorkspacesJoinPostError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"todoistError"` [400] `TodoistError` · `"todoistError2"` [401] `TodoistError` · `"todoistError3"` [403] `TodoistError` · `"todoistError4"` [404] `TodoistError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Workspace.JoinApiV1WorkspacesJoinPostRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `Body40` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Body40` | `body40Schema` | `src/models/body40.ts` |
| `WorkspaceUserView` | `workspaceUserViewSchema` | `src/models/workspace-user-view.ts` |
| `TodoistError` | `todoistErrorSchema` | `src/models/todoist-error.ts` |

### planDetailsApiV1WorkspacesPlanDetailsGet

- **Signature**: `planDetailsApiV1WorkspacesPlanDetailsGet(request: Workspace.PlanDetailsApiV1WorkspacesPlanDetailsGetRequest, options?: RequestOptions): ApiPromise<PlanDetailsResponse, Workspace.PlanDetailsApiV1WorkspacesPlanDetailsGetError>`
- **Wire**: `GET /api/v1/workspaces/plan_details`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PlanDetailsResponse`
- **Error**: `TodoistApiError` with `kind: "api"`, an instance of `Workspace.PlanDetailsApiV1WorkspacesPlanDetailsGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"todoistError"` [400] `TodoistError` · `"todoistError2"` [401] `TodoistError` · `"todoistError3"` [403] `TodoistError` · `"todoistError4"` [404] `TodoistError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Workspace.PlanDetailsApiV1WorkspacesPlanDetailsGetRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `workspaceId` | `query` | `workspace_id` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `PlanDetailsResponse` | `planDetailsResponseSchema` | `src/models/plan-details-response.ts` |
| `TodoistError` | `todoistErrorSchema` | `src/models/todoist-error.ts` |

### rejectInvitationApiV1WorkspacesInvitationsInviteCodeRejectPut

- **Signature**: `rejectInvitationApiV1WorkspacesInvitationsInviteCodeRejectPut(request: Workspace.RejectInvitationApiV1WorkspacesInvitationsInviteCodeRejectPutRequest, options?: RequestOptions): ApiPromise<WorkspaceInvitationView, Workspace.RejectInvitationApiV1WorkspacesInvitationsInviteCodeRejectPutError>`
- **Wire**: `PUT /api/v1/workspaces/invitations/{invite_code}/reject`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `WorkspaceInvitationView`
- **Error**: `TodoistApiError` with `kind: "api"`, an instance of `Workspace.RejectInvitationApiV1WorkspacesInvitationsInviteCodeRejectPutError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"todoistError"` [400] `TodoistError` · `"todoistError2"` [401] `TodoistError` · `"todoistError3"` [403] `TodoistError` · `"todoistError4"` [404] `TodoistError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Workspace.RejectInvitationApiV1WorkspacesInvitationsInviteCodeRejectPutRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `inviteCode` | `path` | `invite_code` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `WorkspaceInvitationView` | `workspaceInvitationViewSchema` | `src/models/workspace-invitation-view.ts` |
| `TodoistError` | `todoistErrorSchema` | `src/models/todoist-error.ts` |

### removeWorkspaceUserApiV1WorkspacesWorkspaceIdUsersUserIdDelete

- **Signature**: `removeWorkspaceUserApiV1WorkspacesWorkspaceIdUsersUserIdDelete(request: Workspace.RemoveWorkspaceUserApiV1WorkspacesWorkspaceIdUsersUserIdDeleteRequest, options?: RequestOptions): ApiPromise<RemoveWorkspaceUserResponse, Workspace.RemoveWorkspaceUserApiV1WorkspacesWorkspaceIdUsersUserIdDeleteError>`
- **Wire**: `DELETE /api/v1/workspaces/{workspace_id}/users/{user_id}`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `RemoveWorkspaceUserResponse`
- **Error**: `TodoistApiError` with `kind: "api"`, an instance of `Workspace.RemoveWorkspaceUserApiV1WorkspacesWorkspaceIdUsersUserIdDeleteError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"todoistError"` [400] `TodoistError` · `"todoistError2"` [401] `TodoistError` · `"todoistError3"` [403] `TodoistError` · `"todoistError4"` [404] `TodoistError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Workspace.RemoveWorkspaceUserApiV1WorkspacesWorkspaceIdUsersUserIdDeleteRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `workspaceId` | `path` | `workspace_id` | `number` | yes |
| `userId` | `path` | `user_id` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `RemoveWorkspaceUserResponse` | `removeWorkspaceUserResponseSchema` | `src/models/remove-workspace-user-response.ts` |
| `TodoistError` | `todoistErrorSchema` | `src/models/todoist-error.ts` |

### updateLogoApiV1WorkspacesLogoPost

- **Signature**: `updateLogoApiV1WorkspacesLogoPost(request: Workspace.UpdateLogoApiV1WorkspacesLogoPostRequest, options?: RequestOptions): ApiPromise<WorkspaceSyncView | null, Workspace.UpdateLogoApiV1WorkspacesLogoPostError>`
- **Wire**: `POST /api/v1/workspaces/logo`
- **Auth**: `bearerAuth`
- **Request body**: `multipart/form-data` — every field marked `form`. `file` is a file part, framed as bytes rather than encoded. The platform writes the boundary, or the SDK does when a file part streams
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `WorkspaceSyncView`
- **Error**: `TodoistApiError` with `kind: "api"`, an instance of `Workspace.UpdateLogoApiV1WorkspacesLogoPostError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"todoistError"` [400] `TodoistError` · `"todoistError2"` [401] `TodoistError` · `"todoistError3"` [403] `TodoistError` · `"todoistError4"` [404] `TodoistError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Workspace.UpdateLogoApiV1WorkspacesLogoPostRequest` (3):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `workspaceId` | `form` | `workspace_id` | `number` | yes | — |
| `file` | `form` | — | `FileInput` | yes | — |
| `delete` | `form` | — | `boolean` | no | `false` |

| Type | Schema value | Source |
| --- | --- | --- |
| `WorkspaceSyncView` | `workspaceSyncViewSchema` | `src/models/workspace-sync-view.ts` |
| `TodoistError` | `todoistErrorSchema` | `src/models/todoist-error.ts` |

### updateWorkspaceApiV1WorkspacesWorkspaceIdPost

- **Signature**: `updateWorkspaceApiV1WorkspacesWorkspaceIdPost(request: Workspace.UpdateWorkspaceApiV1WorkspacesWorkspaceIdPostRequest, options?: RequestOptions): ApiPromise<WorkspaceSyncView, Workspace.UpdateWorkspaceApiV1WorkspacesWorkspaceIdPostError>`
- **Wire**: `POST /api/v1/workspaces/{workspace_id}`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `WorkspaceSyncView`
- **Error**: `TodoistApiError` with `kind: "api"`, an instance of `Workspace.UpdateWorkspaceApiV1WorkspacesWorkspaceIdPostError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"todoistError"` [400] `TodoistError` · `"todoistError2"` [401] `TodoistError` · `"todoistError3"` [403] `TodoistError` · `"todoistError4"` [404] `TodoistError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Workspace.UpdateWorkspaceApiV1WorkspacesWorkspaceIdPostRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `workspaceId` | `path` | `workspace_id` | `number` | yes |
| `body` | `body` | — | `Body34` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Body34` | `body34Schema` | `src/models/body34.ts` |
| `WorkspaceSyncView` | `workspaceSyncViewSchema` | `src/models/workspace-sync-view.ts` |
| `TodoistError` | `todoistErrorSchema` | `src/models/todoist-error.ts` |

### updateWorkspaceUserApiV1WorkspacesWorkspaceIdUsersUserIdPost

- **Signature**: `updateWorkspaceUserApiV1WorkspacesWorkspaceIdUsersUserIdPost(request: Workspace.UpdateWorkspaceUserApiV1WorkspacesWorkspaceIdUsersUserIdPostRequest, options?: RequestOptions): ApiPromise<WorkspaceUserView, Workspace.UpdateWorkspaceUserApiV1WorkspacesWorkspaceIdUsersUserIdPostError>`
- **Wire**: `POST /api/v1/workspaces/{workspace_id}/users/{user_id}`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `WorkspaceUserView`
- **Error**: `TodoistApiError` with `kind: "api"`, an instance of `Workspace.UpdateWorkspaceUserApiV1WorkspacesWorkspaceIdUsersUserIdPostError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"todoistError"` [400] `TodoistError` · `"todoistError2"` [401] `TodoistError` · `"todoistError3"` [403] `TodoistError` · `"todoistError4"` [404] `TodoistError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Workspace.UpdateWorkspaceUserApiV1WorkspacesWorkspaceIdUsersUserIdPostRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `workspaceId` | `path` | `workspace_id` | `number` | yes |
| `userId` | `path` | `user_id` | `number` | yes |
| `body` | `body` | — | `Body17` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Body17` | `body17Schema` | `src/models/body17.ts` |
| `WorkspaceUserView` | `workspaceUserViewSchema` | `src/models/workspace-user-view.ts` |
| `TodoistError` | `todoistErrorSchema` | `src/models/todoist-error.ts` |

