# Reference

**Parsed** endpoints return the typed payload and raise `ApiError` on a documented non-2xx. For the raw endpoints, see [Raw API Reference](raw-api-reference.md).

> Source: [ClixClient](clix/client.py)

<details>
<summary><code>def clix_external_service_create_events(body: V1CreateEventsRequest | V1CreateEventsRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> V1CreateEventsResponse</code></summary>

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
try:
    response = client.clix_external_service_create_events(V1CreateEventsRequest())
    # TODO: Handle 'response' of type V1CreateEventsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    response = await async_client.clix_external_service_create_events(V1CreateEventsRequest())
    # TODO: Handle 'response' of type V1CreateEventsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
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

**OnSuccess**: <code>[V1CreateEventsResponse](clix/models/v1_create_events_response.py)</code> -- A successful response.

**OnError**: <code>[ApiError](clix/core/exceptions.py)&#91;[RawError](clix/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def clix_external_service_create_or_update_devices(body: V1CreateOrUpdateDevicesRequest | V1CreateOrUpdateDevicesRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> V1CreateOrUpdateDevicesResponse</code></summary>

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
try:
    response = client.clix_external_service_create_or_update_devices(V1CreateOrUpdateDevicesRequest())
    # TODO: Handle 'response' of type V1CreateOrUpdateDevicesResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    response = await async_client.clix_external_service_create_or_update_devices(V1CreateOrUpdateDevicesRequest())
    # TODO: Handle 'response' of type V1CreateOrUpdateDevicesResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
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

**OnSuccess**: <code>[V1CreateOrUpdateDevicesResponse](clix/models/v1_create_or_update_devices_response.py)</code> -- A successful response.

**OnError**: <code>[ApiError](clix/core/exceptions.py)&#91;[RawError](clix/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def clix_external_service_create_or_update_users_properties_by_device_id(device_id: str, body: ClixExternalServiceCreateOrUpdateUsersPropertiesByDeviceIdBody | ClixExternalServiceCreateOrUpdateUsersPropertiesByDeviceIdBodyDict, *, request_options: RequestOptionsOrDict | None = None) -> V1CreateOrUpdateUsersPropertiesByDeviceIdResponse</code></summary>

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
try:
    response = client.clix_external_service_create_or_update_users_properties_by_device_id(
        "some example string", ClixExternalServiceCreateOrUpdateUsersPropertiesByDeviceIdBody()
    )
    # TODO: Handle 'response' of type V1CreateOrUpdateUsersPropertiesByDeviceIdResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    response = await async_client.clix_external_service_create_or_update_users_properties_by_device_id(
        "some example string", ClixExternalServiceCreateOrUpdateUsersPropertiesByDeviceIdBody()
    )
    # TODO: Handle 'response' of type V1CreateOrUpdateUsersPropertiesByDeviceIdResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
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

**OnSuccess**: <code>[V1CreateOrUpdateUsersPropertiesByDeviceIdResponse](clix/models/v1_create_or_update_users_properties_by_device_id_response.py)</code> -- A successful response.

**OnError**: <code>[ApiError](clix/core/exceptions.py)&#91;[RawError](clix/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def clix_external_service_create_user(body: V1CreateUserRequest | V1CreateUserRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> V1CreateUserResponse</code></summary>

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
try:
    response = client.clix_external_service_create_user(V1CreateUserRequest(project_user_id="some example string"))
    # TODO: Handle 'response' of type V1CreateUserResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ClixExternalServiceCreateUserErrorBody
```

**Async**

```python
try:
    response = await async_client.clix_external_service_create_user(
        V1CreateUserRequest(project_user_id="some example string")
    )
    # TODO: Handle 'response' of type V1CreateUserResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ClixExternalServiceCreateUserErrorBody
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

**OnSuccess**: <code>[V1CreateUserResponse](clix/models/v1_create_user_response.py)</code> -- User created successfully

**OnError**: <code>[ApiError](clix/core/exceptions.py)&#91;[ClixExternalServiceCreateUserErrorBody](clix/errors/clix_external_service_create_user_error.py)&#93;</code>

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
<summary><code>def clix_external_service_delete_user(project_user_id: str, *, request_options: RequestOptionsOrDict | None = None) -> Any</code></summary>

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
try:
    response = client.clix_external_service_delete_user("some example string")
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ClixExternalServiceDeleteUserErrorBody
```

**Async**

```python
try:
    response = await async_client.clix_external_service_delete_user("some example string")
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ClixExternalServiceDeleteUserErrorBody
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

**OnSuccess**: <code>Any</code> -- User deleted successfully

**OnError**: <code>[ApiError](clix/core/exceptions.py)&#91;[ClixExternalServiceDeleteUserErrorBody](clix/errors/clix_external_service_delete_user_error.py)&#93;</code>

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
<summary><code>def clix_external_service_health_check(*, request_options: RequestOptionsOrDict | None = None) -> Clixexternalv1HealthCheckResponse</code></summary>

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
try:
    response = client.clix_external_service_health_check()
    # TODO: Handle 'response' of type Clixexternalv1HealthCheckResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    response = await async_client.clix_external_service_health_check()
    # TODO: Handle 'response' of type Clixexternalv1HealthCheckResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
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

**OnSuccess**: <code>[Clixexternalv1HealthCheckResponse](clix/models/clixexternalv1_health_check_response.py)</code> -- A successful response.

