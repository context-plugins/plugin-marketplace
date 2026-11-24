<!-- Generated file — do not edit; regenerated with the SDK. -->

# Sections — operations

Accessor: `client.sections` · Source: `src/resources/sections.ts` · 7 operations · Request and error types: namespace `Sections`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `asana`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### addTaskForSection

- **Signature**: `addTaskForSection(request: Sections.AddTaskForSectionRequest, options?: RequestOptions): ApiPromise<SectionsAddTaskResponse, Sections.AddTaskForSectionError>`
- **Wire**: `POST /sections/{section_gid}/addTask`
- **Auth**: any of `personalAccessToken`, `oauth2` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `SectionsAddTaskResponse`
- **Error**: `AsanaError` with `kind: "api"`, an instance of `Sections.AddTaskForSectionError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"errorResponse5"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Sections.AddTaskForSectionRequest` (4):

| Field | Channel | Wire | Type | Req | Style |
| --- | --- | --- | --- | --- | --- |
| `sectionGid` | `path` | `section_gid` | `string` | yes | — |
| `optPretty` | `query` | `opt_pretty` | `boolean` | no | — |
| `optFields` | `query` | `opt_fields` | `string[]` | no | `csv` |
| `body` | `body` | — | `SectionsAddTaskRequest` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `SectionsAddTaskRequest` | `sectionsAddTaskRequestSchema` | `src/models/sections-add-task-request.ts` |
| `SectionsAddTaskResponse` | `sectionsAddTaskResponseSchema` | `src/models/sections-add-task-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### createSectionForProject

- **Signature**: `createSectionForProject(request: Sections.CreateSectionForProjectRequest, options?: RequestOptions): ApiPromise<ProjectsSectionsResponse1, Sections.CreateSectionForProjectError>`
- **Wire**: `POST /projects/{project_gid}/sections`
- **Auth**: any of `personalAccessToken`, `oauth2` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ProjectsSectionsResponse1`
- **Error**: `AsanaError` with `kind: "api"`, an instance of `Sections.CreateSectionForProjectError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"errorResponse5"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Sections.CreateSectionForProjectRequest` (4):

| Field | Channel | Wire | Type | Req | Style |
| --- | --- | --- | --- | --- | --- |
| `projectGid` | `path` | `project_gid` | `string` | yes | — |
| `optPretty` | `query` | `opt_pretty` | `boolean` | no | — |
| `optFields` | `query` | `opt_fields` | `string[]` | no | `csv` |
| `body` | `body` | — | `ProjectsSectionsRequest` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `ProjectsSectionsRequest` | `projectsSectionsRequestSchema` | `src/models/projects-sections-request.ts` |
| `ProjectsSectionsResponse1` | `projectsSectionsResponse1Schema` | `src/models/projects-sections-response1.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### deleteSection

- **Signature**: `deleteSection(request: Sections.DeleteSectionRequest, options?: RequestOptions): ApiPromise<SectionsResponse2, Sections.DeleteSectionError>`
- **Wire**: `DELETE /sections/{section_gid}`
- **Auth**: any of `personalAccessToken`, `oauth2` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `SectionsResponse2`
- **Error**: `AsanaError` with `kind: "api"`, an instance of `Sections.DeleteSectionError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"errorResponse5"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Sections.DeleteSectionRequest` (3):

| Field | Channel | Wire | Type | Req | Style |
| --- | --- | --- | --- | --- | --- |
| `sectionGid` | `path` | `section_gid` | `string` | yes | — |
| `optPretty` | `query` | `opt_pretty` | `boolean` | no | — |
| `optFields` | `query` | `opt_fields` | `string[]` | no | `csv` |

| Type | Schema value | Source |
| --- | --- | --- |
| `SectionsResponse2` | `sectionsResponse2Schema` | `src/models/sections-response2.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### getSection

