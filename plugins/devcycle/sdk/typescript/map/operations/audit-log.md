<!-- Generated file — do not edit; regenerated with the SDK. -->

# AuditLog — operations

Accessor: `client.auditLog` · Source: `src/resources/audit-log.ts` · 1 operation · Request and error types: namespace `AuditLog`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `dev-cycle`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### auditLogControllerFindAll

- **Signature**: `auditLogControllerFindAll(request: AuditLog.AuditLogControllerFindAllRequest, options?: RequestOptions): ApiPromise<AuditLogEntity[], AuditLog.AuditLogControllerFindAllError>`
- **Wire**: `GET /v1/projects/{project}/features/{feature}/audit`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `AuditLogEntity[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `DevCycleError` with `kind: "api"`, an instance of `AuditLog.AuditLogControllerFindAllError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error401"` [401] no body · `"error404"` [404] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AuditLog.AuditLogControllerFindAllRequest` (10):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `feature` | `path` | — | `string` | yes | — |
| `project` | `path` | — | `string` | yes | — |
| `page` | `query` | — | `number` | no | `1` |
| `perPage` | `query` | — | `number` | no | `100` |
| `sortBy` | `query` | — | `SortBy` | no | `SortBy.CreatedAt` |
| `sortOrder` | `query` | — | `SortOrder` | no | `SortOrder.Desc` |
| `environment` | `query` | — | `string` | no | — |
| `a0User` | `query` | `a0_user` | `string` | no | — |
| `startDate` | `query` | — | `Date` (date-time) | no | — |
| `endDate` | `query` | — | `Date` (date-time) | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `SortBy` | `sortBySchema` | `src/models/sort-by.ts` |
| `SortOrder` | `sortOrderSchema` | `src/models/sort-order.ts` |
| `AuditLogEntity` | `auditLogEntitySchema` | `src/models/audit-log-entity.ts` |

