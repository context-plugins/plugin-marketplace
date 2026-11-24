<!-- Generated file — do not edit; regenerated with the SDK. -->

# AmazonSimpleWorkflowService — operations

Accessor: `client.amazon_simple_workflow_service` · Source: `amazon_swf/apis/amazon_simple_workflow_service.py` · 37 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.amazon_simple_workflow_service.count_closed_workflow_executions

- **Route**: `POST /#CountClosedWorkflowExecutions`
- **Auth**: `sigv4`
- **Signature**: `def count_closed_workflow_executions(x_amz_target: XAmzTargetOrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, CountClosedWorkflowExecutionsErrorBody]`
- **Error**: `CountClosedWorkflowExecutionsErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTargetOrStr` | `amazon_swf/models/enums/x_amz_target.py` |
| `CountClosedWorkflowExecutionsErrorBody` | `amazon_swf/errors/count_closed_workflow_executions_error.py` |

### client.amazon_simple_workflow_service.count_open_workflow_executions

- **Route**: `POST /#CountOpenWorkflowExecutions`
- **Auth**: `sigv4`
- **Signature**: `def count_open_workflow_executions(x_amz_target: XAmzTarget1OrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, CountOpenWorkflowExecutionsErrorBody]`
- **Error**: `CountOpenWorkflowExecutionsErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget1OrStr` | `amazon_swf/models/enums/x_amz_target1.py` |
| `CountOpenWorkflowExecutionsErrorBody` | `amazon_swf/errors/count_open_workflow_executions_error.py` |

### client.amazon_simple_workflow_service.count_pending_activity_tasks

- **Route**: `POST /#CountPendingActivityTasks`
- **Auth**: `sigv4`
- **Signature**: `def count_pending_activity_tasks(x_amz_target: XAmzTarget2OrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, CountPendingActivityTasksErrorBody]`
- **Error**: `CountPendingActivityTasksErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget2OrStr` | `amazon_swf/models/enums/x_amz_target2.py` |
| `CountPendingActivityTasksErrorBody` | `amazon_swf/errors/count_pending_activity_tasks_error.py` |

### client.amazon_simple_workflow_service.count_pending_decision_tasks

- **Route**: `POST /#CountPendingDecisionTasks`
- **Auth**: `sigv4`
- **Signature**: `def count_pending_decision_tasks(x_amz_target: XAmzTarget3OrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, CountPendingDecisionTasksErrorBody]`
- **Error**: `CountPendingDecisionTasksErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget3OrStr` | `amazon_swf/models/enums/x_amz_target3.py` |
| `CountPendingDecisionTasksErrorBody` | `amazon_swf/errors/count_pending_decision_tasks_error.py` |

### client.amazon_simple_workflow_service.deprecate_activity_type

- **Route**: `POST /#DeprecateActivityType`
- **Auth**: `sigv4`
- **Signature**: `def deprecate_activity_type(x_amz_target: XAmzTarget4OrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, DeprecateActivityTypeErrorBody]`
- **Error**: `DeprecateActivityTypeErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget4OrStr` | `amazon_swf/models/enums/x_amz_target4.py` |
| `DeprecateActivityTypeErrorBody` | `amazon_swf/errors/deprecate_activity_type_error.py` |

### client.amazon_simple_workflow_service.deprecate_domain

- **Route**: `POST /#DeprecateDomain`
- **Auth**: `sigv4`
- **Signature**: `def deprecate_domain(x_amz_target: XAmzTarget5OrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, DeprecateDomainErrorBody]`
- **Error**: `DeprecateDomainErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget5OrStr` | `amazon_swf/models/enums/x_amz_target5.py` |
| `DeprecateDomainErrorBody` | `amazon_swf/errors/deprecate_domain_error.py` |

### client.amazon_simple_workflow_service.deprecate_workflow_type

- **Route**: `POST /#DeprecateWorkflowType`
- **Auth**: `sigv4`
- **Signature**: `def deprecate_workflow_type(x_amz_target: XAmzTarget6OrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, DeprecateWorkflowTypeErrorBody]`
- **Error**: `DeprecateWorkflowTypeErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget6OrStr` | `amazon_swf/models/enums/x_amz_target6.py` |
| `DeprecateWorkflowTypeErrorBody` | `amazon_swf/errors/deprecate_workflow_type_error.py` |

