# Reference

**Parsed** endpoints return the typed payload and raise `ApiError` on a documented non-2xx. For the raw endpoints, see [Raw API Reference](raw-api-reference.md).

> Source: [AwsStepFunctionsClient](aws_step_functions/client.py)

## AwsStepFunctions

> Source: [AwsStepFunctions](aws_step_functions/apis/aws_step_functions.py)

<details>
<summary><code>def create_activity(x_amz_target: XAmzTargetOrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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

**Sync**

```python
try:
    client.aws_step_functions.create_activity(XAmzTarget.AWS_STEP_FUNCTIONS_CREATE_ACTIVITY)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateActivityErrorBody
```

**Async**

```python
try:
    await async_client.aws_step_functions.create_activity(XAmzTarget.AWS_STEP_FUNCTIONS_CREATE_ACTIVITY)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateActivityErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTargetOrStr](aws_step_functions/models/enums/x_amz_target.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](aws_step_functions/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](aws_step_functions/core/exceptions.py)&#91;[CreateActivityErrorBody](aws_step_functions/errors/create_activity_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[RawError](aws_step_functions/core/results.py)</code> |
| anything unmapped | <code>[RawError](aws_step_functions/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def create_state_machine(x_amz_target: XAmzTarget4OrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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

**Sync**

```python
try:
    client.aws_step_functions.create_state_machine(XAmzTarget4.AWS_STEP_FUNCTIONS_CREATE_STATE_MACHINE)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateStateMachineErrorBody
```

**Async**

```python
try:
    await async_client.aws_step_functions.create_state_machine(XAmzTarget4.AWS_STEP_FUNCTIONS_CREATE_STATE_MACHINE)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateStateMachineErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget4OrStr](aws_step_functions/models/enums/x_amz_target4.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](aws_step_functions/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](aws_step_functions/core/exceptions.py)&#91;[CreateStateMachineErrorBody](aws_step_functions/errors/create_state_machine_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 409 | <code>[RawError](aws_step_functions/core/results.py)</code> |
