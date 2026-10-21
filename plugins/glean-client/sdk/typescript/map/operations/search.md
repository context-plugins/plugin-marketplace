<!-- Generated file — do not edit; regenerated with the SDK. -->

# Search — operations

Accessor: `client.search` · Source: `src/resources/search.ts` · 5 operations · Request and error types: namespace `Search`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `glean-client-api`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### adminsearch

- **Signature**: `adminsearch(request: Search.AdminsearchRequest, options?: RequestOptions): ApiPromise<SearchResponse, Search.AdminsearchError>`
- **Wire**: `POST /rest/api/v1/adminsearch`
- **Auth**: `apiToken`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `SearchResponse`
- **Error**: `GleanClientApiError` with `kind: "api"`, an instance of `Search.AdminsearchError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error401"` [401] no body · `"errorInfo"` [403] `ErrorInfo` · `"errorInfo2"` [422] `ErrorInfo` · `"error429"` [429] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Search.AdminsearchRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `locale` | `query` | — | `string` | no |
| `xGleanActAs` | `header` | `X-Glean-ActAs` | `string` | no |
| `xGleanAuthType` | `header` | `X-Glean-Auth-Type` | `string` | no |
| `body` | `body` | — | `SearchRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `SearchRequest` | `searchRequestSchema` | `src/models/search-request.ts` |
| `SearchResponse` | `searchResponseSchema` | `src/models/search-response.ts` |
| `ErrorInfo` | `errorInfoSchema` | `src/models/error-info.ts` |

### autocomplete

- **Signature**: `autocomplete(request: Search.AutocompleteRequestParams, options?: RequestOptions): ApiPromise<AutocompleteResponse, Search.AutocompleteError>`
- **Wire**: `POST /rest/api/v1/autocomplete`
- **Auth**: `apiToken`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `AutocompleteResponse`
- **Error**: `GleanClientApiError` with `kind: "api"`, an instance of `Search.AutocompleteError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error401"` [401] no body · `"error429"` [429] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Search.AutocompleteRequestParams` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `locale` | `query` | — | `string` | no |
| `xGleanActAs` | `header` | `X-Glean-ActAs` | `string` | no |
| `xGleanAuthType` | `header` | `X-Glean-Auth-Type` | `string` | no |
| `body` | `body` | — | `AutocompleteRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `AutocompleteRequest` | `autocompleteRequestSchema` | `src/models/autocomplete-request.ts` |
| `AutocompleteResponse` | `autocompleteResponseSchema` | `src/models/autocomplete-response.ts` |

### feed

- **Signature**: `feed(request: Search.FeedRequestParams, options?: RequestOptions): ApiPromise<FeedResponse, Search.FeedError>`
- **Wire**: `POST /rest/api/v1/feed`
- **Auth**: `apiToken`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `FeedResponse`
- **Error**: `GleanClientApiError` with `kind: "api"`, an instance of `Search.FeedError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error401"` [401] no body · `"error408"` [408] no body · `"error429"` [429] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Search.FeedRequestParams` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `locale` | `query` | — | `string` | no |
| `xGleanActAs` | `header` | `X-Glean-ActAs` | `string` | no |
| `xGleanAuthType` | `header` | `X-Glean-Auth-Type` | `string` | no |
| `body` | `body` | — | `FeedRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `FeedRequest` | `feedRequestSchema` | `src/models/feed-request.ts` |
| `FeedResponse` | `feedResponseSchema` | `src/models/feed-response.ts` |

### recommendations

- **Signature**: `recommendations(request: Search.RecommendationsRequestParams, options?: RequestOptions): ApiPromise<ResultsResponse, Search.RecommendationsError>`
- **Wire**: `POST /rest/api/v1/recommendations`
- **Auth**: `apiToken`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ResultsResponse`
- **Error**: `GleanClientApiError` with `kind: "api"`, an instance of `Search.RecommendationsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error401"` [401] no body · `"error403"` [403] no body · `"error429"` [429] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Search.RecommendationsRequestParams` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `locale` | `query` | — | `string` | no |
| `xGleanActAs` | `header` | `X-Glean-ActAs` | `string` | no |
| `xGleanAuthType` | `header` | `X-Glean-Auth-Type` | `string` | no |
| `body` | `body` | — | `RecommendationsRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `RecommendationsRequest` | `recommendationsRequestSchema` | `src/models/recommendations-request.ts` |
| `ResultsResponse` | `resultsResponseSchema` | `src/models/results-response.ts` |

### search

- **Signature**: `search(request: Search.SearchRequestParams, options?: RequestOptions): ApiPromise<SearchResponse, Search.SearchError>`
- **Wire**: `POST /rest/api/v1/search`
- **Auth**: `apiToken`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `SearchResponse`
- **Error**: `GleanClientApiError` with `kind: "api"`, an instance of `Search.SearchError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error401"` [401] no body · `"errorInfo"` [403] `ErrorInfo` · `"error408"` [408] no body · `"errorInfo2"` [422] `ErrorInfo` · `"error429"` [429] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Search.SearchRequestParams` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `locale` | `query` | — | `string` | no |
| `xGleanActAs` | `header` | `X-Glean-ActAs` | `string` | no |
| `xGleanAuthType` | `header` | `X-Glean-Auth-Type` | `string` | no |
| `body` | `body` | — | `SearchRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `SearchRequest` | `searchRequestSchema` | `src/models/search-request.ts` |
| `SearchResponse` | `searchResponseSchema` | `src/models/search-response.ts` |
| `ErrorInfo` | `errorInfoSchema` | `src/models/error-info.ts` |

