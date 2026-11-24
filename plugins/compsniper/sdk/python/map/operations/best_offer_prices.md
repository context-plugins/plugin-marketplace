<!-- Generated file — do not edit; regenerated with the SDK. -->

# BestOfferPrices — operations

Accessor: `client.best_offer_prices` · Source: `comp_sniper/apis/best_offer_prices.py` · 1 operation

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.best_offer_prices.get_best_offer_prices

- **Route**: `GET /v1/best-offer-prices`
- **Auth**: `bearer_auth`
- **Signature**: `def get_best_offer_prices(item_ids: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `item_ids`
- **Params**: `item_ids` — query `itemIds`
- **Returns (parsed)**: `V1BestOfferPricesResponse`
- **Returns (raw)**: `ApiResult[V1BestOfferPricesResponse, GetBestOfferPricesErrorBody]`
- **Error**: `GetBestOfferPricesErrorBody` — **Case A (typed)**
- **Error arms**: `ApiErrorModel` [400, 401] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `V1BestOfferPricesResponse` | `comp_sniper/models/v1_best_offer_prices_response.py` |
| `GetBestOfferPricesErrorBody` | `comp_sniper/errors/get_best_offer_prices_error.py` |
| `ApiErrorModel` | `comp_sniper/models/api_error_model.py` |