### client.amazon_simple_workflow_service.describe_activity_type

- **Route**: `POST /#DescribeActivityType`
- **Auth**: `sigv4`
- **Signature**: `def describe_activity_type(x_amz_target: XAmzTarget20OrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, DescribeActivityTypeErrorBody]`
- **Error**: `DescribeActivityTypeErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget20OrStr` | `amazon_swf/models/enums/x_amz_target20.py` |
| `DescribeActivityTypeErrorBody` | `amazon_swf/errors/describe_activity_type_error.py` |

### client.amazon_simple_workflow_service.describe_domain

- **Route**: `POST /#DescribeDomain`
- **Auth**: `sigv4`
- **Signature**: `def describe_domain(x_amz_target: XAmzTarget26OrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, DescribeDomainErrorBody]`
- **Error**: `DescribeDomainErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget26OrStr` | `amazon_swf/models/enums/x_amz_target26.py` |
| `DescribeDomainErrorBody` | `amazon_swf/errors/describe_domain_error.py` |

### client.amazon_simple_workflow_service.describe_workflow_execution

- **Route**: `POST /#DescribeWorkflowExecution`
- **Auth**: `sigv4`
- **Signature**: `def describe_workflow_execution(x_amz_target: XAmzTarget29OrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, DescribeWorkflowExecutionErrorBody]`
- **Error**: `DescribeWorkflowExecutionErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget29OrStr` | `amazon_swf/models/enums/x_amz_target29.py` |
| `DescribeWorkflowExecutionErrorBody` | `amazon_swf/errors/describe_workflow_execution_error.py` |

### client.amazon_simple_workflow_service.describe_workflow_type

- **Route**: `POST /#DescribeWorkflowType`
- **Auth**: `sigv4`
- **Signature**: `def describe_workflow_type(x_amz_target: XAmzTarget23OrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, DescribeWorkflowTypeErrorBody]`
- **Error**: `DescribeWorkflowTypeErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget23OrStr` | `amazon_swf/models/enums/x_amz_target23.py` |
| `DescribeWorkflowTypeErrorBody` | `amazon_swf/errors/describe_workflow_type_error.py` |

### client.amazon_simple_workflow_service.get_workflow_execution_history

- **Route**: `POST /#GetWorkflowExecutionHistory`
- **Auth**: `sigv4`
- **Signature**: `def get_workflow_execution_history(x_amz_target: XAmzTarget31OrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, GetWorkflowExecutionHistoryErrorBody]`
- **Error**: `GetWorkflowExecutionHistoryErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget31OrStr` | `amazon_swf/models/enums/x_amz_target31.py` |
| `GetWorkflowExecutionHistoryErrorBody` | `amazon_swf/errors/get_workflow_execution_history_error.py` |

### client.amazon_simple_workflow_service.list_activity_types

- **Route**: `POST /#ListActivityTypes`
- **Auth**: `sigv4`
- **Signature**: `def list_activity_types(x_amz_target: XAmzTarget21OrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, ListActivityTypesErrorBody]`
- **Error**: `ListActivityTypesErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget21OrStr` | `amazon_swf/models/enums/x_amz_target21.py` |
| `ListActivityTypesErrorBody` | `amazon_swf/errors/list_activity_types_error.py` |

### client.amazon_simple_workflow_service.list_closed_workflow_executions

- **Route**: `POST /#ListClosedWorkflowExecutions`
- **Auth**: `sigv4`
- **Signature**: `def list_closed_workflow_executions(x_amz_target: XAmzTarget32OrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, ListClosedWorkflowExecutionsErrorBody]`
- **Error**: `ListClosedWorkflowExecutionsErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget32OrStr` | `amazon_swf/models/enums/x_amz_target32.py` |
| `ListClosedWorkflowExecutionsErrorBody` | `amazon_swf/errors/list_closed_workflow_executions_error.py` |

### client.amazon_simple_workflow_service.list_domains

