<!-- Generated file — do not edit; regenerated with the SDK. -->

# CommandExecutionApi — operations

Accessor: `client.command_execution_api` · Source: `aws_code_build/apis/command_execution_api.py` · 3 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.command_execution_api.batch_get_command_executions

- **Route**: `POST /#BatchGetCommandExecutions`
- **Auth**: `sigv4`
- **Signature**: `def batch_get_command_executions(x_amz_target: XAmzTargetAwsCodeBuildCommandExecutionApiOrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, BatchGetCommandExecutionsErrorBody]`
- **Error**: `BatchGetCommandExecutionsErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTargetAwsCodeBuildCommandExecutionApiOrStr` | `aws_code_build/models/enums/x_amz_target_aws_code_build_command_execution_api.py` |
| `BatchGetCommandExecutionsErrorBody` | `aws_code_build/errors/batch_get_command_executions_error.py` |

### client.command_execution_api.list_command_executions_for_sandbox

- **Route**: `POST /#ListCommandExecutionsForSandbox`
- **Auth**: `sigv4`
- **Signature**: `def list_command_executions_for_sandbox(x_amz_target: XAmzTarget1AwsCodeBuildCommandExecutionApiOrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, ListCommandExecutionsForSandboxErrorBody]`
- **Error**: `ListCommandExecutionsForSandboxErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget1AwsCodeBuildCommandExecutionApiOrStr` | `aws_code_build/models/enums/x_amz_target1_aws_code_build_command_execution_api.py` |
| `ListCommandExecutionsForSandboxErrorBody` | `aws_code_build/errors/list_command_executions_for_sandbox_error.py` |

### client.command_execution_api.start_command_execution

- **Route**: `POST /#StartCommandExecution`
- **Auth**: `sigv4`
- **Signature**: `def start_command_execution(x_amz_target: XAmzTarget2AwsCodeBuildCommandExecutionApiOrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, StartCommandExecutionErrorBody]`
- **Error**: `StartCommandExecutionErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget2AwsCodeBuildCommandExecutionApiOrStr` | `aws_code_build/models/enums/x_amz_target2_aws_code_build_command_execution_api.py` |
| `StartCommandExecutionErrorBody` | `aws_code_build/errors/start_command_execution_error.py` |

