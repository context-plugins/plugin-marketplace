<!-- Generated file — do not edit; regenerated with the SDK. -->

# Lookalikes — operations

Accessor: `client.lookalikes` · Source: `lusha/apis/lookalikes.py` · 4 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.lookalikes.get_company_lookalikes

- **Route**: `POST /v3/companies/lookalike`
- **Auth**: `api_key_auth`
- **Signature**: `def get_company_lookalikes(body: CompanyLookalikesRequest | CompanyLookalikesRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `CompanyLookalikesResponse`
- **Returns (raw)**: `ApiResult[CompanyLookalikesResponse, GetCompanyLookalikesErrorBody]`
- **Error**: `GetCompanyLookalikesErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 403, 410, 500] · `RawError` [402, anything unmapped]

| Type | Source |
| --- | --- |
| `CompanyLookalikesRequest` | `lusha/models/company_lookalikes_request.py` |
| `CompanyLookalikesRequestDict` | `lusha/models/company_lookalikes_request.py` |
| `CompanyLookalikesResponse` | `lusha/models/company_lookalikes_response.py` |
| `GetCompanyLookalikesErrorBody` | `lusha/errors/get_company_lookalikes_error.py` |
| `ErrorResponse` | `lusha/models/error_response.py` |

### client.lookalikes.get_contact_lookalikes

- **Route**: `POST /v3/contacts/lookalike`
- **Auth**: `api_key_auth`
- **Signature**: `def get_contact_lookalikes(body: ContactLookalikesRequest | ContactLookalikesRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `ContactLookalikesResponse`
- **Returns (raw)**: `ApiResult[ContactLookalikesResponse, GetContactLookalikesErrorBody]`
- **Error**: `GetContactLookalikesErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 403, 500] · `DedupeSessionInvalidError` [410] · `RawError` [402, anything unmapped]

| Type | Source |
| --- | --- |
| `ContactLookalikesRequest` | `lusha/models/contact_lookalikes_request.py` |
| `ContactLookalikesRequestDict` | `lusha/models/contact_lookalikes_request.py` |
| `ContactLookalikesResponse` | `lusha/models/contact_lookalikes_response.py` |
| `GetContactLookalikesErrorBody` | `lusha/errors/get_contact_lookalikes_error.py` |
| `ErrorResponse` | `lusha/models/error_response.py` |
| `DedupeSessionInvalidError` | `lusha/models/dedupe_session_invalid_error.py` |

### client.lookalikes.post_v3_lookalike_companies

- **Route**: `POST /v3/lookalike/companies`
- **Auth**: `api_key_auth`
- **Signature**: `def post_v3_lookalike_companies(body: CompanyLookalikesRequest2 | CompanyLookalikesRequest2Dict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `CompanyLookalikesResponse2`
- **Returns (raw)**: `ApiResult[CompanyLookalikesResponse2, PostV3LookalikeCompaniesErrorBody]`
- **Error**: `PostV3LookalikeCompaniesErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 403, 410, 500] · `RawError` [402, anything unmapped]

| Type | Source |
| --- | --- |
| `CompanyLookalikesRequest2` | `lusha/models/company_lookalikes_request2.py` |
| `CompanyLookalikesRequest2Dict` | `lusha/models/company_lookalikes_request2.py` |
| `CompanyLookalikesResponse2` | `lusha/models/company_lookalikes_response2.py` |
| `PostV3LookalikeCompaniesErrorBody` | `lusha/errors/post_v3_lookalike_companies_error.py` |
| `ErrorResponse` | `lusha/models/error_response.py` |

### client.lookalikes.post_v3_lookalike_contacts

- **Route**: `POST /v3/lookalike/contacts`
- **Auth**: `api_key_auth`
- **Signature**: `def post_v3_lookalike_contacts(body: ContactLookalikesRequest2 | ContactLookalikesRequest2Dict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `ContactLookalikesResponse2`
- **Returns (raw)**: `ApiResult[ContactLookalikesResponse2, PostV3LookalikeContactsErrorBody]`
- **Error**: `PostV3LookalikeContactsErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 403, 500] · `DedupeSessionInvalidError` [410] · `RawError` [402, anything unmapped]

| Type | Source |
| --- | --- |
| `ContactLookalikesRequest2` | `lusha/models/contact_lookalikes_request2.py` |
| `ContactLookalikesRequest2Dict` | `lusha/models/contact_lookalikes_request2.py` |
| `ContactLookalikesResponse2` | `lusha/models/contact_lookalikes_response2.py` |
| `PostV3LookalikeContactsErrorBody` | `lusha/errors/post_v3_lookalike_contacts_error.py` |
| `ErrorResponse` | `lusha/models/error_response.py` |
| `DedupeSessionInvalidError` | `lusha/models/dedupe_session_invalid_error.py` |

