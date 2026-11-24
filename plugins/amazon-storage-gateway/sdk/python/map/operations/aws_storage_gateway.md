<!-- Generated file — do not edit; regenerated with the SDK. -->

# AwsStorageGateway — operations

Accessor: `client.aws_storage_gateway` · Source: `aws_storage_gateway/apis/aws_storage_gateway.py` · 90 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.aws_storage_gateway.activate_gateway2

- **Route**: `POST /#ActivateGateway`
- **Auth**: `sigv4`
- **Signature**: `def activate_gateway2(x_amz_target: XAmzTargetOrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, ActivateGateway2ErrorBody]`
- **Error**: `ActivateGateway2ErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTargetOrStr` | `aws_storage_gateway/models/enums/x_amz_target.py` |
| `ActivateGateway2ErrorBody` | `aws_storage_gateway/errors/activate_gateway2_error.py` |

### client.aws_storage_gateway.add_cache

- **Route**: `POST /#AddCache`
- **Auth**: `sigv4`
- **Signature**: `def add_cache(x_amz_target: XAmzTarget8OrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, AddCacheErrorBody]`
- **Error**: `AddCacheErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget8OrStr` | `aws_storage_gateway/models/enums/x_amz_target8.py` |
| `AddCacheErrorBody` | `aws_storage_gateway/errors/add_cache_error.py` |

### client.aws_storage_gateway.add_tags_to_resource

- **Route**: `POST /#AddTagsToResource`
- **Auth**: `sigv4`
- **Signature**: `def add_tags_to_resource(x_amz_target: XAmzTarget11OrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, AddTagsToResourceErrorBody]`
- **Error**: `AddTagsToResourceErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget11OrStr` | `aws_storage_gateway/models/enums/x_amz_target11.py` |
| `AddTagsToResourceErrorBody` | `aws_storage_gateway/errors/add_tags_to_resource_error.py` |

### client.aws_storage_gateway.add_upload_buffer

- **Route**: `POST /#AddUploadBuffer`
- **Auth**: `sigv4`
- **Signature**: `def add_upload_buffer(x_amz_target: XAmzTarget14OrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, AddUploadBufferErrorBody]`
- **Error**: `AddUploadBufferErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget14OrStr` | `aws_storage_gateway/models/enums/x_amz_target14.py` |
| `AddUploadBufferErrorBody` | `aws_storage_gateway/errors/add_upload_buffer_error.py` |

### client.aws_storage_gateway.add_working_storage

- **Route**: `POST /#AddWorkingStorage`
- **Auth**: `sigv4`
- **Signature**: `def add_working_storage(x_amz_target: XAmzTarget16OrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, AddWorkingStorageErrorBody]`
- **Error**: `AddWorkingStorageErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget16OrStr` | `aws_storage_gateway/models/enums/x_amz_target16.py` |
| `AddWorkingStorageErrorBody` | `aws_storage_gateway/errors/add_working_storage_error.py` |

### client.aws_storage_gateway.assign_tape_pool

- **Route**: `POST /#AssignTapePool`
- **Auth**: `sigv4`
- **Signature**: `def assign_tape_pool(x_amz_target: XAmzTarget1AwsStorageGatewayAwsStorageGatewayApiOrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, AssignTapePoolErrorBody]`
- **Error**: `AssignTapePoolErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget1AwsStorageGatewayAwsStorageGatewayApiOrStr` | `aws_storage_gateway/models/enums/x_amz_target1_aws_storage_gateway_aws_storage_gateway_api.py` |
| `AssignTapePoolErrorBody` | `aws_storage_gateway/errors/assign_tape_pool_error.py` |

### client.aws_storage_gateway.associate_file_system

- **Route**: `POST /#AssociateFileSystem`
- **Auth**: `sigv4`
- **Signature**: `def associate_file_system(x_amz_target: XAmzTarget18OrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, AssociateFileSystemErrorBody]`
- **Error**: `AssociateFileSystemErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget18OrStr` | `aws_storage_gateway/models/enums/x_amz_target18.py` |
| `AssociateFileSystemErrorBody` | `aws_storage_gateway/errors/associate_file_system_error.py` |

### client.aws_storage_gateway.attach_volume

- **Route**: `POST /#AttachVolume`
- **Auth**: `sigv4`
- **Signature**: `def attach_volume(x_amz_target: XAmzTarget20OrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, AttachVolumeErrorBody]`
- **Error**: `AttachVolumeErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget20OrStr` | `aws_storage_gateway/models/enums/x_amz_target20.py` |
| `AttachVolumeErrorBody` | `aws_storage_gateway/errors/attach_volume_error.py` |

### client.aws_storage_gateway.cancel_archival

- **Route**: `POST /#CancelArchival`
- **Auth**: `sigv4`
- **Signature**: `def cancel_archival(x_amz_target: XAmzTarget23OrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, CancelArchivalErrorBody]`
- **Error**: `CancelArchivalErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget23OrStr` | `aws_storage_gateway/models/enums/x_amz_target23.py` |
| `CancelArchivalErrorBody` | `aws_storage_gateway/errors/cancel_archival_error.py` |

### client.aws_storage_gateway.cancel_retrieval

- **Route**: `POST /#CancelRetrieval`
- **Auth**: `sigv4`
- **Signature**: `def cancel_retrieval(x_amz_target: XAmzTarget24OrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, CancelRetrievalErrorBody]`
- **Error**: `CancelRetrievalErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget24OrStr` | `aws_storage_gateway/models/enums/x_amz_target24.py` |
| `CancelRetrievalErrorBody` | `aws_storage_gateway/errors/cancel_retrieval_error.py` |

### client.aws_storage_gateway.create_cachedi_scsi_volume

- **Route**: `POST /#CreateCachediSCSIVolume`
- **Auth**: `sigv4`
- **Signature**: `def create_cachedi_scsi_volume(x_amz_target: XAmzTarget25OrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, CreateCachediScsiVolumeErrorBody]`
- **Error**: `CreateCachediScsiVolumeErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget25OrStr` | `aws_storage_gateway/models/enums/x_amz_target25.py` |
| `CreateCachediScsiVolumeErrorBody` | `aws_storage_gateway/errors/create_cachedi_scsi_volume_error.py` |

### client.aws_storage_gateway.create_nfs_file_share2

