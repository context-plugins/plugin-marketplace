<!-- Generated file — do not edit; regenerated with the SDK. -->

# CompanyFiltersApi — operations

Accessor: `client.company_filters_api` · Source: `lusha/apis/company_filters_api.py` · 9 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.company_filters_api.get_company_industries

- **Route**: `GET /prospecting/filters/companies/industries_labels`
- **Auth**: `api_key_auth`
- **Signature**: `def get_company_industries(*, request_options: RequestOptionsOrDict | None = None)`
- **Returns (parsed)**: `list[IndustryLabel]`
- **Returns (raw)**: `ApiResult[list[IndustryLabel], GetCompanyIndustriesErrorBody]`
- **Error**: `GetCompanyIndustriesErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [401] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `IndustryLabel` | `lusha/models/industry_label.py` |
| `GetCompanyIndustriesErrorBody` | `lusha/errors/get_company_industries_error.py` |
| `ErrorResponse` | `lusha/models/error_response.py` |

### client.company_filters_api.get_company_intent_topics

- **Route**: `GET /prospecting/filters/companies/intent_topics`
- **Auth**: `api_key_auth`
- **Signature**: `def get_company_intent_topics(*, request_options: RequestOptionsOrDict | None = None)`
- **Returns (parsed)**: `list[str]`
- **Returns (raw)**: `ApiResult[list[str], GetCompanyIntentTopicsErrorBody]`
- **Error**: `GetCompanyIntentTopicsErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [401] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GetCompanyIntentTopicsErrorBody` | `lusha/errors/get_company_intent_topics_error.py` |
| `ErrorResponse` | `lusha/models/error_response.py` |

### client.company_filters_api.get_company_naics_codes

- **Route**: `GET /prospecting/filters/companies/naics`
- **Auth**: `api_key_auth`
- **Signature**: `def get_company_naics_codes(*, request_options: RequestOptionsOrDict | None = None)`
- **Returns (parsed)**: `list[NaicsCode]`
- **Returns (raw)**: `ApiResult[list[NaicsCode], GetCompanyNaicsCodesErrorBody]`
- **Error**: `GetCompanyNaicsCodesErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [401] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `NaicsCode` | `lusha/models/naics_code.py` |
| `GetCompanyNaicsCodesErrorBody` | `lusha/errors/get_company_naics_codes_error.py` |
| `ErrorResponse` | `lusha/models/error_response.py` |

### client.company_filters_api.get_company_revenues

- **Route**: `GET /prospecting/filters/companies/revenues`
- **Auth**: `api_key_auth`
- **Signature**: `def get_company_revenues(*, request_options: RequestOptionsOrDict | None = None)`
- **Returns (parsed)**: `list[RevenueRange]`
- **Returns (raw)**: `ApiResult[list[RevenueRange], GetCompanyRevenuesErrorBody]`
- **Error**: `GetCompanyRevenuesErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [401] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `RevenueRange` | `lusha/models/revenue_range.py` |
| `GetCompanyRevenuesErrorBody` | `lusha/errors/get_company_revenues_error.py` |
| `ErrorResponse` | `lusha/models/error_response.py` |

### client.company_filters_api.get_company_sic_codes

- **Route**: `GET /prospecting/filters/companies/sics`
- **Auth**: `api_key_auth`
- **Signature**: `def get_company_sic_codes(*, request_options: RequestOptionsOrDict | None = None)`
- **Returns (parsed)**: `list[SicCode]`
- **Returns (raw)**: `ApiResult[list[SicCode], GetCompanySicCodesErrorBody]`
- **Error**: `GetCompanySicCodesErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [401] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `SicCode` | `lusha/models/sic_code.py` |
| `GetCompanySicCodesErrorBody` | `lusha/errors/get_company_sic_codes_error.py` |
| `ErrorResponse` | `lusha/models/error_response.py` |

### client.company_filters_api.get_company_sizes

- **Route**: `GET /prospecting/filters/companies/sizes`
- **Auth**: `api_key_auth`
- **Signature**: `def get_company_sizes(*, request_options: RequestOptionsOrDict | None = None)`
- **Returns (parsed)**: `list[CompanySizeRange]`
- **Returns (raw)**: `ApiResult[list[CompanySizeRange], GetCompanySizesErrorBody]`
- **Error**: `GetCompanySizesErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [401] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `CompanySizeRange` | `lusha/models/company_size_range.py` |
| `GetCompanySizesErrorBody` | `lusha/errors/get_company_sizes_error.py` |
| `ErrorResponse` | `lusha/models/error_response.py` |

### client.company_filters_api.search_company_locations

- **Route**: `POST /prospecting/filters/companies/locations`
- **Auth**: `api_key_auth`
- **Signature**: `def search_company_locations(body: LocationSearchRequest | LocationSearchRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `list[CompanyLocationFilter]`
- **Returns (raw)**: `ApiResult[list[CompanyLocationFilter], SearchCompanyLocationsErrorBody]`
- **Error**: `SearchCompanyLocationsErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [401] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `LocationSearchRequest` | `lusha/models/location_search_request.py` |
| `LocationSearchRequestDict` | `lusha/models/location_search_request.py` |
| `CompanyLocationFilter` | `lusha/models/company_location_filter.py` |
| `SearchCompanyLocationsErrorBody` | `lusha/errors/search_company_locations_error.py` |
| `ErrorResponse` | `lusha/models/error_response.py` |

### client.company_filters_api.search_company_names

- **Route**: `POST /prospecting/filters/companies/names`
- **Auth**: `api_key_auth`
- **Signature**: `def search_company_names(body: CompanyNameSearchRequest | CompanyNameSearchRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `list[CompanyNameResult]`
- **Returns (raw)**: `ApiResult[list[CompanyNameResult], SearchCompanyNamesErrorBody]`
- **Error**: `SearchCompanyNamesErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [401] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `CompanyNameSearchRequest` | `lusha/models/company_name_search_request.py` |
| `CompanyNameSearchRequestDict` | `lusha/models/company_name_search_request.py` |
| `CompanyNameResult` | `lusha/models/company_name_result.py` |
| `SearchCompanyNamesErrorBody` | `lusha/errors/search_company_names_error.py` |
| `ErrorResponse` | `lusha/models/error_response.py` |

### client.company_filters_api.search_company_technologies

- **Route**: `POST /prospecting/filters/companies/technologies`
- **Auth**: `api_key_auth`
- **Signature**: `def search_company_technologies(body: TechnologySearchRequest | TechnologySearchRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `list[Technology]`
- **Returns (raw)**: `ApiResult[list[Technology], SearchCompanyTechnologiesErrorBody]`
- **Error**: `SearchCompanyTechnologiesErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [401] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `TechnologySearchRequest` | `lusha/models/technology_search_request.py` |
| `TechnologySearchRequestDict` | `lusha/models/technology_search_request.py` |
| `Technology` | `lusha/models/technology.py` |
| `SearchCompanyTechnologiesErrorBody` | `lusha/errors/search_company_technologies_error.py` |
| `ErrorResponse` | `lusha/models/error_response.py` |

