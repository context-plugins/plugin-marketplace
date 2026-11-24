<!-- Generated file — do not edit; regenerated with the SDK. -->

# Companies — operations

Accessor: `client.companies` · Source: `compabase/apis/companies.py` · 9 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.companies.get_ceidg_nip_by_nip

- **Route**: `GET /ceidg/nip/{nip}`
- **Auth**: `api_key_auth` OR `bearer_auth`
- **Signature**: `def get_ceidg_nip_by_nip(nip: str, *, locale: LocaleOrStr | None = Locale.EN, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `nip`
- **Params**: `nip` — path · `locale` — query
- **Returns (parsed)**: `Any`
- **Returns (raw)**: `ApiResult[Any, GetCeidgNipByNipErrorBody]`
- **Error**: `GetCeidgNipByNipErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401, 404, 429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `LocaleOrStr` | `compabase/models/enums/locale.py` |
| `GetCeidgNipByNipErrorBody` | `compabase/errors/get_ceidg_nip_by_nip_error.py` |
| `ErrorResponse` | `compabase/models/error_response.py` |

### client.companies.get_companies

- **Route**: `GET /companies`
- **Auth**: `api_key_auth` OR `bearer_auth`
- **Signature**: `def get_companies(*, q: str | None = None, keywords: str | None = None, limit: int | None = 20, offset: int | None = 0, cursor: UUID | None = None, pkd: str | None = None, primary_only: bool | None = True, currency: CurrencyOrStr | None = Currency.PLN, voivodeship: str | None = None, postal_code: str | None = None, city: str | None = None, revenue_min: float | None = None, revenue_max: float | None = None, revenue_operating_min: float | None = None, revenue_operating_max: float | None = None, profit_operating_min: float | None = None, profit_operating_max: float | None = None, profit_net_min: float | None = None, profit_net_max: float | None = None, income_tax_min: float | None = None, income_tax_max: float | None = None, cost_wages_min: float | None = None, cost_wages_max: float | None = None, cost_amortization_min: float | None = None, cost_amortization_max: float | None = None, total_assets_min: float | None = None, total_assets_max: float | None = None, ebitda_min: float | None = None, ebitda_max: float | None = None, capital_min: float | None = None, capital_max: float | None = None, estimated_value_min: float | None = None, estimated_value_max: float | None = None, registration_year_min: int | None = None, registration_year_max: int | None = None, registration_date_min: Date | None = None, registration_date_max: Date | None = None, last_report_year_min: int | None = None, last_report_year_max: int | None = None, status_active: bool | None = None, legal_form: str | None = None, has_email: bool | None = None, has_website: bool | None = None, sort: SortOrStr | None = None, dir_: DirOrStr | None = Dir.DESC, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `q` — query · `keywords` — query · `limit` — query · `offset` — query · `cursor` — query · `pkd` — query · `primary_only` — query · `currency` — query · `voivodeship` — query · `postal_code` — query · `city` — query · `revenue_min` — query · `revenue_max` — query · `revenue_operating_min` — query · `revenue_operating_max` — query · `profit_operating_min` — query · `profit_operating_max` — query · `profit_net_min` — query · `profit_net_max` — query · `income_tax_min` — query · `income_tax_max` — query · `cost_wages_min` — query · `cost_wages_max` — query · `cost_amortization_min` — query · `cost_amortization_max` — query · `total_assets_min` — query · `total_assets_max` — query · `ebitda_min` — query · `ebitda_max` — query · `capital_min` — query · `capital_max` — query · `estimated_value_min` — query · `estimated_value_max` — query · `registration_year_min` — query · `registration_year_max` — query · `registration_date_min` — query · `registration_date_max` — query · `last_report_year_min` — query · `last_report_year_max` — query · `status_active` — query · `legal_form` — query · `has_email` — query · `has_website` — query · `sort` — query · `dir_` — query `dir`
- **Returns (parsed)**: `CompanyListResponse`
- **Returns (raw)**: `ApiResult[CompanyListResponse, GetCompaniesErrorBody]`
- **Error**: `GetCompaniesErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401, 429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `CurrencyOrStr` | `compabase/models/enums/currency.py` |
| `SortOrStr` | `compabase/models/enums/sort.py` |
| `DirOrStr` | `compabase/models/enums/dir.py` |
| `CompanyListResponse` | `compabase/models/company_list_response.py` |
| `GetCompaniesErrorBody` | `compabase/errors/get_companies_error.py` |
| `ErrorResponse` | `compabase/models/error_response.py` |

