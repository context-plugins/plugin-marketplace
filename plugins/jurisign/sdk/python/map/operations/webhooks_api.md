<!-- Generated file — do not edit; regenerated with the SDK. -->

# WebhooksApi — operations

Accessor: `client.webhooks_api` · Source: `juri_sign/apis/webhooks_api.py` · 6 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.webhooks_api.create_webhook

- **Route**: `POST /webhooks`
- **Auth**: `bearer_auth`
- **Signature**: `def create_webhook(body: WebhooksRequest | WebhooksRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `WebhooksResponse1`
- **Returns (raw)**: `ApiResult[WebhooksResponse1, CreateWebhookErrorBody]`
- **Error**: `CreateWebhookErrorBody` — **Case A (typed)**
- **Error arms**: `MessageResponse` [401] · `ValidationError1` [422] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `WebhooksRequest` | `juri_sign/models/webhooks_request.py` |
| `WebhooksRequestDict` | `juri_sign/models/webhooks_request.py` |
| `WebhooksResponse1` | `juri_sign/models/webhooks_response1.py` |
| `CreateWebhookErrorBody` | `juri_sign/errors/create_webhook_error.py` |
| `MessageResponse` | `juri_sign/models/message_response.py` |
| `ValidationError1` | `juri_sign/models/validation_error1.py` |

### client.webhooks_api.delete_webhook

- **Route**: `DELETE /webhooks/{id}`
- **Auth**: `bearer_auth`
- **Signature**: `def delete_webhook(id_: int, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id`
- **Returns (parsed)**: `MessageResponse`
- **Returns (raw)**: `ApiResult[MessageResponse, DeleteWebhookErrorBody]`
- **Error**: `DeleteWebhookErrorBody` — **Case A (typed)**
- **Error arms**: `MessageResponse` [401, 403, 404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `MessageResponse` | `juri_sign/models/message_response.py` |
| `DeleteWebhookErrorBody` | `juri_sign/errors/delete_webhook_error.py` |

### client.webhooks_api.get_webhook_logs

- **Route**: `GET /webhooks/{id}/logs`
- **Auth**: `bearer_auth`
- **Signature**: `def get_webhook_logs(id_: int, *, per_page: int | None = 20, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id` · `per_page` — query
- **Returns (parsed)**: `WebhooksLogsResponse`
- **Returns (raw)**: `ApiResult[WebhooksLogsResponse, GetWebhookLogsErrorBody]`
- **Error**: `GetWebhookLogsErrorBody` — **Case A (typed)**
- **Error arms**: `MessageResponse` [401, 403] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `WebhooksLogsResponse` | `juri_sign/models/webhooks_logs_response.py` |
| `GetWebhookLogsErrorBody` | `juri_sign/errors/get_webhook_logs_error.py` |
| `MessageResponse` | `juri_sign/models/message_response.py` |

### client.webhooks_api.list_webhooks

- **Route**: `GET /webhooks`
- **Auth**: `bearer_auth`
- **Signature**: `def list_webhooks(*, request_options: RequestOptionsOrDict | None = None)`
- **Returns (parsed)**: `WebhooksResponse`
- **Returns (raw)**: `ApiResult[WebhooksResponse, ListWebhooksErrorBody]`
- **Error**: `ListWebhooksErrorBody` — **Case A (typed)**
- **Error arms**: `MessageResponse` [401] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `WebhooksResponse` | `juri_sign/models/webhooks_response.py` |
| `ListWebhooksErrorBody` | `juri_sign/errors/list_webhooks_error.py` |
| `MessageResponse` | `juri_sign/models/message_response.py` |

### client.webhooks_api.regenerate_webhook_secret

- **Route**: `POST /webhooks/{id}/regenerate-secret`
- **Auth**: `bearer_auth`
- **Signature**: `def regenerate_webhook_secret(id_: int, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id`
- **Returns (parsed)**: `WebhooksRegenerateSecretResponse`
- **Returns (raw)**: `ApiResult[WebhooksRegenerateSecretResponse, RegenerateWebhookSecretErrorBody]`
- **Error**: `RegenerateWebhookSecretErrorBody` — **Case A (typed)**
- **Error arms**: `MessageResponse` [401, 403] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `WebhooksRegenerateSecretResponse` | `juri_sign/models/webhooks_regenerate_secret_response.py` |
| `RegenerateWebhookSecretErrorBody` | `juri_sign/errors/regenerate_webhook_secret_error.py` |
| `MessageResponse` | `juri_sign/models/message_response.py` |

### client.webhooks_api.update_webhook

- **Route**: `PUT /webhooks/{id}`
- **Auth**: `bearer_auth`
- **Signature**: `def update_webhook(id_: int, *, body: WebhooksRequest1 | WebhooksRequest1Dict | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id` · `body` — JSON body
- **Returns (parsed)**: `WebhooksResponse2`
- **Returns (raw)**: `ApiResult[WebhooksResponse2, UpdateWebhookErrorBody]`
- **Error**: `UpdateWebhookErrorBody` — **Case A (typed)**
- **Error arms**: `MessageResponse` [401, 403, 404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `WebhooksRequest1` | `juri_sign/models/webhooks_request1.py` |
| `WebhooksRequest1Dict` | `juri_sign/models/webhooks_request1.py` |
| `WebhooksResponse2` | `juri_sign/models/webhooks_response2.py` |
| `UpdateWebhookErrorBody` | `juri_sign/errors/update_webhook_error.py` |
| `MessageResponse` | `juri_sign/models/message_response.py` |

