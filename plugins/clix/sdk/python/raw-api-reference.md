# Raw Reference

**Raw** endpoints, reached through `with_raw_response`, return `ApiResult[T, E]` and never raise for an API error. For the parsed endpoints, see [API Reference](api-reference.md).

> Source: [ClixClient](clix/client.py)

<details>
<summary><code>def clix_external_service_create_events(body: V1CreateEventsRequest | V1CreateEventsRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1CreateEventsResponse, RawError]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Send a `POST` request.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.with_raw_response.clix_external_service_create_events(V1CreateEventsRequest())
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1CreateEventsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.with_raw_response.clix_external_service_create_events(V1CreateEventsRequest())
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1CreateEventsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[V1CreateEventsRequest](clix/models/v1_create_events_request.py) \| [V1CreateEventsRequestDict](clix/models/v1_create_events_request.py)</code> | Request body containing the event details. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](clix/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](clix/core/results.py)&#91;[V1CreateEventsResponse](clix/models/v1_create_events_response.py), [RawError](clix/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1CreateEventsResponse](clix/models/v1_create_events_response.py)</code> -- A successful response.

**On `Failure`**: `error` is <code>[RawError](clix/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def clix_external_service_create_or_update_devices(body: V1CreateOrUpdateDevicesRequest | V1CreateOrUpdateDevicesRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1CreateOrUpdateDevicesResponse, RawError]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Send a `POST` request.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.with_raw_response.clix_external_service_create_or_update_devices(V1CreateOrUpdateDevicesRequest())
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1CreateOrUpdateDevicesResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.with_raw_response.clix_external_service_create_or_update_devices(
    V1CreateOrUpdateDevicesRequest()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1CreateOrUpdateDevicesResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[V1CreateOrUpdateDevicesRequest](clix/models/v1_create_or_update_devices_request.py) \| [V1CreateOrUpdateDevicesRequestDict](clix/models/v1_create_or_update_devices_request.py)</code> | Request body containing device information. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](clix/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](clix/core/results.py)&#91;[V1CreateOrUpdateDevicesResponse](clix/models/v1_create_or_update_devices_response.py), [RawError](clix/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1CreateOrUpdateDevicesResponse](clix/models/v1_create_or_update_devices_response.py)</code> -- A successful response.

**On `Failure`**: `error` is <code>[RawError](clix/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def clix_external_service_create_or_update_users_properties_by_device_id(device_id: str, body: ClixExternalServiceCreateOrUpdateUsersPropertiesByDeviceIdBody | ClixExternalServiceCreateOrUpdateUsersPropertiesByDeviceIdBodyDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1CreateOrUpdateUsersPropertiesByDeviceIdResponse, RawError]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Send a `POST` request.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.with_raw_response.clix_external_service_create_or_update_users_properties_by_device_id(
    "some example string", ClixExternalServiceCreateOrUpdateUsersPropertiesByDeviceIdBody()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1CreateOrUpdateUsersPropertiesByDeviceIdResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.with_raw_response.clix_external_service_create_or_update_users_properties_by_device_id(
    "some example string", ClixExternalServiceCreateOrUpdateUsersPropertiesByDeviceIdBody()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1CreateOrUpdateUsersPropertiesByDeviceIdResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>device_id</code> | <code>str</code> | Value sent with the request. |
| <code>body</code> | <code>[ClixExternalServiceCreateOrUpdateUsersPropertiesByDeviceIdBody](clix/models/clix_external_service_create_or_update_users_properties_by_device_id_body.py) \| [ClixExternalServiceCreateOrUpdateUsersPropertiesByDeviceIdBodyDict](clix/models/clix_external_service_create_or_update_users_properties_by_device_id_body.py)</code> | Request body containing user properties to create or update. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](clix/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](clix/core/results.py)&#91;[V1CreateOrUpdateUsersPropertiesByDeviceIdResponse](clix/models/v1_create_or_update_users_properties_by_device_id_response.py), [RawError](clix/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1CreateOrUpdateUsersPropertiesByDeviceIdResponse](clix/models/v1_create_or_update_users_properties_by_device_id_response.py)</code> -- A successful response.

**On `Failure`**: `error` is <code>[RawError](clix/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def clix_external_service_create_user(body: V1CreateUserRequest | V1CreateUserRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1CreateUserResponse, ClixExternalServiceCreateUserErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a new user with the specified project_user_id

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.with_raw_response.clix_external_service_create_user(
    V1CreateUserRequest(project_user_id="some example string")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1CreateUserResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ClixExternalServiceCreateUserErrorBody
```

**Async**

```python
result = await async_client.with_raw_response.clix_external_service_create_user(
    V1CreateUserRequest(project_user_id="some example string")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1CreateUserResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ClixExternalServiceCreateUserErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[V1CreateUserRequest](clix/models/v1_create_user_request.py) \| [V1CreateUserRequestDict](clix/models/v1_create_user_request.py)</code> | User data to create |
| <code>request_options</code> | <code>[RequestOptionsOrDict](clix/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](clix/core/results.py)&#91;[V1CreateUserResponse](clix/models/v1_create_user_response.py), [ClixExternalServiceCreateUserErrorBody](clix/errors/clix_external_service_create_user_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1CreateUserResponse](clix/models/v1_create_user_response.py)</code> -- User created successfully

**On `Failure`**: `error` is <code>[ClixExternalServiceCreateUserErrorBody](clix/errors/clix_external_service_create_user_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>str</code> |
| anything unmapped | <code>[RawError](clix/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def clix_external_service_delete_user(project_user_id: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Any, ClixExternalServiceDeleteUserErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Permanently deletes a user and all associated data

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.with_raw_response.clix_external_service_delete_user("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Any
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ClixExternalServiceDeleteUserErrorBody
```

**Async**

```python
result = await async_client.with_raw_response.clix_external_service_delete_user("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Any
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ClixExternalServiceDeleteUserErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>project_user_id</code> | <code>str</code> | The unique identifier of the user to delete |
| <code>request_options</code> | <code>[RequestOptionsOrDict](clix/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](clix/core/results.py)&#91;Any, [ClixExternalServiceDeleteUserErrorBody](clix/errors/clix_external_service_delete_user_error.py)&#93;</code>

**On `Success`**: `payload` is <code>Any</code> -- User deleted successfully

**On `Failure`**: `error` is <code>[ClixExternalServiceDeleteUserErrorBody](clix/errors/clix_external_service_delete_user_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>str</code> |
| anything unmapped | <code>[RawError](clix/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def clix_external_service_health_check(*, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Clixexternalv1HealthCheckResponse, RawError]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Send a `GET` request.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.with_raw_response.clix_external_service_health_check()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Clixexternalv1HealthCheckResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.with_raw_response.clix_external_service_health_check()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Clixexternalv1HealthCheckResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>request_options</code> | <code>[RequestOptionsOrDict](clix/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](clix/core/results.py)&#91;[Clixexternalv1HealthCheckResponse](clix/models/clixexternalv1_health_check_response.py), [RawError](clix/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>[Clixexternalv1HealthCheckResponse](clix/models/clixexternalv1_health_check_response.py)</code> -- A successful response.

**On `Failure`**: `error` is <code>[RawError](clix/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def clix_external_service_send_push_notifications(body: V1SendPushNotificationsRequest | V1SendPushNotificationsRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1SendPushNotificationsResponse, ClixExternalServiceSendPushNotificationsErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This endpoint sends push notifications to one or more user devices.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.with_raw_response.clix_external_service_send_push_notifications(V1SendPushNotificationsRequest())
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1SendPushNotificationsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ClixExternalServiceSendPushNotificationsErrorBody
```

**Async**

```python
result = await async_client.with_raw_response.clix_external_service_send_push_notifications(
    V1SendPushNotificationsRequest()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1SendPushNotificationsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ClixExternalServiceSendPushNotificationsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[V1SendPushNotificationsRequest](clix/models/v1_send_push_notifications_request.py) \| [V1SendPushNotificationsRequestDict](clix/models/v1_send_push_notifications_request.py)</code> | Request body containing the push notifications to send. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](clix/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](clix/core/results.py)&#91;[V1SendPushNotificationsResponse](clix/models/v1_send_push_notifications_response.py), [ClixExternalServiceSendPushNotificationsErrorBody](clix/errors/clix_external_service_send_push_notifications_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1SendPushNotificationsResponse](clix/models/v1_send_push_notifications_response.py)</code> -- A successful response containing the delivery results for each push notification.

**On `Failure`**: `error` is <code>[ClixExternalServiceSendPushNotificationsErrorBody](clix/errors/clix_external_service_send_push_notifications_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>str</code> |
| anything unmapped | <code>[RawError](clix/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def clix_external_service_set_project_user_id_for_device(device_id: str, body: ClixExternalServiceSetProjectUserIdForDeviceBody | ClixExternalServiceSetProjectUserIdForDeviceBodyDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1SetProjectUserIdForDeviceResponse, RawError]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Send a `POST` request.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.with_raw_response.clix_external_service_set_project_user_id_for_device(
    "some example string", ClixExternalServiceSetProjectUserIdForDeviceBody()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1SetProjectUserIdForDeviceResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.with_raw_response.clix_external_service_set_project_user_id_for_device(
    "some example string", ClixExternalServiceSetProjectUserIdForDeviceBody()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1SetProjectUserIdForDeviceResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>device_id</code> | <code>str</code> | Value sent with the request. |
| <code>body</code> | <code>[ClixExternalServiceSetProjectUserIdForDeviceBody](clix/models/clix_external_service_set_project_user_id_for_device_body.py) \| [ClixExternalServiceSetProjectUserIdForDeviceBodyDict](clix/models/clix_external_service_set_project_user_id_for_device_body.py)</code> | Request body containing the project user ID to set for the device. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](clix/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](clix/core/results.py)&#91;[V1SetProjectUserIdForDeviceResponse](clix/models/v1_set_project_user_id_for_device_response.py), [RawError](clix/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1SetProjectUserIdForDeviceResponse](clix/models/v1_set_project_user_id_for_device_response.py)</code> -- A successful response.

**On `Failure`**: `error` is <code>[RawError](clix/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def clix_external_service_start_live_activities(body: V1StartLiveActivitiesRequest | V1StartLiveActivitiesRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1StartLiveActivitiesResponse, ClixExternalServiceStartLiveActivitiesErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This endpoint starts iOS Live Activities on one or more user devices using Push to Start.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.with_raw_response.clix_external_service_start_live_activities(V1StartLiveActivitiesRequest())
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1StartLiveActivitiesResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ClixExternalServiceStartLiveActivitiesErrorBody
```

**Async**

```python
result = await async_client.with_raw_response.clix_external_service_start_live_activities(
    V1StartLiveActivitiesRequest()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1StartLiveActivitiesResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ClixExternalServiceStartLiveActivitiesErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[V1StartLiveActivitiesRequest](clix/models/v1_start_live_activities_request.py) \| [V1StartLiveActivitiesRequestDict](clix/models/v1_start_live_activities_request.py)</code> | Request body containing the live activities to start. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](clix/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](clix/core/results.py)&#91;[V1StartLiveActivitiesResponse](clix/models/v1_start_live_activities_response.py), [ClixExternalServiceStartLiveActivitiesErrorBody](clix/errors/clix_external_service_start_live_activities_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1StartLiveActivitiesResponse](clix/models/v1_start_live_activities_response.py)</code> -- A successful response containing the delivery results for each live activity.

**On `Failure`**: `error` is <code>[ClixExternalServiceStartLiveActivitiesErrorBody](clix/errors/clix_external_service_start_live_activities_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>str</code> |
| anything unmapped | <code>[RawError](clix/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def clix_external_service_trigger_campaign(campaign_id: str, *, body: V1TriggerCampaignRequest | V1TriggerCampaignRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1TriggerCampaignResponse, ClixExternalServiceTriggerCampaignErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Triggers an API-triggered campaign to send messages to a specific audience

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.with_raw_response.clix_external_service_trigger_campaign("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1TriggerCampaignResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ClixExternalServiceTriggerCampaignErrorBody
```

**Async**

```python
result = await async_client.with_raw_response.clix_external_service_trigger_campaign("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1TriggerCampaignResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ClixExternalServiceTriggerCampaignErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>campaign_id</code> | <code>str</code> | The unique identifier of the campaign to trigger |
| <code>body</code> | <code>[V1TriggerCampaignRequest](clix/models/v1_trigger_campaign_request.py) \| [V1TriggerCampaignRequestDict](clix/models/v1_trigger_campaign_request.py) \| None</code> | Campaign trigger configuration<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](clix/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](clix/core/results.py)&#91;[V1TriggerCampaignResponse](clix/models/v1_trigger_campaign_response.py), [ClixExternalServiceTriggerCampaignErrorBody](clix/errors/clix_external_service_trigger_campaign_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1TriggerCampaignResponse](clix/models/v1_trigger_campaign_response.py)</code> -- Campaign triggered successfully

**On `Failure`**: `error` is <code>[ClixExternalServiceTriggerCampaignErrorBody](clix/errors/clix_external_service_trigger_campaign_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>str</code> |
| anything unmapped | <code>[RawError](clix/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def clix_external_service_update_user(project_user_id: str, body: V1UpdateUserRequest | V1UpdateUserRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1UpdateUserResponse, ClixExternalServiceUpdateUserErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates user properties

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.with_raw_response.clix_external_service_update_user("some example string", V1UpdateUserRequest())
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1UpdateUserResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ClixExternalServiceUpdateUserErrorBody
```

**Async**

```python
result = await async_client.with_raw_response.clix_external_service_update_user(
    "some example string", V1UpdateUserRequest()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1UpdateUserResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ClixExternalServiceUpdateUserErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>project_user_id</code> | <code>str</code> | The unique identifier of the user to update |
| <code>body</code> | <code>[V1UpdateUserRequest](clix/models/v1_update_user_request.py) \| [V1UpdateUserRequestDict](clix/models/v1_update_user_request.py)</code> | User data to update |
| <code>request_options</code> | <code>[RequestOptionsOrDict](clix/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](clix/core/results.py)&#91;[V1UpdateUserResponse](clix/models/v1_update_user_response.py), [ClixExternalServiceUpdateUserErrorBody](clix/errors/clix_external_service_update_user_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1UpdateUserResponse](clix/models/v1_update_user_response.py)</code> -- User updated successfully

**On `Failure`**: `error` is <code>[ClixExternalServiceUpdateUserErrorBody](clix/errors/clix_external_service_update_user_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>str</code> |
| 404 | <code>[RawError](clix/core/results.py)</code> |
| anything unmapped | <code>[RawError](clix/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

