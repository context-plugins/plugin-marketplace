<!-- Generated file — do not edit; regenerated with the SDK. -->

# FleetApi — operations

Accessor: `client.fleet_api` · Source: `aws_code_build/apis/fleet_api.py` · 5 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.fleet_api.batch_get_fleets

- **Route**: `POST /#BatchGetFleets`
- **Auth**: `sigv4`
- **Signature**: `def batch_get_fleets(x_amz_target: XAmzTargetAwsCodeBuildFleetApiOrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, BatchGetFleetsErrorBody]`
- **Error**: `BatchGetFleetsErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTargetAwsCodeBuildFleetApiOrStr` | `aws_code_build/models/enums/x_amz_target_aws_code_build_fleet_api.py` |
| `BatchGetFleetsErrorBody` | `aws_code_build/errors/batch_get_fleets_error.py` |

### client.fleet_api.create_fleet

- **Route**: `POST /#CreateFleet`
- **Auth**: `sigv4`
- **Signature**: `def create_fleet(x_amz_target: XAmzTarget1AwsCodeBuildFleetApiOrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, CreateFleetErrorBody]`
- **Error**: `CreateFleetErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget1AwsCodeBuildFleetApiOrStr` | `aws_code_build/models/enums/x_amz_target1_aws_code_build_fleet_api.py` |
| `CreateFleetErrorBody` | `aws_code_build/errors/create_fleet_error.py` |

### client.fleet_api.delete_fleet

- **Route**: `POST /#DeleteFleet`
- **Auth**: `sigv4`
- **Signature**: `def delete_fleet(x_amz_target: XAmzTarget2AwsCodeBuildFleetApiOrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, DeleteFleetErrorBody]`
- **Error**: `DeleteFleetErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget2AwsCodeBuildFleetApiOrStr` | `aws_code_build/models/enums/x_amz_target2_aws_code_build_fleet_api.py` |
| `DeleteFleetErrorBody` | `aws_code_build/errors/delete_fleet_error.py` |

### client.fleet_api.list_fleets

- **Route**: `POST /#ListFleets`
- **Auth**: `sigv4`
- **Signature**: `def list_fleets(x_amz_target: XAmzTarget3AwsCodeBuildFleetApiOrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, ListFleetsErrorBody]`
- **Error**: `ListFleetsErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget3AwsCodeBuildFleetApiOrStr` | `aws_code_build/models/enums/x_amz_target3_aws_code_build_fleet_api.py` |
| `ListFleetsErrorBody` | `aws_code_build/errors/list_fleets_error.py` |

### client.fleet_api.update_fleet

- **Route**: `POST /#UpdateFleet`
- **Auth**: `sigv4`
- **Signature**: `def update_fleet(x_amz_target: XAmzTarget4AwsCodeBuildFleetApiOrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, UpdateFleetErrorBody]`
- **Error**: `UpdateFleetErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget4AwsCodeBuildFleetApiOrStr` | `aws_code_build/models/enums/x_amz_target4_aws_code_build_fleet_api.py` |
| `UpdateFleetErrorBody` | `aws_code_build/errors/update_fleet_error.py` |

