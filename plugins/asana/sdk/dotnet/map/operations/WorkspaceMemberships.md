<!-- Generated file — do not edit; regenerated with the SDK. -->

# WorkspaceMemberships — operations

Accessor: `client.WorkspaceMemberships` · Source: `src/Asana/Api/WorkspaceMemberships.cs` · 3 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### GetWorkspaceMembership

- **Auth**: `options.PersonalAccessToken` OR `options.Oauth2`
- **Signature**: `GetWorkspaceMembership(GetWorkspaceMembershipRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `WorkspaceMembershipGid`
- **Query params (wire ← C#)**: `opt_pretty` ← `OptPretty`, `opt_fields` ← `OptFields` (comma-separated)
- **Returns**: `WorkspaceMembershipsResponse`
- **Error**: `ApiException<GetWorkspaceMembershipError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetWorkspaceMembershipRequest` | `src/Asana/Requests/WorkspaceMemberships/GetWorkspaceMembershipRequest.cs` |
| `WorkspaceMembershipsResponse` | `src/Asana/Models/WorkspaceMembershipsResponse.cs` |
| `GetWorkspaceMembershipError` | `src/Asana/Errors/GetWorkspaceMembershipError.cs` |
| `ErrorResponseModel` | `src/Asana/Models/ErrorResponseModel.cs` |

### GetWorkspaceMembershipsForUser

- **Auth**: `options.PersonalAccessToken` OR `options.Oauth2`
- **Signature**: `GetWorkspaceMembershipsForUser(GetWorkspaceMembershipsForUserRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `UserGid`
- **Query params (wire ← C#)**: `opt_pretty` ← `OptPretty`, `opt_fields` ← `OptFields` (comma-separated), `limit` ← `Limit`, `offset` ← `Offset`
- **Returns**: `UsersWorkspaceMembershipsResponse`
- **Error**: `ApiException<GetWorkspaceMembershipsForUserError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetWorkspaceMembershipsForUserRequest` | `src/Asana/Requests/WorkspaceMemberships/GetWorkspaceMembershipsForUserRequest.cs` |
| `UsersWorkspaceMembershipsResponse` | `src/Asana/Models/UsersWorkspaceMembershipsResponse.cs` |
| `GetWorkspaceMembershipsForUserError` | `src/Asana/Errors/GetWorkspaceMembershipsForUserError.cs` |
| `ErrorResponseModel` | `src/Asana/Models/ErrorResponseModel.cs` |

### GetWorkspaceMembershipsForWorkspace

- **Auth**: `options.PersonalAccessToken` OR `options.Oauth2`
- **Signature**: `GetWorkspaceMembershipsForWorkspace(GetWorkspaceMembershipsForWorkspaceRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `WorkspaceGid`
- **Query params (wire ← C#)**: `user` ← `User`, `opt_pretty` ← `OptPretty`, `opt_fields` ← `OptFields` (comma-separated), `limit` ← `Limit`, `offset` ← `Offset`
- **Returns**: `WorkspacesWorkspaceMembershipsResponse`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `GetWorkspaceMembershipsForWorkspaceRequest` | `src/Asana/Requests/WorkspaceMemberships/GetWorkspaceMembershipsForWorkspaceRequest.cs` |
| `WorkspacesWorkspaceMembershipsResponse` | `src/Asana/Models/WorkspacesWorkspaceMembershipsResponse.cs` |

