<!-- Generated file — do not edit; regenerated with the SDK. -->

# NumbersInventory — operations

Accessor: `client.numbers_inventory` · Source: `did_logic/apis/numbers_inventory.py` · 10 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.numbers_inventory.numbers_countries_cities_dids_index

- **Route**: `GET /api/v2/numbers/countries/{country_id}/cities/{city_id}/dids`
- **Auth**: `bearer_auth`
- **Signature**: `def numbers_countries_cities_dids_index(country_id: int, city_id: int, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `country_id`, `city_id`
- **Params**: `country_id` — path · `city_id` — path
- **Returns (parsed)**: `ApiV2NumbersCountriesCitiesDidsResponse`
- **Returns (raw)**: `ApiResult[ApiV2NumbersCountriesCitiesDidsResponse, NumbersCountriesCitiesDidsIndexErrorBody]`
- **Error**: `NumbersCountriesCitiesDidsIndexErrorBody` — **Case A (typed)**
- **Error arms**: `ApiV2NumbersCountriesCitiesDids401Error1` [401] · `ApiV2NumbersCountriesCitiesDids403Error1` [403] · `ApiV2NumbersCountriesCitiesDids404Error1` [404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV2NumbersCountriesCitiesDidsResponse` | `did_logic/models/api_v2_numbers_countries_cities_dids_response.py` |
| `NumbersCountriesCitiesDidsIndexErrorBody` | `did_logic/errors/numbers_countries_cities_dids_index_error.py` |
| `ApiV2NumbersCountriesCitiesDids401Error1` | `did_logic/models/api_v2_numbers_countries_cities_dids401_error1.py` |
| `ApiV2NumbersCountriesCitiesDids403Error1` | `did_logic/models/api_v2_numbers_countries_cities_dids403_error1.py` |
| `ApiV2NumbersCountriesCitiesDids404Error1` | `did_logic/models/api_v2_numbers_countries_cities_dids404_error1.py` |

### client.numbers_inventory.numbers_countries_cities_index

- **Route**: `GET /api/v2/numbers/countries/{country_id}/cities`
- **Auth**: `bearer_auth`
- **Signature**: `def numbers_countries_cities_index(country_id: int, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `country_id`
- **Params**: `country_id` — path
- **Returns (parsed)**: `ApiV2NumbersCountriesCitiesResponse`
- **Returns (raw)**: `ApiResult[ApiV2NumbersCountriesCitiesResponse, NumbersCountriesCitiesIndexErrorBody]`
- **Error**: `NumbersCountriesCitiesIndexErrorBody` — **Case A (typed)**
- **Error arms**: `ApiV2NumbersCountriesCities401Error1` [401] · `ApiV2NumbersCountriesCities403Error1` [403] · `ApiV2NumbersCountriesCities404Error1` [404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV2NumbersCountriesCitiesResponse` | `did_logic/models/api_v2_numbers_countries_cities_response.py` |
| `NumbersCountriesCitiesIndexErrorBody` | `did_logic/errors/numbers_countries_cities_index_error.py` |
| `ApiV2NumbersCountriesCities401Error1` | `did_logic/models/api_v2_numbers_countries_cities401_error1.py` |
| `ApiV2NumbersCountriesCities403Error1` | `did_logic/models/api_v2_numbers_countries_cities403_error1.py` |
| `ApiV2NumbersCountriesCities404Error1` | `did_logic/models/api_v2_numbers_countries_cities404_error1.py` |

### client.numbers_inventory.numbers_countries_index

