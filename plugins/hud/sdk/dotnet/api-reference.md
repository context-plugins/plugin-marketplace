# Reference

Every operation below is shown in its throwing form. On an error status it throws `ApiException<TError>` — the status code, headers, content type and the operation's error type, `RawError` (the raw body) when the spec declares none — and where an operation offers an `…AsResult` sibling, that sibling returns `ApiResult<TResponse, TError>` instead. A request that produces no usable response surfaces as `SdkConnectionException` or `SdkTimeoutException`, a body that does not match the documented response type as `ResponseDeserializationException`, and a required credential that is not configured, or one that cannot be applied, as `AuthSchemeException`; all of them derive from `SdkException` and name the failed call. See [README → Error Handling](README.md#error-handling).

> Source: [HudClient](src/Hud/HudClient.cs)

## Builds

> Source: [Builds](src/Hud/Api/Builds.cs)

<details>
<summary><code>Task&lt;BuildResponse&gt; BuildStatusV2BuildsBuildIdStatusGet(BuildStatusV2BuildsBuildIdStatusGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a build's current status and details.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Builds.BuildStatusV2BuildsBuildIdStatusGet(
        new BuildStatusV2BuildsBuildIdStatusGetRequest
        {
            BuildId = Guid.Parse("00000000-0000-0000-0000-000000000000"),
        });
    // TODO: Handle 'response' of type BuildResponse
}
catch (ApiException<BuildStatusV2BuildsBuildIdStatusGetError> ex)
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

