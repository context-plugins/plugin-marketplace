# Reference

Every operation below is shown in its throwing form. On an error status it throws `ApiException<TError>` — the status code, headers, content type and the operation's error type, `RawError` (the raw body) when the spec declares none — and where an operation offers an `…AsResult` sibling, that sibling returns `ApiResult<TResponse, TError>` instead. A request that produces no usable response surfaces as `SdkConnectionException` or `SdkTimeoutException`, a body that does not match the documented response type as `ResponseDeserializationException`, and a required credential that is not configured, or one that cannot be applied, as `AuthSchemeException`; all of them derive from `SdkException` and name the failed call. See [README → Error Handling](README.md#error-handling).

> Source: [GoogleCloudTasksClient](src/GoogleCloudTasks/GoogleCloudTasksClient.cs)

<details>
<summary><code>Task&lt;Location&gt; CloudtasksProjectsLocationsGet(CloudtasksProjectsLocationsGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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
    var response = await client.CloudtasksProjectsLocationsGet(new CloudtasksProjectsLocationsGetRequest
    {
        ProjectsId = "some example string",
        LocationsId = "some example string",
    });
    // TODO: Handle 'response' of type Location
}
catch (ApiException<CloudtasksProjectsLocationsGetError> ex)
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

<code>[CloudtasksProjectsLocationsGetRequest](src/GoogleCloudTasks/Requests/CloudtasksProjectsLocationsGetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Location](src/GoogleCloudTasks/Models/Location.cs)</code>

