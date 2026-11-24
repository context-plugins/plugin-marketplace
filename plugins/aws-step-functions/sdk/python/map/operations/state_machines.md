<!-- Generated file — do not edit; regenerated with the SDK. -->

# StateMachines — operations

Accessor: `client.state_machines` · Source: `aws_step_functions/apis/state_machines.py` · 6 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.state_machines.create_state_machine2

- **Route**: `POST /#CreateStateMachine`
- **Auth**: `sigv4`
- **Signature**: `def create_state_machine2(x_amz_target: XAmzTargetAwsStepFunctionsStateMachinesApiOrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, CreateStateMachine2ErrorBody]`
- **Error**: `CreateStateMachine2ErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 409, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTargetAwsStepFunctionsStateMachinesApiOrStr` | `aws_step_functions/models/enums/x_amz_target_aws_step_functions_state_machines_api.py` |
| `CreateStateMachine2ErrorBody` | `aws_step_functions/errors/create_state_machine2_error.py` |

### client.state_machines.delete_state_machine2

- **Route**: `POST /#DeleteStateMachine`
- **Auth**: `sigv4`
- **Signature**: `def delete_state_machine2(x_amz_target: XAmzTarget1AwsStepFunctionsStateMachinesApiOrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, DeleteStateMachine2ErrorBody]`
- **Error**: `DeleteStateMachine2ErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget1AwsStepFunctionsStateMachinesApiOrStr` | `aws_step_functions/models/enums/x_amz_target1_aws_step_functions_state_machines_api.py` |
| `DeleteStateMachine2ErrorBody` | `aws_step_functions/errors/delete_state_machine2_error.py` |

### client.state_machines.describe_state_machine2

- **Route**: `POST /#DescribeStateMachine`
- **Auth**: `sigv4`
- **Signature**: `def describe_state_machine2(x_amz_target: XAmzTarget2AwsStepFunctionsStateMachinesApiOrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, DescribeStateMachine2ErrorBody]`
- **Error**: `DescribeStateMachine2ErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget2AwsStepFunctionsStateMachinesApiOrStr` | `aws_step_functions/models/enums/x_amz_target2_aws_step_functions_state_machines_api.py` |
| `DescribeStateMachine2ErrorBody` | `aws_step_functions/errors/describe_state_machine2_error.py` |

### client.state_machines.describe_state_machine_for_execution2

- **Route**: `POST /#DescribeStateMachineForExecution`
- **Auth**: `sigv4`
- **Signature**: `def describe_state_machine_for_execution2(x_amz_target: XAmzTarget3AwsStepFunctionsStateMachinesApiOrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, DescribeStateMachineForExecution2ErrorBody]`
- **Error**: `DescribeStateMachineForExecution2ErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget3AwsStepFunctionsStateMachinesApiOrStr` | `aws_step_functions/models/enums/x_amz_target3_aws_step_functions_state_machines_api.py` |
| `DescribeStateMachineForExecution2ErrorBody` | `aws_step_functions/errors/describe_state_machine_for_execution2_error.py` |

### client.state_machines.list_state_machines2

- **Route**: `POST /#ListStateMachines`
- **Auth**: `sigv4`
- **Signature**: `def list_state_machines2(x_amz_target: XAmzTarget4AwsStepFunctionsStateMachinesApiOrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, ListStateMachines2ErrorBody]`
- **Error**: `ListStateMachines2ErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget4AwsStepFunctionsStateMachinesApiOrStr` | `aws_step_functions/models/enums/x_amz_target4_aws_step_functions_state_machines_api.py` |
| `ListStateMachines2ErrorBody` | `aws_step_functions/errors/list_state_machines2_error.py` |

### client.state_machines.update_state_machine2

- **Route**: `POST /#UpdateStateMachine`
- **Auth**: `sigv4`
- **Signature**: `def update_state_machine2(x_amz_target: XAmzTarget5AwsStepFunctionsStateMachinesApiOrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, UpdateStateMachine2ErrorBody]`
- **Error**: `UpdateStateMachine2ErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 402, 409, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget5AwsStepFunctionsStateMachinesApiOrStr` | `aws_step_functions/models/enums/x_amz_target5_aws_step_functions_state_machines_api.py` |
| `UpdateStateMachine2ErrorBody` | `aws_step_functions/errors/update_state_machine2_error.py` |

