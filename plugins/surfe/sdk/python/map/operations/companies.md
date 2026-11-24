<!-- Generated file — do not edit; regenerated with the SDK. -->

# Companies — operations

Accessor: `client.companies` · Source: `surfe/apis/companies.py` · 3 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.companies.get_company_enrichment

- **Route**: `GET /companies/enrich/{id}`
- **Auth**: `bearer_auth`
- **Signature**: `def get_company_enrichment(id_: UUID, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id`
- **Returns (parsed)**: `CompanyEnrichmentResult`
- **Returns (raw)**: `ApiResult[CompanyEnrichmentResult, GetCompanyEnrichmentErrorBody]`
- **Error**: `GetCompanyEnrichmentErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [401, 404, 429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `CompanyEnrichmentResult` | `surfe/models/company_enrichment_result.py` |
| `GetCompanyEnrichmentErrorBody` | `surfe/errors/get_company_enrichment_error.py` |
| `Error` | `surfe/models/error.py` |

### client.companies.search_companies

- **Route**: `POST /companies/search`
- **Auth**: `bearer_auth`
- **Signature**: `def search_companies(body: CompanySearchRequest | CompanySearchRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `CompanySearchResponse`
- **Returns (raw)**: `ApiResult[CompanySearchResponse, SearchCompaniesErrorBody]`
- **Error**: `SearchCompaniesErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [401, 402, 429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `CompanySearchRequest` | `surfe/models/company_search_request.py` |
| `CompanySearchRequestDict` | `surfe/models/company_search_request.py` |
| `CompanySearchResponse` | `surfe/models/company_search_response.py` |
| `SearchCompaniesErrorBody` | `surfe/errors/search_companies_error.py` |
| `Error` | `surfe/models/error.py` |

### client.companies.start_company_enrichment

- **Route**: `POST /companies/enrich`
- **Auth**: `bearer_auth`
- **Signature**: `def start_company_enrichment(body: CompanyEnrichmentRequest | CompanyEnrichmentRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `EnrichmentJobAccepted`
- **Returns (raw)**: `ApiResult[EnrichmentJobAccepted, StartCompanyEnrichmentErrorBody]`
- **Error**: `StartCompanyEnrichmentErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [401, 402, 429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `CompanyEnrichmentRequest` | `surfe/models/company_enrichment_request.py` |
| `CompanyEnrichmentRequestDict` | `surfe/models/company_enrichment_request.py` |
| `EnrichmentJobAccepted` | `surfe/models/enrichment_job_accepted.py` |
| `StartCompanyEnrichmentErrorBody` | `surfe/errors/start_company_enrichment_error.py` |
| `Error` | `surfe/models/error.py` |