### client.companies.get_companies_count

- **Route**: `GET /companies/count`
- **Auth**: `api_key_auth` OR `bearer_auth`
- **Signature**: `def get_companies_count(*, q: str | None = None, keywords: str | None = None, pkd: str | None = None, primary_only: bool | None = True, currency: CurrencyOrStr | None = Currency.PLN, voivodeship: str | None = None, postal_code: str | None = None, city: str | None = None, revenue_min: float | None = None, revenue_max: float | None = None, revenue_operating_min: float | None = None, revenue_operating_max: float | None = None, profit_operating_min: float | None = None, profit_operating_max: float | None = None, profit_net_min: float | None = None, profit_net_max: float | None = None, income_tax_min: float | None = None, income_tax_max: float | None = None, cost_wages_min: float | None = None, cost_wages_max: float | None = None, cost_amortization_min: float | None = None, cost_amortization_max: float | None = None, total_assets_min: float | None = None, total_assets_max: float | None = None, ebitda_min: float | None = None, ebitda_max: float | None = None, capital_min: float | None = None, capital_max: float | None = None, estimated_value_min: float | None = None, estimated_value_max: float | None = None, registration_year_min: int | None = None, registration_year_max: int | None = None, registration_date_min: Date | None = None, registration_date_max: Date | None = None, last_report_year_min: int | None = None, last_report_year_max: int | None = None, status_active: bool | None = None, legal_form: str | None = None, has_email: bool | None = None, has_website: bool | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `q` — query · `keywords` — query · `pkd` — query · `primary_only` — query · `currency` — query · `voivodeship` — query · `postal_code` — query · `city` — query · `revenue_min` — query · `revenue_max` — query · `revenue_operating_min` — query · `revenue_operating_max` — query · `profit_operating_min` — query · `profit_operating_max` — query · `profit_net_min` — query · `profit_net_max` — query · `income_tax_min` — query · `income_tax_max` — query · `cost_wages_min` — query · `cost_wages_max` — query · `cost_amortization_min` — query · `cost_amortization_max` — query · `total_assets_min` — query · `total_assets_max` — query · `ebitda_min` — query · `ebitda_max` — query · `capital_min` — query · `capital_max` — query · `estimated_value_min` — query · `estimated_value_max` — query · `registration_year_min` — query · `registration_year_max` — query · `registration_date_min` — query · `registration_date_max` — query · `last_report_year_min` — query · `last_report_year_max` — query · `status_active` — query · `legal_form` — query · `has_email` — query · `has_website` — query
- **Returns (parsed)**: `CompanyCountResponse`
- **Returns (raw)**: `ApiResult[CompanyCountResponse, GetCompaniesCountErrorBody]`
- **Error**: `GetCompaniesCountErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401, 429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `CurrencyOrStr` | `compabase/models/enums/currency.py` |
| `CompanyCountResponse` | `compabase/models/company_count_response.py` |
| `GetCompaniesCountErrorBody` | `compabase/errors/get_companies_count_error.py` |
| `ErrorResponse` | `compabase/models/error_response.py` |

### client.companies.get_companies_export

- **Route**: `GET /companies/export`
- **Auth**: `api_key_auth` OR `bearer_auth`
- **Signature**: `def get_companies_export(*, q: str | None = None, keywords: str | None = None, limit: int | None = 100, offset: int | None = 0, cursor: UUID | None = None, pkd: str | None = None, primary_only: bool | None = True, has_email: bool | None = None, has_website: bool | None = None, status_active: bool | None = None, revenue_min: float | None = None, revenue_max: float | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `q` — query · `keywords` — query · `limit` — query · `offset` — query · `cursor` — query · `pkd` — query · `primary_only` — query · `has_email` — query · `has_website` — query · `status_active` — query · `revenue_min` — query · `revenue_max` — query
- **Returns (parsed)**: `CompanyListResponse`
- **Returns (raw)**: `ApiResult[CompanyListResponse, GetCompaniesExportErrorBody]`
- **Error**: `GetCompaniesExportErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401, 429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `CompanyListResponse` | `compabase/models/company_list_response.py` |
| `GetCompaniesExportErrorBody` | `compabase/errors/get_companies_export_error.py` |
| `ErrorResponse` | `compabase/models/error_response.py` |

