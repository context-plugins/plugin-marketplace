<!-- Generated file — do not edit; regenerated with the SDK. -->

# Folders — operations

Accessor: `client.folders` · Source: `src/resources/folders.ts` · 5 operations · Request and error types: namespace `Folders`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `todoist-sdk`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createFolderApiV1FoldersPost

- **Signature**: `createFolderApiV1FoldersPost(request: Folders.CreateFolderApiV1FoldersPostRequest, options?: RequestOptions): ApiPromise<FolderSyncView, Folders.CreateFolderApiV1FoldersPostError>`
- **Wire**: `POST /api/v1/folders`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `FolderSyncView`
- **Error**: `TodoistApiError` with `kind: "api"`, an instance of `Folders.CreateFolderApiV1FoldersPostError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"todoistError"` [400] `TodoistError` · `"todoistError2"` [401] `TodoistError` · `"todoistError3"` [403] `TodoistError` · `"todoistError4"` [404] `TodoistError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Folders.CreateFolderApiV1FoldersPostRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `Body35` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Body35` | `body35Schema` | `src/models/body35.ts` |
| `FolderSyncView` | `folderSyncViewSchema` | `src/models/folder-sync-view.ts` |
| `TodoistError` | `todoistErrorSchema` | `src/models/todoist-error.ts` |

### deleteFolderApiV1FoldersFolderIdDelete

- **Signature**: `deleteFolderApiV1FoldersFolderIdDelete(request: Folders.DeleteFolderApiV1FoldersFolderIdDeleteRequest, options?: RequestOptions): ApiPromise<undefined, Folders.DeleteFolderApiV1FoldersFolderIdDeleteError>`
- **Wire**: `DELETE /api/v1/folders/{folder_id}`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `TodoistApiError` with `kind: "api"`, an instance of `Folders.DeleteFolderApiV1FoldersFolderIdDeleteError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"todoistError"` [400] `TodoistError` · `"todoistError2"` [401] `TodoistError` · `"todoistError3"` [403] `TodoistError` · `"todoistError4"` [404] `TodoistError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Folders.DeleteFolderApiV1FoldersFolderIdDeleteRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `folderId` | `path` | `folder_id` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `TodoistError` | `todoistErrorSchema` | `src/models/todoist-error.ts` |

### getFolderApiV1FoldersFolderIdGet

- **Signature**: `getFolderApiV1FoldersFolderIdGet(request: Folders.GetFolderApiV1FoldersFolderIdGetRequest, options?: RequestOptions): ApiPromise<FolderSyncView, Folders.GetFolderApiV1FoldersFolderIdGetError>`
- **Wire**: `GET /api/v1/folders/{folder_id}`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `FolderSyncView`
- **Error**: `TodoistApiError` with `kind: "api"`, an instance of `Folders.GetFolderApiV1FoldersFolderIdGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"todoistError"` [400] `TodoistError` · `"todoistError2"` [401] `TodoistError` · `"todoistError3"` [403] `TodoistError` · `"todoistError4"` [404] `TodoistError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Folders.GetFolderApiV1FoldersFolderIdGetRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `folderId` | `path` | `folder_id` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `FolderSyncView` | `folderSyncViewSchema` | `src/models/folder-sync-view.ts` |
| `TodoistError` | `todoistErrorSchema` | `src/models/todoist-error.ts` |

### getFoldersApiV1FoldersGet

- **Signature**: `getFoldersApiV1FoldersGet(request: Folders.GetFoldersApiV1FoldersGetRequest, options?: RequestOptions): ApiPromise<PaginatedList3, Folders.GetFoldersApiV1FoldersGetError>`
- **Wire**: `GET /api/v1/folders`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PaginatedList3`
- **Error**: `TodoistApiError` with `kind: "api"`, an instance of `Folders.GetFoldersApiV1FoldersGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"todoistError"` [400] `TodoistError` · `"todoistError2"` [401] `TodoistError` · `"todoistError3"` [403] `TodoistError` · `"todoistError4"` [404] `TodoistError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Folders.GetFoldersApiV1FoldersGetRequest` (3):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `workspaceId` | `query` | `workspace_id` | `number` | yes | — |
| `cursor` | `query` | — | `string` | no | — |
| `limit` | `query` | — | `number` | no | `50` |

| Type | Schema value | Source |
| --- | --- | --- |
| `PaginatedList3` | `paginatedList3Schema` | `src/models/paginated-list3.ts` |
| `TodoistError` | `todoistErrorSchema` | `src/models/todoist-error.ts` |

### updateFolderApiV1FoldersFolderIdPost

- **Signature**: `updateFolderApiV1FoldersFolderIdPost(request: Folders.UpdateFolderApiV1FoldersFolderIdPostRequest, options?: RequestOptions): ApiPromise<FolderSyncView, Folders.UpdateFolderApiV1FoldersFolderIdPostError>`
- **Wire**: `POST /api/v1/folders/{folder_id}`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `FolderSyncView`
- **Error**: `TodoistApiError` with `kind: "api"`, an instance of `Folders.UpdateFolderApiV1FoldersFolderIdPostError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"todoistError"` [400] `TodoistError` · `"todoistError2"` [401] `TodoistError` · `"todoistError3"` [403] `TodoistError` · `"todoistError4"` [404] `TodoistError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Folders.UpdateFolderApiV1FoldersFolderIdPostRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `folderId` | `path` | `folder_id` | `number` | yes |
| `body` | `body` | — | `Body2` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Body2` | `body2Schema` | `src/models/body2.ts` |
| `FolderSyncView` | `folderSyncViewSchema` | `src/models/folder-sync-view.ts` |
| `TodoistError` | `todoistErrorSchema` | `src/models/todoist-error.ts` |

