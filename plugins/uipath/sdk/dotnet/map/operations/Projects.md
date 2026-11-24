<!-- Generated file — do not edit; regenerated with the SDK. -->

# Projects — operations

Accessor: `client.Projects` · Source: `src/UiPath/Api/Projects.cs` · 3 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateProject

- **Server group**: `DefaultUiPathTestManagerProjectsApi`
- **Auth**: `options.BearerAuth`
- **Signature**: `CreateProject(CreateProjectOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `ProjectUiPathTestManagerProjectsApi`
- **Error**: `ApiException<CreateProjectError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseUiPathTestManagerProjectsApi([NotNullWhen(true)] out ErrorResponseUiPathTestManagerProjectsApi? value)` [400, 401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateProjectOperationRequest` | `src/UiPath/Requests/Projects/CreateProjectOperationRequest.cs` |
| `CreateProjectRequest` | `src/UiPath/Models/CreateProjectRequest.cs` |
| `ProjectUiPathTestManagerProjectsApi` | `src/UiPath/Models/ProjectUiPathTestManagerProjectsApi.cs` |
| `CreateProjectError` | `src/UiPath/Errors/CreateProjectError.cs` |
| `ErrorResponseUiPathTestManagerProjectsApi` | `src/UiPath/Models/ErrorResponseUiPathTestManagerProjectsApi.cs` |

### GetProject

- **Server group**: `DefaultUiPathTestManagerProjectsApi`
- **Auth**: `options.BearerAuth`
- **Signature**: `GetProject(GetProjectRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectId`
- **Returns**: `ProjectUiPathTestManagerProjectsApi`
- **Error**: `ApiException<GetProjectError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseUiPathTestManagerProjectsApi([NotNullWhen(true)] out ErrorResponseUiPathTestManagerProjectsApi? value)` [401, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetProjectRequest` | `src/UiPath/Requests/Projects/GetProjectRequest.cs` |
| `ProjectUiPathTestManagerProjectsApi` | `src/UiPath/Models/ProjectUiPathTestManagerProjectsApi.cs` |
| `GetProjectError` | `src/UiPath/Errors/GetProjectError.cs` |
| `ErrorResponseUiPathTestManagerProjectsApi` | `src/UiPath/Models/ErrorResponseUiPathTestManagerProjectsApi.cs` |

### ListProjects2

- **Server group**: `DefaultUiPathTestManagerProjectsApi`
- **Auth**: `options.BearerAuth`
- **Signature**: `ListProjects2(ListProjects2Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `page` ← `Page`, `pageSize` ← `PageSize`
- **Returns**: `ProjectListResponse`
- **Error**: `ApiException<ListProjects2Error>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseUiPathTestManagerProjectsApi([NotNullWhen(true)] out ErrorResponseUiPathTestManagerProjectsApi? value)` [401, 403] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListProjects2Request` | `src/UiPath/Requests/Projects/ListProjects2Request.cs` |
| `ProjectListResponse` | `src/UiPath/Models/ProjectListResponse.cs` |
| `ListProjects2Error` | `src/UiPath/Errors/ListProjects2Error.cs` |
| `ErrorResponseUiPathTestManagerProjectsApi` | `src/UiPath/Models/ErrorResponseUiPathTestManagerProjectsApi.cs` |