- **Route**: `POST /#CreateNFSFileShare`
- **Auth**: `sigv4`
- **Signature**: `def create_nfs_file_share2(x_amz_target: XAmzTarget2OrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, CreateNfsFileShare2ErrorBody]`
- **Error**: `CreateNfsFileShare2ErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget2OrStr` | `aws_storage_gateway/models/enums/x_amz_target2.py` |
| `CreateNfsFileShare2ErrorBody` | `aws_storage_gateway/errors/create_nfs_file_share2_error.py` |

### client.aws_storage_gateway.create_smb_file_share

- **Route**: `POST /#CreateSMBFileShare`
- **Auth**: `sigv4`
- **Signature**: `def create_smb_file_share(x_amz_target: XAmzTarget29OrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, CreateSmbFileShareErrorBody]`
- **Error**: `CreateSmbFileShareErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget29OrStr` | `aws_storage_gateway/models/enums/x_amz_target29.py` |
| `CreateSmbFileShareErrorBody` | `aws_storage_gateway/errors/create_smb_file_share_error.py` |

### client.aws_storage_gateway.create_snapshot

- **Route**: `POST /#CreateSnapshot`
- **Auth**: `sigv4`
- **Signature**: `def create_snapshot(x_amz_target: XAmzTarget32OrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, CreateSnapshotErrorBody]`
- **Error**: `CreateSnapshotErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 500, 503, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget32OrStr` | `aws_storage_gateway/models/enums/x_amz_target32.py` |
| `CreateSnapshotErrorBody` | `aws_storage_gateway/errors/create_snapshot_error.py` |

### client.aws_storage_gateway.create_snapshot_from_volume_recovery_point

- **Route**: `POST /#CreateSnapshotFromVolumeRecoveryPoint`
- **Auth**: `sigv4`
- **Signature**: `def create_snapshot_from_volume_recovery_point(x_amz_target: XAmzTarget33OrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, CreateSnapshotFromVolumeRecoveryPointErrorBody]`
- **Error**: `CreateSnapshotFromVolumeRecoveryPointErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 500, 503, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget33OrStr` | `aws_storage_gateway/models/enums/x_amz_target33.py` |
| `CreateSnapshotFromVolumeRecoveryPointErrorBody` | `aws_storage_gateway/errors/create_snapshot_from_volume_recovery_point_error.py` |

### client.aws_storage_gateway.create_storedi_scsi_volume

- **Route**: `POST /#CreateStorediSCSIVolume`
- **Auth**: `sigv4`
- **Signature**: `def create_storedi_scsi_volume(x_amz_target: XAmzTarget34OrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, CreateStorediScsiVolumeErrorBody]`
- **Error**: `CreateStorediScsiVolumeErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget34OrStr` | `aws_storage_gateway/models/enums/x_amz_target34.py` |
| `CreateStorediScsiVolumeErrorBody` | `aws_storage_gateway/errors/create_storedi_scsi_volume_error.py` |

### client.aws_storage_gateway.create_tape_pool

- **Route**: `POST /#CreateTapePool`
- **Auth**: `sigv4`
- **Signature**: `def create_tape_pool(x_amz_target: XAmzTarget36OrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, CreateTapePoolErrorBody]`
- **Error**: `CreateTapePoolErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget36OrStr` | `aws_storage_gateway/models/enums/x_amz_target36.py` |
| `CreateTapePoolErrorBody` | `aws_storage_gateway/errors/create_tape_pool_error.py` |

### client.aws_storage_gateway.create_tape_with_barcode

- **Route**: `POST /#CreateTapeWithBarcode`
- **Auth**: `sigv4`
- **Signature**: `def create_tape_with_barcode(x_amz_target: XAmzTarget40OrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, CreateTapeWithBarcodeErrorBody]`
- **Error**: `CreateTapeWithBarcodeErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget40OrStr` | `aws_storage_gateway/models/enums/x_amz_target40.py` |
| `CreateTapeWithBarcodeErrorBody` | `aws_storage_gateway/errors/create_tape_with_barcode_error.py` |

### client.aws_storage_gateway.create_tapes

- **Route**: `POST /#CreateTapes`
- **Auth**: `sigv4`
- **Signature**: `def create_tapes(x_amz_target: XAmzTarget39OrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, CreateTapesErrorBody]`
- **Error**: `CreateTapesErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget39OrStr` | `aws_storage_gateway/models/enums/x_amz_target39.py` |
| `CreateTapesErrorBody` | `aws_storage_gateway/errors/create_tapes_error.py` |

### client.aws_storage_gateway.delete_automatic_tape_creation_policy

- **Route**: `POST /#DeleteAutomaticTapeCreationPolicy`
- **Auth**: `sigv4`
- **Signature**: `def delete_automatic_tape_creation_policy(x_amz_target: XAmzTarget44OrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, DeleteAutomaticTapeCreationPolicyErrorBody]`
- **Error**: `DeleteAutomaticTapeCreationPolicyErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget44OrStr` | `aws_storage_gateway/models/enums/x_amz_target44.py` |
| `DeleteAutomaticTapeCreationPolicyErrorBody` | `aws_storage_gateway/errors/delete_automatic_tape_creation_policy_error.py` |

### client.aws_storage_gateway.delete_bandwidth_rate_limit

- **Route**: `POST /#DeleteBandwidthRateLimit`
- **Auth**: `sigv4`
- **Signature**: `def delete_bandwidth_rate_limit(x_amz_target: XAmzTarget47OrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, DeleteBandwidthRateLimitErrorBody]`
- **Error**: `DeleteBandwidthRateLimitErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget47OrStr` | `aws_storage_gateway/models/enums/x_amz_target47.py` |
| `DeleteBandwidthRateLimitErrorBody` | `aws_storage_gateway/errors/delete_bandwidth_rate_limit_error.py` |

### client.aws_storage_gateway.delete_chap_credentials

- **Route**: `POST /#DeleteChapCredentials`
- **Auth**: `sigv4`
- **Signature**: `def delete_chap_credentials(x_amz_target: XAmzTarget50OrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, DeleteChapCredentialsErrorBody]`
- **Error**: `DeleteChapCredentialsErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget50OrStr` | `aws_storage_gateway/models/enums/x_amz_target50.py` |
| `DeleteChapCredentialsErrorBody` | `aws_storage_gateway/errors/delete_chap_credentials_error.py` |

### client.aws_storage_gateway.delete_file_share

