<!-- Generated file — do not edit; regenerated with the SDK. -->

# Search — operations

Accessor: `client.search` · Source: `lusha/apis/search.py` · 2 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.search.search_companies

- **Route**: `POST /v3/companies/search`
- **Auth**: `api_key_auth`
- **Signature**: `def search_companies(body: V3CompaniesSearchRequest | V3CompaniesSearchRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `V3CompaniesSearchResponse`
- **Returns (raw)**: `ApiResult[V3CompaniesSearchResponse, SearchCompaniesErrorBody]`
- **Error**: `SearchCompaniesErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401, 402, 403, 429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `V3CompaniesSearchRequest` | `lusha/models/v3_companies_search_request.py` |
| `V3CompaniesSearchRequestDict` | `lusha/models/v3_companies_search_request.py` |
| `V3CompaniesSearchResponse` | `lusha/models/v3_companies_search_response.py` |
| `SearchCompaniesErrorBody` | `lusha/errors/search_companies_error.py` |
| `ErrorResponse` | `lusha/models/error_response.py` |

### client.search.search_contacts

- **Route**: `POST /v3/contacts/search`
- **Auth**: `api_key_auth`
- **Signature**: `def search_contacts(body: V3ContactsSearchRequest | V3ContactsSearchRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `V3ContactsSearchResponse`
- **Returns (raw)**: `ApiResult[V3ContactsSearchResponse, SearchContactsErrorBody]`
- **Error**: `SearchContactsErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401, 402, 403, 429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `V3ContactsSearchRequest` | `lusha/models/v3_contacts_search_request.py` |
| `V3ContactsSearchRequestDict` | `lusha/models/v3_contacts_search_request.py` |
| `V3ContactsSearchResponse` | `lusha/models/v3_contacts_search_response.py` |
| `SearchContactsErrorBody` | `lusha/errors/search_contacts_error.py` |
| `ErrorResponse` | `lusha/models/error_response.py` |

