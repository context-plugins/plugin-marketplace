# Reference

Every operation below is shown in its throwing form. On an error status it throws `ApiException<TError>` — the status code, headers, content type and the operation's error type, `RawError` (the raw body) when the spec declares none — and where an operation offers an `…AsResult` sibling, that sibling returns `ApiResult<TResponse, TError>` instead. A request that produces no usable response surfaces as `SdkConnectionException` or `SdkTimeoutException`, a body that does not match the documented response type as `ResponseDeserializationException`, and a required credential that is not configured, or one that cannot be applied, as `AuthSchemeException`; all of them derive from `SdkException` and name the failed call. See [README → Error Handling](README.md#error-handling).

> Source: [GoogleCloudDataprocClient](src/GoogleCloudDataproc/GoogleCloudDataprocClient.cs)

<details>
<summary><code>Task&lt;AutoscalingPolicy&gt; DataprocProjectsLocationsAutoscalingPoliciesCreate(DataprocProjectsLocationsAutoscalingPoliciesCreateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates new autoscaling policy.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.DataprocProjectsLocationsAutoscalingPoliciesCreate(
        new DataprocProjectsLocationsAutoscalingPoliciesCreateRequest
        {
            ProjectsId = "some example string",
            LocationsId = "some example string",
            Body = new AutoscalingPolicy(),
        });
    // TODO: Handle 'response' of type AutoscalingPolicy
}
catch (ApiException<DataprocProjectsLocationsAutoscalingPoliciesCreateError> ex)
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