- **Route**: `POST /#DeleteFileShare`
- **Auth**: `sigv4`
- **Signature**: `def delete_file_share(x_amz_target: XAmzTarget53OrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, DeleteFileShareErrorBody]`
- **Error**: `DeleteFileShareErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget53OrStr` | `aws_storage_gateway/models/enums/x_amz_target53.py` |
| `DeleteFileShareErrorBody` | `aws_storage_gateway/errors/delete_file_share_error.py` |

### client.aws_storage_gateway.delete_gateway

- **Route**: `POST /#DeleteGateway`
- **Auth**: `sigv4`
- **Signature**: `def delete_gateway(x_amz_target: XAmzTarget55OrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, DeleteGatewayErrorBody]`
- **Error**: `DeleteGatewayErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget55OrStr` | `aws_storage_gateway/models/enums/x_amz_target55.py` |
| `DeleteGatewayErrorBody` | `aws_storage_gateway/errors/delete_gateway_error.py` |

### client.aws_storage_gateway.delete_snapshot_schedule

- **Route**: `POST /#DeleteSnapshotSchedule`
- **Auth**: `sigv4`
- **Signature**: `def delete_snapshot_schedule(x_amz_target: XAmzTarget58OrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, DeleteSnapshotScheduleErrorBody]`
- **Error**: `DeleteSnapshotScheduleErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget58OrStr` | `aws_storage_gateway/models/enums/x_amz_target58.py` |
| `DeleteSnapshotScheduleErrorBody` | `aws_storage_gateway/errors/delete_snapshot_schedule_error.py` |

### client.aws_storage_gateway.delete_tape

- **Route**: `POST /#DeleteTape`
- **Auth**: `sigv4`
- **Signature**: `def delete_tape(x_amz_target: XAmzTarget41OrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, DeleteTapeErrorBody]`
- **Error**: `DeleteTapeErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget41OrStr` | `aws_storage_gateway/models/enums/x_amz_target41.py` |
| `DeleteTapeErrorBody` | `aws_storage_gateway/errors/delete_tape_error.py` |

### client.aws_storage_gateway.delete_tape_archive

- **Route**: `POST /#DeleteTapeArchive`
- **Auth**: `sigv4`
- **Signature**: `def delete_tape_archive(x_amz_target: XAmzTarget61OrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, DeleteTapeArchiveErrorBody]`
- **Error**: `DeleteTapeArchiveErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget61OrStr` | `aws_storage_gateway/models/enums/x_amz_target61.py` |
| `DeleteTapeArchiveErrorBody` | `aws_storage_gateway/errors/delete_tape_archive_error.py` |

### client.aws_storage_gateway.delete_tape_pool

- **Route**: `POST /#DeleteTapePool`
- **Auth**: `sigv4`
- **Signature**: `def delete_tape_pool(x_amz_target: XAmzTarget37OrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, DeleteTapePoolErrorBody]`
- **Error**: `DeleteTapePoolErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget37OrStr` | `aws_storage_gateway/models/enums/x_amz_target37.py` |
| `DeleteTapePoolErrorBody` | `aws_storage_gateway/errors/delete_tape_pool_error.py` |

### client.aws_storage_gateway.delete_volume

- **Route**: `POST /#DeleteVolume`
- **Auth**: `sigv4`
- **Signature**: `def delete_volume(x_amz_target: XAmzTarget21OrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, DeleteVolumeErrorBody]`
- **Error**: `DeleteVolumeErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget21OrStr` | `aws_storage_gateway/models/enums/x_amz_target21.py` |
| `DeleteVolumeErrorBody` | `aws_storage_gateway/errors/delete_volume_error.py` |

### client.aws_storage_gateway.describe_availability_monitor_test

- **Route**: `POST /#DescribeAvailabilityMonitorTest`
- **Auth**: `sigv4`
- **Signature**: `def describe_availability_monitor_test(x_amz_target: XAmzTarget63OrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, DescribeAvailabilityMonitorTestErrorBody]`
- **Error**: `DescribeAvailabilityMonitorTestErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget63OrStr` | `aws_storage_gateway/models/enums/x_amz_target63.py` |
| `DescribeAvailabilityMonitorTestErrorBody` | `aws_storage_gateway/errors/describe_availability_monitor_test_error.py` |

### client.aws_storage_gateway.describe_bandwidth_rate_limit

- **Route**: `POST /#DescribeBandwidthRateLimit`
- **Auth**: `sigv4`
- **Signature**: `def describe_bandwidth_rate_limit(x_amz_target: XAmzTarget48OrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, DescribeBandwidthRateLimitErrorBody]`
- **Error**: `DescribeBandwidthRateLimitErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget48OrStr` | `aws_storage_gateway/models/enums/x_amz_target48.py` |
| `DescribeBandwidthRateLimitErrorBody` | `aws_storage_gateway/errors/describe_bandwidth_rate_limit_error.py` |

### client.aws_storage_gateway.describe_bandwidth_rate_limit_schedule

- **Route**: `POST /#DescribeBandwidthRateLimitSchedule`
- **Auth**: `sigv4`
- **Signature**: `def describe_bandwidth_rate_limit_schedule(x_amz_target: XAmzTarget65OrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, DescribeBandwidthRateLimitScheduleErrorBody]`
- **Error**: `DescribeBandwidthRateLimitScheduleErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget65OrStr` | `aws_storage_gateway/models/enums/x_amz_target65.py` |
| `DescribeBandwidthRateLimitScheduleErrorBody` | `aws_storage_gateway/errors/describe_bandwidth_rate_limit_schedule_error.py` |

### client.aws_storage_gateway.describe_cache

- **Route**: `POST /#DescribeCache`
- **Auth**: `sigv4`
- **Signature**: `def describe_cache(x_amz_target: XAmzTarget9OrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, DescribeCacheErrorBody]`
- **Error**: `DescribeCacheErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget9OrStr` | `aws_storage_gateway/models/enums/x_amz_target9.py` |
| `DescribeCacheErrorBody` | `aws_storage_gateway/errors/describe_cache_error.py` |

### client.aws_storage_gateway.describe_cachedi_scsi_volumes

- **Route**: `POST /#DescribeCachediSCSIVolumes`
- **Auth**: `sigv4`
- **Signature**: `def describe_cachedi_scsi_volumes(x_amz_target: XAmzTarget26OrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, DescribeCachediScsiVolumesErrorBody]`
- **Error**: `DescribeCachediScsiVolumesErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget26OrStr` | `aws_storage_gateway/models/enums/x_amz_target26.py` |
| `DescribeCachediScsiVolumesErrorBody` | `aws_storage_gateway/errors/describe_cachedi_scsi_volumes_error.py` |