<code>[BuildStatusV2BuildsBuildIdStatusGetRequest](src/Hud/Requests/Builds/BuildStatusV2BuildsBuildIdStatusGetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[BuildResponse](src/Hud/Models/BuildResponse.cs)</code>

**OnError**: <code>[ApiException](src/Hud/Core/Exceptions/ApiException.cs)&lt;[BuildStatusV2BuildsBuildIdStatusGetError](src/Hud/Errors/BuildStatusV2BuildsBuildIdStatusGetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;BuildResponse&gt; CancelBuildV2BuildsBuildIdCancelPost(CancelBuildV2BuildsBuildIdCancelPostRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Cancel an in-progress build.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Builds.CancelBuildV2BuildsBuildIdCancelPost(
        new CancelBuildV2BuildsBuildIdCancelPostRequest
        {
            BuildId = Guid.Parse("00000000-0000-0000-0000-000000000000"),
        });
    // TODO: Handle 'response' of type BuildResponse
}
catch (ApiException<CancelBuildV2BuildsBuildIdCancelPostError> ex)
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

<code>[CancelBuildV2BuildsBuildIdCancelPostRequest](src/Hud/Requests/Builds/CancelBuildV2BuildsBuildIdCancelPostRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[BuildResponse](src/Hud/Models/BuildResponse.cs)</code>

**OnError**: <code>[ApiException](src/Hud/Core/Exceptions/ApiException.cs)&lt;[CancelBuildV2BuildsBuildIdCancelPostError](src/Hud/Errors/CancelBuildV2BuildsBuildIdCancelPostError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;BuildSourceDownloadResponse&gt; DownloadBuildSourceV2BuildsBuildIdSourceDownloadGet(DownloadBuildSourceV2BuildsBuildIdSourceDownloadGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a short-lived presigned download URL for a file in a build's source tree.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Builds.DownloadBuildSourceV2BuildsBuildIdSourceDownloadGet(
        new DownloadBuildSourceV2BuildsBuildIdSourceDownloadGetRequest
        {
            BuildId = Guid.Parse("00000000-0000-0000-0000-000000000000"),
            Path = "some example string",
        });
    // TODO: Handle 'response' of type BuildSourceDownloadResponse
}
catch (ApiException<DownloadBuildSourceV2BuildsBuildIdSourceDownloadGetError> ex)
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

<code>[DownloadBuildSourceV2BuildsBuildIdSourceDownloadGetRequest](src/Hud/Requests/Builds/DownloadBuildSourceV2BuildsBuildIdSourceDownloadGetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[BuildSourceDownloadResponse](src/Hud/Models/BuildSourceDownloadResponse.cs)</code>

**OnError**: <code>[ApiException](src/Hud/Core/Exceptions/ApiException.cs)&lt;[DownloadBuildSourceV2BuildsBuildIdSourceDownloadGetError](src/Hud/Errors/DownloadBuildSourceV2BuildsBuildIdSourceDownloadGetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;object&gt; DownloadBuildWorkspaceV2BuildsBuildIdWorkspaceDownloadGet(DownloadBuildWorkspaceV2BuildsBuildIdWorkspaceDownloadGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Stream a build's captured workspace as a zip archive.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Builds.DownloadBuildWorkspaceV2BuildsBuildIdWorkspaceDownloadGet(
        new DownloadBuildWorkspaceV2BuildsBuildIdWorkspaceDownloadGetRequest
        {
            BuildId = Guid.Parse("00000000-0000-0000-0000-000000000000"),
        });
    // TODO: Handle 'response' of type object
}
catch (ApiException<DownloadBuildWorkspaceV2BuildsBuildIdWorkspaceDownloadGetError> ex)
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

<code>[DownloadBuildWorkspaceV2BuildsBuildIdWorkspaceDownloadGetRequest](src/Hud/Requests/Builds/DownloadBuildWorkspaceV2BuildsBuildIdWorkspaceDownloadGetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>object</code>

**OnError**: <code>[ApiException](src/Hud/Core/Exceptions/ApiException.cs)&lt;[DownloadBuildWorkspaceV2BuildsBuildIdWorkspaceDownloadGetError](src/Hud/Errors/DownloadBuildWorkspaceV2BuildsBuildIdWorkspaceDownloadGetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;BuildSourceListResponse&gt; ListBuildSourceV2BuildsBuildIdSourceGet(ListBuildSourceV2BuildsBuildIdSourceGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List files and directories at a path in a build's expanded source tree.

Readers outside the owning team see only the latest build of a public environment
whose owner published its source.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Builds.ListBuildSourceV2BuildsBuildIdSourceGet(
        new ListBuildSourceV2BuildsBuildIdSourceGetRequest
        {
            BuildId = Guid.Parse("00000000-0000-0000-0000-000000000000"),
        });
    // TODO: Handle 'response' of type BuildSourceListResponse
}
catch (ApiException<ListBuildSourceV2BuildsBuildIdSourceGetError> ex)
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

<code>[ListBuildSourceV2BuildsBuildIdSourceGetRequest](src/Hud/Requests/Builds/ListBuildSourceV2BuildsBuildIdSourceGetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[BuildSourceListResponse](src/Hud/Models/BuildSourceListResponse.cs)</code>

**OnError**: <code>[ApiException](src/Hud/Core/Exceptions/ApiException.cs)&lt;[ListBuildSourceV2BuildsBuildIdSourceGetError](src/Hud/Errors/ListBuildSourceV2BuildsBuildIdSourceGetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;BuildWorkspaceListResponse&gt; ListBuildWorkspaceV2BuildsBuildIdWorkspaceGet(ListBuildWorkspaceV2BuildsBuildIdWorkspaceGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List files and directories at a path in a build's captured workspace.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Builds.ListBuildWorkspaceV2BuildsBuildIdWorkspaceGet(
        new ListBuildWorkspaceV2BuildsBuildIdWorkspaceGetRequest
        {
            BuildId = Guid.Parse("00000000-0000-0000-0000-000000000000"),
        });
    // TODO: Handle 'response' of type BuildWorkspaceListResponse
}
catch (ApiException<ListBuildWorkspaceV2BuildsBuildIdWorkspaceGetError> ex)
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

<code>[ListBuildWorkspaceV2BuildsBuildIdWorkspaceGetRequest](src/Hud/Requests/Builds/ListBuildWorkspaceV2BuildsBuildIdWorkspaceGetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[BuildWorkspaceListResponse](src/Hud/Models/BuildWorkspaceListResponse.cs)</code>

**OnError**: <code>[ApiException](src/Hud/Core/Exceptions/ApiException.cs)&lt;[ListBuildWorkspaceV2BuildsBuildIdWorkspaceGetError](src/Hud/Errors/ListBuildWorkspaceV2BuildsBuildIdWorkspaceGetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;BuildListResponse&gt; ListBuildsV2BuildsGet(ListBuildsV2BuildsGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List builds for an environment registry, newest first.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Builds.ListBuildsV2BuildsGet(new ListBuildsV2BuildsGetRequest
    {
        RegistryId = Guid.Parse("00000000-0000-0000-0000-000000000000"),
    });
    // TODO: Handle 'response' of type BuildListResponse
}
catch (ApiException<ListBuildsV2BuildsGetError> ex)
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

<code>[ListBuildsV2BuildsGetRequest](src/Hud/Requests/Builds/ListBuildsV2BuildsGetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[BuildListResponse](src/Hud/Models/BuildListResponse.cs)</code>

**OnError**: <code>[ApiException](src/Hud/Core/Exceptions/ApiException.cs)&lt;[ListBuildsV2BuildsGetError](src/Hud/Errors/ListBuildsV2BuildsGetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;BuildLookupResponse&gt; LookupBuildsV2BuildsLookupPost(LookupBuildsV2BuildsLookupPostRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Find the team's builds whose source has one of the given content digests.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Builds.LookupBuildsV2BuildsLookupPost(new LookupBuildsV2BuildsLookupPostRequest
    {
        Body = new BuildLookupRequest { ContentDigests = ["some example string"] },
    });
    // TODO: Handle 'response' of type BuildLookupResponse
}
catch (ApiException<LookupBuildsV2BuildsLookupPostError> ex)
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

<code>[LookupBuildsV2BuildsLookupPostRequest](src/Hud/Requests/Builds/LookupBuildsV2BuildsLookupPostRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[BuildLookupResponse](src/Hud/Models/BuildLookupResponse.cs)</code>

**OnError**: <code>[ApiException](src/Hud/Core/Exceptions/ApiException.cs)&lt;[LookupBuildsV2BuildsLookupPostError](src/Hud/Errors/LookupBuildsV2BuildsLookupPostError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;BuildSourcePreviewResponse&gt; PreviewBuildSourceV2BuildsBuildIdSourcePreviewGet(PreviewBuildSourceV2BuildsBuildIdSourcePreviewGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Return the text content of a file in a build's source tree (1 MiB cap, text only).

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Builds.PreviewBuildSourceV2BuildsBuildIdSourcePreviewGet(
        new PreviewBuildSourceV2BuildsBuildIdSourcePreviewGetRequest
        {
            BuildId = Guid.Parse("00000000-0000-0000-0000-000000000000"),
            Path = "some example string",
        });
    // TODO: Handle 'response' of type BuildSourcePreviewResponse
}
catch (ApiException<PreviewBuildSourceV2BuildsBuildIdSourcePreviewGetError> ex)
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

<code>[PreviewBuildSourceV2BuildsBuildIdSourcePreviewGetRequest](src/Hud/Requests/Builds/PreviewBuildSourceV2BuildsBuildIdSourcePreviewGetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[BuildSourcePreviewResponse](src/Hud/Models/BuildSourcePreviewResponse.cs)</code>

**OnError**: <code>[ApiException](src/Hud/Core/Exceptions/ApiException.cs)&lt;[PreviewBuildSourceV2BuildsBuildIdSourcePreviewGetError](src/Hud/Errors/PreviewBuildSourceV2BuildsBuildIdSourcePreviewGetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;BuildSourcePreviewResponse&gt; PreviewBuildWorkspaceV2BuildsBuildIdWorkspacePreviewGet(PreviewBuildWorkspaceV2BuildsBuildIdWorkspacePreviewGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Return the text content of a captured workspace file (1 MiB cap, text only).

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Builds.PreviewBuildWorkspaceV2BuildsBuildIdWorkspacePreviewGet(
        new PreviewBuildWorkspaceV2BuildsBuildIdWorkspacePreviewGetRequest
        {
            BuildId = Guid.Parse("00000000-0000-0000-0000-000000000000"),
            Path = "some example string",
        });
    // TODO: Handle 'response' of type BuildSourcePreviewResponse
}
catch (ApiException<PreviewBuildWorkspaceV2BuildsBuildIdWorkspacePreviewGetError> ex)
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

<code>[PreviewBuildWorkspaceV2BuildsBuildIdWorkspacePreviewGetRequest](src/Hud/Requests/Builds/PreviewBuildWorkspaceV2BuildsBuildIdWorkspacePreviewGetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[BuildSourcePreviewResponse](src/Hud/Models/BuildSourcePreviewResponse.cs)</code>

**OnError**: <code>[ApiException](src/Hud/Core/Exceptions/ApiException.cs)&lt;[PreviewBuildWorkspaceV2BuildsBuildIdWorkspacePreviewGetError](src/Hud/Errors/PreviewBuildWorkspaceV2BuildsBuildIdWorkspacePreviewGetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;BuildRegisterResponse&gt; RegisterBuildSourceV2BuildsRegisterPost(RegisterBuildSourceV2BuildsRegisterPostRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Record an uploaded build context as an unbuilt build of an environment.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Builds.RegisterBuildSourceV2BuildsRegisterPost(
        new RegisterBuildSourceV2BuildsRegisterPostRequest
        {
            Body = new BuildRegisterRequest { BuildId = Guid.Parse("00000000-0000-0000-0000-000000000000") },
        });
    // TODO: Handle 'response' of type BuildRegisterResponse
}
catch (ApiException<RegisterBuildSourceV2BuildsRegisterPostError> ex)
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

<code>[RegisterBuildSourceV2BuildsRegisterPostRequest](src/Hud/Requests/Builds/RegisterBuildSourceV2BuildsRegisterPostRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[BuildRegisterResponse](src/Hud/Models/BuildRegisterResponse.cs)</code>

**OnError**: <code>[ApiException](src/Hud/Core/Exceptions/ApiException.cs)&lt;[RegisterBuildSourceV2BuildsRegisterPostError](src/Hud/Errors/RegisterBuildSourceV2BuildsRegisterPostError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task ReindexBuildSourceV2BuildsBuildIdSourceReindexPost(ReindexBuildSourceV2BuildsBuildIdSourceReindexPostRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Request a new source index after an indexing failure. Requires build edit access.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.Builds.ReindexBuildSourceV2BuildsBuildIdSourceReindexPost(
        new ReindexBuildSourceV2BuildsBuildIdSourceReindexPostRequest
        {
            BuildId = Guid.Parse("00000000-0000-0000-0000-000000000000"),
        });
}
catch (ApiException<ReindexBuildSourceV2BuildsBuildIdSourceReindexPostError> ex)
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

<code>[ReindexBuildSourceV2BuildsBuildIdSourceReindexPostRequest](src/Hud/Requests/Builds/ReindexBuildSourceV2BuildsBuildIdSourceReindexPostRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/Hud/Core/Exceptions/ApiException.cs)&lt;[ReindexBuildSourceV2BuildsBuildIdSourceReindexPostError](src/Hud/Errors/ReindexBuildSourceV2BuildsBuildIdSourceReindexPostError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;BuildResponse&gt; SetLatestBuildV2BuildsBuildIdSetLatestPost(SetLatestBuildV2BuildsBuildIdSetLatestPostRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Pin a successful build as its registry's latest build.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Builds.SetLatestBuildV2BuildsBuildIdSetLatestPost(
        new SetLatestBuildV2BuildsBuildIdSetLatestPostRequest
        {
            BuildId = Guid.Parse("00000000-0000-0000-0000-000000000000"),
        });
    // TODO: Handle 'response' of type BuildResponse
}
catch (ApiException<SetLatestBuildV2BuildsBuildIdSetLatestPostError> ex)
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

<code>[SetLatestBuildV2BuildsBuildIdSetLatestPostRequest](src/Hud/Requests/Builds/SetLatestBuildV2BuildsBuildIdSetLatestPostRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[BuildResponse](src/Hud/Models/BuildResponse.cs)</code>

**OnError**: <code>[ApiException](src/Hud/Core/Exceptions/ApiException.cs)&lt;[SetLatestBuildV2BuildsBuildIdSetLatestPostError](src/Hud/Errors/SetLatestBuildV2BuildsBuildIdSetLatestPostError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;BuildResponse&gt; TriggerBuildV2BuildsTriggerDirectPost(TriggerBuildV2BuildsTriggerDirectPostRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Trigger an environment build from a previously uploaded build context.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Builds.TriggerBuildV2BuildsTriggerDirectPost(
        new TriggerBuildV2BuildsTriggerDirectPostRequest { Body = new BuildTriggerRequest() });
    // TODO: Handle 'response' of type BuildResponse
}
catch (ApiException<TriggerBuildV2BuildsTriggerDirectPostError> ex)
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

<code>[TriggerBuildV2BuildsTriggerDirectPostRequest](src/Hud/Requests/Builds/TriggerBuildV2BuildsTriggerDirectPostRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[BuildResponse](src/Hud/Models/BuildResponse.cs)</code>

**OnError**: <code>[ApiException](src/Hud/Core/Exceptions/ApiException.cs)&lt;[TriggerBuildV2BuildsTriggerDirectPostError](src/Hud/Errors/TriggerBuildV2BuildsTriggerDirectPostError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;BuildResponse&gt; TriggerBuildV2BuildsTriggerPost(TriggerBuildV2BuildsTriggerPostRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Trigger an environment build from a previously uploaded build context.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Builds.TriggerBuildV2BuildsTriggerPost(new TriggerBuildV2BuildsTriggerPostRequest
    {
        Body = new BuildTriggerRequest(),
    });
    // TODO: Handle 'response' of type BuildResponse
}
catch (ApiException<TriggerBuildV2BuildsTriggerPostError> ex)
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

<code>[TriggerBuildV2BuildsTriggerPostRequest](src/Hud/Requests/Builds/TriggerBuildV2BuildsTriggerPostRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[BuildResponse](src/Hud/Models/BuildResponse.cs)</code>

**OnError**: <code>[ApiException](src/Hud/Core/Exceptions/ApiException.cs)&lt;[TriggerBuildV2BuildsTriggerPostError](src/Hud/Errors/TriggerBuildV2BuildsTriggerPostError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;BuildUploadUrlResponse&gt; UploadUrlV2BuildsUploadUrlPost(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a presigned S3 URL for uploading a build context, with a new build id.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Builds.UploadUrlV2BuildsUploadUrlPost();
    // TODO: Handle 'response' of type BuildUploadUrlResponse
}
catch (ApiException<UploadUrlV2BuildsUploadUrlPostError> ex)
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

**OnSuccess**: <code>[BuildUploadUrlResponse](src/Hud/Models/BuildUploadUrlResponse.cs)</code>

**OnError**: <code>[ApiException](src/Hud/Core/Exceptions/ApiException.cs)&lt;[UploadUrlV2BuildsUploadUrlPostError](src/Hud/Errors/UploadUrlV2BuildsUploadUrlPostError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Checks

> Source: [Checks](src/Hud/Api/Checks.cs)

<details>
<summary><code>Task&lt;QcPipelineRegistrationResponse&gt; CreateTeamQcPipelineV2ChecksPipelinesPost(CreateTeamQcPipelineV2ChecksPipelinesPostRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Register a team environment scenario as a private DataVendor QC pipeline.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Checks.CreateTeamQcPipelineV2ChecksPipelinesPost(
        new CreateTeamQcPipelineV2ChecksPipelinesPostRequest
        {
            Body = new QcPipelineCreateRequest
            {
                AssetType = "some example string",
                Key = "some example string",
                Label = "some example string",
                RegistryId = Guid.Parse("00000000-0000-0000-0000-000000000000"),
                ScenarioName = "some example string",
            },
        });
    // TODO: Handle 'response' of type QcPipelineRegistrationResponse
}
catch (ApiException<CreateTeamQcPipelineV2ChecksPipelinesPostError> ex)
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

<code>[CreateTeamQcPipelineV2ChecksPipelinesPostRequest](src/Hud/Requests/Checks/CreateTeamQcPipelineV2ChecksPipelinesPostRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[QcPipelineRegistrationResponse](src/Hud/Models/QcPipelineRegistrationResponse.cs)</code>

**OnError**: <code>[ApiException](src/Hud/Core/Exceptions/ApiException.cs)&lt;[CreateTeamQcPipelineV2ChecksPipelinesPostError](src/Hud/Errors/CreateTeamQcPipelineV2ChecksPipelinesPostError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;IReadOnlyList&lt;CheckRunResponse&gt;&gt; ListPlatformCheckRunsV2ChecksRunsGet(ListPlatformCheckRunsV2ChecksRunsGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List recent check attempts for one authorized resource.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Checks.ListPlatformCheckRunsV2ChecksRunsGet(
        new ListPlatformCheckRunsV2ChecksRunsGetRequest
        {
            SubjectType = CheckSubjectType.Environment,
            SubjectId = Guid.Parse("00000000-0000-0000-0000-000000000000"),
        });
    // TODO: Handle 'response' of type IReadOnlyList<CheckRunResponse>
}
catch (ApiException<ListPlatformCheckRunsV2ChecksRunsGetError> ex)
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

<code>[ListPlatformCheckRunsV2ChecksRunsGetRequest](src/Hud/Requests/Checks/ListPlatformCheckRunsV2ChecksRunsGetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>IReadOnlyList&lt;[CheckRunResponse](src/Hud/Models/CheckRunResponse.cs)&gt;</code>

**OnError**: <code>[ApiException](src/Hud/Core/Exceptions/ApiException.cs)&lt;[ListPlatformCheckRunsV2ChecksRunsGetError](src/Hud/Errors/ListPlatformCheckRunsV2ChecksRunsGetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;IReadOnlyList&lt;CheckDefinitionResponse&gt;&gt; ListPlatformChecksV2ChecksGet(ListPlatformChecksV2ChecksGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List available checks and their supported resource types.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Checks.ListPlatformChecksV2ChecksGet(new ListPlatformChecksV2ChecksGetRequest());
    // TODO: Handle 'response' of type IReadOnlyList<CheckDefinitionResponse>
}
catch (ApiException<ListPlatformChecksV2ChecksGetError> ex)
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

<code>[ListPlatformChecksV2ChecksGetRequest](src/Hud/Requests/Checks/ListPlatformChecksV2ChecksGetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>IReadOnlyList&lt;[CheckDefinitionResponse](src/Hud/Models/CheckDefinitionResponse.cs)&gt;</code>

**OnError**: <code>[ApiException](src/Hud/Core/Exceptions/ApiException.cs)&lt;[ListPlatformChecksV2ChecksGetError](src/Hud/Errors/ListPlatformChecksV2ChecksGetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;IReadOnlyList&lt;QcPipelineRegistrationResponse&gt;&gt; ListTeamQcPipelinesV2ChecksPipelinesGet(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List QC pipelines registered by the caller's team.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Checks.ListTeamQcPipelinesV2ChecksPipelinesGet();
    // TODO: Handle 'response' of type IReadOnlyList<QcPipelineRegistrationResponse>
}
catch (ApiException<ListTeamQcPipelinesV2ChecksPipelinesGetError> ex)
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

**OnSuccess**: <code>IReadOnlyList&lt;[QcPipelineRegistrationResponse](src/Hud/Models/QcPipelineRegistrationResponse.cs)&gt;</code>

**OnError**: <code>[ApiException](src/Hud/Core/Exceptions/ApiException.cs)&lt;[ListTeamQcPipelinesV2ChecksPipelinesGetError](src/Hud/Errors/ListTeamQcPipelinesV2ChecksPipelinesGetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;CheckRunResponse&gt; RunPlatformCheckV2ChecksCheckKeyRunsPost(RunPlatformCheckV2ChecksCheckKeyRunsPostRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Run one check against an authorized resource snapshot.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Checks.RunPlatformCheckV2ChecksCheckKeyRunsPost(
        new RunPlatformCheckV2ChecksCheckKeyRunsPostRequest
        {
            CheckKey = "some example string",
            Body = new CheckRunRequest
            {
                SubjectType = CheckSubjectType.Environment,
                SubjectId = Guid.Parse("00000000-0000-0000-0000-000000000000"),
            },
        });
    // TODO: Handle 'response' of type CheckRunResponse
}
catch (ApiException<RunPlatformCheckV2ChecksCheckKeyRunsPostError> ex)
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

<code>[RunPlatformCheckV2ChecksCheckKeyRunsPostRequest](src/Hud/Requests/Checks/RunPlatformCheckV2ChecksCheckKeyRunsPostRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CheckRunResponse](src/Hud/Models/CheckRunResponse.cs)</code>

**OnError**: <code>[ApiException](src/Hud/Core/Exceptions/ApiException.cs)&lt;[RunPlatformCheckV2ChecksCheckKeyRunsPostError](src/Hud/Errors/RunPlatformCheckV2ChecksCheckKeyRunsPostError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Completions

> Source: [Completions](src/Hud/Api/Completions.cs)

<details>
<summary><code>Task&lt;CompletionResponse&gt; PostCompletionV2CompletionsPost(PostCompletionV2CompletionsPostRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

One-shot chat completion proxied to the inference gateway.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Completions.PostCompletionV2CompletionsPost(new PostCompletionV2CompletionsPostRequest
    {
        Body = new CompletionRequest
        {
            Model = "some example string",
            Messages = [new ChatMessage { Role = "some example string", Content = "some example string" }],
        },
    });
    // TODO: Handle 'response' of type CompletionResponse
}
catch (ApiException<PostCompletionV2CompletionsPostError> ex)
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

<code>[PostCompletionV2CompletionsPostRequest](src/Hud/Requests/Completions/PostCompletionV2CompletionsPostRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CompletionResponse](src/Hud/Models/CompletionResponse.cs)</code>

**OnError**: <code>[ApiException](src/Hud/Core/Exceptions/ApiException.cs)&lt;[PostCompletionV2CompletionsPostError](src/Hud/Errors/PostCompletionV2CompletionsPostError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Data

> Source: [Data](src/Hud/Api/Data.cs)

<details>
<summary><code>Task&lt;DataFileResponse&gt; CompleteDataFileV2DataFileIdCompletePost(CompleteDataFileV2DataFileIdCompletePostRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Publish an uploaded data file, recording its stored size and type.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Data.CompleteDataFileV2DataFileIdCompletePost(
        new CompleteDataFileV2DataFileIdCompletePostRequest
        {
            FileId = Guid.Parse("00000000-0000-0000-0000-000000000000"),
        });
    // TODO: Handle 'response' of type DataFileResponse
}
catch (ApiException<CompleteDataFileV2DataFileIdCompletePostError> ex)
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

<code>[CompleteDataFileV2DataFileIdCompletePostRequest](src/Hud/Requests/Data/CompleteDataFileV2DataFileIdCompletePostRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[DataFileResponse](src/Hud/Models/DataFileResponse.cs)</code>

**OnError**: <code>[ApiException](src/Hud/Core/Exceptions/ApiException.cs)&lt;[CompleteDataFileV2DataFileIdCompletePostError](src/Hud/Errors/CompleteDataFileV2DataFileIdCompletePostError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;DataFileUploadResponse&gt; CreateDataFileV2DataPost(CreateDataFileV2DataPostRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Reserve a data file and return a presigned PUT to upload its bytes.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Data.CreateDataFileV2DataPost(new CreateDataFileV2DataPostRequest
    {
        Body = new DataFileCreateRequest { Filename = "some example string", SizeBytes = 1 },
    });
    // TODO: Handle 'response' of type DataFileUploadResponse
}
catch (ApiException<CreateDataFileV2DataPostError> ex)
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

<code>[CreateDataFileV2DataPostRequest](src/Hud/Requests/Data/CreateDataFileV2DataPostRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[DataFileUploadResponse](src/Hud/Models/DataFileUploadResponse.cs)</code>

**OnError**: <code>[ApiException](src/Hud/Core/Exceptions/ApiException.cs)&lt;[CreateDataFileV2DataPostError](src/Hud/Errors/CreateDataFileV2DataPostError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task DeleteDataFileV2DataFileIdDelete(DeleteDataFileV2DataFileIdDeleteRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete a data file and its stored object.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.Data.DeleteDataFileV2DataFileIdDelete(new DeleteDataFileV2DataFileIdDeleteRequest
    {
        FileId = Guid.Parse("00000000-0000-0000-0000-000000000000"),
    });
}
catch (ApiException<DeleteDataFileV2DataFileIdDeleteError> ex)
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

<code>[DeleteDataFileV2DataFileIdDeleteRequest](src/Hud/Requests/Data/DeleteDataFileV2DataFileIdDeleteRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/Hud/Core/Exceptions/ApiException.cs)&lt;[DeleteDataFileV2DataFileIdDeleteError](src/Hud/Errors/DeleteDataFileV2DataFileIdDeleteError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task DeleteDataFilesV2DataDeletePost(DeleteDataFilesV2DataDeletePostRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete data files and their stored objects. Fails if any id is unreadable or unwritable.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.Data.DeleteDataFilesV2DataDeletePost(new DeleteDataFilesV2DataDeletePostRequest
    {
        Body = new DataFileIdsRequest { FileIds = [Guid.Parse("00000000-0000-0000-0000-000000000000")] },
    });
}
catch (ApiException<DeleteDataFilesV2DataDeletePostError> ex)
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

<code>[DeleteDataFilesV2DataDeletePostRequest](src/Hud/Requests/Data/DeleteDataFilesV2DataDeletePostRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/Hud/Core/Exceptions/ApiException.cs)&lt;[DeleteDataFilesV2DataDeletePostError](src/Hud/Errors/DeleteDataFilesV2DataDeletePostError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;DataFileDownloadResponse&gt; DownloadDataFileV2DataFileIdDownloadGet(DownloadDataFileV2DataFileIdDownloadGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Presign an inline and an attachment link for a ready data file.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Data.DownloadDataFileV2DataFileIdDownloadGet(
        new DownloadDataFileV2DataFileIdDownloadGetRequest
        {
            FileId = Guid.Parse("00000000-0000-0000-0000-000000000000"),
        });
    // TODO: Handle 'response' of type DataFileDownloadResponse
}
catch (ApiException<DownloadDataFileV2DataFileIdDownloadGetError> ex)
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

<code>[DownloadDataFileV2DataFileIdDownloadGetRequest](src/Hud/Requests/Data/DownloadDataFileV2DataFileIdDownloadGetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[DataFileDownloadResponse](src/Hud/Models/DataFileDownloadResponse.cs)</code>

**OnError**: <code>[ApiException](src/Hud/Core/Exceptions/ApiException.cs)&lt;[DownloadDataFileV2DataFileIdDownloadGetError](src/Hud/Errors/DownloadDataFileV2DataFileIdDownloadGetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;DataFileStorageUsageResponse&gt; GetDataFileStorageUsageV2DataUsageGet(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Return current data-file storage use and the team's effective limits.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Data.GetDataFileStorageUsageV2DataUsageGet();
    // TODO: Handle 'response' of type DataFileStorageUsageResponse
}
catch (ApiException<GetDataFileStorageUsageV2DataUsageGetError> ex)
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

**OnSuccess**: <code>[DataFileStorageUsageResponse](src/Hud/Models/DataFileStorageUsageResponse.cs)</code>

**OnError**: <code>[ApiException](src/Hud/Core/Exceptions/ApiException.cs)&lt;[GetDataFileStorageUsageV2DataUsageGetError](src/Hud/Errors/GetDataFileStorageUsageV2DataUsageGetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;DataFileResponse&gt; GetDataFileV2DataFileIdGet(GetDataFileV2DataFileIdGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Fetch one data file's metadata.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Data.GetDataFileV2DataFileIdGet(new GetDataFileV2DataFileIdGetRequest
    {
        FileId = Guid.Parse("00000000-0000-0000-0000-000000000000"),
    });
    // TODO: Handle 'response' of type DataFileResponse
}
catch (ApiException<GetDataFileV2DataFileIdGetError> ex)
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

<code>[GetDataFileV2DataFileIdGetRequest](src/Hud/Requests/Data/GetDataFileV2DataFileIdGetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[DataFileResponse](src/Hud/Models/DataFileResponse.cs)</code>

**OnError**: <code>[ApiException](src/Hud/Core/Exceptions/ApiException.cs)&lt;[GetDataFileV2DataFileIdGetError](src/Hud/Errors/GetDataFileV2DataFileIdGetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;DataFileGroupListResponse&gt; ListDataFileGroupsV2DataGroupsGet(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Summarise the readable folders so a browser can load their files on demand.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Data.ListDataFileGroupsV2DataGroupsGet();
    // TODO: Handle 'response' of type DataFileGroupListResponse
}
catch (ApiException<ListDataFileGroupsV2DataGroupsGetError> ex)
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

**OnSuccess**: <code>[DataFileGroupListResponse](src/Hud/Models/DataFileGroupListResponse.cs)</code>

**OnError**: <code>[ApiException](src/Hud/Core/Exceptions/ApiException.cs)&lt;[ListDataFileGroupsV2DataGroupsGetError](src/Hud/Errors/ListDataFileGroupsV2DataGroupsGetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;DataFileListResponse&gt; ListDataFilesV2DataGet(ListDataFilesV2DataGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List the data files the caller can read, optionally narrowed to one folder.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Data.ListDataFilesV2DataGet(new ListDataFilesV2DataGetRequest());
    // TODO: Handle 'response' of type DataFileListResponse
}
catch (ApiException<ListDataFilesV2DataGetError> ex)
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

<code>[ListDataFilesV2DataGetRequest](src/Hud/Requests/Data/ListDataFilesV2DataGetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[DataFileListResponse](src/Hud/Models/DataFileListResponse.cs)</code>

**OnError**: <code>[ApiException](src/Hud/Core/Exceptions/ApiException.cs)&lt;[ListDataFilesV2DataGetError](src/Hud/Errors/ListDataFilesV2DataGetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;DataFileResponse&gt; UpdateDataFileV2DataFileIdPatch(UpdateDataFileV2DataFileIdPatchRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Rename a data file.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Data.UpdateDataFileV2DataFileIdPatch(new UpdateDataFileV2DataFileIdPatchRequest
    {
        FileId = Guid.Parse("00000000-0000-0000-0000-000000000000"),
        Body = new DataFileUpdateRequest { Filename = "some example string" },
    });
    // TODO: Handle 'response' of type DataFileResponse
}
catch (ApiException<UpdateDataFileV2DataFileIdPatchError> ex)
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

<code>[UpdateDataFileV2DataFileIdPatchRequest](src/Hud/Requests/Data/UpdateDataFileV2DataFileIdPatchRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[DataFileResponse](src/Hud/Models/DataFileResponse.cs)</code>

**OnError**: <code>[ApiException](src/Hud/Core/Exceptions/ApiException.cs)&lt;[UpdateDataFileV2DataFileIdPatchError](src/Hud/Errors/UpdateDataFileV2DataFileIdPatchError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Imports

> Source: [Imports](src/Hud/Api/Imports.cs)

<details>
<summary><code>Task&lt;ImportResponse&gt; CancelImportV2ImportsImportIdCancelPost(CancelImportV2ImportsImportIdCancelPostRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Request cancellation of a live import; one that has ended is returned unchanged.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Imports.CancelImportV2ImportsImportIdCancelPost(
        new CancelImportV2ImportsImportIdCancelPostRequest
        {
            ImportId = Guid.Parse("00000000-0000-0000-0000-000000000000"),
        });
    // TODO: Handle 'response' of type ImportResponse
}
catch (ApiException<CancelImportV2ImportsImportIdCancelPostError> ex)
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

<code>[CancelImportV2ImportsImportIdCancelPostRequest](src/Hud/Requests/Imports/CancelImportV2ImportsImportIdCancelPostRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ImportResponse](src/Hud/Models/ImportResponse.cs)</code>

**OnError**: <code>[ApiException](src/Hud/Core/Exceptions/ApiException.cs)&lt;[CancelImportV2ImportsImportIdCancelPostError](src/Hud/Errors/CancelImportV2ImportsImportIdCancelPostError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;DataFileUploadResponse&gt; CreateImportUploadV2ImportsUploadsPost(CreateImportUploadV2ImportsUploadsPostRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Reserve a data file for a bundle and return a presigned PUT to upload its bytes.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Imports.CreateImportUploadV2ImportsUploadsPost(
        new CreateImportUploadV2ImportsUploadsPostRequest
        {
            Body = new ImportUploadRequest { Filename = "some example string", SizeBytes = 1 },
        });
    // TODO: Handle 'response' of type DataFileUploadResponse
}
catch (ApiException<CreateImportUploadV2ImportsUploadsPostError> ex)
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

<code>[CreateImportUploadV2ImportsUploadsPostRequest](src/Hud/Requests/Imports/CreateImportUploadV2ImportsUploadsPostRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[DataFileUploadResponse](src/Hud/Models/DataFileUploadResponse.cs)</code>

**OnError**: <code>[ApiException](src/Hud/Core/Exceptions/ApiException.cs)&lt;[CreateImportUploadV2ImportsUploadsPostError](src/Hud/Errors/CreateImportUploadV2ImportsUploadsPostError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ImportEstimateResponse&gt; EstimateImportV2ImportsEstimateGet(EstimateImportV2ImportsEstimateGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Estimate an import of a bundle; fails when the bundle cannot be imported.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Imports.EstimateImportV2ImportsEstimateGet(new EstimateImportV2ImportsEstimateGetRequest
    {
        Format = Format.Harbor,
        FileId = Guid.Parse("00000000-0000-0000-0000-000000000000"),
    });
    // TODO: Handle 'response' of type ImportEstimateResponse
}
catch (ApiException<EstimateImportV2ImportsEstimateGetError> ex)
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

<code>[EstimateImportV2ImportsEstimateGetRequest](src/Hud/Requests/Imports/EstimateImportV2ImportsEstimateGetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ImportEstimateResponse](src/Hud/Models/ImportEstimateResponse.cs)</code>

**OnError**: <code>[ApiException](src/Hud/Core/Exceptions/ApiException.cs)&lt;[EstimateImportV2ImportsEstimateGetError](src/Hud/Errors/EstimateImportV2ImportsEstimateGetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;object&gt; GetImportReportV2ImportsImportIdReportGet(GetImportReportV2ImportsImportIdReportGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Return the report a completed or stopped import published, in its format's schema.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Imports.GetImportReportV2ImportsImportIdReportGet(
        new GetImportReportV2ImportsImportIdReportGetRequest
        {
            ImportId = Guid.Parse("00000000-0000-0000-0000-000000000000"),
        });
    // TODO: Handle 'response' of type object
}
catch (ApiException<GetImportReportV2ImportsImportIdReportGetError> ex)
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

<code>[GetImportReportV2ImportsImportIdReportGetRequest](src/Hud/Requests/Imports/GetImportReportV2ImportsImportIdReportGetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>object</code>

**OnError**: <code>[ApiException](src/Hud/Core/Exceptions/ApiException.cs)&lt;[GetImportReportV2ImportsImportIdReportGetError](src/Hud/Errors/GetImportReportV2ImportsImportIdReportGetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ImportResponse&gt; GetImportV2ImportsImportIdGet(GetImportV2ImportsImportIdGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Fetch one import.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Imports.GetImportV2ImportsImportIdGet(new GetImportV2ImportsImportIdGetRequest
    {
        ImportId = Guid.Parse("00000000-0000-0000-0000-000000000000"),
    });
    // TODO: Handle 'response' of type ImportResponse
}
catch (ApiException<GetImportV2ImportsImportIdGetError> ex)
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

<code>[GetImportV2ImportsImportIdGetRequest](src/Hud/Requests/Imports/GetImportV2ImportsImportIdGetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ImportResponse](src/Hud/Models/ImportResponse.cs)</code>

**OnError**: <code>[ApiException](src/Hud/Core/Exceptions/ApiException.cs)&lt;[GetImportV2ImportsImportIdGetError](src/Hud/Errors/GetImportV2ImportsImportIdGetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ImportFormatListResponse&gt; ListImportFormatsV2ImportsFormatsGet(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List the bundle formats available to import.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Imports.ListImportFormatsV2ImportsFormatsGet();
    // TODO: Handle 'response' of type ImportFormatListResponse
}
catch (ApiException<ListImportFormatsV2ImportsFormatsGetError> ex)
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

**OnSuccess**: <code>[ImportFormatListResponse](src/Hud/Models/ImportFormatListResponse.cs)</code>

**OnError**: <code>[ApiException](src/Hud/Core/Exceptions/ApiException.cs)&lt;[ListImportFormatsV2ImportsFormatsGetError](src/Hud/Errors/ListImportFormatsV2ImportsFormatsGetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ImportListResponse&gt; ListImportsV2ImportsGet(ListImportsV2ImportsGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List the imports the caller can read, newest first.

Team admins see every import on the team; other members see their own.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Imports.ListImportsV2ImportsGet(new ListImportsV2ImportsGetRequest());
    // TODO: Handle 'response' of type ImportListResponse
}
catch (ApiException<ListImportsV2ImportsGetError> ex)
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

<code>[ListImportsV2ImportsGetRequest](src/Hud/Requests/Imports/ListImportsV2ImportsGetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ImportListResponse](src/Hud/Models/ImportListResponse.cs)</code>

**OnError**: <code>[ApiException](src/Hud/Core/Exceptions/ApiException.cs)&lt;[ListImportsV2ImportsGetError](src/Hud/Errors/ListImportsV2ImportsGetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ImportResponse&gt; StartImportV2ImportsPost(StartImportV2ImportsPostRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Import an uploaded bundle into a taskset.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Imports.StartImportV2ImportsPost(new StartImportV2ImportsPostRequest
    {
        Body = new ImportCreateRequest
        {
            FileId = Guid.Parse("00000000-0000-0000-0000-000000000000"),
            TasksetId = Guid.Parse("00000000-0000-0000-0000-000000000000"),
        },
    });
    // TODO: Handle 'response' of type ImportResponse
}
catch (ApiException<StartImportV2ImportsPostError> ex)
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

<code>[StartImportV2ImportsPostRequest](src/Hud/Requests/Imports/StartImportV2ImportsPostRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ImportResponse](src/Hud/Models/ImportResponse.cs)</code>

**OnError**: <code>[ApiException](src/Hud/Core/Exceptions/ApiException.cs)&lt;[StartImportV2ImportsPostError](src/Hud/Errors/StartImportV2ImportsPostError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Inference

> Source: [Inference](src/Hud/Api/Inference.cs)

<details>
<summary><code>Task&lt;InferenceUsageResponse&gt; GetInferenceUsageV2InferenceUsageGet(GetInferenceUsageV2InferenceUsageGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get the team's inference usage over a window, with summary and paged requests.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Inference.GetInferenceUsageV2InferenceUsageGet(
        new GetInferenceUsageV2InferenceUsageGetRequest());
    // TODO: Handle 'response' of type InferenceUsageResponse
}
catch (ApiException<GetInferenceUsageV2InferenceUsageGetError> ex)
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

<code>[GetInferenceUsageV2InferenceUsageGetRequest](src/Hud/Requests/Inference/GetInferenceUsageV2InferenceUsageGetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[InferenceUsageResponse](src/Hud/Models/InferenceUsageResponse.cs)</code>

**OnError**: <code>[ApiException](src/Hud/Core/Exceptions/ApiException.cs)&lt;[GetInferenceUsageV2InferenceUsageGetError](src/Hud/Errors/GetInferenceUsageV2InferenceUsageGetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Instances

> Source: [Instances](src/Hud/Api/Instances.cs)

<details>
<summary><code>Task&lt;ActiveInstancesResponse&gt; ListInstancesV2InstanceGet(ListInstancesV2InstanceGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List a registry's instances, optionally including recently terminated ones.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Instances.ListInstancesV2InstanceGet(new ListInstancesV2InstanceGetRequest
    {
        RegistryId = Guid.Parse("00000000-0000-0000-0000-000000000000"),
    });
    // TODO: Handle 'response' of type ActiveInstancesResponse
}
catch (ApiException<ListInstancesV2InstanceGetError> ex)
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

<code>[ListInstancesV2InstanceGetRequest](src/Hud/Requests/Instances/ListInstancesV2InstanceGetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ActiveInstancesResponse](src/Hud/Models/ActiveInstancesResponse.cs)</code>

**OnError**: <code>[ApiException](src/Hud/Core/Exceptions/ApiException.cs)&lt;[ListInstancesV2InstanceGetError](src/Hud/Errors/ListInstancesV2InstanceGetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;StopInstancesResponse&gt; StopInstancesV2InstanceStopPost(StopInstancesV2InstanceStopPostRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Stop the given instances of a registry, reporting per-instance results.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Instances.StopInstancesV2InstanceStopPost(new StopInstancesV2InstanceStopPostRequest
    {
        Body = new StopInstancesRequest
        {
            RegistryId = Guid.Parse("00000000-0000-0000-0000-000000000000"),
            InstanceIds = [Guid.Parse("00000000-0000-0000-0000-000000000000")],
        },
    });
    // TODO: Handle 'response' of type StopInstancesResponse
}
catch (ApiException<StopInstancesV2InstanceStopPostError> ex)
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

<code>[StopInstancesV2InstanceStopPostRequest](src/Hud/Requests/Instances/StopInstancesV2InstanceStopPostRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[StopInstancesResponse](src/Hud/Models/StopInstancesResponse.cs)</code>

**OnError**: <code>[ApiException](src/Hud/Core/Exceptions/ApiException.cs)&lt;[StopInstancesV2InstanceStopPostError](src/Hud/Errors/StopInstancesV2InstanceStopPostError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Jobs

> Source: [Jobs](src/Hud/Api/Jobs.cs)

<details>
<summary><code>Task&lt;EnrichJobsResponse&gt; EnrichJobsV2JobsEnrichPost(EnrichJobsV2JobsEnrichPostRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Fetch enrichment data (chart points, task coverage, models) for a batch of jobs.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Jobs.EnrichJobsV2JobsEnrichPost(new EnrichJobsV2JobsEnrichPostRequest
    {
        Body = [Guid.Parse("00000000-0000-0000-0000-000000000000")],
    });
    // TODO: Handle 'response' of type EnrichJobsResponse
}
catch (ApiException<EnrichJobsV2JobsEnrichPostError> ex)
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

<code>[EnrichJobsV2JobsEnrichPostRequest](src/Hud/Requests/Jobs/EnrichJobsV2JobsEnrichPostRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[EnrichJobsResponse](src/Hud/Models/EnrichJobsResponse.cs)</code>

**OnError**: <code>[ApiException](src/Hud/Core/Exceptions/ApiException.cs)&lt;[EnrichJobsV2JobsEnrichPostError](src/Hud/Errors/EnrichJobsV2JobsEnrichPostError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;JobImportFinishResponse&gt; FinishImportedJobV2JobsImportJobIdFinishPost(FinishImportedJobV2JobsImportJobIdFinishPostRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Finish an imported job once each of its traces has been finished.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Jobs.FinishImportedJobV2JobsImportJobIdFinishPost(
        new FinishImportedJobV2JobsImportJobIdFinishPostRequest
        {
            JobId = Guid.Parse("00000000-0000-0000-0000-000000000000"),
        });
    // TODO: Handle 'response' of type JobImportFinishResponse
}
catch (ApiException<FinishImportedJobV2JobsImportJobIdFinishPostError> ex)
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

<code>[FinishImportedJobV2JobsImportJobIdFinishPostRequest](src/Hud/Requests/Jobs/FinishImportedJobV2JobsImportJobIdFinishPostRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[JobImportFinishResponse](src/Hud/Models/JobImportFinishResponse.cs)</code>

**OnError**: <code>[ApiException](src/Hud/Core/Exceptions/ApiException.cs)&lt;[FinishImportedJobV2JobsImportJobIdFinishPostError](src/Hud/Errors/FinishImportedJobV2JobsImportJobIdFinishPostError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;JobImportTraceResultResponse&gt; FinishImportedTraceV2JobsImportJobIdTracesTraceIdFinishPost(FinishImportedTraceV2JobsImportJobIdTracesTraceIdFinishPostRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Record the outcome of one imported trace after its trajectory is uploaded.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Jobs.FinishImportedTraceV2JobsImportJobIdTracesTraceIdFinishPost(
        new FinishImportedTraceV2JobsImportJobIdTracesTraceIdFinishPostRequest
        {
            JobId = Guid.Parse("00000000-0000-0000-0000-000000000000"),
            TraceId = Guid.Parse("00000000-0000-0000-0000-000000000000"),
            Body = new JobImportTraceResult { Status = StatusHudPlatformJobsApi.Completed },
        });
    // TODO: Handle 'response' of type JobImportTraceResultResponse
}
catch (ApiException<FinishImportedTraceV2JobsImportJobIdTracesTraceIdFinishPostError> ex)
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

<code>[FinishImportedTraceV2JobsImportJobIdTracesTraceIdFinishPostRequest](src/Hud/Requests/Jobs/FinishImportedTraceV2JobsImportJobIdTracesTraceIdFinishPostRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[JobImportTraceResultResponse](src/Hud/Models/JobImportTraceResultResponse.cs)</code>

**OnError**: <code>[ApiException](src/Hud/Core/Exceptions/ApiException.cs)&lt;[FinishImportedTraceV2JobsImportJobIdTracesTraceIdFinishPostError](src/Hud/Errors/FinishImportedTraceV2JobsImportJobIdTracesTraceIdFinishPostError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ChartDataResponse&gt; GetJobChartDataV2JobsJobIdChartDataGet(GetJobChartDataV2JobsJobIdChartDataGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get per-trace reward data points for charting a job's results.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Jobs.GetJobChartDataV2JobsJobIdChartDataGet(
        new GetJobChartDataV2JobsJobIdChartDataGetRequest
        {
            JobId = Guid.Parse("00000000-0000-0000-0000-000000000000"),
        });
    // TODO: Handle 'response' of type ChartDataResponse
}
catch (ApiException<GetJobChartDataV2JobsJobIdChartDataGetError> ex)
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

<code>[GetJobChartDataV2JobsJobIdChartDataGetRequest](src/Hud/Requests/Jobs/GetJobChartDataV2JobsJobIdChartDataGetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ChartDataResponse](src/Hud/Models/ChartDataResponse.cs)</code>

**OnError**: <code>[ApiException](src/Hud/Core/Exceptions/ApiException.cs)&lt;[GetJobChartDataV2JobsJobIdChartDataGetError](src/Hud/Errors/GetJobChartDataV2JobsJobIdChartDataGetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;JobEntityLinksResponse&gt; GetJobEntityLinksV2JobsJobIdEntityLinksGet(GetJobEntityLinksV2JobsJobIdEntityLinksGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List tasksets and registries linked to a job.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Jobs.GetJobEntityLinksV2JobsJobIdEntityLinksGet(
        new GetJobEntityLinksV2JobsJobIdEntityLinksGetRequest
        {
            JobId = Guid.Parse("00000000-0000-0000-0000-000000000000"),
        });
    // TODO: Handle 'response' of type JobEntityLinksResponse
}
catch (ApiException<GetJobEntityLinksV2JobsJobIdEntityLinksGetError> ex)
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

<code>[GetJobEntityLinksV2JobsJobIdEntityLinksGetRequest](src/Hud/Requests/Jobs/GetJobEntityLinksV2JobsJobIdEntityLinksGetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[JobEntityLinksResponse](src/Hud/Models/JobEntityLinksResponse.cs)</code>

**OnError**: <code>[ApiException](src/Hud/Core/Exceptions/ApiException.cs)&lt;[GetJobEntityLinksV2JobsJobIdEntityLinksGetError](src/Hud/Errors/GetJobEntityLinksV2JobsJobIdEntityLinksGetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;TasksetCoverageResponse&gt; GetJobTasksetCoverageV2JobsJobIdTasksetCoverageGet(GetJobTasksetCoverageV2JobsJobIdTasksetCoverageGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get per-task coverage of the job's taskset, including unattempted tasks.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Jobs.GetJobTasksetCoverageV2JobsJobIdTasksetCoverageGet(
        new GetJobTasksetCoverageV2JobsJobIdTasksetCoverageGetRequest
        {
            JobId = Guid.Parse("00000000-0000-0000-0000-000000000000"),
        });
    // TODO: Handle 'response' of type TasksetCoverageResponse
}
catch (ApiException<GetJobTasksetCoverageV2JobsJobIdTasksetCoverageGetError> ex)
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

<code>[GetJobTasksetCoverageV2JobsJobIdTasksetCoverageGetRequest](src/Hud/Requests/Jobs/GetJobTasksetCoverageV2JobsJobIdTasksetCoverageGetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[TasksetCoverageResponse](src/Hud/Models/TasksetCoverageResponse.cs)</code>

**OnError**: <code>[ApiException](src/Hud/Core/Exceptions/ApiException.cs)&lt;[GetJobTasksetCoverageV2JobsJobIdTasksetCoverageGetError](src/Hud/Errors/GetJobTasksetCoverageV2JobsJobIdTasksetCoverageGetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;JobUsageResponse&gt; GetJobUsageV2JobsJobIdUsageGet(GetJobUsageV2JobsJobIdUsageGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get per-trace compute and inference usage for a job.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Jobs.GetJobUsageV2JobsJobIdUsageGet(new GetJobUsageV2JobsJobIdUsageGetRequest
    {
        JobId = Guid.Parse("00000000-0000-0000-0000-000000000000"),
    });
    // TODO: Handle 'response' of type JobUsageResponse
}
catch (ApiException<GetJobUsageV2JobsJobIdUsageGetError> ex)
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

<code>[GetJobUsageV2JobsJobIdUsageGetRequest](src/Hud/Requests/Jobs/GetJobUsageV2JobsJobIdUsageGetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[JobUsageResponse](src/Hud/Models/JobUsageResponse.cs)</code>

**OnError**: <code>[ApiException](src/Hud/Core/Exceptions/ApiException.cs)&lt;[GetJobUsageV2JobsJobIdUsageGetError](src/Hud/Errors/GetJobUsageV2JobsJobIdUsageGetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;JobResponse&gt; GetJobV2JobsJobIdGet(GetJobV2JobsJobIdGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a job by id.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Jobs.GetJobV2JobsJobIdGet(new GetJobV2JobsJobIdGetRequest
    {
        JobId = Guid.Parse("00000000-0000-0000-0000-000000000000"),
    });
    // TODO: Handle 'response' of type JobResponse
}
catch (ApiException<GetJobV2JobsJobIdGetError> ex)
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

<code>[GetJobV2JobsJobIdGetRequest](src/Hud/Requests/Jobs/GetJobV2JobsJobIdGetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[JobResponse](src/Hud/Models/JobResponse.cs)</code>

**OnError**: <code>[ApiException](src/Hud/Core/Exceptions/ApiException.cs)&lt;[GetJobV2JobsJobIdGetError](src/Hud/Errors/GetJobV2JobsJobIdGetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;JobImportResponse&gt; ImportJobV2JobsImportPost(ImportJobV2JobsImportPostRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Add runs done outside HUD to an imported job, creating the job on first call.

Each trace is linked to its task by content digest and starts running. A
running trace with no span upload for an hour is errored, so add traces as
they are uploaded rather than all at once. Retried traces are reported as
already imported.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Jobs.ImportJobV2JobsImportPost(new ImportJobV2JobsImportPostRequest
    {
        Body = new JobImportRequest
        {
            TasksetId = Guid.Parse("00000000-0000-0000-0000-000000000000"),
            ExternalId = "some example string",
            Name = "some example string",
            Traces = [new JobImportTrace { ExternalId = "some example string", TaskDigest = "some example string" }],
        },
    });
    // TODO: Handle 'response' of type JobImportResponse
}
catch (ApiException<ImportJobV2JobsImportPostError> ex)
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

<code>[ImportJobV2JobsImportPostRequest](src/Hud/Requests/Jobs/ImportJobV2JobsImportPostRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[JobImportResponse](src/Hud/Models/JobImportResponse.cs)</code>

**OnError**: <code>[ApiException](src/Hud/Core/Exceptions/ApiException.cs)&lt;[ImportJobV2JobsImportPostError](src/Hud/Errors/ImportJobV2JobsImportPostError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;BatchValidateResponse&gt; InvalidateJobV2JobsJobIdInvalidatePost(InvalidateJobV2JobsJobIdInvalidatePostRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Mark every trace in this job as invalid (excluded from leaderboards).

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Jobs.InvalidateJobV2JobsJobIdInvalidatePost(
        new InvalidateJobV2JobsJobIdInvalidatePostRequest
        {
            JobId = Guid.Parse("00000000-0000-0000-0000-000000000000"),
        });
    // TODO: Handle 'response' of type BatchValidateResponse
}
catch (ApiException<InvalidateJobV2JobsJobIdInvalidatePostError> ex)
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

<code>[InvalidateJobV2JobsJobIdInvalidatePostRequest](src/Hud/Requests/Jobs/InvalidateJobV2JobsJobIdInvalidatePostRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[BatchValidateResponse](src/Hud/Models/BatchValidateResponse.cs)</code>

**OnError**: <code>[ApiException](src/Hud/Core/Exceptions/ApiException.cs)&lt;[InvalidateJobV2JobsJobIdInvalidatePostError](src/Hud/Errors/InvalidateJobV2JobsJobIdInvalidatePostError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;JobSummary&gt; JobSummaryV2JobsJobIdSummaryGet(JobSummaryV2JobsJobIdSummaryGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get aggregate trace statistics for a job.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Jobs.JobSummaryV2JobsJobIdSummaryGet(new JobSummaryV2JobsJobIdSummaryGetRequest
    {
        JobId = Guid.Parse("00000000-0000-0000-0000-000000000000"),
    });
    // TODO: Handle 'response' of type JobSummary
}
catch (ApiException<JobSummaryV2JobsJobIdSummaryGetError> ex)
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

<code>[JobSummaryV2JobsJobIdSummaryGetRequest](src/Hud/Requests/Jobs/JobSummaryV2JobsJobIdSummaryGetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[JobSummary](src/Hud/Models/JobSummary.cs)</code>

**OnError**: <code>[ApiException](src/Hud/Core/Exceptions/ApiException.cs)&lt;[JobSummaryV2JobsJobIdSummaryGetError](src/Hud/Errors/JobSummaryV2JobsJobIdSummaryGetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;IReadOnlyList&lt;JobResponse&gt;&gt; ListActiveJobsV2JobsActiveGet(ListActiveJobsV2JobsActiveGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List a bounded page of currently running jobs for the caller's team.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Jobs.ListActiveJobsV2JobsActiveGet(new ListActiveJobsV2JobsActiveGetRequest());
    // TODO: Handle 'response' of type IReadOnlyList<JobResponse>
}
catch (ApiException<ListActiveJobsV2JobsActiveGetError> ex)
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

<code>[ListActiveJobsV2JobsActiveGetRequest](src/Hud/Requests/Jobs/ListActiveJobsV2JobsActiveGetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>IReadOnlyList&lt;[JobResponse](src/Hud/Models/JobResponse.cs)&gt;</code>

**OnError**: <code>[ApiException](src/Hud/Core/Exceptions/ApiException.cs)&lt;[ListActiveJobsV2JobsActiveGetError](src/Hud/Errors/ListActiveJobsV2JobsActiveGetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;TasksetJobsEnrichedResponse&gt; ListEnrichedJobsV2JobsEnrichedGet(ListEnrichedJobsV2JobsEnrichedGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List enriched taskset jobs; public-only viewers receive public jobs.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Jobs.ListEnrichedJobsV2JobsEnrichedGet(new ListEnrichedJobsV2JobsEnrichedGetRequest
    {
        TasksetId = Guid.Parse("00000000-0000-0000-0000-000000000000"),
    });
    // TODO: Handle 'response' of type TasksetJobsEnrichedResponse
}
catch (ApiException<ListEnrichedJobsV2JobsEnrichedGetError> ex)
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

<code>[ListEnrichedJobsV2JobsEnrichedGetRequest](src/Hud/Requests/Jobs/ListEnrichedJobsV2JobsEnrichedGetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[TasksetJobsEnrichedResponse](src/Hud/Models/TasksetJobsEnrichedResponse.cs)</code>

**OnError**: <code>[ApiException](src/Hud/Core/Exceptions/ApiException.cs)&lt;[ListEnrichedJobsV2JobsEnrichedGetError](src/Hud/Errors/ListEnrichedJobsV2JobsEnrichedGetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;JobThumbnailsResponse&gt; ListJobThumbnailsV2JobsJobIdThumbnailsGet(ListJobThumbnailsV2JobsJobIdThumbnailsGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List trace thumbnails for a job with presigned image URLs.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Jobs.ListJobThumbnailsV2JobsJobIdThumbnailsGet(
        new ListJobThumbnailsV2JobsJobIdThumbnailsGetRequest
        {
            JobId = Guid.Parse("00000000-0000-0000-0000-000000000000"),
        });
    // TODO: Handle 'response' of type JobThumbnailsResponse
}
catch (ApiException<ListJobThumbnailsV2JobsJobIdThumbnailsGetError> ex)
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

<code>[ListJobThumbnailsV2JobsJobIdThumbnailsGetRequest](src/Hud/Requests/Jobs/ListJobThumbnailsV2JobsJobIdThumbnailsGetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[JobThumbnailsResponse](src/Hud/Models/JobThumbnailsResponse.cs)</code>

**OnError**: <code>[ApiException](src/Hud/Core/Exceptions/ApiException.cs)&lt;[ListJobThumbnailsV2JobsJobIdThumbnailsGetError](src/Hud/Errors/ListJobThumbnailsV2JobsJobIdThumbnailsGetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;PaginatedResponseTraceResponse&gt; ListJobTracesV2JobsJobIdTracesGet(ListJobTracesV2JobsJobIdTracesGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List traces belonging to a job.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Jobs.ListJobTracesV2JobsJobIdTracesGet(new ListJobTracesV2JobsJobIdTracesGetRequest
    {
        JobId = Guid.Parse("00000000-0000-0000-0000-000000000000"),
    });
    // TODO: Handle 'response' of type PaginatedResponseTraceResponse
}
catch (ApiException<ListJobTracesV2JobsJobIdTracesGetError> ex)
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

<code>[ListJobTracesV2JobsJobIdTracesGetRequest](src/Hud/Requests/Jobs/ListJobTracesV2JobsJobIdTracesGetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PaginatedResponseTraceResponse](src/Hud/Models/PaginatedResponseTraceResponse.cs)</code>

**OnError**: <code>[ApiException](src/Hud/Core/Exceptions/ApiException.cs)&lt;[ListJobTracesV2JobsJobIdTracesGetError](src/Hud/Errors/ListJobTracesV2JobsJobIdTracesGetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;PaginatedResponseJobResponse&gt; ListJobsV2JobsGet(ListJobsV2JobsGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List jobs for the caller's team, optionally filtered by taskset or Project.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Jobs.ListJobsV2JobsGet(new ListJobsV2JobsGetRequest());
    // TODO: Handle 'response' of type PaginatedResponseJobResponse
}
catch (ApiException<ListJobsV2JobsGetError> ex)
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

<code>[ListJobsV2JobsGetRequest](src/Hud/Requests/Jobs/ListJobsV2JobsGetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PaginatedResponseJobResponse](src/Hud/Models/PaginatedResponseJobResponse.cs)</code>

**OnError**: <code>[ApiException](src/Hud/Core/Exceptions/ApiException.cs)&lt;[ListJobsV2JobsGetError](src/Hud/Errors/ListJobsV2JobsGetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;PublishJobResponse&gt; PublishJobV2JobsJobIdPublishPost(PublishJobV2JobsJobIdPublishPostRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Set ``jobs.public=true`` so the job is visible on the public taskset page.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Jobs.PublishJobV2JobsJobIdPublishPost(new PublishJobV2JobsJobIdPublishPostRequest
    {
        JobId = Guid.Parse("00000000-0000-0000-0000-000000000000"),
    });
    // TODO: Handle 'response' of type PublishJobResponse
}
catch (ApiException<PublishJobV2JobsJobIdPublishPostError> ex)
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

<code>[PublishJobV2JobsJobIdPublishPostRequest](src/Hud/Requests/Jobs/PublishJobV2JobsJobIdPublishPostRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PublishJobResponse](src/Hud/Models/PublishJobResponse.cs)</code>

**OnError**: <code>[ApiException](src/Hud/Core/Exceptions/ApiException.cs)&lt;[PublishJobV2JobsJobIdPublishPostError](src/Hud/Errors/PublishJobV2JobsJobIdPublishPostError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;BatchValidateResponse&gt; RevalidateJobV2JobsJobIdRevalidatePost(RevalidateJobV2JobsJobIdRevalidatePostRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Re-include every trace in this job in leaderboard calculations.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Jobs.RevalidateJobV2JobsJobIdRevalidatePost(
        new RevalidateJobV2JobsJobIdRevalidatePostRequest
        {
            JobId = Guid.Parse("00000000-0000-0000-0000-000000000000"),
        });
    // TODO: Handle 'response' of type BatchValidateResponse
}
catch (ApiException<RevalidateJobV2JobsJobIdRevalidatePostError> ex)
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

<code>[RevalidateJobV2JobsJobIdRevalidatePostRequest](src/Hud/Requests/Jobs/RevalidateJobV2JobsJobIdRevalidatePostRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[BatchValidateResponse](src/Hud/Models/BatchValidateResponse.cs)</code>

**OnError**: <code>[ApiException](src/Hud/Core/Exceptions/ApiException.cs)&lt;[RevalidateJobV2JobsJobIdRevalidatePostError](src/Hud/Errors/RevalidateJobV2JobsJobIdRevalidatePostError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;StatusResponse&gt; UnpublishJobV2JobsJobIdPublishDelete(UnpublishJobV2JobsJobIdPublishDeleteRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Set ``jobs.public=false``; the job and its traces return to invited-only visibility.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Jobs.UnpublishJobV2JobsJobIdPublishDelete(
        new UnpublishJobV2JobsJobIdPublishDeleteRequest { JobId = Guid.Parse("00000000-0000-0000-0000-000000000000") });
    // TODO: Handle 'response' of type StatusResponse
}
catch (ApiException<UnpublishJobV2JobsJobIdPublishDeleteError> ex)
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

<code>[UnpublishJobV2JobsJobIdPublishDeleteRequest](src/Hud/Requests/Jobs/UnpublishJobV2JobsJobIdPublishDeleteRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[StatusResponse](src/Hud/Models/StatusResponse.cs)</code>

**OnError**: <code>[ApiException](src/Hud/Core/Exceptions/ApiException.cs)&lt;[UnpublishJobV2JobsJobIdPublishDeleteError](src/Hud/Errors/UnpublishJobV2JobsJobIdPublishDeleteError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;JobResponse&gt; UpdateJobV2JobsJobIdPatch(UpdateJobV2JobsJobIdPatchRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update a job's mutable fields, such as its name.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Jobs.UpdateJobV2JobsJobIdPatch(new UpdateJobV2JobsJobIdPatchRequest
    {
        JobId = Guid.Parse("00000000-0000-0000-0000-000000000000"),
        Body = new JobUpdateRequest(),
    });
    // TODO: Handle 'response' of type JobResponse
}
catch (ApiException<UpdateJobV2JobsJobIdPatchError> ex)
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

<code>[UpdateJobV2JobsJobIdPatchRequest](src/Hud/Requests/Jobs/UpdateJobV2JobsJobIdPatchRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[JobResponse](src/Hud/Models/JobResponse.cs)</code>

**OnError**: <code>[ApiException](src/Hud/Core/Exceptions/ApiException.cs)&lt;[UpdateJobV2JobsJobIdPatchError](src/Hud/Errors/UpdateJobV2JobsJobIdPatchError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;JobImportTrajectoryResponse&gt; UploadImportedTrajectoryV2JobsImportJobIdTracesTraceIdTrajectoryPost(UploadImportedTrajectoryV2JobsImportJobIdTracesTraceIdTrajectoryPostRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Store an ATIF agent trajectory as an imported trace's telemetry.

Upload it before finishing the trace. A trace keeps the first trajectory
it receives; a repeated upload reports `ingested: false`.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Jobs.UploadImportedTrajectoryV2JobsImportJobIdTracesTraceIdTrajectoryPost(
        new UploadImportedTrajectoryV2JobsImportJobIdTracesTraceIdTrajectoryPostRequest
        {
            JobId = Guid.Parse("00000000-0000-0000-0000-000000000000"),
            TraceId = Guid.Parse("00000000-0000-0000-0000-000000000000"),
            Body = new AtifTrajectory
            {
                Agent = new AtifAgent { Name = "some example string", Version = "some example string" },
                Steps = [
                    new AtifStep
                    {
                        StepId = 1,
                        Source = SourceHudPlatformJobsApi.System,
                        Message = "some example string",
                    },
                ],
            },
        });
    // TODO: Handle 'response' of type JobImportTrajectoryResponse
}
catch (ApiException<UploadImportedTrajectoryV2JobsImportJobIdTracesTraceIdTrajectoryPostError> ex)
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

<code>[UploadImportedTrajectoryV2JobsImportJobIdTracesTraceIdTrajectoryPostRequest](src/Hud/Requests/Jobs/UploadImportedTrajectoryV2JobsImportJobIdTracesTraceIdTrajectoryPostRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[JobImportTrajectoryResponse](src/Hud/Models/JobImportTrajectoryResponse.cs)</code>

**OnError**: <code>[ApiException](src/Hud/Core/Exceptions/ApiException.cs)&lt;[UploadImportedTrajectoryV2JobsImportJobIdTracesTraceIdTrajectoryPostError](src/Hud/Errors/UploadImportedTrajectoryV2JobsImportJobIdTracesTraceIdTrajectoryPostError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## LimitsApi

> Source: [LimitsApi](src/Hud/Api/LimitsApi.cs)

<details>
<summary><code>Task&lt;SpendLimitItem&gt; CreateSpendLimitV2LimitsPost(CreateSpendLimitV2LimitsPostRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a team, member, or API-key limit, or a team percentage alert.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.LimitsApi.CreateSpendLimitV2LimitsPost(new CreateSpendLimitV2LimitsPostRequest
    {
        Body = new SpendLimitCreateRequest { Interval = SpendInterval.Week, Action = SpendLimitAction.Alert },
    });
    // TODO: Handle 'response' of type SpendLimitItem
}
catch (ApiException<CreateSpendLimitV2LimitsPostError> ex)
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

<code>[CreateSpendLimitV2LimitsPostRequest](src/Hud/Requests/LimitsApi/CreateSpendLimitV2LimitsPostRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SpendLimitItem](src/Hud/Models/SpendLimitItem.cs)</code>

**OnError**: <code>[ApiException](src/Hud/Core/Exceptions/ApiException.cs)&lt;[CreateSpendLimitV2LimitsPostError](src/Hud/Errors/CreateSpendLimitV2LimitsPostError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task DeleteSpendLimitV2LimitsLimitIdDelete(DeleteSpendLimitV2LimitsLimitIdDeleteRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete a spend limit.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.LimitsApi.DeleteSpendLimitV2LimitsLimitIdDelete(new DeleteSpendLimitV2LimitsLimitIdDeleteRequest
    {
        LimitId = Guid.Parse("00000000-0000-0000-0000-000000000000"),
    });
}
catch (ApiException<DeleteSpendLimitV2LimitsLimitIdDeleteError> ex)
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

<code>[DeleteSpendLimitV2LimitsLimitIdDeleteRequest](src/Hud/Requests/LimitsApi/DeleteSpendLimitV2LimitsLimitIdDeleteRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/Hud/Core/Exceptions/ApiException.cs)&lt;[DeleteSpendLimitV2LimitsLimitIdDeleteError](src/Hud/Errors/DeleteSpendLimitV2LimitsLimitIdDeleteError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;SpendLimitListResponse&gt; ListSpendLimitsV2LimitsGet(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List the spend limits visible to the caller with current-period spend.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.LimitsApi.ListSpendLimitsV2LimitsGet();
    // TODO: Handle 'response' of type SpendLimitListResponse
}
catch (ApiException<ListSpendLimitsV2LimitsGetError> ex)
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

**OnSuccess**: <code>[SpendLimitListResponse](src/Hud/Models/SpendLimitListResponse.cs)</code>

**OnError**: <code>[ApiException](src/Hud/Core/Exceptions/ApiException.cs)&lt;[ListSpendLimitsV2LimitsGetError](src/Hud/Errors/ListSpendLimitsV2LimitsGetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;SpendLimitItem&gt; ResetSpendLimitV2LimitsLimitIdResetPost(ResetSpendLimitV2LimitsLimitIdResetPostRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Start a new spend window on a blocking limit. Ledger rows are unchanged.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.LimitsApi.ResetSpendLimitV2LimitsLimitIdResetPost(
        new ResetSpendLimitV2LimitsLimitIdResetPostRequest
        {
            LimitId = Guid.Parse("00000000-0000-0000-0000-000000000000"),
        });
    // TODO: Handle 'response' of type SpendLimitItem
}
catch (ApiException<ResetSpendLimitV2LimitsLimitIdResetPostError> ex)
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

<code>[ResetSpendLimitV2LimitsLimitIdResetPostRequest](src/Hud/Requests/LimitsApi/ResetSpendLimitV2LimitsLimitIdResetPostRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SpendLimitItem](src/Hud/Models/SpendLimitItem.cs)</code>

**OnError**: <code>[ApiException](src/Hud/Core/Exceptions/ApiException.cs)&lt;[ResetSpendLimitV2LimitsLimitIdResetPostError](src/Hud/Errors/ResetSpendLimitV2LimitsLimitIdResetPostError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;SpendLimitItem&gt; UpdateSpendLimitV2LimitsLimitIdPatch(UpdateSpendLimitV2LimitsLimitIdPatchRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update an absolute amount, percentage threshold, or enabled state.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.LimitsApi.UpdateSpendLimitV2LimitsLimitIdPatch(
        new UpdateSpendLimitV2LimitsLimitIdPatchRequest
        {
            LimitId = Guid.Parse("00000000-0000-0000-0000-000000000000"),
            Body = new SpendLimitUpdateRequest(),
        });
    // TODO: Handle 'response' of type SpendLimitItem
}
catch (ApiException<UpdateSpendLimitV2LimitsLimitIdPatchError> ex)
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

<code>[UpdateSpendLimitV2LimitsLimitIdPatchRequest](src/Hud/Requests/LimitsApi/UpdateSpendLimitV2LimitsLimitIdPatchRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SpendLimitItem](src/Hud/Models/SpendLimitItem.cs)</code>

**OnError**: <code>[ApiException](src/Hud/Core/Exceptions/ApiException.cs)&lt;[UpdateSpendLimitV2LimitsLimitIdPatchError](src/Hud/Errors/UpdateSpendLimitV2LimitsLimitIdPatchError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## ModelsApi

> Source: [ModelsApi](src/Hud/Api/ModelsApi.cs)

<details>
<summary><code>Task&lt;ModelResponse&gt; ForkModelV2ModelsForkPost(ForkModelV2ModelsForkPostRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create an owned trainable model derived from a source trainable model.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.ModelsApi.ForkModelV2ModelsForkPost(new ForkModelV2ModelsForkPostRequest
    {
        Body = new ModelForkRequest
        {
            SourceModelId = Guid.Parse("00000000-0000-0000-0000-000000000000"),
            Name = "some example string",
        },
    });
    // TODO: Handle 'response' of type ModelResponse
}
catch (ApiException<ForkModelV2ModelsForkPostError> ex)
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

<code>[ForkModelV2ModelsForkPostRequest](src/Hud/Requests/ModelsApi/ForkModelV2ModelsForkPostRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ModelResponse](src/Hud/Models/ModelResponse.cs)</code>

**OnError**: <code>[ApiException](src/Hud/Core/Exceptions/ApiException.cs)&lt;[ForkModelV2ModelsForkPostError](src/Hud/Errors/ForkModelV2ModelsForkPostError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ModelResponse&gt; GetModelV2ModelsModelIdGet(GetModelV2ModelsModelIdGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a catalog model by id.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.ModelsApi.GetModelV2ModelsModelIdGet(new GetModelV2ModelsModelIdGetRequest
    {
        ModelId = Guid.Parse("00000000-0000-0000-0000-000000000000"),
    });
    // TODO: Handle 'response' of type ModelResponse
}
catch (ApiException<GetModelV2ModelsModelIdGetError> ex)
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

<code>[GetModelV2ModelsModelIdGetRequest](src/Hud/Requests/ModelsApi/GetModelV2ModelsModelIdGetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ModelResponse](src/Hud/Models/ModelResponse.cs)</code>

**OnError**: <code>[ApiException](src/Hud/Core/Exceptions/ApiException.cs)&lt;[GetModelV2ModelsModelIdGetError](src/Hud/Errors/GetModelV2ModelsModelIdGetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;IReadOnlyList&lt;CheckpointTraceRow&gt;&gt; ListCheckpointTracesV2ModelsModelIdCheckpointsCheckpointIdTracesGet(ListCheckpointTracesV2ModelsModelIdCheckpointsCheckpointIdTracesGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List recent traces produced by a specific model checkpoint.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.ModelsApi.ListCheckpointTracesV2ModelsModelIdCheckpointsCheckpointIdTracesGet(
        new ListCheckpointTracesV2ModelsModelIdCheckpointsCheckpointIdTracesGetRequest
        {
            ModelId = Guid.Parse("00000000-0000-0000-0000-000000000000"),
            CheckpointId = Guid.Parse("00000000-0000-0000-0000-000000000000"),
        });
    // TODO: Handle 'response' of type IReadOnlyList<CheckpointTraceRow>
}
catch (ApiException<ListCheckpointTracesV2ModelsModelIdCheckpointsCheckpointIdTracesGetError> ex)
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

<code>[ListCheckpointTracesV2ModelsModelIdCheckpointsCheckpointIdTracesGetRequest](src/Hud/Requests/ModelsApi/ListCheckpointTracesV2ModelsModelIdCheckpointsCheckpointIdTracesGetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>IReadOnlyList&lt;[CheckpointTraceRow](src/Hud/Models/CheckpointTraceRow.cs)&gt;</code>

**OnError**: <code>[ApiException](src/Hud/Core/Exceptions/ApiException.cs)&lt;[ListCheckpointTracesV2ModelsModelIdCheckpointsCheckpointIdTracesGetError](src/Hud/Errors/ListCheckpointTracesV2ModelsModelIdCheckpointsCheckpointIdTracesGetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;IReadOnlyList&lt;CheckpointResponse&gt;&gt; ListModelCheckpointsV2ModelsModelIdCheckpointsGet(ListModelCheckpointsV2ModelsModelIdCheckpointsGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List a trainable model's checkpoint tree.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.ModelsApi.ListModelCheckpointsV2ModelsModelIdCheckpointsGet(
        new ListModelCheckpointsV2ModelsModelIdCheckpointsGetRequest
        {
            ModelId = Guid.Parse("00000000-0000-0000-0000-000000000000"),
        });
    // TODO: Handle 'response' of type IReadOnlyList<CheckpointResponse>
}
catch (ApiException<ListModelCheckpointsV2ModelsModelIdCheckpointsGetError> ex)
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

<code>[ListModelCheckpointsV2ModelsModelIdCheckpointsGetRequest](src/Hud/Requests/ModelsApi/ListModelCheckpointsV2ModelsModelIdCheckpointsGetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>IReadOnlyList&lt;[CheckpointResponse](src/Hud/Models/CheckpointResponse.cs)&gt;</code>

**OnError**: <code>[ApiException](src/Hud/Core/Exceptions/ApiException.cs)&lt;[ListModelCheckpointsV2ModelsModelIdCheckpointsGetError](src/Hud/Errors/ListModelCheckpointsV2ModelsModelIdCheckpointsGetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;PaginatedResponseModelInferenceLogEntry&gt; ListModelInferenceLogsV2ModelsModelIdLogsGet(ListModelInferenceLogsV2ModelsModelIdLogsGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List the caller team's gateway inference logs for a model, excluding QA analysis calls.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.ModelsApi.ListModelInferenceLogsV2ModelsModelIdLogsGet(
        new ListModelInferenceLogsV2ModelsModelIdLogsGetRequest
        {
            ModelId = Guid.Parse("00000000-0000-0000-0000-000000000000"),
        });
    // TODO: Handle 'response' of type PaginatedResponseModelInferenceLogEntry
}
catch (ApiException<ListModelInferenceLogsV2ModelsModelIdLogsGetError> ex)
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

<code>[ListModelInferenceLogsV2ModelsModelIdLogsGetRequest](src/Hud/Requests/ModelsApi/ListModelInferenceLogsV2ModelsModelIdLogsGetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PaginatedResponseModelInferenceLogEntry](src/Hud/Models/PaginatedResponseModelInferenceLogEntry.cs)</code>

**OnError**: <code>[ApiException](src/Hud/Core/Exceptions/ApiException.cs)&lt;[ListModelInferenceLogsV2ModelsModelIdLogsGetError](src/Hud/Errors/ListModelInferenceLogsV2ModelsModelIdLogsGetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;PaginatedResponseModelResponse&gt; ListModelsV2ModelsGet(ListModelsV2ModelsGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List catalog models visible to the caller.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.ModelsApi.ListModelsV2ModelsGet(new ListModelsV2ModelsGetRequest());
    // TODO: Handle 'response' of type PaginatedResponseModelResponse
}
catch (ApiException<ListModelsV2ModelsGetError> ex)
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

<code>[ListModelsV2ModelsGetRequest](src/Hud/Requests/ModelsApi/ListModelsV2ModelsGetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PaginatedResponseModelResponse](src/Hud/Models/PaginatedResponseModelResponse.cs)</code>

**OnError**: <code>[ApiException](src/Hud/Core/Exceptions/ApiException.cs)&lt;[ListModelsV2ModelsGetError](src/Hud/Errors/ListModelsV2ModelsGetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ModelResultsResponse&gt; ModelResultsV2ModelsModelIdResultsGet(ModelResultsV2ModelsModelIdResultsGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get per-taskset evaluation results for a model's checkpoints.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.ModelsApi.ModelResultsV2ModelsModelIdResultsGet(
        new ModelResultsV2ModelsModelIdResultsGetRequest
        {
            ModelId = Guid.Parse("00000000-0000-0000-0000-000000000000"),
        });
    // TODO: Handle 'response' of type ModelResultsResponse
}
catch (ApiException<ModelResultsV2ModelsModelIdResultsGetError> ex)
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

<code>[ModelResultsV2ModelsModelIdResultsGetRequest](src/Hud/Requests/ModelsApi/ModelResultsV2ModelsModelIdResultsGetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ModelResultsResponse](src/Hud/Models/ModelResultsResponse.cs)</code>

**OnError**: <code>[ApiException](src/Hud/Core/Exceptions/ApiException.cs)&lt;[ModelResultsV2ModelsModelIdResultsGetError](src/Hud/Errors/ModelResultsV2ModelsModelIdResultsGetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;SuggestedTasksetsResponse&gt; ModelSuggestedTasksetsV2ModelsModelIdSuggestedTasksetsGet(ModelSuggestedTasksetsV2ModelsModelIdSuggestedTasksetsGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Suggest tasksets to evaluate or train a model on.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.ModelsApi.ModelSuggestedTasksetsV2ModelsModelIdSuggestedTasksetsGet(
        new ModelSuggestedTasksetsV2ModelsModelIdSuggestedTasksetsGetRequest
        {
            ModelId = Guid.Parse("00000000-0000-0000-0000-000000000000"),
        });
    // TODO: Handle 'response' of type SuggestedTasksetsResponse
}
catch (ApiException<ModelSuggestedTasksetsV2ModelsModelIdSuggestedTasksetsGetError> ex)
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

<code>[ModelSuggestedTasksetsV2ModelsModelIdSuggestedTasksetsGetRequest](src/Hud/Requests/ModelsApi/ModelSuggestedTasksetsV2ModelsModelIdSuggestedTasksetsGetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SuggestedTasksetsResponse](src/Hud/Models/SuggestedTasksetsResponse.cs)</code>

**OnError**: <code>[ApiException](src/Hud/Core/Exceptions/ApiException.cs)&lt;[ModelSuggestedTasksetsV2ModelsModelIdSuggestedTasksetsGetError](src/Hud/Errors/ModelSuggestedTasksetsV2ModelsModelIdSuggestedTasksetsGetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ModelResponse&gt; ResolveModelV2ModelsResolveGet(ResolveModelV2ModelsResolveGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Resolve a model string (slug or id) to its catalog record.

General slug→id lookup: any client holding a model string (e.g. a trainable
model's gateway slug) can map it to the id and metadata. Declared before
``/{model_id}`` so the literal ``resolve`` path is not parsed as an id; a
query param (not a path segment) so slugs with ``/`` or ``:`` need no
encoding. Team-scoping still hides other teams' private fine-tunes.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.ModelsApi.ResolveModelV2ModelsResolveGet(new ResolveModelV2ModelsResolveGetRequest
    {
        Model = "some example string",
    });
    // TODO: Handle 'response' of type ModelResponse
}
catch (ApiException<ResolveModelV2ModelsResolveGetError> ex)
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

<code>[ResolveModelV2ModelsResolveGetRequest](src/Hud/Requests/ModelsApi/ResolveModelV2ModelsResolveGetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ModelResponse](src/Hud/Models/ModelResponse.cs)</code>

**OnError**: <code>[ApiException](src/Hud/Core/Exceptions/ApiException.cs)&lt;[ResolveModelV2ModelsResolveGetError](src/Hud/Errors/ResolveModelV2ModelsResolveGetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ModelResponse&gt; SetModelHeadV2ModelsModelIdHeadPut(SetModelHeadV2ModelsModelIdHeadPutRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Point the model's active checkpoint (head) at one of its checkpoint nodes.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.ModelsApi.SetModelHeadV2ModelsModelIdHeadPut(
        new SetModelHeadV2ModelsModelIdHeadPutRequest
        {
            ModelId = Guid.Parse("00000000-0000-0000-0000-000000000000"),
            Body = new SetHeadRequest { CheckpointId = Guid.Parse("00000000-0000-0000-0000-000000000000") },
        });
    // TODO: Handle 'response' of type ModelResponse
}
catch (ApiException<SetModelHeadV2ModelsModelIdHeadPutError> ex)
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

<code>[SetModelHeadV2ModelsModelIdHeadPutRequest](src/Hud/Requests/ModelsApi/SetModelHeadV2ModelsModelIdHeadPutRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ModelResponse](src/Hud/Models/ModelResponse.cs)</code>

**OnError**: <code>[ApiException](src/Hud/Core/Exceptions/ApiException.cs)&lt;[SetModelHeadV2ModelsModelIdHeadPutError](src/Hud/Errors/SetModelHeadV2ModelsModelIdHeadPutError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ModelResponse&gt; UpdateModelV2ModelsModelIdPatch(UpdateModelV2ModelsModelIdPatchRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update a model's catalog fields, such as name or visibility.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.ModelsApi.UpdateModelV2ModelsModelIdPatch(new UpdateModelV2ModelsModelIdPatchRequest
    {
        ModelId = Guid.Parse("00000000-0000-0000-0000-000000000000"),
        Body = new ModelUpdate(),
    });
    // TODO: Handle 'response' of type ModelResponse
}
catch (ApiException<UpdateModelV2ModelsModelIdPatchError> ex)
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

<code>[UpdateModelV2ModelsModelIdPatchRequest](src/Hud/Requests/ModelsApi/UpdateModelV2ModelsModelIdPatchRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ModelResponse](src/Hud/Models/ModelResponse.cs)</code>

**OnError**: <code>[ApiException](src/Hud/Core/Exceptions/ApiException.cs)&lt;[UpdateModelV2ModelsModelIdPatchError](src/Hud/Errors/UpdateModelV2ModelsModelIdPatchError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## OAuth

> Source: [OAuth](src/Hud/Api/OAuth.cs)

<details>
<summary><code>Task&lt;OAuthJoinResponse&gt; JoinOauthAppTeamV2OauthJoinPost(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Make the OAuth access token's user a member of its application's team.

Idempotent. A user who is already a member keeps their role; a new user
joins as an external member, whom a team admin can promote. A user who was
removed from the team is refused until a team admin invites them again.
Every other endpoint answers ``principal_not_found`` for the token until
its user has joined.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.OAuth.JoinOauthAppTeamV2OauthJoinPost();
    // TODO: Handle 'response' of type OAuthJoinResponse
}
catch (ApiException<JoinOauthAppTeamV2OauthJoinPostError> ex)
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

**OnSuccess**: <code>[OAuthJoinResponse](src/Hud/Models/OAuthJoinResponse.cs)</code>

**OnError**: <code>[ApiException](src/Hud/Core/Exceptions/ApiException.cs)&lt;[JoinOauthAppTeamV2OauthJoinPostError](src/Hud/Errors/JoinOauthAppTeamV2OauthJoinPostError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## RegistryApi

> Source: [RegistryApi](src/Hud/Api/RegistryApi.cs)

<details>
<summary><code>Task&lt;RegistrySourceUrlResponse&gt; GetRegistrySourceUrlV2RegistryRegistryIdSourceUrlGet(GetRegistrySourceUrlV2RegistryRegistryIdSourceUrlGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a presigned download URL for the registry's source archive.

Readers outside the owning team download only the latest build of a public environment
whose owner published its source.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.RegistryApi.GetRegistrySourceUrlV2RegistryRegistryIdSourceUrlGet(
        new GetRegistrySourceUrlV2RegistryRegistryIdSourceUrlGetRequest
        {
            RegistryId = Guid.Parse("00000000-0000-0000-0000-000000000000"),
        });
    // TODO: Handle 'response' of type RegistrySourceUrlResponse
}
catch (ApiException<GetRegistrySourceUrlV2RegistryRegistryIdSourceUrlGetError> ex)
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

<code>[GetRegistrySourceUrlV2RegistryRegistryIdSourceUrlGetRequest](src/Hud/Requests/RegistryApi/GetRegistrySourceUrlV2RegistryRegistryIdSourceUrlGetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[RegistrySourceUrlResponse](src/Hud/Models/RegistrySourceUrlResponse.cs)</code>

**OnError**: <code>[ApiException](src/Hud/Core/Exceptions/ApiException.cs)&lt;[GetRegistrySourceUrlV2RegistryRegistryIdSourceUrlGetError](src/Hud/Errors/GetRegistrySourceUrlV2RegistryRegistryIdSourceUrlGetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;RegistryDetailResponse&gt; GetRegistryV2RegistryRegistryIdGet(GetRegistryV2RegistryRegistryIdGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a registry by id with its latest build details.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.RegistryApi.GetRegistryV2RegistryRegistryIdGet(
        new GetRegistryV2RegistryRegistryIdGetRequest
        {
            RegistryId = Guid.Parse("00000000-0000-0000-0000-000000000000"),
        });
    // TODO: Handle 'response' of type RegistryDetailResponse
}
catch (ApiException<GetRegistryV2RegistryRegistryIdGetError> ex)
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

<code>[GetRegistryV2RegistryRegistryIdGetRequest](src/Hud/Requests/RegistryApi/GetRegistryV2RegistryRegistryIdGetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[RegistryDetailResponse](src/Hud/Models/RegistryDetailResponse.cs)</code>

**OnError**: <code>[ApiException](src/Hud/Core/Exceptions/ApiException.cs)&lt;[GetRegistryV2RegistryRegistryIdGetError](src/Hud/Errors/GetRegistryV2RegistryRegistryIdGetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;PaginatedResponseRegistryDetailResponse&gt; ListRegistriesV2RegistryGet(ListRegistriesV2RegistryGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List registries visible to the caller, with search, ownership, and sort filters.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.RegistryApi.ListRegistriesV2RegistryGet(new ListRegistriesV2RegistryGetRequest());
    // TODO: Handle 'response' of type PaginatedResponseRegistryDetailResponse
}
catch (ApiException<ListRegistriesV2RegistryGetError> ex)
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

<code>[ListRegistriesV2RegistryGetRequest](src/Hud/Requests/RegistryApi/ListRegistriesV2RegistryGetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PaginatedResponseRegistryDetailResponse](src/Hud/Models/PaginatedResponseRegistryDetailResponse.cs)</code>

**OnError**: <code>[ApiException](src/Hud/Core/Exceptions/ApiException.cs)&lt;[ListRegistriesV2RegistryGetError](src/Hud/Errors/ListRegistriesV2RegistryGetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;IReadOnlyList&lt;ScenarioResponse&gt;&gt; ListRegistryScenariosV2RegistryRegistryIdScenariosGet(ListRegistryScenariosV2RegistryRegistryIdScenariosGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List scenarios for a registry build (latest build by default).

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.RegistryApi.ListRegistryScenariosV2RegistryRegistryIdScenariosGet(
        new ListRegistryScenariosV2RegistryRegistryIdScenariosGetRequest
        {
            RegistryId = Guid.Parse("00000000-0000-0000-0000-000000000000"),
        });
    // TODO: Handle 'response' of type IReadOnlyList<ScenarioResponse>
}
catch (ApiException<ListRegistryScenariosV2RegistryRegistryIdScenariosGetError> ex)
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

<code>[ListRegistryScenariosV2RegistryRegistryIdScenariosGetRequest](src/Hud/Requests/RegistryApi/ListRegistryScenariosV2RegistryRegistryIdScenariosGetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>IReadOnlyList&lt;[ScenarioResponse](src/Hud/Models/ScenarioResponse.cs)&gt;</code>

**OnError**: <code>[ApiException](src/Hud/Core/Exceptions/ApiException.cs)&lt;[ListRegistryScenariosV2RegistryRegistryIdScenariosGetError](src/Hud/Errors/ListRegistryScenariosV2RegistryRegistryIdScenariosGetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Storage

> Source: [Storage](src/Hud/Api/Storage.cs)

<details>
<summary><code>Task&lt;TraceStorageObjectListResponse&gt; ListTraceArtifactsV2StorageTracesTraceIdArtifactsGet(ListTraceArtifactsV2StorageTracesTraceIdArtifactsGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List trace-owned screenshots, recordings, and captured files.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Storage.ListTraceArtifactsV2StorageTracesTraceIdArtifactsGet(
        new ListTraceArtifactsV2StorageTracesTraceIdArtifactsGetRequest
        {
            TraceId = Guid.Parse("00000000-0000-0000-0000-000000000000"),
        });
    // TODO: Handle 'response' of type TraceStorageObjectListResponse
}
catch (ApiException<ListTraceArtifactsV2StorageTracesTraceIdArtifactsGetError> ex)
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

<code>[ListTraceArtifactsV2StorageTracesTraceIdArtifactsGetRequest](src/Hud/Requests/Storage/ListTraceArtifactsV2StorageTracesTraceIdArtifactsGetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[TraceStorageObjectListResponse](src/Hud/Models/TraceStorageObjectListResponse.cs)</code>

**OnError**: <code>[ApiException](src/Hud/Core/Exceptions/ApiException.cs)&lt;[ListTraceArtifactsV2StorageTracesTraceIdArtifactsGetError](src/Hud/Errors/ListTraceArtifactsV2StorageTracesTraceIdArtifactsGetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;TraceWorkspaceChangesResponse&gt; TraceWorkspaceChangesV2StorageTracesTraceIdWorkspaceChangesGet(TraceWorkspaceChangesV2StorageTracesTraceIdWorkspaceChangesGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Return filetracking snapshots, patches, and captured files for a trace.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Storage.TraceWorkspaceChangesV2StorageTracesTraceIdWorkspaceChangesGet(
        new TraceWorkspaceChangesV2StorageTracesTraceIdWorkspaceChangesGetRequest
        {
            TraceId = Guid.Parse("00000000-0000-0000-0000-000000000000"),
        });
    // TODO: Handle 'response' of type TraceWorkspaceChangesResponse
}
catch (ApiException<TraceWorkspaceChangesV2StorageTracesTraceIdWorkspaceChangesGetError> ex)
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

<code>[TraceWorkspaceChangesV2StorageTracesTraceIdWorkspaceChangesGetRequest](src/Hud/Requests/Storage/TraceWorkspaceChangesV2StorageTracesTraceIdWorkspaceChangesGetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[TraceWorkspaceChangesResponse](src/Hud/Models/TraceWorkspaceChangesResponse.cs)</code>

**OnError**: <code>[ApiException](src/Hud/Core/Exceptions/ApiException.cs)&lt;[TraceWorkspaceChangesV2StorageTracesTraceIdWorkspaceChangesGetError](src/Hud/Errors/TraceWorkspaceChangesV2StorageTracesTraceIdWorkspaceChangesGetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;TraceWorkspaceFilesResponse&gt; TraceWorkspaceFilesV2StorageTracesTraceIdWorkspaceFilesGet(TraceWorkspaceFilesV2StorageTracesTraceIdWorkspaceFilesGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Return final captured file contents for a trace workspace.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Storage.TraceWorkspaceFilesV2StorageTracesTraceIdWorkspaceFilesGet(
        new TraceWorkspaceFilesV2StorageTracesTraceIdWorkspaceFilesGetRequest
        {
            TraceId = Guid.Parse("00000000-0000-0000-0000-000000000000"),
        });
    // TODO: Handle 'response' of type TraceWorkspaceFilesResponse
}
catch (ApiException<TraceWorkspaceFilesV2StorageTracesTraceIdWorkspaceFilesGetError> ex)
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

<code>[TraceWorkspaceFilesV2StorageTracesTraceIdWorkspaceFilesGetRequest](src/Hud/Requests/Storage/TraceWorkspaceFilesV2StorageTracesTraceIdWorkspaceFilesGetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[TraceWorkspaceFilesResponse](src/Hud/Models/TraceWorkspaceFilesResponse.cs)</code>

**OnError**: <code>[ApiException](src/Hud/Core/Exceptions/ApiException.cs)&lt;[TraceWorkspaceFilesV2StorageTracesTraceIdWorkspaceFilesGetError](src/Hud/Errors/TraceWorkspaceFilesV2StorageTracesTraceIdWorkspaceFilesGetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Tasks

> Source: [Tasks](src/Hud/Api/Tasks.cs)

<details>
<summary><code>Task&lt;BulkStatusResponse&gt; BulkUpdateTaskStageV2TasksStagePatch(BulkUpdateTaskStageV2TasksStagePatchRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Bulk lifecycle-stage move (advance one stage / send back); non-atomic.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Tasks.BulkUpdateTaskStageV2TasksStagePatch(
        new BulkUpdateTaskStageV2TasksStagePatchRequest
        {
            Body = new BulkStageRequest
            {
                Ids = [Guid.Parse("00000000-0000-0000-0000-000000000000")],
                Stage = "some example string",
            },
        });
    // TODO: Handle 'response' of type BulkStatusResponse
}
catch (ApiException<BulkUpdateTaskStageV2TasksStagePatchError> ex)
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

<code>[BulkUpdateTaskStageV2TasksStagePatchRequest](src/Hud/Requests/Tasks/BulkUpdateTaskStageV2TasksStagePatchRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[BulkStatusResponse](src/Hud/Models/BulkStatusResponse.cs)</code>

**OnError**: <code>[ApiException](src/Hud/Core/Exceptions/ApiException.cs)&lt;[BulkUpdateTaskStageV2TasksStagePatchError](src/Hud/Errors/BulkUpdateTaskStageV2TasksStagePatchError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;BulkStatusResponse&gt; BulkUpdateTaskStatusV2TasksStatusPatch(BulkUpdateTaskStatusV2TasksStatusPatchRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Bulk status mutation; reviewer-only clear resets directly to pending; non-atomic.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Tasks.BulkUpdateTaskStatusV2TasksStatusPatch(
        new BulkUpdateTaskStatusV2TasksStatusPatchRequest { Body = new BulkStatusRequest() });
    // TODO: Handle 'response' of type BulkStatusResponse
}
catch (ApiException<BulkUpdateTaskStatusV2TasksStatusPatchError> ex)
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

<code>[BulkUpdateTaskStatusV2TasksStatusPatchRequest](src/Hud/Requests/Tasks/BulkUpdateTaskStatusV2TasksStatusPatchRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[BulkStatusResponse](src/Hud/Models/BulkStatusResponse.cs)</code>

**OnError**: <code>[ApiException](src/Hud/Core/Exceptions/ApiException.cs)&lt;[BulkUpdateTaskStatusV2TasksStatusPatchError](src/Hud/Errors/BulkUpdateTaskStatusV2TasksStatusPatchError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;TaskCommentItem&gt; CreateTaskCommentV2TasksTaskIdCommentsPost(CreateTaskCommentV2TasksTaskIdCommentsPostRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Add a comment to a task and notify mentioned users.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Tasks.CreateTaskCommentV2TasksTaskIdCommentsPost(
        new CreateTaskCommentV2TasksTaskIdCommentsPostRequest
        {
            TaskId = Guid.Parse("00000000-0000-0000-0000-000000000000"),
            Body = new CreateTaskCommentRequest { Body = "some example string" },
        });
    // TODO: Handle 'response' of type TaskCommentItem
}
catch (ApiException<CreateTaskCommentV2TasksTaskIdCommentsPostError> ex)
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

<code>[CreateTaskCommentV2TasksTaskIdCommentsPostRequest](src/Hud/Requests/Tasks/CreateTaskCommentV2TasksTaskIdCommentsPostRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[TaskCommentItem](src/Hud/Models/TaskCommentItem.cs)</code>

**OnError**: <code>[ApiException](src/Hud/Core/Exceptions/ApiException.cs)&lt;[CreateTaskCommentV2TasksTaskIdCommentsPostError](src/Hud/Errors/CreateTaskCommentV2TasksTaskIdCommentsPostError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task DeleteTaskCommentV2TasksTaskIdCommentsCommentIdDelete(DeleteTaskCommentV2TasksTaskIdCommentsCommentIdDeleteRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete a task comment.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.Tasks.DeleteTaskCommentV2TasksTaskIdCommentsCommentIdDelete(
        new DeleteTaskCommentV2TasksTaskIdCommentsCommentIdDeleteRequest
        {
            TaskId = Guid.Parse("00000000-0000-0000-0000-000000000000"),
            CommentId = Guid.Parse("00000000-0000-0000-0000-000000000000"),
        });
}
catch (ApiException<DeleteTaskCommentV2TasksTaskIdCommentsCommentIdDeleteError> ex)
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

<code>[DeleteTaskCommentV2TasksTaskIdCommentsCommentIdDeleteRequest](src/Hud/Requests/Tasks/DeleteTaskCommentV2TasksTaskIdCommentsCommentIdDeleteRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/Hud/Core/Exceptions/ApiException.cs)&lt;[DeleteTaskCommentV2TasksTaskIdCommentsCommentIdDeleteError](src/Hud/Errors/DeleteTaskCommentV2TasksTaskIdCommentsCommentIdDeleteError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;TaskActivityResponse&gt; GetTaskActivityV2TasksTaskIdActivityGet(GetTaskActivityV2TasksTaskIdActivityGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a task's combined activity feed of comments and state changes.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Tasks.GetTaskActivityV2TasksTaskIdActivityGet(
        new GetTaskActivityV2TasksTaskIdActivityGetRequest
        {
            TaskId = Guid.Parse("00000000-0000-0000-0000-000000000000"),
        });
    // TODO: Handle 'response' of type TaskActivityResponse
}
catch (ApiException<GetTaskActivityV2TasksTaskIdActivityGetError> ex)
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

<code>[GetTaskActivityV2TasksTaskIdActivityGetRequest](src/Hud/Requests/Tasks/GetTaskActivityV2TasksTaskIdActivityGetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[TaskActivityResponse](src/Hud/Models/TaskActivityResponse.cs)</code>

**OnError**: <code>[ApiException](src/Hud/Core/Exceptions/ApiException.cs)&lt;[GetTaskActivityV2TasksTaskIdActivityGetError](src/Hud/Errors/GetTaskActivityV2TasksTaskIdActivityGetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;TaskCommentsListResponse&gt; GetTaskCommentsV2TasksTaskIdCommentsGet(GetTaskCommentsV2TasksTaskIdCommentsGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List comments on a task.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Tasks.GetTaskCommentsV2TasksTaskIdCommentsGet(
        new GetTaskCommentsV2TasksTaskIdCommentsGetRequest
        {
            TaskId = Guid.Parse("00000000-0000-0000-0000-000000000000"),
        });
    // TODO: Handle 'response' of type TaskCommentsListResponse
}
catch (ApiException<GetTaskCommentsV2TasksTaskIdCommentsGetError> ex)
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

<code>[GetTaskCommentsV2TasksTaskIdCommentsGetRequest](src/Hud/Requests/Tasks/GetTaskCommentsV2TasksTaskIdCommentsGetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[TaskCommentsListResponse](src/Hud/Models/TaskCommentsListResponse.cs)</code>

**OnError**: <code>[ApiException](src/Hud/Core/Exceptions/ApiException.cs)&lt;[GetTaskCommentsV2TasksTaskIdCommentsGetError](src/Hud/Errors/GetTaskCommentsV2TasksTaskIdCommentsGetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ResponseGetTaskReadyCheckV2TasksTaskIdReadyCheckGet&gt; GetTaskReadyCheckV2TasksTaskIdReadyCheckGet(GetTaskReadyCheckV2TasksTaskIdReadyCheckGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Evaluate the taskset's ready requirements against the task's latest version.

Informational: the Ready click is not blocked server-side.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Tasks.GetTaskReadyCheckV2TasksTaskIdReadyCheckGet(
        new GetTaskReadyCheckV2TasksTaskIdReadyCheckGetRequest
        {
            TaskId = Guid.Parse("00000000-0000-0000-0000-000000000000"),
        });
    // TODO: Handle 'response' of type ResponseGetTaskReadyCheckV2TasksTaskIdReadyCheckGet
}
catch (ApiException<GetTaskReadyCheckV2TasksTaskIdReadyCheckGetError> ex)
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

<code>[GetTaskReadyCheckV2TasksTaskIdReadyCheckGetRequest](src/Hud/Requests/Tasks/GetTaskReadyCheckV2TasksTaskIdReadyCheckGetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ResponseGetTaskReadyCheckV2TasksTaskIdReadyCheckGet](src/Hud/Models/AnyOf/ResponseGetTaskReadyCheckV2TasksTaskIdReadyCheckGet.cs)</code>

**OnError**: <code>[ApiException](src/Hud/Core/Exceptions/ApiException.cs)&lt;[GetTaskReadyCheckV2TasksTaskIdReadyCheckGetError](src/Hud/Errors/GetTaskReadyCheckV2TasksTaskIdReadyCheckGetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;PaginatedResponseTaskTrace&gt; GetTaskTracesV2TasksTaskIdTracesGet(GetTaskTracesV2TasksTaskIdTracesGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List the task's traces, newest first, optionally for one version or model.

Callers without scoped access to the task receive traces from public jobs only.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Tasks.GetTaskTracesV2TasksTaskIdTracesGet(new GetTaskTracesV2TasksTaskIdTracesGetRequest
    {
        TaskId = Guid.Parse("00000000-0000-0000-0000-000000000000"),
    });
    // TODO: Handle 'response' of type PaginatedResponseTaskTrace
}
catch (ApiException<GetTaskTracesV2TasksTaskIdTracesGetError> ex)
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

<code>[GetTaskTracesV2TasksTaskIdTracesGetRequest](src/Hud/Requests/Tasks/GetTaskTracesV2TasksTaskIdTracesGetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PaginatedResponseTaskTrace](src/Hud/Models/PaginatedResponseTaskTrace.cs)</code>

**OnError**: <code>[ApiException](src/Hud/Core/Exceptions/ApiException.cs)&lt;[GetTaskTracesV2TasksTaskIdTracesGetError](src/Hud/Errors/GetTaskTracesV2TasksTaskIdTracesGetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;TaskWithVersionResponse&gt; GetTaskVersionV2TasksTaskIdVersionsVersionIdGet(GetTaskVersionV2TasksTaskIdVersionsVersionIdGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Task plus one of its versions, by version id.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Tasks.GetTaskVersionV2TasksTaskIdVersionsVersionIdGet(
        new GetTaskVersionV2TasksTaskIdVersionsVersionIdGetRequest
        {
            TaskId = Guid.Parse("00000000-0000-0000-0000-000000000000"),
            VersionId = Guid.Parse("00000000-0000-0000-0000-000000000000"),
        });
    // TODO: Handle 'response' of type TaskWithVersionResponse
}
catch (ApiException<GetTaskVersionV2TasksTaskIdVersionsVersionIdGetError> ex)
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

<code>[GetTaskVersionV2TasksTaskIdVersionsVersionIdGetRequest](src/Hud/Requests/Tasks/GetTaskVersionV2TasksTaskIdVersionsVersionIdGetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[TaskWithVersionResponse](src/Hud/Models/TaskWithVersionResponse.cs)</code>

**OnError**: <code>[ApiException](src/Hud/Core/Exceptions/ApiException.cs)&lt;[GetTaskVersionV2TasksTaskIdVersionsVersionIdGetError](src/Hud/Errors/GetTaskVersionV2TasksTaskIdVersionsVersionIdGetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;TaskCommentItem&gt; UpdateTaskCommentV2TasksTaskIdCommentsCommentIdPatch(UpdateTaskCommentV2TasksTaskIdCommentsCommentIdPatchRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Edit one of the caller's task comments.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Tasks.UpdateTaskCommentV2TasksTaskIdCommentsCommentIdPatch(
        new UpdateTaskCommentV2TasksTaskIdCommentsCommentIdPatchRequest
        {
            TaskId = Guid.Parse("00000000-0000-0000-0000-000000000000"),
            CommentId = Guid.Parse("00000000-0000-0000-0000-000000000000"),
            Body = new UpdateTaskCommentRequest { Body = "some example string" },
        });
    // TODO: Handle 'response' of type TaskCommentItem
}
catch (ApiException<UpdateTaskCommentV2TasksTaskIdCommentsCommentIdPatchError> ex)
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

<code>[UpdateTaskCommentV2TasksTaskIdCommentsCommentIdPatchRequest](src/Hud/Requests/Tasks/UpdateTaskCommentV2TasksTaskIdCommentsCommentIdPatchRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[TaskCommentItem](src/Hud/Models/TaskCommentItem.cs)</code>

**OnError**: <code>[ApiException](src/Hud/Core/Exceptions/ApiException.cs)&lt;[UpdateTaskCommentV2TasksTaskIdCommentsCommentIdPatchError](src/Hud/Errors/UpdateTaskCommentV2TasksTaskIdCommentsCommentIdPatchError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;TaskUploadResponse&gt; UploadTasksV2TasksUploadPost(UploadTasksV2TasksUploadPostRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Bulk-upload tasks into a taskset, creating the taskset if needed.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Tasks.UploadTasksV2TasksUploadPost(new UploadTasksV2TasksUploadPostRequest
    {
        Body = new TaskUploadRequest { Tasks = [new TaskUploadItem { Name = "some example string" }] },
    });
    // TODO: Handle 'response' of type TaskUploadResponse
}
catch (ApiException<UploadTasksV2TasksUploadPostError> ex)
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

<code>[UploadTasksV2TasksUploadPostRequest](src/Hud/Requests/Tasks/UploadTasksV2TasksUploadPostRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[TaskUploadResponse](src/Hud/Models/TaskUploadResponse.cs)</code>

**OnError**: <code>[ApiException](src/Hud/Core/Exceptions/ApiException.cs)&lt;[UploadTasksV2TasksUploadPostError](src/Hud/Errors/UploadTasksV2TasksUploadPostError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Teams

> Source: [Teams](src/Hud/Api/Teams.cs)

<details>
<summary><code>Task&lt;TeamInviteResponse&gt; InviteTeamMembersV2TeamInvitationsPost(InviteTeamMembersV2TeamInvitationsPostRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Invite email addresses to the caller's team; admin only.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Teams.InviteTeamMembersV2TeamInvitationsPost(
        new InviteTeamMembersV2TeamInvitationsPostRequest
        {
            Body = new TeamInviteRequest { Emails = ["user@example.com"], Role = Role.Admin },
        });
    // TODO: Handle 'response' of type TeamInviteResponse
}
catch (ApiException<InviteTeamMembersV2TeamInvitationsPostError> ex)
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

<code>[InviteTeamMembersV2TeamInvitationsPostRequest](src/Hud/Requests/Teams/InviteTeamMembersV2TeamInvitationsPostRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[TeamInviteResponse](src/Hud/Models/TeamInviteResponse.cs)</code>

**OnError**: <code>[ApiException](src/Hud/Core/Exceptions/ApiException.cs)&lt;[InviteTeamMembersV2TeamInvitationsPostError](src/Hud/Errors/InviteTeamMembersV2TeamInvitationsPostError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;TeamInvitationsResponse&gt; ListTeamInvitationsV2TeamInvitationsGet(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List the caller team's pending invitations; admin only.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Teams.ListTeamInvitationsV2TeamInvitationsGet();
    // TODO: Handle 'response' of type TeamInvitationsResponse
}
catch (ApiException<ListTeamInvitationsV2TeamInvitationsGetError> ex)
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

**OnSuccess**: <code>[TeamInvitationsResponse](src/Hud/Models/TeamInvitationsResponse.cs)</code>

**OnError**: <code>[ApiException](src/Hud/Core/Exceptions/ApiException.cs)&lt;[ListTeamInvitationsV2TeamInvitationsGetError](src/Hud/Errors/ListTeamInvitationsV2TeamInvitationsGetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;TeamMembersResponse&gt; ListTeamMembersV2TeamMembersGet(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List the members of the caller's team.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Teams.ListTeamMembersV2TeamMembersGet();
    // TODO: Handle 'response' of type TeamMembersResponse
}
catch (ApiException<ListTeamMembersV2TeamMembersGetError> ex)
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

**OnSuccess**: <code>[TeamMembersResponse](src/Hud/Models/TeamMembersResponse.cs)</code>

**OnError**: <code>[ApiException](src/Hud/Core/Exceptions/ApiException.cs)&lt;[ListTeamMembersV2TeamMembersGetError](src/Hud/Errors/ListTeamMembersV2TeamMembersGetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;TeamMemberBatchResponse&gt; RemoveTeamMembersV2TeamMembersBatchRemovePost(RemoveTeamMembersV2TeamMembersBatchRemovePostRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Remove other members from the caller's team and revoke their API keys; admin only.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Teams.RemoveTeamMembersV2TeamMembersBatchRemovePost(
        new RemoveTeamMembersV2TeamMembersBatchRemovePostRequest
        {
            Body = new TeamMemberRemoveRequest { MembershipIds = [1] },
        });
    // TODO: Handle 'response' of type TeamMemberBatchResponse
}
catch (ApiException<RemoveTeamMembersV2TeamMembersBatchRemovePostError> ex)
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

<code>[RemoveTeamMembersV2TeamMembersBatchRemovePostRequest](src/Hud/Requests/Teams/RemoveTeamMembersV2TeamMembersBatchRemovePostRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[TeamMemberBatchResponse](src/Hud/Models/TeamMemberBatchResponse.cs)</code>

**OnError**: <code>[ApiException](src/Hud/Core/Exceptions/ApiException.cs)&lt;[RemoveTeamMembersV2TeamMembersBatchRemovePostError](src/Hud/Errors/RemoveTeamMembersV2TeamMembersBatchRemovePostError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;TeamInvitationRevokeResponse&gt; RevokeTeamInvitationsV2TeamInvitationsBatchRevokePost(RevokeTeamInvitationsV2TeamInvitationsBatchRevokePostRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Revoke pending invitations to the caller's team; admin only.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Teams.RevokeTeamInvitationsV2TeamInvitationsBatchRevokePost(
        new RevokeTeamInvitationsV2TeamInvitationsBatchRevokePostRequest
        {
            Body = new TeamInvitationRevokeRequest { InvitationIds = ["some example string"] },
        });
    // TODO: Handle 'response' of type TeamInvitationRevokeResponse
}
catch (ApiException<RevokeTeamInvitationsV2TeamInvitationsBatchRevokePostError> ex)
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

<code>[RevokeTeamInvitationsV2TeamInvitationsBatchRevokePostRequest](src/Hud/Requests/Teams/RevokeTeamInvitationsV2TeamInvitationsBatchRevokePostRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[TeamInvitationRevokeResponse](src/Hud/Models/TeamInvitationRevokeResponse.cs)</code>

**OnError**: <code>[ApiException](src/Hud/Core/Exceptions/ApiException.cs)&lt;[RevokeTeamInvitationsV2TeamInvitationsBatchRevokePostError](src/Hud/Errors/RevokeTeamInvitationsV2TeamInvitationsBatchRevokePostError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;TeamMemberBatchResponse&gt; UpdateTeamMemberRolesV2TeamMembersBatchRolePost(UpdateTeamMemberRolesV2TeamMembersBatchRolePostRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Set the role of other members of the caller's team; admin only.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Teams.UpdateTeamMemberRolesV2TeamMembersBatchRolePost(
        new UpdateTeamMemberRolesV2TeamMembersBatchRolePostRequest
        {
            Body = new TeamMemberRoleUpdateRequest { MembershipIds = [1], Role = Role.Admin },
        });
    // TODO: Handle 'response' of type TeamMemberBatchResponse
}
catch (ApiException<UpdateTeamMemberRolesV2TeamMembersBatchRolePostError> ex)
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

<code>[UpdateTeamMemberRolesV2TeamMembersBatchRolePostRequest](src/Hud/Requests/Teams/UpdateTeamMemberRolesV2TeamMembersBatchRolePostRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[TeamMemberBatchResponse](src/Hud/Models/TeamMemberBatchResponse.cs)</code>

**OnError**: <code>[ApiException](src/Hud/Core/Exceptions/ApiException.cs)&lt;[UpdateTeamMemberRolesV2TeamMembersBatchRolePostError](src/Hud/Errors/UpdateTeamMemberRolesV2TeamMembersBatchRolePostError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Traces

> Source: [Traces](src/Hud/Api/Traces.cs)

<details>
<summary><code>Task&lt;TraceBatchValidateResponse&gt; BatchValidateTracesV2TraceBatchValidatePost(BatchValidateTracesV2TraceBatchValidatePostRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Mark a batch of traces as valid or invalid for leaderboard calculations.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Traces.BatchValidateTracesV2TraceBatchValidatePost(
        new BatchValidateTracesV2TraceBatchValidatePostRequest
        {
            Body = new TraceBatchValidateRequest
            {
                TraceIds = [Guid.Parse("00000000-0000-0000-0000-000000000000")],
                IsValid = true,
            },
        });
    // TODO: Handle 'response' of type TraceBatchValidateResponse
}
catch (ApiException<BatchValidateTracesV2TraceBatchValidatePostError> ex)
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

<code>[BatchValidateTracesV2TraceBatchValidatePostRequest](src/Hud/Requests/Traces/BatchValidateTracesV2TraceBatchValidatePostRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[TraceBatchValidateResponse](src/Hud/Models/TraceBatchValidateResponse.cs)</code>

**OnError**: <code>[ApiException](src/Hud/Core/Exceptions/ApiException.cs)&lt;[BatchValidateTracesV2TraceBatchValidatePostError](src/Hud/Errors/BatchValidateTracesV2TraceBatchValidatePostError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;TraceAnalysisContextResponse&gt; GetTraceAnalysisContextV2TraceTraceIdAnalysisContextGet(GetTraceAnalysisContextV2TraceTraceIdAnalysisContextGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Aggregate context for analysis environments (QA agents).

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Traces.GetTraceAnalysisContextV2TraceTraceIdAnalysisContextGet(
        new GetTraceAnalysisContextV2TraceTraceIdAnalysisContextGetRequest
        {
            TraceId = Guid.Parse("00000000-0000-0000-0000-000000000000"),
        });
    // TODO: Handle 'response' of type TraceAnalysisContextResponse
}
catch (ApiException<GetTraceAnalysisContextV2TraceTraceIdAnalysisContextGetError> ex)
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

<code>[GetTraceAnalysisContextV2TraceTraceIdAnalysisContextGetRequest](src/Hud/Requests/Traces/GetTraceAnalysisContextV2TraceTraceIdAnalysisContextGetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[TraceAnalysisContextResponse](src/Hud/Models/TraceAnalysisContextResponse.cs)</code>

**OnError**: <code>[ApiException](src/Hud/Core/Exceptions/ApiException.cs)&lt;[GetTraceAnalysisContextV2TraceTraceIdAnalysisContextGetError](src/Hud/Errors/GetTraceAnalysisContextV2TraceTraceIdAnalysisContextGetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;TraceAnalysisPromptResponse&gt; GetTraceAnalysisPromptV2TraceTraceIdAnalysisPromptGet(GetTraceAnalysisPromptV2TraceTraceIdAnalysisPromptGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Size-bounded debugging prompt: error, task, trajectory, and log tails.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Traces.GetTraceAnalysisPromptV2TraceTraceIdAnalysisPromptGet(
        new GetTraceAnalysisPromptV2TraceTraceIdAnalysisPromptGetRequest
        {
            TraceId = Guid.Parse("00000000-0000-0000-0000-000000000000"),
        });
    // TODO: Handle 'response' of type TraceAnalysisPromptResponse
}
catch (ApiException<GetTraceAnalysisPromptV2TraceTraceIdAnalysisPromptGetError> ex)
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

<code>[GetTraceAnalysisPromptV2TraceTraceIdAnalysisPromptGetRequest](src/Hud/Requests/Traces/GetTraceAnalysisPromptV2TraceTraceIdAnalysisPromptGetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[TraceAnalysisPromptResponse](src/Hud/Models/TraceAnalysisPromptResponse.cs)</code>

**OnError**: <code>[ApiException](src/Hud/Core/Exceptions/ApiException.cs)&lt;[GetTraceAnalysisPromptV2TraceTraceIdAnalysisPromptGetError](src/Hud/Errors/GetTraceAnalysisPromptV2TraceTraceIdAnalysisPromptGetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;EnvLogsResponse&gt; GetTraceEnvLogsV2TraceTraceIdEnvLogsGet(GetTraceEnvLogsV2TraceTraceIdEnvLogsGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Environment logs — the customer container's stdout/stderr.

Fetched from the daemon's S3 debug bundle.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Traces.GetTraceEnvLogsV2TraceTraceIdEnvLogsGet(
        new GetTraceEnvLogsV2TraceTraceIdEnvLogsGetRequest
        {
            TraceId = Guid.Parse("00000000-0000-0000-0000-000000000000"),
        });
    // TODO: Handle 'response' of type EnvLogsResponse
}
catch (ApiException<GetTraceEnvLogsV2TraceTraceIdEnvLogsGetError> ex)
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

<code>[GetTraceEnvLogsV2TraceTraceIdEnvLogsGetRequest](src/Hud/Requests/Traces/GetTraceEnvLogsV2TraceTraceIdEnvLogsGetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[EnvLogsResponse](src/Hud/Models/EnvLogsResponse.cs)</code>

**OnError**: <code>[ApiException](src/Hud/Core/Exceptions/ApiException.cs)&lt;[GetTraceEnvLogsV2TraceTraceIdEnvLogsGetError](src/Hud/Errors/GetTraceEnvLogsV2TraceTraceIdEnvLogsGetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;TraceEventsResponse&gt; GetTraceEventsV2TraceTraceIdEventsGet(GetTraceEventsV2TraceTraceIdEventsGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Projected, typed view of a trace's telemetry — drives the trace viewer.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Traces.GetTraceEventsV2TraceTraceIdEventsGet(
        new GetTraceEventsV2TraceTraceIdEventsGetRequest
        {
            TraceId = Guid.Parse("00000000-0000-0000-0000-000000000000"),
        });
    // TODO: Handle 'response' of type TraceEventsResponse
}
catch (ApiException<GetTraceEventsV2TraceTraceIdEventsGetError> ex)
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

<code>[GetTraceEventsV2TraceTraceIdEventsGetRequest](src/Hud/Requests/Traces/GetTraceEventsV2TraceTraceIdEventsGetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[TraceEventsResponse](src/Hud/Models/TraceEventsResponse.cs)</code>

**OnError**: <code>[ApiException](src/Hud/Core/Exceptions/ApiException.cs)&lt;[GetTraceEventsV2TraceTraceIdEventsGetError](src/Hud/Errors/GetTraceEventsV2TraceTraceIdEventsGetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;TraceInfoResponse&gt; GetTraceInfoV2TraceTraceIdInfoGet(GetTraceInfoV2TraceTraceIdInfoGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a trace with its task, job, and model context for the trace viewer.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Traces.GetTraceInfoV2TraceTraceIdInfoGet(new GetTraceInfoV2TraceTraceIdInfoGetRequest
    {
        TraceId = Guid.Parse("00000000-0000-0000-0000-000000000000"),
    });
    // TODO: Handle 'response' of type TraceInfoResponse
}
catch (ApiException<GetTraceInfoV2TraceTraceIdInfoGetError> ex)
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

<code>[GetTraceInfoV2TraceTraceIdInfoGetRequest](src/Hud/Requests/Traces/GetTraceInfoV2TraceTraceIdInfoGetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[TraceInfoResponse](src/Hud/Models/TraceInfoResponse.cs)</code>

**OnError**: <code>[ApiException](src/Hud/Core/Exceptions/ApiException.cs)&lt;[GetTraceInfoV2TraceTraceIdInfoGetError](src/Hud/Errors/GetTraceInfoV2TraceTraceIdInfoGetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;TraceLogsResponse&gt; GetTraceLogsV2TraceTraceIdLogsGet(GetTraceLogsV2TraceTraceIdLogsGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a trace's captured worker logs.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Traces.GetTraceLogsV2TraceTraceIdLogsGet(new GetTraceLogsV2TraceTraceIdLogsGetRequest
    {
        TraceId = Guid.Parse("00000000-0000-0000-0000-000000000000"),
    });
    // TODO: Handle 'response' of type TraceLogsResponse
}
catch (ApiException<GetTraceLogsV2TraceTraceIdLogsGetError> ex)
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

<code>[GetTraceLogsV2TraceTraceIdLogsGetRequest](src/Hud/Requests/Traces/GetTraceLogsV2TraceTraceIdLogsGetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[TraceLogsResponse](src/Hud/Models/TraceLogsResponse.cs)</code>

**OnError**: <code>[ApiException](src/Hud/Core/Exceptions/ApiException.cs)&lt;[GetTraceLogsV2TraceTraceIdLogsGetError](src/Hud/Errors/GetTraceLogsV2TraceTraceIdLogsGetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;TraceUsageBreakdown&gt; GetTraceUsageV2TraceTraceIdUsageGet(GetTraceUsageV2TraceTraceIdUsageGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a trace's compute and inference cost breakdown.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Traces.GetTraceUsageV2TraceTraceIdUsageGet(
        new GetTraceUsageV2TraceTraceIdUsageGetRequest
        {
            TraceId = Guid.Parse("00000000-0000-0000-0000-000000000000"),
        });
    // TODO: Handle 'response' of type TraceUsageBreakdown
}
catch (ApiException<GetTraceUsageV2TraceTraceIdUsageGetError> ex)
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

<code>[GetTraceUsageV2TraceTraceIdUsageGetRequest](src/Hud/Requests/Traces/GetTraceUsageV2TraceTraceIdUsageGetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[TraceUsageBreakdown](src/Hud/Models/TraceUsageBreakdown.cs)</code>

**OnError**: <code>[ApiException](src/Hud/Core/Exceptions/ApiException.cs)&lt;[GetTraceUsageV2TraceTraceIdUsageGetError](src/Hud/Errors/GetTraceUsageV2TraceTraceIdUsageGetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;TraceDetailResponse&gt; GetTraceV2TraceTraceIdGet(GetTraceV2TraceTraceIdGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a trace by id.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Traces.GetTraceV2TraceTraceIdGet(new GetTraceV2TraceTraceIdGetRequest
    {
        TraceId = Guid.Parse("00000000-0000-0000-0000-000000000000"),
    });
    // TODO: Handle 'response' of type TraceDetailResponse
}
catch (ApiException<GetTraceV2TraceTraceIdGetError> ex)
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

<code>[GetTraceV2TraceTraceIdGetRequest](src/Hud/Requests/Traces/GetTraceV2TraceTraceIdGetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[TraceDetailResponse](src/Hud/Models/TraceDetailResponse.cs)</code>

**OnError**: <code>[ApiException](src/Hud/Core/Exceptions/ApiException.cs)&lt;[GetTraceV2TraceTraceIdGetError](src/Hud/Errors/GetTraceV2TraceTraceIdGetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;IReadOnlyList&lt;TraceThumbnail&gt;&gt; ListRelatedTracesV2TraceTraceIdRelatedGet(ListRelatedTracesV2TraceTraceIdRelatedGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Trace thumbnails related to ``trace_id``.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Traces.ListRelatedTracesV2TraceTraceIdRelatedGet(
        new ListRelatedTracesV2TraceTraceIdRelatedGetRequest
        {
            TraceId = Guid.Parse("00000000-0000-0000-0000-000000000000"),
            Kind = RelatedKind1.Job,
        });
    // TODO: Handle 'response' of type IReadOnlyList<TraceThumbnail>
}
catch (ApiException<ListRelatedTracesV2TraceTraceIdRelatedGetError> ex)
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

<code>[ListRelatedTracesV2TraceTraceIdRelatedGetRequest](src/Hud/Requests/Traces/ListRelatedTracesV2TraceTraceIdRelatedGetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>IReadOnlyList&lt;[TraceThumbnail](src/Hud/Models/TraceThumbnail.cs)&gt;</code>

**OnError**: <code>[ApiException](src/Hud/Core/Exceptions/ApiException.cs)&lt;[ListRelatedTracesV2TraceTraceIdRelatedGetError](src/Hud/Errors/ListRelatedTracesV2TraceTraceIdRelatedGetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;PublishTraceResponse&gt; PublishTraceV2TraceTraceIdPublishPost(PublishTraceV2TraceTraceIdPublishPostRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Set ``traces.public=true`` so anyone with the link can view the trace.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Traces.PublishTraceV2TraceTraceIdPublishPost(
        new PublishTraceV2TraceTraceIdPublishPostRequest
        {
            TraceId = Guid.Parse("00000000-0000-0000-0000-000000000000"),
        });
    // TODO: Handle 'response' of type PublishTraceResponse
}
catch (ApiException<PublishTraceV2TraceTraceIdPublishPostError> ex)
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

<code>[PublishTraceV2TraceTraceIdPublishPostRequest](src/Hud/Requests/Traces/PublishTraceV2TraceTraceIdPublishPostRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PublishTraceResponse](src/Hud/Models/PublishTraceResponse.cs)</code>

**OnError**: <code>[ApiException](src/Hud/Core/Exceptions/ApiException.cs)&lt;[PublishTraceV2TraceTraceIdPublishPostError](src/Hud/Errors/PublishTraceV2TraceTraceIdPublishPostError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;StatusResponse&gt; UnpublishTraceV2TraceTraceIdPublishDelete(UnpublishTraceV2TraceTraceIdPublishDeleteRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Set ``traces.public=false``; the trace returns to invited-only visibility.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Traces.UnpublishTraceV2TraceTraceIdPublishDelete(
        new UnpublishTraceV2TraceTraceIdPublishDeleteRequest
        {
            TraceId = Guid.Parse("00000000-0000-0000-0000-000000000000"),
        });
    // TODO: Handle 'response' of type StatusResponse
}
catch (ApiException<UnpublishTraceV2TraceTraceIdPublishDeleteError> ex)
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

<code>[UnpublishTraceV2TraceTraceIdPublishDeleteRequest](src/Hud/Requests/Traces/UnpublishTraceV2TraceTraceIdPublishDeleteRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[StatusResponse](src/Hud/Models/StatusResponse.cs)</code>

**OnError**: <code>[ApiException](src/Hud/Core/Exceptions/ApiException.cs)&lt;[UnpublishTraceV2TraceTraceIdPublishDeleteError](src/Hud/Errors/UnpublishTraceV2TraceTraceIdPublishDeleteError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;TraceInfoResponse&gt; UpdateTraceV2TraceTraceIdPatch(UpdateTraceV2TraceTraceIdPatchRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update a trace's metadata fields.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Traces.UpdateTraceV2TraceTraceIdPatch(new UpdateTraceV2TraceTraceIdPatchRequest
    {
        TraceId = Guid.Parse("00000000-0000-0000-0000-000000000000"),
        Body = new TraceUpdateRequest(),
    });
    // TODO: Handle 'response' of type TraceInfoResponse
}
catch (ApiException<UpdateTraceV2TraceTraceIdPatchError> ex)
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

<code>[UpdateTraceV2TraceTraceIdPatchRequest](src/Hud/Requests/Traces/UpdateTraceV2TraceTraceIdPatchRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[TraceInfoResponse](src/Hud/Models/TraceInfoResponse.cs)</code>

**OnError**: <code>[ApiException](src/Hud/Core/Exceptions/ApiException.cs)&lt;[UpdateTraceV2TraceTraceIdPatchError](src/Hud/Errors/UpdateTraceV2TraceTraceIdPatchError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Usage

> Source: [Usage](src/Hud/Api/Usage.cs)

<details>
<summary><code>Task&lt;EnvironmentUsageResponse&gt; GetEnvironmentUsageV2EnvironmentsUsageGet(GetEnvironmentUsageV2EnvironmentsUsageGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get the team's environment session usage over a window, with summary and paged sessions.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Usage.GetEnvironmentUsageV2EnvironmentsUsageGet(
        new GetEnvironmentUsageV2EnvironmentsUsageGetRequest());
    // TODO: Handle 'response' of type EnvironmentUsageResponse
}
catch (ApiException<GetEnvironmentUsageV2EnvironmentsUsageGetError> ex)
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

<code>[GetEnvironmentUsageV2EnvironmentsUsageGetRequest](src/Hud/Requests/Usage/GetEnvironmentUsageV2EnvironmentsUsageGetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[EnvironmentUsageResponse](src/Hud/Models/EnvironmentUsageResponse.cs)</code>

**OnError**: <code>[ApiException](src/Hud/Core/Exceptions/ApiException.cs)&lt;[GetEnvironmentUsageV2EnvironmentsUsageGetError](src/Hud/Errors/GetEnvironmentUsageV2EnvironmentsUsageGetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;InferenceUsageAggregateResponse&gt; GetInferenceUsageAggregateV2UsageInferenceGet(GetInferenceUsageAggregateV2UsageInferenceGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Aggregate the team's inference usage into time buckets, optionally grouped.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Usage.GetInferenceUsageAggregateV2UsageInferenceGet(
        new GetInferenceUsageAggregateV2UsageInferenceGetRequest());
    // TODO: Handle 'response' of type InferenceUsageAggregateResponse
}
catch (ApiException<GetInferenceUsageAggregateV2UsageInferenceGetError> ex)
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

<code>[GetInferenceUsageAggregateV2UsageInferenceGetRequest](src/Hud/Requests/Usage/GetInferenceUsageAggregateV2UsageInferenceGetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[InferenceUsageAggregateResponse](src/Hud/Models/InferenceUsageAggregateResponse.cs)</code>

**OnError**: <code>[ApiException](src/Hud/Core/Exceptions/ApiException.cs)&lt;[GetInferenceUsageAggregateV2UsageInferenceGetError](src/Hud/Errors/GetInferenceUsageAggregateV2UsageInferenceGetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## ByokCredentials

> Source: [ByokCredentials](src/Hud/Api/ByokCredentials.cs)

<details>
<summary><code>Task&lt;ByokCredentialItem&gt; CreateByokCredentialV2ByokCredentialsPost(CreateByokCredentialV2ByokCredentialsPostRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create or replace a provider credential for one ownership scope.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.ByokCredentials.CreateByokCredentialV2ByokCredentialsPost(
        new CreateByokCredentialV2ByokCredentialsPostRequest
        {
            Body = new ByokCredentialCreateRequest
            {
                ProviderId = 1,
                Scope = Scope.Member,
                Value = "some example string",
            },
        });
    // TODO: Handle 'response' of type ByokCredentialItem
}
catch (ApiException<CreateByokCredentialV2ByokCredentialsPostError> ex)
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

<code>[CreateByokCredentialV2ByokCredentialsPostRequest](src/Hud/Requests/ByokCredentials/CreateByokCredentialV2ByokCredentialsPostRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ByokCredentialItem](src/Hud/Models/ByokCredentialItem.cs)</code>

**OnError**: <code>[ApiException](src/Hud/Core/Exceptions/ApiException.cs)&lt;[CreateByokCredentialV2ByokCredentialsPostError](src/Hud/Errors/CreateByokCredentialV2ByokCredentialsPostError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task DeleteByokCredentialV2ByokCredentialsCredentialIdDelete(DeleteByokCredentialV2ByokCredentialsCredentialIdDeleteRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Disable a BYOK credential and erase its encrypted value.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.ByokCredentials.DeleteByokCredentialV2ByokCredentialsCredentialIdDelete(
        new DeleteByokCredentialV2ByokCredentialsCredentialIdDeleteRequest
        {
            CredentialId = Guid.Parse("00000000-0000-0000-0000-000000000000"),
        });
}
catch (ApiException<DeleteByokCredentialV2ByokCredentialsCredentialIdDeleteError> ex)
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

<code>[DeleteByokCredentialV2ByokCredentialsCredentialIdDeleteRequest](src/Hud/Requests/ByokCredentials/DeleteByokCredentialV2ByokCredentialsCredentialIdDeleteRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/Hud/Core/Exceptions/ApiException.cs)&lt;[DeleteByokCredentialV2ByokCredentialsCredentialIdDeleteError](src/Hud/Errors/DeleteByokCredentialV2ByokCredentialsCredentialIdDeleteError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ByokCredentialsListResponse&gt; ListByokCredentialsV2ByokCredentialsGet(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List the caller's personal and team BYOK credentials with masked values.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.ByokCredentials.ListByokCredentialsV2ByokCredentialsGet();
    // TODO: Handle 'response' of type ByokCredentialsListResponse
}
catch (ApiException<ListByokCredentialsV2ByokCredentialsGetError> ex)
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

**OnSuccess**: <code>[ByokCredentialsListResponse](src/Hud/Models/ByokCredentialsListResponse.cs)</code>

**OnError**: <code>[ApiException](src/Hud/Core/Exceptions/ApiException.cs)&lt;[ListByokCredentialsV2ByokCredentialsGetError](src/Hud/Errors/ListByokCredentialsV2ByokCredentialsGetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ByokCredentialItem&gt; UpdateByokCredentialV2ByokCredentialsCredentialIdPatch(UpdateByokCredentialV2ByokCredentialsCredentialIdPatchRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Rotate a BYOK credential without exposing its plaintext value.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.ByokCredentials.UpdateByokCredentialV2ByokCredentialsCredentialIdPatch(
        new UpdateByokCredentialV2ByokCredentialsCredentialIdPatchRequest
        {
            CredentialId = Guid.Parse("00000000-0000-0000-0000-000000000000"),
            Body = new ByokCredentialUpdateRequest { Value = "some example string" },
        });
    // TODO: Handle 'response' of type ByokCredentialItem
}
catch (ApiException<UpdateByokCredentialV2ByokCredentialsCredentialIdPatchError> ex)
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

<code>[UpdateByokCredentialV2ByokCredentialsCredentialIdPatchRequest](src/Hud/Requests/ByokCredentials/UpdateByokCredentialV2ByokCredentialsCredentialIdPatchRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ByokCredentialItem](src/Hud/Models/ByokCredentialItem.cs)</code>

**OnError**: <code>[ApiException](src/Hud/Core/Exceptions/ApiException.cs)&lt;[UpdateByokCredentialV2ByokCredentialsCredentialIdPatchError](src/Hud/Errors/UpdateByokCredentialV2ByokCredentialsCredentialIdPatchError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## EnvVars

> Source: [EnvVars](src/Hud/Api/EnvVars.cs)

<details>
<summary><code>Task&lt;RegistryEnvVarBatchResponse&gt; BatchReplaceEnvVarsV2EnvVarsBatchPut(BatchReplaceEnvVarsV2EnvVarsBatchPutRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Replace a registry's full env var set with the given variables.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.EnvVars.BatchReplaceEnvVarsV2EnvVarsBatchPut(
        new BatchReplaceEnvVarsV2EnvVarsBatchPutRequest
        {
            Body = new RegistryEnvVarBatchRequest
            {
                RegistryId = Guid.Parse("00000000-0000-0000-0000-000000000000"),
                Variables = [
                    new RegistryEnvVarBatchItem { Name = "some example string", Value = "some example string" },
                ],
            },
        });
    // TODO: Handle 'response' of type RegistryEnvVarBatchResponse
}
catch (ApiException<BatchReplaceEnvVarsV2EnvVarsBatchPutError> ex)
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

<code>[BatchReplaceEnvVarsV2EnvVarsBatchPutRequest](src/Hud/Requests/EnvVars/BatchReplaceEnvVarsV2EnvVarsBatchPutRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[RegistryEnvVarBatchResponse](src/Hud/Models/RegistryEnvVarBatchResponse.cs)</code>

**OnError**: <code>[ApiException](src/Hud/Core/Exceptions/ApiException.cs)&lt;[BatchReplaceEnvVarsV2EnvVarsBatchPutError](src/Hud/Errors/BatchReplaceEnvVarsV2EnvVarsBatchPutError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;RegistryEnvVarCheckResponse&gt; CheckEnvVarCompletenessV2EnvVarsCheckPost(CheckEnvVarCompletenessV2EnvVarsCheckPostRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Check whether each registry has all env vars its manifest requires.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.EnvVars.CheckEnvVarCompletenessV2EnvVarsCheckPost(
        new CheckEnvVarCompletenessV2EnvVarsCheckPostRequest
        {
            Body = new RegistryEnvVarCheckRequest
            {
                RegistryIds = [Guid.Parse("00000000-0000-0000-0000-000000000000")],
            },
        });
    // TODO: Handle 'response' of type RegistryEnvVarCheckResponse
}
catch (ApiException<CheckEnvVarCompletenessV2EnvVarsCheckPostError> ex)
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

<code>[CheckEnvVarCompletenessV2EnvVarsCheckPostRequest](src/Hud/Requests/EnvVars/CheckEnvVarCompletenessV2EnvVarsCheckPostRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[RegistryEnvVarCheckResponse](src/Hud/Models/RegistryEnvVarCheckResponse.cs)</code>

**OnError**: <code>[ApiException](src/Hud/Core/Exceptions/ApiException.cs)&lt;[CheckEnvVarCompletenessV2EnvVarsCheckPostError](src/Hud/Errors/CheckEnvVarCompletenessV2EnvVarsCheckPostError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;RegistryEnvVarItem&gt; CreateEnvVarV2EnvVarsPost(CreateEnvVarV2EnvVarsPostRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Set a registry env var, creating it or updating an existing one by name.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.EnvVars.CreateEnvVarV2EnvVarsPost(new CreateEnvVarV2EnvVarsPostRequest
    {
        Body = new RegistryEnvVarCreateRequest
        {
            RegistryId = Guid.Parse("00000000-0000-0000-0000-000000000000"),
            Name = "some example string",
            Value = "some example string",
        },
    });
    // TODO: Handle 'response' of type RegistryEnvVarItem
}
catch (ApiException<CreateEnvVarV2EnvVarsPostError> ex)
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

<code>[CreateEnvVarV2EnvVarsPostRequest](src/Hud/Requests/EnvVars/CreateEnvVarV2EnvVarsPostRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[RegistryEnvVarItem](src/Hud/Models/RegistryEnvVarItem.cs)</code>

**OnError**: <code>[ApiException](src/Hud/Core/Exceptions/ApiException.cs)&lt;[CreateEnvVarV2EnvVarsPostError](src/Hud/Errors/CreateEnvVarV2EnvVarsPostError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task DeleteEnvVarV2EnvVarsVarIdDelete(DeleteEnvVarV2EnvVarsVarIdDeleteRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete a registry env var.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.EnvVars.DeleteEnvVarV2EnvVarsVarIdDelete(new DeleteEnvVarV2EnvVarsVarIdDeleteRequest
    {
        VarId = Guid.Parse("00000000-0000-0000-0000-000000000000"),
    });
}
catch (ApiException<DeleteEnvVarV2EnvVarsVarIdDeleteError> ex)
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

<code>[DeleteEnvVarV2EnvVarsVarIdDeleteRequest](src/Hud/Requests/EnvVars/DeleteEnvVarV2EnvVarsVarIdDeleteRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/Hud/Core/Exceptions/ApiException.cs)&lt;[DeleteEnvVarV2EnvVarsVarIdDeleteError](src/Hud/Errors/DeleteEnvVarV2EnvVarsVarIdDeleteError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;RegistryEnvVarsListResponse&gt; ListEnvVarsV2EnvVarsGet(ListEnvVarsV2EnvVarsGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List a registry's runtime env vars with masked values.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.EnvVars.ListEnvVarsV2EnvVarsGet(new ListEnvVarsV2EnvVarsGetRequest
    {
        RegistryId = Guid.Parse("00000000-0000-0000-0000-000000000000"),
    });
    // TODO: Handle 'response' of type RegistryEnvVarsListResponse
}
catch (ApiException<ListEnvVarsV2EnvVarsGetError> ex)
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

<code>[ListEnvVarsV2EnvVarsGetRequest](src/Hud/Requests/EnvVars/ListEnvVarsV2EnvVarsGetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[RegistryEnvVarsListResponse](src/Hud/Models/RegistryEnvVarsListResponse.cs)</code>

**OnError**: <code>[ApiException](src/Hud/Core/Exceptions/ApiException.cs)&lt;[ListEnvVarsV2EnvVarsGetError](src/Hud/Errors/ListEnvVarsV2EnvVarsGetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;RegistryEnvVarItem&gt; UpdateEnvVarV2EnvVarsVarIdPatch(UpdateEnvVarV2EnvVarsVarIdPatchRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update a registry env var's value.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.EnvVars.UpdateEnvVarV2EnvVarsVarIdPatch(new UpdateEnvVarV2EnvVarsVarIdPatchRequest
    {
        VarId = Guid.Parse("00000000-0000-0000-0000-000000000000"),
        Body = new RegistryEnvVarUpdateRequest(),
    });
    // TODO: Handle 'response' of type RegistryEnvVarItem
}
catch (ApiException<UpdateEnvVarV2EnvVarsVarIdPatchError> ex)
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

<code>[UpdateEnvVarV2EnvVarsVarIdPatchRequest](src/Hud/Requests/EnvVars/UpdateEnvVarV2EnvVarsVarIdPatchRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[RegistryEnvVarItem](src/Hud/Models/RegistryEnvVarItem.cs)</code>

**OnError**: <code>[ApiException](src/Hud/Core/Exceptions/ApiException.cs)&lt;[UpdateEnvVarV2EnvVarsVarIdPatchError](src/Hud/Errors/UpdateEnvVarV2EnvVarsVarIdPatchError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## MemberSecrets

> Source: [MemberSecrets](src/Hud/Api/MemberSecrets.cs)

<details>
<summary><code>Task&lt;MemberSecretItem&gt; CreateMemberSecretV2MemberSecretsPost(CreateMemberSecretV2MemberSecretsPostRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Set a personal secret, creating it or updating an existing one by name.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.MemberSecrets.CreateMemberSecretV2MemberSecretsPost(
        new CreateMemberSecretV2MemberSecretsPostRequest
        {
            Body = new MemberSecretCreateRequest { Name = "some example string", Value = "some example string" },
        });
    // TODO: Handle 'response' of type MemberSecretItem
}
catch (ApiException<CreateMemberSecretV2MemberSecretsPostError> ex)
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

<code>[CreateMemberSecretV2MemberSecretsPostRequest](src/Hud/Requests/MemberSecrets/CreateMemberSecretV2MemberSecretsPostRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[MemberSecretItem](src/Hud/Models/MemberSecretItem.cs)</code>

**OnError**: <code>[ApiException](src/Hud/Core/Exceptions/ApiException.cs)&lt;[CreateMemberSecretV2MemberSecretsPostError](src/Hud/Errors/CreateMemberSecretV2MemberSecretsPostError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task DeleteMemberSecretV2MemberSecretsSecretIdDelete(DeleteMemberSecretV2MemberSecretsSecretIdDeleteRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete a personal secret.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.MemberSecrets.DeleteMemberSecretV2MemberSecretsSecretIdDelete(
        new DeleteMemberSecretV2MemberSecretsSecretIdDeleteRequest
        {
            SecretId = Guid.Parse("00000000-0000-0000-0000-000000000000"),
        });
}
catch (ApiException<DeleteMemberSecretV2MemberSecretsSecretIdDeleteError> ex)
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

<code>[DeleteMemberSecretV2MemberSecretsSecretIdDeleteRequest](src/Hud/Requests/MemberSecrets/DeleteMemberSecretV2MemberSecretsSecretIdDeleteRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/Hud/Core/Exceptions/ApiException.cs)&lt;[DeleteMemberSecretV2MemberSecretsSecretIdDeleteError](src/Hud/Errors/DeleteMemberSecretV2MemberSecretsSecretIdDeleteError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;MemberSecretsListResponse&gt; ListMemberSecretsV2MemberSecretsGet(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List the caller's personal secrets with masked values.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.MemberSecrets.ListMemberSecretsV2MemberSecretsGet();
    // TODO: Handle 'response' of type MemberSecretsListResponse
}
catch (ApiException<ListMemberSecretsV2MemberSecretsGetError> ex)
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

**OnSuccess**: <code>[MemberSecretsListResponse](src/Hud/Models/MemberSecretsListResponse.cs)</code>

**OnError**: <code>[ApiException](src/Hud/Core/Exceptions/ApiException.cs)&lt;[ListMemberSecretsV2MemberSecretsGetError](src/Hud/Errors/ListMemberSecretsV2MemberSecretsGetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;MemberSecretItem&gt; UpdateMemberSecretV2MemberSecretsSecretIdPatch(UpdateMemberSecretV2MemberSecretsSecretIdPatchRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update a personal secret's value.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.MemberSecrets.UpdateMemberSecretV2MemberSecretsSecretIdPatch(
        new UpdateMemberSecretV2MemberSecretsSecretIdPatchRequest
        {
            SecretId = Guid.Parse("00000000-0000-0000-0000-000000000000"),
            Body = new MemberSecretUpdateRequest { Value = "some example string" },
        });
    // TODO: Handle 'response' of type MemberSecretItem
}
catch (ApiException<UpdateMemberSecretV2MemberSecretsSecretIdPatchError> ex)
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

<code>[UpdateMemberSecretV2MemberSecretsSecretIdPatchRequest](src/Hud/Requests/MemberSecrets/UpdateMemberSecretV2MemberSecretsSecretIdPatchRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[MemberSecretItem](src/Hud/Models/MemberSecretItem.cs)</code>

**OnError**: <code>[ApiException](src/Hud/Core/Exceptions/ApiException.cs)&lt;[UpdateMemberSecretV2MemberSecretsSecretIdPatchError](src/Hud/Errors/UpdateMemberSecretV2MemberSecretsSecretIdPatchError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Qa

> Source: [Qa](src/Hud/Api/Qa.cs)

<details>
<summary><code>Task&lt;QaCheckListResponse&gt; ListQaChecksV2QaChecksGet(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List the QA checks available to run, each with the subject type it judges.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Qa.ListQaChecksV2QaChecksGet();
    // TODO: Handle 'response' of type QaCheckListResponse
}
catch (ApiException<ListQaChecksV2QaChecksGetError> ex)
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

**OnSuccess**: <code>[QaCheckListResponse](src/Hud/Models/QaCheckListResponse.cs)</code>

**OnError**: <code>[ApiException](src/Hud/Core/Exceptions/ApiException.cs)&lt;[ListQaChecksV2QaChecksGetError](src/Hud/Errors/ListQaChecksV2QaChecksGetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;QaResultListResponse&gt; ListQaResultsV2QaResultsGet(ListQaResultsV2QaResultsGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List the result in effect for every QA check on the given evaluation traces or tasks.

A task's results in effect are those on its current version. With
``include_history``, list every result instead, newest first, across a
task's versions.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Qa.ListQaResultsV2QaResultsGet(new ListQaResultsV2QaResultsGetRequest());
    // TODO: Handle 'response' of type QaResultListResponse
}
catch (ApiException<ListQaResultsV2QaResultsGetError> ex)
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

<code>[ListQaResultsV2QaResultsGetRequest](src/Hud/Requests/Qa/ListQaResultsV2QaResultsGetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[QaResultListResponse](src/Hud/Models/QaResultListResponse.cs)</code>

**OnError**: <code>[ApiException](src/Hud/Core/Exceptions/ApiException.cs)&lt;[ListQaResultsV2QaResultsGetError](src/Hud/Errors/ListQaResultsV2QaResultsGetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;QaResultListResponse&gt; RunQaChecksV2QaRunsPost(RunQaChecksV2QaRunsPostRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Run QA checks against completed evaluation traces or tasks as one run; returns each subject's result of each check.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Qa.RunQaChecksV2QaRunsPost(new RunQaChecksV2QaRunsPostRequest
    {
        Body = new QaRunCreateRequest { CheckKeys = ["some example string"] },
    });
    // TODO: Handle 'response' of type QaResultListResponse
}
catch (ApiException<RunQaChecksV2QaRunsPostError> ex)
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

<code>[RunQaChecksV2QaRunsPostRequest](src/Hud/Requests/Qa/RunQaChecksV2QaRunsPostRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[QaResultListResponse](src/Hud/Models/QaResultListResponse.cs)</code>

**OnError**: <code>[ApiException](src/Hud/Core/Exceptions/ApiException.cs)&lt;[RunQaChecksV2QaRunsPostError](src/Hud/Errors/RunQaChecksV2QaRunsPostError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## QaAgents

> Source: [QaAgents](src/Hud/Api/QaAgents.cs)

<details>
<summary><code>Task&lt;TraceEventsResponse&gt; GetQaAgentSanitizedRolloutV2QaAgentsResultsResultIdRolloutGet(GetQaAgentSanitizedRolloutV2QaAgentsResultsResultIdRolloutGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Return an output-only QA rollout without evaluator prompts or private inputs.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.QaAgents.GetQaAgentSanitizedRolloutV2QaAgentsResultsResultIdRolloutGet(
        new GetQaAgentSanitizedRolloutV2QaAgentsResultsResultIdRolloutGetRequest
        {
            ResultId = Guid.Parse("00000000-0000-0000-0000-000000000000"),
        });
    // TODO: Handle 'response' of type TraceEventsResponse
}
catch (ApiException<GetQaAgentSanitizedRolloutV2QaAgentsResultsResultIdRolloutGetError> ex)
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

<code>[GetQaAgentSanitizedRolloutV2QaAgentsResultsResultIdRolloutGetRequest](src/Hud/Requests/QaAgents/GetQaAgentSanitizedRolloutV2QaAgentsResultsResultIdRolloutGetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[TraceEventsResponse](src/Hud/Models/TraceEventsResponse.cs)</code>

**OnError**: <code>[ApiException](src/Hud/Core/Exceptions/ApiException.cs)&lt;[GetQaAgentSanitizedRolloutV2QaAgentsResultsResultIdRolloutGetError](src/Hud/Errors/GetQaAgentSanitizedRolloutV2QaAgentsResultsResultIdRolloutGetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;QaAgentResponse&gt; GetQaAgentV2QaAgentsAgentIdGet(GetQaAgentV2QaAgentsAgentIdGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a QA agent by id.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.QaAgents.GetQaAgentV2QaAgentsAgentIdGet(new GetQaAgentV2QaAgentsAgentIdGetRequest
    {
        AgentId = Guid.Parse("00000000-0000-0000-0000-000000000000"),
    });
    // TODO: Handle 'response' of type QaAgentResponse
}
catch (ApiException<GetQaAgentV2QaAgentsAgentIdGetError> ex)
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

<code>[GetQaAgentV2QaAgentsAgentIdGetRequest](src/Hud/Requests/QaAgents/GetQaAgentV2QaAgentsAgentIdGetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[QaAgentResponse](src/Hud/Models/QaAgentResponse.cs)</code>

**OnError**: <code>[ApiException](src/Hud/Core/Exceptions/ApiException.cs)&lt;[GetQaAgentV2QaAgentsAgentIdGetError](src/Hud/Errors/GetQaAgentV2QaAgentsAgentIdGetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;PaginatedResponseQaAgentResponse&gt; ListQaAgentsV2QaAgentsGet(ListQaAgentsV2QaAgentsGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List the caller team's QA agents.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.QaAgents.ListQaAgentsV2QaAgentsGet(new ListQaAgentsV2QaAgentsGetRequest());
    // TODO: Handle 'response' of type PaginatedResponseQaAgentResponse
}
catch (ApiException<ListQaAgentsV2QaAgentsGetError> ex)
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

<code>[ListQaAgentsV2QaAgentsGetRequest](src/Hud/Requests/QaAgents/ListQaAgentsV2QaAgentsGetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PaginatedResponseQaAgentResponse](src/Hud/Models/PaginatedResponseQaAgentResponse.cs)</code>

**OnError**: <code>[ApiException](src/Hud/Core/Exceptions/ApiException.cs)&lt;[ListQaAgentsV2QaAgentsGetError](src/Hud/Errors/ListQaAgentsV2QaAgentsGetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;IReadOnlyList&lt;QaAgentResourceResultDetail&gt;&gt; ListResourceQaAgentResultsV2QaAgentsResultsResourcesGet(ListResourceQaAgentResultsV2QaAgentsResultsResourcesGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List resource QA results by subject or by exact result IDs.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.QaAgents.ListResourceQaAgentResultsV2QaAgentsResultsResourcesGet(
        new ListResourceQaAgentResultsV2QaAgentsResultsResourcesGetRequest());
    // TODO: Handle 'response' of type IReadOnlyList<QaAgentResourceResultDetail>
}
catch (ApiException<ListResourceQaAgentResultsV2QaAgentsResultsResourcesGetError> ex)
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

<code>[ListResourceQaAgentResultsV2QaAgentsResultsResourcesGetRequest](src/Hud/Requests/QaAgents/ListResourceQaAgentResultsV2QaAgentsResultsResourcesGetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>IReadOnlyList&lt;[QaAgentResourceResultDetail](src/Hud/Models/QaAgentResourceResultDetail.cs)&gt;</code>

**OnError**: <code>[ApiException](src/Hud/Core/Exceptions/ApiException.cs)&lt;[ListResourceQaAgentResultsV2QaAgentsResultsResourcesGetError](src/Hud/Errors/ListResourceQaAgentResultsV2QaAgentsResultsResourcesGetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;IReadOnlyList&lt;QaAgentResultResponse&gt;&gt; RunResourceQaAgentV2QaAgentsAgentIdRunResourcesPost(RunResourceQaAgentV2QaAgentsAgentIdRunResourcesPostRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Select or launch one QA result for each canonical resource subject.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.QaAgents.RunResourceQaAgentV2QaAgentsAgentIdRunResourcesPost(
        new RunResourceQaAgentV2QaAgentsAgentIdRunResourcesPostRequest
        {
            AgentId = Guid.Parse("00000000-0000-0000-0000-000000000000"),
            Body = new QaAgentResourceRunRequest { SubjectIds = [Guid.Parse("00000000-0000-0000-0000-000000000000")] },
        });
    // TODO: Handle 'response' of type IReadOnlyList<QaAgentResultResponse>
}
catch (ApiException<RunResourceQaAgentV2QaAgentsAgentIdRunResourcesPostError> ex)
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

<code>[RunResourceQaAgentV2QaAgentsAgentIdRunResourcesPostRequest](src/Hud/Requests/QaAgents/RunResourceQaAgentV2QaAgentsAgentIdRunResourcesPostRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>IReadOnlyList&lt;[QaAgentResultResponse](src/Hud/Models/QaAgentResultResponse.cs)&gt;</code>

**OnError**: <code>[ApiException](src/Hud/Core/Exceptions/ApiException.cs)&lt;[RunResourceQaAgentV2QaAgentsAgentIdRunResourcesPostError](src/Hud/Errors/RunResourceQaAgentV2QaAgentsAgentIdRunResourcesPostError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Rollouts

> Source: [Rollouts](src/Hud/Api/Rollouts.cs)

<details>
<summary><code>Task&lt;CancelJobResponse&gt; CancelJobV2RolloutsCancelJobPost(CancelJobV2RolloutsCancelJobPostRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Cancel all non-terminal traces in a job.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Rollouts.CancelJobV2RolloutsCancelJobPost(new CancelJobV2RolloutsCancelJobPostRequest
    {
        Body = new CancelJobRequest { JobId = Guid.Parse("00000000-0000-0000-0000-000000000000") },
    });
    // TODO: Handle 'response' of type CancelJobResponse
}
catch (ApiException<CancelJobV2RolloutsCancelJobPostError> ex)
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

<code>[CancelJobV2RolloutsCancelJobPostRequest](src/Hud/Requests/Rollouts/CancelJobV2RolloutsCancelJobPostRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CancelJobResponse](src/Hud/Models/CancelJobResponse.cs)</code>

**OnError**: <code>[ApiException](src/Hud/Core/Exceptions/ApiException.cs)&lt;[CancelJobV2RolloutsCancelJobPostError](src/Hud/Errors/CancelJobV2RolloutsCancelJobPostError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;CancelUserJobsResponse&gt; CancelUserJobsV2RolloutsCancelUserJobsPost(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Cancel all of the caller's active jobs, reporting per-job cancellation counts.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Rollouts.CancelUserJobsV2RolloutsCancelUserJobsPost();
    // TODO: Handle 'response' of type CancelUserJobsResponse
}
catch (ApiException<CancelUserJobsV2RolloutsCancelUserJobsPostError> ex)
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

**OnSuccess**: <code>[CancelUserJobsResponse](src/Hud/Models/CancelUserJobsResponse.cs)</code>

**OnError**: <code>[ApiException](src/Hud/Core/Exceptions/ApiException.cs)&lt;[CancelUserJobsV2RolloutsCancelUserJobsPostError](src/Hud/Errors/CancelUserJobsV2RolloutsCancelUserJobsPostError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;CancelResponse&gt; CancelV2RolloutsCancelPost(CancelV2RolloutsCancelPostRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Cancel a single rollout trace; noop if it already reached a terminal state.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Rollouts.CancelV2RolloutsCancelPost(new CancelV2RolloutsCancelPostRequest
    {
        Body = new CancelRequest { TraceId = Guid.Parse("00000000-0000-0000-0000-000000000000") },
    });
    // TODO: Handle 'response' of type CancelResponse
}
catch (ApiException<CancelV2RolloutsCancelPostError> ex)
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

<code>[CancelV2RolloutsCancelPostRequest](src/Hud/Requests/Rollouts/CancelV2RolloutsCancelPostRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CancelResponse](src/Hud/Models/CancelResponse.cs)</code>

**OnError**: <code>[ApiException](src/Hud/Core/Exceptions/ApiException.cs)&lt;[CancelV2RolloutsCancelPostError](src/Hud/Errors/CancelV2RolloutsCancelPostError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;RolloutBatchResponse&gt; RunListV2RolloutsRunListPost(RunListV2RolloutsRunListPostRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Launch a batch of hosted rollouts under one job.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Rollouts.RunListV2RolloutsRunListPost(new RunListV2RolloutsRunListPostRequest
    {
        Body = new RolloutRunListRequest(),
    });
    // TODO: Handle 'response' of type RolloutBatchResponse
}
catch (ApiException<RunListV2RolloutsRunListPostError> ex)
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

<code>[RunListV2RolloutsRunListPostRequest](src/Hud/Requests/Rollouts/RunListV2RolloutsRunListPostRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[RolloutBatchResponse](src/Hud/Models/RolloutBatchResponse.cs)</code>

**OnError**: <code>[ApiException](src/Hud/Core/Exceptions/ApiException.cs)&lt;[RunListV2RolloutsRunListPostError](src/Hud/Errors/RunListV2RolloutsRunListPostError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;RolloutResponse&gt; RunV2RolloutsRunPost(RunV2RolloutsRunPostRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Launch a single hosted rollout and return its trace and job identifiers.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Rollouts.RunV2RolloutsRunPost(new RunV2RolloutsRunPostRequest
    {
        Body = new RolloutRunRequest
        {
            TaskVersionId = Guid.Parse("00000000-0000-0000-0000-000000000000"),
            ModelId = Guid.Parse("00000000-0000-0000-0000-000000000000"),
        },
    });
    // TODO: Handle 'response' of type RolloutResponse
}
catch (ApiException<RunV2RolloutsRunPostError> ex)
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

<code>[RunV2RolloutsRunPostRequest](src/Hud/Requests/Rollouts/RunV2RolloutsRunPostRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[RolloutResponse](src/Hud/Models/RolloutResponse.cs)</code>

**OnError**: <code>[ApiException](src/Hud/Core/Exceptions/ApiException.cs)&lt;[RunV2RolloutsRunPostError](src/Hud/Errors/RunV2RolloutsRunPostError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;RolloutResponse&gt; SubmitV2RolloutsSubmitPost(SubmitV2RolloutsSubmitPostRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

v6 SDK hosted rollout: env/task reference + agent spec under the SDK's job/trace identity.

The SDK polls GET /v2/trace/{trace_id} to completion.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Rollouts.SubmitV2RolloutsSubmitPost(new SubmitV2RolloutsSubmitPostRequest
    {
        Body = new RolloutSubmitRequest
        {
            TraceId = Guid.Parse("00000000-0000-0000-0000-000000000000"),
            JobId = Guid.Parse("00000000-0000-0000-0000-000000000000"),
            Env = "some example string",
            Task = "some example string",
            Agent = new SubmittedAgentSpec { Type = TypeHudPlatformRolloutsApi.Claude, Config = config },
        },
    });
    // TODO: Handle 'response' of type RolloutResponse
}
catch (ApiException<SubmitV2RolloutsSubmitPostError> ex)
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

<code>[SubmitV2RolloutsSubmitPostRequest](src/Hud/Requests/Rollouts/SubmitV2RolloutsSubmitPostRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[RolloutResponse](src/Hud/Models/RolloutResponse.cs)</code>

**OnError**: <code>[ApiException](src/Hud/Core/Exceptions/ApiException.cs)&lt;[SubmitV2RolloutsSubmitPostError](src/Hud/Errors/SubmitV2RolloutsSubmitPostError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Tasksets

> Source: [Tasksets](src/Hud/Api/Tasksets.cs)

<details>
<summary><code>Task&lt;TasksetResponse&gt; CreateTasksetV2TasksetsPost(CreateTasksetV2TasksetsPostRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a taskset for the caller's team.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Tasksets.CreateTasksetV2TasksetsPost(new CreateTasksetV2TasksetsPostRequest
    {
        Body = new TasksetCreateRequest { Name = "some example string" },
    });
    // TODO: Handle 'response' of type TasksetResponse
}
catch (ApiException<CreateTasksetV2TasksetsPostError> ex)
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

<code>[CreateTasksetV2TasksetsPostRequest](src/Hud/Requests/Tasksets/CreateTasksetV2TasksetsPostRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[TasksetResponse](src/Hud/Models/TasksetResponse.cs)</code>

**OnError**: <code>[ApiException](src/Hud/Core/Exceptions/ApiException.cs)&lt;[CreateTasksetV2TasksetsPostError](src/Hud/Errors/CreateTasksetV2TasksetsPostError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;TasksetExportResponse&gt; ExportTasksetV2TasksetsTasksetIdExportGet(ExportTasksetV2TasksetsTasksetIdExportGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Fetch a taskset by UUID in the task wire format.

Same shape as the by-name lookup, and the only fetch path for cross-team
public tasksets.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Tasksets.ExportTasksetV2TasksetsTasksetIdExportGet(
        new ExportTasksetV2TasksetsTasksetIdExportGetRequest
        {
            TasksetId = Guid.Parse("00000000-0000-0000-0000-000000000000"),
        });
    // TODO: Handle 'response' of type TasksetExportResponse
}
catch (ApiException<ExportTasksetV2TasksetsTasksetIdExportGetError> ex)
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

<code>[ExportTasksetV2TasksetsTasksetIdExportGetRequest](src/Hud/Requests/Tasksets/ExportTasksetV2TasksetsTasksetIdExportGetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[TasksetExportResponse](src/Hud/Models/TasksetExportResponse.cs)</code>

**OnError**: <code>[ApiException](src/Hud/Core/Exceptions/ApiException.cs)&lt;[ExportTasksetV2TasksetsTasksetIdExportGetError](src/Hud/Errors/ExportTasksetV2TasksetsTasksetIdExportGetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;TasksetExportResponse&gt; GetTasksetByNameV2TasksetsByNameNameGet(GetTasksetByNameV2TasksetsByNameNameGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Resolve a taskset by name and return its tasks in the task wire format.

Returns the latest version per task — the read-side counterpart of
`POST /tasks/upload`.

Scoped to the caller's team. Cross-team public tasksets are accessible
by UUID (`GET /tasksets/{id}/export`) only — name uniqueness is per team,
so resolving by name across teams would be ambiguous.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Tasksets.GetTasksetByNameV2TasksetsByNameNameGet(
        new GetTasksetByNameV2TasksetsByNameNameGetRequest { Name = "some example string" });
    // TODO: Handle 'response' of type TasksetExportResponse
}
catch (ApiException<GetTasksetByNameV2TasksetsByNameNameGetError> ex)
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

<code>[GetTasksetByNameV2TasksetsByNameNameGetRequest](src/Hud/Requests/Tasksets/GetTasksetByNameV2TasksetsByNameNameGetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[TasksetExportResponse](src/Hud/Models/TasksetExportResponse.cs)</code>

**OnError**: <code>[ApiException](src/Hud/Core/Exceptions/ApiException.cs)&lt;[GetTasksetByNameV2TasksetsByNameNameGetError](src/Hud/Errors/GetTasksetByNameV2TasksetsByNameNameGetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;TasksetResponse&gt; GetTasksetV2TasksetsTasksetIdGet(GetTasksetV2TasksetsTasksetIdGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a taskset by id.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Tasksets.GetTasksetV2TasksetsTasksetIdGet(new GetTasksetV2TasksetsTasksetIdGetRequest
    {
        TasksetId = Guid.Parse("00000000-0000-0000-0000-000000000000"),
    });
    // TODO: Handle 'response' of type TasksetResponse
}
catch (ApiException<GetTasksetV2TasksetsTasksetIdGetError> ex)
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

<code>[GetTasksetV2TasksetsTasksetIdGetRequest](src/Hud/Requests/Tasksets/GetTasksetV2TasksetsTasksetIdGetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[TasksetResponse](src/Hud/Models/TasksetResponse.cs)</code>

**OnError**: <code>[ApiException](src/Hud/Core/Exceptions/ApiException.cs)&lt;[GetTasksetV2TasksetsTasksetIdGetError](src/Hud/Errors/GetTasksetV2TasksetsTasksetIdGetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;PaginatedResponseTaskResponse&gt; ListTasksetTasksV2TasksetsTasksetIdTasksGet(ListTasksetTasksV2TasksetsTasksetIdTasksGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List live task definitions, including for public-only viewers.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Tasksets.ListTasksetTasksV2TasksetsTasksetIdTasksGet(
        new ListTasksetTasksV2TasksetsTasksetIdTasksGetRequest
        {
            TasksetId = Guid.Parse("00000000-0000-0000-0000-000000000000"),
        });
    // TODO: Handle 'response' of type PaginatedResponseTaskResponse
}
catch (ApiException<ListTasksetTasksV2TasksetsTasksetIdTasksGetError> ex)
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

<code>[ListTasksetTasksV2TasksetsTasksetIdTasksGetRequest](src/Hud/Requests/Tasksets/ListTasksetTasksV2TasksetsTasksetIdTasksGetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PaginatedResponseTaskResponse](src/Hud/Models/PaginatedResponseTaskResponse.cs)</code>

**OnError**: <code>[ApiException](src/Hud/Core/Exceptions/ApiException.cs)&lt;[ListTasksetTasksV2TasksetsTasksetIdTasksGetError](src/Hud/Errors/ListTasksetTasksV2TasksetsTasksetIdTasksGetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;PaginatedResponseTasksetResponse&gt; ListTasksetsV2TasksetsGet(ListTasksetsV2TasksetsGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List tasksets visible to the caller, with search, ownership, and sort filters.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Tasksets.ListTasksetsV2TasksetsGet(new ListTasksetsV2TasksetsGetRequest());
    // TODO: Handle 'response' of type PaginatedResponseTasksetResponse
}
catch (ApiException<ListTasksetsV2TasksetsGetError> ex)
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

<code>[ListTasksetsV2TasksetsGetRequest](src/Hud/Requests/Tasksets/ListTasksetsV2TasksetsGetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PaginatedResponseTasksetResponse](src/Hud/Models/PaginatedResponseTasksetResponse.cs)</code>

**OnError**: <code>[ApiException](src/Hud/Core/Exceptions/ApiException.cs)&lt;[ListTasksetsV2TasksetsGetError](src/Hud/Errors/ListTasksetsV2TasksetsGetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

