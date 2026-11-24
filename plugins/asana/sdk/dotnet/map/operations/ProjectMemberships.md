<!-- Generated file — do not edit; regenerated with the SDK. -->

# ProjectMemberships — operations

Accessor: `client.ProjectMemberships` · Source: `src/Asana/Api/ProjectMemberships.cs` · 2 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### GetProjectMembership

- **Auth**: `options.PersonalAccessToken` OR `options.Oauth2`
- **Signature**: `GetProjectMembership(GetProjectMembershipRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectMembershipGid`
- **Query params (wire ← C#)**: `opt_pretty` ← `OptPretty`, `opt_fields` ← `OptFields` (comma-separated)
- **Returns**: `ProjectMembershipsResponse`
- **Error**: `ApiException<GetProjectMembershipError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetProjectMembershipRequest` | `src/Asana/Requests/ProjectMemberships/GetProjectMembershipRequest.cs` |
| `ProjectMembershipsResponse` | `src/Asana/Models/ProjectMembershipsResponse.cs` |
| `GetProjectMembershipError` | `src/Asana/Errors/GetProjectMembershipError.cs` |
| `ErrorResponseModel` | `src/Asana/Models/ErrorResponseModel.cs` |

### GetProjectMembershipsForProject

- **Auth**: `options.PersonalAccessToken` OR `options.Oauth2`
- **Signature**: `GetProjectMembershipsForProject(GetProjectMembershipsForProjectRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectGid`
- **Query params (wire ← C#)**: `user` ← `User`, `opt_pretty` ← `OptPretty`, `opt_fields` ← `OptFields` (comma-separated), `limit` ← `Limit`, `offset` ← `Offset`
- **Returns**: `ProjectsProjectMembershipsResponse`
- **Error**: `ApiException<GetProjectMembershipsForProjectError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetProjectMembershipsForProjectRequest` | `src/Asana/Requests/ProjectMemberships/GetProjectMembershipsForProjectRequest.cs` |
| `ProjectsProjectMembershipsResponse` | `src/Asana/Models/ProjectsProjectMembershipsResponse.cs` |
| `GetProjectMembershipsForProjectError` | `src/Asana/Errors/GetProjectMembershipsForProjectError.cs` |
| `ErrorResponseModel` | `src/Asana/Models/ErrorResponseModel.cs` |