### client.aws_storage_gateway.describe_chap_credentials

- **Route**: `POST /#DescribeChapCredentials`
- **Auth**: `sigv4`
- **Signature**: `def describe_chap_credentials(x_amz_target: XAmzTarget51OrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, DescribeChapCredentialsErrorBody]`
- **Error**: `DescribeChapCredentialsErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget51OrStr` | `aws_storage_gateway/models/enums/x_amz_target51.py` |
| `DescribeChapCredentialsErrorBody` | `aws_storage_gateway/errors/describe_chap_credentials_error.py` |

### client.aws_storage_gateway.describe_file_system_associations

- **Route**: `POST /#DescribeFileSystemAssociations`
- **Auth**: `sigv4`
- **Signature**: `def describe_file_system_associations(x_amz_target: XAmzTarget67OrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, DescribeFileSystemAssociationsErrorBody]`
- **Error**: `DescribeFileSystemAssociationsErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget67OrStr` | `aws_storage_gateway/models/enums/x_amz_target67.py` |
| `DescribeFileSystemAssociationsErrorBody` | `aws_storage_gateway/errors/describe_file_system_associations_error.py` |

### client.aws_storage_gateway.describe_gateway_information2

- **Route**: `POST /#DescribeGatewayInformation`
- **Auth**: `sigv4`
- **Signature**: `def describe_gateway_information2(x_amz_target: XAmzTarget4OrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, DescribeGatewayInformation2ErrorBody]`
- **Error**: `DescribeGatewayInformation2ErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget4OrStr` | `aws_storage_gateway/models/enums/x_amz_target4.py` |
| `DescribeGatewayInformation2ErrorBody` | `aws_storage_gateway/errors/describe_gateway_information2_error.py` |

### client.aws_storage_gateway.describe_maintenance_start_time

- **Route**: `POST /#DescribeMaintenanceStartTime`
- **Auth**: `sigv4`
- **Signature**: `def describe_maintenance_start_time(x_amz_target: XAmzTarget71OrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, DescribeMaintenanceStartTimeErrorBody]`
- **Error**: `DescribeMaintenanceStartTimeErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget71OrStr` | `aws_storage_gateway/models/enums/x_amz_target71.py` |
| `DescribeMaintenanceStartTimeErrorBody` | `aws_storage_gateway/errors/describe_maintenance_start_time_error.py` |

### client.aws_storage_gateway.describe_nfs_file_shares

- **Route**: `POST /#DescribeNFSFileShares`
- **Auth**: `sigv4`
- **Signature**: `def describe_nfs_file_shares(x_amz_target: XAmzTarget27OrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, DescribeNfsFileSharesErrorBody]`
- **Error**: `DescribeNfsFileSharesErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget27OrStr` | `aws_storage_gateway/models/enums/x_amz_target27.py` |
| `DescribeNfsFileSharesErrorBody` | `aws_storage_gateway/errors/describe_nfs_file_shares_error.py` |

### client.aws_storage_gateway.describe_smb_file_shares

- **Route**: `POST /#DescribeSMBFileShares`
- **Auth**: `sigv4`
- **Signature**: `def describe_smb_file_shares(x_amz_target: XAmzTarget30OrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, DescribeSmbFileSharesErrorBody]`
- **Error**: `DescribeSmbFileSharesErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget30OrStr` | `aws_storage_gateway/models/enums/x_amz_target30.py` |
| `DescribeSmbFileSharesErrorBody` | `aws_storage_gateway/errors/describe_smb_file_shares_error.py` |

### client.aws_storage_gateway.describe_smb_settings

- **Route**: `POST /#DescribeSMBSettings`
- **Auth**: `sigv4`
- **Signature**: `def describe_smb_settings(x_amz_target: XAmzTarget73OrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, DescribeSmbSettingsErrorBody]`
- **Error**: `DescribeSmbSettingsErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget73OrStr` | `aws_storage_gateway/models/enums/x_amz_target73.py` |
| `DescribeSmbSettingsErrorBody` | `aws_storage_gateway/errors/describe_smb_settings_error.py` |

### client.aws_storage_gateway.describe_snapshot_schedule

- **Route**: `POST /#DescribeSnapshotSchedule`
- **Auth**: `sigv4`
- **Signature**: `def describe_snapshot_schedule(x_amz_target: XAmzTarget59OrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, DescribeSnapshotScheduleErrorBody]`
- **Error**: `DescribeSnapshotScheduleErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget59OrStr` | `aws_storage_gateway/models/enums/x_amz_target59.py` |
| `DescribeSnapshotScheduleErrorBody` | `aws_storage_gateway/errors/describe_snapshot_schedule_error.py` |

### client.aws_storage_gateway.describe_storedi_scsi_volumes

- **Route**: `POST /#DescribeStorediSCSIVolumes`
- **Auth**: `sigv4`
- **Signature**: `def describe_storedi_scsi_volumes(x_amz_target: XAmzTarget35OrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, DescribeStorediScsiVolumesErrorBody]`
- **Error**: `DescribeStorediScsiVolumesErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget35OrStr` | `aws_storage_gateway/models/enums/x_amz_target35.py` |
| `DescribeStorediScsiVolumesErrorBody` | `aws_storage_gateway/errors/describe_storedi_scsi_volumes_error.py` |

### client.aws_storage_gateway.describe_tape_archives

- **Route**: `POST /#DescribeTapeArchives`
- **Auth**: `sigv4`
- **Signature**: `def describe_tape_archives(x_amz_target: XAmzTarget62OrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, DescribeTapeArchivesErrorBody]`
- **Error**: `DescribeTapeArchivesErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget62OrStr` | `aws_storage_gateway/models/enums/x_amz_target62.py` |
| `DescribeTapeArchivesErrorBody` | `aws_storage_gateway/errors/describe_tape_archives_error.py` |

### client.aws_storage_gateway.describe_tape_recovery_points

- **Route**: `POST /#DescribeTapeRecoveryPoints`
- **Auth**: `sigv4`
- **Signature**: `def describe_tape_recovery_points(x_amz_target: XAmzTarget74OrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, DescribeTapeRecoveryPointsErrorBody]`
- **Error**: `DescribeTapeRecoveryPointsErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget74OrStr` | `aws_storage_gateway/models/enums/x_amz_target74.py` |
| `DescribeTapeRecoveryPointsErrorBody` | `aws_storage_gateway/errors/describe_tape_recovery_points_error.py` |

