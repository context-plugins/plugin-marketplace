<!-- Generated file — do not edit; regenerated with the SDK. -->

# Tasks — operations

Accessor: `client.tasks` · Source: `src/resources/tasks.ts` · 26 operations · Request and error types: namespace `Tasks`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `asana`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### addDependenciesForTask

- **Signature**: `addDependenciesForTask(request: Tasks.AddDependenciesForTaskRequest, options?: RequestOptions): ApiPromise<TasksAddDependenciesResponse, Tasks.AddDependenciesForTaskError>`
- **Wire**: `POST /tasks/{task_gid}/addDependencies`
- **Auth**: any of `personalAccessToken`, `oauth2` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `TasksAddDependenciesResponse`
- **Error**: `AsanaError` with `kind: "api"`, an instance of `Tasks.AddDependenciesForTaskError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [402] `ErrorResponse` · `"errorResponse4"` [403] `ErrorResponse` · `"errorResponse5"` [404] `ErrorResponse` · `"errorResponse6"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Tasks.AddDependenciesForTaskRequest` (4):

| Field | Channel | Wire | Type | Req | Style |
| --- | --- | --- | --- | --- | --- |
| `taskGid` | `path` | `task_gid` | `string` | yes | — |
| `optPretty` | `query` | `opt_pretty` | `boolean` | no | — |
| `optFields` | `query` | `opt_fields` | `string[]` | no | `csv` |
| `body` | `body` | — | `TasksAddDependenciesRequest` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `TasksAddDependenciesRequest` | `tasksAddDependenciesRequestSchema` | `src/models/tasks-add-dependencies-request.ts` |
| `TasksAddDependenciesResponse` | `tasksAddDependenciesResponseSchema` | `src/models/tasks-add-dependencies-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### addDependentsForTask

- **Signature**: `addDependentsForTask(request: Tasks.AddDependentsForTaskRequest, options?: RequestOptions): ApiPromise<TasksAddDependentsResponse, Tasks.AddDependentsForTaskError>`
- **Wire**: `POST /tasks/{task_gid}/addDependents`
- **Auth**: any of `personalAccessToken`, `oauth2` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `TasksAddDependentsResponse`
- **Error**: `AsanaError` with `kind: "api"`, an instance of `Tasks.AddDependentsForTaskError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [402] `ErrorResponse` · `"errorResponse4"` [403] `ErrorResponse` · `"errorResponse5"` [404] `ErrorResponse` · `"errorResponse6"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Tasks.AddDependentsForTaskRequest` (4):

| Field | Channel | Wire | Type | Req | Style |
| --- | --- | --- | --- | --- | --- |
| `taskGid` | `path` | `task_gid` | `string` | yes | — |
| `optPretty` | `query` | `opt_pretty` | `boolean` | no | — |
| `optFields` | `query` | `opt_fields` | `string[]` | no | `csv` |
| `body` | `body` | — | `TasksAddDependentsRequest` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `TasksAddDependentsRequest` | `tasksAddDependentsRequestSchema` | `src/models/tasks-add-dependents-request.ts` |
| `TasksAddDependentsResponse` | `tasksAddDependentsResponseSchema` | `src/models/tasks-add-dependents-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### addFollowersForTask

- **Signature**: `addFollowersForTask(request: Tasks.AddFollowersForTaskRequest, options?: RequestOptions): ApiPromise<TasksAddFollowersResponse, Tasks.AddFollowersForTaskError>`
- **Wire**: `POST /tasks/{task_gid}/addFollowers`
- **Auth**: any of `personalAccessToken`, `oauth2` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `TasksAddFollowersResponse`
- **Error**: `AsanaError` with `kind: "api"`, an instance of `Tasks.AddFollowersForTaskError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"errorResponse5"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Tasks.AddFollowersForTaskRequest` (4):

