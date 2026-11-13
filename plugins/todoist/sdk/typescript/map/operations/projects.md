<!-- Generated file — do not edit; regenerated with the SDK. -->

# Projects — operations

Accessor: `client.projects` · Source: `src/resources/projects.ts` · 16 operations · Request and error types: namespace `Projects`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `todoist-sdk`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### archiveProjectApiV1ProjectsProjectIdArchivePost

- **Signature**: `archiveProjectApiV1ProjectsProjectIdArchivePost(request: Projects.ArchiveProjectApiV1ProjectsProjectIdArchivePostRequest, options?: RequestOptions): ApiPromise<ProjectObject, Projects.ArchiveProjectApiV1ProjectsProjectIdArchivePostError>`
- **Wire**: `POST /api/v1/projects/{project_id}/archive`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ProjectObject`
- **Error**: `TodoistApiError` with `kind: "api"`, an instance of `Projects.ArchiveProjectApiV1ProjectsProjectIdArchivePostError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"todoistError"` [400] `TodoistError` · `"todoistError2"` [401] `TodoistError` · `"todoistError3"` [403] `TodoistError` · `"todoistError4"` [404] `TodoistError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Projects.ArchiveProjectApiV1ProjectsProjectIdArchivePostRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `projectId` | `path` | `project_id` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ProjectObject` | `projectObjectSchema` | `src/models/unions/project-object.ts` |
| `TodoistError` | `todoistErrorSchema` | `src/models/todoist-error.ts` |

### createProjectApiV1ProjectsPost

- **Signature**: `createProjectApiV1ProjectsPost(request: Projects.CreateProjectApiV1ProjectsPostRequest, options?: RequestOptions): ApiPromise<ProjectObject, Projects.CreateProjectApiV1ProjectsPostError>`
- **Wire**: `POST /api/v1/projects`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ProjectObject`
- **Error**: `TodoistApiError` with `kind: "api"`, an instance of `Projects.CreateProjectApiV1ProjectsPostError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"todoistError"` [400] `TodoistError` · `"todoistError2"` [401] `TodoistError` · `"todoistError3"` [403] `TodoistError` · `"todoistError4"` [404] `TodoistError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Projects.CreateProjectApiV1ProjectsPostRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `Body9` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Body9` | `body9Schema` | `src/models/body9.ts` |
| `ProjectObject` | `projectObjectSchema` | `src/models/unions/project-object.ts` |
| `TodoistError` | `todoistErrorSchema` | `src/models/todoist-error.ts` |

### createProjectFromCsvApiV1ProjectsImportPost

- **Signature**: `createProjectFromCsvApiV1ProjectsImportPost(request: Projects.CreateProjectFromCsvApiV1ProjectsImportPostRequest, options?: RequestOptions): ApiPromise<ProjectImportCreateResponseWithObjects, Projects.CreateProjectFromCsvApiV1ProjectsImportPostError>`
- **Wire**: `POST /api/v1/projects/import`
- **Auth**: `bearerAuth`
- **Request body**: `multipart/form-data` — every field marked `form`. `file` is a file part, framed as bytes rather than encoded. The platform writes the boundary, or the SDK does when a file part streams
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ProjectImportCreateResponseWithObjects`
- **Error**: `TodoistApiError` with `kind: "api"`, an instance of `Projects.CreateProjectFromCsvApiV1ProjectsImportPostError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"todoistError"` [429] `TodoistError` · `"error503"` [503] no body · `"todoistError2"` [400] `TodoistError` · `"todoistError3"` [401] `TodoistError` · `"todoistError4"` [403] `TodoistError` · `"todoistError5"` [404] `TodoistError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Projects.CreateProjectFromCsvApiV1ProjectsImportPostRequest` (5):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `nameQuery` | `query` | `name` | `string` | no |
| `workspaceIdQuery` | `query` | `workspace_id` | `string` | no |
| `name` | `form` | — | `string` | yes |
| `file` | `form` | — | `FileInput` | yes |
| `workspaceId` | `form` | `workspace_id` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ProjectImportCreateResponseWithObjects` | `projectImportCreateResponseWithObjectsSchema` | `src/models/project-import-create-response-with-objects.ts` |
| `TodoistError` | `todoistErrorSchema` | `src/models/todoist-error.ts` |

