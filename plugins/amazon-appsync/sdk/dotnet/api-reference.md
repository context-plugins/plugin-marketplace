# Reference

Every operation below is shown in its throwing form. On an error status it throws `ApiException<TError>` — the status code, headers, content type and the operation's error type, `RawError` (the raw body) when the spec declares none — and where an operation offers an `…AsResult` sibling, that sibling returns `ApiResult<TResponse, TError>` instead. A request that produces no usable response surfaces as `SdkConnectionException` or `SdkTimeoutException`, a body that does not match the documented response type as `ResponseDeserializationException`, and a required credential that is not configured, or one that cannot be applied, as `AuthSchemeException`; all of them derive from `SdkException` and name the failed call. See [README → Error Handling](README.md#error-handling).

> Source: [AmazonAppSyncClient](src/AmazonAppSync/AmazonAppSyncClient.cs)

## ApiKeys

> Source: [ApiKeys](src/AmazonAppSync/Api/ApiKeys.cs)

<details>
<summary><code>Task&lt;CreateApiKeyResponse&gt; CreateApiKey(CreateApiKeyRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a unique key that you can distribute to clients who invoke your API.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.ApiKeys.CreateApiKey(new CreateApiKeyRequest { ApiId = "some example string" });
    // TODO: Handle 'response' of type CreateApiKeyResponse
}
catch (ApiException<CreateApiKeyError> ex)
{
    if (ex.Error.TryGetApiKeyLimitExceededException(out var error))
    {
        // TODO: Handle 'error' of type ApiKeyLimitExceededException
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CreateApiKeyRequest](src/AmazonAppSync/Requests/ApiKeys/CreateApiKeyRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CreateApiKeyResponse](src/AmazonAppSync/Models/CreateApiKeyResponse.cs)</code>

**OnError**: <code>[ApiException](src/AmazonAppSync/Core/Exceptions/ApiException.cs)&lt;[CreateApiKeyError](src/AmazonAppSync/Errors/CreateApiKeyError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;object&gt; DeleteApiKey(DeleteApiKeyRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes an API key.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.ApiKeys.DeleteApiKey(new DeleteApiKeyRequest
    {
        ApiId = "some example string",
        Id = "some example string",
    });
    // TODO: Handle 'response' of type object
}
catch (ApiException<DeleteApiKeyError> ex)
{
    if (ex.Error.TryGetBadRequestException(out var error))
    {
        // TODO: Handle 'error' of type BadRequestException
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DeleteApiKeyRequest](src/AmazonAppSync/Requests/ApiKeys/DeleteApiKeyRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>object</code>

**OnError**: <code>[ApiException](src/AmazonAppSync/Core/Exceptions/ApiException.cs)&lt;[DeleteApiKeyError](src/AmazonAppSync/Errors/DeleteApiKeyError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ListApiKeysResponse&gt; ListApiKeys(ListApiKeysRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists the API keys for a given API. API keys are deleted automatically 60 days after they expire. However, they may still be included in the response until they have actually been deleted. You can safely call DeleteApiKey to manually delete a key before it's automatically deleted.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.ApiKeys.ListApiKeys(new ListApiKeysRequest { ApiId = "some example string" });
    // TODO: Handle 'response' of type ListApiKeysResponse
}
catch (ApiException<ListApiKeysError> ex)
{
    if (ex.Error.TryGetBadRequestException(out var error))
    {
        // TODO: Handle 'error' of type BadRequestException
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListApiKeysRequest](src/AmazonAppSync/Requests/ApiKeys/ListApiKeysRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ListApiKeysResponse](src/AmazonAppSync/Models/ListApiKeysResponse.cs)</code>

**OnError**: <code>[ApiException](src/AmazonAppSync/Core/Exceptions/ApiException.cs)&lt;[ListApiKeysError](src/AmazonAppSync/Errors/ListApiKeysError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;UpdateApiKeyResponse&gt; UpdateApiKey(UpdateApiKeyRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates an API key. You can update the key as long as it's not deleted.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.ApiKeys.UpdateApiKey(new UpdateApiKeyRequest
    {
        ApiId = "some example string",
        Id = "some example string",
    });
    // TODO: Handle 'response' of type UpdateApiKeyResponse
}
catch (ApiException<UpdateApiKeyError> ex)
{
    if (ex.Error.TryGetApiKeyValidityOutOfBoundsException(out var error))
    {
        // TODO: Handle 'error' of type ApiKeyValidityOutOfBoundsException
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[UpdateApiKeyRequest](src/AmazonAppSync/Requests/ApiKeys/UpdateApiKeyRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[UpdateApiKeyResponse](src/AmazonAppSync/Models/UpdateApiKeyResponse.cs)</code>

**OnError**: <code>[ApiException](src/AmazonAppSync/Core/Exceptions/ApiException.cs)&lt;[UpdateApiKeyError](src/AmazonAppSync/Errors/UpdateApiKeyError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Apicaches

> Source: [Apicaches](src/AmazonAppSync/Api/Apicaches.cs)

<details>
<summary><code>Task&lt;CreateApiCacheResponse&gt; CreateApiCache(CreateApiCacheRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a cache for the GraphQL API.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Apicaches.CreateApiCache(new CreateApiCacheRequest { ApiId = "some example string" });
    // TODO: Handle 'response' of type CreateApiCacheResponse
}
catch (ApiException<CreateApiCacheError> ex)
{
    if (ex.Error.TryGetBadRequestException(out var error))
    {
        // TODO: Handle 'error' of type BadRequestException
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CreateApiCacheRequest](src/AmazonAppSync/Requests/Apicaches/CreateApiCacheRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CreateApiCacheResponse](src/AmazonAppSync/Models/CreateApiCacheResponse.cs)</code>

**OnError**: <code>[ApiException](src/AmazonAppSync/Core/Exceptions/ApiException.cs)&lt;[CreateApiCacheError](src/AmazonAppSync/Errors/CreateApiCacheError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;object&gt; DeleteApiCache(DeleteApiCacheRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes an ApiCache object.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Apicaches.DeleteApiCache(new DeleteApiCacheRequest { ApiId = "some example string" });
    // TODO: Handle 'response' of type object
}
catch (ApiException<DeleteApiCacheError> ex)
{
    if (ex.Error.TryGetBadRequestException(out var error))
    {
        // TODO: Handle 'error' of type BadRequestException
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DeleteApiCacheRequest](src/AmazonAppSync/Requests/Apicaches/DeleteApiCacheRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>object</code>

**OnError**: <code>[ApiException](src/AmazonAppSync/Core/Exceptions/ApiException.cs)&lt;[DeleteApiCacheError](src/AmazonAppSync/Errors/DeleteApiCacheError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GetApiCacheResponse&gt; GetApiCache(GetApiCacheRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves an ApiCache object.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Apicaches.GetApiCache(new GetApiCacheRequest { ApiId = "some example string" });
    // TODO: Handle 'response' of type GetApiCacheResponse
}
catch (ApiException<GetApiCacheError> ex)
{
    if (ex.Error.TryGetBadRequestException(out var error))
    {
        // TODO: Handle 'error' of type BadRequestException
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetApiCacheRequest](src/AmazonAppSync/Requests/Apicaches/GetApiCacheRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GetApiCacheResponse](src/AmazonAppSync/Models/GetApiCacheResponse.cs)</code>

**OnError**: <code>[ApiException](src/AmazonAppSync/Core/Exceptions/ApiException.cs)&lt;[GetApiCacheError](src/AmazonAppSync/Errors/GetApiCacheError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;UpdateApiCacheResponse&gt; UpdateApiCache(UpdateApiCacheRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates the cache for the GraphQL API.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Apicaches.UpdateApiCache(new UpdateApiCacheRequest { ApiId = "some example string" });
    // TODO: Handle 'response' of type UpdateApiCacheResponse
}
catch (ApiException<UpdateApiCacheError> ex)
{
    if (ex.Error.TryGetBadRequestException(out var error))
    {
        // TODO: Handle 'error' of type BadRequestException
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[UpdateApiCacheRequest](src/AmazonAppSync/Requests/Apicaches/UpdateApiCacheRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[UpdateApiCacheResponse](src/AmazonAppSync/Models/UpdateApiCacheResponse.cs)</code>

**OnError**: <code>[ApiException](src/AmazonAppSync/Core/Exceptions/ApiException.cs)&lt;[UpdateApiCacheError](src/AmazonAppSync/Errors/UpdateApiCacheError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Apis

> Source: [Apis](src/AmazonAppSync/Api/Apis.cs)

<details>
<summary><code>Task&lt;CreateApiResponse&gt; CreateApi(CreateApiRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates an Api object. Use this operation to create an AppSync API with your preferred configuration, such as an Event API that provides real-time message publishing and message subscriptions over WebSockets.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Apis.CreateApi(new CreateApiRequest());
    // TODO: Handle 'response' of type CreateApiResponse
}
catch (ApiException<CreateApiError> ex)
{
    if (ex.Error.TryGetBadRequestException(out var error))
    {
        // TODO: Handle 'error' of type BadRequestException
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CreateApiRequest](src/AmazonAppSync/Requests/Apis/CreateApiRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CreateApiResponse](src/AmazonAppSync/Models/CreateApiResponse.cs)</code>

**OnError**: <code>[ApiException](src/AmazonAppSync/Core/Exceptions/ApiException.cs)&lt;[CreateApiError](src/AmazonAppSync/Errors/CreateApiError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;CreateGraphqlApiResponse&gt; CreateGraphqlApi(CreateGraphqlApiRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a GraphqlApi object.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Apis.CreateGraphqlApi(new CreateGraphqlApiRequest());
    // TODO: Handle 'response' of type CreateGraphqlApiResponse
}
catch (ApiException<CreateGraphqlApiError> ex)
{
    if (ex.Error.TryGetApiLimitExceededException(out var error))
    {
        // TODO: Handle 'error' of type ApiLimitExceededException
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CreateGraphqlApiRequest](src/AmazonAppSync/Requests/Apis/CreateGraphqlApiRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CreateGraphqlApiResponse](src/AmazonAppSync/Models/CreateGraphqlApiResponse.cs)</code>

**OnError**: <code>[ApiException](src/AmazonAppSync/Core/Exceptions/ApiException.cs)&lt;[CreateGraphqlApiError](src/AmazonAppSync/Errors/CreateGraphqlApiError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;object&gt; DeleteApi(DeleteApiRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes an Api object

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Apis.DeleteApi(new DeleteApiRequest { ApiId = "some example string" });
    // TODO: Handle 'response' of type object
}
catch (ApiException<DeleteApiError> ex)
{
    if (ex.Error.TryGetBadRequestException(out var error))
    {
        // TODO: Handle 'error' of type BadRequestException
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DeleteApiRequest](src/AmazonAppSync/Requests/Apis/DeleteApiRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>object</code>

**OnError**: <code>[ApiException](src/AmazonAppSync/Core/Exceptions/ApiException.cs)&lt;[DeleteApiError](src/AmazonAppSync/Errors/DeleteApiError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;object&gt; DeleteGraphqlApi(DeleteGraphqlApiRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a GraphqlApi object.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Apis.DeleteGraphqlApi(new DeleteGraphqlApiRequest { ApiId = "some example string" });
    // TODO: Handle 'response' of type object
}
catch (ApiException<DeleteGraphqlApiError> ex)
{
    if (ex.Error.TryGetBadRequestException(out var error))
    {
        // TODO: Handle 'error' of type BadRequestException
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DeleteGraphqlApiRequest](src/AmazonAppSync/Requests/Apis/DeleteGraphqlApiRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>object</code>

**OnError**: <code>[ApiException](src/AmazonAppSync/Core/Exceptions/ApiException.cs)&lt;[DeleteGraphqlApiError](src/AmazonAppSync/Errors/DeleteGraphqlApiError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GetApiResponse&gt; GetApi(GetApiRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves an Api object.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Apis.GetApi(new GetApiRequest { ApiId = "some example string" });
    // TODO: Handle 'response' of type GetApiResponse
}
catch (ApiException<GetApiError> ex)
{
    if (ex.Error.TryGetBadRequestException(out var error))
    {
        // TODO: Handle 'error' of type BadRequestException
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetApiRequest](src/AmazonAppSync/Requests/Apis/GetApiRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GetApiResponse](src/AmazonAppSync/Models/GetApiResponse.cs)</code>

**OnError**: <code>[ApiException](src/AmazonAppSync/Core/Exceptions/ApiException.cs)&lt;[GetApiError](src/AmazonAppSync/Errors/GetApiError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GetGraphqlApiResponse&gt; GetGraphqlApi(GetGraphqlApiRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves a GraphqlApi object.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Apis.GetGraphqlApi(new GetGraphqlApiRequest { ApiId = "some example string" });
    // TODO: Handle 'response' of type GetGraphqlApiResponse
}
catch (ApiException<GetGraphqlApiError> ex)
{
    if (ex.Error.TryGetBadRequestException(out var error))
    {
        // TODO: Handle 'error' of type BadRequestException
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetGraphqlApiRequest](src/AmazonAppSync/Requests/Apis/GetGraphqlApiRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GetGraphqlApiResponse](src/AmazonAppSync/Models/GetGraphqlApiResponse.cs)</code>

**OnError**: <code>[ApiException](src/AmazonAppSync/Core/Exceptions/ApiException.cs)&lt;[GetGraphqlApiError](src/AmazonAppSync/Errors/GetGraphqlApiError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ListApisResponse&gt; ListApis(ListApisRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists the APIs in your AppSync account. ListApis returns only the high level API details. For more detailed information about an API, use GetApi.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Apis.ListApis(new ListApisRequest());
    // TODO: Handle 'response' of type ListApisResponse
}
catch (ApiException<ListApisError> ex)
{
    if (ex.Error.TryGetBadRequestException(out var error))
    {
        // TODO: Handle 'error' of type BadRequestException
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListApisRequest](src/AmazonAppSync/Requests/Apis/ListApisRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ListApisResponse](src/AmazonAppSync/Models/ListApisResponse.cs)</code>

**OnError**: <code>[ApiException](src/AmazonAppSync/Core/Exceptions/ApiException.cs)&lt;[ListApisError](src/AmazonAppSync/Errors/ListApisError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ListGraphqlApisResponse&gt; ListGraphqlApis(ListGraphqlApisRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists your GraphQL APIs.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Apis.ListGraphqlApis(new ListGraphqlApisRequest());
    // TODO: Handle 'response' of type ListGraphqlApisResponse
}
catch (ApiException<ListGraphqlApisError> ex)
{
    if (ex.Error.TryGetBadRequestException(out var error))
    {
        // TODO: Handle 'error' of type BadRequestException
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListGraphqlApisRequest](src/AmazonAppSync/Requests/Apis/ListGraphqlApisRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ListGraphqlApisResponse](src/AmazonAppSync/Models/ListGraphqlApisResponse.cs)</code>

**OnError**: <code>[ApiException](src/AmazonAppSync/Core/Exceptions/ApiException.cs)&lt;[ListGraphqlApisError](src/AmazonAppSync/Errors/ListGraphqlApisError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;UpdateApiResponse&gt; UpdateApi(UpdateApiRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates an Api.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Apis.UpdateApi(new UpdateApiRequest { ApiId = "some example string" });
    // TODO: Handle 'response' of type UpdateApiResponse
}
catch (ApiException<UpdateApiError> ex)
{
    if (ex.Error.TryGetBadRequestException(out var error))
    {
        // TODO: Handle 'error' of type BadRequestException
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[UpdateApiRequest](src/AmazonAppSync/Requests/Apis/UpdateApiRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[UpdateApiResponse](src/AmazonAppSync/Models/UpdateApiResponse.cs)</code>

**OnError**: <code>[ApiException](src/AmazonAppSync/Core/Exceptions/ApiException.cs)&lt;[UpdateApiError](src/AmazonAppSync/Errors/UpdateApiError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;UpdateGraphqlApiResponse&gt; UpdateGraphqlApi(UpdateGraphqlApiRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates a GraphqlApi object.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Apis.UpdateGraphqlApi(new UpdateGraphqlApiRequest { ApiId = "some example string" });
    // TODO: Handle 'response' of type UpdateGraphqlApiResponse
}
catch (ApiException<UpdateGraphqlApiError> ex)
{
    if (ex.Error.TryGetBadRequestException(out var error))
    {
        // TODO: Handle 'error' of type BadRequestException
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[UpdateGraphqlApiRequest](src/AmazonAppSync/Requests/Apis/UpdateGraphqlApiRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[UpdateGraphqlApiResponse](src/AmazonAppSync/Models/UpdateGraphqlApiResponse.cs)</code>

**OnError**: <code>[ApiException](src/AmazonAppSync/Core/Exceptions/ApiException.cs)&lt;[UpdateGraphqlApiError](src/AmazonAppSync/Errors/UpdateGraphqlApiError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Channelnamespaces

> Source: [Channelnamespaces](src/AmazonAppSync/Api/Channelnamespaces.cs)

<details>
<summary><code>Task&lt;CreateChannelNamespaceResponse&gt; CreateChannelNamespace(CreateChannelNamespaceRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a ChannelNamespace for an Api.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Channelnamespaces.CreateChannelNamespace(new CreateChannelNamespaceRequest
    {
        ApiId = "some example string",
    });
    // TODO: Handle 'response' of type CreateChannelNamespaceResponse
}
catch (ApiException<CreateChannelNamespaceError> ex)
{
    if (ex.Error.TryGetBadRequestException(out var error))
    {
        // TODO: Handle 'error' of type BadRequestException
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CreateChannelNamespaceRequest](src/AmazonAppSync/Requests/Channelnamespaces/CreateChannelNamespaceRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CreateChannelNamespaceResponse](src/AmazonAppSync/Models/CreateChannelNamespaceResponse.cs)</code>

**OnError**: <code>[ApiException](src/AmazonAppSync/Core/Exceptions/ApiException.cs)&lt;[CreateChannelNamespaceError](src/AmazonAppSync/Errors/CreateChannelNamespaceError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;object&gt; DeleteChannelNamespace(DeleteChannelNamespaceRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a ChannelNamespace.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Channelnamespaces.DeleteChannelNamespace(new DeleteChannelNamespaceRequest
    {
        ApiId = "some example string",
        Name = "some example string",
    });
    // TODO: Handle 'response' of type object
}
catch (ApiException<DeleteChannelNamespaceError> ex)
{
    if (ex.Error.TryGetBadRequestException(out var error))
    {
        // TODO: Handle 'error' of type BadRequestException
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DeleteChannelNamespaceRequest](src/AmazonAppSync/Requests/Channelnamespaces/DeleteChannelNamespaceRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>object</code>

**OnError**: <code>[ApiException](src/AmazonAppSync/Core/Exceptions/ApiException.cs)&lt;[DeleteChannelNamespaceError](src/AmazonAppSync/Errors/DeleteChannelNamespaceError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GetChannelNamespaceResponse&gt; GetChannelNamespace(GetChannelNamespaceRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves the channel namespace for a specified Api.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Channelnamespaces.GetChannelNamespace(new GetChannelNamespaceRequest
    {
        ApiId = "some example string",
        Name = "some example string",
    });
    // TODO: Handle 'response' of type GetChannelNamespaceResponse
}
catch (ApiException<GetChannelNamespaceError> ex)
{
    if (ex.Error.TryGetBadRequestException(out var error))
    {
        // TODO: Handle 'error' of type BadRequestException
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetChannelNamespaceRequest](src/AmazonAppSync/Requests/Channelnamespaces/GetChannelNamespaceRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GetChannelNamespaceResponse](src/AmazonAppSync/Models/GetChannelNamespaceResponse.cs)</code>

**OnError**: <code>[ApiException](src/AmazonAppSync/Core/Exceptions/ApiException.cs)&lt;[GetChannelNamespaceError](src/AmazonAppSync/Errors/GetChannelNamespaceError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ListChannelNamespacesResponse&gt; ListChannelNamespaces(ListChannelNamespacesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists the channel namespaces for a specified Api. ListChannelNamespaces returns only high level details for the channel namespace. To retrieve code handlers, use GetChannelNamespace.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Channelnamespaces.ListChannelNamespaces(new ListChannelNamespacesRequest
    {
        ApiId = "some example string",
    });
    // TODO: Handle 'response' of type ListChannelNamespacesResponse
}
catch (ApiException<ListChannelNamespacesError> ex)
{
    if (ex.Error.TryGetBadRequestException(out var error))
    {
        // TODO: Handle 'error' of type BadRequestException
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListChannelNamespacesRequest](src/AmazonAppSync/Requests/Channelnamespaces/ListChannelNamespacesRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ListChannelNamespacesResponse](src/AmazonAppSync/Models/ListChannelNamespacesResponse.cs)</code>

**OnError**: <code>[ApiException](src/AmazonAppSync/Core/Exceptions/ApiException.cs)&lt;[ListChannelNamespacesError](src/AmazonAppSync/Errors/ListChannelNamespacesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;UpdateChannelNamespaceResponse&gt; UpdateChannelNamespace(UpdateChannelNamespaceRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates a ChannelNamespace associated with an Api.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Channelnamespaces.UpdateChannelNamespace(new UpdateChannelNamespaceRequest
    {
        ApiId = "some example string",
        Name = "some example string",
    });
    // TODO: Handle 'response' of type UpdateChannelNamespaceResponse
}
catch (ApiException<UpdateChannelNamespaceError> ex)
{
    if (ex.Error.TryGetBadRequestException(out var error))
    {
        // TODO: Handle 'error' of type BadRequestException
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[UpdateChannelNamespaceRequest](src/AmazonAppSync/Requests/Channelnamespaces/UpdateChannelNamespaceRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[UpdateChannelNamespaceResponse](src/AmazonAppSync/Models/UpdateChannelNamespaceResponse.cs)</code>

**OnError**: <code>[ApiException](src/AmazonAppSync/Core/Exceptions/ApiException.cs)&lt;[UpdateChannelNamespaceError](src/AmazonAppSync/Errors/UpdateChannelNamespaceError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## DataSources

> Source: [DataSources](src/AmazonAppSync/Api/DataSources.cs)

<details>
<summary><code>Task&lt;CreateDataSourceResponse&gt; CreateDataSource(CreateDataSourceRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a DataSource object.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.DataSources.CreateDataSource(new CreateDataSourceRequest
    {
        ApiId = "some example string",
    });
    // TODO: Handle 'response' of type CreateDataSourceResponse
}
catch (ApiException<CreateDataSourceError> ex)
{
    if (ex.Error.TryGetBadRequestException(out var error))
    {
        // TODO: Handle 'error' of type BadRequestException
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CreateDataSourceRequest](src/AmazonAppSync/Requests/DataSources/CreateDataSourceRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CreateDataSourceResponse](src/AmazonAppSync/Models/CreateDataSourceResponse.cs)</code>

**OnError**: <code>[ApiException](src/AmazonAppSync/Core/Exceptions/ApiException.cs)&lt;[CreateDataSourceError](src/AmazonAppSync/Errors/CreateDataSourceError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;object&gt; DeleteDataSource(DeleteDataSourceRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a DataSource object.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.DataSources.DeleteDataSource(new DeleteDataSourceRequest
    {
        ApiId = "some example string",
        Name = "some example string",
    });
    // TODO: Handle 'response' of type object
}
catch (ApiException<DeleteDataSourceError> ex)
{
    if (ex.Error.TryGetBadRequestException(out var error))
    {
        // TODO: Handle 'error' of type BadRequestException
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DeleteDataSourceRequest](src/AmazonAppSync/Requests/DataSources/DeleteDataSourceRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>object</code>

**OnError**: <code>[ApiException](src/AmazonAppSync/Core/Exceptions/ApiException.cs)&lt;[DeleteDataSourceError](src/AmazonAppSync/Errors/DeleteDataSourceError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GetDataSourceResponse&gt; GetDataSource(GetDataSourceRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves a DataSource object.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.DataSources.GetDataSource(new GetDataSourceRequest
    {
        ApiId = "some example string",
        Name = "some example string",
    });
    // TODO: Handle 'response' of type GetDataSourceResponse
}
catch (ApiException<GetDataSourceError> ex)
{
    if (ex.Error.TryGetBadRequestException(out var error))
    {
        // TODO: Handle 'error' of type BadRequestException
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetDataSourceRequest](src/AmazonAppSync/Requests/DataSources/GetDataSourceRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GetDataSourceResponse](src/AmazonAppSync/Models/GetDataSourceResponse.cs)</code>

**OnError**: <code>[ApiException](src/AmazonAppSync/Core/Exceptions/ApiException.cs)&lt;[GetDataSourceError](src/AmazonAppSync/Errors/GetDataSourceError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GetDataSourceIntrospectionResponse&gt; GetDataSourceIntrospection(GetDataSourceIntrospectionRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves the record of an existing introspection. If the retrieval is successful, the result of the instrospection will also be returned. If the retrieval fails the operation, an error message will be returned instead.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.DataSources.GetDataSourceIntrospection(new GetDataSourceIntrospectionRequest
    {
        IntrospectionId = "some example string",
    });
    // TODO: Handle 'response' of type GetDataSourceIntrospectionResponse
}
catch (ApiException<GetDataSourceIntrospectionError> ex)
{
    if (ex.Error.TryGetBadRequestException(out var error))
    {
        // TODO: Handle 'error' of type BadRequestException
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetDataSourceIntrospectionRequest](src/AmazonAppSync/Requests/DataSources/GetDataSourceIntrospectionRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GetDataSourceIntrospectionResponse](src/AmazonAppSync/Models/GetDataSourceIntrospectionResponse.cs)</code>

**OnError**: <code>[ApiException](src/AmazonAppSync/Core/Exceptions/ApiException.cs)&lt;[GetDataSourceIntrospectionError](src/AmazonAppSync/Errors/GetDataSourceIntrospectionError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ListDataSourcesResponse&gt; ListDataSources(ListDataSourcesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists the data sources for a given API.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.DataSources.ListDataSources(new ListDataSourcesRequest
    {
        ApiId = "some example string",
    });
    // TODO: Handle 'response' of type ListDataSourcesResponse
}
catch (ApiException<ListDataSourcesError> ex)
{
    if (ex.Error.TryGetBadRequestException(out var error))
    {
        // TODO: Handle 'error' of type BadRequestException
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListDataSourcesRequest](src/AmazonAppSync/Requests/DataSources/ListDataSourcesRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ListDataSourcesResponse](src/AmazonAppSync/Models/ListDataSourcesResponse.cs)</code>

**OnError**: <code>[ApiException](src/AmazonAppSync/Core/Exceptions/ApiException.cs)&lt;[ListDataSourcesError](src/AmazonAppSync/Errors/ListDataSourcesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;StartDataSourceIntrospectionResponse&gt; StartDataSourceIntrospection(StartDataSourceIntrospectionRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a new introspection. Returns the introspectionId of the new introspection after its creation.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.DataSources.StartDataSourceIntrospection(new StartDataSourceIntrospectionRequest());
    // TODO: Handle 'response' of type StartDataSourceIntrospectionResponse
}
catch (ApiException<StartDataSourceIntrospectionError> ex)
{
    if (ex.Error.TryGetBadRequestException(out var error))
    {
        // TODO: Handle 'error' of type BadRequestException
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[StartDataSourceIntrospectionRequest](src/AmazonAppSync/Requests/DataSources/StartDataSourceIntrospectionRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[StartDataSourceIntrospectionResponse](src/AmazonAppSync/Models/StartDataSourceIntrospectionResponse.cs)</code>

**OnError**: <code>[ApiException](src/AmazonAppSync/Core/Exceptions/ApiException.cs)&lt;[StartDataSourceIntrospectionError](src/AmazonAppSync/Errors/StartDataSourceIntrospectionError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;UpdateDataSourceResponse&gt; UpdateDataSource(UpdateDataSourceRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates a DataSource object.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.DataSources.UpdateDataSource(new UpdateDataSourceRequest
    {
        ApiId = "some example string",
        Name = "some example string",
    });
    // TODO: Handle 'response' of type UpdateDataSourceResponse
}
catch (ApiException<UpdateDataSourceError> ex)
{
    if (ex.Error.TryGetBadRequestException(out var error))
    {
        // TODO: Handle 'error' of type BadRequestException
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[UpdateDataSourceRequest](src/AmazonAppSync/Requests/DataSources/UpdateDataSourceRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[UpdateDataSourceResponse](src/AmazonAppSync/Models/UpdateDataSourceResponse.cs)</code>

**OnError**: <code>[ApiException](src/AmazonAppSync/Core/Exceptions/ApiException.cs)&lt;[UpdateDataSourceError](src/AmazonAppSync/Errors/UpdateDataSourceError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## DomainNames

> Source: [DomainNames](src/AmazonAppSync/Api/DomainNames.cs)

<details>
<summary><code>Task&lt;AssociateApiResponse&gt; AssociateApi(AssociateApiRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Maps an endpoint to your custom domain.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.DomainNames.AssociateApi(new AssociateApiRequest
    {
        DomainName = "some example string",
    });
    // TODO: Handle 'response' of type AssociateApiResponse
}
catch (ApiException<AssociateApiError> ex)
{
    if (ex.Error.TryGetBadRequestException(out var error))
    {
        // TODO: Handle 'error' of type BadRequestException
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[AssociateApiRequest](src/AmazonAppSync/Requests/DomainNames/AssociateApiRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[AssociateApiResponse](src/AmazonAppSync/Models/AssociateApiResponse.cs)</code>

**OnError**: <code>[ApiException](src/AmazonAppSync/Core/Exceptions/ApiException.cs)&lt;[AssociateApiError](src/AmazonAppSync/Errors/AssociateApiError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;CreateDomainNameResponse&gt; CreateDomainName(CreateDomainNameRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a custom DomainName object.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.DomainNames.CreateDomainName(new CreateDomainNameRequest());
    // TODO: Handle 'response' of type CreateDomainNameResponse
}
catch (ApiException<CreateDomainNameError> ex)
{
    if (ex.Error.TryGetBadRequestException(out var error))
    {
        // TODO: Handle 'error' of type BadRequestException
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CreateDomainNameRequest](src/AmazonAppSync/Requests/DomainNames/CreateDomainNameRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CreateDomainNameResponse](src/AmazonAppSync/Models/CreateDomainNameResponse.cs)</code>

**OnError**: <code>[ApiException](src/AmazonAppSync/Core/Exceptions/ApiException.cs)&lt;[CreateDomainNameError](src/AmazonAppSync/Errors/CreateDomainNameError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;object&gt; DeleteDomainName(DeleteDomainNameRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a custom DomainName object.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.DomainNames.DeleteDomainName(new DeleteDomainNameRequest
    {
        DomainName = "some example string",
    });
    // TODO: Handle 'response' of type object
}
catch (ApiException<DeleteDomainNameError> ex)
{
    if (ex.Error.TryGetBadRequestException(out var error))
    {
        // TODO: Handle 'error' of type BadRequestException
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DeleteDomainNameRequest](src/AmazonAppSync/Requests/DomainNames/DeleteDomainNameRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>object</code>

**OnError**: <code>[ApiException](src/AmazonAppSync/Core/Exceptions/ApiException.cs)&lt;[DeleteDomainNameError](src/AmazonAppSync/Errors/DeleteDomainNameError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;object&gt; DisassociateApi(DisassociateApiRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Removes an ApiAssociation object from a custom domain.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.DomainNames.DisassociateApi(new DisassociateApiRequest
    {
        DomainName = "some example string",
    });
    // TODO: Handle 'response' of type object
}
catch (ApiException<DisassociateApiError> ex)
{
    if (ex.Error.TryGetBadRequestException(out var error))
    {
        // TODO: Handle 'error' of type BadRequestException
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DisassociateApiRequest](src/AmazonAppSync/Requests/DomainNames/DisassociateApiRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>object</code>

**OnError**: <code>[ApiException](src/AmazonAppSync/Core/Exceptions/ApiException.cs)&lt;[DisassociateApiError](src/AmazonAppSync/Errors/DisassociateApiError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GetApiAssociationResponse&gt; GetApiAssociation(GetApiAssociationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves an ApiAssociation object.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.DomainNames.GetApiAssociation(new GetApiAssociationRequest
    {
        DomainName = "some example string",
    });
    // TODO: Handle 'response' of type GetApiAssociationResponse
}
catch (ApiException<GetApiAssociationError> ex)
{
    if (ex.Error.TryGetBadRequestException(out var error))
    {
        // TODO: Handle 'error' of type BadRequestException
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetApiAssociationRequest](src/AmazonAppSync/Requests/DomainNames/GetApiAssociationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GetApiAssociationResponse](src/AmazonAppSync/Models/GetApiAssociationResponse.cs)</code>

**OnError**: <code>[ApiException](src/AmazonAppSync/Core/Exceptions/ApiException.cs)&lt;[GetApiAssociationError](src/AmazonAppSync/Errors/GetApiAssociationError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GetDomainNameResponse&gt; GetDomainName(GetDomainNameRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves a custom DomainName object.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.DomainNames.GetDomainName(new GetDomainNameRequest
    {
        DomainName = "some example string",
    });
    // TODO: Handle 'response' of type GetDomainNameResponse
}
catch (ApiException<GetDomainNameError> ex)
{
    if (ex.Error.TryGetBadRequestException(out var error))
    {
        // TODO: Handle 'error' of type BadRequestException
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetDomainNameRequest](src/AmazonAppSync/Requests/DomainNames/GetDomainNameRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GetDomainNameResponse](src/AmazonAppSync/Models/GetDomainNameResponse.cs)</code>

**OnError**: <code>[ApiException](src/AmazonAppSync/Core/Exceptions/ApiException.cs)&lt;[GetDomainNameError](src/AmazonAppSync/Errors/GetDomainNameError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ListDomainNamesResponse&gt; ListDomainNames(ListDomainNamesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists multiple custom domain names.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.DomainNames.ListDomainNames(new ListDomainNamesRequest());
    // TODO: Handle 'response' of type ListDomainNamesResponse
}
catch (ApiException<ListDomainNamesError> ex)
{
    if (ex.Error.TryGetBadRequestException(out var error))
    {
        // TODO: Handle 'error' of type BadRequestException
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListDomainNamesRequest](src/AmazonAppSync/Requests/DomainNames/ListDomainNamesRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ListDomainNamesResponse](src/AmazonAppSync/Models/ListDomainNamesResponse.cs)</code>

**OnError**: <code>[ApiException](src/AmazonAppSync/Core/Exceptions/ApiException.cs)&lt;[ListDomainNamesError](src/AmazonAppSync/Errors/ListDomainNamesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;UpdateDomainNameResponse&gt; UpdateDomainName(UpdateDomainNameRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates a custom DomainName object.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.DomainNames.UpdateDomainName(new UpdateDomainNameRequest
    {
        DomainName = "some example string",
    });
    // TODO: Handle 'response' of type UpdateDomainNameResponse
}
catch (ApiException<UpdateDomainNameError> ex)
{
    if (ex.Error.TryGetBadRequestException(out var error))
    {
        // TODO: Handle 'error' of type BadRequestException
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[UpdateDomainNameRequest](src/AmazonAppSync/Requests/DomainNames/UpdateDomainNameRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[UpdateDomainNameResponse](src/AmazonAppSync/Models/UpdateDomainNameResponse.cs)</code>

**OnError**: <code>[ApiException](src/AmazonAppSync/Core/Exceptions/ApiException.cs)&lt;[UpdateDomainNameError](src/AmazonAppSync/Errors/UpdateDomainNameError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Functions

> Source: [Functions](src/AmazonAppSync/Api/Functions.cs)

<details>
<summary><code>Task&lt;CreateFunctionResponse&gt; CreateFunction(CreateFunctionRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a Function object. A function is a reusable entity. You can use multiple functions to compose the resolver logic.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Functions.CreateFunction(new CreateFunctionRequest { ApiId = "some example string" });
    // TODO: Handle 'response' of type CreateFunctionResponse
}
catch (ApiException<CreateFunctionError> ex)
{
    if (ex.Error.TryGetBadRequestException(out var error))
    {
        // TODO: Handle 'error' of type BadRequestException
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CreateFunctionRequest](src/AmazonAppSync/Requests/Functions/CreateFunctionRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CreateFunctionResponse](src/AmazonAppSync/Models/CreateFunctionResponse.cs)</code>

**OnError**: <code>[ApiException](src/AmazonAppSync/Core/Exceptions/ApiException.cs)&lt;[CreateFunctionError](src/AmazonAppSync/Errors/CreateFunctionError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;object&gt; DeleteFunction(DeleteFunctionRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a Function.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Functions.DeleteFunction(new DeleteFunctionRequest
    {
        ApiId = "some example string",
        FunctionId = "some example string",
    });
    // TODO: Handle 'response' of type object
}
catch (ApiException<DeleteFunctionError> ex)
{
    if (ex.Error.TryGetBadRequestException(out var error))
    {
        // TODO: Handle 'error' of type BadRequestException
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DeleteFunctionRequest](src/AmazonAppSync/Requests/Functions/DeleteFunctionRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>object</code>

**OnError**: <code>[ApiException](src/AmazonAppSync/Core/Exceptions/ApiException.cs)&lt;[DeleteFunctionError](src/AmazonAppSync/Errors/DeleteFunctionError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GetFunctionResponse&gt; GetFunction(GetFunctionRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a Function.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Functions.GetFunction(new GetFunctionRequest
    {
        ApiId = "some example string",
        FunctionId = "some example string",
    });
    // TODO: Handle 'response' of type GetFunctionResponse
}
catch (ApiException<GetFunctionError> ex)
{
    if (ex.Error.TryGetUnauthorizedException(out var error))
    {
        // TODO: Handle 'error' of type UnauthorizedException
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetFunctionRequest](src/AmazonAppSync/Requests/Functions/GetFunctionRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GetFunctionResponse](src/AmazonAppSync/Models/GetFunctionResponse.cs)</code>

**OnError**: <code>[ApiException](src/AmazonAppSync/Core/Exceptions/ApiException.cs)&lt;[GetFunctionError](src/AmazonAppSync/Errors/GetFunctionError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ListFunctionsResponse&gt; ListFunctions(ListFunctionsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List multiple functions.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Functions.ListFunctions(new ListFunctionsRequest { ApiId = "some example string" });
    // TODO: Handle 'response' of type ListFunctionsResponse
}
catch (ApiException<ListFunctionsError> ex)
{
    if (ex.Error.TryGetBadRequestException(out var error))
    {
        // TODO: Handle 'error' of type BadRequestException
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListFunctionsRequest](src/AmazonAppSync/Requests/Functions/ListFunctionsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ListFunctionsResponse](src/AmazonAppSync/Models/ListFunctionsResponse.cs)</code>

**OnError**: <code>[ApiException](src/AmazonAppSync/Core/Exceptions/ApiException.cs)&lt;[ListFunctionsError](src/AmazonAppSync/Errors/ListFunctionsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;UpdateFunctionResponse&gt; UpdateFunction(UpdateFunctionRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates a Function object.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Functions.UpdateFunction(new UpdateFunctionRequest
    {
        ApiId = "some example string",
        FunctionId = "some example string",
    });
    // TODO: Handle 'response' of type UpdateFunctionResponse
}
catch (ApiException<UpdateFunctionError> ex)
{
    if (ex.Error.TryGetBadRequestException(out var error))
    {
        // TODO: Handle 'error' of type BadRequestException
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[UpdateFunctionRequest](src/AmazonAppSync/Requests/Functions/UpdateFunctionRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[UpdateFunctionResponse](src/AmazonAppSync/Models/UpdateFunctionResponse.cs)</code>

**OnError**: <code>[ApiException](src/AmazonAppSync/Core/Exceptions/ApiException.cs)&lt;[UpdateFunctionError](src/AmazonAppSync/Errors/UpdateFunctionError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## GraphqlApis

> Source: [GraphqlApis](src/AmazonAppSync/Api/GraphqlApis.cs)

<details>
<summary><code>Task&lt;CreateGraphqlApiResponse&gt; CreateGraphqlApi2(CreateGraphqlApi2Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a GraphqlApi object.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.GraphqlApis.CreateGraphqlApi2(new CreateGraphqlApi2Request());
    // TODO: Handle 'response' of type CreateGraphqlApiResponse
}
catch (ApiException<CreateGraphqlApi2Error> ex)
{
    if (ex.Error.TryGetApiLimitExceededException(out var error))
    {
        // TODO: Handle 'error' of type ApiLimitExceededException
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CreateGraphqlApi2Request](src/AmazonAppSync/Requests/GraphqlApis/CreateGraphqlApi2Request.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CreateGraphqlApiResponse](src/AmazonAppSync/Models/CreateGraphqlApiResponse.cs)</code>

**OnError**: <code>[ApiException](src/AmazonAppSync/Core/Exceptions/ApiException.cs)&lt;[CreateGraphqlApi2Error](src/AmazonAppSync/Errors/CreateGraphqlApi2Error.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;object&gt; DeleteGraphqlApi2(DeleteGraphqlApi2Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a GraphqlApi object.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.GraphqlApis.DeleteGraphqlApi2(new DeleteGraphqlApi2Request
    {
        ApiId = "some example string",
    });
    // TODO: Handle 'response' of type object
}
catch (ApiException<DeleteGraphqlApi2Error> ex)
{
    if (ex.Error.TryGetBadRequestException(out var error))
    {
        // TODO: Handle 'error' of type BadRequestException
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DeleteGraphqlApi2Request](src/AmazonAppSync/Requests/GraphqlApis/DeleteGraphqlApi2Request.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>object</code>

**OnError**: <code>[ApiException](src/AmazonAppSync/Core/Exceptions/ApiException.cs)&lt;[DeleteGraphqlApi2Error](src/AmazonAppSync/Errors/DeleteGraphqlApi2Error.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;EvaluateMappingTemplateResponse&gt; EvaluateMappingTemplate(EvaluateMappingTemplateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Evaluates a given template and returns the response. The mapping template can be a request or response template. Request templates take the incoming request after a GraphQL operation is parsed and convert it into a request configuration for the selected data source operation. Response templates interpret responses from the data source and map it to the shape of the GraphQL field output type. Mapping templates are written in the Apache Velocity Template Language (VTL).

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.GraphqlApis.EvaluateMappingTemplate(new EvaluateMappingTemplateRequest());
    // TODO: Handle 'response' of type EvaluateMappingTemplateResponse
}
catch (ApiException<EvaluateMappingTemplateError> ex)
{
    if (ex.Error.TryGetBadRequestException(out var error))
    {
        // TODO: Handle 'error' of type BadRequestException
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[EvaluateMappingTemplateRequest](src/AmazonAppSync/Requests/GraphqlApis/EvaluateMappingTemplateRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[EvaluateMappingTemplateResponse](src/AmazonAppSync/Models/EvaluateMappingTemplateResponse.cs)</code>

**OnError**: <code>[ApiException](src/AmazonAppSync/Core/Exceptions/ApiException.cs)&lt;[EvaluateMappingTemplateError](src/AmazonAppSync/Errors/EvaluateMappingTemplateError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GetGraphqlApiResponse&gt; GetGraphqlApi2(GetGraphqlApi2Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves a GraphqlApi object.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.GraphqlApis.GetGraphqlApi2(new GetGraphqlApi2Request { ApiId = "some example string" });
    // TODO: Handle 'response' of type GetGraphqlApiResponse
}
catch (ApiException<GetGraphqlApi2Error> ex)
{
    if (ex.Error.TryGetBadRequestException(out var error))
    {
        // TODO: Handle 'error' of type BadRequestException
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetGraphqlApi2Request](src/AmazonAppSync/Requests/GraphqlApis/GetGraphqlApi2Request.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GetGraphqlApiResponse](src/AmazonAppSync/Models/GetGraphqlApiResponse.cs)</code>

**OnError**: <code>[ApiException](src/AmazonAppSync/Core/Exceptions/ApiException.cs)&lt;[GetGraphqlApi2Error](src/AmazonAppSync/Errors/GetGraphqlApi2Error.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ListGraphqlApisResponse&gt; ListGraphqlApis2(ListGraphqlApis2Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists your GraphQL APIs.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.GraphqlApis.ListGraphqlApis2(new ListGraphqlApis2Request());
    // TODO: Handle 'response' of type ListGraphqlApisResponse
}
catch (ApiException<ListGraphqlApis2Error> ex)
{
    if (ex.Error.TryGetBadRequestException(out var error))
    {
        // TODO: Handle 'error' of type BadRequestException
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListGraphqlApis2Request](src/AmazonAppSync/Requests/GraphqlApis/ListGraphqlApis2Request.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ListGraphqlApisResponse](src/AmazonAppSync/Models/ListGraphqlApisResponse.cs)</code>

**OnError**: <code>[ApiException](src/AmazonAppSync/Core/Exceptions/ApiException.cs)&lt;[ListGraphqlApis2Error](src/AmazonAppSync/Errors/ListGraphqlApis2Error.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;UpdateGraphqlApiResponse&gt; UpdateGraphqlApi2(UpdateGraphqlApi2Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates a GraphqlApi object.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.GraphqlApis.UpdateGraphqlApi2(new UpdateGraphqlApi2Request
    {
        ApiId = "some example string",
    });
    // TODO: Handle 'response' of type UpdateGraphqlApiResponse
}
catch (ApiException<UpdateGraphqlApi2Error> ex)
{
    if (ex.Error.TryGetBadRequestException(out var error))
    {
        // TODO: Handle 'error' of type BadRequestException
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[UpdateGraphqlApi2Request](src/AmazonAppSync/Requests/GraphqlApis/UpdateGraphqlApi2Request.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[UpdateGraphqlApiResponse](src/AmazonAppSync/Models/UpdateGraphqlApiResponse.cs)</code>

**OnError**: <code>[ApiException](src/AmazonAppSync/Core/Exceptions/ApiException.cs)&lt;[UpdateGraphqlApi2Error](src/AmazonAppSync/Errors/UpdateGraphqlApi2Error.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Operations

> Source: [Operations](src/AmazonAppSync/Api/Operations.cs)

<details>
<summary><code>Task&lt;AssociateMergedGraphqlApiResponse&gt; AssociateMergedGraphqlApi(AssociateMergedGraphqlApiRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates an association between a Merged API and source API using the source API's identifier.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Operations.AssociateMergedGraphqlApi(new AssociateMergedGraphqlApiRequest
    {
        SourceApiIdentifier = "some example string",
    });
    // TODO: Handle 'response' of type AssociateMergedGraphqlApiResponse
}
catch (ApiException<AssociateMergedGraphqlApiError> ex)
{
    if (ex.Error.TryGetBadRequestException(out var error))
    {
        // TODO: Handle 'error' of type BadRequestException
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[AssociateMergedGraphqlApiRequest](src/AmazonAppSync/Requests/Operations/AssociateMergedGraphqlApiRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[AssociateMergedGraphqlApiResponse](src/AmazonAppSync/Models/AssociateMergedGraphqlApiResponse.cs)</code>

**OnError**: <code>[ApiException](src/AmazonAppSync/Core/Exceptions/ApiException.cs)&lt;[AssociateMergedGraphqlApiError](src/AmazonAppSync/Errors/AssociateMergedGraphqlApiError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;DisassociateMergedGraphqlApiResponse&gt; DisassociateMergedGraphqlApi(DisassociateMergedGraphqlApiRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes an association between a Merged API and source API using the source API's identifier and the association ID.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Operations.DisassociateMergedGraphqlApi(new DisassociateMergedGraphqlApiRequest
    {
        SourceApiIdentifier = "some example string",
        AssociationId = "some example string",
    });
    // TODO: Handle 'response' of type DisassociateMergedGraphqlApiResponse
}
catch (ApiException<DisassociateMergedGraphqlApiError> ex)
{
    if (ex.Error.TryGetBadRequestException(out var error))
    {
        // TODO: Handle 'error' of type BadRequestException
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DisassociateMergedGraphqlApiRequest](src/AmazonAppSync/Requests/Operations/DisassociateMergedGraphqlApiRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[DisassociateMergedGraphqlApiResponse](src/AmazonAppSync/Models/DisassociateMergedGraphqlApiResponse.cs)</code>

**OnError**: <code>[ApiException](src/AmazonAppSync/Core/Exceptions/ApiException.cs)&lt;[DisassociateMergedGraphqlApiError](src/AmazonAppSync/Errors/DisassociateMergedGraphqlApiError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;EvaluateCodeResponse&gt; EvaluateCode(EvaluateCodeRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Evaluates the given code and returns the response. The code definition requirements depend on the specified runtime. For APPSYNC_JS runtimes, the code defines the request and response functions. The request function takes the incoming request after a GraphQL operation is parsed and converts it into a request configuration for the selected data source operation. The response function interprets responses from the data source and maps it to the shape of the GraphQL field output type.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Operations.EvaluateCode(new EvaluateCodeRequest());
    // TODO: Handle 'response' of type EvaluateCodeResponse
}
catch (ApiException<EvaluateCodeError> ex)
{
    if (ex.Error.TryGetBadRequestException(out var error))
    {
        // TODO: Handle 'error' of type BadRequestException
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[EvaluateCodeRequest](src/AmazonAppSync/Requests/Operations/EvaluateCodeRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[EvaluateCodeResponse](src/AmazonAppSync/Models/EvaluateCodeResponse.cs)</code>

**OnError**: <code>[ApiException](src/AmazonAppSync/Core/Exceptions/ApiException.cs)&lt;[EvaluateCodeError](src/AmazonAppSync/Errors/EvaluateCodeError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;object&gt; FlushApiCache(FlushApiCacheRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Flushes an ApiCache object.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Operations.FlushApiCache(new FlushApiCacheRequest { ApiId = "some example string" });
    // TODO: Handle 'response' of type object
}
catch (ApiException<FlushApiCacheError> ex)
{
    if (ex.Error.TryGetBadRequestException(out var error))
    {
        // TODO: Handle 'error' of type BadRequestException
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[FlushApiCacheRequest](src/AmazonAppSync/Requests/Operations/FlushApiCacheRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>object</code>

**OnError**: <code>[ApiException](src/AmazonAppSync/Core/Exceptions/ApiException.cs)&lt;[FlushApiCacheError](src/AmazonAppSync/Errors/FlushApiCacheError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GetGraphqlApiEnvironmentVariablesResponse&gt; GetGraphqlApiEnvironmentVariables(GetGraphqlApiEnvironmentVariablesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves the list of environmental variable key-value pairs associated with an API by its ID value.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Operations.GetGraphqlApiEnvironmentVariables(
        new GetGraphqlApiEnvironmentVariablesRequest { ApiId = "some example string" });
    // TODO: Handle 'response' of type GetGraphqlApiEnvironmentVariablesResponse
}
catch (ApiException<GetGraphqlApiEnvironmentVariablesError> ex)
{
    if (ex.Error.TryGetBadRequestException(out var error))
    {
        // TODO: Handle 'error' of type BadRequestException
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetGraphqlApiEnvironmentVariablesRequest](src/AmazonAppSync/Requests/Operations/GetGraphqlApiEnvironmentVariablesRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GetGraphqlApiEnvironmentVariablesResponse](src/AmazonAppSync/Models/GetGraphqlApiEnvironmentVariablesResponse.cs)</code>

**OnError**: <code>[ApiException](src/AmazonAppSync/Core/Exceptions/ApiException.cs)&lt;[GetGraphqlApiEnvironmentVariablesError](src/AmazonAppSync/Errors/GetGraphqlApiEnvironmentVariablesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GetSchemaCreationStatusResponse&gt; GetSchemaCreationStatus(GetSchemaCreationStatusRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves the current status of a schema creation operation.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Operations.GetSchemaCreationStatus(new GetSchemaCreationStatusRequest
    {
        ApiId = "some example string",
    });
    // TODO: Handle 'response' of type GetSchemaCreationStatusResponse
}
catch (ApiException<GetSchemaCreationStatusError> ex)
{
    if (ex.Error.TryGetBadRequestException(out var error))
    {
        // TODO: Handle 'error' of type BadRequestException
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetSchemaCreationStatusRequest](src/AmazonAppSync/Requests/Operations/GetSchemaCreationStatusRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GetSchemaCreationStatusResponse](src/AmazonAppSync/Models/GetSchemaCreationStatusResponse.cs)</code>

**OnError**: <code>[ApiException](src/AmazonAppSync/Core/Exceptions/ApiException.cs)&lt;[GetSchemaCreationStatusError](src/AmazonAppSync/Errors/GetSchemaCreationStatusError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;PutGraphqlApiEnvironmentVariablesResponse&gt; PutGraphqlApiEnvironmentVariables(PutGraphqlApiEnvironmentVariablesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a list of environmental variables in an API by its ID value. When creating an environmental variable, it must follow the constraints below: Both JavaScript and VTL templates support environmental variables. Environmental variables are not evaluated before function invocation. Environmental variables only support string values. Any defined value in an environmental variable is considered a string literal and not expanded. Variable evaluations should ideally be performed in the function code. When creating an environmental variable key-value pair, it must follow the additional constraints below: Keys must begin with a letter. Keys must be at least two characters long. Keys can only contain letters, numbers, and the underscore character (_). Values can be up to 512 characters long. You can configure up to 50 key-value pairs in a GraphQL API. You can create a list of environmental variables by adding it to the environmentVariables payload as a list in the format {"key1":"value1","key2":"value2", …}. Note that each call of the PutGraphqlApiEnvironmentVariables action will result in the overwriting of the existing environmental variable list of that API. This means the existing e

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Operations.PutGraphqlApiEnvironmentVariables(
        new PutGraphqlApiEnvironmentVariablesRequest { ApiId = "some example string" });
    // TODO: Handle 'response' of type PutGraphqlApiEnvironmentVariablesResponse
}
catch (ApiException<PutGraphqlApiEnvironmentVariablesError> ex)
{
    if (ex.Error.TryGetBadRequestException(out var error))
    {
        // TODO: Handle 'error' of type BadRequestException
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[PutGraphqlApiEnvironmentVariablesRequest](src/AmazonAppSync/Requests/Operations/PutGraphqlApiEnvironmentVariablesRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PutGraphqlApiEnvironmentVariablesResponse](src/AmazonAppSync/Models/PutGraphqlApiEnvironmentVariablesResponse.cs)</code>

**OnError**: <code>[ApiException](src/AmazonAppSync/Core/Exceptions/ApiException.cs)&lt;[PutGraphqlApiEnvironmentVariablesError](src/AmazonAppSync/Errors/PutGraphqlApiEnvironmentVariablesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;StartSchemaCreationResponse&gt; StartSchemaCreation(StartSchemaCreationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Adds a new schema to your GraphQL API. This operation is asynchronous. Use to determine when it has completed.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Operations.StartSchemaCreation(new StartSchemaCreationRequest
    {
        ApiId = "some example string",
    });
    // TODO: Handle 'response' of type StartSchemaCreationResponse
}
catch (ApiException<StartSchemaCreationError> ex)
{
    if (ex.Error.TryGetBadRequestException(out var error))
    {
        // TODO: Handle 'error' of type BadRequestException
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[StartSchemaCreationRequest](src/AmazonAppSync/Requests/Operations/StartSchemaCreationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[StartSchemaCreationResponse](src/AmazonAppSync/Models/StartSchemaCreationResponse.cs)</code>

**OnError**: <code>[ApiException](src/AmazonAppSync/Core/Exceptions/ApiException.cs)&lt;[StartSchemaCreationError](src/AmazonAppSync/Errors/StartSchemaCreationError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;StartSchemaMergeResponse&gt; StartSchemaMerge(StartSchemaMergeRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Initiates a merge operation. Returns a status that shows the result of the merge operation.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Operations.StartSchemaMerge(new StartSchemaMergeRequest
    {
        AssociationId = "some example string",
        MergedApiIdentifier = "some example string",
    });
    // TODO: Handle 'response' of type StartSchemaMergeResponse
}
catch (ApiException<StartSchemaMergeError> ex)
{
    if (ex.Error.TryGetBadRequestException(out var error))
    {
        // TODO: Handle 'error' of type BadRequestException
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[StartSchemaMergeRequest](src/AmazonAppSync/Requests/Operations/StartSchemaMergeRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[StartSchemaMergeResponse](src/AmazonAppSync/Models/StartSchemaMergeResponse.cs)</code>

**OnError**: <code>[ApiException](src/AmazonAppSync/Core/Exceptions/ApiException.cs)&lt;[StartSchemaMergeError](src/AmazonAppSync/Errors/StartSchemaMergeError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Resolvers

> Source: [Resolvers](src/AmazonAppSync/Api/Resolvers.cs)

<details>
<summary><code>Task&lt;CreateResolverResponse&gt; CreateResolver(CreateResolverRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a Resolver object. A resolver converts incoming requests into a format that a data source can understand, and converts the data source's responses into GraphQL.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Resolvers.CreateResolver(new CreateResolverRequest
    {
        ApiId = "some example string",
        TypeName = "some example string",
    });
    // TODO: Handle 'response' of type CreateResolverResponse
}
catch (ApiException<CreateResolverError> ex)
{
    if (ex.Error.TryGetBadRequestException(out var error))
    {
        // TODO: Handle 'error' of type BadRequestException
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CreateResolverRequest](src/AmazonAppSync/Requests/Resolvers/CreateResolverRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CreateResolverResponse](src/AmazonAppSync/Models/CreateResolverResponse.cs)</code>

**OnError**: <code>[ApiException](src/AmazonAppSync/Core/Exceptions/ApiException.cs)&lt;[CreateResolverError](src/AmazonAppSync/Errors/CreateResolverError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;object&gt; DeleteResolver(DeleteResolverRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a Resolver object.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Resolvers.DeleteResolver(new DeleteResolverRequest
    {
        ApiId = "some example string",
        TypeName = "some example string",
        FieldName = "some example string",
    });
    // TODO: Handle 'response' of type object
}
catch (ApiException<DeleteResolverError> ex)
{
    if (ex.Error.TryGetBadRequestException(out var error))
    {
        // TODO: Handle 'error' of type BadRequestException
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DeleteResolverRequest](src/AmazonAppSync/Requests/Resolvers/DeleteResolverRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>object</code>

**OnError**: <code>[ApiException](src/AmazonAppSync/Core/Exceptions/ApiException.cs)&lt;[DeleteResolverError](src/AmazonAppSync/Errors/DeleteResolverError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GetResolverResponse&gt; GetResolver(GetResolverRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves a Resolver object.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Resolvers.GetResolver(new GetResolverRequest
    {
        ApiId = "some example string",
        TypeName = "some example string",
        FieldName = "some example string",
    });
    // TODO: Handle 'response' of type GetResolverResponse
}
catch (ApiException<GetResolverError> ex)
{
    if (ex.Error.TryGetUnauthorizedException(out var error))
    {
        // TODO: Handle 'error' of type UnauthorizedException
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetResolverRequest](src/AmazonAppSync/Requests/Resolvers/GetResolverRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GetResolverResponse](src/AmazonAppSync/Models/GetResolverResponse.cs)</code>

**OnError**: <code>[ApiException](src/AmazonAppSync/Core/Exceptions/ApiException.cs)&lt;[GetResolverError](src/AmazonAppSync/Errors/GetResolverError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ListResolversResponse&gt; ListResolvers(ListResolversRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists the resolvers for a given API and type.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Resolvers.ListResolvers(new ListResolversRequest
    {
        ApiId = "some example string",
        TypeName = "some example string",
    });
    // TODO: Handle 'response' of type ListResolversResponse
}
catch (ApiException<ListResolversError> ex)
{
    if (ex.Error.TryGetBadRequestException(out var error))
    {
        // TODO: Handle 'error' of type BadRequestException
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListResolversRequest](src/AmazonAppSync/Requests/Resolvers/ListResolversRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ListResolversResponse](src/AmazonAppSync/Models/ListResolversResponse.cs)</code>

**OnError**: <code>[ApiException](src/AmazonAppSync/Core/Exceptions/ApiException.cs)&lt;[ListResolversError](src/AmazonAppSync/Errors/ListResolversError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ListResolversByFunctionResponse&gt; ListResolversByFunction(ListResolversByFunctionRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List the resolvers that are associated with a specific function.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Resolvers.ListResolversByFunction(new ListResolversByFunctionRequest
    {
        ApiId = "some example string",
        FunctionId = "some example string",
    });
    // TODO: Handle 'response' of type ListResolversByFunctionResponse
}
catch (ApiException<ListResolversByFunctionError> ex)
{
    if (ex.Error.TryGetBadRequestException(out var error))
    {
        // TODO: Handle 'error' of type BadRequestException
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListResolversByFunctionRequest](src/AmazonAppSync/Requests/Resolvers/ListResolversByFunctionRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ListResolversByFunctionResponse](src/AmazonAppSync/Models/ListResolversByFunctionResponse.cs)</code>

**OnError**: <code>[ApiException](src/AmazonAppSync/Core/Exceptions/ApiException.cs)&lt;[ListResolversByFunctionError](src/AmazonAppSync/Errors/ListResolversByFunctionError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;UpdateResolverResponse&gt; UpdateResolver(UpdateResolverRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates a Resolver object.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Resolvers.UpdateResolver(new UpdateResolverRequest
    {
        ApiId = "some example string",
        TypeName = "some example string",
        FieldName = "some example string",
    });
    // TODO: Handle 'response' of type UpdateResolverResponse
}
catch (ApiException<UpdateResolverError> ex)
{
    if (ex.Error.TryGetBadRequestException(out var error))
    {
        // TODO: Handle 'error' of type BadRequestException
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[UpdateResolverRequest](src/AmazonAppSync/Requests/Resolvers/UpdateResolverRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[UpdateResolverResponse](src/AmazonAppSync/Models/UpdateResolverResponse.cs)</code>

**OnError**: <code>[ApiException](src/AmazonAppSync/Core/Exceptions/ApiException.cs)&lt;[UpdateResolverError](src/AmazonAppSync/Errors/UpdateResolverError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Schema

> Source: [Schema](src/AmazonAppSync/Api/Schema.cs)

<details>
<summary><code>Task&lt;GetIntrospectionSchemaResponse&gt; GetIntrospectionSchema(GetIntrospectionSchemaRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves the introspection schema for a GraphQL API.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Schema.GetIntrospectionSchema(new GetIntrospectionSchemaRequest
    {
        ApiId = "some example string",
        Format = Format.Sdl,
    });
    // TODO: Handle 'response' of type GetIntrospectionSchemaResponse
}
catch (ApiException<GetIntrospectionSchemaError> ex)
{
    if (ex.Error.TryGetGraphQlSchemaException(out var error))
    {
        // TODO: Handle 'error' of type GraphQlSchemaException
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetIntrospectionSchemaRequest](src/AmazonAppSync/Requests/Schema/GetIntrospectionSchemaRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GetIntrospectionSchemaResponse](src/AmazonAppSync/Models/GetIntrospectionSchemaResponse.cs)</code>

**OnError**: <code>[ApiException](src/AmazonAppSync/Core/Exceptions/ApiException.cs)&lt;[GetIntrospectionSchemaError](src/AmazonAppSync/Errors/GetIntrospectionSchemaError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GetSchemaCreationStatusResponse&gt; GetSchemaCreationStatus2(GetSchemaCreationStatus2Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves the current status of a schema creation operation.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Schema.GetSchemaCreationStatus2(new GetSchemaCreationStatus2Request
    {
        ApiId = "some example string",
    });
    // TODO: Handle 'response' of type GetSchemaCreationStatusResponse
}
catch (ApiException<GetSchemaCreationStatus2Error> ex)
{
    if (ex.Error.TryGetBadRequestException(out var error))
    {
        // TODO: Handle 'error' of type BadRequestException
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetSchemaCreationStatus2Request](src/AmazonAppSync/Requests/Schema/GetSchemaCreationStatus2Request.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GetSchemaCreationStatusResponse](src/AmazonAppSync/Models/GetSchemaCreationStatusResponse.cs)</code>

**OnError**: <code>[ApiException](src/AmazonAppSync/Core/Exceptions/ApiException.cs)&lt;[GetSchemaCreationStatus2Error](src/AmazonAppSync/Errors/GetSchemaCreationStatus2Error.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;StartSchemaCreationResponse&gt; StartSchemaCreation2(StartSchemaCreation2Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Adds a new schema to your GraphQL API. This operation is asynchronous. Use to determine when it has completed.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Schema.StartSchemaCreation2(new StartSchemaCreation2Request
    {
        ApiId = "some example string",
    });
    // TODO: Handle 'response' of type StartSchemaCreationResponse
}
catch (ApiException<StartSchemaCreation2Error> ex)
{
    if (ex.Error.TryGetBadRequestException(out var error))
    {
        // TODO: Handle 'error' of type BadRequestException
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[StartSchemaCreation2Request](src/AmazonAppSync/Requests/Schema/StartSchemaCreation2Request.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[StartSchemaCreationResponse](src/AmazonAppSync/Models/StartSchemaCreationResponse.cs)</code>

**OnError**: <code>[ApiException](src/AmazonAppSync/Core/Exceptions/ApiException.cs)&lt;[StartSchemaCreation2Error](src/AmazonAppSync/Errors/StartSchemaCreation2Error.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Sourceapiassociations

> Source: [Sourceapiassociations](src/AmazonAppSync/Api/Sourceapiassociations.cs)

<details>
<summary><code>Task&lt;AssociateSourceGraphqlApiResponse&gt; AssociateSourceGraphqlApi(AssociateSourceGraphqlApiRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates an association between a Merged API and source API using the Merged API's identifier.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Sourceapiassociations.AssociateSourceGraphqlApi(new AssociateSourceGraphqlApiRequest
    {
        MergedApiIdentifier = "some example string",
    });
    // TODO: Handle 'response' of type AssociateSourceGraphqlApiResponse
}
catch (ApiException<AssociateSourceGraphqlApiError> ex)
{
    if (ex.Error.TryGetBadRequestException(out var error))
    {
        // TODO: Handle 'error' of type BadRequestException
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[AssociateSourceGraphqlApiRequest](src/AmazonAppSync/Requests/Sourceapiassociations/AssociateSourceGraphqlApiRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[AssociateSourceGraphqlApiResponse](src/AmazonAppSync/Models/AssociateSourceGraphqlApiResponse.cs)</code>

**OnError**: <code>[ApiException](src/AmazonAppSync/Core/Exceptions/ApiException.cs)&lt;[AssociateSourceGraphqlApiError](src/AmazonAppSync/Errors/AssociateSourceGraphqlApiError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;DisassociateSourceGraphqlApiResponse&gt; DisassociateSourceGraphqlApi(DisassociateSourceGraphqlApiRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes an association between a Merged API and source API using the Merged API's identifier and the association ID.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Sourceapiassociations.DisassociateSourceGraphqlApi(
        new DisassociateSourceGraphqlApiRequest
        {
            MergedApiIdentifier = "some example string",
            AssociationId = "some example string",
        });
    // TODO: Handle 'response' of type DisassociateSourceGraphqlApiResponse
}
catch (ApiException<DisassociateSourceGraphqlApiError> ex)
{
    if (ex.Error.TryGetBadRequestException(out var error))
    {
        // TODO: Handle 'error' of type BadRequestException
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DisassociateSourceGraphqlApiRequest](src/AmazonAppSync/Requests/Sourceapiassociations/DisassociateSourceGraphqlApiRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[DisassociateSourceGraphqlApiResponse](src/AmazonAppSync/Models/DisassociateSourceGraphqlApiResponse.cs)</code>

**OnError**: <code>[ApiException](src/AmazonAppSync/Core/Exceptions/ApiException.cs)&lt;[DisassociateSourceGraphqlApiError](src/AmazonAppSync/Errors/DisassociateSourceGraphqlApiError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GetSourceApiAssociationResponse&gt; GetSourceApiAssociation(GetSourceApiAssociationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves a SourceApiAssociation object.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Sourceapiassociations.GetSourceApiAssociation(new GetSourceApiAssociationRequest
    {
        MergedApiIdentifier = "some example string",
        AssociationId = "some example string",
    });
    // TODO: Handle 'response' of type GetSourceApiAssociationResponse
}
catch (ApiException<GetSourceApiAssociationError> ex)
{
    if (ex.Error.TryGetBadRequestException(out var error))
    {
        // TODO: Handle 'error' of type BadRequestException
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetSourceApiAssociationRequest](src/AmazonAppSync/Requests/Sourceapiassociations/GetSourceApiAssociationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GetSourceApiAssociationResponse](src/AmazonAppSync/Models/GetSourceApiAssociationResponse.cs)</code>

**OnError**: <code>[ApiException](src/AmazonAppSync/Core/Exceptions/ApiException.cs)&lt;[GetSourceApiAssociationError](src/AmazonAppSync/Errors/GetSourceApiAssociationError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ListSourceApiAssociationsResponse&gt; ListSourceApiAssociations(ListSourceApiAssociationsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists the SourceApiAssociationSummary data.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Sourceapiassociations.ListSourceApiAssociations(new ListSourceApiAssociationsRequest
    {
        ApiId = "some example string",
    });
    // TODO: Handle 'response' of type ListSourceApiAssociationsResponse
}
catch (ApiException<ListSourceApiAssociationsError> ex)
{
    if (ex.Error.TryGetBadRequestException(out var error))
    {
        // TODO: Handle 'error' of type BadRequestException
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListSourceApiAssociationsRequest](src/AmazonAppSync/Requests/Sourceapiassociations/ListSourceApiAssociationsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ListSourceApiAssociationsResponse](src/AmazonAppSync/Models/ListSourceApiAssociationsResponse.cs)</code>

**OnError**: <code>[ApiException](src/AmazonAppSync/Core/Exceptions/ApiException.cs)&lt;[ListSourceApiAssociationsError](src/AmazonAppSync/Errors/ListSourceApiAssociationsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;UpdateSourceApiAssociationResponse&gt; UpdateSourceApiAssociation(UpdateSourceApiAssociationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates some of the configuration choices of a particular source API association.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Sourceapiassociations.UpdateSourceApiAssociation(new UpdateSourceApiAssociationRequest
    {
        AssociationId = "some example string",
        MergedApiIdentifier = "some example string",
    });
    // TODO: Handle 'response' of type UpdateSourceApiAssociationResponse
}
catch (ApiException<UpdateSourceApiAssociationError> ex)
{
    if (ex.Error.TryGetBadRequestException(out var error))
    {
        // TODO: Handle 'error' of type BadRequestException
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[UpdateSourceApiAssociationRequest](src/AmazonAppSync/Requests/Sourceapiassociations/UpdateSourceApiAssociationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[UpdateSourceApiAssociationResponse](src/AmazonAppSync/Models/UpdateSourceApiAssociationResponse.cs)</code>

**OnError**: <code>[ApiException](src/AmazonAppSync/Core/Exceptions/ApiException.cs)&lt;[UpdateSourceApiAssociationError](src/AmazonAppSync/Errors/UpdateSourceApiAssociationError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Tags

> Source: [Tags](src/AmazonAppSync/Api/Tags.cs)

<details>
<summary><code>Task&lt;ListTagsForResourceResponse&gt; ListTagsForResource(ListTagsForResourceRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists the tags for a resource.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Tags.ListTagsForResource(new ListTagsForResourceRequest
    {
        ResourceArn = "some example string",
    });
    // TODO: Handle 'response' of type ListTagsForResourceResponse
}
catch (ApiException<ListTagsForResourceError> ex)
{
    if (ex.Error.TryGetBadRequestException(out var error))
    {
        // TODO: Handle 'error' of type BadRequestException
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListTagsForResourceRequest](src/AmazonAppSync/Requests/Tags/ListTagsForResourceRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ListTagsForResourceResponse](src/AmazonAppSync/Models/ListTagsForResourceResponse.cs)</code>

**OnError**: <code>[ApiException](src/AmazonAppSync/Core/Exceptions/ApiException.cs)&lt;[ListTagsForResourceError](src/AmazonAppSync/Errors/ListTagsForResourceError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;object&gt; TagResource(TagResourceRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Tags a resource with user-supplied tags.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Tags.TagResource(new TagResourceRequest { ResourceArn = "some example string" });
    // TODO: Handle 'response' of type object
}
catch (ApiException<TagResourceError> ex)
{
    if (ex.Error.TryGetBadRequestException(out var error))
    {
        // TODO: Handle 'error' of type BadRequestException
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[TagResourceRequest](src/AmazonAppSync/Requests/Tags/TagResourceRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>object</code>

**OnError**: <code>[ApiException](src/AmazonAppSync/Core/Exceptions/ApiException.cs)&lt;[TagResourceError](src/AmazonAppSync/Errors/TagResourceError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;object&gt; UntagResource(UntagResourceRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Untags a resource.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Tags.UntagResource(new UntagResourceRequest
    {
        ResourceArn = "some example string",
        TagKeys = ["some example string"],
    });
    // TODO: Handle 'response' of type object
}
catch (ApiException<UntagResourceError> ex)
{
    if (ex.Error.TryGetBadRequestException(out var error))
    {
        // TODO: Handle 'error' of type BadRequestException
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[UntagResourceRequest](src/AmazonAppSync/Requests/Tags/UntagResourceRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>object</code>

**OnError**: <code>[ApiException](src/AmazonAppSync/Core/Exceptions/ApiException.cs)&lt;[UntagResourceError](src/AmazonAppSync/Errors/UntagResourceError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Types

> Source: [Types](src/AmazonAppSync/Api/Types.cs)

<details>
<summary><code>Task&lt;CreateTypeResponse&gt; CreateType(CreateTypeRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a Type object.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Types.CreateType(new CreateTypeRequest { ApiId = "some example string" });
    // TODO: Handle 'response' of type CreateTypeResponse
}
catch (ApiException<CreateTypeError> ex)
{
    if (ex.Error.TryGetBadRequestException(out var error))
    {
        // TODO: Handle 'error' of type BadRequestException
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CreateTypeRequest](src/AmazonAppSync/Requests/Types/CreateTypeRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CreateTypeResponse](src/AmazonAppSync/Models/CreateTypeResponse.cs)</code>

**OnError**: <code>[ApiException](src/AmazonAppSync/Core/Exceptions/ApiException.cs)&lt;[CreateTypeError](src/AmazonAppSync/Errors/CreateTypeError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;object&gt; DeleteType(DeleteTypeRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a Type object.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Types.DeleteType(new DeleteTypeRequest
    {
        ApiId = "some example string",
        TypeName = "some example string",
    });
    // TODO: Handle 'response' of type object
}
catch (ApiException<DeleteTypeError> ex)
{
    if (ex.Error.TryGetBadRequestException(out var error))
    {
        // TODO: Handle 'error' of type BadRequestException
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DeleteTypeRequest](src/AmazonAppSync/Requests/Types/DeleteTypeRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>object</code>

**OnError**: <code>[ApiException](src/AmazonAppSync/Core/Exceptions/ApiException.cs)&lt;[DeleteTypeError](src/AmazonAppSync/Errors/DeleteTypeError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GetTypeResponse&gt; GetType(GetTypeRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves a Type object.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Types.GetType(new GetTypeRequest
    {
        ApiId = "some example string",
        TypeName = "some example string",
        Format = Format.Sdl,
    });
    // TODO: Handle 'response' of type GetTypeResponse
}
catch (ApiException<GetTypeError> ex)
{
    if (ex.Error.TryGetBadRequestException(out var error))
    {
        // TODO: Handle 'error' of type BadRequestException
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetTypeRequest](src/AmazonAppSync/Requests/Types/GetTypeRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GetTypeResponse](src/AmazonAppSync/Models/GetTypeResponse.cs)</code>

**OnError**: <code>[ApiException](src/AmazonAppSync/Core/Exceptions/ApiException.cs)&lt;[GetTypeError](src/AmazonAppSync/Errors/GetTypeError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ListTypesResponse&gt; ListTypes(ListTypesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists the types for a given API.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Types.ListTypes(new ListTypesRequest
    {
        ApiId = "some example string",
        Format = Format.Sdl,
    });
    // TODO: Handle 'response' of type ListTypesResponse
}
catch (ApiException<ListTypesError> ex)
{
    if (ex.Error.TryGetBadRequestException(out var error))
    {
        // TODO: Handle 'error' of type BadRequestException
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListTypesRequest](src/AmazonAppSync/Requests/Types/ListTypesRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ListTypesResponse](src/AmazonAppSync/Models/ListTypesResponse.cs)</code>

**OnError**: <code>[ApiException](src/AmazonAppSync/Core/Exceptions/ApiException.cs)&lt;[ListTypesError](src/AmazonAppSync/Errors/ListTypesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ListTypesByAssociationResponse&gt; ListTypesByAssociation(ListTypesByAssociationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists Type objects by the source API association ID.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Types.ListTypesByAssociation(new ListTypesByAssociationRequest
    {
        MergedApiIdentifier = "some example string",
        AssociationId = "some example string",
        Format = Format.Sdl,
    });
    // TODO: Handle 'response' of type ListTypesByAssociationResponse
}
catch (ApiException<ListTypesByAssociationError> ex)
{
    if (ex.Error.TryGetBadRequestException(out var error))
    {
        // TODO: Handle 'error' of type BadRequestException
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListTypesByAssociationRequest](src/AmazonAppSync/Requests/Types/ListTypesByAssociationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ListTypesByAssociationResponse](src/AmazonAppSync/Models/ListTypesByAssociationResponse.cs)</code>

**OnError**: <code>[ApiException](src/AmazonAppSync/Core/Exceptions/ApiException.cs)&lt;[ListTypesByAssociationError](src/AmazonAppSync/Errors/ListTypesByAssociationError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;UpdateTypeResponse&gt; UpdateType(UpdateTypeRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates a Type object.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Types.UpdateType(new UpdateTypeRequest
    {
        ApiId = "some example string",
        TypeName = "some example string",
    });
    // TODO: Handle 'response' of type UpdateTypeResponse
}
catch (ApiException<UpdateTypeError> ex)
{
    if (ex.Error.TryGetBadRequestException(out var error))
    {
        // TODO: Handle 'error' of type BadRequestException
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[UpdateTypeRequest](src/AmazonAppSync/Requests/Types/UpdateTypeRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[UpdateTypeResponse](src/AmazonAppSync/Models/UpdateTypeResponse.cs)</code>

**OnError**: <code>[ApiException](src/AmazonAppSync/Core/Exceptions/ApiException.cs)&lt;[UpdateTypeError](src/AmazonAppSync/Errors/UpdateTypeError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

