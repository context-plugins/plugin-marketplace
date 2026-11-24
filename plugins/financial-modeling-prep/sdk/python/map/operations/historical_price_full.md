<!-- Generated file — do not edit; regenerated with the SDK. -->

# HistoricalPriceFull — operations

Accessor: `client.historical_price_full` · Source: `financial_modeling_prep/apis/historical_price_full.py` · 1 operation

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.historical_price_full.get_historical_price

- **Route**: `GET /historical-price-full/{symbol}`
- **Auth**: `api_key_query`
- **Signature**: `def get_historical_price(symbol: str, *, from_: Date | None = None, to: Date | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `symbol`
- **Params**: `symbol` — path · `from_` — query `from` · `to` — query
- **Returns (parsed)**: `HistoricalPriceResponse`
- **Returns (raw)**: `ApiResult[HistoricalPriceResponse, RawError]`
- **Error**: `RawError` — **Case B**

| Type | Source |
| --- | --- |
| `HistoricalPriceResponse` | `financial_modeling_prep/models/historical_price_response.py` |

