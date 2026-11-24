<!-- Generated file — do not edit; regenerated with the SDK. -->

# AwsStepFunctions — operations

Accessor: `client.aws_step_functions` · Source: `aws_step_functions/apis/aws_step_functions.py` · 26 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.aws_step_functions.create_activity

- **Route**: `POST /#CreateActivity`
- **Auth**: `sigv4`
- **Signature**: `def create_activity(x_amz_target: XAmzTargetOrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, CreateActivityErrorBody]`
- **Error**: `CreateActivityErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTargetOrStr` | `aws_step_functions/models/enums/x_amz_target.py` |
| `CreateActivityErrorBody` | `aws_step_functions/errors/create_activity_error.py` |

### client.aws_step_functions.create_state_machine

- **Route**: `POST /#CreateStateMachine`
- **Auth**: `sigv4`
- **Signature**: `def create_state_machine(x_amz_target: XAmzTarget4OrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, CreateStateMachineErrorBody]`
- **Error**: `CreateStateMachineErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 409, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget4OrStr` | `aws_step_functions/models/enums/x_amz_target4.py` |
| `CreateStateMachineErrorBody` | `aws_step_functions/errors/create_state_machine_error.py` |

### client.aws_step_functions.delete_activity

- **Route**: `POST /#DeleteActivity`
- **Auth**: `sigv4`
- **Signature**: `def delete_activity(x_amz_target: XAmzTarget1OrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, DeleteActivityErrorBody]`
- **Error**: `DeleteActivityErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget1OrStr` | `aws_step_functions/models/enums/x_amz_target1.py` |
| `DeleteActivityErrorBody` | `aws_step_functions/errors/delete_activity_error.py` |

### client.aws_step_functions.delete_state_machine

- **Route**: `POST /#DeleteStateMachine`
- **Auth**: `sigv4`
- **Signature**: `def delete_state_machine(x_amz_target: XAmzTarget5OrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, DeleteStateMachineErrorBody]`
- **Error**: `DeleteStateMachineErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget5OrStr` | `aws_step_functions/models/enums/x_amz_target5.py` |
| `DeleteStateMachineErrorBody` | `aws_step_functions/errors/delete_state_machine_error.py` |

### client.aws_step_functions.describe_activity

- **Route**: `POST /#DescribeActivity`
- **Auth**: `sigv4`
- **Signature**: `def describe_activity(x_amz_target: XAmzTarget2OrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, DescribeActivityErrorBody]`
- **Error**: `DescribeActivityErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget2OrStr` | `aws_step_functions/models/enums/x_amz_target2.py` |
| `DescribeActivityErrorBody` | `aws_step_functions/errors/describe_activity_error.py` |

### client.aws_step_functions.describe_execution

- **Route**: `POST /#DescribeExecution`
- **Auth**: `sigv4`
- **Signature**: `def describe_execution(x_amz_target: XAmzTarget10OrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, DescribeExecutionErrorBody]`
- **Error**: `DescribeExecutionErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget10OrStr` | `aws_step_functions/models/enums/x_amz_target10.py` |
| `DescribeExecutionErrorBody` | `aws_step_functions/errors/describe_execution_error.py` |

### client.aws_step_functions.describe_map_run

- **Route**: `POST /#DescribeMapRun`
- **Auth**: `sigv4`
- **Signature**: `def describe_map_run(x_amz_target: XAmzTarget14OrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, DescribeMapRunErrorBody]`
- **Error**: `DescribeMapRunErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 404, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget14OrStr` | `aws_step_functions/models/enums/x_amz_target14.py` |
| `DescribeMapRunErrorBody` | `aws_step_functions/errors/describe_map_run_error.py` |

### client.aws_step_functions.describe_state_machine

- **Route**: `POST /#DescribeStateMachine`
- **Auth**: `sigv4`
- **Signature**: `def describe_state_machine(x_amz_target: XAmzTarget6OrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, DescribeStateMachineErrorBody]`
- **Error**: `DescribeStateMachineErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget6OrStr` | `aws_step_functions/models/enums/x_amz_target6.py` |
| `DescribeStateMachineErrorBody` | `aws_step_functions/errors/describe_state_machine_error.py` |

### client.aws_step_functions.describe_state_machine_for_execution