### createProjectFromTemplateApiV1ProjectsFromTemplatePost

- **Signature**: `createProjectFromTemplateApiV1ProjectsFromTemplatePost(request: Projects.CreateProjectFromTemplateApiV1ProjectsFromTemplatePostRequest, options?: RequestOptions): ApiPromise<ProjectImportCreateResponse, Projects.CreateProjectFromTemplateApiV1ProjectsFromTemplatePostError>`
- **Wire**: `POST /api/v1/projects/from_template`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ProjectImportCreateResponse`
- **Error**: `TodoistApiError` with `kind: "api"`, an instance of `Projects.CreateProjectFromTemplateApiV1ProjectsFromTemplatePostError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"todoistError"` [429] `TodoistError` · `"error503"` [503] no body · `"todoistError2"` [400] `TodoistError` · `"todoistError3"` [401] `TodoistError` · `"todoistError4"` [403] `TodoistError` · `"todoistError5"` [404] `TodoistError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Projects.CreateProjectFromTemplateApiV1ProjectsFromTemplatePostRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `Body24` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Body24` | `body24Schema` | `src/models/body24.ts` |
| `ProjectImportCreateResponse` | `projectImportCreateResponseSchema` | `src/models/project-import-create-response.ts` |
| `TodoistError` | `todoistErrorSchema` | `src/models/todoist-error.ts` |

### deleteProjectApiV1ProjectsProjectIdDelete

- **Signature**: `deleteProjectApiV1ProjectsProjectIdDelete(request: Projects.DeleteProjectApiV1ProjectsProjectIdDeleteRequest, options?: RequestOptions): ApiPromise<undefined, Projects.DeleteProjectApiV1ProjectsProjectIdDeleteError>`
- **Wire**: `DELETE /api/v1/projects/{project_id}`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `TodoistApiError` with `kind: "api"`, an instance of `Projects.DeleteProjectApiV1ProjectsProjectIdDeleteError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"todoistError"` [400] `TodoistError` · `"todoistError2"` [401] `TodoistError` · `"todoistError3"` [403] `TodoistError` · `"todoistError4"` [404] `TodoistError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Projects.DeleteProjectApiV1ProjectsProjectIdDeleteRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `projectId` | `path` | `project_id` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `TodoistError` | `todoistErrorSchema` | `src/models/todoist-error.ts` |

### getArchivedApiV1ProjectsArchivedGet

- **Signature**: `getArchivedApiV1ProjectsArchivedGet(request?: Projects.GetArchivedApiV1ProjectsArchivedGetRequest, options?: RequestOptions): ApiPromise<PaginatedList1, Projects.GetArchivedApiV1ProjectsArchivedGetError>`
- **Wire**: `GET /api/v1/projects/archived`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PaginatedList1`
- **Error**: `TodoistApiError` with `kind: "api"`, an instance of `Projects.GetArchivedApiV1ProjectsArchivedGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"todoistError"` [400] `TodoistError` · `"todoistError2"` [401] `TodoistError` · `"todoistError3"` [403] `TodoistError` · `"todoistError4"` [404] `TodoistError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Projects.GetArchivedApiV1ProjectsArchivedGetRequest` (2):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `cursor` | `query` | `string` | no | — |
| `limit` | `query` | `number` | no | `50` |

| Type | Schema value | Source |
| --- | --- | --- |
| `PaginatedList1` | `paginatedList1Schema` | `src/models/paginated-list1.ts` |
| `TodoistError` | `todoistErrorSchema` | `src/models/todoist-error.ts` |

### getProjectApiV1ProjectsProjectIdGet

- **Signature**: `getProjectApiV1ProjectsProjectIdGet(request: Projects.GetProjectApiV1ProjectsProjectIdGetRequest, options?: RequestOptions): ApiPromise<ProjectObject, Projects.GetProjectApiV1ProjectsProjectIdGetError>`
- **Wire**: `GET /api/v1/projects/{project_id}`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ProjectObject`
- **Error**: `TodoistApiError` with `kind: "api"`, an instance of `Projects.GetProjectApiV1ProjectsProjectIdGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"todoistError"` [400] `TodoistError` · `"todoistError2"` [401] `TodoistError` · `"todoistError3"` [403] `TodoistError` · `"todoistError4"` [404] `TodoistError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Projects.GetProjectApiV1ProjectsProjectIdGetRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `projectId` | `path` | `project_id` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ProjectObject` | `projectObjectSchema` | `src/models/unions/project-object.ts` |
| `TodoistError` | `todoistErrorSchema` | `src/models/todoist-error.ts` |

