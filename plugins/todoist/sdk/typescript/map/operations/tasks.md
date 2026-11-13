<!-- Generated file — do not edit; regenerated with the SDK. -->

# Tasks — operations

Accessor: `client.tasks` · Source: `src/resources/tasks.ts` · 12 operations · Request and error types: namespace `Tasks`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `todoist-sdk`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### closeTaskApiV1TasksTaskIdClosePost

- **Signature**: `closeTaskApiV1TasksTaskIdClosePost(request: Tasks.CloseTaskApiV1TasksTaskIdClosePostRequest, options?: RequestOptions): ApiPromise<undefined, Tasks.CloseTaskApiV1TasksTaskIdClosePostError>`
- **Wire**: `POST /api/v1/tasks/{task_id}/close`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `TodoistApiError` with `kind: "api"`, an instance of `Tasks.CloseTaskApiV1TasksTaskIdClosePostError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"todoistError"` [400] `TodoistError` · `"todoistError2"` [401] `TodoistError` · `"todoistError3"` [403] `TodoistError` · `"todoistError4"` [404] `TodoistError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Tasks.CloseTaskApiV1TasksTaskIdClosePostRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `taskId` | `path` | `task_id` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `TodoistError` | `todoistErrorSchema` | `src/models/todoist-error.ts` |

### createTaskApiV1TasksPost

- **Signature**: `createTaskApiV1TasksPost(request: Tasks.CreateTaskApiV1TasksPostRequest, options?: RequestOptions): ApiPromise<ItemSyncView, Tasks.CreateTaskApiV1TasksPostError>`
- **Wire**: `POST /api/v1/tasks`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ItemSyncView`
- **Error**: `TodoistApiError` with `kind: "api"`, an instance of `Tasks.CreateTaskApiV1TasksPostError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"todoistError"` [400] `TodoistError` · `"todoistError2"` [401] `TodoistError` · `"todoistError3"` [403] `TodoistError` · `"todoistError4"` [404] `TodoistError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Tasks.CreateTaskApiV1TasksPostRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `Body11` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Body11` | `body11Schema` | `src/models/body11.ts` |
| `ItemSyncView` | `itemSyncViewSchema` | `src/models/item-sync-view.ts` |
| `TodoistError` | `todoistErrorSchema` | `src/models/todoist-error.ts` |

### deleteTaskApiV1TasksTaskIdDelete

- **Signature**: `deleteTaskApiV1TasksTaskIdDelete(request: Tasks.DeleteTaskApiV1TasksTaskIdDeleteRequest, options?: RequestOptions): ApiPromise<undefined, Tasks.DeleteTaskApiV1TasksTaskIdDeleteError>`
- **Wire**: `DELETE /api/v1/tasks/{task_id}`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `TodoistApiError` with `kind: "api"`, an instance of `Tasks.DeleteTaskApiV1TasksTaskIdDeleteError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"todoistError"` [400] `TodoistError` · `"todoistError2"` [401] `TodoistError` · `"todoistError3"` [403] `TodoistError` · `"todoistError4"` [404] `TodoistError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Tasks.DeleteTaskApiV1TasksTaskIdDeleteRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `taskId` | `path` | `task_id` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `TodoistError` | `todoistErrorSchema` | `src/models/todoist-error.ts` |

### getTaskApiV1TasksTaskIdGet

- **Signature**: `getTaskApiV1TasksTaskIdGet(request: Tasks.GetTaskApiV1TasksTaskIdGetRequest, options?: RequestOptions): ApiPromise<ItemSyncView, Tasks.GetTaskApiV1TasksTaskIdGetError>`
- **Wire**: `GET /api/v1/tasks/{task_id}`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ItemSyncView`
- **Error**: `TodoistApiError` with `kind: "api"`, an instance of `Tasks.GetTaskApiV1TasksTaskIdGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"todoistError"` [400] `TodoistError` · `"todoistError2"` [401] `TodoistError` · `"todoistError3"` [403] `TodoistError` · `"todoistError4"` [404] `TodoistError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Tasks.GetTaskApiV1TasksTaskIdGetRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `taskId` | `path` | `task_id` | `string` | yes |
| `publicKey` | `query` | `public_key` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ItemSyncView` | `itemSyncViewSchema` | `src/models/item-sync-view.ts` |
| `TodoistError` | `todoistErrorSchema` | `src/models/todoist-error.ts` |