**OnError**: <code>[ApiException](src/GoogleCloudTasks/Core/Exceptions/ApiException.cs)&lt;[CloudtasksProjectsLocationsGetError](src/GoogleCloudTasks/Errors/CloudtasksProjectsLocationsGetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;CmekConfig&gt; CloudtasksProjectsLocationsGetCmekConfig(CloudtasksProjectsLocationsGetCmekConfigRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets the CMEK config. Gets the Customer Managed Encryption Key configured with the Cloud Tasks location. By default there is no `kms_key` configured.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.CloudtasksProjectsLocationsGetCmekConfig(
        new CloudtasksProjectsLocationsGetCmekConfigRequest
        {
            ProjectsId = "some example string",
            LocationsId = "some example string",
        });
    // TODO: Handle 'response' of type CmekConfig
}
catch (ApiException<CloudtasksProjectsLocationsGetCmekConfigError> ex)
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

<code>[CloudtasksProjectsLocationsGetCmekConfigRequest](src/GoogleCloudTasks/Requests/CloudtasksProjectsLocationsGetCmekConfigRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CmekConfig](src/GoogleCloudTasks/Models/CmekConfig.cs)</code>

**OnError**: <code>[ApiException](src/GoogleCloudTasks/Core/Exceptions/ApiException.cs)&lt;[CloudtasksProjectsLocationsGetCmekConfigError](src/GoogleCloudTasks/Errors/CloudtasksProjectsLocationsGetCmekConfigError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ListLocationsResponse&gt; CloudtasksProjectsLocationsList(CloudtasksProjectsLocationsListRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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
    var response = await client.CloudtasksProjectsLocationsList(new CloudtasksProjectsLocationsListRequest
    {
        ProjectsId = "some example string",
    });
    // TODO: Handle 'response' of type ListLocationsResponse
}
catch (ApiException<CloudtasksProjectsLocationsListError> ex)
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

<code>[CloudtasksProjectsLocationsListRequest](src/GoogleCloudTasks/Requests/CloudtasksProjectsLocationsListRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ListLocationsResponse](src/GoogleCloudTasks/Models/ListLocationsResponse.cs)</code>

**OnError**: <code>[ApiException](src/GoogleCloudTasks/Core/Exceptions/ApiException.cs)&lt;[CloudtasksProjectsLocationsListError](src/GoogleCloudTasks/Errors/CloudtasksProjectsLocationsListError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Operation&gt; CloudtasksProjectsLocationsOperationsGet(CloudtasksProjectsLocationsOperationsGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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
    var response = await client.CloudtasksProjectsLocationsOperationsGet(
        new CloudtasksProjectsLocationsOperationsGetRequest
        {
            ProjectsId = "some example string",
            LocationsId = "some example string",
            OperationsId = "some example string",
        });
    // TODO: Handle 'response' of type Operation
}
catch (ApiException<CloudtasksProjectsLocationsOperationsGetError> ex)
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

<code>[CloudtasksProjectsLocationsOperationsGetRequest](src/GoogleCloudTasks/Requests/CloudtasksProjectsLocationsOperationsGetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Operation](src/GoogleCloudTasks/Models/Operation.cs)</code>

**OnError**: <code>[ApiException](src/GoogleCloudTasks/Core/Exceptions/ApiException.cs)&lt;[CloudtasksProjectsLocationsOperationsGetError](src/GoogleCloudTasks/Errors/CloudtasksProjectsLocationsOperationsGetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;QueueModel&gt; CloudtasksProjectsLocationsQueuesCreate(CloudtasksProjectsLocationsQueuesCreateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a queue. Queues created with this method allow tasks to live for a maximum of 31 days. After a task is 31 days old, the task will be deleted regardless of whether it was dispatched or not. WARNING: Using this method may have unintended side effects if you are using an App Engine `queue.yaml` or `queue.xml` file to manage your queues. Read Overview of Queue Management and queue.yaml before using this method.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.CloudtasksProjectsLocationsQueuesCreate(
        new CloudtasksProjectsLocationsQueuesCreateRequest
        {
            ProjectsId = "some example string",
            LocationsId = "some example string",
            Body = new QueueModel(),
        });
    // TODO: Handle 'response' of type QueueModel
}
catch (ApiException<CloudtasksProjectsLocationsQueuesCreateError> ex)
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

<code>[CloudtasksProjectsLocationsQueuesCreateRequest](src/GoogleCloudTasks/Requests/CloudtasksProjectsLocationsQueuesCreateRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[QueueModel](src/GoogleCloudTasks/Models/QueueModel.cs)</code>

**OnError**: <code>[ApiException](src/GoogleCloudTasks/Core/Exceptions/ApiException.cs)&lt;[CloudtasksProjectsLocationsQueuesCreateError](src/GoogleCloudTasks/Errors/CloudtasksProjectsLocationsQueuesCreateError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;object&gt; CloudtasksProjectsLocationsQueuesDelete(CloudtasksProjectsLocationsQueuesDeleteRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a queue. This command will delete the queue even if it has tasks in it. Note: If you delete a queue, you may be prevented from creating a new queue with the same name as the deleted queue for a tombstone window of up to 3 days. During this window, the CreateQueue operation may appear to recreate the queue, but this can be misleading. If you attempt to create a queue with the same name as one that is in the tombstone window, run GetQueue to confirm that the queue creation was successful. If GetQueue returns 200 response code, your queue was successfully created with the name of the previously deleted queue. Otherwise, your queue did not successfully recreate. WARNING: Using this method may have unintended side effects if you are using an App Engine `queue.yaml` or `queue.xml` file to manage your queues. Read Overview of Queue Management and queue.yaml before using this method.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.CloudtasksProjectsLocationsQueuesDelete(
        new CloudtasksProjectsLocationsQueuesDeleteRequest
        {
            ProjectsId = "some example string",
            LocationsId = "some example string",
            QueuesId = "some example string",
        });
    // TODO: Handle 'response' of type object
}
catch (ApiException<CloudtasksProjectsLocationsQueuesDeleteError> ex)
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

<code>[CloudtasksProjectsLocationsQueuesDeleteRequest](src/GoogleCloudTasks/Requests/CloudtasksProjectsLocationsQueuesDeleteRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>object</code>

**OnError**: <code>[ApiException](src/GoogleCloudTasks/Core/Exceptions/ApiException.cs)&lt;[CloudtasksProjectsLocationsQueuesDeleteError](src/GoogleCloudTasks/Errors/CloudtasksProjectsLocationsQueuesDeleteError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;QueueModel&gt; CloudtasksProjectsLocationsQueuesGet(CloudtasksProjectsLocationsQueuesGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets a queue.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.CloudtasksProjectsLocationsQueuesGet(new CloudtasksProjectsLocationsQueuesGetRequest
    {
        ProjectsId = "some example string",
        LocationsId = "some example string",
        QueuesId = "some example string",
    });
    // TODO: Handle 'response' of type QueueModel
}
catch (ApiException<CloudtasksProjectsLocationsQueuesGetError> ex)
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

<code>[CloudtasksProjectsLocationsQueuesGetRequest](src/GoogleCloudTasks/Requests/CloudtasksProjectsLocationsQueuesGetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[QueueModel](src/GoogleCloudTasks/Models/QueueModel.cs)</code>

**OnError**: <code>[ApiException](src/GoogleCloudTasks/Core/Exceptions/ApiException.cs)&lt;[CloudtasksProjectsLocationsQueuesGetError](src/GoogleCloudTasks/Errors/CloudtasksProjectsLocationsQueuesGetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Policy&gt; CloudtasksProjectsLocationsQueuesGetIamPolicy(CloudtasksProjectsLocationsQueuesGetIamPolicyRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets the access control policy for a Queue. Returns an empty policy if the resource exists and does not have a policy set. Authorization requires the following Google IAM permission on the specified resource parent: * `cloudtasks.queues.getIamPolicy`

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.CloudtasksProjectsLocationsQueuesGetIamPolicy(
        new CloudtasksProjectsLocationsQueuesGetIamPolicyRequest
        {
            ProjectsId = "some example string",
            LocationsId = "some example string",
            QueuesId = "some example string",
            Body = new GetIamPolicyRequest(),
        });
    // TODO: Handle 'response' of type Policy
}
catch (ApiException<CloudtasksProjectsLocationsQueuesGetIamPolicyError> ex)
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

<code>[CloudtasksProjectsLocationsQueuesGetIamPolicyRequest](src/GoogleCloudTasks/Requests/CloudtasksProjectsLocationsQueuesGetIamPolicyRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Policy](src/GoogleCloudTasks/Models/Policy.cs)</code>

**OnError**: <code>[ApiException](src/GoogleCloudTasks/Core/Exceptions/ApiException.cs)&lt;[CloudtasksProjectsLocationsQueuesGetIamPolicyError](src/GoogleCloudTasks/Errors/CloudtasksProjectsLocationsQueuesGetIamPolicyError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ListQueuesResponse&gt; CloudtasksProjectsLocationsQueuesList(CloudtasksProjectsLocationsQueuesListRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists queues. Queues are returned in lexicographical order.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.CloudtasksProjectsLocationsQueuesList(new CloudtasksProjectsLocationsQueuesListRequest
    {
        ProjectsId = "some example string",
        LocationsId = "some example string",
    });
    // TODO: Handle 'response' of type ListQueuesResponse
}
catch (ApiException<CloudtasksProjectsLocationsQueuesListError> ex)
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

<code>[CloudtasksProjectsLocationsQueuesListRequest](src/GoogleCloudTasks/Requests/CloudtasksProjectsLocationsQueuesListRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ListQueuesResponse](src/GoogleCloudTasks/Models/ListQueuesResponse.cs)</code>

**OnError**: <code>[ApiException](src/GoogleCloudTasks/Core/Exceptions/ApiException.cs)&lt;[CloudtasksProjectsLocationsQueuesListError](src/GoogleCloudTasks/Errors/CloudtasksProjectsLocationsQueuesListError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;QueueModel&gt; CloudtasksProjectsLocationsQueuesPatch(CloudtasksProjectsLocationsQueuesPatchRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates a queue. This method creates the queue if it does not exist and updates the queue if it does exist. Queues created with this method allow tasks to live for a maximum of 31 days. After a task is 31 days old, the task will be deleted regardless of whether it was dispatched or not. WARNING: Using this method may have unintended side effects if you are using an App Engine `queue.yaml` or `queue.xml` file to manage your queues. Read Overview of Queue Management and queue.yaml before using this method.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.CloudtasksProjectsLocationsQueuesPatch(new CloudtasksProjectsLocationsQueuesPatchRequest
    {
        ProjectsId = "some example string",
        LocationsId = "some example string",
        QueuesId = "some example string",
        Body = new QueueModel(),
    });
    // TODO: Handle 'response' of type QueueModel
}
catch (ApiException<CloudtasksProjectsLocationsQueuesPatchError> ex)
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

<code>[CloudtasksProjectsLocationsQueuesPatchRequest](src/GoogleCloudTasks/Requests/CloudtasksProjectsLocationsQueuesPatchRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[QueueModel](src/GoogleCloudTasks/Models/QueueModel.cs)</code>

**OnError**: <code>[ApiException](src/GoogleCloudTasks/Core/Exceptions/ApiException.cs)&lt;[CloudtasksProjectsLocationsQueuesPatchError](src/GoogleCloudTasks/Errors/CloudtasksProjectsLocationsQueuesPatchError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;QueueModel&gt; CloudtasksProjectsLocationsQueuesPause(CloudtasksProjectsLocationsQueuesPauseRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Pauses the queue. If a queue is paused then the system will stop dispatching tasks until the queue is resumed via ResumeQueue. Tasks can still be added when the queue is paused. A queue is paused if its state is PAUSED.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.CloudtasksProjectsLocationsQueuesPause(new CloudtasksProjectsLocationsQueuesPauseRequest
    {
        ProjectsId = "some example string",
        LocationsId = "some example string",
        QueuesId = "some example string",
        Body = body,
    });
    // TODO: Handle 'response' of type QueueModel
}
catch (ApiException<CloudtasksProjectsLocationsQueuesPauseError> ex)
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

<code>[CloudtasksProjectsLocationsQueuesPauseRequest](src/GoogleCloudTasks/Requests/CloudtasksProjectsLocationsQueuesPauseRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[QueueModel](src/GoogleCloudTasks/Models/QueueModel.cs)</code>

**OnError**: <code>[ApiException](src/GoogleCloudTasks/Core/Exceptions/ApiException.cs)&lt;[CloudtasksProjectsLocationsQueuesPauseError](src/GoogleCloudTasks/Errors/CloudtasksProjectsLocationsQueuesPauseError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;QueueModel&gt; CloudtasksProjectsLocationsQueuesPurge(CloudtasksProjectsLocationsQueuesPurgeRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Purges a queue by deleting all of its tasks. All tasks created before this method is called are permanently deleted. Purge operations can take up to one minute to take effect. Tasks might be dispatched before the purge takes effect. A purge is irreversible.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.CloudtasksProjectsLocationsQueuesPurge(new CloudtasksProjectsLocationsQueuesPurgeRequest
    {
        ProjectsId = "some example string",
        LocationsId = "some example string",
        QueuesId = "some example string",
        Body = body,
    });
    // TODO: Handle 'response' of type QueueModel
}
catch (ApiException<CloudtasksProjectsLocationsQueuesPurgeError> ex)
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

<code>[CloudtasksProjectsLocationsQueuesPurgeRequest](src/GoogleCloudTasks/Requests/CloudtasksProjectsLocationsQueuesPurgeRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[QueueModel](src/GoogleCloudTasks/Models/QueueModel.cs)</code>

**OnError**: <code>[ApiException](src/GoogleCloudTasks/Core/Exceptions/ApiException.cs)&lt;[CloudtasksProjectsLocationsQueuesPurgeError](src/GoogleCloudTasks/Errors/CloudtasksProjectsLocationsQueuesPurgeError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;QueueModel&gt; CloudtasksProjectsLocationsQueuesResume(CloudtasksProjectsLocationsQueuesResumeRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Resume a queue. This method resumes a queue after it has been PAUSED or DISABLED. The state of a queue is stored in the queue's state; after calling this method it will be set to RUNNING. WARNING: Resuming many high-QPS queues at the same time can lead to target overloading. If you are resuming high-QPS queues, follow the 500/50/5 pattern described in Managing Cloud Tasks Scaling Risks.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.CloudtasksProjectsLocationsQueuesResume(
        new CloudtasksProjectsLocationsQueuesResumeRequest
        {
            ProjectsId = "some example string",
            LocationsId = "some example string",
            QueuesId = "some example string",
            Body = body,
        });
    // TODO: Handle 'response' of type QueueModel
}
catch (ApiException<CloudtasksProjectsLocationsQueuesResumeError> ex)
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

<code>[CloudtasksProjectsLocationsQueuesResumeRequest](src/GoogleCloudTasks/Requests/CloudtasksProjectsLocationsQueuesResumeRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[QueueModel](src/GoogleCloudTasks/Models/QueueModel.cs)</code>

**OnError**: <code>[ApiException](src/GoogleCloudTasks/Core/Exceptions/ApiException.cs)&lt;[CloudtasksProjectsLocationsQueuesResumeError](src/GoogleCloudTasks/Errors/CloudtasksProjectsLocationsQueuesResumeError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Policy&gt; CloudtasksProjectsLocationsQueuesSetIamPolicy(CloudtasksProjectsLocationsQueuesSetIamPolicyRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Sets the access control policy for a Queue. Replaces any existing policy. Note: The Cloud Console does not check queue-level IAM permissions yet. Project-level permissions are required to use the Cloud Console. Authorization requires the following Google IAM permission on the specified resource parent: * `cloudtasks.queues.setIamPolicy`

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.CloudtasksProjectsLocationsQueuesSetIamPolicy(
        new CloudtasksProjectsLocationsQueuesSetIamPolicyRequest
        {
            ProjectsId = "some example string",
            LocationsId = "some example string",
            QueuesId = "some example string",
            Body = new SetIamPolicyRequest(),
        });
    // TODO: Handle 'response' of type Policy
}
catch (ApiException<CloudtasksProjectsLocationsQueuesSetIamPolicyError> ex)
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

<code>[CloudtasksProjectsLocationsQueuesSetIamPolicyRequest](src/GoogleCloudTasks/Requests/CloudtasksProjectsLocationsQueuesSetIamPolicyRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Policy](src/GoogleCloudTasks/Models/Policy.cs)</code>

**OnError**: <code>[ApiException](src/GoogleCloudTasks/Core/Exceptions/ApiException.cs)&lt;[CloudtasksProjectsLocationsQueuesSetIamPolicyError](src/GoogleCloudTasks/Errors/CloudtasksProjectsLocationsQueuesSetIamPolicyError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Operation&gt; CloudtasksProjectsLocationsQueuesTasksBatchCreate(CloudtasksProjectsLocationsQueuesTasksBatchCreateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a batch of tasks and adds them to a queue. All tasks must be for the same queue. A maximum of 100 tasks can be created in a single batch.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.CloudtasksProjectsLocationsQueuesTasksBatchCreate(
        new CloudtasksProjectsLocationsQueuesTasksBatchCreateRequest
        {
            ProjectsId = "some example string",
            LocationsId = "some example string",
            QueuesId = "some example string",
            Body = new BatchCreateTasksRequest(),
        });
    // TODO: Handle 'response' of type Operation
}
catch (ApiException<CloudtasksProjectsLocationsQueuesTasksBatchCreateError> ex)
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

<code>[CloudtasksProjectsLocationsQueuesTasksBatchCreateRequest](src/GoogleCloudTasks/Requests/CloudtasksProjectsLocationsQueuesTasksBatchCreateRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Operation](src/GoogleCloudTasks/Models/Operation.cs)</code>

**OnError**: <code>[ApiException](src/GoogleCloudTasks/Core/Exceptions/ApiException.cs)&lt;[CloudtasksProjectsLocationsQueuesTasksBatchCreateError](src/GoogleCloudTasks/Errors/CloudtasksProjectsLocationsQueuesTasksBatchCreateError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Operation&gt; CloudtasksProjectsLocationsQueuesTasksBatchDelete(CloudtasksProjectsLocationsQueuesTasksBatchDeleteRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a batch of tasks. This is a non-atomic operation: if deletion fails for some tasks, it can still succeed for others. The metadata field of google.longrunning.Operation contains details of failed deletions. A maximum of 1000 tasks can be deleted in a batch.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.CloudtasksProjectsLocationsQueuesTasksBatchDelete(
        new CloudtasksProjectsLocationsQueuesTasksBatchDeleteRequest
        {
            ProjectsId = "some example string",
            LocationsId = "some example string",
            QueuesId = "some example string",
            Body = new BatchDeleteTasksRequest(),
        });
    // TODO: Handle 'response' of type Operation
}
catch (ApiException<CloudtasksProjectsLocationsQueuesTasksBatchDeleteError> ex)
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

<code>[CloudtasksProjectsLocationsQueuesTasksBatchDeleteRequest](src/GoogleCloudTasks/Requests/CloudtasksProjectsLocationsQueuesTasksBatchDeleteRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Operation](src/GoogleCloudTasks/Models/Operation.cs)</code>

**OnError**: <code>[ApiException](src/GoogleCloudTasks/Core/Exceptions/ApiException.cs)&lt;[CloudtasksProjectsLocationsQueuesTasksBatchDeleteError](src/GoogleCloudTasks/Errors/CloudtasksProjectsLocationsQueuesTasksBatchDeleteError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;BufferTaskResponse&gt; CloudtasksProjectsLocationsQueuesTasksBuffer(CloudtasksProjectsLocationsQueuesTasksBufferRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates and buffers a new task without the need to explicitly define a Task message. The queue must have HTTP target. To create the task with a custom ID, use the following format and set TASK_ID to your desired ID: projects/PROJECT_ID/locations/LOCATION_ID/queues/QUEUE_ID/tasks/TASK_ID:buffer To create the task with an automatically generated ID, use the following format: projects/PROJECT_ID/locations/LOCATION_ID/queues/QUEUE_ID/tasks:buffer.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.CloudtasksProjectsLocationsQueuesTasksBuffer(
        new CloudtasksProjectsLocationsQueuesTasksBufferRequest
        {
            ProjectsId = "some example string",
            LocationsId = "some example string",
            QueuesId = "some example string",
            TaskId = "some example string",
            Body = new BufferTaskRequest(),
        });
    // TODO: Handle 'response' of type BufferTaskResponse
}
catch (ApiException<CloudtasksProjectsLocationsQueuesTasksBufferError> ex)
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

<code>[CloudtasksProjectsLocationsQueuesTasksBufferRequest](src/GoogleCloudTasks/Requests/CloudtasksProjectsLocationsQueuesTasksBufferRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[BufferTaskResponse](src/GoogleCloudTasks/Models/BufferTaskResponse.cs)</code>

**OnError**: <code>[ApiException](src/GoogleCloudTasks/Core/Exceptions/ApiException.cs)&lt;[CloudtasksProjectsLocationsQueuesTasksBufferError](src/GoogleCloudTasks/Errors/CloudtasksProjectsLocationsQueuesTasksBufferError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;TaskModel&gt; CloudtasksProjectsLocationsQueuesTasksCreate(CloudtasksProjectsLocationsQueuesTasksCreateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a task and adds it to a queue. Tasks cannot be updated after creation; there is no UpdateTask command. * The maximum task size is 100KB.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.CloudtasksProjectsLocationsQueuesTasksCreate(
        new CloudtasksProjectsLocationsQueuesTasksCreateRequest
        {
            ProjectsId = "some example string",
            LocationsId = "some example string",
            QueuesId = "some example string",
            Body = new CreateTaskRequest(),
        });
    // TODO: Handle 'response' of type TaskModel
}
catch (ApiException<CloudtasksProjectsLocationsQueuesTasksCreateError> ex)
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

<code>[CloudtasksProjectsLocationsQueuesTasksCreateRequest](src/GoogleCloudTasks/Requests/CloudtasksProjectsLocationsQueuesTasksCreateRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[TaskModel](src/GoogleCloudTasks/Models/TaskModel.cs)</code>

**OnError**: <code>[ApiException](src/GoogleCloudTasks/Core/Exceptions/ApiException.cs)&lt;[CloudtasksProjectsLocationsQueuesTasksCreateError](src/GoogleCloudTasks/Errors/CloudtasksProjectsLocationsQueuesTasksCreateError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;object&gt; CloudtasksProjectsLocationsQueuesTasksDelete(CloudtasksProjectsLocationsQueuesTasksDeleteRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a task. A task can be deleted if it is scheduled or dispatched. A task cannot be deleted if it has executed successfully or permanently failed.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.CloudtasksProjectsLocationsQueuesTasksDelete(
        new CloudtasksProjectsLocationsQueuesTasksDeleteRequest
        {
            ProjectsId = "some example string",
            LocationsId = "some example string",
            QueuesId = "some example string",
            TasksId = "some example string",
        });
    // TODO: Handle 'response' of type object
}
catch (ApiException<CloudtasksProjectsLocationsQueuesTasksDeleteError> ex)
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

<code>[CloudtasksProjectsLocationsQueuesTasksDeleteRequest](src/GoogleCloudTasks/Requests/CloudtasksProjectsLocationsQueuesTasksDeleteRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>object</code>

**OnError**: <code>[ApiException](src/GoogleCloudTasks/Core/Exceptions/ApiException.cs)&lt;[CloudtasksProjectsLocationsQueuesTasksDeleteError](src/GoogleCloudTasks/Errors/CloudtasksProjectsLocationsQueuesTasksDeleteError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;TaskModel&gt; CloudtasksProjectsLocationsQueuesTasksGet(CloudtasksProjectsLocationsQueuesTasksGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets a task. After a task is successfully executed or has exhausted its retry attempts, the task is deleted. A `GetTask` request for a deleted task returns a `NOT_FOUND` error.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.CloudtasksProjectsLocationsQueuesTasksGet(
        new CloudtasksProjectsLocationsQueuesTasksGetRequest
        {
            ProjectsId = "some example string",
            LocationsId = "some example string",
            QueuesId = "some example string",
            TasksId = "some example string",
        });
    // TODO: Handle 'response' of type TaskModel
}
catch (ApiException<CloudtasksProjectsLocationsQueuesTasksGetError> ex)
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

<code>[CloudtasksProjectsLocationsQueuesTasksGetRequest](src/GoogleCloudTasks/Requests/CloudtasksProjectsLocationsQueuesTasksGetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[TaskModel](src/GoogleCloudTasks/Models/TaskModel.cs)</code>

**OnError**: <code>[ApiException](src/GoogleCloudTasks/Core/Exceptions/ApiException.cs)&lt;[CloudtasksProjectsLocationsQueuesTasksGetError](src/GoogleCloudTasks/Errors/CloudtasksProjectsLocationsQueuesTasksGetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ListTasksResponse&gt; CloudtasksProjectsLocationsQueuesTasksList(CloudtasksProjectsLocationsQueuesTasksListRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists the tasks in a queue. By default, only the BASIC view is retrieved due to performance considerations; response_view controls the subset of information which is returned. The tasks may be returned in any order. The ordering may change at any time.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.CloudtasksProjectsLocationsQueuesTasksList(
        new CloudtasksProjectsLocationsQueuesTasksListRequest
        {
            ProjectsId = "some example string",
            LocationsId = "some example string",
            QueuesId = "some example string",
        });
    // TODO: Handle 'response' of type ListTasksResponse
}
catch (ApiException<CloudtasksProjectsLocationsQueuesTasksListError> ex)
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

<code>[CloudtasksProjectsLocationsQueuesTasksListRequest](src/GoogleCloudTasks/Requests/CloudtasksProjectsLocationsQueuesTasksListRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ListTasksResponse](src/GoogleCloudTasks/Models/ListTasksResponse.cs)</code>

**OnError**: <code>[ApiException](src/GoogleCloudTasks/Core/Exceptions/ApiException.cs)&lt;[CloudtasksProjectsLocationsQueuesTasksListError](src/GoogleCloudTasks/Errors/CloudtasksProjectsLocationsQueuesTasksListError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;TaskModel&gt; CloudtasksProjectsLocationsQueuesTasksRun(CloudtasksProjectsLocationsQueuesTasksRunRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Forces a task to run now. When this method is called, Cloud Tasks will dispatch the task, even if the task is already running, the queue has reached its RateLimits or is PAUSED. This command is meant to be used for manual debugging. For example, RunTask can be used to retry a failed task after a fix has been made or to manually force a task to be dispatched now. If Cloud Tasks receives a successful response from the task's target, then the task will be deleted; otherwise the task's schedule_time will be reset to the time that RunTask was called plus the retry delay specified in the queue's RetryConfig. RunTask returns NOT_FOUND when it is called on a task that has already succeeded or permanently failed.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.CloudtasksProjectsLocationsQueuesTasksRun(
        new CloudtasksProjectsLocationsQueuesTasksRunRequest
        {
            ProjectsId = "some example string",
            LocationsId = "some example string",
            QueuesId = "some example string",
            TasksId = "some example string",
            Body = new RunTaskRequest(),
        });
    // TODO: Handle 'response' of type TaskModel
}
catch (ApiException<CloudtasksProjectsLocationsQueuesTasksRunError> ex)
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

<code>[CloudtasksProjectsLocationsQueuesTasksRunRequest](src/GoogleCloudTasks/Requests/CloudtasksProjectsLocationsQueuesTasksRunRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[TaskModel](src/GoogleCloudTasks/Models/TaskModel.cs)</code>

**OnError**: <code>[ApiException](src/GoogleCloudTasks/Core/Exceptions/ApiException.cs)&lt;[CloudtasksProjectsLocationsQueuesTasksRunError](src/GoogleCloudTasks/Errors/CloudtasksProjectsLocationsQueuesTasksRunError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;TestIamPermissionsResponse&gt; CloudtasksProjectsLocationsQueuesTestIamPermissions(CloudtasksProjectsLocationsQueuesTestIamPermissionsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns permissions that a caller has on a Queue. If the resource does not exist, this will return an empty set of permissions, not a NOT_FOUND error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.CloudtasksProjectsLocationsQueuesTestIamPermissions(
        new CloudtasksProjectsLocationsQueuesTestIamPermissionsRequest
        {
            ProjectsId = "some example string",
            LocationsId = "some example string",
            QueuesId = "some example string",
            Body = new TestIamPermissionsRequest(),
        });
    // TODO: Handle 'response' of type TestIamPermissionsResponse
}
catch (ApiException<CloudtasksProjectsLocationsQueuesTestIamPermissionsError> ex)
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

<code>[CloudtasksProjectsLocationsQueuesTestIamPermissionsRequest](src/GoogleCloudTasks/Requests/CloudtasksProjectsLocationsQueuesTestIamPermissionsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[TestIamPermissionsResponse](src/GoogleCloudTasks/Models/TestIamPermissionsResponse.cs)</code>

**OnError**: <code>[ApiException](src/GoogleCloudTasks/Core/Exceptions/ApiException.cs)&lt;[CloudtasksProjectsLocationsQueuesTestIamPermissionsError](src/GoogleCloudTasks/Errors/CloudtasksProjectsLocationsQueuesTestIamPermissionsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;CmekConfig&gt; CloudtasksProjectsLocationsUpdateCmekConfig(CloudtasksProjectsLocationsUpdateCmekConfigRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates or Updates a CMEK config. Updates the Customer Managed Encryption Key associated with the Cloud Tasks location (Creates if the key does not already exist). All new tasks created in the location will be encrypted at-rest with the KMS-key provided in the config.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.CloudtasksProjectsLocationsUpdateCmekConfig(
        new CloudtasksProjectsLocationsUpdateCmekConfigRequest
        {
            ProjectsId = "some example string",
            LocationsId = "some example string",
            Body = new CmekConfig(),
        });
    // TODO: Handle 'response' of type CmekConfig
}
catch (ApiException<CloudtasksProjectsLocationsUpdateCmekConfigError> ex)
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

<code>[CloudtasksProjectsLocationsUpdateCmekConfigRequest](src/GoogleCloudTasks/Requests/CloudtasksProjectsLocationsUpdateCmekConfigRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CmekConfig](src/GoogleCloudTasks/Models/CmekConfig.cs)</code>

**OnError**: <code>[ApiException](src/GoogleCloudTasks/Core/Exceptions/ApiException.cs)&lt;[CloudtasksProjectsLocationsUpdateCmekConfigError](src/GoogleCloudTasks/Errors/CloudtasksProjectsLocationsUpdateCmekConfigError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