- **Route**: `POST /#ListDomains`
- **Auth**: `sigv4`
- **Signature**: `def list_domains(x_amz_target: XAmzTarget27OrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, ListDomainsErrorBody]`
- **Error**: `ListDomainsErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget27OrStr` | `amazon_swf/models/enums/x_amz_target27.py` |
| `ListDomainsErrorBody` | `amazon_swf/errors/list_domains_error.py` |

### client.amazon_simple_workflow_service.list_open_workflow_executions

- **Route**: `POST /#ListOpenWorkflowExecutions`
- **Auth**: `sigv4`
- **Signature**: `def list_open_workflow_executions(x_amz_target: XAmzTarget33OrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, ListOpenWorkflowExecutionsErrorBody]`
- **Error**: `ListOpenWorkflowExecutionsErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget33OrStr` | `amazon_swf/models/enums/x_amz_target33.py` |
| `ListOpenWorkflowExecutionsErrorBody` | `amazon_swf/errors/list_open_workflow_executions_error.py` |

### client.amazon_simple_workflow_service.list_tags_for_resource

- **Route**: `POST /#ListTagsForResource`
- **Auth**: `sigv4`
- **Signature**: `def list_tags_for_resource(x_amz_target: XAmzTarget34OrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, ListTagsForResourceErrorBody]`
- **Error**: `ListTagsForResourceErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget34OrStr` | `amazon_swf/models/enums/x_amz_target34.py` |
| `ListTagsForResourceErrorBody` | `amazon_swf/errors/list_tags_for_resource_error.py` |

### client.amazon_simple_workflow_service.list_workflow_types

- **Route**: `POST /#ListWorkflowTypes`
- **Auth**: `sigv4`
- **Signature**: `def list_workflow_types(x_amz_target: XAmzTarget24OrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, ListWorkflowTypesErrorBody]`
- **Error**: `ListWorkflowTypesErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget24OrStr` | `amazon_swf/models/enums/x_amz_target24.py` |
| `ListWorkflowTypesErrorBody` | `amazon_swf/errors/list_workflow_types_error.py` |

### client.amazon_simple_workflow_service.poll_for_activity_task

- **Route**: `POST /#PollForActivityTask`
- **Auth**: `sigv4`
- **Signature**: `def poll_for_activity_task(x_amz_target: XAmzTarget7OrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, PollForActivityTaskErrorBody]`
- **Error**: `PollForActivityTaskErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget7OrStr` | `amazon_swf/models/enums/x_amz_target7.py` |
| `PollForActivityTaskErrorBody` | `amazon_swf/errors/poll_for_activity_task_error.py` |

### client.amazon_simple_workflow_service.poll_for_decision_task

- **Route**: `POST /#PollForDecisionTask`
- **Auth**: `sigv4`
- **Signature**: `def poll_for_decision_task(x_amz_target: XAmzTarget8OrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, PollForDecisionTaskErrorBody]`
- **Error**: `PollForDecisionTaskErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget8OrStr` | `amazon_swf/models/enums/x_amz_target8.py` |
| `PollForDecisionTaskErrorBody` | `amazon_swf/errors/poll_for_decision_task_error.py` |

### client.amazon_simple_workflow_service.record_activity_task_heartbeat

- **Route**: `POST /#RecordActivityTaskHeartbeat`
- **Auth**: `sigv4`
- **Signature**: `def record_activity_task_heartbeat(x_amz_target: XAmzTarget9OrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, RecordActivityTaskHeartbeatErrorBody]`
- **Error**: `RecordActivityTaskHeartbeatErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget9OrStr` | `amazon_swf/models/enums/x_amz_target9.py` |
| `RecordActivityTaskHeartbeatErrorBody` | `amazon_swf/errors/record_activity_task_heartbeat_error.py` |

### client.amazon_simple_workflow_service.register_activity_type

- **Route**: `POST /#RegisterActivityType`
- **Auth**: `sigv4`
- **Signature**: `def register_activity_type(x_amz_target: XAmzTarget22OrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, RegisterActivityTypeErrorBody]`
- **Error**: `RegisterActivityTypeErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget22OrStr` | `amazon_swf/models/enums/x_amz_target22.py` |
| `RegisterActivityTypeErrorBody` | `amazon_swf/errors/register_activity_type_error.py` |

