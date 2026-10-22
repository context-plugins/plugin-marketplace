<!-- Generated file — do not edit; regenerated with the SDK. -->

# Search — operations

Accessor: `client.search` · Source: `src/resources/search.ts` · 2 operations · Request and error types: namespace `Search`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `glean-platform-api`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### platformSearch

- **Signature**: `platformSearch(request: Search.PlatformSearchRequestParams, options?: RequestOptions): ApiPromise<PlatformSearchResponse, Search.PlatformSearchError>`
- **Wire**: `POST /api/search`
- **Auth**: `apiToken`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `PlatformSearchResponse`
- **Error**: `GleanPlatformApiError` with `kind: "api"`, an instance of `Search.PlatformSearchError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error401"` [401] no body · `"error403"` [403] no body · `"error404"` [404] no body · `"error408"` [408] no body · `"error413"` [413] no body · `"error422"` [422] no body · `"error429"` [429] no body · `"error500"` [500] no body · `"error503"` [503] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Search.PlatformSearchRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `PlatformSearchRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `PlatformSearchRequest` | `platformSearchRequestSchema` | `src/models/platform-search-request.ts` |
| `PlatformSearchResponse` | `platformSearchResponseSchema` | `src/models/platform-search-response.ts` |

### platformSearchFilters

- **Signature**: `platformSearchFilters(request: Search.PlatformSearchFiltersRequest, options?: RequestOptions): ApiPromise<PlatformSearchFiltersResponse, Search.PlatformSearchFiltersError>`
- **Wire**: `GET /api/search/filters`
- **Auth**: `apiToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PlatformSearchFiltersResponse`
- **Error**: `GleanPlatformApiError` with `kind: "api"`, an instance of `Search.PlatformSearchFiltersError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error401"` [401] no body · `"error403"` [403] no body · `"error404"` [404] no body · `"error408"` [408] no body · `"error429"` [429] no body · `"error500"` [500] no body · `"error503"` [503] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Search.PlatformSearchFiltersRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `datasources` | `query` | `string[]` | no |
| `query` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `PlatformSearchFiltersResponse` | `platformSearchFiltersResponseSchema` | `src/models/platform-search-filters-response.ts` |

