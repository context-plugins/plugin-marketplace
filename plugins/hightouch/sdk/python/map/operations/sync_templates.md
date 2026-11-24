<!-- Generated file — do not edit; regenerated with the SDK. -->

# SyncTemplates — operations

Accessor: `client.sync_templates` · Source: `hightouch/apis/sync_templates.py` · 4 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.sync_templates.create_sync_template

- **Route**: `POST /sync-templates`
- **Auth**: `bearer_auth`
- **Signature**: `def create_sync_template(body: SyncTemplateCreate | SyncTemplateCreateDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `SyncTemplatesResponse1`
- **Returns (raw)**: `ApiResult[SyncTemplatesResponse1, CreateSyncTemplateErrorBody]`
- **Error**: `CreateSyncTemplateErrorBody` — **Case A (typed)**
- **Error arms**: `ValidateErrorJson` [422] · `InternalServerErrorOrStr` [500] · `RawError` [401, anything unmapped]

| Type | Source |
| --- | --- |
| `SyncTemplateCreate` | `hightouch/models/sync_template_create.py` |
| `SyncTemplateCreateDict` | `hightouch/models/sync_template_create.py` |
| `SyncTemplatesResponse1` | `hightouch/models/unions/sync_templates_response1.py` |
| `CreateSyncTemplateErrorBody` | `hightouch/errors/create_sync_template_error.py` |
| `ValidateErrorJson` | `hightouch/models/validate_error_json.py` |
| `InternalServerErrorOrStr` | `hightouch/models/enums/internal_server_error.py` |

### client.sync_templates.get_sync_template

- **Route**: `GET /sync-templates/{syncTemplateId}`
- **Auth**: `bearer_auth`
- **Signature**: `def get_sync_template(sync_template_id: float, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `sync_template_id`
- **Params**: `sync_template_id` — path `syncTemplateId`
- **Returns (parsed)**: `SyncTemplate`
- **Returns (raw)**: `ApiResult[SyncTemplate, GetSyncTemplateErrorBody]`
- **Error**: `GetSyncTemplateErrorBody` — **Case A (typed)**
- **Error arms**: `ValidateErrorJson` [422] · `RawError` [401, 404, anything unmapped]

| Type | Source |
| --- | --- |
| `SyncTemplate` | `hightouch/models/sync_template.py` |
| `GetSyncTemplateErrorBody` | `hightouch/errors/get_sync_template_error.py` |
| `ValidateErrorJson` | `hightouch/models/validate_error_json.py` |

### client.sync_templates.list_sync_templates

- **Route**: `GET /sync-templates`
- **Auth**: `bearer_auth`
- **Signature**: `def list_sync_templates(*, name: str | None = None, offset: float | None = 0.0, limit: float | None = 100.0, order_by: OrderByHightouchEventsApiOrStr | None = OrderByHightouchEventsApi.ID, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `name` — query · `offset` — query · `limit` — query · `order_by` — query `orderBy`
- **Returns (parsed)**: `SyncTemplatesResponse`
- **Returns (raw)**: `ApiResult[SyncTemplatesResponse, ListSyncTemplatesErrorBody]`
- **Error**: `ListSyncTemplatesErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 401, anything unmapped]

| Type | Source |
| --- | --- |
| `OrderByHightouchEventsApiOrStr` | `hightouch/models/enums/order_by_hightouch_events_api.py` |
| `SyncTemplatesResponse` | `hightouch/models/sync_templates_response.py` |
| `ListSyncTemplatesErrorBody` | `hightouch/errors/list_sync_templates_error.py` |

### client.sync_templates.update_sync_template

- **Route**: `PATCH /sync-templates/{syncTemplateId}`
- **Auth**: `bearer_auth`
- **Signature**: `def update_sync_template(sync_template_id: float, body: SyncTemplateUpdate | SyncTemplateUpdateDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `sync_template_id`, `body`
- **Params**: `sync_template_id` — path `syncTemplateId` · `body` — JSON body
- **Returns (parsed)**: `SyncTemplatesResponse1`
- **Returns (raw)**: `ApiResult[SyncTemplatesResponse1, UpdateSyncTemplateErrorBody]`
- **Error**: `UpdateSyncTemplateErrorBody` — **Case A (typed)**
- **Error arms**: `ValidateErrorJson` [422] · `InternalServerErrorOrStr` [500] · `RawError` [401, 404, anything unmapped]

| Type | Source |
| --- | --- |
| `SyncTemplateUpdate` | `hightouch/models/sync_template_update.py` |
| `SyncTemplateUpdateDict` | `hightouch/models/sync_template_update.py` |
| `SyncTemplatesResponse1` | `hightouch/models/unions/sync_templates_response1.py` |
| `UpdateSyncTemplateErrorBody` | `hightouch/errors/update_sync_template_error.py` |
| `ValidateErrorJson` | `hightouch/models/validate_error_json.py` |
| `InternalServerErrorOrStr` | `hightouch/models/enums/internal_server_error.py` |

