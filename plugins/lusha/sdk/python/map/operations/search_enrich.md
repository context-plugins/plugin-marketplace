<!-- Generated file — do not edit; regenerated with the SDK. -->

# SearchEnrich — operations

Accessor: `client.search_enrich` · Source: `lusha/apis/search_enrich.py` · 2 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.search_enrich.search_and_enrich_companies

- **Route**: `POST /v3/companies/search-and-enrich`
- **Auth**: `api_key_auth`
- **Signature**: `def search_and_enrich_companies(body: V3CompaniesSearchAndEnrichRequest | V3CompaniesSearchAndEnrichRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `V3CompaniesSearchAndEnrichResponse`
- **Returns (raw)**: `ApiResult[V3CompaniesSearchAndEnrichResponse, SearchAndEnrichCompaniesErrorBody]`
- **Error**: `SearchAndEnrichCompaniesErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401, 402, 403, 429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `V3CompaniesSearchAndEnrichRequest` | `lusha/models/v3_companies_search_and_enrich_request.py` |
| `V3CompaniesSearchAndEnrichRequestDict` | `lusha/models/v3_companies_search_and_enrich_request.py` |
| `V3CompaniesSearchAndEnrichResponse` | `lusha/models/v3_companies_search_and_enrich_response.py` |
| `SearchAndEnrichCompaniesErrorBody` | `lusha/errors/search_and_enrich_companies_error.py` |
| `ErrorResponse` | `lusha/models/error_response.py` |

### client.search_enrich.search_and_enrich_contacts

- **Route**: `POST /v3/contacts/search-and-enrich`
- **Auth**: `api_key_auth`
- **Signature**: `def search_and_enrich_contacts(body: V3ContactsSearchAndEnrichRequest | V3ContactsSearchAndEnrichRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `V3ContactsSearchAndEnrichResponse`
- **Returns (raw)**: `ApiResult[V3ContactsSearchAndEnrichResponse, SearchAndEnrichContactsErrorBody]`
- **Error**: `SearchAndEnrichContactsErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401, 402, 403, 429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `V3ContactsSearchAndEnrichRequest` | `lusha/models/v3_contacts_search_and_enrich_request.py` |
| `V3ContactsSearchAndEnrichRequestDict` | `lusha/models/v3_contacts_search_and_enrich_request.py` |
| `V3ContactsSearchAndEnrichResponse` | `lusha/models/v3_contacts_search_and_enrich_response.py` |
| `SearchAndEnrichContactsErrorBody` | `lusha/errors/search_and_enrich_contacts_error.py` |
| `ErrorResponse` | `lusha/models/error_response.py` |

