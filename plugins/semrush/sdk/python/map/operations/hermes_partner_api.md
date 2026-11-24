<!-- Generated file — do not edit; regenerated with the SDK. -->

# HermesPartnerApi — operations

Accessor: `client.hermes_partner_api` · Source: `semrush/apis/hermes_partner_api.py` · 4 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.hermes_partner_api.get_apis_v4_hermes_v0_event_by_id

- **Route**: `GET /apis/v4/hermes/v0/event/{id}`
- **Auth**: `jwt_issuer_token`
- **Signature**: `def get_apis_v4_hermes_v0_event_by_id(id_: UUID, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id`
- **Returns (parsed)**: `EventResponse`
- **Returns (raw)**: `ApiResult[EventResponse, GetApisV4HermesV0EventByIdErrorBody]`
- **Error**: `GetApisV4HermesV0EventByIdErrorBody` — **Case A (typed)**
- **Error arms**: `str` [400, 401] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `EventResponse` | `semrush/models/event_response.py` |
| `GetApisV4HermesV0EventByIdErrorBody` | `semrush/errors/get_apis_v4_hermes_v0_event_by_id_error.py` |

### client.hermes_partner_api.get_apis_v4_hermes_v0_subscriptions

- **Route**: `GET /apis/v4/hermes/v0/subscriptions`
- **Auth**: `jwt_issuer_token`
- **Signature**: `def get_apis_v4_hermes_v0_subscriptions(*, request_options: RequestOptionsOrDict | None = None)`
- **Returns (parsed)**: `AppSubscriptionsResponse`
- **Returns (raw)**: `ApiResult[AppSubscriptionsResponse, GetApisV4HermesV0SubscriptionsErrorBody]`
- **Error**: `GetApisV4HermesV0SubscriptionsErrorBody` — **Case A (typed)**
- **Error arms**: `str` [400, 401] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `AppSubscriptionsResponse` | `semrush/models/app_subscriptions_response.py` |
| `GetApisV4HermesV0SubscriptionsErrorBody` | `semrush/errors/get_apis_v4_hermes_v0_subscriptions_error.py` |

### client.hermes_partner_api.get_apis_v4_hermes_v0_user_by_user_id_subscription_by_id

- **Route**: `GET /apis/v4/hermes/v0/user/{user_id}/subscription/{id}`
- **Auth**: `jwt_issuer_token`
- **Signature**: `def get_apis_v4_hermes_v0_user_by_user_id_subscription_by_id(user_id: int, id_: int, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `user_id`, `id_`
- **Params**: `user_id` — path · `id_` — path `id`
- **Returns (parsed)**: `AppUserSubscriptionStatusResponse`
- **Returns (raw)**: `ApiResult[AppUserSubscriptionStatusResponse, GetApisV4HermesV0UserByUserIdSubscriptionByIdErrorBody]`
- **Error**: `GetApisV4HermesV0UserByUserIdSubscriptionByIdErrorBody` — **Case A (typed)**
- **Error arms**: `str` [400, 401] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `AppUserSubscriptionStatusResponse` | `semrush/models/app_user_subscription_status_response.py` |
| `GetApisV4HermesV0UserByUserIdSubscriptionByIdErrorBody` | `semrush/errors/get_apis_v4_hermes_v0_user_by_user_id_subscription_by_id_error.py` |

### client.hermes_partner_api.post_apis_v4_hermes_v0_event

- **Route**: `POST /apis/v4/hermes/v0/event`
- **Auth**: `jwt_issuer_token`
- **Signature**: `def post_apis_v4_hermes_v0_event(*, body: CreateEventRequest | CreateEventRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, PostApisV4HermesV0EventErrorBody]`
- **Error**: `PostApisV4HermesV0EventErrorBody` — **Case A (typed)**
- **Error arms**: `str` [400, 401] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `CreateEventRequest` | `semrush/models/create_event_request.py` |
| `CreateEventRequestDict` | `semrush/models/create_event_request.py` |
| `PostApisV4HermesV0EventErrorBody` | `semrush/errors/post_apis_v4_hermes_v0_event_error.py` |

