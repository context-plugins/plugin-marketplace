<!-- Generated file — do not edit; regenerated with the SDK. -->

# Data — operations

Accessor: `client.data` · Source: `src/resources/data.ts` · 10 operations · Request and error types: namespace `Data`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `hud`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### completeDataFileV2DataFileIdCompletePost

- **Signature**: `completeDataFileV2DataFileIdCompletePost(request: Data.CompleteDataFileV2DataFileIdCompletePostRequest, options?: RequestOptions): ApiPromise<DataFileResponse, Data.CompleteDataFileV2DataFileIdCompletePostError>`
- **Wire**: `POST /v2/data/{file_id}/complete`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `DataFileResponse`
- **Error**: `HudError` with `kind: "api"`, an instance of `Data.CompleteDataFileV2DataFileIdCompletePostError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"errorResponse5"` [409] `ErrorResponse` · `"httpValidationError"` [422] `HttpValidationError` · `"errorResponse6"` [429] `ErrorResponse` · `"errorResponse7"` [503] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Data.CompleteDataFileV2DataFileIdCompletePostRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `fileId` | `path` | `file_id` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `DataFileResponse` | `dataFileResponseSchema` | `src/models/data-file-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### createDataFileV2DataPost

- **Signature**: `createDataFileV2DataPost(request: Data.CreateDataFileV2DataPostRequest, options?: RequestOptions): ApiPromise<DataFileUploadResponse, Data.CreateDataFileV2DataPostError>`
- **Wire**: `POST /v2/data`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `DataFileUploadResponse`
- **Error**: `HudError` with `kind: "api"`, an instance of `Data.CreateDataFileV2DataPostError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"errorResponse5"` [409] `ErrorResponse` · `"httpValidationError"` [422] `HttpValidationError` · `"errorResponse6"` [429] `ErrorResponse` · `"errorResponse7"` [503] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Data.CreateDataFileV2DataPostRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `DataFileCreateRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `DataFileCreateRequest` | `dataFileCreateRequestSchema` | `src/models/data-file-create-request.ts` |
| `DataFileUploadResponse` | `dataFileUploadResponseSchema` | `src/models/data-file-upload-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### deleteDataFileV2DataFileIdDelete

- **Signature**: `deleteDataFileV2DataFileIdDelete(request: Data.DeleteDataFileV2DataFileIdDeleteRequest, options?: RequestOptions): ApiPromise<undefined, Data.DeleteDataFileV2DataFileIdDeleteError>`
- **Wire**: `DELETE /v2/data/{file_id}`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `HudError` with `kind: "api"`, an instance of `Data.DeleteDataFileV2DataFileIdDeleteError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"errorResponse5"` [409] `ErrorResponse` · `"httpValidationError"` [422] `HttpValidationError` · `"errorResponse6"` [429] `ErrorResponse` · `"errorResponse7"` [503] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Data.DeleteDataFileV2DataFileIdDeleteRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `fileId` | `path` | `file_id` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### deleteDataFilesV2DataDeletePost

- **Signature**: `deleteDataFilesV2DataDeletePost(request: Data.DeleteDataFilesV2DataDeletePostRequest, options?: RequestOptions): ApiPromise<undefined, Data.DeleteDataFilesV2DataDeletePostError>`
- **Wire**: `POST /v2/data/delete`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `HudError` with `kind: "api"`, an instance of `Data.DeleteDataFilesV2DataDeletePostError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"errorResponse5"` [409] `ErrorResponse` · `"httpValidationError"` [422] `HttpValidationError` · `"errorResponse6"` [429] `ErrorResponse` · `"errorResponse7"` [503] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Data.DeleteDataFilesV2DataDeletePostRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `DataFileIdsRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `DataFileIdsRequest` | `dataFileIdsRequestSchema` | `src/models/data-file-ids-request.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### downloadDataFileV2DataFileIdDownloadGet

- **Signature**: `downloadDataFileV2DataFileIdDownloadGet(request: Data.DownloadDataFileV2DataFileIdDownloadGetRequest, options?: RequestOptions): ApiPromise<DataFileDownloadResponse, Data.DownloadDataFileV2DataFileIdDownloadGetError>`
- **Wire**: `GET /v2/data/{file_id}/download`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `DataFileDownloadResponse`
- **Error**: `HudError` with `kind: "api"`, an instance of `Data.DownloadDataFileV2DataFileIdDownloadGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"errorResponse5"` [409] `ErrorResponse` · `"httpValidationError"` [422] `HttpValidationError` · `"errorResponse6"` [429] `ErrorResponse` · `"errorResponse7"` [503] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Data.DownloadDataFileV2DataFileIdDownloadGetRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `fileId` | `path` | `file_id` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `DataFileDownloadResponse` | `dataFileDownloadResponseSchema` | `src/models/data-file-download-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### getDataFileStorageUsageV2DataUsageGet

