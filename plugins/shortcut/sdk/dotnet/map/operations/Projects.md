<!-- Generated file — do not edit; regenerated with the SDK. -->

# Projects — operations

Accessor: `client.Projects` · Source: `src/Shortcut/Api/Projects.cs` · 6 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateProject

- **Auth**: `options.ApiToken`
- **Signature**: `CreateProject(CreateProjectRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `Project`
- **Error**: `ApiException<CreateProjectError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 404, 422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateProjectRequest` | `src/Shortcut/Requests/Projects/CreateProjectRequest.cs` |
| `CreateProject` | `src/Shortcut/Models/CreateProject.cs` |
| `Project` | `src/Shortcut/Models/Project.cs` |
| `CreateProjectError` | `src/Shortcut/Errors/CreateProjectError.cs` |

### DeleteProject

- **Auth**: `options.ApiToken`
- **Signature**: `DeleteProject(DeleteProjectRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectPublicId`
- **Returns**: `void` (Task)
- **Error**: `ApiException<DeleteProjectError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 404, 422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteProjectRequest` | `src/Shortcut/Requests/Projects/DeleteProjectRequest.cs` |
| `DeleteProjectError` | `src/Shortcut/Errors/DeleteProjectError.cs` |

### GetProject

- **Auth**: `options.ApiToken`
- **Signature**: `GetProject(GetProjectRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectPublicId`
- **Returns**: `Project`
- **Error**: `ApiException<GetProjectError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 404, 422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetProjectRequest` | `src/Shortcut/Requests/Projects/GetProjectRequest.cs` |
| `Project` | `src/Shortcut/Models/Project.cs` |
| `GetProjectError` | `src/Shortcut/Errors/GetProjectError.cs` |

### ListProjects

- **Auth**: `options.ApiToken`
- **Signature**: `ListProjects(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `IReadOnlyList<Project>`
- **Error**: `ApiException<ListProjectsError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 404, 422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `Project` | `src/Shortcut/Models/Project.cs` |
| `ListProjectsError` | `src/Shortcut/Errors/ListProjectsError.cs` |

### ListStories

- **Auth**: `options.ApiToken`
- **Signature**: `ListStories(ListStoriesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectPublicId`
- **Query params (wire ← C#)**: `includes_description` ← `IncludesDescription`
- **Returns**: `IReadOnlyList<StorySlim>`
- **Error**: `ApiException<ListStoriesError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 404, 422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListStoriesRequest` | `src/Shortcut/Requests/Projects/ListStoriesRequest.cs` |
| `StorySlim` | `src/Shortcut/Models/StorySlim.cs` |
| `ListStoriesError` | `src/Shortcut/Errors/ListStoriesError.cs` |

### UpdateProject

- **Auth**: `options.ApiToken`
- **Signature**: `UpdateProject(UpdateProjectRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectPublicId`, `Body`
- **Returns**: `Project`
- **Error**: `ApiException<UpdateProjectError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 404, 422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UpdateProjectRequest` | `src/Shortcut/Requests/Projects/UpdateProjectRequest.cs` |
| `UpdateProject` | `src/Shortcut/Models/UpdateProject.cs` |
| `Project` | `src/Shortcut/Models/Project.cs` |
| `UpdateProjectError` | `src/Shortcut/Errors/UpdateProjectError.cs` |

