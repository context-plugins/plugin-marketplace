<!-- Generated file — do not edit; regenerated with the SDK. -->

# Sections — operations

Accessor: `client.sections` · Source: `src/resources/sections.ts` · 8 operations · Request and error types: namespace `Sections`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `todoist-sdk`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### archiveSectionApiV1SectionsSectionIdArchivePost

- **Signature**: `archiveSectionApiV1SectionsSectionIdArchivePost(request: Sections.ArchiveSectionApiV1SectionsSectionIdArchivePostRequest, options?: RequestOptions): ApiPromise<SectionSyncView, Sections.ArchiveSectionApiV1SectionsSectionIdArchivePostError>`
- **Wire**: `POST /api/v1/sections/{section_id}/archive`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `SectionSyncView`
- **Error**: `TodoistApiError` with `kind: "api"`, an instance of `Sections.ArchiveSectionApiV1SectionsSectionIdArchivePostError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"todoistError"` [400] `TodoistError` · `"todoistError2"` [401] `TodoistError` · `"todoistError3"` [403] `TodoistError` · `"todoistError4"` [404] `TodoistError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Sections.ArchiveSectionApiV1SectionsSectionIdArchivePostRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `sectionId` | `path` | `section_id` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `SectionSyncView` | `sectionSyncViewSchema` | `src/models/section-sync-view.ts` |
| `TodoistError` | `todoistErrorSchema` | `src/models/todoist-error.ts` |

### createSectionApiV1SectionsPost

- **Signature**: `createSectionApiV1SectionsPost(request: Sections.CreateSectionApiV1SectionsPostRequest, options?: RequestOptions): ApiPromise<SectionSyncView, Sections.CreateSectionApiV1SectionsPostError>`
- **Wire**: `POST /api/v1/sections`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `SectionSyncView`
- **Error**: `TodoistApiError` with `kind: "api"`, an instance of `Sections.CreateSectionApiV1SectionsPostError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"todoistError"` [400] `TodoistError` · `"todoistError2"` [401] `TodoistError` · `"todoistError3"` [403] `TodoistError` · `"todoistError4"` [404] `TodoistError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Sections.CreateSectionApiV1SectionsPostRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `Body7` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Body7` | `body7Schema` | `src/models/body7.ts` |
| `SectionSyncView` | `sectionSyncViewSchema` | `src/models/section-sync-view.ts` |
| `TodoistError` | `todoistErrorSchema` | `src/models/todoist-error.ts` |

### deleteSectionApiV1SectionsSectionIdDelete

- **Signature**: `deleteSectionApiV1SectionsSectionIdDelete(request: Sections.DeleteSectionApiV1SectionsSectionIdDeleteRequest, options?: RequestOptions): ApiPromise<undefined, Sections.DeleteSectionApiV1SectionsSectionIdDeleteError>`
- **Wire**: `DELETE /api/v1/sections/{section_id}`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `TodoistApiError` with `kind: "api"`, an instance of `Sections.DeleteSectionApiV1SectionsSectionIdDeleteError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"todoistError"` [400] `TodoistError` · `"todoistError2"` [401] `TodoistError` · `"todoistError3"` [403] `TodoistError` · `"todoistError4"` [404] `TodoistError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Sections.DeleteSectionApiV1SectionsSectionIdDeleteRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `sectionId` | `path` | `section_id` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `TodoistError` | `todoistErrorSchema` | `src/models/todoist-error.ts` |

### getSectionApiV1SectionsSectionIdGet

- **Signature**: `getSectionApiV1SectionsSectionIdGet(request: Sections.GetSectionApiV1SectionsSectionIdGetRequest, options?: RequestOptions): ApiPromise<SectionSyncView, Sections.GetSectionApiV1SectionsSectionIdGetError>`
- **Wire**: `GET /api/v1/sections/{section_id}`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SectionSyncView`
- **Error**: `TodoistApiError` with `kind: "api"`, an instance of `Sections.GetSectionApiV1SectionsSectionIdGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"todoistError"` [400] `TodoistError` · `"todoistError2"` [401] `TodoistError` · `"todoistError3"` [403] `TodoistError` · `"todoistError4"` [404] `TodoistError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Sections.GetSectionApiV1SectionsSectionIdGetRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `sectionId` | `path` | `section_id` | `string` | yes |
| `publicKey` | `query` | `public_key` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `SectionSyncView` | `sectionSyncViewSchema` | `src/models/section-sync-view.ts` |
| `TodoistError` | `todoistErrorSchema` | `src/models/todoist-error.ts` |

### getSectionsApiV1SectionsGet