| Field | Channel | Wire | Type | Req | Style |
| --- | --- | --- | --- | --- | --- |
| `taskGid` | `path` | `task_gid` | `string` | yes | — |
| `optPretty` | `query` | `opt_pretty` | `boolean` | no | — |
| `optFields` | `query` | `opt_fields` | `string[]` | no | `csv` |
| `body` | `body` | — | `TasksAddFollowersRequest` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `TasksAddFollowersRequest` | `tasksAddFollowersRequestSchema` | `src/models/tasks-add-followers-request.ts` |
| `TasksAddFollowersResponse` | `tasksAddFollowersResponseSchema` | `src/models/tasks-add-followers-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### addProjectForTask

- **Signature**: `addProjectForTask(request: Tasks.AddProjectForTaskRequest, options?: RequestOptions): ApiPromise<TasksAddProjectResponse, Tasks.AddProjectForTaskError>`
- **Wire**: `POST /tasks/{task_gid}/addProject`
- **Auth**: any of `personalAccessToken`, `oauth2` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `TasksAddProjectResponse`
- **Error**: `AsanaError` with `kind: "api"`, an instance of `Tasks.AddProjectForTaskError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"errorResponse5"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Tasks.AddProjectForTaskRequest` (4):

| Field | Channel | Wire | Type | Req | Style |
| --- | --- | --- | --- | --- | --- |
| `taskGid` | `path` | `task_gid` | `string` | yes | — |
| `optPretty` | `query` | `opt_pretty` | `boolean` | no | — |
| `optFields` | `query` | `opt_fields` | `string[]` | no | `csv` |
| `body` | `body` | — | `TasksAddProjectRequest` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `TasksAddProjectRequest` | `tasksAddProjectRequestSchema` | `src/models/tasks-add-project-request.ts` |
| `TasksAddProjectResponse` | `tasksAddProjectResponseSchema` | `src/models/tasks-add-project-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### addTagForTask

- **Signature**: `addTagForTask(request: Tasks.AddTagForTaskRequest, options?: RequestOptions): ApiPromise<TasksAddTagResponse, Tasks.AddTagForTaskError>`
- **Wire**: `POST /tasks/{task_gid}/addTag`
- **Auth**: any of `personalAccessToken`, `oauth2` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `TasksAddTagResponse`
- **Error**: `AsanaError` with `kind: "api"`, an instance of `Tasks.AddTagForTaskError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"errorResponse5"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Tasks.AddTagForTaskRequest` (4):

| Field | Channel | Wire | Type | Req | Style |
| --- | --- | --- | --- | --- | --- |
| `taskGid` | `path` | `task_gid` | `string` | yes | — |
| `optPretty` | `query` | `opt_pretty` | `boolean` | no | — |
| `optFields` | `query` | `opt_fields` | `string[]` | no | `csv` |
| `body` | `body` | — | `TasksAddTagRequest` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `TasksAddTagRequest` | `tasksAddTagRequestSchema` | `src/models/tasks-add-tag-request.ts` |
| `TasksAddTagResponse` | `tasksAddTagResponseSchema` | `src/models/tasks-add-tag-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### createSubtaskForTask

- **Signature**: `createSubtaskForTask(request: Tasks.CreateSubtaskForTaskRequest, options?: RequestOptions): ApiPromise<TasksSubtasksResponse1, Tasks.CreateSubtaskForTaskError>`
- **Wire**: `POST /tasks/{task_gid}/subtasks`
- **Auth**: any of `personalAccessToken`, `oauth2` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `TasksSubtasksResponse1`
- **Error**: `AsanaError` with `kind: "api"`, an instance of `Tasks.CreateSubtaskForTaskError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"errorResponse5"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Tasks.CreateSubtaskForTaskRequest` (4):

| Field | Channel | Wire | Type | Req | Style |
| --- | --- | --- | --- | --- | --- |
| `taskGid` | `path` | `task_gid` | `string` | yes | — |
| `optPretty` | `query` | `opt_pretty` | `boolean` | no | — |
| `optFields` | `query` | `opt_fields` | `string[]` | no | `csv` |
| `body` | `body` | — | `TasksSubtasksRequest` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `TasksSubtasksRequest` | `tasksSubtasksRequestSchema` | `src/models/tasks-subtasks-request.ts` |
| `TasksSubtasksResponse1` | `tasksSubtasksResponse1Schema` | `src/models/tasks-subtasks-response1.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### createTask

- **Signature**: `createTask(request: Tasks.CreateTaskRequest, options?: RequestOptions): ApiPromise<TasksResponse1, Tasks.CreateTaskError>`
- **Wire**: `POST /tasks`
- **Auth**: any of `personalAccessToken`, `oauth2` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `TasksResponse1`
- **Error**: `AsanaError` with `kind: "api"`, an instance of `Tasks.CreateTaskError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"errorResponse5"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Tasks.CreateTaskRequest` (3):