- **Signature**: `getDataFileStorageUsageV2DataUsageGet(options?: RequestOptions): ApiPromise<DataFileStorageUsageResponse, Data.GetDataFileStorageUsageV2DataUsageGetError>`
- **Wire**: `GET /v2/data/usage`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `DataFileStorageUsageResponse`
- **Error**: `HudError` with `kind: "api"`, an instance of `Data.GetDataFileStorageUsageV2DataUsageGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"errorResponse5"` [409] `ErrorResponse` · `"errorResponse6"` [429] `ErrorResponse` · `"errorResponse7"` [503] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

| Type | Schema value | Source |
| --- | --- | --- |
| `DataFileStorageUsageResponse` | `dataFileStorageUsageResponseSchema` | `src/models/data-file-storage-usage-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### getDataFileV2DataFileIdGet

- **Signature**: `getDataFileV2DataFileIdGet(request: Data.GetDataFileV2DataFileIdGetRequest, options?: RequestOptions): ApiPromise<DataFileResponse, Data.GetDataFileV2DataFileIdGetError>`
- **Wire**: `GET /v2/data/{file_id}`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `DataFileResponse`
- **Error**: `HudError` with `kind: "api"`, an instance of `Data.GetDataFileV2DataFileIdGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"errorResponse5"` [409] `ErrorResponse` · `"httpValidationError"` [422] `HttpValidationError` · `"errorResponse6"` [429] `ErrorResponse` · `"errorResponse7"` [503] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Data.GetDataFileV2DataFileIdGetRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `fileId` | `path` | `file_id` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `DataFileResponse` | `dataFileResponseSchema` | `src/models/data-file-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### listDataFileGroupsV2DataGroupsGet

- **Signature**: `listDataFileGroupsV2DataGroupsGet(options?: RequestOptions): ApiPromise<DataFileGroupListResponse, Data.ListDataFileGroupsV2DataGroupsGetError>`
- **Wire**: `GET /v2/data/groups`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `DataFileGroupListResponse`
- **Error**: `HudError` with `kind: "api"`, an instance of `Data.ListDataFileGroupsV2DataGroupsGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"errorResponse5"` [409] `ErrorResponse` · `"errorResponse6"` [429] `ErrorResponse` · `"errorResponse7"` [503] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

| Type | Schema value | Source |
| --- | --- | --- |
| `DataFileGroupListResponse` | `dataFileGroupListResponseSchema` | `src/models/data-file-group-list-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### listDataFilesV2DataGet

- **Signature**: `listDataFilesV2DataGet(request?: Data.ListDataFilesV2DataGetRequest, options?: RequestOptions): ApiPromise<DataFileListResponse, Data.ListDataFilesV2DataGetError>`
- **Wire**: `GET /v2/data`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `DataFileListResponse`
- **Error**: `HudError` with `kind: "api"`, an instance of `Data.ListDataFilesV2DataGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"errorResponse5"` [409] `ErrorResponse` · `"httpValidationError"` [422] `HttpValidationError` · `"errorResponse6"` [429] `ErrorResponse` · `"errorResponse7"` [503] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Data.ListDataFilesV2DataGetRequest` (4):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `scope` | `query` | — | `Scope3` | no | `Scope3.All` |
| `membershipId` | `query` | `membership_id` | `MembershipId` | no | — |
| `limit` | `query` | — | `number` | no | `50` |
| `offset` | `query` | — | `number` | no | `0` |

| Type | Schema value | Source |
| --- | --- | --- |
| `Scope3` | `scope3Schema` | `src/models/scope3.ts` |
| `MembershipId` | `membershipIdSchema` | `src/models/unions/membership-id.ts` |
| `DataFileListResponse` | `dataFileListResponseSchema` | `src/models/data-file-list-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### updateDataFileV2DataFileIdPatch

- **Signature**: `updateDataFileV2DataFileIdPatch(request: Data.UpdateDataFileV2DataFileIdPatchRequest, options?: RequestOptions): ApiPromise<DataFileResponse, Data.UpdateDataFileV2DataFileIdPatchError>`
- **Wire**: `PATCH /v2/data/{file_id}`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `DataFileResponse`
- **Error**: `HudError` with `kind: "api"`, an instance of `Data.UpdateDataFileV2DataFileIdPatchError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"errorResponse5"` [409] `ErrorResponse` · `"httpValidationError"` [422] `HttpValidationError` · `"errorResponse6"` [429] `ErrorResponse` · `"errorResponse7"` [503] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Data.UpdateDataFileV2DataFileIdPatchRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `fileId` | `path` | `file_id` | `string` | yes |
| `body` | `body` | — | `DataFileUpdateRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `DataFileUpdateRequest` | `dataFileUpdateRequestSchema` | `src/models/data-file-update-request.ts` |
| `DataFileResponse` | `dataFileResponseSchema` | `src/models/data-file-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

