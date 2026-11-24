<!-- Generated file — do not edit; regenerated with the SDK. -->

# Tasks — operations

Accessor: `client.tasks` · Source: `src/resources/tasks.ts` · 7 operations · Request types: namespace `Tasks`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `mr-scraper`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getTasks

- **Server**: `defaultScraperServiceGatewayAuthApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `getTasks(request: Tasks.GetTasksRequest, options?: RequestOptions): ApiPromise<TasksResponse, ApiError>`
- **Wire**: `GET /tasks`
- **Auth**: any of `apiKey`, `bearerAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `TasksResponse`
- **Error**: `MrScraperError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Tasks.GetTasksRequest` (14):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `startAt` | `query` | `string` | yes |
| `endAt` | `query` | `string` | yes |
| `pageSize` | `query` | `number` | no |
| `page` | `query` | `number` | no |
| `sortField` | `query` | `string` | no |
| `sortOrder` | `query` | `string` | no |
| `search` | `query` | `string` | no |
| `dateRangeColumn` | `query` | `string` | no |
| `domain` | `query` | `string` | no |
| `action` | `query` | `string` | no |
| `status` | `query` | `string` | no |
| `jobId` | `query` | `number` | no |
| `isParent` | `query` | `boolean` | no |
| `countOnly` | `query` | `boolean` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `TasksResponse` | `tasksResponseSchema` | `src/models/tasks-response.ts` |

### getTasksById

- **Server**: `defaultScraperServiceGatewayAuthApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `getTasksById(request: Tasks.GetTasksByIdRequest, options?: RequestOptions): ApiPromise<TasksResponse3, ApiError>`
- **Wire**: `GET /tasks/{id}`
- **Auth**: any of `apiKey`, `bearerAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `TasksResponse3`
- **Error**: `MrScraperError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Tasks.GetTasksByIdRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `number` | yes |
| `result` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `TasksResponse3` | `tasksResponse3Schema` | `src/models/tasks-response3.ts` |

### postTasks

- **Server**: `defaultScraperServiceGatewayAuthApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `postTasks(request: Tasks.PostTasksRequest, options?: RequestOptions): ApiPromise<TasksResponse1, ApiError>`
- **Wire**: `POST /tasks`
- **Auth**: any of `apiKey`, `bearerAuth` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `TasksResponse1`
- **Error**: `MrScraperError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Tasks.PostTasksRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `TaskTaskSwagger` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `TaskTaskSwagger` | `taskTaskSwaggerSchema` | `src/models/task-task-swagger.ts` |
| `TasksResponse1` | `tasksResponse1Schema` | `src/models/tasks-response1.ts` |

### postTasksBulk

- **Server**: `defaultScraperServiceGatewayAuthApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `postTasksBulk(request: Tasks.PostTasksBulkRequest, options?: RequestOptions): ApiPromise<TasksBulkResponse1, ApiError>`
- **Wire**: `POST /tasks/bulk`
- **Auth**: any of `apiKey`, `bearerAuth` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `TasksBulkResponse1`
- **Error**: `MrScraperError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Tasks.PostTasksBulkRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `TaskBatchCreateRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `TaskBatchCreateRequest` | `taskBatchCreateRequestSchema` | `src/models/task-batch-create-request.ts` |
| `TasksBulkResponse1` | `tasksBulkResponse1Schema` | `src/models/tasks-bulk-response1.ts` |

### putTasksBulk

- **Server**: `defaultScraperServiceGatewayAuthApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `putTasksBulk(request: Tasks.PutTasksBulkRequest, options?: RequestOptions): ApiPromise<TasksBulkResponse, ApiError>`
- **Wire**: `PUT /tasks/bulk`
- **Auth**: any of `apiKey`, `bearerAuth` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `TasksBulkResponse`
- **Error**: `MrScraperError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Tasks.PutTasksBulkRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `TaskBatchUpdateRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `TaskBatchUpdateRequest` | `taskBatchUpdateRequestSchema` | `src/models/task-batch-update-request.ts` |
| `TasksBulkResponse` | `tasksBulkResponseSchema` | `src/models/tasks-bulk-response.ts` |

### putTasksById

- **Server**: `defaultScraperServiceGatewayAuthApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `putTasksById(request: Tasks.PutTasksByIdRequest, options?: RequestOptions): ApiPromise<TasksResponse1, ApiError>`
- **Wire**: `PUT /tasks/{id}`
- **Auth**: any of `apiKey`, `bearerAuth` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `TasksResponse1`
- **Error**: `MrScraperError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Tasks.PutTasksByIdRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `number` | yes |
| `body` | `body` | `TaskTaskSwagger` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `TaskTaskSwagger` | `taskTaskSwaggerSchema` | `src/models/task-task-swagger.ts` |
| `TasksResponse1` | `tasksResponse1Schema` | `src/models/tasks-response1.ts` |

### putTasksByIdStatus

- **Server**: `defaultScraperServiceGatewayAuthApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `putTasksByIdStatus(request: Tasks.PutTasksByIdStatusRequest, options?: RequestOptions): ApiPromise<TasksStatusResponse, ApiError>`
- **Wire**: `PUT /tasks/{id}/status`
- **Auth**: any of `apiKey`, `bearerAuth` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `TasksStatusResponse`
- **Error**: `MrScraperError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Tasks.PutTasksByIdStatusRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `number` | yes |
| `body` | `body` | `TaskUpdateTaskStatusRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `TaskUpdateTaskStatusRequest` | `taskUpdateTaskStatusRequestSchema` | `src/models/task-update-task-status-request.ts` |
| `TasksStatusResponse` | `tasksStatusResponseSchema` | `src/models/tasks-status-response.ts` |

