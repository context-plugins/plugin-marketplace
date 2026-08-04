# ProjectApi — operations

Accessor: `client.ProjectApi` · Source: `Api/ProjectApi.cs` · 16 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### CreateProject
- **HTTP**: `POST /Projects` (Default9 (api))
- **Signature**: `CreateProject(string xeroTenantId, string? idempotencyKey, ProjectCreateOrUpdate body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `idempotencyKey` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `Project`
- **Error**: `SdkException<CreateProjectError>` — **Case A (typed)**
- **Error accessors**: `TryGetError3(out Error3)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### CreateTask
- **HTTP**: `POST /Projects/{projectId}/Tasks` (Default9 (api))
- **Notes**: Allows you to create a specific task
- **Signature**: `CreateTask(Guid projectId, string xeroTenantId, string? idempotencyKey, TaskCreateOrUpdate body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `idempotencyKey` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `TaskModel`
- **Error**: `SdkException<CreateTaskError>` — **Case A (typed)**
- **Error accessors**: `TryGetError3(out Error3)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### CreateTimeEntry
- **HTTP**: `POST /Projects/{projectId}/Time` (Default9 (api))
- **Notes**: Allows you to create a specific task
- **Signature**: `CreateTimeEntry(Guid projectId, string xeroTenantId, string? idempotencyKey, TimeEntryCreateOrUpdate body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `idempotencyKey` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `TimeEntry`
- **Error**: `SdkException<CreateTimeEntryError>` — **Case A (typed)**
- **Error accessors**: `TryGetError3(out Error3)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### DeleteTask
- **HTTP**: `DELETE /Projects/{projectId}/Tasks/{taskId}` (Default9 (api))
- **Notes**: Allows you to delete a specific task
- **Signature**: `DeleteTask(Guid projectId, Guid taskId, string xeroTenantId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<DeleteTaskError>` — **Case A (typed)**
- **Error accessors**: `TryGetError3(out Error3)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### DeleteTimeEntry
- **HTTP**: `DELETE /Projects/{projectId}/Time/{timeEntryId}` (Default9 (api))
- **Notes**: Allows you to delete a specific time entry
- **Signature**: `DeleteTimeEntry(Guid projectId, Guid timeEntryId, string xeroTenantId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<DeleteTimeEntryError>` — **Case A (typed)**
- **Error accessors**: `TryGetError3(out Error3)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetProject
- **HTTP**: `GET /Projects/{projectId}` (Default9 (api))
- **Notes**: Allows you to retrieve a specific project using the projectId
- **Signature**: `GetProject(Guid projectId, string xeroTenantId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `Project`
- **Error**: `SdkException<GetProjectError>` — **Case A (typed)**
- **Error accessors**: `TryGetError3(out Error3)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetProjectUsers
- **HTTP**: `GET /ProjectsUsers` (Default9 (api))
- **Notes**: Allows you to retrieve the users on a projects.
- **Signature**: `GetProjectUsers(string xeroTenantId, int? page = 1, int? pageSize = 50, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `page` = 1, `pageSize` = 50, `requestOptions` = null
- **Query params (wire ← C#)**: `page` ← `page`, `pageSize` ← `pageSize`
- **Returns**: `ProjectUsers`
- **Error**: `SdkException<GetProjectUsersError>` — **Case A (typed)**
- **Error accessors**: `TryGetError3(out Error3)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)

### GetProjects
- **HTTP**: `GET /Projects` (Default9 (api))
- **Notes**: Allows you to retrieve, create and update projects.
- **Signature**: `GetProjects(IReadOnlyList<Guid>? projectIds, Guid? contactId, string? states, string xeroTenantId, int? page = 1, int? pageSize = 50, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `projectIds` — nullable, no default → **must pass explicitly**
  - `contactId` — nullable, no default → **must pass explicitly**
  - `states` — nullable, no default → **must pass explicitly**
  - defaults: `page` = 1, `pageSize` = 50, `requestOptions` = null
- **Query params (wire ← C#)**: `projectIds` ← `projectIds`, `contactID` ← `contactId`, `states` ← `states`, `page` ← `page`, `pageSize` ← `pageSize`
- **Returns**: `Projects`
- **Error**: `SdkException<GetProjectsError>` — **Case A (typed)**
- **Error accessors**: `TryGetError3(out Error3)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)

