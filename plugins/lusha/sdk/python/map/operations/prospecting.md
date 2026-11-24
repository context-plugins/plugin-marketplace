<!-- Generated file — do not edit; regenerated with the SDK. -->

# Prospecting — operations

Accessor: `client.prospecting` · Source: `lusha/apis/prospecting.py` · 2 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.prospecting.prospecting_companies

- **Route**: `POST /v3/companies/prospecting`
- **Auth**: `api_key_auth`
- **Signature**: `def prospecting_companies(body: V3ProspectingCompaniesRequest | V3ProspectingCompaniesRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `V3ProspectingCompaniesResponse`
- **Returns (raw)**: `ApiResult[V3ProspectingCompaniesResponse, ProspectingCompaniesErrorBody]`
- **Error**: `ProspectingCompaniesErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401, 402, 403, 429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `V3ProspectingCompaniesRequest` | `lusha/models/v3_prospecting_companies_request.py` |
| `V3ProspectingCompaniesRequestDict` | `lusha/models/v3_prospecting_companies_request.py` |
| `V3ProspectingCompaniesResponse` | `lusha/models/v3_prospecting_companies_response.py` |
| `ProspectingCompaniesErrorBody` | `lusha/errors/prospecting_companies_error.py` |
| `ErrorResponse` | `lusha/models/error_response.py` |

### client.prospecting.prospecting_contacts

- **Route**: `POST /v3/contacts/prospecting`
- **Auth**: `api_key_auth`
- **Signature**: `def prospecting_contacts(body: V3ProspectingContactsRequest | V3ProspectingContactsRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `V3ProspectingContactsResponse`
- **Returns (raw)**: `ApiResult[V3ProspectingContactsResponse, ProspectingContactsErrorBody]`
- **Error**: `ProspectingContactsErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401, 402, 403, 429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `V3ProspectingContactsRequest` | `lusha/models/v3_prospecting_contacts_request.py` |
| `V3ProspectingContactsRequestDict` | `lusha/models/v3_prospecting_contacts_request.py` |
| `V3ProspectingContactsResponse` | `lusha/models/v3_prospecting_contacts_response.py` |
| `ProspectingContactsErrorBody` | `lusha/errors/prospecting_contacts_error.py` |
| `ErrorResponse` | `lusha/models/error_response.py` |