### client.companies.get_companies_krs_by_krs

- **Route**: `GET /companies/krs/{krs}`
- **Auth**: `api_key_auth` OR `bearer_auth`
- **Signature**: `def get_companies_krs_by_krs(krs: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `krs`
- **Params**: `krs` — path
- **Returns (parsed)**: `Any`
- **Returns (raw)**: `ApiResult[Any, GetCompaniesKrsByKrsErrorBody]`
- **Error**: `GetCompaniesKrsByKrsErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401, 404, 429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GetCompaniesKrsByKrsErrorBody` | `compabase/errors/get_companies_krs_by_krs_error.py` |
| `ErrorResponse` | `compabase/models/error_response.py` |

### client.companies.get_companies_krs_by_krs_connections

- **Route**: `GET /companies/krs/{krs}/connections`
- **Auth**: `api_key_auth` OR `bearer_auth`
- **Signature**: `def get_companies_krs_by_krs_connections(krs: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `krs`
- **Params**: `krs` — path
- **Returns (parsed)**: `Any`
- **Returns (raw)**: `ApiResult[Any, GetCompaniesKrsByKrsConnectionsErrorBody]`
- **Error**: `GetCompaniesKrsByKrsConnectionsErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401, 404, 429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GetCompaniesKrsByKrsConnectionsErrorBody` | `compabase/errors/get_companies_krs_by_krs_connections_error.py` |
| `ErrorResponse` | `compabase/models/error_response.py` |

### client.companies.get_companies_krs_by_krs_group

- **Route**: `GET /companies/krs/{krs}/group`
- **Auth**: `api_key_auth` OR `bearer_auth`
- **Signature**: `def get_companies_krs_by_krs_group(krs: str, *, limit: int | None = 50, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `krs`
- **Params**: `krs` — path · `limit` — query
- **Returns (parsed)**: `Any`
- **Returns (raw)**: `ApiResult[Any, GetCompaniesKrsByKrsGroupErrorBody]`
- **Error**: `GetCompaniesKrsByKrsGroupErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [404, anything unmapped]

| Type | Source |
| --- | --- |
| `GetCompaniesKrsByKrsGroupErrorBody` | `compabase/errors/get_companies_krs_by_krs_group_error.py` |

### client.companies.get_companies_krs_by_krs_status

- **Route**: `GET /companies/krs/{krs}/status`
- **Auth**: `api_key_auth` OR `bearer_auth`
- **Signature**: `def get_companies_krs_by_krs_status(krs: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `krs`
- **Params**: `krs` — path
- **Returns (parsed)**: `Any`
- **Returns (raw)**: `ApiResult[Any, GetCompaniesKrsByKrsStatusErrorBody]`
- **Error**: `GetCompaniesKrsByKrsStatusErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401, 404, 429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GetCompaniesKrsByKrsStatusErrorBody` | `compabase/errors/get_companies_krs_by_krs_status_error.py` |
| `ErrorResponse` | `compabase/models/error_response.py` |

### client.companies.get_companies_krs_by_krs_structure_people

- **Route**: `GET /companies/krs/{krs}/structure-people`
- **Auth**: `api_key_auth` OR `bearer_auth`
- **Signature**: `def get_companies_krs_by_krs_structure_people(krs: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `krs`
- **Params**: `krs` — path
- **Returns (parsed)**: `Any`
- **Returns (raw)**: `ApiResult[Any, GetCompaniesKrsByKrsStructurePeopleErrorBody]`
- **Error**: `GetCompaniesKrsByKrsStructurePeopleErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401, 404, 429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GetCompaniesKrsByKrsStructurePeopleErrorBody` | `compabase/errors/get_companies_krs_by_krs_structure_people_error.py` |
| `ErrorResponse` | `compabase/models/error_response.py` |

