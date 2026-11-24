<!-- Generated file — do not edit; regenerated with the SDK. -->

# Webhook — operations

Accessor: `client.webhook` · Source: `circle_ci/apis/webhook.py` · 5 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.webhook.create_webhook

- **Route**: `POST /webhook`
- **Auth**: `api_token`
- **Server**: `default_circle_ci_rest_api_v2_context_api`
- **Signature**: `def create_webhook(body: CreateWebhookRequest | CreateWebhookRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `WebhookInfo`
- **Returns (raw)**: `ApiResult[WebhookInfo, CreateWebhookErrorBody]`
- **Error**: `CreateWebhookErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `CreateWebhookRequest` | `circle_ci/models/create_webhook_request.py` |
| `CreateWebhookRequestDict` | `circle_ci/models/create_webhook_request.py` |
| `WebhookInfo` | `circle_ci/models/webhook_info.py` |
| `CreateWebhookErrorBody` | `circle_ci/errors/create_webhook_error.py` |
| `ErrorResponse` | `circle_ci/models/error_response.py` |

### client.webhook.delete_webhook

- **Route**: `DELETE /webhook/{webhook-id}`
- **Auth**: `api_token`
- **Server**: `default_circle_ci_rest_api_v2_context_api`
- **Signature**: `def delete_webhook(webhook_id: UUID, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `webhook_id`
- **Params**: `webhook_id` — path `webhook-id`
- **Returns (parsed)**: `MessageResponse`
- **Returns (raw)**: `ApiResult[MessageResponse, DeleteWebhookErrorBody]`
- **Error**: `DeleteWebhookErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [401] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `MessageResponse` | `circle_ci/models/message_response.py` |
| `DeleteWebhookErrorBody` | `circle_ci/errors/delete_webhook_error.py` |
| `ErrorResponse` | `circle_ci/models/error_response.py` |

### client.webhook.get_webhook

- **Route**: `GET /webhook/{webhook-id}`
- **Auth**: `api_token`
- **Server**: `default_circle_ci_rest_api_v2_context_api`
- **Signature**: `def get_webhook(webhook_id: UUID, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `webhook_id`
- **Params**: `webhook_id` — path `webhook-id`
- **Returns (parsed)**: `WebhookInfo`
- **Returns (raw)**: `ApiResult[WebhookInfo, GetWebhookErrorBody]`
- **Error**: `GetWebhookErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [401, 404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `WebhookInfo` | `circle_ci/models/webhook_info.py` |
| `GetWebhookErrorBody` | `circle_ci/errors/get_webhook_error.py` |
| `ErrorResponse` | `circle_ci/models/error_response.py` |

### client.webhook.list_webhooks

- **Route**: `GET /webhook`
- **Auth**: `api_token`
- **Server**: `default_circle_ci_rest_api_v2_context_api`
- **Signature**: `def list_webhooks(scope_id: UUID, scope_type: ScopeTypeOrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `scope_id`, `scope_type`
- **Params**: `scope_id` — query `scope-id` · `scope_type` — query `scope-type`
- **Returns (parsed)**: `WebhookList`
- **Returns (raw)**: `ApiResult[WebhookList, ListWebhooksErrorBody]`
- **Error**: `ListWebhooksErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [401] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ScopeTypeOrStr` | `circle_ci/models/enums/scope_type.py` |
| `WebhookList` | `circle_ci/models/webhook_list.py` |
| `ListWebhooksErrorBody` | `circle_ci/errors/list_webhooks_error.py` |
| `ErrorResponse` | `circle_ci/models/error_response.py` |

### client.webhook.update_webhook

- **Route**: `PUT /webhook/{webhook-id}`
- **Auth**: `api_token`
- **Server**: `default_circle_ci_rest_api_v2_context_api`
- **Signature**: `def update_webhook(webhook_id: UUID, body: UpdateWebhookRequest | UpdateWebhookRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `webhook_id`, `body`
- **Params**: `webhook_id` — path `webhook-id` · `body` — JSON body
- **Returns (parsed)**: `WebhookInfo`
- **Returns (raw)**: `ApiResult[WebhookInfo, UpdateWebhookErrorBody]`
- **Error**: `UpdateWebhookErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [401] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `UpdateWebhookRequest` | `circle_ci/models/update_webhook_request.py` |
| `UpdateWebhookRequestDict` | `circle_ci/models/update_webhook_request.py` |
| `WebhookInfo` | `circle_ci/models/webhook_info.py` |
| `UpdateWebhookErrorBody` | `circle_ci/errors/update_webhook_error.py` |
| `ErrorResponse` | `circle_ci/models/error_response.py` |

