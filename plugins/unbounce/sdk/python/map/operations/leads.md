<!-- Generated file — do not edit; regenerated with the SDK. -->

# Leads — operations

Accessor: `client.leads` · Source: `unbounce/apis/leads.py` · 5 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.leads.get_lead

- **Route**: `GET /leads/{lead_id}`
- **Auth**: `api_key_auth` OR `oauth2`
- **Signature**: `def get_lead(lead_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `lead_id`
- **Params**: `lead_id` — path
- **Returns (parsed)**: `Lead`
- **Returns (raw)**: `ApiResult[Lead, RawError]`
- **Error**: `RawError` — **Case B**

| Type | Source |
| --- | --- |
| `Lead` | `unbounce/models/lead.py` |

### client.leads.get_lead_deletion_request

- **Route**: `GET /pages/{page_id}/lead_deletion_request/{lead_deletion_request_id}`
- **Auth**: `api_key_auth` OR `oauth2`
- **Signature**: `def get_lead_deletion_request(page_id: str, lead_deletion_request_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `page_id`, `lead_deletion_request_id`
- **Params**: `page_id` — path · `lead_deletion_request_id` — path
- **Returns (parsed)**: `LeadDeletionRequest`
- **Returns (raw)**: `ApiResult[LeadDeletionRequest, RawError]`
- **Error**: `RawError` — **Case B**

| Type | Source |
| --- | --- |
| `LeadDeletionRequest` | `unbounce/models/lead_deletion_request.py` |

### client.leads.get_lead_for_page

- **Route**: `GET /pages/{page_id}/leads/{lead_id}`
- **Auth**: `api_key_auth` OR `oauth2`
- **Signature**: `def get_lead_for_page(page_id: str, lead_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `page_id`, `lead_id`
- **Params**: `page_id` — path · `lead_id` — path
- **Returns (parsed)**: `Lead`
- **Returns (raw)**: `ApiResult[Lead, RawError]`
- **Error**: `RawError` — **Case B**

| Type | Source |
| --- | --- |
| `Lead` | `unbounce/models/lead.py` |

### client.leads.list_lead_deletion_requests

- **Route**: `GET /pages/{page_id}/lead_deletion_request`
- **Auth**: `api_key_auth` OR `oauth2`
- **Signature**: `def list_lead_deletion_requests(page_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `page_id`
- **Params**: `page_id` — path
- **Returns (parsed)**: `PagesLeadDeletionRequestResponse`
- **Returns (raw)**: `ApiResult[PagesLeadDeletionRequestResponse, RawError]`
- **Error**: `RawError` — **Case B**

| Type | Source |
| --- | --- |
| `PagesLeadDeletionRequestResponse` | `unbounce/models/pages_lead_deletion_request_response.py` |

### client.leads.list_leads_for_page

- **Route**: `GET /pages/{page_id}/leads`
- **Auth**: `api_key_auth` OR `oauth2`
- **Signature**: `def list_leads_for_page(page_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `page_id`
- **Params**: `page_id` — path
- **Returns (parsed)**: `PagesLeadsResponse`
- **Returns (raw)**: `ApiResult[PagesLeadsResponse, RawError]`
- **Error**: `RawError` — **Case B**

| Type | Source |
| --- | --- |
| `PagesLeadsResponse` | `unbounce/models/pages_leads_response.py` |