- **Signature**: `getSectionsApiV1SectionsGet(request?: Sections.GetSectionsApiV1SectionsGetRequest, options?: RequestOptions): ApiPromise<PaginatedList10, Sections.GetSectionsApiV1SectionsGetError>`
- **Wire**: `GET /api/v1/sections`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PaginatedList10`
- **Error**: `TodoistApiError` with `kind: "api"`, an instance of `Sections.GetSectionsApiV1SectionsGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"todoistError"` [400] `TodoistError` · `"todoistError2"` [401] `TodoistError` · `"todoistError3"` [403] `TodoistError` · `"todoistError4"` [404] `TodoistError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Sections.GetSectionsApiV1SectionsGetRequest` (5):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `projectId` | `query` | `project_id` | `string` | no | — |
| `workspaceId` | `query` | `workspace_id` | `number` | no | — |
| `cursor` | `query` | — | `string` | no | — |
| `limit` | `query` | — | `number` | no | `50` |
| `publicKey` | `query` | `public_key` | `string` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `PaginatedList10` | `paginatedList10Schema` | `src/models/paginated-list10.ts` |
| `TodoistError` | `todoistErrorSchema` | `src/models/todoist-error.ts` |

### searchSectionsApiV1SectionsSearchGet

- **Signature**: `searchSectionsApiV1SectionsSearchGet(request: Sections.SearchSectionsApiV1SectionsSearchGetRequest, options?: RequestOptions): ApiPromise<PaginatedList10, Sections.SearchSectionsApiV1SectionsSearchGetError>`
- **Wire**: `GET /api/v1/sections/search`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PaginatedList10`
- **Error**: `TodoistApiError` with `kind: "api"`, an instance of `Sections.SearchSectionsApiV1SectionsSearchGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"todoistError"` [400] `TodoistError` · `"todoistError2"` [401] `TodoistError` · `"todoistError3"` [403] `TodoistError` · `"todoistError4"` [404] `TodoistError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Sections.SearchSectionsApiV1SectionsSearchGetRequest` (5):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `query` | `query` | — | `string` | yes | — |
| `projectId` | `query` | `project_id` | `string` | no | — |
| `workspaceId` | `query` | `workspace_id` | `number` | no | — |
| `cursor` | `query` | — | `string` | no | — |
| `limit` | `query` | — | `number` | no | `50` |

| Type | Schema value | Source |
| --- | --- | --- |
| `PaginatedList10` | `paginatedList10Schema` | `src/models/paginated-list10.ts` |
| `TodoistError` | `todoistErrorSchema` | `src/models/todoist-error.ts` |

### unarchiveSectionApiV1SectionsSectionIdUnarchivePost

- **Signature**: `unarchiveSectionApiV1SectionsSectionIdUnarchivePost(request: Sections.UnarchiveSectionApiV1SectionsSectionIdUnarchivePostRequest, options?: RequestOptions): ApiPromise<SectionSyncView, Sections.UnarchiveSectionApiV1SectionsSectionIdUnarchivePostError>`
- **Wire**: `POST /api/v1/sections/{section_id}/unarchive`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `SectionSyncView`
- **Error**: `TodoistApiError` with `kind: "api"`, an instance of `Sections.UnarchiveSectionApiV1SectionsSectionIdUnarchivePostError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"todoistError"` [400] `TodoistError` · `"todoistError2"` [401] `TodoistError` · `"todoistError3"` [403] `TodoistError` · `"todoistError4"` [404] `TodoistError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Sections.UnarchiveSectionApiV1SectionsSectionIdUnarchivePostRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `sectionId` | `path` | `section_id` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `SectionSyncView` | `sectionSyncViewSchema` | `src/models/section-sync-view.ts` |
| `TodoistError` | `todoistErrorSchema` | `src/models/todoist-error.ts` |

### updateSectionApiV1SectionsSectionIdPost

- **Signature**: `updateSectionApiV1SectionsSectionIdPost(request: Sections.UpdateSectionApiV1SectionsSectionIdPostRequest, options?: RequestOptions): ApiPromise<SectionSyncView, Sections.UpdateSectionApiV1SectionsSectionIdPostError>`
- **Wire**: `POST /api/v1/sections/{section_id}`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `SectionSyncView`
- **Error**: `TodoistApiError` with `kind: "api"`, an instance of `Sections.UpdateSectionApiV1SectionsSectionIdPostError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"todoistError"` [400] `TodoistError` · `"todoistError2"` [401] `TodoistError` · `"todoistError3"` [403] `TodoistError` · `"todoistError4"` [404] `TodoistError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Sections.UpdateSectionApiV1SectionsSectionIdPostRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `sectionId` | `path` | `section_id` | `string` | yes |
| `body` | `body` | — | `Body8` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Body8` | `body8Schema` | `src/models/body8.ts` |
| `SectionSyncView` | `sectionSyncViewSchema` | `src/models/section-sync-view.ts` |
| `TodoistError` | `todoistErrorSchema` | `src/models/todoist-error.ts` |

