<!-- Generated file — do not edit; regenerated with the SDK. -->

# Users — operations

Accessor: `client.Users` · Source: `src/Asana/Api/Users.cs` · 5 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### GetFavoritesForUser

- **Auth**: `options.PersonalAccessToken` OR `options.Oauth2`
- **Signature**: `GetFavoritesForUser(GetFavoritesForUserRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `UserGid`, `Workspace`
- **Query params (wire ← C#)**: `resource_type` ← `ResourceType`, `workspace` ← `Workspace`, `opt_pretty` ← `OptPretty`, `opt_fields` ← `OptFields` (comma-separated)
- **Returns**: `UsersFavoritesResponse`
- **Error**: `ApiException<GetFavoritesForUserError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetFavoritesForUserRequest` | `src/Asana/Requests/Users/GetFavoritesForUserRequest.cs` |
| `ResourceTypeAsanaUsersApi` | `src/Asana/Models/Enums/ResourceTypeAsanaUsersApi.cs` |
| `UsersFavoritesResponse` | `src/Asana/Models/UsersFavoritesResponse.cs` |
| `GetFavoritesForUserError` | `src/Asana/Errors/GetFavoritesForUserError.cs` |
| `ErrorResponseModel` | `src/Asana/Models/ErrorResponseModel.cs` |

### GetUser

- **Auth**: `options.PersonalAccessToken` OR `options.Oauth2`
- **Signature**: `GetUser(GetUserRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `UserGid`
- **Query params (wire ← C#)**: `opt_pretty` ← `OptPretty`, `opt_fields` ← `OptFields` (comma-separated)
- **Returns**: `UsersResponse1`
- **Error**: `ApiException<GetUserError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetUserRequest` | `src/Asana/Requests/Users/GetUserRequest.cs` |
| `UsersResponse1` | `src/Asana/Models/UsersResponse1.cs` |
| `GetUserError` | `src/Asana/Errors/GetUserError.cs` |
| `ErrorResponseModel` | `src/Asana/Models/ErrorResponseModel.cs` |

### GetUsers

- **Auth**: `options.PersonalAccessToken` OR `options.Oauth2`
- **Signature**: `GetUsers(GetUsersRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `workspace` ← `Workspace`, `team` ← `Team`, `opt_pretty` ← `OptPretty`, `opt_fields` ← `OptFields` (comma-separated), `limit` ← `Limit`, `offset` ← `Offset`
- **Returns**: `UsersResponse`
- **Error**: `ApiException<GetUsersError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetUsersRequest` | `src/Asana/Requests/Users/GetUsersRequest.cs` |
| `UsersResponse` | `src/Asana/Models/UsersResponse.cs` |
| `GetUsersError` | `src/Asana/Errors/GetUsersError.cs` |
| `ErrorResponseModel` | `src/Asana/Models/ErrorResponseModel.cs` |

### GetUsersForTeam

- **Auth**: `options.PersonalAccessToken` OR `options.Oauth2`
- **Signature**: `GetUsersForTeam(GetUsersForTeamRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `TeamGid`
- **Query params (wire ← C#)**: `opt_pretty` ← `OptPretty`, `opt_fields` ← `OptFields` (comma-separated), `offset` ← `Offset`
- **Returns**: `TeamsUsersResponse`
- **Error**: `ApiException<GetUsersForTeamError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetUsersForTeamRequest` | `src/Asana/Requests/Users/GetUsersForTeamRequest.cs` |
| `TeamsUsersResponse` | `src/Asana/Models/TeamsUsersResponse.cs` |
| `GetUsersForTeamError` | `src/Asana/Errors/GetUsersForTeamError.cs` |
| `ErrorResponseModel` | `src/Asana/Models/ErrorResponseModel.cs` |

### GetUsersForWorkspace

- **Auth**: `options.PersonalAccessToken` OR `options.Oauth2`
- **Signature**: `GetUsersForWorkspace(GetUsersForWorkspaceRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `WorkspaceGid`
- **Query params (wire ← C#)**: `opt_pretty` ← `OptPretty`, `opt_fields` ← `OptFields` (comma-separated), `offset` ← `Offset`
- **Returns**: `WorkspacesUsersResponse`
- **Error**: `ApiException<GetUsersForWorkspaceError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetUsersForWorkspaceRequest` | `src/Asana/Requests/Users/GetUsersForWorkspaceRequest.cs` |
| `WorkspacesUsersResponse` | `src/Asana/Models/WorkspacesUsersResponse.cs` |
| `GetUsersForWorkspaceError` | `src/Asana/Errors/GetUsersForWorkspaceError.cs` |
| `ErrorResponseModel` | `src/Asana/Models/ErrorResponseModel.cs` |

