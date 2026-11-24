<!-- Generated file — do not edit; regenerated with the SDK. -->

# Search — operations

Accessor: `client.search` · Source: `src/resources/search.ts` · 1 operation · Request and error types: namespace `Search`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `audioscrape`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### searchApiV1

- **Signature**: `searchApiV1(request: Search.SearchApiV1Request, options?: RequestOptions): ApiPromise<SearchResponse, Search.SearchApiV1Error>`
- **Wire**: `POST /api/search`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `SearchResponse`
- **Error**: `AudioscrapeError` with `kind: "api"`, an instance of `Search.SearchApiV1Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiErrorBody"` [400] `ApiErrorBody` · `"apiErrorBody2"` [401] `ApiErrorBody` · `"apiErrorBody3"` [402] `ApiErrorBody` · `"apiErrorBody4"` [403] `ApiErrorBody` · `"apiErrorBody5"` [429] `ApiErrorBody` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Search.SearchApiV1Request` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `SearchRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `SearchRequest` | `searchRequestSchema` | `src/models/search-request.ts` |
| `SearchResponse` | `searchResponseSchema` | `src/models/search-response.ts` |
| `ApiErrorBody` | `apiErrorBodySchema` | `src/models/api-error-body.ts` |

