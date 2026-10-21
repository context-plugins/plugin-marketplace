<!-- Generated file — do not edit; regenerated with the SDK. -->

# File — operations

Accessor: `client.file` · Source: `src/resources/file.ts` · 4 operations · Request and error types: namespace `File`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `friendli-suite-api-reference`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### completeUpload

- **Signature**: `completeUpload(request: File.CompleteUploadRequest, options?: RequestOptions): ApiPromise<Record<string, unknown>, File.CompleteUploadError>`
- **Wire**: `PATCH /beta/file/{file_id}`
- **Auth**: `token`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `FriendliSuiteApiReferenceError` with `kind: "api"`, an instance of `File.CompleteUploadError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"httpValidationError"` [422] `HttpValidationError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `File.CompleteUploadRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `fileId` | `path` | `file_id` | `string` | yes |
| `xFriendliTeam` | `header` | `X-Friendli-Team` | `XFriendliTeam` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `XFriendliTeam` | `xFriendliTeamSchema` | `src/models/unions/xfriendli-team.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### getDownloadUrl

- **Signature**: `getDownloadUrl(request: File.GetDownloadUrlRequest, options?: RequestOptions): ApiPromise<FileGetDownloadUrlResponse, File.GetDownloadUrlError>`
- **Wire**: `GET /beta/file/{file_id}/download_url`
- **Auth**: `token`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `FileGetDownloadUrlResponse`
- **Error**: `FriendliSuiteApiReferenceError` with `kind: "api"`, an instance of `File.GetDownloadUrlError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"httpValidationError"` [422] `HttpValidationError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `File.GetDownloadUrlRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `fileId` | `path` | `file_id` | `string` | yes |
| `xFriendliTeam` | `header` | `X-Friendli-Team` | `XFriendliTeam` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `XFriendliTeam` | `xFriendliTeamSchema` | `src/models/unions/xfriendli-team.ts` |
| `FileGetDownloadUrlResponse` | `fileGetDownloadUrlResponseSchema` | `src/models/file-get-download-url-response.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### getInfo

- **Signature**: `getInfo(request: File.GetInfoRequest, options?: RequestOptions): ApiPromise<FileInfo, File.GetInfoError>`
- **Wire**: `GET /beta/file/{file_id}`
- **Auth**: `token`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `FileInfo`
- **Error**: `FriendliSuiteApiReferenceError` with `kind: "api"`, an instance of `File.GetInfoError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"httpValidationError"` [422] `HttpValidationError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `File.GetInfoRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `fileId` | `path` | `file_id` | `string` | yes |
| `xFriendliTeam` | `header` | `X-Friendli-Team` | `XFriendliTeam` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `XFriendliTeam` | `xFriendliTeamSchema` | `src/models/unions/xfriendli-team.ts` |
| `FileInfo` | `fileInfoSchema` | `src/models/file-info.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### initUpload

- **Signature**: `initUpload(request: File.InitUploadRequest, options?: RequestOptions): ApiPromise<FileInitUploadResponse, File.InitUploadError>`
- **Wire**: `POST /beta/file`
- **Auth**: `token`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `FileInitUploadResponse`
- **Error**: `FriendliSuiteApiReferenceError` with `kind: "api"`, an instance of `File.InitUploadError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"httpValidationError"` [422] `HttpValidationError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `File.InitUploadRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xFriendliTeam` | `header` | `X-Friendli-Team` | `XFriendliTeam` | no |
| `body` | `body` | — | `FileInitUploadRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XFriendliTeam` | `xFriendliTeamSchema` | `src/models/unions/xfriendli-team.ts` |
| `FileInitUploadRequest` | `fileInitUploadRequestSchema` | `src/models/file-init-upload-request.ts` |
| `FileInitUploadResponse` | `fileInitUploadResponseSchema` | `src/models/file-init-upload-response.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

