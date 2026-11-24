<!-- Generated file — do not edit; regenerated with the SDK. -->

# Roles — operations

Accessor: `client.roles` · Source: `src/resources/roles.ts` · 1 operation · Request and error types: namespace `Roles`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `ui-path`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### listRoles

- **Signature**: `listRoles(request?: Roles.ListRolesRequest, options?: RequestOptions): ApiPromise<ODataRoleCollection, Roles.ListRolesError>`
- **Wire**: `GET /odata/Roles`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ODataRoleCollection`
- **Error**: `UiPathError` with `kind: "api"`, an instance of `Roles.ListRolesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [401] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Roles.ListRolesRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `filter` | `query` | `$filter` | `string` | no |
| `top` | `query` | `$top` | `number` | no |
| `skip` | `query` | `$skip` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ODataRoleCollection` | `oDataRoleCollectionSchema` | `src/models/odata-role-collection.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

