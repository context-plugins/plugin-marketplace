# Reference

Every operation below is shown in its throwing form. On an error status it throws `ApiException<TError>` — the status code, headers, content type and the operation's error type, `RawError` (the raw body) when the spec declares none — and where an operation offers an `…AsResult` sibling, that sibling returns `ApiResult<TResponse, TError>` instead. A request that produces no usable response surfaces as `SdkConnectionException` or `SdkTimeoutException`, a body that does not match the documented response type as `ResponseDeserializationException`, and a required credential that is not configured, or one that cannot be applied, as `AuthSchemeException`; all of them derive from `SdkException` and name the failed call. See [README → Error Handling](README.md#error-handling).

> Source: [GoogleCloudDatastreamClient](src/GoogleCloudDatastream/GoogleCloudDatastreamClient.cs)

<details>
<summary><code>Task&lt;Operation&gt; DatastreamProjectsLocationsConnectionProfilesCreate(DatastreamProjectsLocationsConnectionProfilesCreateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Use this method to create a connection profile in a project and location.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.DatastreamProjectsLocationsConnectionProfilesCreate(
        new DatastreamProjectsLocationsConnectionProfilesCreateRequest
        {
            ProjectsId = "some example string",
            LocationsId = "some example string",
            Body = new ConnectionProfile(),
        });
    // TODO: Handle 'response' of type Operation
}
catch (ApiException<DatastreamProjectsLocationsConnectionProfilesCreateError> ex)
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

<code>[DatastreamProjectsLocationsConnectionProfilesCreateRequest](src/GoogleCloudDatastream/Requests/DatastreamProjectsLocationsConnectionProfilesCreateRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Operation](src/GoogleCloudDatastream/Models/Operation.cs)</code>

