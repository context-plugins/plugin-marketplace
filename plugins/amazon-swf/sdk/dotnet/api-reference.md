# Reference

Every operation below is shown in its throwing form. On an error status it throws `ApiException<TError>` — the status code, headers, content type and the operation's error type, `RawError` (the raw body) when the spec declares none — and where an operation offers an `…AsResult` sibling, that sibling returns `ApiResult<TResponse, TError>` instead. A request that produces no usable response surfaces as `SdkConnectionException` or `SdkTimeoutException`, a body that does not match the documented response type as `ResponseDeserializationException`, and a required credential that is not configured, or one that cannot be applied, as `AuthSchemeException`; all of them derive from `SdkException` and name the failed call. See [README → Error Handling](README.md#error-handling).

> Source: [AmazonSwfClient](src/AmazonSwf/AmazonSwfClient.cs)

## AmazonSimpleWorkflowService

> Source: [AmazonSimpleWorkflowService](src/AmazonSwf/Api/AmazonSimpleWorkflowService.cs)

<details>
<summary><code>Task CountClosedWorkflowExecutions(CountClosedWorkflowExecutionsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the number of closed workflow executions within the given domain that meet the specified filtering criteria. This operation is eventually consistent. The results are best effort and may not exactly reflect recent updates and changes. Access Control You can use IAM policies to control this action's access to Amazon SWF resources as follows: Use a Resource element with the domain name to limit the action to only specified domains. Use an Action element to allow or deny permission to call this action. Constrain the following parameters by using a Condition element with the appropriate keys. tagFilter.tag: String constraint. The key is swf:tagFilter.tag. typeFilter.name: String constraint. The key is swf:typeFilter.name. typeFilter.version: String constraint. The key is swf:typeFilter.version. If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's cause parameter is set to OPERATION_NOT_PERMITTED. For details and example IAM policies, see Using IAM to Manage Access to Amazon SWF Workflows in the Amazon SWF Developer Guide.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.AmazonSimpleWorkflowService.CountClosedWorkflowExecutions(new CountClosedWorkflowExecutionsRequest
    {
        XAmzTarget = XAmzTarget.SimpleWorkflowServiceCountClosedWorkflowExecutions,
    });
}
catch (ApiException<CountClosedWorkflowExecutionsError> ex)
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

