<!-- Generated file — do not edit; regenerated with the SDK. -->

# Subscriptions — operations

Accessor: `client.subscriptions` · Source: `beehiiv/apis/subscriptions.py` · 8 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.subscriptions.create11

- **Route**: `POST /publications/{publicationId}/subscriptions`
- **Server**: `default`
- **Signature**: `def create11(publication_id: str, authorization: str, *, body: SubscriptionRequest | SubscriptionRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `publication_id`, `authorization`
- **Params**: `publication_id` — path `publicationId` · `authorization` — header `Authorization` · `body` — JSON body
- **Returns (parsed)**: `SubscriptionResponse`
- **Returns (raw)**: `ApiResult[SubscriptionResponse, Create11ErrorBody]`
- **Error**: `Create11ErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 404, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `SubscriptionRequest` | `beehiiv/models/subscription_request.py` |
| `SubscriptionRequestDict` | `beehiiv/models/subscription_request.py` |
| `SubscriptionResponse` | `beehiiv/models/subscription_response.py` |
| `Create11ErrorBody` | `beehiiv/errors/create11_error.py` |
| `Error` | `beehiiv/models/error.py` |

### client.subscriptions.delete5

- **Route**: `DELETE /publications/{publicationId}/subscriptions/{subscriptionId}`
- **Server**: `default`
- **Signature**: `def delete5(publication_id: str, subscription_id: str, authorization: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `publication_id`, `subscription_id`, `authorization`
- **Params**: `publication_id` — path `publicationId` · `subscription_id` — path `subscriptionId` · `authorization` — header `Authorization`
- **Returns (parsed)**: `SubscriptionDeleteResponse`
- **Returns (raw)**: `ApiResult[SubscriptionDeleteResponse, Delete5ErrorBody]`
- **Error**: `Delete5ErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 404, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `SubscriptionDeleteResponse` | `beehiiv/models/subscription_delete_response.py` |
| `Delete5ErrorBody` | `beehiiv/errors/delete5_error.py` |
| `Error` | `beehiiv/models/error.py` |

### client.subscriptions.get_by_email

- **Route**: `GET /publications/{publicationId}/subscriptions/by_email/{email}`
- **Server**: `default`
- **Signature**: `def get_by_email(publication_id: str, email: str, authorization: str, *, expand: SubscriptionsGetRequestExpandItemOrStr | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `publication_id`, `email`, `authorization`
- **Params**: `publication_id` — path `publicationId` · `email` — path · `expand` — query `expand[]` · `authorization` — header `Authorization`
- **Returns (parsed)**: `SubscriptionResponse`
- **Returns (raw)**: `ApiResult[SubscriptionResponse, GetByEmailErrorBody]`
- **Error**: `GetByEmailErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 404, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `SubscriptionsGetRequestExpandItemOrStr` | `beehiiv/models/enums/subscriptions_get_request_expand_item.py` |
| `SubscriptionResponse` | `beehiiv/models/subscription_response.py` |
| `GetByEmailErrorBody` | `beehiiv/errors/get_by_email_error.py` |
| `Error` | `beehiiv/models/error.py` |

### client.subscriptions.get_by_id

- **Route**: `GET /publications/{publicationId}/subscriptions/{subscriptionId}`
- **Server**: `default`
- **Signature**: `def get_by_id(publication_id: str, subscription_id: str, authorization: str, *, expand: SubscriptionsGetRequestExpandItemOrStr | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `publication_id`, `subscription_id`, `authorization`
- **Params**: `publication_id` — path `publicationId` · `subscription_id` — path `subscriptionId` · `expand` — query `expand[]` · `authorization` — header `Authorization`
- **Returns (parsed)**: `SubscriptionResponse`
- **Returns (raw)**: `ApiResult[SubscriptionResponse, GetByIdErrorBody]`
- **Error**: `GetByIdErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 404, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `SubscriptionsGetRequestExpandItemOrStr` | `beehiiv/models/enums/subscriptions_get_request_expand_item.py` |
| `SubscriptionResponse` | `beehiiv/models/subscription_response.py` |
| `GetByIdErrorBody` | `beehiiv/errors/get_by_id_error.py` |
| `Error` | `beehiiv/models/error.py` |

### client.subscriptions.index20

