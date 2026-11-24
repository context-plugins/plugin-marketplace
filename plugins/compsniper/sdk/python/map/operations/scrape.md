<!-- Generated file — do not edit; regenerated with the SDK. -->

# Scrape — operations

Accessor: `client.scrape` · Source: `comp_sniper/apis/scrape.py` · 6 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.scrape.browse_sold_listings_by_category

- **Route**: `GET /v1/scrape/category`
- **Auth**: `bearer_auth`
- **Signature**: `def browse_sold_listings_by_category(category_id: str, *, count: int | None = 240, page: int | None = 1, ebay_site: EbaySiteOrStr | None = EbaySite.EBAY_COM, sort_order: SortOrderOrStr | None = None, item_condition: ItemConditionOrStr | None = None, condition_id: int | None = None, buying_format: BuyingFormatOrStr | None = None, seller_type: SellerTypeOrStr | None = None, min_price: float | None = None, max_price: float | None = None, aspect_filter: str | None = None, x_credit_source: XCreditSourceOrStr | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `category_id`
- **Params**: `category_id` — query `categoryId` · `count` — query · `page` — query · `ebay_site` — query `ebaySite` · `sort_order` — query `sortOrder` · `item_condition` — query `itemCondition` · `condition_id` — query `conditionId` · `buying_format` — query `buyingFormat` · `seller_type` — query `sellerType` · `min_price` — query `minPrice` · `max_price` — query `maxPrice` · `aspect_filter` — query `aspectFilter` · `x_credit_source` — header `X-Credit-Source`
- **Returns (parsed)**: `ScrapeResponse`
- **Returns (raw)**: `ApiResult[ScrapeResponse, BrowseSoldListingsByCategoryErrorBody]`
- **Error**: `BrowseSoldListingsByCategoryErrorBody` — **Case A (typed)**
- **Error arms**: `ApiErrorModel` [400, 401, 429, 502, 503] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `EbaySiteOrStr` | `comp_sniper/models/enums/ebay_site.py` |
| `SortOrderOrStr` | `comp_sniper/models/enums/sort_order.py` |
| `ItemConditionOrStr` | `comp_sniper/models/enums/item_condition.py` |
| `BuyingFormatOrStr` | `comp_sniper/models/enums/buying_format.py` |
| `SellerTypeOrStr` | `comp_sniper/models/enums/seller_type.py` |
| `XCreditSourceOrStr` | `comp_sniper/models/enums/x_credit_source.py` |
| `ScrapeResponse` | `comp_sniper/models/scrape_response.py` |
| `BrowseSoldListingsByCategoryErrorBody` | `comp_sniper/errors/browse_sold_listings_by_category_error.py` |
| `ApiErrorModel` | `comp_sniper/models/api_error_model.py` |

### client.scrape.cancel_max_search

- **Route**: `DELETE /v1/scrape/max/{jobId}`
- **Auth**: `bearer_auth`
- **Signature**: `def cancel_max_search(job_id: UUID, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `job_id`
- **Params**: `job_id` — path `jobId`
- **Returns (parsed)**: `MaxCancelResponse`
- **Returns (raw)**: `ApiResult[MaxCancelResponse, CancelMaxSearchErrorBody]`
- **Error**: `CancelMaxSearchErrorBody` — **Case A (typed)**
- **Error arms**: `ApiErrorModel` [401, 403, 404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `MaxCancelResponse` | `comp_sniper/models/max_cancel_response.py` |
| `CancelMaxSearchErrorBody` | `comp_sniper/errors/cancel_max_search_error.py` |
| `ApiErrorModel` | `comp_sniper/models/api_error_model.py` |

### client.scrape.download_max_search_csv

- **Route**: `GET /v1/scrape/max/{jobId}/download.csv`
- **Signature**: `def download_max_search_csv(job_id: UUID, token: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `job_id`, `token`
- **Params**: `job_id` — path `jobId` · `token` — query
- **Returns (parsed)**: `str`
- **Returns (raw)**: `ApiResult[str, DownloadMaxSearchCsvErrorBody]`
- **Error**: `DownloadMaxSearchCsvErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [403, 404, anything unmapped]

| Type | Source |
| --- | --- |
| `DownloadMaxSearchCsvErrorBody` | `comp_sniper/errors/download_max_search_csv_error.py` |

### client.scrape.get_max_search_results

- **Route**: `GET /v1/scrape/max/results/{jobId}`
- **Auth**: `bearer_auth`
- **Signature**: `def get_max_search_results(job_id: UUID, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `job_id`
- **Params**: `job_id` — path `jobId`
- **Returns (parsed)**: `MaxJob`
- **Returns (raw)**: `ApiResult[MaxJob, GetMaxSearchResultsErrorBody]`
- **Error**: `GetMaxSearchResultsErrorBody` — **Case A (typed)**
- **Error arms**: `ApiErrorModel` [401, 403, 404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `MaxJob` | `comp_sniper/models/max_job.py` |
| `GetMaxSearchResultsErrorBody` | `comp_sniper/errors/get_max_search_results_error.py` |
| `ApiErrorModel` | `comp_sniper/models/api_error_model.py` |

### client.scrape.search_sold_listings

- **Route**: `GET /v1/scrape`
- **Auth**: `bearer_auth`
- **Signature**: `def search_sold_listings(keyword: str, *, count: int | None = 240, page: int | None = 1, ebay_site: EbaySiteOrStr | None = EbaySite.EBAY_COM, category_id: str | None = "0", sort_order: SortOrder1OrStr | None = None, item_location: ItemLocationOrStr | None = ItemLocation.DEFAULT, item_condition: ItemConditionOrStr | None = None, condition_id: int | None = None, buying_format: BuyingFormatOrStr | None = BuyingFormat.ALL, seller_type: SellerTypeOrStr | None = None, min_price: float | None = None, max_price: float | None = None, include_complete_listing: bool | None = True, sold: bool | None = True, sold_after: Date | None = None, sold_before: Date | None = None, aspect_filter: str | None = None, exact_match: bool | None = False, relevance: bool | None = True, best_offer_price: bool | None = False, x_credit_source: XCreditSourceOrStr | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `keyword`
- **Params**: `keyword` — query · `count` — query · `page` — query · `ebay_site` — query `ebaySite` · `category_id` — query `categoryId` · `sort_order` — query `sortOrder` · `item_location` — query `itemLocation` · `item_condition` — query `itemCondition` · `condition_id` — query `conditionId` · `buying_format` — query `buyingFormat` · `seller_type` — query `sellerType` · `min_price` — query `minPrice` · `max_price` — query `maxPrice` · `include_complete_listing` — query `includeCompleteListing` · `sold` — query · `sold_after` — query `soldAfter` · `sold_before` — query `soldBefore` · `aspect_filter` — query `aspectFilter` · `exact_match` — query `exactMatch` · `relevance` — query · `best_offer_price` — query `bestOfferPrice` · `x_credit_source` — header `X-Credit-Source`
- **Returns (parsed)**: `ScrapeResponse`
- **Returns (raw)**: `ApiResult[ScrapeResponse, SearchSoldListingsErrorBody]`
- **Error**: `SearchSoldListingsErrorBody` — **Case A (typed)**
- **Error arms**: `ApiErrorModel` [400, 401, 429, 502] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `EbaySiteOrStr` | `comp_sniper/models/enums/ebay_site.py` |
| `SortOrder1OrStr` | `comp_sniper/models/enums/sort_order1.py` |
| `ItemLocationOrStr` | `comp_sniper/models/enums/item_location.py` |
| `ItemConditionOrStr` | `comp_sniper/models/enums/item_condition.py` |
| `BuyingFormatOrStr` | `comp_sniper/models/enums/buying_format.py` |
| `SellerTypeOrStr` | `comp_sniper/models/enums/seller_type.py` |
| `XCreditSourceOrStr` | `comp_sniper/models/enums/x_credit_source.py` |
| `ScrapeResponse` | `comp_sniper/models/scrape_response.py` |
| `SearchSoldListingsErrorBody` | `comp_sniper/errors/search_sold_listings_error.py` |
| `ApiErrorModel` | `comp_sniper/models/api_error_model.py` |

### client.scrape.start_max_search

- **Route**: `POST /v1/scrape/max`
- **Auth**: `bearer_auth`
- **Signature**: `def start_max_search(body: MaxSearchRequest | MaxSearchRequestDict, *, x_credit_source: XCreditSourceOrStr | None = None, idempotency_key: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `x_credit_source` — header `X-Credit-Source` · `idempotency_key` — header `Idempotency-Key` · `body` — JSON body
- **Returns (parsed)**: `MaxJobAccepted`
- **Returns (raw)**: `ApiResult[MaxJobAccepted, StartMaxSearchErrorBody]`
- **Error**: `StartMaxSearchErrorBody` — **Case A (typed)**
- **Error arms**: `ApiErrorModel` [400, 401, 403, 409, 429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `MaxSearchRequest` | `comp_sniper/models/max_search_request.py` |
| `MaxSearchRequestDict` | `comp_sniper/models/max_search_request.py` |
| `XCreditSourceOrStr` | `comp_sniper/models/enums/x_credit_source.py` |
| `MaxJobAccepted` | `comp_sniper/models/max_job_accepted.py` |
| `StartMaxSearchErrorBody` | `comp_sniper/errors/start_max_search_error.py` |
| `ApiErrorModel` | `comp_sniper/models/api_error_model.py` |

