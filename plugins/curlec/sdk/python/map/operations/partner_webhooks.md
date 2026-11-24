<!-- Generated file — do not edit; regenerated with the SDK. -->

# PartnerWebhooks — operations

Accessor: `client.partner_webhooks` · Source: `curlec/apis/partner_webhooks.py` · 5 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.partner_webhooks.create_partner_webhook

- **Route**: `POST /v2/accounts/{account_id}/webhooks`
- **Auth**: `basic_auth`
- **Server**: `default`
- **Signature**: `def create_partner_webhook(account_id: str, body: V2AccountsWebhooksRequest | V2AccountsWebhooksRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `account_id`, `body`
- **Params**: `account_id` — path · `body` — JSON body
- **Returns (parsed)**: `PartnerWebhook`
- **Returns (raw)**: `ApiResult[PartnerWebhook, CreatePartnerWebhookErrorBody]`
- **Error**: `CreatePartnerWebhookErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `V2AccountsWebhooksRequest` | `curlec/models/v2_accounts_webhooks_request.py` |
| `V2AccountsWebhooksRequestDict` | `curlec/models/v2_accounts_webhooks_request.py` |
| `PartnerWebhook` | `curlec/models/partner_webhook.py` |
| `CreatePartnerWebhookErrorBody` | `curlec/errors/create_partner_webhook_error.py` |
| `Error` | `curlec/models/error.py` |

### client.partner_webhooks.delete_partner_webhook

- **Route**: `DELETE /v2/accounts/{account_id}/webhooks/{webhook_id}`
- **Auth**: `basic_auth`
- **Server**: `default`
- **Signature**: `def delete_partner_webhook(account_id: str, webhook_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `account_id`, `webhook_id`
- **Params**: `account_id` — path · `webhook_id` — path
- **Returns (parsed)**: `Any`
- **Returns (raw)**: `ApiResult[Any, DeletePartnerWebhookErrorBody]`
- **Error**: `DeletePartnerWebhookErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 404, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `DeletePartnerWebhookErrorBody` | `curlec/errors/delete_partner_webhook_error.py` |
| `Error` | `curlec/models/error.py` |

### client.partner_webhooks.fetch_partner_webhook

- **Route**: `GET /v2/accounts/{account_id}/webhooks/{webhook_id}`
- **Auth**: `basic_auth`
- **Server**: `default`
- **Signature**: `def fetch_partner_webhook(account_id: str, webhook_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `account_id`, `webhook_id`
- **Params**: `account_id` — path · `webhook_id` — path
- **Returns (parsed)**: `PartnerWebhook`
- **Returns (raw)**: `ApiResult[PartnerWebhook, FetchPartnerWebhookErrorBody]`
- **Error**: `FetchPartnerWebhookErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 404, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `PartnerWebhook` | `curlec/models/partner_webhook.py` |
| `FetchPartnerWebhookErrorBody` | `curlec/errors/fetch_partner_webhook_error.py` |
| `Error` | `curlec/models/error.py` |

### client.partner_webhooks.list_partner_webhooks

- **Route**: `GET /v2/accounts/{account_id}/webhooks`
- **Auth**: `basic_auth`
- **Server**: `default`
- **Signature**: `def list_partner_webhooks(account_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `account_id`
- **Params**: `account_id` — path
- **Returns (parsed)**: `V2AccountsWebhooksResponse`
- **Returns (raw)**: `ApiResult[V2AccountsWebhooksResponse, ListPartnerWebhooksErrorBody]`
- **Error**: `ListPartnerWebhooksErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `V2AccountsWebhooksResponse` | `curlec/models/v2_accounts_webhooks_response.py` |
| `ListPartnerWebhooksErrorBody` | `curlec/errors/list_partner_webhooks_error.py` |
| `Error` | `curlec/models/error.py` |

### client.partner_webhooks.update_partner_webhook

- **Route**: `PATCH /v2/accounts/{account_id}/webhooks/{webhook_id}`
- **Auth**: `basic_auth`
- **Server**: `default`
- **Signature**: `def update_partner_webhook(account_id: str, webhook_id: str, body: PartnerWebhook | PartnerWebhookDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `account_id`, `webhook_id`, `body`
- **Params**: `account_id` — path · `webhook_id` — path · `body` — JSON body
- **Returns (parsed)**: `PartnerWebhook`
- **Returns (raw)**: `ApiResult[PartnerWebhook, UpdatePartnerWebhookErrorBody]`
- **Error**: `UpdatePartnerWebhookErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `PartnerWebhook` | `curlec/models/partner_webhook.py` |
| `PartnerWebhookDict` | `curlec/models/partner_webhook.py` |
| `UpdatePartnerWebhookErrorBody` | `curlec/errors/update_partner_webhook_error.py` |
| `Error` | `curlec/models/error.py` |