### getTasksApiV1TasksGet

- **Signature**: `getTasksApiV1TasksGet(request?: Tasks.GetTasksApiV1TasksGetRequest, options?: RequestOptions): ApiPromise<PaginatedList4, Tasks.GetTasksApiV1TasksGetError>`
- **Wire**: `GET /api/v1/tasks`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PaginatedList4`
- **Error**: `TodoistApiError` with `kind: "api"`, an instance of `Tasks.GetTasksApiV1TasksGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"todoistError"` [400] `TodoistError` · `"todoistError2"` [401] `TodoistError` · `"todoistError3"` [403] `TodoistError` · `"todoistError4"` [404] `TodoistError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Tasks.GetTasksApiV1TasksGetRequest` (7):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `projectId` | `query` | `project_id` | `string` | no | — |
| `sectionId` | `query` | `section_id` | `string` | no | — |
| `parentId` | `query` | `parent_id` | `string` | no | — |
| `label` | `query` | — | `string` | no | — |
| `ids` | `query` | — | `string` | no | — |
| `cursor` | `query` | — | `string` | no | — |
| `limit` | `query` | — | `number` | no | `50` |

| Type | Schema value | Source |
| --- | --- | --- |
| `PaginatedList4` | `paginatedList4Schema` | `src/models/paginated-list4.ts` |
| `TodoistError` | `todoistErrorSchema` | `src/models/todoist-error.ts` |

### getTasksByFilterApiV1TasksFilterGet

- **Signature**: `getTasksByFilterApiV1TasksFilterGet(request: Tasks.GetTasksByFilterApiV1TasksFilterGetRequest, options?: RequestOptions): ApiPromise<PaginatedList4, Tasks.GetTasksByFilterApiV1TasksFilterGetError>`
- **Wire**: `GET /api/v1/tasks/filter`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PaginatedList4`
- **Error**: `TodoistApiError` with `kind: "api"`, an instance of `Tasks.GetTasksByFilterApiV1TasksFilterGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"todoistError"` [400] `TodoistError` · `"todoistError2"` [401] `TodoistError` · `"todoistError3"` [403] `TodoistError` · `"todoistError4"` [404] `TodoistError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Tasks.GetTasksByFilterApiV1TasksFilterGetRequest` (4):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `query` | `query` | `string` | yes | — |
| `lang` | `query` | `string` | no | — |
| `cursor` | `query` | `string` | no | — |
| `limit` | `query` | `number` | no | `50` |

| Type | Schema value | Source |
| --- | --- | --- |
| `PaginatedList4` | `paginatedList4Schema` | `src/models/paginated-list4.ts` |
| `TodoistError` | `todoistErrorSchema` | `src/models/todoist-error.ts` |

### moveTaskApiV1TasksTaskIdMovePost

