<!-- Generated file — do not edit; regenerated with the SDK. -->

# Storage — operations

Accessor: `client.storage` · Source: `src/resources/storage.ts` · 5 operations · Request and error types: namespace `Storage`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `fillo`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getFormStorage

- **Signature**: `getFormStorage(request: Storage.GetFormStorageRequest, options?: RequestOptions): ApiPromise<FormStorage, Storage.GetFormStorageError>`
- **Wire**: `GET /api/v1/manage/forms/{form}/storage`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `FormStorage`
- **Error**: `FilloError` with `kind: "api"`, an instance of `Storage.GetFormStorageError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [403] `Error` · `"error4"` [404] `Error` · `"error5"` [429] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Storage.GetFormStorageRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `form` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `FormStorage` | `formStorageSchema` | `src/models/form-storage.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### listFormStorageFolders

- **Signature**: `listFormStorageFolders(request: Storage.ListFormStorageFoldersRequest, options?: RequestOptions): ApiPromise<DriveFolderListing, Storage.ListFormStorageFoldersError>`
- **Wire**: `GET /api/v1/manage/forms/{form}/storage/folder`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `DriveFolderListing`
- **Error**: `FilloError` with `kind: "api"`, an instance of `Storage.ListFormStorageFoldersError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [403] `Error` · `"error4"` [404] `Error` · `"error5"` [409] `Error` · `"error6"` [429] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Storage.ListFormStorageFoldersRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `form` | `path` | `string` | yes |
| `q` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `DriveFolderListing` | `driveFolderListingSchema` | `src/models/drive-folder-listing.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### resetFormStorageFolder

- **Signature**: `resetFormStorageFolder(request: Storage.ResetFormStorageFolderRequest, options?: RequestOptions): ApiPromise<ApiV1ManageFormsStorageFolderResponse, Storage.ResetFormStorageFolderError>`
- **Wire**: `DELETE /api/v1/manage/forms/{form}/storage/folder`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ApiV1ManageFormsStorageFolderResponse`
- **Error**: `FilloError` with `kind: "api"`, an instance of `Storage.ResetFormStorageFolderError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [403] `Error` · `"error4"` [404] `Error` · `"error5"` [409] `Error` · `"error6"` [429] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Storage.ResetFormStorageFolderRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `form` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1ManageFormsStorageFolderResponse` | `apiV1ManageFormsStorageFolderResponseSchema` | `src/models/api-v1-manage-forms-storage-folder-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### setFormStorage

- **Signature**: `setFormStorage(request: Storage.SetFormStorageRequest, options?: RequestOptions): ApiPromise<FormStorage, Storage.SetFormStorageError>`
- **Wire**: `PUT /api/v1/manage/forms/{form}/storage`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `FormStorage`
- **Error**: `FilloError` with `kind: "api"`, an instance of `Storage.SetFormStorageError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [403] `Error` · `"error4"` [404] `Error` · `"error5"` [409] `Error` · `"error6"` [413] `Error` · `"error7"` [429] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Storage.SetFormStorageRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `form` | `path` | `string` | yes |
| `body` | `body` | `ApiV1ManageFormsStorageRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1ManageFormsStorageRequest` | `apiV1ManageFormsStorageRequestSchema` | `src/models/api-v1-manage-forms-storage-request.ts` |
| `FormStorage` | `formStorageSchema` | `src/models/form-storage.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### setFormStorageFolder

- **Signature**: `setFormStorageFolder(request: Storage.SetFormStorageFolderRequest, options?: RequestOptions): ApiPromise<ApiV1ManageFormsStorageFolderResponse, Storage.SetFormStorageFolderError>`
- **Wire**: `PUT /api/v1/manage/forms/{form}/storage/folder`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ApiV1ManageFormsStorageFolderResponse`
- **Error**: `FilloError` with `kind: "api"`, an instance of `Storage.SetFormStorageFolderError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [403] `Error` · `"error4"` [404] `Error` · `"error5"` [409] `Error` · `"error6"` [413] `Error` · `"error7"` [429] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Storage.SetFormStorageFolderRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `form` | `path` | `string` | yes |
| `body` | `body` | `ApiV1ManageFormsStorageFolderRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1ManageFormsStorageFolderRequest` | `apiV1ManageFormsStorageFolderRequestSchema` | `src/models/api-v1-manage-forms-storage-folder-request.ts` |
| `ApiV1ManageFormsStorageFolderResponse` | `apiV1ManageFormsStorageFolderResponseSchema` | `src/models/api-v1-manage-forms-storage-folder-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

