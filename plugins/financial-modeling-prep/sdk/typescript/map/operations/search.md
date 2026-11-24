<!-- Generated file — do not edit; regenerated with the SDK. -->

# Search — operations

Accessor: `client.search` · Source: `src/resources/search.ts` · 1 operation · Request types: namespace `Search`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `financial-modeling-prep`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### searchSymbols

- **Signature**: `searchSymbols(request: Search.SearchSymbolsRequest, options?: RequestOptions): ApiPromise<SearchResponse[], ApiError>`
- **Wire**: `GET /search`
- **Auth**: `apiKeyQuery`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SearchResponse[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `FinancialModelingPrepError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Search.SearchSymbolsRequest` (3):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `query` | `query` | `string` | yes | — |
| `limit` | `query` | `number` | no | `10` |
| `exchange` | `query` | `string` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `SearchResponse` | `searchResponseSchema` | `src/models/search-response.ts` |