- **Signature**: `getSection(request: Sections.GetSectionRequest, options?: RequestOptions): ApiPromise<SectionsResponse, Sections.GetSectionError>`
- **Wire**: `GET /sections/{section_gid}`
- **Auth**: any of `personalAccessToken`, `oauth2` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SectionsResponse`
- **Error**: `AsanaError` with `kind: "api"`, an instance of `Sections.GetSectionError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"errorResponse5"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Sections.GetSectionRequest` (3):

| Field | Channel | Wire | Type | Req | Style |
| --- | --- | --- | --- | --- | --- |
| `sectionGid` | `path` | `section_gid` | `string` | yes | — |
| `optPretty` | `query` | `opt_pretty` | `boolean` | no | — |
| `optFields` | `query` | `opt_fields` | `string[]` | no | `csv` |

| Type | Schema value | Source |
| --- | --- | --- |
| `SectionsResponse` | `sectionsResponseSchema` | `src/models/sections-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### getSectionsForProject

- **Signature**: `getSectionsForProject(request: Sections.GetSectionsForProjectRequest, options?: RequestOptions): ApiPromise<ProjectsSectionsResponse, Sections.GetSectionsForProjectError>`
- **Wire**: `GET /projects/{project_gid}/sections`
- **Auth**: any of `personalAccessToken`, `oauth2` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ProjectsSectionsResponse`
- **Error**: `AsanaError` with `kind: "api"`, an instance of `Sections.GetSectionsForProjectError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"errorResponse5"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Sections.GetSectionsForProjectRequest` (5):

| Field | Channel | Wire | Type | Req | Style |
| --- | --- | --- | --- | --- | --- |
| `projectGid` | `path` | `project_gid` | `string` | yes | — |
| `optPretty` | `query` | `opt_pretty` | `boolean` | no | — |
| `optFields` | `query` | `opt_fields` | `string[]` | no | `csv` |
| `limit` | `query` | — | `number` | no | — |
| `offset` | `query` | — | `string` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `ProjectsSectionsResponse` | `projectsSectionsResponseSchema` | `src/models/projects-sections-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### insertSectionForProject

- **Signature**: `insertSectionForProject(request: Sections.InsertSectionForProjectRequest, options?: RequestOptions): ApiPromise<ProjectsSectionsInsertResponse, Sections.InsertSectionForProjectError>`
- **Wire**: `POST /projects/{project_gid}/sections/insert`
- **Auth**: any of `personalAccessToken`, `oauth2` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ProjectsSectionsInsertResponse`
- **Error**: `AsanaError` with `kind: "api"`, an instance of `Sections.InsertSectionForProjectError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"errorResponse5"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Sections.InsertSectionForProjectRequest` (4):

| Field | Channel | Wire | Type | Req | Style |
| --- | --- | --- | --- | --- | --- |
| `projectGid` | `path` | `project_gid` | `string` | yes | — |
| `optPretty` | `query` | `opt_pretty` | `boolean` | no | — |
| `optFields` | `query` | `opt_fields` | `string[]` | no | `csv` |
| `body` | `body` | — | `ProjectsSectionsInsertRequest` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `ProjectsSectionsInsertRequest` | `projectsSectionsInsertRequestSchema` | `src/models/projects-sections-insert-request.ts` |
| `ProjectsSectionsInsertResponse` | `projectsSectionsInsertResponseSchema` | `src/models/projects-sections-insert-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### updateSection

- **Signature**: `updateSection(request: Sections.UpdateSectionRequest, options?: RequestOptions): ApiPromise<SectionsResponse, Sections.UpdateSectionError>`
- **Wire**: `PUT /sections/{section_gid}`
- **Auth**: any of `personalAccessToken`, `oauth2` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `SectionsResponse`
- **Error**: `AsanaError` with `kind: "api"`, an instance of `Sections.UpdateSectionError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"errorResponse5"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Sections.UpdateSectionRequest` (4):

| Field | Channel | Wire | Type | Req | Style |
| --- | --- | --- | --- | --- | --- |
| `sectionGid` | `path` | `section_gid` | `string` | yes | — |
| `optPretty` | `query` | `opt_pretty` | `boolean` | no | — |
| `optFields` | `query` | `opt_fields` | `string[]` | no | `csv` |
| `body` | `body` | — | `SectionsRequest` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `SectionsRequest` | `sectionsRequestSchema` | `src/models/sections-request.ts` |
| `SectionsResponse` | `sectionsResponseSchema` | `src/models/sections-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

