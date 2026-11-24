<!-- Generated file — do not edit; regenerated with the SDK. -->

# Market — operations

Accessor: `client.market` · Source: `apibara/apis/market.py` · 1 operation

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.market.market_sold_price_stats

- **Route**: `GET /market/sold-prices`
- **Auth**: `api_key_auth`
- **Signature**: `def market_sold_price_stats(make: str, *, model: str | None = None, year: int | None = None, damage: str | None = None, auction: AuctionOrStr | None = None, sale_date_from: Date | None = None, sale_date_to: Date | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `make`
- **Params**: `make` — query · `model` — query · `year` — query · `damage` — query · `auction` — query · `sale_date_from` — query · `sale_date_to` — query
- **Returns (parsed)**: `MarketSoldPriceStatsResponse`
- **Returns (raw)**: `ApiResult[MarketSoldPriceStatsResponse, MarketSoldPriceStatsErrorBody]`
- **Error**: `MarketSoldPriceStatsErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [401, 422, anything unmapped]

| Type | Source |
| --- | --- |
| `AuctionOrStr` | `apibara/models/enums/auction.py` |
| `MarketSoldPriceStatsResponse` | `apibara/models/market_sold_price_stats_response.py` |
| `MarketSoldPriceStatsErrorBody` | `apibara/errors/market_sold_price_stats_error.py` |