| Field | Channel | Wire | Type | Req | Style |
| --- | --- | --- | --- | --- | --- |
| `optPretty` | `query` | `opt_pretty` | `boolean` | no | — |
| `optFields` | `query` | `opt_fields` | `string[]` | no | `csv` |
| `body` | `body` | — | `TasksRequest` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `TasksRequest` | `tasksRequestSchema` | `src/models/tasks-request.ts` |
| `TasksResponse1` | `tasksResponse1Schema` | `src/models/tasks-response1.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### deleteTask

- **Signature**: `deleteTask(request: Tasks.DeleteTaskRequest, options?: RequestOptions): ApiPromise<TasksResponse4, Tasks.DeleteTaskError>`
- **Wire**: `DELETE /tasks/{task_gid}`
- **Auth**: any of `personalAccessToken`, `oauth2` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `TasksResponse4`
- **Error**: `AsanaError` with `kind: "api"`, an instance of `Tasks.DeleteTaskError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"errorResponse5"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Tasks.DeleteTaskRequest` (3):

| Field | Channel | Wire | Type | Req | Style |
| --- | --- | --- | --- | --- | --- |
| `taskGid` | `path` | `task_gid` | `string` | yes | — |
| `optPretty` | `query` | `opt_pretty` | `boolean` | no | — |
| `optFields` | `query` | `opt_fields` | `string[]` | no | `csv` |

| Type | Schema value | Source |
| --- | --- | --- |
| `TasksResponse4` | `tasksResponse4Schema` | `src/models/tasks-response4.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### duplicateTask

- **Signature**: `duplicateTask(request: Tasks.DuplicateTaskRequest, options?: RequestOptions): ApiPromise<TasksDuplicateResponse, Tasks.DuplicateTaskError>`
- **Wire**: `POST /tasks/{task_gid}/duplicate`
- **Auth**: any of `personalAccessToken`, `oauth2` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `TasksDuplicateResponse`
- **Error**: `AsanaError` with `kind: "api"`, an instance of `Tasks.DuplicateTaskError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"errorResponse5"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Tasks.DuplicateTaskRequest` (4):

| Field | Channel | Wire | Type | Req | Style |
| --- | --- | --- | --- | --- | --- |
| `taskGid` | `path` | `task_gid` | `string` | yes | — |
| `optPretty` | `query` | `opt_pretty` | `boolean` | no | — |
| `optFields` | `query` | `opt_fields` | `string[]` | no | `csv` |
| `body` | `body` | — | `TasksDuplicateRequest` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `TasksDuplicateRequest` | `tasksDuplicateRequestSchema` | `src/models/tasks-duplicate-request.ts` |
| `TasksDuplicateResponse` | `tasksDuplicateResponseSchema` | `src/models/tasks-duplicate-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### getDependenciesForTask

- **Signature**: `getDependenciesForTask(request: Tasks.GetDependenciesForTaskRequest, options?: RequestOptions): ApiPromise<TasksDependenciesResponse, Tasks.GetDependenciesForTaskError>`
- **Wire**: `GET /tasks/{task_gid}/dependencies`
- **Auth**: any of `personalAccessToken`, `oauth2` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `TasksDependenciesResponse`
- **Error**: `AsanaError` with `kind: "api"`, an instance of `Tasks.GetDependenciesForTaskError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [402] `ErrorResponse` · `"errorResponse4"` [403] `ErrorResponse` · `"errorResponse5"` [404] `ErrorResponse` · `"errorResponse6"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Tasks.GetDependenciesForTaskRequest` (5):

| Field | Channel | Wire | Type | Req | Style |
| --- | --- | --- | --- | --- | --- |
| `taskGid` | `path` | `task_gid` | `string` | yes | — |
| `optPretty` | `query` | `opt_pretty` | `boolean` | no | — |
| `optFields` | `query` | `opt_fields` | `string[]` | no | `csv` |
| `limit` | `query` | — | `number` | no | — |
| `offset` | `query` | — | `string` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `TasksDependenciesResponse` | `tasksDependenciesResponseSchema` | `src/models/tasks-dependencies-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### getDependentsForTask

- **Signature**: `getDependentsForTask(request: Tasks.GetDependentsForTaskRequest, options?: RequestOptions): ApiPromise<TasksDependentsResponse, Tasks.GetDependentsForTaskError>`
- **Wire**: `GET /tasks/{task_gid}/dependents`
- **Auth**: any of `personalAccessToken`, `oauth2` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `TasksDependentsResponse`
- **Error**: `AsanaError` with `kind: "api"`, an instance of `Tasks.GetDependentsForTaskError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [402] `ErrorResponse` · `"errorResponse4"` [403] `ErrorResponse` · `"errorResponse5"` [404] `ErrorResponse` · `"errorResponse6"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Tasks.GetDependentsForTaskRequest` (5):

