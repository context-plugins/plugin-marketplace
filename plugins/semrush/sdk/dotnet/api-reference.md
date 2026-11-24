# Reference

Every operation below is shown in its throwing form. On an error status it throws `ApiException<TError>` — the status code, headers, content type and the operation's error type, `RawError` (the raw body) when the spec declares none — and where an operation offers an `…AsResult` sibling, that sibling returns `ApiResult<TResponse, TError>` instead. A request that produces no usable response surfaces as `SdkConnectionException` or `SdkTimeoutException`, a body that does not match the documented response type as `ResponseDeserializationException`, and a required credential that is not configured, or one that cannot be applied, as `AuthSchemeException`; all of them derive from `SdkException` and name the failed call. See [README → Error Handling](README.md#error-handling).

> Source: [SemrushClient](src/Semrush/SemrushClient.cs)

## HermesPartnerApi

> Source: [HermesPartnerApi](src/Semrush/Api/HermesPartnerApi.cs)

<details>
<summary><code>Task&lt;EventResponse&gt; GetApisV4HermesV0EventById(GetApisV4HermesV0EventByIdRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.HermesPartnerApi.GetApisV4HermesV0EventById(new GetApisV4HermesV0EventByIdRequest
    {
        Id = Guid.Parse("00000000-0000-0000-0000-000000000000"),
    });
    // TODO: Handle 'response' of type EventResponse
}
catch (ApiException<GetApisV4HermesV0EventByIdError> ex)
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

<code>[GetApisV4HermesV0EventByIdRequest](src/Semrush/Requests/HermesPartnerApi/GetApisV4HermesV0EventByIdRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[EventResponse](src/Semrush/Models/EventResponse.cs)</code>

**OnError**: <code>[ApiException](src/Semrush/Core/Exceptions/ApiException.cs)&lt;[GetApisV4HermesV0EventByIdError](src/Semrush/Errors/GetApisV4HermesV0EventByIdError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;AppSubscriptionsResponse&gt; GetApisV4HermesV0Subscriptions(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.HermesPartnerApi.GetApisV4HermesV0Subscriptions();
    // TODO: Handle 'response' of type AppSubscriptionsResponse
}
catch (ApiException<GetApisV4HermesV0SubscriptionsError> ex)
{
    if (ex.Error.TryGetString(out var error))
    {
        // TODO: Handle 'error' of type string
    }
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[AppSubscriptionsResponse](src/Semrush/Models/AppSubscriptionsResponse.cs)</code>

**OnError**: <code>[ApiException](src/Semrush/Core/Exceptions/ApiException.cs)&lt;[GetApisV4HermesV0SubscriptionsError](src/Semrush/Errors/GetApisV4HermesV0SubscriptionsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;AppUserSubscriptionStatusResponse&gt; GetApisV4HermesV0UserByUserIdSubscriptionById(GetApisV4HermesV0UserByUserIdSubscriptionByIdRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.HermesPartnerApi.GetApisV4HermesV0UserByUserIdSubscriptionById(
        new GetApisV4HermesV0UserByUserIdSubscriptionByIdRequest { UserId = 1, Id = 1 });
    // TODO: Handle 'response' of type AppUserSubscriptionStatusResponse
}
catch (ApiException<GetApisV4HermesV0UserByUserIdSubscriptionByIdError> ex)
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

<code>[GetApisV4HermesV0UserByUserIdSubscriptionByIdRequest](src/Semrush/Requests/HermesPartnerApi/GetApisV4HermesV0UserByUserIdSubscriptionByIdRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[AppUserSubscriptionStatusResponse](src/Semrush/Models/AppUserSubscriptionStatusResponse.cs)</code>

**OnError**: <code>[ApiException](src/Semrush/Core/Exceptions/ApiException.cs)&lt;[GetApisV4HermesV0UserByUserIdSubscriptionByIdError](src/Semrush/Errors/GetApisV4HermesV0UserByUserIdSubscriptionByIdError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task PostApisV4HermesV0Event(PostApisV4HermesV0EventRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    await client.HermesPartnerApi.PostApisV4HermesV0Event(new PostApisV4HermesV0EventRequest());
}
catch (ApiException<PostApisV4HermesV0EventError> ex)
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

<code>[PostApisV4HermesV0EventRequest](src/Semrush/Requests/HermesPartnerApi/PostApisV4HermesV0EventRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/Semrush/Core/Exceptions/ApiException.cs)&lt;[PostApisV4HermesV0EventError](src/Semrush/Errors/PostApisV4HermesV0EventError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## JwtIssuer

> Source: [JwtIssuer](src/Semrush/Api/JwtIssuer.cs)

<details>
<summary><code>Task&lt;IssuerJwtResponse&gt; PostAppCenterApiV2JwtToken(PostAppCenterApiV2JwtTokenRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.JwtIssuer.PostAppCenterApiV2JwtToken(new PostAppCenterApiV2JwtTokenRequest());
    // TODO: Handle 'response' of type IssuerJwtResponse
}
catch (ApiException<PostAppCenterApiV2JwtTokenError> ex)
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

<code>[PostAppCenterApiV2JwtTokenRequest](src/Semrush/Requests/JwtIssuer/PostAppCenterApiV2JwtTokenRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[IssuerJwtResponse](src/Semrush/Models/IssuerJwtResponse.cs)</code>

**OnError**: <code>[ApiException](src/Semrush/Core/Exceptions/ApiException.cs)&lt;[PostAppCenterApiV2JwtTokenError](src/Semrush/Errors/PostAppCenterApiV2JwtTokenError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## PartnerService

> Source: [PartnerService](src/Semrush/Api/PartnerService.cs)

<details>
<summary><code>Task&lt;ViewerStatusResponse&gt; PostApisV4AppCenterV2PartnerViewerStatus(PostApisV4AppCenterV2PartnerViewerStatusRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.PartnerService.PostApisV4AppCenterV2PartnerViewerStatus(
        new PostApisV4AppCenterV2PartnerViewerStatusRequest());
    // TODO: Handle 'response' of type ViewerStatusResponse
}
catch (ApiException<PostApisV4AppCenterV2PartnerViewerStatusError> ex)
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

<code>[PostApisV4AppCenterV2PartnerViewerStatusRequest](src/Semrush/Requests/PartnerService/PostApisV4AppCenterV2PartnerViewerStatusRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ViewerStatusResponse](src/Semrush/Models/ViewerStatusResponse.cs)</code>

**OnError**: <code>[ApiException](src/Semrush/Core/Exceptions/ApiException.cs)&lt;[PostApisV4AppCenterV2PartnerViewerStatusError](src/Semrush/Errors/PostApisV4AppCenterV2PartnerViewerStatusError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

