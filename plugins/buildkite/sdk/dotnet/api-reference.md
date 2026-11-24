# Reference

Every operation below is shown in its throwing form. On an error status it throws `ApiException<TError>` — the status code, headers, content type and the operation's error type, `RawError` (the raw body) when the spec declares none — and where an operation offers an `…AsResult` sibling, that sibling returns `ApiResult<TResponse, TError>` instead. A request that produces no usable response surfaces as `SdkConnectionException` or `SdkTimeoutException`, a body that does not match the documented response type as `ResponseDeserializationException`, and a required credential that is not configured, or one that cannot be applied, as `AuthSchemeException`; all of them derive from `SdkException` and name the failed call. See [README → Error Handling](README.md#error-handling).

> Source: [BuildkiteClient](src/Buildkite/BuildkiteClient.cs)

## AccessToken

> Source: [AccessToken](src/Buildkite/Api/AccessToken.cs)

<details>
<summary><code>Task GetAccessToken(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.AccessToken.GetAccessToken();
}
catch (ApiException<RawError> ex)
{
    // TODO: Handle 'ex.Error' of type RawError
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/Buildkite/Core/Exceptions/ApiException.cs)&lt;[RawError](src/Buildkite/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task RevokeAccessToken(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.AccessToken.RevokeAccessToken();
}
catch (ApiException<RawError> ex)
{
    // TODO: Handle 'ex.Error' of type RawError
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/Buildkite/Core/Exceptions/ApiException.cs)&lt;[RawError](src/Buildkite/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## AgentTokens

> Source: [AgentTokens](src/Buildkite/Api/AgentTokens.cs)

<details>
<summary><code>Task ListAgentTokens(ListAgentTokensRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.AgentTokens.ListAgentTokens(new ListAgentTokensRequest
    {
        Org = "some example string",
        Cluster = "some example string",
    });
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

<code>[ListAgentTokensRequest](src/Buildkite/Requests/AgentTokens/ListAgentTokensRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/Buildkite/Core/Exceptions/ApiException.cs)&lt;[RawError](src/Buildkite/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## AgentsApi

> Source: [AgentsApi](src/Buildkite/Api/AgentsApi.cs)

<details>
<summary><code>Task GetAgent(GetAgentRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.AgentsApi.GetAgent(new GetAgentRequest { Org = "some example string", Id = "some example string" });
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

<code>[GetAgentRequest](src/Buildkite/Requests/AgentsApi/GetAgentRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/Buildkite/Core/Exceptions/ApiException.cs)&lt;[RawError](src/Buildkite/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;IReadOnlyList&lt;Agent&gt;&gt; ListAgents(ListAgentsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.AgentsApi.ListAgents(new ListAgentsRequest { Org = "some example string" });
    // TODO: Handle 'response' of type IReadOnlyList<Agent>
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

<code>[ListAgentsRequest](src/Buildkite/Requests/AgentsApi/ListAgentsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>IReadOnlyList&lt;[Agent](src/Buildkite/Models/Agent.cs)&gt;</code>

**OnError**: <code>[ApiException](src/Buildkite/Core/Exceptions/ApiException.cs)&lt;[RawError](src/Buildkite/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task StopAgent(StopAgentRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.AgentsApi.StopAgent(new StopAgentRequest { Org = "some example string", Id = "some example string" });
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

<code>[StopAgentRequest](src/Buildkite/Requests/AgentsApi/StopAgentRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/Buildkite/Core/Exceptions/ApiException.cs)&lt;[RawError](src/Buildkite/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Annotations

> Source: [Annotations](src/Buildkite/Api/Annotations.cs)

<details>
<summary><code>Task ListAnnotations(ListAnnotationsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.Annotations.ListAnnotations(new ListAnnotationsRequest
    {
        Org = "some example string",
        Pipeline = "some example string",
        Number = 1,
    });
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

<code>[ListAnnotationsRequest](src/Buildkite/Requests/Annotations/ListAnnotationsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/Buildkite/Core/Exceptions/ApiException.cs)&lt;[RawError](src/Buildkite/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Artifacts

> Source: [Artifacts](src/Buildkite/Api/Artifacts.cs)

<details>
<summary><code>Task ListArtifactsForBuild(ListArtifactsForBuildRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.Artifacts.ListArtifactsForBuild(new ListArtifactsForBuildRequest
    {
        Org = "some example string",
        Pipeline = "some example string",
        Number = 1,
    });
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

<code>[ListArtifactsForBuildRequest](src/Buildkite/Requests/Artifacts/ListArtifactsForBuildRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/Buildkite/Core/Exceptions/ApiException.cs)&lt;[RawError](src/Buildkite/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Builds

> Source: [Builds](src/Buildkite/Api/Builds.cs)

<details>
<summary><code>Task CancelBuild(CancelBuildRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.Builds.CancelBuild(new CancelBuildRequest
    {
        Org = "some example string",
        Pipeline = "some example string",
        Number = 1,
    });
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

<code>[CancelBuildRequest](src/Buildkite/Requests/Builds/CancelBuildRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/Buildkite/Core/Exceptions/ApiException.cs)&lt;[RawError](src/Buildkite/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task CreateBuild(CreateBuildRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.Builds.CreateBuild(new CreateBuildRequest
    {
        Org = "some example string",
        Pipeline = "some example string",
    });
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

<code>[CreateBuildRequest](src/Buildkite/Requests/Builds/CreateBuildRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/Buildkite/Core/Exceptions/ApiException.cs)&lt;[RawError](src/Buildkite/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task GetBuild(GetBuildRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.Builds.GetBuild(new GetBuildRequest
    {
        Org = "some example string",
        Pipeline = "some example string",
        Number = 1,
    });
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

<code>[GetBuildRequest](src/Buildkite/Requests/Builds/GetBuildRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/Buildkite/Core/Exceptions/ApiException.cs)&lt;[RawError](src/Buildkite/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;IReadOnlyList&lt;Build&gt;&gt; ListBuilds(ListBuildsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Builds.ListBuilds(new ListBuildsRequest
    {
        Org = "some example string",
        Pipeline = "some example string",
    });
    // TODO: Handle 'response' of type IReadOnlyList<Build>
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

<code>[ListBuildsRequest](src/Buildkite/Requests/Builds/ListBuildsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>IReadOnlyList&lt;[Build](src/Buildkite/Models/Build.cs)&gt;</code>

**OnError**: <code>[ApiException](src/Buildkite/Core/Exceptions/ApiException.cs)&lt;[RawError](src/Buildkite/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task RebuildBuild(RebuildBuildRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.Builds.RebuildBuild(new RebuildBuildRequest
    {
        Org = "some example string",
        Pipeline = "some example string",
        Number = 1,
    });
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

<code>[RebuildBuildRequest](src/Buildkite/Requests/Builds/RebuildBuildRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/Buildkite/Core/Exceptions/ApiException.cs)&lt;[RawError](src/Buildkite/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Clusters

> Source: [Clusters](src/Buildkite/Api/Clusters.cs)

<details>
<summary><code>Task ListClusters(ListClustersRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.Clusters.ListClusters(new ListClustersRequest { Org = "some example string" });
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

<code>[ListClustersRequest](src/Buildkite/Requests/Clusters/ListClustersRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/Buildkite/Core/Exceptions/ApiException.cs)&lt;[RawError](src/Buildkite/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Emojis

> Source: [Emojis](src/Buildkite/Api/Emojis.cs)

<details>
<summary><code>Task ListEmojis(ListEmojisRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.Emojis.ListEmojis(new ListEmojisRequest { Org = "some example string" });
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

<code>[ListEmojisRequest](src/Buildkite/Requests/Emojis/ListEmojisRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/Buildkite/Core/Exceptions/ApiException.cs)&lt;[RawError](src/Buildkite/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## JobsApi

> Source: [JobsApi](src/Buildkite/Api/JobsApi.cs)

<details>
<summary><code>Task GetJobLog(GetJobLogRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.JobsApi.GetJobLog(new GetJobLogRequest
    {
        Org = "some example string",
        Pipeline = "some example string",
        Number = 1,
        Job = "some example string",
    });
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

<code>[GetJobLogRequest](src/Buildkite/Requests/JobsApi/GetJobLogRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/Buildkite/Core/Exceptions/ApiException.cs)&lt;[RawError](src/Buildkite/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task RetryJob(RetryJobRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.JobsApi.RetryJob(new RetryJobRequest
    {
        Org = "some example string",
        Pipeline = "some example string",
        Number = 1,
        Job = "some example string",
    });
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

<code>[RetryJobRequest](src/Buildkite/Requests/JobsApi/RetryJobRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/Buildkite/Core/Exceptions/ApiException.cs)&lt;[RawError](src/Buildkite/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Meta

> Source: [Meta](src/Buildkite/Api/Meta.cs)

<details>
<summary><code>Task GetMeta(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.Meta.GetMeta();
}
catch (ApiException<RawError> ex)
{
    // TODO: Handle 'ex.Error' of type RawError
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/Buildkite/Core/Exceptions/ApiException.cs)&lt;[RawError](src/Buildkite/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Metrics

> Source: [Metrics](src/Buildkite/Api/Metrics.cs)

<details>
<summary><code>Task&lt;MetricsResponse&gt; GetMetrics(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns current agent and job counts for the cluster associated with the agent token. Used by autoscalers (Lambda scaler, agent-stack-k8s, custom controllers) to size agent pools.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Metrics.GetMetrics();
    // TODO: Handle 'response' of type MetricsResponse
}
catch (ApiException<RawError> ex)
{
    // TODO: Handle 'ex.Error' of type RawError
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[MetricsResponse](src/Buildkite/Models/MetricsResponse.cs)</code>

**OnError**: <code>[ApiException](src/Buildkite/Core/Exceptions/ApiException.cs)&lt;[RawError](src/Buildkite/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Organizations

> Source: [Organizations](src/Buildkite/Api/Organizations.cs)

<details>
<summary><code>Task GetOrganization(GetOrganizationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.Organizations.GetOrganization(new GetOrganizationRequest { Org = "some example string" });
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

<code>[GetOrganizationRequest](src/Buildkite/Requests/Organizations/GetOrganizationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/Buildkite/Core/Exceptions/ApiException.cs)&lt;[RawError](src/Buildkite/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task ListOrganizations(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.Organizations.ListOrganizations();
}
catch (ApiException<RawError> ex)
{
    // TODO: Handle 'ex.Error' of type RawError
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/Buildkite/Core/Exceptions/ApiException.cs)&lt;[RawError](src/Buildkite/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## PipelineTemplates

> Source: [PipelineTemplates](src/Buildkite/Api/PipelineTemplates.cs)

<details>
<summary><code>Task ListPipelineTemplates(ListPipelineTemplatesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.PipelineTemplates.ListPipelineTemplates(new ListPipelineTemplatesRequest
    {
        Org = "some example string",
    });
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

<code>[ListPipelineTemplatesRequest](src/Buildkite/Requests/PipelineTemplates/ListPipelineTemplatesRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/Buildkite/Core/Exceptions/ApiException.cs)&lt;[RawError](src/Buildkite/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Pipelines

> Source: [Pipelines](src/Buildkite/Api/Pipelines.cs)

<details>
<summary><code>Task CreatePipeline(CreatePipelineRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.Pipelines.CreatePipeline(new CreatePipelineRequest { Org = "some example string" });
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

<code>[CreatePipelineRequest](src/Buildkite/Requests/Pipelines/CreatePipelineRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/Buildkite/Core/Exceptions/ApiException.cs)&lt;[RawError](src/Buildkite/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task DeletePipeline(DeletePipelineRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.Pipelines.DeletePipeline(new DeletePipelineRequest
    {
        Org = "some example string",
        Pipeline = "some example string",
    });
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

<code>[DeletePipelineRequest](src/Buildkite/Requests/Pipelines/DeletePipelineRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/Buildkite/Core/Exceptions/ApiException.cs)&lt;[RawError](src/Buildkite/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task GetPipeline(GetPipelineRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.Pipelines.GetPipeline(new GetPipelineRequest
    {
        Org = "some example string",
        Pipeline = "some example string",
    });
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

<code>[GetPipelineRequest](src/Buildkite/Requests/Pipelines/GetPipelineRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/Buildkite/Core/Exceptions/ApiException.cs)&lt;[RawError](src/Buildkite/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;IReadOnlyList&lt;Pipeline&gt;&gt; ListPipelines(ListPipelinesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Pipelines.ListPipelines(new ListPipelinesRequest { Org = "some example string" });
    // TODO: Handle 'response' of type IReadOnlyList<Pipeline>
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

<code>[ListPipelinesRequest](src/Buildkite/Requests/Pipelines/ListPipelinesRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>IReadOnlyList&lt;[Pipeline](src/Buildkite/Models/Pipeline.cs)&gt;</code>

**OnError**: <code>[ApiException](src/Buildkite/Core/Exceptions/ApiException.cs)&lt;[RawError](src/Buildkite/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task UpdatePipeline(UpdatePipelineRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.Pipelines.UpdatePipeline(new UpdatePipelineRequest
    {
        Org = "some example string",
        Pipeline = "some example string",
    });
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

<code>[UpdatePipelineRequest](src/Buildkite/Requests/Pipelines/UpdatePipelineRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/Buildkite/Core/Exceptions/ApiException.cs)&lt;[RawError](src/Buildkite/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Queues

> Source: [Queues](src/Buildkite/Api/Queues.cs)

<details>
<summary><code>Task ListQueues(ListQueuesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.Queues.ListQueues(new ListQueuesRequest
    {
        Org = "some example string",
        Cluster = "some example string",
    });
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

<code>[ListQueuesRequest](src/Buildkite/Requests/Queues/ListQueuesRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/Buildkite/Core/Exceptions/ApiException.cs)&lt;[RawError](src/Buildkite/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Rules

> Source: [Rules](src/Buildkite/Api/Rules.cs)

<details>
<summary><code>Task ListRules(ListRulesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.Rules.ListRules(new ListRulesRequest { Org = "some example string" });
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

<code>[ListRulesRequest](src/Buildkite/Requests/Rules/ListRulesRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/Buildkite/Core/Exceptions/ApiException.cs)&lt;[RawError](src/Buildkite/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Stacks

> Source: [Stacks](src/Buildkite/Api/Stacks.cs)

<details>
<summary><code>Task GetStacks(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the desired stack configuration for a self-hosted queue's controller process. The controller watches the queue for jobs and runs agents on demand.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.Stacks.GetStacks();
}
catch (ApiException<RawError> ex)
{
    // TODO: Handle 'ex.Error' of type RawError
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/Buildkite/Core/Exceptions/ApiException.cs)&lt;[RawError](src/Buildkite/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Teams

> Source: [Teams](src/Buildkite/Api/Teams.cs)

<details>
<summary><code>Task ListTeams(ListTeamsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.Teams.ListTeams(new ListTeamsRequest { Org = "some example string" });
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

<code>[ListTeamsRequest](src/Buildkite/Requests/Teams/ListTeamsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/Buildkite/Core/Exceptions/ApiException.cs)&lt;[RawError](src/Buildkite/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## UserApi

> Source: [UserApi](src/Buildkite/Api/UserApi.cs)

<details>
<summary><code>Task&lt;User&gt; GetCurrentUser(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.UserApi.GetCurrentUser();
    // TODO: Handle 'response' of type User
}
catch (ApiException<RawError> ex)
{
    // TODO: Handle 'ex.Error' of type RawError
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[User](src/Buildkite/Models/User.cs)</code>

**OnError**: <code>[ApiException](src/Buildkite/Core/Exceptions/ApiException.cs)&lt;[RawError](src/Buildkite/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