| Field | Channel | Wire | Type | Req | Style |
| --- | --- | --- | --- | --- | --- |
| `taskGid` | `path` | `task_gid` | `string` | yes | — |
| `optPretty` | `query` | `opt_pretty` | `boolean` | no | — |
| `optFields` | `query` | `opt_fields` | `string[]` | no | `csv` |
| `limit` | `query` | — | `number` | no | — |
| `offset` | `query` | — | `string` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `TasksDependentsResponse` | `tasksDependentsResponseSchema` | `src/models/tasks-dependents-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### getSubtasksForTask

- **Signature**: `getSubtasksForTask(request: Tasks.GetSubtasksForTaskRequest, options?: RequestOptions): ApiPromise<TasksSubtasksResponse, Tasks.GetSubtasksForTaskError>`
- **Wire**: `GET /tasks/{task_gid}/subtasks`
- **Auth**: any of `personalAccessToken`, `oauth2` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `TasksSubtasksResponse`
- **Error**: `AsanaError` with `kind: "api"`, an instance of `Tasks.GetSubtasksForTaskError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"errorResponse5"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Tasks.GetSubtasksForTaskRequest` (5):

| Field | Channel | Wire | Type | Req | Style |
| --- | --- | --- | --- | --- | --- |
| `taskGid` | `path` | `task_gid` | `string` | yes | — |
| `optPretty` | `query` | `opt_pretty` | `boolean` | no | — |
| `optFields` | `query` | `opt_fields` | `string[]` | no | `csv` |
| `limit` | `query` | — | `number` | no | — |
| `offset` | `query` | — | `string` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `TasksSubtasksResponse` | `tasksSubtasksResponseSchema` | `src/models/tasks-subtasks-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### getTask

- **Signature**: `getTask(request: Tasks.GetTaskRequest, options?: RequestOptions): ApiPromise<TasksResponse1, Tasks.GetTaskError>`
- **Wire**: `GET /tasks/{task_gid}`
- **Auth**: any of `personalAccessToken`, `oauth2` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `TasksResponse1`
- **Error**: `AsanaError` with `kind: "api"`, an instance of `Tasks.GetTaskError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"errorResponse5"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Tasks.GetTaskRequest` (3):

| Field | Channel | Wire | Type | Req | Style |
| --- | --- | --- | --- | --- | --- |
| `taskGid` | `path` | `task_gid` | `string` | yes | — |
| `optPretty` | `query` | `opt_pretty` | `boolean` | no | — |
| `optFields` | `query` | `opt_fields` | `string[]` | no | `csv` |

| Type | Schema value | Source |
| --- | --- | --- |
| `TasksResponse1` | `tasksResponse1Schema` | `src/models/tasks-response1.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### getTasks

- **Signature**: `getTasks(request?: Tasks.GetTasksRequest, options?: RequestOptions): ApiPromise<TasksResponse, Tasks.GetTasksError>`
- **Wire**: `GET /tasks`
- **Auth**: any of `personalAccessToken`, `oauth2` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `TasksResponse`
- **Error**: `AsanaError` with `kind: "api"`, an instance of `Tasks.GetTasksError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"errorResponse5"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Tasks.GetTasksRequest` (10):

| Field | Channel | Wire | Type | Req | Style |
| --- | --- | --- | --- | --- | --- |
| `optPretty` | `query` | `opt_pretty` | `boolean` | no | — |
| `optFields` | `query` | `opt_fields` | `string[]` | no | `csv` |
| `limit` | `query` | — | `number` | no | — |
| `offset` | `query` | — | `string` | no | — |
| `assignee` | `query` | — | `string` | no | — |
| `project` | `query` | — | `string` | no | — |
| `section` | `query` | — | `string` | no | — |
| `workspace` | `query` | — | `string` | no | — |
| `completedSince` | `query` | `completed_since` | `Date` (date-time) | no | — |
| `modifiedSince` | `query` | `modified_since` | `Date` (date-time) | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `TasksResponse` | `tasksResponseSchema` | `src/models/tasks-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### getTasksForProject

- **Signature**: `getTasksForProject(request: Tasks.GetTasksForProjectRequest, options?: RequestOptions): ApiPromise<ProjectsTasksResponse, Tasks.GetTasksForProjectError>`
- **Wire**: `GET /projects/{project_gid}/tasks`
- **Auth**: any of `personalAccessToken`, `oauth2` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ProjectsTasksResponse`
- **Error**: `AsanaError` with `kind: "api"`, an instance of `Tasks.GetTasksForProjectError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"errorResponse5"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Tasks.GetTasksForProjectRequest` (6):

| Field | Channel | Wire | Type | Req | Style |
| --- | --- | --- | --- | --- | --- |
| `projectGid` | `path` | `project_gid` | `string` | yes | — |
| `completedSince` | `query` | `completed_since` | `string` | no | — |
| `optPretty` | `query` | `opt_pretty` | `boolean` | no | — |
| `optFields` | `query` | `opt_fields` | `string[]` | no | `csv` |
| `limit` | `query` | — | `number` | no | — |
| `offset` | `query` | — | `string` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `ProjectsTasksResponse` | `projectsTasksResponseSchema` | `src/models/projects-tasks-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### getTasksForSection

