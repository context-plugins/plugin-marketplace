# Reference

Every operation below is shown in its throwing form. On an error status it throws `ApiException<TError>` — the status code, headers, content type and the operation's error type, `RawError` (the raw body) when the spec declares none — and where an operation offers an `…AsResult` sibling, that sibling returns `ApiResult<TResponse, TError>` instead. A request that produces no usable response surfaces as `SdkConnectionException` or `SdkTimeoutException`, a body that does not match the documented response type as `ResponseDeserializationException`, and a required credential that is not configured, or one that cannot be applied, as `AuthSchemeException`; all of them derive from `SdkException` and name the failed call. See [README → Error Handling](README.md#error-handling).

> Source: [GoogleCloudApiGatewayClient](src/GoogleCloudApiGateway/GoogleCloudApiGatewayClient.cs)

<details>
<summary><code>Task&lt;ApigatewayOperation&gt; ApigatewayProjectsLocationsApisConfigsCreate(ApigatewayProjectsLocationsApisConfigsCreateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a new ApiConfig in a given project and location.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.ApigatewayProjectsLocationsApisConfigsCreate(
        new ApigatewayProjectsLocationsApisConfigsCreateRequest
        {
            ProjectsId = "some example string",
            LocationsId = "some example string",
            ApisId = "some example string",
            Body = new ApigatewayApiConfig(),
        });
    // TODO: Handle 'response' of type ApigatewayOperation
}
catch (ApiException<ApigatewayProjectsLocationsApisConfigsCreateError> ex)
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

<code>[ApigatewayProjectsLocationsApisConfigsCreateRequest](src/GoogleCloudApiGateway/Requests/ApigatewayProjectsLocationsApisConfigsCreateRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApigatewayOperation](src/GoogleCloudApiGateway/Models/ApigatewayOperation.cs)</code>

