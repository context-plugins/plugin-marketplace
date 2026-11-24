<!-- Generated file — do not edit; regenerated with the SDK. -->

# Teams — operations

Accessor: `client.Teams` · Source: `src/Hud/Api/Teams.cs` · 6 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### InviteTeamMembersV2TeamInvitationsPost

- **Signature**: `InviteTeamMembersV2TeamInvitationsPost(InviteTeamMembersV2TeamInvitationsPostRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `TeamInviteResponse`
- **Error**: `ApiException<InviteTeamMembersV2TeamInvitationsPostError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 404, 409, 429, 502, 503] · `TryGetHttpValidationError([NotNullWhen(true)] out HttpValidationError? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `InviteTeamMembersV2TeamInvitationsPostRequest` | `src/Hud/Requests/Teams/InviteTeamMembersV2TeamInvitationsPostRequest.cs` |
| `TeamInviteRequest` | `src/Hud/Models/TeamInviteRequest.cs` |
| `TeamInviteResponse` | `src/Hud/Models/TeamInviteResponse.cs` |
| `InviteTeamMembersV2TeamInvitationsPostError` | `src/Hud/Errors/InviteTeamMembersV2TeamInvitationsPostError.cs` |
| `ErrorResponseModel` | `src/Hud/Models/ErrorResponseModel.cs` |
| `HttpValidationError` | `src/Hud/Models/HttpValidationError.cs` |

### ListTeamInvitationsV2TeamInvitationsGet

- **Signature**: `ListTeamInvitationsV2TeamInvitationsGet(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `TeamInvitationsResponse`
- **Error**: `ApiException<ListTeamInvitationsV2TeamInvitationsGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 404, 409, 429, 502, 503] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `TeamInvitationsResponse` | `src/Hud/Models/TeamInvitationsResponse.cs` |
| `ListTeamInvitationsV2TeamInvitationsGetError` | `src/Hud/Errors/ListTeamInvitationsV2TeamInvitationsGetError.cs` |
| `ErrorResponseModel` | `src/Hud/Models/ErrorResponseModel.cs` |

### ListTeamMembersV2TeamMembersGet

- **Signature**: `ListTeamMembersV2TeamMembersGet(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `TeamMembersResponse`
- **Error**: `ApiException<ListTeamMembersV2TeamMembersGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 404, 409, 429, 503] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `TeamMembersResponse` | `src/Hud/Models/TeamMembersResponse.cs` |
| `ListTeamMembersV2TeamMembersGetError` | `src/Hud/Errors/ListTeamMembersV2TeamMembersGetError.cs` |
| `ErrorResponseModel` | `src/Hud/Models/ErrorResponseModel.cs` |

### RemoveTeamMembersV2TeamMembersBatchRemovePost

- **Signature**: `RemoveTeamMembersV2TeamMembersBatchRemovePost(RemoveTeamMembersV2TeamMembersBatchRemovePostRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `TeamMemberBatchResponse`
- **Error**: `ApiException<RemoveTeamMembersV2TeamMembersBatchRemovePostError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 404, 409, 429, 502, 503] · `TryGetHttpValidationError([NotNullWhen(true)] out HttpValidationError? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `RemoveTeamMembersV2TeamMembersBatchRemovePostRequest` | `src/Hud/Requests/Teams/RemoveTeamMembersV2TeamMembersBatchRemovePostRequest.cs` |
| `TeamMemberRemoveRequest` | `src/Hud/Models/TeamMemberRemoveRequest.cs` |
| `TeamMemberBatchResponse` | `src/Hud/Models/TeamMemberBatchResponse.cs` |
| `RemoveTeamMembersV2TeamMembersBatchRemovePostError` | `src/Hud/Errors/RemoveTeamMembersV2TeamMembersBatchRemovePostError.cs` |
| `ErrorResponseModel` | `src/Hud/Models/ErrorResponseModel.cs` |
| `HttpValidationError` | `src/Hud/Models/HttpValidationError.cs` |

### RevokeTeamInvitationsV2TeamInvitationsBatchRevokePost

- **Signature**: `RevokeTeamInvitationsV2TeamInvitationsBatchRevokePost(RevokeTeamInvitationsV2TeamInvitationsBatchRevokePostRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `TeamInvitationRevokeResponse`
- **Error**: `ApiException<RevokeTeamInvitationsV2TeamInvitationsBatchRevokePostError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 404, 409, 429, 502, 503] · `TryGetHttpValidationError([NotNullWhen(true)] out HttpValidationError? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `RevokeTeamInvitationsV2TeamInvitationsBatchRevokePostRequest` | `src/Hud/Requests/Teams/RevokeTeamInvitationsV2TeamInvitationsBatchRevokePostRequest.cs` |
| `TeamInvitationRevokeRequest` | `src/Hud/Models/TeamInvitationRevokeRequest.cs` |
| `TeamInvitationRevokeResponse` | `src/Hud/Models/TeamInvitationRevokeResponse.cs` |
| `RevokeTeamInvitationsV2TeamInvitationsBatchRevokePostError` | `src/Hud/Errors/RevokeTeamInvitationsV2TeamInvitationsBatchRevokePostError.cs` |
| `ErrorResponseModel` | `src/Hud/Models/ErrorResponseModel.cs` |
| `HttpValidationError` | `src/Hud/Models/HttpValidationError.cs` |

### UpdateTeamMemberRolesV2TeamMembersBatchRolePost

- **Signature**: `UpdateTeamMemberRolesV2TeamMembersBatchRolePost(UpdateTeamMemberRolesV2TeamMembersBatchRolePostRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `TeamMemberBatchResponse`
- **Error**: `ApiException<UpdateTeamMemberRolesV2TeamMembersBatchRolePostError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 404, 409, 429, 502, 503] · `TryGetHttpValidationError([NotNullWhen(true)] out HttpValidationError? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UpdateTeamMemberRolesV2TeamMembersBatchRolePostRequest` | `src/Hud/Requests/Teams/UpdateTeamMemberRolesV2TeamMembersBatchRolePostRequest.cs` |
| `TeamMemberRoleUpdateRequest` | `src/Hud/Models/TeamMemberRoleUpdateRequest.cs` |
| `TeamMemberBatchResponse` | `src/Hud/Models/TeamMemberBatchResponse.cs` |
| `UpdateTeamMemberRolesV2TeamMembersBatchRolePostError` | `src/Hud/Errors/UpdateTeamMemberRolesV2TeamMembersBatchRolePostError.cs` |
| `ErrorResponseModel` | `src/Hud/Models/ErrorResponseModel.cs` |
| `HttpValidationError` | `src/Hud/Models/HttpValidationError.cs` |

