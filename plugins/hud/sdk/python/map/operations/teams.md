<!-- Generated file — do not edit; regenerated with the SDK. -->

# Teams — operations

Accessor: `client.teams` · Source: `hud/apis/teams.py` · 6 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.teams.invite_team_members_v2_team_invitations_post

- **Route**: `POST /v2/team/invitations`
- **Signature**: `def invite_team_members_v2_team_invitations_post(body: TeamInviteRequest | TeamInviteRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `TeamInviteResponse`
- **Returns (raw)**: `ApiResult[TeamInviteResponse, InviteTeamMembersV2TeamInvitationsPostErrorBody]`
- **Error**: `InviteTeamMembersV2TeamInvitationsPostErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401, 403, 404, 409, 429, 502, 503] · `HttpValidationError` [422] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `TeamInviteRequest` | `hud/models/team_invite_request.py` |
| `TeamInviteRequestDict` | `hud/models/team_invite_request.py` |
| `TeamInviteResponse` | `hud/models/team_invite_response.py` |
| `InviteTeamMembersV2TeamInvitationsPostErrorBody` | `hud/errors/invite_team_members_v2_team_invitations_post_error.py` |
| `ErrorResponse` | `hud/models/error_response.py` |
| `HttpValidationError` | `hud/models/http_validation_error.py` |

### client.teams.list_team_invitations_v2_team_invitations_get

- **Route**: `GET /v2/team/invitations`
- **Signature**: `def list_team_invitations_v2_team_invitations_get(*, request_options: RequestOptionsOrDict | None = None)`
- **Returns (parsed)**: `TeamInvitationsResponse`
- **Returns (raw)**: `ApiResult[TeamInvitationsResponse, ListTeamInvitationsV2TeamInvitationsGetErrorBody]`
- **Error**: `ListTeamInvitationsV2TeamInvitationsGetErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401, 403, 404, 409, 429, 502, 503] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `TeamInvitationsResponse` | `hud/models/team_invitations_response.py` |
| `ListTeamInvitationsV2TeamInvitationsGetErrorBody` | `hud/errors/list_team_invitations_v2_team_invitations_get_error.py` |
| `ErrorResponse` | `hud/models/error_response.py` |

### client.teams.list_team_members_v2_team_members_get

- **Route**: `GET /v2/team/members`
- **Signature**: `def list_team_members_v2_team_members_get(*, request_options: RequestOptionsOrDict | None = None)`
- **Returns (parsed)**: `TeamMembersResponse`
- **Returns (raw)**: `ApiResult[TeamMembersResponse, ListTeamMembersV2TeamMembersGetErrorBody]`
- **Error**: `ListTeamMembersV2TeamMembersGetErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401, 403, 404, 409, 429, 503] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `TeamMembersResponse` | `hud/models/team_members_response.py` |
| `ListTeamMembersV2TeamMembersGetErrorBody` | `hud/errors/list_team_members_v2_team_members_get_error.py` |
| `ErrorResponse` | `hud/models/error_response.py` |

### client.teams.remove_team_members_v2_team_members_batch_remove_post

- **Route**: `POST /v2/team/members/batch-remove`
- **Signature**: `def remove_team_members_v2_team_members_batch_remove_post(body: TeamMemberRemoveRequest | TeamMemberRemoveRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `TeamMemberBatchResponse`
- **Returns (raw)**: `ApiResult[TeamMemberBatchResponse, RemoveTeamMembersV2TeamMembersBatchRemovePostErrorBody]`
- **Error**: `RemoveTeamMembersV2TeamMembersBatchRemovePostErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401, 403, 404, 409, 429, 502, 503] · `HttpValidationError` [422] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `TeamMemberRemoveRequest` | `hud/models/team_member_remove_request.py` |
| `TeamMemberRemoveRequestDict` | `hud/models/team_member_remove_request.py` |
| `TeamMemberBatchResponse` | `hud/models/team_member_batch_response.py` |
| `RemoveTeamMembersV2TeamMembersBatchRemovePostErrorBody` | `hud/errors/remove_team_members_v2_team_members_batch_remove_post_error.py` |
| `ErrorResponse` | `hud/models/error_response.py` |
| `HttpValidationError` | `hud/models/http_validation_error.py` |

### client.teams.revoke_team_invitations_v2_team_invitations_batch_revoke_post

- **Route**: `POST /v2/team/invitations/batch-revoke`
- **Signature**: `def revoke_team_invitations_v2_team_invitations_batch_revoke_post(body: TeamInvitationRevokeRequest | TeamInvitationRevokeRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `TeamInvitationRevokeResponse`
- **Returns (raw)**: `ApiResult[TeamInvitationRevokeResponse, RevokeTeamInvitationsV2TeamInvitationsBatchRevokePostErrorBody]`
- **Error**: `RevokeTeamInvitationsV2TeamInvitationsBatchRevokePostErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401, 403, 404, 409, 429, 502, 503] · `HttpValidationError` [422] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `TeamInvitationRevokeRequest` | `hud/models/team_invitation_revoke_request.py` |
| `TeamInvitationRevokeRequestDict` | `hud/models/team_invitation_revoke_request.py` |
| `TeamInvitationRevokeResponse` | `hud/models/team_invitation_revoke_response.py` |
| `RevokeTeamInvitationsV2TeamInvitationsBatchRevokePostErrorBody` | `hud/errors/revoke_team_invitations_v2_team_invitations_batch_revoke_post_error.py` |
| `ErrorResponse` | `hud/models/error_response.py` |
| `HttpValidationError` | `hud/models/http_validation_error.py` |

### client.teams.update_team_member_roles_v2_team_members_batch_role_post

- **Route**: `POST /v2/team/members/batch-role`
- **Signature**: `def update_team_member_roles_v2_team_members_batch_role_post(body: TeamMemberRoleUpdateRequest | TeamMemberRoleUpdateRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `TeamMemberBatchResponse`
- **Returns (raw)**: `ApiResult[TeamMemberBatchResponse, UpdateTeamMemberRolesV2TeamMembersBatchRolePostErrorBody]`
- **Error**: `UpdateTeamMemberRolesV2TeamMembersBatchRolePostErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401, 403, 404, 409, 429, 502, 503] · `HttpValidationError` [422] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `TeamMemberRoleUpdateRequest` | `hud/models/team_member_role_update_request.py` |
| `TeamMemberRoleUpdateRequestDict` | `hud/models/team_member_role_update_request.py` |
| `TeamMemberBatchResponse` | `hud/models/team_member_batch_response.py` |
| `UpdateTeamMemberRolesV2TeamMembersBatchRolePostErrorBody` | `hud/errors/update_team_member_roles_v2_team_members_batch_role_post_error.py` |
| `ErrorResponse` | `hud/models/error_response.py` |
| `HttpValidationError` | `hud/models/http_validation_error.py` |

