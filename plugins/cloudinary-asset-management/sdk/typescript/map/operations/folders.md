<!-- Generated file — do not edit; regenerated with the SDK. -->

# Folders — operations

Accessor: `client.folders` · Source: `src/resources/folders.ts` · 13 operations · Request and error types: namespace `Folders`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `cloudinary-asset-management-api`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### assignFolderRoles

- **Signature**: `assignFolderRoles(request: Folders.AssignFolderRolesRequestParams, options?: RequestOptions): ApiPromise<SuccessResponse, Folders.AssignFolderRolesError>`
- **Wire**: `POST /v1_1/{cloud_name}/folder_operations/invite/{folder_id}`
- **Auth**: any of `basicAuth`, `oauth2` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `SuccessResponse`
- **Error**: `CloudinaryAssetManagementApiError` with `kind: "api"`, an instance of `Folders.AssignFolderRolesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiErrorModel"` [400] `ApiErrorModel` · `"apiErrorModel2"` [401] `ApiErrorModel` · `"apiErrorModel3"` [403] `ApiErrorModel` · `"apiErrorModel4"` [404] `ApiErrorModel` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Folders.AssignFolderRolesRequestParams` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `cloudName` | `path` | `cloud_name` | `string` | yes |
| `folderId` | `path` | `folder_id` | `string` | yes |
| `body` | `body` | — | `AssignFolderRolesRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `AssignFolderRolesRequest` | `assignFolderRolesRequestSchema` | `src/models/assign-folder-roles-request.ts` |
| `SuccessResponse` | `successResponseSchema` | `src/models/success-response.ts` |
| `ApiErrorModel` | `apiErrorModelSchema` | `src/models/api-error-model.ts` |

### createFolder

- **Signature**: `createFolder(request: Folders.CreateFolderRequest, options?: RequestOptions): ApiPromise<CreateFolderResponse, Folders.CreateFolderError>`
- **Wire**: `POST /v1_1/{cloud_name}/folders/{folder}`
- **Auth**: any of `basicAuth`, `oauth2` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `CreateFolderResponse`
- **Error**: `CloudinaryAssetManagementApiError` with `kind: "api"`, an instance of `Folders.CreateFolderError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiErrorModel"` [400] `ApiErrorModel` · `"apiErrorModel2"` [401] `ApiErrorModel` · `"apiErrorModel3"` [403] `ApiErrorModel` · `"apiErrorModel4"` [404] `ApiErrorModel` · `"apiErrorModel5"` [409] `ApiErrorModel` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Folders.CreateFolderRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `cloudName` | `path` | `cloud_name` | `string` | yes |
| `folder` | `path` | — | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CreateFolderResponse` | `createFolderResponseSchema` | `src/models/create-folder-response.ts` |
| `ApiErrorModel` | `apiErrorModelSchema` | `src/models/api-error-model.ts` |

### destroyFolder

- **Signature**: `destroyFolder(request: Folders.DestroyFolderRequest, options?: RequestOptions): ApiPromise<DeleteFolderResponse, Folders.DestroyFolderError>`
- **Wire**: `DELETE /v1_1/{cloud_name}/folders/{folder}`
- **Auth**: any of `basicAuth`, `oauth2` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `DeleteFolderResponse`
- **Error**: `CloudinaryAssetManagementApiError` with `kind: "api"`, an instance of `Folders.DestroyFolderError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiErrorModel"` [400] `ApiErrorModel` · `"apiErrorModel2"` [401] `ApiErrorModel` · `"apiErrorModel3"` [404] `ApiErrorModel` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Folders.DestroyFolderRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `cloudName` | `path` | `cloud_name` | `string` | yes |
| `folder` | `path` | — | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `DeleteFolderResponse` | `deleteFolderResponseSchema` | `src/models/delete-folder-response.ts` |
| `ApiErrorModel` | `apiErrorModelSchema` | `src/models/api-error-model.ts` |

