<!-- Generated file — do not edit; regenerated with the SDK. -->

# Tasksets — operations

Accessor: `client.tasksets` · Source: `src/resources/tasksets.ts` · 6 operations · Request and error types: namespace `Tasksets`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `hud`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createTasksetV2TasksetsPost

- **Signature**: `createTasksetV2TasksetsPost(request: Tasksets.CreateTasksetV2TasksetsPostRequest, options?: RequestOptions): ApiPromise<TasksetResponse, Tasksets.CreateTasksetV2TasksetsPostError>`
- **Wire**: `POST /v2/tasksets`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `TasksetResponse`
- **Error**: `HudError` with `kind: "api"`, an instance of `Tasksets.CreateTasksetV2TasksetsPostError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"errorResponse5"` [409] `ErrorResponse` · `"httpValidationError"` [422] `HttpValidationError` · `"errorResponse6"` [429] `ErrorResponse` · `"errorResponse7"` [503] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Tasksets.CreateTasksetV2TasksetsPostRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `TasksetCreateRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `TasksetCreateRequest` | `tasksetCreateRequestSchema` | `src/models/taskset-create-request.ts` |
| `TasksetResponse` | `tasksetResponseSchema` | `src/models/taskset-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### exportTasksetV2TasksetsTasksetIdExportGet

- **Signature**: `exportTasksetV2TasksetsTasksetIdExportGet(request: Tasksets.ExportTasksetV2TasksetsTasksetIdExportGetRequest, options?: RequestOptions): ApiPromise<TasksetExportResponse, Tasksets.ExportTasksetV2TasksetsTasksetIdExportGetError>`
- **Wire**: `GET /v2/tasksets/{taskset_id}/export`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `TasksetExportResponse`
- **Error**: `HudError` with `kind: "api"`, an instance of `Tasksets.ExportTasksetV2TasksetsTasksetIdExportGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"errorResponse5"` [409] `ErrorResponse` · `"httpValidationError"` [422] `HttpValidationError` · `"errorResponse6"` [429] `ErrorResponse` · `"errorResponse7"` [503] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Tasksets.ExportTasksetV2TasksetsTasksetIdExportGetRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `tasksetId` | `path` | `taskset_id` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `TasksetExportResponse` | `tasksetExportResponseSchema` | `src/models/taskset-export-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### getTasksetByNameV2TasksetsByNameNameGet

- **Signature**: `getTasksetByNameV2TasksetsByNameNameGet(request: Tasksets.GetTasksetByNameV2TasksetsByNameNameGetRequest, options?: RequestOptions): ApiPromise<TasksetExportResponse, Tasksets.GetTasksetByNameV2TasksetsByNameNameGetError>`
- **Wire**: `GET /v2/tasksets/by-name/{name}`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `TasksetExportResponse`
- **Error**: `HudError` with `kind: "api"`, an instance of `Tasksets.GetTasksetByNameV2TasksetsByNameNameGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"errorResponse5"` [409] `ErrorResponse` · `"httpValidationError"` [422] `HttpValidationError` · `"errorResponse6"` [429] `ErrorResponse` · `"errorResponse7"` [503] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Tasksets.GetTasksetByNameV2TasksetsByNameNameGetRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `name` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `TasksetExportResponse` | `tasksetExportResponseSchema` | `src/models/taskset-export-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### getTasksetV2TasksetsTasksetIdGet

