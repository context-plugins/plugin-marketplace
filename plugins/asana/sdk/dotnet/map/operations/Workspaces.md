<!-- Generated file — do not edit; regenerated with the SDK. -->

# Workspaces — operations

Accessor: `client.Workspaces` · Source: `src/Asana/Api/Workspaces.cs` · 5 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### AddUserForWorkspace

- **Auth**: `options.PersonalAccessToken` OR `options.Oauth2`
- **Signature**: `AddUserForWorkspace(AddUserForWorkspaceRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `WorkspaceGid`, `Body`
- **Query params (wire ← C#)**: `opt_pretty` ← `OptPretty`, `opt_fields` ← `OptFields` (comma-separated)
- **Returns**: `WorkspacesAddUserResponse`
- **Error**: `ApiException<AddUserForWorkspaceError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `AddUserForWorkspaceRequest` | `src/Asana/Requests/Workspaces/AddUserForWorkspaceRequest.cs` |
| `WorkspacesAddUserRequest` | `src/Asana/Models/WorkspacesAddUserRequest.cs` |
| `WorkspacesAddUserResponse` | `src/Asana/Models/WorkspacesAddUserResponse.cs` |
| `AddUserForWorkspaceError` | `src/Asana/Errors/AddUserForWorkspaceError.cs` |
| `ErrorResponseModel` | `src/Asana/Models/ErrorResponseModel.cs` |

### GetWorkspace

- **Auth**: `options.PersonalAccessToken` OR `options.Oauth2`
- **Signature**: `GetWorkspace(GetWorkspaceRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `WorkspaceGid`
- **Query params (wire ← C#)**: `opt_pretty` ← `OptPretty`, `opt_fields` ← `OptFields` (comma-separated)
- **Returns**: `WorkspacesResponse1`
- **Error**: `ApiException<GetWorkspaceError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetWorkspaceRequest` | `src/Asana/Requests/Workspaces/GetWorkspaceRequest.cs` |
| `WorkspacesResponse1` | `src/Asana/Models/WorkspacesResponse1.cs` |
| `GetWorkspaceError` | `src/Asana/Errors/GetWorkspaceError.cs` |
| `ErrorResponseModel` | `src/Asana/Models/ErrorResponseModel.cs` |

### GetWorkspaces

- **Auth**: `options.PersonalAccessToken` OR `options.Oauth2`
- **Signature**: `GetWorkspaces(GetWorkspacesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `opt_pretty` ← `OptPretty`, `opt_fields` ← `OptFields` (comma-separated), `limit` ← `Limit`, `offset` ← `Offset`
- **Returns**: `WorkspacesResponse`
- **Error**: `ApiException<GetWorkspacesError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetWorkspacesRequest` | `src/Asana/Requests/Workspaces/GetWorkspacesRequest.cs` |
| `WorkspacesResponse` | `src/Asana/Models/WorkspacesResponse.cs` |
| `GetWorkspacesError` | `src/Asana/Errors/GetWorkspacesError.cs` |
| `ErrorResponseModel` | `src/Asana/Models/ErrorResponseModel.cs` |

### RemoveUserForWorkspace

- **Auth**: `options.PersonalAccessToken` OR `options.Oauth2`
- **Signature**: `RemoveUserForWorkspace(RemoveUserForWorkspaceRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `WorkspaceGid`, `Body`
- **Query params (wire ← C#)**: `opt_pretty` ← `OptPretty`, `opt_fields` ← `OptFields` (comma-separated)
- **Returns**: `WorkspacesRemoveUserResponse`
- **Error**: `ApiException<RemoveUserForWorkspaceError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `RemoveUserForWorkspaceRequest` | `src/Asana/Requests/Workspaces/RemoveUserForWorkspaceRequest.cs` |
| `WorkspacesRemoveUserRequest` | `src/Asana/Models/WorkspacesRemoveUserRequest.cs` |
| `WorkspacesRemoveUserResponse` | `src/Asana/Models/WorkspacesRemoveUserResponse.cs` |
| `RemoveUserForWorkspaceError` | `src/Asana/Errors/RemoveUserForWorkspaceError.cs` |
| `ErrorResponseModel` | `src/Asana/Models/ErrorResponseModel.cs` |

### UpdateWorkspace

- **Auth**: `options.PersonalAccessToken` OR `options.Oauth2`
- **Signature**: `UpdateWorkspace(UpdateWorkspaceRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `WorkspaceGid`, `Body`
- **Query params (wire ← C#)**: `opt_pretty` ← `OptPretty`, `opt_fields` ← `OptFields` (comma-separated)
- **Returns**: `WorkspacesResponse1`
- **Error**: `ApiException<UpdateWorkspaceError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UpdateWorkspaceRequest` | `src/Asana/Requests/Workspaces/UpdateWorkspaceRequest.cs` |
| `WorkspacesRequest` | `src/Asana/Models/WorkspacesRequest.cs` |
| `WorkspacesResponse1` | `src/Asana/Models/WorkspacesResponse1.cs` |
| `UpdateWorkspaceError` | `src/Asana/Errors/UpdateWorkspaceError.cs` |
| `ErrorResponseModel` | `src/Asana/Models/ErrorResponseModel.cs` |

