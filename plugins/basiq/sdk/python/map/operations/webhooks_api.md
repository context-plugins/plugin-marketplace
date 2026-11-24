<!-- Generated file — do not edit; regenerated with the SDK. -->

# WebhooksApi — operations

Accessor: `client.webhooks_api` · Source: `basiq/apis/webhooks_api.py` · 9 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.webhooks_api.add_webhook

- **Route**: `POST /notifications/webhooks`
- **Auth**: `services_token`
- **Signature**: `def add_webhook(*, body: NotificationsWebhooksRequest | NotificationsWebhooksRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `NotificationsWebhooksResponse`
- **Returns (raw)**: `ApiResult[NotificationsWebhooksResponse, AddWebhookErrorBody]`
- **Error**: `AddWebhookErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 403, 409, 429, 503] · `RawError` [500, anything unmapped]

| Type | Source |
| --- | --- |
| `NotificationsWebhooksRequest` | `basiq/models/notifications_webhooks_request.py` |
| `NotificationsWebhooksRequestDict` | `basiq/models/notifications_webhooks_request.py` |
| `NotificationsWebhooksResponse` | `basiq/models/notifications_webhooks_response.py` |
| `AddWebhookErrorBody` | `basiq/errors/add_webhook_error.py` |
| `Error` | `basiq/models/error.py` |

### client.webhooks_api.delete_webhook