- **Signature**: `moveTaskApiV1TasksTaskIdMovePost(request: Tasks.MoveTaskApiV1TasksTaskIdMovePostRequest, options?: RequestOptions): ApiPromise<ItemSyncView, Tasks.MoveTaskApiV1TasksTaskIdMovePostError>`
- **Wire**: `POST /api/v1/tasks/{task_id}/move`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ItemSyncView`
- **Error**: `TodoistApiError` with `kind: "api"`, an instance of `Tasks.MoveTaskApiV1TasksTaskIdMovePostError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"todoistError"` [400] `TodoistError` · `"todoistError2"` [401] `TodoistError` · `"todoistError3"` [403] `TodoistError` · `"todoistError4"` [404] `TodoistError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Tasks.MoveTaskApiV1TasksTaskIdMovePostRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `taskId` | `path` | `task_id` | `string` | yes |
| `body` | `body` | — | `Body` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Body` | `bodySchema` | `src/models/body.ts` |
| `ItemSyncView` | `itemSyncViewSchema` | `src/models/item-sync-view.ts` |
| `TodoistError` | `todoistErrorSchema` | `src/models/todoist-error.ts` |

### quickAddApiV1TasksQuickPost

- **Signature**: `quickAddApiV1TasksQuickPost(request: Tasks.QuickAddApiV1TasksQuickPostRequest, options?: RequestOptions): ApiPromise<Record<string, unknown>, Tasks.QuickAddApiV1TasksQuickPostError>`
- **Wire**: `POST /api/v1/tasks/quick`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `TodoistApiError` with `kind: "api"`, an instance of `Tasks.QuickAddApiV1TasksQuickPostError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"todoistError"` [400] `TodoistError` · `"todoistError2"` [401] `TodoistError` · `"todoistError3"` [403] `TodoistError` · `"todoistError4"` [404] `TodoistError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Tasks.QuickAddApiV1TasksQuickPostRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `Body15` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Body15` | `body15Schema` | `src/models/body15.ts` |
| `TodoistError` | `todoistErrorSchema` | `src/models/todoist-error.ts` |

### reopenTaskApiV1TasksTaskIdReopenPost

- **Signature**: `reopenTaskApiV1TasksTaskIdReopenPost(request: Tasks.ReopenTaskApiV1TasksTaskIdReopenPostRequest, options?: RequestOptions): ApiPromise<undefined, Tasks.ReopenTaskApiV1TasksTaskIdReopenPostError>`
- **Wire**: `POST /api/v1/tasks/{task_id}/reopen`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `TodoistApiError` with `kind: "api"`, an instance of `Tasks.ReopenTaskApiV1TasksTaskIdReopenPostError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"todoistError"` [400] `TodoistError` · `"todoistError2"` [401] `TodoistError` · `"todoistError3"` [403] `TodoistError` · `"todoistError4"` [404] `TodoistError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Tasks.ReopenTaskApiV1TasksTaskIdReopenPostRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `taskId` | `path` | `task_id` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `TodoistError` | `todoistErrorSchema` | `src/models/todoist-error.ts` |

### tasksCompletedByCompletionDateApiV1TasksCompletedByCompletionDateGet

- **Signature**: `tasksCompletedByCompletionDateApiV1TasksCompletedByCompletionDateGet(request: Tasks.TasksCompletedByCompletionDateApiV1TasksCompletedByCompletionDateGetRequest, options?: RequestOptions): ApiPromise<TasksCompletedDateResponse, Tasks.TasksCompletedByCompletionDateApiV1TasksCompletedByCompletionDateGetError>`
- **Wire**: `GET /api/v1/tasks/completed/by_completion_date`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `TasksCompletedDateResponse`
- **Error**: `TodoistApiError` with `kind: "api"`, an instance of `Tasks.TasksCompletedByCompletionDateApiV1TasksCompletedByCompletionDateGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"todoistError"` [400] `TodoistError` · `"todoistError2"` [401] `TodoistError` · `"todoistError3"` [403] `TodoistError` · `"todoistError4"` [404] `TodoistError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Tasks.TasksCompletedByCompletionDateApiV1TasksCompletedByCompletionDateGetRequest` (11):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `since` | `query` | — | `Date` (date-time) | yes | — |
| `until` | `query` | — | `Date` (date-time) | yes | — |
| `workspaceId` | `query` | `workspace_id` | `number` | no | — |
| `projectId` | `query` | `project_id` | `string` | no | — |
| `sectionId` | `query` | `section_id` | `string` | no | — |
| `parentId` | `query` | `parent_id` | `string` | no | — |
| `filterQuery` | `query` | `filter_query` | `string` | no | — |
| `filterLang` | `query` | `filter_lang` | `string` | no | — |
| `cursor` | `query` | — | `string` | no | — |
| `limit` | `query` | — | `number` | no | `50` |
| `publicKey` | `query` | `public_key` | `string` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `TasksCompletedDateResponse` | `tasksCompletedDateResponseSchema` | `src/models/tasks-completed-date-response.ts` |
| `TodoistError` | `todoistErrorSchema` | `src/models/todoist-error.ts` |