### GetTask
- **HTTP**: `GET /Projects/{projectId}/Tasks/{taskId}` (Default9 (api))
- **Notes**: Allows you to retrieve a specific project
- **Signature**: `GetTask(Guid projectId, Guid taskId, string xeroTenantId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `TaskModel`
- **Error**: `SdkException<GetTaskError>` — **Case A (typed)**
- **Error accessors**: `TryGetError3(out Error3)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetTasks
- **HTTP**: `GET /Projects/{projectId}/Tasks` (Default9 (api))
- **Notes**: Allows you to retrieve a specific project
- **Signature**: `GetTasks(Guid projectId, int? page, int? pageSize, string? taskIds, ChargeType? chargeType, string xeroTenantId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 4 params (`page` … `chargeType`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `page` ← `page`, `pageSize` ← `pageSize`, `taskIds` ← `taskIds`, `chargeType` ← `chargeType`
- **Returns**: `Tasks`
- **Error**: `SdkException<GetTasksError>` — **Case A (typed)**
- **Error accessors**: `TryGetError3(out Error3)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)

### GetTimeEntries
- **HTTP**: `GET /Projects/{projectId}/Time` (Default9 (api))
- **Notes**: Allows you to retrieve the time entries associated with a specific project
- **Signature**: `GetTimeEntries(Guid projectId, Guid? userId, Guid? taskId, Guid? invoiceId, Guid? contactId, int? page, int? pageSize, IReadOnlyList<string>? states, bool? isChargeable, DateTimeOffset? dateAfterUtc, DateTimeOffset? dateBeforeUtc, string xeroTenantId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 10 params (`userId` … `dateBeforeUtc`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `userId` ← `userId`, `taskId` ← `taskId`, `invoiceId` ← `invoiceId`, `contactId` ← `contactId`, `page` ← `page`, `pageSize` ← `pageSize`, `states` ← `states`, `isChargeable` ← `isChargeable`, `dateAfterUtc` ← `dateAfterUtc`, `dateBeforeUtc` ← `dateBeforeUtc`
- **Returns**: `TimeEntries`
- **Error**: `SdkException<GetTimeEntriesError>` — **Case A (typed)**
- **Error accessors**: `TryGetError3(out Error3)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)

### GetTimeEntry
- **HTTP**: `GET /Projects/{projectId}/Time/{timeEntryId}` (Default9 (api))
- **Notes**: Allows you to get a single time entry in a project
- **Signature**: `GetTimeEntry(Guid projectId, Guid timeEntryId, string xeroTenantId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `TimeEntry`
- **Error**: `SdkException<GetTimeEntryError>` — **Case A (typed)**
- **Error accessors**: `TryGetError3(out Error3)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### PatchProject
- **HTTP**: `PATCH /Projects/{projectId}` (Default9 (api))
- **Notes**: Allows you to update a specific projects.
- **Signature**: `PatchProject(Guid projectId, string xeroTenantId, string? idempotencyKey, ProjectPatch body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `idempotencyKey` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<PatchProjectError>` — **Case A (typed)**
- **Error accessors**: `TryGetError3(out Error3)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### UpdateProject
- **HTTP**: `PUT /Projects/{projectId}` (Default9 (api))
- **Notes**: Allows you to update a specific projects.
- **Signature**: `UpdateProject(Guid projectId, string xeroTenantId, string? idempotencyKey, ProjectCreateOrUpdate body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `idempotencyKey` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<UpdateProjectError>` — **Case A (typed)**
- **Error accessors**: `TryGetError3(out Error3)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### UpdateTask
- **HTTP**: `PUT /Projects/{projectId}/Tasks/{taskId}` (Default9 (api))
- **Notes**: Allows you to update a specific task
- **Signature**: `UpdateTask(Guid projectId, Guid taskId, string xeroTenantId, string? idempotencyKey, TaskCreateOrUpdate body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `idempotencyKey` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<UpdateTaskError>` — **Case A (typed)**
- **Error accessors**: `TryGetError3(out Error3)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### UpdateTimeEntry
- **HTTP**: `PUT /Projects/{projectId}/Time/{timeEntryId}` (Default9 (api))
- **Notes**: Allows you to update time entry in a project
- **Signature**: `UpdateTimeEntry(Guid projectId, Guid timeEntryId, string xeroTenantId, string? idempotencyKey, TimeEntryCreateOrUpdate body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `idempotencyKey` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<UpdateTimeEntryError>` — **Case A (typed)**
- **Error accessors**: `TryGetError3(out Error3)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