### getProjectCollaboratorsApiV1ProjectsProjectIdCollaboratorsGet

- **Signature**: `getProjectCollaboratorsApiV1ProjectsProjectIdCollaboratorsGet(request: Projects.GetProjectCollaboratorsApiV1ProjectsProjectIdCollaboratorsGetRequest, options?: RequestOptions): ApiPromise<PaginatedList2, Projects.GetProjectCollaboratorsApiV1ProjectsProjectIdCollaboratorsGetError>`
- **Wire**: `GET /api/v1/projects/{project_id}/collaborators`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PaginatedList2`
- **Error**: `TodoistApiError` with `kind: "api"`, an instance of `Projects.GetProjectCollaboratorsApiV1ProjectsProjectIdCollaboratorsGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"todoistError"` [400] `TodoistError` · `"todoistError2"` [401] `TodoistError` · `"todoistError3"` [403] `TodoistError` · `"todoistError4"` [404] `TodoistError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Projects.GetProjectCollaboratorsApiV1ProjectsProjectIdCollaboratorsGetRequest` (4):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `projectId` | `path` | `project_id` | `string` | yes | — |
| `cursor` | `query` | — | `string` | no | — |
| `limit` | `query` | — | `number` | no | `50` |
| `publicKey` | `query` | `public_key` | `string` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `PaginatedList2` | `paginatedList2Schema` | `src/models/paginated-list2.ts` |
| `TodoistError` | `todoistErrorSchema` | `src/models/todoist-error.ts` |

### getProjectsApiV1ProjectsGet

- **Signature**: `getProjectsApiV1ProjectsGet(request?: Projects.GetProjectsApiV1ProjectsGetRequest, options?: RequestOptions): ApiPromise<PaginatedList1, Projects.GetProjectsApiV1ProjectsGetError>`
- **Wire**: `GET /api/v1/projects`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PaginatedList1`
- **Error**: `TodoistApiError` with `kind: "api"`, an instance of `Projects.GetProjectsApiV1ProjectsGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"todoistError"` [400] `TodoistError` · `"todoistError2"` [401] `TodoistError` · `"todoistError3"` [403] `TodoistError` · `"todoistError4"` [404] `TodoistError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Projects.GetProjectsApiV1ProjectsGetRequest` (4):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `folderId` | `query` | `folder_id` | `number` | no | — |
| `workspaceId` | `query` | `workspace_id` | `number` | no | — |
| `cursor` | `query` | — | `string` | no | — |
| `limit` | `query` | — | `number` | no | `50` |

| Type | Schema value | Source |
| --- | --- | --- |
| `PaginatedList1` | `paginatedList1Schema` | `src/models/paginated-list1.ts` |
| `TodoistError` | `todoistErrorSchema` | `src/models/todoist-error.ts` |

### importProjectCsvApiV1ProjectsProjectIdImportPost

