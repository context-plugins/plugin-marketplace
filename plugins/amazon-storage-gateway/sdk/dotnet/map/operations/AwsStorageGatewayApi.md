<!-- Generated file — do not edit; regenerated with the SDK. -->

# AwsStorageGatewayApi — operations

Accessor: `client.AwsStorageGatewayApi` · Source: `src/AwsStorageGateway/Api/AwsStorageGatewayApi.cs` · 90 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### ActivateGateway2

- **Auth**: `options.Sigv4`
- **Signature**: `ActivateGateway2(ActivateGateway2Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<ActivateGateway2Error>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ActivateGateway2Request` | `src/AwsStorageGateway/Requests/AwsStorageGatewayApi/ActivateGateway2Request.cs` |
| `XAmzTarget` | `src/AwsStorageGateway/Models/Enums/XAmzTarget.cs` |
| `ActivateGateway2Error` | `src/AwsStorageGateway/Errors/ActivateGateway2Error.cs` |

### AddCache

- **Auth**: `options.Sigv4`
- **Signature**: `AddCache(AddCacheRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<AddCacheError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `AddCacheRequest` | `src/AwsStorageGateway/Requests/AwsStorageGatewayApi/AddCacheRequest.cs` |
| `XAmzTarget8` | `src/AwsStorageGateway/Models/Enums/XAmzTarget8.cs` |
| `AddCacheError` | `src/AwsStorageGateway/Errors/AddCacheError.cs` |

### AddTagsToResource

- **Auth**: `options.Sigv4`
- **Signature**: `AddTagsToResource(AddTagsToResourceRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<AddTagsToResourceError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `AddTagsToResourceRequest` | `src/AwsStorageGateway/Requests/AwsStorageGatewayApi/AddTagsToResourceRequest.cs` |
| `XAmzTarget11` | `src/AwsStorageGateway/Models/Enums/XAmzTarget11.cs` |
| `AddTagsToResourceError` | `src/AwsStorageGateway/Errors/AddTagsToResourceError.cs` |

### AddUploadBuffer

- **Auth**: `options.Sigv4`
- **Signature**: `AddUploadBuffer(AddUploadBufferRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<AddUploadBufferError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `AddUploadBufferRequest` | `src/AwsStorageGateway/Requests/AwsStorageGatewayApi/AddUploadBufferRequest.cs` |
| `XAmzTarget14` | `src/AwsStorageGateway/Models/Enums/XAmzTarget14.cs` |
| `AddUploadBufferError` | `src/AwsStorageGateway/Errors/AddUploadBufferError.cs` |

### AddWorkingStorage

- **Auth**: `options.Sigv4`
- **Signature**: `AddWorkingStorage(AddWorkingStorageRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<AddWorkingStorageError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `AddWorkingStorageRequest` | `src/AwsStorageGateway/Requests/AwsStorageGatewayApi/AddWorkingStorageRequest.cs` |
| `XAmzTarget16` | `src/AwsStorageGateway/Models/Enums/XAmzTarget16.cs` |
| `AddWorkingStorageError` | `src/AwsStorageGateway/Errors/AddWorkingStorageError.cs` |

### AssignTapePool

- **Auth**: `options.Sigv4`
- **Signature**: `AssignTapePool(AssignTapePoolRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<AssignTapePoolError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `AssignTapePoolRequest` | `src/AwsStorageGateway/Requests/AwsStorageGatewayApi/AssignTapePoolRequest.cs` |
| `XAmzTarget1AwsStorageGatewayAwsStorageGatewayApi` | `src/AwsStorageGateway/Models/Enums/XAmzTarget1AwsStorageGatewayAwsStorageGatewayApi.cs` |
| `AssignTapePoolError` | `src/AwsStorageGateway/Errors/AssignTapePoolError.cs` |

### AssociateFileSystem

- **Auth**: `options.Sigv4`
- **Signature**: `AssociateFileSystem(AssociateFileSystemRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<AssociateFileSystemError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `AssociateFileSystemRequest` | `src/AwsStorageGateway/Requests/AwsStorageGatewayApi/AssociateFileSystemRequest.cs` |
| `XAmzTarget18` | `src/AwsStorageGateway/Models/Enums/XAmzTarget18.cs` |
| `AssociateFileSystemError` | `src/AwsStorageGateway/Errors/AssociateFileSystemError.cs` |

### AttachVolume

- **Auth**: `options.Sigv4`
- **Signature**: `AttachVolume(AttachVolumeRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<AttachVolumeError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `AttachVolumeRequest` | `src/AwsStorageGateway/Requests/AwsStorageGatewayApi/AttachVolumeRequest.cs` |
| `XAmzTarget20` | `src/AwsStorageGateway/Models/Enums/XAmzTarget20.cs` |
| `AttachVolumeError` | `src/AwsStorageGateway/Errors/AttachVolumeError.cs` |

### CancelArchival

- **Auth**: `options.Sigv4`
- **Signature**: `CancelArchival(CancelArchivalRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<CancelArchivalError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CancelArchivalRequest` | `src/AwsStorageGateway/Requests/AwsStorageGatewayApi/CancelArchivalRequest.cs` |
| `XAmzTarget23` | `src/AwsStorageGateway/Models/Enums/XAmzTarget23.cs` |
| `CancelArchivalError` | `src/AwsStorageGateway/Errors/CancelArchivalError.cs` |

### CancelRetrieval

- **Auth**: `options.Sigv4`
- **Signature**: `CancelRetrieval(CancelRetrievalRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<CancelRetrievalError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CancelRetrievalRequest` | `src/AwsStorageGateway/Requests/AwsStorageGatewayApi/CancelRetrievalRequest.cs` |
| `XAmzTarget24` | `src/AwsStorageGateway/Models/Enums/XAmzTarget24.cs` |
| `CancelRetrievalError` | `src/AwsStorageGateway/Errors/CancelRetrievalError.cs` |

### CreateCachediScsiVolume

- **Auth**: `options.Sigv4`
- **Signature**: `CreateCachediScsiVolume(CreateCachediScsiVolumeRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<CreateCachediScsiVolumeError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateCachediScsiVolumeRequest` | `src/AwsStorageGateway/Requests/AwsStorageGatewayApi/CreateCachediScsiVolumeRequest.cs` |
| `XAmzTarget25` | `src/AwsStorageGateway/Models/Enums/XAmzTarget25.cs` |
| `CreateCachediScsiVolumeError` | `src/AwsStorageGateway/Errors/CreateCachediScsiVolumeError.cs` |

### CreateNfsFileShare2

- **Auth**: `options.Sigv4`
- **Signature**: `CreateNfsFileShare2(CreateNfsFileShare2Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<CreateNfsFileShare2Error>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateNfsFileShare2Request` | `src/AwsStorageGateway/Requests/AwsStorageGatewayApi/CreateNfsFileShare2Request.cs` |
| `XAmzTarget2` | `src/AwsStorageGateway/Models/Enums/XAmzTarget2.cs` |
| `CreateNfsFileShare2Error` | `src/AwsStorageGateway/Errors/CreateNfsFileShare2Error.cs` |

### CreateSmbFileShare

- **Auth**: `options.Sigv4`
- **Signature**: `CreateSmbFileShare(CreateSmbFileShareRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<CreateSmbFileShareError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateSmbFileShareRequest` | `src/AwsStorageGateway/Requests/AwsStorageGatewayApi/CreateSmbFileShareRequest.cs` |
| `XAmzTarget29` | `src/AwsStorageGateway/Models/Enums/XAmzTarget29.cs` |
| `CreateSmbFileShareError` | `src/AwsStorageGateway/Errors/CreateSmbFileShareError.cs` |

### CreateSnapshot

- **Auth**: `options.Sigv4`
- **Signature**: `CreateSnapshot(CreateSnapshotRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<CreateSnapshotError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 500, 503] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateSnapshotRequest` | `src/AwsStorageGateway/Requests/AwsStorageGatewayApi/CreateSnapshotRequest.cs` |
| `XAmzTarget32` | `src/AwsStorageGateway/Models/Enums/XAmzTarget32.cs` |
| `CreateSnapshotError` | `src/AwsStorageGateway/Errors/CreateSnapshotError.cs` |

### CreateSnapshotFromVolumeRecoveryPoint

- **Auth**: `options.Sigv4`
- **Signature**: `CreateSnapshotFromVolumeRecoveryPoint(CreateSnapshotFromVolumeRecoveryPointRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<CreateSnapshotFromVolumeRecoveryPointError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 500, 503] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateSnapshotFromVolumeRecoveryPointRequest` | `src/AwsStorageGateway/Requests/AwsStorageGatewayApi/CreateSnapshotFromVolumeRecoveryPointRequest.cs` |
| `XAmzTarget33` | `src/AwsStorageGateway/Models/Enums/XAmzTarget33.cs` |
| `CreateSnapshotFromVolumeRecoveryPointError` | `src/AwsStorageGateway/Errors/CreateSnapshotFromVolumeRecoveryPointError.cs` |

### CreateStorediScsiVolume

- **Auth**: `options.Sigv4`
- **Signature**: `CreateStorediScsiVolume(CreateStorediScsiVolumeRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<CreateStorediScsiVolumeError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateStorediScsiVolumeRequest` | `src/AwsStorageGateway/Requests/AwsStorageGatewayApi/CreateStorediScsiVolumeRequest.cs` |
| `XAmzTarget34` | `src/AwsStorageGateway/Models/Enums/XAmzTarget34.cs` |
| `CreateStorediScsiVolumeError` | `src/AwsStorageGateway/Errors/CreateStorediScsiVolumeError.cs` |

### CreateTapePool

- **Auth**: `options.Sigv4`
- **Signature**: `CreateTapePool(CreateTapePoolRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<CreateTapePoolError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateTapePoolRequest` | `src/AwsStorageGateway/Requests/AwsStorageGatewayApi/CreateTapePoolRequest.cs` |
| `XAmzTarget36` | `src/AwsStorageGateway/Models/Enums/XAmzTarget36.cs` |
| `CreateTapePoolError` | `src/AwsStorageGateway/Errors/CreateTapePoolError.cs` |

### CreateTapeWithBarcode

- **Auth**: `options.Sigv4`
- **Signature**: `CreateTapeWithBarcode(CreateTapeWithBarcodeRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<CreateTapeWithBarcodeError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateTapeWithBarcodeRequest` | `src/AwsStorageGateway/Requests/AwsStorageGatewayApi/CreateTapeWithBarcodeRequest.cs` |
| `XAmzTarget40` | `src/AwsStorageGateway/Models/Enums/XAmzTarget40.cs` |
| `CreateTapeWithBarcodeError` | `src/AwsStorageGateway/Errors/CreateTapeWithBarcodeError.cs` |

### CreateTapes

- **Auth**: `options.Sigv4`
- **Signature**: `CreateTapes(CreateTapesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<CreateTapesError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateTapesRequest` | `src/AwsStorageGateway/Requests/AwsStorageGatewayApi/CreateTapesRequest.cs` |
| `XAmzTarget39` | `src/AwsStorageGateway/Models/Enums/XAmzTarget39.cs` |
| `CreateTapesError` | `src/AwsStorageGateway/Errors/CreateTapesError.cs` |

### DeleteAutomaticTapeCreationPolicy

- **Auth**: `options.Sigv4`
- **Signature**: `DeleteAutomaticTapeCreationPolicy(DeleteAutomaticTapeCreationPolicyRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<DeleteAutomaticTapeCreationPolicyError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteAutomaticTapeCreationPolicyRequest` | `src/AwsStorageGateway/Requests/AwsStorageGatewayApi/DeleteAutomaticTapeCreationPolicyRequest.cs` |
| `XAmzTarget44` | `src/AwsStorageGateway/Models/Enums/XAmzTarget44.cs` |
| `DeleteAutomaticTapeCreationPolicyError` | `src/AwsStorageGateway/Errors/DeleteAutomaticTapeCreationPolicyError.cs` |

### DeleteBandwidthRateLimit

- **Auth**: `options.Sigv4`
- **Signature**: `DeleteBandwidthRateLimit(DeleteBandwidthRateLimitRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<DeleteBandwidthRateLimitError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteBandwidthRateLimitRequest` | `src/AwsStorageGateway/Requests/AwsStorageGatewayApi/DeleteBandwidthRateLimitRequest.cs` |
| `XAmzTarget47` | `src/AwsStorageGateway/Models/Enums/XAmzTarget47.cs` |
| `DeleteBandwidthRateLimitError` | `src/AwsStorageGateway/Errors/DeleteBandwidthRateLimitError.cs` |

### DeleteChapCredentials

- **Auth**: `options.Sigv4`
- **Signature**: `DeleteChapCredentials(DeleteChapCredentialsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<DeleteChapCredentialsError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteChapCredentialsRequest` | `src/AwsStorageGateway/Requests/AwsStorageGatewayApi/DeleteChapCredentialsRequest.cs` |
| `XAmzTarget50` | `src/AwsStorageGateway/Models/Enums/XAmzTarget50.cs` |
| `DeleteChapCredentialsError` | `src/AwsStorageGateway/Errors/DeleteChapCredentialsError.cs` |

### DeleteFileShare

- **Auth**: `options.Sigv4`
- **Signature**: `DeleteFileShare(DeleteFileShareRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<DeleteFileShareError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteFileShareRequest` | `src/AwsStorageGateway/Requests/AwsStorageGatewayApi/DeleteFileShareRequest.cs` |
| `XAmzTarget53` | `src/AwsStorageGateway/Models/Enums/XAmzTarget53.cs` |
| `DeleteFileShareError` | `src/AwsStorageGateway/Errors/DeleteFileShareError.cs` |

### DeleteGateway

- **Auth**: `options.Sigv4`
- **Signature**: `DeleteGateway(DeleteGatewayRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<DeleteGatewayError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteGatewayRequest` | `src/AwsStorageGateway/Requests/AwsStorageGatewayApi/DeleteGatewayRequest.cs` |
| `XAmzTarget55` | `src/AwsStorageGateway/Models/Enums/XAmzTarget55.cs` |
| `DeleteGatewayError` | `src/AwsStorageGateway/Errors/DeleteGatewayError.cs` |

### DeleteSnapshotSchedule

- **Auth**: `options.Sigv4`
- **Signature**: `DeleteSnapshotSchedule(DeleteSnapshotScheduleRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<DeleteSnapshotScheduleError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteSnapshotScheduleRequest` | `src/AwsStorageGateway/Requests/AwsStorageGatewayApi/DeleteSnapshotScheduleRequest.cs` |
| `XAmzTarget58` | `src/AwsStorageGateway/Models/Enums/XAmzTarget58.cs` |
| `DeleteSnapshotScheduleError` | `src/AwsStorageGateway/Errors/DeleteSnapshotScheduleError.cs` |

### DeleteTape

- **Auth**: `options.Sigv4`
- **Signature**: `DeleteTape(DeleteTapeRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<DeleteTapeError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteTapeRequest` | `src/AwsStorageGateway/Requests/AwsStorageGatewayApi/DeleteTapeRequest.cs` |
| `XAmzTarget41` | `src/AwsStorageGateway/Models/Enums/XAmzTarget41.cs` |
| `DeleteTapeError` | `src/AwsStorageGateway/Errors/DeleteTapeError.cs` |

### DeleteTapeArchive

- **Auth**: `options.Sigv4`
- **Signature**: `DeleteTapeArchive(DeleteTapeArchiveRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<DeleteTapeArchiveError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteTapeArchiveRequest` | `src/AwsStorageGateway/Requests/AwsStorageGatewayApi/DeleteTapeArchiveRequest.cs` |
| `XAmzTarget61` | `src/AwsStorageGateway/Models/Enums/XAmzTarget61.cs` |
| `DeleteTapeArchiveError` | `src/AwsStorageGateway/Errors/DeleteTapeArchiveError.cs` |

### DeleteTapePool

- **Auth**: `options.Sigv4`
- **Signature**: `DeleteTapePool(DeleteTapePoolRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<DeleteTapePoolError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteTapePoolRequest` | `src/AwsStorageGateway/Requests/AwsStorageGatewayApi/DeleteTapePoolRequest.cs` |
| `XAmzTarget37` | `src/AwsStorageGateway/Models/Enums/XAmzTarget37.cs` |
| `DeleteTapePoolError` | `src/AwsStorageGateway/Errors/DeleteTapePoolError.cs` |

### DeleteVolume

- **Auth**: `options.Sigv4`
- **Signature**: `DeleteVolume(DeleteVolumeRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<DeleteVolumeError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteVolumeRequest` | `src/AwsStorageGateway/Requests/AwsStorageGatewayApi/DeleteVolumeRequest.cs` |
| `XAmzTarget21` | `src/AwsStorageGateway/Models/Enums/XAmzTarget21.cs` |
| `DeleteVolumeError` | `src/AwsStorageGateway/Errors/DeleteVolumeError.cs` |

### DescribeAvailabilityMonitorTest

- **Auth**: `options.Sigv4`
- **Signature**: `DescribeAvailabilityMonitorTest(DescribeAvailabilityMonitorTestRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<DescribeAvailabilityMonitorTestError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DescribeAvailabilityMonitorTestRequest` | `src/AwsStorageGateway/Requests/AwsStorageGatewayApi/DescribeAvailabilityMonitorTestRequest.cs` |
| `XAmzTarget63` | `src/AwsStorageGateway/Models/Enums/XAmzTarget63.cs` |
| `DescribeAvailabilityMonitorTestError` | `src/AwsStorageGateway/Errors/DescribeAvailabilityMonitorTestError.cs` |

### DescribeBandwidthRateLimit

- **Auth**: `options.Sigv4`
- **Signature**: `DescribeBandwidthRateLimit(DescribeBandwidthRateLimitRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<DescribeBandwidthRateLimitError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DescribeBandwidthRateLimitRequest` | `src/AwsStorageGateway/Requests/AwsStorageGatewayApi/DescribeBandwidthRateLimitRequest.cs` |
| `XAmzTarget48` | `src/AwsStorageGateway/Models/Enums/XAmzTarget48.cs` |
| `DescribeBandwidthRateLimitError` | `src/AwsStorageGateway/Errors/DescribeBandwidthRateLimitError.cs` |

### DescribeBandwidthRateLimitSchedule

- **Auth**: `options.Sigv4`
- **Signature**: `DescribeBandwidthRateLimitSchedule(DescribeBandwidthRateLimitScheduleRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<DescribeBandwidthRateLimitScheduleError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DescribeBandwidthRateLimitScheduleRequest` | `src/AwsStorageGateway/Requests/AwsStorageGatewayApi/DescribeBandwidthRateLimitScheduleRequest.cs` |
| `XAmzTarget65` | `src/AwsStorageGateway/Models/Enums/XAmzTarget65.cs` |
| `DescribeBandwidthRateLimitScheduleError` | `src/AwsStorageGateway/Errors/DescribeBandwidthRateLimitScheduleError.cs` |

### DescribeCache

- **Auth**: `options.Sigv4`
- **Signature**: `DescribeCache(DescribeCacheRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<DescribeCacheError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DescribeCacheRequest` | `src/AwsStorageGateway/Requests/AwsStorageGatewayApi/DescribeCacheRequest.cs` |
| `XAmzTarget9` | `src/AwsStorageGateway/Models/Enums/XAmzTarget9.cs` |
| `DescribeCacheError` | `src/AwsStorageGateway/Errors/DescribeCacheError.cs` |

### DescribeCachediScsiVolumes

- **Auth**: `options.Sigv4`
- **Signature**: `DescribeCachediScsiVolumes(DescribeCachediScsiVolumesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<DescribeCachediScsiVolumesError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DescribeCachediScsiVolumesRequest` | `src/AwsStorageGateway/Requests/AwsStorageGatewayApi/DescribeCachediScsiVolumesRequest.cs` |
| `XAmzTarget26` | `src/AwsStorageGateway/Models/Enums/XAmzTarget26.cs` |
| `DescribeCachediScsiVolumesError` | `src/AwsStorageGateway/Errors/DescribeCachediScsiVolumesError.cs` |

### DescribeChapCredentials

- **Auth**: `options.Sigv4`
- **Signature**: `DescribeChapCredentials(DescribeChapCredentialsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<DescribeChapCredentialsError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DescribeChapCredentialsRequest` | `src/AwsStorageGateway/Requests/AwsStorageGatewayApi/DescribeChapCredentialsRequest.cs` |
| `XAmzTarget51` | `src/AwsStorageGateway/Models/Enums/XAmzTarget51.cs` |
| `DescribeChapCredentialsError` | `src/AwsStorageGateway/Errors/DescribeChapCredentialsError.cs` |

### DescribeFileSystemAssociations

- **Auth**: `options.Sigv4`
- **Signature**: `DescribeFileSystemAssociations(DescribeFileSystemAssociationsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<DescribeFileSystemAssociationsError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DescribeFileSystemAssociationsRequest` | `src/AwsStorageGateway/Requests/AwsStorageGatewayApi/DescribeFileSystemAssociationsRequest.cs` |
| `XAmzTarget67` | `src/AwsStorageGateway/Models/Enums/XAmzTarget67.cs` |
| `DescribeFileSystemAssociationsError` | `src/AwsStorageGateway/Errors/DescribeFileSystemAssociationsError.cs` |

### DescribeGatewayInformation2

- **Auth**: `options.Sigv4`
- **Signature**: `DescribeGatewayInformation2(DescribeGatewayInformation2Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<DescribeGatewayInformation2Error>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DescribeGatewayInformation2Request` | `src/AwsStorageGateway/Requests/AwsStorageGatewayApi/DescribeGatewayInformation2Request.cs` |
| `XAmzTarget4` | `src/AwsStorageGateway/Models/Enums/XAmzTarget4.cs` |
| `DescribeGatewayInformation2Error` | `src/AwsStorageGateway/Errors/DescribeGatewayInformation2Error.cs` |

### DescribeMaintenanceStartTime

- **Auth**: `options.Sigv4`
- **Signature**: `DescribeMaintenanceStartTime(DescribeMaintenanceStartTimeRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<DescribeMaintenanceStartTimeError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DescribeMaintenanceStartTimeRequest` | `src/AwsStorageGateway/Requests/AwsStorageGatewayApi/DescribeMaintenanceStartTimeRequest.cs` |
| `XAmzTarget71` | `src/AwsStorageGateway/Models/Enums/XAmzTarget71.cs` |
| `DescribeMaintenanceStartTimeError` | `src/AwsStorageGateway/Errors/DescribeMaintenanceStartTimeError.cs` |

### DescribeNfsFileShares

- **Auth**: `options.Sigv4`
- **Signature**: `DescribeNfsFileShares(DescribeNfsFileSharesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<DescribeNfsFileSharesError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DescribeNfsFileSharesRequest` | `src/AwsStorageGateway/Requests/AwsStorageGatewayApi/DescribeNfsFileSharesRequest.cs` |
| `XAmzTarget27` | `src/AwsStorageGateway/Models/Enums/XAmzTarget27.cs` |
| `DescribeNfsFileSharesError` | `src/AwsStorageGateway/Errors/DescribeNfsFileSharesError.cs` |

### DescribeSmbFileShares

- **Auth**: `options.Sigv4`
- **Signature**: `DescribeSmbFileShares(DescribeSmbFileSharesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<DescribeSmbFileSharesError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DescribeSmbFileSharesRequest` | `src/AwsStorageGateway/Requests/AwsStorageGatewayApi/DescribeSmbFileSharesRequest.cs` |
| `XAmzTarget30` | `src/AwsStorageGateway/Models/Enums/XAmzTarget30.cs` |
| `DescribeSmbFileSharesError` | `src/AwsStorageGateway/Errors/DescribeSmbFileSharesError.cs` |

### DescribeSmbSettings

- **Auth**: `options.Sigv4`
- **Signature**: `DescribeSmbSettings(DescribeSmbSettingsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<DescribeSmbSettingsError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DescribeSmbSettingsRequest` | `src/AwsStorageGateway/Requests/AwsStorageGatewayApi/DescribeSmbSettingsRequest.cs` |
| `XAmzTarget73` | `src/AwsStorageGateway/Models/Enums/XAmzTarget73.cs` |
| `DescribeSmbSettingsError` | `src/AwsStorageGateway/Errors/DescribeSmbSettingsError.cs` |

### DescribeSnapshotSchedule

- **Auth**: `options.Sigv4`
- **Signature**: `DescribeSnapshotSchedule(DescribeSnapshotScheduleRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<DescribeSnapshotScheduleError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DescribeSnapshotScheduleRequest` | `src/AwsStorageGateway/Requests/AwsStorageGatewayApi/DescribeSnapshotScheduleRequest.cs` |
| `XAmzTarget59` | `src/AwsStorageGateway/Models/Enums/XAmzTarget59.cs` |
| `DescribeSnapshotScheduleError` | `src/AwsStorageGateway/Errors/DescribeSnapshotScheduleError.cs` |

### DescribeStorediScsiVolumes

- **Auth**: `options.Sigv4`
- **Signature**: `DescribeStorediScsiVolumes(DescribeStorediScsiVolumesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<DescribeStorediScsiVolumesError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DescribeStorediScsiVolumesRequest` | `src/AwsStorageGateway/Requests/AwsStorageGatewayApi/DescribeStorediScsiVolumesRequest.cs` |
| `XAmzTarget35` | `src/AwsStorageGateway/Models/Enums/XAmzTarget35.cs` |
| `DescribeStorediScsiVolumesError` | `src/AwsStorageGateway/Errors/DescribeStorediScsiVolumesError.cs` |

### DescribeTapeArchives

- **Auth**: `options.Sigv4`
- **Signature**: `DescribeTapeArchives(DescribeTapeArchivesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<DescribeTapeArchivesError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DescribeTapeArchivesRequest` | `src/AwsStorageGateway/Requests/AwsStorageGatewayApi/DescribeTapeArchivesRequest.cs` |
| `XAmzTarget62` | `src/AwsStorageGateway/Models/Enums/XAmzTarget62.cs` |
| `DescribeTapeArchivesError` | `src/AwsStorageGateway/Errors/DescribeTapeArchivesError.cs` |

### DescribeTapeRecoveryPoints

- **Auth**: `options.Sigv4`
- **Signature**: `DescribeTapeRecoveryPoints(DescribeTapeRecoveryPointsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<DescribeTapeRecoveryPointsError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DescribeTapeRecoveryPointsRequest` | `src/AwsStorageGateway/Requests/AwsStorageGatewayApi/DescribeTapeRecoveryPointsRequest.cs` |
| `XAmzTarget74` | `src/AwsStorageGateway/Models/Enums/XAmzTarget74.cs` |
| `DescribeTapeRecoveryPointsError` | `src/AwsStorageGateway/Errors/DescribeTapeRecoveryPointsError.cs` |

### DescribeTapes

- **Auth**: `options.Sigv4`
- **Signature**: `DescribeTapes(DescribeTapesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<DescribeTapesError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DescribeTapesRequest` | `src/AwsStorageGateway/Requests/AwsStorageGatewayApi/DescribeTapesRequest.cs` |
| `XAmzTarget42` | `src/AwsStorageGateway/Models/Enums/XAmzTarget42.cs` |
| `DescribeTapesError` | `src/AwsStorageGateway/Errors/DescribeTapesError.cs` |

### DescribeUploadBuffer

- **Auth**: `options.Sigv4`
- **Signature**: `DescribeUploadBuffer(DescribeUploadBufferRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<DescribeUploadBufferError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DescribeUploadBufferRequest` | `src/AwsStorageGateway/Requests/AwsStorageGatewayApi/DescribeUploadBufferRequest.cs` |
| `XAmzTarget15` | `src/AwsStorageGateway/Models/Enums/XAmzTarget15.cs` |
| `DescribeUploadBufferError` | `src/AwsStorageGateway/Errors/DescribeUploadBufferError.cs` |

### DescribeVtlDevices

- **Auth**: `options.Sigv4`
- **Signature**: `DescribeVtlDevices(DescribeVtlDevicesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<DescribeVtlDevicesError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DescribeVtlDevicesRequest` | `src/AwsStorageGateway/Requests/AwsStorageGatewayApi/DescribeVtlDevicesRequest.cs` |
| `XAmzTarget75` | `src/AwsStorageGateway/Models/Enums/XAmzTarget75.cs` |
| `DescribeVtlDevicesError` | `src/AwsStorageGateway/Errors/DescribeVtlDevicesError.cs` |

### DescribeWorkingStorage

- **Auth**: `options.Sigv4`
- **Signature**: `DescribeWorkingStorage(DescribeWorkingStorageRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<DescribeWorkingStorageError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DescribeWorkingStorageRequest` | `src/AwsStorageGateway/Requests/AwsStorageGatewayApi/DescribeWorkingStorageRequest.cs` |
| `XAmzTarget17` | `src/AwsStorageGateway/Models/Enums/XAmzTarget17.cs` |
| `DescribeWorkingStorageError` | `src/AwsStorageGateway/Errors/DescribeWorkingStorageError.cs` |

### DetachVolume

- **Auth**: `options.Sigv4`
- **Signature**: `DetachVolume(DetachVolumeRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<DetachVolumeError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DetachVolumeRequest` | `src/AwsStorageGateway/Requests/AwsStorageGatewayApi/DetachVolumeRequest.cs` |
| `XAmzTarget22` | `src/AwsStorageGateway/Models/Enums/XAmzTarget22.cs` |
| `DetachVolumeError` | `src/AwsStorageGateway/Errors/DetachVolumeError.cs` |

### DisableGateway

- **Auth**: `options.Sigv4`
- **Signature**: `DisableGateway(DisableGatewayRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<DisableGatewayError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DisableGatewayRequest` | `src/AwsStorageGateway/Requests/AwsStorageGatewayApi/DisableGatewayRequest.cs` |
| `XAmzTarget56` | `src/AwsStorageGateway/Models/Enums/XAmzTarget56.cs` |
| `DisableGatewayError` | `src/AwsStorageGateway/Errors/DisableGatewayError.cs` |

### DisassociateFileSystem

- **Auth**: `options.Sigv4`
- **Signature**: `DisassociateFileSystem(DisassociateFileSystemRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<DisassociateFileSystemError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DisassociateFileSystemRequest` | `src/AwsStorageGateway/Requests/AwsStorageGatewayApi/DisassociateFileSystemRequest.cs` |
| `XAmzTarget19` | `src/AwsStorageGateway/Models/Enums/XAmzTarget19.cs` |
| `DisassociateFileSystemError` | `src/AwsStorageGateway/Errors/DisassociateFileSystemError.cs` |

### JoinDomain

- **Auth**: `options.Sigv4`
- **Signature**: `JoinDomain(JoinDomainRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<JoinDomainError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `JoinDomainRequest` | `src/AwsStorageGateway/Requests/AwsStorageGatewayApi/JoinDomainRequest.cs` |
| `XAmzTarget2AwsStorageGatewayAwsStorageGatewayApi` | `src/AwsStorageGateway/Models/Enums/XAmzTarget2AwsStorageGatewayAwsStorageGatewayApi.cs` |
| `JoinDomainError` | `src/AwsStorageGateway/Errors/JoinDomainError.cs` |

### ListAutomaticTapeCreationPolicies

- **Auth**: `options.Sigv4`
- **Signature**: `ListAutomaticTapeCreationPolicies(ListAutomaticTapeCreationPoliciesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<ListAutomaticTapeCreationPoliciesError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListAutomaticTapeCreationPoliciesRequest` | `src/AwsStorageGateway/Requests/AwsStorageGatewayApi/ListAutomaticTapeCreationPoliciesRequest.cs` |
| `XAmzTarget45` | `src/AwsStorageGateway/Models/Enums/XAmzTarget45.cs` |
| `ListAutomaticTapeCreationPoliciesError` | `src/AwsStorageGateway/Errors/ListAutomaticTapeCreationPoliciesError.cs` |

### ListFileShares

- **Auth**: `options.Sigv4`
- **Signature**: `ListFileShares(ListFileSharesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<ListFileSharesError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListFileSharesRequest` | `src/AwsStorageGateway/Requests/AwsStorageGatewayApi/ListFileSharesRequest.cs` |
| `XAmzTarget54` | `src/AwsStorageGateway/Models/Enums/XAmzTarget54.cs` |
| `ListFileSharesError` | `src/AwsStorageGateway/Errors/ListFileSharesError.cs` |

### ListFileSystemAssociations

- **Auth**: `options.Sigv4`
- **Signature**: `ListFileSystemAssociations(ListFileSystemAssociationsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<ListFileSystemAssociationsError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListFileSystemAssociationsRequest` | `src/AwsStorageGateway/Requests/AwsStorageGatewayApi/ListFileSystemAssociationsRequest.cs` |
| `XAmzTarget68` | `src/AwsStorageGateway/Models/Enums/XAmzTarget68.cs` |
| `ListFileSystemAssociationsError` | `src/AwsStorageGateway/Errors/ListFileSystemAssociationsError.cs` |

### ListGateways2

- **Auth**: `options.Sigv4`
- **Signature**: `ListGateways2(ListGateways2Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<ListGateways2Error>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListGateways2Request` | `src/AwsStorageGateway/Requests/AwsStorageGatewayApi/ListGateways2Request.cs` |
| `XAmzTarget3` | `src/AwsStorageGateway/Models/Enums/XAmzTarget3.cs` |
| `ListGateways2Error` | `src/AwsStorageGateway/Errors/ListGateways2Error.cs` |

### ListLocalDisks

- **Auth**: `options.Sigv4`
- **Signature**: `ListLocalDisks(ListLocalDisksRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<ListLocalDisksError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListLocalDisksRequest` | `src/AwsStorageGateway/Requests/AwsStorageGatewayApi/ListLocalDisksRequest.cs` |
| `XAmzTarget76` | `src/AwsStorageGateway/Models/Enums/XAmzTarget76.cs` |
| `ListLocalDisksError` | `src/AwsStorageGateway/Errors/ListLocalDisksError.cs` |

### ListTagsForResource

- **Auth**: `options.Sigv4`
- **Signature**: `ListTagsForResource(ListTagsForResourceRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<ListTagsForResourceError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListTagsForResourceRequest` | `src/AwsStorageGateway/Requests/AwsStorageGatewayApi/ListTagsForResourceRequest.cs` |
| `XAmzTarget12` | `src/AwsStorageGateway/Models/Enums/XAmzTarget12.cs` |
| `ListTagsForResourceError` | `src/AwsStorageGateway/Errors/ListTagsForResourceError.cs` |

### ListTapePools

- **Auth**: `options.Sigv4`
- **Signature**: `ListTapePools(ListTapePoolsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<ListTapePoolsError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListTapePoolsRequest` | `src/AwsStorageGateway/Requests/AwsStorageGatewayApi/ListTapePoolsRequest.cs` |
| `XAmzTarget38` | `src/AwsStorageGateway/Models/Enums/XAmzTarget38.cs` |
| `ListTapePoolsError` | `src/AwsStorageGateway/Errors/ListTapePoolsError.cs` |

### ListTapes

- **Auth**: `options.Sigv4`
- **Signature**: `ListTapes(ListTapesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<ListTapesError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListTapesRequest` | `src/AwsStorageGateway/Requests/AwsStorageGatewayApi/ListTapesRequest.cs` |
| `XAmzTarget43` | `src/AwsStorageGateway/Models/Enums/XAmzTarget43.cs` |
| `ListTapesError` | `src/AwsStorageGateway/Errors/ListTapesError.cs` |

### ListVolumeInitiators

- **Auth**: `options.Sigv4`
- **Signature**: `ListVolumeInitiators(ListVolumeInitiatorsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<ListVolumeInitiatorsError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListVolumeInitiatorsRequest` | `src/AwsStorageGateway/Requests/AwsStorageGatewayApi/ListVolumeInitiatorsRequest.cs` |
| `XAmzTarget77` | `src/AwsStorageGateway/Models/Enums/XAmzTarget77.cs` |
| `ListVolumeInitiatorsError` | `src/AwsStorageGateway/Errors/ListVolumeInitiatorsError.cs` |

### ListVolumeRecoveryPoints

- **Auth**: `options.Sigv4`
- **Signature**: `ListVolumeRecoveryPoints(ListVolumeRecoveryPointsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<ListVolumeRecoveryPointsError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListVolumeRecoveryPointsRequest` | `src/AwsStorageGateway/Requests/AwsStorageGatewayApi/ListVolumeRecoveryPointsRequest.cs` |
| `XAmzTarget78` | `src/AwsStorageGateway/Models/Enums/XAmzTarget78.cs` |
| `ListVolumeRecoveryPointsError` | `src/AwsStorageGateway/Errors/ListVolumeRecoveryPointsError.cs` |

### ListVolumes2

- **Auth**: `options.Sigv4`
- **Signature**: `ListVolumes2(ListVolumes2Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<ListVolumes2Error>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListVolumes2Request` | `src/AwsStorageGateway/Requests/AwsStorageGatewayApi/ListVolumes2Request.cs` |
| `XAmzTarget1` | `src/AwsStorageGateway/Models/Enums/XAmzTarget1.cs` |
| `ListVolumes2Error` | `src/AwsStorageGateway/Errors/ListVolumes2Error.cs` |

### NotifyWhenUploaded

- **Auth**: `options.Sigv4`
- **Signature**: `NotifyWhenUploaded(NotifyWhenUploadedRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<NotifyWhenUploadedError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `NotifyWhenUploadedRequest` | `src/AwsStorageGateway/Requests/AwsStorageGatewayApi/NotifyWhenUploadedRequest.cs` |
| `XAmzTarget3AwsStorageGatewayAwsStorageGatewayApi` | `src/AwsStorageGateway/Models/Enums/XAmzTarget3AwsStorageGatewayAwsStorageGatewayApi.cs` |
| `NotifyWhenUploadedError` | `src/AwsStorageGateway/Errors/NotifyWhenUploadedError.cs` |

### RefreshCache

- **Auth**: `options.Sigv4`
- **Signature**: `RefreshCache(RefreshCacheRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<RefreshCacheError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `RefreshCacheRequest` | `src/AwsStorageGateway/Requests/AwsStorageGatewayApi/RefreshCacheRequest.cs` |
| `XAmzTarget4AwsStorageGatewayAwsStorageGatewayApi` | `src/AwsStorageGateway/Models/Enums/XAmzTarget4AwsStorageGatewayAwsStorageGatewayApi.cs` |
| `RefreshCacheError` | `src/AwsStorageGateway/Errors/RefreshCacheError.cs` |

### RemoveTagsFromResource

- **Auth**: `options.Sigv4`
- **Signature**: `RemoveTagsFromResource(RemoveTagsFromResourceRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<RemoveTagsFromResourceError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `RemoveTagsFromResourceRequest` | `src/AwsStorageGateway/Requests/AwsStorageGatewayApi/RemoveTagsFromResourceRequest.cs` |
| `XAmzTarget13` | `src/AwsStorageGateway/Models/Enums/XAmzTarget13.cs` |
| `RemoveTagsFromResourceError` | `src/AwsStorageGateway/Errors/RemoveTagsFromResourceError.cs` |

### ResetCache

- **Auth**: `options.Sigv4`
- **Signature**: `ResetCache(ResetCacheRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<ResetCacheError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ResetCacheRequest` | `src/AwsStorageGateway/Requests/AwsStorageGatewayApi/ResetCacheRequest.cs` |
| `XAmzTarget10` | `src/AwsStorageGateway/Models/Enums/XAmzTarget10.cs` |
| `ResetCacheError` | `src/AwsStorageGateway/Errors/ResetCacheError.cs` |

### RetrieveTapeArchive

- **Auth**: `options.Sigv4`
- **Signature**: `RetrieveTapeArchive(RetrieveTapeArchiveRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<RetrieveTapeArchiveError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `RetrieveTapeArchiveRequest` | `src/AwsStorageGateway/Requests/AwsStorageGatewayApi/RetrieveTapeArchiveRequest.cs` |
| `XAmzTarget5` | `src/AwsStorageGateway/Models/Enums/XAmzTarget5.cs` |
| `RetrieveTapeArchiveError` | `src/AwsStorageGateway/Errors/RetrieveTapeArchiveError.cs` |

### RetrieveTapeRecoveryPoint

- **Auth**: `options.Sigv4`
- **Signature**: `RetrieveTapeRecoveryPoint(RetrieveTapeRecoveryPointRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<RetrieveTapeRecoveryPointError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `RetrieveTapeRecoveryPointRequest` | `src/AwsStorageGateway/Requests/AwsStorageGatewayApi/RetrieveTapeRecoveryPointRequest.cs` |
| `XAmzTarget6` | `src/AwsStorageGateway/Models/Enums/XAmzTarget6.cs` |
| `RetrieveTapeRecoveryPointError` | `src/AwsStorageGateway/Errors/RetrieveTapeRecoveryPointError.cs` |

### SetLocalConsolePassword

- **Auth**: `options.Sigv4`
- **Signature**: `SetLocalConsolePassword(SetLocalConsolePasswordRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<SetLocalConsolePasswordError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `SetLocalConsolePasswordRequest` | `src/AwsStorageGateway/Requests/AwsStorageGatewayApi/SetLocalConsolePasswordRequest.cs` |
| `XAmzTarget79` | `src/AwsStorageGateway/Models/Enums/XAmzTarget79.cs` |
| `SetLocalConsolePasswordError` | `src/AwsStorageGateway/Errors/SetLocalConsolePasswordError.cs` |

### SetSmbGuestPassword

- **Auth**: `options.Sigv4`
- **Signature**: `SetSmbGuestPassword(SetSmbGuestPasswordRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<SetSmbGuestPasswordError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `SetSmbGuestPasswordRequest` | `src/AwsStorageGateway/Requests/AwsStorageGatewayApi/SetSmbGuestPasswordRequest.cs` |
| `XAmzTarget80` | `src/AwsStorageGateway/Models/Enums/XAmzTarget80.cs` |
| `SetSmbGuestPasswordError` | `src/AwsStorageGateway/Errors/SetSmbGuestPasswordError.cs` |

### ShutdownGateway

- **Auth**: `options.Sigv4`
- **Signature**: `ShutdownGateway(ShutdownGatewayRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<ShutdownGatewayError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ShutdownGatewayRequest` | `src/AwsStorageGateway/Requests/AwsStorageGatewayApi/ShutdownGatewayRequest.cs` |
| `XAmzTarget7` | `src/AwsStorageGateway/Models/Enums/XAmzTarget7.cs` |
| `ShutdownGatewayError` | `src/AwsStorageGateway/Errors/ShutdownGatewayError.cs` |

### StartAvailabilityMonitorTest

- **Auth**: `options.Sigv4`
- **Signature**: `StartAvailabilityMonitorTest(StartAvailabilityMonitorTestRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<StartAvailabilityMonitorTestError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `StartAvailabilityMonitorTestRequest` | `src/AwsStorageGateway/Requests/AwsStorageGatewayApi/StartAvailabilityMonitorTestRequest.cs` |
| `XAmzTarget64` | `src/AwsStorageGateway/Models/Enums/XAmzTarget64.cs` |
| `StartAvailabilityMonitorTestError` | `src/AwsStorageGateway/Errors/StartAvailabilityMonitorTestError.cs` |

### StartGateway

- **Auth**: `options.Sigv4`
- **Signature**: `StartGateway(StartGatewayRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<StartGatewayError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `StartGatewayRequest` | `src/AwsStorageGateway/Requests/AwsStorageGatewayApi/StartGatewayRequest.cs` |
| `XAmzTarget57` | `src/AwsStorageGateway/Models/Enums/XAmzTarget57.cs` |
| `StartGatewayError` | `src/AwsStorageGateway/Errors/StartGatewayError.cs` |

### UpdateAutomaticTapeCreationPolicy

- **Auth**: `options.Sigv4`
- **Signature**: `UpdateAutomaticTapeCreationPolicy(UpdateAutomaticTapeCreationPolicyRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<UpdateAutomaticTapeCreationPolicyError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UpdateAutomaticTapeCreationPolicyRequest` | `src/AwsStorageGateway/Requests/AwsStorageGatewayApi/UpdateAutomaticTapeCreationPolicyRequest.cs` |
| `XAmzTarget46` | `src/AwsStorageGateway/Models/Enums/XAmzTarget46.cs` |
| `UpdateAutomaticTapeCreationPolicyError` | `src/AwsStorageGateway/Errors/UpdateAutomaticTapeCreationPolicyError.cs` |

### UpdateBandwidthRateLimit

- **Auth**: `options.Sigv4`
- **Signature**: `UpdateBandwidthRateLimit(UpdateBandwidthRateLimitRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<UpdateBandwidthRateLimitError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UpdateBandwidthRateLimitRequest` | `src/AwsStorageGateway/Requests/AwsStorageGatewayApi/UpdateBandwidthRateLimitRequest.cs` |
| `XAmzTarget49` | `src/AwsStorageGateway/Models/Enums/XAmzTarget49.cs` |
| `UpdateBandwidthRateLimitError` | `src/AwsStorageGateway/Errors/UpdateBandwidthRateLimitError.cs` |

### UpdateBandwidthRateLimitSchedule

- **Auth**: `options.Sigv4`
- **Signature**: `UpdateBandwidthRateLimitSchedule(UpdateBandwidthRateLimitScheduleRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<UpdateBandwidthRateLimitScheduleError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UpdateBandwidthRateLimitScheduleRequest` | `src/AwsStorageGateway/Requests/AwsStorageGatewayApi/UpdateBandwidthRateLimitScheduleRequest.cs` |
| `XAmzTarget66` | `src/AwsStorageGateway/Models/Enums/XAmzTarget66.cs` |
| `UpdateBandwidthRateLimitScheduleError` | `src/AwsStorageGateway/Errors/UpdateBandwidthRateLimitScheduleError.cs` |

### UpdateChapCredentials

- **Auth**: `options.Sigv4`
- **Signature**: `UpdateChapCredentials(UpdateChapCredentialsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<UpdateChapCredentialsError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UpdateChapCredentialsRequest` | `src/AwsStorageGateway/Requests/AwsStorageGatewayApi/UpdateChapCredentialsRequest.cs` |
| `XAmzTarget52` | `src/AwsStorageGateway/Models/Enums/XAmzTarget52.cs` |
| `UpdateChapCredentialsError` | `src/AwsStorageGateway/Errors/UpdateChapCredentialsError.cs` |

### UpdateFileSystemAssociation

- **Auth**: `options.Sigv4`
- **Signature**: `UpdateFileSystemAssociation(UpdateFileSystemAssociationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<UpdateFileSystemAssociationError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UpdateFileSystemAssociationRequest` | `src/AwsStorageGateway/Requests/AwsStorageGatewayApi/UpdateFileSystemAssociationRequest.cs` |
| `XAmzTarget69` | `src/AwsStorageGateway/Models/Enums/XAmzTarget69.cs` |
| `UpdateFileSystemAssociationError` | `src/AwsStorageGateway/Errors/UpdateFileSystemAssociationError.cs` |

### UpdateGatewayInformation

- **Auth**: `options.Sigv4`
- **Signature**: `UpdateGatewayInformation(UpdateGatewayInformationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<UpdateGatewayInformationError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UpdateGatewayInformationRequest` | `src/AwsStorageGateway/Requests/AwsStorageGatewayApi/UpdateGatewayInformationRequest.cs` |
| `XAmzTarget70` | `src/AwsStorageGateway/Models/Enums/XAmzTarget70.cs` |
| `UpdateGatewayInformationError` | `src/AwsStorageGateway/Errors/UpdateGatewayInformationError.cs` |

### UpdateGatewaySoftwareNow

- **Auth**: `options.Sigv4`
- **Signature**: `UpdateGatewaySoftwareNow(UpdateGatewaySoftwareNowRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<UpdateGatewaySoftwareNowError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UpdateGatewaySoftwareNowRequest` | `src/AwsStorageGateway/Requests/AwsStorageGatewayApi/UpdateGatewaySoftwareNowRequest.cs` |
| `XAmzTarget81` | `src/AwsStorageGateway/Models/Enums/XAmzTarget81.cs` |
| `UpdateGatewaySoftwareNowError` | `src/AwsStorageGateway/Errors/UpdateGatewaySoftwareNowError.cs` |

### UpdateMaintenanceStartTime

- **Auth**: `options.Sigv4`
- **Signature**: `UpdateMaintenanceStartTime(UpdateMaintenanceStartTimeRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<UpdateMaintenanceStartTimeError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UpdateMaintenanceStartTimeRequest` | `src/AwsStorageGateway/Requests/AwsStorageGatewayApi/UpdateMaintenanceStartTimeRequest.cs` |
| `XAmzTarget72` | `src/AwsStorageGateway/Models/Enums/XAmzTarget72.cs` |
| `UpdateMaintenanceStartTimeError` | `src/AwsStorageGateway/Errors/UpdateMaintenanceStartTimeError.cs` |

### UpdateNfsFileShare

- **Auth**: `options.Sigv4`
- **Signature**: `UpdateNfsFileShare(UpdateNfsFileShareRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<UpdateNfsFileShareError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UpdateNfsFileShareRequest` | `src/AwsStorageGateway/Requests/AwsStorageGatewayApi/UpdateNfsFileShareRequest.cs` |
| `XAmzTarget28` | `src/AwsStorageGateway/Models/Enums/XAmzTarget28.cs` |
| `UpdateNfsFileShareError` | `src/AwsStorageGateway/Errors/UpdateNfsFileShareError.cs` |

### UpdateSmbFileShare

- **Auth**: `options.Sigv4`
- **Signature**: `UpdateSmbFileShare(UpdateSmbFileShareRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<UpdateSmbFileShareError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UpdateSmbFileShareRequest` | `src/AwsStorageGateway/Requests/AwsStorageGatewayApi/UpdateSmbFileShareRequest.cs` |
| `XAmzTarget31` | `src/AwsStorageGateway/Models/Enums/XAmzTarget31.cs` |
| `UpdateSmbFileShareError` | `src/AwsStorageGateway/Errors/UpdateSmbFileShareError.cs` |

### UpdateSmbFileShareVisibility

- **Auth**: `options.Sigv4`
- **Signature**: `UpdateSmbFileShareVisibility(UpdateSmbFileShareVisibilityRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<UpdateSmbFileShareVisibilityError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UpdateSmbFileShareVisibilityRequest` | `src/AwsStorageGateway/Requests/AwsStorageGatewayApi/UpdateSmbFileShareVisibilityRequest.cs` |
| `XAmzTarget82` | `src/AwsStorageGateway/Models/Enums/XAmzTarget82.cs` |
| `UpdateSmbFileShareVisibilityError` | `src/AwsStorageGateway/Errors/UpdateSmbFileShareVisibilityError.cs` |

### UpdateSmbLocalGroups

- **Auth**: `options.Sigv4`
- **Signature**: `UpdateSmbLocalGroups(UpdateSmbLocalGroupsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<UpdateSmbLocalGroupsError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UpdateSmbLocalGroupsRequest` | `src/AwsStorageGateway/Requests/AwsStorageGatewayApi/UpdateSmbLocalGroupsRequest.cs` |
| `XAmzTarget83` | `src/AwsStorageGateway/Models/Enums/XAmzTarget83.cs` |
| `UpdateSmbLocalGroupsError` | `src/AwsStorageGateway/Errors/UpdateSmbLocalGroupsError.cs` |

### UpdateSmbSecurityStrategy

- **Auth**: `options.Sigv4`
- **Signature**: `UpdateSmbSecurityStrategy(UpdateSmbSecurityStrategyRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<UpdateSmbSecurityStrategyError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UpdateSmbSecurityStrategyRequest` | `src/AwsStorageGateway/Requests/AwsStorageGatewayApi/UpdateSmbSecurityStrategyRequest.cs` |
| `XAmzTarget84` | `src/AwsStorageGateway/Models/Enums/XAmzTarget84.cs` |
| `UpdateSmbSecurityStrategyError` | `src/AwsStorageGateway/Errors/UpdateSmbSecurityStrategyError.cs` |

### UpdateSnapshotSchedule

- **Auth**: `options.Sigv4`
- **Signature**: `UpdateSnapshotSchedule(UpdateSnapshotScheduleRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<UpdateSnapshotScheduleError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UpdateSnapshotScheduleRequest` | `src/AwsStorageGateway/Requests/AwsStorageGatewayApi/UpdateSnapshotScheduleRequest.cs` |
| `XAmzTarget60` | `src/AwsStorageGateway/Models/Enums/XAmzTarget60.cs` |
| `UpdateSnapshotScheduleError` | `src/AwsStorageGateway/Errors/UpdateSnapshotScheduleError.cs` |

### UpdateVtlDeviceType

- **Auth**: `options.Sigv4`
- **Signature**: `UpdateVtlDeviceType(UpdateVtlDeviceTypeRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<UpdateVtlDeviceTypeError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UpdateVtlDeviceTypeRequest` | `src/AwsStorageGateway/Requests/AwsStorageGatewayApi/UpdateVtlDeviceTypeRequest.cs` |
| `XAmzTarget85` | `src/AwsStorageGateway/Models/Enums/XAmzTarget85.cs` |
| `UpdateVtlDeviceTypeError` | `src/AwsStorageGateway/Errors/UpdateVtlDeviceTypeError.cs` |

