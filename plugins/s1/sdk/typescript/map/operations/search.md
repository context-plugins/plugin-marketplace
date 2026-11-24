<!-- Generated file — do not edit; regenerated with the SDK. -->

# Search — operations

Accessor: `client.search` · Source: `src/resources/search.ts` · 4 operations · Request and error types: namespace `Search`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `s1`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### ask

- **Signature**: `ask(request: Search.AskRequestParams, options?: RequestOptions): ApiPromise<AskResponse, Search.AskError>`
- **Wire**: `POST /ask`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `AskResponse`
- **Error**: `S1Error` with `kind: "api"`, an instance of `Search.AskError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiErrorModel"` [400] `ApiErrorModel` · `"apiErrorModel2"` [401] `ApiErrorModel` · `"apiErrorModel3"` [402] `ApiErrorModel` · `"apiErrorModel4"` [429] `ApiErrorModel` · `"apiErrorModel5"` [500] `ApiErrorModel` · `"apiErrorModel6"` [502] `ApiErrorModel` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Search.AskRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `AskRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `AskRequest` | `askRequestSchema` | `src/models/ask-request.ts` |
| `AskResponse` | `askResponseSchema` | `src/models/ask-response.ts` |
| `ApiErrorModel` | `apiErrorModelSchema` | `src/models/api-error-model.ts` |

### news

- **Signature**: `news(request: Search.NewsRequestParams, options?: RequestOptions): ApiPromise<NewsResponse1, Search.NewsError>`
- **Wire**: `POST /news`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `NewsResponse1`
- **Error**: `S1Error` with `kind: "api"`, an instance of `Search.NewsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiErrorModel"` [400] `ApiErrorModel` · `"apiErrorModel2"` [401] `ApiErrorModel` · `"apiErrorModel3"` [402] `ApiErrorModel` · `"apiErrorModel4"` [422] `ApiErrorModel` · `"apiErrorModel5"` [429] `ApiErrorModel` · `"apiErrorModel6"` [500] `ApiErrorModel` · `"apiErrorModel7"` [502] `ApiErrorModel` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Search.NewsRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `NewsRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `NewsRequest` | `newsRequestSchema` | `src/models/unions/news-request.ts` |
| `NewsResponse1` | `newsResponse1Schema` | `src/models/unions/news-response1.ts` |
| `ApiErrorModel` | `apiErrorModelSchema` | `src/models/api-error-model.ts` |

### search

- **Signature**: `search(request: Search.SearchRequestParams, options?: RequestOptions): ApiPromise<SearchResponse1, Search.SearchError>`
- **Wire**: `POST /search`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `SearchResponse1`
- **Error**: `S1Error` with `kind: "api"`, an instance of `Search.SearchError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiErrorModel"` [400] `ApiErrorModel` · `"apiErrorModel2"` [401] `ApiErrorModel` · `"apiErrorModel3"` [402] `ApiErrorModel` · `"apiErrorModel4"` [422] `ApiErrorModel` · `"apiErrorModel5"` [429] `ApiErrorModel` · `"apiErrorModel6"` [500] `ApiErrorModel` · `"apiErrorModel7"` [502] `ApiErrorModel` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Search.SearchRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `SearchRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `SearchRequest` | `searchRequestSchema` | `src/models/unions/search-request.ts` |
| `SearchResponse1` | `searchResponse1Schema` | `src/models/unions/search-response1.ts` |
| `ApiErrorModel` | `apiErrorModelSchema` | `src/models/api-error-model.ts` |

### trending

- **Signature**: `trending(request: Search.TrendingRequestParams, options?: RequestOptions): ApiPromise<TrendingResponse, Search.TrendingError>`
- **Wire**: `POST /trending`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `TrendingResponse`
- **Error**: `S1Error` with `kind: "api"`, an instance of `Search.TrendingError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiErrorModel"` [400] `ApiErrorModel` · `"apiErrorModel2"` [401] `ApiErrorModel` · `"apiErrorModel3"` [402] `ApiErrorModel` · `"apiErrorModel4"` [422] `ApiErrorModel` · `"apiErrorModel5"` [429] `ApiErrorModel` · `"apiErrorModel6"` [500] `ApiErrorModel` · `"apiErrorModel7"` [502] `ApiErrorModel` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Search.TrendingRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `TrendingRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `TrendingRequest` | `trendingRequestSchema` | `src/models/trending-request.ts` |
| `TrendingResponse` | `trendingResponseSchema` | `src/models/trending-response.ts` |
| `ApiErrorModel` | `apiErrorModelSchema` | `src/models/api-error-model.ts` |

