# Reference

Every operation below is shown in its throwing form. On an error status it throws `ApiException<TError>` — the status code, headers, content type and the operation's error type, `RawError` (the raw body) when the spec declares none — and where an operation offers an `…AsResult` sibling, that sibling returns `ApiResult<TResponse, TError>` instead. A request that produces no usable response surfaces as `SdkConnectionException` or `SdkTimeoutException`, a body that does not match the documented response type as `ResponseDeserializationException`, and a required credential that is not configured, or one that cannot be applied, as `AuthSchemeException`; all of them derive from `SdkException` and name the failed call. See [README → Error Handling](README.md#error-handling).

> Source: [ClixClient](src/Clix/ClixClient.cs)

<details>
<summary><code>Task&lt;V1CreateEventsResponse&gt; ClixExternalServiceCreateEvents(ClixExternalServiceCreateEventsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.ClixExternalServiceCreateEvents(new ClixExternalServiceCreateEventsRequest
    {
        Body = new V1CreateEventsRequest(),
    });
    // TODO: Handle 'response' of type V1CreateEventsResponse
}
catch (ApiException<RawError> ex)
{
    // TODO: Handle 'ex.Error' of type RawError
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ClixExternalServiceCreateEventsRequest](src/Clix/Requests/ClixExternalServiceCreateEventsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1CreateEventsResponse](src/Clix/Models/V1CreateEventsResponse.cs)</code>

