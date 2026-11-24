# Reference

Every operation below is shown in its throwing form. On an error status it throws `ApiException<TError>` — the status code, headers, content type and the operation's error type, `RawError` (the raw body) when the spec declares none — and where an operation offers an `…AsResult` sibling, that sibling returns `ApiResult<TResponse, TError>` instead. A request that produces no usable response surfaces as `SdkConnectionException` or `SdkTimeoutException`, a body that does not match the documented response type as `ResponseDeserializationException`, and a required credential that is not configured, or one that cannot be applied, as `AuthSchemeException`; all of them derive from `SdkException` and name the failed call. See [README → Error Handling](README.md#error-handling).

> Source: [GoogleCloudBuildClient](src/GoogleCloudBuild/GoogleCloudBuildClient.cs)

<details>
<summary><code>Task&lt;Operation&gt; CloudbuildProjectsLocationsConnectionsCreate(CloudbuildProjectsLocationsConnectionsCreateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a Connection.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.CloudbuildProjectsLocationsConnectionsCreate(
        new CloudbuildProjectsLocationsConnectionsCreateRequest
        {
            ProjectsId = "some example string",
            LocationsId = "some example string",
            Body = new Connection(),
        });
    // TODO: Handle 'response' of type Operation
}
catch (ApiException<CloudbuildProjectsLocationsConnectionsCreateError> ex)
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

<code>[CloudbuildProjectsLocationsConnectionsCreateRequest](src/GoogleCloudBuild/Requests/CloudbuildProjectsLocationsConnectionsCreateRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Operation](src/GoogleCloudBuild/Models/Operation.cs)</code>

