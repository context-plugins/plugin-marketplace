<!-- Generated file — do not edit; regenerated with the SDK. -->

# Tasks — operations

Accessor: `client.tasks` · Source: `src/resources/tasks.ts` · 12 operations · Request and error types: namespace `Tasks`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `parallel`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md. Reading a stream raises the same family: `DecodeError` for data that will not decode, `ConnectionError` for a connection that fails, `TimeoutError` when the server stays silent past `eventStream.idleTimeout`.

### tasksRunsEventsGetV1TasksRunsRunIdEventsGet

- **Signature**: `tasksRunsEventsGetV1TasksRunsRunIdEventsGet(request: Tasks.TasksRunsEventsGetV1TasksRunsRunIdEventsGetRequest, options?: RequestOptions): ApiPromise<EventStream<Response200TasksRunsEventsGetV1TasksRunsRunIdEventsGet>, Tasks.TasksRunsEventsGetV1TasksRunsRunIdEventsGetError>`
- **Wire**: `GET /v1/tasks/runs/{run_id}/events`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `EventStream<Response200TasksRunsEventsGetV1TasksRunsRunIdEventsGet>` — `text/event-stream`, resolved at the response headers and read one `Response200TasksRunsEventsGetV1TasksRunsRunIdEventsGet` per step, each event's `data`: iterate it once with `for await`, or release it with `await stream.close()`. Every event's `data` decodes through `Response200TasksRunsEventsGetV1TasksRunsRunIdEventsGet`, whatever the event is named. The stream ends when the server closes it
- **Error**: `ParallelError` with `kind: "api"`, an instance of `Tasks.TasksRunsEventsGetV1TasksRunsRunIdEventsGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [401] `ErrorResponse` · `"errorResponse2"` [404] `ErrorResponse` · `"errorResponse3"` [422] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Tasks.TasksRunsEventsGetV1TasksRunsRunIdEventsGetRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `runId` | `path` | `run_id` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `EventStream` | — | `src/core/event-stream.ts` |
| `Response200TasksRunsEventsGetV1TasksRunsRunIdEventsGet` | `response200TasksRunsEventsGetV1TasksRunsRunIdEventsGetSchema` | `src/models/unions/response200-tasks-runs-events-get-v1-tasks-runs-run-id-events-get.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### tasksRunsEventsGetV1BetaTasksRunsRunIdEventsGet

- **Signature**: `tasksRunsEventsGetV1BetaTasksRunsRunIdEventsGet(request: Tasks.TasksRunsEventsGetV1BetaTasksRunsRunIdEventsGetRequest, options?: RequestOptions): ApiPromise<EventStream<Response200TasksRunsEventsGetV1BetaTasksRunsRunIdEventsGet>, Tasks.TasksRunsEventsGetV1BetaTasksRunsRunIdEventsGetError>`
- **Wire**: `GET /v1beta/tasks/runs/{run_id}/events`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `EventStream<Response200TasksRunsEventsGetV1BetaTasksRunsRunIdEventsGet>` — `text/event-stream`, resolved at the response headers and read one `Response200TasksRunsEventsGetV1BetaTasksRunsRunIdEventsGet` per step, each event's `data`: iterate it once with `for await`, or release it with `await stream.close()`. Every event's `data` decodes through `Response200TasksRunsEventsGetV1BetaTasksRunsRunIdEventsGet`, whatever the event is named. The stream ends when the server closes it
- **Error**: `ParallelError` with `kind: "api"`, an instance of `Tasks.TasksRunsEventsGetV1BetaTasksRunsRunIdEventsGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [401] `ErrorResponse` · `"errorResponse2"` [404] `ErrorResponse` · `"errorResponse3"` [422] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Tasks.TasksRunsEventsGetV1BetaTasksRunsRunIdEventsGetRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `runId` | `path` | `run_id` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `EventStream` | — | `src/core/event-stream.ts` |
| `Response200TasksRunsEventsGetV1BetaTasksRunsRunIdEventsGet` | `response200TasksRunsEventsGetV1BetaTasksRunsRunIdEventsGetSchema` | `src/models/unions/response200-tasks-runs-events-get-v1-beta-tasks-runs-run-id-events-get.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### tasksRunsGetV1TasksRunsRunIdGet

- **Signature**: `tasksRunsGetV1TasksRunsRunIdGet(request: Tasks.TasksRunsGetV1TasksRunsRunIdGetRequest, options?: RequestOptions): ApiPromise<TaskRun, Tasks.TasksRunsGetV1TasksRunsRunIdGetError>`
- **Wire**: `GET /v1/tasks/runs/{run_id}`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `TaskRun`
- **Error**: `ParallelError` with `kind: "api"`, an instance of `Tasks.TasksRunsGetV1TasksRunsRunIdGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [401] `ErrorResponse` · `"errorResponse2"` [404] `ErrorResponse` · `"errorResponse3"` [422] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Tasks.TasksRunsGetV1TasksRunsRunIdGetRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `runId` | `path` | `run_id` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `TaskRun` | `taskRunSchema` | `src/models/task-run.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### tasksRunsInputGetV1TasksRunsRunIdInputGet

