<!-- Generated file — do not edit; regenerated with the SDK. -->

# Search — operations

Accessor: `client.search` · Source: `search1_api/apis/search.py` · 4 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.search.ask

- **Route**: `POST /ask`
- **Auth**: `bearer_auth`
- **Signature**: `def ask(body: AskRequest | AskRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `AskResponse`
- **Returns (raw)**: `ApiResult[AskResponse, AskErrorBody]`
- **Error**: `AskErrorBody` — **Case A (typed)**
- **Error arms**: `ApiErrorModel` [400, 401, 402, 429, 500, 502] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `AskRequest` | `search1_api/models/ask_request.py` |
| `AskRequestDict` | `search1_api/models/ask_request.py` |
| `AskResponse` | `search1_api/models/ask_response.py` |
| `AskErrorBody` | `search1_api/errors/ask_error.py` |
| `ApiErrorModel` | `search1_api/models/api_error_model.py` |

### client.search.news

- **Route**: `POST /news`
- **Auth**: `bearer_auth`
- **Signature**: `def news(body: NewsRequest | NewsRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `NewsResponse1`
- **Returns (raw)**: `ApiResult[NewsResponse1, NewsErrorBody]`
- **Error**: `NewsErrorBody` — **Case A (typed)**
- **Error arms**: `ApiErrorModel` [400, 401, 402, 422, 429, 500, 502] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `NewsRequest` | `search1_api/models/unions/news_request.py` |
| `NewsRequestDict` | `search1_api/models/unions/news_request.py` |
| `NewsResponse1` | `search1_api/models/unions/news_response1.py` |
| `NewsErrorBody` | `search1_api/errors/news_error.py` |
| `ApiErrorModel` | `search1_api/models/api_error_model.py` |

### client.search.search

- **Route**: `POST /search`
- **Auth**: `bearer_auth`
- **Signature**: `def search(body: SearchRequest | SearchRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `SearchResponse1`
- **Returns (raw)**: `ApiResult[SearchResponse1, SearchErrorBody]`
- **Error**: `SearchErrorBody` — **Case A (typed)**
- **Error arms**: `ApiErrorModel` [400, 401, 402, 422, 429, 500, 502] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `SearchRequest` | `search1_api/models/unions/search_request.py` |
| `SearchRequestDict` | `search1_api/models/unions/search_request.py` |
| `SearchResponse1` | `search1_api/models/unions/search_response1.py` |
| `SearchErrorBody` | `search1_api/errors/search_error.py` |
| `ApiErrorModel` | `search1_api/models/api_error_model.py` |

### client.search.trending

- **Route**: `POST /trending`
- **Auth**: `bearer_auth`
- **Signature**: `def trending(body: TrendingRequest | TrendingRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `TrendingResponse`
- **Returns (raw)**: `ApiResult[TrendingResponse, TrendingErrorBody]`
- **Error**: `TrendingErrorBody` — **Case A (typed)**
- **Error arms**: `ApiErrorModel` [400, 401, 402, 422, 429, 500, 502] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `TrendingRequest` | `search1_api/models/trending_request.py` |
| `TrendingRequestDict` | `search1_api/models/trending_request.py` |
| `TrendingResponse` | `search1_api/models/trending_response.py` |
| `TrendingErrorBody` | `search1_api/errors/trending_error.py` |
| `ApiErrorModel` | `search1_api/models/api_error_model.py` |

