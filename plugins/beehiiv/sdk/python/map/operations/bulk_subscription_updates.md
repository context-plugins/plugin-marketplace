<!-- Generated file — do not edit; regenerated with the SDK. -->

# BulkSubscriptionUpdates — operations

Accessor: `client.bulk_subscription_updates` · Source: `beehiiv/apis/bulk_subscription_updates.py` · 6 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.bulk_subscription_updates.index7

- **Route**: `GET /publications/{publicationId}/bulk_subscription_updates`
- **Server**: `default`
- **Signature**: `def index7(publication_id: str, authorization: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `publication_id`, `authorization`
- **Params**: `publication_id` — path `publicationId` · `authorization` — header `Authorization`
- **Returns (parsed)**: `BulkSubscriptionUpdatesListResponse`
- **Returns (raw)**: `ApiResult[BulkSubscriptionUpdatesListResponse, Index7ErrorBody]`
- **Error**: `Index7ErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 404, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `BulkSubscriptionUpdatesListResponse` | `beehiiv/models/bulk_subscription_updates_list_response.py` |
| `Index7ErrorBody` | `beehiiv/errors/index7_error.py` |
| `Error` | `beehiiv/models/error.py` |

### client.bulk_subscription_updates.patch

- **Route**: `PATCH /publications/{publicationId}/subscriptions/bulk_actions`
- **Server**: `default`
- **Signature**: `def patch(publication_id: str, authorization: str, *, body: PublicationsSubscriptionsBulkActionsRequest | PublicationsSubscriptionsBulkActionsRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `publication_id`, `authorization`
- **Params**: `publication_id` — path `publicationId` · `authorization` — header `Authorization` · `body` — JSON body
- **Returns (parsed)**: `SubscriptionsPatchResponse`
- **Returns (raw)**: `ApiResult[SubscriptionsPatchResponse, PatchErrorBody]`
- **Error**: `PatchErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 404, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `PublicationsSubscriptionsBulkActionsRequest` | `beehiiv/models/publications_subscriptions_bulk_actions_request.py` |
| `PublicationsSubscriptionsBulkActionsRequestDict` | `beehiiv/models/publications_subscriptions_bulk_actions_request.py` |
| `SubscriptionsPatchResponse` | `beehiiv/models/subscriptions_patch_response.py` |
| `PatchErrorBody` | `beehiiv/errors/patch_error.py` |
| `Error` | `beehiiv/models/error.py` |

### client.bulk_subscription_updates.patch_status

- **Route**: `PATCH /publications/{publicationId}/subscriptions`
- **Server**: `default`
- **Signature**: `def patch_status(publication_id: str, authorization: str, *, body: PublicationsSubscriptionsRequest | PublicationsSubscriptionsRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `publication_id`, `authorization`
- **Params**: `publication_id` — path `publicationId` · `authorization` — header `Authorization` · `body` — JSON body
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, RawError]`
- **Error**: `RawError` — **Case B**

| Type | Source |
| --- | --- |
| `PublicationsSubscriptionsRequest` | `beehiiv/models/publications_subscriptions_request.py` |
| `PublicationsSubscriptionsRequestDict` | `beehiiv/models/publications_subscriptions_request.py` |

### client.bulk_subscription_updates.put

- **Route**: `PUT /publications/{publicationId}/subscriptions/bulk_actions`
- **Server**: `default`
- **Signature**: `def put(publication_id: str, authorization: str, *, body: PublicationsSubscriptionsBulkActionsRequest | PublicationsSubscriptionsBulkActionsRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `publication_id`, `authorization`
- **Params**: `publication_id` — path `publicationId` · `authorization` — header `Authorization` · `body` — JSON body
- **Returns (parsed)**: `SubscriptionsPatchResponse`
- **Returns (raw)**: `ApiResult[SubscriptionsPatchResponse, PutErrorBody]`
- **Error**: `PutErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 404, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `PublicationsSubscriptionsBulkActionsRequest` | `beehiiv/models/publications_subscriptions_bulk_actions_request.py` |
| `PublicationsSubscriptionsBulkActionsRequestDict` | `beehiiv/models/publications_subscriptions_bulk_actions_request.py` |
| `SubscriptionsPatchResponse` | `beehiiv/models/subscriptions_patch_response.py` |
| `PutErrorBody` | `beehiiv/errors/put_error.py` |
| `Error` | `beehiiv/models/error.py` |

### client.bulk_subscription_updates.put_status

- **Route**: `PUT /publications/{publicationId}/subscriptions`
- **Server**: `default`
- **Signature**: `def put_status(publication_id: str, authorization: str, *, body: PublicationsSubscriptionsRequest | PublicationsSubscriptionsRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `publication_id`, `authorization`
- **Params**: `publication_id` — path `publicationId` · `authorization` — header `Authorization` · `body` — JSON body
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, RawError]`
- **Error**: `RawError` — **Case B**

| Type | Source |
| --- | --- |
| `PublicationsSubscriptionsRequest` | `beehiiv/models/publications_subscriptions_request.py` |
| `PublicationsSubscriptionsRequestDict` | `beehiiv/models/publications_subscriptions_request.py` |

### client.bulk_subscription_updates.show4

- **Route**: `GET /publications/{publicationId}/bulk_subscription_updates/{id}`
- **Server**: `default`
- **Signature**: `def show4(publication_id: str, id_: str, authorization: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `publication_id`, `id_`, `authorization`
- **Params**: `publication_id` — path `publicationId` · `id_` — path `id` · `authorization` — header `Authorization`
- **Returns (parsed)**: `BulkSubscriptionUpdatesGetResponse`
- **Returns (raw)**: `ApiResult[BulkSubscriptionUpdatesGetResponse, Show4ErrorBody]`
- **Error**: `Show4ErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 404, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `BulkSubscriptionUpdatesGetResponse` | `beehiiv/models/bulk_subscription_updates_get_response.py` |
| `Show4ErrorBody` | `beehiiv/errors/show4_error.py` |
| `Error` | `beehiiv/models/error.py` |

