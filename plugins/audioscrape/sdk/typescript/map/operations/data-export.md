<!-- Generated file — do not edit; regenerated with the SDK. -->

# DataExport — operations

Accessor: `client.dataExport` · Source: `src/resources/data-export.ts` · 2 operations · Request and error types: namespace `DataExport`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `audioscrape`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createWorkspaceExport

- **Signature**: `createWorkspaceExport(request: DataExport.CreateWorkspaceExportRequest, options?: RequestOptions): ApiPromise<CreateExportJobResponse, DataExport.CreateWorkspaceExportError>`
- **Wire**: `POST /api/workspaces/{workspace}/export`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `CreateExportJobResponse`
- **Error**: `AudioscrapeError` with `kind: "api"`, an instance of `DataExport.CreateWorkspaceExportError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiErrorBody"` [401] `ApiErrorBody` · `"apiErrorBody2"` [403] `ApiErrorBody` · `"apiErrorBody3"` [404] `ApiErrorBody` · `"apiErrorBody4"` [429] `ApiErrorBody` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DataExport.CreateWorkspaceExportRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `workspace` | `path` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CreateExportJobResponse` | `createExportJobResponseSchema` | `src/models/create-export-job-response.ts` |
| `ApiErrorBody` | `apiErrorBodySchema` | `src/models/api-error-body.ts` |

### getWorkspaceExport

- **Signature**: `getWorkspaceExport(request: DataExport.GetWorkspaceExportRequest, options?: RequestOptions): ApiPromise<ExportJobStatus, DataExport.GetWorkspaceExportError>`
- **Wire**: `GET /api/workspaces/{workspace}/export/{job_id}`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ExportJobStatus`
- **Error**: `AudioscrapeError` with `kind: "api"`, an instance of `DataExport.GetWorkspaceExportError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiErrorBody"` [401] `ApiErrorBody` · `"apiErrorBody2"` [403] `ApiErrorBody` · `"apiErrorBody3"` [404] `ApiErrorBody` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DataExport.GetWorkspaceExportRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `workspace` | `path` | — | `number` | yes |
| `jobId` | `path` | `job_id` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ExportJobStatus` | `exportJobStatusSchema` | `src/models/export-job-status.ts` |
| `ApiErrorBody` | `apiErrorBodySchema` | `src/models/api-error-body.ts` |

