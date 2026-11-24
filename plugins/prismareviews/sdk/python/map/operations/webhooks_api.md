<!-- Generated file — do not edit; regenerated with the SDK. -->

# WebhooksApi — operations

Accessor: `client.webhooks_api` · Source: `prisma_reviews/apis/webhooks_api.py` · 3 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.webhooks_api.create_webhook

- **Route**: `POST /v1/webhooks`
- **Auth**: `api_key`
- **Signature**: `def create_webhook(body: V1WebhooksRequest | V1WebhooksRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `WebhookCreated`
- **Returns (raw)**: `ApiResult[WebhookCreated, CreateWebhookErrorBody]`
- **Error**: `CreateWebhookErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [401, 403, 422, 429, 500, 503] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `V1WebhooksRequest` | `prisma_reviews/models/v1_webhooks_request.py` |
| `V1WebhooksRequestDict` | `prisma_reviews/models/v1_webhooks_request.py` |
| `WebhookCreated` | `prisma_reviews/models/webhook_created.py` |
| `CreateWebhookErrorBody` | `prisma_reviews/errors/create_webhook_error.py` |
| `Error` | `prisma_reviews/models/error.py` |

### client.webhooks_api.delete_webhook

- **Route**: `DELETE /v1/webhooks/{id}`
- **Auth**: `api_key`
- **Signature**: `def delete_webhook(id_: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id`
- **Returns (parsed)**: `WebhookDeleted`
- **Returns (raw)**: `ApiResult[WebhookDeleted, DeleteWebhookErrorBody]`
- **Error**: `DeleteWebhookErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [401, 403, 404, 429, 500, 503] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `WebhookDeleted` | `prisma_reviews/models/webhook_deleted.py` |
| `DeleteWebhookErrorBody` | `prisma_reviews/errors/delete_webhook_error.py` |
| `Error` | `prisma_reviews/models/error.py` |

### client.webhooks_api.list_webhooks

- **Route**: `GET /v1/webhooks`
- **Auth**: `api_key`
- **Signature**: `def list_webhooks(*, request_options: RequestOptionsOrDict | None = None)`
- **Returns (parsed)**: `WebhookList`
- **Returns (raw)**: `ApiResult[WebhookList, ListWebhooksErrorBody]`
- **Error**: `ListWebhooksErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [401, 403, 429, 500, 503] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `WebhookList` | `prisma_reviews/models/webhook_list.py` |
| `ListWebhooksErrorBody` | `prisma_reviews/errors/list_webhooks_error.py` |
| `Error` | `prisma_reviews/models/error.py` |

