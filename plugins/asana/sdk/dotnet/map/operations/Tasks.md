<!-- Generated file — do not edit; regenerated with the SDK. -->

# Tasks — operations

Accessor: `client.Tasks` · Source: `src/Asana/Api/Tasks.cs` · 26 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### AddDependenciesForTask

- **Auth**: `options.PersonalAccessToken` OR `options.Oauth2`
- **Signature**: `AddDependenciesForTask(AddDependenciesForTaskRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `TaskGid`, `Body`
- **Query params (wire ← C#)**: `opt_pretty` ← `OptPretty`, `opt_fields` ← `OptFields` (comma-separated)
- **Returns**: `TasksAddDependenciesResponse`
- **Error**: `ApiException<AddDependenciesForTaskError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 402, 403, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `AddDependenciesForTaskRequest` | `src/Asana/Requests/Tasks/AddDependenciesForTaskRequest.cs` |
| `TasksAddDependenciesRequest` | `src/Asana/Models/TasksAddDependenciesRequest.cs` |
| `TasksAddDependenciesResponse` | `src/Asana/Models/TasksAddDependenciesResponse.cs` |
| `AddDependenciesForTaskError` | `src/Asana/Errors/AddDependenciesForTaskError.cs` |
| `ErrorResponseModel` | `src/Asana/Models/ErrorResponseModel.cs` |

### AddDependentsForTask

- **Auth**: `options.PersonalAccessToken` OR `options.Oauth2`
- **Signature**: `AddDependentsForTask(AddDependentsForTaskRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `TaskGid`, `Body`
- **Query params (wire ← C#)**: `opt_pretty` ← `OptPretty`, `opt_fields` ← `OptFields` (comma-separated)
- **Returns**: `TasksAddDependentsResponse`
- **Error**: `ApiException<AddDependentsForTaskError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 402, 403, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `AddDependentsForTaskRequest` | `src/Asana/Requests/Tasks/AddDependentsForTaskRequest.cs` |
| `TasksAddDependentsRequest` | `src/Asana/Models/TasksAddDependentsRequest.cs` |
| `TasksAddDependentsResponse` | `src/Asana/Models/TasksAddDependentsResponse.cs` |
| `AddDependentsForTaskError` | `src/Asana/Errors/AddDependentsForTaskError.cs` |
| `ErrorResponseModel` | `src/Asana/Models/ErrorResponseModel.cs` |

### AddFollowersForTask

- **Auth**: `options.PersonalAccessToken` OR `options.Oauth2`
- **Signature**: `AddFollowersForTask(AddFollowersForTaskRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `TaskGid`, `Body`
- **Query params (wire ← C#)**: `opt_pretty` ← `OptPretty`, `opt_fields` ← `OptFields` (comma-separated)
- **Returns**: `TasksAddFollowersResponse`
- **Error**: `ApiException<AddFollowersForTaskError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `AddFollowersForTaskRequest` | `src/Asana/Requests/Tasks/AddFollowersForTaskRequest.cs` |
| `TasksAddFollowersRequest` | `src/Asana/Models/TasksAddFollowersRequest.cs` |
| `TasksAddFollowersResponse` | `src/Asana/Models/TasksAddFollowersResponse.cs` |
| `AddFollowersForTaskError` | `src/Asana/Errors/AddFollowersForTaskError.cs` |
| `ErrorResponseModel` | `src/Asana/Models/ErrorResponseModel.cs` |

### AddProjectForTask

- **Auth**: `options.PersonalAccessToken` OR `options.Oauth2`
- **Signature**: `AddProjectForTask(AddProjectForTaskRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `TaskGid`, `Body`
- **Query params (wire ← C#)**: `opt_pretty` ← `OptPretty`, `opt_fields` ← `OptFields` (comma-separated)
- **Returns**: `TasksAddProjectResponse`
- **Error**: `ApiException<AddProjectForTaskError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `AddProjectForTaskRequest` | `src/Asana/Requests/Tasks/AddProjectForTaskRequest.cs` |
| `TasksAddProjectRequest` | `src/Asana/Models/TasksAddProjectRequest.cs` |
| `TasksAddProjectResponse` | `src/Asana/Models/TasksAddProjectResponse.cs` |
| `AddProjectForTaskError` | `src/Asana/Errors/AddProjectForTaskError.cs` |
| `ErrorResponseModel` | `src/Asana/Models/ErrorResponseModel.cs` |

