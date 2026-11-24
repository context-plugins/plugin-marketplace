<!-- Generated file — do not edit; regenerated with the SDK. -->

# AwsStepFunctionsXAmzTargetAwsstepfunctionsCreatestat — operations

Accessor: `client.aws_step_functions_x_amz_target_awsstepfunctions_createstat` · Source: `aws_step_functions/apis/aws_step_functions_x_amz_target_awsstepfunctions_createstat.py` · 1 operation

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.aws_step_functions_x_amz_target_awsstepfunctions_createstat.create_state_machine_alias

- **Route**: `POST /#CreateStateMachineAlias`
- **Auth**: `sigv4`
- **Signature**: `def create_state_machine_alias(x_amz_target: XAmzTargetAwsStepFunctionsAwsStepFunctionsXAmzTargetAwsstepfunctionsCreatestatApiOrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, CreateStateMachineAliasErrorBody]`
- **Error**: `CreateStateMachineAliasErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 402, 404, 409, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTargetAwsStepFunctionsAwsStepFunctionsXAmzTargetAwsstepfunctionsCreatestatApiOrStr` | `aws_step_functions/models/enums/x_amz_target_aws_step_functions_aws_step_functions_x_amz_target_awsstepfunctions_createstat_api.py` |
| `CreateStateMachineAliasErrorBody` | `aws_step_functions/errors/create_state_machine_alias_error.py` |

