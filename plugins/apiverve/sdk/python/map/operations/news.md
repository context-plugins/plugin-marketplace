<!-- Generated file — do not edit; regenerated with the SDK. -->

# News — operations

Accessor: `client.news` · Source: `api_verve/apis/news.py` · 1 operation

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.news.news

- **Route**: `GET /v1/news`
- **Auth**: `api_key`
- **Signature**: `def news(category: str, *, limit: int | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `category`
- **Params**: `category` — query · `limit` — query
- **Returns (parsed)**: `V1NewsResponse`
- **Returns (raw)**: `ApiResult[V1NewsResponse, NewsErrorBody]`
- **Error**: `NewsErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [401, 404, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `V1NewsResponse` | `api_verve/models/v1_news_response.py` |
| `NewsErrorBody` | `api_verve/errors/news_error.py` |