### client.amazon_simple_workflow_service.register_domain

- **Route**: `POST /#RegisterDomain`
- **Auth**: `sigv4`
- **Signature**: `def register_domain(x_amz_target: XAmzTarget28OrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, RegisterDomainErrorBody]`
- **Error**: `RegisterDomainErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget28OrStr` | `amazon_swf/models/enums/x_amz_target28.py` |
| `RegisterDomainErrorBody` | `amazon_swf/errors/register_domain_error.py` |

### client.amazon_simple_workflow_service.register_workflow_type

- **Route**: `POST /#RegisterWorkflowType`
- **Auth**: `sigv4`
- **Signature**: `def register_workflow_type(x_amz_target: XAmzTarget25OrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, RegisterWorkflowTypeErrorBody]`
- **Error**: `RegisterWorkflowTypeErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget25OrStr` | `amazon_swf/models/enums/x_amz_target25.py` |
| `RegisterWorkflowTypeErrorBody` | `amazon_swf/errors/register_workflow_type_error.py` |

### client.amazon_simple_workflow_service.request_cancel_workflow_execution

- **Route**: `POST /#RequestCancelWorkflowExecution`
- **Auth**: `sigv4`
- **Signature**: `def request_cancel_workflow_execution(x_amz_target: XAmzTarget10OrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, RequestCancelWorkflowExecutionErrorBody]`
- **Error**: `RequestCancelWorkflowExecutionErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget10OrStr` | `amazon_swf/models/enums/x_amz_target10.py` |
| `RequestCancelWorkflowExecutionErrorBody` | `amazon_swf/errors/request_cancel_workflow_execution_error.py` |

### client.amazon_simple_workflow_service.respond_activity_task_canceled

- **Route**: `POST /#RespondActivityTaskCanceled`
- **Auth**: `sigv4`
- **Signature**: `def respond_activity_task_canceled(x_amz_target: XAmzTarget11OrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, RespondActivityTaskCanceledErrorBody]`
- **Error**: `RespondActivityTaskCanceledErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget11OrStr` | `amazon_swf/models/enums/x_amz_target11.py` |
| `RespondActivityTaskCanceledErrorBody` | `amazon_swf/errors/respond_activity_task_canceled_error.py` |

### client.amazon_simple_workflow_service.respond_activity_task_completed

- **Route**: `POST /#RespondActivityTaskCompleted`
- **Auth**: `sigv4`
- **Signature**: `def respond_activity_task_completed(x_amz_target: XAmzTarget12OrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, RespondActivityTaskCompletedErrorBody]`
- **Error**: `RespondActivityTaskCompletedErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget12OrStr` | `amazon_swf/models/enums/x_amz_target12.py` |
| `RespondActivityTaskCompletedErrorBody` | `amazon_swf/errors/respond_activity_task_completed_error.py` |

### client.amazon_simple_workflow_service.respond_activity_task_failed

- **Route**: `POST /#RespondActivityTaskFailed`
- **Auth**: `sigv4`
- **Signature**: `def respond_activity_task_failed(x_amz_target: XAmzTarget13OrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, RespondActivityTaskFailedErrorBody]`
- **Error**: `RespondActivityTaskFailedErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget13OrStr` | `amazon_swf/models/enums/x_amz_target13.py` |
| `RespondActivityTaskFailedErrorBody` | `amazon_swf/errors/respond_activity_task_failed_error.py` |

### client.amazon_simple_workflow_service.respond_decision_task_completed

- **Route**: `POST /#RespondDecisionTaskCompleted`
- **Auth**: `sigv4`
- **Signature**: `def respond_decision_task_completed(x_amz_target: XAmzTarget14OrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, RespondDecisionTaskCompletedErrorBody]`
- **Error**: `RespondDecisionTaskCompletedErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget14OrStr` | `amazon_swf/models/enums/x_amz_target14.py` |
| `RespondDecisionTaskCompletedErrorBody` | `amazon_swf/errors/respond_decision_task_completed_error.py` |

### client.amazon_simple_workflow_service.signal_workflow_execution