**OnError**: <code>[ApiException](src/GoogleCloudBuild/Core/Exceptions/ApiException.cs)&lt;[CloudbuildProjectsLocationsConnectionsCreateError](src/GoogleCloudBuild/Errors/CloudbuildProjectsLocationsConnectionsCreateError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Operation&gt; CloudbuildProjectsLocationsConnectionsDelete(CloudbuildProjectsLocationsConnectionsDeleteRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a single connection.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.CloudbuildProjectsLocationsConnectionsDelete(
        new CloudbuildProjectsLocationsConnectionsDeleteRequest
        {
            ProjectsId = "some example string",
            LocationsId = "some example string",
            ConnectionsId = "some example string",
        });
    // TODO: Handle 'response' of type Operation
}
catch (ApiException<CloudbuildProjectsLocationsConnectionsDeleteError> ex)
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

<code>[CloudbuildProjectsLocationsConnectionsDeleteRequest](src/GoogleCloudBuild/Requests/CloudbuildProjectsLocationsConnectionsDeleteRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Operation](src/GoogleCloudBuild/Models/Operation.cs)</code>

**OnError**: <code>[ApiException](src/GoogleCloudBuild/Core/Exceptions/ApiException.cs)&lt;[CloudbuildProjectsLocationsConnectionsDeleteError](src/GoogleCloudBuild/Errors/CloudbuildProjectsLocationsConnectionsDeleteError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;FetchLinkableRepositoriesResponse&gt; CloudbuildProjectsLocationsConnectionsFetchLinkableRepositories(CloudbuildProjectsLocationsConnectionsFetchLinkableRepositoriesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

FetchLinkableRepositories get repositories from SCM that are accessible and could be added to the connection.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.CloudbuildProjectsLocationsConnectionsFetchLinkableRepositories(
        new CloudbuildProjectsLocationsConnectionsFetchLinkableRepositoriesRequest
        {
            ProjectsId = "some example string",
            LocationsId = "some example string",
            ConnectionsId = "some example string",
        });
    // TODO: Handle 'response' of type FetchLinkableRepositoriesResponse
}
catch (ApiException<CloudbuildProjectsLocationsConnectionsFetchLinkableRepositoriesError> ex)
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

<code>[CloudbuildProjectsLocationsConnectionsFetchLinkableRepositoriesRequest](src/GoogleCloudBuild/Requests/CloudbuildProjectsLocationsConnectionsFetchLinkableRepositoriesRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[FetchLinkableRepositoriesResponse](src/GoogleCloudBuild/Models/FetchLinkableRepositoriesResponse.cs)</code>

**OnError**: <code>[ApiException](src/GoogleCloudBuild/Core/Exceptions/ApiException.cs)&lt;[CloudbuildProjectsLocationsConnectionsFetchLinkableRepositoriesError](src/GoogleCloudBuild/Errors/CloudbuildProjectsLocationsConnectionsFetchLinkableRepositoriesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Connection&gt; CloudbuildProjectsLocationsConnectionsGet(CloudbuildProjectsLocationsConnectionsGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets details of a single connection.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.CloudbuildProjectsLocationsConnectionsGet(
        new CloudbuildProjectsLocationsConnectionsGetRequest
        {
            ProjectsId = "some example string",
            LocationsId = "some example string",
            ConnectionsId = "some example string",
        });
    // TODO: Handle 'response' of type Connection
}
catch (ApiException<CloudbuildProjectsLocationsConnectionsGetError> ex)
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

<code>[CloudbuildProjectsLocationsConnectionsGetRequest](src/GoogleCloudBuild/Requests/CloudbuildProjectsLocationsConnectionsGetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Connection](src/GoogleCloudBuild/Models/Connection.cs)</code>

**OnError**: <code>[ApiException](src/GoogleCloudBuild/Core/Exceptions/ApiException.cs)&lt;[CloudbuildProjectsLocationsConnectionsGetError](src/GoogleCloudBuild/Errors/CloudbuildProjectsLocationsConnectionsGetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Policy&gt; CloudbuildProjectsLocationsConnectionsGetIamPolicy(CloudbuildProjectsLocationsConnectionsGetIamPolicyRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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
    var response = await client.CloudbuildProjectsLocationsConnectionsGetIamPolicy(
        new CloudbuildProjectsLocationsConnectionsGetIamPolicyRequest
        {
            ProjectsId = "some example string",
            LocationsId = "some example string",
            ConnectionsId = "some example string",
        });
    // TODO: Handle 'response' of type Policy
}
catch (ApiException<CloudbuildProjectsLocationsConnectionsGetIamPolicyError> ex)
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

<code>[CloudbuildProjectsLocationsConnectionsGetIamPolicyRequest](src/GoogleCloudBuild/Requests/CloudbuildProjectsLocationsConnectionsGetIamPolicyRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Policy](src/GoogleCloudBuild/Models/Policy.cs)</code>

**OnError**: <code>[ApiException](src/GoogleCloudBuild/Core/Exceptions/ApiException.cs)&lt;[CloudbuildProjectsLocationsConnectionsGetIamPolicyError](src/GoogleCloudBuild/Errors/CloudbuildProjectsLocationsConnectionsGetIamPolicyError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ListConnectionsResponse&gt; CloudbuildProjectsLocationsConnectionsList(CloudbuildProjectsLocationsConnectionsListRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists Connections in a given project and location.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.CloudbuildProjectsLocationsConnectionsList(
        new CloudbuildProjectsLocationsConnectionsListRequest
        {
            ProjectsId = "some example string",
            LocationsId = "some example string",
        });
    // TODO: Handle 'response' of type ListConnectionsResponse
}
catch (ApiException<CloudbuildProjectsLocationsConnectionsListError> ex)
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

<code>[CloudbuildProjectsLocationsConnectionsListRequest](src/GoogleCloudBuild/Requests/CloudbuildProjectsLocationsConnectionsListRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ListConnectionsResponse](src/GoogleCloudBuild/Models/ListConnectionsResponse.cs)</code>

**OnError**: <code>[ApiException](src/GoogleCloudBuild/Core/Exceptions/ApiException.cs)&lt;[CloudbuildProjectsLocationsConnectionsListError](src/GoogleCloudBuild/Errors/CloudbuildProjectsLocationsConnectionsListError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Operation&gt; CloudbuildProjectsLocationsConnectionsPatch(CloudbuildProjectsLocationsConnectionsPatchRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates a single connection.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.CloudbuildProjectsLocationsConnectionsPatch(
        new CloudbuildProjectsLocationsConnectionsPatchRequest
        {
            ProjectsId = "some example string",
            LocationsId = "some example string",
            ConnectionsId = "some example string",
            Body = new Connection(),
        });
    // TODO: Handle 'response' of type Operation
}
catch (ApiException<CloudbuildProjectsLocationsConnectionsPatchError> ex)
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

<code>[CloudbuildProjectsLocationsConnectionsPatchRequest](src/GoogleCloudBuild/Requests/CloudbuildProjectsLocationsConnectionsPatchRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Operation](src/GoogleCloudBuild/Models/Operation.cs)</code>

**OnError**: <code>[ApiException](src/GoogleCloudBuild/Core/Exceptions/ApiException.cs)&lt;[CloudbuildProjectsLocationsConnectionsPatchError](src/GoogleCloudBuild/Errors/CloudbuildProjectsLocationsConnectionsPatchError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;object&gt; CloudbuildProjectsLocationsConnectionsProcessWebhook(CloudbuildProjectsLocationsConnectionsProcessWebhookRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

ProcessWebhook is called by the external SCM for notifying of events.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.CloudbuildProjectsLocationsConnectionsProcessWebhook(
        new CloudbuildProjectsLocationsConnectionsProcessWebhookRequest
        {
            ProjectsId = "some example string",
            LocationsId = "some example string",
            Body = new HttpBody(),
        });
    // TODO: Handle 'response' of type object
}
catch (ApiException<CloudbuildProjectsLocationsConnectionsProcessWebhookError> ex)
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

<code>[CloudbuildProjectsLocationsConnectionsProcessWebhookRequest](src/GoogleCloudBuild/Requests/CloudbuildProjectsLocationsConnectionsProcessWebhookRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>object</code>

**OnError**: <code>[ApiException](src/GoogleCloudBuild/Core/Exceptions/ApiException.cs)&lt;[CloudbuildProjectsLocationsConnectionsProcessWebhookError](src/GoogleCloudBuild/Errors/CloudbuildProjectsLocationsConnectionsProcessWebhookError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;FetchReadTokenResponse&gt; CloudbuildProjectsLocationsConnectionsRepositoriesAccessReadToken(CloudbuildProjectsLocationsConnectionsRepositoriesAccessReadTokenRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Fetches read token of a given repository.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.CloudbuildProjectsLocationsConnectionsRepositoriesAccessReadToken(
        new CloudbuildProjectsLocationsConnectionsRepositoriesAccessReadTokenRequest
        {
            ProjectsId = "some example string",
            LocationsId = "some example string",
            ConnectionsId = "some example string",
            RepositoriesId = "some example string",
            Body = body,
        });
    // TODO: Handle 'response' of type FetchReadTokenResponse
}
catch (ApiException<CloudbuildProjectsLocationsConnectionsRepositoriesAccessReadTokenError> ex)
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

<code>[CloudbuildProjectsLocationsConnectionsRepositoriesAccessReadTokenRequest](src/GoogleCloudBuild/Requests/CloudbuildProjectsLocationsConnectionsRepositoriesAccessReadTokenRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[FetchReadTokenResponse](src/GoogleCloudBuild/Models/FetchReadTokenResponse.cs)</code>

**OnError**: <code>[ApiException](src/GoogleCloudBuild/Core/Exceptions/ApiException.cs)&lt;[CloudbuildProjectsLocationsConnectionsRepositoriesAccessReadTokenError](src/GoogleCloudBuild/Errors/CloudbuildProjectsLocationsConnectionsRepositoriesAccessReadTokenError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;FetchReadWriteTokenResponse&gt; CloudbuildProjectsLocationsConnectionsRepositoriesAccessReadWriteToken(CloudbuildProjectsLocationsConnectionsRepositoriesAccessReadWriteTokenRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Fetches read/write token of a given repository.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.CloudbuildProjectsLocationsConnectionsRepositoriesAccessReadWriteToken(
        new CloudbuildProjectsLocationsConnectionsRepositoriesAccessReadWriteTokenRequest
        {
            ProjectsId = "some example string",
            LocationsId = "some example string",
            ConnectionsId = "some example string",
            RepositoriesId = "some example string",
            Body = body,
        });
    // TODO: Handle 'response' of type FetchReadWriteTokenResponse
}
catch (ApiException<CloudbuildProjectsLocationsConnectionsRepositoriesAccessReadWriteTokenError> ex)
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

<code>[CloudbuildProjectsLocationsConnectionsRepositoriesAccessReadWriteTokenRequest](src/GoogleCloudBuild/Requests/CloudbuildProjectsLocationsConnectionsRepositoriesAccessReadWriteTokenRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[FetchReadWriteTokenResponse](src/GoogleCloudBuild/Models/FetchReadWriteTokenResponse.cs)</code>

**OnError**: <code>[ApiException](src/GoogleCloudBuild/Core/Exceptions/ApiException.cs)&lt;[CloudbuildProjectsLocationsConnectionsRepositoriesAccessReadWriteTokenError](src/GoogleCloudBuild/Errors/CloudbuildProjectsLocationsConnectionsRepositoriesAccessReadWriteTokenError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Operation&gt; CloudbuildProjectsLocationsConnectionsRepositoriesBatchCreate(CloudbuildProjectsLocationsConnectionsRepositoriesBatchCreateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates multiple repositories inside a connection.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.CloudbuildProjectsLocationsConnectionsRepositoriesBatchCreate(
        new CloudbuildProjectsLocationsConnectionsRepositoriesBatchCreateRequest
        {
            ProjectsId = "some example string",
            LocationsId = "some example string",
            ConnectionsId = "some example string",
            Body = new BatchCreateRepositoriesRequest(),
        });
    // TODO: Handle 'response' of type Operation
}
catch (ApiException<CloudbuildProjectsLocationsConnectionsRepositoriesBatchCreateError> ex)
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

<code>[CloudbuildProjectsLocationsConnectionsRepositoriesBatchCreateRequest](src/GoogleCloudBuild/Requests/CloudbuildProjectsLocationsConnectionsRepositoriesBatchCreateRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Operation](src/GoogleCloudBuild/Models/Operation.cs)</code>

**OnError**: <code>[ApiException](src/GoogleCloudBuild/Core/Exceptions/ApiException.cs)&lt;[CloudbuildProjectsLocationsConnectionsRepositoriesBatchCreateError](src/GoogleCloudBuild/Errors/CloudbuildProjectsLocationsConnectionsRepositoriesBatchCreateError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Operation&gt; CloudbuildProjectsLocationsConnectionsRepositoriesCreate(CloudbuildProjectsLocationsConnectionsRepositoriesCreateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a Repository.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.CloudbuildProjectsLocationsConnectionsRepositoriesCreate(
        new CloudbuildProjectsLocationsConnectionsRepositoriesCreateRequest
        {
            ProjectsId = "some example string",
            LocationsId = "some example string",
            ConnectionsId = "some example string",
            Body = new Repository(),
        });
    // TODO: Handle 'response' of type Operation
}
catch (ApiException<CloudbuildProjectsLocationsConnectionsRepositoriesCreateError> ex)
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

<code>[CloudbuildProjectsLocationsConnectionsRepositoriesCreateRequest](src/GoogleCloudBuild/Requests/CloudbuildProjectsLocationsConnectionsRepositoriesCreateRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Operation](src/GoogleCloudBuild/Models/Operation.cs)</code>

**OnError**: <code>[ApiException](src/GoogleCloudBuild/Core/Exceptions/ApiException.cs)&lt;[CloudbuildProjectsLocationsConnectionsRepositoriesCreateError](src/GoogleCloudBuild/Errors/CloudbuildProjectsLocationsConnectionsRepositoriesCreateError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Operation&gt; CloudbuildProjectsLocationsConnectionsRepositoriesDelete(CloudbuildProjectsLocationsConnectionsRepositoriesDeleteRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a single repository.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.CloudbuildProjectsLocationsConnectionsRepositoriesDelete(
        new CloudbuildProjectsLocationsConnectionsRepositoriesDeleteRequest
        {
            ProjectsId = "some example string",
            LocationsId = "some example string",
            ConnectionsId = "some example string",
            RepositoriesId = "some example string",
        });
    // TODO: Handle 'response' of type Operation
}
catch (ApiException<CloudbuildProjectsLocationsConnectionsRepositoriesDeleteError> ex)
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

<code>[CloudbuildProjectsLocationsConnectionsRepositoriesDeleteRequest](src/GoogleCloudBuild/Requests/CloudbuildProjectsLocationsConnectionsRepositoriesDeleteRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Operation](src/GoogleCloudBuild/Models/Operation.cs)</code>

**OnError**: <code>[ApiException](src/GoogleCloudBuild/Core/Exceptions/ApiException.cs)&lt;[CloudbuildProjectsLocationsConnectionsRepositoriesDeleteError](src/GoogleCloudBuild/Errors/CloudbuildProjectsLocationsConnectionsRepositoriesDeleteError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;FetchGitRefsResponse&gt; CloudbuildProjectsLocationsConnectionsRepositoriesFetchGitRefs(CloudbuildProjectsLocationsConnectionsRepositoriesFetchGitRefsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Fetch the list of branches or tags for a given repository.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.CloudbuildProjectsLocationsConnectionsRepositoriesFetchGitRefs(
        new CloudbuildProjectsLocationsConnectionsRepositoriesFetchGitRefsRequest
        {
            ProjectsId = "some example string",
            LocationsId = "some example string",
            ConnectionsId = "some example string",
            RepositoriesId = "some example string",
        });
    // TODO: Handle 'response' of type FetchGitRefsResponse
}
catch (ApiException<CloudbuildProjectsLocationsConnectionsRepositoriesFetchGitRefsError> ex)
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

<code>[CloudbuildProjectsLocationsConnectionsRepositoriesFetchGitRefsRequest](src/GoogleCloudBuild/Requests/CloudbuildProjectsLocationsConnectionsRepositoriesFetchGitRefsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[FetchGitRefsResponse](src/GoogleCloudBuild/Models/FetchGitRefsResponse.cs)</code>

**OnError**: <code>[ApiException](src/GoogleCloudBuild/Core/Exceptions/ApiException.cs)&lt;[CloudbuildProjectsLocationsConnectionsRepositoriesFetchGitRefsError](src/GoogleCloudBuild/Errors/CloudbuildProjectsLocationsConnectionsRepositoriesFetchGitRefsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Repository&gt; CloudbuildProjectsLocationsConnectionsRepositoriesGet(CloudbuildProjectsLocationsConnectionsRepositoriesGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets details of a single repository.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.CloudbuildProjectsLocationsConnectionsRepositoriesGet(
        new CloudbuildProjectsLocationsConnectionsRepositoriesGetRequest
        {
            ProjectsId = "some example string",
            LocationsId = "some example string",
            ConnectionsId = "some example string",
            RepositoriesId = "some example string",
        });
    // TODO: Handle 'response' of type Repository
}
catch (ApiException<CloudbuildProjectsLocationsConnectionsRepositoriesGetError> ex)
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

<code>[CloudbuildProjectsLocationsConnectionsRepositoriesGetRequest](src/GoogleCloudBuild/Requests/CloudbuildProjectsLocationsConnectionsRepositoriesGetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Repository](src/GoogleCloudBuild/Models/Repository.cs)</code>

**OnError**: <code>[ApiException](src/GoogleCloudBuild/Core/Exceptions/ApiException.cs)&lt;[CloudbuildProjectsLocationsConnectionsRepositoriesGetError](src/GoogleCloudBuild/Errors/CloudbuildProjectsLocationsConnectionsRepositoriesGetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ListRepositoriesResponse&gt; CloudbuildProjectsLocationsConnectionsRepositoriesList(CloudbuildProjectsLocationsConnectionsRepositoriesListRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists Repositories in a given connection.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.CloudbuildProjectsLocationsConnectionsRepositoriesList(
        new CloudbuildProjectsLocationsConnectionsRepositoriesListRequest
        {
            ProjectsId = "some example string",
            LocationsId = "some example string",
            ConnectionsId = "some example string",
        });
    // TODO: Handle 'response' of type ListRepositoriesResponse
}
catch (ApiException<CloudbuildProjectsLocationsConnectionsRepositoriesListError> ex)
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

<code>[CloudbuildProjectsLocationsConnectionsRepositoriesListRequest](src/GoogleCloudBuild/Requests/CloudbuildProjectsLocationsConnectionsRepositoriesListRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ListRepositoriesResponse](src/GoogleCloudBuild/Models/ListRepositoriesResponse.cs)</code>

**OnError**: <code>[ApiException](src/GoogleCloudBuild/Core/Exceptions/ApiException.cs)&lt;[CloudbuildProjectsLocationsConnectionsRepositoriesListError](src/GoogleCloudBuild/Errors/CloudbuildProjectsLocationsConnectionsRepositoriesListError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Policy&gt; CloudbuildProjectsLocationsConnectionsSetIamPolicy(CloudbuildProjectsLocationsConnectionsSetIamPolicyRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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
    var response = await client.CloudbuildProjectsLocationsConnectionsSetIamPolicy(
        new CloudbuildProjectsLocationsConnectionsSetIamPolicyRequest
        {
            ProjectsId = "some example string",
            LocationsId = "some example string",
            ConnectionsId = "some example string",
            Body = new SetIamPolicyRequest(),
        });
    // TODO: Handle 'response' of type Policy
}
catch (ApiException<CloudbuildProjectsLocationsConnectionsSetIamPolicyError> ex)
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

<code>[CloudbuildProjectsLocationsConnectionsSetIamPolicyRequest](src/GoogleCloudBuild/Requests/CloudbuildProjectsLocationsConnectionsSetIamPolicyRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Policy](src/GoogleCloudBuild/Models/Policy.cs)</code>

**OnError**: <code>[ApiException](src/GoogleCloudBuild/Core/Exceptions/ApiException.cs)&lt;[CloudbuildProjectsLocationsConnectionsSetIamPolicyError](src/GoogleCloudBuild/Errors/CloudbuildProjectsLocationsConnectionsSetIamPolicyError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;TestIamPermissionsResponse&gt; CloudbuildProjectsLocationsConnectionsTestIamPermissions(CloudbuildProjectsLocationsConnectionsTestIamPermissionsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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
    var response = await client.CloudbuildProjectsLocationsConnectionsTestIamPermissions(
        new CloudbuildProjectsLocationsConnectionsTestIamPermissionsRequest
        {
            ProjectsId = "some example string",
            LocationsId = "some example string",
            ConnectionsId = "some example string",
            Body = new TestIamPermissionsRequest(),
        });
    // TODO: Handle 'response' of type TestIamPermissionsResponse
}
catch (ApiException<CloudbuildProjectsLocationsConnectionsTestIamPermissionsError> ex)
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

<code>[CloudbuildProjectsLocationsConnectionsTestIamPermissionsRequest](src/GoogleCloudBuild/Requests/CloudbuildProjectsLocationsConnectionsTestIamPermissionsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[TestIamPermissionsResponse](src/GoogleCloudBuild/Models/TestIamPermissionsResponse.cs)</code>

**OnError**: <code>[ApiException](src/GoogleCloudBuild/Core/Exceptions/ApiException.cs)&lt;[CloudbuildProjectsLocationsConnectionsTestIamPermissionsError](src/GoogleCloudBuild/Errors/CloudbuildProjectsLocationsConnectionsTestIamPermissionsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Location&gt; CloudbuildProjectsLocationsGet(CloudbuildProjectsLocationsGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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
    var response = await client.CloudbuildProjectsLocationsGet(new CloudbuildProjectsLocationsGetRequest
    {
        ProjectsId = "some example string",
        LocationsId = "some example string",
    });
    // TODO: Handle 'response' of type Location
}
catch (ApiException<CloudbuildProjectsLocationsGetError> ex)
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

<code>[CloudbuildProjectsLocationsGetRequest](src/GoogleCloudBuild/Requests/CloudbuildProjectsLocationsGetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Location](src/GoogleCloudBuild/Models/Location.cs)</code>

**OnError**: <code>[ApiException](src/GoogleCloudBuild/Core/Exceptions/ApiException.cs)&lt;[CloudbuildProjectsLocationsGetError](src/GoogleCloudBuild/Errors/CloudbuildProjectsLocationsGetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ListLocationsResponse&gt; CloudbuildProjectsLocationsList(CloudbuildProjectsLocationsListRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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
    var response = await client.CloudbuildProjectsLocationsList(new CloudbuildProjectsLocationsListRequest
    {
        ProjectsId = "some example string",
    });
    // TODO: Handle 'response' of type ListLocationsResponse
}
catch (ApiException<CloudbuildProjectsLocationsListError> ex)
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

<code>[CloudbuildProjectsLocationsListRequest](src/GoogleCloudBuild/Requests/CloudbuildProjectsLocationsListRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ListLocationsResponse](src/GoogleCloudBuild/Models/ListLocationsResponse.cs)</code>

**OnError**: <code>[ApiException](src/GoogleCloudBuild/Core/Exceptions/ApiException.cs)&lt;[CloudbuildProjectsLocationsListError](src/GoogleCloudBuild/Errors/CloudbuildProjectsLocationsListError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;object&gt; CloudbuildProjectsLocationsOperationsCancel(CloudbuildProjectsLocationsOperationsCancelRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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
    var response = await client.CloudbuildProjectsLocationsOperationsCancel(
        new CloudbuildProjectsLocationsOperationsCancelRequest
        {
            ProjectsId = "some example string",
            LocationsId = "some example string",
            OperationsId = "some example string",
            Body = body,
        });
    // TODO: Handle 'response' of type object
}
catch (ApiException<CloudbuildProjectsLocationsOperationsCancelError> ex)
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

<code>[CloudbuildProjectsLocationsOperationsCancelRequest](src/GoogleCloudBuild/Requests/CloudbuildProjectsLocationsOperationsCancelRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>object</code>

**OnError**: <code>[ApiException](src/GoogleCloudBuild/Core/Exceptions/ApiException.cs)&lt;[CloudbuildProjectsLocationsOperationsCancelError](src/GoogleCloudBuild/Errors/CloudbuildProjectsLocationsOperationsCancelError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Operation&gt; CloudbuildProjectsLocationsOperationsGet(CloudbuildProjectsLocationsOperationsGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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
    var response = await client.CloudbuildProjectsLocationsOperationsGet(
        new CloudbuildProjectsLocationsOperationsGetRequest
        {
            ProjectsId = "some example string",
            LocationsId = "some example string",
            OperationsId = "some example string",
        });
    // TODO: Handle 'response' of type Operation
}
catch (ApiException<CloudbuildProjectsLocationsOperationsGetError> ex)
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

<code>[CloudbuildProjectsLocationsOperationsGetRequest](src/GoogleCloudBuild/Requests/CloudbuildProjectsLocationsOperationsGetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Operation](src/GoogleCloudBuild/Models/Operation.cs)</code>

**OnError**: <code>[ApiException](src/GoogleCloudBuild/Core/Exceptions/ApiException.cs)&lt;[CloudbuildProjectsLocationsOperationsGetError](src/GoogleCloudBuild/Errors/CloudbuildProjectsLocationsOperationsGetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

