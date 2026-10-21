<!-- Generated file — do not edit; regenerated with the SDK. -->

# Tasks — operations

Accessor: `client.tasks` · Source: `src/resources/tasks.ts` · 1 operation · Request and error types: namespace `Tasks`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `cloudinary-asset-management-api`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getGenerationTaskStatus

- **Signature**: `getGenerationTaskStatus(request: Tasks.GetGenerationTaskStatusRequest, options?: RequestOptions): ApiPromise<TaskResponse, Tasks.GetGenerationTaskStatusError>`
- **Wire**: `GET /v2/generate/{cloud_name}/tasks/{task_id}`
- **Auth**: any of `basicAuth`, `oauth2` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `TaskResponse`
- **Error**: `CloudinaryAssetManagementApiError` with `kind: "api"`, an instance of `Tasks.GetGenerationTaskStatusError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [404] `ErrorResponse` · `"rateLimitedResponse1"` [429] `RateLimitedResponse1` · `"errorResponse4"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Tasks.GetGenerationTaskStatusRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `cloudName` | `path` | `cloud_name` | `string` | yes |
| `taskId` | `path` | `task_id` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `TaskResponse` | `taskResponseSchema` | `src/models/task-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |
| `RateLimitedResponse1` | `rateLimitedResponse1Schema` | `src/models/rate-limited-response1.ts` |

