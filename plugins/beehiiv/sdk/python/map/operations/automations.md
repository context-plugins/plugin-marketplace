<!-- Generated file — do not edit; regenerated with the SDK. -->

# Automations — operations

Accessor: `client.automations` · Source: `beehiiv/apis/automations.py` · 3 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.automations.index6

- **Route**: `GET /publications/{publicationId}/automations`
- **Server**: `default`
- **Signature**: `def index6(publication_id: str, authorization: str, *, expand: AutomationsListRequestExpandItemOrStr | None = None, limit: int | None = None, page: int | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `publication_id`, `authorization`
- **Params**: `publication_id` — path `publicationId` · `expand` — query `expand[]` · `limit` — query · `page` — query · `authorization` — header `Authorization`
- **Returns (parsed)**: `AutomationsListResponse`
- **Returns (raw)**: `ApiResult[AutomationsListResponse, Index6ErrorBody]`
- **Error**: `Index6ErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 404, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `AutomationsListRequestExpandItemOrStr` | `beehiiv/models/enums/automations_list_request_expand_item.py` |
| `AutomationsListResponse` | `beehiiv/models/automations_list_response.py` |
| `Index6ErrorBody` | `beehiiv/errors/index6_error.py` |
| `Error` | `beehiiv/models/error.py` |

### client.automations.list_emails

- **Route**: `GET /publications/{publicationId}/automations/{automationId}/emails`
- **Server**: `default`
- **Signature**: `def list_emails(publication_id: str, automation_id: str, authorization: str, *, limit: int | None = None, cursor: str | None = None, page: int | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `publication_id`, `automation_id`, `authorization`
- **Params**: `publication_id` — path `publicationId` · `automation_id` — path `automationId` · `limit` — query · `cursor` — query · `page` — query · `authorization` — header `Authorization`
- **Returns (parsed)**: `AutomationEmailsListResponse`
- **Returns (raw)**: `ApiResult[AutomationEmailsListResponse, ListEmailsErrorBody]`
- **Error**: `ListEmailsErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 404, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `AutomationEmailsListResponse` | `beehiiv/models/automation_emails_list_response.py` |
| `ListEmailsErrorBody` | `beehiiv/errors/list_emails_error.py` |
| `Error` | `beehiiv/models/error.py` |

### client.automations.show3

- **Route**: `GET /publications/{publicationId}/automations/{automationId}`
- **Server**: `default`
- **Signature**: `def show3(publication_id: str, automation_id: str, authorization: str, *, expand: AutomationsGetRequestExpandItemOrStr | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `publication_id`, `automation_id`, `authorization`
- **Params**: `publication_id` — path `publicationId` · `automation_id` — path `automationId` · `expand` — query `expand[]` · `authorization` — header `Authorization`
- **Returns (parsed)**: `AutomationsGetResponse`
- **Returns (raw)**: `ApiResult[AutomationsGetResponse, Show3ErrorBody]`
- **Error**: `Show3ErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 404, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `AutomationsGetRequestExpandItemOrStr` | `beehiiv/models/enums/automations_get_request_expand_item.py` |
| `AutomationsGetResponse` | `beehiiv/models/automations_get_response.py` |
| `Show3ErrorBody` | `beehiiv/errors/show3_error.py` |
| `Error` | `beehiiv/models/error.py` |

