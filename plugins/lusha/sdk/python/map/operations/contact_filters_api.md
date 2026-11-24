<!-- Generated file — do not edit; regenerated with the SDK. -->

# ContactFiltersApi — operations

Accessor: `client.contact_filters_api` · Source: `lusha/apis/contact_filters_api.py` · 5 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.contact_filters_api.get_contact_countries

- **Route**: `GET /prospecting/filters/contacts/all_countries`
- **Auth**: `api_key_auth`
- **Signature**: `def get_contact_countries(*, request_options: RequestOptionsOrDict | None = None)`
- **Returns (parsed)**: `list[CountryFilter]`
- **Returns (raw)**: `ApiResult[list[CountryFilter], GetContactCountriesErrorBody]`
- **Error**: `GetContactCountriesErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [401] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `CountryFilter` | `lusha/models/country_filter.py` |
| `GetContactCountriesErrorBody` | `lusha/errors/get_contact_countries_error.py` |
| `ErrorResponse` | `lusha/models/error_response.py` |

### client.contact_filters_api.get_contact_data_points

- **Route**: `GET /prospecting/filters/contacts/existing_data_points`
- **Auth**: `api_key_auth`
- **Signature**: `def get_contact_data_points(*, request_options: RequestOptionsOrDict | None = None)`
- **Returns (parsed)**: `list[str]`
- **Returns (raw)**: `ApiResult[list[str], GetContactDataPointsErrorBody]`
- **Error**: `GetContactDataPointsErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [401] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GetContactDataPointsErrorBody` | `lusha/errors/get_contact_data_points_error.py` |
| `ErrorResponse` | `lusha/models/error_response.py` |

### client.contact_filters_api.get_contact_departments

- **Route**: `GET /prospecting/filters/contacts/departments`
- **Auth**: `api_key_auth`
- **Signature**: `def get_contact_departments(*, request_options: RequestOptionsOrDict | None = None)`
- **Returns (parsed)**: `list[str]`
- **Returns (raw)**: `ApiResult[list[str], GetContactDepartmentsErrorBody]`
- **Error**: `GetContactDepartmentsErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [401] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GetContactDepartmentsErrorBody` | `lusha/errors/get_contact_departments_error.py` |
| `ErrorResponse` | `lusha/models/error_response.py` |

### client.contact_filters_api.get_contact_seniority

- **Route**: `GET /prospecting/filters/contacts/seniority`
- **Auth**: `api_key_auth`
- **Signature**: `def get_contact_seniority(*, request_options: RequestOptionsOrDict | None = None)`
- **Returns (parsed)**: `list[str]`
- **Returns (raw)**: `ApiResult[list[str], GetContactSeniorityErrorBody]`
- **Error**: `GetContactSeniorityErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [401] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GetContactSeniorityErrorBody` | `lusha/errors/get_contact_seniority_error.py` |
| `ErrorResponse` | `lusha/models/error_response.py` |

### client.contact_filters_api.search_contact_locations

- **Route**: `POST /prospecting/filters/contacts/locations`
- **Auth**: `api_key_auth`
- **Signature**: `def search_contact_locations(body: LocationSearchRequest | LocationSearchRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `list[LocationFilter]`
- **Returns (raw)**: `ApiResult[list[LocationFilter], SearchContactLocationsErrorBody]`
- **Error**: `SearchContactLocationsErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [401] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `LocationSearchRequest` | `lusha/models/location_search_request.py` |
| `LocationSearchRequestDict` | `lusha/models/location_search_request.py` |
| `LocationFilter` | `lusha/models/location_filter.py` |
| `SearchContactLocationsErrorBody` | `lusha/errors/search_contact_locations_error.py` |
| `ErrorResponse` | `lusha/models/error_response.py` |

