<!-- Generated file — do not edit; regenerated with the SDK. -->

# AdminAgents — operations

Accessor: `client.adminAgents` · Source: `src/resources/admin-agents.ts` · 1 operation · Request and error types: namespace `AdminAgents`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `glean-platform-api`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### platformAdminAgentsList

- **Signature**: `platformAdminAgentsList(request: AdminAgents.PlatformAdminAgentsListRequest, options?: RequestOptions): ApiPromise<PlatformListAdminAgentsResponse, AdminAgents.PlatformAdminAgentsListError>`
- **Wire**: `GET /api/admin/agents`
- **Auth**: `apiToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PlatformListAdminAgentsResponse`
- **Error**: `GleanPlatformApiError` with `kind: "api"`, an instance of `AdminAgents.PlatformAdminAgentsListError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error401"` [401] no body · `"error403"` [403] no body · `"error404"` [404] no body · `"error408"` [408] no body · `"error429"` [429] no body · `"error500"` [500] no body · `"error503"` [503] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AdminAgents.PlatformAdminAgentsListRequest` (3):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `pageSize` | `query` | `page_size` | `number` | no | `50` |
| `cursor` | `query` | — | `string` | no | — |
| `filters` | `query` | — | `PlatformAdminAgentFilter1[]` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `PlatformAdminAgentFilter1` | `platformAdminAgentFilter1Schema` | `src/models/platform-admin-agent-filter1.ts` |
| `PlatformListAdminAgentsResponse` | `platformListAdminAgentsResponseSchema` | `src/models/platform-list-admin-agents-response.ts` |

