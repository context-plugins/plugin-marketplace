<!-- Generated file — do not edit; regenerated with the SDK. -->

# AwsCodebuildApi — operations

Accessor: `client.aws_codebuild_api` · Source: `aws_code_build/apis/aws_codebuild_api.py` · 3 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.aws_codebuild_api.start_sandbox

- **Route**: `POST /#StartSandbox`
- **Auth**: `sigv4`
- **Signature**: `def start_sandbox(x_amz_target: XAmzTargetOrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, StartSandboxErrorBody]`
- **Error**: `StartSandboxErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTargetOrStr` | `aws_code_build/models/enums/x_amz_target.py` |
| `StartSandboxErrorBody` | `aws_code_build/errors/start_sandbox_error.py` |

### client.aws_codebuild_api.start_sandbox_connection

- **Route**: `POST /#StartSandboxConnection`
- **Auth**: `sigv4`
- **Signature**: `def start_sandbox_connection(x_amz_target: XAmzTarget2OrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, StartSandboxConnectionErrorBody]`
- **Error**: `StartSandboxConnectionErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget2OrStr` | `aws_code_build/models/enums/x_amz_target2.py` |
| `StartSandboxConnectionErrorBody` | `aws_code_build/errors/start_sandbox_connection_error.py` |

### client.aws_codebuild_api.stop_sandbox

- **Route**: `POST /#StopSandbox`
- **Auth**: `sigv4`
- **Signature**: `def stop_sandbox(x_amz_target: XAmzTarget1OrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, StopSandboxErrorBody]`
- **Error**: `StopSandboxErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget1OrStr` | `aws_code_build/models/enums/x_amz_target1.py` |
| `StopSandboxErrorBody` | `aws_code_build/errors/stop_sandbox_error.py` |

