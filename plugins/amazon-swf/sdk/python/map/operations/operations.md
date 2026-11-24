<!-- Generated file — do not edit; regenerated with the SDK. -->

# Operations — operations

Accessor: `client.operations` · Source: `amazon_swf/apis/operations.py` · 22 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.operations.count_closed_workflow_executions2

- **Route**: `POST /#CountClosedWorkflowExecutions`
- **Auth**: `sigv4`
- **Signature**: `def count_closed_workflow_executions2(x_amz_target: XAmzTargetOrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, CountClosedWorkflowExecutions2ErrorBody]`
- **Error**: `CountClosedWorkflowExecutions2ErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTargetOrStr` | `amazon_swf/models/enums/x_amz_target.py` |
| `CountClosedWorkflowExecutions2ErrorBody` | `amazon_swf/errors/count_closed_workflow_executions2_error.py` |

### client.operations.count_open_workflow_executions2

- **Route**: `POST /#CountOpenWorkflowExecutions`
- **Auth**: `sigv4`
- **Signature**: `def count_open_workflow_executions2(x_amz_target: XAmzTarget1OrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, CountOpenWorkflowExecutions2ErrorBody]`
- **Error**: `CountOpenWorkflowExecutions2ErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget1OrStr` | `amazon_swf/models/enums/x_amz_target1.py` |
| `CountOpenWorkflowExecutions2ErrorBody` | `amazon_swf/errors/count_open_workflow_executions2_error.py` |

### client.operations.count_pending_activity_tasks2

- **Route**: `POST /#CountPendingActivityTasks`
- **Auth**: `sigv4`
- **Signature**: `def count_pending_activity_tasks2(x_amz_target: XAmzTarget2OrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, CountPendingActivityTasks2ErrorBody]`
- **Error**: `CountPendingActivityTasks2ErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget2OrStr` | `amazon_swf/models/enums/x_amz_target2.py` |
| `CountPendingActivityTasks2ErrorBody` | `amazon_swf/errors/count_pending_activity_tasks2_error.py` |

### client.operations.count_pending_decision_tasks2

- **Route**: `POST /#CountPendingDecisionTasks`
- **Auth**: `sigv4`
- **Signature**: `def count_pending_decision_tasks2(x_amz_target: XAmzTarget3OrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, CountPendingDecisionTasks2ErrorBody]`
- **Error**: `CountPendingDecisionTasks2ErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget3OrStr` | `amazon_swf/models/enums/x_amz_target3.py` |
| `CountPendingDecisionTasks2ErrorBody` | `amazon_swf/errors/count_pending_decision_tasks2_error.py` |

### client.operations.delete_activity_type

- **Route**: `POST /#DeleteActivityType`
- **Auth**: `sigv4`
- **Signature**: `def delete_activity_type(x_amz_target: XAmzTarget20AmazonSimpleWorkflowServiceOperationsApiOrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, DeleteActivityTypeErrorBody]`
- **Error**: `DeleteActivityTypeErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget20AmazonSimpleWorkflowServiceOperationsApiOrStr` | `amazon_swf/models/enums/x_amz_target20_amazon_simple_workflow_service_operations_api.py` |
| `DeleteActivityTypeErrorBody` | `amazon_swf/errors/delete_activity_type_error.py` |

### client.operations.delete_workflow_type

- **Route**: `POST /#DeleteWorkflowType`
- **Auth**: `sigv4`
- **Signature**: `def delete_workflow_type(x_amz_target: XAmzTarget21AmazonSimpleWorkflowServiceOperationsApiOrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, DeleteWorkflowTypeErrorBody]`
- **Error**: `DeleteWorkflowTypeErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget21AmazonSimpleWorkflowServiceOperationsApiOrStr` | `amazon_swf/models/enums/x_amz_target21_amazon_simple_workflow_service_operations_api.py` |
| `DeleteWorkflowTypeErrorBody` | `amazon_swf/errors/delete_workflow_type_error.py` |

### client.operations.deprecate_activity_type2

- **Route**: `POST /#DeprecateActivityType`
- **Auth**: `sigv4`
- **Signature**: `def deprecate_activity_type2(x_amz_target: XAmzTarget4OrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, DeprecateActivityType2ErrorBody]`
- **Error**: `DeprecateActivityType2ErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget4OrStr` | `amazon_swf/models/enums/x_amz_target4.py` |
| `DeprecateActivityType2ErrorBody` | `amazon_swf/errors/deprecate_activity_type2_error.py` |

