<!-- Generated file — do not edit; regenerated with the SDK. -->

# Templates — operations

Accessor: `client.templates` · Source: `src/resources/templates.ts` · 16 operations · Request and error types: namespace `Templates`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `todoist-sdk`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### categoriesApiV1TemplatesCategoriesGet

- **Signature**: `categoriesApiV1TemplatesCategoriesGet(request?: Templates.CategoriesApiV1TemplatesCategoriesGetRequest, options?: RequestOptions): ApiPromise<CategoriesResponse, Templates.CategoriesApiV1TemplatesCategoriesGetError>`
- **Wire**: `GET /api/v1/templates/categories`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `CategoriesResponse`
- **Error**: `TodoistApiError` with `kind: "api"`, an instance of `Templates.CategoriesApiV1TemplatesCategoriesGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"todoistError"` [400] `TodoistError` · `"todoistError2"` [401] `TodoistError` · `"todoistError3"` [403] `TodoistError` · `"todoistError4"` [404] `TodoistError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Templates.CategoriesApiV1TemplatesCategoriesGetRequest` (2):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `templateType` | `query` | `template_type` | `TemplateType9` | no | `TemplateType9.Project` |
| `locale` | `query` | — | `string` | no | `"en"` |

| Type | Schema value | Source |
| --- | --- | --- |
| `TemplateType9` | `templateType9Schema` | `src/models/template-type9.ts` |
| `CategoriesResponse` | `categoriesResponseSchema` | `src/models/categories-response.ts` |
| `TodoistError` | `todoistErrorSchema` | `src/models/todoist-error.ts` |

### createProjectFromFileApiV1TemplatesCreateProjectFromFilePost

- **Signature**: `createProjectFromFileApiV1TemplatesCreateProjectFromFilePost(request: Templates.CreateProjectFromFileApiV1TemplatesCreateProjectFromFilePostRequest, options?: RequestOptions): ApiPromise<ProjectImportCreateResponseWithObjects, Templates.CreateProjectFromFileApiV1TemplatesCreateProjectFromFilePostError>`
- **Wire**: `POST /api/v1/templates/create_project_from_file`
- **Auth**: `bearerAuth`
- **Request body**: `multipart/form-data` — every field marked `form`. `file` is a file part, framed as bytes rather than encoded. The platform writes the boundary, or the SDK does when a file part streams
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ProjectImportCreateResponseWithObjects`
- **Error**: `TodoistApiError` with `kind: "api"`, an instance of `Templates.CreateProjectFromFileApiV1TemplatesCreateProjectFromFilePostError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"todoistError"` [400] `TodoistError` · `"todoistError2"` [401] `TodoistError` · `"todoistError3"` [403] `TodoistError` · `"todoistError4"` [404] `TodoistError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Templates.CreateProjectFromFileApiV1TemplatesCreateProjectFromFilePostRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `name` | `form` | — | `string` | yes |
| `file` | `form` | — | `FileInput` | yes |
| `workspaceId` | `form` | `workspace_id` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ProjectImportCreateResponseWithObjects` | `projectImportCreateResponseWithObjectsSchema` | `src/models/project-import-create-response-with-objects.ts` |
| `TodoistError` | `todoistErrorSchema` | `src/models/todoist-error.ts` |

### createUserTemplateApiV1TemplatesUserPost

- **Signature**: `createUserTemplateApiV1TemplatesUserPost(request: Templates.CreateUserTemplateApiV1TemplatesUserPostRequest, options?: RequestOptions): ApiPromise<CreateUserTemplateResponse, Templates.CreateUserTemplateApiV1TemplatesUserPostError>`
- **Wire**: `POST /api/v1/templates/user`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `CreateUserTemplateResponse`
- **Error**: `TodoistApiError` with `kind: "api"`, an instance of `Templates.CreateUserTemplateApiV1TemplatesUserPostError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"todoistError"` [409] `TodoistError` · `"todoistError2"` [400] `TodoistError` · `"todoistError3"` [401] `TodoistError` · `"todoistError4"` [403] `TodoistError` · `"todoistError5"` [404] `TodoistError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Templates.CreateUserTemplateApiV1TemplatesUserPostRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `Body37` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Body37` | `body37Schema` | `src/models/body37.ts` |
| `CreateUserTemplateResponse` | `createUserTemplateResponseSchema` | `src/models/create-user-template-response.ts` |
| `TodoistError` | `todoistErrorSchema` | `src/models/todoist-error.ts` |

### discoverTemplateApiV1TemplatesTemplateIdGet

- **Signature**: `discoverTemplateApiV1TemplatesTemplateIdGet(request: Templates.DiscoverTemplateApiV1TemplatesTemplateIdGetRequest, options?: RequestOptions): ApiPromise<PublicTemplate, Templates.DiscoverTemplateApiV1TemplatesTemplateIdGetError>`
- **Wire**: `GET /api/v1/templates/{template_id}`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PublicTemplate`
- **Error**: `TodoistApiError` with `kind: "api"`, an instance of `Templates.DiscoverTemplateApiV1TemplatesTemplateIdGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"todoistError"` [429] `TodoistError` · `"error503"` [503] no body · `"todoistError2"` [400] `TodoistError` · `"todoistError3"` [401] `TodoistError` · `"todoistError4"` [403] `TodoistError` · `"todoistError5"` [404] `TodoistError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Templates.DiscoverTemplateApiV1TemplatesTemplateIdGetRequest` (2):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `templateId` | `path` | `template_id` | `string` | yes | — |
| `locale` | `query` | — | `string` | no | `"en"` |

