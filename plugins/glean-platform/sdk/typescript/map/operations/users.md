<!-- Generated file — do not edit; regenerated with the SDK. -->

# Users — operations

Accessor: `client.users` · Source: `src/resources/users.ts` · 1 operation · Request and error types: namespace `Users`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `glean-platform-api`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### platformUsersList

- **Signature**: `platformUsersList(request: Users.PlatformUsersListRequest, options?: RequestOptions): ApiPromise<PlatformListUsersResponse, Users.PlatformUsersListError>`
- **Wire**: `GET /api/users`
- **Auth**: `apiToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PlatformListUsersResponse`
- **Error**: `GleanPlatformApiError` with `kind: "api"`, an instance of `Users.PlatformUsersListError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error401"` [401] no body · `"error403"` [403] no body · `"error404"` [404] no body · `"error408"` [408] no body · `"error429"` [429] no body · `"error500"` [500] no body · `"error503"` [503] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Users.PlatformUsersListRequest` (4):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `pageSize` | `query` | `page_size` | `number` | no | `50` |
| `cursor` | `query` | — | `string` | no | — |
| `filters` | `query` | — | `PlatformUserFilter1[]` | no | — |
| `include` | `query` | — | `PlatformUserInclude[]` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `PlatformUserFilter1` | `platformUserFilter1Schema` | `src/models/platform-user-filter1.ts` |
| `PlatformUserInclude` | `platformUserIncludeSchema` | `src/models/platform-user-include.ts` |
| `PlatformListUsersResponse` | `platformListUsersResponseSchema` | `src/models/platform-list-users-response.ts` |

