<!-- Generated file — do not edit; regenerated with the SDK. -->

# WebhooksApi — operations

Accessor: `client.webhooks_api` · Source: `tabby/apis/webhooks_api.py` · 5 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.webhooks_api.delete_webhook

- **Route**: `DELETE /api/v1/webhooks/{id}`
- **Auth**: `bearer_auth`
- **Signature**: `def delete_webhook(id_: UUID, x_merchant_code: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`, `x_merchant_code`
- **Params**: `id_` — path `id` · `x_merchant_code` — header `X-Merchant-Code`
- **Returns (parsed)**: `WebhookDelete`
- **Returns (raw)**: `ApiResult[WebhookDelete, DeleteWebhookErrorBody]`
- **Error**: `DeleteWebhookErrorBody` — **Case A (typed)**
- **Error arms**: `Error401InvalidSecretKey` [401] · `Error404NoSuchWebhook` [404] · `str` [500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `WebhookDelete` | `tabby/models/webhook_delete.py` |
| `DeleteWebhookErrorBody` | `tabby/errors/delete_webhook_error.py` |
| `Error401InvalidSecretKey` | `tabby/models/error401_invalid_secret_key.py` |
| `Error404NoSuchWebhook` | `tabby/models/error404_no_such_webhook.py` |

### client.webhooks_api.get_webhook

- **Route**: `GET /api/v1/webhooks/{id}`
- **Auth**: `bearer_auth`
- **Signature**: `def get_webhook(id_: UUID, x_merchant_code: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`, `x_merchant_code`
- **Params**: `id_` — path `id` · `x_merchant_code` — header `X-Merchant-Code`
- **Returns (parsed)**: `Webhook`
- **Returns (raw)**: `ApiResult[Webhook, GetWebhookErrorBody]`
- **Error**: `GetWebhookErrorBody` — **Case A (typed)**
- **Error arms**: `Error401InvalidSecretKey` [401] · `Error404NoSuchWebhook` [404] · `str` [500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `Webhook` | `tabby/models/webhook.py` |
| `GetWebhookErrorBody` | `tabby/errors/get_webhook_error.py` |
| `Error401InvalidSecretKey` | `tabby/models/error401_invalid_secret_key.py` |
| `Error404NoSuchWebhook` | `tabby/models/error404_no_such_webhook.py` |

### client.webhooks_api.get_webhooks

- **Route**: `GET /api/v1/webhooks`
- **Auth**: `bearer_auth`
- **Signature**: `def get_webhooks(x_merchant_code: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_merchant_code`
- **Params**: `x_merchant_code` — header `X-Merchant-Code`
- **Returns (parsed)**: `Webhook`
- **Returns (raw)**: `ApiResult[Webhook, GetWebhooksErrorBody]`
- **Error**: `GetWebhooksErrorBody` — **Case A (typed)**
- **Error arms**: `Error401Authorization` [401] · `str` [404, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `Webhook` | `tabby/models/webhook.py` |
| `GetWebhooksErrorBody` | `tabby/errors/get_webhooks_error.py` |
| `Error401Authorization` | `tabby/models/error401_authorization.py` |

### client.webhooks_api.post_webhook

- **Route**: `POST /api/v1/webhooks`
- **Auth**: `bearer_auth`
- **Signature**: `def post_webhook(x_merchant_code: str, body: WebhookRegistration | WebhookRegistrationDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_merchant_code`, `body`
- **Params**: `x_merchant_code` — header `X-Merchant-Code` · `body` — JSON body
- **Returns (parsed)**: `WebhookRegistrationResponse`
- **Returns (raw)**: `ApiResult[WebhookRegistrationResponse, PostWebhookErrorBody]`
- **Error**: `PostWebhookErrorBody` — **Case A (typed)**
- **Error arms**: `Error401InvalidSecretKey` [400] · `Error401Authorization` [401] · `str` [404, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `WebhookRegistration` | `tabby/models/webhook_registration.py` |
| `WebhookRegistrationDict` | `tabby/models/webhook_registration.py` |
| `WebhookRegistrationResponse` | `tabby/models/webhook_registration_response.py` |
| `PostWebhookErrorBody` | `tabby/errors/post_webhook_error.py` |
| `Error401InvalidSecretKey` | `tabby/models/error401_invalid_secret_key.py` |
| `Error401Authorization` | `tabby/models/error401_authorization.py` |

### client.webhooks_api.put_webhook

- **Route**: `PUT /api/v1/webhooks/{id}`
- **Auth**: `bearer_auth`
- **Signature**: `def put_webhook(id_: UUID, x_merchant_code: str, body: WebhookUpdate | WebhookUpdateDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`, `x_merchant_code`, `body`
- **Params**: `id_` — path `id` · `x_merchant_code` — header `X-Merchant-Code` · `body` — JSON body
- **Returns (parsed)**: `WebhookUpdate`
- **Returns (raw)**: `ApiResult[WebhookUpdate, PutWebhookErrorBody]`
- **Error**: `PutWebhookErrorBody` — **Case A (typed)**
- **Error arms**: `Error401InvalidSecretKey` [400] · `Error401Authorization` [401] · `Error403` [403] · `Error404NoSuchWebhook` [404] · `str` [500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `WebhookUpdate` | `tabby/models/webhook_update.py` |
| `WebhookUpdateDict` | `tabby/models/webhook_update.py` |
| `PutWebhookErrorBody` | `tabby/errors/put_webhook_error.py` |
| `Error401InvalidSecretKey` | `tabby/models/error401_invalid_secret_key.py` |
| `Error401Authorization` | `tabby/models/error401_authorization.py` |
| `Error403` | `tabby/models/error403.py` |
| `Error404NoSuchWebhook` | `tabby/models/error404_no_such_webhook.py` |