- **Route**: `POST /#DescribeStateMachineForExecution`
- **Auth**: `sigv4`
- **Signature**: `def describe_state_machine_for_execution(x_amz_target: XAmzTarget7OrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, DescribeStateMachineForExecutionErrorBody]`
- **Error**: `DescribeStateMachineForExecutionErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget7OrStr` | `aws_step_functions/models/enums/x_amz_target7.py` |
| `DescribeStateMachineForExecutionErrorBody` | `aws_step_functions/errors/describe_state_machine_for_execution_error.py` |

### client.aws_step_functions.get_activity_task

- **Route**: `POST /#GetActivityTask`
- **Auth**: `sigv4`
- **Signature**: `def get_activity_task(x_amz_target: XAmzTarget17OrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, GetActivityTaskErrorBody]`
- **Error**: `GetActivityTaskErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget17OrStr` | `aws_step_functions/models/enums/x_amz_target17.py` |
| `GetActivityTaskErrorBody` | `aws_step_functions/errors/get_activity_task_error.py` |

### client.aws_step_functions.get_execution_history

- **Route**: `POST /#GetExecutionHistory`
- **Auth**: `sigv4`
- **Signature**: `def get_execution_history(x_amz_target: XAmzTarget18OrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, GetExecutionHistoryErrorBody]`
- **Error**: `GetExecutionHistoryErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget18OrStr` | `aws_step_functions/models/enums/x_amz_target18.py` |
| `GetExecutionHistoryErrorBody` | `aws_step_functions/errors/get_execution_history_error.py` |

### client.aws_step_functions.list_activities

- **Route**: `POST /#ListActivities`
- **Auth**: `sigv4`
- **Signature**: `def list_activities(x_amz_target: XAmzTarget3OrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, ListActivitiesErrorBody]`
- **Error**: `ListActivitiesErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget3OrStr` | `aws_step_functions/models/enums/x_amz_target3.py` |
| `ListActivitiesErrorBody` | `aws_step_functions/errors/list_activities_error.py` |

### client.aws_step_functions.list_executions

- **Route**: `POST /#ListExecutions`
- **Auth**: `sigv4`
- **Signature**: `def list_executions(x_amz_target: XAmzTarget11OrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, ListExecutionsErrorBody]`
- **Error**: `ListExecutionsErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 404, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget11OrStr` | `aws_step_functions/models/enums/x_amz_target11.py` |
| `ListExecutionsErrorBody` | `aws_step_functions/errors/list_executions_error.py` |

### client.aws_step_functions.list_map_runs

- **Route**: `POST /#ListMapRuns`
- **Auth**: `sigv4`
- **Signature**: `def list_map_runs(x_amz_target: XAmzTarget15OrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, ListMapRunsErrorBody]`
- **Error**: `ListMapRunsErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget15OrStr` | `aws_step_functions/models/enums/x_amz_target15.py` |
| `ListMapRunsErrorBody` | `aws_step_functions/errors/list_map_runs_error.py` |

### client.aws_step_functions.list_state_machines

- **Route**: `POST /#ListStateMachines`
- **Auth**: `sigv4`
- **Signature**: `def list_state_machines(x_amz_target: XAmzTarget8OrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, ListStateMachinesErrorBody]`
- **Error**: `ListStateMachinesErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget8OrStr` | `aws_step_functions/models/enums/x_amz_target8.py` |
| `ListStateMachinesErrorBody` | `aws_step_functions/errors/list_state_machines_error.py` |

### client.aws_step_functions.list_tags_for_resource

- **Route**: `POST /#ListTagsForResource`
- **Auth**: `sigv4`
- **Signature**: `def list_tags_for_resource(x_amz_target: XAmzTarget19OrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, ListTagsForResourceErrorBody]`
- **Error**: `ListTagsForResourceErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 404, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget19OrStr` | `aws_step_functions/models/enums/x_amz_target19.py` |
| `ListTagsForResourceErrorBody` | `aws_step_functions/errors/list_tags_for_resource_error.py` |

### client.aws_step_functions.send_task_failure

- **Route**: `POST /#SendTaskFailure`
- **Auth**: `sigv4`
- **Signature**: `def send_task_failure(x_amz_target: XAmzTarget20OrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, SendTaskFailureErrorBody]`
- **Error**: `SendTaskFailureErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget20OrStr` | `aws_step_functions/models/enums/x_amz_target20.py` |
| `SendTaskFailureErrorBody` | `aws_step_functions/errors/send_task_failure_error.py` |

### client.aws_step_functions.send_task_heartbeat

