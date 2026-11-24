<!-- Generated file — do not edit; regenerated with the SDK. -->

# AwsStepFunctionsXAmzTargetAwsstepfunctionsPublishsta — operations

Accessor: `client.aws_step_functions_x_amz_target_awsstepfunctions_publishsta` · Source: `aws_step_functions/apis/aws_step_functions_x_amz_target_awsstepfunctions_publishsta.py` · 1 operation

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.aws_step_functions_x_amz_target_awsstepfunctions_publishsta.publish_state_machine_version

- **Route**: `POST /#PublishStateMachineVersion`
- **Auth**: `sigv4`
- **Signature**: `def publish_state_machine_version(x_amz_target: XAmzTargetAwsStepFunctionsAwsStepFunctionsXAmzTargetAwsstepfunctionsPublishstaApiOrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, PublishStateMachineVersionErrorBody]`
- **Error**: `PublishStateMachineVersionErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 402, 409, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTargetAwsStepFunctionsAwsStepFunctionsXAmzTargetAwsstepfunctionsPublishstaApiOrStr` | `aws_step_functions/models/enums/x_amz_target_aws_step_functions_aws_step_functions_x_amz_target_awsstepfunctions_publishsta_api.py` |
| `PublishStateMachineVersionErrorBody` | `aws_step_functions/errors/publish_state_machine_version_error.py` |

