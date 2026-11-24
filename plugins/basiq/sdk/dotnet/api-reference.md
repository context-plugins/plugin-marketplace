# Reference

Every operation below is shown in its throwing form. On an error status it throws `ApiException<TError>` — the status code, headers, content type and the operation's error type, `RawError` (the raw body) when the spec declares none — and where an operation offers an `…AsResult` sibling, that sibling returns `ApiResult<TResponse, TError>` instead. A request that produces no usable response surfaces as `SdkConnectionException` or `SdkTimeoutException`, a body that does not match the documented response type as `ResponseDeserializationException`, and a required credential that is not configured, or one that cannot be applied, as `AuthSchemeException`; all of them derive from `SdkException` and name the failed call. See [README → Error Handling](README.md#error-handling).

> Source: [BasiqClient](src/Basiq/BasiqClient.cs)

## AccountsApi

> Source: [AccountsApi](src/Basiq/Api/AccountsApi.cs)

<details>
<summary><code>Task&lt;AccountResponseResource1&gt; GetAccount(GetAccountRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve a specific account belonging to a user

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.AccountsApi.GetAccount(new GetAccountRequest
    {
        UserId = "some example string",
        AccountId = "some example string",
    });
    // TODO: Handle 'response' of type AccountResponseResource1
}
catch (ApiException<GetAccountError> ex)
{
    if (ex.Error.TryGetUsersAccounts400Error1(out var error))
    {
        // TODO: Handle 'error' of type UsersAccounts400Error1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetAccountRequest](src/Basiq/Requests/AccountsApi/GetAccountRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[AccountResponseResource1](src/Basiq/Models/AccountResponseResource1.cs)</code>

**OnError**: <code>[ApiException](src/Basiq/Core/Exceptions/ApiException.cs)&lt;[GetAccountError](src/Basiq/Errors/GetAccountError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;UsersAccountsResponse&gt; GetAccounts(GetAccountsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List all accounts belonging to a user

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.AccountsApi.GetAccounts(new GetAccountsRequest { UserId = "some example string" });
    // TODO: Handle 'response' of type UsersAccountsResponse
}
catch (ApiException<GetAccountsError> ex)
{
    if (ex.Error.TryGetUsersAccounts400Error1(out var error))
    {
        // TODO: Handle 'error' of type UsersAccounts400Error1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetAccountsRequest](src/Basiq/Requests/AccountsApi/GetAccountsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[UsersAccountsResponse](src/Basiq/Models/UsersAccountsResponse.cs)</code>

**OnError**: <code>[ApiException](src/Basiq/Core/Exceptions/ApiException.cs)&lt;[GetAccountsError](src/Basiq/Errors/GetAccountsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Analytics

> Source: [Analytics](src/Basiq/Api/Analytics.cs)

<details>
<summary><code>Task&lt;ConnectionAnalyticsResponse&gt; GetConnectionAnalytics(GetConnectionAnalyticsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve connection analytics, including connection creation, status distribution, method distribution, and disruption rates over a given time interval.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Analytics.GetConnectionAnalytics(new GetConnectionAnalyticsRequest
    {
        Interval = Interval.Daily,
    });
    // TODO: Handle 'response' of type ConnectionAnalyticsResponse
}
catch (ApiException<GetConnectionAnalyticsError> ex)
{
    if (ex.Error.TryGetErrorList(out var error))
    {
        // TODO: Handle 'error' of type ErrorList
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetConnectionAnalyticsRequest](src/Basiq/Requests/Analytics/GetConnectionAnalyticsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ConnectionAnalyticsResponse](src/Basiq/Models/ConnectionAnalyticsResponse.cs)</code>

**OnError**: <code>[ApiException](src/Basiq/Core/Exceptions/ApiException.cs)&lt;[GetConnectionAnalyticsError](src/Basiq/Errors/GetConnectionAnalyticsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;AnalyticsResponse&gt; GetUserAnalytics(GetUserAnalyticsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve user analytics, such as number of users and connections created for an application over a given time interval.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Analytics.GetUserAnalytics(new GetUserAnalyticsRequest
    {
        Interval = Interval.Daily,
        ConnectionType = "all,cdr,pdf,web,csv",
    });
    // TODO: Handle 'response' of type AnalyticsResponse
}
catch (ApiException<GetUserAnalyticsError> ex)
{
    if (ex.Error.TryGetErrorList(out var error))
    {
        // TODO: Handle 'error' of type ErrorList
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetUserAnalyticsRequest](src/Basiq/Requests/Analytics/GetUserAnalyticsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[AnalyticsResponse](src/Basiq/Models/AnalyticsResponse.cs)</code>

**OnError**: <code>[ApiException](src/Basiq/Core/Exceptions/ApiException.cs)&lt;[GetUserAnalyticsError](src/Basiq/Errors/GetUserAnalyticsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## AuthLinks

> Source: [AuthLinks](src/Basiq/Api/AuthLinks.cs)

<details>
<summary><code>Task DeleteAuthLink(DeleteAuthLinkRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Note that this action cannot be undone.

The auth_link is a URL that directs a User to Basiq's hosted consent workflow to link banks and securely share data. When the user selects 'I have disclosed all my accounts' the auth_link is automatically deleted.

Returns an empty body if the delete succeeded. Otherwise, this call returns an error in the event of a failure.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.AuthLinks.DeleteAuthLink(new DeleteAuthLinkRequest { UserId = "some example string" });
}
catch (ApiException<DeleteAuthLinkError> ex)
{
    if (ex.Error.TryGetUsersAuthLink400Error1(out var error))
    {
        // TODO: Handle 'error' of type UsersAuthLink400Error1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DeleteAuthLinkRequest](src/Basiq/Requests/AuthLinks/DeleteAuthLinkRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/Basiq/Core/Exceptions/ApiException.cs)&lt;[DeleteAuthLinkError](src/Basiq/Errors/DeleteAuthLinkError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;UsersAuthLinkResponse1&gt; GetAuthLink(GetAuthLinkRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the latest/last auth_link generated for the specified user. Returns an error otherwise.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.AuthLinks.GetAuthLink(new GetAuthLinkRequest { UserId = "some example string" });
    // TODO: Handle 'response' of type UsersAuthLinkResponse1
}
catch (ApiException<GetAuthLinkError> ex)
{
    if (ex.Error.TryGetUsersAuthLink400Error1(out var error))
    {
        // TODO: Handle 'error' of type UsersAuthLink400Error1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetAuthLinkRequest](src/Basiq/Requests/AuthLinks/GetAuthLinkRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[UsersAuthLinkResponse1](src/Basiq/Models/UsersAuthLinkResponse1.cs)</code>

**OnError**: <code>[ApiException](src/Basiq/Core/Exceptions/ApiException.cs)&lt;[GetAuthLinkError](src/Basiq/Errors/GetAuthLinkError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;UsersAuthLinkResponse&gt; PostAuthLink(PostAuthLinkRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a new auth_link object by making a POST request to the auth_link endpoint. The new auth_link will effectively delete previous auth_link for that user, rendering the previous URL(s) invalid.

The 'mobile' attribute is used for 2FA SMS verification and is conditionally required. If it is not specified, we will look up the mobile on the user object; if that is not specified either, you will get an error. If both are specified, the mobile number on the auth_link will take precedence.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.AuthLinks.PostAuthLink(new PostAuthLinkRequest { UserId = "some example string" });
    // TODO: Handle 'response' of type UsersAuthLinkResponse
}
catch (ApiException<PostAuthLinkError> ex)
{
    if (ex.Error.TryGetUsersAuthLink400Error1(out var error))
    {
        // TODO: Handle 'error' of type UsersAuthLink400Error1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[PostAuthLinkRequest](src/Basiq/Requests/AuthLinks/PostAuthLinkRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[UsersAuthLinkResponse](src/Basiq/Models/UsersAuthLinkResponse.cs)</code>

**OnError**: <code>[ApiException](src/Basiq/Core/Exceptions/ApiException.cs)&lt;[PostAuthLinkError](src/Basiq/Errors/PostAuthLinkError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## AuthenticationApi

> Source: [AuthenticationApi](src/Basiq/Api/AuthenticationApi.cs)

<details>
<summary><code>Task&lt;TokenResponse&gt; PostToken(PostTokenRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Use this endpoint to retrieve a token that will be passed as authorization header for Basiq API

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.AuthenticationApi.PostToken(new PostTokenRequest
    {
        BasiqVersion = "3.0",
        Scope = "CLIENT_ACCESS",
        UserId = "6dd30ce4-d4ba-11ec-9d64-0242ac120002",
    });
    // TODO: Handle 'response' of type TokenResponse
}
catch (ApiException<PostTokenError> ex)
{
    if (ex.Error.TryGetToken400Error1(out var error))
    {
        // TODO: Handle 'error' of type Token400Error1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[PostTokenRequest](src/Basiq/Requests/AuthenticationApi/PostTokenRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[TokenResponse](src/Basiq/Models/TokenResponse.cs)</code>

**OnError**: <code>[ApiException](src/Basiq/Core/Exceptions/ApiException.cs)&lt;[PostTokenError](src/Basiq/Errors/PostTokenError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Connections

> Source: [Connections](src/Basiq/Api/Connections.cs)

<details>
<summary><code>Task DeleteConnection(DeleteConnectionRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Permanently deletes a connection.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.Connections.DeleteConnection(new DeleteConnectionRequest
    {
        UserId = "some example string",
        ConnectionId = "some example string",
    });
}
catch (ApiException<DeleteConnectionError> ex)
{
    if (ex.Error.TryGetUsersConnections400Error1(out var error))
    {
        // TODO: Handle 'error' of type UsersConnections400Error1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DeleteConnectionRequest](src/Basiq/Requests/Connections/DeleteConnectionRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/Basiq/Core/Exceptions/ApiException.cs)&lt;[DeleteConnectionError](src/Basiq/Errors/DeleteConnectionError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ConnectionGetResponseResource&gt; GetConnection(GetConnectionRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Use this to retrieve details of a specific connection. Note that due to security the loginId, password, securityCode are never returned.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Connections.GetConnection(new GetConnectionRequest
    {
        UserId = "some example string",
        ConnectionId = "some example string",
    });
    // TODO: Handle 'response' of type ConnectionGetResponseResource
}
catch (ApiException<GetConnectionError> ex)
{
    if (ex.Error.TryGetUsersConnections400Error1(out var error))
    {
        // TODO: Handle 'error' of type UsersConnections400Error1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetConnectionRequest](src/Basiq/Requests/Connections/GetConnectionRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ConnectionGetResponseResource](src/Basiq/Models/ConnectionGetResponseResource.cs)</code>

**OnError**: <code>[ApiException](src/Basiq/Core/Exceptions/ApiException.cs)&lt;[GetConnectionError](src/Basiq/Errors/GetConnectionError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ConnectionsGetResponseResource&gt; GetConnections(GetConnectionsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list of connections belonging to this user. Each entry in the array is a separate object. If no data is returned, the resulting array will be empty.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Connections.GetConnections(new GetConnectionsRequest
    {
        UserId = "some example string",
    });
    // TODO: Handle 'response' of type ConnectionsGetResponseResource
}
catch (ApiException<GetConnectionsError> ex)
{
    if (ex.Error.TryGetUsersConnections400Error1(out var error))
    {
        // TODO: Handle 'error' of type UsersConnections400Error1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetConnectionsRequest](src/Basiq/Requests/Connections/GetConnectionsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ConnectionsGetResponseResource](src/Basiq/Models/ConnectionsGetResponseResource.cs)</code>

**OnError**: <code>[ApiException](src/Basiq/Core/Exceptions/ApiException.cs)&lt;[GetConnectionsError](src/Basiq/Errors/GetConnectionsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task PurgeConnectionData(PurgeConnectionDataRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Use this endpoint to remove all user data related to a specific institution. Purging is only applicable for active user connections.

When Enrich data is updated, the Enrich results under transactions won’t automatically reflect these updates. To ensure the latest Enrich results are available, partners should first purge and then refresh connections. Without this step, any new insight reports generated will not include the latest enriched data.

> 📘 **Note:** Remember to purge and refresh connections to keep Enrich insights current.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.Connections.PurgeConnectionData(new PurgeConnectionDataRequest
    {
        UserId = "some example string",
        ConnectionId = "some example string",
    });
}
catch (ApiException<PurgeConnectionDataError> ex)
{
    if (ex.Error.TryGetUsersConnectionsPurge400Error1(out var error))
    {
        // TODO: Handle 'error' of type UsersConnectionsPurge400Error1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[PurgeConnectionDataRequest](src/Basiq/Requests/Connections/PurgeConnectionDataRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/Basiq/Core/Exceptions/ApiException.cs)&lt;[PurgeConnectionDataError](src/Basiq/Errors/PurgeConnectionDataError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ConnectionResponseResource&gt; RefreshConnection(RefreshConnectionRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Use this to refresh an existing connection. This will not return a new connection. Instead will return a job resource which is resonsible for refreshing the connection and fetching data asynchronously. Use this job resource to track the connections progress.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Connections.RefreshConnection(new RefreshConnectionRequest
    {
        UserId = "some example string",
        ConnectionId = "some example string",
    });
    // TODO: Handle 'response' of type ConnectionResponseResource
}
catch (ApiException<RefreshConnectionError> ex)
{
    if (ex.Error.TryGetUsersConnectionsRefresh400Error1(out var error))
    {
        // TODO: Handle 'error' of type UsersConnectionsRefresh400Error1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[RefreshConnectionRequest](src/Basiq/Requests/Connections/RefreshConnectionRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ConnectionResponseResource](src/Basiq/Models/ConnectionResponseResource.cs)</code>

**OnError**: <code>[ApiException](src/Basiq/Core/Exceptions/ApiException.cs)&lt;[RefreshConnectionError](src/Basiq/Errors/RefreshConnectionError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ConnectionsRefreshResource&gt; RefreshConnections(RefreshConnectionsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Use this to refresh all connections belonging to the specified user.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Connections.RefreshConnections(new RefreshConnectionsRequest
    {
        UserId = "some example string",
    });
    // TODO: Handle 'response' of type ConnectionsRefreshResource
}
catch (ApiException<RefreshConnectionsError> ex)
{
    if (ex.Error.TryGetUsersConnectionsRefresh400Error1(out var error))
    {
        // TODO: Handle 'error' of type UsersConnectionsRefresh400Error1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[RefreshConnectionsRequest](src/Basiq/Requests/Connections/RefreshConnectionsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ConnectionsRefreshResource](src/Basiq/Models/ConnectionsRefreshResource.cs)</code>

**OnError**: <code>[ApiException](src/Basiq/Core/Exceptions/ApiException.cs)&lt;[RefreshConnectionsError](src/Basiq/Errors/RefreshConnectionsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Connectors

> Source: [Connectors](src/Basiq/Api/Connectors.cs)

<details>
<summary><code>Task&lt;ConnectorsResponse1&gt; GetConnector(GetConnectorRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

NOTE: This end point requires authentication.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Connectors.GetConnector(new GetConnectorRequest
    {
        ConnectorId = "some example string",
        Method = "some example string",
    });
    // TODO: Handle 'response' of type ConnectorsResponse1
}
catch (ApiException<GetConnectorError> ex)
{
    if (ex.Error.TryGetConnectors400Error1(out var error))
    {
        // TODO: Handle 'error' of type Connectors400Error1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetConnectorRequest](src/Basiq/Requests/Connectors/GetConnectorRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ConnectorsResponse1](src/Basiq/Models/ConnectorsResponse1.cs)</code>

**OnError**: <code>[ApiException](src/Basiq/Core/Exceptions/ApiException.cs)&lt;[GetConnectorError](src/Basiq/Errors/GetConnectorError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ConnectorsResponse&gt; GetConnectors(GetConnectorsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

NOTE: This end point requires authentication.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Connectors.GetConnectors(new GetConnectorsRequest());
    // TODO: Handle 'response' of type ConnectorsResponse
}
catch (ApiException<GetConnectorsError> ex)
{
    if (ex.Error.TryGetConnectors400Error1(out var error))
    {
        // TODO: Handle 'error' of type Connectors400Error1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetConnectorsRequest](src/Basiq/Requests/Connectors/GetConnectorsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ConnectorsResponse](src/Basiq/Models/ConnectorsResponse.cs)</code>

**OnError**: <code>[ApiException](src/Basiq/Core/Exceptions/ApiException.cs)&lt;[GetConnectorsError](src/Basiq/Errors/GetConnectorsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Consents

> Source: [Consents](src/Basiq/Api/Consents.cs)

<details>
<summary><code>Task DeleteConsent(DeleteConsentRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Permanently deletes a users consent, this action cannot be undone.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.Consents.DeleteConsent(new DeleteConsentRequest
    {
        UserId = "some example string",
        ConsentId = "some example string",
    });
}
catch (ApiException<DeleteConsentError> ex)
{
    if (ex.Error.TryGetUsersConsents400Error1(out var error))
    {
        // TODO: Handle 'error' of type UsersConsents400Error1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DeleteConsentRequest](src/Basiq/Requests/Consents/DeleteConsentRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/Basiq/Core/Exceptions/ApiException.cs)&lt;[DeleteConsentError](src/Basiq/Errors/DeleteConsentError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;UsersConsentsResponse&gt; GetConsents(GetConsentsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves a list of the user consents

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Consents.GetConsents(new GetConsentsRequest { UserId = "some example string" });
    // TODO: Handle 'response' of type UsersConsentsResponse
}
catch (ApiException<GetConsentsError> ex)
{
    if (ex.Error.TryGetUsersConsents400Error1(out var error))
    {
        // TODO: Handle 'error' of type UsersConsents400Error1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetConsentsRequest](src/Basiq/Requests/Consents/GetConsentsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[UsersConsentsResponse](src/Basiq/Models/UsersConsentsResponse.cs)</code>

**OnError**: <code>[ApiException](src/Basiq/Core/Exceptions/ApiException.cs)&lt;[GetConsentsError](src/Basiq/Errors/GetConsentsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## EnrichApi

> Source: [EnrichApi](src/Basiq/Api/EnrichApi.cs)

<details>
<summary><code>Task&lt;EnrichResponse&gt; Enrich(EnrichRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

The Enrich resource enables you to retrieve details by passing in a search query containing a bank transaction description. The service enriches transaction data with multiple attributes, returning a transaction classification and three metadata components. The transaction classification will first determine if the transaction is of type payment, transfer, cash-withdrawal, bank-fee etc. The engine then derives merchant information, purchase location and prescribes an industry standard categorisation for each payment transaction.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.EnrichApi.Enrich(new EnrichRequest
    {
        Q = "some example string",
        Institution = "some example string",
        Country = "some example string",
    });
    // TODO: Handle 'response' of type EnrichResponse
}
catch (ApiException<EnrichError> ex)
{
    if (ex.Error.TryGetEnrich400Error1(out var error))
    {
        // TODO: Handle 'error' of type Enrich400Error1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[EnrichRequest](src/Basiq/Requests/EnrichApi/EnrichRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[EnrichResponse](src/Basiq/Models/EnrichResponse.cs)</code>

**OnError**: <code>[ApiException](src/Basiq/Core/Exceptions/ApiException.cs)&lt;[EnrichError](src/Basiq/Errors/EnrichError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;SingleMerchantResponse&gt; GetMerchantById(GetMerchantByIdRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves a single merchant's details using its unique ID.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.EnrichApi.GetMerchantById(new GetMerchantByIdRequest
    {
        MerchantId = Guid.Parse("c1ef352e-c807-4bdc-9a70-887f7cc17426"),
    });
    // TODO: Handle 'response' of type SingleMerchantResponse
}
catch (ApiException<GetMerchantByIdError> ex)
{
    if (ex.Error.TryGetMerchantNotFoundError(out var error))
    {
        // TODO: Handle 'error' of type MerchantNotFoundError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetMerchantByIdRequest](src/Basiq/Requests/EnrichApi/GetMerchantByIdRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SingleMerchantResponse](src/Basiq/Models/SingleMerchantResponse.cs)</code>

**OnError**: <code>[ApiException](src/Basiq/Core/Exceptions/ApiException.cs)&lt;[GetMerchantByIdError](src/Basiq/Errors/GetMerchantByIdError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;MerchantsResponse&gt; MerchantSearch(MerchantSearchRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves merchant details. At least one of `abn` or `merchantName` is required for a successful search. Optional filters for suburb and entity type can also be applied.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.EnrichApi.MerchantSearch(new MerchantSearchRequest
    {
        Abn = "38865358328",
        MerchantName = "coles",
        Suburb = "Ryde",
        EntityType = "Individual/Sole Trader",
    });
    // TODO: Handle 'response' of type MerchantsResponse
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

<code>[MerchantSearchRequest](src/Basiq/Requests/EnrichApi/MerchantSearchRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[MerchantsResponse](src/Basiq/Models/MerchantsResponse.cs)</code>

**OnError**: <code>[ApiException](src/Basiq/Core/Exceptions/ApiException.cs)&lt;[RawError](src/Basiq/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Events

> Source: [Events](src/Basiq/Api/Events.cs)

<details>
<summary><code>Task&lt;EventsTypesResponse1&gt; GetEventTypeById(GetEventTypeByIdRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a single event type based on the parameter input.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Events.GetEventTypeById(new GetEventTypeByIdRequest { Id = "user.created" });
    // TODO: Handle 'response' of type EventsTypesResponse1
}
catch (ApiException<GetEventTypeByIdError> ex)
{
    if (ex.Error.TryGetEventsTypes400Error1(out var error))
    {
        // TODO: Handle 'error' of type EventsTypes400Error1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetEventTypeByIdRequest](src/Basiq/Requests/Events/GetEventTypeByIdRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[EventsTypesResponse1](src/Basiq/Models/EventsTypesResponse1.cs)</code>

**OnError**: <code>[ApiException](src/Basiq/Core/Exceptions/ApiException.cs)&lt;[GetEventTypeByIdError](src/Basiq/Errors/GetEventTypeByIdError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;EventsGetResponseResource&gt; GetEvents(GetEventsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list of all events that have taken place.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Events.GetEvents(new GetEventsRequest
    {
        Filter = "user.id.eq(userId) OR event.entity.eq(entity), event.type.eq(type)",
    });
    // TODO: Handle 'response' of type EventsGetResponseResource
}
catch (ApiException<GetEventsError> ex)
{
    if (ex.Error.TryGetEvents400Error1(out var error))
    {
        // TODO: Handle 'error' of type Events400Error1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetEventsRequest](src/Basiq/Requests/Events/GetEventsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[EventsGetResponseResource](src/Basiq/Models/EventsGetResponseResource.cs)</code>

**OnError**: <code>[ApiException](src/Basiq/Core/Exceptions/ApiException.cs)&lt;[GetEventsError](src/Basiq/Errors/GetEventsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;EventsResponse&gt; GetTypeById(GetTypeByIdRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a single event type based on the parameter input.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Events.GetTypeById(new GetTypeByIdRequest
    {
        Id = "a0fa1d01e0c9a1032e29ac74ade5f786e880ae04f4e3788144c6d13b53e5d29b",
    });
    // TODO: Handle 'response' of type EventsResponse
}
catch (ApiException<GetTypeByIdError> ex)
{
    if (ex.Error.TryGetEvents400Error21(out var error))
    {
        // TODO: Handle 'error' of type Events400Error21
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetTypeByIdRequest](src/Basiq/Requests/Events/GetTypeByIdRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[EventsResponse](src/Basiq/Models/EventsResponse.cs)</code>

**OnError**: <code>[ApiException](src/Basiq/Core/Exceptions/ApiException.cs)&lt;[GetTypeByIdError](src/Basiq/Errors/GetTypeByIdError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;EventsTypesResponse&gt; ListEventTypes(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list of event types.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Events.ListEventTypes();
    // TODO: Handle 'response' of type EventsTypesResponse
}
catch (ApiException<ListEventTypesError> ex)
{
    if (ex.Error.TryGetEventsTypes401Error1(out var error))
    {
        // TODO: Handle 'error' of type EventsTypes401Error1
    }
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[EventsTypesResponse](src/Basiq/Models/EventsTypesResponse.cs)</code>

**OnError**: <code>[ApiException](src/Basiq/Core/Exceptions/ApiException.cs)&lt;[ListEventTypesError](src/Basiq/Errors/ListEventTypesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Expenses

> Source: [Expenses](src/Basiq/Api/Expenses.cs)

<details>
<summary><code>Task&lt;ExpensesResponse&gt; GetExpenses(GetExpensesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve an existing expense summary for a specific user

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Expenses.GetExpenses(new GetExpensesRequest
    {
        UserId = "some example string",
        SnapshotId = "some example string",
    });
    // TODO: Handle 'response' of type ExpensesResponse
}
catch (ApiException<GetExpensesError> ex)
{
    if (ex.Error.TryGetUsersExpenses400Error1(out var error))
    {
        // TODO: Handle 'error' of type UsersExpenses400Error1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetExpensesRequest](src/Basiq/Requests/Expenses/GetExpensesRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ExpensesResponse](src/Basiq/Models/ExpensesResponse.cs)</code>

**OnError**: <code>[ApiException](src/Basiq/Core/Exceptions/ApiException.cs)&lt;[GetExpensesError](src/Basiq/Errors/GetExpensesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ExpensesResponse&gt; PostExpenses(PostExpensesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a new expense summary for a user

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Expenses.PostExpenses(new PostExpensesRequest { UserId = "some example string" });
    // TODO: Handle 'response' of type ExpensesResponse
}
catch (ApiException<PostExpensesError> ex)
{
    if (ex.Error.TryGetUsersExpenses400Error1(out var error))
    {
        // TODO: Handle 'error' of type UsersExpenses400Error1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[PostExpensesRequest](src/Basiq/Requests/Expenses/PostExpensesRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ExpensesResponse](src/Basiq/Models/ExpensesResponse.cs)</code>

**OnError**: <code>[ApiException](src/Basiq/Core/Exceptions/ApiException.cs)&lt;[PostExpensesError](src/Basiq/Errors/PostExpensesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Identities

> Source: [Identities](src/Basiq/Api/Identities.cs)

<details>
<summary><code>Task&lt;IdentitiesGetResponseResource&gt; GetUserIdentities(GetUserIdentitiesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list with a data property that contains an array of user identities. Each entry in the array is a separate object. If no data is returned, the resulting array will be empty.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Identities.GetUserIdentities(new GetUserIdentitiesRequest
    {
        UserId = "some example string",
    });
    // TODO: Handle 'response' of type IdentitiesGetResponseResource
}
catch (ApiException<GetUserIdentitiesError> ex)
{
    if (ex.Error.TryGetUsersIdentities400Error1(out var error))
    {
        // TODO: Handle 'error' of type UsersIdentities400Error1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetUserIdentitiesRequest](src/Basiq/Requests/Identities/GetUserIdentitiesRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[IdentitiesGetResponseResource](src/Basiq/Models/IdentitiesGetResponseResource.cs)</code>

**OnError**: <code>[ApiException](src/Basiq/Core/Exceptions/ApiException.cs)&lt;[GetUserIdentitiesError](src/Basiq/Errors/GetUserIdentitiesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;UsersIdentitiesResponse&gt; GetUserIdentity(GetUserIdentityRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a specific identity object.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Identities.GetUserIdentity(new GetUserIdentityRequest
    {
        UserId = "some example string",
        IdentityId = "some example string",
    });
    // TODO: Handle 'response' of type UsersIdentitiesResponse
}
catch (ApiException<GetUserIdentityError> ex)
{
    if (ex.Error.TryGetUsersIdentities400Error1(out var error))
    {
        // TODO: Handle 'error' of type UsersIdentities400Error1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetUserIdentityRequest](src/Basiq/Requests/Identities/GetUserIdentityRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[UsersIdentitiesResponse](src/Basiq/Models/UsersIdentitiesResponse.cs)</code>

**OnError**: <code>[ApiException](src/Basiq/Core/Exceptions/ApiException.cs)&lt;[GetUserIdentityError](src/Basiq/Errors/GetUserIdentityError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## IncomeApi

> Source: [IncomeApi](src/Basiq/Api/IncomeApi.cs)

<details>
<summary><code>Task&lt;IncomeResponse&gt; GetIncome(GetIncomeRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve an existing income summary for a specific user

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.IncomeApi.GetIncome(new GetIncomeRequest
    {
        UserId = "some example string",
        SnapshotId = "some example string",
    });
    // TODO: Handle 'response' of type IncomeResponse
}
catch (ApiException<GetIncomeError> ex)
{
    if (ex.Error.TryGetUsersIncome400Error1(out var error))
    {
        // TODO: Handle 'error' of type UsersIncome400Error1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetIncomeRequest](src/Basiq/Requests/IncomeApi/GetIncomeRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[IncomeResponse](src/Basiq/Models/IncomeResponse.cs)</code>

**OnError**: <code>[ApiException](src/Basiq/Core/Exceptions/ApiException.cs)&lt;[GetIncomeError](src/Basiq/Errors/GetIncomeError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;IncomeResponse&gt; PostIncome(PostIncomeRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create an income summary for a specific user

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.IncomeApi.PostIncome(new PostIncomeRequest { UserId = "some example string" });
    // TODO: Handle 'response' of type IncomeResponse
}
catch (ApiException<PostIncomeError> ex)
{
    if (ex.Error.TryGetUsersIncome400Error1(out var error))
    {
        // TODO: Handle 'error' of type UsersIncome400Error1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[PostIncomeRequest](src/Basiq/Requests/IncomeApi/PostIncomeRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[IncomeResponse](src/Basiq/Models/IncomeResponse.cs)</code>

**OnError**: <code>[ApiException](src/Basiq/Core/Exceptions/ApiException.cs)&lt;[PostIncomeError](src/Basiq/Errors/PostIncomeError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Insights

> Source: [Insights](src/Basiq/Api/Insights.cs)

<details>
<summary><code>Task&lt;PostInsightsResponse&gt; CreateInsight(CreateInsightRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a new insight for one or more users. Supported insight types are EXPENSE_RATIO_VERIFICATION, BALANCE_VERIFICATION, ACCOUNT_VERIFICATION, IDENTITY_VERIFICATION, and INCOME_VERIFICATION. Multi-user requests (1–10 users) are currently supported only for EXPENSE_RATIO_VERIFICATION.A single insight object is created referencing all users. The self link in the response uses the first userId from the users array.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Insights.CreateInsight(new CreateInsightRequest
    {
        Body = new PostInsightsRequest
        {
            Users = [Guid.Parse("a9242681-8c49-434c-9eeb-e011fba2a0cc")],
            Type = TypeInsightsApi.IdentityVerification,
            Data = new IdentityVerificationData
            {
                Name = "Jane Doe",
                Email = "jane@example.com",
                Phone = "+61400000000",
                Address = "123 Main St, Sydney NSW 2000",
            },
        },
    });
    // TODO: Handle 'response' of type PostInsightsResponse
}
catch (ApiException<CreateInsightError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CreateInsightRequest](src/Basiq/Requests/Insights/CreateInsightRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PostInsightsResponse](src/Basiq/Models/PostInsightsResponse.cs)</code>

**OnError**: <code>[ApiException](src/Basiq/Core/Exceptions/ApiException.cs)&lt;[CreateInsightError](src/Basiq/Errors/CreateInsightError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;AccountInsightResponse&gt; GetAccountInsights(GetAccountInsightsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve account insights for a specific user based on account number

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Insights.GetAccountInsights(new GetAccountInsightsRequest
    {
        UserId = Guid.Parse("60a0c24e-07c3-41a2-acdf-be8f1b7dd9f3"),
        Body = new UsersInsightsAccountRequest { AccountNumber = "some example string" },
    });
    // TODO: Handle 'response' of type AccountInsightResponse
}
catch (ApiException<GetAccountInsightsError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetAccountInsightsRequest](src/Basiq/Requests/Insights/GetAccountInsightsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[AccountInsightResponse](src/Basiq/Models/AccountInsightResponse.cs)</code>

**OnError**: <code>[ApiException](src/Basiq/Core/Exceptions/ApiException.cs)&lt;[GetAccountInsightsError](src/Basiq/Errors/GetAccountInsightsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;BalanceInsightResponse&gt; GetBalanceInsights(GetBalanceInsightsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve balance insights for a user's accounts based on specified minimum and maximum balance criteria

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Insights.GetBalanceInsights(new GetBalanceInsightsRequest
    {
        UserId = Guid.Parse("2fc2691d-a6e5-4d1d-9748-c3b217ad76b0"),
        Body = new BalanceInsightRequest { Balance = new Balance2 { Min = "1" } },
    });
    // TODO: Handle 'response' of type BalanceInsightResponse
}
catch (ApiException<GetBalanceInsightsError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetBalanceInsightsRequest](src/Basiq/Requests/Insights/GetBalanceInsightsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[BalanceInsightResponse](src/Basiq/Models/BalanceInsightResponse.cs)</code>

**OnError**: <code>[ApiException](src/Basiq/Core/Exceptions/ApiException.cs)&lt;[GetBalanceInsightsError](src/Basiq/Errors/GetBalanceInsightsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ExpenseRatioInsightResponse&gt; GetExpenseRatioInsights(GetExpenseRatioInsightsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Calculate and return the expense-to-income ratio.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Insights.GetExpenseRatioInsights(new GetExpenseRatioInsightsRequest
    {
        UserId = Guid.Parse("60a0c24e-07c3-41a2-acdf-be8f1b7dd9f3"),
        Body = new ExpenseRatioInsightRequest { Expense = "2500" },
    });
    // TODO: Handle 'response' of type ExpenseRatioInsightResponse
}
catch (ApiException<GetExpenseRatioInsightsError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetExpenseRatioInsightsRequest](src/Basiq/Requests/Insights/GetExpenseRatioInsightsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ExpenseRatioInsightResponse](src/Basiq/Models/ExpenseRatioInsightResponse.cs)</code>

**OnError**: <code>[ApiException](src/Basiq/Core/Exceptions/ApiException.cs)&lt;[GetExpenseRatioInsightsError](src/Basiq/Errors/GetExpenseRatioInsightsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;IdentityInsightResponse&gt; GetIdentityInsights(GetIdentityInsightsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve identity insights for a specific user by comparing provided personal details (name, phone, email, address).

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Insights.GetIdentityInsights(new GetIdentityInsightsRequest
    {
        UserId = Guid.Parse("321ac6df-beec-435b-a93e-678fe919badc"),
        Body = new IdentityInsightRequest { Name = "jared Dunn", Phone = "", Email = "", Address = "" },
    });
    // TODO: Handle 'response' of type IdentityInsightResponse
}
catch (ApiException<GetIdentityInsightsError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetIdentityInsightsRequest](src/Basiq/Requests/Insights/GetIdentityInsightsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[IdentityInsightResponse](src/Basiq/Models/IdentityInsightResponse.cs)</code>

**OnError**: <code>[ApiException](src/Basiq/Core/Exceptions/ApiException.cs)&lt;[GetIdentityInsightsError](src/Basiq/Errors/GetIdentityInsightsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Insight&gt; GetInsightById(GetInsightByIdRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns detailed information for a specific insight by ID

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Insights.GetInsightById(new GetInsightByIdRequest
    {
        UserId = Guid.Parse("0a84e628-dad7-40f4-bbc0-abeb3ddd90ea"),
        InsightId = Guid.Parse("54878d1a-295b-44c3-8f1e-402e68f912fe"),
    });
    // TODO: Handle 'response' of type Insight
}
catch (ApiException<GetInsightByIdError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetInsightByIdRequest](src/Basiq/Requests/Insights/GetInsightByIdRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Insight](src/Basiq/Models/Insight.cs)</code>

**OnError**: <code>[ApiException](src/Basiq/Core/Exceptions/ApiException.cs)&lt;[GetInsightByIdError](src/Basiq/Errors/GetInsightByIdError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;InsightTypeItem&gt; GetInsightType(GetInsightTypeRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the definition of a single supported CDR Insight type identified by `{typeId}`.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Insights.GetInsightType(new GetInsightTypeRequest
    {
        TypeId = TypeId.AccountVerification,
    });
    // TODO: Handle 'response' of type InsightTypeItem
}
catch (ApiException<GetInsightTypeError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetInsightTypeRequest](src/Basiq/Requests/Insights/GetInsightTypeRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[InsightTypeItem](src/Basiq/Models/InsightTypeItem.cs)</code>

**OnError**: <code>[ApiException](src/Basiq/Core/Exceptions/ApiException.cs)&lt;[GetInsightTypeError](src/Basiq/Errors/GetInsightTypeError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;InsightTypesList&gt; GetInsightTypes(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the list of supported CDR Insight types and the Insight-specific input schema (`data`) each type expects.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Insights.GetInsightTypes();
    // TODO: Handle 'response' of type InsightTypesList
}
catch (ApiException<GetInsightTypesError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[InsightTypesList](src/Basiq/Models/InsightTypesList.cs)</code>

**OnError**: <code>[ApiException](src/Basiq/Core/Exceptions/ApiException.cs)&lt;[GetInsightTypesError](src/Basiq/Errors/GetInsightTypesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;InsightListResponse&gt; ListUserInsights(ListUserInsightsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a paginated list of previously generated insights for the specified user. Supports filtering by creation date and insight type. Maximum 20 insights per page.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Insights.ListUserInsights(new ListUserInsightsRequest
    {
        UserId = Guid.Parse("0a84e628-dad7-40f4-bbc0-abeb3ddd90ea"),
        Filter = "created.gteq('2025-06-16')",
    });
    // TODO: Handle 'response' of type InsightListResponse
}
catch (ApiException<ListUserInsightsError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListUserInsightsRequest](src/Basiq/Requests/Insights/ListUserInsightsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[InsightListResponse](src/Basiq/Models/InsightListResponse.cs)</code>

**OnError**: <code>[ApiException](src/Basiq/Core/Exceptions/ApiException.cs)&lt;[ListUserInsightsError](src/Basiq/Errors/ListUserInsightsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;IncomeInsightResponse&gt; VerifyIncomeInsight(VerifyIncomeInsightRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Verifies if a user's income falls within a specified range. Returns a match result with confidence level based on the user's financial data.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Insights.VerifyIncomeInsight(new VerifyIncomeInsightRequest
    {
        UserId = Guid.Parse("0a84e628-dad7-40f4-bbc0-abeb3ddd90ea"),
        Body = new IncomeInsightRequest { Income = new Income { Min = "1", Max = "10000" } },
    });
    // TODO: Handle 'response' of type IncomeInsightResponse
}
catch (ApiException<VerifyIncomeInsightError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[VerifyIncomeInsightRequest](src/Basiq/Requests/Insights/VerifyIncomeInsightRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[IncomeInsightResponse](src/Basiq/Models/IncomeInsightResponse.cs)</code>

**OnError**: <code>[ApiException](src/Basiq/Core/Exceptions/ApiException.cs)&lt;[VerifyIncomeInsightError](src/Basiq/Errors/VerifyIncomeInsightError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Jobs

> Source: [Jobs](src/Basiq/Api/Jobs.cs)

<details>
<summary><code>Task&lt;JobsResponse3&gt; GetJobs(GetJobsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves the details of an existing job. You need only supply the unique job identifier that was returned upon job creation.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Jobs.GetJobs(new GetJobsRequest { JobId = "some example string" });
    // TODO: Handle 'response' of type JobsResponse3
}
catch (ApiException<GetJobsError> ex)
{
    if (ex.Error.TryGetJobs400Error1(out var error))
    {
        // TODO: Handle 'error' of type Jobs400Error1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetJobsRequest](src/Basiq/Requests/Jobs/GetJobsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[JobsResponse3](src/Basiq/Models/AnyOf/JobsResponse3.cs)</code>

**OnError**: <code>[ApiException](src/Basiq/Core/Exceptions/ApiException.cs)&lt;[GetJobsError](src/Basiq/Errors/GetJobsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;UsersJobsResponse&gt; GetUserJobs(GetUserJobsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves the details of all existing and previous jobs associated with a user.

**Note:** This endpoint only returns jobs that are less than 7 days old.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Jobs.GetUserJobs(new GetUserJobsRequest { UserId = "some example string" });
    // TODO: Handle 'response' of type UsersJobsResponse
}
catch (ApiException<GetUserJobsError> ex)
{
    if (ex.Error.TryGetUsersJobs400Error1(out var error))
    {
        // TODO: Handle 'error' of type UsersJobs400Error1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetUserJobsRequest](src/Basiq/Requests/Jobs/GetUserJobsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[UsersJobsResponse](src/Basiq/Models/UsersJobsResponse.cs)</code>

**OnError**: <code>[ApiException](src/Basiq/Core/Exceptions/ApiException.cs)&lt;[GetUserJobsError](src/Basiq/Errors/GetUserJobsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ConnectionResponseResource&gt; PostJobMfa(PostJobMfaRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Ensure that you generate an authentication token with
scope = CLIENT_ACCESS and basiq-version = 3.0 to create this resource

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Jobs.PostJobMfa(new PostJobMfaRequest
    {
        JobId = "some example string",
        Body = new JobsMfaRequest { MfaResponse = ["some example string"] },
    });
    // TODO: Handle 'response' of type ConnectionResponseResource
}
catch (ApiException<PostJobMfaError> ex)
{
    if (ex.Error.TryGetJobsMfa400Error1(out var error))
    {
        // TODO: Handle 'error' of type JobsMfa400Error1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[PostJobMfaRequest](src/Basiq/Requests/Jobs/PostJobMfaRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ConnectionResponseResource](src/Basiq/Models/ConnectionResponseResource.cs)</code>

**OnError**: <code>[ApiException](src/Basiq/Core/Exceptions/ApiException.cs)&lt;[PostJobMfaError](src/Basiq/Errors/PostJobMfaError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Payees

> Source: [Payees](src/Basiq/Api/Payees.cs)

<details>
<summary><code>Task&lt;PayeeDetailsResponse&gt; GetPayeeDetails(GetPayeeDetailsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves detailed information for a specific payee. The response includes type-specific details based on the payee type (domestic, biller, international, or digitalWallet).

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Payees.GetPayeeDetails(new GetPayeeDetailsRequest
    {
        UserId = Guid.Parse("a1b2c3d4-e5f6-7890-abcd-ef1234567890"),
        PayeeId = Guid.Parse("00000000-0000-0000-0000-000000000000"),
    });
    // TODO: Handle 'response' of type PayeeDetailsResponse
}
catch (ApiException<GetPayeeDetailsError> ex)
{
    if (ex.Error.TryGetBadRequestErrorSchema(out var error))
    {
        // TODO: Handle 'error' of type BadRequestErrorSchema
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetPayeeDetailsRequest](src/Basiq/Requests/Payees/GetPayeeDetailsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PayeeDetailsResponse](src/Basiq/Models/PayeeDetailsResponse.cs)</code>

**OnError**: <code>[ApiException](src/Basiq/Core/Exceptions/ApiException.cs)&lt;[GetPayeeDetailsError](src/Basiq/Errors/GetPayeeDetailsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;PayeesListResponse&gt; GetPayees(GetPayeesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves a paginated list of payees for a specific user. Supports filtering by payee type, connection ID, and creation date.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Payees.GetPayees(new GetPayeesRequest
    {
        UserId = Guid.Parse("a1b2c3d4-e5f6-7890-abcd-ef1234567890"),
        Limit = 25,
        Filter = "type.eq('domestic')",
    });
    // TODO: Handle 'response' of type PayeesListResponse
}
catch (ApiException<GetPayeesError> ex)
{
    if (ex.Error.TryGetBadRequestErrorSchema(out var error))
    {
        // TODO: Handle 'error' of type BadRequestErrorSchema
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetPayeesRequest](src/Basiq/Requests/Payees/GetPayeesRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PayeesListResponse](src/Basiq/Models/PayeesListResponse.cs)</code>

**OnError**: <code>[ApiException](src/Basiq/Core/Exceptions/ApiException.cs)&lt;[GetPayeesError](src/Basiq/Errors/GetPayeesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Reports

> Source: [Reports](src/Basiq/Api/Reports.cs)

<details>
<summary><code>Task&lt;ReportsResponse&gt; Createreport(CreatereportRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Use this endpoint to create a new report. Report creation is an asynchronous task, meaning a job will be returned to let you know the progress of the report generation.
You can poll the job to know when the report has been generated. You can create any supported report (see reportTypes for a list of supported reports). Ensure you provide the necessary filters when generating a report.
All created reports, will store a copy of the data as a snapshot - this ensures that you have access to the raw data that was used to create the report.
This API allows generating reports with various filters. The `filters` field in the report request enables you to specify parameters for customizing the report content.
> 📘 Note: The report title cannot be longer than 50 characters.

> 📘 **Reminder:** When Enrich data is updated, the transactions' Enrich results won’t automatically reflect these updates. To ensure your report reflects the latest Enrich data, purge and refresh connections before generating a new report.

### Filters
Filters are used to narrow down the data included in the report. The available filters are:
- `fromDate`: Specifies the start date for the report data (format: YYYY-MM-DD).
- `toDate`: Specifies the end date for the report data (format: YYYY-MM-DD).
- `accounts`: List of account IDs to include in the report.
- `users`: List of user IDs to include in the report.
- `includeMetrics`: List of metric codes to include in the report. Supported values are specific to the report type. Rules for `includeMetrics`:
- If the array is empty (`"value": []`), all metrics will be shown.
- If no filter is provided, all metrics will be shown.
- If an array of codes is provided, only these specific metrics will be shown.
- If the value is `null`, no metrics will be shown.

- `includeGroups`: List of group codes to include in the report. Supported values are specific to the report type. Rules for `includeGroups`:
- If the array is empty (`"value": []`), all groups will be shown.
- If no filter is provided, all groups will be shown.
- If an array of codes is provided, only these specific groups will be shown.
- If the value is `null`, no groups will be shown.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Reports.Createreport(new CreatereportRequest
    {
        Body = new ReportsRequest
        {
            ReportType = "some example string",
            Title = "some example string",
            Filters = [
                new Filter { Name = "some example string", Value = DateTimeOffset.Parse("2024-01-15T00:00:00Z") },
            ],
        },
    });
    // TODO: Handle 'response' of type ReportsResponse
}
catch (ApiException<CreatereportError> ex)
{
    if (ex.Error.TryGetReportsResponse12(out var error))
    {
        // TODO: Handle 'error' of type ReportsResponse12
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CreatereportRequest](src/Basiq/Requests/Reports/CreatereportRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ReportsResponse](src/Basiq/Models/ReportsResponse.cs)</code>

**OnError**: <code>[ApiException](src/Basiq/Core/Exceptions/ApiException.cs)&lt;[CreatereportError](src/Basiq/Errors/CreatereportError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task DeleteReport(DeleteReportRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Permanently deletes a report and all associated snapshot data.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.Reports.DeleteReport(new DeleteReportRequest { Id = "some example string" });
}
catch (ApiException<DeleteReportError> ex)
{
    if (ex.Error.TryGetReports400Error21(out var error))
    {
        // TODO: Handle 'error' of type Reports400Error21
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DeleteReportRequest](src/Basiq/Requests/Reports/DeleteReportRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/Basiq/Core/Exceptions/ApiException.cs)&lt;[DeleteReportError](src/Basiq/Errors/DeleteReportError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ReportsTypesResponse&gt; ListReportTypes(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Use this endpoint to retrieve a list of supported reports. This identifies the complete list of supported reports, which can be used to create reports on.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Reports.ListReportTypes();
    // TODO: Handle 'response' of type ReportsTypesResponse
}
catch (ApiException<ListReportTypesError> ex)
{
    if (ex.Error.TryGetReportsTypes400Error1(out var error))
    {
        // TODO: Handle 'error' of type ReportsTypes400Error1
    }
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ReportsTypesResponse](src/Basiq/Models/ReportsTypesResponse.cs)</code>

**OnError**: <code>[ApiException](src/Basiq/Core/Exceptions/ApiException.cs)&lt;[ListReportTypesError](src/Basiq/Errors/ListReportTypesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ReportsResponse2&gt; Listallreports(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Use this endpoint to retrieve a list of created reports. Every created report is saved as a snapshot and can be retrieved up to 24 hours after creation.You can call the reports/types endpoint to see the list of supported reports. reports.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Reports.Listallreports();
    // TODO: Handle 'response' of type ReportsResponse2
}
catch (ApiException<ListallreportsError> ex)
{
    if (ex.Error.TryGetReports400Error1(out var error))
    {
        // TODO: Handle 'error' of type Reports400Error1
    }
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ReportsResponse2](src/Basiq/Models/ReportsResponse2.cs)</code>

**OnError**: <code>[ApiException](src/Basiq/Core/Exceptions/ApiException.cs)&lt;[ListallreportsError](src/Basiq/Errors/ListallreportsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;BinaryContent&gt; RetrieveReport(RetrieveReportRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Use this endpoint to retrieve a specific report. Ensure you check the
documentation for the schema of each report type.

| Request Header | Description |
|----------------|-----------------------------------------------------------------------------|
| Accept | Specifies the format of the response. Use `application/pdf` |

If you want to generate the PDF, make sure to change `accept`
in the CURL request to `application/pdf` for PDF generation.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Reports.RetrieveReport(new RetrieveReportRequest { Id = "some example string" });
    // TODO: Handle 'response' of type BinaryContent
}
catch (ApiException<RetrieveReportError> ex)
{
    if (ex.Error.TryGetReports400Error21(out var error))
    {
        // TODO: Handle 'error' of type Reports400Error21
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[RetrieveReportRequest](src/Basiq/Requests/Reports/RetrieveReportRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>BinaryContent</code>

**OnError**: <code>[ApiException](src/Basiq/Core/Exceptions/ApiException.cs)&lt;[RetrieveReportError](src/Basiq/Errors/RetrieveReportError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;TransactionsContainerObject&gt; RetrieveReportTransactions(RetrieveReportTransactionsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve transactions belonging to the report identified by {reportId}.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Reports.RetrieveReportTransactions(new RetrieveReportTransactionsRequest
    {
        ReportId = "some example string",
    });
    // TODO: Handle 'response' of type TransactionsContainerObject
}
catch (ApiException<RetrieveReportTransactionsError> ex)
{
    if (ex.Error.TryGetReportsTransactions400Error1(out var error))
    {
        // TODO: Handle 'error' of type ReportsTransactions400Error1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[RetrieveReportTransactionsRequest](src/Basiq/Requests/Reports/RetrieveReportTransactionsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[TransactionsContainerObject](src/Basiq/Models/TransactionsContainerObject.cs)</code>

**OnError**: <code>[ApiException](src/Basiq/Core/Exceptions/ApiException.cs)&lt;[RetrieveReportTransactionsError](src/Basiq/Errors/RetrieveReportTransactionsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ReportsTypesResponse&gt; RetrieveSpecificReportType(RetrieveSpecificReportTypeRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve information about a specific report type identified by {reportId}.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Reports.RetrieveSpecificReportType(new RetrieveSpecificReportTypeRequest
    {
        ReportTypeId = "some example string",
    });
    // TODO: Handle 'response' of type ReportsTypesResponse
}
catch (ApiException<RetrieveSpecificReportTypeError> ex)
{
    if (ex.Error.TryGetReportsTypes400Error1(out var error))
    {
        // TODO: Handle 'error' of type ReportsTypes400Error1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[RetrieveSpecificReportTypeRequest](src/Basiq/Requests/Reports/RetrieveSpecificReportTypeRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ReportsTypesResponse](src/Basiq/Models/ReportsTypesResponse.cs)</code>

**OnError**: <code>[ApiException](src/Basiq/Core/Exceptions/ApiException.cs)&lt;[RetrieveSpecificReportTypeError](src/Basiq/Errors/RetrieveSpecificReportTypeError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Statements

> Source: [Statements](src/Basiq/Api/Statements.cs)

<details>
<summary><code>Task&lt;UsersStatementsResponse&gt; CreateStatement(CreateStatementRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a new statement by uploading an official PDF bank statement or CSV file. The server will create a job that processes the following steps:
1. **verify-credentials**: Verify the file, validate the layout, and attempt to parse the statement.
2. **retrieve-accounts**: Retrieve the list of accounts and their details (account number, name, balances).
3. **retrieve-transactions**: Fetch the transactions for each account.

The status of each step can be checked by querying the Retrieve a job.

> Note that this function is not supported in sandbox environments (AU00000).

For CSV file format specifications, please contact our support team.

> 🚧
>
> Note that the time it takes to complete the processes above will vary depending on the volume of data along with the complexity of the bank statement. As a rough guide this entire process could take anywhere between 10 - 30 secs. Upload multiple statements in parallel to provide the best user experience

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Statements.CreateStatement(new CreateStatementRequest
    {
        UserId = "some example string",
        InstitutionId = "some example string",
        Statement = Array.Empty<byte>(),
    });
    // TODO: Handle 'response' of type UsersStatementsResponse
}
catch (ApiException<CreateStatementError> ex)
{
    if (ex.Error.TryGetUsersStatements400Error1(out var error))
    {
        // TODO: Handle 'error' of type UsersStatements400Error1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CreateStatementRequest](src/Basiq/Requests/Statements/CreateStatementRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[UsersStatementsResponse](src/Basiq/Models/UsersStatementsResponse.cs)</code>

**OnError**: <code>[ApiException](src/Basiq/Core/Exceptions/ApiException.cs)&lt;[CreateStatementError](src/Basiq/Errors/CreateStatementError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Transactions

> Source: [Transactions](src/Basiq/Api/Transactions.cs)

<details>
<summary><code>Task&lt;UsersTransactionsResponse&gt; GetTransaction(GetTransactionRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve an existing transaction

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Transactions.GetTransaction(new GetTransactionRequest
    {
        UserId = "some example string",
        TransactionId = "some example string",
    });
    // TODO: Handle 'response' of type UsersTransactionsResponse
}
catch (ApiException<GetTransactionError> ex)
{
    if (ex.Error.TryGetUsersTransactions400Error1(out var error))
    {
        // TODO: Handle 'error' of type UsersTransactions400Error1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetTransactionRequest](src/Basiq/Requests/Transactions/GetTransactionRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[UsersTransactionsResponse](src/Basiq/Models/UsersTransactionsResponse.cs)</code>

**OnError**: <code>[ApiException](src/Basiq/Core/Exceptions/ApiException.cs)&lt;[GetTransactionError](src/Basiq/Errors/GetTransactionError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;TransactionsContainerObjectConnectTransactionsApi&gt; GetTransactions(GetTransactionsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List all transactions belonging to a specified user

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Transactions.GetTransactions(new GetTransactionsRequest
    {
        UserId = "some example string",
    });
    // TODO: Handle 'response' of type TransactionsContainerObjectConnectTransactionsApi
}
catch (ApiException<GetTransactionsError> ex)
{
    if (ex.Error.TryGetUsersTransactions400Error1(out var error))
    {
        // TODO: Handle 'error' of type UsersTransactions400Error1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetTransactionsRequest](src/Basiq/Requests/Transactions/GetTransactionsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[TransactionsContainerObjectConnectTransactionsApi](src/Basiq/Models/TransactionsContainerObjectConnectTransactionsApi.cs)</code>

**OnError**: <code>[ApiException](src/Basiq/Core/Exceptions/ApiException.cs)&lt;[GetTransactionsError](src/Basiq/Errors/GetTransactionsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Users

> Source: [Users](src/Basiq/Api/Users.cs)

<details>
<summary><code>Task&lt;UserPostResponse&gt; CreateUser(CreateUserRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a new Basiq user object

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Users.CreateUser(new CreateUserRequest
    {
        Body = new UsersRequest
        {
            Email = "gavin@hooli.com",
            Mobile = "+61410888666",
            FirstName = "Gavin",
            MiddleName = "",
            LastName = "Belson",
        },
    });
    // TODO: Handle 'response' of type UserPostResponse
}
catch (ApiException<CreateUserError> ex)
{
    if (ex.Error.TryGetUsers400Error1(out var error))
    {
        // TODO: Handle 'error' of type Users400Error1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CreateUserRequest](src/Basiq/Requests/Users/CreateUserRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[UserPostResponse](src/Basiq/Models/UserPostResponse.cs)</code>

**OnError**: <code>[ApiException](src/Basiq/Core/Exceptions/ApiException.cs)&lt;[CreateUserError](src/Basiq/Errors/CreateUserError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task DeleteUser(DeleteUserRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Permanently deletes a user along with all of their associated connection details. All data associated with this user will deleted. You need only supply the unique user identifier that was returned upon user creation.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.Users.DeleteUser(new DeleteUserRequest { UserId = "some example string" });
}
catch (ApiException<DeleteUserError> ex)
{
    if (ex.Error.TryGetUsers400Error1(out var error))
    {
        // TODO: Handle 'error' of type Users400Error1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DeleteUserRequest](src/Basiq/Requests/Users/DeleteUserRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/Basiq/Core/Exceptions/ApiException.cs)&lt;[DeleteUserError](src/Basiq/Errors/DeleteUserError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;UserGetResponse&gt; GetUser(GetUserRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves the details of an existing user. You need only supply the unique user identifier that was returned upon user creation.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Users.GetUser(new GetUserRequest { UserId = "some example string" });
    // TODO: Handle 'response' of type UserGetResponse
}
catch (ApiException<GetUserError> ex)
{
    if (ex.Error.TryGetUsers400Error1(out var error))
    {
        // TODO: Handle 'error' of type Users400Error1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetUserRequest](src/Basiq/Requests/Users/GetUserRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[UserGetResponse](src/Basiq/Models/UserGetResponse.cs)</code>

**OnError**: <code>[ApiException](src/Basiq/Core/Exceptions/ApiException.cs)&lt;[GetUserError](src/Basiq/Errors/GetUserError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;UserPostResponse&gt; UpdateUser(UpdateUserRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates the specified user by setting the values of the parameters passed. Any parameters not provided will be left unchanged.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Users.UpdateUser(new UpdateUserRequest
    {
        UserId = "some example string",
        Body = new UsersRequest1(),
    });
    // TODO: Handle 'response' of type UserPostResponse
}
catch (ApiException<UpdateUserError> ex)
{
    if (ex.Error.TryGetUsers400Error1(out var error))
    {
        // TODO: Handle 'error' of type Users400Error1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[UpdateUserRequest](src/Basiq/Requests/Users/UpdateUserRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[UserPostResponse](src/Basiq/Models/UserPostResponse.cs)</code>

**OnError**: <code>[ApiException](src/Basiq/Core/Exceptions/ApiException.cs)&lt;[UpdateUserError](src/Basiq/Errors/UpdateUserError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## WebhooksApi

> Source: [WebhooksApi](src/Basiq/Api/WebhooksApi.cs)

<details>
<summary><code>Task&lt;NotificationsWebhooksResponse&gt; AddWebhook(AddWebhookRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.WebhooksApi.AddWebhook(new AddWebhookRequest
    {
        Body = new NotificationsWebhooksRequest
        {
            Name = "My General Webhook",
            Description = "Webhook to catch all events",
            Url = "https://piper.com/basiq-messages/",
            SubscribedEvents = ["user.created"],
        },
    });
    // TODO: Handle 'response' of type NotificationsWebhooksResponse
}
catch (ApiException<AddWebhookError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[AddWebhookRequest](src/Basiq/Requests/WebhooksApi/AddWebhookRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[NotificationsWebhooksResponse](src/Basiq/Models/NotificationsWebhooksResponse.cs)</code>

**OnError**: <code>[ApiException](src/Basiq/Core/Exceptions/ApiException.cs)&lt;[AddWebhookError](src/Basiq/Errors/AddWebhookError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task DeleteWebhook(DeleteWebhookRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.WebhooksApi.DeleteWebhook(new DeleteWebhookRequest
    {
        WebhookId = "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    });
}
catch (ApiException<DeleteWebhookError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DeleteWebhookRequest](src/Basiq/Requests/WebhooksApi/DeleteWebhookRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/Basiq/Core/Exceptions/ApiException.cs)&lt;[DeleteWebhookError](src/Basiq/Errors/DeleteWebhookError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;NotificationsWebhooksResponse&gt; GetWebhook(GetWebhookRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.WebhooksApi.GetWebhook(new GetWebhookRequest
    {
        WebhookId = "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    });
    // TODO: Handle 'response' of type NotificationsWebhooksResponse
}
catch (ApiException<GetWebhookError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetWebhookRequest](src/Basiq/Requests/WebhooksApi/GetWebhookRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[NotificationsWebhooksResponse](src/Basiq/Models/NotificationsWebhooksResponse.cs)</code>

**OnError**: <code>[ApiException](src/Basiq/Core/Exceptions/ApiException.cs)&lt;[GetWebhookError](src/Basiq/Errors/GetWebhookError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;NotificationsWebhooksMessagesResponse1&gt; GetWebhookMessage(GetWebhookMessageRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.WebhooksApi.GetWebhookMessage(new GetWebhookMessageRequest
    {
        WebhookId = "3fa85f64-5717-4562-b3fc-2c963f66afa6",
        MessageId = "some example string",
    });
    // TODO: Handle 'response' of type NotificationsWebhooksMessagesResponse1
}
catch (ApiException<GetWebhookMessageError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetWebhookMessageRequest](src/Basiq/Requests/WebhooksApi/GetWebhookMessageRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[NotificationsWebhooksMessagesResponse1](src/Basiq/Models/NotificationsWebhooksMessagesResponse1.cs)</code>

**OnError**: <code>[ApiException](src/Basiq/Core/Exceptions/ApiException.cs)&lt;[GetWebhookMessageError](src/Basiq/Errors/GetWebhookMessageError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;WebhookStats&gt; GetWebhookStats(GetWebhookStatsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.WebhooksApi.GetWebhookStats(new GetWebhookStatsRequest
    {
        WebhookId = "d408cfec-b881-43ee-b5bd-ccea64896ed4",
    });
    // TODO: Handle 'response' of type WebhookStats
}
catch (ApiException<GetWebhookStatsError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetWebhookStatsRequest](src/Basiq/Requests/WebhooksApi/GetWebhookStatsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[WebhookStats](src/Basiq/Models/WebhookStats.cs)</code>

**OnError**: <code>[ApiException](src/Basiq/Core/Exceptions/ApiException.cs)&lt;[GetWebhookStatsError](src/Basiq/Errors/GetWebhookStatsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;NotificationsWebhooksResponse1&gt; ListAppWebhooks(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.WebhooksApi.ListAppWebhooks();
    // TODO: Handle 'response' of type NotificationsWebhooksResponse1
}
catch (ApiException<ListAppWebhooksError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[NotificationsWebhooksResponse1](src/Basiq/Models/NotificationsWebhooksResponse1.cs)</code>

**OnError**: <code>[ApiException](src/Basiq/Core/Exceptions/ApiException.cs)&lt;[ListAppWebhooksError](src/Basiq/Errors/ListAppWebhooksError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;NotificationsWebhooksMessagesResponse&gt; ListMessages(ListMessagesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.WebhooksApi.ListMessages(new ListMessagesRequest
    {
        WebhookId = "3fa85f64-5717-4562-b3fc-2c963f66afa6",
        Limit = 10,
    });
    // TODO: Handle 'response' of type NotificationsWebhooksMessagesResponse
}
catch (ApiException<ListMessagesError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListMessagesRequest](src/Basiq/Requests/WebhooksApi/ListMessagesRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[NotificationsWebhooksMessagesResponse](src/Basiq/Models/NotificationsWebhooksMessagesResponse.cs)</code>

**OnError**: <code>[ApiException](src/Basiq/Core/Exceptions/ApiException.cs)&lt;[ListMessagesError](src/Basiq/Errors/ListMessagesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task TestMessage(TestMessageRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.WebhooksApi.TestMessage(new TestMessageRequest
    {
        Body = new NotificationsMessagesTestRequest { EventTypeId = "user.created", Text = "My test message" },
    });
}
catch (ApiException<TestMessageError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[TestMessageRequest](src/Basiq/Requests/WebhooksApi/TestMessageRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/Basiq/Core/Exceptions/ApiException.cs)&lt;[TestMessageError](src/Basiq/Errors/TestMessageError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;NotificationsWebhooksResponse&gt; UpdateWebhook(UpdateWebhookRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.WebhooksApi.UpdateWebhook(new UpdateWebhookRequest
    {
        WebhookId = "3fa85f64-5717-4562-b3fc-2c963f66afa6",
        Body = new NotificationsWebhooksRequest
        {
            Name = "My General Webhook",
            Description = "Webhook to catch all events",
            Url = "https://piper.com/basiq-messages/",
            SubscribedEvents = ["user.created"],
        },
    });
    // TODO: Handle 'response' of type NotificationsWebhooksResponse
}
catch (ApiException<UpdateWebhookError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[UpdateWebhookRequest](src/Basiq/Requests/WebhooksApi/UpdateWebhookRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[NotificationsWebhooksResponse](src/Basiq/Models/NotificationsWebhooksResponse.cs)</code>

**OnError**: <code>[ApiException](src/Basiq/Core/Exceptions/ApiException.cs)&lt;[UpdateWebhookError](src/Basiq/Errors/UpdateWebhookError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

