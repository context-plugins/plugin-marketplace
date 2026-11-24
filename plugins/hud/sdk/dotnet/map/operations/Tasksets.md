<!-- Generated file — do not edit; regenerated with the SDK. -->

# Tasksets — operations

Accessor: `client.Tasksets` · Source: `src/Hud/Api/Tasksets.cs` · 6 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateTasksetV2TasksetsPost

- **Signature**: `CreateTasksetV2TasksetsPost(CreateTasksetV2TasksetsPostRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `TasksetResponse`
- **Error**: `ApiException<CreateTasksetV2TasksetsPostError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 404, 409, 429, 503] · `TryGetHttpValidationError([NotNullWhen(true)] out HttpValidationError? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateTasksetV2TasksetsPostRequest` | `src/Hud/Requests/Tasksets/CreateTasksetV2TasksetsPostRequest.cs` |
| `TasksetCreateRequest` | `src/Hud/Models/TasksetCreateRequest.cs` |
| `TasksetResponse` | `src/Hud/Models/TasksetResponse.cs` |
| `CreateTasksetV2TasksetsPostError` | `src/Hud/Errors/CreateTasksetV2TasksetsPostError.cs` |
| `ErrorResponseModel` | `src/Hud/Models/ErrorResponseModel.cs` |
| `HttpValidationError` | `src/Hud/Models/HttpValidationError.cs` |

### ExportTasksetV2TasksetsTasksetIdExportGet

- **Signature**: `ExportTasksetV2TasksetsTasksetIdExportGet(ExportTasksetV2TasksetsTasksetIdExportGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `TasksetId`
- **Returns**: `TasksetExportResponse`
- **Error**: `ApiException<ExportTasksetV2TasksetsTasksetIdExportGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 404, 409, 429, 503] · `TryGetHttpValidationError([NotNullWhen(true)] out HttpValidationError? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ExportTasksetV2TasksetsTasksetIdExportGetRequest` | `src/Hud/Requests/Tasksets/ExportTasksetV2TasksetsTasksetIdExportGetRequest.cs` |
| `TasksetExportResponse` | `src/Hud/Models/TasksetExportResponse.cs` |
| `ExportTasksetV2TasksetsTasksetIdExportGetError` | `src/Hud/Errors/ExportTasksetV2TasksetsTasksetIdExportGetError.cs` |
| `ErrorResponseModel` | `src/Hud/Models/ErrorResponseModel.cs` |
| `HttpValidationError` | `src/Hud/Models/HttpValidationError.cs` |

### GetTasksetByNameV2TasksetsByNameNameGet

