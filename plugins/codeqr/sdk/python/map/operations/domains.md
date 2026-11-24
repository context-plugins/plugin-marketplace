<!-- Generated file — do not edit; regenerated with the SDK. -->

# Domains — operations

Accessor: `client.domains` · Source: `code_qr/apis/domains.py` · 4 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.domains.create_domain

- **Route**: `POST /domains`
- **Auth**: `token`
- **Signature**: `def create_domain(*, body: DomainsRequest | DomainsRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `DomainSchema`
- **Returns (raw)**: `ApiResult[DomainSchema, CreateDomainErrorBody]`
- **Error**: `CreateDomainErrorBody` — **Case A (typed)**
- **Error arms**: `M4001` [400, 401, 403, 404, 409, 410, 422, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `DomainsRequest` | `code_qr/models/domains_request.py` |
| `DomainsRequestDict` | `code_qr/models/domains_request.py` |
| `DomainSchema` | `code_qr/models/domain_schema.py` |
| `CreateDomainErrorBody` | `code_qr/errors/create_domain_error.py` |
| `M4001` | `code_qr/models/m4001.py` |

### client.domains.delete_domain

- **Route**: `DELETE /domains/{slug}`
- **Auth**: `token`
- **Signature**: `def delete_domain(slug: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `slug`
- **Params**: `slug` — path
- **Returns (parsed)**: `DomainsResponse`
- **Returns (raw)**: `ApiResult[DomainsResponse, DeleteDomainErrorBody]`
- **Error**: `DeleteDomainErrorBody` — **Case A (typed)**
- **Error arms**: `M4001` [400, 401, 403, 404, 409, 410, 422, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `DomainsResponse` | `code_qr/models/domains_response.py` |
| `DeleteDomainErrorBody` | `code_qr/errors/delete_domain_error.py` |
| `M4001` | `code_qr/models/m4001.py` |

### client.domains.list_domains

- **Route**: `GET /domains`
- **Auth**: `token`
- **Signature**: `def list_domains(*, archived: bool | None = False, search: str | None = None, page: float | None = 1.0, page_size: float | None = 50.0, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `archived` — query · `search` — query · `page` — query · `page_size` — query `pageSize`
- **Returns (parsed)**: `list[DomainSchema]`
- **Returns (raw)**: `ApiResult[list[DomainSchema], ListDomainsErrorBody]`
- **Error**: `ListDomainsErrorBody` — **Case A (typed)**
- **Error arms**: `M4001` [400, 401, 403, 404, 409, 410, 422, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `DomainSchema` | `code_qr/models/domain_schema.py` |
| `ListDomainsErrorBody` | `code_qr/errors/list_domains_error.py` |
| `M4001` | `code_qr/models/m4001.py` |

### client.domains.update_domain

- **Route**: `PATCH /domains/{slug}`
- **Auth**: `token`
- **Signature**: `def update_domain(slug: str, *, body: DomainsRequest1 | DomainsRequest1Dict | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `slug`
- **Params**: `slug` — path · `body` — JSON body
- **Returns (parsed)**: `DomainSchema`
- **Returns (raw)**: `ApiResult[DomainSchema, UpdateDomainErrorBody]`
- **Error**: `UpdateDomainErrorBody` — **Case A (typed)**
- **Error arms**: `M4001` [400, 401, 403, 404, 409, 410, 422, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `DomainsRequest1` | `code_qr/models/domains_request1.py` |
| `DomainsRequest1Dict` | `code_qr/models/domains_request1.py` |
| `DomainSchema` | `code_qr/models/domain_schema.py` |
| `UpdateDomainErrorBody` | `code_qr/errors/update_domain_error.py` |
| `M4001` | `code_qr/models/m4001.py` |

