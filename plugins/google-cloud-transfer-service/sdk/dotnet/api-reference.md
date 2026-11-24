# Reference

Every operation below is shown in its throwing form. On an error status it throws `ApiException<TError>` — the status code, headers, content type and the operation's error type, `RawError` (the raw body) when the spec declares none — and where an operation offers an `…AsResult` sibling, that sibling returns `ApiResult<TResponse, TError>` instead. A request that produces no usable response surfaces as `SdkConnectionException` or `SdkTimeoutException`, a body that does not match the documented response type as `ResponseDeserializationException`, and a required credential that is not configured, or one that cannot be applied, as `AuthSchemeException`; all of them derive from `SdkException` and name the failed call. See [README → Error Handling](README.md#error-handling).

> Source: [GoogleCloudStorageTransferServiceClient](src/GoogleCloudStorageTransferService/GoogleCloudStorageTransferServiceClient.cs)

## GoogleServiceAccounts

> Source: [GoogleServiceAccounts](src/GoogleCloudStorageTransferService/Api/GoogleServiceAccounts.cs)

<details>
<summary><code>Task&lt;GoogleServiceAccount&gt; StoragetransferGoogleServiceAccountsGet(StoragetransferGoogleServiceAccountsGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the Google service account that is used by Storage Transfer Service to access buckets in the project where transfers run or in other projects. Each Google service account is associated with one Google Cloud project. Users should add this service account to the Google Cloud Storage bucket ACLs to grant access to Storage Transfer Service. This service account is created and owned by Storage Transfer Service and can only be used by Storage Transfer Service.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.GoogleServiceAccounts.StoragetransferGoogleServiceAccountsGet(
        new StoragetransferGoogleServiceAccountsGetRequest { ProjectId = "some example string" });
    // TODO: Handle 'response' of type GoogleServiceAccount
}
catch (ApiException<StoragetransferGoogleServiceAccountsGetError> ex)
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

<code>[StoragetransferGoogleServiceAccountsGetRequest](src/GoogleCloudStorageTransferService/Requests/GoogleServiceAccounts/StoragetransferGoogleServiceAccountsGetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleServiceAccount](src/GoogleCloudStorageTransferService/Models/GoogleServiceAccount.cs)</code>