- **Signature**: `tasksRunsInputGetV1TasksRunsRunIdInputGet(request: Tasks.TasksRunsInputGetV1TasksRunsRunIdInputGetRequest, options?: RequestOptions): ApiPromise<TaskRunInput, Tasks.TasksRunsInputGetV1TasksRunsRunIdInputGetError>`
- **Wire**: `GET /v1/tasks/runs/{run_id}/input`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `TaskRunInput`
- **Error**: `ParallelError` with `kind: "api"`, an instance of `Tasks.TasksRunsInputGetV1TasksRunsRunIdInputGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [401] `ErrorResponse` · `"errorResponse2"` [404] `ErrorResponse` · `"errorResponse3"` [422] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Tasks.TasksRunsInputGetV1TasksRunsRunIdInputGetRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `runId` | `path` | `run_id` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `TaskRunInput` | `taskRunInputSchema` | `src/models/task-run-input.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### tasksRunsPostV1TasksRunsPost

- **Signature**: `tasksRunsPostV1TasksRunsPost(request: Tasks.TasksRunsPostV1TasksRunsPostRequest, options?: RequestOptions): ApiPromise<TaskRun, Tasks.TasksRunsPostV1TasksRunsPostError>`
- **Wire**: `POST /v1/tasks/runs`
- **Auth**: `apiKeyAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `TaskRun`
- **Error**: `ParallelError` with `kind: "api"`, an instance of `Tasks.TasksRunsPostV1TasksRunsPostError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [401] `ErrorResponse` · `"errorResponse2"` [402] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [422] `ErrorResponse` · `"errorResponse5"` [429] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Tasks.TasksRunsPostV1TasksRunsPostRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `parallelBeta` | `header` | `parallel-beta` | `ParallelBeta1` | no |
| `body` | `body` | — | `TaskRunInput` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ParallelBeta1` | `parallelBeta1Schema` | `src/models/unions/parallel-beta1.ts` |
| `TaskRunInput` | `taskRunInputSchema` | `src/models/task-run-input.ts` |
| `TaskRun` | `taskRunSchema` | `src/models/task-run.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### tasksRunsResultGetV1TasksRunsRunIdResultGet

- **Signature**: `tasksRunsResultGetV1TasksRunsRunIdResultGet(request: Tasks.TasksRunsResultGetV1TasksRunsRunIdResultGetRequest, options?: RequestOptions): ApiPromise<TaskRunResult, Tasks.TasksRunsResultGetV1TasksRunsRunIdResultGetError>`
- **Wire**: `GET /v1/tasks/runs/{run_id}/result`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `TaskRunResult`
- **Error**: `ParallelError` with `kind: "api"`, an instance of `Tasks.TasksRunsResultGetV1TasksRunsRunIdResultGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [401] `ErrorResponse` · `"errorResponse2"` [404] `ErrorResponse` · `"errorResponse3"` [408] `ErrorResponse` · `"errorResponse4"` [422] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Tasks.TasksRunsResultGetV1TasksRunsRunIdResultGetRequest` (3):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `runId` | `path` | `run_id` | `string` | yes | — |
| `timeout` | `query` | — | `number` | no | `600` |
| `parallelBeta` | `header` | `parallel-beta` | `ParallelBeta1` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `ParallelBeta1` | `parallelBeta1Schema` | `src/models/unions/parallel-beta1.ts` |
| `TaskRunResult` | `taskRunResultSchema` | `src/models/task-run-result.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### tasksSessionsEventsGetV1TasksGroupsTaskgroupIdEventsGet

- **Signature**: `tasksSessionsEventsGetV1TasksGroupsTaskgroupIdEventsGet(request: Tasks.TasksSessionsEventsGetV1TasksGroupsTaskgroupIdEventsGetRequest, options?: RequestOptions): ApiPromise<EventStream<Response200TasksSessionsEventsGetV1TasksGroupsTaskgroupIdEventsGet>, Tasks.TasksSessionsEventsGetV1TasksGroupsTaskgroupIdEventsGetError>`
- **Wire**: `GET /v1/tasks/groups/{taskgroup_id}/events`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `EventStream<Response200TasksSessionsEventsGetV1TasksGroupsTaskgroupIdEventsGet>` — `text/event-stream`, resolved at the response headers and read one `Response200TasksSessionsEventsGetV1TasksGroupsTaskgroupIdEventsGet` per step, each event's `data`: iterate it once with `for await`, or release it with `await stream.close()`. Every event's `data` decodes through `Response200TasksSessionsEventsGetV1TasksGroupsTaskgroupIdEventsGet`, whatever the event is named. The stream ends when the server closes it
- **Error**: `ParallelError` with `kind: "api"`, an instance of `Tasks.TasksSessionsEventsGetV1TasksGroupsTaskgroupIdEventsGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [404] `ErrorResponse` · `"httpValidationError"` [422] `HttpValidationError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Tasks.TasksSessionsEventsGetV1TasksGroupsTaskgroupIdEventsGetRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `taskgroupId` | `path` | `taskgroup_id` | `string` | yes |
| `lastEventId` | `query` | `last_event_id` | `LastEventId` | no |
| `timeout` | `query` | — | `Timeout` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `LastEventId` | `lastEventIdSchema` | `src/models/unions/last-event-id.ts` |
| `Timeout` | `timeoutSchema` | `src/models/unions/timeout.ts` |
| `EventStream` | — | `src/core/event-stream.ts` |
| `Response200TasksSessionsEventsGetV1TasksGroupsTaskgroupIdEventsGet` | `response200TasksSessionsEventsGetV1TasksGroupsTaskgroupIdEventsGetSchema` | `src/models/unions/response200-tasks-sessions-events-get-v1-tasks-groups-taskgroup-id-events-get.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### tasksTaskgroupsGetV1TasksGroupsTaskgroupIdGet

