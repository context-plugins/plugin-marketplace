<!-- Generated file — do not edit; regenerated with the SDK. -->

# SearchApi — operations

Accessor: `client.searchApi` · Source: `src/resources/search-api.ts` · 1 operation · Request and error types: namespace `SearchApi`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `nordic-financial-news`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getApiV1Search

- **Signature**: `getApiV1Search(request: SearchApi.GetApiV1SearchRequest, options?: RequestOptions): ApiPromise<SearchResult, SearchApi.GetApiV1SearchError>`
- **Wire**: `GET /api/v1/search`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SearchResult`
- **Error**: `NordicFinancialNewsError` with `kind: "api"`, an instance of `SearchApi.GetApiV1SearchError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"problemDetails"` [400] `ProblemDetails` · `"problemDetails2"` [401] `ProblemDetails` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SearchApi.GetApiV1SearchRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `q` | `query` | `string` | yes |
| `type` | `query` | `string` | no |
| `limit` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `SearchResult` | `searchResultSchema` | `src/models/search-result.ts` |
| `ProblemDetails` | `problemDetailsSchema` | `src/models/problem-details.ts` |

