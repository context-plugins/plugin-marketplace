<!-- Generated file — do not edit; regenerated with the SDK. -->

# FileManager — operations

Accessor: `client.fileManager` · Source: `src/resources/file-manager.ts` · 5 operations · Request and error types: namespace `FileManager`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `archbee`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### deleteAFileManagerFile

- **Signature**: `deleteAFileManagerFile(request: FileManager.DeleteAFileManagerFileRequest, options?: RequestOptions): ApiPromise<undefined, FileManager.DeleteAFileManagerFileError>`
- **Wire**: `DELETE /file-manager/file`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `ArchbeeError` with `kind: "api"`, an instance of `FileManager.DeleteAFileManagerFileError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"fileManagerFile400Error1"` [400] `FileManagerFile400Error1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `FileManager.DeleteAFileManagerFileRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `FileManagerFileRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `FileManagerFileRequest` | `fileManagerFileRequestSchema` | `src/models/file-manager-file-request.ts` |
| `FileManagerFile400Error1` | `fileManagerFile400Error1Schema` | `src/models/file-manager-file400-error1.ts` |

### listFileManagerFiles

- **Signature**: `listFileManagerFiles(request?: FileManager.ListFileManagerFilesRequest, options?: RequestOptions): ApiPromise<undefined, FileManager.ListFileManagerFilesError>`
- **Wire**: `GET /file-manager/files`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `ArchbeeError` with `kind: "api"`, an instance of `FileManager.ListFileManagerFilesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"fileManagerFiles400Error1"` [400] `FileManagerFiles400Error1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `FileManager.ListFileManagerFilesRequest` (5):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `parentId` | `query` | `string` | no |
| `itemType` | `query` | `ItemType` | no |
| `searchQuery` | `query` | `string` | no |
| `pageIndex` | `query` | `number` | no |
| `pageSize` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ItemType` | `itemTypeSchema` | `src/models/item-type.ts` |
| `FileManagerFiles400Error1` | `fileManagerFiles400Error1Schema` | `src/models/file-manager-files400-error1.ts` |

### moveAFileManagerFile

- **Signature**: `moveAFileManagerFile(request: FileManager.MoveAFileManagerFileRequest, options?: RequestOptions): ApiPromise<undefined, FileManager.MoveAFileManagerFileError>`
- **Wire**: `POST /file-manager/move`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `ArchbeeError` with `kind: "api"`, an instance of `FileManager.MoveAFileManagerFileError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"fileManagerMove400Error1"` [400] `FileManagerMove400Error1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `FileManager.MoveAFileManagerFileRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `FileManagerMoveRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `FileManagerMoveRequest` | `fileManagerMoveRequestSchema` | `src/models/file-manager-move-request.ts` |
| `FileManagerMove400Error1` | `fileManagerMove400Error1Schema` | `src/models/file-manager-move400-error1.ts` |

### overwriteAFileManagerFile

- **Signature**: `overwriteAFileManagerFile(request: FileManager.OverwriteAFileManagerFileRequest, options?: RequestOptions): ApiPromise<undefined, FileManager.OverwriteAFileManagerFileError>`
- **Wire**: `POST /file-manager/replace`
- **Auth**: `bearerAuth`
- **Request body**: `multipart/form-data` — every field marked `form`. `file` is a file part, framed as bytes rather than encoded. The platform writes the boundary, or the SDK does when a file part streams
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `ArchbeeError` with `kind: "api"`, an instance of `FileManager.OverwriteAFileManagerFileError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"fileManagerReplace400Error1"` [400] `FileManagerReplace400Error1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `FileManager.OverwriteAFileManagerFileRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `fileId` | `form` | `string` | yes |
| `file` | `form` | `FileInput` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `FileManagerReplace400Error1` | `fileManagerReplace400Error1Schema` | `src/models/file-manager-replace400-error1.ts` |

### uploadSingleFile

- **Signature**: `uploadSingleFile(request: FileManager.UploadSingleFileRequest, options?: RequestOptions): ApiPromise<UploadFileResponse, FileManager.UploadSingleFileError>`
- **Wire**: `POST /upload/file`
- **Auth**: `bearerAuth`
- **Request body**: `multipart/form-data` — every field marked `form`. `file` is a file part, framed as bytes rather than encoded. The platform writes the boundary, or the SDK does when a file part streams
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `UploadFileResponse`
- **Error**: `ArchbeeError` with `kind: "api"`, an instance of `FileManager.UploadSingleFileError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"uploadFile400Error1"` [400] `UploadFile400Error1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `FileManager.UploadSingleFileRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `file` | `form` | `FileInput` | yes |
| `isPublic` | `form` | `IsPublic` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `IsPublic` | `isPublicSchema` | `src/models/is-public.ts` |
| `UploadFileResponse` | `uploadFileResponseSchema` | `src/models/upload-file-response.ts` |
| `UploadFile400Error1` | `uploadFile400Error1Schema` | `src/models/upload-file400-error1.ts` |