- **Route**: `POST /#SendTaskHeartbeat`
- **Auth**: `sigv4`
- **Signature**: `def send_task_heartbeat(x_amz_target: XAmzTarget21OrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, SendTaskHeartbeatErrorBody]`
- **Error**: `SendTaskHeartbeatErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget21OrStr` | `aws_step_functions/models/enums/x_amz_target21.py` |
| `SendTaskHeartbeatErrorBody` | `aws_step_functions/errors/send_task_heartbeat_error.py` |

### client.aws_step_functions.send_task_success

- **Route**: `POST /#SendTaskSuccess`
- **Auth**: `sigv4`
- **Signature**: `def send_task_success(x_amz_target: XAmzTarget22OrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, SendTaskSuccessErrorBody]`
- **Error**: `SendTaskSuccessErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget22OrStr` | `aws_step_functions/models/enums/x_amz_target22.py` |
| `SendTaskSuccessErrorBody` | `aws_step_functions/errors/send_task_success_error.py` |

### client.aws_step_functions.start_execution

- **Route**: `POST /#StartExecution`
- **Auth**: `sigv4`
- **Signature**: `def start_execution(x_amz_target: XAmzTarget12OrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, StartExecutionErrorBody]`
- **Error**: `StartExecutionErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget12OrStr` | `aws_step_functions/models/enums/x_amz_target12.py` |
| `StartExecutionErrorBody` | `aws_step_functions/errors/start_execution_error.py` |

### client.aws_step_functions.start_sync_execution

- **Route**: `POST /#StartSyncExecution`
- **Auth**: `sigv4`
- **Signature**: `def start_sync_execution(x_amz_target: XAmzTarget23OrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, StartSyncExecutionErrorBody]`
- **Error**: `StartSyncExecutionErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget23OrStr` | `aws_step_functions/models/enums/x_amz_target23.py` |
| `StartSyncExecutionErrorBody` | `aws_step_functions/errors/start_sync_execution_error.py` |

### client.aws_step_functions.stop_execution

- **Route**: `POST /#StopExecution`
- **Auth**: `sigv4`
- **Signature**: `def stop_execution(x_amz_target: XAmzTarget13OrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, StopExecutionErrorBody]`
- **Error**: `StopExecutionErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget13OrStr` | `aws_step_functions/models/enums/x_amz_target13.py` |
| `StopExecutionErrorBody` | `aws_step_functions/errors/stop_execution_error.py` |

### client.aws_step_functions.tag_resource

- **Route**: `POST /#TagResource`
- **Auth**: `sigv4`
- **Signature**: `def tag_resource(x_amz_target: XAmzTarget24OrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, TagResourceErrorBody]`
- **Error**: `TagResourceErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 404, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget24OrStr` | `aws_step_functions/models/enums/x_amz_target24.py` |
| `TagResourceErrorBody` | `aws_step_functions/errors/tag_resource_error.py` |

### client.aws_step_functions.untag_resource

- **Route**: `POST /#UntagResource`
- **Auth**: `sigv4`
- **Signature**: `def untag_resource(x_amz_target: XAmzTarget25OrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, UntagResourceErrorBody]`
- **Error**: `UntagResourceErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 404, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget25OrStr` | `aws_step_functions/models/enums/x_amz_target25.py` |
| `UntagResourceErrorBody` | `aws_step_functions/errors/untag_resource_error.py` |

### client.aws_step_functions.update_map_run

- **Route**: `POST /#UpdateMapRun`
- **Auth**: `sigv4`
- **Signature**: `def update_map_run(x_amz_target: XAmzTarget16OrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, UpdateMapRunErrorBody]`
- **Error**: `UpdateMapRunErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 404, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget16OrStr` | `aws_step_functions/models/enums/x_amz_target16.py` |
| `UpdateMapRunErrorBody` | `aws_step_functions/errors/update_map_run_error.py` |

### client.aws_step_functions.update_state_machine

- **Route**: `POST /#UpdateStateMachine`
- **Auth**: `sigv4`
- **Signature**: `def update_state_machine(x_amz_target: XAmzTarget9OrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, UpdateStateMachineErrorBody]`
- **Error**: `UpdateStateMachineErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 402, 409, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget9OrStr` | `aws_step_functions/models/enums/x_amz_target9.py` |
| `UpdateStateMachineErrorBody` | `aws_step_functions/errors/update_state_machine_error.py` |

