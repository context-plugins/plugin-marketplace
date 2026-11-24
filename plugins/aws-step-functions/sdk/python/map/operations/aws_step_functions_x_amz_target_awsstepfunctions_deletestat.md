<!-- Generated file — do not edit; regenerated with the SDK. -->

# AwsStepFunctionsXAmzTargetAwsstepfunctionsDeletestat — operations

Accessor: `client.aws_step_functions_x_amz_target_awsstepfunctions_deletestat` · Source: `aws_step_functions/apis/aws_step_functions_x_amz_target_awsstepfunctions_deletestat.py` · 2 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.aws_step_functions_x_amz_target_awsstepfunctions_deletestat.delete_state_machine_alias

- **Route**: `POST /#DeleteStateMachineAlias`
- **Auth**: `sigv4`
- **Signature**: `def delete_state_machine_alias(x_amz_target: XAmzTargetAwsStepFunctionsAwsStepFunctionsXAmzTargetAwsstepfunctionsDeletestatApiOrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, DeleteStateMachineAliasErrorBody]`
- **Error**: `DeleteStateMachineAliasErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 404, 409, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTargetAwsStepFunctionsAwsStepFunctionsXAmzTargetAwsstepfunctionsDeletestatApiOrStr` | `aws_step_functions/models/enums/x_amz_target_aws_step_functions_aws_step_functions_x_amz_target_awsstepfunctions_deletestat_api.py` |
| `DeleteStateMachineAliasErrorBody` | `aws_step_functions/errors/delete_state_machine_alias_error.py` |

### client.aws_step_functions_x_amz_target_awsstepfunctions_deletestat.delete_state_machine_version

- **Route**: `POST /#DeleteStateMachineVersion`
- **Auth**: `sigv4`
- **Signature**: `def delete_state_machine_version(x_amz_target: XAmzTarget1AwsStepFunctionsAwsStepFunctionsXAmzTargetAwsstepfunctionsDeletestatApiOrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, DeleteStateMachineVersionErrorBody]`
- **Error**: `DeleteStateMachineVersionErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 409, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget1AwsStepFunctionsAwsStepFunctionsXAmzTargetAwsstepfunctionsDeletestatApiOrStr` | `aws_step_functions/models/enums/x_amz_target1_aws_step_functions_aws_step_functions_x_amz_target_awsstepfunctions_deletestat_api.py` |
| `DeleteStateMachineVersionErrorBody` | `aws_step_functions/errors/delete_state_machine_version_error.py` |

