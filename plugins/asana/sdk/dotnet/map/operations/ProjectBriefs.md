<!-- Generated file — do not edit; regenerated with the SDK. -->

# ProjectBriefs — operations

Accessor: `client.ProjectBriefs` · Source: `src/Asana/Api/ProjectBriefs.cs` · 4 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateProjectBrief

- **Auth**: `options.PersonalAccessToken` OR `options.Oauth2`
- **Signature**: `CreateProjectBrief(CreateProjectBriefRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectGid`, `Body`
- **Query params (wire ← C#)**: `opt_pretty` ← `OptPretty`, `opt_fields` ← `OptFields` (comma-separated)
- **Returns**: `ProjectsProjectBriefsResponse`
- **Error**: `ApiException<CreateProjectBriefError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 402, 403, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateProjectBriefRequest` | `src/Asana/Requests/ProjectBriefs/CreateProjectBriefRequest.cs` |
| `ProjectsProjectBriefsRequest` | `src/Asana/Models/ProjectsProjectBriefsRequest.cs` |
| `ProjectsProjectBriefsResponse` | `src/Asana/Models/ProjectsProjectBriefsResponse.cs` |
| `CreateProjectBriefError` | `src/Asana/Errors/CreateProjectBriefError.cs` |
| `ErrorResponseModel` | `src/Asana/Models/ErrorResponseModel.cs` |

### DeleteProjectBrief

- **Auth**: `options.PersonalAccessToken` OR `options.Oauth2`
- **Signature**: `DeleteProjectBrief(DeleteProjectBriefRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectBriefGid`
- **Query params (wire ← C#)**: `opt_pretty` ← `OptPretty`, `opt_fields` ← `OptFields` (comma-separated)
- **Returns**: `ProjectBriefsResponse2`
- **Error**: `ApiException<DeleteProjectBriefError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteProjectBriefRequest` | `src/Asana/Requests/ProjectBriefs/DeleteProjectBriefRequest.cs` |
| `ProjectBriefsResponse2` | `src/Asana/Models/ProjectBriefsResponse2.cs` |
| `DeleteProjectBriefError` | `src/Asana/Errors/DeleteProjectBriefError.cs` |
| `ErrorResponseModel` | `src/Asana/Models/ErrorResponseModel.cs` |

### GetProjectBrief

- **Auth**: `options.PersonalAccessToken` OR `options.Oauth2`
- **Signature**: `GetProjectBrief(GetProjectBriefRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectBriefGid`
- **Query params (wire ← C#)**: `opt_pretty` ← `OptPretty`, `opt_fields` ← `OptFields` (comma-separated)
- **Returns**: `ProjectBriefsResponse`
- **Error**: `ApiException<GetProjectBriefError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 402, 403, 404, 424, 500, 501, 503, 504] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetProjectBriefRequest` | `src/Asana/Requests/ProjectBriefs/GetProjectBriefRequest.cs` |
| `ProjectBriefsResponse` | `src/Asana/Models/ProjectBriefsResponse.cs` |
| `GetProjectBriefError` | `src/Asana/Errors/GetProjectBriefError.cs` |
| `ErrorResponseModel` | `src/Asana/Models/ErrorResponseModel.cs` |

### UpdateProjectBrief

- **Auth**: `options.PersonalAccessToken` OR `options.Oauth2`
- **Signature**: `UpdateProjectBrief(UpdateProjectBriefRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectBriefGid`, `Body`
- **Query params (wire ← C#)**: `opt_pretty` ← `OptPretty`, `opt_fields` ← `OptFields` (comma-separated)
- **Returns**: `ProjectBriefsResponse`
- **Error**: `ApiException<UpdateProjectBriefError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UpdateProjectBriefRequest` | `src/Asana/Requests/ProjectBriefs/UpdateProjectBriefRequest.cs` |
| `ProjectBriefsRequest` | `src/Asana/Models/ProjectBriefsRequest.cs` |
| `ProjectBriefsResponse` | `src/Asana/Models/ProjectBriefsResponse.cs` |
| `UpdateProjectBriefError` | `src/Asana/Errors/UpdateProjectBriefError.cs` |
| `ErrorResponseModel` | `src/Asana/Models/ErrorResponseModel.cs` |

