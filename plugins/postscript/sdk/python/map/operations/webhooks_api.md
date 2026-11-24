<!-- Generated file — do not edit; regenerated with the SDK. -->

# WebhooksApi — operations

Accessor: `client.webhooks_api` · Source: `postscript/apis/webhooks_api.py` · 8 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.webhooks_api.create_webhook_subscription

- **Route**: `POST /api/v2/webhooks`
- **Auth**: `sec0`
- **Signature**: `def create_webhook_subscription(*, x_postscript_shop_token: str | None = None, body: ApiV2WebhooksRequest | ApiV2WebhooksRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `x_postscript_shop_token` — header `X-Postscript-Shop-Token` · `body` — JSON body
- **Returns (parsed)**: `Any`
- **Returns (raw)**: `ApiResult[Any, CreateWebhookSubscriptionErrorBody]`
- **Error**: `CreateWebhookSubscriptionErrorBody` — **Case A (typed)**
- **Error arms**: `Any` [400] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV2WebhooksRequest` | `postscript/models/api_v2_webhooks_request.py` |
| `ApiV2WebhooksRequestDict` | `postscript/models/api_v2_webhooks_request.py` |
| `CreateWebhookSubscriptionErrorBody` | `postscript/errors/create_webhook_subscription_error.py` |

### client.webhooks_api.delete_webhook_subscription

- **Route**: `DELETE /api/v2/webhooks/{id}`
- **Auth**: `sec0`
- **Signature**: `def delete_webhook_subscription(id_: str, *, x_postscript_shop_token: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id` · `x_postscript_shop_token` — header `X-Postscript-Shop-Token`
- **Returns (parsed)**: `Any`
- **Returns (raw)**: `ApiResult[Any, DeleteWebhookSubscriptionErrorBody]`
- **Error**: `DeleteWebhookSubscriptionErrorBody` — **Case A (typed)**
- **Error arms**: `Any` [400] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `DeleteWebhookSubscriptionErrorBody` | `postscript/errors/delete_webhook_subscription_error.py` |

### client.webhooks_api.example_event

- **Route**: `GET /api/v2/webhooks/example`
- **Auth**: `sec0`
- **Signature**: `def example_event(*, event: Event1OrStr = Event1.SHOP_TEST, x_postscript_shop_token: str | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `event` — query · `x_postscript_shop_token` — header `X-Postscript-Shop-Token`
- **Returns (parsed)**: `ApiV2WebhooksExampleResponse`
- **Returns (raw)**: `ApiResult[ApiV2WebhooksExampleResponse, ExampleEventErrorBody]`
- **Error**: `ExampleEventErrorBody` — **Case A (typed)**
- **Error arms**: `Any` [400] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `Event1OrStr` | `postscript/models/enums/event1.py` |
| `ApiV2WebhooksExampleResponse` | `postscript/models/api_v2_webhooks_example_response.py` |
| `ExampleEventErrorBody` | `postscript/errors/example_event_error.py` |

### client.webhooks_api.get_webhook_signing_token

- **Route**: `GET /api/v2/webhooks/token`
- **Auth**: `sec0`
- **Signature**: `def get_webhook_signing_token(*, x_postscript_shop_token: str | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `x_postscript_shop_token` — header `X-Postscript-Shop-Token`
- **Returns (parsed)**: `ApiV2WebhooksTokenResponse`
- **Returns (raw)**: `ApiResult[ApiV2WebhooksTokenResponse, GetWebhookSigningTokenErrorBody]`
- **Error**: `GetWebhookSigningTokenErrorBody` — **Case A (typed)**
- **Error arms**: `Any` [400] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV2WebhooksTokenResponse` | `postscript/models/api_v2_webhooks_token_response.py` |
| `GetWebhookSigningTokenErrorBody` | `postscript/errors/get_webhook_signing_token_error.py` |

### client.webhooks_api.get_webhook_subscription

- **Route**: `GET /api/v2/webhooks/{id}`
- **Auth**: `sec0`
- **Signature**: `def get_webhook_subscription(id_: str, *, x_postscript_shop_token: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id` · `x_postscript_shop_token` — header `X-Postscript-Shop-Token`
- **Returns (parsed)**: `Any`
- **Returns (raw)**: `ApiResult[Any, GetWebhookSubscriptionErrorBody]`
- **Error**: `GetWebhookSubscriptionErrorBody` — **Case A (typed)**
- **Error arms**: `Any` [400] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GetWebhookSubscriptionErrorBody` | `postscript/errors/get_webhook_subscription_error.py` |

### client.webhooks_api.list_webhook_subscriptions

- **Route**: `GET /api/v2/webhooks`
- **Auth**: `sec0`
- **Signature**: `def list_webhook_subscriptions(*, x_postscript_shop_token: str | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `x_postscript_shop_token` — header `X-Postscript-Shop-Token`
- **Returns (parsed)**: `Any`
- **Returns (raw)**: `ApiResult[Any, ListWebhookSubscriptionsErrorBody]`
- **Error**: `ListWebhookSubscriptionsErrorBody` — **Case A (typed)**
- **Error arms**: `Any` [400] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ListWebhookSubscriptionsErrorBody` | `postscript/errors/list_webhook_subscriptions_error.py` |

### client.webhooks_api.test_shop_webhook

- **Route**: `POST /api/v2/webhooks/test`
- **Auth**: `sec0`
- **Signature**: `def test_shop_webhook(*, x_postscript_shop_token: str | None = None, body: ApiV2WebhooksTestRequest | ApiV2WebhooksTestRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `x_postscript_shop_token` — header `X-Postscript-Shop-Token` · `body` — JSON body
- **Returns (parsed)**: `ApiV2WebhooksTestResponse`
- **Returns (raw)**: `ApiResult[ApiV2WebhooksTestResponse, TestShopWebhookErrorBody]`
- **Error**: `TestShopWebhookErrorBody` — **Case A (typed)**
- **Error arms**: `ApiV2WebhooksTest400Error1` [400] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV2WebhooksTestRequest` | `postscript/models/api_v2_webhooks_test_request.py` |
| `ApiV2WebhooksTestRequestDict` | `postscript/models/api_v2_webhooks_test_request.py` |
| `ApiV2WebhooksTestResponse` | `postscript/models/api_v2_webhooks_test_response.py` |
| `TestShopWebhookErrorBody` | `postscript/errors/test_shop_webhook_error.py` |
| `ApiV2WebhooksTest400Error1` | `postscript/models/api_v2_webhooks_test400_error1.py` |

### client.webhooks_api.update_webhook_subscription

- **Route**: `PATCH /api/v2/webhooks/{id}`
- **Auth**: `sec0`
- **Signature**: `def update_webhook_subscription(id_: str, *, x_postscript_shop_token: str | None = None, body: ApiV2WebhooksRequest1 | ApiV2WebhooksRequest1Dict | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id` · `x_postscript_shop_token` — header `X-Postscript-Shop-Token` · `body` — JSON body
- **Returns (parsed)**: `Any`
- **Returns (raw)**: `ApiResult[Any, UpdateWebhookSubscriptionErrorBody]`
- **Error**: `UpdateWebhookSubscriptionErrorBody` — **Case A (typed)**
- **Error arms**: `Any` [400] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV2WebhooksRequest1` | `postscript/models/api_v2_webhooks_request1.py` |
| `ApiV2WebhooksRequest1Dict` | `postscript/models/api_v2_webhooks_request1.py` |
| `UpdateWebhookSubscriptionErrorBody` | `postscript/errors/update_webhook_subscription_error.py` |