### tasksCompletedByDueDateApiV1TasksCompletedByDueDateGet

- **Signature**: `tasksCompletedByDueDateApiV1TasksCompletedByDueDateGet(request: Tasks.TasksCompletedByDueDateApiV1TasksCompletedByDueDateGetRequest, options?: RequestOptions): ApiPromise<TasksCompletedDateResponse, Tasks.TasksCompletedByDueDateApiV1TasksCompletedByDueDateGetError>`
- **Wire**: `GET /api/v1/tasks/completed/by_due_date`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `TasksCompletedDateResponse`
- **Error**: `TodoistApiError` with `kind: "api"`, an instance of `Tasks.TasksCompletedByDueDateApiV1TasksCompletedByDueDateGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"todoistError"` [400] `TodoistError` · `"todoistError2"` [401] `TodoistError` · `"todoistError3"` [403] `TodoistError` · `"todoistError4"` [404] `TodoistError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Tasks.TasksCompletedByDueDateApiV1TasksCompletedByDueDateGetRequest` (10):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `since` | `query` | — | `Date` (date-time) | yes | — |
| `until` | `query` | — | `Date` (date-time) | yes | — |
| `workspaceId` | `query` | `workspace_id` | `number` | no | — |
| `projectId` | `query` | `project_id` | `string` | no | — |
| `sectionId` | `query` | `section_id` | `string` | no | — |
| `parentId` | `query` | `parent_id` | `string` | no | — |
| `filterQuery` | `query` | `filter_query` | `string` | no | — |
| `filterLang` | `query` | `filter_lang` | `string` | no | — |
| `cursor` | `query` | — | `string` | no | — |
| `limit` | `query` | — | `number` | no | `50` |

| Type | Schema value | Source |
| --- | --- | --- |
| `TasksCompletedDateResponse` | `tasksCompletedDateResponseSchema` | `src/models/tasks-completed-date-response.ts` |
| `TodoistError` | `todoistErrorSchema` | `src/models/todoist-error.ts` |

### updateTaskApiV1TasksTaskIdPost

- **Signature**: `updateTaskApiV1TasksTaskIdPost(request: Tasks.UpdateTaskApiV1TasksTaskIdPostRequest, options?: RequestOptions): ApiPromise<ItemSyncView, Tasks.UpdateTaskApiV1TasksTaskIdPostError>`
- **Wire**: `POST /api/v1/tasks/{task_id}`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ItemSyncView`
- **Error**: `TodoistApiError` with `kind: "api"`, an instance of `Tasks.UpdateTaskApiV1TasksTaskIdPostError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"todoistError"` [400] `TodoistError` · `"todoistError2"` [401] `TodoistError` · `"todoistError3"` [403] `TodoistError` · `"todoistError4"` [404] `TodoistError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Tasks.UpdateTaskApiV1TasksTaskIdPostRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `taskId` | `path` | `task_id` | `string` | yes |
| `body` | `body` | — | `Body23` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Body23` | `body23Schema` | `src/models/body23.ts` |
| `ItemSyncView` | `itemSyncViewSchema` | `src/models/item-sync-view.ts` |
| `TodoistError` | `todoistErrorSchema` | `src/models/todoist-error.ts` |