### getFolderById

- **Signature**: `getFolderById(request: Folders.GetFolderByIdRequest, options?: RequestOptions): ApiPromise<FolderDetailResponse, Folders.GetFolderByIdError>`
- **Wire**: `PUT /v1_1/{cloud_name}/folders/by_id`
- **Auth**: any of `basicAuth`, `oauth2` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `FolderDetailResponse`
- **Error**: `CloudinaryAssetManagementApiError` with `kind: "api"`, an instance of `Folders.GetFolderByIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiErrorModel"` [400] `ApiErrorModel` · `"apiErrorModel2"` [401] `ApiErrorModel` · `"apiErrorModel3"` [404] `ApiErrorModel` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Folders.GetFolderByIdRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `cloudName` | `path` | `cloud_name` | `string` | yes |
| `body` | `body` | — | `FolderByIdRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `FolderByIdRequest` | `folderByIdRequestSchema` | `src/models/folder-by-id-request.ts` |
| `FolderDetailResponse` | `folderDetailResponseSchema` | `src/models/folder-detail-response.ts` |
| `ApiErrorModel` | `apiErrorModelSchema` | `src/models/api-error-model.ts` |

### getFolderByPath

- **Signature**: `getFolderByPath(request: Folders.GetFolderByPathRequest, options?: RequestOptions): ApiPromise<FolderDetailResponse, Folders.GetFolderByPathError>`
- **Wire**: `PUT /v1_1/{cloud_name}/folders/by_path`
- **Auth**: any of `basicAuth`, `oauth2` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `FolderDetailResponse`
- **Error**: `CloudinaryAssetManagementApiError` with `kind: "api"`, an instance of `Folders.GetFolderByPathError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiErrorModel"` [400] `ApiErrorModel` · `"apiErrorModel2"` [401] `ApiErrorModel` · `"apiErrorModel3"` [404] `ApiErrorModel` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Folders.GetFolderByPathRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `cloudName` | `path` | `cloud_name` | `string` | yes |
| `body` | `body` | — | `FolderByPathRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `FolderByPathRequest` | `folderByPathRequestSchema` | `src/models/folder-by-path-request.ts` |
| `FolderDetailResponse` | `folderDetailResponseSchema` | `src/models/folder-detail-response.ts` |
| `ApiErrorModel` | `apiErrorModelSchema` | `src/models/api-error-model.ts` |

### getFolderDescendants

- **Signature**: `getFolderDescendants(request: Folders.GetFolderDescendantsRequest, options?: RequestOptions): ApiPromise<FolderDescendantsResponse, Folders.GetFolderDescendantsError>`
- **Wire**: `PUT /v1_1/{cloud_name}/folders/descendants`
- **Auth**: any of `basicAuth`, `oauth2` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `FolderDescendantsResponse`
- **Error**: `CloudinaryAssetManagementApiError` with `kind: "api"`, an instance of `Folders.GetFolderDescendantsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiErrorModel"` [400] `ApiErrorModel` · `"apiErrorModel2"` [401] `ApiErrorModel` · `"apiErrorModel3"` [404] `ApiErrorModel` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Folders.GetFolderDescendantsRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `cloudName` | `path` | `cloud_name` | `string` | yes |
| `body` | `body` | — | `FolderDescendantsRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `FolderDescendantsRequest` | `folderDescendantsRequestSchema` | `src/models/folder-descendants-request.ts` |
| `FolderDescendantsResponse` | `folderDescendantsResponseSchema` | `src/models/folder-descendants-response.ts` |
| `ApiErrorModel` | `apiErrorModelSchema` | `src/models/api-error-model.ts` |

### getFolderRoles

- **Signature**: `getFolderRoles(request: Folders.GetFolderRolesRequest, options?: RequestOptions): ApiPromise<FolderRolesResponse, Folders.GetFolderRolesError>`
- **Wire**: `GET /v1_1/{cloud_name}/folder_operations/invite/{folder_id}`
- **Auth**: any of `basicAuth`, `oauth2` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `FolderRolesResponse`
- **Error**: `CloudinaryAssetManagementApiError` with `kind: "api"`, an instance of `Folders.GetFolderRolesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiErrorModel"` [400] `ApiErrorModel` · `"apiErrorModel2"` [401] `ApiErrorModel` · `"apiErrorModel3"` [403] `ApiErrorModel` · `"apiErrorModel4"` [404] `ApiErrorModel` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Folders.GetFolderRolesRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `cloudName` | `path` | `cloud_name` | `string` | yes |
| `folderId` | `path` | `folder_id` | `string` | yes |
| `permittedRoles` | `query` | `permitted_roles` | `boolean` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `FolderRolesResponse` | `folderRolesResponseSchema` | `src/models/folder-roles-response.ts` |
| `ApiErrorModel` | `apiErrorModelSchema` | `src/models/api-error-model.ts` |