### AddTagForTask

- **Auth**: `options.PersonalAccessToken` OR `options.Oauth2`
- **Signature**: `AddTagForTask(AddTagForTaskRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `TaskGid`, `Body`
- **Query params (wire ← C#)**: `opt_pretty` ← `OptPretty`, `opt_fields` ← `OptFields` (comma-separated)
- **Returns**: `TasksAddTagResponse`
- **Error**: `ApiException<AddTagForTaskError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `AddTagForTaskRequest` | `src/Asana/Requests/Tasks/AddTagForTaskRequest.cs` |
| `TasksAddTagRequest` | `src/Asana/Models/TasksAddTagRequest.cs` |
| `TasksAddTagResponse` | `src/Asana/Models/TasksAddTagResponse.cs` |
| `AddTagForTaskError` | `src/Asana/Errors/AddTagForTaskError.cs` |
| `ErrorResponseModel` | `src/Asana/Models/ErrorResponseModel.cs` |

### CreateSubtaskForTask

- **Auth**: `options.PersonalAccessToken` OR `options.Oauth2`
- **Signature**: `CreateSubtaskForTask(CreateSubtaskForTaskRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `TaskGid`, `Body`
- **Query params (wire ← C#)**: `opt_pretty` ← `OptPretty`, `opt_fields` ← `OptFields` (comma-separated)
- **Returns**: `TasksSubtasksResponse1`
- **Error**: `ApiException<CreateSubtaskForTaskError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateSubtaskForTaskRequest` | `src/Asana/Requests/Tasks/CreateSubtaskForTaskRequest.cs` |
| `TasksSubtasksRequest` | `src/Asana/Models/TasksSubtasksRequest.cs` |
| `TasksSubtasksResponse1` | `src/Asana/Models/TasksSubtasksResponse1.cs` |
| `CreateSubtaskForTaskError` | `src/Asana/Errors/CreateSubtaskForTaskError.cs` |
| `ErrorResponseModel` | `src/Asana/Models/ErrorResponseModel.cs` |

### CreateTask

- **Auth**: `options.PersonalAccessToken` OR `options.Oauth2`
- **Signature**: `CreateTask(CreateTaskRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Query params (wire ← C#)**: `opt_pretty` ← `OptPretty`, `opt_fields` ← `OptFields` (comma-separated)
- **Returns**: `TasksResponse1`
- **Error**: `ApiException<CreateTaskError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateTaskRequest` | `src/Asana/Requests/Tasks/CreateTaskRequest.cs` |
| `TasksRequest` | `src/Asana/Models/TasksRequest.cs` |
| `TasksResponse1` | `src/Asana/Models/TasksResponse1.cs` |
| `CreateTaskError` | `src/Asana/Errors/CreateTaskError.cs` |
| `ErrorResponseModel` | `src/Asana/Models/ErrorResponseModel.cs` |

### DeleteTask

- **Auth**: `options.PersonalAccessToken` OR `options.Oauth2`
- **Signature**: `DeleteTask(DeleteTaskRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `TaskGid`
- **Query params (wire ← C#)**: `opt_pretty` ← `OptPretty`, `opt_fields` ← `OptFields` (comma-separated)
- **Returns**: `TasksResponse4`
- **Error**: `ApiException<DeleteTaskError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteTaskRequest` | `src/Asana/Requests/Tasks/DeleteTaskRequest.cs` |
| `TasksResponse4` | `src/Asana/Models/TasksResponse4.cs` |
| `DeleteTaskError` | `src/Asana/Errors/DeleteTaskError.cs` |
| `ErrorResponseModel` | `src/Asana/Models/ErrorResponseModel.cs` |

### DuplicateTask

- **Auth**: `options.PersonalAccessToken` OR `options.Oauth2`
- **Signature**: `DuplicateTask(DuplicateTaskRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `TaskGid`, `Body`
- **Query params (wire ← C#)**: `opt_pretty` ← `OptPretty`, `opt_fields` ← `OptFields` (comma-separated)
- **Returns**: `TasksDuplicateResponse`
- **Error**: `ApiException<DuplicateTaskError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DuplicateTaskRequest` | `src/Asana/Requests/Tasks/DuplicateTaskRequest.cs` |
| `TasksDuplicateRequest` | `src/Asana/Models/TasksDuplicateRequest.cs` |
| `TasksDuplicateResponse` | `src/Asana/Models/TasksDuplicateResponse.cs` |
| `DuplicateTaskError` | `src/Asana/Errors/DuplicateTaskError.cs` |
| `ErrorResponseModel` | `src/Asana/Models/ErrorResponseModel.cs` |

### GetDependenciesForTask

- **Auth**: `options.PersonalAccessToken` OR `options.Oauth2`
- **Signature**: `GetDependenciesForTask(GetDependenciesForTaskRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `TaskGid`
- **Query params (wire ← C#)**: `opt_pretty` ← `OptPretty`, `opt_fields` ← `OptFields` (comma-separated), `limit` ← `Limit`, `offset` ← `Offset`
- **Returns**: `TasksDependenciesResponse`
- **Error**: `ApiException<GetDependenciesForTaskError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 402, 403, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetDependenciesForTaskRequest` | `src/Asana/Requests/Tasks/GetDependenciesForTaskRequest.cs` |
| `TasksDependenciesResponse` | `src/Asana/Models/TasksDependenciesResponse.cs` |
| `GetDependenciesForTaskError` | `src/Asana/Errors/GetDependenciesForTaskError.cs` |
| `ErrorResponseModel` | `src/Asana/Models/ErrorResponseModel.cs` |

### GetDependentsForTask

- **Auth**: `options.PersonalAccessToken` OR `options.Oauth2`
- **Signature**: `GetDependentsForTask(GetDependentsForTaskRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `TaskGid`
- **Query params (wire ← C#)**: `opt_pretty` ← `OptPretty`, `opt_fields` ← `OptFields` (comma-separated), `limit` ← `Limit`, `offset` ← `Offset`
- **Returns**: `TasksDependentsResponse`
- **Error**: `ApiException<GetDependentsForTaskError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 402, 403, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetDependentsForTaskRequest` | `src/Asana/Requests/Tasks/GetDependentsForTaskRequest.cs` |
| `TasksDependentsResponse` | `src/Asana/Models/TasksDependentsResponse.cs` |
| `GetDependentsForTaskError` | `src/Asana/Errors/GetDependentsForTaskError.cs` |
| `ErrorResponseModel` | `src/Asana/Models/ErrorResponseModel.cs` |

### GetSubtasksForTask

- **Auth**: `options.PersonalAccessToken` OR `options.Oauth2`
- **Signature**: `GetSubtasksForTask(GetSubtasksForTaskRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `TaskGid`
- **Query params (wire ← C#)**: `opt_pretty` ← `OptPretty`, `opt_fields` ← `OptFields` (comma-separated), `limit` ← `Limit`, `offset` ← `Offset`
- **Returns**: `TasksSubtasksResponse`
- **Error**: `ApiException<GetSubtasksForTaskError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetSubtasksForTaskRequest` | `src/Asana/Requests/Tasks/GetSubtasksForTaskRequest.cs` |
| `TasksSubtasksResponse` | `src/Asana/Models/TasksSubtasksResponse.cs` |
| `GetSubtasksForTaskError` | `src/Asana/Errors/GetSubtasksForTaskError.cs` |
| `ErrorResponseModel` | `src/Asana/Models/ErrorResponseModel.cs` |

### GetTask

- **Auth**: `options.PersonalAccessToken` OR `options.Oauth2`
- **Signature**: `GetTask(GetTaskRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `TaskGid`
- **Query params (wire ← C#)**: `opt_pretty` ← `OptPretty`, `opt_fields` ← `OptFields` (comma-separated)
- **Returns**: `TasksResponse1`
- **Error**: `ApiException<GetTaskError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetTaskRequest` | `src/Asana/Requests/Tasks/GetTaskRequest.cs` |
| `TasksResponse1` | `src/Asana/Models/TasksResponse1.cs` |
| `GetTaskError` | `src/Asana/Errors/GetTaskError.cs` |
| `ErrorResponseModel` | `src/Asana/Models/ErrorResponseModel.cs` |

### GetTasks

- **Auth**: `options.PersonalAccessToken` OR `options.Oauth2`
- **Signature**: `GetTasks(GetTasksRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `opt_pretty` ← `OptPretty`, `opt_fields` ← `OptFields` (comma-separated), `limit` ← `Limit`, `offset` ← `Offset`, `assignee` ← `Assignee`, `project` ← `Project`, `section` ← `Section`, `workspace` ← `Workspace`, `completed_since` ← `CompletedSince`, `modified_since` ← `ModifiedSince`
- **Returns**: `TasksResponse`
- **Error**: `ApiException<GetTasksError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetTasksRequest` | `src/Asana/Requests/Tasks/GetTasksRequest.cs` |
| `TasksResponse` | `src/Asana/Models/TasksResponse.cs` |
| `GetTasksError` | `src/Asana/Errors/GetTasksError.cs` |
| `ErrorResponseModel` | `src/Asana/Models/ErrorResponseModel.cs` |

### GetTasksForProject

- **Auth**: `options.PersonalAccessToken` OR `options.Oauth2`
- **Signature**: `GetTasksForProject(GetTasksForProjectRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectGid`
- **Query params (wire ← C#)**: `completed_since` ← `CompletedSince`, `opt_pretty` ← `OptPretty`, `opt_fields` ← `OptFields` (comma-separated), `limit` ← `Limit`, `offset` ← `Offset`
- **Returns**: `ProjectsTasksResponse`
- **Error**: `ApiException<GetTasksForProjectError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetTasksForProjectRequest` | `src/Asana/Requests/Tasks/GetTasksForProjectRequest.cs` |
| `ProjectsTasksResponse` | `src/Asana/Models/ProjectsTasksResponse.cs` |
| `GetTasksForProjectError` | `src/Asana/Errors/GetTasksForProjectError.cs` |
| `ErrorResponseModel` | `src/Asana/Models/ErrorResponseModel.cs` |

### GetTasksForSection

- **Auth**: `options.PersonalAccessToken` OR `options.Oauth2`
- **Signature**: `GetTasksForSection(GetTasksForSectionRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `SectionGid`
- **Query params (wire ← C#)**: `opt_pretty` ← `OptPretty`, `opt_fields` ← `OptFields` (comma-separated), `limit` ← `Limit`, `offset` ← `Offset`
- **Returns**: `SectionsTasksResponse`
- **Error**: `ApiException<GetTasksForSectionError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetTasksForSectionRequest` | `src/Asana/Requests/Tasks/GetTasksForSectionRequest.cs` |
| `SectionsTasksResponse` | `src/Asana/Models/SectionsTasksResponse.cs` |
| `GetTasksForSectionError` | `src/Asana/Errors/GetTasksForSectionError.cs` |
| `ErrorResponseModel` | `src/Asana/Models/ErrorResponseModel.cs` |

### GetTasksForTag

- **Auth**: `options.PersonalAccessToken` OR `options.Oauth2`
- **Signature**: `GetTasksForTag(GetTasksForTagRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `TagGid`
- **Query params (wire ← C#)**: `opt_pretty` ← `OptPretty`, `opt_fields` ← `OptFields` (comma-separated), `limit` ← `Limit`, `offset` ← `Offset`
- **Returns**: `TagsTasksResponse`
- **Error**: `ApiException<GetTasksForTagError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetTasksForTagRequest` | `src/Asana/Requests/Tasks/GetTasksForTagRequest.cs` |
| `TagsTasksResponse` | `src/Asana/Models/TagsTasksResponse.cs` |
| `GetTasksForTagError` | `src/Asana/Errors/GetTasksForTagError.cs` |
| `ErrorResponseModel` | `src/Asana/Models/ErrorResponseModel.cs` |

### GetTasksForUserTaskList

- **Auth**: `options.PersonalAccessToken` OR `options.Oauth2`
- **Signature**: `GetTasksForUserTaskList(GetTasksForUserTaskListRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `UserTaskListGid`
- **Query params (wire ← C#)**: `completed_since` ← `CompletedSince`, `opt_pretty` ← `OptPretty`, `opt_fields` ← `OptFields` (comma-separated), `limit` ← `Limit`, `offset` ← `Offset`
- **Returns**: `UserTaskListsTasksResponse`
- **Error**: `ApiException<GetTasksForUserTaskListError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetTasksForUserTaskListRequest` | `src/Asana/Requests/Tasks/GetTasksForUserTaskListRequest.cs` |
| `UserTaskListsTasksResponse` | `src/Asana/Models/UserTaskListsTasksResponse.cs` |
| `GetTasksForUserTaskListError` | `src/Asana/Errors/GetTasksForUserTaskListError.cs` |
| `ErrorResponseModel` | `src/Asana/Models/ErrorResponseModel.cs` |

### RemoveDependenciesForTask

- **Auth**: `options.PersonalAccessToken` OR `options.Oauth2`
- **Signature**: `RemoveDependenciesForTask(RemoveDependenciesForTaskRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `TaskGid`, `Body`
- **Query params (wire ← C#)**: `opt_pretty` ← `OptPretty`, `opt_fields` ← `OptFields` (comma-separated)
- **Returns**: `TasksRemoveDependenciesResponse`
- **Error**: `ApiException<RemoveDependenciesForTaskError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 402, 403, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `RemoveDependenciesForTaskRequest` | `src/Asana/Requests/Tasks/RemoveDependenciesForTaskRequest.cs` |
| `TasksRemoveDependenciesRequest` | `src/Asana/Models/TasksRemoveDependenciesRequest.cs` |
| `TasksRemoveDependenciesResponse` | `src/Asana/Models/TasksRemoveDependenciesResponse.cs` |
| `RemoveDependenciesForTaskError` | `src/Asana/Errors/RemoveDependenciesForTaskError.cs` |
| `ErrorResponseModel` | `src/Asana/Models/ErrorResponseModel.cs` |

### RemoveDependentsForTask

- **Auth**: `options.PersonalAccessToken` OR `options.Oauth2`
- **Signature**: `RemoveDependentsForTask(RemoveDependentsForTaskRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `TaskGid`, `Body`
- **Query params (wire ← C#)**: `opt_pretty` ← `OptPretty`, `opt_fields` ← `OptFields` (comma-separated)
- **Returns**: `TasksRemoveDependentsResponse`
- **Error**: `ApiException<RemoveDependentsForTaskError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 402, 403, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `RemoveDependentsForTaskRequest` | `src/Asana/Requests/Tasks/RemoveDependentsForTaskRequest.cs` |
| `TasksRemoveDependentsRequest` | `src/Asana/Models/TasksRemoveDependentsRequest.cs` |
| `TasksRemoveDependentsResponse` | `src/Asana/Models/TasksRemoveDependentsResponse.cs` |
| `RemoveDependentsForTaskError` | `src/Asana/Errors/RemoveDependentsForTaskError.cs` |
| `ErrorResponseModel` | `src/Asana/Models/ErrorResponseModel.cs` |

### RemoveFollowerForTask

- **Auth**: `options.PersonalAccessToken` OR `options.Oauth2`
- **Signature**: `RemoveFollowerForTask(RemoveFollowerForTaskRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `TaskGid`, `Body`
- **Query params (wire ← C#)**: `opt_pretty` ← `OptPretty`, `opt_fields` ← `OptFields` (comma-separated)
- **Returns**: `TasksRemoveFollowersResponse`
- **Error**: `ApiException<RemoveFollowerForTaskError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `RemoveFollowerForTaskRequest` | `src/Asana/Requests/Tasks/RemoveFollowerForTaskRequest.cs` |
| `TasksRemoveFollowersRequest` | `src/Asana/Models/TasksRemoveFollowersRequest.cs` |
| `TasksRemoveFollowersResponse` | `src/Asana/Models/TasksRemoveFollowersResponse.cs` |
| `RemoveFollowerForTaskError` | `src/Asana/Errors/RemoveFollowerForTaskError.cs` |
| `ErrorResponseModel` | `src/Asana/Models/ErrorResponseModel.cs` |

### RemoveProjectForTask

- **Auth**: `options.PersonalAccessToken` OR `options.Oauth2`
- **Signature**: `RemoveProjectForTask(RemoveProjectForTaskRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `TaskGid`, `Body`
- **Query params (wire ← C#)**: `opt_pretty` ← `OptPretty`, `opt_fields` ← `OptFields` (comma-separated)
- **Returns**: `TasksRemoveProjectResponse`
- **Error**: `ApiException<RemoveProjectForTaskError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `RemoveProjectForTaskRequest` | `src/Asana/Requests/Tasks/RemoveProjectForTaskRequest.cs` |
| `TasksRemoveProjectRequest` | `src/Asana/Models/TasksRemoveProjectRequest.cs` |
| `TasksRemoveProjectResponse` | `src/Asana/Models/TasksRemoveProjectResponse.cs` |
| `RemoveProjectForTaskError` | `src/Asana/Errors/RemoveProjectForTaskError.cs` |
| `ErrorResponseModel` | `src/Asana/Models/ErrorResponseModel.cs` |

### RemoveTagForTask

- **Auth**: `options.PersonalAccessToken` OR `options.Oauth2`
- **Signature**: `RemoveTagForTask(RemoveTagForTaskRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `TaskGid`, `Body`
- **Query params (wire ← C#)**: `opt_pretty` ← `OptPretty`, `opt_fields` ← `OptFields` (comma-separated)
- **Returns**: `TasksRemoveTagResponse`
- **Error**: `ApiException<RemoveTagForTaskError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `RemoveTagForTaskRequest` | `src/Asana/Requests/Tasks/RemoveTagForTaskRequest.cs` |
| `TasksRemoveTagRequest` | `src/Asana/Models/TasksRemoveTagRequest.cs` |
| `TasksRemoveTagResponse` | `src/Asana/Models/TasksRemoveTagResponse.cs` |
| `RemoveTagForTaskError` | `src/Asana/Errors/RemoveTagForTaskError.cs` |
| `ErrorResponseModel` | `src/Asana/Models/ErrorResponseModel.cs` |

### SearchTasksForWorkspace

- **Auth**: `options.PersonalAccessToken` OR `options.Oauth2`
- **Signature**: `SearchTasksForWorkspace(SearchTasksForWorkspaceRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `WorkspaceGid`
- **Query params (wire ← C#)**: `opt_pretty` ← `OptPretty`, `opt_fields` ← `OptFields` (comma-separated), `text` ← `Text`, `resource_subtype` ← `ResourceSubtype`, `assignee.any` ← `AssigneeAny`, `assignee.not` ← `AssigneeNot`, `portfolios.any` ← `PortfoliosAny`, `projects.any` ← `ProjectsAny`, `projects.not` ← `ProjectsNot`, `projects.all` ← `ProjectsAll`, `sections.any` ← `SectionsAny`, `sections.not` ← `SectionsNot`, `sections.all` ← `SectionsAll`, `tags.any` ← `TagsAny`, `tags.not` ← `TagsNot`, `tags.all` ← `TagsAll`, `teams.any` ← `TeamsAny`, `followers.not` ← `FollowersNot`, `created_by.any` ← `CreatedByAny`, `created_by.not` ← `CreatedByNot`, `assigned_by.any` ← `AssignedByAny`, `assigned_by.not` ← `AssignedByNot`, `liked_by.not` ← `LikedByNot`, `commented_on_by.not` ← `CommentedOnByNot`, `due_on.before` ← `DueOnBefore`, `due_on.after` ← `DueOnAfter`, `due_on` ← `DueOn`, `due_at.before` ← `DueAtBefore`, `due_at.after` ← `DueAtAfter`, `start_on.before` ← `StartOnBefore`, `start_on.after` ← `StartOnAfter`, `start_on` ← `StartOn`, `created_on.before` ← `CreatedOnBefore`, `created_on.after` ← `CreatedOnAfter`, `created_on` ← `CreatedOn`, `created_at.before` ← `CreatedAtBefore`, `created_at.after` ← `CreatedAtAfter`, `completed_on.before` ← `CompletedOnBefore`, `completed_on.after` ← `CompletedOnAfter`, `completed_on` ← `CompletedOn`, `completed_at.before` ← `CompletedAtBefore`, `completed_at.after` ← `CompletedAtAfter`, `modified_on.before` ← `ModifiedOnBefore`, `modified_on.after` ← `ModifiedOnAfter`, `modified_on` ← `ModifiedOn`, `modified_at.before` ← `ModifiedAtBefore`, `modified_at.after` ← `ModifiedAtAfter`, `is_blocking` ← `IsBlocking`, `is_blocked` ← `IsBlocked`, `has_attachment` ← `HasAttachment`, `completed` ← `Completed`, `is_subtask` ← `IsSubtask`, `sort_by` ← `SortBy`, `sort_ascending` ← `SortAscending`
- **Returns**: `WorkspacesTasksSearchResponse`
- **Error**: `ApiException<SearchTasksForWorkspaceError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `SearchTasksForWorkspaceRequest` | `src/Asana/Requests/Tasks/SearchTasksForWorkspaceRequest.cs` |
| `ResourceSubtype2AsanaTasksApi` | `src/Asana/Models/Enums/ResourceSubtype2AsanaTasksApi.cs` |
| `SortBy` | `src/Asana/Models/Enums/SortBy.cs` |
| `WorkspacesTasksSearchResponse` | `src/Asana/Models/WorkspacesTasksSearchResponse.cs` |
| `SearchTasksForWorkspaceError` | `src/Asana/Errors/SearchTasksForWorkspaceError.cs` |
| `ErrorResponseModel` | `src/Asana/Models/ErrorResponseModel.cs` |

### SetParentForTask

- **Auth**: `options.PersonalAccessToken` OR `options.Oauth2`
- **Signature**: `SetParentForTask(SetParentForTaskRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `TaskGid`, `Body`
- **Query params (wire ← C#)**: `opt_pretty` ← `OptPretty`, `opt_fields` ← `OptFields` (comma-separated)
- **Returns**: `TasksSetParentResponse`
- **Error**: `ApiException<SetParentForTaskError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `SetParentForTaskRequest` | `src/Asana/Requests/Tasks/SetParentForTaskRequest.cs` |
| `TasksSetParentRequest` | `src/Asana/Models/TasksSetParentRequest.cs` |
| `TasksSetParentResponse` | `src/Asana/Models/TasksSetParentResponse.cs` |
| `SetParentForTaskError` | `src/Asana/Errors/SetParentForTaskError.cs` |
| `ErrorResponseModel` | `src/Asana/Models/ErrorResponseModel.cs` |

### UpdateTask

- **Auth**: `options.PersonalAccessToken` OR `options.Oauth2`
- **Signature**: `UpdateTask(UpdateTaskRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `TaskGid`, `Body`
- **Query params (wire ← C#)**: `opt_pretty` ← `OptPretty`, `opt_fields` ← `OptFields` (comma-separated)
- **Returns**: `TasksResponse1`
- **Error**: `ApiException<UpdateTaskError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UpdateTaskRequest` | `src/Asana/Requests/Tasks/UpdateTaskRequest.cs` |
| `TasksRequest` | `src/Asana/Models/TasksRequest.cs` |
| `TasksResponse1` | `src/Asana/Models/TasksResponse1.cs` |
| `UpdateTaskError` | `src/Asana/Errors/UpdateTaskError.cs` |
| `ErrorResponseModel` | `src/Asana/Models/ErrorResponseModel.cs` |

