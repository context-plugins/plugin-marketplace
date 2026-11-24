# Reference

Every operation below is shown in its throwing form. On an error status it throws `ApiException<TError>` — the status code, headers, content type and the operation's error type, `RawError` (the raw body) when the spec declares none — and where an operation offers an `…AsResult` sibling, that sibling returns `ApiResult<TResponse, TError>` instead. A request that produces no usable response surfaces as `SdkConnectionException` or `SdkTimeoutException`, a body that does not match the documented response type as `ResponseDeserializationException`, and a required credential that is not configured, or one that cannot be applied, as `AuthSchemeException`; all of them derive from `SdkException` and name the failed call. See [README → Error Handling](README.md#error-handling).

> Source: [AwsStepFunctionsClient](src/AwsStepFunctions/AwsStepFunctionsClient.cs)

## AwsStepFunctionsApi

> Source: [AwsStepFunctionsApi](src/AwsStepFunctions/Api/AwsStepFunctionsApi.cs)

<details>
<summary><code>Task CreateActivity(CreateActivityRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates an activity. An activity is a task that you write in any programming language and host on any machine that has access to Step Functions. Activities must poll Step Functions using the GetActivityTask API action and respond using SendTask* API actions. This function lets Step Functions know the existence of your activity and returns an identifier for use in a state machine and when polling from the activity. This operation is eventually consistent. The results are best effort and may not reflect very recent updates and changes. CreateActivity is an idempotent API. Subsequent requests won’t create a duplicate resource if it was already created. CreateActivity's idempotency check is based on the activity name. If a following request has different tags values, Step Functions will ignore these differences and treat it as an idempotent request of the previous. In this case, tags will not be updated, even if they are different.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.AwsStepFunctionsApi.CreateActivity(new CreateActivityRequest
    {
        XAmzTarget = XAmzTarget.AwsStepFunctionsCreateActivity,
    });
}
catch (ApiException<CreateActivityError> ex)
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