### listRootFolders

- **Signature**: `listRootFolders(request: Folders.ListRootFoldersRequest, options?: RequestOptions): ApiPromise<FoldersListResponse, Folders.ListRootFoldersError>`
- **Wire**: `GET /v1_1/{cloud_name}/folders`
- **Auth**: any of `basicAuth`, `oauth2` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `FoldersListResponse`
- **Error**: `CloudinaryAssetManagementApiError` with `kind: "api"`, an instance of `Folders.ListRootFoldersError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiErrorModel"` [401] `ApiErrorModel` · `"apiErrorModel2"` [403] `ApiErrorModel` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Folders.ListRootFoldersRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `cloudName` | `path` | `cloud_name` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `FoldersListResponse` | `foldersListResponseSchema` | `src/models/folders-list-response.ts` |
| `ApiErrorModel` | `apiErrorModelSchema` | `src/models/api-error-model.ts` |

### renameFolderOperation

- **Signature**: `renameFolderOperation(request: Folders.RenameFolderOperationRequest, options?: RequestOptions): ApiPromise<FolderRenameResponse, Folders.RenameFolderOperationError>`
- **Wire**: `PUT /v1_1/{cloud_name}/folder_operations/rename`
- **Auth**: any of `basicAuth`, `oauth2` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `FolderRenameResponse`
- **Error**: `CloudinaryAssetManagementApiError` with `kind: "api"`, an instance of `Folders.RenameFolderOperationError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiErrorModel"` [400] `ApiErrorModel` · `"apiErrorModel2"` [401] `ApiErrorModel` · `"apiErrorModel3"` [404] `ApiErrorModel` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Folders.RenameFolderOperationRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `cloudName` | `path` | `cloud_name` | `string` | yes |
| `body` | `body` | — | `FolderRenameRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `FolderRenameRequest` | `folderRenameRequestSchema` | `src/models/folder-rename-request.ts` |
| `FolderRenameResponse` | `folderRenameResponseSchema` | `src/models/folder-rename-response.ts` |
| `ApiErrorModel` | `apiErrorModelSchema` | `src/models/api-error-model.ts` |

### searchFolders

- **Signature**: `searchFolders(request: Folders.SearchFoldersRequest, options?: RequestOptions): ApiPromise<FoldersSearchResponse, Folders.SearchFoldersError>`
- **Wire**: `GET /v1_1/{cloud_name}/folders/search`
- **Auth**: any of `basicAuth`, `oauth2` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `FoldersSearchResponse`
- **Error**: `CloudinaryAssetManagementApiError` with `kind: "api"`, an instance of `Folders.SearchFoldersError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiErrorModel"` [400] `ApiErrorModel` · `"apiErrorModel2"` [401] `ApiErrorModel` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Folders.SearchFoldersRequest` (5):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `cloudName` | `path` | `cloud_name` | `string` | yes | — |
| `expression` | `query` | — | `string` | no | — |
| `sortBy` | `query` | `sort_by` | `DirectionEnum[]` | no | — |
| `maxResults` | `query` | `max_results` | `number` | no | `50` |
| `nextCursor` | `query` | `next_cursor` | `string` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `DirectionEnum` | `directionEnumSchema` | `src/models/direction-enum.ts` |
| `FoldersSearchResponse` | `foldersSearchResponseSchema` | `src/models/folders-search-response.ts` |
| `ApiErrorModel` | `apiErrorModelSchema` | `src/models/api-error-model.ts` |

