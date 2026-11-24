<!-- Generated file — do not edit; regenerated with the SDK. -->

# Operations — operations

Accessor: `client.operations` · Source: `aws_storage_gateway/apis/operations.py` · 9 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.operations.activate_gateway3

- **Route**: `POST /#ActivateGateway`
- **Auth**: `sigv4`
- **Signature**: `def activate_gateway3(x_amz_target: XAmzTargetOrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, ActivateGateway3ErrorBody]`
- **Error**: `ActivateGateway3ErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTargetOrStr` | `aws_storage_gateway/models/enums/x_amz_target.py` |
| `ActivateGateway3ErrorBody` | `aws_storage_gateway/errors/activate_gateway3_error.py` |

### client.operations.assign_tape_pool2

- **Route**: `POST /#AssignTapePool`
- **Auth**: `sigv4`
- **Signature**: `def assign_tape_pool2(x_amz_target: XAmzTarget1AwsStorageGatewayAwsStorageGatewayApiOrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, AssignTapePool2ErrorBody]`
- **Error**: `AssignTapePool2ErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget1AwsStorageGatewayAwsStorageGatewayApiOrStr` | `aws_storage_gateway/models/enums/x_amz_target1_aws_storage_gateway_aws_storage_gateway_api.py` |
| `AssignTapePool2ErrorBody` | `aws_storage_gateway/errors/assign_tape_pool2_error.py` |

### client.operations.evict_files_failing_upload

- **Route**: `POST /#EvictFilesFailingUpload`
- **Auth**: `sigv4`
- **Signature**: `def evict_files_failing_upload(x_amz_target: XAmzTarget2AwsStorageGatewayOperationsApiOrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, EvictFilesFailingUploadErrorBody]`
- **Error**: `EvictFilesFailingUploadErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget2AwsStorageGatewayOperationsApiOrStr` | `aws_storage_gateway/models/enums/x_amz_target2_aws_storage_gateway_operations_api.py` |
| `EvictFilesFailingUploadErrorBody` | `aws_storage_gateway/errors/evict_files_failing_upload_error.py` |

### client.operations.join_domain2

- **Route**: `POST /#JoinDomain`
- **Auth**: `sigv4`
- **Signature**: `def join_domain2(x_amz_target: XAmzTarget3AwsStorageGatewayOperationsApiOrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, JoinDomain2ErrorBody]`
- **Error**: `JoinDomain2ErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget3AwsStorageGatewayOperationsApiOrStr` | `aws_storage_gateway/models/enums/x_amz_target3_aws_storage_gateway_operations_api.py` |
| `JoinDomain2ErrorBody` | `aws_storage_gateway/errors/join_domain2_error.py` |

### client.operations.notify_when_uploaded2

- **Route**: `POST /#NotifyWhenUploaded`
- **Auth**: `sigv4`
- **Signature**: `def notify_when_uploaded2(x_amz_target: XAmzTarget4AwsStorageGatewayOperationsApiOrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, NotifyWhenUploaded2ErrorBody]`
- **Error**: `NotifyWhenUploaded2ErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget4AwsStorageGatewayOperationsApiOrStr` | `aws_storage_gateway/models/enums/x_amz_target4_aws_storage_gateway_operations_api.py` |
| `NotifyWhenUploaded2ErrorBody` | `aws_storage_gateway/errors/notify_when_uploaded2_error.py` |

### client.operations.refresh_cache2

- **Route**: `POST /#RefreshCache`
- **Auth**: `sigv4`
- **Signature**: `def refresh_cache2(x_amz_target: XAmzTarget5AwsStorageGatewayOperationsApiOrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, RefreshCache2ErrorBody]`
- **Error**: `RefreshCache2ErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget5AwsStorageGatewayOperationsApiOrStr` | `aws_storage_gateway/models/enums/x_amz_target5_aws_storage_gateway_operations_api.py` |
| `RefreshCache2ErrorBody` | `aws_storage_gateway/errors/refresh_cache2_error.py` |

### client.operations.retrieve_tape_archive2

- **Route**: `POST /#RetrieveTapeArchive`
- **Auth**: `sigv4`
- **Signature**: `def retrieve_tape_archive2(x_amz_target: XAmzTarget6AwsStorageGatewayOperationsApiOrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, RetrieveTapeArchive2ErrorBody]`
- **Error**: `RetrieveTapeArchive2ErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget6AwsStorageGatewayOperationsApiOrStr` | `aws_storage_gateway/models/enums/x_amz_target6_aws_storage_gateway_operations_api.py` |
| `RetrieveTapeArchive2ErrorBody` | `aws_storage_gateway/errors/retrieve_tape_archive2_error.py` |

### client.operations.retrieve_tape_recovery_point2

- **Route**: `POST /#RetrieveTapeRecoveryPoint`
- **Auth**: `sigv4`
- **Signature**: `def retrieve_tape_recovery_point2(x_amz_target: XAmzTarget7AwsStorageGatewayOperationsApiOrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, RetrieveTapeRecoveryPoint2ErrorBody]`
- **Error**: `RetrieveTapeRecoveryPoint2ErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget7AwsStorageGatewayOperationsApiOrStr` | `aws_storage_gateway/models/enums/x_amz_target7_aws_storage_gateway_operations_api.py` |
| `RetrieveTapeRecoveryPoint2ErrorBody` | `aws_storage_gateway/errors/retrieve_tape_recovery_point2_error.py` |

### client.operations.shutdown_gateway2

- **Route**: `POST /#ShutdownGateway`
- **Auth**: `sigv4`
- **Signature**: `def shutdown_gateway2(x_amz_target: XAmzTarget8AwsStorageGatewayOperationsApiOrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, ShutdownGateway2ErrorBody]`
- **Error**: `ShutdownGateway2ErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget8AwsStorageGatewayOperationsApiOrStr` | `aws_storage_gateway/models/enums/x_amz_target8_aws_storage_gateway_operations_api.py` |
| `ShutdownGateway2ErrorBody` | `aws_storage_gateway/errors/shutdown_gateway2_error.py` |