**OnError**: <code>[ApiException](src/GoogleCloudDatastream/Core/Exceptions/ApiException.cs)&lt;[DatastreamProjectsLocationsConnectionProfilesCreateError](src/GoogleCloudDatastream/Errors/DatastreamProjectsLocationsConnectionProfilesCreateError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Operation&gt; DatastreamProjectsLocationsConnectionProfilesDelete(DatastreamProjectsLocationsConnectionProfilesDeleteRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Use this method to delete a connection profile.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.DatastreamProjectsLocationsConnectionProfilesDelete(
        new DatastreamProjectsLocationsConnectionProfilesDeleteRequest
        {
            ProjectsId = "some example string",
            LocationsId = "some example string",
            ConnectionProfilesId = "some example string",
        });
    // TODO: Handle 'response' of type Operation
}
catch (ApiException<DatastreamProjectsLocationsConnectionProfilesDeleteError> ex)
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

<code>[DatastreamProjectsLocationsConnectionProfilesDeleteRequest](src/GoogleCloudDatastream/Requests/DatastreamProjectsLocationsConnectionProfilesDeleteRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Operation](src/GoogleCloudDatastream/Models/Operation.cs)</code>

**OnError**: <code>[ApiException](src/GoogleCloudDatastream/Core/Exceptions/ApiException.cs)&lt;[DatastreamProjectsLocationsConnectionProfilesDeleteError](src/GoogleCloudDatastream/Errors/DatastreamProjectsLocationsConnectionProfilesDeleteError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;DiscoverConnectionProfileResponse&gt; DatastreamProjectsLocationsConnectionProfilesDiscover(DatastreamProjectsLocationsConnectionProfilesDiscoverRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Use this method to discover a connection profile. The discover API call exposes the data objects and metadata belonging to the profile. Typically, a request returns children data objects of a parent data object that's optionally supplied in the request.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.DatastreamProjectsLocationsConnectionProfilesDiscover(
        new DatastreamProjectsLocationsConnectionProfilesDiscoverRequest
        {
            ProjectsId = "some example string",
            LocationsId = "some example string",
            Body = new DiscoverConnectionProfileRequest(),
        });
    // TODO: Handle 'response' of type DiscoverConnectionProfileResponse
}
catch (ApiException<DatastreamProjectsLocationsConnectionProfilesDiscoverError> ex)
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

<code>[DatastreamProjectsLocationsConnectionProfilesDiscoverRequest](src/GoogleCloudDatastream/Requests/DatastreamProjectsLocationsConnectionProfilesDiscoverRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[DiscoverConnectionProfileResponse](src/GoogleCloudDatastream/Models/DiscoverConnectionProfileResponse.cs)</code>

**OnError**: <code>[ApiException](src/GoogleCloudDatastream/Core/Exceptions/ApiException.cs)&lt;[DatastreamProjectsLocationsConnectionProfilesDiscoverError](src/GoogleCloudDatastream/Errors/DatastreamProjectsLocationsConnectionProfilesDiscoverError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ConnectionProfile&gt; DatastreamProjectsLocationsConnectionProfilesGet(DatastreamProjectsLocationsConnectionProfilesGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Use this method to get details about a connection profile.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.DatastreamProjectsLocationsConnectionProfilesGet(
        new DatastreamProjectsLocationsConnectionProfilesGetRequest
        {
            ProjectsId = "some example string",
            LocationsId = "some example string",
            ConnectionProfilesId = "some example string",
        });
    // TODO: Handle 'response' of type ConnectionProfile
}
catch (ApiException<DatastreamProjectsLocationsConnectionProfilesGetError> ex)
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

<code>[DatastreamProjectsLocationsConnectionProfilesGetRequest](src/GoogleCloudDatastream/Requests/DatastreamProjectsLocationsConnectionProfilesGetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ConnectionProfile](src/GoogleCloudDatastream/Models/ConnectionProfile.cs)</code>

**OnError**: <code>[ApiException](src/GoogleCloudDatastream/Core/Exceptions/ApiException.cs)&lt;[DatastreamProjectsLocationsConnectionProfilesGetError](src/GoogleCloudDatastream/Errors/DatastreamProjectsLocationsConnectionProfilesGetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ListConnectionProfilesResponse&gt; DatastreamProjectsLocationsConnectionProfilesList(DatastreamProjectsLocationsConnectionProfilesListRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Use this method to list connection profiles created in a project and location.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.DatastreamProjectsLocationsConnectionProfilesList(
        new DatastreamProjectsLocationsConnectionProfilesListRequest
        {
            ProjectsId = "some example string",
            LocationsId = "some example string",
        });
    // TODO: Handle 'response' of type ListConnectionProfilesResponse
}
catch (ApiException<DatastreamProjectsLocationsConnectionProfilesListError> ex)
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

<code>[DatastreamProjectsLocationsConnectionProfilesListRequest](src/GoogleCloudDatastream/Requests/DatastreamProjectsLocationsConnectionProfilesListRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ListConnectionProfilesResponse](src/GoogleCloudDatastream/Models/ListConnectionProfilesResponse.cs)</code>

**OnError**: <code>[ApiException](src/GoogleCloudDatastream/Core/Exceptions/ApiException.cs)&lt;[DatastreamProjectsLocationsConnectionProfilesListError](src/GoogleCloudDatastream/Errors/DatastreamProjectsLocationsConnectionProfilesListError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Operation&gt; DatastreamProjectsLocationsConnectionProfilesPatch(DatastreamProjectsLocationsConnectionProfilesPatchRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Use this method to update the parameters of a connection profile.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.DatastreamProjectsLocationsConnectionProfilesPatch(
        new DatastreamProjectsLocationsConnectionProfilesPatchRequest
        {
            ProjectsId = "some example string",
            LocationsId = "some example string",
            ConnectionProfilesId = "some example string",
            Body = new ConnectionProfile(),
        });
    // TODO: Handle 'response' of type Operation
}
catch (ApiException<DatastreamProjectsLocationsConnectionProfilesPatchError> ex)
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

<code>[DatastreamProjectsLocationsConnectionProfilesPatchRequest](src/GoogleCloudDatastream/Requests/DatastreamProjectsLocationsConnectionProfilesPatchRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Operation](src/GoogleCloudDatastream/Models/Operation.cs)</code>

**OnError**: <code>[ApiException](src/GoogleCloudDatastream/Core/Exceptions/ApiException.cs)&lt;[DatastreamProjectsLocationsConnectionProfilesPatchError](src/GoogleCloudDatastream/Errors/DatastreamProjectsLocationsConnectionProfilesPatchError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;FetchStaticIpsResponse&gt; DatastreamProjectsLocationsFetchStaticIps(DatastreamProjectsLocationsFetchStaticIpsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

The FetchStaticIps API call exposes the static IP addresses used by Datastream.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.DatastreamProjectsLocationsFetchStaticIps(
        new DatastreamProjectsLocationsFetchStaticIpsRequest
        {
            ProjectsId = "some example string",
            LocationsId = "some example string",
        });
    // TODO: Handle 'response' of type FetchStaticIpsResponse
}
catch (ApiException<DatastreamProjectsLocationsFetchStaticIpsError> ex)
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

<code>[DatastreamProjectsLocationsFetchStaticIpsRequest](src/GoogleCloudDatastream/Requests/DatastreamProjectsLocationsFetchStaticIpsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[FetchStaticIpsResponse](src/GoogleCloudDatastream/Models/FetchStaticIpsResponse.cs)</code>

**OnError**: <code>[ApiException](src/GoogleCloudDatastream/Core/Exceptions/ApiException.cs)&lt;[DatastreamProjectsLocationsFetchStaticIpsError](src/GoogleCloudDatastream/Errors/DatastreamProjectsLocationsFetchStaticIpsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Location&gt; DatastreamProjectsLocationsGet(DatastreamProjectsLocationsGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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
    var response = await client.DatastreamProjectsLocationsGet(new DatastreamProjectsLocationsGetRequest
    {
        ProjectsId = "some example string",
        LocationsId = "some example string",
    });
    // TODO: Handle 'response' of type Location
}
catch (ApiException<DatastreamProjectsLocationsGetError> ex)
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

<code>[DatastreamProjectsLocationsGetRequest](src/GoogleCloudDatastream/Requests/DatastreamProjectsLocationsGetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Location](src/GoogleCloudDatastream/Models/Location.cs)</code>

**OnError**: <code>[ApiException](src/GoogleCloudDatastream/Core/Exceptions/ApiException.cs)&lt;[DatastreamProjectsLocationsGetError](src/GoogleCloudDatastream/Errors/DatastreamProjectsLocationsGetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ListLocationsResponse&gt; DatastreamProjectsLocationsList(DatastreamProjectsLocationsListRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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
    var response = await client.DatastreamProjectsLocationsList(new DatastreamProjectsLocationsListRequest
    {
        ProjectsId = "some example string",
    });
    // TODO: Handle 'response' of type ListLocationsResponse
}
catch (ApiException<DatastreamProjectsLocationsListError> ex)
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

<code>[DatastreamProjectsLocationsListRequest](src/GoogleCloudDatastream/Requests/DatastreamProjectsLocationsListRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ListLocationsResponse](src/GoogleCloudDatastream/Models/ListLocationsResponse.cs)</code>

**OnError**: <code>[ApiException](src/GoogleCloudDatastream/Core/Exceptions/ApiException.cs)&lt;[DatastreamProjectsLocationsListError](src/GoogleCloudDatastream/Errors/DatastreamProjectsLocationsListError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;object&gt; DatastreamProjectsLocationsOperationsCancel(DatastreamProjectsLocationsOperationsCancelRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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
    var response = await client.DatastreamProjectsLocationsOperationsCancel(
        new DatastreamProjectsLocationsOperationsCancelRequest
        {
            ProjectsId = "some example string",
            LocationsId = "some example string",
            OperationsId = "some example string",
            Body = body,
        });
    // TODO: Handle 'response' of type object
}
catch (ApiException<DatastreamProjectsLocationsOperationsCancelError> ex)
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

<code>[DatastreamProjectsLocationsOperationsCancelRequest](src/GoogleCloudDatastream/Requests/DatastreamProjectsLocationsOperationsCancelRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>object</code>

**OnError**: <code>[ApiException](src/GoogleCloudDatastream/Core/Exceptions/ApiException.cs)&lt;[DatastreamProjectsLocationsOperationsCancelError](src/GoogleCloudDatastream/Errors/DatastreamProjectsLocationsOperationsCancelError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;object&gt; DatastreamProjectsLocationsOperationsDelete(DatastreamProjectsLocationsOperationsDeleteRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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
    var response = await client.DatastreamProjectsLocationsOperationsDelete(
        new DatastreamProjectsLocationsOperationsDeleteRequest
        {
            ProjectsId = "some example string",
            LocationsId = "some example string",
            OperationsId = "some example string",
        });
    // TODO: Handle 'response' of type object
}
catch (ApiException<DatastreamProjectsLocationsOperationsDeleteError> ex)
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

<code>[DatastreamProjectsLocationsOperationsDeleteRequest](src/GoogleCloudDatastream/Requests/DatastreamProjectsLocationsOperationsDeleteRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>object</code>

**OnError**: <code>[ApiException](src/GoogleCloudDatastream/Core/Exceptions/ApiException.cs)&lt;[DatastreamProjectsLocationsOperationsDeleteError](src/GoogleCloudDatastream/Errors/DatastreamProjectsLocationsOperationsDeleteError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Operation&gt; DatastreamProjectsLocationsOperationsGet(DatastreamProjectsLocationsOperationsGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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
    var response = await client.DatastreamProjectsLocationsOperationsGet(
        new DatastreamProjectsLocationsOperationsGetRequest
        {
            ProjectsId = "some example string",
            LocationsId = "some example string",
            OperationsId = "some example string",
        });
    // TODO: Handle 'response' of type Operation
}
catch (ApiException<DatastreamProjectsLocationsOperationsGetError> ex)
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

<code>[DatastreamProjectsLocationsOperationsGetRequest](src/GoogleCloudDatastream/Requests/DatastreamProjectsLocationsOperationsGetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Operation](src/GoogleCloudDatastream/Models/Operation.cs)</code>

**OnError**: <code>[ApiException](src/GoogleCloudDatastream/Core/Exceptions/ApiException.cs)&lt;[DatastreamProjectsLocationsOperationsGetError](src/GoogleCloudDatastream/Errors/DatastreamProjectsLocationsOperationsGetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ListOperationsResponse&gt; DatastreamProjectsLocationsOperationsList(DatastreamProjectsLocationsOperationsListRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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
    var response = await client.DatastreamProjectsLocationsOperationsList(
        new DatastreamProjectsLocationsOperationsListRequest
        {
            ProjectsId = "some example string",
            LocationsId = "some example string",
        });
    // TODO: Handle 'response' of type ListOperationsResponse
}
catch (ApiException<DatastreamProjectsLocationsOperationsListError> ex)
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

<code>[DatastreamProjectsLocationsOperationsListRequest](src/GoogleCloudDatastream/Requests/DatastreamProjectsLocationsOperationsListRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ListOperationsResponse](src/GoogleCloudDatastream/Models/ListOperationsResponse.cs)</code>

**OnError**: <code>[ApiException](src/GoogleCloudDatastream/Core/Exceptions/ApiException.cs)&lt;[DatastreamProjectsLocationsOperationsListError](src/GoogleCloudDatastream/Errors/DatastreamProjectsLocationsOperationsListError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Operation&gt; DatastreamProjectsLocationsPrivateConnectionsCreate(DatastreamProjectsLocationsPrivateConnectionsCreateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Use this method to create a private connectivity configuration.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.DatastreamProjectsLocationsPrivateConnectionsCreate(
        new DatastreamProjectsLocationsPrivateConnectionsCreateRequest
        {
            ProjectsId = "some example string",
            LocationsId = "some example string",
            Body = new PrivateConnection(),
        });
    // TODO: Handle 'response' of type Operation
}
catch (ApiException<DatastreamProjectsLocationsPrivateConnectionsCreateError> ex)
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

<code>[DatastreamProjectsLocationsPrivateConnectionsCreateRequest](src/GoogleCloudDatastream/Requests/DatastreamProjectsLocationsPrivateConnectionsCreateRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Operation](src/GoogleCloudDatastream/Models/Operation.cs)</code>

**OnError**: <code>[ApiException](src/GoogleCloudDatastream/Core/Exceptions/ApiException.cs)&lt;[DatastreamProjectsLocationsPrivateConnectionsCreateError](src/GoogleCloudDatastream/Errors/DatastreamProjectsLocationsPrivateConnectionsCreateError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Operation&gt; DatastreamProjectsLocationsPrivateConnectionsDelete(DatastreamProjectsLocationsPrivateConnectionsDeleteRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Use this method to delete a private connectivity configuration.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.DatastreamProjectsLocationsPrivateConnectionsDelete(
        new DatastreamProjectsLocationsPrivateConnectionsDeleteRequest
        {
            ProjectsId = "some example string",
            LocationsId = "some example string",
            PrivateConnectionsId = "some example string",
        });
    // TODO: Handle 'response' of type Operation
}
catch (ApiException<DatastreamProjectsLocationsPrivateConnectionsDeleteError> ex)
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

<code>[DatastreamProjectsLocationsPrivateConnectionsDeleteRequest](src/GoogleCloudDatastream/Requests/DatastreamProjectsLocationsPrivateConnectionsDeleteRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Operation](src/GoogleCloudDatastream/Models/Operation.cs)</code>

**OnError**: <code>[ApiException](src/GoogleCloudDatastream/Core/Exceptions/ApiException.cs)&lt;[DatastreamProjectsLocationsPrivateConnectionsDeleteError](src/GoogleCloudDatastream/Errors/DatastreamProjectsLocationsPrivateConnectionsDeleteError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;PrivateConnection&gt; DatastreamProjectsLocationsPrivateConnectionsGet(DatastreamProjectsLocationsPrivateConnectionsGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Use this method to get details about a private connectivity configuration.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.DatastreamProjectsLocationsPrivateConnectionsGet(
        new DatastreamProjectsLocationsPrivateConnectionsGetRequest
        {
            ProjectsId = "some example string",
            LocationsId = "some example string",
            PrivateConnectionsId = "some example string",
        });
    // TODO: Handle 'response' of type PrivateConnection
}
catch (ApiException<DatastreamProjectsLocationsPrivateConnectionsGetError> ex)
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

<code>[DatastreamProjectsLocationsPrivateConnectionsGetRequest](src/GoogleCloudDatastream/Requests/DatastreamProjectsLocationsPrivateConnectionsGetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PrivateConnection](src/GoogleCloudDatastream/Models/PrivateConnection.cs)</code>

**OnError**: <code>[ApiException](src/GoogleCloudDatastream/Core/Exceptions/ApiException.cs)&lt;[DatastreamProjectsLocationsPrivateConnectionsGetError](src/GoogleCloudDatastream/Errors/DatastreamProjectsLocationsPrivateConnectionsGetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ListPrivateConnectionsResponse&gt; DatastreamProjectsLocationsPrivateConnectionsList(DatastreamProjectsLocationsPrivateConnectionsListRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Use this method to list private connectivity configurations in a project and location.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.DatastreamProjectsLocationsPrivateConnectionsList(
        new DatastreamProjectsLocationsPrivateConnectionsListRequest
        {
            ProjectsId = "some example string",
            LocationsId = "some example string",
        });
    // TODO: Handle 'response' of type ListPrivateConnectionsResponse
}
catch (ApiException<DatastreamProjectsLocationsPrivateConnectionsListError> ex)
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

<code>[DatastreamProjectsLocationsPrivateConnectionsListRequest](src/GoogleCloudDatastream/Requests/DatastreamProjectsLocationsPrivateConnectionsListRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ListPrivateConnectionsResponse](src/GoogleCloudDatastream/Models/ListPrivateConnectionsResponse.cs)</code>

**OnError**: <code>[ApiException](src/GoogleCloudDatastream/Core/Exceptions/ApiException.cs)&lt;[DatastreamProjectsLocationsPrivateConnectionsListError](src/GoogleCloudDatastream/Errors/DatastreamProjectsLocationsPrivateConnectionsListError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Operation&gt; DatastreamProjectsLocationsPrivateConnectionsRoutesCreate(DatastreamProjectsLocationsPrivateConnectionsRoutesCreateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Use this method to create a route for a private connectivity configuration in a project and location.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.DatastreamProjectsLocationsPrivateConnectionsRoutesCreate(
        new DatastreamProjectsLocationsPrivateConnectionsRoutesCreateRequest
        {
            ProjectsId = "some example string",
            LocationsId = "some example string",
            PrivateConnectionsId = "some example string",
            Body = new Route(),
        });
    // TODO: Handle 'response' of type Operation
}
catch (ApiException<DatastreamProjectsLocationsPrivateConnectionsRoutesCreateError> ex)
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

<code>[DatastreamProjectsLocationsPrivateConnectionsRoutesCreateRequest](src/GoogleCloudDatastream/Requests/DatastreamProjectsLocationsPrivateConnectionsRoutesCreateRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Operation](src/GoogleCloudDatastream/Models/Operation.cs)</code>

**OnError**: <code>[ApiException](src/GoogleCloudDatastream/Core/Exceptions/ApiException.cs)&lt;[DatastreamProjectsLocationsPrivateConnectionsRoutesCreateError](src/GoogleCloudDatastream/Errors/DatastreamProjectsLocationsPrivateConnectionsRoutesCreateError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Operation&gt; DatastreamProjectsLocationsPrivateConnectionsRoutesDelete(DatastreamProjectsLocationsPrivateConnectionsRoutesDeleteRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Use this method to delete a route.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.DatastreamProjectsLocationsPrivateConnectionsRoutesDelete(
        new DatastreamProjectsLocationsPrivateConnectionsRoutesDeleteRequest
        {
            ProjectsId = "some example string",
            LocationsId = "some example string",
            PrivateConnectionsId = "some example string",
            RoutesId = "some example string",
        });
    // TODO: Handle 'response' of type Operation
}
catch (ApiException<DatastreamProjectsLocationsPrivateConnectionsRoutesDeleteError> ex)
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

<code>[DatastreamProjectsLocationsPrivateConnectionsRoutesDeleteRequest](src/GoogleCloudDatastream/Requests/DatastreamProjectsLocationsPrivateConnectionsRoutesDeleteRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Operation](src/GoogleCloudDatastream/Models/Operation.cs)</code>

**OnError**: <code>[ApiException](src/GoogleCloudDatastream/Core/Exceptions/ApiException.cs)&lt;[DatastreamProjectsLocationsPrivateConnectionsRoutesDeleteError](src/GoogleCloudDatastream/Errors/DatastreamProjectsLocationsPrivateConnectionsRoutesDeleteError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Route&gt; DatastreamProjectsLocationsPrivateConnectionsRoutesGet(DatastreamProjectsLocationsPrivateConnectionsRoutesGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Use this method to get details about a route.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.DatastreamProjectsLocationsPrivateConnectionsRoutesGet(
        new DatastreamProjectsLocationsPrivateConnectionsRoutesGetRequest
        {
            ProjectsId = "some example string",
            LocationsId = "some example string",
            PrivateConnectionsId = "some example string",
            RoutesId = "some example string",
        });
    // TODO: Handle 'response' of type Route
}
catch (ApiException<DatastreamProjectsLocationsPrivateConnectionsRoutesGetError> ex)
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

<code>[DatastreamProjectsLocationsPrivateConnectionsRoutesGetRequest](src/GoogleCloudDatastream/Requests/DatastreamProjectsLocationsPrivateConnectionsRoutesGetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Route](src/GoogleCloudDatastream/Models/Route.cs)</code>

**OnError**: <code>[ApiException](src/GoogleCloudDatastream/Core/Exceptions/ApiException.cs)&lt;[DatastreamProjectsLocationsPrivateConnectionsRoutesGetError](src/GoogleCloudDatastream/Errors/DatastreamProjectsLocationsPrivateConnectionsRoutesGetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ListRoutesResponse&gt; DatastreamProjectsLocationsPrivateConnectionsRoutesList(DatastreamProjectsLocationsPrivateConnectionsRoutesListRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Use this method to list routes created for a private connectivity configuration in a project and location.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.DatastreamProjectsLocationsPrivateConnectionsRoutesList(
        new DatastreamProjectsLocationsPrivateConnectionsRoutesListRequest
        {
            ProjectsId = "some example string",
            LocationsId = "some example string",
            PrivateConnectionsId = "some example string",
        });
    // TODO: Handle 'response' of type ListRoutesResponse
}
catch (ApiException<DatastreamProjectsLocationsPrivateConnectionsRoutesListError> ex)
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

<code>[DatastreamProjectsLocationsPrivateConnectionsRoutesListRequest](src/GoogleCloudDatastream/Requests/DatastreamProjectsLocationsPrivateConnectionsRoutesListRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ListRoutesResponse](src/GoogleCloudDatastream/Models/ListRoutesResponse.cs)</code>

**OnError**: <code>[ApiException](src/GoogleCloudDatastream/Core/Exceptions/ApiException.cs)&lt;[DatastreamProjectsLocationsPrivateConnectionsRoutesListError](src/GoogleCloudDatastream/Errors/DatastreamProjectsLocationsPrivateConnectionsRoutesListError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Operation&gt; DatastreamProjectsLocationsStreamsCreate(DatastreamProjectsLocationsStreamsCreateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Use this method to create a stream.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.DatastreamProjectsLocationsStreamsCreate(
        new DatastreamProjectsLocationsStreamsCreateRequest
        {
            ProjectsId = "some example string",
            LocationsId = "some example string",
            Body = new Stream(),
        });
    // TODO: Handle 'response' of type Operation
}
catch (ApiException<DatastreamProjectsLocationsStreamsCreateError> ex)
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

<code>[DatastreamProjectsLocationsStreamsCreateRequest](src/GoogleCloudDatastream/Requests/DatastreamProjectsLocationsStreamsCreateRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Operation](src/GoogleCloudDatastream/Models/Operation.cs)</code>

**OnError**: <code>[ApiException](src/GoogleCloudDatastream/Core/Exceptions/ApiException.cs)&lt;[DatastreamProjectsLocationsStreamsCreateError](src/GoogleCloudDatastream/Errors/DatastreamProjectsLocationsStreamsCreateError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Operation&gt; DatastreamProjectsLocationsStreamsDelete(DatastreamProjectsLocationsStreamsDeleteRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Use this method to delete a stream.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.DatastreamProjectsLocationsStreamsDelete(
        new DatastreamProjectsLocationsStreamsDeleteRequest
        {
            ProjectsId = "some example string",
            LocationsId = "some example string",
            StreamsId = "some example string",
        });
    // TODO: Handle 'response' of type Operation
}
catch (ApiException<DatastreamProjectsLocationsStreamsDeleteError> ex)
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

<code>[DatastreamProjectsLocationsStreamsDeleteRequest](src/GoogleCloudDatastream/Requests/DatastreamProjectsLocationsStreamsDeleteRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Operation](src/GoogleCloudDatastream/Models/Operation.cs)</code>

**OnError**: <code>[ApiException](src/GoogleCloudDatastream/Core/Exceptions/ApiException.cs)&lt;[DatastreamProjectsLocationsStreamsDeleteError](src/GoogleCloudDatastream/Errors/DatastreamProjectsLocationsStreamsDeleteError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Stream&gt; DatastreamProjectsLocationsStreamsGet(DatastreamProjectsLocationsStreamsGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Use this method to get details about a stream.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.DatastreamProjectsLocationsStreamsGet(new DatastreamProjectsLocationsStreamsGetRequest
    {
        ProjectsId = "some example string",
        LocationsId = "some example string",
        StreamsId = "some example string",
    });
    // TODO: Handle 'response' of type Stream
}
catch (ApiException<DatastreamProjectsLocationsStreamsGetError> ex)
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

<code>[DatastreamProjectsLocationsStreamsGetRequest](src/GoogleCloudDatastream/Requests/DatastreamProjectsLocationsStreamsGetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Stream](src/GoogleCloudDatastream/Models/Stream.cs)</code>

**OnError**: <code>[ApiException](src/GoogleCloudDatastream/Core/Exceptions/ApiException.cs)&lt;[DatastreamProjectsLocationsStreamsGetError](src/GoogleCloudDatastream/Errors/DatastreamProjectsLocationsStreamsGetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ListStreamsResponse&gt; DatastreamProjectsLocationsStreamsList(DatastreamProjectsLocationsStreamsListRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Use this method to list streams in a project and location.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.DatastreamProjectsLocationsStreamsList(new DatastreamProjectsLocationsStreamsListRequest
    {
        ProjectsId = "some example string",
        LocationsId = "some example string",
    });
    // TODO: Handle 'response' of type ListStreamsResponse
}
catch (ApiException<DatastreamProjectsLocationsStreamsListError> ex)
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

<code>[DatastreamProjectsLocationsStreamsListRequest](src/GoogleCloudDatastream/Requests/DatastreamProjectsLocationsStreamsListRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ListStreamsResponse](src/GoogleCloudDatastream/Models/ListStreamsResponse.cs)</code>

**OnError**: <code>[ApiException](src/GoogleCloudDatastream/Core/Exceptions/ApiException.cs)&lt;[DatastreamProjectsLocationsStreamsListError](src/GoogleCloudDatastream/Errors/DatastreamProjectsLocationsStreamsListError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;StreamObject&gt; DatastreamProjectsLocationsStreamsObjectsGet(DatastreamProjectsLocationsStreamsObjectsGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Use this method to get details about a stream object.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.DatastreamProjectsLocationsStreamsObjectsGet(
        new DatastreamProjectsLocationsStreamsObjectsGetRequest
        {
            ProjectsId = "some example string",
            LocationsId = "some example string",
            StreamsId = "some example string",
            ObjectsId = "some example string",
        });
    // TODO: Handle 'response' of type StreamObject
}
catch (ApiException<DatastreamProjectsLocationsStreamsObjectsGetError> ex)
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

<code>[DatastreamProjectsLocationsStreamsObjectsGetRequest](src/GoogleCloudDatastream/Requests/DatastreamProjectsLocationsStreamsObjectsGetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[StreamObject](src/GoogleCloudDatastream/Models/StreamObject.cs)</code>

**OnError**: <code>[ApiException](src/GoogleCloudDatastream/Core/Exceptions/ApiException.cs)&lt;[DatastreamProjectsLocationsStreamsObjectsGetError](src/GoogleCloudDatastream/Errors/DatastreamProjectsLocationsStreamsObjectsGetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ListStreamObjectsResponse&gt; DatastreamProjectsLocationsStreamsObjectsList(DatastreamProjectsLocationsStreamsObjectsListRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Use this method to list the objects of a specific stream.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.DatastreamProjectsLocationsStreamsObjectsList(
        new DatastreamProjectsLocationsStreamsObjectsListRequest
        {
            ProjectsId = "some example string",
            LocationsId = "some example string",
            StreamsId = "some example string",
        });
    // TODO: Handle 'response' of type ListStreamObjectsResponse
}
catch (ApiException<DatastreamProjectsLocationsStreamsObjectsListError> ex)
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

<code>[DatastreamProjectsLocationsStreamsObjectsListRequest](src/GoogleCloudDatastream/Requests/DatastreamProjectsLocationsStreamsObjectsListRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ListStreamObjectsResponse](src/GoogleCloudDatastream/Models/ListStreamObjectsResponse.cs)</code>

**OnError**: <code>[ApiException](src/GoogleCloudDatastream/Core/Exceptions/ApiException.cs)&lt;[DatastreamProjectsLocationsStreamsObjectsListError](src/GoogleCloudDatastream/Errors/DatastreamProjectsLocationsStreamsObjectsListError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;StreamObject&gt; DatastreamProjectsLocationsStreamsObjectsLookup(DatastreamProjectsLocationsStreamsObjectsLookupRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Use this method to look up a stream object by its source object identifier.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.DatastreamProjectsLocationsStreamsObjectsLookup(
        new DatastreamProjectsLocationsStreamsObjectsLookupRequest
        {
            ProjectsId = "some example string",
            LocationsId = "some example string",
            StreamsId = "some example string",
            Body = new LookupStreamObjectRequest(),
        });
    // TODO: Handle 'response' of type StreamObject
}
catch (ApiException<DatastreamProjectsLocationsStreamsObjectsLookupError> ex)
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

<code>[DatastreamProjectsLocationsStreamsObjectsLookupRequest](src/GoogleCloudDatastream/Requests/DatastreamProjectsLocationsStreamsObjectsLookupRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[StreamObject](src/GoogleCloudDatastream/Models/StreamObject.cs)</code>

**OnError**: <code>[ApiException](src/GoogleCloudDatastream/Core/Exceptions/ApiException.cs)&lt;[DatastreamProjectsLocationsStreamsObjectsLookupError](src/GoogleCloudDatastream/Errors/DatastreamProjectsLocationsStreamsObjectsLookupError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;StartBackfillJobResponse&gt; DatastreamProjectsLocationsStreamsObjectsStartBackfillJob(DatastreamProjectsLocationsStreamsObjectsStartBackfillJobRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Use this method to start a backfill job for the specified stream object.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.DatastreamProjectsLocationsStreamsObjectsStartBackfillJob(
        new DatastreamProjectsLocationsStreamsObjectsStartBackfillJobRequest
        {
            ProjectsId = "some example string",
            LocationsId = "some example string",
            StreamsId = "some example string",
            ObjectsId = "some example string",
            Body = new StartBackfillJobRequest(),
        });
    // TODO: Handle 'response' of type StartBackfillJobResponse
}
catch (ApiException<DatastreamProjectsLocationsStreamsObjectsStartBackfillJobError> ex)
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

<code>[DatastreamProjectsLocationsStreamsObjectsStartBackfillJobRequest](src/GoogleCloudDatastream/Requests/DatastreamProjectsLocationsStreamsObjectsStartBackfillJobRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[StartBackfillJobResponse](src/GoogleCloudDatastream/Models/StartBackfillJobResponse.cs)</code>

**OnError**: <code>[ApiException](src/GoogleCloudDatastream/Core/Exceptions/ApiException.cs)&lt;[DatastreamProjectsLocationsStreamsObjectsStartBackfillJobError](src/GoogleCloudDatastream/Errors/DatastreamProjectsLocationsStreamsObjectsStartBackfillJobError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;StopBackfillJobResponse&gt; DatastreamProjectsLocationsStreamsObjectsStopBackfillJob(DatastreamProjectsLocationsStreamsObjectsStopBackfillJobRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Use this method to stop a backfill job for the specified stream object.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.DatastreamProjectsLocationsStreamsObjectsStopBackfillJob(
        new DatastreamProjectsLocationsStreamsObjectsStopBackfillJobRequest
        {
            ProjectsId = "some example string",
            LocationsId = "some example string",
            StreamsId = "some example string",
            ObjectsId = "some example string",
            Body = body,
        });
    // TODO: Handle 'response' of type StopBackfillJobResponse
}
catch (ApiException<DatastreamProjectsLocationsStreamsObjectsStopBackfillJobError> ex)
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

<code>[DatastreamProjectsLocationsStreamsObjectsStopBackfillJobRequest](src/GoogleCloudDatastream/Requests/DatastreamProjectsLocationsStreamsObjectsStopBackfillJobRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[StopBackfillJobResponse](src/GoogleCloudDatastream/Models/StopBackfillJobResponse.cs)</code>

**OnError**: <code>[ApiException](src/GoogleCloudDatastream/Core/Exceptions/ApiException.cs)&lt;[DatastreamProjectsLocationsStreamsObjectsStopBackfillJobError](src/GoogleCloudDatastream/Errors/DatastreamProjectsLocationsStreamsObjectsStopBackfillJobError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Operation&gt; DatastreamProjectsLocationsStreamsPatch(DatastreamProjectsLocationsStreamsPatchRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Use this method to update the configuration of a stream.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.DatastreamProjectsLocationsStreamsPatch(
        new DatastreamProjectsLocationsStreamsPatchRequest
        {
            ProjectsId = "some example string",
            LocationsId = "some example string",
            StreamsId = "some example string",
            Body = new Stream(),
        });
    // TODO: Handle 'response' of type Operation
}
catch (ApiException<DatastreamProjectsLocationsStreamsPatchError> ex)
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

<code>[DatastreamProjectsLocationsStreamsPatchRequest](src/GoogleCloudDatastream/Requests/DatastreamProjectsLocationsStreamsPatchRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Operation](src/GoogleCloudDatastream/Models/Operation.cs)</code>

**OnError**: <code>[ApiException](src/GoogleCloudDatastream/Core/Exceptions/ApiException.cs)&lt;[DatastreamProjectsLocationsStreamsPatchError](src/GoogleCloudDatastream/Errors/DatastreamProjectsLocationsStreamsPatchError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Operation&gt; DatastreamProjectsLocationsStreamsRun(DatastreamProjectsLocationsStreamsRunRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Use this method to start, resume or recover a stream with a non default CDC strategy.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.DatastreamProjectsLocationsStreamsRun(new DatastreamProjectsLocationsStreamsRunRequest
    {
        ProjectsId = "some example string",
        LocationsId = "some example string",
        StreamsId = "some example string",
        Body = new RunStreamRequest(),
    });
    // TODO: Handle 'response' of type Operation
}
catch (ApiException<DatastreamProjectsLocationsStreamsRunError> ex)
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

<code>[DatastreamProjectsLocationsStreamsRunRequest](src/GoogleCloudDatastream/Requests/DatastreamProjectsLocationsStreamsRunRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Operation](src/GoogleCloudDatastream/Models/Operation.cs)</code>

**OnError**: <code>[ApiException](src/GoogleCloudDatastream/Core/Exceptions/ApiException.cs)&lt;[DatastreamProjectsLocationsStreamsRunError](src/GoogleCloudDatastream/Errors/DatastreamProjectsLocationsStreamsRunError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

