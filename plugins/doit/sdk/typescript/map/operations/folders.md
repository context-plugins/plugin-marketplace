<!-- Generated file — do not edit; regenerated with the SDK. -->

# Folders — operations

Accessor: `client.folders` · Source: `src/resources/folders.ts` · 5 operations · Request and error types: namespace `Folders`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `doi-t`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createFolder

- **Signature**: `createFolder(request: Folders.CreateFolderRequestParams, options?: RequestOptions): ApiPromise<Folder, Folders.CreateFolderError>`
- **Wire**: `POST /analytics/v1/folders`
- **Auth**: any of `apiKey`, (all of `tenantId`, `apiKey`) — the first branch fully configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Folder`
- **Error**: `DoiTError` with `kind: "api"`, an instance of `Folders.CreateFolderError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [403] `Error` · `"error4"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Folders.CreateFolderRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `CreateFolderRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CreateFolderRequest` | `createFolderRequestSchema` | `src/models/create-folder-request.ts` |
| `Folder` | `folderSchema` | `src/models/folder.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### deleteFolder

- **Signature**: `deleteFolder(request: Folders.DeleteFolderRequest, options?: RequestOptions): ApiPromise<undefined, Folders.DeleteFolderError>`
- **Wire**: `DELETE /analytics/v1/folders/{id}`
- **Auth**: any of `apiKey`, (all of `tenantId`, `apiKey`) — the first branch fully configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `DoiTError` with `kind: "api"`, an instance of `Folders.DeleteFolderError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [403] `Error` · `"error4"` [404] `Error` · `"error5"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Folders.DeleteFolderRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Error` | `errorSchema` | `src/models/error.ts` |

### getFolder

- **Signature**: `getFolder(request: Folders.GetFolderRequest, options?: RequestOptions): ApiPromise<Folder, Folders.GetFolderError>`
- **Wire**: `GET /analytics/v1/folders/{id}`
- **Auth**: any of `apiKey`, (all of `tenantId`, `apiKey`) — the first branch fully configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Folder`
- **Error**: `DoiTError` with `kind: "api"`, an instance of `Folders.GetFolderError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [401] `Error` · `"error2"` [403] `Error` · `"error3"` [404] `Error` · `"error4"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Folders.GetFolderRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Folder` | `folderSchema` | `src/models/folder.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### listFolders

- **Signature**: `listFolders(request?: Folders.ListFoldersRequest, options?: RequestOptions): ApiPromise<AnalyticsV1FoldersResponse, Folders.ListFoldersError>`
- **Wire**: `GET /analytics/v1/folders`
- **Auth**: any of `apiKey`, (all of `tenantId`, `apiKey`) — the first branch fully configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `AnalyticsV1FoldersResponse`
- **Error**: `DoiTError` with `kind: "api"`, an instance of `Folders.ListFoldersError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [403] `Error` · `"error4"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Folders.ListFoldersRequest` (2):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `maxResults` | `query` | `number` | no | `50` |
| `pageToken` | `query` | `string` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `AnalyticsV1FoldersResponse` | `analyticsV1FoldersResponseSchema` | `src/models/analytics-v1-folders-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### updateFolder

- **Signature**: `updateFolder(request: Folders.UpdateFolderRequestParams, options?: RequestOptions): ApiPromise<Folder, Folders.UpdateFolderError>`
- **Wire**: `PATCH /analytics/v1/folders/{id}`
- **Auth**: any of `apiKey`, (all of `tenantId`, `apiKey`) — the first branch fully configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Folder`
- **Error**: `DoiTError` with `kind: "api"`, an instance of `Folders.UpdateFolderError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [403] `Error` · `"error4"` [404] `Error` · `"error5"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Folders.UpdateFolderRequestParams` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |
| `body` | `body` | `UpdateFolderRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `UpdateFolderRequest` | `updateFolderRequestSchema` | `src/models/update-folder-request.ts` |
| `Folder` | `folderSchema` | `src/models/folder.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

