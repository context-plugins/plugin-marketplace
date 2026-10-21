<!-- Generated file — do not edit; regenerated with the SDK. -->

# IdPGroupsApi — operations

Accessor: `client.idPGroupsApi` · Source: `src/resources/id-pgroups-api.ts` · 1 operation · Request and error types: namespace `IdPGroupsApi`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `glean-platform-api`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### platformAdminIdpGroupsList

- **Signature**: `platformAdminIdpGroupsList(request: IdPGroupsApi.PlatformAdminIdpGroupsListRequest, options?: RequestOptions): ApiPromise<PlatformListIdpGroupsResponse, IdPGroupsApi.PlatformAdminIdpGroupsListError>`
- **Wire**: `GET /api/admin/idp-groups`
- **Auth**: `apiToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PlatformListIdpGroupsResponse`
- **Error**: `GleanPlatformApiError` with `kind: "api"`, an instance of `IdPGroupsApi.PlatformAdminIdpGroupsListError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error401"` [401] no body · `"error403"` [403] no body · `"error404"` [404] no body · `"error408"` [408] no body · `"error429"` [429] no body · `"error500"` [500] no body · `"error503"` [503] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `IdPGroupsApi.PlatformAdminIdpGroupsListRequest` (3):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `pageSize` | `query` | `page_size` | `number` | no | `50` |
| `cursor` | `query` | — | `string` | no | — |
| `filters` | `query` | — | `PlatformIdpGroupFilter1[]` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `PlatformIdpGroupFilter1` | `platformIdpGroupFilter1Schema` | `src/models/platform-idp-group-filter1.ts` |
| `PlatformListIdpGroupsResponse` | `platformListIdpGroupsResponseSchema` | `src/models/platform-list-idp-groups-response.ts` |

