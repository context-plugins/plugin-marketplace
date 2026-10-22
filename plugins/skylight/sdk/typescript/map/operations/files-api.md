<!-- Generated file — do not edit; regenerated with the SDK. -->

# FilesApi — operations

Accessor: `client.filesApi` · Source: `src/resources/files-api.ts` · 2 operations · Request and error types: namespace `FilesApi`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `skylight-api`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### download

- **Signature**: `download(request: FilesApi.DownloadRequest, options?: RequestOptions): ApiPromise<FileDownloadResponse, FilesApi.DownloadError>`
- **Wire**: `POST /windows/files/download/{instance_id}`
- **Auth**: `apikey`
- **Request body**: `application/json` — the `body` field, a bare top-level JSON map with no fixed keys
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `FileDownloadResponse`
- **Error**: `SkylightApiError` with `kind: "api"`, an instance of `FilesApi.DownloadError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"forbiddenErrorResponse"` [403] `ForbiddenErrorResponse` · `"errorResponse"` [500] `ErrorResponse` · `"httpValidationError"` [422] `HttpValidationError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `FilesApi.DownloadRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `instanceId` | `path` | `instance_id` | `string` | yes |
| `body` | `body` | — | `Record<string, string>` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `FileDownloadResponse` | `fileDownloadResponseSchema` | `src/models/file-download-response.ts` |
| `ForbiddenErrorResponse` | `forbiddenErrorResponseSchema` | `src/models/forbidden-error-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### upload

- **Signature**: `upload(request: FilesApi.UploadRequest, options?: RequestOptions): ApiPromise<FileUploadResponse, FilesApi.UploadError>`
- **Wire**: `POST /windows/files/upload/{instance_id}`
- **Auth**: `apikey`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `FileUploadResponse`
- **Error**: `SkylightApiError` with `kind: "api"`, an instance of `FilesApi.UploadError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"forbiddenErrorResponse"` [403] `ForbiddenErrorResponse` · `"errorResponse2"` [500] `ErrorResponse` · `"httpValidationError"` [422] `HttpValidationError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `FilesApi.UploadRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `instanceId` | `path` | `instance_id` | `string` | yes |
| `body` | `body` | — | `S3VmUploadRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `S3VmUploadRequest` | `s3VmUploadRequestSchema` | `src/models/s3-vm-upload-request.ts` |
| `FileUploadResponse` | `fileUploadResponseSchema` | `src/models/file-upload-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |
| `ForbiddenErrorResponse` | `forbiddenErrorResponseSchema` | `src/models/forbidden-error-response.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

