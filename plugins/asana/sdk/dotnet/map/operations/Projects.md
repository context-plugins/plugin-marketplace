<!-- Generated file — do not edit; regenerated with the SDK. -->

# Projects — operations

Accessor: `client.Projects` · Source: `src/Asana/Api/Projects.cs` · 19 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### AddCustomFieldSettingForProject

- **Auth**: `options.PersonalAccessToken` OR `options.Oauth2`
- **Signature**: `AddCustomFieldSettingForProject(AddCustomFieldSettingForProjectRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectGid`, `Body`
- **Query params (wire ← C#)**: `opt_pretty` ← `OptPretty`
- **Returns**: `ProjectsAddCustomFieldSettingResponse`
- **Error**: `ApiException<AddCustomFieldSettingForProjectError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `AddCustomFieldSettingForProjectRequest` | `src/Asana/Requests/Projects/AddCustomFieldSettingForProjectRequest.cs` |
| `ProjectsAddCustomFieldSettingRequest` | `src/Asana/Models/ProjectsAddCustomFieldSettingRequest.cs` |
| `ProjectsAddCustomFieldSettingResponse` | `src/Asana/Models/ProjectsAddCustomFieldSettingResponse.cs` |
| `AddCustomFieldSettingForProjectError` | `src/Asana/Errors/AddCustomFieldSettingForProjectError.cs` |
| `ErrorResponseModel` | `src/Asana/Models/ErrorResponseModel.cs` |

### AddFollowersForProject

- **Auth**: `options.PersonalAccessToken` OR `options.Oauth2`
- **Signature**: `AddFollowersForProject(AddFollowersForProjectRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectGid`, `Body`
- **Query params (wire ← C#)**: `opt_pretty` ← `OptPretty`, `opt_fields` ← `OptFields` (comma-separated)
- **Returns**: `ProjectsAddFollowersResponse`
- **Error**: `ApiException<AddFollowersForProjectError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `AddFollowersForProjectRequest` | `src/Asana/Requests/Projects/AddFollowersForProjectRequest.cs` |
| `ProjectsAddFollowersRequest` | `src/Asana/Models/ProjectsAddFollowersRequest.cs` |
| `ProjectsAddFollowersResponse` | `src/Asana/Models/ProjectsAddFollowersResponse.cs` |
| `AddFollowersForProjectError` | `src/Asana/Errors/AddFollowersForProjectError.cs` |
| `ErrorResponseModel` | `src/Asana/Models/ErrorResponseModel.cs` |

### AddMembersForProject

- **Auth**: `options.PersonalAccessToken` OR `options.Oauth2`
- **Signature**: `AddMembersForProject(AddMembersForProjectRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectGid`, `Body`
- **Query params (wire ← C#)**: `opt_pretty` ← `OptPretty`, `opt_fields` ← `OptFields` (comma-separated)
- **Returns**: `ProjectsAddMembersResponse`
- **Error**: `ApiException<AddMembersForProjectError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `AddMembersForProjectRequest` | `src/Asana/Requests/Projects/AddMembersForProjectRequest.cs` |
| `ProjectsAddMembersRequest` | `src/Asana/Models/ProjectsAddMembersRequest.cs` |
| `ProjectsAddMembersResponse` | `src/Asana/Models/ProjectsAddMembersResponse.cs` |
| `AddMembersForProjectError` | `src/Asana/Errors/AddMembersForProjectError.cs` |
| `ErrorResponseModel` | `src/Asana/Models/ErrorResponseModel.cs` |

### CreateProject

- **Auth**: `options.PersonalAccessToken` OR `options.Oauth2`
- **Signature**: `CreateProject(CreateProjectRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Query params (wire ← C#)**: `opt_pretty` ← `OptPretty`, `opt_fields` ← `OptFields` (comma-separated)
- **Returns**: `ProjectsResponse1`
- **Error**: `ApiException<CreateProjectError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateProjectRequest` | `src/Asana/Requests/Projects/CreateProjectRequest.cs` |
| `ProjectsRequest` | `src/Asana/Models/ProjectsRequest.cs` |
| `ProjectsResponse1` | `src/Asana/Models/ProjectsResponse1.cs` |
| `CreateProjectError` | `src/Asana/Errors/CreateProjectError.cs` |
| `ErrorResponseModel` | `src/Asana/Models/ErrorResponseModel.cs` |

### CreateProjectForTeam

- **Auth**: `options.PersonalAccessToken` OR `options.Oauth2`
- **Signature**: `CreateProjectForTeam(CreateProjectForTeamRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `TeamGid`, `Body`
- **Query params (wire ← C#)**: `opt_pretty` ← `OptPretty`, `opt_fields` ← `OptFields` (comma-separated)
- **Returns**: `TeamsProjectsResponse1`
- **Error**: `ApiException<CreateProjectForTeamError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateProjectForTeamRequest` | `src/Asana/Requests/Projects/CreateProjectForTeamRequest.cs` |
| `TeamsProjectsRequest` | `src/Asana/Models/TeamsProjectsRequest.cs` |
| `TeamsProjectsResponse1` | `src/Asana/Models/TeamsProjectsResponse1.cs` |
| `CreateProjectForTeamError` | `src/Asana/Errors/CreateProjectForTeamError.cs` |
| `ErrorResponseModel` | `src/Asana/Models/ErrorResponseModel.cs` |

### CreateProjectForWorkspace

- **Auth**: `options.PersonalAccessToken` OR `options.Oauth2`
- **Signature**: `CreateProjectForWorkspace(CreateProjectForWorkspaceRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `WorkspaceGid`, `Body`
- **Query params (wire ← C#)**: `opt_pretty` ← `OptPretty`, `opt_fields` ← `OptFields` (comma-separated)
- **Returns**: `WorkspacesProjectsResponse1`
- **Error**: `ApiException<CreateProjectForWorkspaceError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateProjectForWorkspaceRequest` | `src/Asana/Requests/Projects/CreateProjectForWorkspaceRequest.cs` |
| `WorkspacesProjectsRequest` | `src/Asana/Models/WorkspacesProjectsRequest.cs` |
| `WorkspacesProjectsResponse1` | `src/Asana/Models/WorkspacesProjectsResponse1.cs` |
| `CreateProjectForWorkspaceError` | `src/Asana/Errors/CreateProjectForWorkspaceError.cs` |
| `ErrorResponseModel` | `src/Asana/Models/ErrorResponseModel.cs` |

### DeleteProject

- **Auth**: `options.PersonalAccessToken` OR `options.Oauth2`
- **Signature**: `DeleteProject(DeleteProjectRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectGid`
- **Query params (wire ← C#)**: `opt_pretty` ← `OptPretty`, `opt_fields` ← `OptFields` (comma-separated)
- **Returns**: `ProjectsResponse4`
- **Error**: `ApiException<DeleteProjectError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteProjectRequest` | `src/Asana/Requests/Projects/DeleteProjectRequest.cs` |
| `ProjectsResponse4` | `src/Asana/Models/ProjectsResponse4.cs` |
| `DeleteProjectError` | `src/Asana/Errors/DeleteProjectError.cs` |
| `ErrorResponseModel` | `src/Asana/Models/ErrorResponseModel.cs` |

### DuplicateProject

- **Auth**: `options.PersonalAccessToken` OR `options.Oauth2`
- **Signature**: `DuplicateProject(DuplicateProjectRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectGid`
- **Query params (wire ← C#)**: `opt_pretty` ← `OptPretty`, `opt_fields` ← `OptFields` (comma-separated)
- **Returns**: `ProjectsDuplicateResponse`
- **Error**: `ApiException<DuplicateProjectError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DuplicateProjectRequest` | `src/Asana/Requests/Projects/DuplicateProjectRequest.cs` |
| `ProjectsDuplicateRequest` | `src/Asana/Models/ProjectsDuplicateRequest.cs` |
| `ProjectsDuplicateResponse` | `src/Asana/Models/ProjectsDuplicateResponse.cs` |
| `DuplicateProjectError` | `src/Asana/Errors/DuplicateProjectError.cs` |
| `ErrorResponseModel` | `src/Asana/Models/ErrorResponseModel.cs` |

### GetProject

- **Auth**: `options.PersonalAccessToken` OR `options.Oauth2`
- **Signature**: `GetProject(GetProjectRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectGid`
- **Query params (wire ← C#)**: `opt_pretty` ← `OptPretty`, `opt_fields` ← `OptFields` (comma-separated)
- **Returns**: `ProjectsResponse1`
- **Error**: `ApiException<GetProjectError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetProjectRequest` | `src/Asana/Requests/Projects/GetProjectRequest.cs` |
| `ProjectsResponse1` | `src/Asana/Models/ProjectsResponse1.cs` |
| `GetProjectError` | `src/Asana/Errors/GetProjectError.cs` |
| `ErrorResponseModel` | `src/Asana/Models/ErrorResponseModel.cs` |

### GetProjects

- **Auth**: `options.PersonalAccessToken` OR `options.Oauth2`
- **Signature**: `GetProjects(GetProjectsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `opt_pretty` ← `OptPretty`, `opt_fields` ← `OptFields` (comma-separated), `limit` ← `Limit`, `offset` ← `Offset`, `workspace` ← `Workspace`, `team` ← `Team`, `archived` ← `Archived`
- **Returns**: `ProjectsResponse`
- **Error**: `ApiException<GetProjectsError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetProjectsRequest` | `src/Asana/Requests/Projects/GetProjectsRequest.cs` |
| `ProjectsResponse` | `src/Asana/Models/ProjectsResponse.cs` |
| `GetProjectsError` | `src/Asana/Errors/GetProjectsError.cs` |
| `ErrorResponseModel` | `src/Asana/Models/ErrorResponseModel.cs` |

### GetProjectsForTask

- **Auth**: `options.PersonalAccessToken` OR `options.Oauth2`
- **Signature**: `GetProjectsForTask(GetProjectsForTaskRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `TaskGid`
- **Query params (wire ← C#)**: `opt_pretty` ← `OptPretty`, `opt_fields` ← `OptFields` (comma-separated), `limit` ← `Limit`, `offset` ← `Offset`
- **Returns**: `TasksProjectsResponse`
- **Error**: `ApiException<GetProjectsForTaskError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetProjectsForTaskRequest` | `src/Asana/Requests/Projects/GetProjectsForTaskRequest.cs` |
| `TasksProjectsResponse` | `src/Asana/Models/TasksProjectsResponse.cs` |
| `GetProjectsForTaskError` | `src/Asana/Errors/GetProjectsForTaskError.cs` |
| `ErrorResponseModel` | `src/Asana/Models/ErrorResponseModel.cs` |

### GetProjectsForTeam

- **Auth**: `options.PersonalAccessToken` OR `options.Oauth2`
- **Signature**: `GetProjectsForTeam(GetProjectsForTeamRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `TeamGid`
- **Query params (wire ← C#)**: `opt_pretty` ← `OptPretty`, `opt_fields` ← `OptFields` (comma-separated), `limit` ← `Limit`, `offset` ← `Offset`, `archived` ← `Archived`
- **Returns**: `TeamsProjectsResponse`
- **Error**: `ApiException<GetProjectsForTeamError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetProjectsForTeamRequest` | `src/Asana/Requests/Projects/GetProjectsForTeamRequest.cs` |
| `TeamsProjectsResponse` | `src/Asana/Models/TeamsProjectsResponse.cs` |
| `GetProjectsForTeamError` | `src/Asana/Errors/GetProjectsForTeamError.cs` |
| `ErrorResponseModel` | `src/Asana/Models/ErrorResponseModel.cs` |

### GetProjectsForWorkspace

- **Auth**: `options.PersonalAccessToken` OR `options.Oauth2`
- **Signature**: `GetProjectsForWorkspace(GetProjectsForWorkspaceRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `WorkspaceGid`
- **Query params (wire ← C#)**: `opt_pretty` ← `OptPretty`, `opt_fields` ← `OptFields` (comma-separated), `limit` ← `Limit`, `offset` ← `Offset`, `archived` ← `Archived`
- **Returns**: `WorkspacesProjectsResponse`
- **Error**: `ApiException<GetProjectsForWorkspaceError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetProjectsForWorkspaceRequest` | `src/Asana/Requests/Projects/GetProjectsForWorkspaceRequest.cs` |
| `WorkspacesProjectsResponse` | `src/Asana/Models/WorkspacesProjectsResponse.cs` |
| `GetProjectsForWorkspaceError` | `src/Asana/Errors/GetProjectsForWorkspaceError.cs` |
| `ErrorResponseModel` | `src/Asana/Models/ErrorResponseModel.cs` |

### GetTaskCountsForProject

- **Auth**: `options.PersonalAccessToken` OR `options.Oauth2`
- **Signature**: `GetTaskCountsForProject(GetTaskCountsForProjectRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectGid`
- **Query params (wire ← C#)**: `opt_pretty` ← `OptPretty`, `opt_fields` ← `OptFields` (comma-separated), `limit` ← `Limit`, `offset` ← `Offset`
- **Returns**: `ProjectsTaskCountsResponse`
- **Error**: `ApiException<GetTaskCountsForProjectError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetTaskCountsForProjectRequest` | `src/Asana/Requests/Projects/GetTaskCountsForProjectRequest.cs` |
| `ProjectsTaskCountsResponse` | `src/Asana/Models/ProjectsTaskCountsResponse.cs` |
| `GetTaskCountsForProjectError` | `src/Asana/Errors/GetTaskCountsForProjectError.cs` |
| `ErrorResponseModel` | `src/Asana/Models/ErrorResponseModel.cs` |

### ProjectSaveAsTemplate

- **Auth**: `options.PersonalAccessToken` OR `options.Oauth2`
- **Signature**: `ProjectSaveAsTemplate(ProjectSaveAsTemplateOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectGid`, `Body`
- **Query params (wire ← C#)**: `opt_pretty` ← `OptPretty`, `opt_fields` ← `OptFields` (comma-separated)
- **Returns**: `ProjectsSaveAsTemplateResponse`
- **Error**: `ApiException<ProjectSaveAsTemplateError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ProjectSaveAsTemplateOperationRequest` | `src/Asana/Requests/Projects/ProjectSaveAsTemplateOperationRequest.cs` |
| `ProjectsSaveAsTemplateRequest` | `src/Asana/Models/ProjectsSaveAsTemplateRequest.cs` |
| `ProjectsSaveAsTemplateResponse` | `src/Asana/Models/ProjectsSaveAsTemplateResponse.cs` |
| `ProjectSaveAsTemplateError` | `src/Asana/Errors/ProjectSaveAsTemplateError.cs` |
| `ErrorResponseModel` | `src/Asana/Models/ErrorResponseModel.cs` |

### RemoveCustomFieldSettingForProject

- **Auth**: `options.PersonalAccessToken` OR `options.Oauth2`
- **Signature**: `RemoveCustomFieldSettingForProject(RemoveCustomFieldSettingForProjectRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectGid`, `Body`
- **Query params (wire ← C#)**: `opt_pretty` ← `OptPretty`
- **Returns**: `ProjectsRemoveCustomFieldSettingResponse`
- **Error**: `ApiException<RemoveCustomFieldSettingForProjectError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `RemoveCustomFieldSettingForProjectRequest` | `src/Asana/Requests/Projects/RemoveCustomFieldSettingForProjectRequest.cs` |
| `ProjectsRemoveCustomFieldSettingRequest` | `src/Asana/Models/ProjectsRemoveCustomFieldSettingRequest.cs` |
| `ProjectsRemoveCustomFieldSettingResponse` | `src/Asana/Models/ProjectsRemoveCustomFieldSettingResponse.cs` |
| `RemoveCustomFieldSettingForProjectError` | `src/Asana/Errors/RemoveCustomFieldSettingForProjectError.cs` |
| `ErrorResponseModel` | `src/Asana/Models/ErrorResponseModel.cs` |

### RemoveFollowersForProject

- **Auth**: `options.PersonalAccessToken` OR `options.Oauth2`
- **Signature**: `RemoveFollowersForProject(RemoveFollowersForProjectRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectGid`, `Body`
- **Query params (wire ← C#)**: `opt_pretty` ← `OptPretty`, `opt_fields` ← `OptFields` (comma-separated)
- **Returns**: `ProjectsRemoveFollowersResponse`
- **Error**: `ApiException<RemoveFollowersForProjectError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `RemoveFollowersForProjectRequest` | `src/Asana/Requests/Projects/RemoveFollowersForProjectRequest.cs` |
| `ProjectsRemoveFollowersRequest` | `src/Asana/Models/ProjectsRemoveFollowersRequest.cs` |
| `ProjectsRemoveFollowersResponse` | `src/Asana/Models/ProjectsRemoveFollowersResponse.cs` |
| `RemoveFollowersForProjectError` | `src/Asana/Errors/RemoveFollowersForProjectError.cs` |
| `ErrorResponseModel` | `src/Asana/Models/ErrorResponseModel.cs` |

### RemoveMembersForProject

- **Auth**: `options.PersonalAccessToken` OR `options.Oauth2`
- **Signature**: `RemoveMembersForProject(RemoveMembersForProjectRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectGid`, `Body`
- **Query params (wire ← C#)**: `opt_pretty` ← `OptPretty`, `opt_fields` ← `OptFields` (comma-separated)
- **Returns**: `ProjectsRemoveMembersResponse`
- **Error**: `ApiException<RemoveMembersForProjectError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `RemoveMembersForProjectRequest` | `src/Asana/Requests/Projects/RemoveMembersForProjectRequest.cs` |
| `ProjectsRemoveMembersRequest` | `src/Asana/Models/ProjectsRemoveMembersRequest.cs` |
| `ProjectsRemoveMembersResponse` | `src/Asana/Models/ProjectsRemoveMembersResponse.cs` |
| `RemoveMembersForProjectError` | `src/Asana/Errors/RemoveMembersForProjectError.cs` |
| `ErrorResponseModel` | `src/Asana/Models/ErrorResponseModel.cs` |

### UpdateProject

- **Auth**: `options.PersonalAccessToken` OR `options.Oauth2`
- **Signature**: `UpdateProject(UpdateProjectRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectGid`, `Body`
- **Query params (wire ← C#)**: `opt_pretty` ← `OptPretty`, `opt_fields` ← `OptFields` (comma-separated)
- **Returns**: `ProjectsResponse1`
- **Error**: `ApiException<UpdateProjectError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UpdateProjectRequest` | `src/Asana/Requests/Projects/UpdateProjectRequest.cs` |
| `ProjectsRequest` | `src/Asana/Models/ProjectsRequest.cs` |
| `ProjectsResponse1` | `src/Asana/Models/ProjectsResponse1.cs` |
| `UpdateProjectError` | `src/Asana/Errors/UpdateProjectError.cs` |
| `ErrorResponseModel` | `src/Asana/Models/ErrorResponseModel.cs` |

