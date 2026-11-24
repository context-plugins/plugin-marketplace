<!-- Generated file — do not edit; regenerated with the SDK. -->

# WebhooksApi — operations

Accessor: `client.webhooks_api` · Source: `airtable/apis/webhooks_api.py` · 5 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.webhooks_api.create_webhook

- **Route**: `POST /bases/{baseId}/webhooks`
- **Auth**: `bearer_auth`
- **Server**: `default`
- **Signature**: `def create_webhook(base_id: str, body: WebhookCreateRequest | WebhookCreateRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `base_id`, `body`
- **Params**: `base_id` — path `baseId` · `body` — JSON body
- **Returns (parsed)**: `WebhookCreateResponse`
- **Returns (raw)**: `ApiResult[WebhookCreateResponse, CreateWebhookErrorBody]`
- **Error**: `CreateWebhookErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [401, 403, 404, 422, 429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `WebhookCreateRequest` | `airtable/models/webhook_create_request.py` |
| `WebhookCreateRequestDict` | `airtable/models/webhook_create_request.py` |
| `WebhookCreateResponse` | `airtable/models/webhook_create_response.py` |
| `CreateWebhookErrorBody` | `airtable/errors/create_webhook_error.py` |
| `Error` | `airtable/models/error.py` |

### client.webhooks_api.delete_webhook

- **Route**: `DELETE /bases/{baseId}/webhooks/{webhookId}`
- **Auth**: `bearer_auth`
- **Server**: `default`
- **Signature**: `def delete_webhook(base_id: str, webhook_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `base_id`, `webhook_id`
- **Params**: `base_id` — path `baseId` · `webhook_id` — path `webhookId`
- **Returns (parsed)**: `Any`
- **Returns (raw)**: `ApiResult[Any, DeleteWebhookErrorBody]`
- **Error**: `DeleteWebhookErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [401, 403, 404, 429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `DeleteWebhookErrorBody` | `airtable/errors/delete_webhook_error.py` |
| `Error` | `airtable/models/error.py` |

### client.webhooks_api.list_webhook_payloads

- **Route**: `GET /bases/{baseId}/webhooks/{webhookId}/payloads`
- **Auth**: `bearer_auth`
- **Server**: `default`
- **Signature**: `def list_webhook_payloads(base_id: str, webhook_id: str, *, cursor: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `base_id`, `webhook_id`
- **Params**: `base_id` — path `baseId` · `webhook_id` — path `webhookId` · `cursor` — query
- **Returns (parsed)**: `WebhookPayloadList`
- **Returns (raw)**: `ApiResult[WebhookPayloadList, ListWebhookPayloadsErrorBody]`
- **Error**: `ListWebhookPayloadsErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [401, 403, 404, 429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `WebhookPayloadList` | `airtable/models/webhook_payload_list.py` |
| `ListWebhookPayloadsErrorBody` | `airtable/errors/list_webhook_payloads_error.py` |
| `Error` | `airtable/models/error.py` |

### client.webhooks_api.list_webhooks

- **Route**: `GET /bases/{baseId}/webhooks`
- **Auth**: `bearer_auth`
- **Server**: `default`
- **Signature**: `def list_webhooks(base_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `base_id`
- **Params**: `base_id` — path `baseId`
- **Returns (parsed)**: `BasesWebhooksResponse`
- **Returns (raw)**: `ApiResult[BasesWebhooksResponse, ListWebhooksErrorBody]`
- **Error**: `ListWebhooksErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [401, 403, 404, 429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `BasesWebhooksResponse` | `airtable/models/bases_webhooks_response.py` |
| `ListWebhooksErrorBody` | `airtable/errors/list_webhooks_error.py` |
| `Error` | `airtable/models/error.py` |

### client.webhooks_api.refresh_webhook

- **Route**: `POST /bases/{baseId}/webhooks/{webhookId}/refresh`
- **Auth**: `bearer_auth`
- **Server**: `default`
- **Signature**: `def refresh_webhook(base_id: str, webhook_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `base_id`, `webhook_id`
- **Params**: `base_id` — path `baseId` · `webhook_id` — path `webhookId`
- **Returns (parsed)**: `BasesWebhooksRefreshResponse`
- **Returns (raw)**: `ApiResult[BasesWebhooksRefreshResponse, RefreshWebhookErrorBody]`
- **Error**: `RefreshWebhookErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [401, 403, 404, 429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `BasesWebhooksRefreshResponse` | `airtable/models/bases_webhooks_refresh_response.py` |
| `RefreshWebhookErrorBody` | `airtable/errors/refresh_webhook_error.py` |
| `Error` | `airtable/models/error.py` |