| Type | Schema value | Source |
| --- | --- | --- |
| `PublicTemplate` | `publicTemplateSchema` | `src/models/public-template.ts` |
| `TodoistError` | `todoistErrorSchema` | `src/models/todoist-error.ts` |

### discoverTemplatesApiV1TemplatesGet

- **Signature**: `discoverTemplatesApiV1TemplatesGet(request?: Templates.DiscoverTemplatesApiV1TemplatesGetRequest, options?: RequestOptions): ApiPromise<PaginatedList9, Templates.DiscoverTemplatesApiV1TemplatesGetError>`
- **Wire**: `GET /api/v1/templates`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PaginatedList9`
- **Error**: `TodoistApiError` with `kind: "api"`, an instance of `Templates.DiscoverTemplatesApiV1TemplatesGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"todoistError"` [429] `TodoistError` · `"error503"` [503] no body · `"todoistError2"` [400] `TodoistError` · `"todoistError3"` [401] `TodoistError` · `"todoistError4"` [403] `TodoistError` · `"todoistError5"` [404] `TodoistError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Templates.DiscoverTemplatesApiV1TemplatesGetRequest` (8):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `templateType` | `query` | `template_type` | `TemplateType10` | no | `TemplateType10.Project` |
| `templateSource` | `query` | `template_source` | `TemplateSource3` | no | `TemplateSource3.Todoist` |
| `locale` | `query` | — | `string` | no | `"en"` |
| `limit` | `query` | — | `number` | no | `50` |
| `cursor` | `query` | — | `string` | no | — |
| `query` | `query` | — | `string` | no | — |
| `categoryId` | `query` | `category_id` | `string` | no | — |
| `ids` | `query` | — | `string` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `TemplateType10` | `templateType10Schema` | `src/models/template-type10.ts` |
| `TemplateSource3` | `templateSource3Schema` | `src/models/template-source3.ts` |
| `PaginatedList9` | `paginatedList9Schema` | `src/models/paginated-list9.ts` |
| `TodoistError` | `todoistErrorSchema` | `src/models/todoist-error.ts` |

### exportAsFileApiV1TemplatesFileGet

- **Signature**: `exportAsFileApiV1TemplatesFileGet(request: Templates.ExportAsFileApiV1TemplatesFileGetRequest, options?: RequestOptions): ApiPromise<string, Templates.ExportAsFileApiV1TemplatesFileGetError>`
- **Wire**: `GET /api/v1/templates/file`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `string` — `text/plain;charset=utf-8`, decoded by the plain-text scalar decoder, not by a model
- **Error**: `TodoistApiError` with `kind: "api"`, an instance of `Templates.ExportAsFileApiV1TemplatesFileGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"todoistError"` [400] `TodoistError` · `"todoistError2"` [401] `TodoistError` · `"todoistError3"` [403] `TodoistError` · `"todoistError4"` [404] `TodoistError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Templates.ExportAsFileApiV1TemplatesFileGetRequest` (2):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `projectId` | `query` | `project_id` | `string` | yes | — |
| `useRelativeDates` | `query` | `use_relative_dates` | `boolean` | no | `true` |

| Type | Schema value | Source |
| --- | --- | --- |
| `TodoistError` | `todoistErrorSchema` | `src/models/todoist-error.ts` |

### exportAsUrlApiV1TemplatesUrlGet

- **Signature**: `exportAsUrlApiV1TemplatesUrlGet(request: Templates.ExportAsUrlApiV1TemplatesUrlGetRequest, options?: RequestOptions): ApiPromise<FileUrlResponse, Templates.ExportAsUrlApiV1TemplatesUrlGetError>`
- **Wire**: `GET /api/v1/templates/url`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `FileUrlResponse`
- **Error**: `TodoistApiError` with `kind: "api"`, an instance of `Templates.ExportAsUrlApiV1TemplatesUrlGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"todoistError"` [400] `TodoistError` · `"todoistError2"` [401] `TodoistError` · `"todoistError3"` [403] `TodoistError` · `"todoistError4"` [404] `TodoistError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Templates.ExportAsUrlApiV1TemplatesUrlGetRequest` (2):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `projectId` | `query` | `project_id` | `string` | yes | — |
| `useRelativeDates` | `query` | `use_relative_dates` | `boolean` | no | `true` |

| Type | Schema value | Source |
| --- | --- | --- |
| `FileUrlResponse` | `fileUrlResponseSchema` | `src/models/file-url-response.ts` |
| `TodoistError` | `todoistErrorSchema` | `src/models/todoist-error.ts` |

### generateDescriptionApiV1TemplatesGenerateDescriptionPost

- **Signature**: `generateDescriptionApiV1TemplatesGenerateDescriptionPost(request: Templates.GenerateDescriptionApiV1TemplatesGenerateDescriptionPostRequest, options?: RequestOptions): ApiPromise<GenerateDescriptionResponse, Templates.GenerateDescriptionApiV1TemplatesGenerateDescriptionPostError>`
- **Wire**: `POST /api/v1/templates/generate_description`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `GenerateDescriptionResponse`
- **Error**: `TodoistApiError` with `kind: "api"`, an instance of `Templates.GenerateDescriptionApiV1TemplatesGenerateDescriptionPostError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"todoistError"` [429] `TodoistError` · `"todoistError2"` [400] `TodoistError` · `"todoistError3"` [401] `TodoistError` · `"todoistError4"` [403] `TodoistError` · `"todoistError5"` [404] `TodoistError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Templates.GenerateDescriptionApiV1TemplatesGenerateDescriptionPostRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `Body6` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Body6` | `body6Schema` | `src/models/body6.ts` |
| `GenerateDescriptionResponse` | `generateDescriptionResponseSchema` | `src/models/generate-description-response.ts` |
| `TodoistError` | `todoistErrorSchema` | `src/models/todoist-error.ts` |

### importIntoProjectFromFileApiV1TemplatesImportIntoProjectFromFilePost

- **Signature**: `importIntoProjectFromFileApiV1TemplatesImportIntoProjectFromFilePost(request: Templates.ImportIntoProjectFromFileApiV1TemplatesImportIntoProjectFromFilePostRequest, options?: RequestOptions): ApiPromise<ProjectImportResponse, Templates.ImportIntoProjectFromFileApiV1TemplatesImportIntoProjectFromFilePostError>`
- **Wire**: `POST /api/v1/templates/import_into_project_from_file`
- **Auth**: `bearerAuth`
- **Request body**: `multipart/form-data` — every field marked `form`. `file` is a file part, framed as bytes rather than encoded. The platform writes the boundary, or the SDK does when a file part streams
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ProjectImportResponse`
- **Error**: `TodoistApiError` with `kind: "api"`, an instance of `Templates.ImportIntoProjectFromFileApiV1TemplatesImportIntoProjectFromFilePostError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"todoistError"` [400] `TodoistError` · `"todoistError2"` [401] `TodoistError` · `"todoistError3"` [403] `TodoistError` · `"todoistError4"` [404] `TodoistError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Templates.ImportIntoProjectFromFileApiV1TemplatesImportIntoProjectFromFilePostRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `projectId` | `form` | `project_id` | `string` | yes |
| `file` | `form` | — | `FileInput` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ProjectImportResponse` | `projectImportResponseSchema` | `src/models/project-import-response.ts` |
| `TodoistError` | `todoistErrorSchema` | `src/models/todoist-error.ts` |