- **Signature**: `GetTasksetByNameV2TasksetsByNameNameGet(GetTasksetByNameV2TasksetsByNameNameGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Name`
- **Returns**: `TasksetExportResponse`
- **Error**: `ApiException<GetTasksetByNameV2TasksetsByNameNameGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 404, 409, 429, 503] · `TryGetHttpValidationError([NotNullWhen(true)] out HttpValidationError? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetTasksetByNameV2TasksetsByNameNameGetRequest` | `src/Hud/Requests/Tasksets/GetTasksetByNameV2TasksetsByNameNameGetRequest.cs` |
| `TasksetExportResponse` | `src/Hud/Models/TasksetExportResponse.cs` |
| `GetTasksetByNameV2TasksetsByNameNameGetError` | `src/Hud/Errors/GetTasksetByNameV2TasksetsByNameNameGetError.cs` |
| `ErrorResponseModel` | `src/Hud/Models/ErrorResponseModel.cs` |
| `HttpValidationError` | `src/Hud/Models/HttpValidationError.cs` |

### GetTasksetV2TasksetsTasksetIdGet

- **Signature**: `GetTasksetV2TasksetsTasksetIdGet(GetTasksetV2TasksetsTasksetIdGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `TasksetId`
- **Returns**: `TasksetResponse`
- **Error**: `ApiException<GetTasksetV2TasksetsTasksetIdGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 404, 409, 429, 503] · `TryGetHttpValidationError([NotNullWhen(true)] out HttpValidationError? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetTasksetV2TasksetsTasksetIdGetRequest` | `src/Hud/Requests/Tasksets/GetTasksetV2TasksetsTasksetIdGetRequest.cs` |
| `TasksetResponse` | `src/Hud/Models/TasksetResponse.cs` |
| `GetTasksetV2TasksetsTasksetIdGetError` | `src/Hud/Errors/GetTasksetV2TasksetsTasksetIdGetError.cs` |
| `ErrorResponseModel` | `src/Hud/Models/ErrorResponseModel.cs` |
| `HttpValidationError` | `src/Hud/Models/HttpValidationError.cs` |

### ListTasksetTasksV2TasksetsTasksetIdTasksGet

- **Signature**: `ListTasksetTasksV2TasksetsTasksetIdTasksGet(ListTasksetTasksV2TasksetsTasksetIdTasksGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `TasksetId`
- **Query params (wire ← C#)**: `limit` ← `Limit`, `offset` ← `Offset`
- **Returns**: `PaginatedResponseTaskResponse`
- **Error**: `ApiException<ListTasksetTasksV2TasksetsTasksetIdTasksGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 404, 409, 429, 503] · `TryGetHttpValidationError([NotNullWhen(true)] out HttpValidationError? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListTasksetTasksV2TasksetsTasksetIdTasksGetRequest` | `src/Hud/Requests/Tasksets/ListTasksetTasksV2TasksetsTasksetIdTasksGetRequest.cs` |
| `PaginatedResponseTaskResponse` | `src/Hud/Models/PaginatedResponseTaskResponse.cs` |
| `ListTasksetTasksV2TasksetsTasksetIdTasksGetError` | `src/Hud/Errors/ListTasksetTasksV2TasksetsTasksetIdTasksGetError.cs` |
| `ErrorResponseModel` | `src/Hud/Models/ErrorResponseModel.cs` |
| `HttpValidationError` | `src/Hud/Models/HttpValidationError.cs` |

### ListTasksetsV2TasksetsGet

- **Signature**: `ListTasksetsV2TasksetsGet(ListTasksetsV2TasksetsGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `limit` ← `Limit`, `offset` ← `Offset`, `search` ← `Search`, `public_only` ← `PublicOnly`, `featured_only` ← `FeaturedOnly`, `owner_only` ← `OwnerOnly`, `min_tasks` ← `MinTasks`, `registry_id` ← `RegistryId`, `scenario_id` ← `ScenarioId`, `project_id` ← `ProjectId`, `sort_by` ← `SortBy`
- **Returns**: `PaginatedResponseTasksetResponse`
- **Error**: `ApiException<ListTasksetsV2TasksetsGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 404, 409, 429, 503] · `TryGetHttpValidationError([NotNullWhen(true)] out HttpValidationError? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListTasksetsV2TasksetsGetRequest` | `src/Hud/Requests/Tasksets/ListTasksetsV2TasksetsGetRequest.cs` |
| `SearchHudPlatformTasksetsApi` | `src/Hud/Models/AnyOf/SearchHudPlatformTasksetsApi.cs` |
| `MinTasks` | `src/Hud/Models/AnyOf/MinTasks.cs` |
| `RegistryId2` | `src/Hud/Models/AnyOf/RegistryId2.cs` |
| `ScenarioId` | `src/Hud/Models/AnyOf/ScenarioId.cs` |
| `ProjectId2` | `src/Hud/Models/AnyOf/ProjectId2.cs` |
| `SortByHudPlatformTasksetsApi` | `src/Hud/Models/Enums/SortByHudPlatformTasksetsApi.cs` |
| `PaginatedResponseTasksetResponse` | `src/Hud/Models/PaginatedResponseTasksetResponse.cs` |
| `ListTasksetsV2TasksetsGetError` | `src/Hud/Errors/ListTasksetsV2TasksetsGetError.cs` |
| `ErrorResponseModel` | `src/Hud/Models/ErrorResponseModel.cs` |
| `HttpValidationError` | `src/Hud/Models/HttpValidationError.cs` |