### client.operations.deprecate_domain2

- **Route**: `POST /#DeprecateDomain`
- **Auth**: `sigv4`
- **Signature**: `def deprecate_domain2(x_amz_target: XAmzTarget5OrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, DeprecateDomain2ErrorBody]`
- **Error**: `DeprecateDomain2ErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget5OrStr` | `amazon_swf/models/enums/x_amz_target5.py` |
| `DeprecateDomain2ErrorBody` | `amazon_swf/errors/deprecate_domain2_error.py` |

### client.operations.deprecate_workflow_type2

- **Route**: `POST /#DeprecateWorkflowType`
- **Auth**: `sigv4`
- **Signature**: `def deprecate_workflow_type2(x_amz_target: XAmzTarget6OrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, DeprecateWorkflowType2ErrorBody]`
- **Error**: `DeprecateWorkflowType2ErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget6OrStr` | `amazon_swf/models/enums/x_amz_target6.py` |
| `DeprecateWorkflowType2ErrorBody` | `amazon_swf/errors/deprecate_workflow_type2_error.py` |

### client.operations.poll_for_activity_task2

- **Route**: `POST /#PollForActivityTask`
- **Auth**: `sigv4`
- **Signature**: `def poll_for_activity_task2(x_amz_target: XAmzTarget7OrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, PollForActivityTask2ErrorBody]`
- **Error**: `PollForActivityTask2ErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget7OrStr` | `amazon_swf/models/enums/x_amz_target7.py` |
| `PollForActivityTask2ErrorBody` | `amazon_swf/errors/poll_for_activity_task2_error.py` |

### client.operations.poll_for_decision_task2

- **Route**: `POST /#PollForDecisionTask`
- **Auth**: `sigv4`
- **Signature**: `def poll_for_decision_task2(x_amz_target: XAmzTarget8OrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, PollForDecisionTask2ErrorBody]`
- **Error**: `PollForDecisionTask2ErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget8OrStr` | `amazon_swf/models/enums/x_amz_target8.py` |
| `PollForDecisionTask2ErrorBody` | `amazon_swf/errors/poll_for_decision_task2_error.py` |

### client.operations.record_activity_task_heartbeat2

- **Route**: `POST /#RecordActivityTaskHeartbeat`
- **Auth**: `sigv4`
- **Signature**: `def record_activity_task_heartbeat2(x_amz_target: XAmzTarget9OrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, RecordActivityTaskHeartbeat2ErrorBody]`
- **Error**: `RecordActivityTaskHeartbeat2ErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget9OrStr` | `amazon_swf/models/enums/x_amz_target9.py` |
| `RecordActivityTaskHeartbeat2ErrorBody` | `amazon_swf/errors/record_activity_task_heartbeat2_error.py` |

### client.operations.request_cancel_workflow_execution2

- **Route**: `POST /#RequestCancelWorkflowExecution`
- **Auth**: `sigv4`
- **Signature**: `def request_cancel_workflow_execution2(x_amz_target: XAmzTarget10OrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, RequestCancelWorkflowExecution2ErrorBody]`
- **Error**: `RequestCancelWorkflowExecution2ErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget10OrStr` | `amazon_swf/models/enums/x_amz_target10.py` |
| `RequestCancelWorkflowExecution2ErrorBody` | `amazon_swf/errors/request_cancel_workflow_execution2_error.py` |

### client.operations.respond_activity_task_canceled2

- **Route**: `POST /#RespondActivityTaskCanceled`
- **Auth**: `sigv4`
- **Signature**: `def respond_activity_task_canceled2(x_amz_target: XAmzTarget11OrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, RespondActivityTaskCanceled2ErrorBody]`
- **Error**: `RespondActivityTaskCanceled2ErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget11OrStr` | `amazon_swf/models/enums/x_amz_target11.py` |
| `RespondActivityTaskCanceled2ErrorBody` | `amazon_swf/errors/respond_activity_task_canceled2_error.py` |

### client.operations.respond_activity_task_completed2

