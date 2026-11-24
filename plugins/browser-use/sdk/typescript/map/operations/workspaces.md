<!-- Generated file — do not edit; regenerated with the SDK. -->

# Workspaces — operations

Accessor: `client.workspaces` · Source: `src/resources/workspaces.ts` · 8 operations · Request and error types: namespace `Workspaces`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `browser-use`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createWorkspaceWorkspacesPost

- **Signature**: `createWorkspaceWorkspacesPost(request: Workspaces.CreateWorkspaceWorkspacesPostRequest, options?: RequestOptions): ApiPromise<WorkspaceInfo, Workspaces.CreateWorkspaceWorkspacesPostError>`
- **Wire**: `POST /workspaces`
- **Auth**: `apiKeyHeader`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `WorkspaceInfo`
- **Error**: `BrowserUseError` with `kind: "api"`, an instance of `Workspaces.CreateWorkspaceWorkspacesPostError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"httpValidationError"` [422] `HttpValidationError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Workspaces.CreateWorkspaceWorkspacesPostRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `WorkspaceCreateRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `WorkspaceCreateRequest` | `workspaceCreateRequestSchema` | `src/models/workspace-create-request.ts` |
| `WorkspaceInfo` | `workspaceInfoSchema` | `src/models/workspace-info.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### deleteWorkspaceFileWorkspacesWorkspaceIdFilesDelete

- **Signature**: `deleteWorkspaceFileWorkspacesWorkspaceIdFilesDelete(request: Workspaces.DeleteWorkspaceFileWorkspacesWorkspaceIdFilesDeleteRequest, options?: RequestOptions): ApiPromise<undefined, Workspaces.DeleteWorkspaceFileWorkspacesWorkspaceIdFilesDeleteError>`
- **Wire**: `DELETE /workspaces/{workspace_id}/files`
- **Auth**: `apiKeyHeader`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `BrowserUseError` with `kind: "api"`, an instance of `Workspaces.DeleteWorkspaceFileWorkspacesWorkspaceIdFilesDeleteError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error404"` [404] no body · `"error400"` [400] no body · `"httpValidationError"` [422] `HttpValidationError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Workspaces.DeleteWorkspaceFileWorkspacesWorkspaceIdFilesDeleteRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `workspaceId` | `path` | `workspace_id` | `string` | yes |
| `path` | `query` | — | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### deleteWorkspaceWorkspacesWorkspaceIdDelete

- **Signature**: `deleteWorkspaceWorkspacesWorkspaceIdDelete(request: Workspaces.DeleteWorkspaceWorkspacesWorkspaceIdDeleteRequest, options?: RequestOptions): ApiPromise<undefined, Workspaces.DeleteWorkspaceWorkspacesWorkspaceIdDeleteError>`
- **Wire**: `DELETE /workspaces/{workspace_id}`
- **Auth**: `apiKeyHeader`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `BrowserUseError` with `kind: "api"`, an instance of `Workspaces.DeleteWorkspaceWorkspacesWorkspaceIdDeleteError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"httpValidationError"` [422] `HttpValidationError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Workspaces.DeleteWorkspaceWorkspacesWorkspaceIdDeleteRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `workspaceId` | `path` | `workspace_id` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### getWorkspaceSizeWorkspacesWorkspaceIdSizeGet

- **Signature**: `getWorkspaceSizeWorkspacesWorkspaceIdSizeGet(request: Workspaces.GetWorkspaceSizeWorkspacesWorkspaceIdSizeGetRequest, options?: RequestOptions): ApiPromise<WorkspaceSizeInfo, Workspaces.GetWorkspaceSizeWorkspacesWorkspaceIdSizeGetError>`
- **Wire**: `GET /workspaces/{workspace_id}/size`
- **Auth**: `apiKeyHeader`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `WorkspaceSizeInfo`
- **Error**: `BrowserUseError` with `kind: "api"`, an instance of `Workspaces.GetWorkspaceSizeWorkspacesWorkspaceIdSizeGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error404"` [404] no body · `"httpValidationError"` [422] `HttpValidationError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Workspaces.GetWorkspaceSizeWorkspacesWorkspaceIdSizeGetRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `workspaceId` | `path` | `workspace_id` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `WorkspaceSizeInfo` | `workspaceSizeInfoSchema` | `src/models/workspace-size-info.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### getWorkspaceWorkspacesWorkspaceIdGet

- **Signature**: `getWorkspaceWorkspacesWorkspaceIdGet(request: Workspaces.GetWorkspaceWorkspacesWorkspaceIdGetRequest, options?: RequestOptions): ApiPromise<WorkspaceInfo, Workspaces.GetWorkspaceWorkspacesWorkspaceIdGetError>`
- **Wire**: `GET /workspaces/{workspace_id}`
- **Auth**: `apiKeyHeader`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `WorkspaceInfo`
- **Error**: `BrowserUseError` with `kind: "api"`, an instance of `Workspaces.GetWorkspaceWorkspacesWorkspaceIdGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"httpValidationError"` [422] `HttpValidationError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Workspaces.GetWorkspaceWorkspacesWorkspaceIdGetRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `workspaceId` | `path` | `workspace_id` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `WorkspaceInfo` | `workspaceInfoSchema` | `src/models/workspace-info.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### listWorkspaceFilesWorkspacesWorkspaceIdFilesGet

