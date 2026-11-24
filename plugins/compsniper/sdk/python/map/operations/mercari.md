<!-- Generated file — do not edit; regenerated with the SDK. -->

# Mercari — operations

Accessor: `client.mercari` · Source: `comp_sniper/apis/mercari.py` · 1 operation

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.mercari.search_mercari_listings

- **Route**: `GET /v1/mercari`
- **Auth**: `bearer_auth`
- **Signature**: `def search_mercari_listings(keyword: str, *, page: int | None = 1, count: int | None = 100, sort_order: SortOrderCompSniperMarketplaceAndShippingMercariApiOrStr | None = SortOrderCompSniperMarketplaceAndShippingMercariApi.BEST_MATCH, min_price: float | None = None, max_price: float | None = None, item_condition: ItemConditionCompSniperMarketplaceAndShippingMercariApiOrStr | None = ItemConditionCompSniperMarketplaceAndShippingMercariApi.ANY, category_id: str | None = None, brand_id: str | None = None, sold: SoldOrStr | None = Sold.TRUE, include_listed_at: IncludeListedAtOrStr | None = IncludeListedAt.FALSE, x_credit_source: XCreditSourceOrStr | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `keyword`
- **Params**: `keyword` — query · `page` — query · `count` — query · `sort_order` — query `sortOrder` · `min_price` — query `minPrice` · `max_price` — query `maxPrice` · `item_condition` — query `itemCondition` · `category_id` — query `categoryId` · `brand_id` — query `brandId` · `sold` — query · `include_listed_at` — query `includeListedAt` · `x_credit_source` — header `X-Credit-Source`
- **Returns (parsed)**: `V1MercariResponse`
- **Returns (raw)**: `ApiResult[V1MercariResponse, SearchMercariListingsErrorBody]`
- **Error**: `SearchMercariListingsErrorBody` — **Case A (typed)**
- **Error arms**: `V1Mercari400Error1` [400] · `V1Mercari401Error1` [401] · `V1MercariResponse12` [429] · `V1Mercari500Error1` [500] · `V1Mercari502Error1` [502] · `ApiErrorModel` [503] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `SortOrderCompSniperMarketplaceAndShippingMercariApiOrStr` | `comp_sniper/models/enums/sort_order_comp_sniper_marketplace_and_shipping_mercari_api.py` |
| `ItemConditionCompSniperMarketplaceAndShippingMercariApiOrStr` | `comp_sniper/models/enums/item_condition_comp_sniper_marketplace_and_shipping_mercari_api.py` |
| `SoldOrStr` | `comp_sniper/models/enums/sold.py` |
| `IncludeListedAtOrStr` | `comp_sniper/models/enums/include_listed_at.py` |
| `XCreditSourceOrStr` | `comp_sniper/models/enums/x_credit_source.py` |
| `V1MercariResponse` | `comp_sniper/models/v1_mercari_response.py` |
| `SearchMercariListingsErrorBody` | `comp_sniper/errors/search_mercari_listings_error.py` |
| `V1Mercari400Error1` | `comp_sniper/models/v1_mercari400_error1.py` |
| `V1Mercari401Error1` | `comp_sniper/models/v1_mercari401_error1.py` |
| `V1MercariResponse12` | `comp_sniper/models/unions/v1_mercari_response12.py` |
| `V1Mercari500Error1` | `comp_sniper/models/v1_mercari500_error1.py` |
| `V1Mercari502Error1` | `comp_sniper/models/v1_mercari502_error1.py` |
| `ApiErrorModel` | `comp_sniper/models/api_error_model.py` |

