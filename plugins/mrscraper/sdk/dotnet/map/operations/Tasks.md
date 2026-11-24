<!-- Generated file — do not edit; regenerated with the SDK. -->

# Tasks — operations

Accessor: `client.Tasks` · Source: `src/MrScraper/Api/Tasks.cs` · 7 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### GetTasks

- **Server group**: `DefaultScraperServiceGatewayAuthApi`
- **Auth**: `options.ApiKey` OR `options.BearerAuth`
- **Signature**: `GetTasks(GetTasksRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `StartAt`, `EndAt`
- **Query params (wire ← C#)**: `startAt` ← `StartAt`, `endAt` ← `EndAt`, `pageSize` ← `PageSize`, `page` ← `Page`, `sortField` ← `SortField`, `sortOrder` ← `SortOrder`, `search` ← `Search`, `dateRangeColumn` ← `DateRangeColumn`, `domain` ← `Domain`, `action` ← `Action`, `status` ← `Status`, `jobId` ← `JobId`, `isParent` ← `IsParent`, `countOnly` ← `CountOnly`
- **Returns**: `TasksResponse`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `GetTasksRequest` | `src/MrScraper/Requests/Tasks/GetTasksRequest.cs` |
| `TasksResponse` | `src/MrScraper/Models/TasksResponse.cs` |

### GetTasksById

- **Server group**: `DefaultScraperServiceGatewayAuthApi`
- **Auth**: `options.ApiKey` OR `options.BearerAuth`
- **Signature**: `GetTasksById(GetTasksByIdRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Query params (wire ← C#)**: `result` ← `Result`
- **Returns**: `TasksResponse3`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `GetTasksByIdRequest` | `src/MrScraper/Requests/Tasks/GetTasksByIdRequest.cs` |
| `TasksResponse3` | `src/MrScraper/Models/TasksResponse3.cs` |

### PostTasks

- **Server group**: `DefaultScraperServiceGatewayAuthApi`
- **Auth**: `options.ApiKey` OR `options.BearerAuth`
- **Signature**: `PostTasks(PostTasksRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `TasksResponse1`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `PostTasksRequest` | `src/MrScraper/Requests/Tasks/PostTasksRequest.cs` |
| `TaskTaskSwagger` | `src/MrScraper/Models/TaskTaskSwagger.cs` |
| `TasksResponse1` | `src/MrScraper/Models/TasksResponse1.cs` |

### PostTasksBulk

- **Server group**: `DefaultScraperServiceGatewayAuthApi`
- **Auth**: `options.ApiKey` OR `options.BearerAuth`
- **Signature**: `PostTasksBulk(PostTasksBulkRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `TasksBulkResponse1`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `PostTasksBulkRequest` | `src/MrScraper/Requests/Tasks/PostTasksBulkRequest.cs` |
| `TaskBatchCreateRequest` | `src/MrScraper/Models/TaskBatchCreateRequest.cs` |
| `TasksBulkResponse1` | `src/MrScraper/Models/TasksBulkResponse1.cs` |

### PutTasksBulk

- **Server group**: `DefaultScraperServiceGatewayAuthApi`
- **Auth**: `options.ApiKey` OR `options.BearerAuth`
- **Signature**: `PutTasksBulk(PutTasksBulkRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `TasksBulkResponse`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `PutTasksBulkRequest` | `src/MrScraper/Requests/Tasks/PutTasksBulkRequest.cs` |
| `TaskBatchUpdateRequest` | `src/MrScraper/Models/TaskBatchUpdateRequest.cs` |
| `TasksBulkResponse` | `src/MrScraper/Models/TasksBulkResponse.cs` |

### PutTasksById

- **Server group**: `DefaultScraperServiceGatewayAuthApi`
- **Auth**: `options.ApiKey` OR `options.BearerAuth`
- **Signature**: `PutTasksById(PutTasksByIdRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`, `Body`
- **Returns**: `TasksResponse1`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `PutTasksByIdRequest` | `src/MrScraper/Requests/Tasks/PutTasksByIdRequest.cs` |
| `TaskTaskSwagger` | `src/MrScraper/Models/TaskTaskSwagger.cs` |
| `TasksResponse1` | `src/MrScraper/Models/TasksResponse1.cs` |

### PutTasksByIdStatus

- **Server group**: `DefaultScraperServiceGatewayAuthApi`
- **Auth**: `options.ApiKey` OR `options.BearerAuth`
- **Signature**: `PutTasksByIdStatus(PutTasksByIdStatusRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`, `Body`
- **Returns**: `TasksStatusResponse`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `PutTasksByIdStatusRequest` | `src/MrScraper/Requests/Tasks/PutTasksByIdStatusRequest.cs` |
| `TaskUpdateTaskStatusRequest` | `src/MrScraper/Models/TaskUpdateTaskStatusRequest.cs` |
| `TasksStatusResponse` | `src/MrScraper/Models/TasksStatusResponse.cs` |

