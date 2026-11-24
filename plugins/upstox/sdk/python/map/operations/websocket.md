<!-- Generated file — do not edit; regenerated with the SDK. -->

# Websocket — operations

Accessor: `client.websocket` · Source: `upstox/apis/websocket.py` · 4 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.websocket.get_market_data_feed

- **Route**: `GET /v2/feed/market-data-feed`
- **Auth**: `oauth2`
- **Signature**: `def get_market_data_feed(*, request_options: RequestOptionsOrDict | None = None)`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, GetMarketDataFeedErrorBody]`
- **Error**: `GetMarketDataFeedErrorBody` — **Case A (typed)**
- **Error arms**: `ApiGatewayErrorResponse` [400, 403, 405, 422, 423, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GetMarketDataFeedErrorBody` | `upstox/errors/get_market_data_feed_error.py` |
| `ApiGatewayErrorResponse` | `upstox/models/api_gateway_error_response.py` |

### client.websocket.get_market_data_feed_authorize

- **Route**: `GET /v2/feed/market-data-feed/authorize`
- **Auth**: `oauth2`
- **Signature**: `def get_market_data_feed_authorize(*, request_options: RequestOptionsOrDict | None = None)`
- **Returns (parsed)**: `WebsocketAuthRedirectResponse`
- **Returns (raw)**: `ApiResult[WebsocketAuthRedirectResponse, GetMarketDataFeedAuthorizeErrorBody]`
- **Error**: `GetMarketDataFeedAuthorizeErrorBody` — **Case A (typed)**
- **Error arms**: `ApiGatewayErrorResponse` [400, 403, 405, 422, 423, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `WebsocketAuthRedirectResponse` | `upstox/models/websocket_auth_redirect_response.py` |
| `GetMarketDataFeedAuthorizeErrorBody` | `upstox/errors/get_market_data_feed_authorize_error.py` |
| `ApiGatewayErrorResponse` | `upstox/models/api_gateway_error_response.py` |

### client.websocket.get_portfolio_stream_feed

- **Route**: `GET /v2/feed/portfolio-stream-feed`
- **Auth**: `oauth2`
- **Signature**: `def get_portfolio_stream_feed(*, update_types: str | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `update_types` — query
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, GetPortfolioStreamFeedErrorBody]`
- **Error**: `GetPortfolioStreamFeedErrorBody` — **Case A (typed)**
- **Error arms**: `ApiGatewayErrorResponse` [400, 403, 405, 422, 423, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GetPortfolioStreamFeedErrorBody` | `upstox/errors/get_portfolio_stream_feed_error.py` |
| `ApiGatewayErrorResponse` | `upstox/models/api_gateway_error_response.py` |

### client.websocket.get_portfolio_stream_feed_authorize

- **Route**: `GET /v2/feed/portfolio-stream-feed/authorize`
- **Auth**: `oauth2`
- **Signature**: `def get_portfolio_stream_feed_authorize(*, update_types: str | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `update_types` — query
- **Returns (parsed)**: `WebsocketAuthRedirectResponse`
- **Returns (raw)**: `ApiResult[WebsocketAuthRedirectResponse, GetPortfolioStreamFeedAuthorizeErrorBody]`
- **Error**: `GetPortfolioStreamFeedAuthorizeErrorBody` — **Case A (typed)**
- **Error arms**: `ApiGatewayErrorResponse` [400, 403, 405, 422, 423, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `WebsocketAuthRedirectResponse` | `upstox/models/websocket_auth_redirect_response.py` |
| `GetPortfolioStreamFeedAuthorizeErrorBody` | `upstox/errors/get_portfolio_stream_feed_authorize_error.py` |
| `ApiGatewayErrorResponse` | `upstox/models/api_gateway_error_response.py` |

