<!-- Generated file — do not edit; regenerated with the SDK. -->

# WebhooksApi — operations

Accessor: `client.webhooks_api` · Source: `fellow/apis/webhooks_api.py` · 5 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.webhooks_api.apps_developer_api_api_create_webhook

- **Route**: `POST /api/v1/webhook`
- **Auth**: `developer_api_key_auth`
- **Signature**: `def apps_developer_api_api_create_webhook(body: CreateWebhookRequest | CreateWebhookRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `WebhookCreateResponse`
- **Returns (raw)**: `ApiResult[WebhookCreateResponse, RawError]`
- **Error**: `RawError` — **Case B**

| Type | Source |
| --- | --- |
| `CreateWebhookRequest` | `fellow/models/create_webhook_request.py` |
| `CreateWebhookRequestDict` | `fellow/models/create_webhook_request.py` |
| `WebhookCreateResponse` | `fellow/models/webhook_create_response.py` |

### client.webhooks_api.apps_developer_api_api_delete_webhook

- **Route**: `DELETE /api/v1/webhook/{webhook_id}`
- **Auth**: `developer_api_key_auth`
- **Signature**: `def apps_developer_api_api_delete_webhook(webhook_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `webhook_id`
- **Params**: `webhook_id` — path
- **Returns (parsed)**: `WebhookDeleteResponse`
- **Returns (raw)**: `ApiResult[WebhookDeleteResponse, RawError]`
- **Error**: `RawError` — **Case B**

| Type | Source |
| --- | --- |
| `WebhookDeleteResponse` | `fellow/models/webhook_delete_response.py` |

### client.webhooks_api.apps_developer_api_api_get_webhook_by_id

- **Route**: `GET /api/v1/webhook/{webhook_id}`
- **Auth**: `developer_api_key_auth`
- **Signature**: `def apps_developer_api_api_get_webhook_by_id(webhook_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `webhook_id`
- **Params**: `webhook_id` — path
- **Returns (parsed)**: `WebhookResponse`
- **Returns (raw)**: `ApiResult[WebhookResponse, RawError]`
- **Error**: `RawError` — **Case B**

| Type | Source |
| --- | --- |
| `WebhookResponse` | `fellow/models/webhook_response.py` |

### client.webhooks_api.apps_developer_api_api_list_webhooks

- **Route**: `GET /api/v1/webhooks`
- **Auth**: `developer_api_key_auth`
- **Signature**: `def apps_developer_api_api_list_webhooks(*, page_size: int | None = None, cursor: str | None = None, filters: str | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `page_size` — query · `cursor` — query · `filters` — query
- **Returns (parsed)**: `WebhooksListResponse`
- **Returns (raw)**: `ApiResult[WebhooksListResponse, RawError]`
- **Error**: `RawError` — **Case B**

| Type | Source |
| --- | --- |
| `WebhooksListResponse` | `fellow/models/webhooks_list_response.py` |

### client.webhooks_api.apps_developer_api_api_update_webhook

- **Route**: `PATCH /api/v1/webhook/{webhook_id}`
- **Auth**: `developer_api_key_auth`
- **Signature**: `def apps_developer_api_api_update_webhook(webhook_id: str, body: UpdateWebhookRequest | UpdateWebhookRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `webhook_id`, `body`
- **Params**: `webhook_id` — path · `body` — JSON body
- **Returns (parsed)**: `WebhookResponse`
- **Returns (raw)**: `ApiResult[WebhookResponse, RawError]`
- **Error**: `RawError` — **Case B**

| Type | Source |
| --- | --- |
| `UpdateWebhookRequest` | `fellow/models/update_webhook_request.py` |
| `UpdateWebhookRequestDict` | `fellow/models/update_webhook_request.py` |
| `WebhookResponse` | `fellow/models/webhook_response.py` |