- **Route**: `GET /publications/{publicationId}/subscriptions`
- **Server**: `default`
- **Signature**: `def index20(publication_id: str, authorization: str, *, expand: SubscriptionsListRequestExpandItemOrStr | None = None, status: SubscriptionsListRequestStatusOrStr | None = SubscriptionsListRequestStatus.ALL, tier: SubscriptionsListRequestTierOrStr | None = SubscriptionsListRequestTier.ALL, premium_tiers: str | None = None, premium_tier_ids: str | None = None, limit: int | None = None, cursor: str | None = None, page: int | None = None, email: str | None = None, order_by: SubscriptionsListRequestOrderByOrStr | None = SubscriptionsListRequestOrderBy.CREATED, direction: RequestDirectionOrStr | None = RequestDirection.ASC, creation_date: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `publication_id`, `authorization`
- **Params**: `publication_id` — path `publicationId` · `expand` — query `expand[]` · `status` — query · `tier` — query · `premium_tiers` — query `premium_tiers[]` · `premium_tier_ids` — query `premium_tier_ids[]` · `limit` — query · `cursor` — query · `page` — query · `email` — query · `order_by` — query · `direction` — query · `creation_date` — query · `authorization` — header `Authorization`
- **Returns (parsed)**: `SubscriptionsListResponse`
- **Returns (raw)**: `ApiResult[SubscriptionsListResponse, Index20ErrorBody]`
- **Error**: `Index20ErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 404, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `SubscriptionsListRequestExpandItemOrStr` | `beehiiv/models/enums/subscriptions_list_request_expand_item.py` |
| `SubscriptionsListRequestStatusOrStr` | `beehiiv/models/enums/subscriptions_list_request_status.py` |
| `SubscriptionsListRequestTierOrStr` | `beehiiv/models/enums/subscriptions_list_request_tier.py` |
| `SubscriptionsListRequestOrderByOrStr` | `beehiiv/models/enums/subscriptions_list_request_order_by.py` |
| `RequestDirectionOrStr` | `beehiiv/models/enums/request_direction.py` |
| `SubscriptionsListResponse` | `beehiiv/models/subscriptions_list_response.py` |
| `Index20ErrorBody` | `beehiiv/errors/index20_error.py` |
| `Error` | `beehiiv/models/error.py` |

### client.subscriptions.patch3

- **Route**: `PATCH /publications/{publicationId}/subscriptions/{subscriptionId}`
- **Server**: `default`
- **Signature**: `def patch3(publication_id: str, subscription_id: str, authorization: str, *, body: PublicationsSubscriptionsRequest1 | PublicationsSubscriptionsRequest1Dict | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `publication_id`, `subscription_id`, `authorization`
- **Params**: `publication_id` — path `publicationId` · `subscription_id` — path `subscriptionId` · `authorization` — header `Authorization` · `body` — JSON body
- **Returns (parsed)**: `SubscriptionResponse`
- **Returns (raw)**: `ApiResult[SubscriptionResponse, Patch3ErrorBody]`
- **Error**: `Patch3ErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 404, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `PublicationsSubscriptionsRequest1` | `beehiiv/models/publications_subscriptions_request1.py` |
| `PublicationsSubscriptionsRequest1Dict` | `beehiiv/models/publications_subscriptions_request1.py` |
| `SubscriptionResponse` | `beehiiv/models/subscription_response.py` |
| `Patch3ErrorBody` | `beehiiv/errors/patch3_error.py` |
| `Error` | `beehiiv/models/error.py` |

### client.subscriptions.put3

- **Route**: `PUT /publications/{publicationId}/subscriptions/{subscriptionId}`
- **Server**: `default`
- **Signature**: `def put3(publication_id: str, subscription_id: str, authorization: str, *, body: PublicationsSubscriptionsRequestReferenceSubscriptionsApi | PublicationsSubscriptionsRequestReferenceSubscriptionsApiDict | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `publication_id`, `subscription_id`, `authorization`
- **Params**: `publication_id` — path `publicationId` · `subscription_id` — path `subscriptionId` · `authorization` — header `Authorization` · `body` — JSON body
- **Returns (parsed)**: `SubscriptionResponse`
- **Returns (raw)**: `ApiResult[SubscriptionResponse, Put3ErrorBody]`
- **Error**: `Put3ErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 404, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `PublicationsSubscriptionsRequestReferenceSubscriptionsApi` | `beehiiv/models/publications_subscriptions_request_reference_subscriptions_api.py` |
| `PublicationsSubscriptionsRequestReferenceSubscriptionsApiDict` | `beehiiv/models/publications_subscriptions_request_reference_subscriptions_api.py` |
| `SubscriptionResponse` | `beehiiv/models/subscription_response.py` |
| `Put3ErrorBody` | `beehiiv/errors/put3_error.py` |
| `Error` | `beehiiv/models/error.py` |

### client.subscriptions.update_by_email

- **Route**: `PUT /publications/{publicationId}/subscriptions/by_email/{email}`
- **Server**: `default`
- **Signature**: `def update_by_email(publication_id: str, email: str, authorization: str, *, body: PublicationsSubscriptionsByEmailRequest | PublicationsSubscriptionsByEmailRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `publication_id`, `email`, `authorization`
- **Params**: `publication_id` — path `publicationId` · `email` — path · `authorization` — header `Authorization` · `body` — JSON body
- **Returns (parsed)**: `SubscriptionResponse`
- **Returns (raw)**: `ApiResult[SubscriptionResponse, UpdateByEmailErrorBody]`
- **Error**: `UpdateByEmailErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 404, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `PublicationsSubscriptionsByEmailRequest` | `beehiiv/models/publications_subscriptions_by_email_request.py` |
| `PublicationsSubscriptionsByEmailRequestDict` | `beehiiv/models/publications_subscriptions_by_email_request.py` |
| `SubscriptionResponse` | `beehiiv/models/subscription_response.py` |
| `UpdateByEmailErrorBody` | `beehiiv/errors/update_by_email_error.py` |
| `Error` | `beehiiv/models/error.py` |

