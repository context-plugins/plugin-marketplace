<!-- Generated file — do not edit; regenerated with the SDK. -->

# Projects — operations

Accessor: `client.Projects` · Source: `src/CodeQr/Api/Projects.cs` · 2 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### GetProject

- **Auth**: `options.Token`
- **Signature**: `GetProject(GetProjectRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectSlug`
- **Returns**: `Project`
- **Error**: `ApiException<GetProjectError>` — **Case A (typed)**
- **Error accessors**: `TryGetM4001([NotNullWhen(true)] out M4001? value)` [400, 401, 403, 404, 409, 410, 422, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetProjectRequest` | `src/CodeQr/Requests/Projects/GetProjectRequest.cs` |
| `Project` | `src/CodeQr/Models/Project.cs` |
| `GetProjectError` | `src/CodeQr/Errors/GetProjectError.cs` |
| `M4001` | `src/CodeQr/Models/M4001.cs` |

### GetProjects

- **Auth**: `options.Token`
- **Signature**: `GetProjects(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `IReadOnlyList<Project>`
- **Error**: `ApiException<GetProjectsError>` — **Case A (typed)**
- **Error accessors**: `TryGetM4001([NotNullWhen(true)] out M4001? value)` [400, 401, 403, 404, 409, 410, 422, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `Project` | `src/CodeQr/Models/Project.cs` |
| `GetProjectsError` | `src/CodeQr/Errors/GetProjectsError.cs` |
| `M4001` | `src/CodeQr/Models/M4001.cs` |