### client.aws_storage_gateway.describe_tapes

- **Route**: `POST /#DescribeTapes`
- **Auth**: `sigv4`
- **Signature**: `def describe_tapes(x_amz_target: XAmzTarget42OrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, DescribeTapesErrorBody]`
- **Error**: `DescribeTapesErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget42OrStr` | `aws_storage_gateway/models/enums/x_amz_target42.py` |
| `DescribeTapesErrorBody` | `aws_storage_gateway/errors/describe_tapes_error.py` |

### client.aws_storage_gateway.describe_upload_buffer

- **Route**: `POST /#DescribeUploadBuffer`
- **Auth**: `sigv4`
- **Signature**: `def describe_upload_buffer(x_amz_target: XAmzTarget15OrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, DescribeUploadBufferErrorBody]`
- **Error**: `DescribeUploadBufferErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget15OrStr` | `aws_storage_gateway/models/enums/x_amz_target15.py` |
| `DescribeUploadBufferErrorBody` | `aws_storage_gateway/errors/describe_upload_buffer_error.py` |

### client.aws_storage_gateway.describe_vtl_devices

- **Route**: `POST /#DescribeVTLDevices`
- **Auth**: `sigv4`
- **Signature**: `def describe_vtl_devices(x_amz_target: XAmzTarget75OrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, DescribeVtlDevicesErrorBody]`
- **Error**: `DescribeVtlDevicesErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget75OrStr` | `aws_storage_gateway/models/enums/x_amz_target75.py` |
| `DescribeVtlDevicesErrorBody` | `aws_storage_gateway/errors/describe_vtl_devices_error.py` |

### client.aws_storage_gateway.describe_working_storage

- **Route**: `POST /#DescribeWorkingStorage`
- **Auth**: `sigv4`
- **Signature**: `def describe_working_storage(x_amz_target: XAmzTarget17OrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, DescribeWorkingStorageErrorBody]`
- **Error**: `DescribeWorkingStorageErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget17OrStr` | `aws_storage_gateway/models/enums/x_amz_target17.py` |
| `DescribeWorkingStorageErrorBody` | `aws_storage_gateway/errors/describe_working_storage_error.py` |

### client.aws_storage_gateway.detach_volume

- **Route**: `POST /#DetachVolume`
- **Auth**: `sigv4`
- **Signature**: `def detach_volume(x_amz_target: XAmzTarget22OrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, DetachVolumeErrorBody]`
- **Error**: `DetachVolumeErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget22OrStr` | `aws_storage_gateway/models/enums/x_amz_target22.py` |
| `DetachVolumeErrorBody` | `aws_storage_gateway/errors/detach_volume_error.py` |

### client.aws_storage_gateway.disable_gateway

- **Route**: `POST /#DisableGateway`
- **Auth**: `sigv4`
- **Signature**: `def disable_gateway(x_amz_target: XAmzTarget56OrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, DisableGatewayErrorBody]`
- **Error**: `DisableGatewayErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget56OrStr` | `aws_storage_gateway/models/enums/x_amz_target56.py` |
| `DisableGatewayErrorBody` | `aws_storage_gateway/errors/disable_gateway_error.py` |

### client.aws_storage_gateway.disassociate_file_system

- **Route**: `POST /#DisassociateFileSystem`
- **Auth**: `sigv4`
- **Signature**: `def disassociate_file_system(x_amz_target: XAmzTarget19OrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, DisassociateFileSystemErrorBody]`
- **Error**: `DisassociateFileSystemErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget19OrStr` | `aws_storage_gateway/models/enums/x_amz_target19.py` |
| `DisassociateFileSystemErrorBody` | `aws_storage_gateway/errors/disassociate_file_system_error.py` |

### client.aws_storage_gateway.join_domain

- **Route**: `POST /#JoinDomain`
- **Auth**: `sigv4`
- **Signature**: `def join_domain(x_amz_target: XAmzTarget2AwsStorageGatewayAwsStorageGatewayApiOrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, JoinDomainErrorBody]`
- **Error**: `JoinDomainErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget2AwsStorageGatewayAwsStorageGatewayApiOrStr` | `aws_storage_gateway/models/enums/x_amz_target2_aws_storage_gateway_aws_storage_gateway_api.py` |
| `JoinDomainErrorBody` | `aws_storage_gateway/errors/join_domain_error.py` |

### client.aws_storage_gateway.list_automatic_tape_creation_policies

- **Route**: `POST /#ListAutomaticTapeCreationPolicies`
- **Auth**: `sigv4`
- **Signature**: `def list_automatic_tape_creation_policies(x_amz_target: XAmzTarget45OrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, ListAutomaticTapeCreationPoliciesErrorBody]`
- **Error**: `ListAutomaticTapeCreationPoliciesErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget45OrStr` | `aws_storage_gateway/models/enums/x_amz_target45.py` |
| `ListAutomaticTapeCreationPoliciesErrorBody` | `aws_storage_gateway/errors/list_automatic_tape_creation_policies_error.py` |

### client.aws_storage_gateway.list_file_shares

- **Route**: `POST /#ListFileShares`
- **Auth**: `sigv4`
- **Signature**: `def list_file_shares(x_amz_target: XAmzTarget54OrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, ListFileSharesErrorBody]`
- **Error**: `ListFileSharesErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget54OrStr` | `aws_storage_gateway/models/enums/x_amz_target54.py` |
| `ListFileSharesErrorBody` | `aws_storage_gateway/errors/list_file_shares_error.py` |

### client.aws_storage_gateway.list_file_system_associations

- **Route**: `POST /#ListFileSystemAssociations`
- **Auth**: `sigv4`
- **Signature**: `def list_file_system_associations(x_amz_target: XAmzTarget68OrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, ListFileSystemAssociationsErrorBody]`
- **Error**: `ListFileSystemAssociationsErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget68OrStr` | `aws_storage_gateway/models/enums/x_amz_target68.py` |
| `ListFileSystemAssociationsErrorBody` | `aws_storage_gateway/errors/list_file_system_associations_error.py` |

### client.aws_storage_gateway.list_gateways2

