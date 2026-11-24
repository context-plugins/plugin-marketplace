<!-- Generated file — do not edit; regenerated with the SDK. -->

# WebhooksApi — operations

Accessor: `client.webhooks_api` · Source: `bitly/apis/webhooks_api.py` · 6 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.webhooks_api.create_webhook

- **Route**: `POST /webhooks`
- **Auth**: `bearer_auth`
- **Signature**: `def create_webhook(body: WebhookCreate | WebhookCreateDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `Webhook`
- **Returns (raw)**: `ApiResult[Webhook, CreateWebhookErrorBody]`
- **Error**: `CreateWebhookErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 402, 403, 404, 422, 500, 503] · `SimplifiedError` [429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `WebhookCreate` | `bitly/models/webhook_create.py` |
| `WebhookCreateDict` | `bitly/models/webhook_create.py` |
| `Webhook` | `bitly/models/webhook.py` |
| `CreateWebhookErrorBody` | `bitly/errors/create_webhook_error.py` |
| `Error` | `bitly/models/error.py` |
| `SimplifiedError` | `bitly/models/simplified_error.py` |

### client.webhooks_api.delete_webhook

- **Route**: `DELETE /webhooks/{webhook_guid}`
- **Auth**: `bearer_auth`
- **Signature**: `def delete_webhook(webhook_guid: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `webhook_guid`
- **Params**: `webhook_guid` — path
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, DeleteWebhookErrorBody]`
- **Error**: `DeleteWebhookErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 402, 403, 404, 500, 503] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `DeleteWebhookErrorBody` | `bitly/errors/delete_webhook_error.py` |
| `Error` | `bitly/models/error.py` |

### client.webhooks_api.get_webhook

- **Route**: `GET /webhooks/{webhook_guid}`
- **Auth**: `bearer_auth`
- **Signature**: `def get_webhook(webhook_guid: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `webhook_guid`
- **Params**: `webhook_guid` — path
- **Returns (parsed)**: `Webhook`
- **Returns (raw)**: `ApiResult[Webhook, GetWebhookErrorBody]`
- **Error**: `GetWebhookErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 402, 403, 404, 500, 503] · `SimplifiedError` [429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `Webhook` | `bitly/models/webhook.py` |
| `GetWebhookErrorBody` | `bitly/errors/get_webhook_error.py` |
| `Error` | `bitly/models/error.py` |
| `SimplifiedError` | `bitly/models/simplified_error.py` |

### client.webhooks_api.get_webhooks

- **Route**: `GET /organizations/{organization_guid}/webhooks`
- **Auth**: `bearer_auth`
- **Signature**: `def get_webhooks(organization_guid: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organization_guid`
- **Params**: `organization_guid` — path
- **Returns (parsed)**: `WebhooksModel`
- **Returns (raw)**: `ApiResult[WebhooksModel, GetWebhooksErrorBody]`
- **Error**: `GetWebhooksErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [402, 403, 404, 500, 503] · `SimplifiedError` [429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `WebhooksModel` | `bitly/models/webhooks_model.py` |
| `GetWebhooksErrorBody` | `bitly/errors/get_webhooks_error.py` |
| `Error` | `bitly/models/error.py` |
| `SimplifiedError` | `bitly/models/simplified_error.py` |

### client.webhooks_api.update_webhook

- **Route**: `PATCH /webhooks/{webhook_guid}`
- **Auth**: `bearer_auth`
- **Signature**: `def update_webhook(webhook_guid: str, body: WebhookUpdate | WebhookUpdateDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `webhook_guid`, `body`
- **Params**: `webhook_guid` — path · `body` — JSON body
- **Returns (parsed)**: `Webhook`
- **Returns (raw)**: `ApiResult[Webhook, UpdateWebhookErrorBody]`
- **Error**: `UpdateWebhookErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 402, 403, 404, 422, 500, 503] · `SimplifiedError` [429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `WebhookUpdate` | `bitly/models/webhook_update.py` |
| `WebhookUpdateDict` | `bitly/models/webhook_update.py` |
| `Webhook` | `bitly/models/webhook.py` |
| `UpdateWebhookErrorBody` | `bitly/errors/update_webhook_error.py` |
| `Error` | `bitly/models/error.py` |
| `SimplifiedError` | `bitly/models/simplified_error.py` |

### client.webhooks_api.verify_webhook

- **Route**: `POST /webhooks/{webhook_guid}/verify`
- **Auth**: `bearer_auth`
- **Signature**: `def verify_webhook(webhook_guid: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `webhook_guid`
- **Params**: `webhook_guid` — path
- **Returns (parsed)**: `Webhook`
- **Returns (raw)**: `ApiResult[Webhook, VerifyWebhookErrorBody]`
- **Error**: `VerifyWebhookErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 402, 403, 404, 500, 503] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `Webhook` | `bitly/models/webhook.py` |
| `VerifyWebhookErrorBody` | `bitly/errors/verify_webhook_error.py` |
| `Error` | `bitly/models/error.py` |

