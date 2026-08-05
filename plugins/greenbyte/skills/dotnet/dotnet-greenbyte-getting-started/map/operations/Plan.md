# Plan — operations

Accessor: `client.Plan` · Source: `Api/Plan.cs` · 19 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### DownloadTaskFile
- **HTTP**: `GET /tasks/{taskId}/files/{fileId}/content` (Default)
- **Notes**: Downloads a file belonging to a task. _🔐 This endpoint requires the Plan endpoint permission._
- **Signature**: `DownloadTaskFile(int taskId, int fileId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<DownloadTaskFileError>` — **Case A (typed)**
- **Error accessors**: `TryGetTasksFilesContent400Error1(out TasksFilesContent400Error1)` [400] · `TryGetNoContent(out RawError)` [401, 403, 404, 405] · `TryGetTasksFilesContent429Error1(out TasksFilesContent429Error1)` [429] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetDeviceAccess
- **HTTP**: `GET /device-accesses/{deviceAccessId}` (Default)
- **Notes**: Get a single device access by ID. _🔐 This endpoint requires the Plan endpoint permission._
- **Signature**: `GetDeviceAccess(int deviceAccessId, bool? useUtc = false, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `useUtc` = false, `requestOptions` = null
- **Query params (wire ← C#)**: `useUtc` ← `useUtc`
- **Returns**: `DeviceAccessesResponse`
- **Error**: `SdkException<GetDeviceAccessError>` — **Case A (typed)**
- **Error accessors**: `TryGetDeviceAccesses400Error1(out DeviceAccesses400Error1)` [400] · `TryGetNoContent(out RawError)` [401, 403, 404, 405] · `TryGetDeviceAccesses429Error1(out DeviceAccesses429Error1)` [429] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetDowntimeEvent
- **HTTP**: `GET /downtime-events/{downtimeEventId}` (Default)
- **Notes**: Gets a single downtime event by ID. _🔐 This endpoint requires the Plan endpoint permission._
- **Signature**: `GetDowntimeEvent(int downtimeEventId, bool? useUtc = false, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `useUtc` = false, `requestOptions` = null
- **Query params (wire ← C#)**: `useUtc` ← `useUtc`
- **Returns**: `DowntimeEventsResponse`
- **Error**: `SdkException<GetDowntimeEventError>` — **Case A (typed)**
- **Error accessors**: `TryGetDowntimeEvents400Error1(out DowntimeEvents400Error1)` [400] · `TryGetNoContent(out RawError)` [401, 403, 404, 405] · `TryGetDowntimeEvents429Error1(out DowntimeEvents429Error1)` [429] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetHseIncident
- **HTTP**: `GET /hse-incidents/{hseIncidentId}` (Default)
- **Notes**: Get a single HSE incident by ID. _🔐 This endpoint requires the Plan endpoint permission._ _This is a beta feature. Some details might change before it is released as a stable version._
- **Signature**: `GetHseIncident(int hseIncidentId, bool? useUtc = false, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `useUtc` = false, `requestOptions` = null
- **Query params (wire ← C#)**: `useUtc` ← `useUtc`
- **Returns**: `HseIncidentsResponse1`
- **Error**: `SdkException<GetHseIncidentError>` — **Case A (typed)**
- **Error accessors**: `TryGetHseIncidents400Error1(out HseIncidents400Error1)` [400] · `TryGetNoContent(out RawError)` [401, 403, 404, 405] · `TryGetHseIncidents429Error1(out HseIncidents429Error1)` [429] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetPersonnel
- **HTTP**: `GET /personnel/{personnelId}` (Default)
- **Notes**: Gets a single personnel by ID. _🔐 This endpoint requires the Plan endpoint permission._
- **Signature**: `GetPersonnel(int personnelId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `PersonnelResponse`
- **Error**: `SdkException<GetPersonnelError>` — **Case A (typed)**
- **Error accessors**: `TryGetPersonnel400Error1(out Personnel400Error1)` [400] · `TryGetNoContent(out RawError)` [401, 403, 404, 405] · `TryGetPersonnel429Error1(out Personnel429Error1)` [429] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetSiteAccess
- **HTTP**: `GET /site-accesses/{siteAccessId}` (Default)
- **Notes**: Gets a specific site access. _🔐 This endpoint requires the Plan endpoint permission._
- **Signature**: `GetSiteAccess(int siteAccessId, bool? useUtc = false, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `useUtc` = false, `requestOptions` = null
- **Query params (wire ← C#)**: `useUtc` ← `useUtc`
- **Returns**: `SiteAccessesResponse`
- **Error**: `SdkException<GetSiteAccessError>` — **Case A (typed)**
- **Error accessors**: `TryGetSiteAccesses400Error1(out SiteAccesses400Error1)` [400] · `TryGetNoContent(out RawError)` [401, 403, 404, 405] · `TryGetSiteAccesses429Error1(out SiteAccesses429Error1)` [429] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetTask
- **HTTP**: `GET /tasks/{taskId}` (Default)
- **Notes**: Get a single task by ID. _🔐 This endpoint requires the Plan endpoint permission._
- **Signature**: `GetTask(int taskId, bool? useUtc = false, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `useUtc` = false, `requestOptions` = null
- **Query params (wire ← C#)**: `useUtc` ← `useUtc`
- **Returns**: `TasksResponse`
- **Error**: `SdkException<GetTaskError>` — **Case A (typed)**
- **Error accessors**: `TryGetTasks400Error1(out Tasks400Error1)` [400] · `TryGetNoContent(out RawError)` [401, 403, 404, 405] · `TryGetTasks429Error1(out Tasks429Error1)` [429] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetWorklogItem
- **HTTP**: `GET /worklog/{worklogItemId}` (Default)
- **Notes**: Get a single worklog item by ID. _🔐 This endpoint requires the Plan endpoint permission._ _This is a beta feature. Some details might change before it is released as a stable version._
- **Signature**: `GetWorklogItem(int worklogItemId, bool? useUtc = false, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `useUtc` = false, `requestOptions` = null
- **Query params (wire ← C#)**: `useUtc` ← `useUtc`
- **Returns**: `WorklogResponse1`
- **Error**: `SdkException<GetWorklogItemError>` — **Case A (typed)**
- **Error accessors**: `TryGetWorklog400Error1(out Worklog400Error1)` [400] · `TryGetNoContent(out RawError)` [401, 403, 404, 405] · `TryGetWorklog429Error1(out Worklog429Error1)` [429] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### ListCommentsForMultipleTasks
- **HTTP**: `GET /tasks-comments` (Default)
- **Notes**: Gets a list of comments belonging to one or more tasks with given taskIds. _🔐 This endpoint requires the Plan endpoint permission._
- **Signature**: `ListCommentsForMultipleTasks(IReadOnlyList<int> taskIds, IReadOnlyList<string>? fields, int? pageSize = 50, int? page = 1, bool? useUtc = false, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `fields` — nullable, no default → **must pass explicitly**
  - defaults: `pageSize` = 50, `page` = 1, `useUtc` = false, `requestOptions` = null
- **Query params (wire ← C#)**: `taskIds` ← `taskIds`, `fields` ← `fields`, `pageSize` ← `pageSize`, `page` ← `page`, `useUtc` ← `useUtc`
- **Returns**: `IReadOnlyList<TaskComment>`
- **Error**: `SdkException<ListCommentsForMultipleTasksError>` — **Case A (typed)**
- **Error accessors**: `TryGetTasksComments400Error1(out TasksComments400Error1)` [400] · `TryGetNoContent(out RawError)` [401, 403, 405] · `TryGetTasksComments429Error1(out TasksComments429Error1)` [429] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)

### ListDeviceAccessesForMultipleSiteAccesses
- **HTTP**: `GET /device-accesses` (Default)
- **Notes**: Gets a list of device accesses belonging to site accesses with specified SiteAccessIds. _🔐 This endpoint requires the Plan endpoint permission._
- **Signature**: `ListDeviceAccessesForMultipleSiteAccesses(IReadOnlyList<int> siteAccessIds, IReadOnlyList<string>? fields, int? pageSize = 50, int? page = 1, bool? useUtc = false, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `fields` — nullable, no default → **must pass explicitly**
  - defaults: `pageSize` = 50, `page` = 1, `useUtc` = false, `requestOptions` = null
- **Query params (wire ← C#)**: `siteAccessIds` ← `siteAccessIds`, `fields` ← `fields`, `pageSize` ← `pageSize`, `page` ← `page`, `useUtc` ← `useUtc`
- **Returns**: `IReadOnlyList<DeviceAccess>`
- **Error**: `SdkException<ListDeviceAccessesForMultipleSiteAccessesError>` — **Case A (typed)**
- **Error accessors**: `TryGetDeviceAccesses400Error1(out DeviceAccesses400Error1)` [400] · `TryGetNoContent(out RawError)` [401, 403, 405] · `TryGetDeviceAccesses429Error1(out DeviceAccesses429Error1)` [429] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)

### ListDowntimeEvents
- **HTTP**: `GET /downtime-events` (Default)
- **Notes**: Gets a list of downtime events. _🔐 This endpoint requires the Plan endpoint permission._
- **Signature**: `ListDowntimeEvents(DateTimeOffset timestampStart, DateTimeOffset timestampEnd, IReadOnlyList<int>? deviceIds, IReadOnlyList<int>? siteIds, IReadOnlyList<string>? fields, int? pageSize = 50, int? page = 1, bool? useUtc = false, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `deviceIds` — nullable, no default → **must pass explicitly**
  - `siteIds` — nullable, no default → **must pass explicitly**
  - `fields` — nullable, no default → **must pass explicitly**
  - defaults: `pageSize` = 50, `page` = 1, `useUtc` = false, `requestOptions` = null
- **Query params (wire ← C#)**: `timestampStart` ← `timestampStart`, `timestampEnd` ← `timestampEnd`, `deviceIds` ← `deviceIds`, `siteIds` ← `siteIds`, `fields` ← `fields`, `pageSize` ← `pageSize`, `page` ← `page`, `useUtc` ← `useUtc`
- **Returns**: `IReadOnlyList<DowntimeEvent>`
- **Error**: `SdkException<ListDowntimeEventsError>` — **Case A (typed)**
- **Error accessors**: `TryGetDowntimeEvents400Error1(out DowntimeEvents400Error1)` [400] · `TryGetNoContent(out RawError)` [401, 403, 405] · `TryGetDowntimeEvents429Error1(out DowntimeEvents429Error1)` [429] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)

### ListHseIncidents
- **HTTP**: `GET /hse-incidents` (Default)
- **Notes**: Gets a list of HSE incidents. _🔐 This endpoint requires the Plan endpoint permission._ _This is a beta feature. Some details might change before it is released as a stable version._
- **Signature**: `ListHseIncidents(DateTimeOffset timestampStart, DateTimeOffset timestampEnd, IReadOnlyList<int>? siteIds, State? state, Hsecategory? category, bool? useUtc = false, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `siteIds` — nullable, no default → **must pass explicitly**
  - `state` — nullable, no default → **must pass explicitly**
  - `category` — nullable, no default → **must pass explicitly**
  - defaults: `useUtc` = false, `requestOptions` = null
- **Query params (wire ← C#)**: `timestampStart` ← `timestampStart`, `timestampEnd` ← `timestampEnd`, `siteIds` ← `siteIds`, `state` ← `state`, `category` ← `category`, `useUtc` ← `useUtc`
- **Returns**: `IReadOnlyList<HseIncidentsResponse>`
- **Error**: `SdkException<ListHseIncidentsError>` — **Case A (typed)**
- **Error accessors**: `TryGetHseIncidents400Error1(out HseIncidents400Error1)` [400] · `TryGetNoContent(out RawError)` [401, 403, 405] · `TryGetHseIncidents429Error1(out HseIncidents429Error1)` [429] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### ListOrganizations
- **HTTP**: `GET /organizations` (Default)
- **Notes**: Gets a list of organizations. _🔐 This endpoint requires the Plan endpoint permission._
- **Signature**: `ListOrganizations(RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<Organization>`
- **Error**: `SdkException<ListOrganizationsError>` — **Case A (typed)**
- **Error accessors**: `TryGetOrganizations400Error1(out Organizations400Error1)` [400] · `TryGetNoContent(out RawError)` [401, 403, 405] · `TryGetOrganizations429Error1(out Organizations429Error1)` [429] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### ListPersonnel
- **HTTP**: `GET /personnel` (Default)
- **Notes**: Gets a list of personnel. _🔐 This endpoint requires the Plan endpoint permission._
- **Signature**: `ListPersonnel(IReadOnlyList<string>? fields, int? pageSize = 50, int? page = 1, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `fields` — nullable, no default → **must pass explicitly**
  - defaults: `pageSize` = 50, `page` = 1, `requestOptions` = null
- **Query params (wire ← C#)**: `fields` ← `fields`, `pageSize` ← `pageSize`, `page` ← `page`
- **Returns**: `IReadOnlyList<Personnel>`
- **Error**: `SdkException<ListPersonnelError>` — **Case A (typed)**
- **Error accessors**: `TryGetPersonnel400Error1(out Personnel400Error1)` [400] · `TryGetNoContent(out RawError)` [401, 403, 405] · `TryGetPersonnel429Error1(out Personnel429Error1)` [429] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)

### ListSiteAccesses
- **HTTP**: `GET /site-accesses` (Default)
- **Notes**: Gets a list of site accesses. _🔐 This endpoint requires the Plan endpoint permission._
- **Signature**: `ListSiteAccesses(DateTimeOffset timestampStart, DateTimeOffset timestampEnd, IReadOnlyList<int>? deviceIds, IReadOnlyList<int>? siteIds, IReadOnlyList<string>? fields, int? pageSize = 50, int? page = 1, bool? useUtc = false, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `deviceIds` — nullable, no default → **must pass explicitly**
  - `siteIds` — nullable, no default → **must pass explicitly**
  - `fields` — nullable, no default → **must pass explicitly**
  - defaults: `pageSize` = 50, `page` = 1, `useUtc` = false, `requestOptions` = null
- **Query params (wire ← C#)**: `timestampStart` ← `timestampStart`, `timestampEnd` ← `timestampEnd`, `deviceIds` ← `deviceIds`, `siteIds` ← `siteIds`, `fields` ← `fields`, `pageSize` ← `pageSize`, `page` ← `page`, `useUtc` ← `useUtc`
- **Returns**: `IReadOnlyList<SiteAccess>`
- **Error**: `SdkException<ListSiteAccessesError>` — **Case A (typed)**
- **Error accessors**: `TryGetSiteAccesses400Error1(out SiteAccesses400Error1)` [400] · `TryGetNoContent(out RawError)` [401, 403, 405] · `TryGetSiteAccesses429Error1(out SiteAccesses429Error1)` [429] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)

### ListTaskCategories
- **HTTP**: `GET /task-categories` (Default)
- **Notes**: Gets a list of task categories. _🔐 This endpoint requires the Plan endpoint permission._
- **Signature**: `ListTaskCategories(RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<TaskCategory>`
- **Error**: `SdkException<ListTaskCategoriesError>` — **Case A (typed)**
- **Error accessors**: `TryGetTaskCategories400Error1(out TaskCategories400Error1)` [400] · `TryGetNoContent(out RawError)` [401, 403, 405] · `TryGetTaskCategories429Error1(out TaskCategories429Error1)` [429] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### ListTaskFiles
- **HTTP**: `GET /tasks/{taskId}/files` (Default)
- **Notes**: Gets a list of files belonging to a task. _🔐 This endpoint requires the Plan endpoint permission._
- **Signature**: `ListTaskFiles(int taskId, IReadOnlyList<string>? fields, int? pageSize = 50, int? page = 1, bool? useUtc = false, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `fields` — nullable, no default → **must pass explicitly**
  - defaults: `pageSize` = 50, `page` = 1, `useUtc` = false, `requestOptions` = null
- **Query params (wire ← C#)**: `fields` ← `fields`, `pageSize` ← `pageSize`, `page` ← `page`, `useUtc` ← `useUtc`
- **Returns**: `IReadOnlyList<TasksFilesResponse>`
- **Error**: `SdkException<ListTaskFilesError>` — **Case A (typed)**
- **Error accessors**: `TryGetTasksFiles400Error1(out TasksFiles400Error1)` [400] · `TryGetNoContent(out RawError)` [401, 403, 404, 405] · `TryGetTasksFiles429Error1(out TasksFiles429Error1)` [429] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)

### ListTasks
- **HTTP**: `GET /tasks` (Default)
- **Notes**: Gets a list of tasks. _🔐 This endpoint requires the Plan endpoint permission._
- **Signature**: `ListTasks(DateTimeOffset timestampStart, DateTimeOffset timestampEnd, IReadOnlyList<int>? deviceIds, IReadOnlyList<int>? siteIds, IReadOnlyList<int>? categoryIds, TaskState? state, IReadOnlyList<string>? fields, int? pageSize = 50, int? page = 1, bool? useUtc = false, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 5 params (`deviceIds` … `fields`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `pageSize` = 50, `page` = 1, `useUtc` = false, `requestOptions` = null
- **Query params (wire ← C#)**: `timestampStart` ← `timestampStart`, `timestampEnd` ← `timestampEnd`, `deviceIds` ← `deviceIds`, `siteIds` ← `siteIds`, `categoryIds` ← `categoryIds`, `state` ← `state`, `fields` ← `fields`, `pageSize` ← `pageSize`, `page` ← `page`, `useUtc` ← `useUtc`
- **Returns**: `IReadOnlyList<TaskModel>`
- **Error**: `SdkException<ListTasksError>` — **Case A (typed)**
- **Error accessors**: `TryGetTasks400Error1(out Tasks400Error1)` [400] · `TryGetNoContent(out RawError)` [401, 403, 405] · `TryGetTasks429Error1(out Tasks429Error1)` [429] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)

### ListWorklogItems
- **HTTP**: `GET /worklog` (Default)
- **Notes**: Gets a list of worklog items. _🔐 This endpoint requires the Plan endpoint permission._ _This is a beta feature. Some details might change before it is released as a stable version._
- **Signature**: `ListWorklogItems(DateTimeOffset timestampStart, DateTimeOffset timestampEnd, IReadOnlyList<int>? siteIds, bool? useUtc = false, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `siteIds` — nullable, no default → **must pass explicitly**
  - defaults: `useUtc` = false, `requestOptions` = null
- **Query params (wire ← C#)**: `timestampStart` ← `timestampStart`, `timestampEnd` ← `timestampEnd`, `siteIds` ← `siteIds`, `useUtc` ← `useUtc`
- **Returns**: `IReadOnlyList<WorklogResponse>`
- **Error**: `SdkException<ListWorklogItemsError>` — **Case A (typed)**
- **Error accessors**: `TryGetWorklog400Error1(out Worklog400Error1)` [400] · `TryGetNoContent(out RawError)` [401, 403, 405] · `TryGetWorklog429Error1(out Worklog429Error1)` [429] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
