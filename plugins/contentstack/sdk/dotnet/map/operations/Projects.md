<!-- Generated file — do not edit; regenerated with the SDK. -->

# Projects — operations

Accessor: `client.Projects` · Source: `src/Contentstack/Api/Projects.cs` · 10 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateProject

- **Server group**: `DefaultContentstackProjectsApi`
- **Auth**: `options.BearerAuth` OR `options.AuthtokenAuth`
- **Signature**: `CreateProject(CreateProjectOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationUid`, `Body`
- **Returns**: `Project`
- **Error**: `ApiException<CreateProjectError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateProjectOperationRequest` | `src/Contentstack/Requests/Projects/CreateProjectOperationRequest.cs` |
| `CreateProjectRequest` | `src/Contentstack/Models/CreateProjectRequest.cs` |
| `Project` | `src/Contentstack/Models/Project.cs` |
| `CreateProjectError` | `src/Contentstack/Errors/CreateProjectError.cs` |
| `Error` | `src/Contentstack/Models/Error.cs` |

### DeleteProject

- **Server group**: `DefaultContentstackProjectsApi`
- **Auth**: `options.BearerAuth` OR `options.AuthtokenAuth`
- **Signature**: `DeleteProject(DeleteProjectRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationUid`, `ProjectUid`
- **Returns**: `void` (Task)
- **Error**: `ApiException<DeleteProjectError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [401, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteProjectRequest` | `src/Contentstack/Requests/Projects/DeleteProjectRequest.cs` |
| `DeleteProjectError` | `src/Contentstack/Errors/DeleteProjectError.cs` |
| `Error` | `src/Contentstack/Models/Error.cs` |

### DeleteProjectsByProjectUid

- **Server group**: `DefaultContentstackProjectsApi`
- **Auth**: `options.BearerAuth` OR `options.AuthtokenAuth`
- **Signature**: `DeleteProjectsByProjectUid(DeleteProjectsByProjectUidRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectUid`
- **Returns**: `void` (Task)
- **Error**: `ApiException<DeleteProjectsByProjectUidError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [401, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteProjectsByProjectUidRequest` | `src/Contentstack/Requests/Projects/DeleteProjectsByProjectUidRequest.cs` |
| `DeleteProjectsByProjectUidError` | `src/Contentstack/Errors/DeleteProjectsByProjectUidError.cs` |
| `Error` | `src/Contentstack/Models/Error.cs` |

### GetAllProjects

- **Server group**: `DefaultContentstackProjectsApi`
- **Auth**: `options.BearerAuth` OR `options.AuthtokenAuth`
- **Signature**: `GetAllProjects(GetAllProjectsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationUid`
- **Returns**: `ProjectList`
- **Error**: `ApiException<GetAllProjectsError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetAllProjectsRequest` | `src/Contentstack/Requests/Projects/GetAllProjectsRequest.cs` |
| `ProjectList` | `src/Contentstack/Models/ProjectList.cs` |
| `GetAllProjectsError` | `src/Contentstack/Errors/GetAllProjectsError.cs` |
| `Error` | `src/Contentstack/Models/Error.cs` |

### GetProject

- **Server group**: `DefaultContentstackProjectsApi`
- **Auth**: `options.BearerAuth` OR `options.AuthtokenAuth`
- **Signature**: `GetProject(GetProjectRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationUid`, `ProjectUid`
- **Returns**: `Project`
- **Error**: `ApiException<GetProjectError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [401, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetProjectRequest` | `src/Contentstack/Requests/Projects/GetProjectRequest.cs` |
| `Project` | `src/Contentstack/Models/Project.cs` |
| `GetProjectError` | `src/Contentstack/Errors/GetProjectError.cs` |
| `Error` | `src/Contentstack/Models/Error.cs` |

### GetProjects

- **Server group**: `DefaultContentstackProjectsApi`
- **Auth**: `options.BearerAuth` OR `options.AuthtokenAuth`
- **Signature**: `GetProjects(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `ProjectList2`
- **Error**: `ApiException<GetProjectsError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ProjectList2` | `src/Contentstack/Models/ProjectList2.cs` |
| `GetProjectsError` | `src/Contentstack/Errors/GetProjectsError.cs` |
| `Error` | `src/Contentstack/Models/Error.cs` |

### GetProjectsByProjectUid

- **Server group**: `DefaultContentstackProjectsApi`
- **Auth**: `options.BearerAuth` OR `options.AuthtokenAuth`
- **Signature**: `GetProjectsByProjectUid(GetProjectsByProjectUidRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectUid`
- **Returns**: `Project2`
- **Error**: `ApiException<GetProjectsByProjectUidError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [401, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetProjectsByProjectUidRequest` | `src/Contentstack/Requests/Projects/GetProjectsByProjectUidRequest.cs` |
| `Project2` | `src/Contentstack/Models/Project2.cs` |
| `GetProjectsByProjectUidError` | `src/Contentstack/Errors/GetProjectsByProjectUidError.cs` |
| `Error` | `src/Contentstack/Models/Error.cs` |

### PostProjects

- **Server group**: `DefaultContentstackProjectsApi`
- **Auth**: `options.BearerAuth` OR `options.AuthtokenAuth`
- **Signature**: `PostProjects(PostProjectsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `Project2`
- **Error**: `ApiException<PostProjectsError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `PostProjectsRequest` | `src/Contentstack/Requests/Projects/PostProjectsRequest.cs` |
| `CreateProjectRequest2` | `src/Contentstack/Models/CreateProjectRequest2.cs` |
| `Project2` | `src/Contentstack/Models/Project2.cs` |
| `PostProjectsError` | `src/Contentstack/Errors/PostProjectsError.cs` |
| `Error` | `src/Contentstack/Models/Error.cs` |

### PutProjectsByProjectUid

- **Server group**: `DefaultContentstackProjectsApi`
- **Auth**: `options.BearerAuth` OR `options.AuthtokenAuth`
- **Signature**: `PutProjectsByProjectUid(PutProjectsByProjectUidRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectUid`, `Body`
- **Returns**: `Project2`
- **Error**: `ApiException<PutProjectsByProjectUidError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `PutProjectsByProjectUidRequest` | `src/Contentstack/Requests/Projects/PutProjectsByProjectUidRequest.cs` |
| `CreateProjectRequest2` | `src/Contentstack/Models/CreateProjectRequest2.cs` |
| `Project2` | `src/Contentstack/Models/Project2.cs` |
| `PutProjectsByProjectUidError` | `src/Contentstack/Errors/PutProjectsByProjectUidError.cs` |
| `Error` | `src/Contentstack/Models/Error.cs` |

### UpdateProject

- **Server group**: `DefaultContentstackProjectsApi`
- **Auth**: `options.BearerAuth` OR `options.AuthtokenAuth`
- **Signature**: `UpdateProject(UpdateProjectRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationUid`, `ProjectUid`, `Body`
- **Returns**: `Project`
- **Error**: `ApiException<UpdateProjectError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UpdateProjectRequest` | `src/Contentstack/Requests/Projects/UpdateProjectRequest.cs` |
| `CreateProjectRequest` | `src/Contentstack/Models/CreateProjectRequest.cs` |
| `Project` | `src/Contentstack/Models/Project.cs` |
| `UpdateProjectError` | `src/Contentstack/Errors/UpdateProjectError.cs` |
| `Error` | `src/Contentstack/Models/Error.cs` |

