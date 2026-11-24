# Reference

Every operation below is shown in its throwing form. On an error status it throws `ApiException<TError>` — the status code, headers, content type and the operation's error type, `RawError` (the raw body) when the spec declares none — and where an operation offers an `…AsResult` sibling, that sibling returns `ApiResult<TResponse, TError>` instead. A request that produces no usable response surfaces as `SdkConnectionException` or `SdkTimeoutException`, a body that does not match the documented response type as `ResponseDeserializationException`, and a required credential that is not configured, or one that cannot be applied, as `AuthSchemeException`; all of them derive from `SdkException` and name the failed call. See [README → Error Handling](README.md#error-handling).

> Source: [AwsCodeBuildClient](src/AwsCodeBuild/AwsCodeBuildClient.cs)

## AwsCodebuildApi

> Source: [AwsCodebuildApi](src/AwsCodeBuild/Api/AwsCodebuildApi.cs)

<details>
<summary><code>Task StartSandbox(StartSandboxRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Starts a sandbox.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.AwsCodebuildApi.StartSandbox(new StartSandboxRequest
    {
        XAmzTarget = XAmzTarget.CodeBuild20161006StartSandbox,
    });
}
catch (ApiException<StartSandboxError> ex)
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

<code>[StartSandboxRequest](src/AwsCodeBuild/Requests/AwsCodebuildApi/StartSandboxRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AwsCodeBuild/Core/Exceptions/ApiException.cs)&lt;[StartSandboxError](src/AwsCodeBuild/Errors/StartSandboxError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task StartSandboxConnection(StartSandboxConnectionRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Starts a sandbox connection.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.AwsCodebuildApi.StartSandboxConnection(new StartSandboxConnectionRequest
    {
        XAmzTarget = XAmzTarget2.CodeBuild20161006StartSandboxConnection,
    });
}
catch (ApiException<StartSandboxConnectionError> ex)
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

<code>[StartSandboxConnectionRequest](src/AwsCodeBuild/Requests/AwsCodebuildApi/StartSandboxConnectionRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AwsCodeBuild/Core/Exceptions/ApiException.cs)&lt;[StartSandboxConnectionError](src/AwsCodeBuild/Errors/StartSandboxConnectionError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task StopSandbox(StopSandboxRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Stops a sandbox.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.AwsCodebuildApi.StopSandbox(new StopSandboxRequest
    {
        XAmzTarget = XAmzTarget1.CodeBuild20161006StopSandbox,
    });
}
catch (ApiException<StopSandboxError> ex)
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

<code>[StopSandboxRequest](src/AwsCodeBuild/Requests/AwsCodebuildApi/StopSandboxRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AwsCodeBuild/Core/Exceptions/ApiException.cs)&lt;[StopSandboxError](src/AwsCodeBuild/Errors/StopSandboxError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## AwsCodebuildXAmzTargetCodebuild

> Source: [AwsCodebuildXAmzTargetCodebuild](src/AwsCodeBuild/Api/AwsCodebuildXAmzTargetCodebuild.cs)

<details>
<summary><code>Task BatchDeleteBuilds(BatchDeleteBuildsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes one or more builds.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.AwsCodebuildXAmzTargetCodebuild.BatchDeleteBuilds(new BatchDeleteBuildsRequest
    {
        XAmzTarget = XAmzTargetAwsCodeBuildAwsCodebuildXAmzTargetCodebuildApi.CodeBuild20161006BatchDeleteBuilds,
    });
}
catch (ApiException<BatchDeleteBuildsError> ex)
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

<code>[BatchDeleteBuildsRequest](src/AwsCodeBuild/Requests/AwsCodebuildXAmzTargetCodebuild/BatchDeleteBuildsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AwsCodeBuild/Core/Exceptions/ApiException.cs)&lt;[BatchDeleteBuildsError](src/AwsCodeBuild/Errors/BatchDeleteBuildsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task BatchGetBuildBatches(BatchGetBuildBatchesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves information about one or more batch builds.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.AwsCodebuildXAmzTargetCodebuild.BatchGetBuildBatches(new BatchGetBuildBatchesRequest
    {
        XAmzTarget = XAmzTarget3.CodeBuild20161006BatchGetBuildBatches,
    });
}
catch (ApiException<BatchGetBuildBatchesError> ex)
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

<code>[BatchGetBuildBatchesRequest](src/AwsCodeBuild/Requests/AwsCodebuildXAmzTargetCodebuild/BatchGetBuildBatchesRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AwsCodeBuild/Core/Exceptions/ApiException.cs)&lt;[BatchGetBuildBatchesError](src/AwsCodeBuild/Errors/BatchGetBuildBatchesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task BatchGetBuilds(BatchGetBuildsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets information about one or more builds.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.AwsCodebuildXAmzTargetCodebuild.BatchGetBuilds(new BatchGetBuildsRequest
    {
        XAmzTarget = XAmzTarget1AwsCodeBuildAwsCodebuildXAmzTargetCodebuildApi.CodeBuild20161006BatchGetBuilds,
    });
}
catch (ApiException<BatchGetBuildsError> ex)
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

<code>[BatchGetBuildsRequest](src/AwsCodeBuild/Requests/AwsCodebuildXAmzTargetCodebuild/BatchGetBuildsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AwsCodeBuild/Core/Exceptions/ApiException.cs)&lt;[BatchGetBuildsError](src/AwsCodeBuild/Errors/BatchGetBuildsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task BatchGetProjects(BatchGetProjectsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets information about one or more build projects.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.AwsCodebuildXAmzTargetCodebuild.BatchGetProjects(new BatchGetProjectsRequest
    {
        XAmzTarget = XAmzTarget6.CodeBuild20161006BatchGetProjects,
    });
}
catch (ApiException<BatchGetProjectsError> ex)
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

<code>[BatchGetProjectsRequest](src/AwsCodeBuild/Requests/AwsCodebuildXAmzTargetCodebuild/BatchGetProjectsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AwsCodeBuild/Core/Exceptions/ApiException.cs)&lt;[BatchGetProjectsError](src/AwsCodeBuild/Errors/BatchGetProjectsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task BatchGetReportGroups(BatchGetReportGroupsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns an array of report groups.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.AwsCodebuildXAmzTargetCodebuild.BatchGetReportGroups(new BatchGetReportGroupsRequest
    {
        XAmzTarget = XAmzTarget10.CodeBuild20161006BatchGetReportGroups,
    });
}
catch (ApiException<BatchGetReportGroupsError> ex)
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

<code>[BatchGetReportGroupsRequest](src/AwsCodeBuild/Requests/AwsCodebuildXAmzTargetCodebuild/BatchGetReportGroupsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AwsCodeBuild/Core/Exceptions/ApiException.cs)&lt;[BatchGetReportGroupsError](src/AwsCodeBuild/Errors/BatchGetReportGroupsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task BatchGetReports(BatchGetReportsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns an array of reports.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.AwsCodebuildXAmzTargetCodebuild.BatchGetReports(new BatchGetReportsRequest
    {
        XAmzTarget = XAmzTarget15.CodeBuild20161006BatchGetReports,
    });
}
catch (ApiException<BatchGetReportsError> ex)
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

<code>[BatchGetReportsRequest](src/AwsCodeBuild/Requests/AwsCodebuildXAmzTargetCodebuild/BatchGetReportsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AwsCodeBuild/Core/Exceptions/ApiException.cs)&lt;[BatchGetReportsError](src/AwsCodeBuild/Errors/BatchGetReportsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task CreateProject(CreateProjectRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a build project.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.AwsCodebuildXAmzTargetCodebuild.CreateProject(new CreateProjectRequest
    {
        XAmzTarget = XAmzTarget7.CodeBuild20161006CreateProject,
    });
}
catch (ApiException<CreateProjectError> ex)
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

<code>[CreateProjectRequest](src/AwsCodeBuild/Requests/AwsCodebuildXAmzTargetCodebuild/CreateProjectRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AwsCodeBuild/Core/Exceptions/ApiException.cs)&lt;[CreateProjectError](src/AwsCodeBuild/Errors/CreateProjectError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task CreateReportGroup(CreateReportGroupRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a report group. A report group contains a collection of reports.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.AwsCodebuildXAmzTargetCodebuild.CreateReportGroup(new CreateReportGroupRequest
    {
        XAmzTarget = XAmzTarget11.CodeBuild20161006CreateReportGroup,
    });
}
catch (ApiException<CreateReportGroupError> ex)
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

<code>[CreateReportGroupRequest](src/AwsCodeBuild/Requests/AwsCodebuildXAmzTargetCodebuild/CreateReportGroupRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AwsCodeBuild/Core/Exceptions/ApiException.cs)&lt;[CreateReportGroupError](src/AwsCodeBuild/Errors/CreateReportGroupError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task CreateWebhook(CreateWebhookRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

For an existing CodeBuild build project that has its source code stored in a GitHub or Bitbucket repository, enables CodeBuild to start rebuilding the source code every time a code change is pushed to the repository. If you enable webhooks for an CodeBuild project, and the project is used as a build step in CodePipeline, then two identical builds are created for each commit. One build is triggered through webhooks, and one through CodePipeline. Because billing is on a per-build basis, you are billed for both builds. Therefore, if you are using CodePipeline, we recommend that you disable webhooks in CodeBuild. In the CodeBuild console, clear the Webhook box. For more information, see step 5 in Change a Build Project's Settings.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.AwsCodebuildXAmzTargetCodebuild.CreateWebhook(new CreateWebhookRequest
    {
        XAmzTarget = XAmzTarget17.CodeBuild20161006CreateWebhook,
    });
}
catch (ApiException<CreateWebhookError> ex)
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

<code>[CreateWebhookRequest](src/AwsCodeBuild/Requests/AwsCodebuildXAmzTargetCodebuild/CreateWebhookRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AwsCodeBuild/Core/Exceptions/ApiException.cs)&lt;[CreateWebhookError](src/AwsCodeBuild/Errors/CreateWebhookError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task DeleteBuildBatch(DeleteBuildBatchRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a batch build.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.AwsCodebuildXAmzTargetCodebuild.DeleteBuildBatch(new DeleteBuildBatchRequest
    {
        XAmzTarget = XAmzTarget20.CodeBuild20161006DeleteBuildBatch,
    });
}
catch (ApiException<DeleteBuildBatchError> ex)
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

<code>[DeleteBuildBatchRequest](src/AwsCodeBuild/Requests/AwsCodebuildXAmzTargetCodebuild/DeleteBuildBatchRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AwsCodeBuild/Core/Exceptions/ApiException.cs)&lt;[DeleteBuildBatchError](src/AwsCodeBuild/Errors/DeleteBuildBatchError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task DeleteProject(DeleteProjectRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a build project. When you delete a project, its builds are not deleted.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.AwsCodebuildXAmzTargetCodebuild.DeleteProject(new DeleteProjectRequest
    {
        XAmzTarget = XAmzTarget8.CodeBuild20161006DeleteProject,
    });
}
catch (ApiException<DeleteProjectError> ex)
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

<code>[DeleteProjectRequest](src/AwsCodeBuild/Requests/AwsCodebuildXAmzTargetCodebuild/DeleteProjectRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AwsCodeBuild/Core/Exceptions/ApiException.cs)&lt;[DeleteProjectError](src/AwsCodeBuild/Errors/DeleteProjectError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task DeleteReportGroup(DeleteReportGroupRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a report group. Before you delete a report group, you must delete its reports.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.AwsCodebuildXAmzTargetCodebuild.DeleteReportGroup(new DeleteReportGroupRequest
    {
        XAmzTarget = XAmzTarget12.CodeBuild20161006DeleteReportGroup,
    });
}
catch (ApiException<DeleteReportGroupError> ex)
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

<code>[DeleteReportGroupRequest](src/AwsCodeBuild/Requests/AwsCodebuildXAmzTargetCodebuild/DeleteReportGroupRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AwsCodeBuild/Core/Exceptions/ApiException.cs)&lt;[DeleteReportGroupError](src/AwsCodeBuild/Errors/DeleteReportGroupError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task DeleteResourcePolicy(DeleteResourcePolicyRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a resource policy that is identified by its resource ARN.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.AwsCodebuildXAmzTargetCodebuild.DeleteResourcePolicy(new DeleteResourcePolicyRequest
    {
        XAmzTarget = XAmzTarget23.CodeBuild20161006DeleteResourcePolicy,
    });
}
catch (ApiException<DeleteResourcePolicyError> ex)
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

<code>[DeleteResourcePolicyRequest](src/AwsCodeBuild/Requests/AwsCodebuildXAmzTargetCodebuild/DeleteResourcePolicyRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AwsCodeBuild/Core/Exceptions/ApiException.cs)&lt;[DeleteResourcePolicyError](src/AwsCodeBuild/Errors/DeleteResourcePolicyError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task DeleteSourceCredentials(DeleteSourceCredentialsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a set of GitHub, GitHub Enterprise, or Bitbucket source credentials.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.AwsCodebuildXAmzTargetCodebuild.DeleteSourceCredentials(new DeleteSourceCredentialsRequest
    {
        XAmzTarget = XAmzTarget26.CodeBuild20161006DeleteSourceCredentials,
    });
}
catch (ApiException<DeleteSourceCredentialsError> ex)
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

<code>[DeleteSourceCredentialsRequest](src/AwsCodeBuild/Requests/AwsCodebuildXAmzTargetCodebuild/DeleteSourceCredentialsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AwsCodeBuild/Core/Exceptions/ApiException.cs)&lt;[DeleteSourceCredentialsError](src/AwsCodeBuild/Errors/DeleteSourceCredentialsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task DeleteWebhook(DeleteWebhookRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

For an existing CodeBuild build project that has its source code stored in a GitHub or Bitbucket repository, stops CodeBuild from rebuilding the source code every time a code change is pushed to the repository.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.AwsCodebuildXAmzTargetCodebuild.DeleteWebhook(new DeleteWebhookRequest
    {
        XAmzTarget = XAmzTarget18.CodeBuild20161006DeleteWebhook,
    });
}
catch (ApiException<DeleteWebhookError> ex)
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

<code>[DeleteWebhookRequest](src/AwsCodeBuild/Requests/AwsCodebuildXAmzTargetCodebuild/DeleteWebhookRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AwsCodeBuild/Core/Exceptions/ApiException.cs)&lt;[DeleteWebhookError](src/AwsCodeBuild/Errors/DeleteWebhookError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task DescribeCodeCoverages(DescribeCodeCoveragesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves one or more code coverage reports.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.AwsCodebuildXAmzTargetCodebuild.DescribeCodeCoverages(new DescribeCodeCoveragesRequest
    {
        XAmzTarget = XAmzTarget29.CodeBuild20161006DescribeCodeCoverages,
    });
}
catch (ApiException<DescribeCodeCoveragesError> ex)
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

<code>[DescribeCodeCoveragesRequest](src/AwsCodeBuild/Requests/AwsCodebuildXAmzTargetCodebuild/DescribeCodeCoveragesRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AwsCodeBuild/Core/Exceptions/ApiException.cs)&lt;[DescribeCodeCoveragesError](src/AwsCodeBuild/Errors/DescribeCodeCoveragesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task DescribeTestCases(DescribeTestCasesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list of details about test cases for a report.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.AwsCodebuildXAmzTargetCodebuild.DescribeTestCases(new DescribeTestCasesRequest
    {
        XAmzTarget = XAmzTarget30.CodeBuild20161006DescribeTestCases,
    });
}
catch (ApiException<DescribeTestCasesError> ex)
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

<code>[DescribeTestCasesRequest](src/AwsCodeBuild/Requests/AwsCodebuildXAmzTargetCodebuild/DescribeTestCasesRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AwsCodeBuild/Core/Exceptions/ApiException.cs)&lt;[DescribeTestCasesError](src/AwsCodeBuild/Errors/DescribeTestCasesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task GetReportGroupTrend(GetReportGroupTrendRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Analyzes and accumulates test report values for the specified test reports.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.AwsCodebuildXAmzTargetCodebuild.GetReportGroupTrend(new GetReportGroupTrendRequest
    {
        XAmzTarget = XAmzTarget31.CodeBuild20161006GetReportGroupTrend,
    });
}
catch (ApiException<GetReportGroupTrendError> ex)
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

<code>[GetReportGroupTrendRequest](src/AwsCodeBuild/Requests/AwsCodebuildXAmzTargetCodebuild/GetReportGroupTrendRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AwsCodeBuild/Core/Exceptions/ApiException.cs)&lt;[GetReportGroupTrendError](src/AwsCodeBuild/Errors/GetReportGroupTrendError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task GetResourcePolicy(GetResourcePolicyRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets a resource policy that is identified by its resource ARN.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.AwsCodebuildXAmzTargetCodebuild.GetResourcePolicy(new GetResourcePolicyRequest
    {
        XAmzTarget = XAmzTarget24.CodeBuild20161006GetResourcePolicy,
    });
}
catch (ApiException<GetResourcePolicyError> ex)
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

<code>[GetResourcePolicyRequest](src/AwsCodeBuild/Requests/AwsCodebuildXAmzTargetCodebuild/GetResourcePolicyRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AwsCodeBuild/Core/Exceptions/ApiException.cs)&lt;[GetResourcePolicyError](src/AwsCodeBuild/Errors/GetResourcePolicyError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task ImportSourceCredentials(ImportSourceCredentialsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Imports the source repository credentials for an CodeBuild project that has its source code stored in a GitHub, GitHub Enterprise, GitLab, GitLab Self Managed, or Bitbucket repository.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.AwsCodebuildXAmzTargetCodebuild.ImportSourceCredentials(new ImportSourceCredentialsRequest
    {
        XAmzTarget = XAmzTarget27.CodeBuild20161006ImportSourceCredentials,
    });
}
catch (ApiException<ImportSourceCredentialsError> ex)
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

<code>[ImportSourceCredentialsRequest](src/AwsCodeBuild/Requests/AwsCodebuildXAmzTargetCodebuild/ImportSourceCredentialsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AwsCodeBuild/Core/Exceptions/ApiException.cs)&lt;[ImportSourceCredentialsError](src/AwsCodeBuild/Errors/ImportSourceCredentialsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task InvalidateProjectCache(InvalidateProjectCacheRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Resets the cache for a project.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.AwsCodebuildXAmzTargetCodebuild.InvalidateProjectCache(new InvalidateProjectCacheRequest
    {
        XAmzTarget = XAmzTarget32.CodeBuild20161006InvalidateProjectCache,
    });
}
catch (ApiException<InvalidateProjectCacheError> ex)
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

<code>[InvalidateProjectCacheRequest](src/AwsCodeBuild/Requests/AwsCodebuildXAmzTargetCodebuild/InvalidateProjectCacheRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AwsCodeBuild/Core/Exceptions/ApiException.cs)&lt;[InvalidateProjectCacheError](src/AwsCodeBuild/Errors/InvalidateProjectCacheError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task ListBuildBatches(ListBuildBatchesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves the identifiers of your build batches in the current region.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.AwsCodebuildXAmzTargetCodebuild.ListBuildBatches(new ListBuildBatchesRequest
    {
        XAmzTarget = XAmzTarget4.CodeBuild20161006ListBuildBatches,
    });
}
catch (ApiException<ListBuildBatchesError> ex)
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

<code>[ListBuildBatchesRequest](src/AwsCodeBuild/Requests/AwsCodebuildXAmzTargetCodebuild/ListBuildBatchesRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AwsCodeBuild/Core/Exceptions/ApiException.cs)&lt;[ListBuildBatchesError](src/AwsCodeBuild/Errors/ListBuildBatchesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task ListBuildBatchesForProject(ListBuildBatchesForProjectRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves the identifiers of the build batches for a specific project.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.AwsCodebuildXAmzTargetCodebuild.ListBuildBatchesForProject(new ListBuildBatchesForProjectRequest
    {
        XAmzTarget = XAmzTarget5.CodeBuild20161006ListBuildBatchesForProject,
    });
}
catch (ApiException<ListBuildBatchesForProjectError> ex)
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

<code>[ListBuildBatchesForProjectRequest](src/AwsCodeBuild/Requests/AwsCodebuildXAmzTargetCodebuild/ListBuildBatchesForProjectRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AwsCodeBuild/Core/Exceptions/ApiException.cs)&lt;[ListBuildBatchesForProjectError](src/AwsCodeBuild/Errors/ListBuildBatchesForProjectError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task ListBuildsForProject(ListBuildsForProjectRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets a list of build identifiers for the specified build project, with each build identifier representing a single build.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.AwsCodebuildXAmzTargetCodebuild.ListBuildsForProject(new ListBuildsForProjectRequest
    {
        XAmzTarget = XAmzTarget2AwsCodeBuildAwsCodebuildXAmzTargetCodebuildApi.CodeBuild20161006ListBuildsForProject,
    });
}
catch (ApiException<ListBuildsForProjectError> ex)
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

<code>[ListBuildsForProjectRequest](src/AwsCodeBuild/Requests/AwsCodebuildXAmzTargetCodebuild/ListBuildsForProjectRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AwsCodeBuild/Core/Exceptions/ApiException.cs)&lt;[ListBuildsForProjectError](src/AwsCodeBuild/Errors/ListBuildsForProjectError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task ListCuratedEnvironmentImages(ListCuratedEnvironmentImagesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets information about Docker images that are managed by CodeBuild.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.AwsCodebuildXAmzTargetCodebuild.ListCuratedEnvironmentImages(new ListCuratedEnvironmentImagesRequest
    {
        XAmzTarget = XAmzTarget34.CodeBuild20161006ListCuratedEnvironmentImages,
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

<code>[ListCuratedEnvironmentImagesRequest](src/AwsCodeBuild/Requests/AwsCodebuildXAmzTargetCodebuild/ListCuratedEnvironmentImagesRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AwsCodeBuild/Core/Exceptions/ApiException.cs)&lt;[RawError](src/AwsCodeBuild/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task ListReportGroups(ListReportGroupsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets a list ARNs for the report groups in the current Amazon Web Services account.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.AwsCodebuildXAmzTargetCodebuild.ListReportGroups(new ListReportGroupsRequest
    {
        XAmzTarget = XAmzTarget13.CodeBuild20161006ListReportGroups,
    });
}
catch (ApiException<ListReportGroupsError> ex)
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

<code>[ListReportGroupsRequest](src/AwsCodeBuild/Requests/AwsCodebuildXAmzTargetCodebuild/ListReportGroupsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AwsCodeBuild/Core/Exceptions/ApiException.cs)&lt;[ListReportGroupsError](src/AwsCodeBuild/Errors/ListReportGroupsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task ListReportsForReportGroup(ListReportsForReportGroupRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list of ARNs for the reports that belong to a ReportGroup.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.AwsCodebuildXAmzTargetCodebuild.ListReportsForReportGroup(new ListReportsForReportGroupRequest
    {
        XAmzTarget = XAmzTarget16.CodeBuild20161006ListReportsForReportGroup,
    });
}
catch (ApiException<ListReportsForReportGroupError> ex)
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

<code>[ListReportsForReportGroupRequest](src/AwsCodeBuild/Requests/AwsCodebuildXAmzTargetCodebuild/ListReportsForReportGroupRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AwsCodeBuild/Core/Exceptions/ApiException.cs)&lt;[ListReportsForReportGroupError](src/AwsCodeBuild/Errors/ListReportsForReportGroupError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task ListSharedProjects(ListSharedProjectsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets a list of projects that are shared with other Amazon Web Services accounts or users.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.AwsCodebuildXAmzTargetCodebuild.ListSharedProjects(new ListSharedProjectsRequest
    {
        XAmzTarget = XAmzTarget35.CodeBuild20161006ListSharedProjects,
    });
}
catch (ApiException<ListSharedProjectsError> ex)
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

<code>[ListSharedProjectsRequest](src/AwsCodeBuild/Requests/AwsCodebuildXAmzTargetCodebuild/ListSharedProjectsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AwsCodeBuild/Core/Exceptions/ApiException.cs)&lt;[ListSharedProjectsError](src/AwsCodeBuild/Errors/ListSharedProjectsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task ListSharedReportGroups(ListSharedReportGroupsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets a list of report groups that are shared with other Amazon Web Services accounts or users.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.AwsCodebuildXAmzTargetCodebuild.ListSharedReportGroups(new ListSharedReportGroupsRequest
    {
        XAmzTarget = XAmzTarget36.CodeBuild20161006ListSharedReportGroups,
    });
}
catch (ApiException<ListSharedReportGroupsError> ex)
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

<code>[ListSharedReportGroupsRequest](src/AwsCodeBuild/Requests/AwsCodebuildXAmzTargetCodebuild/ListSharedReportGroupsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AwsCodeBuild/Core/Exceptions/ApiException.cs)&lt;[ListSharedReportGroupsError](src/AwsCodeBuild/Errors/ListSharedReportGroupsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task ListSourceCredentials(ListSourceCredentialsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list of SourceCredentialsInfo objects.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.AwsCodebuildXAmzTargetCodebuild.ListSourceCredentials(new ListSourceCredentialsRequest
    {
        XAmzTarget = XAmzTarget28.CodeBuild20161006ListSourceCredentials,
    });
}
catch (ApiException<ListSourceCredentialsError> ex)
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

<code>[ListSourceCredentialsRequest](src/AwsCodeBuild/Requests/AwsCodebuildXAmzTargetCodebuild/ListSourceCredentialsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AwsCodeBuild/Core/Exceptions/ApiException.cs)&lt;[ListSourceCredentialsError](src/AwsCodeBuild/Errors/ListSourceCredentialsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task PutResourcePolicy(PutResourcePolicyRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Stores a resource policy for the ARN of a Project or ReportGroup object.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.AwsCodebuildXAmzTargetCodebuild.PutResourcePolicy(new PutResourcePolicyRequest
    {
        XAmzTarget = XAmzTarget25.CodeBuild20161006PutResourcePolicy,
    });
}
catch (ApiException<PutResourcePolicyError> ex)
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

<code>[PutResourcePolicyRequest](src/AwsCodeBuild/Requests/AwsCodebuildXAmzTargetCodebuild/PutResourcePolicyRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AwsCodeBuild/Core/Exceptions/ApiException.cs)&lt;[PutResourcePolicyError](src/AwsCodeBuild/Errors/PutResourcePolicyError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task RetryBuildBatch(RetryBuildBatchRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Restarts a failed batch build. Only batch builds that have failed can be retried.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.AwsCodebuildXAmzTargetCodebuild.RetryBuildBatch(new RetryBuildBatchRequest
    {
        XAmzTarget = XAmzTarget33.CodeBuild20161006RetryBuildBatch,
    });
}
catch (ApiException<RetryBuildBatchError> ex)
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

<code>[RetryBuildBatchRequest](src/AwsCodeBuild/Requests/AwsCodebuildXAmzTargetCodebuild/RetryBuildBatchRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AwsCodeBuild/Core/Exceptions/ApiException.cs)&lt;[RetryBuildBatchError](src/AwsCodeBuild/Errors/RetryBuildBatchError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task StartBuildBatch(StartBuildBatchRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Starts a batch build for a project.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.AwsCodebuildXAmzTargetCodebuild.StartBuildBatch(new StartBuildBatchRequest
    {
        XAmzTarget = XAmzTarget21.CodeBuild20161006StartBuildBatch,
    });
}
catch (ApiException<StartBuildBatchError> ex)
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

<code>[StartBuildBatchRequest](src/AwsCodeBuild/Requests/AwsCodebuildXAmzTargetCodebuild/StartBuildBatchRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AwsCodeBuild/Core/Exceptions/ApiException.cs)&lt;[StartBuildBatchError](src/AwsCodeBuild/Errors/StartBuildBatchError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task StopBuildBatch(StopBuildBatchRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Stops a running batch build.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.AwsCodebuildXAmzTargetCodebuild.StopBuildBatch(new StopBuildBatchRequest
    {
        XAmzTarget = XAmzTarget22.CodeBuild20161006StopBuildBatch,
    });
}
catch (ApiException<StopBuildBatchError> ex)
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

<code>[StopBuildBatchRequest](src/AwsCodeBuild/Requests/AwsCodebuildXAmzTargetCodebuild/StopBuildBatchRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AwsCodeBuild/Core/Exceptions/ApiException.cs)&lt;[StopBuildBatchError](src/AwsCodeBuild/Errors/StopBuildBatchError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task UpdateProject(UpdateProjectRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Changes the settings of a build project.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.AwsCodebuildXAmzTargetCodebuild.UpdateProject(new UpdateProjectRequest
    {
        XAmzTarget = XAmzTarget9.CodeBuild20161006UpdateProject,
    });
}
catch (ApiException<UpdateProjectError> ex)
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

<code>[UpdateProjectRequest](src/AwsCodeBuild/Requests/AwsCodebuildXAmzTargetCodebuild/UpdateProjectRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AwsCodeBuild/Core/Exceptions/ApiException.cs)&lt;[UpdateProjectError](src/AwsCodeBuild/Errors/UpdateProjectError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task UpdateProjectVisibility(UpdateProjectVisibilityRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Changes the public visibility for a project. The project's build results, logs, and artifacts are available to the general public. For more information, see Public build projects in the CodeBuild User Guide. The following should be kept in mind when making your projects public: All of a project's build results, logs, and artifacts, including builds that were run when the project was private, are available to the general public. All build logs and artifacts are available to the public. Environment variables, source code, and other sensitive information may have been output to the build logs and artifacts. You must be careful about what information is output to the build logs. Some best practice are: Do not store sensitive values in environment variables. We recommend that you use an Amazon EC2 Systems Manager Parameter Store or Secrets Manager to store sensitive values. Follow Best practices for using webhooks in the CodeBuild User Guide to limit which entities can trigger a build, and do not store the buildspec in the project itself, to ensure that your webhooks are as secure as possible. A malicious user can use public builds to distribute malicious artifacts. We recommend that yo

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.AwsCodebuildXAmzTargetCodebuild.UpdateProjectVisibility(new UpdateProjectVisibilityRequest
    {
        XAmzTarget = XAmzTarget37.CodeBuild20161006UpdateProjectVisibility,
    });
}
catch (ApiException<UpdateProjectVisibilityError> ex)
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

<code>[UpdateProjectVisibilityRequest](src/AwsCodeBuild/Requests/AwsCodebuildXAmzTargetCodebuild/UpdateProjectVisibilityRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AwsCodeBuild/Core/Exceptions/ApiException.cs)&lt;[UpdateProjectVisibilityError](src/AwsCodeBuild/Errors/UpdateProjectVisibilityError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task UpdateReportGroup(UpdateReportGroupRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates a report group.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.AwsCodebuildXAmzTargetCodebuild.UpdateReportGroup(new UpdateReportGroupRequest
    {
        XAmzTarget = XAmzTarget14.CodeBuild20161006UpdateReportGroup,
    });
}
catch (ApiException<UpdateReportGroupError> ex)
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

<code>[UpdateReportGroupRequest](src/AwsCodeBuild/Requests/AwsCodebuildXAmzTargetCodebuild/UpdateReportGroupRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AwsCodeBuild/Core/Exceptions/ApiException.cs)&lt;[UpdateReportGroupError](src/AwsCodeBuild/Errors/UpdateReportGroupError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task UpdateWebhook(UpdateWebhookRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates the webhook associated with an CodeBuild build project. If you use Bitbucket for your repository, rotateSecret is ignored.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.AwsCodebuildXAmzTargetCodebuild.UpdateWebhook(new UpdateWebhookRequest
    {
        XAmzTarget = XAmzTarget19.CodeBuild20161006UpdateWebhook,
    });
}
catch (ApiException<UpdateWebhookError> ex)
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

<code>[UpdateWebhookRequest](src/AwsCodeBuild/Requests/AwsCodebuildXAmzTargetCodebuild/UpdateWebhookRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AwsCodeBuild/Core/Exceptions/ApiException.cs)&lt;[UpdateWebhookError](src/AwsCodeBuild/Errors/UpdateWebhookError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## AwsCodebuildXAmzTargetCodebuild20161006Deletereport

> Source: [AwsCodebuildXAmzTargetCodebuild20161006Deletereport](src/AwsCodeBuild/Api/AwsCodebuildXAmzTargetCodebuild20161006Deletereport.cs)

<details>
<summary><code>Task DeleteReport(DeleteReportRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a report.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.AwsCodebuildXAmzTargetCodebuild20161006Deletereport.DeleteReport(new DeleteReportRequest
    {
        XAmzTarget = XAmzTargetAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006DeletereportApi.CodeBuild20161006DeleteReport,
    });
}
catch (ApiException<DeleteReportError> ex)
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

<code>[DeleteReportRequest](src/AwsCodeBuild/Requests/AwsCodebuildXAmzTargetCodebuild20161006Deletereport/DeleteReportRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AwsCodeBuild/Core/Exceptions/ApiException.cs)&lt;[DeleteReportError](src/AwsCodeBuild/Errors/DeleteReportError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## AwsCodebuildXAmzTargetCodebuild20161006Listbuilds

> Source: [AwsCodebuildXAmzTargetCodebuild20161006Listbuilds](src/AwsCodeBuild/Api/AwsCodebuildXAmzTargetCodebuild20161006Listbuilds.cs)

<details>
<summary><code>Task ListBuilds(ListBuildsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets a list of build IDs, with each build ID representing a single build.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.AwsCodebuildXAmzTargetCodebuild20161006Listbuilds.ListBuilds(new ListBuildsRequest
    {
        XAmzTarget = XAmzTargetAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006ListbuildsApi.CodeBuild20161006ListBuilds,
    });
}
catch (ApiException<ListBuildsError> ex)
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

<code>[ListBuildsRequest](src/AwsCodeBuild/Requests/AwsCodebuildXAmzTargetCodebuild20161006Listbuilds/ListBuildsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AwsCodeBuild/Core/Exceptions/ApiException.cs)&lt;[ListBuildsError](src/AwsCodeBuild/Errors/ListBuildsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## AwsCodebuildXAmzTargetCodebuild20161006Listprojects

> Source: [AwsCodebuildXAmzTargetCodebuild20161006Listprojects](src/AwsCodeBuild/Api/AwsCodebuildXAmzTargetCodebuild20161006Listprojects.cs)

<details>
<summary><code>Task ListProjects(ListProjectsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets a list of build project names, with each build project name representing a single build project.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.AwsCodebuildXAmzTargetCodebuild20161006Listprojects.ListProjects(new ListProjectsRequest
    {
        XAmzTarget = XAmzTargetAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006ListprojectsApi.CodeBuild20161006ListProjects,
    });
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

### Request

<dl>
<dd>

<code>[ListProjectsRequest](src/AwsCodeBuild/Requests/AwsCodebuildXAmzTargetCodebuild20161006Listprojects/ListProjectsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AwsCodeBuild/Core/Exceptions/ApiException.cs)&lt;[ListProjectsError](src/AwsCodeBuild/Errors/ListProjectsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## AwsCodebuildXAmzTargetCodebuild20161006Listreports

> Source: [AwsCodebuildXAmzTargetCodebuild20161006Listreports](src/AwsCodeBuild/Api/AwsCodebuildXAmzTargetCodebuild20161006Listreports.cs)

<details>
<summary><code>Task ListReports(ListReportsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list of ARNs for the reports in the current Amazon Web Services account.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.AwsCodebuildXAmzTargetCodebuild20161006Listreports.ListReports(new ListReportsRequest
    {
        XAmzTarget = XAmzTargetAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006ListreportsApi.CodeBuild20161006ListReports,
    });
}
catch (ApiException<ListReportsError> ex)
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

<code>[ListReportsRequest](src/AwsCodeBuild/Requests/AwsCodebuildXAmzTargetCodebuild20161006Listreports/ListReportsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AwsCodeBuild/Core/Exceptions/ApiException.cs)&lt;[ListReportsError](src/AwsCodeBuild/Errors/ListReportsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## AwsCodebuildXAmzTargetCodebuild20161006Retrybuild

> Source: [AwsCodebuildXAmzTargetCodebuild20161006Retrybuild](src/AwsCodeBuild/Api/AwsCodebuildXAmzTargetCodebuild20161006Retrybuild.cs)

<details>
<summary><code>Task RetryBuild(RetryBuildRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Restarts a build.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.AwsCodebuildXAmzTargetCodebuild20161006Retrybuild.RetryBuild(new RetryBuildRequest
    {
        XAmzTarget = XAmzTargetAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006RetrybuildApi.CodeBuild20161006RetryBuild,
    });
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

<code>[RetryBuildRequest](src/AwsCodeBuild/Requests/AwsCodebuildXAmzTargetCodebuild20161006Retrybuild/RetryBuildRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AwsCodeBuild/Core/Exceptions/ApiException.cs)&lt;[RetryBuildError](src/AwsCodeBuild/Errors/RetryBuildError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## AwsCodebuildXAmzTargetCodebuild20161006Startbuild

> Source: [AwsCodebuildXAmzTargetCodebuild20161006Startbuild](src/AwsCodeBuild/Api/AwsCodebuildXAmzTargetCodebuild20161006Startbuild.cs)

<details>
<summary><code>Task StartBuild(StartBuildRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Starts running a build with the settings defined in the project. These setting include: how to run a build, where to get the source code, which build environment to use, which build commands to run, and where to store the build output. You can also start a build run by overriding some of the build settings in the project. The overrides only apply for that specific start build request. The settings in the project are unaltered.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.AwsCodebuildXAmzTargetCodebuild20161006Startbuild.StartBuild(new StartBuildRequest
    {
        XAmzTarget = XAmzTargetAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006StartbuildApi.CodeBuild20161006StartBuild,
    });
}
catch (ApiException<StartBuildError> ex)
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

<code>[StartBuildRequest](src/AwsCodeBuild/Requests/AwsCodebuildXAmzTargetCodebuild20161006Startbuild/StartBuildRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AwsCodeBuild/Core/Exceptions/ApiException.cs)&lt;[StartBuildError](src/AwsCodeBuild/Errors/StartBuildError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## AwsCodebuildXAmzTargetCodebuild20161006StopbuildApi

> Source: [AwsCodebuildXAmzTargetCodebuild20161006StopbuildApi](src/AwsCodeBuild/Api/AwsCodebuildXAmzTargetCodebuild20161006StopbuildApi.cs)

<details>
<summary><code>Task StopBuild(StopBuildRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Attempts to stop running a build.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.AwsCodebuildXAmzTargetCodebuild20161006StopbuildApi.StopBuild(new StopBuildRequest
    {
        XAmzTarget = XAmzTargetAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006StopbuildApiApi.CodeBuild20161006StopBuild,
    });
}
catch (ApiException<StopBuildError> ex)
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

<code>[StopBuildRequest](src/AwsCodeBuild/Requests/AwsCodebuildXAmzTargetCodebuild20161006StopbuildApi/StopBuildRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AwsCodeBuild/Core/Exceptions/ApiException.cs)&lt;[StopBuildError](src/AwsCodeBuild/Errors/StopBuildError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Builds

> Source: [Builds](src/AwsCodeBuild/Api/Builds.cs)

<details>
<summary><code>Task BatchDeleteBuilds2(BatchDeleteBuilds2Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes one or more builds.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.Builds.BatchDeleteBuilds2(new BatchDeleteBuilds2Request
    {
        XAmzTarget = XAmzTargetAwsCodeBuildAwsCodebuildXAmzTargetCodebuildApi.CodeBuild20161006BatchDeleteBuilds,
    });
}
catch (ApiException<BatchDeleteBuilds2Error> ex)
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

<code>[BatchDeleteBuilds2Request](src/AwsCodeBuild/Requests/Builds/BatchDeleteBuilds2Request.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AwsCodeBuild/Core/Exceptions/ApiException.cs)&lt;[BatchDeleteBuilds2Error](src/AwsCodeBuild/Errors/BatchDeleteBuilds2Error.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task BatchGetBuilds2(BatchGetBuilds2Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets information about one or more builds.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.Builds.BatchGetBuilds2(new BatchGetBuilds2Request
    {
        XAmzTarget = XAmzTarget1AwsCodeBuildAwsCodebuildXAmzTargetCodebuildApi.CodeBuild20161006BatchGetBuilds,
    });
}
catch (ApiException<BatchGetBuilds2Error> ex)
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

<code>[BatchGetBuilds2Request](src/AwsCodeBuild/Requests/Builds/BatchGetBuilds2Request.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AwsCodeBuild/Core/Exceptions/ApiException.cs)&lt;[BatchGetBuilds2Error](src/AwsCodeBuild/Errors/BatchGetBuilds2Error.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task ListBuilds2(ListBuilds2Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets a list of build IDs, with each build ID representing a single build.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.Builds.ListBuilds2(new ListBuilds2Request
    {
        XAmzTarget = XAmzTarget2AwsCodeBuildBuildsApi.CodeBuild20161006ListBuilds,
    });
}
catch (ApiException<ListBuilds2Error> ex)
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

<code>[ListBuilds2Request](src/AwsCodeBuild/Requests/Builds/ListBuilds2Request.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AwsCodeBuild/Core/Exceptions/ApiException.cs)&lt;[ListBuilds2Error](src/AwsCodeBuild/Errors/ListBuilds2Error.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task ListBuildsForProject2(ListBuildsForProject2Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets a list of build identifiers for the specified build project, with each build identifier representing a single build.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.Builds.ListBuildsForProject2(new ListBuildsForProject2Request
    {
        XAmzTarget = XAmzTarget3AwsCodeBuildBuildsApi.CodeBuild20161006ListBuildsForProject,
    });
}
catch (ApiException<ListBuildsForProject2Error> ex)
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

<code>[ListBuildsForProject2Request](src/AwsCodeBuild/Requests/Builds/ListBuildsForProject2Request.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AwsCodeBuild/Core/Exceptions/ApiException.cs)&lt;[ListBuildsForProject2Error](src/AwsCodeBuild/Errors/ListBuildsForProject2Error.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task StartBuild2(StartBuild2Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Starts running a build with the settings defined in the project. These setting include: how to run a build, where to get the source code, which build environment to use, which build commands to run, and where to store the build output. You can also start a build run by overriding some of the build settings in the project. The overrides only apply for that specific start build request. The settings in the project are unaltered.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.Builds.StartBuild2(new StartBuild2Request
    {
        XAmzTarget = XAmzTarget4AwsCodeBuildBuildsApi.CodeBuild20161006StartBuild,
    });
}
catch (ApiException<StartBuild2Error> ex)
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

<code>[StartBuild2Request](src/AwsCodeBuild/Requests/Builds/StartBuild2Request.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AwsCodeBuild/Core/Exceptions/ApiException.cs)&lt;[StartBuild2Error](src/AwsCodeBuild/Errors/StartBuild2Error.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task StopBuild2(StopBuild2Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Attempts to stop running a build.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.Builds.StopBuild2(new StopBuild2Request
    {
        XAmzTarget = XAmzTarget5AwsCodeBuildBuildsApi.CodeBuild20161006StopBuild,
    });
}
catch (ApiException<StopBuild2Error> ex)
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

<code>[StopBuild2Request](src/AwsCodeBuild/Requests/Builds/StopBuild2Request.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AwsCodeBuild/Core/Exceptions/ApiException.cs)&lt;[StopBuild2Error](src/AwsCodeBuild/Errors/StopBuild2Error.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## CommandExecutionApi

> Source: [CommandExecutionApi](src/AwsCodeBuild/Api/CommandExecutionApi.cs)

<details>
<summary><code>Task BatchGetCommandExecutions(BatchGetCommandExecutionsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets information about the command executions.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.CommandExecutionApi.BatchGetCommandExecutions(new BatchGetCommandExecutionsRequest
    {
        XAmzTarget = XAmzTargetAwsCodeBuildCommandExecutionApi.CodeBuild20161006BatchGetCommandExecutions,
    });
}
catch (ApiException<BatchGetCommandExecutionsError> ex)
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

<code>[BatchGetCommandExecutionsRequest](src/AwsCodeBuild/Requests/CommandExecutionApi/BatchGetCommandExecutionsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AwsCodeBuild/Core/Exceptions/ApiException.cs)&lt;[BatchGetCommandExecutionsError](src/AwsCodeBuild/Errors/BatchGetCommandExecutionsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task ListCommandExecutionsForSandbox(ListCommandExecutionsForSandboxRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets a list of command executions for a sandbox.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.CommandExecutionApi.ListCommandExecutionsForSandbox(new ListCommandExecutionsForSandboxRequest
    {
        XAmzTarget = XAmzTarget1AwsCodeBuildCommandExecutionApi.CodeBuild20161006ListCommandExecutionsForSandbox,
    });
}
catch (ApiException<ListCommandExecutionsForSandboxError> ex)
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

<code>[ListCommandExecutionsForSandboxRequest](src/AwsCodeBuild/Requests/CommandExecutionApi/ListCommandExecutionsForSandboxRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AwsCodeBuild/Core/Exceptions/ApiException.cs)&lt;[ListCommandExecutionsForSandboxError](src/AwsCodeBuild/Errors/ListCommandExecutionsForSandboxError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task StartCommandExecution(StartCommandExecutionRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Starts a command execution.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.CommandExecutionApi.StartCommandExecution(new StartCommandExecutionRequest
    {
        XAmzTarget = XAmzTarget2AwsCodeBuildCommandExecutionApi.CodeBuild20161006StartCommandExecution,
    });
}
catch (ApiException<StartCommandExecutionError> ex)
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

<code>[StartCommandExecutionRequest](src/AwsCodeBuild/Requests/CommandExecutionApi/StartCommandExecutionRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AwsCodeBuild/Core/Exceptions/ApiException.cs)&lt;[StartCommandExecutionError](src/AwsCodeBuild/Errors/StartCommandExecutionError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## FleetApi

> Source: [FleetApi](src/AwsCodeBuild/Api/FleetApi.cs)

<details>
<summary><code>Task BatchGetFleets(BatchGetFleetsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets information about one or more compute fleets.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.FleetApi.BatchGetFleets(new BatchGetFleetsRequest
    {
        XAmzTarget = XAmzTargetAwsCodeBuildFleetApi.CodeBuild20161006BatchGetFleets,
    });
}
catch (ApiException<BatchGetFleetsError> ex)
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

<code>[BatchGetFleetsRequest](src/AwsCodeBuild/Requests/FleetApi/BatchGetFleetsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AwsCodeBuild/Core/Exceptions/ApiException.cs)&lt;[BatchGetFleetsError](src/AwsCodeBuild/Errors/BatchGetFleetsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task CreateFleet(CreateFleetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a compute fleet.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.FleetApi.CreateFleet(new CreateFleetRequest
    {
        XAmzTarget = XAmzTarget1AwsCodeBuildFleetApi.CodeBuild20161006CreateFleet,
    });
}
catch (ApiException<CreateFleetError> ex)
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

<code>[CreateFleetRequest](src/AwsCodeBuild/Requests/FleetApi/CreateFleetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AwsCodeBuild/Core/Exceptions/ApiException.cs)&lt;[CreateFleetError](src/AwsCodeBuild/Errors/CreateFleetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task DeleteFleet(DeleteFleetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a compute fleet. When you delete a compute fleet, its builds are not deleted.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.FleetApi.DeleteFleet(new DeleteFleetRequest
    {
        XAmzTarget = XAmzTarget2AwsCodeBuildFleetApi.CodeBuild20161006DeleteFleet,
    });
}
catch (ApiException<DeleteFleetError> ex)
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

<code>[DeleteFleetRequest](src/AwsCodeBuild/Requests/FleetApi/DeleteFleetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AwsCodeBuild/Core/Exceptions/ApiException.cs)&lt;[DeleteFleetError](src/AwsCodeBuild/Errors/DeleteFleetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task ListFleets(ListFleetsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets a list of compute fleet names with each compute fleet name representing a single compute fleet.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.FleetApi.ListFleets(new ListFleetsRequest
    {
        XAmzTarget = XAmzTarget3AwsCodeBuildFleetApi.CodeBuild20161006ListFleets,
    });
}
catch (ApiException<ListFleetsError> ex)
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

<code>[ListFleetsRequest](src/AwsCodeBuild/Requests/FleetApi/ListFleetsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AwsCodeBuild/Core/Exceptions/ApiException.cs)&lt;[ListFleetsError](src/AwsCodeBuild/Errors/ListFleetsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task UpdateFleet(UpdateFleetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates a compute fleet.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.FleetApi.UpdateFleet(new UpdateFleetRequest
    {
        XAmzTarget = XAmzTarget4AwsCodeBuildFleetApi.CodeBuild20161006UpdateFleet,
    });
}
catch (ApiException<UpdateFleetError> ex)
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

<code>[UpdateFleetRequest](src/AwsCodeBuild/Requests/FleetApi/UpdateFleetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AwsCodeBuild/Core/Exceptions/ApiException.cs)&lt;[UpdateFleetError](src/AwsCodeBuild/Errors/UpdateFleetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Projects

> Source: [Projects](src/AwsCodeBuild/Api/Projects.cs)

<details>
<summary><code>Task BatchGetProjects2(BatchGetProjects2Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets information about one or more build projects.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.Projects.BatchGetProjects2(new BatchGetProjects2Request
    {
        XAmzTarget = XAmzTargetAwsCodeBuildProjectsApi.CodeBuild20161006BatchGetProjects,
    });
}
catch (ApiException<BatchGetProjects2Error> ex)
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

<code>[BatchGetProjects2Request](src/AwsCodeBuild/Requests/Projects/BatchGetProjects2Request.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AwsCodeBuild/Core/Exceptions/ApiException.cs)&lt;[BatchGetProjects2Error](src/AwsCodeBuild/Errors/BatchGetProjects2Error.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task CreateProject2(CreateProject2Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a build project.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.Projects.CreateProject2(new CreateProject2Request
    {
        XAmzTarget = XAmzTarget1AwsCodeBuildProjectsApi.CodeBuild20161006CreateProject,
    });
}
catch (ApiException<CreateProject2Error> ex)
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

<code>[CreateProject2Request](src/AwsCodeBuild/Requests/Projects/CreateProject2Request.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AwsCodeBuild/Core/Exceptions/ApiException.cs)&lt;[CreateProject2Error](src/AwsCodeBuild/Errors/CreateProject2Error.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task DeleteProject2(DeleteProject2Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a build project. When you delete a project, its builds are not deleted.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.Projects.DeleteProject2(new DeleteProject2Request
    {
        XAmzTarget = XAmzTarget2AwsCodeBuildProjectsApi.CodeBuild20161006DeleteProject,
    });
}
catch (ApiException<DeleteProject2Error> ex)
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

<code>[DeleteProject2Request](src/AwsCodeBuild/Requests/Projects/DeleteProject2Request.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AwsCodeBuild/Core/Exceptions/ApiException.cs)&lt;[DeleteProject2Error](src/AwsCodeBuild/Errors/DeleteProject2Error.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task ListProjects2(ListProjects2Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets a list of build project names, with each build project name representing a single build project.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.Projects.ListProjects2(new ListProjects2Request
    {
        XAmzTarget = XAmzTarget3AwsCodeBuildProjectsApi.CodeBuild20161006ListProjects,
    });
}
catch (ApiException<ListProjects2Error> ex)
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

<code>[ListProjects2Request](src/AwsCodeBuild/Requests/Projects/ListProjects2Request.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AwsCodeBuild/Core/Exceptions/ApiException.cs)&lt;[ListProjects2Error](src/AwsCodeBuild/Errors/ListProjects2Error.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task UpdateProject2(UpdateProject2Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Changes the settings of a build project.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.Projects.UpdateProject2(new UpdateProject2Request
    {
        XAmzTarget = XAmzTarget4AwsCodeBuildProjectsApi.CodeBuild20161006UpdateProject,
    });
}
catch (ApiException<UpdateProject2Error> ex)
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

<code>[UpdateProject2Request](src/AwsCodeBuild/Requests/Projects/UpdateProject2Request.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AwsCodeBuild/Core/Exceptions/ApiException.cs)&lt;[UpdateProject2Error](src/AwsCodeBuild/Errors/UpdateProject2Error.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Sandboxe

> Source: [Sandboxe](src/AwsCodeBuild/Api/Sandboxe.cs)

<details>
<summary><code>Task BatchGetSandboxes(BatchGetSandboxesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets information about the sandbox status.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.Sandboxe.BatchGetSandboxes(new BatchGetSandboxesRequest
    {
        XAmzTarget = XAmzTargetAwsCodeBuildSandboxeApi.CodeBuild20161006BatchGetSandboxes,
    });
}
catch (ApiException<BatchGetSandboxesError> ex)
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

<code>[BatchGetSandboxesRequest](src/AwsCodeBuild/Requests/Sandboxe/BatchGetSandboxesRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AwsCodeBuild/Core/Exceptions/ApiException.cs)&lt;[BatchGetSandboxesError](src/AwsCodeBuild/Errors/BatchGetSandboxesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task ListSandboxes(ListSandboxesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets a list of sandboxes.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.Sandboxe.ListSandboxes(new ListSandboxesRequest
    {
        XAmzTarget = XAmzTarget1AwsCodeBuildSandboxeApi.CodeBuild20161006ListSandboxes,
    });
}
catch (ApiException<ListSandboxesError> ex)
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

<code>[ListSandboxesRequest](src/AwsCodeBuild/Requests/Sandboxe/ListSandboxesRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AwsCodeBuild/Core/Exceptions/ApiException.cs)&lt;[ListSandboxesError](src/AwsCodeBuild/Errors/ListSandboxesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task ListSandboxesForProject(ListSandboxesForProjectRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets a list of sandboxes for a given project.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.Sandboxe.ListSandboxesForProject(new ListSandboxesForProjectRequest
    {
        XAmzTarget = XAmzTarget2AwsCodeBuildSandboxeApi.CodeBuild20161006ListSandboxesForProject,
    });
}
catch (ApiException<ListSandboxesForProjectError> ex)
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

<code>[ListSandboxesForProjectRequest](src/AwsCodeBuild/Requests/Sandboxe/ListSandboxesForProjectRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AwsCodeBuild/Core/Exceptions/ApiException.cs)&lt;[ListSandboxesForProjectError](src/AwsCodeBuild/Errors/ListSandboxesForProjectError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

