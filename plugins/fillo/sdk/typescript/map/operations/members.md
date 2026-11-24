<!-- Generated file — do not edit; regenerated with the SDK. -->

# Members — operations

Accessor: `client.members` · Source: `src/resources/members.ts` · 5 operations · Request and error types: namespace `Members`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `fillo`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### cancelWorkspaceInvitation

- **Signature**: `cancelWorkspaceInvitation(request: Members.CancelWorkspaceInvitationRequest, options?: RequestOptions): ApiPromise<ApiV1ManageMembersInvitesResponse1, Members.CancelWorkspaceInvitationError>`
- **Wire**: `DELETE /api/v1/manage/members/invites/{id}`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ApiV1ManageMembersInvitesResponse1`
- **Error**: `FilloError` with `kind: "api"`, an instance of `Members.CancelWorkspaceInvitationError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [403] `Error` · `"error4"` [404] `Error` · `"error5"` [409] `Error` · `"error6"` [429] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Members.CancelWorkspaceInvitationRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1ManageMembersInvitesResponse1` | `apiV1ManageMembersInvitesResponse1Schema` | `src/models/api-v1-manage-members-invites-response1.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### inviteWorkspaceMember

- **Signature**: `inviteWorkspaceMember(request: Members.InviteWorkspaceMemberRequest, options?: RequestOptions): ApiPromise<ApiV1ManageMembersInvitesResponse, Members.InviteWorkspaceMemberError>`
- **Wire**: `POST /api/v1/manage/members/invites`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ApiV1ManageMembersInvitesResponse`
- **Error**: `FilloError` with `kind: "api"`, an instance of `Members.InviteWorkspaceMemberError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [403] `Error` · `"error4"` [404] `Error` · `"error5"` [409] `Error` · `"error6"` [413] `Error` · `"error7"` [429] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Members.InviteWorkspaceMemberRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `ApiV1ManageMembersInvitesRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1ManageMembersInvitesRequest` | `apiV1ManageMembersInvitesRequestSchema` | `src/models/api-v1-manage-members-invites-request.ts` |
| `ApiV1ManageMembersInvitesResponse` | `apiV1ManageMembersInvitesResponseSchema` | `src/models/api-v1-manage-members-invites-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### listWorkspaceMembers

- **Signature**: `listWorkspaceMembers(options?: RequestOptions): ApiPromise<WorkspaceMembers, Members.ListWorkspaceMembersError>`
- **Wire**: `GET /api/v1/manage/members`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `WorkspaceMembers`
- **Error**: `FilloError` with `kind: "api"`, an instance of `Members.ListWorkspaceMembersError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [403] `Error` · `"error4"` [404] `Error` · `"error5"` [429] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

| Type | Schema value | Source |
| --- | --- | --- |
| `WorkspaceMembers` | `workspaceMembersSchema` | `src/models/workspace-members.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### removeWorkspaceMember

- **Signature**: `removeWorkspaceMember(request: Members.RemoveWorkspaceMemberRequest, options?: RequestOptions): ApiPromise<ApiV1ManageMembersResponse1, Members.RemoveWorkspaceMemberError>`
- **Wire**: `DELETE /api/v1/manage/members/{id}`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ApiV1ManageMembersResponse1`
- **Error**: `FilloError` with `kind: "api"`, an instance of `Members.RemoveWorkspaceMemberError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [403] `Error` · `"error4"` [404] `Error` · `"error5"` [409] `Error` · `"error6"` [413] `Error` · `"error7"` [429] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Members.RemoveWorkspaceMemberRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |
| `body` | `body` | `ConfirmTarget` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ConfirmTarget` | `confirmTargetSchema` | `src/models/confirm-target.ts` |
| `ApiV1ManageMembersResponse1` | `apiV1ManageMembersResponse1Schema` | `src/models/api-v1-manage-members-response1.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### setMemberRole

- **Signature**: `setMemberRole(request: Members.SetMemberRoleRequest, options?: RequestOptions): ApiPromise<ApiV1ManageMembersResponse, Members.SetMemberRoleError>`
- **Wire**: `PATCH /api/v1/manage/members/{id}`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ApiV1ManageMembersResponse`
- **Error**: `FilloError` with `kind: "api"`, an instance of `Members.SetMemberRoleError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [403] `Error` · `"error4"` [404] `Error` · `"error5"` [409] `Error` · `"error6"` [413] `Error` · `"error7"` [429] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Members.SetMemberRoleRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |
| `body` | `body` | `ApiV1ManageMembersRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1ManageMembersRequest` | `apiV1ManageMembersRequestSchema` | `src/models/api-v1-manage-members-request.ts` |
| `ApiV1ManageMembersResponse` | `apiV1ManageMembersResponseSchema` | `src/models/api-v1-manage-members-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

