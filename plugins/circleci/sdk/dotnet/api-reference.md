# Reference

Every operation below is shown in its throwing form. On an error status it throws `ApiException<TError>` — the status code, headers, content type and the operation's error type, `RawError` (the raw body) when the spec declares none — and where an operation offers an `…AsResult` sibling, that sibling returns `ApiResult<TResponse, TError>` instead. A request that produces no usable response surfaces as `SdkConnectionException` or `SdkTimeoutException`, a body that does not match the documented response type as `ResponseDeserializationException`, and a required credential that is not configured, or one that cannot be applied, as `AuthSchemeException`; all of them derive from `SdkException` and name the failed call. See [README → Error Handling](README.md#error-handling).

> Source: [CircleCiClient](src/CircleCi/CircleCiClient.cs)

## ArtifactApi

> Source: [ArtifactApi](src/CircleCi/Api/ArtifactApi.cs)

<details>
<summary><code>Task&lt;IReadOnlyList&lt;Artifact&gt;&gt; ListBuildArtifacts(ListBuildArtifactsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list of artifacts produced by the specified build.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.ArtifactApi.ListBuildArtifacts(new ListBuildArtifactsRequest
    {
        VcsType = VcsType.Github,
        Username = "some example string",
        Project = "some example string",
        BuildNum = 1,
    });
    // TODO: Handle 'response' of type IReadOnlyList<Artifact>
}
catch (ApiException<ListBuildArtifactsError> ex)
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

