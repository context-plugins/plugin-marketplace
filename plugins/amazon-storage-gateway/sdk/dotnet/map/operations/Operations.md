<!-- Generated file — do not edit; regenerated with the SDK. -->

# Operations — operations

Accessor: `client.Operations` · Source: `src/AwsStorageGateway/Api/Operations.cs` · 9 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### ActivateGateway3

- **Auth**: `options.Sigv4`
- **Signature**: `ActivateGateway3(ActivateGateway3Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<ActivateGateway3Error>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ActivateGateway3Request` | `src/AwsStorageGateway/Requests/Operations/ActivateGateway3Request.cs` |
| `XAmzTarget` | `src/AwsStorageGateway/Models/Enums/XAmzTarget.cs` |
| `ActivateGateway3Error` | `src/AwsStorageGateway/Errors/ActivateGateway3Error.cs` |

### AssignTapePool2

- **Auth**: `options.Sigv4`
- **Signature**: `AssignTapePool2(AssignTapePool2Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<AssignTapePool2Error>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `AssignTapePool2Request` | `src/AwsStorageGateway/Requests/Operations/AssignTapePool2Request.cs` |
| `XAmzTarget1AwsStorageGatewayAwsStorageGatewayApi` | `src/AwsStorageGateway/Models/Enums/XAmzTarget1AwsStorageGatewayAwsStorageGatewayApi.cs` |
| `AssignTapePool2Error` | `src/AwsStorageGateway/Errors/AssignTapePool2Error.cs` |

### EvictFilesFailingUpload

- **Auth**: `options.Sigv4`
- **Signature**: `EvictFilesFailingUpload(EvictFilesFailingUploadRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<EvictFilesFailingUploadError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `EvictFilesFailingUploadRequest` | `src/AwsStorageGateway/Requests/Operations/EvictFilesFailingUploadRequest.cs` |
| `XAmzTarget2AwsStorageGatewayOperationsApi` | `src/AwsStorageGateway/Models/Enums/XAmzTarget2AwsStorageGatewayOperationsApi.cs` |
| `EvictFilesFailingUploadError` | `src/AwsStorageGateway/Errors/EvictFilesFailingUploadError.cs` |

### JoinDomain2

- **Auth**: `options.Sigv4`
- **Signature**: `JoinDomain2(JoinDomain2Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<JoinDomain2Error>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `JoinDomain2Request` | `src/AwsStorageGateway/Requests/Operations/JoinDomain2Request.cs` |
| `XAmzTarget3AwsStorageGatewayOperationsApi` | `src/AwsStorageGateway/Models/Enums/XAmzTarget3AwsStorageGatewayOperationsApi.cs` |
| `JoinDomain2Error` | `src/AwsStorageGateway/Errors/JoinDomain2Error.cs` |

### NotifyWhenUploaded2

- **Auth**: `options.Sigv4`
- **Signature**: `NotifyWhenUploaded2(NotifyWhenUploaded2Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<NotifyWhenUploaded2Error>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `NotifyWhenUploaded2Request` | `src/AwsStorageGateway/Requests/Operations/NotifyWhenUploaded2Request.cs` |
| `XAmzTarget4AwsStorageGatewayOperationsApi` | `src/AwsStorageGateway/Models/Enums/XAmzTarget4AwsStorageGatewayOperationsApi.cs` |
| `NotifyWhenUploaded2Error` | `src/AwsStorageGateway/Errors/NotifyWhenUploaded2Error.cs` |

### RefreshCache2

- **Auth**: `options.Sigv4`
- **Signature**: `RefreshCache2(RefreshCache2Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<RefreshCache2Error>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `RefreshCache2Request` | `src/AwsStorageGateway/Requests/Operations/RefreshCache2Request.cs` |
| `XAmzTarget5AwsStorageGatewayOperationsApi` | `src/AwsStorageGateway/Models/Enums/XAmzTarget5AwsStorageGatewayOperationsApi.cs` |
| `RefreshCache2Error` | `src/AwsStorageGateway/Errors/RefreshCache2Error.cs` |

### RetrieveTapeArchive2

- **Auth**: `options.Sigv4`
- **Signature**: `RetrieveTapeArchive2(RetrieveTapeArchive2Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<RetrieveTapeArchive2Error>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `RetrieveTapeArchive2Request` | `src/AwsStorageGateway/Requests/Operations/RetrieveTapeArchive2Request.cs` |
| `XAmzTarget6AwsStorageGatewayOperationsApi` | `src/AwsStorageGateway/Models/Enums/XAmzTarget6AwsStorageGatewayOperationsApi.cs` |
| `RetrieveTapeArchive2Error` | `src/AwsStorageGateway/Errors/RetrieveTapeArchive2Error.cs` |

### RetrieveTapeRecoveryPoint2

- **Auth**: `options.Sigv4`
- **Signature**: `RetrieveTapeRecoveryPoint2(RetrieveTapeRecoveryPoint2Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<RetrieveTapeRecoveryPoint2Error>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `RetrieveTapeRecoveryPoint2Request` | `src/AwsStorageGateway/Requests/Operations/RetrieveTapeRecoveryPoint2Request.cs` |
| `XAmzTarget7AwsStorageGatewayOperationsApi` | `src/AwsStorageGateway/Models/Enums/XAmzTarget7AwsStorageGatewayOperationsApi.cs` |
| `RetrieveTapeRecoveryPoint2Error` | `src/AwsStorageGateway/Errors/RetrieveTapeRecoveryPoint2Error.cs` |

### ShutdownGateway2

- **Auth**: `options.Sigv4`
- **Signature**: `ShutdownGateway2(ShutdownGateway2Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<ShutdownGateway2Error>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ShutdownGateway2Request` | `src/AwsStorageGateway/Requests/Operations/ShutdownGateway2Request.cs` |
| `XAmzTarget8AwsStorageGatewayOperationsApi` | `src/AwsStorageGateway/Models/Enums/XAmzTarget8AwsStorageGatewayOperationsApi.cs` |
| `ShutdownGateway2Error` | `src/AwsStorageGateway/Errors/ShutdownGateway2Error.cs` |