- **Route**: `POST /#ListGateways`
- **Auth**: `sigv4`
- **Signature**: `def list_gateways2(x_amz_target: XAmzTarget3OrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, ListGateways2ErrorBody]`
- **Error**: `ListGateways2ErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget3OrStr` | `aws_storage_gateway/models/enums/x_amz_target3.py` |
| `ListGateways2ErrorBody` | `aws_storage_gateway/errors/list_gateways2_error.py` |

### client.aws_storage_gateway.list_local_disks

- **Route**: `POST /#ListLocalDisks`
- **Auth**: `sigv4`
- **Signature**: `def list_local_disks(x_amz_target: XAmzTarget76OrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, ListLocalDisksErrorBody]`
- **Error**: `ListLocalDisksErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget76OrStr` | `aws_storage_gateway/models/enums/x_amz_target76.py` |
| `ListLocalDisksErrorBody` | `aws_storage_gateway/errors/list_local_disks_error.py` |

### client.aws_storage_gateway.list_tags_for_resource

- **Route**: `POST /#ListTagsForResource`
- **Auth**: `sigv4`
- **Signature**: `def list_tags_for_resource(x_amz_target: XAmzTarget12OrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, ListTagsForResourceErrorBody]`
- **Error**: `ListTagsForResourceErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget12OrStr` | `aws_storage_gateway/models/enums/x_amz_target12.py` |
| `ListTagsForResourceErrorBody` | `aws_storage_gateway/errors/list_tags_for_resource_error.py` |

### client.aws_storage_gateway.list_tape_pools

- **Route**: `POST /#ListTapePools`
- **Auth**: `sigv4`
- **Signature**: `def list_tape_pools(x_amz_target: XAmzTarget38OrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, ListTapePoolsErrorBody]`
- **Error**: `ListTapePoolsErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget38OrStr` | `aws_storage_gateway/models/enums/x_amz_target38.py` |
| `ListTapePoolsErrorBody` | `aws_storage_gateway/errors/list_tape_pools_error.py` |

### client.aws_storage_gateway.list_tapes

- **Route**: `POST /#ListTapes`
- **Auth**: `sigv4`
- **Signature**: `def list_tapes(x_amz_target: XAmzTarget43OrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, ListTapesErrorBody]`
- **Error**: `ListTapesErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget43OrStr` | `aws_storage_gateway/models/enums/x_amz_target43.py` |
| `ListTapesErrorBody` | `aws_storage_gateway/errors/list_tapes_error.py` |

### client.aws_storage_gateway.list_volume_initiators

- **Route**: `POST /#ListVolumeInitiators`
- **Auth**: `sigv4`
- **Signature**: `def list_volume_initiators(x_amz_target: XAmzTarget77OrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, ListVolumeInitiatorsErrorBody]`
- **Error**: `ListVolumeInitiatorsErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget77OrStr` | `aws_storage_gateway/models/enums/x_amz_target77.py` |
| `ListVolumeInitiatorsErrorBody` | `aws_storage_gateway/errors/list_volume_initiators_error.py` |

### client.aws_storage_gateway.list_volume_recovery_points

- **Route**: `POST /#ListVolumeRecoveryPoints`
- **Auth**: `sigv4`
- **Signature**: `def list_volume_recovery_points(x_amz_target: XAmzTarget78OrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, ListVolumeRecoveryPointsErrorBody]`
- **Error**: `ListVolumeRecoveryPointsErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget78OrStr` | `aws_storage_gateway/models/enums/x_amz_target78.py` |
| `ListVolumeRecoveryPointsErrorBody` | `aws_storage_gateway/errors/list_volume_recovery_points_error.py` |

### client.aws_storage_gateway.list_volumes2

- **Route**: `POST /#ListVolumes`
- **Auth**: `sigv4`
- **Signature**: `def list_volumes2(x_amz_target: XAmzTarget1OrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, ListVolumes2ErrorBody]`
- **Error**: `ListVolumes2ErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget1OrStr` | `aws_storage_gateway/models/enums/x_amz_target1.py` |
| `ListVolumes2ErrorBody` | `aws_storage_gateway/errors/list_volumes2_error.py` |

### client.aws_storage_gateway.notify_when_uploaded

- **Route**: `POST /#NotifyWhenUploaded`
- **Auth**: `sigv4`
- **Signature**: `def notify_when_uploaded(x_amz_target: XAmzTarget3AwsStorageGatewayAwsStorageGatewayApiOrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, NotifyWhenUploadedErrorBody]`
- **Error**: `NotifyWhenUploadedErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget3AwsStorageGatewayAwsStorageGatewayApiOrStr` | `aws_storage_gateway/models/enums/x_amz_target3_aws_storage_gateway_aws_storage_gateway_api.py` |
| `NotifyWhenUploadedErrorBody` | `aws_storage_gateway/errors/notify_when_uploaded_error.py` |

### client.aws_storage_gateway.refresh_cache

- **Route**: `POST /#RefreshCache`
- **Auth**: `sigv4`
- **Signature**: `def refresh_cache(x_amz_target: XAmzTarget4AwsStorageGatewayAwsStorageGatewayApiOrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, RefreshCacheErrorBody]`
- **Error**: `RefreshCacheErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget4AwsStorageGatewayAwsStorageGatewayApiOrStr` | `aws_storage_gateway/models/enums/x_amz_target4_aws_storage_gateway_aws_storage_gateway_api.py` |
| `RefreshCacheErrorBody` | `aws_storage_gateway/errors/refresh_cache_error.py` |

### client.aws_storage_gateway.remove_tags_from_resource

- **Route**: `POST /#RemoveTagsFromResource`
- **Auth**: `sigv4`
- **Signature**: `def remove_tags_from_resource(x_amz_target: XAmzTarget13OrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, RemoveTagsFromResourceErrorBody]`
- **Error**: `RemoveTagsFromResourceErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget13OrStr` | `aws_storage_gateway/models/enums/x_amz_target13.py` |
| `RemoveTagsFromResourceErrorBody` | `aws_storage_gateway/errors/remove_tags_from_resource_error.py` |

### client.aws_storage_gateway.reset_cache

- **Route**: `POST /#ResetCache`
- **Auth**: `sigv4`
- **Signature**: `def reset_cache(x_amz_target: XAmzTarget10OrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, ResetCacheErrorBody]`
- **Error**: `ResetCacheErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget10OrStr` | `aws_storage_gateway/models/enums/x_amz_target10.py` |
| `ResetCacheErrorBody` | `aws_storage_gateway/errors/reset_cache_error.py` |

### client.aws_storage_gateway.retrieve_tape_archive