- **Signature**: `getTasksForSection(request: Tasks.GetTasksForSectionRequest, options?: RequestOptions): ApiPromise<SectionsTasksResponse, Tasks.GetTasksForSectionError>`
- **Wire**: `GET /sections/{section_gid}/tasks`
- **Auth**: any of `personalAccessToken`, `oauth2` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SectionsTasksResponse`
- **Error**: `AsanaError` with `kind: "api"`, an instance of `Tasks.GetTasksForSectionError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"errorResponse5"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Tasks.GetTasksForSectionRequest` (5):

| Field | Channel | Wire | Type | Req | Style |
| --- | --- | --- | --- | --- | --- |
| `sectionGid` | `path` | `section_gid` | `string` | yes | — |
| `optPretty` | `query` | `opt_pretty` | `boolean` | no | — |
| `optFields` | `query` | `opt_fields` | `string[]` | no | `csv` |
| `limit` | `query` | — | `number` | no | — |
| `offset` | `query` | — | `string` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `SectionsTasksResponse` | `sectionsTasksResponseSchema` | `src/models/sections-tasks-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### getTasksForTag

- **Signature**: `getTasksForTag(request: Tasks.GetTasksForTagRequest, options?: RequestOptions): ApiPromise<TagsTasksResponse, Tasks.GetTasksForTagError>`
- **Wire**: `GET /tags/{tag_gid}/tasks`
- **Auth**: any of `personalAccessToken`, `oauth2` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `TagsTasksResponse`
- **Error**: `AsanaError` with `kind: "api"`, an instance of `Tasks.GetTasksForTagError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"errorResponse5"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Tasks.GetTasksForTagRequest` (5):

| Field | Channel | Wire | Type | Req | Style |
| --- | --- | --- | --- | --- | --- |
| `tagGid` | `path` | `tag_gid` | `string` | yes | — |
| `optPretty` | `query` | `opt_pretty` | `boolean` | no | — |
| `optFields` | `query` | `opt_fields` | `string[]` | no | `csv` |
| `limit` | `query` | — | `number` | no | — |
| `offset` | `query` | — | `string` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `TagsTasksResponse` | `tagsTasksResponseSchema` | `src/models/tags-tasks-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### getTasksForUserTaskList

- **Signature**: `getTasksForUserTaskList(request: Tasks.GetTasksForUserTaskListRequest, options?: RequestOptions): ApiPromise<UserTaskListsTasksResponse, Tasks.GetTasksForUserTaskListError>`
- **Wire**: `GET /user_task_lists/{user_task_list_gid}/tasks`
- **Auth**: any of `personalAccessToken`, `oauth2` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `UserTaskListsTasksResponse`
- **Error**: `AsanaError` with `kind: "api"`, an instance of `Tasks.GetTasksForUserTaskListError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"errorResponse5"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Tasks.GetTasksForUserTaskListRequest` (6):

| Field | Channel | Wire | Type | Req | Style |
| --- | --- | --- | --- | --- | --- |
| `userTaskListGid` | `path` | `user_task_list_gid` | `string` | yes | — |
| `completedSince` | `query` | `completed_since` | `string` | no | — |
| `optPretty` | `query` | `opt_pretty` | `boolean` | no | — |
| `optFields` | `query` | `opt_fields` | `string[]` | no | `csv` |
| `limit` | `query` | — | `number` | no | — |
| `offset` | `query` | — | `string` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `UserTaskListsTasksResponse` | `userTaskListsTasksResponseSchema` | `src/models/user-task-lists-tasks-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### removeDependenciesForTask

- **Signature**: `removeDependenciesForTask(request: Tasks.RemoveDependenciesForTaskRequest, options?: RequestOptions): ApiPromise<TasksRemoveDependenciesResponse, Tasks.RemoveDependenciesForTaskError>`
- **Wire**: `POST /tasks/{task_gid}/removeDependencies`
- **Auth**: any of `personalAccessToken`, `oauth2` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `TasksRemoveDependenciesResponse`
- **Error**: `AsanaError` with `kind: "api"`, an instance of `Tasks.RemoveDependenciesForTaskError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [402] `ErrorResponse` · `"errorResponse4"` [403] `ErrorResponse` · `"errorResponse5"` [404] `ErrorResponse` · `"errorResponse6"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Tasks.RemoveDependenciesForTaskRequest` (4):

| Field | Channel | Wire | Type | Req | Style |
| --- | --- | --- | --- | --- | --- |
| `taskGid` | `path` | `task_gid` | `string` | yes | — |
| `optPretty` | `query` | `opt_pretty` | `boolean` | no | — |
| `optFields` | `query` | `opt_fields` | `string[]` | no | `csv` |
| `body` | `body` | — | `TasksRemoveDependenciesRequest` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `TasksRemoveDependenciesRequest` | `tasksRemoveDependenciesRequestSchema` | `src/models/tasks-remove-dependencies-request.ts` |
| `TasksRemoveDependenciesResponse` | `tasksRemoveDependenciesResponseSchema` | `src/models/tasks-remove-dependencies-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### removeDependentsForTask