| anything unmapped | <code>[RawError](aws_step_functions/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def delete_activity(x_amz_target: XAmzTarget1OrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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

**Sync**

```python
try:
    client.aws_step_functions.delete_activity(XAmzTarget1.AWS_STEP_FUNCTIONS_DELETE_ACTIVITY)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteActivityErrorBody
```

**Async**

```python
try:
    await async_client.aws_step_functions.delete_activity(XAmzTarget1.AWS_STEP_FUNCTIONS_DELETE_ACTIVITY)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteActivityErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget1OrStr](aws_step_functions/models/enums/x_amz_target1.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](aws_step_functions/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](aws_step_functions/core/exceptions.py)&#91;[DeleteActivityErrorBody](aws_step_functions/errors/delete_activity_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[RawError](aws_step_functions/core/results.py)</code> |
| anything unmapped | <code>[RawError](aws_step_functions/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def delete_state_machine(x_amz_target: XAmzTarget5OrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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

**Sync**

```python
try:
    client.aws_step_functions.delete_state_machine(XAmzTarget5.AWS_STEP_FUNCTIONS_DELETE_STATE_MACHINE)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteStateMachineErrorBody
```

**Async**

```python
try:
    await async_client.aws_step_functions.delete_state_machine(XAmzTarget5.AWS_STEP_FUNCTIONS_DELETE_STATE_MACHINE)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteStateMachineErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget5OrStr](aws_step_functions/models/enums/x_amz_target5.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](aws_step_functions/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](aws_step_functions/core/exceptions.py)&#91;[DeleteStateMachineErrorBody](aws_step_functions/errors/delete_state_machine_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[RawError](aws_step_functions/core/results.py)</code> |
| anything unmapped | <code>[RawError](aws_step_functions/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def describe_activity(x_amz_target: XAmzTarget2OrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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

**Sync**

```python
try:
    client.aws_step_functions.describe_activity(XAmzTarget2.AWS_STEP_FUNCTIONS_DESCRIBE_ACTIVITY)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DescribeActivityErrorBody
```

**Async**

```python
try:
    await async_client.aws_step_functions.describe_activity(XAmzTarget2.AWS_STEP_FUNCTIONS_DESCRIBE_ACTIVITY)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DescribeActivityErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget2OrStr](aws_step_functions/models/enums/x_amz_target2.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](aws_step_functions/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](aws_step_functions/core/exceptions.py)&#91;[DescribeActivityErrorBody](aws_step_functions/errors/describe_activity_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[RawError](aws_step_functions/core/results.py)</code> |
| anything unmapped | <code>[RawError](aws_step_functions/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def describe_execution(x_amz_target: XAmzTarget10OrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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

**Sync**

```python
try:
    client.aws_step_functions.describe_execution(XAmzTarget10.AWS_STEP_FUNCTIONS_DESCRIBE_EXECUTION)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DescribeExecutionErrorBody
```

**Async**

```python
try:
    await async_client.aws_step_functions.describe_execution(XAmzTarget10.AWS_STEP_FUNCTIONS_DESCRIBE_EXECUTION)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DescribeExecutionErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget10OrStr](aws_step_functions/models/enums/x_amz_target10.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](aws_step_functions/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](aws_step_functions/core/exceptions.py)&#91;[DescribeExecutionErrorBody](aws_step_functions/errors/describe_execution_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[RawError](aws_step_functions/core/results.py)</code> |
| anything unmapped | <code>[RawError](aws_step_functions/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def describe_map_run(x_amz_target: XAmzTarget14OrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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

**Sync**

```python
try:
    client.aws_step_functions.describe_map_run(XAmzTarget14.AWS_STEP_FUNCTIONS_DESCRIBE_MAP_RUN)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DescribeMapRunErrorBody
```

**Async**

```python
try:
    await async_client.aws_step_functions.describe_map_run(XAmzTarget14.AWS_STEP_FUNCTIONS_DESCRIBE_MAP_RUN)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DescribeMapRunErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget14OrStr](aws_step_functions/models/enums/x_amz_target14.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](aws_step_functions/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](aws_step_functions/core/exceptions.py)&#91;[DescribeMapRunErrorBody](aws_step_functions/errors/describe_map_run_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 404 | <code>[RawError](aws_step_functions/core/results.py)</code> |
| anything unmapped | <code>[RawError](aws_step_functions/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def describe_state_machine(x_amz_target: XAmzTarget6OrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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

**Sync**

```python
try:
    client.aws_step_functions.describe_state_machine(XAmzTarget6.AWS_STEP_FUNCTIONS_DESCRIBE_STATE_MACHINE)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DescribeStateMachineErrorBody
```

**Async**

```python
try:
    await async_client.aws_step_functions.describe_state_machine(XAmzTarget6.AWS_STEP_FUNCTIONS_DESCRIBE_STATE_MACHINE)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DescribeStateMachineErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget6OrStr](aws_step_functions/models/enums/x_amz_target6.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](aws_step_functions/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](aws_step_functions/core/exceptions.py)&#91;[DescribeStateMachineErrorBody](aws_step_functions/errors/describe_state_machine_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[RawError](aws_step_functions/core/results.py)</code> |
| anything unmapped | <code>[RawError](aws_step_functions/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def describe_state_machine_for_execution(x_amz_target: XAmzTarget7OrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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

**Sync**

```python
try:
    client.aws_step_functions.describe_state_machine_for_execution(
        XAmzTarget7.AWS_STEP_FUNCTIONS_DESCRIBE_STATE_MACHINE_FOR_EXECUTION
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DescribeStateMachineForExecutionErrorBody
```

**Async**

```python
try:
    await async_client.aws_step_functions.describe_state_machine_for_execution(
        XAmzTarget7.AWS_STEP_FUNCTIONS_DESCRIBE_STATE_MACHINE_FOR_EXECUTION
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DescribeStateMachineForExecutionErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget7OrStr](aws_step_functions/models/enums/x_amz_target7.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](aws_step_functions/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](aws_step_functions/core/exceptions.py)&#91;[DescribeStateMachineForExecutionErrorBody](aws_step_functions/errors/describe_state_machine_for_execution_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[RawError](aws_step_functions/core/results.py)</code> |
| anything unmapped | <code>[RawError](aws_step_functions/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_activity_task(x_amz_target: XAmzTarget17OrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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

**Sync**

```python
try:
    client.aws_step_functions.get_activity_task(XAmzTarget17.AWS_STEP_FUNCTIONS_GET_ACTIVITY_TASK)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetActivityTaskErrorBody
```

**Async**

```python
try:
    await async_client.aws_step_functions.get_activity_task(XAmzTarget17.AWS_STEP_FUNCTIONS_GET_ACTIVITY_TASK)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetActivityTaskErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget17OrStr](aws_step_functions/models/enums/x_amz_target17.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](aws_step_functions/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](aws_step_functions/core/exceptions.py)&#91;[GetActivityTaskErrorBody](aws_step_functions/errors/get_activity_task_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[RawError](aws_step_functions/core/results.py)</code> |
| anything unmapped | <code>[RawError](aws_step_functions/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_execution_history(x_amz_target: XAmzTarget18OrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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

**Sync**

```python
try:
    client.aws_step_functions.get_execution_history(XAmzTarget18.AWS_STEP_FUNCTIONS_GET_EXECUTION_HISTORY)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetExecutionHistoryErrorBody
```

**Async**

```python
try:
    await async_client.aws_step_functions.get_execution_history(XAmzTarget18.AWS_STEP_FUNCTIONS_GET_EXECUTION_HISTORY)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetExecutionHistoryErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget18OrStr](aws_step_functions/models/enums/x_amz_target18.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](aws_step_functions/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](aws_step_functions/core/exceptions.py)&#91;[GetExecutionHistoryErrorBody](aws_step_functions/errors/get_execution_history_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[RawError](aws_step_functions/core/results.py)</code> |
| anything unmapped | <code>[RawError](aws_step_functions/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_activities(x_amz_target: XAmzTarget3OrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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

**Sync**

```python
try:
    client.aws_step_functions.list_activities(XAmzTarget3.AWS_STEP_FUNCTIONS_LIST_ACTIVITIES)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListActivitiesErrorBody
```

**Async**

```python
try:
    await async_client.aws_step_functions.list_activities(XAmzTarget3.AWS_STEP_FUNCTIONS_LIST_ACTIVITIES)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListActivitiesErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget3OrStr](aws_step_functions/models/enums/x_amz_target3.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](aws_step_functions/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](aws_step_functions/core/exceptions.py)&#91;[ListActivitiesErrorBody](aws_step_functions/errors/list_activities_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[RawError](aws_step_functions/core/results.py)</code> |
| anything unmapped | <code>[RawError](aws_step_functions/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_executions(x_amz_target: XAmzTarget11OrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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

**Sync**

```python
try:
    client.aws_step_functions.list_executions(XAmzTarget11.AWS_STEP_FUNCTIONS_LIST_EXECUTIONS)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListExecutionsErrorBody
```

**Async**

```python
try:
    await async_client.aws_step_functions.list_executions(XAmzTarget11.AWS_STEP_FUNCTIONS_LIST_EXECUTIONS)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListExecutionsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget11OrStr](aws_step_functions/models/enums/x_amz_target11.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](aws_step_functions/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](aws_step_functions/core/exceptions.py)&#91;[ListExecutionsErrorBody](aws_step_functions/errors/list_executions_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 404 | <code>[RawError](aws_step_functions/core/results.py)</code> |
| anything unmapped | <code>[RawError](aws_step_functions/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_map_runs(x_amz_target: XAmzTarget15OrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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

**Sync**

```python
try:
    client.aws_step_functions.list_map_runs(XAmzTarget15.AWS_STEP_FUNCTIONS_LIST_MAP_RUNS)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListMapRunsErrorBody
```

**Async**

```python
try:
    await async_client.aws_step_functions.list_map_runs(XAmzTarget15.AWS_STEP_FUNCTIONS_LIST_MAP_RUNS)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListMapRunsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget15OrStr](aws_step_functions/models/enums/x_amz_target15.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](aws_step_functions/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](aws_step_functions/core/exceptions.py)&#91;[ListMapRunsErrorBody](aws_step_functions/errors/list_map_runs_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[RawError](aws_step_functions/core/results.py)</code> |
| anything unmapped | <code>[RawError](aws_step_functions/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_state_machines(x_amz_target: XAmzTarget8OrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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

**Sync**

```python
try:
    client.aws_step_functions.list_state_machines(XAmzTarget8.AWS_STEP_FUNCTIONS_LIST_STATE_MACHINES)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListStateMachinesErrorBody
```

**Async**

```python
try:
    await async_client.aws_step_functions.list_state_machines(XAmzTarget8.AWS_STEP_FUNCTIONS_LIST_STATE_MACHINES)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListStateMachinesErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget8OrStr](aws_step_functions/models/enums/x_amz_target8.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](aws_step_functions/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](aws_step_functions/core/exceptions.py)&#91;[ListStateMachinesErrorBody](aws_step_functions/errors/list_state_machines_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[RawError](aws_step_functions/core/results.py)</code> |
| anything unmapped | <code>[RawError](aws_step_functions/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_tags_for_resource(x_amz_target: XAmzTarget19OrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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

**Sync**

```python
try:
    client.aws_step_functions.list_tags_for_resource(XAmzTarget19.AWS_STEP_FUNCTIONS_LIST_TAGS_FOR_RESOURCE)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListTagsForResourceErrorBody
```

**Async**

```python
try:
    await async_client.aws_step_functions.list_tags_for_resource(XAmzTarget19.AWS_STEP_FUNCTIONS_LIST_TAGS_FOR_RESOURCE)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListTagsForResourceErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget19OrStr](aws_step_functions/models/enums/x_amz_target19.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](aws_step_functions/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](aws_step_functions/core/exceptions.py)&#91;[ListTagsForResourceErrorBody](aws_step_functions/errors/list_tags_for_resource_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 404 | <code>[RawError](aws_step_functions/core/results.py)</code> |
| anything unmapped | <code>[RawError](aws_step_functions/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def send_task_failure(x_amz_target: XAmzTarget20OrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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

**Sync**

```python
try:
    client.aws_step_functions.send_task_failure(XAmzTarget20.AWS_STEP_FUNCTIONS_SEND_TASK_FAILURE)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type SendTaskFailureErrorBody
```

**Async**

```python
try:
    await async_client.aws_step_functions.send_task_failure(XAmzTarget20.AWS_STEP_FUNCTIONS_SEND_TASK_FAILURE)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type SendTaskFailureErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget20OrStr](aws_step_functions/models/enums/x_amz_target20.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](aws_step_functions/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](aws_step_functions/core/exceptions.py)&#91;[SendTaskFailureErrorBody](aws_step_functions/errors/send_task_failure_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[RawError](aws_step_functions/core/results.py)</code> |
| anything unmapped | <code>[RawError](aws_step_functions/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def send_task_heartbeat(x_amz_target: XAmzTarget21OrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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

**Sync**

```python
try:
    client.aws_step_functions.send_task_heartbeat(XAmzTarget21.AWS_STEP_FUNCTIONS_SEND_TASK_HEARTBEAT)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type SendTaskHeartbeatErrorBody
```

**Async**

```python
try:
    await async_client.aws_step_functions.send_task_heartbeat(XAmzTarget21.AWS_STEP_FUNCTIONS_SEND_TASK_HEARTBEAT)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type SendTaskHeartbeatErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget21OrStr](aws_step_functions/models/enums/x_amz_target21.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](aws_step_functions/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](aws_step_functions/core/exceptions.py)&#91;[SendTaskHeartbeatErrorBody](aws_step_functions/errors/send_task_heartbeat_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[RawError](aws_step_functions/core/results.py)</code> |
| anything unmapped | <code>[RawError](aws_step_functions/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def send_task_success(x_amz_target: XAmzTarget22OrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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

**Sync**

```python
try:
    client.aws_step_functions.send_task_success(XAmzTarget22.AWS_STEP_FUNCTIONS_SEND_TASK_SUCCESS)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type SendTaskSuccessErrorBody
```

**Async**

```python
try:
    await async_client.aws_step_functions.send_task_success(XAmzTarget22.AWS_STEP_FUNCTIONS_SEND_TASK_SUCCESS)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type SendTaskSuccessErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget22OrStr](aws_step_functions/models/enums/x_amz_target22.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](aws_step_functions/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](aws_step_functions/core/exceptions.py)&#91;[SendTaskSuccessErrorBody](aws_step_functions/errors/send_task_success_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[RawError](aws_step_functions/core/results.py)</code> |
| anything unmapped | <code>[RawError](aws_step_functions/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def start_execution(x_amz_target: XAmzTarget12OrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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

**Sync**

```python
try:
    client.aws_step_functions.start_execution(XAmzTarget12.AWS_STEP_FUNCTIONS_START_EXECUTION)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type StartExecutionErrorBody
```

**Async**

```python
try:
    await async_client.aws_step_functions.start_execution(XAmzTarget12.AWS_STEP_FUNCTIONS_START_EXECUTION)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type StartExecutionErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget12OrStr](aws_step_functions/models/enums/x_amz_target12.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](aws_step_functions/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](aws_step_functions/core/exceptions.py)&#91;[StartExecutionErrorBody](aws_step_functions/errors/start_execution_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[RawError](aws_step_functions/core/results.py)</code> |
| anything unmapped | <code>[RawError](aws_step_functions/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def start_sync_execution(x_amz_target: XAmzTarget23OrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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

**Sync**

```python
try:
    client.aws_step_functions.start_sync_execution(XAmzTarget23.AWS_STEP_FUNCTIONS_START_SYNC_EXECUTION)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type StartSyncExecutionErrorBody
```

**Async**

```python
try:
    await async_client.aws_step_functions.start_sync_execution(XAmzTarget23.AWS_STEP_FUNCTIONS_START_SYNC_EXECUTION)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type StartSyncExecutionErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget23OrStr](aws_step_functions/models/enums/x_amz_target23.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](aws_step_functions/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](aws_step_functions/core/exceptions.py)&#91;[StartSyncExecutionErrorBody](aws_step_functions/errors/start_sync_execution_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[RawError](aws_step_functions/core/results.py)</code> |
| anything unmapped | <code>[RawError](aws_step_functions/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def stop_execution(x_amz_target: XAmzTarget13OrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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

**Sync**

```python
try:
    client.aws_step_functions.stop_execution(XAmzTarget13.AWS_STEP_FUNCTIONS_STOP_EXECUTION)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type StopExecutionErrorBody
```

**Async**

```python
try:
    await async_client.aws_step_functions.stop_execution(XAmzTarget13.AWS_STEP_FUNCTIONS_STOP_EXECUTION)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type StopExecutionErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget13OrStr](aws_step_functions/models/enums/x_amz_target13.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](aws_step_functions/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](aws_step_functions/core/exceptions.py)&#91;[StopExecutionErrorBody](aws_step_functions/errors/stop_execution_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[RawError](aws_step_functions/core/results.py)</code> |
| anything unmapped | <code>[RawError](aws_step_functions/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def tag_resource(x_amz_target: XAmzTarget24OrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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

**Sync**

```python
try:
    client.aws_step_functions.tag_resource(XAmzTarget24.AWS_STEP_FUNCTIONS_TAG_RESOURCE)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type TagResourceErrorBody
```

**Async**

```python
try:
    await async_client.aws_step_functions.tag_resource(XAmzTarget24.AWS_STEP_FUNCTIONS_TAG_RESOURCE)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type TagResourceErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget24OrStr](aws_step_functions/models/enums/x_amz_target24.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](aws_step_functions/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](aws_step_functions/core/exceptions.py)&#91;[TagResourceErrorBody](aws_step_functions/errors/tag_resource_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 404 | <code>[RawError](aws_step_functions/core/results.py)</code> |
| anything unmapped | <code>[RawError](aws_step_functions/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def untag_resource(x_amz_target: XAmzTarget25OrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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

**Sync**

```python
try:
    client.aws_step_functions.untag_resource(XAmzTarget25.AWS_STEP_FUNCTIONS_UNTAG_RESOURCE)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UntagResourceErrorBody
```

**Async**

```python
try:
    await async_client.aws_step_functions.untag_resource(XAmzTarget25.AWS_STEP_FUNCTIONS_UNTAG_RESOURCE)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UntagResourceErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget25OrStr](aws_step_functions/models/enums/x_amz_target25.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](aws_step_functions/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](aws_step_functions/core/exceptions.py)&#91;[UntagResourceErrorBody](aws_step_functions/errors/untag_resource_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 404 | <code>[RawError](aws_step_functions/core/results.py)</code> |
| anything unmapped | <code>[RawError](aws_step_functions/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def update_map_run(x_amz_target: XAmzTarget16OrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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

**Sync**

```python
try:
    client.aws_step_functions.update_map_run(XAmzTarget16.AWS_STEP_FUNCTIONS_UPDATE_MAP_RUN)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateMapRunErrorBody
```

**Async**

```python
try:
    await async_client.aws_step_functions.update_map_run(XAmzTarget16.AWS_STEP_FUNCTIONS_UPDATE_MAP_RUN)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateMapRunErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget16OrStr](aws_step_functions/models/enums/x_amz_target16.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](aws_step_functions/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](aws_step_functions/core/exceptions.py)&#91;[UpdateMapRunErrorBody](aws_step_functions/errors/update_map_run_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 404 | <code>[RawError](aws_step_functions/core/results.py)</code> |
| anything unmapped | <code>[RawError](aws_step_functions/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def update_state_machine(x_amz_target: XAmzTarget9OrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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

**Sync**

```python
try:
    client.aws_step_functions.update_state_machine(XAmzTarget9.AWS_STEP_FUNCTIONS_UPDATE_STATE_MACHINE)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateStateMachineErrorBody
```

**Async**

```python
try:
    await async_client.aws_step_functions.update_state_machine(XAmzTarget9.AWS_STEP_FUNCTIONS_UPDATE_STATE_MACHINE)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateStateMachineErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget9OrStr](aws_step_functions/models/enums/x_amz_target9.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](aws_step_functions/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](aws_step_functions/core/exceptions.py)&#91;[UpdateStateMachineErrorBody](aws_step_functions/errors/update_state_machine_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 402, 409 | <code>[RawError](aws_step_functions/core/results.py)</code> |
| anything unmapped | <code>[RawError](aws_step_functions/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## AwsStepFunctionsXAmzTargetAwsstepfunctionsCreatestat

> Source: [AwsStepFunctionsXAmzTargetAwsstepfunctionsCreatestat](aws_step_functions/apis/aws_step_functions_x_amz_target_awsstepfunctions_createstat.py)

<details>
<summary><code>def create_state_machine_alias(x_amz_target: XAmzTargetAwsStepFunctionsAwsStepFunctionsXAmzTargetAwsstepfunctionsCreatestatApiOrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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

**Sync**

```python
try:
    client.aws_step_functions_x_amz_target_awsstepfunctions_createstat.create_state_machine_alias(
        XAmzTargetAwsStepFunctionsAwsStepFunctionsXAmzTargetAwsstepfunctionsCreatestatApi.AWS_STEP_FUNCTIONS_CREATE_STATE_MACHINE_ALIAS,
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateStateMachineAliasErrorBody
```

**Async**

```python
try:
    await async_client.aws_step_functions_x_amz_target_awsstepfunctions_createstat.create_state_machine_alias(
        XAmzTargetAwsStepFunctionsAwsStepFunctionsXAmzTargetAwsstepfunctionsCreatestatApi.AWS_STEP_FUNCTIONS_CREATE_STATE_MACHINE_ALIAS,
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateStateMachineAliasErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTargetAwsStepFunctionsAwsStepFunctionsXAmzTargetAwsstepfunctionsCreatestatApiOrStr](aws_step_functions/models/enums/x_amz_target_aws_step_functions_aws_step_functions_x_amz_target_awsstepfunctions_createstat_api.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](aws_step_functions/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](aws_step_functions/core/exceptions.py)&#91;[CreateStateMachineAliasErrorBody](aws_step_functions/errors/create_state_machine_alias_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 402, 404, 409 | <code>[RawError](aws_step_functions/core/results.py)</code> |
| anything unmapped | <code>[RawError](aws_step_functions/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## AwsStepFunctionsXAmzTargetAwsstepfunctionsDeletestat

> Source: [AwsStepFunctionsXAmzTargetAwsstepfunctionsDeletestat](aws_step_functions/apis/aws_step_functions_x_amz_target_awsstepfunctions_deletestat.py)

<details>
<summary><code>def delete_state_machine_alias(x_amz_target: XAmzTargetAwsStepFunctionsAwsStepFunctionsXAmzTargetAwsstepfunctionsDeletestatApiOrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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

**Sync**

```python
try:
    client.aws_step_functions_x_amz_target_awsstepfunctions_deletestat.delete_state_machine_alias(
        XAmzTargetAwsStepFunctionsAwsStepFunctionsXAmzTargetAwsstepfunctionsDeletestatApi.AWS_STEP_FUNCTIONS_DELETE_STATE_MACHINE_ALIAS,
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteStateMachineAliasErrorBody
```

**Async**

```python
try:
    await async_client.aws_step_functions_x_amz_target_awsstepfunctions_deletestat.delete_state_machine_alias(
        XAmzTargetAwsStepFunctionsAwsStepFunctionsXAmzTargetAwsstepfunctionsDeletestatApi.AWS_STEP_FUNCTIONS_DELETE_STATE_MACHINE_ALIAS,
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteStateMachineAliasErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTargetAwsStepFunctionsAwsStepFunctionsXAmzTargetAwsstepfunctionsDeletestatApiOrStr](aws_step_functions/models/enums/x_amz_target_aws_step_functions_aws_step_functions_x_amz_target_awsstepfunctions_deletestat_api.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](aws_step_functions/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](aws_step_functions/core/exceptions.py)&#91;[DeleteStateMachineAliasErrorBody](aws_step_functions/errors/delete_state_machine_alias_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 404, 409 | <code>[RawError](aws_step_functions/core/results.py)</code> |
| anything unmapped | <code>[RawError](aws_step_functions/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def delete_state_machine_version(x_amz_target: XAmzTarget1AwsStepFunctionsAwsStepFunctionsXAmzTargetAwsstepfunctionsDeletestatApiOrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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

**Sync**

```python
try:
    client.aws_step_functions_x_amz_target_awsstepfunctions_deletestat.delete_state_machine_version(
        XAmzTarget1AwsStepFunctionsAwsStepFunctionsXAmzTargetAwsstepfunctionsDeletestatApi.AWS_STEP_FUNCTIONS_DELETE_STATE_MACHINE_VERSION,
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteStateMachineVersionErrorBody
```

**Async**

```python
try:
    await async_client.aws_step_functions_x_amz_target_awsstepfunctions_deletestat.delete_state_machine_version(
        XAmzTarget1AwsStepFunctionsAwsStepFunctionsXAmzTargetAwsstepfunctionsDeletestatApi.AWS_STEP_FUNCTIONS_DELETE_STATE_MACHINE_VERSION,
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteStateMachineVersionErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget1AwsStepFunctionsAwsStepFunctionsXAmzTargetAwsstepfunctionsDeletestatApiOrStr](aws_step_functions/models/enums/x_amz_target1_aws_step_functions_aws_step_functions_x_amz_target_awsstepfunctions_deletestat_api.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](aws_step_functions/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](aws_step_functions/core/exceptions.py)&#91;[DeleteStateMachineVersionErrorBody](aws_step_functions/errors/delete_state_machine_version_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 409 | <code>[RawError](aws_step_functions/core/results.py)</code> |
| anything unmapped | <code>[RawError](aws_step_functions/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## AwsStepFunctionsXAmzTargetAwsstepfunctionsDescribest

> Source: [AwsStepFunctionsXAmzTargetAwsstepfunctionsDescribest](aws_step_functions/apis/aws_step_functions_x_amz_target_awsstepfunctions_describest.py)

<details>
<summary><code>def describe_state_machine_alias(x_amz_target: XAmzTargetAwsStepFunctionsAwsStepFunctionsXAmzTargetAwsstepfunctionsDescribestApiOrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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

**Sync**

```python
try:
    client.aws_step_functions_x_amz_target_awsstepfunctions_describest.describe_state_machine_alias(
        XAmzTargetAwsStepFunctionsAwsStepFunctionsXAmzTargetAwsstepfunctionsDescribestApi.AWS_STEP_FUNCTIONS_DESCRIBE_STATE_MACHINE_ALIAS,
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DescribeStateMachineAliasErrorBody
```

**Async**

```python
try:
    await async_client.aws_step_functions_x_amz_target_awsstepfunctions_describest.describe_state_machine_alias(
        XAmzTargetAwsStepFunctionsAwsStepFunctionsXAmzTargetAwsstepfunctionsDescribestApi.AWS_STEP_FUNCTIONS_DESCRIBE_STATE_MACHINE_ALIAS,
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DescribeStateMachineAliasErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTargetAwsStepFunctionsAwsStepFunctionsXAmzTargetAwsstepfunctionsDescribestApiOrStr](aws_step_functions/models/enums/x_amz_target_aws_step_functions_aws_step_functions_x_amz_target_awsstepfunctions_describest_api.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](aws_step_functions/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](aws_step_functions/core/exceptions.py)&#91;[DescribeStateMachineAliasErrorBody](aws_step_functions/errors/describe_state_machine_alias_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 404 | <code>[RawError](aws_step_functions/core/results.py)</code> |
| anything unmapped | <code>[RawError](aws_step_functions/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## AwsStepFunctionsXAmzTargetAwsstepfunctionsListstatem

> Source: [AwsStepFunctionsXAmzTargetAwsstepfunctionsListstatem](aws_step_functions/apis/aws_step_functions_x_amz_target_awsstepfunctions_liststatem.py)

<details>
<summary><code>def list_state_machine_aliases(x_amz_target: XAmzTarget1AwsStepFunctionsAwsStepFunctionsXAmzTargetAwsstepfunctionsListstatemApiOrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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

**Sync**

```python
try:
    client.aws_step_functions_x_amz_target_awsstepfunctions_liststatem.list_state_machine_aliases(
        XAmzTarget1AwsStepFunctionsAwsStepFunctionsXAmzTargetAwsstepfunctionsListstatemApi.AWS_STEP_FUNCTIONS_LIST_STATE_MACHINE_ALIASES,
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListStateMachineAliasesErrorBody
```

**Async**

```python
try:
    await async_client.aws_step_functions_x_amz_target_awsstepfunctions_liststatem.list_state_machine_aliases(
        XAmzTarget1AwsStepFunctionsAwsStepFunctionsXAmzTargetAwsstepfunctionsListstatemApi.AWS_STEP_FUNCTIONS_LIST_STATE_MACHINE_ALIASES,
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListStateMachineAliasesErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget1AwsStepFunctionsAwsStepFunctionsXAmzTargetAwsstepfunctionsListstatemApiOrStr](aws_step_functions/models/enums/x_amz_target1_aws_step_functions_aws_step_functions_x_amz_target_awsstepfunctions_liststatem_api.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](aws_step_functions/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](aws_step_functions/core/exceptions.py)&#91;[ListStateMachineAliasesErrorBody](aws_step_functions/errors/list_state_machine_aliases_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 404 | <code>[RawError](aws_step_functions/core/results.py)</code> |
| anything unmapped | <code>[RawError](aws_step_functions/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_state_machine_versions(x_amz_target: XAmzTargetAwsStepFunctionsAwsStepFunctionsXAmzTargetAwsstepfunctionsListstatemApiOrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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

**Sync**

```python
try:
    client.aws_step_functions_x_amz_target_awsstepfunctions_liststatem.list_state_machine_versions(
        XAmzTargetAwsStepFunctionsAwsStepFunctionsXAmzTargetAwsstepfunctionsListstatemApi.AWS_STEP_FUNCTIONS_LIST_STATE_MACHINE_VERSIONS,
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListStateMachineVersionsErrorBody
```

**Async**

```python
try:
    await async_client.aws_step_functions_x_amz_target_awsstepfunctions_liststatem.list_state_machine_versions(
        XAmzTargetAwsStepFunctionsAwsStepFunctionsXAmzTargetAwsstepfunctionsListstatemApi.AWS_STEP_FUNCTIONS_LIST_STATE_MACHINE_VERSIONS,
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListStateMachineVersionsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTargetAwsStepFunctionsAwsStepFunctionsXAmzTargetAwsstepfunctionsListstatemApiOrStr](aws_step_functions/models/enums/x_amz_target_aws_step_functions_aws_step_functions_x_amz_target_awsstepfunctions_liststatem_api.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](aws_step_functions/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](aws_step_functions/core/exceptions.py)&#91;[ListStateMachineVersionsErrorBody](aws_step_functions/errors/list_state_machine_versions_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[RawError](aws_step_functions/core/results.py)</code> |
| anything unmapped | <code>[RawError](aws_step_functions/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## AwsStepFunctionsXAmzTargetAwsstepfunctionsPublishsta

> Source: [AwsStepFunctionsXAmzTargetAwsstepfunctionsPublishsta](aws_step_functions/apis/aws_step_functions_x_amz_target_awsstepfunctions_publishsta.py)

<details>
<summary><code>def publish_state_machine_version(x_amz_target: XAmzTargetAwsStepFunctionsAwsStepFunctionsXAmzTargetAwsstepfunctionsPublishstaApiOrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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

**Sync**

```python
try:
    client.aws_step_functions_x_amz_target_awsstepfunctions_publishsta.publish_state_machine_version(
        XAmzTargetAwsStepFunctionsAwsStepFunctionsXAmzTargetAwsstepfunctionsPublishstaApi.AWS_STEP_FUNCTIONS_PUBLISH_STATE_MACHINE_VERSION,
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PublishStateMachineVersionErrorBody
```

**Async**

```python
try:
    await async_client.aws_step_functions_x_amz_target_awsstepfunctions_publishsta.publish_state_machine_version(
        XAmzTargetAwsStepFunctionsAwsStepFunctionsXAmzTargetAwsstepfunctionsPublishstaApi.AWS_STEP_FUNCTIONS_PUBLISH_STATE_MACHINE_VERSION,
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PublishStateMachineVersionErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTargetAwsStepFunctionsAwsStepFunctionsXAmzTargetAwsstepfunctionsPublishstaApiOrStr](aws_step_functions/models/enums/x_amz_target_aws_step_functions_aws_step_functions_x_amz_target_awsstepfunctions_publishsta_api.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](aws_step_functions/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](aws_step_functions/core/exceptions.py)&#91;[PublishStateMachineVersionErrorBody](aws_step_functions/errors/publish_state_machine_version_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 402, 409 | <code>[RawError](aws_step_functions/core/results.py)</code> |
| anything unmapped | <code>[RawError](aws_step_functions/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## AwsStepFunctionsXAmzTargetAwsstepfunctionsUpdatestat

> Source: [AwsStepFunctionsXAmzTargetAwsstepfunctionsUpdatestat](aws_step_functions/apis/aws_step_functions_x_amz_target_awsstepfunctions_updatestat.py)

<details>
<summary><code>def update_state_machine_alias(x_amz_target: XAmzTargetAwsStepFunctionsAwsStepFunctionsXAmzTargetAwsstepfunctionsUpdatestatApiOrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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

**Sync**

```python
try:
    client.aws_step_functions_x_amz_target_awsstepfunctions_updatestat.update_state_machine_alias(
        XAmzTargetAwsStepFunctionsAwsStepFunctionsXAmzTargetAwsstepfunctionsUpdatestatApi.AWS_STEP_FUNCTIONS_UPDATE_STATE_MACHINE_ALIAS,
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateStateMachineAliasErrorBody
```

**Async**

```python
try:
    await async_client.aws_step_functions_x_amz_target_awsstepfunctions_updatestat.update_state_machine_alias(
        XAmzTargetAwsStepFunctionsAwsStepFunctionsXAmzTargetAwsstepfunctionsUpdatestatApi.AWS_STEP_FUNCTIONS_UPDATE_STATE_MACHINE_ALIAS,
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateStateMachineAliasErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTargetAwsStepFunctionsAwsStepFunctionsXAmzTargetAwsstepfunctionsUpdatestatApiOrStr](aws_step_functions/models/enums/x_amz_target_aws_step_functions_aws_step_functions_x_amz_target_awsstepfunctions_updatestat_api.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](aws_step_functions/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](aws_step_functions/core/exceptions.py)&#91;[UpdateStateMachineAliasErrorBody](aws_step_functions/errors/update_state_machine_alias_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 404, 409 | <code>[RawError](aws_step_functions/core/results.py)</code> |
| anything unmapped | <code>[RawError](aws_step_functions/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Operations

> Source: [Operations](aws_step_functions/apis/operations.py)

<details>
<summary><code>def publish_state_machine_version2(x_amz_target: XAmzTargetAwsStepFunctionsAwsStepFunctionsXAmzTargetAwsstepfunctionsPublishstaApiOrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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

**Sync**

```python
try:
    client.operations.publish_state_machine_version2(
        XAmzTargetAwsStepFunctionsAwsStepFunctionsXAmzTargetAwsstepfunctionsPublishstaApi.AWS_STEP_FUNCTIONS_PUBLISH_STATE_MACHINE_VERSION,
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PublishStateMachineVersion2ErrorBody
```

**Async**

```python
try:
    await async_client.operations.publish_state_machine_version2(
        XAmzTargetAwsStepFunctionsAwsStepFunctionsXAmzTargetAwsstepfunctionsPublishstaApi.AWS_STEP_FUNCTIONS_PUBLISH_STATE_MACHINE_VERSION,
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PublishStateMachineVersion2ErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTargetAwsStepFunctionsAwsStepFunctionsXAmzTargetAwsstepfunctionsPublishstaApiOrStr](aws_step_functions/models/enums/x_amz_target_aws_step_functions_aws_step_functions_x_amz_target_awsstepfunctions_publishsta_api.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](aws_step_functions/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](aws_step_functions/core/exceptions.py)&#91;[PublishStateMachineVersion2ErrorBody](aws_step_functions/errors/publish_state_machine_version2_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 402, 409 | <code>[RawError](aws_step_functions/core/results.py)</code> |
| anything unmapped | <code>[RawError](aws_step_functions/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def redrive_execution(x_amz_target: XAmzTarget1AwsStepFunctionsOperationsApiOrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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

**Sync**

```python
try:
    client.operations.redrive_execution(XAmzTarget1AwsStepFunctionsOperationsApi.AWS_STEP_FUNCTIONS_REDRIVE_EXECUTION)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RedriveExecutionErrorBody
```

**Async**

```python
try:
    await async_client.operations.redrive_execution(
        XAmzTarget1AwsStepFunctionsOperationsApi.AWS_STEP_FUNCTIONS_REDRIVE_EXECUTION
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RedriveExecutionErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget1AwsStepFunctionsOperationsApiOrStr](aws_step_functions/models/enums/x_amz_target1_aws_step_functions_operations_api.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](aws_step_functions/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](aws_step_functions/core/exceptions.py)&#91;[RedriveExecutionErrorBody](aws_step_functions/errors/redrive_execution_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[RawError](aws_step_functions/core/results.py)</code> |
| anything unmapped | <code>[RawError](aws_step_functions/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def test_state(x_amz_target: XAmzTarget2AwsStepFunctionsOperationsApiOrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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

**Sync**

```python
try:
    client.operations.test_state(XAmzTarget2AwsStepFunctionsOperationsApi.AWS_STEP_FUNCTIONS_TEST_STATE)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type TestStateErrorBody
```

**Async**

```python
try:
    await async_client.operations.test_state(XAmzTarget2AwsStepFunctionsOperationsApi.AWS_STEP_FUNCTIONS_TEST_STATE)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type TestStateErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget2AwsStepFunctionsOperationsApiOrStr](aws_step_functions/models/enums/x_amz_target2_aws_step_functions_operations_api.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](aws_step_functions/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](aws_step_functions/core/exceptions.py)&#91;[TestStateErrorBody](aws_step_functions/errors/test_state_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[RawError](aws_step_functions/core/results.py)</code> |
| anything unmapped | <code>[RawError](aws_step_functions/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def validate_state_machine_definition(x_amz_target: XAmzTarget3AwsStepFunctionsOperationsApiOrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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

**Sync**

```python
try:
    client.operations.validate_state_machine_definition(
        XAmzTarget3AwsStepFunctionsOperationsApi.AWS_STEP_FUNCTIONS_VALIDATE_STATE_MACHINE_DEFINITION
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ValidateStateMachineDefinitionErrorBody
```

**Async**

```python
try:
    await async_client.operations.validate_state_machine_definition(
        XAmzTarget3AwsStepFunctionsOperationsApi.AWS_STEP_FUNCTIONS_VALIDATE_STATE_MACHINE_DEFINITION
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ValidateStateMachineDefinitionErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget3AwsStepFunctionsOperationsApiOrStr](aws_step_functions/models/enums/x_amz_target3_aws_step_functions_operations_api.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](aws_step_functions/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](aws_step_functions/core/exceptions.py)&#91;[ValidateStateMachineDefinitionErrorBody](aws_step_functions/errors/validate_state_machine_definition_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[RawError](aws_step_functions/core/results.py)</code> |
| anything unmapped | <code>[RawError](aws_step_functions/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## StateMachines

> Source: [StateMachines](aws_step_functions/apis/state_machines.py)

<details>
<summary><code>def create_state_machine2(x_amz_target: XAmzTargetAwsStepFunctionsStateMachinesApiOrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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

**Sync**

```python
try:
    client.state_machines.create_state_machine2(
        XAmzTargetAwsStepFunctionsStateMachinesApi.AWS_STEP_FUNCTIONS_CREATE_STATE_MACHINE
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateStateMachine2ErrorBody
```

**Async**

```python
try:
    await async_client.state_machines.create_state_machine2(
        XAmzTargetAwsStepFunctionsStateMachinesApi.AWS_STEP_FUNCTIONS_CREATE_STATE_MACHINE
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateStateMachine2ErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTargetAwsStepFunctionsStateMachinesApiOrStr](aws_step_functions/models/enums/x_amz_target_aws_step_functions_state_machines_api.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](aws_step_functions/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](aws_step_functions/core/exceptions.py)&#91;[CreateStateMachine2ErrorBody](aws_step_functions/errors/create_state_machine2_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 409 | <code>[RawError](aws_step_functions/core/results.py)</code> |
| anything unmapped | <code>[RawError](aws_step_functions/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def delete_state_machine2(x_amz_target: XAmzTarget1AwsStepFunctionsStateMachinesApiOrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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

**Sync**

```python
try:
    client.state_machines.delete_state_machine2(
        XAmzTarget1AwsStepFunctionsStateMachinesApi.AWS_STEP_FUNCTIONS_DELETE_STATE_MACHINE
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteStateMachine2ErrorBody
```

**Async**

```python
try:
    await async_client.state_machines.delete_state_machine2(
        XAmzTarget1AwsStepFunctionsStateMachinesApi.AWS_STEP_FUNCTIONS_DELETE_STATE_MACHINE
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteStateMachine2ErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget1AwsStepFunctionsStateMachinesApiOrStr](aws_step_functions/models/enums/x_amz_target1_aws_step_functions_state_machines_api.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](aws_step_functions/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](aws_step_functions/core/exceptions.py)&#91;[DeleteStateMachine2ErrorBody](aws_step_functions/errors/delete_state_machine2_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[RawError](aws_step_functions/core/results.py)</code> |
| anything unmapped | <code>[RawError](aws_step_functions/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def describe_state_machine2(x_amz_target: XAmzTarget2AwsStepFunctionsStateMachinesApiOrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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

**Sync**

```python
try:
    client.state_machines.describe_state_machine2(
        XAmzTarget2AwsStepFunctionsStateMachinesApi.AWS_STEP_FUNCTIONS_DESCRIBE_STATE_MACHINE
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DescribeStateMachine2ErrorBody
```

**Async**

```python
try:
    await async_client.state_machines.describe_state_machine2(
        XAmzTarget2AwsStepFunctionsStateMachinesApi.AWS_STEP_FUNCTIONS_DESCRIBE_STATE_MACHINE
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DescribeStateMachine2ErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget2AwsStepFunctionsStateMachinesApiOrStr](aws_step_functions/models/enums/x_amz_target2_aws_step_functions_state_machines_api.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](aws_step_functions/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](aws_step_functions/core/exceptions.py)&#91;[DescribeStateMachine2ErrorBody](aws_step_functions/errors/describe_state_machine2_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[RawError](aws_step_functions/core/results.py)</code> |
| anything unmapped | <code>[RawError](aws_step_functions/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def describe_state_machine_for_execution2(x_amz_target: XAmzTarget3AwsStepFunctionsStateMachinesApiOrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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

**Sync**

```python
try:
    client.state_machines.describe_state_machine_for_execution2(
        XAmzTarget3AwsStepFunctionsStateMachinesApi.AWS_STEP_FUNCTIONS_DESCRIBE_STATE_MACHINE_FOR_EXECUTION
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DescribeStateMachineForExecution2ErrorBody
```

**Async**

```python
try:
    await async_client.state_machines.describe_state_machine_for_execution2(
        XAmzTarget3AwsStepFunctionsStateMachinesApi.AWS_STEP_FUNCTIONS_DESCRIBE_STATE_MACHINE_FOR_EXECUTION
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DescribeStateMachineForExecution2ErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget3AwsStepFunctionsStateMachinesApiOrStr](aws_step_functions/models/enums/x_amz_target3_aws_step_functions_state_machines_api.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](aws_step_functions/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](aws_step_functions/core/exceptions.py)&#91;[DescribeStateMachineForExecution2ErrorBody](aws_step_functions/errors/describe_state_machine_for_execution2_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[RawError](aws_step_functions/core/results.py)</code> |
| anything unmapped | <code>[RawError](aws_step_functions/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_state_machines2(x_amz_target: XAmzTarget4AwsStepFunctionsStateMachinesApiOrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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

**Sync**

```python
try:
    client.state_machines.list_state_machines2(
        XAmzTarget4AwsStepFunctionsStateMachinesApi.AWS_STEP_FUNCTIONS_LIST_STATE_MACHINES
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListStateMachines2ErrorBody
```

**Async**

```python
try:
    await async_client.state_machines.list_state_machines2(
        XAmzTarget4AwsStepFunctionsStateMachinesApi.AWS_STEP_FUNCTIONS_LIST_STATE_MACHINES
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListStateMachines2ErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget4AwsStepFunctionsStateMachinesApiOrStr](aws_step_functions/models/enums/x_amz_target4_aws_step_functions_state_machines_api.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](aws_step_functions/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](aws_step_functions/core/exceptions.py)&#91;[ListStateMachines2ErrorBody](aws_step_functions/errors/list_state_machines2_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[RawError](aws_step_functions/core/results.py)</code> |
| anything unmapped | <code>[RawError](aws_step_functions/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def update_state_machine2(x_amz_target: XAmzTarget5AwsStepFunctionsStateMachinesApiOrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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

**Sync**

```python
try:
    client.state_machines.update_state_machine2(
        XAmzTarget5AwsStepFunctionsStateMachinesApi.AWS_STEP_FUNCTIONS_UPDATE_STATE_MACHINE
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateStateMachine2ErrorBody
```

**Async**

```python
try:
    await async_client.state_machines.update_state_machine2(
        XAmzTarget5AwsStepFunctionsStateMachinesApi.AWS_STEP_FUNCTIONS_UPDATE_STATE_MACHINE
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateStateMachine2ErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget5AwsStepFunctionsStateMachinesApiOrStr](aws_step_functions/models/enums/x_amz_target5_aws_step_functions_state_machines_api.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](aws_step_functions/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](aws_step_functions/core/exceptions.py)&#91;[UpdateStateMachine2ErrorBody](aws_step_functions/errors/update_state_machine2_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 402, 409 | <code>[RawError](aws_step_functions/core/results.py)</code> |
| anything unmapped | <code>[RawError](aws_step_functions/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