- **Signature**: `importProjectCsvApiV1ProjectsProjectIdImportPost(request: Projects.ImportProjectCsvApiV1ProjectsProjectIdImportPostRequest, options?: RequestOptions): ApiPromise<ProjectImportResponse, Projects.ImportProjectCsvApiV1ProjectsProjectIdImportPostError>`
- **Wire**: `POST /api/v1/projects/{project_id}/import`
- **Auth**: `bearerAuth`
- **Request body**: `multipart/form-data` — every field marked `form`. `file` is a file part, framed as bytes rather than encoded. The platform writes the boundary, or the SDK does when a file part streams
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ProjectImportResponse`
- **Error**: `TodoistApiError` with `kind: "api"`, an instance of `Projects.ImportProjectCsvApiV1ProjectsProjectIdImportPostError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"todoistError"` [429] `TodoistError` · `"error503"` [503] no body · `"todoistError2"` [400] `TodoistError` · `"todoistError3"` [401] `TodoistError` · `"todoistError4"` [403] `TodoistError` · `"todoistError5"` [404] `TodoistError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Projects.ImportProjectCsvApiV1ProjectsProjectIdImportPostRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `projectId` | `path` | `project_id` | `string` | yes |
| `file` | `form` | — | `FileInput` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ProjectImportResponse` | `projectImportResponseSchema` | `src/models/project-import-response.ts` |
| `TodoistError` | `todoistErrorSchema` | `src/models/todoist-error.ts` |

### importProjectTemplateApiV1ProjectsProjectIdImportTemplatePost

- **Signature**: `importProjectTemplateApiV1ProjectsProjectIdImportTemplatePost(request: Projects.ImportProjectTemplateApiV1ProjectsProjectIdImportTemplatePostRequest, options?: RequestOptions): ApiPromise<ProjectImportResponse, Projects.ImportProjectTemplateApiV1ProjectsProjectIdImportTemplatePostError>`
- **Wire**: `POST /api/v1/projects/{project_id}/import_template`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ProjectImportResponse`
- **Error**: `TodoistApiError` with `kind: "api"`, an instance of `Projects.ImportProjectTemplateApiV1ProjectsProjectIdImportTemplatePostError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"todoistError"` [429] `TodoistError` · `"error503"` [503] no body · `"todoistError2"` [400] `TodoistError` · `"todoistError3"` [401] `TodoistError` · `"todoistError4"` [403] `TodoistError` · `"todoistError5"` [404] `TodoistError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Projects.ImportProjectTemplateApiV1ProjectsProjectIdImportTemplatePostRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `projectId` | `path` | `project_id` | `string` | yes |
| `body` | `body` | — | `Body29` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Body29` | `body29Schema` | `src/models/body29.ts` |
| `ProjectImportResponse` | `projectImportResponseSchema` | `src/models/project-import-response.ts` |
| `TodoistError` | `todoistErrorSchema` | `src/models/todoist-error.ts` |

### joinApiV1ProjectsProjectIdJoinPost

- **Signature**: `joinApiV1ProjectsProjectIdJoinPost(request: Projects.JoinApiV1ProjectsProjectIdJoinPostRequest, options?: RequestOptions): ApiPromise<GetDataV2Response, Projects.JoinApiV1ProjectsProjectIdJoinPostError>`
- **Wire**: `POST /api/v1/projects/{project_id}/join`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `GetDataV2Response`
- **Error**: `TodoistApiError` with `kind: "api"`, an instance of `Projects.JoinApiV1ProjectsProjectIdJoinPostError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"todoistError"` [400] `TodoistError` · `"todoistError2"` [401] `TodoistError` · `"todoistError3"` [403] `TodoistError` · `"todoistError4"` [404] `TodoistError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Projects.JoinApiV1ProjectsProjectIdJoinPostRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `projectId` | `path` | `project_id` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GetDataV2Response` | `getDataV2ResponseSchema` | `src/models/get-data-v2-response.ts` |
| `TodoistError` | `todoistErrorSchema` | `src/models/todoist-error.ts` |

### permissionsApiV1ProjectsPermissionsGet

