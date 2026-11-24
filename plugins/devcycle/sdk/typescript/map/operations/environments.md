<!-- Generated file — do not edit; regenerated with the SDK. -->

# Environments — operations

Accessor: `client.environments` · Source: `src/resources/environments.ts` · 7 operations · Request and error types: namespace `Environments`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `dev-cycle`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### environmentsControllerCreate

- **Signature**: `environmentsControllerCreate(request: Environments.EnvironmentsControllerCreateRequest, options?: RequestOptions): ApiPromise<Environment, Environments.EnvironmentsControllerCreateError>`
- **Wire**: `POST /v1/projects/{project}/environments`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Environment`
- **Error**: `DevCycleError` with `kind: "api"`, an instance of `Environments.EnvironmentsControllerCreateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"badRequestErrorResponse"` [400] `BadRequestErrorResponse` · `"error401"` [401] no body · `"error404"` [404] no body · `"conflictErrorResponse"` [409] `ConflictErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Environments.EnvironmentsControllerCreateRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `project` | `path` | `string` | yes |
| `body` | `body` | `CreateEnvironmentDto` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CreateEnvironmentDto` | `createEnvironmentDtoSchema` | `src/models/create-environment-dto.ts` |
| `Environment` | `environmentSchema` | `src/models/environment.ts` |
| `BadRequestErrorResponse` | `badRequestErrorResponseSchema` | `src/models/bad-request-error-response.ts` |
| `ConflictErrorResponse` | `conflictErrorResponseSchema` | `src/models/conflict-error-response.ts` |

### environmentsControllerFindAll

- **Signature**: `environmentsControllerFindAll(request: Environments.EnvironmentsControllerFindAllRequest, options?: RequestOptions): ApiPromise<Environment[], Environments.EnvironmentsControllerFindAllError>`
- **Wire**: `GET /v1/projects/{project}/environments`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Environment[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `DevCycleError` with `kind: "api"`, an instance of `Environments.EnvironmentsControllerFindAllError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"badRequestErrorResponse"` [400] `BadRequestErrorResponse` · `"error401"` [401] no body · `"error403"` [403] no body · `"error404"` [404] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Environments.EnvironmentsControllerFindAllRequest` (7):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `project` | `path` | `string` | yes | — |
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
| `Environment` | `environmentSchema` | `src/models/environment.ts` |
| `BadRequestErrorResponse` | `badRequestErrorResponseSchema` | `src/models/bad-request-error-response.ts` |

### environmentsControllerFindOne

- **Signature**: `environmentsControllerFindOne(request: Environments.EnvironmentsControllerFindOneRequest, options?: RequestOptions): ApiPromise<Environment, Environments.EnvironmentsControllerFindOneError>`
- **Wire**: `GET /v1/projects/{project}/environments/{key}`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Environment`
- **Error**: `DevCycleError` with `kind: "api"`, an instance of `Environments.EnvironmentsControllerFindOneError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error403"` [403] no body · `"notFoundErrorResponse"` [404] `NotFoundErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Environments.EnvironmentsControllerFindOneRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `key` | `path` | `string` | yes |
| `project` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Environment` | `environmentSchema` | `src/models/environment.ts` |
| `NotFoundErrorResponse` | `notFoundErrorResponseSchema` | `src/models/not-found-error-response.ts` |

### environmentsControllerRemove

- **Signature**: `environmentsControllerRemove(request: Environments.EnvironmentsControllerRemoveRequest, options?: RequestOptions): ApiPromise<undefined, Environments.EnvironmentsControllerRemoveError>`
- **Wire**: `DELETE /v1/projects/{project}/environments/{key}`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `DevCycleError` with `kind: "api"`, an instance of `Environments.EnvironmentsControllerRemoveError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error403"` [403] no body · `"notFoundErrorResponse"` [404] `NotFoundErrorResponse` · `"cannotDeleteLastItemErrorResponse"` [405] `CannotDeleteLastItemErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Environments.EnvironmentsControllerRemoveRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `key` | `path` | `string` | yes |
| `project` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `NotFoundErrorResponse` | `notFoundErrorResponseSchema` | `src/models/not-found-error-response.ts` |
| `CannotDeleteLastItemErrorResponse` | `cannotDeleteLastItemErrorResponseSchema` | `src/models/cannot-delete-last-item-error-response.ts` |