- **Route**: `DELETE /notifications/webhooks/{webhookId}`
- **Auth**: `services_token`
- **Signature**: `def delete_webhook(webhook_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `webhook_id`
- **Params**: `webhook_id` — path `webhookId`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, DeleteWebhookErrorBody]`
- **Error**: `DeleteWebhookErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 403, 404, 429, 503] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `DeleteWebhookErrorBody` | `basiq/errors/delete_webhook_error.py` |
| `Error` | `basiq/models/error.py` |

### client.webhooks_api.get_webhook

- **Route**: `GET /notifications/webhooks/{webhookId}`
- **Auth**: `services_token`
- **Signature**: `def get_webhook(webhook_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `webhook_id`
- **Params**: `webhook_id` — path `webhookId`
- **Returns (parsed)**: `NotificationsWebhooksResponse`
- **Returns (raw)**: `ApiResult[NotificationsWebhooksResponse, GetWebhookErrorBody]`
- **Error**: `GetWebhookErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 403, 404, 429, 503] · `RawError` [500, anything unmapped]

| Type | Source |
| --- | --- |
| `NotificationsWebhooksResponse` | `basiq/models/notifications_webhooks_response.py` |
| `GetWebhookErrorBody` | `basiq/errors/get_webhook_error.py` |
| `Error` | `basiq/models/error.py` |

### client.webhooks_api.get_webhook_message

- **Route**: `GET /notifications/webhooks/{webhookId}/messages/{messageId}`
- **Auth**: `services_token`
- **Signature**: `def get_webhook_message(webhook_id: str, message_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `webhook_id`, `message_id`
- **Params**: `webhook_id` — path `webhookId` · `message_id` — path `messageId`
- **Returns (parsed)**: `NotificationsWebhooksMessagesResponse1`
- **Returns (raw)**: `ApiResult[NotificationsWebhooksMessagesResponse1, GetWebhookMessageErrorBody]`
- **Error**: `GetWebhookMessageErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 403, 404, 429, 503] · `RawError` [500, anything unmapped]

| Type | Source |
| --- | --- |
| `NotificationsWebhooksMessagesResponse1` | `basiq/models/notifications_webhooks_messages_response1.py` |
| `GetWebhookMessageErrorBody` | `basiq/errors/get_webhook_message_error.py` |
| `Error` | `basiq/models/error.py` |

### client.webhooks_api.get_webhook_stats

- **Route**: `GET /notifications/webhooks/{webhookId}/stats`
- **Auth**: `services_token`
- **Signature**: `def get_webhook_stats(webhook_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `webhook_id`
- **Params**: `webhook_id` — path `webhookId`
- **Returns (parsed)**: `WebhookStats`
- **Returns (raw)**: `ApiResult[WebhookStats, GetWebhookStatsErrorBody]`
- **Error**: `GetWebhookStatsErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 403, 404] · `RawError` [500, anything unmapped]

| Type | Source |
| --- | --- |
| `WebhookStats` | `basiq/models/webhook_stats.py` |
| `GetWebhookStatsErrorBody` | `basiq/errors/get_webhook_stats_error.py` |
| `Error` | `basiq/models/error.py` |

### client.webhooks_api.list_app_webhooks

- **Route**: `GET /notifications/webhooks`
- **Auth**: `services_token`
- **Signature**: `def list_app_webhooks(*, request_options: RequestOptionsOrDict | None = None)`
- **Returns (parsed)**: `NotificationsWebhooksResponse1`
- **Returns (raw)**: `ApiResult[NotificationsWebhooksResponse1, ListAppWebhooksErrorBody]`
- **Error**: `ListAppWebhooksErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [401, 403, 429, 503] · `RawError` [500, anything unmapped]

| Type | Source |
| --- | --- |
| `NotificationsWebhooksResponse1` | `basiq/models/notifications_webhooks_response1.py` |
| `ListAppWebhooksErrorBody` | `basiq/errors/list_app_webhooks_error.py` |
| `Error` | `basiq/models/error.py` |

### client.webhooks_api.list_messages

- **Route**: `GET /notifications/webhooks/{webhookId}/messages`
- **Auth**: `services_token`
- **Signature**: `def list_messages(webhook_id: str, *, limit: int | None = None, filter_: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `webhook_id`
- **Params**: `webhook_id` — path `webhookId` · `limit` — query · `filter_` — query `filter`
- **Returns (parsed)**: `NotificationsWebhooksMessagesResponse`
- **Returns (raw)**: `ApiResult[NotificationsWebhooksMessagesResponse, ListMessagesErrorBody]`
- **Error**: `ListMessagesErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 403, 404, 429, 503] · `RawError` [500, anything unmapped]

| Type | Source |
| --- | --- |
| `NotificationsWebhooksMessagesResponse` | `basiq/models/notifications_webhooks_messages_response.py` |
| `ListMessagesErrorBody` | `basiq/errors/list_messages_error.py` |
| `Error` | `basiq/models/error.py` |

### client.webhooks_api.test_message

- **Route**: `POST /notifications/messages/test`
- **Auth**: `services_token`
- **Signature**: `def test_message(*, body: NotificationsMessagesTestRequest | NotificationsMessagesTestRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, TestMessageErrorBody]`
- **Error**: `TestMessageErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 403, 429, 503] · `RawError` [500, anything unmapped]

| Type | Source |
| --- | --- |
| `NotificationsMessagesTestRequest` | `basiq/models/notifications_messages_test_request.py` |
| `NotificationsMessagesTestRequestDict` | `basiq/models/notifications_messages_test_request.py` |
| `TestMessageErrorBody` | `basiq/errors/test_message_error.py` |
| `Error` | `basiq/models/error.py` |

### client.webhooks_api.update_webhook

- **Route**: `POST /notifications/webhooks/{webhookId}`
- **Auth**: `services_token`
- **Signature**: `def update_webhook(webhook_id: str, *, body: NotificationsWebhooksRequest | NotificationsWebhooksRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `webhook_id`
- **Params**: `webhook_id` — path `webhookId` · `body` — JSON body
- **Returns (parsed)**: `NotificationsWebhooksResponse`
- **Returns (raw)**: `ApiResult[NotificationsWebhooksResponse, UpdateWebhookErrorBody]`
- **Error**: `UpdateWebhookErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 403, 404, 409, 429, 503] · `RawError` [500, anything unmapped]

| Type | Source |
| --- | --- |
| `NotificationsWebhooksRequest` | `basiq/models/notifications_webhooks_request.py` |
| `NotificationsWebhooksRequestDict` | `basiq/models/notifications_webhooks_request.py` |
| `NotificationsWebhooksResponse` | `basiq/models/notifications_webhooks_response.py` |
| `UpdateWebhookErrorBody` | `basiq/errors/update_webhook_error.py` |
| `Error` | `basiq/models/error.py` |