### importIntoProjectFromTemplateIdApiV1TemplatesImportIntoProjectFromTemplateIdPost

- **Signature**: `importIntoProjectFromTemplateIdApiV1TemplatesImportIntoProjectFromTemplateIdPost(request: Templates.ImportIntoProjectFromTemplateIdApiV1TemplatesImportIntoProjectFromTemplateIdPostRequest, options?: RequestOptions): ApiPromise<ProjectImportResponse, Templates.ImportIntoProjectFromTemplateIdApiV1TemplatesImportIntoProjectFromTemplateIdPostError>`
- **Wire**: `POST /api/v1/templates/import_into_project_from_template_id`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ProjectImportResponse`
- **Error**: `TodoistApiError` with `kind: "api"`, an instance of `Templates.ImportIntoProjectFromTemplateIdApiV1TemplatesImportIntoProjectFromTemplateIdPostError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"todoistError"` [400] `TodoistError` · `"todoistError2"` [401] `TodoistError` · `"todoistError3"` [403] `TodoistError` · `"todoistError4"` [404] `TodoistError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Templates.ImportIntoProjectFromTemplateIdApiV1TemplatesImportIntoProjectFromTemplateIdPostRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `Body26` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Body26` | `body26Schema` | `src/models/body26.ts` |
| `ProjectImportResponse` | `projectImportResponseSchema` | `src/models/project-import-response.ts` |
| `TodoistError` | `todoistErrorSchema` | `src/models/todoist-error.ts` |

### importUserTemplateFromFileApiV1TemplatesUserImportPost

- **Signature**: `importUserTemplateFromFileApiV1TemplatesUserImportPost(request: Templates.ImportUserTemplateFromFileApiV1TemplatesUserImportPostRequest, options?: RequestOptions): ApiPromise<CreateUserTemplateResponse, Templates.ImportUserTemplateFromFileApiV1TemplatesUserImportPostError>`
- **Wire**: `POST /api/v1/templates/user/import`
- **Auth**: `bearerAuth`
- **Request body**: `multipart/form-data` — every field marked `form`. `file` is a file part, framed as bytes rather than encoded. The platform writes the boundary, or the SDK does when a file part streams
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `CreateUserTemplateResponse`
- **Error**: `TodoistApiError` with `kind: "api"`, an instance of `Templates.ImportUserTemplateFromFileApiV1TemplatesUserImportPostError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"todoistError"` [400] `TodoistError` · `"todoistError2"` [401] `TodoistError` · `"todoistError3"` [403] `TodoistError` · `"todoistError4"` [404] `TodoistError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Templates.ImportUserTemplateFromFileApiV1TemplatesUserImportPostRequest` (11):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `templateTypeQuery` | `query` | `template_type` | `TemplateType7` | no |
| `nameQuery` | `query` | `name` | `string` | no |
| `descriptionQuery` | `query` | `description` | `string` | no |
| `colorQuery` | `query` | `color` | `ApiColorId2` | no |
| `uploadedFileNameQuery` | `query` | `uploaded_file_name` | `string` | no |
| `templateType` | `form` | `template_type` | `TemplateType7` | yes |
| `name` | `form` | — | `string` | yes |
| `description` | `form` | — | `string` | yes |
| `color` | `form` | — | `ApiColorId2` | yes |
| `uploadedFileName` | `form` | `uploaded_file_name` | `string` | no |
| `file` | `form` | — | `FileInput` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `TemplateType7` | `templateType7Schema` | `src/models/template-type7.ts` |
| `ApiColorId2` | `apiColorId2Schema` | `src/models/unions/api-color-id2.ts` |
| `CreateUserTemplateResponse` | `createUserTemplateResponseSchema` | `src/models/create-user-template-response.ts` |
| `TodoistError` | `todoistErrorSchema` | `src/models/todoist-error.ts` |

### previewProjectApiV1TemplatesPreviewGet

- **Signature**: `previewProjectApiV1TemplatesPreviewGet(request: Templates.PreviewProjectApiV1TemplatesPreviewGetRequest, options?: RequestOptions): ApiPromise<ProjectTemplatePreviewResponse, Templates.PreviewProjectApiV1TemplatesPreviewGetError>`
- **Wire**: `GET /api/v1/templates/preview`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ProjectTemplatePreviewResponse`
- **Error**: `TodoistApiError` with `kind: "api"`, an instance of `Templates.PreviewProjectApiV1TemplatesPreviewGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"todoistError"` [429] `TodoistError` · `"error503"` [503] no body · `"todoistError2"` [400] `TodoistError` · `"todoistError3"` [401] `TodoistError` · `"todoistError4"` [403] `TodoistError` · `"todoistError5"` [404] `TodoistError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Templates.PreviewProjectApiV1TemplatesPreviewGetRequest` (2):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `projectId` | `query` | `project_id` | `string` | yes | — |
| `resolveDates` | `query` | `resolve_dates` | `boolean` | no | `true` |

