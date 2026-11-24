# Reference

**Parsed** endpoints return the typed payload and raise `ApiError` on a documented non-2xx. For the raw endpoints, see [Raw API Reference](raw-api-reference.md).

> Source: [SemrushClient](semrush/client.py)

## HermesPartnerApi

> Source: [HermesPartnerApi](semrush/apis/hermes_partner_api.py)

<details>
<summary><code>def get_apis_v4_hermes_v0_event_by_id(id_: UUID, *, request_options: RequestOptionsOrDict | None = None) -> EventResponse</code></summary>

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
try:
    response = client.hermes_partner_api.get_apis_v4_hermes_v0_event_by_id(UUID("00000000-0000-0000-0000-000000000000"))
    # TODO: Handle 'response' of type EventResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetApisV4HermesV0EventByIdErrorBody
```

**Async**

```python
try:
    response = await async_client.hermes_partner_api.get_apis_v4_hermes_v0_event_by_id(
        UUID("00000000-0000-0000-0000-000000000000")
    )
    # TODO: Handle 'response' of type EventResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetApisV4HermesV0EventByIdErrorBody
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

**OnSuccess**: <code>[EventResponse](semrush/models/event_response.py)</code> -- OK

**OnError**: <code>[ApiError](semrush/core/exceptions.py)&#91;[GetApisV4HermesV0EventByIdErrorBody](semrush/errors/get_apis_v4_hermes_v0_event_by_id_error.py)&#93;</code>

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
<summary><code>def get_apis_v4_hermes_v0_subscriptions(*, request_options: RequestOptionsOrDict | None = None) -> AppSubscriptionsResponse</code></summary>

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
try:
    response = client.hermes_partner_api.get_apis_v4_hermes_v0_subscriptions()
    # TODO: Handle 'response' of type AppSubscriptionsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetApisV4HermesV0SubscriptionsErrorBody
```

**Async**

```python
try:
    response = await async_client.hermes_partner_api.get_apis_v4_hermes_v0_subscriptions()
    # TODO: Handle 'response' of type AppSubscriptionsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetApisV4HermesV0SubscriptionsErrorBody
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

**OnSuccess**: <code>[AppSubscriptionsResponse](semrush/models/app_subscriptions_response.py)</code> -- OK

**OnError**: <code>[ApiError](semrush/core/exceptions.py)&#91;[GetApisV4HermesV0SubscriptionsErrorBody](semrush/errors/get_apis_v4_hermes_v0_subscriptions_error.py)&#93;</code>

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
<summary><code>def get_apis_v4_hermes_v0_user_by_user_id_subscription_by_id(user_id: int, id_: int, *, request_options: RequestOptionsOrDict | None = None) -> AppUserSubscriptionStatusResponse</code></summary>

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
try:
    response = client.hermes_partner_api.get_apis_v4_hermes_v0_user_by_user_id_subscription_by_id(1, 1)
    # TODO: Handle 'response' of type AppUserSubscriptionStatusResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetApisV4HermesV0UserByUserIdSubscriptionByIdErrorBody
```

**Async**

```python
try:
    response = await async_client.hermes_partner_api.get_apis_v4_hermes_v0_user_by_user_id_subscription_by_id(1, 1)
    # TODO: Handle 'response' of type AppUserSubscriptionStatusResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetApisV4HermesV0UserByUserIdSubscriptionByIdErrorBody
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

**OnSuccess**: <code>[AppUserSubscriptionStatusResponse](semrush/models/app_user_subscription_status_response.py)</code> -- OK

**OnError**: <code>[ApiError](semrush/core/exceptions.py)&#91;[GetApisV4HermesV0UserByUserIdSubscriptionByIdErrorBody](semrush/errors/get_apis_v4_hermes_v0_user_by_user_id_subscription_by_id_error.py)&#93;</code>

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
<summary><code>def post_apis_v4_hermes_v0_event(*, body: CreateEventRequest | CreateEventRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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
try:
    client.hermes_partner_api.post_apis_v4_hermes_v0_event()
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PostApisV4HermesV0EventErrorBody
```

**Async**

```python
try:
    await async_client.hermes_partner_api.post_apis_v4_hermes_v0_event()
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PostApisV4HermesV0EventErrorBody
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

**OnSuccess**: No content

**OnError**: <code>[ApiError](semrush/core/exceptions.py)&#91;[PostApisV4HermesV0EventErrorBody](semrush/errors/post_apis_v4_hermes_v0_event_error.py)&#93;</code>

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
<summary><code>def post_app_center_api_v2_jwt_token(*, body: IssuerJwtRequest | IssuerJwtRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> IssuerJwtResponse</code></summary>

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
try:
    response = client.jwt_issuer.post_app_center_api_v2_jwt_token()
    # TODO: Handle 'response' of type IssuerJwtResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PostAppCenterApiV2JwtTokenErrorBody
```

**Async**

```python
try:
    response = await async_client.jwt_issuer.post_app_center_api_v2_jwt_token()
    # TODO: Handle 'response' of type IssuerJwtResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PostAppCenterApiV2JwtTokenErrorBody
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

**OnSuccess**: <code>[IssuerJwtResponse](semrush/models/issuer_jwt_response.py)</code> -- OK

**OnError**: <code>[ApiError](semrush/core/exceptions.py)&#91;[PostAppCenterApiV2JwtTokenErrorBody](semrush/errors/post_app_center_api_v2_jwt_token_error.py)&#93;</code>

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
<summary><code>def post_apis_v4_app_center_v2_partner_viewer_status(*, body: ViewerStatusRequest | ViewerStatusRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ViewerStatusResponse</code></summary>

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
try:
    response = client.partner_service.post_apis_v4_app_center_v2_partner_viewer_status()
    # TODO: Handle 'response' of type ViewerStatusResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PostApisV4AppCenterV2PartnerViewerStatusErrorBody
```

**Async**

```python
try:
    response = await async_client.partner_service.post_apis_v4_app_center_v2_partner_viewer_status()
    # TODO: Handle 'response' of type ViewerStatusResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PostApisV4AppCenterV2PartnerViewerStatusErrorBody
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

**OnSuccess**: <code>[ViewerStatusResponse](semrush/models/viewer_status_response.py)</code> -- OK

**OnError**: <code>[ApiError](semrush/core/exceptions.py)&#91;[PostApisV4AppCenterV2PartnerViewerStatusErrorBody](semrush/errors/post_apis_v4_app_center_v2_partner_viewer_status_error.py)&#93;</code>

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

