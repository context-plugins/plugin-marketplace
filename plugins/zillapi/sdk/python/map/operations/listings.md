<!-- Generated file — do not edit; regenerated with the SDK. -->

# Listings — operations

Accessor: `client.listings` · Source: `zillapi/apis/listings.py` · 4 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.listings.listings_bbox

- **Route**: `GET /v1/listings`
- **Auth**: `bearer_auth`
- **Signature**: `def listings_bbox(bbox: str, *, status: Status1OrStr | None = Status1.FOR_SALE, price_min: int | None = None, price_max: int | None = None, beds_min: int | None = None, beds_max: int | None = None, baths_min: int | None = None, baths_max: int | None = None, sqft_min: int | None = None, sqft_max: int | None = None, year_built_min: int | None = None, year_built_max: int | None = None, home_types: str | None = None, days_on_zillow: DaysOnZillow1OrStr | None = None, max_items: int | None = 50, format_: FormatOrStr | None = Format.JSON, location: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `bbox`
- **Params**: `bbox` — query · `status` — query · `price_min` — query · `price_max` — query · `beds_min` — query · `beds_max` — query · `baths_min` — query · `baths_max` — query · `sqft_min` — query · `sqft_max` — query · `year_built_min` — query · `year_built_max` — query · `home_types` — query · `days_on_zillow` — query · `max_items` — query · `format_` — query `format` · `location` — query
- **Returns (parsed)**: `SearchResultsOk`
- **Returns (raw)**: `ApiResult[SearchResultsOk, ListingsBboxErrorBody]`
- **Error**: `ListingsBboxErrorBody` — **Case A (typed)**
- **Error arms**: `ApiErrorModel` [400] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `Status1OrStr` | `zillapi/models/enums/status1.py` |
| `DaysOnZillow1OrStr` | `zillapi/models/enums/days_on_zillow1.py` |
| `FormatOrStr` | `zillapi/models/enums/format.py` |
| `SearchResultsOk` | `zillapi/models/search_results_ok.py` |
| `ListingsBboxErrorBody` | `zillapi/errors/listings_bbox_error.py` |
| `ApiErrorModel` | `zillapi/models/api_error_model.py` |

### client.listings.listings_for_rent

- **Route**: `POST /v1/listings/for-rent`
- **Auth**: `bearer_auth`
- **Signature**: `def listings_for_rent(body: SearchRequest2 | SearchRequest2Dict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `SearchResultsOk`
- **Returns (raw)**: `ApiResult[SearchResultsOk, RawError]`
- **Error**: `RawError` — **Case B**

| Type | Source |
| --- | --- |
| `SearchRequest2` | `zillapi/models/unions/search_request2.py` |
| `SearchRequest2Dict` | `zillapi/models/unions/search_request2.py` |
| `SearchResultsOk` | `zillapi/models/search_results_ok.py` |

### client.listings.listings_for_sale

- **Route**: `POST /v1/listings/for-sale`
- **Auth**: `bearer_auth`
- **Signature**: `def listings_for_sale(body: SearchRequest2 | SearchRequest2Dict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `SearchResultsOk`
- **Returns (raw)**: `ApiResult[SearchResultsOk, RawError]`
- **Error**: `RawError` — **Case B**

| Type | Source |
| --- | --- |
| `SearchRequest2` | `zillapi/models/unions/search_request2.py` |
| `SearchRequest2Dict` | `zillapi/models/unions/search_request2.py` |
| `SearchResultsOk` | `zillapi/models/search_results_ok.py` |

### client.listings.listings_sold

- **Route**: `POST /v1/listings/sold`
- **Auth**: `bearer_auth`
- **Signature**: `def listings_sold(body: SearchRequest2 | SearchRequest2Dict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `SearchResultsOk`
- **Returns (raw)**: `ApiResult[SearchResultsOk, RawError]`
- **Error**: `RawError` — **Case B**

| Type | Source |
| --- | --- |
| `SearchRequest2` | `zillapi/models/unions/search_request2.py` |
| `SearchRequest2Dict` | `zillapi/models/unions/search_request2.py` |
| `SearchResultsOk` | `zillapi/models/search_results_ok.py` |

