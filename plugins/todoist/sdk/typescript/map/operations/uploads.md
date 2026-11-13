<!-- Generated file — do not edit; regenerated with the SDK. -->

# Uploads — operations

Accessor: `client.uploads` · Source: `src/resources/uploads.ts` · 2 operations · Request and error types: namespace `Uploads`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `todoist-sdk`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### deleteUploadApiV1UploadsDelete

- **Signature**: `deleteUploadApiV1UploadsDelete(request: Uploads.DeleteUploadApiV1UploadsDeleteRequest, options?: RequestOptions): ApiPromise<ResponseDeleteUploadApiV1UploadsDelete, Uploads.DeleteUploadApiV1UploadsDeleteError>`
- **Wire**: `DELETE /api/v1/uploads`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ResponseDeleteUploadApiV1UploadsDelete`
- **Error**: `TodoistApiError` with `kind: "api"`, an instance of `Uploads.DeleteUploadApiV1UploadsDeleteError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"todoistError"` [400] `TodoistError` · `"todoistError2"` [401] `TodoistError` · `"todoistError3"` [403] `TodoistError` · `"todoistError4"` [404] `TodoistError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Uploads.DeleteUploadApiV1UploadsDeleteRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `fileUrl` | `query` | `file_url` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ResponseDeleteUploadApiV1UploadsDelete` | `responseDeleteUploadApiV1UploadsDeleteSchema` | `src/models/response-delete-upload-api-v1-uploads-delete.ts` |
| `TodoistError` | `todoistErrorSchema` | `src/models/todoist-error.ts` |

### uploadFileApiV1UploadsPost

- **Signature**: `uploadFileApiV1UploadsPost(request: Uploads.UploadFileApiV1UploadsPostRequest, options?: RequestOptions): ApiPromise<UploadResult, Uploads.UploadFileApiV1UploadsPostError>`
- **Wire**: `POST /api/v1/uploads`
- **Auth**: `bearerAuth`
- **Request body**: `multipart/form-data` — every field marked `form`. `file` is a file part, framed as bytes rather than encoded. The platform writes the boundary, or the SDK does when a file part streams
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `UploadResult`
- **Error**: `TodoistApiError` with `kind: "api"`, an instance of `Uploads.UploadFileApiV1UploadsPostError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"todoistError"` [400] `TodoistError` · `"todoistError2"` [401] `TodoistError` · `"todoistError3"` [403] `TodoistError` · `"todoistError4"` [404] `TodoistError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Uploads.UploadFileApiV1UploadsPostRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `file` | `form` | — | `FileInput` | yes |
| `fileName` | `form` | `file_name` | `string` | no |
| `projectId` | `form` | `project_id` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `UploadResult` | `uploadResultSchema` | `src/models/upload-result.ts` |
| `TodoistError` | `todoistErrorSchema` | `src/models/todoist-error.ts` |