- **Route**: `POST /#SignalWorkflowExecution`
- **Auth**: `sigv4`
- **Signature**: `def signal_workflow_execution(x_amz_target: XAmzTarget15OrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, SignalWorkflowExecutionErrorBody]`
- **Error**: `SignalWorkflowExecutionErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget15OrStr` | `amazon_swf/models/enums/x_amz_target15.py` |
| `SignalWorkflowExecutionErrorBody` | `amazon_swf/errors/signal_workflow_execution_error.py` |

### client.amazon_simple_workflow_service.start_workflow_execution

- **Route**: `POST /#StartWorkflowExecution`
- **Auth**: `sigv4`
- **Signature**: `def start_workflow_execution(x_amz_target: XAmzTarget30OrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, StartWorkflowExecutionErrorBody]`
- **Error**: `StartWorkflowExecutionErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget30OrStr` | `amazon_swf/models/enums/x_amz_target30.py` |
| `StartWorkflowExecutionErrorBody` | `amazon_swf/errors/start_workflow_execution_error.py` |

### client.amazon_simple_workflow_service.tag_resource

- **Route**: `POST /#TagResource`
- **Auth**: `sigv4`
- **Signature**: `def tag_resource(x_amz_target: XAmzTarget35OrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, TagResourceErrorBody]`
- **Error**: `TagResourceErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget35OrStr` | `amazon_swf/models/enums/x_amz_target35.py` |
| `TagResourceErrorBody` | `amazon_swf/errors/tag_resource_error.py` |

### client.amazon_simple_workflow_service.terminate_workflow_execution

- **Route**: `POST /#TerminateWorkflowExecution`
- **Auth**: `sigv4`
- **Signature**: `def terminate_workflow_execution(x_amz_target: XAmzTarget16OrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, TerminateWorkflowExecutionErrorBody]`
- **Error**: `TerminateWorkflowExecutionErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget16OrStr` | `amazon_swf/models/enums/x_amz_target16.py` |
| `TerminateWorkflowExecutionErrorBody` | `amazon_swf/errors/terminate_workflow_execution_error.py` |

### client.amazon_simple_workflow_service.undeprecate_activity_type

- **Route**: `POST /#UndeprecateActivityType`
- **Auth**: `sigv4`
- **Signature**: `def undeprecate_activity_type(x_amz_target: XAmzTarget17OrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, UndeprecateActivityTypeErrorBody]`
- **Error**: `UndeprecateActivityTypeErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget17OrStr` | `amazon_swf/models/enums/x_amz_target17.py` |
| `UndeprecateActivityTypeErrorBody` | `amazon_swf/errors/undeprecate_activity_type_error.py` |

### client.amazon_simple_workflow_service.undeprecate_domain

- **Route**: `POST /#UndeprecateDomain`
- **Auth**: `sigv4`
- **Signature**: `def undeprecate_domain(x_amz_target: XAmzTarget18OrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, UndeprecateDomainErrorBody]`
- **Error**: `UndeprecateDomainErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget18OrStr` | `amazon_swf/models/enums/x_amz_target18.py` |
| `UndeprecateDomainErrorBody` | `amazon_swf/errors/undeprecate_domain_error.py` |

### client.amazon_simple_workflow_service.undeprecate_workflow_type

- **Route**: `POST /#UndeprecateWorkflowType`
- **Auth**: `sigv4`
- **Signature**: `def undeprecate_workflow_type(x_amz_target: XAmzTarget19OrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, UndeprecateWorkflowTypeErrorBody]`
- **Error**: `UndeprecateWorkflowTypeErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget19OrStr` | `amazon_swf/models/enums/x_amz_target19.py` |
| `UndeprecateWorkflowTypeErrorBody` | `amazon_swf/errors/undeprecate_workflow_type_error.py` |

### client.amazon_simple_workflow_service.untag_resource

- **Route**: `POST /#UntagResource`
- **Auth**: `sigv4`
- **Signature**: `def untag_resource(x_amz_target: XAmzTarget36OrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, UntagResourceErrorBody]`
- **Error**: `UntagResourceErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget36OrStr` | `amazon_swf/models/enums/x_amz_target36.py` |
| `UntagResourceErrorBody` | `amazon_swf/errors/untag_resource_error.py` |

