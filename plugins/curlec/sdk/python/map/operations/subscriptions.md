<!-- Generated file — do not edit; regenerated with the SDK. -->

# Subscriptions — operations

Accessor: `client.subscriptions` · Source: `curlec/apis/subscriptions.py` · 10 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.subscriptions.cancel_subscription

- **Route**: `POST /subscriptions/{id}/cancel`
- **Auth**: `basic_auth` OR `oauth2_authorization_code` OR `oauth2_client_credentials`
- **Server**: `default`
- **Signature**: `def cancel_subscription(id_: str, *, body: SubscriptionsCancelRequest | SubscriptionsCancelRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id` · `body` — JSON body
- **Returns (parsed)**: `Subscription`
- **Returns (raw)**: `ApiResult[Subscription, CancelSubscriptionErrorBody]`
- **Error**: `CancelSubscriptionErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 404, 429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `SubscriptionsCancelRequest` | `curlec/models/subscriptions_cancel_request.py` |
| `SubscriptionsCancelRequestDict` | `curlec/models/subscriptions_cancel_request.py` |
| `Subscription` | `curlec/models/subscription.py` |
| `CancelSubscriptionErrorBody` | `curlec/errors/cancel_subscription_error.py` |
| `Error` | `curlec/models/error.py` |

### client.subscriptions.cancel_subscription_scheduled_changes

- **Route**: `POST /subscriptions/{id}/cancel_scheduled_changes`
- **Auth**: `basic_auth` OR `oauth2_authorization_code` OR `oauth2_client_credentials`
- **Server**: `default`
- **Signature**: `def cancel_subscription_scheduled_changes(id_: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id`
- **Returns (parsed)**: `Subscription`
- **Returns (raw)**: `ApiResult[Subscription, CancelSubscriptionScheduledChangesErrorBody]`
- **Error**: `CancelSubscriptionScheduledChangesErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 404, 429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `Subscription` | `curlec/models/subscription.py` |
| `CancelSubscriptionScheduledChangesErrorBody` | `curlec/errors/cancel_subscription_scheduled_changes_error.py` |
| `Error` | `curlec/models/error.py` |

### client.subscriptions.create_subscription

- **Route**: `POST /subscriptions`
- **Auth**: `basic_auth` OR `oauth2_authorization_code` OR `oauth2_client_credentials`
- **Server**: `default`
- **Signature**: `def create_subscription(body: SubscriptionsRequest | SubscriptionsRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `Subscription`
- **Returns (raw)**: `ApiResult[Subscription, CreateSubscriptionErrorBody]`
- **Error**: `CreateSubscriptionErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `SubscriptionsRequest` | `curlec/models/subscriptions_request.py` |
| `SubscriptionsRequestDict` | `curlec/models/subscriptions_request.py` |
| `Subscription` | `curlec/models/subscription.py` |
| `CreateSubscriptionErrorBody` | `curlec/errors/create_subscription_error.py` |
| `Error` | `curlec/models/error.py` |

### client.subscriptions.delete_subscription_offer

- **Route**: `DELETE /subscriptions/{sub_id}/{offer_id}`
- **Auth**: `basic_auth` OR `oauth2_authorization_code` OR `oauth2_client_credentials`
- **Server**: `default`
- **Signature**: `def delete_subscription_offer(sub_id: str, offer_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `sub_id`, `offer_id`
- **Params**: `sub_id` — path · `offer_id` — path
- **Returns (parsed)**: `Any`
- **Returns (raw)**: `ApiResult[Any, DeleteSubscriptionOfferErrorBody]`
- **Error**: `DeleteSubscriptionOfferErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 404, 429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `DeleteSubscriptionOfferErrorBody` | `curlec/errors/delete_subscription_offer_error.py` |
| `Error` | `curlec/models/error.py` |

### client.subscriptions.fetch_subscription

- **Route**: `GET /subscriptions/{id}`
- **Auth**: `basic_auth` OR `oauth2_authorization_code` OR `oauth2_client_credentials`
- **Server**: `default`
- **Signature**: `def fetch_subscription(id_: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id`
- **Returns (parsed)**: `Subscription`
- **Returns (raw)**: `ApiResult[Subscription, FetchSubscriptionErrorBody]`
- **Error**: `FetchSubscriptionErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [401, 404, 429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `Subscription` | `curlec/models/subscription.py` |
| `FetchSubscriptionErrorBody` | `curlec/errors/fetch_subscription_error.py` |
| `Error` | `curlec/models/error.py` |

### client.subscriptions.fetch_subscription_scheduled_changes

- **Route**: `GET /subscriptions/{id}/retrieve_scheduled_changes`
- **Auth**: `basic_auth` OR `oauth2_authorization_code` OR `oauth2_client_credentials`
- **Server**: `default`
- **Signature**: `def fetch_subscription_scheduled_changes(id_: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id`
- **Returns (parsed)**: `SubscriptionsRetrieveScheduledChangesResponse`
- **Returns (raw)**: `ApiResult[SubscriptionsRetrieveScheduledChangesResponse, FetchSubscriptionScheduledChangesErrorBody]`
- **Error**: `FetchSubscriptionScheduledChangesErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [401, 404, 429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `SubscriptionsRetrieveScheduledChangesResponse` | `curlec/models/subscriptions_retrieve_scheduled_changes_response.py` |
| `FetchSubscriptionScheduledChangesErrorBody` | `curlec/errors/fetch_subscription_scheduled_changes_error.py` |
| `Error` | `curlec/models/error.py` |

### client.subscriptions.list_subscriptions

- **Route**: `GET /subscriptions`
- **Auth**: `basic_auth` OR `oauth2_authorization_code` OR `oauth2_client_credentials`
- **Server**: `default`
- **Signature**: `def list_subscriptions(*, plan_id: str | None = None, from_: int | None = None, to: int | None = None, count: int | None = 10, skip: int | None = 0, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `plan_id` — query · `from_` — query `from` · `to` — query · `count` — query · `skip` — query
- **Returns (parsed)**: `SubscriptionsResponse`
- **Returns (raw)**: `ApiResult[SubscriptionsResponse, ListSubscriptionsErrorBody]`
- **Error**: `ListSubscriptionsErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [401, 429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `SubscriptionsResponse` | `curlec/models/subscriptions_response.py` |
| `ListSubscriptionsErrorBody` | `curlec/errors/list_subscriptions_error.py` |
| `Error` | `curlec/models/error.py` |

### client.subscriptions.pause_subscription

- **Route**: `POST /subscriptions/{id}/pause`
- **Auth**: `basic_auth` OR `oauth2_authorization_code` OR `oauth2_client_credentials`
- **Server**: `default`
- **Signature**: `def pause_subscription(id_: str, *, body: SubscriptionsPauseRequest | SubscriptionsPauseRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id` · `body` — JSON body
- **Returns (parsed)**: `Subscription`
- **Returns (raw)**: `ApiResult[Subscription, PauseSubscriptionErrorBody]`
- **Error**: `PauseSubscriptionErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 404, 429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `SubscriptionsPauseRequest` | `curlec/models/subscriptions_pause_request.py` |
| `SubscriptionsPauseRequestDict` | `curlec/models/subscriptions_pause_request.py` |
| `Subscription` | `curlec/models/subscription.py` |
| `PauseSubscriptionErrorBody` | `curlec/errors/pause_subscription_error.py` |
| `Error` | `curlec/models/error.py` |

### client.subscriptions.resume_subscription

- **Route**: `POST /subscriptions/{id}/resume`
- **Auth**: `basic_auth` OR `oauth2_authorization_code` OR `oauth2_client_credentials`
- **Server**: `default`
- **Signature**: `def resume_subscription(id_: str, *, body: SubscriptionsResumeRequest | SubscriptionsResumeRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id` · `body` — JSON body
- **Returns (parsed)**: `Subscription`
- **Returns (raw)**: `ApiResult[Subscription, ResumeSubscriptionErrorBody]`
- **Error**: `ResumeSubscriptionErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 404, 429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `SubscriptionsResumeRequest` | `curlec/models/subscriptions_resume_request.py` |
| `SubscriptionsResumeRequestDict` | `curlec/models/subscriptions_resume_request.py` |
| `Subscription` | `curlec/models/subscription.py` |
| `ResumeSubscriptionErrorBody` | `curlec/errors/resume_subscription_error.py` |
| `Error` | `curlec/models/error.py` |

### client.subscriptions.update_subscription

- **Route**: `PATCH /subscriptions/{id}`
- **Auth**: `basic_auth` OR `oauth2_authorization_code` OR `oauth2_client_credentials`
- **Server**: `default`
- **Signature**: `def update_subscription(id_: str, body: SubscriptionsRequest1 | SubscriptionsRequest1Dict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`, `body`
- **Params**: `id_` — path `id` · `body` — JSON body
- **Returns (parsed)**: `Subscription`
- **Returns (raw)**: `ApiResult[Subscription, UpdateSubscriptionErrorBody]`
- **Error**: `UpdateSubscriptionErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 404, 429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `SubscriptionsRequest1` | `curlec/models/subscriptions_request1.py` |
| `SubscriptionsRequest1Dict` | `curlec/models/subscriptions_request1.py` |
| `Subscription` | `curlec/models/subscription.py` |
| `UpdateSubscriptionErrorBody` | `curlec/errors/update_subscription_error.py` |
| `Error` | `curlec/models/error.py` |

