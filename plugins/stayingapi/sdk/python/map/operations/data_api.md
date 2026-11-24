<!-- Generated file — do not edit; regenerated with the SDK. -->

# DataApi — operations

Accessor: `client.data_api` · Source: `staying_api/apis/data_api.py` · 7 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.data_api.availability

- **Route**: `GET /availability`
- **Auth**: `bearer_auth`
- **Signature**: `def availability(platform: PlatformOrStr, start_date: str, end_date: str, *, listing_id: str | None = None, listing_ids: str | None = None, url: str | None = None, only_available: bool | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `platform`, `start_date`, `end_date`
- **Params**: `platform` — query · `start_date` — query `startDate` · `end_date` — query `endDate` · `listing_id` — query `listingId` · `listing_ids` — query `listingIds` · `url` — query · `only_available` — query `onlyAvailable`
- **Returns (parsed)**: `AvailabilityResponse`
- **Returns (raw)**: `ApiResult[AvailabilityResponse, AvailabilityErrorBody]`
- **Error**: `AvailabilityErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorEnvelope` [400, 401, 402, 403, 429, 503] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `PlatformOrStr` | `staying_api/models/enums/platform.py` |
| `AvailabilityResponse` | `staying_api/models/availability_response.py` |
| `AvailabilityErrorBody` | `staying_api/errors/availability_error.py` |
| `ErrorEnvelope` | `staying_api/models/error_envelope.py` |

### client.data_api.listing

- **Route**: `GET /listing/{platform}/{id}`
- **Auth**: `bearer_auth`
- **Signature**: `def listing(platform: PlatformOrStr, id_: str, *, country: str | None = None, check_in: str | None = None, check_out: str | None = None, currency: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `platform`, `id_`
- **Params**: `platform` — path · `id_` — path `id` · `country` — query · `check_in` — query `checkIn` · `check_out` — query `checkOut` · `currency` — query
- **Returns (parsed)**: `ListingResponse`
- **Returns (raw)**: `ApiResult[ListingResponse, ListingErrorBody]`
- **Error**: `ListingErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorEnvelope` [400, 401, 402, 403, 429, 503] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `PlatformOrStr` | `staying_api/models/enums/platform.py` |
| `ListingResponse` | `staying_api/models/listing_response.py` |
| `ListingErrorBody` | `staying_api/errors/listing_error.py` |
| `ErrorEnvelope` | `staying_api/models/error_envelope.py` |

### client.data_api.price

- **Route**: `GET /price`
- **Auth**: `bearer_auth`
- **Signature**: `def price(platform: PlatformOrStr, listing_id: str, check_in: str, check_out: str, *, currency: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `platform`, `listing_id`, `check_in`, `check_out`
- **Params**: `platform` — query · `listing_id` — query `listingId` · `check_in` — query `checkIn` · `check_out` — query `checkOut` · `currency` — query
- **Returns (parsed)**: `PriceResponse`
- **Returns (raw)**: `ApiResult[PriceResponse, PriceErrorBody]`
- **Error**: `PriceErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorEnvelope` [400, 401, 402, 403, 429, 503] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `PlatformOrStr` | `staying_api/models/enums/platform.py` |
| `PriceResponse` | `staying_api/models/price_response.py` |
| `PriceErrorBody` | `staying_api/errors/price_error.py` |
| `ErrorEnvelope` | `staying_api/models/error_envelope.py` |

### client.data_api.price_compare

- **Route**: `GET /price-compare`
- **Auth**: `bearer_auth`
- **Signature**: `def price_compare(check_in: str, check_out: str, *, listings: str | None = None, name: str | None = None, location: str | None = None, google_hotel_id: str | None = None, adults: int | None = None, children: int | None = None, currency: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `check_in`, `check_out`
- **Params**: `check_in` — query `checkIn` · `check_out` — query `checkOut` · `listings` — query · `name` — query · `location` — query · `google_hotel_id` — query `googleHotelId` · `adults` — query · `children` — query · `currency` — query
- **Returns (parsed)**: `PriceCompareResponse`
- **Returns (raw)**: `ApiResult[PriceCompareResponse, PriceCompareErrorBody]`
- **Error**: `PriceCompareErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorEnvelope` [400, 401, 402, 403, 429, 503] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `PriceCompareResponse` | `staying_api/models/price_compare_response.py` |
| `PriceCompareErrorBody` | `staying_api/errors/price_compare_error.py` |
| `ErrorEnvelope` | `staying_api/models/error_envelope.py` |

### client.data_api.reviews

- **Route**: `GET /reviews`
- **Auth**: `bearer_auth`
- **Signature**: `def reviews(platform: PlatformOrStr, *, listing_id: str | None = None, url: str | None = None, limit: int | None = None, cursor: str | None = None, language: str | None = None, sort: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `platform`
- **Params**: `platform` — query · `listing_id` — query `listingId` · `url` — query · `limit` — query · `cursor` — query · `language` — query · `sort` — query
- **Returns (parsed)**: `ReviewsResponse`
- **Returns (raw)**: `ApiResult[ReviewsResponse, ReviewsErrorBody]`
- **Error**: `ReviewsErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorEnvelope` [400, 401, 402, 403, 429, 503] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `PlatformOrStr` | `staying_api/models/enums/platform.py` |
| `ReviewsResponse` | `staying_api/models/reviews_response.py` |
| `ReviewsErrorBody` | `staying_api/errors/reviews_error.py` |
| `ErrorEnvelope` | `staying_api/models/error_envelope.py` |

### client.data_api.search_get

- **Route**: `GET /search`
- **Auth**: `bearer_auth`
- **Signature**: `def search_get(location: str, *, check_in: str | None = None, check_out: str | None = None, platforms: str | None = None, platform: str | None = None, adults: int | None = None, children: int | None = None, rooms: int | None = None, currency: str | None = None, limit: int | None = None, cursor: str | None = None, sort: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `location`
- **Params**: `location` — query · `check_in` — query `checkIn` · `check_out` — query `checkOut` · `platforms` — query · `platform` — query · `adults` — query · `children` — query · `rooms` — query · `currency` — query · `limit` — query · `cursor` — query · `sort` — query
- **Returns (parsed)**: `SearchResponse`
- **Returns (raw)**: `ApiResult[SearchResponse, SearchGetErrorBody]`
- **Error**: `SearchGetErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorEnvelope` [400, 401, 402, 403, 429, 503] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `SearchResponse` | `staying_api/models/search_response.py` |
| `SearchGetErrorBody` | `staying_api/errors/search_get_error.py` |
| `ErrorEnvelope` | `staying_api/models/error_envelope.py` |

### client.data_api.search_post

- **Route**: `POST /search`
- **Auth**: `bearer_auth`
- **Signature**: `def search_post(body: Any, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `SearchResponse`
- **Returns (raw)**: `ApiResult[SearchResponse, SearchPostErrorBody]`
- **Error**: `SearchPostErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorEnvelope` [400, 401, 402, 403, 429, 503] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `SearchResponse` | `staying_api/models/search_response.py` |
| `SearchPostErrorBody` | `staying_api/errors/search_post_error.py` |
| `ErrorEnvelope` | `staying_api/models/error_envelope.py` |

