<!-- Generated file — do not edit; regenerated with the SDK. -->

# Projects — operations

Accessor: `client.projects` · Source: `src/resources/projects.ts` · 8 operations · Request and error types: namespace `Projects`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `dev-cycle`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### projectsControllerCreate

- **Signature**: `projectsControllerCreate(request: Projects.ProjectsControllerCreateRequest, options?: RequestOptions): ApiPromise<Project, Projects.ProjectsControllerCreateError>`
- **Wire**: `POST /v1/projects`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Project`
- **Error**: `DevCycleError` with `kind: "api"`, an instance of `Projects.ProjectsControllerCreateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"badRequestErrorResponse"` [400] `BadRequestErrorResponse` · `"error403"` [403] no body · `"conflictErrorResponse"` [409] `ConflictErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Projects.ProjectsControllerCreateRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `CreateProjectDto` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CreateProjectDto` | `createProjectDtoSchema` | `src/models/create-project-dto.ts` |
| `Project` | `projectSchema` | `src/models/project.ts` |
| `BadRequestErrorResponse` | `badRequestErrorResponseSchema` | `src/models/bad-request-error-response.ts` |
| `ConflictErrorResponse` | `conflictErrorResponseSchema` | `src/models/conflict-error-response.ts` |

### projectsControllerFindAll

- **Signature**: `projectsControllerFindAll(request?: Projects.ProjectsControllerFindAllRequest, options?: RequestOptions): ApiPromise<Project[], Projects.ProjectsControllerFindAllError>`
- **Wire**: `GET /v1/projects`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Project[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `DevCycleError` with `kind: "api"`, an instance of `Projects.ProjectsControllerFindAllError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"badRequestErrorResponse"` [400] `BadRequestErrorResponse` · `"error403"` [403] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Projects.ProjectsControllerFindAllRequest` (6):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `page` | `query` | `number` | no | `1` |
| `perPage` | `query` | `number` | no | `100` |
| `sortBy` | `query` | `SortBy` | no | `SortBy.CreatedAt` |
| `sortOrder` | `query` | `SortOrder` | no | `SortOrder.Desc` |
| `search` | `query` | `string` | no | — |
| `createdBy` | `query` | `string` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `SortBy` | `sortBySchema` | `src/models/sort-by.ts` |
| `SortOrder` | `sortOrderSchema` | `src/models/sort-order.ts` |
| `Project` | `projectSchema` | `src/models/project.ts` |
| `BadRequestErrorResponse` | `badRequestErrorResponseSchema` | `src/models/bad-request-error-response.ts` |

### projectsControllerFindOne

- **Signature**: `projectsControllerFindOne(request: Projects.ProjectsControllerFindOneRequest, options?: RequestOptions): ApiPromise<Project, Projects.ProjectsControllerFindOneError>`
- **Wire**: `GET /v1/projects/{key}`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Project`
- **Error**: `DevCycleError` with `kind: "api"`, an instance of `Projects.ProjectsControllerFindOneError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error403"` [403] no body · `"notFoundErrorResponse"` [404] `NotFoundErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Projects.ProjectsControllerFindOneRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `key` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Project` | `projectSchema` | `src/models/project.ts` |
| `NotFoundErrorResponse` | `notFoundErrorResponseSchema` | `src/models/not-found-error-response.ts` |

### projectsControllerGetStaleness

- **Signature**: `projectsControllerGetStaleness(request: Projects.ProjectsControllerGetStalenessRequest, options?: RequestOptions): ApiPromise<FeatureStalenessEntity[], Projects.ProjectsControllerGetStalenessError>`
- **Wire**: `GET /v1/projects/{key}/staleness`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `FeatureStalenessEntity[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `DevCycleError` with `kind: "api"`, an instance of `Projects.ProjectsControllerGetStalenessError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error403"` [403] no body · `"notFoundErrorResponse"` [404] `NotFoundErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Projects.ProjectsControllerGetStalenessRequest` (8):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `key` | `path` | `string` | yes | — |
| `page` | `query` | `number` | no | `1` |
| `perPage` | `query` | `number` | no | `100` |
| `sortBy` | `query` | `SortBy` | no | `SortBy.CreatedAt` |
| `sortOrder` | `query` | `SortOrder` | no | `SortOrder.Desc` |
| `search` | `query` | `string` | no | — |
| `createdBy` | `query` | `string` | no | — |
| `includeSilenced` | `query` | `boolean` | no | `false` |

| Type | Schema value | Source |
| --- | --- | --- |
| `SortBy` | `sortBySchema` | `src/models/sort-by.ts` |
| `SortOrder` | `sortOrderSchema` | `src/models/sort-order.ts` |
| `FeatureStalenessEntity` | `featureStalenessEntitySchema` | `src/models/feature-staleness-entity.ts` |
| `NotFoundErrorResponse` | `notFoundErrorResponseSchema` | `src/models/not-found-error-response.ts` |

### projectsControllerRemove