- **Route**: `GET /api/v2/numbers/countries`
- **Auth**: `bearer_auth`
- **Signature**: `def numbers_countries_index(*, request_options: RequestOptionsOrDict | None = None)`
- **Returns (parsed)**: `ApiV2NumbersCountriesResponse`
- **Returns (raw)**: `ApiResult[ApiV2NumbersCountriesResponse, NumbersCountriesIndexErrorBody]`
- **Error**: `NumbersCountriesIndexErrorBody` — **Case A (typed)**
- **Error arms**: `ApiV2NumbersCountries401Error1` [401] · `ApiV2NumbersCountries403Error1` [403] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV2NumbersCountriesResponse` | `did_logic/models/api_v2_numbers_countries_response.py` |
| `NumbersCountriesIndexErrorBody` | `did_logic/errors/numbers_countries_index_error.py` |
| `ApiV2NumbersCountries401Error1` | `did_logic/models/api_v2_numbers_countries401_error1.py` |
| `ApiV2NumbersCountries403Error1` | `did_logic/models/api_v2_numbers_countries403_error1.py` |

### client.numbers_inventory.numbers_countries_locations_index

- **Route**: `GET /api/v2/numbers/countries/{country_id}/locations`
- **Auth**: `bearer_auth`
- **Signature**: `def numbers_countries_locations_index(country_id: int, prefix: int, *, sms_enabled: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `country_id`, `prefix`
- **Params**: `country_id` — path · `prefix` — query · `sms_enabled` — query
- **Returns (parsed)**: `ApiV2NumbersCountriesLocationsResponse`
- **Returns (raw)**: `ApiResult[ApiV2NumbersCountriesLocationsResponse, NumbersCountriesLocationsIndexErrorBody]`
- **Error**: `NumbersCountriesLocationsIndexErrorBody` — **Case A (typed)**
- **Error arms**: `ApiV2NumbersCountriesLocations401Error1` [401] · `ApiV2NumbersCountriesLocations403Error1` [403] · `ApiV2NumbersCountriesLocations404Error1` [404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV2NumbersCountriesLocationsResponse` | `did_logic/models/api_v2_numbers_countries_locations_response.py` |
| `NumbersCountriesLocationsIndexErrorBody` | `did_logic/errors/numbers_countries_locations_index_error.py` |
| `ApiV2NumbersCountriesLocations401Error1` | `did_logic/models/api_v2_numbers_countries_locations401_error1.py` |
| `ApiV2NumbersCountriesLocations403Error1` | `did_logic/models/api_v2_numbers_countries_locations403_error1.py` |
| `ApiV2NumbersCountriesLocations404Error1` | `did_logic/models/api_v2_numbers_countries_locations404_error1.py` |

### client.numbers_inventory.numbers_countries_regions_index

- **Route**: `GET /api/v2/numbers/countries/{country_id}/regions`
- **Auth**: `bearer_auth`
- **Signature**: `def numbers_countries_regions_index(country_id: int, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `country_id`
- **Params**: `country_id` — path
- **Returns (parsed)**: `ApiV2NumbersCountriesRegionsResponse`
- **Returns (raw)**: `ApiResult[ApiV2NumbersCountriesRegionsResponse, NumbersCountriesRegionsIndexErrorBody]`
- **Error**: `NumbersCountriesRegionsIndexErrorBody` — **Case A (typed)**
- **Error arms**: `ApiV2NumbersCountriesRegions401Error1` [401] · `ApiV2NumbersCountriesRegions403Error1` [403] · `ApiV2NumbersCountriesRegions404Error1` [404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV2NumbersCountriesRegionsResponse` | `did_logic/models/api_v2_numbers_countries_regions_response.py` |
| `NumbersCountriesRegionsIndexErrorBody` | `did_logic/errors/numbers_countries_regions_index_error.py` |
| `ApiV2NumbersCountriesRegions401Error1` | `did_logic/models/api_v2_numbers_countries_regions401_error1.py` |
| `ApiV2NumbersCountriesRegions403Error1` | `did_logic/models/api_v2_numbers_countries_regions403_error1.py` |
| `ApiV2NumbersCountriesRegions404Error1` | `did_logic/models/api_v2_numbers_countries_regions404_error1.py` |

### client.numbers_inventory.numbers_index

- **Route**: `GET /api/v2/numbers`
- **Auth**: `bearer_auth`
- **Signature**: `def numbers_index(*, show_all: str | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `show_all` — query
- **Returns (parsed)**: `ApiV2NumbersResponse`
- **Returns (raw)**: `ApiResult[ApiV2NumbersResponse, NumbersIndexErrorBody]`
- **Error**: `NumbersIndexErrorBody` — **Case A (typed)**
- **Error arms**: `ApiV2Numbers401Error1` [401] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV2NumbersResponse` | `did_logic/models/api_v2_numbers_response.py` |
| `NumbersIndexErrorBody` | `did_logic/errors/numbers_index_error.py` |
| `ApiV2Numbers401Error1` | `did_logic/models/api_v2_numbers401_error1.py` |

### client.numbers_inventory.numbers_purchase_create

- **Route**: `POST /api/v2/numbers/purchase`
- **Auth**: `bearer_auth`
- **Signature**: `def numbers_purchase_create(body: ApiV2NumbersPurchaseRequest | ApiV2NumbersPurchaseRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `ApiV2NumbersPurchaseResponse`
- **Returns (raw)**: `ApiResult[ApiV2NumbersPurchaseResponse, NumbersPurchaseCreateErrorBody]`
- **Error**: `NumbersPurchaseCreateErrorBody` — **Case A (typed)**
- **Error arms**: `ApiV2NumbersPurchase400Error1` [400] · `ApiV2NumbersPurchase401Error1` [401] · `ApiV2NumbersPurchaseResponse11` [422] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV2NumbersPurchaseRequest` | `did_logic/models/api_v2_numbers_purchase_request.py` |
| `ApiV2NumbersPurchaseRequestDict` | `did_logic/models/api_v2_numbers_purchase_request.py` |
| `ApiV2NumbersPurchaseResponse` | `did_logic/models/api_v2_numbers_purchase_response.py` |
| `NumbersPurchaseCreateErrorBody` | `did_logic/errors/numbers_purchase_create_error.py` |
| `ApiV2NumbersPurchase400Error1` | `did_logic/models/api_v2_numbers_purchase400_error1.py` |
| `ApiV2NumbersPurchase401Error1` | `did_logic/models/api_v2_numbers_purchase401_error1.py` |
| `ApiV2NumbersPurchaseResponse11` | `did_logic/models/unions/api_v2_numbers_purchase_response11.py` |

### client.numbers_inventory.numbers_purchase_destroy

- **Route**: `DELETE /api/v2/numbers/purchase`
- **Auth**: `bearer_auth`
- **Signature**: `def numbers_purchase_destroy(*, id_in: list[int] | None = None, did_numbers: list[str] | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `id_in` — query `id_in[]` · `did_numbers` — query `did_numbers[]`
- **Returns (parsed)**: `ApiV2NumbersPurchaseResponse3`
- **Returns (raw)**: `ApiResult[ApiV2NumbersPurchaseResponse3, NumbersPurchaseDestroyErrorBody]`
- **Error**: `NumbersPurchaseDestroyErrorBody` — **Case A (typed)**
- **Error arms**: `ApiV2NumbersPurchase401Error1` [401] · `ApiV2NumbersPurchase403Error1` [403] · `Error` [422] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV2NumbersPurchaseResponse3` | `did_logic/models/api_v2_numbers_purchase_response3.py` |
| `NumbersPurchaseDestroyErrorBody` | `did_logic/errors/numbers_purchase_destroy_error.py` |
| `ApiV2NumbersPurchase401Error1` | `did_logic/models/api_v2_numbers_purchase401_error1.py` |
| `ApiV2NumbersPurchase403Error1` | `did_logic/models/api_v2_numbers_purchase403_error1.py` |
| `Error` | `did_logic/models/error.py` |

### client.numbers_inventory.numbers_purchase_update

- **Route**: `PUT /api/v2/numbers/purchase`
- **Auth**: `bearer_auth`
- **Signature**: `def numbers_purchase_update(body: ApiV2NumbersPurchaseRequest1 | ApiV2NumbersPurchaseRequest1Dict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `ApiV2NumbersPurchaseResponse2`
- **Returns (raw)**: `ApiResult[ApiV2NumbersPurchaseResponse2, NumbersPurchaseUpdateErrorBody]`
- **Error**: `NumbersPurchaseUpdateErrorBody` — **Case A (typed)**
- **Error arms**: `ApiV2NumbersPurchase401Error1` [401] · `Error` [422, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV2NumbersPurchaseRequest1` | `did_logic/models/api_v2_numbers_purchase_request1.py` |
| `ApiV2NumbersPurchaseRequest1Dict` | `did_logic/models/api_v2_numbers_purchase_request1.py` |
| `ApiV2NumbersPurchaseResponse2` | `did_logic/models/api_v2_numbers_purchase_response2.py` |
| `NumbersPurchaseUpdateErrorBody` | `did_logic/errors/numbers_purchase_update_error.py` |
| `ApiV2NumbersPurchase401Error1` | `did_logic/models/api_v2_numbers_purchase401_error1.py` |
| `Error` | `did_logic/models/error.py` |

### client.numbers_inventory.numbers_search_show

- **Route**: `GET /api/v2/numbers/search`
- **Auth**: `bearer_auth`
- **Signature**: `def numbers_search_show(*, id_in: int | None = None, number_in: str | None = None, number_contains: int | None = None, begins_with: int | None = None, ends_with: int | None = None, city_name_contains: str | None = None, country_name_contains: str | None = None, state_name_contains: str | None = None, sms_enabled: str | None = None, no_local_cli: str | None = None, vendor_id: int | None = None, city_id: int | None = None, region_id: int | None = None, require_docs: int | None = None, commitment_months: int | None = None, cheap_sorting: str | None = None, page: int | None = 1, per_page: int | None = 25, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `id_in` — query · `number_in` — query · `number_contains` — query · `begins_with` — query · `ends_with` — query · `city_name_contains` — query · `country_name_contains` — query · `state_name_contains` — query · `sms_enabled` — query · `no_local_cli` — query · `vendor_id` — query · `city_id` — query · `region_id` — query · `require_docs` — query · `commitment_months` — query · `cheap_sorting` — query · `page` — query · `per_page` — query
- **Returns (parsed)**: `ApiV2NumbersSearchResponse`
- **Returns (raw)**: `ApiResult[ApiV2NumbersSearchResponse, NumbersSearchShowErrorBody]`
- **Error**: `NumbersSearchShowErrorBody` — **Case A (typed)**
- **Error arms**: `ApiV2NumbersSearch401Error1` [401] · `ApiV2NumbersSearch403Error1` [403] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV2NumbersSearchResponse` | `did_logic/models/api_v2_numbers_search_response.py` |
| `NumbersSearchShowErrorBody` | `did_logic/errors/numbers_search_show_error.py` |
| `ApiV2NumbersSearch401Error1` | `did_logic/models/api_v2_numbers_search401_error1.py` |
| `ApiV2NumbersSearch403Error1` | `did_logic/models/api_v2_numbers_search403_error1.py` |

