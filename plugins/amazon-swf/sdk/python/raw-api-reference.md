# Raw Reference

**Raw** endpoints, reached through `with_raw_response`, return `ApiResult[T, E]` and never raise for an API error. For the parsed endpoints, see [API Reference](api-reference.md).

> Source: [AmazonSwfClient](amazon_swf/client.py)

## AmazonSimpleWorkflowService

> Source: [AmazonSimpleWorkflowService](amazon_swf/apis/amazon_simple_workflow_service.py)

<details>
<summary><code>def count_closed_workflow_executions(x_amz_target: XAmzTargetOrStr, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, CountClosedWorkflowExecutionsErrorBody]</code></summary>

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

**Sync**

```python
result = client.amazon_simple_workflow_service.with_raw_response.count_closed_workflow_executions(
    XAmzTarget.SIMPLE_WORKFLOW_SERVICE_COUNT_CLOSED_WORKFLOW_EXECUTIONS
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CountClosedWorkflowExecutionsErrorBody
```

**Async**

```python
result = await async_client.amazon_simple_workflow_service.with_raw_response.count_closed_workflow_executions(
    XAmzTarget.SIMPLE_WORKFLOW_SERVICE_COUNT_CLOSED_WORKFLOW_EXECUTIONS
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CountClosedWorkflowExecutionsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTargetOrStr](amazon_swf/models/enums/x_amz_target.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_swf/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](amazon_swf/core/results.py)&#91;None, [CountClosedWorkflowExecutionsErrorBody](amazon_swf/errors/count_closed_workflow_executions_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[CountClosedWorkflowExecutionsErrorBody](amazon_swf/errors/count_closed_workflow_executions_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[RawError](amazon_swf/core/results.py)</code> |
| anything unmapped | <code>[RawError](amazon_swf/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def count_open_workflow_executions(x_amz_target: XAmzTarget1OrStr, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, CountOpenWorkflowExecutionsErrorBody]</code></summary>

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

**Sync**

```python
result = client.amazon_simple_workflow_service.with_raw_response.count_open_workflow_executions(
    XAmzTarget1.SIMPLE_WORKFLOW_SERVICE_COUNT_OPEN_WORKFLOW_EXECUTIONS
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CountOpenWorkflowExecutionsErrorBody
```

**Async**

```python
result = await async_client.amazon_simple_workflow_service.with_raw_response.count_open_workflow_executions(
    XAmzTarget1.SIMPLE_WORKFLOW_SERVICE_COUNT_OPEN_WORKFLOW_EXECUTIONS
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CountOpenWorkflowExecutionsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget1OrStr](amazon_swf/models/enums/x_amz_target1.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_swf/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](amazon_swf/core/results.py)&#91;None, [CountOpenWorkflowExecutionsErrorBody](amazon_swf/errors/count_open_workflow_executions_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[CountOpenWorkflowExecutionsErrorBody](amazon_swf/errors/count_open_workflow_executions_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[RawError](amazon_swf/core/results.py)</code> |
| anything unmapped | <code>[RawError](amazon_swf/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def count_pending_activity_tasks(x_amz_target: XAmzTarget2OrStr, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, CountPendingActivityTasksErrorBody]</code></summary>

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

**Sync**

```python
result = client.amazon_simple_workflow_service.with_raw_response.count_pending_activity_tasks(
    XAmzTarget2.SIMPLE_WORKFLOW_SERVICE_COUNT_PENDING_ACTIVITY_TASKS
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CountPendingActivityTasksErrorBody
```

**Async**

```python
result = await async_client.amazon_simple_workflow_service.with_raw_response.count_pending_activity_tasks(
    XAmzTarget2.SIMPLE_WORKFLOW_SERVICE_COUNT_PENDING_ACTIVITY_TASKS
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CountPendingActivityTasksErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget2OrStr](amazon_swf/models/enums/x_amz_target2.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_swf/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](amazon_swf/core/results.py)&#91;None, [CountPendingActivityTasksErrorBody](amazon_swf/errors/count_pending_activity_tasks_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[CountPendingActivityTasksErrorBody](amazon_swf/errors/count_pending_activity_tasks_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[RawError](amazon_swf/core/results.py)</code> |
| anything unmapped | <code>[RawError](amazon_swf/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def count_pending_decision_tasks(x_amz_target: XAmzTarget3OrStr, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, CountPendingDecisionTasksErrorBody]</code></summary>

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

**Sync**

```python
result = client.amazon_simple_workflow_service.with_raw_response.count_pending_decision_tasks(
    XAmzTarget3.SIMPLE_WORKFLOW_SERVICE_COUNT_PENDING_DECISION_TASKS
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CountPendingDecisionTasksErrorBody
```

**Async**

```python
result = await async_client.amazon_simple_workflow_service.with_raw_response.count_pending_decision_tasks(
    XAmzTarget3.SIMPLE_WORKFLOW_SERVICE_COUNT_PENDING_DECISION_TASKS
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CountPendingDecisionTasksErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget3OrStr](amazon_swf/models/enums/x_amz_target3.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_swf/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](amazon_swf/core/results.py)&#91;None, [CountPendingDecisionTasksErrorBody](amazon_swf/errors/count_pending_decision_tasks_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[CountPendingDecisionTasksErrorBody](amazon_swf/errors/count_pending_decision_tasks_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[RawError](amazon_swf/core/results.py)</code> |
| anything unmapped | <code>[RawError](amazon_swf/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def deprecate_activity_type(x_amz_target: XAmzTarget4OrStr, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, DeprecateActivityTypeErrorBody]</code></summary>

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

**Sync**

```python
result = client.amazon_simple_workflow_service.with_raw_response.deprecate_activity_type(
    XAmzTarget4.SIMPLE_WORKFLOW_SERVICE_DEPRECATE_ACTIVITY_TYPE
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeprecateActivityTypeErrorBody
```

**Async**

```python
result = await async_client.amazon_simple_workflow_service.with_raw_response.deprecate_activity_type(
    XAmzTarget4.SIMPLE_WORKFLOW_SERVICE_DEPRECATE_ACTIVITY_TYPE
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeprecateActivityTypeErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget4OrStr](amazon_swf/models/enums/x_amz_target4.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_swf/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](amazon_swf/core/results.py)&#91;None, [DeprecateActivityTypeErrorBody](amazon_swf/errors/deprecate_activity_type_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[DeprecateActivityTypeErrorBody](amazon_swf/errors/deprecate_activity_type_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[RawError](amazon_swf/core/results.py)</code> |
| anything unmapped | <code>[RawError](amazon_swf/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def deprecate_domain(x_amz_target: XAmzTarget5OrStr, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, DeprecateDomainErrorBody]</code></summary>

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

**Sync**

```python
result = client.amazon_simple_workflow_service.with_raw_response.deprecate_domain(
    XAmzTarget5.SIMPLE_WORKFLOW_SERVICE_DEPRECATE_DOMAIN
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeprecateDomainErrorBody
```

**Async**

```python
result = await async_client.amazon_simple_workflow_service.with_raw_response.deprecate_domain(
    XAmzTarget5.SIMPLE_WORKFLOW_SERVICE_DEPRECATE_DOMAIN
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeprecateDomainErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget5OrStr](amazon_swf/models/enums/x_amz_target5.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_swf/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](amazon_swf/core/results.py)&#91;None, [DeprecateDomainErrorBody](amazon_swf/errors/deprecate_domain_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[DeprecateDomainErrorBody](amazon_swf/errors/deprecate_domain_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[RawError](amazon_swf/core/results.py)</code> |
| anything unmapped | <code>[RawError](amazon_swf/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def deprecate_workflow_type(x_amz_target: XAmzTarget6OrStr, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, DeprecateWorkflowTypeErrorBody]</code></summary>

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

**Sync**

```python
result = client.amazon_simple_workflow_service.with_raw_response.deprecate_workflow_type(
    XAmzTarget6.SIMPLE_WORKFLOW_SERVICE_DEPRECATE_WORKFLOW_TYPE
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeprecateWorkflowTypeErrorBody
```

**Async**

```python
result = await async_client.amazon_simple_workflow_service.with_raw_response.deprecate_workflow_type(
    XAmzTarget6.SIMPLE_WORKFLOW_SERVICE_DEPRECATE_WORKFLOW_TYPE
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeprecateWorkflowTypeErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget6OrStr](amazon_swf/models/enums/x_amz_target6.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_swf/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](amazon_swf/core/results.py)&#91;None, [DeprecateWorkflowTypeErrorBody](amazon_swf/errors/deprecate_workflow_type_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[DeprecateWorkflowTypeErrorBody](amazon_swf/errors/deprecate_workflow_type_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[RawError](amazon_swf/core/results.py)</code> |
| anything unmapped | <code>[RawError](amazon_swf/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def describe_activity_type(x_amz_target: XAmzTarget20OrStr, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, DescribeActivityTypeErrorBody]</code></summary>

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

**Sync**

```python
result = client.amazon_simple_workflow_service.with_raw_response.describe_activity_type(
    XAmzTarget20.SIMPLE_WORKFLOW_SERVICE_DESCRIBE_ACTIVITY_TYPE
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DescribeActivityTypeErrorBody
```

**Async**

```python
result = await async_client.amazon_simple_workflow_service.with_raw_response.describe_activity_type(
    XAmzTarget20.SIMPLE_WORKFLOW_SERVICE_DESCRIBE_ACTIVITY_TYPE
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DescribeActivityTypeErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget20OrStr](amazon_swf/models/enums/x_amz_target20.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_swf/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](amazon_swf/core/results.py)&#91;None, [DescribeActivityTypeErrorBody](amazon_swf/errors/describe_activity_type_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[DescribeActivityTypeErrorBody](amazon_swf/errors/describe_activity_type_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[RawError](amazon_swf/core/results.py)</code> |
| anything unmapped | <code>[RawError](amazon_swf/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def describe_domain(x_amz_target: XAmzTarget26OrStr, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, DescribeDomainErrorBody]</code></summary>

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

**Sync**

```python
result = client.amazon_simple_workflow_service.with_raw_response.describe_domain(
    XAmzTarget26.SIMPLE_WORKFLOW_SERVICE_DESCRIBE_DOMAIN
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DescribeDomainErrorBody
```

**Async**

```python
result = await async_client.amazon_simple_workflow_service.with_raw_response.describe_domain(
    XAmzTarget26.SIMPLE_WORKFLOW_SERVICE_DESCRIBE_DOMAIN
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DescribeDomainErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget26OrStr](amazon_swf/models/enums/x_amz_target26.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_swf/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](amazon_swf/core/results.py)&#91;None, [DescribeDomainErrorBody](amazon_swf/errors/describe_domain_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[DescribeDomainErrorBody](amazon_swf/errors/describe_domain_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[RawError](amazon_swf/core/results.py)</code> |
| anything unmapped | <code>[RawError](amazon_swf/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def describe_workflow_execution(x_amz_target: XAmzTarget29OrStr, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, DescribeWorkflowExecutionErrorBody]</code></summary>

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

**Sync**

```python
result = client.amazon_simple_workflow_service.with_raw_response.describe_workflow_execution(
    XAmzTarget29.SIMPLE_WORKFLOW_SERVICE_DESCRIBE_WORKFLOW_EXECUTION
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DescribeWorkflowExecutionErrorBody
```

**Async**

```python
result = await async_client.amazon_simple_workflow_service.with_raw_response.describe_workflow_execution(
    XAmzTarget29.SIMPLE_WORKFLOW_SERVICE_DESCRIBE_WORKFLOW_EXECUTION
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DescribeWorkflowExecutionErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget29OrStr](amazon_swf/models/enums/x_amz_target29.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_swf/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](amazon_swf/core/results.py)&#91;None, [DescribeWorkflowExecutionErrorBody](amazon_swf/errors/describe_workflow_execution_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[DescribeWorkflowExecutionErrorBody](amazon_swf/errors/describe_workflow_execution_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[RawError](amazon_swf/core/results.py)</code> |
| anything unmapped | <code>[RawError](amazon_swf/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def describe_workflow_type(x_amz_target: XAmzTarget23OrStr, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, DescribeWorkflowTypeErrorBody]</code></summary>

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

**Sync**

```python
result = client.amazon_simple_workflow_service.with_raw_response.describe_workflow_type(
    XAmzTarget23.SIMPLE_WORKFLOW_SERVICE_DESCRIBE_WORKFLOW_TYPE
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DescribeWorkflowTypeErrorBody
```

**Async**

```python
result = await async_client.amazon_simple_workflow_service.with_raw_response.describe_workflow_type(
    XAmzTarget23.SIMPLE_WORKFLOW_SERVICE_DESCRIBE_WORKFLOW_TYPE
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DescribeWorkflowTypeErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget23OrStr](amazon_swf/models/enums/x_amz_target23.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_swf/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](amazon_swf/core/results.py)&#91;None, [DescribeWorkflowTypeErrorBody](amazon_swf/errors/describe_workflow_type_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[DescribeWorkflowTypeErrorBody](amazon_swf/errors/describe_workflow_type_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[RawError](amazon_swf/core/results.py)</code> |
| anything unmapped | <code>[RawError](amazon_swf/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_workflow_execution_history(x_amz_target: XAmzTarget31OrStr, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, GetWorkflowExecutionHistoryErrorBody]</code></summary>

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

**Sync**

```python
result = client.amazon_simple_workflow_service.with_raw_response.get_workflow_execution_history(
    XAmzTarget31.SIMPLE_WORKFLOW_SERVICE_GET_WORKFLOW_EXECUTION_HISTORY
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetWorkflowExecutionHistoryErrorBody
```

**Async**

```python
result = await async_client.amazon_simple_workflow_service.with_raw_response.get_workflow_execution_history(
    XAmzTarget31.SIMPLE_WORKFLOW_SERVICE_GET_WORKFLOW_EXECUTION_HISTORY
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetWorkflowExecutionHistoryErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget31OrStr](amazon_swf/models/enums/x_amz_target31.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_swf/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](amazon_swf/core/results.py)&#91;None, [GetWorkflowExecutionHistoryErrorBody](amazon_swf/errors/get_workflow_execution_history_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[GetWorkflowExecutionHistoryErrorBody](amazon_swf/errors/get_workflow_execution_history_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[RawError](amazon_swf/core/results.py)</code> |
| anything unmapped | <code>[RawError](amazon_swf/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_activity_types(x_amz_target: XAmzTarget21OrStr, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, ListActivityTypesErrorBody]</code></summary>

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

**Sync**

```python
result = client.amazon_simple_workflow_service.with_raw_response.list_activity_types(
    XAmzTarget21.SIMPLE_WORKFLOW_SERVICE_LIST_ACTIVITY_TYPES
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListActivityTypesErrorBody
```

**Async**

```python
result = await async_client.amazon_simple_workflow_service.with_raw_response.list_activity_types(
    XAmzTarget21.SIMPLE_WORKFLOW_SERVICE_LIST_ACTIVITY_TYPES
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListActivityTypesErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget21OrStr](amazon_swf/models/enums/x_amz_target21.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_swf/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](amazon_swf/core/results.py)&#91;None, [ListActivityTypesErrorBody](amazon_swf/errors/list_activity_types_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[ListActivityTypesErrorBody](amazon_swf/errors/list_activity_types_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[RawError](amazon_swf/core/results.py)</code> |
| anything unmapped | <code>[RawError](amazon_swf/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_closed_workflow_executions(x_amz_target: XAmzTarget32OrStr, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, ListClosedWorkflowExecutionsErrorBody]</code></summary>

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

**Sync**

```python
result = client.amazon_simple_workflow_service.with_raw_response.list_closed_workflow_executions(
    XAmzTarget32.SIMPLE_WORKFLOW_SERVICE_LIST_CLOSED_WORKFLOW_EXECUTIONS
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListClosedWorkflowExecutionsErrorBody
```

**Async**

```python
result = await async_client.amazon_simple_workflow_service.with_raw_response.list_closed_workflow_executions(
    XAmzTarget32.SIMPLE_WORKFLOW_SERVICE_LIST_CLOSED_WORKFLOW_EXECUTIONS
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListClosedWorkflowExecutionsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget32OrStr](amazon_swf/models/enums/x_amz_target32.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_swf/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](amazon_swf/core/results.py)&#91;None, [ListClosedWorkflowExecutionsErrorBody](amazon_swf/errors/list_closed_workflow_executions_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[ListClosedWorkflowExecutionsErrorBody](amazon_swf/errors/list_closed_workflow_executions_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[RawError](amazon_swf/core/results.py)</code> |
| anything unmapped | <code>[RawError](amazon_swf/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_domains(x_amz_target: XAmzTarget27OrStr, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, ListDomainsErrorBody]</code></summary>

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

**Sync**

```python
result = client.amazon_simple_workflow_service.with_raw_response.list_domains(
    XAmzTarget27.SIMPLE_WORKFLOW_SERVICE_LIST_DOMAINS
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListDomainsErrorBody
```

**Async**

```python
result = await async_client.amazon_simple_workflow_service.with_raw_response.list_domains(
    XAmzTarget27.SIMPLE_WORKFLOW_SERVICE_LIST_DOMAINS
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListDomainsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget27OrStr](amazon_swf/models/enums/x_amz_target27.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_swf/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](amazon_swf/core/results.py)&#91;None, [ListDomainsErrorBody](amazon_swf/errors/list_domains_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[ListDomainsErrorBody](amazon_swf/errors/list_domains_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[RawError](amazon_swf/core/results.py)</code> |
| anything unmapped | <code>[RawError](amazon_swf/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_open_workflow_executions(x_amz_target: XAmzTarget33OrStr, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, ListOpenWorkflowExecutionsErrorBody]</code></summary>

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

**Sync**

```python
result = client.amazon_simple_workflow_service.with_raw_response.list_open_workflow_executions(
    XAmzTarget33.SIMPLE_WORKFLOW_SERVICE_LIST_OPEN_WORKFLOW_EXECUTIONS
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListOpenWorkflowExecutionsErrorBody
```

**Async**

```python
result = await async_client.amazon_simple_workflow_service.with_raw_response.list_open_workflow_executions(
    XAmzTarget33.SIMPLE_WORKFLOW_SERVICE_LIST_OPEN_WORKFLOW_EXECUTIONS
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListOpenWorkflowExecutionsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget33OrStr](amazon_swf/models/enums/x_amz_target33.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_swf/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](amazon_swf/core/results.py)&#91;None, [ListOpenWorkflowExecutionsErrorBody](amazon_swf/errors/list_open_workflow_executions_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[ListOpenWorkflowExecutionsErrorBody](amazon_swf/errors/list_open_workflow_executions_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[RawError](amazon_swf/core/results.py)</code> |
| anything unmapped | <code>[RawError](amazon_swf/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_tags_for_resource(x_amz_target: XAmzTarget34OrStr, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, ListTagsForResourceErrorBody]</code></summary>

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

**Sync**

```python
result = client.amazon_simple_workflow_service.with_raw_response.list_tags_for_resource(
    XAmzTarget34.SIMPLE_WORKFLOW_SERVICE_LIST_TAGS_FOR_RESOURCE
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListTagsForResourceErrorBody
```

**Async**

```python
result = await async_client.amazon_simple_workflow_service.with_raw_response.list_tags_for_resource(
    XAmzTarget34.SIMPLE_WORKFLOW_SERVICE_LIST_TAGS_FOR_RESOURCE
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListTagsForResourceErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget34OrStr](amazon_swf/models/enums/x_amz_target34.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_swf/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](amazon_swf/core/results.py)&#91;None, [ListTagsForResourceErrorBody](amazon_swf/errors/list_tags_for_resource_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[ListTagsForResourceErrorBody](amazon_swf/errors/list_tags_for_resource_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[RawError](amazon_swf/core/results.py)</code> |
| anything unmapped | <code>[RawError](amazon_swf/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_workflow_types(x_amz_target: XAmzTarget24OrStr, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, ListWorkflowTypesErrorBody]</code></summary>

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

**Sync**

```python
result = client.amazon_simple_workflow_service.with_raw_response.list_workflow_types(
    XAmzTarget24.SIMPLE_WORKFLOW_SERVICE_LIST_WORKFLOW_TYPES
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListWorkflowTypesErrorBody
```

**Async**

```python
result = await async_client.amazon_simple_workflow_service.with_raw_response.list_workflow_types(
    XAmzTarget24.SIMPLE_WORKFLOW_SERVICE_LIST_WORKFLOW_TYPES
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListWorkflowTypesErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget24OrStr](amazon_swf/models/enums/x_amz_target24.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_swf/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](amazon_swf/core/results.py)&#91;None, [ListWorkflowTypesErrorBody](amazon_swf/errors/list_workflow_types_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[ListWorkflowTypesErrorBody](amazon_swf/errors/list_workflow_types_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[RawError](amazon_swf/core/results.py)</code> |
| anything unmapped | <code>[RawError](amazon_swf/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def poll_for_activity_task(x_amz_target: XAmzTarget7OrStr, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, PollForActivityTaskErrorBody]</code></summary>

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

**Sync**

```python
result = client.amazon_simple_workflow_service.with_raw_response.poll_for_activity_task(
    XAmzTarget7.SIMPLE_WORKFLOW_SERVICE_POLL_FOR_ACTIVITY_TASK
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type PollForActivityTaskErrorBody
```

**Async**

```python
result = await async_client.amazon_simple_workflow_service.with_raw_response.poll_for_activity_task(
    XAmzTarget7.SIMPLE_WORKFLOW_SERVICE_POLL_FOR_ACTIVITY_TASK
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type PollForActivityTaskErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget7OrStr](amazon_swf/models/enums/x_amz_target7.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_swf/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](amazon_swf/core/results.py)&#91;None, [PollForActivityTaskErrorBody](amazon_swf/errors/poll_for_activity_task_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[PollForActivityTaskErrorBody](amazon_swf/errors/poll_for_activity_task_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[RawError](amazon_swf/core/results.py)</code> |
| anything unmapped | <code>[RawError](amazon_swf/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def poll_for_decision_task(x_amz_target: XAmzTarget8OrStr, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, PollForDecisionTaskErrorBody]</code></summary>

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

**Sync**

```python
result = client.amazon_simple_workflow_service.with_raw_response.poll_for_decision_task(
    XAmzTarget8.SIMPLE_WORKFLOW_SERVICE_POLL_FOR_DECISION_TASK
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type PollForDecisionTaskErrorBody
```

**Async**

```python
result = await async_client.amazon_simple_workflow_service.with_raw_response.poll_for_decision_task(
    XAmzTarget8.SIMPLE_WORKFLOW_SERVICE_POLL_FOR_DECISION_TASK
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type PollForDecisionTaskErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget8OrStr](amazon_swf/models/enums/x_amz_target8.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_swf/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](amazon_swf/core/results.py)&#91;None, [PollForDecisionTaskErrorBody](amazon_swf/errors/poll_for_decision_task_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[PollForDecisionTaskErrorBody](amazon_swf/errors/poll_for_decision_task_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[RawError](amazon_swf/core/results.py)</code> |
| anything unmapped | <code>[RawError](amazon_swf/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def record_activity_task_heartbeat(x_amz_target: XAmzTarget9OrStr, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, RecordActivityTaskHeartbeatErrorBody]</code></summary>

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

**Sync**

```python
result = client.amazon_simple_workflow_service.with_raw_response.record_activity_task_heartbeat(
    XAmzTarget9.SIMPLE_WORKFLOW_SERVICE_RECORD_ACTIVITY_TASK_HEARTBEAT
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RecordActivityTaskHeartbeatErrorBody
```

**Async**

```python
result = await async_client.amazon_simple_workflow_service.with_raw_response.record_activity_task_heartbeat(
    XAmzTarget9.SIMPLE_WORKFLOW_SERVICE_RECORD_ACTIVITY_TASK_HEARTBEAT
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RecordActivityTaskHeartbeatErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget9OrStr](amazon_swf/models/enums/x_amz_target9.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_swf/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](amazon_swf/core/results.py)&#91;None, [RecordActivityTaskHeartbeatErrorBody](amazon_swf/errors/record_activity_task_heartbeat_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[RecordActivityTaskHeartbeatErrorBody](amazon_swf/errors/record_activity_task_heartbeat_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[RawError](amazon_swf/core/results.py)</code> |
| anything unmapped | <code>[RawError](amazon_swf/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def register_activity_type(x_amz_target: XAmzTarget22OrStr, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, RegisterActivityTypeErrorBody]</code></summary>

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

**Sync**

```python
result = client.amazon_simple_workflow_service.with_raw_response.register_activity_type(
    XAmzTarget22.SIMPLE_WORKFLOW_SERVICE_REGISTER_ACTIVITY_TYPE
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RegisterActivityTypeErrorBody
```

**Async**

```python
result = await async_client.amazon_simple_workflow_service.with_raw_response.register_activity_type(
    XAmzTarget22.SIMPLE_WORKFLOW_SERVICE_REGISTER_ACTIVITY_TYPE
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RegisterActivityTypeErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget22OrStr](amazon_swf/models/enums/x_amz_target22.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_swf/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](amazon_swf/core/results.py)&#91;None, [RegisterActivityTypeErrorBody](amazon_swf/errors/register_activity_type_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[RegisterActivityTypeErrorBody](amazon_swf/errors/register_activity_type_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[RawError](amazon_swf/core/results.py)</code> |
| anything unmapped | <code>[RawError](amazon_swf/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def register_domain(x_amz_target: XAmzTarget28OrStr, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, RegisterDomainErrorBody]</code></summary>

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

**Sync**

```python
result = client.amazon_simple_workflow_service.with_raw_response.register_domain(
    XAmzTarget28.SIMPLE_WORKFLOW_SERVICE_REGISTER_DOMAIN
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RegisterDomainErrorBody
```

**Async**

```python
result = await async_client.amazon_simple_workflow_service.with_raw_response.register_domain(
    XAmzTarget28.SIMPLE_WORKFLOW_SERVICE_REGISTER_DOMAIN
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RegisterDomainErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget28OrStr](amazon_swf/models/enums/x_amz_target28.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_swf/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](amazon_swf/core/results.py)&#91;None, [RegisterDomainErrorBody](amazon_swf/errors/register_domain_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[RegisterDomainErrorBody](amazon_swf/errors/register_domain_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[RawError](amazon_swf/core/results.py)</code> |
| anything unmapped | <code>[RawError](amazon_swf/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def register_workflow_type(x_amz_target: XAmzTarget25OrStr, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, RegisterWorkflowTypeErrorBody]</code></summary>

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

**Sync**

```python
result = client.amazon_simple_workflow_service.with_raw_response.register_workflow_type(
    XAmzTarget25.SIMPLE_WORKFLOW_SERVICE_REGISTER_WORKFLOW_TYPE
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RegisterWorkflowTypeErrorBody
```

**Async**

```python
result = await async_client.amazon_simple_workflow_service.with_raw_response.register_workflow_type(
    XAmzTarget25.SIMPLE_WORKFLOW_SERVICE_REGISTER_WORKFLOW_TYPE
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RegisterWorkflowTypeErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget25OrStr](amazon_swf/models/enums/x_amz_target25.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_swf/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](amazon_swf/core/results.py)&#91;None, [RegisterWorkflowTypeErrorBody](amazon_swf/errors/register_workflow_type_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[RegisterWorkflowTypeErrorBody](amazon_swf/errors/register_workflow_type_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[RawError](amazon_swf/core/results.py)</code> |
| anything unmapped | <code>[RawError](amazon_swf/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def request_cancel_workflow_execution(x_amz_target: XAmzTarget10OrStr, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, RequestCancelWorkflowExecutionErrorBody]</code></summary>

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

**Sync**

```python
result = client.amazon_simple_workflow_service.with_raw_response.request_cancel_workflow_execution(
    XAmzTarget10.SIMPLE_WORKFLOW_SERVICE_REQUEST_CANCEL_WORKFLOW_EXECUTION
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RequestCancelWorkflowExecutionErrorBody
```

**Async**

```python
result = await async_client.amazon_simple_workflow_service.with_raw_response.request_cancel_workflow_execution(
    XAmzTarget10.SIMPLE_WORKFLOW_SERVICE_REQUEST_CANCEL_WORKFLOW_EXECUTION
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RequestCancelWorkflowExecutionErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget10OrStr](amazon_swf/models/enums/x_amz_target10.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_swf/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](amazon_swf/core/results.py)&#91;None, [RequestCancelWorkflowExecutionErrorBody](amazon_swf/errors/request_cancel_workflow_execution_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[RequestCancelWorkflowExecutionErrorBody](amazon_swf/errors/request_cancel_workflow_execution_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[RawError](amazon_swf/core/results.py)</code> |
| anything unmapped | <code>[RawError](amazon_swf/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def respond_activity_task_canceled(x_amz_target: XAmzTarget11OrStr, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, RespondActivityTaskCanceledErrorBody]</code></summary>

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

**Sync**

```python
result = client.amazon_simple_workflow_service.with_raw_response.respond_activity_task_canceled(
    XAmzTarget11.SIMPLE_WORKFLOW_SERVICE_RESPOND_ACTIVITY_TASK_CANCELED
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RespondActivityTaskCanceledErrorBody
```

**Async**

```python
result = await async_client.amazon_simple_workflow_service.with_raw_response.respond_activity_task_canceled(
    XAmzTarget11.SIMPLE_WORKFLOW_SERVICE_RESPOND_ACTIVITY_TASK_CANCELED
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RespondActivityTaskCanceledErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget11OrStr](amazon_swf/models/enums/x_amz_target11.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_swf/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](amazon_swf/core/results.py)&#91;None, [RespondActivityTaskCanceledErrorBody](amazon_swf/errors/respond_activity_task_canceled_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[RespondActivityTaskCanceledErrorBody](amazon_swf/errors/respond_activity_task_canceled_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[RawError](amazon_swf/core/results.py)</code> |
| anything unmapped | <code>[RawError](amazon_swf/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def respond_activity_task_completed(x_amz_target: XAmzTarget12OrStr, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, RespondActivityTaskCompletedErrorBody]</code></summary>

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

**Sync**

```python
result = client.amazon_simple_workflow_service.with_raw_response.respond_activity_task_completed(
    XAmzTarget12.SIMPLE_WORKFLOW_SERVICE_RESPOND_ACTIVITY_TASK_COMPLETED
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RespondActivityTaskCompletedErrorBody
```

**Async**

```python
result = await async_client.amazon_simple_workflow_service.with_raw_response.respond_activity_task_completed(
    XAmzTarget12.SIMPLE_WORKFLOW_SERVICE_RESPOND_ACTIVITY_TASK_COMPLETED
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RespondActivityTaskCompletedErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget12OrStr](amazon_swf/models/enums/x_amz_target12.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_swf/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](amazon_swf/core/results.py)&#91;None, [RespondActivityTaskCompletedErrorBody](amazon_swf/errors/respond_activity_task_completed_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[RespondActivityTaskCompletedErrorBody](amazon_swf/errors/respond_activity_task_completed_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[RawError](amazon_swf/core/results.py)</code> |
| anything unmapped | <code>[RawError](amazon_swf/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def respond_activity_task_failed(x_amz_target: XAmzTarget13OrStr, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, RespondActivityTaskFailedErrorBody]</code></summary>

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

**Sync**

```python
result = client.amazon_simple_workflow_service.with_raw_response.respond_activity_task_failed(
    XAmzTarget13.SIMPLE_WORKFLOW_SERVICE_RESPOND_ACTIVITY_TASK_FAILED
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RespondActivityTaskFailedErrorBody
```

**Async**

```python
result = await async_client.amazon_simple_workflow_service.with_raw_response.respond_activity_task_failed(
    XAmzTarget13.SIMPLE_WORKFLOW_SERVICE_RESPOND_ACTIVITY_TASK_FAILED
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RespondActivityTaskFailedErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget13OrStr](amazon_swf/models/enums/x_amz_target13.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_swf/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](amazon_swf/core/results.py)&#91;None, [RespondActivityTaskFailedErrorBody](amazon_swf/errors/respond_activity_task_failed_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[RespondActivityTaskFailedErrorBody](amazon_swf/errors/respond_activity_task_failed_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[RawError](amazon_swf/core/results.py)</code> |
| anything unmapped | <code>[RawError](amazon_swf/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def respond_decision_task_completed(x_amz_target: XAmzTarget14OrStr, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, RespondDecisionTaskCompletedErrorBody]</code></summary>

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

**Sync**

```python
result = client.amazon_simple_workflow_service.with_raw_response.respond_decision_task_completed(
    XAmzTarget14.SIMPLE_WORKFLOW_SERVICE_RESPOND_DECISION_TASK_COMPLETED
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RespondDecisionTaskCompletedErrorBody
```

**Async**

```python
result = await async_client.amazon_simple_workflow_service.with_raw_response.respond_decision_task_completed(
    XAmzTarget14.SIMPLE_WORKFLOW_SERVICE_RESPOND_DECISION_TASK_COMPLETED
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RespondDecisionTaskCompletedErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget14OrStr](amazon_swf/models/enums/x_amz_target14.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_swf/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](amazon_swf/core/results.py)&#91;None, [RespondDecisionTaskCompletedErrorBody](amazon_swf/errors/respond_decision_task_completed_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[RespondDecisionTaskCompletedErrorBody](amazon_swf/errors/respond_decision_task_completed_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[RawError](amazon_swf/core/results.py)</code> |
| anything unmapped | <code>[RawError](amazon_swf/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def signal_workflow_execution(x_amz_target: XAmzTarget15OrStr, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, SignalWorkflowExecutionErrorBody]</code></summary>

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

**Sync**

```python
result = client.amazon_simple_workflow_service.with_raw_response.signal_workflow_execution(
    XAmzTarget15.SIMPLE_WORKFLOW_SERVICE_SIGNAL_WORKFLOW_EXECUTION
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type SignalWorkflowExecutionErrorBody
```

**Async**

```python
result = await async_client.amazon_simple_workflow_service.with_raw_response.signal_workflow_execution(
    XAmzTarget15.SIMPLE_WORKFLOW_SERVICE_SIGNAL_WORKFLOW_EXECUTION
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type SignalWorkflowExecutionErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget15OrStr](amazon_swf/models/enums/x_amz_target15.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_swf/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](amazon_swf/core/results.py)&#91;None, [SignalWorkflowExecutionErrorBody](amazon_swf/errors/signal_workflow_execution_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[SignalWorkflowExecutionErrorBody](amazon_swf/errors/signal_workflow_execution_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[RawError](amazon_swf/core/results.py)</code> |
| anything unmapped | <code>[RawError](amazon_swf/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def start_workflow_execution(x_amz_target: XAmzTarget30OrStr, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, StartWorkflowExecutionErrorBody]</code></summary>

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

**Sync**

```python
result = client.amazon_simple_workflow_service.with_raw_response.start_workflow_execution(
    XAmzTarget30.SIMPLE_WORKFLOW_SERVICE_START_WORKFLOW_EXECUTION
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type StartWorkflowExecutionErrorBody
```

**Async**

```python
result = await async_client.amazon_simple_workflow_service.with_raw_response.start_workflow_execution(
    XAmzTarget30.SIMPLE_WORKFLOW_SERVICE_START_WORKFLOW_EXECUTION
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type StartWorkflowExecutionErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget30OrStr](amazon_swf/models/enums/x_amz_target30.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_swf/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](amazon_swf/core/results.py)&#91;None, [StartWorkflowExecutionErrorBody](amazon_swf/errors/start_workflow_execution_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[StartWorkflowExecutionErrorBody](amazon_swf/errors/start_workflow_execution_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[RawError](amazon_swf/core/results.py)</code> |
| anything unmapped | <code>[RawError](amazon_swf/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def tag_resource(x_amz_target: XAmzTarget35OrStr, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, TagResourceErrorBody]</code></summary>

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

**Sync**

```python
result = client.amazon_simple_workflow_service.with_raw_response.tag_resource(
    XAmzTarget35.SIMPLE_WORKFLOW_SERVICE_TAG_RESOURCE
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type TagResourceErrorBody
```

**Async**

```python
result = await async_client.amazon_simple_workflow_service.with_raw_response.tag_resource(
    XAmzTarget35.SIMPLE_WORKFLOW_SERVICE_TAG_RESOURCE
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type TagResourceErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget35OrStr](amazon_swf/models/enums/x_amz_target35.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_swf/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](amazon_swf/core/results.py)&#91;None, [TagResourceErrorBody](amazon_swf/errors/tag_resource_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[TagResourceErrorBody](amazon_swf/errors/tag_resource_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[RawError](amazon_swf/core/results.py)</code> |
| anything unmapped | <code>[RawError](amazon_swf/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def terminate_workflow_execution(x_amz_target: XAmzTarget16OrStr, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, TerminateWorkflowExecutionErrorBody]</code></summary>

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

**Sync**

```python
result = client.amazon_simple_workflow_service.with_raw_response.terminate_workflow_execution(
    XAmzTarget16.SIMPLE_WORKFLOW_SERVICE_TERMINATE_WORKFLOW_EXECUTION
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type TerminateWorkflowExecutionErrorBody
```

**Async**

```python
result = await async_client.amazon_simple_workflow_service.with_raw_response.terminate_workflow_execution(
    XAmzTarget16.SIMPLE_WORKFLOW_SERVICE_TERMINATE_WORKFLOW_EXECUTION
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type TerminateWorkflowExecutionErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget16OrStr](amazon_swf/models/enums/x_amz_target16.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_swf/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](amazon_swf/core/results.py)&#91;None, [TerminateWorkflowExecutionErrorBody](amazon_swf/errors/terminate_workflow_execution_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[TerminateWorkflowExecutionErrorBody](amazon_swf/errors/terminate_workflow_execution_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[RawError](amazon_swf/core/results.py)</code> |
| anything unmapped | <code>[RawError](amazon_swf/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def undeprecate_activity_type(x_amz_target: XAmzTarget17OrStr, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, UndeprecateActivityTypeErrorBody]</code></summary>

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

**Sync**

```python
result = client.amazon_simple_workflow_service.with_raw_response.undeprecate_activity_type(
    XAmzTarget17.SIMPLE_WORKFLOW_SERVICE_UNDEPRECATE_ACTIVITY_TYPE
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UndeprecateActivityTypeErrorBody
```

**Async**

```python
result = await async_client.amazon_simple_workflow_service.with_raw_response.undeprecate_activity_type(
    XAmzTarget17.SIMPLE_WORKFLOW_SERVICE_UNDEPRECATE_ACTIVITY_TYPE
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UndeprecateActivityTypeErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget17OrStr](amazon_swf/models/enums/x_amz_target17.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_swf/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](amazon_swf/core/results.py)&#91;None, [UndeprecateActivityTypeErrorBody](amazon_swf/errors/undeprecate_activity_type_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[UndeprecateActivityTypeErrorBody](amazon_swf/errors/undeprecate_activity_type_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[RawError](amazon_swf/core/results.py)</code> |
| anything unmapped | <code>[RawError](amazon_swf/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def undeprecate_domain(x_amz_target: XAmzTarget18OrStr, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, UndeprecateDomainErrorBody]</code></summary>

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

**Sync**

```python
result = client.amazon_simple_workflow_service.with_raw_response.undeprecate_domain(
    XAmzTarget18.SIMPLE_WORKFLOW_SERVICE_UNDEPRECATE_DOMAIN
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UndeprecateDomainErrorBody
```

**Async**

```python
result = await async_client.amazon_simple_workflow_service.with_raw_response.undeprecate_domain(
    XAmzTarget18.SIMPLE_WORKFLOW_SERVICE_UNDEPRECATE_DOMAIN
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UndeprecateDomainErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget18OrStr](amazon_swf/models/enums/x_amz_target18.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_swf/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](amazon_swf/core/results.py)&#91;None, [UndeprecateDomainErrorBody](amazon_swf/errors/undeprecate_domain_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[UndeprecateDomainErrorBody](amazon_swf/errors/undeprecate_domain_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[RawError](amazon_swf/core/results.py)</code> |
| anything unmapped | <code>[RawError](amazon_swf/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def undeprecate_workflow_type(x_amz_target: XAmzTarget19OrStr, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, UndeprecateWorkflowTypeErrorBody]</code></summary>

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

**Sync**

```python
result = client.amazon_simple_workflow_service.with_raw_response.undeprecate_workflow_type(
    XAmzTarget19.SIMPLE_WORKFLOW_SERVICE_UNDEPRECATE_WORKFLOW_TYPE
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UndeprecateWorkflowTypeErrorBody
```

**Async**

```python
result = await async_client.amazon_simple_workflow_service.with_raw_response.undeprecate_workflow_type(
    XAmzTarget19.SIMPLE_WORKFLOW_SERVICE_UNDEPRECATE_WORKFLOW_TYPE
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UndeprecateWorkflowTypeErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget19OrStr](amazon_swf/models/enums/x_amz_target19.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_swf/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](amazon_swf/core/results.py)&#91;None, [UndeprecateWorkflowTypeErrorBody](amazon_swf/errors/undeprecate_workflow_type_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[UndeprecateWorkflowTypeErrorBody](amazon_swf/errors/undeprecate_workflow_type_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[RawError](amazon_swf/core/results.py)</code> |
| anything unmapped | <code>[RawError](amazon_swf/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def untag_resource(x_amz_target: XAmzTarget36OrStr, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, UntagResourceErrorBody]</code></summary>

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

**Sync**

```python
result = client.amazon_simple_workflow_service.with_raw_response.untag_resource(
    XAmzTarget36.SIMPLE_WORKFLOW_SERVICE_UNTAG_RESOURCE
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UntagResourceErrorBody
```

**Async**

```python
result = await async_client.amazon_simple_workflow_service.with_raw_response.untag_resource(
    XAmzTarget36.SIMPLE_WORKFLOW_SERVICE_UNTAG_RESOURCE
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UntagResourceErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget36OrStr](amazon_swf/models/enums/x_amz_target36.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_swf/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](amazon_swf/core/results.py)&#91;None, [UntagResourceErrorBody](amazon_swf/errors/untag_resource_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[UntagResourceErrorBody](amazon_swf/errors/untag_resource_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[RawError](amazon_swf/core/results.py)</code> |
| anything unmapped | <code>[RawError](amazon_swf/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Operations

> Source: [Operations](amazon_swf/apis/operations.py)

<details>
<summary><code>def count_closed_workflow_executions2(x_amz_target: XAmzTargetOrStr, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, CountClosedWorkflowExecutions2ErrorBody]</code></summary>

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

**Sync**

```python
result = client.operations.with_raw_response.count_closed_workflow_executions2(
    XAmzTarget.SIMPLE_WORKFLOW_SERVICE_COUNT_CLOSED_WORKFLOW_EXECUTIONS
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CountClosedWorkflowExecutions2ErrorBody
```

**Async**

```python
result = await async_client.operations.with_raw_response.count_closed_workflow_executions2(
    XAmzTarget.SIMPLE_WORKFLOW_SERVICE_COUNT_CLOSED_WORKFLOW_EXECUTIONS
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CountClosedWorkflowExecutions2ErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTargetOrStr](amazon_swf/models/enums/x_amz_target.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_swf/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](amazon_swf/core/results.py)&#91;None, [CountClosedWorkflowExecutions2ErrorBody](amazon_swf/errors/count_closed_workflow_executions2_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[CountClosedWorkflowExecutions2ErrorBody](amazon_swf/errors/count_closed_workflow_executions2_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[RawError](amazon_swf/core/results.py)</code> |
| anything unmapped | <code>[RawError](amazon_swf/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def count_open_workflow_executions2(x_amz_target: XAmzTarget1OrStr, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, CountOpenWorkflowExecutions2ErrorBody]</code></summary>

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

**Sync**

```python
result = client.operations.with_raw_response.count_open_workflow_executions2(
    XAmzTarget1.SIMPLE_WORKFLOW_SERVICE_COUNT_OPEN_WORKFLOW_EXECUTIONS
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CountOpenWorkflowExecutions2ErrorBody
```

**Async**

```python
result = await async_client.operations.with_raw_response.count_open_workflow_executions2(
    XAmzTarget1.SIMPLE_WORKFLOW_SERVICE_COUNT_OPEN_WORKFLOW_EXECUTIONS
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CountOpenWorkflowExecutions2ErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget1OrStr](amazon_swf/models/enums/x_amz_target1.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_swf/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](amazon_swf/core/results.py)&#91;None, [CountOpenWorkflowExecutions2ErrorBody](amazon_swf/errors/count_open_workflow_executions2_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[CountOpenWorkflowExecutions2ErrorBody](amazon_swf/errors/count_open_workflow_executions2_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[RawError](amazon_swf/core/results.py)</code> |
| anything unmapped | <code>[RawError](amazon_swf/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def count_pending_activity_tasks2(x_amz_target: XAmzTarget2OrStr, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, CountPendingActivityTasks2ErrorBody]</code></summary>

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

**Sync**

```python
result = client.operations.with_raw_response.count_pending_activity_tasks2(
    XAmzTarget2.SIMPLE_WORKFLOW_SERVICE_COUNT_PENDING_ACTIVITY_TASKS
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CountPendingActivityTasks2ErrorBody
```

**Async**

```python
result = await async_client.operations.with_raw_response.count_pending_activity_tasks2(
    XAmzTarget2.SIMPLE_WORKFLOW_SERVICE_COUNT_PENDING_ACTIVITY_TASKS
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CountPendingActivityTasks2ErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget2OrStr](amazon_swf/models/enums/x_amz_target2.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_swf/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](amazon_swf/core/results.py)&#91;None, [CountPendingActivityTasks2ErrorBody](amazon_swf/errors/count_pending_activity_tasks2_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[CountPendingActivityTasks2ErrorBody](amazon_swf/errors/count_pending_activity_tasks2_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[RawError](amazon_swf/core/results.py)</code> |
| anything unmapped | <code>[RawError](amazon_swf/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def count_pending_decision_tasks2(x_amz_target: XAmzTarget3OrStr, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, CountPendingDecisionTasks2ErrorBody]</code></summary>

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

**Sync**

```python
result = client.operations.with_raw_response.count_pending_decision_tasks2(
    XAmzTarget3.SIMPLE_WORKFLOW_SERVICE_COUNT_PENDING_DECISION_TASKS
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CountPendingDecisionTasks2ErrorBody
```

**Async**

```python
result = await async_client.operations.with_raw_response.count_pending_decision_tasks2(
    XAmzTarget3.SIMPLE_WORKFLOW_SERVICE_COUNT_PENDING_DECISION_TASKS
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CountPendingDecisionTasks2ErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget3OrStr](amazon_swf/models/enums/x_amz_target3.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_swf/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](amazon_swf/core/results.py)&#91;None, [CountPendingDecisionTasks2ErrorBody](amazon_swf/errors/count_pending_decision_tasks2_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[CountPendingDecisionTasks2ErrorBody](amazon_swf/errors/count_pending_decision_tasks2_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[RawError](amazon_swf/core/results.py)</code> |
| anything unmapped | <code>[RawError](amazon_swf/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def delete_activity_type(x_amz_target: XAmzTarget20AmazonSimpleWorkflowServiceOperationsApiOrStr, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, DeleteActivityTypeErrorBody]</code></summary>

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

**Sync**

```python
result = client.operations.with_raw_response.delete_activity_type(
    XAmzTarget20AmazonSimpleWorkflowServiceOperationsApi.SIMPLE_WORKFLOW_SERVICE_DELETE_ACTIVITY_TYPE
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteActivityTypeErrorBody
```

**Async**

```python
result = await async_client.operations.with_raw_response.delete_activity_type(
    XAmzTarget20AmazonSimpleWorkflowServiceOperationsApi.SIMPLE_WORKFLOW_SERVICE_DELETE_ACTIVITY_TYPE
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteActivityTypeErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget20AmazonSimpleWorkflowServiceOperationsApiOrStr](amazon_swf/models/enums/x_amz_target20_amazon_simple_workflow_service_operations_api.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_swf/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](amazon_swf/core/results.py)&#91;None, [DeleteActivityTypeErrorBody](amazon_swf/errors/delete_activity_type_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[DeleteActivityTypeErrorBody](amazon_swf/errors/delete_activity_type_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[RawError](amazon_swf/core/results.py)</code> |
| anything unmapped | <code>[RawError](amazon_swf/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def delete_workflow_type(x_amz_target: XAmzTarget21AmazonSimpleWorkflowServiceOperationsApiOrStr, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, DeleteWorkflowTypeErrorBody]</code></summary>

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

**Sync**

```python
result = client.operations.with_raw_response.delete_workflow_type(
    XAmzTarget21AmazonSimpleWorkflowServiceOperationsApi.SIMPLE_WORKFLOW_SERVICE_DELETE_WORKFLOW_TYPE
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteWorkflowTypeErrorBody
```

**Async**

```python
result = await async_client.operations.with_raw_response.delete_workflow_type(
    XAmzTarget21AmazonSimpleWorkflowServiceOperationsApi.SIMPLE_WORKFLOW_SERVICE_DELETE_WORKFLOW_TYPE
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteWorkflowTypeErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget21AmazonSimpleWorkflowServiceOperationsApiOrStr](amazon_swf/models/enums/x_amz_target21_amazon_simple_workflow_service_operations_api.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_swf/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](amazon_swf/core/results.py)&#91;None, [DeleteWorkflowTypeErrorBody](amazon_swf/errors/delete_workflow_type_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[DeleteWorkflowTypeErrorBody](amazon_swf/errors/delete_workflow_type_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[RawError](amazon_swf/core/results.py)</code> |
| anything unmapped | <code>[RawError](amazon_swf/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def deprecate_activity_type2(x_amz_target: XAmzTarget4OrStr, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, DeprecateActivityType2ErrorBody]</code></summary>

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

**Sync**

```python
result = client.operations.with_raw_response.deprecate_activity_type2(
    XAmzTarget4.SIMPLE_WORKFLOW_SERVICE_DEPRECATE_ACTIVITY_TYPE
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeprecateActivityType2ErrorBody
```

**Async**

```python
result = await async_client.operations.with_raw_response.deprecate_activity_type2(
    XAmzTarget4.SIMPLE_WORKFLOW_SERVICE_DEPRECATE_ACTIVITY_TYPE
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeprecateActivityType2ErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget4OrStr](amazon_swf/models/enums/x_amz_target4.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_swf/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](amazon_swf/core/results.py)&#91;None, [DeprecateActivityType2ErrorBody](amazon_swf/errors/deprecate_activity_type2_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[DeprecateActivityType2ErrorBody](amazon_swf/errors/deprecate_activity_type2_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[RawError](amazon_swf/core/results.py)</code> |
| anything unmapped | <code>[RawError](amazon_swf/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def deprecate_domain2(x_amz_target: XAmzTarget5OrStr, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, DeprecateDomain2ErrorBody]</code></summary>

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

**Sync**

```python
result = client.operations.with_raw_response.deprecate_domain2(XAmzTarget5.SIMPLE_WORKFLOW_SERVICE_DEPRECATE_DOMAIN)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeprecateDomain2ErrorBody
```

**Async**

```python
result = await async_client.operations.with_raw_response.deprecate_domain2(
    XAmzTarget5.SIMPLE_WORKFLOW_SERVICE_DEPRECATE_DOMAIN
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeprecateDomain2ErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget5OrStr](amazon_swf/models/enums/x_amz_target5.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_swf/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](amazon_swf/core/results.py)&#91;None, [DeprecateDomain2ErrorBody](amazon_swf/errors/deprecate_domain2_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[DeprecateDomain2ErrorBody](amazon_swf/errors/deprecate_domain2_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[RawError](amazon_swf/core/results.py)</code> |
| anything unmapped | <code>[RawError](amazon_swf/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def deprecate_workflow_type2(x_amz_target: XAmzTarget6OrStr, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, DeprecateWorkflowType2ErrorBody]</code></summary>

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

**Sync**

```python
result = client.operations.with_raw_response.deprecate_workflow_type2(
    XAmzTarget6.SIMPLE_WORKFLOW_SERVICE_DEPRECATE_WORKFLOW_TYPE
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeprecateWorkflowType2ErrorBody
```

**Async**

```python
result = await async_client.operations.with_raw_response.deprecate_workflow_type2(
    XAmzTarget6.SIMPLE_WORKFLOW_SERVICE_DEPRECATE_WORKFLOW_TYPE
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeprecateWorkflowType2ErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget6OrStr](amazon_swf/models/enums/x_amz_target6.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_swf/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](amazon_swf/core/results.py)&#91;None, [DeprecateWorkflowType2ErrorBody](amazon_swf/errors/deprecate_workflow_type2_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[DeprecateWorkflowType2ErrorBody](amazon_swf/errors/deprecate_workflow_type2_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[RawError](amazon_swf/core/results.py)</code> |
| anything unmapped | <code>[RawError](amazon_swf/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def poll_for_activity_task2(x_amz_target: XAmzTarget7OrStr, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, PollForActivityTask2ErrorBody]</code></summary>

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

**Sync**

```python
result = client.operations.with_raw_response.poll_for_activity_task2(
    XAmzTarget7.SIMPLE_WORKFLOW_SERVICE_POLL_FOR_ACTIVITY_TASK
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type PollForActivityTask2ErrorBody
```

**Async**

```python
result = await async_client.operations.with_raw_response.poll_for_activity_task2(
    XAmzTarget7.SIMPLE_WORKFLOW_SERVICE_POLL_FOR_ACTIVITY_TASK
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type PollForActivityTask2ErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget7OrStr](amazon_swf/models/enums/x_amz_target7.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_swf/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](amazon_swf/core/results.py)&#91;None, [PollForActivityTask2ErrorBody](amazon_swf/errors/poll_for_activity_task2_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[PollForActivityTask2ErrorBody](amazon_swf/errors/poll_for_activity_task2_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[RawError](amazon_swf/core/results.py)</code> |
| anything unmapped | <code>[RawError](amazon_swf/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def poll_for_decision_task2(x_amz_target: XAmzTarget8OrStr, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, PollForDecisionTask2ErrorBody]</code></summary>

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

**Sync**

```python
result = client.operations.with_raw_response.poll_for_decision_task2(
    XAmzTarget8.SIMPLE_WORKFLOW_SERVICE_POLL_FOR_DECISION_TASK
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type PollForDecisionTask2ErrorBody
```

**Async**

```python
result = await async_client.operations.with_raw_response.poll_for_decision_task2(
    XAmzTarget8.SIMPLE_WORKFLOW_SERVICE_POLL_FOR_DECISION_TASK
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type PollForDecisionTask2ErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget8OrStr](amazon_swf/models/enums/x_amz_target8.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_swf/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](amazon_swf/core/results.py)&#91;None, [PollForDecisionTask2ErrorBody](amazon_swf/errors/poll_for_decision_task2_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[PollForDecisionTask2ErrorBody](amazon_swf/errors/poll_for_decision_task2_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[RawError](amazon_swf/core/results.py)</code> |
| anything unmapped | <code>[RawError](amazon_swf/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def record_activity_task_heartbeat2(x_amz_target: XAmzTarget9OrStr, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, RecordActivityTaskHeartbeat2ErrorBody]</code></summary>

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

**Sync**

```python
result = client.operations.with_raw_response.record_activity_task_heartbeat2(
    XAmzTarget9.SIMPLE_WORKFLOW_SERVICE_RECORD_ACTIVITY_TASK_HEARTBEAT
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RecordActivityTaskHeartbeat2ErrorBody
```

**Async**

```python
result = await async_client.operations.with_raw_response.record_activity_task_heartbeat2(
    XAmzTarget9.SIMPLE_WORKFLOW_SERVICE_RECORD_ACTIVITY_TASK_HEARTBEAT
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RecordActivityTaskHeartbeat2ErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget9OrStr](amazon_swf/models/enums/x_amz_target9.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_swf/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](amazon_swf/core/results.py)&#91;None, [RecordActivityTaskHeartbeat2ErrorBody](amazon_swf/errors/record_activity_task_heartbeat2_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[RecordActivityTaskHeartbeat2ErrorBody](amazon_swf/errors/record_activity_task_heartbeat2_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[RawError](amazon_swf/core/results.py)</code> |
| anything unmapped | <code>[RawError](amazon_swf/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def request_cancel_workflow_execution2(x_amz_target: XAmzTarget10OrStr, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, RequestCancelWorkflowExecution2ErrorBody]</code></summary>

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

**Sync**

```python
result = client.operations.with_raw_response.request_cancel_workflow_execution2(
    XAmzTarget10.SIMPLE_WORKFLOW_SERVICE_REQUEST_CANCEL_WORKFLOW_EXECUTION
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RequestCancelWorkflowExecution2ErrorBody
```

**Async**

```python
result = await async_client.operations.with_raw_response.request_cancel_workflow_execution2(
    XAmzTarget10.SIMPLE_WORKFLOW_SERVICE_REQUEST_CANCEL_WORKFLOW_EXECUTION
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RequestCancelWorkflowExecution2ErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget10OrStr](amazon_swf/models/enums/x_amz_target10.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_swf/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](amazon_swf/core/results.py)&#91;None, [RequestCancelWorkflowExecution2ErrorBody](amazon_swf/errors/request_cancel_workflow_execution2_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[RequestCancelWorkflowExecution2ErrorBody](amazon_swf/errors/request_cancel_workflow_execution2_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[RawError](amazon_swf/core/results.py)</code> |
| anything unmapped | <code>[RawError](amazon_swf/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def respond_activity_task_canceled2(x_amz_target: XAmzTarget11OrStr, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, RespondActivityTaskCanceled2ErrorBody]</code></summary>

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

**Sync**

```python
result = client.operations.with_raw_response.respond_activity_task_canceled2(
    XAmzTarget11.SIMPLE_WORKFLOW_SERVICE_RESPOND_ACTIVITY_TASK_CANCELED
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RespondActivityTaskCanceled2ErrorBody
```

**Async**

```python
result = await async_client.operations.with_raw_response.respond_activity_task_canceled2(
    XAmzTarget11.SIMPLE_WORKFLOW_SERVICE_RESPOND_ACTIVITY_TASK_CANCELED
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RespondActivityTaskCanceled2ErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget11OrStr](amazon_swf/models/enums/x_amz_target11.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_swf/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](amazon_swf/core/results.py)&#91;None, [RespondActivityTaskCanceled2ErrorBody](amazon_swf/errors/respond_activity_task_canceled2_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[RespondActivityTaskCanceled2ErrorBody](amazon_swf/errors/respond_activity_task_canceled2_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[RawError](amazon_swf/core/results.py)</code> |
| anything unmapped | <code>[RawError](amazon_swf/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def respond_activity_task_completed2(x_amz_target: XAmzTarget12OrStr, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, RespondActivityTaskCompleted2ErrorBody]</code></summary>

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

**Sync**

```python
result = client.operations.with_raw_response.respond_activity_task_completed2(
    XAmzTarget12.SIMPLE_WORKFLOW_SERVICE_RESPOND_ACTIVITY_TASK_COMPLETED
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RespondActivityTaskCompleted2ErrorBody
```

**Async**

```python
result = await async_client.operations.with_raw_response.respond_activity_task_completed2(
    XAmzTarget12.SIMPLE_WORKFLOW_SERVICE_RESPOND_ACTIVITY_TASK_COMPLETED
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RespondActivityTaskCompleted2ErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget12OrStr](amazon_swf/models/enums/x_amz_target12.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_swf/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](amazon_swf/core/results.py)&#91;None, [RespondActivityTaskCompleted2ErrorBody](amazon_swf/errors/respond_activity_task_completed2_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[RespondActivityTaskCompleted2ErrorBody](amazon_swf/errors/respond_activity_task_completed2_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[RawError](amazon_swf/core/results.py)</code> |
| anything unmapped | <code>[RawError](amazon_swf/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def respond_activity_task_failed2(x_amz_target: XAmzTarget13OrStr, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, RespondActivityTaskFailed2ErrorBody]</code></summary>

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

**Sync**

```python
result = client.operations.with_raw_response.respond_activity_task_failed2(
    XAmzTarget13.SIMPLE_WORKFLOW_SERVICE_RESPOND_ACTIVITY_TASK_FAILED
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RespondActivityTaskFailed2ErrorBody
```

**Async**

```python
result = await async_client.operations.with_raw_response.respond_activity_task_failed2(
    XAmzTarget13.SIMPLE_WORKFLOW_SERVICE_RESPOND_ACTIVITY_TASK_FAILED
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RespondActivityTaskFailed2ErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget13OrStr](amazon_swf/models/enums/x_amz_target13.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_swf/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](amazon_swf/core/results.py)&#91;None, [RespondActivityTaskFailed2ErrorBody](amazon_swf/errors/respond_activity_task_failed2_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[RespondActivityTaskFailed2ErrorBody](amazon_swf/errors/respond_activity_task_failed2_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[RawError](amazon_swf/core/results.py)</code> |
| anything unmapped | <code>[RawError](amazon_swf/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def respond_decision_task_completed2(x_amz_target: XAmzTarget14OrStr, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, RespondDecisionTaskCompleted2ErrorBody]</code></summary>

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

**Sync**

```python
result = client.operations.with_raw_response.respond_decision_task_completed2(
    XAmzTarget14.SIMPLE_WORKFLOW_SERVICE_RESPOND_DECISION_TASK_COMPLETED
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RespondDecisionTaskCompleted2ErrorBody
```

**Async**

```python
result = await async_client.operations.with_raw_response.respond_decision_task_completed2(
    XAmzTarget14.SIMPLE_WORKFLOW_SERVICE_RESPOND_DECISION_TASK_COMPLETED
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RespondDecisionTaskCompleted2ErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget14OrStr](amazon_swf/models/enums/x_amz_target14.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_swf/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](amazon_swf/core/results.py)&#91;None, [RespondDecisionTaskCompleted2ErrorBody](amazon_swf/errors/respond_decision_task_completed2_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[RespondDecisionTaskCompleted2ErrorBody](amazon_swf/errors/respond_decision_task_completed2_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[RawError](amazon_swf/core/results.py)</code> |
| anything unmapped | <code>[RawError](amazon_swf/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def signal_workflow_execution2(x_amz_target: XAmzTarget15OrStr, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, SignalWorkflowExecution2ErrorBody]</code></summary>

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

**Sync**

```python
result = client.operations.with_raw_response.signal_workflow_execution2(
    XAmzTarget15.SIMPLE_WORKFLOW_SERVICE_SIGNAL_WORKFLOW_EXECUTION
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type SignalWorkflowExecution2ErrorBody
```

**Async**

```python
result = await async_client.operations.with_raw_response.signal_workflow_execution2(
    XAmzTarget15.SIMPLE_WORKFLOW_SERVICE_SIGNAL_WORKFLOW_EXECUTION
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type SignalWorkflowExecution2ErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget15OrStr](amazon_swf/models/enums/x_amz_target15.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_swf/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](amazon_swf/core/results.py)&#91;None, [SignalWorkflowExecution2ErrorBody](amazon_swf/errors/signal_workflow_execution2_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[SignalWorkflowExecution2ErrorBody](amazon_swf/errors/signal_workflow_execution2_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[RawError](amazon_swf/core/results.py)</code> |
| anything unmapped | <code>[RawError](amazon_swf/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def terminate_workflow_execution2(x_amz_target: XAmzTarget16OrStr, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, TerminateWorkflowExecution2ErrorBody]</code></summary>

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

**Sync**

```python
result = client.operations.with_raw_response.terminate_workflow_execution2(
    XAmzTarget16.SIMPLE_WORKFLOW_SERVICE_TERMINATE_WORKFLOW_EXECUTION
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type TerminateWorkflowExecution2ErrorBody
```

**Async**

```python
result = await async_client.operations.with_raw_response.terminate_workflow_execution2(
    XAmzTarget16.SIMPLE_WORKFLOW_SERVICE_TERMINATE_WORKFLOW_EXECUTION
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type TerminateWorkflowExecution2ErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget16OrStr](amazon_swf/models/enums/x_amz_target16.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_swf/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](amazon_swf/core/results.py)&#91;None, [TerminateWorkflowExecution2ErrorBody](amazon_swf/errors/terminate_workflow_execution2_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[TerminateWorkflowExecution2ErrorBody](amazon_swf/errors/terminate_workflow_execution2_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[RawError](amazon_swf/core/results.py)</code> |
| anything unmapped | <code>[RawError](amazon_swf/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def undeprecate_activity_type2(x_amz_target: XAmzTarget17OrStr, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, UndeprecateActivityType2ErrorBody]</code></summary>

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

**Sync**

```python
result = client.operations.with_raw_response.undeprecate_activity_type2(
    XAmzTarget17.SIMPLE_WORKFLOW_SERVICE_UNDEPRECATE_ACTIVITY_TYPE
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UndeprecateActivityType2ErrorBody
```

**Async**

```python
result = await async_client.operations.with_raw_response.undeprecate_activity_type2(
    XAmzTarget17.SIMPLE_WORKFLOW_SERVICE_UNDEPRECATE_ACTIVITY_TYPE
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UndeprecateActivityType2ErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget17OrStr](amazon_swf/models/enums/x_amz_target17.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_swf/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](amazon_swf/core/results.py)&#91;None, [UndeprecateActivityType2ErrorBody](amazon_swf/errors/undeprecate_activity_type2_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[UndeprecateActivityType2ErrorBody](amazon_swf/errors/undeprecate_activity_type2_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[RawError](amazon_swf/core/results.py)</code> |
| anything unmapped | <code>[RawError](amazon_swf/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def undeprecate_domain2(x_amz_target: XAmzTarget18OrStr, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, UndeprecateDomain2ErrorBody]</code></summary>

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

**Sync**

```python
result = client.operations.with_raw_response.undeprecate_domain2(
    XAmzTarget18.SIMPLE_WORKFLOW_SERVICE_UNDEPRECATE_DOMAIN
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UndeprecateDomain2ErrorBody
```

**Async**

```python
result = await async_client.operations.with_raw_response.undeprecate_domain2(
    XAmzTarget18.SIMPLE_WORKFLOW_SERVICE_UNDEPRECATE_DOMAIN
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UndeprecateDomain2ErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget18OrStr](amazon_swf/models/enums/x_amz_target18.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_swf/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](amazon_swf/core/results.py)&#91;None, [UndeprecateDomain2ErrorBody](amazon_swf/errors/undeprecate_domain2_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[UndeprecateDomain2ErrorBody](amazon_swf/errors/undeprecate_domain2_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[RawError](amazon_swf/core/results.py)</code> |
| anything unmapped | <code>[RawError](amazon_swf/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def undeprecate_workflow_type2(x_amz_target: XAmzTarget19OrStr, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, UndeprecateWorkflowType2ErrorBody]</code></summary>

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

**Sync**

```python
result = client.operations.with_raw_response.undeprecate_workflow_type2(
    XAmzTarget19.SIMPLE_WORKFLOW_SERVICE_UNDEPRECATE_WORKFLOW_TYPE
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UndeprecateWorkflowType2ErrorBody
```

**Async**

```python
result = await async_client.operations.with_raw_response.undeprecate_workflow_type2(
    XAmzTarget19.SIMPLE_WORKFLOW_SERVICE_UNDEPRECATE_WORKFLOW_TYPE
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UndeprecateWorkflowType2ErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget19OrStr](amazon_swf/models/enums/x_amz_target19.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_swf/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](amazon_swf/core/results.py)&#91;None, [UndeprecateWorkflowType2ErrorBody](amazon_swf/errors/undeprecate_workflow_type2_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[UndeprecateWorkflowType2ErrorBody](amazon_swf/errors/undeprecate_workflow_type2_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[RawError](amazon_swf/core/results.py)</code> |
| anything unmapped | <code>[RawError](amazon_swf/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

