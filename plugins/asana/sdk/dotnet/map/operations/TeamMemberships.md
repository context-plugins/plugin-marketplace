<!-- Generated file — do not edit; regenerated with the SDK. -->

# TeamMemberships — operations

Accessor: `client.TeamMemberships` · Source: `src/Asana/Api/TeamMemberships.cs` · 4 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### GetTeamMembership

- **Auth**: `options.PersonalAccessToken` OR `options.Oauth2`
- **Signature**: `GetTeamMembership(GetTeamMembershipRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `TeamMembershipGid`
- **Query params (wire ← C#)**: `opt_pretty` ← `OptPretty`, `opt_fields` ← `OptFields` (comma-separated)
- **Returns**: `TeamMembershipsResponse`
- **Error**: `ApiException<GetTeamMembershipError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetTeamMembershipRequest` | `src/Asana/Requests/TeamMemberships/GetTeamMembershipRequest.cs` |
| `TeamMembershipsResponse` | `src/Asana/Models/TeamMembershipsResponse.cs` |
| `GetTeamMembershipError` | `src/Asana/Errors/GetTeamMembershipError.cs` |
| `ErrorResponseModel` | `src/Asana/Models/ErrorResponseModel.cs` |

### GetTeamMemberships

- **Auth**: `options.PersonalAccessToken` OR `options.Oauth2`
- **Signature**: `GetTeamMemberships(GetTeamMembershipsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `opt_pretty` ← `OptPretty`, `opt_fields` ← `OptFields` (comma-separated), `limit` ← `Limit`, `offset` ← `Offset`, `team` ← `Team`, `user` ← `User`, `workspace` ← `Workspace`
- **Returns**: `TeamMembershipsResponse1`
- **Error**: `ApiException<GetTeamMembershipsError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetTeamMembershipsRequest` | `src/Asana/Requests/TeamMemberships/GetTeamMembershipsRequest.cs` |
| `TeamMembershipsResponse1` | `src/Asana/Models/TeamMembershipsResponse1.cs` |
| `GetTeamMembershipsError` | `src/Asana/Errors/GetTeamMembershipsError.cs` |
| `ErrorResponseModel` | `src/Asana/Models/ErrorResponseModel.cs` |

### GetTeamMembershipsForTeam

- **Auth**: `options.PersonalAccessToken` OR `options.Oauth2`
- **Signature**: `GetTeamMembershipsForTeam(GetTeamMembershipsForTeamRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `TeamGid`
- **Query params (wire ← C#)**: `opt_pretty` ← `OptPretty`, `opt_fields` ← `OptFields` (comma-separated), `limit` ← `Limit`, `offset` ← `Offset`
- **Returns**: `TeamsTeamMembershipsResponse`
- **Error**: `ApiException<GetTeamMembershipsForTeamError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetTeamMembershipsForTeamRequest` | `src/Asana/Requests/TeamMemberships/GetTeamMembershipsForTeamRequest.cs` |
| `TeamsTeamMembershipsResponse` | `src/Asana/Models/TeamsTeamMembershipsResponse.cs` |
| `GetTeamMembershipsForTeamError` | `src/Asana/Errors/GetTeamMembershipsForTeamError.cs` |
| `ErrorResponseModel` | `src/Asana/Models/ErrorResponseModel.cs` |

### GetTeamMembershipsForUser

- **Auth**: `options.PersonalAccessToken` OR `options.Oauth2`
- **Signature**: `GetTeamMembershipsForUser(GetTeamMembershipsForUserRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `UserGid`, `Workspace`
- **Query params (wire ← C#)**: `workspace` ← `Workspace`, `opt_pretty` ← `OptPretty`, `opt_fields` ← `OptFields` (comma-separated), `limit` ← `Limit`, `offset` ← `Offset`
- **Returns**: `UsersTeamMembershipsResponse`
- **Error**: `ApiException<GetTeamMembershipsForUserError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetTeamMembershipsForUserRequest` | `src/Asana/Requests/TeamMemberships/GetTeamMembershipsForUserRequest.cs` |
| `UsersTeamMembershipsResponse` | `src/Asana/Models/UsersTeamMembershipsResponse.cs` |
| `GetTeamMembershipsForUserError` | `src/Asana/Errors/GetTeamMembershipsForUserError.cs` |
| `ErrorResponseModel` | `src/Asana/Models/ErrorResponseModel.cs` |

