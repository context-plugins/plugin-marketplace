<!-- Generated file — do not edit; regenerated with the SDK. -->

# AmazonStorageGatewayRestApi — operations

Accessor: `client.amazon_storage_gateway_rest_api` · Source: `aws_storage_gateway/apis/amazon_storage_gateway_rest_api.py` · 5 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.amazon_storage_gateway_rest_api.activate_gateway

- **Route**: `POST /#ActivateGateway`
- **Auth**: `sigv4`
- **Signature**: `def activate_gateway(x_amz_target: XAmzTargetOrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, ActivateGatewayErrorBody]`
- **Error**: `ActivateGatewayErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTargetOrStr` | `aws_storage_gateway/models/enums/x_amz_target.py` |
| `ActivateGatewayErrorBody` | `aws_storage_gateway/errors/activate_gateway_error.py` |

### client.amazon_storage_gateway_rest_api.create_nfs_file_share

- **Route**: `POST /#CreateNFSFileShare`
- **Auth**: `sigv4`
- **Signature**: `def create_nfs_file_share(x_amz_target: XAmzTarget2OrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, CreateNfsFileShareErrorBody]`
- **Error**: `CreateNfsFileShareErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget2OrStr` | `aws_storage_gateway/models/enums/x_amz_target2.py` |
| `CreateNfsFileShareErrorBody` | `aws_storage_gateway/errors/create_nfs_file_share_error.py` |

### client.amazon_storage_gateway_rest_api.describe_gateway_information

- **Route**: `POST /#DescribeGatewayInformation`
- **Auth**: `sigv4`
- **Signature**: `def describe_gateway_information(x_amz_target: XAmzTarget4OrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, DescribeGatewayInformationErrorBody]`
- **Error**: `DescribeGatewayInformationErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget4OrStr` | `aws_storage_gateway/models/enums/x_amz_target4.py` |
| `DescribeGatewayInformationErrorBody` | `aws_storage_gateway/errors/describe_gateway_information_error.py` |

### client.amazon_storage_gateway_rest_api.list_gateways

- **Route**: `POST /#ListGateways`
- **Auth**: `sigv4`
- **Signature**: `def list_gateways(x_amz_target: XAmzTarget3OrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, ListGatewaysErrorBody]`
- **Error**: `ListGatewaysErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget3OrStr` | `aws_storage_gateway/models/enums/x_amz_target3.py` |
| `ListGatewaysErrorBody` | `aws_storage_gateway/errors/list_gateways_error.py` |

### client.amazon_storage_gateway_rest_api.list_volumes

- **Route**: `POST /#ListVolumes`
- **Auth**: `sigv4`
- **Signature**: `def list_volumes(x_amz_target: XAmzTarget1OrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, ListVolumesErrorBody]`
- **Error**: `ListVolumesErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget1OrStr` | `aws_storage_gateway/models/enums/x_amz_target1.py` |
| `ListVolumesErrorBody` | `aws_storage_gateway/errors/list_volumes_error.py` |

