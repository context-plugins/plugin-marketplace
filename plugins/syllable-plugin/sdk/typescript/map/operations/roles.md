<!-- Generated file — do not edit; regenerated with the SDK. -->

# Roles — operations

Accessor: `client.roles` · Source: `src/resources/roles.ts` · 5 operations · Request and error types: namespace `Roles`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `syllable-sdk`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### rolesCreate

- **Signature**: `rolesCreate(request: Roles.RolesCreateRequest, options?: RequestOptions): ApiPromise<RoleResponse, Roles.RolesCreateError>`
- **Wire**: `POST /api/v1/roles/`
- **Auth**: `apiKeyHeader`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `RoleResponse`
- **Error**: `SyllableSdkError` with `kind: "api"`, an instance of `Roles.RolesCreateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"httpValidationError"` [422] `HttpValidationError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Roles.RolesCreateRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `RoleCreateRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `RoleCreateRequest` | `roleCreateRequestSchema` | `src/models/role-create-request.ts` |
| `RoleResponse` | `roleResponseSchema` | `src/models/role-response.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### rolesDelete

- **Signature**: `rolesDelete(request: Roles.RolesDeleteRequest, options?: RequestOptions): ApiPromise<Record<string, unknown>, Roles.RolesDeleteError>`
- **Wire**: `DELETE /api/v1/roles/{role_id}`
- **Auth**: `apiKeyHeader`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `SyllableSdkError` with `kind: "api"`, an instance of `Roles.RolesDeleteError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"httpValidationError"` [422] `HttpValidationError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Roles.RolesDeleteRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `roleId` | `path` | `role_id` | `number` | yes |
| `reason` | `query` | — | `string` | yes |
| `newRoleId` | `query` | `new_role_id` | `NewRoleId` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `NewRoleId` | `newRoleIdSchema` | `src/models/unions/new-role-id.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### rolesGetById

- **Signature**: `rolesGetById(request: Roles.RolesGetByIdRequest, options?: RequestOptions): ApiPromise<RoleResponse, Roles.RolesGetByIdError>`
- **Wire**: `GET /api/v1/roles/{role_id}`
- **Auth**: `apiKeyHeader`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `RoleResponse`
- **Error**: `SyllableSdkError` with `kind: "api"`, an instance of `Roles.RolesGetByIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"httpValidationError"` [422] `HttpValidationError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Roles.RolesGetByIdRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `roleId` | `path` | `role_id` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `RoleResponse` | `roleResponseSchema` | `src/models/role-response.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### rolesList

- **Signature**: `rolesList(request: Roles.RolesListRequest, options?: RequestOptions): ApiPromise<ListResponseRoleResponse, Roles.RolesListError>`
- **Wire**: `GET /api/v1/roles/`
- **Auth**: `apiKeyHeader`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListResponseRoleResponse`
- **Error**: `SyllableSdkError` with `kind: "api"`, an instance of `Roles.RolesListError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"httpValidationError"` [422] `HttpValidationError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Roles.RolesListRequest` (9):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `page` | `query` | — | `Page` | no | — |
| `limit` | `query` | — | `number` | no | `25` |
| `searchFields` | `query` | `search_fields` | `RoleProperties[]` | no | — |
| `searchFieldValues` | `query` | `search_field_values` | `string[]` | no | — |
| `orderBy` | `query` | `order_by` | `OrderBy11` | no | — |
| `orderByDirection` | `query` | `order_by_direction` | `OrderByDirection1` | no | — |
| `fields` | `query` | — | `Fields1` | no | — |
| `startDatetime` | `query` | `start_datetime` | `StartDatetime3` | no | — |
| `endDatetime` | `query` | `end_datetime` | `EndDatetime3` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Page` | `pageSchema` | `src/models/unions/page.ts` |
| `RoleProperties` | `rolePropertiesSchema` | `src/models/role-properties.ts` |
| `OrderBy11` | `orderBy11Schema` | `src/models/unions/order-by11.ts` |
| `OrderByDirection1` | `orderByDirection1Schema` | `src/models/unions/order-by-direction1.ts` |
| `Fields1` | `fields1Schema` | `src/models/unions/fields1.ts` |
| `StartDatetime3` | `startDatetime3Schema` | `src/models/unions/start-datetime3.ts` |
| `EndDatetime3` | `endDatetime3Schema` | `src/models/unions/end-datetime3.ts` |
| `ListResponseRoleResponse` | `listResponseRoleResponseSchema` | `src/models/list-response-role-response.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### rolesUpdate

- **Signature**: `rolesUpdate(request: Roles.RolesUpdateRequest, options?: RequestOptions): ApiPromise<RoleResponse, Roles.RolesUpdateError>`
- **Wire**: `PUT /api/v1/roles/`
- **Auth**: `apiKeyHeader`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `RoleResponse`
- **Error**: `SyllableSdkError` with `kind: "api"`, an instance of `Roles.RolesUpdateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"httpValidationError"` [422] `HttpValidationError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Roles.RolesUpdateRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `RoleUpdateRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `RoleUpdateRequest` | `roleUpdateRequestSchema` | `src/models/role-update-request.ts` |
| `RoleResponse` | `roleResponseSchema` | `src/models/role-response.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

