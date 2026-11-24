<!-- Generated file — do not edit; regenerated with the SDK. -->

# News — operations

Accessor: `client.news` · Source: `upstox/apis/news.py` · 1 operation

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.news.get_news

- **Route**: `GET /v2/news`
- **Auth**: `oauth2`
- **Signature**: `def get_news(category: str, *, instrument_keys: str | None = None, page_number: int | None = 1, page_size: int | None = 100, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `category`
- **Params**: `category` — query · `instrument_keys` — query · `page_number` — query · `page_size` — query
- **Returns (parsed)**: `GetNewsResponse`
- **Returns (raw)**: `ApiResult[GetNewsResponse, GetNewsErrorBody]`
- **Error**: `GetNewsErrorBody` — **Case A (typed)**
- **Error arms**: `ApiGatewayErrorResponse` [400, 401, 403, 405, 422, 423, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GetNewsResponse` | `upstox/models/get_news_response.py` |
| `GetNewsErrorBody` | `upstox/errors/get_news_error.py` |
| `ApiGatewayErrorResponse` | `upstox/models/api_gateway_error_response.py` |

