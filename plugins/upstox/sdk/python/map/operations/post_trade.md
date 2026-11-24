<!-- Generated file — do not edit; regenerated with the SDK. -->

# PostTrade — operations

Accessor: `client.post_trade` · Source: `upstox/apis/post_trade.py` · 1 operation

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.post_trade.get_trades_by_date_range

- **Route**: `GET /v2/charges/historical-trades`
- **Auth**: `oauth2`
- **Signature**: `def get_trades_by_date_range(start_date: str, end_date: str, page_number: int, page_size: int, *, segment: str | None = "", request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `start_date`, `end_date`, `page_number`, `page_size`
- **Params**: `start_date` — query · `end_date` — query · `page_number` — query · `page_size` — query · `segment` — query
- **Returns (parsed)**: `TradeHistoryResponse`
- **Returns (raw)**: `ApiResult[TradeHistoryResponse, GetTradesByDateRangeErrorBody]`
- **Error**: `GetTradesByDateRangeErrorBody` — **Case A (typed)**
- **Error arms**: `ApiGatewayErrorResponse` [400, 403, 405, 422, 423, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `TradeHistoryResponse` | `upstox/models/trade_history_response.py` |
| `GetTradesByDateRangeErrorBody` | `upstox/errors/get_trades_by_date_range_error.py` |
| `ApiGatewayErrorResponse` | `upstox/models/api_gateway_error_response.py` |

