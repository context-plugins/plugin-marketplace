<!-- Generated file — do not edit; regenerated with the SDK. -->

# WebhooksApi — operations

Accessor: `client.webhooks_api` · Source: `beehiiv/apis/webhooks_api.py` · 5 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.webhooks_api.create13

- **Route**: `POST /publications/{publicationId}/webhooks`
- **Server**: `default`
- **Signature**: `def create13(publication_id: str, authorization: str, *, body: PublicationsWebhooksRequest | PublicationsWebhooksRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `publication_id`, `authorization`
- **Params**: `publication_id` — path `publicationId` · `authorization` — header `Authorization` · `body` — JSON body
- **Returns (parsed)**: `WebhookResponse`
- **Returns (raw)**: `ApiResult[WebhookResponse, Create13ErrorBody]`
- **Error**: `Create13ErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 404, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `PublicationsWebhooksRequest` | `beehiiv/models/publications_webhooks_request.py` |
| `PublicationsWebhooksRequestDict` | `beehiiv/models/publications_webhooks_request.py` |
| `WebhookResponse` | `beehiiv/models/webhook_response.py` |
| `Create13ErrorBody` | `beehiiv/errors/create13_error.py` |
| `Error` | `beehiiv/models/error.py` |

### client.webhooks_api.delete6

- **Route**: `DELETE /publications/{publicationId}/webhooks/{endpointId}`
- **Server**: `default`
- **Signature**: `def delete6(publication_id: str, endpoint_id: str, authorization: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `publication_id`, `endpoint_id`, `authorization`
- **Params**: `publication_id` — path `publicationId` · `endpoint_id` — path `endpointId` · `authorization` — header `Authorization`
- **Returns (parsed)**: `WebhooksDeleteResponse`
- **Returns (raw)**: `ApiResult[WebhooksDeleteResponse, Delete6ErrorBody]`
- **Error**: `Delete6ErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 404, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `WebhooksDeleteResponse` | `beehiiv/models/webhooks_delete_response.py` |
| `Delete6ErrorBody` | `beehiiv/errors/delete6_error.py` |
| `Error` | `beehiiv/models/error.py` |

### client.webhooks_api.index22

- **Route**: `GET /publications/{publicationId}/webhooks`
- **Server**: `default`
- **Signature**: `def index22(publication_id: str, authorization: str, *, limit: int | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `publication_id`, `authorization`
- **Params**: `publication_id` — path `publicationId` · `limit` — query · `authorization` — header `Authorization`
- **Returns (parsed)**: `IndexWebhooksResponse`
- **Returns (raw)**: `ApiResult[IndexWebhooksResponse, Index22ErrorBody]`
- **Error**: `Index22ErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 404, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `IndexWebhooksResponse` | `beehiiv/models/index_webhooks_response.py` |
| `Index22ErrorBody` | `beehiiv/errors/index22_error.py` |
| `Error` | `beehiiv/models/error.py` |

### client.webhooks_api.show17

- **Route**: `GET /publications/{publicationId}/webhooks/{endpointId}`
- **Server**: `default`
- **Signature**: `def show17(publication_id: str, endpoint_id: str, authorization: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `publication_id`, `endpoint_id`, `authorization`
- **Params**: `publication_id` — path `publicationId` · `endpoint_id` — path `endpointId` · `authorization` — header `Authorization`
- **Returns (parsed)**: `WebhookResponse`
- **Returns (raw)**: `ApiResult[WebhookResponse, Show17ErrorBody]`
- **Error**: `Show17ErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 404, 422, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `WebhookResponse` | `beehiiv/models/webhook_response.py` |
| `Show17ErrorBody` | `beehiiv/errors/show17_error.py` |
| `Error` | `beehiiv/models/error.py` |

### client.webhooks_api.update4

- **Route**: `PATCH /publications/{publicationId}/webhooks/{endpointId}`
- **Server**: `default`
- **Signature**: `def update4(publication_id: str, endpoint_id: str, authorization: str, *, body: PublicationsWebhooksRequest1 | PublicationsWebhooksRequest1Dict | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `publication_id`, `endpoint_id`, `authorization`
- **Params**: `publication_id` — path `publicationId` · `endpoint_id` — path `endpointId` · `authorization` — header `Authorization` · `body` — JSON body
- **Returns (parsed)**: `WebhookResponse`
- **Returns (raw)**: `ApiResult[WebhookResponse, Update4ErrorBody]`
- **Error**: `Update4ErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 404, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `PublicationsWebhooksRequest1` | `beehiiv/models/publications_webhooks_request1.py` |
| `PublicationsWebhooksRequest1Dict` | `beehiiv/models/publications_webhooks_request1.py` |
| `WebhookResponse` | `beehiiv/models/webhook_response.py` |
| `Update4ErrorBody` | `beehiiv/errors/update4_error.py` |
| `Error` | `beehiiv/models/error.py` |

