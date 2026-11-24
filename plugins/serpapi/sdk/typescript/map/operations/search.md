<!-- Generated file — do not edit; regenerated with the SDK. -->

# Search — operations

Accessor: `client.search` · Source: `src/resources/search.ts` · 2 operations · Request types: namespace `Search`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `serp-api`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getSearch

- **Signature**: `getSearch(request: Search.GetSearchRequest, options?: RequestOptions): ApiPromise<Record<string, unknown>, ApiError>`
- **Wire**: `GET /searches/{search_id}`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `SerpApiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Search.GetSearchRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `searchId` | `path` | `search_id` | `string` | yes |

### runSearch

- **Signature**: `runSearch(request: Search.RunSearchRequest, options?: RequestOptions): ApiPromise<Record<string, unknown>, ApiError>`
- **Wire**: `GET /search`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `SerpApiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Search.RunSearchRequest` (11):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `engine` | `query` | — | `string` | yes |
| `q` | `query` | — | `string` | no |
| `searchQuery` | `query` | `search_query` | `string` | no |
| `apiKey` | `query` | `api_key` | `string` | no |
| `location` | `query` | — | `string` | no |
| `gl` | `query` | — | `string` | no |
| `hl` | `query` | — | `string` | no |
| `device` | `query` | — | `Device` | no |
| `noCache` | `query` | `no_cache` | `boolean` | no |
| `async` | `query` | — | `boolean` | no |
| `output` | `query` | — | `Output` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Device` | `deviceSchema` | `src/models/device.ts` |
| `Output` | `outputSchema` | `src/models/output.ts` |

