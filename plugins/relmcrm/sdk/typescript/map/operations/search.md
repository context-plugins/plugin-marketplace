<!-- Generated file — do not edit; regenerated with the SDK. -->

# Search — operations

Accessor: `client.search` · Source: `src/resources/search.ts` · 1 operation · Request types: namespace `Search`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `relm-crm`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### search

- **Signature**: `search(request: Search.SearchRequest, options?: RequestOptions): ApiPromise<SearchResult, ApiError>`
- **Wire**: `GET /search`
- **Auth**: any of `bearerAuth`, `oauth2` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SearchResult`
- **Error**: `RelmCrmError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Search.SearchRequest` (2):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `q` | `query` | `string` | yes | — |
| `limit` | `query` | `number` | no | `10` |

| Type | Schema value | Source |
| --- | --- | --- |
| `SearchResult` | `searchResultSchema` | `src/models/search-result.ts` |

