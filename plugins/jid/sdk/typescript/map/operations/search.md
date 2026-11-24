<!-- Generated file — do not edit; regenerated with the SDK. -->

# Search — operations

Accessor: `client.search` · Source: `src/resources/search.ts` · 1 operation · Request and error types: namespace `Search`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `jid`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### searchBusinesses

- **Signature**: `searchBusinesses(request: Search.SearchBusinessesRequest, options?: RequestOptions): ApiPromise<SearchResponse, Search.SearchBusinessesError>`
- **Wire**: `GET /v1/search`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SearchResponse`
- **Error**: `JidError` with `kind: "api"`, an instance of `Search.SearchBusinessesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [429] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Search.SearchBusinessesRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `q` | `query` | `string` | yes |
| `country` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `SearchResponse` | `searchResponseSchema` | `src/models/search-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