### searchFoldersPost

- **Signature**: `searchFoldersPost(request: Folders.SearchFoldersPostRequest, options?: RequestOptions): ApiPromise<FoldersSearchResponse, Folders.SearchFoldersPostError>`
- **Wire**: `POST /v1_1/{cloud_name}/folders/search`
- **Auth**: any of `basicAuth`, `oauth2` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `FoldersSearchResponse`
- **Error**: `CloudinaryAssetManagementApiError` with `kind: "api"`, an instance of `Folders.SearchFoldersPostError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiErrorModel"` [400] `ApiErrorModel` · `"apiErrorModel2"` [401] `ApiErrorModel` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Folders.SearchFoldersPostRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `cloudName` | `path` | `cloud_name` | `string` | yes |
| `body` | `body` | — | `FolderSearchRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `FolderSearchRequest` | `folderSearchRequestSchema` | `src/models/folder-search-request.ts` |
| `FoldersSearchResponse` | `foldersSearchResponseSchema` | `src/models/folders-search-response.ts` |
| `ApiErrorModel` | `apiErrorModelSchema` | `src/models/api-error-model.ts` |

### showFolder

- **Signature**: `showFolder(request: Folders.ShowFolderRequest, options?: RequestOptions): ApiPromise<FoldersListResponse, Folders.ShowFolderError>`
- **Wire**: `GET /v1_1/{cloud_name}/folders/{folder}`
- **Auth**: any of `basicAuth`, `oauth2` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `FoldersListResponse`
- **Error**: `CloudinaryAssetManagementApiError` with `kind: "api"`, an instance of `Folders.ShowFolderError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiErrorModel"` [400] `ApiErrorModel` · `"apiErrorModel2"` [401] `ApiErrorModel` · `"apiErrorModel3"` [403] `ApiErrorModel` · `"apiErrorModel4"` [404] `ApiErrorModel` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Folders.ShowFolderRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `cloudName` | `path` | `cloud_name` | `string` | yes |
| `folder` | `path` | — | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `FoldersListResponse` | `foldersListResponseSchema` | `src/models/folders-list-response.ts` |
| `ApiErrorModel` | `apiErrorModelSchema` | `src/models/api-error-model.ts` |

### updateFolder

- **Signature**: `updateFolder(request: Folders.UpdateFolderRequest, options?: RequestOptions): ApiPromise<MoveFolderResponse, Folders.UpdateFolderError>`
- **Wire**: `PUT /v1_1/{cloud_name}/folders/{folder}`
- **Auth**: any of `basicAuth`, `oauth2` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `MoveFolderResponse`
- **Error**: `CloudinaryAssetManagementApiError` with `kind: "api"`, an instance of `Folders.UpdateFolderError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiErrorModel"` [400] `ApiErrorModel` · `"apiErrorModel2"` [401] `ApiErrorModel` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Folders.UpdateFolderRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `cloudName` | `path` | `cloud_name` | `string` | yes |
| `folder` | `path` | — | `string` | yes |
| `body` | `body` | — | `MoveFolderRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `MoveFolderRequest` | `moveFolderRequestSchema` | `src/models/move-folder-request.ts` |
| `MoveFolderResponse` | `moveFolderResponseSchema` | `src/models/move-folder-response.ts` |
| `ApiErrorModel` | `apiErrorModelSchema` | `src/models/api-error-model.ts` |

