<!-- Generated file — do not edit; regenerated with the SDK. -->

# AwsStepFunctionsXAmzTargetAwsstepfunctionsListstatem — operations

Accessor: `client.aws_step_functions_x_amz_target_awsstepfunctions_liststatem` · Source: `aws_step_functions/apis/aws_step_functions_x_amz_target_awsstepfunctions_liststatem.py` · 2 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.aws_step_functions_x_amz_target_awsstepfunctions_liststatem.list_state_machine_aliases

- **Route**: `POST /#ListStateMachineAliases`
- **Auth**: `sigv4`
- **Signature**: `def list_state_machine_aliases(x_amz_target: XAmzTarget1AwsStepFunctionsAwsStepFunctionsXAmzTargetAwsstepfunctionsListstatemApiOrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, ListStateMachineAliasesErrorBody]`
- **Error**: `ListStateMachineAliasesErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 404, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget1AwsStepFunctionsAwsStepFunctionsXAmzTargetAwsstepfunctionsListstatemApiOrStr` | `aws_step_functions/models/enums/x_amz_target1_aws_step_functions_aws_step_functions_x_amz_target_awsstepfunctions_liststatem_api.py` |
| `ListStateMachineAliasesErrorBody` | `aws_step_functions/errors/list_state_machine_aliases_error.py` |

### client.aws_step_functions_x_amz_target_awsstepfunctions_liststatem.list_state_machine_versions

- **Route**: `POST /#ListStateMachineVersions`
- **Auth**: `sigv4`
- **Signature**: `def list_state_machine_versions(x_amz_target: XAmzTargetAwsStepFunctionsAwsStepFunctionsXAmzTargetAwsstepfunctionsListstatemApiOrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, ListStateMachineVersionsErrorBody]`
- **Error**: `ListStateMachineVersionsErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTargetAwsStepFunctionsAwsStepFunctionsXAmzTargetAwsstepfunctionsListstatemApiOrStr` | `aws_step_functions/models/enums/x_amz_target_aws_step_functions_aws_step_functions_x_amz_target_awsstepfunctions_liststatem_api.py` |
| `ListStateMachineVersionsErrorBody` | `aws_step_functions/errors/list_state_machine_versions_error.py` |

