<!-- Generated file — do not edit; regenerated with the SDK. -->

# WebhooksApi — operations

Accessor: `client.webhooks_api` · Source: `dev_cycle/apis/webhooks_api.py` · 5 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.webhooks_api.webhooks_controller_create

- **Route**: `POST /v1/projects/{project}/webhooks`
- **Server**: `default`
- **Signature**: `def webhooks_controller_create(project: str, body: CreateWebhookDto | CreateWebhookDtoDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `project`, `body`
- **Params**: `project` — path · `body` — JSON body
- **Returns (parsed)**: `Webhook`
- **Returns (raw)**: `ApiResult[Webhook, WebhooksControllerCreateErrorBody]`
- **Error**: `WebhooksControllerCreateErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 401, 403, 404, 409, anything unmapped]

| Type | Source |
| --- | --- |
| `CreateWebhookDto` | `dev_cycle/models/create_webhook_dto.py` |
| `CreateWebhookDtoDict` | `dev_cycle/models/create_webhook_dto.py` |
| `Webhook` | `dev_cycle/models/webhook.py` |
| `WebhooksControllerCreateErrorBody` | `dev_cycle/errors/webhooks_controller_create_error.py` |

### client.webhooks_api.webhooks_controller_find_all

- **Route**: `GET /v1/projects/{project}/webhooks`
- **Server**: `default`
- **Signature**: `def webhooks_controller_find_all(project: str, *, page: float | None = 1.0, per_page: float | None = 100.0, sort_by: SortByOrStr | None = SortBy.CREATED_AT, sort_order: SortOrderOrStr | None = SortOrder.DESC, search: str | None = None, created_by: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `project`
- **Params**: `project` — path · `page` — query · `per_page` — query `perPage` · `sort_by` — query `sortBy` · `sort_order` — query `sortOrder` · `search` — query · `created_by` — query `createdBy`
- **Returns (parsed)**: `list[Webhook]`
- **Returns (raw)**: `ApiResult[list[Webhook], WebhooksControllerFindAllErrorBody]`
- **Error**: `WebhooksControllerFindAllErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 401, 403, 404, anything unmapped]

| Type | Source |
| --- | --- |
| `SortByOrStr` | `dev_cycle/models/enums/sort_by.py` |
| `SortOrderOrStr` | `dev_cycle/models/enums/sort_order.py` |
| `Webhook` | `dev_cycle/models/webhook.py` |
| `WebhooksControllerFindAllErrorBody` | `dev_cycle/errors/webhooks_controller_find_all_error.py` |

### client.webhooks_api.webhooks_controller_find_one

- **Route**: `GET /v1/projects/{project}/webhooks/{id}`
- **Server**: `default`
- **Signature**: `def webhooks_controller_find_one(id_: str, project: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`, `project`
- **Params**: `id_` — path `id` · `project` — path
- **Returns (parsed)**: `Webhook`
- **Returns (raw)**: `ApiResult[Webhook, WebhooksControllerFindOneErrorBody]`
- **Error**: `WebhooksControllerFindOneErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [401, 403, 404, anything unmapped]

| Type | Source |
| --- | --- |
| `Webhook` | `dev_cycle/models/webhook.py` |
| `WebhooksControllerFindOneErrorBody` | `dev_cycle/errors/webhooks_controller_find_one_error.py` |

### client.webhooks_api.webhooks_controller_remove

- **Route**: `DELETE /v1/projects/{project}/webhooks/{id}`
- **Server**: `default`
- **Signature**: `def webhooks_controller_remove(id_: str, project: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`, `project`
- **Params**: `id_` — path `id` · `project` — path
- **Returns (parsed)**: `Webhook`
- **Returns (raw)**: `ApiResult[Webhook, WebhooksControllerRemoveErrorBody]`
- **Error**: `WebhooksControllerRemoveErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [401, 403, 404, anything unmapped]

| Type | Source |
| --- | --- |
| `Webhook` | `dev_cycle/models/webhook.py` |
| `WebhooksControllerRemoveErrorBody` | `dev_cycle/errors/webhooks_controller_remove_error.py` |

### client.webhooks_api.webhooks_controller_update

- **Route**: `PATCH /v1/projects/{project}/webhooks/{id}`
- **Server**: `default`
- **Signature**: `def webhooks_controller_update(id_: str, project: str, body: UpdateWebhookDto | UpdateWebhookDtoDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`, `project`, `body`
- **Params**: `id_` — path `id` · `project` — path · `body` — JSON body
- **Returns (parsed)**: `Webhook`
- **Returns (raw)**: `ApiResult[Webhook, WebhooksControllerUpdateErrorBody]`
- **Error**: `WebhooksControllerUpdateErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 401, 403, 404, anything unmapped]

| Type | Source |
| --- | --- |
| `UpdateWebhookDto` | `dev_cycle/models/update_webhook_dto.py` |
| `UpdateWebhookDtoDict` | `dev_cycle/models/update_webhook_dto.py` |
| `Webhook` | `dev_cycle/models/webhook.py` |
| `WebhooksControllerUpdateErrorBody` | `dev_cycle/errors/webhooks_controller_update_error.py` |