<code>[DataprocProjectsLocationsAutoscalingPoliciesCreateRequest](src/GoogleCloudDataproc/Requests/DataprocProjectsLocationsAutoscalingPoliciesCreateRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[AutoscalingPolicy](src/GoogleCloudDataproc/Models/AutoscalingPolicy.cs)</code>

**OnError**: <code>[ApiException](src/GoogleCloudDataproc/Core/Exceptions/ApiException.cs)&lt;[DataprocProjectsLocationsAutoscalingPoliciesCreateError](src/GoogleCloudDataproc/Errors/DataprocProjectsLocationsAutoscalingPoliciesCreateError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;object&gt; DataprocProjectsLocationsAutoscalingPoliciesDelete(DataprocProjectsLocationsAutoscalingPoliciesDeleteRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes an autoscaling policy. It is an error to delete an autoscaling policy that is in use by one or more clusters.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.DataprocProjectsLocationsAutoscalingPoliciesDelete(
        new DataprocProjectsLocationsAutoscalingPoliciesDeleteRequest
        {
            ProjectsId = "some example string",
            LocationsId = "some example string",
            AutoscalingPoliciesId = "some example string",
        });
    // TODO: Handle 'response' of type object
}
catch (ApiException<DataprocProjectsLocationsAutoscalingPoliciesDeleteError> ex)
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

<code>[DataprocProjectsLocationsAutoscalingPoliciesDeleteRequest](src/GoogleCloudDataproc/Requests/DataprocProjectsLocationsAutoscalingPoliciesDeleteRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>object</code>

**OnError**: <code>[ApiException](src/GoogleCloudDataproc/Core/Exceptions/ApiException.cs)&lt;[DataprocProjectsLocationsAutoscalingPoliciesDeleteError](src/GoogleCloudDataproc/Errors/DataprocProjectsLocationsAutoscalingPoliciesDeleteError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;AutoscalingPolicy&gt; DataprocProjectsLocationsAutoscalingPoliciesGet(DataprocProjectsLocationsAutoscalingPoliciesGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves autoscaling policy.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.DataprocProjectsLocationsAutoscalingPoliciesGet(
        new DataprocProjectsLocationsAutoscalingPoliciesGetRequest
        {
            ProjectsId = "some example string",
            LocationsId = "some example string",
            AutoscalingPoliciesId = "some example string",
        });
    // TODO: Handle 'response' of type AutoscalingPolicy
}
catch (ApiException<DataprocProjectsLocationsAutoscalingPoliciesGetError> ex)
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

<code>[DataprocProjectsLocationsAutoscalingPoliciesGetRequest](src/GoogleCloudDataproc/Requests/DataprocProjectsLocationsAutoscalingPoliciesGetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[AutoscalingPolicy](src/GoogleCloudDataproc/Models/AutoscalingPolicy.cs)</code>

**OnError**: <code>[ApiException](src/GoogleCloudDataproc/Core/Exceptions/ApiException.cs)&lt;[DataprocProjectsLocationsAutoscalingPoliciesGetError](src/GoogleCloudDataproc/Errors/DataprocProjectsLocationsAutoscalingPoliciesGetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Policy&gt; DataprocProjectsLocationsAutoscalingPoliciesGetIamPolicy(DataprocProjectsLocationsAutoscalingPoliciesGetIamPolicyRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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
    var response = await client.DataprocProjectsLocationsAutoscalingPoliciesGetIamPolicy(
        new DataprocProjectsLocationsAutoscalingPoliciesGetIamPolicyRequest
        {
            ProjectsId = "some example string",
            LocationsId = "some example string",
            AutoscalingPoliciesId = "some example string",
            Body = new GetIamPolicyRequest(),
        });
    // TODO: Handle 'response' of type Policy
}
catch (ApiException<DataprocProjectsLocationsAutoscalingPoliciesGetIamPolicyError> ex)
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

<code>[DataprocProjectsLocationsAutoscalingPoliciesGetIamPolicyRequest](src/GoogleCloudDataproc/Requests/DataprocProjectsLocationsAutoscalingPoliciesGetIamPolicyRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Policy](src/GoogleCloudDataproc/Models/Policy.cs)</code>

**OnError**: <code>[ApiException](src/GoogleCloudDataproc/Core/Exceptions/ApiException.cs)&lt;[DataprocProjectsLocationsAutoscalingPoliciesGetIamPolicyError](src/GoogleCloudDataproc/Errors/DataprocProjectsLocationsAutoscalingPoliciesGetIamPolicyError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ListAutoscalingPoliciesResponse&gt; DataprocProjectsLocationsAutoscalingPoliciesList(DataprocProjectsLocationsAutoscalingPoliciesListRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists autoscaling policies in the project.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.DataprocProjectsLocationsAutoscalingPoliciesList(
        new DataprocProjectsLocationsAutoscalingPoliciesListRequest
        {
            ProjectsId = "some example string",
            LocationsId = "some example string",
        });
    // TODO: Handle 'response' of type ListAutoscalingPoliciesResponse
}
catch (ApiException<DataprocProjectsLocationsAutoscalingPoliciesListError> ex)
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

<code>[DataprocProjectsLocationsAutoscalingPoliciesListRequest](src/GoogleCloudDataproc/Requests/DataprocProjectsLocationsAutoscalingPoliciesListRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ListAutoscalingPoliciesResponse](src/GoogleCloudDataproc/Models/ListAutoscalingPoliciesResponse.cs)</code>

**OnError**: <code>[ApiException](src/GoogleCloudDataproc/Core/Exceptions/ApiException.cs)&lt;[DataprocProjectsLocationsAutoscalingPoliciesListError](src/GoogleCloudDataproc/Errors/DataprocProjectsLocationsAutoscalingPoliciesListError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Policy&gt; DataprocProjectsLocationsAutoscalingPoliciesSetIamPolicy(DataprocProjectsLocationsAutoscalingPoliciesSetIamPolicyRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Sets the access control policy on the specified resource. Replaces any existing policy.Can return NOT_FOUND, INVALID_ARGUMENT, and PERMISSION_DENIED errors.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.DataprocProjectsLocationsAutoscalingPoliciesSetIamPolicy(
        new DataprocProjectsLocationsAutoscalingPoliciesSetIamPolicyRequest
        {
            ProjectsId = "some example string",
            LocationsId = "some example string",
            AutoscalingPoliciesId = "some example string",
            Body = new SetIamPolicyRequest(),
        });
    // TODO: Handle 'response' of type Policy
}
catch (ApiException<DataprocProjectsLocationsAutoscalingPoliciesSetIamPolicyError> ex)
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

<code>[DataprocProjectsLocationsAutoscalingPoliciesSetIamPolicyRequest](src/GoogleCloudDataproc/Requests/DataprocProjectsLocationsAutoscalingPoliciesSetIamPolicyRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Policy](src/GoogleCloudDataproc/Models/Policy.cs)</code>

**OnError**: <code>[ApiException](src/GoogleCloudDataproc/Core/Exceptions/ApiException.cs)&lt;[DataprocProjectsLocationsAutoscalingPoliciesSetIamPolicyError](src/GoogleCloudDataproc/Errors/DataprocProjectsLocationsAutoscalingPoliciesSetIamPolicyError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;TestIamPermissionsResponse&gt; DataprocProjectsLocationsAutoscalingPoliciesTestIamPermissions(DataprocProjectsLocationsAutoscalingPoliciesTestIamPermissionsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a NOT_FOUND error.Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.DataprocProjectsLocationsAutoscalingPoliciesTestIamPermissions(
        new DataprocProjectsLocationsAutoscalingPoliciesTestIamPermissionsRequest
        {
            ProjectsId = "some example string",
            LocationsId = "some example string",
            AutoscalingPoliciesId = "some example string",
            Body = new TestIamPermissionsRequest(),
        });
    // TODO: Handle 'response' of type TestIamPermissionsResponse
}
catch (ApiException<DataprocProjectsLocationsAutoscalingPoliciesTestIamPermissionsError> ex)
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

<code>[DataprocProjectsLocationsAutoscalingPoliciesTestIamPermissionsRequest](src/GoogleCloudDataproc/Requests/DataprocProjectsLocationsAutoscalingPoliciesTestIamPermissionsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[TestIamPermissionsResponse](src/GoogleCloudDataproc/Models/TestIamPermissionsResponse.cs)</code>

**OnError**: <code>[ApiException](src/GoogleCloudDataproc/Core/Exceptions/ApiException.cs)&lt;[DataprocProjectsLocationsAutoscalingPoliciesTestIamPermissionsError](src/GoogleCloudDataproc/Errors/DataprocProjectsLocationsAutoscalingPoliciesTestIamPermissionsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;AutoscalingPolicy&gt; DataprocProjectsLocationsAutoscalingPoliciesUpdate(DataprocProjectsLocationsAutoscalingPoliciesUpdateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates (replaces) autoscaling policy.Disabled check for update_mask, because all updates will be full replacements.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.DataprocProjectsLocationsAutoscalingPoliciesUpdate(
        new DataprocProjectsLocationsAutoscalingPoliciesUpdateRequest
        {
            ProjectsId = "some example string",
            LocationsId = "some example string",
            AutoscalingPoliciesId = "some example string",
            Body = new AutoscalingPolicy(),
        });
    // TODO: Handle 'response' of type AutoscalingPolicy
}
catch (ApiException<DataprocProjectsLocationsAutoscalingPoliciesUpdateError> ex)
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

<code>[DataprocProjectsLocationsAutoscalingPoliciesUpdateRequest](src/GoogleCloudDataproc/Requests/DataprocProjectsLocationsAutoscalingPoliciesUpdateRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[AutoscalingPolicy](src/GoogleCloudDataproc/Models/AutoscalingPolicy.cs)</code>

**OnError**: <code>[ApiException](src/GoogleCloudDataproc/Core/Exceptions/ApiException.cs)&lt;[DataprocProjectsLocationsAutoscalingPoliciesUpdateError](src/GoogleCloudDataproc/Errors/DataprocProjectsLocationsAutoscalingPoliciesUpdateError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Operation&gt; DataprocProjectsLocationsBatchesAnalyze(DataprocProjectsLocationsBatchesAnalyzeRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Analyze a Batch for possible recommendations and insights.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.DataprocProjectsLocationsBatchesAnalyze(
        new DataprocProjectsLocationsBatchesAnalyzeRequest
        {
            ProjectsId = "some example string",
            LocationsId = "some example string",
            BatchesId = "some example string",
            Body = new AnalyzeBatchRequest(),
        });
    // TODO: Handle 'response' of type Operation
}
catch (ApiException<DataprocProjectsLocationsBatchesAnalyzeError> ex)
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

<code>[DataprocProjectsLocationsBatchesAnalyzeRequest](src/GoogleCloudDataproc/Requests/DataprocProjectsLocationsBatchesAnalyzeRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Operation](src/GoogleCloudDataproc/Models/Operation.cs)</code>

**OnError**: <code>[ApiException](src/GoogleCloudDataproc/Core/Exceptions/ApiException.cs)&lt;[DataprocProjectsLocationsBatchesAnalyzeError](src/GoogleCloudDataproc/Errors/DataprocProjectsLocationsBatchesAnalyzeError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Operation&gt; DataprocProjectsLocationsBatchesCreate(DataprocProjectsLocationsBatchesCreateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a batch workload that executes asynchronously.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.DataprocProjectsLocationsBatchesCreate(new DataprocProjectsLocationsBatchesCreateRequest
    {
        ProjectsId = "some example string",
        LocationsId = "some example string",
        Body = new Batch(),
    });
    // TODO: Handle 'response' of type Operation
}
catch (ApiException<DataprocProjectsLocationsBatchesCreateError> ex)
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

<code>[DataprocProjectsLocationsBatchesCreateRequest](src/GoogleCloudDataproc/Requests/DataprocProjectsLocationsBatchesCreateRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Operation](src/GoogleCloudDataproc/Models/Operation.cs)</code>

**OnError**: <code>[ApiException](src/GoogleCloudDataproc/Core/Exceptions/ApiException.cs)&lt;[DataprocProjectsLocationsBatchesCreateError](src/GoogleCloudDataproc/Errors/DataprocProjectsLocationsBatchesCreateError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;object&gt; DataprocProjectsLocationsBatchesDelete(DataprocProjectsLocationsBatchesDeleteRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes the batch workload resource. If the batch is not in a CANCELLED, SUCCEEDED or FAILED State, the delete operation fails and the response returns FAILED_PRECONDITION.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.DataprocProjectsLocationsBatchesDelete(new DataprocProjectsLocationsBatchesDeleteRequest
    {
        ProjectsId = "some example string",
        LocationsId = "some example string",
        BatchesId = "some example string",
    });
    // TODO: Handle 'response' of type object
}
catch (ApiException<DataprocProjectsLocationsBatchesDeleteError> ex)
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

<code>[DataprocProjectsLocationsBatchesDeleteRequest](src/GoogleCloudDataproc/Requests/DataprocProjectsLocationsBatchesDeleteRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>object</code>

**OnError**: <code>[ApiException](src/GoogleCloudDataproc/Core/Exceptions/ApiException.cs)&lt;[DataprocProjectsLocationsBatchesDeleteError](src/GoogleCloudDataproc/Errors/DataprocProjectsLocationsBatchesDeleteError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Batch&gt; DataprocProjectsLocationsBatchesGet(DataprocProjectsLocationsBatchesGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets the batch workload resource representation.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.DataprocProjectsLocationsBatchesGet(new DataprocProjectsLocationsBatchesGetRequest
    {
        ProjectsId = "some example string",
        LocationsId = "some example string",
        BatchesId = "some example string",
    });
    // TODO: Handle 'response' of type Batch
}
catch (ApiException<DataprocProjectsLocationsBatchesGetError> ex)
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

<code>[DataprocProjectsLocationsBatchesGetRequest](src/GoogleCloudDataproc/Requests/DataprocProjectsLocationsBatchesGetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Batch](src/GoogleCloudDataproc/Models/Batch.cs)</code>

**OnError**: <code>[ApiException](src/GoogleCloudDataproc/Core/Exceptions/ApiException.cs)&lt;[DataprocProjectsLocationsBatchesGetError](src/GoogleCloudDataproc/Errors/DataprocProjectsLocationsBatchesGetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ListBatchesResponse&gt; DataprocProjectsLocationsBatchesList(DataprocProjectsLocationsBatchesListRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists batch workloads.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.DataprocProjectsLocationsBatchesList(new DataprocProjectsLocationsBatchesListRequest
    {
        ProjectsId = "some example string",
        LocationsId = "some example string",
    });
    // TODO: Handle 'response' of type ListBatchesResponse
}
catch (ApiException<DataprocProjectsLocationsBatchesListError> ex)
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

<code>[DataprocProjectsLocationsBatchesListRequest](src/GoogleCloudDataproc/Requests/DataprocProjectsLocationsBatchesListRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ListBatchesResponse](src/GoogleCloudDataproc/Models/ListBatchesResponse.cs)</code>

**OnError**: <code>[ApiException](src/GoogleCloudDataproc/Core/Exceptions/ApiException.cs)&lt;[DataprocProjectsLocationsBatchesListError](src/GoogleCloudDataproc/Errors/DataprocProjectsLocationsBatchesListError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;AccessSparkApplicationResponse&gt; DataprocProjectsLocationsBatchesSparkApplicationsAccess(DataprocProjectsLocationsBatchesSparkApplicationsAccessRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Obtain high level information corresponding to a single Spark Application.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.DataprocProjectsLocationsBatchesSparkApplicationsAccess(
        new DataprocProjectsLocationsBatchesSparkApplicationsAccessRequest
        {
            ProjectsId = "some example string",
            LocationsId = "some example string",
            BatchesId = "some example string",
            SparkApplicationsId = "some example string",
        });
    // TODO: Handle 'response' of type AccessSparkApplicationResponse
}
catch (ApiException<DataprocProjectsLocationsBatchesSparkApplicationsAccessError> ex)
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

<code>[DataprocProjectsLocationsBatchesSparkApplicationsAccessRequest](src/GoogleCloudDataproc/Requests/DataprocProjectsLocationsBatchesSparkApplicationsAccessRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[AccessSparkApplicationResponse](src/GoogleCloudDataproc/Models/AccessSparkApplicationResponse.cs)</code>

**OnError**: <code>[ApiException](src/GoogleCloudDataproc/Core/Exceptions/ApiException.cs)&lt;[DataprocProjectsLocationsBatchesSparkApplicationsAccessError](src/GoogleCloudDataproc/Errors/DataprocProjectsLocationsBatchesSparkApplicationsAccessError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;AccessSparkApplicationEnvironmentInfoResponse&gt; DataprocProjectsLocationsBatchesSparkApplicationsAccessEnvironmentInfo(DataprocProjectsLocationsBatchesSparkApplicationsAccessEnvironmentInfoRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Obtain environment details for a Spark Application

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.DataprocProjectsLocationsBatchesSparkApplicationsAccessEnvironmentInfo(
        new DataprocProjectsLocationsBatchesSparkApplicationsAccessEnvironmentInfoRequest
        {
            ProjectsId = "some example string",
            LocationsId = "some example string",
            BatchesId = "some example string",
            SparkApplicationsId = "some example string",
        });
    // TODO: Handle 'response' of type AccessSparkApplicationEnvironmentInfoResponse
}
catch (ApiException<DataprocProjectsLocationsBatchesSparkApplicationsAccessEnvironmentInfoError> ex)
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

<code>[DataprocProjectsLocationsBatchesSparkApplicationsAccessEnvironmentInfoRequest](src/GoogleCloudDataproc/Requests/DataprocProjectsLocationsBatchesSparkApplicationsAccessEnvironmentInfoRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[AccessSparkApplicationEnvironmentInfoResponse](src/GoogleCloudDataproc/Models/AccessSparkApplicationEnvironmentInfoResponse.cs)</code>

**OnError**: <code>[ApiException](src/GoogleCloudDataproc/Core/Exceptions/ApiException.cs)&lt;[DataprocProjectsLocationsBatchesSparkApplicationsAccessEnvironmentInfoError](src/GoogleCloudDataproc/Errors/DataprocProjectsLocationsBatchesSparkApplicationsAccessEnvironmentInfoError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;AccessSparkApplicationJobResponse&gt; DataprocProjectsLocationsBatchesSparkApplicationsAccessJob(DataprocProjectsLocationsBatchesSparkApplicationsAccessJobRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Obtain data corresponding to a spark job for a Spark Application.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.DataprocProjectsLocationsBatchesSparkApplicationsAccessJob(
        new DataprocProjectsLocationsBatchesSparkApplicationsAccessJobRequest
        {
            ProjectsId = "some example string",
            LocationsId = "some example string",
            BatchesId = "some example string",
            SparkApplicationsId = "some example string",
        });
    // TODO: Handle 'response' of type AccessSparkApplicationJobResponse
}
catch (ApiException<DataprocProjectsLocationsBatchesSparkApplicationsAccessJobError> ex)
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

<code>[DataprocProjectsLocationsBatchesSparkApplicationsAccessJobRequest](src/GoogleCloudDataproc/Requests/DataprocProjectsLocationsBatchesSparkApplicationsAccessJobRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[AccessSparkApplicationJobResponse](src/GoogleCloudDataproc/Models/AccessSparkApplicationJobResponse.cs)</code>

**OnError**: <code>[ApiException](src/GoogleCloudDataproc/Core/Exceptions/ApiException.cs)&lt;[DataprocProjectsLocationsBatchesSparkApplicationsAccessJobError](src/GoogleCloudDataproc/Errors/DataprocProjectsLocationsBatchesSparkApplicationsAccessJobError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;AccessSparkApplicationNativeBuildInfoResponse&gt; DataprocProjectsLocationsBatchesSparkApplicationsAccessNativeBuildInfo(DataprocProjectsLocationsBatchesSparkApplicationsAccessNativeBuildInfoRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Obtain build data for Native Job

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.DataprocProjectsLocationsBatchesSparkApplicationsAccessNativeBuildInfo(
        new DataprocProjectsLocationsBatchesSparkApplicationsAccessNativeBuildInfoRequest
        {
            ProjectsId = "some example string",
            LocationsId = "some example string",
            BatchesId = "some example string",
            SparkApplicationsId = "some example string",
        });
    // TODO: Handle 'response' of type AccessSparkApplicationNativeBuildInfoResponse
}
catch (ApiException<DataprocProjectsLocationsBatchesSparkApplicationsAccessNativeBuildInfoError> ex)
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

<code>[DataprocProjectsLocationsBatchesSparkApplicationsAccessNativeBuildInfoRequest](src/GoogleCloudDataproc/Requests/DataprocProjectsLocationsBatchesSparkApplicationsAccessNativeBuildInfoRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[AccessSparkApplicationNativeBuildInfoResponse](src/GoogleCloudDataproc/Models/AccessSparkApplicationNativeBuildInfoResponse.cs)</code>

**OnError**: <code>[ApiException](src/GoogleCloudDataproc/Core/Exceptions/ApiException.cs)&lt;[DataprocProjectsLocationsBatchesSparkApplicationsAccessNativeBuildInfoError](src/GoogleCloudDataproc/Errors/DataprocProjectsLocationsBatchesSparkApplicationsAccessNativeBuildInfoError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;AccessSparkApplicationNativeSqlQueryResponse&gt; DataprocProjectsLocationsBatchesSparkApplicationsAccessNativeSqlQuery(DataprocProjectsLocationsBatchesSparkApplicationsAccessNativeSqlQueryRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Obtain data corresponding to a particular Native SQL Query for a Spark Application.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.DataprocProjectsLocationsBatchesSparkApplicationsAccessNativeSqlQuery(
        new DataprocProjectsLocationsBatchesSparkApplicationsAccessNativeSqlQueryRequest
        {
            ProjectsId = "some example string",
            LocationsId = "some example string",
            BatchesId = "some example string",
            SparkApplicationsId = "some example string",
        });
    // TODO: Handle 'response' of type AccessSparkApplicationNativeSqlQueryResponse
}
catch (ApiException<DataprocProjectsLocationsBatchesSparkApplicationsAccessNativeSqlQueryError> ex)
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

<code>[DataprocProjectsLocationsBatchesSparkApplicationsAccessNativeSqlQueryRequest](src/GoogleCloudDataproc/Requests/DataprocProjectsLocationsBatchesSparkApplicationsAccessNativeSqlQueryRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[AccessSparkApplicationNativeSqlQueryResponse](src/GoogleCloudDataproc/Models/AccessSparkApplicationNativeSqlQueryResponse.cs)</code>

**OnError**: <code>[ApiException](src/GoogleCloudDataproc/Core/Exceptions/ApiException.cs)&lt;[DataprocProjectsLocationsBatchesSparkApplicationsAccessNativeSqlQueryError](src/GoogleCloudDataproc/Errors/DataprocProjectsLocationsBatchesSparkApplicationsAccessNativeSqlQueryError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;AccessSparkApplicationSqlSparkPlanGraphResponse&gt; DataprocProjectsLocationsBatchesSparkApplicationsAccessSqlPlan(DataprocProjectsLocationsBatchesSparkApplicationsAccessSqlPlanRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Obtain Spark Plan Graph for a Spark Application SQL execution. Limits the number of clusters returned as part of the graph to 10000.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.DataprocProjectsLocationsBatchesSparkApplicationsAccessSqlPlan(
        new DataprocProjectsLocationsBatchesSparkApplicationsAccessSqlPlanRequest
        {
            ProjectsId = "some example string",
            LocationsId = "some example string",
            BatchesId = "some example string",
            SparkApplicationsId = "some example string",
        });
    // TODO: Handle 'response' of type AccessSparkApplicationSqlSparkPlanGraphResponse
}
catch (ApiException<DataprocProjectsLocationsBatchesSparkApplicationsAccessSqlPlanError> ex)
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

<code>[DataprocProjectsLocationsBatchesSparkApplicationsAccessSqlPlanRequest](src/GoogleCloudDataproc/Requests/DataprocProjectsLocationsBatchesSparkApplicationsAccessSqlPlanRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[AccessSparkApplicationSqlSparkPlanGraphResponse](src/GoogleCloudDataproc/Models/AccessSparkApplicationSqlSparkPlanGraphResponse.cs)</code>

**OnError**: <code>[ApiException](src/GoogleCloudDataproc/Core/Exceptions/ApiException.cs)&lt;[DataprocProjectsLocationsBatchesSparkApplicationsAccessSqlPlanError](src/GoogleCloudDataproc/Errors/DataprocProjectsLocationsBatchesSparkApplicationsAccessSqlPlanError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;AccessSparkApplicationSqlQueryResponse&gt; DataprocProjectsLocationsBatchesSparkApplicationsAccessSqlQuery(DataprocProjectsLocationsBatchesSparkApplicationsAccessSqlQueryRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Obtain data corresponding to a particular SQL Query for a Spark Application.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.DataprocProjectsLocationsBatchesSparkApplicationsAccessSqlQuery(
        new DataprocProjectsLocationsBatchesSparkApplicationsAccessSqlQueryRequest
        {
            ProjectsId = "some example string",
            LocationsId = "some example string",
            BatchesId = "some example string",
            SparkApplicationsId = "some example string",
        });
    // TODO: Handle 'response' of type AccessSparkApplicationSqlQueryResponse
}
catch (ApiException<DataprocProjectsLocationsBatchesSparkApplicationsAccessSqlQueryError> ex)
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

<code>[DataprocProjectsLocationsBatchesSparkApplicationsAccessSqlQueryRequest](src/GoogleCloudDataproc/Requests/DataprocProjectsLocationsBatchesSparkApplicationsAccessSqlQueryRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[AccessSparkApplicationSqlQueryResponse](src/GoogleCloudDataproc/Models/AccessSparkApplicationSqlQueryResponse.cs)</code>

**OnError**: <code>[ApiException](src/GoogleCloudDataproc/Core/Exceptions/ApiException.cs)&lt;[DataprocProjectsLocationsBatchesSparkApplicationsAccessSqlQueryError](src/GoogleCloudDataproc/Errors/DataprocProjectsLocationsBatchesSparkApplicationsAccessSqlQueryError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;AccessSparkApplicationStageAttemptResponse&gt; DataprocProjectsLocationsBatchesSparkApplicationsAccessStageAttempt(DataprocProjectsLocationsBatchesSparkApplicationsAccessStageAttemptRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Obtain data corresponding to a spark stage attempt for a Spark Application.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.DataprocProjectsLocationsBatchesSparkApplicationsAccessStageAttempt(
        new DataprocProjectsLocationsBatchesSparkApplicationsAccessStageAttemptRequest
        {
            ProjectsId = "some example string",
            LocationsId = "some example string",
            BatchesId = "some example string",
            SparkApplicationsId = "some example string",
        });
    // TODO: Handle 'response' of type AccessSparkApplicationStageAttemptResponse
}
catch (ApiException<DataprocProjectsLocationsBatchesSparkApplicationsAccessStageAttemptError> ex)
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

<code>[DataprocProjectsLocationsBatchesSparkApplicationsAccessStageAttemptRequest](src/GoogleCloudDataproc/Requests/DataprocProjectsLocationsBatchesSparkApplicationsAccessStageAttemptRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[AccessSparkApplicationStageAttemptResponse](src/GoogleCloudDataproc/Models/AccessSparkApplicationStageAttemptResponse.cs)</code>

**OnError**: <code>[ApiException](src/GoogleCloudDataproc/Core/Exceptions/ApiException.cs)&lt;[DataprocProjectsLocationsBatchesSparkApplicationsAccessStageAttemptError](src/GoogleCloudDataproc/Errors/DataprocProjectsLocationsBatchesSparkApplicationsAccessStageAttemptError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;AccessSparkApplicationStageRddOperationGraphResponse&gt; DataprocProjectsLocationsBatchesSparkApplicationsAccessStageRddGraph(DataprocProjectsLocationsBatchesSparkApplicationsAccessStageRddGraphRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Obtain RDD operation graph for a Spark Application Stage. Limits the number of clusters returned as part of the graph to 10000.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.DataprocProjectsLocationsBatchesSparkApplicationsAccessStageRddGraph(
        new DataprocProjectsLocationsBatchesSparkApplicationsAccessStageRddGraphRequest
        {
            ProjectsId = "some example string",
            LocationsId = "some example string",
            BatchesId = "some example string",
            SparkApplicationsId = "some example string",
        });
    // TODO: Handle 'response' of type AccessSparkApplicationStageRddOperationGraphResponse
}
catch (ApiException<DataprocProjectsLocationsBatchesSparkApplicationsAccessStageRddGraphError> ex)
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

<code>[DataprocProjectsLocationsBatchesSparkApplicationsAccessStageRddGraphRequest](src/GoogleCloudDataproc/Requests/DataprocProjectsLocationsBatchesSparkApplicationsAccessStageRddGraphRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[AccessSparkApplicationStageRddOperationGraphResponse](src/GoogleCloudDataproc/Models/AccessSparkApplicationStageRddOperationGraphResponse.cs)</code>

**OnError**: <code>[ApiException](src/GoogleCloudDataproc/Core/Exceptions/ApiException.cs)&lt;[DataprocProjectsLocationsBatchesSparkApplicationsAccessStageRddGraphError](src/GoogleCloudDataproc/Errors/DataprocProjectsLocationsBatchesSparkApplicationsAccessStageRddGraphError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ComputeTuningConfigResponse&gt; DataprocProjectsLocationsBatchesSparkApplicationsComputeTuningConfig(DataprocProjectsLocationsBatchesSparkApplicationsComputeTuningConfigRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns autotuning configuration for a specific query plan id and cohort id. Called by Spark during query planning.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.DataprocProjectsLocationsBatchesSparkApplicationsComputeTuningConfig(
        new DataprocProjectsLocationsBatchesSparkApplicationsComputeTuningConfigRequest
        {
            ProjectsId = "some example string",
            LocationsId = "some example string",
            BatchesId = "some example string",
            SparkApplicationsId = "some example string",
        });
    // TODO: Handle 'response' of type ComputeTuningConfigResponse
}
catch (ApiException<DataprocProjectsLocationsBatchesSparkApplicationsComputeTuningConfigError> ex)
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

<code>[DataprocProjectsLocationsBatchesSparkApplicationsComputeTuningConfigRequest](src/GoogleCloudDataproc/Requests/DataprocProjectsLocationsBatchesSparkApplicationsComputeTuningConfigRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ComputeTuningConfigResponse](src/GoogleCloudDataproc/Models/ComputeTuningConfigResponse.cs)</code>

**OnError**: <code>[ApiException](src/GoogleCloudDataproc/Core/Exceptions/ApiException.cs)&lt;[DataprocProjectsLocationsBatchesSparkApplicationsComputeTuningConfigError](src/GoogleCloudDataproc/Errors/DataprocProjectsLocationsBatchesSparkApplicationsComputeTuningConfigError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;SearchSparkApplicationsResponse&gt; DataprocProjectsLocationsBatchesSparkApplicationsSearch(DataprocProjectsLocationsBatchesSparkApplicationsSearchRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Obtain high level information and list of Spark Applications corresponding to a batch

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.DataprocProjectsLocationsBatchesSparkApplicationsSearch(
        new DataprocProjectsLocationsBatchesSparkApplicationsSearchRequest
        {
            ProjectsId = "some example string",
            LocationsId = "some example string",
            BatchesId = "some example string",
        });
    // TODO: Handle 'response' of type SearchSparkApplicationsResponse
}
catch (ApiException<DataprocProjectsLocationsBatchesSparkApplicationsSearchError> ex)
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

<code>[DataprocProjectsLocationsBatchesSparkApplicationsSearchRequest](src/GoogleCloudDataproc/Requests/DataprocProjectsLocationsBatchesSparkApplicationsSearchRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SearchSparkApplicationsResponse](src/GoogleCloudDataproc/Models/SearchSparkApplicationsResponse.cs)</code>

**OnError**: <code>[ApiException](src/GoogleCloudDataproc/Core/Exceptions/ApiException.cs)&lt;[DataprocProjectsLocationsBatchesSparkApplicationsSearchError](src/GoogleCloudDataproc/Errors/DataprocProjectsLocationsBatchesSparkApplicationsSearchError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;SearchSparkApplicationExecutorStageSummaryResponse&gt; DataprocProjectsLocationsBatchesSparkApplicationsSearchExecutorStageSummary(DataprocProjectsLocationsBatchesSparkApplicationsSearchExecutorStageSummaryRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Obtain executor summary with respect to a spark stage attempt.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.DataprocProjectsLocationsBatchesSparkApplicationsSearchExecutorStageSummary(
        new DataprocProjectsLocationsBatchesSparkApplicationsSearchExecutorStageSummaryRequest
        {
            ProjectsId = "some example string",
            LocationsId = "some example string",
            BatchesId = "some example string",
            SparkApplicationsId = "some example string",
        });
    // TODO: Handle 'response' of type SearchSparkApplicationExecutorStageSummaryResponse
}
catch (ApiException<DataprocProjectsLocationsBatchesSparkApplicationsSearchExecutorStageSummaryError> ex)
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

<code>[DataprocProjectsLocationsBatchesSparkApplicationsSearchExecutorStageSummaryRequest](src/GoogleCloudDataproc/Requests/DataprocProjectsLocationsBatchesSparkApplicationsSearchExecutorStageSummaryRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SearchSparkApplicationExecutorStageSummaryResponse](src/GoogleCloudDataproc/Models/SearchSparkApplicationExecutorStageSummaryResponse.cs)</code>

**OnError**: <code>[ApiException](src/GoogleCloudDataproc/Core/Exceptions/ApiException.cs)&lt;[DataprocProjectsLocationsBatchesSparkApplicationsSearchExecutorStageSummaryError](src/GoogleCloudDataproc/Errors/DataprocProjectsLocationsBatchesSparkApplicationsSearchExecutorStageSummaryError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;SearchSparkApplicationExecutorsResponse&gt; DataprocProjectsLocationsBatchesSparkApplicationsSearchExecutors(DataprocProjectsLocationsBatchesSparkApplicationsSearchExecutorsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Obtain data corresponding to executors for a Spark Application.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.DataprocProjectsLocationsBatchesSparkApplicationsSearchExecutors(
        new DataprocProjectsLocationsBatchesSparkApplicationsSearchExecutorsRequest
        {
            ProjectsId = "some example string",
            LocationsId = "some example string",
            BatchesId = "some example string",
            SparkApplicationsId = "some example string",
        });
    // TODO: Handle 'response' of type SearchSparkApplicationExecutorsResponse
}
catch (ApiException<DataprocProjectsLocationsBatchesSparkApplicationsSearchExecutorsError> ex)
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

<code>[DataprocProjectsLocationsBatchesSparkApplicationsSearchExecutorsRequest](src/GoogleCloudDataproc/Requests/DataprocProjectsLocationsBatchesSparkApplicationsSearchExecutorsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SearchSparkApplicationExecutorsResponse](src/GoogleCloudDataproc/Models/SearchSparkApplicationExecutorsResponse.cs)</code>

**OnError**: <code>[ApiException](src/GoogleCloudDataproc/Core/Exceptions/ApiException.cs)&lt;[DataprocProjectsLocationsBatchesSparkApplicationsSearchExecutorsError](src/GoogleCloudDataproc/Errors/DataprocProjectsLocationsBatchesSparkApplicationsSearchExecutorsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;SearchSparkApplicationJobsResponse&gt; DataprocProjectsLocationsBatchesSparkApplicationsSearchJobs(DataprocProjectsLocationsBatchesSparkApplicationsSearchJobsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Obtain list of spark jobs corresponding to a Spark Application.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.DataprocProjectsLocationsBatchesSparkApplicationsSearchJobs(
        new DataprocProjectsLocationsBatchesSparkApplicationsSearchJobsRequest
        {
            ProjectsId = "some example string",
            LocationsId = "some example string",
            BatchesId = "some example string",
            SparkApplicationsId = "some example string",
        });
    // TODO: Handle 'response' of type SearchSparkApplicationJobsResponse
}
catch (ApiException<DataprocProjectsLocationsBatchesSparkApplicationsSearchJobsError> ex)
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

<code>[DataprocProjectsLocationsBatchesSparkApplicationsSearchJobsRequest](src/GoogleCloudDataproc/Requests/DataprocProjectsLocationsBatchesSparkApplicationsSearchJobsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SearchSparkApplicationJobsResponse](src/GoogleCloudDataproc/Models/SearchSparkApplicationJobsResponse.cs)</code>

**OnError**: <code>[ApiException](src/GoogleCloudDataproc/Core/Exceptions/ApiException.cs)&lt;[DataprocProjectsLocationsBatchesSparkApplicationsSearchJobsError](src/GoogleCloudDataproc/Errors/DataprocProjectsLocationsBatchesSparkApplicationsSearchJobsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;SearchSparkApplicationNativeSqlQueriesResponse&gt; DataprocProjectsLocationsBatchesSparkApplicationsSearchNativeSqlQueries(DataprocProjectsLocationsBatchesSparkApplicationsSearchNativeSqlQueriesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Obtain data corresponding to Native SQL Queries for a Spark Application.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.DataprocProjectsLocationsBatchesSparkApplicationsSearchNativeSqlQueries(
        new DataprocProjectsLocationsBatchesSparkApplicationsSearchNativeSqlQueriesRequest
        {
            ProjectsId = "some example string",
            LocationsId = "some example string",
            BatchesId = "some example string",
            SparkApplicationsId = "some example string",
        });
    // TODO: Handle 'response' of type SearchSparkApplicationNativeSqlQueriesResponse
}
catch (ApiException<DataprocProjectsLocationsBatchesSparkApplicationsSearchNativeSqlQueriesError> ex)
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

<code>[DataprocProjectsLocationsBatchesSparkApplicationsSearchNativeSqlQueriesRequest](src/GoogleCloudDataproc/Requests/DataprocProjectsLocationsBatchesSparkApplicationsSearchNativeSqlQueriesRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SearchSparkApplicationNativeSqlQueriesResponse](src/GoogleCloudDataproc/Models/SearchSparkApplicationNativeSqlQueriesResponse.cs)</code>

**OnError**: <code>[ApiException](src/GoogleCloudDataproc/Core/Exceptions/ApiException.cs)&lt;[DataprocProjectsLocationsBatchesSparkApplicationsSearchNativeSqlQueriesError](src/GoogleCloudDataproc/Errors/DataprocProjectsLocationsBatchesSparkApplicationsSearchNativeSqlQueriesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;SearchSparkApplicationSqlQueriesResponse&gt; DataprocProjectsLocationsBatchesSparkApplicationsSearchSqlQueries(DataprocProjectsLocationsBatchesSparkApplicationsSearchSqlQueriesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Obtain data corresponding to SQL Queries for a Spark Application.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.DataprocProjectsLocationsBatchesSparkApplicationsSearchSqlQueries(
        new DataprocProjectsLocationsBatchesSparkApplicationsSearchSqlQueriesRequest
        {
            ProjectsId = "some example string",
            LocationsId = "some example string",
            BatchesId = "some example string",
            SparkApplicationsId = "some example string",
        });
    // TODO: Handle 'response' of type SearchSparkApplicationSqlQueriesResponse
}
catch (ApiException<DataprocProjectsLocationsBatchesSparkApplicationsSearchSqlQueriesError> ex)
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

<code>[DataprocProjectsLocationsBatchesSparkApplicationsSearchSqlQueriesRequest](src/GoogleCloudDataproc/Requests/DataprocProjectsLocationsBatchesSparkApplicationsSearchSqlQueriesRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SearchSparkApplicationSqlQueriesResponse](src/GoogleCloudDataproc/Models/SearchSparkApplicationSqlQueriesResponse.cs)</code>

**OnError**: <code>[ApiException](src/GoogleCloudDataproc/Core/Exceptions/ApiException.cs)&lt;[DataprocProjectsLocationsBatchesSparkApplicationsSearchSqlQueriesError](src/GoogleCloudDataproc/Errors/DataprocProjectsLocationsBatchesSparkApplicationsSearchSqlQueriesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;SearchSparkApplicationStageAttemptTasksResponse&gt; DataprocProjectsLocationsBatchesSparkApplicationsSearchStageAttemptTasks(DataprocProjectsLocationsBatchesSparkApplicationsSearchStageAttemptTasksRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Obtain data corresponding to tasks for a spark stage attempt for a Spark Application.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.DataprocProjectsLocationsBatchesSparkApplicationsSearchStageAttemptTasks(
        new DataprocProjectsLocationsBatchesSparkApplicationsSearchStageAttemptTasksRequest
        {
            ProjectsId = "some example string",
            LocationsId = "some example string",
            BatchesId = "some example string",
            SparkApplicationsId = "some example string",
        });
    // TODO: Handle 'response' of type SearchSparkApplicationStageAttemptTasksResponse
}
catch (ApiException<DataprocProjectsLocationsBatchesSparkApplicationsSearchStageAttemptTasksError> ex)
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

<code>[DataprocProjectsLocationsBatchesSparkApplicationsSearchStageAttemptTasksRequest](src/GoogleCloudDataproc/Requests/DataprocProjectsLocationsBatchesSparkApplicationsSearchStageAttemptTasksRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SearchSparkApplicationStageAttemptTasksResponse](src/GoogleCloudDataproc/Models/SearchSparkApplicationStageAttemptTasksResponse.cs)</code>

**OnError**: <code>[ApiException](src/GoogleCloudDataproc/Core/Exceptions/ApiException.cs)&lt;[DataprocProjectsLocationsBatchesSparkApplicationsSearchStageAttemptTasksError](src/GoogleCloudDataproc/Errors/DataprocProjectsLocationsBatchesSparkApplicationsSearchStageAttemptTasksError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;SearchSparkApplicationStageAttemptsResponse&gt; DataprocProjectsLocationsBatchesSparkApplicationsSearchStageAttempts(DataprocProjectsLocationsBatchesSparkApplicationsSearchStageAttemptsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Obtain data corresponding to a spark stage attempts for a Spark Application.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.DataprocProjectsLocationsBatchesSparkApplicationsSearchStageAttempts(
        new DataprocProjectsLocationsBatchesSparkApplicationsSearchStageAttemptsRequest
        {
            ProjectsId = "some example string",
            LocationsId = "some example string",
            BatchesId = "some example string",
            SparkApplicationsId = "some example string",
        });
    // TODO: Handle 'response' of type SearchSparkApplicationStageAttemptsResponse
}
catch (ApiException<DataprocProjectsLocationsBatchesSparkApplicationsSearchStageAttemptsError> ex)
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

<code>[DataprocProjectsLocationsBatchesSparkApplicationsSearchStageAttemptsRequest](src/GoogleCloudDataproc/Requests/DataprocProjectsLocationsBatchesSparkApplicationsSearchStageAttemptsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SearchSparkApplicationStageAttemptsResponse](src/GoogleCloudDataproc/Models/SearchSparkApplicationStageAttemptsResponse.cs)</code>

**OnError**: <code>[ApiException](src/GoogleCloudDataproc/Core/Exceptions/ApiException.cs)&lt;[DataprocProjectsLocationsBatchesSparkApplicationsSearchStageAttemptsError](src/GoogleCloudDataproc/Errors/DataprocProjectsLocationsBatchesSparkApplicationsSearchStageAttemptsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;SearchSparkApplicationStagesResponse&gt; DataprocProjectsLocationsBatchesSparkApplicationsSearchStages(DataprocProjectsLocationsBatchesSparkApplicationsSearchStagesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Obtain data corresponding to stages for a Spark Application.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.DataprocProjectsLocationsBatchesSparkApplicationsSearchStages(
        new DataprocProjectsLocationsBatchesSparkApplicationsSearchStagesRequest
        {
            ProjectsId = "some example string",
            LocationsId = "some example string",
            BatchesId = "some example string",
            SparkApplicationsId = "some example string",
        });
    // TODO: Handle 'response' of type SearchSparkApplicationStagesResponse
}
catch (ApiException<DataprocProjectsLocationsBatchesSparkApplicationsSearchStagesError> ex)
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

<code>[DataprocProjectsLocationsBatchesSparkApplicationsSearchStagesRequest](src/GoogleCloudDataproc/Requests/DataprocProjectsLocationsBatchesSparkApplicationsSearchStagesRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SearchSparkApplicationStagesResponse](src/GoogleCloudDataproc/Models/SearchSparkApplicationStagesResponse.cs)</code>

**OnError**: <code>[ApiException](src/GoogleCloudDataproc/Core/Exceptions/ApiException.cs)&lt;[DataprocProjectsLocationsBatchesSparkApplicationsSearchStagesError](src/GoogleCloudDataproc/Errors/DataprocProjectsLocationsBatchesSparkApplicationsSearchStagesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;SummarizeSparkApplicationExecutorsResponse&gt; DataprocProjectsLocationsBatchesSparkApplicationsSummarizeExecutors(DataprocProjectsLocationsBatchesSparkApplicationsSummarizeExecutorsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Obtain summary of Executor Summary for a Spark Application

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.DataprocProjectsLocationsBatchesSparkApplicationsSummarizeExecutors(
        new DataprocProjectsLocationsBatchesSparkApplicationsSummarizeExecutorsRequest
        {
            ProjectsId = "some example string",
            LocationsId = "some example string",
            BatchesId = "some example string",
            SparkApplicationsId = "some example string",
        });
    // TODO: Handle 'response' of type SummarizeSparkApplicationExecutorsResponse
}
catch (ApiException<DataprocProjectsLocationsBatchesSparkApplicationsSummarizeExecutorsError> ex)
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

<code>[DataprocProjectsLocationsBatchesSparkApplicationsSummarizeExecutorsRequest](src/GoogleCloudDataproc/Requests/DataprocProjectsLocationsBatchesSparkApplicationsSummarizeExecutorsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SummarizeSparkApplicationExecutorsResponse](src/GoogleCloudDataproc/Models/SummarizeSparkApplicationExecutorsResponse.cs)</code>

**OnError**: <code>[ApiException](src/GoogleCloudDataproc/Core/Exceptions/ApiException.cs)&lt;[DataprocProjectsLocationsBatchesSparkApplicationsSummarizeExecutorsError](src/GoogleCloudDataproc/Errors/DataprocProjectsLocationsBatchesSparkApplicationsSummarizeExecutorsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;SummarizeSparkApplicationJobsResponse&gt; DataprocProjectsLocationsBatchesSparkApplicationsSummarizeJobs(DataprocProjectsLocationsBatchesSparkApplicationsSummarizeJobsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Obtain summary of Jobs for a Spark Application

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.DataprocProjectsLocationsBatchesSparkApplicationsSummarizeJobs(
        new DataprocProjectsLocationsBatchesSparkApplicationsSummarizeJobsRequest
        {
            ProjectsId = "some example string",
            LocationsId = "some example string",
            BatchesId = "some example string",
            SparkApplicationsId = "some example string",
        });
    // TODO: Handle 'response' of type SummarizeSparkApplicationJobsResponse
}
catch (ApiException<DataprocProjectsLocationsBatchesSparkApplicationsSummarizeJobsError> ex)
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

<code>[DataprocProjectsLocationsBatchesSparkApplicationsSummarizeJobsRequest](src/GoogleCloudDataproc/Requests/DataprocProjectsLocationsBatchesSparkApplicationsSummarizeJobsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SummarizeSparkApplicationJobsResponse](src/GoogleCloudDataproc/Models/SummarizeSparkApplicationJobsResponse.cs)</code>

**OnError**: <code>[ApiException](src/GoogleCloudDataproc/Core/Exceptions/ApiException.cs)&lt;[DataprocProjectsLocationsBatchesSparkApplicationsSummarizeJobsError](src/GoogleCloudDataproc/Errors/DataprocProjectsLocationsBatchesSparkApplicationsSummarizeJobsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;SummarizeSparkApplicationStageAttemptTasksResponse&gt; DataprocProjectsLocationsBatchesSparkApplicationsSummarizeStageAttemptTasks(DataprocProjectsLocationsBatchesSparkApplicationsSummarizeStageAttemptTasksRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Obtain summary of Tasks for a Spark Application Stage Attempt

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.DataprocProjectsLocationsBatchesSparkApplicationsSummarizeStageAttemptTasks(
        new DataprocProjectsLocationsBatchesSparkApplicationsSummarizeStageAttemptTasksRequest
        {
            ProjectsId = "some example string",
            LocationsId = "some example string",
            BatchesId = "some example string",
            SparkApplicationsId = "some example string",
        });
    // TODO: Handle 'response' of type SummarizeSparkApplicationStageAttemptTasksResponse
}
catch (ApiException<DataprocProjectsLocationsBatchesSparkApplicationsSummarizeStageAttemptTasksError> ex)
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

<code>[DataprocProjectsLocationsBatchesSparkApplicationsSummarizeStageAttemptTasksRequest](src/GoogleCloudDataproc/Requests/DataprocProjectsLocationsBatchesSparkApplicationsSummarizeStageAttemptTasksRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SummarizeSparkApplicationStageAttemptTasksResponse](src/GoogleCloudDataproc/Models/SummarizeSparkApplicationStageAttemptTasksResponse.cs)</code>

**OnError**: <code>[ApiException](src/GoogleCloudDataproc/Core/Exceptions/ApiException.cs)&lt;[DataprocProjectsLocationsBatchesSparkApplicationsSummarizeStageAttemptTasksError](src/GoogleCloudDataproc/Errors/DataprocProjectsLocationsBatchesSparkApplicationsSummarizeStageAttemptTasksError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;SummarizeSparkApplicationStagesResponse&gt; DataprocProjectsLocationsBatchesSparkApplicationsSummarizeStages(DataprocProjectsLocationsBatchesSparkApplicationsSummarizeStagesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Obtain summary of Stages for a Spark Application

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.DataprocProjectsLocationsBatchesSparkApplicationsSummarizeStages(
        new DataprocProjectsLocationsBatchesSparkApplicationsSummarizeStagesRequest
        {
            ProjectsId = "some example string",
            LocationsId = "some example string",
            BatchesId = "some example string",
            SparkApplicationsId = "some example string",
        });
    // TODO: Handle 'response' of type SummarizeSparkApplicationStagesResponse
}
catch (ApiException<DataprocProjectsLocationsBatchesSparkApplicationsSummarizeStagesError> ex)
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

<code>[DataprocProjectsLocationsBatchesSparkApplicationsSummarizeStagesRequest](src/GoogleCloudDataproc/Requests/DataprocProjectsLocationsBatchesSparkApplicationsSummarizeStagesRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SummarizeSparkApplicationStagesResponse](src/GoogleCloudDataproc/Models/SummarizeSparkApplicationStagesResponse.cs)</code>

**OnError**: <code>[ApiException](src/GoogleCloudDataproc/Core/Exceptions/ApiException.cs)&lt;[DataprocProjectsLocationsBatchesSparkApplicationsSummarizeStagesError](src/GoogleCloudDataproc/Errors/DataprocProjectsLocationsBatchesSparkApplicationsSummarizeStagesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;object&gt; DataprocProjectsLocationsBatchesSparkApplicationsWrite(DataprocProjectsLocationsBatchesSparkApplicationsWriteRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Write wrapper objects from dataplane to spanner

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.DataprocProjectsLocationsBatchesSparkApplicationsWrite(
        new DataprocProjectsLocationsBatchesSparkApplicationsWriteRequest
        {
            ProjectsId = "some example string",
            LocationsId = "some example string",
            BatchesId = "some example string",
            SparkApplicationsId = "some example string",
            Body = new WriteSparkApplicationContextRequest(),
        });
    // TODO: Handle 'response' of type object
}
catch (ApiException<DataprocProjectsLocationsBatchesSparkApplicationsWriteError> ex)
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

<code>[DataprocProjectsLocationsBatchesSparkApplicationsWriteRequest](src/GoogleCloudDataproc/Requests/DataprocProjectsLocationsBatchesSparkApplicationsWriteRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>object</code>

**OnError**: <code>[ApiException](src/GoogleCloudDataproc/Core/Exceptions/ApiException.cs)&lt;[DataprocProjectsLocationsBatchesSparkApplicationsWriteError](src/GoogleCloudDataproc/Errors/DataprocProjectsLocationsBatchesSparkApplicationsWriteError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;object&gt; DataprocProjectsLocationsOperationsCancel(DataprocProjectsLocationsOperationsCancelRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns google.rpc.Code.UNIMPLEMENTED. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to Code.CANCELLED.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.DataprocProjectsLocationsOperationsCancel(
        new DataprocProjectsLocationsOperationsCancelRequest
        {
            ProjectsId = "some example string",
            LocationsId = "some example string",
            OperationsId = "some example string",
        });
    // TODO: Handle 'response' of type object
}
catch (ApiException<DataprocProjectsLocationsOperationsCancelError> ex)
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

<code>[DataprocProjectsLocationsOperationsCancelRequest](src/GoogleCloudDataproc/Requests/DataprocProjectsLocationsOperationsCancelRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>object</code>

**OnError**: <code>[ApiException](src/GoogleCloudDataproc/Core/Exceptions/ApiException.cs)&lt;[DataprocProjectsLocationsOperationsCancelError](src/GoogleCloudDataproc/Errors/DataprocProjectsLocationsOperationsCancelError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;object&gt; DataprocProjectsLocationsOperationsDelete(DataprocProjectsLocationsOperationsDeleteRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns google.rpc.Code.UNIMPLEMENTED.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.DataprocProjectsLocationsOperationsDelete(
        new DataprocProjectsLocationsOperationsDeleteRequest
        {
            ProjectsId = "some example string",
            LocationsId = "some example string",
            OperationsId = "some example string",
        });
    // TODO: Handle 'response' of type object
}
catch (ApiException<DataprocProjectsLocationsOperationsDeleteError> ex)
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

<code>[DataprocProjectsLocationsOperationsDeleteRequest](src/GoogleCloudDataproc/Requests/DataprocProjectsLocationsOperationsDeleteRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>object</code>

**OnError**: <code>[ApiException](src/GoogleCloudDataproc/Core/Exceptions/ApiException.cs)&lt;[DataprocProjectsLocationsOperationsDeleteError](src/GoogleCloudDataproc/Errors/DataprocProjectsLocationsOperationsDeleteError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Operation&gt; DataprocProjectsLocationsOperationsGet(DataprocProjectsLocationsOperationsGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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
    var response = await client.DataprocProjectsLocationsOperationsGet(new DataprocProjectsLocationsOperationsGetRequest
    {
        ProjectsId = "some example string",
        LocationsId = "some example string",
        OperationsId = "some example string",
    });
    // TODO: Handle 'response' of type Operation
}
catch (ApiException<DataprocProjectsLocationsOperationsGetError> ex)
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

<code>[DataprocProjectsLocationsOperationsGetRequest](src/GoogleCloudDataproc/Requests/DataprocProjectsLocationsOperationsGetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Operation](src/GoogleCloudDataproc/Models/Operation.cs)</code>

**OnError**: <code>[ApiException](src/GoogleCloudDataproc/Core/Exceptions/ApiException.cs)&lt;[DataprocProjectsLocationsOperationsGetError](src/GoogleCloudDataproc/Errors/DataprocProjectsLocationsOperationsGetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ListOperationsResponse&gt; DataprocProjectsLocationsOperationsList(DataprocProjectsLocationsOperationsListRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns UNIMPLEMENTED.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.DataprocProjectsLocationsOperationsList(
        new DataprocProjectsLocationsOperationsListRequest
        {
            ProjectsId = "some example string",
            LocationsId = "some example string",
        });
    // TODO: Handle 'response' of type ListOperationsResponse
}
catch (ApiException<DataprocProjectsLocationsOperationsListError> ex)
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

<code>[DataprocProjectsLocationsOperationsListRequest](src/GoogleCloudDataproc/Requests/DataprocProjectsLocationsOperationsListRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ListOperationsResponse](src/GoogleCloudDataproc/Models/ListOperationsResponse.cs)</code>

**OnError**: <code>[ApiException](src/GoogleCloudDataproc/Core/Exceptions/ApiException.cs)&lt;[DataprocProjectsLocationsOperationsListError](src/GoogleCloudDataproc/Errors/DataprocProjectsLocationsOperationsListError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;SessionTemplate&gt; DataprocProjectsLocationsSessionTemplatesCreate(DataprocProjectsLocationsSessionTemplatesCreateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a session template synchronously.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.DataprocProjectsLocationsSessionTemplatesCreate(
        new DataprocProjectsLocationsSessionTemplatesCreateRequest
        {
            ProjectsId = "some example string",
            LocationsId = "some example string",
            Body = new SessionTemplate(),
        });
    // TODO: Handle 'response' of type SessionTemplate
}
catch (ApiException<DataprocProjectsLocationsSessionTemplatesCreateError> ex)
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

<code>[DataprocProjectsLocationsSessionTemplatesCreateRequest](src/GoogleCloudDataproc/Requests/DataprocProjectsLocationsSessionTemplatesCreateRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SessionTemplate](src/GoogleCloudDataproc/Models/SessionTemplate.cs)</code>

**OnError**: <code>[ApiException](src/GoogleCloudDataproc/Core/Exceptions/ApiException.cs)&lt;[DataprocProjectsLocationsSessionTemplatesCreateError](src/GoogleCloudDataproc/Errors/DataprocProjectsLocationsSessionTemplatesCreateError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;object&gt; DataprocProjectsLocationsSessionTemplatesDelete(DataprocProjectsLocationsSessionTemplatesDeleteRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a session template.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.DataprocProjectsLocationsSessionTemplatesDelete(
        new DataprocProjectsLocationsSessionTemplatesDeleteRequest
        {
            ProjectsId = "some example string",
            LocationsId = "some example string",
            SessionTemplatesId = "some example string",
        });
    // TODO: Handle 'response' of type object
}
catch (ApiException<DataprocProjectsLocationsSessionTemplatesDeleteError> ex)
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

<code>[DataprocProjectsLocationsSessionTemplatesDeleteRequest](src/GoogleCloudDataproc/Requests/DataprocProjectsLocationsSessionTemplatesDeleteRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>object</code>

**OnError**: <code>[ApiException](src/GoogleCloudDataproc/Core/Exceptions/ApiException.cs)&lt;[DataprocProjectsLocationsSessionTemplatesDeleteError](src/GoogleCloudDataproc/Errors/DataprocProjectsLocationsSessionTemplatesDeleteError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;SessionTemplate&gt; DataprocProjectsLocationsSessionTemplatesGet(DataprocProjectsLocationsSessionTemplatesGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets the resource representation for a session template.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.DataprocProjectsLocationsSessionTemplatesGet(
        new DataprocProjectsLocationsSessionTemplatesGetRequest
        {
            ProjectsId = "some example string",
            LocationsId = "some example string",
            SessionTemplatesId = "some example string",
        });
    // TODO: Handle 'response' of type SessionTemplate
}
catch (ApiException<DataprocProjectsLocationsSessionTemplatesGetError> ex)
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

<code>[DataprocProjectsLocationsSessionTemplatesGetRequest](src/GoogleCloudDataproc/Requests/DataprocProjectsLocationsSessionTemplatesGetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SessionTemplate](src/GoogleCloudDataproc/Models/SessionTemplate.cs)</code>

**OnError**: <code>[ApiException](src/GoogleCloudDataproc/Core/Exceptions/ApiException.cs)&lt;[DataprocProjectsLocationsSessionTemplatesGetError](src/GoogleCloudDataproc/Errors/DataprocProjectsLocationsSessionTemplatesGetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ListSessionTemplatesResponse&gt; DataprocProjectsLocationsSessionTemplatesList(DataprocProjectsLocationsSessionTemplatesListRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists session templates.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.DataprocProjectsLocationsSessionTemplatesList(
        new DataprocProjectsLocationsSessionTemplatesListRequest
        {
            ProjectsId = "some example string",
            LocationsId = "some example string",
        });
    // TODO: Handle 'response' of type ListSessionTemplatesResponse
}
catch (ApiException<DataprocProjectsLocationsSessionTemplatesListError> ex)
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

<code>[DataprocProjectsLocationsSessionTemplatesListRequest](src/GoogleCloudDataproc/Requests/DataprocProjectsLocationsSessionTemplatesListRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ListSessionTemplatesResponse](src/GoogleCloudDataproc/Models/ListSessionTemplatesResponse.cs)</code>

**OnError**: <code>[ApiException](src/GoogleCloudDataproc/Core/Exceptions/ApiException.cs)&lt;[DataprocProjectsLocationsSessionTemplatesListError](src/GoogleCloudDataproc/Errors/DataprocProjectsLocationsSessionTemplatesListError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;SessionTemplate&gt; DataprocProjectsLocationsSessionTemplatesPatch(DataprocProjectsLocationsSessionTemplatesPatchRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates the session template synchronously.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.DataprocProjectsLocationsSessionTemplatesPatch(
        new DataprocProjectsLocationsSessionTemplatesPatchRequest
        {
            ProjectsId = "some example string",
            LocationsId = "some example string",
            SessionTemplatesId = "some example string",
            Body = new SessionTemplate(),
        });
    // TODO: Handle 'response' of type SessionTemplate
}
catch (ApiException<DataprocProjectsLocationsSessionTemplatesPatchError> ex)
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

<code>[DataprocProjectsLocationsSessionTemplatesPatchRequest](src/GoogleCloudDataproc/Requests/DataprocProjectsLocationsSessionTemplatesPatchRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SessionTemplate](src/GoogleCloudDataproc/Models/SessionTemplate.cs)</code>

**OnError**: <code>[ApiException](src/GoogleCloudDataproc/Core/Exceptions/ApiException.cs)&lt;[DataprocProjectsLocationsSessionTemplatesPatchError](src/GoogleCloudDataproc/Errors/DataprocProjectsLocationsSessionTemplatesPatchError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Operation&gt; DataprocProjectsLocationsSessionsCreate(DataprocProjectsLocationsSessionsCreateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create an interactive session asynchronously.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.DataprocProjectsLocationsSessionsCreate(
        new DataprocProjectsLocationsSessionsCreateRequest
        {
            ProjectsId = "some example string",
            LocationsId = "some example string",
            Body = new Session(),
        });
    // TODO: Handle 'response' of type Operation
}
catch (ApiException<DataprocProjectsLocationsSessionsCreateError> ex)
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

<code>[DataprocProjectsLocationsSessionsCreateRequest](src/GoogleCloudDataproc/Requests/DataprocProjectsLocationsSessionsCreateRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Operation](src/GoogleCloudDataproc/Models/Operation.cs)</code>

**OnError**: <code>[ApiException](src/GoogleCloudDataproc/Core/Exceptions/ApiException.cs)&lt;[DataprocProjectsLocationsSessionsCreateError](src/GoogleCloudDataproc/Errors/DataprocProjectsLocationsSessionsCreateError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Operation&gt; DataprocProjectsLocationsSessionsDelete(DataprocProjectsLocationsSessionsDeleteRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes the interactive session resource. If the session is not in terminal state, it is terminated, and then deleted.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.DataprocProjectsLocationsSessionsDelete(
        new DataprocProjectsLocationsSessionsDeleteRequest
        {
            ProjectsId = "some example string",
            LocationsId = "some example string",
            SessionsId = "some example string",
        });
    // TODO: Handle 'response' of type Operation
}
catch (ApiException<DataprocProjectsLocationsSessionsDeleteError> ex)
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

<code>[DataprocProjectsLocationsSessionsDeleteRequest](src/GoogleCloudDataproc/Requests/DataprocProjectsLocationsSessionsDeleteRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Operation](src/GoogleCloudDataproc/Models/Operation.cs)</code>

**OnError**: <code>[ApiException](src/GoogleCloudDataproc/Core/Exceptions/ApiException.cs)&lt;[DataprocProjectsLocationsSessionsDeleteError](src/GoogleCloudDataproc/Errors/DataprocProjectsLocationsSessionsDeleteError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Session&gt; DataprocProjectsLocationsSessionsGet(DataprocProjectsLocationsSessionsGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets the resource representation for an interactive session.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.DataprocProjectsLocationsSessionsGet(new DataprocProjectsLocationsSessionsGetRequest
    {
        ProjectsId = "some example string",
        LocationsId = "some example string",
        SessionsId = "some example string",
    });
    // TODO: Handle 'response' of type Session
}
catch (ApiException<DataprocProjectsLocationsSessionsGetError> ex)
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

<code>[DataprocProjectsLocationsSessionsGetRequest](src/GoogleCloudDataproc/Requests/DataprocProjectsLocationsSessionsGetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Session](src/GoogleCloudDataproc/Models/Session.cs)</code>

**OnError**: <code>[ApiException](src/GoogleCloudDataproc/Core/Exceptions/ApiException.cs)&lt;[DataprocProjectsLocationsSessionsGetError](src/GoogleCloudDataproc/Errors/DataprocProjectsLocationsSessionsGetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ListSessionsResponse&gt; DataprocProjectsLocationsSessionsList(DataprocProjectsLocationsSessionsListRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists interactive sessions.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.DataprocProjectsLocationsSessionsList(new DataprocProjectsLocationsSessionsListRequest
    {
        ProjectsId = "some example string",
        LocationsId = "some example string",
    });
    // TODO: Handle 'response' of type ListSessionsResponse
}
catch (ApiException<DataprocProjectsLocationsSessionsListError> ex)
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

<code>[DataprocProjectsLocationsSessionsListRequest](src/GoogleCloudDataproc/Requests/DataprocProjectsLocationsSessionsListRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ListSessionsResponse](src/GoogleCloudDataproc/Models/ListSessionsResponse.cs)</code>

**OnError**: <code>[ApiException](src/GoogleCloudDataproc/Core/Exceptions/ApiException.cs)&lt;[DataprocProjectsLocationsSessionsListError](src/GoogleCloudDataproc/Errors/DataprocProjectsLocationsSessionsListError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;AccessSessionSparkApplicationResponse&gt; DataprocProjectsLocationsSessionsSparkApplicationsAccess(DataprocProjectsLocationsSessionsSparkApplicationsAccessRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Obtain high level information corresponding to a single Spark Application.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.DataprocProjectsLocationsSessionsSparkApplicationsAccess(
        new DataprocProjectsLocationsSessionsSparkApplicationsAccessRequest
        {
            ProjectsId = "some example string",
            LocationsId = "some example string",
            SessionsId = "some example string",
            SparkApplicationsId = "some example string",
        });
    // TODO: Handle 'response' of type AccessSessionSparkApplicationResponse
}
catch (ApiException<DataprocProjectsLocationsSessionsSparkApplicationsAccessError> ex)
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

<code>[DataprocProjectsLocationsSessionsSparkApplicationsAccessRequest](src/GoogleCloudDataproc/Requests/DataprocProjectsLocationsSessionsSparkApplicationsAccessRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[AccessSessionSparkApplicationResponse](src/GoogleCloudDataproc/Models/AccessSessionSparkApplicationResponse.cs)</code>

**OnError**: <code>[ApiException](src/GoogleCloudDataproc/Core/Exceptions/ApiException.cs)&lt;[DataprocProjectsLocationsSessionsSparkApplicationsAccessError](src/GoogleCloudDataproc/Errors/DataprocProjectsLocationsSessionsSparkApplicationsAccessError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;AccessSessionSparkApplicationEnvironmentInfoResponse&gt; DataprocProjectsLocationsSessionsSparkApplicationsAccessEnvironmentInfo(DataprocProjectsLocationsSessionsSparkApplicationsAccessEnvironmentInfoRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Obtain environment details for a Spark Application

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.DataprocProjectsLocationsSessionsSparkApplicationsAccessEnvironmentInfo(
        new DataprocProjectsLocationsSessionsSparkApplicationsAccessEnvironmentInfoRequest
        {
            ProjectsId = "some example string",
            LocationsId = "some example string",
            SessionsId = "some example string",
            SparkApplicationsId = "some example string",
        });
    // TODO: Handle 'response' of type AccessSessionSparkApplicationEnvironmentInfoResponse
}
catch (ApiException<DataprocProjectsLocationsSessionsSparkApplicationsAccessEnvironmentInfoError> ex)
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

<code>[DataprocProjectsLocationsSessionsSparkApplicationsAccessEnvironmentInfoRequest](src/GoogleCloudDataproc/Requests/DataprocProjectsLocationsSessionsSparkApplicationsAccessEnvironmentInfoRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[AccessSessionSparkApplicationEnvironmentInfoResponse](src/GoogleCloudDataproc/Models/AccessSessionSparkApplicationEnvironmentInfoResponse.cs)</code>

**OnError**: <code>[ApiException](src/GoogleCloudDataproc/Core/Exceptions/ApiException.cs)&lt;[DataprocProjectsLocationsSessionsSparkApplicationsAccessEnvironmentInfoError](src/GoogleCloudDataproc/Errors/DataprocProjectsLocationsSessionsSparkApplicationsAccessEnvironmentInfoError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;AccessSessionSparkApplicationJobResponse&gt; DataprocProjectsLocationsSessionsSparkApplicationsAccessJob(DataprocProjectsLocationsSessionsSparkApplicationsAccessJobRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Obtain data corresponding to a spark job for a Spark Application.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.DataprocProjectsLocationsSessionsSparkApplicationsAccessJob(
        new DataprocProjectsLocationsSessionsSparkApplicationsAccessJobRequest
        {
            ProjectsId = "some example string",
            LocationsId = "some example string",
            SessionsId = "some example string",
            SparkApplicationsId = "some example string",
        });
    // TODO: Handle 'response' of type AccessSessionSparkApplicationJobResponse
}
catch (ApiException<DataprocProjectsLocationsSessionsSparkApplicationsAccessJobError> ex)
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

<code>[DataprocProjectsLocationsSessionsSparkApplicationsAccessJobRequest](src/GoogleCloudDataproc/Requests/DataprocProjectsLocationsSessionsSparkApplicationsAccessJobRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[AccessSessionSparkApplicationJobResponse](src/GoogleCloudDataproc/Models/AccessSessionSparkApplicationJobResponse.cs)</code>

**OnError**: <code>[ApiException](src/GoogleCloudDataproc/Core/Exceptions/ApiException.cs)&lt;[DataprocProjectsLocationsSessionsSparkApplicationsAccessJobError](src/GoogleCloudDataproc/Errors/DataprocProjectsLocationsSessionsSparkApplicationsAccessJobError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;AccessSessionSparkApplicationNativeBuildInfoResponse&gt; DataprocProjectsLocationsSessionsSparkApplicationsAccessNativeBuildInfo(DataprocProjectsLocationsSessionsSparkApplicationsAccessNativeBuildInfoRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Obtain data corresponding to Native Build Information for a Spark Application.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.DataprocProjectsLocationsSessionsSparkApplicationsAccessNativeBuildInfo(
        new DataprocProjectsLocationsSessionsSparkApplicationsAccessNativeBuildInfoRequest
        {
            ProjectsId = "some example string",
            LocationsId = "some example string",
            SessionsId = "some example string",
            SparkApplicationsId = "some example string",
        });
    // TODO: Handle 'response' of type AccessSessionSparkApplicationNativeBuildInfoResponse
}
catch (ApiException<DataprocProjectsLocationsSessionsSparkApplicationsAccessNativeBuildInfoError> ex)
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

<code>[DataprocProjectsLocationsSessionsSparkApplicationsAccessNativeBuildInfoRequest](src/GoogleCloudDataproc/Requests/DataprocProjectsLocationsSessionsSparkApplicationsAccessNativeBuildInfoRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[AccessSessionSparkApplicationNativeBuildInfoResponse](src/GoogleCloudDataproc/Models/AccessSessionSparkApplicationNativeBuildInfoResponse.cs)</code>

**OnError**: <code>[ApiException](src/GoogleCloudDataproc/Core/Exceptions/ApiException.cs)&lt;[DataprocProjectsLocationsSessionsSparkApplicationsAccessNativeBuildInfoError](src/GoogleCloudDataproc/Errors/DataprocProjectsLocationsSessionsSparkApplicationsAccessNativeBuildInfoError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;AccessSessionSparkApplicationNativeSqlQueryResponse&gt; DataprocProjectsLocationsSessionsSparkApplicationsAccessNativeSqlQuery(DataprocProjectsLocationsSessionsSparkApplicationsAccessNativeSqlQueryRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Obtain data corresponding to a particular Native SQL Query for a Spark Application.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.DataprocProjectsLocationsSessionsSparkApplicationsAccessNativeSqlQuery(
        new DataprocProjectsLocationsSessionsSparkApplicationsAccessNativeSqlQueryRequest
        {
            ProjectsId = "some example string",
            LocationsId = "some example string",
            SessionsId = "some example string",
            SparkApplicationsId = "some example string",
        });
    // TODO: Handle 'response' of type AccessSessionSparkApplicationNativeSqlQueryResponse
}
catch (ApiException<DataprocProjectsLocationsSessionsSparkApplicationsAccessNativeSqlQueryError> ex)
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

<code>[DataprocProjectsLocationsSessionsSparkApplicationsAccessNativeSqlQueryRequest](src/GoogleCloudDataproc/Requests/DataprocProjectsLocationsSessionsSparkApplicationsAccessNativeSqlQueryRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[AccessSessionSparkApplicationNativeSqlQueryResponse](src/GoogleCloudDataproc/Models/AccessSessionSparkApplicationNativeSqlQueryResponse.cs)</code>

**OnError**: <code>[ApiException](src/GoogleCloudDataproc/Core/Exceptions/ApiException.cs)&lt;[DataprocProjectsLocationsSessionsSparkApplicationsAccessNativeSqlQueryError](src/GoogleCloudDataproc/Errors/DataprocProjectsLocationsSessionsSparkApplicationsAccessNativeSqlQueryError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;AccessSessionSparkApplicationSqlSparkPlanGraphResponse&gt; DataprocProjectsLocationsSessionsSparkApplicationsAccessSqlPlan(DataprocProjectsLocationsSessionsSparkApplicationsAccessSqlPlanRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Obtain Spark Plan Graph for a Spark Application SQL execution. Limits the number of clusters returned as part of the graph to 10000.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.DataprocProjectsLocationsSessionsSparkApplicationsAccessSqlPlan(
        new DataprocProjectsLocationsSessionsSparkApplicationsAccessSqlPlanRequest
        {
            ProjectsId = "some example string",
            LocationsId = "some example string",
            SessionsId = "some example string",
            SparkApplicationsId = "some example string",
        });
    // TODO: Handle 'response' of type AccessSessionSparkApplicationSqlSparkPlanGraphResponse
}
catch (ApiException<DataprocProjectsLocationsSessionsSparkApplicationsAccessSqlPlanError> ex)
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

<code>[DataprocProjectsLocationsSessionsSparkApplicationsAccessSqlPlanRequest](src/GoogleCloudDataproc/Requests/DataprocProjectsLocationsSessionsSparkApplicationsAccessSqlPlanRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[AccessSessionSparkApplicationSqlSparkPlanGraphResponse](src/GoogleCloudDataproc/Models/AccessSessionSparkApplicationSqlSparkPlanGraphResponse.cs)</code>

**OnError**: <code>[ApiException](src/GoogleCloudDataproc/Core/Exceptions/ApiException.cs)&lt;[DataprocProjectsLocationsSessionsSparkApplicationsAccessSqlPlanError](src/GoogleCloudDataproc/Errors/DataprocProjectsLocationsSessionsSparkApplicationsAccessSqlPlanError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;AccessSessionSparkApplicationSqlQueryResponse&gt; DataprocProjectsLocationsSessionsSparkApplicationsAccessSqlQuery(DataprocProjectsLocationsSessionsSparkApplicationsAccessSqlQueryRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Obtain data corresponding to a particular SQL Query for a Spark Application.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.DataprocProjectsLocationsSessionsSparkApplicationsAccessSqlQuery(
        new DataprocProjectsLocationsSessionsSparkApplicationsAccessSqlQueryRequest
        {
            ProjectsId = "some example string",
            LocationsId = "some example string",
            SessionsId = "some example string",
            SparkApplicationsId = "some example string",
        });
    // TODO: Handle 'response' of type AccessSessionSparkApplicationSqlQueryResponse
}
catch (ApiException<DataprocProjectsLocationsSessionsSparkApplicationsAccessSqlQueryError> ex)
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

<code>[DataprocProjectsLocationsSessionsSparkApplicationsAccessSqlQueryRequest](src/GoogleCloudDataproc/Requests/DataprocProjectsLocationsSessionsSparkApplicationsAccessSqlQueryRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[AccessSessionSparkApplicationSqlQueryResponse](src/GoogleCloudDataproc/Models/AccessSessionSparkApplicationSqlQueryResponse.cs)</code>

**OnError**: <code>[ApiException](src/GoogleCloudDataproc/Core/Exceptions/ApiException.cs)&lt;[DataprocProjectsLocationsSessionsSparkApplicationsAccessSqlQueryError](src/GoogleCloudDataproc/Errors/DataprocProjectsLocationsSessionsSparkApplicationsAccessSqlQueryError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;AccessSessionSparkApplicationStageAttemptResponse&gt; DataprocProjectsLocationsSessionsSparkApplicationsAccessStageAttempt(DataprocProjectsLocationsSessionsSparkApplicationsAccessStageAttemptRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Obtain data corresponding to a spark stage attempt for a Spark Application.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.DataprocProjectsLocationsSessionsSparkApplicationsAccessStageAttempt(
        new DataprocProjectsLocationsSessionsSparkApplicationsAccessStageAttemptRequest
        {
            ProjectsId = "some example string",
            LocationsId = "some example string",
            SessionsId = "some example string",
            SparkApplicationsId = "some example string",
        });
    // TODO: Handle 'response' of type AccessSessionSparkApplicationStageAttemptResponse
}
catch (ApiException<DataprocProjectsLocationsSessionsSparkApplicationsAccessStageAttemptError> ex)
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

<code>[DataprocProjectsLocationsSessionsSparkApplicationsAccessStageAttemptRequest](src/GoogleCloudDataproc/Requests/DataprocProjectsLocationsSessionsSparkApplicationsAccessStageAttemptRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[AccessSessionSparkApplicationStageAttemptResponse](src/GoogleCloudDataproc/Models/AccessSessionSparkApplicationStageAttemptResponse.cs)</code>

**OnError**: <code>[ApiException](src/GoogleCloudDataproc/Core/Exceptions/ApiException.cs)&lt;[DataprocProjectsLocationsSessionsSparkApplicationsAccessStageAttemptError](src/GoogleCloudDataproc/Errors/DataprocProjectsLocationsSessionsSparkApplicationsAccessStageAttemptError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;AccessSessionSparkApplicationStageRddOperationGraphResponse&gt; DataprocProjectsLocationsSessionsSparkApplicationsAccessStageRddGraph(DataprocProjectsLocationsSessionsSparkApplicationsAccessStageRddGraphRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Obtain RDD operation graph for a Spark Application Stage. Limits the number of clusters returned as part of the graph to 10000.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.DataprocProjectsLocationsSessionsSparkApplicationsAccessStageRddGraph(
        new DataprocProjectsLocationsSessionsSparkApplicationsAccessStageRddGraphRequest
        {
            ProjectsId = "some example string",
            LocationsId = "some example string",
            SessionsId = "some example string",
            SparkApplicationsId = "some example string",
        });
    // TODO: Handle 'response' of type AccessSessionSparkApplicationStageRddOperationGraphResponse
}
catch (ApiException<DataprocProjectsLocationsSessionsSparkApplicationsAccessStageRddGraphError> ex)
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

<code>[DataprocProjectsLocationsSessionsSparkApplicationsAccessStageRddGraphRequest](src/GoogleCloudDataproc/Requests/DataprocProjectsLocationsSessionsSparkApplicationsAccessStageRddGraphRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[AccessSessionSparkApplicationStageRddOperationGraphResponse](src/GoogleCloudDataproc/Models/AccessSessionSparkApplicationStageRddOperationGraphResponse.cs)</code>

**OnError**: <code>[ApiException](src/GoogleCloudDataproc/Core/Exceptions/ApiException.cs)&lt;[DataprocProjectsLocationsSessionsSparkApplicationsAccessStageRddGraphError](src/GoogleCloudDataproc/Errors/DataprocProjectsLocationsSessionsSparkApplicationsAccessStageRddGraphError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;SearchSessionSparkApplicationsResponse&gt; DataprocProjectsLocationsSessionsSparkApplicationsSearch(DataprocProjectsLocationsSessionsSparkApplicationsSearchRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Obtain high level information and list of Spark Applications corresponding to a batch

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.DataprocProjectsLocationsSessionsSparkApplicationsSearch(
        new DataprocProjectsLocationsSessionsSparkApplicationsSearchRequest
        {
            ProjectsId = "some example string",
            LocationsId = "some example string",
            SessionsId = "some example string",
        });
    // TODO: Handle 'response' of type SearchSessionSparkApplicationsResponse
}
catch (ApiException<DataprocProjectsLocationsSessionsSparkApplicationsSearchError> ex)
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

<code>[DataprocProjectsLocationsSessionsSparkApplicationsSearchRequest](src/GoogleCloudDataproc/Requests/DataprocProjectsLocationsSessionsSparkApplicationsSearchRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SearchSessionSparkApplicationsResponse](src/GoogleCloudDataproc/Models/SearchSessionSparkApplicationsResponse.cs)</code>

**OnError**: <code>[ApiException](src/GoogleCloudDataproc/Core/Exceptions/ApiException.cs)&lt;[DataprocProjectsLocationsSessionsSparkApplicationsSearchError](src/GoogleCloudDataproc/Errors/DataprocProjectsLocationsSessionsSparkApplicationsSearchError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;SearchSessionSparkApplicationExecutorStageSummaryResponse&gt; DataprocProjectsLocationsSessionsSparkApplicationsSearchExecutorStageSummary(DataprocProjectsLocationsSessionsSparkApplicationsSearchExecutorStageSummaryRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Obtain executor summary with respect to a spark stage attempt.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.DataprocProjectsLocationsSessionsSparkApplicationsSearchExecutorStageSummary(
        new DataprocProjectsLocationsSessionsSparkApplicationsSearchExecutorStageSummaryRequest
        {
            ProjectsId = "some example string",
            LocationsId = "some example string",
            SessionsId = "some example string",
            SparkApplicationsId = "some example string",
        });
    // TODO: Handle 'response' of type SearchSessionSparkApplicationExecutorStageSummaryResponse
}
catch (ApiException<DataprocProjectsLocationsSessionsSparkApplicationsSearchExecutorStageSummaryError> ex)
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

<code>[DataprocProjectsLocationsSessionsSparkApplicationsSearchExecutorStageSummaryRequest](src/GoogleCloudDataproc/Requests/DataprocProjectsLocationsSessionsSparkApplicationsSearchExecutorStageSummaryRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SearchSessionSparkApplicationExecutorStageSummaryResponse](src/GoogleCloudDataproc/Models/SearchSessionSparkApplicationExecutorStageSummaryResponse.cs)</code>

**OnError**: <code>[ApiException](src/GoogleCloudDataproc/Core/Exceptions/ApiException.cs)&lt;[DataprocProjectsLocationsSessionsSparkApplicationsSearchExecutorStageSummaryError](src/GoogleCloudDataproc/Errors/DataprocProjectsLocationsSessionsSparkApplicationsSearchExecutorStageSummaryError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;SearchSessionSparkApplicationExecutorsResponse&gt; DataprocProjectsLocationsSessionsSparkApplicationsSearchExecutors(DataprocProjectsLocationsSessionsSparkApplicationsSearchExecutorsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Obtain data corresponding to executors for a Spark Application.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.DataprocProjectsLocationsSessionsSparkApplicationsSearchExecutors(
        new DataprocProjectsLocationsSessionsSparkApplicationsSearchExecutorsRequest
        {
            ProjectsId = "some example string",
            LocationsId = "some example string",
            SessionsId = "some example string",
            SparkApplicationsId = "some example string",
        });
    // TODO: Handle 'response' of type SearchSessionSparkApplicationExecutorsResponse
}
catch (ApiException<DataprocProjectsLocationsSessionsSparkApplicationsSearchExecutorsError> ex)
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

<code>[DataprocProjectsLocationsSessionsSparkApplicationsSearchExecutorsRequest](src/GoogleCloudDataproc/Requests/DataprocProjectsLocationsSessionsSparkApplicationsSearchExecutorsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SearchSessionSparkApplicationExecutorsResponse](src/GoogleCloudDataproc/Models/SearchSessionSparkApplicationExecutorsResponse.cs)</code>

**OnError**: <code>[ApiException](src/GoogleCloudDataproc/Core/Exceptions/ApiException.cs)&lt;[DataprocProjectsLocationsSessionsSparkApplicationsSearchExecutorsError](src/GoogleCloudDataproc/Errors/DataprocProjectsLocationsSessionsSparkApplicationsSearchExecutorsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;SearchSessionSparkApplicationJobsResponse&gt; DataprocProjectsLocationsSessionsSparkApplicationsSearchJobs(DataprocProjectsLocationsSessionsSparkApplicationsSearchJobsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Obtain list of spark jobs corresponding to a Spark Application.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.DataprocProjectsLocationsSessionsSparkApplicationsSearchJobs(
        new DataprocProjectsLocationsSessionsSparkApplicationsSearchJobsRequest
        {
            ProjectsId = "some example string",
            LocationsId = "some example string",
            SessionsId = "some example string",
            SparkApplicationsId = "some example string",
        });
    // TODO: Handle 'response' of type SearchSessionSparkApplicationJobsResponse
}
catch (ApiException<DataprocProjectsLocationsSessionsSparkApplicationsSearchJobsError> ex)
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

<code>[DataprocProjectsLocationsSessionsSparkApplicationsSearchJobsRequest](src/GoogleCloudDataproc/Requests/DataprocProjectsLocationsSessionsSparkApplicationsSearchJobsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SearchSessionSparkApplicationJobsResponse](src/GoogleCloudDataproc/Models/SearchSessionSparkApplicationJobsResponse.cs)</code>

**OnError**: <code>[ApiException](src/GoogleCloudDataproc/Core/Exceptions/ApiException.cs)&lt;[DataprocProjectsLocationsSessionsSparkApplicationsSearchJobsError](src/GoogleCloudDataproc/Errors/DataprocProjectsLocationsSessionsSparkApplicationsSearchJobsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;SearchSessionSparkApplicationNativeSqlQueriesResponse&gt; DataprocProjectsLocationsSessionsSparkApplicationsSearchNativeSqlQueries(DataprocProjectsLocationsSessionsSparkApplicationsSearchNativeSqlQueriesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Obtain data corresponding to Native SQL Queries for a Spark Application.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.DataprocProjectsLocationsSessionsSparkApplicationsSearchNativeSqlQueries(
        new DataprocProjectsLocationsSessionsSparkApplicationsSearchNativeSqlQueriesRequest
        {
            ProjectsId = "some example string",
            LocationsId = "some example string",
            SessionsId = "some example string",
            SparkApplicationsId = "some example string",
        });
    // TODO: Handle 'response' of type SearchSessionSparkApplicationNativeSqlQueriesResponse
}
catch (ApiException<DataprocProjectsLocationsSessionsSparkApplicationsSearchNativeSqlQueriesError> ex)
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

<code>[DataprocProjectsLocationsSessionsSparkApplicationsSearchNativeSqlQueriesRequest](src/GoogleCloudDataproc/Requests/DataprocProjectsLocationsSessionsSparkApplicationsSearchNativeSqlQueriesRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SearchSessionSparkApplicationNativeSqlQueriesResponse](src/GoogleCloudDataproc/Models/SearchSessionSparkApplicationNativeSqlQueriesResponse.cs)</code>

**OnError**: <code>[ApiException](src/GoogleCloudDataproc/Core/Exceptions/ApiException.cs)&lt;[DataprocProjectsLocationsSessionsSparkApplicationsSearchNativeSqlQueriesError](src/GoogleCloudDataproc/Errors/DataprocProjectsLocationsSessionsSparkApplicationsSearchNativeSqlQueriesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;SearchSessionSparkApplicationSqlQueriesResponse&gt; DataprocProjectsLocationsSessionsSparkApplicationsSearchSqlQueries(DataprocProjectsLocationsSessionsSparkApplicationsSearchSqlQueriesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Obtain data corresponding to SQL Queries for a Spark Application.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.DataprocProjectsLocationsSessionsSparkApplicationsSearchSqlQueries(
        new DataprocProjectsLocationsSessionsSparkApplicationsSearchSqlQueriesRequest
        {
            ProjectsId = "some example string",
            LocationsId = "some example string",
            SessionsId = "some example string",
            SparkApplicationsId = "some example string",
        });
    // TODO: Handle 'response' of type SearchSessionSparkApplicationSqlQueriesResponse
}
catch (ApiException<DataprocProjectsLocationsSessionsSparkApplicationsSearchSqlQueriesError> ex)
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

<code>[DataprocProjectsLocationsSessionsSparkApplicationsSearchSqlQueriesRequest](src/GoogleCloudDataproc/Requests/DataprocProjectsLocationsSessionsSparkApplicationsSearchSqlQueriesRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SearchSessionSparkApplicationSqlQueriesResponse](src/GoogleCloudDataproc/Models/SearchSessionSparkApplicationSqlQueriesResponse.cs)</code>

**OnError**: <code>[ApiException](src/GoogleCloudDataproc/Core/Exceptions/ApiException.cs)&lt;[DataprocProjectsLocationsSessionsSparkApplicationsSearchSqlQueriesError](src/GoogleCloudDataproc/Errors/DataprocProjectsLocationsSessionsSparkApplicationsSearchSqlQueriesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;SearchSessionSparkApplicationStageAttemptTasksResponse&gt; DataprocProjectsLocationsSessionsSparkApplicationsSearchStageAttemptTasks(DataprocProjectsLocationsSessionsSparkApplicationsSearchStageAttemptTasksRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Obtain data corresponding to tasks for a spark stage attempt for a Spark Application.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.DataprocProjectsLocationsSessionsSparkApplicationsSearchStageAttemptTasks(
        new DataprocProjectsLocationsSessionsSparkApplicationsSearchStageAttemptTasksRequest
        {
            ProjectsId = "some example string",
            LocationsId = "some example string",
            SessionsId = "some example string",
            SparkApplicationsId = "some example string",
        });
    // TODO: Handle 'response' of type SearchSessionSparkApplicationStageAttemptTasksResponse
}
catch (ApiException<DataprocProjectsLocationsSessionsSparkApplicationsSearchStageAttemptTasksError> ex)
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

<code>[DataprocProjectsLocationsSessionsSparkApplicationsSearchStageAttemptTasksRequest](src/GoogleCloudDataproc/Requests/DataprocProjectsLocationsSessionsSparkApplicationsSearchStageAttemptTasksRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SearchSessionSparkApplicationStageAttemptTasksResponse](src/GoogleCloudDataproc/Models/SearchSessionSparkApplicationStageAttemptTasksResponse.cs)</code>

**OnError**: <code>[ApiException](src/GoogleCloudDataproc/Core/Exceptions/ApiException.cs)&lt;[DataprocProjectsLocationsSessionsSparkApplicationsSearchStageAttemptTasksError](src/GoogleCloudDataproc/Errors/DataprocProjectsLocationsSessionsSparkApplicationsSearchStageAttemptTasksError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;SearchSessionSparkApplicationStageAttemptsResponse&gt; DataprocProjectsLocationsSessionsSparkApplicationsSearchStageAttempts(DataprocProjectsLocationsSessionsSparkApplicationsSearchStageAttemptsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Obtain data corresponding to a spark stage attempts for a Spark Application.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.DataprocProjectsLocationsSessionsSparkApplicationsSearchStageAttempts(
        new DataprocProjectsLocationsSessionsSparkApplicationsSearchStageAttemptsRequest
        {
            ProjectsId = "some example string",
            LocationsId = "some example string",
            SessionsId = "some example string",
            SparkApplicationsId = "some example string",
        });
    // TODO: Handle 'response' of type SearchSessionSparkApplicationStageAttemptsResponse
}
catch (ApiException<DataprocProjectsLocationsSessionsSparkApplicationsSearchStageAttemptsError> ex)
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

<code>[DataprocProjectsLocationsSessionsSparkApplicationsSearchStageAttemptsRequest](src/GoogleCloudDataproc/Requests/DataprocProjectsLocationsSessionsSparkApplicationsSearchStageAttemptsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SearchSessionSparkApplicationStageAttemptsResponse](src/GoogleCloudDataproc/Models/SearchSessionSparkApplicationStageAttemptsResponse.cs)</code>

**OnError**: <code>[ApiException](src/GoogleCloudDataproc/Core/Exceptions/ApiException.cs)&lt;[DataprocProjectsLocationsSessionsSparkApplicationsSearchStageAttemptsError](src/GoogleCloudDataproc/Errors/DataprocProjectsLocationsSessionsSparkApplicationsSearchStageAttemptsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;SearchSessionSparkApplicationStagesResponse&gt; DataprocProjectsLocationsSessionsSparkApplicationsSearchStages(DataprocProjectsLocationsSessionsSparkApplicationsSearchStagesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Obtain data corresponding to stages for a Spark Application.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.DataprocProjectsLocationsSessionsSparkApplicationsSearchStages(
        new DataprocProjectsLocationsSessionsSparkApplicationsSearchStagesRequest
        {
            ProjectsId = "some example string",
            LocationsId = "some example string",
            SessionsId = "some example string",
            SparkApplicationsId = "some example string",
        });
    // TODO: Handle 'response' of type SearchSessionSparkApplicationStagesResponse
}
catch (ApiException<DataprocProjectsLocationsSessionsSparkApplicationsSearchStagesError> ex)
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

<code>[DataprocProjectsLocationsSessionsSparkApplicationsSearchStagesRequest](src/GoogleCloudDataproc/Requests/DataprocProjectsLocationsSessionsSparkApplicationsSearchStagesRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SearchSessionSparkApplicationStagesResponse](src/GoogleCloudDataproc/Models/SearchSessionSparkApplicationStagesResponse.cs)</code>

**OnError**: <code>[ApiException](src/GoogleCloudDataproc/Core/Exceptions/ApiException.cs)&lt;[DataprocProjectsLocationsSessionsSparkApplicationsSearchStagesError](src/GoogleCloudDataproc/Errors/DataprocProjectsLocationsSessionsSparkApplicationsSearchStagesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;SummarizeSessionSparkApplicationExecutorsResponse&gt; DataprocProjectsLocationsSessionsSparkApplicationsSummarizeExecutors(DataprocProjectsLocationsSessionsSparkApplicationsSummarizeExecutorsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Obtain summary of Executor Summary for a Spark Application

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.DataprocProjectsLocationsSessionsSparkApplicationsSummarizeExecutors(
        new DataprocProjectsLocationsSessionsSparkApplicationsSummarizeExecutorsRequest
        {
            ProjectsId = "some example string",
            LocationsId = "some example string",
            SessionsId = "some example string",
            SparkApplicationsId = "some example string",
        });
    // TODO: Handle 'response' of type SummarizeSessionSparkApplicationExecutorsResponse
}
catch (ApiException<DataprocProjectsLocationsSessionsSparkApplicationsSummarizeExecutorsError> ex)
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

<code>[DataprocProjectsLocationsSessionsSparkApplicationsSummarizeExecutorsRequest](src/GoogleCloudDataproc/Requests/DataprocProjectsLocationsSessionsSparkApplicationsSummarizeExecutorsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SummarizeSessionSparkApplicationExecutorsResponse](src/GoogleCloudDataproc/Models/SummarizeSessionSparkApplicationExecutorsResponse.cs)</code>

**OnError**: <code>[ApiException](src/GoogleCloudDataproc/Core/Exceptions/ApiException.cs)&lt;[DataprocProjectsLocationsSessionsSparkApplicationsSummarizeExecutorsError](src/GoogleCloudDataproc/Errors/DataprocProjectsLocationsSessionsSparkApplicationsSummarizeExecutorsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;SummarizeSessionSparkApplicationJobsResponse&gt; DataprocProjectsLocationsSessionsSparkApplicationsSummarizeJobs(DataprocProjectsLocationsSessionsSparkApplicationsSummarizeJobsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Obtain summary of Jobs for a Spark Application

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.DataprocProjectsLocationsSessionsSparkApplicationsSummarizeJobs(
        new DataprocProjectsLocationsSessionsSparkApplicationsSummarizeJobsRequest
        {
            ProjectsId = "some example string",
            LocationsId = "some example string",
            SessionsId = "some example string",
            SparkApplicationsId = "some example string",
        });
    // TODO: Handle 'response' of type SummarizeSessionSparkApplicationJobsResponse
}
catch (ApiException<DataprocProjectsLocationsSessionsSparkApplicationsSummarizeJobsError> ex)
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

<code>[DataprocProjectsLocationsSessionsSparkApplicationsSummarizeJobsRequest](src/GoogleCloudDataproc/Requests/DataprocProjectsLocationsSessionsSparkApplicationsSummarizeJobsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SummarizeSessionSparkApplicationJobsResponse](src/GoogleCloudDataproc/Models/SummarizeSessionSparkApplicationJobsResponse.cs)</code>

**OnError**: <code>[ApiException](src/GoogleCloudDataproc/Core/Exceptions/ApiException.cs)&lt;[DataprocProjectsLocationsSessionsSparkApplicationsSummarizeJobsError](src/GoogleCloudDataproc/Errors/DataprocProjectsLocationsSessionsSparkApplicationsSummarizeJobsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;SummarizeSessionSparkApplicationStageAttemptTasksResponse&gt; DataprocProjectsLocationsSessionsSparkApplicationsSummarizeStageAttemptTasks(DataprocProjectsLocationsSessionsSparkApplicationsSummarizeStageAttemptTasksRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Obtain summary of Tasks for a Spark Application Stage Attempt

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.DataprocProjectsLocationsSessionsSparkApplicationsSummarizeStageAttemptTasks(
        new DataprocProjectsLocationsSessionsSparkApplicationsSummarizeStageAttemptTasksRequest
        {
            ProjectsId = "some example string",
            LocationsId = "some example string",
            SessionsId = "some example string",
            SparkApplicationsId = "some example string",
        });
    // TODO: Handle 'response' of type SummarizeSessionSparkApplicationStageAttemptTasksResponse
}
catch (ApiException<DataprocProjectsLocationsSessionsSparkApplicationsSummarizeStageAttemptTasksError> ex)
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

<code>[DataprocProjectsLocationsSessionsSparkApplicationsSummarizeStageAttemptTasksRequest](src/GoogleCloudDataproc/Requests/DataprocProjectsLocationsSessionsSparkApplicationsSummarizeStageAttemptTasksRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SummarizeSessionSparkApplicationStageAttemptTasksResponse](src/GoogleCloudDataproc/Models/SummarizeSessionSparkApplicationStageAttemptTasksResponse.cs)</code>

**OnError**: <code>[ApiException](src/GoogleCloudDataproc/Core/Exceptions/ApiException.cs)&lt;[DataprocProjectsLocationsSessionsSparkApplicationsSummarizeStageAttemptTasksError](src/GoogleCloudDataproc/Errors/DataprocProjectsLocationsSessionsSparkApplicationsSummarizeStageAttemptTasksError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;SummarizeSessionSparkApplicationStagesResponse&gt; DataprocProjectsLocationsSessionsSparkApplicationsSummarizeStages(DataprocProjectsLocationsSessionsSparkApplicationsSummarizeStagesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Obtain summary of Stages for a Spark Application

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.DataprocProjectsLocationsSessionsSparkApplicationsSummarizeStages(
        new DataprocProjectsLocationsSessionsSparkApplicationsSummarizeStagesRequest
        {
            ProjectsId = "some example string",
            LocationsId = "some example string",
            SessionsId = "some example string",
            SparkApplicationsId = "some example string",
        });
    // TODO: Handle 'response' of type SummarizeSessionSparkApplicationStagesResponse
}
catch (ApiException<DataprocProjectsLocationsSessionsSparkApplicationsSummarizeStagesError> ex)
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

<code>[DataprocProjectsLocationsSessionsSparkApplicationsSummarizeStagesRequest](src/GoogleCloudDataproc/Requests/DataprocProjectsLocationsSessionsSparkApplicationsSummarizeStagesRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SummarizeSessionSparkApplicationStagesResponse](src/GoogleCloudDataproc/Models/SummarizeSessionSparkApplicationStagesResponse.cs)</code>

**OnError**: <code>[ApiException](src/GoogleCloudDataproc/Core/Exceptions/ApiException.cs)&lt;[DataprocProjectsLocationsSessionsSparkApplicationsSummarizeStagesError](src/GoogleCloudDataproc/Errors/DataprocProjectsLocationsSessionsSparkApplicationsSummarizeStagesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;object&gt; DataprocProjectsLocationsSessionsSparkApplicationsWrite(DataprocProjectsLocationsSessionsSparkApplicationsWriteRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Write wrapper objects from dataplane to spanner

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.DataprocProjectsLocationsSessionsSparkApplicationsWrite(
        new DataprocProjectsLocationsSessionsSparkApplicationsWriteRequest
        {
            ProjectsId = "some example string",
            LocationsId = "some example string",
            SessionsId = "some example string",
            SparkApplicationsId = "some example string",
            Body = new WriteSessionSparkApplicationContextRequest(),
        });
    // TODO: Handle 'response' of type object
}
catch (ApiException<DataprocProjectsLocationsSessionsSparkApplicationsWriteError> ex)
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

<code>[DataprocProjectsLocationsSessionsSparkApplicationsWriteRequest](src/GoogleCloudDataproc/Requests/DataprocProjectsLocationsSessionsSparkApplicationsWriteRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>object</code>

**OnError**: <code>[ApiException](src/GoogleCloudDataproc/Core/Exceptions/ApiException.cs)&lt;[DataprocProjectsLocationsSessionsSparkApplicationsWriteError](src/GoogleCloudDataproc/Errors/DataprocProjectsLocationsSessionsSparkApplicationsWriteError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Operation&gt; DataprocProjectsLocationsSessionsTerminate(DataprocProjectsLocationsSessionsTerminateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Terminates the interactive session.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.DataprocProjectsLocationsSessionsTerminate(
        new DataprocProjectsLocationsSessionsTerminateRequest
        {
            ProjectsId = "some example string",
            LocationsId = "some example string",
            SessionsId = "some example string",
            Body = new TerminateSessionRequest(),
        });
    // TODO: Handle 'response' of type Operation
}
catch (ApiException<DataprocProjectsLocationsSessionsTerminateError> ex)
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

<code>[DataprocProjectsLocationsSessionsTerminateRequest](src/GoogleCloudDataproc/Requests/DataprocProjectsLocationsSessionsTerminateRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Operation](src/GoogleCloudDataproc/Models/Operation.cs)</code>

**OnError**: <code>[ApiException](src/GoogleCloudDataproc/Core/Exceptions/ApiException.cs)&lt;[DataprocProjectsLocationsSessionsTerminateError](src/GoogleCloudDataproc/Errors/DataprocProjectsLocationsSessionsTerminateError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;WorkflowTemplate&gt; DataprocProjectsLocationsWorkflowTemplatesCreate(DataprocProjectsLocationsWorkflowTemplatesCreateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates new workflow template.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.DataprocProjectsLocationsWorkflowTemplatesCreate(
        new DataprocProjectsLocationsWorkflowTemplatesCreateRequest
        {
            ProjectsId = "some example string",
            LocationsId = "some example string",
            Body = new WorkflowTemplate(),
        });
    // TODO: Handle 'response' of type WorkflowTemplate
}
catch (ApiException<DataprocProjectsLocationsWorkflowTemplatesCreateError> ex)
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

<code>[DataprocProjectsLocationsWorkflowTemplatesCreateRequest](src/GoogleCloudDataproc/Requests/DataprocProjectsLocationsWorkflowTemplatesCreateRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[WorkflowTemplate](src/GoogleCloudDataproc/Models/WorkflowTemplate.cs)</code>

**OnError**: <code>[ApiException](src/GoogleCloudDataproc/Core/Exceptions/ApiException.cs)&lt;[DataprocProjectsLocationsWorkflowTemplatesCreateError](src/GoogleCloudDataproc/Errors/DataprocProjectsLocationsWorkflowTemplatesCreateError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;object&gt; DataprocProjectsLocationsWorkflowTemplatesDelete(DataprocProjectsLocationsWorkflowTemplatesDeleteRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a workflow template. It does not cancel in-progress workflows.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.DataprocProjectsLocationsWorkflowTemplatesDelete(
        new DataprocProjectsLocationsWorkflowTemplatesDeleteRequest
        {
            ProjectsId = "some example string",
            LocationsId = "some example string",
            WorkflowTemplatesId = "some example string",
        });
    // TODO: Handle 'response' of type object
}
catch (ApiException<DataprocProjectsLocationsWorkflowTemplatesDeleteError> ex)
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

<code>[DataprocProjectsLocationsWorkflowTemplatesDeleteRequest](src/GoogleCloudDataproc/Requests/DataprocProjectsLocationsWorkflowTemplatesDeleteRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>object</code>

**OnError**: <code>[ApiException](src/GoogleCloudDataproc/Core/Exceptions/ApiException.cs)&lt;[DataprocProjectsLocationsWorkflowTemplatesDeleteError](src/GoogleCloudDataproc/Errors/DataprocProjectsLocationsWorkflowTemplatesDeleteError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;WorkflowTemplate&gt; DataprocProjectsLocationsWorkflowTemplatesGet(DataprocProjectsLocationsWorkflowTemplatesGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves the latest workflow template.Can retrieve previously instantiated template by specifying optional version parameter.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.DataprocProjectsLocationsWorkflowTemplatesGet(
        new DataprocProjectsLocationsWorkflowTemplatesGetRequest
        {
            ProjectsId = "some example string",
            LocationsId = "some example string",
            WorkflowTemplatesId = "some example string",
        });
    // TODO: Handle 'response' of type WorkflowTemplate
}
catch (ApiException<DataprocProjectsLocationsWorkflowTemplatesGetError> ex)
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

<code>[DataprocProjectsLocationsWorkflowTemplatesGetRequest](src/GoogleCloudDataproc/Requests/DataprocProjectsLocationsWorkflowTemplatesGetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[WorkflowTemplate](src/GoogleCloudDataproc/Models/WorkflowTemplate.cs)</code>

**OnError**: <code>[ApiException](src/GoogleCloudDataproc/Core/Exceptions/ApiException.cs)&lt;[DataprocProjectsLocationsWorkflowTemplatesGetError](src/GoogleCloudDataproc/Errors/DataprocProjectsLocationsWorkflowTemplatesGetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Policy&gt; DataprocProjectsLocationsWorkflowTemplatesGetIamPolicy(DataprocProjectsLocationsWorkflowTemplatesGetIamPolicyRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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
    var response = await client.DataprocProjectsLocationsWorkflowTemplatesGetIamPolicy(
        new DataprocProjectsLocationsWorkflowTemplatesGetIamPolicyRequest
        {
            ProjectsId = "some example string",
            LocationsId = "some example string",
            WorkflowTemplatesId = "some example string",
            Body = new GetIamPolicyRequest(),
        });
    // TODO: Handle 'response' of type Policy
}
catch (ApiException<DataprocProjectsLocationsWorkflowTemplatesGetIamPolicyError> ex)
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

<code>[DataprocProjectsLocationsWorkflowTemplatesGetIamPolicyRequest](src/GoogleCloudDataproc/Requests/DataprocProjectsLocationsWorkflowTemplatesGetIamPolicyRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Policy](src/GoogleCloudDataproc/Models/Policy.cs)</code>

**OnError**: <code>[ApiException](src/GoogleCloudDataproc/Core/Exceptions/ApiException.cs)&lt;[DataprocProjectsLocationsWorkflowTemplatesGetIamPolicyError](src/GoogleCloudDataproc/Errors/DataprocProjectsLocationsWorkflowTemplatesGetIamPolicyError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Operation&gt; DataprocProjectsLocationsWorkflowTemplatesInstantiate(DataprocProjectsLocationsWorkflowTemplatesInstantiateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Instantiates a template and begins execution.The returned Operation can be used to track execution of workflow by polling operations.get. The Operation will complete when entire workflow is finished.The running workflow can be aborted via operations.cancel. This will cause any inflight jobs to be cancelled and workflow-owned clusters to be deleted.The Operation.metadata will be WorkflowMetadata (https://cloud.google.com/dataproc/docs/reference/rpc/google.cloud.dataproc.v1#workflowmetadata). Also see Using WorkflowMetadata (https://cloud.google.com/dataproc/docs/concepts/workflows/debugging#using_workflowmetadata).On successful completion, Operation.response will be Empty.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.DataprocProjectsLocationsWorkflowTemplatesInstantiate(
        new DataprocProjectsLocationsWorkflowTemplatesInstantiateRequest
        {
            ProjectsId = "some example string",
            LocationsId = "some example string",
            WorkflowTemplatesId = "some example string",
            Body = new InstantiateWorkflowTemplateRequest(),
        });
    // TODO: Handle 'response' of type Operation
}
catch (ApiException<DataprocProjectsLocationsWorkflowTemplatesInstantiateError> ex)
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

<code>[DataprocProjectsLocationsWorkflowTemplatesInstantiateRequest](src/GoogleCloudDataproc/Requests/DataprocProjectsLocationsWorkflowTemplatesInstantiateRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Operation](src/GoogleCloudDataproc/Models/Operation.cs)</code>

**OnError**: <code>[ApiException](src/GoogleCloudDataproc/Core/Exceptions/ApiException.cs)&lt;[DataprocProjectsLocationsWorkflowTemplatesInstantiateError](src/GoogleCloudDataproc/Errors/DataprocProjectsLocationsWorkflowTemplatesInstantiateError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Operation&gt; DataprocProjectsLocationsWorkflowTemplatesInstantiateInline(DataprocProjectsLocationsWorkflowTemplatesInstantiateInlineRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Instantiates a template and begins execution.This method is equivalent to executing the sequence CreateWorkflowTemplate, InstantiateWorkflowTemplate, DeleteWorkflowTemplate.The returned Operation can be used to track execution of workflow by polling operations.get. The Operation will complete when entire workflow is finished.The running workflow can be aborted via operations.cancel. This will cause any inflight jobs to be cancelled and workflow-owned clusters to be deleted.The Operation.metadata will be WorkflowMetadata (https://cloud.google.com/dataproc/docs/reference/rpc/google.cloud.dataproc.v1#workflowmetadata). Also see Using WorkflowMetadata (https://cloud.google.com/dataproc/docs/concepts/workflows/debugging#using_workflowmetadata).On successful completion, Operation.response will be Empty.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.DataprocProjectsLocationsWorkflowTemplatesInstantiateInline(
        new DataprocProjectsLocationsWorkflowTemplatesInstantiateInlineRequest
        {
            ProjectsId = "some example string",
            LocationsId = "some example string",
            Body = new WorkflowTemplate(),
        });
    // TODO: Handle 'response' of type Operation
}
catch (ApiException<DataprocProjectsLocationsWorkflowTemplatesInstantiateInlineError> ex)
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

<code>[DataprocProjectsLocationsWorkflowTemplatesInstantiateInlineRequest](src/GoogleCloudDataproc/Requests/DataprocProjectsLocationsWorkflowTemplatesInstantiateInlineRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Operation](src/GoogleCloudDataproc/Models/Operation.cs)</code>

**OnError**: <code>[ApiException](src/GoogleCloudDataproc/Core/Exceptions/ApiException.cs)&lt;[DataprocProjectsLocationsWorkflowTemplatesInstantiateInlineError](src/GoogleCloudDataproc/Errors/DataprocProjectsLocationsWorkflowTemplatesInstantiateInlineError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ListWorkflowTemplatesResponse&gt; DataprocProjectsLocationsWorkflowTemplatesList(DataprocProjectsLocationsWorkflowTemplatesListRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists workflows that match the specified filter in the request.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.DataprocProjectsLocationsWorkflowTemplatesList(
        new DataprocProjectsLocationsWorkflowTemplatesListRequest
        {
            ProjectsId = "some example string",
            LocationsId = "some example string",
        });
    // TODO: Handle 'response' of type ListWorkflowTemplatesResponse
}
catch (ApiException<DataprocProjectsLocationsWorkflowTemplatesListError> ex)
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

<code>[DataprocProjectsLocationsWorkflowTemplatesListRequest](src/GoogleCloudDataproc/Requests/DataprocProjectsLocationsWorkflowTemplatesListRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ListWorkflowTemplatesResponse](src/GoogleCloudDataproc/Models/ListWorkflowTemplatesResponse.cs)</code>

**OnError**: <code>[ApiException](src/GoogleCloudDataproc/Core/Exceptions/ApiException.cs)&lt;[DataprocProjectsLocationsWorkflowTemplatesListError](src/GoogleCloudDataproc/Errors/DataprocProjectsLocationsWorkflowTemplatesListError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Policy&gt; DataprocProjectsLocationsWorkflowTemplatesSetIamPolicy(DataprocProjectsLocationsWorkflowTemplatesSetIamPolicyRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Sets the access control policy on the specified resource. Replaces any existing policy.Can return NOT_FOUND, INVALID_ARGUMENT, and PERMISSION_DENIED errors.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.DataprocProjectsLocationsWorkflowTemplatesSetIamPolicy(
        new DataprocProjectsLocationsWorkflowTemplatesSetIamPolicyRequest
        {
            ProjectsId = "some example string",
            LocationsId = "some example string",
            WorkflowTemplatesId = "some example string",
            Body = new SetIamPolicyRequest(),
        });
    // TODO: Handle 'response' of type Policy
}
catch (ApiException<DataprocProjectsLocationsWorkflowTemplatesSetIamPolicyError> ex)
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

<code>[DataprocProjectsLocationsWorkflowTemplatesSetIamPolicyRequest](src/GoogleCloudDataproc/Requests/DataprocProjectsLocationsWorkflowTemplatesSetIamPolicyRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Policy](src/GoogleCloudDataproc/Models/Policy.cs)</code>

**OnError**: <code>[ApiException](src/GoogleCloudDataproc/Core/Exceptions/ApiException.cs)&lt;[DataprocProjectsLocationsWorkflowTemplatesSetIamPolicyError](src/GoogleCloudDataproc/Errors/DataprocProjectsLocationsWorkflowTemplatesSetIamPolicyError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;TestIamPermissionsResponse&gt; DataprocProjectsLocationsWorkflowTemplatesTestIamPermissions(DataprocProjectsLocationsWorkflowTemplatesTestIamPermissionsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a NOT_FOUND error.Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.DataprocProjectsLocationsWorkflowTemplatesTestIamPermissions(
        new DataprocProjectsLocationsWorkflowTemplatesTestIamPermissionsRequest
        {
            ProjectsId = "some example string",
            LocationsId = "some example string",
            WorkflowTemplatesId = "some example string",
            Body = new TestIamPermissionsRequest(),
        });
    // TODO: Handle 'response' of type TestIamPermissionsResponse
}
catch (ApiException<DataprocProjectsLocationsWorkflowTemplatesTestIamPermissionsError> ex)
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

<code>[DataprocProjectsLocationsWorkflowTemplatesTestIamPermissionsRequest](src/GoogleCloudDataproc/Requests/DataprocProjectsLocationsWorkflowTemplatesTestIamPermissionsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[TestIamPermissionsResponse](src/GoogleCloudDataproc/Models/TestIamPermissionsResponse.cs)</code>

**OnError**: <code>[ApiException](src/GoogleCloudDataproc/Core/Exceptions/ApiException.cs)&lt;[DataprocProjectsLocationsWorkflowTemplatesTestIamPermissionsError](src/GoogleCloudDataproc/Errors/DataprocProjectsLocationsWorkflowTemplatesTestIamPermissionsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;WorkflowTemplate&gt; DataprocProjectsLocationsWorkflowTemplatesUpdate(DataprocProjectsLocationsWorkflowTemplatesUpdateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates (replaces) workflow template. The updated template must contain version that matches the current server version.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.DataprocProjectsLocationsWorkflowTemplatesUpdate(
        new DataprocProjectsLocationsWorkflowTemplatesUpdateRequest
        {
            ProjectsId = "some example string",
            LocationsId = "some example string",
            WorkflowTemplatesId = "some example string",
            Body = new WorkflowTemplate(),
        });
    // TODO: Handle 'response' of type WorkflowTemplate
}
catch (ApiException<DataprocProjectsLocationsWorkflowTemplatesUpdateError> ex)
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

<code>[DataprocProjectsLocationsWorkflowTemplatesUpdateRequest](src/GoogleCloudDataproc/Requests/DataprocProjectsLocationsWorkflowTemplatesUpdateRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[WorkflowTemplate](src/GoogleCloudDataproc/Models/WorkflowTemplate.cs)</code>

**OnError**: <code>[ApiException](src/GoogleCloudDataproc/Core/Exceptions/ApiException.cs)&lt;[DataprocProjectsLocationsWorkflowTemplatesUpdateError](src/GoogleCloudDataproc/Errors/DataprocProjectsLocationsWorkflowTemplatesUpdateError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;AutoscalingPolicy&gt; DataprocProjectsRegionsAutoscalingPoliciesCreate(DataprocProjectsRegionsAutoscalingPoliciesCreateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates new autoscaling policy.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.DataprocProjectsRegionsAutoscalingPoliciesCreate(
        new DataprocProjectsRegionsAutoscalingPoliciesCreateRequest
        {
            ProjectsId = "some example string",
            RegionsId = "some example string",
            Body = new AutoscalingPolicy(),
        });
    // TODO: Handle 'response' of type AutoscalingPolicy
}
catch (ApiException<DataprocProjectsRegionsAutoscalingPoliciesCreateError> ex)
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

<code>[DataprocProjectsRegionsAutoscalingPoliciesCreateRequest](src/GoogleCloudDataproc/Requests/DataprocProjectsRegionsAutoscalingPoliciesCreateRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[AutoscalingPolicy](src/GoogleCloudDataproc/Models/AutoscalingPolicy.cs)</code>

**OnError**: <code>[ApiException](src/GoogleCloudDataproc/Core/Exceptions/ApiException.cs)&lt;[DataprocProjectsRegionsAutoscalingPoliciesCreateError](src/GoogleCloudDataproc/Errors/DataprocProjectsRegionsAutoscalingPoliciesCreateError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;object&gt; DataprocProjectsRegionsAutoscalingPoliciesDelete(DataprocProjectsRegionsAutoscalingPoliciesDeleteRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes an autoscaling policy. It is an error to delete an autoscaling policy that is in use by one or more clusters.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.DataprocProjectsRegionsAutoscalingPoliciesDelete(
        new DataprocProjectsRegionsAutoscalingPoliciesDeleteRequest
        {
            ProjectsId = "some example string",
            RegionsId = "some example string",
            AutoscalingPoliciesId = "some example string",
        });
    // TODO: Handle 'response' of type object
}
catch (ApiException<DataprocProjectsRegionsAutoscalingPoliciesDeleteError> ex)
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

<code>[DataprocProjectsRegionsAutoscalingPoliciesDeleteRequest](src/GoogleCloudDataproc/Requests/DataprocProjectsRegionsAutoscalingPoliciesDeleteRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>object</code>

**OnError**: <code>[ApiException](src/GoogleCloudDataproc/Core/Exceptions/ApiException.cs)&lt;[DataprocProjectsRegionsAutoscalingPoliciesDeleteError](src/GoogleCloudDataproc/Errors/DataprocProjectsRegionsAutoscalingPoliciesDeleteError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;AutoscalingPolicy&gt; DataprocProjectsRegionsAutoscalingPoliciesGet(DataprocProjectsRegionsAutoscalingPoliciesGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves autoscaling policy.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.DataprocProjectsRegionsAutoscalingPoliciesGet(
        new DataprocProjectsRegionsAutoscalingPoliciesGetRequest
        {
            ProjectsId = "some example string",
            RegionsId = "some example string",
            AutoscalingPoliciesId = "some example string",
        });
    // TODO: Handle 'response' of type AutoscalingPolicy
}
catch (ApiException<DataprocProjectsRegionsAutoscalingPoliciesGetError> ex)
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

<code>[DataprocProjectsRegionsAutoscalingPoliciesGetRequest](src/GoogleCloudDataproc/Requests/DataprocProjectsRegionsAutoscalingPoliciesGetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[AutoscalingPolicy](src/GoogleCloudDataproc/Models/AutoscalingPolicy.cs)</code>

**OnError**: <code>[ApiException](src/GoogleCloudDataproc/Core/Exceptions/ApiException.cs)&lt;[DataprocProjectsRegionsAutoscalingPoliciesGetError](src/GoogleCloudDataproc/Errors/DataprocProjectsRegionsAutoscalingPoliciesGetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Policy&gt; DataprocProjectsRegionsAutoscalingPoliciesGetIamPolicy(DataprocProjectsRegionsAutoscalingPoliciesGetIamPolicyRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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
    var response = await client.DataprocProjectsRegionsAutoscalingPoliciesGetIamPolicy(
        new DataprocProjectsRegionsAutoscalingPoliciesGetIamPolicyRequest
        {
            ProjectsId = "some example string",
            RegionsId = "some example string",
            AutoscalingPoliciesId = "some example string",
            Body = new GetIamPolicyRequest(),
        });
    // TODO: Handle 'response' of type Policy
}
catch (ApiException<DataprocProjectsRegionsAutoscalingPoliciesGetIamPolicyError> ex)
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

<code>[DataprocProjectsRegionsAutoscalingPoliciesGetIamPolicyRequest](src/GoogleCloudDataproc/Requests/DataprocProjectsRegionsAutoscalingPoliciesGetIamPolicyRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Policy](src/GoogleCloudDataproc/Models/Policy.cs)</code>

**OnError**: <code>[ApiException](src/GoogleCloudDataproc/Core/Exceptions/ApiException.cs)&lt;[DataprocProjectsRegionsAutoscalingPoliciesGetIamPolicyError](src/GoogleCloudDataproc/Errors/DataprocProjectsRegionsAutoscalingPoliciesGetIamPolicyError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ListAutoscalingPoliciesResponse&gt; DataprocProjectsRegionsAutoscalingPoliciesList(DataprocProjectsRegionsAutoscalingPoliciesListRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists autoscaling policies in the project.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.DataprocProjectsRegionsAutoscalingPoliciesList(
        new DataprocProjectsRegionsAutoscalingPoliciesListRequest
        {
            ProjectsId = "some example string",
            RegionsId = "some example string",
        });
    // TODO: Handle 'response' of type ListAutoscalingPoliciesResponse
}
catch (ApiException<DataprocProjectsRegionsAutoscalingPoliciesListError> ex)
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

<code>[DataprocProjectsRegionsAutoscalingPoliciesListRequest](src/GoogleCloudDataproc/Requests/DataprocProjectsRegionsAutoscalingPoliciesListRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ListAutoscalingPoliciesResponse](src/GoogleCloudDataproc/Models/ListAutoscalingPoliciesResponse.cs)</code>

**OnError**: <code>[ApiException](src/GoogleCloudDataproc/Core/Exceptions/ApiException.cs)&lt;[DataprocProjectsRegionsAutoscalingPoliciesListError](src/GoogleCloudDataproc/Errors/DataprocProjectsRegionsAutoscalingPoliciesListError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Policy&gt; DataprocProjectsRegionsAutoscalingPoliciesSetIamPolicy(DataprocProjectsRegionsAutoscalingPoliciesSetIamPolicyRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Sets the access control policy on the specified resource. Replaces any existing policy.Can return NOT_FOUND, INVALID_ARGUMENT, and PERMISSION_DENIED errors.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.DataprocProjectsRegionsAutoscalingPoliciesSetIamPolicy(
        new DataprocProjectsRegionsAutoscalingPoliciesSetIamPolicyRequest
        {
            ProjectsId = "some example string",
            RegionsId = "some example string",
            AutoscalingPoliciesId = "some example string",
            Body = new SetIamPolicyRequest(),
        });
    // TODO: Handle 'response' of type Policy
}
catch (ApiException<DataprocProjectsRegionsAutoscalingPoliciesSetIamPolicyError> ex)
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

<code>[DataprocProjectsRegionsAutoscalingPoliciesSetIamPolicyRequest](src/GoogleCloudDataproc/Requests/DataprocProjectsRegionsAutoscalingPoliciesSetIamPolicyRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Policy](src/GoogleCloudDataproc/Models/Policy.cs)</code>

**OnError**: <code>[ApiException](src/GoogleCloudDataproc/Core/Exceptions/ApiException.cs)&lt;[DataprocProjectsRegionsAutoscalingPoliciesSetIamPolicyError](src/GoogleCloudDataproc/Errors/DataprocProjectsRegionsAutoscalingPoliciesSetIamPolicyError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;TestIamPermissionsResponse&gt; DataprocProjectsRegionsAutoscalingPoliciesTestIamPermissions(DataprocProjectsRegionsAutoscalingPoliciesTestIamPermissionsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a NOT_FOUND error.Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.DataprocProjectsRegionsAutoscalingPoliciesTestIamPermissions(
        new DataprocProjectsRegionsAutoscalingPoliciesTestIamPermissionsRequest
        {
            ProjectsId = "some example string",
            RegionsId = "some example string",
            AutoscalingPoliciesId = "some example string",
            Body = new TestIamPermissionsRequest(),
        });
    // TODO: Handle 'response' of type TestIamPermissionsResponse
}
catch (ApiException<DataprocProjectsRegionsAutoscalingPoliciesTestIamPermissionsError> ex)
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

<code>[DataprocProjectsRegionsAutoscalingPoliciesTestIamPermissionsRequest](src/GoogleCloudDataproc/Requests/DataprocProjectsRegionsAutoscalingPoliciesTestIamPermissionsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[TestIamPermissionsResponse](src/GoogleCloudDataproc/Models/TestIamPermissionsResponse.cs)</code>

**OnError**: <code>[ApiException](src/GoogleCloudDataproc/Core/Exceptions/ApiException.cs)&lt;[DataprocProjectsRegionsAutoscalingPoliciesTestIamPermissionsError](src/GoogleCloudDataproc/Errors/DataprocProjectsRegionsAutoscalingPoliciesTestIamPermissionsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;AutoscalingPolicy&gt; DataprocProjectsRegionsAutoscalingPoliciesUpdate(DataprocProjectsRegionsAutoscalingPoliciesUpdateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates (replaces) autoscaling policy.Disabled check for update_mask, because all updates will be full replacements.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.DataprocProjectsRegionsAutoscalingPoliciesUpdate(
        new DataprocProjectsRegionsAutoscalingPoliciesUpdateRequest
        {
            ProjectsId = "some example string",
            RegionsId = "some example string",
            AutoscalingPoliciesId = "some example string",
            Body = new AutoscalingPolicy(),
        });
    // TODO: Handle 'response' of type AutoscalingPolicy
}
catch (ApiException<DataprocProjectsRegionsAutoscalingPoliciesUpdateError> ex)
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

<code>[DataprocProjectsRegionsAutoscalingPoliciesUpdateRequest](src/GoogleCloudDataproc/Requests/DataprocProjectsRegionsAutoscalingPoliciesUpdateRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[AutoscalingPolicy](src/GoogleCloudDataproc/Models/AutoscalingPolicy.cs)</code>

**OnError**: <code>[ApiException](src/GoogleCloudDataproc/Core/Exceptions/ApiException.cs)&lt;[DataprocProjectsRegionsAutoscalingPoliciesUpdateError](src/GoogleCloudDataproc/Errors/DataprocProjectsRegionsAutoscalingPoliciesUpdateError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Operation&gt; DataprocProjectsRegionsClustersCreate(DataprocProjectsRegionsClustersCreateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a cluster in a project. The returned Operation.metadata will be ClusterOperationMetadata (https://cloud.google.com/dataproc/docs/reference/rpc/google.cloud.dataproc.v1#clusteroperationmetadata).

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.DataprocProjectsRegionsClustersCreate(new DataprocProjectsRegionsClustersCreateRequest
    {
        ProjectId = "some example string",
        Region = "some example string",
        Body = new Cluster(),
    });
    // TODO: Handle 'response' of type Operation
}
catch (ApiException<DataprocProjectsRegionsClustersCreateError> ex)
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

<code>[DataprocProjectsRegionsClustersCreateRequest](src/GoogleCloudDataproc/Requests/DataprocProjectsRegionsClustersCreateRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Operation](src/GoogleCloudDataproc/Models/Operation.cs)</code>

**OnError**: <code>[ApiException](src/GoogleCloudDataproc/Core/Exceptions/ApiException.cs)&lt;[DataprocProjectsRegionsClustersCreateError](src/GoogleCloudDataproc/Errors/DataprocProjectsRegionsClustersCreateError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Operation&gt; DataprocProjectsRegionsClustersDelete(DataprocProjectsRegionsClustersDeleteRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a cluster in a project. The returned Operation.metadata will be ClusterOperationMetadata (https://cloud.google.com/dataproc/docs/reference/rpc/google.cloud.dataproc.v1#clusteroperationmetadata).

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.DataprocProjectsRegionsClustersDelete(new DataprocProjectsRegionsClustersDeleteRequest
    {
        ProjectId = "some example string",
        Region = "some example string",
        ClusterName = "some example string",
    });
    // TODO: Handle 'response' of type Operation
}
catch (ApiException<DataprocProjectsRegionsClustersDeleteError> ex)
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

<code>[DataprocProjectsRegionsClustersDeleteRequest](src/GoogleCloudDataproc/Requests/DataprocProjectsRegionsClustersDeleteRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Operation](src/GoogleCloudDataproc/Models/Operation.cs)</code>

**OnError**: <code>[ApiException](src/GoogleCloudDataproc/Core/Exceptions/ApiException.cs)&lt;[DataprocProjectsRegionsClustersDeleteError](src/GoogleCloudDataproc/Errors/DataprocProjectsRegionsClustersDeleteError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Operation&gt; DataprocProjectsRegionsClustersDiagnose(DataprocProjectsRegionsClustersDiagnoseRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets cluster diagnostic information. The returned Operation.metadata will be ClusterOperationMetadata (https://cloud.google.com/dataproc/docs/reference/rpc/google.cloud.dataproc.v1#clusteroperationmetadata). After the operation completes, Operation.response contains DiagnoseClusterResults (https://cloud.google.com/dataproc/docs/reference/rpc/google.cloud.dataproc.v1#diagnoseclusterresults).

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.DataprocProjectsRegionsClustersDiagnose(
        new DataprocProjectsRegionsClustersDiagnoseRequest
        {
            ProjectId = "some example string",
            Region = "some example string",
            ClusterName = "some example string",
            Body = new DiagnoseClusterRequest(),
        });
    // TODO: Handle 'response' of type Operation
}
catch (ApiException<DataprocProjectsRegionsClustersDiagnoseError> ex)
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

<code>[DataprocProjectsRegionsClustersDiagnoseRequest](src/GoogleCloudDataproc/Requests/DataprocProjectsRegionsClustersDiagnoseRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Operation](src/GoogleCloudDataproc/Models/Operation.cs)</code>

**OnError**: <code>[ApiException](src/GoogleCloudDataproc/Core/Exceptions/ApiException.cs)&lt;[DataprocProjectsRegionsClustersDiagnoseError](src/GoogleCloudDataproc/Errors/DataprocProjectsRegionsClustersDiagnoseError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Cluster&gt; DataprocProjectsRegionsClustersGet(DataprocProjectsRegionsClustersGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets the resource representation for a cluster in a project.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.DataprocProjectsRegionsClustersGet(new DataprocProjectsRegionsClustersGetRequest
    {
        ProjectId = "some example string",
        Region = "some example string",
        ClusterName = "some example string",
    });
    // TODO: Handle 'response' of type Cluster
}
catch (ApiException<DataprocProjectsRegionsClustersGetError> ex)
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

<code>[DataprocProjectsRegionsClustersGetRequest](src/GoogleCloudDataproc/Requests/DataprocProjectsRegionsClustersGetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Cluster](src/GoogleCloudDataproc/Models/Cluster.cs)</code>

**OnError**: <code>[ApiException](src/GoogleCloudDataproc/Core/Exceptions/ApiException.cs)&lt;[DataprocProjectsRegionsClustersGetError](src/GoogleCloudDataproc/Errors/DataprocProjectsRegionsClustersGetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Policy&gt; DataprocProjectsRegionsClustersGetIamPolicy(DataprocProjectsRegionsClustersGetIamPolicyRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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
    var response = await client.DataprocProjectsRegionsClustersGetIamPolicy(
        new DataprocProjectsRegionsClustersGetIamPolicyRequest
        {
            ProjectsId = "some example string",
            RegionsId = "some example string",
            ClustersId = "some example string",
            Body = new GetIamPolicyRequest(),
        });
    // TODO: Handle 'response' of type Policy
}
catch (ApiException<DataprocProjectsRegionsClustersGetIamPolicyError> ex)
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

<code>[DataprocProjectsRegionsClustersGetIamPolicyRequest](src/GoogleCloudDataproc/Requests/DataprocProjectsRegionsClustersGetIamPolicyRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Policy](src/GoogleCloudDataproc/Models/Policy.cs)</code>

**OnError**: <code>[ApiException](src/GoogleCloudDataproc/Core/Exceptions/ApiException.cs)&lt;[DataprocProjectsRegionsClustersGetIamPolicyError](src/GoogleCloudDataproc/Errors/DataprocProjectsRegionsClustersGetIamPolicyError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Operation&gt; DataprocProjectsRegionsClustersInjectCredentials(DataprocProjectsRegionsClustersInjectCredentialsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Inject encrypted credentials into all of the VMs in a cluster.The target cluster must be a personal auth cluster assigned to the user who is issuing the RPC.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.DataprocProjectsRegionsClustersInjectCredentials(
        new DataprocProjectsRegionsClustersInjectCredentialsRequest
        {
            ProjectsId = "some example string",
            RegionsId = "some example string",
            ClustersId = "some example string",
            Body = new InjectCredentialsRequest(),
        });
    // TODO: Handle 'response' of type Operation
}
catch (ApiException<DataprocProjectsRegionsClustersInjectCredentialsError> ex)
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

<code>[DataprocProjectsRegionsClustersInjectCredentialsRequest](src/GoogleCloudDataproc/Requests/DataprocProjectsRegionsClustersInjectCredentialsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Operation](src/GoogleCloudDataproc/Models/Operation.cs)</code>

**OnError**: <code>[ApiException](src/GoogleCloudDataproc/Core/Exceptions/ApiException.cs)&lt;[DataprocProjectsRegionsClustersInjectCredentialsError](src/GoogleCloudDataproc/Errors/DataprocProjectsRegionsClustersInjectCredentialsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ListClustersResponse&gt; DataprocProjectsRegionsClustersList(DataprocProjectsRegionsClustersListRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists all regions/{region}/clusters in a project alphabetically.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.DataprocProjectsRegionsClustersList(new DataprocProjectsRegionsClustersListRequest
    {
        ProjectId = "some example string",
        Region = "some example string",
    });
    // TODO: Handle 'response' of type ListClustersResponse
}
catch (ApiException<DataprocProjectsRegionsClustersListError> ex)
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

<code>[DataprocProjectsRegionsClustersListRequest](src/GoogleCloudDataproc/Requests/DataprocProjectsRegionsClustersListRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ListClustersResponse](src/GoogleCloudDataproc/Models/ListClustersResponse.cs)</code>

**OnError**: <code>[ApiException](src/GoogleCloudDataproc/Core/Exceptions/ApiException.cs)&lt;[DataprocProjectsRegionsClustersListError](src/GoogleCloudDataproc/Errors/DataprocProjectsRegionsClustersListError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Operation&gt; DataprocProjectsRegionsClustersNodeGroupsCreate(DataprocProjectsRegionsClustersNodeGroupsCreateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a node group in a cluster. The returned Operation.metadata is NodeGroupOperationMetadata (https://cloud.google.com/dataproc/docs/reference/rpc/google.cloud.dataproc.v1#nodegroupoperationmetadata).

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.DataprocProjectsRegionsClustersNodeGroupsCreate(
        new DataprocProjectsRegionsClustersNodeGroupsCreateRequest
        {
            ProjectsId = "some example string",
            RegionsId = "some example string",
            ClustersId = "some example string",
            Body = new NodeGroup(),
        });
    // TODO: Handle 'response' of type Operation
}
catch (ApiException<DataprocProjectsRegionsClustersNodeGroupsCreateError> ex)
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

<code>[DataprocProjectsRegionsClustersNodeGroupsCreateRequest](src/GoogleCloudDataproc/Requests/DataprocProjectsRegionsClustersNodeGroupsCreateRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Operation](src/GoogleCloudDataproc/Models/Operation.cs)</code>

**OnError**: <code>[ApiException](src/GoogleCloudDataproc/Core/Exceptions/ApiException.cs)&lt;[DataprocProjectsRegionsClustersNodeGroupsCreateError](src/GoogleCloudDataproc/Errors/DataprocProjectsRegionsClustersNodeGroupsCreateError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;NodeGroup&gt; DataprocProjectsRegionsClustersNodeGroupsGet(DataprocProjectsRegionsClustersNodeGroupsGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets the resource representation for a node group in a cluster.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.DataprocProjectsRegionsClustersNodeGroupsGet(
        new DataprocProjectsRegionsClustersNodeGroupsGetRequest
        {
            ProjectsId = "some example string",
            RegionsId = "some example string",
            ClustersId = "some example string",
            NodeGroupsId = "some example string",
        });
    // TODO: Handle 'response' of type NodeGroup
}
catch (ApiException<DataprocProjectsRegionsClustersNodeGroupsGetError> ex)
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

<code>[DataprocProjectsRegionsClustersNodeGroupsGetRequest](src/GoogleCloudDataproc/Requests/DataprocProjectsRegionsClustersNodeGroupsGetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[NodeGroup](src/GoogleCloudDataproc/Models/NodeGroup.cs)</code>

**OnError**: <code>[ApiException](src/GoogleCloudDataproc/Core/Exceptions/ApiException.cs)&lt;[DataprocProjectsRegionsClustersNodeGroupsGetError](src/GoogleCloudDataproc/Errors/DataprocProjectsRegionsClustersNodeGroupsGetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Operation&gt; DataprocProjectsRegionsClustersNodeGroupsRepair(DataprocProjectsRegionsClustersNodeGroupsRepairRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Repair nodes in a node group.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.DataprocProjectsRegionsClustersNodeGroupsRepair(
        new DataprocProjectsRegionsClustersNodeGroupsRepairRequest
        {
            ProjectsId = "some example string",
            RegionsId = "some example string",
            ClustersId = "some example string",
            NodeGroupsId = "some example string",
            Body = new RepairNodeGroupRequest(),
        });
    // TODO: Handle 'response' of type Operation
}
catch (ApiException<DataprocProjectsRegionsClustersNodeGroupsRepairError> ex)
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

<code>[DataprocProjectsRegionsClustersNodeGroupsRepairRequest](src/GoogleCloudDataproc/Requests/DataprocProjectsRegionsClustersNodeGroupsRepairRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Operation](src/GoogleCloudDataproc/Models/Operation.cs)</code>

**OnError**: <code>[ApiException](src/GoogleCloudDataproc/Core/Exceptions/ApiException.cs)&lt;[DataprocProjectsRegionsClustersNodeGroupsRepairError](src/GoogleCloudDataproc/Errors/DataprocProjectsRegionsClustersNodeGroupsRepairError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Operation&gt; DataprocProjectsRegionsClustersNodeGroupsResize(DataprocProjectsRegionsClustersNodeGroupsResizeRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Resizes a node group in a cluster. The returned Operation.metadata is NodeGroupOperationMetadata (https://cloud.google.com/dataproc/docs/reference/rpc/google.cloud.dataproc.v1#nodegroupoperationmetadata).

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.DataprocProjectsRegionsClustersNodeGroupsResize(
        new DataprocProjectsRegionsClustersNodeGroupsResizeRequest
        {
            ProjectsId = "some example string",
            RegionsId = "some example string",
            ClustersId = "some example string",
            NodeGroupsId = "some example string",
            Body = new ResizeNodeGroupRequest(),
        });
    // TODO: Handle 'response' of type Operation
}
catch (ApiException<DataprocProjectsRegionsClustersNodeGroupsResizeError> ex)
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

<code>[DataprocProjectsRegionsClustersNodeGroupsResizeRequest](src/GoogleCloudDataproc/Requests/DataprocProjectsRegionsClustersNodeGroupsResizeRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Operation](src/GoogleCloudDataproc/Models/Operation.cs)</code>

**OnError**: <code>[ApiException](src/GoogleCloudDataproc/Core/Exceptions/ApiException.cs)&lt;[DataprocProjectsRegionsClustersNodeGroupsResizeError](src/GoogleCloudDataproc/Errors/DataprocProjectsRegionsClustersNodeGroupsResizeError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Operation&gt; DataprocProjectsRegionsClustersPatch(DataprocProjectsRegionsClustersPatchRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates a cluster in a project. The returned Operation.metadata will be ClusterOperationMetadata (https://cloud.google.com/dataproc/docs/reference/rpc/google.cloud.dataproc.v1#clusteroperationmetadata). The cluster must be in a RUNNING state or an error is returned.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.DataprocProjectsRegionsClustersPatch(new DataprocProjectsRegionsClustersPatchRequest
    {
        ProjectId = "some example string",
        Region = "some example string",
        ClusterName = "some example string",
        Body = new Cluster(),
    });
    // TODO: Handle 'response' of type Operation
}
catch (ApiException<DataprocProjectsRegionsClustersPatchError> ex)
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

<code>[DataprocProjectsRegionsClustersPatchRequest](src/GoogleCloudDataproc/Requests/DataprocProjectsRegionsClustersPatchRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Operation](src/GoogleCloudDataproc/Models/Operation.cs)</code>

**OnError**: <code>[ApiException](src/GoogleCloudDataproc/Core/Exceptions/ApiException.cs)&lt;[DataprocProjectsRegionsClustersPatchError](src/GoogleCloudDataproc/Errors/DataprocProjectsRegionsClustersPatchError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Operation&gt; DataprocProjectsRegionsClustersRepair(DataprocProjectsRegionsClustersRepairRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Repairs a cluster.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.DataprocProjectsRegionsClustersRepair(new DataprocProjectsRegionsClustersRepairRequest
    {
        ProjectId = "some example string",
        Region = "some example string",
        ClusterName = "some example string",
        Body = new RepairClusterRequest(),
    });
    // TODO: Handle 'response' of type Operation
}
catch (ApiException<DataprocProjectsRegionsClustersRepairError> ex)
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

<code>[DataprocProjectsRegionsClustersRepairRequest](src/GoogleCloudDataproc/Requests/DataprocProjectsRegionsClustersRepairRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Operation](src/GoogleCloudDataproc/Models/Operation.cs)</code>

**OnError**: <code>[ApiException](src/GoogleCloudDataproc/Core/Exceptions/ApiException.cs)&lt;[DataprocProjectsRegionsClustersRepairError](src/GoogleCloudDataproc/Errors/DataprocProjectsRegionsClustersRepairError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Policy&gt; DataprocProjectsRegionsClustersSetIamPolicy(DataprocProjectsRegionsClustersSetIamPolicyRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Sets the access control policy on the specified resource. Replaces any existing policy.Can return NOT_FOUND, INVALID_ARGUMENT, and PERMISSION_DENIED errors.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.DataprocProjectsRegionsClustersSetIamPolicy(
        new DataprocProjectsRegionsClustersSetIamPolicyRequest
        {
            ProjectsId = "some example string",
            RegionsId = "some example string",
            ClustersId = "some example string",
            Body = new SetIamPolicyRequest(),
        });
    // TODO: Handle 'response' of type Policy
}
catch (ApiException<DataprocProjectsRegionsClustersSetIamPolicyError> ex)
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

<code>[DataprocProjectsRegionsClustersSetIamPolicyRequest](src/GoogleCloudDataproc/Requests/DataprocProjectsRegionsClustersSetIamPolicyRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Policy](src/GoogleCloudDataproc/Models/Policy.cs)</code>

**OnError**: <code>[ApiException](src/GoogleCloudDataproc/Core/Exceptions/ApiException.cs)&lt;[DataprocProjectsRegionsClustersSetIamPolicyError](src/GoogleCloudDataproc/Errors/DataprocProjectsRegionsClustersSetIamPolicyError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Operation&gt; DataprocProjectsRegionsClustersStart(DataprocProjectsRegionsClustersStartRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Starts a cluster in a project.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.DataprocProjectsRegionsClustersStart(new DataprocProjectsRegionsClustersStartRequest
    {
        ProjectId = "some example string",
        Region = "some example string",
        ClusterName = "some example string",
        Body = new StartClusterRequest(),
    });
    // TODO: Handle 'response' of type Operation
}
catch (ApiException<DataprocProjectsRegionsClustersStartError> ex)
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

<code>[DataprocProjectsRegionsClustersStartRequest](src/GoogleCloudDataproc/Requests/DataprocProjectsRegionsClustersStartRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Operation](src/GoogleCloudDataproc/Models/Operation.cs)</code>

**OnError**: <code>[ApiException](src/GoogleCloudDataproc/Core/Exceptions/ApiException.cs)&lt;[DataprocProjectsRegionsClustersStartError](src/GoogleCloudDataproc/Errors/DataprocProjectsRegionsClustersStartError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Operation&gt; DataprocProjectsRegionsClustersStop(DataprocProjectsRegionsClustersStopRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Stops a cluster in a project.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.DataprocProjectsRegionsClustersStop(new DataprocProjectsRegionsClustersStopRequest
    {
        ProjectId = "some example string",
        Region = "some example string",
        ClusterName = "some example string",
        Body = new StopClusterRequest(),
    });
    // TODO: Handle 'response' of type Operation
}
catch (ApiException<DataprocProjectsRegionsClustersStopError> ex)
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

<code>[DataprocProjectsRegionsClustersStopRequest](src/GoogleCloudDataproc/Requests/DataprocProjectsRegionsClustersStopRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Operation](src/GoogleCloudDataproc/Models/Operation.cs)</code>

**OnError**: <code>[ApiException](src/GoogleCloudDataproc/Core/Exceptions/ApiException.cs)&lt;[DataprocProjectsRegionsClustersStopError](src/GoogleCloudDataproc/Errors/DataprocProjectsRegionsClustersStopError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;TestIamPermissionsResponse&gt; DataprocProjectsRegionsClustersTestIamPermissions(DataprocProjectsRegionsClustersTestIamPermissionsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a NOT_FOUND error.Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.DataprocProjectsRegionsClustersTestIamPermissions(
        new DataprocProjectsRegionsClustersTestIamPermissionsRequest
        {
            ProjectsId = "some example string",
            RegionsId = "some example string",
            ClustersId = "some example string",
            Body = new TestIamPermissionsRequest(),
        });
    // TODO: Handle 'response' of type TestIamPermissionsResponse
}
catch (ApiException<DataprocProjectsRegionsClustersTestIamPermissionsError> ex)
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

<code>[DataprocProjectsRegionsClustersTestIamPermissionsRequest](src/GoogleCloudDataproc/Requests/DataprocProjectsRegionsClustersTestIamPermissionsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[TestIamPermissionsResponse](src/GoogleCloudDataproc/Models/TestIamPermissionsResponse.cs)</code>

**OnError**: <code>[ApiException](src/GoogleCloudDataproc/Core/Exceptions/ApiException.cs)&lt;[DataprocProjectsRegionsClustersTestIamPermissionsError](src/GoogleCloudDataproc/Errors/DataprocProjectsRegionsClustersTestIamPermissionsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Job&gt; DataprocProjectsRegionsJobsCancel(DataprocProjectsRegionsJobsCancelRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Starts a job cancellation request. To access the job resource after cancellation, call regions/{region}/jobs.list (https://cloud.google.com/dataproc/docs/reference/rest/v1/projects.regions.jobs/list) or regions/{region}/jobs.get (https://cloud.google.com/dataproc/docs/reference/rest/v1/projects.regions.jobs/get).

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.DataprocProjectsRegionsJobsCancel(new DataprocProjectsRegionsJobsCancelRequest
    {
        ProjectId = "some example string",
        Region = "some example string",
        JobId = "some example string",
        Body = body,
    });
    // TODO: Handle 'response' of type Job
}
catch (ApiException<DataprocProjectsRegionsJobsCancelError> ex)
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

<code>[DataprocProjectsRegionsJobsCancelRequest](src/GoogleCloudDataproc/Requests/DataprocProjectsRegionsJobsCancelRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Job](src/GoogleCloudDataproc/Models/Job.cs)</code>

**OnError**: <code>[ApiException](src/GoogleCloudDataproc/Core/Exceptions/ApiException.cs)&lt;[DataprocProjectsRegionsJobsCancelError](src/GoogleCloudDataproc/Errors/DataprocProjectsRegionsJobsCancelError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;object&gt; DataprocProjectsRegionsJobsDelete(DataprocProjectsRegionsJobsDeleteRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes the job from the project. If the job is active, the delete fails, and the response returns FAILED_PRECONDITION.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.DataprocProjectsRegionsJobsDelete(new DataprocProjectsRegionsJobsDeleteRequest
    {
        ProjectId = "some example string",
        Region = "some example string",
        JobId = "some example string",
    });
    // TODO: Handle 'response' of type object
}
catch (ApiException<DataprocProjectsRegionsJobsDeleteError> ex)
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

<code>[DataprocProjectsRegionsJobsDeleteRequest](src/GoogleCloudDataproc/Requests/DataprocProjectsRegionsJobsDeleteRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>object</code>

**OnError**: <code>[ApiException](src/GoogleCloudDataproc/Core/Exceptions/ApiException.cs)&lt;[DataprocProjectsRegionsJobsDeleteError](src/GoogleCloudDataproc/Errors/DataprocProjectsRegionsJobsDeleteError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Job&gt; DataprocProjectsRegionsJobsGet(DataprocProjectsRegionsJobsGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets the resource representation for a job in a project.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.DataprocProjectsRegionsJobsGet(new DataprocProjectsRegionsJobsGetRequest
    {
        ProjectId = "some example string",
        Region = "some example string",
        JobId = "some example string",
    });
    // TODO: Handle 'response' of type Job
}
catch (ApiException<DataprocProjectsRegionsJobsGetError> ex)
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

<code>[DataprocProjectsRegionsJobsGetRequest](src/GoogleCloudDataproc/Requests/DataprocProjectsRegionsJobsGetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Job](src/GoogleCloudDataproc/Models/Job.cs)</code>

**OnError**: <code>[ApiException](src/GoogleCloudDataproc/Core/Exceptions/ApiException.cs)&lt;[DataprocProjectsRegionsJobsGetError](src/GoogleCloudDataproc/Errors/DataprocProjectsRegionsJobsGetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Policy&gt; DataprocProjectsRegionsJobsGetIamPolicy(DataprocProjectsRegionsJobsGetIamPolicyRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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
    var response = await client.DataprocProjectsRegionsJobsGetIamPolicy(
        new DataprocProjectsRegionsJobsGetIamPolicyRequest
        {
            ProjectsId = "some example string",
            RegionsId = "some example string",
            JobsId = "some example string",
            Body = new GetIamPolicyRequest(),
        });
    // TODO: Handle 'response' of type Policy
}
catch (ApiException<DataprocProjectsRegionsJobsGetIamPolicyError> ex)
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

<code>[DataprocProjectsRegionsJobsGetIamPolicyRequest](src/GoogleCloudDataproc/Requests/DataprocProjectsRegionsJobsGetIamPolicyRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Policy](src/GoogleCloudDataproc/Models/Policy.cs)</code>

**OnError**: <code>[ApiException](src/GoogleCloudDataproc/Core/Exceptions/ApiException.cs)&lt;[DataprocProjectsRegionsJobsGetIamPolicyError](src/GoogleCloudDataproc/Errors/DataprocProjectsRegionsJobsGetIamPolicyError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ListJobsResponse&gt; DataprocProjectsRegionsJobsList(DataprocProjectsRegionsJobsListRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists regions/{region}/jobs in a project.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.DataprocProjectsRegionsJobsList(new DataprocProjectsRegionsJobsListRequest
    {
        ProjectId = "some example string",
        Region = "some example string",
    });
    // TODO: Handle 'response' of type ListJobsResponse
}
catch (ApiException<DataprocProjectsRegionsJobsListError> ex)
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

<code>[DataprocProjectsRegionsJobsListRequest](src/GoogleCloudDataproc/Requests/DataprocProjectsRegionsJobsListRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ListJobsResponse](src/GoogleCloudDataproc/Models/ListJobsResponse.cs)</code>

**OnError**: <code>[ApiException](src/GoogleCloudDataproc/Core/Exceptions/ApiException.cs)&lt;[DataprocProjectsRegionsJobsListError](src/GoogleCloudDataproc/Errors/DataprocProjectsRegionsJobsListError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Job&gt; DataprocProjectsRegionsJobsPatch(DataprocProjectsRegionsJobsPatchRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates a job in a project.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.DataprocProjectsRegionsJobsPatch(new DataprocProjectsRegionsJobsPatchRequest
    {
        ProjectId = "some example string",
        Region = "some example string",
        JobId = "some example string",
        Body = new Job(),
    });
    // TODO: Handle 'response' of type Job
}
catch (ApiException<DataprocProjectsRegionsJobsPatchError> ex)
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

<code>[DataprocProjectsRegionsJobsPatchRequest](src/GoogleCloudDataproc/Requests/DataprocProjectsRegionsJobsPatchRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Job](src/GoogleCloudDataproc/Models/Job.cs)</code>

**OnError**: <code>[ApiException](src/GoogleCloudDataproc/Core/Exceptions/ApiException.cs)&lt;[DataprocProjectsRegionsJobsPatchError](src/GoogleCloudDataproc/Errors/DataprocProjectsRegionsJobsPatchError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Policy&gt; DataprocProjectsRegionsJobsSetIamPolicy(DataprocProjectsRegionsJobsSetIamPolicyRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Sets the access control policy on the specified resource. Replaces any existing policy.Can return NOT_FOUND, INVALID_ARGUMENT, and PERMISSION_DENIED errors.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.DataprocProjectsRegionsJobsSetIamPolicy(
        new DataprocProjectsRegionsJobsSetIamPolicyRequest
        {
            ProjectsId = "some example string",
            RegionsId = "some example string",
            JobsId = "some example string",
            Body = new SetIamPolicyRequest(),
        });
    // TODO: Handle 'response' of type Policy
}
catch (ApiException<DataprocProjectsRegionsJobsSetIamPolicyError> ex)
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

<code>[DataprocProjectsRegionsJobsSetIamPolicyRequest](src/GoogleCloudDataproc/Requests/DataprocProjectsRegionsJobsSetIamPolicyRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Policy](src/GoogleCloudDataproc/Models/Policy.cs)</code>

**OnError**: <code>[ApiException](src/GoogleCloudDataproc/Core/Exceptions/ApiException.cs)&lt;[DataprocProjectsRegionsJobsSetIamPolicyError](src/GoogleCloudDataproc/Errors/DataprocProjectsRegionsJobsSetIamPolicyError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Job&gt; DataprocProjectsRegionsJobsSubmit(DataprocProjectsRegionsJobsSubmitRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Submits a job to a cluster.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.DataprocProjectsRegionsJobsSubmit(new DataprocProjectsRegionsJobsSubmitRequest
    {
        ProjectId = "some example string",
        Region = "some example string",
        Body = new SubmitJobRequest(),
    });
    // TODO: Handle 'response' of type Job
}
catch (ApiException<DataprocProjectsRegionsJobsSubmitError> ex)
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

<code>[DataprocProjectsRegionsJobsSubmitRequest](src/GoogleCloudDataproc/Requests/DataprocProjectsRegionsJobsSubmitRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Job](src/GoogleCloudDataproc/Models/Job.cs)</code>

**OnError**: <code>[ApiException](src/GoogleCloudDataproc/Core/Exceptions/ApiException.cs)&lt;[DataprocProjectsRegionsJobsSubmitError](src/GoogleCloudDataproc/Errors/DataprocProjectsRegionsJobsSubmitError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Operation&gt; DataprocProjectsRegionsJobsSubmitAsOperation(DataprocProjectsRegionsJobsSubmitAsOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Submits job to a cluster.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.DataprocProjectsRegionsJobsSubmitAsOperation(
        new DataprocProjectsRegionsJobsSubmitAsOperationRequest
        {
            ProjectId = "some example string",
            Region = "some example string",
            Body = new SubmitJobRequest(),
        });
    // TODO: Handle 'response' of type Operation
}
catch (ApiException<DataprocProjectsRegionsJobsSubmitAsOperationError> ex)
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

<code>[DataprocProjectsRegionsJobsSubmitAsOperationRequest](src/GoogleCloudDataproc/Requests/DataprocProjectsRegionsJobsSubmitAsOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Operation](src/GoogleCloudDataproc/Models/Operation.cs)</code>

**OnError**: <code>[ApiException](src/GoogleCloudDataproc/Core/Exceptions/ApiException.cs)&lt;[DataprocProjectsRegionsJobsSubmitAsOperationError](src/GoogleCloudDataproc/Errors/DataprocProjectsRegionsJobsSubmitAsOperationError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;TestIamPermissionsResponse&gt; DataprocProjectsRegionsJobsTestIamPermissions(DataprocProjectsRegionsJobsTestIamPermissionsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a NOT_FOUND error.Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.DataprocProjectsRegionsJobsTestIamPermissions(
        new DataprocProjectsRegionsJobsTestIamPermissionsRequest
        {
            ProjectsId = "some example string",
            RegionsId = "some example string",
            JobsId = "some example string",
            Body = new TestIamPermissionsRequest(),
        });
    // TODO: Handle 'response' of type TestIamPermissionsResponse
}
catch (ApiException<DataprocProjectsRegionsJobsTestIamPermissionsError> ex)
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

<code>[DataprocProjectsRegionsJobsTestIamPermissionsRequest](src/GoogleCloudDataproc/Requests/DataprocProjectsRegionsJobsTestIamPermissionsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[TestIamPermissionsResponse](src/GoogleCloudDataproc/Models/TestIamPermissionsResponse.cs)</code>

**OnError**: <code>[ApiException](src/GoogleCloudDataproc/Core/Exceptions/ApiException.cs)&lt;[DataprocProjectsRegionsJobsTestIamPermissionsError](src/GoogleCloudDataproc/Errors/DataprocProjectsRegionsJobsTestIamPermissionsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;object&gt; DataprocProjectsRegionsOperationsCancel(DataprocProjectsRegionsOperationsCancelRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns google.rpc.Code.UNIMPLEMENTED. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to Code.CANCELLED.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.DataprocProjectsRegionsOperationsCancel(
        new DataprocProjectsRegionsOperationsCancelRequest
        {
            ProjectsId = "some example string",
            RegionsId = "some example string",
            OperationsId = "some example string",
        });
    // TODO: Handle 'response' of type object
}
catch (ApiException<DataprocProjectsRegionsOperationsCancelError> ex)
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

<code>[DataprocProjectsRegionsOperationsCancelRequest](src/GoogleCloudDataproc/Requests/DataprocProjectsRegionsOperationsCancelRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>object</code>

**OnError**: <code>[ApiException](src/GoogleCloudDataproc/Core/Exceptions/ApiException.cs)&lt;[DataprocProjectsRegionsOperationsCancelError](src/GoogleCloudDataproc/Errors/DataprocProjectsRegionsOperationsCancelError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;object&gt; DataprocProjectsRegionsOperationsDelete(DataprocProjectsRegionsOperationsDeleteRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns google.rpc.Code.UNIMPLEMENTED.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.DataprocProjectsRegionsOperationsDelete(
        new DataprocProjectsRegionsOperationsDeleteRequest
        {
            ProjectsId = "some example string",
            RegionsId = "some example string",
            OperationsId = "some example string",
        });
    // TODO: Handle 'response' of type object
}
catch (ApiException<DataprocProjectsRegionsOperationsDeleteError> ex)
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

<code>[DataprocProjectsRegionsOperationsDeleteRequest](src/GoogleCloudDataproc/Requests/DataprocProjectsRegionsOperationsDeleteRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>object</code>

**OnError**: <code>[ApiException](src/GoogleCloudDataproc/Core/Exceptions/ApiException.cs)&lt;[DataprocProjectsRegionsOperationsDeleteError](src/GoogleCloudDataproc/Errors/DataprocProjectsRegionsOperationsDeleteError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Operation&gt; DataprocProjectsRegionsOperationsGet(DataprocProjectsRegionsOperationsGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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
    var response = await client.DataprocProjectsRegionsOperationsGet(new DataprocProjectsRegionsOperationsGetRequest
    {
        ProjectsId = "some example string",
        RegionsId = "some example string",
        OperationsId = "some example string",
    });
    // TODO: Handle 'response' of type Operation
}
catch (ApiException<DataprocProjectsRegionsOperationsGetError> ex)
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

<code>[DataprocProjectsRegionsOperationsGetRequest](src/GoogleCloudDataproc/Requests/DataprocProjectsRegionsOperationsGetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Operation](src/GoogleCloudDataproc/Models/Operation.cs)</code>

**OnError**: <code>[ApiException](src/GoogleCloudDataproc/Core/Exceptions/ApiException.cs)&lt;[DataprocProjectsRegionsOperationsGetError](src/GoogleCloudDataproc/Errors/DataprocProjectsRegionsOperationsGetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Policy&gt; DataprocProjectsRegionsOperationsGetIamPolicy(DataprocProjectsRegionsOperationsGetIamPolicyRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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
    var response = await client.DataprocProjectsRegionsOperationsGetIamPolicy(
        new DataprocProjectsRegionsOperationsGetIamPolicyRequest
        {
            ProjectsId = "some example string",
            RegionsId = "some example string",
            OperationsId = "some example string",
            Body = new GetIamPolicyRequest(),
        });
    // TODO: Handle 'response' of type Policy
}
catch (ApiException<DataprocProjectsRegionsOperationsGetIamPolicyError> ex)
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

<code>[DataprocProjectsRegionsOperationsGetIamPolicyRequest](src/GoogleCloudDataproc/Requests/DataprocProjectsRegionsOperationsGetIamPolicyRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Policy](src/GoogleCloudDataproc/Models/Policy.cs)</code>

**OnError**: <code>[ApiException](src/GoogleCloudDataproc/Core/Exceptions/ApiException.cs)&lt;[DataprocProjectsRegionsOperationsGetIamPolicyError](src/GoogleCloudDataproc/Errors/DataprocProjectsRegionsOperationsGetIamPolicyError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ListOperationsResponse&gt; DataprocProjectsRegionsOperationsList(DataprocProjectsRegionsOperationsListRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns UNIMPLEMENTED.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.DataprocProjectsRegionsOperationsList(new DataprocProjectsRegionsOperationsListRequest
    {
        ProjectsId = "some example string",
        RegionsId = "some example string",
    });
    // TODO: Handle 'response' of type ListOperationsResponse
}
catch (ApiException<DataprocProjectsRegionsOperationsListError> ex)
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

<code>[DataprocProjectsRegionsOperationsListRequest](src/GoogleCloudDataproc/Requests/DataprocProjectsRegionsOperationsListRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ListOperationsResponse](src/GoogleCloudDataproc/Models/ListOperationsResponse.cs)</code>

**OnError**: <code>[ApiException](src/GoogleCloudDataproc/Core/Exceptions/ApiException.cs)&lt;[DataprocProjectsRegionsOperationsListError](src/GoogleCloudDataproc/Errors/DataprocProjectsRegionsOperationsListError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Policy&gt; DataprocProjectsRegionsOperationsSetIamPolicy(DataprocProjectsRegionsOperationsSetIamPolicyRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Sets the access control policy on the specified resource. Replaces any existing policy.Can return NOT_FOUND, INVALID_ARGUMENT, and PERMISSION_DENIED errors.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.DataprocProjectsRegionsOperationsSetIamPolicy(
        new DataprocProjectsRegionsOperationsSetIamPolicyRequest
        {
            ProjectsId = "some example string",
            RegionsId = "some example string",
            OperationsId = "some example string",
            Body = new SetIamPolicyRequest(),
        });
    // TODO: Handle 'response' of type Policy
}
catch (ApiException<DataprocProjectsRegionsOperationsSetIamPolicyError> ex)
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

<code>[DataprocProjectsRegionsOperationsSetIamPolicyRequest](src/GoogleCloudDataproc/Requests/DataprocProjectsRegionsOperationsSetIamPolicyRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Policy](src/GoogleCloudDataproc/Models/Policy.cs)</code>

**OnError**: <code>[ApiException](src/GoogleCloudDataproc/Core/Exceptions/ApiException.cs)&lt;[DataprocProjectsRegionsOperationsSetIamPolicyError](src/GoogleCloudDataproc/Errors/DataprocProjectsRegionsOperationsSetIamPolicyError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;TestIamPermissionsResponse&gt; DataprocProjectsRegionsOperationsTestIamPermissions(DataprocProjectsRegionsOperationsTestIamPermissionsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a NOT_FOUND error.Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.DataprocProjectsRegionsOperationsTestIamPermissions(
        new DataprocProjectsRegionsOperationsTestIamPermissionsRequest
        {
            ProjectsId = "some example string",
            RegionsId = "some example string",
            OperationsId = "some example string",
            Body = new TestIamPermissionsRequest(),
        });
    // TODO: Handle 'response' of type TestIamPermissionsResponse
}
catch (ApiException<DataprocProjectsRegionsOperationsTestIamPermissionsError> ex)
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

<code>[DataprocProjectsRegionsOperationsTestIamPermissionsRequest](src/GoogleCloudDataproc/Requests/DataprocProjectsRegionsOperationsTestIamPermissionsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[TestIamPermissionsResponse](src/GoogleCloudDataproc/Models/TestIamPermissionsResponse.cs)</code>

**OnError**: <code>[ApiException](src/GoogleCloudDataproc/Core/Exceptions/ApiException.cs)&lt;[DataprocProjectsRegionsOperationsTestIamPermissionsError](src/GoogleCloudDataproc/Errors/DataprocProjectsRegionsOperationsTestIamPermissionsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;WorkflowTemplate&gt; DataprocProjectsRegionsWorkflowTemplatesCreate(DataprocProjectsRegionsWorkflowTemplatesCreateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates new workflow template.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.DataprocProjectsRegionsWorkflowTemplatesCreate(
        new DataprocProjectsRegionsWorkflowTemplatesCreateRequest
        {
            ProjectsId = "some example string",
            RegionsId = "some example string",
            Body = new WorkflowTemplate(),
        });
    // TODO: Handle 'response' of type WorkflowTemplate
}
catch (ApiException<DataprocProjectsRegionsWorkflowTemplatesCreateError> ex)
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

<code>[DataprocProjectsRegionsWorkflowTemplatesCreateRequest](src/GoogleCloudDataproc/Requests/DataprocProjectsRegionsWorkflowTemplatesCreateRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[WorkflowTemplate](src/GoogleCloudDataproc/Models/WorkflowTemplate.cs)</code>

**OnError**: <code>[ApiException](src/GoogleCloudDataproc/Core/Exceptions/ApiException.cs)&lt;[DataprocProjectsRegionsWorkflowTemplatesCreateError](src/GoogleCloudDataproc/Errors/DataprocProjectsRegionsWorkflowTemplatesCreateError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;object&gt; DataprocProjectsRegionsWorkflowTemplatesDelete(DataprocProjectsRegionsWorkflowTemplatesDeleteRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a workflow template. It does not cancel in-progress workflows.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.DataprocProjectsRegionsWorkflowTemplatesDelete(
        new DataprocProjectsRegionsWorkflowTemplatesDeleteRequest
        {
            ProjectsId = "some example string",
            RegionsId = "some example string",
            WorkflowTemplatesId = "some example string",
        });
    // TODO: Handle 'response' of type object
}
catch (ApiException<DataprocProjectsRegionsWorkflowTemplatesDeleteError> ex)
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

<code>[DataprocProjectsRegionsWorkflowTemplatesDeleteRequest](src/GoogleCloudDataproc/Requests/DataprocProjectsRegionsWorkflowTemplatesDeleteRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>object</code>

**OnError**: <code>[ApiException](src/GoogleCloudDataproc/Core/Exceptions/ApiException.cs)&lt;[DataprocProjectsRegionsWorkflowTemplatesDeleteError](src/GoogleCloudDataproc/Errors/DataprocProjectsRegionsWorkflowTemplatesDeleteError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;WorkflowTemplate&gt; DataprocProjectsRegionsWorkflowTemplatesGet(DataprocProjectsRegionsWorkflowTemplatesGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves the latest workflow template.Can retrieve previously instantiated template by specifying optional version parameter.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.DataprocProjectsRegionsWorkflowTemplatesGet(
        new DataprocProjectsRegionsWorkflowTemplatesGetRequest
        {
            ProjectsId = "some example string",
            RegionsId = "some example string",
            WorkflowTemplatesId = "some example string",
        });
    // TODO: Handle 'response' of type WorkflowTemplate
}
catch (ApiException<DataprocProjectsRegionsWorkflowTemplatesGetError> ex)
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

<code>[DataprocProjectsRegionsWorkflowTemplatesGetRequest](src/GoogleCloudDataproc/Requests/DataprocProjectsRegionsWorkflowTemplatesGetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[WorkflowTemplate](src/GoogleCloudDataproc/Models/WorkflowTemplate.cs)</code>

**OnError**: <code>[ApiException](src/GoogleCloudDataproc/Core/Exceptions/ApiException.cs)&lt;[DataprocProjectsRegionsWorkflowTemplatesGetError](src/GoogleCloudDataproc/Errors/DataprocProjectsRegionsWorkflowTemplatesGetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Policy&gt; DataprocProjectsRegionsWorkflowTemplatesGetIamPolicy(DataprocProjectsRegionsWorkflowTemplatesGetIamPolicyRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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
    var response = await client.DataprocProjectsRegionsWorkflowTemplatesGetIamPolicy(
        new DataprocProjectsRegionsWorkflowTemplatesGetIamPolicyRequest
        {
            ProjectsId = "some example string",
            RegionsId = "some example string",
            WorkflowTemplatesId = "some example string",
            Body = new GetIamPolicyRequest(),
        });
    // TODO: Handle 'response' of type Policy
}
catch (ApiException<DataprocProjectsRegionsWorkflowTemplatesGetIamPolicyError> ex)
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

<code>[DataprocProjectsRegionsWorkflowTemplatesGetIamPolicyRequest](src/GoogleCloudDataproc/Requests/DataprocProjectsRegionsWorkflowTemplatesGetIamPolicyRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Policy](src/GoogleCloudDataproc/Models/Policy.cs)</code>

**OnError**: <code>[ApiException](src/GoogleCloudDataproc/Core/Exceptions/ApiException.cs)&lt;[DataprocProjectsRegionsWorkflowTemplatesGetIamPolicyError](src/GoogleCloudDataproc/Errors/DataprocProjectsRegionsWorkflowTemplatesGetIamPolicyError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Operation&gt; DataprocProjectsRegionsWorkflowTemplatesInstantiate(DataprocProjectsRegionsWorkflowTemplatesInstantiateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Instantiates a template and begins execution.The returned Operation can be used to track execution of workflow by polling operations.get. The Operation will complete when entire workflow is finished.The running workflow can be aborted via operations.cancel. This will cause any inflight jobs to be cancelled and workflow-owned clusters to be deleted.The Operation.metadata will be WorkflowMetadata (https://cloud.google.com/dataproc/docs/reference/rpc/google.cloud.dataproc.v1#workflowmetadata). Also see Using WorkflowMetadata (https://cloud.google.com/dataproc/docs/concepts/workflows/debugging#using_workflowmetadata).On successful completion, Operation.response will be Empty.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.DataprocProjectsRegionsWorkflowTemplatesInstantiate(
        new DataprocProjectsRegionsWorkflowTemplatesInstantiateRequest
        {
            ProjectsId = "some example string",
            RegionsId = "some example string",
            WorkflowTemplatesId = "some example string",
            Body = new InstantiateWorkflowTemplateRequest(),
        });
    // TODO: Handle 'response' of type Operation
}
catch (ApiException<DataprocProjectsRegionsWorkflowTemplatesInstantiateError> ex)
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

<code>[DataprocProjectsRegionsWorkflowTemplatesInstantiateRequest](src/GoogleCloudDataproc/Requests/DataprocProjectsRegionsWorkflowTemplatesInstantiateRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Operation](src/GoogleCloudDataproc/Models/Operation.cs)</code>

**OnError**: <code>[ApiException](src/GoogleCloudDataproc/Core/Exceptions/ApiException.cs)&lt;[DataprocProjectsRegionsWorkflowTemplatesInstantiateError](src/GoogleCloudDataproc/Errors/DataprocProjectsRegionsWorkflowTemplatesInstantiateError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Operation&gt; DataprocProjectsRegionsWorkflowTemplatesInstantiateInline(DataprocProjectsRegionsWorkflowTemplatesInstantiateInlineRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Instantiates a template and begins execution.This method is equivalent to executing the sequence CreateWorkflowTemplate, InstantiateWorkflowTemplate, DeleteWorkflowTemplate.The returned Operation can be used to track execution of workflow by polling operations.get. The Operation will complete when entire workflow is finished.The running workflow can be aborted via operations.cancel. This will cause any inflight jobs to be cancelled and workflow-owned clusters to be deleted.The Operation.metadata will be WorkflowMetadata (https://cloud.google.com/dataproc/docs/reference/rpc/google.cloud.dataproc.v1#workflowmetadata). Also see Using WorkflowMetadata (https://cloud.google.com/dataproc/docs/concepts/workflows/debugging#using_workflowmetadata).On successful completion, Operation.response will be Empty.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.DataprocProjectsRegionsWorkflowTemplatesInstantiateInline(
        new DataprocProjectsRegionsWorkflowTemplatesInstantiateInlineRequest
        {
            ProjectsId = "some example string",
            RegionsId = "some example string",
            Body = new WorkflowTemplate(),
        });
    // TODO: Handle 'response' of type Operation
}
catch (ApiException<DataprocProjectsRegionsWorkflowTemplatesInstantiateInlineError> ex)
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

<code>[DataprocProjectsRegionsWorkflowTemplatesInstantiateInlineRequest](src/GoogleCloudDataproc/Requests/DataprocProjectsRegionsWorkflowTemplatesInstantiateInlineRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Operation](src/GoogleCloudDataproc/Models/Operation.cs)</code>

**OnError**: <code>[ApiException](src/GoogleCloudDataproc/Core/Exceptions/ApiException.cs)&lt;[DataprocProjectsRegionsWorkflowTemplatesInstantiateInlineError](src/GoogleCloudDataproc/Errors/DataprocProjectsRegionsWorkflowTemplatesInstantiateInlineError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ListWorkflowTemplatesResponse&gt; DataprocProjectsRegionsWorkflowTemplatesList(DataprocProjectsRegionsWorkflowTemplatesListRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists workflows that match the specified filter in the request.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.DataprocProjectsRegionsWorkflowTemplatesList(
        new DataprocProjectsRegionsWorkflowTemplatesListRequest
        {
            ProjectsId = "some example string",
            RegionsId = "some example string",
        });
    // TODO: Handle 'response' of type ListWorkflowTemplatesResponse
}
catch (ApiException<DataprocProjectsRegionsWorkflowTemplatesListError> ex)
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

<code>[DataprocProjectsRegionsWorkflowTemplatesListRequest](src/GoogleCloudDataproc/Requests/DataprocProjectsRegionsWorkflowTemplatesListRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ListWorkflowTemplatesResponse](src/GoogleCloudDataproc/Models/ListWorkflowTemplatesResponse.cs)</code>

**OnError**: <code>[ApiException](src/GoogleCloudDataproc/Core/Exceptions/ApiException.cs)&lt;[DataprocProjectsRegionsWorkflowTemplatesListError](src/GoogleCloudDataproc/Errors/DataprocProjectsRegionsWorkflowTemplatesListError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Policy&gt; DataprocProjectsRegionsWorkflowTemplatesSetIamPolicy(DataprocProjectsRegionsWorkflowTemplatesSetIamPolicyRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Sets the access control policy on the specified resource. Replaces any existing policy.Can return NOT_FOUND, INVALID_ARGUMENT, and PERMISSION_DENIED errors.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.DataprocProjectsRegionsWorkflowTemplatesSetIamPolicy(
        new DataprocProjectsRegionsWorkflowTemplatesSetIamPolicyRequest
        {
            ProjectsId = "some example string",
            RegionsId = "some example string",
            WorkflowTemplatesId = "some example string",
            Body = new SetIamPolicyRequest(),
        });
    // TODO: Handle 'response' of type Policy
}
catch (ApiException<DataprocProjectsRegionsWorkflowTemplatesSetIamPolicyError> ex)
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

<code>[DataprocProjectsRegionsWorkflowTemplatesSetIamPolicyRequest](src/GoogleCloudDataproc/Requests/DataprocProjectsRegionsWorkflowTemplatesSetIamPolicyRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Policy](src/GoogleCloudDataproc/Models/Policy.cs)</code>

**OnError**: <code>[ApiException](src/GoogleCloudDataproc/Core/Exceptions/ApiException.cs)&lt;[DataprocProjectsRegionsWorkflowTemplatesSetIamPolicyError](src/GoogleCloudDataproc/Errors/DataprocProjectsRegionsWorkflowTemplatesSetIamPolicyError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;TestIamPermissionsResponse&gt; DataprocProjectsRegionsWorkflowTemplatesTestIamPermissions(DataprocProjectsRegionsWorkflowTemplatesTestIamPermissionsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a NOT_FOUND error.Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.DataprocProjectsRegionsWorkflowTemplatesTestIamPermissions(
        new DataprocProjectsRegionsWorkflowTemplatesTestIamPermissionsRequest
        {
            ProjectsId = "some example string",
            RegionsId = "some example string",
            WorkflowTemplatesId = "some example string",
            Body = new TestIamPermissionsRequest(),
        });
    // TODO: Handle 'response' of type TestIamPermissionsResponse
}
catch (ApiException<DataprocProjectsRegionsWorkflowTemplatesTestIamPermissionsError> ex)
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

<code>[DataprocProjectsRegionsWorkflowTemplatesTestIamPermissionsRequest](src/GoogleCloudDataproc/Requests/DataprocProjectsRegionsWorkflowTemplatesTestIamPermissionsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[TestIamPermissionsResponse](src/GoogleCloudDataproc/Models/TestIamPermissionsResponse.cs)</code>

**OnError**: <code>[ApiException](src/GoogleCloudDataproc/Core/Exceptions/ApiException.cs)&lt;[DataprocProjectsRegionsWorkflowTemplatesTestIamPermissionsError](src/GoogleCloudDataproc/Errors/DataprocProjectsRegionsWorkflowTemplatesTestIamPermissionsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;WorkflowTemplate&gt; DataprocProjectsRegionsWorkflowTemplatesUpdate(DataprocProjectsRegionsWorkflowTemplatesUpdateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates (replaces) workflow template. The updated template must contain version that matches the current server version.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.DataprocProjectsRegionsWorkflowTemplatesUpdate(
        new DataprocProjectsRegionsWorkflowTemplatesUpdateRequest
        {
            ProjectsId = "some example string",
            RegionsId = "some example string",
            WorkflowTemplatesId = "some example string",
            Body = new WorkflowTemplate(),
        });
    // TODO: Handle 'response' of type WorkflowTemplate
}
catch (ApiException<DataprocProjectsRegionsWorkflowTemplatesUpdateError> ex)
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

<code>[DataprocProjectsRegionsWorkflowTemplatesUpdateRequest](src/GoogleCloudDataproc/Requests/DataprocProjectsRegionsWorkflowTemplatesUpdateRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[WorkflowTemplate](src/GoogleCloudDataproc/Models/WorkflowTemplate.cs)</code>

**OnError**: <code>[ApiException](src/GoogleCloudDataproc/Core/Exceptions/ApiException.cs)&lt;[DataprocProjectsRegionsWorkflowTemplatesUpdateError](src/GoogleCloudDataproc/Errors/DataprocProjectsRegionsWorkflowTemplatesUpdateError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Operation&gt; MetastoreProjectsLocationsFederationsCreate(MetastoreProjectsLocationsFederationsCreateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a metastore federation in a project and location.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.MetastoreProjectsLocationsFederationsCreate(
        new MetastoreProjectsLocationsFederationsCreateRequest
        {
            ProjectsId = "some example string",
            LocationsId = "some example string",
            Body = new Federation(),
        });
    // TODO: Handle 'response' of type Operation
}
catch (ApiException<MetastoreProjectsLocationsFederationsCreateError> ex)
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

<code>[MetastoreProjectsLocationsFederationsCreateRequest](src/GoogleCloudDataproc/Requests/MetastoreProjectsLocationsFederationsCreateRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Operation](src/GoogleCloudDataproc/Models/Operation.cs)</code>

**OnError**: <code>[ApiException](src/GoogleCloudDataproc/Core/Exceptions/ApiException.cs)&lt;[MetastoreProjectsLocationsFederationsCreateError](src/GoogleCloudDataproc/Errors/MetastoreProjectsLocationsFederationsCreateError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Operation&gt; MetastoreProjectsLocationsFederationsDelete(MetastoreProjectsLocationsFederationsDeleteRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a single federation.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.MetastoreProjectsLocationsFederationsDelete(
        new MetastoreProjectsLocationsFederationsDeleteRequest
        {
            ProjectsId = "some example string",
            LocationsId = "some example string",
            FederationsId = "some example string",
        });
    // TODO: Handle 'response' of type Operation
}
catch (ApiException<MetastoreProjectsLocationsFederationsDeleteError> ex)
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

<code>[MetastoreProjectsLocationsFederationsDeleteRequest](src/GoogleCloudDataproc/Requests/MetastoreProjectsLocationsFederationsDeleteRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Operation](src/GoogleCloudDataproc/Models/Operation.cs)</code>

**OnError**: <code>[ApiException](src/GoogleCloudDataproc/Core/Exceptions/ApiException.cs)&lt;[MetastoreProjectsLocationsFederationsDeleteError](src/GoogleCloudDataproc/Errors/MetastoreProjectsLocationsFederationsDeleteError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Federation&gt; MetastoreProjectsLocationsFederationsGet(MetastoreProjectsLocationsFederationsGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets the details of a single federation.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.MetastoreProjectsLocationsFederationsGet(
        new MetastoreProjectsLocationsFederationsGetRequest
        {
            ProjectsId = "some example string",
            LocationsId = "some example string",
            FederationsId = "some example string",
        });
    // TODO: Handle 'response' of type Federation
}
catch (ApiException<MetastoreProjectsLocationsFederationsGetError> ex)
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

<code>[MetastoreProjectsLocationsFederationsGetRequest](src/GoogleCloudDataproc/Requests/MetastoreProjectsLocationsFederationsGetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Federation](src/GoogleCloudDataproc/Models/Federation.cs)</code>

**OnError**: <code>[ApiException](src/GoogleCloudDataproc/Core/Exceptions/ApiException.cs)&lt;[MetastoreProjectsLocationsFederationsGetError](src/GoogleCloudDataproc/Errors/MetastoreProjectsLocationsFederationsGetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Policy2&gt; MetastoreProjectsLocationsFederationsGetIamPolicy(MetastoreProjectsLocationsFederationsGetIamPolicyRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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
    var response = await client.MetastoreProjectsLocationsFederationsGetIamPolicy(
        new MetastoreProjectsLocationsFederationsGetIamPolicyRequest
        {
            ProjectsId = "some example string",
            LocationsId = "some example string",
            FederationsId = "some example string",
        });
    // TODO: Handle 'response' of type Policy2
}
catch (ApiException<MetastoreProjectsLocationsFederationsGetIamPolicyError> ex)
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

<code>[MetastoreProjectsLocationsFederationsGetIamPolicyRequest](src/GoogleCloudDataproc/Requests/MetastoreProjectsLocationsFederationsGetIamPolicyRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Policy2](src/GoogleCloudDataproc/Models/Policy2.cs)</code>

**OnError**: <code>[ApiException](src/GoogleCloudDataproc/Core/Exceptions/ApiException.cs)&lt;[MetastoreProjectsLocationsFederationsGetIamPolicyError](src/GoogleCloudDataproc/Errors/MetastoreProjectsLocationsFederationsGetIamPolicyError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ListFederationsResponse&gt; MetastoreProjectsLocationsFederationsList(MetastoreProjectsLocationsFederationsListRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists federations in a project and location.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.MetastoreProjectsLocationsFederationsList(
        new MetastoreProjectsLocationsFederationsListRequest
        {
            ProjectsId = "some example string",
            LocationsId = "some example string",
        });
    // TODO: Handle 'response' of type ListFederationsResponse
}
catch (ApiException<MetastoreProjectsLocationsFederationsListError> ex)
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

<code>[MetastoreProjectsLocationsFederationsListRequest](src/GoogleCloudDataproc/Requests/MetastoreProjectsLocationsFederationsListRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ListFederationsResponse](src/GoogleCloudDataproc/Models/ListFederationsResponse.cs)</code>

**OnError**: <code>[ApiException](src/GoogleCloudDataproc/Core/Exceptions/ApiException.cs)&lt;[MetastoreProjectsLocationsFederationsListError](src/GoogleCloudDataproc/Errors/MetastoreProjectsLocationsFederationsListError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Operation&gt; MetastoreProjectsLocationsFederationsPatch(MetastoreProjectsLocationsFederationsPatchRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates the fields of a federation.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.MetastoreProjectsLocationsFederationsPatch(
        new MetastoreProjectsLocationsFederationsPatchRequest
        {
            ProjectsId = "some example string",
            LocationsId = "some example string",
            FederationsId = "some example string",
            Body = new Federation(),
        });
    // TODO: Handle 'response' of type Operation
}
catch (ApiException<MetastoreProjectsLocationsFederationsPatchError> ex)
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

<code>[MetastoreProjectsLocationsFederationsPatchRequest](src/GoogleCloudDataproc/Requests/MetastoreProjectsLocationsFederationsPatchRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Operation](src/GoogleCloudDataproc/Models/Operation.cs)</code>

**OnError**: <code>[ApiException](src/GoogleCloudDataproc/Core/Exceptions/ApiException.cs)&lt;[MetastoreProjectsLocationsFederationsPatchError](src/GoogleCloudDataproc/Errors/MetastoreProjectsLocationsFederationsPatchError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Policy2&gt; MetastoreProjectsLocationsFederationsSetIamPolicy(MetastoreProjectsLocationsFederationsSetIamPolicyRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Sets the access control policy on the specified resource. Replaces any existing policy.Can return NOT_FOUND, INVALID_ARGUMENT, and PERMISSION_DENIED errors.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.MetastoreProjectsLocationsFederationsSetIamPolicy(
        new MetastoreProjectsLocationsFederationsSetIamPolicyRequest
        {
            ProjectsId = "some example string",
            LocationsId = "some example string",
            FederationsId = "some example string",
            Body = new SetIamPolicyRequest2(),
        });
    // TODO: Handle 'response' of type Policy2
}
catch (ApiException<MetastoreProjectsLocationsFederationsSetIamPolicyError> ex)
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

<code>[MetastoreProjectsLocationsFederationsSetIamPolicyRequest](src/GoogleCloudDataproc/Requests/MetastoreProjectsLocationsFederationsSetIamPolicyRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Policy2](src/GoogleCloudDataproc/Models/Policy2.cs)</code>

**OnError**: <code>[ApiException](src/GoogleCloudDataproc/Core/Exceptions/ApiException.cs)&lt;[MetastoreProjectsLocationsFederationsSetIamPolicyError](src/GoogleCloudDataproc/Errors/MetastoreProjectsLocationsFederationsSetIamPolicyError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;TestIamPermissionsResponse&gt; MetastoreProjectsLocationsFederationsTestIamPermissions(MetastoreProjectsLocationsFederationsTestIamPermissionsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a NOT_FOUND error.Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.MetastoreProjectsLocationsFederationsTestIamPermissions(
        new MetastoreProjectsLocationsFederationsTestIamPermissionsRequest
        {
            ProjectsId = "some example string",
            LocationsId = "some example string",
            FederationsId = "some example string",
            Body = new TestIamPermissionsRequest(),
        });
    // TODO: Handle 'response' of type TestIamPermissionsResponse
}
catch (ApiException<MetastoreProjectsLocationsFederationsTestIamPermissionsError> ex)
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

<code>[MetastoreProjectsLocationsFederationsTestIamPermissionsRequest](src/GoogleCloudDataproc/Requests/MetastoreProjectsLocationsFederationsTestIamPermissionsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[TestIamPermissionsResponse](src/GoogleCloudDataproc/Models/TestIamPermissionsResponse.cs)</code>

**OnError**: <code>[ApiException](src/GoogleCloudDataproc/Core/Exceptions/ApiException.cs)&lt;[MetastoreProjectsLocationsFederationsTestIamPermissionsError](src/GoogleCloudDataproc/Errors/MetastoreProjectsLocationsFederationsTestIamPermissionsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Location&gt; MetastoreProjectsLocationsGet(MetastoreProjectsLocationsGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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
    var response = await client.MetastoreProjectsLocationsGet(new MetastoreProjectsLocationsGetRequest
    {
        ProjectsId = "some example string",
        LocationsId = "some example string",
    });
    // TODO: Handle 'response' of type Location
}
catch (ApiException<MetastoreProjectsLocationsGetError> ex)
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

<code>[MetastoreProjectsLocationsGetRequest](src/GoogleCloudDataproc/Requests/MetastoreProjectsLocationsGetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Location](src/GoogleCloudDataproc/Models/Location.cs)</code>

**OnError**: <code>[ApiException](src/GoogleCloudDataproc/Core/Exceptions/ApiException.cs)&lt;[MetastoreProjectsLocationsGetError](src/GoogleCloudDataproc/Errors/MetastoreProjectsLocationsGetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ListLocationsResponse&gt; MetastoreProjectsLocationsList(MetastoreProjectsLocationsListRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists information about the supported locations for this service.This method lists locations based on the resource scope provided in the ListLocationsRequest.name field: Global locations: If name is empty, the method lists the public locations available to all projects. Project-specific locations: If name follows the format projects/{project}, the method lists locations visible to that specific project. This includes public, private, or other project-specific locations enabled for the project.For gRPC and client library implementations, the resource name is passed as the name field. For direct service calls, the resource name is incorporated into the request path based on the specific service implementation and version.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.MetastoreProjectsLocationsList(new MetastoreProjectsLocationsListRequest
    {
        ProjectsId = "some example string",
    });
    // TODO: Handle 'response' of type ListLocationsResponse
}
catch (ApiException<MetastoreProjectsLocationsListError> ex)
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

<code>[MetastoreProjectsLocationsListRequest](src/GoogleCloudDataproc/Requests/MetastoreProjectsLocationsListRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ListLocationsResponse](src/GoogleCloudDataproc/Models/ListLocationsResponse.cs)</code>

**OnError**: <code>[ApiException](src/GoogleCloudDataproc/Core/Exceptions/ApiException.cs)&lt;[MetastoreProjectsLocationsListError](src/GoogleCloudDataproc/Errors/MetastoreProjectsLocationsListError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Operation&gt; MetastoreProjectsLocationsServicesAlterLocation(MetastoreProjectsLocationsServicesAlterLocationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Alter metadata resource location. The metadata resource can be a database, table, or partition. This functionality only updates the parent directory for the respective metadata resource and does not transfer any existing data to the new location.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.MetastoreProjectsLocationsServicesAlterLocation(
        new MetastoreProjectsLocationsServicesAlterLocationRequest
        {
            ProjectsId = "some example string",
            LocationsId = "some example string",
            ServicesId = "some example string",
            Body = new AlterMetadataResourceLocationRequest(),
        });
    // TODO: Handle 'response' of type Operation
}
catch (ApiException<MetastoreProjectsLocationsServicesAlterLocationError> ex)
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

<code>[MetastoreProjectsLocationsServicesAlterLocationRequest](src/GoogleCloudDataproc/Requests/MetastoreProjectsLocationsServicesAlterLocationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Operation](src/GoogleCloudDataproc/Models/Operation.cs)</code>

**OnError**: <code>[ApiException](src/GoogleCloudDataproc/Core/Exceptions/ApiException.cs)&lt;[MetastoreProjectsLocationsServicesAlterLocationError](src/GoogleCloudDataproc/Errors/MetastoreProjectsLocationsServicesAlterLocationError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Operation&gt; MetastoreProjectsLocationsServicesAlterTableProperties(MetastoreProjectsLocationsServicesAlterTablePropertiesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Alter metadata table properties.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.MetastoreProjectsLocationsServicesAlterTableProperties(
        new MetastoreProjectsLocationsServicesAlterTablePropertiesRequest
        {
            ProjectsId = "some example string",
            LocationsId = "some example string",
            ServicesId = "some example string",
            Body = new AlterTablePropertiesRequest(),
        });
    // TODO: Handle 'response' of type Operation
}
catch (ApiException<MetastoreProjectsLocationsServicesAlterTablePropertiesError> ex)
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

<code>[MetastoreProjectsLocationsServicesAlterTablePropertiesRequest](src/GoogleCloudDataproc/Requests/MetastoreProjectsLocationsServicesAlterTablePropertiesRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Operation](src/GoogleCloudDataproc/Models/Operation.cs)</code>

**OnError**: <code>[ApiException](src/GoogleCloudDataproc/Core/Exceptions/ApiException.cs)&lt;[MetastoreProjectsLocationsServicesAlterTablePropertiesError](src/GoogleCloudDataproc/Errors/MetastoreProjectsLocationsServicesAlterTablePropertiesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Operation&gt; MetastoreProjectsLocationsServicesBackupsCreate(MetastoreProjectsLocationsServicesBackupsCreateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a new backup in a given project and location.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.MetastoreProjectsLocationsServicesBackupsCreate(
        new MetastoreProjectsLocationsServicesBackupsCreateRequest
        {
            ProjectsId = "some example string",
            LocationsId = "some example string",
            ServicesId = "some example string",
            Body = new Backup(),
        });
    // TODO: Handle 'response' of type Operation
}
catch (ApiException<MetastoreProjectsLocationsServicesBackupsCreateError> ex)
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

<code>[MetastoreProjectsLocationsServicesBackupsCreateRequest](src/GoogleCloudDataproc/Requests/MetastoreProjectsLocationsServicesBackupsCreateRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Operation](src/GoogleCloudDataproc/Models/Operation.cs)</code>

**OnError**: <code>[ApiException](src/GoogleCloudDataproc/Core/Exceptions/ApiException.cs)&lt;[MetastoreProjectsLocationsServicesBackupsCreateError](src/GoogleCloudDataproc/Errors/MetastoreProjectsLocationsServicesBackupsCreateError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Operation&gt; MetastoreProjectsLocationsServicesBackupsDelete(MetastoreProjectsLocationsServicesBackupsDeleteRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a single backup.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.MetastoreProjectsLocationsServicesBackupsDelete(
        new MetastoreProjectsLocationsServicesBackupsDeleteRequest
        {
            ProjectsId = "some example string",
            LocationsId = "some example string",
            ServicesId = "some example string",
            BackupsId = "some example string",
        });
    // TODO: Handle 'response' of type Operation
}
catch (ApiException<MetastoreProjectsLocationsServicesBackupsDeleteError> ex)
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

<code>[MetastoreProjectsLocationsServicesBackupsDeleteRequest](src/GoogleCloudDataproc/Requests/MetastoreProjectsLocationsServicesBackupsDeleteRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Operation](src/GoogleCloudDataproc/Models/Operation.cs)</code>

**OnError**: <code>[ApiException](src/GoogleCloudDataproc/Core/Exceptions/ApiException.cs)&lt;[MetastoreProjectsLocationsServicesBackupsDeleteError](src/GoogleCloudDataproc/Errors/MetastoreProjectsLocationsServicesBackupsDeleteError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Backup&gt; MetastoreProjectsLocationsServicesBackupsGet(MetastoreProjectsLocationsServicesBackupsGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets details of a single backup.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.MetastoreProjectsLocationsServicesBackupsGet(
        new MetastoreProjectsLocationsServicesBackupsGetRequest
        {
            ProjectsId = "some example string",
            LocationsId = "some example string",
            ServicesId = "some example string",
            BackupsId = "some example string",
        });
    // TODO: Handle 'response' of type Backup
}
catch (ApiException<MetastoreProjectsLocationsServicesBackupsGetError> ex)
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

<code>[MetastoreProjectsLocationsServicesBackupsGetRequest](src/GoogleCloudDataproc/Requests/MetastoreProjectsLocationsServicesBackupsGetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Backup](src/GoogleCloudDataproc/Models/Backup.cs)</code>

**OnError**: <code>[ApiException](src/GoogleCloudDataproc/Core/Exceptions/ApiException.cs)&lt;[MetastoreProjectsLocationsServicesBackupsGetError](src/GoogleCloudDataproc/Errors/MetastoreProjectsLocationsServicesBackupsGetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Policy2&gt; MetastoreProjectsLocationsServicesBackupsGetIamPolicy(MetastoreProjectsLocationsServicesBackupsGetIamPolicyRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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
    var response = await client.MetastoreProjectsLocationsServicesBackupsGetIamPolicy(
        new MetastoreProjectsLocationsServicesBackupsGetIamPolicyRequest
        {
            ProjectsId = "some example string",
            LocationsId = "some example string",
            ServicesId = "some example string",
            BackupsId = "some example string",
        });
    // TODO: Handle 'response' of type Policy2
}
catch (ApiException<MetastoreProjectsLocationsServicesBackupsGetIamPolicyError> ex)
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

<code>[MetastoreProjectsLocationsServicesBackupsGetIamPolicyRequest](src/GoogleCloudDataproc/Requests/MetastoreProjectsLocationsServicesBackupsGetIamPolicyRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Policy2](src/GoogleCloudDataproc/Models/Policy2.cs)</code>

**OnError**: <code>[ApiException](src/GoogleCloudDataproc/Core/Exceptions/ApiException.cs)&lt;[MetastoreProjectsLocationsServicesBackupsGetIamPolicyError](src/GoogleCloudDataproc/Errors/MetastoreProjectsLocationsServicesBackupsGetIamPolicyError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ListBackupsResponse&gt; MetastoreProjectsLocationsServicesBackupsList(MetastoreProjectsLocationsServicesBackupsListRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists backups in a service.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.MetastoreProjectsLocationsServicesBackupsList(
        new MetastoreProjectsLocationsServicesBackupsListRequest
        {
            ProjectsId = "some example string",
            LocationsId = "some example string",
            ServicesId = "some example string",
        });
    // TODO: Handle 'response' of type ListBackupsResponse
}
catch (ApiException<MetastoreProjectsLocationsServicesBackupsListError> ex)
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

<code>[MetastoreProjectsLocationsServicesBackupsListRequest](src/GoogleCloudDataproc/Requests/MetastoreProjectsLocationsServicesBackupsListRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ListBackupsResponse](src/GoogleCloudDataproc/Models/ListBackupsResponse.cs)</code>

**OnError**: <code>[ApiException](src/GoogleCloudDataproc/Core/Exceptions/ApiException.cs)&lt;[MetastoreProjectsLocationsServicesBackupsListError](src/GoogleCloudDataproc/Errors/MetastoreProjectsLocationsServicesBackupsListError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Policy2&gt; MetastoreProjectsLocationsServicesBackupsSetIamPolicy(MetastoreProjectsLocationsServicesBackupsSetIamPolicyRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Sets the access control policy on the specified resource. Replaces any existing policy.Can return NOT_FOUND, INVALID_ARGUMENT, and PERMISSION_DENIED errors.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.MetastoreProjectsLocationsServicesBackupsSetIamPolicy(
        new MetastoreProjectsLocationsServicesBackupsSetIamPolicyRequest
        {
            ProjectsId = "some example string",
            LocationsId = "some example string",
            ServicesId = "some example string",
            BackupsId = "some example string",
            Body = new SetIamPolicyRequest2(),
        });
    // TODO: Handle 'response' of type Policy2
}
catch (ApiException<MetastoreProjectsLocationsServicesBackupsSetIamPolicyError> ex)
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

<code>[MetastoreProjectsLocationsServicesBackupsSetIamPolicyRequest](src/GoogleCloudDataproc/Requests/MetastoreProjectsLocationsServicesBackupsSetIamPolicyRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Policy2](src/GoogleCloudDataproc/Models/Policy2.cs)</code>

**OnError**: <code>[ApiException](src/GoogleCloudDataproc/Core/Exceptions/ApiException.cs)&lt;[MetastoreProjectsLocationsServicesBackupsSetIamPolicyError](src/GoogleCloudDataproc/Errors/MetastoreProjectsLocationsServicesBackupsSetIamPolicyError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Operation&gt; MetastoreProjectsLocationsServicesCancelMigration(MetastoreProjectsLocationsServicesCancelMigrationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Cancels the ongoing Managed Migration process.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.MetastoreProjectsLocationsServicesCancelMigration(
        new MetastoreProjectsLocationsServicesCancelMigrationRequest
        {
            ProjectsId = "some example string",
            LocationsId = "some example string",
            ServicesId = "some example string",
            Body = body,
        });
    // TODO: Handle 'response' of type Operation
}
catch (ApiException<MetastoreProjectsLocationsServicesCancelMigrationError> ex)
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

<code>[MetastoreProjectsLocationsServicesCancelMigrationRequest](src/GoogleCloudDataproc/Requests/MetastoreProjectsLocationsServicesCancelMigrationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Operation](src/GoogleCloudDataproc/Models/Operation.cs)</code>

**OnError**: <code>[ApiException](src/GoogleCloudDataproc/Core/Exceptions/ApiException.cs)&lt;[MetastoreProjectsLocationsServicesCancelMigrationError](src/GoogleCloudDataproc/Errors/MetastoreProjectsLocationsServicesCancelMigrationError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Operation&gt; MetastoreProjectsLocationsServicesCompleteMigration(MetastoreProjectsLocationsServicesCompleteMigrationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Completes the managed migration process. The Dataproc Metastore service will switch to using its own backend database after successful migration.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.MetastoreProjectsLocationsServicesCompleteMigration(
        new MetastoreProjectsLocationsServicesCompleteMigrationRequest
        {
            ProjectsId = "some example string",
            LocationsId = "some example string",
            ServicesId = "some example string",
            Body = body,
        });
    // TODO: Handle 'response' of type Operation
}
catch (ApiException<MetastoreProjectsLocationsServicesCompleteMigrationError> ex)
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

<code>[MetastoreProjectsLocationsServicesCompleteMigrationRequest](src/GoogleCloudDataproc/Requests/MetastoreProjectsLocationsServicesCompleteMigrationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Operation](src/GoogleCloudDataproc/Models/Operation.cs)</code>

**OnError**: <code>[ApiException](src/GoogleCloudDataproc/Core/Exceptions/ApiException.cs)&lt;[MetastoreProjectsLocationsServicesCompleteMigrationError](src/GoogleCloudDataproc/Errors/MetastoreProjectsLocationsServicesCompleteMigrationError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Operation&gt; MetastoreProjectsLocationsServicesCreate(MetastoreProjectsLocationsServicesCreateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a metastore service in a project and location.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.MetastoreProjectsLocationsServicesCreate(
        new MetastoreProjectsLocationsServicesCreateRequest
        {
            ProjectsId = "some example string",
            LocationsId = "some example string",
            Body = new Service(),
        });
    // TODO: Handle 'response' of type Operation
}
catch (ApiException<MetastoreProjectsLocationsServicesCreateError> ex)
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

<code>[MetastoreProjectsLocationsServicesCreateRequest](src/GoogleCloudDataproc/Requests/MetastoreProjectsLocationsServicesCreateRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Operation](src/GoogleCloudDataproc/Models/Operation.cs)</code>

**OnError**: <code>[ApiException](src/GoogleCloudDataproc/Core/Exceptions/ApiException.cs)&lt;[MetastoreProjectsLocationsServicesCreateError](src/GoogleCloudDataproc/Errors/MetastoreProjectsLocationsServicesCreateError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Policy2&gt; MetastoreProjectsLocationsServicesDatabasesGetIamPolicy(MetastoreProjectsLocationsServicesDatabasesGetIamPolicyRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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
    var response = await client.MetastoreProjectsLocationsServicesDatabasesGetIamPolicy(
        new MetastoreProjectsLocationsServicesDatabasesGetIamPolicyRequest
        {
            ProjectsId = "some example string",
            LocationsId = "some example string",
            ServicesId = "some example string",
            DatabasesId = "some example string",
        });
    // TODO: Handle 'response' of type Policy2
}
catch (ApiException<MetastoreProjectsLocationsServicesDatabasesGetIamPolicyError> ex)
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

<code>[MetastoreProjectsLocationsServicesDatabasesGetIamPolicyRequest](src/GoogleCloudDataproc/Requests/MetastoreProjectsLocationsServicesDatabasesGetIamPolicyRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Policy2](src/GoogleCloudDataproc/Models/Policy2.cs)</code>

**OnError**: <code>[ApiException](src/GoogleCloudDataproc/Core/Exceptions/ApiException.cs)&lt;[MetastoreProjectsLocationsServicesDatabasesGetIamPolicyError](src/GoogleCloudDataproc/Errors/MetastoreProjectsLocationsServicesDatabasesGetIamPolicyError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Policy2&gt; MetastoreProjectsLocationsServicesDatabasesSetIamPolicy(MetastoreProjectsLocationsServicesDatabasesSetIamPolicyRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Sets the access control policy on the specified resource. Replaces any existing policy.Can return NOT_FOUND, INVALID_ARGUMENT, and PERMISSION_DENIED errors.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.MetastoreProjectsLocationsServicesDatabasesSetIamPolicy(
        new MetastoreProjectsLocationsServicesDatabasesSetIamPolicyRequest
        {
            ProjectsId = "some example string",
            LocationsId = "some example string",
            ServicesId = "some example string",
            DatabasesId = "some example string",
            Body = new SetIamPolicyRequest2(),
        });
    // TODO: Handle 'response' of type Policy2
}
catch (ApiException<MetastoreProjectsLocationsServicesDatabasesSetIamPolicyError> ex)
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

<code>[MetastoreProjectsLocationsServicesDatabasesSetIamPolicyRequest](src/GoogleCloudDataproc/Requests/MetastoreProjectsLocationsServicesDatabasesSetIamPolicyRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Policy2](src/GoogleCloudDataproc/Models/Policy2.cs)</code>

**OnError**: <code>[ApiException](src/GoogleCloudDataproc/Core/Exceptions/ApiException.cs)&lt;[MetastoreProjectsLocationsServicesDatabasesSetIamPolicyError](src/GoogleCloudDataproc/Errors/MetastoreProjectsLocationsServicesDatabasesSetIamPolicyError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Policy2&gt; MetastoreProjectsLocationsServicesDatabasesTablesGetIamPolicy(MetastoreProjectsLocationsServicesDatabasesTablesGetIamPolicyRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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
    var response = await client.MetastoreProjectsLocationsServicesDatabasesTablesGetIamPolicy(
        new MetastoreProjectsLocationsServicesDatabasesTablesGetIamPolicyRequest
        {
            ProjectsId = "some example string",
            LocationsId = "some example string",
            ServicesId = "some example string",
            DatabasesId = "some example string",
            TablesId = "some example string",
        });
    // TODO: Handle 'response' of type Policy2
}
catch (ApiException<MetastoreProjectsLocationsServicesDatabasesTablesGetIamPolicyError> ex)
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

<code>[MetastoreProjectsLocationsServicesDatabasesTablesGetIamPolicyRequest](src/GoogleCloudDataproc/Requests/MetastoreProjectsLocationsServicesDatabasesTablesGetIamPolicyRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Policy2](src/GoogleCloudDataproc/Models/Policy2.cs)</code>

**OnError**: <code>[ApiException](src/GoogleCloudDataproc/Core/Exceptions/ApiException.cs)&lt;[MetastoreProjectsLocationsServicesDatabasesTablesGetIamPolicyError](src/GoogleCloudDataproc/Errors/MetastoreProjectsLocationsServicesDatabasesTablesGetIamPolicyError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Policy2&gt; MetastoreProjectsLocationsServicesDatabasesTablesSetIamPolicy(MetastoreProjectsLocationsServicesDatabasesTablesSetIamPolicyRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Sets the access control policy on the specified resource. Replaces any existing policy.Can return NOT_FOUND, INVALID_ARGUMENT, and PERMISSION_DENIED errors.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.MetastoreProjectsLocationsServicesDatabasesTablesSetIamPolicy(
        new MetastoreProjectsLocationsServicesDatabasesTablesSetIamPolicyRequest
        {
            ProjectsId = "some example string",
            LocationsId = "some example string",
            ServicesId = "some example string",
            DatabasesId = "some example string",
            TablesId = "some example string",
            Body = new SetIamPolicyRequest2(),
        });
    // TODO: Handle 'response' of type Policy2
}
catch (ApiException<MetastoreProjectsLocationsServicesDatabasesTablesSetIamPolicyError> ex)
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

<code>[MetastoreProjectsLocationsServicesDatabasesTablesSetIamPolicyRequest](src/GoogleCloudDataproc/Requests/MetastoreProjectsLocationsServicesDatabasesTablesSetIamPolicyRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Policy2](src/GoogleCloudDataproc/Models/Policy2.cs)</code>

**OnError**: <code>[ApiException](src/GoogleCloudDataproc/Core/Exceptions/ApiException.cs)&lt;[MetastoreProjectsLocationsServicesDatabasesTablesSetIamPolicyError](src/GoogleCloudDataproc/Errors/MetastoreProjectsLocationsServicesDatabasesTablesSetIamPolicyError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Operation&gt; MetastoreProjectsLocationsServicesDelete(MetastoreProjectsLocationsServicesDeleteRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a single service.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.MetastoreProjectsLocationsServicesDelete(
        new MetastoreProjectsLocationsServicesDeleteRequest
        {
            ProjectsId = "some example string",
            LocationsId = "some example string",
            ServicesId = "some example string",
        });
    // TODO: Handle 'response' of type Operation
}
catch (ApiException<MetastoreProjectsLocationsServicesDeleteError> ex)
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

<code>[MetastoreProjectsLocationsServicesDeleteRequest](src/GoogleCloudDataproc/Requests/MetastoreProjectsLocationsServicesDeleteRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Operation](src/GoogleCloudDataproc/Models/Operation.cs)</code>

**OnError**: <code>[ApiException](src/GoogleCloudDataproc/Core/Exceptions/ApiException.cs)&lt;[MetastoreProjectsLocationsServicesDeleteError](src/GoogleCloudDataproc/Errors/MetastoreProjectsLocationsServicesDeleteError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Operation&gt; MetastoreProjectsLocationsServicesExportMetadata(MetastoreProjectsLocationsServicesExportMetadataRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Exports metadata from a service.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.MetastoreProjectsLocationsServicesExportMetadata(
        new MetastoreProjectsLocationsServicesExportMetadataRequest
        {
            ProjectsId = "some example string",
            LocationsId = "some example string",
            ServicesId = "some example string",
            Body = new ExportMetadataRequest(),
        });
    // TODO: Handle 'response' of type Operation
}
catch (ApiException<MetastoreProjectsLocationsServicesExportMetadataError> ex)
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

<code>[MetastoreProjectsLocationsServicesExportMetadataRequest](src/GoogleCloudDataproc/Requests/MetastoreProjectsLocationsServicesExportMetadataRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Operation](src/GoogleCloudDataproc/Models/Operation.cs)</code>

**OnError**: <code>[ApiException](src/GoogleCloudDataproc/Core/Exceptions/ApiException.cs)&lt;[MetastoreProjectsLocationsServicesExportMetadataError](src/GoogleCloudDataproc/Errors/MetastoreProjectsLocationsServicesExportMetadataError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Service&gt; MetastoreProjectsLocationsServicesGet(MetastoreProjectsLocationsServicesGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets the details of a single service.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.MetastoreProjectsLocationsServicesGet(new MetastoreProjectsLocationsServicesGetRequest
    {
        ProjectsId = "some example string",
        LocationsId = "some example string",
        ServicesId = "some example string",
    });
    // TODO: Handle 'response' of type Service
}
catch (ApiException<MetastoreProjectsLocationsServicesGetError> ex)
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

<code>[MetastoreProjectsLocationsServicesGetRequest](src/GoogleCloudDataproc/Requests/MetastoreProjectsLocationsServicesGetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Service](src/GoogleCloudDataproc/Models/Service.cs)</code>

**OnError**: <code>[ApiException](src/GoogleCloudDataproc/Core/Exceptions/ApiException.cs)&lt;[MetastoreProjectsLocationsServicesGetError](src/GoogleCloudDataproc/Errors/MetastoreProjectsLocationsServicesGetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Policy2&gt; MetastoreProjectsLocationsServicesGetIamPolicy(MetastoreProjectsLocationsServicesGetIamPolicyRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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
    var response = await client.MetastoreProjectsLocationsServicesGetIamPolicy(
        new MetastoreProjectsLocationsServicesGetIamPolicyRequest
        {
            ProjectsId = "some example string",
            LocationsId = "some example string",
            ServicesId = "some example string",
        });
    // TODO: Handle 'response' of type Policy2
}
catch (ApiException<MetastoreProjectsLocationsServicesGetIamPolicyError> ex)
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

<code>[MetastoreProjectsLocationsServicesGetIamPolicyRequest](src/GoogleCloudDataproc/Requests/MetastoreProjectsLocationsServicesGetIamPolicyRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Policy2](src/GoogleCloudDataproc/Models/Policy2.cs)</code>

**OnError**: <code>[ApiException](src/GoogleCloudDataproc/Core/Exceptions/ApiException.cs)&lt;[MetastoreProjectsLocationsServicesGetIamPolicyError](src/GoogleCloudDataproc/Errors/MetastoreProjectsLocationsServicesGetIamPolicyError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ListServicesResponse&gt; MetastoreProjectsLocationsServicesList(MetastoreProjectsLocationsServicesListRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists services in a project and location.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.MetastoreProjectsLocationsServicesList(new MetastoreProjectsLocationsServicesListRequest
    {
        ProjectsId = "some example string",
        LocationsId = "some example string",
    });
    // TODO: Handle 'response' of type ListServicesResponse
}
catch (ApiException<MetastoreProjectsLocationsServicesListError> ex)
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

<code>[MetastoreProjectsLocationsServicesListRequest](src/GoogleCloudDataproc/Requests/MetastoreProjectsLocationsServicesListRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ListServicesResponse](src/GoogleCloudDataproc/Models/ListServicesResponse.cs)</code>

**OnError**: <code>[ApiException](src/GoogleCloudDataproc/Core/Exceptions/ApiException.cs)&lt;[MetastoreProjectsLocationsServicesListError](src/GoogleCloudDataproc/Errors/MetastoreProjectsLocationsServicesListError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Operation&gt; MetastoreProjectsLocationsServicesMetadataImportsCreate(MetastoreProjectsLocationsServicesMetadataImportsCreateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a new MetadataImport in a given project and location.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.MetastoreProjectsLocationsServicesMetadataImportsCreate(
        new MetastoreProjectsLocationsServicesMetadataImportsCreateRequest
        {
            ProjectsId = "some example string",
            LocationsId = "some example string",
            ServicesId = "some example string",
            Body = new MetadataImport(),
        });
    // TODO: Handle 'response' of type Operation
}
catch (ApiException<MetastoreProjectsLocationsServicesMetadataImportsCreateError> ex)
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

<code>[MetastoreProjectsLocationsServicesMetadataImportsCreateRequest](src/GoogleCloudDataproc/Requests/MetastoreProjectsLocationsServicesMetadataImportsCreateRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Operation](src/GoogleCloudDataproc/Models/Operation.cs)</code>

**OnError**: <code>[ApiException](src/GoogleCloudDataproc/Core/Exceptions/ApiException.cs)&lt;[MetastoreProjectsLocationsServicesMetadataImportsCreateError](src/GoogleCloudDataproc/Errors/MetastoreProjectsLocationsServicesMetadataImportsCreateError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;MetadataImport&gt; MetastoreProjectsLocationsServicesMetadataImportsGet(MetastoreProjectsLocationsServicesMetadataImportsGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets details of a single import.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.MetastoreProjectsLocationsServicesMetadataImportsGet(
        new MetastoreProjectsLocationsServicesMetadataImportsGetRequest
        {
            ProjectsId = "some example string",
            LocationsId = "some example string",
            ServicesId = "some example string",
            MetadataImportsId = "some example string",
        });
    // TODO: Handle 'response' of type MetadataImport
}
catch (ApiException<MetastoreProjectsLocationsServicesMetadataImportsGetError> ex)
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

<code>[MetastoreProjectsLocationsServicesMetadataImportsGetRequest](src/GoogleCloudDataproc/Requests/MetastoreProjectsLocationsServicesMetadataImportsGetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[MetadataImport](src/GoogleCloudDataproc/Models/MetadataImport.cs)</code>

**OnError**: <code>[ApiException](src/GoogleCloudDataproc/Core/Exceptions/ApiException.cs)&lt;[MetastoreProjectsLocationsServicesMetadataImportsGetError](src/GoogleCloudDataproc/Errors/MetastoreProjectsLocationsServicesMetadataImportsGetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ListMetadataImportsResponse&gt; MetastoreProjectsLocationsServicesMetadataImportsList(MetastoreProjectsLocationsServicesMetadataImportsListRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists imports in a service.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.MetastoreProjectsLocationsServicesMetadataImportsList(
        new MetastoreProjectsLocationsServicesMetadataImportsListRequest
        {
            ProjectsId = "some example string",
            LocationsId = "some example string",
            ServicesId = "some example string",
        });
    // TODO: Handle 'response' of type ListMetadataImportsResponse
}
catch (ApiException<MetastoreProjectsLocationsServicesMetadataImportsListError> ex)
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

<code>[MetastoreProjectsLocationsServicesMetadataImportsListRequest](src/GoogleCloudDataproc/Requests/MetastoreProjectsLocationsServicesMetadataImportsListRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ListMetadataImportsResponse](src/GoogleCloudDataproc/Models/ListMetadataImportsResponse.cs)</code>

**OnError**: <code>[ApiException](src/GoogleCloudDataproc/Core/Exceptions/ApiException.cs)&lt;[MetastoreProjectsLocationsServicesMetadataImportsListError](src/GoogleCloudDataproc/Errors/MetastoreProjectsLocationsServicesMetadataImportsListError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Operation&gt; MetastoreProjectsLocationsServicesMetadataImportsPatch(MetastoreProjectsLocationsServicesMetadataImportsPatchRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates a single import. Only the description field of MetadataImport is supported to be updated.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.MetastoreProjectsLocationsServicesMetadataImportsPatch(
        new MetastoreProjectsLocationsServicesMetadataImportsPatchRequest
        {
            ProjectsId = "some example string",
            LocationsId = "some example string",
            ServicesId = "some example string",
            MetadataImportsId = "some example string",
            Body = new MetadataImport(),
        });
    // TODO: Handle 'response' of type Operation
}
catch (ApiException<MetastoreProjectsLocationsServicesMetadataImportsPatchError> ex)
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

<code>[MetastoreProjectsLocationsServicesMetadataImportsPatchRequest](src/GoogleCloudDataproc/Requests/MetastoreProjectsLocationsServicesMetadataImportsPatchRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Operation](src/GoogleCloudDataproc/Models/Operation.cs)</code>

**OnError**: <code>[ApiException](src/GoogleCloudDataproc/Core/Exceptions/ApiException.cs)&lt;[MetastoreProjectsLocationsServicesMetadataImportsPatchError](src/GoogleCloudDataproc/Errors/MetastoreProjectsLocationsServicesMetadataImportsPatchError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Operation&gt; MetastoreProjectsLocationsServicesMigrationExecutionsDelete(MetastoreProjectsLocationsServicesMigrationExecutionsDeleteRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a single migration execution.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.MetastoreProjectsLocationsServicesMigrationExecutionsDelete(
        new MetastoreProjectsLocationsServicesMigrationExecutionsDeleteRequest
        {
            ProjectsId = "some example string",
            LocationsId = "some example string",
            ServicesId = "some example string",
            MigrationExecutionsId = "some example string",
        });
    // TODO: Handle 'response' of type Operation
}
catch (ApiException<MetastoreProjectsLocationsServicesMigrationExecutionsDeleteError> ex)
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

<code>[MetastoreProjectsLocationsServicesMigrationExecutionsDeleteRequest](src/GoogleCloudDataproc/Requests/MetastoreProjectsLocationsServicesMigrationExecutionsDeleteRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Operation](src/GoogleCloudDataproc/Models/Operation.cs)</code>

**OnError**: <code>[ApiException](src/GoogleCloudDataproc/Core/Exceptions/ApiException.cs)&lt;[MetastoreProjectsLocationsServicesMigrationExecutionsDeleteError](src/GoogleCloudDataproc/Errors/MetastoreProjectsLocationsServicesMigrationExecutionsDeleteError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;MigrationExecution&gt; MetastoreProjectsLocationsServicesMigrationExecutionsGet(MetastoreProjectsLocationsServicesMigrationExecutionsGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets details of a single migration execution.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.MetastoreProjectsLocationsServicesMigrationExecutionsGet(
        new MetastoreProjectsLocationsServicesMigrationExecutionsGetRequest
        {
            ProjectsId = "some example string",
            LocationsId = "some example string",
            ServicesId = "some example string",
            MigrationExecutionsId = "some example string",
        });
    // TODO: Handle 'response' of type MigrationExecution
}
catch (ApiException<MetastoreProjectsLocationsServicesMigrationExecutionsGetError> ex)
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

<code>[MetastoreProjectsLocationsServicesMigrationExecutionsGetRequest](src/GoogleCloudDataproc/Requests/MetastoreProjectsLocationsServicesMigrationExecutionsGetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[MigrationExecution](src/GoogleCloudDataproc/Models/MigrationExecution.cs)</code>

**OnError**: <code>[ApiException](src/GoogleCloudDataproc/Core/Exceptions/ApiException.cs)&lt;[MetastoreProjectsLocationsServicesMigrationExecutionsGetError](src/GoogleCloudDataproc/Errors/MetastoreProjectsLocationsServicesMigrationExecutionsGetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ListMigrationExecutionsResponse&gt; MetastoreProjectsLocationsServicesMigrationExecutionsList(MetastoreProjectsLocationsServicesMigrationExecutionsListRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists migration executions on a service.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.MetastoreProjectsLocationsServicesMigrationExecutionsList(
        new MetastoreProjectsLocationsServicesMigrationExecutionsListRequest
        {
            ProjectsId = "some example string",
            LocationsId = "some example string",
            ServicesId = "some example string",
        });
    // TODO: Handle 'response' of type ListMigrationExecutionsResponse
}
catch (ApiException<MetastoreProjectsLocationsServicesMigrationExecutionsListError> ex)
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

<code>[MetastoreProjectsLocationsServicesMigrationExecutionsListRequest](src/GoogleCloudDataproc/Requests/MetastoreProjectsLocationsServicesMigrationExecutionsListRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ListMigrationExecutionsResponse](src/GoogleCloudDataproc/Models/ListMigrationExecutionsResponse.cs)</code>

**OnError**: <code>[ApiException](src/GoogleCloudDataproc/Core/Exceptions/ApiException.cs)&lt;[MetastoreProjectsLocationsServicesMigrationExecutionsListError](src/GoogleCloudDataproc/Errors/MetastoreProjectsLocationsServicesMigrationExecutionsListError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Operation&gt; MetastoreProjectsLocationsServicesMoveTableToDatabase(MetastoreProjectsLocationsServicesMoveTableToDatabaseRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Move a table to another database.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.MetastoreProjectsLocationsServicesMoveTableToDatabase(
        new MetastoreProjectsLocationsServicesMoveTableToDatabaseRequest
        {
            ProjectsId = "some example string",
            LocationsId = "some example string",
            ServicesId = "some example string",
            Body = new MoveTableToDatabaseRequest(),
        });
    // TODO: Handle 'response' of type Operation
}
catch (ApiException<MetastoreProjectsLocationsServicesMoveTableToDatabaseError> ex)
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

<code>[MetastoreProjectsLocationsServicesMoveTableToDatabaseRequest](src/GoogleCloudDataproc/Requests/MetastoreProjectsLocationsServicesMoveTableToDatabaseRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Operation](src/GoogleCloudDataproc/Models/Operation.cs)</code>

**OnError**: <code>[ApiException](src/GoogleCloudDataproc/Core/Exceptions/ApiException.cs)&lt;[MetastoreProjectsLocationsServicesMoveTableToDatabaseError](src/GoogleCloudDataproc/Errors/MetastoreProjectsLocationsServicesMoveTableToDatabaseError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Operation&gt; MetastoreProjectsLocationsServicesPatch(MetastoreProjectsLocationsServicesPatchRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates the parameters of a single service.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.MetastoreProjectsLocationsServicesPatch(
        new MetastoreProjectsLocationsServicesPatchRequest
        {
            ProjectsId = "some example string",
            LocationsId = "some example string",
            ServicesId = "some example string",
            Body = new Service(),
        });
    // TODO: Handle 'response' of type Operation
}
catch (ApiException<MetastoreProjectsLocationsServicesPatchError> ex)
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

<code>[MetastoreProjectsLocationsServicesPatchRequest](src/GoogleCloudDataproc/Requests/MetastoreProjectsLocationsServicesPatchRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Operation](src/GoogleCloudDataproc/Models/Operation.cs)</code>

**OnError**: <code>[ApiException](src/GoogleCloudDataproc/Core/Exceptions/ApiException.cs)&lt;[MetastoreProjectsLocationsServicesPatchError](src/GoogleCloudDataproc/Errors/MetastoreProjectsLocationsServicesPatchError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Operation&gt; MetastoreProjectsLocationsServicesQueryMetadata(MetastoreProjectsLocationsServicesQueryMetadataRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Query Dataproc Metastore metadata.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.MetastoreProjectsLocationsServicesQueryMetadata(
        new MetastoreProjectsLocationsServicesQueryMetadataRequest
        {
            ProjectsId = "some example string",
            LocationsId = "some example string",
            ServicesId = "some example string",
            Body = new QueryMetadataRequest(),
        });
    // TODO: Handle 'response' of type Operation
}
catch (ApiException<MetastoreProjectsLocationsServicesQueryMetadataError> ex)
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

<code>[MetastoreProjectsLocationsServicesQueryMetadataRequest](src/GoogleCloudDataproc/Requests/MetastoreProjectsLocationsServicesQueryMetadataRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Operation](src/GoogleCloudDataproc/Models/Operation.cs)</code>

**OnError**: <code>[ApiException](src/GoogleCloudDataproc/Core/Exceptions/ApiException.cs)&lt;[MetastoreProjectsLocationsServicesQueryMetadataError](src/GoogleCloudDataproc/Errors/MetastoreProjectsLocationsServicesQueryMetadataError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Operation&gt; MetastoreProjectsLocationsServicesRestore(MetastoreProjectsLocationsServicesRestoreRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Restores a service from a backup.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.MetastoreProjectsLocationsServicesRestore(
        new MetastoreProjectsLocationsServicesRestoreRequest
        {
            ProjectsId = "some example string",
            LocationsId = "some example string",
            ServicesId = "some example string",
            Body = new RestoreServiceRequest(),
        });
    // TODO: Handle 'response' of type Operation
}
catch (ApiException<MetastoreProjectsLocationsServicesRestoreError> ex)
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

<code>[MetastoreProjectsLocationsServicesRestoreRequest](src/GoogleCloudDataproc/Requests/MetastoreProjectsLocationsServicesRestoreRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Operation](src/GoogleCloudDataproc/Models/Operation.cs)</code>

**OnError**: <code>[ApiException](src/GoogleCloudDataproc/Core/Exceptions/ApiException.cs)&lt;[MetastoreProjectsLocationsServicesRestoreError](src/GoogleCloudDataproc/Errors/MetastoreProjectsLocationsServicesRestoreError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Policy2&gt; MetastoreProjectsLocationsServicesSetIamPolicy(MetastoreProjectsLocationsServicesSetIamPolicyRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Sets the access control policy on the specified resource. Replaces any existing policy.Can return NOT_FOUND, INVALID_ARGUMENT, and PERMISSION_DENIED errors.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.MetastoreProjectsLocationsServicesSetIamPolicy(
        new MetastoreProjectsLocationsServicesSetIamPolicyRequest
        {
            ProjectsId = "some example string",
            LocationsId = "some example string",
            ServicesId = "some example string",
            Body = new SetIamPolicyRequest2(),
        });
    // TODO: Handle 'response' of type Policy2
}
catch (ApiException<MetastoreProjectsLocationsServicesSetIamPolicyError> ex)
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

<code>[MetastoreProjectsLocationsServicesSetIamPolicyRequest](src/GoogleCloudDataproc/Requests/MetastoreProjectsLocationsServicesSetIamPolicyRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Policy2](src/GoogleCloudDataproc/Models/Policy2.cs)</code>

**OnError**: <code>[ApiException](src/GoogleCloudDataproc/Core/Exceptions/ApiException.cs)&lt;[MetastoreProjectsLocationsServicesSetIamPolicyError](src/GoogleCloudDataproc/Errors/MetastoreProjectsLocationsServicesSetIamPolicyError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Operation&gt; MetastoreProjectsLocationsServicesStartMigration(MetastoreProjectsLocationsServicesStartMigrationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Starts the Managed Migration process.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.MetastoreProjectsLocationsServicesStartMigration(
        new MetastoreProjectsLocationsServicesStartMigrationRequest
        {
            ProjectsId = "some example string",
            LocationsId = "some example string",
            ServicesId = "some example string",
            Body = new StartMigrationRequest(),
        });
    // TODO: Handle 'response' of type Operation
}
catch (ApiException<MetastoreProjectsLocationsServicesStartMigrationError> ex)
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

<code>[MetastoreProjectsLocationsServicesStartMigrationRequest](src/GoogleCloudDataproc/Requests/MetastoreProjectsLocationsServicesStartMigrationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Operation](src/GoogleCloudDataproc/Models/Operation.cs)</code>

**OnError**: <code>[ApiException](src/GoogleCloudDataproc/Core/Exceptions/ApiException.cs)&lt;[MetastoreProjectsLocationsServicesStartMigrationError](src/GoogleCloudDataproc/Errors/MetastoreProjectsLocationsServicesStartMigrationError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;TestIamPermissionsResponse&gt; MetastoreProjectsLocationsServicesTestIamPermissions(MetastoreProjectsLocationsServicesTestIamPermissionsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a NOT_FOUND error.Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.MetastoreProjectsLocationsServicesTestIamPermissions(
        new MetastoreProjectsLocationsServicesTestIamPermissionsRequest
        {
            ProjectsId = "some example string",
            LocationsId = "some example string",
            ServicesId = "some example string",
            Body = new TestIamPermissionsRequest(),
        });
    // TODO: Handle 'response' of type TestIamPermissionsResponse
}
catch (ApiException<MetastoreProjectsLocationsServicesTestIamPermissionsError> ex)
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

<code>[MetastoreProjectsLocationsServicesTestIamPermissionsRequest](src/GoogleCloudDataproc/Requests/MetastoreProjectsLocationsServicesTestIamPermissionsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[TestIamPermissionsResponse](src/GoogleCloudDataproc/Models/TestIamPermissionsResponse.cs)</code>

**OnError**: <code>[ApiException](src/GoogleCloudDataproc/Core/Exceptions/ApiException.cs)&lt;[MetastoreProjectsLocationsServicesTestIamPermissionsError](src/GoogleCloudDataproc/Errors/MetastoreProjectsLocationsServicesTestIamPermissionsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