| Type | Schema value | Source |
| --- | --- | --- |
| `ProjectTemplatePreviewResponse` | `projectTemplatePreviewResponseSchema` | `src/models/project-template-preview-response.ts` |
| `TodoistError` | `todoistErrorSchema` | `src/models/todoist-error.ts` |

### previewTemplateApiV1TemplatesTemplateIdPreviewGet

- **Signature**: `previewTemplateApiV1TemplatesTemplateIdPreviewGet(request: Templates.PreviewTemplateApiV1TemplatesTemplateIdPreviewGetRequest, options?: RequestOptions): ApiPromise<TemplatePreviewResponse, Templates.PreviewTemplateApiV1TemplatesTemplateIdPreviewGetError>`
- **Wire**: `GET /api/v1/templates/{template_id}/preview`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `TemplatePreviewResponse`
- **Error**: `TodoistApiError` with `kind: "api"`, an instance of `Templates.PreviewTemplateApiV1TemplatesTemplateIdPreviewGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"todoistError"` [429] `TodoistError` · `"error503"` [503] no body · `"todoistError2"` [400] `TodoistError` · `"todoistError3"` [401] `TodoistError` · `"todoistError4"` [403] `TodoistError` · `"todoistError5"` [404] `TodoistError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Templates.PreviewTemplateApiV1TemplatesTemplateIdPreviewGetRequest` (4):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `templateId` | `path` | `template_id` | `string` | yes | — |
| `locale` | `query` | — | `string` | no | `"en"` |
| `forWorkspace` | `query` | `for_workspace` | `boolean` | no | `false` |
| `resolveDates` | `query` | `resolve_dates` | `boolean` | no | `true` |