- **Route**: `POST /#RetrieveTapeArchive`
- **Auth**: `sigv4`
- **Signature**: `def retrieve_tape_archive(x_amz_target: XAmzTarget5OrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, RetrieveTapeArchiveErrorBody]`
- **Error**: `RetrieveTapeArchiveErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget5OrStr` | `aws_storage_gateway/models/enums/x_amz_target5.py` |
| `RetrieveTapeArchiveErrorBody` | `aws_storage_gateway/errors/retrieve_tape_archive_error.py` |

### client.aws_storage_gateway.retrieve_tape_recovery_point

- **Route**: `POST /#RetrieveTapeRecoveryPoint`
- **Auth**: `sigv4`
- **Signature**: `def retrieve_tape_recovery_point(x_amz_target: XAmzTarget6OrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, RetrieveTapeRecoveryPointErrorBody]`
- **Error**: `RetrieveTapeRecoveryPointErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget6OrStr` | `aws_storage_gateway/models/enums/x_amz_target6.py` |
| `RetrieveTapeRecoveryPointErrorBody` | `aws_storage_gateway/errors/retrieve_tape_recovery_point_error.py` |

### client.aws_storage_gateway.set_local_console_password

- **Route**: `POST /#SetLocalConsolePassword`
- **Auth**: `sigv4`
- **Signature**: `def set_local_console_password(x_amz_target: XAmzTarget79OrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, SetLocalConsolePasswordErrorBody]`
- **Error**: `SetLocalConsolePasswordErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget79OrStr` | `aws_storage_gateway/models/enums/x_amz_target79.py` |
| `SetLocalConsolePasswordErrorBody` | `aws_storage_gateway/errors/set_local_console_password_error.py` |

### client.aws_storage_gateway.set_smb_guest_password

- **Route**: `POST /#SetSMBGuestPassword`
- **Auth**: `sigv4`
- **Signature**: `def set_smb_guest_password(x_amz_target: XAmzTarget80OrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, SetSmbGuestPasswordErrorBody]`
- **Error**: `SetSmbGuestPasswordErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget80OrStr` | `aws_storage_gateway/models/enums/x_amz_target80.py` |
| `SetSmbGuestPasswordErrorBody` | `aws_storage_gateway/errors/set_smb_guest_password_error.py` |

### client.aws_storage_gateway.shutdown_gateway

- **Route**: `POST /#ShutdownGateway`
- **Auth**: `sigv4`
- **Signature**: `def shutdown_gateway(x_amz_target: XAmzTarget7OrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, ShutdownGatewayErrorBody]`
- **Error**: `ShutdownGatewayErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget7OrStr` | `aws_storage_gateway/models/enums/x_amz_target7.py` |
| `ShutdownGatewayErrorBody` | `aws_storage_gateway/errors/shutdown_gateway_error.py` |

### client.aws_storage_gateway.start_availability_monitor_test

- **Route**: `POST /#StartAvailabilityMonitorTest`
- **Auth**: `sigv4`
- **Signature**: `def start_availability_monitor_test(x_amz_target: XAmzTarget64OrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, StartAvailabilityMonitorTestErrorBody]`
- **Error**: `StartAvailabilityMonitorTestErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget64OrStr` | `aws_storage_gateway/models/enums/x_amz_target64.py` |
| `StartAvailabilityMonitorTestErrorBody` | `aws_storage_gateway/errors/start_availability_monitor_test_error.py` |

### client.aws_storage_gateway.start_gateway

- **Route**: `POST /#StartGateway`
- **Auth**: `sigv4`
- **Signature**: `def start_gateway(x_amz_target: XAmzTarget57OrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, StartGatewayErrorBody]`
- **Error**: `StartGatewayErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget57OrStr` | `aws_storage_gateway/models/enums/x_amz_target57.py` |
| `StartGatewayErrorBody` | `aws_storage_gateway/errors/start_gateway_error.py` |

### client.aws_storage_gateway.update_automatic_tape_creation_policy

- **Route**: `POST /#UpdateAutomaticTapeCreationPolicy`
- **Auth**: `sigv4`
- **Signature**: `def update_automatic_tape_creation_policy(x_amz_target: XAmzTarget46OrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, UpdateAutomaticTapeCreationPolicyErrorBody]`
- **Error**: `UpdateAutomaticTapeCreationPolicyErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget46OrStr` | `aws_storage_gateway/models/enums/x_amz_target46.py` |
| `UpdateAutomaticTapeCreationPolicyErrorBody` | `aws_storage_gateway/errors/update_automatic_tape_creation_policy_error.py` |

### client.aws_storage_gateway.update_bandwidth_rate_limit

- **Route**: `POST /#UpdateBandwidthRateLimit`
- **Auth**: `sigv4`
- **Signature**: `def update_bandwidth_rate_limit(x_amz_target: XAmzTarget49OrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, UpdateBandwidthRateLimitErrorBody]`
- **Error**: `UpdateBandwidthRateLimitErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget49OrStr` | `aws_storage_gateway/models/enums/x_amz_target49.py` |
| `UpdateBandwidthRateLimitErrorBody` | `aws_storage_gateway/errors/update_bandwidth_rate_limit_error.py` |

### client.aws_storage_gateway.update_bandwidth_rate_limit_schedule

- **Route**: `POST /#UpdateBandwidthRateLimitSchedule`
- **Auth**: `sigv4`
- **Signature**: `def update_bandwidth_rate_limit_schedule(x_amz_target: XAmzTarget66OrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, UpdateBandwidthRateLimitScheduleErrorBody]`
- **Error**: `UpdateBandwidthRateLimitScheduleErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget66OrStr` | `aws_storage_gateway/models/enums/x_amz_target66.py` |
| `UpdateBandwidthRateLimitScheduleErrorBody` | `aws_storage_gateway/errors/update_bandwidth_rate_limit_schedule_error.py` |

### client.aws_storage_gateway.update_chap_credentials

- **Route**: `POST /#UpdateChapCredentials`
- **Auth**: `sigv4`
- **Signature**: `def update_chap_credentials(x_amz_target: XAmzTarget52OrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, UpdateChapCredentialsErrorBody]`
- **Error**: `UpdateChapCredentialsErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget52OrStr` | `aws_storage_gateway/models/enums/x_amz_target52.py` |
| `UpdateChapCredentialsErrorBody` | `aws_storage_gateway/errors/update_chap_credentials_error.py` |