<code>[CreateActivityRequest](src/AwsStepFunctions/Requests/AwsStepFunctionsApi/CreateActivityRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AwsStepFunctions/Core/Exceptions/ApiException.cs)&lt;[CreateActivityError](src/AwsStepFunctions/Errors/CreateActivityError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task CreateStateMachine(CreateStateMachineRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a state machine. A state machine consists of a collection of states that can do work (Task states), determine to which states to transition next (Choice states), stop an execution with an error (Fail states), and so on. State machines are specified using a JSON-based, structured language. For more information, see Amazon States Language in the Step Functions User Guide. If you set the publish parameter of this API action to true, it publishes version 1 as the first revision of the state machine. For additional control over security, you can encrypt your data using a customer-managed key for Step Functions state machines. You can configure a symmetric KMS key and data key reuse period when creating or updating a State Machine. The execution history and state machine definition will be encrypted with the key applied to the State Machine. This operation is eventually consistent. The results are best effort and may not reflect very recent updates and changes. CreateStateMachine is an idempotent API. Subsequent requests won’t create a duplicate resource if it was already created. CreateStateMachine's idempotency check is based on the state machine name, definition, type, Logging

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.AwsStepFunctionsApi.CreateStateMachine(new CreateStateMachineRequest
    {
        XAmzTarget = XAmzTarget4.AwsStepFunctionsCreateStateMachine,
    });
}
catch (ApiException<CreateStateMachineError> ex)
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

<code>[CreateStateMachineRequest](src/AwsStepFunctions/Requests/AwsStepFunctionsApi/CreateStateMachineRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AwsStepFunctions/Core/Exceptions/ApiException.cs)&lt;[CreateStateMachineError](src/AwsStepFunctions/Errors/CreateStateMachineError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task DeleteActivity(DeleteActivityRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes an activity.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.AwsStepFunctionsApi.DeleteActivity(new DeleteActivityRequest
    {
        XAmzTarget = XAmzTarget1.AwsStepFunctionsDeleteActivity,
    });
}
catch (ApiException<DeleteActivityError> ex)
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

<code>[DeleteActivityRequest](src/AwsStepFunctions/Requests/AwsStepFunctionsApi/DeleteActivityRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AwsStepFunctions/Core/Exceptions/ApiException.cs)&lt;[DeleteActivityError](src/AwsStepFunctions/Errors/DeleteActivityError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task DeleteStateMachine(DeleteStateMachineRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a state machine. This is an asynchronous operation. It sets the state machine's status to DELETING and begins the deletion process. A state machine is deleted only when all its executions are completed. On the next state transition, the state machine's executions are terminated. A qualified state machine ARN can either refer to a Distributed Map state defined within a state machine, a version ARN, or an alias ARN. The following are some examples of qualified and unqualified state machine ARNs: The following qualified state machine ARN refers to a Distributed Map state with a label mapStateLabel in a state machine named myStateMachine. arn:partition:states:region:account-id:stateMachine:myStateMachine/mapStateLabel If you provide a qualified state machine ARN that refers to a Distributed Map state, the request fails with ValidationException. The following unqualified state machine ARN refers to a state machine named myStateMachine. arn:partition:states:region:account-id:stateMachine:myStateMachine This API action also deletes all versions and aliases associated with a state machine. For EXPRESS state machines, the deletion happens eventually (usually in less than a minute).

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.AwsStepFunctionsApi.DeleteStateMachine(new DeleteStateMachineRequest
    {
        XAmzTarget = XAmzTarget5.AwsStepFunctionsDeleteStateMachine,
    });
}
catch (ApiException<DeleteStateMachineError> ex)
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

<code>[DeleteStateMachineRequest](src/AwsStepFunctions/Requests/AwsStepFunctionsApi/DeleteStateMachineRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AwsStepFunctions/Core/Exceptions/ApiException.cs)&lt;[DeleteStateMachineError](src/AwsStepFunctions/Errors/DeleteStateMachineError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task DescribeActivity(DescribeActivityRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Describes an activity. This operation is eventually consistent. The results are best effort and may not reflect very recent updates and changes.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.AwsStepFunctionsApi.DescribeActivity(new DescribeActivityRequest
    {
        XAmzTarget = XAmzTarget2.AwsStepFunctionsDescribeActivity,
    });
}
catch (ApiException<DescribeActivityError> ex)
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

<code>[DescribeActivityRequest](src/AwsStepFunctions/Requests/AwsStepFunctionsApi/DescribeActivityRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AwsStepFunctions/Core/Exceptions/ApiException.cs)&lt;[DescribeActivityError](src/AwsStepFunctions/Errors/DescribeActivityError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task DescribeExecution(DescribeExecutionRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Provides information about a state machine execution, such as the state machine associated with the execution, the execution input and output, and relevant execution metadata. If you've redriven an execution, you can use this API action to return information about the redrives of that execution. In addition, you can use this API action to return the Map Run Amazon Resource Name (ARN) if the execution was dispatched by a Map Run. If you specify a version or alias ARN when you call the StartExecution API action, DescribeExecution returns that ARN. This operation is eventually consistent. The results are best effort and may not reflect very recent updates and changes. Executions of an EXPRESS state machine aren't supported by DescribeExecution unless a Map Run dispatched them.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.AwsStepFunctionsApi.DescribeExecution(new DescribeExecutionRequest
    {
        XAmzTarget = XAmzTarget10.AwsStepFunctionsDescribeExecution,
    });
}
catch (ApiException<DescribeExecutionError> ex)
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

<code>[DescribeExecutionRequest](src/AwsStepFunctions/Requests/AwsStepFunctionsApi/DescribeExecutionRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AwsStepFunctions/Core/Exceptions/ApiException.cs)&lt;[DescribeExecutionError](src/AwsStepFunctions/Errors/DescribeExecutionError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task DescribeMapRun(DescribeMapRunRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Provides information about a Map Run's configuration, progress, and results. If you've redriven a Map Run, this API action also returns information about the redrives of that Map Run. For more information, see Examining Map Run in the Step Functions Developer Guide.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.AwsStepFunctionsApi.DescribeMapRun(new DescribeMapRunRequest
    {
        XAmzTarget = XAmzTarget14.AwsStepFunctionsDescribeMapRun,
    });
}
catch (ApiException<DescribeMapRunError> ex)
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

<code>[DescribeMapRunRequest](src/AwsStepFunctions/Requests/AwsStepFunctionsApi/DescribeMapRunRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AwsStepFunctions/Core/Exceptions/ApiException.cs)&lt;[DescribeMapRunError](src/AwsStepFunctions/Errors/DescribeMapRunError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task DescribeStateMachine(DescribeStateMachineRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Provides information about a state machine's definition, its IAM role Amazon Resource Name (ARN), and configuration. A qualified state machine ARN can either refer to a Distributed Map state defined within a state machine, a version ARN, or an alias ARN. The following are some examples of qualified and unqualified state machine ARNs: The following qualified state machine ARN refers to a Distributed Map state with a label mapStateLabel in a state machine named myStateMachine. arn:partition:states:region:account-id:stateMachine:myStateMachine/mapStateLabel If you provide a qualified state machine ARN that refers to a Distributed Map state, the request fails with ValidationException. The following qualified state machine ARN refers to an alias named PROD. arn::states:::stateMachine: If you provide a qualified state machine ARN that refers to a version ARN or an alias ARN, the request starts execution for that version or alias. The following unqualified state machine ARN refers to a state machine named myStateMachine. arn::states:::stateMachine: This API action returns the details for a state machine version if the stateMachineArn you specify is a state machine version ARN. This operat

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.AwsStepFunctionsApi.DescribeStateMachine(new DescribeStateMachineRequest
    {
        XAmzTarget = XAmzTarget6.AwsStepFunctionsDescribeStateMachine,
    });
}
catch (ApiException<DescribeStateMachineError> ex)
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

<code>[DescribeStateMachineRequest](src/AwsStepFunctions/Requests/AwsStepFunctionsApi/DescribeStateMachineRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AwsStepFunctions/Core/Exceptions/ApiException.cs)&lt;[DescribeStateMachineError](src/AwsStepFunctions/Errors/DescribeStateMachineError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task DescribeStateMachineForExecution(DescribeStateMachineForExecutionRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Provides information about a state machine's definition, its execution role ARN, and configuration. If a Map Run dispatched the execution, this action returns the Map Run Amazon Resource Name (ARN) in the response. The state machine returned is the state machine associated with the Map Run. This operation is eventually consistent. The results are best effort and may not reflect very recent updates and changes. This API action is not supported by EXPRESS state machines.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.AwsStepFunctionsApi.DescribeStateMachineForExecution(new DescribeStateMachineForExecutionRequest
    {
        XAmzTarget = XAmzTarget7.AwsStepFunctionsDescribeStateMachineForExecution,
    });
}
catch (ApiException<DescribeStateMachineForExecutionError> ex)
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

<code>[DescribeStateMachineForExecutionRequest](src/AwsStepFunctions/Requests/AwsStepFunctionsApi/DescribeStateMachineForExecutionRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AwsStepFunctions/Core/Exceptions/ApiException.cs)&lt;[DescribeStateMachineForExecutionError](src/AwsStepFunctions/Errors/DescribeStateMachineForExecutionError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task GetActivityTask(GetActivityTaskRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Used by workers to retrieve a task (with the specified activity ARN) which has been scheduled for execution by a running state machine. This initiates a long poll, where the service holds the HTTP connection open and responds as soon as a task becomes available (i.e. an execution of a task of this type is needed.) The maximum time the service holds on to the request before responding is 60 seconds. If no task is available within 60 seconds, the poll returns a taskToken with a null string. Workers should set their client side socket timeout to at least 65 seconds (5 seconds higher than the maximum time the service may hold the poll request). Polling with GetActivityTask can cause latency in some implementations. See Avoid Latency When Polling for Activity Tasks in the Step Functions Developer Guide.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.AwsStepFunctionsApi.GetActivityTask(new GetActivityTaskRequest
    {
        XAmzTarget = XAmzTarget17.AwsStepFunctionsGetActivityTask,
    });
}
catch (ApiException<GetActivityTaskError> ex)
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

<code>[GetActivityTaskRequest](src/AwsStepFunctions/Requests/AwsStepFunctionsApi/GetActivityTaskRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AwsStepFunctions/Core/Exceptions/ApiException.cs)&lt;[GetActivityTaskError](src/AwsStepFunctions/Errors/GetActivityTaskError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task GetExecutionHistory(GetExecutionHistoryRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the history of the specified execution as a list of events. By default, the results are returned in ascending order of the timeStamp of the events. Use the reverseOrder parameter to get the latest events first. If nextToken is returned, there are more results available. The value of nextToken is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. Each pagination token expires after 24 hours. Using an expired pagination token will return an HTTP 400 InvalidToken error. This API action is not supported by EXPRESS state machines.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.AwsStepFunctionsApi.GetExecutionHistory(new GetExecutionHistoryRequest
    {
        XAmzTarget = XAmzTarget18.AwsStepFunctionsGetExecutionHistory,
    });
}
catch (ApiException<GetExecutionHistoryError> ex)
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

<code>[GetExecutionHistoryRequest](src/AwsStepFunctions/Requests/AwsStepFunctionsApi/GetExecutionHistoryRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AwsStepFunctions/Core/Exceptions/ApiException.cs)&lt;[GetExecutionHistoryError](src/AwsStepFunctions/Errors/GetExecutionHistoryError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task ListActivities(ListActivitiesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists the existing activities. If nextToken is returned, there are more results available. The value of nextToken is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. Each pagination token expires after 24 hours. Using an expired pagination token will return an HTTP 400 InvalidToken error. This operation is eventually consistent. The results are best effort and may not reflect very recent updates and changes.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.AwsStepFunctionsApi.ListActivities(new ListActivitiesRequest
    {
        XAmzTarget = XAmzTarget3.AwsStepFunctionsListActivities,
    });
}
catch (ApiException<ListActivitiesError> ex)
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

<code>[ListActivitiesRequest](src/AwsStepFunctions/Requests/AwsStepFunctionsApi/ListActivitiesRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AwsStepFunctions/Core/Exceptions/ApiException.cs)&lt;[ListActivitiesError](src/AwsStepFunctions/Errors/ListActivitiesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task ListExecutions(ListExecutionsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists all executions of a state machine or a Map Run. You can list all executions related to a state machine by specifying a state machine Amazon Resource Name (ARN), or those related to a Map Run by specifying a Map Run ARN. Using this API action, you can also list all redriven executions. You can also provide a state machine alias ARN or version ARN to list the executions associated with a specific alias or version. Results are sorted by time, with the most recent execution first. Running executions are sorted by their startDate or redriveDate, and other executions are sorted by their stopDate. If nextToken is returned, there are more results available. The value of nextToken is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. Each pagination token expires after 24 hours. Using an expired pagination token will return an HTTP 400 InvalidToken error. This operation is eventually consistent. The results are best effort and may not reflect very recent updates and changes. This API action is not supported by EXPRESS state machines. However, you may list EXPRESS children started by a map

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.AwsStepFunctionsApi.ListExecutions(new ListExecutionsRequest
    {
        XAmzTarget = XAmzTarget11.AwsStepFunctionsListExecutions,
    });
}
catch (ApiException<ListExecutionsError> ex)
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

<code>[ListExecutionsRequest](src/AwsStepFunctions/Requests/AwsStepFunctionsApi/ListExecutionsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AwsStepFunctions/Core/Exceptions/ApiException.cs)&lt;[ListExecutionsError](src/AwsStepFunctions/Errors/ListExecutionsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task ListMapRuns(ListMapRunsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists all Map Runs that were started by a given state machine execution. Use this API action to obtain Map Run ARNs, and then call DescribeMapRun to obtain more information, if needed.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.AwsStepFunctionsApi.ListMapRuns(new ListMapRunsRequest
    {
        XAmzTarget = XAmzTarget15.AwsStepFunctionsListMapRuns,
    });
}
catch (ApiException<ListMapRunsError> ex)
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

<code>[ListMapRunsRequest](src/AwsStepFunctions/Requests/AwsStepFunctionsApi/ListMapRunsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AwsStepFunctions/Core/Exceptions/ApiException.cs)&lt;[ListMapRunsError](src/AwsStepFunctions/Errors/ListMapRunsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task ListStateMachines(ListStateMachinesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists the existing state machines. If nextToken is returned, there are more results available. The value of nextToken is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. Each pagination token expires after 24 hours. Using an expired pagination token will return an HTTP 400 InvalidToken error. This operation is eventually consistent. The results are best effort and may not reflect very recent updates and changes.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.AwsStepFunctionsApi.ListStateMachines(new ListStateMachinesRequest
    {
        XAmzTarget = XAmzTarget8.AwsStepFunctionsListStateMachines,
    });
}
catch (ApiException<ListStateMachinesError> ex)
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

<code>[ListStateMachinesRequest](src/AwsStepFunctions/Requests/AwsStepFunctionsApi/ListStateMachinesRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AwsStepFunctions/Core/Exceptions/ApiException.cs)&lt;[ListStateMachinesError](src/AwsStepFunctions/Errors/ListStateMachinesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task ListTagsForResource(ListTagsForResourceRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List tags for a given resource. Tags may only contain Unicode letters, digits, white space, or these symbols: _ . : / = + - @.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.AwsStepFunctionsApi.ListTagsForResource(new ListTagsForResourceRequest
    {
        XAmzTarget = XAmzTarget19.AwsStepFunctionsListTagsForResource,
    });
}
catch (ApiException<ListTagsForResourceError> ex)
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

<code>[ListTagsForResourceRequest](src/AwsStepFunctions/Requests/AwsStepFunctionsApi/ListTagsForResourceRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AwsStepFunctions/Core/Exceptions/ApiException.cs)&lt;[ListTagsForResourceError](src/AwsStepFunctions/Errors/ListTagsForResourceError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task SendTaskFailure(SendTaskFailureRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Used by activity workers, Task states using the callback pattern, and optionally Task states using the job run pattern to report that the task identified by the taskToken failed. For an execution with encryption enabled, Step Functions will encrypt the error and cause fields using the KMS key for the execution role. A caller can mark a task as fail without using any KMS permissions in the execution role if the caller provides a null value for both error and cause fields because no data needs to be encrypted.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.AwsStepFunctionsApi.SendTaskFailure(new SendTaskFailureRequest
    {
        XAmzTarget = XAmzTarget20.AwsStepFunctionsSendTaskFailure,
    });
}
catch (ApiException<SendTaskFailureError> ex)
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

<code>[SendTaskFailureRequest](src/AwsStepFunctions/Requests/AwsStepFunctionsApi/SendTaskFailureRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AwsStepFunctions/Core/Exceptions/ApiException.cs)&lt;[SendTaskFailureError](src/AwsStepFunctions/Errors/SendTaskFailureError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task SendTaskHeartbeat(SendTaskHeartbeatRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Used by activity workers and Task states using the callback pattern, and optionally Task states using the job run pattern to report to Step Functions that the task represented by the specified taskToken is still making progress. This action resets the Heartbeat clock. The Heartbeat threshold is specified in the state machine's Amazon States Language definition (HeartbeatSeconds). This action does not in itself create an event in the execution history. However, if the task times out, the execution history contains an ActivityTimedOut entry for activities, or a TaskTimedOut entry for tasks using the job run or callback pattern. The Timeout of a task, defined in the state machine's Amazon States Language definition, is its maximum allowed duration, regardless of the number of SendTaskHeartbeat requests received. Use HeartbeatSeconds to configure the timeout interval for heartbeats.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.AwsStepFunctionsApi.SendTaskHeartbeat(new SendTaskHeartbeatRequest
    {
        XAmzTarget = XAmzTarget21.AwsStepFunctionsSendTaskHeartbeat,
    });
}
catch (ApiException<SendTaskHeartbeatError> ex)
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

<code>[SendTaskHeartbeatRequest](src/AwsStepFunctions/Requests/AwsStepFunctionsApi/SendTaskHeartbeatRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AwsStepFunctions/Core/Exceptions/ApiException.cs)&lt;[SendTaskHeartbeatError](src/AwsStepFunctions/Errors/SendTaskHeartbeatError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task SendTaskSuccess(SendTaskSuccessRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Used by activity workers, Task states using the callback pattern, and optionally Task states using the job run pattern to report that the task identified by the taskToken completed successfully.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.AwsStepFunctionsApi.SendTaskSuccess(new SendTaskSuccessRequest
    {
        XAmzTarget = XAmzTarget22.AwsStepFunctionsSendTaskSuccess,
    });
}
catch (ApiException<SendTaskSuccessError> ex)
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

<code>[SendTaskSuccessRequest](src/AwsStepFunctions/Requests/AwsStepFunctionsApi/SendTaskSuccessRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AwsStepFunctions/Core/Exceptions/ApiException.cs)&lt;[SendTaskSuccessError](src/AwsStepFunctions/Errors/SendTaskSuccessError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task StartExecution(StartExecutionRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Starts a state machine execution. A qualified state machine ARN can either refer to a Distributed Map state defined within a state machine, a version ARN, or an alias ARN. The following are some examples of qualified and unqualified state machine ARNs: The following qualified state machine ARN refers to a Distributed Map state with a label mapStateLabel in a state machine named myStateMachine. arn:partition:states:region:account-id:stateMachine:myStateMachine/mapStateLabel If you provide a qualified state machine ARN that refers to a Distributed Map state, the request fails with ValidationException. The following qualified state machine ARN refers to an alias named PROD. arn::states:::stateMachine: If you provide a qualified state machine ARN that refers to a version ARN or an alias ARN, the request starts execution for that version or alias. The following unqualified state machine ARN refers to a state machine named myStateMachine. arn::states:::stateMachine: If you start an execution with an unqualified state machine ARN, Step Functions uses the latest revision of the state machine for the execution. To start executions of a state machine version, call StartExecution and provide

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.AwsStepFunctionsApi.StartExecution(new StartExecutionRequest
    {
        XAmzTarget = XAmzTarget12.AwsStepFunctionsStartExecution,
    });
}
catch (ApiException<StartExecutionError> ex)
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

<code>[StartExecutionRequest](src/AwsStepFunctions/Requests/AwsStepFunctionsApi/StartExecutionRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AwsStepFunctions/Core/Exceptions/ApiException.cs)&lt;[StartExecutionError](src/AwsStepFunctions/Errors/StartExecutionError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task StartSyncExecution(StartSyncExecutionRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Starts a Synchronous Express state machine execution. StartSyncExecution is not available for STANDARD workflows. StartSyncExecution will return a 200 OK response, even if your execution fails, because the status code in the API response doesn't reflect function errors. Error codes are reserved for errors that prevent your execution from running, such as permissions errors, limit errors, or issues with your state machine code and configuration.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.AwsStepFunctionsApi.StartSyncExecution(new StartSyncExecutionRequest
    {
        XAmzTarget = XAmzTarget23.AwsStepFunctionsStartSyncExecution,
    });
}
catch (ApiException<StartSyncExecutionError> ex)
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

<code>[StartSyncExecutionRequest](src/AwsStepFunctions/Requests/AwsStepFunctionsApi/StartSyncExecutionRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AwsStepFunctions/Core/Exceptions/ApiException.cs)&lt;[StartSyncExecutionError](src/AwsStepFunctions/Errors/StartSyncExecutionError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task StopExecution(StopExecutionRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Stops an execution. This API action is not supported by EXPRESS state machines. For an execution with encryption enabled, Step Functions will encrypt the error and cause fields using the KMS key for the execution role. A caller can stop an execution without using any KMS permissions in the execution role if the caller provides a null value for both error and cause fields because no data needs to be encrypted.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.AwsStepFunctionsApi.StopExecution(new StopExecutionRequest
    {
        XAmzTarget = XAmzTarget13.AwsStepFunctionsStopExecution,
    });
}
catch (ApiException<StopExecutionError> ex)
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

<code>[StopExecutionRequest](src/AwsStepFunctions/Requests/AwsStepFunctionsApi/StopExecutionRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AwsStepFunctions/Core/Exceptions/ApiException.cs)&lt;[StopExecutionError](src/AwsStepFunctions/Errors/StopExecutionError.cs)&gt;</code>

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

Add a tag to a Step Functions resource. An array of key-value pairs. For more information, see Using Cost Allocation Tags in the Amazon Web Services Billing and Cost Management User Guide, and Controlling Access Using IAM Tags. Tags may only contain Unicode letters, digits, white space, or these symbols: _ . : / = + - @.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.AwsStepFunctionsApi.TagResource(new TagResourceRequest
    {
        XAmzTarget = XAmzTarget24.AwsStepFunctionsTagResource,
    });
}
catch (ApiException<TagResourceError> ex)
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

<code>[TagResourceRequest](src/AwsStepFunctions/Requests/AwsStepFunctionsApi/TagResourceRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AwsStepFunctions/Core/Exceptions/ApiException.cs)&lt;[TagResourceError](src/AwsStepFunctions/Errors/TagResourceError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task UntagResource(UntagResourceRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Remove a tag from a Step Functions resource

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.AwsStepFunctionsApi.UntagResource(new UntagResourceRequest
    {
        XAmzTarget = XAmzTarget25.AwsStepFunctionsUntagResource,
    });
}
catch (ApiException<UntagResourceError> ex)
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

<code>[UntagResourceRequest](src/AwsStepFunctions/Requests/AwsStepFunctionsApi/UntagResourceRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AwsStepFunctions/Core/Exceptions/ApiException.cs)&lt;[UntagResourceError](src/AwsStepFunctions/Errors/UntagResourceError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task UpdateMapRun(UpdateMapRunRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates an in-progress Map Run's configuration to include changes to the settings that control maximum concurrency and Map Run failure.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.AwsStepFunctionsApi.UpdateMapRun(new UpdateMapRunRequest
    {
        XAmzTarget = XAmzTarget16.AwsStepFunctionsUpdateMapRun,
    });
}
catch (ApiException<UpdateMapRunError> ex)
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

<code>[UpdateMapRunRequest](src/AwsStepFunctions/Requests/AwsStepFunctionsApi/UpdateMapRunRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AwsStepFunctions/Core/Exceptions/ApiException.cs)&lt;[UpdateMapRunError](src/AwsStepFunctions/Errors/UpdateMapRunError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task UpdateStateMachine(UpdateStateMachineRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates an existing state machine by modifying its definition, roleArn, loggingConfiguration, or EncryptionConfiguration. Running executions will continue to use the previous definition and roleArn. You must include at least one of definition or roleArn or you will receive a MissingRequiredParameter error. A qualified state machine ARN refers to a Distributed Map state defined within a state machine. For example, the qualified state machine ARN arn:partition:states:region:account-id:stateMachine:stateMachineName/mapStateLabel refers to a Distributed Map state with a label mapStateLabel in the state machine named stateMachineName. A qualified state machine ARN can either refer to a Distributed Map state defined within a state machine, a version ARN, or an alias ARN. The following are some examples of qualified and unqualified state machine ARNs: The following qualified state machine ARN refers to a Distributed Map state with a label mapStateLabel in a state machine named myStateMachine. arn:partition:states:region:account-id:stateMachine:myStateMachine/mapStateLabel If you provide a qualified state machine ARN that refers to a Distributed Map state, the request fails with Validation

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.AwsStepFunctionsApi.UpdateStateMachine(new UpdateStateMachineRequest
    {
        XAmzTarget = XAmzTarget9.AwsStepFunctionsUpdateStateMachine,
    });
}
catch (ApiException<UpdateStateMachineError> ex)
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

<code>[UpdateStateMachineRequest](src/AwsStepFunctions/Requests/AwsStepFunctionsApi/UpdateStateMachineRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AwsStepFunctions/Core/Exceptions/ApiException.cs)&lt;[UpdateStateMachineError](src/AwsStepFunctions/Errors/UpdateStateMachineError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## AwsStepFunctionsXAmzTargetAwsstepfunctionsCreatestat

> Source: [AwsStepFunctionsXAmzTargetAwsstepfunctionsCreatestat](src/AwsStepFunctions/Api/AwsStepFunctionsXAmzTargetAwsstepfunctionsCreatestat.cs)

<details>
<summary><code>Task CreateStateMachineAlias(CreateStateMachineAliasRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates an alias for a state machine that points to one or two versions of the same state machine. You can set your application to call StartExecution with an alias and update the version the alias uses without changing the client's code. You can also map an alias to split StartExecution requests between two versions of a state machine. To do this, add a second RoutingConfig object in the routingConfiguration parameter. You must also specify the percentage of execution run requests each version should receive in both RoutingConfig objects. Step Functions randomly chooses which version runs a given execution based on the percentage you specify. To create an alias that points to a single version, specify a single RoutingConfig object with a weight set to 100. You can create up to 100 aliases for each state machine. You must delete unused aliases using the DeleteStateMachineAlias API action. CreateStateMachineAlias is an idempotent API. Step Functions bases the idempotency check on the stateMachineArn, description, name, and routingConfiguration parameters. Requests that contain the same values for these parameters return a successful idempotent response without creating a duplicate r

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.AwsStepFunctionsXAmzTargetAwsstepfunctionsCreatestat.CreateStateMachineAlias(
        new CreateStateMachineAliasRequest
        {
            XAmzTarget = XAmzTargetAwsStepFunctionsAwsStepFunctionsXAmzTargetAwsstepfunctionsCreatestatApi.AwsStepFunctionsCreateStateMachineAlias,
        });
}
catch (ApiException<CreateStateMachineAliasError> ex)
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

<code>[CreateStateMachineAliasRequest](src/AwsStepFunctions/Requests/AwsStepFunctionsXAmzTargetAwsstepfunctionsCreatestat/CreateStateMachineAliasRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AwsStepFunctions/Core/Exceptions/ApiException.cs)&lt;[CreateStateMachineAliasError](src/AwsStepFunctions/Errors/CreateStateMachineAliasError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## AwsStepFunctionsXAmzTargetAwsstepfunctionsDeletestat

> Source: [AwsStepFunctionsXAmzTargetAwsstepfunctionsDeletestat](src/AwsStepFunctions/Api/AwsStepFunctionsXAmzTargetAwsstepfunctionsDeletestat.cs)

<details>
<summary><code>Task DeleteStateMachineAlias(DeleteStateMachineAliasRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a state machine alias. After you delete a state machine alias, you can't use it to start executions. When you delete a state machine alias, Step Functions doesn't delete the state machine versions that alias references. Related operations: CreateStateMachineAlias DescribeStateMachineAlias ListStateMachineAliases UpdateStateMachineAlias

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.AwsStepFunctionsXAmzTargetAwsstepfunctionsDeletestat.DeleteStateMachineAlias(
        new DeleteStateMachineAliasRequest
        {
            XAmzTarget = XAmzTargetAwsStepFunctionsAwsStepFunctionsXAmzTargetAwsstepfunctionsDeletestatApi.AwsStepFunctionsDeleteStateMachineAlias,
        });
}
catch (ApiException<DeleteStateMachineAliasError> ex)
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

<code>[DeleteStateMachineAliasRequest](src/AwsStepFunctions/Requests/AwsStepFunctionsXAmzTargetAwsstepfunctionsDeletestat/DeleteStateMachineAliasRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AwsStepFunctions/Core/Exceptions/ApiException.cs)&lt;[DeleteStateMachineAliasError](src/AwsStepFunctions/Errors/DeleteStateMachineAliasError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task DeleteStateMachineVersion(DeleteStateMachineVersionRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a state machine version. After you delete a version, you can't call StartExecution using that version's ARN or use the version with a state machine alias. Deleting a state machine version won't terminate its in-progress executions. You can't delete a state machine version currently referenced by one or more aliases. Before you delete a version, you must either delete the aliases or update them to point to another state machine version. Related operations: PublishStateMachineVersion ListStateMachineVersions

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.AwsStepFunctionsXAmzTargetAwsstepfunctionsDeletestat.DeleteStateMachineVersion(
        new DeleteStateMachineVersionRequest
        {
            XAmzTarget = XAmzTarget1AwsStepFunctionsAwsStepFunctionsXAmzTargetAwsstepfunctionsDeletestatApi.AwsStepFunctionsDeleteStateMachineVersion,
        });
}
catch (ApiException<DeleteStateMachineVersionError> ex)
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

<code>[DeleteStateMachineVersionRequest](src/AwsStepFunctions/Requests/AwsStepFunctionsXAmzTargetAwsstepfunctionsDeletestat/DeleteStateMachineVersionRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AwsStepFunctions/Core/Exceptions/ApiException.cs)&lt;[DeleteStateMachineVersionError](src/AwsStepFunctions/Errors/DeleteStateMachineVersionError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## AwsStepFunctionsXAmzTargetAwsstepfunctionsDescribest

> Source: [AwsStepFunctionsXAmzTargetAwsstepfunctionsDescribest](src/AwsStepFunctions/Api/AwsStepFunctionsXAmzTargetAwsstepfunctionsDescribest.cs)

<details>
<summary><code>Task DescribeStateMachineAlias(DescribeStateMachineAliasRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns details about a state machine alias. Related operations: CreateStateMachineAlias ListStateMachineAliases UpdateStateMachineAlias DeleteStateMachineAlias

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.AwsStepFunctionsXAmzTargetAwsstepfunctionsDescribest.DescribeStateMachineAlias(
        new DescribeStateMachineAliasRequest
        {
            XAmzTarget = XAmzTargetAwsStepFunctionsAwsStepFunctionsXAmzTargetAwsstepfunctionsDescribestApi.AwsStepFunctionsDescribeStateMachineAlias,
        });
}
catch (ApiException<DescribeStateMachineAliasError> ex)
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

<code>[DescribeStateMachineAliasRequest](src/AwsStepFunctions/Requests/AwsStepFunctionsXAmzTargetAwsstepfunctionsDescribest/DescribeStateMachineAliasRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AwsStepFunctions/Core/Exceptions/ApiException.cs)&lt;[DescribeStateMachineAliasError](src/AwsStepFunctions/Errors/DescribeStateMachineAliasError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## AwsStepFunctionsXAmzTargetAwsstepfunctionsListstatem

> Source: [AwsStepFunctionsXAmzTargetAwsstepfunctionsListstatem](src/AwsStepFunctions/Api/AwsStepFunctionsXAmzTargetAwsstepfunctionsListstatem.cs)

<details>
<summary><code>Task ListStateMachineAliases(ListStateMachineAliasesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists aliases for a specified state machine ARN. Results are sorted by time, with the most recently created aliases listed first. To list aliases that reference a state machine version, you can specify the version ARN in the stateMachineArn parameter. If nextToken is returned, there are more results available. The value of nextToken is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. Each pagination token expires after 24 hours. Using an expired pagination token will return an HTTP 400 InvalidToken error. Related operations: CreateStateMachineAlias DescribeStateMachineAlias UpdateStateMachineAlias DeleteStateMachineAlias

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.AwsStepFunctionsXAmzTargetAwsstepfunctionsListstatem.ListStateMachineAliases(
        new ListStateMachineAliasesRequest
        {
            XAmzTarget = XAmzTarget1AwsStepFunctionsAwsStepFunctionsXAmzTargetAwsstepfunctionsListstatemApi.AwsStepFunctionsListStateMachineAliases,
        });
}
catch (ApiException<ListStateMachineAliasesError> ex)
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

<code>[ListStateMachineAliasesRequest](src/AwsStepFunctions/Requests/AwsStepFunctionsXAmzTargetAwsstepfunctionsListstatem/ListStateMachineAliasesRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AwsStepFunctions/Core/Exceptions/ApiException.cs)&lt;[ListStateMachineAliasesError](src/AwsStepFunctions/Errors/ListStateMachineAliasesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task ListStateMachineVersions(ListStateMachineVersionsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists versions for the specified state machine Amazon Resource Name (ARN). The results are sorted in descending order of the version creation time. If nextToken is returned, there are more results available. The value of nextToken is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. Each pagination token expires after 24 hours. Using an expired pagination token will return an HTTP 400 InvalidToken error. Related operations: PublishStateMachineVersion DeleteStateMachineVersion

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.AwsStepFunctionsXAmzTargetAwsstepfunctionsListstatem.ListStateMachineVersions(
        new ListStateMachineVersionsRequest
        {
            XAmzTarget = XAmzTargetAwsStepFunctionsAwsStepFunctionsXAmzTargetAwsstepfunctionsListstatemApi.AwsStepFunctionsListStateMachineVersions,
        });
}
catch (ApiException<ListStateMachineVersionsError> ex)
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

<code>[ListStateMachineVersionsRequest](src/AwsStepFunctions/Requests/AwsStepFunctionsXAmzTargetAwsstepfunctionsListstatem/ListStateMachineVersionsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AwsStepFunctions/Core/Exceptions/ApiException.cs)&lt;[ListStateMachineVersionsError](src/AwsStepFunctions/Errors/ListStateMachineVersionsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## AwsStepFunctionsXAmzTargetAwsstepfunctionsPublishsta

> Source: [AwsStepFunctionsXAmzTargetAwsstepfunctionsPublishsta](src/AwsStepFunctions/Api/AwsStepFunctionsXAmzTargetAwsstepfunctionsPublishsta.cs)

<details>
<summary><code>Task PublishStateMachineVersion(PublishStateMachineVersionRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a version from the current revision of a state machine. Use versions to create immutable snapshots of your state machine. You can start executions from versions either directly or with an alias. To create an alias, use CreateStateMachineAlias. You can publish up to 1000 versions for each state machine. You must manually delete unused versions using the DeleteStateMachineVersion API action. PublishStateMachineVersion is an idempotent API. It doesn't create a duplicate state machine version if it already exists for the current revision. Step Functions bases PublishStateMachineVersion's idempotency check on the stateMachineArn, name, and revisionId parameters. Requests with the same parameters return a successful idempotent response. If you don't specify a revisionId, Step Functions checks for a previously published version of the state machine's current revision. Related operations: DeleteStateMachineVersion ListStateMachineVersions

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.AwsStepFunctionsXAmzTargetAwsstepfunctionsPublishsta.PublishStateMachineVersion(
        new PublishStateMachineVersionRequest
        {
            XAmzTarget = XAmzTargetAwsStepFunctionsAwsStepFunctionsXAmzTargetAwsstepfunctionsPublishstaApi.AwsStepFunctionsPublishStateMachineVersion,
        });
}
catch (ApiException<PublishStateMachineVersionError> ex)
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

<code>[PublishStateMachineVersionRequest](src/AwsStepFunctions/Requests/AwsStepFunctionsXAmzTargetAwsstepfunctionsPublishsta/PublishStateMachineVersionRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AwsStepFunctions/Core/Exceptions/ApiException.cs)&lt;[PublishStateMachineVersionError](src/AwsStepFunctions/Errors/PublishStateMachineVersionError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## AwsStepFunctionsXAmzTargetAwsstepfunctionsUpdatestat

> Source: [AwsStepFunctionsXAmzTargetAwsstepfunctionsUpdatestat](src/AwsStepFunctions/Api/AwsStepFunctionsXAmzTargetAwsstepfunctionsUpdatestat.cs)

<details>
<summary><code>Task UpdateStateMachineAlias(UpdateStateMachineAliasRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates the configuration of an existing state machine alias by modifying its description or routingConfiguration. You must specify at least one of the description or routingConfiguration parameters to update a state machine alias. UpdateStateMachineAlias is an idempotent API. Step Functions bases the idempotency check on the stateMachineAliasArn, description, and routingConfiguration parameters. Requests with the same parameters return an idempotent response. This operation is eventually consistent. All StartExecution requests made within a few seconds use the latest alias configuration. Executions started immediately after calling UpdateStateMachineAlias may use the previous routing configuration. Related operations: CreateStateMachineAlias DescribeStateMachineAlias ListStateMachineAliases DeleteStateMachineAlias

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.AwsStepFunctionsXAmzTargetAwsstepfunctionsUpdatestat.UpdateStateMachineAlias(
        new UpdateStateMachineAliasRequest
        {
            XAmzTarget = XAmzTargetAwsStepFunctionsAwsStepFunctionsXAmzTargetAwsstepfunctionsUpdatestatApi.AwsStepFunctionsUpdateStateMachineAlias,
        });
}
catch (ApiException<UpdateStateMachineAliasError> ex)
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

<code>[UpdateStateMachineAliasRequest](src/AwsStepFunctions/Requests/AwsStepFunctionsXAmzTargetAwsstepfunctionsUpdatestat/UpdateStateMachineAliasRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AwsStepFunctions/Core/Exceptions/ApiException.cs)&lt;[UpdateStateMachineAliasError](src/AwsStepFunctions/Errors/UpdateStateMachineAliasError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Operations

> Source: [Operations](src/AwsStepFunctions/Api/Operations.cs)

<details>
<summary><code>Task PublishStateMachineVersion2(PublishStateMachineVersion2Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a version from the current revision of a state machine. Use versions to create immutable snapshots of your state machine. You can start executions from versions either directly or with an alias. To create an alias, use CreateStateMachineAlias. You can publish up to 1000 versions for each state machine. You must manually delete unused versions using the DeleteStateMachineVersion API action. PublishStateMachineVersion is an idempotent API. It doesn't create a duplicate state machine version if it already exists for the current revision. Step Functions bases PublishStateMachineVersion's idempotency check on the stateMachineArn, name, and revisionId parameters. Requests with the same parameters return a successful idempotent response. If you don't specify a revisionId, Step Functions checks for a previously published version of the state machine's current revision. Related operations: DeleteStateMachineVersion ListStateMachineVersions

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.Operations.PublishStateMachineVersion2(new PublishStateMachineVersion2Request
    {
        XAmzTarget = XAmzTargetAwsStepFunctionsAwsStepFunctionsXAmzTargetAwsstepfunctionsPublishstaApi.AwsStepFunctionsPublishStateMachineVersion,
    });
}
catch (ApiException<PublishStateMachineVersion2Error> ex)
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

<code>[PublishStateMachineVersion2Request](src/AwsStepFunctions/Requests/Operations/PublishStateMachineVersion2Request.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AwsStepFunctions/Core/Exceptions/ApiException.cs)&lt;[PublishStateMachineVersion2Error](src/AwsStepFunctions/Errors/PublishStateMachineVersion2Error.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task RedriveExecution(RedriveExecutionRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Restarts unsuccessful executions of Standard workflows that didn't complete successfully in the last 14 days. These include failed, aborted, or timed out executions. When you redrive an execution, it continues the failed execution from the unsuccessful step and uses the same input. Step Functions preserves the results and execution history of the successful steps, and doesn't rerun these steps when you redrive an execution. Redriven executions use the same state machine definition and execution ARN as the original execution attempt. For workflows that include an Inline Map or Parallel state, RedriveExecution API action reschedules and redrives only the iterations and branches that failed or aborted. To redrive a workflow that includes a Distributed Map state whose Map Run failed, you must redrive the parent workflow. The parent workflow redrives all the unsuccessful states, including a failed Map Run. If a Map Run was not started in the original execution attempt, the redriven parent workflow starts the Map Run. This API action is not supported by EXPRESS state machines. However, you can restart the unsuccessful executions of Express child workflows in a Distributed Map by redrivin

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.Operations.RedriveExecution(new RedriveExecutionRequest
    {
        XAmzTarget = XAmzTarget1AwsStepFunctionsOperationsApi.AwsStepFunctionsRedriveExecution,
    });
}
catch (ApiException<RedriveExecutionError> ex)
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

<code>[RedriveExecutionRequest](src/AwsStepFunctions/Requests/Operations/RedriveExecutionRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AwsStepFunctions/Core/Exceptions/ApiException.cs)&lt;[RedriveExecutionError](src/AwsStepFunctions/Errors/RedriveExecutionError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task TestState(TestStateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Accepts the definition of a single state and executes it. You can test a state without creating a state machine or updating an existing state machine. Using this API, you can test the following: A state's input and output processing data flow An Amazon Web Services service integration request and response An HTTP Task request and response You can call this API on only one state at a time. The states that you can test include the following: All Task types except Activity Pass Wait Choice Succeed Fail The TestState API assumes an IAM role which must contain the required IAM permissions for the resources your state is accessing. For information about the permissions a state might need, see IAM permissions to test a state. The TestState API can run for up to five minutes. If the execution of a state exceeds this duration, it fails with the States.Timeout error. TestState only supports the following when a mock is specified: Activity tasks, .sync or .waitForTaskToken service integration patterns, Parallel, or Map states.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.Operations.TestState(new TestStateRequest
    {
        XAmzTarget = XAmzTarget2AwsStepFunctionsOperationsApi.AwsStepFunctionsTestState,
    });
}
catch (ApiException<TestStateError> ex)
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

<code>[TestStateRequest](src/AwsStepFunctions/Requests/Operations/TestStateRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AwsStepFunctions/Core/Exceptions/ApiException.cs)&lt;[TestStateError](src/AwsStepFunctions/Errors/TestStateError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task ValidateStateMachineDefinition(ValidateStateMachineDefinitionRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Validates the syntax of a state machine definition specified in Amazon States Language (ASL), a JSON-based, structured language. You can validate that a state machine definition is correct without creating a state machine resource. Suggested uses for ValidateStateMachineDefinition: Integrate automated checks into your code review or Continuous Integration (CI) process to check state machine definitions before starting deployments. Run validation from a Git pre-commit hook to verify the definition before committing to your source repository. Validation will look for problems in your state machine definition and return a result and a list of diagnostic elements. The result value will be OK when your workflow definition can be successfully created or updated. Note the result can be OK even when diagnostic warnings are present in the response. The result value will be FAIL when the workflow definition contains errors that would prevent you from creating or updating your state machine. The list of ValidateStateMachineDefinitionDiagnostic data elements can contain zero or more WARNING and/or ERROR elements. The ValidateStateMachineDefinition API might add new diagnostics in the future, a

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.Operations.ValidateStateMachineDefinition(new ValidateStateMachineDefinitionRequest
    {
        XAmzTarget = XAmzTarget3AwsStepFunctionsOperationsApi.AwsStepFunctionsValidateStateMachineDefinition,
    });
}
catch (ApiException<ValidateStateMachineDefinitionError> ex)
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

<code>[ValidateStateMachineDefinitionRequest](src/AwsStepFunctions/Requests/Operations/ValidateStateMachineDefinitionRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AwsStepFunctions/Core/Exceptions/ApiException.cs)&lt;[ValidateStateMachineDefinitionError](src/AwsStepFunctions/Errors/ValidateStateMachineDefinitionError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## StateMachines

> Source: [StateMachines](src/AwsStepFunctions/Api/StateMachines.cs)

<details>
<summary><code>Task CreateStateMachine2(CreateStateMachine2Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a state machine. A state machine consists of a collection of states that can do work (Task states), determine to which states to transition next (Choice states), stop an execution with an error (Fail states), and so on. State machines are specified using a JSON-based, structured language. For more information, see Amazon States Language in the Step Functions User Guide. If you set the publish parameter of this API action to true, it publishes version 1 as the first revision of the state machine. For additional control over security, you can encrypt your data using a customer-managed key for Step Functions state machines. You can configure a symmetric KMS key and data key reuse period when creating or updating a State Machine. The execution history and state machine definition will be encrypted with the key applied to the State Machine. This operation is eventually consistent. The results are best effort and may not reflect very recent updates and changes. CreateStateMachine is an idempotent API. Subsequent requests won’t create a duplicate resource if it was already created. CreateStateMachine's idempotency check is based on the state machine name, definition, type, Logging

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.StateMachines.CreateStateMachine2(new CreateStateMachine2Request
    {
        XAmzTarget = XAmzTargetAwsStepFunctionsStateMachinesApi.AwsStepFunctionsCreateStateMachine,
    });
}
catch (ApiException<CreateStateMachine2Error> ex)
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

<code>[CreateStateMachine2Request](src/AwsStepFunctions/Requests/StateMachines/CreateStateMachine2Request.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AwsStepFunctions/Core/Exceptions/ApiException.cs)&lt;[CreateStateMachine2Error](src/AwsStepFunctions/Errors/CreateStateMachine2Error.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task DeleteStateMachine2(DeleteStateMachine2Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a state machine. This is an asynchronous operation. It sets the state machine's status to DELETING and begins the deletion process. A state machine is deleted only when all its executions are completed. On the next state transition, the state machine's executions are terminated. A qualified state machine ARN can either refer to a Distributed Map state defined within a state machine, a version ARN, or an alias ARN. The following are some examples of qualified and unqualified state machine ARNs: The following qualified state machine ARN refers to a Distributed Map state with a label mapStateLabel in a state machine named myStateMachine. arn:partition:states:region:account-id:stateMachine:myStateMachine/mapStateLabel If you provide a qualified state machine ARN that refers to a Distributed Map state, the request fails with ValidationException. The following unqualified state machine ARN refers to a state machine named myStateMachine. arn:partition:states:region:account-id:stateMachine:myStateMachine This API action also deletes all versions and aliases associated with a state machine. For EXPRESS state machines, the deletion happens eventually (usually in less than a minute).

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.StateMachines.DeleteStateMachine2(new DeleteStateMachine2Request
    {
        XAmzTarget = XAmzTarget1AwsStepFunctionsStateMachinesApi.AwsStepFunctionsDeleteStateMachine,
    });
}
catch (ApiException<DeleteStateMachine2Error> ex)
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

<code>[DeleteStateMachine2Request](src/AwsStepFunctions/Requests/StateMachines/DeleteStateMachine2Request.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AwsStepFunctions/Core/Exceptions/ApiException.cs)&lt;[DeleteStateMachine2Error](src/AwsStepFunctions/Errors/DeleteStateMachine2Error.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task DescribeStateMachine2(DescribeStateMachine2Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Provides information about a state machine's definition, its IAM role Amazon Resource Name (ARN), and configuration. A qualified state machine ARN can either refer to a Distributed Map state defined within a state machine, a version ARN, or an alias ARN. The following are some examples of qualified and unqualified state machine ARNs: The following qualified state machine ARN refers to a Distributed Map state with a label mapStateLabel in a state machine named myStateMachine. arn:partition:states:region:account-id:stateMachine:myStateMachine/mapStateLabel If you provide a qualified state machine ARN that refers to a Distributed Map state, the request fails with ValidationException. The following qualified state machine ARN refers to an alias named PROD. arn::states:::stateMachine: If you provide a qualified state machine ARN that refers to a version ARN or an alias ARN, the request starts execution for that version or alias. The following unqualified state machine ARN refers to a state machine named myStateMachine. arn::states:::stateMachine: This API action returns the details for a state machine version if the stateMachineArn you specify is a state machine version ARN. This operat

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.StateMachines.DescribeStateMachine2(new DescribeStateMachine2Request
    {
        XAmzTarget = XAmzTarget2AwsStepFunctionsStateMachinesApi.AwsStepFunctionsDescribeStateMachine,
    });
}
catch (ApiException<DescribeStateMachine2Error> ex)
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

<code>[DescribeStateMachine2Request](src/AwsStepFunctions/Requests/StateMachines/DescribeStateMachine2Request.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AwsStepFunctions/Core/Exceptions/ApiException.cs)&lt;[DescribeStateMachine2Error](src/AwsStepFunctions/Errors/DescribeStateMachine2Error.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task DescribeStateMachineForExecution2(DescribeStateMachineForExecution2Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Provides information about a state machine's definition, its execution role ARN, and configuration. If a Map Run dispatched the execution, this action returns the Map Run Amazon Resource Name (ARN) in the response. The state machine returned is the state machine associated with the Map Run. This operation is eventually consistent. The results are best effort and may not reflect very recent updates and changes. This API action is not supported by EXPRESS state machines.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.StateMachines.DescribeStateMachineForExecution2(new DescribeStateMachineForExecution2Request
    {
        XAmzTarget = XAmzTarget3AwsStepFunctionsStateMachinesApi.AwsStepFunctionsDescribeStateMachineForExecution,
    });
}
catch (ApiException<DescribeStateMachineForExecution2Error> ex)
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

<code>[DescribeStateMachineForExecution2Request](src/AwsStepFunctions/Requests/StateMachines/DescribeStateMachineForExecution2Request.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AwsStepFunctions/Core/Exceptions/ApiException.cs)&lt;[DescribeStateMachineForExecution2Error](src/AwsStepFunctions/Errors/DescribeStateMachineForExecution2Error.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task ListStateMachines2(ListStateMachines2Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists the existing state machines. If nextToken is returned, there are more results available. The value of nextToken is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. Each pagination token expires after 24 hours. Using an expired pagination token will return an HTTP 400 InvalidToken error. This operation is eventually consistent. The results are best effort and may not reflect very recent updates and changes.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.StateMachines.ListStateMachines2(new ListStateMachines2Request
    {
        XAmzTarget = XAmzTarget4AwsStepFunctionsStateMachinesApi.AwsStepFunctionsListStateMachines,
    });
}
catch (ApiException<ListStateMachines2Error> ex)
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

<code>[ListStateMachines2Request](src/AwsStepFunctions/Requests/StateMachines/ListStateMachines2Request.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AwsStepFunctions/Core/Exceptions/ApiException.cs)&lt;[ListStateMachines2Error](src/AwsStepFunctions/Errors/ListStateMachines2Error.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task UpdateStateMachine2(UpdateStateMachine2Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates an existing state machine by modifying its definition, roleArn, loggingConfiguration, or EncryptionConfiguration. Running executions will continue to use the previous definition and roleArn. You must include at least one of definition or roleArn or you will receive a MissingRequiredParameter error. A qualified state machine ARN refers to a Distributed Map state defined within a state machine. For example, the qualified state machine ARN arn:partition:states:region:account-id:stateMachine:stateMachineName/mapStateLabel refers to a Distributed Map state with a label mapStateLabel in the state machine named stateMachineName. A qualified state machine ARN can either refer to a Distributed Map state defined within a state machine, a version ARN, or an alias ARN. The following are some examples of qualified and unqualified state machine ARNs: The following qualified state machine ARN refers to a Distributed Map state with a label mapStateLabel in a state machine named myStateMachine. arn:partition:states:region:account-id:stateMachine:myStateMachine/mapStateLabel If you provide a qualified state machine ARN that refers to a Distributed Map state, the request fails with Validation

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.StateMachines.UpdateStateMachine2(new UpdateStateMachine2Request
    {
        XAmzTarget = XAmzTarget5AwsStepFunctionsStateMachinesApi.AwsStepFunctionsUpdateStateMachine,
    });
}
catch (ApiException<UpdateStateMachine2Error> ex)
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

<code>[UpdateStateMachine2Request](src/AwsStepFunctions/Requests/StateMachines/UpdateStateMachine2Request.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AwsStepFunctions/Core/Exceptions/ApiException.cs)&lt;[UpdateStateMachine2Error](src/AwsStepFunctions/Errors/UpdateStateMachine2Error.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

