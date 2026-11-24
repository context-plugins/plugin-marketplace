<!-- Generated file — do not edit; regenerated with the SDK. -->

# Subscribers — operations

Accessor: `client.subscribers` · Source: `postscript/apis/subscribers.py` · 3 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.subscribers.get_subscriber

- **Route**: `GET /api/v2/subscribers/{id}`
- **Auth**: `sec0`
- **Signature**: `def get_subscriber(id_: str, *, x_postscript_shop_token: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id` · `x_postscript_shop_token` — header `X-Postscript-Shop-Token`
- **Returns (parsed)**: `Any`
- **Returns (raw)**: `ApiResult[Any, GetSubscriberErrorBody]`
- **Error**: `GetSubscriberErrorBody` — **Case A (typed)**
- **Error arms**: `Any` [400] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GetSubscriberErrorBody` | `postscript/errors/get_subscriber_error.py` |

### client.subscribers.get_subscribers

- **Route**: `GET /api/v2/subscribers`
- **Auth**: `sec0`
- **Signature**: `def get_subscribers(*, created_at_eq: RFC3339DateTime | None = None, created_at_gt: RFC3339DateTime | None = None, created_at_gte: RFC3339DateTime | None = None, created_at_lt: RFC3339DateTime | None = None, created_at_lte: RFC3339DateTime | None = None, email_contains: str | None = None, email_eq: str | None = None, email_in: list[str] | None = None, page: int | None = None, phone_number_contains: str | None = None, phone_number_eq: str | None = None, phone_number_in: list[str] | None = None, shopify_customer_id_contains: str | None = None, shopify_customer_id_eq: str | None = None, shopify_customer_id_in: list[str] | None = None, sort: str | None = None, updated_at_eq: RFC3339DateTime | None = None, updated_at_gt: Date | None = None, updated_at_gte: RFC3339DateTime | None = None, updated_at_lt: RFC3339DateTime | None = None, updated_at_lte: RFC3339DateTime | None = None, ps_id_eq: int | None = None, x_postscript_shop_token: str | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `created_at_eq` — query `created_at__eq` · `created_at_gt` — query `created_at__gt` · `created_at_gte` — query `created_at__gte` · `created_at_lt` — query `created_at__lt` · `created_at_lte` — query `created_at__lte` · `email_contains` — query `email__contains` · `email_eq` — query `email__eq` · `email_in` — query `email__in` · `page` — query · `phone_number_contains` — query `phone_number__contains` · `phone_number_eq` — query `phone_number__eq` · `phone_number_in` — query `phone_number__in` · `shopify_customer_id_contains` — query `shopify_customer_id__contains` · `shopify_customer_id_eq` — query `shopify_customer_id__eq` · `shopify_customer_id_in` — query `shopify_customer_id__in` · `sort` — query · `updated_at_eq` — query `updated_at__eq` · `updated_at_gt` — query `updated_at__gt` · `updated_at_gte` — query `updated_at__gte` · `updated_at_lt` — query `updated_at__lt` · `updated_at_lte` — query `updated_at__lte` · `ps_id_eq` — query `ps_id__eq` · `x_postscript_shop_token` — header `X-Postscript-Shop-Token`
- **Returns (parsed)**: `Any`
- **Returns (raw)**: `ApiResult[Any, GetSubscribersErrorBody]`
- **Error**: `GetSubscribersErrorBody` — **Case A (typed)**
- **Error arms**: `Any` [400] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GetSubscribersErrorBody` | `postscript/errors/get_subscribers_error.py` |

### client.subscribers.update_subscriber_by_id

- **Route**: `PATCH /api/v2/subscribers/{id}`
- **Auth**: `sec0`
- **Signature**: `def update_subscriber_by_id(id_: str, *, x_postscript_shop_token: str | None = None, body: ApiV2SubscribersRequest | ApiV2SubscribersRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id` · `x_postscript_shop_token` — header `X-Postscript-Shop-Token` · `body` — JSON body
- **Returns (parsed)**: `Any`
- **Returns (raw)**: `ApiResult[Any, UpdateSubscriberByIdErrorBody]`
- **Error**: `UpdateSubscriberByIdErrorBody` — **Case A (typed)**
- **Error arms**: `Any` [400] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV2SubscribersRequest` | `postscript/models/api_v2_subscribers_request.py` |
| `ApiV2SubscribersRequestDict` | `postscript/models/api_v2_subscribers_request.py` |
| `UpdateSubscriberByIdErrorBody` | `postscript/errors/update_subscriber_by_id_error.py` |