- **Signature**: `removeDependentsForTask(request: Tasks.RemoveDependentsForTaskRequest, options?: RequestOptions): ApiPromise<TasksRemoveDependentsResponse, Tasks.RemoveDependentsForTaskError>`
- **Wire**: `POST /tasks/{task_gid}/removeDependents`
- **Auth**: any of `personalAccessToken`, `oauth2` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `TasksRemoveDependentsResponse`
- **Error**: `AsanaError` with `kind: "api"`, an instance of `Tasks.RemoveDependentsForTaskError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [402] `ErrorResponse` · `"errorResponse4"` [403] `ErrorResponse` · `"errorResponse5"` [404] `ErrorResponse` · `"errorResponse6"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Tasks.RemoveDependentsForTaskRequest` (4):

| Field | Channel | Wire | Type | Req | Style |
| --- | --- | --- | --- | --- | --- |
| `taskGid` | `path` | `task_gid` | `string` | yes | — |
| `optPretty` | `query` | `opt_pretty` | `boolean` | no | — |
| `optFields` | `query` | `opt_fields` | `string[]` | no | `csv` |
| `body` | `body` | — | `TasksRemoveDependentsRequest` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `TasksRemoveDependentsRequest` | `tasksRemoveDependentsRequestSchema` | `src/models/tasks-remove-dependents-request.ts` |
| `TasksRemoveDependentsResponse` | `tasksRemoveDependentsResponseSchema` | `src/models/tasks-remove-dependents-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### removeFollowerForTask

- **Signature**: `removeFollowerForTask(request: Tasks.RemoveFollowerForTaskRequest, options?: RequestOptions): ApiPromise<TasksRemoveFollowersResponse, Tasks.RemoveFollowerForTaskError>`
- **Wire**: `POST /tasks/{task_gid}/removeFollowers`
- **Auth**: any of `personalAccessToken`, `oauth2` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `TasksRemoveFollowersResponse`
- **Error**: `AsanaError` with `kind: "api"`, an instance of `Tasks.RemoveFollowerForTaskError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"errorResponse5"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Tasks.RemoveFollowerForTaskRequest` (4):

| Field | Channel | Wire | Type | Req | Style |
| --- | --- | --- | --- | --- | --- |
| `taskGid` | `path` | `task_gid` | `string` | yes | — |
| `optPretty` | `query` | `opt_pretty` | `boolean` | no | — |
| `optFields` | `query` | `opt_fields` | `string[]` | no | `csv` |
| `body` | `body` | — | `TasksRemoveFollowersRequest` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `TasksRemoveFollowersRequest` | `tasksRemoveFollowersRequestSchema` | `src/models/tasks-remove-followers-request.ts` |
| `TasksRemoveFollowersResponse` | `tasksRemoveFollowersResponseSchema` | `src/models/tasks-remove-followers-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### removeProjectForTask

- **Signature**: `removeProjectForTask(request: Tasks.RemoveProjectForTaskRequest, options?: RequestOptions): ApiPromise<TasksRemoveProjectResponse, Tasks.RemoveProjectForTaskError>`
- **Wire**: `POST /tasks/{task_gid}/removeProject`
- **Auth**: any of `personalAccessToken`, `oauth2` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `TasksRemoveProjectResponse`
- **Error**: `AsanaError` with `kind: "api"`, an instance of `Tasks.RemoveProjectForTaskError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"errorResponse5"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Tasks.RemoveProjectForTaskRequest` (4):

| Field | Channel | Wire | Type | Req | Style |
| --- | --- | --- | --- | --- | --- |
| `taskGid` | `path` | `task_gid` | `string` | yes | — |
| `optPretty` | `query` | `opt_pretty` | `boolean` | no | — |
| `optFields` | `query` | `opt_fields` | `string[]` | no | `csv` |
| `body` | `body` | — | `TasksRemoveProjectRequest` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `TasksRemoveProjectRequest` | `tasksRemoveProjectRequestSchema` | `src/models/tasks-remove-project-request.ts` |
| `TasksRemoveProjectResponse` | `tasksRemoveProjectResponseSchema` | `src/models/tasks-remove-project-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### removeTagForTask

