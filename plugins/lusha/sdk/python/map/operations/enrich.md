<!-- Generated file — do not edit; regenerated with the SDK. -->

# Enrich — operations

Accessor: `client.enrich` · Source: `lusha/apis/enrich.py` · 2 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.enrich.enrich_companies

- **Route**: `POST /v3/companies/enrich`
- **Auth**: `api_key_auth`
- **Signature**: `def enrich_companies(body: V3CompaniesEnrichRequest | V3CompaniesEnrichRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `V3CompaniesEnrichResponse`
- **Returns (raw)**: `ApiResult[V3CompaniesEnrichResponse, EnrichCompaniesErrorBody]`
- **Error**: `EnrichCompaniesErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401, 402, 403, 429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `V3CompaniesEnrichRequest` | `lusha/models/v3_companies_enrich_request.py` |
| `V3CompaniesEnrichRequestDict` | `lusha/models/v3_companies_enrich_request.py` |
| `V3CompaniesEnrichResponse` | `lusha/models/v3_companies_enrich_response.py` |
| `EnrichCompaniesErrorBody` | `lusha/errors/enrich_companies_error.py` |
| `ErrorResponse` | `lusha/models/error_response.py` |

### client.enrich.enrich_contacts

- **Route**: `POST /v3/contacts/enrich`
- **Auth**: `api_key_auth`
- **Signature**: `def enrich_contacts(body: V3ContactsEnrichRequest | V3ContactsEnrichRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `V3ContactsEnrichResponse`
- **Returns (raw)**: `ApiResult[V3ContactsEnrichResponse, EnrichContactsErrorBody]`
- **Error**: `EnrichContactsErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401, 402, 403, 429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `V3ContactsEnrichRequest` | `lusha/models/v3_contacts_enrich_request.py` |
| `V3ContactsEnrichRequestDict` | `lusha/models/v3_contacts_enrich_request.py` |
| `V3ContactsEnrichResponse` | `lusha/models/v3_contacts_enrich_response.py` |
| `EnrichContactsErrorBody` | `lusha/errors/enrich_contacts_error.py` |
| `ErrorResponse` | `lusha/models/error_response.py` |

