<!-- Generated file — do not edit; regenerated with the SDK. -->

# Summary — operations

Accessor: `client.summary` · Source: `comp_sniper/apis/summary.py` · 1 operation

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.summary.get_price_summary

- **Route**: `GET /v1/summary`
- **Auth**: `bearer_auth`
- **Signature**: `def get_price_summary(keyword: str, *, count: int | None = 240, page: int | None = 1, ebay_site: EbaySiteOrStr | None = EbaySite.EBAY_COM, category_id: str | None = None, sort_order: SortOrderOrStr | None = None, min_price: float | None = None, max_price: float | None = None, item_condition: ItemConditionOrStr | None = None, condition_id: int | None = None, buying_format: BuyingFormatOrStr | None = None, seller_type: SellerTypeOrStr | None = None, sold_after: Date | None = None, sold_before: Date | None = None, aspect_filter: str | None = None, exact_match: bool | None = False, relevance: bool | None = True, x_credit_source: XCreditSourceOrStr | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `keyword`
- **Params**: `keyword` — query · `count` — query · `page` — query · `ebay_site` — query `ebaySite` · `category_id` — query `categoryId` · `sort_order` — query `sortOrder` · `min_price` — query `minPrice` · `max_price` — query `maxPrice` · `item_condition` — query `itemCondition` · `condition_id` — query `conditionId` · `buying_format` — query `buyingFormat` · `seller_type` — query `sellerType` · `sold_after` — query `soldAfter` · `sold_before` — query `soldBefore` · `aspect_filter` — query `aspectFilter` · `exact_match` — query `exactMatch` · `relevance` — query · `x_credit_source` — header `X-Credit-Source`
- **Returns (parsed)**: `SummaryResponse`
- **Returns (raw)**: `ApiResult[SummaryResponse, GetPriceSummaryErrorBody]`
- **Error**: `GetPriceSummaryErrorBody` — **Case A (typed)**
- **Error arms**: `ApiErrorModel` [400, 401, 403, 429, 502, 503] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `EbaySiteOrStr` | `comp_sniper/models/enums/ebay_site.py` |
| `SortOrderOrStr` | `comp_sniper/models/enums/sort_order.py` |
| `ItemConditionOrStr` | `comp_sniper/models/enums/item_condition.py` |
| `BuyingFormatOrStr` | `comp_sniper/models/enums/buying_format.py` |
| `SellerTypeOrStr` | `comp_sniper/models/enums/seller_type.py` |
| `XCreditSourceOrStr` | `comp_sniper/models/enums/x_credit_source.py` |
| `SummaryResponse` | `comp_sniper/models/summary_response.py` |
| `GetPriceSummaryErrorBody` | `comp_sniper/errors/get_price_summary_error.py` |
| `ApiErrorModel` | `comp_sniper/models/api_error_model.py` |