- **Signature**: `removeTagForTask(request: Tasks.RemoveTagForTaskRequest, options?: RequestOptions): ApiPromise<TasksRemoveTagResponse, Tasks.RemoveTagForTaskError>`
- **Wire**: `POST /tasks/{task_gid}/removeTag`
- **Auth**: any of `personalAccessToken`, `oauth2` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `TasksRemoveTagResponse`
- **Error**: `AsanaError` with `kind: "api"`, an instance of `Tasks.RemoveTagForTaskError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"errorResponse5"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Tasks.RemoveTagForTaskRequest` (4):

| Field | Channel | Wire | Type | Req | Style |
| --- | --- | --- | --- | --- | --- |
| `taskGid` | `path` | `task_gid` | `string` | yes | — |
| `optPretty` | `query` | `opt_pretty` | `boolean` | no | — |
| `optFields` | `query` | `opt_fields` | `string[]` | no | `csv` |
| `body` | `body` | — | `TasksRemoveTagRequest` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `TasksRemoveTagRequest` | `tasksRemoveTagRequestSchema` | `src/models/tasks-remove-tag-request.ts` |
| `TasksRemoveTagResponse` | `tasksRemoveTagResponseSchema` | `src/models/tasks-remove-tag-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### searchTasksForWorkspace

- **Signature**: `searchTasksForWorkspace(request: Tasks.SearchTasksForWorkspaceRequest, options?: RequestOptions): ApiPromise<WorkspacesTasksSearchResponse, Tasks.SearchTasksForWorkspaceError>`
- **Wire**: `GET /workspaces/{workspace_gid}/tasks/search`
- **Auth**: any of `personalAccessToken`, `oauth2` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `WorkspacesTasksSearchResponse`
- **Error**: `AsanaError` with `kind: "api"`, an instance of `Tasks.SearchTasksForWorkspaceError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"errorResponse5"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Tasks.SearchTasksForWorkspaceRequest` (55):

| Field | Channel | Wire | Type | Req | Default | Style |
| --- | --- | --- | --- | --- | --- | --- |
| `workspaceGid` | `path` | `workspace_gid` | `string` | yes | — | — |
| `optPretty` | `query` | `opt_pretty` | `boolean` | no | — | — |
| `optFields` | `query` | `opt_fields` | `string[]` | no | — | `csv` |
| `text` | `query` | — | `string` | no | — | — |
| `resourceSubtype` | `query` | `resource_subtype` | `ResourceSubtype2AsanaTasksApi` | no | `ResourceSubtype2AsanaTasksApi.Milestone` | — |
| `assigneeAny` | `query` | `assignee.any` | `string` | no | — | — |
| `assigneeNot` | `query` | `assignee.not` | `string` | no | — | — |
| `portfoliosAny` | `query` | `portfolios.any` | `string` | no | — | — |
| `projectsAny` | `query` | `projects.any` | `string` | no | — | — |
| `projectsNot` | `query` | `projects.not` | `string` | no | — | — |
| `projectsAll` | `query` | `projects.all` | `string` | no | — | — |
| `sectionsAny` | `query` | `sections.any` | `string` | no | — | — |
| `sectionsNot` | `query` | `sections.not` | `string` | no | — | — |
| `sectionsAll` | `query` | `sections.all` | `string` | no | — | — |
| `tagsAny` | `query` | `tags.any` | `string` | no | — | — |
| `tagsNot` | `query` | `tags.not` | `string` | no | — | — |
| `tagsAll` | `query` | `tags.all` | `string` | no | — | — |
| `teamsAny` | `query` | `teams.any` | `string` | no | — | — |
| `followersNot` | `query` | `followers.not` | `string` | no | — | — |
| `createdByAny` | `query` | `created_by.any` | `string` | no | — | — |
| `createdByNot` | `query` | `created_by.not` | `string` | no | — | — |
| `assignedByAny` | `query` | `assigned_by.any` | `string` | no | — | — |
| `assignedByNot` | `query` | `assigned_by.not` | `string` | no | — | — |
| `likedByNot` | `query` | `liked_by.not` | `string` | no | — | — |
| `commentedOnByNot` | `query` | `commented_on_by.not` | `string` | no | — | — |
| `dueOnBefore` | `query` | `due_on.before` | `string` (date) | no | — | — |
| `dueOnAfter` | `query` | `due_on.after` | `string` (date) | no | — | — |
| `dueOn` | `query` | `due_on` | `string` (date) | no | — | — |
| `dueAtBefore` | `query` | `due_at.before` | `Date` (date-time) | no | — | — |
| `dueAtAfter` | `query` | `due_at.after` | `Date` (date-time) | no | — | — |
| `startOnBefore` | `query` | `start_on.before` | `string` (date) | no | — | — |
| `startOnAfter` | `query` | `start_on.after` | `string` (date) | no | — | — |
| `startOn` | `query` | `start_on` | `string` (date) | no | — | — |
| `createdOnBefore` | `query` | `created_on.before` | `string` (date) | no | — | — |
| `createdOnAfter` | `query` | `created_on.after` | `string` (date) | no | — | — |
| `createdOn` | `query` | `created_on` | `string` (date) | no | — | — |
| `createdAtBefore` | `query` | `created_at.before` | `Date` (date-time) | no | — | — |
| `createdAtAfter` | `query` | `created_at.after` | `Date` (date-time) | no | — | — |
| `completedOnBefore` | `query` | `completed_on.before` | `string` (date) | no | — | — |
| `completedOnAfter` | `query` | `completed_on.after` | `string` (date) | no | — | — |
| `completedOn` | `query` | `completed_on` | `string` (date) | no | — | — |
| `completedAtBefore` | `query` | `completed_at.before` | `Date` (date-time) | no | — | — |
| `completedAtAfter` | `query` | `completed_at.after` | `Date` (date-time) | no | — | — |
| `modifiedOnBefore` | `query` | `modified_on.before` | `string` (date) | no | — | — |
| `modifiedOnAfter` | `query` | `modified_on.after` | `string` (date) | no | — | — |
| `modifiedOn` | `query` | `modified_on` | `string` (date) | no | — | — |
| `modifiedAtBefore` | `query` | `modified_at.before` | `Date` (date-time) | no | — | — |
| `modifiedAtAfter` | `query` | `modified_at.after` | `Date` (date-time) | no | — | — |
| `isBlocking` | `query` | `is_blocking` | `boolean` | no | — | — |
| `isBlocked` | `query` | `is_blocked` | `boolean` | no | — | — |
| `hasAttachment` | `query` | `has_attachment` | `boolean` | no | — | — |
| `completed` | `query` | — | `boolean` | no | — | — |
| `isSubtask` | `query` | `is_subtask` | `boolean` | no | — | — |
| `sortBy` | `query` | `sort_by` | `SortBy` | no | `SortBy.ModifiedAt` | — |
| `sortAscending` | `query` | `sort_ascending` | `boolean` | no | `false` | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `ResourceSubtype2AsanaTasksApi` | `resourceSubtype2AsanaTasksApiSchema` | `src/models/resource-subtype2-asana-tasks-api.ts` |
| `SortBy` | `sortBySchema` | `src/models/sort-by.ts` |
| `WorkspacesTasksSearchResponse` | `workspacesTasksSearchResponseSchema` | `src/models/workspaces-tasks-search-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### setParentForTask