| Type | Schema value | Source |
| --- | --- | --- |
| `TemplatePreviewResponse` | `templatePreviewResponseSchema` | `src/models/unions/template-preview-response.ts` |
| `TodoistError` | `todoistErrorSchema` | `src/models/todoist-error.ts` |

### previewUserTemplateApiV1TemplatesUserPreviewPost

- **Signature**: `previewUserTemplateApiV1TemplatesUserPreviewPost(request: Templates.PreviewUserTemplateApiV1TemplatesUserPreviewPostRequest, options?: RequestOptions): ApiPromise<PreviewFromFileResponse, Templates.PreviewUserTemplateApiV1TemplatesUserPreviewPostError>`
- **Wire**: `POST /api/v1/templates/user/preview`
- **Auth**: `bearerAuth`
- **Request body**: `multipart/form-data` — every field marked `form`. `file` is a file part, framed as bytes rather than encoded. The platform writes the boundary, or the SDK does when a file part streams
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `PreviewFromFileResponse`
- **Error**: `TodoistApiError` with `kind: "api"`, an instance of `Templates.PreviewUserTemplateApiV1TemplatesUserPreviewPostError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"todoistError"` [429] `TodoistError` · `"error503"` [503] no body · `"todoistError2"` [400] `TodoistError` · `"todoistError3"` [401] `TodoistError` · `"todoistError4"` [403] `TodoistError` · `"todoistError5"` [404] `TodoistError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Templates.PreviewUserTemplateApiV1TemplatesUserPreviewPostRequest` (3):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `resolveDatesQuery` | `query` | `resolve_dates` | `boolean` | no | `true` |
| `file` | `form` | — | `FileInput` | yes | — |
| `resolveDates` | `form` | `resolve_dates` | `boolean` | no | `true` |

