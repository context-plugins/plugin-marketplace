<!-- Generated file — do not edit; regenerated with the SDK. -->

# Departments — operations

Accessor: `client.departments` · Source: `src/resources/departments.ts` · 1 operation · Request and error types: namespace `Departments`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `glean-platform-api`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### platformDepartmentsList

- **Signature**: `platformDepartmentsList(request: Departments.PlatformDepartmentsListRequest, options?: RequestOptions): ApiPromise<PlatformListDepartmentsResponse, Departments.PlatformDepartmentsListError>`
- **Wire**: `GET /api/departments`
- **Auth**: `apiToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PlatformListDepartmentsResponse`
- **Error**: `GleanPlatformApiError` with `kind: "api"`, an instance of `Departments.PlatformDepartmentsListError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error401"` [401] no body · `"error403"` [403] no body · `"error404"` [404] no body · `"error408"` [408] no body · `"error429"` [429] no body · `"error500"` [500] no body · `"error503"` [503] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Departments.PlatformDepartmentsListRequest` (2):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `pageSize` | `query` | `page_size` | `number` | no | `50` |
| `cursor` | `query` | — | `string` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `PlatformListDepartmentsResponse` | `platformListDepartmentsResponseSchema` | `src/models/platform-list-departments-response.ts` |

