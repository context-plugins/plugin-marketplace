<!-- Generated file — do not edit; regenerated with the SDK. -->

# Companies — operations

Accessor: `client.companies` · Source: `relm_crm/apis/companies.py` · 6 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.companies.create_company

- **Route**: `POST /companies`
- **Auth**: `bearer_auth` OR `oauth2`
- **Server**: `default`
- **Signature**: `def create_company(body: CompanyInput | CompanyInputDict, *, idempotency_key: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `idempotency_key` — header `Idempotency-Key` · `body` — JSON body
- **Returns (parsed)**: `Company`
- **Returns (raw)**: `ApiResult[Company, RawError]`
- **Error**: `RawError` — **Case B**

| Type | Source |
| --- | --- |
| `CompanyInput` | `relm_crm/models/company_input.py` |
| `CompanyInputDict` | `relm_crm/models/company_input.py` |
| `Company` | `relm_crm/models/company.py` |

### client.companies.delete_company

- **Route**: `DELETE /companies/{id}`
- **Auth**: `bearer_auth` OR `oauth2`
- **Server**: `default`
- **Signature**: `def delete_company(id_: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id`
- **Returns (parsed)**: `Deleted`
- **Returns (raw)**: `ApiResult[Deleted, RawError]`
- **Error**: `RawError` — **Case B**

| Type | Source |
| --- | --- |
| `Deleted` | `relm_crm/models/deleted.py` |

### client.companies.get_company

- **Route**: `GET /companies/{id}`
- **Auth**: `bearer_auth` OR `oauth2`
- **Server**: `default`
- **Signature**: `def get_company(id_: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id`
- **Returns (parsed)**: `Company`
- **Returns (raw)**: `ApiResult[Company, RawError]`
- **Error**: `RawError` — **Case B**

| Type | Source |
| --- | --- |
| `Company` | `relm_crm/models/company.py` |

### client.companies.list_companies

- **Route**: `GET /companies`
- **Auth**: `bearer_auth` OR `oauth2`
- **Server**: `default`
- **Signature**: `def list_companies(*, limit: int | None = 25, cursor: str | None = None, include_deleted: bool | None = None, q: str | None = None, domain: str | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `limit` — query · `cursor` — query · `include_deleted` — query · `q` — query · `domain` — query
- **Returns (parsed)**: `CompanyList`
- **Returns (raw)**: `ApiResult[CompanyList, RawError]`
- **Error**: `RawError` — **Case B**

| Type | Source |
| --- | --- |
| `CompanyList` | `relm_crm/models/company_list.py` |

### client.companies.restore_company

- **Route**: `POST /companies/{id}/restore`
- **Auth**: `bearer_auth` OR `oauth2`
- **Server**: `default`
- **Signature**: `def restore_company(id_: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id`
- **Returns (parsed)**: `Company`
- **Returns (raw)**: `ApiResult[Company, RawError]`
- **Error**: `RawError` — **Case B**

| Type | Source |
| --- | --- |
| `Company` | `relm_crm/models/company.py` |

### client.companies.update_company

- **Route**: `PATCH /companies/{id}`
- **Auth**: `bearer_auth` OR `oauth2`
- **Server**: `default`
- **Signature**: `def update_company(id_: str, body: CompanyInput | CompanyInputDict, *, if_match: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`, `body`
- **Params**: `id_` — path `id` · `if_match` — header `If-Match` · `body` — JSON body
- **Returns (parsed)**: `Company`
- **Returns (raw)**: `ApiResult[Company, RawError]`
- **Error**: `RawError` — **Case B**

| Type | Source |
| --- | --- |
| `CompanyInput` | `relm_crm/models/company_input.py` |
| `CompanyInputDict` | `relm_crm/models/company_input.py` |
| `Company` | `relm_crm/models/company.py` |