| Type | Schema value | Source |
| --- | --- | --- |
| `PreviewFromFileResponse` | `previewFromFileResponseSchema` | `src/models/preview-from-file-response.ts` |
| `TodoistError` | `todoistErrorSchema` | `src/models/todoist-error.ts` |

### updateUserTemplateApiV1TemplatesUserTemplateIdPut

- **Signature**: `updateUserTemplateApiV1TemplatesUserTemplateIdPut(request: Templates.UpdateUserTemplateApiV1TemplatesUserTemplateIdPutRequest, options?: RequestOptions): ApiPromise<UpdateUserTemplateResponse, Templates.UpdateUserTemplateApiV1TemplatesUserTemplateIdPutError>`
- **Wire**: `PUT /api/v1/templates/user/{template_id}`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `UpdateUserTemplateResponse`
- **Error**: `TodoistApiError` with `kind: "api"`, an instance of `Templates.UpdateUserTemplateApiV1TemplatesUserTemplateIdPutError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"todoistError"` [409] `TodoistError` · `"todoistError2"` [400] `TodoistError` · `"todoistError3"` [401] `TodoistError` · `"todoistError4"` [403] `TodoistError` · `"todoistError5"` [404] `TodoistError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Templates.UpdateUserTemplateApiV1TemplatesUserTemplateIdPutRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `templateId` | `path` | `template_id` | `string` | yes |
| `body` | `body` | — | `Body27` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Body27` | `body27Schema` | `src/models/body27.ts` |
| `UpdateUserTemplateResponse` | `updateUserTemplateResponseSchema` | `src/models/update-user-template-response.ts` |
| `TodoistError` | `todoistErrorSchema` | `src/models/todoist-error.ts` |

### useTemplateApiV1TemplatesTemplateIdUsePost

- **Signature**: `useTemplateApiV1TemplatesTemplateIdUsePost(request: Templates.UseTemplateApiV1TemplatesTemplateIdUsePostRequest, options?: RequestOptions): ApiPromise<CreateFromTemplateIdResponse, Templates.UseTemplateApiV1TemplatesTemplateIdUsePostError>`
- **Wire**: `POST /api/v1/templates/{template_id}/use`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `CreateFromTemplateIdResponse`
- **Error**: `TodoistApiError` with `kind: "api"`, an instance of `Templates.UseTemplateApiV1TemplatesTemplateIdUsePostError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"todoistError"` [429] `TodoistError` · `"error503"` [503] no body · `"todoistError2"` [400] `TodoistError` · `"todoistError3"` [401] `TodoistError` · `"todoistError4"` [403] `TodoistError` · `"todoistError5"` [404] `TodoistError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Templates.UseTemplateApiV1TemplatesTemplateIdUsePostRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `templateId` | `path` | `template_id` | `string` | yes |
| `body` | `body` | — | `Body12` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Body12` | `body12Schema` | `src/models/body12.ts` |
| `CreateFromTemplateIdResponse` | `createFromTemplateIdResponseSchema` | `src/models/create-from-template-id-response.ts` |
| `TodoistError` | `todoistErrorSchema` | `src/models/todoist-error.ts` |

