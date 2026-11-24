<!-- Generated file — do not edit; regenerated with the SDK. -->

# Files — operations

Accessor: `client.files` · Source: `src/resources/files.ts` · 5 operations · Request and error types: namespace `Files`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `shortcut`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### deleteFile

- **Signature**: `deleteFile(request: Files.DeleteFileRequest, options?: RequestOptions): ApiPromise<undefined, Files.DeleteFileError>`
- **Wire**: `DELETE /api/v3/files/{file-public-id}`
- **Auth**: `apiToken`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `ShortcutError` with `kind: "api"`, an instance of `Files.DeleteFileError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error404"` [404] no body · `"error422"` [422] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Files.DeleteFileRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `filePublicId` | `path` | `file-public-id` | `number` | yes |

### getFile

- **Signature**: `getFile(request: Files.GetFileRequest, options?: RequestOptions): ApiPromise<UploadedFile, Files.GetFileError>`
- **Wire**: `GET /api/v3/files/{file-public-id}`
- **Auth**: `apiToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `UploadedFile`
- **Error**: `ShortcutError` with `kind: "api"`, an instance of `Files.GetFileError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error404"` [404] no body · `"error422"` [422] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Files.GetFileRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `filePublicId` | `path` | `file-public-id` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `UploadedFile` | `uploadedFileSchema` | `src/models/uploaded-file.ts` |

### listFiles

- **Signature**: `listFiles(options?: RequestOptions): ApiPromise<UploadedFile[], Files.ListFilesError>`
- **Wire**: `GET /api/v3/files`
- **Auth**: `apiToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `UploadedFile[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `ShortcutError` with `kind: "api"`, an instance of `Files.ListFilesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error404"` [404] no body · `"error422"` [422] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

| Type | Schema value | Source |
| --- | --- | --- |
| `UploadedFile` | `uploadedFileSchema` | `src/models/uploaded-file.ts` |

### updateFile

- **Signature**: `updateFile(request: Files.UpdateFileRequest, options?: RequestOptions): ApiPromise<UploadedFile, Files.UpdateFileError>`
- **Wire**: `PUT /api/v3/files/{file-public-id}`
- **Auth**: `apiToken`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `UploadedFile`
- **Error**: `ShortcutError` with `kind: "api"`, an instance of `Files.UpdateFileError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error404"` [404] no body · `"error422"` [422] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Files.UpdateFileRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `filePublicId` | `path` | `file-public-id` | `number` | yes |
| `body` | `body` | — | `UpdateFile` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `UpdateFile` | `updateFileSchema` | `src/models/update-file.ts` |
| `UploadedFile` | `uploadedFileSchema` | `src/models/uploaded-file.ts` |

### uploadFiles

- **Signature**: `uploadFiles(request: Files.UploadFilesRequest, options?: RequestOptions): ApiPromise<UploadedFile[], Files.UploadFilesError>`
- **Wire**: `POST /api/v3/files`
- **Auth**: `apiToken`
- **Request body**: `multipart/form-data` — every field marked `form`. `file0`, `file1`, `file2` and `file3` are file parts, framed as bytes rather than encoded. The platform writes the boundary, or the SDK does when a file part streams
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `UploadedFile[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `ShortcutError` with `kind: "api"`, an instance of `Files.UploadFilesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error404"` [404] no body · `"error422"` [422] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Files.UploadFilesRequest` (5):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `file0` | `form` | — | `FileInput` | yes |
| `storyId` | `form` | `story_id` | `number` | no |
| `file1` | `form` | — | `FileInput` | no |
| `file2` | `form` | — | `FileInput` | no |
| `file3` | `form` | — | `FileInput` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `UploadedFile` | `uploadedFileSchema` | `src/models/uploaded-file.ts` |