- **Signature**: `listWorkspaceFilesWorkspacesWorkspaceIdFilesGet(request: Workspaces.ListWorkspaceFilesWorkspacesWorkspaceIdFilesGetRequest, options?: RequestOptions): ApiPromise<WorkspaceFileListResponse, Workspaces.ListWorkspaceFilesWorkspacesWorkspaceIdFilesGetError>`
- **Wire**: `GET /workspaces/{workspace_id}/files`
- **Auth**: `apiKeyHeader`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `WorkspaceFileListResponse`
- **Error**: `BrowserUseError` with `kind: "api"`, an instance of `Workspaces.ListWorkspaceFilesWorkspacesWorkspaceIdFilesGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error403"` [403] no body · `"error404"` [404] no body · `"error400"` [400] no body · `"httpValidationError"` [422] `HttpValidationError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Workspaces.ListWorkspaceFilesWorkspacesWorkspaceIdFilesGetRequest` (6):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `workspaceId` | `path` | `workspace_id` | `string` | yes | — |
| `prefix` | `query` | — | `string` | no | — |
| `limit` | `query` | — | `number` | no | `50` |
| `cursor` | `query` | — | `Cursor` | no | — |
| `includeUrls` | `query` | — | `boolean` | no | `false` |
| `contentDisposition` | `query` | — | `Contentdisposition1` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Cursor` | `cursorSchema` | `src/models/unions/cursor.ts` |
| `Contentdisposition1` | `contentdisposition1Schema` | `src/models/unions/contentdisposition1.ts` |
| `WorkspaceFileListResponse` | `workspaceFileListResponseSchema` | `src/models/workspace-file-list-response.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### updateWorkspaceWorkspacesWorkspaceIdPatch

- **Signature**: `updateWorkspaceWorkspacesWorkspaceIdPatch(request: Workspaces.UpdateWorkspaceWorkspacesWorkspaceIdPatchRequest, options?: RequestOptions): ApiPromise<WorkspaceInfo, Workspaces.UpdateWorkspaceWorkspacesWorkspaceIdPatchError>`
- **Wire**: `PATCH /workspaces/{workspace_id}`
- **Auth**: `apiKeyHeader`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `WorkspaceInfo`
- **Error**: `BrowserUseError` with `kind: "api"`, an instance of `Workspaces.UpdateWorkspaceWorkspacesWorkspaceIdPatchError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error404"` [404] no body · `"httpValidationError"` [422] `HttpValidationError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Workspaces.UpdateWorkspaceWorkspacesWorkspaceIdPatchRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `workspaceId` | `path` | `workspace_id` | `string` | yes |
| `body` | `body` | — | `WorkspaceUpdateRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `WorkspaceUpdateRequest` | `workspaceUpdateRequestSchema` | `src/models/workspace-update-request.ts` |
| `WorkspaceInfo` | `workspaceInfoSchema` | `src/models/workspace-info.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### uploadWorkspaceFilesWorkspacesWorkspaceIdFilesUploadPost

- **Signature**: `uploadWorkspaceFilesWorkspacesWorkspaceIdFilesUploadPost(request: Workspaces.UploadWorkspaceFilesWorkspacesWorkspaceIdFilesUploadPostRequest, options?: RequestOptions): ApiPromise<WorkspaceFileUploadResponse, Workspaces.UploadWorkspaceFilesWorkspacesWorkspaceIdFilesUploadPostError>`
- **Wire**: `POST /workspaces/{workspace_id}/files/upload`
- **Auth**: `apiKeyHeader`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `WorkspaceFileUploadResponse`
- **Error**: `BrowserUseError` with `kind: "api"`, an instance of `Workspaces.UploadWorkspaceFilesWorkspacesWorkspaceIdFilesUploadPostError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error403"` [403] no body · `"error404"` [404] no body · `"error400"` [400] no body · `"error409"` [409] no body · `"httpValidationError"` [422] `HttpValidationError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Workspaces.UploadWorkspaceFilesWorkspacesWorkspaceIdFilesUploadPostRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `workspaceId` | `path` | `workspace_id` | `string` | yes |
| `body` | `body` | — | `WorkspaceFileUploadRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `WorkspaceFileUploadRequest` | `workspaceFileUploadRequestSchema` | `src/models/workspace-file-upload-request.ts` |
| `WorkspaceFileUploadResponse` | `workspaceFileUploadResponseSchema` | `src/models/workspace-file-upload-response.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

