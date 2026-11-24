<!-- Generated file — do not edit; regenerated with the SDK. -->

# ProjectStatuses — operations

Accessor: `client.ProjectStatuses` · Source: `src/Asana/Api/ProjectStatuses.cs` · 4 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateProjectStatusForProject

- **Auth**: `options.PersonalAccessToken` OR `options.Oauth2`
- **Signature**: `CreateProjectStatusForProject(CreateProjectStatusForProjectRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectGid`, `Body`
- **Query params (wire ← C#)**: `opt_pretty` ← `OptPretty`, `opt_fields` ← `OptFields` (comma-separated)
- **Returns**: `ProjectsProjectStatusesResponse1`
- **Error**: `ApiException<CreateProjectStatusForProjectError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateProjectStatusForProjectRequest` | `src/Asana/Requests/ProjectStatuses/CreateProjectStatusForProjectRequest.cs` |
| `ProjectsProjectStatusesRequest` | `src/Asana/Models/ProjectsProjectStatusesRequest.cs` |
| `ProjectsProjectStatusesResponse1` | `src/Asana/Models/ProjectsProjectStatusesResponse1.cs` |
| `CreateProjectStatusForProjectError` | `src/Asana/Errors/CreateProjectStatusForProjectError.cs` |
| `ErrorResponseModel` | `src/Asana/Models/ErrorResponseModel.cs` |

### DeleteProjectStatus

- **Auth**: `options.PersonalAccessToken` OR `options.Oauth2`
- **Signature**: `DeleteProjectStatus(DeleteProjectStatusRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectStatusGid`
- **Query params (wire ← C#)**: `opt_pretty` ← `OptPretty`, `opt_fields` ← `OptFields` (comma-separated)
- **Returns**: `ProjectStatusesResponse1`
- **Error**: `ApiException<DeleteProjectStatusError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteProjectStatusRequest` | `src/Asana/Requests/ProjectStatuses/DeleteProjectStatusRequest.cs` |
| `ProjectStatusesResponse1` | `src/Asana/Models/ProjectStatusesResponse1.cs` |
| `DeleteProjectStatusError` | `src/Asana/Errors/DeleteProjectStatusError.cs` |
| `ErrorResponseModel` | `src/Asana/Models/ErrorResponseModel.cs` |

### GetProjectStatus

- **Auth**: `options.PersonalAccessToken` OR `options.Oauth2`
- **Signature**: `GetProjectStatus(GetProjectStatusRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectStatusGid`
- **Query params (wire ← C#)**: `opt_pretty` ← `OptPretty`, `opt_fields` ← `OptFields` (comma-separated)
- **Returns**: `ProjectStatusesResponse`
- **Error**: `ApiException<GetProjectStatusError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetProjectStatusRequest` | `src/Asana/Requests/ProjectStatuses/GetProjectStatusRequest.cs` |
| `ProjectStatusesResponse` | `src/Asana/Models/ProjectStatusesResponse.cs` |
| `GetProjectStatusError` | `src/Asana/Errors/GetProjectStatusError.cs` |
| `ErrorResponseModel` | `src/Asana/Models/ErrorResponseModel.cs` |

### GetProjectStatusesForProject

- **Auth**: `options.PersonalAccessToken` OR `options.Oauth2`
- **Signature**: `GetProjectStatusesForProject(GetProjectStatusesForProjectRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectGid`
- **Query params (wire ← C#)**: `opt_pretty` ← `OptPretty`, `opt_fields` ← `OptFields` (comma-separated), `limit` ← `Limit`, `offset` ← `Offset`
- **Returns**: `ProjectsProjectStatusesResponse`
- **Error**: `ApiException<GetProjectStatusesForProjectError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetProjectStatusesForProjectRequest` | `src/Asana/Requests/ProjectStatuses/GetProjectStatusesForProjectRequest.cs` |
| `ProjectsProjectStatusesResponse` | `src/Asana/Models/ProjectsProjectStatusesResponse.cs` |
| `GetProjectStatusesForProjectError` | `src/Asana/Errors/GetProjectStatusesForProjectError.cs` |
| `ErrorResponseModel` | `src/Asana/Models/ErrorResponseModel.cs` |

