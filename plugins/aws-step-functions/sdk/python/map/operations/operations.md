<!-- Generated file — do not edit; regenerated with the SDK. -->

# Operations — operations

Accessor: `client.operations` · Source: `aws_step_functions/apis/operations.py` · 4 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.operations.publish_state_machine_version2

- **Route**: `POST /#PublishStateMachineVersion`
- **Auth**: `sigv4`
- **Signature**: `def publish_state_machine_version2(x_amz_target: XAmzTargetAwsStepFunctionsAwsStepFunctionsXAmzTargetAwsstepfunctionsPublishstaApiOrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, PublishStateMachineVersion2ErrorBody]`
- **Error**: `PublishStateMachineVersion2ErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 402, 409, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTargetAwsStepFunctionsAwsStepFunctionsXAmzTargetAwsstepfunctionsPublishstaApiOrStr` | `aws_step_functions/models/enums/x_amz_target_aws_step_functions_aws_step_functions_x_amz_target_awsstepfunctions_publishsta_api.py` |
| `PublishStateMachineVersion2ErrorBody` | `aws_step_functions/errors/publish_state_machine_version2_error.py` |

### client.operations.redrive_execution

- **Route**: `POST /#RedriveExecution`
- **Auth**: `sigv4`
- **Signature**: `def redrive_execution(x_amz_target: XAmzTarget1AwsStepFunctionsOperationsApiOrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, RedriveExecutionErrorBody]`
- **Error**: `RedriveExecutionErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget1AwsStepFunctionsOperationsApiOrStr` | `aws_step_functions/models/enums/x_amz_target1_aws_step_functions_operations_api.py` |
| `RedriveExecutionErrorBody` | `aws_step_functions/errors/redrive_execution_error.py` |

### client.operations.test_state

- **Route**: `POST /#TestState`
- **Auth**: `sigv4`
- **Signature**: `def test_state(x_amz_target: XAmzTarget2AwsStepFunctionsOperationsApiOrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, TestStateErrorBody]`
- **Error**: `TestStateErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget2AwsStepFunctionsOperationsApiOrStr` | `aws_step_functions/models/enums/x_amz_target2_aws_step_functions_operations_api.py` |
| `TestStateErrorBody` | `aws_step_functions/errors/test_state_error.py` |

### client.operations.validate_state_machine_definition

- **Route**: `POST /#ValidateStateMachineDefinition`
- **Auth**: `sigv4`
- **Signature**: `def validate_state_machine_definition(x_amz_target: XAmzTarget3AwsStepFunctionsOperationsApiOrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, ValidateStateMachineDefinitionErrorBody]`
- **Error**: `ValidateStateMachineDefinitionErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget3AwsStepFunctionsOperationsApiOrStr` | `aws_step_functions/models/enums/x_amz_target3_aws_step_functions_operations_api.py` |
| `ValidateStateMachineDefinitionErrorBody` | `aws_step_functions/errors/validate_state_machine_definition_error.py` |

