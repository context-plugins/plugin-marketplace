<!-- Generated file — do not edit; regenerated with the SDK. -->

# Teams — operations

Accessor: `client.Teams` · Source: `src/Asana/Api/Teams.cs` · 7 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### AddUserForTeam

- **Auth**: `options.PersonalAccessToken` OR `options.Oauth2`
- **Signature**: `AddUserForTeam(AddUserForTeamRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `TeamGid`, `Body`
- **Query params (wire ← C#)**: `opt_pretty` ← `OptPretty`, `opt_fields` ← `OptFields` (comma-separated)
- **Returns**: `TeamsAddUserResponse`
- **Error**: `ApiException<AddUserForTeamError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `AddUserForTeamRequest` | `src/Asana/Requests/Teams/AddUserForTeamRequest.cs` |
| `TeamsAddUserRequest` | `src/Asana/Models/TeamsAddUserRequest.cs` |
| `TeamsAddUserResponse` | `src/Asana/Models/TeamsAddUserResponse.cs` |
| `AddUserForTeamError` | `src/Asana/Errors/AddUserForTeamError.cs` |
| `ErrorResponseModel` | `src/Asana/Models/ErrorResponseModel.cs` |

### CreateTeam

- **Auth**: `options.PersonalAccessToken` OR `options.Oauth2`
- **Signature**: `CreateTeam(CreateTeamRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Query params (wire ← C#)**: `opt_pretty` ← `OptPretty`, `opt_fields` ← `OptFields` (comma-separated), `limit` ← `Limit`, `offset` ← `Offset`
- **Returns**: `TeamsResponse`
- **Error**: `ApiException<CreateTeamError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateTeamRequest` | `src/Asana/Requests/Teams/CreateTeamRequest.cs` |
| `TeamsRequest` | `src/Asana/Models/TeamsRequest.cs` |
| `TeamsResponse` | `src/Asana/Models/TeamsResponse.cs` |
| `CreateTeamError` | `src/Asana/Errors/CreateTeamError.cs` |
| `ErrorResponseModel` | `src/Asana/Models/ErrorResponseModel.cs` |

### GetTeam

- **Auth**: `options.PersonalAccessToken` OR `options.Oauth2`
- **Signature**: `GetTeam(GetTeamRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `TeamGid`
- **Query params (wire ← C#)**: `opt_pretty` ← `OptPretty`, `opt_fields` ← `OptFields` (comma-separated), `limit` ← `Limit`, `offset` ← `Offset`
- **Returns**: `TeamsResponse`
- **Error**: `ApiException<GetTeamError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetTeamRequest` | `src/Asana/Requests/Teams/GetTeamRequest.cs` |
| `TeamsResponse` | `src/Asana/Models/TeamsResponse.cs` |
| `GetTeamError` | `src/Asana/Errors/GetTeamError.cs` |
| `ErrorResponseModel` | `src/Asana/Models/ErrorResponseModel.cs` |

### GetTeamsForUser

- **Auth**: `options.PersonalAccessToken` OR `options.Oauth2`
- **Signature**: `GetTeamsForUser(GetTeamsForUserRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `UserGid`, `Organization`
- **Query params (wire ← C#)**: `organization` ← `Organization`, `opt_pretty` ← `OptPretty`, `opt_fields` ← `OptFields` (comma-separated), `limit` ← `Limit`, `offset` ← `Offset`
- **Returns**: `UsersTeamsResponse`
- **Error**: `ApiException<GetTeamsForUserError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetTeamsForUserRequest` | `src/Asana/Requests/Teams/GetTeamsForUserRequest.cs` |
| `UsersTeamsResponse` | `src/Asana/Models/UsersTeamsResponse.cs` |
| `GetTeamsForUserError` | `src/Asana/Errors/GetTeamsForUserError.cs` |
| `ErrorResponseModel` | `src/Asana/Models/ErrorResponseModel.cs` |

### GetTeamsForWorkspace

- **Auth**: `options.PersonalAccessToken` OR `options.Oauth2`
- **Signature**: `GetTeamsForWorkspace(GetTeamsForWorkspaceRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `WorkspaceGid`
- **Query params (wire ← C#)**: `opt_pretty` ← `OptPretty`, `opt_fields` ← `OptFields` (comma-separated), `limit` ← `Limit`, `offset` ← `Offset`
- **Returns**: `WorkspacesTeamsResponse`
- **Error**: `ApiException<GetTeamsForWorkspaceError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetTeamsForWorkspaceRequest` | `src/Asana/Requests/Teams/GetTeamsForWorkspaceRequest.cs` |
| `WorkspacesTeamsResponse` | `src/Asana/Models/WorkspacesTeamsResponse.cs` |
| `GetTeamsForWorkspaceError` | `src/Asana/Errors/GetTeamsForWorkspaceError.cs` |
| `ErrorResponseModel` | `src/Asana/Models/ErrorResponseModel.cs` |

### RemoveUserForTeam

- **Auth**: `options.PersonalAccessToken` OR `options.Oauth2`
- **Signature**: `RemoveUserForTeam(RemoveUserForTeamRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `TeamGid`, `Body`
- **Query params (wire ← C#)**: `opt_pretty` ← `OptPretty`, `opt_fields` ← `OptFields` (comma-separated)
- **Returns**: `TeamsRemoveUserResponse`
- **Error**: `ApiException<RemoveUserForTeamError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `RemoveUserForTeamRequest` | `src/Asana/Requests/Teams/RemoveUserForTeamRequest.cs` |
| `TeamsRemoveUserRequest` | `src/Asana/Models/TeamsRemoveUserRequest.cs` |
| `TeamsRemoveUserResponse` | `src/Asana/Models/TeamsRemoveUserResponse.cs` |
| `RemoveUserForTeamError` | `src/Asana/Errors/RemoveUserForTeamError.cs` |
| `ErrorResponseModel` | `src/Asana/Models/ErrorResponseModel.cs` |

### UpdateTeam

- **Auth**: `options.PersonalAccessToken` OR `options.Oauth2`
- **Signature**: `UpdateTeam(UpdateTeamRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Query params (wire ← C#)**: `opt_pretty` ← `OptPretty`, `opt_fields` ← `OptFields` (comma-separated), `limit` ← `Limit`, `offset` ← `Offset`
- **Returns**: `TeamsResponse`
- **Error**: `ApiException<UpdateTeamError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UpdateTeamRequest` | `src/Asana/Requests/Teams/UpdateTeamRequest.cs` |
| `TeamsRequest` | `src/Asana/Models/TeamsRequest.cs` |
| `TeamsResponse` | `src/Asana/Models/TeamsResponse.cs` |
| `UpdateTeamError` | `src/Asana/Errors/UpdateTeamError.cs` |
| `ErrorResponseModel` | `src/Asana/Models/ErrorResponseModel.cs` |