- **Signature**: `projectsControllerRemove(request: Projects.ProjectsControllerRemoveRequest, options?: RequestOptions): ApiPromise<undefined, Projects.ProjectsControllerRemoveError>`
- **Wire**: `DELETE /v1/projects/{key}`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `DevCycleError` with `kind: "api"`, an instance of `Projects.ProjectsControllerRemoveError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error403"` [403] no body · `"notFoundErrorResponse"` [404] `NotFoundErrorResponse` · `"cannotDeleteLastItemErrorResponse"` [405] `CannotDeleteLastItemErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Projects.ProjectsControllerRemoveRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `key` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `NotFoundErrorResponse` | `notFoundErrorResponseSchema` | `src/models/not-found-error-response.ts` |
| `CannotDeleteLastItemErrorResponse` | `cannotDeleteLastItemErrorResponseSchema` | `src/models/cannot-delete-last-item-error-response.ts` |

### projectsControllerUpdate

- **Signature**: `projectsControllerUpdate(request: Projects.ProjectsControllerUpdateRequest, options?: RequestOptions): ApiPromise<Project, Projects.ProjectsControllerUpdateError>`
- **Wire**: `PATCH /v1/projects/{key}`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Project`
- **Error**: `DevCycleError` with `kind: "api"`, an instance of `Projects.ProjectsControllerUpdateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"badRequestErrorResponse"` [400] `BadRequestErrorResponse` · `"error403"` [403] no body · `"notFoundErrorResponse"` [404] `NotFoundErrorResponse` · `"conflictErrorResponse"` [409] `ConflictErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Projects.ProjectsControllerUpdateRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `key` | `path` | `string` | yes |
| `body` | `body` | `UpdateProjectDto` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `UpdateProjectDto` | `updateProjectDtoSchema` | `src/models/update-project-dto.ts` |
| `Project` | `projectSchema` | `src/models/project.ts` |
| `BadRequestErrorResponse` | `badRequestErrorResponseSchema` | `src/models/bad-request-error-response.ts` |
| `NotFoundErrorResponse` | `notFoundErrorResponseSchema` | `src/models/not-found-error-response.ts` |
| `ConflictErrorResponse` | `conflictErrorResponseSchema` | `src/models/conflict-error-response.ts` |

### projectsControllerUpdateProtectedSettings

- **Signature**: `projectsControllerUpdateProtectedSettings(request: Projects.ProjectsControllerUpdateProtectedSettingsRequest, options?: RequestOptions): ApiPromise<Project, Projects.ProjectsControllerUpdateProtectedSettingsError>`
- **Wire**: `PATCH /v1/projects/{key}/settings/protected`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Project`
- **Error**: `DevCycleError` with `kind: "api"`, an instance of `Projects.ProjectsControllerUpdateProtectedSettingsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"badRequestErrorResponse"` [400] `BadRequestErrorResponse` · `"error403"` [403] no body · `"notFoundErrorResponse"` [404] `NotFoundErrorResponse` · `"conflictErrorResponse"` [409] `ConflictErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Projects.ProjectsControllerUpdateProtectedSettingsRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `key` | `path` | `string` | yes |
| `body` | `body` | `UpdateProtectedProjectSettingsDto` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `UpdateProtectedProjectSettingsDto` | `updateProtectedProjectSettingsDtoSchema` | `src/models/update-protected-project-settings-dto.ts` |
| `Project` | `projectSchema` | `src/models/project.ts` |
| `BadRequestErrorResponse` | `badRequestErrorResponseSchema` | `src/models/bad-request-error-response.ts` |
| `NotFoundErrorResponse` | `notFoundErrorResponseSchema` | `src/models/not-found-error-response.ts` |
| `ConflictErrorResponse` | `conflictErrorResponseSchema` | `src/models/conflict-error-response.ts` |

### projectsControllerUpdateSettings

- **Signature**: `projectsControllerUpdateSettings(request: Projects.ProjectsControllerUpdateSettingsRequest, options?: RequestOptions): ApiPromise<Project, Projects.ProjectsControllerUpdateSettingsError>`
- **Wire**: `PATCH /v1/projects/{key}/settings`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Project`
- **Error**: `DevCycleError` with `kind: "api"`, an instance of `Projects.ProjectsControllerUpdateSettingsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"badRequestErrorResponse"` [400] `BadRequestErrorResponse` · `"error403"` [403] no body · `"notFoundErrorResponse"` [404] `NotFoundErrorResponse` · `"conflictErrorResponse"` [409] `ConflictErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Projects.ProjectsControllerUpdateSettingsRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `key` | `path` | `string` | yes |
| `body` | `body` | `UpdateProjectSettingsDto` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `UpdateProjectSettingsDto` | `updateProjectSettingsDtoSchema` | `src/models/update-project-settings-dto.ts` |
| `Project` | `projectSchema` | `src/models/project.ts` |
| `BadRequestErrorResponse` | `badRequestErrorResponseSchema` | `src/models/bad-request-error-response.ts` |
| `NotFoundErrorResponse` | `notFoundErrorResponseSchema` | `src/models/not-found-error-response.ts` |
| `ConflictErrorResponse` | `conflictErrorResponseSchema` | `src/models/conflict-error-response.ts` |

