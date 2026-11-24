<!-- Generated file — do not edit; regenerated with the SDK. -->

# WebhooksApi — operations

Accessor: `client.webhooks_api` · Source: `givebutter/apis/webhooks_api.py` · 5 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.webhooks_api.webhooks_destroy

- **Route**: `DELETE /v1/webhooks/{webhook}`
- **Auth**: `http`
- **Signature**: `def webhooks_destroy(webhook: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `webhook`
- **Params**: `webhook` — path
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, WebhooksDestroyErrorBody]`
- **Error**: `WebhooksDestroyErrorBody` — **Case A (typed)**
- **Error arms**: `AuthorizationException1` [403] · `ModelNotFoundException1` [404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `WebhooksDestroyErrorBody` | `givebutter/errors/webhooks_destroy_error.py` |
| `AuthorizationException1` | `givebutter/models/authorization_exception1.py` |
| `ModelNotFoundException1` | `givebutter/models/model_not_found_exception1.py` |

### client.webhooks_api.webhooks_index

- **Route**: `GET /v1/webhooks`
- **Auth**: `http`
- **Signature**: `def webhooks_index(*, request_options: RequestOptionsOrDict | None = None)`
- **Returns (parsed)**: `V1WebhooksResponse`
- **Returns (raw)**: `ApiResult[V1WebhooksResponse, RawError]`
- **Error**: `RawError` — **Case B**

| Type | Source |
| --- | --- |
| `V1WebhooksResponse` | `givebutter/models/v1_webhooks_response.py` |

### client.webhooks_api.webhooks_show

- **Route**: `GET /v1/webhooks/{webhook}`
- **Auth**: `http`
- **Signature**: `def webhooks_show(webhook: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `webhook`
- **Params**: `webhook` — path
- **Returns (parsed)**: `WebhookResource`
- **Returns (raw)**: `ApiResult[WebhookResource, WebhooksShowErrorBody]`
- **Error**: `WebhooksShowErrorBody` — **Case A (typed)**
- **Error arms**: `AuthorizationException1` [403] · `ModelNotFoundException1` [404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `WebhookResource` | `givebutter/models/webhook_resource.py` |
| `WebhooksShowErrorBody` | `givebutter/errors/webhooks_show_error.py` |
| `AuthorizationException1` | `givebutter/models/authorization_exception1.py` |
| `ModelNotFoundException1` | `givebutter/models/model_not_found_exception1.py` |

### client.webhooks_api.webhooks_store

- **Route**: `POST /v1/webhooks`
- **Auth**: `http`
- **Signature**: `def webhooks_store(body: V1WebhooksRequest | V1WebhooksRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `WebhookResource`
- **Returns (raw)**: `ApiResult[WebhookResource, WebhooksStoreErrorBody]`
- **Error**: `WebhooksStoreErrorBody` — **Case A (typed)**
- **Error arms**: `ValidationException1` [422] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `V1WebhooksRequest` | `givebutter/models/v1_webhooks_request.py` |
| `V1WebhooksRequestDict` | `givebutter/models/v1_webhooks_request.py` |
| `WebhookResource` | `givebutter/models/webhook_resource.py` |
| `WebhooksStoreErrorBody` | `givebutter/errors/webhooks_store_error.py` |
| `ValidationException1` | `givebutter/models/validation_exception1.py` |

### client.webhooks_api.webhooks_update

- **Route**: `PUT /v1/webhooks/{webhook}`
- **Auth**: `http`
- **Signature**: `def webhooks_update(webhook: str, body: V1WebhooksRequest1 | V1WebhooksRequest1Dict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `webhook`, `body`
- **Params**: `webhook` — path · `body` — JSON body
- **Returns (parsed)**: `WebhookResource`
- **Returns (raw)**: `ApiResult[WebhookResource, WebhooksUpdateErrorBody]`
- **Error**: `WebhooksUpdateErrorBody` — **Case A (typed)**
- **Error arms**: `ModelNotFoundException1` [404] · `ValidationException1` [422] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `V1WebhooksRequest1` | `givebutter/models/v1_webhooks_request1.py` |
| `V1WebhooksRequest1Dict` | `givebutter/models/v1_webhooks_request1.py` |
| `WebhookResource` | `givebutter/models/webhook_resource.py` |
| `WebhooksUpdateErrorBody` | `givebutter/errors/webhooks_update_error.py` |
| `ModelNotFoundException1` | `givebutter/models/model_not_found_exception1.py` |
| `ValidationException1` | `givebutter/models/validation_exception1.py` |