**OnError**: <code>[ApiError](clix/core/exceptions.py)&#91;[RawError](clix/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def clix_external_service_send_push_notifications(body: V1SendPushNotificationsRequest | V1SendPushNotificationsRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> V1SendPushNotificationsResponse</code></summary>

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
try:
    response = client.clix_external_service_send_push_notifications(V1SendPushNotificationsRequest())
    # TODO: Handle 'response' of type V1SendPushNotificationsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ClixExternalServiceSendPushNotificationsErrorBody
```

**Async**

```python
try:
    response = await async_client.clix_external_service_send_push_notifications(V1SendPushNotificationsRequest())
    # TODO: Handle 'response' of type V1SendPushNotificationsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ClixExternalServiceSendPushNotificationsErrorBody
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

**OnSuccess**: <code>[V1SendPushNotificationsResponse](clix/models/v1_send_push_notifications_response.py)</code> -- A successful response containing the delivery results for each push notification.

**OnError**: <code>[ApiError](clix/core/exceptions.py)&#91;[ClixExternalServiceSendPushNotificationsErrorBody](clix/errors/clix_external_service_send_push_notifications_error.py)&#93;</code>

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
<summary><code>def clix_external_service_set_project_user_id_for_device(device_id: str, body: ClixExternalServiceSetProjectUserIdForDeviceBody | ClixExternalServiceSetProjectUserIdForDeviceBodyDict, *, request_options: RequestOptionsOrDict | None = None) -> V1SetProjectUserIdForDeviceResponse</code></summary>

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
try:
    response = client.clix_external_service_set_project_user_id_for_device(
        "some example string", ClixExternalServiceSetProjectUserIdForDeviceBody()
    )
    # TODO: Handle 'response' of type V1SetProjectUserIdForDeviceResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    response = await async_client.clix_external_service_set_project_user_id_for_device(
        "some example string", ClixExternalServiceSetProjectUserIdForDeviceBody()
    )
    # TODO: Handle 'response' of type V1SetProjectUserIdForDeviceResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
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

**OnSuccess**: <code>[V1SetProjectUserIdForDeviceResponse](clix/models/v1_set_project_user_id_for_device_response.py)</code> -- A successful response.

**OnError**: <code>[ApiError](clix/core/exceptions.py)&#91;[RawError](clix/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def clix_external_service_start_live_activities(body: V1StartLiveActivitiesRequest | V1StartLiveActivitiesRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> V1StartLiveActivitiesResponse</code></summary>

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
try:
    response = client.clix_external_service_start_live_activities(V1StartLiveActivitiesRequest())
    # TODO: Handle 'response' of type V1StartLiveActivitiesResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ClixExternalServiceStartLiveActivitiesErrorBody
```

**Async**

```python
try:
    response = await async_client.clix_external_service_start_live_activities(V1StartLiveActivitiesRequest())
    # TODO: Handle 'response' of type V1StartLiveActivitiesResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ClixExternalServiceStartLiveActivitiesErrorBody
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

**OnSuccess**: <code>[V1StartLiveActivitiesResponse](clix/models/v1_start_live_activities_response.py)</code> -- A successful response containing the delivery results for each live activity.

**OnError**: <code>[ApiError](clix/core/exceptions.py)&#91;[ClixExternalServiceStartLiveActivitiesErrorBody](clix/errors/clix_external_service_start_live_activities_error.py)&#93;</code>

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
<summary><code>def clix_external_service_trigger_campaign(campaign_id: str, *, body: V1TriggerCampaignRequest | V1TriggerCampaignRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> V1TriggerCampaignResponse</code></summary>

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
try:
    response = client.clix_external_service_trigger_campaign("some example string")
    # TODO: Handle 'response' of type V1TriggerCampaignResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ClixExternalServiceTriggerCampaignErrorBody
```

**Async**

```python
try:
    response = await async_client.clix_external_service_trigger_campaign("some example string")
    # TODO: Handle 'response' of type V1TriggerCampaignResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ClixExternalServiceTriggerCampaignErrorBody
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

**OnSuccess**: <code>[V1TriggerCampaignResponse](clix/models/v1_trigger_campaign_response.py)</code> -- Campaign triggered successfully

**OnError**: <code>[ApiError](clix/core/exceptions.py)&#91;[ClixExternalServiceTriggerCampaignErrorBody](clix/errors/clix_external_service_trigger_campaign_error.py)&#93;</code>

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
<summary><code>def clix_external_service_update_user(project_user_id: str, body: V1UpdateUserRequest | V1UpdateUserRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> V1UpdateUserResponse</code></summary>

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
try:
    response = client.clix_external_service_update_user("some example string", V1UpdateUserRequest())
    # TODO: Handle 'response' of type V1UpdateUserResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ClixExternalServiceUpdateUserErrorBody
```

**Async**

```python
try:
    response = await async_client.clix_external_service_update_user("some example string", V1UpdateUserRequest())
    # TODO: Handle 'response' of type V1UpdateUserResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ClixExternalServiceUpdateUserErrorBody
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

**OnSuccess**: <code>[V1UpdateUserResponse](clix/models/v1_update_user_response.py)</code> -- User updated successfully

**OnError**: <code>[ApiError](clix/core/exceptions.py)&#91;[ClixExternalServiceUpdateUserErrorBody](clix/errors/clix_external_service_update_user_error.py)&#93;</code>

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

