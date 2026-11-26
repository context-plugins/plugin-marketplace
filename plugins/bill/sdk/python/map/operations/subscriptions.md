<!-- Generated file — do not edit; regenerated with the SDK. -->

# Subscriptions — operations

Accessor: `client.subscriptions` · Source: `bill/apis/subscriptions.py` · 8 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded, and an operation with no table mentions nothing but builtins and those.

### client.subscriptions.create_new_security_key

- **Route**: `POST /v3/subscriptions/{subscriptionId}/security_key`
- **Server**: `default_connect_events_api`
- **Signature**: `def create_new_security_key(subscription_id: str, x_idempotent_key: str, *, session_id: str | None = None, dev_key: str | None = None, app_key: str | None = None, api_token: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `subscription_id`, `x_idempotent_key`
- **Params**: `subscription_id` — path `subscriptionId` · `x_idempotent_key` — header `X-Idempotent-Key` · `session_id` — header `sessionId` · `dev_key` — header `devKey` · `app_key` — header `appKey` · `api_token` — header `apiToken`
- **Returns (parsed)**: `SecurityKeyDto`
- **Returns (raw)**: `ApiResult[SecurityKeyDto, RawError]`
- **Error**: `RawError` — **Case B**

| Type | Source |
| --- | --- |
| `SecurityKeyDto` | `bill/models/security_key_dto.py` |

### client.subscriptions.create_subscription

- **Route**: `POST /v3/subscriptions`
- **Server**: `default_connect_events_api`
- **Signature**: `def create_subscription(x_idempotent_key: str, body: SubscriptionRequestDto | SubscriptionRequestDtoDict, *, session_id: str | None = None, dev_key: str | None = None, app_key: str | None = None, api_token: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_idempotent_key`, `body`
- **Params**: `x_idempotent_key` — header `X-Idempotent-Key` · `session_id` — header `sessionId` · `dev_key` — header `devKey` · `app_key` — header `appKey` · `api_token` — header `apiToken` · `body` — JSON body
- **Returns (parsed)**: `SubscriptionWithSecurityKeyResponseDto`
- **Returns (raw)**: `ApiResult[SubscriptionWithSecurityKeyResponseDto, RawError]`
- **Error**: `RawError` — **Case B**

| Type | Source |
| --- | --- |
| `SubscriptionRequestDto` | `bill/models/subscription_request_dto.py` |
| `SubscriptionRequestDtoDict` | `bill/models/subscription_request_dto.py` |
| `SubscriptionWithSecurityKeyResponseDto` | `bill/models/subscription_with_security_key_response_dto.py` |

### client.subscriptions.delete_subscription

- **Route**: `DELETE /v3/subscriptions/{subscriptionId}`
- **Server**: `default_connect_events_api`
- **Signature**: `def delete_subscription(subscription_id: str, *, session_id: str | None = None, dev_key: str | None = None, app_key: str | None = None, api_token: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `subscription_id`
- **Params**: `subscription_id` — path `subscriptionId` · `session_id` — header `sessionId` · `dev_key` — header `devKey` · `app_key` — header `appKey` · `api_token` — header `apiToken`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, RawError]`
- **Error**: `RawError` — **Case B**

### client.subscriptions.get_all_subscriptions

- **Route**: `GET /v3/subscriptions`
- **Server**: `default_connect_events_api`
- **Signature**: `def get_all_subscriptions(*, max_: int | None = None, page: str | None = None, session_id: str | None = None, dev_key: str | None = None, app_key: str | None = None, api_token: str | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `max_` — query `max` · `page` — query · `session_id` — header `sessionId` · `dev_key` — header `devKey` · `app_key` — header `appKey` · `api_token` — header `apiToken`
- **Returns (parsed)**: `PaginationDtoSubscriptionResponseDto`
- **Returns (raw)**: `ApiResult[PaginationDtoSubscriptionResponseDto, RawError]`
- **Error**: `RawError` — **Case B**

| Type | Source |
| --- | --- |
| `PaginationDtoSubscriptionResponseDto` | `bill/models/pagination_dto_subscription_response_dto.py` |

### client.subscriptions.get_subscription

- **Route**: `GET /v3/subscriptions/{subscriptionId}`
- **Server**: `default_connect_events_api`
- **Signature**: `def get_subscription(subscription_id: str, *, session_id: str | None = None, dev_key: str | None = None, app_key: str | None = None, api_token: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `subscription_id`
- **Params**: `subscription_id` — path `subscriptionId` · `session_id` — header `sessionId` · `dev_key` — header `devKey` · `app_key` — header `appKey` · `api_token` — header `apiToken`
- **Returns (parsed)**: `SubscriptionResponseDto`
- **Returns (raw)**: `ApiResult[SubscriptionResponseDto, RawError]`
- **Error**: `RawError` — **Case B**

| Type | Source |
| --- | --- |
| `SubscriptionResponseDto` | `bill/models/subscription_response_dto.py` |

### client.subscriptions.replace_subscription

- **Route**: `PUT /v3/subscriptions/{subscriptionId}`
- **Server**: `default_connect_events_api`
- **Signature**: `def replace_subscription(subscription_id: str, body: SubscriptionRequestDto | SubscriptionRequestDtoDict, *, session_id: str | None = None, dev_key: str | None = None, app_key: str | None = None, api_token: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `subscription_id`, `body`
- **Params**: `subscription_id` — path `subscriptionId` · `session_id` — header `sessionId` · `dev_key` — header `devKey` · `app_key` — header `appKey` · `api_token` — header `apiToken` · `body` — JSON body
- **Returns (parsed)**: `SubscriptionResponseDto`
- **Returns (raw)**: `ApiResult[SubscriptionResponseDto, RawError]`
- **Error**: `RawError` — **Case B**

| Type | Source |
| --- | --- |
| `SubscriptionRequestDto` | `bill/models/subscription_request_dto.py` |
| `SubscriptionRequestDtoDict` | `bill/models/subscription_request_dto.py` |
| `SubscriptionResponseDto` | `bill/models/subscription_response_dto.py` |

### client.subscriptions.send_test_event

- **Route**: `POST /v3/subscriptions/{subscriptionId}/test`
- **Server**: `default_connect_events_api`
- **Signature**: `def send_test_event(subscription_id: str, body: SendTestEventRequestDto | SendTestEventRequestDtoDict, *, session_id: str | None = None, dev_key: str | None = None, app_key: str | None = None, api_token: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `subscription_id`, `body`
- **Params**: `subscription_id` — path `subscriptionId` · `session_id` — header `sessionId` · `dev_key` — header `devKey` · `app_key` — header `appKey` · `api_token` — header `apiToken` · `body` — JSON body
- **Returns (parsed)**: `EventDto`
- **Returns (raw)**: `ApiResult[EventDto, RawError]`
- **Error**: `RawError` — **Case B**

| Type | Source |
| --- | --- |
| `SendTestEventRequestDto` | `bill/models/send_test_event_request_dto.py` |
| `SendTestEventRequestDtoDict` | `bill/models/send_test_event_request_dto.py` |
| `EventDto` | `bill/models/event_dto.py` |

### client.subscriptions.update_subscription

- **Route**: `PATCH /v3/subscriptions/{subscriptionId}`
- **Server**: `default_connect_events_api`
- **Signature**: `def update_subscription(subscription_id: str, body: SubscriptionUpdateRequestDto | SubscriptionUpdateRequestDtoDict, *, session_id: str | None = None, dev_key: str | None = None, app_key: str | None = None, api_token: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `subscription_id`, `body`
- **Params**: `subscription_id` — path `subscriptionId` · `session_id` — header `sessionId` · `dev_key` — header `devKey` · `app_key` — header `appKey` · `api_token` — header `apiToken` · `body` — JSON body
- **Returns (parsed)**: `SubscriptionResponseDto`
- **Returns (raw)**: `ApiResult[SubscriptionResponseDto, RawError]`
- **Error**: `RawError` — **Case B**

| Type | Source |
| --- | --- |
| `SubscriptionUpdateRequestDto` | `bill/models/subscription_update_request_dto.py` |
| `SubscriptionUpdateRequestDtoDict` | `bill/models/subscription_update_request_dto.py` |
| `SubscriptionResponseDto` | `bill/models/subscription_response_dto.py` |

