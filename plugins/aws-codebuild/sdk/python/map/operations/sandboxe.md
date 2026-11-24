<!-- Generated file — do not edit; regenerated with the SDK. -->

# Sandboxe — operations

Accessor: `client.sandboxe` · Source: `aws_code_build/apis/sandboxe.py` · 3 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.sandboxe.batch_get_sandboxes

- **Route**: `POST /#BatchGetSandboxes`
- **Auth**: `sigv4`
- **Signature**: `def batch_get_sandboxes(x_amz_target: XAmzTargetAwsCodeBuildSandboxeApiOrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, BatchGetSandboxesErrorBody]`
- **Error**: `BatchGetSandboxesErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTargetAwsCodeBuildSandboxeApiOrStr` | `aws_code_build/models/enums/x_amz_target_aws_code_build_sandboxe_api.py` |
| `BatchGetSandboxesErrorBody` | `aws_code_build/errors/batch_get_sandboxes_error.py` |

### client.sandboxe.list_sandboxes

- **Route**: `POST /#ListSandboxes`
- **Auth**: `sigv4`
- **Signature**: `def list_sandboxes(x_amz_target: XAmzTarget1AwsCodeBuildSandboxeApiOrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, ListSandboxesErrorBody]`
- **Error**: `ListSandboxesErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget1AwsCodeBuildSandboxeApiOrStr` | `aws_code_build/models/enums/x_amz_target1_aws_code_build_sandboxe_api.py` |
| `ListSandboxesErrorBody` | `aws_code_build/errors/list_sandboxes_error.py` |

### client.sandboxe.list_sandboxes_for_project

- **Route**: `POST /#ListSandboxesForProject`
- **Auth**: `sigv4`
- **Signature**: `def list_sandboxes_for_project(x_amz_target: XAmzTarget2AwsCodeBuildSandboxeApiOrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, ListSandboxesForProjectErrorBody]`
- **Error**: `ListSandboxesForProjectErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget2AwsCodeBuildSandboxeApiOrStr` | `aws_code_build/models/enums/x_amz_target2_aws_code_build_sandboxe_api.py` |
| `ListSandboxesForProjectErrorBody` | `aws_code_build/errors/list_sandboxes_for_project_error.py` |