### client.aws_storage_gateway.update_file_system_association

- **Route**: `POST /#UpdateFileSystemAssociation`
- **Auth**: `sigv4`
- **Signature**: `def update_file_system_association(x_amz_target: XAmzTarget69OrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, UpdateFileSystemAssociationErrorBody]`
- **Error**: `UpdateFileSystemAssociationErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget69OrStr` | `aws_storage_gateway/models/enums/x_amz_target69.py` |
| `UpdateFileSystemAssociationErrorBody` | `aws_storage_gateway/errors/update_file_system_association_error.py` |

### client.aws_storage_gateway.update_gateway_information

- **Route**: `POST /#UpdateGatewayInformation`
- **Auth**: `sigv4`
- **Signature**: `def update_gateway_information(x_amz_target: XAmzTarget70OrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, UpdateGatewayInformationErrorBody]`
- **Error**: `UpdateGatewayInformationErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget70OrStr` | `aws_storage_gateway/models/enums/x_amz_target70.py` |
| `UpdateGatewayInformationErrorBody` | `aws_storage_gateway/errors/update_gateway_information_error.py` |

### client.aws_storage_gateway.update_gateway_software_now

- **Route**: `POST /#UpdateGatewaySoftwareNow`
- **Auth**: `sigv4`
- **Signature**: `def update_gateway_software_now(x_amz_target: XAmzTarget81OrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, UpdateGatewaySoftwareNowErrorBody]`
- **Error**: `UpdateGatewaySoftwareNowErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget81OrStr` | `aws_storage_gateway/models/enums/x_amz_target81.py` |
| `UpdateGatewaySoftwareNowErrorBody` | `aws_storage_gateway/errors/update_gateway_software_now_error.py` |

### client.aws_storage_gateway.update_maintenance_start_time

- **Route**: `POST /#UpdateMaintenanceStartTime`
- **Auth**: `sigv4`
- **Signature**: `def update_maintenance_start_time(x_amz_target: XAmzTarget72OrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, UpdateMaintenanceStartTimeErrorBody]`
- **Error**: `UpdateMaintenanceStartTimeErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget72OrStr` | `aws_storage_gateway/models/enums/x_amz_target72.py` |
| `UpdateMaintenanceStartTimeErrorBody` | `aws_storage_gateway/errors/update_maintenance_start_time_error.py` |

### client.aws_storage_gateway.update_nfs_file_share

- **Route**: `POST /#UpdateNFSFileShare`
- **Auth**: `sigv4`
- **Signature**: `def update_nfs_file_share(x_amz_target: XAmzTarget28OrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, UpdateNfsFileShareErrorBody]`
- **Error**: `UpdateNfsFileShareErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget28OrStr` | `aws_storage_gateway/models/enums/x_amz_target28.py` |
| `UpdateNfsFileShareErrorBody` | `aws_storage_gateway/errors/update_nfs_file_share_error.py` |

### client.aws_storage_gateway.update_smb_file_share

- **Route**: `POST /#UpdateSMBFileShare`
- **Auth**: `sigv4`
- **Signature**: `def update_smb_file_share(x_amz_target: XAmzTarget31OrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, UpdateSmbFileShareErrorBody]`
- **Error**: `UpdateSmbFileShareErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget31OrStr` | `aws_storage_gateway/models/enums/x_amz_target31.py` |
| `UpdateSmbFileShareErrorBody` | `aws_storage_gateway/errors/update_smb_file_share_error.py` |

### client.aws_storage_gateway.update_smb_file_share_visibility

- **Route**: `POST /#UpdateSMBFileShareVisibility`
- **Auth**: `sigv4`
- **Signature**: `def update_smb_file_share_visibility(x_amz_target: XAmzTarget82OrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, UpdateSmbFileShareVisibilityErrorBody]`
- **Error**: `UpdateSmbFileShareVisibilityErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget82OrStr` | `aws_storage_gateway/models/enums/x_amz_target82.py` |
| `UpdateSmbFileShareVisibilityErrorBody` | `aws_storage_gateway/errors/update_smb_file_share_visibility_error.py` |

### client.aws_storage_gateway.update_smb_local_groups

- **Route**: `POST /#UpdateSMBLocalGroups`
- **Auth**: `sigv4`
- **Signature**: `def update_smb_local_groups(x_amz_target: XAmzTarget83OrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, UpdateSmbLocalGroupsErrorBody]`
- **Error**: `UpdateSmbLocalGroupsErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget83OrStr` | `aws_storage_gateway/models/enums/x_amz_target83.py` |
| `UpdateSmbLocalGroupsErrorBody` | `aws_storage_gateway/errors/update_smb_local_groups_error.py` |

### client.aws_storage_gateway.update_smb_security_strategy

- **Route**: `POST /#UpdateSMBSecurityStrategy`
- **Auth**: `sigv4`
- **Signature**: `def update_smb_security_strategy(x_amz_target: XAmzTarget84OrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, UpdateSmbSecurityStrategyErrorBody]`
- **Error**: `UpdateSmbSecurityStrategyErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget84OrStr` | `aws_storage_gateway/models/enums/x_amz_target84.py` |
| `UpdateSmbSecurityStrategyErrorBody` | `aws_storage_gateway/errors/update_smb_security_strategy_error.py` |

### client.aws_storage_gateway.update_snapshot_schedule

- **Route**: `POST /#UpdateSnapshotSchedule`
- **Auth**: `sigv4`
- **Signature**: `def update_snapshot_schedule(x_amz_target: XAmzTarget60OrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, UpdateSnapshotScheduleErrorBody]`
- **Error**: `UpdateSnapshotScheduleErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget60OrStr` | `aws_storage_gateway/models/enums/x_amz_target60.py` |
| `UpdateSnapshotScheduleErrorBody` | `aws_storage_gateway/errors/update_snapshot_schedule_error.py` |

### client.aws_storage_gateway.update_vtl_device_type

- **Route**: `POST /#UpdateVTLDeviceType`
- **Auth**: `sigv4`
- **Signature**: `def update_vtl_device_type(x_amz_target: XAmzTarget85OrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, UpdateVtlDeviceTypeErrorBody]`
- **Error**: `UpdateVtlDeviceTypeErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget85OrStr` | `aws_storage_gateway/models/enums/x_amz_target85.py` |
| `UpdateVtlDeviceTypeErrorBody` | `aws_storage_gateway/errors/update_vtl_device_type_error.py` |

