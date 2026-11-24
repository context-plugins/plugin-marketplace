# Raw Reference

**Raw** endpoints, reached through `with_raw_response`, return `ApiResult[T, E]` and never raise for an API error. For the parsed endpoints, see [API Reference](api-reference.md).

> Source: [SemrushClient](semrush/client.py)

## HermesPartnerApi

> Source: [HermesPartnerApi](semrush/apis/hermes_partner_api.py)

<details>
<summary><code>def get_apis_v4_hermes_v0_event_by_id(id_: UUID, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[EventResponse, GetApisV4HermesV0EventByIdErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Documentation

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.hermes_partner_api.with_raw_response.get_apis_v4_hermes_v0_event_by_id(
    UUID("00000000-0000-0000-0000-000000000000")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type EventResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetApisV4HermesV0EventByIdErrorBody
```

**Async**

```python
result = await async_client.hermes_partner_api.with_raw_response.get_apis_v4_hermes_v0_event_by_id(
    UUID("00000000-0000-0000-0000-000000000000")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type EventResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetApisV4HermesV0EventByIdErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>UUID</code> | Subscription id |
| <code>request_options</code> | <code>[RequestOptionsOrDict](semrush/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](semrush/core/results.py)&#91;[EventResponse](semrush/models/event_response.py), [GetApisV4HermesV0EventByIdErrorBody](semrush/errors/get_apis_v4_hermes_v0_event_by_id_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[EventResponse](semrush/models/event_response.py)</code> -- OK

**On `Failure`**: `error` is <code>[GetApisV4HermesV0EventByIdErrorBody](semrush/errors/get_apis_v4_hermes_v0_event_by_id_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401 | <code>str</code> |
| anything unmapped | <code>[RawError](semrush/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_apis_v4_hermes_v0_subscriptions(*, request_options: RequestOptionsOrDict | None = None) -> ApiResult[AppSubscriptionsResponse, GetApisV4HermesV0SubscriptionsErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List all application's registered subscriptions
Documentation

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.hermes_partner_api.with_raw_response.get_apis_v4_hermes_v0_subscriptions()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AppSubscriptionsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetApisV4HermesV0SubscriptionsErrorBody
```

**Async**

```python
result = await async_client.hermes_partner_api.with_raw_response.get_apis_v4_hermes_v0_subscriptions()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AppSubscriptionsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetApisV4HermesV0SubscriptionsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>request_options</code> | <code>[RequestOptionsOrDict](semrush/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](semrush/core/results.py)&#91;[AppSubscriptionsResponse](semrush/models/app_subscriptions_response.py), [GetApisV4HermesV0SubscriptionsErrorBody](semrush/errors/get_apis_v4_hermes_v0_subscriptions_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[AppSubscriptionsResponse](semrush/models/app_subscriptions_response.py)</code> -- OK

**On `Failure`**: `error` is <code>[GetApisV4HermesV0SubscriptionsErrorBody](semrush/errors/get_apis_v4_hermes_v0_subscriptions_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401 | <code>str</code> |
| anything unmapped | <code>[RawError](semrush/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_apis_v4_hermes_v0_user_by_user_id_subscription_by_id(user_id: int, id_: int, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[AppUserSubscriptionStatusResponse, GetApisV4HermesV0UserByUserIdSubscriptionByIdErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Documentation

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.hermes_partner_api.with_raw_response.get_apis_v4_hermes_v0_user_by_user_id_subscription_by_id(1, 1)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AppUserSubscriptionStatusResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetApisV4HermesV0UserByUserIdSubscriptionByIdErrorBody
```

**Async**

```python
result = await async_client.hermes_partner_api.with_raw_response.get_apis_v4_hermes_v0_user_by_user_id_subscription_by_id(
    1, 1
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AppUserSubscriptionStatusResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetApisV4HermesV0UserByUserIdSubscriptionByIdErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>user_id</code> | <code>int</code> | User id |
| <code>id_</code> | <code>int</code> | Subscription id |
| <code>request_options</code> | <code>[RequestOptionsOrDict](semrush/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](semrush/core/results.py)&#91;[AppUserSubscriptionStatusResponse](semrush/models/app_user_subscription_status_response.py), [GetApisV4HermesV0UserByUserIdSubscriptionByIdErrorBody](semrush/errors/get_apis_v4_hermes_v0_user_by_user_id_subscription_by_id_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[AppUserSubscriptionStatusResponse](semrush/models/app_user_subscription_status_response.py)</code> -- OK

**On `Failure`**: `error` is <code>[GetApisV4HermesV0UserByUserIdSubscriptionByIdErrorBody](semrush/errors/get_apis_v4_hermes_v0_user_by_user_id_subscription_by_id_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401 | <code>str</code> |
| anything unmapped | <code>[RawError](semrush/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def post_apis_v4_hermes_v0_event(*, body: CreateEventRequest | CreateEventRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, PostApisV4HermesV0EventErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Documentation

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.hermes_partner_api.with_raw_response.post_apis_v4_hermes_v0_event()
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type PostApisV4HermesV0EventErrorBody
```

**Async**

```python
result = await async_client.hermes_partner_api.with_raw_response.post_apis_v4_hermes_v0_event()
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type PostApisV4HermesV0EventErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[CreateEventRequest](semrush/models/create_event_request.py) \| [CreateEventRequestDict](semrush/models/create_event_request.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](semrush/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](semrush/core/results.py)&#91;None, [PostApisV4HermesV0EventErrorBody](semrush/errors/post_apis_v4_hermes_v0_event_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[PostApisV4HermesV0EventErrorBody](semrush/errors/post_apis_v4_hermes_v0_event_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401 | <code>str</code> |
| anything unmapped | <code>[RawError](semrush/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## JwtIssuer

> Source: [JwtIssuer](semrush/apis/jwt_issuer.py)

<details>
<summary><code>def post_app_center_api_v2_jwt_token(*, body: IssuerJwtRequest | IssuerJwtRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[IssuerJwtResponse, PostAppCenterApiV2JwtTokenErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves JWT for accessing Semrush API.
Documentation

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.jwt_issuer.with_raw_response.post_app_center_api_v2_jwt_token()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type IssuerJwtResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type PostAppCenterApiV2JwtTokenErrorBody
```

**Async**

```python
result = await async_client.jwt_issuer.with_raw_response.post_app_center_api_v2_jwt_token()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type IssuerJwtResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type PostAppCenterApiV2JwtTokenErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[IssuerJwtRequest](semrush/models/issuer_jwt_request.py) \| [IssuerJwtRequestDict](semrush/models/issuer_jwt_request.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](semrush/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](semrush/core/results.py)&#91;[IssuerJwtResponse](semrush/models/issuer_jwt_response.py), [PostAppCenterApiV2JwtTokenErrorBody](semrush/errors/post_app_center_api_v2_jwt_token_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[IssuerJwtResponse](semrush/models/issuer_jwt_response.py)</code> -- OK

**On `Failure`**: `error` is <code>[PostAppCenterApiV2JwtTokenErrorBody](semrush/errors/post_app_center_api_v2_jwt_token_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403 | <code>str</code> |
| anything unmapped | <code>[RawError](semrush/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## PartnerService

> Source: [PartnerService](semrush/apis/partner_service.py)

<details>
<summary><code>def post_apis_v4_app_center_v2_partner_viewer_status(*, body: ViewerStatusRequest | ViewerStatusRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ViewerStatusResponse, PostApisV4AppCenterV2PartnerViewerStatusErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves user status, related to the app (purchases, subscriptions)
Documentation

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.partner_service.with_raw_response.post_apis_v4_app_center_v2_partner_viewer_status()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ViewerStatusResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type PostApisV4AppCenterV2PartnerViewerStatusErrorBody
```

**Async**

```python
result = await async_client.partner_service.with_raw_response.post_apis_v4_app_center_v2_partner_viewer_status()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ViewerStatusResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type PostApisV4AppCenterV2PartnerViewerStatusErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[ViewerStatusRequest](semrush/models/viewer_status_request.py) \| [ViewerStatusRequestDict](semrush/models/viewer_status_request.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](semrush/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](semrush/core/results.py)&#91;[ViewerStatusResponse](semrush/models/viewer_status_response.py), [PostApisV4AppCenterV2PartnerViewerStatusErrorBody](semrush/errors/post_apis_v4_app_center_v2_partner_viewer_status_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ViewerStatusResponse](semrush/models/viewer_status_response.py)</code> -- OK

**On `Failure`**: `error` is <code>[PostApisV4AppCenterV2PartnerViewerStatusErrorBody](semrush/errors/post_apis_v4_app_center_v2_partner_viewer_status_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401 | <code>str</code> |
| anything unmapped | <code>[RawError](semrush/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

