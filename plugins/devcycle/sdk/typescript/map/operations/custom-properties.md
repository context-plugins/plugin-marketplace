<!-- Generated file — do not edit; regenerated with the SDK. -->

# CustomProperties — operations

Accessor: `client.customProperties` · Source: `src/resources/custom-properties.ts` · 5 operations · Request and error types: namespace `CustomProperties`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `dev-cycle`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### customPropertiesControllerCreate

- **Signature**: `customPropertiesControllerCreate(request: CustomProperties.CustomPropertiesControllerCreateRequest, options?: RequestOptions): ApiPromise<CustomProperty, CustomProperties.CustomPropertiesControllerCreateError>`
- **Wire**: `POST /v1/projects/{project}/customProperties`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `CustomProperty`
- **Error**: `DevCycleError` with `kind: "api"`, an instance of `CustomProperties.CustomPropertiesControllerCreateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"badRequestErrorResponse"` [400] `BadRequestErrorResponse` · `"error401"` [401] no body · `"error403"` [403] no body · `"error404"` [404] no body · `"conflictErrorResponse"` [409] `ConflictErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CustomProperties.CustomPropertiesControllerCreateRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `project` | `path` | `string` | yes |
| `body` | `body` | `CreateCustomPropertyDto` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CreateCustomPropertyDto` | `createCustomPropertyDtoSchema` | `src/models/create-custom-property-dto.ts` |
| `CustomProperty` | `customPropertySchema` | `src/models/custom-property.ts` |
| `BadRequestErrorResponse` | `badRequestErrorResponseSchema` | `src/models/bad-request-error-response.ts` |
| `ConflictErrorResponse` | `conflictErrorResponseSchema` | `src/models/conflict-error-response.ts` |

### customPropertiesControllerFindAll

- **Signature**: `customPropertiesControllerFindAll(request: CustomProperties.CustomPropertiesControllerFindAllRequest, options?: RequestOptions): ApiPromise<CustomProperty[], CustomProperties.CustomPropertiesControllerFindAllError>`
- **Wire**: `GET /v1/projects/{project}/customProperties`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `CustomProperty[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `DevCycleError` with `kind: "api"`, an instance of `CustomProperties.CustomPropertiesControllerFindAllError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"badRequestErrorResponse"` [400] `BadRequestErrorResponse` · `"error401"` [401] no body · `"error403"` [403] no body · `"error404"` [404] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CustomProperties.CustomPropertiesControllerFindAllRequest` (8):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `project` | `path` | `string` | yes | — |
| `page` | `query` | `number` | no | `1` |
| `perPage` | `query` | `number` | no | `100` |
| `sortBy` | `query` | `SortBy` | no | `SortBy.CreatedAt` |
| `sortOrder` | `query` | `SortOrder` | no | `SortOrder.Desc` |
| `search` | `query` | `string` | no | — |
| `type` | `query` | `Type3` | no | — |
| `includeUsage` | `query` | `boolean` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `SortBy` | `sortBySchema` | `src/models/sort-by.ts` |
| `SortOrder` | `sortOrderSchema` | `src/models/sort-order.ts` |
| `Type3` | `type3Schema` | `src/models/type3.ts` |
| `CustomProperty` | `customPropertySchema` | `src/models/custom-property.ts` |
| `BadRequestErrorResponse` | `badRequestErrorResponseSchema` | `src/models/bad-request-error-response.ts` |

### customPropertiesControllerFindOne

- **Signature**: `customPropertiesControllerFindOne(request: CustomProperties.CustomPropertiesControllerFindOneRequest, options?: RequestOptions): ApiPromise<CustomProperty, CustomProperties.CustomPropertiesControllerFindOneError>`
- **Wire**: `GET /v1/projects/{project}/customProperties/{key}`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `CustomProperty`
- **Error**: `DevCycleError` with `kind: "api"`, an instance of `CustomProperties.CustomPropertiesControllerFindOneError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error403"` [403] no body · `"error404"` [404] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CustomProperties.CustomPropertiesControllerFindOneRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `key` | `path` | `string` | yes |
| `project` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CustomProperty` | `customPropertySchema` | `src/models/custom-property.ts` |

### customPropertiesControllerRemove

- **Signature**: `customPropertiesControllerRemove(request: CustomProperties.CustomPropertiesControllerRemoveRequest, options?: RequestOptions): ApiPromise<undefined, CustomProperties.CustomPropertiesControllerRemoveError>`
- **Wire**: `DELETE /v1/projects/{project}/customProperties/{key}`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `DevCycleError` with `kind: "api"`, an instance of `CustomProperties.CustomPropertiesControllerRemoveError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error404"` [404] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CustomProperties.CustomPropertiesControllerRemoveRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `key` | `path` | `string` | yes |
| `project` | `path` | `string` | yes |

### customPropertiesControllerUpdate

- **Signature**: `customPropertiesControllerUpdate(request: CustomProperties.CustomPropertiesControllerUpdateRequest, options?: RequestOptions): ApiPromise<CustomProperty, CustomProperties.CustomPropertiesControllerUpdateError>`
- **Wire**: `PATCH /v1/projects/{project}/customProperties/{key}`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `CustomProperty`
- **Error**: `DevCycleError` with `kind: "api"`, an instance of `CustomProperties.CustomPropertiesControllerUpdateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"badRequestErrorResponse"` [400] `BadRequestErrorResponse` · `"error401"` [401] no body · `"error404"` [404] no body · `"conflictErrorResponse"` [409] `ConflictErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CustomProperties.CustomPropertiesControllerUpdateRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `key` | `path` | `string` | yes |
| `project` | `path` | `string` | yes |
| `body` | `body` | `UpdateCustomPropertyDto` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `UpdateCustomPropertyDto` | `updateCustomPropertyDtoSchema` | `src/models/update-custom-property-dto.ts` |
| `CustomProperty` | `customPropertySchema` | `src/models/custom-property.ts` |
| `BadRequestErrorResponse` | `badRequestErrorResponseSchema` | `src/models/bad-request-error-response.ts` |
| `ConflictErrorResponse` | `conflictErrorResponseSchema` | `src/models/conflict-error-response.ts` |