- **Signature**: `tasksTaskgroupsGetV1TasksGroupsTaskgroupIdGet(request: Tasks.TasksTaskgroupsGetV1TasksGroupsTaskgroupIdGetRequest, options?: RequestOptions): ApiPromise<TaskGroupResponse, Tasks.TasksTaskgroupsGetV1TasksGroupsTaskgroupIdGetError>`
- **Wire**: `GET /v1/tasks/groups/{taskgroup_id}`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `TaskGroupResponse`
- **Error**: `ParallelError` with `kind: "api"`, an instance of `Tasks.TasksTaskgroupsGetV1TasksGroupsTaskgroupIdGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"httpValidationError"` [422] `HttpValidationError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Tasks.TasksTaskgroupsGetV1TasksGroupsTaskgroupIdGetRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `taskgroupId` | `path` | `taskgroup_id` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `TaskGroupResponse` | `taskGroupResponseSchema` | `src/models/task-group-response.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### tasksTaskgroupsPostV1TasksGroupsPost

- **Signature**: `tasksTaskgroupsPostV1TasksGroupsPost(request: Tasks.TasksTaskgroupsPostV1TasksGroupsPostRequest, options?: RequestOptions): ApiPromise<TaskGroupResponse, Tasks.TasksTaskgroupsPostV1TasksGroupsPostError>`
- **Wire**: `POST /v1/tasks/groups`
- **Auth**: `apiKeyAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `TaskGroupResponse`
- **Error**: `ParallelError` with `kind: "api"`, an instance of `Tasks.TasksTaskgroupsPostV1TasksGroupsPostError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"httpValidationError"` [422] `HttpValidationError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Tasks.TasksTaskgroupsPostV1TasksGroupsPostRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `CreateTaskGroupRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CreateTaskGroupRequest` | `createTaskGroupRequestSchema` | `src/models/create-task-group-request.ts` |
| `TaskGroupResponse` | `taskGroupResponseSchema` | `src/models/task-group-response.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### tasksTaskgroupsRunsGetV1TasksGroupsTaskgroupIdRunsGet

- **Signature**: `tasksTaskgroupsRunsGetV1TasksGroupsTaskgroupIdRunsGet(request: Tasks.TasksTaskgroupsRunsGetV1TasksGroupsTaskgroupIdRunsGetRequest, options?: RequestOptions): ApiPromise<EventStream<Response200TasksTaskgroupsRunsGetV1TasksGroupsTaskgroupIdRunsGet>, Tasks.TasksTaskgroupsRunsGetV1TasksGroupsTaskgroupIdRunsGetError>`
- **Wire**: `GET /v1/tasks/groups/{taskgroup_id}/runs`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `EventStream<Response200TasksTaskgroupsRunsGetV1TasksGroupsTaskgroupIdRunsGet>` — `text/event-stream`, resolved at the response headers and read one `Response200TasksTaskgroupsRunsGetV1TasksGroupsTaskgroupIdRunsGet` per step, each event's `data`: iterate it once with `for await`, or release it with `await stream.close()`. Every event's `data` decodes through `Response200TasksTaskgroupsRunsGetV1TasksGroupsTaskgroupIdRunsGet`, whatever the event is named. The stream ends when the server closes it
- **Error**: `ParallelError` with `kind: "api"`, an instance of `Tasks.TasksTaskgroupsRunsGetV1TasksGroupsTaskgroupIdRunsGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [404] `ErrorResponse` · `"httpValidationError"` [422] `HttpValidationError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Tasks.TasksTaskgroupsRunsGetV1TasksGroupsTaskgroupIdRunsGetRequest` (5):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `taskgroupId` | `path` | `taskgroup_id` | `string` | yes | — |
| `lastEventId` | `query` | `last_event_id` | `LastEventId` | no | — |
| `status` | `query` | — | `Status11ParallelAiTasksApi` | no | — |
| `includeInput` | `query` | `include_input` | `boolean` | no | `false` |
| `includeOutput` | `query` | `include_output` | `boolean` | no | `false` |

