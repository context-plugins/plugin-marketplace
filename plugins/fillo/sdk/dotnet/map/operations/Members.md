<!-- Generated file — do not edit; regenerated with the SDK. -->

# Members — operations

Accessor: `client.Members` · Source: `src/Fillo/Api/Members.cs` · 5 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CancelWorkspaceInvitation

- **Auth**: `options.BearerAuth`
- **Signature**: `CancelWorkspaceInvitation(CancelWorkspaceInvitationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Returns**: `ApiV1ManageMembersInvitesResponse1`
- **Error**: `ApiException<CancelWorkspaceInvitationError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 403, 404, 409, 429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CancelWorkspaceInvitationRequest` | `src/Fillo/Requests/Members/CancelWorkspaceInvitationRequest.cs` |
| `ApiV1ManageMembersInvitesResponse1` | `src/Fillo/Models/ApiV1ManageMembersInvitesResponse1.cs` |
| `CancelWorkspaceInvitationError` | `src/Fillo/Errors/CancelWorkspaceInvitationError.cs` |
| `Error` | `src/Fillo/Models/Error.cs` |

### InviteWorkspaceMember

- **Auth**: `options.BearerAuth`
- **Signature**: `InviteWorkspaceMember(InviteWorkspaceMemberRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `ApiV1ManageMembersInvitesResponse`
- **Error**: `ApiException<InviteWorkspaceMemberError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 403, 404, 409, 413, 429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `InviteWorkspaceMemberRequest` | `src/Fillo/Requests/Members/InviteWorkspaceMemberRequest.cs` |
| `ApiV1ManageMembersInvitesRequest` | `src/Fillo/Models/ApiV1ManageMembersInvitesRequest.cs` |
| `ApiV1ManageMembersInvitesResponse` | `src/Fillo/Models/ApiV1ManageMembersInvitesResponse.cs` |
| `InviteWorkspaceMemberError` | `src/Fillo/Errors/InviteWorkspaceMemberError.cs` |
| `Error` | `src/Fillo/Models/Error.cs` |

### ListWorkspaceMembers

- **Auth**: `options.BearerAuth`
- **Signature**: `ListWorkspaceMembers(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `WorkspaceMembers`
- **Error**: `ApiException<ListWorkspaceMembersError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 403, 404, 429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `WorkspaceMembers` | `src/Fillo/Models/WorkspaceMembers.cs` |
| `ListWorkspaceMembersError` | `src/Fillo/Errors/ListWorkspaceMembersError.cs` |
| `Error` | `src/Fillo/Models/Error.cs` |

### RemoveWorkspaceMember

- **Auth**: `options.BearerAuth`
- **Signature**: `RemoveWorkspaceMember(RemoveWorkspaceMemberRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`, `Body`
- **Returns**: `ApiV1ManageMembersResponse1`
- **Error**: `ApiException<RemoveWorkspaceMemberError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 403, 404, 409, 413, 429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `RemoveWorkspaceMemberRequest` | `src/Fillo/Requests/Members/RemoveWorkspaceMemberRequest.cs` |
| `ConfirmTarget` | `src/Fillo/Models/ConfirmTarget.cs` |
| `ApiV1ManageMembersResponse1` | `src/Fillo/Models/ApiV1ManageMembersResponse1.cs` |
| `RemoveWorkspaceMemberError` | `src/Fillo/Errors/RemoveWorkspaceMemberError.cs` |
| `Error` | `src/Fillo/Models/Error.cs` |

### SetMemberRole

- **Auth**: `options.BearerAuth`
- **Signature**: `SetMemberRole(SetMemberRoleRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`, `Body`
- **Returns**: `ApiV1ManageMembersResponse`
- **Error**: `ApiException<SetMemberRoleError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 403, 404, 409, 413, 429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `SetMemberRoleRequest` | `src/Fillo/Requests/Members/SetMemberRoleRequest.cs` |
| `ApiV1ManageMembersRequest` | `src/Fillo/Models/ApiV1ManageMembersRequest.cs` |
| `ApiV1ManageMembersResponse` | `src/Fillo/Models/ApiV1ManageMembersResponse.cs` |
| `SetMemberRoleError` | `src/Fillo/Errors/SetMemberRoleError.cs` |
| `Error` | `src/Fillo/Models/Error.cs` |

