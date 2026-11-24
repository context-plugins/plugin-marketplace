<!-- Generated file — do not edit; regenerated with the SDK. -->

# Enrichment — operations

Accessor: `client.enrichment` · Source: `lusha/apis/enrichment.py` · 4 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.enrichment.search_multiple_companies_v2

- **Route**: `POST /v2/company`
- **Auth**: `api_key_auth`
- **Signature**: `def search_multiple_companies_v2(body: CompaniesBulkRequest | CompaniesBulkRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `dict[str, CompanyBulkResponse]`
- **Returns (raw)**: `ApiResult[dict[str, CompanyBulkResponse], SearchMultipleCompaniesV2ErrorBody]`
- **Error**: `SearchMultipleCompaniesV2ErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `CompaniesBulkRequest` | `lusha/models/companies_bulk_request.py` |
| `CompaniesBulkRequestDict` | `lusha/models/companies_bulk_request.py` |
| `CompanyBulkResponse` | `lusha/models/company_bulk_response.py` |
| `SearchMultipleCompaniesV2ErrorBody` | `lusha/errors/search_multiple_companies_v2_error.py` |
| `ErrorResponse` | `lusha/models/error_response.py` |

### client.enrichment.search_multiple_contacts

- **Route**: `POST /v2/person`
- **Auth**: `api_key_auth`
- **Signature**: `def search_multiple_contacts(body: SearchBulkContactsRequest | SearchBulkContactsRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `BulkPersonResponse`
- **Returns (raw)**: `ApiResult[BulkPersonResponse, SearchMultipleContactsErrorBody]`
- **Error**: `SearchMultipleContactsErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401, 403, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `SearchBulkContactsRequest` | `lusha/models/search_bulk_contacts_request.py` |
| `SearchBulkContactsRequestDict` | `lusha/models/search_bulk_contacts_request.py` |
| `BulkPersonResponse` | `lusha/models/bulk_person_response.py` |
| `SearchMultipleContactsErrorBody` | `lusha/errors/search_multiple_contacts_error.py` |
| `ErrorResponse` | `lusha/models/error_response.py` |

### client.enrichment.search_single_company_v2

- **Route**: `GET /v2/company`
- **Auth**: `api_key_auth`
- **Signature**: `def search_single_company_v2(*, domain: str | None = None, company: str | None = None, company_id: str | None = None, signals: list[Signal1OrStr] | None = None, signals_start_date: Date | None = None, partial_company: bool | None = True, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `domain` — query · `company` — query · `company_id` — query `companyId` · `signals` — query · `signals_start_date` — query `signalsStartDate` · `partial_company` — query `partialCompany`
- **Returns (parsed)**: `CompanySingleResponse`
- **Returns (raw)**: `ApiResult[CompanySingleResponse, SearchSingleCompanyV2ErrorBody]`
- **Error**: `SearchSingleCompanyV2ErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401, 404, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `Signal1OrStr` | `lusha/models/enums/signal1.py` |
| `CompanySingleResponse` | `lusha/models/company_single_response.py` |
| `SearchSingleCompanyV2ErrorBody` | `lusha/errors/search_single_company_v2_error.py` |
| `ErrorResponse` | `lusha/models/error_response.py` |

### client.enrichment.search_single_contact

- **Route**: `GET /v2/person`
- **Auth**: `api_key_auth`
- **Signature**: `def search_single_contact(*, first_name: str | None = None, last_name: str | None = None, person_id: str | None = None, company_name: str | None = None, company_domain: str | None = None, email: str | None = None, linkedin_url: str | None = None, refresh_job_info: bool | None = False, filter_by: FilterByOrStr | None = None, reveal_emails: bool | None = True, reveal_phones: bool | None = True, signals: list[SignalOrStr] | None = None, signals_start_date: Date | None = None, partial_profile: bool | None = False, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `first_name` — query `firstName` · `last_name` — query `lastName` · `person_id` — query `personId` · `company_name` — query `companyName` · `company_domain` — query `companyDomain` · `email` — query · `linkedin_url` — query `linkedinUrl` · `refresh_job_info` — query `refreshJobInfo` · `filter_by` — query `filterBy` · `reveal_emails` — query `revealEmails` · `reveal_phones` — query `revealPhones` · `signals` — query · `signals_start_date` — query `signalsStartDate` · `partial_profile` — query `partialProfile`
- **Returns (parsed)**: `SingleContactResponse`
- **Returns (raw)**: `ApiResult[SingleContactResponse, SearchSingleContactErrorBody]`
- **Error**: `SearchSingleContactErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401, 403, 404, 429, 451, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `FilterByOrStr` | `lusha/models/enums/filter_by.py` |
| `SignalOrStr` | `lusha/models/enums/signal.py` |
| `SingleContactResponse` | `lusha/models/single_contact_response.py` |
| `SearchSingleContactErrorBody` | `lusha/errors/search_single_contact_error.py` |
| `ErrorResponse` | `lusha/models/error_response.py` |

