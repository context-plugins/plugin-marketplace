# Reference

Every operation below is shown in its throwing form. On an error status it throws `ApiException<TError>` — the status code, headers, content type and the operation's error type, `RawError` (the raw body) when the spec declares none — and where an operation offers an `…AsResult` sibling, that sibling returns `ApiResult<TResponse, TError>` instead. A request that produces no usable response surfaces as `SdkConnectionException` or `SdkTimeoutException`, a body that does not match the documented response type as `ResponseDeserializationException`, and a required credential that is not configured, or one that cannot be applied, as `AuthSchemeException`; all of them derive from `SdkException` and name the failed call. See [README → Error Handling](README.md#error-handling).

> Source: [AtlassianCompassClient](src/AtlassianCompass/AtlassianCompassClient.cs)

## Events

> Source: [Events](src/AtlassianCompass/Api/Events.cs)

<details>
<summary><code>Task CreateCompassEvent(CreateCompassEventRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Sends an event into an event source. This API is rate limited. Only 100 requests per user per minute are allowed.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.Events.CreateCompassEvent(new CreateCompassEventRequest
    {
        Body = new CreateStreamlinedEventRequest
        {
            CloudId = "some example string",
            Event = new CompassEventInputDto(),
        },
    });
}
catch (ApiException<CreateCompassEventError> ex)
{
    if (ex.Error.TryGetErrorResponseDto(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseDto
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CreateCompassEventRequest](src/AtlassianCompass/Requests/Events/CreateCompassEventRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AtlassianCompass/Core/Exceptions/ApiException.cs)&lt;[CreateCompassEventError](src/AtlassianCompass/Errors/CreateCompassEventError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Metrics

> Source: [Metrics](src/AtlassianCompass/Api/Metrics.cs)

<details>
<summary><code>Task&lt;InsertMetricResponseDto&gt; InsertMetricValue(InsertMetricValueRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Sends a metric value into a metric source for a component. This API is rate limited. Only 100 requests per user per minute are allowed.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Metrics.InsertMetricValue(new InsertMetricValueRequest
    {
        Body = new InsertMetricByMetricDefinitionRequestDto
        {
            Value = 1.5d,
            MetricDefinitionId = "some example string",
            ComponentId = "some example string",
        },
    });
    // TODO: Handle 'response' of type InsertMetricResponseDto
}
catch (ApiException<InsertMetricValueError> ex)
{
    if (ex.Error.TryGetErrorResponseDto(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseDto
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[InsertMetricValueRequest](src/AtlassianCompass/Requests/Metrics/InsertMetricValueRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[InsertMetricResponseDto](src/AtlassianCompass/Models/InsertMetricResponseDto.cs)</code>

**OnError**: <code>[ApiException](src/AtlassianCompass/Core/Exceptions/ApiException.cs)&lt;[InsertMetricValueError](src/AtlassianCompass/Errors/InsertMetricValueError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## PackageDependencies

> Source: [PackageDependencies](src/AtlassianCompass/Api/PackageDependencies.cs)

<details>
<summary><code>Task DeleteLockFile(DeleteLockFileRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete all the package dependencies associated with a particular source.The `sourceId` parameter needs to be Base64 encoded.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.PackageDependencies.DeleteLockFile(new DeleteLockFileRequest
    {
        ComponentId = "some example string",
        SourceId = "some example string",
    });
}
catch (ApiException<DeleteLockFileError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DeleteLockFileRequest](src/AtlassianCompass/Requests/PackageDependencies/DeleteLockFileRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AtlassianCompass/Core/Exceptions/ApiException.cs)&lt;[DeleteLockFileError](src/AtlassianCompass/Errors/DeleteLockFileError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task UploadLockFile(UploadLockFileRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Upload package dependencies for a component.

The file with package dependency information. Currently, we only accept package-lock.json files that are below 2MB. \
\
The baseSourceUrl should be a url link to your lock file, ideally with "#lines-" appended at the end, if from Bitbucket, or "#L" appended if a GitHub link. This will let link to specific lines in your lock file where dependencies were found. \
\
The sourceId should be a string that uniquely identifies the given lock file. We recommend using the filepath to the lock file, with the "/" characters replaced with "_" characters.

Example: This curl command uploads a lock file to populate package dependencies for the component.
```bash
curl --request PUT \
--url 'https://your-domain.atlassian.net/gateway/api/compass/v1/package_dependencies/lock_file' \
--user 'email@example.com:' \
--header 'Content-Type: multipart/form-data' \
--form file=@/path/to/file/package-lock.json;type=application/json
--form componentId=
--form baseSourceUrl=
--form sourceId=
```

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.PackageDependencies.UploadLockFile(new UploadLockFileRequest
    {
        SourceId = "some example string",
        BaseSourceUrl = "some example string",
        ComponentId = "some example string",
        File = Array.Empty<byte>(),
    });
}
catch (ApiException<UploadLockFileError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[UploadLockFileRequest](src/AtlassianCompass/Requests/PackageDependencies/UploadLockFileRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AtlassianCompass/Core/Exceptions/ApiException.cs)&lt;[UploadLockFileError](src/AtlassianCompass/Errors/UploadLockFileError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## AttachmentRestController

> Source: [AttachmentRestController](src/AtlassianCompass/Api/AttachmentRestController.cs)

<details>
<summary><code>Task&lt;string&gt; DeleteApiSpec(DeleteApiSpecRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete the API spec file for a component.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.AttachmentRestController.DeleteApiSpec(new DeleteApiSpecRequest
    {
        ComponentId = Guid.Parse("00000000-0000-0000-0000-000000000000"),
    });
    // TODO: Handle 'response' of type string
}
catch (ApiException<DeleteApiSpecError> ex)
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

<code>[DeleteApiSpecRequest](src/AtlassianCompass/Requests/AttachmentRestController/DeleteApiSpecRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>string</code>

**OnError**: <code>[ApiException](src/AtlassianCompass/Core/Exceptions/ApiException.cs)&lt;[DeleteApiSpecError](src/AtlassianCompass/Errors/DeleteApiSpecError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task DeleteAttachment(DeleteAttachmentRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete file attached to a component. If you need to have attachment upload enabled for your Compass Forge app, contact Atlassian support.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.AttachmentRestController.DeleteAttachment(new DeleteAttachmentRequest
    {
        ComponentId = Guid.Parse("00000000-0000-0000-0000-000000000000"),
        ForgeAppId = "some example string",
        Key = "some example string",
    });
}
catch (ApiException<DeleteAttachmentError> ex)
{
    if (ex.Error.TryGetErrorResponseDto(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseDto
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DeleteAttachmentRequest](src/AtlassianCompass/Requests/AttachmentRestController/DeleteAttachmentRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AtlassianCompass/Core/Exceptions/ApiException.cs)&lt;[DeleteAttachmentError](src/AtlassianCompass/Errors/DeleteAttachmentError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Attachment&gt; GetAttachment(GetAttachmentRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a file attached to a component. If you need to have attachment upload enabled for your Compass Forge app, contact Atlassian support.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.AttachmentRestController.GetAttachment(new GetAttachmentRequest
    {
        ComponentId = Guid.Parse("00000000-0000-0000-0000-000000000000"),
        ForgeAppId = "some example string",
        Key = "some example string",
    });
    // TODO: Handle 'response' of type Attachment
}
catch (ApiException<GetAttachmentError> ex)
{
    if (ex.Error.TryGetErrorResponseDto(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseDto
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetAttachmentRequest](src/AtlassianCompass/Requests/AttachmentRestController/GetAttachmentRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Attachment](src/AtlassianCompass/Models/Attachment.cs)</code>

**OnError**: <code>[ApiException](src/AtlassianCompass/Core/Exceptions/ApiException.cs)&lt;[GetAttachmentError](src/AtlassianCompass/Errors/GetAttachmentError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;string&gt; UploadApiSpec(UploadApiSpecRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Upload api specs for a component.

The request body should be a file with the api-spec content.

Example: This curl command uploads a spec file (swagger.yaml) for the component.
```bash
curl --request PUT \
--url 'https://your-domain.atlassian.net/gateway/api/compass/v1/component/{componentId}/api_specs' \
--user 'email@example.com:' \
--header 'Content-Type: multipart/form-data' \
--form file=@/path/to/file/swagger.yaml
```

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.AttachmentRestController.UploadApiSpec(new UploadApiSpecRequest
    {
        ComponentId = Guid.Parse("00000000-0000-0000-0000-000000000000"),
        File = Array.Empty<byte>(),
    });
    // TODO: Handle 'response' of type string
}
catch (ApiException<UploadApiSpecError> ex)
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

<code>[UploadApiSpecRequest](src/AtlassianCompass/Requests/AttachmentRestController/UploadApiSpecRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>string</code>

**OnError**: <code>[ApiException](src/AtlassianCompass/Core/Exceptions/ApiException.cs)&lt;[UploadApiSpecError](src/AtlassianCompass/Errors/UploadApiSpecError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Attachment&gt; UploadAttachment(UploadAttachmentRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Attach a file to a component. If you need to have attachment upload enabled for your Compass Forge app, contact Atlassian support.

The request body should be a file.

Example: This curl command attaches a file to a component.
```bash
curl --request PUT \
--url 'https://your-domain.atlassian.net/gateway/api/compass/v1/component/{componentId}/app/{forgeAppId}/attachment/{key}' \
--user 'email@example.com:' \
--header 'Content-Type: multipart/form-data' \
--form file=@/path/to/attachment.txt
```

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.AttachmentRestController.UploadAttachment(new UploadAttachmentRequest
    {
        ComponentId = Guid.Parse("00000000-0000-0000-0000-000000000000"),
        ForgeAppId = "some example string",
        Key = "some example string",
        File = Array.Empty<byte>(),
    });
    // TODO: Handle 'response' of type Attachment
}
catch (ApiException<UploadAttachmentError> ex)
{
    if (ex.Error.TryGetErrorResponseDto(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseDto
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[UploadAttachmentRequest](src/AtlassianCompass/Requests/AttachmentRestController/UploadAttachmentRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Attachment](src/AtlassianCompass/Models/Attachment.cs)</code>

**OnError**: <code>[ApiException](src/AtlassianCompass/Core/Exceptions/ApiException.cs)&lt;[UploadAttachmentError](src/AtlassianCompass/Errors/UploadAttachmentError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## EntitlementRestController

> Source: [EntitlementRestController](src/AtlassianCompass/Api/EntitlementRestController.cs)

<details>
<summary><code>Task&lt;EntitlementResponseDto&gt; EvaluateEntitlements(EvaluateEntitlementsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get entitlement results for a given user and site

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.EntitlementRestController.EvaluateEntitlements(new EvaluateEntitlementsRequest
    {
        Body = new EntitlementRequestDto { Entitlements = ["some example string"] },
    });
    // TODO: Handle 'response' of type EntitlementResponseDto
}
catch (ApiException<EvaluateEntitlementsError> ex)
{
    if (ex.Error.TryGetErrorResponseDto(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseDto
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[EvaluateEntitlementsRequest](src/AtlassianCompass/Requests/EntitlementRestController/EvaluateEntitlementsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[EntitlementResponseDto](src/AtlassianCompass/Models/EntitlementResponseDto.cs)</code>

**OnError**: <code>[ApiException](src/AtlassianCompass/Core/Exceptions/ApiException.cs)&lt;[EvaluateEntitlementsError](src/AtlassianCompass/Errors/EvaluateEntitlementsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## IncomingWebhooksRestController

> Source: [IncomingWebhooksRestController](src/AtlassianCompass/Api/IncomingWebhooksRestController.cs)

<details>
<summary><code>Task HandleWebhookInvocation(HandleWebhookInvocationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Third parties can call these inbound webhooks to dothings within compass, like create deployment events for webhooks coming from github

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.IncomingWebhooksRestController.HandleWebhookInvocation(new HandleWebhookInvocationRequest
    {
        WebhookId = "some example string",
        Body = "some example string",
    });
}
catch (ApiException<HandleWebhookInvocationError> ex)
{
    if (ex.Error.TryGetErrorResponseDto(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseDto
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[HandleWebhookInvocationRequest](src/AtlassianCompass/Requests/IncomingWebhooksRestController/HandleWebhookInvocationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AtlassianCompass/Core/Exceptions/ApiException.cs)&lt;[HandleWebhookInvocationError](src/AtlassianCompass/Errors/HandleWebhookInvocationError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