| Type | Schema value | Source |
| --- | --- | --- |
| `LastEventId` | `lastEventIdSchema` | `src/models/unions/last-event-id.ts` |
| `Status11ParallelAiTasksApi` | `status11ParallelAiTasksApiSchema` | `src/models/unions/status11-parallel-ai-tasks-api.ts` |
| `EventStream` | — | `src/core/event-stream.ts` |
| `Response200TasksTaskgroupsRunsGetV1TasksGroupsTaskgroupIdRunsGet` | `response200TasksTaskgroupsRunsGetV1TasksGroupsTaskgroupIdRunsGetSchema` | `src/models/unions/response200-tasks-taskgroups-runs-get-v1-tasks-groups-taskgroup-id-runs-get.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### tasksTaskgroupsRunsIdGetV1TasksGroupsTaskgroupIdRunsRunIdGet

- **Signature**: `tasksTaskgroupsRunsIdGetV1TasksGroupsTaskgroupIdRunsRunIdGet(request: Tasks.TasksTaskgroupsRunsIdGetV1TasksGroupsTaskgroupIdRunsRunIdGetRequest, options?: RequestOptions): ApiPromise<TaskRun, Tasks.TasksTaskgroupsRunsIdGetV1TasksGroupsTaskgroupIdRunsRunIdGetError>`
- **Wire**: `GET /v1/tasks/groups/{taskgroup_id}/runs/{run_id}`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `TaskRun`
- **Error**: `ParallelError` with `kind: "api"`, an instance of `Tasks.TasksTaskgroupsRunsIdGetV1TasksGroupsTaskgroupIdRunsRunIdGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [401] `ErrorResponse` · `"errorResponse2"` [404] `ErrorResponse` · `"errorResponse3"` [422] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Tasks.TasksTaskgroupsRunsIdGetV1TasksGroupsTaskgroupIdRunsRunIdGetRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `taskgroupId` | `path` | `taskgroup_id` | `string` | yes |
| `runId` | `path` | `run_id` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `TaskRun` | `taskRunSchema` | `src/models/task-run.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### tasksTaskgroupsRunsPostV1TasksGroupsTaskgroupIdRunsPost

- **Signature**: `tasksTaskgroupsRunsPostV1TasksGroupsTaskgroupIdRunsPost(request: Tasks.TasksTaskgroupsRunsPostV1TasksGroupsTaskgroupIdRunsPostRequest, options?: RequestOptions): ApiPromise<TaskGroupRunResponse, Tasks.TasksTaskgroupsRunsPostV1TasksGroupsTaskgroupIdRunsPostError>`
- **Wire**: `POST /v1/tasks/groups/{taskgroup_id}/runs`
- **Auth**: `apiKeyAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `TaskGroupRunResponse`
- **Error**: `ParallelError` with `kind: "api"`, an instance of `Tasks.TasksTaskgroupsRunsPostV1TasksGroupsTaskgroupIdRunsPostError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"httpValidationError"` [422] `HttpValidationError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Tasks.TasksTaskgroupsRunsPostV1TasksGroupsTaskgroupIdRunsPostRequest` (4):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `taskgroupId` | `path` | `taskgroup_id` | `string` | yes | — |
| `refreshStatus` | `query` | `refresh_status` | `boolean` | no | `true` |
| `parallelBeta` | `header` | `parallel-beta` | `ParallelBeta1` | no | — |
| `body` | `body` | — | `TaskGroupRunRequest` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `ParallelBeta1` | `parallelBeta1Schema` | `src/models/unions/parallel-beta1.ts` |
| `TaskGroupRunRequest` | `taskGroupRunRequestSchema` | `src/models/task-group-run-request.ts` |
| `TaskGroupRunResponse` | `taskGroupRunResponseSchema` | `src/models/task-group-run-response.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

