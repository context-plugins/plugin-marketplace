<!-- Generated file — do not edit; regenerated with the SDK. -->

# TaskService — operations

Accessor: `client.taskService` · Source: `src/resources/task-service.ts` · 4 operations · Request and error types: namespace `TaskService`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `gbg-go-next-gen-flow-captain-api`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getTaskSchema

- **Signature**: `getTaskSchema(request: TaskService.GetTaskSchemaRequest, options?: RequestOptions): ApiPromise<JourneyTaskSchemaResponse, TaskService.GetTaskSchemaError>`
- **Wire**: `POST /journey/task/schema`
- **Auth**: `customerAccess`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `JourneyTaskSchemaResponse`
- **Error**: `GbgGoNextGenFlowCaptainApiError` with `kind: "api"`, an instance of `TaskService.GetTaskSchemaError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error401"` [401] no body · `"error403"` [403] no body · `"error404"` [404] no body · `"error405"` [405] no body · `"error500"` [500] no body · `"error503"` [503] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `TaskService.GetTaskSchemaRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `JourneyTaskSchemaRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `JourneyTaskSchemaRequest` | `journeyTaskSchemaRequestSchema` | `src/models/journey-task-schema-request.ts` |
| `JourneyTaskSchemaResponse` | `journeyTaskSchemaResponseSchema` | `src/models/journey-task-schema-response.ts` |

### getTasks

- **Signature**: `getTasks(request: TaskService.GetTasksRequest, options?: RequestOptions): ApiPromise<JourneyTaskListResponse, TaskService.GetTasksError>`
- **Wire**: `POST /journey/task/list`
- **Auth**: `pingId`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `JourneyTaskListResponse`
- **Error**: `GbgGoNextGenFlowCaptainApiError` with `kind: "api"`, an instance of `TaskService.GetTasksError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error401"` [401] no body · `"error403"` [403] no body · `"error404"` [404] no body · `"error405"` [405] no body · `"error500"` [500] no body · `"error503"` [503] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `TaskService.GetTasksRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `JourneyTaskListRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `JourneyTaskListRequest` | `journeyTaskListRequestSchema` | `src/models/journey-task-list-request.ts` |
| `JourneyTaskListResponse` | `journeyTaskListResponseSchema` | `src/models/journey-task-list-response.ts` |

### getTasksSchema

- **Signature**: `getTasksSchema(request: TaskService.GetTasksSchemaRequest, options?: RequestOptions): ApiPromise<JourneyTaskListSchemaResponse, TaskService.GetTasksSchemaError>`
- **Wire**: `POST /journey/task/list/schema`
- **Auth**: `customerAccess`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `JourneyTaskListSchemaResponse`
- **Error**: `GbgGoNextGenFlowCaptainApiError` with `kind: "api"`, an instance of `TaskService.GetTasksSchemaError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error401"` [401] no body · `"error403"` [403] no body · `"error404"` [404] no body · `"error405"` [405] no body · `"error500"` [500] no body · `"error503"` [503] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `TaskService.GetTasksSchemaRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `JourneyTaskListSchemaRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `JourneyTaskListSchemaRequest` | `journeyTaskListSchemaRequestSchema` | `src/models/journey-task-list-schema-request.ts` |
| `JourneyTaskListSchemaResponse` | `journeyTaskListSchemaResponseSchema` | `src/models/journey-task-list-schema-response.ts` |

### updateTask

- **Signature**: `updateTask(request: TaskService.UpdateTaskRequest, options?: RequestOptions): ApiPromise<JourneyTaskUpdateResponse, TaskService.UpdateTaskError>`
- **Wire**: `POST /journey/task/update`
- **Auth**: `pingId`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `JourneyTaskUpdateResponse`
- **Error**: `GbgGoNextGenFlowCaptainApiError` with `kind: "api"`, an instance of `TaskService.UpdateTaskError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error401"` [401] no body · `"error403"` [403] no body · `"error404"` [404] no body · `"error405"` [405] no body · `"error500"` [500] no body · `"error503"` [503] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `TaskService.UpdateTaskRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `JourneyTaskUpdateRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `JourneyTaskUpdateRequest` | `journeyTaskUpdateRequestSchema` | `src/models/journey-task-update-request.ts` |
| `JourneyTaskUpdateResponse` | `journeyTaskUpdateResponseSchema` | `src/models/journey-task-update-response.ts` |