**OnError**: <code>[ApiException](src/Clix/Core/Exceptions/ApiException.cs)&lt;[RawError](src/Clix/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;V1CreateOrUpdateDevicesResponse&gt; ClixExternalServiceCreateOrUpdateDevices(ClixExternalServiceCreateOrUpdateDevicesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.ClixExternalServiceCreateOrUpdateDevices(
        new ClixExternalServiceCreateOrUpdateDevicesRequest { Body = new V1CreateOrUpdateDevicesRequest() });
    // TODO: Handle 'response' of type V1CreateOrUpdateDevicesResponse
}
catch (ApiException<RawError> ex)
{
    // TODO: Handle 'ex.Error' of type RawError
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ClixExternalServiceCreateOrUpdateDevicesRequest](src/Clix/Requests/ClixExternalServiceCreateOrUpdateDevicesRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1CreateOrUpdateDevicesResponse](src/Clix/Models/V1CreateOrUpdateDevicesResponse.cs)</code>

**OnError**: <code>[ApiException](src/Clix/Core/Exceptions/ApiException.cs)&lt;[RawError](src/Clix/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;V1CreateOrUpdateUsersPropertiesByDeviceIdResponse&gt; ClixExternalServiceCreateOrUpdateUsersPropertiesByDeviceId(ClixExternalServiceCreateOrUpdateUsersPropertiesByDeviceIdRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.ClixExternalServiceCreateOrUpdateUsersPropertiesByDeviceId(
        new ClixExternalServiceCreateOrUpdateUsersPropertiesByDeviceIdRequest
        {
            DeviceId = "some example string",
            Body = new ClixExternalServiceCreateOrUpdateUsersPropertiesByDeviceIdBody(),
        });
    // TODO: Handle 'response' of type V1CreateOrUpdateUsersPropertiesByDeviceIdResponse
}
catch (ApiException<RawError> ex)
{
    // TODO: Handle 'ex.Error' of type RawError
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ClixExternalServiceCreateOrUpdateUsersPropertiesByDeviceIdRequest](src/Clix/Requests/ClixExternalServiceCreateOrUpdateUsersPropertiesByDeviceIdRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1CreateOrUpdateUsersPropertiesByDeviceIdResponse](src/Clix/Models/V1CreateOrUpdateUsersPropertiesByDeviceIdResponse.cs)</code>

**OnError**: <code>[ApiException](src/Clix/Core/Exceptions/ApiException.cs)&lt;[RawError](src/Clix/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;V1CreateUserResponse&gt; ClixExternalServiceCreateUser(ClixExternalServiceCreateUserRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.ClixExternalServiceCreateUser(new ClixExternalServiceCreateUserRequest
    {
        Body = new V1CreateUserRequest { ProjectUserId = "some example string" },
    });
    // TODO: Handle 'response' of type V1CreateUserResponse
}
catch (ApiException<ClixExternalServiceCreateUserError> ex)
{
    if (ex.Error.TryGetString(out var error))
    {
        // TODO: Handle 'error' of type string
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ClixExternalServiceCreateUserRequest](src/Clix/Requests/ClixExternalServiceCreateUserRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1CreateUserResponse](src/Clix/Models/V1CreateUserResponse.cs)</code>

**OnError**: <code>[ApiException](src/Clix/Core/Exceptions/ApiException.cs)&lt;[ClixExternalServiceCreateUserError](src/Clix/Errors/ClixExternalServiceCreateUserError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;object&gt; ClixExternalServiceDeleteUser(ClixExternalServiceDeleteUserRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.ClixExternalServiceDeleteUser(new ClixExternalServiceDeleteUserRequest
    {
        ProjectUserId = "some example string",
    });
    // TODO: Handle 'response' of type object
}
catch (ApiException<ClixExternalServiceDeleteUserError> ex)
{
    if (ex.Error.TryGetString(out var error))
    {
        // TODO: Handle 'error' of type string
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ClixExternalServiceDeleteUserRequest](src/Clix/Requests/ClixExternalServiceDeleteUserRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>object</code>

**OnError**: <code>[ApiException](src/Clix/Core/Exceptions/ApiException.cs)&lt;[ClixExternalServiceDeleteUserError](src/Clix/Errors/ClixExternalServiceDeleteUserError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Clixexternalv1HealthCheckResponse&gt; ClixExternalServiceHealthCheck(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.ClixExternalServiceHealthCheck();
    // TODO: Handle 'response' of type Clixexternalv1HealthCheckResponse
}
catch (ApiException<RawError> ex)
{
    // TODO: Handle 'ex.Error' of type RawError
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Clixexternalv1HealthCheckResponse](src/Clix/Models/Clixexternalv1HealthCheckResponse.cs)</code>

**OnError**: <code>[ApiException](src/Clix/Core/Exceptions/ApiException.cs)&lt;[RawError](src/Clix/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;V1SendPushNotificationsResponse&gt; ClixExternalServiceSendPushNotifications(ClixExternalServiceSendPushNotificationsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.ClixExternalServiceSendPushNotifications(
        new ClixExternalServiceSendPushNotificationsRequest { Body = new V1SendPushNotificationsRequest() });
    // TODO: Handle 'response' of type V1SendPushNotificationsResponse
}
catch (ApiException<ClixExternalServiceSendPushNotificationsError> ex)
{
    if (ex.Error.TryGetString(out var error))
    {
        // TODO: Handle 'error' of type string
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ClixExternalServiceSendPushNotificationsRequest](src/Clix/Requests/ClixExternalServiceSendPushNotificationsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1SendPushNotificationsResponse](src/Clix/Models/V1SendPushNotificationsResponse.cs)</code>

**OnError**: <code>[ApiException](src/Clix/Core/Exceptions/ApiException.cs)&lt;[ClixExternalServiceSendPushNotificationsError](src/Clix/Errors/ClixExternalServiceSendPushNotificationsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;V1SetProjectUserIdForDeviceResponse&gt; ClixExternalServiceSetProjectUserIdForDevice(ClixExternalServiceSetProjectUserIdForDeviceRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.ClixExternalServiceSetProjectUserIdForDevice(
        new ClixExternalServiceSetProjectUserIdForDeviceRequest
        {
            DeviceId = "some example string",
            Body = new ClixExternalServiceSetProjectUserIdForDeviceBody(),
        });
    // TODO: Handle 'response' of type V1SetProjectUserIdForDeviceResponse
}
catch (ApiException<RawError> ex)
{
    // TODO: Handle 'ex.Error' of type RawError
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ClixExternalServiceSetProjectUserIdForDeviceRequest](src/Clix/Requests/ClixExternalServiceSetProjectUserIdForDeviceRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1SetProjectUserIdForDeviceResponse](src/Clix/Models/V1SetProjectUserIdForDeviceResponse.cs)</code>

**OnError**: <code>[ApiException](src/Clix/Core/Exceptions/ApiException.cs)&lt;[RawError](src/Clix/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;V1StartLiveActivitiesResponse&gt; ClixExternalServiceStartLiveActivities(ClixExternalServiceStartLiveActivitiesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.ClixExternalServiceStartLiveActivities(new ClixExternalServiceStartLiveActivitiesRequest
    {
        Body = new V1StartLiveActivitiesRequest(),
    });
    // TODO: Handle 'response' of type V1StartLiveActivitiesResponse
}
catch (ApiException<ClixExternalServiceStartLiveActivitiesError> ex)
{
    if (ex.Error.TryGetString(out var error))
    {
        // TODO: Handle 'error' of type string
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ClixExternalServiceStartLiveActivitiesRequest](src/Clix/Requests/ClixExternalServiceStartLiveActivitiesRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1StartLiveActivitiesResponse](src/Clix/Models/V1StartLiveActivitiesResponse.cs)</code>

**OnError**: <code>[ApiException](src/Clix/Core/Exceptions/ApiException.cs)&lt;[ClixExternalServiceStartLiveActivitiesError](src/Clix/Errors/ClixExternalServiceStartLiveActivitiesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;V1TriggerCampaignResponse&gt; ClixExternalServiceTriggerCampaign(ClixExternalServiceTriggerCampaignRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.ClixExternalServiceTriggerCampaign(new ClixExternalServiceTriggerCampaignRequest
    {
        CampaignId = "some example string",
    });
    // TODO: Handle 'response' of type V1TriggerCampaignResponse
}
catch (ApiException<ClixExternalServiceTriggerCampaignError> ex)
{
    if (ex.Error.TryGetString(out var error))
    {
        // TODO: Handle 'error' of type string
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ClixExternalServiceTriggerCampaignRequest](src/Clix/Requests/ClixExternalServiceTriggerCampaignRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1TriggerCampaignResponse](src/Clix/Models/V1TriggerCampaignResponse.cs)</code>

**OnError**: <code>[ApiException](src/Clix/Core/Exceptions/ApiException.cs)&lt;[ClixExternalServiceTriggerCampaignError](src/Clix/Errors/ClixExternalServiceTriggerCampaignError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;V1UpdateUserResponse&gt; ClixExternalServiceUpdateUser(ClixExternalServiceUpdateUserRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.ClixExternalServiceUpdateUser(new ClixExternalServiceUpdateUserRequest
    {
        ProjectUserId = "some example string",
        Body = new V1UpdateUserRequest(),
    });
    // TODO: Handle 'response' of type V1UpdateUserResponse
}
catch (ApiException<ClixExternalServiceUpdateUserError> ex)
{
    if (ex.Error.TryGetString(out var error))
    {
        // TODO: Handle 'error' of type string
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ClixExternalServiceUpdateUserRequest](src/Clix/Requests/ClixExternalServiceUpdateUserRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1UpdateUserResponse](src/Clix/Models/V1UpdateUserResponse.cs)</code>

**OnError**: <code>[ApiException](src/Clix/Core/Exceptions/ApiException.cs)&lt;[ClixExternalServiceUpdateUserError](src/Clix/Errors/ClixExternalServiceUpdateUserError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