- **Signature**: `permissionsApiV1ProjectsPermissionsGet(options?: RequestOptions): ApiPromise<RoleToActionMappingView, Projects.PermissionsApiV1ProjectsPermissionsGetError>`
- **Wire**: `GET /api/v1/projects/permissions`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `RoleToActionMappingView`
- **Error**: `TodoistApiError` with `kind: "api"`, an instance of `Projects.PermissionsApiV1ProjectsPermissionsGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"todoistError"` [400] `TodoistError` · `"todoistError2"` [401] `TodoistError` · `"todoistError3"` [403] `TodoistError` · `"todoistError4"` [404] `TodoistError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

| Type | Schema value | Source |
| --- | --- | --- |
| `RoleToActionMappingView` | `roleToActionMappingViewSchema` | `src/models/role-to-action-mapping-view.ts` |
| `TodoistError` | `todoistErrorSchema` | `src/models/todoist-error.ts` |

### searchProjectsApiV1ProjectsSearchGet

- **Signature**: `searchProjectsApiV1ProjectsSearchGet(request: Projects.SearchProjectsApiV1ProjectsSearchGetRequest, options?: RequestOptions): ApiPromise<PaginatedList1, Projects.SearchProjectsApiV1ProjectsSearchGetError>`
- **Wire**: `GET /api/v1/projects/search`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PaginatedList1`
- **Error**: `TodoistApiError` with `kind: "api"`, an instance of `Projects.SearchProjectsApiV1ProjectsSearchGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"todoistError"` [400] `TodoistError` · `"todoistError2"` [401] `TodoistError` · `"todoistError3"` [403] `TodoistError` · `"todoistError4"` [404] `TodoistError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Projects.SearchProjectsApiV1ProjectsSearchGetRequest` (3):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `query` | `query` | `string` | yes | — |
| `cursor` | `query` | `string` | no | — |
| `limit` | `query` | `number` | no | `50` |

| Type | Schema value | Source |
| --- | --- | --- |
| `PaginatedList1` | `paginatedList1Schema` | `src/models/paginated-list1.ts` |
| `TodoistError` | `todoistErrorSchema` | `src/models/todoist-error.ts` |

### unarchiveProjectApiV1ProjectsProjectIdUnarchivePost

- **Signature**: `unarchiveProjectApiV1ProjectsProjectIdUnarchivePost(request: Projects.UnarchiveProjectApiV1ProjectsProjectIdUnarchivePostRequest, options?: RequestOptions): ApiPromise<ProjectObject, Projects.UnarchiveProjectApiV1ProjectsProjectIdUnarchivePostError>`
- **Wire**: `POST /api/v1/projects/{project_id}/unarchive`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ProjectObject`
- **Error**: `TodoistApiError` with `kind: "api"`, an instance of `Projects.UnarchiveProjectApiV1ProjectsProjectIdUnarchivePostError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"todoistError"` [400] `TodoistError` · `"todoistError2"` [401] `TodoistError` · `"todoistError3"` [403] `TodoistError` · `"todoistError4"` [404] `TodoistError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Projects.UnarchiveProjectApiV1ProjectsProjectIdUnarchivePostRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `projectId` | `path` | `project_id` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ProjectObject` | `projectObjectSchema` | `src/models/unions/project-object.ts` |
| `TodoistError` | `todoistErrorSchema` | `src/models/todoist-error.ts` |

### updateProjectApiV1ProjectsProjectIdPost

- **Signature**: `updateProjectApiV1ProjectsProjectIdPost(request: Projects.UpdateProjectApiV1ProjectsProjectIdPostRequest, options?: RequestOptions): ApiPromise<ProjectObject, Projects.UpdateProjectApiV1ProjectsProjectIdPostError>`
- **Wire**: `POST /api/v1/projects/{project_id}`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ProjectObject`
- **Error**: `TodoistApiError` with `kind: "api"`, an instance of `Projects.UpdateProjectApiV1ProjectsProjectIdPostError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"todoistError"` [400] `TodoistError` · `"todoistError2"` [401] `TodoistError` · `"todoistError3"` [403] `TodoistError` · `"todoistError4"` [404] `TodoistError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Projects.UpdateProjectApiV1ProjectsProjectIdPostRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `projectId` | `path` | `project_id` | `string` | yes |
| `body` | `body` | — | `Body36` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Body36` | `body36Schema` | `src/models/body36.ts` |
| `ProjectObject` | `projectObjectSchema` | `src/models/unions/project-object.ts` |
| `TodoistError` | `todoistErrorSchema` | `src/models/todoist-error.ts` |

