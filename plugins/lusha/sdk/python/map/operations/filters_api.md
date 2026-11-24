<!-- Generated file — do not edit; regenerated with the SDK. -->

# FiltersApi — operations

Accessor: `client.filters_api` · Source: `lusha/apis/filters_api.py` · 4 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.filters_api.get_company_filter_types

- **Route**: `GET /v3/companies/prospecting/filters`
- **Auth**: `api_key_auth`
- **Signature**: `def get_company_filter_types(*, request_options: RequestOptionsOrDict | None = None)`
- **Returns (parsed)**: `FilterTypesDiscoveryResponse`
- **Returns (raw)**: `ApiResult[FilterTypesDiscoveryResponse, GetCompanyFilterTypesErrorBody]`
- **Error**: `GetCompanyFilterTypesErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [401, 403] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `FilterTypesDiscoveryResponse` | `lusha/models/filter_types_discovery_response.py` |
| `GetCompanyFilterTypesErrorBody` | `lusha/errors/get_company_filter_types_error.py` |
| `ErrorResponse` | `lusha/models/error_response.py` |

### client.filters_api.get_company_filter_values

- **Route**: `GET /v3/companies/prospecting/filters/{filterType}`
- **Auth**: `api_key_auth`
- **Signature**: `def get_company_filter_values(filter_type: FilterType1OrStr, *, query: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `filter_type`
- **Params**: `filter_type` — path `filterType` · `query` — query
- **Returns (parsed)**: `FilterValuesResponse`
- **Returns (raw)**: `ApiResult[FilterValuesResponse, GetCompanyFilterValuesErrorBody]`
- **Error**: `GetCompanyFilterValuesErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401, 403, 429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `FilterType1OrStr` | `lusha/models/enums/filter_type1.py` |
| `FilterValuesResponse` | `lusha/models/filter_values_response.py` |
| `GetCompanyFilterValuesErrorBody` | `lusha/errors/get_company_filter_values_error.py` |
| `ErrorResponse` | `lusha/models/error_response.py` |

### client.filters_api.get_contact_filter_types

- **Route**: `GET /v3/contacts/prospecting/filters`
- **Auth**: `api_key_auth`
- **Signature**: `def get_contact_filter_types(*, request_options: RequestOptionsOrDict | None = None)`
- **Returns (parsed)**: `FilterTypesDiscoveryResponse`
- **Returns (raw)**: `ApiResult[FilterTypesDiscoveryResponse, GetContactFilterTypesErrorBody]`
- **Error**: `GetContactFilterTypesErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [401, 403] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `FilterTypesDiscoveryResponse` | `lusha/models/filter_types_discovery_response.py` |
| `GetContactFilterTypesErrorBody` | `lusha/errors/get_contact_filter_types_error.py` |
| `ErrorResponse` | `lusha/models/error_response.py` |

### client.filters_api.get_contact_filter_values

- **Route**: `GET /v3/contacts/prospecting/filters/{filterType}`
- **Auth**: `api_key_auth`
- **Signature**: `def get_contact_filter_values(filter_type: FilterTypeOrStr, *, query: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `filter_type`
- **Params**: `filter_type` — path `filterType` · `query` — query
- **Returns (parsed)**: `FilterValuesResponse`
- **Returns (raw)**: `ApiResult[FilterValuesResponse, GetContactFilterValuesErrorBody]`
- **Error**: `GetContactFilterValuesErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401, 403, 429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `FilterTypeOrStr` | `lusha/models/enums/filter_type.py` |
| `FilterValuesResponse` | `lusha/models/filter_values_response.py` |
| `GetContactFilterValuesErrorBody` | `lusha/errors/get_contact_filter_values_error.py` |
| `ErrorResponse` | `lusha/models/error_response.py` |

