<!-- Generated file — do not edit; regenerated with the SDK. -->

# ProspectingSearchEnrich — operations

Accessor: `client.prospecting_search_enrich` · Source: `lusha/apis/prospecting_search_enrich.py` · 4 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.prospecting_search_enrich.enrich_prospecting_companies

- **Route**: `POST /prospecting/company/enrich`
- **Auth**: `api_key_auth`
- **Signature**: `def enrich_prospecting_companies(body: CompanyEnrichRequest | CompanyEnrichRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `CompanyEnrichResponse`
- **Returns (raw)**: `ApiResult[CompanyEnrichResponse, EnrichProspectingCompaniesErrorBody]`
- **Error**: `EnrichProspectingCompaniesErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `CompanyEnrichRequest` | `lusha/models/company_enrich_request.py` |
| `CompanyEnrichRequestDict` | `lusha/models/company_enrich_request.py` |
| `CompanyEnrichResponse` | `lusha/models/company_enrich_response.py` |
| `EnrichProspectingCompaniesErrorBody` | `lusha/errors/enrich_prospecting_companies_error.py` |
| `ErrorResponse` | `lusha/models/error_response.py` |

### client.prospecting_search_enrich.enrich_prospecting_contacts

- **Route**: `POST /prospecting/contact/enrich`
- **Auth**: `api_key_auth`
- **Signature**: `def enrich_prospecting_contacts(body: ContactEnrichRequest | ContactEnrichRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `ContactEnrichResponse`
- **Returns (raw)**: `ApiResult[ContactEnrichResponse, EnrichProspectingContactsErrorBody]`
- **Error**: `EnrichProspectingContactsErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401, 403, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ContactEnrichRequest` | `lusha/models/contact_enrich_request.py` |
| `ContactEnrichRequestDict` | `lusha/models/contact_enrich_request.py` |
| `ContactEnrichResponse` | `lusha/models/contact_enrich_response.py` |
| `EnrichProspectingContactsErrorBody` | `lusha/errors/enrich_prospecting_contacts_error.py` |
| `ErrorResponse` | `lusha/models/error_response.py` |

### client.prospecting_search_enrich.search_prospecting_companies

- **Route**: `POST /prospecting/company/search`
- **Auth**: `api_key_auth`
- **Signature**: `def search_prospecting_companies(body: CompanySearchRequest | CompanySearchRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `CompanySearchResponse`
- **Returns (raw)**: `ApiResult[CompanySearchResponse, SearchProspectingCompaniesErrorBody]`
- **Error**: `SearchProspectingCompaniesErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `CompanySearchRequest` | `lusha/models/company_search_request.py` |
| `CompanySearchRequestDict` | `lusha/models/company_search_request.py` |
| `CompanySearchResponse` | `lusha/models/company_search_response.py` |
| `SearchProspectingCompaniesErrorBody` | `lusha/errors/search_prospecting_companies_error.py` |
| `ErrorResponse` | `lusha/models/error_response.py` |

### client.prospecting_search_enrich.search_prospecting_contacts

- **Route**: `POST /prospecting/contact/search`
- **Auth**: `api_key_auth`
- **Signature**: `def search_prospecting_contacts(body: ContactSearchRequest | ContactSearchRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `ContactSearchResponse`
- **Returns (raw)**: `ApiResult[ContactSearchResponse, SearchProspectingContactsErrorBody]`
- **Error**: `SearchProspectingContactsErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401, 403, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ContactSearchRequest` | `lusha/models/contact_search_request.py` |
| `ContactSearchRequestDict` | `lusha/models/contact_search_request.py` |
| `ContactSearchResponse` | `lusha/models/contact_search_response.py` |
| `SearchProspectingContactsErrorBody` | `lusha/errors/search_prospecting_contacts_error.py` |
| `ErrorResponse` | `lusha/models/error_response.py` |

