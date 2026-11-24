<!-- Generated file — do not edit; regenerated with the SDK. -->

# WebhooksApi — operations

Accessor: `client.webhooks_api` · Source: `relm_crm/apis/webhooks_api.py` · 6 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded, and an operation with no table mentions nothing but builtins and those.

### client.webhooks_api.create_webhook

- **Route**: `POST /webhooks`
- **Auth**: `bearer_auth` OR `oauth2`
- **Server**: `default`
- **Signature**: `def create_webhook(body: WebhookInput | WebhookInputDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `Webhook`
- **Returns (raw)**: `ApiResult[Webhook, RawError]`
- **Error**: `RawError` — **Case B**

| Type | Source |
| --- | --- |
| `WebhookInput` | `relm_crm/models/webhook_input.py` |
| `WebhookInputDict` | `relm_crm/models/webhook_input.py` |
| `Webhook` | `relm_crm/models/webhook.py` |

### client.webhooks_api.delete_webhook

- **Route**: `DELETE /webhooks/{id}`
- **Auth**: `bearer_auth` OR `oauth2`
- **Server**: `default`
- **Signature**: `def delete_webhook(id_: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id`
- **Returns (parsed)**: `Deleted`
- **Returns (raw)**: `ApiResult[Deleted, RawError]`
- **Error**: `RawError` — **Case B**

| Type | Source |
| --- | --- |
| `Deleted` | `relm_crm/models/deleted.py` |

### client.webhooks_api.get_webhook

- **Route**: `GET /webhooks/{id}`
- **Auth**: `bearer_auth` OR `oauth2`
- **Server**: `default`
- **Signature**: `def get_webhook(id_: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id`
- **Returns (parsed)**: `Webhook`
- **Returns (raw)**: `ApiResult[Webhook, RawError]`
- **Error**: `RawError` — **Case B**

| Type | Source |
| --- | --- |
| `Webhook` | `relm_crm/models/webhook.py` |

### client.webhooks_api.list_deliveries

- **Route**: `GET /webhooks/{id}/deliveries`
- **Auth**: `bearer_auth` OR `oauth2`
- **Server**: `default`
- **Signature**: `def list_deliveries(id_: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id`
- **Returns (parsed)**: `Any`
- **Returns (raw)**: `ApiResult[Any, RawError]`
- **Error**: `RawError` — **Case B**

### client.webhooks_api.list_webhooks

- **Route**: `GET /webhooks`
- **Auth**: `bearer_auth` OR `oauth2`
- **Server**: `default`
- **Signature**: `def list_webhooks(*, request_options: RequestOptionsOrDict | None = None)`
- **Returns (parsed)**: `Any`
- **Returns (raw)**: `ApiResult[Any, RawError]`
- **Error**: `RawError` — **Case B**

### client.webhooks_api.update_webhook

- **Route**: `PATCH /webhooks/{id}`
- **Auth**: `bearer_auth` OR `oauth2`
- **Server**: `default`
- **Signature**: `def update_webhook(id_: str, body: WebhookInput | WebhookInputDict, *, if_match: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`, `body`
- **Params**: `id_` — path `id` · `if_match` — header `If-Match` · `body` — JSON body
- **Returns (parsed)**: `Webhook`
- **Returns (raw)**: `ApiResult[Webhook, RawError]`
- **Error**: `RawError` — **Case B**

| Type | Source |
| --- | --- |
| `WebhookInput` | `relm_crm/models/webhook_input.py` |
| `WebhookInputDict` | `relm_crm/models/webhook_input.py` |
| `Webhook` | `relm_crm/models/webhook.py` |

