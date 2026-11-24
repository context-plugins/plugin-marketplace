<!-- Generated file — do not edit; regenerated with the SDK. -->

# ResiliencyGroupApi — operations

Accessor: `client.resiliency_group_api` · Source: `aws_direct_connect/apis/resiliency_group_api.py` · 5 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.resiliency_group_api.create_resiliency_group

- **Route**: `POST /#CreateResiliencyGroup`
- **Auth**: `sigv4`
- **Signature**: `def create_resiliency_group(x_amz_target: XAmzTargetAwsDirectConnectResiliencyGroupApiOrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, CreateResiliencyGroupErrorBody]`
- **Error**: `CreateResiliencyGroupErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTargetAwsDirectConnectResiliencyGroupApiOrStr` | `aws_direct_connect/models/enums/x_amz_target_aws_direct_connect_resiliency_group_api.py` |
| `CreateResiliencyGroupErrorBody` | `aws_direct_connect/errors/create_resiliency_group_error.py` |

### client.resiliency_group_api.delete_resiliency_group

- **Route**: `POST /#DeleteResiliencyGroup`
- **Auth**: `sigv4`
- **Signature**: `def delete_resiliency_group(x_amz_target: XAmzTarget1AwsDirectConnectResiliencyGroupApiOrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, DeleteResiliencyGroupErrorBody]`
- **Error**: `DeleteResiliencyGroupErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget1AwsDirectConnectResiliencyGroupApiOrStr` | `aws_direct_connect/models/enums/x_amz_target1_aws_direct_connect_resiliency_group_api.py` |
| `DeleteResiliencyGroupErrorBody` | `aws_direct_connect/errors/delete_resiliency_group_error.py` |

### client.resiliency_group_api.get_resiliency_group

- **Route**: `POST /#GetResiliencyGroup`
- **Auth**: `sigv4`
- **Signature**: `def get_resiliency_group(x_amz_target: XAmzTarget2AwsDirectConnectResiliencyGroupApiOrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, GetResiliencyGroupErrorBody]`
- **Error**: `GetResiliencyGroupErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget2AwsDirectConnectResiliencyGroupApiOrStr` | `aws_direct_connect/models/enums/x_amz_target2_aws_direct_connect_resiliency_group_api.py` |
| `GetResiliencyGroupErrorBody` | `aws_direct_connect/errors/get_resiliency_group_error.py` |

### client.resiliency_group_api.list_resiliency_groups

- **Route**: `POST /#ListResiliencyGroups`
- **Auth**: `sigv4`
- **Signature**: `def list_resiliency_groups(x_amz_target: XAmzTarget3AwsDirectConnectResiliencyGroupApiOrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, ListResiliencyGroupsErrorBody]`
- **Error**: `ListResiliencyGroupsErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget3AwsDirectConnectResiliencyGroupApiOrStr` | `aws_direct_connect/models/enums/x_amz_target3_aws_direct_connect_resiliency_group_api.py` |
| `ListResiliencyGroupsErrorBody` | `aws_direct_connect/errors/list_resiliency_groups_error.py` |

### client.resiliency_group_api.update_resiliency_group

- **Route**: `POST /#UpdateResiliencyGroup`
- **Auth**: `sigv4`
- **Signature**: `def update_resiliency_group(x_amz_target: XAmzTarget4AwsDirectConnectResiliencyGroupApiOrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, UpdateResiliencyGroupErrorBody]`
- **Error**: `UpdateResiliencyGroupErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget4AwsDirectConnectResiliencyGroupApiOrStr` | `aws_direct_connect/models/enums/x_amz_target4_aws_direct_connect_resiliency_group_api.py` |
| `UpdateResiliencyGroupErrorBody` | `aws_direct_connect/errors/update_resiliency_group_error.py` |