**OnError**: <code>[ApiException](src/GoogleCloudStorageTransferService/Core/Exceptions/ApiException.cs)&lt;[StoragetransferGoogleServiceAccountsGetError](src/GoogleCloudStorageTransferService/Errors/StoragetransferGoogleServiceAccountsGetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Projects

> Source: [Projects](src/GoogleCloudStorageTransferService/Api/Projects.cs)

<details>
<summary><code>Task&lt;AgentPool&gt; StoragetransferProjectsAgentPoolsCreate(StoragetransferProjectsAgentPoolsCreateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates an agent pool resource.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Projects.StoragetransferProjectsAgentPoolsCreate(
        new StoragetransferProjectsAgentPoolsCreateRequest
        {
            ProjectsId = "some example string",
            Body = new AgentPool(),
        });
    // TODO: Handle 'response' of type AgentPool
}
catch (ApiException<StoragetransferProjectsAgentPoolsCreateError> ex)
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

<code>[StoragetransferProjectsAgentPoolsCreateRequest](src/GoogleCloudStorageTransferService/Requests/Projects/StoragetransferProjectsAgentPoolsCreateRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[AgentPool](src/GoogleCloudStorageTransferService/Models/AgentPool.cs)</code>

**OnError**: <code>[ApiException](src/GoogleCloudStorageTransferService/Core/Exceptions/ApiException.cs)&lt;[StoragetransferProjectsAgentPoolsCreateError](src/GoogleCloudStorageTransferService/Errors/StoragetransferProjectsAgentPoolsCreateError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;object&gt; StoragetransferProjectsAgentPoolsDelete(StoragetransferProjectsAgentPoolsDeleteRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes an agent pool.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Projects.StoragetransferProjectsAgentPoolsDelete(
        new StoragetransferProjectsAgentPoolsDeleteRequest
        {
            ProjectsId = "some example string",
            AgentPoolsId = "some example string",
        });
    // TODO: Handle 'response' of type object
}
catch (ApiException<StoragetransferProjectsAgentPoolsDeleteError> ex)
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

<code>[StoragetransferProjectsAgentPoolsDeleteRequest](src/GoogleCloudStorageTransferService/Requests/Projects/StoragetransferProjectsAgentPoolsDeleteRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>object</code>

**OnError**: <code>[ApiException](src/GoogleCloudStorageTransferService/Core/Exceptions/ApiException.cs)&lt;[StoragetransferProjectsAgentPoolsDeleteError](src/GoogleCloudStorageTransferService/Errors/StoragetransferProjectsAgentPoolsDeleteError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;AgentPool&gt; StoragetransferProjectsAgentPoolsGet(StoragetransferProjectsAgentPoolsGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets an agent pool.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Projects.StoragetransferProjectsAgentPoolsGet(
        new StoragetransferProjectsAgentPoolsGetRequest
        {
            ProjectsId = "some example string",
            AgentPoolsId = "some example string",
        });
    // TODO: Handle 'response' of type AgentPool
}
catch (ApiException<StoragetransferProjectsAgentPoolsGetError> ex)
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

<code>[StoragetransferProjectsAgentPoolsGetRequest](src/GoogleCloudStorageTransferService/Requests/Projects/StoragetransferProjectsAgentPoolsGetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[AgentPool](src/GoogleCloudStorageTransferService/Models/AgentPool.cs)</code>

**OnError**: <code>[ApiException](src/GoogleCloudStorageTransferService/Core/Exceptions/ApiException.cs)&lt;[StoragetransferProjectsAgentPoolsGetError](src/GoogleCloudStorageTransferService/Errors/StoragetransferProjectsAgentPoolsGetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ListAgentPoolsResponse&gt; StoragetransferProjectsAgentPoolsList(StoragetransferProjectsAgentPoolsListRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists agent pools.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Projects.StoragetransferProjectsAgentPoolsList(
        new StoragetransferProjectsAgentPoolsListRequest { ProjectsId = "some example string" });
    // TODO: Handle 'response' of type ListAgentPoolsResponse
}
catch (ApiException<StoragetransferProjectsAgentPoolsListError> ex)
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

<code>[StoragetransferProjectsAgentPoolsListRequest](src/GoogleCloudStorageTransferService/Requests/Projects/StoragetransferProjectsAgentPoolsListRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ListAgentPoolsResponse](src/GoogleCloudStorageTransferService/Models/ListAgentPoolsResponse.cs)</code>

**OnError**: <code>[ApiException](src/GoogleCloudStorageTransferService/Core/Exceptions/ApiException.cs)&lt;[StoragetransferProjectsAgentPoolsListError](src/GoogleCloudStorageTransferService/Errors/StoragetransferProjectsAgentPoolsListError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;AgentPool&gt; StoragetransferProjectsAgentPoolsPatch(StoragetransferProjectsAgentPoolsPatchRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates an existing agent pool resource.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Projects.StoragetransferProjectsAgentPoolsPatch(
        new StoragetransferProjectsAgentPoolsPatchRequest
        {
            ProjectsId = "some example string",
            AgentPoolsId = "some example string",
            Body = new AgentPool(),
        });
    // TODO: Handle 'response' of type AgentPool
}
catch (ApiException<StoragetransferProjectsAgentPoolsPatchError> ex)
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

<code>[StoragetransferProjectsAgentPoolsPatchRequest](src/GoogleCloudStorageTransferService/Requests/Projects/StoragetransferProjectsAgentPoolsPatchRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[AgentPool](src/GoogleCloudStorageTransferService/Models/AgentPool.cs)</code>

**OnError**: <code>[ApiException](src/GoogleCloudStorageTransferService/Core/Exceptions/ApiException.cs)&lt;[StoragetransferProjectsAgentPoolsPatchError](src/GoogleCloudStorageTransferService/Errors/StoragetransferProjectsAgentPoolsPatchError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## TransferJobs

> Source: [TransferJobs](src/GoogleCloudStorageTransferService/Api/TransferJobs.cs)

<details>
<summary><code>Task&lt;TransferJob&gt; StoragetransferTransferJobsCreate(StoragetransferTransferJobsCreateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a transfer job that runs periodically.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.TransferJobs.StoragetransferTransferJobsCreate(
        new StoragetransferTransferJobsCreateRequest { Body = new TransferJob() });
    // TODO: Handle 'response' of type TransferJob
}
catch (ApiException<StoragetransferTransferJobsCreateError> ex)
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

<code>[StoragetransferTransferJobsCreateRequest](src/GoogleCloudStorageTransferService/Requests/TransferJobs/StoragetransferTransferJobsCreateRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[TransferJob](src/GoogleCloudStorageTransferService/Models/TransferJob.cs)</code>

**OnError**: <code>[ApiException](src/GoogleCloudStorageTransferService/Core/Exceptions/ApiException.cs)&lt;[StoragetransferTransferJobsCreateError](src/GoogleCloudStorageTransferService/Errors/StoragetransferTransferJobsCreateError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;object&gt; StoragetransferTransferJobsDelete(StoragetransferTransferJobsDeleteRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a transfer job. Deleting a transfer job sets its status to DELETED.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.TransferJobs.StoragetransferTransferJobsDelete(
        new StoragetransferTransferJobsDeleteRequest
        {
            TransferJobsId = "some example string",
            ProjectId = "some example string",
        });
    // TODO: Handle 'response' of type object
}
catch (ApiException<StoragetransferTransferJobsDeleteError> ex)
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

<code>[StoragetransferTransferJobsDeleteRequest](src/GoogleCloudStorageTransferService/Requests/TransferJobs/StoragetransferTransferJobsDeleteRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>object</code>

**OnError**: <code>[ApiException](src/GoogleCloudStorageTransferService/Core/Exceptions/ApiException.cs)&lt;[StoragetransferTransferJobsDeleteError](src/GoogleCloudStorageTransferService/Errors/StoragetransferTransferJobsDeleteError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;TransferJob&gt; StoragetransferTransferJobsGet(StoragetransferTransferJobsGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets a transfer job.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.TransferJobs.StoragetransferTransferJobsGet(new StoragetransferTransferJobsGetRequest
    {
        TransferJobsId = "some example string",
        ProjectId = "some example string",
    });
    // TODO: Handle 'response' of type TransferJob
}
catch (ApiException<StoragetransferTransferJobsGetError> ex)
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

<code>[StoragetransferTransferJobsGetRequest](src/GoogleCloudStorageTransferService/Requests/TransferJobs/StoragetransferTransferJobsGetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[TransferJob](src/GoogleCloudStorageTransferService/Models/TransferJob.cs)</code>

**OnError**: <code>[ApiException](src/GoogleCloudStorageTransferService/Core/Exceptions/ApiException.cs)&lt;[StoragetransferTransferJobsGetError](src/GoogleCloudStorageTransferService/Errors/StoragetransferTransferJobsGetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ListTransferJobsResponse&gt; StoragetransferTransferJobsList(StoragetransferTransferJobsListRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists transfer jobs.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.TransferJobs.StoragetransferTransferJobsList(new StoragetransferTransferJobsListRequest
    {
        Filter = "some example string",
    });
    // TODO: Handle 'response' of type ListTransferJobsResponse
}
catch (ApiException<StoragetransferTransferJobsListError> ex)
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

<code>[StoragetransferTransferJobsListRequest](src/GoogleCloudStorageTransferService/Requests/TransferJobs/StoragetransferTransferJobsListRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ListTransferJobsResponse](src/GoogleCloudStorageTransferService/Models/ListTransferJobsResponse.cs)</code>

**OnError**: <code>[ApiException](src/GoogleCloudStorageTransferService/Core/Exceptions/ApiException.cs)&lt;[StoragetransferTransferJobsListError](src/GoogleCloudStorageTransferService/Errors/StoragetransferTransferJobsListError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;TransferJob&gt; StoragetransferTransferJobsPatch(StoragetransferTransferJobsPatchRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates a transfer job. Updating a job's transfer spec does not affect transfer operations that are running already. **Note:** The job's status field can be modified using this RPC (for example, to set a job's status to DELETED, DISABLED, or ENABLED).

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.TransferJobs.StoragetransferTransferJobsPatch(
        new StoragetransferTransferJobsPatchRequest
        {
            TransferJobsId = "some example string",
            Body = new UpdateTransferJobRequest(),
        });
    // TODO: Handle 'response' of type TransferJob
}
catch (ApiException<StoragetransferTransferJobsPatchError> ex)
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

<code>[StoragetransferTransferJobsPatchRequest](src/GoogleCloudStorageTransferService/Requests/TransferJobs/StoragetransferTransferJobsPatchRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[TransferJob](src/GoogleCloudStorageTransferService/Models/TransferJob.cs)</code>

**OnError**: <code>[ApiException](src/GoogleCloudStorageTransferService/Core/Exceptions/ApiException.cs)&lt;[StoragetransferTransferJobsPatchError](src/GoogleCloudStorageTransferService/Errors/StoragetransferTransferJobsPatchError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Operation&gt; StoragetransferTransferJobsRun(StoragetransferTransferJobsRunRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Starts a new operation for the specified transfer job. A `TransferJob` has a maximum of one active `TransferOperation`. If this method is called while a `TransferOperation` is active, an error is returned.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.TransferJobs.StoragetransferTransferJobsRun(new StoragetransferTransferJobsRunRequest
    {
        TransferJobsId = "some example string",
        Body = new RunTransferJobRequest(),
    });
    // TODO: Handle 'response' of type Operation
}
catch (ApiException<StoragetransferTransferJobsRunError> ex)
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

<code>[StoragetransferTransferJobsRunRequest](src/GoogleCloudStorageTransferService/Requests/TransferJobs/StoragetransferTransferJobsRunRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Operation](src/GoogleCloudStorageTransferService/Models/Operation.cs)</code>

**OnError**: <code>[ApiException](src/GoogleCloudStorageTransferService/Core/Exceptions/ApiException.cs)&lt;[StoragetransferTransferJobsRunError](src/GoogleCloudStorageTransferService/Errors/StoragetransferTransferJobsRunError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## TransferOperations

> Source: [TransferOperations](src/GoogleCloudStorageTransferService/Api/TransferOperations.cs)

<details>
<summary><code>Task&lt;object&gt; StoragetransferTransferOperationsCancel(StoragetransferTransferOperationsCancelRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Cancels a transfer. Use the transferOperations.get method to check if the cancellation succeeded or if the operation completed despite the `cancel` request. When you cancel an operation, the currently running transfer is interrupted. For recurring transfer jobs, the next instance of the transfer job will still run. For example, if your job is configured to run every day at 1pm and you cancel Monday's operation at 1:05pm, Monday's transfer will stop. However, a transfer job will still be attempted on Tuesday. This applies only to currently running operations. If an operation is not currently running, `cancel` does nothing. *Caution:* Canceling a transfer job can leave your data in an unknown state. We recommend that you restore the state at both the destination and the source after the `cancel` request completes so that your data is in a consistent state. When you cancel a job, the next job computes a delta of files and may repair any inconsistent state. For instance, if you run a job every day, and today's job found 10 new files and transferred five files before you canceled the job, tomorrow's transfer operation will compute a new delta with the five files that were not copied today plus any new files discovered tomorrow.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.TransferOperations.StoragetransferTransferOperationsCancel(
        new StoragetransferTransferOperationsCancelRequest
        {
            TransferOperationsId = "some example string",
            Body = body,
        });
    // TODO: Handle 'response' of type object
}
catch (ApiException<StoragetransferTransferOperationsCancelError> ex)
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

<code>[StoragetransferTransferOperationsCancelRequest](src/GoogleCloudStorageTransferService/Requests/TransferOperations/StoragetransferTransferOperationsCancelRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>object</code>

**OnError**: <code>[ApiException](src/GoogleCloudStorageTransferService/Core/Exceptions/ApiException.cs)&lt;[StoragetransferTransferOperationsCancelError](src/GoogleCloudStorageTransferService/Errors/StoragetransferTransferOperationsCancelError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Operation&gt; StoragetransferTransferOperationsGet(StoragetransferTransferOperationsGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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
    var response = await client.TransferOperations.StoragetransferTransferOperationsGet(
        new StoragetransferTransferOperationsGetRequest { TransferOperationsId = "some example string" });
    // TODO: Handle 'response' of type Operation
}
catch (ApiException<StoragetransferTransferOperationsGetError> ex)
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

<code>[StoragetransferTransferOperationsGetRequest](src/GoogleCloudStorageTransferService/Requests/TransferOperations/StoragetransferTransferOperationsGetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Operation](src/GoogleCloudStorageTransferService/Models/Operation.cs)</code>

**OnError**: <code>[ApiException](src/GoogleCloudStorageTransferService/Core/Exceptions/ApiException.cs)&lt;[StoragetransferTransferOperationsGetError](src/GoogleCloudStorageTransferService/Errors/StoragetransferTransferOperationsGetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ListOperationsResponse&gt; StoragetransferTransferOperationsList(StoragetransferTransferOperationsListRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists transfer operations. Operations are ordered by their creation time in reverse chronological order.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.TransferOperations.StoragetransferTransferOperationsList(
        new StoragetransferTransferOperationsListRequest { Filter = "some example string" });
    // TODO: Handle 'response' of type ListOperationsResponse
}
catch (ApiException<StoragetransferTransferOperationsListError> ex)
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

<code>[StoragetransferTransferOperationsListRequest](src/GoogleCloudStorageTransferService/Requests/TransferOperations/StoragetransferTransferOperationsListRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ListOperationsResponse](src/GoogleCloudStorageTransferService/Models/ListOperationsResponse.cs)</code>

**OnError**: <code>[ApiException](src/GoogleCloudStorageTransferService/Core/Exceptions/ApiException.cs)&lt;[StoragetransferTransferOperationsListError](src/GoogleCloudStorageTransferService/Errors/StoragetransferTransferOperationsListError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;object&gt; StoragetransferTransferOperationsPause(StoragetransferTransferOperationsPauseRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Pauses a transfer operation.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.TransferOperations.StoragetransferTransferOperationsPause(
        new StoragetransferTransferOperationsPauseRequest
        {
            TransferOperationsId = "some example string",
            Body = body,
        });
    // TODO: Handle 'response' of type object
}
catch (ApiException<StoragetransferTransferOperationsPauseError> ex)
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

<code>[StoragetransferTransferOperationsPauseRequest](src/GoogleCloudStorageTransferService/Requests/TransferOperations/StoragetransferTransferOperationsPauseRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>object</code>

**OnError**: <code>[ApiException](src/GoogleCloudStorageTransferService/Core/Exceptions/ApiException.cs)&lt;[StoragetransferTransferOperationsPauseError](src/GoogleCloudStorageTransferService/Errors/StoragetransferTransferOperationsPauseError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;object&gt; StoragetransferTransferOperationsResume(StoragetransferTransferOperationsResumeRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Resumes a transfer operation that is paused.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.TransferOperations.StoragetransferTransferOperationsResume(
        new StoragetransferTransferOperationsResumeRequest
        {
            TransferOperationsId = "some example string",
            Body = body,
        });
    // TODO: Handle 'response' of type object
}
catch (ApiException<StoragetransferTransferOperationsResumeError> ex)
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

<code>[StoragetransferTransferOperationsResumeRequest](src/GoogleCloudStorageTransferService/Requests/TransferOperations/StoragetransferTransferOperationsResumeRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>object</code>

**OnError**: <code>[ApiException](src/GoogleCloudStorageTransferService/Core/Exceptions/ApiException.cs)&lt;[StoragetransferTransferOperationsResumeError](src/GoogleCloudStorageTransferService/Errors/StoragetransferTransferOperationsResumeError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