<code>[ListBuildArtifactsRequest](src/CircleCi/Requests/ArtifactApi/ListBuildArtifactsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>IReadOnlyList&lt;[Artifact](src/CircleCi/Models/Artifact.cs)&gt;</code>

**OnError**: <code>[ApiException](src/CircleCi/Core/Exceptions/ApiException.cs)&lt;[ListBuildArtifactsError](src/CircleCi/Errors/ListBuildArtifactsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;IReadOnlyList&lt;Artifact&gt;&gt; ListLatestArtifacts(ListLatestArtifactsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns artifacts from the latest build of the project, optionally filtered by branch.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.ArtifactApi.ListLatestArtifacts(new ListLatestArtifactsRequest
    {
        VcsType = VcsType.Github,
        Username = "some example string",
        Project = "some example string",
    });
    // TODO: Handle 'response' of type IReadOnlyList<Artifact>
}
catch (ApiException<ListLatestArtifactsError> ex)
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

<code>[ListLatestArtifactsRequest](src/CircleCi/Requests/ArtifactApi/ListLatestArtifactsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>IReadOnlyList&lt;[Artifact](src/CircleCi/Models/Artifact.cs)&gt;</code>

**OnError**: <code>[ApiException](src/CircleCi/Core/Exceptions/ApiException.cs)&lt;[ListLatestArtifactsError](src/CircleCi/Errors/ListLatestArtifactsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## BuildApi

> Source: [BuildApi](src/CircleCi/Api/BuildApi.cs)

<details>
<summary><code>Task&lt;BuildSummary&gt; CancelBuild(CancelBuildRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Cancels a running build.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.BuildApi.CancelBuild(new CancelBuildRequest
    {
        VcsType = VcsType.Github,
        Username = "some example string",
        Project = "some example string",
        BuildNum = 1,
    });
    // TODO: Handle 'response' of type BuildSummary
}
catch (ApiException<CancelBuildError> ex)
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

<code>[CancelBuildRequest](src/CircleCi/Requests/BuildApi/CancelBuildRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[BuildSummary](src/CircleCi/Models/BuildSummary.cs)</code>

**OnError**: <code>[ApiException](src/CircleCi/Core/Exceptions/ApiException.cs)&lt;[CancelBuildError](src/CircleCi/Errors/CancelBuildError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;BuildDetail&gt; GetBuild(GetBuildRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns detailed information about a specific build, including its status, steps, and timing information.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.BuildApi.GetBuild(new GetBuildRequest
    {
        VcsType = VcsType.Github,
        Username = "some example string",
        Project = "some example string",
        BuildNum = 1,
    });
    // TODO: Handle 'response' of type BuildDetail
}
catch (ApiException<GetBuildError> ex)
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

<code>[GetBuildRequest](src/CircleCi/Requests/BuildApi/GetBuildRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[BuildDetail](src/CircleCi/Models/BuildDetail.cs)</code>

**OnError**: <code>[ApiException](src/CircleCi/Core/Exceptions/ApiException.cs)&lt;[GetBuildError](src/CircleCi/Errors/GetBuildError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;IReadOnlyList&lt;Build&gt;&gt; ListProjectBuilds(ListProjectBuildsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list of the most recent builds for the specified project, with optional filtering by branch.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.BuildApi.ListProjectBuilds(new ListProjectBuildsRequest
    {
        VcsType = VcsType.Github,
        Username = "some example string",
        Project = "some example string",
    });
    // TODO: Handle 'response' of type IReadOnlyList<Build>
}
catch (ApiException<ListProjectBuildsError> ex)
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

<code>[ListProjectBuildsRequest](src/CircleCi/Requests/BuildApi/ListProjectBuildsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>IReadOnlyList&lt;[Build](src/CircleCi/Models/Build.cs)&gt;</code>

**OnError**: <code>[ApiException](src/CircleCi/Core/Exceptions/ApiException.cs)&lt;[ListProjectBuildsError](src/CircleCi/Errors/ListProjectBuildsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;IReadOnlyList&lt;Build&gt;&gt; ListRecentBuilds(ListRecentBuildsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list of the most recent builds across all followed projects for the authenticated user.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.BuildApi.ListRecentBuilds(new ListRecentBuildsRequest());
    // TODO: Handle 'response' of type IReadOnlyList<Build>
}
catch (ApiException<ListRecentBuildsError> ex)
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

<code>[ListRecentBuildsRequest](src/CircleCi/Requests/BuildApi/ListRecentBuildsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>IReadOnlyList&lt;[Build](src/CircleCi/Models/Build.cs)&gt;</code>

**OnError**: <code>[ApiException](src/CircleCi/Core/Exceptions/ApiException.cs)&lt;[ListRecentBuildsError](src/CircleCi/Errors/ListRecentBuildsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;BuildSummary&gt; RetryBuild(RetryBuildRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retries a build using the same configuration and revision as the original build.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.BuildApi.RetryBuild(new RetryBuildRequest
    {
        VcsType = VcsType.Github,
        Username = "some example string",
        Project = "some example string",
        BuildNum = 1,
    });
    // TODO: Handle 'response' of type BuildSummary
}
catch (ApiException<RetryBuildError> ex)
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

<code>[RetryBuildRequest](src/CircleCi/Requests/BuildApi/RetryBuildRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[BuildSummary](src/CircleCi/Models/BuildSummary.cs)</code>

**OnError**: <code>[ApiException](src/CircleCi/Core/Exceptions/ApiException.cs)&lt;[RetryBuildError](src/CircleCi/Errors/RetryBuildError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;BuildSummary&gt; TriggerBranchBuild(TriggerBranchBuildRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Triggers a new build on the specified branch of the project.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.BuildApi.TriggerBranchBuild(new TriggerBranchBuildRequest
    {
        VcsType = VcsType.Github,
        Username = "some example string",
        Project = "some example string",
        Branch = "some example string",
    });
    // TODO: Handle 'response' of type BuildSummary
}
catch (ApiException<TriggerBranchBuildError> ex)
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

<code>[TriggerBranchBuildRequest](src/CircleCi/Requests/BuildApi/TriggerBranchBuildRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[BuildSummary](src/CircleCi/Models/BuildSummary.cs)</code>

**OnError**: <code>[ApiException](src/CircleCi/Core/Exceptions/ApiException.cs)&lt;[TriggerBranchBuildError](src/CircleCi/Errors/TriggerBranchBuildError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;BuildSummary&gt; TriggerBuild(TriggerBuildRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Triggers a new build for the specified project. Optionally specify a branch, revision, or build parameters.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.BuildApi.TriggerBuild(new TriggerBuildRequest
    {
        VcsType = VcsType.Github,
        Username = "some example string",
        Project = "some example string",
    });
    // TODO: Handle 'response' of type BuildSummary
}
catch (ApiException<TriggerBuildError> ex)
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

<code>[TriggerBuildRequest](src/CircleCi/Requests/BuildApi/TriggerBuildRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[BuildSummary](src/CircleCi/Models/BuildSummary.cs)</code>

**OnError**: <code>[ApiException](src/CircleCi/Core/Exceptions/ApiException.cs)&lt;[TriggerBuildError](src/CircleCi/Errors/TriggerBuildError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## ContextApi

> Source: [ContextApi](src/CircleCi/Api/ContextApi.cs)

<details>
<summary><code>Task&lt;EnvironmentVariable&gt; AddOrUpdateContextEnvironmentVariable(AddOrUpdateContextEnvironmentVariableRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a new environment variable or updates an existing one within the specified context.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.ContextApi.AddOrUpdateContextEnvironmentVariable(
        new AddOrUpdateContextEnvironmentVariableRequest
        {
            ContextId = Guid.Parse("00000000-0000-0000-0000-000000000000"),
            EnvVarName = "some example string",
            Body = new ContextEnvironmentVariableRequest { Value = "some example string" },
        });
    // TODO: Handle 'response' of type EnvironmentVariable
}
catch (ApiException<AddOrUpdateContextEnvironmentVariableError> ex)
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

<code>[AddOrUpdateContextEnvironmentVariableRequest](src/CircleCi/Requests/ContextApi/AddOrUpdateContextEnvironmentVariableRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[EnvironmentVariable](src/CircleCi/Models/EnvironmentVariable.cs)</code>

**OnError**: <code>[ApiException](src/CircleCi/Core/Exceptions/ApiException.cs)&lt;[AddOrUpdateContextEnvironmentVariableError](src/CircleCi/Errors/AddOrUpdateContextEnvironmentVariableError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Context&gt; CreateContext(CreateContextOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a new context for sharing environment variables across projects.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.ContextApi.CreateContext(new CreateContextOperationRequest
    {
        Body = new CreateContextRequest
        {
            Name = "some example string",
            Owner = new Owner { Id = Guid.Parse("00000000-0000-0000-0000-000000000000"), Type = TypeEnum.Account },
        },
    });
    // TODO: Handle 'response' of type Context
}
catch (ApiException<CreateContextError> ex)
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

<code>[CreateContextOperationRequest](src/CircleCi/Requests/ContextApi/CreateContextOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Context](src/CircleCi/Models/Context.cs)</code>

**OnError**: <code>[ApiException](src/CircleCi/Core/Exceptions/ApiException.cs)&lt;[CreateContextError](src/CircleCi/Errors/CreateContextError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;MessageResponse&gt; DeleteContext(DeleteContextRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a context and all of its associated environment variables.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.ContextApi.DeleteContext(new DeleteContextRequest
    {
        ContextId = Guid.Parse("00000000-0000-0000-0000-000000000000"),
    });
    // TODO: Handle 'response' of type MessageResponse
}
catch (ApiException<DeleteContextError> ex)
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

<code>[DeleteContextRequest](src/CircleCi/Requests/ContextApi/DeleteContextRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[MessageResponse](src/CircleCi/Models/MessageResponse.cs)</code>

**OnError**: <code>[ApiException](src/CircleCi/Core/Exceptions/ApiException.cs)&lt;[DeleteContextError](src/CircleCi/Errors/DeleteContextError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;MessageResponse&gt; DeleteContextEnvironmentVariable(DeleteContextEnvironmentVariableRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes an environment variable from the specified context.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.ContextApi.DeleteContextEnvironmentVariable(new DeleteContextEnvironmentVariableRequest
    {
        ContextId = Guid.Parse("00000000-0000-0000-0000-000000000000"),
        EnvVarName = "some example string",
    });
    // TODO: Handle 'response' of type MessageResponse
}
catch (ApiException<DeleteContextEnvironmentVariableError> ex)
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

<code>[DeleteContextEnvironmentVariableRequest](src/CircleCi/Requests/ContextApi/DeleteContextEnvironmentVariableRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[MessageResponse](src/CircleCi/Models/MessageResponse.cs)</code>

**OnError**: <code>[ApiException](src/CircleCi/Core/Exceptions/ApiException.cs)&lt;[DeleteContextEnvironmentVariableError](src/CircleCi/Errors/DeleteContextEnvironmentVariableError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Context&gt; GetContext(GetContextRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a specific context by its unique identifier.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.ContextApi.GetContext(new GetContextRequest
    {
        ContextId = Guid.Parse("00000000-0000-0000-0000-000000000000"),
    });
    // TODO: Handle 'response' of type Context
}
catch (ApiException<GetContextError> ex)
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

<code>[GetContextRequest](src/CircleCi/Requests/ContextApi/GetContextRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Context](src/CircleCi/Models/Context.cs)</code>

**OnError**: <code>[ApiException](src/CircleCi/Core/Exceptions/ApiException.cs)&lt;[GetContextError](src/CircleCi/Errors/GetContextError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;EnvironmentVariableList&gt; ListContextEnvironmentVariables(ListContextEnvironmentVariablesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a paginated list of environment variables associated with a specific context.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.ContextApi.ListContextEnvironmentVariables(new ListContextEnvironmentVariablesRequest
    {
        ContextId = Guid.Parse("00000000-0000-0000-0000-000000000000"),
    });
    // TODO: Handle 'response' of type EnvironmentVariableList
}
catch (ApiException<ListContextEnvironmentVariablesError> ex)
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

<code>[ListContextEnvironmentVariablesRequest](src/CircleCi/Requests/ContextApi/ListContextEnvironmentVariablesRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[EnvironmentVariableList](src/CircleCi/Models/EnvironmentVariableList.cs)</code>

**OnError**: <code>[ApiException](src/CircleCi/Core/Exceptions/ApiException.cs)&lt;[ListContextEnvironmentVariablesError](src/CircleCi/Errors/ListContextEnvironmentVariablesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ContextList&gt; ListContexts(ListContextsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a paginated list of contexts for a given owner, which can be an organization or account.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.ContextApi.ListContexts(new ListContextsRequest());
    // TODO: Handle 'response' of type ContextList
}
catch (ApiException<ListContextsError> ex)
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

<code>[ListContextsRequest](src/CircleCi/Requests/ContextApi/ListContextsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ContextList](src/CircleCi/Models/ContextList.cs)</code>

**OnError**: <code>[ApiException](src/CircleCi/Core/Exceptions/ApiException.cs)&lt;[ListContextsError](src/CircleCi/Errors/ListContextsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Insights

> Source: [Insights](src/CircleCi/Api/Insights.cs)

<details>
<summary><code>Task&lt;InsightsWorkflowMetrics&gt; GetProjectWorkflowMetrics(GetProjectWorkflowMetricsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns summary metrics for the workflows of a given project, including success rates, duration metrics, and throughput.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Insights.GetProjectWorkflowMetrics(new GetProjectWorkflowMetricsRequest
    {
        ProjectSlug = "some example string",
    });
    // TODO: Handle 'response' of type InsightsWorkflowMetrics
}
catch (ApiException<GetProjectWorkflowMetricsError> ex)
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

<code>[GetProjectWorkflowMetricsRequest](src/CircleCi/Requests/Insights/GetProjectWorkflowMetricsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[InsightsWorkflowMetrics](src/CircleCi/Models/InsightsWorkflowMetrics.cs)</code>

**OnError**: <code>[ApiException](src/CircleCi/Core/Exceptions/ApiException.cs)&lt;[GetProjectWorkflowMetricsError](src/CircleCi/Errors/GetProjectWorkflowMetricsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;InsightsJobMetrics&gt; GetWorkflowJobMetrics(GetWorkflowJobMetricsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns summary metrics for the jobs within a named workflow, including success rates and duration metrics.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Insights.GetWorkflowJobMetrics(new GetWorkflowJobMetricsRequest
    {
        ProjectSlug = "some example string",
        WorkflowName = "some example string",
    });
    // TODO: Handle 'response' of type InsightsJobMetrics
}
catch (ApiException<GetWorkflowJobMetricsError> ex)
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

<code>[GetWorkflowJobMetricsRequest](src/CircleCi/Requests/Insights/GetWorkflowJobMetricsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[InsightsJobMetrics](src/CircleCi/Models/InsightsJobMetrics.cs)</code>

**OnError**: <code>[ApiException](src/CircleCi/Core/Exceptions/ApiException.cs)&lt;[GetWorkflowJobMetricsError](src/CircleCi/Errors/GetWorkflowJobMetricsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;InsightsWorkflowRuns&gt; GetWorkflowRuns(GetWorkflowRunsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns recent runs of a named workflow, containing status, duration, and credits consumed.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Insights.GetWorkflowRuns(new GetWorkflowRunsRequest
    {
        ProjectSlug = "some example string",
        WorkflowName = "some example string",
    });
    // TODO: Handle 'response' of type InsightsWorkflowRuns
}
catch (ApiException<GetWorkflowRunsError> ex)
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

<code>[GetWorkflowRunsRequest](src/CircleCi/Requests/Insights/GetWorkflowRunsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[InsightsWorkflowRuns](src/CircleCi/Models/InsightsWorkflowRuns.cs)</code>

**OnError**: <code>[ApiException](src/CircleCi/Core/Exceptions/ApiException.cs)&lt;[GetWorkflowRunsError](src/CircleCi/Errors/GetWorkflowRunsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;InsightsTestMetrics&gt; GetWorkflowTestMetrics(GetWorkflowTestMetricsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns test metrics for a named workflow, including most frequently failing tests and slowest tests.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Insights.GetWorkflowTestMetrics(new GetWorkflowTestMetricsRequest
    {
        ProjectSlug = "some example string",
        WorkflowName = "some example string",
    });
    // TODO: Handle 'response' of type InsightsTestMetrics
}
catch (ApiException<GetWorkflowTestMetricsError> ex)
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

<code>[GetWorkflowTestMetricsRequest](src/CircleCi/Requests/Insights/GetWorkflowTestMetricsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[InsightsTestMetrics](src/CircleCi/Models/InsightsTestMetrics.cs)</code>

**OnError**: <code>[ApiException](src/CircleCi/Core/Exceptions/ApiException.cs)&lt;[GetWorkflowTestMetricsError](src/CircleCi/Errors/GetWorkflowTestMetricsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## JobApi

> Source: [JobApi](src/CircleCi/Api/JobApi.cs)

<details>
<summary><code>Task&lt;MessageResponse&gt; CancelJob(CancelJobRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Cancels a running job by its job number.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.JobApi.CancelJob(new CancelJobRequest
    {
        ProjectSlug = "some example string",
        JobNumber = 1,
    });
    // TODO: Handle 'response' of type MessageResponse
}
catch (ApiException<CancelJobError> ex)
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

<code>[CancelJobRequest](src/CircleCi/Requests/JobApi/CancelJobRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[MessageResponse](src/CircleCi/Models/MessageResponse.cs)</code>

**OnError**: <code>[ApiException](src/CircleCi/Core/Exceptions/ApiException.cs)&lt;[CancelJobError](src/CircleCi/Errors/CancelJobError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Job&gt; GetJob(GetJobRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns detailed information about a specific job, including its status, duration, and executor configuration.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.JobApi.GetJob(new GetJobRequest { ProjectSlug = "some example string", JobNumber = 1 });
    // TODO: Handle 'response' of type Job
}
catch (ApiException<GetJobError> ex)
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

<code>[GetJobRequest](src/CircleCi/Requests/JobApi/GetJobRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Job](src/CircleCi/Models/Job.cs)</code>

**OnError**: <code>[ApiException](src/CircleCi/Core/Exceptions/ApiException.cs)&lt;[GetJobError](src/CircleCi/Errors/GetJobError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ArtifactList&gt; ListJobArtifacts(ListJobArtifactsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a paginated list of artifacts produced by a given job.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.JobApi.ListJobArtifacts(new ListJobArtifactsRequest
    {
        ProjectSlug = "some example string",
        JobNumber = 1,
    });
    // TODO: Handle 'response' of type ArtifactList
}
catch (ApiException<ListJobArtifactsError> ex)
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

<code>[ListJobArtifactsRequest](src/CircleCi/Requests/JobApi/ListJobArtifactsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ArtifactList](src/CircleCi/Models/ArtifactList.cs)</code>

**OnError**: <code>[ApiException](src/CircleCi/Core/Exceptions/ApiException.cs)&lt;[ListJobArtifactsError](src/CircleCi/Errors/ListJobArtifactsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;TestList&gt; ListJobTests(ListJobTestsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns test metadata for a given job, collected from JUnit XML or similar test result files.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.JobApi.ListJobTests(new ListJobTestsRequest
    {
        ProjectSlug = "some example string",
        JobNumber = 1,
    });
    // TODO: Handle 'response' of type TestList
}
catch (ApiException<ListJobTestsError> ex)
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

<code>[ListJobTestsRequest](src/CircleCi/Requests/JobApi/ListJobTestsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[TestList](src/CircleCi/Models/TestList.cs)</code>

**OnError**: <code>[ApiException](src/CircleCi/Core/Exceptions/ApiException.cs)&lt;[ListJobTestsError](src/CircleCi/Errors/ListJobTestsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## PipelineApi

> Source: [PipelineApi](src/CircleCi/Api/PipelineApi.cs)

<details>
<summary><code>Task&lt;MessageResponse&gt; ContinuePipeline(ContinuePipelineRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Continues a pipeline from a setup workflow by providing configuration and pipeline parameters.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.PipelineApi.ContinuePipeline(new ContinuePipelineRequest
    {
        Body = new PipelineContinueRequest
        {
            ContinuationKey = "some example string",
            Configuration = "some example string",
        },
    });
    // TODO: Handle 'response' of type MessageResponse
}
catch (ApiException<ContinuePipelineError> ex)
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

<code>[ContinuePipelineRequest](src/CircleCi/Requests/PipelineApi/ContinuePipelineRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[MessageResponse](src/CircleCi/Models/MessageResponse.cs)</code>

**OnError**: <code>[ApiException](src/CircleCi/Core/Exceptions/ApiException.cs)&lt;[ContinuePipelineError](src/CircleCi/Errors/ContinuePipelineError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;PipelineCircleCiRestApiV2PipelineApi&gt; GetPipeline(GetPipelineRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a pipeline by its unique identifier.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.PipelineApi.GetPipeline(new GetPipelineRequest
    {
        PipelineId = Guid.Parse("00000000-0000-0000-0000-000000000000"),
    });
    // TODO: Handle 'response' of type PipelineCircleCiRestApiV2PipelineApi
}
catch (ApiException<GetPipelineError> ex)
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

<code>[GetPipelineRequest](src/CircleCi/Requests/PipelineApi/GetPipelineRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PipelineCircleCiRestApiV2PipelineApi](src/CircleCi/Models/PipelineCircleCiRestApiV2PipelineApi.cs)</code>

**OnError**: <code>[ApiException](src/CircleCi/Core/Exceptions/ApiException.cs)&lt;[GetPipelineError](src/CircleCi/Errors/GetPipelineError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;PipelineConfig&gt; GetPipelineConfig(GetPipelineConfigRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the configuration source for a given pipeline.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.PipelineApi.GetPipelineConfig(new GetPipelineConfigRequest
    {
        PipelineId = Guid.Parse("00000000-0000-0000-0000-000000000000"),
    });
    // TODO: Handle 'response' of type PipelineConfig
}
catch (ApiException<GetPipelineConfigError> ex)
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

<code>[GetPipelineConfigRequest](src/CircleCi/Requests/PipelineApi/GetPipelineConfigRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PipelineConfig](src/CircleCi/Models/PipelineConfig.cs)</code>

**OnError**: <code>[ApiException](src/CircleCi/Core/Exceptions/ApiException.cs)&lt;[GetPipelineConfigError](src/CircleCi/Errors/GetPipelineConfigError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;PipelineList&gt; ListMyProjectPipelines(ListMyProjectPipelinesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a paginated list of pipelines for a project filtered to those triggered by the current user.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.PipelineApi.ListMyProjectPipelines(new ListMyProjectPipelinesRequest
    {
        ProjectSlug = "some example string",
    });
    // TODO: Handle 'response' of type PipelineList
}
catch (ApiException<ListMyProjectPipelinesError> ex)
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

<code>[ListMyProjectPipelinesRequest](src/CircleCi/Requests/PipelineApi/ListMyProjectPipelinesRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PipelineList](src/CircleCi/Models/PipelineList.cs)</code>

**OnError**: <code>[ApiException](src/CircleCi/Core/Exceptions/ApiException.cs)&lt;[ListMyProjectPipelinesError](src/CircleCi/Errors/ListMyProjectPipelinesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;WorkflowList&gt; ListPipelineWorkflows(ListPipelineWorkflowsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a paginated list of workflows associated with a given pipeline.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.PipelineApi.ListPipelineWorkflows(new ListPipelineWorkflowsRequest
    {
        PipelineId = Guid.Parse("00000000-0000-0000-0000-000000000000"),
    });
    // TODO: Handle 'response' of type WorkflowList
}
catch (ApiException<ListPipelineWorkflowsError> ex)
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

<code>[ListPipelineWorkflowsRequest](src/CircleCi/Requests/PipelineApi/ListPipelineWorkflowsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[WorkflowList](src/CircleCi/Models/WorkflowList.cs)</code>

**OnError**: <code>[ApiException](src/CircleCi/Core/Exceptions/ApiException.cs)&lt;[ListPipelineWorkflowsError](src/CircleCi/Errors/ListPipelineWorkflowsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;PipelineList&gt; ListPipelines(ListPipelinesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns all pipelines for the most recently built projects you follow in the organization.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.PipelineApi.ListPipelines(new ListPipelinesRequest());
    // TODO: Handle 'response' of type PipelineList
}
catch (ApiException<ListPipelinesError> ex)
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

<code>[ListPipelinesRequest](src/CircleCi/Requests/PipelineApi/ListPipelinesRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PipelineList](src/CircleCi/Models/PipelineList.cs)</code>

**OnError**: <code>[ApiException](src/CircleCi/Core/Exceptions/ApiException.cs)&lt;[ListPipelinesError](src/CircleCi/Errors/ListPipelinesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;PipelineList&gt; ListProjectPipelines(ListProjectPipelinesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a paginated list of pipelines for a given project.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.PipelineApi.ListProjectPipelines(new ListProjectPipelinesRequest
    {
        ProjectSlug = "some example string",
    });
    // TODO: Handle 'response' of type PipelineList
}
catch (ApiException<ListProjectPipelinesError> ex)
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

<code>[ListProjectPipelinesRequest](src/CircleCi/Requests/PipelineApi/ListProjectPipelinesRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PipelineList](src/CircleCi/Models/PipelineList.cs)</code>

**OnError**: <code>[ApiException](src/CircleCi/Core/Exceptions/ApiException.cs)&lt;[ListProjectPipelinesError](src/CircleCi/Errors/ListProjectPipelinesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;PipelineCreation&gt; TriggerPipeline(TriggerPipelineOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Triggers a new pipeline on the specified project. Optionally specify a branch, tag, or revision to build. Pipeline parameters can also be provided.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.PipelineApi.TriggerPipeline(new TriggerPipelineOperationRequest
    {
        ProjectSlug = "some example string",
    });
    // TODO: Handle 'response' of type PipelineCreation
}
catch (ApiException<TriggerPipelineError> ex)
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

<code>[TriggerPipelineOperationRequest](src/CircleCi/Requests/PipelineApi/TriggerPipelineOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PipelineCreation](src/CircleCi/Models/PipelineCreation.cs)</code>

**OnError**: <code>[ApiException](src/CircleCi/Core/Exceptions/ApiException.cs)&lt;[TriggerPipelineError](src/CircleCi/Errors/TriggerPipelineError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## ProjectApi

> Source: [ProjectApi](src/CircleCi/Api/ProjectApi.cs)

<details>
<summary><code>Task&lt;CheckoutKey&gt; CreateCheckoutKey(CreateCheckoutKeyRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a new checkout key for the specified project. Only deploy keys and user keys are supported.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.ProjectApi.CreateCheckoutKey(new CreateCheckoutKeyRequest
    {
        ProjectSlug = "some example string",
        Body = new ProjectCheckoutKeyRequest { Type = Type1.DeployKey },
    });
    // TODO: Handle 'response' of type CheckoutKey
}
catch (ApiException<CreateCheckoutKeyError> ex)
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

<code>[CreateCheckoutKeyRequest](src/CircleCi/Requests/ProjectApi/CreateCheckoutKeyRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CheckoutKey](src/CircleCi/Models/CheckoutKey.cs)</code>

**OnError**: <code>[ApiException](src/CircleCi/Core/Exceptions/ApiException.cs)&lt;[CreateCheckoutKeyError](src/CircleCi/Errors/CreateCheckoutKeyError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ProjectEnvVar&gt; CreateProjectEnvironmentVariable(CreateProjectEnvironmentVariableRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a new environment variable for the specified project.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.ProjectApi.CreateProjectEnvironmentVariable(new CreateProjectEnvironmentVariableRequest
    {
        ProjectSlug = "some example string",
        Body = new ProjectEnvvarRequest { Name = "some example string", Value = "some example string" },
    });
    // TODO: Handle 'response' of type ProjectEnvVar
}
catch (ApiException<CreateProjectEnvironmentVariableError> ex)
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

<code>[CreateProjectEnvironmentVariableRequest](src/CircleCi/Requests/ProjectApi/CreateProjectEnvironmentVariableRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ProjectEnvVar](src/CircleCi/Models/ProjectEnvVar.cs)</code>

**OnError**: <code>[ApiException](src/CircleCi/Core/Exceptions/ApiException.cs)&lt;[CreateProjectEnvironmentVariableError](src/CircleCi/Errors/CreateProjectEnvironmentVariableError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;MessageResponse&gt; DeleteCheckoutKey(DeleteCheckoutKeyRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a checkout key by its fingerprint.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.ProjectApi.DeleteCheckoutKey(new DeleteCheckoutKeyRequest
    {
        ProjectSlug = "some example string",
        Fingerprint = "some example string",
    });
    // TODO: Handle 'response' of type MessageResponse
}
catch (ApiException<DeleteCheckoutKeyError> ex)
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

<code>[DeleteCheckoutKeyRequest](src/CircleCi/Requests/ProjectApi/DeleteCheckoutKeyRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[MessageResponse](src/CircleCi/Models/MessageResponse.cs)</code>

**OnError**: <code>[ApiException](src/CircleCi/Core/Exceptions/ApiException.cs)&lt;[DeleteCheckoutKeyError](src/CircleCi/Errors/DeleteCheckoutKeyError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;MessageResponse&gt; DeleteProjectEnvironmentVariable(DeleteProjectEnvironmentVariableRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes an environment variable from the specified project.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.ProjectApi.DeleteProjectEnvironmentVariable(new DeleteProjectEnvironmentVariableRequest
    {
        ProjectSlug = "some example string",
        Name = "some example string",
    });
    // TODO: Handle 'response' of type MessageResponse
}
catch (ApiException<DeleteProjectEnvironmentVariableError> ex)
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

<code>[DeleteProjectEnvironmentVariableRequest](src/CircleCi/Requests/ProjectApi/DeleteProjectEnvironmentVariableRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[MessageResponse](src/CircleCi/Models/MessageResponse.cs)</code>

**OnError**: <code>[ApiException](src/CircleCi/Core/Exceptions/ApiException.cs)&lt;[DeleteProjectEnvironmentVariableError](src/CircleCi/Errors/DeleteProjectEnvironmentVariableError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ProjectProjectFollowResponse&gt; FollowProject(FollowProjectRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Follows a project, adding it to the authenticated user's list of followed projects.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.ProjectApi.FollowProject(new FollowProjectRequest
    {
        VcsType = VcsType.Github,
        Username = "some example string",
        Project = "some example string",
    });
    // TODO: Handle 'response' of type ProjectProjectFollowResponse
}
catch (ApiException<FollowProjectError> ex)
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

<code>[FollowProjectRequest](src/CircleCi/Requests/ProjectApi/FollowProjectRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ProjectProjectFollowResponse](src/CircleCi/Models/ProjectProjectFollowResponse.cs)</code>

**OnError**: <code>[ApiException](src/CircleCi/Core/Exceptions/ApiException.cs)&lt;[FollowProjectError](src/CircleCi/Errors/FollowProjectError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;CheckoutKey&gt; GetCheckoutKey(GetCheckoutKeyRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a checkout key by its fingerprint.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.ProjectApi.GetCheckoutKey(new GetCheckoutKeyRequest
    {
        ProjectSlug = "some example string",
        Fingerprint = "some example string",
    });
    // TODO: Handle 'response' of type CheckoutKey
}
catch (ApiException<GetCheckoutKeyError> ex)
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

<code>[GetCheckoutKeyRequest](src/CircleCi/Requests/ProjectApi/GetCheckoutKeyRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CheckoutKey](src/CircleCi/Models/CheckoutKey.cs)</code>

**OnError**: <code>[ApiException](src/CircleCi/Core/Exceptions/ApiException.cs)&lt;[GetCheckoutKeyError](src/CircleCi/Errors/GetCheckoutKeyError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Project2&gt; GetProject(GetProjectRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a project by its slug, which is a triplet of the VCS type, organization name, and repository name.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.ProjectApi.GetProject(new GetProjectRequest { ProjectSlug = "some example string" });
    // TODO: Handle 'response' of type Project2
}
catch (ApiException<GetProjectError> ex)
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

<code>[GetProjectRequest](src/CircleCi/Requests/ProjectApi/GetProjectRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Project2](src/CircleCi/Models/Project2.cs)</code>

**OnError**: <code>[ApiException](src/CircleCi/Core/Exceptions/ApiException.cs)&lt;[GetProjectError](src/CircleCi/Errors/GetProjectError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ProjectEnvVar&gt; GetProjectEnvironmentVariable(GetProjectEnvironmentVariableRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a masked environment variable by name for the specified project.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.ProjectApi.GetProjectEnvironmentVariable(new GetProjectEnvironmentVariableRequest
    {
        ProjectSlug = "some example string",
        Name = "some example string",
    });
    // TODO: Handle 'response' of type ProjectEnvVar
}
catch (ApiException<GetProjectEnvironmentVariableError> ex)
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

<code>[GetProjectEnvironmentVariableRequest](src/CircleCi/Requests/ProjectApi/GetProjectEnvironmentVariableRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ProjectEnvVar](src/CircleCi/Models/ProjectEnvVar.cs)</code>

**OnError**: <code>[ApiException](src/CircleCi/Core/Exceptions/ApiException.cs)&lt;[GetProjectEnvironmentVariableError](src/CircleCi/Errors/GetProjectEnvironmentVariableError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;CheckoutKeyList&gt; ListCheckoutKeys(ListCheckoutKeysRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a paginated list of checkout keys for a given project.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.ProjectApi.ListCheckoutKeys(new ListCheckoutKeysRequest
    {
        ProjectSlug = "some example string",
    });
    // TODO: Handle 'response' of type CheckoutKeyList
}
catch (ApiException<ListCheckoutKeysError> ex)
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

<code>[ListCheckoutKeysRequest](src/CircleCi/Requests/ProjectApi/ListCheckoutKeysRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CheckoutKeyList](src/CircleCi/Models/CheckoutKeyList.cs)</code>

**OnError**: <code>[ApiException](src/CircleCi/Core/Exceptions/ApiException.cs)&lt;[ListCheckoutKeysError](src/CircleCi/Errors/ListCheckoutKeysError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ProjectEnvVarList&gt; ListProjectEnvironmentVariables(ListProjectEnvironmentVariablesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a paginated list of masked environment variables for a given project.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.ProjectApi.ListProjectEnvironmentVariables(new ListProjectEnvironmentVariablesRequest
    {
        ProjectSlug = "some example string",
    });
    // TODO: Handle 'response' of type ProjectEnvVarList
}
catch (ApiException<ListProjectEnvironmentVariablesError> ex)
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

<code>[ListProjectEnvironmentVariablesRequest](src/CircleCi/Requests/ProjectApi/ListProjectEnvironmentVariablesRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ProjectEnvVarList](src/CircleCi/Models/ProjectEnvVarList.cs)</code>

**OnError**: <code>[ApiException](src/CircleCi/Core/Exceptions/ApiException.cs)&lt;[ListProjectEnvironmentVariablesError](src/CircleCi/Errors/ListProjectEnvironmentVariablesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;IReadOnlyList&lt;ProjectCircleciProjectApi&gt;&gt; ListProjects(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list of all projects the authenticated user follows, including recent build summaries for each project.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.ProjectApi.ListProjects();
    // TODO: Handle 'response' of type IReadOnlyList<ProjectCircleciProjectApi>
}
catch (ApiException<ListProjectsError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>IReadOnlyList&lt;[ProjectCircleciProjectApi](src/CircleCi/Models/ProjectCircleciProjectApi.cs)&gt;</code>

**OnError**: <code>[ApiException](src/CircleCi/Core/Exceptions/ApiException.cs)&lt;[ListProjectsError](src/CircleCi/Errors/ListProjectsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## ResourceClassApi

> Source: [ResourceClassApi](src/CircleCi/Api/ResourceClassApi.cs)

<details>
<summary><code>Task&lt;ResourceClassCreation&gt; CreateResourceClass(CreateResourceClassRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a new resource class for the specified namespace. Returns a resource class token that is only displayed once and cannot be retrieved again. This token is used by runner agents to authenticate.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.ResourceClassApi.CreateResourceClass(new CreateResourceClassRequest
    {
        Body = new RunnerResourceClassRequest
        {
            ResourceClass = "some example string",
            Description = "some example string",
        },
    });
    // TODO: Handle 'response' of type ResourceClassCreation
}
catch (ApiException<CreateResourceClassError> ex)
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

<code>[CreateResourceClassRequest](src/CircleCi/Requests/ResourceClassApi/CreateResourceClassRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ResourceClassCreation](src/CircleCi/Models/ResourceClassCreation.cs)</code>

**OnError**: <code>[ApiException](src/CircleCi/Core/Exceptions/ApiException.cs)&lt;[CreateResourceClassError](src/CircleCi/Errors/CreateResourceClassError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task DeleteResourceClass(DeleteResourceClassRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a resource class. This will prevent any runners using this resource class from picking up new tasks.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.ResourceClassApi.DeleteResourceClass(new DeleteResourceClassRequest
    {
        ResourceClass = "some example string",
    });
}
catch (ApiException<DeleteResourceClassError> ex)
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

<code>[DeleteResourceClassRequest](src/CircleCi/Requests/ResourceClassApi/DeleteResourceClassRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/CircleCi/Core/Exceptions/ApiException.cs)&lt;[DeleteResourceClassError](src/CircleCi/Errors/DeleteResourceClassError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ResourceClass&gt; GetResourceClass(GetResourceClassRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns details about a specific resource class.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.ResourceClassApi.GetResourceClass(new GetResourceClassRequest
    {
        ResourceClass = "some example string",
    });
    // TODO: Handle 'response' of type ResourceClass
}
catch (ApiException<GetResourceClassError> ex)
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

<code>[GetResourceClassRequest](src/CircleCi/Requests/ResourceClassApi/GetResourceClassRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ResourceClass](src/CircleCi/Models/ResourceClass.cs)</code>

**OnError**: <code>[ApiException](src/CircleCi/Core/Exceptions/ApiException.cs)&lt;[GetResourceClassError](src/CircleCi/Errors/GetResourceClassError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;RunnerResourceClassResponse&gt; ListResourceClasses(ListResourceClassesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list of runner resource classes for the specified namespace. Resource classes define the compute resources available for self-hosted runner jobs.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.ResourceClassApi.ListResourceClasses(new ListResourceClassesRequest
    {
        Namespace = "some example string",
    });
    // TODO: Handle 'response' of type RunnerResourceClassResponse
}
catch (ApiException<ListResourceClassesError> ex)
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

<code>[ListResourceClassesRequest](src/CircleCi/Requests/ResourceClassApi/ListResourceClassesRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[RunnerResourceClassResponse](src/CircleCi/Models/RunnerResourceClassResponse.cs)</code>

**OnError**: <code>[ApiException](src/CircleCi/Core/Exceptions/ApiException.cs)&lt;[ListResourceClassesError](src/CircleCi/Errors/ListResourceClassesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## RunnerApi

> Source: [RunnerApi](src/CircleCi/Api/RunnerApi.cs)

<details>
<summary><code>Task&lt;RunnerResponse&gt; ListRunners(ListRunnersRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves a list of self-hosted runners filtered by namespace or resource class. At least one filter parameter must be provided to return results. Returns details including hostname, name, connection timestamps, version, and resource class.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.RunnerApi.ListRunners(new ListRunnersRequest());
    // TODO: Handle 'response' of type RunnerResponse
}
catch (ApiException<ListRunnersError> ex)
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

<code>[ListRunnersRequest](src/CircleCi/Requests/RunnerApi/ListRunnersRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[RunnerResponse](src/CircleCi/Models/RunnerResponse.cs)</code>

**OnError**: <code>[ApiException](src/CircleCi/Core/Exceptions/ApiException.cs)&lt;[ListRunnersError](src/CircleCi/Errors/ListRunnersError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## RunnerTask

> Source: [RunnerTask](src/CircleCi/Api/RunnerTask.cs)

<details>
<summary><code>Task&lt;RunnerTasksRunningResponse&gt; GetRunningTaskCount(GetRunningTaskCountRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the number of running tasks for a given resource class. This endpoint is scoped to a single resource class, so it must be called per resource class to get totals across all classes.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.RunnerTask.GetRunningTaskCount(new GetRunningTaskCountRequest
    {
        ResourceClass = "some example string",
    });
    // TODO: Handle 'response' of type RunnerTasksRunningResponse
}
catch (ApiException<GetRunningTaskCountError> ex)
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

<code>[GetRunningTaskCountRequest](src/CircleCi/Requests/RunnerTask/GetRunningTaskCountRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[RunnerTasksRunningResponse](src/CircleCi/Models/RunnerTasksRunningResponse.cs)</code>

**OnError**: <code>[ApiException](src/CircleCi/Core/Exceptions/ApiException.cs)&lt;[GetRunningTaskCountError](src/CircleCi/Errors/GetRunningTaskCountError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;RunnerTasksResponse&gt; GetUnclaimedTaskCount(GetUnclaimedTaskCountRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the number of unclaimed tasks for a given resource class. This endpoint is scoped to a single resource class, so it must be called per resource class to get totals across all classes.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.RunnerTask.GetUnclaimedTaskCount(new GetUnclaimedTaskCountRequest
    {
        ResourceClass = "some example string",
    });
    // TODO: Handle 'response' of type RunnerTasksResponse
}
catch (ApiException<GetUnclaimedTaskCountError> ex)
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

<code>[GetUnclaimedTaskCountRequest](src/CircleCi/Requests/RunnerTask/GetUnclaimedTaskCountRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[RunnerTasksResponse](src/CircleCi/Models/RunnerTasksResponse.cs)</code>

**OnError**: <code>[ApiException](src/CircleCi/Core/Exceptions/ApiException.cs)&lt;[GetUnclaimedTaskCountError](src/CircleCi/Errors/GetUnclaimedTaskCountError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## SshKey

> Source: [SshKey](src/CircleCi/Api/SshKey.cs)

<details>
<summary><code>Task AddSshKey(AddSshKeyRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Adds an SSH key to the specified project for use in builds.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.SshKey.AddSshKey(new AddSshKeyRequest
    {
        VcsType = VcsType.Github,
        Username = "some example string",
        Project = "some example string",
        Body = new ProjectProjectSshKeyRequest { Hostname = "some example string", PrivateKey = "some example string" },
    });
}
catch (ApiException<AddSshKeyError> ex)
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

<code>[AddSshKeyRequest](src/CircleCi/Requests/SshKey/AddSshKeyRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/CircleCi/Core/Exceptions/ApiException.cs)&lt;[AddSshKeyError](src/CircleCi/Errors/AddSshKeyError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;CheckoutKeyCircleCiRestApiV1SshKeyApi&gt; CreateCheckoutKey2(CreateCheckoutKey2Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a new checkout key for the specified project.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.SshKey.CreateCheckoutKey2(new CreateCheckoutKey2Request
    {
        VcsType = VcsType.Github,
        Username = "some example string",
        Project = "some example string",
        Body = new ProjectProjectCheckoutKeyRequest { Type = Type1CircleCiRestApiV1SshKeyApi.DeployKey },
    });
    // TODO: Handle 'response' of type CheckoutKeyCircleCiRestApiV1SshKeyApi
}
catch (ApiException<CreateCheckoutKey2Error> ex)
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

<code>[CreateCheckoutKey2Request](src/CircleCi/Requests/SshKey/CreateCheckoutKey2Request.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CheckoutKeyCircleCiRestApiV1SshKeyApi](src/CircleCi/Models/CheckoutKeyCircleCiRestApiV1SshKeyApi.cs)</code>

**OnError**: <code>[ApiException](src/CircleCi/Core/Exceptions/ApiException.cs)&lt;[CreateCheckoutKey2Error](src/CircleCi/Errors/CreateCheckoutKey2Error.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ProjectProjectCheckoutKeyFingerprintResponse&gt; DeleteCheckoutKey2(DeleteCheckoutKey2Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a checkout key by its fingerprint.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.SshKey.DeleteCheckoutKey2(new DeleteCheckoutKey2Request
    {
        VcsType = VcsType.Github,
        Username = "some example string",
        Project = "some example string",
        Fingerprint = "some example string",
    });
    // TODO: Handle 'response' of type ProjectProjectCheckoutKeyFingerprintResponse
}
catch (ApiException<DeleteCheckoutKey2Error> ex)
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

<code>[DeleteCheckoutKey2Request](src/CircleCi/Requests/SshKey/DeleteCheckoutKey2Request.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ProjectProjectCheckoutKeyFingerprintResponse](src/CircleCi/Models/ProjectProjectCheckoutKeyFingerprintResponse.cs)</code>

**OnError**: <code>[ApiException](src/CircleCi/Core/Exceptions/ApiException.cs)&lt;[DeleteCheckoutKey2Error](src/CircleCi/Errors/DeleteCheckoutKey2Error.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;CheckoutKeyCircleCiRestApiV1SshKeyApi&gt; GetCheckoutKey2(GetCheckoutKey2Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a checkout key by its fingerprint.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.SshKey.GetCheckoutKey2(new GetCheckoutKey2Request
    {
        VcsType = VcsType.Github,
        Username = "some example string",
        Project = "some example string",
        Fingerprint = "some example string",
    });
    // TODO: Handle 'response' of type CheckoutKeyCircleCiRestApiV1SshKeyApi
}
catch (ApiException<GetCheckoutKey2Error> ex)
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

<code>[GetCheckoutKey2Request](src/CircleCi/Requests/SshKey/GetCheckoutKey2Request.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CheckoutKeyCircleCiRestApiV1SshKeyApi](src/CircleCi/Models/CheckoutKeyCircleCiRestApiV1SshKeyApi.cs)</code>

**OnError**: <code>[ApiException](src/CircleCi/Core/Exceptions/ApiException.cs)&lt;[GetCheckoutKey2Error](src/CircleCi/Errors/GetCheckoutKey2Error.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;IReadOnlyList&lt;CheckoutKeyCircleCiRestApiV1SshKeyApi&gt;&gt; ListCheckoutKeys2(ListCheckoutKeys2Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list of checkout keys for the specified project.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.SshKey.ListCheckoutKeys2(new ListCheckoutKeys2Request
    {
        VcsType = VcsType.Github,
        Username = "some example string",
        Project = "some example string",
    });
    // TODO: Handle 'response' of type IReadOnlyList<CheckoutKeyCircleCiRestApiV1SshKeyApi>
}
catch (ApiException<ListCheckoutKeys2Error> ex)
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

<code>[ListCheckoutKeys2Request](src/CircleCi/Requests/SshKey/ListCheckoutKeys2Request.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>IReadOnlyList&lt;[CheckoutKeyCircleCiRestApiV1SshKeyApi](src/CircleCi/Models/CheckoutKeyCircleCiRestApiV1SshKeyApi.cs)&gt;</code>

**OnError**: <code>[ApiException](src/CircleCi/Core/Exceptions/ApiException.cs)&lt;[ListCheckoutKeys2Error](src/CircleCi/Errors/ListCheckoutKeys2Error.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## ScheduleApi

> Source: [ScheduleApi](src/CircleCi/Api/ScheduleApi.cs)

<details>
<summary><code>Task&lt;Schedule&gt; CreateSchedule(CreateScheduleOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a scheduled pipeline trigger for the specified project.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.ScheduleApi.CreateSchedule(new CreateScheduleOperationRequest
    {
        ProjectSlug = "some example string",
        Body = new CreateScheduleRequest
        {
            Name = "some example string",
            Timetable = new Timetable { PerHour = 1, HoursOfDay = [1], DaysOfWeek = [DaysOfWeek.Mon] },
            AttributionActor = AttributionActor.Current,
            Parameters = parameters,
        },
    });
    // TODO: Handle 'response' of type Schedule
}
catch (ApiException<CreateScheduleError> ex)
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

<code>[CreateScheduleOperationRequest](src/CircleCi/Requests/ScheduleApi/CreateScheduleOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Schedule](src/CircleCi/Models/Schedule.cs)</code>

**OnError**: <code>[ApiException](src/CircleCi/Core/Exceptions/ApiException.cs)&lt;[CreateScheduleError](src/CircleCi/Errors/CreateScheduleError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;MessageResponse&gt; DeleteSchedule(DeleteScheduleRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a schedule by its unique identifier.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.ScheduleApi.DeleteSchedule(new DeleteScheduleRequest
    {
        ScheduleId = Guid.Parse("00000000-0000-0000-0000-000000000000"),
    });
    // TODO: Handle 'response' of type MessageResponse
}
catch (ApiException<DeleteScheduleError> ex)
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

<code>[DeleteScheduleRequest](src/CircleCi/Requests/ScheduleApi/DeleteScheduleRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[MessageResponse](src/CircleCi/Models/MessageResponse.cs)</code>

**OnError**: <code>[ApiException](src/CircleCi/Core/Exceptions/ApiException.cs)&lt;[DeleteScheduleError](src/CircleCi/Errors/DeleteScheduleError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Schedule&gt; GetSchedule(GetScheduleRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a schedule by its unique identifier.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.ScheduleApi.GetSchedule(new GetScheduleRequest
    {
        ScheduleId = Guid.Parse("00000000-0000-0000-0000-000000000000"),
    });
    // TODO: Handle 'response' of type Schedule
}
catch (ApiException<GetScheduleError> ex)
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

<code>[GetScheduleRequest](src/CircleCi/Requests/ScheduleApi/GetScheduleRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Schedule](src/CircleCi/Models/Schedule.cs)</code>

**OnError**: <code>[ApiException](src/CircleCi/Core/Exceptions/ApiException.cs)&lt;[GetScheduleError](src/CircleCi/Errors/GetScheduleError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ScheduleList&gt; ListSchedules(ListSchedulesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list of scheduled pipeline triggers for a given project.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.ScheduleApi.ListSchedules(new ListSchedulesRequest
    {
        ProjectSlug = "some example string",
    });
    // TODO: Handle 'response' of type ScheduleList
}
catch (ApiException<ListSchedulesError> ex)
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

<code>[ListSchedulesRequest](src/CircleCi/Requests/ScheduleApi/ListSchedulesRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ScheduleList](src/CircleCi/Models/ScheduleList.cs)</code>

**OnError**: <code>[ApiException](src/CircleCi/Core/Exceptions/ApiException.cs)&lt;[ListSchedulesError](src/CircleCi/Errors/ListSchedulesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Schedule&gt; UpdateSchedule(UpdateScheduleOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates an existing schedule with the provided parameters.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.ScheduleApi.UpdateSchedule(new UpdateScheduleOperationRequest
    {
        ScheduleId = Guid.Parse("00000000-0000-0000-0000-000000000000"),
        Body = new UpdateScheduleRequest(),
    });
    // TODO: Handle 'response' of type Schedule
}
catch (ApiException<UpdateScheduleError> ex)
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

<code>[UpdateScheduleOperationRequest](src/CircleCi/Requests/ScheduleApi/UpdateScheduleOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Schedule](src/CircleCi/Models/Schedule.cs)</code>

**OnError**: <code>[ApiException](src/CircleCi/Core/Exceptions/ApiException.cs)&lt;[UpdateScheduleError](src/CircleCi/Errors/UpdateScheduleError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## TestMetadataApi

> Source: [TestMetadataApi](src/CircleCi/Api/TestMetadataApi.cs)

<details>
<summary><code>Task&lt;ProjectProjectBuildNumTestsResponse&gt; ListBuildTests(ListBuildTestsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns test metadata collected from the specified build, sourced from JUnit XML or similar test result files.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.TestMetadataApi.ListBuildTests(new ListBuildTestsRequest
    {
        VcsType = VcsType.Github,
        Username = "some example string",
        Project = "some example string",
        BuildNum = 1,
    });
    // TODO: Handle 'response' of type ProjectProjectBuildNumTestsResponse
}
catch (ApiException<ListBuildTestsError> ex)
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

<code>[ListBuildTestsRequest](src/CircleCi/Requests/TestMetadataApi/ListBuildTestsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ProjectProjectBuildNumTestsResponse](src/CircleCi/Models/ProjectProjectBuildNumTestsResponse.cs)</code>

**OnError**: <code>[ApiException](src/CircleCi/Core/Exceptions/ApiException.cs)&lt;[ListBuildTestsError](src/CircleCi/Errors/ListBuildTestsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## UserApi

> Source: [UserApi](src/CircleCi/Api/UserApi.cs)

<details>
<summary><code>Task&lt;IReadOnlyList&lt;Collaboration&gt;&gt; GetCollaborations(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list of organizations and accounts the current user collaborates with.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.UserApi.GetCollaborations();
    // TODO: Handle 'response' of type IReadOnlyList<Collaboration>
}
catch (ApiException<GetCollaborationsError> ex)
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

**OnSuccess**: <code>IReadOnlyList&lt;[Collaboration](src/CircleCi/Models/Collaboration.cs)&gt;</code>

**OnError**: <code>[ApiException](src/CircleCi/Core/Exceptions/ApiException.cs)&lt;[GetCollaborationsError](src/CircleCi/Errors/GetCollaborationsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;User&gt; GetCurrentUser(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns information about the currently authenticated user, including name, login, and avatar URL.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.UserApi.GetCurrentUser();
    // TODO: Handle 'response' of type User
}
catch (ApiException<GetCurrentUserError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[User](src/CircleCi/Models/User.cs)</code>

**OnError**: <code>[ApiException](src/CircleCi/Core/Exceptions/ApiException.cs)&lt;[GetCurrentUserError](src/CircleCi/Errors/GetCurrentUserError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Webhook

> Source: [Webhook](src/CircleCi/Api/Webhook.cs)

<details>
<summary><code>Task&lt;WebhookInfo&gt; CreateWebhook(CreateWebhookOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a new outbound webhook for the specified scope.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Webhook.CreateWebhook(new CreateWebhookOperationRequest
    {
        Body = new CreateWebhookRequest
        {
            Name = "some example string",
            Url = "https://example.com",
            Events = [Event.WorkflowCompleted],
            Scope = new Scope1 { Id = Guid.Parse("00000000-0000-0000-0000-000000000000") },
            SigningSecret = "some example string",
        },
    });
    // TODO: Handle 'response' of type WebhookInfo
}
catch (ApiException<CreateWebhookError> ex)
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

<code>[CreateWebhookOperationRequest](src/CircleCi/Requests/Webhook/CreateWebhookOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[WebhookInfo](src/CircleCi/Models/WebhookInfo.cs)</code>

**OnError**: <code>[ApiException](src/CircleCi/Core/Exceptions/ApiException.cs)&lt;[CreateWebhookError](src/CircleCi/Errors/CreateWebhookError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;MessageResponse&gt; DeleteWebhook(DeleteWebhookRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a webhook by its unique identifier.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Webhook.DeleteWebhook(new DeleteWebhookRequest
    {
        WebhookId = Guid.Parse("00000000-0000-0000-0000-000000000000"),
    });
    // TODO: Handle 'response' of type MessageResponse
}
catch (ApiException<DeleteWebhookError> ex)
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

<code>[DeleteWebhookRequest](src/CircleCi/Requests/Webhook/DeleteWebhookRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[MessageResponse](src/CircleCi/Models/MessageResponse.cs)</code>

**OnError**: <code>[ApiException](src/CircleCi/Core/Exceptions/ApiException.cs)&lt;[DeleteWebhookError](src/CircleCi/Errors/DeleteWebhookError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;WebhookInfo&gt; GetWebhook(GetWebhookRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a webhook by its unique identifier.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Webhook.GetWebhook(new GetWebhookRequest
    {
        WebhookId = Guid.Parse("00000000-0000-0000-0000-000000000000"),
    });
    // TODO: Handle 'response' of type WebhookInfo
}
catch (ApiException<GetWebhookError> ex)
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

<code>[GetWebhookRequest](src/CircleCi/Requests/Webhook/GetWebhookRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[WebhookInfo](src/CircleCi/Models/WebhookInfo.cs)</code>

**OnError**: <code>[ApiException](src/CircleCi/Core/Exceptions/ApiException.cs)&lt;[GetWebhookError](src/CircleCi/Errors/GetWebhookError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;WebhookList&gt; ListWebhooks(ListWebhooksRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list of outbound webhooks for the specified scope.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Webhook.ListWebhooks(new ListWebhooksRequest
    {
        ScopeId = Guid.Parse("00000000-0000-0000-0000-000000000000"),
        ScopeType = ScopeType.Project,
    });
    // TODO: Handle 'response' of type WebhookList
}
catch (ApiException<ListWebhooksError> ex)
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

<code>[ListWebhooksRequest](src/CircleCi/Requests/Webhook/ListWebhooksRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[WebhookList](src/CircleCi/Models/WebhookList.cs)</code>

**OnError**: <code>[ApiException](src/CircleCi/Core/Exceptions/ApiException.cs)&lt;[ListWebhooksError](src/CircleCi/Errors/ListWebhooksError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;WebhookInfo&gt; UpdateWebhook(UpdateWebhookOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates an existing webhook with the provided parameters.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Webhook.UpdateWebhook(new UpdateWebhookOperationRequest
    {
        WebhookId = Guid.Parse("00000000-0000-0000-0000-000000000000"),
        Body = new UpdateWebhookRequest(),
    });
    // TODO: Handle 'response' of type WebhookInfo
}
catch (ApiException<UpdateWebhookError> ex)
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

<code>[UpdateWebhookOperationRequest](src/CircleCi/Requests/Webhook/UpdateWebhookOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[WebhookInfo](src/CircleCi/Models/WebhookInfo.cs)</code>

**OnError**: <code>[ApiException](src/CircleCi/Core/Exceptions/ApiException.cs)&lt;[UpdateWebhookError](src/CircleCi/Errors/UpdateWebhookError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## WorkflowApi

> Source: [WorkflowApi](src/CircleCi/Api/WorkflowApi.cs)

<details>
<summary><code>Task&lt;MessageResponse&gt; ApproveWorkflowJob(ApproveWorkflowJobRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Approves a pending approval job in a workflow, allowing the workflow to continue execution.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.WorkflowApi.ApproveWorkflowJob(new ApproveWorkflowJobRequest
    {
        Id = Guid.Parse("00000000-0000-0000-0000-000000000000"),
        ApprovalRequestId = Guid.Parse("00000000-0000-0000-0000-000000000000"),
    });
    // TODO: Handle 'response' of type MessageResponse
}
catch (ApiException<ApproveWorkflowJobError> ex)
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

<code>[ApproveWorkflowJobRequest](src/CircleCi/Requests/WorkflowApi/ApproveWorkflowJobRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[MessageResponse](src/CircleCi/Models/MessageResponse.cs)</code>

**OnError**: <code>[ApiException](src/CircleCi/Core/Exceptions/ApiException.cs)&lt;[ApproveWorkflowJobError](src/CircleCi/Errors/ApproveWorkflowJobError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;MessageResponse&gt; CancelWorkflow(CancelWorkflowRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Cancels a running workflow and all of its running jobs.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.WorkflowApi.CancelWorkflow(new CancelWorkflowRequest
    {
        Id = Guid.Parse("00000000-0000-0000-0000-000000000000"),
    });
    // TODO: Handle 'response' of type MessageResponse
}
catch (ApiException<CancelWorkflowError> ex)
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

<code>[CancelWorkflowRequest](src/CircleCi/Requests/WorkflowApi/CancelWorkflowRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[MessageResponse](src/CircleCi/Models/MessageResponse.cs)</code>

**OnError**: <code>[ApiException](src/CircleCi/Core/Exceptions/ApiException.cs)&lt;[CancelWorkflowError](src/CircleCi/Errors/CancelWorkflowError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Workflow&gt; GetWorkflow(GetWorkflowRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a workflow by its unique identifier, including its status, pipeline ID, and timing information.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.WorkflowApi.GetWorkflow(new GetWorkflowRequest
    {
        Id = Guid.Parse("00000000-0000-0000-0000-000000000000"),
    });
    // TODO: Handle 'response' of type Workflow
}
catch (ApiException<GetWorkflowError> ex)
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

<code>[GetWorkflowRequest](src/CircleCi/Requests/WorkflowApi/GetWorkflowRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Workflow](src/CircleCi/Models/Workflow.cs)</code>

**OnError**: <code>[ApiException](src/CircleCi/Core/Exceptions/ApiException.cs)&lt;[GetWorkflowError](src/CircleCi/Errors/GetWorkflowError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;WorkflowJobList&gt; ListWorkflowJobs(ListWorkflowJobsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list of jobs associated with a given workflow.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.WorkflowApi.ListWorkflowJobs(new ListWorkflowJobsRequest
    {
        Id = Guid.Parse("00000000-0000-0000-0000-000000000000"),
    });
    // TODO: Handle 'response' of type WorkflowJobList
}
catch (ApiException<ListWorkflowJobsError> ex)
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

<code>[ListWorkflowJobsRequest](src/CircleCi/Requests/WorkflowApi/ListWorkflowJobsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[WorkflowJobList](src/CircleCi/Models/WorkflowJobList.cs)</code>

**OnError**: <code>[ApiException](src/CircleCi/Core/Exceptions/ApiException.cs)&lt;[ListWorkflowJobsError](src/CircleCi/Errors/ListWorkflowJobsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;RerunWorkflowResponse&gt; RerunWorkflow(RerunWorkflowRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Reruns a workflow. Optionally, specific jobs can be selected for rerun, and SSH access can be enabled for debugging.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.WorkflowApi.RerunWorkflow(new RerunWorkflowRequest
    {
        Id = Guid.Parse("00000000-0000-0000-0000-000000000000"),
    });
    // TODO: Handle 'response' of type RerunWorkflowResponse
}
catch (ApiException<RerunWorkflowError> ex)
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

<code>[RerunWorkflowRequest](src/CircleCi/Requests/WorkflowApi/RerunWorkflowRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[RerunWorkflowResponse](src/CircleCi/Models/RerunWorkflowResponse.cs)</code>

**OnError**: <code>[ApiException](src/CircleCi/Core/Exceptions/ApiException.cs)&lt;[RerunWorkflowError](src/CircleCi/Errors/RerunWorkflowError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

