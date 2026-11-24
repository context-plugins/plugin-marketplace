<!-- Generated file — do not edit; regenerated with the SDK. -->

# Client — operations

Accessor: `client` · Source: `mailer_lite/client.py` · 6 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded, and an operation with no table mentions nothing but builtins and those.

### client.create_webhook

- **Route**: `GET /webhooks`
- **Auth**: `api_key`
- **Signature**: `def create_webhook(*, limit: int | None = 100, offset: int | None = 0, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `limit` — query · `offset` — query
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, RawError]`
- **Error**: `RawError` — **Case B**

### client.delete_webhook

- **Route**: `DELETE /webhooks/{webhookId}`
- **Auth**: `api_key`
- **Signature**: `def delete_webhook(webhook_id: int, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `webhook_id`
- **Params**: `webhook_id` — path `webhookId`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, DeleteWebhookErrorBody]`
- **Error**: `DeleteWebhookErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [404, anything unmapped]

| Type | Source |
| --- | --- |
| `DeleteWebhookErrorBody` | `mailer_lite/errors/delete_webhook_error.py` |

### client.get_count_of_webhooks

- **Route**: `GET /webhooks/count`
- **Auth**: `api_key`
- **Signature**: `def get_count_of_webhooks(*, request_options: RequestOptionsOrDict | None = None)`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, RawError]`
- **Error**: `RawError` — **Case B**

### client.post_webhooks

- **Route**: `POST /webhooks`
- **Auth**: `api_key`
- **Signature**: `def post_webhooks(body: Webhook | WebhookDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, PostWebhooksErrorBody]`
- **Error**: `PostWebhooksErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, anything unmapped]

| Type | Source |
| --- | --- |
| `Webhook` | `mailer_lite/models/webhook.py` |
| `WebhookDict` | `mailer_lite/models/webhook.py` |
| `PostWebhooksErrorBody` | `mailer_lite/errors/post_webhooks_error.py` |

### client.show_webhook_by_id

- **Route**: `GET /webhooks/{webhookId}`
- **Auth**: `api_key`
- **Signature**: `def show_webhook_by_id(webhook_id: int, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `webhook_id`
- **Params**: `webhook_id` — path `webhookId`
- **Returns (parsed)**: `Webhook`
- **Returns (raw)**: `ApiResult[Webhook, ShowWebhookByIdErrorBody]`
- **Error**: `ShowWebhookByIdErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [404, anything unmapped]

| Type | Source |
| --- | --- |
| `Webhook` | `mailer_lite/models/webhook.py` |
| `ShowWebhookByIdErrorBody` | `mailer_lite/errors/show_webhook_by_id_error.py` |

### client.update_webhook

- **Route**: `PUT /webhooks/{webhookId}`
- **Auth**: `api_key`
- **Signature**: `def update_webhook(webhook_id: int, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `webhook_id`
- **Params**: `webhook_id` — path `webhookId`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, UpdateWebhookErrorBody]`
- **Error**: `UpdateWebhookErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, anything unmapped]

| Type | Source |
| --- | --- |
| `UpdateWebhookErrorBody` | `mailer_lite/errors/update_webhook_error.py` |