- **Signature**: `setParentForTask(request: Tasks.SetParentForTaskRequest, options?: RequestOptions): ApiPromise<TasksSetParentResponse, Tasks.SetParentForTaskError>`
- **Wire**: `POST /tasks/{task_gid}/setParent`
- **Auth**: any of `personalAccessToken`, `oauth2` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `TasksSetParentResponse`
- **Error**: `AsanaError` with `kind: "api"`, an instance of `Tasks.SetParentForTaskError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"errorResponse5"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Tasks.SetParentForTaskRequest` (4):

| Field | Channel | Wire | Type | Req | Style |
| --- | --- | --- | --- | --- | --- |
| `taskGid` | `path` | `task_gid` | `string` | yes | — |
| `optPretty` | `query` | `opt_pretty` | `boolean` | no | — |
| `optFields` | `query` | `opt_fields` | `string[]` | no | `csv` |
| `body` | `body` | — | `TasksSetParentRequest` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `TasksSetParentRequest` | `tasksSetParentRequestSchema` | `src/models/tasks-set-parent-request.ts` |
| `TasksSetParentResponse` | `tasksSetParentResponseSchema` | `src/models/tasks-set-parent-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### updateTask

- **Signature**: `updateTask(request: Tasks.UpdateTaskRequest, options?: RequestOptions): ApiPromise<TasksResponse1, Tasks.UpdateTaskError>`
- **Wire**: `PUT /tasks/{task_gid}`
- **Auth**: any of `personalAccessToken`, `oauth2` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `TasksResponse1`
- **Error**: `AsanaError` with `kind: "api"`, an instance of `Tasks.UpdateTaskError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"errorResponse5"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Tasks.UpdateTaskRequest` (4):

| Field | Channel | Wire | Type | Req | Style |
| --- | --- | --- | --- | --- | --- |
| `taskGid` | `path` | `task_gid` | `string` | yes | — |
| `optPretty` | `query` | `opt_pretty` | `boolean` | no | — |
| `optFields` | `query` | `opt_fields` | `string[]` | no | `csv` |
| `body` | `body` | — | `TasksRequest` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `TasksRequest` | `tasksRequestSchema` | `src/models/tasks-request.ts` |
| `TasksResponse1` | `tasksResponse1Schema` | `src/models/tasks-response1.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

