<!-- Generated file — do not edit; regenerated with the SDK. -->

# Storage — operations

Accessor: `client.storage` · Source: `src/resources/storage.ts` · 3 operations · Request and error types: namespace `Storage`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `hud`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### listTraceArtifactsV2StorageTracesTraceIdArtifactsGet

- **Signature**: `listTraceArtifactsV2StorageTracesTraceIdArtifactsGet(request: Storage.ListTraceArtifactsV2StorageTracesTraceIdArtifactsGetRequest, options?: RequestOptions): ApiPromise<TraceStorageObjectListResponse, Storage.ListTraceArtifactsV2StorageTracesTraceIdArtifactsGetError>`
- **Wire**: `GET /v2/storage/traces/{trace_id}/artifacts`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `TraceStorageObjectListResponse`
- **Error**: `HudError` with `kind: "api"`, an instance of `Storage.ListTraceArtifactsV2StorageTracesTraceIdArtifactsGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"errorResponse5"` [409] `ErrorResponse` · `"httpValidationError"` [422] `HttpValidationError` · `"errorResponse6"` [429] `ErrorResponse` · `"errorResponse7"` [503] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Storage.ListTraceArtifactsV2StorageTracesTraceIdArtifactsGetRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `traceId` | `path` | `trace_id` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `TraceStorageObjectListResponse` | `traceStorageObjectListResponseSchema` | `src/models/trace-storage-object-list-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### traceWorkspaceChangesV2StorageTracesTraceIdWorkspaceChangesGet

- **Signature**: `traceWorkspaceChangesV2StorageTracesTraceIdWorkspaceChangesGet(request: Storage.TraceWorkspaceChangesV2StorageTracesTraceIdWorkspaceChangesGetRequest, options?: RequestOptions): ApiPromise<TraceWorkspaceChangesResponse, Storage.TraceWorkspaceChangesV2StorageTracesTraceIdWorkspaceChangesGetError>`
- **Wire**: `GET /v2/storage/traces/{trace_id}/workspace/changes`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `TraceWorkspaceChangesResponse`
- **Error**: `HudError` with `kind: "api"`, an instance of `Storage.TraceWorkspaceChangesV2StorageTracesTraceIdWorkspaceChangesGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"errorResponse5"` [409] `ErrorResponse` · `"httpValidationError"` [422] `HttpValidationError` · `"errorResponse6"` [429] `ErrorResponse` · `"errorResponse7"` [503] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Storage.TraceWorkspaceChangesV2StorageTracesTraceIdWorkspaceChangesGetRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `traceId` | `path` | `trace_id` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `TraceWorkspaceChangesResponse` | `traceWorkspaceChangesResponseSchema` | `src/models/trace-workspace-changes-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### traceWorkspaceFilesV2StorageTracesTraceIdWorkspaceFilesGet

- **Signature**: `traceWorkspaceFilesV2StorageTracesTraceIdWorkspaceFilesGet(request: Storage.TraceWorkspaceFilesV2StorageTracesTraceIdWorkspaceFilesGetRequest, options?: RequestOptions): ApiPromise<TraceWorkspaceFilesResponse, Storage.TraceWorkspaceFilesV2StorageTracesTraceIdWorkspaceFilesGetError>`
- **Wire**: `GET /v2/storage/traces/{trace_id}/workspace/files`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `TraceWorkspaceFilesResponse`
- **Error**: `HudError` with `kind: "api"`, an instance of `Storage.TraceWorkspaceFilesV2StorageTracesTraceIdWorkspaceFilesGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"errorResponse5"` [409] `ErrorResponse` · `"httpValidationError"` [422] `HttpValidationError` · `"errorResponse6"` [429] `ErrorResponse` · `"errorResponse7"` [503] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Storage.TraceWorkspaceFilesV2StorageTracesTraceIdWorkspaceFilesGetRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `traceId` | `path` | `trace_id` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `TraceWorkspaceFilesResponse` | `traceWorkspaceFilesResponseSchema` | `src/models/trace-workspace-files-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

