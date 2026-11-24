# Reference

Every operation below is shown in its throwing form. On an error status it throws `ApiException<TError>` — the status code, headers, content type and the operation's error type, `RawError` (the raw body) when the spec declares none — and where an operation offers an `…AsResult` sibling, that sibling returns `ApiResult<TResponse, TError>` instead. A request that produces no usable response surfaces as `SdkConnectionException` or `SdkTimeoutException`, a body that does not match the documented response type as `ResponseDeserializationException`, and a required credential that is not configured, or one that cannot be applied, as `AuthSchemeException`; all of them derive from `SdkException` and name the failed call. See [README → Error Handling](README.md#error-handling).

> Source: [AmazonFreeRtosClient](src/AmazonFreeRtos/AmazonFreeRtosClient.cs)

## OtaUpdates

> Source: [OtaUpdates](src/AmazonFreeRtos/Api/OtaUpdates.cs)

<details>
<summary><code>Task&lt;OtaUpdate&gt; CreateOtaUpdate(CreateOtaUpdateOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates an AWS IoT OTA update on a target group of devices.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.OtaUpdates.CreateOtaUpdate(new CreateOtaUpdateOperationRequest
    {
        Body = new CreateOtaUpdateRequest
        {
            OtaUpdateId = "some example string",
            Targets = ["some example string"],
            Files = [],
        },
    });
    // TODO: Handle 'response' of type OtaUpdate
}
catch (ApiException<CreateOtaUpdateError> ex)
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

