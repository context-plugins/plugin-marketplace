<!-- Generated file — do not edit; regenerated with the SDK. -->

# Members — operations

Accessor: `client.members` · Source: `fillo/apis/members.py` · 5 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.members.cancel_workspace_invitation

- **Route**: `DELETE /api/v1/manage/members/invites/{id}`
- **Auth**: `bearer_auth`
- **Signature**: `def cancel_workspace_invitation(id_: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id`
- **Returns (parsed)**: `ApiV1ManageMembersInvitesResponse1`
- **Returns (raw)**: `ApiResult[ApiV1ManageMembersInvitesResponse1, CancelWorkspaceInvitationErrorBody]`
- **Error**: `CancelWorkspaceInvitationErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 403, 404, 409, 429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1ManageMembersInvitesResponse1` | `fillo/models/api_v1_manage_members_invites_response1.py` |
| `CancelWorkspaceInvitationErrorBody` | `fillo/errors/cancel_workspace_invitation_error.py` |
| `Error` | `fillo/models/error.py` |

### client.members.invite_workspace_member

- **Route**: `POST /api/v1/manage/members/invites`
- **Auth**: `bearer_auth`
- **Signature**: `def invite_workspace_member(body: ApiV1ManageMembersInvitesRequest | ApiV1ManageMembersInvitesRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `ApiV1ManageMembersInvitesResponse`
- **Returns (raw)**: `ApiResult[ApiV1ManageMembersInvitesResponse, InviteWorkspaceMemberErrorBody]`
- **Error**: `InviteWorkspaceMemberErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 403, 404, 409, 413, 429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1ManageMembersInvitesRequest` | `fillo/models/api_v1_manage_members_invites_request.py` |
| `ApiV1ManageMembersInvitesRequestDict` | `fillo/models/api_v1_manage_members_invites_request.py` |
| `ApiV1ManageMembersInvitesResponse` | `fillo/models/api_v1_manage_members_invites_response.py` |
| `InviteWorkspaceMemberErrorBody` | `fillo/errors/invite_workspace_member_error.py` |
| `Error` | `fillo/models/error.py` |

### client.members.list_workspace_members

- **Route**: `GET /api/v1/manage/members`
- **Auth**: `bearer_auth`
- **Signature**: `def list_workspace_members(*, request_options: RequestOptionsOrDict | None = None)`
- **Returns (parsed)**: `WorkspaceMembers`
- **Returns (raw)**: `ApiResult[WorkspaceMembers, ListWorkspaceMembersErrorBody]`
- **Error**: `ListWorkspaceMembersErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 403, 404, 429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `WorkspaceMembers` | `fillo/models/workspace_members.py` |
| `ListWorkspaceMembersErrorBody` | `fillo/errors/list_workspace_members_error.py` |
| `Error` | `fillo/models/error.py` |

### client.members.remove_workspace_member

- **Route**: `DELETE /api/v1/manage/members/{id}`
- **Auth**: `bearer_auth`
- **Signature**: `def remove_workspace_member(id_: str, body: ConfirmTarget | ConfirmTargetDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`, `body`
- **Params**: `id_` — path `id` · `body` — JSON body
- **Returns (parsed)**: `ApiV1ManageMembersResponse1`
- **Returns (raw)**: `ApiResult[ApiV1ManageMembersResponse1, RemoveWorkspaceMemberErrorBody]`
- **Error**: `RemoveWorkspaceMemberErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 403, 404, 409, 413, 429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ConfirmTarget` | `fillo/models/confirm_target.py` |
| `ConfirmTargetDict` | `fillo/models/confirm_target.py` |
| `ApiV1ManageMembersResponse1` | `fillo/models/api_v1_manage_members_response1.py` |
| `RemoveWorkspaceMemberErrorBody` | `fillo/errors/remove_workspace_member_error.py` |
| `Error` | `fillo/models/error.py` |

### client.members.set_member_role

- **Route**: `PATCH /api/v1/manage/members/{id}`
- **Auth**: `bearer_auth`
- **Signature**: `def set_member_role(id_: str, body: ApiV1ManageMembersRequest | ApiV1ManageMembersRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`, `body`
- **Params**: `id_` — path `id` · `body` — JSON body
- **Returns (parsed)**: `ApiV1ManageMembersResponse`
- **Returns (raw)**: `ApiResult[ApiV1ManageMembersResponse, SetMemberRoleErrorBody]`
- **Error**: `SetMemberRoleErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 403, 404, 409, 413, 429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1ManageMembersRequest` | `fillo/models/api_v1_manage_members_request.py` |
| `ApiV1ManageMembersRequestDict` | `fillo/models/api_v1_manage_members_request.py` |
| `ApiV1ManageMembersResponse` | `fillo/models/api_v1_manage_members_response.py` |
| `SetMemberRoleErrorBody` | `fillo/errors/set_member_role_error.py` |
| `Error` | `fillo/models/error.py` |

