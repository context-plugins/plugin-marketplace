<!-- Generated file — do not edit; regenerated with the SDK. -->

# Audiences — operations

Accessor: `client.audiences` · Source: `src/resources/audiences.ts` · 6 operations · Request and error types: namespace `Audiences`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `dev-cycle`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### audiencesControllerCreate

- **Signature**: `audiencesControllerCreate(request: Audiences.AudiencesControllerCreateRequest, options?: RequestOptions): ApiPromise<Audience, Audiences.AudiencesControllerCreateError>`
- **Wire**: `POST /v1/projects/{project}/audiences`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Audience`
- **Error**: `DevCycleError` with `kind: "api"`, an instance of `Audiences.AudiencesControllerCreateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"badRequestErrorResponse"` [400] `BadRequestErrorResponse` · `"error401"` [401] no body · `"error403"` [403] no body · `"error404"` [404] no body · `"conflictErrorResponse"` [409] `ConflictErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Audiences.AudiencesControllerCreateRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `project` | `path` | `string` | yes |
| `body` | `body` | `CreateAudienceDto` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CreateAudienceDto` | `createAudienceDtoSchema` | `src/models/create-audience-dto.ts` |
| `Audience` | `audienceSchema` | `src/models/audience.ts` |
| `BadRequestErrorResponse` | `badRequestErrorResponseSchema` | `src/models/bad-request-error-response.ts` |
| `ConflictErrorResponse` | `conflictErrorResponseSchema` | `src/models/conflict-error-response.ts` |

### audiencesControllerFindAll

- **Signature**: `audiencesControllerFindAll(request: Audiences.AudiencesControllerFindAllRequest, options?: RequestOptions): ApiPromise<Audience[], Audiences.AudiencesControllerFindAllError>`
- **Wire**: `GET /v1/projects/{project}/audiences`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Audience[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `DevCycleError` with `kind: "api"`, an instance of `Audiences.AudiencesControllerFindAllError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error403"` [403] no body · `"error404"` [404] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Audiences.AudiencesControllerFindAllRequest` (8):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `project` | `path` | `string` | yes | — |
| `page` | `query` | `number` | no | `1` |
| `perPage` | `query` | `number` | no | `100` |
| `sortBy` | `query` | `SortBy` | no | `SortBy.CreatedAt` |
| `sortOrder` | `query` | `SortOrder` | no | `SortOrder.Desc` |
| `search` | `query` | `string` | no | — |
| `createdBy` | `query` | `string` | no | — |
| `includeUsage` | `query` | `boolean` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `SortBy` | `sortBySchema` | `src/models/sort-by.ts` |
| `SortOrder` | `sortOrderSchema` | `src/models/sort-order.ts` |
| `Audience` | `audienceSchema` | `src/models/audience.ts` |

### audiencesControllerFindOne

- **Signature**: `audiencesControllerFindOne(request: Audiences.AudiencesControllerFindOneRequest, options?: RequestOptions): ApiPromise<Audience, Audiences.AudiencesControllerFindOneError>`
- **Wire**: `GET /v1/projects/{project}/audiences/{key}`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Audience`
- **Error**: `DevCycleError` with `kind: "api"`, an instance of `Audiences.AudiencesControllerFindOneError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error403"` [403] no body · `"notFoundErrorResponse"` [404] `NotFoundErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Audiences.AudiencesControllerFindOneRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `key` | `path` | `string` | yes |
| `project` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Audience` | `audienceSchema` | `src/models/audience.ts` |
| `NotFoundErrorResponse` | `notFoundErrorResponseSchema` | `src/models/not-found-error-response.ts` |

### audiencesControllerFindUsages

- **Signature**: `audiencesControllerFindUsages(request: Audiences.AudiencesControllerFindUsagesRequest, options?: RequestOptions): ApiPromise<AudienceUsage, Audiences.AudiencesControllerFindUsagesError>`
- **Wire**: `GET /v1/projects/{project}/audiences/{key}/usage`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `AudienceUsage`
- **Error**: `DevCycleError` with `kind: "api"`, an instance of `Audiences.AudiencesControllerFindUsagesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error403"` [403] no body · `"notFoundErrorResponse"` [404] `NotFoundErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Audiences.AudiencesControllerFindUsagesRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `key` | `path` | `string` | yes |
| `project` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `AudienceUsage` | `audienceUsageSchema` | `src/models/audience-usage.ts` |
| `NotFoundErrorResponse` | `notFoundErrorResponseSchema` | `src/models/not-found-error-response.ts` |

### audiencesControllerRemove

- **Signature**: `audiencesControllerRemove(request: Audiences.AudiencesControllerRemoveRequest, options?: RequestOptions): ApiPromise<undefined, Audiences.AudiencesControllerRemoveError>`
- **Wire**: `DELETE /v1/projects/{project}/audiences/{key}`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `DevCycleError` with `kind: "api"`, an instance of `Audiences.AudiencesControllerRemoveError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"notFoundErrorResponse"` [404] `NotFoundErrorResponse` · `"error412"` [412] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Audiences.AudiencesControllerRemoveRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `key` | `path` | `string` | yes |
| `project` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `NotFoundErrorResponse` | `notFoundErrorResponseSchema` | `src/models/not-found-error-response.ts` |

### audiencesControllerUpdate

- **Signature**: `audiencesControllerUpdate(request: Audiences.AudiencesControllerUpdateRequest, options?: RequestOptions): ApiPromise<Audience, Audiences.AudiencesControllerUpdateError>`
- **Wire**: `PATCH /v1/projects/{project}/audiences/{key}`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Audience`
- **Error**: `DevCycleError` with `kind: "api"`, an instance of `Audiences.AudiencesControllerUpdateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"badRequestErrorResponse"` [400] `BadRequestErrorResponse` · `"error401"` [401] no body · `"notFoundErrorResponse"` [404] `NotFoundErrorResponse` · `"conflictErrorResponse"` [409] `ConflictErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Audiences.AudiencesControllerUpdateRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `key` | `path` | `string` | yes |
| `project` | `path` | `string` | yes |
| `body` | `body` | `UpdateAudienceDto` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `UpdateAudienceDto` | `updateAudienceDtoSchema` | `src/models/update-audience-dto.ts` |
| `Audience` | `audienceSchema` | `src/models/audience.ts` |
| `BadRequestErrorResponse` | `badRequestErrorResponseSchema` | `src/models/bad-request-error-response.ts` |
| `NotFoundErrorResponse` | `notFoundErrorResponseSchema` | `src/models/not-found-error-response.ts` |
| `ConflictErrorResponse` | `conflictErrorResponseSchema` | `src/models/conflict-error-response.ts` |