<code>[CreateOtaUpdateOperationRequest](src/AmazonFreeRtos/Requests/OtaUpdates/CreateOtaUpdateOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[OtaUpdate](src/AmazonFreeRtos/Models/OtaUpdate.cs)</code>

**OnError**: <code>[ApiException](src/AmazonFreeRtos/Core/Exceptions/ApiException.cs)&lt;[CreateOtaUpdateError](src/AmazonFreeRtos/Errors/CreateOtaUpdateError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task DeleteOtaUpdate(DeleteOtaUpdateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes an OTA update.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.OtaUpdates.DeleteOtaUpdate(new DeleteOtaUpdateRequest { OtaUpdateId = "some example string" });
}
catch (ApiException<DeleteOtaUpdateError> ex)
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

<code>[DeleteOtaUpdateRequest](src/AmazonFreeRtos/Requests/OtaUpdates/DeleteOtaUpdateRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AmazonFreeRtos/Core/Exceptions/ApiException.cs)&lt;[DeleteOtaUpdateError](src/AmazonFreeRtos/Errors/DeleteOtaUpdateError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;OtaUpdateInfo&gt; GetOtaUpdate(GetOtaUpdateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets an OTA update.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.OtaUpdates.GetOtaUpdate(new GetOtaUpdateRequest
    {
        OtaUpdateId = "some example string",
    });
    // TODO: Handle 'response' of type OtaUpdateInfo
}
catch (ApiException<GetOtaUpdateError> ex)
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

<code>[GetOtaUpdateRequest](src/AmazonFreeRtos/Requests/OtaUpdates/GetOtaUpdateRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[OtaUpdateInfo](src/AmazonFreeRtos/Models/OtaUpdateInfo.cs)</code>

**OnError**: <code>[ApiException](src/AmazonFreeRtos/Core/Exceptions/ApiException.cs)&lt;[GetOtaUpdateError](src/AmazonFreeRtos/Errors/GetOtaUpdateError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;OtaUpdatesResponse&gt; ListOtaUpdates(ListOtaUpdatesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists OTA updates.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.OtaUpdates.ListOtaUpdates(new ListOtaUpdatesRequest());
    // TODO: Handle 'response' of type OtaUpdatesResponse
}
catch (ApiException<ListOtaUpdatesError> ex)
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

<code>[ListOtaUpdatesRequest](src/AmazonFreeRtos/Requests/OtaUpdates/ListOtaUpdatesRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[OtaUpdatesResponse](src/AmazonFreeRtos/Models/OtaUpdatesResponse.cs)</code>

**OnError**: <code>[ApiException](src/AmazonFreeRtos/Core/Exceptions/ApiException.cs)&lt;[ListOtaUpdatesError](src/AmazonFreeRtos/Errors/ListOtaUpdatesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## SoftwareConfigurations

> Source: [SoftwareConfigurations](src/AmazonFreeRtos/Api/SoftwareConfigurations.cs)

<details>
<summary><code>Task&lt;SoftwareConfiguration&gt; CreateSoftwareConfiguration(CreateSoftwareConfigurationOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a FreeRTOS software configuration record specifying the libraries and settings for a target hardware platform.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.SoftwareConfigurations.CreateSoftwareConfiguration(
        new CreateSoftwareConfigurationOperationRequest
        {
            Body = new CreateSoftwareConfigurationRequest
            {
                Name = "some example string",
                HardwarePlatform = "some example string",
            },
        });
    // TODO: Handle 'response' of type SoftwareConfiguration
}
catch (ApiException<CreateSoftwareConfigurationError> ex)
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

<code>[CreateSoftwareConfigurationOperationRequest](src/AmazonFreeRtos/Requests/SoftwareConfigurations/CreateSoftwareConfigurationOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SoftwareConfiguration](src/AmazonFreeRtos/Models/SoftwareConfiguration.cs)</code>

**OnError**: <code>[ApiException](src/AmazonFreeRtos/Core/Exceptions/ApiException.cs)&lt;[CreateSoftwareConfigurationError](src/AmazonFreeRtos/Errors/CreateSoftwareConfigurationError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task DeleteSoftwareConfiguration(DeleteSoftwareConfigurationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a FreeRTOS software configuration record.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.SoftwareConfigurations.DeleteSoftwareConfiguration(new DeleteSoftwareConfigurationRequest
    {
        ConfigId = "some example string",
    });
}
catch (ApiException<DeleteSoftwareConfigurationError> ex)
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

<code>[DeleteSoftwareConfigurationRequest](src/AmazonFreeRtos/Requests/SoftwareConfigurations/DeleteSoftwareConfigurationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AmazonFreeRtos/Core/Exceptions/ApiException.cs)&lt;[DeleteSoftwareConfigurationError](src/AmazonFreeRtos/Errors/DeleteSoftwareConfigurationError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;SoftwareConfiguration&gt; DescribeSoftwareConfiguration(DescribeSoftwareConfigurationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets a FreeRTOS software configuration record.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.SoftwareConfigurations.DescribeSoftwareConfiguration(
        new DescribeSoftwareConfigurationRequest { ConfigId = "some example string" });
    // TODO: Handle 'response' of type SoftwareConfiguration
}
catch (ApiException<DescribeSoftwareConfigurationError> ex)
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

<code>[DescribeSoftwareConfigurationRequest](src/AmazonFreeRtos/Requests/SoftwareConfigurations/DescribeSoftwareConfigurationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SoftwareConfiguration](src/AmazonFreeRtos/Models/SoftwareConfiguration.cs)</code>

**OnError**: <code>[ApiException](src/AmazonFreeRtos/Core/Exceptions/ApiException.cs)&lt;[DescribeSoftwareConfigurationError](src/AmazonFreeRtos/Errors/DescribeSoftwareConfigurationError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;SoftwareConfigurationRecordsResponse&gt; ListSoftwareConfigurations(ListSoftwareConfigurationsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists FreeRTOS software configuration records.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.SoftwareConfigurations.ListSoftwareConfigurations(
        new ListSoftwareConfigurationsRequest());
    // TODO: Handle 'response' of type SoftwareConfigurationRecordsResponse
}
catch (ApiException<ListSoftwareConfigurationsError> ex)
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

<code>[ListSoftwareConfigurationsRequest](src/AmazonFreeRtos/Requests/SoftwareConfigurations/ListSoftwareConfigurationsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SoftwareConfigurationRecordsResponse](src/AmazonFreeRtos/Models/SoftwareConfigurationRecordsResponse.cs)</code>

**OnError**: <code>[ApiException](src/AmazonFreeRtos/Core/Exceptions/ApiException.cs)&lt;[ListSoftwareConfigurationsError](src/AmazonFreeRtos/Errors/ListSoftwareConfigurationsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;SoftwareConfiguration&gt; UpdateSoftwareConfiguration(UpdateSoftwareConfigurationOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates a FreeRTOS software configuration record.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.SoftwareConfigurations.UpdateSoftwareConfiguration(
        new UpdateSoftwareConfigurationOperationRequest
        {
            ConfigId = "some example string",
            Body = new UpdateSoftwareConfigurationRequest(),
        });
    // TODO: Handle 'response' of type SoftwareConfiguration
}
catch (ApiException<UpdateSoftwareConfigurationError> ex)
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

<code>[UpdateSoftwareConfigurationOperationRequest](src/AmazonFreeRtos/Requests/SoftwareConfigurations/UpdateSoftwareConfigurationOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SoftwareConfiguration](src/AmazonFreeRtos/Models/SoftwareConfiguration.cs)</code>

**OnError**: <code>[ApiException](src/AmazonFreeRtos/Core/Exceptions/ApiException.cs)&lt;[UpdateSoftwareConfigurationError](src/AmazonFreeRtos/Errors/UpdateSoftwareConfigurationError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Tags

> Source: [Tags](src/AmazonFreeRtos/Api/Tags.cs)

<details>
<summary><code>Task&lt;TagsResponse&gt; ListTagsForResource(ListTagsForResourceRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists the tags (metadata) you have assigned to the resource.

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
    // TODO: Handle 'response' of type TagsResponse
}
catch (ApiException<ListTagsForResourceError> ex)
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

<code>[ListTagsForResourceRequest](src/AmazonFreeRtos/Requests/Tags/ListTagsForResourceRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[TagsResponse](src/AmazonFreeRtos/Models/TagsResponse.cs)</code>

**OnError**: <code>[ApiException](src/AmazonFreeRtos/Core/Exceptions/ApiException.cs)&lt;[ListTagsForResourceError](src/AmazonFreeRtos/Errors/ListTagsForResourceError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task TagResource(TagResourceRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Adds to or modifies the tags of the given resource.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.Tags.TagResource(new TagResourceRequest
    {
        ResourceArn = "some example string",
        Body = new TagsRequest { Tags = new Dictionary<string, string> { ["key"] = "some example string" } },
    });
}
catch (ApiException<TagResourceError> ex)
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

<code>[TagResourceRequest](src/AmazonFreeRtos/Requests/Tags/TagResourceRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AmazonFreeRtos/Core/Exceptions/ApiException.cs)&lt;[TagResourceError](src/AmazonFreeRtos/Errors/TagResourceError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

