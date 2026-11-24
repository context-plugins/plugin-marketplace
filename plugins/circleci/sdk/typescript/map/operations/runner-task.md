<!-- Generated file — do not edit; regenerated with the SDK. -->

# RunnerTask — operations

Accessor: `client.runnerTask` · Source: `src/resources/runner-task.ts` · 2 operations · Request and error types: namespace `RunnerTask`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `circle-ci`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getRunningTaskCount

- **Signature**: `getRunningTaskCount(request: RunnerTask.GetRunningTaskCountRequest, options?: RequestOptions): ApiPromise<RunnerTasksRunningResponse, RunnerTask.GetRunningTaskCountError>`
- **Wire**: `GET /runner/tasks/running`
- **Auth**: `apiToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `RunnerTasksRunningResponse`
- **Error**: `CircleCiError` with `kind: "api"`, an instance of `RunnerTask.GetRunningTaskCountError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `RunnerTask.GetRunningTaskCountRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `resourceClass` | `query` | `resource-class` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `RunnerTasksRunningResponse` | `runnerTasksRunningResponseSchema` | `src/models/runner-tasks-running-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### getUnclaimedTaskCount

- **Signature**: `getUnclaimedTaskCount(request: RunnerTask.GetUnclaimedTaskCountRequest, options?: RequestOptions): ApiPromise<RunnerTasksResponse, RunnerTask.GetUnclaimedTaskCountError>`
- **Wire**: `GET /runner/tasks`
- **Auth**: `apiToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `RunnerTasksResponse`
- **Error**: `CircleCiError` with `kind: "api"`, an instance of `RunnerTask.GetUnclaimedTaskCountError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `RunnerTask.GetUnclaimedTaskCountRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `resourceClass` | `query` | `resource-class` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `RunnerTasksResponse` | `runnerTasksResponseSchema` | `src/models/runner-tasks-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

