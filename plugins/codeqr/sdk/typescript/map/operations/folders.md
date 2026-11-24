<!-- Generated file — do not edit; regenerated with the SDK. -->

# Folders — operations

Accessor: `client.folders` · Source: `src/resources/folders.ts` · 4 operations · Request and error types: namespace `Folders`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `code-qr`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createFolder

- **Signature**: `createFolder(request?: Folders.CreateFolderRequest, options?: RequestOptions): ApiPromise<FolderSchema, Folders.CreateFolderError>`
- **Wire**: `POST /folders`
- **Auth**: `token`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `FolderSchema`
- **Error**: `CodeQrError` with `kind: "api"`, an instance of `Folders.CreateFolderError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"m4001"` [400] `M4001` · `"m40012"` [401] `M4001` · `"m40013"` [403] `M4001` · `"m40014"` [404] `M4001` · `"m40015"` [409] `M4001` · `"m40016"` [410] `M4001` · `"m40017"` [422] `M4001` · `"m40018"` [429] `M4001` · `"m40019"` [500] `M4001` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Folders.CreateFolderRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `FoldersRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `FoldersRequest` | `foldersRequestSchema` | `src/models/folders-request.ts` |
| `FolderSchema` | `folderSchemaSchema` | `src/models/folder-schema.ts` |
| `M4001` | `m4001Schema` | `src/models/m4001.ts` |

### deleteFolder

- **Signature**: `deleteFolder(request: Folders.DeleteFolderRequest, options?: RequestOptions): ApiPromise<FoldersResponse, Folders.DeleteFolderError>`
- **Wire**: `DELETE /folders/{id}`
- **Auth**: `token`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `FoldersResponse`
- **Error**: `CodeQrError` with `kind: "api"`, an instance of `Folders.DeleteFolderError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"m4001"` [400] `M4001` · `"m40012"` [401] `M4001` · `"m40013"` [403] `M4001` · `"m40014"` [404] `M4001` · `"m40015"` [409] `M4001` · `"m40016"` [410] `M4001` · `"m40017"` [422] `M4001` · `"m40018"` [429] `M4001` · `"m40019"` [500] `M4001` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Folders.DeleteFolderRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `FoldersResponse` | `foldersResponseSchema` | `src/models/folders-response.ts` |
| `M4001` | `m4001Schema` | `src/models/m4001.ts` |

### listFolders

- **Signature**: `listFolders(request?: Folders.ListFoldersRequest, options?: RequestOptions): ApiPromise<FolderSchema[], Folders.ListFoldersError>`
- **Wire**: `GET /folders`
- **Auth**: `token`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `FolderSchema[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `CodeQrError` with `kind: "api"`, an instance of `Folders.ListFoldersError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"m4001"` [400] `M4001` · `"m40012"` [401] `M4001` · `"m40013"` [403] `M4001` · `"m40014"` [404] `M4001` · `"m40015"` [409] `M4001` · `"m40016"` [410] `M4001` · `"m40017"` [422] `M4001` · `"m40018"` [429] `M4001` · `"m40019"` [500] `M4001` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Folders.ListFoldersRequest` (3):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `search` | `query` | `string` | no | — |
| `page` | `query` | `number` | no | `1` |
| `pageSize` | `query` | `number` | no | `50` |

| Type | Schema value | Source |
| --- | --- | --- |
| `FolderSchema` | `folderSchemaSchema` | `src/models/folder-schema.ts` |
| `M4001` | `m4001Schema` | `src/models/m4001.ts` |

### updateFolder

- **Signature**: `updateFolder(request: Folders.UpdateFolderRequest, options?: RequestOptions): ApiPromise<FolderSchema, Folders.UpdateFolderError>`
- **Wire**: `PATCH /folders/{id}`
- **Auth**: `token`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `FolderSchema`
- **Error**: `CodeQrError` with `kind: "api"`, an instance of `Folders.UpdateFolderError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"m4001"` [400] `M4001` · `"m40012"` [401] `M4001` · `"m40013"` [403] `M4001` · `"m40014"` [404] `M4001` · `"m40015"` [409] `M4001` · `"m40016"` [410] `M4001` · `"m40017"` [422] `M4001` · `"m40018"` [429] `M4001` · `"m40019"` [500] `M4001` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Folders.UpdateFolderRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |
| `body` | `body` | `FoldersRequest1` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `FoldersRequest1` | `foldersRequest1Schema` | `src/models/folders-request1.ts` |
| `FolderSchema` | `folderSchemaSchema` | `src/models/folder-schema.ts` |
| `M4001` | `m4001Schema` | `src/models/m4001.ts` |