**OnError**: <code>[ApiException](src/GoogleCloudApiGateway/Core/Exceptions/ApiException.cs)&lt;[ApigatewayProjectsLocationsApisConfigsCreateError](src/GoogleCloudApiGateway/Errors/ApigatewayProjectsLocationsApisConfigsCreateError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApigatewayOperation&gt; ApigatewayProjectsLocationsApisConfigsDelete(ApigatewayProjectsLocationsApisConfigsDeleteRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a single ApiConfig.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.ApigatewayProjectsLocationsApisConfigsDelete(
        new ApigatewayProjectsLocationsApisConfigsDeleteRequest
        {
            ProjectsId = "some example string",
            LocationsId = "some example string",
            ApisId = "some example string",
            ConfigsId = "some example string",
        });
    // TODO: Handle 'response' of type ApigatewayOperation
}
catch (ApiException<ApigatewayProjectsLocationsApisConfigsDeleteError> ex)
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

<code>[ApigatewayProjectsLocationsApisConfigsDeleteRequest](src/GoogleCloudApiGateway/Requests/ApigatewayProjectsLocationsApisConfigsDeleteRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApigatewayOperation](src/GoogleCloudApiGateway/Models/ApigatewayOperation.cs)</code>

**OnError**: <code>[ApiException](src/GoogleCloudApiGateway/Core/Exceptions/ApiException.cs)&lt;[ApigatewayProjectsLocationsApisConfigsDeleteError](src/GoogleCloudApiGateway/Errors/ApigatewayProjectsLocationsApisConfigsDeleteError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApigatewayApiConfig&gt; ApigatewayProjectsLocationsApisConfigsGet(ApigatewayProjectsLocationsApisConfigsGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets details of a single ApiConfig.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.ApigatewayProjectsLocationsApisConfigsGet(
        new ApigatewayProjectsLocationsApisConfigsGetRequest
        {
            ProjectsId = "some example string",
            LocationsId = "some example string",
            ApisId = "some example string",
            ConfigsId = "some example string",
        });
    // TODO: Handle 'response' of type ApigatewayApiConfig
}
catch (ApiException<ApigatewayProjectsLocationsApisConfigsGetError> ex)
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

<code>[ApigatewayProjectsLocationsApisConfigsGetRequest](src/GoogleCloudApiGateway/Requests/ApigatewayProjectsLocationsApisConfigsGetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApigatewayApiConfig](src/GoogleCloudApiGateway/Models/ApigatewayApiConfig.cs)</code>

**OnError**: <code>[ApiException](src/GoogleCloudApiGateway/Core/Exceptions/ApiException.cs)&lt;[ApigatewayProjectsLocationsApisConfigsGetError](src/GoogleCloudApiGateway/Errors/ApigatewayProjectsLocationsApisConfigsGetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApigatewayPolicy&gt; ApigatewayProjectsLocationsApisConfigsGetIamPolicy(ApigatewayProjectsLocationsApisConfigsGetIamPolicyRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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
    var response = await client.ApigatewayProjectsLocationsApisConfigsGetIamPolicy(
        new ApigatewayProjectsLocationsApisConfigsGetIamPolicyRequest
        {
            ProjectsId = "some example string",
            LocationsId = "some example string",
            ApisId = "some example string",
            ConfigsId = "some example string",
        });
    // TODO: Handle 'response' of type ApigatewayPolicy
}
catch (ApiException<ApigatewayProjectsLocationsApisConfigsGetIamPolicyError> ex)
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

<code>[ApigatewayProjectsLocationsApisConfigsGetIamPolicyRequest](src/GoogleCloudApiGateway/Requests/ApigatewayProjectsLocationsApisConfigsGetIamPolicyRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApigatewayPolicy](src/GoogleCloudApiGateway/Models/ApigatewayPolicy.cs)</code>

**OnError**: <code>[ApiException](src/GoogleCloudApiGateway/Core/Exceptions/ApiException.cs)&lt;[ApigatewayProjectsLocationsApisConfigsGetIamPolicyError](src/GoogleCloudApiGateway/Errors/ApigatewayProjectsLocationsApisConfigsGetIamPolicyError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApigatewayListApiConfigsResponse&gt; ApigatewayProjectsLocationsApisConfigsList(ApigatewayProjectsLocationsApisConfigsListRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists ApiConfigs in a given project and location.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.ApigatewayProjectsLocationsApisConfigsList(
        new ApigatewayProjectsLocationsApisConfigsListRequest
        {
            ProjectsId = "some example string",
            LocationsId = "some example string",
            ApisId = "some example string",
        });
    // TODO: Handle 'response' of type ApigatewayListApiConfigsResponse
}
catch (ApiException<ApigatewayProjectsLocationsApisConfigsListError> ex)
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

<code>[ApigatewayProjectsLocationsApisConfigsListRequest](src/GoogleCloudApiGateway/Requests/ApigatewayProjectsLocationsApisConfigsListRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApigatewayListApiConfigsResponse](src/GoogleCloudApiGateway/Models/ApigatewayListApiConfigsResponse.cs)</code>

**OnError**: <code>[ApiException](src/GoogleCloudApiGateway/Core/Exceptions/ApiException.cs)&lt;[ApigatewayProjectsLocationsApisConfigsListError](src/GoogleCloudApiGateway/Errors/ApigatewayProjectsLocationsApisConfigsListError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApigatewayOperation&gt; ApigatewayProjectsLocationsApisConfigsPatch(ApigatewayProjectsLocationsApisConfigsPatchRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates the parameters of a single ApiConfig.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.ApigatewayProjectsLocationsApisConfigsPatch(
        new ApigatewayProjectsLocationsApisConfigsPatchRequest
        {
            ProjectsId = "some example string",
            LocationsId = "some example string",
            ApisId = "some example string",
            ConfigsId = "some example string",
            Body = new ApigatewayApiConfig(),
        });
    // TODO: Handle 'response' of type ApigatewayOperation
}
catch (ApiException<ApigatewayProjectsLocationsApisConfigsPatchError> ex)
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

<code>[ApigatewayProjectsLocationsApisConfigsPatchRequest](src/GoogleCloudApiGateway/Requests/ApigatewayProjectsLocationsApisConfigsPatchRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApigatewayOperation](src/GoogleCloudApiGateway/Models/ApigatewayOperation.cs)</code>

**OnError**: <code>[ApiException](src/GoogleCloudApiGateway/Core/Exceptions/ApiException.cs)&lt;[ApigatewayProjectsLocationsApisConfigsPatchError](src/GoogleCloudApiGateway/Errors/ApigatewayProjectsLocationsApisConfigsPatchError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApigatewayPolicy&gt; ApigatewayProjectsLocationsApisConfigsSetIamPolicy(ApigatewayProjectsLocationsApisConfigsSetIamPolicyRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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
    var response = await client.ApigatewayProjectsLocationsApisConfigsSetIamPolicy(
        new ApigatewayProjectsLocationsApisConfigsSetIamPolicyRequest
        {
            ProjectsId = "some example string",
            LocationsId = "some example string",
            ApisId = "some example string",
            ConfigsId = "some example string",
            Body = new ApigatewaySetIamPolicyRequest(),
        });
    // TODO: Handle 'response' of type ApigatewayPolicy
}
catch (ApiException<ApigatewayProjectsLocationsApisConfigsSetIamPolicyError> ex)
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

<code>[ApigatewayProjectsLocationsApisConfigsSetIamPolicyRequest](src/GoogleCloudApiGateway/Requests/ApigatewayProjectsLocationsApisConfigsSetIamPolicyRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApigatewayPolicy](src/GoogleCloudApiGateway/Models/ApigatewayPolicy.cs)</code>

**OnError**: <code>[ApiException](src/GoogleCloudApiGateway/Core/Exceptions/ApiException.cs)&lt;[ApigatewayProjectsLocationsApisConfigsSetIamPolicyError](src/GoogleCloudApiGateway/Errors/ApigatewayProjectsLocationsApisConfigsSetIamPolicyError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApigatewayTestIamPermissionsResponse&gt; ApigatewayProjectsLocationsApisConfigsTestIamPermissions(ApigatewayProjectsLocationsApisConfigsTestIamPermissionsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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
    var response = await client.ApigatewayProjectsLocationsApisConfigsTestIamPermissions(
        new ApigatewayProjectsLocationsApisConfigsTestIamPermissionsRequest
        {
            ProjectsId = "some example string",
            LocationsId = "some example string",
            ApisId = "some example string",
            ConfigsId = "some example string",
            Body = new ApigatewayTestIamPermissionsRequest(),
        });
    // TODO: Handle 'response' of type ApigatewayTestIamPermissionsResponse
}
catch (ApiException<ApigatewayProjectsLocationsApisConfigsTestIamPermissionsError> ex)
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

<code>[ApigatewayProjectsLocationsApisConfigsTestIamPermissionsRequest](src/GoogleCloudApiGateway/Requests/ApigatewayProjectsLocationsApisConfigsTestIamPermissionsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApigatewayTestIamPermissionsResponse](src/GoogleCloudApiGateway/Models/ApigatewayTestIamPermissionsResponse.cs)</code>

**OnError**: <code>[ApiException](src/GoogleCloudApiGateway/Core/Exceptions/ApiException.cs)&lt;[ApigatewayProjectsLocationsApisConfigsTestIamPermissionsError](src/GoogleCloudApiGateway/Errors/ApigatewayProjectsLocationsApisConfigsTestIamPermissionsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApigatewayOperation&gt; ApigatewayProjectsLocationsApisCreate(ApigatewayProjectsLocationsApisCreateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a new Api in a given project and location.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.ApigatewayProjectsLocationsApisCreate(new ApigatewayProjectsLocationsApisCreateRequest
    {
        ProjectsId = "some example string",
        LocationsId = "some example string",
        Body = new ApigatewayApi(),
    });
    // TODO: Handle 'response' of type ApigatewayOperation
}
catch (ApiException<ApigatewayProjectsLocationsApisCreateError> ex)
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

<code>[ApigatewayProjectsLocationsApisCreateRequest](src/GoogleCloudApiGateway/Requests/ApigatewayProjectsLocationsApisCreateRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApigatewayOperation](src/GoogleCloudApiGateway/Models/ApigatewayOperation.cs)</code>

**OnError**: <code>[ApiException](src/GoogleCloudApiGateway/Core/Exceptions/ApiException.cs)&lt;[ApigatewayProjectsLocationsApisCreateError](src/GoogleCloudApiGateway/Errors/ApigatewayProjectsLocationsApisCreateError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApigatewayOperation&gt; ApigatewayProjectsLocationsApisDelete(ApigatewayProjectsLocationsApisDeleteRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a single Api.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.ApigatewayProjectsLocationsApisDelete(new ApigatewayProjectsLocationsApisDeleteRequest
    {
        ProjectsId = "some example string",
        LocationsId = "some example string",
        ApisId = "some example string",
    });
    // TODO: Handle 'response' of type ApigatewayOperation
}
catch (ApiException<ApigatewayProjectsLocationsApisDeleteError> ex)
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

<code>[ApigatewayProjectsLocationsApisDeleteRequest](src/GoogleCloudApiGateway/Requests/ApigatewayProjectsLocationsApisDeleteRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApigatewayOperation](src/GoogleCloudApiGateway/Models/ApigatewayOperation.cs)</code>

**OnError**: <code>[ApiException](src/GoogleCloudApiGateway/Core/Exceptions/ApiException.cs)&lt;[ApigatewayProjectsLocationsApisDeleteError](src/GoogleCloudApiGateway/Errors/ApigatewayProjectsLocationsApisDeleteError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApigatewayApi&gt; ApigatewayProjectsLocationsApisGet(ApigatewayProjectsLocationsApisGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets details of a single Api.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.ApigatewayProjectsLocationsApisGet(new ApigatewayProjectsLocationsApisGetRequest
    {
        ProjectsId = "some example string",
        LocationsId = "some example string",
        ApisId = "some example string",
    });
    // TODO: Handle 'response' of type ApigatewayApi
}
catch (ApiException<ApigatewayProjectsLocationsApisGetError> ex)
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

<code>[ApigatewayProjectsLocationsApisGetRequest](src/GoogleCloudApiGateway/Requests/ApigatewayProjectsLocationsApisGetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApigatewayApi](src/GoogleCloudApiGateway/Models/ApigatewayApi.cs)</code>

**OnError**: <code>[ApiException](src/GoogleCloudApiGateway/Core/Exceptions/ApiException.cs)&lt;[ApigatewayProjectsLocationsApisGetError](src/GoogleCloudApiGateway/Errors/ApigatewayProjectsLocationsApisGetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApigatewayPolicy&gt; ApigatewayProjectsLocationsApisGetIamPolicy(ApigatewayProjectsLocationsApisGetIamPolicyRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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
    var response = await client.ApigatewayProjectsLocationsApisGetIamPolicy(
        new ApigatewayProjectsLocationsApisGetIamPolicyRequest
        {
            ProjectsId = "some example string",
            LocationsId = "some example string",
            ApisId = "some example string",
        });
    // TODO: Handle 'response' of type ApigatewayPolicy
}
catch (ApiException<ApigatewayProjectsLocationsApisGetIamPolicyError> ex)
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

<code>[ApigatewayProjectsLocationsApisGetIamPolicyRequest](src/GoogleCloudApiGateway/Requests/ApigatewayProjectsLocationsApisGetIamPolicyRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApigatewayPolicy](src/GoogleCloudApiGateway/Models/ApigatewayPolicy.cs)</code>

**OnError**: <code>[ApiException](src/GoogleCloudApiGateway/Core/Exceptions/ApiException.cs)&lt;[ApigatewayProjectsLocationsApisGetIamPolicyError](src/GoogleCloudApiGateway/Errors/ApigatewayProjectsLocationsApisGetIamPolicyError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApigatewayListApisResponse&gt; ApigatewayProjectsLocationsApisList(ApigatewayProjectsLocationsApisListRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists Apis in a given project and location.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.ApigatewayProjectsLocationsApisList(new ApigatewayProjectsLocationsApisListRequest
    {
        ProjectsId = "some example string",
        LocationsId = "some example string",
    });
    // TODO: Handle 'response' of type ApigatewayListApisResponse
}
catch (ApiException<ApigatewayProjectsLocationsApisListError> ex)
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

<code>[ApigatewayProjectsLocationsApisListRequest](src/GoogleCloudApiGateway/Requests/ApigatewayProjectsLocationsApisListRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApigatewayListApisResponse](src/GoogleCloudApiGateway/Models/ApigatewayListApisResponse.cs)</code>

**OnError**: <code>[ApiException](src/GoogleCloudApiGateway/Core/Exceptions/ApiException.cs)&lt;[ApigatewayProjectsLocationsApisListError](src/GoogleCloudApiGateway/Errors/ApigatewayProjectsLocationsApisListError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApigatewayOperation&gt; ApigatewayProjectsLocationsApisPatch(ApigatewayProjectsLocationsApisPatchRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates the parameters of a single Api.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.ApigatewayProjectsLocationsApisPatch(new ApigatewayProjectsLocationsApisPatchRequest
    {
        ProjectsId = "some example string",
        LocationsId = "some example string",
        ApisId = "some example string",
        Body = new ApigatewayApi(),
    });
    // TODO: Handle 'response' of type ApigatewayOperation
}
catch (ApiException<ApigatewayProjectsLocationsApisPatchError> ex)
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

<code>[ApigatewayProjectsLocationsApisPatchRequest](src/GoogleCloudApiGateway/Requests/ApigatewayProjectsLocationsApisPatchRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApigatewayOperation](src/GoogleCloudApiGateway/Models/ApigatewayOperation.cs)</code>

**OnError**: <code>[ApiException](src/GoogleCloudApiGateway/Core/Exceptions/ApiException.cs)&lt;[ApigatewayProjectsLocationsApisPatchError](src/GoogleCloudApiGateway/Errors/ApigatewayProjectsLocationsApisPatchError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApigatewayPolicy&gt; ApigatewayProjectsLocationsApisSetIamPolicy(ApigatewayProjectsLocationsApisSetIamPolicyRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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
    var response = await client.ApigatewayProjectsLocationsApisSetIamPolicy(
        new ApigatewayProjectsLocationsApisSetIamPolicyRequest
        {
            ProjectsId = "some example string",
            LocationsId = "some example string",
            ApisId = "some example string",
            Body = new ApigatewaySetIamPolicyRequest(),
        });
    // TODO: Handle 'response' of type ApigatewayPolicy
}
catch (ApiException<ApigatewayProjectsLocationsApisSetIamPolicyError> ex)
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

<code>[ApigatewayProjectsLocationsApisSetIamPolicyRequest](src/GoogleCloudApiGateway/Requests/ApigatewayProjectsLocationsApisSetIamPolicyRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApigatewayPolicy](src/GoogleCloudApiGateway/Models/ApigatewayPolicy.cs)</code>

**OnError**: <code>[ApiException](src/GoogleCloudApiGateway/Core/Exceptions/ApiException.cs)&lt;[ApigatewayProjectsLocationsApisSetIamPolicyError](src/GoogleCloudApiGateway/Errors/ApigatewayProjectsLocationsApisSetIamPolicyError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApigatewayTestIamPermissionsResponse&gt; ApigatewayProjectsLocationsApisTestIamPermissions(ApigatewayProjectsLocationsApisTestIamPermissionsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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
    var response = await client.ApigatewayProjectsLocationsApisTestIamPermissions(
        new ApigatewayProjectsLocationsApisTestIamPermissionsRequest
        {
            ProjectsId = "some example string",
            LocationsId = "some example string",
            ApisId = "some example string",
            Body = new ApigatewayTestIamPermissionsRequest(),
        });
    // TODO: Handle 'response' of type ApigatewayTestIamPermissionsResponse
}
catch (ApiException<ApigatewayProjectsLocationsApisTestIamPermissionsError> ex)
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

<code>[ApigatewayProjectsLocationsApisTestIamPermissionsRequest](src/GoogleCloudApiGateway/Requests/ApigatewayProjectsLocationsApisTestIamPermissionsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApigatewayTestIamPermissionsResponse](src/GoogleCloudApiGateway/Models/ApigatewayTestIamPermissionsResponse.cs)</code>

**OnError**: <code>[ApiException](src/GoogleCloudApiGateway/Core/Exceptions/ApiException.cs)&lt;[ApigatewayProjectsLocationsApisTestIamPermissionsError](src/GoogleCloudApiGateway/Errors/ApigatewayProjectsLocationsApisTestIamPermissionsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApigatewayOperation&gt; ApigatewayProjectsLocationsGatewaysCreate(ApigatewayProjectsLocationsGatewaysCreateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a new Gateway in a given project and location.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.ApigatewayProjectsLocationsGatewaysCreate(
        new ApigatewayProjectsLocationsGatewaysCreateRequest
        {
            ProjectsId = "some example string",
            LocationsId = "some example string",
            Body = new ApigatewayGateway(),
        });
    // TODO: Handle 'response' of type ApigatewayOperation
}
catch (ApiException<ApigatewayProjectsLocationsGatewaysCreateError> ex)
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

<code>[ApigatewayProjectsLocationsGatewaysCreateRequest](src/GoogleCloudApiGateway/Requests/ApigatewayProjectsLocationsGatewaysCreateRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApigatewayOperation](src/GoogleCloudApiGateway/Models/ApigatewayOperation.cs)</code>

**OnError**: <code>[ApiException](src/GoogleCloudApiGateway/Core/Exceptions/ApiException.cs)&lt;[ApigatewayProjectsLocationsGatewaysCreateError](src/GoogleCloudApiGateway/Errors/ApigatewayProjectsLocationsGatewaysCreateError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApigatewayOperation&gt; ApigatewayProjectsLocationsGatewaysDelete(ApigatewayProjectsLocationsGatewaysDeleteRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a single Gateway.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.ApigatewayProjectsLocationsGatewaysDelete(
        new ApigatewayProjectsLocationsGatewaysDeleteRequest
        {
            ProjectsId = "some example string",
            LocationsId = "some example string",
            GatewaysId = "some example string",
        });
    // TODO: Handle 'response' of type ApigatewayOperation
}
catch (ApiException<ApigatewayProjectsLocationsGatewaysDeleteError> ex)
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

<code>[ApigatewayProjectsLocationsGatewaysDeleteRequest](src/GoogleCloudApiGateway/Requests/ApigatewayProjectsLocationsGatewaysDeleteRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApigatewayOperation](src/GoogleCloudApiGateway/Models/ApigatewayOperation.cs)</code>

**OnError**: <code>[ApiException](src/GoogleCloudApiGateway/Core/Exceptions/ApiException.cs)&lt;[ApigatewayProjectsLocationsGatewaysDeleteError](src/GoogleCloudApiGateway/Errors/ApigatewayProjectsLocationsGatewaysDeleteError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApigatewayGateway&gt; ApigatewayProjectsLocationsGatewaysGet(ApigatewayProjectsLocationsGatewaysGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets details of a single Gateway.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.ApigatewayProjectsLocationsGatewaysGet(new ApigatewayProjectsLocationsGatewaysGetRequest
    {
        ProjectsId = "some example string",
        LocationsId = "some example string",
        GatewaysId = "some example string",
    });
    // TODO: Handle 'response' of type ApigatewayGateway
}
catch (ApiException<ApigatewayProjectsLocationsGatewaysGetError> ex)
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

<code>[ApigatewayProjectsLocationsGatewaysGetRequest](src/GoogleCloudApiGateway/Requests/ApigatewayProjectsLocationsGatewaysGetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApigatewayGateway](src/GoogleCloudApiGateway/Models/ApigatewayGateway.cs)</code>

**OnError**: <code>[ApiException](src/GoogleCloudApiGateway/Core/Exceptions/ApiException.cs)&lt;[ApigatewayProjectsLocationsGatewaysGetError](src/GoogleCloudApiGateway/Errors/ApigatewayProjectsLocationsGatewaysGetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApigatewayPolicy&gt; ApigatewayProjectsLocationsGatewaysGetIamPolicy(ApigatewayProjectsLocationsGatewaysGetIamPolicyRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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
    var response = await client.ApigatewayProjectsLocationsGatewaysGetIamPolicy(
        new ApigatewayProjectsLocationsGatewaysGetIamPolicyRequest
        {
            ProjectsId = "some example string",
            LocationsId = "some example string",
            GatewaysId = "some example string",
        });
    // TODO: Handle 'response' of type ApigatewayPolicy
}
catch (ApiException<ApigatewayProjectsLocationsGatewaysGetIamPolicyError> ex)
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

<code>[ApigatewayProjectsLocationsGatewaysGetIamPolicyRequest](src/GoogleCloudApiGateway/Requests/ApigatewayProjectsLocationsGatewaysGetIamPolicyRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApigatewayPolicy](src/GoogleCloudApiGateway/Models/ApigatewayPolicy.cs)</code>

**OnError**: <code>[ApiException](src/GoogleCloudApiGateway/Core/Exceptions/ApiException.cs)&lt;[ApigatewayProjectsLocationsGatewaysGetIamPolicyError](src/GoogleCloudApiGateway/Errors/ApigatewayProjectsLocationsGatewaysGetIamPolicyError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApigatewayListGatewaysResponse&gt; ApigatewayProjectsLocationsGatewaysList(ApigatewayProjectsLocationsGatewaysListRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists Gateways in a given project and location.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.ApigatewayProjectsLocationsGatewaysList(
        new ApigatewayProjectsLocationsGatewaysListRequest
        {
            ProjectsId = "some example string",
            LocationsId = "some example string",
        });
    // TODO: Handle 'response' of type ApigatewayListGatewaysResponse
}
catch (ApiException<ApigatewayProjectsLocationsGatewaysListError> ex)
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

<code>[ApigatewayProjectsLocationsGatewaysListRequest](src/GoogleCloudApiGateway/Requests/ApigatewayProjectsLocationsGatewaysListRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApigatewayListGatewaysResponse](src/GoogleCloudApiGateway/Models/ApigatewayListGatewaysResponse.cs)</code>

**OnError**: <code>[ApiException](src/GoogleCloudApiGateway/Core/Exceptions/ApiException.cs)&lt;[ApigatewayProjectsLocationsGatewaysListError](src/GoogleCloudApiGateway/Errors/ApigatewayProjectsLocationsGatewaysListError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApigatewayOperation&gt; ApigatewayProjectsLocationsGatewaysPatch(ApigatewayProjectsLocationsGatewaysPatchRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates the parameters of a single Gateway.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.ApigatewayProjectsLocationsGatewaysPatch(
        new ApigatewayProjectsLocationsGatewaysPatchRequest
        {
            ProjectsId = "some example string",
            LocationsId = "some example string",
            GatewaysId = "some example string",
            Body = new ApigatewayGateway(),
        });
    // TODO: Handle 'response' of type ApigatewayOperation
}
catch (ApiException<ApigatewayProjectsLocationsGatewaysPatchError> ex)
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

<code>[ApigatewayProjectsLocationsGatewaysPatchRequest](src/GoogleCloudApiGateway/Requests/ApigatewayProjectsLocationsGatewaysPatchRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApigatewayOperation](src/GoogleCloudApiGateway/Models/ApigatewayOperation.cs)</code>

**OnError**: <code>[ApiException](src/GoogleCloudApiGateway/Core/Exceptions/ApiException.cs)&lt;[ApigatewayProjectsLocationsGatewaysPatchError](src/GoogleCloudApiGateway/Errors/ApigatewayProjectsLocationsGatewaysPatchError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApigatewayPolicy&gt; ApigatewayProjectsLocationsGatewaysSetIamPolicy(ApigatewayProjectsLocationsGatewaysSetIamPolicyRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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
    var response = await client.ApigatewayProjectsLocationsGatewaysSetIamPolicy(
        new ApigatewayProjectsLocationsGatewaysSetIamPolicyRequest
        {
            ProjectsId = "some example string",
            LocationsId = "some example string",
            GatewaysId = "some example string",
            Body = new ApigatewaySetIamPolicyRequest(),
        });
    // TODO: Handle 'response' of type ApigatewayPolicy
}
catch (ApiException<ApigatewayProjectsLocationsGatewaysSetIamPolicyError> ex)
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

<code>[ApigatewayProjectsLocationsGatewaysSetIamPolicyRequest](src/GoogleCloudApiGateway/Requests/ApigatewayProjectsLocationsGatewaysSetIamPolicyRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApigatewayPolicy](src/GoogleCloudApiGateway/Models/ApigatewayPolicy.cs)</code>

**OnError**: <code>[ApiException](src/GoogleCloudApiGateway/Core/Exceptions/ApiException.cs)&lt;[ApigatewayProjectsLocationsGatewaysSetIamPolicyError](src/GoogleCloudApiGateway/Errors/ApigatewayProjectsLocationsGatewaysSetIamPolicyError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApigatewayTestIamPermissionsResponse&gt; ApigatewayProjectsLocationsGatewaysTestIamPermissions(ApigatewayProjectsLocationsGatewaysTestIamPermissionsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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
    var response = await client.ApigatewayProjectsLocationsGatewaysTestIamPermissions(
        new ApigatewayProjectsLocationsGatewaysTestIamPermissionsRequest
        {
            ProjectsId = "some example string",
            LocationsId = "some example string",
            GatewaysId = "some example string",
            Body = new ApigatewayTestIamPermissionsRequest(),
        });
    // TODO: Handle 'response' of type ApigatewayTestIamPermissionsResponse
}
catch (ApiException<ApigatewayProjectsLocationsGatewaysTestIamPermissionsError> ex)
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

<code>[ApigatewayProjectsLocationsGatewaysTestIamPermissionsRequest](src/GoogleCloudApiGateway/Requests/ApigatewayProjectsLocationsGatewaysTestIamPermissionsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApigatewayTestIamPermissionsResponse](src/GoogleCloudApiGateway/Models/ApigatewayTestIamPermissionsResponse.cs)</code>

**OnError**: <code>[ApiException](src/GoogleCloudApiGateway/Core/Exceptions/ApiException.cs)&lt;[ApigatewayProjectsLocationsGatewaysTestIamPermissionsError](src/GoogleCloudApiGateway/Errors/ApigatewayProjectsLocationsGatewaysTestIamPermissionsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApigatewayLocation&gt; ApigatewayProjectsLocationsGet(ApigatewayProjectsLocationsGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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
    var response = await client.ApigatewayProjectsLocationsGet(new ApigatewayProjectsLocationsGetRequest
    {
        ProjectsId = "some example string",
        LocationsId = "some example string",
    });
    // TODO: Handle 'response' of type ApigatewayLocation
}
catch (ApiException<ApigatewayProjectsLocationsGetError> ex)
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

<code>[ApigatewayProjectsLocationsGetRequest](src/GoogleCloudApiGateway/Requests/ApigatewayProjectsLocationsGetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApigatewayLocation](src/GoogleCloudApiGateway/Models/ApigatewayLocation.cs)</code>

**OnError**: <code>[ApiException](src/GoogleCloudApiGateway/Core/Exceptions/ApiException.cs)&lt;[ApigatewayProjectsLocationsGetError](src/GoogleCloudApiGateway/Errors/ApigatewayProjectsLocationsGetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApigatewayListLocationsResponse&gt; ApigatewayProjectsLocationsList(ApigatewayProjectsLocationsListRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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
    var response = await client.ApigatewayProjectsLocationsList(new ApigatewayProjectsLocationsListRequest
    {
        ProjectsId = "some example string",
    });
    // TODO: Handle 'response' of type ApigatewayListLocationsResponse
}
catch (ApiException<ApigatewayProjectsLocationsListError> ex)
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

<code>[ApigatewayProjectsLocationsListRequest](src/GoogleCloudApiGateway/Requests/ApigatewayProjectsLocationsListRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApigatewayListLocationsResponse](src/GoogleCloudApiGateway/Models/ApigatewayListLocationsResponse.cs)</code>

**OnError**: <code>[ApiException](src/GoogleCloudApiGateway/Core/Exceptions/ApiException.cs)&lt;[ApigatewayProjectsLocationsListError](src/GoogleCloudApiGateway/Errors/ApigatewayProjectsLocationsListError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;object&gt; ApigatewayProjectsLocationsOperationsCancel(ApigatewayProjectsLocationsOperationsCancelRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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
    var response = await client.ApigatewayProjectsLocationsOperationsCancel(
        new ApigatewayProjectsLocationsOperationsCancelRequest
        {
            ProjectsId = "some example string",
            LocationsId = "some example string",
            OperationsId = "some example string",
            Body = body,
        });
    // TODO: Handle 'response' of type object
}
catch (ApiException<ApigatewayProjectsLocationsOperationsCancelError> ex)
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

<code>[ApigatewayProjectsLocationsOperationsCancelRequest](src/GoogleCloudApiGateway/Requests/ApigatewayProjectsLocationsOperationsCancelRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>object</code>

**OnError**: <code>[ApiException](src/GoogleCloudApiGateway/Core/Exceptions/ApiException.cs)&lt;[ApigatewayProjectsLocationsOperationsCancelError](src/GoogleCloudApiGateway/Errors/ApigatewayProjectsLocationsOperationsCancelError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;object&gt; ApigatewayProjectsLocationsOperationsDelete(ApigatewayProjectsLocationsOperationsDeleteRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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
    var response = await client.ApigatewayProjectsLocationsOperationsDelete(
        new ApigatewayProjectsLocationsOperationsDeleteRequest
        {
            ProjectsId = "some example string",
            LocationsId = "some example string",
            OperationsId = "some example string",
        });
    // TODO: Handle 'response' of type object
}
catch (ApiException<ApigatewayProjectsLocationsOperationsDeleteError> ex)
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

<code>[ApigatewayProjectsLocationsOperationsDeleteRequest](src/GoogleCloudApiGateway/Requests/ApigatewayProjectsLocationsOperationsDeleteRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>object</code>

**OnError**: <code>[ApiException](src/GoogleCloudApiGateway/Core/Exceptions/ApiException.cs)&lt;[ApigatewayProjectsLocationsOperationsDeleteError](src/GoogleCloudApiGateway/Errors/ApigatewayProjectsLocationsOperationsDeleteError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApigatewayOperation&gt; ApigatewayProjectsLocationsOperationsGet(ApigatewayProjectsLocationsOperationsGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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
    var response = await client.ApigatewayProjectsLocationsOperationsGet(
        new ApigatewayProjectsLocationsOperationsGetRequest
        {
            ProjectsId = "some example string",
            LocationsId = "some example string",
            OperationsId = "some example string",
        });
    // TODO: Handle 'response' of type ApigatewayOperation
}
catch (ApiException<ApigatewayProjectsLocationsOperationsGetError> ex)
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

<code>[ApigatewayProjectsLocationsOperationsGetRequest](src/GoogleCloudApiGateway/Requests/ApigatewayProjectsLocationsOperationsGetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApigatewayOperation](src/GoogleCloudApiGateway/Models/ApigatewayOperation.cs)</code>

**OnError**: <code>[ApiException](src/GoogleCloudApiGateway/Core/Exceptions/ApiException.cs)&lt;[ApigatewayProjectsLocationsOperationsGetError](src/GoogleCloudApiGateway/Errors/ApigatewayProjectsLocationsOperationsGetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApigatewayListOperationsResponse&gt; ApigatewayProjectsLocationsOperationsList(ApigatewayProjectsLocationsOperationsListRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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
    var response = await client.ApigatewayProjectsLocationsOperationsList(
        new ApigatewayProjectsLocationsOperationsListRequest
        {
            ProjectsId = "some example string",
            LocationsId = "some example string",
        });
    // TODO: Handle 'response' of type ApigatewayListOperationsResponse
}
catch (ApiException<ApigatewayProjectsLocationsOperationsListError> ex)
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

<code>[ApigatewayProjectsLocationsOperationsListRequest](src/GoogleCloudApiGateway/Requests/ApigatewayProjectsLocationsOperationsListRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApigatewayListOperationsResponse](src/GoogleCloudApiGateway/Models/ApigatewayListOperationsResponse.cs)</code>

**OnError**: <code>[ApiException](src/GoogleCloudApiGateway/Core/Exceptions/ApiException.cs)&lt;[ApigatewayProjectsLocationsOperationsListError](src/GoogleCloudApiGateway/Errors/ApigatewayProjectsLocationsOperationsListError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

