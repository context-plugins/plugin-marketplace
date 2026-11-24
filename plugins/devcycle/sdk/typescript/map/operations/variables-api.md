<!-- Generated file — do not edit; regenerated with the SDK. -->

# VariablesApi — operations

Accessor: `client.variablesApi` · Source: `src/resources/variables-api.ts` · 6 operations · Request and error types: namespace `VariablesApi`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `dev-cycle`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### variablesControllerCreate

- **Signature**: `variablesControllerCreate(request: VariablesApi.VariablesControllerCreateRequest, options?: RequestOptions): ApiPromise<VariableDevCycleManagementVariablesApi, VariablesApi.VariablesControllerCreateError>`
- **Wire**: `POST /v1/projects/{project}/variables`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `VariableDevCycleManagementVariablesApi`
- **Error**: `DevCycleError` with `kind: "api"`, an instance of `VariablesApi.VariablesControllerCreateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"badRequestErrorResponse"` [400] `BadRequestErrorResponse` · `"error401"` [401] no body · `"error403"` [403] no body · `"error404"` [404] no body · `"conflictErrorResponse"` [409] `ConflictErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `VariablesApi.VariablesControllerCreateRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `project` | `path` | `string` | yes |
| `body` | `body` | `CreateVariableDtoDevCycleManagementVariablesApi` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CreateVariableDtoDevCycleManagementVariablesApi` | `createVariableDtoDevCycleManagementVariablesApiSchema` | `src/models/create-variable-dto-dev-cycle-management-variables-api.ts` |
| `VariableDevCycleManagementVariablesApi` | `variableDevCycleManagementVariablesApiSchema` | `src/models/variable-dev-cycle-management-variables-api.ts` |
| `BadRequestErrorResponse` | `badRequestErrorResponseSchema` | `src/models/bad-request-error-response.ts` |
| `ConflictErrorResponse` | `conflictErrorResponseSchema` | `src/models/conflict-error-response.ts` |

### variablesControllerFindAll

- **Signature**: `variablesControllerFindAll(request: VariablesApi.VariablesControllerFindAllRequest, options?: RequestOptions): ApiPromise<VariableDevCycleManagementVariablesApi[], VariablesApi.VariablesControllerFindAllError>`
- **Wire**: `GET /v1/projects/{project}/variables`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `VariableDevCycleManagementVariablesApi[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `DevCycleError` with `kind: "api"`, an instance of `VariablesApi.VariablesControllerFindAllError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"badRequestErrorResponse"` [400] `BadRequestErrorResponse` · `"error401"` [401] no body · `"error403"` [403] no body · `"error404"` [404] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `VariablesApi.VariablesControllerFindAllRequest` (9):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `project` | `path` | `string` | yes | — |
| `page` | `query` | `number` | no | `1` |
| `perPage` | `query` | `number` | no | `100` |
| `sortBy` | `query` | `SortBy` | no | `SortBy.CreatedAt` |
| `sortOrder` | `query` | `SortOrder` | no | `SortOrder.Desc` |
| `search` | `query` | `string` | no | — |
| `feature` | `query` | `string` | no | — |
| `type` | `query` | `Type3DevCycleManagementVariablesApi` | no | — |
| `status` | `query` | `Status2DevCycleManagementVariablesApi` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `SortBy` | `sortBySchema` | `src/models/sort-by.ts` |
| `SortOrder` | `sortOrderSchema` | `src/models/sort-order.ts` |
| `Type3DevCycleManagementVariablesApi` | `type3DevCycleManagementVariablesApiSchema` | `src/models/type3-dev-cycle-management-variables-api.ts` |
| `Status2DevCycleManagementVariablesApi` | `status2DevCycleManagementVariablesApiSchema` | `src/models/status2-dev-cycle-management-variables-api.ts` |
| `VariableDevCycleManagementVariablesApi` | `variableDevCycleManagementVariablesApiSchema` | `src/models/variable-dev-cycle-management-variables-api.ts` |
| `BadRequestErrorResponse` | `badRequestErrorResponseSchema` | `src/models/bad-request-error-response.ts` |

### variablesControllerFindOne

- **Signature**: `variablesControllerFindOne(request: VariablesApi.VariablesControllerFindOneRequest, options?: RequestOptions): ApiPromise<VariableDevCycleManagementVariablesApi, VariablesApi.VariablesControllerFindOneError>`
- **Wire**: `GET /v1/projects/{project}/variables/{key}`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `VariableDevCycleManagementVariablesApi`
- **Error**: `DevCycleError` with `kind: "api"`, an instance of `VariablesApi.VariablesControllerFindOneError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error403"` [403] no body · `"notFoundErrorResponse"` [404] `NotFoundErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `VariablesApi.VariablesControllerFindOneRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `key` | `path` | `string` | yes |
| `project` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `VariableDevCycleManagementVariablesApi` | `variableDevCycleManagementVariablesApiSchema` | `src/models/variable-dev-cycle-management-variables-api.ts` |
| `NotFoundErrorResponse` | `notFoundErrorResponseSchema` | `src/models/not-found-error-response.ts` |

### variablesControllerRemove

- **Signature**: `variablesControllerRemove(request: VariablesApi.VariablesControllerRemoveRequest, options?: RequestOptions): ApiPromise<undefined, VariablesApi.VariablesControllerRemoveError>`
- **Wire**: `DELETE /v1/projects/{project}/variables/{key}`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `DevCycleError` with `kind: "api"`, an instance of `VariablesApi.VariablesControllerRemoveError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error403"` [403] no body · `"notFoundErrorResponse"` [404] `NotFoundErrorResponse` · `"preconditionFailedErrorResponse"` [412] `PreconditionFailedErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `VariablesApi.VariablesControllerRemoveRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `key` | `path` | `string` | yes |
| `project` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `NotFoundErrorResponse` | `notFoundErrorResponseSchema` | `src/models/not-found-error-response.ts` |
| `PreconditionFailedErrorResponse` | `preconditionFailedErrorResponseSchema` | `src/models/precondition-failed-error-response.ts` |

### variablesControllerUpdate

- **Signature**: `variablesControllerUpdate(request: VariablesApi.VariablesControllerUpdateRequest, options?: RequestOptions): ApiPromise<VariableDevCycleManagementVariablesApi, VariablesApi.VariablesControllerUpdateError>`
- **Wire**: `PATCH /v1/projects/{project}/variables/{key}`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `VariableDevCycleManagementVariablesApi`
- **Error**: `DevCycleError` with `kind: "api"`, an instance of `VariablesApi.VariablesControllerUpdateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"badRequestErrorResponse"` [400] `BadRequestErrorResponse` · `"error401"` [401] no body · `"notFoundErrorResponse"` [404] `NotFoundErrorResponse` · `"conflictErrorResponse"` [409] `ConflictErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `VariablesApi.VariablesControllerUpdateRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `key` | `path` | `string` | yes |
| `project` | `path` | `string` | yes |
| `body` | `body` | `UpdateVariableDto` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `UpdateVariableDto` | `updateVariableDtoSchema` | `src/models/update-variable-dto.ts` |
| `VariableDevCycleManagementVariablesApi` | `variableDevCycleManagementVariablesApiSchema` | `src/models/variable-dev-cycle-management-variables-api.ts` |
| `BadRequestErrorResponse` | `badRequestErrorResponseSchema` | `src/models/bad-request-error-response.ts` |
| `NotFoundErrorResponse` | `notFoundErrorResponseSchema` | `src/models/not-found-error-response.ts` |
| `ConflictErrorResponse` | `conflictErrorResponseSchema` | `src/models/conflict-error-response.ts` |

### variablesControllerUpdateStatus

- **Signature**: `variablesControllerUpdateStatus(request: VariablesApi.VariablesControllerUpdateStatusRequest, options?: RequestOptions): ApiPromise<VariableDevCycleManagementVariablesApi, VariablesApi.VariablesControllerUpdateStatusError>`
- **Wire**: `PATCH /v1/projects/{project}/variables/{key}/status`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `VariableDevCycleManagementVariablesApi`
- **Error**: `DevCycleError` with `kind: "api"`, an instance of `VariablesApi.VariablesControllerUpdateStatusError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"badRequestErrorResponse"` [400] `BadRequestErrorResponse` · `"error401"` [401] no body · `"notFoundErrorResponse"` [404] `NotFoundErrorResponse` · `"preconditionFailedErrorResponse"` [412] `PreconditionFailedErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `VariablesApi.VariablesControllerUpdateStatusRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `key` | `path` | `string` | yes |
| `project` | `path` | `string` | yes |
| `body` | `body` | `UpdateVariableStatusDto` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `UpdateVariableStatusDto` | `updateVariableStatusDtoSchema` | `src/models/update-variable-status-dto.ts` |
| `VariableDevCycleManagementVariablesApi` | `variableDevCycleManagementVariablesApiSchema` | `src/models/variable-dev-cycle-management-variables-api.ts` |
| `BadRequestErrorResponse` | `badRequestErrorResponseSchema` | `src/models/bad-request-error-response.ts` |
| `NotFoundErrorResponse` | `notFoundErrorResponseSchema` | `src/models/not-found-error-response.ts` |
| `PreconditionFailedErrorResponse` | `preconditionFailedErrorResponseSchema` | `src/models/precondition-failed-error-response.ts` |