- **Route**: `POST /#RespondActivityTaskCompleted`
- **Auth**: `sigv4`
- **Signature**: `def respond_activity_task_completed2(x_amz_target: XAmzTarget12OrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, RespondActivityTaskCompleted2ErrorBody]`
- **Error**: `RespondActivityTaskCompleted2ErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget12OrStr` | `amazon_swf/models/enums/x_amz_target12.py` |
| `RespondActivityTaskCompleted2ErrorBody` | `amazon_swf/errors/respond_activity_task_completed2_error.py` |

### client.operations.respond_activity_task_failed2

- **Route**: `POST /#RespondActivityTaskFailed`
- **Auth**: `sigv4`
- **Signature**: `def respond_activity_task_failed2(x_amz_target: XAmzTarget13OrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, RespondActivityTaskFailed2ErrorBody]`
- **Error**: `RespondActivityTaskFailed2ErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget13OrStr` | `amazon_swf/models/enums/x_amz_target13.py` |
| `RespondActivityTaskFailed2ErrorBody` | `amazon_swf/errors/respond_activity_task_failed2_error.py` |

### client.operations.respond_decision_task_completed2

- **Route**: `POST /#RespondDecisionTaskCompleted`
- **Auth**: `sigv4`
- **Signature**: `def respond_decision_task_completed2(x_amz_target: XAmzTarget14OrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, RespondDecisionTaskCompleted2ErrorBody]`
- **Error**: `RespondDecisionTaskCompleted2ErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget14OrStr` | `amazon_swf/models/enums/x_amz_target14.py` |
| `RespondDecisionTaskCompleted2ErrorBody` | `amazon_swf/errors/respond_decision_task_completed2_error.py` |

### client.operations.signal_workflow_execution2

- **Route**: `POST /#SignalWorkflowExecution`
- **Auth**: `sigv4`
- **Signature**: `def signal_workflow_execution2(x_amz_target: XAmzTarget15OrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, SignalWorkflowExecution2ErrorBody]`
- **Error**: `SignalWorkflowExecution2ErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget15OrStr` | `amazon_swf/models/enums/x_amz_target15.py` |
| `SignalWorkflowExecution2ErrorBody` | `amazon_swf/errors/signal_workflow_execution2_error.py` |

### client.operations.terminate_workflow_execution2

- **Route**: `POST /#TerminateWorkflowExecution`
- **Auth**: `sigv4`
- **Signature**: `def terminate_workflow_execution2(x_amz_target: XAmzTarget16OrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, TerminateWorkflowExecution2ErrorBody]`
- **Error**: `TerminateWorkflowExecution2ErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget16OrStr` | `amazon_swf/models/enums/x_amz_target16.py` |
| `TerminateWorkflowExecution2ErrorBody` | `amazon_swf/errors/terminate_workflow_execution2_error.py` |

### client.operations.undeprecate_activity_type2

- **Route**: `POST /#UndeprecateActivityType`
- **Auth**: `sigv4`
- **Signature**: `def undeprecate_activity_type2(x_amz_target: XAmzTarget17OrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, UndeprecateActivityType2ErrorBody]`
- **Error**: `UndeprecateActivityType2ErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget17OrStr` | `amazon_swf/models/enums/x_amz_target17.py` |
| `UndeprecateActivityType2ErrorBody` | `amazon_swf/errors/undeprecate_activity_type2_error.py` |

### client.operations.undeprecate_domain2

- **Route**: `POST /#UndeprecateDomain`
- **Auth**: `sigv4`
- **Signature**: `def undeprecate_domain2(x_amz_target: XAmzTarget18OrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, UndeprecateDomain2ErrorBody]`
- **Error**: `UndeprecateDomain2ErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget18OrStr` | `amazon_swf/models/enums/x_amz_target18.py` |
| `UndeprecateDomain2ErrorBody` | `amazon_swf/errors/undeprecate_domain2_error.py` |

### client.operations.undeprecate_workflow_type2

- **Route**: `POST /#UndeprecateWorkflowType`
- **Auth**: `sigv4`
- **Signature**: `def undeprecate_workflow_type2(x_amz_target: XAmzTarget19OrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, UndeprecateWorkflowType2ErrorBody]`
- **Error**: `UndeprecateWorkflowType2ErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget19OrStr` | `amazon_swf/models/enums/x_amz_target19.py` |
| `UndeprecateWorkflowType2ErrorBody` | `amazon_swf/errors/undeprecate_workflow_type2_error.py` |

