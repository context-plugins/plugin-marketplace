# Reference

Every operation below is shown in its throwing form. On an error status it throws `ApiException<TError>` — the status code, headers, content type and the operation's error type, `RawError` (the raw body) when the spec declares none — and where an operation offers an `…AsResult` sibling, that sibling returns `ApiResult<TResponse, TError>` instead. A request that produces no usable response surfaces as `SdkConnectionException` or `SdkTimeoutException`, a body that does not match the documented response type as `ResponseDeserializationException`, and a required credential that is not configured, or one that cannot be applied, as `AuthSchemeException`; all of them derive from `SdkException` and name the failed call. See [README → Error Handling](README.md#error-handling).

> Source: [GoogleCloudEventarcClient](src/GoogleCloudEventarc/GoogleCloudEventarcClient.cs)

<details>
<summary><code>Task&lt;GoogleLongrunningOperation&gt; EventarcProjectsLocationsChannelConnectionsCreate(EventarcProjectsLocationsChannelConnectionsCreateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a new ChannelConnection in a particular project and location.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.EventarcProjectsLocationsChannelConnectionsCreate(
        new EventarcProjectsLocationsChannelConnectionsCreateRequest
        {
            ProjectsId = "some example string",
            LocationsId = "some example string",
            Body = new ChannelConnection(),
        });
    // TODO: Handle 'response' of type GoogleLongrunningOperation
}
catch (ApiException<EventarcProjectsLocationsChannelConnectionsCreateError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[EventarcProjectsLocationsChannelConnectionsCreateRequest](src/GoogleCloudEventarc/Requests/EventarcProjectsLocationsChannelConnectionsCreateRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleLongrunningOperation](src/GoogleCloudEventarc/Models/GoogleLongrunningOperation.cs)</code>

**OnError**: <code>[ApiException](src/GoogleCloudEventarc/Core/Exceptions/ApiException.cs)&lt;[EventarcProjectsLocationsChannelConnectionsCreateError](src/GoogleCloudEventarc/Errors/EventarcProjectsLocationsChannelConnectionsCreateError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleLongrunningOperation&gt; EventarcProjectsLocationsChannelConnectionsDelete(EventarcProjectsLocationsChannelConnectionsDeleteRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete a single ChannelConnection.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.EventarcProjectsLocationsChannelConnectionsDelete(
        new EventarcProjectsLocationsChannelConnectionsDeleteRequest
        {
            ProjectsId = "some example string",
            LocationsId = "some example string",
            ChannelConnectionsId = "some example string",
        });
    // TODO: Handle 'response' of type GoogleLongrunningOperation
}
catch (ApiException<EventarcProjectsLocationsChannelConnectionsDeleteError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[EventarcProjectsLocationsChannelConnectionsDeleteRequest](src/GoogleCloudEventarc/Requests/EventarcProjectsLocationsChannelConnectionsDeleteRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleLongrunningOperation](src/GoogleCloudEventarc/Models/GoogleLongrunningOperation.cs)</code>

**OnError**: <code>[ApiException](src/GoogleCloudEventarc/Core/Exceptions/ApiException.cs)&lt;[EventarcProjectsLocationsChannelConnectionsDeleteError](src/GoogleCloudEventarc/Errors/EventarcProjectsLocationsChannelConnectionsDeleteError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ChannelConnection&gt; EventarcProjectsLocationsChannelConnectionsGet(EventarcProjectsLocationsChannelConnectionsGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a single ChannelConnection.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.EventarcProjectsLocationsChannelConnectionsGet(
        new EventarcProjectsLocationsChannelConnectionsGetRequest
        {
            ProjectsId = "some example string",
            LocationsId = "some example string",
            ChannelConnectionsId = "some example string",
        });
    // TODO: Handle 'response' of type ChannelConnection
}
catch (ApiException<EventarcProjectsLocationsChannelConnectionsGetError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[EventarcProjectsLocationsChannelConnectionsGetRequest](src/GoogleCloudEventarc/Requests/EventarcProjectsLocationsChannelConnectionsGetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ChannelConnection](src/GoogleCloudEventarc/Models/ChannelConnection.cs)</code>

**OnError**: <code>[ApiException](src/GoogleCloudEventarc/Core/Exceptions/ApiException.cs)&lt;[EventarcProjectsLocationsChannelConnectionsGetError](src/GoogleCloudEventarc/Errors/EventarcProjectsLocationsChannelConnectionsGetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Policy&gt; EventarcProjectsLocationsChannelConnectionsGetIamPolicy(EventarcProjectsLocationsChannelConnectionsGetIamPolicyRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.EventarcProjectsLocationsChannelConnectionsGetIamPolicy(
        new EventarcProjectsLocationsChannelConnectionsGetIamPolicyRequest
        {
            ProjectsId = "some example string",
            LocationsId = "some example string",
            ChannelConnectionsId = "some example string",
        });
    // TODO: Handle 'response' of type Policy
}
catch (ApiException<EventarcProjectsLocationsChannelConnectionsGetIamPolicyError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[EventarcProjectsLocationsChannelConnectionsGetIamPolicyRequest](src/GoogleCloudEventarc/Requests/EventarcProjectsLocationsChannelConnectionsGetIamPolicyRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Policy](src/GoogleCloudEventarc/Models/Policy.cs)</code>

**OnError**: <code>[ApiException](src/GoogleCloudEventarc/Core/Exceptions/ApiException.cs)&lt;[EventarcProjectsLocationsChannelConnectionsGetIamPolicyError](src/GoogleCloudEventarc/Errors/EventarcProjectsLocationsChannelConnectionsGetIamPolicyError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ListChannelConnectionsResponse&gt; EventarcProjectsLocationsChannelConnectionsList(EventarcProjectsLocationsChannelConnectionsListRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List channel connections.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.EventarcProjectsLocationsChannelConnectionsList(
        new EventarcProjectsLocationsChannelConnectionsListRequest
        {
            ProjectsId = "some example string",
            LocationsId = "some example string",
        });
    // TODO: Handle 'response' of type ListChannelConnectionsResponse
}
catch (ApiException<EventarcProjectsLocationsChannelConnectionsListError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[EventarcProjectsLocationsChannelConnectionsListRequest](src/GoogleCloudEventarc/Requests/EventarcProjectsLocationsChannelConnectionsListRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ListChannelConnectionsResponse](src/GoogleCloudEventarc/Models/ListChannelConnectionsResponse.cs)</code>

**OnError**: <code>[ApiException](src/GoogleCloudEventarc/Core/Exceptions/ApiException.cs)&lt;[EventarcProjectsLocationsChannelConnectionsListError](src/GoogleCloudEventarc/Errors/EventarcProjectsLocationsChannelConnectionsListError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Policy&gt; EventarcProjectsLocationsChannelConnectionsSetIamPolicy(EventarcProjectsLocationsChannelConnectionsSetIamPolicyRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.EventarcProjectsLocationsChannelConnectionsSetIamPolicy(
        new EventarcProjectsLocationsChannelConnectionsSetIamPolicyRequest
        {
            ProjectsId = "some example string",
            LocationsId = "some example string",
            ChannelConnectionsId = "some example string",
            Body = new SetIamPolicyRequest(),
        });
    // TODO: Handle 'response' of type Policy
}
catch (ApiException<EventarcProjectsLocationsChannelConnectionsSetIamPolicyError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[EventarcProjectsLocationsChannelConnectionsSetIamPolicyRequest](src/GoogleCloudEventarc/Requests/EventarcProjectsLocationsChannelConnectionsSetIamPolicyRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Policy](src/GoogleCloudEventarc/Models/Policy.cs)</code>

**OnError**: <code>[ApiException](src/GoogleCloudEventarc/Core/Exceptions/ApiException.cs)&lt;[EventarcProjectsLocationsChannelConnectionsSetIamPolicyError](src/GoogleCloudEventarc/Errors/EventarcProjectsLocationsChannelConnectionsSetIamPolicyError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;TestIamPermissionsResponse&gt; EventarcProjectsLocationsChannelConnectionsTestIamPermissions(EventarcProjectsLocationsChannelConnectionsTestIamPermissionsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.EventarcProjectsLocationsChannelConnectionsTestIamPermissions(
        new EventarcProjectsLocationsChannelConnectionsTestIamPermissionsRequest
        {
            ProjectsId = "some example string",
            LocationsId = "some example string",
            ChannelConnectionsId = "some example string",
            Body = new TestIamPermissionsRequest(),
        });
    // TODO: Handle 'response' of type TestIamPermissionsResponse
}
catch (ApiException<EventarcProjectsLocationsChannelConnectionsTestIamPermissionsError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[EventarcProjectsLocationsChannelConnectionsTestIamPermissionsRequest](src/GoogleCloudEventarc/Requests/EventarcProjectsLocationsChannelConnectionsTestIamPermissionsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[TestIamPermissionsResponse](src/GoogleCloudEventarc/Models/TestIamPermissionsResponse.cs)</code>

**OnError**: <code>[ApiException](src/GoogleCloudEventarc/Core/Exceptions/ApiException.cs)&lt;[EventarcProjectsLocationsChannelConnectionsTestIamPermissionsError](src/GoogleCloudEventarc/Errors/EventarcProjectsLocationsChannelConnectionsTestIamPermissionsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleLongrunningOperation&gt; EventarcProjectsLocationsChannelsCreate(EventarcProjectsLocationsChannelsCreateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a new channel in a particular project and location.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.EventarcProjectsLocationsChannelsCreate(
        new EventarcProjectsLocationsChannelsCreateRequest
        {
            ProjectsId = "some example string",
            LocationsId = "some example string",
            Body = new Channel(),
        });
    // TODO: Handle 'response' of type GoogleLongrunningOperation
}
catch (ApiException<EventarcProjectsLocationsChannelsCreateError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[EventarcProjectsLocationsChannelsCreateRequest](src/GoogleCloudEventarc/Requests/EventarcProjectsLocationsChannelsCreateRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleLongrunningOperation](src/GoogleCloudEventarc/Models/GoogleLongrunningOperation.cs)</code>

**OnError**: <code>[ApiException](src/GoogleCloudEventarc/Core/Exceptions/ApiException.cs)&lt;[EventarcProjectsLocationsChannelsCreateError](src/GoogleCloudEventarc/Errors/EventarcProjectsLocationsChannelsCreateError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleLongrunningOperation&gt; EventarcProjectsLocationsChannelsDelete(EventarcProjectsLocationsChannelsDeleteRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete a single channel.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.EventarcProjectsLocationsChannelsDelete(
        new EventarcProjectsLocationsChannelsDeleteRequest
        {
            ProjectsId = "some example string",
            LocationsId = "some example string",
            ChannelsId = "some example string",
        });
    // TODO: Handle 'response' of type GoogleLongrunningOperation
}
catch (ApiException<EventarcProjectsLocationsChannelsDeleteError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[EventarcProjectsLocationsChannelsDeleteRequest](src/GoogleCloudEventarc/Requests/EventarcProjectsLocationsChannelsDeleteRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleLongrunningOperation](src/GoogleCloudEventarc/Models/GoogleLongrunningOperation.cs)</code>

**OnError**: <code>[ApiException](src/GoogleCloudEventarc/Core/Exceptions/ApiException.cs)&lt;[EventarcProjectsLocationsChannelsDeleteError](src/GoogleCloudEventarc/Errors/EventarcProjectsLocationsChannelsDeleteError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Channel&gt; EventarcProjectsLocationsChannelsGet(EventarcProjectsLocationsChannelsGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a single Channel.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.EventarcProjectsLocationsChannelsGet(new EventarcProjectsLocationsChannelsGetRequest
    {
        ProjectsId = "some example string",
        LocationsId = "some example string",
        ChannelsId = "some example string",
    });
    // TODO: Handle 'response' of type Channel
}
catch (ApiException<EventarcProjectsLocationsChannelsGetError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[EventarcProjectsLocationsChannelsGetRequest](src/GoogleCloudEventarc/Requests/EventarcProjectsLocationsChannelsGetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Channel](src/GoogleCloudEventarc/Models/Channel.cs)</code>

**OnError**: <code>[ApiException](src/GoogleCloudEventarc/Core/Exceptions/ApiException.cs)&lt;[EventarcProjectsLocationsChannelsGetError](src/GoogleCloudEventarc/Errors/EventarcProjectsLocationsChannelsGetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Policy&gt; EventarcProjectsLocationsChannelsGetIamPolicy(EventarcProjectsLocationsChannelsGetIamPolicyRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.EventarcProjectsLocationsChannelsGetIamPolicy(
        new EventarcProjectsLocationsChannelsGetIamPolicyRequest
        {
            ProjectsId = "some example string",
            LocationsId = "some example string",
            ChannelsId = "some example string",
        });
    // TODO: Handle 'response' of type Policy
}
catch (ApiException<EventarcProjectsLocationsChannelsGetIamPolicyError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[EventarcProjectsLocationsChannelsGetIamPolicyRequest](src/GoogleCloudEventarc/Requests/EventarcProjectsLocationsChannelsGetIamPolicyRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Policy](src/GoogleCloudEventarc/Models/Policy.cs)</code>

**OnError**: <code>[ApiException](src/GoogleCloudEventarc/Core/Exceptions/ApiException.cs)&lt;[EventarcProjectsLocationsChannelsGetIamPolicyError](src/GoogleCloudEventarc/Errors/EventarcProjectsLocationsChannelsGetIamPolicyError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ListChannelsResponse&gt; EventarcProjectsLocationsChannelsList(EventarcProjectsLocationsChannelsListRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List channels.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.EventarcProjectsLocationsChannelsList(new EventarcProjectsLocationsChannelsListRequest
    {
        ProjectsId = "some example string",
        LocationsId = "some example string",
    });
    // TODO: Handle 'response' of type ListChannelsResponse
}
catch (ApiException<EventarcProjectsLocationsChannelsListError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[EventarcProjectsLocationsChannelsListRequest](src/GoogleCloudEventarc/Requests/EventarcProjectsLocationsChannelsListRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ListChannelsResponse](src/GoogleCloudEventarc/Models/ListChannelsResponse.cs)</code>

**OnError**: <code>[ApiException](src/GoogleCloudEventarc/Core/Exceptions/ApiException.cs)&lt;[EventarcProjectsLocationsChannelsListError](src/GoogleCloudEventarc/Errors/EventarcProjectsLocationsChannelsListError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleLongrunningOperation&gt; EventarcProjectsLocationsChannelsPatch(EventarcProjectsLocationsChannelsPatchRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update a single channel.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.EventarcProjectsLocationsChannelsPatch(new EventarcProjectsLocationsChannelsPatchRequest
    {
        ProjectsId = "some example string",
        LocationsId = "some example string",
        ChannelsId = "some example string",
        Body = new Channel(),
    });
    // TODO: Handle 'response' of type GoogleLongrunningOperation
}
catch (ApiException<EventarcProjectsLocationsChannelsPatchError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[EventarcProjectsLocationsChannelsPatchRequest](src/GoogleCloudEventarc/Requests/EventarcProjectsLocationsChannelsPatchRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleLongrunningOperation](src/GoogleCloudEventarc/Models/GoogleLongrunningOperation.cs)</code>

**OnError**: <code>[ApiException](src/GoogleCloudEventarc/Core/Exceptions/ApiException.cs)&lt;[EventarcProjectsLocationsChannelsPatchError](src/GoogleCloudEventarc/Errors/EventarcProjectsLocationsChannelsPatchError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Policy&gt; EventarcProjectsLocationsChannelsSetIamPolicy(EventarcProjectsLocationsChannelsSetIamPolicyRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.EventarcProjectsLocationsChannelsSetIamPolicy(
        new EventarcProjectsLocationsChannelsSetIamPolicyRequest
        {
            ProjectsId = "some example string",
            LocationsId = "some example string",
            ChannelsId = "some example string",
            Body = new SetIamPolicyRequest(),
        });
    // TODO: Handle 'response' of type Policy
}
catch (ApiException<EventarcProjectsLocationsChannelsSetIamPolicyError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[EventarcProjectsLocationsChannelsSetIamPolicyRequest](src/GoogleCloudEventarc/Requests/EventarcProjectsLocationsChannelsSetIamPolicyRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Policy](src/GoogleCloudEventarc/Models/Policy.cs)</code>

**OnError**: <code>[ApiException](src/GoogleCloudEventarc/Core/Exceptions/ApiException.cs)&lt;[EventarcProjectsLocationsChannelsSetIamPolicyError](src/GoogleCloudEventarc/Errors/EventarcProjectsLocationsChannelsSetIamPolicyError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;TestIamPermissionsResponse&gt; EventarcProjectsLocationsChannelsTestIamPermissions(EventarcProjectsLocationsChannelsTestIamPermissionsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.EventarcProjectsLocationsChannelsTestIamPermissions(
        new EventarcProjectsLocationsChannelsTestIamPermissionsRequest
        {
            ProjectsId = "some example string",
            LocationsId = "some example string",
            ChannelsId = "some example string",
            Body = new TestIamPermissionsRequest(),
        });
    // TODO: Handle 'response' of type TestIamPermissionsResponse
}
catch (ApiException<EventarcProjectsLocationsChannelsTestIamPermissionsError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[EventarcProjectsLocationsChannelsTestIamPermissionsRequest](src/GoogleCloudEventarc/Requests/EventarcProjectsLocationsChannelsTestIamPermissionsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[TestIamPermissionsResponse](src/GoogleCloudEventarc/Models/TestIamPermissionsResponse.cs)</code>

**OnError**: <code>[ApiException](src/GoogleCloudEventarc/Core/Exceptions/ApiException.cs)&lt;[EventarcProjectsLocationsChannelsTestIamPermissionsError](src/GoogleCloudEventarc/Errors/EventarcProjectsLocationsChannelsTestIamPermissionsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleLongrunningOperation&gt; EventarcProjectsLocationsEnrollmentsCreate(EventarcProjectsLocationsEnrollmentsCreateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a new Enrollment in a particular project and location.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.EventarcProjectsLocationsEnrollmentsCreate(
        new EventarcProjectsLocationsEnrollmentsCreateRequest
        {
            ProjectsId = "some example string",
            LocationsId = "some example string",
            Body = new Enrollment(),
        });
    // TODO: Handle 'response' of type GoogleLongrunningOperation
}
catch (ApiException<EventarcProjectsLocationsEnrollmentsCreateError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[EventarcProjectsLocationsEnrollmentsCreateRequest](src/GoogleCloudEventarc/Requests/EventarcProjectsLocationsEnrollmentsCreateRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleLongrunningOperation](src/GoogleCloudEventarc/Models/GoogleLongrunningOperation.cs)</code>

**OnError**: <code>[ApiException](src/GoogleCloudEventarc/Core/Exceptions/ApiException.cs)&lt;[EventarcProjectsLocationsEnrollmentsCreateError](src/GoogleCloudEventarc/Errors/EventarcProjectsLocationsEnrollmentsCreateError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleLongrunningOperation&gt; EventarcProjectsLocationsEnrollmentsDelete(EventarcProjectsLocationsEnrollmentsDeleteRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete a single Enrollment.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.EventarcProjectsLocationsEnrollmentsDelete(
        new EventarcProjectsLocationsEnrollmentsDeleteRequest
        {
            ProjectsId = "some example string",
            LocationsId = "some example string",
            EnrollmentsId = "some example string",
        });
    // TODO: Handle 'response' of type GoogleLongrunningOperation
}
catch (ApiException<EventarcProjectsLocationsEnrollmentsDeleteError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[EventarcProjectsLocationsEnrollmentsDeleteRequest](src/GoogleCloudEventarc/Requests/EventarcProjectsLocationsEnrollmentsDeleteRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleLongrunningOperation](src/GoogleCloudEventarc/Models/GoogleLongrunningOperation.cs)</code>

**OnError**: <code>[ApiException](src/GoogleCloudEventarc/Core/Exceptions/ApiException.cs)&lt;[EventarcProjectsLocationsEnrollmentsDeleteError](src/GoogleCloudEventarc/Errors/EventarcProjectsLocationsEnrollmentsDeleteError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Enrollment&gt; EventarcProjectsLocationsEnrollmentsGet(EventarcProjectsLocationsEnrollmentsGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a single Enrollment.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.EventarcProjectsLocationsEnrollmentsGet(
        new EventarcProjectsLocationsEnrollmentsGetRequest
        {
            ProjectsId = "some example string",
            LocationsId = "some example string",
            EnrollmentsId = "some example string",
        });
    // TODO: Handle 'response' of type Enrollment
}
catch (ApiException<EventarcProjectsLocationsEnrollmentsGetError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[EventarcProjectsLocationsEnrollmentsGetRequest](src/GoogleCloudEventarc/Requests/EventarcProjectsLocationsEnrollmentsGetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Enrollment](src/GoogleCloudEventarc/Models/Enrollment.cs)</code>

**OnError**: <code>[ApiException](src/GoogleCloudEventarc/Core/Exceptions/ApiException.cs)&lt;[EventarcProjectsLocationsEnrollmentsGetError](src/GoogleCloudEventarc/Errors/EventarcProjectsLocationsEnrollmentsGetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Policy&gt; EventarcProjectsLocationsEnrollmentsGetIamPolicy(EventarcProjectsLocationsEnrollmentsGetIamPolicyRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.EventarcProjectsLocationsEnrollmentsGetIamPolicy(
        new EventarcProjectsLocationsEnrollmentsGetIamPolicyRequest
        {
            ProjectsId = "some example string",
            LocationsId = "some example string",
            EnrollmentsId = "some example string",
        });
    // TODO: Handle 'response' of type Policy
}
catch (ApiException<EventarcProjectsLocationsEnrollmentsGetIamPolicyError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[EventarcProjectsLocationsEnrollmentsGetIamPolicyRequest](src/GoogleCloudEventarc/Requests/EventarcProjectsLocationsEnrollmentsGetIamPolicyRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Policy](src/GoogleCloudEventarc/Models/Policy.cs)</code>

**OnError**: <code>[ApiException](src/GoogleCloudEventarc/Core/Exceptions/ApiException.cs)&lt;[EventarcProjectsLocationsEnrollmentsGetIamPolicyError](src/GoogleCloudEventarc/Errors/EventarcProjectsLocationsEnrollmentsGetIamPolicyError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ListEnrollmentsResponse&gt; EventarcProjectsLocationsEnrollmentsList(EventarcProjectsLocationsEnrollmentsListRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List Enrollments.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.EventarcProjectsLocationsEnrollmentsList(
        new EventarcProjectsLocationsEnrollmentsListRequest
        {
            ProjectsId = "some example string",
            LocationsId = "some example string",
        });
    // TODO: Handle 'response' of type ListEnrollmentsResponse
}
catch (ApiException<EventarcProjectsLocationsEnrollmentsListError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[EventarcProjectsLocationsEnrollmentsListRequest](src/GoogleCloudEventarc/Requests/EventarcProjectsLocationsEnrollmentsListRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ListEnrollmentsResponse](src/GoogleCloudEventarc/Models/ListEnrollmentsResponse.cs)</code>

**OnError**: <code>[ApiException](src/GoogleCloudEventarc/Core/Exceptions/ApiException.cs)&lt;[EventarcProjectsLocationsEnrollmentsListError](src/GoogleCloudEventarc/Errors/EventarcProjectsLocationsEnrollmentsListError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleLongrunningOperation&gt; EventarcProjectsLocationsEnrollmentsPatch(EventarcProjectsLocationsEnrollmentsPatchRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update a single Enrollment.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.EventarcProjectsLocationsEnrollmentsPatch(
        new EventarcProjectsLocationsEnrollmentsPatchRequest
        {
            ProjectsId = "some example string",
            LocationsId = "some example string",
            EnrollmentsId = "some example string",
            Body = new Enrollment(),
        });
    // TODO: Handle 'response' of type GoogleLongrunningOperation
}
catch (ApiException<EventarcProjectsLocationsEnrollmentsPatchError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[EventarcProjectsLocationsEnrollmentsPatchRequest](src/GoogleCloudEventarc/Requests/EventarcProjectsLocationsEnrollmentsPatchRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleLongrunningOperation](src/GoogleCloudEventarc/Models/GoogleLongrunningOperation.cs)</code>

**OnError**: <code>[ApiException](src/GoogleCloudEventarc/Core/Exceptions/ApiException.cs)&lt;[EventarcProjectsLocationsEnrollmentsPatchError](src/GoogleCloudEventarc/Errors/EventarcProjectsLocationsEnrollmentsPatchError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Policy&gt; EventarcProjectsLocationsEnrollmentsSetIamPolicy(EventarcProjectsLocationsEnrollmentsSetIamPolicyRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.EventarcProjectsLocationsEnrollmentsSetIamPolicy(
        new EventarcProjectsLocationsEnrollmentsSetIamPolicyRequest
        {
            ProjectsId = "some example string",
            LocationsId = "some example string",
            EnrollmentsId = "some example string",
            Body = new SetIamPolicyRequest(),
        });
    // TODO: Handle 'response' of type Policy
}
catch (ApiException<EventarcProjectsLocationsEnrollmentsSetIamPolicyError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[EventarcProjectsLocationsEnrollmentsSetIamPolicyRequest](src/GoogleCloudEventarc/Requests/EventarcProjectsLocationsEnrollmentsSetIamPolicyRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Policy](src/GoogleCloudEventarc/Models/Policy.cs)</code>

**OnError**: <code>[ApiException](src/GoogleCloudEventarc/Core/Exceptions/ApiException.cs)&lt;[EventarcProjectsLocationsEnrollmentsSetIamPolicyError](src/GoogleCloudEventarc/Errors/EventarcProjectsLocationsEnrollmentsSetIamPolicyError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;TestIamPermissionsResponse&gt; EventarcProjectsLocationsEnrollmentsTestIamPermissions(EventarcProjectsLocationsEnrollmentsTestIamPermissionsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.EventarcProjectsLocationsEnrollmentsTestIamPermissions(
        new EventarcProjectsLocationsEnrollmentsTestIamPermissionsRequest
        {
            ProjectsId = "some example string",
            LocationsId = "some example string",
            EnrollmentsId = "some example string",
            Body = new TestIamPermissionsRequest(),
        });
    // TODO: Handle 'response' of type TestIamPermissionsResponse
}
catch (ApiException<EventarcProjectsLocationsEnrollmentsTestIamPermissionsError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[EventarcProjectsLocationsEnrollmentsTestIamPermissionsRequest](src/GoogleCloudEventarc/Requests/EventarcProjectsLocationsEnrollmentsTestIamPermissionsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[TestIamPermissionsResponse](src/GoogleCloudEventarc/Models/TestIamPermissionsResponse.cs)</code>

**OnError**: <code>[ApiException](src/GoogleCloudEventarc/Core/Exceptions/ApiException.cs)&lt;[EventarcProjectsLocationsEnrollmentsTestIamPermissionsError](src/GoogleCloudEventarc/Errors/EventarcProjectsLocationsEnrollmentsTestIamPermissionsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Location&gt; EventarcProjectsLocationsGet(EventarcProjectsLocationsGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets information about a location.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.EventarcProjectsLocationsGet(new EventarcProjectsLocationsGetRequest
    {
        ProjectsId = "some example string",
        LocationsId = "some example string",
    });
    // TODO: Handle 'response' of type Location
}
catch (ApiException<EventarcProjectsLocationsGetError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[EventarcProjectsLocationsGetRequest](src/GoogleCloudEventarc/Requests/EventarcProjectsLocationsGetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Location](src/GoogleCloudEventarc/Models/Location.cs)</code>

**OnError**: <code>[ApiException](src/GoogleCloudEventarc/Core/Exceptions/ApiException.cs)&lt;[EventarcProjectsLocationsGetError](src/GoogleCloudEventarc/Errors/EventarcProjectsLocationsGetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleChannelConfig&gt; EventarcProjectsLocationsGetGoogleChannelConfig(EventarcProjectsLocationsGetGoogleChannelConfigRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a GoogleChannelConfig. The name of the GoogleChannelConfig in the response is ALWAYS coded with projectID.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.EventarcProjectsLocationsGetGoogleChannelConfig(
        new EventarcProjectsLocationsGetGoogleChannelConfigRequest
        {
            ProjectsId = "some example string",
            LocationsId = "some example string",
        });
    // TODO: Handle 'response' of type GoogleChannelConfig
}
catch (ApiException<EventarcProjectsLocationsGetGoogleChannelConfigError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[EventarcProjectsLocationsGetGoogleChannelConfigRequest](src/GoogleCloudEventarc/Requests/EventarcProjectsLocationsGetGoogleChannelConfigRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleChannelConfig](src/GoogleCloudEventarc/Models/GoogleChannelConfig.cs)</code>

**OnError**: <code>[ApiException](src/GoogleCloudEventarc/Core/Exceptions/ApiException.cs)&lt;[EventarcProjectsLocationsGetGoogleChannelConfigError](src/GoogleCloudEventarc/Errors/EventarcProjectsLocationsGetGoogleChannelConfigError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleLongrunningOperation&gt; EventarcProjectsLocationsGoogleApiSourcesCreate(EventarcProjectsLocationsGoogleApiSourcesCreateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a new GoogleApiSource in a particular project and location.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.EventarcProjectsLocationsGoogleApiSourcesCreate(
        new EventarcProjectsLocationsGoogleApiSourcesCreateRequest
        {
            ProjectsId = "some example string",
            LocationsId = "some example string",
            Body = new GoogleApiSource(),
        });
    // TODO: Handle 'response' of type GoogleLongrunningOperation
}
catch (ApiException<EventarcProjectsLocationsGoogleApiSourcesCreateError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[EventarcProjectsLocationsGoogleApiSourcesCreateRequest](src/GoogleCloudEventarc/Requests/EventarcProjectsLocationsGoogleApiSourcesCreateRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleLongrunningOperation](src/GoogleCloudEventarc/Models/GoogleLongrunningOperation.cs)</code>

**OnError**: <code>[ApiException](src/GoogleCloudEventarc/Core/Exceptions/ApiException.cs)&lt;[EventarcProjectsLocationsGoogleApiSourcesCreateError](src/GoogleCloudEventarc/Errors/EventarcProjectsLocationsGoogleApiSourcesCreateError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleLongrunningOperation&gt; EventarcProjectsLocationsGoogleApiSourcesDelete(EventarcProjectsLocationsGoogleApiSourcesDeleteRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete a single GoogleApiSource.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.EventarcProjectsLocationsGoogleApiSourcesDelete(
        new EventarcProjectsLocationsGoogleApiSourcesDeleteRequest
        {
            ProjectsId = "some example string",
            LocationsId = "some example string",
            GoogleApiSourcesId = "some example string",
        });
    // TODO: Handle 'response' of type GoogleLongrunningOperation
}
catch (ApiException<EventarcProjectsLocationsGoogleApiSourcesDeleteError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[EventarcProjectsLocationsGoogleApiSourcesDeleteRequest](src/GoogleCloudEventarc/Requests/EventarcProjectsLocationsGoogleApiSourcesDeleteRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleLongrunningOperation](src/GoogleCloudEventarc/Models/GoogleLongrunningOperation.cs)</code>

**OnError**: <code>[ApiException](src/GoogleCloudEventarc/Core/Exceptions/ApiException.cs)&lt;[EventarcProjectsLocationsGoogleApiSourcesDeleteError](src/GoogleCloudEventarc/Errors/EventarcProjectsLocationsGoogleApiSourcesDeleteError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleApiSource&gt; EventarcProjectsLocationsGoogleApiSourcesGet(EventarcProjectsLocationsGoogleApiSourcesGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a single GoogleApiSource.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.EventarcProjectsLocationsGoogleApiSourcesGet(
        new EventarcProjectsLocationsGoogleApiSourcesGetRequest
        {
            ProjectsId = "some example string",
            LocationsId = "some example string",
            GoogleApiSourcesId = "some example string",
        });
    // TODO: Handle 'response' of type GoogleApiSource
}
catch (ApiException<EventarcProjectsLocationsGoogleApiSourcesGetError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[EventarcProjectsLocationsGoogleApiSourcesGetRequest](src/GoogleCloudEventarc/Requests/EventarcProjectsLocationsGoogleApiSourcesGetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleApiSource](src/GoogleCloudEventarc/Models/GoogleApiSource.cs)</code>

**OnError**: <code>[ApiException](src/GoogleCloudEventarc/Core/Exceptions/ApiException.cs)&lt;[EventarcProjectsLocationsGoogleApiSourcesGetError](src/GoogleCloudEventarc/Errors/EventarcProjectsLocationsGoogleApiSourcesGetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Policy&gt; EventarcProjectsLocationsGoogleApiSourcesGetIamPolicy(EventarcProjectsLocationsGoogleApiSourcesGetIamPolicyRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.EventarcProjectsLocationsGoogleApiSourcesGetIamPolicy(
        new EventarcProjectsLocationsGoogleApiSourcesGetIamPolicyRequest
        {
            ProjectsId = "some example string",
            LocationsId = "some example string",
            GoogleApiSourcesId = "some example string",
        });
    // TODO: Handle 'response' of type Policy
}
catch (ApiException<EventarcProjectsLocationsGoogleApiSourcesGetIamPolicyError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[EventarcProjectsLocationsGoogleApiSourcesGetIamPolicyRequest](src/GoogleCloudEventarc/Requests/EventarcProjectsLocationsGoogleApiSourcesGetIamPolicyRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Policy](src/GoogleCloudEventarc/Models/Policy.cs)</code>

**OnError**: <code>[ApiException](src/GoogleCloudEventarc/Core/Exceptions/ApiException.cs)&lt;[EventarcProjectsLocationsGoogleApiSourcesGetIamPolicyError](src/GoogleCloudEventarc/Errors/EventarcProjectsLocationsGoogleApiSourcesGetIamPolicyError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ListGoogleApiSourcesResponse&gt; EventarcProjectsLocationsGoogleApiSourcesList(EventarcProjectsLocationsGoogleApiSourcesListRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List GoogleApiSources.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.EventarcProjectsLocationsGoogleApiSourcesList(
        new EventarcProjectsLocationsGoogleApiSourcesListRequest
        {
            ProjectsId = "some example string",
            LocationsId = "some example string",
        });
    // TODO: Handle 'response' of type ListGoogleApiSourcesResponse
}
catch (ApiException<EventarcProjectsLocationsGoogleApiSourcesListError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[EventarcProjectsLocationsGoogleApiSourcesListRequest](src/GoogleCloudEventarc/Requests/EventarcProjectsLocationsGoogleApiSourcesListRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ListGoogleApiSourcesResponse](src/GoogleCloudEventarc/Models/ListGoogleApiSourcesResponse.cs)</code>

**OnError**: <code>[ApiException](src/GoogleCloudEventarc/Core/Exceptions/ApiException.cs)&lt;[EventarcProjectsLocationsGoogleApiSourcesListError](src/GoogleCloudEventarc/Errors/EventarcProjectsLocationsGoogleApiSourcesListError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleLongrunningOperation&gt; EventarcProjectsLocationsGoogleApiSourcesPatch(EventarcProjectsLocationsGoogleApiSourcesPatchRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update a single GoogleApiSource.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.EventarcProjectsLocationsGoogleApiSourcesPatch(
        new EventarcProjectsLocationsGoogleApiSourcesPatchRequest
        {
            ProjectsId = "some example string",
            LocationsId = "some example string",
            GoogleApiSourcesId = "some example string",
            Body = new GoogleApiSource(),
        });
    // TODO: Handle 'response' of type GoogleLongrunningOperation
}
catch (ApiException<EventarcProjectsLocationsGoogleApiSourcesPatchError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[EventarcProjectsLocationsGoogleApiSourcesPatchRequest](src/GoogleCloudEventarc/Requests/EventarcProjectsLocationsGoogleApiSourcesPatchRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleLongrunningOperation](src/GoogleCloudEventarc/Models/GoogleLongrunningOperation.cs)</code>

**OnError**: <code>[ApiException](src/GoogleCloudEventarc/Core/Exceptions/ApiException.cs)&lt;[EventarcProjectsLocationsGoogleApiSourcesPatchError](src/GoogleCloudEventarc/Errors/EventarcProjectsLocationsGoogleApiSourcesPatchError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Policy&gt; EventarcProjectsLocationsGoogleApiSourcesSetIamPolicy(EventarcProjectsLocationsGoogleApiSourcesSetIamPolicyRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.EventarcProjectsLocationsGoogleApiSourcesSetIamPolicy(
        new EventarcProjectsLocationsGoogleApiSourcesSetIamPolicyRequest
        {
            ProjectsId = "some example string",
            LocationsId = "some example string",
            GoogleApiSourcesId = "some example string",
            Body = new SetIamPolicyRequest(),
        });
    // TODO: Handle 'response' of type Policy
}
catch (ApiException<EventarcProjectsLocationsGoogleApiSourcesSetIamPolicyError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[EventarcProjectsLocationsGoogleApiSourcesSetIamPolicyRequest](src/GoogleCloudEventarc/Requests/EventarcProjectsLocationsGoogleApiSourcesSetIamPolicyRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Policy](src/GoogleCloudEventarc/Models/Policy.cs)</code>

**OnError**: <code>[ApiException](src/GoogleCloudEventarc/Core/Exceptions/ApiException.cs)&lt;[EventarcProjectsLocationsGoogleApiSourcesSetIamPolicyError](src/GoogleCloudEventarc/Errors/EventarcProjectsLocationsGoogleApiSourcesSetIamPolicyError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;TestIamPermissionsResponse&gt; EventarcProjectsLocationsGoogleApiSourcesTestIamPermissions(EventarcProjectsLocationsGoogleApiSourcesTestIamPermissionsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.EventarcProjectsLocationsGoogleApiSourcesTestIamPermissions(
        new EventarcProjectsLocationsGoogleApiSourcesTestIamPermissionsRequest
        {
            ProjectsId = "some example string",
            LocationsId = "some example string",
            GoogleApiSourcesId = "some example string",
            Body = new TestIamPermissionsRequest(),
        });
    // TODO: Handle 'response' of type TestIamPermissionsResponse
}
catch (ApiException<EventarcProjectsLocationsGoogleApiSourcesTestIamPermissionsError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[EventarcProjectsLocationsGoogleApiSourcesTestIamPermissionsRequest](src/GoogleCloudEventarc/Requests/EventarcProjectsLocationsGoogleApiSourcesTestIamPermissionsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[TestIamPermissionsResponse](src/GoogleCloudEventarc/Models/TestIamPermissionsResponse.cs)</code>

**OnError**: <code>[ApiException](src/GoogleCloudEventarc/Core/Exceptions/ApiException.cs)&lt;[EventarcProjectsLocationsGoogleApiSourcesTestIamPermissionsError](src/GoogleCloudEventarc/Errors/EventarcProjectsLocationsGoogleApiSourcesTestIamPermissionsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ListLocationsResponse&gt; EventarcProjectsLocationsList(EventarcProjectsLocationsListRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists information about the supported locations for this service. This method lists locations based on the resource scope provided in the ListLocationsRequest.name field: * **Global locations**: If `name` is empty, the method lists the public locations available to all projects. * **Project-specific locations**: If `name` follows the format `projects/{project}`, the method lists locations visible to that specific project. This includes public, private, or other project-specific locations enabled for the project. For gRPC and client library implementations, the resource name is passed as the `name` field. For direct service calls, the resource name is incorporated into the request path based on the specific service implementation and version.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.EventarcProjectsLocationsList(new EventarcProjectsLocationsListRequest
    {
        ProjectsId = "some example string",
    });
    // TODO: Handle 'response' of type ListLocationsResponse
}
catch (ApiException<EventarcProjectsLocationsListError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[EventarcProjectsLocationsListRequest](src/GoogleCloudEventarc/Requests/EventarcProjectsLocationsListRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ListLocationsResponse](src/GoogleCloudEventarc/Models/ListLocationsResponse.cs)</code>

**OnError**: <code>[ApiException](src/GoogleCloudEventarc/Core/Exceptions/ApiException.cs)&lt;[EventarcProjectsLocationsListError](src/GoogleCloudEventarc/Errors/EventarcProjectsLocationsListError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleLongrunningOperation&gt; EventarcProjectsLocationsMessageBusesCreate(EventarcProjectsLocationsMessageBusesCreateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a new MessageBus in a particular project and location.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.EventarcProjectsLocationsMessageBusesCreate(
        new EventarcProjectsLocationsMessageBusesCreateRequest
        {
            ProjectsId = "some example string",
            LocationsId = "some example string",
            Body = new MessageBus(),
        });
    // TODO: Handle 'response' of type GoogleLongrunningOperation
}
catch (ApiException<EventarcProjectsLocationsMessageBusesCreateError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[EventarcProjectsLocationsMessageBusesCreateRequest](src/GoogleCloudEventarc/Requests/EventarcProjectsLocationsMessageBusesCreateRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleLongrunningOperation](src/GoogleCloudEventarc/Models/GoogleLongrunningOperation.cs)</code>

**OnError**: <code>[ApiException](src/GoogleCloudEventarc/Core/Exceptions/ApiException.cs)&lt;[EventarcProjectsLocationsMessageBusesCreateError](src/GoogleCloudEventarc/Errors/EventarcProjectsLocationsMessageBusesCreateError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleLongrunningOperation&gt; EventarcProjectsLocationsMessageBusesDelete(EventarcProjectsLocationsMessageBusesDeleteRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete a single message bus.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.EventarcProjectsLocationsMessageBusesDelete(
        new EventarcProjectsLocationsMessageBusesDeleteRequest
        {
            ProjectsId = "some example string",
            LocationsId = "some example string",
            MessageBusesId = "some example string",
        });
    // TODO: Handle 'response' of type GoogleLongrunningOperation
}
catch (ApiException<EventarcProjectsLocationsMessageBusesDeleteError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[EventarcProjectsLocationsMessageBusesDeleteRequest](src/GoogleCloudEventarc/Requests/EventarcProjectsLocationsMessageBusesDeleteRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleLongrunningOperation](src/GoogleCloudEventarc/Models/GoogleLongrunningOperation.cs)</code>

**OnError**: <code>[ApiException](src/GoogleCloudEventarc/Core/Exceptions/ApiException.cs)&lt;[EventarcProjectsLocationsMessageBusesDeleteError](src/GoogleCloudEventarc/Errors/EventarcProjectsLocationsMessageBusesDeleteError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;MessageBus&gt; EventarcProjectsLocationsMessageBusesGet(EventarcProjectsLocationsMessageBusesGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a single MessageBus.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.EventarcProjectsLocationsMessageBusesGet(
        new EventarcProjectsLocationsMessageBusesGetRequest
        {
            ProjectsId = "some example string",
            LocationsId = "some example string",
            MessageBusesId = "some example string",
        });
    // TODO: Handle 'response' of type MessageBus
}
catch (ApiException<EventarcProjectsLocationsMessageBusesGetError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[EventarcProjectsLocationsMessageBusesGetRequest](src/GoogleCloudEventarc/Requests/EventarcProjectsLocationsMessageBusesGetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[MessageBus](src/GoogleCloudEventarc/Models/MessageBus.cs)</code>

**OnError**: <code>[ApiException](src/GoogleCloudEventarc/Core/Exceptions/ApiException.cs)&lt;[EventarcProjectsLocationsMessageBusesGetError](src/GoogleCloudEventarc/Errors/EventarcProjectsLocationsMessageBusesGetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Policy&gt; EventarcProjectsLocationsMessageBusesGetIamPolicy(EventarcProjectsLocationsMessageBusesGetIamPolicyRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.EventarcProjectsLocationsMessageBusesGetIamPolicy(
        new EventarcProjectsLocationsMessageBusesGetIamPolicyRequest
        {
            ProjectsId = "some example string",
            LocationsId = "some example string",
            MessageBusesId = "some example string",
        });
    // TODO: Handle 'response' of type Policy
}
catch (ApiException<EventarcProjectsLocationsMessageBusesGetIamPolicyError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[EventarcProjectsLocationsMessageBusesGetIamPolicyRequest](src/GoogleCloudEventarc/Requests/EventarcProjectsLocationsMessageBusesGetIamPolicyRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Policy](src/GoogleCloudEventarc/Models/Policy.cs)</code>

**OnError**: <code>[ApiException](src/GoogleCloudEventarc/Core/Exceptions/ApiException.cs)&lt;[EventarcProjectsLocationsMessageBusesGetIamPolicyError](src/GoogleCloudEventarc/Errors/EventarcProjectsLocationsMessageBusesGetIamPolicyError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ListMessageBusesResponse&gt; EventarcProjectsLocationsMessageBusesList(EventarcProjectsLocationsMessageBusesListRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List message buses.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.EventarcProjectsLocationsMessageBusesList(
        new EventarcProjectsLocationsMessageBusesListRequest
        {
            ProjectsId = "some example string",
            LocationsId = "some example string",
        });
    // TODO: Handle 'response' of type ListMessageBusesResponse
}
catch (ApiException<EventarcProjectsLocationsMessageBusesListError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[EventarcProjectsLocationsMessageBusesListRequest](src/GoogleCloudEventarc/Requests/EventarcProjectsLocationsMessageBusesListRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ListMessageBusesResponse](src/GoogleCloudEventarc/Models/ListMessageBusesResponse.cs)</code>

**OnError**: <code>[ApiException](src/GoogleCloudEventarc/Core/Exceptions/ApiException.cs)&lt;[EventarcProjectsLocationsMessageBusesListError](src/GoogleCloudEventarc/Errors/EventarcProjectsLocationsMessageBusesListError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ListMessageBusEnrollmentsResponse&gt; EventarcProjectsLocationsMessageBusesListEnrollments(EventarcProjectsLocationsMessageBusesListEnrollmentsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List message bus enrollments.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.EventarcProjectsLocationsMessageBusesListEnrollments(
        new EventarcProjectsLocationsMessageBusesListEnrollmentsRequest
        {
            ProjectsId = "some example string",
            LocationsId = "some example string",
            MessageBusesId = "some example string",
        });
    // TODO: Handle 'response' of type ListMessageBusEnrollmentsResponse
}
catch (ApiException<EventarcProjectsLocationsMessageBusesListEnrollmentsError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[EventarcProjectsLocationsMessageBusesListEnrollmentsRequest](src/GoogleCloudEventarc/Requests/EventarcProjectsLocationsMessageBusesListEnrollmentsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ListMessageBusEnrollmentsResponse](src/GoogleCloudEventarc/Models/ListMessageBusEnrollmentsResponse.cs)</code>

**OnError**: <code>[ApiException](src/GoogleCloudEventarc/Core/Exceptions/ApiException.cs)&lt;[EventarcProjectsLocationsMessageBusesListEnrollmentsError](src/GoogleCloudEventarc/Errors/EventarcProjectsLocationsMessageBusesListEnrollmentsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleLongrunningOperation&gt; EventarcProjectsLocationsMessageBusesPatch(EventarcProjectsLocationsMessageBusesPatchRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update a single message bus.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.EventarcProjectsLocationsMessageBusesPatch(
        new EventarcProjectsLocationsMessageBusesPatchRequest
        {
            ProjectsId = "some example string",
            LocationsId = "some example string",
            MessageBusesId = "some example string",
            Body = new MessageBus(),
        });
    // TODO: Handle 'response' of type GoogleLongrunningOperation
}
catch (ApiException<EventarcProjectsLocationsMessageBusesPatchError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[EventarcProjectsLocationsMessageBusesPatchRequest](src/GoogleCloudEventarc/Requests/EventarcProjectsLocationsMessageBusesPatchRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleLongrunningOperation](src/GoogleCloudEventarc/Models/GoogleLongrunningOperation.cs)</code>

**OnError**: <code>[ApiException](src/GoogleCloudEventarc/Core/Exceptions/ApiException.cs)&lt;[EventarcProjectsLocationsMessageBusesPatchError](src/GoogleCloudEventarc/Errors/EventarcProjectsLocationsMessageBusesPatchError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Policy&gt; EventarcProjectsLocationsMessageBusesSetIamPolicy(EventarcProjectsLocationsMessageBusesSetIamPolicyRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.EventarcProjectsLocationsMessageBusesSetIamPolicy(
        new EventarcProjectsLocationsMessageBusesSetIamPolicyRequest
        {
            ProjectsId = "some example string",
            LocationsId = "some example string",
            MessageBusesId = "some example string",
            Body = new SetIamPolicyRequest(),
        });
    // TODO: Handle 'response' of type Policy
}
catch (ApiException<EventarcProjectsLocationsMessageBusesSetIamPolicyError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[EventarcProjectsLocationsMessageBusesSetIamPolicyRequest](src/GoogleCloudEventarc/Requests/EventarcProjectsLocationsMessageBusesSetIamPolicyRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Policy](src/GoogleCloudEventarc/Models/Policy.cs)</code>

**OnError**: <code>[ApiException](src/GoogleCloudEventarc/Core/Exceptions/ApiException.cs)&lt;[EventarcProjectsLocationsMessageBusesSetIamPolicyError](src/GoogleCloudEventarc/Errors/EventarcProjectsLocationsMessageBusesSetIamPolicyError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;TestIamPermissionsResponse&gt; EventarcProjectsLocationsMessageBusesTestIamPermissions(EventarcProjectsLocationsMessageBusesTestIamPermissionsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.EventarcProjectsLocationsMessageBusesTestIamPermissions(
        new EventarcProjectsLocationsMessageBusesTestIamPermissionsRequest
        {
            ProjectsId = "some example string",
            LocationsId = "some example string",
            MessageBusesId = "some example string",
            Body = new TestIamPermissionsRequest(),
        });
    // TODO: Handle 'response' of type TestIamPermissionsResponse
}
catch (ApiException<EventarcProjectsLocationsMessageBusesTestIamPermissionsError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[EventarcProjectsLocationsMessageBusesTestIamPermissionsRequest](src/GoogleCloudEventarc/Requests/EventarcProjectsLocationsMessageBusesTestIamPermissionsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[TestIamPermissionsResponse](src/GoogleCloudEventarc/Models/TestIamPermissionsResponse.cs)</code>

**OnError**: <code>[ApiException](src/GoogleCloudEventarc/Core/Exceptions/ApiException.cs)&lt;[EventarcProjectsLocationsMessageBusesTestIamPermissionsError](src/GoogleCloudEventarc/Errors/EventarcProjectsLocationsMessageBusesTestIamPermissionsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;object&gt; EventarcProjectsLocationsOperationsCancel(EventarcProjectsLocationsOperationsCancelRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of `1`, corresponding to `Code.CANCELLED`.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.EventarcProjectsLocationsOperationsCancel(
        new EventarcProjectsLocationsOperationsCancelRequest
        {
            ProjectsId = "some example string",
            LocationsId = "some example string",
            OperationsId = "some example string",
            Body = body,
        });
    // TODO: Handle 'response' of type object
}
catch (ApiException<EventarcProjectsLocationsOperationsCancelError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[EventarcProjectsLocationsOperationsCancelRequest](src/GoogleCloudEventarc/Requests/EventarcProjectsLocationsOperationsCancelRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>object</code>

**OnError**: <code>[ApiException](src/GoogleCloudEventarc/Core/Exceptions/ApiException.cs)&lt;[EventarcProjectsLocationsOperationsCancelError](src/GoogleCloudEventarc/Errors/EventarcProjectsLocationsOperationsCancelError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;object&gt; EventarcProjectsLocationsOperationsDelete(EventarcProjectsLocationsOperationsDeleteRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.EventarcProjectsLocationsOperationsDelete(
        new EventarcProjectsLocationsOperationsDeleteRequest
        {
            ProjectsId = "some example string",
            LocationsId = "some example string",
            OperationsId = "some example string",
        });
    // TODO: Handle 'response' of type object
}
catch (ApiException<EventarcProjectsLocationsOperationsDeleteError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[EventarcProjectsLocationsOperationsDeleteRequest](src/GoogleCloudEventarc/Requests/EventarcProjectsLocationsOperationsDeleteRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>object</code>

**OnError**: <code>[ApiException](src/GoogleCloudEventarc/Core/Exceptions/ApiException.cs)&lt;[EventarcProjectsLocationsOperationsDeleteError](src/GoogleCloudEventarc/Errors/EventarcProjectsLocationsOperationsDeleteError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleLongrunningOperation&gt; EventarcProjectsLocationsOperationsGet(EventarcProjectsLocationsOperationsGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.EventarcProjectsLocationsOperationsGet(new EventarcProjectsLocationsOperationsGetRequest
    {
        ProjectsId = "some example string",
        LocationsId = "some example string",
        OperationsId = "some example string",
    });
    // TODO: Handle 'response' of type GoogleLongrunningOperation
}
catch (ApiException<EventarcProjectsLocationsOperationsGetError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[EventarcProjectsLocationsOperationsGetRequest](src/GoogleCloudEventarc/Requests/EventarcProjectsLocationsOperationsGetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleLongrunningOperation](src/GoogleCloudEventarc/Models/GoogleLongrunningOperation.cs)</code>

**OnError**: <code>[ApiException](src/GoogleCloudEventarc/Core/Exceptions/ApiException.cs)&lt;[EventarcProjectsLocationsOperationsGetError](src/GoogleCloudEventarc/Errors/EventarcProjectsLocationsOperationsGetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleLongrunningListOperationsResponse&gt; EventarcProjectsLocationsOperationsList(EventarcProjectsLocationsOperationsListRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.EventarcProjectsLocationsOperationsList(
        new EventarcProjectsLocationsOperationsListRequest
        {
            ProjectsId = "some example string",
            LocationsId = "some example string",
        });
    // TODO: Handle 'response' of type GoogleLongrunningListOperationsResponse
}
catch (ApiException<EventarcProjectsLocationsOperationsListError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[EventarcProjectsLocationsOperationsListRequest](src/GoogleCloudEventarc/Requests/EventarcProjectsLocationsOperationsListRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleLongrunningListOperationsResponse](src/GoogleCloudEventarc/Models/GoogleLongrunningListOperationsResponse.cs)</code>

**OnError**: <code>[ApiException](src/GoogleCloudEventarc/Core/Exceptions/ApiException.cs)&lt;[EventarcProjectsLocationsOperationsListError](src/GoogleCloudEventarc/Errors/EventarcProjectsLocationsOperationsListError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleLongrunningOperation&gt; EventarcProjectsLocationsPipelinesCreate(EventarcProjectsLocationsPipelinesCreateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a new Pipeline in a particular project and location.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.EventarcProjectsLocationsPipelinesCreate(
        new EventarcProjectsLocationsPipelinesCreateRequest
        {
            ProjectsId = "some example string",
            LocationsId = "some example string",
            Body = new Pipeline(),
        });
    // TODO: Handle 'response' of type GoogleLongrunningOperation
}
catch (ApiException<EventarcProjectsLocationsPipelinesCreateError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[EventarcProjectsLocationsPipelinesCreateRequest](src/GoogleCloudEventarc/Requests/EventarcProjectsLocationsPipelinesCreateRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleLongrunningOperation](src/GoogleCloudEventarc/Models/GoogleLongrunningOperation.cs)</code>

**OnError**: <code>[ApiException](src/GoogleCloudEventarc/Core/Exceptions/ApiException.cs)&lt;[EventarcProjectsLocationsPipelinesCreateError](src/GoogleCloudEventarc/Errors/EventarcProjectsLocationsPipelinesCreateError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleLongrunningOperation&gt; EventarcProjectsLocationsPipelinesDelete(EventarcProjectsLocationsPipelinesDeleteRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete a single pipeline.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.EventarcProjectsLocationsPipelinesDelete(
        new EventarcProjectsLocationsPipelinesDeleteRequest
        {
            ProjectsId = "some example string",
            LocationsId = "some example string",
            PipelinesId = "some example string",
        });
    // TODO: Handle 'response' of type GoogleLongrunningOperation
}
catch (ApiException<EventarcProjectsLocationsPipelinesDeleteError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[EventarcProjectsLocationsPipelinesDeleteRequest](src/GoogleCloudEventarc/Requests/EventarcProjectsLocationsPipelinesDeleteRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleLongrunningOperation](src/GoogleCloudEventarc/Models/GoogleLongrunningOperation.cs)</code>

**OnError**: <code>[ApiException](src/GoogleCloudEventarc/Core/Exceptions/ApiException.cs)&lt;[EventarcProjectsLocationsPipelinesDeleteError](src/GoogleCloudEventarc/Errors/EventarcProjectsLocationsPipelinesDeleteError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Pipeline&gt; EventarcProjectsLocationsPipelinesGet(EventarcProjectsLocationsPipelinesGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a single Pipeline.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.EventarcProjectsLocationsPipelinesGet(new EventarcProjectsLocationsPipelinesGetRequest
    {
        ProjectsId = "some example string",
        LocationsId = "some example string",
        PipelinesId = "some example string",
    });
    // TODO: Handle 'response' of type Pipeline
}
catch (ApiException<EventarcProjectsLocationsPipelinesGetError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[EventarcProjectsLocationsPipelinesGetRequest](src/GoogleCloudEventarc/Requests/EventarcProjectsLocationsPipelinesGetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Pipeline](src/GoogleCloudEventarc/Models/Pipeline.cs)</code>

**OnError**: <code>[ApiException](src/GoogleCloudEventarc/Core/Exceptions/ApiException.cs)&lt;[EventarcProjectsLocationsPipelinesGetError](src/GoogleCloudEventarc/Errors/EventarcProjectsLocationsPipelinesGetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Policy&gt; EventarcProjectsLocationsPipelinesGetIamPolicy(EventarcProjectsLocationsPipelinesGetIamPolicyRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.EventarcProjectsLocationsPipelinesGetIamPolicy(
        new EventarcProjectsLocationsPipelinesGetIamPolicyRequest
        {
            ProjectsId = "some example string",
            LocationsId = "some example string",
            PipelinesId = "some example string",
        });
    // TODO: Handle 'response' of type Policy
}
catch (ApiException<EventarcProjectsLocationsPipelinesGetIamPolicyError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[EventarcProjectsLocationsPipelinesGetIamPolicyRequest](src/GoogleCloudEventarc/Requests/EventarcProjectsLocationsPipelinesGetIamPolicyRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Policy](src/GoogleCloudEventarc/Models/Policy.cs)</code>

**OnError**: <code>[ApiException](src/GoogleCloudEventarc/Core/Exceptions/ApiException.cs)&lt;[EventarcProjectsLocationsPipelinesGetIamPolicyError](src/GoogleCloudEventarc/Errors/EventarcProjectsLocationsPipelinesGetIamPolicyError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ListPipelinesResponse&gt; EventarcProjectsLocationsPipelinesList(EventarcProjectsLocationsPipelinesListRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List pipelines.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.EventarcProjectsLocationsPipelinesList(new EventarcProjectsLocationsPipelinesListRequest
    {
        ProjectsId = "some example string",
        LocationsId = "some example string",
    });
    // TODO: Handle 'response' of type ListPipelinesResponse
}
catch (ApiException<EventarcProjectsLocationsPipelinesListError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[EventarcProjectsLocationsPipelinesListRequest](src/GoogleCloudEventarc/Requests/EventarcProjectsLocationsPipelinesListRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ListPipelinesResponse](src/GoogleCloudEventarc/Models/ListPipelinesResponse.cs)</code>

**OnError**: <code>[ApiException](src/GoogleCloudEventarc/Core/Exceptions/ApiException.cs)&lt;[EventarcProjectsLocationsPipelinesListError](src/GoogleCloudEventarc/Errors/EventarcProjectsLocationsPipelinesListError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleLongrunningOperation&gt; EventarcProjectsLocationsPipelinesPatch(EventarcProjectsLocationsPipelinesPatchRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update a single pipeline.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.EventarcProjectsLocationsPipelinesPatch(
        new EventarcProjectsLocationsPipelinesPatchRequest
        {
            ProjectsId = "some example string",
            LocationsId = "some example string",
            PipelinesId = "some example string",
            Body = new Pipeline(),
        });
    // TODO: Handle 'response' of type GoogleLongrunningOperation
}
catch (ApiException<EventarcProjectsLocationsPipelinesPatchError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[EventarcProjectsLocationsPipelinesPatchRequest](src/GoogleCloudEventarc/Requests/EventarcProjectsLocationsPipelinesPatchRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleLongrunningOperation](src/GoogleCloudEventarc/Models/GoogleLongrunningOperation.cs)</code>

**OnError**: <code>[ApiException](src/GoogleCloudEventarc/Core/Exceptions/ApiException.cs)&lt;[EventarcProjectsLocationsPipelinesPatchError](src/GoogleCloudEventarc/Errors/EventarcProjectsLocationsPipelinesPatchError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Policy&gt; EventarcProjectsLocationsPipelinesSetIamPolicy(EventarcProjectsLocationsPipelinesSetIamPolicyRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.EventarcProjectsLocationsPipelinesSetIamPolicy(
        new EventarcProjectsLocationsPipelinesSetIamPolicyRequest
        {
            ProjectsId = "some example string",
            LocationsId = "some example string",
            PipelinesId = "some example string",
            Body = new SetIamPolicyRequest(),
        });
    // TODO: Handle 'response' of type Policy
}
catch (ApiException<EventarcProjectsLocationsPipelinesSetIamPolicyError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[EventarcProjectsLocationsPipelinesSetIamPolicyRequest](src/GoogleCloudEventarc/Requests/EventarcProjectsLocationsPipelinesSetIamPolicyRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Policy](src/GoogleCloudEventarc/Models/Policy.cs)</code>

**OnError**: <code>[ApiException](src/GoogleCloudEventarc/Core/Exceptions/ApiException.cs)&lt;[EventarcProjectsLocationsPipelinesSetIamPolicyError](src/GoogleCloudEventarc/Errors/EventarcProjectsLocationsPipelinesSetIamPolicyError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;TestIamPermissionsResponse&gt; EventarcProjectsLocationsPipelinesTestIamPermissions(EventarcProjectsLocationsPipelinesTestIamPermissionsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.EventarcProjectsLocationsPipelinesTestIamPermissions(
        new EventarcProjectsLocationsPipelinesTestIamPermissionsRequest
        {
            ProjectsId = "some example string",
            LocationsId = "some example string",
            PipelinesId = "some example string",
            Body = new TestIamPermissionsRequest(),
        });
    // TODO: Handle 'response' of type TestIamPermissionsResponse
}
catch (ApiException<EventarcProjectsLocationsPipelinesTestIamPermissionsError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[EventarcProjectsLocationsPipelinesTestIamPermissionsRequest](src/GoogleCloudEventarc/Requests/EventarcProjectsLocationsPipelinesTestIamPermissionsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[TestIamPermissionsResponse](src/GoogleCloudEventarc/Models/TestIamPermissionsResponse.cs)</code>

**OnError**: <code>[ApiException](src/GoogleCloudEventarc/Core/Exceptions/ApiException.cs)&lt;[EventarcProjectsLocationsPipelinesTestIamPermissionsError](src/GoogleCloudEventarc/Errors/EventarcProjectsLocationsPipelinesTestIamPermissionsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Provider&gt; EventarcProjectsLocationsProvidersGet(EventarcProjectsLocationsProvidersGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a single Provider.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.EventarcProjectsLocationsProvidersGet(new EventarcProjectsLocationsProvidersGetRequest
    {
        ProjectsId = "some example string",
        LocationsId = "some example string",
        ProvidersId = "some example string",
    });
    // TODO: Handle 'response' of type Provider
}
catch (ApiException<EventarcProjectsLocationsProvidersGetError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[EventarcProjectsLocationsProvidersGetRequest](src/GoogleCloudEventarc/Requests/EventarcProjectsLocationsProvidersGetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Provider](src/GoogleCloudEventarc/Models/Provider.cs)</code>

**OnError**: <code>[ApiException](src/GoogleCloudEventarc/Core/Exceptions/ApiException.cs)&lt;[EventarcProjectsLocationsProvidersGetError](src/GoogleCloudEventarc/Errors/EventarcProjectsLocationsProvidersGetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ListProvidersResponse&gt; EventarcProjectsLocationsProvidersList(EventarcProjectsLocationsProvidersListRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List providers.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.EventarcProjectsLocationsProvidersList(new EventarcProjectsLocationsProvidersListRequest
    {
        ProjectsId = "some example string",
        LocationsId = "some example string",
    });
    // TODO: Handle 'response' of type ListProvidersResponse
}
catch (ApiException<EventarcProjectsLocationsProvidersListError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[EventarcProjectsLocationsProvidersListRequest](src/GoogleCloudEventarc/Requests/EventarcProjectsLocationsProvidersListRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ListProvidersResponse](src/GoogleCloudEventarc/Models/ListProvidersResponse.cs)</code>

**OnError**: <code>[ApiException](src/GoogleCloudEventarc/Core/Exceptions/ApiException.cs)&lt;[EventarcProjectsLocationsProvidersListError](src/GoogleCloudEventarc/Errors/EventarcProjectsLocationsProvidersListError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleLongrunningOperation&gt; EventarcProjectsLocationsTriggersCreate(EventarcProjectsLocationsTriggersCreateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a new trigger in a particular project and location.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.EventarcProjectsLocationsTriggersCreate(
        new EventarcProjectsLocationsTriggersCreateRequest
        {
            ProjectsId = "some example string",
            LocationsId = "some example string",
            Body = new Trigger(),
        });
    // TODO: Handle 'response' of type GoogleLongrunningOperation
}
catch (ApiException<EventarcProjectsLocationsTriggersCreateError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[EventarcProjectsLocationsTriggersCreateRequest](src/GoogleCloudEventarc/Requests/EventarcProjectsLocationsTriggersCreateRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleLongrunningOperation](src/GoogleCloudEventarc/Models/GoogleLongrunningOperation.cs)</code>

**OnError**: <code>[ApiException](src/GoogleCloudEventarc/Core/Exceptions/ApiException.cs)&lt;[EventarcProjectsLocationsTriggersCreateError](src/GoogleCloudEventarc/Errors/EventarcProjectsLocationsTriggersCreateError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleLongrunningOperation&gt; EventarcProjectsLocationsTriggersDelete(EventarcProjectsLocationsTriggersDeleteRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete a single trigger.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.EventarcProjectsLocationsTriggersDelete(
        new EventarcProjectsLocationsTriggersDeleteRequest
        {
            ProjectsId = "some example string",
            LocationsId = "some example string",
            TriggersId = "some example string",
        });
    // TODO: Handle 'response' of type GoogleLongrunningOperation
}
catch (ApiException<EventarcProjectsLocationsTriggersDeleteError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[EventarcProjectsLocationsTriggersDeleteRequest](src/GoogleCloudEventarc/Requests/EventarcProjectsLocationsTriggersDeleteRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleLongrunningOperation](src/GoogleCloudEventarc/Models/GoogleLongrunningOperation.cs)</code>

**OnError**: <code>[ApiException](src/GoogleCloudEventarc/Core/Exceptions/ApiException.cs)&lt;[EventarcProjectsLocationsTriggersDeleteError](src/GoogleCloudEventarc/Errors/EventarcProjectsLocationsTriggersDeleteError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Trigger&gt; EventarcProjectsLocationsTriggersGet(EventarcProjectsLocationsTriggersGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a single trigger.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.EventarcProjectsLocationsTriggersGet(new EventarcProjectsLocationsTriggersGetRequest
    {
        ProjectsId = "some example string",
        LocationsId = "some example string",
        TriggersId = "some example string",
    });
    // TODO: Handle 'response' of type Trigger
}
catch (ApiException<EventarcProjectsLocationsTriggersGetError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[EventarcProjectsLocationsTriggersGetRequest](src/GoogleCloudEventarc/Requests/EventarcProjectsLocationsTriggersGetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Trigger](src/GoogleCloudEventarc/Models/Trigger.cs)</code>

**OnError**: <code>[ApiException](src/GoogleCloudEventarc/Core/Exceptions/ApiException.cs)&lt;[EventarcProjectsLocationsTriggersGetError](src/GoogleCloudEventarc/Errors/EventarcProjectsLocationsTriggersGetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Policy&gt; EventarcProjectsLocationsTriggersGetIamPolicy(EventarcProjectsLocationsTriggersGetIamPolicyRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.EventarcProjectsLocationsTriggersGetIamPolicy(
        new EventarcProjectsLocationsTriggersGetIamPolicyRequest
        {
            ProjectsId = "some example string",
            LocationsId = "some example string",
            TriggersId = "some example string",
        });
    // TODO: Handle 'response' of type Policy
}
catch (ApiException<EventarcProjectsLocationsTriggersGetIamPolicyError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[EventarcProjectsLocationsTriggersGetIamPolicyRequest](src/GoogleCloudEventarc/Requests/EventarcProjectsLocationsTriggersGetIamPolicyRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Policy](src/GoogleCloudEventarc/Models/Policy.cs)</code>

**OnError**: <code>[ApiException](src/GoogleCloudEventarc/Core/Exceptions/ApiException.cs)&lt;[EventarcProjectsLocationsTriggersGetIamPolicyError](src/GoogleCloudEventarc/Errors/EventarcProjectsLocationsTriggersGetIamPolicyError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ListTriggersResponse&gt; EventarcProjectsLocationsTriggersList(EventarcProjectsLocationsTriggersListRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List triggers.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.EventarcProjectsLocationsTriggersList(new EventarcProjectsLocationsTriggersListRequest
    {
        ProjectsId = "some example string",
        LocationsId = "some example string",
    });
    // TODO: Handle 'response' of type ListTriggersResponse
}
catch (ApiException<EventarcProjectsLocationsTriggersListError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[EventarcProjectsLocationsTriggersListRequest](src/GoogleCloudEventarc/Requests/EventarcProjectsLocationsTriggersListRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ListTriggersResponse](src/GoogleCloudEventarc/Models/ListTriggersResponse.cs)</code>

**OnError**: <code>[ApiException](src/GoogleCloudEventarc/Core/Exceptions/ApiException.cs)&lt;[EventarcProjectsLocationsTriggersListError](src/GoogleCloudEventarc/Errors/EventarcProjectsLocationsTriggersListError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleLongrunningOperation&gt; EventarcProjectsLocationsTriggersPatch(EventarcProjectsLocationsTriggersPatchRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update a single trigger.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.EventarcProjectsLocationsTriggersPatch(new EventarcProjectsLocationsTriggersPatchRequest
    {
        ProjectsId = "some example string",
        LocationsId = "some example string",
        TriggersId = "some example string",
        Body = new Trigger(),
    });
    // TODO: Handle 'response' of type GoogleLongrunningOperation
}
catch (ApiException<EventarcProjectsLocationsTriggersPatchError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[EventarcProjectsLocationsTriggersPatchRequest](src/GoogleCloudEventarc/Requests/EventarcProjectsLocationsTriggersPatchRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleLongrunningOperation](src/GoogleCloudEventarc/Models/GoogleLongrunningOperation.cs)</code>

**OnError**: <code>[ApiException](src/GoogleCloudEventarc/Core/Exceptions/ApiException.cs)&lt;[EventarcProjectsLocationsTriggersPatchError](src/GoogleCloudEventarc/Errors/EventarcProjectsLocationsTriggersPatchError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Policy&gt; EventarcProjectsLocationsTriggersSetIamPolicy(EventarcProjectsLocationsTriggersSetIamPolicyRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.EventarcProjectsLocationsTriggersSetIamPolicy(
        new EventarcProjectsLocationsTriggersSetIamPolicyRequest
        {
            ProjectsId = "some example string",
            LocationsId = "some example string",
            TriggersId = "some example string",
            Body = new SetIamPolicyRequest(),
        });
    // TODO: Handle 'response' of type Policy
}
catch (ApiException<EventarcProjectsLocationsTriggersSetIamPolicyError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[EventarcProjectsLocationsTriggersSetIamPolicyRequest](src/GoogleCloudEventarc/Requests/EventarcProjectsLocationsTriggersSetIamPolicyRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Policy](src/GoogleCloudEventarc/Models/Policy.cs)</code>

**OnError**: <code>[ApiException](src/GoogleCloudEventarc/Core/Exceptions/ApiException.cs)&lt;[EventarcProjectsLocationsTriggersSetIamPolicyError](src/GoogleCloudEventarc/Errors/EventarcProjectsLocationsTriggersSetIamPolicyError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;TestIamPermissionsResponse&gt; EventarcProjectsLocationsTriggersTestIamPermissions(EventarcProjectsLocationsTriggersTestIamPermissionsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.EventarcProjectsLocationsTriggersTestIamPermissions(
        new EventarcProjectsLocationsTriggersTestIamPermissionsRequest
        {
            ProjectsId = "some example string",
            LocationsId = "some example string",
            TriggersId = "some example string",
            Body = new TestIamPermissionsRequest(),
        });
    // TODO: Handle 'response' of type TestIamPermissionsResponse
}
catch (ApiException<EventarcProjectsLocationsTriggersTestIamPermissionsError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[EventarcProjectsLocationsTriggersTestIamPermissionsRequest](src/GoogleCloudEventarc/Requests/EventarcProjectsLocationsTriggersTestIamPermissionsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[TestIamPermissionsResponse](src/GoogleCloudEventarc/Models/TestIamPermissionsResponse.cs)</code>

**OnError**: <code>[ApiException](src/GoogleCloudEventarc/Core/Exceptions/ApiException.cs)&lt;[EventarcProjectsLocationsTriggersTestIamPermissionsError](src/GoogleCloudEventarc/Errors/EventarcProjectsLocationsTriggersTestIamPermissionsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleChannelConfig&gt; EventarcProjectsLocationsUpdateGoogleChannelConfig(EventarcProjectsLocationsUpdateGoogleChannelConfigRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update a single GoogleChannelConfig

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.EventarcProjectsLocationsUpdateGoogleChannelConfig(
        new EventarcProjectsLocationsUpdateGoogleChannelConfigRequest
        {
            ProjectsId = "some example string",
            LocationsId = "some example string",
            Body = new GoogleChannelConfig(),
        });
    // TODO: Handle 'response' of type GoogleChannelConfig
}
catch (ApiException<EventarcProjectsLocationsUpdateGoogleChannelConfigError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[EventarcProjectsLocationsUpdateGoogleChannelConfigRequest](src/GoogleCloudEventarc/Requests/EventarcProjectsLocationsUpdateGoogleChannelConfigRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleChannelConfig](src/GoogleCloudEventarc/Models/GoogleChannelConfig.cs)</code>

**OnError**: <code>[ApiException](src/GoogleCloudEventarc/Core/Exceptions/ApiException.cs)&lt;[EventarcProjectsLocationsUpdateGoogleChannelConfigError](src/GoogleCloudEventarc/Errors/EventarcProjectsLocationsUpdateGoogleChannelConfigError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

