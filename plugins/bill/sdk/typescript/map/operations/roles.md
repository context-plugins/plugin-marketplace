<!-- Generated file — do not edit; regenerated with the SDK. -->

# Roles — operations

Accessor: `client.roles` · Source: `src/resources/roles.ts` · 2 operations · Request and error types: namespace `Roles`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `bill`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getOrganizationUserRole

- **Signature**: `getOrganizationUserRole(request: Roles.GetOrganizationUserRoleRequest, options?: RequestOptions): ApiPromise<RoleResponseDto, Roles.GetOrganizationUserRoleError>`
- **Wire**: `GET /v3/roles/{roleId}`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `RoleResponseDto`
- **Error**: `BillError` with `kind: "api"`, an instance of `Roles.GetOrganizationUserRoleError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error4XX"` [4XX wildcard] `BdcError[]` · `"error5XX"` [5XX wildcard] `BdcError[]` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Roles.GetOrganizationUserRoleRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `roleId` | `path` | `string` | yes |
| `sessionId` | `header` | `string` | no |
| `devKey` | `header` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `RoleResponseDto` | `roleResponseDtoSchema` | `src/models/role-response-dto.ts` |
| `BdcError` | `bdcErrorSchema` | `src/models/bdc-error.ts` |

### listOrganizationUserRoles

- **Signature**: `listOrganizationUserRoles(request?: Roles.ListOrganizationUserRolesRequest, options?: RequestOptions): ApiPromise<ListResponseDtoRoleResponseDto, Roles.ListOrganizationUserRolesError>`
- **Wire**: `GET /v3/roles`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListResponseDtoRoleResponseDto`
- **Error**: `BillError` with `kind: "api"`, an instance of `Roles.ListOrganizationUserRolesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error4XX"` [4XX wildcard] `BdcError[]` · `"error5XX"` [5XX wildcard] `BdcError[]` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Roles.ListOrganizationUserRolesRequest` (6):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `max` | `query` | `number` | no |
| `sort` | `query` | `string` | no |
| `filters` | `query` | `string` | no |
| `page` | `query` | `string` | no |
| `sessionId` | `header` | `string` | no |
| `devKey` | `header` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ListResponseDtoRoleResponseDto` | `listResponseDtoRoleResponseDtoSchema` | `src/models/list-response-dto-role-response-dto.ts` |
| `BdcError` | `bdcErrorSchema` | `src/models/bdc-error.ts` |

