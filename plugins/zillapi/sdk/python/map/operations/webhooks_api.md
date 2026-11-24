<!-- Generated file — do not edit; regenerated with the SDK. -->

# WebhooksApi — operations

Accessor: `client.webhooks_api` · Source: `zillapi/apis/webhooks_api.py` · 4 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded, and an operation with no table mentions nothing but builtins and those.

### client.webhooks_api.create_webhook

- **Route**: `POST /v1/webhooks`
- **Auth**: `bearer_auth`
- **Signature**: `def create_webhook(body: WebhookCreate | WebhookCreateDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `V1WebhooksResponse1`
- **Returns (raw)**: `ApiResult[V1WebhooksResponse1, RawError]`
- **Error**: `RawError` — **Case B**

| Type | Source |
| --- | --- |
| `WebhookCreate` | `zillapi/models/webhook_create.py` |
| `WebhookCreateDict` | `zillapi/models/webhook_create.py` |
| `V1WebhooksResponse1` | `zillapi/models/v1_webhooks_response1.py` |

### client.webhooks_api.list_webhook_deliveries

- **Route**: `GET /v1/webhooks/{id}/deliveries`
- **Auth**: `bearer_auth`
- **Signature**: `def list_webhook_deliveries(id_: UUID, *, limit: int | None = 50, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id` · `limit` — query
- **Returns (parsed)**: `V1WebhooksDeliveriesResponse`
- **Returns (raw)**: `ApiResult[V1WebhooksDeliveriesResponse, RawError]`
- **Error**: `RawError` — **Case B**

| Type | Source |
| --- | --- |
| `V1WebhooksDeliveriesResponse` | `zillapi/models/v1_webhooks_deliveries_response.py` |

### client.webhooks_api.list_webhooks

- **Route**: `GET /v1/webhooks`
- **Auth**: `bearer_auth`
- **Signature**: `def list_webhooks(*, request_options: RequestOptionsOrDict | None = None)`
- **Returns (parsed)**: `V1WebhooksResponse`
- **Returns (raw)**: `ApiResult[V1WebhooksResponse, RawError]`
- **Error**: `RawError` — **Case B**

| Type | Source |
| --- | --- |
| `V1WebhooksResponse` | `zillapi/models/v1_webhooks_response.py` |

### client.webhooks_api.revoke_webhook

- **Route**: `DELETE /v1/webhooks/{id}`
- **Auth**: `bearer_auth`
- **Signature**: `def revoke_webhook(id_: UUID, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, RawError]`
- **Error**: `RawError` — **Case B**

