<!-- Generated file — do not edit; regenerated with the SDK. -->

# Projects — operations

Accessor: `client.Projects` · Source: `src/BrowserStack/Api/Projects.cs` · 5 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### DeleteProject

- **Auth**: `options.BasicAuth`
- **Signature**: `DeleteProject(DeleteProjectRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectId`
- **Returns**: `StatusMessage`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `DeleteProjectRequest` | `src/BrowserStack/Requests/Projects/DeleteProjectRequest.cs` |
| `StatusMessage` | `src/BrowserStack/Models/StatusMessage.cs` |

### GetProject

- **Auth**: `options.BasicAuth`
- **Signature**: `GetProject(GetProjectRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectId`
- **Returns**: `ProjectDetail`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `GetProjectRequest` | `src/BrowserStack/Requests/Projects/GetProjectRequest.cs` |
| `ProjectDetail` | `src/BrowserStack/Models/ProjectDetail.cs` |

### GetProjectBadgeKey

- **Auth**: `options.BasicAuth`
- **Signature**: `GetProjectBadgeKey(GetProjectBadgeKeyRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectId`
- **Returns**: `string`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `GetProjectBadgeKeyRequest` | `src/BrowserStack/Requests/Projects/GetProjectBadgeKeyRequest.cs` |

### ListProjects

- **Auth**: `options.BasicAuth`
- **Signature**: `ListProjects(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `IReadOnlyList<Project>`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `Project` | `src/BrowserStack/Models/Project.cs` |

### UpdateProject

- **Auth**: `options.BasicAuth`
- **Signature**: `UpdateProject(UpdateProjectRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectId`, `Body`
- **Returns**: `Project`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `UpdateProjectRequest` | `src/BrowserStack/Requests/Projects/UpdateProjectRequest.cs` |
| `AutomateProjectsJsonRequest` | `src/BrowserStack/Models/AutomateProjectsJsonRequest.cs` |
| `Project` | `src/BrowserStack/Models/Project.cs` |

