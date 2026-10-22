<!-- Generated file — do not edit; regenerated with the SDK. -->

# Tasks — operations

Accessor: `client.tasks` · Source: `src/resources/tasks.ts` · 1 operation · Request and error types: namespace `Tasks`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `analyze-api-beta`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getAnalysisTaskStatus

- **Signature**: `getAnalysisTaskStatus(request: Tasks.GetAnalysisTaskStatusRequest, options?: RequestOptions): ApiPromise<GetTaskStatusResponse, Tasks.GetAnalysisTaskStatusError>`
- **Wire**: `GET /tasks/{task_id}`
- **Auth**: any of `basicAuth`, `oAuth2` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GetTaskStatusResponse`
- **Error**: `AnalyzeApiBetaError` with `kind: "api"`, an instance of `Tasks.GetAnalysisTaskStatusError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"rateLimitedResponse1"` [429] `RateLimitedResponse1` · `"errorResponse5"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Tasks.GetAnalysisTaskStatusRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `taskId` | `path` | `task_id` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GetTaskStatusResponse` | `getTaskStatusResponseSchema` | `src/models/get-task-status-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |
| `RateLimitedResponse1` | `rateLimitedResponse1Schema` | `src/models/rate-limited-response1.ts` |