### environmentsControllerUpdate

- **Signature**: `environmentsControllerUpdate(request: Environments.EnvironmentsControllerUpdateRequest, options?: RequestOptions): ApiPromise<Environment, Environments.EnvironmentsControllerUpdateError>`
- **Wire**: `PATCH /v1/projects/{project}/environments/{key}`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Environment`
- **Error**: `DevCycleError` with `kind: "api"`, an instance of `Environments.EnvironmentsControllerUpdateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"badRequestErrorResponse"` [400] `BadRequestErrorResponse` · `"error401"` [401] no body · `"notFoundErrorResponse"` [404] `NotFoundErrorResponse` · `"conflictErrorResponse"` [409] `ConflictErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Environments.EnvironmentsControllerUpdateRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `key` | `path` | `string` | yes |
| `project` | `path` | `string` | yes |
| `body` | `body` | `UpdateEnvironmentDto` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `UpdateEnvironmentDto` | `updateEnvironmentDtoSchema` | `src/models/update-environment-dto.ts` |
| `Environment` | `environmentSchema` | `src/models/environment.ts` |
| `BadRequestErrorResponse` | `badRequestErrorResponseSchema` | `src/models/bad-request-error-response.ts` |
| `NotFoundErrorResponse` | `notFoundErrorResponseSchema` | `src/models/not-found-error-response.ts` |
| `ConflictErrorResponse` | `conflictErrorResponseSchema` | `src/models/conflict-error-response.ts` |

### sdkKeysControllerGenerate

- **Signature**: `sdkKeysControllerGenerate(request: Environments.SdkKeysControllerGenerateRequest, options?: RequestOptions): ApiPromise<Environment, Environments.SdkKeysControllerGenerateError>`
- **Wire**: `POST /v1/projects/{project}/environments/{environment}/sdk-keys`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Environment`
- **Error**: `DevCycleError` with `kind: "api"`, an instance of `Environments.SdkKeysControllerGenerateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"badRequestErrorResponse"` [400] `BadRequestErrorResponse` · `"error401"` [401] no body · `"error403"` [403] no body · `"notFoundErrorResponse"` [404] `NotFoundErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Environments.SdkKeysControllerGenerateRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `environment` | `path` | `string` | yes |
| `project` | `path` | `string` | yes |
| `body` | `body` | `GenerateSdkTokensDto` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GenerateSdkTokensDto` | `generateSdkTokensDtoSchema` | `src/models/generate-sdk-tokens-dto.ts` |
| `Environment` | `environmentSchema` | `src/models/environment.ts` |
| `BadRequestErrorResponse` | `badRequestErrorResponseSchema` | `src/models/bad-request-error-response.ts` |
| `NotFoundErrorResponse` | `notFoundErrorResponseSchema` | `src/models/not-found-error-response.ts` |

### sdkKeysControllerInvalidate

- **Signature**: `sdkKeysControllerInvalidate(request: Environments.SdkKeysControllerInvalidateRequest, options?: RequestOptions): ApiPromise<undefined, Environments.SdkKeysControllerInvalidateError>`
- **Wire**: `DELETE /v1/projects/{project}/environments/{environment}/sdk-keys/{key}`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `DevCycleError` with `kind: "api"`, an instance of `Environments.SdkKeysControllerInvalidateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error403"` [403] no body · `"notFoundErrorResponse"` [404] `NotFoundErrorResponse` · `"cannotDeleteLastItemErrorResponse"` [405] `CannotDeleteLastItemErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Environments.SdkKeysControllerInvalidateRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `key` | `path` | `string` | yes |
| `environment` | `path` | `string` | yes |
| `project` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `NotFoundErrorResponse` | `notFoundErrorResponseSchema` | `src/models/not-found-error-response.ts` |
| `CannotDeleteLastItemErrorResponse` | `cannotDeleteLastItemErrorResponseSchema` | `src/models/cannot-delete-last-item-error-response.ts` |