- **Signature**: `getTasksetV2TasksetsTasksetIdGet(request: Tasksets.GetTasksetV2TasksetsTasksetIdGetRequest, options?: RequestOptions): ApiPromise<TasksetResponse, Tasksets.GetTasksetV2TasksetsTasksetIdGetError>`
- **Wire**: `GET /v2/tasksets/{taskset_id}`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `TasksetResponse`
- **Error**: `HudError` with `kind: "api"`, an instance of `Tasksets.GetTasksetV2TasksetsTasksetIdGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"errorResponse5"` [409] `ErrorResponse` · `"httpValidationError"` [422] `HttpValidationError` · `"errorResponse6"` [429] `ErrorResponse` · `"errorResponse7"` [503] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Tasksets.GetTasksetV2TasksetsTasksetIdGetRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `tasksetId` | `path` | `taskset_id` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `TasksetResponse` | `tasksetResponseSchema` | `src/models/taskset-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### listTasksetTasksV2TasksetsTasksetIdTasksGet

- **Signature**: `listTasksetTasksV2TasksetsTasksetIdTasksGet(request: Tasksets.ListTasksetTasksV2TasksetsTasksetIdTasksGetRequest, options?: RequestOptions): ApiPromise<PaginatedResponseTaskResponse, Tasksets.ListTasksetTasksV2TasksetsTasksetIdTasksGetError>`
- **Wire**: `GET /v2/tasksets/{taskset_id}/tasks`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PaginatedResponseTaskResponse`
- **Error**: `HudError` with `kind: "api"`, an instance of `Tasksets.ListTasksetTasksV2TasksetsTasksetIdTasksGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"errorResponse5"` [409] `ErrorResponse` · `"httpValidationError"` [422] `HttpValidationError` · `"errorResponse6"` [429] `ErrorResponse` · `"errorResponse7"` [503] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Tasksets.ListTasksetTasksV2TasksetsTasksetIdTasksGetRequest` (3):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `tasksetId` | `path` | `taskset_id` | `string` | yes | — |
| `limit` | `query` | — | `number` | no | `50` |
| `offset` | `query` | — | `number` | no | `0` |

| Type | Schema value | Source |
| --- | --- | --- |
| `PaginatedResponseTaskResponse` | `paginatedResponseTaskResponseSchema` | `src/models/paginated-response-task-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### listTasksetsV2TasksetsGet

- **Signature**: `listTasksetsV2TasksetsGet(request?: Tasksets.ListTasksetsV2TasksetsGetRequest, options?: RequestOptions): ApiPromise<PaginatedResponseTasksetResponse, Tasksets.ListTasksetsV2TasksetsGetError>`
- **Wire**: `GET /v2/tasksets`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PaginatedResponseTasksetResponse`
- **Error**: `HudError` with `kind: "api"`, an instance of `Tasksets.ListTasksetsV2TasksetsGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"errorResponse5"` [409] `ErrorResponse` · `"httpValidationError"` [422] `HttpValidationError` · `"errorResponse6"` [429] `ErrorResponse` · `"errorResponse7"` [503] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Tasksets.ListTasksetsV2TasksetsGetRequest` (11):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `limit` | `query` | — | `number` | no | `50` |
| `offset` | `query` | — | `number` | no | `0` |
| `search` | `query` | — | `SearchHudPlatformTasksetsApi` | no | — |
| `publicOnly` | `query` | `public_only` | `boolean` | no | `false` |
| `featuredOnly` | `query` | `featured_only` | `boolean` | no | `false` |
| `ownerOnly` | `query` | `owner_only` | `boolean` | no | `false` |
| `minTasks` | `query` | `min_tasks` | `MinTasks` | no | — |
| `registryId` | `query` | `registry_id` | `RegistryId2` | no | — |
| `scenarioId` | `query` | `scenario_id` | `ScenarioId` | no | — |
| `projectId` | `query` | `project_id` | `ProjectId2` | no | — |
| `sortBy` | `query` | `sort_by` | `SortByHudPlatformTasksetsApi` | no | `SortByHudPlatformTasksetsApi.Starred` |

| Type | Schema value | Source |
| --- | --- | --- |
| `SearchHudPlatformTasksetsApi` | `searchHudPlatformTasksetsApiSchema` | `src/models/unions/search-hud-platform-tasksets-api.ts` |
| `MinTasks` | `minTasksSchema` | `src/models/unions/min-tasks.ts` |
| `RegistryId2` | `registryId2Schema` | `src/models/unions/registry-id2.ts` |
| `ScenarioId` | `scenarioIdSchema` | `src/models/unions/scenario-id.ts` |
| `ProjectId2` | `projectId2Schema` | `src/models/unions/project-id2.ts` |
| `SortByHudPlatformTasksetsApi` | `sortByHudPlatformTasksetsApiSchema` | `src/models/sort-by-hud-platform-tasksets-api.ts` |
| `PaginatedResponseTasksetResponse` | `paginatedResponseTasksetResponseSchema` | `src/models/paginated-response-taskset-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

