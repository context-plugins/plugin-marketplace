<!-- Generated file — do not edit; regenerated with the SDK. -->

# Roles — operations

Accessor: `client.roles` · Source: `src/resources/roles.ts` · 5 operations · Request and error types: namespace `Roles`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `doi-t`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createRole

- **Signature**: `createRole(request: Roles.CreateRoleRequestParams, options?: RequestOptions): ApiPromise<RoleDoiTRolesApi, Roles.CreateRoleError>`
- **Wire**: `POST /iam/v1/roles`
- **Auth**: any of `apiKey`, (all of `tenantId`, `apiKey`) — the first branch fully configured is sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `RoleDoiTRolesApi`
- **Error**: `DoiTError` with `kind: "api"`, an instance of `Roles.CreateRoleError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [403] `Error` · `"error4"` [409] `Error` · `"problemDetails"` [422] `ProblemDetails` · `"error5"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Roles.CreateRoleRequestParams` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `idempotencyKey` | `header` | `Idempotency-Key` | `string` | yes |
| `body` | `body` | — | `CreateRoleRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CreateRoleRequest` | `createRoleRequestSchema` | `src/models/create-role-request.ts` |
| `RoleDoiTRolesApi` | `roleDoiTRolesApiSchema` | `src/models/role-doi-troles-api.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |
| `ProblemDetails` | `problemDetailsSchema` | `src/models/problem-details.ts` |

### deleteRole

- **Signature**: `deleteRole(request: Roles.DeleteRoleRequest, options?: RequestOptions): ApiPromise<undefined, Roles.DeleteRoleError>`
- **Wire**: `DELETE /iam/v1/roles/{id}`
- **Auth**: any of `apiKey`, (all of `tenantId`, `apiKey`) — the first branch fully configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `DoiTError` with `kind: "api"`, an instance of `Roles.DeleteRoleError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [403] `Error` · `"error4"` [404] `Error` · `"error5"` [409] `Error` · `"error6"` [503] `Error` · `"error7"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Roles.DeleteRoleRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Error` | `errorSchema` | `src/models/error.ts` |

### getRole

- **Signature**: `getRole(request: Roles.GetRoleRequest, options?: RequestOptions): ApiPromise<RoleDoiTRolesApi, Roles.GetRoleError>`
- **Wire**: `GET /iam/v1/roles/{id}`
- **Auth**: any of `apiKey`, (all of `tenantId`, `apiKey`) — the first branch fully configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `RoleDoiTRolesApi`
- **Error**: `DoiTError` with `kind: "api"`, an instance of `Roles.GetRoleError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [401] `Error` · `"error2"` [403] `Error` · `"error3"` [404] `Error` · `"error4"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Roles.GetRoleRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `RoleDoiTRolesApi` | `roleDoiTRolesApiSchema` | `src/models/role-doi-troles-api.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### listRoles

- **Signature**: `listRoles(options?: RequestOptions): ApiPromise<IamV1RolesResponse, Roles.ListRolesError>`
- **Wire**: `GET /iam/v1/roles`
- **Auth**: any of `apiKey`, (all of `tenantId`, `apiKey`) — the first branch fully configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `IamV1RolesResponse`
- **Error**: `DoiTError` with `kind: "api"`, an instance of `Roles.ListRolesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [403] `Error` · `"error4"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

| Type | Schema value | Source |
| --- | --- | --- |
| `IamV1RolesResponse` | `iamV1RolesResponseSchema` | `src/models/iam-v1-roles-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### updateRole

- **Signature**: `updateRole(request: Roles.UpdateRoleRequestParams, options?: RequestOptions): ApiPromise<RoleDoiTRolesApi, Roles.UpdateRoleError>`
- **Wire**: `PATCH /iam/v1/roles/{id}`
- **Auth**: any of `apiKey`, (all of `tenantId`, `apiKey`) — the first branch fully configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `RoleDoiTRolesApi`
- **Error**: `DoiTError` with `kind: "api"`, an instance of `Roles.UpdateRoleError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [403] `Error` · `"error4"` [404] `Error` · `"error5"` [409] `Error` · `"error6"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Roles.UpdateRoleRequestParams` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |
| `body` | `body` | `UpdateRoleRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `UpdateRoleRequest` | `updateRoleRequestSchema` | `src/models/update-role-request.ts` |
| `RoleDoiTRolesApi` | `roleDoiTRolesApiSchema` | `src/models/role-doi-troles-api.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

