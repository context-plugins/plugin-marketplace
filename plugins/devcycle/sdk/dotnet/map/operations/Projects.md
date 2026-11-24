<!-- Generated file — do not edit; regenerated with the SDK. -->

# Projects — operations

Accessor: `client.Projects` · Source: `src/DevCycle/Api/Projects.cs` · 8 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### ProjectsControllerCreate

- **Signature**: `ProjectsControllerCreate(ProjectsControllerCreateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `Project`
- **Error**: `ApiException<ProjectsControllerCreateError>` — **Case A (typed)**
- **Error accessors**: `TryGetBadRequestErrorResponse([NotNullWhen(true)] out BadRequestErrorResponse? value)` [400] · `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [403] · `TryGetConflictErrorResponse([NotNullWhen(true)] out ConflictErrorResponse? value)` [409] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ProjectsControllerCreateRequest` | `src/DevCycle/Requests/Projects/ProjectsControllerCreateRequest.cs` |
| `CreateProjectDto` | `src/DevCycle/Models/CreateProjectDto.cs` |
| `Project` | `src/DevCycle/Models/Project.cs` |
| `ProjectsControllerCreateError` | `src/DevCycle/Errors/ProjectsControllerCreateError.cs` |
| `BadRequestErrorResponse` | `src/DevCycle/Models/BadRequestErrorResponse.cs` |
| `ConflictErrorResponse` | `src/DevCycle/Models/ConflictErrorResponse.cs` |

### ProjectsControllerFindAll

- **Signature**: `ProjectsControllerFindAll(ProjectsControllerFindAllRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `page` ← `Page`, `perPage` ← `PerPage`, `sortBy` ← `SortBy`, `sortOrder` ← `SortOrder`, `search` ← `Search`, `createdBy` ← `CreatedBy`
- **Returns**: `IReadOnlyList<Project>`
- **Error**: `ApiException<ProjectsControllerFindAllError>` — **Case A (typed)**
- **Error accessors**: `TryGetBadRequestErrorResponse([NotNullWhen(true)] out BadRequestErrorResponse? value)` [400] · `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [403] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ProjectsControllerFindAllRequest` | `src/DevCycle/Requests/Projects/ProjectsControllerFindAllRequest.cs` |
| `SortBy` | `src/DevCycle/Models/Enums/SortBy.cs` |
| `SortOrder` | `src/DevCycle/Models/Enums/SortOrder.cs` |
| `Project` | `src/DevCycle/Models/Project.cs` |
| `ProjectsControllerFindAllError` | `src/DevCycle/Errors/ProjectsControllerFindAllError.cs` |
| `BadRequestErrorResponse` | `src/DevCycle/Models/BadRequestErrorResponse.cs` |

### ProjectsControllerFindOne

- **Signature**: `ProjectsControllerFindOne(ProjectsControllerFindOneRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Key`
- **Returns**: `Project`
- **Error**: `ApiException<ProjectsControllerFindOneError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [403] · `TryGetNotFoundErrorResponse([NotNullWhen(true)] out NotFoundErrorResponse? value)` [404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ProjectsControllerFindOneRequest` | `src/DevCycle/Requests/Projects/ProjectsControllerFindOneRequest.cs` |
| `Project` | `src/DevCycle/Models/Project.cs` |
| `ProjectsControllerFindOneError` | `src/DevCycle/Errors/ProjectsControllerFindOneError.cs` |
| `NotFoundErrorResponse` | `src/DevCycle/Models/NotFoundErrorResponse.cs` |

### ProjectsControllerGetStaleness

- **Signature**: `ProjectsControllerGetStaleness(ProjectsControllerGetStalenessRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Key`
- **Query params (wire ← C#)**: `page` ← `Page`, `perPage` ← `PerPage`, `sortBy` ← `SortBy`, `sortOrder` ← `SortOrder`, `search` ← `Search`, `createdBy` ← `CreatedBy`, `includeSilenced` ← `IncludeSilenced`
- **Returns**: `IReadOnlyList<FeatureStalenessEntity>`
- **Error**: `ApiException<ProjectsControllerGetStalenessError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [403] · `TryGetNotFoundErrorResponse([NotNullWhen(true)] out NotFoundErrorResponse? value)` [404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ProjectsControllerGetStalenessRequest` | `src/DevCycle/Requests/Projects/ProjectsControllerGetStalenessRequest.cs` |
| `SortBy` | `src/DevCycle/Models/Enums/SortBy.cs` |
| `SortOrder` | `src/DevCycle/Models/Enums/SortOrder.cs` |
| `FeatureStalenessEntity` | `src/DevCycle/Models/FeatureStalenessEntity.cs` |
| `ProjectsControllerGetStalenessError` | `src/DevCycle/Errors/ProjectsControllerGetStalenessError.cs` |
| `NotFoundErrorResponse` | `src/DevCycle/Models/NotFoundErrorResponse.cs` |

### ProjectsControllerRemove

- **Signature**: `ProjectsControllerRemove(ProjectsControllerRemoveRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Key`
- **Returns**: `void` (Task)
- **Error**: `ApiException<ProjectsControllerRemoveError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [403] · `TryGetNotFoundErrorResponse([NotNullWhen(true)] out NotFoundErrorResponse? value)` [404] · `TryGetCannotDeleteLastItemErrorResponse([NotNullWhen(true)] out CannotDeleteLastItemErrorResponse? value)` [405] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ProjectsControllerRemoveRequest` | `src/DevCycle/Requests/Projects/ProjectsControllerRemoveRequest.cs` |
| `ProjectsControllerRemoveError` | `src/DevCycle/Errors/ProjectsControllerRemoveError.cs` |
| `NotFoundErrorResponse` | `src/DevCycle/Models/NotFoundErrorResponse.cs` |
| `CannotDeleteLastItemErrorResponse` | `src/DevCycle/Models/CannotDeleteLastItemErrorResponse.cs` |

### ProjectsControllerUpdate

- **Signature**: `ProjectsControllerUpdate(ProjectsControllerUpdateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Key`, `Body`
- **Returns**: `Project`
- **Error**: `ApiException<ProjectsControllerUpdateError>` — **Case A (typed)**
- **Error accessors**: `TryGetBadRequestErrorResponse([NotNullWhen(true)] out BadRequestErrorResponse? value)` [400] · `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [403] · `TryGetNotFoundErrorResponse([NotNullWhen(true)] out NotFoundErrorResponse? value)` [404] · `TryGetConflictErrorResponse([NotNullWhen(true)] out ConflictErrorResponse? value)` [409] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ProjectsControllerUpdateRequest` | `src/DevCycle/Requests/Projects/ProjectsControllerUpdateRequest.cs` |
| `UpdateProjectDto` | `src/DevCycle/Models/UpdateProjectDto.cs` |
| `Project` | `src/DevCycle/Models/Project.cs` |
| `ProjectsControllerUpdateError` | `src/DevCycle/Errors/ProjectsControllerUpdateError.cs` |
| `BadRequestErrorResponse` | `src/DevCycle/Models/BadRequestErrorResponse.cs` |
| `NotFoundErrorResponse` | `src/DevCycle/Models/NotFoundErrorResponse.cs` |
| `ConflictErrorResponse` | `src/DevCycle/Models/ConflictErrorResponse.cs` |

### ProjectsControllerUpdateProtectedSettings

- **Signature**: `ProjectsControllerUpdateProtectedSettings(ProjectsControllerUpdateProtectedSettingsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Key`, `Body`
- **Returns**: `Project`
- **Error**: `ApiException<ProjectsControllerUpdateProtectedSettingsError>` — **Case A (typed)**
- **Error accessors**: `TryGetBadRequestErrorResponse([NotNullWhen(true)] out BadRequestErrorResponse? value)` [400] · `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [403] · `TryGetNotFoundErrorResponse([NotNullWhen(true)] out NotFoundErrorResponse? value)` [404] · `TryGetConflictErrorResponse([NotNullWhen(true)] out ConflictErrorResponse? value)` [409] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ProjectsControllerUpdateProtectedSettingsRequest` | `src/DevCycle/Requests/Projects/ProjectsControllerUpdateProtectedSettingsRequest.cs` |
| `UpdateProtectedProjectSettingsDto` | `src/DevCycle/Models/UpdateProtectedProjectSettingsDto.cs` |
| `Project` | `src/DevCycle/Models/Project.cs` |
| `ProjectsControllerUpdateProtectedSettingsError` | `src/DevCycle/Errors/ProjectsControllerUpdateProtectedSettingsError.cs` |
| `BadRequestErrorResponse` | `src/DevCycle/Models/BadRequestErrorResponse.cs` |
| `NotFoundErrorResponse` | `src/DevCycle/Models/NotFoundErrorResponse.cs` |
| `ConflictErrorResponse` | `src/DevCycle/Models/ConflictErrorResponse.cs` |

### ProjectsControllerUpdateSettings

- **Signature**: `ProjectsControllerUpdateSettings(ProjectsControllerUpdateSettingsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Key`, `Body`
- **Returns**: `Project`
- **Error**: `ApiException<ProjectsControllerUpdateSettingsError>` — **Case A (typed)**
- **Error accessors**: `TryGetBadRequestErrorResponse([NotNullWhen(true)] out BadRequestErrorResponse? value)` [400] · `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [403] · `TryGetNotFoundErrorResponse([NotNullWhen(true)] out NotFoundErrorResponse? value)` [404] · `TryGetConflictErrorResponse([NotNullWhen(true)] out ConflictErrorResponse? value)` [409] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ProjectsControllerUpdateSettingsRequest` | `src/DevCycle/Requests/Projects/ProjectsControllerUpdateSettingsRequest.cs` |
| `UpdateProjectSettingsDto` | `src/DevCycle/Models/UpdateProjectSettingsDto.cs` |
| `Project` | `src/DevCycle/Models/Project.cs` |
| `ProjectsControllerUpdateSettingsError` | `src/DevCycle/Errors/ProjectsControllerUpdateSettingsError.cs` |
| `BadRequestErrorResponse` | `src/DevCycle/Models/BadRequestErrorResponse.cs` |
| `NotFoundErrorResponse` | `src/DevCycle/Models/NotFoundErrorResponse.cs` |
| `ConflictErrorResponse` | `src/DevCycle/Models/ConflictErrorResponse.cs` |