<code>[CountClosedWorkflowExecutionsRequest](src/AmazonSwf/Requests/AmazonSimpleWorkflowService/CountClosedWorkflowExecutionsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AmazonSwf/Core/Exceptions/ApiException.cs)&lt;[CountClosedWorkflowExecutionsError](src/AmazonSwf/Errors/CountClosedWorkflowExecutionsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task CountOpenWorkflowExecutions(CountOpenWorkflowExecutionsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the number of open workflow executions within the given domain that meet the specified filtering criteria. This operation is eventually consistent. The results are best effort and may not exactly reflect recent updates and changes. Access Control You can use IAM policies to control this action's access to Amazon SWF resources as follows: Use a Resource element with the domain name to limit the action to only specified domains. Use an Action element to allow or deny permission to call this action. Constrain the following parameters by using a Condition element with the appropriate keys. tagFilter.tag: String constraint. The key is swf:tagFilter.tag. typeFilter.name: String constraint. The key is swf:typeFilter.name. typeFilter.version: String constraint. The key is swf:typeFilter.version. If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's cause parameter is set to OPERATION_NOT_PERMITTED. For details and example IAM policies, see Using IAM to Manage Access to Amazon SWF Workflows in the Amazon SWF Developer Guide.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.AmazonSimpleWorkflowService.CountOpenWorkflowExecutions(new CountOpenWorkflowExecutionsRequest
    {
        XAmzTarget = XAmzTarget1.SimpleWorkflowServiceCountOpenWorkflowExecutions,
    });
}
catch (ApiException<CountOpenWorkflowExecutionsError> ex)
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

<code>[CountOpenWorkflowExecutionsRequest](src/AmazonSwf/Requests/AmazonSimpleWorkflowService/CountOpenWorkflowExecutionsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AmazonSwf/Core/Exceptions/ApiException.cs)&lt;[CountOpenWorkflowExecutionsError](src/AmazonSwf/Errors/CountOpenWorkflowExecutionsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task CountPendingActivityTasks(CountPendingActivityTasksRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the estimated number of activity tasks in the specified task list. The count returned is an approximation and isn't guaranteed to be exact. If you specify a task list that no activity task was ever scheduled in then 0 is returned. Access Control You can use IAM policies to control this action's access to Amazon SWF resources as follows: Use a Resource element with the domain name to limit the action to only specified domains. Use an Action element to allow or deny permission to call this action. Constrain the taskList.name parameter by using a Condition element with the swf:taskList.name key to allow the action to access only certain task lists. If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's cause parameter is set to OPERATION_NOT_PERMITTED. For details and example IAM policies, see Using IAM to Manage Access to Amazon SWF Workflows in the Amazon SWF Developer Guide.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.AmazonSimpleWorkflowService.CountPendingActivityTasks(new CountPendingActivityTasksRequest
    {
        XAmzTarget = XAmzTarget2.SimpleWorkflowServiceCountPendingActivityTasks,
    });
}
catch (ApiException<CountPendingActivityTasksError> ex)
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

<code>[CountPendingActivityTasksRequest](src/AmazonSwf/Requests/AmazonSimpleWorkflowService/CountPendingActivityTasksRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AmazonSwf/Core/Exceptions/ApiException.cs)&lt;[CountPendingActivityTasksError](src/AmazonSwf/Errors/CountPendingActivityTasksError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task CountPendingDecisionTasks(CountPendingDecisionTasksRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the estimated number of decision tasks in the specified task list. The count returned is an approximation and isn't guaranteed to be exact. If you specify a task list that no decision task was ever scheduled in then 0 is returned. Access Control You can use IAM policies to control this action's access to Amazon SWF resources as follows: Use a Resource element with the domain name to limit the action to only specified domains. Use an Action element to allow or deny permission to call this action. Constrain the taskList.name parameter by using a Condition element with the swf:taskList.name key to allow the action to access only certain task lists. If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's cause parameter is set to OPERATION_NOT_PERMITTED. For details and example IAM policies, see Using IAM to Manage Access to Amazon SWF Workflows in the Amazon SWF Developer Guide.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.AmazonSimpleWorkflowService.CountPendingDecisionTasks(new CountPendingDecisionTasksRequest
    {
        XAmzTarget = XAmzTarget3.SimpleWorkflowServiceCountPendingDecisionTasks,
    });
}
catch (ApiException<CountPendingDecisionTasksError> ex)
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

<code>[CountPendingDecisionTasksRequest](src/AmazonSwf/Requests/AmazonSimpleWorkflowService/CountPendingDecisionTasksRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AmazonSwf/Core/Exceptions/ApiException.cs)&lt;[CountPendingDecisionTasksError](src/AmazonSwf/Errors/CountPendingDecisionTasksError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task DeprecateActivityType(DeprecateActivityTypeRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deprecates the specified activity type. After an activity type has been deprecated, you cannot create new tasks of that activity type. Tasks of this type that were scheduled before the type was deprecated continue to run. Access Control You can use IAM policies to control this action's access to Amazon SWF resources as follows: Use a Resource element with the domain name to limit the action to only specified domains. Use an Action element to allow or deny permission to call this action. Constrain the following parameters by using a Condition element with the appropriate keys. activityType.name: String constraint. The key is swf:activityType.name. activityType.version: String constraint. The key is swf:activityType.version. If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's cause parameter is set to OPERATION_NOT_PERMITTED. For details and example IAM policies, see Using IAM to Manage Access to Amazon SWF Workflows in the Amazon SWF Developer Guide.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.AmazonSimpleWorkflowService.DeprecateActivityType(new DeprecateActivityTypeRequest
    {
        XAmzTarget = XAmzTarget4.SimpleWorkflowServiceDeprecateActivityType,
    });
}
catch (ApiException<DeprecateActivityTypeError> ex)
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

<code>[DeprecateActivityTypeRequest](src/AmazonSwf/Requests/AmazonSimpleWorkflowService/DeprecateActivityTypeRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AmazonSwf/Core/Exceptions/ApiException.cs)&lt;[DeprecateActivityTypeError](src/AmazonSwf/Errors/DeprecateActivityTypeError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task DeprecateDomain(DeprecateDomainRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deprecates the specified domain. After a domain has been deprecated it cannot be used to create new workflow executions or register new types. However, you can still use visibility actions on this domain. Deprecating a domain also deprecates all activity and workflow types registered in the domain. Executions that were started before the domain was deprecated continues to run. This operation is eventually consistent. The results are best effort and may not exactly reflect recent updates and changes. Access Control You can use IAM policies to control this action's access to Amazon SWF resources as follows: Use a Resource element with the domain name to limit the action to only specified domains. Use an Action element to allow or deny permission to call this action. You cannot use an IAM policy to constrain this action's parameters. If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's cause parameter is set to OPERATION_NOT_PERMITTED. For details and example IAM policies, see Using IAM to Manage Access to Amazon SWF Workflows in the Amazon SWF Develope

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.AmazonSimpleWorkflowService.DeprecateDomain(new DeprecateDomainRequest
    {
        XAmzTarget = XAmzTarget5.SimpleWorkflowServiceDeprecateDomain,
    });
}
catch (ApiException<DeprecateDomainError> ex)
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

<code>[DeprecateDomainRequest](src/AmazonSwf/Requests/AmazonSimpleWorkflowService/DeprecateDomainRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AmazonSwf/Core/Exceptions/ApiException.cs)&lt;[DeprecateDomainError](src/AmazonSwf/Errors/DeprecateDomainError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task DeprecateWorkflowType(DeprecateWorkflowTypeRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deprecates the specified workflow type. After a workflow type has been deprecated, you cannot create new executions of that type. Executions that were started before the type was deprecated continues to run. A deprecated workflow type may still be used when calling visibility actions. This operation is eventually consistent. The results are best effort and may not exactly reflect recent updates and changes. Access Control You can use IAM policies to control this action's access to Amazon SWF resources as follows: Use a Resource element with the domain name to limit the action to only specified domains. Use an Action element to allow or deny permission to call this action. Constrain the following parameters by using a Condition element with the appropriate keys. workflowType.name: String constraint. The key is swf:workflowType.name. workflowType.version: String constraint. The key is swf:workflowType.version. If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's cause parameter is set to OPERATION_NOT_PERMITTED. For details and example IAM policies, se

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.AmazonSimpleWorkflowService.DeprecateWorkflowType(new DeprecateWorkflowTypeRequest
    {
        XAmzTarget = XAmzTarget6.SimpleWorkflowServiceDeprecateWorkflowType,
    });
}
catch (ApiException<DeprecateWorkflowTypeError> ex)
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

<code>[DeprecateWorkflowTypeRequest](src/AmazonSwf/Requests/AmazonSimpleWorkflowService/DeprecateWorkflowTypeRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AmazonSwf/Core/Exceptions/ApiException.cs)&lt;[DeprecateWorkflowTypeError](src/AmazonSwf/Errors/DeprecateWorkflowTypeError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task DescribeActivityType(DescribeActivityTypeRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns information about the specified activity type. This includes configuration settings provided when the type was registered and other general information about the type. Access Control You can use IAM policies to control this action's access to Amazon SWF resources as follows: Use a Resource element with the domain name to limit the action to only specified domains. Use an Action element to allow or deny permission to call this action. Constrain the following parameters by using a Condition element with the appropriate keys. activityType.name: String constraint. The key is swf:activityType.name. activityType.version: String constraint. The key is swf:activityType.version. If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's cause parameter is set to OPERATION_NOT_PERMITTED. For details and example IAM policies, see Using IAM to Manage Access to Amazon SWF Workflows in the Amazon SWF Developer Guide.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.AmazonSimpleWorkflowService.DescribeActivityType(new DescribeActivityTypeRequest
    {
        XAmzTarget = XAmzTarget20.SimpleWorkflowServiceDescribeActivityType,
    });
}
catch (ApiException<DescribeActivityTypeError> ex)
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

<code>[DescribeActivityTypeRequest](src/AmazonSwf/Requests/AmazonSimpleWorkflowService/DescribeActivityTypeRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AmazonSwf/Core/Exceptions/ApiException.cs)&lt;[DescribeActivityTypeError](src/AmazonSwf/Errors/DescribeActivityTypeError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task DescribeDomain(DescribeDomainRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns information about the specified domain, including description and status. Access Control You can use IAM policies to control this action's access to Amazon SWF resources as follows: Use a Resource element with the domain name to limit the action to only specified domains. Use an Action element to allow or deny permission to call this action. You cannot use an IAM policy to constrain this action's parameters. If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's cause parameter is set to OPERATION_NOT_PERMITTED. For details and example IAM policies, see Using IAM to Manage Access to Amazon SWF Workflows in the Amazon SWF Developer Guide.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.AmazonSimpleWorkflowService.DescribeDomain(new DescribeDomainRequest
    {
        XAmzTarget = XAmzTarget26.SimpleWorkflowServiceDescribeDomain,
    });
}
catch (ApiException<DescribeDomainError> ex)
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

<code>[DescribeDomainRequest](src/AmazonSwf/Requests/AmazonSimpleWorkflowService/DescribeDomainRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AmazonSwf/Core/Exceptions/ApiException.cs)&lt;[DescribeDomainError](src/AmazonSwf/Errors/DescribeDomainError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task DescribeWorkflowExecution(DescribeWorkflowExecutionRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns information about the specified workflow execution including its type and some statistics. This operation is eventually consistent. The results are best effort and may not exactly reflect recent updates and changes. Access Control You can use IAM policies to control this action's access to Amazon SWF resources as follows: Use a Resource element with the domain name to limit the action to only specified domains. Use an Action element to allow or deny permission to call this action. You cannot use an IAM policy to constrain this action's parameters. If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's cause parameter is set to OPERATION_NOT_PERMITTED. For details and example IAM policies, see Using IAM to Manage Access to Amazon SWF Workflows in the Amazon SWF Developer Guide.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.AmazonSimpleWorkflowService.DescribeWorkflowExecution(new DescribeWorkflowExecutionRequest
    {
        XAmzTarget = XAmzTarget29.SimpleWorkflowServiceDescribeWorkflowExecution,
    });
}
catch (ApiException<DescribeWorkflowExecutionError> ex)
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

<code>[DescribeWorkflowExecutionRequest](src/AmazonSwf/Requests/AmazonSimpleWorkflowService/DescribeWorkflowExecutionRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AmazonSwf/Core/Exceptions/ApiException.cs)&lt;[DescribeWorkflowExecutionError](src/AmazonSwf/Errors/DescribeWorkflowExecutionError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task DescribeWorkflowType(DescribeWorkflowTypeRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns information about the specified workflow type. This includes configuration settings specified when the type was registered and other information such as creation date, current status, etc. Access Control You can use IAM policies to control this action's access to Amazon SWF resources as follows: Use a Resource element with the domain name to limit the action to only specified domains. Use an Action element to allow or deny permission to call this action. Constrain the following parameters by using a Condition element with the appropriate keys. workflowType.name: String constraint. The key is swf:workflowType.name. workflowType.version: String constraint. The key is swf:workflowType.version. If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's cause parameter is set to OPERATION_NOT_PERMITTED. For details and example IAM policies, see Using IAM to Manage Access to Amazon SWF Workflows in the Amazon SWF Developer Guide.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.AmazonSimpleWorkflowService.DescribeWorkflowType(new DescribeWorkflowTypeRequest
    {
        XAmzTarget = XAmzTarget23.SimpleWorkflowServiceDescribeWorkflowType,
    });
}
catch (ApiException<DescribeWorkflowTypeError> ex)
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

<code>[DescribeWorkflowTypeRequest](src/AmazonSwf/Requests/AmazonSimpleWorkflowService/DescribeWorkflowTypeRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AmazonSwf/Core/Exceptions/ApiException.cs)&lt;[DescribeWorkflowTypeError](src/AmazonSwf/Errors/DescribeWorkflowTypeError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task GetWorkflowExecutionHistory(GetWorkflowExecutionHistoryRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the history of the specified workflow execution. The results may be split into multiple pages. To retrieve subsequent pages, make the call again using the nextPageToken returned by the initial call. This operation is eventually consistent. The results are best effort and may not exactly reflect recent updates and changes. Access Control You can use IAM policies to control this action's access to Amazon SWF resources as follows: Use a Resource element with the domain name to limit the action to only specified domains. Use an Action element to allow or deny permission to call this action. You cannot use an IAM policy to constrain this action's parameters. If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's cause parameter is set to OPERATION_NOT_PERMITTED. For details and example IAM policies, see Using IAM to Manage Access to Amazon SWF Workflows in the Amazon SWF Developer Guide.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.AmazonSimpleWorkflowService.GetWorkflowExecutionHistory(new GetWorkflowExecutionHistoryRequest
    {
        XAmzTarget = XAmzTarget31.SimpleWorkflowServiceGetWorkflowExecutionHistory,
    });
}
catch (ApiException<GetWorkflowExecutionHistoryError> ex)
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

<code>[GetWorkflowExecutionHistoryRequest](src/AmazonSwf/Requests/AmazonSimpleWorkflowService/GetWorkflowExecutionHistoryRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AmazonSwf/Core/Exceptions/ApiException.cs)&lt;[GetWorkflowExecutionHistoryError](src/AmazonSwf/Errors/GetWorkflowExecutionHistoryError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task ListActivityTypes(ListActivityTypesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns information about all activities registered in the specified domain that match the specified name and registration status. The result includes information like creation date, current status of the activity, etc. The results may be split into multiple pages. To retrieve subsequent pages, make the call again using the nextPageToken returned by the initial call. Access Control You can use IAM policies to control this action's access to Amazon SWF resources as follows: Use a Resource element with the domain name to limit the action to only specified domains. Use an Action element to allow or deny permission to call this action. You cannot use an IAM policy to constrain this action's parameters. If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's cause parameter is set to OPERATION_NOT_PERMITTED. For details and example IAM policies, see Using IAM to Manage Access to Amazon SWF Workflows in the Amazon SWF Developer Guide.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.AmazonSimpleWorkflowService.ListActivityTypes(new ListActivityTypesRequest
    {
        XAmzTarget = XAmzTarget21.SimpleWorkflowServiceListActivityTypes,
    });
}
catch (ApiException<ListActivityTypesError> ex)
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

<code>[ListActivityTypesRequest](src/AmazonSwf/Requests/AmazonSimpleWorkflowService/ListActivityTypesRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AmazonSwf/Core/Exceptions/ApiException.cs)&lt;[ListActivityTypesError](src/AmazonSwf/Errors/ListActivityTypesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task ListClosedWorkflowExecutions(ListClosedWorkflowExecutionsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list of closed workflow executions in the specified domain that meet the filtering criteria. The results may be split into multiple pages. To retrieve subsequent pages, make the call again using the nextPageToken returned by the initial call. This operation is eventually consistent. The results are best effort and may not exactly reflect recent updates and changes. Access Control You can use IAM policies to control this action's access to Amazon SWF resources as follows: Use a Resource element with the domain name to limit the action to only specified domains. Use an Action element to allow or deny permission to call this action. Constrain the following parameters by using a Condition element with the appropriate keys. tagFilter.tag: String constraint. The key is swf:tagFilter.tag. typeFilter.name: String constraint. The key is swf:typeFilter.name. typeFilter.version: String constraint. The key is swf:typeFilter.version. If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's cause parameter is set to OPERATION_NOT_PERMITTED. For details and e

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.AmazonSimpleWorkflowService.ListClosedWorkflowExecutions(new ListClosedWorkflowExecutionsRequest
    {
        XAmzTarget = XAmzTarget32.SimpleWorkflowServiceListClosedWorkflowExecutions,
    });
}
catch (ApiException<ListClosedWorkflowExecutionsError> ex)
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

<code>[ListClosedWorkflowExecutionsRequest](src/AmazonSwf/Requests/AmazonSimpleWorkflowService/ListClosedWorkflowExecutionsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AmazonSwf/Core/Exceptions/ApiException.cs)&lt;[ListClosedWorkflowExecutionsError](src/AmazonSwf/Errors/ListClosedWorkflowExecutionsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task ListDomains(ListDomainsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the list of domains registered in the account. The results may be split into multiple pages. To retrieve subsequent pages, make the call again using the nextPageToken returned by the initial call. This operation is eventually consistent. The results are best effort and may not exactly reflect recent updates and changes. Access Control You can use IAM policies to control this action's access to Amazon SWF resources as follows: Use a Resource element with the domain name to limit the action to only specified domains. The element must be set to arn:aws:swf::AccountID:domain/*, where AccountID is the account ID, with no dashes. Use an Action element to allow or deny permission to call this action. You cannot use an IAM policy to constrain this action's parameters. If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's cause parameter is set to OPERATION_NOT_PERMITTED. For details and example IAM policies, see Using IAM to Manage Access to Amazon SWF Workflows in the Amazon SWF Developer Guide.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.AmazonSimpleWorkflowService.ListDomains(new ListDomainsRequest
    {
        XAmzTarget = XAmzTarget27.SimpleWorkflowServiceListDomains,
    });
}
catch (ApiException<ListDomainsError> ex)
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

<code>[ListDomainsRequest](src/AmazonSwf/Requests/AmazonSimpleWorkflowService/ListDomainsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AmazonSwf/Core/Exceptions/ApiException.cs)&lt;[ListDomainsError](src/AmazonSwf/Errors/ListDomainsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task ListOpenWorkflowExecutions(ListOpenWorkflowExecutionsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list of open workflow executions in the specified domain that meet the filtering criteria. The results may be split into multiple pages. To retrieve subsequent pages, make the call again using the nextPageToken returned by the initial call. This operation is eventually consistent. The results are best effort and may not exactly reflect recent updates and changes. Access Control You can use IAM policies to control this action's access to Amazon SWF resources as follows: Use a Resource element with the domain name to limit the action to only specified domains. Use an Action element to allow or deny permission to call this action. Constrain the following parameters by using a Condition element with the appropriate keys. tagFilter.tag: String constraint. The key is swf:tagFilter.tag. typeFilter.name: String constraint. The key is swf:typeFilter.name. typeFilter.version: String constraint. The key is swf:typeFilter.version. If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's cause parameter is set to OPERATION_NOT_PERMITTED. For details and exa

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.AmazonSimpleWorkflowService.ListOpenWorkflowExecutions(new ListOpenWorkflowExecutionsRequest
    {
        XAmzTarget = XAmzTarget33.SimpleWorkflowServiceListOpenWorkflowExecutions,
    });
}
catch (ApiException<ListOpenWorkflowExecutionsError> ex)
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

<code>[ListOpenWorkflowExecutionsRequest](src/AmazonSwf/Requests/AmazonSimpleWorkflowService/ListOpenWorkflowExecutionsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AmazonSwf/Core/Exceptions/ApiException.cs)&lt;[ListOpenWorkflowExecutionsError](src/AmazonSwf/Errors/ListOpenWorkflowExecutionsError.cs)&gt;</code>

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

List tags for a given domain.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.AmazonSimpleWorkflowService.ListTagsForResource(new ListTagsForResourceRequest
    {
        XAmzTarget = XAmzTarget34.SimpleWorkflowServiceListTagsForResource,
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

<code>[ListTagsForResourceRequest](src/AmazonSwf/Requests/AmazonSimpleWorkflowService/ListTagsForResourceRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AmazonSwf/Core/Exceptions/ApiException.cs)&lt;[ListTagsForResourceError](src/AmazonSwf/Errors/ListTagsForResourceError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task ListWorkflowTypes(ListWorkflowTypesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns information about workflow types in the specified domain. The results may be split into multiple pages that can be retrieved by making the call repeatedly. Access Control You can use IAM policies to control this action's access to Amazon SWF resources as follows: Use a Resource element with the domain name to limit the action to only specified domains. Use an Action element to allow or deny permission to call this action. You cannot use an IAM policy to constrain this action's parameters. If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's cause parameter is set to OPERATION_NOT_PERMITTED. For details and example IAM policies, see Using IAM to Manage Access to Amazon SWF Workflows in the Amazon SWF Developer Guide.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.AmazonSimpleWorkflowService.ListWorkflowTypes(new ListWorkflowTypesRequest
    {
        XAmzTarget = XAmzTarget24.SimpleWorkflowServiceListWorkflowTypes,
    });
}
catch (ApiException<ListWorkflowTypesError> ex)
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

<code>[ListWorkflowTypesRequest](src/AmazonSwf/Requests/AmazonSimpleWorkflowService/ListWorkflowTypesRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AmazonSwf/Core/Exceptions/ApiException.cs)&lt;[ListWorkflowTypesError](src/AmazonSwf/Errors/ListWorkflowTypesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task PollForActivityTask(PollForActivityTaskRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Used by workers to get an ActivityTask from the specified activity taskList. This initiates a long poll, where the service holds the HTTP connection open and responds as soon as a task becomes available. The maximum time the service holds on to the request before responding is 60 seconds. If no task is available within 60 seconds, the poll returns an empty result. An empty result, in this context, means that an ActivityTask is returned, but that the value of taskToken is an empty string. If a task is returned, the worker should use its type to identify and process it correctly. Workers should set their client side socket timeout to at least 70 seconds (10 seconds higher than the maximum time service may hold the poll request). Access Control You can use IAM policies to control this action's access to Amazon SWF resources as follows: Use a Resource element with the domain name to limit the action to only specified domains. Use an Action element to allow or deny permission to call this action. Constrain the taskList.name parameter by using a Condition element with the swf:taskList.name key to allow the action to access only certain task lists. If the caller doesn't have sufficient pe

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.AmazonSimpleWorkflowService.PollForActivityTask(new PollForActivityTaskRequest
    {
        XAmzTarget = XAmzTarget7.SimpleWorkflowServicePollForActivityTask,
    });
}
catch (ApiException<PollForActivityTaskError> ex)
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

<code>[PollForActivityTaskRequest](src/AmazonSwf/Requests/AmazonSimpleWorkflowService/PollForActivityTaskRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AmazonSwf/Core/Exceptions/ApiException.cs)&lt;[PollForActivityTaskError](src/AmazonSwf/Errors/PollForActivityTaskError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task PollForDecisionTask(PollForDecisionTaskRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Used by deciders to get a DecisionTask from the specified decision taskList. A decision task may be returned for any open workflow execution that is using the specified task list. The task includes a paginated view of the history of the workflow execution. The decider should use the workflow type and the history to determine how to properly handle the task. This action initiates a long poll, where the service holds the HTTP connection open and responds as soon a task becomes available. If no decision task is available in the specified task list before the timeout of 60 seconds expires, an empty result is returned. An empty result, in this context, means that a DecisionTask is returned, but that the value of taskToken is an empty string. Deciders should set their client side socket timeout to at least 70 seconds (10 seconds higher than the timeout). Because the number of workflow history events for a single workflow execution might be very large, the result returned might be split up across a number of pages. To retrieve subsequent pages, make additional calls to PollForDecisionTask using the nextPageToken returned by the initial call. Note that you do not call GetWorkflowExecutionH

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.AmazonSimpleWorkflowService.PollForDecisionTask(new PollForDecisionTaskRequest
    {
        XAmzTarget = XAmzTarget8.SimpleWorkflowServicePollForDecisionTask,
    });
}
catch (ApiException<PollForDecisionTaskError> ex)
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

<code>[PollForDecisionTaskRequest](src/AmazonSwf/Requests/AmazonSimpleWorkflowService/PollForDecisionTaskRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AmazonSwf/Core/Exceptions/ApiException.cs)&lt;[PollForDecisionTaskError](src/AmazonSwf/Errors/PollForDecisionTaskError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task RecordActivityTaskHeartbeat(RecordActivityTaskHeartbeatRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Used by activity workers to report to the service that the ActivityTask represented by the specified taskToken is still making progress. The worker can also specify details of the progress, for example percent complete, using the details parameter. This action can also be used by the worker as a mechanism to check if cancellation is being requested for the activity task. If a cancellation is being attempted for the specified task, then the boolean cancelRequested flag returned by the service is set to true. This action resets the taskHeartbeatTimeout clock. The taskHeartbeatTimeout is specified in RegisterActivityType. This action doesn't in itself create an event in the workflow execution history. However, if the task times out, the workflow execution history contains a ActivityTaskTimedOut event that contains the information from the last heartbeat generated by the activity worker. The taskStartToCloseTimeout of an activity type is the maximum duration of an activity task, regardless of the number of RecordActivityTaskHeartbeat requests received. The taskStartToCloseTimeout is also specified in RegisterActivityType. This operation is only useful for long-lived activities to repor

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.AmazonSimpleWorkflowService.RecordActivityTaskHeartbeat(new RecordActivityTaskHeartbeatRequest
    {
        XAmzTarget = XAmzTarget9.SimpleWorkflowServiceRecordActivityTaskHeartbeat,
    });
}
catch (ApiException<RecordActivityTaskHeartbeatError> ex)
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

<code>[RecordActivityTaskHeartbeatRequest](src/AmazonSwf/Requests/AmazonSimpleWorkflowService/RecordActivityTaskHeartbeatRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AmazonSwf/Core/Exceptions/ApiException.cs)&lt;[RecordActivityTaskHeartbeatError](src/AmazonSwf/Errors/RecordActivityTaskHeartbeatError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task RegisterActivityType(RegisterActivityTypeRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Registers a new activity type along with its configuration settings in the specified domain. A TypeAlreadyExists fault is returned if the type already exists in the domain. You cannot change any configuration settings of the type after its registration, and it must be registered as a new version. Access Control You can use IAM policies to control this action's access to Amazon SWF resources as follows: Use a Resource element with the domain name to limit the action to only specified domains. Use an Action element to allow or deny permission to call this action. Constrain the following parameters by using a Condition element with the appropriate keys. defaultTaskList.name: String constraint. The key is swf:defaultTaskList.name. name: String constraint. The key is swf:name. version: String constraint. The key is swf:version. If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's cause parameter is set to OPERATION_NOT_PERMITTED. For details and example IAM policies, see Using IAM to Manage Access to Amazon SWF Workflows in the Amazon SWF Developer Guide.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.AmazonSimpleWorkflowService.RegisterActivityType(new RegisterActivityTypeRequest
    {
        XAmzTarget = XAmzTarget22.SimpleWorkflowServiceRegisterActivityType,
    });
}
catch (ApiException<RegisterActivityTypeError> ex)
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

<code>[RegisterActivityTypeRequest](src/AmazonSwf/Requests/AmazonSimpleWorkflowService/RegisterActivityTypeRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AmazonSwf/Core/Exceptions/ApiException.cs)&lt;[RegisterActivityTypeError](src/AmazonSwf/Errors/RegisterActivityTypeError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task RegisterDomain(RegisterDomainRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Registers a new domain. Access Control You can use IAM policies to control this action's access to Amazon SWF resources as follows: You cannot use an IAM policy to control domain access for this action. The name of the domain being registered is available as the resource of this action. Use an Action element to allow or deny permission to call this action. You cannot use an IAM policy to constrain this action's parameters. If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's cause parameter is set to OPERATION_NOT_PERMITTED. For details and example IAM policies, see Using IAM to Manage Access to Amazon SWF Workflows in the Amazon SWF Developer Guide.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.AmazonSimpleWorkflowService.RegisterDomain(new RegisterDomainRequest
    {
        XAmzTarget = XAmzTarget28.SimpleWorkflowServiceRegisterDomain,
    });
}
catch (ApiException<RegisterDomainError> ex)
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

<code>[RegisterDomainRequest](src/AmazonSwf/Requests/AmazonSimpleWorkflowService/RegisterDomainRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AmazonSwf/Core/Exceptions/ApiException.cs)&lt;[RegisterDomainError](src/AmazonSwf/Errors/RegisterDomainError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task RegisterWorkflowType(RegisterWorkflowTypeRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Registers a new workflow type and its configuration settings in the specified domain. The retention period for the workflow history is set by the RegisterDomain action. If the type already exists, then a TypeAlreadyExists fault is returned. You cannot change the configuration settings of a workflow type once it is registered and it must be registered as a new version. Access Control You can use IAM policies to control this action's access to Amazon SWF resources as follows: Use a Resource element with the domain name to limit the action to only specified domains. Use an Action element to allow or deny permission to call this action. Constrain the following parameters by using a Condition element with the appropriate keys. defaultTaskList.name: String constraint. The key is swf:defaultTaskList.name. name: String constraint. The key is swf:name. version: String constraint. The key is swf:version. If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's cause parameter is set to OPERATION_NOT_PERMITTED. For details and example IAM policies, see Using IAM to

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.AmazonSimpleWorkflowService.RegisterWorkflowType(new RegisterWorkflowTypeRequest
    {
        XAmzTarget = XAmzTarget25.SimpleWorkflowServiceRegisterWorkflowType,
    });
}
catch (ApiException<RegisterWorkflowTypeError> ex)
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

<code>[RegisterWorkflowTypeRequest](src/AmazonSwf/Requests/AmazonSimpleWorkflowService/RegisterWorkflowTypeRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AmazonSwf/Core/Exceptions/ApiException.cs)&lt;[RegisterWorkflowTypeError](src/AmazonSwf/Errors/RegisterWorkflowTypeError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task RequestCancelWorkflowExecution(RequestCancelWorkflowExecutionRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Records a WorkflowExecutionCancelRequested event in the currently running workflow execution identified by the given domain, workflowId, and runId. This logically requests the cancellation of the workflow execution as a whole. It is up to the decider to take appropriate actions when it receives an execution history with this event. If the runId isn't specified, the WorkflowExecutionCancelRequested event is recorded in the history of the current open workflow execution with the specified workflowId in the domain. Because this action allows the workflow to properly clean up and gracefully close, it should be used instead of TerminateWorkflowExecution when possible. Access Control You can use IAM policies to control this action's access to Amazon SWF resources as follows: Use a Resource element with the domain name to limit the action to only specified domains. Use an Action element to allow or deny permission to call this action. You cannot use an IAM policy to constrain this action's parameters. If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's cau

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.AmazonSimpleWorkflowService.RequestCancelWorkflowExecution(new RequestCancelWorkflowExecutionRequest
    {
        XAmzTarget = XAmzTarget10.SimpleWorkflowServiceRequestCancelWorkflowExecution,
    });
}
catch (ApiException<RequestCancelWorkflowExecutionError> ex)
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

<code>[RequestCancelWorkflowExecutionRequest](src/AmazonSwf/Requests/AmazonSimpleWorkflowService/RequestCancelWorkflowExecutionRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AmazonSwf/Core/Exceptions/ApiException.cs)&lt;[RequestCancelWorkflowExecutionError](src/AmazonSwf/Errors/RequestCancelWorkflowExecutionError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task RespondActivityTaskCanceled(RespondActivityTaskCanceledRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Used by workers to tell the service that the ActivityTask identified by the taskToken was successfully canceled. Additional details can be provided using the details argument. These details (if provided) appear in the ActivityTaskCanceled event added to the workflow history. Only use this operation if the canceled flag of a RecordActivityTaskHeartbeat request returns true and if the activity can be safely undone or abandoned. A task is considered open from the time that it is scheduled until it is closed. Therefore a task is reported as open while a worker is processing it. A task is closed after it has been specified in a call to RespondActivityTaskCompleted, RespondActivityTaskCanceled, RespondActivityTaskFailed, or the task has timed out. Access Control You can use IAM policies to control this action's access to Amazon SWF resources as follows: Use a Resource element with the domain name to limit the action to only specified domains. Use an Action element to allow or deny permission to call this action. You cannot use an IAM policy to constrain this action's parameters. If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside t

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.AmazonSimpleWorkflowService.RespondActivityTaskCanceled(new RespondActivityTaskCanceledRequest
    {
        XAmzTarget = XAmzTarget11.SimpleWorkflowServiceRespondActivityTaskCanceled,
    });
}
catch (ApiException<RespondActivityTaskCanceledError> ex)
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

<code>[RespondActivityTaskCanceledRequest](src/AmazonSwf/Requests/AmazonSimpleWorkflowService/RespondActivityTaskCanceledRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AmazonSwf/Core/Exceptions/ApiException.cs)&lt;[RespondActivityTaskCanceledError](src/AmazonSwf/Errors/RespondActivityTaskCanceledError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task RespondActivityTaskCompleted(RespondActivityTaskCompletedRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Used by workers to tell the service that the ActivityTask identified by the taskToken completed successfully with a result (if provided). The result appears in the ActivityTaskCompleted event in the workflow history. If the requested task doesn't complete successfully, use RespondActivityTaskFailed instead. If the worker finds that the task is canceled through the canceled flag returned by RecordActivityTaskHeartbeat, it should cancel the task, clean up and then call RespondActivityTaskCanceled. A task is considered open from the time that it is scheduled until it is closed. Therefore a task is reported as open while a worker is processing it. A task is closed after it has been specified in a call to RespondActivityTaskCompleted, RespondActivityTaskCanceled, RespondActivityTaskFailed, or the task has timed out. Access Control You can use IAM policies to control this action's access to Amazon SWF resources as follows: Use a Resource element with the domain name to limit the action to only specified domains. Use an Action element to allow or deny permission to call this action. You cannot use an IAM policy to constrain this action's parameters. If the caller doesn't have sufficient p

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.AmazonSimpleWorkflowService.RespondActivityTaskCompleted(new RespondActivityTaskCompletedRequest
    {
        XAmzTarget = XAmzTarget12.SimpleWorkflowServiceRespondActivityTaskCompleted,
    });
}
catch (ApiException<RespondActivityTaskCompletedError> ex)
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

<code>[RespondActivityTaskCompletedRequest](src/AmazonSwf/Requests/AmazonSimpleWorkflowService/RespondActivityTaskCompletedRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AmazonSwf/Core/Exceptions/ApiException.cs)&lt;[RespondActivityTaskCompletedError](src/AmazonSwf/Errors/RespondActivityTaskCompletedError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task RespondActivityTaskFailed(RespondActivityTaskFailedRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Used by workers to tell the service that the ActivityTask identified by the taskToken has failed with reason (if specified). The reason and details appear in the ActivityTaskFailed event added to the workflow history. A task is considered open from the time that it is scheduled until it is closed. Therefore a task is reported as open while a worker is processing it. A task is closed after it has been specified in a call to RespondActivityTaskCompleted, RespondActivityTaskCanceled, RespondActivityTaskFailed, or the task has timed out. Access Control You can use IAM policies to control this action's access to Amazon SWF resources as follows: Use a Resource element with the domain name to limit the action to only specified domains. Use an Action element to allow or deny permission to call this action. You cannot use an IAM policy to constrain this action's parameters. If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's cause parameter is set to OPERATION_NOT_PERMITTED. For details and example IAM policies, see Using IAM to Manage Access to Amazon SWF W

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.AmazonSimpleWorkflowService.RespondActivityTaskFailed(new RespondActivityTaskFailedRequest
    {
        XAmzTarget = XAmzTarget13.SimpleWorkflowServiceRespondActivityTaskFailed,
    });
}
catch (ApiException<RespondActivityTaskFailedError> ex)
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

<code>[RespondActivityTaskFailedRequest](src/AmazonSwf/Requests/AmazonSimpleWorkflowService/RespondActivityTaskFailedRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AmazonSwf/Core/Exceptions/ApiException.cs)&lt;[RespondActivityTaskFailedError](src/AmazonSwf/Errors/RespondActivityTaskFailedError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task RespondDecisionTaskCompleted(RespondDecisionTaskCompletedRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Used by deciders to tell the service that the DecisionTask identified by the taskToken has successfully completed. The decisions argument specifies the list of decisions made while processing the task. A DecisionTaskCompleted event is added to the workflow history. The executionContext specified is attached to the event in the workflow execution history. Access Control If an IAM policy grants permission to use RespondDecisionTaskCompleted, it can express permissions for the list of decisions in the decisions parameter. Each of the decisions has one or more parameters, much like a regular API call. To allow for policies to be as readable as possible, you can express permissions on decisions as if they were actual API calls, including applying conditions to some parameters. For more information, see Using IAM to Manage Access to Amazon SWF Workflows in the Amazon SWF Developer Guide.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.AmazonSimpleWorkflowService.RespondDecisionTaskCompleted(new RespondDecisionTaskCompletedRequest
    {
        XAmzTarget = XAmzTarget14.SimpleWorkflowServiceRespondDecisionTaskCompleted,
    });
}
catch (ApiException<RespondDecisionTaskCompletedError> ex)
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

<code>[RespondDecisionTaskCompletedRequest](src/AmazonSwf/Requests/AmazonSimpleWorkflowService/RespondDecisionTaskCompletedRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AmazonSwf/Core/Exceptions/ApiException.cs)&lt;[RespondDecisionTaskCompletedError](src/AmazonSwf/Errors/RespondDecisionTaskCompletedError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task SignalWorkflowExecution(SignalWorkflowExecutionRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Records a WorkflowExecutionSignaled event in the workflow execution history and creates a decision task for the workflow execution identified by the given domain, workflowId and runId. The event is recorded with the specified user defined signalName and input (if provided). If a runId isn't specified, then the WorkflowExecutionSignaled event is recorded in the history of the current open workflow with the matching workflowId in the domain. If the specified workflow execution isn't open, this method fails with UnknownResource. Access Control You can use IAM policies to control this action's access to Amazon SWF resources as follows: Use a Resource element with the domain name to limit the action to only specified domains. Use an Action element to allow or deny permission to call this action. You cannot use an IAM policy to constrain this action's parameters. If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's cause parameter is set to OPERATION_NOT_PERMITTED. For details and example IAM policies, see Using IAM to Manage Access to Amazon SWF Workflows

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.AmazonSimpleWorkflowService.SignalWorkflowExecution(new SignalWorkflowExecutionRequest
    {
        XAmzTarget = XAmzTarget15.SimpleWorkflowServiceSignalWorkflowExecution,
    });
}
catch (ApiException<SignalWorkflowExecutionError> ex)
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

<code>[SignalWorkflowExecutionRequest](src/AmazonSwf/Requests/AmazonSimpleWorkflowService/SignalWorkflowExecutionRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AmazonSwf/Core/Exceptions/ApiException.cs)&lt;[SignalWorkflowExecutionError](src/AmazonSwf/Errors/SignalWorkflowExecutionError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task StartWorkflowExecution(StartWorkflowExecutionRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Starts an execution of the workflow type in the specified domain using the provided workflowId and input data. This action returns the newly started workflow execution. Access Control You can use IAM policies to control this action's access to Amazon SWF resources as follows: Use a Resource element with the domain name to limit the action to only specified domains. Use an Action element to allow or deny permission to call this action. Constrain the following parameters by using a Condition element with the appropriate keys. tagList.member.0: The key is swf:tagList.member.0. tagList.member.1: The key is swf:tagList.member.1. tagList.member.2: The key is swf:tagList.member.2. tagList.member.3: The key is swf:tagList.member.3. tagList.member.4: The key is swf:tagList.member.4. taskList: String constraint. The key is swf:taskList.name. workflowType.name: String constraint. The key is swf:workflowType.name. workflowType.version: String constraint. The key is swf:workflowType.version. If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's cause parameter is

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.AmazonSimpleWorkflowService.StartWorkflowExecution(new StartWorkflowExecutionRequest
    {
        XAmzTarget = XAmzTarget30.SimpleWorkflowServiceStartWorkflowExecution,
    });
}
catch (ApiException<StartWorkflowExecutionError> ex)
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

<code>[StartWorkflowExecutionRequest](src/AmazonSwf/Requests/AmazonSimpleWorkflowService/StartWorkflowExecutionRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AmazonSwf/Core/Exceptions/ApiException.cs)&lt;[StartWorkflowExecutionError](src/AmazonSwf/Errors/StartWorkflowExecutionError.cs)&gt;</code>

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

Add a tag to a Amazon SWF domain. Amazon SWF supports a maximum of 50 tags per resource.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.AmazonSimpleWorkflowService.TagResource(new TagResourceRequest
    {
        XAmzTarget = XAmzTarget35.SimpleWorkflowServiceTagResource,
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

<code>[TagResourceRequest](src/AmazonSwf/Requests/AmazonSimpleWorkflowService/TagResourceRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AmazonSwf/Core/Exceptions/ApiException.cs)&lt;[TagResourceError](src/AmazonSwf/Errors/TagResourceError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task TerminateWorkflowExecution(TerminateWorkflowExecutionRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Records a WorkflowExecutionTerminated event and forces closure of the workflow execution identified by the given domain, runId, and workflowId. The child policy, registered with the workflow type or specified when starting this execution, is applied to any open child workflow executions of this workflow execution. If the identified workflow execution was in progress, it is terminated immediately. If a runId isn't specified, then the WorkflowExecutionTerminated event is recorded in the history of the current open workflow with the matching workflowId in the domain. You should consider using RequestCancelWorkflowExecution action instead because it allows the workflow to gracefully close while TerminateWorkflowExecution doesn't. Access Control You can use IAM policies to control this action's access to Amazon SWF resources as follows: Use a Resource element with the domain name to limit the action to only specified domains. Use an Action element to allow or deny permission to call this action. You cannot use an IAM policy to constrain this action's parameters. If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified con

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.AmazonSimpleWorkflowService.TerminateWorkflowExecution(new TerminateWorkflowExecutionRequest
    {
        XAmzTarget = XAmzTarget16.SimpleWorkflowServiceTerminateWorkflowExecution,
    });
}
catch (ApiException<TerminateWorkflowExecutionError> ex)
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

<code>[TerminateWorkflowExecutionRequest](src/AmazonSwf/Requests/AmazonSimpleWorkflowService/TerminateWorkflowExecutionRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AmazonSwf/Core/Exceptions/ApiException.cs)&lt;[TerminateWorkflowExecutionError](src/AmazonSwf/Errors/TerminateWorkflowExecutionError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task UndeprecateActivityType(UndeprecateActivityTypeRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Undeprecates a previously deprecated activity type. After an activity type has been undeprecated, you can create new tasks of that activity type. This operation is eventually consistent. The results are best effort and may not exactly reflect recent updates and changes. Access Control You can use IAM policies to control this action's access to Amazon SWF resources as follows: Use a Resource element with the domain name to limit the action to only specified domains. Use an Action element to allow or deny permission to call this action. Constrain the following parameters by using a Condition element with the appropriate keys. activityType.name: String constraint. The key is swf:activityType.name. activityType.version: String constraint. The key is swf:activityType.version. If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's cause parameter is set to OPERATION_NOT_PERMITTED. For details and example IAM policies, see Using IAM to Manage Access to Amazon SWF Workflows in the Amazon SWF Developer Guide.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.AmazonSimpleWorkflowService.UndeprecateActivityType(new UndeprecateActivityTypeRequest
    {
        XAmzTarget = XAmzTarget17.SimpleWorkflowServiceUndeprecateActivityType,
    });
}
catch (ApiException<UndeprecateActivityTypeError> ex)
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

<code>[UndeprecateActivityTypeRequest](src/AmazonSwf/Requests/AmazonSimpleWorkflowService/UndeprecateActivityTypeRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AmazonSwf/Core/Exceptions/ApiException.cs)&lt;[UndeprecateActivityTypeError](src/AmazonSwf/Errors/UndeprecateActivityTypeError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task UndeprecateDomain(UndeprecateDomainRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Undeprecates a previously deprecated domain. After a domain has been undeprecated it can be used to create new workflow executions or register new types. This operation is eventually consistent. The results are best effort and may not exactly reflect recent updates and changes. Access Control You can use IAM policies to control this action's access to Amazon SWF resources as follows: Use a Resource element with the domain name to limit the action to only specified domains. Use an Action element to allow or deny permission to call this action. You cannot use an IAM policy to constrain this action's parameters. If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's cause parameter is set to OPERATION_NOT_PERMITTED. For details and example IAM policies, see Using IAM to Manage Access to Amazon SWF Workflows in the Amazon SWF Developer Guide.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.AmazonSimpleWorkflowService.UndeprecateDomain(new UndeprecateDomainRequest
    {
        XAmzTarget = XAmzTarget18.SimpleWorkflowServiceUndeprecateDomain,
    });
}
catch (ApiException<UndeprecateDomainError> ex)
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

<code>[UndeprecateDomainRequest](src/AmazonSwf/Requests/AmazonSimpleWorkflowService/UndeprecateDomainRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AmazonSwf/Core/Exceptions/ApiException.cs)&lt;[UndeprecateDomainError](src/AmazonSwf/Errors/UndeprecateDomainError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task UndeprecateWorkflowType(UndeprecateWorkflowTypeRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Undeprecates a previously deprecated workflow type. After a workflow type has been undeprecated, you can create new executions of that type. This operation is eventually consistent. The results are best effort and may not exactly reflect recent updates and changes. Access Control You can use IAM policies to control this action's access to Amazon SWF resources as follows: Use a Resource element with the domain name to limit the action to only specified domains. Use an Action element to allow or deny permission to call this action. Constrain the following parameters by using a Condition element with the appropriate keys. workflowType.name: String constraint. The key is swf:workflowType.name. workflowType.version: String constraint. The key is swf:workflowType.version. If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's cause parameter is set to OPERATION_NOT_PERMITTED. For details and example IAM policies, see Using IAM to Manage Access to Amazon SWF Workflows in the Amazon SWF Developer Guide.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.AmazonSimpleWorkflowService.UndeprecateWorkflowType(new UndeprecateWorkflowTypeRequest
    {
        XAmzTarget = XAmzTarget19.SimpleWorkflowServiceUndeprecateWorkflowType,
    });
}
catch (ApiException<UndeprecateWorkflowTypeError> ex)
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

<code>[UndeprecateWorkflowTypeRequest](src/AmazonSwf/Requests/AmazonSimpleWorkflowService/UndeprecateWorkflowTypeRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AmazonSwf/Core/Exceptions/ApiException.cs)&lt;[UndeprecateWorkflowTypeError](src/AmazonSwf/Errors/UndeprecateWorkflowTypeError.cs)&gt;</code>

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

Remove a tag from a Amazon SWF domain.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.AmazonSimpleWorkflowService.UntagResource(new UntagResourceRequest
    {
        XAmzTarget = XAmzTarget36.SimpleWorkflowServiceUntagResource,
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

<code>[UntagResourceRequest](src/AmazonSwf/Requests/AmazonSimpleWorkflowService/UntagResourceRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AmazonSwf/Core/Exceptions/ApiException.cs)&lt;[UntagResourceError](src/AmazonSwf/Errors/UntagResourceError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Operations

> Source: [Operations](src/AmazonSwf/Api/Operations.cs)

<details>
<summary><code>Task CountClosedWorkflowExecutions2(CountClosedWorkflowExecutions2Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the number of closed workflow executions within the given domain that meet the specified filtering criteria. This operation is eventually consistent. The results are best effort and may not exactly reflect recent updates and changes. Access Control You can use IAM policies to control this action's access to Amazon SWF resources as follows: Use a Resource element with the domain name to limit the action to only specified domains. Use an Action element to allow or deny permission to call this action. Constrain the following parameters by using a Condition element with the appropriate keys. tagFilter.tag: String constraint. The key is swf:tagFilter.tag. typeFilter.name: String constraint. The key is swf:typeFilter.name. typeFilter.version: String constraint. The key is swf:typeFilter.version. If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's cause parameter is set to OPERATION_NOT_PERMITTED. For details and example IAM policies, see Using IAM to Manage Access to Amazon SWF Workflows in the Amazon SWF Developer Guide.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.Operations.CountClosedWorkflowExecutions2(new CountClosedWorkflowExecutions2Request
    {
        XAmzTarget = XAmzTarget.SimpleWorkflowServiceCountClosedWorkflowExecutions,
    });
}
catch (ApiException<CountClosedWorkflowExecutions2Error> ex)
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

<code>[CountClosedWorkflowExecutions2Request](src/AmazonSwf/Requests/Operations/CountClosedWorkflowExecutions2Request.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AmazonSwf/Core/Exceptions/ApiException.cs)&lt;[CountClosedWorkflowExecutions2Error](src/AmazonSwf/Errors/CountClosedWorkflowExecutions2Error.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task CountOpenWorkflowExecutions2(CountOpenWorkflowExecutions2Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the number of open workflow executions within the given domain that meet the specified filtering criteria. This operation is eventually consistent. The results are best effort and may not exactly reflect recent updates and changes. Access Control You can use IAM policies to control this action's access to Amazon SWF resources as follows: Use a Resource element with the domain name to limit the action to only specified domains. Use an Action element to allow or deny permission to call this action. Constrain the following parameters by using a Condition element with the appropriate keys. tagFilter.tag: String constraint. The key is swf:tagFilter.tag. typeFilter.name: String constraint. The key is swf:typeFilter.name. typeFilter.version: String constraint. The key is swf:typeFilter.version. If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's cause parameter is set to OPERATION_NOT_PERMITTED. For details and example IAM policies, see Using IAM to Manage Access to Amazon SWF Workflows in the Amazon SWF Developer Guide.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.Operations.CountOpenWorkflowExecutions2(new CountOpenWorkflowExecutions2Request
    {
        XAmzTarget = XAmzTarget1.SimpleWorkflowServiceCountOpenWorkflowExecutions,
    });
}
catch (ApiException<CountOpenWorkflowExecutions2Error> ex)
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

<code>[CountOpenWorkflowExecutions2Request](src/AmazonSwf/Requests/Operations/CountOpenWorkflowExecutions2Request.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AmazonSwf/Core/Exceptions/ApiException.cs)&lt;[CountOpenWorkflowExecutions2Error](src/AmazonSwf/Errors/CountOpenWorkflowExecutions2Error.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task CountPendingActivityTasks2(CountPendingActivityTasks2Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the estimated number of activity tasks in the specified task list. The count returned is an approximation and isn't guaranteed to be exact. If you specify a task list that no activity task was ever scheduled in then 0 is returned. Access Control You can use IAM policies to control this action's access to Amazon SWF resources as follows: Use a Resource element with the domain name to limit the action to only specified domains. Use an Action element to allow or deny permission to call this action. Constrain the taskList.name parameter by using a Condition element with the swf:taskList.name key to allow the action to access only certain task lists. If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's cause parameter is set to OPERATION_NOT_PERMITTED. For details and example IAM policies, see Using IAM to Manage Access to Amazon SWF Workflows in the Amazon SWF Developer Guide.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.Operations.CountPendingActivityTasks2(new CountPendingActivityTasks2Request
    {
        XAmzTarget = XAmzTarget2.SimpleWorkflowServiceCountPendingActivityTasks,
    });
}
catch (ApiException<CountPendingActivityTasks2Error> ex)
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

<code>[CountPendingActivityTasks2Request](src/AmazonSwf/Requests/Operations/CountPendingActivityTasks2Request.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AmazonSwf/Core/Exceptions/ApiException.cs)&lt;[CountPendingActivityTasks2Error](src/AmazonSwf/Errors/CountPendingActivityTasks2Error.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task CountPendingDecisionTasks2(CountPendingDecisionTasks2Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the estimated number of decision tasks in the specified task list. The count returned is an approximation and isn't guaranteed to be exact. If you specify a task list that no decision task was ever scheduled in then 0 is returned. Access Control You can use IAM policies to control this action's access to Amazon SWF resources as follows: Use a Resource element with the domain name to limit the action to only specified domains. Use an Action element to allow or deny permission to call this action. Constrain the taskList.name parameter by using a Condition element with the swf:taskList.name key to allow the action to access only certain task lists. If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's cause parameter is set to OPERATION_NOT_PERMITTED. For details and example IAM policies, see Using IAM to Manage Access to Amazon SWF Workflows in the Amazon SWF Developer Guide.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.Operations.CountPendingDecisionTasks2(new CountPendingDecisionTasks2Request
    {
        XAmzTarget = XAmzTarget3.SimpleWorkflowServiceCountPendingDecisionTasks,
    });
}
catch (ApiException<CountPendingDecisionTasks2Error> ex)
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

<code>[CountPendingDecisionTasks2Request](src/AmazonSwf/Requests/Operations/CountPendingDecisionTasks2Request.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AmazonSwf/Core/Exceptions/ApiException.cs)&lt;[CountPendingDecisionTasks2Error](src/AmazonSwf/Errors/CountPendingDecisionTasks2Error.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task DeleteActivityType(DeleteActivityTypeRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes the specified activity type. Note: Prior to deletion, activity types must first be deprecated. After an activity type has been deleted, you cannot schedule new activities of that type. Activities that started before the type was deleted will continue to run. Access Control You can use IAM policies to control this action's access to Amazon SWF resources as follows: Use a Resource element with the domain name to limit the action to only specified domains. Use an Action element to allow or deny permission to call this action. Constrain the following parameters by using a Condition element with the appropriate keys. activityType.name: String constraint. The key is swf:activityType.name. activityType.version: String constraint. The key is swf:activityType.version. If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's cause parameter is set to OPERATION_NOT_PERMITTED. For details and example IAM policies, see Using IAM to Manage Access to Amazon SWF Workflows in the Amazon SWF Developer Guide.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.Operations.DeleteActivityType(new DeleteActivityTypeRequest
    {
        XAmzTarget = XAmzTarget20AmazonSimpleWorkflowServiceOperationsApi.SimpleWorkflowServiceDeleteActivityType,
    });
}
catch (ApiException<DeleteActivityTypeError> ex)
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

<code>[DeleteActivityTypeRequest](src/AmazonSwf/Requests/Operations/DeleteActivityTypeRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AmazonSwf/Core/Exceptions/ApiException.cs)&lt;[DeleteActivityTypeError](src/AmazonSwf/Errors/DeleteActivityTypeError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task DeleteWorkflowType(DeleteWorkflowTypeRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes the specified workflow type. Note: Prior to deletion, workflow types must first be deprecated. After a workflow type has been deleted, you cannot create new executions of that type. Executions that started before the type was deleted will continue to run. Access Control You can use IAM policies to control this action's access to Amazon SWF resources as follows: Use a Resource element with the domain name to limit the action to only specified domains. Use an Action element to allow or deny permission to call this action. Constrain the following parameters by using a Condition element with the appropriate keys. workflowType.name: String constraint. The key is swf:workflowType.name. workflowType.version: String constraint. The key is swf:workflowType.version. If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's cause parameter is set to OPERATION_NOT_PERMITTED. For details and example IAM policies, see Using IAM to Manage Access to Amazon SWF Workflows in the Amazon SWF Developer Guide.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.Operations.DeleteWorkflowType(new DeleteWorkflowTypeRequest
    {
        XAmzTarget = XAmzTarget21AmazonSimpleWorkflowServiceOperationsApi.SimpleWorkflowServiceDeleteWorkflowType,
    });
}
catch (ApiException<DeleteWorkflowTypeError> ex)
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

<code>[DeleteWorkflowTypeRequest](src/AmazonSwf/Requests/Operations/DeleteWorkflowTypeRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AmazonSwf/Core/Exceptions/ApiException.cs)&lt;[DeleteWorkflowTypeError](src/AmazonSwf/Errors/DeleteWorkflowTypeError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task DeprecateActivityType2(DeprecateActivityType2Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deprecates the specified activity type. After an activity type has been deprecated, you cannot create new tasks of that activity type. Tasks of this type that were scheduled before the type was deprecated continue to run. Access Control You can use IAM policies to control this action's access to Amazon SWF resources as follows: Use a Resource element with the domain name to limit the action to only specified domains. Use an Action element to allow or deny permission to call this action. Constrain the following parameters by using a Condition element with the appropriate keys. activityType.name: String constraint. The key is swf:activityType.name. activityType.version: String constraint. The key is swf:activityType.version. If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's cause parameter is set to OPERATION_NOT_PERMITTED. For details and example IAM policies, see Using IAM to Manage Access to Amazon SWF Workflows in the Amazon SWF Developer Guide.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.Operations.DeprecateActivityType2(new DeprecateActivityType2Request
    {
        XAmzTarget = XAmzTarget4.SimpleWorkflowServiceDeprecateActivityType,
    });
}
catch (ApiException<DeprecateActivityType2Error> ex)
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

<code>[DeprecateActivityType2Request](src/AmazonSwf/Requests/Operations/DeprecateActivityType2Request.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AmazonSwf/Core/Exceptions/ApiException.cs)&lt;[DeprecateActivityType2Error](src/AmazonSwf/Errors/DeprecateActivityType2Error.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task DeprecateDomain2(DeprecateDomain2Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deprecates the specified domain. After a domain has been deprecated it cannot be used to create new workflow executions or register new types. However, you can still use visibility actions on this domain. Deprecating a domain also deprecates all activity and workflow types registered in the domain. Executions that were started before the domain was deprecated continues to run. This operation is eventually consistent. The results are best effort and may not exactly reflect recent updates and changes. Access Control You can use IAM policies to control this action's access to Amazon SWF resources as follows: Use a Resource element with the domain name to limit the action to only specified domains. Use an Action element to allow or deny permission to call this action. You cannot use an IAM policy to constrain this action's parameters. If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's cause parameter is set to OPERATION_NOT_PERMITTED. For details and example IAM policies, see Using IAM to Manage Access to Amazon SWF Workflows in the Amazon SWF Develope

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.Operations.DeprecateDomain2(new DeprecateDomain2Request
    {
        XAmzTarget = XAmzTarget5.SimpleWorkflowServiceDeprecateDomain,
    });
}
catch (ApiException<DeprecateDomain2Error> ex)
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

<code>[DeprecateDomain2Request](src/AmazonSwf/Requests/Operations/DeprecateDomain2Request.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AmazonSwf/Core/Exceptions/ApiException.cs)&lt;[DeprecateDomain2Error](src/AmazonSwf/Errors/DeprecateDomain2Error.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task DeprecateWorkflowType2(DeprecateWorkflowType2Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deprecates the specified workflow type. After a workflow type has been deprecated, you cannot create new executions of that type. Executions that were started before the type was deprecated continues to run. A deprecated workflow type may still be used when calling visibility actions. This operation is eventually consistent. The results are best effort and may not exactly reflect recent updates and changes. Access Control You can use IAM policies to control this action's access to Amazon SWF resources as follows: Use a Resource element with the domain name to limit the action to only specified domains. Use an Action element to allow or deny permission to call this action. Constrain the following parameters by using a Condition element with the appropriate keys. workflowType.name: String constraint. The key is swf:workflowType.name. workflowType.version: String constraint. The key is swf:workflowType.version. If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's cause parameter is set to OPERATION_NOT_PERMITTED. For details and example IAM policies, se

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.Operations.DeprecateWorkflowType2(new DeprecateWorkflowType2Request
    {
        XAmzTarget = XAmzTarget6.SimpleWorkflowServiceDeprecateWorkflowType,
    });
}
catch (ApiException<DeprecateWorkflowType2Error> ex)
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

<code>[DeprecateWorkflowType2Request](src/AmazonSwf/Requests/Operations/DeprecateWorkflowType2Request.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AmazonSwf/Core/Exceptions/ApiException.cs)&lt;[DeprecateWorkflowType2Error](src/AmazonSwf/Errors/DeprecateWorkflowType2Error.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task PollForActivityTask2(PollForActivityTask2Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Used by workers to get an ActivityTask from the specified activity taskList. This initiates a long poll, where the service holds the HTTP connection open and responds as soon as a task becomes available. The maximum time the service holds on to the request before responding is 60 seconds. If no task is available within 60 seconds, the poll returns an empty result. An empty result, in this context, means that an ActivityTask is returned, but that the value of taskToken is an empty string. If a task is returned, the worker should use its type to identify and process it correctly. Workers should set their client side socket timeout to at least 70 seconds (10 seconds higher than the maximum time service may hold the poll request). Access Control You can use IAM policies to control this action's access to Amazon SWF resources as follows: Use a Resource element with the domain name to limit the action to only specified domains. Use an Action element to allow or deny permission to call this action. Constrain the taskList.name parameter by using a Condition element with the swf:taskList.name key to allow the action to access only certain task lists. If the caller doesn't have sufficient pe

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.Operations.PollForActivityTask2(new PollForActivityTask2Request
    {
        XAmzTarget = XAmzTarget7.SimpleWorkflowServicePollForActivityTask,
    });
}
catch (ApiException<PollForActivityTask2Error> ex)
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

<code>[PollForActivityTask2Request](src/AmazonSwf/Requests/Operations/PollForActivityTask2Request.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AmazonSwf/Core/Exceptions/ApiException.cs)&lt;[PollForActivityTask2Error](src/AmazonSwf/Errors/PollForActivityTask2Error.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task PollForDecisionTask2(PollForDecisionTask2Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Used by deciders to get a DecisionTask from the specified decision taskList. A decision task may be returned for any open workflow execution that is using the specified task list. The task includes a paginated view of the history of the workflow execution. The decider should use the workflow type and the history to determine how to properly handle the task. This action initiates a long poll, where the service holds the HTTP connection open and responds as soon a task becomes available. If no decision task is available in the specified task list before the timeout of 60 seconds expires, an empty result is returned. An empty result, in this context, means that a DecisionTask is returned, but that the value of taskToken is an empty string. Deciders should set their client side socket timeout to at least 70 seconds (10 seconds higher than the timeout). Because the number of workflow history events for a single workflow execution might be very large, the result returned might be split up across a number of pages. To retrieve subsequent pages, make additional calls to PollForDecisionTask using the nextPageToken returned by the initial call. Note that you do not call GetWorkflowExecutionH

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.Operations.PollForDecisionTask2(new PollForDecisionTask2Request
    {
        XAmzTarget = XAmzTarget8.SimpleWorkflowServicePollForDecisionTask,
    });
}
catch (ApiException<PollForDecisionTask2Error> ex)
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

<code>[PollForDecisionTask2Request](src/AmazonSwf/Requests/Operations/PollForDecisionTask2Request.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AmazonSwf/Core/Exceptions/ApiException.cs)&lt;[PollForDecisionTask2Error](src/AmazonSwf/Errors/PollForDecisionTask2Error.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task RecordActivityTaskHeartbeat2(RecordActivityTaskHeartbeat2Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Used by activity workers to report to the service that the ActivityTask represented by the specified taskToken is still making progress. The worker can also specify details of the progress, for example percent complete, using the details parameter. This action can also be used by the worker as a mechanism to check if cancellation is being requested for the activity task. If a cancellation is being attempted for the specified task, then the boolean cancelRequested flag returned by the service is set to true. This action resets the taskHeartbeatTimeout clock. The taskHeartbeatTimeout is specified in RegisterActivityType. This action doesn't in itself create an event in the workflow execution history. However, if the task times out, the workflow execution history contains a ActivityTaskTimedOut event that contains the information from the last heartbeat generated by the activity worker. The taskStartToCloseTimeout of an activity type is the maximum duration of an activity task, regardless of the number of RecordActivityTaskHeartbeat requests received. The taskStartToCloseTimeout is also specified in RegisterActivityType. This operation is only useful for long-lived activities to repor

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.Operations.RecordActivityTaskHeartbeat2(new RecordActivityTaskHeartbeat2Request
    {
        XAmzTarget = XAmzTarget9.SimpleWorkflowServiceRecordActivityTaskHeartbeat,
    });
}
catch (ApiException<RecordActivityTaskHeartbeat2Error> ex)
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

<code>[RecordActivityTaskHeartbeat2Request](src/AmazonSwf/Requests/Operations/RecordActivityTaskHeartbeat2Request.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AmazonSwf/Core/Exceptions/ApiException.cs)&lt;[RecordActivityTaskHeartbeat2Error](src/AmazonSwf/Errors/RecordActivityTaskHeartbeat2Error.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task RequestCancelWorkflowExecution2(RequestCancelWorkflowExecution2Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Records a WorkflowExecutionCancelRequested event in the currently running workflow execution identified by the given domain, workflowId, and runId. This logically requests the cancellation of the workflow execution as a whole. It is up to the decider to take appropriate actions when it receives an execution history with this event. If the runId isn't specified, the WorkflowExecutionCancelRequested event is recorded in the history of the current open workflow execution with the specified workflowId in the domain. Because this action allows the workflow to properly clean up and gracefully close, it should be used instead of TerminateWorkflowExecution when possible. Access Control You can use IAM policies to control this action's access to Amazon SWF resources as follows: Use a Resource element with the domain name to limit the action to only specified domains. Use an Action element to allow or deny permission to call this action. You cannot use an IAM policy to constrain this action's parameters. If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's cau

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.Operations.RequestCancelWorkflowExecution2(new RequestCancelWorkflowExecution2Request
    {
        XAmzTarget = XAmzTarget10.SimpleWorkflowServiceRequestCancelWorkflowExecution,
    });
}
catch (ApiException<RequestCancelWorkflowExecution2Error> ex)
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

<code>[RequestCancelWorkflowExecution2Request](src/AmazonSwf/Requests/Operations/RequestCancelWorkflowExecution2Request.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AmazonSwf/Core/Exceptions/ApiException.cs)&lt;[RequestCancelWorkflowExecution2Error](src/AmazonSwf/Errors/RequestCancelWorkflowExecution2Error.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task RespondActivityTaskCanceled2(RespondActivityTaskCanceled2Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Used by workers to tell the service that the ActivityTask identified by the taskToken was successfully canceled. Additional details can be provided using the details argument. These details (if provided) appear in the ActivityTaskCanceled event added to the workflow history. Only use this operation if the canceled flag of a RecordActivityTaskHeartbeat request returns true and if the activity can be safely undone or abandoned. A task is considered open from the time that it is scheduled until it is closed. Therefore a task is reported as open while a worker is processing it. A task is closed after it has been specified in a call to RespondActivityTaskCompleted, RespondActivityTaskCanceled, RespondActivityTaskFailed, or the task has timed out. Access Control You can use IAM policies to control this action's access to Amazon SWF resources as follows: Use a Resource element with the domain name to limit the action to only specified domains. Use an Action element to allow or deny permission to call this action. You cannot use an IAM policy to constrain this action's parameters. If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside t

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.Operations.RespondActivityTaskCanceled2(new RespondActivityTaskCanceled2Request
    {
        XAmzTarget = XAmzTarget11.SimpleWorkflowServiceRespondActivityTaskCanceled,
    });
}
catch (ApiException<RespondActivityTaskCanceled2Error> ex)
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

<code>[RespondActivityTaskCanceled2Request](src/AmazonSwf/Requests/Operations/RespondActivityTaskCanceled2Request.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AmazonSwf/Core/Exceptions/ApiException.cs)&lt;[RespondActivityTaskCanceled2Error](src/AmazonSwf/Errors/RespondActivityTaskCanceled2Error.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task RespondActivityTaskCompleted2(RespondActivityTaskCompleted2Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Used by workers to tell the service that the ActivityTask identified by the taskToken completed successfully with a result (if provided). The result appears in the ActivityTaskCompleted event in the workflow history. If the requested task doesn't complete successfully, use RespondActivityTaskFailed instead. If the worker finds that the task is canceled through the canceled flag returned by RecordActivityTaskHeartbeat, it should cancel the task, clean up and then call RespondActivityTaskCanceled. A task is considered open from the time that it is scheduled until it is closed. Therefore a task is reported as open while a worker is processing it. A task is closed after it has been specified in a call to RespondActivityTaskCompleted, RespondActivityTaskCanceled, RespondActivityTaskFailed, or the task has timed out. Access Control You can use IAM policies to control this action's access to Amazon SWF resources as follows: Use a Resource element with the domain name to limit the action to only specified domains. Use an Action element to allow or deny permission to call this action. You cannot use an IAM policy to constrain this action's parameters. If the caller doesn't have sufficient p

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.Operations.RespondActivityTaskCompleted2(new RespondActivityTaskCompleted2Request
    {
        XAmzTarget = XAmzTarget12.SimpleWorkflowServiceRespondActivityTaskCompleted,
    });
}
catch (ApiException<RespondActivityTaskCompleted2Error> ex)
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

<code>[RespondActivityTaskCompleted2Request](src/AmazonSwf/Requests/Operations/RespondActivityTaskCompleted2Request.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AmazonSwf/Core/Exceptions/ApiException.cs)&lt;[RespondActivityTaskCompleted2Error](src/AmazonSwf/Errors/RespondActivityTaskCompleted2Error.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task RespondActivityTaskFailed2(RespondActivityTaskFailed2Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Used by workers to tell the service that the ActivityTask identified by the taskToken has failed with reason (if specified). The reason and details appear in the ActivityTaskFailed event added to the workflow history. A task is considered open from the time that it is scheduled until it is closed. Therefore a task is reported as open while a worker is processing it. A task is closed after it has been specified in a call to RespondActivityTaskCompleted, RespondActivityTaskCanceled, RespondActivityTaskFailed, or the task has timed out. Access Control You can use IAM policies to control this action's access to Amazon SWF resources as follows: Use a Resource element with the domain name to limit the action to only specified domains. Use an Action element to allow or deny permission to call this action. You cannot use an IAM policy to constrain this action's parameters. If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's cause parameter is set to OPERATION_NOT_PERMITTED. For details and example IAM policies, see Using IAM to Manage Access to Amazon SWF W

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.Operations.RespondActivityTaskFailed2(new RespondActivityTaskFailed2Request
    {
        XAmzTarget = XAmzTarget13.SimpleWorkflowServiceRespondActivityTaskFailed,
    });
}
catch (ApiException<RespondActivityTaskFailed2Error> ex)
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

<code>[RespondActivityTaskFailed2Request](src/AmazonSwf/Requests/Operations/RespondActivityTaskFailed2Request.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AmazonSwf/Core/Exceptions/ApiException.cs)&lt;[RespondActivityTaskFailed2Error](src/AmazonSwf/Errors/RespondActivityTaskFailed2Error.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task RespondDecisionTaskCompleted2(RespondDecisionTaskCompleted2Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Used by deciders to tell the service that the DecisionTask identified by the taskToken has successfully completed. The decisions argument specifies the list of decisions made while processing the task. A DecisionTaskCompleted event is added to the workflow history. The executionContext specified is attached to the event in the workflow execution history. Access Control If an IAM policy grants permission to use RespondDecisionTaskCompleted, it can express permissions for the list of decisions in the decisions parameter. Each of the decisions has one or more parameters, much like a regular API call. To allow for policies to be as readable as possible, you can express permissions on decisions as if they were actual API calls, including applying conditions to some parameters. For more information, see Using IAM to Manage Access to Amazon SWF Workflows in the Amazon SWF Developer Guide.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.Operations.RespondDecisionTaskCompleted2(new RespondDecisionTaskCompleted2Request
    {
        XAmzTarget = XAmzTarget14.SimpleWorkflowServiceRespondDecisionTaskCompleted,
    });
}
catch (ApiException<RespondDecisionTaskCompleted2Error> ex)
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

<code>[RespondDecisionTaskCompleted2Request](src/AmazonSwf/Requests/Operations/RespondDecisionTaskCompleted2Request.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AmazonSwf/Core/Exceptions/ApiException.cs)&lt;[RespondDecisionTaskCompleted2Error](src/AmazonSwf/Errors/RespondDecisionTaskCompleted2Error.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task SignalWorkflowExecution2(SignalWorkflowExecution2Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Records a WorkflowExecutionSignaled event in the workflow execution history and creates a decision task for the workflow execution identified by the given domain, workflowId and runId. The event is recorded with the specified user defined signalName and input (if provided). If a runId isn't specified, then the WorkflowExecutionSignaled event is recorded in the history of the current open workflow with the matching workflowId in the domain. If the specified workflow execution isn't open, this method fails with UnknownResource. Access Control You can use IAM policies to control this action's access to Amazon SWF resources as follows: Use a Resource element with the domain name to limit the action to only specified domains. Use an Action element to allow or deny permission to call this action. You cannot use an IAM policy to constrain this action's parameters. If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's cause parameter is set to OPERATION_NOT_PERMITTED. For details and example IAM policies, see Using IAM to Manage Access to Amazon SWF Workflows

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.Operations.SignalWorkflowExecution2(new SignalWorkflowExecution2Request
    {
        XAmzTarget = XAmzTarget15.SimpleWorkflowServiceSignalWorkflowExecution,
    });
}
catch (ApiException<SignalWorkflowExecution2Error> ex)
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

<code>[SignalWorkflowExecution2Request](src/AmazonSwf/Requests/Operations/SignalWorkflowExecution2Request.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AmazonSwf/Core/Exceptions/ApiException.cs)&lt;[SignalWorkflowExecution2Error](src/AmazonSwf/Errors/SignalWorkflowExecution2Error.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task TerminateWorkflowExecution2(TerminateWorkflowExecution2Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Records a WorkflowExecutionTerminated event and forces closure of the workflow execution identified by the given domain, runId, and workflowId. The child policy, registered with the workflow type or specified when starting this execution, is applied to any open child workflow executions of this workflow execution. If the identified workflow execution was in progress, it is terminated immediately. If a runId isn't specified, then the WorkflowExecutionTerminated event is recorded in the history of the current open workflow with the matching workflowId in the domain. You should consider using RequestCancelWorkflowExecution action instead because it allows the workflow to gracefully close while TerminateWorkflowExecution doesn't. Access Control You can use IAM policies to control this action's access to Amazon SWF resources as follows: Use a Resource element with the domain name to limit the action to only specified domains. Use an Action element to allow or deny permission to call this action. You cannot use an IAM policy to constrain this action's parameters. If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified con

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.Operations.TerminateWorkflowExecution2(new TerminateWorkflowExecution2Request
    {
        XAmzTarget = XAmzTarget16.SimpleWorkflowServiceTerminateWorkflowExecution,
    });
}
catch (ApiException<TerminateWorkflowExecution2Error> ex)
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

<code>[TerminateWorkflowExecution2Request](src/AmazonSwf/Requests/Operations/TerminateWorkflowExecution2Request.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AmazonSwf/Core/Exceptions/ApiException.cs)&lt;[TerminateWorkflowExecution2Error](src/AmazonSwf/Errors/TerminateWorkflowExecution2Error.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task UndeprecateActivityType2(UndeprecateActivityType2Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Undeprecates a previously deprecated activity type. After an activity type has been undeprecated, you can create new tasks of that activity type. This operation is eventually consistent. The results are best effort and may not exactly reflect recent updates and changes. Access Control You can use IAM policies to control this action's access to Amazon SWF resources as follows: Use a Resource element with the domain name to limit the action to only specified domains. Use an Action element to allow or deny permission to call this action. Constrain the following parameters by using a Condition element with the appropriate keys. activityType.name: String constraint. The key is swf:activityType.name. activityType.version: String constraint. The key is swf:activityType.version. If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's cause parameter is set to OPERATION_NOT_PERMITTED. For details and example IAM policies, see Using IAM to Manage Access to Amazon SWF Workflows in the Amazon SWF Developer Guide.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.Operations.UndeprecateActivityType2(new UndeprecateActivityType2Request
    {
        XAmzTarget = XAmzTarget17.SimpleWorkflowServiceUndeprecateActivityType,
    });
}
catch (ApiException<UndeprecateActivityType2Error> ex)
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

<code>[UndeprecateActivityType2Request](src/AmazonSwf/Requests/Operations/UndeprecateActivityType2Request.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AmazonSwf/Core/Exceptions/ApiException.cs)&lt;[UndeprecateActivityType2Error](src/AmazonSwf/Errors/UndeprecateActivityType2Error.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task UndeprecateDomain2(UndeprecateDomain2Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Undeprecates a previously deprecated domain. After a domain has been undeprecated it can be used to create new workflow executions or register new types. This operation is eventually consistent. The results are best effort and may not exactly reflect recent updates and changes. Access Control You can use IAM policies to control this action's access to Amazon SWF resources as follows: Use a Resource element with the domain name to limit the action to only specified domains. Use an Action element to allow or deny permission to call this action. You cannot use an IAM policy to constrain this action's parameters. If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's cause parameter is set to OPERATION_NOT_PERMITTED. For details and example IAM policies, see Using IAM to Manage Access to Amazon SWF Workflows in the Amazon SWF Developer Guide.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.Operations.UndeprecateDomain2(new UndeprecateDomain2Request
    {
        XAmzTarget = XAmzTarget18.SimpleWorkflowServiceUndeprecateDomain,
    });
}
catch (ApiException<UndeprecateDomain2Error> ex)
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

<code>[UndeprecateDomain2Request](src/AmazonSwf/Requests/Operations/UndeprecateDomain2Request.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AmazonSwf/Core/Exceptions/ApiException.cs)&lt;[UndeprecateDomain2Error](src/AmazonSwf/Errors/UndeprecateDomain2Error.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task UndeprecateWorkflowType2(UndeprecateWorkflowType2Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Undeprecates a previously deprecated workflow type. After a workflow type has been undeprecated, you can create new executions of that type. This operation is eventually consistent. The results are best effort and may not exactly reflect recent updates and changes. Access Control You can use IAM policies to control this action's access to Amazon SWF resources as follows: Use a Resource element with the domain name to limit the action to only specified domains. Use an Action element to allow or deny permission to call this action. Constrain the following parameters by using a Condition element with the appropriate keys. workflowType.name: String constraint. The key is swf:workflowType.name. workflowType.version: String constraint. The key is swf:workflowType.version. If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's cause parameter is set to OPERATION_NOT_PERMITTED. For details and example IAM policies, see Using IAM to Manage Access to Amazon SWF Workflows in the Amazon SWF Developer Guide.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.Operations.UndeprecateWorkflowType2(new UndeprecateWorkflowType2Request
    {
        XAmzTarget = XAmzTarget19.SimpleWorkflowServiceUndeprecateWorkflowType,
    });
}
catch (ApiException<UndeprecateWorkflowType2Error> ex)
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

<code>[UndeprecateWorkflowType2Request](src/AmazonSwf/Requests/Operations/UndeprecateWorkflowType2Request.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AmazonSwf/Core/Exceptions/ApiException.cs)&lt;[UndeprecateWorkflowType2Error](src/AmazonSwf/Errors/UndeprecateWorkflowType2Error.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

